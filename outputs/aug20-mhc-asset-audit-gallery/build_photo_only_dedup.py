import json, os, re, html
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
    "verified": ("verified — official challenge library", "#16a34a"),
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

def path_lower(url):
    return unquote(urlparse(url).path).lower()

# --- illustration filter -----------------------------------------------
# Flat vector exercise-demo diagrams (hip/knee/shoulder/neckCare/lowerback DTx
# musculoskeletal content) that classify.py's original icon/illustration hint
# lists didn't catch, since they're photo-looking session/lesson image codes
# rather than filenames containing words like "diagram" or "illustration".
# Confirmed by visually opening 10+ sample images across every matched folder
# and every non-matched neighboring photo before trusting this rule.
def is_illustration(url):
    p = path_lower(url)
    fname = name_of(url).lower()
    slug = re.sub(r"[^a-z0-9]", "", fname.rsplit(".", 1)[0])
    if re.search(r"/dtx/(hip|knee|shoulder|neckcare)/(moduleimages|sessionimages)/", p):
        return True
    if re.search(r"s\d{1,2}l\d{1,2}", slug):
        return True
    if "musculoskeletal" in slug and any(m in slug for m in ("seniorman", "flexwoman", "fitman")):
        return True
    if "noarrow" in slug or "arrows" in slug:
        return True
    return False

buckets = defaultdict(list)
for item in data:
    if item["category"] is None:
        continue
    if is_illustration(item["url"]):
        continue
    buckets[item["category"]].append(item)

# --- dedupe by filename --------------------------------------------------
# The same underlying photo is frequently re-hosted under multiple DCP
# condition folders (e.g. Is_sitting_the_new_smoking.png appears under
# diabetes-prevention, diabetes-management, AND bloodPressure). Reviewing it
# 9 times for one pick is the "redundancy" problem — collapse to one review
# item per unique filename, but keep every underlying url so a single pick
# can be exported against all of them.
flat = []
cat_start = {}
illustration_count = sum(
    1 for item in data if item["category"] is not None and is_illustration(item["url"])
)

for cat in CATEGORIES + SPECIAL:
    items = buckets.get(cat, [])
    if not items:
        continue
    groups = {}
    order = []
    for it in items:
        n = name_of(it["url"])
        if n not in groups:
            groups[n] = []
            order.append(n)
        groups[n].append(it)

    cat_start[cat] = len(flat)
    for n in order:
        group = groups[n]
        primary = group[0]
        conf = primary["confidence"]
        label, color = CONF_LABEL.get(conf, ("unclassified", "#9ca3af"))
        all_urls = [g["url"] for g in group]
        all_ctx = sorted(set(context_of(g["url"]) for g in group))
        flat.append({
            "url": primary["url"],
            "allUrls": all_urls,
            "name": n,
            "ctx": context_of(primary["url"]),
            "otherCtx": [c for c in all_ctx if c != context_of(primary["url"])],
            "cat": cat,
            "confLabel": label,
            "confColor": color,
        })

items_json = json.dumps(flat)
cat_start_json = json.dumps(cat_start)
cat_counts = {}
for cat in CATEGORIES + SPECIAL:
    cat_counts[cat] = sum(1 for f in flat if f["cat"] == cat)
cat_counts = {k: v for k, v in cat_counts.items() if v}
cat_counts_json = json.dumps(cat_counts)
grand_total = len(flat)
total_underlying = sum(len(f["allUrls"]) for f in flat)

