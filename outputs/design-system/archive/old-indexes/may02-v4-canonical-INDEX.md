# v4 Canonical — INDEX

> Reset artifact. Replaces the v1–v3 thread of incremental token + product mockup work. One file, three screens, six rules.

## Why v4 exists

User feedback after the Figma reskin attempt: three concerns to address simultaneously.

1. The auto-recoloring produced an ugly result — system was buried under chrome that didn't represent it.
2. The system itself didn't feel right when applied to real product — too much color, too many module-tinted surfaces.
3. The approach was too incremental — too many small versions, no single artifact telling the whole story.

## What v4 changes

- **No more auto-recoloring.** Screens are rebuilt deliberately. Every color earns its place.
- **Editorial restraint** as the new discipline. Withings-coded, not Hinge-coded. Mid-tones only — no pastels on large surfaces, no heavy gradients on member moments.
- **Color is an accent, not a coat.** Module identity expressed through glyph color, not icon container fills. The 100/200 stops are essentially retired in v4 product.
- **One artifact, not many.** A single HTML file tells the whole story.

## What stays locked from v1–v3

- R2 sky-teal bridge as primary (D2 — confirmed, not revisited)
- Sand surfaces / neutral graphite ink architecture
- Phase 0 attributes (Credible, Direct, Outcome-obsessed, Human, AI-competent)
- Cross-cutting AI principle (now expressed as a tag dot, not a wash)
- Module hues exist — but expressed through glyph color only

## Versions (newest first)

### v4 icons — 2026-05-02 — Layer 4 redrawn under v4 discipline

**File:** [v4-icons.html](v4-icons.html)

**What changed from original Layer 4 spec:**
- **Recipe count: 5 → 3** (solid disc, soft squircle, halo, outlined ring, duotone wedge → glyph in container, outlined ring, naked glyph)
- **Recommended typeface: Material Rounded → Material Outlined** (one-line CSS change, same library, same license)
- **Module identity = glyph color, not container fill** (architectural rule applied)
- **Icon module color shifts from .700 to .500 stop** (mid-tone, matching v4 categorical discipline)

**Three surviving recipes:**
1. **Glyph in uniform container** — sand.100 squircle, glyph at module.500 — for list-row leading icons
2. **Outlined ring** — neutral.300 stroke default / primary.600 stroke active — for state indicators
3. **Naked glyph** — no container, just the glyph — for inline, chevrons, AI markers

**What v4 explicitly retired:**
- Solid disc (heavy variant.700 fill)
- Soft squircle (variant.100 pastel container)
- Halo (variant.100 fill + variant.200 ring)
- Duotone wedge (split-color squircle)
- Material Rounded as default (cap-rounded geometry softened the editorial register)

**Includes:** sizing, filled-vs-stroked rule, 3 recipes demo'd, 7-module × 3-recipe matrix (21 cells), font-comparison table with Phosphor/Lucide/Tabler ruled out, pilot screen with Health Assessment list + tab bar, full v4 token spec.

**Status:** v4 icons drafted. Ladders cleanly to v4-canonical.html and v4-components.html.

---

### v4 components — 2026-05-02 — Layer 3 spec under v4 discipline

**File:** [v4-components.html](v4-components.html)

**What changed:** Original Layer 3 spec ([tokens-v1-layer3-components.html](../may02-tokens-v1/tokens-v1-layer3-components.html)) leaned on pastel `100` backgrounds throughout — badges, selected-state washes, radius demo. v4 retires all of them.

**Specific component updates:**
- **Badges** — replaced `[variant].100` filled background pattern with **dot + caps** style (Linear/Notion-coded). Outline variant available for contained chips.
- **Selection cards** — selected state no longer uses `primary.50` wash. Differentiation is a 2px `primary.600` border on white. Surface stays white.
- **Ghost button hover** — `primary.50` background replaced by underline + color shift.
- **Radius demo** — sand/neutral cards instead of `primary.100`.
- **Deep-gradient button** — explicitly reserved for buyer/commit moments only.
- **Pilot screen** — DCP onboarding step 3 redrawn with v4 selected state + v4 "Recommended" badge.

**Status:** v4 components drafted. Ladders cleanly to v4-canonical.html.

---

### v4 — 2026-05-02 — Canonical product application

**File:** [v4-canonical.html](v4-canonical.html)

**Three canonical screens:**
1. **Bonjour Andrew · Home** — content-rich, with the AI Insights moment expressed as a labeled tag (not a colored wash)
2. **Rewards** — module-led identity expressed as a thin warm-500 top-edge accent line, not a gradient hero
3. **Health Assessment** — six categories with uniform sand icon containers; module identity carried by glyph color

**The six rules (locked for v4):**
1. Surfaces are sand. Never colored.
2. Ink is graphite. Never pure black.
3. Color is an accent, not a coat. 100/200 retired from product.
4. Module identity = glyph color, not container fill.
5. The AI moment is labeled (indigo tag dot), not bathed (no gradient wash).
6. Photography and typography do the heavy chromatic work.

**Includes:** explicit "what v4 drops vs. keeps" comparison + Six Rules strip.

**Status:** v4 drafted. This is the canonical artifact. v1–v3 retained for audit trail but superseded.

---

## How to add a v5

1. Copy v4 file → `v5-{slug}.html`
2. Update this INDEX with the new entry above v4
3. Cross-link from `_strategy-decisions.md`
4. Never overwrite v4
