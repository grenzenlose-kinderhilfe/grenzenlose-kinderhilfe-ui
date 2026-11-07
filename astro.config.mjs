import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://grenzenlose-kinderhilfe.com",
  output: "static",
  // Pages are written as /support/index.html, which every static host serves
  // at /support/ without extra rewrite rules. Links always end in a slash.
  build: { format: "directory" },
  trailingSlash: "ignore",
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "hu",
        locales: { hu: "hu-HU", de: "de-DE", en: "en-GB" },
      },
    }),
  ],
  vite: {
    ssr: {
      // Swiper ships its stylesheets as package exports; bundle it for the
      // prerender instead of letting Node load it.
      noExternal: ["swiper"],
    },
  },
});
