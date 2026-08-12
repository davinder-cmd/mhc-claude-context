# GAPS — non-authorable patterns, flags, and the M3 delta

## 1. M3 components that CANNOT be authored as MHC blocks

Pulled live from the Material 3 Design Kit (Community) Components page. The kit has ~31 component types; only a subset can ship as MHC blocks (static HTML + shared CSS, no `<form>`, no JS, no host chrome). This is the authorable delta:

| M3 component | MHC status | Why |
|---|---|---|
| Cards | ✅ authorable | → Pair / Program / Reward / Tracker / Insight / Challenge |
| Carousel | ✅ authorable | CSS scroll-snap (Compact programs). No JS controls. |
| Chips | ✅ (display only) | `.reward-chip` lozenge. Interactive/input chips are not authorable. |
| Lists | ✅ authorable | grids + rows |
| Dividers | ✅ authorable | hairline borders |
| Badges | ✅ (display only) | unread dot / count badge |
| Progress indicators | ✅ (linear only) | `.progress` bar. No animated/circular. |
| Buttons | ⚠️ partial | only text-link nav (`<a class="btn btn-text">`). Filled/outlined action buttons are **host-injected** (mutating actions). |
| Top app bars, Bottom app bars | 🚫 host chrome | platform-rendered shell, not a block |
| Navigation bar / rail / drawer | 🚫 host chrome | platform navigation |
| Text Fields, Search | 🚫 non-authorable | inputs are host-injected (User Input block + MHC action); no `<form>`/`<input>` in blocks |
| Checkboxes, Radio, Switch, Sliders, Segmented buttons | 🚫 non-authorable | form controls / stateful; no JS |
| Menu, Dialogs, Bottom sheets, Side sheets, Tooltips, Snackbars | 🚫 non-authorable | require JS toggling / host overlays |
| Date picker, Time picker | 🚫 non-authorable | interactive inputs |
| Tabs | 🚫 non-authorable | client-side toggling (no `:target`/`:checked` hacks) |
| FABs | 🚫 non-authorable (as block) | floating action = host affordance / MHC action |

**Takeaway:** the MHC kit is the *layout-and-content* slice of M3 — Cards, Lists, Carousel, Chips, Dividers, Badges, Progress, text-links — plus the page-behavior system. Everything interactive/stateful is host-injected or a User Input block, by platform rule.

## 2. Excluded from the block set (host-owned)

| Pattern | Classes | Why |
|---|---|---|
| Top bar | `.top-bar`, `.acme-logo` | host chrome |
| Bottom nav | `.bottom-nav`, `.bn-item` | host chrome; `<button>`→`<a>` in host shell |
| Primary/secondary action buttons | `.btn-filled`, `.btn-outlined`, `.btn-m/-l/-xl` | mutating actions = host-injected or MHC action |
| Insight action slot | `.insight__action` | host renders the button into it |

## 3. Flags to resolve (in the locked CSS or with the platform)

1. **Media `background-size`** — `.hero__media`, `.program__media`, `.pair-card__thumb` set no `background-size`. v81 used flat tint placeholders; real photos need `background-size:cover; background-position:center` added to `mhc-home.css`. (Applied demo-only in the frames.)
2. **Progress `--p` inline style** — verify CKEditor preserves custom-property inline styles (`style="--p:65%"`); some sanitizers strip them.
3. **`.tracker--zero`** — named in `block-3` comments, absent from CSS. Zero state currently renders from the base tile. Mint the modifier or document the reuse.
4. **`.tracker__link` reuse** — tracker tiles reuse `.program__link` for their stretched anchor. Mint `.tracker__link` or document the intentional coupling.
5. **Stretched-link a11y** — prototype-grade: needs keyboard focus styling on the link + `aria-hidden` on duplicated card content.
6. **`.reward-chip` off the type scale** — hardcoded 11sp/uppercase. Align to a token when theming lands.
7. **External deps** — Material Symbols font (icons) + picsum (demo photos) need internet. For offline handoff, inline SVG icons + local images.

## 4. Flagged responsive-model migration (recommendation, NOT done)

Migrate viewport media queries → **container queries**. Blocks are dropped into varying admin/host slots where viewport ≠ available width; container queries make each block respond to its actual container. This re-architects every component's CSS, so it is a recommendation, not part of this extraction.

## 5. Evidence confidence

- **Multi-instance (high confidence):** pair (2), program (3), reward (4), tracker (4), chips (4), grids, stretched-link, text-link, banner-icon.
- **Single-instance (documented from one page — variants inferred):** hero, insight, challenge, greeting. Need more source pages before generalizing variants.
