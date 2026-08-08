# Page Family And Cross-Cutting Contracts Report

## Run Context

- Canonical run: 30
- Handoff: `03_PAGE_FAMILY_AND_CROSS_CUTTING_CONTRACTS_HANDOFF.md`
- Mode: brownfield preservation
- Phase: discovery in run 30; bounded implementation validated in run 33
- Execution profile: current and sufficient
- Application reorganization: not authorized in run 30; approved subset completed in run 33

The audit inspected seven page-family contracts, the App Router entrypoints, route data, metadata/schema helpers, breadcrumbs, related links, images, contact actions, freshness signals, analytics state, reviews, motion, headers, footers, icons, sticky CTAs, form/API boundaries, and focused tests.

> Post-audit lifecycle update (2026-08-06): the former shared placeholder family has been replaced by dedicated `EmergencyPage` and `SocialMediaPage` compositions with route-owned data/styles. Both routes are complete and indexable; the placeholder contract discussion below is retained as historical run-30 evidence.

## Page-Family Matrix

Every current family has a clear route-to-render chain. The full two-part matrix is in `PAGE_FAMILY_CONTRACT_MATRIX.md`.

| Family | Route owner | Content owner | Model/retrieval | Explicit composition | Cross-cutting output |
|---|---|---|---|---|---|
| Home | `src/app/page.tsx` | `home-data.ts` plus shared location/site/review facts | Direct imports; no builder required | `HomePage` | page metadata; site/Organization schema; navigation; reviews; quote form |
| Services | `src/app/services/page.tsx` | `services-data.tsx` | Direct imports; no builder required | `ServicesPage` | page metadata; breadcrumb schema; visible breadcrumb; related links; reviews |
| About | `src/app/about/page.tsx` | `about-data.ts` plus canonical location facts | Direct imports; no builder required | `AboutPage` | page metadata; breadcrumb schema; visible breadcrumb; related links; reviews |
| Location | `src/app/location/page.tsx` | `location-data.ts` | Direct imports plus derived city count | `LocationPage` | page metadata; breadcrumb and Service schema; related links; reviews |
| Contact | `src/app/contact/page.tsx` | `contact-data.ts` and focused form/server helpers | Direct page imports; form has separate validation pipeline | `ContactPage` | page metadata; breadcrumb schema; related links; reviews; inquiry API |
| Placeholders | two static route files | typed `PLACEHOLDER_PAGES` map currently inside the PageView | Typed pathname lookup | `PlaceholderPage` | noindex metadata; global navigation; reviews; route-specific action |
| Error | `/404` route and framework fallback | unique `NotFoundPage` copy | Framework not-found selection | `NotFoundPage` | noindex behavior; home/call actions |

No family needs a `get*Page` helper or render-model builder today. Adding pass-through layers for static imports would obscure rather than clarify ownership.

## Naming Inconsistencies

### Existing names that should remain

- The `*Page` components already mean PageView and should not receive cosmetic renames.
- `PageMetadataDefinition` correctly names application-owned inputs.
- `createPageMetadata` and the three `create*StructuredData` helpers consistently create final framework objects.
- `PAGE_JOURNEYS`, `SectionReveal`, `MotionVisibility`, `FreeQuoteForm`, and route `*-data` names are clear.

### Names that merit adapters

1. `PHONE` and `PHONE_NUMBER` are two names for the same display value. Standardize on `PHONE_NUMBER`, preserving `PHONE` temporarily.
2. `ServiceData` means one publishable service-section definition. If touched, introduce `ServiceSectionDefinition` as a compatibility alias rather than a blind rename.
3. `PLACEHOLDER_PAGES` is valid content data but lives inside a broad client composition. Move it to `placeholder-data.ts` as `PLACEHOLDER_PAGE_DEFINITIONS` during approved boundary work.
4. Visible breadcrumb labels and schema breadcrumb labels are parallel literals. Add `PageBreadcrumbDefinition` data in navigation configuration.
5. Four different `IconName` unions render many identical SVG paths. Add a shared exact renderer behind temporary family adapters.

