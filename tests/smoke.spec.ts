import { createHash } from "node:crypto"
import { expect, test } from "@playwright/test"

const work = [
  ["alarm-infrastructure", "Alarm infrastructure and deployment"],
  ["jsonata-and-variables", "JSONata and Variables"],
  ["region-rollout-reliability", "Region launches and feature parity"],
  ["workflow-platform-features", "Workflow APIs and AWS integrations"],
  ["incident-response-and-capacity", "Incident response and capacity"],
  ["agent-workflows-and-automation", "Operational and agent tooling"],
]
const archive = ["mindbook", "nlpure", "travelcc", "painttrix", "sureviews"]
const routes = [
  "/",
  "/projects/",
  "/archive/",
  "/experience/",
  "/experience/aws-step-functions/",
  "/experience/umaknow-cloudockit/",
  ...work.map(([slug]) => `/projects/${slug}/`),
  ...archive.map((slug) => `/projects/${slug}/`),
]

test("homepage presents the selected Personal design and AWS content", async ({
  page,
}) => {
  await page.goto("/")
  await expect(page).toHaveTitle("Hong Kun Tian | Software Engineer at AWS")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Hi, I'mHong Kun."
  )
  await expect(
    page.getByText(
      "I'm a software engineer at AWS Step Functions, based in Vancouver."
    )
  ).toBeVisible()
  await expect(page.locator("#work .work-entry")).toHaveCount(6)
  await expect(page.locator(".aws-career li")).toHaveCount(5)
  await expect(page.locator(".archive-link a")).toHaveAttribute(
    "href",
    "/archive/"
  )
  await expect(page.getByRole("main")).not.toContainText(
    /MindBook|NLPure|TravelCC|PaintTrix|Sureviews/
  )
  await expect(page.getByRole("main")).not.toContainText(
    /93 to 26|approximately 80%/
  )
  await expect(page.getByText("Compare designs", { exact: true })).toHaveCount(
    0
  )
  await expect(page.locator(".salutation img")).toHaveCSS("filter", "none")
  await expect
    .poll(() =>
      page
        .locator(".salutation img")
        .evaluate((image: HTMLImageElement) => image.naturalWidth)
    )
    .toBeGreaterThan(0)
})

test("navigation is visible on phones and works with keyboard", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.keyboard.press("Tab")
  await expect(
    page.getByRole("link", { name: "Skip to content" })
  ).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(page).toHaveURL(/#main$/)
  const navigation = page.getByRole("navigation", { name: "Main navigation" })
  for (const [label, href] of [
    ["Work", "/#work"],
    ["Experience", "/#about"],
    ["Résumé", "/hk_resume.pdf"],
    ["Contact", "/#contact"],
  ]) {
    const link = navigation.getByRole("link", { name: label, exact: true })
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute("href", href)
    expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44)
  }
  await navigation.getByRole("link", { name: "Work", exact: true }).click()
  await expect(page).toHaveURL(/#work$/)
  await page
    .locator("#work")
    .getByRole("link", { name: /Alarm infrastructure/ })
    .click()
  await expect(page).toHaveURL(/\/projects\/alarm-infrastructure\/$/)
  await page
    .getByRole("link", { name: "← All AWS work", exact: true })
    .first()
    .click()
  await expect(page).toHaveURL(/\/#work$/)
})

test("AWS cases retain their scope and navigate within AWS work", async ({
  page,
}) => {
  for (let i = 0; i < work.length; i++) {
    const [slug, title] = work[i]
    await page.goto(`/projects/${slug}/`)
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title)
    await expect(page.locator(".related-work a").last()).toHaveAttribute(
      "href",
      `/projects/${work[(i + 1) % work.length][0]}/`
    )
  }
  await page.goto("/projects/alarm-infrastructure/")
  await expect(page.getByText(/235.5 seconds/)).toBeVisible()
  await page.goto("/projects/incident-response-and-capacity/")
  await expect(
    page.getByText(/The comparison covered one production workload/)
  ).toBeVisible()
  await page.goto("/experience/aws-step-functions/")
  await expect(page.locator(".aws-career li")).toHaveCount(5)
  await expect(page.locator(".work-entry")).toHaveCount(6)
  await expect(page.getByRole("main")).not.toContainText(
    /93 to 26|approximately 80%/
  )
})

test("earlier projects remain available through the archive", async ({
  page,
}) => {
  await page.goto("/")
  await page
    .getByRole("link", { name: "Earlier projects ↗", exact: true })
    .click()
  await expect(page).toHaveURL(/\/archive\/$/)
  await expect(page.locator(".archive-list article")).toHaveCount(5)
  await page.getByRole("link", { name: "MindBook ↗", exact: true }).click()
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("MindBook")
  await expect(page.locator(".related-work a").last()).toHaveAttribute(
    "href",
    "/projects/nlpure/"
  )
})

test("canonical pages preserve search metadata and successful internal links", async ({
  page,
  request,
}) => {
  const links = new Set<string>()
  for (const route of routes) {
    const response = await page.goto(route)
    expect(response!.ok(), route).toBe(true)
    await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
      "href",
      `https://hongkuntian.me${route}`
    )
    await expect(page.locator("meta[name='robots']")).toHaveAttribute(
      "content",
      "index,follow"
    )
    await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
      "content",
      "https://hongkuntian.me/og-card.png"
    )
    expect(
      JSON.parse(
        (await page
          .locator("script[type='application/ld+json']")
          .textContent())!
      )
    ).toMatchObject({
      "@type": "Person",
      name: "Hong Kun Tian",
      url: "https://hongkuntian.me/",
    })
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((elements) =>
        elements.map((element) => element.getAttribute("href")!)
      )) {
      if (href.startsWith("/")) links.add(href)
      expect(href).not.toContain("/redesigns/")
    }
  }
  for (const href of links)
    expect((await request.get(href)).ok(), href).toBe(true)
})

for (const width of [320, 390, 1440]) {
  test(`production pages fit a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = []
    page.on("pageerror", (error) => errors.push(error.message))
    for (const route of routes) {
      await page.goto(route)
      await page.evaluate(() => document.fonts.ready)
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth
        ),
        route
      ).toBe(true)
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1)
    }
    expect(errors).toEqual([])
  })
}

test("retired preview URLs resolve to the corresponding production pages", async ({
  page,
}) => {
  await page.goto("/redesigns/letter/")
  await expect(page).toHaveURL(/:\d+\/$/)
  await page.goto("/redesigns/journal/projects/jsonata-and-variables/")
  await expect(page).toHaveURL(/\/projects\/jsonata-and-variables\/$/)
  await page.goto("/redesigns/letter/archive/")
  await expect(page).toHaveURL(/\/archive\/$/)
})

test("resume asset is unchanged and the missing-page fallback has a way home", async ({
  page,
  request,
}) => {
  const response = await request.get("/hk_resume.pdf")
  expect(response.ok()).toBe(true)
  expect(response.headers()["content-type"]).toContain("application/pdf")
  expect(
    createHash("sha256")
      .update(await response.body())
      .digest("hex")
  ).toBe("9b3e360fa51da9473fa5bd276c662e1bccaacc78df3c9ee242d3b3b47e426593")
  await page.goto("/404/")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Page not found."
  )
  await expect(page.locator("meta[name='robots']")).toHaveAttribute(
    "content",
    "noindex,nofollow"
  )
  await page
    .getByRole("link", { name: "Back to the homepage →", exact: true })
    .click()
  await expect(page).toHaveURL(/:\d+\/$/)
})
