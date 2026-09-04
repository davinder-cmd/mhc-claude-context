import json, os, html
from urllib.parse import urlparse, unquote
from collections import defaultdict

photo_data = json.load(open("classified.json"))
media_data = json.load(open("classified_media.json"))

CATEGORIES = ["Nature","Movement","Rest","Focus","Family_home_life","Connection","Breath","Finance","Nourishment"]
SPECIAL = ["Sensitive/Support"]
CONF_LABEL = {
    "high": ("high confidence", "#16a34a"),
    "medium": ("keyword match", "#2563eb"),
    "inferred": ("inferred from folder — not verified", "#d97706"),
    "flagged": ("flagged — needs care", "#dc2626"),
    "visual": ("confirmed by eye", "#16a34a"),
    "reasoned": ("reasoned from context", "#2563eb"),
}

def name_of(url):
    return os.path.basename(unquote(urlparse(url).path))

def context_of(url):
    p = unquote(urlparse(url).path)
    parts = [x for x in p.split("/") if x]
    try:
        i = [x.lower() for x in parts].index("contentimages")
        return "/".join(parts[i+1:i+3])
    except ValueError:
        return "/".join(parts[-3:-1])

def esc(s):
    return html.escape(s, quote=True)

def media_tag(url, kind):
    u = esc(url)
    if kind == "video":
        return f'<video src="{u}" controls preload="none" onerror="this.closest(\'.card\').classList.add(\'broken\')"></video>'
    if kind == "audio":
        return f'<div class="audio-wrap"><audio src="{u}" controls preload="none" onerror="this.closest(\'.card\').classList.add(\'broken\')"></audio></div>'
    return f'<img src="{u}" loading="lazy" alt="" onerror="this.closest(\'.card\').classList.add(\'broken\')">'

def card(item, kind):
    url = item["url"]
    name = esc(name_of(url))
    ctx = esc(context_of(url))
    u = esc(url)
    conf = item["confidence"]
    label, color = CONF_LABEL.get(conf, ("unclassified", "#9ca3af"))
    badge = {"photo":"","video":"🎬 ","audio":"🎧 "}[kind]
    return f'''<div class="card">
  <div class="media media-{kind}">{media_tag(url, kind)}</div>
  <div class="meta">
    <div class="name" title="{name}">{badge}{name}</div>
    <div class="ctx">{ctx}</div>
    <div class="conf" style="color:{color}">{label}</div>
    <a class="link" href="{u}" target="_blank" rel="noopener">open ↗</a>
  </div>
</div>'''

buckets = defaultdict(lambda: {"photo":[], "video":[], "audio":[]})
unclassified = {"photo":[], "video":[], "audio":[]}

for item in photo_data:
    if item["category"] is None:
        continue  # icons/logos/badges/test — not part of this exercise
    buckets[item["category"]]["photo"].append(item)

for item in media_data:
    kind = item["media"]
    if item["category"] is None:
        unclassified[kind].append(item)
        continue
    buckets[item["category"]][kind].append(item)

nav = []
sections = []
for cat in CATEGORIES + SPECIAL:
    b = buckets.get(cat, {"photo":[], "video":[], "audio":[]})
    total = len(b["photo"]) + len(b["video"]) + len(b["audio"])
    if not total:
        continue
    nav.append(f'<a href="#c-{cat}">{cat.replace("_"," ")} <span class="count">{total}</span></a>')
    cards = "".join(card(i, "photo") for i in b["photo"]) + \
            "".join(card(i, "video") for i in b["video"]) + \
            "".join(card(i, "audio") for i in b["audio"])
    sub = f'<span class="subcount">{len(b["photo"])} images · {len(b["video"])} videos · {len(b["audio"])} audio</span>'
    sections.append(f'''<section id="c-{cat}">
  <h2>{cat.replace("_"," ")} <span class="count">{total}</span></h2>
  {sub}
  <div class="grid">{cards}</div>
</section>''')

un_total = sum(len(v) for v in unclassified.values())
if un_total:
    nav.append(f'<a href="#c-unclassified">Unclassified <span class="count">{un_total}</span></a>')
    cards = "".join(card(i,"photo") for i in unclassified["photo"]) + \
            "".join(card(i,"video") for i in unclassified["video"]) + \
            "".join(card(i,"audio") for i in unclassified["audio"])
    sections.append(f'''<section id="c-unclassified">
  <h2>Unclassified <span class="count">{un_total}</span></h2>
  <div class="grid">{cards}</div>
</section>''')

grand_total = sum(len(b["photo"])+len(b["video"])+len(b["audio"]) for b in buckets.values()) + un_total

html_out = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>MHC Imagery — Concept Categories</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root {{ --bg:#f4f5f7; --panel:#fff; --border:#e2e4e9; --text:#1c1f26; --muted:#6b7280; --accent:#2f6fed; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--text); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif; }}
  header {{ position:sticky; top:0; z-index:10; background:var(--panel); border-bottom:1px solid var(--border); padding:14px 24px; display:flex; flex-wrap:wrap; align-items:center; gap:16px; }}
  header h1 {{ font-size:16px; margin:0; white-space:nowrap; }}
  .sub {{ color:var(--muted); font-size:13px; }}
  nav {{ display:flex; gap:10px; flex-wrap:wrap; margin-left:auto; }}
  nav a {{ color:var(--text); text-decoration:none; font-size:13px; padding:4px 10px; border-radius:6px; background:var(--bg); border:1px solid var(--border); }}
  nav a:hover {{ border-color:var(--accent); color:var(--accent); }}
  .count {{ color:var(--muted); font-weight:400; font-size:0.85em; }}
  .subcount {{ color:var(--muted); font-size:12px; }}
  main {{ padding:8px 24px 60px; }}
  section {{ margin-top:32px; }}
  h2 {{ font-size:16px; border-bottom:1px solid var(--border); padding-bottom:8px; margin-bottom:2px;}}
  .grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:14px; margin-top:14px; }}
  .card {{ background:var(--panel); border:1px solid var(--border); border-radius:10px; overflow:hidden; display:flex; flex-direction:column; }}
  .card.broken {{ border-color:#dc2626; background:#fef2f2; }}
  .media {{ height:130px; display:flex; align-items:center; justify-content:center; background:repeating-conic-gradient(#eee 0% 25%,#fafafa 0% 50%) 50%/16px 16px; }}
  .media img, .media video {{ max-width:100%; max-height:100%; object-fit:contain; }}
  .audio-wrap {{ width:100%; padding:0 8px; }}
  .audio-wrap audio {{ width:100%; }}
  .meta {{ padding:8px 10px 10px; border-top:1px solid var(--border); }}
  .name {{ font-size:11px; word-break:break-all; line-height:1.3; max-height:2.6em; overflow:hidden; }}
  .ctx {{ font-size:10.5px; color:var(--muted); margin-top:3px; }}
  .conf {{ font-size:10px; margin-top:4px; font-weight:600; }}
  .link {{ font-size:11px; color:var(--accent); text-decoration:none; }}
</style>
</head>
<body>
<header>
  <h1>MHC Imagery — by Concept</h1>
  <span class="sub">{grand_total} assets (images + video + audio) grouped by theme, for Shutterstock cross-reference</span>
  <nav>{''.join(nav)}</nav>
</header>
<main>
{''.join(sections)}
</main>
</body>
</html>
"""

with open("concept-gallery.html", "w") as f:
    f.write(html_out)
print("wrote concept-gallery.html, total:", grand_total)
