# Home Page — State & Use-Case Inventory (v1)

**Source design:** Figma node 4604:4240 ("Afternoon Davinder" — full home, real photography)
**Companion notes:** Granola meeting `258fbc05-72c8-44e6-8165-46000e5719bf-009c2hma` — *inaccessible to me (403). Reconcile manually.*
**Date:** 2026-05-13

---

## How to read this

This is a state inventory for every section of the home page. For each section it lists:

- **Default / happy path** — what the Figma frame shows now
- **Content states** — what changes when the section has 0 / few / many / overflow content
- **Lifecycle states** — loading, refreshing, error, stale
- **Eligibility states** — when does the section appear at all (employer setup, member type)
- **Permission states** — what changes when data sources aren't connected / user opted out
- **Edge / time states** — first visit, day 1, end of week, holiday, special days

Priority column (P0 / P1 / P2) suggests what to design in this round vs. later. P0 = ship-blocker, P1 = first follow-up, P2 = future polish.

---

## Two issues to fix before broader state work

| # | Section | Issue | Fix |
|---|---|---|---|
| 1 | Pair (right column) | Heading reads **"From you r employer"** (stray space) | "From your employer" |
| 2 | Trackers (Steps) | Steps shows **"6h 43m"** which is the sleep value | "8,420 steps" or similar — confirm unit |

---

## Page-level / cross-cutting states

These apply to the entire page regardless of section.

| State | Trigger | What changes | Priority |
|---|---|---|---|
| **First-time visit** | User just completed onboarding and lands on home for the first time | Welcome modal / coach-mark tour; "Things I care about" pre-populated from onboarding picks; trackers show "Connect a device" CTA; hero is a welcome card not a DCP | P0 |
| **Returning, no engagement yet** | Account >7 days old, 0 program enrollments, 0 tracker syncs | Same as default but with prominent "Get started" prompts in each section | P1 |
| **Loading (cold)** | Page just opened, data fetching | Skeleton blocks per section — match section dimensions; greeting visible immediately | P0 |
| **Loading (warm refresh)** | User pulled to refresh or auto-refresh fired | Shimmer per section; previously-rendered content stays until new arrives | P1 |
| **Offline / no network** | Device offline | Cached version + offline banner at top; trackers show "Last synced 2h ago"; CTAs disabled | P1 |
| **Server / API error** | Backend 500 / timeout on home aggregator | Page renders sections that did load, broken sections show inline error with retry | P1 |
| **Maintenance window** | Scheduled maintenance | Replace page with maintenance card + scheduled-end time | P2 |
| **Account suspended** | Account flagged | Replace page with "Account on hold" card + support contact | P2 |
| **Light / dark mode** | OS-level preference | Re-color through M3 token system (already supports both schemes) | P1 |
| **Locale: non-USD reward** | Member in a non-US market | Currency replacements; date format MM/DD → DD/MM; units km vs mi | P2 |
| **Accessibility: large text** | User has bumped iOS text size | Type re-flows; cards grow vertically; no clipping | P0 |
| **Right-to-left** | Arabic / Hebrew member | Mirror layout; nav rail right side; chevrons flip | P2 |

---

## Section 1 — Top app bar

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | Always | Hamburger · ACME logo · mail icon · search icon | P0 |
| Notification badge: 0 | No unread | Plain mail icon | P0 |
| Notification badge: 1–9 | 1–9 unread | Numbered dot | P0 |
| Notification badge: 10+ | 10+ unread | "9+" dot | P1 |
| Scrolled state | Page scrolled > a few px | Subtle border or shadow under the bar (M3 small app bar surface-container) | P1 |
| Search active | User tapped search | Expanded search field overlay with recent searches | P1 |
| Guest / pre-login | Not authenticated | Should never see home, but: redirect to auth | P0 |

---

