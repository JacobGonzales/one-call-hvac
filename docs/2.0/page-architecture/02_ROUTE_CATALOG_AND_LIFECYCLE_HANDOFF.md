# Route Catalog And Lifecycle Handoff 2.0

## Required Preflight Input

Before auditing or editing, read `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

Also read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown before the first generated-file or application write, then update this handoff's ledger row when work begins and ends.

Confirm that the profile covers the requested scope and is not materially stale. If it is missing, stale, or incomplete for the scope, stop implementation and run or refresh `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`.

The profile's execution mode, execution phase, component preservation matrix, runtime content storage policy, repository conventions, protected areas, and approval gates override example names and folder structures in this handoff. In discovery, inspect and report without changing route behavior or application code. In implementation, require an approved plan and scoped authorization. Record the mode and phase used, existing structures preserved, approved deviations, and newly discovered profile conflicts in the return.

## Objective

Codex should inspect the repository and establish one typed, application-owned catalog for stable route identity and policy facts.

The catalog must reduce drift between routing, sitemap generation, canonical URLs, indexing policy, internal site search, page images, keyword ownership, redirects, and test inventories. It must not become a generic page renderer or a second copy of page content.

## Operating Principles

1. The framework route tree remains responsible for resolving requests.
2. Runtime content collections remain responsible for publishable page content.
3. The route catalog owns or derives stable cross-cutting route facts.
4. Dynamic route instances should be derived from content collections whenever practical.
5. A route fact should have one owner and many consumers.
6. Existing public paths, redirects, canonicals, and indexability must remain stable unless the user explicitly authorizes a change.

## Required Audit

Before editing, inspect:

- framework route files and dynamic route patterns
- runtime content collections and slug lookup helpers
- sitemap and robots implementations
- canonical and metadata helpers
- internal site-search entries
- navigation and directory entries
- page-image maps
- keyword-strategy maps
- indexing exclusion lists
- redirect configuration
- route inventories and smoke-test fixtures
- schema or breadcrumb helpers containing paths

Create a route-fact duplication matrix:

| Route fact | Current owners | Current consumers | Drift risk | Proposed owner |
|---|---|---|---|---|

Do not assume every repeated path is a defect. A test fixture may intentionally preserve a small reviewed sample. Identify whether the duplicated value is authoritative, derived, or test evidence before consolidating it.

## Target Route Model

Adapt the names to the repository. Prefer a small discriminated model over a single object containing contradictory booleans.

```ts
export type PageFamily =
  | "home"
  | "service"
  | "location"
  | "location-service"
  | "about"
  | "blog"
  | "deal"
  | "contact"
  | "booking"
  | "legal";

export type ActiveRouteDefinition = {
  id: string;
  path: string;
  family: PageFamily;
  lifecycle: "active";
  visibility: "public" | "private";
  indexability: "index" | "noindex";
  sitemap: "include" | "exclude";
  siteSearch: "include" | "exclude";
  keywordStrategyId?: string;
  imageKey?: string;
  testProfile: "core" | "sampled" | "contract-only";
};

export type RedirectRouteDefinition = {
  id: string;
  path: string;
  family: PageFamily;
  lifecycle: "redirect";
  destination: string;
  permanent: boolean;
};

export type RetiredRouteDefinition = {
  id: string;
  path: string;
  family: PageFamily;
  lifecycle: "retired";
  replacementPath?: string;
};

export type RouteDefinition =
  | ActiveRouteDefinition
  | RedirectRouteDefinition
  | RetiredRouteDefinition;
```

This is an example contract, not a requirement to copy these exact fields. Do not store mutable performance metrics, full metadata copy, section order, visible body content, or component names in the route catalog.

## Static And Dynamic Routes

For static routes, define the route directly.

For dynamic families, prefer an adapter that maps the existing runtime collection into route definitions:

```ts
export const SERVICE_ROUTES = SERVICE_PAGES.map((page) =>
  defineActiveRoute({
    id: `service:${page.slug}`,
    path: page.path,
    family: "service",
    indexability: "index",
    sitemap: "include",
    siteSearch: "include",
    keywordStrategyId: page.path,
    imageKey: page.path,
    testProfile: "sampled",
  }),
);
```

Do not manually reproduce every service, location, article, or deal path in several arrays. Preserve explicit exceptions close to the family adapter and explain why they differ.

## Canonical And Lifecycle Rules

- Each active indexable route must have exactly one canonical path.
- A canonical is not a substitute for a redirect when an old URL should stop resolving independently.
- Redirect routes must identify one destination and permanence policy.
- Retired routes must have an explicit outcome: replacement, reviewed not-found behavior, or another approved policy.
- Draft and private routes must not enter public sitemap or site-search outputs.
- Noindex pages require an explicit reviewed reason.
- Query parameters and alternate presentation URLs must follow a documented canonical policy.
- Case, trailing slash, and locale behavior must match the framework and deployment configuration.

## Allowed Derived Consumers

Use the catalog, family adapters, or validated selectors to support:

- sitemap route enumeration
- public route inventory
- indexing audit inputs
- internal site-search inclusion
- page-image coverage checks
- keyword-strategy coverage checks
- canonical uniqueness checks
- redirect integrity checks
- representative test sampling
- generated route documentation

Navigation labels, breadcrumb labels, and visible link wording may require page content. Do not force human-facing content into the catalog merely because it contains a path.

## Avoid A Mega Registry

Keep the catalog focused on route identity and policy.

Do not make it own:

- all metadata titles and descriptions
- hero copy
- full schemas
- page sections
- React component references
- detailed analytics payloads
- changing rank data
- every internal link on the site

Use domain collections and focused helpers, then reconcile them through stable route IDs or canonical paths.

## Implementation Phases

1. Inventory route facts without changing runtime behavior.
2. Define the smallest useful route types.
3. Add static-route definitions and dynamic-family adapters.
4. Add uniqueness and contradictory-policy tests.
5. Migrate one low-risk consumer at a time.
6. Compare generated sitemap, search, and route sets before and after each migration.
7. Remove an old registry only after no runtime or test consumer depends on it.
8. Document reviewed exceptions.

## Required Outputs

Write:

- `docs/v2-generated-docs/page-architecture/02_ROUTE_CATALOG_REPORT.md`
- `docs/v2-generated-docs/page-architecture/02_ROUTE_CATALOG_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/02_ROUTE_CATALOG_HUMAN_TODO.md`
- `docs/v2-generated-docs/page-architecture/ROUTE_POLICY_MATRIX.csv`
- `docs/v2-generated-docs/page-architecture/ROUTE_CATALOG_IMPLEMENTATION_PLAN.md`

The first three files are required in discovery and implementation. Supporting matrices and plans must be linked from them. A discovery summary must state that no route implementation occurred.

## Acceptance Criteria

- Stable route facts have one discoverable owner.
- Dynamic route instances derive from approved runtime collections where practical.
- Active, redirect, retired, public, private, index, and noindex states cannot silently contradict one another.
- Sitemap, site search, canonical, keyword, image, and test coverage can reconcile against the route catalog.
- Public URL behavior remains unchanged unless explicitly approved.
- The catalog contains no page-body rendering configuration.
- The implementation remains easy for a beginner to trace from route definition to consumer.

## Return Format

- Current route-fact owners
- Duplication and drift risks
- Proposed route model
- Static and dynamic family adapters
- Consumer migration order
- Files changed
- Validation results
- Reviewed exceptions
- Remaining human decisions
