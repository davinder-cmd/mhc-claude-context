# EBB Meeting Notes

_Date: 2026-07-05_

## Demo Assets: Client Logos for Configurable Nav

- Matt (Eng) requested sample client logos to test the configurable top navigation.
- Logos are organized by demo folder (74 total), not in a single consolidated folder.
- Isabel to try Claude / Claude Cowork to extract logos automatically (~15 min experiment).
- If that fails, manually pull ~10 logos of varying shapes.
- **Priority:** square and horizontal logos; avoid taller-than-wide.
- Include at least one MobileHealthConsumer logo.
- **Preferred:** mix of shapes including some "weird" edge cases for Matt to stress-test.

## EBB (Episode-Based Billing) Model and Scope

- Waystar contract signed; next step is aligning on exact data exchange.
- 14 of 15 DCPs eligible for EBB (pregnancy excluded — no cost-savings fit).
- Alight House is the lighthouse account; goes live **September 1**, testing in August.
- Reward structure: **$100 Amazon gift card** upon DCP completion (not HSA, not choice-based).
- Billing model: per completed session (MHC gets paid per session; user gets $100 at full program completion).
- User must complete ~50% before the $100 reward is guaranteed.
- Payment lag from insurance (potentially 90 days) flagged as a cash flow consideration.

### Risk Stratification

- Risk stratification may be required for billing eligibility.
- Options: health risk model, health assessment results, or DCP initial assessment.
- Goal: widest possible funnel while meeting client/payer requirements.
- Risk flag will be configurable; default is no risk requirement and no cap.
- Best-practice default: up to **$500/year per user**, tied to risk categories.

### Internal Debate on Defaults

- **Jill:** cap alone is sufficient protection.
- **Steve:** market will expect risk stratification.
- **John:** default should be no risk flag required.

## EBB UX and Enrollment Funnel

- **Key design goal:** surface EBB eligibility and reward opportunity from multiple touchpoints:
  - Post-health assessment
  - Post-wellbeing assessment
  - Mid-DCP entry
- Framing: _"Based on what we know about you, you may qualify to earn $100."_
- Health assessment (12 questions across 5 pillars) is a natural handoff point.
- Can surface DCP recommendations based on sleep, mental health, physical activity signals.
- Example: user starts diabetes management DCP but hasn't been diagnosed → redirect to prevention program.
- **"Daisy chain" concept:** health assessment → DCP recommendation → EBB enrollment, all in one flow.
- Homepage is out of scope for 9/1; current layout (hero banners + Just For You) stays as-is.
- Davinder flagged tension between "focus" framing and the at-risk/interest model; to revisit.

### EBB-Only Clients

- Team discussed trimming the offering.
- Journeys and habits may conflict with DCP focus.
- Team challenges flagged as strong engagement drivers to keep ("get them in for fun, then do the clinical stuff").

## Data Architecture and Longer-Term Needs

- **Current limitation:** DCP lesson data is siloed; no cross-lesson or cross-product memory.
  - Health assessment data cannot pre-populate DCP lessons.
  - No cross-session memory within DCPs.
- **Ideal future state:** unified health data layer that persists across assessments and DCPs.
  - Not a 9/1 or even 1/1 priority, but flagged as critical for long-term effectiveness.
- Davinder working on wireframes and experience maps (flow architecture, not final designs).
- Shared "Get in the Flow" and "Experience Map" docs in Slack for reference; updates coming.
- Focus right now: overall architecture and the core loop.

## Next Steps

| Owner | Action | Target |
|-------|--------|--------|
| **D'Arcy** | Document EBB requirements and decisions clearly. Share with Davinder once ready. | Monday, July 6 |
| **Isabel** | Attempt Claude / Cowork logo extraction, then compile ~10 logos for Matt (varying shapes — square, horizontal, some edge cases; include MHC logo). | Early next week if manual |
| **Davinder** | Update and share revised EBB wireframes and experience maps (incorporating at-risk model, dual-funnel concept, and loop architecture). | Will share when ready |
