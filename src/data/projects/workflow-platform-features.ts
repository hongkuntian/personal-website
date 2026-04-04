import type { ProjectEntry } from "../../types/content"

const workflowPlatformFeatures: ProjectEntry = {
  slug: "workflow-platform-features",
  name: "Workflow platform features",
  category: "selected-work",
  tagline: "Developer-facing workflow capabilities and validation.",
  summary:
    "Built workflow features that make state machines easier to validate, manage, and deploy.",
  highlights: [
    "Implemented workflow versioning and aliasing paths that support safer release management.",
    "Added validation behavior around JSONata-based workflow definitions and pre-deployment checks.",
    "Worked on infrastructure-as-code integration points and observability improvements around those features.",
  ],
  descriptionSections: [
    {
      title: "Scope",
      body: [
        "This work sits between backend platform engineering and developer experience. The features are technical, but they only succeed if developers can understand the validation model, predict the workflow behavior, and adopt them without extra friction.",
        "The implementation ranged from core service logic to integration points that let developers manage workflows through familiar deployment and infrastructure paths.",
      ],
    },
    {
      title: "Focus",
      body: [
        "A feature can be correct in isolation and still be difficult to use if diagnostics, rollout safety, or observability are weak.",
        "The goal here was to build platform features that reduce surprises for developers operating real workflows.",
      ],
    },
  ],
  tech: [
    "AWS Step Functions",
    "Workflow APIs",
    "JSONata",
    "CloudFormation",
    "Observability",
  ],
  links: [],
  featured: true,
  homepageOrder: 1,
}

export default workflowPlatformFeatures
