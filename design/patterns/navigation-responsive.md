# Navigation — Information Architecture

**Status:** 🔶 Draft — documenting existing IA before redesign
**Last updated:** April 2026

---

## Purpose

This document defines the navigation information architecture — the "what" of navigation before the "how it looks." Use this as the source of truth for what destinations exist, their purpose, and how users move between them.

---

## Navigation Destinations (Current)

| # | Destination | Icon | Purpose | Primary User Job |
|---|-------------|------|---------|------------------|
| 1 | **Home** | House | Dashboard hub — HRA prompt, coach access, personalized recommendations, **AI Insights**, recent metrics | "What should I do today?" |
| 2 | **Digital Care** | Person with care symbol | Digital Care Paths — condition-specific clinical programs (MSK, behavioral health, diabetes, etc.) | "Work on my health program" |
| 3 | **Wellbeing** | Leaf/plant | Wearable tracking + daily habits — steps, sleep, active minutes; A.I. Health Insights | "Track my daily health data" |
| 4 | **Benefits** | Shield with cross | Employer benefits hub — EAP programs, partner resources (Ovia, Fidelity, etc.), insurance providers | "Access my employer benefits" |
| 5 | **Rewards** | Star | Incentive engine — gift card earnings, points balance, store, fulfillment history | "See what I've earned" |

**Note:** Figma demo files show older nav (home/reward/benefit/wellbeing/challenge). Live app is source of truth.

---

## Feature Mapping

| Destination | Feature Folder | Related Briefs |
|-------------|----------------|----------------|
| Home | — | Dashboard, cross-feature entry point |
| Digital Care | `projects/feature-dcp/` | DCPs (MSK, behavioral health, diabetes, pregnancy) |
| Wellbeing | `projects/feature-healthy-habits/`, `projects/feature-challenges/` | Wearable tracking, Challenges, Health Habits, A.I. Health Insights |
| Benefits | — | Benefits navigation (employer-specific) |
| Rewards | `projects/feature-rewards/` | Incentives, points, store, raffles |

**Note:** Challenges live within **Wellbeing** (below Journeys, above Health Habits) — not a top-level tab.

---

## Navigation Model by Platform

| Platform | Breakpoint | Pattern | Behavior |
|----------|------------|---------|----------|
| **Mobile (iOS/Android)** | Native | Bottom Navigation | 5 persistent tabs, always visible except on modals |
| **Mobile Web** | <600dp | Modal Navigation Drawer | Opens on trigger, overlays content |
| **Desktop/Tablet** | ≥600dp | Side Navigation Panel | 256dp expanded, 72dp collapsed |

**Reference:** [Application Frame](../foundation/application-frame.md) — defines the three structural regions (App Bar, Navigation, Body)

---

## Home Screen Structure

Based on current app (April 2026):

```
Home
├── Header (hamburger menu, employer logo, notifications)
├── Greeting ("Bonjour Andrew")
├── HRA Prompt Card ("Complete Health Assessment — Earn 1000 Points")
├── Coach Access (horizontal chips)
├── Personalized Recommendations ("Juste pour vous")
│   ├── Get active
│   ├── Improve your sleep
│   └── Start a new daily habit
├── AI Insights Section ← A.I. Health Insights surfaces here
│   └── Personalized insight + action buttons
└── Recent Metrics ("Dernières mesures")
    ├── Steps
    ├── Sleep
    └── Calories
```

---

## Wellbeing Screen Structure

```
Wellbeing
├── Header (hamburger menu, title)
├── Button (Track)
├── Category Chips (Lifestyle, Biometrics, Health Risks, Assessments, Videos)
├── Journeys Section
│   └── Journey cards (The Stress Cycle, Healthy Eating, etc.)
├── Challenges Section ← A.I. Motivator Coach in challenge feeds
│   └── Challenge cards (7 Wonders Challenge, Keep Moving, etc.)
└── Healthy Habits Section
    └── Habit cards (Positivity Me, Breakfast First, etc.)
```

---

## Benefits Screen Structure

```
Benefits
├── Header (hamburger menu, title)
├── Employee Assistance Programs (EAP)
│   └── Icon grid (Mental Health, Financial Counseling, Fitness & Recreation, etc.)
├── Resources
│   ├── Get help with higher education
│   ├── Ovia Health
│   ├── MyQuitline
│   ├── Vitria Health
│   └── Fidelity Investments
└── Providers
    ├── Blue Cross Blue Shield
    ├── Metlife Silver (Dental)
    ├── VSP Gold (Vision)
    ├── Metlife Pro (Pediatrics)
    └── MD Live (Telehealth)
```

**Note:** Benefits content is employer-configured — EAP programs, partner resources, and insurance providers vary by client.

---

## Digital Care Screen Structure

```
Digital Care
├── Header (hamburger menu, title)
├── Special Programs (featured/new)
│   ├── GLP-1 Medications
│   └── Cancer Prevention
└── Care Paths (scrolling list with progress indicators)
    ├── Treating Insomnia (CBT techniques)
    ├── Managing Depression (CBT tools)
    ├── Managing Anxiety (CBT tools)
    ├── Healthy Blood Pressure (Hypertension)
    ├── Diabetes Prevention
    ├── Continuing Diabetes Prevention
    ├── Lower Back Care (MSK)
    ├── Neck Care (MSK)
    ├── Weight Loss
    └── Pregnancy
```

