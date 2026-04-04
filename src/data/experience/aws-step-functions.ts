import type { ExperienceEntry } from "../../types/content"

const awsStepFunctions: ExperienceEntry = {
  slug: "aws-step-functions",
  company: "Amazon Web Services",
  role: "Software Development Engineer II",
  location: "United States",
  start: "2022-07",
  summary:
    "Working on AWS Step Functions across workflow platform features, rollout reliability, and internal tooling for service operations.",
  highlights: [
    "Implemented workflow versioning and aliasing features that let developers publish immutable state machine versions and route traffic more safely.",
    "Shipped validation and developer-facing workflow features including JSONata support, pre-deployment validation, and infrastructure-as-code integration points.",
    "Diagnosed deployment failures during region launches and improved rollout paths across service dependencies, build systems, and deployment automation.",
    "Built tooling for on-call and operational workflows, including batch visibility tools, debugging helpers, and agent-based triage and reporting workflows.",
    "Worked across API design, service behavior, observability, CI/CD reliability, and production debugging rather than in a single narrow layer.",
  ],
  impact: [
    "Distributed systems ownership",
    "Backend platform and workflow APIs",
    "Reliability engineering and rollout safety",
    "Developer tooling and operational automation",
  ],
  tech: [
    "AWS",
    "AWS Step Functions",
    "Distributed systems",
    "Workflow validation",
    "Service reliability",
    "Developer tooling",
    "Operational automation",
  ],
  links: [],
  featured: true,
  homepageOrder: 1,
  detailSections: [
    {
      title: "Platform",
      body: [
        "A core part of the role has been shipping workflow features used directly by developers building on Step Functions. That includes versioning and aliasing, support for JSONata-based expressions, validation paths that catch invalid definitions before deployment, and CloudFormation-related integrations for infrastructure-as-code workflows.",
        "The work sits at the boundary between backend systems and developer experience, where API behavior, diagnostics, and operational quality all matter as much as the underlying implementation.",
      ],
    },
    {
      title: "Reliability and region expansion",
      body: [
        "Another major thread has been rollout and infrastructure reliability. I have spent time diagnosing deployment failures during region launches, tracing issues across service dependencies, and tightening build and deployment paths so regional expansion becomes more repeatable.",
        "That work also extends into CI/CD and test reliability, where the goal is to make release paths more predictable when multiple systems and automation layers have to line up.",
      ],
    },
    {
      title: "Tooling and agent workflows",
      body: [
        "I also build internal tooling that makes service ownership less manual. That includes on-call and debugging helpers, batch operational tools with better visibility, and research tooling for navigating large codebases or documentation during investigations.",
        "More recently, I have been building LLM-powered workflows that assist with triage, reporting, and operational support. The focus is on making that automation useful in real engineering workflows rather than treating it as a separate track of work.",
      ],
    },
  ],
}

export default awsStepFunctions
