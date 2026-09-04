import json, os, html
from urllib.parse import urlparse, unquote
from collections import defaultdict

data = json.load(open("classified.json"))

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

def card(item):
    url = item["url"]
    name = esc(name_of(url))
    ctx = esc(context_of(url))
    u = esc(url)
    conf = item["confidence"]
    label, color = CONF_LABEL.get(conf, ("unclassified", "#9ca3af"))
    return f'''<div class="card" data-key="{u}">
  <div class="pair">
    <div class="pane current">
      <div class="media"><img src="{u}" loading="lazy" alt="" onerror="this.closest('.card').classList.add('broken')"></div>
      <div class="pane-label">current</div>
    </div>
    <div class="pane replacement" tabindex="0" role="button" aria-label="Add replacement image">
      <div class="media placeholder">
        <span class="drop-hint">+ add pick<br><span class="drop-sub">click or drag image</span></span>
        <img class="pick-img" style="display:none">
      </div>
      <div class="pane-label pick-label">replacement</div>
      <button class="clear-pick" type="button" title="Remove pick" style="display:none">×</button>
      <input type="file" class="pick-input" accept="image/*" style="display:none">
    </div>
  </div>
  <div class="meta">
    <div class="name" title="{name}">{name}</div>
    <div class="ctx">{ctx}</div>
    <div class="conf" style="color:{color}">{label}</div>
    <a class="link" href="{u}" target="_blank" rel="noopener">open current ↗</a>
  </div>
</div>'''

buckets = defaultdict(list)
for item in data:
    if item["category"] is None:
        continue  # icons/logos/badges/illustrations/test — not photography
    buckets[item["category"]].append(item)

nav = []
sections = []
grand_total = 0
for cat in CATEGORIES + SPECIAL:
    items = buckets.get(cat, [])
    if not items:
        continue
    grand_total += len(items)
    nav.append(f'<a href="#c-{cat}">{cat.replace("_"," ")} <span class="count">{len(items)}</span></a>')
    cards = "".join(card(i) for i in items)
    sections.append(f'''<section id="c-{cat}">
  <h2>{cat.replace("_"," ")} <span class="count">{len(items)}</span></h2>
  <div class="grid">{cards}</div>
</section>''')

