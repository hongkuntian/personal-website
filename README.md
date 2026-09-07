# Hong Kun Tian Portfolio

Modernized personal website built with Astro, TypeScript, and Netlify-friendly static output.

## Stack

- Astro 7
- TypeScript
- CSS variables + CSS Modules
- Vitest + Playwright
- Plausible-ready analytics

## Local development

Use Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

## Commands

- `npm run dev` starts the Astro dev server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the built site locally
- `npm run check` runs Astro type/content checks
- `npm run test:unit` runs unit tests
- `npm run test:e2e` runs Playwright smoke tests
- `npm run format` formats the repo with Prettier

## Redesign previews

With the local server running, open `http://localhost:4321/redesigns/` for the visual comparison gallery:

- `/redesigns/journal/` — an editorial layout with a portrait and visible work summaries
- `/redesigns/scrapbook/` — a project collection with blue and yellow accents
- `/redesigns/poster/` — oversized typography and an electric green work index
- `/redesigns/desktop/` — a desktop-inspired workspace with a section index
- `/redesigns/letter/` — a personal introduction with visible work summaries

Each direction prioritizes six AWS case studies and a 2021 to 2026 career timeline. Pre-AWS work is accessible only through a small footer link to `/redesigns/<design>/archive/`. AWS case studies stay within the AWS category when navigating to the next project.

Each direction has matching project detail pages under `/redesigns/<design>/projects/<slug>/` and a bottom switcher for comparison. The existing homepage remains at `/`. Preview pages are marked `noindex` and excluded from the sitemap.

The previews use `src/assets/profile-2026.png`. The gallery screenshots live in `public/redesign-previews/` and should be refreshed when the designs change.

## Analytics

The site includes Plausible only in production and only when `PUBLIC_PLAUSIBLE_DOMAIN` is set.

Example:

```bash
PUBLIC_PLAUSIBLE_DOMAIN=hongkuntian.me npm run build
```

Optionally override the script source with `PUBLIC_PLAUSIBLE_SRC`.

## Deploy

`netlify.toml` is configured for static Astro output:

- build command: `npm run build`
- publish directory: `dist`
- redirects for `/resume/` and legacy `/personal-website` paths
