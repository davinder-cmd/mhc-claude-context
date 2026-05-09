# Personify Patterns + What's Missing from Jill's Direction

**Date:** 2026-05-05
**Sources:** `competitive/profiles/personify-health-ia-analysis.md`, `competitive/profiles/personify-health.md`, `outputs/MHC UI/`, `projects/feature-rewards/_brief.md`, April session handoff

## Bottom line

Jill's converged direction silently dropped three high-value modules that Personify uses to drive their entire engagement loop and that the **April session handoff already ranked as priorities 1, 3, and 5.** Rewards is the most damaging miss — it was priority 1 in April and is now invisible in the May converged design. This isn't a "Personify does this nice thing" critique. It's "we already decided to do this in April and the latest design lost it."

The single biggest behavioral lever MHC has — **$100 gift card per DCP** — is more valuable than Personify's points economy and currently more invisible than theirs.

---

## What Personify does that Jill's converged direction lost

| Personify pattern | April handoff status | Jill's converged direction | Verdict |
|---|---|---|---|
| **Rewards bar at top of home** (points earned vs. total available, e.g. "5,200 / 10,000") | **Priority 1** — "Rewards Progress Bar, Header, span both columns" | **Missing.** Points only appear as one of 3–4 Today tiles. No persistent visibility. | **Regression.** Restore. |
| **My Actions list with explicit point values per task** ("Enter my measurements — 50 Points") | **Priority 3** — "My Actions List · NEW · P0" | **Missing.** Replaced by focus-filtered for-you content with no point values. | **Regression.** Restore in two-lane model. |
| **Active DCP Progress card** (clinical differentiator) | **Priority 5** — "DCP Progress Card · NEW · P1" | **Explored** in `MHC Home - In Progress Programs.html` and `Programs D Refined.html` but **not carried into the converged AB doc spine.** | **Lost in convergence.** Restore. |
| **Healthy Habits card** (date picker + toggles) | Priority 6 — "Habits Checklist · NEW · P1" | Explored in `Healthy Habits Placement.html` but not in canonical AB spine. | Restore. |
| **Featured Challenge card** | Priority 8 — "Challenge Card · NEW" | Explored in `Challenge Placement.html`; Granola directs challenges into the priority engine for the hero slot. | Conditionally OK — covered if the priority engine surfaces it. Confirm it has a non-hero fallback. |

---

## Why rewards is the #1 fix

### Rewards visibility = behavioral lever visibility

Personify's IA analysis says it explicitly: "Points are woven into nearly every feature surface (Home actions, Programs, Challenges, Health Check completion, Coaching). This is the primary behavioral lever — everything connects back to the rewards economy."

MHC's rewards lever is **stronger in absolute value** but **weaker in visibility:**

| Dimension | Personify | MHC |
|---|---|---|
| Per-program reward | $10–$25 in points | **$100 gift card** |
| Visible on home today | Bar at top + per-action point values everywhere | Buried; not on home |
| Visible in May 5 direction | n/a | One Today tile labeled "Points" or nothing |

We are giving people 4–10× the dollar value and showing them less of it. That's the actual gap. From the rewards `_brief.md`: rewards are the "#1 driver of member enrollment and program completion" and "MHC's primary behavior change lever." A home that doesn't surface them has the wrong center of gravity.

### What "rewards on home" should actually do

Jill's `Points Placement.html` already has the candidate treatments. They just didn't survive convergence:

| Variant Jill built | Strength | Recommendation |
|---|---|---|
| **Header chip** (persistent top-right, e.g. "1,250 pts · 750 to Silver") | Always visible without taking spine real estate; matches Personify's "always-on" pattern | **Use this for the persistent layer.** Same chip across every shell (mobile / web w/ left nav / web w/o left nav). |
| **Hero card** (points-as-hero with progress bar) | Strong moment, high information | Don't use as default hero — competes with priority engine. **Use for milestone moments only** (e.g., "$25 to next reward — finish your sleep DCP" when the user is genuinely close). |
| **Slim row** (compact module with progress + CTA) | Compromise — visible without dominating | **Use as a once-per-page module** under the hero or above the for-you/employer lanes. Pairs with the persistent chip — chip is glanceable, module is actionable. |
| **Card** (separate full-width card) | Most product-feel, more space | Skip — heavier than the slim row without earning the space. |
| **Inline pill** (replaces "See all" on Today header) | Smart re-use of existing affordance | Use only if the chip approach gets shot down for header real estate reasons. |

**My recommendation:** persistent **header chip** + **slim row module** above the focus lane. Two surfaces, two jobs: chip says "you have X points," module says "here's what to do to get more."

---

## Other Personify patterns worth importing

Beyond rewards, six patterns from the Personify IA worth considering:

### 1. Per-action point values on every CTA

Every Personify action surface shows the point value inline ("Enter my measurements — 50 Points," "Set a wellbeing goal — 600 Points"). It turns every CTA into a transaction the user can evaluate. This is what makes their "My Actions" list feel like a productive todo list instead of a recommendations slop.

**Apply to MHC:** every action card on home (focus content, employer content, healthy habit prompt) should carry the point value when one applies. "Continue your sleep DCP — earn $25 toward your gift card" is a stronger CTA than "Continue your sleep DCP."

### 2. Trophy Case / achievement gallery

Personify has a dedicated Trophy Case in their More menu — a grid of badges with rarity stats ("275 earned," "4/18 last earned"). Not on home, but accessible. Adds a collectible-game psychological hook on top of the rewards economy.

**Apply to MHC:** not for this round. But worth queueing as a small follow-up — most of the data already exists in the rewards/fulfillment system. Low cost, high engagement payoff for the user segment that responds to gamification.

