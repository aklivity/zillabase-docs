import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";
import { hostnameSEO, docsRepo, docsBranch, base, versionKey, siteBase } from "./env.js";

export default hopeTheme({
  hostname: hostnameSEO,

  iconAssets: ["fontawesome-with-brands"],

  // logo: "/logo.png",
  logo: "/logo-light.png",
  logoDark: "/logo-dark.png",
  favicon: "/favicon.ico",
  breadcrumb: false,

  repo: "aklivity/zillabase",
  editLink: true,
  contributors: false,
  lastUpdated: false,
  docsRepo,
  docsBranch,

  docsDir: "src",
  pure: true,

  navbarLayout: {
    start: ["Brand"],
    center: ["Search"],
    end: ["Links", "Repo", "Outlook"],
  },

  pageInfo: ["Category", "Tag"],

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,
      headerDepth: 3,
      footer: `<span style="display:flex;align-items:center"><a href="https://www.aklivity.io"><img class="logo" alt="aklivity"></a> <a href="https://github.com/aklivity/zillabase"><i class="fa-brands fa-github" style="font-size:22px;padding-right:6px"></i></a> <a href="https://www.linkedin.com/company/aklivity/"><i class="fa-brands fa-linkedin" style="font-size:22px;padding-right:6px"></i></a> <a href="https://www.aklivity.io/slack"><i class="fa-brands fa-slack" style="font-size:25px;padding-right:6px"></i></a> <a href="https://www.twitter.com/aklivityinc"><i class="fa-brands fa-twitter" style="font-size:22px"></i></a></span>`,
      copyright: "© aklivity, inc. 2023-2025",

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },

      displayFooter: true,
    },
  },

  plugins: {
    components: {
      components: [
        // "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },

    redirect: true,

    // These features are enabled for demo, only preserve features you need here
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    markdownTab: {
      codeTabs: true,
      tabs: true,
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install mermaid before enabling it
      mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    markdownHint: {
      hint: true,
      alert: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    shiki: {
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
      lineNumbers: 3
    },

    searchPro: true,
    // todo command searchPro: true and enable this if using docsearch
    // docsearch: {
    //   disableUserPersonalization: true,
    //   appId: "H6RNUBSB6E",
    //   indexName: "aklivity",
    //   apiKey: "aaad765b377ba149769753806b181909",
    //   indexBase: `/${base}/`,
    //   searchParameters: {
    //     facetFilters: [`version:${versionKey}`, `product:${siteBase}`],
    //   },
    // },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
    
  },
});
