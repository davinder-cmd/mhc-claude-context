**Engagement-Based Billing (EBB)**

Business Decisions Walkthrough

Open questions for executive decision — organized for a working session

**How to use this document**

This is a working agenda for walking through the open EBB decisions together. Each item states what’s at stake in plain business terms, lays out the realistic options and their trade-offs, and offers a recommendation to react to. The goal is a decision (or a clear “park it, here’s who owns getting the answer”) on each.

**Order:** business/strategic decisions lead (Part A), because they shape everything downstream. Legal/compliance decisions follow (Part B), then operational and technical confirmations (Part C). Many Part B and C items are simply waiting on a Part A direction.

*One framing note worth saying up front: EBB introduces money into a care experience. A theme running through several decisions is how prominent the financial incentive should be relative to the health goal — which is both a brand question and, per legal counsel, a compliance one. The current design deliberately keeps the health goal primary and the reward a quiet secondary. Several decisions below touch that balance.*

# **Contents**

# **Part A — Business & Strategic Decisions**

These shape the product’s economics and member experience. They’re the ones most squarely in the business’s hands and they unblock the most downstream work.

## **A1. Should there be spending caps on EBB at all?**

**What’s at stake:** EBB ties our revenue to member engagement — the more members complete, the more we bill the health plan, and the more incentives we pay out. Without a ceiling, a very engaged client population could drive billing and payout higher than budgeted. A cap is a financial safety valve. The question is whether we want one, and at what level.

**Options**

| Option | What it means / trade-off |
| :---- | :---- |
| No caps | Simplest; revenue scales freely with engagement. Risk: no ceiling on client billing or our incentive outlay if volume spikes. |
| Client-level cap | Limits total EBB for a given client (protects against one client’s population running up cost). Common in benefit contracts. |
| User-level cap | Limits how much any one member can generate/earn (guards against outliers, and aligns with possible regulatory limits). |
| Both | Maximum control; more to build and explain. |

| Recommendation Build the capability to support caps at both client and user level now (it’s cheap to build the foundation), but treat whether to actually switch them on — and at what number — as a business/contract decision per client. This keeps options open without committing to a specific ceiling today. |
| :---- |
| **If we do cap, follow-ups (can defer)** • Does hitting a cap stop billing the health plan, stop paying member incentives, or both? • Hard stop, or honor work already in progress when the cap trips? • What do we tell a member who earned a reward just as the cap was hit? (member-trust question) • Annual caps — V1 proposal (Finance to confirm): each event counts against the year it occurs (billing by bill date, incentive by PAYOUT date). A reward earned in December but paid in January would count against the new year. This avoids reopening closed years; the alternative (count by earned date) is more intuitive but needs historical cap tracking. |

**Decision:** user level cap on both billing and incentive payout max. User can still use the topic but won’t get paid. Resets annually. No client level cap (needs confirmed). 

    Owner / follow-up: \_

- Steve/Ellen/D’Arcy  
  - Annual client cap \- assuming not unless told otherwise  
  - Do we really want both a user level annual billing cap AND a user level incentive payout cap? I think we really only want the second one. The incentive payout cap effectively already gates the billing cap. The billing cap requirement can conflict with the 50% funding rule and block a user who's under their incentive cap from ever earning their incentive when they otherwise should. The billing cap also adds complexity on determining the right number for the cap that would have to be determined at the client level when caps are in play. (set it high enough based on $45 per billing that the user can still complete each $100 of incentives on a variable number of sessions per topic). That’s added complexity that doesn’t give a lot of return but is easy to get wrong. MY RECOMMENDATION: limit to only a user level incentive annual payout cap. Eliminate a separate user level billing annual cap.   
  - Confirm that when a user hits the EBB annual user incentive cap, the billing for that user stops for that year as well.  
  - What is the default annual user incentive cap amount?

## 

## 

## **A2. Should there be a time limit to complete a path and still earn the reward?**

