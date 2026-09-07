import type { ExperienceEntry } from "../../types/content"
import { awsWork } from "../aws-work"
import { experienceSummary } from "../site-content"

const awsStepFunctions: ExperienceEntry = {
  slug: "aws-step-functions",
  company: "Amazon Web Services",
  role: "Software Development Engineer II, AWS Step Functions",
  location: "Vancouver, BC",
  start: "2024-04",
  summary: experienceSummary,
  highlights: awsWork.map((work) => work.summary),
  impact: [
    "Workflow APIs",
    "Production infrastructure",
    "Region launches",
    "Operational tooling",
  ],
  tech: ["AWS Step Functions", "Java", "DynamoDB", "CloudFormation", "Python"],
  links: [],
  featured: true,
  homepageOrder: 1,
  detailSections: awsWork.flatMap((work) => work.descriptionSections),
}
export default awsStepFunctions
