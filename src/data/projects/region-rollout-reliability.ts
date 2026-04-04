import type { ProjectEntry } from "../../types/content"

const regionRolloutReliability: ProjectEntry = {
  slug: "region-rollout-reliability",
  name: "Region rollout reliability",
  category: "selected-work",
  tagline:
    "Reliability work around launches, deployment paths, and service dependencies.",
  summary:
    "Worked on rollout reliability for a production cloud service, especially around region launches and deployment automation.",
  highlights: [
    "Diagnosed deployment failures that surfaced during region launch paths rather than in routine steady-state operation.",
    "Improved repeatability across regional build and deployment workflows by tightening dependency and automation assumptions.",
    "Invested in CI/CD and test reliability so rollout fixes hold up beyond a single incident or launch cycle.",
  ],
  descriptionSections: [
    {
      title: "Problem shape",
      body: [
        "Region expansion exposes edge cases that are easy to miss in ordinary development loops. The work here was less about a single feature launch and more about understanding how service dependencies, build systems, permissions, and environment-specific behavior combine under pressure.",
        "That often meant tracing failures across multiple automation layers, then turning one-off debugging into more repeatable deployment paths.",
      ],
    },
    {
      title: "Engineering focus",
      body: [
        "The target was not only fewer failures, but faster diagnosis, better testing signal, and rollout processes that are easier for other engineers to reason about.",
        "It is systems work tied directly to how safely a platform can keep growing.",
      ],
    },
  ],
  tech: [
    "Region launches",
    "CI/CD",
    "Deployment automation",
    "Service dependencies",
    "Test reliability",
  ],
  links: [],
  featured: true,
  homepageOrder: 2,
}

export default regionRolloutReliability
