# Repository Context Report

## Run Scope

- Canonical run: 02
- Suite step: support 01
- Phase: `discovery`
- Repository: `one-call-hvac`
- Source revision inspected: `main` at `71db84b`, with pre-existing tracked and untracked working-tree changes preserved
- Application implementation: user-authorized repository-controlled fixes completed after discovery

This run refreshed repository-specific facts for later setup, SEO, analytics, page-architecture, and content handoffs. It did not change application behavior or treat generated Markdown as runtime content.

## Current State Summary

`one-call-hvac` is an npm-managed Next.js 16.2.9 App Router application using React 19, strict TypeScript, route-owned CSS, MUI form controls, and Motion interactions. Server route entrypoints and metadata live under `src/app/`; reusable page compositions live under `src/screens/`; shared business and route constants live in `src/config/site.ts`; shared validation and integration logic lives under `src/lib/`.

OpenNext packages the application for a Node.js-compatible Cloudflare Worker. `wrangler.jsonc` points to `.open-next/worker.js`, serves `.open-next/assets`, and maps the Worker to `https://utahonecall.com`.

## Routing And Search Baseline

The application owns seven public content routes: `/`, `/services`, `/about`, `/about/social-media`, `/location`, `/emergency`, and `/contact`. It also owns an explicit `/404` page, framework unmatched-route handling, and `POST /api/inquiries`.

All seven public content routes declare a title, description, and canonical through `src/lib/metadata.ts`. `/about/social-media` and `/emergency` are still placeholder pages and now declare `noindex, follow` until full content is ready. `/404` explicitly declares `noindex, nofollow`; an unmatched production path returned HTTP 404 and emitted `noindex` during discovery.

No dynamic route families, redirects, structured data, authentication, or private page families were found. The implementation pass added Next.js metadata routes for `/robots.txt` and `/sitemap.xml`; the sitemap includes the five completed indexable content routes and excludes placeholders, `/404`, and the API. Robots allows public crawling, disallows `/api/`, and advertises the canonical sitemap and host. The production domain still needs the new local build deployed before those responses replace the discovery-time HTTP 404s.

## Environment And Server Integrations

The only application environment reads are `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `RESEND_TO_EMAIL` in `src/lib/resend-inquiries.ts`. All three are required for email delivery; if any is missing, `POST /api/inquiries` returns a phone-fallback 503 response. `.env.example` documents the names. A local `.env.local` declares all three names; values were intentionally not read or recorded. `wrangler.jsonc` checks in the non-secret sender and recipient configuration, while the API key belongs in a Cloudflare encrypted secret.

The user reports that the Resend API key is configured in Cloudflare. This run did not inspect remote secret values or submit a production inquiry. Featured Google reviews are manually maintained in `src/lib/google-reviews.ts` and do not require a Google API key.

## Dependencies And Integrations

Active application dependencies include Next.js, React, Motion, MUI, MUI Icons, and Emotion. OpenNext and Wrangler own Cloudflare packaging and deployment. Vitest and Testing Library cover metadata, navigation effects, form validation and disclosure behavior, inquiry delivery helpers and API behavior, Google review behavior, location data, and the hero carousel.

External runtime surfaces are Resend, Google Maps embed/search URLs, Google Fonts, `tel:` and `mailto:` handlers, and the Bright Automations footer link. No analytics, tag manager, Search Console verification, CMS, database, authentication, booking, payments, CRM synchronization, or error-monitoring integration was found.

## Hidden Assumptions And Edge Cases

- A configured Resend key does not prove the sending domain, sender identity, recipient, and both outbound email paths work in production.
- `RESEND_FROM_EMAIL` and `RESEND_TO_EMAIL` are configuration, not browser-public variables; neither should use a `NEXT_PUBLIC_` prefix.
- Production verification proves a Next.js/OpenNext deployment is live, but it does not prove every uncommitted local change has been deployed.
- Placeholder pages must have `indexable: false` removed only when their complete content and indexing intent are approved.
- The new robots and sitemap routes are verified in the production build but do not change the live site until deployment.
- Node and npm versions are not pinned, which can allow local and Cloudflare build environments to drift.
- Several installed compatibility packages are not imported by current application source; this report does not authorize removing them.
- Static review text and relative dates can become stale and require manual maintenance.

## Source Files Inspected

- `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.js`, `vitest.config.ts`
- `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`, `.env.example`
- all route files under `src/app/`
- `src/config/site.ts`
- metadata, inquiry, Resend, Google-review, route-effect, navigation, placeholder, and location source under `src/lib/`, `src/components/`, and `src/screens/`
- repository test inventory and environment-variable searches
- existing generated support inventories
- production HTTP headers and not-found markup for `utahonecall.com`

## Supporting Context Documents

- `ENVIRONMENT_VARIABLES.md`
- `ROUTE_INVENTORY.md`
- `DEPENDENCY_INVENTORY.md`
- `INTEGRATIONS_INVENTORY.md`
- `VALIDATION_COMMANDS.md`
- `01_REPO_CONTEXT_HUMAN_TODO.md`

## Validation Evidence

- Source-backed route, metadata, environment, dependency, integration, and test searches completed.
- Production response checks completed without mutating production state.
- Secret values were not printed or copied into generated output.
- Targeted metadata tests, the complete 21-test Vitest suite, typecheck, lint, OpenNext production build, and local production endpoint checks passed after implementation.
- Final generated-output integrity and `git diff --check` are recorded in the implementation summary.
