import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

// Shim navigator for SSR
if (typeof navigator === "undefined") {
  // @ts-ignore
  global.navigator = { userAgent: "node", platform: "node" };
}

import theme from "./theme.js";

export default defineUserConfig({
  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/Learning-Guide/",

  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "工业软件开发组学习指南",
  // 网站描述
  description: "面向实验室新生的计算机技术学习路线、课程资源与项目实践指南。",

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 修改页面模板，https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: "./src/.vuepress/templateBuild.html",

  // 培养方案知识库页面。
  pagePatterns: [
    "README.md",
    "guide/**/*.md",
    "practice/**/*.md",
    "resources/**/*.md",
  ],

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        {
          // rc.137 发布包的 dev Worker 实际在 dist/worker，而非 dist/client/worker。
          // 仅修正此依赖的开发路径，保持版本和生产搜索实现不变。
          name: "fix-slimsearch-dev-worker-path",
          apply: "serve",
          enforce: "pre",
          transform(code, id) {
            if (
              !id
                .split("?")[0]
                .replaceAll("\\", "/")
                .endsWith("/@vuepress/plugin-slimsearch/dist/client/config.js")
            )
              return;
            return code.replace(
              /new URL\((["'`])worker\/dev\.js\1\s*,\s*import\.meta\.url\)/g,
              'new URL("../worker/dev.js", import.meta.url)',
            );
          },
        },
      ],
    },
  }),
});
