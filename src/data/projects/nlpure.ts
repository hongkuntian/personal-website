import logo from "../../assets/projects/nlpure-logo.png"
import type { ProjectEntry } from "../../types/content"

const nlpure: ProjectEntry = {
  slug: "nlpure",
  name: "NLPure",
  category: "archive",
  tagline: "First-place text toxicity detection project from McGill CodeJam.",
  summary:
    "A text toxicity detection project built with machine learning and a lightweight web interface.",
  descriptionSections: [
    {
      title: "What it does",
      body: [
        "NLPure focused on detecting toxic language and turning a machine learning workflow into a usable product experience.",
        "It was a compact project, but a useful demonstration of combining model work with practical delivery constraints.",
      ],
    },
    {
      title: "Why it matters",
      body: [
        "The project reflects an early pattern in my work: taking technically interesting systems and shaping them into something understandable for end users.",
        "It also gave me experience working across ML tooling and product implementation in the same build cycle.",
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
