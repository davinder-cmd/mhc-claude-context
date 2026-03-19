# MH Design System — Index

**Figma Master:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master
**Confluence (MDS):** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/overview
**Confluence (DF):** https://mobilehealthc.atlassian.net/wiki/spaces/DF

**Status key:** ✅ Documented · 🔶 Partial · 🚧 Stub

---

## Foundation

| Component | Status | File |
|-----------|--------|------|
| Application Frame | ✅ | [foundation/application-frame.md](foundation/application-frame.md) |
| Colors | 🔶 | [foundation/colors.md](foundation/colors.md) |
| Spacing | ✅ | [foundation/spacing.md](foundation/spacing.md) |
| Typography | ✅ | [foundation/typography.md](foundation/typography.md) |
| Aspect Ratios | 🚧 | https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045135 |
| Layout | 🚧 | https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045185 |
| Object Styles | 🚧 | https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045199 |
| Responsive Grid | 🚧 | https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045221 |

---

## Elements
*Source: DF space (Product Design). Individual, primitive UI building blocks.*

| Element | Status | File |
|---------|--------|------|
| Avatar | ✅ | [elements/avatar.md](elements/avatar.md) |
| Badge | ✅ | [elements/badge.md](elements/badge.md) |
| Card | ✅ | [elements/card.md](elements/card.md) |
| Checkbox | ✅ | [elements/checkbox.md](elements/checkbox.md) |
| Chip | ✅ | [elements/chip.md](elements/chip.md) |
| Dropdown | 🔶 | [elements/dropdown.md](elements/dropdown.md) |
| Loading Indicator | 🚧 | [elements/loading-indicator.md](elements/loading-indicator.md) |
| Progress Indicator | 🚧 | [elements/progress-indicator.md](elements/progress-indicator.md) |
| Radio Button | 🚧 | [elements/radio-button.md](elements/radio-button.md) |
| Range Slider | 🚧 | [elements/range-slider.md](elements/range-slider.md) |
| Stepper | 🚧 | [elements/stepper.md](elements/stepper.md) |
| Tag | ✅ | [elements/tag.md](elements/tag.md) |
| Text Area | ✅ | [elements/text-area.md](elements/text-area.md) |
| Text Field | 🚧 | [elements/text-field.md](elements/text-field.md) |

---

## Components

| Component | Status | File |
|-----------|--------|------|
| Banner | 🚧 | [components/banner.md](components/banner.md) |
| Bottom Navigation | ✅ | [components/bottom-navigation.md](components/bottom-navigation.md) |
| Button | ✅ | [components/button.md](components/button.md) |
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

## Quick Decision Guide

| If you need… | Use |
|--------------|-----|
| Single dominant CTA | Button (Primary) |
| Two or more related actions | Button Group |
| Single selection from a compact list | Chip Group (Single Choice) |
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
- A 🚧 stub component needs to be used in a spec before its documentation is complete
- A new color, type size, or spacing value is needed outside existing tokens
- A navigation structure change is proposed
- A new design system component is requested by engineering or product
