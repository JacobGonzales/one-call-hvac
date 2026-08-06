# One Call Heating & Air

A Next.js + React + TypeScript website for One Call Heating & Air in northern Utah.

Production URL: `https://utahonecall.com`

## Pages

- `/` — Home
- `/services` — Services
- `/about` — About
- `/about/social-media` — Social Media placeholder
- `/location` — Location placeholder
- `/emergency` — Emergency HVAC placeholder
- `/contact` — Contact and service request
- `/404` — Branded not-found page

Unknown URLs render the same not-found page.

## Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` runs the Next.js production build and packages it into `.open-next/` for Cloudflare. Use `npm run next:build` when only the local `.next/` output is needed.

## Project Structure

```text
src/
  app/          Next.js App Router routes and route metadata
  components/   Shared link, image, and route behavior
  config/       Business details and route constants
  hooks/        Shared browser behavior
  screens/      Reusable page compositions and visual sections
    home/       Home sections, data, primitives, and CSS
    services/   Services sections, data, primitives, and CSS
    about/      About sections, data, primitives, and CSS
    contact/    Contact sections, data, primitives, and CSS
public/
  onecall-heating-and-air/   Site images and SVG assets
scripts/
  sync-agents.mjs            Regenerates AGENTS.md
```

## Hosting

The site deploys through OpenNext to a Node.js-compatible Cloudflare Worker.
`wrangler.jsonc` publishes `.open-next/worker.js` and `.open-next/assets`, and
maps the Worker to `utahonecall.com`.

```bash
npm run deploy
```

For Cloudflare Builds, use `npm run build` as the build command and
`npx wrangler deploy` as the deploy command.

The contact form posts to Formspree, and page styles currently load Archivo Black and Inter from Google Fonts.
