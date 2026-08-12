#!/usr/bin/env python3
"""Embeds the evidence photos into report.html as base64 CSS vars (Artifact CSP: no external hosts)."""
import base64, csv, io, os, re
from PIL import Image
rows={int(r["idx"]):r for r in csv.DictReader(open("imagery-index.csv"))}
BIG=[14,5,253,131]                                   # 4-container crop demos + face-band diagram
SMALL=[73,101,116,180,197,201,262,25,34,221,248,252,136,261,140,102,274,68,143,146,110,164,203,7,44,163,206]
css=[":root{"]
for idx in BIG+SMALL:
    im=Image.open(os.path.join("thumbs",rows[idx]["thumb"])).convert("RGB")
    im.thumbnail((640 if idx in BIG else 320, 640))
    b=io.BytesIO(); im.save(b,"JPEG",quality=70,optimize=True,progressive=True)
    css.append("--i%d:url(\"data:image/jpeg;base64,%s\");"%(idx,base64.b64encode(b.getvalue()).decode()))
css.append("}")
block="<style>\n"+"\n".join(css)+"\n</style>"
src=open("report-template.html").read()
out=src.replace("<!--IMAGES-->",block)
missing=sorted({int(m) for m in re.findall(r"var\(--i(\d+)\)",out)} - set(BIG+SMALL))
open("report.html","w").write(out)
print("embedded %d photos · report.html %.0f KB · missing vars: %s"%(len(BIG+SMALL),len(out)/1024,missing or "none"))
