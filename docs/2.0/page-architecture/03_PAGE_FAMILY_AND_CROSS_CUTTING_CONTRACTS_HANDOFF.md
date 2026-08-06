# Page Family And Cross-Cutting Contracts Handoff 2.0

## Required Preflight Input

Before auditing or editing, read `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

Also read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown before the first generated-file or application write, then update this handoff's ledger row when work begins and ends.

Confirm that the profile covers the requested scope and is not materially stale. If it is missing, stale, or incomplete for the scope, stop implementation and run or refresh `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`.

The profile's execution mode, execution phase, component preservation matrix, runtime content storage policy, repository conventions, protected areas, and approval gates override example names and folder structures in this handoff. In discovery, inspect and report without reorganizing application code. In implementation, require an approved plan and scoped authorization. Record the mode and phase used, existing structures preserved, approved deviations, and newly discovered profile conflicts in the return.

## Objective

Codex should normalize the responsibilities and naming shared by page families while preserving explicit React composition and custom frontend design.

The result should make every page family answer the same architectural questions without forcing every page to use the same body schema or section order.

## Required Page-Family Questions

For every family, identify:

1. Which route pattern resolves the page?
2. Which runtime source owns its content?
3. Which helper retrieves content by slug or path?
4. Which builder derives the render-ready page model?
5. Which PageView owns the section order?
6. Which helper creates final metadata?
7. Which schemas are required and who builds them?
8. How are breadcrumbs and related links produced?
9. What happens for an invalid or unpublished slug?
10. Which keyword strategy and route identity belong to the page?
11. Which tests prove the contract?

Produce a page-family matrix before refactoring.

## Naming Contract

Prefer one vocabulary across domains:

```text
getServicePage()
buildServicePageModel()
buildServicePageMetadata()
buildServicePageSchemas()
ServicePageView
ServicePageDefinition
```

Use the same responsibility names for other families. Existing public exports may be preserved through adapters. Do not perform a blind repository-wide rename.

Recommended suffix meanings:

- `Definition`: application-owned publishable inputs
- `Model`: derived, render-ready data
- `PageView`: explicit family composition
- `Section`: one visible or semantic page subject
- `Layout`: shared outer shell
- `build*Metadata`: final framework metadata preparation
- `build*Schemas`: structured-data construction
- `get*Page`: lookup or retrieval

## Shared Identity And Content Envelope

Use a small shared outer contract only where it improves consistency:

```ts
export interface PageIdentity {
  id: string;
  path: string;
  family: PageFamily;
  slug?: string;
}

export interface PageSeoInput {
  title: string;
  description: string;
  imagePath?: string;
}

export interface PageHeroInput {
  eyebrow?: string;
  title: string;
  description: string;
}

export interface PageDefinition<TBody> {
  identity: PageIdentity;
  seo: PageSeoInput;
  hero: PageHeroInput;
  body: TBody;
  faqs?: readonly FaqItem[];
  lastReviewed?: string;
}
```

Do not make `TBody` universal. Service, location, blog, deal, About, home, contact, and booking bodies may remain materially different.

## Metadata Contract

- Page content owns page-specific metadata inputs.
- One shared builder owns global title formatting, canonical construction, robots, social metadata, and fallbacks.
- Final metadata must use the canonical route identity.
- Meta title, visible H1, card title, and navigation label must have distinct fields when they differ.
- Do not create a second global copy of every page title and description.
- Invalid dynamic slugs must not accidentally receive indexable fallback metadata.

## Structured-Data Contract

Define required schema builders by page family.

Examples:

```ts
const schemas = buildServicePageSchemas(model);
const schemas = buildLocationPageSchemas(model);
const schemas = buildBlogArticleSchemas(model);
```

Schema facts must match visible, approved runtime facts. Keep schema assembly out of large route components. Do not infer prices, ratings, guarantees, availability, or business claims that the visible page and approved data do not support.

## Breadcrumb And Internal-Link Contract

- Use route identity as the path source.
- Use application content as the human-facing label source.
- Derive ordinary family hierarchy where the relationship is stable.
- Allow explicit overrides for unique pages.
- Keep related links typed and validate that destinations resolve.
- Do not create links merely to satisfy a count.
- Prevent a route from linking to itself as a related destination unless the interaction intentionally requires it.

## Page Image Contract

Normalize the data required for page and social images:

```ts
export interface PageImageDefinition {
  path: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  socialImagePath?: string;
}
```

One image may support several uses, but alt text and decorative behavior must be decided at the render location. Validate missing files and dimensions where the repository already has asset tooling.

## Action And Analytics Contracts

Actions should describe intent without prescribing visual styling:

```ts
export interface PageAction {
  id: string;
  label: string;
  href: string;
  intent: "book" | "quote" | "call" | "message" | "learn";
  analyticsEvent: string;
}
```

A PageView may render the same action as a button, card, text link, or mobile sticky action when semantics permit.

Normalize analytics event names and required properties for important actions such as:

- phone and message activation
- quote or booking start
- slot selection
- form submission success or failure
- FAQ expansion when intentionally tracked
- internal site-search use

Do not place third-party analytics logic throughout presentational sections. Use the repository's focused event helper and load nonessential analytics after the critical page path where practical.

## Freshness And Provenance

Use dates only when they have real meaning:

- `publishedAt` for publication
- `updatedAt` for a substantive published update
- `lastReviewed` for a documented accuracy review

Do not update dates automatically merely because formatting or code organization changed. Where claims depend on external facts, preserve the source or review note in the appropriate documentation or content workflow without exposing internal notes as public copy.

## Server Data And Client Boundaries

- Default PageViews and static sections to server components.
- Start independent server work early and await it in parallel where possible.
- Deduplicate repeated server retrieval using the repository's established cache strategy.
- Pass only required serializable fields into client islands.
- Keep forms, schedulers, accordions, filters, and browser APIs in focused client components.
- Do not make an entire content-heavy page a client component because one nested interaction requires state.

## Boolean And Variant Policy

Avoid prop combinations that can represent impossible states.

Prefer configuration presence or discriminated variants:

```tsx
<SitePageLayout booking={bookingConfig} />
```

instead of separate `showBooking`, `bookingContext`, and `bookingHeading` props that can disagree.

Keep visual variants small, named, and meaningful. Do not encode every future design possibility into a shared component API.

## Required Outputs

Write:

- `docs/v2-generated-docs/page-architecture/03_PAGE_FAMILY_CONTRACTS_REPORT.md`
- `docs/v2-generated-docs/page-architecture/03_PAGE_FAMILY_CONTRACTS_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/03_PAGE_FAMILY_CONTRACTS_HUMAN_TODO.md`
- `docs/v2-generated-docs/page-architecture/PAGE_FAMILY_CONTRACT_MATRIX.md`
- `docs/v2-generated-docs/page-architecture/NAMING_ADAPTER_PLAN.md`

The first three files are required in discovery and implementation. The matrix and adapter plan are supporting evidence. A discovery summary must state that no application reorganization occurred.

## Acceptance Criteria

- Every family has a documented route-to-render responsibility chain.
- Equivalent responsibilities use consistent names or documented adapters.
- Metadata, schemas, breadcrumbs, images, actions, and analytics have clear owners.
- No cross-cutting registry duplicates full page content.
- Static content stays server-rendered unless interaction requires otherwise.
- PageViews retain explicit JSX and unrestricted custom section composition.
- Public behavior and approved content remain stable during normalization.

## Return Format

- Page-family matrix
- Naming inconsistencies
- Proposed contracts and adapters
- Cross-cutting ownership map
- Performance and client-boundary findings
- Files changed
- Validation results
- Remaining human decisions
