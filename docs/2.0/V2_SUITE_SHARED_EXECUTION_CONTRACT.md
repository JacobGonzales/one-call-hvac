# V2 Suite Shared Execution Contract

## Purpose

This contract applies to every executable handoff under `docs/2.0/`, including the main numbered SEO suite, support preparation, page architecture, and content rewriting.

Reference-only documents should appear in the suite ledger but do not need implementation outputs unless a task explicitly executes them as a work step.

Repository instructions and the user's current request remain authoritative. A domain handoff may add stricter requirements but may not silently weaken this contract.

## Required Pre-Execution Rundown

Before the first file write, code change, generated report, external mutation, or implementation command for a handoff, Codex must tell the user what it is about to do.

The rundown must be concise and include:

- current structure or evidence already found
- intended scope
- files, page families, systems, or generated outputs likely to change
- important behavior and existing work that will be preserved
- top risks, assumptions, or blockers
- validation planned
- whether the run is discovery-only or implementation-authorized

Sending the rundown is mandatory. It is not automatically an approval request. Codex may continue after providing it when the user's request already authorizes the work and no handoff, execution profile, repository rule, or safety boundary requires explicit approval.

Codex must pause for explicit approval when:

- a discovery phase is being promoted to implementation
- a page-architecture execution profile requires approval
- the proposed work changes protected routes, content, public claims, schema meaning, indexability, visual identity, operational workflows, or data ownership
- the requested authority is ambiguous and the choice would materially change the result

If inspection materially changes the plan, provide an updated rundown before beginning the changed implementation scope.

## Discovery And Implementation Authority

Each executable handoff must identify its current phase:

```text
discovery
implementation
```

When the user asks to audit, assess, review, plan, inspect, or run a preflight, use discovery unless implementation was also clearly authorized.

Discovery may inspect, analyze, generate reports, and propose a plan. It must not silently become authorization to refactor application code or publish external changes.

Implementation requires:

- an identified scope
- a pre-execution rundown
- authorization from the user's request or an approved plan
- preservation of unrelated work
- validation proportional to risk

Page architecture adds a stricter discovery-to-implementation gate through its repository execution profile.

## Required Three-Document Output Contract

Every executable v2 handoff must create or update exactly one primary document in each category:

1. Detailed report
2. Implementation summary
3. Human TODO

Additional matrices, CSV files, inventories, briefs, evidence files, or per-page packages are allowed and should be linked from the three primary documents.

For a repeated per-page or batched workflow, the workflow may maintain one cumulative three-document set instead of creating a new trio for every page. Each step and route must update that cumulative set and link its own per-page artifacts. The workflow README or handoff must declare the cumulative paths explicitly.

### 1. Detailed Report

The detailed report explains:

- scope and inputs inspected
- current-state evidence
- findings and decisions
- implementation or recommendation details
- exceptions and unresolved risks
- validation evidence
- links to supporting artifacts

In a discovery-only run, the report contains findings and the proposed plan. It must not imply that recommendations were implemented.

### 2. Implementation Summary

The implementation summary is the concise record of what Codex actually did.

It must include:

- phase used
- pre-execution rundown delivered
- files created, modified, moved, or intentionally left unchanged
- runtime behavior changed or preserved
- validation commands and results
- skipped validation and why
- approved deviations
- completion status

For a discovery-only or external-input handoff, explicitly state that no application implementation occurred. Do not omit the summary merely because no code changed.

### 3. Human TODO

The human TODO contains only work the user or another human must perform, decide, verify, provide, or approve.

Each item should include:

- action
- reason
- affected scope
- priority
- blocking or nonblocking status
- evidence or related output
- completion condition

Do not place work Codex can safely complete in the human TODO. When no human action remains, still create the file and state clearly that no human action is currently required.

### Naming

Use the exact paths declared by the handoff when they exist. Preserve established `OWNER_TODO` names as equivalent to `HUMAN_TODO` for older main-suite handoffs.

When an executable handoff does not declare all three paths, define a stable handoff-specific stem in its implementation report and suite-ledger row, then use:

```text
[STEM]_REPORT.md
[STEM]_IMPLEMENTATION_SUMMARY.md
[STEM]_HUMAN_TODO.md
```

Do not reuse another handoff's summary or TODO as a shortcut. Do not overwrite another handoff's outputs.

## Suite Ledger Contract

The canonical generated ledger is:

```text
docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md
```

Before executing a v2 handoff:

1. Read the ledger when it exists.
2. Confirm the handoff row, dependencies, current phase, and prior outputs.
3. If the ledger is missing, run `00_CODEX_HANDOFF_V2_SUITE_LEDGER.md` or initialize it according to that handoff.
4. Mark the step `in_progress` only when work actually begins.

After the handoff:

1. Update only the relevant row and append a history entry.
2. Link the detailed report, implementation summary, human TODO, and additional artifacts.
3. Record validation status and remaining human actions.
4. Do not mark the step complete merely because output files exist.
5. Preserve prior run history.

## Output Integrity

- Generated reports live under `docs/v2-generated-docs/`, never beside source handoffs unless a handoff explicitly defines another generated area.
- Generated Markdown is documentation, audit, or transfer material unless the application intentionally has an approved Markdown content pipeline.
- V2 outputs must not silently become runtime page content.
- Application code and its established runtime content system remain the production source of truth.
- Do not include secrets, private tokens, customer data, or sensitive environment values in reports or the ledger.

## Completion Rule

A handoff is complete only when:

- the requested work is actually complete for its scope
- the three required documents exist and agree
- required supporting artifacts exist
- validation is recorded honestly
- remaining human work is isolated in the human TODO
- the suite ledger is updated
