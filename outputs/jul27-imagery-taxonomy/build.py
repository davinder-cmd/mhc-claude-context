#!/usr/bin/env python3
"""Builds the imagery taxonomy index + gallery from projects/imagery.
Tags were assigned by visual review of all 276 files (contact-sheet pass, Jul 27).
Re-run after adding images: python3 build.py
"""
import os, json, csv
from PIL import Image

SRC = "/Users/davinderrehal/@claude/projects/imagery"
OUT = os.path.dirname(os.path.abspath(__file__))
THUMBS = os.path.join(OUT, "thumbs")
os.makedirs(THUMBS, exist_ok=True)

# ---------------------------------------------------------------- taxonomies
SUBJECT = {
  "mind":      ("Mind & recovery",        "Meditation, breath, stillness, rest, sleep, reading"),
  "move":      ("Movement & cardio",      "Run, walk, hike-as-exercise, cycle, stretch, class"),
  "strength":  ("Strength",               "Gym, weights, resistance"),
  "play":      ("Play & recreation",      "Skate, tennis, ball, unstructured fun"),
  "outdoors":  ("Outdoors & place",       "Landscape-led; nature is the subject, people are scale"),
  "family":    ("Family & life stage",    "Parents + kids, multi-gen, maternity, newborn"),
  "social":    ("Friends & community",    "Peer groups, couples, shared celebration, support"),
  "nutrition": ("Food & nutrition",       "Meals, cooking, produce, hydration"),
  "digital":   ("App & device in use",    "Phone / tablet / laptop in hand — the product moment"),
  "data":      ("Wearables & health data","Watch glance, tracking, dashboards, in-app screens"),
  "clinical":  ("Clinical & care",        "Care team, telehealth, symptoms, prevention"),
  "work":      ("Work & workplace",       "Desk, office, collaboration, work stress, service"),
  "pets":      ("Pets & companionship",   "Dogs as motivation, comfort, routine"),
  "portrait":  ("Portrait & symbol",      "Clean-bg smiles, heart-hands, confetti — affect only"),
}
STAGE = {
  "s1": ("1 · Struggle",   "Symptom, stress, pre-decision. Why someone starts."),
  "s2": ("2 · First step", "Prep, enrolling, opening the app, shoes on."),
  "s3": ("3 · Effort",     "Mid-activity. Working, sweating, concentrating."),
  "s4": ("4 · Progress",   "Checking, logging, comparing, streak-aware."),
  "s5": ("5 · Milestone",  "Summit, high-five, confetti, arms up."),
  "s6": ("6 · Maintenance","Unlabored everyday life. The point of all of it."),
}
CROP = {
  "H": ("Hero-capable",   "Wide composition, off-centre subject, negative sky/ground. Survives the 4:1 letterbox at 1440 and holds overlay text."),
  "T": ("Tile / card",    "Centre-weighted single subject. Reads at 240–400dp wide, 16:9 or 3:2."),
  "N": ("Thumbnail only", "Tight close-up or portrait file. Dies in a letterbox; excels at 4:3 / 1:1 80–160dp."),
  "X": ("Retire",         "Off-brand, dated, literal metaphor, or redundant. Do not place."),
}

