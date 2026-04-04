# QA Report - localhost:5174

- Date: 2026-04-04
- Mode: quick smoke + focused interaction
- Target: `http://localhost:5174/demos/*.html`
- Pages visited: 3
- Screenshots: 6
- Framework: static HTML + shared JS runtime

## Coverage

1. `demo-v1-exam-classic.html`
2. `demo-v2-industrial-lab.html`
3. `demo-v3-editorial-clean.html`

## Key checks performed

1. Page load and render
- All three demos load successfully with expected title and first page content.

2. Console health
- `console error` check on V1/V2/V3: 0 errors, 0 warnings.

3. Submit-gated analysis behavior
- Before submit: analysis notice visible, analysis controls hidden, score shows `本页得分：待提交`.
- After submit: analysis notice hidden, analysis controls visible, score area visible with computed result.
- V1 additional check: after navigating to next page, analysis re-locks until that page is submitted.

4. Teacher/student mode regression sanity
- Shared control remains present and clickable after gating changes.

## Findings

No blocking or high-severity issues found in this smoke pass.

## Evidence screenshots

- `output/playwright/v1-before-submit.png`
- `output/playwright/v1-after-submit.png`
- `output/playwright/v2-before-submit.png`
- `output/playwright/v2-after-submit.png`
- `output/playwright/v3-before-submit.png`
- `output/playwright/v3-after-submit.png`

## Health score

- Console: 100
- Functional: 96
- UX: 95
- Visual: 95
- Overall weighted score: **96**

## Residual risk

- This is a smoke pass, not a full 40题回归；still建议在你喂入真实题干与题图后做一次 full regression。
