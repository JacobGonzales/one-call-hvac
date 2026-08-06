# Page Architecture Execution Profile

## 1. Profile Identity

- Repository: `one-call-hvac`
- Root: `/Users/jacobgonzales/Documents/GitHub/one-call-hvac`
- Generated: 2026-08-05, America/Denver (MDT, UTC-06:00)
- Branch and commit: unavailable because this workspace has no `.git` directory
- Working-tree state: indeterminate for the same reason; preserve every existing file as potentially user-owned work
- Requested scope: page-architecture preflight for the current public React/Vite website and all routes declared by the application
- Directories inspected: `src/`, `public/`, `docs/2.0/`, and the initialized `docs/v2-generated-docs/`
- Page families inspected: home, services, about, contact, shared placeholder routes, and branded not-found behavior
- Repository instructions: `AGENTS.md`, generated from `AGENTS.base-react.md` and `AGENTS.repo-one-call-hvac.md`; no nested `AGENTS.md` was found
- Confidence: high for runtime application architecture; medium for deployment state and change attribution because Git metadata and host configuration are unavailable
- Known gaps: no live-host inspection, no external Formspree submission, no browser/visual/reflow run, no repository-authored automated tests, and no verifiable branch/commit/working-tree baseline

No secrets, environment values, customer records, or form submissions were copied into this profile.

## 2. Execution Mode Decision

**Selected mode: brownfield.**

The requested scope already contains established routes, route-level lazy loading, content-bearing React/TypeScript modules, route-owned sections and CSS, shared navigation and image behavior, responsive mobile drawers and sticky actions, a hero carousel, an FAQ disclosure, anchor navigation, a live external form action, and explicit route titles. Existing production behavior therefore receives brownfield protection.

The mode covers all currently declared routes:

- `/`
- `/services`
- `/about`
- `/about/social-media`
- `/location`
- `/emergency`
- `/contact`
- `/404` and the same branded fallback for unmatched paths

Excluded from this run are application changes, visual redesign, content rewriting, new routes, completed versions of placeholder pages, SEO implementation, deployment changes, external services, and optional scaffolding.

Assumptions:

- The code in this workspace is the current application source of truth.
- The routes described as placeholders are still brownfield because their paths, titles, navigation positions, copy, and rendering behavior already exist.
- Installed Next.js, OpenNext, Tailwind, MUI, Radix, Vitest, Testing Library, and Playwright packages do not define the active runtime architecture; direct code and scripts show Vite/React as the active application.

Reclassify only if a later requested scope is a genuinely new product area or page family with no existing contracts, or if the active framework/content system differs from the inspected source.

## 2A. Execution Phase And Authorization

- Current phase: `discovery`
- Implementation explicitly authorized: no
- Approved plan path: none yet
- Approved application files/page families/routes/systems: none
- Excluded scope: every application, asset, configuration, test, and deployment file
- Migration batch size: not applicable during preflight; later implementation must use a bounded page-family or responsibility batch approved by the user
- Content changes: prohibited
- Visual changes: prohibited
- Component replacement: prohibited
- Required checkpoint: complete discovery reports and a proposed normalization plan, then obtain explicit user approval before changing this profile to `implementation`

The preflight does not authorize later recommendations by itself.

## 3. Repository Architecture Baseline

### Route system

`src/App.tsx` is the route resolver. It subscribes to browser history with `useSyncExternalStore`, compares `window.location.pathname` against constants from `src/config/site.ts`, and lazy-loads route-level page modules. `src/components/Link.tsx` intercepts ordinary internal clicks, calls `history.pushState`, and dispatches `popstate`. Unknown paths render `NotFoundPage`; `/404` reaches the same fallback because it has no dedicated route branch.

`src/components/RouteEffects.tsx` owns per-path document titles plus hash and top-of-page scrolling. The route constants, route-resolution branches, navigation links, title record, README route inventory, and repository instructions are separate declarations that must remain synchronized.

### Page families and render flow

