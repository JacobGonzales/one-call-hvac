# AGENTS.repo-one-call-hvac.md

## Purpose

- This file contains repository-specific guidance for `one-call-hvac`.
- Pair it with `AGENTS.base-react.md` when reusing the shared React guidance.

## Current Stack

- Framework: Next.js 16 App Router on Node.js
- UI: React 19, strict TypeScript, and route-level CSS
- Routing: file-system routes in `src/app/` with `next/link`
- Linting: ESLint flat config with Next.js Core Web Vitals and TypeScript rules
- Build output: `.next/`, packaged for Cloudflare in `.open-next/`
- Deployment: OpenNext on a Node.js-compatible Cloudflare Worker via `wrangler.jsonc`
- Production domain: `https://utahonecall.com`
- Supporting stack: OpenNext Cloudflare, Tailwind CSS 4, MUI, Radix UI, Motion, Vitest, Testing Library, and Playwright

## Current Structure

- `src/app/`: App Router route files, layouts, and server-owned metadata
- `src/screens/`: page compositions
- `src/screens/<route>/`: route-owned sections, data, primitives, and CSS
- `src/components/`: shared routing, image, and application helpers
- `src/config/`: shared business and route constants
- `src/hooks/`: shared browser interaction hooks
- `public/onecall-heating-and-air/`: site images and SVG assets
- `scripts/`: repository maintenance scripts

## Route Inventory

- `/`: home page
- `/services`: HVAC services
- `/about`: company and service-area information
- `/about/social-media`: HVAC tips, project preparation, and community updates
- `/location`: northern Utah service area grouped by county and community
- `/emergency`: 24/7 emergency HVAC guidance and direct-call routing
- `/contact`: service request and contact information
- `/404`: branded not-found page; unmatched paths render the same fallback

Keep `src/app/`, route metadata, `src/config/site.ts`, and this inventory synchronized when routes change.

## Commands

- `npm run dev`: start Next.js on `localhost:3000`
- `npm run typecheck`: run strict TypeScript checks
- `npm run lint`: run ESLint
- `npm run next:build`: create the Next.js-only production build in `.next/`
- `npm run build`: create the Next.js build and package it for Cloudflare in `.open-next/`
- `npm run cf:build`: package the Next.js build with OpenNext
- `npm run deploy`: package and deploy the OpenNext Worker
- `npm run preview`: package and preview the OpenNext Worker
- `npm run sync:agents`: rebuild `AGENTS.md` from its source guides

## React and Next.js Conventions

- Use the `@/` alias for imports from `src/`.
- Keep route declarations and metadata in `src/app/`.
- Keep route files as Server Components unless browser state or event handling requires a focused Client Component boundary.
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

- OpenNext packages the Next.js server and assets under `.open-next/`; Wrangler runs the worker with `nodejs_compat`.
- The custom domain is `utahonecall.com`; keep `src/config/site.ts`, `wrangler.jsonc`, metadata/canonical behavior, and generated context docs synchronized when it changes.
- The contact form submits to `POST /api/inquiries`, which validates input server-side and uses server-only Resend credentials to send the business notification and customer confirmation.
- Google Fonts are imported by the migrated page styles; the visual design depends on external font loading unless fonts are localized later.
