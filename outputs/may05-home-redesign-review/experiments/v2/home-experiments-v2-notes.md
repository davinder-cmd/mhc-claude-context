# Home Experiments v2 — Personalization Forward · Notes

**File:** `home-experiments-v2-personalization-forward.html`
**Date:** 2026-05-06
**Status:** v2 · block fidelity · single experiment · counter-bet to v1

---

## What this is

A second experiment applying a **new prominence ranking** that elevates the two source-labeled lanes ("Things I care about" + "From your employer") to weight 4 — making them the second and third most prominent surfaces on the page after the hero. Programs is demoted to weight 3 and **narrowed editorially to DCPs only**.

This is a deliberate counter-bet to v1's "Programs anchors momentum" baseline.

## The new ranking

| Rank | Section | Weight | Notes |
|---|---|---|---|
| 1 | Hero | w5 | Anchor — locked |
| 2 | Things I care about | **w4** | Promoted — primary personalized lane |
| 3 | From your employer | **w4** | Promoted — primary employer lane |
| 4 | Ongoing programs (DCPs only) | **w3** | Demoted + narrowed |
| 5 | Tracker + Insights paired | **w3 combined** | Mid-page module |
| 6 | Challenges | w2 | Conditional |
| 7 | Rewards | w2 (scalable to w3) | Optional / client-config |
| 8 | Greeting | w2 | Supporting |
| 9 | Top / bottom nav | w1 | Frame |

## What changed from v1 baseline

| Change | v1 | v2 | Why |
|---|---|---|---|
| Lanes weight | w3 each | **w4 each** | Make personalization the second-tier signal |
| Programs weight | w4 | **w3** | Yields prominence to lanes |
| Programs scope | DCP / Journey / Challenge / Habit / Assessment | **DCPs only** | Clinical-depth surface, not catch-all |
| Tracker | standalone w3 | merged w/ Insights | "Paired, mid-page" per new ranking |
| Insights | standalone w3 | merged w/ Tracker | Tied to data; one unit |
| Lane layout (desktop) | typically stacked or 50/50 below mid sections | **paired 50/50 immediately below hero** | Lanes earn the second viewport |

## The thesis

**v1 says:** members come back to continue their work — so the second-most-prominent surface is what they're already doing (Programs).

**v2 says:** personalization is the differentiator — so the second-most-prominent surface visibly responds to who they told us they are (Things I care about) and what their employer wants them to see (From your employer).

The bet. Pick by which signal you want the page to lead with after the hero.

## DCP-only — editorial implications

**What appears in Programs:**
- Active DCPs only — Sleep, Stress, Diabetes Prevention, Diabetes Management, Anxiety, Depression, Back Pain
- Aligns with the DCP catalog in `projects/feature-dcp/`

**What doesn't appear in Programs:**
- Journeys → live in dedicated tab/profile
- Habits → live in Healthy Habits feature
- Active challenges → live in Challenges section (8)
- Assessments-in-progress → live in standalone HRA flow

**Empty state for non-enrolled members:**
- Title shifts to "Care paths for you"
- Show 2–3 algorithmic DCP recommendations
- CTA to take HRA
- Do NOT render an empty programs band

**Sales / CS framing:** the narrowing makes Programs the clinical-depth story. DCPs are MHC's clinical-program differentiator vs. Personify's lighter "Journeys" — leaning into the narrowing is a competitive advantage, not a feature loss.

## Risks to flag

- **Non-enrolled members** (no DCPs) get a thin Programs section — needs the empty state above
- **Journey + habit users** may feel their work is hidden from home — worth flagging for member feedback
- **Two w4 sections side-by-side** — UI must handle visual separation cleanly so lanes don't compete
- **Tracker is further from the fold** — members who came to log/check tracker data have to scroll past lanes; consider whether tracker engagement metrics drop

## Recommendation

Hold both v1 Exp 1 (Calm Anchor) and v2 Personalization Forward as live UI candidates. Apply UI to **both** for the next pass — they differ on a clear axis (programs vs. lanes as second-tier), and side-by-side comps will make the choice obvious to stakeholders.

**Don't merge them.** The whole point of v2 is the bet on personalization-as-second-tier. Hedge it and you get v1 back.

## File companions

- `../../00-requirements-from-pd-innov.md` — canonical requirements
- `../../10-home-page-section-inventory.md` — locked spine (note: v2 changes the recommended weight ordering at the bottom of that doc)
- `../../08-design-outline-and-meeting-prep.md` — Davinder's concerns + recommendations
- `../v1/home-experiments-v1-7-alternatives.html` — v1 baseline (7 experiments)
- `home-experiments-v2-personalization-forward.html` — **this work** (v2 single experiment)
