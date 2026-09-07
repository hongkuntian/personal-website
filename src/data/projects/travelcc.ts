import logo from "../../assets/projects/travelcc-logo.png"
import type { ProjectEntry } from "../../types/content"

const travelcc: ProjectEntry = {
  slug: "travelcc",
  name: "TravelCC",
  category: "archive",
  tagline: "Hack The North project for currency recognition and conversion.",
  summary:
    "An Android app that identifies foreign banknotes and converts their value into the user's home currency.",
  descriptionSections: [
    {
      title: "Currency recognition",
      body: [
        "TravelCC is an Android app built at Hack The North. It recognizes foreign banknotes from a camera image and converts their value into the user's home currency.",
      ],
    },
    {
      title: "My contribution",
      body: [
        "I worked on API integration and data flow between the Android app, Firebase services, and the XE Currency Data API.",
      ],
    },
  ],
  tech: ["Java", "Firebase API", "XE Currency Data API", "Android"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/dayjay49/currency_converter",
    },
    {
      label: "Devpost",
      url: "https://devpost.com/software/travel-cc",
    },
  ],
  image: logo,
  imageAlt: "TravelCC project logo",
  featured: false,
  homepageOrder: 6,
}

export default travelcc
