/* ==========================================================================
   apiic-carousel.js — progressive carousel.

   Any horizontal strip marked `data-apiic-carousel` gains arrows, dot
   pagination, keyboard control and a live count. It enhances markup that
   already works: with JS off the strip is still a scrollable row of cards.

   IMPORTANT — the x-dc renderer owns the DOM it produced. Moving one of its
   nodes (wrapping the track in a new parent) makes its next reconciliation
   call removeChild against a stale parent and the whole page fails to render.
   So this never re-parents anything: it appends exactly one sibling after the
   track and positions the controls there.

   Used where a set is long, homogeneous and browsable — the proof photography
   and the thirteen sectors. Deliberately NOT used for the land-bank tables or
   the link directory, where people scan and compare across rows.
   ========================================================================== */
(function (win, doc) {
  'use strict';

  var API = win.APIIC || (win.APIIC = {});
  var el = API.el;

  var CSS = [
    '.apiic-car-track{scroll-snap-type:x mandatory;scroll-behavior:smooth;',
    '  scrollbar-width:none;-ms-overflow-style:none;padding-bottom:4px}',
    '.apiic-car-track::-webkit-scrollbar{display:none}',
    '.apiic-car-track > *{scroll-snap-align:start;flex:0 0 auto}',
    '.apiic-car-foot{display:flex;align-items:center;gap:12px;margin-top:14px;flex-wrap:wrap}',
    '.apiic-car-btn{width:42px;height:42px;flex:none;border-radius:50%;border:1px solid var(--line);',
    '  background:var(--surface);color:var(--ink);display:grid;place-items:center;cursor:pointer;',
    '  font-size:18px;transition:background .15s ease,border-color .15s ease,opacity .15s ease}',
    '.apiic-car-btn:hover:not([disabled]){border-color:var(--cyan-deep);background:var(--cyan-soft)}',
    '.apiic-car-btn[disabled]{opacity:.34;cursor:default}',
    '.apiic-car-dots{display:flex;gap:7px;align-items:center;flex-wrap:wrap}',
    '.apiic-car-dot{width:8px;height:8px;border-radius:50%;border:none;padding:0;cursor:pointer;',
    '  background:var(--line);transition:width .18s ease,background .18s ease}',
    '.apiic-car-dot[aria-current="true"]{width:26px;border-radius:999px;background:var(--cyan-deep)}',
    '.apiic-car-count{font-variant-numeric:tabular-nums;font-size:11px;',
    '  letter-spacing:0.06em;color:var(--muted);white-space:nowrap;margin-left:auto}',
    '@media(prefers-reduced-motion:reduce){.apiic-car-track{scroll-behavior:auto}}',
    'html[data-apiic-motion="off"] .apiic-car-track{scroll-behavior:auto}'
  ].join('\n');

  function injectCss() {
    if (doc.getElementById('apiic-carousel-css')) return;
    doc.head.appendChild(el('style', { id: 'apiic-carousel-css', html: CSS }));
  }

  /* Index of the slide nearest the left edge of the scroll window. */
  function activeIndex(track) {
    var slides = track.children, best = 0, bestDist = Infinity;
    for (var i = 0; i < slides.length; i++) {
      var d = Math.abs(slides[i].offsetLeft - track.scrollLeft);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    return best;
  }

  /* Fully visible slides — used to step a page at a time. */
  function perView(track) {
    var first = track.children[0];
    if (!first) return 1;
    var w = first.getBoundingClientRect().width;
    var cs = getComputedStyle(track);
    var gap = parseFloat(cs.columnGap || cs.gap || 0) || 0;
    if (!w) return 1;
    return Math.max(1, Math.floor((track.clientWidth + gap) / (w + gap)));
  }

  function build(track) {
    /* Rebuild if our footer was dropped by a re-render. */
    if (track.__apiicFoot && track.__apiicFoot.parentNode) return;
    injectCss();

    var label = track.getAttribute('data-apiic-carousel') || 'items';
    track.classList.add('apiic-car-track');
    track.setAttribute('tabindex', '0');
    track.setAttribute('role', 'group');
    track.setAttribute('aria-roledescription', 'carousel');
    track.setAttribute('aria-label', label);

    var foot = el('div', { 'class': 'apiic-car-foot', 'data-apiic-carfoot': '1' });
    var prev = el('button', { 'class': 'apiic-car-btn', type: 'button', 'aria-label': 'Previous ' + label, html: '<i class="ph ph-caret-left"></i>' });
    var next = el('button', { 'class': 'apiic-car-btn', type: 'button', 'aria-label': 'Next ' + label, html: '<i class="ph ph-caret-right"></i>' });
    var dots = el('div', { 'class': 'apiic-car-dots', role: 'tablist', 'aria-label': label + ' pagination' });
    var count = el('span', { 'class': 'apiic-car-count', 'aria-live': 'polite' });

    foot.appendChild(prev); foot.appendChild(dots); foot.appendChild(next); foot.appendChild(count);

    /* Append only — the track itself is never moved. */
    if (track.nextSibling) track.parentNode.insertBefore(foot, track.nextSibling);
    else track.parentNode.appendChild(foot);
    track.__apiicFoot = foot;

    var n = track.children.length;
    for (var i = 0; i < n; i++) {
      (function (idx) {
        var d = el('button', {
          'class': 'apiic-car-dot', type: 'button', role: 'tab',
          'aria-label': 'Go to ' + label.replace(/s$/, '') + ' ' + (idx + 1)
        });
        d.addEventListener('click', function () { goTo(idx); });
        dots.appendChild(d);
      })(i);
    }

    function goTo(i) {
      var s = track.children[Math.max(0, Math.min(track.children.length - 1, i))];
      if (s) track.scrollTo({ left: s.offsetLeft, behavior: 'smooth' });
    }
    function step(dir) { goTo(activeIndex(track) + dir * perView(track)); }

    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });

    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      else if (e.key === 'End') { e.preventDefault(); goTo(track.children.length - 1); }
    });

    function sync() {
      if (!foot.parentNode) return;
      var total = track.children.length;
      var idx = activeIndex(track);
      var pv = perView(track);
      var all = pv >= total;

      for (var i = 0; i < dots.children.length; i++) {
        dots.children[i].setAttribute('aria-current', String(i === idx));
      }
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      count.textContent = all
        ? total + ' ' + label.toUpperCase()
        : (idx + 1) + '–' + Math.min(total, idx + pv) + ' OF ' + total + ' ' + label.toUpperCase();
      /* Everything already fits: the controls would be noise. */
      foot.style.display = all ? 'none' : 'flex';
    }

    var raf;
    function schedule() { cancelAnimationFrame(raf); raf = requestAnimationFrame(sync); }
    track.addEventListener('scroll', schedule, { passive: true });
    win.addEventListener('resize', schedule);
    win.addEventListener('apiic:theme', schedule);

    sync();
    setTimeout(sync, 300);
    setTimeout(sync, 1000);
  }

  function scan() {
    doc.querySelectorAll('[data-apiic-carousel]').forEach(function (t) {
      /* Skip anything the renderer has not finished populating. */
      if (t.children.length) build(t);
    });
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', scan); else scan();
  [500, 1500, 3000].forEach(function (ms) { setTimeout(scan, ms); });

  API.carousels = scan;
})(window, document);
