# 电子电工线上题库（Demo 项目）

本仓库用于中职电子电工专业题库 Demo 开发与演示，当前包含 4 个前端 Demo，其中 `V4` 为主线版本（学生端/教师端双模式）。

## 1. 当前能力（V4）

- 学生端：每次作答 4 题，提交后显示总分。
- 教师端：题源筛选、四题组卷、提交后查看解析与统计。
- 题库数据：支持从 PDF 批量解析题干、选项与题图。
- 离线部署：支持生成可迁移离线包（无外网也可运行）。

## 2. 目录说明

- `demos/`：前端演示页面（`demo-v1 ~ demo-v4`）。
- `demos/assets/question-bank-40.js`：题库数据（当前为全量解析结果，文件名沿用历史命名）。
- `demos/assets/source-images/`：题图资源。
- `demos/assets/source-parse-report.json`：题源解析报告（解析数量、可评分数量、状态）。
- `scripts/build_question_bank_from_pdfs.py`：PDF 题库解析脚本。
- `scripts/build_offline_package.py`：离线包构建脚本。
- `docs/`：PRD 与实施计划文档。
- `release/`：打包产物（已在 `.gitignore` 中忽略，不会进仓库）。

## 3. 环境要求

- `Python 3`（运行解析脚本/本地静态服务/离线打包）。
- `Node.js`（运行测试，非页面运行必需）。
- `pdftotext`、`pdfimages`（来自 Poppler，用于 PDF 解析与题图提取）。

## 4. 本地运行 Demo

在仓库根目录执行：

```bash
python3 -m http.server 5174
```

浏览器打开：

- `http://localhost:5174/demos/demo-v4-real-source-showcase.html`

## 5. 常用命令

```bash
# 运行测试
npm test

# 从参考 PDF 重建题库
npm run build:question-bank

# 构建离线包（生成到 release/）
npm run package:offline
```

## 6. 题源解析说明

解析脚本默认读取以下本地目录（写在脚本常量 `REFERENCE_DIR`）：

- `/Users/dqc76/Documents/Incubation Project|孵化&闭环潜力项目/电子电路在线题库/电子电工类试题库参考资料`

如果迁移到其他电脑，请先修改该路径再执行 `npm run build:question-bank`。

## 7. 离线包与邮件分发建议

1. 标准离线包由 `npm run package:offline` 生成（包含启动脚本）。
2. Gmail 往往会拦截带脚本或可执行特征的附件（如 `.bat/.sh/.command`，甚至部分含脚本内容的 zip）。
3. 邮件发送建议优先使用网盘链接；如果必须邮件直发，建议发送“纯静态资源”压缩包（不含脚本文件）。

## 8. 最近版本

- `b3ef726`：全题源解析、V4 主逻辑、离线包构建。
- `3d15755`：离线包说明改为命令行优先。
- `65edee3`：补充 Windows 联网/离线安装 Python 方案。

