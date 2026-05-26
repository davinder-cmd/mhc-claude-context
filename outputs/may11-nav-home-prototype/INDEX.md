# may11 — Nav Home Prototype (from Figma)

Responsive HTML build of the new Home + Navigation design.

**Source Figma:** Navigation Design Updates (Copy), node 4450:5629
https://www.figma.com/design/8KnqJZHw475F2dpsHaubKY/Navigation-Design-Updates--Copy-?node-id=4450-5629

## Companion docs

| File | Purpose |
|---|---|
| [pitch-talking-points.md](pitch-talking-points.md) | **Long speaking script.** First-person, options-framed. Carousel/real-estate counter-argument, the page-level-filter pushback grounded in Norman's mapping + Gestalt grouping. Includes the form-and-function vs. visuals scoping line and the zero-states/component-variations caveat. Use as reference doc / preparation. |
| [pitch-talking-points-print.html](pitch-talking-points-print.html) | **Print-ready version of the long script.** Letter, SF Pro, page-break-aware, callout boxes for the two up-front caveats, individual cards for each "If pressed" line. Print or save-as-PDF with ⌘P. |
| [pitch-talking-points-short.md](pitch-talking-points-short.md) | **Short conversational version.** Same beats, ~1/3 the length. Use as the in-meeting script. |
| [pitch-talking-points-short-print.html](pitch-talking-points-short-print.html) | **Print-ready version of the short script.** Letter, SF Pro, ~2–3 pages. The one to actually take into the room. |

## Iterations

| File | Date | Notes |
|---|---|---|
| [nav-home-v1-figma-build.html](nav-home-v1-figma-build.html) | 2026-05-11 | First pass. Built before reading the design-system tokens. Used arbitrary type sizes and a generic font stack. Section heads were duplicated as "Things I care about" twice. |
| [nav-home-v2-spec-tight.html](nav-home-v2-spec-tight.html) | 2026-05-11 | Spec-tight rebuild against Figma node 4453:12010 + `design/foundation/*.md`. Fixes placement, spacing, and type. See "v2 changes" below. |
| [nav-home-v3-figma-update.html](nav-home-v3-figma-update.html) | 2026-05-11 | Picks up Figma updates on the same node. Five copy/visibility diffs vs v2 — see "v3 changes" below. |
| [nav-home-v4-listened.html](nav-home-v4-listened.html) | 2026-05-11 | **Recommended for v1 pitch.** Adds the personalization-as-labeling story: hero gets a `BASED ON YOUR INTERESTS` eyebrow (source tag — same slot carries `FROM YOUR EMPLOYER` when the hero rotates to employer content), left lane title becomes `Based on your interest`. This is the answer to John's directive #6 — not filters, but visible provenance + edit affordance scoped to the lane that's actually personalized. |

## v1 pitch narrative — personalization

**The problem we're solving:** the old home had a section called "Just For You" that wasn't. It was a generic mix labeled as personal. Users didn't know their onboarding interest selections had been heard. That's a trust break.

**What v4 does:** declares the personalization signal *where it actually lives* and gives the user an edit-in-place affordance — instead of adding a page-level filter that would be a lie.

| Surface | Treatment | What it tells the user |
|---|---|---|
| Hero | Eyebrow tag (`BASED ON YOUR INTERESTS` / `FROM YOUR EMPLOYER` / etc.) | "This slot is mixed-purpose. Here's where today's content came from." Source tag is the differentiator. |
| Left lane | `Based on your interest` title + `See 7 more matched to your interests` + `Edit Interests` | "This whole section is shaped by what you told us. Change your mind here." |
| Right lane | `From your employer` | Explicit non-personalized lane. Trust signal by contrast. |

**Why no page-level filter:** most of the home (tracker, programs, employer, challenge, rewards) isn't interest-driven. A filter would either be disconnected (only changes the lane and maybe the hero) or false (claim to change things it can't). Edit-Interests adjacent to the lane is the right mechanism at the right scope.

