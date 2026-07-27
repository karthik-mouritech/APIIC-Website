/* ==========================================================================
   apiic-assist.js — the APIIC assistant and the help-desk drawer.
   The assistant answers only from apiic-data.js, and every answer names the
   page it came from plus that page's verification date. When it cannot match,
   it hands over to the help desk rather than guessing.
   ========================================================================== */
(function (win, doc) {
  'use strict';

  var API = win.APIIC || (win.APIIC = {});
  var el = API.el, esc = API.esc, md = API.md;
  var D = function () { return win.APIIC_DATA || {}; };

  var TICKETS_KEY = 'apiic.tickets';
  var CHAT_KEY = 'apiic.chat';

  /* ------------------------------------------------------------- tickets -- */
  function tickets() {
    try { return JSON.parse(API.store(TICKETS_KEY) || '[]'); } catch (e) { return []; }
  }
  function saveTickets(list) { API.store(TICKETS_KEY, JSON.stringify(list.slice(0, 40))); }

  /* Reference format mirrors the corporation's own: APIIC/<CAT>/<YY>/<seq>. */
  function newRef(cat) {
    var seq = tickets().length + 1;
    return 'APIIC/' + String(cat || 'GEN').toUpperCase().slice(0, 4) + '/26/'
      + String(1000 + seq * 7 + (Date.parse(new Date().toDateString()) % 97)).slice(-4);
  }

  function createTicket(fields) {
    var cats = D().ticketCategories || [];
    var cat = cats.filter(function (c) { return c.id === fields.category; })[0] || cats[cats.length - 1] || {};
    var t = {
      ref: newRef(fields.category),
      subject: fields.subject || 'Enquiry',
      detail: fields.detail || '',
      category: fields.category, categoryLabel: cat.label || 'Enquiry',
      desk: cat.desk || 'Investor Services', sla: cat.sla || '5 working days',
      district: fields.district || '', name: fields.name || '', email: fields.email || '', phone: fields.phone || '',
      status: 'Open · with the owning desk',
      raised: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      channel: fields.channel || 'Web'
    };
    var list = tickets(); list.unshift(t); saveTickets(list);
    win.dispatchEvent(new CustomEvent('apiic:ticket', { detail: t }));
    return t;
  }

  /* -------------------------------------------------------- intent match -- */
  function matchKb(text) {
    var q = String(text || '').toLowerCase().trim();
    if (!q) return null;
    var kb = D().kb || [];
    var best = null, bestScore = 0;
    kb.forEach(function (entry) {
      var score = 0;
      entry.match.forEach(function (phrase) {
        if (q.indexOf(phrase) > -1) score += 10 + phrase.length / 4;
        else {
          /* Partial credit when most words of a phrase are present. */
          var words = phrase.split(' ').filter(function (w) { return w.length > 3; });
          if (words.length) {
            var hit = words.filter(function (w) { return q.indexOf(w) > -1; }).length;
            if (hit === words.length) score += 6;
            else if (hit > 0) score += hit * 1.5;
          }
        }
      });
      if (score > bestScore) { bestScore = score; best = entry; }
    });
    return bestScore >= 5 ? best : null;
  }

  function isGreeting(t) {
    return /^(hi|hello|hey|namaste|good (morning|afternoon|evening)|start|help)\b/i.test(String(t || '').trim());
  }

  /* Resolve a district or zone name to its zonal desk. */
  function matchZone(text) {
    var q = String(text || '').toLowerCase();
    var zones = D().zones || [];
    return zones.filter(function (z) {
      var name = z.zone.toLowerCase().split(' (')[0];
      return q.indexOf(name) > -1;
    })[0] || null;
  }

  /* ------------------------------------------------------------ chat view -- */
  var chat = null, history = [];

  function loadHistory() {
    try { history = JSON.parse(win.sessionStorage.getItem(CHAT_KEY) || '[]'); } catch (e) { history = []; }
  }
  function persist() {
    try { win.sessionStorage.setItem(CHAT_KEY, JSON.stringify(history.slice(-40))); } catch (e) { /* private mode */ }
  }

  function bubbleUser(m) {
    return '<div style="display:flex;justify-content:flex-end;margin:12px 0">'
      + '<div style="max-width:82%;background:linear-gradient(120deg,var(--royal),var(--royal2));color:#FFFFFF;'
      + 'border-radius:14px 14px 4px 14px;padding:11px 14px;font-size:14.5px;line-height:1.5">' + esc(m.text) + '</div></div>';
  }

  function bubbleBot(m) {
    var src = m.source
      ? '<div style="margin-top:11px;padding-top:10px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:8px;align-items:center">'
        + '<a href="' + esc(m.source.url) + '" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--indigo)">'
        + '<i class="ph ph-arrow-square-out"></i>' + esc(m.source.label) + '</a>'
        + '<span class="apiic-mono" style="font-size:10px;color:var(--muted);letter-spacing:0.05em">'
        + (m.verified ? 'VERIFIED ' + esc(m.verified) : '') + (m.owner ? ' &middot; ' + esc(m.owner).toUpperCase() : '') + '</span></div>'
      : '';
    var chips = (m.chips || []).length
      ? '<div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:11px">'
        + m.chips.map(function (c) {
            return '<button class="apiic-btn" data-chip="' + esc(c) + '" style="font-size:12.5px;padding:6px 12px">' + esc(c) + '</button>';
          }).join('') + '</div>'
      : '';
    return '<div style="display:flex;gap:10px;margin:12px 0">'
      + '<span style="width:30px;height:30px;flex:none;border-radius:50%;background:var(--cyan-soft);display:grid;place-items:center">'
      + '<i class="ph-duotone ph-robot" style="font-size:17px;color:var(--cyan-deep)"></i></span>'
      + '<div style="flex:1;min-width:0;background:var(--paper);border:1px solid var(--line);border-radius:4px 14px 14px 14px;padding:13px 15px">'
      + (m.title ? '<div style="font-family:Sora,sans-serif;font-weight:600;font-size:15px;letter-spacing:-0.01em;margin-bottom:5px">' + esc(m.title) + '</div>' : '')
      + '<div style="font-size:14.5px;line-height:1.6">' + md(m.answer) + '</div>'
      + src + chips + '</div></div>';
  }

  function bubbleTyping() {
    return '<div data-typing="1" style="display:flex;gap:10px;margin:12px 0">'
      + '<span style="width:30px;height:30px;flex:none;border-radius:50%;background:var(--cyan-soft);display:grid;place-items:center">'
      + '<i class="ph-duotone ph-robot" style="font-size:17px;color:var(--cyan-deep)"></i></span>'
      + '<div style="background:var(--paper);border:1px solid var(--line);border-radius:4px 14px 14px 14px;padding:14px 17px;display:flex;gap:5px">'
      + '<span style="width:7px;height:7px;border-radius:50%;background:var(--muted);animation:apiicBlink 1s infinite"></span>'
      + '<span style="width:7px;height:7px;border-radius:50%;background:var(--muted);animation:apiicBlink 1s .16s infinite"></span>'
      + '<span style="width:7px;height:7px;border-radius:50%;background:var(--muted);animation:apiicBlink 1s .32s infinite"></span>'
      + '</div></div>';
  }

  function paint() {
    if (!chat) return;
    chat.log.innerHTML = history.map(function (m) {
      return m.role === 'user' ? bubbleUser(m) : bubbleBot(m);
    }).join('');
    chat.log.querySelectorAll('[data-chip]').forEach(function (b) {
      b.addEventListener('click', function () { send(b.getAttribute('data-chip')); });
    });
    chat.log.scrollTop = chat.log.scrollHeight;
  }

  /* Chips double as commands when they name a platform action. */
  function commandFor(text) {
    var t = String(text || '').toLowerCase();
    if (/^search the site$/.test(t)) return function () { API.closeChat(); API.openSearch(); };
    if (/^switch theme$/.test(t)) return function () { API.cycleTheme(); };
    if (/^(raise a ticket|lodge a grievance|track my ticket)$/.test(t)) return function () { API.openDesk(t.indexOf('track') > -1 ? 'track' : 'new'); };
    return null;
  }

  /* Chips that name a page navigate straight there. */
  var CHIP_LINKS = [
    [/parks directory/i, 'APIIC-Parks-Directory.dc.html'],
    [/park finder/i, 'APIIC-Park-Finder.dc.html'],
    [/compare parks/i, 'APIIC-Compare-Parks.dc.html'],
    [/incentive screener/i, 'APIIC-Incentive-Screener.dc.html'],
    [/investor guide/i, 'APIIC-Investor-Guide.dc.html'],
    [/policies library|read the policy|allotment regulations/i, 'APIIC-Policies.dc.html'],
    [/full board|see the full board|leadership/i, 'APIIC-Leadership.dc.html'],
    [/organisation structure/i, 'APIIC-Leadership.dc.html#structure'],
    [/zonal (directory|office)|find my zonal|open the zonal/i, 'APIIC-Help-Desk.dc.html#zones'],
    [/escalation matrix/i, 'APIIC-Help-Desk.dc.html#grievance'],
    [/charter services|see all charter/i, 'APIIC-Help-Desk.dc.html#services'],
    [/iala links|tenders and reports|empanelment/i, 'APIIC-Link-Directory.dc.html'],
    [/official portals/i, 'APIIC-Official-Portals.dc.html'],
    [/documents|user manual/i, 'APIIC-Documents.dc.html'],
    [/talk to an expert|contact the head office/i, 'APIIC-Talk-To-Expert.dc.html'],
    [/open the map|interactive map/i, 'APIIC-Map.html'],
    [/explore sectors|parks by sector|incentives by sector/i, 'APIIC-Sectors.dc.html'],
    [/data & freshness|key figures/i, 'APIIC-Data-Freshness.dc.html'],
    [/about apiic|read about/i, 'APIIC-About.dc.html'],
    [/accessibility statement/i, 'APIIC-System-Pages.dc.html'],
    [/design system/i, 'APIIC-Design-System.dc.html']
  ];
  function linkFor(text) {
    for (var i = 0; i < CHIP_LINKS.length; i++) if (CHIP_LINKS[i][0].test(text)) return CHIP_LINKS[i][1];
    return null;
  }

  function answerFor(text) {
    var zone = matchZone(text);
    /* A named district beats a generic intent — it is the more specific answer. */
    if (zone && /(office|contact|desk|district|zone|who|phone|email|reach)/i.test(text)) {
      return {
        role: 'bot',
        title: zone.zone + ' zonal office',
        answer: '**' + zone.officer + '**, ' + zone.title + '.\n' + zone.address
          + '\n\nPhone **' + zone.phone + '** · email **' + zone.email + '** · region: ' + zone.region + '.'
          + ' This desk owns allotment, possession and estate matters for the zone.',
        source: { label: 'Help Desk — zonal directory', url: 'APIIC-Help-Desk.dc.html#zones' },
        verified: '26 JUL 2026', owner: 'Estate Management',
        chips: ['Raise a ticket', 'Open the zonal directory', 'Talk to an expert']
      };
    }
    if (isGreeting(text)) {
      var g = D().greeting || {};
      return { role: 'bot', title: g.title, answer: g.answer, chips: g.chips };
    }
    var hit = matchKb(text);
    if (hit) {
      return {
        role: 'bot', title: hit.title, answer: hit.answer,
        source: hit.source, verified: hit.verified, owner: hit.owner, chips: hit.chips
      };
    }
    var f = D().fallback || {};
    /* Offer the closest search hits rather than a dead end. */
    var near = (API.runSearch ? API.runSearch(text) : []).slice(0, 3);
    var extra = near.length
      ? '\n\nClosest published pages: ' + near.map(function (r) { return '**' + r.item.title + '**'; }).join(', ') + '.'
      : '';
    return { role: 'bot', title: f.title, answer: (f.answer || '') + extra, chips: f.chips };
  }

  function send(text) {
    text = String(text || '').trim();
    if (!text) return;

    var cmd = commandFor(text);
    if (cmd) { cmd(); return; }
    var href = linkFor(text);
    if (href && chat) { win.location.href = href; return; }

    history.push({ role: 'user', text: text });
    persist(); paint();

    if (chat) {
      chat.log.insertAdjacentHTML('beforeend', bubbleTyping());
      chat.log.scrollTop = chat.log.scrollHeight;
    }
    var delay = 260 + Math.min(700, text.length * 12);
    setTimeout(function () {
      history.push(answerFor(text));
      persist(); paint();
    }, delay);
  }

  function openChat(seed) {
    if (API.ensure) API.ensure();
    injectKeyframes();
    if (chat) { if (seed) send(seed); chat.input.focus(); return; }
    loadHistory();
    if (!history.length) {
      var g = D().greeting || {};
      history.push({ role: 'bot', title: g.title, answer: g.answer, chips: g.chips });
    }

    var box = el('div', { role: 'dialog', 'aria-label': 'APIIC assistant', 'class': 'apiic-ui' });
    box.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:2300;width:min(392px,calc(100vw - 24px));'
      + 'height:min(620px,calc(100vh - 36px));display:flex;flex-direction:column;background:var(--surface);'
      + 'border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-lg);overflow:hidden;'
      + 'opacity:0;transform:translateY(10px);transition:opacity .18s ease,transform .18s ease';

    box.innerHTML = '<div style="background:linear-gradient(120deg,var(--royal),var(--royal2));padding:14px 16px;display:flex;align-items:center;gap:11px;flex:none">'
      + '<span style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.16);display:grid;place-items:center;flex:none">'
      + '<i class="ph-duotone ph-robot" style="font-size:20px;color:#FFFFFF"></i></span>'
      + '<div style="flex:1;min-width:0;color:#FFFFFF">'
      + '<div style="font-weight:600;font-size:15px">APIIC Assistant</div>'
      + '<div style="font-size:11.5px;opacity:0.82;display:flex;align-items:center;gap:6px">'
      + '<span style="width:7px;height:7px;border-radius:50%;background:#4ADE80;display:inline-block"></span>'
      + 'Answers from published content only</div></div>'
      + '<button data-desk="1" aria-label="Open help desk" title="Help desk" style="background:rgba(255,255,255,0.14);border:none;color:#FFFFFF;width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px"><i class="ph ph-lifebuoy"></i></button>'
      + '<button data-clear="1" aria-label="Clear conversation" title="Clear" style="background:rgba(255,255,255,0.14);border:none;color:#FFFFFF;width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px"><i class="ph ph-eraser"></i></button>'
      + '<button data-close="1" aria-label="Close assistant" style="background:none;border:none;color:#FFFFFF;font-size:24px;line-height:1;cursor:pointer;padding:0 2px">&times;</button>'
      + '</div>'
      + '<div id="apiic-chat-log" style="flex:1;overflow-y:auto;padding:6px 14px;min-height:0"></div>'
      + '<form id="apiic-chat-form" style="flex:none;border-top:1px solid var(--line);padding:11px 12px;display:flex;gap:9px;align-items:flex-end;background:var(--surface)">'
      + '<textarea id="apiic-chat-input" rows="1" placeholder="Ask about land, incentives, policy, people&hellip;" aria-label="Your question" '
      + 'style="flex:1;min-width:0;resize:none;max-height:96px;font:inherit;font-size:14.5px;padding:10px 12px;border:1px solid var(--line);'
      + 'border-radius:12px;background:var(--paper);color:var(--ink);outline:none"></textarea>'
      + '<button type="submit" aria-label="Send" class="apiic-btn apiic-btn-primary" style="padding:11px 13px;border-radius:12px">'
      + '<i class="ph ph-paper-plane-right" style="font-size:17px"></i></button></form>'
      + '<div class="apiic-mono" style="flex:none;padding:0 14px 10px;font-size:9.5px;color:var(--muted);letter-spacing:0.04em;line-height:1.5">'
      + 'PROTOTYPE ASSISTANT &middot; NO PERSONAL DATA LEAVES YOUR BROWSER &middot; NOT A SUBSTITUTE FOR THE ALLOTMENT REGULATIONS</div>';

    doc.body.appendChild(box);
    chat = { box: box, log: box.querySelector('#apiic-chat-log'), input: box.querySelector('#apiic-chat-input') };
    requestAnimationFrame(function () { box.style.opacity = '1'; box.style.transform = 'none'; });

    box.querySelector('[data-close]').addEventListener('click', closeChat);
    box.querySelector('[data-desk]').addEventListener('click', function () { openDesk('new'); });
    box.querySelector('[data-clear]').addEventListener('click', function () {
      history = []; persist();
      var g = D().greeting || {};
      history.push({ role: 'bot', title: g.title, answer: g.answer, chips: g.chips });
      paint();
    });
    box.querySelector('#apiic-chat-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = chat.input.value; chat.input.value = ''; chat.input.style.height = 'auto';
      send(v);
    });
    chat.input.addEventListener('input', function () {
      chat.input.style.height = 'auto';
      chat.input.style.height = Math.min(96, chat.input.scrollHeight) + 'px';
    });
    chat.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); chat.input.form.dispatchEvent(new Event('submit')); }
      if (e.key === 'Escape') closeChat();
    });

    paint();
    if (seed) send(seed); else chat.input.focus();
  }

  function closeChat() {
    if (!chat) return;
    var b = chat.box;
    b.style.opacity = '0'; b.style.transform = 'translateY(10px)';
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 200);
    chat = null;
  }

  /* --------------------------------------------------------- help desk ---- */
  var desk = null;

  function deskForm() {
    var cats = (D().ticketCategories || []).map(function (c) {
      return '<option value="' + esc(c.id) + '">' + esc(c.label) + '</option>';
    }).join('');
    var zones = (D().zones || []).map(function (z) {
      return '<option value="' + esc(z.zone) + '">' + esc(z.zone) + '</option>';
    }).join('');
    return '<form id="apiic-desk-form" style="display:flex;flex-direction:column;gap:13px">'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">What is it about?</span>'
      + '<select name="category" class="apiic-field" required>' + cats + '</select></label>'
      + '<div id="apiic-desk-sla" class="apiic-mono" style="font-size:10.5px;color:var(--muted);letter-spacing:0.04em;line-height:1.6"></div>'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">Zone or district</span>'
      + '<select name="district" class="apiic-field"><option value="">Not sure / statewide</option>' + zones + '</select></label>'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">Subject</span>'
      + '<input name="subject" class="apiic-field" required maxlength="120" placeholder="One line — what do you need?"></label>'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">Detail</span>'
      + '<textarea name="detail" class="apiic-field" rows="3" maxlength="1200" placeholder="Plot or park reference, dates, what has already happened"></textarea></label>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">Your name</span>'
      + '<input name="name" class="apiic-field" required maxlength="80"></label>'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">Phone</span>'
      + '<input name="phone" class="apiic-field" maxlength="20" inputmode="tel"></label></div>'
      + '<label style="display:block"><span style="display:block;font-size:12.5px;font-weight:600;margin-bottom:5px">Email</span>'
      + '<input name="email" type="email" class="apiic-field" required maxlength="120"></label>'
      + '<button type="submit" class="apiic-btn apiic-btn-primary" style="justify-content:center;padding:13px">'
      + '<i class="ph ph-paper-plane-right"></i>Raise the ticket</button>'
      + '<div class="apiic-mono" style="font-size:9.5px;color:var(--muted);letter-spacing:0.04em;line-height:1.6">'
      + 'PROTOTYPE &middot; THE TICKET IS STORED IN THIS BROWSER ONLY AND IS NOT SENT TO APIIC</div>'
      + '</form>';
  }

  function deskTracked() {
    var list = tickets();
    if (!list.length) {
      return '<div style="text-align:center;padding:34px 10px">'
        + '<i class="ph ph-tray" style="font-size:32px;color:var(--muted)"></i>'
        + '<div style="font-family:Sora,sans-serif;font-weight:600;font-size:19px;margin-top:12px;letter-spacing:-0.02em">No tickets yet</div>'
        + '<div style="color:var(--muted);font-size:14px;margin-top:7px;line-height:1.55">Raise one and it appears here with a reference number, the desk that owns it and the service time it is measured against.</div>'
        + '<button class="apiic-btn apiic-btn-primary" data-tab="new" style="margin-top:16px"><i class="ph ph-plus"></i>Raise a ticket</button></div>';
    }
    return list.map(function (t) {
      return '<div style="border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:11px;background:var(--paper)">'
        + '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">'
        + '<span class="apiic-mono" style="font-size:11px;color:var(--cyan-deep);letter-spacing:0.04em">' + esc(t.ref) + '</span>'
        + '<span style="font-size:10.5px;background:var(--tint-mint);color:var(--tide);border-radius:999px;padding:3px 9px;font-weight:600;white-space:nowrap">OPEN</span></div>'
        + '<div style="font-weight:600;font-size:15px;margin-top:6px;line-height:1.35">' + esc(t.subject) + '</div>'
        + '<div style="font-size:13px;color:var(--muted);margin-top:5px;line-height:1.5">' + esc(t.categoryLabel)
        + (t.district ? ' &middot; ' + esc(t.district) : '') + '</div>'
        + '<div class="apiic-mono" style="font-size:10px;color:var(--muted);margin-top:9px;padding-top:9px;border-top:1px solid var(--line);letter-spacing:0.04em;line-height:1.7">'
        + 'RAISED ' + esc(t.raised).toUpperCase() + '<br>DESK: ' + esc(t.desk).toUpperCase() + '<br>SERVICE TIME: ' + esc(t.sla).toUpperCase() + '</div>'
        + '</div>';
    }).join('');
  }

  function deskConfirm(t) {
    return '<div style="text-align:center;padding:20px 6px">'
      + '<span style="width:56px;height:56px;border-radius:50%;background:var(--tint-mint);display:inline-grid;place-items:center">'
      + '<i class="ph ph-check-circle" style="font-size:30px;color:var(--tide)"></i></span>'
      + '<div style="font-family:Sora,sans-serif;font-weight:600;font-size:22px;margin-top:14px;letter-spacing:-0.02em">Ticket raised</div>'
      + '<div class="apiic-mono" style="font-size:15px;color:var(--cyan-deep);margin-top:8px;letter-spacing:0.04em">' + esc(t.ref) + '</div>'
      + '<div style="color:var(--muted);font-size:14px;margin-top:12px;line-height:1.6;text-align:left;background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px">'
      + '<b style="color:var(--ink)">' + esc(t.subject) + '</b><br>'
      + 'Routed to <b style="color:var(--ink)">' + esc(t.desk) + '</b>'
      + (t.district ? ', ' + esc(t.district) + ' zone' : '') + '.<br>'
      + 'Published service time: <b style="color:var(--ink)">' + esc(t.sla) + '</b>.<br>'
      + 'If it is not resolved in that time, the escalation matrix takes it to the next tier.</div>'
      + '<div style="display:flex;gap:9px;margin-top:16px">'
      + '<button class="apiic-btn" data-tab="track" style="flex:1;justify-content:center">Track my tickets</button>'
      + '<a class="apiic-btn" href="APIIC-Help-Desk.dc.html#grievance" style="flex:1;justify-content:center">Escalation matrix</a></div>'
      + '</div>';
  }

  function renderDesk(tab, confirmed) {
    if (!desk) return;
    desk.tab = tab;
    desk.tabs.querySelectorAll('[data-tab]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-tab') === tab));
    });
    desk.body.innerHTML = confirmed ? deskConfirm(confirmed) : (tab === 'track' ? deskTracked() : deskForm());
    bindDesk();
  }

  function bindDesk() {
    desk.body.querySelectorAll('[data-tab]').forEach(function (b) {
      b.addEventListener('click', function () { renderDesk(b.getAttribute('data-tab')); });
    });
    var form = desk.body.querySelector('#apiic-desk-form');
    if (!form) return;

    var sel = form.querySelector('[name="category"]');
    var slaBox = desk.body.querySelector('#apiic-desk-sla');
    function showSla() {
      var c = (D().ticketCategories || []).filter(function (x) { return x.id === sel.value; })[0];
      if (c && slaBox) slaBox.innerHTML = 'ROUTES TO ' + esc(c.desk).toUpperCase() + ' &middot; SERVICE TIME ' + esc(c.sla).toUpperCase();
    }
    sel.addEventListener('change', showSla); showSla();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = {};
      ['category', 'district', 'subject', 'detail', 'name', 'phone', 'email'].forEach(function (k) {
        var n = form.querySelector('[name="' + k + '"]'); f[k] = n ? n.value.trim() : '';
      });
      var t = createTicket(f);
      renderDesk('track', t);
      API.toast('Ticket <b>' + esc(t.ref) + '</b> raised and routed to ' + esc(t.desk) + '.', 'ph-check-circle', 6000);
    });
  }

  function openDesk(tab) {
    if (API.ensure) API.ensure();
    if (desk) { renderDesk(tab || desk.tab); return; }
    var scrim = el('div', { 'class': 'apiic-scrim apiic-ui' });
    var box = el('div', { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'APIIC help desk', 'class': 'apiic-ui' });
    box.style.cssText = 'position:fixed;right:0;top:0;bottom:0;z-index:2200;width:min(430px,100vw);display:flex;flex-direction:column;'
      + 'background:var(--surface);border-left:1px solid var(--line);box-shadow:var(--shadow-lg);'
      + 'transform:translateX(14px);opacity:0;transition:transform .2s ease,opacity .2s ease';

    box.innerHTML = '<div style="flex:none;padding:18px 20px 14px;border-bottom:1px solid var(--line);display:flex;align-items:flex-start;gap:12px">'
      + '<span style="width:40px;height:40px;border-radius:11px;background:var(--tint-sky);display:grid;place-items:center;flex:none">'
      + '<i class="ph-duotone ph-lifebuoy" style="font-size:22px;color:var(--indigo)"></i></span>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-family:Sora,sans-serif;font-weight:600;font-size:19px;letter-spacing:-0.02em">Help desk</div>'
      + '<div style="font-size:13px;color:var(--muted);margin-top:2px">Every ticket names the desk that owns it</div></div>'
      + '<button data-close="1" aria-label="Close help desk" style="background:none;border:none;font-size:25px;line-height:1;color:var(--muted);cursor:pointer">&times;</button>'
      + '</div>'
      + '<div id="apiic-desk-tabs" class="apiic-seg" style="flex:none;margin:14px 20px 0">'
      + '<button data-tab="new" aria-pressed="true">Raise a ticket</button>'
      + '<button data-tab="track" aria-pressed="false">Track</button></div>'
      + '<div id="apiic-desk-body" style="flex:1;overflow-y:auto;min-height:0;padding:18px 20px 24px"></div>'
      + '<div style="flex:none;border-top:1px solid var(--line);padding:12px 20px;display:flex;flex-wrap:wrap;gap:8px;background:var(--paper)">'
      + '<a class="apiic-btn" href="APIIC-Help-Desk.dc.html#zones" style="font-size:12.5px;padding:7px 12px"><i class="ph ph-map-pin"></i>Zonal desks</a>'
      + '<a class="apiic-btn" href="APIIC-Help-Desk.dc.html#grievance" style="font-size:12.5px;padding:7px 12px"><i class="ph ph-arrow-up-right"></i>Escalate</a>'
      + '<a class="apiic-btn" href="tel:+918632381850" style="font-size:12.5px;padding:7px 12px"><i class="ph ph-phone"></i>0863-2381850</a>'
      + '</div>';

    doc.body.appendChild(scrim); doc.body.appendChild(box);
    desk = { scrim: scrim, box: box, body: box.querySelector('#apiic-desk-body'), tabs: box.querySelector('#apiic-desk-tabs'), tab: 'new' };
    requestAnimationFrame(function () {
      scrim.setAttribute('data-in', '1');
      box.style.transform = 'none'; box.style.opacity = '1';
    });

    scrim.addEventListener('click', closeDesk);
    box.querySelector('[data-close]').addEventListener('click', closeDesk);
    desk.tabs.querySelectorAll('[data-tab]').forEach(function (b) {
      b.addEventListener('click', function () { renderDesk(b.getAttribute('data-tab')); });
    });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDesk(); });

    renderDesk(tab || 'new');
  }

  function closeDesk() {
    if (!desk) return;
    var s = desk.scrim, b = desk.box;
    s.removeAttribute('data-in');
    b.style.transform = 'translateX(14px)'; b.style.opacity = '0';
    setTimeout(function () {
      if (s.parentNode) s.parentNode.removeChild(s);
      if (b.parentNode) b.parentNode.removeChild(b);
    }, 200);
    desk = null;
  }

  /* ---------------------------------------------------------------- boot -- */
  function injectKeyframes() {
    if (doc.getElementById('apiic-assist-css')) return;
    doc.head.appendChild(el('style', {
      id: 'apiic-assist-css',
      html: '@keyframes apiicBlink{0%,80%,100%{opacity:.28}40%{opacity:1}}'
        + '.apiic-launch{position:fixed;right:18px;bottom:18px;z-index:2150;display:flex;flex-direction:column;gap:10px}'
        + '.apiic-launch button{width:54px;height:54px;border-radius:50%;border:none;cursor:pointer;color:#FFFFFF;'
        + 'background:linear-gradient(140deg,var(--royal2),var(--royal));box-shadow:var(--shadow-lg);font-size:23px;'
        + 'display:grid;place-items:center;transition:transform .15s ease}'
        + '.apiic-launch button:hover{transform:scale(1.06)}'
        + '.apiic-launch button[data-kind="desk"]{width:46px;height:46px;font-size:19px;margin-left:4px;'
        + 'background:var(--surface);color:var(--indigo);border:1px solid var(--line)}'
        + '@media(max-width:640px){.apiic-launch{right:12px;bottom:12px}}'
    }));
  }

  function launcher() {
    if (doc.querySelector('.apiic-launch')) return;
    var wrap = el('div', { 'class': 'apiic-launch apiic-ui' });
    wrap.innerHTML = '<button data-kind="desk" aria-label="Open the help desk" title="Help desk"><i class="ph ph-lifebuoy"></i></button>'
      + '<button data-kind="chat" aria-label="Ask the APIIC assistant" title="Ask the assistant"><i class="ph-duotone ph-robot"></i></button>';
    wrap.querySelector('[data-kind="chat"]').addEventListener('click', function () { chat ? closeChat() : openChat(); });
    wrap.querySelector('[data-kind="desk"]').addEventListener('click', function () { openDesk('new'); });
    doc.body.appendChild(wrap);
  }

  function wire() {
    doc.querySelectorAll('[data-apiic-chat]').forEach(function (n) {
      if (n.__apiicChat) return; n.__apiicChat = true;
      n.addEventListener('click', function (e) { e.preventDefault(); openChat(); });
    });
    doc.querySelectorAll('[data-apiic-desk]').forEach(function (n) {
      if (n.__apiicDesk) return; n.__apiicDesk = true;
      n.addEventListener('click', function (e) { e.preventDefault(); openDesk(n.getAttribute('data-apiic-desk') || 'new'); });
    });
  }

  /* Same restoration contract as apiic-core: the renderer can discard our
     injected style and the launcher, so re-add them whenever they go missing. */
  function ensure() {
    injectKeyframes();
    if (doc.body) launcher();
    wire();
  }

  function boot() {
    ensure();
    new MutationObserver(ensure).observe(doc.documentElement, { childList: true });
    if (doc.body) new MutationObserver(ensure).observe(doc.body, { childList: true });
    [300, 900, 2000, 4000].forEach(function (ms) { setTimeout(ensure, ms); });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();

  Object.assign(API, {
    openChat: openChat, closeChat: closeChat, ask: send,
    openDesk: openDesk, closeDesk: closeDesk,
    tickets: tickets, createTicket: createTicket
  });
})(window, document);
