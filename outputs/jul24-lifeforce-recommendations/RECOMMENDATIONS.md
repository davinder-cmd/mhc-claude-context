# LifeForce (DEM-35) — Recommendations, independent of the reskin

**To:** D'Arcy + LifeForce team (Ren, program/requirements owners)
**From:** Davinder Rehal
**Date:** 2026-07-24
**Status:** DRAFT for Davinder's review — not yet sent

---

## Context

Reviewing the authoritative Truist benefits page
(benefits.truist.com/well-being/lifeforce/lifeforce-participation) against our reskin
surfaced items that sit **outside "look and feel"** — some are program-accuracy fixes the
config must reflect regardless of visual, one is a UX gap none of our concepts (or the V3
prototype) handle. Capturing them here so the reskin stays inside the ticket's non-goal
and these route on the right track.

## Recommendation

Keep the **reskin scoped to look-and-feel + light, configurable UX (v2/v3 level)**, and
handle the three items below on the **program/requirements track**, not by expanding the
design scope.

## The three buckets

### A. Program-accuracy — must be correct in config (not design opinion)
The current V3 content misstates the program. Whatever visual ships, the copy/config must reflect:
1. **Medical credit is per pay period (semi-monthly)**, beginning the first paycheck of the
   month after your appointment — **not** an annual "$X of $Y." There's a benefits calculator.
2. **The nurse appointment is an enrollment step (step 5)**, the hinge of the flow — not a
   post-enrollment milestone. Step 6 = prepare for the next appointment (cadence set by phase).
3. **Health Assessment** is annual, due by the **last day of the appointment-anniversary
   month**. **Labs recur per appointment cycle** (the "biennial labs" assumption was wrong).

### B. In-scope UX improvement — high value, Ren-configurable (recommend we do this)
4. **Surface the next hard deadline + "keep your standing."** The program can **demote you
   to Phase 1** — for labs not done ≥5 business days before your appointment, or an
   appointment not rescheduled within 60 days. Every concept (and V3) shows phase only as an
   upward climb; none show the **downside or the deadline**. A single time-sensitive nudge
   ("Complete labs by Jun 5 to keep your appointment and your phase") is the highest-value,
   lowest-cost behavioral add — it's content/an HTML block Ren can configure, no new system.

### C. Bigger bets — require sign-off, beyond the reskin non-goal (flag, don't build)
5. **A real "at-risk/deadline" capability** (dynamic dates, reminders) vs. the static nudge in B.
6. **Collapse the two-tab Status/Progress split into one adaptive dashboard** (our v4). Stronger
   experience, but it's a re-conceptualization — needs D'Arcy + McGriff + Ren, not this cycle.
7. **Surface the benefits calculator** in-context rather than as an external link.

## Tradeoffs considered

| Option | Why not (now) |
|--------|---------------|
| Fold A–C into the reskin scope | Violates the ticket's non-goal + the short timeline; C isn't Ren-configurable without eng/sign-off |
| Ignore A (ship V3 copy as-is) | Ships a program that misstates how members earn credit — accuracy risk, not a style choice |
| Build C now (v4 / deadline system) | Re-conceptualization + engineering; wrong cycle, needs stakeholder sign-off first |

## Ask

**One decision:** confirm the reskin ships at **v3** (look-and-feel + item 4), and route
**A (accuracy)** to whoever owns LifeForce content/config with Ren, and **C** to a
post-launch conversation. I'll fold item 4 into the delivered version.

Also need, to finish: the **$ credit amounts + calculator logic**, and confirmation of the
**go-live date** (ticket says 1/1 — reads as 1/1/2027).

---

## Supporting material
- Authoritative process notes: `projects/feature-lifeforce/_brief.md` → "Authoritative process"
- Decision log: `projects/feature-lifeforce/_decisions.md` (D12–D14)
- Design branches: `outputs/jul23-lifeforce-largeform/` (v1–v4 + INDEX)
