# Digital Advisor (A.I. Health Coach) — Sub-Feature Brief

> **For agents:** Read `projects/feature-health-data/_brief.md` before this file.
> Last updated: March 2026

---

## What This Sub-Feature Is

The Digital Advisor is MHC's general-purpose A.I. Health Coach — a conversational AI layer on top of the member's health data. It is distinct from the DCP A.I. Expert (condition-specific coaching within a program). The Digital Advisor is the member's always-available health partner for questions, guidance, and motivation outside of a formal DCP.

## Member Goal

Ask health questions, get personalized guidance on their data, and feel like they have a knowledgeable health partner available 24/7 — without needing to book an appointment.

## Business Goal

Increase platform stickiness and perceived value. The Digital Advisor is a key differentiator — it makes MHC feel like a proactive health partner rather than a passive data tracker. It also serves as an entry point into DCP recommendations (a member might ask "why is my blood pressure high?" and be guided toward a program).

## Current State

- Conversational AI coach with access to the member's health data context (age, sex at birth, activity, biometrics, program progress)
- General health guidance — not condition-specific (that's the DCP A.I. Expert)
- RAG against CDC and clinical best practice sources
- Motivational Interviewing methodology
- Text-only, SMS-style responses — no voice
- No cross-session memory yet — each conversation starts fresh (roadmap item)
- Crisis routing: bypasses LLM for self-harm, suicide, eating disorders, psychosis — non-negotiable

## Key Constraints

- This is NOT a diagnostic tool — never frame responses as medical advice or diagnosis
- Must stay in general coaching lane — condition-specific clinical support is the DCP A.I. Expert's job
- AI Health Insights (the daily summary) is separate from the Digital Advisor conversation — distinct UX surfaces
- No cross-session memory is a real limitation — manage member expectations in UI
- Crisis routing is non-negotiable — do not alter safety routing in any design work
- Tone must feel human, warm, and peer-like — not clinical, not robotic

## AI Health Insights vs. Digital Advisor

These are two distinct surfaces — do not conflate:

| Feature | AI Health Insights | Digital Advisor |
|---------|-------------------|-----------------|
| Format | Push — daily summary card | Pull — conversational |
| Structure | Fixed: ONE takeaway + ONE action | Open-ended conversation |
| Trigger | Daily, automatic | Member-initiated |
| Depth | Surface-level, motivational | Can go deeper on specific questions |

## Differentiators vs. Competitors

- Oura Advisor: closest peer — personalized AI coaching on top of ring data
- Fitbit AI Coach: similar pattern, Google ecosystem
- Key MHC angle: integrated with clinical DCPs and biometric data, not just wearable activity
- Differentiation is in the data richness (biometrics, HRA) + DCP integration

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | AI quality, engagement, competitive positioning |
| Al Young | Digital Care Initiative Lead | Clinical accuracy, appropriate scope, safety routing |
| Darcy Loeb | Head of Product | Member trust, tone, non-alarmist communication |

## Related Context

- `projects/feature-health-data/_brief.md` — parent; Health Data is the underlying data layer
- `projects/feature-dcp/_brief.md` — DCP A.I. Expert is the condition-specific coaching counterpart
- `strategy/Product Service Information.md` — full AI architecture, cross-session memory roadmap
- `competitive-analysis.md` — Oura Advisor and Fitbit AI Coach are closest competitive peers

## Figma

- Digital Advisor screens: [link]
