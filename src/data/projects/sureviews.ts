import logo from "../../assets/projects/sureviews-logo.png"
import type { ProjectEntry } from "../../types/content"

const sureviews: ProjectEntry = {
  slug: "sureviews",
  name: "Sureviews",
  category: "archive",
  tagline: "Review summarization for locations on Google Maps.",
  summary:
    "A web app that summarizes Google Maps reviews and groups sentiment by subcategory.",
  descriptionSections: [
    {
      title: "Review summaries",
      body: [
        "Sureviews summarizes Google Maps reviews and groups sentiment by subcategory so users can compare aspects of a location.",
        "It uses Python and Flask for the backend, JavaScript for the interface, and data from Google Maps Platform.",
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
