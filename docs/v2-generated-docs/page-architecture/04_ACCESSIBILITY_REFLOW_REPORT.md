# Accessibility And Reflow Report

## Outcome

Canonical run 31 completed the required discovery audit for page-architecture step 04. The repository has a sound semantic base, and every representative route reflowed without page-level horizontal scrolling at a 320 CSS-pixel viewport after motion settled. It is not yet ready for a WCAG 2.2 AA conformance claim.

Four repository-controlled problems were identified and later fixed in the approved run-33 implementation batch:

1. closed mobile drawers keep focusable controls in the document and do not manage focus or Escape dismissal;
2. hero and review pagination controls render at only 9 CSS pixels high;
3. review text is line-clamped and measurably loses content at narrow width;
4. explicit and fallback not-found pages inherit the generic site title instead of a page-specific title.

Auto-advancing hero, review, and equipment-marquee motion also needs a pause/stop review beyond the existing reduced-motion behavior. Full 200-percent text resize, WCAG text-spacing overrides, complete keyboard traversal, focus-obscuration checks, assistive-technology announcements, contrast, and target-browser coverage remain unverified and are not represented as passing.

## Scope And Inputs

- Phase: discovery in run 31; bounded implementation revalidated in run 33
- Mode: brownfield
- Standard: WCAG 2.2 Level AA working baseline
- Routes rendered: `/`, `/services`, `/about`, `/about/social-media`, `/location`, `/emergency`, `/contact`, `/404`, and one unmatched fallback path
- Page families inspected: home, services, about, location, contact, shared placeholder, and not found
- Interactive families inspected: four mobile-drawer variants, desktop primary navigation, home hero carousel, Google-review carousel, FAQ accordion, quote form, MUI select configuration, mobile sticky CTAs, moving equipment marquee, and the embedded Google map
- No calendar, scheduler, dialog, site search, authentication flow, or checkout exists in the current repository.

Primary repository evidence included the refreshed execution profile, steps 01-03 outputs, App Router route files, screen compositions, family CSS, shared interaction/navigation styles, `MotionVisibility`, `PrimaryNavigation`, `GoogleReviewsSection`, `HeroSection`, `FaqSection`, `FreeQuoteForm`, and not-found behavior.

Supporting artifacts:

- [Accessibility/reflow matrix](./ACCESSIBILITY_REFLOW_MATRIX.csv)
- [Interactive component report](./INTERACTIVE_COMPONENT_ACCESSIBILITY_REPORT.md)
- [Implementation summary](./04_ACCESSIBILITY_REFLOW_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./04_ACCESSIBILITY_REFLOW_HUMAN_TODO.md)

## Standards And Repository Target

The repository does not document a stricter accessibility target, so this audit uses WCAG 2.2 Level AA. The most relevant success criteria are:

- 1.4.4 Resize Text
- 1.4.10 Reflow
- 1.4.12 Text Spacing
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.2.2 Pause, Stop, Hide
- 2.4.2 Page Titled
- 2.4.3 Focus Order
- 2.4.7 Focus Visible
- 2.4.11 Focus Not Obscured (Minimum)
- 2.5.8 Target Size (Minimum)

The audit distinguishes source inspection, rendered checks, and untested conditions. A 320-pixel viewport is evidence for reflow, not a substitute for 200-percent text resizing, custom text spacing, screen-reader testing, or the target-browser matrix.

## Current Semantic Structure

### Page contract

Rendered evidence found:

- one visible H1 on every representative route;
- one `main` element on every representative route;
- no duplicate rendered IDs on the eight explicit route checks;
- logical H1 to H2 to H3 progression in the inspected heading sequences;
- descriptive titles on the seven public content routes;
- named primary navigation and breadcrumb navigation where breadcrumbs exist;
- one footer on every marketing/placeholder route;
- native links and buttons for primary navigation, CTAs, FAQ toggles, carousel controls, and form submission;
- labeled MUI form fields, helper/error text, consent text, required-state exposure, and an alert for invalid submission.

The page-family source may contain multiple `header` elements because section introductions use semantic headers. In the rendered accessibility structure, the site header remains the banner while section headers retain section-local meaning. Repeated `nav` elements use distinct labels such as `Primary navigation`, `Breadcrumb`, and route-specific related-page labels.

### Not-found exception

