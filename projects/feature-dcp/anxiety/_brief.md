# DCP: Anxiety — Sub-Feature Brief

> **For agents:** Read `projects/feature-dcp/_brief.md` before this file.
> Last updated: March 2026

---

## What This Sub-Feature Is

The Anxiety DCP is a multi-week behavioral health program for members identified with elevated anxiety. It delivers evidence-based CBT and mindfulness-based techniques through guided lessons, exercises, and AI coaching. It runs alongside the Depression DCP as part of MHC's behavioral health suite.

## Member Goal

Learn to recognize anxiety triggers, build practical coping techniques, and feel less overwhelmed — with structured support rather than just content to consume.

## Business Goal

Deliver measurable outcomes on GAD-7 scores (standard anxiety assessment). Strong completion rates and score improvement are the primary success metrics for this DCP.

## Clinical Framework

- Evidence base: Cognitive Behavioral Therapy (CBT), mindfulness-based stress reduction
- Intake/progress assessment: GAD-7 (Generalized Anxiety Disorder scale)
- AI coaching methodology: Motivational Interviewing
- Crisis routing: Any language suggesting self-harm, suicidal ideation, or eating disorder bypasses the LLM — non-negotiable

## Key Constraints

- Language must normalize anxiety without dismissing severity — "many people experience this" not "this is just stress"
- GAD-7 scores are sensitive — handle with care in UI and AI context
- Crisis routing is non-negotiable — do not alter safety routing architecture
- AI coach is the Behavioral Health agent — not the General or MSK agent
- Anxiety and Depression DCPs share the same AI agent domain but are distinct programs — do not conflate

## Differentiators vs. Competitors

- Headspace: mindfulness content, not clinical intervention
- Calm: similar — not outcomes-driven
- Ebb / Spring Health: strong competitor with licensed support
- Design question: how do we show a self-guided program can move GAD-7 at scale?

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Al Young | Digital Care Initiative Lead | GAD-7 outcomes, clinical accuracy, member safety |
| Katlin Loeb | Product Content | Language appropriateness, clinical tone |
| Alex Young | VP of Product | Completion rates, engagement |

## Related Context

- `projects/feature-dcp/_brief.md` — parent DCP architecture
- `projects/feature-dcp/depression/_brief.md` — sister behavioral health program; share clinical framework
- `strategy/Product Service Information.md` — AI architecture, crisis routing
- `competitive-analysis.md` — Headspace, Calm, Ebb competitive notes

## Figma

- Anxiety DCP screens: [link]
