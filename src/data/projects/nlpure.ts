import logo from "../../assets/projects/nlpure-logo.png"
import type { ProjectEntry } from "../../types/content"

const nlpure: ProjectEntry = {
  slug: "nlpure",
  name: "NLPure",
  category: "archive",
  tagline: "First-place text toxicity detection project from McGill CodeJam.",
  summary:
    "A text toxicity detection app that won first place at McGill CodeJam.",
  descriptionSections: [
    {
      title: "Toxicity detection",
      body: [
        "NLPure detects toxic language through a web interface. The project uses Keras and scikit-learn for machine learning, with React and Node.js for the app.",
        "It won first place at McGill CodeJam.",
      ],
    },
  ],
  tech: ["Keras", "scikit-learn", "React", "Node.js"],
  links: [
    {
      label: "Devpost",
      url: "https://devpost.com/software/nlpure",
    },
  ],
  image: logo,
  imageAlt: "NLPure project logo",
  featured: false,
  homepageOrder: 5,
}

export default nlpure
