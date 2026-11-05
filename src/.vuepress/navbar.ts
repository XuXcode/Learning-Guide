import { navbar } from "vuepress-theme-hope";
export default navbar([
  { text: "培养方案", link: "/guide/" },
  {
    text: "学习路线",
    children: [
      { text: "后端开发", link: "/guide/backend.md" },
      { text: "前端开发", link: "/guide/frontend.md" },
      { text: "大数据基础", link: "/guide/big-data.md" },
    ],
  },
  { text: "项目实践", link: "/practice/" },
  { text: "资源索引", link: "/resources/" },
]);
