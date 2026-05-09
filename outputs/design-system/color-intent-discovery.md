# Color Intent Discovery — Interview Module

## Purpose
Extract the client's aesthetic intent for color before any palette generation happens. Output is a structured brief, not hex codes. The brief feeds the palette generation phase, where accessibility, semantic roles, and token structure are applied.

## Principle
Anchor in feeling and references first. Introduce vocabulary second. Clients will parrot terms back if you lead with them — references are ground truth.

---

## Interview Script

Run these five probes in order. Do not reorder.

### 1. Reference Pull
Ask: *"Show me 3–5 products, brands, or images — anything visual — that feel like what you want this to be. They don't have to be in your industry."*

Capture: URLs or image uploads, plus a one-line note from the client on what each one captures for them.

### 2. Category Reaction
Present six exemplar tiles labeled with feeling words (not technical names):

- **Jewel** — rich, regal, premium, serious
- **Pastel** — soft, calming, approachable, gentle
- **Earth** — natural, grounded, organic, honest
- **Neutral** — minimal, editorial, restrained, timeless
- **Fluorescent** — energetic, youthful, bold, attention-grabbing
- **Shade-dominant** — high-contrast, dramatic, modernist

Ask: *"Which two feel closest to what you want? Which one is a hard no?"*

The hard-no is often more diagnostic than the yes. Capture both.

### 3. Temperature
Ask: *"When you imagine someone using this product, does it feel warm — sunlight, energy, intimacy — or cool — water, calm, focus? Or does it shift depending on what the user is doing?"*

The "shifts" answer is the most interesting for product UI — it signals semantic color use (e.g., cool for content surfaces, warm for CTAs or alerts).

### 4. Role of the Brand Color
Ask: *"Should the brand color be the loudest thing on screen and drive the eye, or should it sit in the background while content does the work?"*

This is the active vs. passive distinction. It determines whether the brand color drives primary actions or functions as chrome.

### 5. Constraint Check
Ask: *"Anything you've seen — competitors, past work, anywhere — where you thought 'absolutely not that'?"*

Avoidances are cheap to capture now and expensive to discover later.

---

## Output Schema

The interview produces a structured brief in this shape:

```yaml
color_intent_brief:
  references:
    - url_or_image: ""
      client_note: ""
  primary_category: jewel | pastel | earth | neutral | fluorescent | shade
  secondary_category: jewel | pastel | earth | neutral | fluorescent | shade | null
  rejected_categories: []
  temperature: warm | cool | mixed
  temperature_notes: ""
  brand_color_role: active | passive
  avoidances: []
  open_questions: []
```

This brief is portable and reviewable. It is the handoff to palette generation — it does not contain hex codes, contrast ratios, or token structure. Those are the next phase's job.

---

## How to Frame This to the Client

Do not teach color theory. Say:

> *"I'm going to ask you to react to some visual categories. The goal isn't for you to pick the final colors — it's for me to understand the feeling you want, so the colors I generate later actually match your intent."*

This positions you as the translator and keeps the client out of micro-decisions they're not equipped to make.

---

## Reconciliation Rule

If the client's stated category and their reference pull conflict, **the references win.** People are better at recognizing what they want than naming it. Flag the conflict in `open_questions` and verify in the next session.

Common mismatches to watch for:
- Client says "jewel" but references show fluorescent saturation
- Client says "earth" but references show desaturated jewel tones
- Client says "neutral" but references show a strong accent color doing all the work

---

## What This Module Does Not Do

- Generate hex codes or palettes
- Check accessibility or contrast
- Define semantic tokens (primary/success/warning/error)
- Address dark mode

All of the above belong to the palette generation phase, which consumes this brief as input.
