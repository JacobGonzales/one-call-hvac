# AGENTS.repo-one-call-hvac.md

## Purpose

- This file contains repository-specific guidance for `one-call-hvac`.
- Pair it with `AGENTS.base-react.md` when reusing the shared React guidance.

## Current Stack

- Framework: Vite 6
- UI: React 19, strict TypeScript, and route-level CSS
- Routing: a small browser-history adapter in `src/App.tsx` and `src/components/Link.tsx`
- Linting: ESLint flat config with TypeScript and React Refresh rules
- Build output: static assets in `dist/`
- Installed compatibility stack: Next.js 16, OpenNext Cloudflare, Tailwind CSS 4, MUI, Radix UI, Motion, Vitest, Testing Library, and Playwright

## Current Structure

- `src/pages/`: thin route-level page compositions
- `src/pages/<route>/`: route-owned sections, data, primitives, and CSS
- `src/components/`: shared routing, image, and application helpers
- `src/config/`: shared business and route constants
- `src/hooks/`: shared browser interaction hooks
- `public/onecall-heating-and-air/`: site images and SVG assets
- `scripts/`: repository maintenance scripts

## Route Inventory

- `/`: home page
- `/services`: HVAC services
- `/about`: company and service-area information
- `/about/social-media`: placeholder for social channels and community updates
- `/location`: placeholder for business location and directions
- `/emergency`: placeholder for 24/7 emergency HVAC information
- `/contact`: service request and contact information
- `/404`: branded not-found page; unmatched paths render the same fallback

Keep `src/App.tsx`, route titles in `src/components/RouteEffects.tsx`, and this inventory synchronized when routes change.

## Commands

- `npm run dev`: start Vite on `localhost:3000`
- `npm run typecheck`: run strict TypeScript checks
- `npm run lint`: run ESLint
- `npm run build`: typecheck and create the production bundle
- `npm run preview`: preview the production build on `localhost:3000`
- `npm run sync:agents`: rebuild `AGENTS.md` from its source guides

## React and Vite Conventions

- Use the `@/` alias for imports from `src/`.
- Keep route declarations in `src/App.tsx`.
- Route-level pages may use default exports because they are loaded with `React.lazy`.
- Use named exports for reusable components, hooks, constants, and helpers.
- Keep route files as composition and state orchestration only; put each major visual section in its route folder.
- Keep route-specific copy and list data in the route’s `*-data.ts` or `*-data.tsx` file.
- Keep route CSS in the route folder instead of embedding large `<style>` blocks in components.
- Keep static assets under `public/onecall-heating-and-air/` and reference them with root-relative URLs.
- Preserve the suite page class prefixes (`oc-`, `ocs-`, `oca-`, and `occ-`) unless the related styles are intentionally consolidated.
- Use the shared `Link` component for client-side internal navigation. Use ordinary anchors for phone, email, external, and form actions.
- Preserve the mobile drawer, hero carousel, FAQ, anchor navigation, and contact form behavior when refactoring.
- Keep the contact form endpoint, phone number, email address, business hours, and service-area copy centralized if a future change touches them across multiple pages.

## Validation Minimum

- Run `npm run typecheck`, `npm run lint`, and `npm run build` after page or route changes.
- Check every route in the production bundle when navigation, assets, or fallback behavior changes.
- Verify mobile layout when changing page-level CSS, navigation, fixed calls to action, or form controls.

## Git Workflow

- Do not run `git push`, `git pull`, or `git commit` unless the user explicitly asks for that exact action.
- Read-only commands such as `git status`, `git diff`, and `git log` are allowed when the repository has Git metadata.

## Local Server Policy

- Use `localhost:3000` as the default local development and preview port.
- If port 3000 is already serving this repository, reuse it rather than starting a second server.
- Stop temporary local servers after verification.

## Deployment Notes

- The host must serve `index.html` for unknown application paths so the client router can render direct visits such as `/about/social-media`, `/location`, and `/emergency`.
- The contact form submits to Formspree and requires network access in production.
- Google Fonts are imported by the migrated page styles; the visual design depends on external font loading unless fonts are localized later.
