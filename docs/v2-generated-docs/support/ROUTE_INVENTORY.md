# Route Inventory

## Routing Baseline

The application uses the Next.js 16 App Router. Route entrypoints and server-owned metadata live under `src/app/`; reusable page compositions live under `src/screens/`. Internal links use the shared `Link` component, which delegates internal navigation to `next/link`. `RouteEffects` retains scroll-to-top and hash-target behavior.

Primary navigation remains in `src/components/PrimaryNavigation.tsx`. Shared footer destinations and typed leaf-page journeys live in `src/config/site-navigation.ts`; route-owned footer visuals consume the same service and company link arrays, while `RelatedPagesSection` renders contextual next steps on services, about, location, and contact. The completed service-area route is available from primary navigation, contextual page journeys, the homepage service-area section, and every footer.

OpenNext packages `.next/` into `.open-next/worker.js` and `.open-next/assets` for a Node.js-compatible Cloudflare Worker mapped to `utahonecall.com`.

## Public Static Routes

| Path | Route file | Runtime page | Current content state | Metadata and indexability |
|---|---|---|---|---|
| `/` | `src/app/page.tsx` | `HomePage` | Full homepage, reviews, service-area map, named pricing/FAQ support targets, and quote form | Title, description, canonical `/`; currently indexable |
| `/services` | `src/app/services/page.tsx` | `ServicesPage` | Full services page with four service anchors, approval guidance, the stable `#service-planning-checklist` reference, reviews, and contextual next steps | Title, description, canonical `/services`; currently indexable |
| `/about` | `src/app/about/page.tsx` | `AboutPage` | Full owner/company page with a sourced company fact sheet, reviews, service-area summary, and contextual next steps | Title, description, canonical `/about`; currently indexable |
| `/about/social-media` | `src/app/about/social-media/page.tsx` | `SocialMediaPage` | Full HVAC tips/project-update page with reviews, preparation guidance, and contextual next steps | Title, description, canonical `/about/social-media`; currently indexable |
| `/location` | `src/app/location/page.tsx` | `LocationPage` | Full 41-city, seven-county service-area page with breadcrumb, service/FAQ/contact next steps, conversion actions, and reviews | Title, description, canonical `/location`; currently indexable |
| `/emergency` | `src/app/emergency/page.tsx` | `EmergencyPage` | Full emergency HVAC page with direct-call guidance, reviews, urgent-situation guidance, and contextual next steps | Title, description, canonical `/emergency`; currently indexable |
| `/contact` | `src/app/contact/page.tsx` | `ContactPage` | Contact details, service/pricing/coverage preparation links, reviews, and Resend-backed quote form | Title, description, canonical `/contact`; currently indexable |
| `/404` | `src/app/404/page.tsx` | `NotFoundPage` | Explicit branded not-found route | Explicit `noindex, nofollow`; no canonical |
| Any unmatched pathname | `src/app/not-found.tsx` | `NotFoundPage` | Next.js not-found response | Production returns HTTP 404 and Next.js emits `noindex`; root default title/description remain |

Route constants and the canonical site URL are owned by `src/config/site.ts`. Typed page definitions live in `src/config/page-metadata.ts`; route-owned exports pass them through `src/lib/metadata.ts` and resolve relative URLs against `https://utahonecall.com` from the root layout.

## Dynamic, Private, Redirect, And Migration Routes

- Dynamic route families: none.
- AMP routes or variants: none; no `amphtml` relationships, AMP templates, or AMP publishing path exists.
- Authenticated/private routes: none.
- Redirects and rewrites: none found in `next.config.ts` or route source.
- Former migration/redirect-only routes: none found.
- Static parameter generation: none.
- Query-selected page variants: none.
- Hash routes: service-page anchors remain client-side fragments; `RouteEffects` scrolls to matching element IDs.

## API And Operational Routes

| Path | Methods | Purpose | Crawl/user-flow relevance |
|---|---|---|---|
| `/api/inquiries` | `POST` | Validates, sanitizes, honeypot-filters, and sends quote inquiries through Resend | Not a content page and should not enter sitemap/navigation; required by homepage and contact forms |

The route declares the Node.js runtime, rejects declared request bodies above 30,000 bytes, returns validation errors for malformed submissions, returns HTTP 503 when Resend configuration is incomplete, and returns a phone fallback on delivery failure.

