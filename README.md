# 工业软件开发组学习指南

面向组内新生的培养方案知识库，基于 VuePress 2 和 Theme Hope。

网站：https://xuxcode.github.io/Learning-Guide/

## 内容

- 培养方案与小组介绍
- 后端开发、前端开发、大数据基础三条学习路线，共 13 个模块
- 9 项必做项目实践
- 学习网站、开发工具、16 本参考书及竞赛信息

本轮迁移自旧版《工业软件开发组培养方案.docx》。原文缺项、旧版本信息及来源说明见 [迁移说明](src/guide/migration.md)。来源文本记录位于 [docs/migration](docs/migration/)。

## 本地运行

使用 Node.js 24 和 pnpm 12.11.2：

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm docs:dev
```

预览地址：http://localhost:8080/Learning-Guide/

```powershell
corepack pnpm docs:build
```

## 编辑与发布

正文位于 `src/guide/`、`src/practice/` 和 `src/resources/`，导航和侧边栏位于 `src/.vuepress/`。提交到 main 后，GitHub Actions 自动构建并发布到 gh-pages。

详细操作见 [DEPLOYMENT.md](DEPLOYMENT.md)。本项目固定部署到 `/Learning-Guide/`，不修改独立的个人博客仓库。

## 技术归属

基于 [LearnData](https://github.com/rockbenben/LearnData) 模板及 [VuePress Theme Hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)，归属信息见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
