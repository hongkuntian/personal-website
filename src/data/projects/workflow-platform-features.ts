import type { ProjectEntry } from "../../types/content"

const workflowPlatformFeatures: ProjectEntry = {
  slug: "workflow-platform-features",
  name: "Workflow platform features",
  category: "selected-work",
  tagline: "Developer-facing workflow capabilities and validation.",
  summary:
    "Built backend capabilities that let customers version, validate, and deploy state machines with safer production behavior and clearer diagnostics.",
  highlights: [
    "Designed state machine versioning and aliases for immutable workflow releases and safe production traffic shifts.",
    "Built throttling, monitoring canaries, and global rollout infrastructure for the ValidateStateMachineDefinition API.",
    "Delivered JSONata validation that prevents invalid runtime references and improves developer diagnostics.",
    "Added CloudFormation resource-provider lifecycle handlers and automated integration tests.",
  ],
  descriptionSections: [
    {
      title: "Scope",
      body: [
        "The work spans core backend behavior and the developer-facing paths used to manage workflows. Versioning and aliases give customers immutable releases and controlled traffic shifts, while pre-deployment validation catches errors earlier.",
        "The implementation also includes global rollout infrastructure, monitoring canaries, throttling, and infrastructure-as-code integration points.",
      ],
    },
    {
      title: "Focus",
      body: [
        "For a workflow platform, correctness includes diagnostics and rollout safety as well as API behavior. JSONata validation prevents invalid runtime references, and ValidateStateMachineDefinition lets customers catch definition errors before deployment.",
        "CloudFormation resource-provider capabilities extend the same platform behavior to infrastructure-as-code workflows through lifecycle handlers and integration tests.",
      ],
    },
  ],
  tech: [
    "AWS Step Functions",
    "Backend services",
    "JSONata",
    "CloudFormation",
    "Integration testing",
  ],
  links: [],
  featured: true,
  homepageOrder: 1,
}

export default workflowPlatformFeatures
