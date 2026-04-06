# Digital Care Paths (DCP) — Feature Brief

> **For agents:** Read this before any work on DCPs. For condition-specific work, read this first then the relevant sub-feature brief (`depression/`, `back-pain/`, `diabetes/`, `anxiety/`).
> Last updated: March 2026

---

## What This Feature Is

Digital Care Paths are MHC's core clinical product. They are multi-week, structured programs that guide members through evidence-based interventions for specific health conditions. Each DCP has modules, lessons, assessments, and now an AI coaching layer. DCPs are the primary driver of clinical outcomes and the foundation of MHC's ROI guarantee.

## Member Goal

Get real help with a specific health condition — not generic wellness tips, but a structured program that actually moves the needle on their pain, sleep, mood, blood sugar, or weight.

## Business Goal

Deliver measurable clinical outcomes that justify MHC's 3:1 ROI guarantee. DCPs are the product proof point — everything else (rewards, challenges, wearables) supports engagement; DCPs deliver outcomes.

## Current State

**Active conditions:**
- MSK: Back Pain, Neck Pain, Knee Pain, Hip Pain, Shoulder Pain
- Behavioral Health: Depression, Anxiety, Insomnia, Stress/Burnout
- Metabolic: Diabetes Prevention, Diabetes Management, GLP-1 Support, Weight Loss
- Cardiovascular: Hypertension, Heart Health
- Other: Pregnancy

**Program structure:**
- Multi-week modules with lessons, videos, and exercises
- Health assessments at enrollment and periodic check-ins (track progress)
- Rewards tied to program completion ($100 gift card)
- AI coaching embedded within each DCP (DCP A.I. Expert) — 24/7 conversational support

**DCP A.I. Expert (current state):**
- Condition-specific coaching agents (separate agent per domain: MSK, behavioral, general, pregnancy)
- RAG against CDC and clinical best practice sources
- Motivational Interviewing methodology
- Crisis routing (bypasses LLM for self-harm, suicide, eating disorders, psychosis)
- User context: age, sex at birth, program progress, locale
- Text-only, SMS-style responses — no voice, no cross-session memory yet

## Key Constraints

- Each condition has its own clinical content — do not design as if all DCPs are interchangeable
- AI coaching is condition-specific — design assumes the correct agent is already active for the condition
- The UI determines which DCP AI agent is loaded (not the agent itself) — this is a current limitation
- No cross-session memory yet — each coaching conversation starts fresh
- Crisis routing is non-negotiable — any design touching the AI chat must preserve the safety routing architecture
- Clinical content is authored separately (not AI-generated) — AI coaches the member, it does not replace the program content

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | Clinical outcomes, AI quality, competitive differentiation |
| Al Young | Digital Care Initiative Lead | Clinical fidelity, program completion, member safety |
| Darcy Loeb | Head of Product | Overall program quality, client trust |
| Katlin Loeb | Product Content | Content accuracy, clinical language, tone |

## Sub-features

- `depression/` — Behavioral Health: Depression DCP
- `anxiety/` — Behavioral Health: Anxiety DCP
- `back-pain/` — MSK: Back Pain DCP
- `diabetes/` — Diabetes Prevention + Management DCPs

## Related Context

- `strategy/Product Service Information.md` — AI architecture, current limitations, roadmap
- `competitive-analysis.md` — Hinge Health (MSK), Headspace/Ebb (behavioral), Sword Health (MSK + behavioral) are high-threat competitors
- `competitive/_ai-features-summary.csv` — AI feature comparisons for DCP-relevant competitors
- `competitive/_key-takeaways.md` — design principles drawn from competitive research

## Figma

- DCP Design System: [link]
- Active DCP screens: [link]