**What’s at stake:** Today a member could theoretically take a very long time to finish a path. An open-ended window creates two problems: it can push the gap between when we bill and when we pay the member far apart (messy financially), and it removes any urgency that helps members actually finish. A reasonable deadline adds healthy urgency — but too tight a deadline punishes members with legitimate life interruptions.

**Options**

| Option | What it means / trade-off |
| :---- | :---- |
| No time limit | Most forgiving; but unbounded billing-to-payout drift and weaker completion urgency. |
| Generous window (e.g., \~1 year, configurable) | Long enough not to feel punitive, bounded enough to keep things tidy and create gentle urgency. Pairs with the engagement design. |
| Tight window | Strong urgency; higher risk of members losing rewards through no real fault, which damages trust. |

| Recommendation A generous, configurable window (the design assumes \~1 year). If a member can’t finish in time, the experience gently tells them and offers a clean restart rather than just failing them. Note: a time limit only becomes a hard reward CONDITION if we choose — otherwise it’s just an engagement nudge. That sub-choice is worth your call. |
| :---- |

**Decision:** \_\_yes, there is a deadline per topic iteration that starts from user topic start date. \# days is configured by topic. 

Owner / follow-up: Product to provide \# of days per each topic

## 

## 

## 

## 

## 

## 

## 

## 

## 

## **A3. Do members get the reward only if every session was fully funded?**

**What’s at stake:** We bill the health plan as a member completes each session; the member’s reward is meant to be funded by that billing. The clean rule is: a member earns the reward only when the path is complete AND all its sessions were billed and reimbursed. But that’s strict — if a single session’s reimbursement gets stuck or rejected (often through no fault of the member), it would block the whole reward.

**Options**

| Option | What it means / trade-off |
| :---- | :---- |
| Require 100% funded | Financially purest — we never pay a reward we weren’t funded for. But brittle: one stuck session can block a member who did everything right. |
| Allow a tolerance (e.g., pay if ≥90% funded) | Kinder to members; means we occasionally absorb a small unfunded gap as goodwill/margin. |

| Recommendation Default to 100% funded as the safe rule, but make the threshold configurable so we can choose to extend goodwill tolerance later if member experience warrants it. This is a Finance call on whether we’d ever eat a small gap to protect member trust. |
| :---- |

**Decision:** \_Yes. Reward is only provided to user once billing for the session iteration is 50% or more received against total billable for the session. Note: this can allow a user to be provided with incentive as soon as the last session is completed provided that prior session billings have already been received.

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## **A4. How often can a member retake the same path?**

**What’s at stake:** We’ve already decided paths are repeatable — a member can take a topic again over their life (a new pregnancy, a fresh injury), and each completed retake is a new billable run plus a new reward. The open question is whether there should be any limit on HOW OFTEN. With no limit, a member could in principle restart the same topic back-to-back, generating repeated billing and repeated reward payouts in a short span. A retake-rate rule is effectively a frequency control on repeat revenue and repeat payout — it’s closely related to the caps question (A1) and the billing-basis question (A6).

**Options**

| Option | What it means / trade-off |
| :---- | :---- |
| No limit | Members retake freely whenever they want. Simplest and most member-friendly; but allows rapid back-to-back retakes that could look like gaming and run up billing/payout. |
| Minimum gap between retakes | A member must wait a set period after finishing (or stopping) before retaking the same topic (e.g., not again within N months). Curbs rapid repeats while still allowing genuine life-event retakes. |
| Cap retakes per period | Limit how many times a topic can be retaken per benefit year (e.g., once per year, except clinically-driven cases). Most control; needs exceptions for legitimate cases. |
| Per-topic rule | Different topics get different rules — a recurring-condition path may allow frequent retakes; a once-in-a-while path may not. Most precise; most to configure. |