**Onboarding does the personalization step.** The home's job is to make that step visible.

## v3 changes

| Area | v2 | v3 |
|---|---|---|
| Desktop "This week" link | View Trends | **View All Data** |
| Mobile "This week" right-side link | View Trends visible | hidden — only sync line remains |
| Mobile "Continue your programs" right-side link | View all programs visible | hidden |
| Mobile programs section | scroller only | scroller + **Refresh** ghost button below |
| Mobile insight eyebrow | INSIGHT | **INSIGHTS** (plural) |
| Mobile rewards link | Reward Details | **Dashboard** |

## v2 changes (what's actually different)

**Source of truth swapped.** v1 was built off node 4450:5629, which paired identical "Things I care about" columns. v2 reads node 4453:12010 — left column is `Things I care about`, right is `From your employer` (Health Assessment, Earn $300). Mobile renders these as two separate stacked cards titled `Based on your interests` and `From your employer`.

**Type system, fixed.** Now uses SF Pro Display (≥20px) + SF Pro Text (<20px), with Major Second scale anchored to base-16:

| Token | Px | Used for |
|---|---|---|
| `--t-12` | 12 | Eyebrows, tag labels, tile labels, tile meta, tab labels |
| `--t-14` | 14 | Meta, links, body small, button labels |
| `--t-15` | 15 | Hero body paragraph |
| `--t-16` | 16 | Body min, list-row titles |
| `--t-18` | 18 | Mobile section title (H3) |
| `--t-20` | 20 | Desktop section sub-title (H3), program/challenge title |
| `--t-23` | 23 | Section H2 (`This week`, `Continue your programs`, …), tracker value |
| `--t-26` | 26 | Mobile H1, mobile reward value |
| `--t-29` | 29 | Desktop H1, hero title, reward value |

Line heights follow spec: display/heading 1.125, tight 1.25, body 1.5.

**Spacing tokens, fixed.** All values come from the 4dp scale (`--s-02` 4 → `--s-12` 80). No off-scale paddings. Page gutters follow `responsive-grid.md`: 16 (<600), 32 (600–1239), 40 (1240+).

**Top bar, accurate.** Hamburger left → ACME logo → spacer → message + search icon buttons. Mobile: hamburger left, logo centered, message + search hidden in top bar and rendered inline next to the greeting (matches Figma where the actions sit beside "Hi Davinder").

**Insight panel, renamed.** Was "Advisor / Add wind-down". Now "Insight / Refresh" to match Figma copy.

**Hero copy, accurate.** Title is `Sleep better in 4 weeks` (no comma). Body keeps the two-sentence cadence from the Figma frame.

**Hero ratio.** Image-to-content is now 1:1 with image ≥360 tall on desktop, matching the Figma proportions more faithfully than v1's 1.15:1.

**Program card.** Tag below image (not inside); title set in SF Pro Display 20; progress 4dp height; foot row left/right justified with $100 reward bolder than session meta.

**Reward tile.** Value uses Display 29, red dot reserved for the category tag, gray reward background `#f4f5f7`.

**Article card.** Thumbnail set to 72×72 (was 96×80), padding 16dp, vertical center alignment, chevron at the trailing edge.

## Breakpoints (per `design/foundation/responsive-grid.md`)

| Range | Behavior |
|---|---|
| `<600` | 4-col, 16 margin. Greeting "Afternoon Davinder" stays. Hero stacks. Pair → two stacked cards. Trackers 2×2. Programs horizontal-scroll. Rewards 2×2. Bottom tab nav fixed. |
| `600–904` | 8-col, 32 margin. Hero stacks. Pair collapses to one column. Programs/rewards 2-up. Trackers stay 4-up. |
| `905–1239` | 12-col, 32 margin. Full desktop. |
| `1240+` | 12-col, 40 margin, page max 1240. |

## Color & ink discipline

