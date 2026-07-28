/* ==========================================================================
   apiic-core.js — platform core: theme engine, text scale, appearance panel,
   toasts and shared DOM/storage helpers.
   Runs independently of the x-dc renderer: it drives document-level concerns
   through CSS custom properties, so every existing page inherits a theme
   without being rewritten.
   ========================================================================== */
(function (win, doc) {
  'use strict';

  var LS = { theme: 'apiic.theme', scale: 'apiic.scale', motion: 'apiic.motion' };

  /* -------------------------------------------------------------- utils --- */
  function store(k, v) {
    try { if (v === undefined) return win.localStorage.getItem(k); win.localStorage.setItem(k, v); } catch (e) { return null; }
  }
  function el(tag, attrs, kids) {
    var n = doc.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* Minimal inline markup: **bold** only. Input is escaped first. */
  function md(s) { return esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'); }

  /* ------------------------------------------------------------- themes --- */
  /* Four complete token sets. Names are deliberately plain-language: a user
     picking a theme should not have to decode a design term.               */
  var THEMES = {
    daylight: {
      label: 'Daylight', hint: 'The default. White surfaces, navy ink.', icon: 'ph-sun', swatch: ['#FFFFFF', '#245484', '#009C54'],
      vars: {
        '--ink': '#16385C', '--indigo': '#245484', '--royal': '#245484', '--royal2': '#2E6399',
        '--cyan': '#D8783C', '--cyan-deep': '#B75F28', '--cyan-soft': '#FBEEE4',
        '--tint-lav': '#EDF2F8', '--tint-mint': '#E6F5EE', '--tint-peach': '#FBEEE4',
        '--tint-sky': '#EDF2F8', '--tint-violet': '#EDF2F8', '--tint-rose': '#FBEEE4',
        '--gold': '#D8783C', '--gold-soft': '#F5DCC8', '--tide': '#009C54', '--err': '#B3261E',
        '--on-tint': '#245484', '--paper': '#F7F9FB', '--surface': '#FFFFFF', '--line': '#DDE4EC', '--muted': '#5A6B7A',
        '--shadow': '0 10px 26px -18px rgba(22,56,92,0.24)', '--shadow-lg': '0 30px 60px -40px rgba(22,56,92,0.38)'
      }
    },
    midnight: {
      label: 'Midnight', hint: 'Dark surfaces for low light and long sessions.', icon: 'ph-moon-stars', swatch: ['#0B1220', '#8FB6E4', '#00C46A'],
      dark: true,
      vars: {
        '--ink': '#E7EEF8', '--indigo': '#8FB6E4', '--royal': '#12293F', '--royal2': '#1B3D5C',
        '--cyan': '#E4915B', '--cyan-deep': '#EFA875', '--cyan-soft': '#33200F',
        '--tint-lav': '#171B33', '--tint-mint': '#0F2A22', '--tint-peach': '#2C1E12',
        '--tint-sky': '#132340', '--tint-violet': '#1F1936', '--tint-rose': '#2B1522',
        '--gold': '#E4915B', '--gold-soft': '#33200F', '--tide': '#00C46A', '--err': '#FF8A80',
        '--on-tint': '#CFE0FF', '--paper': '#080D17', '--surface': '#101A2C', '--line': '#26344C', '--muted': '#9DB0C7',
        '--shadow': '0 14px 34px -20px rgba(0,0,0,0.75)', '--shadow-lg': '0 26px 60px -28px rgba(0,0,0,0.85)'
      }
    },
    coastal: {
      label: 'Coastal', hint: 'Warm paper and teal — easiest for long reading.', icon: 'ph-waves', swatch: ['#F4F1E8', '#0B5E38', '#009C54'],
      vars: {
        '--ink': '#122A20', '--indigo': '#0B5E38', '--royal': '#083F28', '--royal2': '#0C5A38',
        '--cyan': '#C06A34', '--cyan-deep': '#944F22', '--cyan-soft': '#F7E7DA',
        '--tint-lav': '#EDEEE4', '--tint-mint': '#E2F0E9', '--tint-peach': '#F8EEDF',
        '--tint-sky': '#E4EEEE', '--tint-violet': '#EFEAE2', '--tint-rose': '#F8E9E4',
        '--gold': '#C06A34', '--gold-soft': '#F0DCC4', '--tide': '#009C54', '--err': '#9E2B1F',
        '--on-tint': '#083F28', '--paper': '#F4F1E8', '--surface': '#FDFBF5', '--line': '#DCD6C6', '--muted': '#5C6A63',
        '--shadow': '0 14px 34px -20px rgba(16,42,43,0.28)', '--shadow-lg': '0 26px 60px -28px rgba(16,42,43,0.38)'
      }
    },
    contrast: {
      label: 'High Contrast', hint: 'Maximum legibility. Meets WCAG 2.2 AAA text contrast.', icon: 'ph-circle-half', swatch: ['#000000', '#FFFFFF', '#FFD400'],
      dark: true, contrast: true,
      vars: {
        '--ink': '#FFFFFF', '--indigo': '#8FD8FF', '--royal': '#000000', '--royal2': '#101010',
        '--cyan': '#FFD400', '--cyan-deep': '#FFE666', '--cyan-soft': '#1A1A00',
        '--tint-lav': '#101010', '--tint-mint': '#0A140A', '--tint-peach': '#141005',
        '--tint-sky': '#0A1014', '--tint-violet': '#100A14', '--tint-rose': '#140A0F',
        '--gold': '#FFD400', '--gold-soft': '#1A1A00', '--tide': '#5BE79A', '--err': '#FF9A8A',
        '--on-tint': '#FFFFFF', '--paper': '#000000', '--surface': '#0B0B0B', '--line': '#6E6E6E', '--muted': '#D6D6D6',
        '--shadow': 'none', '--shadow-lg': '0 0 0 1px #6E6E6E'
      }
    }
  };

  var SCALES = {
    small: { label: 'Small', size: '16px' },
    base: { label: 'Default', size: '18px' },
    large: { label: 'Large', size: '20.5px' },
    xlarge: { label: 'Largest', size: '23px' }
  };
  var SCALE_ORDER = ['small', 'base', 'large', 'xlarge'];

  /* Literal colours baked into inline styles across the prototype. In a light
     theme they are correct; in a dark theme they punch holes. These rules use
     substring matching on the style attribute, so they reach inline styles
     without touching a single page file. */
  /* Pale surfaces and dark inks that a handful of pages hard-code instead of
     using a token. In a light theme they are right; in a dark theme they punch
     holes. We reach them by substring-matching the style attribute.

     The x-dc renderer re-serializes inline styles through the CSSOM, so the
     attribute reads `background: rgb(237, 240, 242)` rather than the authored
     `background:#EDF0F2`. Both forms are emitted, since a page may be matched
     before or after the renderer has touched it. */
  var PALE_SURFACES = ['#EDF0F2', '#FBF6EA', '#F6F7F5', '#FFFFFF', '#FDF7F6', '#E4E8EA', '#FBF3F2', '#F7F9FA', '#FAFBFC'];
  var DARK_INKS = ['#163A5F', '#06203F', '#9AA8B4'];

  function rgbOf(hex) {
    var h = hex.replace('#', '');
    return 'rgb(' + parseInt(h.slice(0, 2), 16) + ', ' + parseInt(h.slice(2, 4), 16) + ', ' + parseInt(h.slice(4, 6), 16) + ')';
  }

  /* Every spelling of one declaration the renderer might leave behind. */
  function variants(prop, hex) {
    var rgb = rgbOf(hex);
    return [
      prop + ':' + hex, prop + ': ' + hex,
      prop + ':' + hex.toLowerCase(), prop + ': ' + hex.toLowerCase(),
      prop + ':' + rgb, prop + ': ' + rgb
    ];
  }

  function literalCss(sel) {
    var out = '';
    PALE_SURFACES.forEach(function (hex) {
      out += variants('background', hex).map(function (v) {
        return sel + ' [style*="' + v + '"]';
      }).join(',') + '{background:var(--surface) !important;}\n';
    });
    DARK_INKS.forEach(function (hex) {
      out += variants('color', hex).map(function (v) {
        return sel + ' [style*="' + v + '"]';
      }).join(',') + '{color:var(--ink) !important;}\n';
    });
    return out;
  }

  function themeCss() {
    var css = '';
    Object.keys(THEMES).forEach(function (key) {
      var t = THEMES[key], sel = 'html[data-apiic-theme="' + key + '"]';
      css += sel + '{';
      Object.keys(t.vars).forEach(function (v) { css += v + ':' + t.vars[v] + ';'; });
      css += 'color-scheme:' + (t.dark ? 'dark' : 'light') + ';}\n';
      css += sel + ' body{background:var(--paper) !important;color:var(--ink) !important;}\n';
      if (t.dark) css += literalCss(sel);
      if (t.contrast) {
        css += sel + ' a{text-decoration:underline !important;}\n';
        css += sel + ' *{text-shadow:none !important;}\n';
        css += sel + ' [style*="opacity:0.3"],' + sel + ' [style*="opacity:0.35"]{opacity:1 !important;}\n';
      }
    });
    Object.keys(SCALES).forEach(function (k) {
      css += 'html[data-apiic-scale="' + k + '"] body{font-size:' + SCALES[k].size + ' !important;}\n';
    });
    css += 'html[data-apiic-motion="off"] *{animation:none !important;transition:none !important;scroll-behavior:auto !important;}\n';
    /* Images that are logos should never be inverted by a dark theme. */
    css += 'html[data-apiic-theme="midnight"] .apiic-logo-img,html[data-apiic-theme="contrast"] .apiic-logo-img'
        + '{background:#FFFFFF;border-radius:8px;padding:4px;}\n';
    return css;
  }

  /* ---------------------------------------------------- responsive layer -- */
  /* Every page in this prototype was authored for a 1320px desktop container
     with inline styles: fixed 40px gutters, display:grid with wide minmax()
     tracks, and heading sizes in the 40–56px range. None of that reflows on a
     handset, and inline styles cannot be overridden by ordinary rules — hence
     the attribute selectors and !important below.

     The renderer re-serializes inline styles through the CSSOM, so a declaration
     authored as `max-width:1320px` reads back as `max-width: 1320px`. Both
     spellings are matched. */
  var GUTTER = '[style*="max-width:1320px"],[style*="max-width: 1320px"]';

  /* Grid tracks wider than the viewport are the main cause of overflow.
     Collapse every wide minmax() to one column — and to minmax(0,1fr), not
     1fr: a bare 1fr keeps its automatic minimum size, so a single wide child
     still forces the track (and the page) past the viewport. */
  function gridCollapse() {
    var out = [];
    for (var w = 200; w <= 420; w += 5) {
      out.push('[style*="minmax(' + w + 'px"]');
      out.push('[style*="minmax( ' + w + 'px"]');
    }
    return out.join(',') + '{grid-template-columns:minmax(0,1fr) !important}';
  }

  var RESPONSIVE_CSS = [
    '@media(max-width:760px){',
    /* 1. Gutters: 40px each side leaves too little for content. */
    '  ' + GUTTER + '{padding-left:16px !important;padding-right:16px !important}',
    /* 2. Nothing may force the document wider than the screen. */
    '  html,body{max-width:100% !important;overflow-x:hidden !important}',
    /* 3. Collapse multi-column grids to a single column. */
    '  ' + gridCollapse(),
    '  [style*="grid-template-columns:repeat(2"],[style*="grid-template-columns: repeat(2"],',
    '  [style*="grid-template-columns:repeat(3"],[style*="grid-template-columns: repeat(3"],',
    '  [style*="grid-template-columns:repeat(4"],[style*="grid-template-columns: repeat(4"]',
    '    {grid-template-columns:minmax(0,1fr) !important}',
    /* 3b. Grid children default to min-width:auto, which lets one wide child
           (a long heading, a wide table) push the whole track open. Grid only:
           on a flex row the authored min-width is what triggers flex-wrap, so
           zeroing it there would squeeze columns instead of stacking them. */
    '  [style*="display:grid"] > *,[style*="display: grid"] > *{min-width:0}',
    /* 4. Fluid display type. Inline font sizes are absolute, so clamp them. */
    '  h1{font-size:clamp(30px,8.4vw,40px) !important;line-height:1.12 !important;letter-spacing:-0.03em !important}',
    '  h2{font-size:clamp(24px,6.4vw,30px) !important;line-height:1.18 !important}',
    '  h3{font-size:clamp(19px,5vw,23px) !important;line-height:1.25 !important}',
    /* 5. Fixed-width side panels become fluid so they stack full width.
          Authored min-widths are deliberately left alone — they are the trigger
          that makes a wrapping flex row break onto a second line. */
    '  [style*="width:250px"],[style*="width: 250px"],[style*="width:330px"],[style*="width: 330px"]',
    '    {width:100% !important}',
    /* Any flex row holding a panel wide enough to need its own line must wrap. */
    '  [style*="display:flex"][style*="gap:48px"],[style*="display: flex"][style*="gap: 48px"],',
    '  [style*="display:flex"][style*="gap:44px"],[style*="display: flex"][style*="gap: 44px"],',
    '  [style*="display:flex"][style*="gap:36px"],[style*="display: flex"][style*="gap: 36px"]',
    '    {flex-wrap:wrap !important}',
    /* 6. Wide tables scroll inside a wrapper (added by wrapTables) rather than
          the page. The table keeps table layout, so columns stay aligned. */
    '  [data-apiic-tablewrap]{overflow-x:auto;max-width:100%;-webkit-overflow-scrolling:touch}',
    /* 7. Media never exceeds its column. */
    '  img,svg,canvas,iframe{max-width:100% !important;height:auto}',
    /* 8. Long strings (emails, references) wrap instead of pushing the layout. */
    '  a,td,th,p,span,div{overflow-wrap:break-word}',
    /* 9. Tighten the generous desktop vertical rhythm. */
    '  [style*="padding:88px"],[style*="padding: 88px"],[style*="padding:80px"],[style*="padding: 80px"],',
    '  [style*="padding:72px"],[style*="padding: 72px"]{padding-top:44px !important;padding-bottom:44px !important}',
    '}',
    /* Tablet: two columns instead of one, same overflow guarantees. */
    '@media(min-width:761px) and (max-width:1024px){',
    '  ' + GUTTER + '{padding-left:26px !important;padding-right:26px !important}',
    '  h1{font-size:clamp(36px,5.4vw,46px) !important}',
    '  table{max-width:100% !important}',
    '}'
  ].join('\n');

  /* --------------------------------------------------------- platform css - */
  var PLATFORM_CSS = [
    '.apiic-ui{font-family:"Instrument Sans",system-ui,sans-serif;color:var(--ink);box-sizing:border-box}',
    '.apiic-ui *,.apiic-ui *::before,.apiic-ui *::after{box-sizing:border-box}',
    '.apiic-scrim{position:fixed;inset:0;z-index:2000;background:rgba(4,12,28,0.55);backdrop-filter:blur(3px);opacity:0;transition:opacity .18s ease}',
    '.apiic-scrim[data-in="1"]{opacity:1}',
    '.apiic-pop{position:fixed;z-index:2100;background:var(--surface);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden}',
    '.apiic-btn{font:inherit;cursor:pointer;border-radius:999px;border:1px solid var(--line);background:var(--surface);color:var(--ink);padding:9px 15px;font-size:14px;display:inline-flex;align-items:center;gap:8px;transition:background .14s ease,border-color .14s ease}',
    '.apiic-btn:hover{border-color:var(--cyan-deep);background:var(--cyan-soft)}',
    '.apiic-btn-primary{background:linear-gradient(120deg,var(--royal),var(--royal2));border-color:transparent;color:#FFFFFF;font-weight:600}',
    '.apiic-btn-primary:hover{background:linear-gradient(120deg,var(--royal2),var(--indigo));color:#FFFFFF}',
    'html[data-apiic-theme="contrast"] .apiic-btn-primary{background:#FFD400;color:#000000;border:2px solid #FFFFFF}',
    'html[data-apiic-theme="midnight"] .apiic-btn-primary{background:linear-gradient(120deg,#1B4FA8,#2E6ED6);color:#FFFFFF}',
    '.apiic-field{width:100%;font:inherit;font-size:15px;padding:12px 14px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);outline:none}',
    '.apiic-field:focus{border-color:var(--cyan-deep);box-shadow:0 0 0 3px var(--cyan-soft)}',
    '.apiic-mono{font-variant-numeric:tabular-nums}',
    '.apiic-toasts{position:fixed;right:18px;bottom:18px;z-index:2400;display:flex;flex-direction:column;gap:10px;pointer-events:none}',
    '.apiic-toast{pointer-events:auto;background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--cyan-deep);border-radius:12px;box-shadow:var(--shadow-lg);padding:13px 16px;max-width:340px;font-size:14.5px;line-height:1.45;transform:translateY(8px);opacity:0;transition:all .2s ease}',
    '.apiic-toast[data-in="1"]{transform:none;opacity:1}',
    '.apiic-sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}',
    '.apiic-skip{position:fixed;left:12px;top:-60px;z-index:3000;background:var(--surface);color:var(--ink);border:2px solid var(--cyan-deep);border-radius:10px;padding:10px 16px;font-weight:600;transition:top .16s ease}',
    '.apiic-skip:focus{top:12px}',
    '.apiic-swatches{display:flex;gap:3px}',
    '.apiic-swatches i{width:12px;height:12px;border-radius:3px;border:1px solid rgba(0,0,0,0.14);display:block}',
    '.apiic-theme-row{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:11px 12px;border-radius:12px;border:1px solid transparent;background:none;cursor:pointer;font:inherit;color:var(--ink)}',
    '.apiic-theme-row:hover{background:var(--tint-sky)}',
    '.apiic-theme-row[aria-checked="true"]{border-color:var(--cyan-deep);background:var(--cyan-soft)}',
    '.apiic-seg{display:flex;gap:4px;background:var(--paper);border:1px solid var(--line);border-radius:999px;padding:4px}',
    '.apiic-seg button{flex:1;font:inherit;font-size:13px;border:none;background:none;color:var(--muted);border-radius:999px;padding:7px 6px;cursor:pointer}',
    '.apiic-seg button[aria-pressed="true"]{background:var(--surface);color:var(--ink);font-weight:600;box-shadow:var(--shadow)}',
    '@media(prefers-reduced-motion:reduce){.apiic-ui *{animation:none !important;transition:none !important}}',
    RESPONSIVE_CSS
  ].join('\n');

  /* ---------------------------------------------------------- theme state - */
  var state = {
    theme: store(LS.theme) || (win.matchMedia && win.matchMedia('(prefers-color-scheme: dark)').matches ? 'midnight' : 'daylight'),
    scale: store(LS.scale) || 'base',
    motion: store(LS.motion) || 'on'
  };
  if (!THEMES[state.theme]) state.theme = 'daylight';
  if (!SCALES[state.scale]) state.scale = 'base';

  function apply() {
    var h = doc.documentElement;
    h.setAttribute('data-apiic-theme', state.theme);
    h.setAttribute('data-apiic-scale', state.scale);
    h.setAttribute('data-apiic-motion', state.motion);
    store(LS.theme, state.theme); store(LS.scale, state.scale); store(LS.motion, state.motion);
    win.dispatchEvent(new CustomEvent('apiic:theme', { detail: { theme: state.theme, scale: state.scale } }));
  }

  function setTheme(k, quiet) {
    if (!THEMES[k]) return;
    state.theme = k; apply();
    if (!quiet) toast('<strong>' + esc(THEMES[k].label) + '</strong> theme applied. ' + esc(THEMES[k].hint), 'ph-palette');
    renderPanel();
  }
  function cycleTheme() {
    var keys = Object.keys(THEMES);
    setTheme(keys[(keys.indexOf(state.theme) + 1) % keys.length]);
  }
  function setScale(k) { if (SCALES[k]) { state.scale = k; apply(); renderPanel(); } }
  function stepScale(dir) {
    var i = SCALE_ORDER.indexOf(state.scale) + dir;
    setScale(SCALE_ORDER[Math.max(0, Math.min(SCALE_ORDER.length - 1, i))]);
  }
  function setMotion(v) { state.motion = v ? 'on' : 'off'; apply(); renderPanel(); }

  /* --------------------------------------------------------------- toast -- */
  var toastHost;
  function toast(html, icon, ms) {
    if (!toastHost) { toastHost = el('div', { 'class': 'apiic-toasts apiic-ui', role: 'status', 'aria-live': 'polite' }); doc.body.appendChild(toastHost); }
    var t = el('div', {
      'class': 'apiic-toast',
      html: '<div style="display:flex;gap:11px;align-items:flex-start">'
          + '<i class="ph ' + (icon || 'ph-info') + '" style="font-size:19px;color:var(--cyan-deep);flex:none;margin-top:1px"></i>'
          + '<div style="flex:1;min-width:0">' + html + '</div></div>'
    });
    toastHost.appendChild(t);
    requestAnimationFrame(function () { t.setAttribute('data-in', '1'); });
    setTimeout(function () {
      t.removeAttribute('data-in');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 240);
    }, ms || 4200);
    return t;
  }

  /* ---------------------------------------------- appearance popover ------ */
  var panel = null;

  function panelHtml() {
    var rows = Object.keys(THEMES).map(function (k) {
      var t = THEMES[k];
      return '<button class="apiic-theme-row" role="radio" aria-checked="' + (state.theme === k) + '" data-theme="' + k + '">'
        + '<i class="ph ' + t.icon + '" style="font-size:20px;color:var(--indigo);flex:none"></i>'
        + '<span style="flex:1;min-width:0">'
        + '<span style="display:block;font-weight:600;font-size:14.5px">' + esc(t.label) + '</span>'
        + '<span style="display:block;font-size:12.5px;color:var(--muted);line-height:1.35;margin-top:2px">' + esc(t.hint) + '</span>'
        + '</span>'
        + '<span class="apiic-swatches" aria-hidden="true">' + t.swatch.map(function (c) {
            return '<i style="background:' + c + '"></i>';
          }).join('') + '</span>'
        + (state.theme === k ? '<i class="ph ph-check-circle" style="color:var(--cyan-deep);font-size:18px"></i>' : '<span style="width:18px"></span>')
        + '</button>';
    }).join('');

    var scales = SCALE_ORDER.map(function (k) {
      return '<button data-scale="' + k + '" aria-pressed="' + (state.scale === k) + '">' + esc(SCALES[k].label) + '</button>';
    }).join('');

    return '<div style="padding:16px 16px 6px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--line)">'
      + '<i class="ph-duotone ph-palette" style="font-size:22px;color:var(--cyan-deep)"></i>'
      + '<div style="flex:1"><div style="font-family:Sora,sans-serif;font-weight:600;font-size:17px;letter-spacing:-0.02em">Appearance</div>'
      + '<div style="font-size:12.5px;color:var(--muted)">Remembered in this browser only</div></div>'
      + '<button data-close="1" aria-label="Close appearance panel" style="background:none;border:none;font-size:22px;line-height:1;color:var(--muted);cursor:pointer">&times;</button>'
      + '</div>'
      + '<div style="padding:12px 10px" role="radiogroup" aria-label="Theme">' + rows + '</div>'
      + '<div style="padding:4px 16px 16px;border-top:1px solid var(--line)">'
      + '<div style="font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);margin:14px 0 8px">Text size</div>'
      + '<div class="apiic-seg">' + scales + '</div>'
      + '<label style="display:flex;align-items:center;gap:10px;margin-top:16px;font-size:14px;cursor:pointer">'
      + '<input type="checkbox" data-motion="1" ' + (state.motion === 'off' ? 'checked' : '') + ' style="width:17px;height:17px;accent-color:var(--cyan-deep)">'
      + 'Reduce motion and animation</label>'
      + '<div class="apiic-mono" style="font-size:11px;color:var(--muted);margin-top:14px;line-height:1.6">'
      + 'PRESS <span style="border:1px solid var(--line);border-radius:4px;padding:1px 5px">T</span> TO CYCLE THEMES<br>'
      + 'PRESS <span style="border:1px solid var(--line);border-radius:4px;padding:1px 5px">CTRL</span> + <span style="border:1px solid var(--line);border-radius:4px;padding:1px 5px">K</span> TO SEARCH'
      + '</div></div>';
  }

  function renderPanel() { if (panel) panel.innerHTML = panelHtml(); bindPanel(); }

  function bindPanel() {
    if (!panel) return;
    panel.querySelectorAll('[data-theme]').forEach(function (b) {
      b.addEventListener('click', function () { setTheme(b.getAttribute('data-theme')); });
    });
    panel.querySelectorAll('[data-scale]').forEach(function (b) {
      b.addEventListener('click', function () { setScale(b.getAttribute('data-scale')); });
    });
    var m = panel.querySelector('[data-motion]');
    if (m) m.addEventListener('change', function () { setMotion(!m.checked); });
    var c = panel.querySelector('[data-close]');
    if (c) c.addEventListener('click', closePanel);
  }

  function openPanel(anchor) {
    if (panel) { closePanel(); return; }
    panel = el('div', { 'class': 'apiic-pop apiic-ui', role: 'dialog', 'aria-label': 'Appearance settings', html: panelHtml() });
    panel.style.width = '338px';
    panel.style.maxWidth = 'calc(100vw - 24px)';
    var r = anchor && anchor.getBoundingClientRect ? anchor.getBoundingClientRect() : null;
    if (r) {
      panel.style.top = Math.min(r.bottom + 10, win.innerHeight - 40) + 'px';
      panel.style.right = Math.max(12, win.innerWidth - r.right - 4) + 'px';
    } else { panel.style.top = '84px'; panel.style.right = '16px'; }
    doc.body.appendChild(panel);
    bindPanel();
    setTimeout(function () { doc.addEventListener('click', outside, true); }, 0);
    var first = panel.querySelector('[data-theme]'); if (first) first.focus();
  }
  function outside(e) { if (panel && !panel.contains(e.target)) closePanel(); }
  function closePanel() {
    if (!panel) return;
    doc.removeEventListener('click', outside, true);
    if (panel.parentNode) panel.parentNode.removeChild(panel);
    panel = null;
  }

  /* --------------------------------------------------------- boot & keys -- */
  function injectStyles() {
    if (doc.getElementById('apiic-theme-css')) return;
    doc.head.appendChild(el('style', { id: 'apiic-theme-css', html: themeCss() + '\n' + PLATFORM_CSS }));
  }

  function skipLink() {
    if (doc.querySelector('.apiic-skip')) return;
    var a = el('a', { 'class': 'apiic-skip apiic-ui', href: '#apiic-main', text: 'Skip to main content' });
    a.addEventListener('click', function () {
      var m = doc.querySelector('main'); if (m) { m.id = 'apiic-main'; m.setAttribute('tabindex', '-1'); m.focus(); }
    });
    doc.body.insertBefore(a, doc.body.firstChild);
  }

  function typing(e) {
    var t = e.target, tag = t && t.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (t && t.isContentEditable);
  }

  /* Re-evaluate the layout when the viewport crosses the mobile breakpoint. */
  var resizeTimer;
  win.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(collapseGrids, 120);
  });

  doc.addEventListener('keydown', function (e) {
    if (typing(e)) return;
    var k = e.key;
    if (k === 't' || k === 'T') { if (!e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); cycleTheme(); } }
    else if (k === '+' || k === '=') { e.preventDefault(); stepScale(1); }
    else if (k === '-' || k === '_') { e.preventDefault(); stepScale(-1); }
  });

  /* The x-dc renderer rebuilds <head> (and clears attributes on <html>) while
     it processes each page's <helmet>. Anything we injected before that point
     is discarded, which would leave the overlays unstyled and the theme
     unset. Rather than race the renderer, watch for the loss and restore. */
  var observedHead = null;

  /* Multi-column grids must become single-column on a handset. CSS alone can
     only match track lists it can name as a substring, and these pages use
     every shape there is (`1.3fr 0.7fr`, `repeat(auto-fit,minmax(300px,1fr))`,
     `2fr 1fr 1fr`). So read the declared tracks and decide, then restore the
     original when the viewport grows again. */
  function collapseGrids() {
    var narrow = win.matchMedia && win.matchMedia('(max-width: 760px)').matches;
    doc.querySelectorAll('[style*="grid-template-columns"]').forEach(function (n) {
      if (!narrow) {
        if (n.__apiicGrid) { n.style.gridTemplateColumns = n.__apiicGrid; n.__apiicGrid = null; }
        return;
      }
      var v = n.style.gridTemplateColumns;
      if (!v || v === 'minmax(0, 1fr)' || v === 'minmax(0,1fr)') return;
      /* Strip bracketed arguments so the remaining tokens are the track count. */
      var tracks = v.replace(/\([^()]*\)/g, '').trim().split(/\s+/).filter(Boolean);
      if (tracks.length > 1 || /repeat\(/.test(v)) {
        if (!n.__apiicGrid) n.__apiicGrid = v;
        n.style.gridTemplateColumns = 'minmax(0,1fr)';
      }
    });
  }

  /* Give every table its own horizontal scroller so a wide table never drags
     the page sideways. Idempotent: the marker attribute stops re-wrapping. */
  function wrapTables() {
    doc.querySelectorAll('table').forEach(function (t) {
      var p = t.parentNode;
      if (!p || (p.getAttribute && p.getAttribute('data-apiic-tablewrap'))) return;
      var w = el('div', { 'data-apiic-tablewrap': '1' });
      p.insertBefore(w, t);
      w.appendChild(t);
    });
  }

  function guard() {
    if (!doc.getElementById('apiic-theme-css')) injectStyles();
    wrapTables();
    collapseGrids();
    var h = doc.documentElement;
    if (h.getAttribute('data-apiic-theme') !== state.theme
      || h.getAttribute('data-apiic-scale') !== state.scale
      || h.getAttribute('data-apiic-motion') !== state.motion) apply();
    if (doc.body && !doc.querySelector('.apiic-skip')) skipLink();
    /* <head> may be replaced wholesale, not just emptied. */
    if (doc.head && doc.head !== observedHead) {
      observedHead = doc.head;
      headObserver.observe(observedHead, { childList: true });
    }
  }

  var headObserver = new MutationObserver(guard);
  var rootObserver = new MutationObserver(guard);

  function boot() {
    injectStyles();
    apply();
    skipLink();
    rootObserver.observe(doc.documentElement, {
      childList: true,
      attributes: true,
      attributeFilter: ['data-apiic-theme', 'data-apiic-scale', 'data-apiic-motion']
    });
    guard();
    /* A few late sweeps cover renderers that batch outside a mutation record. */
    [300, 900, 2000, 4000].forEach(function (ms) { setTimeout(guard, ms); });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();

  /* -------------------------------------------------------------- export -- */
  win.APIIC = win.APIIC || {};
  Object.assign(win.APIIC, {
    ensure: guard,
    themes: THEMES, scales: SCALES, scaleOrder: SCALE_ORDER,
    getTheme: function () { return state.theme; },
    getScale: function () { return state.scale; },
    setTheme: setTheme, cycleTheme: cycleTheme, setScale: setScale, stepScale: stepScale, setMotion: setMotion,
    openTheme: openPanel, closeTheme: closePanel,
    toast: toast, el: el, esc: esc, md: md, store: store
  });
})(window, document);
