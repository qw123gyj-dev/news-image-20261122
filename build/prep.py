"""Crop the AI photos for the 22 November front page.

Display slots in page.html (1024x1024 canvas):
  lead  968 x 150   Kryvyi Rih night strike
  row2  470 x 100   Gulf tankers, COP31 hall
  row3  229 x  64   Riyadh, Brazil storm, Riemann proof, German strike
Each crop is saved at 2x display size so the print stays sharp.
Sources are 1920x1280, except the COP31 hall which is 2240x1120.
The crop keeps the middle band of each photo, which is where the
subject sits in every shot; the lead keeps a band low enough to
catch the rubble and the rescue lights.
"""
from PIL import Image
import os

W = os.path.dirname(os.path.abspath(__file__))


def band(src, y0, y1, out, w):
    """Crop a horizontal band (full width) and scale to width w."""
    im = Image.open(os.path.join(W, src))
    sw, _sh = im.size
    crop = im.crop((0, y0, sw, y1))
    crop = crop.resize((w, round(w * (y1 - y0) / sw)), Image.LANCZOS)
    crop.save(os.path.join(W, out))
    print(out, crop.size)


def center_band(src, aspect, out, w):
    """Crop the vertical middle band matching the given aspect."""
    im = Image.open(os.path.join(W, src))
    sw, sh = im.size
    h = round(sw / aspect)
    y0 = max(0, (sh - h) // 2)
    band(src, y0, y0 + h, out, w)


# Lead: Kryvyi Rih, 968x150 display, aspect 6.45.
# Band y 480..778 keeps the wrecked building, the rubble and the
# emergency lights; the empty night sky above is cut away.
band('media-generation-kryvyi-0-d3ea147f-5707-4a66-97c9-6ab326c88f70.webp',
     480, 778, 'kryvyi-wide.png', 1936)

# Row 2: aspect 470/100 = 4.7, saved at 940 wide.
center_band('media-generation-gulf-0-3bef92a7-0b82-4786-9790-45e6fb5c99c0.webp',
            470 / 100, 'gulf-wide.png', 940)
center_band('media-generation-cop31-0-99788484-4c94-4134-9c26-93c5021a9a3b.webp',
            470 / 100, 'cop31-wide.png', 940)

# Row 3: aspect 229/64 = 3.578, saved at 458 wide.
for src, out in [
    ('media-generation-riyadh-0-4178a847-d769-4f4f-90db-2f29c039bcd9.webp',
     'riyadh-wide.png'),
    ('media-generation-brazil-0-54182de0-96dd-45ed-b645-350cfa5fd6fa.webp',
     'brazil-wide.png'),
    ('media-generation-riemann-0-53157e14-8647-4f2e-a5ca-43ea5435e11e.webp',
     'riemann-wide.png'),
    ('media-generation-strike-0-7fbca8c1-ba50-4300-b608-94dbc4aa2448.webp',
     'strike-wide.png'),
]:
    center_band(src, 229 / 64, out, 458)

print('all crops done')
