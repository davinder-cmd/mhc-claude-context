#!/usr/bin/env python3
"""Renders the real CSS crop test — browser does object-fit:cover, not a simulation.
Verdicts from visual review of rendered 4:1 crops (see scratchpad/crops)."""
import csv
FAIL = [2,3,5,6,12,13,19,25,31,35,40,47,48,66,73,84,85,86,94,99,101,116,127,128,131,141,150,
        153,157,160,172,175,180,185,190,192,197,200,201,202,207,212,213,215,219,236,237,245,
        247,253,258,260,262,265,268,272]
MARG = [1,32,33,36,53,60,117,120,125,169,251,274]
rows = {int(r["idx"]): r for r in csv.DictReader(open("imagery-index.csv"))}
PORTRAIT = [i for i,r in rows.items() if float(r["ratio"]) < 0.95]

CONT = [("3:2 split hero / editorial card","3/2","600×400 · no crop"),
        ("16:9 program tile","16/9","keeps 84% of height"),
        ("4:1 full-bleed hero @1440","4/1","keeps 37.5% of height"),
        ("6:1 page header 1440×240","6/1","keeps 25% of height")]

def block(idx):
    r = rows[idx]
    cells = "".join(
        f'<div class="c"><div class="box" style="aspect-ratio:{ar}"><img src="thumbs/{r["thumb"]}" alt=""></div></div>'
        for _, ar, _ in CONT)
    tags = []
    if idx in FAIL: tags.append('<b class="f">fails 4:1</b>')
    if idx in MARG: tags.append('<b class="m">marginal</b>')
    if idx in PORTRAIT: tags.append('<b class="p">portrait file</b>')
    return (f'<article><h3>#{idx} <em>{r["file"]}</em> {"".join(tags)}</h3>'
            f'<div class="row">{cells}</div></article>')

GROUPS = [("Fails the full-bleed crop", FAIL,
           "Head cut through the face, or the subject reduces to an unidentifiable body part. "
           "Usable in the split hero, tiles, cards and thumbnails — never full-bleed, never a page header."),
          ("Marginal", MARG,
           "Survives because the object (bottle, apple, phone, dumbbell) carries the meaning once the face is gone. "
           "Acceptable only where the object <em>is</em> the message."),
          ("Portrait files", PORTRAIT,
           "0.67 ratio. A 4:1 container keeps 16.7% of the frame height. Thumbnail / 1:1 only, or re-crop from the original.")]

html = ['<!doctype html>','<meta charset="utf-8">','<meta name="viewport" content="width=device-width,initial-scale=1">',
        '<title>Crop test — imagery vs MHC containers</title>','<style>'+"""
:root{--bg:#faf8f5;--card:#fff;--ink:#1c1b1a;--ink2:#5f5c58;--line:#e4e0da;--f:#a8322b;--m:#8a6414;--p:#2d5f7a}
@media (prefers-color-scheme:dark){:root{--bg:#161514;--card:#1f1e1d;--ink:#f2efeb;--ink2:#a9a5a0;--line:#312f2d;
--f:#e5807a;--m:#d9ac52;--p:#79b0cd}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);
font:15px/1.5 -apple-system,BlinkMacSystemFont,"SF Pro Text",Segoe UI,sans-serif}
.wrap{max-width:1400px;margin:0 auto;padding:40px 32px 80px}
h1{font-size:28px;letter-spacing:-.02em;margin:0 0 8px}
.lede{color:var(--ink2);max-width:78ch}
.legend{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:28px 0 8px;
padding:14px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.legend div{font-size:12.5px;color:var(--ink2)}.legend strong{display:block;color:var(--ink);font-size:13px}
h2{font-size:20px;margin:44px 0 4px}h2 span{color:var(--ink2);font-weight:400;font-size:14px}
.gd{color:var(--ink2);font-size:14px;margin:0 0 18px;max-width:78ch}
article{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 14px 14px;margin-bottom:14px}
h3{font-size:13px;margin:0 0 10px;font-weight:700;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
h3 em{font-style:normal;font-weight:400;color:var(--ink2);font-size:11.5px}
h3 b{font-size:10.5px;padding:2px 7px;border-radius:20px;border:1px solid currentColor;font-weight:700}
.f{color:var(--f)}.m{color:var(--m)}.p{color:var(--p)}
.row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;align-items:start}
.box{width:100%;overflow:hidden;border-radius:6px;background:#0002}
.box img{width:100%;height:100%;object-fit:cover;display:block}
@media(max-width:860px){.row,.legend{grid-template-columns:repeat(2,1fr)}}
"""+'</style>','<div class="wrap">',
 '<h1>Crop test — the library against our own containers</h1>',
 '<p class="lede">Every image below is the same file rendered into four containers with '
 '<code>object-fit: cover</code> — the browser is doing the crop, not a simulation. Container ratios come from '
 '<code>design/foundation/image-sizing.md</code>. Resize the window: the two right-hand columns are what break.</p>',
 '<div class="legend">'] 
for name, ar, note in CONT:
    html.append(f'<div><strong>{name}</strong>{note}</div>')
html.append('</div>')
for title, ids, note in GROUPS:
    html.append(f'<h2>{title} <span>{len(ids)}</span></h2><p class="gd">{note}</p>')
    html += [block(i) for i in sorted(ids)]
html.append('</div>')
open("crop-test-v1.html","w").write("\n".join(html))
print("fails",len(FAIL),"marginal",len(MARG),"portrait",len(PORTRAIT))
