import { defineUserConfig } from "vuepress";
import { base, siteBase, dest, versionKey } from "./env.js";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest,

  locales: {
    "/": {
      lang: "en-US",
      title: "Documentation",
      description: "The official documentation for the aklivity/zillabase open-source project",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
