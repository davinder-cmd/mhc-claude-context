# Button — Three-Layer Example

This is the template for documenting components across Figma, Notion, and local MD. Replicate this pattern for all Atoms and Components.

---

## Layer 1: Figma

**Location:** Design System Master → Atoms → Button

### What Goes on the Button Page

```
┌─────────────────────────────────────────────────────────────────┐
│  BUTTON PAGE                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  COMPONENT SET (Published to library)                    │   │
│  │                                                          │   │
│  │  Properties:                                             │   │
│  │  • Variant: Primary / Secondary / Outlined / Danger      │   │
│  │  • Size: Small / Medium / Large                          │   │
│  │  • State: Default / Hover / Focus / Active / Disabled    │   │
│  │  • Loading: True / False                                 │   │
│  │  • Icon: None / Leading / Trailing                       │   │
│  │                                                          │   │
│  │  Total combinations: 4 × 3 × 5 × 2 × 3 = 360             │   │
│  │  (Figma handles this via component properties)           │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  REFERENCE FRAME (Not published)                         │   │
│  │                                                          │   │
│  │  • Variant overview: All 4 variants side by side         │   │
│  │  • Size comparison: Small / Medium / Large stacked       │   │
│  │  • State progression: Default → Hover → Focus → etc.     │   │
│  │  • Anatomy labels: Label, Container, Icon, Loader        │   │
│  │  • Spacing callouts: Padding, icon gap (use rulers)      │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  EXAMPLES (Not published)                                │   │
│  │                                                          │   │
│  │  • Button in a card (with Feature Card)                  │   │
│  │  • Button in a modal (Primary + Outlined pair)           │   │
│  │  • Button in a form (submit position)                    │   │
│  │  • Button Group example                                  │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Figma Checklist

**Component Set (required):**
- [ ] All 4 variants: Primary, Secondary, Outlined, Danger
- [ ] All 3 sizes: Small (32dp), Medium (36dp), Large (40dp)
- [ ] All states: Default, Hover, Focus, Active, Disabled, Loading
- [ ] Icon options: None, Leading, Trailing
- [ ] Tokens applied (no hardcoded colors, spacing, or typography)
- [ ] Auto-layout configured (padding, gap)
- [ ] Component description filled in

**Reference Frame (recommended):**
- [ ] Variant overview showing all 4 side by side
- [ ] Size comparison
- [ ] State progression
- [ ] Anatomy with labels
- [ ] Spacing callouts

**Examples (recommended):**
- [ ] At least 2 usage contexts (card, modal, form, etc.)

### What NOT to Put in Figma

- Written rules ("use Primary for main action")
- Behavioral documentation ("focus moves to...")
- Accessibility requirements (text form)
- Common mistakes
- Content guidelines

These go in Notion.

---

## Layer 2: Notion

**Location:** Design System → Atoms → Button

Copy this structure for the Notion page:

---

### Button

**Figma:** [embedded frame or link to Button page]  
**Status:** Ready  
**Last updated:** 2026-04-09

---

#### Default Choice

Use **Secondary** for most buttons. Primary is reserved for the single most important action on a screen — and many screens don't need one.

| If you need... | Use |
|----------------|-----|
| The main action on the page | Primary |
| Any other action | Secondary |
| A low-emphasis paired action | Outlined |
| A destructive action | Danger |

---

#### Variants

| Variant | When to Use | Visual Weight |
|---------|-------------|---------------|
| **Primary** | Single most important action on screen. One per screen max. Not every screen needs one. | Highest |
| **Secondary** | All other actions. The default choice. | Medium |
| **Outlined** | Low-emphasis actions, often paired with Primary. Never standalone. | Low |
| **Danger** | Destructive actions only (delete, remove, cancel subscription). Always requires confirmation. | High (warning) |

---

#### Sizes

| Size | Height | When to Use |
|------|--------|-------------|
| **Medium** | 36dp | **Default.** Use unless you have a specific reason not to. |
| Large | 40dp | Modals, full-page forms, prominent standalone CTAs |
| Small | 32dp | Tables, dense UI, inline with text |

---

#### Behavior

| Interaction | What Happens |
|-------------|--------------|
| Tap / Click | Action triggers immediately (no delay) |
| Keyboard: Enter or Space | Activates button |
| Focus (Tab) | Visible focus ring appears — never suppress |
| Loading state | Button disabled, spinner replaces label or appears alongside |
| Disabled | Non-interactive, reduced opacity, cursor: not-allowed |

**Focus management:**
- If button opens a modal → focus moves to modal
- If button closes a modal → focus returns to trigger
- If button submits a form → focus moves to success message or first error

---

#### Content Rules

| Rule | Example |
|------|---------|
| Start with a verb | "Save", "Continue", "Sign Up" — not "Okay" or "Submit" |
| Sentence case | "Sign up" — not "Sign Up" or "SIGN UP" |
| 2-3 words preferred | "Save changes" — not "Click here to save your changes" |
| Be specific | "Delete account" — not "Delete" (what are we deleting?) |

**Truncation:** If text overflows, wrap to second line. Never truncate button labels.

---

#### Accessibility

These are requirements, not suggestions:

| Requirement | Spec |
|-------------|------|
| Touch target | 44×44dp minimum (even if button appears smaller) |
| Focus state | Visible ring, 2dp offset, never suppressed |
| Color contrast | 4.5:1 minimum for text on button background |
| Screen reader | Label describes action ("Sign up for newsletter" not "Click here") |
| Disabled state | `aria-disabled="true"`, announced as "dimmed" |

---

#### Don't

| Mistake | Why It's Wrong | Do This Instead |
|---------|----------------|-----------------|
| Multiple Primary buttons | Dilutes hierarchy — user doesn't know what's important | One Primary max; use Secondary for others |
| Danger without confirmation | Accidental destructive actions | Always show confirmation dialog first |
| Icon-only without label | Accessibility fail; meaning unclear | Add visible label or aria-label |
| Disabled as default state | Frustrates users; hides what's wrong | Use validation messages instead |
| "Submit" or "Click here" | Doesn't describe the action | Use specific verb: "Save", "Sign up", "Continue" |

---

#### When NOT to Use Button

| Use Case | Use Instead |
|----------|-------------|
| Navigation between pages | Link |
| Toggle between states | Toggle, Chip Group (Single Choice) |
| Multiple selection | Chip Group (Multiple Choice), Checkboxes |
| Contextual quick actions | Chip Group (Action) |

---

#### Related Components

- **Button Group** — For laying out multiple buttons with proper spacing
- **Chip Group (Action)** — For contextual, dynamic actions
- **Link** — For navigation

---

## Layer 3: Local MD

**Location:** `design/atoms/button.md`

---

```markdown
# Button

