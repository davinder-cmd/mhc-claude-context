# may12 — "If Google built it" home (Material 3 take)

A thought experiment: take the same content from the May 11 nav-home v4 prototype, and rebuild the page the way Google's Material Design 3 system would render it. Visual / interaction language only — same sections, same data, same surfaces of responsibility.

## v1 changelog (in-place edits — see note below)

| Date | Change |
|---|---|
| 2026-05-12 | Initial v1 build. Google Sans + Roboto Flex, hero image-content split `1.1fr 1fr` (~53/47), base M3 4dp spacing scale. |
| 2026-05-13 | **Hero split → `5fr 7fr`.** Image is 5/12 (~42%), content is 7/12 (~58%). Snapped to grid. |
| 2026-05-13 | **Spacing one step up.** Every padding/gap on the 4dp scale moved up one notch: 8→12, 12→16, 16→20, 20→24, 24→32, 32→40. Hero content padding 24→32. Section margin 32→40. Card padding 16→20. Tracker / reward padding 16→20. Programs body padding 16→20. |
| 2026-05-13 | **Type → SF Pro.** Replaced Google Sans + Roboto Flex with `SF Pro Display` (≥20px) + `SF Pro Text` (<20px). Dropped Google Fonts CSS. The result is a hybrid: M3 layout & color system + Apple HIG typography. |
| 2026-05-22 | **v2 — MHC-aligned branch.** Created `home-google-material-v2-mhc-aligned.html`. v1 preserved unchanged as the pure-M3 reference. v2 changes: Navigation Rail → Top Nav inline (Compact: bottom nav primary; Medium: icon-only top nav; Expanded+: icon+label top nav with search bar). Hero ratio at Compact 16:10 → 3:2. Hero gets `max-height: 360px` at Medium+ (MHC's hybrid hero cap). Margins 20/32/40/48 → Material-standard 16dp Compact / 24dp Medium+. Card paddings 20 → 24 (preserves Davinder's "one step up" intent using values that exist in the new $spacing scale). Body opens to 1440 at Extra-large (≥1600), was capped at 1280. |

> **Note on versioning** — v1 has been edited in place across three sessions (5/7 split + spacing + SF Pro). Per the iteration-versioning rule, the next substantive change should branch to `home-google-material-v2-{slug}.html` to preserve a clean v1-as-it-shipped snapshot.

**Source Figma (content reference):** node 4450:6364
https://www.figma.com/design/8KnqJZHw475F2dpsHaubKY/Navigation-Design-Updates--Copy-?node-id=4450-6364

## Files

