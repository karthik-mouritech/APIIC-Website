/* ==========================================================================
   apiic-search.js — site-wide search overlay.
   Opens on Ctrl/⌘+K or "/", ranks across pages, people, offices and every
   published apiic.in link, and is fully keyboard driven.
   ========================================================================== */
(function (win, doc) {
  'use strict';

  var API = win.APIIC || (win.APIIC = {});
  var el = API.el, esc = API.esc;
  var RECENT_KEY = 'apiic.recent';
  var MAX_RECENT = 6;
  var MARK_OPEN = '<mark style="background:var(--gold-soft);color:inherit;padding:0 1px;border-radius:3px">';

  var corpus = null;
  function getCorpus() {
    if (!corpus) corpus = (win.APIIC_DATA && win.APIIC_DATA.searchCorpus()) || [];
    return corpus;
  }

  var POPULAR = [
    'available land', 'incentives', 'board of directors', 'zonal office',
    'allotment regulations', 'building permission', 'tenders', 'park finder'
  ];

  function reEscape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /* ----------------------------------------------------------- scoring ---- */
  /* Deterministic, explainable ranking: exact title beats prefix, prefix beats
     word-boundary, then keyword, then description, then subsequence. */
  function subsequence(needle, hay) {
    var i = 0;
    for (var j = 0; j < hay.length && i < needle.length; j++) if (hay[j] === needle[i]) i++;
    return i === needle.length;
  }

  function scoreOne(item, q, tokens) {
    var title = item.title.toLowerCase();
    var kw = (item.kw || '').toLowerCase();
    var desc = (item.desc || '').toLowerCase();
    var s = 0;

    if (title === q) s += 1000;
    else if (title.indexOf(q) === 0) s += 620;
    else if (new RegExp('\\b' + reEscape(q)).test(title)) s += 460;
    else if (title.indexOf(q) > -1) s += 300;

    if (kw.indexOf(q) > -1) s += 150;
    if (desc.indexOf(q) > -1) s += 90;

    tokens.forEach(function (t) {
      if (t.length < 2) return;
      if (title.indexOf(t) > -1) s += 70;
      if (kw.indexOf(t) > -1) s += 42;
      if (desc.indexOf(t) > -1) s += 18;
      if (String(item.cat || '').toLowerCase().indexOf(t) > -1) s += 30;
    });

    if (!s && q.length >= 3 && subsequence(q, title)) s += 40;

    /* Prefer destinations inside the prototype over deep external links, and
       give the primary page records a small edge over generated link records. */
    if (s) {
      if (item.cat === 'Page' || item.cat === 'Tool' || item.cat === 'Land') s += 24;
      if (item.ext) s -= 18;
    }
    return s;
  }

  function search(query) {
    var q = String(query || '').trim().toLowerCase();
    if (!q) return [];
    var tokens = q.split(/\s+/);
    var out = [];
    getCorpus().forEach(function (item) {
      var s = scoreOne(item, q, tokens);
      if (s > 0) out.push({ item: item, score: s });
    });
    out.sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); });
    return out;
  }

  /* --------------------------------------------------------- highlighting - */
  /* Walk the match ranges and escape each segment separately, so highlighted
     markup never has to round-trip through a placeholder character. */
  function mark(text, q) {
    var raw = String(text == null ? '' : text);
    if (!q) return esc(raw);
    var tokens = q.trim().split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!tokens.length) return esc(raw);
    var pattern = tokens.map(reEscape)
      .sort(function (a, b) { return b.length - a.length; }).join('|');
    var re = new RegExp('(' + pattern + ')', 'gi');
    var out = '', last = 0, m;
    while ((m = re.exec(raw)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      out += esc(raw.slice(last, m.index)) + MARK_OPEN + esc(m[0]) + '</mark>';
      last = m.index + m[0].length;
    }
    return out + esc(raw.slice(last));
  }

  /* --------------------------------------------------------------- state -- */
  var ui = null, results = [], cursor = 0, facet = 'all';

  function recents() {
    try { return JSON.parse(API.store(RECENT_KEY) || '[]'); } catch (e) { return []; }
  }
  function pushRecent(q) {
    q = String(q || '').trim(); if (q.length < 2) return;
    var list = recents().filter(function (x) { return x.toLowerCase() !== q.toLowerCase(); });
    list.unshift(q);
    API.store(RECENT_KEY, JSON.stringify(list.slice(0, MAX_RECENT)));
  }

  function facets(all) {
    var counts = {};
    all.forEach(function (r) { counts[r.item.cat] = (counts[r.item.cat] || 0) + 1; });
    return Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })
      .map(function (k) { return { cat: k, n: counts[k] }; });
  }

  /* ----------------------------------------------------------- rendering -- */
  function chipRow(items, attr) {
    return items.map(function (t) {
      return '<button class="apiic-btn" data-' + attr + '="' + esc(t) + '" style="font-size:13px;padding:7px 13px">'
        + esc(t) + '</button>';
    }).join('');
  }

  function emptyState() {
    var rec = recents();
    var tiles = [['ph-map-pin-area', 'Land &amp; parks', 'APIIC-Land-Parks-Hub.dc.html'],
                 ['ph-users-three', 'Leadership', 'APIIC-Leadership.dc.html'],
                 ['ph-list-dashes', 'All links', 'APIIC-Link-Directory.dc.html'],
                 ['ph-lifebuoy', 'Help desk', 'APIIC-Help-Desk.dc.html']];
    return '<div style="padding:26px 26px 30px">'
      + (rec.length
          ? '<div class="apiic-mono" style="font-size:11.5px;letter-spacing:0.07em;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Recent searches</div>'
            + '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px">' + chipRow(rec, 'q') + '</div>'
          : '')
      + '<div class="apiic-mono" style="font-size:11.5px;letter-spacing:0.07em;text-transform:uppercase;color:var(--muted);margin-bottom:10px">What people look for</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:8px">' + chipRow(POPULAR, 'q') + '</div>'
      + '<div style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px">'
      + tiles.map(function (x) {
          return '<a href="' + x[2] + '" style="display:flex;align-items:center;gap:10px;padding:13px 14px;border:1px solid var(--line);border-radius:12px;font-size:14.5px;font-weight:500;color:var(--ink)">'
            + '<i class="ph-duotone ' + x[0] + '" style="font-size:20px;color:var(--cyan-deep)"></i>' + x[1] + '</a>';
        }).join('')
      + '</div></div>';
  }

  function resultRow(r, i, q) {
    var it = r.item;
    var active = i === cursor;
    return '<a href="' + esc(it.url) + '" data-idx="' + i + '"'
      + (it.ext ? ' target="_blank" rel="noopener"' : '')
      + ' style="display:flex;gap:14px;align-items:flex-start;padding:13px 26px;border-left:3px solid '
      + (active ? 'var(--cyan-deep)' : 'transparent') + ';background:' + (active ? 'var(--cyan-soft)' : 'transparent') + ';color:var(--ink)">'
      + '<span style="width:36px;height:36px;flex:none;border-radius:10px;background:var(--tint-sky);display:grid;place-items:center">'
      + '<i class="ph ' + (it.icon || 'ph-file') + '" style="font-size:18px;color:var(--indigo)"></i></span>'
      + '<span style="flex:1;min-width:0">'
      + '<span style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
      + '<span style="font-weight:600;font-size:15.5px;line-height:1.3">' + mark(it.title, q) + '</span>'
      + (it.ext ? '<span class="apiic-mono" style="font-size:10px;border:1px solid var(--line);border-radius:4px;padding:1px 5px;color:var(--muted)">EXTERNAL &#8599;</span>' : '')
      + '</span>'
      + '<span style="display:block;font-size:13.5px;color:var(--muted);line-height:1.45;margin-top:3px">'
      + mark(it.desc || '', q) + '</span>'
      + '</span>'
      + '<span class="apiic-mono" style="flex:none;font-size:10.5px;color:var(--muted);text-transform:uppercase;letter-spacing:0.05em;padding-top:4px;max-width:120px;text-align:right">'
      + esc(it.cat) + '</span></a>';
  }

  function render() {
    if (!ui) return;
    var q = ui.input.value;
    var all = search(q);
    var fs = facets(all);
    results = facet === 'all' ? all : all.filter(function (r) { return r.item.cat === facet; });
    if (cursor >= results.length) cursor = Math.max(0, results.length - 1);

    if (!q.trim()) {
      ui.facets.innerHTML = '';
      ui.body.innerHTML = emptyState();
      ui.count.textContent = String(getCorpus().length) + ' ITEMS INDEXED';
      bindBody();
      return;
    }

    ui.facets.innerHTML = '<button class="apiic-btn" data-facet="all" style="font-size:12.5px;padding:6px 12px'
      + (facet === 'all' ? ';border-color:var(--cyan-deep);background:var(--cyan-soft)' : '') + '">All <b>' + all.length + '</b></button>'
      + fs.slice(0, 8).map(function (f) {
        return '<button class="apiic-btn" data-facet="' + esc(f.cat) + '" style="font-size:12.5px;padding:6px 12px'
          + (facet === f.cat ? ';border-color:var(--cyan-deep);background:var(--cyan-soft)' : '') + '">'
          + esc(f.cat) + ' <b>' + f.n + '</b></button>';
      }).join('');

    ui.count.textContent = results.length === 0 ? 'NO MATCHES'
      : results.length + (results.length === 1 ? ' RESULT' : ' RESULTS');

    if (!results.length) {
      ui.body.innerHTML = '<div style="padding:40px 26px;text-align:center">'
        + '<i class="ph ph-magnifying-glass" style="font-size:34px;color:var(--muted)"></i>'
        + '<div style="font-family:Sora,sans-serif;font-weight:600;font-size:21px;margin-top:12px;letter-spacing:-0.02em">Nothing matched &ldquo;' + esc(q) + '&rdquo;</div>'
        + '<div style="color:var(--muted);font-size:14.5px;margin-top:8px;max-width:44ch;margin-left:auto;margin-right:auto;line-height:1.55">'
        + 'Search covers every page, every board member, all 14 zonal offices and every link published on apiic.in. '
        + 'Try a shorter term &mdash; or ask the assistant, which can hand you to the desk that owns the answer.</div>'
        + '<div style="display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap">'
        + '<button class="apiic-btn apiic-btn-primary" data-ask="1"><i class="ph ph-robot"></i>Ask the assistant</button>'
        + '<a class="apiic-btn" href="APIIC-Help-Desk.dc.html#ticket"><i class="ph ph-lifebuoy"></i>Raise a ticket</a>'
        + '</div></div>';
      bindBody();
      return;
    }

    ui.body.innerHTML = '<div style="padding:8px 0 14px">'
      + results.slice(0, 40).map(function (r, i) { return resultRow(r, i, q); }).join('')
      + (results.length > 40 ? '<div class="apiic-mono" style="padding:14px 26px 4px;font-size:11px;color:var(--muted)">SHOWING FIRST 40 OF ' + results.length + ' &mdash; NARROW THE TERM OR PICK A CATEGORY</div>' : '')
      + '</div>';
    bindBody();
    scrollToCursor();
  }

  function bindBody() {
    ui.body.querySelectorAll('[data-q]').forEach(function (b) {
      b.addEventListener('click', function () { ui.input.value = b.getAttribute('data-q'); cursor = 0; facet = 'all'; render(); ui.input.focus(); });
    });
    ui.body.querySelectorAll('[data-idx]').forEach(function (a) {
      a.addEventListener('mouseenter', function () { cursor = +a.getAttribute('data-idx'); paintCursor(); });
      a.addEventListener('click', function () { pushRecent(ui.input.value); });
    });
    var ask = ui.body.querySelector('[data-ask]');
    if (ask) ask.addEventListener('click', function () {
      var q = ui.input.value; close();
      if (API.openChat) API.openChat(q);
    });
    ui.facets.querySelectorAll('[data-facet]').forEach(function (b) {
      b.addEventListener('click', function () { facet = b.getAttribute('data-facet'); cursor = 0; render(); ui.input.focus(); });
    });
  }

  function paintCursor() {
    ui.body.querySelectorAll('[data-idx]').forEach(function (a) {
      var on = +a.getAttribute('data-idx') === cursor;
      a.style.borderLeftColor = on ? 'var(--cyan-deep)' : 'transparent';
      a.style.background = on ? 'var(--cyan-soft)' : 'transparent';
    });
  }
  function scrollToCursor() {
    var a = ui.body.querySelector('[data-idx="' + cursor + '"]');
    if (a && a.scrollIntoView) a.scrollIntoView({ block: 'nearest' });
  }

  /* ------------------------------------------------------------ open/close - */
  function open(initial) {
    /* Make sure the theme tokens and platform CSS are present before we paint —
       the renderer may have just cleared them. */
    if (API.ensure) API.ensure();
    if (ui) { ui.input.focus(); if (initial) { ui.input.value = initial; render(); } return; }
    var scrim = el('div', { 'class': 'apiic-scrim apiic-ui' });
    var box = el('div', { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Search this site' });
    box.className = 'apiic-ui';
    box.style.cssText = 'position:fixed;left:50%;top:8vh;transform:translateX(-50%) translateY(-6px);z-index:2200;'
      + 'width:min(760px,calc(100vw - 28px));max-height:80vh;display:flex;flex-direction:column;'
      + 'background:var(--surface);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-lg);'
      + 'overflow:hidden;opacity:0;transition:opacity .16s ease,transform .16s ease';

    box.innerHTML = '<div style="display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line)">'
      + '<i class="ph ph-magnifying-glass" style="font-size:21px;color:var(--indigo);flex:none"></i>'
      + '<input id="apiic-q" autocomplete="off" spellcheck="false" placeholder="Search parks, policies, people, offices, links&hellip;" '
      + 'aria-label="Search query" style="flex:1;min-width:0;font:inherit;font-size:17.5px;border:none;outline:none;background:none;color:var(--ink)">'
      + '<span id="apiic-count" class="apiic-mono" style="font-size:10.5px;color:var(--muted);letter-spacing:0.06em;flex:none"></span>'
      + '<button data-close="1" aria-label="Close search" class="apiic-mono" style="flex:none;background:none;border:1px solid var(--line);border-radius:6px;color:var(--muted);font-size:10.5px;padding:4px 7px;cursor:pointer">ESC</button>'
      + '</div>'
      + '<div id="apiic-facets" style="display:flex;gap:7px;padding:11px 20px 0;overflow-x:auto;flex-wrap:nowrap"></div>'
      + '<div id="apiic-body" style="flex:1;overflow-y:auto;min-height:0;margin-top:8px"></div>'
      + '<div class="apiic-mono" style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;padding:11px 20px;border-top:1px solid var(--line);background:var(--paper);font-size:10.5px;color:var(--muted);letter-spacing:0.05em">'
      + '<span>&uarr; &darr; NAVIGATE</span><span>&crarr; OPEN</span><span>ESC CLOSE</span>'
      + '<span style="flex:1"></span><span>ASK THE ASSISTANT FOR WHAT SEARCH CANNOT FIND</span></div>';

    doc.body.appendChild(scrim); doc.body.appendChild(box);
    ui = {
      scrim: scrim, box: box,
      input: box.querySelector('#apiic-q'),
      body: box.querySelector('#apiic-body'),
      facets: box.querySelector('#apiic-facets'),
      count: box.querySelector('#apiic-count')
    };

    requestAnimationFrame(function () {
      scrim.setAttribute('data-in', '1');
      box.style.opacity = '1'; box.style.transform = 'translateX(-50%)';
    });

    scrim.addEventListener('click', close);
    box.querySelector('[data-close]').addEventListener('click', close);
    ui.input.addEventListener('input', function () { cursor = 0; facet = 'all'; render(); });
    box.addEventListener('keydown', keys);

    if (initial) ui.input.value = initial;
    cursor = 0; facet = 'all';
    render();
    ui.input.focus();
    ui.input.select();
  }

  function keys(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (results.length) { cursor = (cursor + 1) % results.length; paintCursor(); scrollToCursor(); } }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (results.length) { cursor = (cursor - 1 + results.length) % results.length; paintCursor(); scrollToCursor(); } }
    else if (e.key === 'Enter') {
      var a = ui.body.querySelector('[data-idx="' + cursor + '"]');
      if (a) {
        pushRecent(ui.input.value); e.preventDefault();
        if (a.getAttribute('target') === '_blank') win.open(a.href, '_blank'); else win.location.href = a.href;
      }
    }
  }

  function close() {
    if (!ui) return;
    var q = ui.input.value;
    if (q.trim()) pushRecent(q);
    ui.scrim.removeAttribute('data-in');
    ui.box.style.opacity = '0';
    var s = ui.scrim, b = ui.box;
    setTimeout(function () {
      if (s.parentNode) s.parentNode.removeChild(s);
      if (b.parentNode) b.parentNode.removeChild(b);
    }, 180);
    ui = null;
  }

  /* ------------------------------------------------------------ shortcuts - */
  doc.addEventListener('keydown', function (e) {
    var t = e.target, tag = t && t.tagName;
    var inField = tag === 'INPUT' || tag === 'TEXTAREA' || (t && t.isContentEditable);
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); open(); return; }
    if (e.key === '/' && !inField && !e.ctrlKey && !e.metaKey) { e.preventDefault(); open(); }
  });

  /* Any element marked data-apiic-search becomes a search trigger, and a
     ?q= parameter opens the overlay pre-filled — so a result set is linkable. */
  function wire() {
    doc.querySelectorAll('[data-apiic-search]').forEach(function (n) {
      if (n.__apiicWired) return; n.__apiicWired = true;
      n.addEventListener('click', function (e) { e.preventDefault(); open(); });
    });
    var m = /[?&]q=([^&]+)/.exec(win.location.search);
    if (m && !ui) open(decodeURIComponent(m[1].replace(/\+/g, ' ')));
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', wire); else wire();
  /* The x-dc renderer paints asynchronously; re-wire once it settles. */
  setTimeout(wire, 400); setTimeout(wire, 1200);

  Object.assign(API, { openSearch: open, closeSearch: close, runSearch: search });
})(window, document);
