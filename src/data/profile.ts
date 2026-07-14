import type { Profile } from "../types/content"

export const profile: Profile = {
  name: "Hong Kun Tian",
  givenName: "Hong Kun",
  familyName: "Tian",
  headline:
    "Backend and distributed-systems engineer building reliable workflow platforms and developer tooling.",
  subheadline:
    "I work on AWS Step Functions, owning production reliability, workflow-platform capabilities, global region launches, deployment automation, and operational tooling.",
  summary:
    "Backend and distributed-systems engineer with 4+ years on AWS Step Functions, building workflow-platform capabilities and tooling for a large-scale serverless service.",
  location: "Vancouver, BC",
  availability:
    "Open to backend, distributed-systems, and platform engineering opportunities.",
  resumeUrl: "/hk_resume.pdf",
  email: "hongkun.tian@hotmail.com",
  socialLinks: [
    {
      label: "Email",
      href: "mailto:hongkun.tian@hotmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/hongkuntian",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/hongkuntian",
    },
  ],
  highlights: [
    {
      value: "4+ yrs",
      label: "on AWS Step Functions and large-scale serverless systems",
    },
    {
      value: "Reliability",
      label: "production infrastructure, monitoring, and rollout safety",
    },
    {
      value: "Agentic tooling",
      label: "LLM agents and human-reviewed operational automation",
    },
  ],
  about: [
    "I work primarily on distributed systems and backend platforms. At AWS Step Functions, I have built customer-facing workflow capabilities, modernized production infrastructure, supported launches across global AWS Regions, and created operational tooling that makes service changes safer to deploy and easier to review.",
  ],
  focusAreas: [
    "Distributed systems",
    "Workflow orchestration",
    "Backend services",
    "Service reliability",
    "Infrastructure automation",
    "Developer tooling",
    "LLM agents",
  ],
  education:
    "B.Sc. Honours Computer Science, McGill University - GPA 4.00/4.00; Alan Shaver Scholarship",
}
