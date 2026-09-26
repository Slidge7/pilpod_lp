import subprocess
import os
import time

PROFILE_DIR = r"c:\Users\T14\Desktop\s7\s7 site\profile-pics"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

FONTS_DIR = r"c:/Users/T14/Desktop/s7/s7 site/s7-webapp/src/assets/fonts"

variants = [
    # -------------------------------------------------------------
    # 1. PURE ICONIC KHATEM MARK (Minimalist Studio - Most recommended)
    # -------------------------------------------------------------
    {
        "filename": "1_s7_icon_minimal.png",
        "html_name": "var1.html",
        "title": "Minimalist Studio Mark",
        "desc": "The signature 8-point geometric khatem with subtle ambient crimson glow. Cleanest, highest visibility at small avatar sizes (32px feeds).",
        "content": """
        <div class="glow-bg"></div>
        <div class="mark-container">
            <svg class="khatem-svg" viewBox="0 0 100 100">
                <g fill="none" stroke="#C8323C" stroke-width="5" stroke-linejoin="round">
                    <rect x="26" y="26" width="48" height="48" rx="2" />
                    <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                </g>
                <circle cx="50" cy="50" r="3.5" fill="#E04A54" />
            </svg>
        </div>
        """,
        "extra_css": """
        .mark-container {
            width: 440px;
            height: 440px;
            display: flex;
            align-items: center;
            justify-content: center;
            filter: drop-shadow(0 0 35px rgba(200, 50, 60, 0.45));
        }
        .khatem-svg {
            width: 100%;
            height: 100%;
        }
        """
    },

    # -------------------------------------------------------------
    # 2. KHATEM + "S7" (Iconic Monogram)
    # -------------------------------------------------------------
    {
        "filename": "2_s7_mark_and_name.png",
        "html_name": "var2.html",
        "title": "S7 Emblem & Bold Name",
        "desc": "The geometric emblem paired with the bold S7 identity in Geist typography.",
        "content": """
        <div class="glow-bg"></div>
        <div class="center-col">
            <div class="mark-wrap-sm">
                <svg class="khatem-svg" viewBox="0 0 100 100">
                    <g fill="none" stroke="#C8323C" stroke-width="5.5" stroke-linejoin="round">
                        <rect x="26" y="26" width="48" height="48" rx="2" />
                        <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                    </g>
                    <circle cx="50" cy="50" r="3.5" fill="#E04A54" />
                </svg>
            </div>
            <div class="brand-title">S7</div>
        </div>
        """,
        "extra_css": """
        .center-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
        }
        .mark-wrap-sm {
            width: 280px;
            height: 280px;
            filter: drop-shadow(0 0 30px rgba(200, 50, 60, 0.4));
        }
        .brand-title {
            font-size: 110px;
            font-weight: 700;
            color: #F2EFEA;
            letter-spacing: -0.04em;
            line-height: 1;
            text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        """
    },

    # -------------------------------------------------------------
    # 3. FULL BRAND LOCKUP: KHATEM + S7 + "SERVICE7"
    # -------------------------------------------------------------
    {
        "filename": "3_service7_full_lockup.png",
        "html_name": "var3.html",
        "title": "Full Brand Lockup (Service7)",
        "desc": "The complete corporate signature: Khatem mark, S7, and uppercase SERVICE7 moniker. Scaled safely for Facebook circular cropping.",
        "content": """
        <div class="glow-bg"></div>
        <div class="center-col">
            <div class="mark-wrap-md">
                <svg class="khatem-svg" viewBox="0 0 100 100">
                    <g fill="none" stroke="#C8323C" stroke-width="5.5" stroke-linejoin="round">
                        <rect x="26" y="26" width="48" height="48" rx="2" />
                        <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                    </g>
                    <circle cx="50" cy="50" r="3.5" fill="#E04A54" />
                </svg>
            </div>
            <div class="lockup-text">
                <div class="brand-name">S7</div>
                <div class="divider-line"></div>
                <div class="sub-name">SERVICE7</div>
            </div>
        </div>
        """,
        "extra_css": """
        .center-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 28px;
        }
        .mark-wrap-md {
            width: 250px;
            height: 250px;
            filter: drop-shadow(0 0 28px rgba(200, 50, 60, 0.45));
        }
        .lockup-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        .brand-name {
            font-size: 88px;
            font-weight: 700;
            color: #F2EFEA;
            letter-spacing: -0.03em;
            line-height: 1;
        }
        .divider-line {
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #C8323C, transparent);
        }
        .sub-name {
            font-family: 'Geist Mono', monospace;
            font-size: 26px;
            font-weight: 500;
            color: rgba(242, 239, 234, 0.72);
            letter-spacing: 0.28em;
            text-indent: 0.28em;
            text-transform: uppercase;
        }
        """
    },

    # -------------------------------------------------------------
    # 4. TECH BADGE / CIRCULAR EMBEDDED SHIELD
    # -------------------------------------------------------------
    {
        "filename": "4_s7_circular_tech_badge.png",
        "html_name": "var4.html",
        "title": "Futuristic Tech Badge",
        "desc": "A concentric precision dark badge with fine etched rings, crimson ambient core, and SERVICE 7 typography.",
        "content": """
        <div class="badge-ring-outer"></div>
        <div class="badge-ring-inner"></div>
        <div class="glow-bg-badge"></div>
        <div class="center-col">
            <div class="mark-wrap-badge">
                <svg class="khatem-svg" viewBox="0 0 100 100">
                    <g fill="none" stroke="#C8323C" stroke-width="5" stroke-linejoin="round">
                        <rect x="26" y="26" width="48" height="48" rx="2" />
                        <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                    </g>
                    <!-- Inner delicate square -->
                    <rect x="36" y="36" width="28" height="28" fill="none" stroke="rgba(242, 239, 234, 0.18)" stroke-width="1.5" />
                    <circle cx="50" cy="50" r="3.5" fill="#E04A54" />
                </svg>
            </div>
            <div class="badge-label">
                <span class="badge-s7">SERVICE<span style="color:#C8323C">7</span></span>
                <span class="badge-sub">ENGINEERING STUDIO</span>
            </div>
        </div>
        """,
        "extra_css": """
        .badge-ring-outer {
            position: absolute;
            width: 820px;
            height: 820px;
            border-radius: 50%;
            border: 1px dashed rgba(242, 239, 234, 0.12);
        }
        .badge-ring-inner {
            position: absolute;
            width: 760px;
            height: 760px;
            border-radius: 50%;
            border: 1px solid rgba(200, 50, 60, 0.25);
            box-shadow: inset 0 0 60px rgba(200, 50, 60, 0.08);
        }
        .glow-bg-badge {
            position: absolute;
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, rgba(200, 50, 60, 0.22) 0%, transparent 70%);
            border-radius: 50%;
        }
        .center-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            z-index: 5;
        }
        .mark-wrap-badge {
            width: 250px;
            height: 250px;
            filter: drop-shadow(0 0 25px rgba(200, 50, 60, 0.45));
        }
        .badge-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        .badge-s7 {
            font-size: 46px;
            font-weight: 700;
            color: #F2EFEA;
            letter-spacing: 0.12em;
        }
        .badge-sub {
            font-family: 'Geist Mono', monospace;
            font-size: 17px;
            color: rgba(242, 239, 234, 0.45);
            letter-spacing: 0.32em;
            text-indent: 0.32em;
        }
        """
    },

    # -------------------------------------------------------------
    # 5. LIGHT / WARM PAPER EDITION
    # -------------------------------------------------------------
    {
        "filename": "5_s7_light_paper_edition.png",
        "html_name": "var5.html",
        "title": "Light / Warm Paper Edition",
        "desc": "Based on s7.ma light mode: warm paper background (#F6F3EE), deep charcoal text (#14110F), and deep red (#A81E28).",
        "content": """
        <div class="light-ring"></div>
        <div class="center-col">
            <div class="mark-wrap-light">
                <svg class="khatem-svg" viewBox="0 0 100 100">
                    <g fill="none" stroke="#A81E28" stroke-width="5.5" stroke-linejoin="round">
                        <rect x="26" y="26" width="48" height="48" rx="2" />
                        <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                    </g>
                    <circle cx="50" cy="50" r="3.5" fill="#8E1720" />
                </svg>
            </div>
            <div class="light-text">
                <div class="light-s7">S7</div>
                <div class="light-sub">SERVICE7</div>
            </div>
        </div>
        """,
        "override_body": "background: #F6F3EE; color: #14110F;",
        "extra_css": """
        .light-ring {
            position: absolute;
            width: 840px;
            height: 840px;
            border-radius: 50%;
            border: 1px solid rgba(20, 17, 15, 0.08);
        }
        .center-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            z-index: 5;
        }
        .mark-wrap-light {
            width: 250px;
            height: 250px;
            filter: drop-shadow(0 4px 20px rgba(168, 30, 40, 0.15));
        }
        .light-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
        .light-s7 {
            font-size: 88px;
            font-weight: 700;
            color: #14110F;
            letter-spacing: -0.03em;
            line-height: 1;
        }
        .light-sub {
            font-family: 'Geist Mono', monospace;
            font-size: 24px;
            font-weight: 600;
            color: rgba(20, 17, 15, 0.65);
            letter-spacing: 0.26em;
            text-indent: 0.26em;
        }
        """
    }
]

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @font-face {{
    font-family: 'Geist';
    src: url('{fonts_dir}/geist-latin.woff2') format('woff2-variations');
    font-weight: 100 900;
  }}
  @font-face {{
    font-family: 'Geist Mono';
    src: url('{fonts_dir}/geist-mono-latin.woff2') format('woff2-variations');
  }}

  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #0A0A0B;
    color: #F2EFEA;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    position: relative;
    {override_body}
  }}

  .glow-bg {{
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(200, 50, 60, 0.22) 0%, rgba(200, 50, 60, 0.06) 45%, transparent 70%);
    border-radius: 50%;
  }}

  /* Facebook circular safe guide (920px diameter inside 1024px) */
  .fb-safe-guide {{
    position: absolute;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.02);
    pointer-events: none;
  }}

  {extra_css}
</style>
</head>
<body>
  <div class="fb-safe-guide"></div>
  {content}
</body>
</html>
"""

for v in variants:
    html_file = os.path.join(PROFILE_DIR, v["html_name"])
    override_body = v.get("override_body", "")
    rendered_html = html_template.format(
        fonts_dir=FONTS_DIR,
        override_body=override_body,
        extra_css=v["extra_css"],
        content=v["content"]
    )
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    
    png_file = os.path.join(PROFILE_DIR, v["filename"])
    file_url = "file:///" + html_file.replace("\\", "/")
    cmd = [
        EDGE_PATH,
        "--headless=new",
        f"--screenshot={png_file}",
        "--window-size=1024,1024",
        file_url
    ]
    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"Generated: {v['filename']}")

print("All profile picture variations generated successfully!")
