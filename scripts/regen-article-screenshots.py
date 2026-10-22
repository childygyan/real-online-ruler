#!/usr/bin/env python3
"""Regenerate unique per-article screenshots for Real Online Ruler how-to guides.

Each article gets a REAL screenshot of https://realonlineruler.online/ with:
  - the unit tab matching the article's alt text (in / cm / mm)
  - the Measure tool active with a line drawn at a topic-relevant length,
    so no two articles share the same image.

Usage: python3 scripts/regen-article-screenshots.py [--only slug1,slug2]
Outputs: public/images/articles/<slug>/{desktop,mobile}.webp
"""
import os
import sys
import time
from playwright.sync_api import sync_playwright

SITE = "https://realonlineruler.online/"
CHROME_BIN = "/opt/meta-chromium/chrome"
CHAIN_PROXY = "http://127.0.0.1:18080"


def ensure_chain_proxy():
    """Start ~/workspace/bin/chain-proxy.py if it isn't already listening."""
    import socket
    import subprocess

    try:
        s = socket.create_connection(("127.0.0.1", 18080), timeout=2)
        s.close()
        return
    except OSError:
        pass
    subprocess.Popen(
        ["python3", os.path.expanduser("~/workspace/bin/chain-proxy.py")],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        start_new_session=True,
    )
    for _ in range(30):
        try:
            s = socket.create_connection(("127.0.0.1", 18080), timeout=2)
            s.close()
            return
        except OSError:
            time.sleep(1)
    raise RuntimeError("chain proxy did not start")

# (slug, unit, desktop line px, mobile line px) — every length is distinct so no
# two articles share an image. Popup readouts show the true converted value.
ARTICLES = [
    ("how-big-is-4-inches", "in", 384, 192),
    ("what-does-6-inches-look-like", "in", 576, 280),
    ("how-big-is-55-inch-tv", "in", 860, 250),
    ("how-to-measure-necklace-length", "in", 700, 230),
    ("how-to-measure-picture-frame", "in", 800, 270),
    ("how-to-measure-waist-size", "in", 640, 210),
    ("how-to-measure-inseam", "in", 500, 170),
    ("how-to-measure-foot-size", "cm", 756, 275),
    ("how-to-measure-hand-for-gloves", "cm", 680, 240),
    ("how-to-measure-head-size", "cm", 840, 200),
    ("how-to-measure-screen-size", "cm", 600, 260),
    ("how-to-measure-box-for-shipping", "cm", 520, 180),
    ("how-to-find-glasses-frame-size", "mm", 529, 189),
    ("how-to-identify-screw-size", "mm", 200, 120),
    ("how-to-measure-wrist-size", "mm", 643, 227),
    # 3-day ongoing program batch 1 (2026-10-22 → 2026-11-18) — all lengths
    # distinct from every existing entry above (desktop <= 860, mobile <= 280).
    ("how-big-is-2-inches", "in", 480, 215),
    ("what-does-10-cm-look-like", "cm", 620, 245),
    ("how-to-measure-belt-size", "in", 580, 185),
    ("what-does-5-cm-look-like", "cm", 440, 155),
    ("how-to-measure-curtain-size", "in", 760, 265),
    ("how-big-is-10-inches", "in", 720, 110),
    ("how-to-measure-dog-collar-size", "in", 360, 95),
    ("what-does-15-cm-look-like", "cm", 660, 135),
    ("how-to-measure-luggage-size", "in", 540, 85),
    ("how-big-is-12-inches", "in", 400, 70),
]

PX_PER_IN = 96.0  # site default when uncalibrated (matches existing screenshots)
UNIT_PER_IN = {"in": 1.0, "cm": 2.54, "mm": 25.4}

VIEWPORTS = {
    "desktop": {"width": 1280, "height": 800, "is_mobile": False},
    "mobile": {"width": 390, "height": 844, "is_mobile": True},
}


def value_to_px(value, unit):
    return value * PX_PER_IN / UNIT_PER_IN[unit]


def capture(page, slug, unit, length_px, name, idx):
    page.goto(SITE, wait_until="networkidle")
    page.wait_for_timeout(800)
    page.evaluate("window.scrollTo(0, 0)")
    # Select the unit tab in the main toolbar (scoped to avoid duplicates)
    page.click(f'#ruler-app-root button[data-unit="{unit}"]')
    page.wait_for_timeout(300)
    # Activate the Measure tool
    page.click("#tool-measure")
    page.wait_for_timeout(300)
    # Bring the ruler tool into view so the drag lands on the workspace
    page.locator("#ruler-app-root").scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    # Draw a measurement line across the workspace. Start x and y vary slightly
    # per article so compositions differ even at similar lengths.
    box = page.locator("#ruler-workspace").bounding_box()
    if not box or box["y"] < 0 or box["y"] > 1200:
        raise RuntimeError(f"#ruler-workspace not in view for {slug}/{name}: {box}")
    length = min(length_px, box["width"] * 0.8)
    x0 = box["x"] + box["width"] * (0.10 + (idx % 3) * 0.03)
    y0 = box["y"] + box["height"] * (0.40 + (idx % 5) * 0.05)
    page.mouse.move(x0, y0)
    page.mouse.down()
    page.mouse.move(x0 + length, y0, steps=25)
    page.mouse.up()
    page.wait_for_timeout(600)
    page.locator("#ruler-app-root").scroll_into_view_if_needed()
    page.wait_for_timeout(300)
    out = f"public/images/articles/{slug}/{name}.webp"
    page.screenshot(path=out, type="webp", quality=82)
    print(f"  wrote {out} ({unit}, {length:.0f}px line)", flush=True)


def main():
    only = None
    for arg in sys.argv[1:]:
        if arg.startswith("--only="):
            only = arg.split("=", 1)[1].split(",")
    targets = [a for a in ARTICLES if not only or a[0] in only]
    ensure_chain_proxy()
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=CHROME_BIN,
            proxy={"server": CHAIN_PROXY},
            args=["--no-sandbox"],
        )
        for i, (slug, unit, d_px, m_px) in enumerate(targets):
            print(f"{slug}:")
            for name, vp in VIEWPORTS.items():
                ctx = browser.new_context(
                    viewport={"width": vp["width"], "height": vp["height"]},
                    is_mobile=vp["is_mobile"],
                    device_scale_factor=2 if vp["is_mobile"] else 1,
                )
                page = ctx.new_page()
                try:
                    capture(page, slug, unit, d_px if name == "desktop" else m_px, name, i)
                finally:
                    ctx.close()
        browser.close()
    print("done")


if __name__ == "__main__":
    main()