### 3. Daily Cards pattern (educational micro-content)

Personify shows a daily-card carousel with True/False quizzes and "Got it!" confirmations. Lightweight content that earns points. This is the part of their content strategy that MHC explicitly said in 02 we should NOT copy ("their content is generic, our DCPs are deeper"). Confirming: skip. Our content depth is the differentiator; lightweight daily cards would water it down.

### 4. Healthy Habits checklist

Personify has it as a dedicated section. Jill explored it in `Healthy Habits Placement.html`. April handoff had it. The May 5 direction lost it. **Restore.** Habits are the bridge between "tracker data" (passive) and "DCP enrollment" (heavy). Without it, the home has nothing in the middle of that engagement spectrum.

### 5. Devices & Apps surface

Personify's More tab has a clean device-management surface (Apple Health, Fitbit, Garmin, Oura Ring, WHOOP, etc.). Jill's Today strip has "broken" sync state with a "Reconnect" CTA, which is good — but no top-level entry to manage device connections without going through a broken state.

**Apply to MHC:** non-blocking. Account menu / settings already covers it. Worth confirming the path is short.

### 6. Per-program tagging by topic taxonomy

Personify uses a consistent taxonomy (Fuel, Movement, Balance, etc.) that threads through Journeys, Filters, and Topics of Interest. MHC uses pillars (Physical, Emotional, Career, Financial, Social) per Jill's Focus Picker. The pillars are stronger because they cover broader life dimensions. Hold — don't change.

---

## Where MHC should go *beyond* Personify on home

Things Personify doesn't do that we should:

| Opportunity | Why MHC should do it |
|---|---|
| **DCP Progress card with clinical metric** ("3 of 8 sessions · pain down 22%") | Personify's "Programs" are content; ours are clinical interventions. Surfacing the clinical metric inline turns a progress card into proof of value. |
| **Total earned year-to-date or per-DCP visibility** ("$75 earned · $25 to next gift card") | Our $100/DCP economy is more valuable than Personify's $10–$25/5k. Show the dollar number, not just the points. Trust signal, not just gamification. |
| **AI Insights on home** | Personify's PercyIQ is criticized in G2 reviews as "explains without acting." Our one-takeaway-one-action format is the response. Already in Jill's design — keep it. |
| **Benefits / EAP entry** ("Your benefits include $X for therapy at no cost") | Personify has nothing here. Many MHC users don't know what their employer benefits cover. Even a single line on home can drive Benefits-tab usage. Could live in the "From your employer" lane. |
| **Source labeling on every item** ("From your employer" / "Based on your interests") | Personify's content provenance is opaque. Our two-lane model + explicit labels = a small but real consumer-trust differentiator. |

---

## Updated home spine — what should actually be there

Pulling together 03 (three lanes) + this file (rewards restoration) + Granola priority engine. This is the modular inventory that needs to be designed and laid out, ordered by stack position on a desktop home:

| # | Module | Always present? | Notes |
|---|---|---|---|
| 1 | **Top nav + persistent rewards chip** (top-right, "1,250 pts · 750 to Silver" or "$75 earned · $25 to next gift card") | Yes | Across all three shells. Chip tap → rewards detail. |
| 2 | **Greeting** ("Good morning, Davinder") | Yes | No focus pill at page level. Greeting is page-level only. |
| 3 | **Hero / spotlight** — single committed OR dots-carousel; priority engine (challenge → employer → focus-fallback) decides content | Yes | Hero option B (50/50 split) for accessibility. Source-labeled per content type. |
| 4 | **Today strip** (3 tracker tiles: Steps / Sleep / Heart Rate) with sync states | Yes | Independent of focus. Live tracker data, not canned. |
| 5 | **Rewards slim row** ("$75 earned · 2 actions earn $25 more →") | Yes | Restored from April plan. Sits between Today and the lanes. |
| 6 | **AI Insights block** (4 server-driven states: ready / refreshable / read-only / hidden) | Conditional | Hidden if no tracker data. |
| 7 | **DCP Progress card** ("Sleep DCP · session 3 of 8 · pain down 22%") | Conditional | Shows when user is enrolled in any DCP. |
| 8 | **Healthy Habits checklist** | Conditional | Shows when user has habits configured. |
| 9 | **Two-lane content area** | Yes | "From your employer" + "Based on your interests" — distinct sections, source-labeled |
| 10 | **Account / settings access** | Yes | Top-right avatar dropdown (per Jill's no-left-nav model). |

**Out:** focus-controls-the-whole-page anchoring (per 03), Chat Advisor (per 02), no-focus state branch (per 02), Welcome banner (per 02), "Just for you" generic labeling (per 03).

---

## Recommendation

Before any wireframes, lock these three additions to your direction-update list:

1. **Persistent rewards chip** in top-right of every shell. Copy framing: dollar-equivalent, not just point count.
2. **Rewards slim-row module** between Today and the content lanes. CTA-driven ("X actions earn $Y more").
3. **DCP Progress card** as a conditional module above the lanes when the user is enrolled. The clinical metric inline is the differentiator — don't ship a progress bar without it.

The cost of these additions is one more module-row on home. The cost of *not* including them is hiding our strongest engagement lever (rewards) and our strongest product differentiator (DCPs) on the surface where users land most.

When you wireframe, do a row-by-row test: for each module, can a user infer what it's for from a 3-second glance, and can they tell where the content came from? If either fails, the row doesn't earn its place.

---

*Companion to 01 (assumptions), 02 (Jill critique), 03 (direction update). Saved to `outputs/may05-home-redesign-review/`.*
