# may13 — "If Atlassian built it" home (ADS take)

A thought experiment companion to the may12 Material 3 / Google take: same content from the May 11 nav-home v4 prototype, but rebuilt in the visual and interaction language of the **Atlassian Design System (ADS)** — the system behind Jira, Confluence, Trello, and Bitbucket. Same sections, same data, same surfaces of responsibility.

**Source reference for system tokens:** the attached `atlassian-DESIGN.md` design brief (alpha v1)
**Source Figma (content reference):** node 4450:6364
https://www.figma.com/design/8KnqJZHw475F2dpsHaubKY/Navigation-Design-Updates--Copy-?node-id=4450-6364

## Files

| File | What it is |
|---|---|
| [home-atlassian-v1.html](home-atlassian-v1.html) | The prototype. Fully responsive single page. Open and resize. |
| [breakpoints-preview.html](breakpoints-preview.html) | Three viewports side-by-side: 375 (compact), 1100 (medium), 1440 (large). |

## What's different vs. the may12 M3 take

| Surface | May12 Material 3 take | May13 ADS take |
|---|---|---|
| **Type family** | Google Sans + Roboto Flex | Charlie Display (display) + Inter as proxy for Atlassian's system stack |
| **Body size** | 16px Body Large | **14px** — ADS sits one step below the conventional baseline because project software needs density |
| **Ink color** | `#161d1c` (near-black) on tonal greens | `#172B4D` — navy, the signature Atlassian text color (never true black) |
| **Primary** | Teal `#006A60` (M3 seed) | Atlassian blue `#0052CC` (Jira's main color) with `#0747A6` darker hover |
| **Canvas** | `#f4fbf8` mint-tinted neutral | `#FFFFFF` content with `#F4F5F7` shell — colder, more enterprise |
| **Primary nav (≥600)** | 80px navigation rail (icon + label, active pill) | **240px left sidebar** with labeled destinations, section dividers (Workspace / Health / Engage), count badges |
| **Primary nav (mobile)** | M3 Bottom Navigation Bar (5 destinations, selected pill) | **No bottom nav.** Sidebar simply collapses. ADS doesn't have a bottom-nav pattern for product surfaces. |
| **Top bar** | 64px, brand mark, expanded search, mic, notifications, avatar | **56px, denser.** App switcher (`apps` icon), brand, search w/ ⌘K hint, help, notifications, settings, avatar |
| **Primary action** | M3 Extended FAB ("Log") fixed bottom-right | **Inline primary button** in page header. No FAB — ADS doesn't use them. |
| **Hero CTA** | M3 Filled button on tonal-container surface | ADS Primary button (`#0052CC`) on a gradient banner with a **4px left accent bar** (Confluence info-panel idiom) |
| **Section heads** | Title-Large + M3 Text button on trailing edge | h500 + **lozenge subtitle** + subtle button, underlined with a 1px hairline (border-bottom) |
| **Cards** | Three M3 variants: elevated / outlined / filled tonal | One signature card: **white surface + two-layer card+ring shadow** (`0 1px 1px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08)`). Subtler. |
| **Insight panel** | M3 Tertiary tonal card | **Confluence-style "info panel"** — tinted background, 4px discovery-purple left border |
| **Status badges** | Tonal M3 chips with full radius | **Lozenges** — the canonical ADS badge: 18px tall, 3px radius, uppercase 10/700, two variants (subtle and bold) across primary / discovery / success / warning / danger / info |
| **Quick actions** | Row of M3 Assist chips | Removed — replaced by **summary pip row** ("Week on track · 4 of 5 habits hit · Synced 4 min ago"). ADS doesn't lead with chips on a landing page. |
| **Program progress** | M3 wavy linear progress (sine path + stop indicator) | **Flat ADS progress bar** (6px track, fully filled tone, no animation flourishes). Functional. |
| **Program cards** | Elevated cards with tonal media + reward chip | **Jira-issue-card layout**: ticket ID (`DCP-12 · Sleep DCP`) top-left + bold lozenge (`In progress`) top-right, then title, then meta line, then progress, then footer with next-step + reward |
| **Tracker dials** | M3 circular icon avatar + linear progress, tonal variation | Compact bordered card, square 28px tinted icon tile, linear progress, **delta line below** (↑ 12% vs last week / ↓ 38 min vs goal) |
| **Reward tile** | M3 Elevated card with tonal reward chip header | Bordered card with **lozenge header** + display-weight value + label + detail line |
| **Shape** | M3 scale up to 28px (xl) and full pill | **3 / 4 / 8px radii.** ADS is deliberately rectilinear. Pills only on lozenge-pill-rounded badges and the 6px progress track. |
| **Breadcrumb** | Not present | **Present** — Acme / Workspace / Home. ADS uses breadcrumbs on every product surface. |

## What "Atlassian would do" looks like, distilled

1. **Density over breathability.** ADS body baseline is 14px (vs M3's 16px Body Large). Every line height tightens. The page fits more content above the fold — which is the right move for an enterprise audience that lives in the product all day.
2. **Lozenges everywhere.** The lozenge is ADS's most recognizable component. We use it on status (`In progress`, `Required`), category (`Article`, `DCP · Sleep`), and quantitative chrome (`3 active`, `Day 22 of 30`, `$75 ready`). Two variants (subtle and bold) handle 90% of cases.
3. **Sidebar, not bottom nav.** Atlassian products use a persistent left sidebar with labeled destinations grouped by section. On compact viewports, it collapses entirely rather than morphing into a bottom nav. We followed that rather than inventing a bottom nav ADS doesn't have.
4. **Card + ring shadow is the system fingerprint.** Two-layer rgba shadow (`0 1px 1px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08)`) used consistently. It reads as "subtle elevation + crisp edge" and is recognizable across products.
5. **No FAB. Buttons live in context.** The primary action ("Quick log") is a button in the page header. The hero's "Start program" is a button on the hero. ADS would never hover a button over content.
6. **Navy ink, not black.** `#172B4D` everywhere. It pairs with the blue primary and softens the otherwise-utilitarian density. Pure black would feel hostile.
7. **Information identifiers up front.** Program cards lead with a ticket ID (`DCP-12`) the way Jira issue cards lead with `PROJ-123`. It's pure project-software identity. Whether MHC's domain needs it is debatable — but it's what Atlassian would do.
8. **Functional motion only.** No bouncing, no springy chip selections, no playful wavy progress. Transitions are 100–200ms, ease-out, color and background only. ADS is enterprise-serious.

## Breakpoints — ADS-style

| Class | Range | Behavior |
|---|---|---|
| Compact | < 600 | Sidebar hidden entirely. Top bar: app switcher + brand mark only (brand name + search hide). Trackers / rewards 2 × 2. Programs 1-up. Page header stacks vertically. |
| Medium | 600–1023 | 240px left sidebar appears, full labels, section dividers, count badges. Search bar in top bar. Trackers / rewards 4-up. Programs 2-up. Hero splits content/media 7 / 5. |
| Large | 1024+ | Content caps at 1280, gutter 40. Programs become a flat 3-up grid. Sidebar persists at 240px. Hero accent panel on the right. |

## Color weighting (ADS take)

Rough proportional usage on this page:

| Color role | Approx. share | Used for |
|---|---|---|
| Canvas white (`#FFFFFF`) | ~58% | Content area, card surfaces |
| Surface gray (`#F4F5F7` / `#EBECF0`) | ~14% | Shell background, sidebar, search field, progress track |
| Navy ink (`#172B4D` / `#6B778C`) | ~13% | All text, icons, sidebar items |
| Blue primary family (`#0052CC` / `#DEEBFF`) | ~6% | Primary buttons, links, active sidebar state, primary lozenges, primary progress |
| Discovery purple (`#6554C0` / `#EAE6FF`) | ~4% | Insight banner, Sleep DCP tone, discovery progress |
| Success green (`#00875A` / `#E3FCEF`) | ~3% | Success lozenges, reward deltas, completed states, "Quick log" reinforcement |
| Warning amber (`#FF8B00` / `#FFF0B3`) | ~2% | Challenge accent border, "Due May 31" lozenge |

Compare to may12's teal-tonal palette where the weight sat in the *containers*: here the visual weight sits in **the borders, the small lozenges, and the navy ink**. Color is used sparingly and semantically.

## Honest caveats

1. **Not actually using @atlaskit.** Atlassian's real ADS library (`@atlaskit/*` React components) would render this differently in detail (icon set, exact spacing) but the visual result would be nearly identical. Hand-rolled CSS using the documented tokens.
2. **Charlie Display isn't free.** I use Inter as a proxy in the prototype (`font-family: "Charlie Display", "Inter", ...`). On an Atlassian build the display face would be loaded.
3. **Material Symbols, not Atlaskit Icons.** Real ADS uses its own icon set — slightly chunkier, custom-drawn for the system. Material Symbols are a close visual substitute; replace for production.
4. **The "DCP-12" ticket-ID treatment is debatable.** Jira loves ticket IDs. A health app probably shouldn't lead with `DCP-12` because users have no reason to memorize the IDs. Kept in to honor the "what Atlassian would do" framing; would strip on a real MHC build.
5. **Density may be too much for MHC's audience.** Atlassian users tolerate 14px body because they're at work. MHC's audience includes a wider range — older members, lower digital literacy. The actual MHC product probably wants Apple-HIG warmth (v4) over ADS density.

## When to use this

A **third reference point** alongside:

- May 11 v4 (Apple HIG warmth) — the chosen direction
- May 12 M3 (Google tonal calm) — provocation A
- May 13 ADS (Atlassian enterprise density) — provocation B

Useful to:

- Confirm by contrast that MHC should *not* go enterprise — the density and rectilinearity feel cold for a wellness product
- Lift specific ADS patterns that would still improve v4 — the **breadcrumb** at the top of complex member pages, **lozenges** for status (Article / Habit / Required), the **card+ring shadow** for a more confident card edge
- Show stakeholders the spectrum: "if we went enterprise, this is what we'd be saying — is that the brand?"
