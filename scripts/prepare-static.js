import { mkdirSync, writeFileSync } from "node:fs";

const publicDir = new URL("../src/.vuepress/public/", import.meta.url);
mkdirSync(publicDir, { recursive: true });
// 旧模板的独立读书笔记保留在 src/reading，不再复制进培养方案知识库。
writeFileSync(new URL(".nojekyll", publicDir), "");
