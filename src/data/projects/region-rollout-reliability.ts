import type { ProjectEntry } from "../../types/content"

const regionRolloutReliability: ProjectEntry = {
  slug: "region-rollout-reliability",
  name: "Global rollout and production reliability",
  category: "selected-work",
  tagline:
    "Infrastructure modernization and safe launches across global AWS Regions.",
  summary:
    "Owned reliability work spanning alarm infrastructure across roughly 40 AWS Regions, deployment automation, an isolated AWS launch, and operational quota tooling for Step Functions.",
  highlights: [
    "Consolidated 1,016 pipeline deployment groups to 75 and cut package build time from 93 to 26 minutes.",
    "Owned Step Functions work from internal availability to GA in an isolated AWS environment, launching in September 2025.",
    "Redesigned operational quota tooling with batching, validation, and safe retry, cutting processing time by roughly 50%.",
    "Consolidated two CloudFormation publishing pipelines, improving successful runs from roughly 20% to 99% over one year.",
  ],
  descriptionSections: [
    {
      title: "Infrastructure modernization",
      body: [
        "I owned the end-to-end modernization of Step Functions alarm infrastructure across roughly 40 AWS Regions, consolidating 1,016 pipeline deployment groups to 75, cutting package build time from 93 to 26 minutes, and aggregating duplicate paging.",
        "I also consolidated two CloudFormation publishing pipelines and resolved contract-test and cache-sensitive failures, improving successful runs from roughly 20% to 99% over one year.",
      ],
    },
    {
      title: "Global rollouts",
      body: [
        "I owned Step Functions work from internal availability to GA in an isolated AWS environment, diagnosing cross-service failures through remote operators and launching in September 2025.",
        "I also redesigned operational quota tooling after recurring abuse events, batching related changes under one approval, adding validation and safe retry, and cutting processing time by roughly 50%.",
      ],
    },
  ],
  tech: [
    "AWS Regions",
    "CI/CD",
    "Deployment automation",
    "CloudWatch",
    "Service reliability",
  ],
  links: [],
  featured: true,
  homepageOrder: 2,
}

export default regionRolloutReliability
