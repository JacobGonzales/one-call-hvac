# Page Architecture Preflight And Execution Profile Handoff 2.0

## Objective

Codex should inspect the target repository before any page-architecture normalization and classify the run as greenfield, brownfield, or hybrid.

This handoff produces one repository-specific execution profile that every later handoff must read. The profile protects existing work, records the real application source of truth, distinguishes reusable suite guidance from repository conventions, and prevents later steps from imposing example component names, folders, data sources, or visual structures.

The preflight is read-only with respect to application code. It may create or refresh the generated execution profile and related audit documentation, but it must not refactor routes, components, content, metadata, schemas, styling, tests, or configuration.

## Required Suite Controls

Before writing generated files:

1. Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`.
2. Read or initialize `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` through `docs/2.0/00_CODEX_HANDOFF_V2_SUITE_LEDGER.md`.
3. Give the user the required pre-execution rundown.
4. Mark this step `in_progress` in the ledger.

After finishing, update the ledger with the profile, three primary output paths, validation, status, and remaining human actions.

## Required Output

Create or refresh:

```text
docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md
```

Also create or update the required three-document set:

- `docs/v2-generated-docs/page-architecture/00_PREFLIGHT_REPORT.md`
- `docs/v2-generated-docs/page-architecture/00_PREFLIGHT_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/00_PREFLIGHT_HUMAN_TODO.md`

The report contains the evidence and classification analysis. The implementation summary records that the preflight changed generated documentation only and made no application implementation. The human TODO isolates classification, scope, or approval decisions that Codex cannot resolve.

Every later page-architecture handoff must treat this file as required input.

Do not place the profile in application code or import it at runtime. It is a repository-specific AI and developer control document, not application configuration.

## Execution Modes

Choose exactly one mode for the requested scope.

### Greenfield

Use greenfield only when the relevant website or application area is genuinely being created from scratch and has no established production page behavior, content system, component conventions, or visual identity that must be preserved.

Greenfield mode permits Codex to propose initial:

- route and folder conventions
- runtime content ownership
- page-family naming
- layout and PageView boundaries
- metadata and schema helpers
- accessibility contracts
- contract tests
- optional scaffolding after patterns are proven

Greenfield does not authorize speculative abstraction, a generic site builder, a database, a CMS, a visual design, public claims, or large sets of hypothetical components.

### Brownfield

Use brownfield when the relevant scope already contains pages, content, routes, components, styling, metadata, integrations, or production behavior.

The brownfield default is:

> Preserve first. Normalize only when evidence identifies a real structural, accessibility, performance, validation, or maintenance problem.

Brownfield mode requires Codex to:

- inventory before editing
- preserve existing visual identity and content
- retain clear existing names even when they differ from suite examples
- reuse or adapt existing components before creating replacements
- introduce compatibility adapters before risky public renames
- refactor incrementally by page family or responsibility
- separate architecture normalization from content rewriting and redesign
- validate behavior before removing old structures

### Hybrid

Use hybrid when a repository has established architecture and design, but the requested scope adds a new page family, product area, or substantial feature that does not yet have an existing implementation.

Hybrid mode requires Codex to:

- preserve established page families and shared systems
- follow working repository conventions in the new area
- apply improved contracts to new work without forcing an immediate whole-repo migration
- use adapters where new and existing contracts meet
- document deliberate differences
- migrate older areas only when separately justified and authorized

### Classification Rules

- Existing production behavior defaults to brownfield protection.
- A new route inside an established application does not automatically make the run greenfield.
- A visually unfinished page can still be brownfield when its content, contracts, or behavior already exist.
- Hybrid describes an established repository with a genuinely new scoped area; it is not permission to refactor unrelated families.
- If evidence supports more than one mode, classify the requested scope rather than the whole repository and explain the boundary.
- If the mode remains materially ambiguous and the choice would change what Codex is allowed to replace, stop and request user direction.

## Required Preflight Inspection

Read and record evidence from:

1. repository and nested agent instructions
2. framework, language, package, and deployment configuration
3. current route tree and route groups
4. runtime page-content sources and lookup helpers
5. page-family components, PageViews, layouts, and section components
6. global and domain styling systems
7. metadata, canonical, sitemap, robots, schema, and indexing helpers
8. interactive components and client boundaries
9. forms, booking, search, authentication, checkout, or other sensitive flows
10. route, component, SEO, accessibility, and browser-test coverage
11. generated v2 evidence relevant to the requested scope
12. current Git branch or revision when available
13. current working-tree state and unrelated changes that must be preserved
14. the user's requested scope and explicit constraints

Use repository inspection as the authority for current structure. Do not infer architecture from suite examples when the code provides direct evidence.

## Required Execution Profile Structure

The generated profile must use the following major sections.

### 1. Profile Identity

Record:

- repository name and root
- generated date and timezone
- current branch and commit when available
- whether the working tree is clean or dirty
- requested scope
- directories and page families inspected
- relevant repository instruction files
- confidence level and known inspection gaps

Do not copy sensitive environment values, secrets, tokens, customer data, or credentials into the profile.

### 2. Execution Mode Decision

State:

- selected mode
- evidence supporting the mode
- exact scope covered by that mode
- areas excluded from the run
- assumptions
- conditions that would require reclassification

### 2A. Execution Phase And Authorization

Choose exactly one phase:

- `discovery`
- `implementation`

The preflight itself always runs in discovery. It may recommend whether later work is ready for implementation, but it may not authorize implementation on its own.

For later handoffs, record:

- current execution phase
- whether implementation was explicitly authorized
- approved plan path when implementation is authorized
- approved files, page families, routes, or systems
- excluded scope
- migration batch size
- content changes authorized or prohibited
- visual changes authorized or prohibited
- component replacement authority
- required approval checkpoint

When the user requests the suite generally without explicitly authorizing code changes, default later handoffs to discovery.

After discovery reports and the proposed normalization plan are complete, stop for user review before changing the profile to implementation. Do not infer approval from the existence of a plan.

### 3. Repository Architecture Baseline

Summarize:

- route system
- page families
- route-to-content-to-render flow
- runtime content owners
- shared layouts and page frames
- component and section conventions
- metadata and structured-data architecture
- styling and design systems
- server and client component boundaries
- operational data sources and integrations
- validation commands and testing restrictions

### 4. Runtime Content Storage Policy

Explicitly identify:

- where live page copy and facts currently reside
- where metadata inputs reside
- where route and keyword strategy facts reside
- which data is application-owned static content
- which data is operational or externally synchronized
- whether a database or CMS already exists
- whether adding or expanding a database or CMS is authorized
- which generated Markdown files are transfer or audit artifacts only

When the repository uses application-owned TypeScript or TSX content and the user has not authorized a migration, state:

> Live public page content must remain in the repository's established application code. Generated Markdown is not a runtime source. Do not introduce a database or CMS for page content.

Do not assume all data belongs in static files. Appointments, availability, users, payments, submissions, authentication state, or other mutable operational records may already require an approved database or external service. Preserve the existing boundary and document it.

### 5. Component Preservation Matrix

Create a matrix with at least:

| Component or pattern | Current responsibility | Consumers | Existing quality | Decision | Protection | Evidence |
|---|---|---|---|---|---|---|

Allowed decisions:

- keep as-is
- reuse
- extend
- wrap with an adapter
- extract focused shared logic
- consolidate confirmed duplication
- retire after verified migration
- replace only with evidence and approval

The following are not valid replacement reasons:

- the component name differs from this suite
- the folder layout differs from the suite example
- another repository uses a different component
- a generic component could theoretically replace it
- visual styling is unique

### 6. Repository Conventions To Preserve

List the conventions later handoffs must retain, including as applicable:

- existing component vocabulary
- framework-required file names
- route paths and slug policy
- path aliases and import style
- styling system and tokens
- public props and exports
- content-source organization
- design-system primitives
- metadata and schema utilities
- validation and testing conventions
- distinctive page structures or interactions

Examples in the suite such as `SitePageLayout`, `PageView`, `PageDefinition`, or `lib/content/` describe responsibilities. They are not mandatory names.

### 7. Approved Normalization Scope

List changes supported by evidence and the user's request, for example:

- thin oversized route files
- consolidate confirmed duplicated page-family rendering
- normalize ambiguous metadata field meanings through adapters
- add missing route or content contracts
- remove dead props after consumer verification
- reduce unnecessarily broad client boundaries
- add accessibility and reflow protections
- add contract validation

Do not turn audit observations into authorization for unrelated changes.

### 8. Protected And Approval-Required Areas

Identify areas that may not change during the run or require explicit approval, including as applicable:

- public routes, slugs, redirects, and canonicals
- indexability and schema meaning
- approved page copy and business claims
- visual identity and distinctive components
- section order and conversion flow
- forms, booking, checkout, authentication, and submissions
- public component props and exports
- database, CMS, or content-source changes
- analytics semantics
- deployment configuration

### 9. Validation Baseline

Record the available evidence and commands for preserving:

- route resolution
- metadata and canonical behavior
- structured data
- runtime content completeness
- component semantics
- interactive behavior
- accessibility
- responsive and zoom behavior
- forms and operational workflows
- build and deployment compatibility

Do not claim a behavior is baselined when no relevant check or review was performed.

### 10. Risks, Conflicts, And Human Decisions

Report:

- conflicting conventions
- uncertain content ownership
- ambiguous execution mode boundaries
- missing tests
- generated evidence that disagrees with runtime code
- areas where visual review is required
- choices that would materially change the user's architecture

## Preservation Decision Rules

Later normalization should use this preference order:

1. Keep a working existing component or convention.
2. Reuse it for an equivalent responsibility.
3. Extend it when the extension remains coherent.
4. Add a focused adapter when contracts differ.
5. Extract shared logic when duplication is confirmed.
6. Consolidate components only when their responsibilities and behavior actually match.
7. Replace only when the existing implementation is unsafe, unmaintainable, materially incompatible, or explicitly approved for redesign.

Do not measure architectural quality by how closely the repository resembles the Mountain West website or another reference repository.

## Staleness Rules

Treat the execution profile as materially stale when:

- the route system or route inventory changed substantially
- a major page family was added, removed, or redesigned
- runtime content ownership changed
- a database or CMS was introduced or removed
- the design system or framework changed materially
- the requested scope was not inspected by the profile
- the current repository state no longer matches the recorded baseline
- later inspection finds a conflict that would change preservation or authorization rules

Minor code edits do not automatically require full preflight regeneration. Update the affected profile sections when the change alters a recorded decision.

Do not silently overwrite unresolved human decisions during a refresh. Preserve their status and record what changed.

## Contract For Later Handoffs

Every later handoff must:

1. read the execution profile before auditing or editing
2. confirm that it covers the requested scope and is not materially stale
3. state the selected execution mode in its report
4. confirm discovery or implementation phase and its authorization
5. provide the pre-execution rundown required by the shared v2 contract
6. use repository conventions instead of copying suite example names
7. follow the component preservation matrix
8. preserve the runtime content storage policy
9. stop for approval where the profile requires it
10. report any newly discovered conflict or staleness
11. list existing components and conventions preserved
12. distinguish approved deviations from accidental drift
13. create the required report, implementation summary, and human TODO
14. update the v2 suite ledger

If the profile is missing, materially stale, or does not cover the requested scope, stop architecture implementation and run or refresh this preflight.

## Stop Conditions

Stop and request direction before finalizing the profile when:

- the requested scope cannot be determined
- greenfield versus brownfield classification changes replacement authority
- two active sources both appear authoritative for the same live content
- a database or CMS migration appears necessary but was not authorized
- repository instructions conflict with the requested workflow
- the working tree contains overlapping changes that make the baseline unreliable
- the only way to proceed requires changing public behavior outside the user's scope

## Acceptance Criteria

- Exactly one execution mode is selected for a clearly defined scope.
- The discovery or implementation phase and authorization state are explicit.
- The mode is supported by repository evidence.
- Existing work receives explicit preservation decisions.
- Runtime content ownership and database or CMS authorization are unambiguous.
- Suite examples cannot override working repository conventions.
- Later handoffs have concrete allowed, prohibited, and approval-required boundaries.
- Validation capabilities and gaps are reported honestly.
- The profile contains no secrets or runtime imports.
- No application behavior changes during preflight.
- The pre-execution rundown and three-document output contract are satisfied.
- The v2 suite ledger is updated without losing history.

## Return Format

- Profile path
- Execution mode and scope
- Execution phase and authorization
- Repository architecture baseline
- Runtime content policy
- Component preservation summary
- Approved normalization scope
- Protected and approval-required areas
- Validation baseline
- Staleness conditions
- Human decisions required
- Files created or updated
- Ledger status and outputs
