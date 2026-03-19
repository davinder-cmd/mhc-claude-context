# Colors

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045170
**Status:** 🔶 Partial — token structure documented, full palette in Figma

---

## Purpose

Token-driven color system that supports multiple themes and partner customization while maintaining accessibility standards.

---

## Token Categories

| Category | Tokens | Notes |
|----------|--------|-------|
| Background | `$background` | Page and surface backgrounds |
| Text | `$text-primary` `$text-secondary` `$text-placeholder` `$text-error` `$text-disabled` | All text uses a token — never hardcode |
| Icon | `$icon-primary` `$icon-secondary` `$icon-on-color` `$icon-disabled` | All icons |
| Focus | `$focus` | Focus rings and underlines — accessibility critical, never remove |
| Link | `$link-primary` `$link-secondary` `$link-visited` | All link states |
| Semantic | Informative, Negative, Notice, Positive | Always pair with text or icon — never use color alone to communicate meaning |

---

## Themes

System supports 4 themes (2 light, 2 dark). All components must work across all themes.

---

## Rules

- Always use semantic tokens — never hardcode hex values
- Color must never be the sole communicator of meaning (accessibility)
- Minimum contrast: 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- All interactive states (hover, focus, active, disabled) must have visible differentiation beyond color alone

## Escalate if

A color is needed that doesn't map to an existing token. Do not create custom colors.
