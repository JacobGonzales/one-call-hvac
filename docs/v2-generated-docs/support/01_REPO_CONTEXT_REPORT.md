# Repository Context Report

## Current State Summary

`one-call-hvac` is an npm-managed Next.js 16 App Router application using React 19, strict TypeScript, and route-owned CSS. Server route entrypoints and metadata live under `src/app/`; reusable interactive page compositions live under `src/screens/`. OpenNext packages the Node.js application for Cloudflare Workers at `https://utahonecall.com`.

The application has seven primary public pathnames, a dedicated `/404`, and framework-owned unmatched-route handling. Known routes have server-rendered titles, descriptions, and canonical URLs. `/404` and unmatched routes are noindex. No sitemap, robots file, schema, redirect, authentication, database, analytics, or application-owned API route was found.

## Environment, Dependencies, And Integrations

No application environment-variable contract exists. Non-interactive publication requires Cloudflare authorization such as `CLOUDFLARE_API_TOKEN`; it must remain outside source and browser-exposed variables. Active runtime/deployment dependencies are Next.js, React, Motion, OpenNext, and Wrangler. Formspree is the only data-submission integration and remains a direct browser POST. Google Fonts and phone/email links are public browser integrations.

## Deployment Correction

The repository has been migrated from the incorrect Vite/static-assets configuration to the intended Next.js application model. `next build` creates `.next/`; `opennextjs-cloudflare build` produces `.open-next/worker.js` and `.open-next/assets`; Wrangler uses `nodejs_compat`, an asset binding, a self-service binding, and the `utahonecall.com` custom-domain route. The previously observed live domain still served an old `Hello world` Worker, so publication and live verification remain pending Cloudflare authentication or the connected Git deployment pipeline.

## Validation And Risks

- Focused Vitest contracts cover metadata generation and route scroll/hash effects.
- Typecheck, lint, Next production build, OpenNext packaging, Wrangler dry run, and Git whitespace checks are the required migration validation set.
- Placeholder indexing decisions, Formspree delivery/account ownership, Node version pinning, and authenticated production publication remain follow-ups.
- Generated docs must be refreshed when routes, metadata, environment usage, dependencies, integrations, or deployment change.

See the five support inventories and `01_REPO_CONTEXT_HUMAN_TODO.md` for the source-backed details and remaining external actions.
