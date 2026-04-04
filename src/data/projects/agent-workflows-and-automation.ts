import type { ProjectEntry } from "../../types/content"

const agentWorkflowsAndAutomation: ProjectEntry = {
  slug: "agent-workflows-and-automation",
  name: "Agent workflows and internal automation",
  category: "selected-work",
  tagline:
    "Operational tooling and agent-assisted workflows for engineering teams.",
  summary:
    "Built internal tooling that combines operational context, structured workflows, and LLM assistance for triage, reporting, debugging, and repetitive engineering tasks.",
  highlights: [
    "Built internal tooling for on-call debugging, batch operations, and visibility into service behavior.",
    "Created research-oriented tools for navigating large codebases and documentation during investigations.",
    "Integrated LLM-powered workflows into operational tasks such as triage, reporting, and assistance-oriented automation.",
  ],
  descriptionSections: [
    {
      title: "Scope",
      body: [
        "This work sits inside a broader tooling and automation stack rather than off to the side as a separate experiment. The useful systems are the ones that reduce manual overhead, improve context gathering, and fit into the way engineers already work during incidents or operational reviews.",
        "That leads to practical designs: constrained tools, explicit workflow boundaries, and outputs that are easy to inspect.",
      ],
    },
    {
      title: "Why it matters",
      body: [
        "This work grows out of the same operational pain points as the rest of the tooling effort: too much manual triage, scattered context, and repetitive debugging steps.",
        "The challenge is connecting language-model capabilities to real systems and operators without losing clarity or engineering discipline.",
      ],
    },
  ],
  tech: [
    "Developer tooling",
    "Operational automation",
    "LLM workflows",
    "Triage systems",
    "Codebase navigation",
  ],
  links: [],
  featured: true,
  homepageOrder: 3,
}

export default agentWorkflowsAndAutomation
