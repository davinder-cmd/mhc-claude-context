#!/usr/bin/env python3
"""Emit a minimal icon CSS sheet containing only the icons a page actually uses.

The full mhc-icons.css is ~510 KB — correct as a source of truth, far too heavy to ship.
Point this at your built HTML and it writes a sheet with only the glyphs you referenced.

    python3 subset.py page.html [more.html ...] -o icons.css

Icons are detected from `mhi--<key>` class names in the input files.
Any referenced key with no matching glyph is reported and is a build error, not a warning —
that is precisely the failure mode this whole system exists to prevent.
"""
import re, sys, argparse, pathlib

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="+")
    ap.add_argument("-o", "--out", default="icons.subset.css")
    ap.add_argument("--sheet", default=str(pathlib.Path(__file__).parent / "mhc-icons.css"))
    a = ap.parse_args()

    sheet = pathlib.Path(a.sheet).read_text()
    header = sheet.split(".mhi--", 1)[0]
    rules = {m.group(1): m.group(0)
             for m in re.finditer(r'\.mhi--([a-z0-9~-]+)\{--i:url\("[^"]*"\)\}', sheet)}

    used = set()
    for f in a.files:
        used |= set(re.findall(r'mhi--([a-z0-9~-]+)', pathlib.Path(f).read_text()))

    missing = sorted(used - rules.keys())
    found = sorted(used & rules.keys())

    out = header + "\n".join(rules[k] for k in found) + "\n"
    pathlib.Path(a.out).write_text(out)

    print(f"{len(found)} icons -> {a.out}  ({len(out)/1024:.1f} KB, "
          f"{100 - len(out) * 100 // len(sheet)}% smaller than the full sheet)")
    if missing:
        print(f"\nERROR: {len(missing)} referenced icon(s) do not exist:", file=sys.stderr)
        for k in missing:
            print(f"  mhi--{k}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
