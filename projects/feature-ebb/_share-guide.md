# EBB — Project Guide & Reading Order

> **Purpose:** one place that summarizes the EBB work, indexes every doc/deliverable, shows status & sequencing, and tells you (and anyone you share with) what order to go through it in.
> Last updated: 2026-07-05.

---

## TL;DR

**What:** the product design for **Engagement/Episode-Based Billing (EBB)** — the DCP-Only experience where a member completes Digital Care Paths and earns **$100 (Amazon gift card) per completion, up to $500/yr**, tied to a repeating engagement loop.
**Lighthouse:** Alight House — **go-live Sept 1**, testing August.
**The model in one line:** *Get in once (the $300 assessment hooks them → EBB), then run the loop — do a care path → earn $100 → get pulled into the next — up to the cap.*
**Where we are:** the full journey is designed end-to-end (v1s). The core loop is settled; the get-in funnel is drafted; a cluster of consent/eligibility work is **blocked on decisions**, not design.

> ⚠️ **Naming:** source docs say "**Engagement**-Based Billing"; Darcy's 7/5 notes say "**Episode**-Based Billing." Confirm the canonical name.

---

## How to walk someone through it

**If you're presenting (start big, then drill in):**
1. **[Master flow](../../outputs/jul05-ebb-master-flow/master-flow-v1.html)** — the whole journey on one page. Open this first.
2. **[Engagement-loop model](../../outputs/jul01-ebb-engagement-loop/ebb-engagement-loop-model.html)** — the North Star + the 4 locked decisions.
3. **The get-in funnel:** [Assessment → EBB bridge](../../outputs/jul05-ebb-assessment-bridge/assessment-to-ebb-bridge-v2.html) → [Enrollment flow](../../outputs/jul05-ebb-enrollment-flow/enrollment-flow-v1.html) → [Surfacing kit](../../outputs/jul05-ebb-surfacing-kit/surfacing-kit-v1.html).
4. **The loop screens:** [Topic page (full)](../../outputs/jul02-ebb-topic-page/topic-page-v4-full.html) → [Completion celebration](../../outputs/jul01-ebb-completion-screen/completion-celebration-v3.html) → [Rewards page](../../outputs/jul05-ebb-rewards-page/rewards-page-v1.html).
5. **Decisions & scope:** [_decisions.md](_decisions.md) → [_screens.md](_screens.md) (status + 9/1 table stakes).

**If you're reading deep:** [_brief.md](_brief.md) → [_decisions.md](_decisions.md) → [_screens.md](_screens.md) → the source spec in [source/](source/).

---

## Design deliverables (in `outputs/`)

Grouped by journey stage. Each folder has an `INDEX.md` iteration log.

### The whole picture
| Deliverable | What it shows | Status |
|---|---|---|
| [master-flow](../../outputs/jul05-ebb-master-flow/) | End-to-end journey (get-in funnel + the loop) on one map | v1 |
| [engagement-loop-model](../../outputs/jul01-ebb-engagement-loop/) | North Star loop + 4 locked decisions | v1 (decisions locked) |
| [experience-map](../../outputs/jul02-ebb-experience-map/) | Screen inventory as a visual, status-coded | v1 |

### Get in (acquisition funnel)
| Deliverable | What it shows | Status |
|---|---|---|
| [assessment-bridge](../../outputs/jul05-ebb-assessment-bridge/) | $300 payday → EBB handoff; **two options** (savor-first / combined) to test | v2 |
| [enrollment-flow](../../outputs/jul05-ebb-enrollment-flow/) | Home → assessment → recommendation → opt-in → unlock; + capped vs no-cap configs | v1 |
| [surfacing-kit](../../outputs/jul05-ebb-surfacing-kit/) | The inline "$100" messages: home · notification · mid-DCP · rewards | v1 |
| [getin-flow](../../outputs/jul02-ebb-getin-flow/) | Cohort routing (new / existing / mid-DCP) through the 3 surfacing layers | v1 |
| [dual-onramp](../../outputs/jul05-ebb-dual-onramp/) | EBB entry **with & without** the assessment; two on-ramps → one loop (assessment = accelerant, not prerequisite) | v1 |

