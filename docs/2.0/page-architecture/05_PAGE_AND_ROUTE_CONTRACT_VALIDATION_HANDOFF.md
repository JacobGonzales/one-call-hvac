# Page And Route Contract Validation Handoff 2.0

Run this handoff before optional page scaffolding so the repository has executable contracts against which generated pages can be checked.

## Required Preflight Input

Before auditing or editing, read `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

Also read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown before the first generated-file, test, or application write, then update this handoff's ledger row when work begins and ends.

Confirm that the profile covers the requested scope and is not materially stale. If it is missing, stale, or incomplete for the scope, stop implementation and run or refresh `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`.

The profile's execution mode, execution phase, component preservation matrix, runtime content storage policy, repository conventions, protected areas, validation baseline, and approval gates define which contracts may be introduced. In discovery, report validation gaps without adding tests. In implementation, require approved test and production scopes. Record the mode and phase used, existing tests preserved, approved deviations, and newly discovered profile conflicts in the return.

## Objective

Codex should add or normalize automated validation that detects drift across routes, page definitions, metadata, schemas, keywords, images, sitemap policy, site search, redirects, accessibility structure, and test inventories.

The validation suite should protect architecture contracts without freezing visual creativity or asserting incidental implementation details.

## Validation Layers

Use the smallest appropriate layer for each contract:

1. Pure unit tests for route selectors, lookup helpers, model builders, metadata, schema, and validation functions.
2. Repository contract tests for cross-collection completeness and uniqueness.
3. Component tests for semantic markup and interaction behavior.
4. Build or framework checks for route and server/client integration.
5. Browser or visual checks only when authorized by repository instructions or when a rendered behavior cannot be verified reliably at a lower layer.

Do not use browser automation as the default solution for data-contract validation.

## Route Catalog Integrity

Validate:

- unique route IDs
- unique canonical paths for active pages
- valid paths and normalized slash/case policy
- no active route with contradictory lifecycle fields
- redirect sources differ from destinations
- redirect destinations resolve or are explicitly external
- no redirect loops or chains where the repository forbids them
- retired routes have an approved outcome
- private or draft routes do not enter public route outputs
- indexable routes are not excluded from the sitemap without an approved exception
- noindex routes are not accidentally included in public search discovery outputs

## Route Set Reconciliation

Compare the intended public-route set with relevant consumers:

- framework static and dynamic route sources
- sitemap
- robots or indexing exclusions
- internal site search
- page directories
- keyword strategies
- page-image definitions
- canonical metadata
- repository smoke or route inventory

The test should distinguish:

- required one-to-one coverage
- intentionally sampled coverage
- optional feature coverage
- reviewed exclusions

Do not require every route to appear in a manually curated browser-test list when the test strategy intentionally samples each family.

## Page Definition Contracts

For each intended indexable page, validate where applicable:

- route identity exists
- runtime content record exists
- lookup helper resolves it
- page-family definition is structurally valid
- visible H1 input is present
- metadata title and description inputs are present
- canonical path matches route identity
- keyword strategy exists or has a reviewed exception
- required page image exists or has an approved fallback
- required schema inputs exist
- related links resolve
- freshness dates use valid formats and meaningful ordering

Avoid arbitrary global copy-length rules when the repository has a more specific SEO policy. Test the final metadata produced by the shared builder rather than only testing raw inputs.

## Metadata And Schema Contracts

Validate:

- final title and description policy
- absolute canonical construction
- robots alignment with route policy
- Open Graph and social image fallback behavior
- invalid-slug metadata behavior
- required schema types by page family
- schema URLs match canonical identity
- FAQ, offer, rating, location, and service schema facts match approved runtime inputs
- serialized schema is valid and does not contain undefined or contradictory fields

Do not assert that a schema exists when the page family or visible content does not support it.

## Keyword And Content Coverage Contracts

Validate:

- route-keyed strategy coverage
- primary keyword ownership conflicts
- approved page-specific minimum or maximum use guidance
- distinction between strategy, visible coverage, protected rewrite phrases, and dated performance evidence
- removal of temporary rewrite markers before application content is published
- route changes do not orphan strategy or performance joins

Do not create a universal keyword-density threshold.

## Semantic And Accessibility Contracts

Use static and component tests where reliable to check:

- one intended page H1
- main landmark presence
- labeled controls
- button versus link semantics
- programmatic expanded, selected, invalid, and current states
- keyboard activation for custom interactions
- focus restoration for dialogs where supported by the test environment
- no viewport configuration that disables user scaling

Rendered resize and reflow conformance requires an appropriate viewport and zoom or equivalent narrow-width test. Do not claim full 200/400-percent validation based only on source inspection or a DOM snapshot.

## Scaffold Validation

When a page scaffold exists, test:

- dry-run output
- invalid family and slug rejection
- duplicate route and file rejection
- no silent overwrite
- dynamic-family minimal generation
- unique-page generation
- formatting and type correctness
- deterministic output
- cleanup or temporary-fixture isolation in tests

## Test Design Rules

- Prefer testing exported behavior and generated outcomes over private helper implementation.
- Keep fixtures small and representative.
- Make reviewed exceptions explicit, typed, and documented.
- Include the route or page ID in failure messages.
- Report all missing contracts in one run when practical instead of failing after the first page.
- Avoid snapshotting entire pages when focused assertions communicate the contract better.
- Keep route discovery deterministic.
- Do not fetch live third-party services in ordinary contract tests.

## Rollout Process

1. Inventory current tests and duplicated route lists.
2. Define the intended route and page-family contract matrices.
3. Add pure validators with actionable errors.
4. Add tests around existing behavior before migrating consumers.
5. Introduce reviewed exception structures.
6. Reconcile one page family at a time.
7. Run targeted tests and lint while iterating.
8. Run the broader route, metadata, SEO, and build checks required by the repository.
9. Report untested rendered behaviors honestly.

## Required Outputs

Write:

- `docs/v2-generated-docs/page-architecture/05_PAGE_ROUTE_CONTRACT_REPORT.md`
- `docs/v2-generated-docs/page-architecture/05_PAGE_ROUTE_CONTRACT_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/05_PAGE_ROUTE_CONTRACT_HUMAN_TODO.md`
- `docs/v2-generated-docs/page-architecture/PAGE_ROUTE_COVERAGE_MATRIX.csv`
- `docs/v2-generated-docs/page-architecture/PAGE_ROUTE_REVIEWED_EXCEPTIONS.md`

The first three files are required in discovery and implementation. Coverage and exception files are supporting evidence. A discovery summary must state that validation gaps were reported without adding or changing tests.

## Acceptance Criteria

- Route and page drift produces actionable test failures.
- Public route sets reconcile with sitemap, indexing, search, keyword, image, and test policies.
- Indexable pages satisfy metadata and page-family contracts or have reviewed exceptions.
- Redirect, canonical, and lifecycle contradictions are detected.
- Accessibility tests enforce semantics without pretending static inspection proves visual reflow.
- Tests do not lock pages to one visual composition.
- New routes and pages cannot silently bypass the normalized workflow.

## Return Format

- Existing validation map
- Missing contracts
- Validators and tests added
- Route and family coverage
- Reviewed exceptions
- Commands run and results
- Rendered behaviors not tested
- Remaining human decisions
