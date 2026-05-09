# Home Page Section Inventory

**Purpose:** Standalone reference for wireframe + responsive design work in a new chat. Top-to-bottom inventory of each section, what goes in it, its weight on the page, and competitor notes where relevant.

**Format:** List only. No prose blocks.

---

## Reading the weight column

- **Weight** = visual prominence + user attention priority on a **2–5 scale.**
  - **5** = anchors the page (Hero)
  - **4** = high-priority, prominent placement
  - **3** = medium / standard content surface
  - **2** = supporting / low-weight (frame, conditional, or optional sections)
- **Frequency** = how often the section earns its space across user sessions.
- We expect to play with weight values during the design pass — current numbers are starting positions, not locks.

---

## Section summaries — one line each

Working summary of each section. Refined as we flesh out detail below.

1. **Top nav / application frame** — handled separately
2. **Greeting** — time-of-day + first name only ("Good morning, Davinder")
3. **Hero** — one flexible spotlight slot filled by a priority engine (challenge, employer message, promo, interest content, or program nudge) rather than a single-focus card locked to the user's wellbeing interest
4. **Tracker data** — Steps · Sleep · Calories · Active Min (weekly view, reduced footprint)
5. **Tracker Insights** — one takeaway + one action
6. **Ongoing programs** — DCPs, journeys, challenges, habits ("pick up where you left off")
7. **Challenges** (conditional) — active state, invites, results
8. **Rewards** (optional · client-configurable) — 1–4 reward types depending on client setup; multi-type display is an MHC differentiator
9. **From your employer** — Featured Client priority items
10. **Things I care about** — interest-tagged content based on what the user told us at onboarding
11. **Bottom nav / application frame** — handled separately

---

## 1. Top nav / application frame

