# EBB — Open Decisions & Spec Placeholders

> Pending forks the **design must account for before they're resolved.** Each entry names the two branches, our lean, the outcome we *expect* (which may differ from the lean), and the **design placeholder** — what the build must hold either way so a late decision flips a variant instead of forcing a redesign.
>
> This is the *pending* companion to [_decisions.md](_decisions.md) (resolved calls). When a fork here is decided, move it there as a proper entry and delete it here.
> Last updated: 2026-07-06. Most resolve on Darcy's Monday (7/6) requirements.

---

## 1 · Opt-in consent gate — hard-gate vs. earn-gate ⚠️ **primary**

**The fork:** how consent is enforced for a member who is *mid-DCP* when EBB turns on.

| | Option 1 — **Hard gate** | Option 2 — **Earn gate** |
|---|---|---|
| Behavior | Can't continue the DCP without consenting | Keep doing the clinical work; only **earning/billing** is gated until consent |
| Consent UI | **Blocking wall** — non-dismissible | **Dismissible unlock** — "You can now earn $100 for the program you're already doing" |
| Framing | Lockout | Unlock (recommended) |

**Our lean:** **Option 2 (earn-gate).** Interrupting an in-progress mental-health program to force a billing consent is punitive and risks abandonment — violates the health/duty-of-care guardrail and Nielsen #3 (user control & freedom). Earn-gate keeps the clinical work uninterrupted and frames EBB as additive.

**Expected outcome:** **Option 1 (hard-gate)** — commercial/legal will likely push it, since the model is cleanest to defend if only *consented* members ever accrue a billable event.

**Design placeholder (what the build holds either way):**
- Treat the consent moment as **one component with a `gate_mode` variant: `earn` | `hard`.**
- Design **earn-gate as the primary** (dismissible right-panel modal on desktop / full-page dismissible modal on mobile), with a **hard-gate variant** that removes the dismiss affordance and blocks the Continue action.
- Everything upstream (announcement card, persistent banner) and the consent copy itself is **identical** across both — only the dismissibility + whether Continue is blocked changes.
- Net: if they land on hard-gate, we flip the variant flag; no rework of the flow.

**Referenced in:** [_brief.md](_brief.md) Consent Gate workstream · [_screens.md](_screens.md) §4 · owner: Darcy (legal + commercial).

---

## 2 · Product naming — "Episode" vs. "Engagement"-Based Billing

**The fork:** the canonical expansion of "EBB."

| | Option 1 — **Episode-Based Billing** | Option 2 — **Engagement-Based Billing** |
|---|---|---|
| Source | Darcy's 7/5 meeting notes | Source spec docs + this project's brief |

**Our lean:** **Option 2 (Engagement).** It describes the actual model (billing tied to member engagement/completion of the path), and it's what every source doc and every current design already uses.

**Expected outcome:** **Option 1 (Episode)** — Darcy's notes are the newer artifact and commercial may prefer the clinical-episode framing.

**Design placeholder:** the full name appears as a label in a handful of places, not baked into logic. All designs currently render **"Engagement-Based Billing."** If Episode wins, it's a **global find-replace** across the doc + design set — cheap. No structural design impact.

**Referenced in:** [_screens.md](_screens.md) naming note · every design artifact · owner: Darcy.

---

## 3 · Risk stratification default — off vs. required

**The fork:** whether EBB eligibility requires a risk qualification by default.

| | Option 1 — **Risk required** | Option 2 — **No risk requirement (default off)** |
|---|---|---|
| Eligibility | Must qualify via a risk model / assessment / DCP intake | Anyone in an eligible DCP can earn |
| Advocates | Steve (market expects it) | John (default none); Jill (cap alone suffices) |

**Our lean:** **Option 2 (default off)** — widest funnel, matches Darcy's stated goal and the confirmed system default (no cap, no risk).

**Expected outcome:** **Option 2**, but *configurable per client* — Steve's point means some clients will turn risk on, so the design can't assume it's always off.

**Design placeholder:**
- The eligibility surface ("Based on what we know about you, you may qualify to earn $100") must work **with and without** a risk filter in front of it.
- Risk source, when on, = the **Health Risk results** from the assessment ("at risk for X" → recommend matching DCP). Design the recommendation surface to consume a risk signal *when present* and fall back to interests/browse when absent (ties to the dual on-ramp — assessment-agnostic).

**Referenced in:** [_brief.md](_brief.md) · [_screens.md](_screens.md) §1 · [_decisions.md](_decisions.md) (dual on-ramp) · owner: Darcy + product.

---

## How to use this

- **When designing:** any screen touching consent, naming, or eligibility must be built to the **placeholder** above, not to a guessed resolution.
- **When a fork resolves:** write the real call into [_decisions.md](_decisions.md) (with rationale + rejected option), then remove it here.