| Recommendation Allow retakes, but support a configurable minimum gap and/or per-period cap so we can prevent rapid gaming without blocking genuine retakes — likely tuned per topic (a recurring condition vs. a one-off). The clinical reality of each path should inform its rule. This is a business \+ clinical call; the safe default is to require a sensible gap rather than allow unlimited back-to-back retakes. |
| :---- |
| **Note — already decided (for context, not for debate)** The three-state model is settled: PAUSE (resume the same run later), STOP (end this run; kept in history, not resumable, no reward), and RETAKE (a fresh run of the topic). This question is only about the rate/timeframe of retakes. |

**Decision:** \_There is no limit to the number of times a user can start a topic. The annual user incentive cap will control the number of times the user will be given an incentive for topics.

## 

## 

## 

## 

## 

## **A5. Do we need the member to opt in to billing their health plan?**

**What’s at stake:** EBB works by billing the member’s health plan as they progress, and paying them a reward. The question is whether the member must explicitly agree to that health-plan billing before it happens — i.e., is an opt-in required, or can billing proceed on the basis of existing plan/benefit terms? Our working assumption has been that we cannot bill the plan or pay the reward without the member opting in and accepting terms. If that’s right, opt-in becomes a gate in front of any billing. If it’s NOT required (e.g., it’s covered by the benefit the employer already bought), the experience gets simpler and friction drops — but that’s a compliance judgment, not just a product preference.

**Options**

| Option | What it means / trade-off |
| :---- | :---- |
| Opt-in required | Member must accept terms (likely a HIPAA authorization \+ notice — see B2) before any billing or reward. Safest; adds a consent step; members who decline use the path without billing/reward. |
| Not required — covered by plan/benefit terms | Billing proceeds under the existing benefit agreement; less friction. Only viable if counsel confirms it; carries more compliance risk if wrong. |

| Recommendation Treat opt-in as required for launch (the safe assumption), and confirm with Legal (B2) whether health-plan billing genuinely needs member authorization or can rest on existing benefit terms. The answer drives how much consent friction the experience carries. The consent STRUCTURE is already built to support this; what’s open is whether it’s legally mandatory and exactly what it must cover. |
| :---- |
| **Related — if opt-in IS required (per-client behavior)** A connected operational point: if a member declines, can they still use the care path? That depends on how the client pays us — if there’s a base fee (PEPM) they can proceed without billing; if the client pays ONLY via EBB, declining may mean no funding for their use. Recommend making “can a non-joiner proceed” a per-client setting. (Flagged for Product; not a standalone CEO decision unless you want to weigh the EBB-only access trade-off.) |

**Decision:** yes, opt in (consent) is required.

Owner / follow-up: \_\_Ellen \- determine if annual consent in required or if one time will suffice. 

## 

## 

## 

## 

## 

## 

## 

## **A6. Are we comfortable billing each path-attempt independently?**

**What’s at stake:** Because paths are repeatable, a member who restarts a topic generates billing again for that new attempt — including content they’d partially done before. This is fine IF our billing is understood as “payment for engagement each time it’s delivered” rather than “payment once for an outcome.” If a payer or client expected the latter, repeat billing could look like double-charging.

| Recommendation / action Confirm our billing rests on an engagement-/delivery-based basis, and make sure that’s spelled out in client contracts and the payer-facing rationale BEFORE go-live. This is a Finance/Legal/contracts action, not a build blocker — but it must be settled before we bill in production. |
| :---- |

**Decision:** Yes, this is acceptable.

## 

## **A7. “Catch-up” for late starters — right model, and can we bill it in real time?**

**What’s at stake:** Some paths are tied to a real-world clock. Pregnancy is the clear case: a member who starts at, say, week 10 shouldn’t be paced one-session-a-week through the nine weeks that already happened to them. The design handles this with “catch-up” — lifting the one-week pacing so a late starter can clear past sessions quickly, paced instead by their delivery due date (collected at start). Two questions for us: (1) is catch-up the right paradigm at all, and (2) if a member clears several sessions the same day, can we bill those in real time as they happen?

**Question 1 — is catch-up the right model?**

