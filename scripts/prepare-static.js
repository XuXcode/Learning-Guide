import { cpSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const publicDir = new URL("../src/.vuepress/public/", import.meta.url);
mkdirSync(publicDir, { recursive: true });
cpSync(
  fileURLToPath(new URL("../src/reading/", import.meta.url)),
  fileURLToPath(new URL("reading/", publicDir)),
  { recursive: true },
);
writeFileSync(new URL(".nojekyll", publicDir), "");