## Section 2 — Greeting

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | Logged-in member, name known, afternoon | "Afternoon Davinder" | P0 |
| Time-of-day variants | Local clock time | "Morning Davinder" (5–12), "Afternoon Davinder" (12–17), "Evening Davinder" (17–22), "Hi Davinder" (22–5) | P0 |
| Name unknown | Member registered with email only | "Welcome back" or "Hi there" — confirm fallback | P1 |
| Birthday | Today is member's birthday | "Happy birthday, Davinder 🎉" or similar | P2 |
| Member anniversary | 1yr / 2yr etc. of joining | Celebratory variant | P2 |
| First afternoon back after a lapse | First session after 30+ days dormant | "Welcome back" + lighter, encouraging tone | P2 |

---

## Section 3 — Hero (BASED ON YOUR INTERESTS / FROM YOUR EMPLOYER variant)

The hero rotates content from different sources. **The eyebrow is the source tag.** This is the highest-stakes state matrix on the page.

### Source tag variants

| Eyebrow | When it appears | Example content |
|---|---|---|
| `BASED ON YOUR INTERESTS` | User has onboarding interests, content match found | Sleep DCP, Stress workshop |
| `FROM YOUR EMPLOYER` | Employer has pushed required/sponsored content | Annual HRA, biometric screening |
| `RECOMMENDED FOR YOU` | AI Digital Advisor surfacing | Insight-driven program suggestion |
| `CONTINUE WHERE YOU LEFT OFF` | Member started but didn't complete onboarding | Resume onboarding flow |
| `JUST FOR YOU` *(fallback)* | None of the above signals available | Generic content from editorial team |
| `NEW` | Newly launched program, eligible | New DCP launched in last 14 days |

### CTA / enrollment states (per hero variant)

