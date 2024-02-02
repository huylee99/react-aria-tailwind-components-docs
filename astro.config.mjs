import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://react-aria-tailwind-components-docs.vercel.app",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark-dimmed" },
      gfm: true,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  redirects: {
    "/": {
      status: 302,
      destination: "/getting-started/",
    },
  },
});