# idx: (subject, stage, crop, note)
T = {
1:("move","s6","T",""),2:("move","s3","T",""),3:("digital","s2","N","studio teal"),
4:("pets","s6","T",""),5:("work","s6","T",""),6:("work","s6","T",""),
7:("outdoors","s6","H","no face — place as subject"),8:("family","s6","T",""),
9:("nutrition","s6","T","child"),10:("work","s5","T",""),11:("social","s6","N","portrait file"),
12:("play","s6","N","portrait file; dupe of 13"),13:("play","s6","T","dupe of 12"),
14:("move","s3","H",""),15:("move","s3","H","legs only"),16:("mind","s6","T","reading + place"),
17:("mind","s3","H","hands close but wide frame"),18:("social","s3","T",""),
19:("digital","s6","T",""),20:("digital","s6","T","wearable + phone"),21:("digital","s6","T",""),
22:("move","s3","T","detail — bike wheel"),23:("mind","s6","T",""),24:("digital","s2","N","hands only"),
25:("move","s6","N",""),26:("outdoors","s6","T",""),27:("mind","s6","N","book detail"),
28:("move","s3","H","silhouette"),29:("work","s4","T","charts on screen"),
30:("nutrition","s6","T","styled flat lay"),31:("digital","s6","T",""),32:("social","s6","T",""),
33:("nutrition","s6","T",""),34:("play","s5","H",""),35:("move","s3","T","hydration"),
36:("data","s4","T","two members comparing — challenges"),37:("family","s6","T",""),
38:("work","s5","T",""),39:("move","s3","T","armband phone"),40:("digital","s6","T",""),
41:("social","s6","T","couple"),42:("outdoors","s5","T",""),43:("move","s2","H",""),
44:("outdoors","s6","H","no face"),45:("mind","s3","H",""),46:("move","s2","H",""),
47:("digital","s6","T",""),48:("family","s3","H","family yoga"),49:("social","s5","H",""),
50:("social","s5","T","near-dupe of 51"),51:("social","s5","H","near-dupe of 50"),
52:("family","s5","T",""),53:("digital","s6","T",""),54:("data","s4","N",""),
55:("digital","s6","T","tablet + card — rewards / redemption"),56:("nutrition","s3","T","cooking"),
57:("digital","s6","T",""),58:("outdoors","s5","H",""),59:("family","s6","T",""),
60:("nutrition","s6","T",""),61:("mind","s6","T","music"),62:("data","s4","N","wearable detail"),
63:("digital","s6","T",""),64:("family","s6","T",""),65:("mind","s6","T",""),
66:("family","s6","T","maternity + tablet"),67:("family","s6","T",""),
68:("nutrition","s6","N","heart carved in apple — symbol"),69:("pets","s6","T",""),70:("pets","s6","T",""),
71:("family","s6","T",""),72:("move","s3","T",""),73:("move","s3","T",""),74:("data","s4","T",""),
75:("digital","s6","T",""),76:("social","s5","T",""),77:("move","s5","T",""),
78:("mind","s6","T","legs in surf"),79:("family","s6","T",""),80:("family","s6","T",""),
81:("pets","s6","X","dog in goggles — novelty"),82:("work","s6","T","also reads as telehealth"),
83:("family","s6","T",""),84:("mind","s6","T","waking / sleep"),85:("move","s2","T","home workout + laptop"),
86:("play","s6","T","child"),87:("pets","s6","T",""),88:("digital","s6","T",""),
89:("social","s6","T",""),90:("mind","s6","T","breath"),91:("move","s3","H","group class"),
92:("digital","s6","T","hike + phone"),93:("mind","s6","T","hammock + dog"),94:("pets","s6","T",""),
95:("pets","s6","T",""),96:("clinical","s2","N","chart + stethoscope"),97:("social","s6","T",""),
98:("family","s6","T",""),99:("social","s6","T","support"),100:("social","s6","T",""),
101:("portrait","s5","T","heart hands — 1 of 4"),102:("portrait","s6","T",""),103:("portrait","s6","T",""),
104:("digital","s6","T",""),105:("social","s5","T",""),106:("family","s6","T",""),
107:("nutrition","s3","T","serving greens"),108:("family","s6","T",""),109:("family","s6","H","sky negative space"),
110:("data","s4","N","in-app heart rate — will date"),111:("digital","s6","T","gym + phone"),
112:("family","s6","H","near-dupe of 113"),113:("family","s6","T","near-dupe of 112"),
114:("portrait","s6","X","house key — not a health subject"),115:("social","s6","T",""),
116:("mind","s3","H",""),117:("family","s6","H",""),118:("work","s6","T",""),
119:("nutrition","s6","T","child + garden"),120:("mind","s6","T",""),121:("digital","s6","T",""),
122:("nutrition","s6","T",""),123:("social","s6","T",""),124:("social","s6","T",""),
125:("data","s4","T",""),126:("work","s6","T",""),127:("work","s6","N","portrait file"),
128:("move","s5","T",""),129:("digital","s2","N","portrait file; home gym"),130:("mind","s3","T",""),
131:("move","s3","T",""),132:("digital","s6","T",""),133:("nutrition","s4","T","food + dumbbell"),
134:("family","s6","T",""),135:("digital","s6","T",""),136:("nutrition","s6","X","tomatoes on eyes — dated"),
137:("outdoors","s6","H","no people"),138:("clinical","s2","T","sun protection"),
139:("portrait","s6","T",""),140:("nutrition","s6","T","studio pink bg"),141:("move","s3","T","size representation"),
142:("move","s3","T",""),143:("portrait","s5","N","heart hands — 2 of 4"),144:("nutrition","s6","T",""),
145:("mind","s6","H","book still life"),146:("work","s6","T","security graphic — privacy/consent only"),
147:("nutrition","s6","T",""),148:("work","s6","T","headset — service, not member"),
149:("family","s6","T","multi-gen + treat"),150:("portrait","s6","T",""),151:("social","s6","H","multi-gen"),
152:("work","s6","T","near-dupe of 148"),153:("move","s3","T","group yoga"),154:("social","s5","T",""),
155:("outdoors","s3","H","effort"),156:("work","s6","T",""),157:("digital","s6","N","portrait; dupe of 158"),
158:("digital","s6","T","dupe of 157"),159:("family","s6","T","caregiving"),160:("move","s3","T","size representation"),
161:("portrait","s5","T","heart hands — 3 of 4"),162:("play","s5","T","55+ / tennis"),
163:("pets","s6","H","wide beach"),164:("clinical","s2","T","visit"),165:("family","s5","H","kids"),
166:("portrait","s5","T","confetti — rewards"),167:("family","s6","T",""),168:("social","s6","T","cold weather"),
169:("strength","s3","T",""),170:("clinical","s4","T","clinician dashboard"),171:("work","s6","T",""),
172:("work","s6","T",""),173:("work","s6","T",""),174:("social","s6","T",""),
175:("clinical","s6","T","clinician + phone"),176:("strength","s3","N","hands + barbell"),
177:("nutrition","s6","N",""),178:("mind","s6","T","dupe of 179"),179:("mind","s6","T","dupe of 178"),
180:("mind","s3","N","portrait file"),181:("mind","s6","T",""),182:("mind","s6","T",""),
183:("mind","s6","T","reading"),184:("nutrition","s6","T","flat lay"),185:("digital","s6","T",""),
186:("family","s6","T","sport"),187:("social","s6","T","55+ couple"),188:("play","s6","T","child"),
189:("outdoors","s3","T","hydration"),190:("digital","s6","N","portrait file"),191:("portrait","s6","T",""),
192:("mind","s6","T","studio"),193:("social","s6","T",""),194:("work","s6","T",""),
195:("social","s6","T",""),196:("family","s5","T",""),197:("move","s3","N","portrait file"),
198:("mind","s1","T","stress at desk"),199:("mind","s3","N","hands only"),200:("move","s3","N","portrait file"),
201:("clinical","s6","T",""),202:("move","s2","N","portrait file; 55+"),203:("clinical","s1","T","low-back pain — MSK"),
204:("family","s6","H",""),205:("move","s6","T",""),206:("mind","s6","H",""),
207:("move","s2","T","home yoga + dog"),208:("outdoors","s5","H",""),209:("mind","s5","H",""),
210:("family","s6","T","maternity"),211:("digital","s6","T",""),212:("move","s3","T",""),
213:("move","s3","T","effort / breathless"),214:("outdoors","s5","H",""),215:("work","s6","T",""),
216:("move","s4","T","stairs — steps"),217:("social","s5","T",""),218:("portrait","s6","T",""),
219:("mind","s3","N","portrait file"),220:("work","s1","T","burnout"),221:("outdoors","s5","H",""),
222:("move","s3","T","hydration"),223:("work","s6","T",""),224:("social","s5","H","helping hand — portrait file"),
225:("family","s6","T",""),226:("outdoors","s3","H",""),227:("family","s6","T",""),
228:("mind","s6","H",""),229:("move","s3","H",""),230:("work","s1","T","overwhelm"),
231:("data","s4","T",""),232:("digital","s6","T",""),233:("digital","s2","N","hands only"),
234:("family","s6","T",""),235:("move","s4","T","stairs — steps"),236:("digital","s6","T",""),
237:("move","s2","T",""),238:("mind","s6","H",""),239:("strength","s2","T",""),
240:("family","s6","T","cycling"),241:("work","s1","T",""),242:("family","s6","T",""),
243:("nutrition","s6","T",""),244:("social","s6","T",""),245:("move","s6","T",""),
246:("nutrition","s6","T","flat lay"),247:("nutrition","s6","T",""),248:("outdoors","s3","N","portrait file"),
249:("move","s3","H","dupe of 250"),250:("move","s3","H","dupe of 249"),251:("digital","s6","T",""),
252:("portrait","s6","T",""),253:("digital","s2","N","portrait; studio teal"),254:("move","s5","T",""),
255:("nutrition","s6","T",""),256:("social","s6","T",""),257:("family","s6","T",""),
258:("digital","s2","T","studio teal"),259:("family","s6","T",""),260:("mind","s6","T","studio"),
261:("pets","s6","T","studio pink bg"),262:("family","s3","T","home movement with child"),
263:("family","s6","T",""),264:("pets","s6","T",""),265:("work","s6","T","studio"),
266:("digital","s6","T",""),267:("digital","s6","T",""),268:("work","s6","T",""),
269:("mind","s5","H",""),270:("work","s6","X","suit meditating on office chair — cliché"),
271:("outdoors","s6","H","POV hand"),272:("family","s6","T","maternity"),273:("family","s6","N","newborn"),
274:("portrait","s5","T","heart hands — 4 of 4"),275:("portrait","s6","T",""),276:("digital","s6","H",""),
}

