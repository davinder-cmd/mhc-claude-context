# EBB — Get-In Flow · Iteration Log

> 🗄️ **SUPERSEDED (2026-07-06).** This flow predates Darcy's 7/5 pivot — it shows the $100 opt-in only, with no $300 assessment payday, no assessment-driven entry points, and no dual on-ramp. Replaced by the [master flow](../jul05-ebb-master-flow/) (whole journey) + [dual on-ramp](../jul05-ebb-dual-onramp/). Kept for history per iteration-versioning; do not build from this. The consent-swimlane thinking below is still valid input to the §4 consent screens.

Visual of how each user cohort opts in to EBB, routed through the three surfacing layers, with intensity (step / card / banner / modal / gate) marked at each step. Mirrors the consent workstream in `projects/feature-ebb/_brief.md`.

| Version | File | Date | Notes |
|---------|------|------|-------|
| v1 | `getin-flow-v1.html` | 2026-07-02 | Three swimlanes (New user · Existing no-DCP · Existing mid-DCP) × three layers (Announcement → Persistent → Contextual opt-in). Intensity legend. All converge on contextual consent at the DCP (HIPAA/ADA + 50% eligibility). Mid-DCP lane flagged "most in-your-face" (one-time modal / desktop right-panel). Calls out open-decision #1 (hard-gate vs earn-gate) as the lever. |

## Open decisions surfaced
1. Hard-gate vs earn-gate (governs dismissible modal vs blocking wall) — commercial + legal.
2. New-user opt-in: onboarding + home (lean both).
3. Modal frequency (lean: one takeover, then banner).
4. Where legal consent is captured (lean: contextual layer).
