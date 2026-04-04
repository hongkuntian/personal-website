import type {
  ExperienceEntry,
  ProjectCategory,
  ProjectEntry,
} from "../types/content"

const PRESENT_FALLBACK = "9999-12"

function numericDate(value: string): number {
  const [year, month] = value.split("-").map(Number)
  return year * 100 + month
}

export function sortExperienceEntries(
  entries: ExperienceEntry[]
): ExperienceEntry[] {
  return [...entries].sort((left, right) => {
    const rightEnd = numericDate(right.end ?? PRESENT_FALLBACK)
    const leftEnd = numericDate(left.end ?? PRESENT_FALLBACK)

    if (rightEnd !== leftEnd) {
      return rightEnd - leftEnd
    }

    return numericDate(right.start) - numericDate(left.start)
  })
}

export function sortProjectEntries(entries: ProjectEntry[]): ProjectEntry[] {
  return [...entries].sort(
    (left, right) => left.homepageOrder - right.homepageOrder
  )
}

export function getFeaturedExperience(
  entries: ExperienceEntry[]
): ExperienceEntry[] {
  return sortExperienceEntries(entries.filter((entry) => entry.featured)).sort(
    (left, right) => left.homepageOrder - right.homepageOrder
  )
}

export function getFeaturedProjects(entries: ProjectEntry[]): ProjectEntry[] {
  return sortProjectEntries(
    entries.filter(
      (entry) => entry.featured && entry.category === "selected-work"
    )
  )
}

export function getProjectsByCategory(
  entries: ProjectEntry[],
  category: ProjectCategory
): ProjectEntry[] {
  return sortProjectEntries(
    entries.filter((entry) => entry.category === category)
  )
}

export function formatDate(value: string): string {
  const [yearString, monthString] = value.split("-")
  const year = Number(yearString)
  const month = Number(monthString)
  const date = new Date(Date.UTC(year, month - 1))

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date)
}

export function formatDateRange(start: string, end?: string): string {
  const startLabel = formatDate(start)

  if (!end) {
    return `${startLabel} - Present`
  }

  return `${startLabel} - ${formatDate(end)}`
}
