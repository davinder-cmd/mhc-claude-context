# Conditions — Feature Brief

> **For agents:** Read this before any work on the Conditions feature.
> Last updated: March 2026

---

## What This Feature Is

Conditions is the member-facing surface that presents a member's identified health conditions, associated risk levels, and recommended programs. It is the bridge between data collection (biometrics, HRA) and program enrollment (DCPs). It may also surface ongoing condition management content and progress for members already in programs.

## Member Goal

Understand their personal health conditions in plain, non-clinical language — and know clearly what MHC recommends they do about each one.

## Business Goal

Convert health risk data into DCP enrollments. The Conditions surface is where a member learns they have elevated diabetes risk and is guided toward the Diabetes Prevention DCP. It is a critical activation and conversion surface.

## Current State

[To be filled in — clarify with Davinder how Conditions currently surfaces in the product: is it a dedicated screen, part of the Health Assessment results, part of a dashboard widget, or within a Journey?]

## Key Constraints

- Clinical language must be accessible — never use diagnostic language that implies medical diagnosis
- Always pair a condition with a recommended action or program — never dead-end on a risk flag
- Condition identification comes from HRA + biometrics — design must handle incomplete data gracefully
- Gaps in care (uploaded by admins) can also trigger condition flags — these come from a different source than self-reported data

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Al Young | Digital Care Initiative Lead | Clinical accuracy, appropriate language, enrollment conversion |
| Alex Young | VP of Product | Enrollment rates, program targeting |
| Darcy Loeb | Head of Product | Member trust, non-alarmist communication |

## Related Context

- `projects/feature-dcp/_brief.md` — Conditions surfaces are the primary entry point into DCPs
- `projects/feature-biometrics/_brief.md` — Biometric data feeds condition identification
- `projects/feature-health-data/_brief.md` — HRA data feeds condition identification
- `strategy/system-overview.md` — User gaps in care, health assessment config

## Figma

- Conditions screens: [link]
