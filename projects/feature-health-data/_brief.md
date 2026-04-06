# Health Data — Feature Brief

> **For agents:** Read this before any work on Health Data. For AI coaching work, read this first then `digital-advisor/_brief.md`.
> Last updated: March 2026

---

## What This Feature Is

Health Data is the data collection and display layer for member health metrics. It aggregates wearable data, biometric data, self-reported inputs, and health assessment results into a unified view of the member's health state. It is the data foundation that powers Health Insights (AI), DCP progress tracking, and rewards triggers.

## Member Goal

See a clear, meaningful picture of their health — not just raw numbers, but what those numbers mean for them and what to do about it.

## Business Goal

Create a trusted, personalized health data layer that makes MHC feel like a true health partner rather than a step counter. The richer and more actionable the data, the more members engage with programs.

## Current State

**Data types tracked:**
- **Activity:** Steps, sleep, active minutes, calories, exercise minutes (from wearables via HealthKit / Health Connect)
- **Measurements:** Weight, blood pressure, blood glucose (self-reported or uploaded)
- **Biometrics:** Biometric screenings — entered by users, uploaded by admins, or via API
- **Health Assessment:** Configurable questionnaire at onboarding; informs program recommendations and coaching

**Data sources:**
- Wearable sync (device-agnostic via HealthKit/Health Connect)
- Self-reported input by members
- Admin upload (census files, biometric data)
- Partner API

**AI layer:**
- **A.I. Health Insights** — daily personalized summary: one takeaway + one recommended action each morning
- Full AI coaching is in `digital-advisor/`

## Key Constraints

- Data arrives asynchronously — always design for missing, delayed, or incomplete data states
- Wearables are device-agnostic — never assume a specific device or data format
- Members can manually enter data — UI must handle both wearable-synced and manually-entered values
- Health assessment data feeds DCP recommendations — changes to assessment UX have downstream effects
- AI Health Insights format is fixed: ONE takeaway + ONE action. Never more. This constraint is intentional.

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | AI quality, data breadth, engagement |
| Al Young | Digital Care Initiative Lead | Clinical accuracy, data used in coaching |

## Sub-features

- `digital-advisor/` — A.I. Health Coach: the AI intelligence layer on top of health data

## Related Context

- `projects/feature-biometrics/_brief.md` — Biometrics is a distinct data type within the health data ecosystem
- `projects/feature-healthy-habits/_brief.md` — Healthy Habits is the member-facing habit surface; Health Data is the underlying layer
- `strategy/Product Service Information.md` — AI Health Insights design constraints, wearable integration details
- `competitive-analysis.md` — Oura Advisor and Fitbit AI Coach are the closest competitive peers to Health Insights

## Figma

- Health Data screens: [link]
