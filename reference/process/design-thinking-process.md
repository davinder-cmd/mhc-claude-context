# Design Thinking Process — Reference

A repeatable loop for *how* to move through design work, adapted for a one-person practice. This is not a library of who to consult — it's the operating sequence to run when starting a new feature, redesign, or brand effort and there's no team to divide the work across.

**Built on:** IDEO's human-centered design loop (see `brand-agency-studios.md` — IDEO is the process anchor of the five studios) and the Double Diamond (discover/define/develop/deliver), collapsed into a version that assumes one person does every phase.

**Companion to:** `product-design-experts.md` (answers *what* to build — Cagan/Torres discovery, JTBD); this doc answers *how you move through building it*, phase by phase. `user-research-methods.md` supplies the actual methods for the Discover phase. `reference/review/_kit.md` supplies the instruments for the Deliver phase.

**Use this at the start of:** a new feature effort, a redesign, or a brand/identity effort — not for a routine bug fix or a small copy tweak, which don't need the full loop.

---

## The Loop

```
DISCOVER          DEFINE           DEVELOP          DELIVER
(diverge)          (converge)       (diverge)        (converge)

Talk to users  →  Name the real  →  Generate many  →  Pick one,
observe,          problem, not      directions,        build it,
gather signal      the assumed      don't fall in       measure
                    one              love with the
                                     first idea
```

Two diamonds, each with a widen-then-narrow shape. The failure mode this structure prevents: skipping straight from a hunch to a single solution without ever widening either diamond — which is how a feature gets built that solves the wrong problem, or solves the right problem with the first idea that came to mind instead of the best one.

---

## Phase 1: Discover (widen)

**Goal:** Gather real signal before assuming you know the problem.

**What this looks like solo:**
- Run the one-week research playbook in `user-research-methods.md` if there's time for it
- If there isn't, at minimum: talk to 2–3 real users or read 2–3 real support/feedback threads before writing a brief — don't skip straight to Define on assumption alone
- For DCP/clinical work, this phase carries extra weight — see the Tier 3 clinical-population section in `user-research-methods.md` before recruiting anyone

**Failure mode this phase prevents:** building the feature a stakeholder (including yourself) *assumed* was needed, without ever checking it against a real user's actual behavior.

**Done when:** you can state what you observed, not just what you assumed, even if the sample was small.

---

## Phase 2: Define (narrow)

**Goal:** Turn scattered signal into one sharp, falsifiable problem statement.

**What this looks like solo:**
- Write the problem as a Jobs-to-Be-Done statement (`product-design-experts.md` — Christensen) or an Opportunity in a lightweight Opportunity Solution Tree (Torres) — not as a feature request
- Resist the pull to define the problem as "build X" — that's a solution smuggled in as a problem statement
- Write down what you'd expect to observe if this problem statement is wrong — gives you a falsification check later

**Failure mode this phase prevents:** "solutioning" too early — jumping to Develop with a feature already decided, which turns the rest of the loop into decoration around a decision that was never actually tested.

**Done when:** the problem statement is one sentence, and a stakeholder reading it couldn't guess which solution you're about to propose.

---

## Phase 3: Develop (widen)

**Goal:** Generate more than one real direction before committing.

**What this looks like solo:**
- Sketch or spec at least 2–3 genuinely different directions, not one direction with three visual skins
- Time-box this — Jake Knapp's Sprint structure (`product-design-experts.md`) is the reference for compressing this into days instead of weeks when you're alone and don't have a week to spare
- This is where `brand-agency-studios.md` and `color-systems-experts.md`/`content-design-experts.md` get consulted for precedent — not before the direction exists, only once there's a direction to pressure-test

**Failure mode this phase prevents:** falling in love with the first idea because it's the only idea in the room — a well-documented bias, and worse for a solo practitioner with no one to disagree.

**Done when:** you have real alternatives you could defend choosing between, not one idea and a strawman.

---

## Phase 4: Deliver (narrow)

**Goal:** Pick, build, and verify against a real instrument — not a gut check.

**What this looks like solo:**
- Choose a direction against the Define-phase problem statement, not against personal taste
- Build it
- Run it through `reference/review/_kit.md` before calling it done — conformance, accessibility, UX, art direction, reported as four independent verdicts, never averaged
- If the original Discover phase included real users, close the loop: show it to at least one of them if possible

**Failure mode this phase prevents:** shipping on instinct with no check against either the original problem or the review instruments — the review kit exists precisely so Deliver isn't just "does this look done to me."

**Done when:** it's passed the review kit's applicable instruments and answers the Define-phase problem statement, not just "looks finished."

---

## Scaling the Loop to the Size of the Work

Not every task needs all four phases at full weight. Calibrate:

| Task size | Discover | Define | Develop | Deliver |
|-----------|----------|--------|---------|---------|
| **Quick copy/UI tweak** | Skip | One line, informal | Skip — one direction is fine | Spot-check against the relevant review instrument only |
| **Component or pattern update** | Light — check existing feedback/usage | One sentence | 2 directions minimum | Full review kit |
| **New feature** | Full playbook if time allows | Full JTBD/Opportunity statement | 2–3 real directions | Full review kit + close the loop with a user if possible |
| **Brand or identity effort** | Full — this is exactly where the brand gap came from skipping it | Full, plus consult `brand-agency-studios.md` for which angle (process/strategy/craft/taste/system) the effort needs | 2–3 directions, explicitly informed by different studios' angles | Full review kit; identity work also needs Pentagram-style craft scrutiny beyond the standard instruments |

---

## How to Use This Reference

### At the start of any new feature or redesign:
1. Name which row of the scaling table this task falls into
2. Run Discover and Define before touching Develop, even briefly — the two-sentence version still prevents the worst failure mode
3. Generate real alternatives in Develop, not one idea with variations
4. Close with the review kit in Deliver, not a gut check

### When you catch yourself already sketching a solution before defining the problem:
Stop and write the one-sentence problem statement first. This is the single most common place the loop collapses for a solo practitioner — there's no one else in the room to ask "wait, what problem is this solving?"

### When a brand or identity effort feels stuck:
Use the Develop-phase table in `brand-agency-studios.md` (the "How These Five Differ, at a Glance" table) to check whether you've actually generated angle-different directions, or just visual variations of one angle.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-09-04 | Initial version — four-phase loop (IDEO/Double Diamond, adapted solo), scaling table, failure modes per phase. |
