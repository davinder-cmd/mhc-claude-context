# Card

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/108101884
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=53855%3A111338
**Status:** ✅ Documented

---

## Purpose

Groups and presents variable content in a scannable container. Used when users browse or explore a collection of related items rather than scanning a structured list.

---

## When to Use

- Displaying a collection of related, browsable content (programs, challenges, articles)
- When content varies in type and users will interact with individual items
- When you don't need to emphasize order (use a table for ordered/structured data)

## When NOT to Use

- Ordered or structured data — use a table
- Simple lists — use a list component

---

## Anatomy

| Section | Required | Notes |
|---------|----------|-------|
| Card Container | ✅ | Holds all elements; vertical size = content height |
| Detail | ✅ | Supporting text using body1 or body2 style |
| Preview | Optional | Top of card; avatar, logo, icon, image |
| Title | Optional | Uses heading style; keep short to avoid truncation |
| Subhead | Optional | Byline or secondary descriptor; h5 or h6 style |
| Content Area | Optional | Holds text, metadata, body content |
| Footer | Optional | Holds buttons and indicators (badges, icons) |

---

## Style Options

| Option | Use |
|--------|-----|
| Standard | Default; use when footer has buttons or additional info |
| Quiet | Simple cards with minimal metadata only |
| Vertical | Components in a column (default) |
| Horizontal | Components in a row |

---

## Layout Grids

| Grid | Description |
|------|-------------|
| Tile grid (default) | Same height and width across all cards |
| Vertical masonry | Consistent width, variable height |
| Horizontal masonry | Variable width; quiet cards only |

**Card gutters:** 3/4 of the page gutter width (e.g., if page gutter = 32dp, card gutter = 24dp)

---

## Behavior

- **Preview aspect ratio:** Between 4:1 (shortest) and 3:4 (tallest). Default: 2:1 or 16:9
- **Text overflow:** In fixed-height grids, title truncates. In variable-height grids, title wraps.
- **Mobile:** Cards stretch full width. On larger screens, use multiple columns.
- Cards can be interactive — tapping/clicking can navigate or trigger actions

---

## Accessibility

- Use semantic heading markup matching visual hierarchy
- Use list markup when cards are grouped as a collection
- Decorative icons do not need text alternatives
- Button text and background must meet 4.5:1 contrast minimum

## Common Mistakes

- Using a card when a simple list would be clearer and faster to scan
- Inconsistent card heights in a tile grid
- Omitting the required Detail element

## Escalate if

A card layout or behavior is needed that doesn't fit Standard or Quiet styles.
