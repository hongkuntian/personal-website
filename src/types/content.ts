import type { ImageMetadata } from "astro"

export interface ContentLink {
  label: string
  url: string
}

export interface DetailSection {
  title: string
  body: string[]
}

export interface SocialLink {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SeoMeta {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}

export interface ProfileHighlight {
  value: string
  label: string
}

export interface EarlierRole {
  company: string
  role: string
  start: string
  end: string
  summary: string
}

export interface Profile {
  name: string
  givenName: string
  familyName: string
  headline: string
  subheadline: string
  summary: string
  location: string
  availability: string
  resumeUrl: string
  email: string
  socialLinks: SocialLink[]
  highlights: ProfileHighlight[]
  about: string[]
  focusAreas: string[]
  education: string
}

export interface ExperienceEntry {
  slug: string
  company: string
  role: string
  location: string
  start: string
  end?: string
  summary: string
  highlights: string[]
  impact: string[]
  tech: string[]
  links: ContentLink[]
  featured: boolean
  homepageOrder: number
  detailSections: DetailSection[]
}

export type ProjectCategory = "selected-work" | "archive"

export interface ProjectEntry {
  slug: string
  name: string
  category: ProjectCategory
  tagline: string
  summary: string
  highlights?: string[]
  descriptionSections: DetailSection[]
  tech: string[]
  links: ContentLink[]
  image?: ImageMetadata
  imageAlt?: string
  featured: boolean
  homepageOrder: number
}
