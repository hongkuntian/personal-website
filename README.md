# Hong Kun Tian

Personal website at [hongkuntian.me](https://hongkuntian.me), built with Astro and TypeScript and hosted on Netlify.

The site uses the Personal design: warm paper tones, serif typography, a color portrait, and a compact reading column. Six AWS Step Functions case studies and the AWS career timeline are the main content. Earlier projects live at `/archive/`.

## Development

Use Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

- `npm run check` checks Astro and TypeScript.
- `npm run test:unit` checks content ordering and categories.
- `npm run test:e2e` checks navigation, case studies, archives, metadata, redirects, résumé integrity and responsive layouts with Playwright.
- `npm run build` generates the static site in `dist/`.
- `npm run preview` serves the production build locally.

## Structure

- `src/layouts/BaseLayout.astro`: shared page layout, metadata, structured data and optional analytics.
- `src/styles/personal.css`: the production design and responsive rules.
- `src/components/WorkList.astro` and `AwsCareer.astro`: reusable AWS summaries and timeline.
- `src/data/aws-work.ts`: canonical AWS case studies and career milestones.
- `src/data/site-content.ts`: introduction and education copy.
- `src/data/projects/`: earlier project records and the combined project collection.
- `src/pages/projects/[slug].astro`: shared project detail pages.

Existing project, experience and résumé URLs remain supported. Retired `/redesigns/` URLs redirect to the corresponding production page. The five design explorations are preserved in Git at commit `b7cb948`; the production build contains the selected design and redirect pages. Design review notes in `docs/` describe the earlier comparison.

## Deployment

The main branch is `master`. `netlify.toml` specifies `npm run build`, the `dist/` publish directory, and legacy redirects. After pushing, verify the deployment at [hongkuntian.me](https://hongkuntian.me).

Plausible analytics is enabled only in production when `PUBLIC_PLAUSIBLE_DOMAIN` is set. `PUBLIC_PLAUSIBLE_SRC` can override the default script URL.
