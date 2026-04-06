#!/usr/bin/env python3
"""Build question bank from all available PDF sources.

- Parse multiple-choice questions (A/B/C/D options) from each PDF.
- If answer keys are found in the PDF, attach answers; otherwise keep answer as null.
- Extract figure images and attach to questions that contain figure hints.
- Write browser-ready JS question bank and a parse report JSON.
"""

from __future__ import annotations

import hashlib
import json
import re
import shutil
import subprocess
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REFERENCE_DIR = Path(
    "/Users/dqc76/Documents/Incubation Project|孵化&闭环潜力项目/电子电路在线题库/电子电工类试题库参考资料"
)
OUTPUT_JS = ROOT / "demos/assets/question-bank-40.js"
OUTPUT_IMAGE_BASE = ROOT / "demos/assets/source-images"
OUTPUT_REPORT = ROOT / "demos/assets/source-parse-report.json"

ANSWER_CHOICES = {"A", "B", "C", "D"}


def run(*args: str) -> str:
    result = subprocess.run(args, check=True, text=True, capture_output=True)
    return result.stdout


def normalize_text(text: str) -> str:
    text = unicodedata.normalize("NFKC", text)
    text = text.replace("\x0c", "\n")
    text = text.replace("\r", "\n")
    return text


def source_slug(filename: str) -> str:
    stem = Path(filename).stem
    ascii_stem = (
        unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode("ascii").lower()
    )
    ascii_stem = re.sub(r"[^a-z0-9]+", "-", ascii_stem).strip("-")
    if not ascii_stem:
        ascii_stem = "source"
    return f"{ascii_stem[:22]}-{hashlib.sha1(filename.encode('utf-8')).hexdigest()[:6]}"


def chapter_name(filename: str) -> str:
    stem = Path(filename).stem
    stem = re.sub(r"\s+", " ", stem).strip()
    if len(stem) <= 14:
        return stem
    return stem[:14] + "…"


def get_answer_section(full_text: str) -> str:
    markers = [
        r"参考答案",
        r"试卷参考答案",
        r"答案与解析",
        r"答案解析",
        r"单项选择题答案",
    ]
    text_len = len(full_text)
    hit_pos: list[int] = []
    for marker in markers:
        for m in re.finditer(marker, full_text):
            if m.start() > int(text_len * 0.45):
                hit_pos.append(m.start())
    if not hit_pos:
        return ""
    start = min(hit_pos)
    return full_text[start:]


def parse_answer_map(full_text: str) -> dict[int, str]:
    answers: dict[int, str] = {}
    answer_section = get_answer_section(full_text)
    if not answer_section:
        return answers

    lines = [ln.strip() for ln in answer_section.splitlines()]

    # Pattern A: one answer per line, e.g. "1. C"
    for line in lines:
        match = re.match(r"^(\d{1,3})\s*[\.．、:：]\s*([ABCD])\b", line)
        if match:
            qno = int(match.group(1))
            if qno not in answers:
                answers[qno] = match.group(2)

    # Pattern B: compact list in one line, e.g. "1A 2C 3D 4B ..."
    for line in lines:
        if len(line) > 220:
            continue
        pairs = re.findall(r"(\d{1,3})\s*[\.．、:：]?\s*([ABCD])(?=\s|$)", line)
        if len(pairs) < 4:
            continue
        for no, ans in pairs:
            qno = int(no)
            if qno not in answers:
                answers[qno] = ans

    # Pattern C: ranged compact answer, e.g. "1-10: ABCDABCDAB"
    for line in lines:
        m = re.search(r"(\d{1,3})\s*[-~到]\s*(\d{1,3})\s*[：:]\s*([ABCD]{4,})", line)
        if not m:
            continue
        start = int(m.group(1))
        end = int(m.group(2))
        seq = m.group(3)
        expected = end - start + 1
        if expected <= 0 or len(seq) < expected:
            continue
        for i in range(expected):
            qno = start + i
            if qno not in answers:
                answers[qno] = seq[i]

    return answers


def get_exam_body(full_text: str) -> str:
    markers = [
        r"参考答案",
        r"试卷参考答案",
        r"答案与解析",
        r"答案解析",
        r"单项选择题答案",
    ]
    text_len = len(full_text)
    hit_pos: list[int] = []
    for marker in markers:
        for m in re.finditer(marker, full_text):
            # Ignore early occurrences (e.g., notice text containing "答案")
            if m.start() > int(text_len * 0.45):
                hit_pos.append(m.start())
    if not hit_pos:
        return full_text
    return full_text[: min(hit_pos)]


