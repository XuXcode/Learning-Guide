import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://xuxcode.github.io",
    favicon: "/knowledge-logo.svg",
    logo: "/knowledge-logo.svg",
    repo: "XuXcode/Learning-Guide",
    repoLabel: "GitHub",
    docsDir: "src",
    docsBranch: "main",
    navbar,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Repo", "Outlook", "Search"],
    },
    sidebar,
    breadcrumb: true,
    pageInfo: false,
    contributors: false,
    lastUpdated: true,
    editLink: true,
    editLinkText: "编辑此页",
    darkmode: "toggle",
    fullscreen: false,
    print: false,
    displayFooter: true,
    footer: "工业软件开发组 · 学习与实践文档",
    copyright:
      '基于 <a href="https://github.com/rockbenben/LearnData" target="_blank" rel="noopener noreferrer">LearnData</a> · VuePress Theme Hope',
    locales: {
      "/": {
        routerLocales: {
          skipToContent: "跳到主要内容",
          notFoundTitle: "页面不存在",
          notFoundMsg: ["请从左侧目录继续阅读，或使用搜索查找学习内容。"],
          back: "返回上一页",
          home: "回到指南首页",
        },
      },
    } as never,
    markdown: {
      highlighter: {
        type: "shiki",
        themes: {
          light: "github-light-high-contrast",
          dark: "github-dark-high-contrast",
        },
      },
      align: true,
      attrs: true,
      mark: true,
      sup: true,
      sub: true,
      include: true,
      footnote: true,
      tasklist: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      hint: true,
      alert: true,
    },
    plugins: {
      // 知识库按文档目录阅读，不生成文章列表、标签或时间轴。
      blog: false,
      feed: false,
      comment: false,
      slimsearch: { indexContent: true },
    },
    hotReload: true,
  },
  { custom: true },
);