The not-found composition intentionally omits the full header, navigation, and footer shell. It still supplies one `main`, one H1, a home link, and a phone recovery action. This is accepted as a bounded utility-page exception. It does not excuse the missing page-specific document title.

## Findings

### A11Y-01 — Mobile drawer focus and dismissal contract fails

- Priority: P1
- Scope: home, services/location/placeholders, about, and contact header families
- Criteria: 2.1.1, 2.4.3, 2.4.11; ARIA dialog/navigation behavior expectations

`MotionVisibility` moves a drawer with a transform and applies `aria-hidden`, but it neither removes closed descendants from sequential focus nor manages focus when the overlay opens. A rendered services-family drawer exposed ten descendants with `tabIndex=0` while closed. When opened, focus remained on the `Open menu` button outside the drawer. Pressing Escape while that button was focused left `aria-expanded="true"` and the drawer open.

The source has no Escape listener, focus transfer, focus return, focus boundary, `inert`, conditional unmount, or connection from the trigger to the drawer through `aria-controls`. `aria-hidden` alone does not make descendants unfocusable.

Post-approval fix contract:

1. give every trigger an `aria-controls` reference to a unique drawer ID;
2. while closed, unmount the drawer or use `inert` plus a noninteractive hidden state;
3. on open, move focus to the close control or first navigation item;
4. close on Escape and return focus to the originating trigger;
5. prevent background focus while the full-screen overlay is open, without introducing a trap that cannot be escaped;
6. preserve existing family classes, navigation labels, CTAs, animation, and reduced-motion behavior;
7. add focused component tests before consolidating any repeated implementation.

### A11Y-02 — Carousel pagination targets are undersized

- Priority: P1
- Scope: home hero and shared review carousel on every public page
- Criterion: 2.5.8

Rendered measurements at 320 pixels found all hero and review pagination buttons at 9 pixels high. Inactive dots were 9 by 9 pixels; active dots expanded only in width. The surrounding visual gap does not convert the button itself into a 24-pixel target, and a spacing exception has not been proven for every neighboring control.

Post-approval fix contract: retain the small visual dots if desired, but place them inside buttons with at least a 24 by 24 CSS-pixel interactive box. Keep the existing labels, selected/current state, focus indicator, and visual rhythm.

### A11Y-03 — Review content is clipped

- Priority: P1
- Scope: shared review carousel on every public page
- Criteria: 1.4.4 and 1.4.10

The review stylesheet applies `overflow: hidden` with a six-line desktop and five-line mobile clamp. At 320 pixels, all three visible cards had a larger `scrollHeight` than `clientHeight`:

- 147 versus 123 pixels;
- 172 versus 123 pixels;
- 221 versus 123 pixels.

No `Read more` control exposes the omitted text. This is loss of ordinary content, not a valid two-dimensional exception.

Post-approval fix contract: remove the content clamp and let cards grow, or add an accessible per-review disclosure that exposes the complete transcribed review. Do not shorten or rewrite reviewer content to satisfy layout.

### A11Y-04 — Not-found title is not page specific

- Priority: P2
- Scope: `/404` and framework unmatched fallback
- Criterion: 2.4.2

Both the explicit `/404` path and an unmatched test path rendered the root title `One Call Heating & Air | Northern Utah HVAC Service`, even though the visible H1 says `This page is out of service.` The explicit route declares a page-specific title in source, but the rendered special-route behavior did not expose it; `src/app/not-found.tsx` declares no metadata.

Post-approval fix contract: make the framework-level not-found response render a descriptive `Page Not Found | One Call Heating & Air` title and add a generated/rendered regression test covering both explicit and unmatched behavior.

### A11Y-05 — Auto-moving content lacks a durable pause contract

- Priority: P2
- Scope: home hero carousel, shared review carousel, and home equipment marquee
- Criterion: 2.2.2

Reduced-motion users receive stopped or reduced animation, and the carousels expose previous/next controls. The hero pauses while focus is within it; the reviews pause during pointer/focus interaction. There is no persistent pause/play control for users who do not request reduced motion, and the equipment marquee has no direct pause mechanism.

Post-approval fix contract: provide a clear pause/play state for auto-advancing carousels and a pause mechanism or nonmoving presentation for the equipment list. Preserve auto-advance only when the user has not paused and reduced motion is not requested.