def clean_inline_text(text: str) -> str:
    text = re.sub(r"《.*?》试卷 第\s*\d+\s*页.*", " ", text)
    text = re.sub(r"电子与电工类试卷 第\s*\d+\s*页.*", " ", text)
    text = re.sub(r"—\s*\d+\s*—", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def clean_fragment(text: str) -> str:
    text = re.sub(r"第\s*\d+\s*题图", " ", text)
    text = re.sub(r"—\s*\d+\s*—", " ", text)
    text = re.sub(r"\(\s*\)", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip(" ：:。;；")


def parse_mcq_from_block(block_text: str) -> tuple[str, list[str]] | None:
    text = clean_inline_text(block_text)
    marker_regex = re.compile(r"(?:^|\s)([ABCD])\s*[\.．、]")
    markers = list(marker_regex.finditer(text))
    if len(markers) < 4:
        return None

    a_idx = -1
    for i in range(len(markers) - 3):
        seq = "".join(markers[i + j].group(1) for j in range(4))
        if seq == "ABCD":
            a_idx = i
            break
    if a_idx < 0:
        return None

    a_m = markers[a_idx]
    b_m = markers[a_idx + 1]
    c_m = markers[a_idx + 2]
    d_m = markers[a_idx + 3]

    stem = clean_fragment(text[: a_m.start()])
    opt_a = clean_fragment(text[a_m.end() : b_m.start()])
    opt_b = clean_fragment(text[b_m.end() : c_m.start()])
    opt_c = clean_fragment(text[c_m.end() : d_m.start()])
    opt_d = clean_fragment(text[d_m.end() :])

    if not stem or not opt_a or not opt_b or not opt_c or not opt_d:
        return None

    return stem, [opt_a, opt_b, opt_c, opt_d]


def extract_question_blocks(exam_body: str) -> list[tuple[int, str]]:
    blocks: list[tuple[int, str]] = []
    current_no: int | None = None
    current_lines: list[str] = []

    for raw_line in exam_body.splitlines():
        line = raw_line.rstrip()
        match = re.match(r"^\s*(\d{1,3})\s*[\.．、]\s*(.*)$", line)
        if match:
            if current_no is not None:
                blocks.append((current_no, "\n".join(current_lines)))
            current_no = int(match.group(1))
            current_lines = [match.group(2).strip()]
            continue

        if current_no is not None:
            current_lines.append(line)

    if current_no is not None:
        blocks.append((current_no, "\n".join(current_lines)))

    return blocks


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as fh:
        sig = fh.read(8)
        if sig != b"\x89PNG\r\n\x1a\n":
            return (0, 0)
        _len = int.from_bytes(fh.read(4), "big")
        chunk = fh.read(4)
        if chunk != b"IHDR":
            return (0, 0)
        width = int.from_bytes(fh.read(4), "big")
        height = int.from_bytes(fh.read(4), "big")
    return (width, height)


def extract_images(source_pdf: Path, out_dir: Path) -> list[Path]:
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    prefix = out_dir / "img"
    try:
        subprocess.run(
            ["pdfimages", "-png", str(source_pdf), str(prefix)],
            check=True,
            text=True,
            capture_output=True,
        )
    except subprocess.CalledProcessError:
        return []

    all_pngs = sorted(out_dir.glob("img-*.png"))
    usable: list[Path] = []
    for png in all_pngs:
        width, height = png_size(png)
        if width >= 120 and height >= 80:
            usable.append(png)
    return usable


def question_has_figure(stem: str) -> bool:
    return bool(re.search(r"如图|题图|图所示|下图", stem))


def parse_source(pdf_path: Path) -> tuple[list[dict], dict]:
    raw_text = run("pdftotext", "-layout", str(pdf_path), "-")
    full_text = normalize_text(raw_text)
    answer_map = parse_answer_map(full_text)
    exam_body = get_exam_body(full_text)
    blocks = extract_question_blocks(exam_body)

    parsed_items: list[dict] = []
    for qno, block in blocks:
        parsed = parse_mcq_from_block(block)
        if not parsed:
            continue
        stem, options = parsed
        answer = answer_map.get(qno)
        if answer not in ANSWER_CHOICES:
            answer = None

        parsed_items.append(
            {
                "sourceNo": qno,
                "stem": stem,
                "options": options,
                "answer": answer,
                "hasFigure": question_has_figure(stem),
                "dedupeKey": hashlib.sha1(f"{qno}|{stem}".encode("utf-8")).hexdigest()[:16],
            }
        )

    unique: list[dict] = []
    seen: set[str] = set()
    for item in parsed_items:
        if item["dedupeKey"] in seen:
            continue
        seen.add(item["dedupeKey"])
        unique.append(item)

    slug = source_slug(pdf_path.name)
    image_dir = OUTPUT_IMAGE_BASE / slug
    needs_figure = any(item["hasFigure"] for item in unique)
    usable_images: list[Path] = extract_images(pdf_path, image_dir) if needs_figure else []
    fig_index = 0

    result_questions: list[dict] = []
    for item in unique:
        image_path = None
        if item["hasFigure"] and fig_index < len(usable_images):
            img = usable_images[fig_index]
            fig_index += 1
            image_path = f"./assets/source-images/{slug}/{img.name}"

        result_questions.append(
            {
                "chapter": chapter_name(pdf_path.name),
                "source": pdf_path.name,
                "sourceNo": item["sourceNo"],
                "type": "single-choice",
                "stem": item["stem"],
                "options": [
                    f"A. {item['options'][0]}",
                    f"B. {item['options'][1]}",
                    f"C. {item['options'][2]}",
                    f"D. {item['options'][3]}",
                ],
                "answer": item["answer"],
                "image": image_path,
            }
        )

    stats = {
        "source": pdf_path.name,
        "slug": slug,
        "text_chars": len(full_text.strip()),
        "answer_lines": len(answer_map),
        "numbered_blocks": len(blocks),
        "parsed_questions": len(result_questions),
        "gradable_questions": sum(1 for q in result_questions if q["answer"] in ANSWER_CHOICES),
        "with_images": sum(1 for q in result_questions if q["image"]),
        "status": "parsed" if result_questions else "no-questions",
    }
    if stats["text_chars"] == 0:
        stats["status"] = "no-text-likely-scanned"

    return result_questions, stats


def build_question_bank() -> tuple[list[dict], list[dict]]:
    pdfs = sorted(REFERENCE_DIR.glob("*.pdf"))
    combined: list[dict] = []
    report: list[dict] = []

    for pdf in pdfs:
        questions, stats = parse_source(pdf)
        report.append(stats)
        combined.extend(questions)

    if not combined:
        raise RuntimeError("No parseable multiple-choice questions found from provided PDF sources.")

    result: list[dict] = []
    for idx, q in enumerate(combined, start=1):
        result.append(
            {
                "id": f"Q{idx:03d}",
                "chapter": q["chapter"],
                "type": q["type"],
                "stem": q["stem"],
                "options": q["options"],
                "answer": q["answer"],
                "image": q["image"],
                "explain": {
                    "template": "source_pdf",
                    "params": {
                        "source": q["source"],
                        "sourceNo": q["sourceNo"],
                    },
                },
            }
        )

    return result, report


def write_js(question_bank: list[dict]) -> None:
    payload = json.dumps(question_bank, ensure_ascii=False, indent=2)
    code = (
        "(function initQuestionBank(global) {\n"
        "  'use strict';\n\n"
        f"  var questions = {payload};\n\n"
        "  global.QuestionBank40 = questions;\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n"
    )
    OUTPUT_JS.write_text(code, encoding="utf-8")


def main() -> None:
    if OUTPUT_IMAGE_BASE.exists():
        shutil.rmtree(OUTPUT_IMAGE_BASE)
    OUTPUT_IMAGE_BASE.mkdir(parents=True, exist_ok=True)
    bank, report = build_question_bank()
    write_js(bank)
    OUTPUT_REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    gradable = sum(1 for q in bank if q["answer"] in ANSWER_CHOICES)
    print(f"Generated {len(bank)} questions ({gradable} gradable) -> {OUTPUT_JS}")
    print(f"Wrote parse report -> {OUTPUT_REPORT}")


if __name__ == "__main__":
    main()
