# Peer Challenges — Sub-Feature Brief

> **For agents:** Read `projects/feature-challenges/_brief.md` before this file.
> Last updated: March 2026

---

## What This Sub-Feature Is

Peer Challenges are team or individual competitions within a single company. Members compete against colleagues — in teams or solo — over a set period, typically tracking steps or other activity metrics. They are the social backbone of MHC's engagement model for a specific employer group.

## Member Goal

Compete with and against coworkers in a friendly, low-stakes way that makes daily movement feel like a game — and keeps them coming back to the platform.

## Business Goal

Drive DAU and sustained engagement within a client's employee population. High peer challenge participation = client retention signal. Also a primary vehicle for team culture initiatives that clients pitch to HR.

## Current State

- Individual and team formats both supported
- Activity type is configurable (steps is default; others possible)
- Leaderboard shows individual and team rankings
- Social feed (Channel) tied to each challenge: posts, comments, reactions
- AI Motivator Coach participates in feed — posts data-driven encouragement, celebrates milestones, responds to comments
- Rewards tied to challenge participation and completion
- Challenge duration, team size, and scoring are client-configurable

## Key Constraints

- Social feed is a Channel object — follow the Channel/Blueprint data model (see `strategy/system-overview.md`)
- AI Motivator Coach tone must feel human and peer-like — not bot, not corporate wellness
- Team formation UX is a known complexity — members may not know their colleagues
- Challenge configuration is client-side — do not hardcode duration, team size, or scoring assumptions
- Nightly processing handles some scoring — design for async/delayed state updates

## Design Considerations

- Leaderboard anxiety is real — some members disengage when they fall behind; consider design mitigations
- First-time setup (joining a challenge, forming a team) is a high-drop moment
- The AI coach's social feed posts must feel natural alongside real human posts — a key UX challenge

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | DAU, challenge participation rates |
| Darcy Loeb | Head of Product | Team culture value, client satisfaction |
| Client Services | Account Managers | Client-specific configuration, participation reporting |

## Related Context

- `projects/feature-challenges/_brief.md` — parent Challenges feature; AI Motivator Coach, Channel data model
- `projects/feature-challenges/destination/_brief.md` — sister challenge type; company-wide vs. peer
- `projects/feature-healthy-habits/_brief.md` — step data feeds challenge scoring
- `projects/feature-rewards/_brief.md` — participation triggers rewards
- `strategy/system-overview.md` — Channel/Blueprint data model details

## Figma

- Peer Challenge screens: [link]