| Use | Token / hex |
|---|---|
| Page surface | `#ffffff` |
| Hero / article / program placeholder | `#f4eee2` warm beige (placeholders only) |
| Insight panel | `#e8f1fb` + `#cbe0f3` border |
| Reward tile | `#f4f5f7` |
| Hairline | `#e8e6e1` |
| Text primary | `#14181d` graphite (no brown) |
| Text secondary | `#3a4047` |
| Text placeholder / meta | `#6a727b` |
| Brand navy (CTA, active tab) | `#1a3e72` |
| Link | `#1f6fd1` |
| ACME red (logo + reward dot) | `#c8202a` |
| Dial good | `#2a8f7c` |
| Dial warm (calories) | `#b8642a` |
| Program progress | `#5b3a86` |

## Open questions for next pass

1. **Tracker dial values** — Figma shows "6h 43m" for STEPS, which is a sleep-style format on a steps metric. Confirm intended unit; v2 mirrors Figma literally.
2. **Mobile "Refresh" under Continue your programs** — Figma shows a Refresh ghost button under the scroller. Should it re-rank programs, or refresh the AI surfacing? Not yet wired.
3. **Hamburger menu contents** — drawer not designed.
4. **Real imagery / illustration direction** — placeholders are flat beige.
5. **Tablet hero stacking (600–904)** — v2 stacks. Confirm or revert to side-by-side at this range.


## What v1 covers

- **Top bar** — desktop: hamburger left, ACME logo left; mobile: hamburger left, ACME centered, message icon right
- **Greeting** — "Afternoon Davinder" / interests row · View Trends
- **Hero card** — image + body, single primary CTA "Start the program"
- **Things I care about** — desktop: two paired columns (interests-matched / from Acme). Mobile: collapses to a single "Based on your interests" stream
- **This week** — 4 tracker tiles (Steps · Sleep · Calories · Active min) with conic-gradient dials. 4-up on desktop, 2×2 on mobile
- **Advisor insight banner** — light-blue, dot eyebrow, action button
- **Continue your programs** — 3 program cards. Horizontal scroll with peek on mobile
- **Your challenge** — Spring Steps team challenge with Details
- **Your rewards** — 4 reward tiles. 2×2 on mobile
- **Bottom tab nav** — Home / Digital Care / Wellbeing / Benefits / Rewards (mobile only)

## Breakpoints

| Range | Behavior |
|---|---|
| `<768px` | Mobile. Stacked hero, single stream, 2×2 grids, horizontal-scroll programs, fixed bottom tab nav. |
| `768–1023px` | Mid. Hero stacks, programs/rewards 2-up, trackers stay 4-up. |
| `≥1024px` | Desktop. Paired columns, 3-up programs, 4-up trackers + rewards. |
| `≥1200px` | Wide-flex. Content max-width 1200, gutters preserved. |

## Color & ink discipline

Per `feedback_neutral_vs_surface_warmth`:
- Warm beige (`#f6f1e8`) used **only** on placeholders (hero, articles, programs)
- Text and borders are near-neutral graphite (`#14181d` / `#3a4047` / `#6a727b`) — no brown ink
- ACME red (`#c8202a`) reserved for logo border + reward category dots
- Navy (`#1a3e72`) for primary CTA and active tab
- Advisor banner uses a light blue (`#eaf2fb`) for AI-distinct surface

## Open questions for next pass

1. **Empty / sparse states** — what does each section render when the member has no programs / no rewards / no insight?
2. **Real imagery** — placeholders are beige. Need final hero + program photography or illustration direction.
3. **Hamburger menu contents** — drawer not designed yet. Mirror bottom nav? Add account / settings / sign-out?
4. **Tablet (≥768) hero** — currently stacks at 768–1023. Confirm: keep stacked, or revert to side-by-side at this range?
5. **Color weighting visualization** — not yet produced for this iteration; can add as a sibling reference page on next rev.
