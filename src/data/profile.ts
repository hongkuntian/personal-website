import type { Profile } from "../types/content"

export const profile: Profile = {
  name: "Hong Kun Tian",
  givenName: "Hong Kun",
  familyName: "Tian",
  headline:
    "Software engineer focused on distributed systems, backend platform work, and developer tooling.",
  subheadline:
    "Recent work spans AWS Step Functions, platform reliability, and tooling for engineers operating production systems.",
  summary:
    "I build distributed systems, developer-facing platform features, and tooling that makes backend systems easier to ship and operate.",
  location: "United States",
  availability:
    "Open to software engineering opportunities with strong product and infrastructure depth.",
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
      label: "shipping distributed systems and backend platform work",
    },
    {
      value: "AWS",
      label:
        "recent focus on workflow orchestration, rollout reliability, and service tooling",
    },
    {
      value: "Tooling",
      label: "recent work includes agent workflows and operational automation",
    },
  ],
  about: [
    "I work primarily on distributed systems, with a focus on backend platform design and reliability. Much of that work is about making workflows easier to validate, safer to deploy, and easier to operate when things go wrong. I also build developer tooling for debugging, automation, and day-to-day service ownership. More recently, that has included agent workflows that help with triage, reporting, and operational tasks.",
  ],
  focusAreas: [
    "Distributed systems",
    "Backend platform and reliability",
    "Developer tooling",
    "Workflow orchestration",
    "Operational automation",
    "Agent workflows",
    "TypeScript and Java ecosystems",
  ],
  education: "B.Sc. Honours Computer Science, McGill University",
}
