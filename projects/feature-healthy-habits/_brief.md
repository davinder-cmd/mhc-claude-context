# Healthy Habits — Feature Brief

> **For agents:** Read this before any work on the Healthy Habits feature.
> Last updated: March 2026

---

## What This Feature Is

Healthy Habits is the wearable tracking and daily behavior layer of MHC. Members connect a wearable device and the platform tracks steps, sleep, active minutes, and other activity data. It surfaces this data back to members and ties it to rewards and challenge participation. It is the entry-level engagement surface — lower commitment than a full DCP.

## Member Goal

Build and maintain healthy daily habits through tracking and gentle accountability. See progress over time without having to commit to a full clinical program.

## Business Goal

Drive daily active engagement (DAU), justify wearable integration investment, and serve as a low-friction entry point that leads members toward higher-commitment programs (DCPs, challenges).

## Current State

- Members connect wearables via **HealthKit (iOS)** or **Health Connect (Android)** — device-agnostic
- Platform tracks: **steps, sleep, active minutes**, calories, exercise minutes, measurements (weight, blood pressure)
- Data feeds into: reward triggers, challenge participation, AI Health Insights
- Activity data stored in the `Activity` user object
- **A.I. Health Insights** is the AI layer on top of this data — daily personalized summary (one takeaway + one action)

## Key Constraints

- Device-agnostic by design — do not create experiences that assume a specific wearable
- Data syncs asynchronously — design for delayed/missing data states
- Activity data can be manually entered by users or uploaded by admins — handle both input sources in UX
- AI Health Insights (the intelligence layer) is covered in `feature-health-data/digital-advisor/`

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | DAU, engagement depth |
| Darcy Loeb | Head of Product | Member experience, wearable coverage |

## Related Context

- `projects/feature-health-data/_brief.md` — Health Data is the data layer; Healthy Habits is the member-facing habit surface
- `projects/feature-health-data/digital-advisor/_brief.md` — AI layer on top of this data
- `projects/feature-challenges/_brief.md` — step challenges consume Healthy Habits data
- `strategy/Product Service Information.md` — AI Health Insights design constraints

## Figma

- Healthy Habits screens: [link]
