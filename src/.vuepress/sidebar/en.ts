import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Getting Started",
      children: [
        {
          text: "Overview",
          link: "/getting-started/overview.md",
        },
        {
          text: "Quickstart",
          link: "/getting-started/quickstart.md",
        },
      ],
    },
    {
      text: "Concepts",
      children: [
        // {
        //   text: "AsyncAPI",
        //   link: "/products/zilla/generated-asyncapi-specs",
        //   icon: "/assets/icons/zilla.svg",
        // },
        {
          text: "Table",
          icon: "/assets/icons/table.svg",
          collapsible: true,
          children: [
            {
              text: "Defining Table",
              link: "/products/table/defining-table",
            },
            {
              text: "Initializing Database with Seeder",
              link: "/products/table/seeding-database",
            },
          ],
        },
        {
          text: "View",
          icon: "/assets/icons/views.svg",
          collapsible: true,
          children: [
            {
              text: "Defining View",
              link: "/products/view/defining-view",
            },
            {
              text: "Defining Materialized View",
              link: "/products/view/defining-materialized-view",
            },
          ],
        },
        {
          text: "Stream",
          icon: "/assets/icons/streams.svg",
          collapsible: true,
          children: [
            {
              text: "Defining Stream",
              link: "/products/stream/defining-stream",
            },
          ],
        },
        {
          text: "Function",
          icon: "/assets/icons/function.svg",
          collapsible: true,
          children: [
            {
              text: "User Defined Function (UDF)",
              link: "/products/function/user-defined-function",
            },
            {
              text: "Defining Function",
              link: "/products/function/defining-function",
            },
            {
              text: "Embedded UDF",
              link: "/products/function/embedded-udf",
            },
            {
              text: "External UDF in Java",
              link: "/products/function/external-udf-java",
            },
            {
              text: "External UDF in Python",
              link: "/products/function/external-udf-python",
            },
          ],
        },
        {
          text: "Authentication",
          icon: "/assets/icons/auth.svg",
          collapsible: true,
          children: [
            {
              text: "Authentication in Zillabase",
              link: "/products/authentication/concepts",
            },
            {
              text: "Authentication Configuration",
              link: "/products/authentication/configuration",
            },
            {
              text: "Obtaining Authenticated User",
              link: "/products/authentication/obtain-user",
            },
            {
              text: "Managing Single Sign-On (SSO)",
              link: "/products/authentication/managing-sso",
            }
          ],
        },
        {
          text: "Storage",
          icon: "/assets/icons/storage.svg",
          collapsible: true,
          children: [
            {
              text: "Storage in Zillabase",
              link: "/products/storage/concepts",
            },
            {
              text: "Managing Bucket",
              link: "/products/storage/bucket",
            },
            {
              text: "Managing Object",
              link: "/products/storage/object",
            },
          ],
        },
      ],
    },
    {
      text: "Examples",
      children: [
        {
          text: "Petstore",
          link: "/examples/petstore",
        },
        {
          text: "StreamPay",
          link: "/examples/streampay",
        },
      ],
    },
    {
      text: "CLI",
      children: [
        {
          text: "Overview",
          link: "/cli/overview",
        },
        {
          text: "Commands",
          children: [
            {
              text: "Help",
              link: "/cli/help",
            },
            {
              text: "Init",
              link: "/cli/init",
            },
            {
              text: "Start",
              link: "/cli/start",
            },
            {
              text: "Stop",
              link: "/cli/stop",
            },
            {
              text: "AsyncAPI",
              link: "/cli/asyncapi",
            },
            {
              text: "Config",
              link: "/cli/config",
            },
            {
              text: "Migration",
              link: "/cli/migration",
            },
            {
              text: "SSO",
              link: "/cli/sso",
            },
          ],
          collapsible: true,
        },
      ],
    },
    {
      text: "Support",
      children: [
        {
          text: "FAQs",
          link: "/support/faqs",
        },
        {
          text: "Troubleshooting",
          link: "/support/troubleshooting",
        },
        {
          text: "Community Support",
          link: "/support/community-support",
        },
      ],
    },
  ],
});
