import { expect, test } from "@playwright/test"

test("homepage reflects the current positioning", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(
    "Hong Kun Tian | Backend & Distributed Systems Engineer"
  )
  await expect(
    page.getByRole("heading", {
      name: /backend and distributed-systems engineer building reliable workflow platforms/i,
    })
  ).toBeVisible()
  await expect(
    page.getByText(/backend \/ platform engineer · vancouver, bc/i)
  ).toBeVisible()
  await expect(page.getByText("Reliability", { exact: true })).toBeVisible()
  await expect(page.getByText("Agentic tooling", { exact: true })).toBeVisible()
  await expect(
    page
      .getByText(
        /open to backend and platform engineering roles in new york city, seattle, vancouver, montreal, and toronto/i
      )
      .first()
  ).toBeVisible()
  await expect(page.locator(".primaryExperienceBlock li")).toHaveCount(3)
  await expect(
    page.locator(".selectedWorkCard").first().locator("li")
  ).toHaveCount(2)
  await expect(
    page.getByRole("main").getByRole("link", { name: "Resume", exact: true })
  ).toHaveAttribute("href", "/hk_resume.pdf")
})

test("homepage metadata and navigation are shareable and accessible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
    "href",
    "https://hongkuntian.me/"
  )
  await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
    "content",
    "https://hongkuntian.me/og-card.png"
  )

  const personData = JSON.parse(
    (await page.locator("script[type='application/ld+json']").textContent()) ??
      "{}"
  )
  expect(personData).toMatchObject({
    "@type": "Person",
    name: "Hong Kun Tian",
    url: "https://hongkuntian.me/",
  })

  await page.keyboard.press("Tab")
  await expect(
    page.getByRole("link", { name: "Skip to content" })
  ).toBeFocused()

  const menu = page.locator("#mobile-nav")
  await expect(menu).toHaveAttribute("aria-hidden", "true")
  await expect(menu).toHaveAttribute("inert", "")

  const menuToggle = page.getByRole("button", {
    name: "Toggle navigation menu",
  })
  await menuToggle.click()
  await expect(menu).toHaveAttribute("aria-hidden", "false")
  await expect(menu).not.toHaveAttribute("inert", "")
  await expect(menu.getByRole("link", { name: "Experience" })).toHaveAttribute(
    "href",
    "/#experience"
  )
  await expect(menu.getByRole("link", { name: "Work" })).toHaveAttribute(
    "href",
    "/#projects"
  )
  await expect(menu.getByRole("link", { name: "All Experience" })).toHaveCount(
    0
  )

  await page.keyboard.press("Escape")
  await expect(menu).toHaveAttribute("aria-hidden", "true")
  await expect(menuToggle).toBeFocused()
})

test("experience pages show resume-backed impact", async ({ page }) => {
  await page.goto("/experience/")

  await expect(
    page.getByRole("heading", {
      name: /aws step functions is the center of my recent work/i,
    })
  ).toBeVisible()
  await expect(page.getByText(/may 2021 - aug 2021/i)).toBeVisible()
  await expect(page.locator(".experienceFeaturePanel li")).toHaveCount(3)
  await expect(
    page.getByRole("heading", { name: "Workflow-platform capabilities" })
  ).toHaveCount(0)

  await page.getByRole("link", { name: "View detailed AWS impact" }).click()
  await expect(page).toHaveURL(/\/experience\/aws-step-functions\/$/)
  await expect(
    page.getByRole("heading", {
      name: "Software Development Engineer II",
      exact: true,
    })
  ).toBeVisible()
  await expect(
    page
      .getByText(
        /cutting alarm-infrastructure synthesis time from 93 to 26 minutes/i
      )
      .first()
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Open resume", exact: true })
  ).toHaveAttribute("href", "/hk_resume.pdf")
  await expect(
    page.getByRole("link", { name: "Email me", exact: true })
  ).toHaveAttribute("href", "mailto:hongkun.tian@hotmail.com")
})

test("selected work uses the current resume themes", async ({ page }) => {
  await page.goto("/projects/")

  await expect(
    page.getByRole("heading", {
      name: /workflow platforms, production reliability, and operational tooling/i,
    })
  ).toBeVisible()
  await expect(
    page.getByText(/selected work highlights recent impact/i)
  ).toBeVisible()
  const workflowCard = page
    .locator("article")
    .filter({ hasText: "Workflow platform features" })
  await expect(
    workflowCard.getByText("Selected work", { exact: true })
  ).toHaveCount(0)
  await expect(
    page.getByRole("link", { name: "SOP-driven LLM automation", exact: true })
  ).toBeVisible()

  await page
    .getByRole("link", { name: "SOP-driven LLM automation", exact: true })
    .click()
  await expect(page).toHaveURL(/\/projects\/agent-workflows-and-automation\/$/)
  await expect(
    page.getByText(/reduced manual triage by approximately 80%/i).first()
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Open resume", exact: true })
  ).toHaveAttribute("href", "/hk_resume.pdf")
  await expect(
    page.getByRole("link", { name: "Email me", exact: true })
  ).toHaveAttribute("href", "mailto:hongkun.tian@hotmail.com")
})

test("archive project detail pages still resolve", async ({ page }) => {
  await page.goto("/projects/")

  await expect(
    page.getByRole("link", { name: "NLPure", exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Sureviews", exact: true })
  ).not.toBeVisible()

  await page.getByText("View 2 more earlier projects").click()
  await expect(
    page.getByRole("link", { name: "Sureviews", exact: true })
  ).toBeVisible()

  await page.getByRole("link", { name: "MindBook", exact: true }).click()
  await expect(page).toHaveURL(/\/projects\/mindbook\/$/)
  await expect(
    page.getByRole("heading", { name: "MindBook", exact: true })
  ).toBeVisible()
})

test("resume route points to the current pdf asset", async ({ page }) => {
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
