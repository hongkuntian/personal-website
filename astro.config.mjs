import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://hongkuntian.me",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) =>
        !/^\/(redesigns|resume|404)(\/|$)/.test(new URL(page).pathname),
    }),
  ],
  devToolbar: { enabled: false },
  trailingSlash: "ignore",
})
