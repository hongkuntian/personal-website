import { describe, expect, it } from "vitest"
import { experienceEntries } from "../data/experience"
import { projectEntries } from "../data/projects"
import {
  formatDateRange,
  getFeaturedExperience,
  getFeaturedProjects,
  getProjectsByCategory,
  sortExperienceEntries,
} from "./content"

describe("content utilities", () => {
  it("sorts experience with current roles first", () => {
    const [first] = sortExperienceEntries(experienceEntries)
    expect(first.slug).toBe("aws-step-functions")
  })

  it("formats open-ended date ranges", () => {
    expect(formatDateRange("2022-01")).toBe("Jan 2022 - Present")
  })

  it("keeps featured content ordered by homepage order", () => {
    expect(
      getFeaturedExperience(experienceEntries).map((entry) => entry.slug)
    ).toEqual(["aws-step-functions"])

    expect(
      getFeaturedProjects(projectEntries).map((entry) => entry.slug)
    ).toEqual([
      "workflow-platform-features",
      "region-rollout-reliability",
      "agent-workflows-and-automation",
    ])
  })

  it("separates selected work from archive projects", () => {
    expect(getProjectsByCategory(projectEntries, "selected-work")).toHaveLength(
      3
    )
    expect(getProjectsByCategory(projectEntries, "archive")).toHaveLength(5)
  })

  it("enforces unique slugs across experience and projects", () => {
    const experienceSlugs = new Set(
      experienceEntries.map((entry) => entry.slug)
    )
    const projectSlugs = new Set(projectEntries.map((entry) => entry.slug))

    expect(experienceSlugs.size).toBe(experienceEntries.length)
    expect(projectSlugs.size).toBe(projectEntries.length)
  })
})
