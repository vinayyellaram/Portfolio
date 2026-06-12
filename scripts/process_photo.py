#!/usr/bin/env python3
"""Generate the hero cutout from the original portrait.

Usage:
    python3 scripts/process_photo.py [input] [output]

Defaults: public/vinay.jpg -> public/vinay.webp

Removes the background (rembg/u2net), trims transparent borders, and
resizes to a sane width for the hero. Grayscale/contrast are applied in
CSS, not baked in, so the original colors stay available.

Requires: pip install "rembg[cpu]" pillow
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps
from rembg import remove

ROOT = Path(__file__).resolve().parent.parent
INPUT = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "public/vinay.jpg"
OUTPUT = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "public/vinay.webp"
MAX_WIDTH = 900

if not INPUT.exists():
    sys.exit(f"Input photo not found: {INPUT}")

img = ImageOps.exif_transpose(Image.open(INPUT)).convert("RGBA")
cutout = remove(img)

bbox = cutout.getbbox()
if bbox:
    cutout = cutout.crop(bbox)

if cutout.width > MAX_WIDTH:
    ratio = MAX_WIDTH / cutout.width
    cutout = cutout.resize((MAX_WIDTH, round(cutout.height * ratio)), Image.LANCZOS)

if OUTPUT.suffix == ".webp":
    cutout.save(OUTPUT, quality=90, method=6)
else:
    cutout.save(OUTPUT, optimize=True)
print(f"Saved {OUTPUT} ({cutout.width}x{cutout.height})")
