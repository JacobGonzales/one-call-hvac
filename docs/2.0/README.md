# V2 Suite 2.0

## Canonical New-Project Order

For one continuous beginning-to-end sequence across support, main SEO, page
architecture, content rewriting, validation, and ledger closeout, use:

- [`NEW_PROJECT_RUN_ORDER.md`](NEW_PROJECT_RUN_ORDER.md)

That runbook preserves the existing source filenames while assigning one
continuous numerical order and marking conditional steps and approval gates.

## Start Here

Before executing any v2 handoff:

1. Read `V2_SUITE_SHARED_EXECUTION_CONTRACT.md`.
2. Run or refresh `00_CODEX_HANDOFF_V2_SUITE_LEDGER.md`.
3. Read `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`.
4. Execute the applicable handoff in dependency order.
5. Update the ledger after the handoff.

## Shared Requirements

Every executable v2 handoff must:

- provide a pre-execution rundown before its first write or implementation action
- identify whether it is in discovery or implementation
- create a detailed report
- create an implementation summary
- create a human or owner TODO, even when no human action remains
- update its suite-ledger row and history
- preserve application-owned runtime content and unrelated work

Additional reports, CSV matrices, generated page packages, and evidence files do not replace the three primary documents.

## Suite Areas

### Main SEO Suite

The main handoffs live directly under `docs/2.0/` and run from `01` through `17`, including applicable fractional handoffs.

### Support

Repository context, Search Console, Analytics, and reference support lives under `docs/2.0/support/`.

### Page Architecture

Page and route normalization lives under `docs/2.0/page-architecture/`. Always run its `00` preflight first. The preflight creates a repository-specific execution profile and protects inherited work.

### Content Rewriting

Post-v2 rewriting lives under `docs/2.0/content-rewriting/`. Markdown is used for transfer and review; approved content returns to the application's established runtime source.

## Generated Root

Generated reports and ledgers belong under:

```text
docs/v2-generated-docs/
```

Do not write generated outputs back into the reusable source-handoff folders.
