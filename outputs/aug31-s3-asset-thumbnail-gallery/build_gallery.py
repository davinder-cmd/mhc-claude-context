import json, os, urllib.parse

with open("urls_raw.txt") as f:
    urls = [l.strip() for l in f if l.strip()]

IMG_EXT = {"jpg", "jpeg", "png", "gif", "webp", "svg"}
VID_EXT = {"mp4", "mov", "gif"}  # gif treated as image below, keep mp4/mov as video
AUD_EXT = {"wav", "mp3", "m4a"}
DOC_EXT = {"pdf"}
FONT_EXT = {"woff", "woff2", "ttf", "otf"}

def classify(url):
    path = urllib.parse.urlsplit(url).path
    ext = path.rsplit(".", 1)[-1].lower() if "." in path.rsplit("/", 1)[-1] else ""
    if ext in {"jpg", "jpeg", "png", "webp", "svg"}:
        return "image"
    if ext == "gif":
        return "image"  # animated but renders as <img>
    if ext in {"mp4", "mov"}:
        return "video"
    if ext in AUD_EXT:
        return "audio"
    if ext in DOC_EXT:
        return "pdf"
    if ext in FONT_EXT:
        return "font"
    return "other"

def folder_of(url):
    path = urllib.parse.urlsplit(url).path
    parts = [p for p in path.split("/") if p]
    # drop domain-ish first segment (bucket path prefix already stripped by host)
    if len(parts) <= 1:
        return "(root)"
    return "/".join(parts[:-1])

items = []
for u in urls:
    items.append({
        "url": u,
        "type": classify(u),
        "folder": folder_of(u),
        "name": urllib.parse.unquote(u.rsplit("/", 1)[-1]),
    })

by_type = {}
for it in items:
    by_type.setdefault(it["type"], 0)
    by_type[it["type"]] += 1

print(json.dumps(by_type, indent=2))
print("total", len(items))

with open("assets.json", "w") as f:
    json.dump(items, f)
