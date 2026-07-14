import type { ExperienceEntry } from "../../types/content"

const awsStepFunctions: ExperienceEntry = {
  slug: "aws-step-functions",
  company: "Amazon Web Services",
  role: "Software Development Engineer II",
  location: "Vancouver, BC",
  start: "2022-07",
  summary:
    "Owning production reliability, workflow-platform capabilities, global region launches, deployment automation, and operational tooling for AWS Step Functions.",
  highlights: [
    "Modernized alarm infrastructure end to end, consolidating 1,016 managed resources to 75 and cutting alarm-infrastructure synthesis time from 93 to 26 minutes.",
    "Designed core backend functionality for state machine versioning and aliases, enabling immutable workflow versions and safer production traffic shifts.",
    "Built an SOP-driven LLM agent that reduced manual quota-safety triage by approximately 80% across 10-20 weekly requests while retaining human review.",
    "Drove feature launches and parity across commercial, China, GovCloud, and isolated AWS Regions, resolving cross-service failures in restricted environments.",
    "Built validation, throttling, canaries, and rollout infrastructure that catches workflow-definition errors before deployment and improves diagnostics.",
    "Created operational tooling for quota changes across 168 accounts and 24 AWS Regions and delivered CloudFormation resource-provider capabilities.",
  ],
  impact: [
    "Production reliability ownership",
    "Workflow-platform capabilities",
    "Global region launches",
    "Operational and LLM tooling",
  ],
  tech: [
    "AWS",
    "AWS Step Functions",
    "CloudFormation",
    "CDK",
    "DynamoDB",
    "CloudWatch",
    "EventBridge",
    "CI/CD",
  ],
  links: [],
  featured: true,
  homepageOrder: 1,
  detailSections: [
    {
      title: "Workflow-platform capabilities",
      body: [
        "I designed and implemented core backend functionality for state machine versioning and aliases, enabling customers to publish immutable workflow versions and safely shift production traffic.",
        "I also built throttling, monitoring canaries, and global rollout infrastructure for the ValidateStateMachineDefinition API; delivered JSONata expression validation that prevents invalid runtime references; and added CloudFormation resource-provider lifecycle handlers with automated integration tests.",
      ],
    },
    {
      title: "Production reliability and infrastructure",
      body: [
        "I owned the end-to-end modernization of Step Functions alarm infrastructure, automating deployments, reducing the managed resource count from 1,016 to 75, cutting alarm-infrastructure synthesis time from 93 to 26 minutes, and eliminating redundant per-service paging in migrated regions.",
        "I also built operational tooling to safely roll out customer quota changes across 168 accounts and 24 AWS Regions while monitoring production workflow regressions.",
      ],
    },
    {
      title: "Global launches and LLM tooling",
      body: [
        "I drove Step Functions feature launches and parity across commercial, China, GovCloud, and isolated AWS Regions, resolving cross-service deployment failures in restricted environments.",
        "For operational support, I built an SOP-driven LLM agent with reusable tools that applies a complex quota-safety decision tree. It reduced manual triage by approximately 80% across 10-20 weekly requests while preserving human review.",
      ],
    },
  ],
}

export default awsStepFunctions
