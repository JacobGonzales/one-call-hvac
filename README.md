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

Next.js writes its production build to `.next/`. The Cloudflare build then packages it into `.open-next/`.

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

For Cloudflare Builds, use `npm run cf:build` as the build command and
`npm run cf:deploy` as the deploy command.

The contact form posts to Formspree, and page styles currently load Archivo Black and Inter from Google Fonts.
