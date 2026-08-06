# Semantic Accessibility And Reflow Handoff 2.0

## Required Preflight Input

Before auditing or editing, read `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

Also read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown before the first generated-file or application write, then update this handoff's ledger row when work begins and ends.

Confirm that the profile covers the requested scope and is not materially stale. If it is missing, stale, or incomplete for the scope, stop implementation and run or refresh `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`.

The profile's execution mode, execution phase, component preservation matrix, runtime content storage policy, repository conventions, protected areas, and approval gates override example names and folder structures in this handoff. In discovery, audit and report without changing components or styling. In implementation, require an approved plan and scoped authorization. Record the mode and phase used, existing structures preserved, approved deviations, and newly discovered profile conflicts in the return.

## Objective

Codex should normalize the semantic and accessibility contract shared by all pages while allowing complete visual freedom within that contract.

This handoff treats accessibility as application behavior, not a design theme. A visually unique page must still remain understandable, operable, and usable when text is resized, the viewport narrows, or the user relies on a keyboard or assistive technology.

## Standards Baseline

Use the repository's required accessibility standard. When no stricter target is documented, use WCAG 2.2 Level AA as the working baseline.

At minimum, account for:

- WCAG 1.4.4 Resize Text: text can be resized to 200 percent without loss of content or functionality
- WCAG 1.4.10 Reflow: vertically scrolling content reflows at a width equivalent to 320 CSS pixels; this commonly represents 400 percent zoom on a 1280-pixel-wide desktop viewport
- WCAG 1.4.12 Text Spacing
- WCAG 2.1.1 Keyboard
- WCAG 2.1.2 No Keyboard Trap
- WCAG 2.4 focus, heading, label, and navigation requirements applicable to the interface
- WCAG 2.5.8 Target Size Minimum: targets are at least 24 by 24 CSS pixels or satisfy an allowed exception

Primary references:

- `https://www.w3.org/TR/WCAG22/`
- `https://www.w3.org/WAI/WCAG22/Understanding/reflow.html`
- `https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html`
- `https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html`

Do not describe 400 percent browser zoom as a requirement that every mobile browser expose the same zoom control. Test the equivalent reflow condition as well as the supported zoom and text-resize behavior of the target browsers.

## Semantic Page Contract

Every page should provide:

- a descriptive document title
- one primary visible H1 for the page topic
- a `main` landmark containing the page's main content
- consistent header, navigation, and footer landmarks
- logical heading progression that reflects relationships rather than font size
- descriptive link and control names
- native semantic elements before custom ARIA roles
- unique IDs for labeled sections and jump links
- programmatic labels and instructions for inputs
- status and error announcements where dynamic updates require them

Repeated global navigation and footer landmarks should be distinguishable when more than one of the same landmark type appears.

## Resize And Reflow Contract

At 200 percent text resize and narrow-width reflow:

- content and controls must not be clipped or disappear
- text must wrap without overlapping adjacent content
- containers must grow with their content
- essential controls must remain reachable
- fixed and sticky elements must not cover the current focus or important content
- a user must not need two-dimensional scrolling to read ordinary text
- page-level horizontal scrolling must not be introduced by decorative or layout elements
- long URLs, words, headings, and user-entered content must wrap safely
- dialogs and popovers must fit within the available viewport and remain dismissible

Exceptions for content that genuinely requires two-dimensional layout, such as some data tables, maps, diagrams, or editing canvases, must be reviewed narrowly. Do not classify an ordinary card row, calendar, scheduler, or navigation bar as essential two-dimensional content merely to avoid reflow work.

## Responsive Implementation Rules