| Option | What it means / trade-off |
| :---- | :---- |
| Catch-up (current design) | Late starter works through past sessions rapidly to reach their true position, then resumes normal pacing. Keeps the full content and the full set of billable sessions. |
| Start at true position (skip earlier) | Begin the member where they actually are (e.g., week 10\) and skip earlier sessions entirely. Simpler, but the member misses content AND those sessions never bill — less revenue, possibly less clinical value. |
| Normal pacing, no catch-up | Treat everyone the same one-week cadence. Cleanest billing story, but a late pregnancy starter could never realistically finish before delivery — effectively unusable for them. |

**Question 2 — can catch-up sessions bill in real time (possibly same day)?**

**The tension:** Everywhere else, our design deliberately produces at most one billable session per member per path per week. Catch-up breaks that on purpose — a member entering pregnancy at week 10 could legitimately complete and bill several sessions in a single day to catch up. So catch-up is the one place the “one-bill-per-week” norm doesn’t hold, by design.

| Option | What it means / trade-off |
| :---- | :---- |
| Bill in real time as completed | Simplest and matches the engagement-delivered billing basis (A6) — we bill for content as it’s delivered. But it means multiple same-day billable events for one member, which a payer must be comfortable with. |
| Meter catch-up billing out | Spread the billing over time even though the member completed quickly. Preserves a one-per-week billing appearance, but decouples billing from actual delivery and adds complexity. |
| Cap catch-up billing | Allow the catch-up experience but bill only up to some limit for the skipped period. Caps revenue/optics risk; more rules. |

| Recommendation Keep catch-up as the paradigm (it’s the only model that serves a late pregnancy starter well and preserves both content and billable value), defaulting ON only for pregnancy with the window set by delivery due date. On billing: real-time, bill-as-delivered is the cleanest and is consistent with the engagement-based billing basis in A6 — but because it produces multiple same-day billable events, it needs explicit payer/Finance comfort. This is the one sanctioned exception to one-bill-per-week, so it should be named as such in the billing rationale (ties to A6). |
| :---- |
| **Follow-up (Product / Clinical)** Which OTHER paths, if any, beyond pregnancy should allow catch-up, and what defines each one’s window? |

**Decision:** No longer applicable as pregnancy was the only catch up path and it has been deemed out of scope for EBB.

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## **A8. One session per week — hard stop, or can an admin override it?**

**What’s at stake:** Our pacing design naturally limits a member to about one billable session per week per path (outside the catch-up case in A7). The question is how absolute that limit is. Is it a HARD stop the system enforces no matter what — or can an administrator (or some defined bypass case, e.g., a support correction or advancing a stuck member) push a member past it, which would let a second session bill within the same week? This matters because it determines whether “one bill per week” is a guarantee we can make to a payer, or a normal-case behavior with sanctioned exceptions.

**Options**

| Option | What it means / trade-off |
| :---- | :---- |
| Hard stop — no overrides | The system never allows a second billable session within the week, period. Cleanest guarantee to a payer; but no escape hatch for legitimate support/correction cases. |
| Allow admin override / defined bypass | An administrator (or a defined case) can advance a member, which may bill a second session in-week. Flexible for real-world support; means one-per-week is a normal-case norm, not an absolute, and overrides should be logged/audited. |
| Hard stop \+ a separate, auditable override path | Default is a hard stop, but a deliberate, logged admin action can override when justified. Best of both — protects the norm while allowing sanctioned exceptions with a paper trail. |

| Recommendation Treat one-per-week as the enforced norm with a deliberate, auditable admin-override path for legitimate exceptions (support corrections, advancing a stuck member). Overrides are logged so the exception is defensible. If a payer contract ever requires an absolute cap, we tighten to a true hard stop. Connects to A7 (catch-up is the one PLANNED exception) and to the billing-basis question (A6). |
| :---- |

**Decision:** 1 session per week throttle. To manage short sessions that some topics have for the first one where it is simply an assessment, shift the assessment to an introductory assessment prior to first session topic start. This will address 2 requirements: how to handle short sessions with a 1 week throttle, and addressing Alight’s question regarding only paying incentive to those with a relevant risk. 

