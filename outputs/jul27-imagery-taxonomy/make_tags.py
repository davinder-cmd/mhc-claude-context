#!/usr/bin/env python3
"""Builds tags.csv from the reviewed verdict passes.

Reviewed by eye: 4:1 (height axis) and 1:1 (width axis) — the tightest crop on each axis.
Everything else is inferred monotonically, which is sound because each container's crop is a
strict superset of the tighter one on the same axis and shares its centre:
  survives 4:1  -> survives 3:1, 2:1, 16:9, 16:10   (all keep more height)
  survives 1:1  -> survives 4:3                     (keeps more width)
  fails    4:1  -> fails    hero(4.5:1), 6:1        (both keep less height)
Cells left blank where nothing can be concluded — the page shows them as unreviewed.
"""
import csv, importlib.util, os

spec = importlib.util.spec_from_file_location("build", os.path.join(os.path.dirname(__file__), "build.py"))
# build.py runs work at import; read its tag table textually instead
src = open("build.py").read()
start = src.index("\nT = {") + 1   # anchored: SUBJECT = { also ends in "T = {"
tbl = src[start:src.index("\n}\n", start) + 3]
ns = {}
exec(tbl, ns)
T = ns["T"]

FAIL41 = [2,3,5,6,12,13,19,25,31,35,40,47,48,66,73,84,85,86,94,99,101,116,127,128,131,141,150,
          153,157,160,172,175,180,185,190,192,197,200,201,202,207,212,213,215,219,236,237,245,
          247,253,258,260,262,265,268,272]
MARG41 = [1,32,33,36,53,60,117,120,125,169,251,274]
FAIL11 = [1,14,15,45,85,112,126]
MARG11 = [10,34,38,48,51,71,91,99,109,113,146,151,153,154,155,163,165,168,173,187,193,196,200,
          234,262,269,276]

LOOSER_H = ["3:1", "2:1", "16:9", "16:10"]     # keep more height than 4:1
TIGHTER_H = ["4.5:1", "6:1"]                   # keep less height than 4:1
idx = {int(r["idx"]): r for r in csv.DictReader(open("index.csv"))}
cols = ["idx","file","subject","stage","crop","note",
        "v:1:1","v:4:3","v:3:2","v:16:10","v:16:9","v:2:1","v:3:1","v:4:1","v:4.5:1","v:6:1"]

with open("tags.csv","w",newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols); w.writeheader()
    for i in sorted(T):
        g, s, c, note = T[i]
        v41 = "fail" if i in FAIL41 else ("marginal" if i in MARG41 else "pass")
        v11 = "fail" if i in FAIL11 else ("marginal" if i in MARG11 else "pass")
        row = {"idx": i, "file": idx[i]["file"], "subject": g, "stage": s, "crop": c,
               "note": note, "v:1:1": v11, "v:4:1": v41}
        row["v:4:3"] = "pass" if v11 == "pass" else ""            # looser on width
        row["v:3:2"] = "pass" if abs(float(idx[i]["ratio"]) - 1.5) < .02 else ""  # no crop at all
        for r in LOOSER_H:
            row["v:" + r] = "pass" if v41 == "pass" else ""
        for r in TIGHTER_H:
            row["v:" + r] = "fail" if v41 == "fail" else ""
        w.writerow(row)

rows = list(csv.DictReader(open("tags.csv")))
print("tags.csv: %d rows" % len(rows))
for c in cols[6:]:
    from collections import Counter
    n = Counter(r[c] for r in rows)
    print("  %-8s fail %-4d marginal %-4d pass %-4d unreviewed %d"
          % (c[2:], n["fail"], n["marginal"], n["pass"], n[""]))
