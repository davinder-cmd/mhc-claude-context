# Progress & reward — one data model (so every surface agrees)

> The numbers on the DCP list, topic page, All Sessions page, Overview, and the "Your care this year" banner must all derive from the **same fields**. This pins those fields, the per-DCP session counts (the source of truth), the reward math, and the corrections needed on current mocks.
> Date: 2026-07-09

---

## Source of truth: session counts per DCP

From `projects/feature-dcp/_brief.md` (deployed programs). **Every surface uses these — no ad-hoc numbers.** (14 EBB-eligible; pregnancy excluded.)

| DCP | Sessions (M) |
|---|---|
| Depression | 10 |
| Anxiety | 10 |
| Insomnia | **8** |
| Lower Back | 8 |
| Neck | 9 |
| Shoulder | 9 |
| Hip | 7 |
| Knee | 7 |
| Healthy Blood Pressure | 12 |
| Diabetes Prevention | 9 |
| Continuing Diabetes Prevention | 9 |
| Diabetes Management | 10 |
| Weight Loss | 12 |
| Weight Management | 10 |

## The canonical fields (per member × DCP)

- **M** = `sessionsTotal` — from the table above.
- **N** = `sessionsDone` — completed sessions.
- **currentSession** = N + 1 (the one to do next).
- **status** = not-started (N=0) · in-progress (0<N<M) · completed (N=M).
- Year-level: **completedPaths** (DCPs finished this benefit year), **inProgressCount**.

**Everything shown is derived from these — never entered per screen.**

## Reward math (one rule)

- **$100 per completed DCP** (N reaches M).
- **earned** = `completedPaths × $100`, capped at the config cap (**$500/yr recommended = 5 paths**; system default = no cap).
- "pending" = earned but the gift card hasn't cleared (Waystar).
- The **50% rule is internal only** — never a number/marker in the UI.

## Display conventions (pick once, apply everywhere)

- **Ring / bar = N of M** (completed of total). The center number is **N** (sessions done). Insomnia at 2 done → "2 · of 8".
- **Resume hero** references the **current** session: "Session {N+1} · {title}" → "Continue."
- **Care banner counts:** "{inProgressCount} in progress · {completedPaths} completed"; earned = completedPaths × $100. So **2 completed ⇒ $200**, **1 completed ⇒ $100** — always reconciles.
- **Cadence line** = time-based ("3 weeks in"), not a countdown.

## What each surface shows (all from the same fields)

| Surface | Progress element | Reward element |
|---|---|---|
| DCP-list Continue card | ring N of M + "{weeks} in" | none per-card |
| "Your care this year" banner | bar = earned/cap | $earned (= completed×100) / cap |
| Topic page — progress | ring/bar N of M | "$100 when you complete" (once) |
| Topic page — path / All Sessions | session list, done/current/locked | reward **once at the top** + finish-line marker; not per card |
| Overview | "M sessions · {status}" | "Finish this path to earn $100" (subtle) |

## Corrections needed on current mocks

- **Insomnia = 8 sessions**, everywhere: topic page "Session 2 of **8**" (was "of 7"), All Sessions "Complete all **8** sessions" (was "7"), Overview "8 sessions" ✓, ring "2 of 8" ✓.
- **Depression = 10**: topic-states "Session 3 of **10**" (was "of 7").
- **Anxiety = 10**: "6 of 10" ✓.
- **Care banner:** "3 in progress · **2** completed · **$200** earned" (was "1 completed · $200" — didn't reconcile).
- **All Sessions cards labeled "8 Sessions" each** — see taxonomy below; likely wrong.

## Resolve the taxonomy (blocks the All Sessions page)

The All Sessions page shows ~8 cards each reading **"8 Sessions"** while the header says "Complete all 7 sessions." That conflates two models:

- **Recommended — flat sessions:** a DCP = **M sessions** (the table). The All Sessions page lists the **M sessions** (Insomnia → 8 session rows), header "Complete all 8 sessions to earn $100." No per-card "8 Sessions" label. Matches the brief and the ring's "N of M."
- **If modules are real:** a DCP = modules → sessions. Then define module count + sessions/module, and the page lists **modules** with their own counts, and M (for the ring) = total sessions across modules. The header/labels must then say "module" vs "session" precisely.

**Lean: flat sessions** unless clinical/content confirms modules exist. Either way, one label system — a card is a *session* or a *module*, never ambiguously "8 Sessions" on a session list.

## Open
- Confirm flat-sessions vs modules with content/clinical.
- Confirm ring convention = N (done) of M — vs. showing currentSession index (pick one; this doc assumes N-done).
