# may13 — "If Airbnb built it" home (Airbnb design-system restyle)

A reference-build companion to the [may12 Material 3 / Google take](../may12-material-google-home/home-google-material-v1.html), the [may13 Atlassian (ADS) take](../may13-atlassian-home/home-atlassian-v1.html), and the [may13 Uber take](../may13-home-uber-style/home-uber-v1-pill-duet.html). Same MHC home content scaffold — restyled here in **Airbnb's visual and interaction language**.

**Source content scaffold:** [may12 Material 3 home](../may12-material-google-home/home-google-material-v1.html)
**Source style tokens:** the attached `airbnb-DESIGN.md` design brief (alpha v1)
**Figma (content reference):** node 4450:6364 — https://www.figma.com/design/8KnqJZHw475F2dpsHaubKY/Home-Page-redesign?node-id=4450-6364

## Files

| File | What it is |
|---|---|
| [home-airbnb-v1-mhc-restyled.html](home-airbnb-v1-mhc-restyled.html) | **The deliverable.** MHC home content in Airbnb's visual language. Fully responsive single page. Open and resize. |
| [breakpoints-preview.html](breakpoints-preview.html) | Three viewports side-by-side: 375 (mobile), 1100 (desktop), 1440 (wide-flex). |
| [_sidecar-airbnb-homepage-reference.html](_sidecar-airbnb-homepage-reference.html) | Sidecar: a faithful render of **Airbnb's actual homepage** (popular homes, city links, etc.) using the same tokens. Not the deliverable — kept as a token-fidelity reference. |

## Iterations

| File | Date | Slug | Notes |
|------|------|------|-------|
| [home-airbnb-v1-mhc-restyled.html](home-airbnb-v1-mhc-restyled.html) | 2026-05-13 | mhc-restyled | First pass. Same content as may12 Material 3 home — restyled with Airbnb tokens: Rausch single-accent, white canvas top-to-bottom, pill search bar with four segments + orb, three illustrated product tabs centered, property-card 3-up program grid with session-dot overlay, rating-display treatment on reward values, host-card pattern on challenge band, one shadow tier throughout. |

## Key tokens applied (vs may12 Material)

