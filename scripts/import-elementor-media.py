#!/usr/bin/env python3
"""Copy only media referenced by the exported Elementor CSS from a local WP backup.

Run from the repository root. The script does not upload files or commit changes.
Ambiguous duplicate filenames are reported rather than guessed.
"""
from pathlib import Path
from urllib.parse import unquote
import re
import shutil
import sys

repo = Path(__file__).resolve().parents[1]
backup = Path.home() / "Downloads/backup/homedir/public_html/wp-content/uploads"
css_roots = [
    repo / "migration-source/elementor/css",
    repo / "original-elementor-css",
]
dest = repo / "public/images"

if not backup.is_dir():
    sys.exit(f"WordPress uploads folder not found: {backup}")

css_files = [p for root in css_roots if root.is_dir() for p in root.rglob("*.css")]
if not css_files:
    sys.exit("No exported Elementor CSS files found in migration-source/elementor/css or original-elementor-css.")

# Capture CSS url(...) values and retain only local WordPress uploads image paths.
image_exts = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"}
refs = set()
for css in css_files:
    text = css.read_text(encoding="utf-8", errors="ignore")
    for raw in re.findall(r"url\(\s*['\"]?([^'\"\)]+)", text, flags=re.I):
        value = unquote(raw.strip()).split("?", 1)[0]
        if "wp-content/uploads/" not in value:
            continue
        tail = value.split("wp-content/uploads/", 1)[1].lstrip("/")
        candidate = Path(tail)
        if candidate.suffix.lower() in image_exts and not candidate.is_absolute() and ".." not in candidate.parts:
            refs.add(candidate.as_posix())

dest.mkdir(parents=True, exist_ok=True)
copied = []
already = []
missing = []
ambiguous = []

for rel in sorted(refs):
    exact = backup / rel
    if exact.is_file():
        source = exact
    else:
        matches = list(backup.rglob(Path(rel).name))
        if not matches:
            missing.append(rel)
            continue
        if len(matches) > 1:
            ambiguous.append((rel, len(matches)))
            continue
        source = matches[0]

    target = dest / source.name
    if target.exists():
        already.append(source.name)
        continue
    shutil.copy2(source, target)
    copied.append((source.name, source.stat().st_size))

print(f"CSS files scanned: {len(css_files)}")
print(f"Unique referenced image paths: {len(refs)}")
print(f"Copied into public/images: {len(copied)}")
for name, size in copied:
    print(f"  COPIED {name} ({size:,} bytes)")
print(f"Already present: {len(already)}")
print(f"Missing from backup: {len(missing)}")
for name in missing:
    print(f"  MISSING {name}")
print(f"Skipped ambiguous duplicate names: {len(ambiguous)}")
for name, count in ambiguous:
    print(f"  AMBIGUOUS {name} ({count} matches; not guessed)")
print("\nReview the copied files before committing. This script never changes page code.")
