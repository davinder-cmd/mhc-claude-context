# MH Design System — Index

**Figma Master:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master
**Notion:** https://www.notion.so/Design-System-v2-33c69fed903180d4a574da48d39945a2

**Architecture:**
- Figma = visual source of truth (what it looks like)
- Notion = behavioral source of truth (when to use, rules)
- Local MD = routing layer + Claude context

**Status key:** ✅ Ready · 🔶 Partial · 🚧 Stub · 📦 Legacy (needs v2 update)

---

## Foundation

| Token/System | Status | File |
|--------------|--------|------|
| Application Frame | ✅ | [foundation/application-frame.md](foundation/application-frame.md) |
| Colors | 🔶 | [foundation/colors.md](foundation/colors.md) |
| Spacing | 📦 | [foundation/spacing.md](foundation/spacing.md) |
| Typography | ✅ | [foundation/typography.md](foundation/typography.md) |
| Aspect Ratios | ✅ | [foundation/aspect-ratios.md](foundation/aspect-ratios.md) |
| Layout | 🚧 | [foundation/layout.md](foundation/layout.md) |
| Object Styles | ✅ | [foundation/object-styles.md](foundation/object-styles.md) |
| Responsive Grid | 🔶 | [foundation/responsive-grid.md](foundation/responsive-grid.md) |

---

## Atoms

*Primitive UI building blocks. Single-purpose, no internal composition.*

| Atom | Status | File |
|------|--------|------|
| Avatar | 📦 | [atoms/avatar.md](atoms/avatar.md) |
| Badge | ✅ | [atoms/badge.md](atoms/badge.md) |
| Button | ✅ | [atoms/button.md](atoms/button.md) |
| Card | ✅ | [atoms/card.md](atoms/card.md) |
| Checkbox | ✅ | [atoms/checkbox.md](atoms/checkbox.md) |
| Chip | ✅ | [atoms/chip.md](atoms/chip.md) |
| Dropdown | 🔶 | [atoms/dropdown.md](atoms/dropdown.md) |
| Loading Indicator | 🚧 | [atoms/loading-indicator.md](atoms/loading-indicator.md) |
| Progress Indicator | 🚧 | [atoms/progress-indicator.md](atoms/progress-indicator.md) |
| Radio Button | 🚧 | [atoms/radio-button.md](atoms/radio-button.md) |
| Range Slider | 🚧 | [atoms/range-slider.md](atoms/range-slider.md) |
| Stepper | 🚧 | [atoms/stepper.md](atoms/stepper.md) |
| Tag | ✅ | [atoms/tag.md](atoms/tag.md) |
| Text Area | ✅ | [atoms/text-area.md](atoms/text-area.md) |
| Text Field | 🚧 | [atoms/text-field.md](atoms/text-field.md) |

---

## Components

*Assembled from Atoms. Reusable across features.*

| Component | Status | File |
|-----------|--------|------|
| Banner | 🚧 | [components/banner.md](components/banner.md) |
| Bottom Navigation | ✅ | [components/bottom-navigation.md](components/bottom-navigation.md) |
| Button Group | ✅ | [components/button-group.md](components/button-group.md) |
| Chip Group | ✅ | [components/chip-group.md](components/chip-group.md) |
| Feature Card | 🚧 | [components/feature-card.md](components/feature-card.md) |
| Filter Group | 🚧 | [components/filter-group.md](components/filter-group.md) |
| Header Bar | 🚧 | [components/header-bar.md](components/header-bar.md) |
| Navigation Bar | 🚧 | [components/navigation-bar.md](components/navigation-bar.md) |
| Overlay Header | 🚧 | [components/overlay-header.md](components/overlay-header.md) |
| Pagination | 🚧 | [components/pagination.md](components/pagination.md) |
| Popover | 🔶 | [components/popover.md](components/popover.md) |
| Preview Card | 🚧 | [components/preview-card.md](components/preview-card.md) |

---

## Patterns

*Recurring solutions using existing Atoms and Components. Not yet documented.*

| Pattern | Status | File |
|---------|--------|------|
| Form Layout | 🚧 | — |
| Empty State | 🚧 | — |
| Error Handling | 🚧 | — |
| Loading State | 🚧 | — |

---

## Templates

*Page-level layouts. Not yet documented.*

| Template | Status | File |
|----------|--------|------|
| Detail Page | 🚧 | — |
| List Page | 🚧 | — |
| Settings Page | 🚧 | — |

---

## Quick Decision Guide

| If you need… | Use |
|--------------|-----|
| Single dominant CTA | Button (Primary) |
| Any other action | Button (Secondary) |
| Low-emphasis paired action | Button (Outlined) |
| Destructive action | Button (Danger) + confirmation |
| Two or more related actions | Button Group |
| Single selection from compact list | Chip Group (Single Choice) |
| Multiple selections | Chip Group (Multiple Choice) |
| Contextual quick actions | Chip Group (Action) |
| Top-level mobile navigation | Bottom Navigation |
| Temporary contextual menu | Popover |
| Inline alert or status message | Banner |
| Content preview in a list | Preview Card |
| Feature or program tile | Feature Card |

---

## Escalation Rules

Always escalate to Davinder if:
- A component is needed that doesn't exist in this system
- A 🚧 stub needs to be used before documentation is complete
- A new color, type size, or spacing value is needed outside existing tokens
- A navigation structure change is proposed
- Engineering requests a new variant or pattern

---

## v2 Migration Status

Migrating from Confluence to Notion. Local MD files are routing layer only.

| Task | Status |
|------|--------|
| Button — v2 format | ✅ Done |
| Avatar — reduce variants | 🚧 Pending |
| Spacing — reduce tokens | 🚧 Pending |
| Notion structure created | 🚧 Pending |
