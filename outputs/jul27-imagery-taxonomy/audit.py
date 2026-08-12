#!/usr/bin/env python3
"""Audits projects/imagery against Photography.md + image-sizing.md crop mechanics.
Pure PIL (no numpy). Simulates object-fit:cover at each documented container."""
import csv, os, colorsys
from PIL import Image, ImageFilter

rows = list(csv.DictReader(open("imagery-index.csv")))
W, H = 96, 64                      # analysis raster
def band(src_ratio, dst_ratio):
    """object-fit:cover — returns retained fraction + axis."""
    if src_ratio < dst_ratio:      # crop top/bottom
        return src_ratio/dst_ratio, "y"
    return dst_ratio/src_ratio, "x"

out = []
for r in rows:
    p = os.path.join("thumbs", r["thumb"])
    im = Image.open(p).convert("RGB").resize((W, H))
    px = list(im.getdata())
    g = im.convert("L")
    e = list(g.filter(ImageFilter.FIND_EDGES).getdata())
    ratio = float(r["ratio"])

    # ---- edge-energy profiles
    rowE = [0.0]*H; colE = [0.0]*W
    for i, v in enumerate(e):
        y, x = divmod(i, W)
        if 0 < y < H-1 and 0 < x < W-1:      # ignore FIND_EDGES border artefact
            rowE[y] += v; colE[x] += v
    tot = sum(rowE) or 1

    def keep(dst):
        f, ax = band(ratio, dst)
        prof, n = (rowE, H) if ax == "y" else (colE, W)
        lo = int(n*(1-f)/2); hi = n - lo
        s = sum(prof[lo:hi]) / (sum(prof) or 1)
        return s, f, (s/f if f else 0)       # kept-energy, band size, concentration

    heroK, heroF, heroC = keep(4.0)          # full-bleed hero @1440 (3:2 capped 360)
    hdrK,  hdrF,  hdrC  = keep(6.0)          # page header 1440×240
    tileK, tileF, tileC = keep(16/9)         # program tile
    sqK,   sqF,   sqC   = keep(1.0)          # 1:1 thumbnail / avatar

    # NOTE: a skin-tone face proxy was tried here and discarded — golden-hour
    # backgrounds register as skin. Face/crop verdicts come from visual review of
    # rendered 4:1 crops instead (see croptest.py + editorial-audit.md).
    sfrac=sy=lost=0

    # ---- exposure + colour
    L = [0.299*R+0.587*G+0.114*B for R, G, B in px]
    mean = sum(L)/len(L)
    sd = (sum((v-mean)**2 for v in L)/len(L))**.5
    blown = sum(1 for v in L if v > 245)/len(L)
    sats = [colorsys.rgb_to_hsv(R/255, G/255, B/255)[1] for R, G, B in px]
    sat = sum(sats)/len(sats)
    Rm = sum(p[0] for p in px)/len(px); Bm = sum(p[2] for p in px)/len(px)
    # border ring = backdrop proxy
    ring = [px[i] for i in range(len(px)) if (lambda y, x: y < H*.08 or y > H*.92 or x < W*.08 or x > W*.92)(*divmod(i, W))]
    rs = [colorsys.rgb_to_hsv(R/255, G/255, B/255)[1] for R, G, B in ring]
    ringsat = sum(rs)/len(rs)

    out.append(dict(idx=int(r["idx"]), file=r["file"], subject=r["subject"], stage=r["stage"],
        crop=r["crop"], ratio=ratio, heroC=round(heroC,3), hdrC=round(hdrC,3),
        tileC=round(tileC,3), sqC=round(sqC,3), skin=round(sfrac,3), skinY=round(sy,3),
        skinLost=round(lost,3), mean=round(mean,1), sd=round(sd,1), blown=round(blown,4),
        sat=round(sat,3), ringsat=round(ringsat,3), cast=round(Rm-Bm,1)))

with open("audit-metrics.csv","w",newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(out[0])); w.writeheader()
    for o in out: w.writerow(o)

def ids(rs): return " ".join("#%d"%o["idx"] for o in sorted(rs, key=lambda o:o["idx"]))
print("== RATIO (rule: 3:2 native, integer dims) ==")
print("non-3:2 :", ids([o for o in out if abs(o["ratio"]-1.5)>0.02]))
print("portrait:", ids([o for o in out if o["ratio"]<0.95]))
print("\n== CROP: full-bleed hero 4:1 — energy concentration ==")
print("subject leaves band (conc<0.78):", ids([o for o in out if o["heroC"]<0.78]))
print("\n== CROP: page header 6:1 (keeps middle 25%) ==")
print("conc<0.70:", ids([o for o in out if o["hdrC"]<0.70]))
print("\n== CROP: 1:1 thumb (keeps middle 66.7% wide) ==")
print("conc<0.80:", ids([o for o in out if o["sqC"]<0.80]))
print("\n== RULE 4 lighting ==")
print("high-key mean>170:", ids([o for o in out if o["mean"]>170]))
print("blown >4% of pixels:", ids([o for o in out if o["blown"]>0.04]))
print("high contrast sd>72:", ids([o for o in out if o["sd"]>72]))
print("\n== RULE 5 colour ==")
print("warm cast R-B>45:", ids([o for o in out if o["cast"]>45]))
print("saturated sat>0.42:", ids([o for o in out if o["sat"]>0.42]))
print("studio backdrop (ringsat>0.35):", ids([o for o in out if o["ringsat"]>0.35]))
