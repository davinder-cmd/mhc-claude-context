# Engagement Loop — Best Practices (Research, July 2026)

> Evidence-based patterns for a repeatable education/health engagement loop, mapped to the EBB four stages.
> Source: deep-research pass (6 angles, 26 sources, 122 claims → 22 confirmed via 3-vote adversarial verification).
> Confidence tiers noted. Peer-reviewed = high; vendor/blog = medium/directional.

> **Read alongside `reference/engagement-behavior-experts.md`** — the expert reference tempers this doc.
> Its 2026 evidence check finds **gamification is a marginal driver in health and may HURT retention in
> mental-health apps** (JAMA Psychiatry Nov 2025); **reminders + human/coach contact are the proven retainers.**
> Primary lens for EBB = **Bucher / Self-Determination Theory** (autonomy-competence-relatedness), with the $100
> as an honest accelerant, NOT the durable motor. Both this research and the expert doc converge on the
> **crowding-out** risk — the #1 EBB design hazard. Use the mechanics below (goal-gradient/progress visibility)
> for the *path*; use SDT/Bucher/Michie for the *motivation*.

## The one big idea

**Goal-gradient effect** — people accelerate effort as they near a reward, and *manufacturing perceived progress* lifts
completion for identical real effort. This is the empirical backbone for showing progress-to-reward at every stage.
- Nunes & Drèze (2006) car-wash: pre-filling 2 of 10 stamps (same 8 washes required) raised completion **19% → 34%**, and endowed customers finished **faster**. [high]
- Kivetz et al. (2006, JMR): a **steeper** goal-gradient predicts **better retention and faster re-engagement after the reward** — the exact mechanism a "complete → reward → next" loop should exploit. Post-reward there's a dip, then re-acceleration toward the next goal. [high, correlational]

**Application:** pre-fill/endow the first step of each DCP, show "Session X of 7 · %", let the bar visibly steepen near completion, and at the payout moment immediately present the next program with its own progress-to-reward.

## Stage 1 — Getting the user IN (activation)

- **Personalization quiz creates "perceived fit" and more than doubled course starts** at Headspace (**31% → 63%**); a quiz beat showing the *identical* recommended course by +7.6pts. [medium — vendor A/B; caveat below]
- **Hook model + low friction** (Duolingo): mascot push (trigger) → ~3-min lesson (action) → variable reward → streak (investment). Short, clearly-bounded first sessions raise start probability. [medium]
- **Reward/progress callout here:** state the reward up-front at the entry point ("Earn $100 for completing this program") and show the path is short/finishable.

## Stage 2 — Driving to COMPLETION

- **Make progress visible and concrete:** "Session X of N", % complete, path maps, sequential lock/unlock. Goal-gradient says the bar should feel like it accelerates near the end. [high foundation / medium UI]
- **Deliver the reward signal tightly coupled to the behavior** — Duolingo shows XP *before the user closes the lesson screen*. [medium]
- **Reward/progress callout:** always show distance-to-reward ("2 sessions left to earn $100"), not just distance-traveled.

## Stage 3 — Getting them to the NEXT one (the hinge)

- **Celebration = the re-acceleration moment.** Kivetz's post-reward re-acceleration means the completion/celebration screen is the highest-momentum point to present the next program. [high mechanism]
- Celebrate **completion** (payout), not start; then surface a **"what's next"** affordance with the next program's progress-to-reward already visible.
- **Reward/progress callout:** the celebration should say what was *earned* ("You earned $100 — 1 of 5 this year") AND tee the next ("Start your next — earn $100 more"), tying the whole loop to reward in one screen.

## Stage 4 — REPEATING the loop (retention)

- **Streaks/daily goals** work via loss aversion but **can decouple from the real goal** — users chase the streak, not the health behavior (Silverman & Barasch 2023, 7 studies). Anchor rewards to *verified program completion*, not streak length. [high]
- Behavior-timed push (Duolingo fires slightly before the user's habitual slot) beats fixed reminders. [medium]
- **Reward/progress callout:** cumulative annual progress toward the cap ("$300 of $500 earned this year") as a persistent, investment-style tracker.

## CRITICAL CAUTIONS (apply directly to EBB — all high confidence)

1. **Bigger $ ≠ bigger effect.** Higher incentive value did not reliably produce larger effects; effect sizes sometimes *decreased* as value rose. A $100 reward isn't automatically better than less. → don't over-scale; the ~5/year cap is reasonable.
2. **Effects are modest and often short-lived after removal.** Financial incentives work *while active* (pooled RR 1.62; OR ~1.53 sustained to 18 months) but fade once gone. [and: strongest evidence is smoking/screening, NOT multi-session program completion — an extrapolation]
3. **Engagement–Efficacy Gap.** More app usage does NOT reliably mean better clinical outcomes; maximizing engagement can even undermine efficacy (MDPI 2026 review).
4. **Crowding-out.** Expected tangible completion-contingent rewards can erode pre-existing intrinsic motivation (Deci/Koestner/Ryan, 128 studies). → pair the $100 with intrinsic reasons (health progress, personal relevance); don't let money be the *only* frame.

## What was REFUTED (do not use)

- "Incentive effects dissipate beyond 3 months post-removal" as a hard rule (1-2).
- "Breaking a streak drives platform abandonment" (0-3).
- "Streaks so strong that millions maintain 1yr+ streaks" as proof streaks drive retention (1-2).

## Open questions the research couldn't close

- Does goal-gradient/endowed-progress hold for weeks-long **clinical** programs as strongly as for low-effort punch-cards? (All cited evidence is loyalty/consumer or self-reported app usage.)
- Does the ~5/year **cap dampen the goal-gradient** on later programs (less reward pull as you approach the cap)?
- Best intrinsic-motivation design to insulate behavior after the $100 is paid / cap is hit?

## Key sources
Kivetz, Urminsky & Zheng 2006 (JMR, goal-gradient) · Nunes & Drèze 2006 (endowed progress) · Giles et al. 2014 (PLOS ONE, incentives meta) · Mantzari/Marteau 2015 (Prev Med) · Glanz et al. 2026 (Annual Rev Public Health) · MDPI Information 17(2):168 2026 (Engagement–Efficacy Gap) · Deci/Koestner/Ryan 1999 (crowding-out) · Silverman & Barasch 2023 (streaks) · Headspace/Irrational Labs onboarding · Duolingo Hook-model teardowns.