# (subject, stage) -> feature surfaces it can serve
def features(g, s):
    f = []
    if g in ("mind",):            f += ["DCP · Depression/Anxiety", "Healthy Habits · Mindfulness"]
    if g in ("move","strength"):  f += ["Healthy Habits · Activity", "Challenges"]
    if g == "nutrition":          f += ["Healthy Habits · Nutrition", "DCP · Diabetes"]
    if g == "data":               f += ["Health Data", "Biometrics"]
    if g == "clinical":           f += ["Conditions", "DCP · Care"]
    if g == "digital":            f += ["Journeys · Onboarding", "Empty states"]
    if g == "work":               f += ["Broadcast · Employer"]
    if g in ("family","pets","outdoors","play","social"): f += ["Broadcast · Seasonal", "Rewards"]
    if g == "portrait":           f += ["Rewards", "Challenges"]
    if s == "s1":                 f += ["Conditions · Entry"]
    if s == "s5":                 f += ["Rewards · Earned", "Milestone"]
    if s == "s2":                 f += ["Journeys · Enrollment"]
    if g == "outdoors":           f += ["Destination Challenges"]
    return sorted(set(f))

# ---------------------------------------------------------------- build
manifest = json.load(open("/private/tmp/claude-501/-Users-davinderrehal--claude/044278af-6e14-4364-8bed-513e75733eb8/scratchpad/sheets/manifest.json"))
rows = []
for idx in sorted(T):
    fn = manifest[str(idx)]
    g, s, c, note = T[idx]
    thumb = "t%03d.jpg" % idx
    tp = os.path.join(THUMBS, thumb)
    im = Image.open(os.path.join(SRC, fn)); w, h = im.size
    if not os.path.exists(tp):
        im.draft("RGB", (900, 900)); im = im.convert("RGB")
        im.thumbnail((480, 480)); im.save(tp, quality=78, optimize=True)
    rows.append(dict(idx=idx, file=fn, thumb=thumb, w=w, h=h, ratio=round(w/h, 3),
                     subject=g, stage=s, crop=c, note=note, features="; ".join(features(g, s))))

