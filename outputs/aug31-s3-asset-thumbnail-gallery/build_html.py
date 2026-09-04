import json, html

with open("assets.json") as f:
    items = json.load(f)

# stable order: by folder then name
items.sort(key=lambda it: (it["folder"], it["name"]))

TYPE_LABELS = {
    "image": "Images",
    "video": "Video",
    "audio": "Audio",
    "pdf": "PDF",
    "font": "Font",
    "other": "Other",
}

counts = {}
for it in items:
    counts[it["type"]] = counts.get(it["type"], 0) + 1

def esc(s):
    return html.escape(s, quote=True)

cards = []
for i, it in enumerate(items):
    u = esc(it["url"])
    name = esc(it["name"])
    folder = esc(it["folder"])
    t = it["type"]
    if t == "image":
        media = f'<img src="{u}" loading="lazy" alt="{name}">'
    elif t == "video":
        media = f'<video src="{u}" preload="none" controls muted playsinline></video>'
    elif t == "audio":
        media = f'<div class="icon-tile">&#127925;</div><audio src="{u}" preload="none" controls></audio>'
    elif t == "pdf":
        media = '<div class="icon-tile">&#128196;</div>'
    elif t == "font":
        media = '<div class="icon-tile">&#9993;&#65039;Aa</div>'
    else:
        media = '<div class="icon-tile">&#128193;</div>'

    cards.append(f'''
    <div class="card" data-type="{t}" data-search="{name.lower()} {folder.lower()}">
      <div class="media">{media}</div>
      <div class="meta">
        <div class="name" title="{name}">{name}</div>
        <div class="folder" title="{folder}">{folder}</div>
        <a class="open" href="{u}" target="_blank" rel="noopener">open &#8599;</a>
      </div>
    </div>''')

filter_buttons = ['<button class="filt active" data-filter="all">All <span>' + str(len(items)) + '</span></button>']
for t in ["image", "video", "audio", "pdf", "other", "font"]:
    if counts.get(t):
        filter_buttons.append(f'<button class="filt" data-filter="{t}">{TYPE_LABELS[t]} <span>{counts[t]}</span></button>')

html_out = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MHC S3 Asset Gallery</title>
<style>
  :root {{
    --ink: #2b2b2b;
    --ink-soft: #6b6b6b;
    --bg: #fafaf8;
    --card: #ffffff;
    --border: #e4e2dd;
    --accent: #1155cc;
  }}
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: var(--bg);
    color: var(--ink);
  }}
  header {{
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 14px 20px;
  }}
  h1 {{
    font-size: 16px;
    margin: 0 0 10px;
    font-weight: 600;
  }}
  .controls {{
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }}
  input#search {{
    flex: 1;
    min-width: 220px;
    padding: 7px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 13px;
  }}
  .filt {{
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--ink);
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    cursor: pointer;
  }}
  .filt span {{ color: var(--ink-soft); margin-left: 3px; }}
  .filt.active {{ background: var(--ink); color: #fff; border-color: var(--ink); }}
  .filt.active span {{ color: #ccc; }}
  #count {{ font-size: 12px; color: var(--ink-soft); margin-left: auto; }}
  .grid {{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
    padding: 16px 20px 60px;
  }}
  .card {{
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }}
  .card[hidden] {{ display: none; }}
  .media {{
    aspect-ratio: 1 / 1;
    background: #f1f0ec;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }}
  .media img {{ width: 100%; height: 100%; object-fit: contain; }}
  .media video {{ width: 100%; height: 100%; object-fit: contain; background: #111; }}
  .media audio {{ display: none; }}
  .icon-tile {{ font-size: 34px; }}
  .meta {{ padding: 8px 9px; font-size: 11px; }}
  .name {{ font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}
  .folder {{ color: var(--ink-soft); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px; }}
  .open {{ display: inline-block; margin-top: 5px; color: var(--accent); text-decoration: none; font-size: 11px; }}
  .open:hover {{ text-decoration: underline; }}
</style>
</head>
<body>
<header>
  <h1>MHC S3 Asset Gallery &mdash; {len(items)} assets</h1>
  <div class="controls">
    {''.join(filter_buttons)}
    <input id="search" type="text" placeholder="Filter by filename or folder path&hellip;">
    <span id="count"></span>
  </div>
</header>
<div class="grid" id="grid">
  {''.join(cards)}
</div>
<script>
  const cards = Array.from(document.querySelectorAll('.card'));
  const buttons = Array.from(document.querySelectorAll('.filt'));
  const search = document.getElementById('search');
  const countEl = document.getElementById('count');
  let activeType = 'all';

  function apply() {{
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    for (const c of cards) {{
      const typeOk = activeType === 'all' || c.dataset.type === activeType;
      const searchOk = !q || c.dataset.search.includes(q);
      const show = typeOk && searchOk;
      c.hidden = !show;
      if (show) visible++;
    }}
    countEl.textContent = visible + ' shown';
  }}

  buttons.forEach(b => b.addEventListener('click', () => {{
    buttons.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    activeType = b.dataset.filter;
    apply();
  }}));
  search.addEventListener('input', apply);
  apply();
</script>
</body>
</html>
'''

with open("gallery.html", "w") as f:
    f.write(html_out)

print("wrote gallery.html,", len(items), "cards")