## Sitemap, Robots, Canonicals, And Schema

- Sitemap source: `src/app/sitemap.ts`; includes all seven completed marketing routes.
- Sitemap architecture: one root-level, seven-URL XML sitemap generated from `INDEXABLE_PAGE_PATHS`. No sitemap index, `lastmod`, priority/change frequency, image/video/news extension, feed, or localized alternate is justified by the current route/content model.
- Local production `/sitemap.xml`: HTTP 200 with five canonical URLs after implementation.
- Robots source: `src/app/robots.ts`; allows public content, explicitly allows OAI-SearchBot, disallows `/api/`, and declares canonical host and sitemap.
- Local production `/robots.txt`: HTTP 200 with the intended directives after implementation.
- Live production discovery baseline on 2026-08-06: both endpoints still returned HTTP 404, while the current local OpenNext build returned 200 for both. The deployed Worker is behind the repository state.
- Canonicals: present for the seven known public content routes through Next.js metadata.
- Structured data / JSON-LD: homepage `WebSite` and `Organization` with one stable logo node and centralized description; stable-ID, visible two-level `BreadcrumbList` markup on services, about, location, and contact; page-matched contextual `Service` data on `/location`.
- Page-specific Open Graph/Twitter metadata: generated from each route’s title, description, and canonical path, with one absolute 1672×941 HVAC preview default and `summary_large_image`; approved route-specific creative may replace the shared default later.

## Production Read-Only Verification

Observed on 2026-08-06:

| Request | Result | Evidence meaning |
|---|---|---|
| `HEAD /` | HTTP 200, Cloudflare, Next.js prerender headers | A Next.js/OpenNext application is live at the custom domain |
| `HEAD /services` | HTTP 200 | Direct static route resolves in production |
| `HEAD /location` | HTTP 200 | Newly expanded service-area route resolves in production |
| `HEAD /definitely-not-a-real-route` | HTTP 404 | Unknown routes preserve real not-found status |
| `GET /definitely-not-a-real-route` | Branded markup with `<meta name="robots" content="noindex">` | Framework not-found response is non-indexable |
| `HEAD /robots.txt` and `/sitemap.xml` | HTTP 404 | Current production deployment does not include the repository metadata routes |
| `GET /emergency` and `/about/social-media` | HTTP 200 with content that predates the completed repository pages | Production requires a new deployment before page-completion verification |
| `HEAD https://www.utahonecall.com/` | DNS resolution failed | `www` is not currently a working canonical-host variant |
| `HEAD https://onecallheatingandair.com/` | HTTP 200 from Vercel | Legacy domain remains a duplicate host instead of redirecting |

These checks do not prove that every uncommitted local change is deployed.

## Follow-Up Risks

- Keep sitemap entries URL-only until a maintained per-page freshness source or genuine media/news/localized content model satisfies the handoff 15.5 trigger contract.
- Deploy and verify robots, the seven-URL sitemap, current page metadata, and both completed page compositions before considering the production search gap closed.
- Replace the current wide-logo favicon source only after an approved square brand asset exists; do not derive identity artwork silently.
- Configure path-preserving permanent redirects at the legacy host and decide whether `www` should resolve and redirect to the apex.
- Keep route files, `src/config/site.ts`, navigation, metadata, tests, and this inventory synchronized.
- Keep all footer variants on the shared link arrays; their visual layouts and surrounding copy remain duplicated.
- Consider contextual `/location` links from the about/contact service-area summaries during later page-design work.
- Revisit LocalBusiness or other richer schema only after business facts, current Google eligibility, and page intent are approved. Keep self-serving review ratings, FAQ, Article, and SearchAction markup absent under the current content/policy model; treat `Service` as contextual data rather than a promised Google rich result.

## Source Evidence

- `src/app/`
- `src/app/robots.ts`, `src/app/sitemap.ts`, and `src/app/search-metadata-routes.test.ts`
- `src/config/site.ts`
- `src/lib/metadata.ts`
- `public/onecall-heating-and-air/hero-cooling-summer.jpg`
- `src/components/Link.tsx`, `PrimaryNavigation.tsx`, and `RouteEffects.tsx`
- `src/screens/EmergencyPage.tsx`, `SocialMediaPage.tsx`, `LocationPage.tsx`, and `NotFoundPage.tsx`
- `src/screens/location/location-data.ts`
- `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`
- production read-only HTTP checks listed above