```text
browser pathname
  -> App route comparison
  -> React.lazy route page
  -> route page state orchestration
  -> route-owned section components
  -> route-owned data modules and repository constants
  -> route CSS + shared interaction/navigation CSS
```

- Home: `HomePage.tsx`, sections and `home-data.ts`, prefix `oc-`, `home.css`.
- Services: `ServicesPage.tsx`, sections and `services-data.tsx`, prefix `ocs-`, `services.css`.
- About: `AboutPage.tsx`, sections and `about-data.ts`, prefix `oca-`, `about.css`.
- Contact: `ContactPage.tsx`, sections and `contact-data.ts`, prefix `occ-`, `contact.css`.
- Placeholder: one route page with in-module content keyed by pathname, reusing services header/footer/CSS plus `placeholder.css`.
- Not found: a focused page and `not-found.css`.

Route pages are already thin compositions. Major visual sections are separate route-owned components. State for menu visibility, FAQ state, carousel state, and sticky CTA visibility remains close to the owning page or section.

### Shared layouts, components, and client boundaries

There is no universal layout or PageView abstraction. Each main page family owns `HeaderShell`, `FooterShell`, `Icon`, and `MobileStickyCta`; these implementations are structurally similar but preserve family-specific vocabulary, CTA choices, and CSS prefixes. Shared components cover internal navigation (`Link`), primary route navigation, images, motion visibility, section reveals, route effects, and sticky-CTA visibility.

The entire Vite application is client-rendered. There are no server components, server routes, authentication boundaries, or application data loaders. Route chunks are lazy-loaded, while Motion is used in shared reveals, drawers, the home carousel, FAQ, and marquee behavior. Reduced-motion support is present in Motion components and shared/page CSS.

### Metadata and structured data

- Static `index.html` owns the default title, description, viewport, and favicon.
- `RouteEffects.tsx` updates only the document title at runtime.
- No canonical implementation was found.
- No robots or sitemap file/generator was found.
- No JSON-LD or schema helper was found.
- No route-specific description or social metadata helper was found.
- No explicit index/noindex policy was found for placeholders, `/404`, or unmatched paths.

These are baseline gaps, not implementation authority.

### Styling and design system

The established design is route-CSS based. Family wrapper classes define repeated local CSS variables and typography; public CSS prefixes are `oc-`, `ocs-`, `oca-`, and `occ-`. Shared `interactions.css` and `navigation.css` provide cross-family focus, hover, navigation, and reduced-motion behavior. Fonts are loaded with repeated Google Fonts `@import` rules. Responsive breakpoints are primarily 1080px/720px plus route-specific narrow widths. Static assets live under `public/onecall-heating-and-air/` and are referenced by root-relative URLs.

### Operational data and integrations

The contact form is plain HTML posting to Formspree. It includes required name, phone, email, and message controls, selects for service and system type, and an optional location. Phone and email actions use direct anchors. There is no local database, CMS, authentication, checkout, booking engine, analytics implementation, or local submission persistence.

The host must provide an SPA fallback to `index.html` for direct route visits. Host-level configuration is described in repository documentation but is not present in the inspected files.

### Validation commands and restrictions

- `npm run typecheck`: strict TypeScript, no emit; passed during this preflight.
- `npm run lint`: ESLint flat config; passed during this preflight.
- `npm run build`: TypeScript plus production Vite bundle; available but not run because preflight does not need to refresh `dist/`.
- `npm run dev` and `npm run preview`: local browser verification on port 3000; not run.
- Testing dependencies are installed, but there are no repository test files or Vitest/Playwright configuration/scripts.

## 4. Runtime Content Storage Policy

- Live page copy and business claims reside in route section TSX, `home-data.ts`, `about-data.ts`, `contact-data.ts`, `services-data.tsx`, `PlaceholderPage.tsx`, and `src/config/site.ts`.
- Metadata inputs reside in `index.html` and the `ROUTE_TITLES` record in `RouteEffects.tsx`.
- Route identity resides primarily in `src/config/site.ts` and the conditional resolver in `src/App.tsx`.
- No repository-owned route/keyword strategy artifact exists beyond reusable v2 source documentation and the new generated suite ledger.
- Static application-owned content includes page copy, service definitions, FAQs, equipment names, service-area lists, route titles, phone/email details, business hours, and placeholder messages.
- Operational data is limited to user-entered contact-form fields sent directly to Formspree. Form submissions are not application-owned static content.
- No database or CMS exists in the inspected runtime.
- Adding or expanding a database or CMS is not authorized.
- Files under `docs/v2-generated-docs/` are audit, transfer, plan, and control artifacts only.

