# EBB — Progress card: states

States for the "Progress card" component set (`8436:12392`, EBB working version / "EBB (WIP)" page). Colors pulled directly from the Figma component.

The component has two faces:
- **Per-path progress** — how far through one program (sessions within a single care path; $100 at finish). States: not started · in progress · completed.
- **Your care this year** — the annual roll-up across all paths (paths completed toward $500). States: nothing yet · in progress · completed / cap reached.

| Version | File | Date | Notes |
|---------|------|------|-------|
| v1 | `progress-card-zero-states.html` | 2026-07-15 | Both faces shown across their states. Not-started shows path length ("8 sessions") + empty track; year "nothing yet" frames "up to $500 / first $100" (no "$0" deficit); completed reads reward as earned; cap-reached = "$500 · annual max." |

## Colors (from the component)
- progress `#1C8EB4` · per-path track `#EAF2FA`
- reward pill bg `#FFEDD0` · ink `#87440A`
- year track `#F0E7DE` · dot-off stroke `#EADDD0`
- card `#FFFFFF` · border `#E2E0DA`
- ink `#000000` · secondary `#3E3E3E` / `#5F5F5F`
