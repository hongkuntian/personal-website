import logo from "../../assets/projects/mindbook-logo.png"
import type { ProjectEntry } from "../../types/content"

const mindbook: ProjectEntry = {
  slug: "mindbook",
  name: "MindBook",
  category: "archive",
  tagline: "Sentiment-aware journaling app built at ConUHacks.",
  summary:
    "A journaling web app that analyzes user entries and recommends activities based on predicted mood.",
  descriptionSections: [
    {
      title: "What it does",
      body: [
        "MindBook lets users log journal entries, stores them in Firebase, and runs sentiment analysis to tailor recommendations to the user's mood.",
        "The project was built as a hackathon product, so the emphasis was on delivering a coherent end-to-end experience quickly without losing implementation quality.",
      ],
    },
    {
      title: "My contribution",
      body: [
        "I worked on the React frontend and on connecting the client experience to a Node.js backend and Firebase persistence.",
        "The project reinforced my preference for products that combine a clear interface with meaningful backend behavior rather than treating frontend work as a thin wrapper.",
      ],
    },
  ],
  tech: ["React", "Node.js", "Firebase", "IBM Tone Analyzer", "CSS"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/pengyk/diary_of_a_wimpy_kid",
    },
    {
      label: "Devpost",
      url: "https://devpost.com/software/mindbook",
    },
  ],
  image: logo,
  imageAlt: "MindBook project logo",
  featured: false,
  homepageOrder: 4,
}

export default mindbook
