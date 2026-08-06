# Route Inventory

## Routing Baseline

The application is a client-rendered Vite SPA. `src/App.tsx` reads `window.location.pathname`, chooses a lazy-loaded page component through explicit comparisons, and subscribes to browser history through `useSyncExternalStore`. `src/components/Link.tsx` handles internal navigation with `history.pushState` and a synthetic `popstate` event.

The deployment host must serve `index.html` for unknown application paths. No checked-in host configuration proves that this fallback is active in production.

## Static Public Routes

`Indexability` below describes repository evidence, not live search-engine state. No route has an explicit robots directive, canonical, sitemap entry, or noindex branch.

| Path | Runtime page | Content state | Document title | Indexability evidence | Sitemap | Schema |
|---|---|---|---|---|---|---|
| `/` | `HomePage` | Full home page | `One Call Heating & Air \| Northern Utah HVAC` | No explicit restriction; browser document is presumptively indexable | No sitemap exists | None found |
| `/services` | `ServicesPage` | Full services page with `#install`, `#repair`, `#service`, and `#maintenance` anchors | `HVAC Services \| One Call Heating & Air` | No explicit restriction | No sitemap exists | None found |
| `/about` | `AboutPage` | Full company/about page | `About \| One Call Heating & Air` | No explicit restriction | No sitemap exists | None found |
| `/about/social-media` | `PlaceholderPage` | Placeholder | `Social Media \| One Call Heating & Air` | No explicit restriction; placeholder indexing policy is unresolved | No sitemap exists | None found |
| `/location` | `PlaceholderPage` | Placeholder | `Location \| One Call Heating & Air` | No explicit restriction; placeholder indexing policy is unresolved | No sitemap exists | None found |
| `/emergency` | `PlaceholderPage` | Placeholder | `24/7 Emergency HVAC \| One Call Heating & Air` | No explicit restriction; placeholder indexing policy is unresolved | No sitemap exists | None found |
| `/contact` | `ContactPage` | Full contact page and Formspree form | `Contact \| One Call Heating & Air` | No explicit restriction | No sitemap exists | None found |

Route constants are owned by `src/config/site.ts`. Placeholder content is keyed by those constants inside `src/pages/PlaceholderPage.tsx`.

## Fallback And Not-Found Behavior

| Path family | Runtime behavior | Metadata behavior | Crawl risk |
|---|---|---|---|
| `/404` | Falls through to `NotFoundPage`; it is not a dedicated route branch or exported route constant | `Page Not Found \| One Call Heating & Air` | No noindex directive; HTTP status depends on host behavior |
| Any unmatched pathname | Renders the same `NotFoundPage` | Same not-found title | An SPA fallback commonly returns HTTP 200 unless the host has special handling, creating a potential soft-404 risk |

## Dynamic Route Families

None. There are no path parameters, generated static parameters, slug collections, or data-driven route expansion helpers.

Query strings do not affect page selection. Hash fragments do not create separate routes; `RouteEffects` attempts to scroll to a matching element after navigation.

## Noindex, Private, And Authenticated Routes

None are declared. The application has no authentication or private-route layer.

The absence of a noindex implementation does not prove every path should be indexed. Placeholder and not-found policy must be decided during the indexing handoffs.

## API Routes And Operational Endpoints

There are no application-owned API routes. The contact form posts directly from the browser to an external Formspree action.

## Redirect And Migration Routes

None found. There are no redirect maps, redirect-only components, or checked-in host redirect rules.

## Sitemap And Robots Policy

- Sitemap: no static sitemap file or generator found.
- Robots: no `robots.txt` or robots generator found.
- Canonicals: no canonical tags or canonical helper found.
- Indexing directives: no route-specific `robots` meta or HTTP header implementation found.
- Host fallback: documented as required, but no deployment config verifies it.

## Metadata And Schema Coverage

- `index.html` supplies one default title and one default description for the SPA document.
- `src/components/RouteEffects.tsx` replaces `document.title` for known pathnames.
- Route-specific descriptions, canonical links, Open Graph/Twitter metadata, alternates, and structured data were not found.
- Unknown routes receive a not-found title but no explicit robots policy.

## Routing Edge Cases

- Comparisons are exact and case-sensitive. `/services/` and `/Services` fall through to not found.
- Query strings are retained in the location snapshot but ignored when selecting the page.
- Hash scrolling retries for up to 60 animation frames to allow lazy content to mount.
- Internal links use browser history and require JavaScript for client transitions.
- Direct navigation requires the hosting fallback documented in `README.md` and `AGENTS.repo-one-call-hvac.md`.

## Drift And Follow-Up Risks

Route facts are repeated in `src/config/site.ts`, `src/App.tsx`, `src/components/PrimaryNavigation.tsx`, `src/components/RouteEffects.tsx`, `README.md`, and repository instructions. No automated contract reconciles them.

Refresh this inventory when a route is added, removed, redirected, renamed, completed from placeholder status, made private/noindex, or added to a sitemap/schema system. A generator or contract test becomes justified when route growth makes these manual declarations difficult to reconcile.

## Source Evidence

- `src/App.tsx`
- `src/config/site.ts`
- `src/components/Link.tsx`
- `src/components/PrimaryNavigation.tsx`
- `src/components/RouteEffects.tsx`
- `src/pages/PlaceholderPage.tsx`
- `src/pages/NotFoundPage.tsx`
- `index.html`
- `README.md`
- `AGENTS.repo-one-call-hvac.md`
