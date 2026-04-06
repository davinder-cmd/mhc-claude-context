# Rewards — Feature Brief

> **For agents:** Read this before any work on the Rewards feature. For iteration-specific work, read the relevant dated sub-folder's `_ask.md` after this.
> Last updated: March 2026

---

## What This Feature Is

The Rewards feature is the primary incentive engine of MHC. Members earn rewards (gift cards, points, store items, raffle entries) for completing health-related activities — finishing a DCP, hitting a step goal, completing a health assessment, participating in a challenge. It is the #1 driver of member enrollment and program completion.

## Member Goal

Get recognized and rewarded for taking care of their health. Feel like the effort is worth it.

## Business Goal

Drive activation, program enrollment, and completion rates. Rewards are MHC's primary behavior change lever for getting members into programs and keeping them engaged through completion.

## Current State

- Members earn **gift cards ($100/program)** as the primary reward for completing a DCP
- **Points Plans** — members earn points for activities; points accumulate toward reward thresholds
- **Currency + Store** — internal currencies can be created per client; members spend currency in an internal store on configured items
- **Raffles** — members earn entries; winners drawn on a configured date
- **Fulfillments** — when a reward is triggered, a Fulfillment object is created and tracked
- Reward types, amounts, and triggers are **configured per client** by Client Services Tech Leads
- Rewards configuration lives in the admin system; the Innovations team builds the member-facing UX

## Key Constraints

- Reward rules, amounts, and triggers are client-configurable — do not design as if they're fixed values
- Fulfillment processing runs via nightly Celery jobs — design for async reward delivery (not instant in all cases)
- Gift card delivery and fulfillment may involve third-party integrations
- Changes to reward structure require coordination with Client Services (they manage client expectations)

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | Engagement impact, activation metrics |
| Darcy Loeb | Head of Product | Member experience, client satisfaction |
| Client Services | Account Managers | Client-specific reward configurations |

## Sub-features

- None at top level — Rewards is a self-contained feature. Levels (if introduced) would live in `feature-rewards/2026-XX_levels/`

## Related Context

- `strategy/Product Service Information.md` — reward types, fulfillments, points plans described in data model section
- `strategy/system-overview.md` — Incentives, Points Plans, Currency/Store config in detail
- `competitive-analysis.md` — ROI guarantee (3:1) is our top differentiator; rewards are part of that story

## Figma

- Design System: [link]
- Rewards screens: [link]
