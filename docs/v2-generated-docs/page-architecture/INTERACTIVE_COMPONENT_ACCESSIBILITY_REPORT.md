# Interactive Component Accessibility Report

## Status Key

- Pass: inspected and rendered behavior met the checked contract.
- Partial: healthy behavior exists, but an important contract is incomplete or untested.
- Fail: rendered or source evidence demonstrates a contract violation.
- Not present: the component family does not exist in this repository.

## Component Matrix

| Component | Consumers | Rendered/source evidence | Status | Required action after approval |
|---|---|---|---|---|
| Desktop primary navigation | All marketing families | Named `Primary navigation`; native links; About submenu appears through hover/focus-within; current-route state is shared | Partial | Verify full keyboard order, visible focus, submenu escape behavior, and target spacing at text resize |
| Mobile drawer | Home, services/location/placeholders, about, contact | Stable `aria-controls`; closed drawer is hidden/inert; opening focuses close; Tab boundaries contain focus; Escape/link closes; trigger regains focus | Pass locally | Complete assistive-technology and target-browser verification |
| Mobile sticky CTA | Main marketing families | 44px-class actions; page-bottom compensation exists; fixed at viewport bottom | Partial | Verify safe-area height and focused-control visibility at 200% text and 400% zoom |
| Home hero carousel | Home | Named previous/next and ordinary slide buttons; current state; >=24px targets; focus/reduced-motion pause; persistent motion pause/resume | Pass locally | Complete assistive-technology and target-browser verification |
| Google-review carousel | Every public family | Named arrows/dots, current state, >=24px targets, persistent pause/resume, reduced motion, controlled live region, and complete unclipped text | Pass locally | Verify announcements, 200% text, and target browsers |
| Equipment marquee | Home | Duplicate set hidden; reduced motion produces static state; persistent hero motion control pauses the moving track | Pass locally | Complete target-browser and assistive-technology verification |
| FAQ accordion | Home | Native buttons; `aria-expanded`, `aria-controls`, labeled region, reduced-motion-aware transition; rendered false-to-true state worked | Pass for checked state | Add keyboard/reflow regression coverage and verify focus styling/text spacing |
| Quote details disclosure | Home and contact | Native button, expanded state, controlled panel, reduced-motion-aware animation; rendered open state worked at 320px | Pass for checked state | Add narrow keyboard regression coverage |
| Quote text fields | Home and contact | MUI labels, helper/error text, required state, autocomplete/input purpose, invalid state, visible focused style | Partial | Verify 200% text, text spacing, forced colors, autofill, and long values |
| Quote select/listbox | Home and contact | MUI select semantics and reduced-motion transition configured; popup not rendered in this audit | Partial | Test keyboard listbox operation, Escape, focus return, and 320/zoomed popup placement |
| Quote consent | Home and contact | Labeled checkbox with recovery text and focus-visible styling | Partial | Verify error association and screen-reader announcement at submission |
| Quote submit/error state | Home and contact | Safe invalid submit created role alert, marked fields invalid, and focused summary; no network request sent | Pass for invalid path | Test success path with mocked delivery and AT announcement; do not send live request without approval |
| Embedded Google map | Home | Descriptive iframe title; contained responsive frame; adjacent city list and location page provide text alternative | Pass as reviewed 2D exception | Retain containment and text alternative; test keyboard entry/exit in target browsers |
| Related-page navigation | Services, about, location, contact | Distinct route-specific navigation labels and native links | Pass for semantics | Verify target spacing and focus at text resize |
| Not-found recovery actions | Explicit and fallback 404 | One H1/main, home and phone actions, and specific Page Not Found title on explicit and unmatched paths | Pass locally | Recheck the deployed framework response |
| Dialog/modal | None | No dialog or modal exists; mobile drawer is navigation overlay, not declared as a dialog | Not present | Do not add dialog semantics unless the implemented focus model genuinely behaves as a modal |
| Calendar/scheduler | None | No booking calendar or scheduler exists | Not present | Reassess if a scheduler is added later |
| Site search | None | No internal search UI exists | Not present | Reassess if search is added later |

## Canonical Run 33 Status

The confirmed drawer, carousel, marquee, complete-review, and not-found defects are implemented and locally validated. The contracts below remain the preservation requirements for later changes. `Pass locally` does not replace 200-percent text, custom-spacing, assistive-technology, contrast/forced-colors, target-browser, or production evidence.

## Drawer Implementation Contract

The four family shells should keep their current JSX classes and CTA differences while sharing a small behavior contract if implementation is approved:

1. trigger has a stable drawer ID through `aria-controls` and exposes expanded state;
2. closed drawer is not present in sequential focus and is not exposed as operable content;
3. open drawer receives focus at a predictable control;
4. Tab and Shift+Tab stay within the full-screen overlay only while it is modal in practice;
5. Escape closes;
6. link selection closes;
7. close returns focus to the originating trigger;
8. background content cannot receive focus while covered;
9. reduced motion changes animation duration, not the focus lifecycle;
10. tests cover open, Tab boundary, Escape, link activation, and focus return.

Prefer a focused shared hook/primitive only after tests establish identical behavior. Do not consolidate family markup or visual shells merely to implement this contract.

## Carousel Implementation Contract

- Keep previous/next controls at least 24 by 24 pixels; the current arrows already exceed this.
- Give visual dots a minimum 24 by 24 interactive wrapper.
- Expose selected/current state without requiring color alone.
- Add a persistent pause/play control for auto-advance.
- Stop automatic movement for reduced-motion users and after an explicit pause.
- Preserve focus when slides change.
- Do not announce every automatic change aggressively.
- Make the complete review text available without relying on hover.
- If `tab` roles remain, implement ArrowLeft, ArrowRight, Home, End, and roving tab focus. Otherwise use ordinary labeled buttons.

## Form Implementation Contract

The current invalid-submit path is healthy enough to preserve. Future implementation must not change field names, payload shape, endpoint, consent, or Resend behavior merely to improve accessibility.

Add regression evidence for:

- focus placement after invalid submit;
- error summary plus field-specific recovery;
- consent error association;
- MUI select keyboard interaction and popup fit;
- success announcement with a mocked API response;
- disabled/sending state naming;
- 200-percent text resize, text-spacing overrides, and long-value wrapping;
- mobile sticky CTA not covering the current control or error.

## Focus And Target Notes

Global CSS supplies a 3px `:focus-visible` outline, and components that suppress `outline` generally replace it with a strong background/border state. This run did not measure contrast or forced-colors behavior, so focus styling is partial rather than fully validated.

Bounding-box scans found several visually small text links. WCAG 2.5.8 permits spacing and inline-text exceptions, so those are review candidates rather than confirmed failures. The hero and review dots are confirmed because their controls are discrete adjacent pagination targets with 9px height and no proven 24px target box.

## Validation Boundary

Rendered interaction evidence covered the services-family drawer, one FAQ, quote details, invalid quote submission, carousel sizing/clipping, route semantics, and 320-pixel reflow. Complete keyboard traversal, screen readers, 200-percent text resize, text spacing, focus contrast, target-browser behavior, and production were not tested.
