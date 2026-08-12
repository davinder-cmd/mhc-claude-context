# DCP Suite — build handoff (start a new chat with this)

**Goal:** build five DCP surfaces that inherit the v81 home page's visual
treatment and responsive logic, so each feels like it was navigated to *from
home* — same chrome, same system, same responsive reasoning.

**This kit gives you three things:**
- `mhc-base.css` — the portable system layer (tokens, type scale, shell,
  buttons, nav, utilities). Link it; build page components on top.
- `RESPONSIVE-RATIONALE.md` — the *why* behind every responsive decision.
- this file — the page briefs + the seed prompt.

Source of truth for the visual system: `../may23-figma-recreation/home-figma-recreation-v81.html`
(locked master) and its `INDEX.md` build log.

---

## The five pages + their entry point from home

| # | Page | Reached from home by… | Existing work to build on |
|---|---|---|---|
| 1 | **DCP catalog** (browse all) | "See N more" / an "All programs" affordance | `outputs/jul07-ebb-browse-catalog/`, `outputs/jul08-ebb-browse-categories/` |
| 2 | **DCP list** | catalog → a category, or a "your care" entry | `outputs/jul07-ebb-dcp-list/`, `outputs/jul07-ebb-topic-states/` |
| 3 | **DCP program detail** | hero "Start the program" / a program card | `outputs/jul02-ebb-topic-page/`, `outputs/jul08-ebb-path-component/` |
| 4 | **DCP / rewards opt-in** | detail → "Start" / an opt-in CTA | `outputs/jul09-ebb-optin-overview/`, `outputs/jul05-ebb-enrollment-flow/`, `outputs/jul05-ebb-rewards-page/` |
| 5 | **Success modal** | opt-in → confirm | `outputs/jul01-ebb-completion-screen/` |

> ⚠️ Much of this already exists as **EBB** work. Do NOT restart — reconcile the
> existing EBB structure/content with the v81 visual system. The EBB pages carry
> the IA/content thinking; this kit carries the look + responsive logic.
>
> ⚠️ **RE-SKIN, don't preserve.** The existing EBB HTML uses a *different* design
> system — teal + amber on warm ground with a `system-ui` font stack
> (`--teal:#0E4A56; --amber:#8A5A12; --ground:#F0ECE3`). The DCP suite must adopt
> the **v81 system instead**: navy brand + SF Pro Display/Text
> (`--brand:#1B355C`, `--link:#2E60A4`, `--bg:#FAF7F0`, the 25-class type scale).
> Take **content, IA, flow, and screen logic** from the EBB pages; take **palette,
> type, shape, spacing, shell, and responsive behavior** from this kit. Do not
> carry the teal/amber tokens or `system-ui` stack forward.

---

## Context to load in the new chat (per CLAUDE.md routing)

- **This kit** — all three files.
- **Feature briefs:** `projects/feature-dcp/_brief.md` + `_decisions.md`;
  `projects/feature-ebb/_brief.md` + `_decisions.md` + `HANDOFF.md`.
  (feature-dcp auto-loads `reference/dtx-dcp-experts.md` as a secondary layer.)
- **IA:** `design/IA/_index.md` (surfacing / taxonomy / where control lives).
- **Design system:** `design/_index.md`.
- **UX filters (state which you loaded):** `reference/ux-usability-experts.md`,
  `reference/ux-laws-quick-reference.md`, `reference/visual-design-experts.md`.
- **EBB rationale already written:** `outputs/jul10-ebb-page-rationale/`,
  `outputs/jul10-ebb-approach/`, `outputs/jul05-ebb-master-flow/`.
- **Figma source (EBB working version):**
  https://www.figma.com/design/RBiNMP2E8NaiLoJWmmXB2H/EBB--working-version-?node-id=8474-17421&t=Z1D8oHkqAfSNlRUy-11
  — layout / content / IA reference only; re-skin to the v81 system (don't copy
  its colors or type).

---

## Non-negotiables (from CLAUDE.md + memory)

- Nielsen heuristics + UX laws filter on every decision; state files loaded.
- Save each iteration as `*-v{N}-{slug}.html`; INDEX.md log w/ rationale +
  rejected alternatives; three breakpoint views (1440 / ~1040 / 375).
- 60/30/10 color-weighting per iteration. Warm tones = backgrounds only.
- Readability over density on browse/list surfaces.
- New output folder per `{monthabbr}{day}-{slug}/`.

---

## Seed prompt for the new chat (paste this)

> I'm building a DCP suite that must inherit the v81 home page's visual
> treatment and responsive logic. Read the kit in
> `outputs/jul13-dcp-suite-kit/` (mhc-base.css, RESPONSIVE-RATIONALE.md,
> HANDOFF.md) plus `projects/feature-dcp/` and `projects/feature-ebb/`, and
> reconcile with the existing EBB outputs listed in the handoff — don't restart
> them. Also load the UX + visual-design reference files and state what you
> loaded.
>
> IMPORTANT — re-skin, don't preserve: the existing EBB HTML uses a teal/amber +
> `system-ui` design system. Take content, IA, flow, and screen logic from those
> pages, but the DCP suite must be re-skinned to the **v81 system** — navy brand
> + SF Pro (`--brand:#1B355C`, `--link:#2E60A4`, `--bg:#FAF7F0`) and the mhc-base
> type scale, shell, and responsive rules. Do not carry the teal/amber tokens or
> `system-ui` stack forward.
>
> We're building five surfaces, each reached from the home page: (1) DCP
> catalog, (2) DCP list, (3) DCP program detail, (4) DCP/rewards opt-in, (5)
> success modal. Start with **[pick one]**. Link mhc-base.css and build page
> components on top of it. Give me the three breakpoint views and a short
> rationale grounded in the heuristics before iterating.
>
> Figma source (EBB working version): https://www.figma.com/design/RBiNMP2E8NaiLoJWmmXB2H/EBB--working-version-?node-id=8474-17421&t=Z1D8oHkqAfSNlRUy-11
> Use it for layout/content/IA reference — but re-skin to the v81 system per
> above (don't copy its colors/type).

Suggested build order: **program detail → opt-in → success modal**
(the core enrollment spine, all reached in one flow from the hero), then
**catalog → list** (the browse spine). Doing the flow first surfaces the shared
components (path/progress/reward cards) the browse pages then reuse.
