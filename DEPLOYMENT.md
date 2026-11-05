# Learning-Guide 本地运行与发布

网站：https://xuxcode.github.io/Learning-Guide/

仓库：https://github.com/XuXcode/Learning-Guide

本项目只发布到 `/Learning-Guide/`，不要修改独立博客仓库 `XuXcode/xuxcode.github.io`，不要添加 CNAME 或把当前仓库改成根站点仓库。

## Windows 11 环境

使用 Node.js 24。`package.json` 固定 `pnpm@12.11.2`；可通过 Corepack 调用，无需覆盖系统现有 pnpm：

```powershell
cd R:\Learning-Guide
node -v
corepack pnpm --version
corepack pnpm install --frozen-lockfile
corepack pnpm docs:dev
```

开发地址：http://localhost:8080/Learning-Guide/ （端口占用时以终端显示为准）。停止开发服务按 Ctrl+C。

如果没有 Corepack，先按 Corepack 官方说明安装兼容版本，再使用上述命令。若现有 `pnpm --version` 已显示 12.11.2，也可以直接使用 `pnpm`。

```powershell
corepack pnpm docs:build
```

输出在 `src/.vuepress/dist/`。开发及构建前自动复制 `src/reading/` 到 public，生成 `.nojekyll`；这些生成文件不提交。修改读书笔记后重启开发服务，或重新构建，以刷新静态副本。

## 编写文档

在 `src/` 新建 Markdown，例如 `src/guide/first-steps.md`：

```markdown
---
title: 入门指南
description: 实验室新生的入门学习说明。
---

# 入门指南

在这里编写正文。
```

生成地址为 `/Learning-Guide/guide/first-steps.html`。导航栏配置在 `src/.vuepress/navbar.ts`，侧边栏配置在 `src/.vuepress/sidebar.ts`；其中 VuePress 站内链接写 `/guide/first-steps.html`，由 VuePress 添加 base，不要再手动重复添加 `/Learning-Guide/`。

静态图片放在 `src/.vuepress/public/images/`，Markdown 中使用 `![说明](/images/example.png)`。自定义原生 HTML、脚本 `fetch`、独立 Docsify 页面不一定经过 VuePress 路径转换，应使用正确的相对路径，Vue 组件中可使用 VuePress 的 `withBase`。

## 自动部署

```powershell
git status
git add src
git commit -m "docs: add learning materials"
git push origin main
```

`main` 保存源码。现有 `.github/workflows/main.yml` 在 push 到 main 或手动运行时执行 Node.js 24 / pnpm 12.11.2 的锁定依赖安装与构建，然后发布到本仓库 `gh-pages` 分支。无需 FTP、Vercel、自定义域名或额外密钥。

在仓库 `Settings > Pages` 使用 `Deploy from a branch`，选择 `gh-pages` / `/(root)`。检查 `Actions > docs build` 及 GitHub 自动创建的 `pages build and deployment`；两者完成后再刷新网站。如果部署没有触发，可在 Actions 手动运行 docs build。

## 模板服务与归属

- 保留原有 Markdown、布局、样式、LearnData 作者与许可归属。
- 网站标题、描述、仓库、hostname 已配置为当前项目；hostname 为域名，VuePress base 单独指定子路径。
- 原作者 Giscus、Waline、Live2D 和导航社交入口默认禁用；统计配置维持禁用。启用评论时应配置自己的服务。
- 独立读书笔记改用公共 jsDelivr 的 Docsify 资源。原文中的外链、引用图片及工具链接仍保留，访问这些内容需要对应第三方服务可用。
- `scripts/config.js` 会组合 hostname 和 base，使 `llms.txt` 的文档链接指向本项目子路径。
