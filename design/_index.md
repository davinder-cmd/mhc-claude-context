# MH Design System — Index

**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Design-System-Documentation-33e69fed903181b7900cc29d5261324c

---

## Architecture

| Layer | Source of Truth | Purpose |
|-------|-----------------|---------|
| Figma | Visual | What it looks like (inspect specs) |
| Notion | Behavioral | When to use, rules, guidelines |
| Local MD | Routing | Claude context + quick reference |

---

## Status Key

- ✅ Ready — v2 complete (Figma + Notion aligned)
- 🔶 Partial — Figma exists, Notion incomplete
- 🚧 Stub — Page created, not populated
- ⏸️ Later — Not in v2 scope

---

## v2 Priority (Focus Here)

| # | Item | Figma Page | Status |
|---|------|-----------|--------|
| 1 | Foundation | `01_Foundation` | 🔶 Simplifying |
| 2 | Button | `A_Button` | ✅ Ready |
| 3 | Chip | `A_Chip` | ✅ Ready |
| 4 | Text Field | `A_Text Field` | ✅ Ready |
| 5 | Checkbox | `A_Checkbox` | ✅ Ready |
| 6 | Row | `C_Row` | ✅ Ready |

**Ship these 6, then assess.**

---

## Figma Page Structure

```
00_Cover
01_Foundation
─────────────
A_Avatar
A_Badge
A_Button         ← v2
A_Card
A_Checkbox       ← v2
A_Chip           ← v2
A_Dropdown
A_Loading Indicator
A_Progress Indicator
A_Radio Button
A_Range Slider
A_Stepper
A_Tag
A_Text Area
A_Text Field     ← v2
─────────────
C_Banner
C_Bottom Navigation
C_Button Group
C_Chip Group
C_Feature Card
C_Filter Group
C_Header Bar
C_Navigation Bar
C_Overlay Header
C_Pagination
C_Popover
C_Preview Card
C_Row            ← v2
─────────────
P_Empty State
P_Error Handling
P_Form Layout
P_Loading State
─────────────
T_Detail Page
T_List Page
T_Settings Page
```

**Prefixes:** `A_` Atom | `C_` Component | `P_` Pattern | `T_` Template

---

## Foundation

**Figma page:** `01_Foundation`

| Token/System | Status | Notion Doc |
|--------------|--------|------------|
| Colors | 🔶 | Foundation/Colors |
| Typography | ✅ | Foundation/Typography |
| Spacing | 🔶 | Foundation/Spacing |
| Grid & Layout | 🚧 | Foundation/Grid & Layout |
| Elevation | 🚧 | Foundation/Elevation |
| Icons | 🔶 | Foundation/Icons |

**Moved to Notion (guidelines, not tokens):**
- Image Cropping → Guidelines/Image Cropping
- Image Sizing → Guidelines/Image Sizing
- Object Styles → Guidelines/Object Styles

**Moved to Atoms:**
- Avatars → `A_Avatar`

---

## Atoms

| Atom | Figma Page | Status | File |
|------|-----------|--------|------|
| Avatar | `A_Avatar` | 🚧 | [atoms/avatar.md](atoms/avatar.md) |
| Badge | `A_Badge` | ✅ | [atoms/badge.md](atoms/badge.md) |
| Button | `A_Button` | ✅ | [atoms/button.md](atoms/button.md) |
| Card | `A_Card` | ✅ | [atoms/card.md](atoms/card.md) |
| Checkbox | `A_Checkbox` | ✅ | [atoms/checkbox.md](atoms/checkbox.md) |
| Chip | `A_Chip` | ✅ | [atoms/chip.md](atoms/chip.md) |
| Dropdown | `A_Dropdown` | 🔶 | [atoms/dropdown.md](atoms/dropdown.md) |
| Loading Indicator | `A_Loading Indicator` | 🚧 | [atoms/loading-indicator.md](atoms/loading-indicator.md) |
| Progress Indicator | `A_Progress Indicator` | 🚧 | [atoms/progress-indicator.md](atoms/progress-indicator.md) |
| Radio Button | `A_Radio Button` | 🚧 | [atoms/radio-button.md](atoms/radio-button.md) |
| Range Slider | `A_Range Slider` | 🚧 | [atoms/range-slider.md](atoms/range-slider.md) |
| Stepper | `A_Stepper` | 🚧 | [atoms/stepper.md](atoms/stepper.md) |
| Tag | `A_Tag` | ✅ | [atoms/tag.md](atoms/tag.md) |
| Text Area | `A_Text Area` | ✅ | [atoms/text-area.md](atoms/text-area.md) |
| Text Field | `A_Text Field` | 🚧 | [atoms/text-field.md](atoms/text-field.md) |

---

## Components

| Component | Figma Page | Status | File |
|-----------|-----------|--------|------|
| Banner | `C_Banner` | 🚧 | [components/banner.md](components/banner.md) |
| Bottom Navigation | `C_Bottom Navigation` | ✅ | [components/bottom-navigation.md](components/bottom-navigation.md) |
| Button Group | `C_Button Group` | ✅ | [components/button-group.md](components/button-group.md) |
| Chip Group | `C_Chip Group` | ✅ | [components/chip-group.md](components/chip-group.md) |
| Feature Card | `C_Feature Card` | 🚧 | [components/feature-card.md](components/feature-card.md) |
| Filter Group | `C_Filter Group` | 🚧 | [components/filter-group.md](components/filter-group.md) |
| Header Bar | `C_Header Bar` | 🚧 | [components/header-bar.md](components/header-bar.md) |
| Navigation Bar | `C_Navigation Bar` | 🚧 | [components/navigation-bar.md](components/navigation-bar.md) |
| Overlay Header | `C_Overlay Header` | 🚧 | [components/overlay-header.md](components/overlay-header.md) |
| Pagination | `C_Pagination` | 🚧 | [components/pagination.md](components/pagination.md) |
| Popover | `C_Popover` | 🔶 | [components/popover.md](components/popover.md) |
| Preview Card | `C_Preview Card` | 🚧 | [components/preview-card.md](components/preview-card.md) |
| Row | `C_Row` | ✅ | [components/row.md](components/row.md) |

---

## Patterns

| Pattern | Figma Page | Status | File |
|---------|-----------|--------|------|
| **Navigation IA** | — | 🔶 Draft | [patterns/navigation-responsive.md](patterns/navigation-responsive.md) |
| Empty State | `P_Empty State` | ⏸️ Later | — |
| Error Handling | `P_Error Handling` | ⏸️ Later | — |
| Form Layout | `P_Form Layout` | ⏸️ Later | — |
| Loading State | `P_Loading State` | ⏸️ Later | — |

---

## Templates

| Template | Figma Page | Status |
|----------|-----------|--------|
| Detail Page | `T_Detail Page` | ⏸️ Later |
| List Page | `T_List Page` | ⏸️ Later |
| Settings Page | `T_Settings Page` | ⏸️ Later |

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

Escalate to Davinder if:
- A component is needed that doesn't exist in this system
- A new color, type size, or spacing value is needed outside existing tokens
- A navigation structure change is proposed
- Engineering requests a new variant or pattern
- Figma and Notion are out of sync

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-04-15 | Added Navigation IA pattern for app frame redesign |
| 2026-04-10 | Restructured for v2: one page per component, prefixed naming, v2 priorities defined |
| 2026-04-09 | Initial version |