**Notion:** [link to Notion page]
**Figma:** [link to Figma page]
**Status:** Ready

---

## Quick Reference

- **Variants:** Primary, Secondary, Outlined, Danger
- **Default:** Secondary
- **Sizes:** Small (32dp), Medium (36dp, default), Large (40dp)
- **One Primary per screen max**
- **Danger requires confirmation dialog**

---

## Escalate If

- New variant requested
- Icon-only button needed without visible label
- Size outside Small/Medium/Large needed
- Engineering requests behavior not documented

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-09 | Reduced from 8 variants to 4 | Principle #1: Fewer Options. Carbon has 4, Material has 5. 8 was overconfigured. |
| 2026-04-09 | Renamed Standard → Secondary, Stroked → Outlined | Principle #2: Industry Naming. Engineers can Google these terms. |
| 2026-04-09 | Made Medium the default size | Principle #4: One Default. 90% of usage is Medium. |
| 2026-04-09 | Removed Tinted variant | Merged into Outlined. Behavioral difference was minimal. |
| 2026-04-09 | Removed Reverse Contrast variant | Handled via theme, not a separate variant. |
| 2026-04-09 | Removed Jumbo size | Edge case. Large covers prominent CTAs. |
```

---

## Summary: What Goes Where

| Layer | Contains | Who Uses It |
|-------|----------|-------------|
| **Figma** | Visual: variants, sizes, states, tokens, examples | Engineers (inspect), Designers (create) |
| **Notion** | Behavioral: when to use, rules, a11y, content, mistakes | Product, Eng leads, QA, Stakeholders |
| **Local MD** | Routing: links, quick ref, escalation, decision log | Claude, You |

---

## Replication Checklist

When documenting a new Atom or Component:

1. **Figma**
   - [ ] Create component set with all variants/sizes/states
   - [ ] Apply tokens (no hardcoded values)
   - [ ] Add reference frame with anatomy
   - [ ] Add 2+ usage examples

2. **Notion**
   - [ ] Default Choice section at top
   - [ ] Variants table with "when to use"
   - [ ] Sizes table with default marked
   - [ ] Behavior section
   - [ ] Content rules
   - [ ] Accessibility requirements (baked in, not separate)
   - [ ] "Don't" section
   - [ ] "When NOT to Use" section
   - [ ] Embedded Figma frame

3. **Local MD**
   - [ ] Links to Notion + Figma
   - [ ] Quick reference (5-6 bullets max)
   - [ ] Escalation triggers
   - [ ] Decision log with rationale