### A11Y-06 — Hero tab semantics need a keyboard contract

- Priority: P2
- Scope: home hero pagination
- Criteria: 2.1.1 and 4.1.2

The hero dots use `tablist`, `tab`, `aria-selected`, and `aria-controls`, but no roving tab stop or ArrowLeft/ArrowRight/Home/End behavior is implemented. The buttons remain individually tabbable, so activation is available, but the declared ARIA pattern is incomplete.

Post-approval fix contract: either implement the complete tab keyboard pattern or use simpler named buttons with `aria-current`/selected-state text. Prefer the simpler pattern unless tab semantics provide a real navigation benefit.

## Resize And Reflow Findings

### What passed in the rendered 320-pixel check

- All seven public content routes had document `scrollWidth` equal to `innerWidth`.
- The settled explicit `/404` and unmatched fallback also had equal widths.
- Form fields and the optional detail grid collapsed into a usable single-column flow.
- The optional form panel opened at 320 pixels and remained within the page width.
- The invalid form alert appeared, received programmatic focus, and did not create page-level overflow.
- Long service, county, review, and footer content remained within the document width.
- Fixed mobile CTA source includes page-bottom compensation in each family; the rendered narrow screenshot showed the CTA above page content without introducing horizontal overflow.

### Conditions that are not yet proven

- 200-percent browser text resize
- WCAG text-spacing overrides
- 400-percent desktop zoom in each supported desktop browser
- focused-control visibility behind the sticky header and fixed mobile CTA throughout a complete keyboard traversal
- very long user-entered strings and email addresses in success/error states
- MUI select menu placement and dismissal at zoomed narrow widths
- Windows high-contrast/forced-colors behavior
- Safari/iOS Dynamic Type and zoom behavior

### Static risks to preserve in regression coverage

- The home H1 uses `white-space: nowrap`; current narrow media rules prevented page overflow, but text resize could still expose clipping or overlap.
- Page roots use `overflow-x: clip`, which can conceal an overflowing descendant. Future tests should inspect important components, not only document `scrollWidth`.
- The equipment ticker deliberately uses an oversized no-wrap track inside clipped overflow. This is acceptable only as moving supplemental content when the same information remains available and pausable.
- Fixed mobile CTAs reserve about 64 pixels at the page bottom. Focus-obscuration testing must verify the actual rendered CTA height, safe-area insets, and zoomed text rather than assuming the static padding is always sufficient.

## Interactive Component Findings

### Verified healthy behavior

- FAQ buttons expose `aria-expanded` and `aria-controls`; a rendered toggle changed the state from false to true and exposed the labeled region.
- The quote-form detail disclosure changed `aria-expanded` from false to true and rendered its controlled panel.
- Invalid quote submission created a role-alert message, marked fields invalid, and focused the error summary.
- MUI text fields provide programmatic labels, helper/error associations, required state, input purpose/autocomplete hints, and focus styling.
- The consent control has a text label and inline recovery message.
- Carousel previous/next arrows are 42-44 pixels and have accessible names.
- Primary CTA buttons and mobile sticky actions meet or exceed a 44-pixel visual height in the inspected CSS.
- The Google map iframe has a descriptive title and remains inside its responsive frame.

### Needs implementation or further verification

- Drawer focus lifecycle and Escape behavior: failed.
- Hero/review dot targets: failed.
- Review content availability: failed.
- Auto-motion pause/stop: incomplete.
- Hero tab keyboard pattern: incomplete.
- Full keyboard order and visible-focus traversal: not executed end to end.
- Screen-reader announcement timing for carousel changes and form success: not tested.
- MUI select listbox keyboard and narrow-popover behavior: not rendered during this audit.
- Standalone small utility/footer links should be checked with precise target-spacing geometry after the confirmed dot failures are fixed; simple bounding-box height alone does not determine whether the WCAG spacing exception applies.

See the [interactive component report](./INTERACTIVE_COMPONENT_ACCESSIBILITY_REPORT.md) for component-by-component evidence and fix ownership.

## Reviewed Exceptions

### Embedded Google map

The map is genuine two-dimensional spatial content. It may pan/zoom internally as a narrow exception, provided the surrounding page does not require horizontal scrolling and the adjacent city list and location page provide equivalent ordinary-text coverage. The iframe is titled and the page reflowed at 320 pixels.