> Live public page content must remain in the repository's established application code. Generated Markdown is not a runtime source. Do not introduce a database or CMS for page content.

## 5. Component Preservation Matrix

| Component or pattern | Current responsibility | Consumers | Existing quality | Decision | Protection | Evidence |
|---|---|---|---|---|---|---|
| `App` route resolver | Path-to-page resolution and route chunk loading | Entire application | Simple and working; declarations are manual | keep as-is during discovery | Preserve public resolution and fallback behavior | `src/App.tsx` |
| `Link` | Client-side internal navigation with native anchors for external protocols | Navigation and route CTAs | Focused, semantic, modifier-key aware | reuse | Preserve public props and browser-history behavior | `src/components/Link.tsx` |
| `PrimaryNavigation` | Shared desktop/mobile route vocabulary and active states | Four page-family headers | Useful shared owner; reads current pathname | reuse | Preserve route labels, hierarchy, and active behavior | `src/components/PrimaryNavigation.tsx` |
| `RouteEffects` | Route titles and hash/top scrolling | All routes | Focused but title map duplicates route identity | keep as-is; consider adapter/derivation only in an approved plan | Preserve title text and hash scrolling | `src/components/RouteEffects.tsx` |
| `Image` | Native image defaults, eager priority, optional fill | Logos, hero, 404 | Small coherent wrapper | reuse | Preserve `alt`, loading, priority, sizing behavior | `src/components/Image.tsx` |
| `SectionReveal` and `MotionVisibility` | Page entrance and drawer/sticky visibility animation | All main families and placeholder/not-found | Shared, reduced-motion aware | reuse | Preserve reduced-motion and reveal semantics | shared component files |
| `useStickyCta` | Passive scroll listener and threshold-based visibility | Home, services, about, contact | Focused shared hook | reuse | Preserve thresholds unless behavior change is approved | `src/hooks/use-sticky-cta.ts` |
| Route-level page compositions | State orchestration and ordered sections | Each public family | Already thin and readable | keep as-is | Preserve section order and conversion flow | `src/pages/*Page.tsx` |
| Route-owned section components | Distinctive page content and visual composition | One family each | Clear domain ownership | keep as-is | Visual identity and content are protected | `src/pages/<route>/*.tsx` |
| Family `HeaderShell` implementations | Announcement, desktop navigation, drawer, phone/CTA | Main families; services also serves placeholders | Confirmed structural duplication with meaningful family variants | consolidate confirmed duplication only after audited contract and approval | Do not replace solely for naming/layout similarity | four `HeaderShell.tsx` files |
| Family `FooterShell` implementations | Contact facts, navigation, service-area copy, brand statements | Main families; services also serves placeholders | Confirmed repeated facts plus family styling/content variants | extract focused shared facts or logic first; adapter before consolidation | Preserve visible copy, links, and family CSS prefixes | four `FooterShell.tsx` files |
| Family `MobileStickyCta` implementations | Scroll-triggered mobile call/form/quote actions | Four main families | Similar mechanics, different CTA semantics | reuse as-is; consider focused adapter later | Preserve call/form destinations and timing | four `MobileStickyCta.tsx` files |
| Family `Icon` implementations | Inline SVG vocabulary | Route-owned UI | Repeated names and shapes with family-specific subsets | consolidate only when equivalence is proven | Preserve accessible decorative behavior and visual output | four `Icon.tsx` files |
| `HeroSection` carousel | Home positioning, rotating message, controls, equipment marquee | Home | Feature-rich, reduced-motion and focus pause present | keep as-is | Protect controls, timing, content, and mobile behavior | `src/pages/home/HeroSection.tsx` |
| `FaqSection` | Single-open FAQ disclosure and animation | Home | Labeled buttons/regions and reduced motion | keep as-is | Preserve keyboard and ARIA behavior | `src/pages/home/FaqSection.tsx` |
| `ServiceRequestForm` | Public lead submission to Formspree | Contact | Native labeled controls and required fields | keep as-is | Endpoint, field names, requirements, and method are approval-required | `src/pages/contact/ContactDetailsSection.tsx` |
| `PlaceholderPage` map | Content/rendering for three established placeholder routes | Location, emergency, social | Compact and intentionally reuses services shell | keep as-is | Paths, titles, copy, and indexing decisions require explicit scope | `src/pages/PlaceholderPage.tsx` |
| Route-family CSS prefixes | Scoped visual identity and interaction selectors | All page families | Established and intentionally distinct | preserve | Do not rename or globally consolidate without verified migration | route CSS and repository instructions |

