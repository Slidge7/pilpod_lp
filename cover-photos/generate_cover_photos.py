import subprocess
import os

COVER_DIR = r"c:\Users\T14\Desktop\s7\s7 site\cover-photos"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
FONTS_DIR = r"c:/Users/T14/Desktop/s7/s7 site/s7-webapp/src/assets/fonts"

variants = [
    # -------------------------------------------------------------
    # 1. STUDIO HERO (Official Studio Banner - Recommended)
    # -------------------------------------------------------------
    {
        "filename": "1_s7_cover_studio_hero.png",
        "html_name": "cover1.html",
        "title": "Official Studio Hero",
        "desc": "Signature dark studio aesthetic with glowing Khatem geometry, core headline, value proposition and domain.",
        "content": """
        <!-- Ambient decorative grids & glows -->
        <div class="glow-left"></div>
        <div class="glow-right"></div>
        <div class="grid-overlay"></div>

        <div class="cover-content">
            <div class="left-hero">
                <div class="eyebrow-pill">
                    <span class="live-dot"></span>
                    <span>INDEPENDENT SOFTWARE STUDIO &bull; MOROCCO</span>
                </div>
                <h1 class="hero-h1">
                    Premium software.<br>
                    <span class="hero-sub-text">Built to last.</span>
                </h1>
                <p class="hero-desc">
                    Desktop applications, developer tools & custom engineering built local-first, privacy-conscious and fast by design.
                </p>
                <div class="tags-row">
                    <span class="tag-chip">PILPOD</span>
                    <span class="tag-chip">REQTONE</span>
                    <span class="tag-chip">CUSTOM ENGINEERING</span>
                    <span class="tag-chip domain">S7.MA</span>
                </div>
            </div>

            <div class="right-visual">
                <div class="emblem-card">
                    <div class="emblem-halo"></div>
                    <svg class="khatem-large" viewBox="0 0 100 100">
                        <g fill="none" stroke="#C8323C" stroke-width="4.2" stroke-linejoin="round">
                            <rect x="26" y="26" width="48" height="48" rx="2" />
                            <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                        </g>
                        <circle cx="50" cy="50" r="3.5" fill="#E04A54" />
                    </svg>
                    <div class="emblem-sub">
                        <span class="brand-monogram">S7</span>
                        <span class="brand-subname">SERVICE7</span>
                    </div>
                </div>
            </div>
        </div>
        """,
        "extra_css": """
        .glow-left {
            position: absolute;
            left: -150px;
            top: 50%;
            transform: translateY(-50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(200, 50, 60, 0.16) 0%, transparent 65%);
            border-radius: 50%;
        }
        .glow-right {
            position: absolute;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(200, 50, 60, 0.22) 0%, transparent 65%);
            border-radius: 50%;
        }
        .grid-overlay {
            position: absolute;
            inset: 0;
            background-image: 
                linear-gradient(to right, rgba(242, 239, 234, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(242, 239, 234, 0.02) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .cover-content {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 110px;
        }
        .left-hero {
            max-width: 820px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .eyebrow-pill {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 6px 14px;
            background: rgba(200, 50, 60, 0.1);
            border: 1px solid rgba(200, 50, 60, 0.25);
            border-radius: 999px;
            font-family: 'Geist Mono', monospace;
            font-size: 13px;
            color: #E04A54;
            letter-spacing: 0.15em;
            width: fit-content;
        }
        .live-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #E04A54;
            box-shadow: 0 0 8px #E04A54;
        }
        .hero-h1 {
            font-size: 58px;
            font-weight: 700;
            line-height: 1.08;
            letter-spacing: -0.035em;
            color: #F2EFEA;
        }
        .hero-sub-text {
            color: rgba(242, 239, 234, 0.45);
        }
        .hero-desc {
            font-size: 19px;
            line-height: 1.5;
            color: rgba(242, 239, 234, 0.7);
            max-width: 660px;
        }
        .tags-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 6px;
        }
        .tag-chip {
            font-family: 'Geist Mono', monospace;
            font-size: 12px;
            padding: 5px 12px;
            background: rgba(242, 239, 234, 0.05);
            border: 1px solid rgba(242, 239, 234, 0.1);
            border-radius: 6px;
            color: rgba(242, 239, 234, 0.8);
            letter-spacing: 0.08em;
        }
        .tag-chip.domain {
            border-color: rgba(200, 50, 60, 0.4);
            color: #F2EFEA;
            background: rgba(200, 50, 60, 0.15);
        }
        .right-visual {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .emblem-card {
            position: relative;
            width: 280px;
            height: 280px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(15, 15, 17, 0.85);
            border: 1px solid rgba(242, 239, 234, 0.08);
            border-radius: 24px;
            backdrop-filter: blur(20px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }
        .emblem-halo {
            position: absolute;
            width: 190px;
            height: 190px;
            background: #C8323C;
            filter: blur(55px);
            opacity: 0.35;
            border-radius: 50%;
        }
        .khatem-large {
            position: relative;
            width: 130px;
            height: 130px;
            filter: drop-shadow(0 0 16px rgba(200, 50, 60, 0.5));
        }
        .emblem-sub {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 14px;
            gap: 2px;
            z-index: 5;
        }
        .brand-monogram {
            font-size: 26px;
            font-weight: 700;
            color: #F2EFEA;
            letter-spacing: -0.02em;
        }
        .brand-subname {
            font-family: 'Geist Mono', monospace;
            font-size: 11px;
            color: rgba(242, 239, 234, 0.5);
            letter-spacing: 0.22em;
        }
        """
    },

    # -------------------------------------------------------------
    # 2. DEVELOPER / ENGINEERING STUDIO (Tech & Architecture)
    # -------------------------------------------------------------
    {
        "filename": "2_s7_cover_engineering_focus.png",
        "html_name": "cover2.html",
        "title": "Engineering Studio & Products",
        "desc": "Highlights S7's products (ReqTone & PilPod) and core technical craftsmanship.",
        "content": """
        <div class="ambient-glow"></div>
        <div class="cover-wrapper-eng">
            <div class="left-box">
                <div class="studio-header">
                    <span class="studio-tag">STUDIO ARCHITECTURE</span>
                    <span class="studio-slash">/</span>
                    <span class="studio-loc">CASABLANCA &bull; MOROCCO</span>
                </div>
                <div class="brand-big">SERVICE<span class="accent-num">7</span></div>
                <div class="brand-tagline">Native Desktop Software & Developer Systems</div>
                
                <div class="product-cards">
                    <div class="prod-item">
                        <div class="prod-dot dot-pilpod"></div>
                        <div class="prod-info">
                            <span class="prod-name">PilPod</span>
                            <span class="prod-role">Unified Browser Media Control</span>
                        </div>
                    </div>
                    <div class="prod-item">
                        <div class="prod-dot dot-reqtone"></div>
                        <div class="prod-info">
                            <span class="prod-name">ReqTone</span>
                            <span class="prod-role">Native Local-First API Client</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right-spec">
                <div class="terminal-card">
                    <div class="term-bar">
                        <span class="circle-btn c-red"></span>
                        <span class="circle-btn c-yellow"></span>
                        <span class="circle-btn c-green"></span>
                        <span class="term-title">manifest.json</span>
                    </div>
                    <div class="term-body">
                        <p class="code-line"><span class="code-key">"studio"</span>: <span class="code-val">"Service7"</span>,</p>
                        <p class="code-line"><span class="code-key">"location"</span>: <span class="code-val">"Morocco"</span>,</p>
                        <p class="code-line"><span class="code-key">"paradigm"</span>: <span class="code-val">"Local-First"</span>,</p>
                        <p class="code-line"><span class="code-key">"privacy"</span>: <span class="code-bool">true</span>,</p>
                        <p class="code-line"><span class="code-key">"cloudLockIn"</span>: <span class="code-bool">false</span>,</p>
                        <p class="code-line"><span class="code-key">"url"</span>: <span class="code-val">"https://s7.ma"</span></p>
                    </div>
                </div>
            </div>
        </div>
        """,
        "extra_css": """
        .ambient-glow {
            position: absolute;
            left: 30%;
            top: 20%;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(200, 50, 60, 0.15) 0%, transparent 60%);
            border-radius: 50%;
        }
        .cover-wrapper-eng {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 110px;
        }
        .left-box {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .studio-header {
            font-family: 'Geist Mono', monospace;
            font-size: 13px;
            color: rgba(242, 239, 234, 0.5);
            letter-spacing: 0.14em;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .studio-tag {
            color: #C8323C;
            font-weight: 600;
        }
        .brand-big {
            font-size: 64px;
            font-weight: 800;
            letter-spacing: -0.04em;
            color: #F2EFEA;
            line-height: 1;
        }
        .accent-num {
            color: #C8323C;
        }
        .brand-tagline {
            font-size: 20px;
            color: rgba(242, 239, 234, 0.75);
            letter-spacing: -0.01em;
            margin-bottom: 6px;
        }
        .product-cards {
            display: flex;
            gap: 18px;
            margin-top: 8px;
        }
        .prod-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 18px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
        }
        .prod-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }
        .dot-pilpod {
            background: #F53838;
            box-shadow: 0 0 10px rgba(245, 56, 56, 0.6);
        }
        .dot-reqtone {
            background: #5B9DFF;
            box-shadow: 0 0 10px rgba(91, 157, 255, 0.6);
        }
        .prod-info {
            display: flex;
            flex-direction: column;
        }
        .prod-name {
            font-size: 15px;
            font-weight: 600;
            color: #F2EFEA;
        }
        .prod-role {
            font-size: 12px;
            color: rgba(242, 239, 234, 0.45);
        }
        .terminal-card {
            width: 440px;
            background: rgba(14, 15, 18, 0.95);
            border: 1px solid rgba(242, 239, 234, 0.1);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 25px 60px rgba(0,0,0,0.6);
        }
        .term-bar {
            background: rgba(255, 255, 255, 0.03);
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            border-bottom: 1px solid rgba(242, 239, 234, 0.06);
        }
        .circle-btn {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }
        .c-red { background: #FF5F56; }
        .c-yellow { background: #FFBD2E; }
        .c-green { background: #27C93F; }
        .term-title {
            font-family: 'Geist Mono', monospace;
            font-size: 12px;
            color: rgba(242, 239, 234, 0.4);
            margin-left: auto;
        }
        .term-body {
            padding: 20px 24px;
            font-family: 'Geist Mono', monospace;
            font-size: 14px;
            line-height: 1.7;
        }
        .code-key { color: #8B909D; }
        .code-val { color: #7EC7A2; }
        .code-bool { color: #E04A54; font-weight: 600; }
        """
    },

    # -------------------------------------------------------------
    # 3. THE S7 STANDARD (Seven Commitments Manifesto)
    # -------------------------------------------------------------
    {
        "filename": "3_s7_cover_the_standard.png",
        "html_name": "cover3.html",
        "title": "The S7 Standard (Commitments)",
        "desc": "Showcases the engineering principles behind S7: Local First, Privacy First, Fast by Design.",
        "content": """
        <div class="standard-cover">
            <div class="std-left">
                <div class="std-eyebrow">
                    <svg width="18" height="18" viewBox="0 0 32 32">
                        <g fill="none" stroke="#C8323C" stroke-width="2">
                            <rect x="9" y="9" width="14" height="14"/>
                            <rect x="9" y="9" width="14" height="14" transform="rotate(45 16 16)"/>
                        </g>
                    </svg>
                    <span>THE S7 STANDARD</span>
                </div>
                <h2 class="std-h2">Seven commitments behind every release.</h2>
                <p class="std-p">A set of engineering constraints we hold ourselves to, because they are what make software still feel good ten years after it shipped.</p>
                <div class="std-url">VISIT S7.MA</div>
            </div>

            <div class="std-pillars">
                <div class="pillar-row">
                    <span class="p-num">01</span>
                    <span class="p-title">Local First</span>
                    <span class="p-desc">Your data stays on your machine</span>
                </div>
                <div class="pillar-row">
                    <span class="p-num">02</span>
                    <span class="p-title">Privacy First</span>
                    <span class="p-desc">No tracking, no profiling</span>
                </div>
                <div class="pillar-row">
                    <span class="p-num">03</span>
                    <span class="p-title">Fast by Design</span>
                    <span class="p-desc">Performance is an early choice</span>
                </div>
                <div class="pillar-row">
                    <span class="p-num">04</span>
                    <span class="p-title">User Ownership</span>
                    <span class="p-desc">Open formats, zero lock-in</span>
                </div>
            </div>
        </div>
        """,
        "extra_css": """
        .standard-cover {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 110px;
        }
        .std-left {
            max-width: 620px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .std-eyebrow {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Geist Mono', monospace;
            font-size: 13px;
            color: #C8323C;
            letter-spacing: 0.18em;
            font-weight: 600;
        }
        .std-h2 {
            font-size: 46px;
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -0.03em;
            color: #F2EFEA;
        }
        .std-p {
            font-size: 17px;
            line-height: 1.6;
            color: rgba(242, 239, 234, 0.65);
        }
        .std-url {
            font-family: 'Geist Mono', monospace;
            font-size: 13px;
            color: rgba(242, 239, 234, 0.4);
            letter-spacing: 0.2em;
            margin-top: 8px;
        }
        .std-pillars {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 500px;
        }
        .pillar-row {
            display: flex;
            align-items: center;
            padding: 14px 20px;
            background: rgba(255, 255, 255, 0.025);
            border: 1px solid rgba(242, 239, 234, 0.07);
            border-radius: 12px;
            gap: 16px;
        }
        .p-num {
            font-family: 'Geist Mono', monospace;
            font-size: 13px;
            color: #C8323C;
            font-weight: 600;
        }
        .p-title {
            font-size: 16px;
            font-weight: 600;
            color: #F2EFEA;
            width: 140px;
        }
        .p-desc {
            font-size: 13px;
            color: rgba(242, 239, 234, 0.5);
            margin-left: auto;
        }
        """
    },

    # -------------------------------------------------------------
    # 4. LIGHT / WARM PAPER EDITION
    # -------------------------------------------------------------
    {
        "filename": "4_s7_cover_light_paper.png",
        "html_name": "cover4.html",
        "title": "Light / Warm Paper Edition",
        "desc": "Inverted light mode with warm paper (#F6F3EE), deep charcoal typography (#14110F), and deep red (#A81E28).",
        "content": """
        <div class="light-cover">
            <div class="left-hero">
                <div class="light-eyebrow">
                    <span class="light-dot"></span>
                    <span>SERVICE7 &bull; INDEPENDENT SOFTWARE STUDIO</span>
                </div>
                <h1 class="light-h1">
                    Premium software.<br>
                    <span class="light-sub-text">Built to last.</span>
                </h1>
                <p class="light-desc">
                    Fast, local-first and privately yours &mdash; designed and engineered in Morocco, for everyone.
                </p>
                <div class="light-tags">
                    <span class="lt-chip">PILPOD</span>
                    <span class="lt-chip">REQTONE</span>
                    <span class="lt-chip">SERVICES</span>
                    <span class="lt-chip brand">S7.MA</span>
                </div>
            </div>

            <div class="right-badge">
                <div class="light-card">
                    <svg width="120" height="120" viewBox="0 0 100 100">
                        <g fill="none" stroke="#A81E28" stroke-width="4.5" stroke-linejoin="round">
                            <rect x="26" y="26" width="48" height="48" rx="2" />
                            <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
                        </g>
                        <circle cx="50" cy="50" r="3.5" fill="#8E1720" />
                    </svg>
                    <div class="lc-name">SERVICE7</div>
                    <div class="lc-loc">MOROCCO</div>
                </div>
            </div>
        </div>
        """,
        "override_body": "background: #F6F3EE; color: #14110F;",
        "extra_css": """
        .light-cover {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 110px;
        }
        .left-hero {
            max-width: 820px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .light-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 6px 14px;
            background: rgba(168, 30, 40, 0.08);
            border: 1px solid rgba(168, 30, 40, 0.2);
            border-radius: 999px;
            font-family: 'Geist Mono', monospace;
            font-size: 13px;
            color: #A81E28;
            letter-spacing: 0.14em;
            font-weight: 600;
            width: fit-content;
        }
        .light-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #A81E28;
        }
        .light-h1 {
            font-size: 58px;
            font-weight: 700;
            line-height: 1.08;
            letter-spacing: -0.035em;
            color: #14110F;
        }
        .light-sub-text {
            color: rgba(20, 17, 15, 0.55);
        }
        .light-desc {
            font-size: 19px;
            line-height: 1.5;
            color: rgba(20, 17, 15, 0.75);
            max-width: 660px;
        }
        .light-tags {
            display: flex;
            gap: 12px;
            margin-top: 6px;
        }
        .lt-chip {
            font-family: 'Geist Mono', monospace;
            font-size: 12px;
            padding: 5px 12px;
            background: rgba(20, 17, 15, 0.05);
            border: 1px solid rgba(20, 17, 15, 0.12);
            border-radius: 6px;
            color: #14110F;
            letter-spacing: 0.08em;
            font-weight: 600;
        }
        .lt-chip.brand {
            background: #A81E28;
            color: #FFFFFF;
            border-color: #A81E28;
        }
        .light-card {
            width: 260px;
            height: 260px;
            background: #FFFFFF;
            border: 1px solid rgba(20, 17, 15, 0.1);
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 15px 40px rgba(0,0,0,0.06);
            gap: 10px;
        }
        .lc-name {
            font-size: 20px;
            font-weight: 700;
            color: #14110F;
            letter-spacing: 0.06em;
        }
        .lc-loc {
            font-family: 'Geist Mono', monospace;
            font-size: 11px;
            color: rgba(20, 17, 15, 0.5);
            letter-spacing: 0.22em;
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
    width: 1640px;
    height: 624px;
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

  {extra_css}
</style>
</head>
<body>
  {content}
</body>
</html>
"""

for v in variants:
    html_file = os.path.join(COVER_DIR, v["html_name"])
    override_body = v.get("override_body", "")
    rendered_html = html_template.format(
        fonts_dir=FONTS_DIR,
        override_body=override_body,
        extra_css=v["extra_css"],
        content=v["content"]
    )
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    
    png_file = os.path.join(COVER_DIR, v["filename"])
    file_url = "file:///" + html_file.replace("\\", "/")
    cmd = [
        EDGE_PATH,
        "--headless=new",
        f"--screenshot={png_file}",
        "--window-size=1640,624",
        file_url
    ]
    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"Generated Cover: {v['filename']}")

print("All cover photos generated successfully!")