### The loop (core surfaces)
| Deliverable | What it shows | Status |
|---|---|---|
| [topic-page](../../outputs/jul02-ebb-topic-page/) | Drive-to-completion screen (v4 full + annotated). Also: path edge-states, "How you're doing" check-in states, and the scope memo | v4 (definitive) |
| [completion-screen](../../outputs/jul01-ebb-completion-screen/) | The hinge: health win → $100 → tee up next (Option A bottom) | v3 (settled) |
| [rewards-page](../../outputs/jul05-ebb-rewards-page/) | EBB leads; $ earned / $500 cap | v1 |

### Stakeholder material
| Deliverable | What it is |
|---|---|
| [topic-page-scope-memo](../../outputs/jul02-ebb-topic-page/topic-page-scope-memo.md) | One-pager defending the loop-focused topic page (data/resources → placement, not rejection) |
| [ebb-meeting-notes](../../outputs/jul05-ebb-meeting-notes/ebb-meeting-notes.md) | Darcy's 7/5 notes (source) |

---

## Project docs (context + decisions) — in `projects/feature-ebb/`

| Doc | What it holds |
|---|---|
| [_brief.md](_brief.md) | What the project is, design approach, engagement loop, consent workstream, launch update |
| [_decisions.md](_decisions.md) | **The decision log** — every call with rationale + rejected alternatives (defensibility) |
| [_screens.md](_screens.md) | Every screen/state, status-coded, with blockers |
| [engagement-loop-best-practices.md](engagement-loop-best-practices.md) | The research pass (goal-gradient, SDT, cautions) |
| [source/](source/) | Raw inputs: EBB spec, playbook, "Digital Care Only," consent/restart notes, and current-state UX writeups (`source/current-dcp-ux/`, `source/current-rewards-ux/`) |
| [reference-only/](reference-only/) | The "gel" mockups — reference/counter-example only, not a driver |

**Reference layer** (`reference/`): [engagement-behavior-experts.md](../../reference/engagement-behavior-experts.md) · [dtx-dcp-experts.md](../../reference/dtx-dcp-experts.md) · [health-assessment/](../../reference/health-assessment/) (the NCQA HRA composition + risk models).

---

## Sequencing & status

**✅ Built (v1s):** engagement-loop model · completion celebration (v3) · topic page (v4) + path/check-in states · rewards page · get-in flow · enrollment flow · assessment bridge · surfacing kit · master flow.

**📋 Unblocked, not yet built:** cap-reached state · DCP list · completion variants (first-ever / no-next).

**⏸️ Deferred:** Home EBB redesign (out of 9/1 scope — keep ideating) · reward deadline states · soft-restart · event-driven "how you're doing."

**⛔ Blocked on decisions (not design):** consent/eligibility screens (hard-gate vs earn-gate) · risk-stratification default · soft-restart inactivity threshold · full assessment→DCP pre-population (blocked by data architecture).

### 9/1 table stakes (the minimum to launch)
A member must be able to: **learn they can earn (inline surfacing) → opt in (consent) → complete a DCP → get $100 (completion screen) → see it in the reward center → billed via Waystar.** The load-bearing open item is **consent** (blocked on hard-gate vs earn-gate). Everything else we've designed is *should/later*.

---

## Open decisions to resolve (ideally in Darcy's Mon 7/6 requirements)
1. **Consent: hard-gate vs. earn-gate** — the pivotal one; sets whether opt-in blocks access or just gates earning.
2. **Opt-in placement** — opt-in-first/upfront (simpler; pending **legal** OK on blanket authorization) vs. at point of value.
3. **Risk-stratification default** — off (John) vs. required (Steve); cap default (no cap vs. $500).
4. **Assessment bridge** — Option A (savor-first, current lean) vs. B (combined) — to A/B test.
5. **Naming** — Engagement vs. Episode-Based Billing.

---

## Audience cheat-sheet
- **Darcy / leadership:** Master flow → engagement-loop model → _decisions → 9/1 table stakes.
- **Engineering:** _screens → the loop screens (topic/completion/rewards) → open gates.
- **Clinical:** the "How you're doing" charter (in topic-page check-in states + _decisions) → reference/health-assessment.
- **Legal:** consent workstream (in _brief) → opt-in placement decision.
- **Sales/client:** master flow → the money ladder ($300 + up to $500) → surfacing kit.
