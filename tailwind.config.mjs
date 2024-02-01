import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = { 200: "#b1c9f6", 600: "#255fe0", 900: "#142e66", 950: "#112245" };
const gray = { 100: "#f6f6f7", 200: "#eceef0", 300: "#c0c2c5", 400: "#898b91", 500: "#56585d", 700: "#36383d", 800: "#25272b", 900: "#17181a" };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
