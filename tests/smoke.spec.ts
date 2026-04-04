import { expect, test } from "@playwright/test"

test("root route renders the exploration index", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", {
      name: /eleven routes, one content model, ten homepage directions/i,
    })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /existing astro portfolio/i })
  ).toBeVisible()
  await expect(page.getByRole("link", { name: /editorial/i })).toBeVisible()
  await expect(page.getByRole("link", { name: /terminal/i })).toBeVisible()
  await expect(page.getByRole("link", { name: /swiss/i })).toBeVisible()
  await expect(
    page.getByRole("link", { name: /warm brutalist/i })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /soft modern/i })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /warm broadsheet/i })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /concrete warm/i })
  ).toBeVisible()
  await expect(page.getByRole("link", { name: /kiln/i })).toBeVisible()
  await expect(
    page.getByRole("link", { name: /dusk forge/i })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /woodblock/i })
  ).toBeVisible()
})

test("current route preserves the original homepage content", async ({
  page,
}) => {
  await page.goto("/current")

  await expect(
    page.getByRole("heading", {
      name: /software engineer focused on distributed systems and developer-facing products/i,
    })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Resume", exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "All Experience", exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "All Projects", exact: true })
  ).toBeVisible()
  await expect(page.getByRole("link", { name: "Email me" })).toBeVisible()
})

test("all exploration routes resolve", async ({ page }) => {
  const explorations = [
    {
      path: "/explore/1",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/2",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/3",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/4",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/5",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/6",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/7",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/8",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/9",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
    {
      path: "/explore/10",
      heading:
        /software engineer focused on distributed systems and developer-facing products/i,
    },
  ]

  for (const exploration of explorations) {
    await page.goto(exploration.path)
    // Every exploration shows the profile name as h1
    await expect(
      page.getByRole("heading", { name: /hong kun/i }).first()
    ).toBeVisible()
  }
})

test("experience index and detail pages resolve", async ({ page }) => {
  await page.goto("/experience/")
  await expect(
    page.getByRole("heading", { name: /roles that connect product judgment/i })
  ).toBeVisible()

  await page
    .getByRole("link", { name: /software development engineer/i })
    .first()
    .click()
  await expect(page).toHaveURL(/\/experience\/aws-step-functions\/$/)
  await expect(
    page.getByRole("heading", { name: "Software Development Engineer" })
  ).toBeVisible()
})

test("projects index and detail pages resolve", async ({ page }) => {
  await page.goto("/projects/")
  await expect(
    page.getByRole("heading", {
      name: /representative work that shows how i build/i,
    })
  ).toBeVisible()

  await page.getByRole("link", { name: "MindBook", exact: true }).click()
  await expect(page).toHaveURL(/\/projects\/mindbook\/$/)
  await expect(page.getByRole("heading", { name: "MindBook" })).toBeVisible()
})

test("resume route redirects to the pdf asset", async ({ page }) => {
  await page.goto("/resume/")
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
    "href",
    "/hk_resume.pdf"
  )
  await expect(page.getByRole("link", { name: "resume" })).toHaveAttribute(
    "href",
    "/hk_resume.pdf"
  )
})