## 6. Repository Conventions To Preserve

- Route-level pages use PascalCase default exports because they are loaded with `React.lazy`.
- Reusable components, hooks, constants, and helpers use named exports.
- `@/` is the source alias; route-owned modules currently use short local relative imports.
- Routes are declared in `src/App.tsx`; constants live in `src/config/site.ts`; titles live in `RouteEffects.tsx`.
- Route page files remain thin compositions; major visual sections remain in route folders.
- Route-specific copy and lists remain in route `*-data.ts`/`*.tsx` or focused section modules.
- Route CSS stays with its route, and prefixes `oc-`, `ocs-`, `oca-`, `occ-` remain stable unless an approved migration proves every consumer.
- Static assets remain under `public/onecall-heating-and-air/` with root-relative references.
- Shared `Link` handles internal navigation; ordinary anchors handle phone, email, hash, external, and form actions.
- Public routes, title text, drawer behavior, hero carousel, FAQ, service anchor navigation, sticky CTA behavior, not-found fallback, and contact form behavior remain stable.
- Existing component names are authoritative; suite examples such as `SitePageLayout`, `PageView`, `PageDefinition`, or `lib/content/` are responsibility examples, not required names.
- Strict TypeScript, ESLint, route-aligned validation, accessibility, reduced motion, and mobile/desktop preservation are mandatory.

## 7. Approved Normalization Scope

No application normalization is approved in the current discovery phase. Later handoffs may audit and propose:

- one discoverable route-identity contract or validation that reconciles constants, resolver branches, navigation, titles, README inventory, and future SEO outputs
- focused extraction of confirmed duplicate business facts such as service areas, phone/email use, and footer facts without changing visible content
- focused shared shell logic or adapters where header/footer/icon/sticky responsibilities truly match while retaining family styling and CTA variants
- explicit metadata, canonical, indexing, sitemap, structured-data, and route-contract plans
- automated coverage for route resolution, titles, fallback behavior, hash links, carousel/FAQ/drawer behavior, contact-form contracts, responsive behavior, and reduced motion
- accessibility review for dialogs/drawers, carousel tab semantics, page labels, zoom/reflow, focus management, and generated accessible names
- review of broad client/motion boundaries and route chunk behavior using measured evidence

Audit observations are recommendations only. They do not authorize code changes, content edits, route changes, or redesign.

## 8. Protected And Approval-Required Areas

- Public paths, placeholder paths, `/404`, unmatched fallback behavior, internal anchor fragments, redirects, and future canonical destinations.
- Title text, indexability, canonical meaning, sitemap policy, schema meaning, and any public SEO claim.
- All approved copy, prices, tax-credit statements, service-area claims, licensing/insurance claims, response-time claims, warranties, business hours, and owner/company statements.
- Visual identity, CSS prefixes, colors, fonts, imagery, section order, animations, and distinctive page-family structures.
- Header/footer CTAs, mobile sticky actions, hero carousel, FAQ disclosure, service table of contents, hash scrolling, and navigation hierarchy.
- Formspree endpoint, HTTP method, field names, validation, required flags, submission expectations, and any replacement form/database/CRM workflow.
- Public component props/exports and path aliases.
- Database, CMS, runtime Markdown, analytics, authentication, booking, payment, and external synchronization changes.
- Vite build target, dependencies, host SPA fallback, external fonts, and deployment configuration.