- Handled by separate nav spec — placeholder only in home design
- **Live Figma reference:** [Navigation Design Updates](https://www.figma.com/design/GWvOaoNuWLaZ9jRe3o7TYC/Navigation-Design-Updates?node-id=2465-18294)
- Logo center-top (mobile + desktop)
- Bottom-tab nav (mobile) / left rail or top nav (desktop) — separate spec
- **Weight:** 2 (frame, not content)
- **Frequency:** every visit
- **Competitor notes:**
  - Personify: bottom-tab on mobile, top nav on web — same pattern we're moving toward
  - Sharecare: heavier application frame with badge counts everywhere — avoid

## 2. Greeting

- Time-of-day modifier + member first name ("Good morning, Davinder")
- Date dropped — user knows the day from OS clock
- **Weight:** 2
- **Frequency:** every visit
- **Considered but pushed out of V1 (document for future):**
  - **Page-level sync timestamp + device status line** ("↻ 4 min ago · Apple Health" / "Not connected · Connect")
  - **Why I considered it:** most of the page's data depends on the connected device. Surfacing state at page-level is a trust signal and a differentiator vs. Personify (G2 reviewers flag their tracker sync issues as hard to debug from inside the app).
  - **Why I deferred it:** adds visual density to the greeting. Makes the page feel busier than the personal-and-light tone we want at the top.
  - **Where the info still surfaces:** section 4 (Tracker data) handles sync state at the tile level (fresh / recent / stale / broken) plus a small inline timestamp adjacent to the tile row. Reconnect CTA renders on broken state.
  - **Worth revisiting if:** device-related support tickets stay high, or research shows users don't realize their data is stale.
- **Competitor notes:**
  - Personify: simple greeting + avatar — close to ours
  - Thrive Global: greeting often paired with intention-setting prompt — not adopting (adds friction)

## 3. Hero

- Single image card (50/50 split — photo left, copy panel right) — accessibility-first, no overlay text
- Source-tag label above title (one of: Challenge / Employer / Sales / Interest / Program)
- Title, body, primary CTA, optional secondary CTA
- Reward reference inline where applicable ("$100 at completion", "+50 pts")
- **Future state:** dots-below carousel, single card visible, swipeable
- **V1:** single committed hero only
- **Considered alternative (locked):** "hero + 3 things to do at top" was floated in the offsite memo. Decision: one hero, per the UX/UI Home Page Focus brief — John explicitly called for "one hero image on web and mobile." Not re-litigating.
- **Weight:** 5 (anchors the page)
- **Frequency:** every visit
- **Open decisions:**
  - Hero allocation rules (priority engine tiers + employer must-show flag + floor allocation)
- **Competitor notes:**
  - Personify: announcements carousel at top — pattern is sound and ideal long-term, but not V1 for us. The admin tooling doesn't currently have the building blocks to ship a clean multi-card carousel (peek-card pattern is messy on mobile, no JS toggle on web). We want the pattern; the tooling needs to catch up first. Future V2 = dots-below clean carousel once the admin gains the components.
  - Personify: Daily Cards carousel (separate from announcements above — swipeable educational micro-cards with quizzes) — not adopting in V1. Reasons: (a) no content engine to author daily cards at scale, (b) overlaps with Healthy Habits and "Things I care about" lane, (c) adds another carousel surface to an already dense page. Worth revisiting if we build content capacity.
  - Well.co: calm hero, single message, generous imagery — closest reference for visual treatment

## 4. Tracker data

- 4 metrics: Steps · Sleep · Calories · Active Min
- **New direction (Darcy brief):** weekly view instead of today, OR fewer data points, OR less real estate
- Live data with sync states: fresh / recent / stale / broken — affects per-tile rendering (e.g., stale tiles dim, broken tiles hide values)
- **Small inline sync line + device source** ("↻ 4 min ago · Apple Health") sits adjacent to the tile row — kept subtle, not promoted to page-level
- Reconnect CTA renders inline on tiles when broken state applies
- **Weight:** 3 → reduce to 2 per new tracker direction
- **Frequency:** every visit (data-dependent)
- **Open decisions:**
  - Weekly view at 4 tiles vs. 3 tiles vs. single summary card
- **Competitor notes:**
  - Circular metric visualization is the dominant pattern in fitness apps (Apple Watch's three rings, Fitbit, Garmin Connect, Personify all use some variant). Fitbit / Apple Watch use *filled rings* where the ring itself shows progress; Personify uses circular *icons* as labels with values shown separately. Either family works; circles + activity is what users expect (Jakob's Law).
  - Personify: 3 circular icons (Steps, Sleep, Active Min) — compact, glanceable, our reduction direction matches this
  - Sharecare: comprehensive metric grid — overwhelming, avoid

## 5. Tracker Insights (AI Insights)

- One takeaway + one recommended action
- Server-driven states: Ready / Refreshable / Read-only / Hidden
- Tied to tracker data — hides automatically if tracker not linked
- "Add to my evening" / "Get insight" / "Refresh insight" CTAs depending on state
- AI badge appears only after first insight generated
- **Weight:** 3
- **Frequency:** conditional (requires tracker data)
- **Competitor notes:**
  - Personify (PercyIQ): explains without acting — G2-criticized
  - Our differentiator: takeaway + ACTION format (not just summary)
  - Thrive Global: "microstep" framing — adopt the small-action philosophy

## 6. Ongoing programs

- "Pick up where you left off" continuity surface
- Item types: DCP / Journey / Challenge / Healthy habit / Assessment...
- Each item: type label, name, progress indicator (session X of Y · %), reward reference, "Continue" CTA
- Desktop: also surfaces new challenges (4-up grid with new-challenge tile)
- Mobile: vertical stack of 2 items + see-all link
- Cap: 4 items max; "+N more" overflow if user has more
- **Weight:** 4 (high priority — CS named "easier access")
- **Frequency:** conditional (only enrolled users)
- **Competitor notes:**
  - Personify: "My Programs" horizontal scroll — buried below fold; we promote
  - Personify: "Continue" CTAs are our pattern too
  - Thrive Global: microstep continuity — adopt the "next small thing" framing

## 7. Challenges (conditional)

- Active challenge state — team name, days remaining, current leaderboard position, "View team" CTA
- Pending team invites — accept / decline action
- New available challenges to join (when no active engagement)
- Recent results / leaderboard moment (post-completion celebration)
- Distinct from Ongoing programs (section 6): that's for in-progress engagement; this is for challenge-specific lifecycle moments (invites, results, discovery)
- Mobile: single-row strip · 1–2 items
- Desktop: 2-up or 3-up depending on state
- **Weight:** 2 (low — supporting, doesn't anchor)
- **Frequency:** conditional. Section renders only when **both** are true:
  - The client / partner has challenges configured at all
  - The user has relevant challenge state (active challenge, pending team invite, new availability, or recent result)
- Otherwise the section hides entirely. **No "browse all challenges" CTA, no empty-state fallback.** Discovery of challenges happens elsewhere in the app when nothing on home applies.
- **Open decisions:**
  - Overlap rules with Ongoing programs — does an active challenge appear in both, or only here?
- **Competitor notes:**
  - Personify: dedicated Social tab for challenges — they don't surface challenge state on home
  - Personify destination challenges (Pacific Crest Trail) — strong narrative pattern; we have analog
  - Surfacing challenge state on home (vs. burying in a Social tab) is a differentiator

## 8. Rewards (optional)

- **Strategic note:** Rewards configurability is one of MHC's competitive moats. CS Tech Leads can configure reward types, amounts, triggers per client. We often win deals over more polished competitors specifically *because* of this flexibility. **The home section should make that flexibility visible, not hide it.** The multi-type case (Framing 2) is the one that demonstrates the differentiator — design it so a sales demo can show all four types comfortably.
- **Display principle:** simple and non-intrusive *visually* — but the section should accommodate up to four distinct reward types without feeling cluttered. Restraint in treatment, generosity in what it can hold.
- **Two framings, depending on client config:**
  - **Framing 1 — points only** (Personify-style): single metric, e.g., "1,250 pts · 750 to Silver" with a thin progress bar
  - **Framing 2 — alternative reward types** (1–4 types depending on what's configured):
    1. Direct reward (gift card balance / "$75 earned" / "$25 to next gift card")
    2. Points + levels (current points · current tier · next tier threshold)
    3. Raffles (entries earned · upcoming draw date)
    4. Store credit (currency balance · "Spend in store" CTA)
- **Many clients won't have rewards configured at all** — section hides entirely
- **Some clients have only one type** — display collapses to a single line
- **Few clients have all four** — display expands to a compact row of up to 4 metrics
- Mobile: slim row, scales to 1–4 metrics
- Desktop: card or compact row, same scaling
- **Weight:** 2 by default (non-intrusive). May scale to 3 for engagement-heavy clients with rich reward economies — placement can shift higher in the stack to match.
- **Frequency:** optional / client-configurable (CS Tech Leads control)
- **Open decisions:**
  - Default placement — current slot 8 (between Challenges and lanes) is the conservative position. Alternative: directly under Tracker/Insights for clients where rewards are a primary engagement lever.
  - Whether placement and weight should be client-configurable too (e.g., toggle "promote rewards to weight 3, placement 5")
  - Visual treatment for the 4-type case so it doesn't compete with the lanes below
- **Competitor notes:**
  - Personify: persistent rewards progress bar at top of home — Framing 1 done at high prominence. Our Framing 1 is similar but kept lower-key.
  - **Framing 2 has no clean competitor analog** — most platforms only do points. This is where MHC wins on rewards configurability. Clients with rich reward economies (gift cards + points + raffles + store) get a single home surface that reflects their full setup. Personify can't do this. Sharecare can't do this. Sales should lead with this in any rewards-heavy demo.

## 9. From your employer

- Featured Client priority items (CS-named)
- Item types: benefits message / event / open enrollment / EAP info / wellness fair
- Each item: title, body, optional CTA, optional reward reference
- Source-labeled at section header AND per-item
- Permanent section — present every render regardless of hero allocation
- Mobile: stacked, 2 items
- Desktop: 50% column, 3-4 items
- **Weight:** 3 (medium — but permanent presence is the value)
- **Frequency:** every visit
- **Open decisions:**
  - Item cap and overflow pattern
  - Whether sub-content gets its own visual treatment per type (benefit vs. event vs. message)
- **Competitor notes:**
  - Personify: announcements carousel mixes employer + system messages — opaque
  - Our differentiator: explicit "From your employer" labeling — trust signal
  - Sharecare: also lacks clear employer/system distinction

## 10. Things I care about

- Personalized content tied to user's wellbeing interests (existing data from onboarding)
- Section header: "Things I care about"
- Sub-header: "Your interests: Sleep · Stress · Move more · [Edit]"
- [Edit] opens modal sheet on home (reuses existing interests UI)
- Per-item interest tag (Sleep / Stress / Move more)
- Item types: article / DCP recommendation / library / journey
- Each item: title, body, source tag, reward reference where applicable
- Empty state (when user has no interests yet): section title shifts to "Recommended" with algorithmic content + small CTA to set interests
- Mobile: stacked, 4 items
- Desktop: 50% column, 3-4 items
- **Weight:** 3 (medium — paired with employer lane)
- **Frequency:** every visit
- **Open decisions:**
  - Tap interest tag → filter section in place vs. navigate to a focus page (leaning focus page)
  - Empty-state behavior if interest selection is optional at onboarding
- **Competitor notes:**
  - Personify: "Topics of Interest" lives in More tab — buried; we surface on home
  - Personify: also offers algorithmic "For You" — opaque framing; we use explicit "based on what you told us" instead
  - Adopt: per-action point values from Personify ("Set a goal — 600 Points")

## 11. Bottom nav / application frame

- Handled by separate nav spec — placeholder only
- **Live Figma reference:** [Navigation Design Updates](https://www.figma.com/design/GWvOaoNuWLaZ9jRe3o7TYC/Navigation-Design-Updates?node-id=2465-18294)
- Mobile: 5-tab bottom bar
- Desktop: n/a
- **Weight:** 2
- **Frequency:** every visit

---

## Page-level cross-section concerns

- **Reward references** appear inline on items in sections 6, 7, 9, 10 — never as an application-frame chip. Section 8 is the optional aggregated rewards summary; inline refs persist regardless of whether section 8 renders.
- **Source labeling** applies to sections 3, 6, 7, 9, 10 — every content surface tells the user where it came from
- **508 accessibility** non-negotiable across all sections — no overlay text on imagery, color + text for state, ≥44px tap targets
- **Performance** — skeleton render for sections 4, 6, 7, 8 (data-dependent); tracker data lazy-loads behind initial paint

---

## Cross-cutting competitor recommendations

**Adopt:**

| Pattern | From | Where it applies |
|---|---|---|
| Per-action point values inline | Personify | Sections 6, 7, 9, 10 |
| "Continue where you left off" continuity | Personify | Section 6 |
| Microstep framing for small actions | Thrive Global | Sections 5 (Insights action), 6 (habit items) |
| Calm visual treatment 

**MHC differentiators to lean into:**

| Pattern | Why it wins | Where it applies |
|---|---|---|
| Rewards configurability — multi-type display (gift cards + points + raffles + store) | Competitors only show points. Our flexibility is a sales moat — we win deals on this. | Section 8 |
| Clinical depth in DCPs (vs. lightweight "Journeys") | Personify's programs are content; ours are interventions | Section 6, hero variant 5 |
| AI Insights with action (vs. PercyIQ's explain-only) | G2 critiqued Personify for AI that doesn't act | Section 5 |
| Explicit content provenance ("From your employer" / "Things I care about") | Trust signal; competitors are opaque | Sections 9, 10, hero source-tag |
| $100/DCP gift-card economy (vs. small-ticket points) | Higher dollar value gets visible inline framing | Sections 6, 8 |

**Don't adopt:**

| Pattern | From | Why not |
|---|---|---|
| Rewards progress bar at top | Personify | Deferred to future iteration; multiple reward types make a chip misleading |
| Daily Cards educational carousel | Personify | Not in V1: no content engine to author daily cards at scale, overlaps with Healthy Habits + Interests lane, adds density. Revisit if we build content capacity. |
| Multi-card hero / announcements carousel | Personify, current MHC | Pattern is sound and ideal long-term, but the admin tooling doesn't currently have the building blocks for a clean multi-card carousel (peek-card on mobile is messy, no JS toggle on web). V1 = single hero. V2 = dots-below clean carousel once the admin gains the components. |
| Comprehensive metric grid | Sharecare | Overwhelming; we're reducing tracker footprint |
| Heavy badging across the application frame | Sharecare | Notification fatigue |

---

## Recommended weight ordering for visual hierarchy

From most prominent to least:

1. Hero (section 3) — anchors above the fold
2. Ongoing programs (section 6) — high CS priority, prominent placement
3. Tracker data (section 4) + Insights (section 5) — paired, mid-page
4. Things I care about (section 10) — primary personalized lane
5. From your employer (section 9) — primary employer lane
6. Challenges (section 7) — conditional, low weight, supporting
7. Rewards (section 8) — optional / client-configurable; weight 2 default but can scale to 3 with elevated placement for engagement-heavy clients
8. Greeting (section 2) — supporting top-of-page
9. Top nav, bottom nav (sections 1, 11) — application frame

---

## File companion

- Detail / rationale: `08-design-outline-and-meeting-prep.md`
- Talking points: `09-meeting-script.md`
- Source canonical: `00-requirements-from-pd-innov.md`
- Visual reference (current wireframes): `home-wireframes-v4-content-widths-375-912-1200.html`
- **Navigation rework (live Figma — top + side nav):** [Navigation Design Updates](https://www.figma.com/design/GWvOaoNuWLaZ9jRe3o7TYC/Navigation-Design-Updates?node-id=2465-18294)
