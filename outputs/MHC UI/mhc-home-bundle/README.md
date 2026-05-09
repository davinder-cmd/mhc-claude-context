# MHC Home — Bundle

Two ways to use what's in here:

## 1. Standalone preview (single file, works offline)

**`MHC Home — Standalone Preview.html`**

Double-click to open in a browser. Everything (CSS, block partials, images)
is inlined. No server needed. Use this for sharing the design with people
who just want to click through it.

## 2. Production-shaped source (server-style)

**`MHC Home Preview - source.html`** + the surrounding files.

This is how the page is structured for a real server:

- `MHC Home Preview - source.html` — the page shell + preview toolbar +
  data fixtures + JS template engine.
- `mhc-home.css` — all styles.
- `block-1-greeting-hero.html` — hero (focus / no-focus variants).
- `block-1b-invites.html` — pending team & peer invites + challenge banner.
- `block-2b-progress.html` — In-progress programs & challenges rail.
- `block-2-today.html` — Today strip (trackers + points).
- `block-3-insights.html` — Insights cards (sleep, steps, etc.).
- `block-4-foryou.html` — For You content + secondary banners.
- `assets/` — hero / banner / for-you imagery.
- `uploads/` — tracker & points icons.

The block partials are HTML fragments with `{{token}}` placeholders. The
shell fetches them at runtime and substitutes data from the fixture object.
On a real server you'd render the same partials with whatever templating
you use (Liquid, Handlebars, Jinja, etc.) — the token names are the
contract.

To preview the source build locally, you need to serve the folder over
HTTP (so `fetch()` can load the partials):

```
cd mhc-home-bundle
python3 -m http.server 8000
# then open http://localhost:8000/MHC%20Home%20Preview%20-%20source.html
```

## Preview toolbar

Top-left dropdowns let you toggle between every state combination:

- **Insights** — none / one / two / three cards
- **In-progress rail** — empty, programs only, programs + challenge, urgent variants
- **Challenges** — invite states, results banners, late-join banners
- Plus hero focus state, today-strip variants, and more.

Use it to confirm every empty state and every "lots of stuff at once"
state renders correctly.