| State | Trigger | CTA renders as | Priority |
|---|---|---|---|
| Available to start | Not enrolled, eligible | `Start the program` (filled primary) | P0 |
| Continue | Already enrolled, in progress | `Continue` | P0 |
| Completed | Already finished this program | Hide hero or show different variant (don't re-recommend) | P0 |
| Not eligible | Member not eligible (clinical / employer rules) | Hide hero variant; fall through to next | P0 |
| Coming soon | Program announced but not launched | `Notify me` (outlined) | P2 |
| Closed enrollment | Cohort-based, registration closed | "Join the next cohort" | P2 |
| Capacity reached | Limited-seat program full | "Join the waitlist" | P2 |

### Content / data states

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Image loaded | Default | Photograph fills 5/12 (large) or top (compact) | P0 |
| Image fails | Network or asset missing | M3 tonal gradient fallback (we already designed this in the Material take) | P0 |
| Reward = $0 | No financial reward attached | Hide "$100 reward at completion" line | P0 |
| Reward > $0 | Financial reward attached | Show "$X reward at completion" line | P0 |
| No source signal yet | Brand-new member, no onboarding | Welcome / interest-collection hero instead | P0 |

### Edge cases

- **Same hero shown 3 days in a row** — should rotate even if interests don't change
- **Hero CTA tapped, returns** — show "You're enrolled" toast then hide / replace hero
- **A/B test variants** — design with eyebrow + title + body + image as the four flex slots

---

## Section 4 — Things I care about (left) + From your employer (right)

Two lanes that look symmetric but have very different rules.

### Left lane — Things I care about

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default (has matches) | Interests set, content available | 1 article card + "See N more matched to your interests" + "Edit Interests" | P0 |
| Empty: no interests | Onboarding interests not picked | Replace with "Tell us what matters to you" CTA → onboarding interest picker | P0 |
| Empty: interests set, no matches | Interests too narrow / catalogue gap | "More content coming soon" + Edit Interests link | P1 |
| Single item only | Only 1 match in catalogue | Hide "See N more" link | P0 |
| 7+ matches | Many matches | "See 7 more matched to your interests" stays max | P0 |
| Item type: Article | Default | Headshot + ARTICLE · CATEGORY eyebrow + title + min read | P0 |
| Item type: Video | Video content | VIDEO eyebrow + duration instead of min read | P1 |
| Item type: Audio / podcast | Audio content | AUDIO eyebrow + duration | P2 |
| Item type: Workshop | Live or scheduled workshop | WORKSHOP eyebrow + date | P1 |
| Item type: Challenge invitation | Available to join | CHALLENGE eyebrow + days remaining | P2 |
| Read state | User opened article | Subtle "Read ✓" badge or muted treatment | P2 |
| Bookmarked | User saved | Bookmark icon | P2 |

### Right lane — From your employer

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | Employer has pushed content | 1 item + "See N more from Acme" | P0 |
| Consumer member (no employer) | Member is direct-to-consumer / no employer wrapper | Hide entire right lane; left lane goes full width OR swap in a different lane (recommended programs?) | P0 |
| Employer paused | Employer admin paused communications | "Your benefits team will share content soon" empty state | P2 |
| Required action / deadline | Mandatory item with deadline (HRA due 5/30) | Urgency styling — warning color border, deadline prominent | P0 |
| Item type: Health assessment | Annual HRA | Earn $X eyebrow + deadline | P0 |
| Item type: Vaccination reminder | Flu shot, COVID booster | "Schedule" CTA | P1 |
| Item type: Biometric screening | Annual screening | Location + appointment link | P1 |
| Item type: Workshop invite | Employer workshop | Date + location/virtual | P2 |
| Item type: Newsletter / announcement | One-way comms | Read more link | P2 |

### Section visibility logic

| Both lanes empty | Hide entire pair section | P0 |
| Only left has content | Left full width, hide right | P0 |
| Only right has content | Right full width, hide left | P0 |
| Both have content | 2-up (default) | P0 |

---

## Section 5 — This week (trackers)

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | Device connected, synced, data flowing | 4 tiles with values + dials + "78% of weekly goal" + sync timestamp | P0 |
| No device connected | First time, no integration | Replace with "Connect a device" CTA card (single panel, not 4 empties) | P0 |
| Currently syncing | Sync in progress | Tiles show "Syncing…" with skeleton or shimmer; sync line says "Syncing now" | P1 |
| Sync just succeeded | Sync completed < 60s ago | Sync line: "Synced just now" | P0 |
| Sync stale | > 24h since last sync | Sync line: "Last synced 2 days ago — Reconnect" + action | P1 |
| Sync error | Device disconnected / auth expired | Inline error tile: "Apple Health needs reconnecting" | P1 |
| Day 1, no historical data | New member, just connected | Tiles show current-day values + "Check back tomorrow for weekly trend" | P1 |
| Monday morning (week reset) | New week just started | Values near 0, % near 0, encouraging copy | P1 |
| Goal not set for a metric | User hasn't set goal | Hide % line; show "Set a goal" link | P2 |
| Goal hit | Metric ≥ 100% of weekly goal | Filled / celebratory dial + "Goal hit 🎉" line | P1 |
| Goal exceeded | Metric ≥ 100%, multiple days remain | "Crushing it — 120% of weekly goal" | P2 |
| Metric not tracked by device | Device only reports some metrics | Hide tile, OR show "Not available on your device" | P1 |
| Manual entry only | No device, member enters manually | Tiles with "+" button to log; no auto-sync line | P2 |
| Different metric mix per member | Pregnant member, senior member, etc. | Tile set could be: Steps + Sleep + Mood + Hydration (configurable) | P2 |
| Tap a tile | Member taps individual tracker | Drills into detail / history view | P1 |

---

## Section 6 — Insight panel

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | AI generated an insight | Insight text + "Refresh Insights" | P0 |
| Cold start, no insight yet | New member, < 5 days of data | Hide entire panel OR show "Your insights will appear here once we have enough data" | P0 |
| Multiple insights queued | More than 1 available | Show top one; "Refresh" cycles | P1 |
| Refreshing | User tapped Refresh | Button → loading state | P1 |
| Refresh rate-limited | Too many refreshes in a window | "Try again tomorrow" empty state | P2 |
| Refresh failed | AI service error | Inline error + retry | P1 |
| AI insights opted-out | Privacy preference disabled | Hide section entirely | P1 |
| Insight is actionable (deep link) | Insight ties to a program | "Try this program" button instead of just Refresh | P1 |
| Insight is a celebration | Member hit a milestone | Positive variant — different color treatment | P2 |
| Insight is a warning | Concerning trend (sleep < 5h for 5 days) | Caution variant — different color (don't make it scary) | P2 |

---

## Section 7 — Continue your programs

### Program count states

| Count | Render |
|---|---|
| 0 active | Hide carousel; show "Browse programs" CTA card | P0 |
| 1 active | Single full-width card or single-up | P0 |
| 2 active | 2-up grid | P0 |
| 3 active | 3-up grid (the design) | P0 |
| 4+ active | 3-up grid + "View all programs" prominent | P0 |

### Per-card states

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Not started | Enrolled, 0 sessions complete | "Session 0 of 8" + "Start" CTA on hover | P0 |
| In progress | 1+ sessions complete | "Session N of M" + filled progress bar | P0 |
| Overdue / stuck | Last activity > 14 days ago | Subtle warning treatment + "Pick up where you left off" copy | P1 |
| Completed | Final session done | Different surface (e.g., tonal) + "Completed" badge; appears in "Completed" tab, not here | P1 |
| Paused | Member paused enrollment | "Paused — resume" CTA | P2 |
| Locked | Scheduled to unlock later | Lock icon + unlock date | P2 |
| Reward earned | Member earned the $100 | Strikethrough or "Earned" pill | P1 |
| Reward partial | Some reward earned | "$50 of $100 earned" | P2 |
| Image fails | Photo missing | M3 tonal gradient fallback | P0 |

---

## Section 8 — Your challenge

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | 1 active challenge | Spring Steps card with day count + rank + Details | P0 |
| No challenge | Member not in any | Hide section OR replace with "Browse challenges" | P0 |
| Multiple challenges | Member in 2+ | Carousel or stacked; top-engaged first | P1 |
| Invited but not joined | Received invite | Different treatment — "Join challenge" prominent | P1 |
| Pre-start | Joined, not yet started | "Starts in 3 days" | P2 |
| Day-1 / Day-2 | Just started | Encouraging copy; rank not yet meaningful | P1 |
| Mid-challenge | Active middle period | The default state | P0 |
| Final day | Day N-1 of N | Urgency styling, "Final push" copy | P2 |
| Completed today | Just finished | Celebratory state — confetti or trophy | P2 |
| Ended (results out) | Day N+1 onwards, results posted | Results card with final rank | P1 |
| Rank: 1st | Member ranks 1st | "🏆 You're 1st" | P2 |
| Rank: top 3 | Top 3 | Highlight | P2 |
| Rank: middle | Middle of pack | Default "4th of 8 teammates" | P0 |
| Rank: bottom | Bottom 25% | "Catch up — N steps behind 7th place" (encouraging, not shaming) | P2 |
| Individual vs team | Solo challenge | Hide "of X teammates"; show personal % goal | P1 |
| Paused / canceled | Admin canceled | "Challenge canceled" message | P2 |

---

## Section 9 — Your rewards

| State | Trigger | What renders | Priority |
|---|---|---|---|
| Default | All reward types active | 4 tiles: Gift card, Points, Raffle, Store credit | P0 |
| Member not eligible for rewards | Some employer setups exclude rewards | Hide section entirely | P0 |
| Reward type empty | E.g., no raffles running | Hide that tile, re-flow grid OR show "No active raffles" | P1 |
| Just earned | Reward earned in last 24h | "+$25" badge on tile; brief celebratory shimmer | P2 |
| Expiring soon | Reward expires within 7 days | Warning border / "Expires in 3 days" | P1 |
| Expired | Reward expired but on record | Move to history; don't show here | P1 |
| Pending | Reward in processing | "Processing" status | P2 |
| Gift card · ready to redeem | Card available | "$75 — Amazon · ready to redeem" | P0 |
| Gift card · accumulating | Balance below threshold | "$15 — $10 to next $25 card" | P0 |
| Points · tier states | Bronze / Silver / Gold / Platinum | Different chip color per tier | P0 |
| Points · tier-up imminent | Within 100 of next tier | Progress bar prominent | P2 |
| Raffle · pre-draw | Entries open | "12 active entries — Draw on May 31" | P0 |
| Raffle · won | Member won a raffle | "🎉 You won! Claim by date" | P2 |
| Raffle · lost / not selected | Drawn, member didn't win | Hide or replace with next raffle | P2 |
| Store credit · 0 balance | No credit | Hide tile or show "Earn your first credit" | P1 |
| Store credit · with expiry | Credit expires | "$25 — expires 6/30" | P1 |
| Reward types vary by program | Some employers offer donation match, sweepstakes, badges | Tile set is configurable; design for 4 slots max | P1 |

---

## Member-type variants (cuts across all sections)

| Member type | What changes |
|---|---|
| **New member (< 7 days)** | Onboarding nudges, "Connect a device", welcome hero, no insights yet, no challenge yet |
| **Active member** | The default state shown in Figma |
| **Returning after lapse (30+ days)** | "Welcome back" greeting, lighter encouragement, no shame |
| **Power user** | All sections populated; collapsed insight; quick-actions prominent |
| **Pregnant member** | Pregnancy DCP prioritized in hero; trackers adapt (mood, hydration); maternity rewards visible |
| **Caregiver mode** | Header indicates "Davinder · for Mom"; data for dependent |
| **Consumer (no employer)** | Right lane hidden; rewards may be hidden depending on plan |
| **Senior** | Larger type, simplified card density |
| **At-risk** (clinical flag) | Risk-aware copy in hero; clinical content prioritized; insight panel may include clinical guidance |

---

## Recommended P0/P1/P2 coverage for v1

For shipping the redesign, design these variants in Figma:

### P0 — Ship-blocker (28 frames)
1. Default home (current Figma)
2. First-time visit / onboarding hero
3. Loading skeleton (per section)
4. **Hero** — all 6 source-tag variants
5. **Hero** — Continue / Available / Hide states
6. **Hero** — image fallback (no photo)
7. **Pair** — left lane empty (no interests)
8. **Pair** — right lane hidden (consumer member)
9. **Pair** — both empty (hide section)
10. **Trackers** — no device connected
11. **Trackers** — sync just now
12. **Trackers** — sync error
13. **Insight** — cold-start (hide)
14. **Programs** — empty (no enrollments)
15. **Programs** — 1 / 2 / 3 active
16. **Challenge** — no challenge (hide)
17. **Rewards** — member not eligible (hide)
18. **Rewards** — gift card accumulating vs ready
19. Time-of-day greeting variants (4)
20. Mobile (375) version of all key states

### P1 — Fast-follow (~20 frames)
- Stale sync + reconnect
- Insight refresh + refresh-failed
- Program overdue card
- Challenge: invited / completed / ended results
- Rewards: just-earned, expiring, raffle won
- Per-item read state on articles
- Right lane: deadline urgency

### P2 — Future (~15 frames)
- Locale variants
- RTL
- Dark mode
- Celebratory states (anniversary, birthday, goal-hit)
- Caregiver mode
- Pregnant / senior variants
- Workshop / audio / video content types in pair section

---

## Open questions for the next conversation

1. **Eligibility logic for the right lane.** Is "From your employer" hidden entirely for consumer members, or does it get swapped for something else (e.g., "Recommended for you" or "From MHC")?
2. **Hero rotation cadence.** Same hero for the whole day? Per session? Per visit?
3. **Hero source signal priority.** When a member has *both* an employer-pushed item and an interests-matched item, which wins?
4. **Insight panel ownership.** Is this Digital Advisor (the AI Health Coach) surfacing on the home page? If so, the section should probably be branded as such.
5. **Trackers metric configurability.** Are the four metrics fixed (Steps · Sleep · Calories · Active min) or configurable per member? If configurable, who configures — the member or the system?
6. **Challenge multiplicity.** Can a member be in more than one challenge at a time? If yes, how does the home page handle it — carousel, stacked, or only show top one?
7. **Reward type configurability.** Are the 4 tiles fixed types per employer, or does the home page pick the 4 most relevant for this member?
8. **Insight tone-of-voice rules.** Hard line on no-shame copy for low-performing weeks?
