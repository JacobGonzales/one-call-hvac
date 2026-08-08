# Accessibility And Reflow Human TODO

## Completed Application Decision

### 1. Run-32 approval and run-33 implementation

- Action: completed; the bounded accessibility batch was approved and implemented.
- Reason: recorded for audit continuity.
- Affected scope: mobile drawers, hero/review controls, review content presentation, motion pause behavior, not-found metadata, focused regression tests, and stale repository instructions.
- Priority: P0
- Blocking: no
- Evidence: `04_ACCESSIBILITY_REFLOW_REPORT.md` and `INTERACTIVE_COMPONENT_ACCESSIBILITY_REPORT.md`
- Completion condition: satisfied by canonical runs 32-33.

## Blocking Before A WCAG Conformance Claim

### 2. Complete the target-browser accessibility matrix after fixes

- Action: verify 200-percent text resize, 400-percent/equivalent reflow, WCAG text-spacing overrides, complete keyboard traversal, focus not obscured by sticky/fixed UI, and screen-reader announcements in the supported browser/device matrix.
- Reason: run 33 revalidated 320 CSS-pixel reflow, drawer keyboard behavior, target sizes, complete review text, pause state, form invalid-state focus, and 404 titles, but did not perform the other required conditions.
- Affected scope: all public routes; especially drawers, carousels, MUI selects, form errors/success, sticky CTAs, long review text, and not-found behavior.
- Priority: P0
- Blocking: yes, for claiming WCAG 2.2 AA conformance; no, for page-architecture step 05
- Evidence: `ACCESSIBILITY_REFLOW_MATRIX.csv`
- Completion condition: recorded pass/fail evidence for each required browser, zoom/text setting, keyboard workflow, and assistive-technology workflow, with defects resolved or explicitly accepted.

## Required Before Production Sign-Off

### 3. Recheck the deployed site after the repository catches up

- Action: after an approved implementation and deployment, repeat the critical flows on `utahonecall.com` without sending a live inquiry unless separately authorized.
- Reason: prior handoffs establish that production has lagged the repository; local results do not prove the deployed build.
- Affected scope: menu focus/Escape, carousel targets/content/pause, quote-form validation, not-found title, 320-pixel reflow, and sticky CTA coverage.
- Priority: P1
- Blocking: yes, for production accessibility sign-off
- Evidence: this run's local browser evidence and the deployment status in prior suite outputs
- Completion condition: the deployed version matches the approved repository behavior and no critical accessibility regression remains.

## Nonblocking Product Decision

### 4. Confirm an alternate complete-review presentation only if desired

- Action: only if you do not want the implemented growing review cards, choose an accessible `Read full review` disclosure pattern in a future approved visual batch.
- Reason: run 33 removed the clamp and now shows complete review text.
- Affected scope: shared Google-review carousel on all public pages.
- Priority: P2
- Blocking: no; the accessible default is implemented
- Evidence: rendered clamp measurements in `04_ACCESSIBILITY_REFLOW_REPORT.md`
- Completion condition: satisfied unless a different visual treatment is requested.
