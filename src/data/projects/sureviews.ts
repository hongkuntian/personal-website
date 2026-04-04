import logo from "../../assets/projects/sureviews-logo.png"
import type { ProjectEntry } from "../../types/content"

const sureviews: ProjectEntry = {
  slug: "sureviews",
  name: "Sureviews",
  category: "archive",
  tagline: "Review summarization for locations on Google Maps.",
  summary:
    "A web app that summarizes review data and generates sentiment-driven subcategory insights for places.",
  descriptionSections: [
    {
      title: "What it does",
      body: [
        "Sureviews condenses large numbers of reviews into a faster read for users trying to assess a location.",
        "The product idea was to turn noisy review text into something more actionable than scrolling through dozens of comments.",
      ],
    },
    {
      title: "Technical focus",
      body: [
        "The implementation combined Python services, frontend code, and third-party platform data to produce summarized outputs.",
        "It was another useful example of stitching together external data, model behavior, and a UI into a coherent product loop.",
      ],
    },
  ],
  tech: ["Python", "Flask", "JavaScript", "Google Maps Platform"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/nanananisore/sureview",
    },
    {
      label: "Devpost",
      url: "https://devpost.com/software/sureviews",
    },
  ],
  image: logo,
  imageAlt: "Sureviews project logo",
  featured: false,
  homepageOrder: 5,
}

export default sureviews
