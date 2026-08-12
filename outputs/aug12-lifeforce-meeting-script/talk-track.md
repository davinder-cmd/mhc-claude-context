# LifeForce — talk track (Aug 12)
_Today is about the **UX updates**. The audit and the UX journey are **reference**, not the deep-dive. Keep it on experience + clarity._

## 0 · A note on wording (for me, before I open my mouth)
We ship a product literally called **Wellbeing Journey**, so I don't use the bare word "journey."
- **Experience** = the thing itself (the LifeForce member experience).
- **Stages** = the parts of that experience — what I actually walk through.
- **UX journey** = the *document* that lays those stages out end to end. It's a **presentation mechanism**, not the experience. Always say "**UX journey**," never just "journey."

So in the room: I walk the **stages**; the **UX journey** is the map I drew them on.

## 1 · Where this started — the ask vs. what it became (45 sec)
- **The ticket (DEM-35) asked for one thing: a look-and-feel update** — bring LifeForce in line with our standard product (Journeys, DCPs). It was explicit about the non-goal, too: **not a total overhaul or re-conceptualization**, and on a short timeline optimized for the tech lead to configure. D'Arcy also floated fitting it into our **Special Programs** pattern (the DCP offshoot).
- **Then D'Arcy shared a design document — her V3 — that was effectively an overhaul.** It moves LifeForce off the standalone Peak-Health dashboard into a unified, re-structured two-tab experience with new IA. That's a re-conceptualization, not a reskin.
- **No drama in that** — it's a stronger direction, and **McGriff has already been shown it (Jul 17) and is aligned.** I'm just naming it plainly so scope is clear: the effective ask had moved past "look and feel" before this reached me. So I built to the **intent everyone's already aligned on**, not the narrow wording of the ticket.

## 2 · What changed once I dug in
- **Special Programs doesn't actually fit LifeForce.** It's not a care path — it's a **dashboard** about *where the member stands* at each moment. So I didn't force it into that pattern.
- **With the scope already at "refactor," I treated D'Arcy's direction as the real brief** — and structured the work around it, rather than around the ticket's original wording.

## 3 · What I did
I came in knowing almost nothing about LifeForce beyond the current screens. So I spent the time actually **understanding how the program works** — the documentation, the live product, and all the use cases D'Arcy was fleshing out — and tied a bow on it. I accounted for the various states, but the priority throughout was one thing: **does the member always know what's going on?**

## 4 · The structure — stages on one surface
Once it clicked, the clearest model was to break the experience into **stages**, and for each one ask *"what does the member need to know here, and what do we have to communicate clearly?"* The **UX journey** is just how I laid those stages out so you can see the whole path at once.

That's why this **isn't structured like a DCP or a Special Program — it doesn't fit.** It's a dashboard with three parts:
1. **Enrollment status** — the steps to qualify.
2. **Appointment status** — the visit being booked, then scheduled.
3. **Phase status** — once they've met the nurse, their phase and what it means for their credit.

Same surface, three parts — the member always knows which one they're in.

## 5 · What I'll show today
- **The focus: the UX updates** — the redesigned stages and the card/component system behind them. That's what I want your eyes and your feedback on.
- **As reference, not a walk-every-screen:** the **UX audit** of today's experience (where it's strong, where it leaks), and the **UX journey** that lays the stages end to end. I'll point at them so you can see *where a decision came from* — I won't dig deep.
- **One ask:** keep it on the **experience and clarity** — does the member always know where they are and what's next? The visuals are in there, but they're not the point today; we can add or swap visual pieces anytime.

## 6 · What you'll walk away with
- All of this lands as **documentation + designs** you keep — nothing locked in my head.
- The **Figma designs carry notes and comments inline** — the rationale on each stage, and **open questions flagged right on the artboards** so every unresolved decision has a home instead of living in a thread.
- A **responsive HTML/CSS reference build** so **Ren can build from it directly** — plain HTML + CSS, no framework. It's a **v1**; I may take one more pass on the responsive behavior, but it's a solid starting point for eng today.

## 7 · What I referenced (so the work is grounded, not opinion)
Beyond the **live LifeForce product** and **D'Arcy's V3 design**, I validated against:
- **Truist LifeForce Dashboard Requirements** doc + the **Truist benefits site** — the authoritative *program mechanics* (what the program actually requires), separate from any UI.
- **MHC foundations, applied verbatim** — Type System v3, the Material-3 responsive grid, spacing + color tokens. This is why it already looks like our product.
- **Mobbin**, for outside-in pattern reference — appointment cards, invite-sent, phase/level visualization, "being-scheduled" states. Awareness, not an anchor.
- Decisions tracked in `_decisions.md`; open items in the open-questions log — both come with the handoff.

## 8 · If it comes up — companion notes (backup, not for the walk)
- **UX journey walkthrough** — stage-by-stage, with the decision behind each screen → `aug11-lifeforce-journey-deck/OUTLINE.md`
- **D'Arcy sync notes** — materials referenced, gaps I built, and the decisions we still need → `aug10-darcy-sync-notes/NOTES.md`
- **Open-questions log** → `jul28-lifeforce-open-questions/OPEN-QUESTIONS.md`
- **Recommendations beyond the reskin** — program-accuracy fixes + the deadline/"keep your standing" UX → `jul24-lifeforce-recommendations/RECOMMENDATIONS.md`
- **Product vs. D'Arcy's V3** — provenance, if anyone asks "is this real or a design choice?" → `jul27-lifeforce-requirements-refresher/PRODUCT-vs-DARCY.md`

**Decisions we still need (D'Arcy / Ren / Peak):** appointment data + calendar/reminder feasibility · confirm **telehealth** (→ no location/directions) · phase-**reason** data (does Peak send *why*, or only the integer?) · credit denomination (per-pay-period vs annual) · labs cadence · live date.
