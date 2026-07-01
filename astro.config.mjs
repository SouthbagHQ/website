// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://southbag.cc",
  trailingSlash: "never",
  output: "server",
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/onboarding") && !page.includes("/api/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