with open(os.path.join(OUT, "imagery-index.csv"), "w", newline="") as f:
    wr = csv.DictWriter(f, fieldnames=["idx","file","subject","stage","crop","features","note","w","h","ratio","thumb"])
    wr.writeheader()
    for r in rows: wr.writerow(r)

# ---------------------------------------------------------------- gallery
def group_blocks(key, defs, order=None):
    keys = order or list(defs)
    out = []
    for k in keys:
        items = [r for r in rows if r[key] == k]
        if items: out.append((defs[k][0], defs[k][1], len(items), items))
    return out

VIEWS = [
    ("subject", "Subject", "What the picture is of. The library&rsquo;s natural shape.",
     group_blocks("subject", SUBJECT)),
    ("crop", "Surface fit", "What our containers can actually do with it (image-sizing.md).",
     group_blocks("crop", CROP, ["H","T","N","X"])),
    ("stage", "Journey stage", "Where the member is. Lets a card&rsquo;s photo match its message.",
     group_blocks("stage", STAGE, ["s1","s2","s3","s4","s5","s6"])),
]

def cell(r):
    badges = f'<i>{r["crop"]}</i><i>{r["stage"][1]}</i>'
    return (f'<figure><img src="thumbs/{r["thumb"]}" alt="" loading="lazy">'
            f'<span class="n">{r["idx"]}</span><span class="b">{badges}</span>'
            f'<figcaption>{r["file"]}{" · " + r["note"] if r["note"] else ""}</figcaption></figure>')

