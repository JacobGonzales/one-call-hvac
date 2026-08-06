# Codex V2 Suite Ledger Handoff 2.0

## Objective

Codex should initialize, audit, and maintain one cumulative ledger for every source document in the v2 system.

The ledger tracks the main numbered SEO handoffs, fractional handoffs, support preparation, page architecture, and content rewriting. It prevents steps from being skipped, run out of order, falsely marked complete, or disconnected from their reports and user actions.

This handoff does not execute the other handoffs. It inventories them and records their state.

## Required Shared Contract

Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` before writing ledger files.

Provide the required pre-execution rundown before creating or changing the ledger.

## Required Generated Files

Create or update:

- `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`
- `docs/v2-generated-docs/V2_SUITE_LEDGER_REPORT.md`
- `docs/v2-generated-docs/V2_SUITE_LEDGER_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/V2_SUITE_LEDGER_HUMAN_TODO.md`

The run ledger is the cumulative state tracker. The other three files satisfy the v2 report, implementation-summary, and human-TODO contract for this ledger handoff.

## Required Source Inventory

Inventory source documents under:

```text
docs/2.0/
docs/2.0/support/
docs/2.0/page-architecture/
docs/2.0/content-rewriting/
```

Include:

- main handoffs `01` through `17`
- fractional main handoffs such as `14.5`, `15.5`, and `15.6`
- executable support handoffs
- reference and backlog support documents
- page-architecture steps `00` through `06`
- content-rewriting steps `01` through `05`

Exclude generated files under `docs/v2-generated-docs/` from the source-step inventory.

Record top-level suite control documents such as this ledger handoff and the shared execution contract in a separate `Suite Controls` section rather than pretending they are SEO implementation steps.

## Step Classification

Classify each source document as one of:

- required
- conditional
- optional
- reference
- external handoff
- suite control

Classification must come from the handoff's instructions and current repository needs. Do not mark a conditional step required merely because its source file exists.

Examples:

- AMP discovery may be conditional when the repository has no AMP surface.
- Search Console or Analytics support inputs may be conditional on available exports.
- InHouse rewriting is an external handoff within a larger required rewrite workflow.
- notes and backlog files may be reference-only.
- page scaffolding is optional unless explicitly approved.

## Step Statuses

Use only:

- `not_started`
- `in_progress`
- `audited`
- `awaiting_approval`
- `approved`
- `implemented`
- `validated`
- `waiting_external_input`
- `skipped_not_applicable`
- `blocked`

Do not use `complete` as a vague catch-all. For implementation handoffs, `validated` is the terminal success state. For discovery-only steps, `audited` or `awaiting_approval` may be the correct state. For reference documents, record `reference` in classification and use `skipped_not_applicable` only when a run explicitly reviewed and excluded them.

## Ledger Header

Record:

- repository name and root
- generated or refreshed date and timezone
- current branch and commit when available
- dirty or clean working-tree state
- suite version
- requested run scope
- current overall phase
- ledger maintainer instructions
- known source inventory gaps

Do not record secrets or sensitive environment values.

## Ledger Table

Use at least:

| Area | Step | Source handoff | Classification | Phase | Status | Dependencies | Pre-execution rundown | Detailed report | Implementation summary | Human TODO | Additional outputs | Validation | Human actions | Last updated |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Use repository-relative paths for source and generated files.

The ledger may contain separate tables per area when that is easier to read, but field meanings must remain consistent.

## Three-Document Reconciliation

For every executable handoff:

- identify its detailed-report path
- identify its implementation-summary path
- identify its human or owner TODO path
- flag missing members of the trio
- link additional evidence without treating it as a replacement for the trio

When an older handoff declares only two of the three, record the missing contract in the ledger report and assign the stable fallback path required by `V2_SUITE_SHARED_EXECUTION_CONTRACT.md`.

Do not silently rename an existing output that another handoff consumes. Use adapters or record both paths during a migration.

## Dependency And Order Rules

- Preserve the main suite's numeric and fractional order unless a handoff documents a dependency exception.
- Run support preparation before the dependent main handoff.
- Run page-architecture preflight before any page-architecture implementation.
- Run page-architecture validation before optional scaffolding.
- Run content rewriting only after the required main v2 SEO work for the affected pages is complete.
- Do not mark a dependent step ready when a required predecessor is blocked.
- Do not require unrelated optional steps to unblock a scoped run.

## Update Protocol

Before a step begins:

1. verify the row and dependencies
2. confirm phase and authorization
3. confirm the pre-execution rundown was delivered
4. set `in_progress`
5. append a timestamped history entry

After a step ends:

1. verify actual outputs and code changes
2. record validation performed and skipped
3. record the three primary output paths
4. count or summarize remaining human actions
5. set the evidence-supported status
6. append a timestamped history entry

Never replace the entire ledger in a way that erases prior state. Update current rows and append history.

## History Section

Append entries containing:

- date and timezone
- step
- prior status
- new status
- phase
- output paths added or updated
- code or documentation scope changed
- validation result
- human approval or input state
- concise reason

## Audit Mode

When refreshing an existing ledger:

- compare the source inventory with ledger rows
- detect renamed, new, or removed handoffs
- detect output paths that no longer exist
- detect contradictory statuses and reports
- detect steps marked validated without validation evidence
- detect implementation summaries claiming changes absent from the repository state when that can be established safely
- preserve historical entries

Do not downgrade or upgrade status solely from file timestamps.

## Human TODO Rules

`V2_SUITE_LEDGER_HUMAN_TODO.md` should contain only suite-level actions such as:

- approve a blocked phase transition
- provide an external export needed by several steps
- decide whether a conditional handoff applies
- resolve conflicting source ownership
- choose the next batch

Handoff-specific human work remains in that handoff's own TODO. Link it from the ledger rather than duplicating every item.

## Acceptance Criteria

- Every v2 source document appears in the appropriate inventory or suite-control section.
- Executable, conditional, reference, and external steps are distinguishable.
- Every executable step has three primary output paths or a flagged missing contract.
- Dependencies and current phases are visible.
- Status reflects evidence rather than file presence.
- Pre-execution rundown state is recorded.
- Historical state is preserved.
- The ledger never becomes application runtime configuration.
- The required ledger report, implementation summary, and human TODO exist.

## Return Format

- Pre-execution rundown delivered
- Ledger path
- Source inventory counts by area and classification
- Missing or conflicting output contracts
- Dependency and order problems
- Status changes made
- Files created or updated
- Validation performed
- Human decisions required

