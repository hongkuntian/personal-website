import type { ProjectEntry } from "../../types/content"

const agentWorkflowsAndAutomation: ProjectEntry = {
  slug: "agent-workflows-and-automation",
  name: "SOP-driven LLM automation",
  category: "selected-work",
  tagline: "Human-reviewed automation for complex quota-safety triage.",
  summary:
    "Built an LLM agent with reusable tools that applies a complex quota-safety decision tree while keeping engineers in the review loop.",
  highlights: [
    "Reduced manual triage by approximately 80% across 10-20 weekly requests.",
    "Encoded an SOP-driven decision tree through reusable agent tools.",
    "Retained human review for quota-safety decisions.",
  ],
  descriptionSections: [
    {
      title: "Scope",
      body: [
        "The agent applies a complex quota-safety decision tree to recurring operational requests. Reusable tools give the workflow structured actions instead of relying on unconstrained text generation.",
        "The system handles 10-20 weekly requests and reduced manual triage by approximately 80% while preserving human review.",
      ],
    },
    {
      title: "Why it matters",
      body: [
        "The workflow turns a detailed operating procedure into inspectable automation without removing engineers from safety-sensitive decisions.",
        "It demonstrates how LLM agents, tool calling, and explicit review boundaries can reduce repetitive work in production operations.",
      ],
    },
  ],
  tech: [
    "LLM agents",
    "Tool calling",
    "SOP-driven automation",
    "Human-in-the-loop",
    "Operational tooling",
  ],
  links: [],
  featured: true,
  homepageOrder: 3,
}

export default agentWorkflowsAndAutomation
