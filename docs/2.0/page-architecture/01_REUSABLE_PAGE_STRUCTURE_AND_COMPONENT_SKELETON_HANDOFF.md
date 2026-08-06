# Reusable Page Structure And Component Skeleton Handoff 2.0

This is the foundation handoff for the `docs/2.0/page-architecture/` suite. Run it after the preflight and before the focused route, cross-cutting contract, accessibility, validation, and scaffolding handoffs in this folder.

## Required Preflight Input

Before auditing or editing, read `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

Also read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown before the first generated-file or application write, then update this handoff's ledger row when work begins and ends.

Confirm that the profile covers the requested scope and is not materially stale. If it is missing, stale, or incomplete for the scope, stop implementation and run or refresh `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`.

The profile's execution mode, execution phase, component preservation matrix, runtime content storage policy, repository conventions, protected areas, and approval gates override example names and folder structures in this handoff. In discovery, inspect and report without refactoring application code. In implementation, require an approved plan and scoped authorization. Record the mode and phase used, existing structures preserved, approved deviations, and newly discovered profile conflicts in the return.

## Objective

Codex should inspect an existing React or Next.js application and normalize how its pages are composed without turning the application into a generic site builder.

The target architecture should make it clear:

1. where route handling belongs
2. where live page content belongs
3. where metadata and structured-data inputs belong
4. where page-family composition belongs
5. where reusable visual sections belong
6. where interactive client components belong
7. how a developer can add a new custom component without fighting a generic renderer
8. how every indexable page keeps an explicit, reviewable keyword strategy without marking up live copy

This handoff is based on a mature production pattern used in the Mountain West website, but it must remain reusable across other repositories and adapt to the conventions already present in the target repo.

## Why

Mature websites often reach a point where the content and visual design are mostly complete, but page families have drifted structurally.

Common symptoms include:

- some route files are thin while others contain hundreds of lines of JSX
- equivalent metadata fields use names such as `title`, `metaTitle`, and `seoTitle`
- some content lives in typed data files while similar content is hardcoded in route components
- multiple page families repeat nearly identical section markup
- layout props remain after their behavior was removed
- large static page bodies become client components because one nested control is interactive
- one dynamic route family has a clean reusable view while another duplicates the same page skeleton across routes
- content rewrite tools cannot reliably identify the application source of truth
- target keywords are scattered across metadata, route helpers, spreadsheets, and visible copy with no authoritative page relationship
- keyword coverage has to be rediscovered by searching source files or placing markers inside live content

The goal is not maximum abstraction. The goal is a predictable ownership model that lets developers and AI agents find, edit, test, and extend pages safely.

## Core Architecture Decision

Use this composition flow:

```text
route page
  -> load content by route or slug
  -> build a typed page model
       -> SEO metadata
       -> structured data
       -> derived links and supporting data
       -> section-ready content
  -> render a domain PageView
  -> render domain and shared section components
  -> wrap the result in the shared site layout
```

The standard responsibility chain is:

```text
page.tsx
  -> content source
  -> page-model builder
  -> DomainPageView
  -> section components
  -> SitePageLayout or framework equivalent
```

## Critical Non-Goal: Do Not Build A Generic Site Builder

Do not replace normal React composition with a universal JSON section renderer, component registry, or page-builder schema unless the repository already has a real product requirement for one.

Do not create a system like this as the default architecture:

```tsx
<GenericPageRenderer sections={page.sections} />
```

Avoid broad unions such as:

```ts
type GenericSection =
  | HeroSection
  | TextSection
  | CardSection
  | QuoteSection
  | FormSection
  | EveryFutureSection;
