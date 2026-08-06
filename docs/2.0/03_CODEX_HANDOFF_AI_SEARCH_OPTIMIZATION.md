# Codex AI Search Optimization Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should extend the existing SEO foundation so the site becomes easier for AI systems to:

1. understand
2. extract from
3. quote or summarize
4. compare against alternatives
5. trust as a credible source
6. recommend during research, evaluation, and action-oriented journeys

This handoff adds:

- AEO (Answer Engine Optimization)
- GEO (Generative Engine Optimization)
- agent-driven marketing visibility improvements
- stronger authority and trust signals
- more extraction-friendly content structure
- broader off-site brand signal awareness

Why:
Use this handoff after the base SEO system is already in place.

This handoff is not a replacement for traditional SEO.

It builds on top of `01_CODEX_HANDOFF_SEO_V2.md` and improves visibility for:

- AI-powered search experiences
- answer engines
- generative search summaries
- agent-driven discovery and recommendation workflows

Examples include:

- Google AI Overviews / AI search experiences
- Bing / Copilot-style AI answers
- Chat-based search and research assistants
- agentic tools that evaluate brands, products, services, and content before recommending them

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/v2-generated-docs/AI_SEARCH_VISIBILITY_[BUSINESS_OR_PROJECT].md`
  - `docs/v2-generated-docs/AI_SEARCH_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/AI_SEARCH_OWNER_TODO.md`
  - `docs/v2-generated-docs/AI_VISIBILITY_MANUAL_INPUTS.md`
  - `docs/v2-generated-docs/AI_SEARCH_VISIBILITY_[BUSINESS].md`
- Related systems:
  - AI-powered search experiences
  - answer engines
  - generative search summaries
  - agent-driven discovery and recommendation workflows
  - Google AI Overviews / AI search experiences
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
- Inputs Codex should inspect first: current metadata and schema systems, answer blocks, FAQ content, trust signals, entity references, comparison content, any existing AI-search visibility notes or docs, and optional Search Console query/page exports when they exist to reveal real query shapes already reaching the site.
- Primary outputs expected from this handoff: an AI-search visibility document, an implementation summary, and an owner TODO file that separate what was improved from what still needs human proof or research.
- Success signals: the site is easier for AI systems to understand, extract, compare, trust, and summarize without introducing generic filler or weakening the baseline SEO layer.
- Pause instead of inventing authority, citations, or factual proof when the repo lacks business evidence or source material needed to support stronger AI-facing claims.
- Split into phases when structural extraction improvements and larger content rewrites would otherwise be mixed together and become hard to review.

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
- understand
- extract from
- quote or summarize
- compare against alternatives
- trust as a credible source
- recommend during research, evaluation, and action-oriented journeys
- AEO (Answer Engine Optimization)
- GEO (Generative Engine Optimization)

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