- Avoid fixed content heights for text-bearing cards, headings, controls, and dialogs.
- Avoid fixed widths that exceed the available inline size.
- Use `max-inline-size: 100%` or the project equivalent for media and containers.
- Allow flex and grid children to shrink with `min-width: 0` or the logical-property equivalent when necessary.
- Convert multi-column content to one column when the available width cannot support it.
- Allow button and navigation labels to wrap when truncation would remove meaning.
- Do not set user-scalable viewport restrictions.
- Prefer relative text units and avoid viewport-only font sizing that prevents effective text resizing.
- Keep focus indicators visible and unclipped.
- Account for safe areas without reserving excessive fixed space.

## Interactive Component Rules

For forms, booking flows, calendars, navigation, accordions, dialogs, and search:

- all functionality must be keyboard operable
- focus order must follow the meaningful interaction sequence
- focus must not become trapped except inside a correctly managed modal interaction
- opening and closing overlays must manage focus predictably
- selected, expanded, invalid, current, and disabled states must be programmatically exposed
- error messages must identify the affected field and explain recovery
- touch targets should meet the Level AA minimum and preferably exceed it for primary mobile actions
- controls must remain visible and usable at narrow widths

Calendars and schedulers should provide a narrow-width presentation that keeps date navigation, the selected date, available times, and confirmation actions in one usable flow. Prefer an agenda or single-day slot layout when a multi-day grid cannot reflow safely. Do not solve overflow by clipping the next day or placing required date controls off-screen.

## Visual Creativity That Remains Allowed

This contract does not prescribe:

- colors beyond required contrast
- typeface selection
- hero composition
- card shape
- section order
- animation style within reduced-motion and operability requirements
- imagery
- background treatments
- mobile visual direction

Components may look completely different while satisfying the same semantic and interaction contract.

## Audit Process

1. Inventory page layouts and interactive component families.
2. Identify fixed widths, fixed heights, overflow clipping, nowrap behavior, viewport-scaled text, and broad sticky layers.
3. Inspect heading and landmark structure by page family.
4. Inspect keyboard and focus behavior in interactive components.
5. Inspect target sizes and adjacent-control spacing.
6. Inspect text wrapping and container growth at representative long-content states.
7. Test representative routes at normal size, 200 percent text resize, and the 320 CSS-pixel reflow condition.
8. Test high-risk workflows such as navigation, booking, forms, dialogs, and search.
9. Record true two-dimensional-content exceptions and their contained scrolling behavior.
10. Add focused regression tests where the repository's test stack can reliably enforce the behavior.

Follow repository rules before starting a browser, taking screenshots, or running visual automation. Static inspection and component tests may identify many problems, but do not claim full reflow conformance without an appropriate rendered check.

## Required Outputs

Write:

- `docs/v2-generated-docs/page-architecture/04_ACCESSIBILITY_REFLOW_REPORT.md`
- `docs/v2-generated-docs/page-architecture/04_ACCESSIBILITY_REFLOW_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/page-architecture/04_ACCESSIBILITY_REFLOW_HUMAN_TODO.md`
- `docs/v2-generated-docs/page-architecture/ACCESSIBILITY_REFLOW_MATRIX.csv`
- `docs/v2-generated-docs/page-architecture/INTERACTIVE_COMPONENT_ACCESSIBILITY_REPORT.md`

The first three files are required in discovery and implementation. The matrix and interactive-component report are supporting evidence. A discovery summary must distinguish inspected behavior from rendered behavior that was not tested.

## Acceptance Criteria

- Page families have consistent landmarks, H1 ownership, and heading semantics.
- Ordinary content remains available and operable at 200 percent text resize.
- Ordinary vertically scrolling content reflows at 320 CSS pixels without page-level horizontal scrolling.
- Interactive controls remain reachable, named, keyboard operable, and visibly focused.
- Calendars, schedulers, navigation, forms, and dialogs have documented narrow-width behavior.
- True two-dimensional exceptions are contained and explicitly reviewed.
- Accessibility requirements constrain behavior without prescribing visual design.

## Return Format

- Standards and repository target
- Page-family semantic findings
- Resize and reflow findings
- Interactive component findings
- Exceptions
- Files changed
- Validation performed
- Validation not performed
- Remaining human review
