# Page Scaffolding Handoff 2.0

This optional handoff runs after the page and route contracts have been validated. Do not automate page creation until the repository-specific execution profile and contract tests establish what generated output must preserve.

## Required Preflight Input

Before auditing or editing, read `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

Also read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown before the first generated-file, script, or application write, then update this handoff's ledger row when work begins and ends.

Confirm that the profile covers the requested scope and is not materially stale. If it is missing, stale, or incomplete for the scope, stop implementation and run or refresh `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`.

The profile's execution mode, execution phase, component preservation matrix, runtime content storage policy, repository conventions, protected areas, validation baseline, and approval gates determine what the scaffold may generate. Scaffolding requires explicit implementation authorization and must not run in discovery. Record the mode and phase used, existing generator or conventions preserved, approved deviations, and newly discovered profile conflicts in the return.

## Objective

Codex should design or implement an optional development-time page scaffold that creates the predictable starting files and registrations for a new page without controlling runtime rendering.

The scaffold is a code-generation convenience. It is not a CMS, generic site builder, universal section renderer, or replacement for normal React development.

## When A Scaffold Is Justified

Create a scaffold only when:

- new pages regularly require the same group of files or registrations
- at least two page families share a stable creation workflow
- developers or AI agents repeatedly forget metadata, route, strategy, or test setup
- generation removes mechanical work without hiding application behavior

Do not create a scaffold merely to generate one file or to make the architecture appear more advanced.

## Required Discovery

Before designing templates, inspect:

- framework version and route conventions
- existing generators or scripts
- page-family folders and naming
- runtime content sources
- route catalog conventions
- metadata and schema builders
- keyword-strategy ownership
- component and test conventions
- package-manager and script conventions
- path aliases

Use existing repository patterns. Do not introduce another templating package when a small maintained script using current dependencies is sufficient.

## Scaffold Inputs

Keep inputs explicit and validated. A reusable command might conceptually accept:

```text
page family
route path or slug
stable page ID
display name
indexability intent
content-source location
whether a new PageView is required
test profile
```

Example interface only:

```text
npm run create:page -- --family=service --slug=sewer-camera-inspection
```

Do not add this exact command unless it fits the repository.

Reject unsafe paths, duplicate route IDs, duplicate canonical paths, invalid slugs, unknown families, and output locations outside the repository's approved structure.

## Generated Starting Points

Depending on the page family, the scaffold may create or update:

- framework route entry point
- domain PageView skeleton
- runtime content definition
- content collection export or lookup registration
- route catalog entry or family-derived content record
- keyword-strategy entry
- metadata and schema connection
- component or contract test skeleton
- route inventory fixture only when it is not derived automatically

Do not generate every item for every page. Dynamic families may require only a new content record because their route and PageView already exist.

## Unique Pages Versus Dynamic Families

### Unique page

A unique page may need:

- a route file
- an explicit PageView
- one or more custom sections
- runtime content inputs
- route and keyword registration
- focused tests

### Existing dynamic family

An existing family should normally need:

- a validated content record
- derived route registration
- keyword strategy
- any family-required image or schema input
- contract coverage

Do not generate a new route file or duplicate PageView for every dynamic content record.

## Safety Requirements

- Provide a dry-run mode that lists planned files and registrations.
- Never overwrite an existing file silently.
- Fail before partial writes when validation detects a conflict.
- If partial writes can occur, report exactly what changed and how to recover.
- Format generated code with the repository's formatter.
- Keep generated TypeScript strict and beginner-readable.
- Use direct imports consistent with the repository; do not create broad barrel files solely for the generator.
- Do not modify redirects, public URLs, or existing page content without explicit input.
- Do not generate placeholder claims, prices, guarantees, reviews, locations, or schema facts.

## Template Rules

Templates should contain the minimum useful structure.

Good PageView output:

```tsx
export function ServicePageView({ model }: ServicePageViewProps) {
  return (
    <SitePageLayout breadcrumbs={model.breadcrumbs}>
      <ServiceHeroSection content={model.hero} />
      {/* Add page-family sections explicitly. */}
    </SitePageLayout>
  );
}
```

Avoid generated switch statements, universal section arrays, placeholder component registries, and abstractions without a second real use.

## Workflow

1. Audit repeated new-page work.
2. Separate family-specific inputs from universal inputs.
3. Design a dry-run manifest.
4. Implement validation before writes.
5. Create the smallest templates.
6. Add conflict, invalid-input, and successful-generation tests.
7. Run the scaffold in a temporary test fixture.
8. Confirm generated output passes focused type, lint, and contract checks.
9. Document how to add a page manually when the scaffold does not fit.

## Required Outputs

Write in every authorized run:

- `docs/v2-generated-docs/page-architecture/06_PAGE_SCAFFOLD_REPORT.md`
- `docs/v2-generated-docs/page-architecture/06_PAGE_SCAFFOLD_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/06_PAGE_SCAFFOLD_HUMAN_TODO.md`
- `docs/v2-generated-docs/page-architecture/PAGE_SCAFFOLD_PLAN.md`
- `docs/v2-generated-docs/page-architecture/PAGE_SCAFFOLD_TEMPLATE_MATRIX.md`

When implementation is authorized, keep generator code in the repository's established tooling or scripts area and update its normal developer documentation.

The first three files are the required primary outputs. The plan and template matrix are supporting evidence. Because scaffolding cannot run in discovery, a planning-only request should stop after the report set and leave the implementation summary explicit that no scaffold was implemented.

## Acceptance Criteria

- The scaffold removes repeated setup work without affecting runtime composition.
- Existing dynamic families generate only the records they actually need.
- Dry runs are available and existing files are never silently overwritten.
- Generated pages use the established route, content, metadata, schema, keyword, and test contracts.
- Developers can add custom components and sections immediately after generation.
- Manual page creation remains understandable without reverse-engineering the generator.

## Return Format

- Repeated work identified
- Scaffold justification
- Input contract
- Files and registrations generated by family
- Safety design
- Files changed
- Validation results
- Manual fallback workflow
- Remaining human decisions
