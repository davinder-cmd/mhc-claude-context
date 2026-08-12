# LifeForce — Status Tab State Provenance Map

**Deliverable reviewed:** page "Status — full flow (all states)" (Figma `lifeforce`, section 2454:9882) — 15 states.
**Purpose:** for the D'Arcy / client conversation — separates what's **grounded in a source** from what's **our design judgment**, so we validate the right things.
**Date:** 2026-08-03 · Supersedes/extends `outputs/jul27-lifeforce-requirements-refresher/PRODUCT-vs-DARCY.md`.

---

## Legend — four sources

| Tag | Meaning |
|---|---|
| **PRODUCT** | Confirmed in the **live MHC/Peak product** (screenshots) |
| **D'ARCY** | In **D'Arcy's V3 mockups** (`.dc.html`), which McGriff reviewed Jul 17 |
| **DOC** | In **Truist's documentation** — requirements doc + benefits.truist.com (the "authoritative process," logged D14) |
| **NET-NEW** | **Our design this session** — no prior mockup or client screen; extrapolated from a DOC rule or a design decision |

> The **visual design** of every screen (A2 focal treatment, amber/lava deadline surface, color/emphasis, layout) is **NET-NEW / ours** across the board. The tags below describe the **state and its content/rules**, not the styling.

---

## State-by-state

| # | State | State origin | Content / rules basis |
|---|-------|-------------|----------------------|
| 1 | Getting started · 3 left | **D'ARCY** (V3 "Enrolling" state) | Steps + Next steps/Completed = **PRODUCT**. A2 progression + countdown headline + "GETTING STARTED" rename = **NET-NEW** (D22, D33) |
| 2 | Getting started · 2 left | **NET-NEW** (progression split) | D'Arcy showed one "Enrolling" state; we broke it into 3/2/1-left. Content = **PRODUCT** |
| 3 | Getting started · 1 left | **NET-NEW** (progression split) | as above |
| 4 | **Awaiting Peak confirmation** | **NET-NEW** | Rule ("steps complete only on the Peak file; visit books once all confirmed") = **D'ARCY 7/24 sync** (D19, flagged as not-yet-designed). Screen is ours |
| 5 | Being scheduled | **D'ARCY** (V3 "Being-scheduled") | "~20 business days" = **D'ARCY** source (verify against DOC) |
| 6 | First visit scheduled | **D'ARCY** (V3 "Scheduled") | "Add to calendar" + reschedule copy = **D'ARCY**. "Your medical credit starts after this visit" line = **NET-NEW**, rule from **DOC** (credit starts the month after the appointment) |
| 7 | Visit done → active | **D'ARCY** (V3 "Visit-done") | Removed the stray "Add to calendar" (→ "Go to My Progress") = **our fix** |
| 8 | Active · steady | **NET-NEW / derived** | A steady-state variant of D'Arcy's active screen; not a distinct D'Arcy screen |
| 9 | **Labs due before next visit** | **NET-NEW** | Rule (labs **≥5 business days** before the appointment or drop to Phase 1) = **DOC** (D14). Screen is ours |
| 10 | Annual HA due | **D'ARCY** (V3 "HA-due") | D'Arcy's screen was soft ("keep working your goals"). We rewrote with **date + stakes** = **NET-NEW copy**; stakes rule = **DOC** |
| 11 | **Missed visit → rebook** | **NET-NEW** | Rule (reschedule **within 60 days** or Phase 1) = **DOC** (D14). Screen is ours |
| 12 | **Overdue → phase at risk** | **NET-NEW** | Rule (miss deadline → **drop to Phase 1**, lose credit) = **DOC** (D14). Screen is ours |
| 13 | **Dependent invited (pending)** | **NET-NEW** | D'Arcy had "Dependent-remind" + "Dependent-done"; the **invite-sent confirmation** was flagged missing (D19). Screen is ours |
| 14 | Dependent done · credit maximized | **D'ARCY** (V3 "Dependent-done") | — |
| 15 | Progress locked *(My Progress tab)* | **D'ARCY** (V3 "Progress-locked") | Copy corrected to the "after your first nurse visit / finish getting started" wording = **NET-NEW** (D22) |

---

## Cross-cutting elements

| Element | Source |
|---|---|
| Two tabs (Status / My Progress) | **PRODUCT** + **D'ARCY** |
| Next steps / Completed split | **PRODUCT** |
| Peak Health support card · About LifeForce · Calculate premiums & credit · 5-item bottom nav | **PRODUCT** |
| Phase strip: "Phase X of 5" + per-phase message + Calculate link | **PRODUCT** (phase # + qualitative message) + **DOC** (phases 1–5, "maintain/improve your status") |
| "$[X] per pay period" · "$[amount] more a year" · dependent "$[amount] more per pay period" | **DOC** (per-pay-period medical credit; spouse participation). Sentence framing = **NET-NEW** (D29/D32) |
| Deadline rules: 5-business-day labs · 60-day reschedule · annual HA · phase-drop-to-1 | **DOC** (D14) — verbatim constants |
| Amber = due soon / Lava = at risk treatment | **NET-NEW** |
| Actionable-vs-inert Completed rows (Ack = View, HA = Update) | **NET-NEW** |
| Phone **1-888-385-4583** | **CORRECTION** — replaced D'Arcy's placeholder 252-237-5090; **source not yet confirmed → verify the real Peak Health number before handoff** |
| Dates (Jun 12, Jun 30, Aug 11, Sep 15…) and `$[X]` / `$[amount]` | **NET-NEW — illustrative placeholders**, computed per member; fill from real data |

---

## Validate before lock (the NET-NEW screens)

These exist because the **DOC states a rule but no source ever drew the screen**. The rules are real; the screens are our judgment. Take these to D'Arcy / the client:

1. **4 · Awaiting Peak confirmation** — is there a real "submitted, pending Peak" limbo, and how long?
2. **9 · Labs due before next visit** — confirm the 5-business-day rule + the reschedule consequence, and the wording.
3. **11 · Missed visit → rebook** and **12 · Overdue → phase at risk** — confirm the 60-day window and the Phase-1 drop, and whether we should say it this plainly (loss aversion).
4. **13 · Dependent invited (pending)** — is there an invite-sent confirmation + resend?
5. **8 · Active steady** — is a distinct steady state needed, or does "visit done" persist?

Also confirm: the **real Peak Health phone number**, whether the DOC's per-phase strings are **contractual (verbatim)** or directional, and the **~20-business-days** scheduling figure.

**Everything else (states 1–3, 5–7, 10, 14, 15) traces to D'Arcy's reviewed V3 + the live product** — firmer ground, mostly needing only copy/values filled.
