**Engagement-Based Billing (EBB)**

Technical & Functional Specification — Digital Care Paths

*Status: Working Draft — evolving. Requirements and integration details remain open and subject to team and legal review.*

*Last updated: June 19, 2026*

**Scope note:** This document specifies the EBB layer that sits on top of the existing Digital Care Path (DCP / DTx) platform. It captures decisions made to date, the data model and trigger architecture, and the open questions — functional, policy, and legal — that must be resolved before or during build. EBB integration requirements are provisional and chosen to optimize user experience, engagement, and ease of implementation.

# **Contents**

# **1\. Overview & Goals**

Engagement-Based Billing (EBB) shifts DCP monetization from the standard per-employee-per-month (PEPM) model toward billing tied to demonstrated user engagement. Under EBB, clients are billed as users progress through Digital Care Paths, and users may earn an incentive on program completion.

### **Goals**

1. Make DCPs more attractive to current and prospective clients at low/zero risk by tying cost to utilization.

2. Align billing with demonstrated engagement to create a sustainable, outcome-oriented model.

3. Drive higher DCP completion rates by tying reward to completion, motivating and facilitating completion, and making eligibility transparent.

4. Improve user health outcomes.

### **Key shifts from the inherited model**

* **Billing granularity is the session, not the topic.** A billable event fires on each session completion (\~10 per topic run), not only at final program completion.

* **One incentive per program completion.** The user incentive is tied to completing a topic (e.g., Weight Loss) and is gated on reimbursement of that run's billable sessions.

* **Topics become repeatable.** Users may complete a topic multiple times across their lifecycle (e.g., recurring conditions, new pregnancies), with each completion a discrete, retained, billable instance.

* **EBB is a per-client, opt-in layer.** It is provisioned only to EBB-enabled clients and flows only for users who have consented; the underlying DCP experience is unchanged for everyone else.

# **2\. Repeatable Topics & Instance Model**

Today a topic is effectively a once-per-lifetime experience, and the existing “start over” behavior is destructive: it decouples the prior progress-tracking data from the user so it is no longer accessible. EBB requires repeat completions to be a first-class, supported pattern, both because conditions recur across a user’s lifecycle and because each completed run is a billable opportunity.

### **Foundational principle: stop overwriting, start versioning**

Each run of a topic must be stored as a **discrete, retained instance** rather than overwriting prior data. This single decision enables both delivery phases below with no later data-model rework. The platform already stores each topic instance as an **MHC Group** with its own unique ID and a set of Group Custom Field (GCF) values, so the storage shape is already per-instance; the change is to retire-and-create instances instead of destroying them.

### **Phased delivery**

| Phase | Behavior | Requirement enabled |
| :---- | :---- | :---- |
| Phase 1 | Prior run archived / read-only; new run starts clean. Users retain a browsable completion history. “Completed” becomes a list of completion records rather than a single terminal flag. | Full EBB billing (clean per-completion audit trail). Phase 1 alone satisfies the billing goal. |
| Phase 2 | Baseline carry-forward: a new run can surface prior-run data (e.g., “last time your pain score was X”) to show change over time. | UX enrichment only — reads from instances already retained in Phase 1\. Likely a per-topic config flag (e.g., carry-forward on for knee pain, off for pregnancy). |

| Decision Phase 1 \= archived/read-only prior run \+ clean new start. Phase 2 \= per-topic baseline carry-forward. The shared prerequisite — store every run as a discrete retained instance — is locked now. |
| :---- |

# **3\. Data Model**

### **3.1 Existing per-instance container (MHC Group)**

Each topic instance is an MHC Group carrying GCF values. The relevant existing fields include:

| Field | Type | Role |
| :---- | :---- | :---- |
| GCF.DTxTopicID | Text | Identifies the topic for the instance |
| GCF.DTxTopicOwnerID | Text | Owning user |
| GCF.DTxTopicStatus | Text | Run state (Discover / ongoing / paused / Completed) |
| GCF.DTxTopicPercentComplete | Number | User-facing progress; recomputed by the action chain on each lesson completion |
| GCF.DTxTopicCreationDate / CompleteDate / PauseDate | Date | Lifecycle dates for the run |
| GCF.DTxTopicTS | Time Series | All user interactions; writes a session-level record (status, moduleCode) and a lesson-level record per interaction |
| GCF.DTxPrePostAssessmentScores | Time Series | Assessment results for the run |
| GCF.DTxPostTopicSurvey | Mapping | Post-topic survey for the run |
| GCF.DTxTopicFormulaID | Text | Reference to the topic metadata formula |

The gap: nothing chains Groups together as iterations of the same topic for the same user, and nothing carries billing state.

### **3.2 New / extended fields (additive, migration-safe)**

All additions are new GCF objects with defaults; existing Groups are untouched except a one-time backfill. No existing field shape changes.

| New field | Type / default | Purpose |
| :---- | :---- | :---- |
| GCF.DTxTopicIteration | Number, default 1 | Iteration ordinal for repeat runs of a topic by the same user. Existing Groups backfill to 1\. |
| Instance code (composite) | Derived | Stable run handle: {OwnerID}:{TopicID}:{Iteration}. Groups the run’s billable sessions and its single incentive; used as the join key to billing. |
| GCF.DTxBillableSessionCount | Number | Snapshot at run creation of the count of billable sessions for this run (see §3.3). The completeness target for the incentive gate. |
| GCF.DTxBillableEventFired | Boolean, default False | Lightweight per-instance pointer/summary that a billable event has fired (authoritative history lives in the user-level ledger). |
| GCF.DTxBillableEventDate | Date | Convenience summary date. |
| GCF.DTxReimbursementReceived | Boolean / summary | Lightweight per-instance summary of reimbursement state for display/audit. |

### **3.3 Session count & billable-session count**

