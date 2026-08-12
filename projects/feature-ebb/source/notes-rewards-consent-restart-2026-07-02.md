# EBB — Rewards / Consent / Soft-Restart Notes

> Source notes provided by Davinder, 2026-07-02. Meeting/discussion notes — captured verbatim for the record. Screen implications tracked in `../_screens.md`.

## EBB Rewards and DCP Consent Logic

- Consent required for EBB participation: users must opt in to the billing/reward structure
- Rewards apply from consent date forward, not retroactively
- 50% session threshold rule for in-progress DCPs at go-live:
  - Completed >50% of sessions: eligible to earn reward on completion
  - Under 50%: may not earn reward for current run; applies to new DCPs going forward
  - **Final decision still pending:** may apply 50% rule to all ongoing DCPs
- Business rationale: reward payout must be covered by billing claims

## DCP Engagement and Soft Restart Design

- Concern raised: users who lapse for extended periods may lose program efficacy
  - Data shows 50–60%+ of users complete within the first month
  - Longest recorded completion span: 235 days
- Proposed: inactivity reset after 30–90 days (exact threshold TBD per program)
  - Al's counterpoint: users may stop for legitimate medical reasons and need to resume
  - Consensus leaning toward reset, framed as an efficacy argument
- Jill already working on a configurable reward deadline (e.g. 6 months to complete weight loss program)
  - Concern: a long deadline may reduce urgency rather than drive completion
- Soft restart preferred over hard reset:
  - Prompt user: "We recommend you start from session X. Do you want to?"
  - Isabel's suggestion: show progress from last session as motivation, not just a restart notice
  - Duolingo cited as a good model for re-engagement patterns
- Daisy chain concept: prompt users to continue or start the next DCP on completion
