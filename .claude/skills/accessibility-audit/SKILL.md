---
name: accessibility-audit
description: Use for an accessibility-only request — "check accessibility," "is this WCAG compliant," "check contrast," "is this accessible" — on a Figma frame, HTML page, screenshot, or flow, without running the full four-instrument design-review-kit. Matches this repo's own "Accessibility audit" session type (name the artifact, get PASS/FAIL + a blocker list — not a full Discover/Define/Develop/Deliver loop). For a full design review where accessibility is one of four instruments, use design-review-kit instead — it also carries this exact file as its accessibility step.
---

# Accessibility Audit

Standalone, narrow-trigger skill for one instrument: the WCAG 2.2 AA floor. Pulled out of `design-review-kit` because this repo's own `CLAUDE.md` already treats "accessibility audit" as its own recurring session type, distinct from a full four-instrument review — and because accessibility is checkable on artifact types (a screenshot, a PDF) the other three instruments can't score at all.

## How to use this skill

1. Name the artifact (Figma frame, HTML page, screenshot, flow) — that determines how much of `accessibility.md` is actually measurable. On a screenshot, only contrast, colour-not-alone, target sizing, and structure-by-inspection apply; say so rather than reporting a clean pass on the rest.
2. Walk every blocker category in `accessibility.md` — contrast, colour-never-alone, focus, targets, text/zoom, forms, audio/video, motion, structure. Any one blocker means the answer is FAIL, regardless of how minor it seems next to the others.
3. Report **PASS / FAIL + the blocker list** — this instrument is a floor, not a score. Don't average it against anything.
4. If a required design decision genuinely can't meet a floor, escalate rather than quietly shipping the exception — an undocumented waiver is a defect, not a decision.
5. If the actual task is a full design review (conformance, accessibility, UX, art direction together), use `design-review-kit` instead — it includes this exact file as one of its four steps, run in the correct sequence.

## Files

- `accessibility.md` — the WCAG 2.2 AA floor instrument, excerpted verbatim from the former `reference/review/accessibility.md` (also carried inside the `design-review-kit` skill for the full-review case).
