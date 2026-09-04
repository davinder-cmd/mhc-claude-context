# Design Review Kit — Index

The always-on instruments. Every file in this folder can **fail a design**. That is the entry requirement.

Expert libraries (`reference/experts/`: ux-usability-experts.md, visual-design-experts.md, product-design-experts.md, engagement-behavior-experts.md; `reference/process/design-system-principles.md`) are **not** part of the kit. They are consulted when you need an argument or a precedent — not on every review. Loading 500 lines of biography to reach 80 lines of checklist is why visual reviews used to read as opinion.

---

## The four instruments

| Instrument | File | Output type | Nature |
|---|---|---|---|
| **Conformance** | [conformance.md](conformance.md) | PASS / FAIL + counts | Arithmetic — measured, never judged |
| **Accessibility** | [accessibility.md](accessibility.md) | PASS / FAIL + blockers | A floor, not a score |
| **UX** | [ux-heuristics.md](ux-heuristics.md) + [ux-laws.md](ux-laws.md) | Severity list (0–4) | Judgment, established rubric |
| **Art direction** | [art-direction.md](art-direction.md) | Score /100 across 10 dimensions | Judgment, MHC-specific rubric |

---

## Scoring contract

**Never average across instruments.** This is the load-bearing rule.

A usable-but-flat screen and a beautiful-but-confusing screen both average to ~7/10, and the average tells you nothing about which half to fix. The four instruments emit four independent verdicts and are reported side by side, always.

```
CONFORMANCE   FAIL — 15 type signatures (max 6), 20 fills (max 8), 9 unbound text nodes
ACCESSIBILITY FAIL — 1 blocker: out-of-range lab values carried by position only
UX            2 severity-3, 4 severity-2, 6 severity-1
ART DIRECTION 48/100 — weakest: tonal structure (2), graded density (3), emphasis rank (3)
```

Two of these are floors and two are gradients. A design can ship at 60/100 art direction. It cannot ship with an accessibility blocker or a conformance failure — those are defects, not preferences.

### Order of operations

Run conformance **first**. If a screen has 15 type signatures and 20 hexes, its art direction score is uninterpretable — you would be grading composition through noise the system already forbids. Fix conformance, re-measure, then judge.

---

## Applicability gate

Do not score an artifact against an instrument it cannot satisfy. A wireframe marked down for having no visual language is a broken review, not a finding.

| Artifact | Conformance | Accessibility | UX | Art direction |
|---|---|---|---|---|
| Wireframe / breakpoint view | — | structural only | ✅ | — |
| Hi-fi Figma frame | ✅ via bridge | ✅ | ✅ | ✅ |
| Production HTML fragment | ✅ via CSS | ✅ | ✅ | ✅ |
| Screenshot / JPEG / PDF | ❌ tokens not inspectable | partial — contrast only | ✅ | ✅ |
| Copy deck / flow diagram | — | — | ✅ | — |

"structural only" = heading order, label presence, target sizing intent, colour-not-alone. Not contrast, which needs real values.

---

## How to run a review

1. **Declare the artifact type** and therefore which instruments apply.
2. **Conformance** — run [conformance-audit.js](conformance-audit.js) through the Figma bridge, or read the CSS. Report counts against thresholds. Do not eyeball this.
3. **Accessibility** — walk [accessibility.md](accessibility.md). Any blocker stops the review from being a "ship" recommendation.
4. **UX** — walk the heuristics and laws. Assign Nielsen severity 0–4 to each finding.
5. **Art direction** — score all 10 dimensions. Report the score, the three weakest dimensions, and the single highest-leverage fix.
6. **State the files you loaded** before presenting analysis (CLAUDE.md non-negotiable).

Then log the outcome in the feature's `_decisions.md` — score, weakest dimensions, what was changed, what was consciously left alone.

---

## What this kit deliberately does not cover

Named so nobody assumes coverage that isn't there:

| Gap | Status | Interim home |
|---|---|---|
| Content design / microcopy | Not built | Tacit; the concision rule lives in working memory, not an instrument |
| Data visualization | Not built | Partially caught by art direction dim. 7 (meaning carried visually) |
| Motion spec (durations, easing curves) | Not built | Only *posture* is covered, in art direction dim. 9 |
| Imagery sourcing / library audit | Out of scope | `imagery-audit`, `light-test`, `crop-test` skills |

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Initial kit — 4 instruments, scoring contract, applicability gate. Split from the expert libraries. |