The detailed decisions and sequencing are in `NAMING_ADAPTER_PLAN.md`.

## Proposed Contracts And Adapters

### Page composition

Keep explicit JSX in every existing `*Page`. New custom sections remain ordinary imports inserted at the desired position. No generic renderer, universal body schema, or page builder is justified.

### Route identity

Adopt the run-29 stable route-path adapter first. Metadata, breadcrumbs, schema, navigation validation, keyword strategy, and tests then reconcile through the canonical path without moving visible content into the catalog.

### Metadata

Keep `PAGE_METADATA` as the route-keyed input owner and `createPageMetadata` as the final builder. Page title, H1, navigation label, breadcrumb label, and card/action label remain distinct contracts.

### Structured data

Keep current schema builders. Supply route identity and breadcrumb labels from stable adapters. Do not add prices, ratings, hours, guarantees, availability, LocalBusiness facts, or other unsupported schema.

### Breadcrumbs and related links

- Introduce one small `PAGE_BREADCRUMBS` definition for Services, About, Location, and Contact.
- Reuse its path/label for visible breadcrumb renderers and JSON-LD inputs.
- Preserve each family’s class names and surrounding hero markup initially.
- Keep `PAGE_JOURNEYS` and `RelatedPagesSection` unchanged; their typed destination and no-self-link tests are already healthy.

### Page images

Keep the shared social preview constants and `createPageMetadata` fallback. Rendered image alt/decorative decisions remain in domain sections. A new `PageImageDefinition` is unnecessary without a second repeated data consumer.

### Actions and analytics

Contact route, phone display, `tel:` href, and E.164 schema value are already intentionally distinct. Standardize only the duplicate display name.

No Analytics provider, event helper, or approved event taxonomy exists, and the user has instructed the suite to skip Analytics. Do not create a speculative `PageAction`/analytics registry. Existing action wording and visual treatments remain domain-owned.

### Freshness and provenance

`PUBLIC_CONTENT_LAST_REVIEWED` supports the About fact sheet and Services planning reference. Review capture disclosure has a different meaning inside Google reviews. Preserve those semantics and do not update dates for code-only changes.

### Placeholder definitions

Move the two static definitions out of `PlaceholderPage.tsx` so the PageView does not own content and client state together. Keep one shared explicit placeholder composition; do not generalize it into a site-wide renderer.

### Icons and footer content

- Consolidate exact SVG rendering only after parity tests; keep narrow family icon adapters during migration.
- Centralize repeated footer facts/copy before considering shared markup.
- Do not create a footer API dominated by class-name maps or family booleans.

## Cross-Cutting Ownership Map

| Concern | Current owner | Decision |
|---|---|---|
| Route identity | App Router, metadata paths, site constants | Normalize through run-29 path adapter. |
| Metadata/indexability | `PAGE_METADATA` + `createPageMetadata` | Preserve. |
| Schema | `structured-data.ts` + route selection | Preserve builders; normalize path/label input. |
| Breadcrumbs | four hero components plus route schema literals | Add data adapter; preserve styled renderers. |
| Related links | `PAGE_JOURNEYS` + `RelatedPagesSection` | Preserve. |
| Navigation | `PrimaryNavigation` + footer arrays | Preserve content and hierarchy. |
| Social images | shared site preview constants | Preserve site default. |
| Render images | domain sections through `Image` | Preserve local semantics. |
| Contact facts | `site.ts` | Normalize duplicate display alias only. |
| Reviews | `google-reviews.ts` + shared carousel | Preserve as focused client island. |
| Motion | `SectionReveal` + `MotionVisibility` | Preserve focused primitives. |
| Quote workflow | form, validators, API, Resend helper | Protected; no contract changes. |
| Service-area facts | canonical location data plus summaries | Derive only exact-equivalent summaries. |
| Freshness | reviewed-date constants and review disclosure | Preserve meanings. |
| Analytics | absent | Keep absent. |

