# One Call Heating & Air

A Vite + React + TypeScript website for One Call Heating & Air in northern Utah.

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

The production bundle is written to `dist/`.

## Project Structure

```text
src/
  components/   Shared link, image, and route behavior
  config/       Business details and route constants
  hooks/        Shared browser behavior
  pages/        Thin route compositions
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

Configure the static host to serve `index.html` for unknown paths. This fallback is required for direct visits to client-side routes such as `/about/social-media`, `/location`, and `/emergency`.

The contact form posts to Formspree, and page styles currently load Archivo Black and Inter from Google Fonts.
