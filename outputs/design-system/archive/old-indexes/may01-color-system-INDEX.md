# Color System — Iteration Log

The color system has two artifacts: the **master spec** (`color-system.md`, source of truth) and the **preview** (`preview.html`, rendered system reference). Every revision of each is preserved as an immutable versioned file. Rolling unversioned files at the root point to the main-lineage latest for stable URLs.

> Test-screen iterations were dropped on 2026-05-01 — application screens are now built directly in Figma rather than HTML.

## Folder structure

```
may01-color-system/
├── INDEX.md                         ← this file
├── color-system.md                  ← rolling pointer (master spec, latest = v2)
├── preview.html                     ← rolling pointer (preview, latest = v6)
├── v1/                              ← uniform-warm direction (superseded)
└── v2/                              ← neutral-split direction (current main)
    └── alts/                        ← parallel explorations off v2
```

## Naming convention

```
{base-name}-v{N}-{slug}.html              # main lineage
{base-name}-v{N}-alt-{slug}.html          # parallel alt branch
```

- `v{N}` = sequential version number, never reused
- `{slug}` = short kebab-case descriptor of what changed in that iteration
- `alt-` prefix on slug = parallel exploration (does not replace main lineage)
- Each version is **immutable** once shipped — new directions get a new version
- The unversioned `{base-name}.html` always points to the main lineage's latest version

## Branches

| Branch | Lineage | Latest | Notes |
|--------|---------|--------|-------|
| **Main** | v1 → v2 → v4 → v5 → v6 | **v6 (icon treatments)** | Warmed teal primary. Calm/Withings-leaning. Interview-locked. |
| **Alt — Sky Primary** | v2 → v3-alt-sky-primary | **v3-alt-sky-primary** | Sky promoted to primary; teal demoted to supporting. Backup for stakeholder pushback against moving too far from brand-blue. |
| **Alt — Sword-leaning** | v2 → v4-alt-sword-bluered | **v4-alt-sword-bluered** | Vivid clinical aqua primary + warm coral red promoted from `error.*` to first-class `spotlight.*` accent. Surfaces pulled back ~30% in warmth. New gradient utilities: `aqua-coral`, `deep-duo`, `spotlight`. |

## Master spec doc — versioned

| Version | File | What it captures | Status |
|---------|------|------------------|--------|
| v1 | [v1/color-system-v1-uniform-warm.md](v1/color-system-v1-uniform-warm.md) | First Layer 1–5 build. Included a `interactive.secondary.*` warm-action color and matching `button.secondaryAction` variant. | superseded |
| v2 | [v2/color-system-v2-locked.md](v2/color-system-v2-locked.md) | Built against the formally-confirmed 17-question interview. Removes the secondary-action color (Q12 = "one"). All other v1 architecture preserved. | **current** |
| latest → | [color-system.md](color-system.md) | Rolling pointer = v2. | — |

> The v6 preview also includes the **Layer 4 — Icon Treatments** section that has not yet been folded back into the master spec doc. When you're ready to lock that in, it should become spec v3.

## Preview — versioned

| Version | File | What it explores | Status |
|---------|------|------------------|--------|
| v1 | [v1/preview-v1-uniform-warm.html](v1/preview-v1-uniform-warm.html) | Single warm `neutral.*` scale used uniformly for backgrounds, text, borders, and dividers. | superseded |
| v2 | [v2/preview-v2-neutral-split.html](v2/preview-v2-neutral-split.html) | Splits the scale: `sand.*` (warm beige) for backgrounds, `neutral.*` (graphite, barely warm) for ink/structure. | superseded |
| v3-alt-sky-primary | [v2/alts/preview-v3-alt-sky-primary.html](v2/alts/preview-v3-alt-sky-primary.html) | Promotes `sky.*` to primary; demotes warmed teal to `teal.*` as secondary action. Brand-blue continuity. | **alt-sky · current** |
| v4-alt-sword-bluered | [v2/alts/preview-v4-alt-sword-bluered.html](v2/alts/preview-v4-alt-sword-bluered.html) | Sword-leaning blue × red interplay. Vivid clinical aqua primary (hue ~182°) + `spotlight.*` warm coral red promoted to first-class accent (aliased over `error.*`). Surfaces ~30% less warm. Gradients pushed +20% with `gradient.aqua-coral`, `gradient.deep-duo`, `gradient.spotlight`. Color weighting visualization skipped this iteration per delta. | **alt-sword · current** |
| v4-locked | [v2/preview-v4-locked.html](v2/preview-v4-locked.html) | v2-neutral-split content with the warm secondary-action filled button removed. Matches `color-system-v2-locked.md` (interview Q12 = one primary). | superseded |
| v5 | [v2/preview-v5-illustration-variants.html](v2/preview-v5-illustration-variants.html) | Replaces the single Layer-5 illustration with a 4-tile grid showing the same composition re-tinted across module palettes (warm-led / moss-led / sky-led / rose-led). Demonstrates the Withings illustration economy. | superseded |
| v6 | [v2/preview-v6-icon-treatments.html](v2/preview-v6-icon-treatments.html) | Adds a **Layer 4 — Icon Treatments** section: 5 reusable visual recipes (solid disc / soft squircle / halo / outlined ring / duotone wedge) demonstrated across 5 categorical hues. Maps cleanly to message types, action types, assessment question types, state overlays. | **main · current** |
| latest (main) → | [preview.html](preview.html) | (rolling pointer to main-lineage latest = v6) | — |

## How to add a new version

### Continuing the main lineage
1. Copy the latest main version: `cp v2/preview-v6-icon-treatments.html v2/preview-v7-{slug}.html`
2. Edit the new file. Never touch prior versions.
3. Refresh the rolling pointer: `cp v2/preview-v7-{slug}.html preview.html`
4. Update INDEX.md.

### Continuing the alt lineage
1. Copy the latest alt version: `cp v2/alts/preview-v3-alt-sky-primary.html v2/alts/preview-v4-alt-{slug}.html`
2. Edit. Don't touch the rolling pointer (alt does not become main unless promoted).
3. Update INDEX.md.

### Promoting alt to main (e.g. you decide sky-primary IS the direction)
1. `cp v2/alts/preview-v3-alt-sky-primary.html v2/preview-v7-{slug}.html` (or start a new `v3/` folder if it represents a new architecture lineage)
2. Refresh the rolling pointer.
3. Mark alt as "promoted" in INDEX.