## 9. Validation Baseline

| Concern | Available evidence | Preflight result | Gap / later requirement |
|---|---|---|---|
| Route resolution | Direct inspection of `App.tsx`, route constants, navigation, README | Seven declared paths plus branded fallback identified | No automated route test or direct-visit host check |
| Titles and metadata | `index.html`, `RouteEffects.tsx` | Route titles identified; no route descriptions/canonicals/social metadata | Add contract review/tests only after plan approval |
| Structured data | Repository search | None found | Meaning and eligibility need audit before implementation |
| Sitemap/robots/indexing | Repository search | None found | Host/public indexing behavior unverified |
| Runtime content completeness | Page compositions, section files, route data files | Sources mapped; three routes intentionally use placeholder content | No automated completeness contract |
| Component semantics | Source inspection | Main/section/header/nav/form structure identified | Browser accessibility review still required |
| Interactive behavior | Source inspection | Drawer, carousel, FAQ, hash navigation, sticky CTA, and Formspree flow identified | No interaction tests; no external submission performed |
| Accessibility | Labels, focus CSS, reduced-motion code inspected | Several positive patterns exist | Focus trapping/restoration, carousel semantics, accessible names, and hidden drawer focusability require dedicated audit |
| Responsive and zoom | CSS breakpoints inspected | Mobile breakpoints and narrow-width rules exist | No 200% text resize, 400% zoom-equivalent, or browser visual verification performed |
| Forms | Native form markup inspected | Labels, field names, required inputs, POST action recorded | No network submission, error, success, spam, privacy, or offline review |
| Type safety | `npm run typecheck` | Passed, exit 0 | Rerun after any approved change |
| Lint | `npm run lint` | Passed, exit 0 | Rerun after any approved change |
| Production bundle | `npm run build` is available | Not run; preflight did not refresh `dist/` | Required after page/route implementation |
| Automated tests | File and script inspection | No repository test files/config/scripts | Establish focused contracts before optional scaffolding |
| Deployment | README/agent instructions | SPA fallback requirement documented | Live host configuration not present or verified |

## 10. Risks, Conflicts, And Human Decisions

- Git evidence is unavailable. Later work cannot attribute or distinguish pre-existing user changes through Git until metadata is restored or another baseline is supplied.
- Route identity is distributed across constants, route branches, navigation, titles, README, and instructions. Drift is possible because no executable reconciliation exists.
- Phone and email are partly centralized, but direct literals remain. Service-area collections and footer/company facts are duplicated and already differ in membership/detail. Any consolidation must determine which differences are deliberate before changing runtime content.
- Headers, footers, mobile CTAs, and icon sets show confirmed structural duplication, but their CTAs, content, SVG subsets, and family CSS are not identical. Extraction should begin with facts/contracts or adapters rather than wholesale replacement.
- Installed framework/UI/test packages exceed the active Vite runtime needs. Dependency cleanup is out of scope and should not be mixed with page architecture.
- SEO/indexing architecture is minimal. Placeholder and not-found indexability cannot be safely inferred from current code.
- Formspree and hosting behavior are external and cannot be validated from repository inspection alone.
- Accessibility evidence is source-only. A dedicated keyboard, assistive-technology, resize, and reflow review is required before claiming compliance.
- No human decision blocks this preflight. Before implementation, the user must approve a bounded normalization plan and decide whether protected metadata/content/visual/form areas are included.

## Staleness Conditions

Refresh this profile if the route inventory, routing mechanism, page-family organization, runtime content ownership, framework, design system, metadata/indexing system, operational form flow, CMS/database boundary, or requested scope changes materially. Also refresh it if Git metadata reveals overlapping work that changes preservation decisions, or if later inspection contradicts any component or content-owner decision above.
