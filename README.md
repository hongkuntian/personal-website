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
