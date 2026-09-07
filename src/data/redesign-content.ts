import { projectEntries } from "./projects"
import { awsWork } from "./aws-work"
import type { DetailSection } from "../types/content"

export const introduction =
  "I'm a software engineer at AWS Step Functions in Vancouver. I own alarm infrastructure and operational tooling, and have helped deliver workflow-language features and regional launches."
export const experienceSummary =
  "I joined AWS Step Functions as an intern in 2021, returned full-time in 2022, and became a Software Development Engineer II in 2024."
export const educationSummary =
  "I studied Honours Computer Science at McGill University, graduating with a 4.00 GPA and the Alan Shaver Scholarship."

const sections: Record<string, DetailSection[]> = {
  mindbook: [
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
  painttrix: [
    {
      title: "Drawing with gestures",
      body: [
        "PaintTrix uses camera input and pose estimation to let people draw on screen with hand movements. The desktop app uses Python and TkInter.",
        "The implementation translates pose estimates into drawing controls, with attention to responsiveness and stable input.",
      ],
    },
  ],
  nlpure: [
    {
      title: "Toxicity detection",
      body: [
        "NLPure detects toxic language through a web interface. The project uses Keras and scikit-learn for machine learning, with React and Node.js for the app.",
        "It won first place at McGill CodeJam.",
      ],
    },
  ],
  travelcc: [
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
  sureviews: [
    {
      title: "Review summaries",
      body: [
        "Sureviews summarizes Google Maps reviews and groups sentiment by subcategory so users can compare aspects of a location.",
        "It uses Python and Flask for the backend, JavaScript for the interface, and data from Google Maps Platform.",
      ],
    },
  ],
}

const summaries: Record<string, string> = {
  mindbook:
    "A journaling app that analyzes entries and recommends activities based on the user's mood.",
  painttrix:
    "A Python app for drawing on screen with hand gestures captured by a camera.",
  nlpure:
    "A text toxicity detection app that won first place at McGill CodeJam.",
  travelcc:
    "An Android app that identifies foreign banknotes and converts their value into the user's home currency.",
  sureviews:
    "A web app that summarizes Google Maps reviews and groups sentiment by subcategory.",
}

export const previewProjects = [
  ...awsWork,
  ...projectEntries
    .filter((project) => project.category === "archive")
    .map((project) => ({
      ...project,
      summary: summaries[project.slug] ?? project.summary,
      descriptionSections:
        sections[project.slug] ?? project.descriptionSections,
    })),
]
