---
name: design-review-kit
description: Use when actually evaluating, scoring, reviewing, auditing, or critiquing a design artifact (Figma frame, HTML fragment, screenshot, wireframe, flow) — not when arguing a point from precedent. Runs the four always-on instruments in order: conformance (PASS/FAIL, arithmetic), accessibility (PASS/FAIL, a floor), UX heuristics + UX laws (severity 0-4 findings), art direction (score /100 across 10 dimensions). Never averages the four verdicts. Do NOT use this for "which expert would argue X" precedent questions — those are ux-usability, visual-brand-craft, etc. For an accessibility-only check (no full review), prefer the narrower accessibility-audit skill.
---

# Design Review Kit

The four always-on instruments that can actually **fail** a design, bundled with the orchestration logic that sequences them. This is a process skill, not a precedent skill — it runs an evaluation rather than supplying an argument.

## How to use this skill

1. **Read `kit-index.md` first.** It has the scoring contract (never average the four instruments), the applicability gate (which instruments apply to which artifact types — a wireframe doesn't get a conformance or art-direction score), and the six-step "how to run a review" procedure.
2. **Run in order:** `conformance.md` (and `conformance-audit.js` via the Figma bridge, or CSS reading) → `accessibility.md` → `ux-heuristics.md` + `ux-laws.md` together as one UX verdict → `art-direction.md`. Conformance always runs first — an art-direction score measured through un-conformant noise is uninterpretable, per `art-direction.md`'s own opening line.
3. **Report all four side by side**, never averaged. Two are floors (conformance, accessibility — either can block a "ship" recommendation on its own); two are gradients (UX severity list, art-direction score).
4. **Always name one highest-leverage fix.** A set of four scores with no "so what" is analysis, not a recommendation.
5. **State which files you loaded** before presenting the review (this repo's `CLAUDE.md` non-negotiable).
6. **This skill does not grant Figma-bridge tool access.** `conformance-audit.js` still needs to be run through whatever Figma MCP/bridge tool is available in the session; if none is available, degrade to reading the CSS or say the conformance check is unmeasured — don't report a clean PASS you didn't actually measure.
7. **Don't reach for the expert-precedent skills here.** If a finding needs a named argument behind it (e.g., citing Rams or Nielsen to defend a severity rating), that's `visual-brand-craft` or `ux-usability` layered on top — this skill's job is to produce the verdicts, not to argue for them.
8. **After the review**, log the outcome in the feature's `_decisions.md` — score, weakest dimensions, what changed, what was consciously left alone.

## Files

- `kit-index.md` — the full former `reference/review/_kit.md`: scoring contract, applicability gate, procedure, scope gaps. Start here.
- `conformance.md` + `conformance-audit.js` — the arithmetic instrument and its Figma-bridge script, both moved verbatim.
- `accessibility.md` — the WCAG 2.2 AA floor instrument, moved verbatim (also available as its own narrow skill, `accessibility-audit`, for accessibility-only requests).
- `ux-heuristics.md` — Nielsen/Norman/Krug/Walter as a scored instrument, moved verbatim.
- `ux-laws.md` — 16 cognitive/behavioral laws (Fitts, Hick, Gestalt, Peak-End, etc.), moved verbatim.
- `art-direction.md` — the 10-dimension composition rubric, moved verbatim.
