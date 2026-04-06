# DCP: Depression — Sub-Feature Brief

> **For agents:** Read `projects/feature-dcp/_brief.md` before this file.
> Last updated: March 2026

---

## What This Sub-Feature Is

The Depression DCP is a multi-week, structured behavioral health program for members identified with depression risk. It delivers evidence-based CBT and behavioral activation techniques through guided lessons, exercises, and AI coaching. It is one of MHC's core behavioral health DCPs alongside Anxiety and Insomnia.

## Member Goal

Understand what they're experiencing, get practical tools to manage low mood and depression symptoms, and feel supported — not judged — through the process.

## Business Goal

Deliver measurable outcomes on PHQ-9 scores (standard depression assessment). Behavioral health DCPs are a key differentiator from pure physical wellness platforms and a growing client priority.

## Clinical Framework

- Evidence base: Cognitive Behavioral Therapy (CBT), Behavioral Activation
- Intake/progress assessment: PHQ-9 (Patient Health Questionnaire)
- AI coaching methodology: Motivational Interviewing
- Crisis routing: Any language suggesting self-harm, suicidal ideation, or eating disorder bypasses the LLM — non-negotiable

## Key Constraints

- Language must be warm, non-clinical, non-stigmatizing — never say "you have depression"
- PHQ-9 scores are sensitive data — handle with extreme care in UI and AI context
- Crisis routing is non-negotiable — preserve safety architecture in all design work
- AI coach is the Behavioral Health agent — do not mix with MSK or General agent
- No cross-session memory yet — each coaching conversation starts fresh (roadmap item)

## Differentiators vs. Competitors

- Headspace: content-only, no structured CBT program
- Calm: meditation-focused, no clinical outcomes tracking
- Ebb (Spring Health): strong competitor — licensed therapists + CBT programs
- Design must justify why a self-guided digital DCP moves the needle on PHQ-9

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Al Young | Digital Care Initiative Lead | PHQ-9 outcomes, clinical accuracy, member safety |
| Katlin Loeb | Product Content | Tone, clinical language review |
| Alex Young | VP of Product | Engagement, completion rates |

## Related Context

- `projects/feature-dcp/_brief.md` — parent DCP architecture
- `strategy/Product Service Information.md` — AI architecture, crisis routing
- `competitive-analysis.md` — Headspace, Ebb, Calm competitive notes

## Figma

- Depression DCP screens: [link]
