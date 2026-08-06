# Environment Variable Inventory

## Summary

The current application does not read any repository-defined environment variables. No `.env` files, environment helper modules, `import.meta.env` access, `process.env` access, deployment-variable bindings, or script-level environment lookups were found outside installed dependencies.

This means the current Vite build has no source-backed required secrets, public build-time variables, optional application variables, or checked-in deployment-only bindings.

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

None found in repository-owned deployment configuration. No Wrangler, Vercel, Netlify, Docker, Firebase, or equivalent deployment file is checked in.

## Hardcoded Public Configuration That Is Not An Environment Variable

These values are visible in browser-delivered source or HTML and should not be treated as secrets:

| Configuration | Current owner | Purpose | Notes |
|---|---|---|---|
| Formspree form action | `src/pages/contact/ContactDetailsSection.tsx` | External contact-form submission | Public browser endpoint; production account ownership and delivery cannot be verified from the repository |
| Phone, telephone URI, and email | `src/config/site.ts` plus some direct literals in page components | Public contact actions | Partly centralized; direct literals remain |
| Public asset base | `src/config/site.ts` | Root-relative image and SVG paths | Defaults are encoded as a constant, not environment-driven |
| Google Fonts stylesheet URLs | Route CSS files | Loads Archivo Black and Inter | External browser dependency; not configurable through env |

## Framework Defaults

Vite exposes built-in values such as `import.meta.env.MODE`, but the application does not read them. The presence of transitive `dotenv` packages in `package-lock.json` does not establish an application environment-variable contract.

## Security And Maintenance Rules

- Do not add secret values to this document or any generated report.
- If a future integration requires credentials, read them only in an approved server-side or deployment boundary. This client-only Vite application cannot safely keep a secret in a `VITE_*` variable because such values are embedded in the browser bundle.
- Refresh this inventory whenever environment helpers, deployment configuration, server functions, analytics, a CMS/database, or a different application framework is introduced.

## Inspection Evidence

- `package.json`
- `vite.config.ts`
- `src/`
- `scripts/sync-agents.mjs`
- repository deployment/environment filename search
- repository-owned searches for `import.meta.env`, `process.env`, `VITE_`, `NEXT_PUBLIC_`, and related patterns
