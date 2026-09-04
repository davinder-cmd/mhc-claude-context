# Decisions Log

> Append new entries at the top. One entry per decision. Be specific — future agents and collaborators need to understand what was decided, why, and what was rejected.

---

## Entry format

**Date:** YYYY-MM-DD
**Decision:** [What was decided — one sentence]
**Why:** [The reasoning — business goal, user need, or constraint that drove it]
**Rejected:** [What alternatives were considered and why they were ruled out]
**Success signal:** [How we'll know this was the right call]

---

**Date:** 2026-09-04
**Decision:** For the rewards-module redesign (incentive modal / overlay on top of the core product), game mechanics is the primary design lens, not a secondary consideration — pull `reference/experts/engagement-behavior-experts.md`'s Fogg (B=MAP), Eyal (Hook Model), Chou (Octalysis), von Ahn/Duolingo, and Kapp entries as the driving frameworks for this effort.
**Why:** That file's ethics/evidence guardrail ("gamification is a marginal, sometimes counterproductive driver — use lightly") was calibrated for EBB/DCP: a clinical-adjacent education path where 2026 meta-analyses found gamification doesn't move retention and may hurt it in mental-health apps. Rewards is a different risk profile — it's explicitly MHC's incentive engine (see `_brief.md`: "primary behavior change lever"), not clinical care delivery, and "make it feel more fun" is the actual brief here, not a side effect to manage cautiously. Applying the DCP-calibrated caution at full force would suppress the thing being asked for.
**Rejected:** Treating the DCP/EBB guardrail as a blanket MHC-wide ceiling on gamification. Rejected because it conflates two different product surfaces with different evidence bases and different jobs — a clinical education path optimizing for durable behavior change vs. an incentive/rewards surface optimizing for delight and perceived value.
**Success signal:** The redesign leans into mechanics (variable reward, streaks/progress, Duolingo-caliber product decisions) without needing to relitigate whether gamification is "allowed" here each session. Still apply Chou's white-hat/black-hat split as the actual guardrail — lean on meaning/accomplishment/empowerment, avoid manufactured scarcity or guilt-based pressure, since MHC's autonomy-supportive stance (`engagement-behavior-experts.md`'s ethics guardrail) still applies to *how* mechanics are used, just not as a brake on *whether* to use them here.

<!-- Add entries above this line -->
