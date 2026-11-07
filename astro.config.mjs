import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { noIndexPaths } from "./src/routes.js";

// Build settings without which the site cannot be built (see .env.example).
const REQUIRED_ENV = ["PUBLIC_GOOGLE_SHEET_ID"];

/**
 * Stops `astro build` and `astro dev` up front when a required setting is
 * missing, instead of building pages without their content. Reads the
 * environment first and .env as the fallback, the way Vite does.
 */
const requireEnv = () => ({
  name: "require-env",
  hooks: {
    "astro:config:setup": ({ command }) => {
      if (command !== "build" && command !== "dev") return;

      try {
        process.loadEnvFile(".env");
      } catch {
        // No .env: the environment alone has to provide the values.
      }

      const missing = REQUIRED_ENV.filter((name) => !process.env[name]);

      if (missing.length > 0) {
        throw new Error(
          `Missing build setting(s): ${missing.join(", ")}. Set them in the environment (GitHub: repository variables) or in .env, see .env.example.`,
        );
      }
    },
  },
});

export default defineConfig({
  site: "https://grenzenlose-kinderhilfe.com",
  output: "static",
  // Pages are written as /support/index.html, which every static host serves
  // at /support/ without extra rewrite rules. Links always end in a slash.
  build: { format: "directory" },
  trailingSlash: "ignore",
  integrations: [
    requireEnv(),
    react(),
    sitemap({
      filter: (page) =>
        !noIndexPaths.some((path) => new URL(page).pathname.includes(path)),
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
