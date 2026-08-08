# Naming Adapter Plan

## Status And Principle

This was the discovery plan for canonical run 30. Canonical run 32 approved its bounded route, breadcrumb, contact-fact, placeholder, and client-boundary subset; canonical run 33 implemented and validated that subset. Footer, icon, service-area-summary, and universal-shell consolidation remain unimplemented and conditional.

Prefer adapters around stable existing exports. Rename only where one responsibility currently has competing names or where a new shared contract has a real consumer. Do not rename merely to match handoff examples.

## Naming Decisions

| Existing name | Architectural meaning | Decision |
|---|---|---|
| `HomePage`, `ServicesPage`, `AboutPage`, `LocationPage`, `ContactPage`, `PlaceholderPage`, `NotFoundPage` | explicit family PageView | Keep. Do not add a cosmetic `View` suffix. |
| `PageMetadataDefinition` | page-specific metadata and keyword inputs | Keep. It already uses the correct `Definition` meaning. |
| `createPageMetadata` | final framework metadata builder | Keep. `create` is internally consistent and a blind `build` rename adds no value. |
| `createSiteStructuredData`, `createBreadcrumbStructuredData`, `createServiceAreaStructuredData` | final schema builders | Keep names; group contract tests by family rather than add pass-through wrappers. |
| `home-data.ts`, `about-data.ts`, `contact-data.ts`, `location-data.ts`, `services-data.tsx` | route-owned publishable inputs | Keep current file convention. |
| `serviceSections` | publishable services section definitions | Keep collection name. |
| `ServiceData` | one services section definition | Prefer a compatibility alias `ServiceSectionDefinition` only if the type is touched during approved work; do not rename in isolation. |
| `PLACEHOLDER_PAGES` inside `PlaceholderPage.tsx` | publishable placeholder definitions | Move to `placeholder-data.ts` as `PLACEHOLDER_PAGE_DEFINITIONS` with `PlaceholderPageDefinition` during approved boundary work. |
| `PAGE_JOURNEYS` / `PageJourneyKey` | typed related-page content | Keep. |
| repeated visible breadcrumb literals | human label plus canonical route | Add `PAGE_BREADCRUMBS` and `PageBreadcrumbDefinition` in navigation config; preserve family renderer class names. |
| `PHONE` and `PHONE_NUMBER` | same display phone string | Make `PHONE_NUMBER` canonical. Keep `PHONE` as a temporary compatibility export until consumers migrate. |
| `PHONE_HREF` | clickable `tel:` destination | Keep distinct. |
| `PHONE_E164` | schema/API machine representation | Keep distinct. |
| four `IconName` and `Icon` modules | family subsets over repeated SVG output | Add shared `SiteIcon`/`SiteIconName`; preserve narrow family adapters during migration. |
| four `HeaderShell` exports | domain shell rendering | Keep names and files. Move menu state inside; do not introduce a CSS-prefix-driven universal header. |
| four `FooterShell` exports | domain shell rendering | Keep names initially. Centralize shared content constants before considering markup consolidation. |
| four `MobileStickyCta` exports | domain sticky conversion leaf | Keep family wrappers; give each its own threshold and action definition. |
| `Image` | Next Image compatibility wrapper | Keep; no new page-image registry. |
| `Link` | internal/external link compatibility wrapper | Keep API; validate removing its module-level client directive so static usages remain server-compatible. |
| `SectionReveal` / `MotionVisibility` | motion client primitives | Keep. |
| no `PageAction` type | actions are direct domain links today | Keep absent until an analytics or multi-render consumer justifies it. |

## Proposed Adapters

### 1. Route identity adapters

Apply `ROUTE_CATALOG_IMPLEMENTATION_PLAN.md` first. Preserve current route constant exports while moving identity to one stable path source.

### 2. Breadcrumb definition adapter

Add a small navigation-owned definition:

```ts
type PageBreadcrumbDefinition = {
  path: PublicPagePath;
  label: string;
};

const PAGE_BREADCRUMBS = {
  services: { path: ROUTE_PATHS.services, label: "Services" },
  about: { path: ROUTE_PATHS.about, label: "About" },
  location: { path: ROUTE_PATHS.location, label: "Service Area" },
  contact: { path: ROUTE_PATHS.contact, label: "Contact" },
} as const;
```

Use the same definition for visible breadcrumb data and schema inputs. Keep each family’s current styled markup during the first batch.

### 3. Contact fact adapter

Make `PHONE_NUMBER` the display-string owner. Keep:

```ts
export const PHONE = PHONE_NUMBER;
```

only during migration, then remove it after repository-wide consumer and test checks. Do not conflate display, `tel:` href, and E.164 values.

### 4. Placeholder definition adapter

Move only the static definitions out of `PlaceholderPage.tsx`. Keep the shared PageView explicit and typed by definition key. This enables the page composition to become server-compatible after HeaderShell owns menu state.

Do not build a generic placeholder/content renderer used by unrelated families.

### 5. Icon adapter

Create one exact shared SVG renderer containing the union of currently supported icon names. During migration, family icon files should either:

- wrap `SiteIcon` with their existing narrow union; or
- re-export the shared renderer after every consumer is verified.

Add parity tests for viewBox, paths, stroke properties, classes, and `aria-hidden`. Preserve the current special warm/snow/home/star/layers/shield graphics exactly.

### 6. Footer content adapter

Centralize only repeated facts and wording:

- introduction;
- service-area lines;
- service and location summary lines;
- copyright;
- credit URL and label.

Keep Home and Services/About/Contact renderers until step-04 semantics and CSS parity are validated. Do not pass a large class-name map into a generic footer.

### 7. Client-boundary adapters

- HeaderShell owns its menu state and toggle.
- MobileStickyCta owns its route-specific `useStickyCta` threshold.
- FaqSection owns its open-item state.
- HeroSection receives an explicit client directive for its carousel.
- Existing Page components become server-compatible only after every interactive child boundary is explicit.
- Remove `"use client"` from the shared Link wrapper only after server-rendered internal/external links and client-parent `onClick` behavior pass focused tests.

Static server children may remain wrapped by `SectionReveal`; do not serialize entire route data objects into client components.

## Sequencing

1. reconcile stale repository instructions;
2. land run-29 route identity adapters and invariants;
3. add breadcrumb definition and tests;
4. move placeholder definitions without output changes;
5. standardize contact-fact naming through compatibility exports;
6. narrow client boundaries;
7. centralize footer copy;
8. consolidate icon rendering behind adapters;
9. consider further shell markup sharing only after step-04 and browser evidence.

Each step is an independent rollback point.

## Rejected Renames And Abstractions

- no `HomePageView`/`ServicesPageView` cosmetic rename;
- no conversion of every data file into `*PageDefinition`;
- no `get*Page` or `build*PageModel` pass-through functions for static imports;
- no `build*Metadata` wrappers around `createPageMetadata`;
- no universal body type;
- no generic shell selected by page family;
- no action/analytics contract without an integration;
- no full-page client state container.

## Validation And Rollback

For each approved adapter:

- compare rendered HTML, class names, destinations, metadata, schemas, and interaction behavior before and after;
- run focused tests for the affected contract before broader validation;
- preserve public exports until all imports move;
- stop if an adapter requires content changes, boolean-prop growth, CSS-prefix maps, client serialization of large data, or simultaneous family rewrites.
