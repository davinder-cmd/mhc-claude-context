# LifeForce — UX Audit of the Current Product
_For the Kim conversation · Aug 12 2026 · Davinder_

**Loaded:** `reference/review/_kit.md` (ux-heuristics, ux-laws, accessibility, art-direction), `projects/feature-lifeforce/_brief.md`, current-product screens (Dashboard/enrollment + Points page).
**Artifact type:** screenshots of the live product → **conformance N/A** (our tokens aren't in this build), **accessibility partial** (contrast/structure by inspection only), **UX + art-direction fully apply.** Instruments reported side by side, never averaged.

---

## 1 · The frame for tomorrow — three altitudes

The disagreement in the room isn't about taste. It's about **which altitude the work is at.** Name the altitudes and the conversation gets easy.

| | **Visual reskin** | **UX refresh + tweaks** | **UX overhaul** |
|---|---|---|---|
| **Whose** | Original ticket · where Kim seems to be | D'Arcy's V3 (high-level) | This work |
| **Changes** | Color, type, components | + structure, unified in-app 2-tab | + the model itself |
| **Fixes** | Art direction (1 of 4 instruments) | Art direction + some structure | The experience end-to-end |
| **Leaves broken** | Steps-as-tabs · two entry points · muddled reward · absent phase · no progress · content walls | Many states, the reward/phase/deadline story, edge cases | — |

**Opening line for Kim:** *"I measured the current experience against the standard UX instruments. There are ~11 real issues — and only a quarter of them are visual. A reskin makes LifeForce look like us, but the member is still confused in exactly the same ways. The work I'm proposing fixes the experience — and delivers the visual refresh as a byproduct."*

That reframes "make it prettier" into "make it *work*, and it'll also be prettier" — without dismissing the visual ask (it's real; it's just one of four things).

---

## 2 · What the program has going for it (say this first)

- **A real incentive** — medical credit per pay period, plus payroll points. Money is the strongest motivator most wellness apps lack.
- **Human, high-touch** — a registered nurse visit. Differentiated and sticky.
- **A built-in engagement engine** — the Phase model gives an ongoing reason to return, not a one-and-done.
- **Clear qualification path** — four discrete steps; the shape is simple.
- **Trusted rails** — Truist / Peak Health branding and process.

The program is strong. The **experience** is where the value leaks out.

## 3 · Where it's structurally hard (what the UX has to carry)

- **The reward mechanic is genuinely complex** — points *and* per-pay-period credit *and* phase-set amounts *and* hard deadlines. Someone has to absorb that complexity (Tesler's Law). Today it's dumped on the member.
- **Phase can go *down*** — miss labs or an appointment and you drop to Phase 1. That's a loss-aversion story the current UI tells nowhere.
- **Long time-to-value** — ~20 business days to the first visit. The gap between effort and payoff needs bridging.
- **External dependencies** — scheduling and data come from Peak; several states ("submitted, awaiting confirmation") have no design today.

---

## 4 · The audit — instruments side by side

### UX heuristics — 5 × sev-3, 5 × sev-2, 1 × sev-1

| Sev | Heuristic | Finding | Why it matters / the fix |
|---|---|---|---|
| **3** | H4 Consistency · Jakob's | **Steps rendered as tabs.** The 4 "Step 1–4" use pill/tab styling — parallel, pick-one — for a *sequential* process. | Tabs say "jump around independently"; steps say "do these in order." Wrong mental model. → a real numbered checklist with done/current/to-do status. |
| **3** | H4 Consistency · IA | **Two entry points for one action.** The "Points" page and the "Dashboard" are both enrollment surfaces, with duplicated copy and buttons that link to *each other*. | The member can't tell where the real action is. → one enrollment surface; fold Points in. |
| **3** | Norman: conceptual model | **The muddled reward story.** "200 Points" + "monthly medical credits" + "earn up to annually" (truncated) + "20 business days" collide. | The member cannot say, in their own words, what they get or when — the most-failed heuristic. → one clear earning story; per program truth, drop the "200 points" framing and $ amounts in-app. |
| **3** | H1 Status · H8 Minimalist | **Broken primary headline.** *"Enroll today, earn up to annually."* is grammatically incomplete — the dollar amount was stripped, leaving an empty promise on the most prominent line. | Reads as a bug on the H1. → a real, complete value statement. |
| **3** | Norman: conceptual model · H6 | **The Phase concept is absent.** The single most important idea — *your health Phase sets your credit* — appears nowhere in enrollment. | The member enrolls without knowing what they're working toward. → introduce Phase up front; make it the persistent primary once active. |
| **2** | Goal-gradient · Zeigarnik | **No progress / motivation model.** After Step 1 there's no "1 of 4 done, here's what's next, here's the payoff." | Multi-step onboarding lives or dies on visible momentum. → forward-counting progress + payoff on the action. |
| **2** | Von Restorff · Hick's | **Competing CTAs.** "Enroll & Earn 200 Points," "Enrollment Guide," "Peak Health Portal," "LifeForce Dashboard" — similar weight, nothing wins. | "What do I do now?" is unanswered. → one primary next action per screen. |
| **2** | H8 Minimalist · Miller's | **Content walls.** Dense prose blocks, no chunking, no scan hierarchy. | Fails the billboard/squint test; readability is the non-negotiable. → chunk, cut, lead with the point. |
| **2** | H9 Error recovery | **Deadlines & consequences absent.** The "protect your standing" dimension (miss labs → Phase 1) is surfaced nowhere. | A strong loss-aversion motivator ignored, and a real risk the member isn't warned about. → tone-scaled deadline notices/alerts. |
| **2** | H10 Help | **Guidance lives in a PDF.** "Review the LifeForce Enrollment Guide" → external document. | Help should be at the point of confusion, not a separate destination. → contextual, inline. |
| **1** | Norman: signifier | **Inert boxes look interactive.** The "Step 1… Completed" bordered box reads as a field but isn't. | Minor false affordance. → status styling ≠ input styling. |

### UX laws — the ones this violates
**Jakob's** (tabs where a checklist is expected) · **Hick's + Von Restorff** (competing CTAs, no primary) · **Goal-gradient + Zeigarnik** (no progress, incomplete steps not kept salient) · **Miller's / Cognitive Load** (unchunked prose) · **Tesler's** (program complexity pushed onto the member) · **Peak-End** (enrollment ends at a form, no quick win or clear next beat) · **Proximity/Similarity** (contacts/guide/portal scattered; links read as body text).

### Accessibility — partial (screenshots), **not a clean pass — assess in build**
Inspectable now: muted gray sidebar section labels ("Truist Benefits & Well-being," "My Account") look **below the 4.5:1 floor** — verify. Heading structure unclear — multiple competing bold lines, no obvious single H1. Step status appears carried largely by styling; confirm it's not color/shape alone and is announced to AT. Contrast, focus order, target sizes, and text-zoom survival **cannot be measured from an image** — flag for the build, don't claim a pass.

### Art direction — genuinely weak (and this is the part a reskin *does* fix)
Default/Bootstrap posture: flat blue buttons, pill "tabs," plain bordered boxes, undifferentiated type. Emphasis rank is flat (nothing wins), tonal structure is generic, brand/partner survivability is nil — it reads, in the brief's own words, as "a bolted-on third-party module." **This is real and worth fixing — it's just 1 of 4 instruments.** Validate Kim's instinct here; then show it's necessary, not sufficient.

---

## 5 · Synthesis — why a reskin isn't enough

Of the ~11 UX findings, **exactly one** (art direction) is what a visual refresh addresses. The other ten — steps-as-tabs, two entry points, the muddled reward, the absent phase, no progress, competing CTAs, content walls, absent deadlines, PDF-only help, false affordances — **survive a reskin untouched.** You'd ship a better-looking version of the same confusion.

The through-line: **the current product treats enrollment as a form to fill, not a journey to complete.** That's a model problem, and models don't get fixed with color and type.

## 6 · Highest-leverage fix (name one)

**Re-model enrollment from "tabs + prose + competing buttons" into one guided checklist with a single next action and a visible payoff.** It resolves four findings at once — steps-as-tabs (H4/Jakob), competing CTAs (Von Restorff/Hick), no-progress (goal-gradient), content-walls (Miller) — and it's precisely the thing a reskin can't do.

_(Highest-leverage **conceptual** fix for the whole program: make the **Phase → credit** relationship the spine — introduced at enrollment, the persistent primary once active. Everything else hangs off it.)_

## 7 · How to open with Kim (say this)

1. "The program is strong — real money, a nurse, an engagement engine. The experience is where value leaks."
2. "I audited the current build against standard UX instruments. ~11 issues; only one is visual."
3. "A reskin makes it look like us but leaves the member confused the same ways. Here's the overhaul that fixes the experience — and gives you the visual refresh for free."
4. Then walk 2–3 of the sev-3s on the real screen (steps-as-tabs · two entry points · muddled reward). Seeing them on the live product is the whole argument.