| Dimension | may12 Material | may13 Airbnb |
|-----------|----------------|--------------|
| Brand colour | Teal `#006a60` (M3 seed) | **Rausch `#ff385c`** — used scarcely (~2% surface) |
| Surfaces | Tonal teal scale (8 steps) | White + 2 grays (`#f7f7f7`, `#f2f2f2`) — minty mood replaced by neutral white |
| Display face | Google Sans (400–500) | **Airbnb Cereal VF** (Inter as open substitute) |
| Body face | Roboto Flex | Inter (same family for display + body — Airbnb is single-family) |
| Headline weight | 400 (Material display) | **600–700** but at **modest sizes** (h1 = 28px, not 36–57) |
| Hero headline | 36px display-s | **32px / 600** with -0.5px letter-spacing — photography carries the visual weight, not type |
| Primary nav (≥600) | 80px navigation rail (icon + label, active pill) | **80px top nav** with brand left, **three illustrated product tabs centered** (Today / Care / Rewards), utilities right. No sidebar at all — Airbnb-web doesn't have one. |
| Primary nav (mobile) | M3 Bottom Navigation Bar (5 destinations) | **No bottom nav.** Product tabs simply hide; only brand + account pill remain. |
| Top bar | 64px, search expanded, mic icon | **80px** taller. Below the nav, a **separate pill-shape search band** with four segments (Find / Topic / Time / Reward) divided by hairline rules and terminated by a Rausch orb. |
| Primary action | M3 Extended FAB ("Log") fixed bottom-right | **Inline 48px Rausch button** in the hero. No FAB — Airbnb-web doesn't have one. |
| Quick action chips | M3 assist chips | **Airbnb category-strip pills** — white surface, 1px hairline border, full-radius. Active state = **ink fill + white text** (the date-picker-day-selected pattern). |
| Hero | M3 elevated card with tonal media | **Property-card hero variant** — large 5:4 photo with `rounded.md` clipping, "Suggested for you" floating badge top-left (`gf-badge`), heart icon top-right, content panel beside on desktop and below on tablet/mobile |
| Section heads | Title-Large + M3 Text button | **22px / 600 / -0.44px letter-spacing** with a small chevron — no underline rule, no shadow. Tight, low-volume. |
| Card model | Three M3 variants: elevated / outlined / filled tonal | **One signature card.** White surface, 1px hairline border, `rounded.md` (14px) radius, 24px padding. The single shadow tier appears only on hover or on already-floated chrome (search bar, badges, account pill). |
| Insight panel | M3 Tertiary tonal card | **Airbnb editorial band** — full-width hairline top + bottom rules, Rausch-tinted circular "mark" on the left, ink title with **Rausch-emphasized strong**, inline actions on the right. No card surface; lives directly on the page canvas. |
| Trackers | M3 tonal cards with circular icon + linear progress | **Stat cards** — white surface, 1px hairline, `rounded.md`. 28/700 ink value, uppercase muted label, **4px Rausch (or ink) fill bar**. Hot stats (>75%) use Rausch fill + Rausch-tinted % pill; others use ink fill + neutral pill. |
| Program cards | M3 elevated with wavy linear progress + reward chip | **Property-card pattern.** 1:1 photo, `rounded.md` clipping, "Sleep DCP" floating badge top-left, savable heart top-right, **carousel-dot row repurposed as session progress** (3 filled / 5 empty), star rating top-right of meta (4.9 in ink — same color as Airbnb's listing ratings), session/host line, reward as the "price" line with underlined ink number. |
| Reward tile | M3 elevated card with tonal reward chip header | **Rating-display treatment.** A pill badge top, then **40px / 700 ink value** (the `rating-display` token, scaled down from 64px — peak trust signal pattern), label, sub-label. The hottest reward ("Ready to redeem") gets a **Rausch-fill pill** vs. neutral pills on the rest. |
| Challenge card | M3 filled-tonal banner | **Host-card pattern** — white surface, 1px hairline + the float shadow tier, Rausch-tinted 80px circular avatar with trophy SVG, ink title at 22/600, meta with **strong** highlights, **6px Rausch progress bar** + percentage label, outlined `btn-secondary` on the right. |
| Shape | M3 4–28px + full pill | **8 / 14 / full.** Buttons 8px. Cards / photos / hero 14px. Search bar / chips / badges / hearts / orbs full-pill. No 4px / no 28px / no 32px — flatter shape grammar. |
| Bottom nav / FAB | M3 has both | **Neither.** Pure web aesthetic. |
| Footer | none on M3 home | **Three-column light footer** matching the canvas (`surface-soft` `#f7f7f7`) with a hairline-separated legal band: copyright + Terms / Privacy / Cookies / **HIPAA notice**, language picker, currency, social icons. |

## What "Airbnb would do" looks like, distilled

1. **Single accent, used scarcely.** Rausch only appears on: the search orb, the saved heart, the "Ready to redeem" pill, the insight strong-emphasis, the challenge bar fill, the brand wordmark, the hot tracker pills (>75%), and the primary CTA. Total surface area: ~2%. Every other CTA is **ink-outlined `btn-secondary`** or **plain ink underline `btn-text`**. This discipline is the single most lift-worthy lesson for the MHC v4 home.
2. **Photography is the typography.** The h1 sits at 28px / 700. The hero title at 32px / 600. Modest weights deliberately — Airbnb trusts the photo (the moody bedside scene) to carry visual weight. A SaaS or fintech at these sizes would feel timid; here, with a strong photo, it works.
3. **Property-card pattern handles every "browse a thing" surface.** Programs are property cards. Articles use the host-card-row pattern. Challenges use the host-card pattern. The system is repetitive in a calming way — once you learn the card grammar, every section reads at glance speed.
4. **Session dots, repurposed.** Airbnb's photo carousel dots become **session-progress dots** on program cards (3 filled, 5 empty for "Session 3 of 8"). This is the most opinionated translation in the build — replacing the Material 3 wavy progress entirely. The dots are quieter, more on-brand, and they reveal *exactly* how many sessions remain without needing a numeric label.
5. **Rating display for rewards.** Airbnb's single typographically-loud moment is the listing-detail rating ("4.81" at 64px / 700). Translated here to **reward values** ($75, 1,250, 12, $25) at 40px / 700. The peak-trust pattern fits naturally — these numbers are the reason the user comes back to the page.
6. **One shadow tier, period.** No M3 elevation overlay system, no ADS card+ring shadow, no Uber-style flat-on-flat. Just the one Airbnb shadow on already-floated chrome (search bar, account pill, challenge card, hover-floated cards). Refreshingly disciplined.
7. **Pill everything (almost).** Search bar, chips, hearts, badges, orbs, dots, avatars, and the language/currency links are all fully rounded. The only non-pill rounding is on cards (14px) and buttons (8px). This is the visual signal that says "consumer, not enterprise."
8. **Lowercase wordmark.** "acme health" is set with "acme" in Rausch + "health" in ink, both lowercase. Matches Airbnb's typographic identity. A serif-cap "ACME HEALTH" would feel wrong on this page.
9. **HIPAA-notice in the legal band.** A small but important translation — Airbnb's legal band carries "Terms / Sitemap / Privacy / Your Privacy Choices." MHC's needs to carry **HIPAA notice** alongside Privacy. Done in the legal-band, in the same muted style, so it reads as a quiet compliance signal rather than a scare.

## Breakpoints — Airbnb-style

| Class | Range | Behavior |
|---|---|---|
| Mobile | < 744 | Top product tabs hide entirely; brand + account pill only. "Your benefits" link hides. Search bar becomes a 2-segment pill (Find + orb). Programs 1-up. Trackers and rewards reflow to 2-up. Insight stacks vertically. Footer columns collapse to a single stack. |
| Tablet | 744–1128 | Product tabs re-appear centered. Trackers and rewards stay 2-up. Programs 3-up. Hero collapses to content-above-photo (single column). |
| Desktop | 1128–1440 | Programs 3-up. Trackers and rewards 4-up. Hero splits 1.1 / 0.9 (photo / content). Full 4-segment search bar. |
| Wide | > 1440 | Content caps at 1280px on editorial sections. Gutters absorb the rest. |

## Color weighting (Airbnb take)

Rough proportional usage on this page:

| Color role | Approx. share | Used for |
|---|---|---|
| Canvas white (`#ffffff`) | ~70% | Page floor, top nav, card surfaces, search-bar fill, badge backgrounds, hero content panel |
| Surface soft (`#f7f7f7` / `#f2f2f2`) | ~6% | Footer band fill, stat-card icon tiles, neutral reward badges |
| Ink (`#222222`) | ~12% | All headlines, body text, primary nav links, tab-active underline, reward-display values, tracker values, stat-bar fill (cold) |
| Muted text (`#6a6a6a`) | ~3% | Card sub-lines, search-segment placeholders, inactive product-tab labels, footer category labels, dot-separators |
| Hairlines (`#dddddd` / `#ebebeb`) | ~2% | Card borders, search-bar dividers, footer column splitters, insight band rules |
| **Rausch (`#ff385c` family)** | **~2%** | **Search orb · saved heart · "Ready to redeem" pill · insight strong · hot tracker bars (>75%) · challenge progress · primary CTA · brand wordmark · "Featured program" eyebrow.** Scarcity is the point. |
| Photography (mixed) | ~5% (card + hero area) | Hero photo, three program-card photos, two host-card thumbnails. |

Compare to Material 3 (~16% tonal teal everywhere) or ADS (~6% blue plus discovery / success / warning accents): **Airbnb is the least color-saturated of the four reference takes.** Rausch is so scarce that when it appears, it pops.

## Honest caveats

1. **Not actually using Cereal VF.** Airbnb Cereal is licensed and not available openly. The prototype loads **Inter** as the documented substitute. On a real Airbnb-MHC build, Cereal would replace the first font in every `font-family` stack.
2. **Hand-illustrated product-tab icons are inline SVG approximations.** Airbnb's actual tab icons (the bouncing 3D illustrated house, balloon, and bell) are custom assets. The Today / Care / Rewards icons here are simplified stand-ins — heart-with-pulse, stethoscope, and gift box, drawn in Airbnb's general illustrated style with the pink/yellow/blue palette and 2px ink linework.
3. **Three product tabs instead of MHC's five destinations.** MHC has Home / Care / Wellbeing / Rewards / Benefits. Airbnb's nav pattern is *three* centered tabs; we collapsed Home + Wellbeing into "Today" and pushed Benefits into the right-side utility link ("Your benefits"). On a real MHC build this would need product reconciliation — is the three-tab simplification right for the audience? Maybe a four-tab variant (Today / Care / Wellbeing / Rewards) is a better fit while still feeling Airbnb-faithful.
4. **Program photos are Unsplash stock.** Sleep, stress, and diabetes-prevention photography pulled from Unsplash to fill the photo plates. A real MHC build would either commission program-specific imagery, lean on illustration, or accept that some programs simply don't have a "photo" identity and need a different card pattern.
5. **Session dots are non-interactive.** They render as a static row inside the card photo. Tapping a dot doesn't seek to a session — that flow would need program-detail-page work.
6. **Search bar segments aren't interactive.** Hairline dividers disappear on hover of a neighbor (a real Airbnb-style detail), but the four segments don't open Where / When / Who flyouts. The orb hover state (Rausch → Rausch-active) is the only interactive transition wired up.
7. **The "rating" on program cards is editorial.** "4.9" / "4.8" / "4.9" are stand-ins for program quality scores. MHC programs don't currently surface a rating — but they could (member satisfaction, clinical outcome, completion rate). This is one of the more interesting borrowings to consider for v4 alongside the scarcity-accent discipline.
8. **The sidecar [_sidecar-airbnb-homepage-reference.html](_sidecar-airbnb-homepage-reference.html) is not the deliverable.** It's a faithful render of Airbnb's actual homepage (city collage, property cards) using the same tokens. Kept as a token-fidelity reference for anyone wanting to see "what Airbnb's own page looks like" rendered from the design.md, separate from the MHC translation.

## When to use this

A **fourth reference point** alongside:

- May 11 v4 (Apple HIG warmth) — the chosen MHC direction
- May 12 M3 (Google tonal calm) — provocation A
- May 13 ADS (Atlassian enterprise density) — provocation B
- May 13 Uber (B/W pill duet) — provocation C
- **May 13 Airbnb (consumer marketplace scarcity-accent) — provocation D**

Useful to:

- Confirm by contrast that MHC is *not* a marketplace — but **borrow the discipline.** The "use brand accent on 2% of surface area" rule is the most lift-worthy lesson here, regardless of the surrounding system.
- Lift specific Airbnb patterns that would still improve v4 — the **scarcity-accent discipline**, the **rating-display treatment** on reward values, the **session-dot progress idiom** (quieter than M3's wavy progress, more native than a numeric "3 of 8"), the **pill search bar with semantic segments** as a strong page-entry pattern.
- Show stakeholders the spectrum: "if we went pure consumer-warmth with scarcity accent, this is what we'd be saying — is that the brand?" The answer is probably "warmer than Atlassian, more disciplined than M3, less austere than Uber."

## Patterns worth stealing for v4

> "The brand color appears just enough to be the brand, and never enough to drown the page."

1. **Scarcity-accent discipline** — measure v4's current Rausch-equivalent surface area; if it's >5%, audit which moments need to lose it. The page should feel like "neutral with brand moments," not "branded with neutral fillers."
2. **Rating-display treatment on numbers that matter** — reward values, completion percentages, streak days. Use a generous size (32–44px) and bold weight (700). Reserve this typographic loudness for **one or two numbers per page** at most.
3. **Session-dot progress** — replace continuous progress bars with discrete dot rows when the unit count is meaningful (sessions, days, modules). It's a stronger comprehension signal at a glance.
4. **Pill search bar with semantic segments** — even if MHC doesn't need 4 segments, a 2-segment pill (Find + Topic) divided by a hairline rule and terminated by a Rausch orb would be a much stronger page-entry moment than a simple input field.