Each topic carries a metadata formula (the “S0M0” formula) — a mapping containing sessionCount (e.g., sessionCount: sessionCountFormula("DiabetesManagement")) plus per-session structure keyed by moduleCode (e.g., DiabetesManagementS0\#M0).

* **Snapshot on creation.** sessionCount is currently stable but should not be relied on to stay so. Capture the billable-session count onto the Group at run creation so the incentive gate measures against the curriculum the user actually started, and so it need not be recomputed on the fly. Client curriculum edits mid-run will not move the target for an in-flight run.

* **Billable vs. total — build for “which,” default to “all.”** There is active discussion about not billing the introductory/assessment session. The moment billing can start after session 0, billability becomes a per-session property, not just a count. Foundation: mark billability as a per-session attribute in topic metadata (defaulted to billable in V1) and derive the count from it. V1 behavior equals “all billable”; introducing a carve-out later becomes a metadata flag change, not a schema migration.

| V1 scope guard V1 builds the capability to mark a session non-billable (metadata, defaulted billable) and has the trigger and the snapshot respect it. V1 does NOT ship any actual non-billable sessions, configuration UI, or per-client billable-set overrides. Capability now; configuration later. |
| :---- |

### **3.4 Reason / episode — deferred**

There is no concept of episode or reason today. The iteration ordinal covers ordering, billing, and history without it. A richer “episode” concept (e.g., distinct knee injuries kept conceptually separate) is a Phase 2+ candidate, additive when needed, and explicitly out of V1 scope.

### **3.5 Migration discipline**

* All schema changes are additive: new GCF objects with defaults; existing Groups untouched.

* One-time backfill: Iteration \= 1 for all existing Groups; DTxBillableSessionCount from the topic’s current sessionCount (accurate today, since stable).

* **Policy backfill needs sign-off.** Backfilling DTxBillableEventFired to reflect what has already been billed under the prior model is a policy decision (which historical completions count as already-billed), not an arithmetic correction. Per existing engineering principles, policy-encoding data changes require explicit sign-off before import.

# **4\. Billing Architecture**

### **4.1 The three-state financial lifecycle**

Each billable session moves through states. The first state is generated from user activity; the second and third are external acknowledgments that arrive later, asynchronously, possibly via file, and possibly out of order. The system controls only the first; it learns about the others.

| State | Meaning | Source |
| :---- | :---- | :---- |
| BILLABLE | User completed the session; we may bill | Generated internally from the completion fact |
| BILLED | Sent to the billing vendor | Internal action / vendor acknowledgment |
| REIMBURSED | Vendor / health plan has paid | External acknowledgment (inbound, async) |
| REJECTED | Vendor declined the billed item | External acknowledgment |

The **incentive gate sits at REIMBURSED**: the user incentive is awarded only once all billable sessions of a run are reimbursed. This asymmetry — we own “billable” but only hear about “reimbursed” — is the central design constraint.

### **4.2 User-level billing ledger (record of truth)**

Billing/reimbursement is financial data on a different clock and a different owner than user-interaction data, and a single inbound vendor file may pay for many sessions across many topics. The authoritative billing history therefore lives as an independent time-series-style ledger at the USER level (not inside the per-run DTxTopicTS, and not as bare numeric counters). Groups and users are distinct entities; holding the ledger at the user level gives a complete billing picture for the user independent of any one topic, while each record ties back to its originating Group.

Each ledger record represents one financial state-transition:

| Field | Description |
| :---- | :---- |
| groupID | Ties the record back to the topic instance (Group). The bridge between user-level ledger and topic-level data. |
| topicID, iteration | Which topic and which run. |
| moduleCode | Which session within the run (the billable unit). From DTxTopicTS. |
| eventType | BILLABLE | BILLED | REIMBURSED | REJECTED (plus admin-origin marker — see §4.5). |
| eventDate | When the transition occurred. |
| amount | Monetary amount for the event. |
| vendorRef | Vendor-side reference, captured to support reconciliation (see §5). |

Full billable-unit join key: {OwnerID}:{TopicID}:{Iteration}:{SessionID}, where SessionID is the session’s moduleCode. Without the session in the key, two completions in one run are indistinguishable to an inbound vendor file.

| Why not bare counters, and why not DTxTopicTS Running totals (totalBillable, totalReimbursed) cannot answer “which session was reimbursed?” — the exact question the incentive gate and vendor reconciliation ask. Totals, where useful, are a derived projection of the ledger, not the source of truth. DTxTopicTS is per-Group user-interaction data on the user-action clock. Billing arrives later, on a different clock, and reconciles at the user/client level. Keeping financial state out of DTxTopicTS avoids conflating two clocks and two owners — and keeps DTxTopicTS shape unchanged for migration safety. |
| :---- |

### **4.3 Two downstream triggers (single chokepoints)**

Billing logic runs as triggers downstream of the data they watch, never inline in the user action chain. This makes each emission point a single chokepoint where idempotency is enforced once, and makes billing independent of the cause of the underlying write — user action, administrative override, replay, or migration all flow through the same guard.

### **Trigger A — emits BILLABLE**

* Watches DTxTopicTS for a session-level completion record (the record carrying moduleCode reaching completed status). Ignores lesson-level writes.

* **Billable decision:** is this session’s moduleCode in the topic’s billable set? (V1: all are.)

* **Idempotency guard (the single most important correctness rule):** emit BILLABLE for a (groupID, moduleCode) only if no BILLABLE record already exists for it. Keyed on the business fact — “this session of this run is billable” — not on the trigger invocation, so running the trigger any number of times over the same completed session yields exactly one BILLABLE record. This prevents double-billing on re-evaluation or replay.

* **Reads TS, writes the ledger; never writes back to TS.**

### **Trigger B — awards the incentive**

* Watches the ledger for REIMBURSED records.

* On each REIMBURSED write, checks: for this groupID, does the reimbursed count equal the run’s DTxBillableSessionCount snapshot?

* If yes and the incentive has not yet been awarded, award it (idempotent per group). Because this is gated on the ledger rather than on topic status, it fires whenever reconciliation completes the set — independent of how or when the vendor file arrives.

| Why triggers, not inline action-chain steps Inline billing would weld “emit a billable event” to “user did a thing,” forcing the idempotency guard to be enforced at every call site and leaving admin corrections, replays, and backfills with no clean home. A downstream trigger is the single point through which all emissions flow, regardless of cause — one guard, one location. The trigger must be safely re-runnable; an admin can re-run it without fear of double-emission because the guard is keyed on the business fact. |
| :---- |

### **4.4 Completion detection — signal choice**

DTxTopicPercentComplete is **not** the billing signal. Its formula recomputes on every **lesson** completion (reading completed-sessions / all-sessions), it lives inline in the action chain (so any future administrative bypass would skip it), and it special-cases topicStatus \== “Completed” to force 100%. Billing therefore hooks off the **session-level completion record in DTxTopicTS**, which carries moduleCode, reaches a detectable completed status, and is written by any legitimate completion path. Percentage-complete remains exactly as-is as a user-facing progress indicator (untouched — migration-safe).

The existing “Program total sessions and sessions completed” formula (the sessionInfo logic) already counts completed sessions against the topic total; the billing/incentive layer extends the same pattern to count reimbursed sessions against the billable-session snapshot.

### **4.5 Administrative override**

There is no formal “auto-advance” concept today; the design simply must not break if one is introduced (e.g., an admin advancing a user past a session, bypassing the action chain). Because billing keys off the completion record in DTxTopicTS rather than the action chain that produced it, any process that legitimately completes a session — user action, auto-advance, replay, migration — produces the same completion record and therefore the same billing behavior, automatically and idempotently.

| Open question — override semantics Define whether administrative override includes manual creation of a billable event, manual voiding, or both. The ledger should carry an admin-origin event type or audit field so human-created or human-voided entries are distinguishable from trigger-generated ones, for audit and client-trust. Dependency: any future auto-advance must write the same-shaped session-level completion record to DTxTopicTS, or the trigger will not recognize it. |
| :---- |

# **5\. Vendor Reconciliation (Integration Seam)**

How the billing-vendor integration will acknowledge billed and reimbursed items is not yet known and may be file-based to start. Rather than block on it, treat the vendor boundary as an adapter with a defined contract and build everything on our side of that contract now.

* **Defined inbound contract.** Specify the minimum an inbound acknowledgment must contain to be matchable: a stable identifier (ideally the instance/session code we supply on the outbound side), an amount, a status, and a date. Build the ledger to ingest that shape. Whether it arrives as a file, an API callback, or a manual upload becomes a swappable implementation detail of the adapter, with the ledger unchanged.

* **The instance/session code is the join key.** If outbound billing carries {OwnerID}:{TopicID}:{Iteration}:{SessionID}, the inbound file can reference it and reconciliation is deterministic. Without a stable per-session identifier, file-based reconciliation degrades into fuzzy matching on dates and topic.

* **Reconciliation writes REIMBURSED (or REJECTED) records to the ledger, which in turn drives Trigger B and the incentive gate.**

| Open questions — vendor integration Matching key: can the vendor echo an ID we supply on the outbound side, or will they return only their own reference plus topic/date? (Determines whether we must store a vendorRef mapping at billing time.) Rejected / never-reimbursed handling: if a session billing is REJECTED or stuck, does that permanently block the user’s incentive (penalizing the user for a billing failure they did not cause), or is there a remediation path / a policy to award on completion despite a stuck reimbursement? This is the point where a billing-side problem can become a user-facing broken promise. |
| :---- |

# **6\. Incentive: Eligibility & Payout Model**

The incentive is implemented as a native MHC incentive object (one per topic), not as bespoke EBB code — see §11.6. The incentive object’s own rules express everything below as configuration. There are TWO distinct gates, answering two different questions about two different populations.

### **6.1 Two gates: eligibility (presented?) vs. payout (earned?)**

| Gate | Question it answers | Lives on |
| :---- | :---- | :---- |
| Eligibility | Should this member ever be PRESENTED this incentive at all? (structural) | The incentive object’s eligibility rule (and its reverse, eligible→ineligible). |
| Payout | Has this member actually EARNED the money on this run? | The incentive object’s completion/payment rule. |

Why the split matters: opt-in is a member CHOICE, not a structural qualifier. Keeping it on the payout side means an eligible-but-not-yet-opted-in member can still be SHOWN the opportunity (“you could earn up to $100 — opt in to start earning”), which is what motivates opt-in. If opt-in were an eligibility condition, qualifying members would look structurally excluded and we couldn’t present the carrot.

### **6.2 Eligibility rule (structural — who is presented the incentive)**

* **Becomes eligible:** high-level structural qualifiers — e.g., 18+, covered by a participating medical plan, in an EBB-enabled client, and any other program-level criteria.

* **Becomes ineligible (reverse, structural):** loss of plan coverage; aging/qualifier change; client disables EBB; and CAP TRIPPED (client or user). Cap sits HERE, not on payout — once capped, the member stops being presented payout potential, so we never dangle a reward that cannot be paid.

* **Reversible.** If a structural condition returns (cap resets at plan-year, coverage restored), eligibility can return. Contrast with the “done” rule (§6.4).

### **6.3 Payout / completion rule (earned — has the member earned this run’s reward)**

All conditions must hold. Each guards a distinct failure mode.

| Condition | What it requires | Guards against |
| :---- | :---- | :---- |
| Opted in | Member’s current consent state is CONSENT, valid against the re-consent policy. | Billing/paying without member authorization. |
| Funded billable events | The run’s billable sessions REIMBURSED in the ledger (default 100%). | Paying an incentive we were not funded for. |
| Topic completed | The member finished the program. | Paying for an unfinished program. |
| Not over max-completions | Member hasn’t exceeded the incentive’s configured max-completions. | Paying beyond the configured number of awards. |
| (Optional 4th) Within time | Completed within the allowed window (if adopted). | Unbounded billing-to-payout drift; see open question. |

* **Payout-blocking reversals (eligible→ineligible on the payout side):** opt-out; consent lapse (re-consent now required, not given); reimbursement clawback or late REJECTED dropping the run below the funded threshold; completion-status reversal. These re-evaluate on event or nightly and can withdraw a not-yet-paid award.

| Funded threshold Default \= 100% of billable sessions funded (safe default: the incentive is always fully funded). A lower threshold (tolerating small gaps) is a deliberate margin/goodwill choice, configurable, pending Finance confirmation. |
| :---- |
| **Open question — possible 4th payout condition: completion-time limit** Should payout also require completion within a bounded time from start? See §11.5 for the mechanics (configurable \~1-year clock, one-session-per-week pacing, the resulting impossibility condition, restart-to-reset). Note: if adopted, the time-window condition behaves TERMINALLY for a run (the window closed) even though other reversals are reversible — the member’s path forward is a fresh run. For team/Finance/Clinical. |

### **6.4 The “done” rule — reserved, not used**

The incentive object also supports a “done” rule that puts an incentive into a state where it never evaluates again for a user (terminal, non-reversible). No current case requires it — all our reversals are reversible, so eligible→ineligible is the correct tool, NOT “done” (using “done” for a cap-trip would permanently kill an incentive that should reactivate when the cap resets). Reserved for a possible future TRUE lifetime cap (a per-member maximum across all time). Recorded so it is not misapplied.

### **6.5 Evaluation timing & gate mechanics**

* Rules evaluate on EVENT (e.g., a ledger or group field updates) or on TIME (nightly sweep). The nightly sweep is the safety net that catches asynchronously-arriving reimbursements; event-triggering is the optimization. This resolves the async-reimbursement problem: the payout rule does not need to fire exactly when reimbursement lands — the nightly pass re-checks runs now fully reimbursed and pays those that qualify.

* Payout is measured at the run level: for a given run (groupID / instance code), all billable sessions REIMBURSED, compared against the run’s DTxBillableSessionCount snapshot (not a hardcoded number), AND the other payout conditions.

* One award per eligible run, consumed against max-completions; the rule must be idempotent so a run cannot consume two awards.

* **Member notification (recommendation):** because payout state can flip eligible→ineligible→eligible (e.g., a late rejection then recovery), notify the member on the SETTLED payout (paid) rather than on every intermediate flip, to avoid a confusing on-again/off-again experience.

# **7\. Consent: Opt-In & Opt-Out**

A user must opt in / accept terms before EBB flows for them. If a user is not opted in, they interact with DCPs fully and normally, but no billing and no incentive occur for them — EBB is layered on top of the care experience and gated by consent.

### **7.1 Requirements (committed)**

* Capture opt-in (terms acceptance) before any billable event or incentive accrues for a user.

* Store opt-in status, opt-in date, and the accepted-terms version/instrument at the user level.

* Trigger A gates on opt-in: no opt-in ⇒ the session completes and progresses normally, the TS record still writes, but no BILLABLE event fires and no incentive accrues.

* Opt-out (planned): prospective only — future billable events cease and not-yet-earned incentive is forfeited; billing already done stays and settled financial events are not reversed or clawed back.

### **7.2 Consent storage structure**

Consent is stored on a user custom field as a consent timeseries (the source of truth) plus a derived current-consent-state value for cheap hot-path checks — mirroring the ledger/projection pattern used for billing.

* **Consent timeseries.** Each record is one consent event: CONSENT or OPT\_OUT, with date and the terms version/instrument in force at that moment. Opt-out lives in the same timeseries as OPT\_OUT records — so opt-out and re-consent are ordinary records, not special cases.

* **Derived current state — a user custom field (“Date of Last Consent”), stored as a DATE.** The most recent effective CONSENT date, derived from the timeseries. The opt-in gate derives “currently consented” at read time by comparing this date against the re-consent policy minimum (benefit-year start or ad hoc reset) — so consent that lapses by the passage of time (crossing the re-consent boundary) is handled automatically, with no sweep needed to flip a flag. A null/absent value \= never consented (first-time consent needed). Same source-of-truth-plus-projection pattern as the billing ledger and paid-to-date totals; storing a date (not a boolean) keeps it self-correcting and keeps re-consent a pure policy comparison.

* **Re-consent is a policy comparison, not a hard-coded cadence.** Re-consent logic compares the latest CONSENT date against a configurable minimum — a benefit-year start date or an ad hoc reset value. This keeps cadence (annual / aligned to client benefit-year start / ad hoc) a configurable policy on top of the structure, rather than baked into it. A null/never value \= first-time consent needed.

Periodic re-consent is driven declaratively by client custom fields (in EBB \- Client Config Elements for the policy values, plus one trigger field in EBB), with NO service dependency to push date updates and NO frequency setting in deployment. Rather than have every user’s consent field evaluate the calendar nightly, a SINGLE client-level field evaluates nightly and fans out via an event trigger:

| Field | Program | Purpose |
| :---- | :---- | :---- |
| Consent Refresh Start | Client Config Elements | A DATE (m/d/y) \= the effective start of the re-consent program. Month/day drives the recurring annual boundary; the year is a floor (boundaries never predate program start). E.g., 2026-01-01. |
| Enable Consent Refresh | Client Config Elements | Boolean. If false, consent never lapses by time. If true, the boundary applies. |
| Trigger Consent Refresh | EBB | Client field (DATE value) that evaluates NIGHTLY: when the run’s reference date has reached/crossed the current boundary, it sets itself to today’s date. Its update is the EVENT that fans out to users. |
| Date of Last Consent | (user field) | Triggered by Trigger Consent Refresh updating: re-evaluates whether this user is due for refresh. If due → returns null (must re-consent); if not → returns context(“this”) (keeps current value). |

* **One nightly evaluation, not N.** Only Trigger Consent Refresh polls the calendar. When it flips to now(), that single update event cascades to the user-level Date of Last Consent fields, which recompute their own currency. Same single-chokepoint, event-driven pattern as the billing trigger — far less nightly compute and one clear place to reason about “did the refresh fire.”

* **Nulling Date of Last Consent is safe BECAUSE the timeseries is the durable record.** When a user is due for refresh, Date of Last Consent is set to null — which carries the same meaning as never-consented (the opt-in gate simply checks non-null). This destroys the projection’s prior value, but the consent timeseries durably preserves the full history (every CONSENT/OPT\_OUT with date and terms version). Date of Last Consent is a DISPOSABLE PROJECTION; the timeseries is the audit source of truth. This dependency is load-bearing: Date of Last Consent must never be treated as the sole consent record, precisely because the refresh nulls it.

The boundary is a SINGLE shared calendar line for all users — the most recent occurrence of the Consent Refresh Start month/day on or before today — not a per-user anniversary. The stored YEAR acts as a program-start floor: boundaries never predate Consent Refresh Start, so enabling re-consent partway through a year does not retroactively lapse members who consented before the program began.

| Open question — shared boundary vs. rolling window The shared-boundary model aligns everyone’s re-consent to the plan/benefit year (clean for “renews each plan year”), but a member who consents shortly before the boundary gets a short first window (e.g., consent Dec 20, boundary Jan 1 → lapses in 12 days). The alternative is a rolling 12-month window (valid 365 days from Date of Last Consent), giving everyone a full year but decoupling from the plan-year cadence. The refresh-start-date approach implements the shared-boundary model. Confirm with Legal alongside the consent-cadence decision (this is a compliance posture, not just UX). |
| :---- |
| **Accepted behavior — overnight timing & the one-day bias** All consent values are stored as DATES (no time component), and the timezone is always the server timezone (consistent), so within-day clock time does not affect the date comparison. Decision: the team ACCEPTS a possible one-day-late reset. If the nightly job starts before midnight on the boundary date, its reference date is still the prior day, so the reset lands one day late and the member keeps consent for one extra day. This is the safe bias (err toward still-consented, never wrongly-lapsed), and the forward-only trigger self-corrects on the next night’s run — so the exposure is at most \~one day and is self-healing. Implementation guidance (not a blocker): capture ONE reference date at the start of each nightly run and apply it to every user in the batch, so a run that crosses midnight mid-execution does not split across two dates. Scheduling the job comfortably after midnight further reduces the chance of the one-day-late case. Boundary comparison is INCLUSIVE (\>=): a member who consents on the boundary date itself is correctly current (with date-only values, consenting exactly on the boundary is a common case, so inclusivity matters). |

**Formula 1 — Trigger Consent Refresh (client field, evaluates nightly). MHC-style; verify exact function signatures against the platform library:**

\# Compute the current shared boundary from Consent Refresh Start,  
\# then flip this field to today’s DATE once the run reference date  
\# has reached/crossed the boundary. All values are dates (no time).  
   
assign(gcfv(id: \<ConsentRefreshStart\>), "refreshStart");  
assign(gcfv(id: \<EnableConsentRefresh\>), "enabled");  
assign(date(now()), "today");          \# truncate to date; one ref date per run  
   
\# this year’s occurrence of the refresh month/day  
assign(date(year("today"), month("refreshStart"), day("refreshStart")), "boundaryThisYear");  
assign(  
  if("boundaryThisYear" \<= "today", "boundaryThisYear",  
     date(year("today") \- 1, month("refreshStart"), day("refreshStart"))),  
  "boundary");  
\# never use a boundary earlier than the program start  
assign(if("boundary" \< "refreshStart", "refreshStart", "boundary"), "boundary");  
   
\# Fire only when enabled AND the boundary has been reached/passed (inclusive)  
if(and("enabled" \== true, "today" \>= "boundary"), "today", context("this"))

**Formula 2 — Date of Last Consent (user field, triggered when Trigger Consent Refresh updates). If the user is due for refresh, return null; otherwise keep the current value:**

\# Re-evaluate this user’s consent currency against the shared boundary.  
\# Due for refresh  \-\> null (must re-consent).  
\# Not due          \-\> context("this") (keep current Date of Last Consent).  
   
assign(context("this"), "lastConsent");  
assign(gcfv(id: \<ConsentRefreshStart\>), "refreshStart");  
assign(gcfv(id: \<EnableConsentRefresh\>), "enabled");  
assign(date(now()), "today");          \# date-only reference  
   
\# If refresh disabled or never consented, leave the value unchanged  
if(or("enabled" \== false, "lastConsent" \== null), context("this"),  
   
   \# else compute the current boundary (same logic as Formula 1\)  
   item(  
     assign(date(year("today"), month("refreshStart"), day("refreshStart")), "boundaryThisYear"),  
     assign(  
       if("boundaryThisYear" \<= "today", "boundaryThisYear",  
          date(year("today") \- 1, month("refreshStart"), day("refreshStart"))),  
       "boundary"),  
     assign(if("boundary" \< "refreshStart", "refreshStart", "boundary"), "boundary"),  
   
     \# due for refresh if last consent predates the boundary  
     if("lastConsent" \< "boundary", null, context("this"))  
   ))

*Notes: function names (gcfv, date, year/month/day, now, and, or, item, context) follow the idiom of the platform’s sample formulas but must be verified against the actual function library — especially date arithmetic and the context(“this”) self-reference. The recurring boundary depends only on the client anchor’s month/day and today — never on the user’s own consent day/month — so it is one shared line and cannot go stale; the stored year prevents retroactive lapse before program start. Edge case: a Feb 29 month/day should be resolved on non-leap years per existing platform convention. Formula 2’s structure (assign-then-evaluate) may need to be expressed via the platform’s sequencing construct rather than item(); the logic, not the wrapper, is the spec.*

* **Consent copy is configurable, including frequency language.** The member-facing consent text (e.g., “one enrollment covers every care path, renewed once a year”) is configurable so the stated cadence can change with the policy without a redesign. The design models a single, global, annual opt-in covering all paths as the default — to be confirmed with Legal.

* **Audit & versioning.** The timeseries answers “did this user consent, when, and to which terms version” — questions a single overwritten date or boolean cannot answer — which matters for a program that bills a health plan and collects a HIPAA authorization.

### **7.3 Placement in the user flow**

* **Surfaced at first DCP open as a one-time enrollment moment** (then governed by the re-consent policy above). Because the first billable event is the first SESSION COMPLETION, consent has a full session of runway and never needs to block STARTING a DCP.

* **Opt-out location:** to be finalized in design; candidates include account/profile settings and/or the DCP topic page. The no-consent card state (§11) provides a natural re-entry path back to consent.

### **7.4 Proceed-without-consent — client revenue-model config**

Whether a non-consenting user may proceed is an explicit client-level configuration keyed to the client’s revenue model — not inferred from the EBB on/off flag (EBB-only and PEPM+EBB clients both have EBB enabled, yet behave differently).

| Client revenue model | Consent behavior | If user does not consent |
| :---- | :---- | :---- |
| PEPM-only (DCPs, no EBB) | Consent logic skipped entirely (presence-based gating; no billing objects provisioned). | N/A — no EBB. |
| PEPM \+ EBB add-on | Consent optional to proceed. EBB is incremental to guaranteed base revenue. | User uses the DCP fully; no billing, no incentive for that run. |
| EBB-only (sole revenue source) | Consent may be required to proceed (no revenue funds the DCP use otherwise). | May be blocked from proceeding — exact behavior is an open question (§11). |

| Late-consent & pre-EBB rule If a user proceeds without consent and later consents, the run’s pre-consent session completions never billed, so the run is under-funded and is treated as non-incentive (fails eligibility condition 1\) unless the funded threshold says otherwise. Same logic applies to a run begun before EBB was layered onto the client. Future runs bill normally. |
| :---- |

### **7.5 Industry / regulatory context (not legal advice)**

*The items below are surfaced to sharpen the questions for compliance/legal counsel. This area is genuinely unsettled, and the classification of this specific program drives the answers. This is not legal advice; we are not lawyers.*

* **Participatory vs. health-contingent is the hinge.** Wellness programs split into participatory plans (no health-related standard to earn the reward; under HIPAA, no limit on incentive amount) and health-contingent plans (reward tied to performing an activity or hitting an outcome; subject to caps). An incentive tied to completing a program most likely reads as activity-only health-contingent. This classification determines whether a regulatory cap even applies to the incentive.

* **The incentive may collide with a regulatory cap.** For health-contingent programs tied to a group health plan, guidance has limited incentives to 30% of the cost of self-only coverage. However, the EEOC withdrew its wellness-program incentive limits after a federal court decision, so meaningful legal uncertainty remains about how much is too much. Business caps (§8) and any regulatory cap are different things; the cap mechanism should be able to express both.

* **Notice vs. authorization are different instruments — we may need both.** The ADA rule requires a notice, not a signed authorization; but other laws, notably HIPAA, may require authorization. Because EBB bills a health plan and moves PHI for payment, “accept terms” likely needs to be a HIPAA authorization plus an ADA-style notice. Capture which instrument(s)/version the user accepted, not just a generic flag.

* **Timing supports the upstream consent gate.** Notice/consent must precede any health-information collection; providing it only after the fact is non-compliant. This validates capturing consent at or before the first billable session, with no retroactive billing of pre-consent sessions.

* **Annual vs. one-time leans annual.** No single bright-line rule was found for this exact use; it depends on how the authorization is written. The benefit year (the 12-month enrollment period already in the DCP model) is a natural re-consent cadence and aligns with rollover logic. Recommendation to the team: align consent to the benefit year (annual re-consent) unless legal confirms a durable authorization is acceptable.

| Open questions — consent (for team / legal) Is consent one-time or annual (re-consent each benefit year)? What exactly does the consent cover — health-plan billing, incentive terms, data use? Is opt-out required at all? If so, confirm prospective-only mechanics (working assumption: billing already done stays; affects only future events; user does not receive the incentive). Confirm program classification (participatory vs. health-contingent) and the applicable incentive instrument(s): HIPAA authorization and/or ADA notice. |
| :---- |

# **8\. EBB Caps**

Support configurable caps that disable EBB payouts when a threshold is reached, at two levels: client-level (total client EBB billing/payout hits a threshold) and user-level (an individual user within a client hits a threshold).

### **8.1 Requirement (committed) & foundation**

* Plan to support client-level and user-level caps.

* **Maintained running totals.** A cap is a runtime gate evaluated against accumulating totals, so the system maintains client-level and user-level running totals as a projection of the ledger, kept in sync as ledger events land. The ledger remains the source of truth; the cap check reads the cheap projection. (Same “events are truth, counters are convenience” pattern, with the counters now load-bearing for a gate.)

* **Regulatory cap support.** The cap mechanism may also need to enforce a regulatory cap (e.g., a percentage-of-coverage limit) in addition to business thresholds, pending the legal classification in §7.5.

| Open questions — cap mechanics (for team) Should there be a cap at all — at the client level, the user level, both, or neither? (This precedes the mechanics questions below; the requirement to date is to SUPPORT caps, not a decision that they will be used.) Does hitting a cap stop billing, stop payouts, or both? (Billing to the health plan and the user incentive are different money flows.) Hard stop (nothing more, period) vs. honor-in-flight (e.g., stop new enrollments but honor work already in progress)? What happens to earned-but-unpaid state when a cap trips mid-stream (a user who completed sessions and was promised an incentive before the cap was hit)? |
| :---- |

# **9\. EBB Enablement & Deployment**

One code base serves both EBB and non-EBB clients. EBB differs per client only in what is provisioned, not in source.

### **9.1 Presence-based gating \+ authoritative flag**

* **Presence-based runtime gating.** Billing objects (triggers, user-level ledger, billing GCFs, incentive-gate logic) are provisioned only to EBB-enabled clients. Non-EBB clients incur no per-user billing check on the hot path because the billing logic is simply not present in their configuration.

* **Authoritative client-level EBB flag.** A single client-level setting declares EBB intent. It is the source of truth read by deployment tooling, reporting, support, and any DCP UX that must know whether to surface EBB/incentive language. It is not checked per user interaction (that is the cost presence-based gating avoids); presence is the optimization, the flag is the truth, and the two must agree.

### **9.2 Deployment & configuration requirement**

* EBB enablement is a per-client deployment and configuration decision.

* Enabling EBB for a client \= provision billing objects \+ set the client EBB flag. Disabling \= the reverse (subject to in-flight resolution, §10).

* The codebase remains single/shared; EBB vs. non-EBB differ only in what is provisioned per client.

* **Deployment validation.** Assert consistency: a client flagged EBB has the billing objects, and a client with billing objects is flagged EBB. A mismatch is a misprovisioning error.

### **9.3 Where EBB objects live (program placement)**

EBB objects are organized into two programs, separating the shared engine from per-client configuration:

| Program | Contains | Why |
| :---- | :---- | :---- |
| EBB | The incentive objects and the billing objects (billing ledger, Trigger A / BILLABLE emission, the billing GCFs, reconciliation handling). | The shared EBB engine — the structures and logic common to all EBB clients. |
| EBB \- Client Config Elements | The eligibility rule (a formula) and configurable items such as the DTx Incentive Amount (a client custom field), and other per-client knobs. | Per-client configuration kept separate from the engine, so clients can vary amount, eligibility, and policy without touching shared objects. |

* **One incentive object per DCP path.** Each topic (e.g., Insomnia) has exactly one incentive object in EBB; repeatability is handled by that object’s max-completions, not by multiple objects.

* **Configuration vs. engine separation mirrors the build split.** The shared engine (EBB) is the same everywhere; what varies per client lives in EBB \- Client Config Elements — consistent with presence-based provisioning (§9.1) and the “build the capability, configure later” principle.

Named client custom fields in EBB \- Client Config Elements (caps & enablement):

| Client custom field | Purpose |
| :---- | :---- |
| Enable EBB | Authoritative per-client flag declaring EBB intent (the source of truth for presence-based gating, §9.1). |
| Annual Client Cap Amount | Annual client-level cap threshold — the ceiling the client-level paid-to-date total is checked against. |
| Annual User Cap Amount | Annual user-level cap threshold — the ceiling each user’s paid-to-date total is checked against. |
| Cap Reset Date | The annual cap boundary (e.g., plan-year start) at which paid-to-date totals reset and a tripped cap reverses. Caps are annual (see the V1 attribution proposal below). |
| Client Financial Rollup | A single client-level, year-keyed timeseries holding the client’s EBB financial picture per year (see §9.4). The client cap check reads the current year’s incentives-paid value from it. |

And one user custom field supporting the user cap (placement: user-level, read by the user cap check):

| User custom field | Purpose |
| :---- | :---- |
| EBB Incentives Paid (user, by year) | User-level year-keyed timeseries of incentives paid — a maintained projection, read by the user cap check (Annual User Cap Amount). Narrower than the client rollup (a user has no billing-state view); the current year’s value is the user cap basis. |

* **Rollup/projection fields are maintained, not hand-entered.** Both the client rollup and the user incentives-paid timeseries are kept in sync from the billing ledger and incentive records (which remain the source of truth). They exist so the cap rules can read the current year’s value cheaply on the hot path — the same events-are-truth, counters-are-convenience pattern used throughout.

* **Cap evaluation reads the current year’s value.** The eligibility rule’s cap condition (§6.2) compares the current year’s paid total against the annual cap amounts; Cap Reset Date marks the annual boundary. Year-keying means there is nothing to actively reset — a new year’s payouts simply land in the new year’s entry (no reset job, no reset-timing edge). Whether caps are switched on at all, and their values, remain per-client business decisions (§8).

### **9.4 Annual caps & event-year attribution (V1 proposal — Finance to confirm)**

Caps are assumed ANNUAL. Because EBB events deliberately spread across time — a single run’s \~10 billable sessions span weeks, and the incentive pays out weeks after that — a run’s activity can straddle an annual boundary, raising “which year’s cap does this count against?” The V1 proposal attributes each event to the year in which THAT event occurs:

| Flow | The “event” | Counts against the cap-year of… |
| :---- | :---- | :---- |
| Billing | Each session’s billable event | The date that session is billed. A run straddling the boundary splits naturally — each session self-attributes by its own date; no single “which year” question. |
| Incentive | The payout | The date the incentive is PAID (not earned). A run completed in December but paid in January consumes the NEW year’s cap. |

* **Why payout-date (not earned-date) for the incentive.** Payout-date attribution is the only option that never requires reopening a closed cap year or reconstructing historical totals to decide eligibility — the cap check reads the CURRENT year’s running total at pay time, the moment it is already evaluating. This keeps the paid-to-date fields as current-period running counters that reset at the boundary (via the same refresh mechanism used for consent, §7.2), rather than year-attributed historical buckets.

* **The trade-off.** A December-earned / January-paid incentive consuming the new year’s cap is the cost; it is defensible (cash goes out in the new year, against the new year’s budget) and avoids all historical-lookback machinery. The alternative — earned-date attribution — is more intuitively “earned in 2025” but would require historical per-year cap state and a policy for the already-full/already-closed prior year, which V1 avoids.

| For discussion — Finance (V1 proposal) Proposed for V1: annual caps; each event attributed to the year it occurs — billing by bill date, incentive by payout date. Confirm: (1) caps are annual and aligned to the plan-year boundary (sharing the consent-refresh reset mechanism); (2) billing and incentive cap treatment (one cap or separate — ties to A1); (3) acceptance of payout-date attribution and its December-earned/January-paid consequence, vs. the heavier earned-date model. Flagged as a proposal, not a locked decision. |
| :---- |

### **9.5 Client Financial Rollup**

A single client-level, year-keyed timeseries giving the full EBB financial picture per client per year — both money in (billing, by state) and money out (incentives) — so revenue-vs-payout is visible at a glance and the cap checks have a cheap value to read. It is a PROJECTION of the billing ledger and incentive records, not primary data.

Each year’s entry holds four tallies:

| Tally | Meaning | Side |
| :---- | :---- | :---- |
| Billed | Total submitted to the vendor (BILLED events). | Money in (submitted) |
| Received | Total paid by the vendor (REIMBURSED events). The spread vs. Billed is collection efficiency. | Money in (collected) |
| Rejected | Total declined (REJECTED events). The reconciliation-health signal. | Money in (failed) |
| IncentivesPaid | Total incentive payout to members. The basis for the client incentive cap. | Money out |

* **Projection discipline — the ledger wins.** The billing ledger and incentive records remain the single source of truth. The rollup is computed/refreshed from them (on the nightly pass or on demand); if the rollup and the ledger ever disagree, the ledger is authoritative and the rollup is rebuilt. A financial summary must never drift from the records it summarizes.

* **Year-keyed, persistent.** Entries are keyed by year and persist after the boundary passes — so prior years remain queryable for audit, reconciliation, and reporting, and the cap check simply reads the current year’s entry. Aligns with the annual-cap, event-year attribution model (§9.4): each event lands in the year it occurs (billing by bill date, incentive by payout date).

* **Hot-path reads.** The client incentive cap reads the current year’s IncentivesPaid; a client BILLING cap (if ever introduced) would read Billed or Received. The Billed-vs-Received spread exposes stuck money; Rejected flags reconciliation problems. (Field names IncentivesPaid, Billed, Received, Rejected have no spaces or special characters, per timeseries naming constraints.)

| V1 scope boundary — rollup vs. reporting The rollup holds only the few tallies operational logic reads on the hot path plus the at-a-glance client financial view — four tallies per year, both sides of the ledger. It is NOT a reporting cube: per-topic, per-month, per-cohort, or other purely analytical breakdowns belong in a reporting layer querying the ledger directly, not in maintained custom fields. Test for any future addition: does a runtime rule or a routinely-needed client view read this, or is it analytics? If analytics, it goes to reporting. The user-level rollup stays narrower (incentives paid by year), since a user has no billing-state view. |
| :---- |

# **10\. Cross-Cutting: In-Flight Resolution Policy**

Caps (§8), client EBB-disable (§9), and user opt-out (§7) are the same shape: a gate that goes from open to closed mid-lifecycle, raising one shared question — what happens to earned-but-unpaid state. Define one consistent resolution rule rather than answering it three times.

* Future billable events cease immediately when EBB stops for any reason (cap, disable, opt-out).

* **Retain the ledger for audit.** The ledger cannot be deprovisioned while it holds unresolved financial records without orphaning real money-state. “Disable EBB” therefore likely means “stop emitting new billable events but retain the ledger until outstanding records resolve,” not a clean object removal.

* Define the treatment of already-earned-but-unpaid incentives under each stop reason.

| Policy — needs sign-off The in-flight resolution rule encodes money/user-trust policy (and per existing engineering principles, policy-encoding changes require explicit sign-off). It also depends on contract/billing-relationship terms that may sit outside engineering ownership. |
| :---- |

# **11\. UI & Engagement**

This section specifies the user-facing surfaces that present EBB. A guiding principle runs through all of them: the health goal is primary and the incentive is a secondary nudge. Beyond fitting the care brand, this posture reduces completion-farming pressure and sits more defensibly against the ADA voluntariness concern (§7.5). Reward language is conditional throughout (“eligible to earn up to $100”), because the incentive genuinely is conditional on the eligibility principle (§6).

### **11.1 DCP menu page — the durable status surface**

Incentive status lives on the DCP menu page (the listing of DCP cards) rather than only in the buried rewards menu — status belongs where the user already is. This is the durable, checkable surface that compensates for the deliberate choice NOT to add a prominent persistent incentive widget.

* **Page model (recommended): one card per topic, expandable to per-run history.** The card shows the live run state; tapping reveals prior runs, each with its own incentive status. This keeps the page calm as topics become repeatable (§2) while preserving full per-run history. (Alternative considered: one card per run — unambiguous but grows unbounded with repeats.)

Card incentive states (conditional language; health framing leads):

| State | Card indicator | Notes |
| :---- | :---- | :---- |
| Not started — eligible | “Eligible to earn up to $100” | The item-3 start nudge, secondary to the health framing. |
| Not started — cap-blocked | “Reward not available right now” | Shown proactively BEFORE effort — enabled because caps are knowable at/before start. Taps through to explanation. |
| In progress | Progress cue toward reward | Hosts the item-4 gamified progress (§11.4). |
| Paused | Paused — clock still running | Clock runs through pause (§11.5); card shows this honestly. |
| Completed — payout pending | “Reward earned — payout pending” | The durable trace solving “where’s my $100?” Sits on the card after completion. |
| Paid | “$100 reward paid” | Settled. |
| Eligible — opt-in to activate | “You could earn up to $100 — opt in to start earning” | Structurally eligible (18+, plan-covered, etc.) but not yet opted in. PRESENT the opportunity — this is the motivating state, distinct from ineligible. Replaces the blunter “you haven’t joined.” |
| Ineligible (structural) | Payout potential not presented | Fails the structural eligibility gate (not 18+, not plan-covered, or capped). Do not dangle a reward that cannot be paid. |
| Joined late | “Joined after starting — reward applies next run” | Opted in mid-run; this run is ineligible (pre-consent sessions unfunded). Reward-quiet for this run; eligible on the next iteration. |
| Stopped | Shows as “stopped” in history | Terminal, non-resumable run (§11.7); no incentive; topic still repeatable as a new run. |
| Billing issue | “We’re sorting something out” → tap-through “a processing issue on our end — no action needed” | Designed: a ‘needs attention’ payout state with no member action required; completion recorded, health progress safe. |

* **Tap-through explanations (reason-specific).** Capped/ineligible cards tap through to an explanation keyed to the reason — cap reached (a ceiling outside the user’s control), didn’t consent (offer the path back), or billing issue (backend problem / support). Where appropriate each carries the reframe that the user’s health progress is real and unaffected — separating the care outcome (theirs, intact) from the incentive outcome (a funding mechanism that hit a limit).

### **11.2 Incentive promise & completion congrats (items 3, 5\)**

* **Up-front promise (item 3):** conditional language on key DCP pages — “eligible to earn up to $100” — as a start encouragement, never a firm guarantee, so a later cap resolution reads as resolving a stated condition rather than reversing a promise. $100 is the default; amount is assumed per-client configurable.

* **Completion congrats (item 5):** on topic completion, a congratulatory moment that explicitly sets payment-timing expectations — “paid later, \~\[timeframe\], via \[method\]” — because the reward is earned at completion but paid only after billing and reimbursement clear. Setting this expectation is what prevents the post-completion “where’s my money” support ticket.

* **Payout-timing copy is configurable placeholder text.** All payout-timing language (e.g., the design’s “\~4–6 weeks via your rewards account” on the completion screen and consent page) is CONFIGURABLE content, not hard-coded — the “4–6 weeks” in the design is placeholder. The displayed timeframe and method must be settable to match the real, confirmed payout SLA without a code change. Same treatment as the configurable consent copy (§7.2) and the variable incentive amount. The underlying SLA still needs Finance/Legal confirmation (open question), but the UI does not bake in a specific number.

### **11.3 New iteration & related-DCP surfacing (item 6\)**

* **Stay silent on restarting the same topic at completion.** Instead, surface related, applicable DCPs to start next — turning the completion moment into continued-care cross-sell rather than an odd “go again?” loop. Same-topic restart remains available quietly from the menu-page card, there when the user’s own circumstances call for it (new flare-up, new pregnancy).

* **New iterations are clean-slate** (Phase 1; §2) — prior run archived read-only, fresh start.

* **Re-run the gates at the new-iteration entry point:** re-check consent validity (may have lapsed across a benefit year) and cap state (may have tripped since), and re-surface the conditional “up to $100” nudge for the new run’s potential reward. The eligibility principle re-applies per run.

| Recommendation — shared relevance engine “Related/applicable DCPs at completion” and “DCPs in the home For You section” (item 1, §11.6) are the same underlying capability — relevance-ranking DCPs for a user. Spec them as one recommendation concern so they are not built twice. Driver options: hand-curated topic adjacencies, condition-based logic, or the existing personalization engine. |
| :---- |

### **11.4 Gamified progress (item 4\)**

Item 4 enhances the EXISTING session-completion milestone pop-up (currently text-only) rather than building new infrastructure. The container, firing cadence, and trigger all stay; the payload gains richer visuals and a blended message.

* **Celebrate health-forward, reward visible at milestones.** Each pop-up leads with the health progress (skill/concept built, session done) with the reward as a quieter milestone marker alongside.

* **Progress visualization, not active game mechanics.** A milestone-marked progress bar showing the \~10 sessions, the user’s position, and a marker where the reward unlocks (completion) — the journey to a destination, not a filling-up cash meter (which would tip into reward-accrual framing). Active mechanics (streaks, badges) are deferred.

* **Keep reward language conditional.** “On track toward your reward,” not “you’ve earned $40 so far.” A per-session accrual implication would quietly rebuild the firm-promise framing and make a later cap let-down feel like ten broken promises.

* **Eligibility-aware.** The reward element reads the same eligibility state as the card: it shows reward progress when eligible and falls silent / switches to health-only celebration when capped or ineligible — never cheerfully promising a reward that cannot be paid.

* **Surface the running clock as gentle urgency** for at-risk users (§11.5) — e.g., “3 sessions to go — your reward window closes \[date\].”

### **11.5 Pacing, completion clock & at-risk messaging**

* **Completion clock:** a long runway, default \~1 year, configurable per topic. Runs from enrollment and through pauses. The clock terms (including that it runs during pauses) must be disclosed at consent (§7).

* **Session pacing — availability gate (locked):** Session N+1 becomes available when BOTH conditions hold: (a) session N is complete, AND (b) at least 7 days have passed since session N’s START date. Both are hard floors. Anchoring the 7-day floor to session start (not completion) means a normally-paced user — who takes \~a week to work through a session anyway — hits no idle wait: both conditions are already satisfied at completion. Only a user who rushes a session in under 7 days is held until day 7 from start.

* **Billing limit is inherited, not separately enforced.** Because the next session cannot START until ≥7 days after the prior session started, session completions are naturally ≥7 days apart — so the “no more than one billable event per user per topic per 7 days” limit falls out of the availability gate structurally. No separate billing-side throttle is needed. The only bypass paths (admin auto-advance, future non-UI paths, replays) are accepted; the team chose not to add a billing backstop for them.

* **No billing-anchored clock anywhere.** The throttle keys entirely off session start/completion (user-action timestamps); billing simply follows completion. Billing delay therefore never penalizes the user’s pacing.

* **Catch-up exemption:** a per-topic catch-up flag exempts a late-entering user from the availability gate, letting them clear past sessions rapidly; those sessions bill immediately as completed. This is the one intended exception to the one-per-week outcome. By default catch-up is ON only for the pregnancy topic, and its window is defined by the user’s DELIVERY DUE DATE — collected as an intake input at topic launch. (Open: which other topics qualify, and the trigger for non-pregnancy cases.)

* **Data requirement:** the gate needs each session’s START timestamp, not just its completion. Today the model tracks session completion (DTxTopicTS status vs. moduleCode); session start must be capturable (e.g., the first record for a session’s moduleCode, or an explicit session-start record) — a small additive data point.

* **Complementary to the completion clock:** the availability gate prevents going too FAST (session-to-session spacing); the \~1-year completion clock and at-risk messaging catch going too SLOW. A user who starts a session then goes dormant mid-session is handled by the completion clock, not the gate.

* **The impossibility condition.** Because pacing sets a minimum of one week per remaining session, completion-in-time becomes arithmetically impossible when remaining billable sessions \> weeks left on the clock — a deterministic, detectable condition (typically reached by burning calendar through inactivity/pauses, not by hitting a pacing wall).

* **At-risk messaging (in the existing pop-up):** a soft proactive nudge as the user approaches the impossibility threshold (configurable at-risk margin), then a clear final message once it is impossible — commending real progress, stating the arithmetic honestly, and offering restart-to-reset as the constructive exit.

* **Restart-to-reset:** reuses the clean-slate new-iteration flow (§11.3); a new run starts a fresh clock.

* **Pause-notification exception (recommendation):** since the clock runs through pause, allow a gentle pause-related reward-window reminder to bypass the base platform’s pause-notification silencing, so a user does not silently age out of eligibility.

* **The reward window advances during the 7-day pacing wait.** Waiting out the 7-day floor is NOT a pause; the completion clock keeps advancing through it (as it also does through an explicit pause). Pacing and the completion clock are independent.

| Action item — billing basis disclosure Each run bills independently; the system does NOT guard against re-billing sessions an abandoned run already billed. This is defensible only if EBB rests on an engagement-/delivery-based billing theory (payment each time content is delivered) rather than a one-time-outcome theory. The billing basis must be explicit in client contract terms and the payer-facing billing rationale so independent re-billing is pre-agreed. Finance / Legal / contracts action item. |
| :---- |

### **11.6 Incentive as a native MHC incentive object**

The incentive is implemented as an existing MHC incentive object (one per topic), CONFIGURED rather than custom-built. This means the entire incentive lifecycle — eligibility, payout gating, repeatability, eligibility-reversal, and payment — is configuration on a platform-native object, not new EBB code. EBB’s code footprint narrows accordingly (see the architecture note below).

* **One incentive object per DCP path.** Exactly one incentive per topic (e.g., Insomnia $100), placed in the EBB program alongside the billing objects (§9.3). Repeatability is handled by the object’s max-completions set arbitrarily high; each eligible run consumes one completion. Per-client configurable items — the eligibility-rule formula and the DTx Incentive Amount (a client custom field) — live in the EBB \- Client Config Elements program.

* **Unbounded start/end dates.** Because a single run can span plan years (pregnancy especially), the object uses unbounded dates rather than plan-year bounds, so a run crossing a boundary is not orphaned.

* **Eligibility, completion, eligible→ineligible, and payment rules** are the object’s configurable formula rules — they carry the two-gate model from §6 in full. The completion-rule formula queries the user-level billing ledger directly, filtered to a single run, to confirm funded billable events.

* **History and totals come from querying the incentive objects.** “Paid to date” and “Payout pending” totals and the per-completion reward history are queries against the incentives — not a separately maintained counter.

* **Payout destination is the existing rewards menu.** “Paid via your rewards account” refers to the platform’s existing rewards navigation area, not a net-new account. The incentive object’s payment rule \+ the existing rewards machinery handle authorized→paid; EBB does not reinvent payout.

* **Repeat completions appear as distinct history entries** (e.g., two Knee Care completions), each tied to its run instance — confirming the iteration model end-to-end.

| Architecture consequence — the second trigger dissolves We previously specced two triggers: Trigger A (emit BILLABLE into the ledger) and Trigger B (watch the ledger for REIMBURSED and award the incentive). With the incentive object owning eligibility/payout evaluation via its own rules (event- or nightly-triggered), Trigger B is replaced by the incentive object’s completion rule. EBB’s remaining code is: (1) the user-level billing ledger structure; (2) Trigger A — watch DTxTopicTS session completions, write BILLABLE to the ledger, with the idempotency guard and the opt-in gate; (3) the vendor reconciliation adapter — ingest confirmations and write BILLED/REIMBURSED/REJECTED; plus the group fields (iteration, billable-session-count snapshot, lightweight summaries). Everything else is incentive-object configuration. |
| :---- |

### **11.7 Run terminal states: pause, stop, complete**

A run can end or suspend in three distinct ways. The design surfaced a third state (stop) alongside the existing pause and complete; all three are non-destructive and retained, and they are visible/distinguishable in the member’s history.

| State | Meaning | Resumable? | Billing / incentive |
| :---- | :---- | :---- | :---- |
| Paused | Run suspended; member intends to return | Yes — resumes the same run. Completion clock keeps advancing through the pause. | No change; sessions already billed stand; incentive still possible on completion. |
| Stopped | Member chooses to stop engaging with this run (non-destructive; shows as “stopped” in history) | No — the stopped run cannot be resumed. The TOPIC remains repeatable: the member may begin a NEW iteration (clean slate, new clock, new eligibility). | Stopped run never completed → fails eligibility condition 2 → no incentive. Already-billed sessions stand. |
| Completed | Run finished | N/A (terminal, successful) | Eligible for incentive subject to the full eligibility principle. |

* **Stop is differentiated from pause and is not destructive.** Unlike the legacy “start over” (which decoupled/orphaned data), stop retains the run as a terminal, read-only instance shown as “stopped” in history. “Cannot restart” means the stopped INSTANCE cannot be un-stopped — it does not prevent re-taking the topic as a new iteration.

* **Requires a distinct terminal run status** (stopped vs. completed vs. paused) on the instance, so history, billing eligibility, and the UI can distinguish them.

### **11.8 Home page (item 1\) — capture for later**

The home-page redesign is a separate project; no changes are intended now. Captured for consideration: ensure DCPs (both in-progress and complete) are highlighted to encourage ongoing usage; possible near-term wins include personalization-engine tuning and placing DCPs in the secondary “For You” items for DCP-only clients. See the shared-relevance-engine recommendation in §11.3 — the home “For You” DCP surface and the completion-time related-DCP surface should share one capability.

# **12\. Consolidated Open Questions**

| \# | Area | Question | Owner |
| :---- | :---- | :---- | :---- |
| 1 | Consent | One-time or annual (per benefit year) re-consent? | Legal / Product |
| 2 | Consent | What does consent cover (health-plan billing, incentive terms, data use)? | Legal |
| 3 | Consent | Program classification: participatory vs. health-contingent; required instruments (HIPAA authorization and/or ADA notice). | Legal |
| 4 | Opt-out | Is opt-out required at all? Confirm prospective-only mechanics. | Product / Legal |
| 5 | Caps | Should there be a cap at all — client level, user level, both, or neither? | Product / Finance |
| 6 | Caps | Cap stops billing, payouts, or both? | Product / Finance |
| 7 | Caps | Hard stop vs. honor-in-flight? | Product / Finance |
| 8 | Caps | Treatment of earned-but-unpaid state when a cap trips. | Product / Finance |
| 9 | Vendor | Can the vendor echo our supplied ID, or only their own reference \+ topic/date? | Integration |
| 10 | Vendor | Handling of REJECTED / never-reimbursed: block incentive, or remediation/award path? | Product / Finance |
| 11 | Override | Override semantics: manual create, void, or both; admin-origin audit marking. | Product / Eng |
| 12 | In-flight | Single in-flight resolution rule across cap / disable / opt-out. | Product / Legal |
| 13 | Migration | Sign-off on DTxBillableEventFired backfill (policy). | Product / Eng |
| 14 | Eligibility | Is completion-time a formal 4th eligibility condition, or only a UX mechanic? | Product / Finance / Clinical |
| 15 | Eligibility | Funded threshold for incentive — keep 100%, or allow goodwill tolerance below? | Finance |
| 16 | Consent | EBB-only client: exact behavior when a user declines consent (block proceeding?). | Product / Legal |
| 17 | Consent | Opt-out location in the UI (settings, topic page, or both). | Product / Design |
| 18 | Clock/Pause | Confirm clock runs through pause; ensure disclosed in consent terms. | Product / Legal |
| 19 | Pacing | Catch-up extent: pregnancy uses delivery due date (intake at launch). Which OTHER topics qualify, and their trigger? | Product / Clinical |
| 19b | Pacing/Data | Confirm session START timestamp is cleanly capturable (the availability gate depends on it). | Eng |
| 20 | Engagement | At-risk margin for the proactive “won’t finish in time” nudge. | Product |
| 21 | Billing basis | Engagement-/delivery-based billing theory pre-agreed in client/payer terms (enables independent per-run re-billing). | Finance / Legal |
| 22 | Recommendation | Driver for related/For-You DCP surfacing (curated / condition-based / personalization engine). | Product |
| 23 | Consent | Confirm single/global/annual opt-in is the intended policy (vs. per-path or other cadence). | Legal / Product |
| 24 | Eligibility | Mid-path enrollment: locked as ineligible-this-run for now — revisit whether it should be prorated/eligible-on-completion. | Product / Finance |
| 25 | Payout | Confirm the real payout SLA, method, tax treatment, and funding source. (UI copy is configurable placeholder — §11.2 — so this sets the VALUE, not the design.) | Finance / Legal |
| 26 | Incentive | Confirm incentive payout-state record (earned/authorized/paid) and its query surface for UI totals/history. | Product / Eng |
| 27 | Adjacent | Voice-over audio (exists today) and the path-scoped AI Advisor are assumed-present adjacent workstreams — confirm they are not in EBB scope/estimate. | Product |
| 28 | Eligibility | Confirm the structural eligibility criteria (18+, plan coverage, region, etc.) for the incentive object’s eligibility rule. | Product / Legal |
| 29 | UX | Confirm: notify member on SETTLED payout only, not on intermediate eligible→ineligible flips. | Product |
| 30 | Caps | V1 proposal: annual caps, each event attributed to the year it occurs (billing by bill date, incentive by payout date). Confirm with Finance — incl. plan-year alignment and the December-earned/January-paid consequence. | Finance |
| 31 | Pricing/Data | Per-topic completion rates: is the blended 28% ROI-model assumption uniform across topics, or do early results warrant per-topic rates? (System bills/pays on ACTUAL completions regardless.) | Product / Finance |
| 32 | Legal | $100 reward regulatory vetting — confirm program classification (participatory vs. health-contingent) and applicable incentive limits. (Same as B1; no body pre-vets an amount.) | Legal |
| 33 | Tax | Reward taxability when paid by Mobile Health (third party) vs. the client: confirm reporting/withholding responsibility and W-2 path. Reward IS taxable income; the open piece is third-party-source mechanics. | Finance / Legal / Tax |

# **13\. Partner Inquiry — Questions & Responses**

A partner client submitted questions about the EBB/DCP model. Captured here with design-grounded and research-grounded responses. This is not legal or tax advice; items flagged for counsel are noted. Research context is provided to sharpen internal decisions, not as a determination.

### **Framing — claims savings vs. additional cost**

DCPs are positioned as cost REDIRECTION, not net-new spend: members who would otherwise generate higher-cost claims are routed into a lower-cost digital intervention, and they may replace standalone point-solution spend. The EBB architecture reinforces this: cost tracks engagement (billing only on session completion; incentive only on funded completion), so non-engaging members generate no cost. The Client Financial Rollup (§9.5) is the instrument that lets a client SEE this — Billed vs. Received vs. Rejected vs. IncentivesPaid per year — so the redirection case can be made with the client’s own data, not methodology alone.

### **Q1 — Utilization cap so members aren’t “just in it for the $100”**

Covered, and more thoroughly than a single incentive-count cap. The design provides four independent guardrails: (1) per-user and per-client annual caps (Annual User/Client Cap Amount); (2) max-completions per incentive object (a topic cannot be farmed repeatedly); (3) the one-session-per-week pacing gate (structurally prevents racing content for the reward); (4) configurable retake cadence (limits how often a topic can be repeated). Together these make “farming the $100” impractical.

### **Q2 — Members who start but do not finish**

Billing is per session/module completion, so the client is billed only for what is completed; a member who stops early generates fewer billable events. The incentive additionally requires TOPIC completion, so a non-finisher is billed per completed session but earns no incentive — the client never pays a reward for an unfinished program. Note for claim-volume modeling: the one-bill-per-week pacing means these claims are spaced out, not bundled.

### **Q2b — Why a single 28% completion rate across topics? (Open)**

Open item (\#31). The SYSTEM does not assume any rate — it bills and pays on actual per-topic completions (from DTxTopicTS). The 28% is a pricing/ROI-model assumption; whether it should be blended or per-topic is a data question. Early results likely show material variation by topic (e.g., an 8-session path vs. a 40-week pregnancy path), so the ROI model may warrant per-topic rates — worth confirming internally, not just answering externally.

### **Q3 — Has the $100 reward been vetted by a regulatory body? (Open)**

Open item (\#32; same as B1). No single body pre-vets a specific reward amount; permissibility depends on program classification (participatory vs. health-contingent) and the applicable framework. Guidance has limited health-contingent incentives tied to a group health plan to 30% of self-only coverage cost, but the EEOC withdrew its incentive limits after a court decision, leaving genuine legal uncertainty. Accurate response: this is with Legal/compliance to confirm classification and limits — actively flagged, not overlooked.

### **Q4 — Taxability, given the reward source is Mobile Health, not the client**

The reward IS taxable income — unambiguous in IRS guidance: cash and cash-equivalent incentives (gift cards) are taxable regardless of amount, and per IRS Memorandum 201622031 wellness cash rewards are taxable wages subject to income tax and FICA. The nuance the partner is probing — a THIRD PARTY (Mobile Health) paying rather than the employer — concerns reporting/withholding responsibility and the W-2 path, which is less straightforward than employer-paid incentives and can create compliance exposure if mishandled. This is the “gathering specifics” piece (\#33) and should be confirmed with tax counsel. The consent/opt-in flow is the natural place to disclose taxability to members, which is the recommended compliance posture.

# **14\. Glossary**

| Term | Meaning |
| :---- | :---- |
| DCP / DTx | Digital Care Path (internally Digital Therapeutics) — a condition-specific structured health program. |
| Topic | An individual DCP program (e.g., Weight Loss). |
| Session | A themed group of lessons within a topic; \~10 per topic; the billable unit under EBB. |
| Lesson | Atomic content unit within a session. |
| Run / instance / iteration | One pass through a topic by a user, stored as an MHC Group; repeatable, each with an iteration ordinal. |
| MHC Group | The per-instance data container carrying Group Custom Field (GCF) values. |
| EBB | Engagement-Based Billing — billing on session completion; one incentive on program completion. |
| Billable event | Generated when a user completes a billable session (BILLABLE ledger record). |
| Incentive | User reward (e.g., gift card) on program completion, gated on reimbursement of the run’s billable sessions. |
| Ledger | User-level, time-series-style record of financial state-transitions (BILLABLE/BILLED/REIMBURSED/REJECTED). |
| Instance code | {OwnerID}:{TopicID}:{Iteration}(:{SessionID}) — stable join key tying runs/sessions to billing and reconciliation. |
| moduleCode | Per-session identifier in topic metadata and DTxTopicTS (e.g., DiabetesManagementS0\#M0). |
| Benefit year | The 12-month enrollment period tied to a client contract; natural cadence for re-consent and rollover. |

