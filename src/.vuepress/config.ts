import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

const __dirname = getDirname(import.meta.url);
import { base, siteBase, dest, versionKey } from "./env.js";

import theme from "./theme.js";

export default defineUserConfig({
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!**/_partials"],
  base: `/${base}/`,
  dest,

  locales: {
    "/": {
      lang: "en-US",
      title: "Documentation",
      description:
        "The official documentation for the aklivity/zillabase open-source project",
    },
  },

  head: [
    // todo enable this when using docsearch
    // ["meta", { name: "docsearch:product", content: siteBase }],
    // ["meta", { name: "docsearch:version", content: versionKey }],
    // [
    //   "link",
    //   {
    //     rel: "preconnect",
    //     href: "https://H6RNUBSB6E-dsn.algolia.net",
    //     crossorigin: "",
    //   },
    // ],
  ],

  theme,
  plugins: [
    // todo enable this
    // googleAnalyticsPlugin({
    //   id: "G-Q2XWKQS14L",
    // }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },
});
