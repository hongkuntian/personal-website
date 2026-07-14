import { expect, test } from "@playwright/test"

test("homepage reflects the current resume", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", {
      name: /backend and distributed-systems engineer building reliable workflow platforms/i,
    })
  ).toBeVisible()
  await expect(
    page.getByText(/software engineer · vancouver, bc/i)
  ).toBeVisible()
  await expect(page.getByText("Reliability", { exact: true })).toBeVisible()
  await expect(page.getByText("Agentic tooling", { exact: true })).toBeVisible()
  await expect(
    page.getByRole("main").getByRole("link", { name: "Resume", exact: true })
  ).toHaveAttribute("href", "/hk_resume.pdf")
})

test("experience pages show resume-backed impact", async ({ page }) => {
  await page.goto("/experience/")

  await expect(
    page.getByRole("heading", {
      name: /aws step functions is the center of my recent work/i,
    })
  ).toBeVisible()
  await expect(page.getByText(/may 2021 - aug 2021/i)).toBeVisible()

  await page.getByRole("link", { name: "Open AWS detail page" }).click()
  await expect(page).toHaveURL(/\/experience\/aws-step-functions\/$/)
  await expect(
    page.getByRole("heading", {
      name: "Software Development Engineer II",
      exact: true,
    })
  ).toBeVisible()
  await expect(
    page.getByText(/cutting synthesis time from 93 to 26 minutes/i).first()
  ).toBeVisible()
})

test("selected work uses the current resume themes", async ({ page }) => {
  await page.goto("/projects/")

  await expect(
    page.getByRole("heading", {
      name: /workflow platforms, production reliability, and operational tooling/i,
    })
  ).toBeVisible()
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
})

test("archive project detail pages still resolve", async ({ page }) => {
  await page.goto("/projects/")

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
