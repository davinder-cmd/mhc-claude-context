---
name: research-synthesis
description: Use for two jobs, both grounded in real user signal — (1) accelerating an actual solo guerrilla research cycle (drafting a discussion guide from a stated decision, synthesizing real session recordings/transcripts/notes from real participants into a decision writeup), or (2) mining existing real user voice that's never been treated as research — support tickets, app-store/store reviews, CS call notes, NPS verbatims — into a pattern worth acting on. Both jobs require real people as the source. Do NOT use this to simulate user reactions to a design via an AI-generated persona standing in for a real participant — that is not research, produces false confidence, and this skill will not do it. For DCP/clinical-population work (depression, anxiety, chronic pain, diabetes), the Tier 3 consent/framing rules in roster.md are mandatory for real sessions and do not have a synthetic shortcut.
---

# Research Synthesis

Two jobs. Both require a real human source — an actual session participant, or user voice a real person already generated (a ticket, a review, a call note). Nothing in this skill fabricates a user's reaction; it only makes real signal cheaper to gather or faster to read.

## Guardrail — read this first

MHC's own research-methods roster (`roster.md`) exists specifically to prevent "research theater" — activity that looks like research but produces no real evidence. An AI-simulated persona reacting to a design is research theater, automated. It doesn't get more valid by being fast or by being run on every design. If a request sounds like "have the AI pretend to be a user and react to this," stop and say so rather than doing it — offer Job 1 or Job 2 below instead, both of which stay tied to a real person.

This matters most on DCP work: a synthetic "depression persona" cannot stand in for the Tier 3 consent, framing, and recruiting-channel requirements in `roster.md`. There is no shortcut version of that tier.

## Job 1 — Accelerate a real guerrilla research cycle

Follows the "Practical Playbook — Solo, One Week" in `roster.md` verbatim; this just compresses the labor around each step, never the step itself.

1. **Start with the decision, not the topic** (Hall's filter). Ask what decision this research needs to inform if it isn't already stated. If nothing would change based on the answer, say so and stop — don't manufacture a research task to feel thorough.
2. **Draft the discussion guide** — 5–7 open questions, task-based or listening-based per the roster's guidance (Jarrett for wording, Young for listening-mode). This is a draft for the designer to review and take into real sessions, not a substitute for running them.
3. **When real session recordings, transcripts, or notes come back** (from actual participants — 3–5 people is the roster's own honest floor), synthesize them within the same session: pull recurring patterns, contradictions, and direct quotes; build a simple affinity cluster or a mental-model map per the playbook's step 5.
4. **Write the decision paragraph** (playbook step 6) — what was learned, what changes because of it. This is the artifact that makes it count as research. Save it to `outputs/` per this repo's non-negotiables; use `templates/stakeholder-memo-template.md` if it needs to go to a stakeholder.
5. **State the limitation explicitly** in the writeup — sample size, recruiting method, anything that keeps a 3-person guerrilla finding from later being cited as if it were powered research.

## Job 2 — Mine existing real signal

For when there's no time or budget to run new sessions, but real user voice already exists somewhere unstructured: support tickets, app-store/store reviews, CS call notes, NPS verbatims, even a Slack channel where account managers relay complaints.

1. **Ask what sources actually exist** before starting — don't assume a specific tool. Get whatever raw text is available (exports, pasted threads, call summaries).
2. **Apply Hall's filter first, same as Job 1**: what decision is this mining meant to inform? Unfocused mining produces a pile of quotes, not a finding.
3. **Affinity-cluster the raw text** the same way the playbook clusters interview quotes (step 5) — group by recurring theme, note frequency, pull representative quotes verbatim rather than paraphrasing them into something more flattering or more damning than what was said.
4. **Name the ceiling of this evidence explicitly.** Mined signal is real but uncontrolled — it's biased toward people upset enough to write in, it has no discussion guide, and nobody can be asked a follow-up question. If the decision needs more confidence than that supports, the finding should say so and recommend Job 1 (an actual small session) rather than stretching the mined pattern to cover it.
5. **Write the same decision-paragraph output** as Job 1 — pattern found, what it does or doesn't resolve, what's still open.

## Files

- `roster.md` — the full former `reference/process/user-research-methods.md`, moved verbatim (source of truth unchanged).
