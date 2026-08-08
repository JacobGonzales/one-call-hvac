# Environment Variable Inventory

## Summary

The application reads exactly three server-side environment variables, all for Resend-backed quote delivery. No `NEXT_PUBLIC_*`, `VITE_*`, or browser environment reads were found. `.env.example` documents the contract. A local `.env.local` declares all three names; values were intentionally not inspected or recorded.

## Required Secrets

| Variable | Required by | Secret | Default or fallback | Source reader |
|---|---|---|---|---|
| `RESEND_API_KEY` | Owner notification and customer confirmation from `POST /api/inquiries` | Yes | No default. If it or either required server setting is missing, the route returns HTTP 503 with a phone fallback | `src/lib/resend-inquiries.ts` |

The user reports that this secret is configured in Cloudflare. Remote secret contents were not inspected during this run.

## Required Server Configuration

| Variable | Required by | Secret classification | Repository/deployment value | Missing-value behavior | Source reader |
|---|---|---|---|---|---|
| `RESEND_FROM_EMAIL` | Verified sender identity for both emails | Non-secret public sender identity | Declared in `.env.example` and `wrangler.jsonc` | Resend configuration resolves to unavailable; API returns HTTP 503 | `src/lib/resend-inquiries.ts` |
| `RESEND_TO_EMAIL` | Business recipient and reply-to for confirmation | Private operational configuration, not an API secret | Declared in `.env.example` and `wrangler.jsonc` | Resend configuration resolves to unavailable; API returns HTTP 503 | `src/lib/resend-inquiries.ts` |

These values are not optional to the current email workflow even though they are non-secret. They must stay server-side and must not use a `NEXT_PUBLIC_` prefix.

## Recommended Public Configuration

None found. Public site information is owned by TypeScript constants or deployment configuration rather than browser environment variables.

## Optional Application Configuration

None found. The Resend helper requires all three variables as one complete configuration.

## Deployment-Only Values And Bindings

| Name | Type | Purpose | Application read | Notes |
|---|---|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Secret environment value used by Wrangler conventions | Non-interactive Cloudflare authentication when no approved login/session is available | No | Not declared in source; keep only in an approved CI/secret store |
| `ASSETS` | Cloudflare Worker binding | Serves `.open-next/assets` | No direct repository read | Declared by `wrangler.jsonc`; consumed by the OpenNext Worker package |
| `WORKER_SELF_REFERENCE` | Cloudflare service binding | OpenNext self-reference support | No direct application read | Declared by `wrangler.jsonc` for service `one-call-hvac` |

Cloudflare Builds may authenticate through the connected project instead of a repository variable. No deployment credential belongs in source, generated docs, or a browser-exposed variable.

## Hardcoded Public Configuration

| Configuration | Current owner | Purpose | Maintenance note |
|---|---|---|---|
| Canonical site URL `https://utahonecall.com` | `src/config/site.ts` | Next.js `metadataBase` and absolute canonical resolution | Keep synchronized with the Cloudflare custom domain |
| Public route paths | `src/config/site.ts` and `src/app/` | Navigation and route identity | Keep route files, constants, metadata, and generated inventory synchronized |
| Phone, telephone URI, and email | `src/config/site.ts` plus remaining direct literals | Public contact actions | Some duplication remains; values are intentionally browser-visible |
| Public asset base | `src/config/site.ts` | Root-relative image/SVG references | Not environment-driven |
| Cloudflare custom domain | `wrangler.jsonc` | Worker route for `utahonecall.com` | Deployment configuration, not app env |
| Google Maps and review URLs | `src/screens/home/ServiceAreaSection.tsx`, `src/lib/google-reviews.ts` | Keyless map embed and outbound review links | Public third-party URLs |
| Google Fonts URLs | route CSS files | Archivo Black and Inter | External browser dependency |

## Security And Maintenance Rules

- Never add a real API key, Cloudflare token, or secret value to this inventory.
- Keep `RESEND_API_KEY` in `.env.local` for local development and an encrypted Cloudflare secret for the Worker.
- Treat `.env.example` values as examples/contracts, not proof that an environment is configured.
- Treat `wrangler.jsonc` `vars` as deployed defaults only after the relevant Worker has been published.
- Refresh this inventory whenever application env reads, bindings, analytics, a CMS/database, authentication, or deployment providers change.

## Inspection Evidence

- `.env.example` and local variable-name-only inspection of `.env.local`
- `src/lib/resend-inquiries.ts`
- `src/app/api/inquiries/route.ts`
- `src/screens/contact/FreeQuoteForm.tsx`
- `wrangler.jsonc`, `open-next.config.ts`, `package.json`, `README.md`
- repository-owned searches for `process.env`, `import.meta.env`, `NEXT_PUBLIC_`, `VITE_`, Resend, Wrangler, and Cloudflare variable patterns
