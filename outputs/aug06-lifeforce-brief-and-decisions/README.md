# LifeForce Dashboard — Brief & Decisions

**Jira:** [DEM-35](https://mobilehealthc.atlassian.net/browse/DEM-35) · **Client:** McGriff / Truist
**Design:** Jul 21 – Jul 31 2026 · **Config by TL:** Aug 1 – Aug 31 · **QA:** late Aug / early Sept
**Author:** Davinder Rehal · **Date:** 2026-08-06

Written for someone who wasn't in the room. Full decision log: [`projects/feature-lifeforce/_decisions.md`](../../projects/feature-lifeforce/_decisions.md) (41 entries). This is the readable subset with the reasoning.

---

## 1 · What it was

Truist's LifeForce is a custom wellness program wired to Peak Health — nurse visits, lab work, and medical-credit incentives paid through payroll. Its in-app dashboard used default Bootstrap styling: flat blue buttons, plain pill tabs, a grey results table, an unstyled link wall. It read as a bolted-on third-party module rather than part of Mobile Health.

## 2 · What was asked for

Ryan Webster (McGriff) asked us to bring the look and feel in line with our standard product.

**It is a reskin.** Content stays 1:1. It is explicitly *not* a re-conceptualization or a rebuild — the timeline is short, and the whole thing must stay reconfigurable by a CS Tech Lead rather than re-engineered. Targeted UX fixes that improve clarity without changing scope are allowed (D3).

**Commercially:** ~$20K implementation plus ~$0.18 PMPM ongoing.

## 3 · What the documentation says

We treated the **Truist benefits site** as the source of truth for program mechanics, not the existing designs. It corrected several assumptions.

The documented participation flow is **six steps**:

| # | Step | Recurs? |
|---|---|---|
| 1 | Set up CarePlus account | **Once, ever** |
| 2 | Program acknowledgment | **Once, ever** |
| 3 | Lab work | Recurs |
| 4 | Annual Health Assessment | **Yearly** |
| 5 | Attend the Peak Health nurse appointment | Recurs at a phase-set cadence |
| 6 | **Prepare for next appointments** | This *is* the recurring cycle |

Other mechanics that shaped the design:

- **Reward is medical credit per pay period** (semi-monthly), not annual — and **no dollar amounts are surfaced in-app** (D19). The breakdown lives in a PDF and a benefits calculator.
- **Phase can go down.** Miss labs, or miss an appointment without rescheduling within 60 days, and you drop to Phase 1. Phase is a health state tied to biometrics — not a ladder. Members may never reach Phase 5.
- **On renewal there is no re-register and no re-acknowledge.** You redo the assessment, and labs every other cycle.

## 4 · What I found

**The design models the program as a one-time funnel. The documentation describes a funnel that becomes a loop.**

Steps 1–2 complete once and stay complete. Steps 3–5 recur. Renewal re-enters at **step 3, not step 1**. The current design does not distinguish them, and that single omission produces three visible problems:

1. **A screen that contradicts itself.** Screen 11 shows "Health Assessment is overdue" directly above a checklist reading "Complete · 4/4 ✓ Health Assessment."
2. **A missing state.** Nothing explains what happens next year — the member first learns their phase can drop at the moment it is already at risk.
3. **A permanently wrong assertion.** "Complete · 4/4" claims four permanent completions when two of them expire annually.

**Six screens exist in D'Arcy's V3 but were never carried into the Figma set.** Not a design gap — a carry-forward gap. The work is done.

| In V3 (`exports/`) | In Figma? |
|---|---|
| About / opt-in page (`01-overview-unenrolled`) | **No** |
| Four step detail pages (`12`–`15`) | **No** — Figma has one generic `Enrollment — detail` |
| Home card entry point (`16-home`) | **No** |

It runs both ways: **Figma extends V3** on the recurring cycle — V3 has only HA-due, Figma adds labs-due, missed-visit and overdue-at-risk. The two sets are complementary.

**Three states are genuinely undesigned in both:** "submitted — awaiting Peak confirmation" (the interval where the member has done the thing and the app still says they haven't), "can't schedule until all steps complete", and the dependent invite "email sent" confirmation.

**Two problems are inherited, not introduced** — visible in the current production dashboard:

- **The two-tab split already exists.** Today's dashboard has `Enrollment` / `My Progress/Goals`. We are changing the container, not the IA. That is a point in our favour: members keep the structure they know.
- **The complete-vs-outstanding contradiction pre-dates us.** The current enrolled screen shows **"LifeForce Phase: 5"** beside **"Complete LifeForce Enrollment"** — a member at the top phase being told to finish enrolling. Same defect class as D38. We inherited it; we should fix it.

**The decision log is ahead of the artifact.** Four previously-agreed changes have not landed: three from D19 (compact checklist, no button on Progress-locked, empty sections disappear) and the checklist rename from D22. Worth a process conversation separate from the design one.

**Accessibility.** 64 text nodes measured below the WCAG AA contrast floor against their real backgrounds. The main cause is brand `slate` `#6E7A7D` at 4.43:1 — which the brand guidelines designate as *"body text on light."* That is a brand-level defect. Fixed in the working file; escalated for the palette.

---

## 5 · Design rationale — why these calls

This is the reasoning behind the four decisions most likely to be questioned.

### Why the step list gets the focus at the beginning

The member's real goal is not an abstract "enrolled" state — it is **reaching the nurse visit**, because that is when medical credit starts. Everything before it is a gate.

Three things follow from that:

- **The headline counts down to the visit, not up to a percentage.** "3 steps until Peak Health books your first visit" states the payoff. "1 of 4 done" states our internal bookkeeping.
- **It sidesteps a real problem: step 1 is always pre-completed.** Every member has a CarePlus account before they start, so a progress meter opens at 25% for something they never did. Counting down avoids crediting them for nothing.
- **The word "enroll" was doing two jobs.** It meant both opting into LifeForce and finishing the four-step Peak qualification sequence — and both appeared on one screen with the same 1-of-4 count, reading as two trackers for one thing. The sequence was renamed **"Getting started"** and the reserved sense of "enroll" is opting in. *(D22 — note: this rename has not yet landed in the final set; the label still reads ENROLLMENT on 9 screens.)*

Once the visit happens, the same list should **stop being the focus** — D19 already decided completed steps reduce to a compact checklist rather than full cards. It currently occupies the same real estate at month 11 as it did on day 1.

### Why the segmented control doesn't appear until there's progress

The `Status | My Progress` control sits on every status screen, but My Progress holds nothing until the first nurse visit. Across the whole Getting-started and scheduling period, half the feature's navigation is inert — and tapping it lands on a locked screen whose only action returns you to where you started.

We looked for a requirement to keep it. There isn't one:

- **The program documentation is silent.** The Truist benefits site defines the six steps, the cadences and the phase logic. Nothing about tabs or a progress surface.
- **Production doesn't do it.** Today's dashboard shows **no tabs at all when unenrolled**; they appear once a member opts in. The locked-tab-for-unenrolled state has no precedent in the live product.
- **It traces to one source** — D'Arcy's V3 concept. And his own note says *"redirect back to the enrollment tab is fine"*, which is not a defence of a locked screen.

So: **the control appears when My Progress has something in it.** Before that, Status is the whole screen. The promise it was carrying — *"your lab results, goals and nurse guidance appear here after your first visit"* — moves onto Status, where the member already is and where it can actually motivate.

**This is not the v4 tab collapse.** D13 gates that behind D'Arcy, McGriff and Ren sign-off. The two-tab split survives intact for enrolled members past their first visit; this is conditional rendering of the control, a strictly smaller change. It originates in D'Arcy's concept, so it gets raised with him on return — named, not slipped in.

### Why no dollar amounts appear anywhere

This looks like an omission and is a deliberate decision. Three sources describe the reward differently — the prototype says "200 points", the Truist site says "medical credit per pay period", D'Arcy says "payroll dollars per nurse visit." Rather than pick one and be wrong in-app, **we state no amounts and point to the calculator and PDF**, describing earning qualitatively instead. *(D19)*

This also follows from a second principle: post-enrollment, the **notification and action area is the page's hero** — the appointment, the dependent nudge, the HA-due warning — **not** a credit banner. Money is the motivation; the next action is the job. *(D36)*

### Why progression is de-emphasised

Phase is tied to biometrics and health conditions, not to task completion. Members may never reach Phase 5, and phase can go **down**. So the UI deliberately avoids climb metaphors, goal-gradient framing and progress bars for phase — the treatment is five small dots. Over-emphasising a ladder most members will never finish sets an expectation the program cannot honour. *(D19, D35)*

---

## 6 · Decision log — the load-bearing subset

Full log in [`_decisions.md`](../../projects/feature-lifeforce/_decisions.md). These are the 12 that shaped what you're looking at.

| # | Decision | Why |
|---|---|---|
| D3 | Three targeted UX fixes allowed inside the reskin | Scope discipline — clarity fixes yes, re-conceptualization no |
| D6 | Scope is a lifecycle, not two screens | The reskin spans the member's full journey, ~17 states |
| D7 | Content strategy: push down, not out | McGriff over-communicates; step detail pages are the pressure valve |
| D13 | Ship v3 for August; hold v4 as North Star | v3 is a clarity win with no IA risk; v4's tab collapse needs sign-off |
| D14 | Truist benefits site corrects the content model | Documentation over inference — reward is per-pay-period, phase can drop |
| D19 | D'Arcy sync reframes the product | No $ in-app; notification area is the hero; compact checklist; phase is not a ladder |
| D22 | "Enrollment" → "Getting started" | The word did two jobs and collided on one screen |
| D35 | Phase card reflects health, no $, no climb | Phase is a health state, not a task ladder |
| D36 | Post-enrollment hierarchy: action primary, phase secondary | The next action is the job; money is the motivation |
| **D38** | **Step list must separate one-time from recurring steps** | **Only 2 of 4 steps are permanent; the card asserts otherwise** |
| **D46** | **Segmented control renders only when My Progress has content** | **No program requirement, no production precedent — it traces to one concept file** |
| **D40** | **Six V3 screens never carried into Figma** | **The About page and four step details exist — they just didn't come across** |
| **D41** | **Brand `slate` retired as a text colour** | **4.43:1 on white — below the AA floor, on 55 nodes** |

---

## 7 · What needs a decision from someone else

| Item | Owner | Why it's blocked |
|---|---|---|
| **Labs cadence** — biennial (D'Arcy) vs per appointment cycle (Truist site) | **D'Arcy ↔ Truist** | Parked. Low visual impact — the grouping in D38 holds either way; only due-date arithmetic changes |
| **Tab collapse during Getting started** | D'Arcy + McGriff + Ren | IA change, governed by D13 |
| **Does earning reset annually?** | D'Arcy | Open — affects what the intro page must explain |
| **`slate` retirement across the brand** | Brand owner | Implications beyond LifeForce |
| **Go-live date** — ticket says 1/1/26, almost certainly 1/1/2027 | Ryan Webster | Flagged as ambiguous since the brief |
| **Does "no $ in-app" apply to the About page?** | **D'Arcy, on his return** | D19 says no amounts in-app *and* says About must explain all program rules. About is pre-enrollment explanation, not the dashboard — arguably the one screen where a figure belongs |
| **Real $ values and calculator logic** | Requirements | Placeholders throughout; needed before handoff |

---

## 8 · Recommended order of work

1. **Land the four decided-but-unbuilt changes** — D19 ×3 and D22's rename. Already agreed; cheapest wins available.
2. **Carry the About page across from V3**, with three corrections: drop "Enroll & earn 200 points", resolve the $ question above, and fix "monthly" → "semi-monthly" medical credit.
3. **Carry the four step detail pages across.**
4. **Apply D38's grouping** — split "Getting started" from "Your yearly requirements."
5. **Add the "See all results" link** so the 12-measure screen is reachable, and mark range state on the biometric tiles.
6. **Design the awaiting-confirmation state** — the only genuinely new screen, and the one that actively misinforms.
7. **Then** visual treatment, as a separate pass.

Items 1–5 are carry-forward or fixes inside existing scope. Item 6 is the only new design.

**Large form (Web/Angular) is paused** pending the HTML output, and is deliberately not in this list. It remains a named DEM-35 deliverable and will need its own window.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Initial. Consolidates `_brief.md` and the 41-entry decision log into a stakeholder-readable brief with design rationale. |
