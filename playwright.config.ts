import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4321",
    trace: "on-first-retry",
  },
  webServer: {
    command:
      "ASTRO_DEV_BACKGROUND=0 npm run dev -- --host 127.0.0.1 --port 4321 --ignore-lock",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
})
