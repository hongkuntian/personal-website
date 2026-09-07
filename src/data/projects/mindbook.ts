import logo from "../../assets/projects/mindbook-logo.png"
import type { ProjectEntry } from "../../types/content"

const mindbook: ProjectEntry = {
  slug: "mindbook",
  name: "MindBook",
  category: "archive",
  tagline: "Sentiment-aware journaling app built at ConUHacks.",
  summary:
    "A journaling app that analyzes entries and recommends activities based on the user's mood.",
  descriptionSections: [
    {
      title: "The app",
      body: [
        "MindBook is a journaling app built at ConUHacks. It uses sentiment analysis to recommend activities based on a journal entry.",
      ],
    },
    {
      title: "My contribution",
      body: [
        "I worked on the React frontend and its connections to the Node.js backend and Firebase storage. IBM Tone Analyzer handled sentiment analysis.",
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
