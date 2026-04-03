# Implementation Plan：中职电子电工题库（MVP）

- 版本：v1.0
- 日期：2026-04-04
- 交付目标：2026-04-08（周三）
- 实施原则：安全稳定、轻量上线、最小可维护闭环

## 1. 技术架构

```text
Electron Shell
  ├── Student Workspace
  │    ├── Quiz Renderer (4题分页)
  │    ├── Exam Engine (计时/交卷/评分/错题)
  │    └── Explain Player (模板动画)
  ├── Teacher Workspace
  │    ├── PIN Gate
  │    ├── Question Editor
  │    ├── Import/Export Tool
  │    └── Publisher (校验+原子发布)
  └── Local Data Layer
       ├── question-bank/*.json
       ├── data/app.db (SQLite)
       └── logs/*.log
```

## 2. 模块拆分（最小化）

1. `examEngine`
- 负责练习/考试状态管理、计时、交卷、评分、错题记录。

2. `bankPublisher`
- 负责题库 Schema 校验、资源校验、版本发布、回滚。

3. UI 层
- Student/Teacher 两个工作区页面组件，逻辑尽量调用服务层。

## 3. 数据结构与发布策略

### 3.1 题库 JSON（静态题图 + 动画参数）

```json
{
  "version": "v1",
  "questions": [
    {
      "id": "Q001",
      "type": "single-choice",
      "stem": "...",
      "svgPath": "assets/q001.svg",
      "options": ["A...", "B...", "C...", "D..."],
      "answer": "B",
      "explain": {
        "template": "series_basic",
        "params": {
          "switch": "closed",
          "currentDirection": "clockwise",
          "lamp": "on"
        }
      }
    }
  ]
}
```

### 3.2 原子发布

```text
[Teacher 点击发布]
  -> 校验 bank_draft.json + SVG资源
  -> 通过后生成 bank_vNN.json
  -> 更新 current.json 指针
  -> 写 publish.log
失败:
  -> 保持 current.json 不变
  -> 记录错误码与原因
```

## 4. 错误与恢复策略（关键）

1. 导入 JSON 语法错误：阻断发布，展示错误行号。
2. 字段校验失败：阻断发布，输出字段清单。
3. SVG 资源缺失：阻断发布，输出缺失文件列表。
4. SQLite 写入失败：自动重试 2 次，失败提示并记日志。
5. 发布中断：回滚到上一版本并告警。

## 5. 里程碑计划（到 4/8）

### D1（4/4）

1. 建立 Electron 基础工程与双工作区框架（Student/Teacher）。
2. 定义题库 JSON Schema 与 SQLite 表结构。
3. 搭建基础页面骨架（每页4题 + 模式切换）。

### D2（4/5）

1. 完成 `examEngine`：练习、模拟考、交卷、评分、错题。
2. 完成解析播放器基础模板（开关/电流/亮灯）。
3. 接入首批题库样例并可跑通主流程。

### D3（4/6）

1. 完成教师端：PIN、录题表单、导入/导出。
2. 完成 `bankPublisher`：强校验、原子发布、回滚。
3. 增加导入/发布日志页面（或日志查看入口）。

### D4（4/7）

1. 首批 40 题完整入库与校验。
2. 回归测试（练习、考试、解析、发布、回滚、迁移）。
3. Windows 打包与离线安装验证。

### D5（4/8）

1. 问题修复与最终验收。
2. 交付包制作（应用包 + 数据目录 + 使用说明）。

## 6. 测试计划

1. 单元测试
- `examEngine` 评分/计时/状态迁移
- `bankPublisher` 校验/发布/回滚

2. 集成测试
- 导入 -> 发布 -> 学生端加载链路
- 模拟考 -> 交卷 -> 成绩落库 -> 错题回看

3. 冒烟测试（手工）
- 无外网环境启动
- 教师/学生一键切换
- 复制到另一台电脑后可运行

## 7. 数据迁移与离线交付

1. 交付内容
- `app.exe`
- `question-bank/`
- `data/`（首次可为空）
- `logs/`
- `README-离线部署.md`

2. 迁移步骤
- 复制整目录到目标电脑
- 双击 `app.exe`
- 首次检查数据目录完整性

## 8. 回滚方案

1. 题库回滚：将 `current.json` 指向上一稳定版本。
2. 应用回滚：保留上一版可执行包（`releases/prev/`）。
3. 数据保护：升级前自动备份 `data/app.db`。

## 9. Definition of Done

1. 40题可完整练习与模拟考。
2. 每页4题、状态持久正确。
3. 解析动画模板可覆盖首批题目。
4. 教师端可录题、导入、校验、发布、回滚。
5. Windows 离线包可在另一台电脑直接使用。