Owner / follow-up: Jill / product to evaluate the impact of the short sessions and evaluating the related requirement for assessment risk identification. 

# **Part B — Legal & Compliance Decisions**

These need counsel, but they carry business consequences and several gate launch. Flagged here so they can be assigned and started in parallel. (This document is not legal advice; these are framed questions for counsel.)

## **B1. How is this program classified, and does that cap the reward?**

**What’s at stake:** Wellness-program rules treat “participatory” programs (no health standard to earn the reward) differently from “health-contingent” ones (reward tied to an activity/outcome). The classification can impose a legal ceiling on the incentive — separate from any business cap we set in A1. There’s also genuine legal uncertainty in this area today. This directly affects whether “$100” (A2) is even permissible.

| Decision needed from Legal Confirm the program’s classification and whether a regulatory incentive cap applies. This is upstream of finalizing the reward amount. |
| :---- |

**Decision:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_     

Owner / follow-up: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 

## **B2. What exactly are members consenting to, and how often?**

**What’s at stake:** Because EBB bills a health plan and moves health information for payment, the “join rewards” step likely needs a formal HIPAA authorization plus an ADA-style notice — not just a checkbox. We also need to decide whether consent is one-time or renews (the design assumes once a year, aligned to the benefit year). The member-facing consent wording is built to be configurable, so cadence can change without redesign — but the underlying legal instruments and renewal rule need counsel.

| Decisions needed from Legal • Confirm the required consent instruments (HIPAA authorization and/or ADA notice) and supply the real language. • One-time or annual re-consent? (design default: annual) • Confirm what the consent covers: health-plan billing, the reward terms, and data use. |
| :---- |

**Decision:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_     

Owner / follow-up: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 

## 

## 

## 

## 

## **B3. Member fairness disclosures — the reward “clock” and pauses**

**What’s at stake:** The reward window keeps counting down even while a member has the path paused. That’s defensible only if we disclose it clearly up front at consent. Otherwise a member could pause, hear nothing, and lose eligibility — a broken-promise risk.

| Decision needed from Legal \+ Product Confirm the “clock runs during pauses” rule and ensure it’s disclosed in the consent terms. (We also recommend a gentle reminder to paused members so they don’t silently age out.) |
| :---- |

**Decision:** \_\_Clock continues to run during pause. Provide disclosure and reminders for the deadline. 

## **B4. Opting in mid-path — is that run eligible, or only the next one?**

**What’s at stake:** If a member starts a path and only opts in to billing/rewards partway through, the sessions they completed BEFORE opting in weren’t billed — so that run isn’t fully funded for a reward. The current rule treats that run as not eligible and applies eligibility to their NEXT run instead. The alternative is to pro-rate the reward, or treat the run as eligible on completion despite the un-billed early sessions. This is a member-fairness question with a funding/cost angle.

| Recommendation For launch, lock the rule: a run is reward-eligible only for sessions completed while opted in; opting in mid-path makes the current run ineligible and eligibility applies to the next run. This is the cleanest, fully-funded position. Keep pro-rating as an open option to revisit if it proves to hurt member experience. |
| :---- |

**Decision:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    

Owner / follow-up: \_\_See comments for commentary\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## **B5. Payout mechanics — type, timing, method, tax**

**What’s at stake:** The completion screen promises the member their reward at the emotional high point of finishing. The design shows placeholder timing (“\~4–6 weeks”); the actual wording is configurable, but we need a real, committed payout timeframe, the payout method (it routes through the existing rewards menu), funding source, and tax treatment behind it. A promise made at completion has to be one we reliably keep.

