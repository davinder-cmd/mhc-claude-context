# Pair block — no-employer state · grouping options

**Scenario:** `block-2-pair.html` when `hasEmployerPair = false`. Both cards are interest-based, so the layout shifts to **one header** ("Based on your interests") + **one footer** ("See more like this" / "Edit interests"). The design problem: two cards under one header/footer read as disconnected. These options bind them.

**Constraint honored:** each card stays contained; the group transitions cleanly from mobile (stacked) to web (side-by-side). Built with CSS container queries so each option shows its real desktop + mobile state on one page.

## Versions

- **v1** — `pair-no-employer-options-v1.html` — first pass, 6 options (A–F).

## The 6 options

| Opt | Treatment | Containment mechanism | Visual weight |
|-----|-----------|------------------------|---------------|
| A | One contained card, divider between rows | Single card wraps header + items + footer | Heaviest / most unified |
| B | Warm-beige tray + white sub-cards | Shared beige background binds white cards | Medium-heavy |
| C | White card + tinted inset cards | White outer border contains beige insets | Medium |
| D | Full-width bracket rules | Header + footer rules bracket bordered cards on page bg | Lightest |
| E | Segmented joined cards (shared edge) | Two cards butt into one rounded unit, header/footer outside | Medium (strong "belong together" signal) |
| F | White card + count chip + faint-tint insets | Outer card + "2 picks" chip explicitly frames the set | Medium |

## Open question for the next pass

- Footer wording: "See more like this" vs "See more for you" vs "More matched to you". Currently "See more like this" + "Edit interests".
- Whether the chip in F should show a count ("2 picks") or a label ("For you").
