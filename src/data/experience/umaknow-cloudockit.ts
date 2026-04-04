import type { ExperienceEntry } from "../../types/content"

const umaknowCloudockit: ExperienceEntry = {
  slug: "umaknow-cloudockit",
  company: "UMAknow / Cloudockit",
  role: "Software Developer Intern",
  location: "Montreal, Canada",
  start: "2019-06",
  end: "2020-08",
  summary:
    "Worked across API development, web UI implementation, and automated test coverage for Cloudockit, a cloud environment diagram and documentation product.",
  highlights: [
    "Built a server-side REST API in .NET for document generation workflows used by end customers.",
    "Implemented an interactive web page for exploring API endpoints and product capabilities.",
    "Improved deployment confidence with automated acceptance tests that validated generated documents and templates.",
  ],
  impact: [
    ".NET API development",
    "Frontend delivery with HTML, CSS, and JavaScript",
    "Automation and release robustness",
  ],
  tech: [
    "C#",
    ".NET",
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "Azure DevOps",
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
        "I developed a REST API that let customers trigger document generation for cloud environment diagrams, which required balancing product requirements with the realities of backend workflow reliability.",
        "The work strengthened my interest in systems that sit close to customer value while still demanding engineering rigor around inputs, outputs, and failure modes.",
      ],
    },
    {
      title: "Frontend and testing work",
      body: [
        "Alongside backend work, I shipped product-facing UI improvements and automated tests that caught regressions in generated artifacts before they reached production.",
        "That combination of API design, frontend implementation, and test automation shaped the full-stack approach I still bring to projects today.",
      ],
    },
  ],
}

export default umaknowCloudockit
