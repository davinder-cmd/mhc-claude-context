# Anna — Tappable Video (sales-demo prototype)

Inline tappable video component for the Anna avatar poster tile. Self-contained HTML/JS;
real HTML5 `<video>` so pause preserves playback position (resumes, does not restart).

Source: Figma "Mobile Health Standard Demo (with Video Avatar)" → poster tile node `37769:30264`
(335×252, VIDEO fill). Figma video bytes can't be exported via API, so the asset is a local
copy of the matching Anna lecture footage.

## Iterations

| Version | File | Notes |
|---|---|---|
| v1 | [anna-tappable-video-v1.html](anna-tappable-video-v1.html) | First build. 4-state machine verified in-browser (states 1→2→3→4 + resume from position). |

## The 4 states (verified)

1. **Paused / poster** — play button + "Watch with Anna" subtext over a bottom scrim. *(initial AND after pause)*
2. **Playing (clean)** — tap to play; all chrome hidden, video only.
3. **Playing + controls** — tap the video; center pause button appears, video keeps playing.
4. **Paused in place** — tap pause; returns to the poster chrome at the *current* time. Play resumes from there (confirmed: paused at 13.48s → resumed at 13.56s, not 0).

Extras: tapping away from the pause button (state 3) hides it back to clean play; Space/Enter toggle; on `ended` it resets to 0 for a clean replay.

## Swap points (top of the file)

- **Video** — `src="anna-lecture.mp4"` (currently a copy of `Downloads/Insomnia 1.mp4`). Drop in any clip.
- **Subtext** — the `.subtext` `<span>` ("Watch with Anna"). Spec uses "Watch with Anna · [duration]" if you want the duration appended.
- **Size** — `--tile-w` / `--tile-h` (335×252, matching the Figma tile).

## Open / to confirm with Davinder

- Which lecture clip is the real demo video (used Insomnia 1 as default — all Downloads clips are the same Anna scene).
- Exact subtext wording + whether to append duration. (Said "I'll give you examples.")
- Whether auto-hide of the pause button is wanted (currently deterministic: stays until you tap away — better for a live demo).
