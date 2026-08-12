# LifeForce — responsive HTML (Aug 2026 rebuild)

Responsive LifeForce screens that combine **two sources**:

- **Output treatment** (responsive shell, type scale with the ≥1200 "Medium+" bump, SF Pro,
  Material Symbols, auto-fit grids, centered column) — from the **May-26 home output**
  (`outputs/may26-v81-mhc-blocks`). The prior reference that first did this synthesis is
  `outputs/aug04-lifeforce-html` + `outputs/aug05-lifeforce-responsive`.
- **Color treatment** — the **current LifeForce semantic system** (this session's Figma work):
  ocean / turquoise / mustard / coral / green / neutral, lozenge eyebrows, green progress bars,
  white cards + a role-colored 1.5px stroke. (Supersedes the aug04 palette of `#0f497f` navy /
  aqua / gold / lava.)

## Files
- `lifeforce.css` — the one shared stylesheet. Color tokens in `:root`; components below.
- `01-getting-set-up.html` — Phase 1 enrollment status (kicker+title · green progress · ocean
  "DO THIS NEXT" focal · Next steps · Completed · support · About). **The pattern proof.**

## Semantic color → CSS token map
| Role | Stroke | Eyebrow (lozenge) | Tint |
|---|---|---|---|
| Primary / action | `--ocean #195188` | `--ocean-ink #103459` | `--ocean-100 #EAF2FA` |
| Active / on-track | `--turq #1A85AB` | `--turq-ink #0D4559` | `--turq-100 #E9F6FA` |
| Notice / due-soon | `--mustard #D17100` | `--mustard-ink #87440A` | `--mustard-50 #FFF7ED` |
| Alert / at-risk | `--coral #EA4444` | `--coral-ink #C90000` | `--coral-50 #FDECEC` |
| Progress / done | `--green #52A353` | `--green-ink #3D7A3E` | `--green-100 #EFF8EF` |
| Neutral / pending | `--border #D6D6D5` | `--label #5F5F5F` | `#F1F1F1` |

## Responsive behavior
- Centered content column (`.wrap`, max 600 → 680 at ≥1200); padding bumps 16→24 at ≥600.
- Type scale bumps to Medium+ at ≥1200 (sizes grow, line-heights hold).
- Bottom-nav (host chrome) hides at ≥900.
- `.grid-2` auto-fits (for the My Progress biometrics / resources screens, next to build).

## To render locally
`python3 -m http.server 8749` in this folder → `http://127.0.0.1:8749/01-getting-set-up.html`
(file:// is blocked by the headless browser; must be served over HTTP.)

## Screens (all built — 18 + gallery)
Open **`index.html`** for the gallery that links them all.

- **Phase 1 · Getting set up:** `01-getting-set-up` · `02-complete-lab-work` · `02b-lab-submitted`
  (HA promoted to focal, lab → submitted group) · `03-health-assessment`
- **Phase 2 · Your first visit:** `04-scheduling` · `05-scheduled`
- **Phase 3 · You're active:** `active` (calm, Phase-led) · `08-deadline-labs` · `09-deadline-ha`
  (mustard notice) · `10-deadline-rebook` · `11-deadline-overdue` (coral alert) ·
  `dependent-sent` · `dependent-reminder` · `dependent-done`
- **My Progress:** `progress-populated` (nurse note → results → programs → handouts) ·
  `progress-full-results` (12-metric panel) · `progress-awaiting` (empty states)
- **Records:** `records` (chronological log)

All share `lifeforce.css`. Enrollment/scheduling screens have no tabs (My Progress locked
pre-visit, per D46); active-and-later screens carry the Status · My Progress segmented control.
Verified rendering mobile + desktop; semantic colors correct on every screen; no console errors.