**Note:** Each Care Path card shows progress indicator when enrolled. "Get Advice" button within lessons opens Health Advisor modal.

---

## Rewards Screen Structure

```
Rewards
├── Header (hamburger menu, title)
├── Balance Card (blue, shows current balances)
│   ├── Premium Discount ($500)
│   ├── Store Credit (450)
│   ├── Raffle Entries (12)
│   └── Points (1,530)
├── Ways to Earn (horizontal scroll cards with "Start" CTAs)
│   └── Earning opportunities tied to health actions
├── Browse (icon row)
│   ├── Store
│   ├── Marketplace
│   ├── Raffles
│   └── Earn
├── My Rewards (pending rewards with status)
│   └── e.g., "$500 Premium Discount — PENDING, Ordered Jan 12"
└── History (transaction log)
    └── Points earned, raffle entries, store credits with dates
```

**Reward Types (up to 4, client-configured):**
1. **Direct Reward** — Premium discounts, gift cards
2. **Store Credit** — Spend in internal store
3. **Points & Levels** — Accumulate toward thresholds
4. **Raffles** — Entries for sweepstakes drawings

---

## Where Digital Care Paths Surface

Digital Care Paths (DCPs) have a **dedicated top-level tab: Digital Care**.

**Entry points:**
- **Digital Care tab** — primary home for all DCP programs (MSK, behavioral health, diabetes, etc.)
- **Home** — program cards may surface recommended/active DCPs
- **Deep links** — HRA results, notifications, and rewards can route directly to DCPs

---

## AI Feature Placement

| AI Feature | Lives Under | Entry Point | User Experience |
|------------|-------------|-------------|-----------------|
| **A.I. Health Insights** | **Home** | "Insights" section on Home screen | Personalized insight card with action buttons (e.g., sleep recommendations) |
| **Health Advisor (DCP A.I. Expert)** | Digital Care | "Get Advice" button within DCP lesson → opens modal | Modal overlay with chat interface, "Done" to dismiss, voice input option |
| **A.I. Motivator Coach** | Wellbeing → Challenges | Social feed participant | Data-driven encouragement in team challenge feeds |

**Note:** Health Advisor opens as a **modal** — bottom navigation is hidden. This follows the rule: "Modal pages do not show Bottom Navigation."

---

## Destination Depth

| Destination | Depth | Sub-navigation |
|-------------|-------|----------------|
| Home | Shallow | Cards link to deeper destinations; no sub-nav |
| Digital Care | Deep | Special Programs + Care Paths list → Program detail → Modules → Lessons → Health Advisor modal |
| Wellbeing | Deep | Filter chips (Lifestyle, Biometrics, Health Risks, Assessments) → Journeys → Challenges → Healthy Habits |
| Benefits | Medium | EAP icon grid → Resources list → Providers list (all client-configured) |
| Rewards | Medium | Balance card → Ways to Earn → Browse (Store/Marketplace/Raffles/Earn) → My Rewards → History |

---

## Open Questions for Redesign

1. ~~**DCP placement:**~~ ✅ Answered — DCPs have dedicated "Digital Care" tab
2. ~~**Challenges placement:**~~ ✅ Answered — Lives in Wellbeing (below Journeys, above Health Habits)
3. ~~**AI prominence:**~~ ✅ Answered — AI Insights already surfaces on Home (not buried in Wellbeing)
4. **Benefits placement:** Benefits contains EAP, partner resources, and insurance providers — valuable but usage-dependent. Is this a top-level tab for all clients, or varies by employer?
5. **Figma alignment:** Demo files show old nav structure (bottom bar component) — need to update

---

## Rules

- **3–5 items only** — navigation research supports 5±2 items for mobile bottom nav
- **Icons + text labels always** — required for accessibility and clarity
- **Modal pages hide navigation** — Bottom Navigation does not appear on modal surfaces
- **Navigation structure changes require executive sign-off** — see escalation rules

---

## References

- [Bottom Navigation](../components/bottom-navigation.md) — mobile component behavioral rules
- [Application Frame](../foundation/application-frame.md) — structural regions and breakpoints

---

## Escalate if

- A navigation structure change is proposed (adding/removing destinations)
- A 6th top-level destination is requested
- DCP placement decision needs to be made

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-04-15 | Removed embedded Personify comparison — now standalone MHC IA (see `competitive/comparisons/` for comparisons) |
| 2026-04-15 | Added Digital Care + Rewards structures — all 5 tabs now documented |
| 2026-04-15 | Added Wellbeing + Benefits screen structures from Figma screenshots |
| 2026-04-15 | Added Home screen structure; AI Insights surfaces on Home; Health Advisor is modal from DCP |
| 2026-04-15 | Added Challenges placement: Wellbeing → below Journeys, above Health Habits |
| 2026-04-15 | Corrected nav structure from live app: Home, Digital Care, Wellbeing, Benefits, Rewards (Figma demos were stale) |
| 2026-04-15 | Initial version — documenting existing IA before app frame redesign |