```

That design usually makes custom page work harder, hides page semantics, creates oversized switch statements, and turns ordinary component additions into schema migrations.

Instead:

- keep each domain PageView explicit
- keep section order visible in JSX
- use normal React composition
- allow custom components anywhere the page family needs them
- reuse section components only when the same responsibility genuinely repeats
- keep data-driven routing without making rendering fully generic

Uniformity should exist in ownership, naming, contracts, and composition boundaries. It should not force every page to look or behave the same.

## Page Categories

Classify routes before refactoring them.

### 1. Unique marketing pages

Examples:

- homepage
- contact
- emergency page
- company overview
- campaign landing page

These pages may use explicit custom composition. They should still share the site shell, metadata utilities, typography primitives, and repeated sections.

Do not force a unique homepage into the same body renderer as a service detail page.

### 2. Dynamic page families

Examples:

- services by slug
- service subcategories
- locations by slug
- city-service combinations
- blog articles
- deal detail pages
- product or category detail pages

These should normally use:

- one route handler per URL pattern
- a typed content collection
- a map or lookup helper by slug/path
- one PageView for the family
- domain section components

### 3. Interactive conversion pages

Examples:

- booking
- quote forms
- checkout
- authenticated tools
- search

Keep the route and surrounding explanatory content server-rendered when possible. Isolate forms, schedulers, search state, and other browser behavior in client components.

### 4. Legal, policy, and document-style pages

These can share a document shell and typography while keeping their actual content explicit and application-owned.

Do not make Markdown the runtime source of truth unless the repository intentionally uses a Markdown or CMS content pipeline.

## Target Folder Skeleton

Adapt folder names to the repo instead of moving files purely for aesthetics.

```text
app/
  (site)/
    services/
      [slug]/
        page.tsx

components/
  layout/
    SitePageLayout.tsx
  services/
    ServiceDetailPageView.tsx
    sections/
      ServiceHeroSection.tsx
      ServiceProblemSection.tsx
      ServiceProcessSection.tsx
      ServiceCostTimingSection.tsx
      ServiceRelatedLinksSection.tsx

lib/
  content/ or constants/
    services/
      drain-cleaning.ts
      hydro-jetting.ts
      sewer-repair.ts
      index.ts
  services/
    build-service-page-model.ts
    get-service-page.ts
  seo/
    page-metadata.ts
    structured-data.ts
