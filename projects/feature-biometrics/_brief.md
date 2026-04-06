# Biometrics — Feature Brief

> **For agents:** Read this before any work on the Biometrics feature.
> Last updated: March 2026

---

## What This Feature Is

Biometrics covers the collection, display, and use of clinical biometric data — blood pressure, cholesterol, blood glucose, BMI, and other screenings. Unlike wearable activity data (which is continuous), biometric data is typically captured at periodic screenings (annual wellness events, employer health fairs, lab results). It feeds DCP recommendations, health risk assessments, and rewards triggers.

## Member Goal

Understand their clinical health numbers in plain language and know what they mean for their health risk and program recommendations.

## Business Goal

Enable clinical-grade program recommendations and risk stratification. Biometric data is the strongest signal for DCP enrollment — members with elevated blood glucose should be in diabetes prevention; high BP members should be in heart health. Better biometric data = better program targeting = better outcomes.

## Current State

- Biometric data entered by users via the Health Assessment, uploaded by admins (biometric screening files), or provided via API
- Stored in the `Biometrics` user object — distinct from activity data
- Used to: recommend DCPs, populate health coaching context, trigger rewards (completing a biometric screening)
- Closely related to Health Assessment data — both inform program eligibility
- Biometric screening events (employer health fairs) are a primary data collection moment

## Key Constraints

- Biometric data can come from three sources (user, admin, API) — design must handle all gracefully
- Clinical values have normal ranges — design must handle out-of-range values carefully (never alarmist, always actionable)
- Data may be stale (annual screenings) — communicate data recency clearly in UI
- HIPAA considerations apply — biometric data is sensitive clinical information

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Al Young | Digital Care Initiative Lead | Clinical accuracy, program targeting |
| Alex Young | VP of Product | Enrollment impact, data quality |

## Related Context

- `projects/feature-health-data/_brief.md` — Biometrics feeds the broader health data layer
- `projects/feature-dcp/_brief.md` — Biometric values drive DCP recommendations
- `strategy/system-overview.md` — Biometrics data model details

## Figma

- Biometrics screens: [link]
