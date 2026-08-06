# Validation Commands

## Standard Repository Commands

| Command | Purpose | Writes or side effects | When required |
|---|---|---|---|
| `npm run typecheck` | Strict TypeScript checks | May read generated Next types | After source/config changes |
| `npm run lint` | Next.js Core Web Vitals and TypeScript ESLint checks | Read-only normally | After source changes |
| `npm test` | Focused Vitest contracts | May create transient test caches | After behavior changes |
| `npm run build` | Create the Next.js production build | Writes `.next/` | After page, route, metadata, or production changes |
| `npm run cf:build` | Package Next.js for Cloudflare with OpenNext | Writes `.next/` and `.open-next/` | After deployment-related changes |
| `npx wrangler deploy --dry-run` | Validate the packaged Worker and assets without publishing | Reads `.open-next/`; may write diagnostic logs | After `npm run cf:build` |
| `npm run deploy` | Package and publish the Worker | Mutates the configured Cloudflare Worker/domain | Only from an authenticated, authorized environment |
| `npm run dev` | Start Next.js at `0.0.0.0:3000` | Starts a persistent server | Interactive development |
| `npm run preview` | Build and preview the OpenNext Worker | Writes build output and starts a server | Cloudflare-runtime browser verification |
| `npm run sync:agents` | Regenerate `AGENTS.md` | Overwrites generated `AGENTS.md` | After editing its source guides |

## Installation And Coverage

Use `npm install` for setup or `npm ci` for deterministic clean installation. Node and npm versions are not pinned. `npm test` currently covers metadata generation and route scroll/hash effects; it does not establish E2E, accessibility, form-delivery, or full browser coverage.

Run `git diff --check` before handoff. For non-interactive deployment, supply `CLOUDFLARE_API_TOKEN` through an approved secret store; never commit it or expose it through `NEXT_PUBLIC_*`.
