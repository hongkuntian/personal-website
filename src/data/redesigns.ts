import { awsWork } from "./aws-work"

export const redesigns = [
  {
    slug: "journal",
    name: "Editorial",
    number: "01",
    description:
      "Warm paper tones, serif headings, and a compact introduction to AWS work.",
    color: "#f5f1e8",
  },
  {
    slug: "scrapbook",
    name: "Collection",
    number: "02",
    description:
      "Blue and muted yellow accents, a project grid, and straightforward navigation.",
    color: "#f4dc45",
  },
  {
    slug: "poster",
    name: "Typography",
    number: "03",
    description:
      "Large type, green accents, and a compact list of engineering work.",
    color: "#d3e5a7",
  },
  {
    slug: "desktop",
    name: "Workspace",
    number: "04",
    description:
      "A fixed section index and visible work summaries in a structured layout.",
    color: "#306e68",
  },
  {
    slug: "letter",
    name: "Personal",
    number: "05",
    description:
      "A narrow reading column with work summaries, experience, and contact details.",
    color: "#ecf1f5",
  },
] as const
export type Design = (typeof redesigns)[number]["slug"]
export const workNotes = awsWork.map((work) => ({
  slug: work.slug,
  title: work.name,
  description: work.summary,
  label: work.label,
  period: work.period,
  stat: work.stat,
  caption: work.caption,
}))
