# EBB — Screen & State Inventory

> Running list of every screen/state the EBB experience needs. Updated as we design and as new requirements land.
> Last updated: 2026-07-06 (reconciled with the jul05 enrollment/on-ramp work + Darcy's 7/5 notes — see `_decisions.md`).

**Status:** ✅ designed · 🎨 in progress / needs revision · 📋 to design · ⛔ blocked (needs a decision first) · 🗄️ superseded

---

## 1 · Enrollment funnel — Phase 1 (get in, one-time) — NEW, from Darcy 7/5

The assessment-driven enrollment daisy-chain (assessment → DCP recommendation → EBB enrollment), plus the interest/browse on-ramp. Distinct from the completion daisy-chain in §2.

| Screen / state | Status | Where |
|---|---|---|
| **Master flow** (whole journey, Phase 1 + Phase 2, Option A handoff) | ✅ v1 | `outputs/jul05-ebb-master-flow/` |
| **Dual on-ramp** (Lane A assessment-driven / Lane B interest-browse, converging) | ✅ v1 | `outputs/jul05-ebb-dual-onramp/` |
| **Assessment → EBB bridge** ($300 payday → "earn $100 more", Option A) | ✅ v2 | `outputs/jul05-ebb-assessment-bridge/` |
| **Enrollment flow** (assessment → risk result → recommendation → opt-in) | 🎨 v1 → **needs v2** | `outputs/jul05-ebb-enrollment-flow/` — Steps show "12 questions / 5 pillars / Question 3 of 12"; real assessment is ~50–64 Q / 7 sections; add the $300 hook. |
| **Surfacing kit** (the "you may qualify to earn $100" surfaces across touchpoints) | ✅ v1 | `outputs/jul05-ebb-surfacing-kit/` |
| Get-In flow (early journey sketch) | 🗄️ superseded | `outputs/jul02-ebb-getin-flow/` — pre-pivot ($100 only, no $300, no dual funnel). Superseded by master-flow + dual-onramp. Kept for history. |
| Health-assessment screens (~50–64 Q / 7 sections) + **Health Risk results** | 📋 | Spec'd in `reference/health-assessment/`; results screen (per-condition Normal/Low/At-risk) is the risk-strat source + recommendation trigger. |
| **DCP recommendation** screen (assessment result → recommended path) | 📋 | The middle link of the enrollment daisy-chain; distinct from the DCP list. |
| Post-wellbeing-assessment eligibility surface | 📋 | One of the three named surfacing touchpoints. |

## 2 · Core loop — Phase 2 (the spine, repeats)

| Screen / state | Status | Where |
|---|---|---|
| Engagement-loop model (North Star) | ✅ | `outputs/jul01-ebb-engagement-loop/` |
| **Completion celebration** (health win → $100 Amazon → tee up next) | ✅ v3 | `outputs/jul01-ebb-completion-screen/` |
| **Topic page** (Continue → progress+reward → path → "How you're doing") | ✅ v3/v4 | `outputs/jul02-ebb-topic-page/` |
| Path component — first / middle / last states | ✅ | `outputs/jul02-ebb-topic-page/path-edge-states-v1.html` |
| "How you're doing" — 3 states (improving / too early / needs support) | ✅ (for clinical review) | `outputs/jul02-ebb-topic-page/checkin-states-v2.html` |
| **Rewards page** (EBB leads; $ earned / $500 cap) | ✅ v1 | `outputs/jul05-ebb-rewards-page/` |
| **DCP list / All Topics** (Ongoing / Discover / Completed, "next" promoted) | 📋 | Unblocks Lane B browse on-ramp; a minimum inclusion. |
| Home — EBB variant (hero $100, cap meter, keep-going) | ⏸️ **out of 9/1 scope** | Existing hero banners + "Just For You" stay for launch (Darcy 7/5). Continue to ideate; adjust after table stakes lock. |

## 3 · Completion variants

| Screen / state | Status | Notes |
|---|---|---|
| First-ever completion | 📋 | Extra beat — "your first $100" |
| Cap reached (5 of 5 / config cap) | 📋 | Stop dangling payout; shift to health framing |
| No strong next match | 📋 | Tee-up softens to "Explore care paths" |

## 4 · Consent & eligibility

Consent required before earning; rewards apply from consent date forward (not retroactive). The **50% rule** creates distinct eligibility states for existing in-progress users at go-live. Reward confirmed **$100 Amazon gift card**; cap **$500/yr recommended** (system default: no cap, no risk). Entry points are **assessment-driven** (post-health-assessment, post-wellbeing-assessment, mid-DCP).

| Screen / state | Status | Notes |
|---|---|---|
| New-user consent / opt-in | ⛔📋 | Value-forward ("opt in to earn $100/program"). Builds on Gated Rewards pattern (Figma frame 25). |
| Existing user — **eligible** (>50% complete) | ⛔📋 | "Opt in — you can earn $100 when you finish this program." |
| Existing user — **not eligible this run** (<50%) | ⛔📋 | "Opt in — this program won't earn, but your next ones will." Sensitive framing. |
| Mixed eligibility (multiple in-progress DCPs) | ⛔📋 | Per-program eligibility summary on the consent screen. |
| Consent confirmation / "you're now earning" | 📋 | Success state after opt-in. |
| Annual re-consent prompt | 📋 | Lighter re-consent at benefit-year boundary (spec §7). |

**⛔ Blocked by decisions:** hard-gate vs. earn-gate for existing users; risk-flag default; legal (HIPAA authorization / ADA notice, one-time vs. annual). Both gates are correctly left open in master-flow-v1 pending Darcy's requirements.

**🔖 Design placeholder (hard-gate vs. earn-gate — see [_open-decisions.md](_open-decisions.md) #1):** design the consent moment as **one component with a `gate_mode` variant (`earn` | `hard`)**. Build **earn-gate as primary** (dismissible modal; Continue stays available) with a **hard-gate variant** (dismiss removed; Continue blocked). Upstream announcement/banner and the consent copy are identical across both — only dismissibility + whether Continue is blocked changes, so a late decision flips a flag, not a redesign. Our lean = earn-gate; expected outcome = hard-gate.

## 5 · Re-engagement / soft restart

Users who lapse may lose efficacy; soft restart preferred over hard reset.

| Screen / state | Status | Notes |
|---|---|---|
| Welcome-back / soft-restart prompt | 📋 | "We recommend starting from Session X." Options: resume / soft restart / continue. |
| Progress-recap on return (Isabel) | 📋 | Show accomplishments as motivation. Duolingo re-engagement as the model. |
| Inactivity nudge (push + in-app) | 📋 | Fires before the reset window; leads into the welcome-back prompt. |

**⛔ Blocked by decisions:** inactivity threshold (30–90 days, TBD **per program**); Al's medical-pause concern; efficacy vs. autonomy framing.

## 6 · Reward deadline (Jill's configurable deadline)

Configurable "complete within N months to earn." Ties to spec's completion-time-limit / restart-to-reset (§11.5).

| Screen / state | Status | Notes |
|---|---|---|
| Deadline visible on progress | 📋 | "Complete by {date} to earn $100" — a state of the progress component. |
| Deadline approaching / reward at risk | 📋 | Reminder (push + in-app), possibly an interstitial. |
| Deadline passed / reward expired | 📋 | + restart-to-reset messaging. |

**⛔ Open concern:** a long deadline may *reduce* urgency — validate length against goal-gradient.

## 7 · Check-in & safety (from clinical logic)

| Screen / state | Status | Notes |
|---|---|---|
| Check-in due prompt (one-tap) | 📋 | "How you're doing" flips to a light assessment prompt when due. |
| Crisis / escalation hand-off | ✅ (exists) | Routes to the DCP's existing crisis-routing. Note the entry point from "Needs support." |

## 8 · Supporting surfaces (minimum inclusions not yet designed)

Named in `_brief.md` (Minimum Product Inclusions / loop trigger points) but not yet inventoried as screens.

| Screen / state | Status | Notes |
|---|---|---|
| Messages | 📋 | Minimum inclusion; no screen yet. |
| Tracker / Health Coach | 📋 | Minimum inclusion (necessity TBD for v1); home for self-tracked data per topic-page-scope decision. |
| Interest Survey (onboarding personalization) | 📋 | Multi-select (D4); feeds the interest/browse on-ramp. |
| Rewards shop / redemption | 📋 | Rewards page exists; the redemption surface does not. |
| In-app notification surface / center | 📋 | A named loop trigger point; only the inactivity nudge is tracked so far. |

---

## Naming (unresolved)

All designs currently use **"Engagement-Based Billing"** (matches source docs + brief). Darcy's 7/5 notes say **"Episode-Based Billing."** Canonical name pending Darcy's Monday requirements; if "Episode" wins, it's a global find-replace across the set.

## Suggested sequencing

1. **Enrollment funnel v2** — enrollment-flow corrected to the real 7-section assessment + $300 hook (Phase 1 daily driver).
2. Finish the **core loop** supporting surfaces — DCP list (unblocks Lane B), then Rewards shop.
3. **Consent & eligibility** once hard-gate-vs-earn-gate + 50% land (blocked otherwise).
4. **Soft restart** once the inactivity threshold is set.
5. **Reward deadline** states (coordinate with Jill).
6. Completion variants + check-in-due prompt (smaller, fill in alongside).