What is the reward type for the user incentive? Payroll? HSA Credit? Gift Card? (If so, what kind of gift card? Does the user get to pick the type?

| Decisions needed from Finance \+ Legal \+ Product Confirm the real payout SLA (timeframe), method (gift card? HSA credit? Something else?), funding source, and tax treatment. The UI will display whatever we confirm — it no longer hard-codes a number. |
| :---- |

**Decision:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_     

Owner / follow-up: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 

# **Part C — Operational & Technical Confirmations**

Lower-stakes for the CEO, but listed for completeness; mostly owned by Product/Eng/Integration. Surface only if he wants the full picture or to assign owners.

## **C1. Billing-vendor reconciliation**

* How will the billing vendor confirm what was billed and reimbursed — can they return an ID we supply, or only their own reference? (Determines how cleanly we match payments back to completions.) Owner: Integration.

* How do we handle a session billing that’s rejected or never reimbursed — does it block the member’s reward, or do we have a remediation/goodwill path? 

Owner: Product / Finance. (Has a member-trust angle worth a business view.)

## **C2. Billing integration method**

The mechanics of the connection to the billing vendor are not yet defined. The design treats this as a swappable “adapter” so the rest of the system doesn’t depend on the answer — but the integration itself needs to be specified with the vendor. Four things to nail down:

* **Outbound — what we send to the vendor.** The fields on each billable event: which member/identifier, which client, which care path and session (the instance/session code that lets reconciliation match later), the date, the amount, and any payer/claim identifiers required. 

Owner: Integration / Finance.

* **Inbound — how confirmations come back.** What a billed/reimbursed/rejected acknowledgment contains and, critically, whether it echoes our identifier so we can match it to the originating completion (ties to C1). 

Owner: Integration.

* **Frequency.** Real-time per event, or batched (e.g., daily/weekly)? This affects how quickly a member’s reward can clear and how the “payout pending” experience behaves. 

Owner: Product / Finance.

* **Method.** API (real-time/near-real-time, structured) vs. file-based exchange (batch, e.g., scheduled file drops)? The spec assumes this may be file-based to start; confirm the launch method and any planned evolution. 

Owner: Product.

* **Outbound — what we send to the client.** The fields on each incentive paid event: which member/identifier, which care path and session? (the instance/session code that lets reconciliation match later), the date, the amount, and any payer/claim identifiers required. Owner: Integration / Finance.

| Note Because the design isolates this behind an adapter with a defined contract, settling the method later does not block building the rest of EBB — but the OUTBOUND field set (especially the instance/session identifier we attach) must be decided early, because it’s what makes inbound reconciliation deterministic rather than guesswork. |
| :---- |

# **Quick-reference: decisions at a glance**

A compact list to track what got decided in the session.

| \# | Topic | Decision needed | Lead |
| :---- | :---- | :---- | :---- |
| A1 | EBB caps | Caps at all? Client / user / both / none | Business |
| A2 | Completion time limit | Time window to earn; is it a hard condition? | Business |
| A3 | Funded threshold | 100% funded required, or allow tolerance? | Finance |
| A4 | Retake cadence | How often can a member retake a path? Gap / cap / per-topic | Business \+ Clinical |
| A5 | Bill-plan opt-in | Must the member opt in to health-plan billing? | Business \+ Legal |
| A6 | Billing basis | Confirm engagement-based billing in contracts | Finance / Legal |
| A7 | Catch-up model | Right paradigm? Real-time/same-day billing OK? | Business \+ Finance |
| A8 | One-per-week limit | Hard stop, or admin/bypass override allowed? | Business \+ Finance |
| B1 | Program classification | Participatory vs. health-contingent; reward cap? | Legal |
| B2 | Consent instruments/cadence | HIPAA/ADA instruments; one-time vs annual | Legal |
| B3 | Pause/clock disclosure | Confirm \+ disclose clock runs during pause | Legal \+ Product |
| B4 | Mid-path opt-in | Opt-in mid-path: run ineligible (rec.) vs pro-rate | Product / Finance |
| B5 | Payout mechanics | Real SLA, method, funding, tax | Finance / Legal |
| C1 | Vendor reconciliation | Match key; rejected/stuck handling | Integration / Product |
| C2 | Billing integration | Fields sent; confirmation method/frequency (API vs files) | Integration / Finance |

