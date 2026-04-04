import logo from "../../assets/projects/travelcc-logo.png"
import type { ProjectEntry } from "../../types/content"

const travelcc: ProjectEntry = {
  slug: "travelcc",
  name: "TravelCC",
  category: "archive",
  tagline: "Hack The North project for currency recognition and conversion.",
  summary:
    "An Android app that recognizes foreign currency from captured images and converts it into the user's home currency.",
  descriptionSections: [
    {
      title: "What it does",
      body: [
        "TravelCC uses a smartphone camera to identify foreign bills and pair that recognition flow with live currency conversion data.",
        "The project was designed around a clear user problem: making travel less awkward when dealing with unfamiliar cash.",
      ],
    },
    {
      title: "Implementation notes",
      body: [
        "I worked on API integration and data flow between the mobile app, Firebase-backed services, and currency conversion APIs.",
        "The build reinforced how much product value can come from connecting a few focused capabilities into a fast, low-friction experience.",
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