html = ['<title>MHC imagery — groupings v1</title>', '<style>', """
:root{--bg:#faf8f5;--card:#fff;--ink:#1c1b1a;--ink2:#5f5c58;--line:#e4e0da;--nav:#0f2f4f;--acc:#b45309}
@media (prefers-color-scheme:dark){:root{--bg:#161514;--card:#1f1e1d;--ink:#f2efeb;--ink2:#a9a5a0;--line:#312f2d}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);
font:15px/1.5 -apple-system,BlinkMacSystemFont,"SF Pro Text",Segoe UI,sans-serif}
header{padding:40px 32px 20px;max-width:1440px;margin:0 auto}
h1{font-size:28px;letter-spacing:-.02em;margin:0 0 6px}
.sub{color:var(--ink2);max-width:70ch;margin:0}
nav{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line);padding:0 32px}
nav div{max-width:1440px;margin:0 auto;display:flex;gap:4px}
button{appearance:none;border:0;background:none;font:inherit;font-weight:600;color:var(--ink2);
padding:14px 16px;cursor:pointer;border-bottom:2px solid transparent}
button[aria-selected=true]{color:var(--ink);border-color:var(--nav)}
main{max-width:1440px;margin:0 auto;padding:8px 32px 80px}
section{display:none}section.on{display:block}
h2{font-size:19px;margin:36px 0 2px;letter-spacing:-.01em}
h2 em{font-style:normal;color:var(--ink2);font-weight:400;font-size:14px;margin-left:8px}
.d{color:var(--ink2);margin:0 0 14px;font-size:14px}
.grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}
figure{margin:0;background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden;position:relative}
figure img{display:block;width:100%;height:132px;object-fit:cover}
.n{position:absolute;top:6px;left:6px;background:rgba(15,47,79,.92);color:#fff;font-size:11px;
font-weight:700;padding:2px 6px;border-radius:5px}
.b{position:absolute;top:6px;right:6px;display:flex;gap:4px}
.b i{font-style:normal;background:rgba(0,0,0,.62);color:#fff;font-size:10px;font-weight:700;
padding:2px 5px;border-radius:4px}
figcaption{padding:7px 9px;font-size:10.5px;color:var(--ink2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
"""[1:], '</style>',
 '<header><h1>MHC imagery library — groupings</h1>',
 f'<p class="sub">{len(rows)} files in <code>projects/imagery</code>, reviewed and tagged three ways. '
 'Badge top-right = surface fit (H hero / T tile / N thumbnail / X retire) and journey stage. '
 'Number top-left matches <code>imagery-index.csv</code>.</p></header>',
 '<nav><div>']
for i,(k,label,_,_) in enumerate(VIEWS):
    html.append(f'<button role="tab" aria-selected="{str(i==0).lower()}" onclick="go(\'{k}\')" id="b-{k}">{label}</button>')
html.append('</div></nav><main>')
for i,(k,label,desc,blocks) in enumerate(VIEWS):
    html.append(f'<section id="s-{k}" class="{"on" if i==0 else ""}"><p class="d" style="margin-top:18px">{desc}</p>')
    for name, note, n, items in blocks:
        html.append(f'<h2>{name}<em>{n}</em></h2><p class="d">{note}</p><div class="grid">')
        html += [cell(r) for r in items]
        html.append('</div>')
    html.append('</section>')
html.append('</main><script>function go(k){document.querySelectorAll("section").forEach(s=>s.classList.toggle("on",s.id=="s-"+k));'
            'document.querySelectorAll("[role=tab]").forEach(b=>b.setAttribute("aria-selected",b.id=="b-"+k));}</script>')
open(os.path.join(OUT, "imagery-groupings-v1.html"), "w").write("\n".join(html))

# ---------------------------------------------------------------- stats
from collections import Counter
print("subject:", Counter(r["subject"] for r in rows).most_common())
print("crop:", Counter(r["crop"] for r in rows).most_common())
print("stage:", Counter(r["stage"] for r in rows).most_common())
print("rows:", len(rows))
