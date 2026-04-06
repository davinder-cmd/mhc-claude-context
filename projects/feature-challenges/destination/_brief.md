# Destination Challenges — Sub-Feature Brief

> **For agents:** Read `projects/feature-challenges/_brief.md` before this file.
> Last updated: March 2026

---

## What This Sub-Feature Is

Destination Challenges are company-wide, thematic challenges — typically framed around a journey metaphor (e.g., "Walk to the Moon," "Across the US"). The entire employee population contributes to a collective goal, with individual steps adding to a shared total. They are designed to build company-wide participation, not just inter-team competition.

## Member Goal

Feel part of a shared company achievement — contribute to something bigger than individual performance, with low pressure and high accessibility.

## Business Goal

Drive broad platform participation across the full employee population, including members who might disengage from competitive leaderboards. Destination Challenges are the most inclusive challenge format — they reward participation over ranking. High participation rates are a top client success metric.

## Current State

- Company-wide collective goal (e.g., total steps = distance to a destination)
- Thematic visual progression — a map or journey visual tracks collective progress
- Individual contributions aggregate to team/company total
- Social feed (Channel) tied to the challenge — same Channel/Blueprint architecture as Peer Challenges
- AI Motivator Coach participates in feed — celebrates milestones, encourages laggards, marks collective wins
- Rewards tied to personal participation thresholds (not ranking)

## Key Constraints

- Collective goal design must scale to large employer populations (1,000+ employees)
- Visual progress metaphor must feel motivating at all stages — not disheartening if progress is slow
- Rewards tied to personal participation, not ranking — this is a key design principle for inclusivity
- Social feed uses same Channel/Blueprint model as Peer Challenges — stay consistent
- AI coach tone must celebrate collective wins, not just individual performance

## Design Considerations

- The journey metaphor (map, destination, progress visualization) is a core UX moment — high craft opportunity
- Mid-challenge engagement drop is a known risk — AI coach posts and milestone moments must carry engagement
- Accessibility: this format should feel achievable for sedentary or lower-mobility employees
- How does the individual see their contribution to the whole? This is an important personal relevance hook

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | Participation rates, broad DAU |
| Darcy Loeb | Head of Product | Inclusivity, client showcase value |
| Client Services | Account Managers | Easy client setup, participation reporting |

## Related Context

- `projects/feature-challenges/_brief.md` — parent Challenges feature; AI Motivator Coach, Channel data model
- `projects/feature-challenges/peer/_brief.md` — sister challenge type; competitive vs. collective framing
- `projects/feature-healthy-habits/_brief.md` — step data feeds contribution totals
- `projects/feature-rewards/_brief.md` — participation-based (not ranking-based) rewards
- `strategy/system-overview.md` — Channel/Blueprint data model details

## Figma

- Destination Challenge screens: [link]
