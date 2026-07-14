import type { ProjectEntry } from "../../types/content"

const regionRolloutReliability: ProjectEntry = {
  slug: "region-rollout-reliability",
  name: "Global rollout and production reliability",
  category: "selected-work",
  tagline:
    "Infrastructure modernization and safe launches across global AWS Regions.",
  summary:
    "Owned reliability work spanning alarm infrastructure, deployment automation, global feature parity, and operational rollouts for AWS Step Functions.",
  highlights: [
    "Consolidated alarm infrastructure from 1,016 managed resources to 75 and cut alarm-infrastructure synthesis time from 93 to 26 minutes.",
    "Drove feature launches across commercial, China, GovCloud, and isolated Regions while resolving cross-service failures.",
    "Built tooling to roll out customer quota changes across 168 accounts and 24 Regions and monitor production regressions.",
  ],
  descriptionSections: [
    {
      title: "Infrastructure modernization",
      body: [
        "I owned the end-to-end modernization of Step Functions alarm infrastructure, including deployment automation. The work reduced 1,016 managed resources to 75, cut alarm-infrastructure synthesis time from 93 to 26 minutes, and eliminated redundant per-service paging in migrated regions.",
        "The result was a smaller, faster, and more consistent operational footprint for a large-scale serverless service.",
      ],
    },
    {
      title: "Global rollouts",
      body: [
        "I drove Step Functions feature launches and parity across commercial, China, GovCloud, and isolated AWS Regions, resolving cross-service deployment failures in restricted environments.",
        "I also built operational tooling for quota changes across 168 accounts and 24 Regions, with monitoring for production workflow regressions.",
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
