# Version log — imagery taxonomy

| Version | File | Date | What changed |
|---|---|---|---|
| v1 | [imagery-groupings-v1.html](imagery-groupings-v1.html) | Jul 27, 2026 | First pass. All 276 files in `projects/imagery` visually reviewed and tagged on three axes — subject (14 clusters), surface fit (H/T/N/X per `image-sizing.md`), journey stage (1–6). Tabbed gallery with 480px thumbnails; index emitted to `imagery-index.csv`; recommendation = three-axis tag with journey stage as the selection spine. |
| v1 | [crop-test-v1.html](crop-test-v1.html) + [editorial-audit.md](editorial-audit.md) | Jul 27, 2026 | Compliance audit against `Photography.md` (8 rules) and container mechanics. Every file rendered into 3:2 / 16:9 / 4:1 / 6:1 with real `object-fit: cover`. Findings: 56 hard crop failures at 4:1, 12 portrait files, 124 files with blown highlights (rule 4 is the most-violated), and two rules that conflict with product needs (rule 1 vs Conditions/DCP, rule 7 vs Rewards). Proposed rule change: replace "centred focal point" with a 31–69% vertical face band. |

| v2 | [crop-test.html](crop-test.html) + [light-test.html](light-test.html) | Jul 27, 2026 | Rebuilt via the new skills. Crop test expanded from 4 to **10 shapes** (1:1 · 4:3 · 3:2 · 16:10 · 16:9 · 2:1 · 3:1 · 4:1 · hero 4.5:1 · 6:1) with two views (by photograph / by shape) and a shape filter. **Corrects v1:** the 1:1 verdict pass was actually run and found 7 fails + 27 marginal, not zero — v1's "none" came from a discarded metric. 62 files now fail at least one shape. New lighting page with camera-style highlight-clipping masks and a white-text/scrim legibility toggle. Verdicts per shape in `tags.csv`. |
| v1 | [report.html](report.html) | Jul 27, 2026 | Shareable report for Isabel, built from the two docs above. Published at **https://claude.ai/code/artifact/ad6a74bd-c142-4f39-b507-536d1179c11e** (private until shared from the page's share menu). Self-contained — 31 evidence photos embedded, live crop demos, no external assets. Republish by re-running `embed.py` then re-publishing `report.html`. |

## Files

| File | Purpose |
|---|---|
| `README.md` | Analysis, the three groupings, fix list, buy list, quality gates |
| `report.html` | The shareable report. **Generated** — edit `report-template.html`, then run `python3 embed.py` |
| `report-template.html` | Source for the report. Photos referenced as `var(--iNN)`; `embed.py` inlines them |
| `embed.py` | Inlines the evidence photos as base64 and writes `report.html` |
| `editorial-audit.md` | Compliance audit vs `Photography.md` + crop mechanics, rule by rule, with file lists |
| `imagery-groupings-v1.html` | Browsable gallery — tab between the three groupings |
| `crop-test-v1.html` | Each file in four containers, cropped by the browser. The evidence for the 56 failures |
| `imagery-index.csv` | One row per image: subject, stage, crop class, feature surfaces, note, dimensions |
| `audit-metrics.csv` | Measured exposure, contrast, saturation, colour cast, crop concentration per file |
| `build.py` | Regenerates the CSV, thumbnails, and gallery. Tag table lives here — edit `T` and re-run |
| `audit.py` | Recomputes the measured metrics |
| `croptest.py` | Regenerates the crop-test page. Fail/marginal verdict lists live here |
| `thumbs/` | 480px thumbnails (6.4 MB) referenced by both pages |

## Open

- Nominated fallback sets (README) are a first proposal — needs a pass against the actual category list in Notion.
- Retire/consolidate decisions (~29 files) not yet applied to `projects/imagery`; recommendation only.
- The two brand/product conflicts in `editorial-audit.md` §4 need a decision from whoever owns `Photography.md` before the next imagery purchase.
- A skin-tone face-detection proxy was tried and discarded (golden-hour backgrounds register as skin). Crop verdicts are from visual review of rendered 4:1 crops; if this needs to scale, it wants real face detection (opencv is not installed).
