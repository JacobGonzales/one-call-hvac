# Environment Variable Inventory

## Summary

The application does not read any repository-defined environment variables. No `.env` files or application-owned `process.env` access was found.

Cloudflare deployment is configured through `wrangler.jsonc`. Wrangler authentication is deployment-only and must never be exposed to the browser bundle.

## Required Secrets

None found.

| Variable | Required by | Secret | Default or fallback | Evidence |
|---|---|---|---|---|
| None | n/a | n/a | n/a | Repository search across `src/`, `scripts/`, and configuration files |

## Recommended Public Configuration

None found. The application does not reference `VITE_*`, `PUBLIC_*`, or `NEXT_PUBLIC_*` variables.

## Optional Application Configuration

None found.

## Deployment-Only Values

| Variable | Required by | Secret | Default or fallback | Evidence |
|---|---|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Non-interactive `wrangler deploy` sessions that do not already have Cloudflare authentication | Yes | None; authenticated interactive terminals may use Wrangler login state instead | Wrangler deploy error and `wrangler.jsonc` deployment workflow |

Cloudflare Builds may provide deployment authorization through the connected project rather than a repository variable. No token value belongs in source, generated docs, or a `NEXT_PUBLIC_*` variable.

## Hardcoded Public Configuration That Is Not An Environment Variable

These values are visible in browser-delivered source or HTML and should not be treated as secrets:

| Configuration | Current owner | Purpose | Notes |
|---|---|---|---|
| Formspree form action | `src/screens/contact/ContactDetailsSection.tsx` | External contact-form submission | Public browser endpoint; production account ownership and delivery cannot be verified from the repository |
| Phone, telephone URI, and email | `src/config/site.ts` plus some direct literals in page components | Public contact actions | Partly centralized; direct literals remain |
| Public asset base | `src/config/site.ts` | Root-relative image and SVG paths | Defaults are encoded as a constant, not environment-driven |
| Google Fonts stylesheet URLs | Route CSS files | Loads Archivo Black and Inter | External browser dependency; not configurable through env |
| Canonical public site URL | `src/config/site.ts` | `https://utahonecall.com` | Application constant used by route canonical metadata |
| Cloudflare custom domain | `wrangler.jsonc` | Maps the Worker to `utahonecall.com` | Deployment configuration, not an environment variable |

## Framework Defaults

Next.js exposes framework environment behavior, but the application does not currently read it. The presence of transitive `dotenv` packages does not establish an application environment-variable contract.

## Security And Maintenance Rules

- Do not add secret values to this document or any generated report.
- If a future integration requires credentials, read them only in an approved server-side or deployment boundary. `NEXT_PUBLIC_*` values are embedded in browser output and cannot hold secrets.
- Refresh this inventory whenever environment helpers, deployment configuration, server functions, analytics, a CMS/database, or a different application framework is introduced.
- Store `CLOUDFLARE_API_TOKEN` only in an approved secret store or local shell environment. Never prefix it with `NEXT_PUBLIC_`.

## Inspection Evidence

- `package.json`
- `next.config.ts`
- `open-next.config.ts`
- `src/`
- `scripts/sync-agents.mjs`
- repository deployment/environment filename search
- repository-owned searches for `import.meta.env`, `process.env`, `VITE_`, `NEXT_PUBLIC_`, and related patterns
