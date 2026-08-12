# Dismissing recommendations — for discussion with Darcy
*June 2, 2026 · Davinder*

## Problem
Hiding a recommendation today takes **3 taps across 2 screens** (a "Hide Recommendation" screen, then an "Are you sure?" dialog). The list it lives in is a **30–40-item catalog dump**, and our architecture **re-renders the whole list on any change** — so there's no clean inline way to dismiss.

## Two paths

| | **Expected approach** (target) | **Workaround** (ship now) |
|---|---|---|
| **What** | Inline "Not interested / Snooze" → item collapses, "Undo" appears, next rec backfills. No dialogs, no new screens. | Fix list quality (rank + cap to ~10); move dismiss to a "Manage" surface and **batch** edits → one reload on exit; kill the confirm dialog + the "Hide" screen; keep the Hidden tab + one-tap restore. |
| **Cost** | Eng investment — needs client-side list state / optimistic render / a toast. **Blocked on the page-layout architecture.** | Low — uses existing building blocks (List + Button + reload). Shippable now. |
| **Effect** | Best-in-class | 3 taps + 2 screens → **1–2 taps**; ~80% of the friction gone |

## Specific rationales
- **The "Are you sure?" is unjustified.** Dismiss is reversible (the Hidden tab restores it). Confirmation dialogs are for *irreversible* actions only.
- **A list of 30–40 items recommends nothing.** Ranking + capping is free, and it cuts the *need* to dismiss in the first place — the highest-leverage fix.
- **The reload constraint makes inline dismiss a trap.** With no optimistic UI or toast, an inline "X" costs a full page reload on every tap (lost scroll, >400 ms). Batching in a manage surface is the honest fit for how we're built.
- **The target state is blocked on architecture, not a missing component.** That makes it a *funded roadmap decision*, not a quick add — worth naming explicitly.

## Recommendation / the ask
Ship the **workaround now** (low cost, removes most of the pain), and decide whether to **fund the architecture work** for the inline target state on the roadmap. The gap between them is the gap between *tolerable* and *best-in-class*.
