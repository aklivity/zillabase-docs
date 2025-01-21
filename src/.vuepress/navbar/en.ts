import { navbar } from "vuepress-theme-hope";
import versions from "../versions.json" assert { type: "json" };
import { hostnameSEO, siteBase } from "../env.js";

const versionLinks = <{ text: string; link: string }[]>versions.map((o) => ({
  text: o.text,
  icon: o.icon,
  link: o.key ? `${hostnameSEO}/${siteBase}/${o.key}` : o.link,
}));

export const enNavbar = navbar([
  // {
  //   text: "User Guides",
  //   link: "",
  //   activeMatch: "^(?!\/(cli|api)).*"
  // },
  // {
  //   text: "CLI Documentation",
  //   link: "cli/overview",
  //   activeMatch: "^\/cli\/.*"
  // },
  // {
  //   text: "API Reference",
  //   link: "api/api-reference",
  //   activeMatch: "^\/api\/.*"
  // },
  { text: "version", icon: "fas fa-list-ol", children: versionLinks },
  { text: "aklivity", icon: "fas fa-globe", link: "https://www.aklivity.io/" },
]);