## Header, Footer, And Shell Findings

### Headers

All four HeaderShell files share menu and navigation responsibilities, but Home lacks the announcement bar and uses different logo/CTA/drawer markup. Services, About, and Contact share a broad structure but use different CSS namespaces and conversion actions; Contact is intentionally call-first.

Decision: do not merge headers now. Move menu state into each HeaderShell so it becomes a focused client controller. Reconsider shared semantic subparts only after step-04 accessibility findings and rendered parity tests.

### Footers

All footer families share link arrays and nearly identical business copy. Services, About, and Contact are closest, but their class namespaces and some semantic elements differ; Home positions credit content differently.

Decision: centralize repeated copy/facts first. Preserve renderers and CSS until a later bounded batch proves exact equivalence. Do not add a class-prefix-driven universal footer.

### Sticky CTAs

Home, Services, and About render call plus free-quote actions. Contact renders call plus an in-page form anchor. Scroll thresholds also differ by page.

Decision: each MobileStickyCta owns its threshold and retains its family action contract. A single boolean/config-heavy sticky component is not warranted.

## Performance And Client-Boundary Findings

Six page compositions are client components because they own small state:

- menu state in every completed/placeholder composition;
- sticky visibility in five completed compositions;
- FAQ state in Home;
- carousel state is transitively client because `HeroSection` lacks its own explicit boundary.

Proposed post-approval boundary:

```text
server-compatible explicit Page composition
  -> static route sections
  -> SectionReveal client wrapper with server-rendered children
  -> HeaderShell client leaf
  -> HeroSection client carousel leaf
  -> FaqSection client accordion leaf
  -> GoogleReviewsSection client carousel leaf
  -> FreeQuoteForm client leaf
  -> MobileStickyCta client leaf
```

Additional candidate: `Link.tsx` has no hook or browser-only requirement. After focused validation, removing its module-level client directive would allow static link usages to stay server-compatible while client parents can still import it into their client graph. `PrimaryNavigation` correctly remains a client leaf because it uses `usePathname`.

This follows the React/Next.js skill guidance: minimize serialized client data, preserve server-rendered static content, and avoid bundle-expanding generic registries.

## Files Changed

Discovery artifacts only:

- `03_PAGE_FAMILY_CONTRACTS_REPORT.md`
- `03_PAGE_FAMILY_CONTRACTS_IMPLEMENTATION_SUMMARY.md`
- `03_PAGE_FAMILY_CONTRACTS_HUMAN_TODO.md`
- `PAGE_FAMILY_CONTRACT_MATRIX.md`
- `NAMING_ADAPTER_PLAN.md`
- `V2_SUITE_RUN_LEDGER.md`

No application, component, route, content, metadata, schema, style, test, package, asset, form, deployment, or external-system file changed.

## Validation Results

Validation is recorded in the implementation summary and ledger. All seven family rows answer the 11 required questions, and the adapter decisions agree with the route and page-structure plans from steps 01-02.

Because application state did not change, the immediate run-26 baseline remains applicable: 60/60 tests, typecheck, lint, and OpenNext build passed.

## Remaining Human Decisions

No decision blocks architecture step 04 discovery.

Run-32 approval authorized the bounded source reorganization completed in run 33. Analytics remains intentionally absent; no analytics decision is requested. Visual shell consolidation remains conditional and was not part of the approved batch.

## Canonical Run 33 Implementation Update

Run-32 approval was granted. Run 33 added shared breadcrumb definitions, a canonical `PHONE_NUMBER` export with the `PHONE` compatibility alias, extracted placeholder definitions, and focused client ownership for family headers/sticky CTAs/FAQ/hero. The main page compositions and shared `Link` are server-compatible. Header/footer/icon markup was not consolidated; family DOM, CSS prefixes, labels, actions, and thresholds remain intact. Analytics remains intentionally absent.
