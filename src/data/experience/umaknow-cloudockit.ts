import type { ExperienceEntry } from "../../types/content"

const umaknowCloudockit: ExperienceEntry = {
  slug: "umaknow-cloudockit",
  company: "UMAknow",
  role: "Software Developer Intern",
  location: "Montreal, Canada",
  start: "2019-06",
  end: "2020-08",
  summary:
    "Built cloud-infrastructure diagram generation, a server-side REST API, responsive UI, and automated acceptance tests for Cloudockit.",
  highlights: [
    "Built cloud-infrastructure diagram generation for a cloud documentation product.",
    "Developed a server-side REST API and responsive product UI.",
    "Added automated acceptance tests for Cloudockit workflows.",
  ],
  impact: [
    "Cloud-infrastructure visualization",
    "REST API development",
    "Responsive UI and acceptance testing",
  ],
  tech: [
    "Cloud infrastructure",
    "REST APIs",
    "Responsive UI",
    "Automated acceptance testing",
  ],
  links: [
    {
      label: "Cloudockit",
      url: "https://cloudockit.com",
    },
  ],
  featured: false,
  homepageOrder: 4,
  detailSections: [
    {
      title: "Backend and platform work",
      body: [
        "I built cloud-infrastructure diagram generation and a server-side REST API for Cloudockit, connecting backend behavior to a product that documents customer cloud environments.",
        "The work strengthened my interest in systems that connect technical infrastructure with clear, customer-facing outputs.",
      ],
    },
    {
      title: "Frontend and testing work",
      body: [
        "Alongside the backend work, I built responsive UI and automated acceptance tests for Cloudockit.",
        "That combination of API development, frontend implementation, and test automation established the full-stack foundation behind my later platform work.",
      ],
    },
  ],
}

export default umaknowCloudockit
