import { mkdirSync, writeFileSync } from "node:fs";

const publicDir = new URL("../src/.vuepress/public/", import.meta.url);
mkdirSync(publicDir, { recursive: true });
writeFileSync(new URL(".nojekyll", publicDir), "");
