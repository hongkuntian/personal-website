import logo from "../../assets/projects/painttrix-logo.png"
import type { ProjectEntry } from "../../types/content"

const painttrix: ProjectEntry = {
  slug: "painttrix",
  name: "PaintTrix",
  category: "archive",
  tagline: "Gesture-based drawing powered by pose estimation.",
  summary:
    "A Python app for drawing on screen with hand gestures captured by a camera.",
  descriptionSections: [
    {
      title: "Drawing with gestures",
      body: [
        "PaintTrix uses camera input and pose estimation to let people draw on screen with hand movements. The desktop app uses Python and TkInter.",
        "The implementation translates pose estimates into drawing controls, with attention to responsiveness and stable input.",
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
