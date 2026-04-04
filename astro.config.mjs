import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://hongkuntian.com",
  output: "static",
  integrations: [sitemap()],
  trailingSlash: "ignore",
})