html_out = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>MHC Photography — Replacement Reviewer (photos only, deduped)</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root {{ --bg:#f4f5f7; --panel:#fff; --border:#e2e4e9; --text:#1c1f26; --muted:#6b7280; --accent:#2f6fed; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--text); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif; }}
  header {{ background:var(--panel); border-bottom:1px solid var(--border); padding:12px 24px; display:flex; align-items:center; gap:16px; flex-wrap:wrap; }}
  header h1 {{ font-size:16px; margin:0; white-space:nowrap; }}
  .sub {{ color:var(--muted); font-size:13px; }}
  .toolbar {{ padding:10px 24px; display:flex; align-items:center; gap:14px; background:#fff; border-bottom:1px solid var(--border); flex-wrap:wrap; }}
  .progress-wrap {{ display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--muted); }}
  .progress-bar {{ width:140px; height:7px; background:#e5e7eb; border-radius:99px; overflow:hidden; }}
  .progress-fill {{ height:100%; background:#16a34a; width:0%; transition:width .2s; }}
  .btn {{ font-size:12.5px; padding:6px 12px; border-radius:7px; border:1px solid var(--border); background:#fff; cursor:pointer; color:var(--text); }}
  .btn:hover {{ border-color:var(--accent); color:var(--accent); }}
  .btn.danger:hover {{ border-color:#dc2626; color:#dc2626; }}
  .btn:disabled {{ opacity:.4; cursor:default; }}
  select {{ font-size:12.5px; padding:6px 10px; border-radius:7px; border:1px solid var(--border); background:#fff; }}

  .nav-strip {{ display:flex; align-items:center; justify-content:center; gap:16px; padding:14px 24px; background:#fff; border-bottom:1px solid var(--border); }}
  .nav-strip .position {{ font-size:13px; color:var(--muted); min-width:220px; text-align:center; }}
  .nav-strip .position b {{ color:var(--text); }}
  .navbtn {{ font-size:14px; padding:8px 18px; border-radius:8px; border:1px solid var(--border); background:#fff; cursor:pointer; }}
  .navbtn:hover {{ border-color:var(--accent); color:var(--accent); }}
  .navbtn:disabled {{ opacity:.35; cursor:default; }}

  main {{ max-width:1400px; margin:0 auto; padding:32px 24px 80px; }}
  .compare {{ display:grid; grid-template-columns:1fr 1fr; gap:28px; }}
  @media (max-width: 860px) {{ .compare {{ grid-template-columns:1fr; }} }}
  .pane {{ background:var(--panel); border:1px solid var(--border); border-radius:14px; overflow:hidden; display:flex; flex-direction:column; }}
  .pane-head {{ padding:10px 16px; border-bottom:1px solid var(--border); font-size:11px; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); font-weight:600; }}
  .pane-head.replacement-head {{ background:#fafbfc; }}
  .big-media {{ height:480px; display:flex; align-items:center; justify-content:center; background:repeating-conic-gradient(#eee 0% 25%,#fafafa 0% 50%) 50%/20px 20px; position:relative; }}
  .big-media img {{ max-width:100%; max-height:100%; object-fit:contain; }}
  .pane-body {{ padding:14px 16px 16px; }}
  .item-name {{ font-size:13px; font-weight:600; word-break:break-word; }}
  .item-ctx {{ font-size:12px; color:var(--muted); margin-top:3px; }}
  .item-otherctx {{ font-size:11.5px; color:var(--muted); margin-top:4px; font-style:italic; }}
  .item-conf {{ font-size:11.5px; margin-top:6px; font-weight:600; }}
  .item-link {{ font-size:12px; color:var(--accent); text-decoration:none; display:inline-block; margin-top:8px; }}

  .drop-zone {{ cursor:pointer; }}
  .drop-zone:hover {{ background:#eef3ff; }}
  .drop-zone.dragover {{ background:#e0ebff; outline:3px dashed var(--accent); outline-offset:-6px; }}
  .drop-placeholder {{ color:#b7bcc6; font-size:14px; text-align:center; }}
  .drop-placeholder .sub2 {{ font-size:11.5px; margin-top:4px; opacity:.85; }}
  .clear-pick {{ position:absolute; top:10px; right:10px; width:28px; height:28px; border-radius:50%; border:none; background:rgba(0,0,0,.55); color:#fff; font-size:16px; cursor:pointer; z-index:2; }}

  .ss-fields {{ margin-top:12px; padding-top:12px; border-top:1px solid var(--border); }}
  .ss-field {{ margin-bottom:10px; }}
  .ss-field label {{ display:block; font-size:11px; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); margin-bottom:4px; font-weight:600; }}
  .ss-field input {{ width:100%; font-size:13px; padding:7px 9px; border:1px solid var(--border); border-radius:6px; }}
  .ss-field input:focus {{ outline:none; border-color:var(--accent); }}
  .ss-hint {{ font-size:10.5px; color:var(--muted); margin-top:3px; }}

  .bottom-nav {{ display:flex; justify-content:center; gap:16px; margin-top:28px; }}
</style>
</head>
<body>
<header>
  <h1>MHC Photography — Replacement Reviewer</h1>
  <span class="sub">{grand_total} unique photographs (illustrations removed, duplicates collapsed from {total_underlying} raw entries)</span>
</header>
<div class="toolbar">
  <div class="progress-wrap">
    <span id="progressText">0 / {grand_total} picked</span>
    <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
  </div>
  <select id="catJump"></select>
  <button class="btn" id="firstUnpickedBtn">Jump to first unpicked</button>
  <button class="btn" id="exportBtn">Export picks (CSV)</button>
  <button class="btn danger" id="clearAllBtn">Clear all picks</button>
</div>
<div class="nav-strip">
  <button class="navbtn" id="prevBtn">← Prev</button>
  <div class="position" id="positionText"></div>
  <button class="navbtn" id="nextBtn">Next →</button>
</div>
<main>
  <div class="compare">
    <div class="pane">
      <div class="pane-head">Current</div>
      <div class="big-media"><img id="currentImg" src="" alt=""></div>
      <div class="pane-body">
        <div class="item-name" id="itemName"></div>
        <div class="item-ctx" id="itemCtx"></div>
        <div class="item-otherctx" id="itemOtherCtx"></div>
        <div class="item-conf" id="itemConf"></div>
        <a class="item-link" id="itemLink" href="#" target="_blank" rel="noopener">open current image ↗</a>
      </div>
    </div>
    <div class="pane">
      <div class="pane-head replacement-head">Replacement</div>
      <div class="big-media drop-zone" id="dropZone" tabindex="0" role="button" aria-label="Add replacement image">
        <div class="drop-placeholder" id="dropPlaceholder">+ add pick<div class="sub2">click or drag image file</div></div>
        <img id="pickImg" style="display:none">
        <button class="clear-pick" id="clearPickBtn" style="display:none" title="Remove pick">×</button>
        <input type="file" id="pickInput" accept="image/*" style="display:none">
      </div>
      <div class="pane-body">
        <div class="ss-fields">
          <div class="ss-field">
            <label>Shutterstock file name</label>
            <input type="text" id="ssName" placeholder="e.g. young-female-athletes-cheering">
          </div>
          <div class="ss-field">
            <label>Shutterstock ID #</label>
            <input type="text" id="ssId" placeholder="e.g. 463417910">
            <div class="ss-hint">Auto-filled from the dropped filename when Shutterstock's own download name is used — double-check or edit if it looks wrong.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-nav">
    <button class="navbtn" id="prevBtn2">← Prev</button>
    <button class="navbtn" id="nextBtn2">Next →</button>
  </div>
</main>
<script>
(function() {{
  var ITEMS = {items_json};
  var CAT_START = {cat_start_json};
  var CAT_COUNTS = {cat_counts_json};
  var TOTAL = ITEMS.length;

  var DB_NAME = 'mhc-photo-picks-dedup';
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
  function idbAllKeys() {{
    return dbp.then(function(db) {{
      return new Promise(function(resolve, reject) {{
        var tx = db.transaction(STORE, 'readonly');
        var store = tx.objectStore(STORE);
        var out = {{}};
        var req = store.openCursor();
        req.onsuccess = function(e) {{
          var cur = e.target.result;
          if (cur) {{ out[cur.key] = cur.value; cur.continue(); }}
          else resolve(out);
        }};
        req.onerror = function() {{ reject(req.error); }};
      }});
    }});
  }}

  // parse a shutterstock-style filename: e.g. stock-photo-young-female-athletes-cheering-1855878136.jpg
  function parseShutterstockName(filename) {{
    var base = filename.replace(/\\.[a-zA-Z0-9]+$/, '');
    var m = base.match(/^(.*?)-?(\\d{{7,12}})$/);
    if (m) {{
      var namePart = m[1].replace(/^stock-photo-/, '').replace(/-/g, ' ').trim();
      return {{ name: namePart, id: m[2] }};
    }}
    return {{ name: base, id: '' }};
  }}

  var currentIndex = 0;
  var pickedKeys = {{}};

  var els = {{
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    catJump: document.getElementById('catJump'),
    positionText: document.getElementById('positionText'),
    currentImg: document.getElementById('currentImg'),
    itemName: document.getElementById('itemName'),
    itemCtx: document.getElementById('itemCtx'),
    itemOtherCtx: document.getElementById('itemOtherCtx'),
    itemConf: document.getElementById('itemConf'),
    itemLink: document.getElementById('itemLink'),
    dropZone: document.getElementById('dropZone'),
    dropPlaceholder: document.getElementById('dropPlaceholder'),
    pickImg: document.getElementById('pickImg'),
    clearPickBtn: document.getElementById('clearPickBtn'),
    pickInput: document.getElementById('pickInput'),
    ssName: document.getElementById('ssName'),
    ssId: document.getElementById('ssId'),
  }};

  Object.keys(CAT_START).forEach(function(cat) {{
    var opt = document.createElement('option');
    opt.value = CAT_START[cat];
    opt.textContent = cat.replace(/_/g,' ') + ' (' + CAT_COUNTS[cat] + ')';
    els.catJump.appendChild(opt);
  }});

  function updateProgress() {{
    var n = Object.keys(pickedKeys).length;
    els.progressText.textContent = n + ' / ' + TOTAL + ' picked';
    els.progressFill.style.width = (TOTAL ? (n/TOTAL*100) : 0) + '%';
  }}

  function render() {{
    var it = ITEMS[currentIndex];
    els.currentImg.src = it.url;
    els.itemName.textContent = it.name;
    els.itemCtx.textContent = it.ctx;
    if (it.otherCtx && it.otherCtx.length) {{
      els.itemOtherCtx.textContent = 'Also used in: ' + it.otherCtx.join(', ');
      els.itemOtherCtx.style.display = 'block';
    }} else {{
      els.itemOtherCtx.style.display = 'none';
    }}
    els.itemConf.textContent = it.confLabel;
    els.itemConf.style.color = it.confColor;
    els.itemLink.href = it.url;
    els.positionText.innerHTML = it.cat.replace(/_/g,' ') + ' &middot; item <b>' + (currentIndex+1) + '</b> of ' + TOTAL;

    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('prevBtn2').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === TOTAL-1;
    document.getElementById('nextBtn2').disabled = currentIndex === TOTAL-1;

    var val = pickedKeys[it.name];
    if (val) {{
      var url = val._url || URL.createObjectURL(val.blob);
      val._url = url;
      els.pickImg.src = url;
      els.pickImg.style.display = 'block';
      els.dropPlaceholder.style.display = 'none';
      els.clearPickBtn.style.display = 'block';
      els.ssName.value = val.ssName || '';
      els.ssId.value = val.ssId || '';
    }} else {{
      els.pickImg.style.display = 'none';
      els.pickImg.src = '';
      els.dropPlaceholder.style.display = 'block';
      els.clearPickBtn.style.display = 'none';
      els.ssName.value = '';
      els.ssId.value = '';
    }}
  }}

  function goTo(idx) {{
    if (idx < 0 || idx >= TOTAL) return;
    currentIndex = idx;
    render();
  }}

  function handleFile(file) {{
    if (!file || file.type.indexOf('image/') !== 0) return;
    var it = ITEMS[currentIndex];
    var parsed = parseShutterstockName(file.name);
    var existing = pickedKeys[it.name] || {{}};
    var val = {{
      blob: file,
      filename: file.name,
      ssName: existing.ssName !== undefined && existing.ssNameEdited ? existing.ssName : parsed.name,
      ssId: existing.ssId !== undefined && existing.ssIdEdited ? existing.ssId : parsed.id,
    }};
    idbSet(it.name, val).then(function() {{
      pickedKeys[it.name] = val;
      updateProgress();
      render();
    }});
  }}

  els.dropZone.addEventListener('click', function() {{ els.pickInput.click(); }});
  els.dropZone.addEventListener('keydown', function(e) {{
    if (e.key === 'Enter' || e.key === ' ') {{ e.preventDefault(); els.pickInput.click(); }}
  }});
  els.pickInput.addEventListener('change', function() {{
    if (els.pickInput.files && els.pickInput.files[0]) handleFile(els.pickInput.files[0]);
  }});
  els.dropZone.addEventListener('dragover', function(e) {{ e.preventDefault(); els.dropZone.classList.add('dragover'); }});
  els.dropZone.addEventListener('dragleave', function() {{ els.dropZone.classList.remove('dragover'); }});
  els.dropZone.addEventListener('drop', function(e) {{
    e.preventDefault();
    els.dropZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }});
  els.clearPickBtn.addEventListener('click', function(e) {{
    e.stopPropagation();
    var it = ITEMS[currentIndex];
    idbDelete(it.name).then(function() {{
      delete pickedKeys[it.name];
      updateProgress();
      render();
    }});
  }});

  function persistFieldEdit() {{
    var it = ITEMS[currentIndex];
    var val = pickedKeys[it.name];
    if (!val) return;
    val.ssName = els.ssName.value;
    val.ssId = els.ssId.value;
    val.ssNameEdited = true;
    val.ssIdEdited = true;
    idbSet(it.name, val);
  }}
  els.ssName.addEventListener('input', persistFieldEdit);
  els.ssId.addEventListener('input', persistFieldEdit);

  document.getElementById('prevBtn').addEventListener('click', function() {{ goTo(currentIndex-1); }});
  document.getElementById('prevBtn2').addEventListener('click', function() {{ goTo(currentIndex-1); }});
  document.getElementById('nextBtn').addEventListener('click', function() {{ goTo(currentIndex+1); }});
  document.getElementById('nextBtn2').addEventListener('click', function() {{ goTo(currentIndex+1); }});
  els.catJump.addEventListener('change', function() {{ goTo(parseInt(els.catJump.value, 10)); }});

  document.getElementById('firstUnpickedBtn').addEventListener('click', function() {{
    for (var i = 0; i < TOTAL; i++) {{
      if (!pickedKeys[ITEMS[i].name]) {{ goTo(i); return; }}
    }}
    alert('Every item has a pick!');
  }});

  document.addEventListener('keydown', function(e) {{
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (e.key === 'ArrowLeft') goTo(currentIndex-1);
    if (e.key === 'ArrowRight') goTo(currentIndex+1);
  }});

  document.getElementById('exportBtn').addEventListener('click', function() {{
    idbAllKeys().then(function(all) {{
      var byName = {{}};
      ITEMS.forEach(function(it) {{ byName[it.name] = it; }});
      var lines = ['current_url,replacement_filename,shutterstock_name,shutterstock_id'];
      Object.keys(all).forEach(function(name) {{
        var v = all[name];
        var it = byName[name];
        var urls = it ? it.allUrls : [name];
        function q(s) {{ return '"' + String(s||'').replace(/"/g,'""') + '"'; }}
        urls.forEach(function(u) {{
          lines.push(q(u) + ',' + q(v.filename) + ',' + q(v.ssName) + ',' + q(v.ssId));
        }});
      }});
      var blob = new Blob([lines.join('\\n')], {{type:'text/csv'}});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'mhc-photo-picks-deduped.csv';
      document.body.appendChild(a); a.click(); a.remove();
    }});
  }});

  document.getElementById('clearAllBtn').addEventListener('click', function() {{
    idbAllKeys().then(function(all) {{
      var n = Object.keys(all).length;
      if (!confirm('Clear all ' + n + ' picks? This cannot be undone.')) return;
      dbp.then(function(db) {{
        var tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).clear();
        tx.oncomplete = function() {{ location.reload(); }};
      }});
    }});
  }});

  idbAllKeys().then(function(all) {{
    pickedKeys = all;
    updateProgress();
    render();
  }});
}})();
</script>
</body>
</html>
"""

with open("photography-only-deduped.html", "w") as f:
    f.write(html_out)
print("wrote photography-only-deduped.html")
print("raw photo-classified entries:", sum(1 for d in data if d["category"] is not None))
print("illustrations removed:", illustration_count)
print("real photo entries:", sum(len(v) for v in buckets.values()))
print("unique review items (deduped):", grand_total)
