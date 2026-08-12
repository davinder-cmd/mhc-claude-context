# EBB — Completion Celebration Screen · Iteration Log

The "hinge" screen of the EBB engagement loop: finishing a care path → celebrate the health win → hand over the $100 → tee up the next path. Implements decisions D1–D4 (see `projects/feature-ebb/_decisions.md`).

| Version | File | Date | Notes |
|---------|------|------|-------|
| v1 | `completion-celebration-v1.html` | 2026-07-01 | First pass. Mobile screen + annotation rail. Order: health win → $100 + cap meter → next-path card (from interests) → browse/back escape hatches. Before→after vs today's start/points/dead-end screen. Flagged variants: first-ever completion, cap reached, no-strong-next. |
| v2 | `completion-celebration-v2-bottom-options.html` | 2026-07-02 | Bottom-third rework. Top approved & unchanged; cap confirmed on-screen. Davinder: bottom (card + 3 stacked buttons) was muddled. Shared unclog: "close/not now" → top-right ✕. Three options: **A** tappable path (card = CTA), **B** compact row + one button (calmest), **C** choose-your-next (lead + 1 alt; softens D1). My lean: A, B fallback, hold C. |
| v3 | `completion-celebration-v3.html` | 2026-07-02 | **SETTLED.** Option A chosen (Davinder: "A is the sharpest, keeps it simple"). Single clean screen: approved top + tappable next-path card as CTA + quiet "Browse all" link + top-right ✕. Annotation rail updated. This is the working completion screen. |

| v4 explorations | `completion-celebration-v4-explorations.html` | 2026-07-09 | Davinder: more cracks, keep top=success+progress / bottom=recommendation, expand top in one, shorten bottom in one, play with visual weight. 5: **A Expanded top** (PHQ-9 8→4 outcome delta + fuller progress ladder); **B Shortened bottom** (compact next-row instead of image tap-card); **C Bold weight** (full-bleed teal hero + confetti + reward glass chip — money-loud, reserve for first-ever completion); **D Calm weight** (no fill, ring check, hairline reward row — most restrained); **E Balanced blend, LEAN** (inline outcome delta + settled celebration + trimmed next-row). Recommendation: the outcome delta is the key top addition (health win made concrete), pair with trimmed bottom. All keep reward as accent per guardrail. Not yet in Figma. |

| v5 minimal + voice | `completion-celebration-v5-minimal-voice.html` | 2026-07-09 | Davinder: 5 more, personality + reduced content, "display only one thing that needs to be said." Each = one hero line + one voice + one action, rest whisper: **1 Warm** ("Look at what you did." — acknowledgment, LEAN); **2 Bold** ("Done." huge); **3 Zen** ("Rest. You earned it." — permission to stop, most guardrail-safe, doesn't push next); **4 Playful** ("Ten for ten. 🎯" — score framing, most gamified, use sparingly); **5 Coach** ("That was the hard part." — momentum→next). Recommendation: 1 Warm (acknowledgment beats a dollar figure on the peak). Copy = voice exploration, needs brand-voice sign-off. Not yet in Figma. |

| v6 trimmed copy | `completion-celebration-v6-trimmed.html` | 2026-07-09 | Davinder: v5 minimal went too far — keep v3 structure exactly, just cut verbose copy. Before/after at 2 trim levels vs current: **Trimmed (LEAN)** drops win-line 2nd sentence + repetitive reward sub ("$100 gift card earned" / "On its way — no action needed."); **Trimmed more** = single-clause win ("All 10 sessions done.") + "On its way." + "Browse all". Structure byte-for-byte same as v3. Rec: Trimmed (keeps "real, lasting work" meaning). Not yet in Figma. |

| reward+progress cleanup | `reward-progress-banner-cleanup.html` | 2026-07-09 | Davinder: the $100 reward card + progress module read disjointed / too many words; likes a banner summarizing how many done. Merge into ONE banner. Numbers corrected to model (pips had drifted to 8/3 → **2 of 5 · $200 of $500**). 3: **A Unified card (LEAN)** — one amber container, $100 hero + hairline + "2 of 5 · $200 of $500" summary; **B Count-led** — "2 of 5 care paths done" headline + "+$100" corner chip, neutral card; **C Minimal** — event line + bar + summary line, flattest. Rec: A (completion moment → $100 keeps hero, year summary as quiet 2nd tier in same container). Not yet in Figma. |

## In Figma
- v3 built natively on the "claude" page (frame `8492:37404`, label `8492:37450`), placed below the opt-in cluster. Editable layers; numbers match the reconciled data model (Depression 10, Insomnia 8). Dropped 2026-07-09.

## Open for reaction (v1)
- Tone/restraint of the celebration (calm vs. more celebratory).
- Whether the cap meter ("$100 of $500") belongs on this screen or feels too money-forward given the crowding-out guardrail.
- Copy on the health-win line.
- Whether "Browse all" + "Not now" are the right two escape hatches.
