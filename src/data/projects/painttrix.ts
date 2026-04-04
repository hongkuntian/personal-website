import logo from "../../assets/projects/painttrix-logo.png"
import type { ProjectEntry } from "../../types/content"

const painttrix: ProjectEntry = {
  slug: "painttrix",
  name: "PaintTrix",
  category: "archive",
  tagline: "Gesture-based drawing powered by pose estimation.",
  summary:
    "A Python application that lets users draw on-screen through controlled hand movements.",
  descriptionSections: [
    {
      title: "What it does",
      body: [
        "PaintTrix turns pose estimation into a playful drawing interface, using camera input as the control surface.",
        "It was a good example of building a lightweight product around a novel interaction model.",
      ],
    },
    {
      title: "Technical focus",
      body: [
        "The project combined computer-vision inputs with a desktop application flow, which meant thinking carefully about responsiveness and user feedback.",
        "Even in a smaller build, the challenge was translating model output into something stable enough for a person to actually use.",
      ],
    },
  ],
  tech: ["Python", "TkInter", "Pose estimation"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/hongkuntian/paint-trix",
    },
    {
      label: "Devpost",
      url: "https://devpost.com/software/painttrix",
    },
  ],
  image: logo,
  imageAlt: "PaintTrix project logo",
  featured: false,
  homepageOrder: 4,
}

export default painttrix
