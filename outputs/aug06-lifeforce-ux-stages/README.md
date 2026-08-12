# LifeForce — UX assessment by stage

**Artifact:** `lifeforce (share)` → page `final` → `screens` → 17 frames
**Grounded in:** `_brief.md` (Truist benefits site, verified 2026-07-24 — the authoritative process) and `_decisions.md` (D13, D14, D19, D20)
**Scope:** UX only. Visual treatment parked.
**Date:** 2026-08-06 · **Revised** after checking claims against documentation

> **Method note.** The first version of this assessment was derived from the screens. That was backwards. Re-grounded in the documentation, one headline recommendation was **wrong** and three others turned out to be **decisions already made and not yet implemented**. Both corrections are marked below.

---

## What the documentation actually says

The **Truist benefits site** (`benefits.truist.com/well-being/lifeforce/lifeforce-participation`, captured in `_brief.md` as "Authoritative process") defines the participation flow as six steps:

1. Set up CarePlus account
2. Program acknowledgment
3. Lab work
4. **Annual** Health Assessment
5. Attend the Peak Health nurse appointment
6. **Prepare for next appointments — cadence set by phase**

Plus these documented mechanics:

| Rule | Source |
|---|---|
| HA recurs **yearly**, due the last day of the month of your first appointment that year | Truist site |
| Labs recur — **biennial** per D'Arcy, **per appointment cycle** per Truist site (**conflict, unresolved**; designing to biennial) | `_brief.md`, D19 conflict #1 |
| Appointment cadence **set by phase**; notified ~1 month prior | Truist site |
| On renewal: **no re-register, no re-acknowledge** — just redo the assessment (and labs every other year) | D'Arcy sync |
| Phase can go **DOWN** — miss labs or a visit and you drop to Phase 1 | Truist site |
| Brief's state #5 is literally named **"Recurring annual state"** | `_brief.md` |

**So the funnel-becomes-a-loop shape is documented, not inferred** — step 6 of the official flow is the loop, and the brief already names the recurring state.

The documentation is also **more precise than my original framing**. It isn't that the whole funnel loops. It's that:

- **Steps 1–2 (register, acknowledge) happen exactly once, ever.**
- **Steps 3–4 (labs, HA) recur.**
- **Step 5 (appointment) recurs at a phase-set cadence.**

The renewal path re-enters at **step 3, not step 1**. That's the actual documented shape, and it's sharper than "a funnel that becomes a loop."

---

## The one finding this produces that is genuinely new

**The enrollment card asserts something the program contradicts.**

Every post-enrollment screen shows `ENROLLMENT — Complete · 4/4` with **✓ Health Assessment** and **✓ Complete lab work**. Per the documentation, neither of those is ever permanently complete — the HA is due again every year and labs recur. Only steps 1 and 2 are genuinely one-time.

So the card is not just mislabelled on screen 11; **it models all four steps as permanent when the documentation says only half of them are.** Screen 11's "Health Assessment is overdue" sitting above "✓ Health Assessment" is the visible symptom of that.

**Recommend:** split the two groups explicitly — *"Getting started"* (steps 1–2, completes once and stays complete) and *"Your yearly requirements"* (labs + HA, with next-due dates). Screen 09 already models the right language: *"Your **annual** Health Assessment is due by Jun 30."* Note "annual" appears **once** across all 17 screens.

---

## Correction — my "surface the credit amount" recommendation was wrong

I called zero dollar amounts across 13 screens the biggest UX gap in the set. **That contradicts a documented decision.**

> **D19:** "Credit banner '$[X] of $[Y] earned' as Status hero → **Don't surface $ amounts in-app** (breakdown = PDF); demote/remove the $ hero, promote the notification/action."
>
> **D19 conflict #2, design-safe resolution:** "**surface no amounts in-app**; describe earning qualitatively; point to the PDF."

