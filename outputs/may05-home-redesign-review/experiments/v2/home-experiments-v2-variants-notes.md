# v2 Variants A–E — Companion Notes

**File:** `home-experiments-v2-variants-A-E.html`
**Date:** 2026-05-06
**Status:** Five variants of v2's personalization-forward ranking · block fidelity

---

## What this is

Five variants of the v2 prominence ranking. The ranking is held constant — what varies is **how the v2 ranking is composed**.

| Variant | What varies (axis) | One-line thesis |
|---|---|---|
| **2.A** | Lane composition | Each lane gets its own full-width band (vs paired 50/50) |
| **2.B** | Where personalization signal lives | Move the "we listened" signal *above* the hero — into the greeting line as inline interest chips |
| **2.C** | Topology | 60/40 desktop split; lanes stacked in right column · mobile lanes-first |
| **2.D** | Hero source | Hero is sourced *from* a lane; visual continuity ties hero to lane |
| **2.E** | Data adaptiveness | Two compositions: rich state (paired) + sparse state (merged "What's relevant" card) |
| **2.F** | Density (readability bet) | Direct response to "v2 was too dense." Same v2 ranking, fewer items per section, generous whitespace, soft color treatment, layer-cake breathing room. |

## What's locked across all 5 variants

- Hero w5, single image card, 50/50 split (or compressed continuity for 2.D)
- Lanes both at w4 (promoted from v1's w3)
- Programs at w3, **DCPs only**
- Tracker + Insights paired into one combined module, mid-page, w3
- Challenges, Rewards, Greeting all w2; nav w1
- 508 a11y, skeletons over spinners, sync state per tile, source labeling

## Recommendation summary (updated after readability feedback)

User flagged v2 baseline as "too dense" and asked to focus on ease of readability and scanning. **2.F (Calm & Scannable) is the direct answer** — and the calm principle should become the house default for v2 work, layered on top of any structural variant.

**Apply UI to (in priority order):**

1. **2.F (Calm & Scannable)** — direct response to the density feedback. Holds the v2 ranking but sheds ~33% of fold-density. Demonstrates that the readability bet works.
2. **2.E (Adaptive Sparse-State) + calm treatment** — solves the empty-lane production risk; rich state should adopt 2.F's calm rules.
3. **2.D (Hero ↔ Lane Continuity) + calm treatment** — strongest personalization signal; needs calm UI to keep the continuity from feeling busy.

**Hold at block fidelity:**

- 2.A (Stacked) — viable but pulls in opposite direction from the calm bet
- 2.B (Greeting Fusion) — additive; can be folded into whichever variant is committed
- 2.C (Two-Column) — eng cost concern as v1 Exp 5; only advances if wide-desktop strategy emerges

**The path forward:** commit to calm; then layer one structural variant on top. Not five variants in parallel.

## Variant 2.E — adaptive trigger rules

The sparse-state variant needs explicit rules for which composition renders. Drafted here:

| Condition | State |
|---|---|
| Things I care about ≥ 3 items AND From your employer ≥ 2 items | **Rich** (paired lanes) |
| Things I care about ≤ 2 items OR From your employer ≤ 1 items | **Sparse** (merged card) |
| 0 interest items AND 0 employer items | **Empty** (section hides; consider top-of-page "Tell us what you care about" prompt) |

Edge cases to resolve before UI:

- 3 interest items + 0 employer items: trigger sparse? or render Things I care about lane alone?
- 1 interest item + 4 employer items: same question reversed
- Recommend: any condition that triggers either single-lane rendering should fall to sparse merged card with appropriate item mix; preserves visual rhythm

## Stack with v1 + v2 baseline

| Doc | Status |
|---|---|
| `../v1/home-experiments-v1-7-alternatives.html` | 7 alternative experiments at v1 ranking (Programs at w4) |
| `home-experiments-v2-personalization-forward.html` | v2 baseline (single experiment, paired lanes) |
| `home-experiments-v2-variants-A-E.html` | **this work** — 5 variants of v2 ranking |

## File companions

- `../../00-requirements-from-pd-innov.md` — canonical requirements
- `../../10-home-page-section-inventory.md` — locked spine
- `../../08-design-outline-and-meeting-prep.md` — Davinder's concerns + recommendations
