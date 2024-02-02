import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/getting-started/",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/documentation",
        },
        {
          title: "Contentlayer",
          href: "/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/in-progress",
          disabled: true,
        },
      ],
    },
  ],
};
