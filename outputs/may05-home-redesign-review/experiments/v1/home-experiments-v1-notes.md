# Home Experiments v1 — Companion Notes

**File:** `home-experiments-v1-7-alternatives.html`
**Date:** 2026-05-06
**Status:** v1 · block fidelity · ready for design review before UI investment

---

## What this is

Seven structurally distinct home page experiments, drawn from the canonical requirements (`00-requirements-from-pd-innov.md`) and the locked spine (`10-home-page-section-inventory.md`). Each experiment is rendered at block fidelity for desktop (1200) and mobile (375).

The deliberate choice to stay at block fidelity (not skeleton, not greybox, not hi-fi): this stage is a **sequencing-and-weight decision**, not a content or visual decision. Block fidelity is the right rung on the ladder per `reference/landing-page-patterns.md` (Part 3, Fidelity Ladder). UI applies in a later pass on the 2–3 experiments that earn it.

## What each experiment tests

| # | Name | Variable tested |
|---|---|---|
| 1 | Calm Anchor | Baseline · classic layer-cake · control |
| 2 | Programs First | CS priority promoted to weight 5 |
| 3 | Hero + 3 Things | Offsite alternative for item #3 (open decision) |
| 4 | Today Strip + Hero | Pre-hero glance band · density vs calm |
| 5 | Two-Column Desktop | Topology · momentum vs discovery |
| 6 | Combined Tracker + Insights | Module compression · two sections → one |
| 7 | Rewards Forward | Multi-type rewards moat · per-client variant |

## What's locked across all 7

These are not variables — they're given:

- Single hero (JH #3, V1 decision per Davinder + Jill)
- Logo top-center (JH #1)
- 4 tracker tiles: Steps · Sleep · Calories · Active Min, weekly view, reduced footprint (Darcy)
- Tracker Insights with takeaway + action (MHC differentiator)
- "Things I care about" lane with sub-header showing user's interests + Edit (no picker)
- "From your employer" permanent labeled section (CS-named)
- Reward references inline on items where applicable
- Source labeling on content surfaces
- 508 a11y baseline; skeleton render for data-dependent sections

## What varies across the 7

| Variable | Where it shifts |
|---|---|
| Section sequencing after hero | Exp 1, 2, 4, 7 |
| Hero treatment (full vs compressed) | Exp 3 |
| Pre-hero strip | Exp 4 |
| Layout topology (1-col vs 2-col) | Exp 5 |
| Section pairing/merging | Exp 6 (tracker + insights) |
| Section weight elevation | Exp 2 (programs), 7 (rewards) |
| Density philosophy | Exp 4 (dense), Exp 1 (calm) |

## Recommendation for next step

**Apply UI to 3 experiments, not 7:**

1. **Experiment 1 (Calm Anchor)** — V1 ship candidate; control
2. **Experiment 5 (Two-Column Desktop)** — highest scorer against the brief; needs UI to validate eng cost vs. value
3. **Experiment 7 (Rewards Forward)** — per-client variant; UI required to test whether multi-type row reads as differentiator vs. clutter

**Park (don't kill):**

- Experiment 2 (Programs First) — viable; revisit if member-engagement metrics shift
- Experiment 3 (Hero + 3 Things) — only advances if exec appetite to revisit single-hero
- Experiment 4 (Today Strip) — viable; revisit if daily-return metrics support density
- Experiment 6 (Combined T+I) — viable compression; revisit if home page length is flagged

## Open decisions still to resolve before UI

1. **Hero allocation rules** — needed regardless of experiment chosen
2. **Personalization engine shutdown plan** (JH #6) — coordinate with engineering
3. **Ongoing programs cap and overflow** ("+N more" pattern) — affects Exp 2 most
4. **Empty states** — particularly the rewards row in Exp 7 for clients with weak configs
5. **Edit-interests modal entry** — affects all experiments equally

## Color & weight encoding

The HTML legend (top of file) shows the mapping. Quick summary:

- **Color = section intent.** Anchor (hero) = ink black. Momentum (programs) = warm tan. Tracker = blue-gray. Insight = teal. Employer = green. Interest = blue. Rewards = warm brown. Challenge = orange.
- **Height = weight.** w5 = 88px desktop / 96px mobile. w4 = 64px / 70px. w3 = 48px / 52px. w2 = 30px / 34px. w1 = 22px / 24px.
- **Squint test built in.** Squint at any experiment and the dominant section should pop. If everything looks the same height, the visual weight is flat — a signal to revisit before UI.

## File companions

- `../../00-requirements-from-pd-innov.md` — canonical requirements
- `../../10-home-page-section-inventory.md` — locked spine
- `../../08-design-outline-and-meeting-prep.md` — concerns + recommendations rationale
- `../../home-wireframes-v4-content-widths-375-912-1200.html` — prior wireframes (skeleton fidelity)
- `home-experiments-v1-7-alternatives.html` — **this work** (block fidelity, 7 alternatives)