html_out = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>MHC Photography — Replacement Tracker</title>
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
  .excluded {{ color:var(--muted); font-size:12px; padding:0 24px; margin-top:6px; }}
  main {{ padding:8px 24px 60px; }}
  section {{ margin-top:32px; }}
  h2 {{ font-size:16px; border-bottom:1px solid var(--border); padding-bottom:8px; }}
  .grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px; margin-top:14px; }}
  .card {{ background:var(--panel); border:1px solid var(--border); border-radius:10px; overflow:hidden; }}
  .card.broken .current .media {{ border-color:#dc2626; }}
  .pair {{ display:flex; }}
  .pane {{ flex:1; min-width:0; }}
  .pane.current {{ border-right:1px solid var(--border); }}
  .media {{ height:120px; display:flex; align-items:center; justify-content:center; background:repeating-conic-gradient(#eee 0% 25%,#fafafa 0% 50%) 50%/16px 16px; position:relative; }}
  .media img {{ max-width:100%; max-height:100%; object-fit:contain; }}
  .media.placeholder {{ color:#b7bcc6; font-size:11px; background:#fafbfc; text-align:center; }}
  .pane.replacement {{ cursor:pointer; }}
  .pane.replacement:hover .media.placeholder {{ background:#eef3ff; color:var(--accent); }}
  .pane.replacement.dragover .media.placeholder {{ background:#e0ebff; color:var(--accent); outline:2px dashed var(--accent); outline-offset:-4px; }}
  .drop-sub {{ font-size:9px; opacity:.8; }}
  .pane.replacement.picked {{ cursor:default; }}
  .pane.replacement.picked .drop-hint {{ display:none; }}
  .pane.replacement.picked .pick-img {{ display:block !important; }}
  .clear-pick {{ position:absolute; top:3px; right:3px; width:18px; height:18px; border-radius:50%; border:none; background:rgba(0,0,0,.55); color:#fff; font-size:12px; line-height:1; cursor:pointer; z-index:2; }}
  .pane-label {{ text-align:center; font-size:9.5px; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); padding:3px 0; background:#f8f9fb; }}
  .pane.replacement.picked .pane-label {{ background:#e8f7ee; color:#16a34a; }}
  .meta {{ padding:8px 10px 10px; border-top:1px solid var(--border); }}
  .name {{ font-size:11px; word-break:break-all; line-height:1.3; max-height:2.6em; overflow:hidden; }}
  .ctx {{ font-size:10.5px; color:var(--muted); margin-top:3px; }}
  .conf {{ font-size:10px; margin-top:4px; font-weight:600; }}
  .link {{ font-size:11px; color:var(--accent); text-decoration:none; }}
  .toolbar {{ padding:10px 24px; display:flex; align-items:center; gap:14px; background:#fff; border-bottom:1px solid var(--border); position:sticky; top:53px; z-index:9; flex-wrap:wrap; }}
  .progress-wrap {{ display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--muted); }}
  .progress-bar {{ width:160px; height:7px; background:#e5e7eb; border-radius:99px; overflow:hidden; }}
  .progress-fill {{ height:100%; background:#16a34a; width:0%; transition:width .2s; }}
  .btn {{ font-size:12.5px; padding:6px 12px; border-radius:7px; border:1px solid var(--border); background:#fff; cursor:pointer; color:var(--text); }}
  .btn:hover {{ border-color:var(--accent); color:var(--accent); }}
  .btn.danger:hover {{ border-color:#dc2626; color:#dc2626; }}
</style>
</head>
<body>
<header>
  <h1>MHC Photography — Replacement Tracker</h1>
  <span class="sub">{grand_total} real photographs, illustrations/icons/logos/badges excluded</span>
  <nav>{''.join(nav)}</nav>
</header>
<div class="toolbar">
  <div class="progress-wrap">
    <span id="progressText">0 / {grand_total} picked</span>
    <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
  </div>
  <button class="btn" id="exportBtn">Export picks (CSV)</button>
  <button class="btn danger" id="clearAllBtn">Clear all picks</button>
  <span class="sub" id="storageNote"></span>
</div>
<div class="excluded">Excluded from this page: 199 UI icons, 40 badge/achievement graphics, 12 partner logos, 8 illustrated diagrams/infographics, 2 dev-test assets. Click or drag an image onto any "+ add pick" slot to attach a replacement — it saves automatically in this browser and survives reloads.</div>
<main>
{''.join(sections)}
</main>
<script>
(function() {{
  var DB_NAME = 'mhc-photo-picks';
  var STORE = 'picks';
  var dbp = new Promise(function(resolve, reject) {{
    var req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = function() {{ req.result.createObjectStore(STORE); }};
    req.onsuccess = function() {{ resolve(req.result); }};
    req.onerror = function() {{ reject(req.error); }};
  }});

  function idbGet(key) {{
    return dbp.then(function(db) {{
      return new Promise(function(resolve, reject) {{
        var tx = db.transaction(STORE, 'readonly');
        var r = tx.objectStore(STORE).get(key);
        r.onsuccess = function() {{ resolve(r.result); }};
        r.onerror = function() {{ reject(r.error); }};
      }});
    }});
  }}
  function idbSet(key, val) {{
    return dbp.then(function(db) {{
      return new Promise(function(resolve, reject) {{
        var tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).put(val, key);
        tx.oncomplete = function() {{ resolve(); }};
        tx.onerror = function() {{ reject(tx.error); }};
      }});
    }});
  }}
  function idbDelete(key) {{
    return dbp.then(function(db) {{
      return new Promise(function(resolve, reject) {{
        var tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).delete(key);
        tx.oncomplete = function() {{ resolve(); }};
        tx.onerror = function() {{ reject(tx.error); }};
      }});
    }});
  }}
  function idbAll(db) {{
    return new Promise(function(resolve, reject) {{
      var tx = db.transaction(STORE, 'readonly');
      var store = tx.objectStore(STORE);
      var out = [];
      var req = store.openCursor();
      req.onsuccess = function(e) {{
        var cur = e.target.result;
        if (cur) {{ out.push({{key: cur.key, val: cur.value}}); cur.continue(); }}
        else resolve(out);
      }};
      req.onerror = function() {{ reject(req.error); }};
    }});
  }}

  var total = {grand_total};
  var pickedCount = 0;
  function updateProgress() {{
    document.getElementById('progressText').textContent = pickedCount + ' / ' + total + ' picked';
    document.getElementById('progressFill').style.width = (total ? (pickedCount/total*100) : 0) + '%';
  }}

  function applyPick(pane, val) {{
    var img = pane.querySelector('.pick-img');
    var url = URL.createObjectURL(val.blob);
    img.src = url;
    pane.classList.add('picked');
    pane.querySelector('.clear-pick').style.display = 'block';
  }}

  function setupCard(card) {{
    var key = card.getAttribute('data-key');
    var pane = card.querySelector('.pane.replacement');
    var input = pane.querySelector('.pick-input');
    var clearBtn = pane.querySelector('.clear-pick');

    idbGet(key).then(function(val) {{
      if (val) {{ applyPick(pane, val); pickedCount++; updateProgress(); }}
    }});

    function handleFile(file) {{
      if (!file || file.type.indexOf('image/') !== 0) return;
      var wasPicked = pane.classList.contains('picked');
      var val = {{ blob: file, name: file.name }};
      idbSet(key, val).then(function() {{
        applyPick(pane, val);
        if (!wasPicked) {{ pickedCount++; updateProgress(); }}
      }});
    }}

    pane.addEventListener('click', function(e) {{
      if (e.target === clearBtn) return;
      input.click();
    }});
    pane.addEventListener('keydown', function(e) {{
      if (e.key === 'Enter' || e.key === ' ') {{ e.preventDefault(); input.click(); }}
    }});
    input.addEventListener('change', function() {{
      if (input.files && input.files[0]) handleFile(input.files[0]);
    }});
    pane.addEventListener('dragover', function(e) {{ e.preventDefault(); pane.classList.add('dragover'); }});
    pane.addEventListener('dragleave', function() {{ pane.classList.remove('dragover'); }});
    pane.addEventListener('drop', function(e) {{
      e.preventDefault();
      pane.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    }});
    clearBtn.addEventListener('click', function(e) {{
      e.stopPropagation();
      idbDelete(key).then(function() {{
        pane.classList.remove('picked');
        clearBtn.style.display = 'none';
        pickedCount--; updateProgress();
      }});
    }});
  }}

  document.querySelectorAll('.card').forEach(setupCard);
  updateProgress();

  document.getElementById('exportBtn').addEventListener('click', function() {{
    dbp.then(idbAll).then(function(rows) {{
      var lines = ['current_url,replacement_filename'];
      rows.forEach(function(r) {{
        var name = (r.val.name || '').replace(/"/g,'""');
        lines.push('"' + r.key.replace(/"/g,'""') + '","' + name + '"');
      }});
      var blob = new Blob([lines.join('\\n')], {{type:'text/csv'}});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'mhc-photo-picks.csv';
      document.body.appendChild(a); a.click(); a.remove();
    }});
  }});

  document.getElementById('clearAllBtn').addEventListener('click', function() {{
    if (!confirm('Clear all ' + pickedCount + ' picks? This cannot be undone.')) return;
    dbp.then(function(db) {{
      var tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).clear();
      tx.oncomplete = function() {{ location.reload(); }};
    }});
  }});
}})();
</script>
</body>
</html>
"""

with open("photography-only.html", "w") as f:
    f.write(html_out)
print("wrote photography-only.html, total:", grand_total)