```

The equivalent generic pattern is:

```text
app route
components/domain/DomainPageView.tsx
components/domain/sections/*
lib/content-or-existing-data-folder/domain/*
lib/domain/build-domain-page-model.ts
lib/seo/*
```

The repository may already use `lib/constants/` instead of `lib/content/`. Keep the established folder when it is working. The important part is content ownership, not the exact folder label.

## Layer Responsibilities

### Route file responsibilities

A route file may:

- receive and validate route parameters
- find the corresponding content record
- call `notFound()` or the framework equivalent
- start and await server data requests
- build or call metadata generation
- build or call structured-data generation
- call a page-model builder
- render the domain PageView

A route file should not usually:

- contain long marketing copy
- render eight or ten large sections directly
- define multiple reusable components inside the route
- contain repeated domain transformations
- duplicate another route family's page skeleton
- become the only place where content, metadata, and schema facts are joined manually

Treat file length as a signal, not a hard rule. When a route becomes difficult to scan in one pass or exceeds roughly 150-200 lines because it mixes responsibilities, first extract focused helpers or a PageView.

### Content-source responsibilities

The runtime content source should own publishable facts and wording, including:

- route or canonical path
- page title and hero copy
- metadata inputs
- service or product facts
- paragraphs and lists
- FAQs
- related-content references
- domain-specific section data

Content must stay in the application's real runtime source. Generated Markdown may support rewriting, review, or transfer, but it must not silently become the application source of truth.

### Page-model builder responsibilities

A page-model builder may:

- combine content with route data
- calculate derived labels and links
- normalize related items
- prepare schema inputs
- prepare metadata inputs
- merge approved fallback data
- remove duplication before rendering
- start independent data access early and await it as late as practical

Prefer pure functions for deterministic transformations.

Do not use the page model as a second copy of the content. It should transform and organize the source data for a specific PageView.

### Domain PageView responsibilities

A PageView owns the visible section order for one page family.

Example:

```tsx
export function ServiceDetailPageView({ model }: ServiceDetailPageViewProps) {
  return (
    <SitePageLayout scripts={model.schemas} banner={model.banner}>
      <ServiceHeroSection content={model.hero} />
      <ServiceProblemSection content={model.problem} />
      <ServiceProcessSection content={model.process} />
      <ServiceCostTimingSection content={model.costTiming} />
      <ServiceReviewsSection reviews={model.reviews} />
      <ServiceFaqSection items={model.faqs} />
      <ServiceRelatedLinksSection items={model.relatedLinks} />
    </SitePageLayout>
  );
}
```

The explicit JSX is intentional. A developer can add a custom section without extending a universal renderer.

### Section-component responsibilities

Extract a section when:

- it represents a clear visual or semantic subject
- it has its own props or data contract
- it repeats across pages in a family
- it is independently interactive
- extraction makes the PageView easier to scan

Do not extract tiny wrappers with no clarity benefit.

### Shared-layout responsibilities

The site layout should own genuinely global structure such as:

- header
- breadcrumbs
- page banner or hero frame when globally consistent
- content shell and width
- optional global conversion section
- structured-data script output when that is the repo pattern
- footer

Avoid boolean-prop drift. Prefer APIs where the presence of configuration controls the feature.

Instead of:

```tsx
<SitePageLayout
  showBookingSection={false}
  bookingFormServiceContext={context}
/>
```

Prefer:

```tsx
<SitePageLayout booking={context} />
```

where `booking={undefined}` means the section is absent.

Remove layout props that are declared but no longer have behavior.

## Shared Page Envelope

Use a common outer contract for new page definitions while keeping each body domain-specific.

```ts
export interface PageSeo {
  title: string;
  description: string;
  keywords: readonly string[];
  imagePath?: string;
  index?: boolean;
}

export interface PageHero {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: readonly string[];
}

export interface PageDefinition<TBody> {
  path: string;
  slug?: string;
  seo: PageSeo;
  keywordStrategy: PageKeywordStrategy;
  hero: PageHero;
  body: TBody;
  faqs: readonly FaqItem[];
}
```

Example domain types:

```ts
export type ServicePageDefinition = PageDefinition<ServicePageBody>;
export type LocationPageDefinition = PageDefinition<LocationPageBody>;
export type BlogPageDefinition = PageDefinition<BlogArticleBody>;
```

This is a shared envelope, not a shared body renderer.

When an existing repo already uses stable public types, introduce adapters first. Do not rename every field across the repository in one risky change just to match this example.

## Page-Level Keyword Strategy And Tracking

Every indexable page should have an explicit keyword strategy tied to its canonical route. Do not require a developer or AI agent to search the page source to rediscover which phrases the page is intended to target.

Keep three different concerns separate:

```text
keyword strategy
  = what the page is intentionally targeting

visible keyword coverage
  = where and how often approved targets currently appear

search performance
  = how real queries and pages are performing over a dated measurement window
```

Do not combine those three layers into one mutable content field.

### 1. Keyword strategy source

Use one route-keyed strategy source in application code or an existing typed SEO helper.

It should answer:

- which route owns the keyword
- whether the keyword is primary, secondary, or supporting
- what search intent it represents
- whether an exact phrase or approved variant matters
- whether the target is active, experimental, under review, or being retired
- where visible use is expected, if anywhere
- which evidence or owner decision established the target
- when the strategy was last reviewed

Example:

```ts
export type KeywordRole = "primary" | "secondary" | "supporting";

export type KeywordTargetStatus =
  | "active"
  | "testing"
  | "review"
  | "retiring";

export interface PageKeywordTarget {
  phrase: string;
  role: KeywordRole;
  intent: "informational" | "commercial" | "transactional" | "local" | "navigational";
  status: KeywordTargetStatus;
  approvedVariants?: readonly string[];
  expectedAreas?: readonly ("title" | "description" | "h1" | "body" | "faq" | "internal-link")[];
  minimumVisibleUses?: number;
  maximumVisibleUses?: number;
  sourceReason: string;
}

export interface PageKeywordStrategy {
  pagePath: string;
  primary: PageKeywordTarget;
  secondary: readonly PageKeywordTarget[];
  supporting: readonly PageKeywordTarget[];
  excluded?: readonly string[];
  lastReviewed: string;
}
```

The counts are page-specific editorial guardrails, not a universal keyword-density formula. Omit them when evidence does not justify a count.

The route is the stable join key. A keyword strategy must not depend on locating a phrase inside JSX before the intended page can be identified.

### 2. Visible keyword coverage

Generate coverage from the route's runtime content and the route-keyed strategy.

The coverage process should normalize and inspect, where available:

- final meta title
- final meta description
- visible H1
- visible headings
- visible body copy
- FAQs
- internal-link labels and anchor text

The generated coverage matrix should report:

- route
- keyword
- keyword role
- approved variants
- title occurrence count
- description occurrence count
- H1 occurrence count
- body occurrence count
- FAQ occurrence count
- internal-link occurrence count
- total visible occurrence count
- minimum and maximum page-specific guidance when defined
- missing, weak, healthy, or excessive coverage state
- runtime source files used for the count

Do not insert parentheses, asterisks, plus signs, or other keyword markers into live application copy to make coverage auditable.

When a rewrite workflow needs temporary phrase markers, add them only to generated transfer documents. Remove them before content is implemented in application code.

### 3. Search-performance observations

Keep measured ranking and query data outside the runtime page definition because it changes over time and comes from dated external evidence.

Performance inputs may include:

- Google Search Console exports
- Bing Webmaster Tools exports
- approved rank-tracking exports
- reviewed analytics landing-page data

Each observation should preserve:

- source
- export date
- measurement date range
- query
- landing page
- clicks
- impressions
- CTR
- average position or source-equivalent rank
- device and country filters when relevant

Do not hardcode changing impressions, CTR, or ranking positions into production content constants merely to keep the strategy tied to the page.

Join performance evidence back to the page strategy using the canonical route and normalized query.

### 4. Pivot workflow

When new search data arrives:

1. refresh the dated performance observations
2. map each useful query to its intended route
3. compare the observed landing page with the intended owner route
4. compare performance against current visible coverage
5. check whether multiple pages are competing for the same primary intent
6. classify the next action as keep, strengthen, reposition, consolidate, split, test, or retire
7. update the route-keyed strategy only after the decision is supported
8. update visible content, metadata, FAQs, or internal links only when the page intent still fits
9. regenerate the strategy and coverage matrices
10. record what changed and the next review date

Do not pivot solely because a phrase has high impressions. Confirm that the query fits the page, service, audience, and conversion purpose.

### 5. Cannibalization and ownership checks

The audit should flag:

- the same primary keyword assigned to unrelated routes
- one query repeatedly landing on a route other than its intended owner
- a page targeting several unrelated primary intents
- a target route with no visible topical support
- a page with strong visible repetition but no strategic assignment
- a retired keyword that still drives metadata or prominent headings
- a new public route with no keyword strategy

Shared supporting terms may appear across multiple pages. Do not report ordinary topical overlap as cannibalization without route-intent or performance evidence.

### 6. Relationship to metadata keywords

The internal page-keyword strategy is the planning source. An HTML metadata-keywords array, if the repo emits one, is only an optional downstream representation and must not become the strategy source of truth.

The strategy should remain useful even when the framework or project chooses not to emit a keywords meta tag.

### 7. Relationship to rewrite protection

Keyword strategy and rewrite protection overlap but are not identical:

- strategy targets describe what a page is intended to rank for
- protected rewrite phrases describe which existing phrases or approved variants must survive a specific rewrite
- Search Console opportunities describe observed queries worth reviewing
- visible coverage describes current occurrence evidence

Do not automatically protect every strategy keyword during rewriting. Assign rewrite requirements by page intent, current performance, visible use, and approved editorial guidance.

## Naming Conventions

New page definitions should use one naming model.

Recommended meanings:

- `path`: canonical application route
- `slug`: dynamic route identifier
- `seo.title`: meta title input
- `seo.description`: meta description input
- `seo.keywords`: tracked page keyword inputs
- `keywordStrategy.primary`: the page's primary owned search target
- `keywordStrategy.secondary`: additional targets that support the same page intent
- `keywordStrategy.supporting`: useful topical language that does not define page ownership
- `hero.title`: visible H1
- `hero.description`: visible opening summary
- `summary`: reusable card or directory summary
- `imagePath`: application-relative asset path
- `faqs`: visible FAQ collection

Avoid adding new ambiguous combinations such as:

- `title`, `pageTitle`, `seoTitle`, and `metaTitle` on the same level
- `description`, `shortDescription`, `metaDescription`, and `intro` without defined meanings
- both `route` and `href` for the same canonical page path
- keyword arrays whose relationship to primary, secondary, supporting, or observed-query roles is undocumented

The visible H1 and meta title may intentionally differ. They should have different, explicit fields rather than relying on one overloaded `title` property.

For existing repositories, create a naming matrix before changing fields:

| Current field | Intended meaning | Target field or adapter |
|---|---|---|
| `metaTitle` | SEO title input | `seo.title` |
| `seoTitle` | SEO title input | `seo.title` |
| `pageTitle` | visible H1 | `hero.title` |
| `shortDescription` | card or page summary | `summary` or `hero.description` after review |

Do not mechanically rename fields without checking every consumer.

## Metadata And Structured Data

Use one shared metadata builder for final formatting, but keep page-specific metadata inputs with the page's runtime content or route configuration.

The shared metadata builder should consistently handle:

- title formatting and length policy
- description normalization and length policy
- canonical URLs
- robots directives
- Open Graph
- Twitter metadata
- image fallbacks
- optional publication dates

Do not create a second global metadata registry that duplicates titles and descriptions already stored in domain content.

Structured data should be built from the same approved runtime facts used by the visible page. Keep schema builders in shared SEO helpers or focused domain helpers.

Prefer:

```ts
const schemas = buildServicePageSchemas(model);
```

over repeatedly assembling the same service, breadcrumb, and FAQ schema shapes inside every route.

## Server And Client Component Boundaries

Default route files, PageViews, and static content sections to server components.

Use `"use client"` only for the smallest practical interactive leaf, such as:

- scheduler
- form state
- accordion interaction
- client-side search or filtering
- browser API integration
- animation that genuinely requires a client runtime

Avoid marking a complete article body, service body, or page family as client-side only because one nested button or accordion is interactive.

Prefer:

```text
Server PageView
  -> static sections
  -> static links and images
  -> small client accordion
  -> small client scheduler
```

This reduces hydration work and prevents large content objects from being serialized into client components unnecessarily.

For independent server data:

- start requests early
- use parallel fetching where dependencies allow it
- await only in the branch that uses the result
- do not serialize full database or content records to a client component when it only needs a few fields

## Reusable Section Primitives

Create shared primitives only for visual patterns that repeat across multiple domains.

Reasonable candidates include:

- `PageIntroSection`
- `PageSection`
- `FactGridSection`
- `ActionSection`
- `RelatedLinksSection`
- `DocumentPageLayout`

Keep their variants small and meaningful, for example:

- `flat`
- `card`
- `tinted`

Domain semantics should remain in domain components such as:

- `ServiceProblemSection`
- `LocationCoverageSection`
- `BlogSourceSection`
- `DealRedemptionSection`

Do not create components for individual paragraphs, trivial wrappers, or hypothetical reuse.

## Content File Splitting

Do not create one file per page automatically.

Split content when there is a real maintenance benefit:

- a content file is difficult to navigate
- multiple agents or writers commonly edit different sections at the same time
- a natural parent domain exists
- one page contains article-length content
- file size makes review and merge conflicts harder

Good boundaries include:

- one file per primary service family
- one file per long blog article
- one file per county or major location family
- one file per substantial About page

Keep a small index file that assembles and exports the collection and lookup maps.

Do not split files into tiny fragments that hide where a page's content lives.

## Mountain West Reference Pattern

When this handoff is run against the Mountain West repository, use the following as reference points rather than universal filenames:

- shared shell: `components/layout/SitePageLayout.tsx`
- strong thin-route example: `app/(site)/about/blog/[articleSlug]/page.tsx`
- strong data-driven family: `app/(site)/services/[slug]/page.tsx`
- service runtime content: `lib/constants/service-page-content.ts`
- reusable service rendering: `components/services/detail/ServiceDetailSections.tsx`
- About family frame: `components/about/AboutPageFrame.tsx`
- location-service PageView: `components/locations/LocationServiceComboPageView.tsx`
- current route keyword helper: `lib/seo/keywords.ts`
- protected keyword evidence: `docs/content/keywords/`
- generated route and coverage evidence: the current page-content keyword directory outputs
- dated search-performance evidence: `docs/data/google-search-performance/`
- oversized conditional route to normalize: `app/(site)/about/[slug]/page.tsx`
- duplicated family routes to normalize: county and Ogden sublocation routes
- standalone routes worth extracting into PageViews: Contact, Specials, and other large top-level pages

Known Mountain West cleanup signals include:

- inconsistent metadata field names across domains
- large route files with inline sections
- duplicated sublocation render structures
- declared layout props that no longer affect rendering
- booking context passed separately from the flag that controls booking-section visibility
- large client component boundaries around mostly static service and blog content
- keyword ownership distributed across route helpers, protected ledgers, generated maps, and Search Console exports without one normalized page-strategy contract

Other repositories must be inspected independently. Do not assume these exact problems or filenames exist elsewhere.

## Required Audit Process

Before changing code, Codex should:

1. inspect repository instructions and the framework version
2. inventory all page route files
3. group routes into page families
4. identify shared layouts and page frames
5. identify content sources and lookup maps
6. identify metadata and structured-data builders
7. identify client-component boundaries
8. identify route files mixing orchestration, content, and large JSX sections
9. identify duplicated page-family markup
10. identify inconsistent field names and dead props
11. identify the current route-to-keyword mapping source and protected keyword ledgers
12. identify current keyword coverage reports and the latest dated performance inputs
13. inspect relevant tests and route inventories
14. record public contracts that must not change

Produce a current-state matrix with at least:

| Page family | Route file | Content source | PageView | Shared layout | Metadata source | Keyword strategy source | Client boundary | Main issue |
|---|---|---|---|---|---|---|---|---|

## Refactor Plan

### Phase 1: Document and guard current behavior

- inventory routes and page families
- document content ownership
- record metadata, schema, sitemap, and indexability behavior
- add or update focused tests before moving large structures
- identify unrelated worktree changes and preserve them

### Phase 2: Normalize naming through adapters

- define shared `PageSeo`, `PageHero`, and `PageDefinition<TBody>` concepts where useful
- create adapters for existing field names
- stop adding new naming variants
- keep old public types stable until their consumers are migrated safely

### Phase 3: Normalize page-level keyword ownership

- establish one route-keyed keyword strategy source
- map existing primary, secondary, supporting, protected, and observed-query evidence without collapsing their meanings
- add adapters around existing keyword helpers rather than duplicating them
- generate route strategy and visible coverage matrices
- add missing-strategy, ownership-conflict, and excessive-coverage checks
- keep changing rank observations out of runtime content constants
- keep phrase markers out of live page content

### Phase 4: Thin the largest routes

- extract domain PageViews
- move reusable transformations into pure helpers or page-model builders
- keep route files focused on params, lookup, server data, metadata/schema orchestration, and rendering
- preserve visible section order and page behavior

### Phase 5: Consolidate duplicated page-family views

- share one PageView where two routes render the same domain structure
- keep route-specific lookup and data preparation separate
- do not merge genuinely different page families merely because they share styling

### Phase 6: Normalize shared section shells

- extract repeated semantic sections
- use the established typography and spacing system
- keep explicit domain components for domain-specific behavior
- remove dead layout props and impossible prop combinations

### Phase 7: Split oversized content files

- split along real domain boundaries
- preserve one discoverable index and lookup layer
- keep runtime application code as the source of truth
- update import and contract tests

### Phase 8: Reduce client boundaries

- keep static PageViews and content sections server-rendered
- move interactivity into focused client leaves
- minimize serialized props
- parallelize independent server data where appropriate

### Phase 9: Validate the whole route system

- run type checks, lint, targeted unit tests, metadata tests, route inventory tests, and build
- use browser or visual tests only when approved or required by the repo workflow
- compare representative pages from every page family
- confirm no route, canonical, metadata, structured-data, form, or indexability contract changed accidentally

## Stop Conditions

Stop and ask for direction before:

- changing public URLs or slugs
- changing redirect behavior
- changing canonical or indexability intent
- changing schema meaning
- changing public business claims
- changing form, booking, checkout, or submission behavior
- replacing the established design system
- introducing a CMS or generic page builder
- making Markdown the runtime source of truth
- moving every content file solely to make the tree look symmetrical
- combining domains whose page structures are materially different

If the proposed refactor requires a large all-at-once rewrite, stop and split it into page-family phases.

## Validation Requirements

Detect and use the target repository's existing commands. A React/Next.js repository should normally run the smallest relevant set while iterating, followed by broader checks proportional to the change.

Expected checks include:

- TypeScript or framework type check
- lint
- targeted component and page-family tests
- metadata and structured-data tests
- route inventory and sitemap tests
- production build for cross-family structural changes

Validate these contracts explicitly:

- every public route still resolves
- every intended public page still has metadata
- final meta titles and descriptions remain within the repo's policy
- canonical URLs remain correct
- sitemap inclusion and exclusion remain correct
- structured data remains aligned with visible content
- page H1 structure remains valid
- interactive controls remain keyboard accessible
- client-only functionality still works
- no source content was lost during extraction
- every intended indexable content page has a route-keyed keyword strategy or an explicit reviewed exception
- primary keyword ownership conflicts are reported
- strategy, visible coverage, rewrite protection, and dated performance evidence remain distinguishable
- visible keyword counts can be regenerated without marking live application content
- keyword targets with page-specific minimums or maximums stay within their reviewed bounds

## Expected Generated Outputs

Unless the user requests different locations, write the audit outputs to:

- `docs/v2-generated-docs/page-architecture/01_PAGE_STRUCTURE_REPORT.md`
- `docs/v2-generated-docs/page-architecture/01_PAGE_STRUCTURE_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/01_PAGE_STRUCTURE_HUMAN_TODO.md`
- `docs/v2-generated-docs/page-architecture/PAGE_STRUCTURE_NORMALIZATION_PLAN.md`
- `docs/v2-generated-docs/page-architecture/PAGE_KEYWORD_STRATEGY_MATRIX.csv`
- `docs/v2-generated-docs/page-architecture/PAGE_KEYWORD_COVERAGE_MATRIX.csv`
- `docs/v2-generated-docs/page-architecture/PAGE_KEYWORD_PIVOT_REPORT.md`

The detailed report should describe the current architecture and decisions. The implementation summary should record the execution mode and phase, actual files and behavior changed or preserved, validation, and ledger status; in discovery it must say that no application implementation occurred. The human TODO should contain only decisions, approvals, or visual reviews Codex cannot safely resolve and should state when none remain. The normalization plan and keyword artifacts are supporting evidence linked from the three primary documents.

## Acceptance Criteria

- The handoff works across React and Next.js repositories while adapting to local conventions.
- The handoff explicitly rejects a generic site-builder or universal section-renderer approach.
- Route files have a clear, limited responsibility.
- Runtime content ownership is explicit.
- Page-family composition lives in named domain PageViews.
- Reusable sections are extracted only when reuse or clarity is real.
- New page definitions follow consistent metadata and visible-title naming.
- Every intended indexable page has an explicit route-keyed keyword strategy or reviewed exception.
- Keyword strategy, visible coverage, rewrite protection, and dated ranking evidence remain separate layers.
- Keyword coverage can be regenerated without searching pages manually or inserting markers into live copy.
- The handoff supports keep, strengthen, reposition, consolidate, split, test, and retire decisions when new SEO evidence arrives.
- Existing naming is migrated through safe adapters rather than a blind global rename.
- Static content defaults to server rendering.
- Interactive behavior is isolated in focused client components.
- Large content files are split only along meaningful domain boundaries.
- Public routes, metadata, schema, forms, and visible behavior remain stable unless the user explicitly authorizes changes.
- The application remains easy to extend with new custom React components.
- Generated Markdown remains documentation and transfer material, not the runtime source of truth.

## Return Format

- Current structure
- Page-family matrix
- Top inconsistencies
- Naming normalization map
- Page keyword ownership and coverage map
- Search-performance pivot backlog
- Proposed target skeleton
- Phased refactor plan
- Files changed
- Validation results
- Remaining human decisions