The absent number is deliberate. The calculator link is the documented-correct pattern, and the reward mechanic has three conflicting framings (prototype "200 points", Truist "medical credit per pay period", D'Arcy "payroll dollars per nurse visit") which is precisely why the decision was to state none of them in-app.

**Withdrawn.** What remains legitimate is much narrower: D19 says describe earning *qualitatively*, and the phase card's "sets your medical credit each pay period" already does that. There is no gap here.

---

## Already decided, not yet built — not new findings

Three things I raised are pre-existing decisions awaiting implementation. Worth presenting as *"we decided this, it hasn't landed"* rather than as new analysis:

| Item | Documented as | Status in the current set |
|---|---|---|
| Collapse completed steps to a compact checklist | **D19** — "Completed steps as full cards → **compact checklist** (small checkmarks)" | Not done — still full cards, all 9 post-enrollment screens |
| Remove the button from Progress-locked | **D19** — "No extra button needed — redirect to enrollment tab is fine" | Not done — still has "Go to Status" |
| Empty programs/handouts sections disappear entirely | **D19** — "those sections **disappear entirely** when empty" | Needs checking on the Progress screens |

---

## The segmented control — reframed

My recommendation to hide the control during enrollment is **an IA change**, and IA changes here are governed:

> **D13:** "**v4 collapses the two-tab split — an IA change requiring D'Arcy + McGriff + Ren sign-off** (per design-system escalation rules), not a silent change." v3 shipped for the Aug window precisely because it carries **no IA risk**; v4 is held as North Star.

So this isn't a new idea — it's a weaker version of v4's tab collapse, already on the table and already gated. The documented position for *this* release is: the tab exists, shows a zero state, and redirects — **with no extra button**.

**What I'd actually put to stakeholders:**

1. **In scope now:** delete the "Go to Status" button. That's D19, unimplemented.
2. **Evidence for the v4 conversation:** the control is on all 12 status screens; Progress unlocks only after the nurse visit (screen 06), so it is inert for screens 01–05; and screens 06, 07 and 12 already carry a "Go to My Progress" button, so once it works there's a second path anyway. Dead when it doesn't work, redundant when it does.
3. **Not a silent change.** Needs D'Arcy + McGriff + Ren.

---

## Stage model, mapped to the documented flow

| Stage | Documented steps | Screens |
|---|---|---|
| **0 · Intro / About + opt-in** | Pre-step. D19: *"intro/About page must explain all program rules"* | **none — undesigned** |
| **1 · Getting set up** | Steps 1–4 | 01, 02, 03, Enrollment detail |
| **2 · Waiting on the appointment** | Step 5. *First appointment can't be scheduled until all steps complete* | 04, 05 |
| **3 · Phase revealed / earning** | Post-step-5. Phase revealed for the first time | 06, 07, 12 |
| **4 · The recurring cycle** | **Step 6** — re-enters at step 3 | 08, 09, 10, 11 |
| *Parallel* | Progress tab | locked, populated ×2, full results |

Your four stages hold against the documentation. Stage 4 is the addition, and it is step 6 of the official flow rather than an inference.

---

## Documented states that are still undesigned

Verified absent from all 17 screens by text search:

| Missing state | Documented in | Occurrences found |
|---|---|---|
| **Intro / About page** explaining program rules | D19 "not-yet-designed states" | 0 (only an "About LifeForce" row that links away) |
| **"Submitted / awaiting Peak confirmation"** for steps 2–4 | D19 — *steps only flip to complete when Peak sends a confirmation file* | **0** |
| **"Can't schedule until all steps complete"** | D'Arcy sync | **0** |
| **Dependent invite "email sent" confirmation** | D19 — *"no send-confirmation shown today (gap)"* | **0** |

The awaiting-confirmation state is the most consequential: the documentation says steps 2–4 only complete when Peak sends a file, so there is a real interval where the member has done the thing and the app still shows it incomplete. Nothing in the set covers that interval.

---

## Remaining UX findings, re-checked against documentation

| Sev | Finding | Documentation check |
|---|---|---|
| 3 | Enrollment card models recurring steps as permanently complete | **Contradicts the documented cadence** — stands, strengthened |
| 2 | Screen 10 "missed visit — rebook" has no inline rebooking | Truist site: reschedule within 60 days or drop to Phase 1. Consequence isn't stated on the screen — stands |
| 2 | "See all recommendations & handouts" appears twice on one Progress screen | No documentation bearing — stands |
| 2 | Phase drop consequence only appears once the member is already at risk | Truist site documents the rules; D19 says the intro page should explain them — stands, belongs to stage 0 |
| — | ~~"Program Acknowledgment" is internal vocabulary~~ | **Weakened.** It is the official Truist step name. Still opaque to members, but changing it needs McGriff's agreement, not ours |
| — | ~~Zero dollar amounts~~ | **Withdrawn** — D19 |

---

## Suggested stakeholder narrative

1. **What it was** — a Bootstrap-styled third-party module bolted into CarePlus.
2. **What they asked for** — a reskin. Content 1:1, no re-conceptualization (`_brief.md`).
3. **What the documentation says** — a six-step program that ends in a recurring cycle, with a phase that can go down.
4. **What I found** — the design models the program as a one-time funnel. Two of the four "enrollment" steps actually recur, so the enrollment card tells members a task is permanently done when the program will ask for it again. Four documented states have never been designed, including the intro page that is supposed to explain all of this.
5. **What I recommend** — split one-time from recurring in the vocabulary; design the four missing states; implement the three D19 decisions that haven't landed.
6. **What needs sign-off** — the tab collapse (D13: D'Arcy + McGriff + Ren), and the labs-cadence conflict (D19 #1, still open).

The strongest slide is the six documented steps with **1–2 marked "once"** and **3–5 marked "repeats"** — because it explains the screen-11 contradiction, the missing awaiting-confirmation state, and the need for an intro page as one root cause instead of three defects.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Initial assessment, derived from screens. |
| 2026-08-06 | **Re-grounded in `_brief.md` + `_decisions.md`.** Withdrew the "surface the credit amount" recommendation (contradicts D19). Reclassified three findings as unimplemented decisions. Reframed the tab recommendation as gated by D13. Added four documented-but-undesigned states, verified absent. |
