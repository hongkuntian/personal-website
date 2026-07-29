import type { ProjectEntry } from "../../types/content"

const workflowPlatformFeatures: ProjectEntry = {
  slug: "workflow-platform-features",
  name: "Workflow platform features",
  category: "selected-work",
  tagline: "Developer-facing workflow capabilities and validation.",
  summary:
    "Contributed backend capabilities for state machine versioning and aliases, workflow validation, and safer production rollouts.",
  highlights: [
    "Helped deliver state machine versioning and aliases by implementing publish-path idempotency, legacy compatibility, CloudFormation resource behavior, and integration tests.",
    "Built throttling, monitoring canaries, and global rollout infrastructure for the ValidateStateMachineDefinition API.",
    "Delivered JSONata validation that prevents invalid runtime references and improves developer diagnostics.",
    "Consolidated two CloudFormation publishing pipelines, improving successful runs from roughly 20% to 99% over one year.",
  ],
  descriptionSections: [
    {
      title: "Scope",
      body: [
        "I helped deliver state machine versioning and aliases by implementing publish-path idempotency, legacy compatibility, CloudFormation resource behavior, and integration tests for safe traffic shifting and rollback.",
        "The implementation also includes global rollout infrastructure, monitoring canaries, throttling, and infrastructure-as-code integration points.",
      ],
    },
    {
      title: "Focus",
      body: [
        "For a workflow platform, correctness includes diagnostics and rollout safety as well as API behavior. JSONata validation prevents invalid runtime references, and ValidateStateMachineDefinition lets customers catch definition errors before deployment.",
        "My CloudFormation work covered versioning resource behavior and publishing pipelines, including resolving contract-test and cache-sensitive failures.",
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
