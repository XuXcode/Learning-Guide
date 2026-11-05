import { sidebar } from "vuepress-theme-hope";
export default sidebar({
  "/": [
    { text: "指南首页", link: "/" },
    {
      text: "开始阅读",
      children: [
        { text: "培养方案", link: "/guide/" },
        { text: "迁移说明", link: "/guide/migration.md" },
      ],
    },
    {
      text: "学习路线",
      children: [
        { text: "后端开发", link: "/guide/backend.md" },
        { text: "前端开发", link: "/guide/frontend.md" },
        { text: "大数据基础", link: "/guide/big-data.md" },
      ],
    },
    {
      text: "项目实践",
      children: [
        { text: "实践总览", link: "/practice/" },
        { text: "后端开发实践", link: "/practice/backend.md" },
        { text: "前端开发实践", link: "/practice/frontend.md" },
        { text: "大数据基础实践", link: "/practice/big-data.md" },
      ],
    },
    {
      text: "资源索引",
      children: [
        { text: "学习网站", link: "/resources/" },
        { text: "开发工具与补充学习", link: "/resources/tools.md" },
        { text: "参考书目", link: "/resources/books.md" },
        { text: "竞赛信息", link: "/resources/competitions.md" },
      ],
    },
  ],
});