| File | What it is |
|---|---|
| [home-google-material-v1.html](home-google-material-v1.html) | **v1 — "If Google built it" (pure M3 take).** Navigation Rail at Expanded (M3 adaptive default), 16:10 hero at Compact, scaling margins 20→48. Preserved as the clean Material reference. |
| [home-google-material-v2-mhc-aligned.html](home-google-material-v2-mhc-aligned.html) | **v2 — M3 chassis on MHC frame.** Top Nav at all Medium+ (MHC's chosen pattern), 3:2 hero @ 360dp cap (MHC hybrid pattern), Material-standard 16/24 margins, body opens to 1440 at Extra-large. Same content, type, color, and shape as v1. |
| [breakpoints-preview.html](breakpoints-preview.html) | Three viewports side-by-side: 375 (compact), 1100 (expanded), 1440 (large). v1 reference. |

## What's different vs. v4 (the MHC Acme build)

| Surface | MHC v4 (current) | If Google built it (M3) |
|---|---|---|
| **Type family** | SF Pro Display + SF Pro Text (Apple HIG) | ~~Google Sans + Roboto Flex~~ → SF Pro Display + SF Pro Text  *(reverted in v1 2026-05-13 — hybrid M3 chassis with Apple type)* |
| **Type scale** | Major Second (12/14/15/16/18/20/23/26/29) | M3 roles: Display / Headline / Title / Body / Label, three sizes each |
| **Color** | Warm beige placeholders + graphite ink + navy CTA | Teal-seeded M3 tonal palette: primary container, secondary container, tertiary container; the warm beige is replaced with a calm tonal teal |
| **Icons** | Inline custom SVGs | Material Symbols (Outlined, variable axes) |
| **Primary nav (≥840)** | Hamburger button only | Navigation Rail (80px, icon + label, M3 active pill state) |
| **Primary nav (mobile)** | Fixed bottom tab bar (custom) | M3 Bottom Navigation Bar (selected pill, filled icon state) |
| **Top bar** | Logo left, mail + search icons right | M3 Top App Bar: menu, brand mark, expanded search field, notifications, avatar |
| **Primary action** | Inline "Start the program" button | M3 Extended FAB ("Log") + inline filled button on hero |
| **Hero CTA** | Filled navy `Start the program` | M3 Filled button (`primary`), plus secondary Text button `Learn more` |
| **Section heads** | 23px Display, "View All Data" link | Title-Large + M3 Text button on trailing edge |
| **Cards** | Single style, hairline border + soft shadow | Three M3 variants in play: elevated (hero, programs, rewards), outlined (interests list), filled tonal (employer card, challenge, insight) |
| **Insight panel** | Light-blue surface with hairline border | M3 Tertiary tonal card with leading icon avatar + M3 Tonal + Text buttons |
| **Quick actions** | Implicit (no chip row) | M3 Assist chips at the top: For you / Log activity / Log meal / Check in / Browse |
| **Program progress** | Flat purple bar (4dp) | M3 "wavy" linear progress (sine path + stop indicator) |
| **Tracker dials** | Conic-gradient SVG dial per metric | M3 linear progress + circular icon avatar; tonal variation by metric (primary/secondary/tertiary container roles) |
| **Reward tile** | Light-gray surface, red dot, value 29px | M3 Elevated card, tonal Reward chip header, value 28px Display |
| **Shape** | Mostly 12–16 radius | M3 shape scale used explicitly: chips (8), cards (16), challenge card (28-xl), FAB (16), pills (full) |

## What "Google would do" looks like, distilled

1. **Container-color thinking, not background-color thinking.** M3 picks the surface role (Lowest / Low / Container / High / Highest) by elevation purpose, not by what color "looks right." That gives the page a quieter base and lets the tonal containers (primary/secondary/tertiary) carry the meaning. The warm beige is gone — health gets a calm teal seed.
2. **State layers everywhere.** Every interactive surface (icon button, chip, rail item, bottom-nav item) has a circular or pill-shaped hover/focus pill behind it. You can feel Google's home turf in the rail's active pill and the bottom nav's selected pill.
3. **One FAB, one extended action.** The single most likely action ("Log") gets the M3 Extended FAB. The hero's "Start the program" stays as an inline filled button — not promoted to FAB, because it's content-local.
4. **Adaptive nav, not just adaptive layout.** Bottom nav (compact) → navigation rail (expanded) → (in a longer-form version, would graduate to a Navigation Drawer at "Large" + content side panels). This is the M3 adaptive scaffolding behavior.
5. **Chips as quick actions, not filters.** This page has a chip row but it's *Assist* chips for shortcuts — log meal, log activity, check in — not page-level filters. Aligns with the v4 conclusion that page-level filters would be a lie when most surfaces aren't personalized.
6. **Wavy progress.** M3's recently-introduced wavy linear progress is used on program cards. It's playful without being noisy and reads as "in progress, ongoing rhythm." More Google-native than a flat bar.

## Breakpoints — M3 window-size classes

| Class | Range | Behavior |
|---|---|---|
| Compact | < 600 | Single column. Bottom nav + Extended FAB. Search collapses to icon in top app bar. Trackers / rewards 2 × 2. Programs horizontal-scroll carousel. |
| Medium | 600–839 | Single column. Top-bar search expands. Trackers / rewards 4-up. Programs carousel 2-up peek. No nav rail yet. |
| Expanded | 840–1199 | Navigation Rail appears (80px). Bottom nav disappears. FAB sits on canvas. Hero splits image / content 1.1 : 1. Programs 3-up peek. |
| Large | 1200+ | Content max-width 1280, gutter 40. Programs carousel becomes a flat 3-up grid. Top bar shows brand name beside mark. |

## Color weighting (M3 take)

Rough proportional usage on this page — what carries the visual weight:

| Color role | Approx. share | Used for |
|---|---|---|
| Background + surface (`#f4fbf8` / `#fff`) | ~62% | Page, card surfaces, content area |
| Surface container (low / mid / high) | ~14% | Outlined card backgrounds, chip surfaces, top app bar scrolled state, bottom nav |
| Primary container (`#a3f2e3`) + tertiary container (`#cbe6ff`) | ~12% | Hero media, program media, insight card, reward chips |
| On-surface ink (`#161d1c` / `#3f4947`) | ~7% | All text, icons |
| Primary (`#006a60`) | ~3% | Filled buttons, primary progress, FAB icon, links |
| Secondary container (`#cce8e2`) | ~2% | Challenge card, secondary chips, selected-state pills |

Compare to the warm-beige-heavy v4 (~22% beige). The Google take is greener, cooler, and tonal — the visual loudness sits in the *containers*, not the borders.

## Honest caveats

1. **Not actually MUI.** I built this with hand-rolled CSS that follows M3 tokens (color roles, shape, type, elevation). Using MUI as a library would require React; the visual result would be the same. The point was to show the *design language*, not litter a prototype with a build step.
2. **Wavy progress is a visual approximation.** Real M3 wavy progress is rendered via canvas / animated SVG with a sine wave that scrolls. Here it's a static path with a clip-rect "fill" — reads as wavy at normal viewing distance.
3. **No real photography.** Hero and program "media" tiles use M3 tonal gradients + radial accents. A real Google build would commission illustration or use neutral photography.
4. **Seed color is opinionated.** I chose teal (#006A60) because it matches Google Fit / Fitbit's health palette. Google's actual brand isn't teal — but for a health vertical, this is the move they'd make. Swappable.
5. **The chip row is the most arguable choice.** "For you" / "Log activity" / "Log meal" / "Check in" / "Browse programs" — Google would likely run a chip row here even if you wouldn't. If we keep the v4 conclusion that filters lie, treat these strictly as Assist chips (quick-actions), not Filter chips (page filters).

## When to use this

Mostly as a **provocation**. The MHC v4 (Apple HIG / warm-tone) and this M3 / Google take are two confident, mutually-exclusive design languages applied to the same content. Useful to:

- Decide whether MHC's design language should lean toward Apple HIG warmth or Google M3 calm-tonal
- Pressure-test the v4 decisions (no page-level filter, ink discipline, warm placeholders) by comparing them to a different system's choices
- Lift specific Material patterns that would improve v4 without adopting the whole system — e.g., the Extended FAB for "Log", the wavy progress, the navigation rail at expanded
