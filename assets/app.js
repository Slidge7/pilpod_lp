
  (function() {
    "use strict";

    // ── Dummy data ────────────────────────────────────────────────────────────
    const DUMMY_DATA = {
      allTabs: [
        { id:1, url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ", title:"Rick Astley - Never Gonna Give You Up (Official Music Video)", audible:false, mutedInfo:{muted:true},  status:"complete", media:{artworkUrl:"https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"} },
        { id:2, url:"https://www.youtube.com/watch?v=5qap5aO4i9A", title:"Lofi hip hop mix - Beats to Relax/Study to",                audible:true,  mutedInfo:{muted:false}, status:"complete", media:{artworkUrl:"https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg"} },
        { id:3, url:"https://www.youtube.com/watch?v=4NRXx6U8ABQ", title:"The Weeknd - Blinding Lights (Official Video)",              audible:false, mutedInfo:{muted:false}, status:"complete", media:{artworkUrl:"https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg"} },
        { id:4, url:"https://www.youtube.com/watch?v=5NV6Rdv1a3I", title:"Daft Punk - Get Lucky ft. Pharrell Williams",                audible:false, mutedInfo:{muted:false}, status:"complete", media:{artworkUrl:"https://i.ytimg.com/vi/5NV6Rdv1a3I/hqdefault.jpg"} },
        { id:5, url:"https://www.youtube.com/watch?v=DyDfgMOUjCI", title:"Billie Eilish - Bad Guy",                                    audible:false, mutedInfo:{muted:false}, status:"complete", media:{artworkUrl:"https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg"} },
        { id:6,  url:"https://github.com/tauri-apps/tauri",       title:"tauri-apps/tauri: Build smaller, faster, and more secure desktop applications", audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://github.githubassets.com/favicons/favicon.svg" },
        { id:7,  url:"https://en.wikipedia.org/wiki/Main_Page",   title:"Wikipedia, the free encyclopedia",             audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://en.wikipedia.org/favicon.ico" },
        { id:8,  url:"https://www.reddit.com/r/travel/",          title:"Travel: Discussion, advice, and stories - Reddit", audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://www.reddit.com/favicon.ico" },
        { id:9,  url:"https://react.dev/",                        title:"React: The library for web and native user interfaces", audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://react.dev/favicon.ico" },
        { id:10, url:"https://chatgpt.com/",                      title:"ChatGPT",                                      audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://chatgpt.com/favicon.ico" },
        { id:11, url:"https://www.netflix.com/browse",            title:"Netflix - Watch TV Shows Online",              audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" },
        { id:12, url:"https://news.ycombinator.com/",             title:"Hacker News",                                  audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://news.ycombinator.com/favicon.ico" },
        { id:13, url:"https://vercel.com/dashboard",              title:"Vercel Dashboard",                             audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://vercel.com/favicon.ico" },
        { id:14, url:"https://www.google.com",                    title:"Google",                                       audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://www.google.com/favicon.ico" },
        { id:15, url:"https://tailwindcss.com/docs",              title:"Documentation - Tailwind CSS",                 audible:false, mutedInfo:{muted:false}, status:"complete", favIconUrl:"https://tailwindcss.com/favicons/favicon-32x32.png" }
      ],
      volumes:      { 1:0.85, 2:0.5, 3:1.0, 4:0.3, 5:0.7 },
      playingState: { 1:true,  2:true, 3:false, 4:false, 5:false },
      seekProgress: { 1:42, 2:18, 3:75, 4:10, 5:55 }
    };

    // ── State ─────────────────────────────────────────────────────────────────
    let allTabs      = DUMMY_DATA.allTabs;
    let volumes      = DUMMY_DATA.volumes;
    let playingState = DUMMY_DATA.playingState;
    let seekProgress = DUMMY_DATA.seekProgress;
    let searchQuery  = "";
    let menuOpen     = {};
    let muteAllOn    = false;
    let pauseAllOn   = false;

    // ── Helpers ───────────────────────────────────────────────────────────────
    function escHtml(str) {
      if (!str) return "";
      return String(str).replace(/[&<>"']/g, c =>
        ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])
      );
    }
    function getDomain(url) {
      try { return new URL(url).hostname.replace(/^www\./, ""); }
      catch { return url; }
    }
    function highlight(text, q) {
      if (!q) return escHtml(text);
      const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return escHtml(text).replace(new RegExp("(" + safe + ")", "gi"), '<mark>$1</mark>');
    }
    function isAudioTab(tab) {
      return Boolean(tab.url && (tab.url.includes("youtube.com") || tab.url.includes("youtu.be")));
    }
    function fmtTime(pct, total) {
      const s = Math.round((pct / 100) * total);
      return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    }

    // ── Card builders ─────────────────────────────────────────────────────────
    function buildAudioCard(tab) {
      const isMuted   = tab.mutedInfo?.muted ?? false;
      const isPlaying = playingState[tab.id] ?? false;
      const volGain   = volumes[tab.id] ?? 1;
      const volRaw    = Math.round(volGain * 100);
      const domain    = getDomain(tab.url);
      const artwork   = tab.media?.artworkUrl || "";
      const seek      = seekProgress[tab.id] ?? 0;
      const isOpen    = menuOpen[tab.id] ?? false;
      let badgeState  = tab.audible ? "active" : (isMuted ? "muted" : "inactive");
      const badgeLabel = { active:"active", muted:"muted", inactive:"idle" }[badgeState];
      const volFillPct = (volRaw / 600) * 100;

      return (
        '<div class="pp-audio-wrap" data-wrap-id="' + tab.id + '">' +
          '<div class="pp-item pp-item--audio' + (isOpen ? ' ctrl-open' : '') + '" data-tab-id="' + tab.id + '">' +
            '<div class="pp-thumb-wrap">' +
              (artwork ? '<img class="pp-thumb-img" src="' + escHtml(artwork) + '" alt="" onerror="this.style.display=\'none\'">' :
               '<div class="pp-thumb-placeholder"><span class="svg-icon icon-audio"></span></div>') +
              '<div class="pp-thumb-overlay"><div class="pp-goto-area"><div class="pp-thumb-goto"><span class="svg-icon icon-external"></span></div></div></div>' +
              '<button class="pp-ctrl-trigger" data-action="ctrl-toggle" data-id="' + tab.id + '" title="Show controls">' +
                '<span class="svg-icon ' + (isOpen ? 'icon-chev-up' : 'icon-chev-down') + '"></span>Controls' +
              '</button>' +
            '</div>' +
            '<div class="pp-item-body">' +
              '<div class="pp-item-content">' +
                '<div class="pp-title-row">' +
                  '<div class="pp-item-meta">' +
                    '<div class="pp-item-title">' + highlight(tab.title || domain, searchQuery) + '</div>' +
                    '<div class="pp-item-sub">' + escHtml(domain) + '</div>' +
                  '</div>' +
                  '<div class="pp-badge-slot">' +
                    '<div class="pp-state-badge ' + badgeState + '"><div class="pp-state-dot"></div><span>' + badgeLabel + '</span></div>' +
                  '</div>' +
                '</div>' +
                '<div class="pp-vol-row">' +
                  '<span class="svg-icon pp-vol-icon-btn ' + (isMuted ? 'icon-vol-mute' : 'icon-vol') + '" data-action="mute-icon" data-id="' + tab.id + '"></span>' +
                  '<div class="pp-vol-track" data-action="vol-track" data-id="' + tab.id + '">' +
                    '<div class="pp-vol-rail"></div>' +
                    '<div class="pp-vol-fill" id="vfill-' + tab.id + '" style="width:' + volFillPct + '%"></div>' +
                    '<div class="pp-vol-mid-tick"></div>' +
                    '<div class="pp-vol-thumb" id="vthumb-' + tab.id + '" style="left:' + volFillPct + '%"></div>' +
                    '<input type="range" class="pp-vol-input" data-action="vol-input" data-id="' + tab.id + '" min="0" max="600" step="5" value="' + volRaw + '">' +
                  '</div>' +
                  '<span class="pp-vol-pct" id="vpct-' + tab.id + '">' + volRaw + '%</span>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="pp-play-btn" data-action="play" data-id="' + tab.id + '">' +
              '<span class="svg-icon ' + (isPlaying ? 'icon-pause' : 'icon-play') + '" id="pi-' + tab.id + '"></span>' +
            '</div>' +
            '<div class="pp-progress-bar" style="display:' + (tab.audible || isPlaying ? 'block' : 'none') + '">' +
              '<div class="pp-progress-fill" style="width:' + seek + '%"></div>' +
            '</div>' +
          '</div>' +
          '<div class="pp-inline-ctrl' + (isOpen ? ' open' : '') + '" id="ic-' + tab.id + '">' +
            '<div class="pp-seekbar-wrap">' +
              '<span class="pp-seek-time">' + fmtTime(seek, 240) + '</span>' +
              '<div class="pp-seek-track">' +
                '<div class="pp-seek-fill" id="ic-fill-' + tab.id + '" style="width:' + seek + '%"></div>' +
                '<div class="pp-seek-thumb" id="ic-thumb-' + tab.id + '" style="left:' + seek + '%"></div>' +
                '<input type="range" class="pp-seek-input" data-action="seek-input" data-id="' + tab.id + '" min="0" max="100" value="' + seek + '" step="1">' +
              '</div>' +
              '<span class="pp-seek-time">4:00</span>' +
            '</div>' +
            '<div class="pp-ctrl-row">' +
              '<div class="pp-transport pp-transport--card">' +
                '<button class="pp-transport-btn pp-transport-btn--sm"><span class="svg-icon icon-prev"></span></button>' +
                '<button class="pp-transport-btn pp-transport-btn--sm pp-pip-btn"><span class="svg-icon icon-pip"></span></button>' +
                '<button class="pp-transport-btn pp-transport-btn--sm"><span class="svg-icon icon-next"></span></button>' +
              '</div>' +
              '<button class="pp-reconnect-btn" title="Reconnect"><span class="svg-icon icon-reload"></span></button>' +
              '<button class="pp-ic-close" title="Close tab"><span class="svg-icon icon-close"></span></button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }

    function buildPlainCard(tab) {
      const domain = getDomain(tab.url);
      const favicon = tab.favIconUrl || "";
      const hasFav = Boolean(favicon && !favicon.startsWith("chrome://"));
      return (
        '<div class="pp-item pp-item--plain" data-tab-id="' + tab.id + '">' +
          '<div class="pp-thumb-wrap">' +
            (hasFav
              ? '<div class="pp-thumb-placeholder"><span class="svg-icon icon-open-tab pp-placeholder-hidden"></span></div><img class="pp-thumb-favicon" src="' + escHtml(favicon) + '" alt="" onerror="this.style.display=\'none\'">'
              : '<div class="pp-thumb-placeholder"><span class="svg-icon icon-open-tab"></span></div>') +
            '<div class="pp-thumb-overlay"><div class="pp-goto-area"><div class="pp-thumb-goto"><span class="svg-icon icon-external"></span></div></div></div>' +
          '</div>' +
          '<div class="pp-item-body"><div class="pp-item-content"><div class="pp-title-row"><div class="pp-item-meta">' +
            '<div class="pp-item-title">' + highlight(tab.title || domain, searchQuery) + '</div>' +
            '<div class="pp-item-sub">' + escHtml(domain) + '</div>' +
          '</div></div></div></div>' +
          '<div class="pp-plain-actions">' +
            '<button class="pp-plain-act reload-act" title="Reload"><span class="svg-icon icon-reload"></span></button>' +
            '<button class="pp-plain-act close-plain" title="Close"><span class="svg-icon icon-close"></span></button>' +
          '</div>' +
        '</div>'
      );
    }

    // ── Render ────────────────────────────────────────────────────────────────
    function render() {
      const tabList    = document.getElementById("pp-tabList");
      const emptyState = document.getElementById("pp-emptyState");
      const emptyMsg   = document.getElementById("pp-emptyMsg");

      let filtered = allTabs;
      if (searchQuery) {
        filtered = allTabs.filter(t =>
          t.title.toLowerCase().includes(searchQuery) || t.url.toLowerCase().includes(searchQuery)
        );
      }

      if (!filtered.length) {
        emptyState.classList.remove("hidden");
        emptyMsg.textContent = searchQuery ? 'No tabs match "' + searchQuery + '"' : "No tabs open";
        tabList.innerHTML = "";
        return;
      }
      emptyState.classList.add("hidden");

      const audioTabs = filtered.filter(isAudioTab);
      const plainTabs = filtered.filter(t => !isAudioTab(t));

      let html = "";
      if (audioTabs.length) {
        html += '<div class="pp-section-label"><span class="svg-icon icon-audio"></span> Audio <span class="pp-badge">' + audioTabs.length + '</span></div>';
        audioTabs.forEach(t => { html += buildAudioCard(t); });
      }
      if (plainTabs.length) {
        html += '<div class="pp-section-label pp-section-label--all"><span class="svg-icon icon-grid"></span> All Tabs <span class="pp-badge">' + allTabs.length + '</span></div>';
        plainTabs.forEach(t => { html += buildPlainCard(t); });
      }

      tabList.innerHTML = html;
      wireEvents();
    }

    // ── Event wiring ──────────────────────────────────────────────────────────
    function wireEvents() {
      // Play / pause
      document.querySelectorAll('[data-action="play"]').forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const id = +btn.dataset.id;
          playingState[id] = !(playingState[id] ?? false);
          const ico = document.getElementById("pi-" + id);
          if (ico) ico.className = "svg-icon " + (playingState[id] ? "icon-pause" : "icon-play");
          const bar = btn.closest(".pp-item")?.querySelector(".pp-progress-bar");
          if (bar) bar.style.display = playingState[id] ? "block" : "none";
        });
      });

      // Controls toggle
      document.querySelectorAll('[data-action="ctrl-toggle"]').forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const id = +btn.dataset.id;
          menuOpen[id] = !(menuOpen[id] ?? false);
          const wrap = document.querySelector('[data-wrap-id="' + id + '"]');
          const card = wrap?.querySelector(".pp-item--audio");
          const ctrl = document.getElementById("ic-" + id);
          if (card) card.classList.toggle("ctrl-open", menuOpen[id]);
          if (ctrl) ctrl.classList.toggle("open", menuOpen[id]);
          const ico = btn.querySelector(".svg-icon");
          if (ico) ico.className = "svg-icon " + (menuOpen[id] ? "icon-chev-up" : "icon-chev-down");
        });
      });

      // Volume slider
      document.querySelectorAll('[data-action="vol-input"]').forEach(input => {
        input.addEventListener("input", () => {
          const id  = +input.dataset.id;
          const val = +input.value;
          const pct = (val / 600) * 100;
          volumes[id] = val / 100;
          const fill  = document.getElementById("vfill-" + id);
          const thumb = document.getElementById("vthumb-" + id);
          const label = document.getElementById("vpct-" + id);
          if (fill)  fill.style.width = pct + "%";
          if (thumb) thumb.style.left = pct + "%";
          if (label) label.textContent = val + "%";
        });
      });

      // Seekbar
      document.querySelectorAll('[data-action="seek-input"]').forEach(input => {
        input.addEventListener("input", () => {
          const id  = +input.dataset.id;
          const val = +input.value;
          seekProgress[id] = val;
          const fill  = document.getElementById("ic-fill-" + id);
          const thumb = document.getElementById("ic-thumb-" + id);
          if (fill)  fill.style.width = val + "%";
          if (thumb) thumb.style.left = val + "%";
        });
      });

      // Mute icon toggle
      document.querySelectorAll('[data-action="mute-icon"]').forEach(ico => {
        ico.addEventListener("click", e => {
          e.stopPropagation();
          const id  = +ico.dataset.id;
          const tab = allTabs.find(t => t.id === id);
          if (!tab) return;
          tab.mutedInfo = { muted: !(tab.mutedInfo?.muted) };
          ico.className = "svg-icon pp-vol-icon-btn " + (tab.mutedInfo.muted ? "icon-vol-mute" : "icon-vol");
        });
      });

      // Global: Mute All
      document.getElementById("btnMuteAll")?.addEventListener("click", () => {
        muteAllOn = !muteAllOn;
        document.getElementById("btnMuteAll")?.classList.toggle("on", muteAllOn);
        allTabs.forEach(t => { if (isAudioTab(t)) t.mutedInfo = { muted: muteAllOn }; });
        render();
      });

      // Global: Pause All
      document.getElementById("btnPauseAll")?.addEventListener("click", () => {
        pauseAllOn = !pauseAllOn;
        document.getElementById("btnPauseAll")?.classList.toggle("on", pauseAllOn);
        if (pauseAllOn) { allTabs.forEach(t => { if (isAudioTab(t)) playingState[t.id] = false; }); render(); }
      });

      // Global: Reset volumes
      document.getElementById("btnResetVolumes")?.addEventListener("click", () => {
        allTabs.forEach(t => { if (isAudioTab(t)) volumes[t.id] = 1; });
        render();
      });

      // Close plain tabs
      document.querySelectorAll(".close-plain").forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const item = btn.closest(".pp-item--plain");
          if (!item) return;
          const id = +item.dataset.tabId;
          allTabs = allTabs.filter(t => t.id !== id);
          render();
        });
      });
    }

    // ── Search ────────────────────────────────────────────────────────────────
    document.addEventListener("DOMContentLoaded", () => {
      render();
      document.getElementById("pp-searchInput")?.addEventListener("input", e => {
        searchQuery = e.target.value.trim().toLowerCase();
        render();
      });
      document.getElementById("btnRefresh")?.addEventListener("click", () => render());
    });

  })();
  


  (function() {
    "use strict";

    /* ─── Scroll reveal ─── */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.09 + 's';
      observer.observe(el);
    });

  })();
  
