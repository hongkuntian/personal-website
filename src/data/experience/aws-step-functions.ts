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
    "Owned end-to-end modernization of Step Functions alarm infrastructure across roughly 40 AWS Regions, consolidating 1,016 pipeline deployment groups to 75, cutting package build time from 93 to 26 minutes, and aggregating duplicate paging.",
    "Helped deliver state machine versioning and aliases by implementing publish-path idempotency, legacy compatibility, CloudFormation resource behavior, and integration tests for safe traffic shifting and rollback.",
    "Built an SOP-driven LLM agent that reduced manual quota-safety triage by approximately 80% across 10-20 weekly requests while retaining human review.",
    "Owned Step Functions work from internal availability to GA in an isolated AWS environment, diagnosing cross-service failures through remote operators and launching in September 2025.",
    "Built validation, throttling, canaries, and rollout infrastructure that catches workflow-definition errors before deployment and improves diagnostics.",
    "Delivered JSONata expression validation that prevented invalid runtime references and improved developer diagnostics for a major workflow-language launch.",
    "Redesigned operational quota tooling with batching, validation, and safe retry, cutting processing time by roughly 50%.",
    "Consolidated two CloudFormation publishing pipelines and resolved contract-test and cache-sensitive failures, improving successful runs from roughly 20% to 99% over one year.",
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
        "I helped deliver state machine versioning and aliases by implementing publish-path idempotency, legacy compatibility, CloudFormation resource behavior, and integration tests for safe traffic shifting and rollback.",
        "I also built throttling, monitoring canaries, and global rollout infrastructure for the ValidateStateMachineDefinition API; delivered JSONata expression validation that prevents invalid runtime references; and consolidated two CloudFormation publishing pipelines while resolving contract-test and cache-sensitive failures.",
      ],
    },
    {
      title: "Production reliability and infrastructure",
      body: [
        "I owned the end-to-end modernization of Step Functions alarm infrastructure across roughly 40 AWS Regions, consolidating 1,016 pipeline deployment groups to 75, cutting package build time from 93 to 26 minutes, and aggregating duplicate paging.",
        "I also redesigned operational quota tooling after recurring abuse events, batching related changes under one approval, adding validation and safe retry, and cutting processing time by roughly 50%.",
      ],
    },
    {
      title: "Global launches and LLM tooling",
      body: [
        "I owned Step Functions work from internal availability to GA in an isolated AWS environment, diagnosing cross-service failures through remote operators and launching in September 2025.",
        "For operational support, I built an SOP-driven LLM agent with reusable tools that applies a complex quota-safety decision tree. It reduced manual triage by approximately 80% across 10-20 weekly requests while preserving human review.",
      ],
    },
  ],
}

export default awsStepFunctions
