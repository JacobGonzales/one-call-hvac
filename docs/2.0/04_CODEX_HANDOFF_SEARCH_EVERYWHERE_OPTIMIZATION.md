# Codex Search Everywhere Optimization Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should build on the existing SEO and AI-search foundation so the repo performs better across the full modern search journey:

1. discovery
2. understanding
3. comparison
4. trust building
5. interaction
6. conversion
7. follow-up refinement

This handoff adds:

- UX-aware search optimization
- conversion-aware search optimization
- LLM readability and retrieval support
- voice-query optimization
- stronger cross-channel topic and entity consistency
- clearer next-step execution planning for future Codex runs

Why:
Use this handoff after:

- `01_CODEX_HANDOFF_SEO_V2.md`
- `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`

This handoff is the next layer beyond baseline SEO and AI-search optimization.

It expands the strategy into a broader modern search visibility system that includes:

- SXO (Search Experience Optimization)
- LLMO (Large Language Model Optimization)
- AIO (Artificial Intelligence Optimization)
- VSO (Voice Search Optimization)
- CRO-aware search optimization
- Search Everywhere Optimization

This handoff should help Codex understand that modern search is no longer just about rankings.

The goal is to make the site:

- easier to discover
- easier to understand
- easier to trust
- easier to recommend
- easier to convert

across:

- traditional search engines
- AI search results
- chat assistants
- voice assistants
- agentic recommendation workflows
- comparison and evaluation journeys

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/v2-generated-docs/SEARCH_EVERYWHERE_STRATEGY.md`
  - `docs/v2-generated-docs/SEARCH_EXPERIENCE_TODOS.md`
  - `docs/v2-generated-docs/SEARCH_EVERYWHERE_OWNER_TODO.md`
  - `docs/v2-generated-docs/MODERN_SEARCH_MANUAL_INPUTS.md`
  - `docs/v2-generated-docs/AI_SEARCH_IMPLEMENTATION_SUMMARY.md`
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
  - SXO (Search Experience Optimization)
  - LLMO (Large Language Model Optimization)
  - AIO (Artificial Intelligence Optimization)
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Use OOP only where it genuinely improves clarity
- Match the current stack and project conventions
- Minimize duplication
- Add comments where a new developer would need them
- Avoid unnecessary dependencies
- Preserve existing behavior unless required for the task
- Do not narrow the original handoff's intended outcomes; clarify them

Execution notes:
- Inputs Codex should look for first: current public routes, metadata and schema systems, FAQ and answer blocks, internal-link flows, trust sections, conversion paths, any existing AI-search or analytics notes, and optional Search Console export data when it exists to identify high-impression search-entry pages and weak-engagement candidates.
- Primary outputs expected from this handoff: a strategy document, an implementation summary, and an owner TODO file that explain what changed and what still needs human input.
- Success signals: the site is easier to discover, understand, trust, compare, and convert across search, AI, and voice-style journeys without adding fluff or weakening earlier SEO work.
- Pause instead of guessing when the repo lacks enough business context to decide trust claims, conversion intent, or page-type CTA pressure safely.
- Split into phases when the repo needs both structural implementation work and larger content rewrites so the technical/search-signal changes stay reviewable.

Stop conditions:
- Stop and document the gap if required inputs, exports, or verified business facts are missing and the handoff would otherwise force guesses.
- Stop and ask for confirmation before making changes that would alter public claims, SEO contracts, schema intent, indexability intent, or core user-flow behavior beyond the handoff's safe scope.
- Stop after leaving the required report, summary, and TODO outputs when the remaining work depends on external tools, approvals, or data not available in the repo.


Required process:
1. Inspect the current implementation first
2. Before editing, identify:
- hidden assumptions
- likely edge cases
- risks of regression
- whether the task should be split into phases
3. Give a concise plan
4. Implement in small, logical changes
5. Run validation commands
6. Report files changed, results, and any follow-up risks

Validation commands:
- npm test
- npm run lint
- npm run build

Acceptance criteria:
- discovery
- understanding
- comparison
- trust building
- interaction
- conversion
- follow-up refinement
- UX-aware search optimization

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