### Equipment marquee

The oversized track is an intentional moving presentation, not permission to clip required ordinary text. It is acceptable only when the equipment names remain programmatically available, the duplicate set stays hidden from assistive technology, and users can pause or receive a static reduced-motion presentation.

### Not-found site chrome

The utility error page may omit the full marketing header/footer because it retains a clear main topic and recovery actions. Its title still must describe the error.

No ordinary card row, navigation bar, form, calendar, scheduler, or content section is classified as essential two-dimensional content.

## Proposed Implementation Order After Approval

1. Reconcile the stale Vite-era repository instruction source before editing application architecture.
2. Add focused tests that describe the drawer lifecycle, target boxes, unclamped review content, not-found title, and auto-motion pause contract.
3. Implement drawer focus/keyboard behavior across the existing family shells without visual consolidation.
4. Enlarge hero/review interactive target boxes while preserving their visual dots.
5. expose full review content and add persistent pause/play behavior for moving content.
6. correct framework-level not-found metadata.
7. run the step-05 page/route contract validation handoff and the full browser accessibility matrix.

Each implementation batch must be independently reversible and preserve routes, public wording, review data, metadata/schema meaning, form/Resend behavior, CSS family prefixes, visual identity, and CTA destinations.

## Validation Performed

- Ran the Next.js development server on the repository-standard port 3000 and stopped it after testing.
- Rendered all eight explicit representative routes at 1280 by 720 and 320 by 800.
- Rendered an unmatched fallback path separately.
- Checked document titles, H1 counts, `main`, header/navigation/footer counts, heading sequences, duplicate IDs, and document width.
- Confirmed one H1, one `main`, and no duplicate IDs on the explicit route matrix.
- Confirmed no settled page-level horizontal overflow at 320 pixels.
- Measured hero/review dot target boxes.
- Measured review `clientHeight` versus `scrollHeight`.
- Opened the services-family mobile menu, checked focus after opening, and pressed Escape.
- Toggled a home FAQ.
- Expanded quote-form details and triggered safe client-side invalid submission; no network submission occurred.
- Checked browser warnings/errors; none were emitted during the final route/interaction checks.
- Captured desktop and narrow rendered screenshots outside the repository.

## Validation Not Performed

- 200-percent text resize
- custom WCAG text-spacing override
- full keyboard traversal from browser chrome through every route
- VoiceOver, NVDA, JAWS, TalkBack, or other assistive-technology testing
- focus indicator contrast measurement
- color-contrast audit
- forced-colors/high-contrast mode
- target-browser/device matrix
- live production verification
- live Resend submission
- automated application tests, typecheck, lint, or production build; no application file changed, and the immediate run-26 baseline remains 60/60 tests plus successful typecheck, lint, and OpenNext build

## Completion Status

Step 04 discovery and the bounded repository implementation are complete and locally validated. This does not constitute WCAG conformance or production sign-off. Step 05 may consume the implemented contracts.

## Canonical Run 33 Implementation And Revalidation Update

The run-32 approval gate was satisfied and the confirmed repository defects were fixed:

- closed drawers are hidden and inert; opening transfers focus to the close control; Tab/Shift+Tab remain contained; Escape and link activation close; focus returns to the trigger;
- hero and review pagination controls provide at least 24 CSS-pixel targets;
- the hero uses named current-state buttons rather than incomplete tab semantics;
- persistent pause/resume controls stop hero/equipment and review auto-motion while retaining reduced-motion behavior;
- complete review text is rendered without line clamping;
- framework not-found output uses `Page Not Found | One Call Heating & Air` for explicit and unmatched paths.

Revalidation passed at 1280 by 720 and 320 by 800 for every public/utility route plus an unmatched path. Each route had one H1, one `main`, no duplicate IDs, no horizontal overflow, and the expected title. The drawer focus loop, pause state, review growth, form disclosure/invalid alert focus, target sizes, and console were checked. Automated validation also passed: 25 Vitest files / 69 tests, typecheck, lint, OpenNext build, and generated HTML checks.

This is local implementation validation, not a WCAG conformance claim. 200-percent text resize, custom text spacing, assistive technology, forced-colors/contrast, the full target-browser matrix, production, and live Resend delivery remain unverified.
