#!/usr/bin/env python3
"""Build an offline runnable package for Demo V4."""

from __future__ import annotations

import json
import shutil
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RELEASE_DIR = ROOT / "release"
PACKAGE_NAME = "电子电工题库-离线包-v4"
PACKAGE_DIR = RELEASE_DIR / PACKAGE_NAME
APP_DIR = PACKAGE_DIR / "app"
ZIP_PATH = RELEASE_DIR / f"{PACKAGE_NAME}.zip"


def copy_tree(src: Path, dst: Path) -> None:
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst)


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def source_summary() -> tuple[int, int]:
    report_path = ROOT / "demos/assets/source-parse-report.json"
    if not report_path.exists():
        return (0, 0)

    rows = json.loads(report_path.read_text(encoding="utf-8"))
    parsed_sources = sum(1 for row in rows if row.get("status") == "parsed")
    parsed_questions = sum(int(row.get("parsed_questions") or 0) for row in rows)
    return parsed_sources, parsed_questions


def build_package() -> None:
    RELEASE_DIR.mkdir(parents=True, exist_ok=True)
    if PACKAGE_DIR.exists():
        shutil.rmtree(PACKAGE_DIR)

    APP_DIR.mkdir(parents=True, exist_ok=True)

    copy_tree(ROOT / "demos", APP_DIR / "demos")
    copy_tree(ROOT / "docs", APP_DIR / "docs")

    parsed_sources, parsed_questions = source_summary()
    generated_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    readme = f"""# 电子电工题库离线包（Demo V4）

生成时间：{generated_at}
题源解析：已解析 {parsed_sources} 个题源，共 {parsed_questions} 道题。

## 目录结构
- `app/demos/demo-v4-real-source-showcase.html`：主演示页面
- `app/demos/assets/question-bank-40.js`：题库数据（当前为全量解析结果）
- `app/demos/assets/source-parse-report.json`：题源解析覆盖报告

## 命令行安装（如缺 Python）
只需 Python 3（无需 Node、无需外网服务）。

### Windows（PowerShell）
```powershell
winget install -e --id Python.Python.3.11
```

### macOS（Terminal）
```bash
brew install python
```

### Ubuntu / Debian
```bash
sudo apt update && sudo apt install -y python3
```

## 命令行启动（推荐）
先进入离线包目录，再启动本地服务：

### Windows（PowerShell）
```powershell
cd .\\电子电工题库-离线包-v4\\app
py -m http.server 5174
```

### macOS / Linux（Terminal）
```bash
cd ./电子电工题库-离线包-v4/app
python3 -m http.server 5174
```

启动后访问：
- [http://localhost:5174/demos/demo-v4-real-source-showcase.html](http://localhost:5174/demos/demo-v4-real-source-showcase.html)

## 一键脚本（可选）
- Windows：`启动题库.bat`
- macOS：`启动题库.command`
- Linux：`bash 启动题库.sh`

## 关闭服务
- 在启动脚本所在终端按 `Ctrl + C`。
"""
    write_text(PACKAGE_DIR / "README-离线部署说明.md", readme)

    mac_cmd = """#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
APP="$DIR/app"
URL="http://localhost:5174/demos/demo-v4-real-source-showcase.html"

if command -v python3 >/dev/null 2>&1; then
  cd "$APP"
  (sleep 1; open "$URL" >/dev/null 2>&1 || true) &
  python3 -m http.server 5174
else
  open "$APP/demos/demo-v4-real-source-showcase.html"
fi
"""
    write_text(PACKAGE_DIR / "启动题库.command", mac_cmd)

    linux_sh = """#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
APP="$DIR/app"
URL="http://localhost:5174/demos/demo-v4-real-source-showcase.html"

if command -v python3 >/dev/null 2>&1; then
  cd "$APP"
  (sleep 1; xdg-open "$URL" >/dev/null 2>&1 || true) &
  python3 -m http.server 5174
else
  xdg-open "$APP/demos/demo-v4-real-source-showcase.html" >/dev/null 2>&1 || true
fi
"""
    write_text(PACKAGE_DIR / "启动题库.sh", linux_sh)

    win_bat = r"""@echo off
setlocal
set DIR=%~dp0
set APP=%DIR%app
set URL=http://localhost:5174/demos/demo-v4-real-source-showcase.html

where py >nul 2>nul
if %errorlevel%==0 (
  cd /d "%APP%"
  start "" "%URL%"
  py -m http.server 5174
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  cd /d "%APP%"
  start "" "%URL%"
  python -m http.server 5174
  goto :eof
)

start "" "%APP%\demos\demo-v4-real-source-showcase.html"
"""
    write_text(PACKAGE_DIR / "启动题库.bat", win_bat)

    (PACKAGE_DIR / "启动题库.command").chmod(0o755)
    (PACKAGE_DIR / "启动题库.sh").chmod(0o755)

    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    shutil.make_archive(str(ZIP_PATH.with_suffix("")), "zip", root_dir=RELEASE_DIR, base_dir=PACKAGE_NAME)

    print(f"Offline package directory: {PACKAGE_DIR}")
    print(f"Offline zip package: {ZIP_PATH}")


if __name__ == "__main__":
    build_package()
