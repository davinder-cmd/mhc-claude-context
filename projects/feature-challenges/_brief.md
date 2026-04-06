# Challenges — Feature Brief

> **For agents:** Read this before any work on Challenges. For sub-feature work, read this first then `peer/_brief.md` or `destination/_brief.md`.
> Last updated: March 2026

---

## What This Feature Is

Challenges are MHC's social engagement layer. Members participate in step-based (and other activity-based) competitions — individually, as teams, or company-wide. Challenges have a social feed where members post, comment, react, and the AI Motivator Coach participates. They drive broad participation, team culture, and sustained engagement.

## Member Goal

Compete, connect with colleagues, and stay motivated through friendly competition. Feel part of something bigger than solo health tracking.

## Business Goal

Drive broad platform activation and sustained engagement across the whole employee population — including members who aren't in a DCP. Challenges are the top-of-funnel engagement surface. High participation rates are a key client success metric.

## Current State

- Step-based challenges are the primary format; other activity types are configurable
- Members join as individuals or as part of a team
- **Social feed (Channel):** Posts, comments, reactions — a conversational data structure in the system
- **AI Motivator Coach:** Participates in the social feed; posts data-driven encouragement, celebrates wins, responds to comments — feels like a supportive teammate
- Leaderboards show individual and team rankings
- Challenges tied to rewards (points, incentives)
- Challenge configuration (duration, activity type, team size, rewards) is client-configurable

**Two distinct challenge types:**
- **Peer Challenges** — team or individual competitions within the company
- **Destination Challenges** — company-wide, thematic challenges (e.g., "Walk to the Moon")

## Key Constraints

- Social feed is a Channel object — posts and comments follow the Channel/Blueprint data model
- AI Motivator Coach posts to the feed via the Channel system — design must respect this architecture
- AI tone must feel human and supportive, not bot-like — this is a strict design constraint
- Challenge structure (teams, scoring, duration) is configurable per client — do not hardcode assumptions
- Nightly processing handles some challenge scoring and reward triggers — design for async states

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Alex Young | VP of Product | Engagement rates, DAU, challenge participation |
| Darcy Loeb | Head of Product | Team culture impact, client satisfaction |
| Client Services | Account Managers | Client-specific challenge configurations |

## Sub-features

- `peer/` — Peer Challenges (team/individual competitions within a company)
- `destination/` — Destination Challenges (company-wide, themed)

## Related Context

- `strategy/Product Service Information.md` — AI Motivator Coach design constraints, Channel data model
- `strategy/system-overview.md` — Channels and Channel Blueprints data model
- `projects/feature-healthy-habits/_brief.md` — step data feeds challenges
- `projects/feature-rewards/_brief.md` — challenge completion triggers rewards

## Figma

- Challenge screens: [link]
