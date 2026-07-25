# APIIC Website 5.0 — Design & Content Blueprint
### From notice-board to decision engine

**Source of truth:** `APIIC_Website_Modernization_Audit-1.xlsx` (161 requirements · 15 Full / 96 Partial / 50 Not Available · 82 P0 · 45 pages · 30 dynamic datasets · 25 epics)
**Live-site basis:** apiic.in and its linked destinations, plus the benchmark set in the workbook
**Purpose:** the single brief a designer, a content team and a developer all build from — and the input pack for the Claude Design prototype
**Scope guardrail (unchanged from the workbook):** public website only. No ERP, CRM, payments, allotment workflow, grievance engine, GIS rebuild or mobile app. Transactions stay on their authorised portals; the website's job is to make an investor *decide*, then hand them off cleanly.

---

## Part 1 — What the audit actually tells us

### 1.1 The one-sentence diagnosis

APIIC publishes almost everything an investor needs and almost none of it in a form an investor can decide with.

The workbook's own conclusion is the sharpest line in it: the assets exist, but they are organised *as a large institutional directory rather than a compelling investor website*. That is why only 15 of 161 requirements are Full while 96 sit at Partial — this is not an empty site, it is an unconverted one. The gap is packaging, structure, freshness and trust, not raw content.

### 1.2 The five failures that matter, and what each one costs

| # | Failure | Evidence in the workbook | What it costs the investor |
|---|---|---|---|
| 1 | **No land discovery on the website** | WEB-050/051: a generic Industrial Parks page exists; park-level profiles do not. Land discovery is pushed to other portals. | The single reason an investor came cannot be completed on the site. |
| 2 | **No decision tools** | WEB-152/153/154/155 all "Not Available": no real search, no guided finder, no comparison, no incentive screener. | The investor must become a researcher. Most won't. |
| 3 | **No trust signals** | WEB-016, WEB-034, WEB-138, WEB-139, WEB-161: KPIs without definitions or dates; 54 of 64 sampled pages last modified 2021–22. | Every number becomes a question the investor has to verify elsewhere. |
| 4 | **No conversion route** | WEB-004, WEB-022, WEB-063, WEB-157: no persistent expert CTA, no contextual enquiry, no CTA framework. | High-intent traffic leaves without becoming a lead. |
| 5 | **No governance under the surface** | WEB-136–WEB-145: no content model, no maker-checker, no single source for shared facts, no conversion analytics. | Contradictory leadership content on the homepage. Accuracy decays by default. |

### 1.3 What the benchmark sheet is really saying

Read across BEN-001 to BEN-013, two clusters emerge:

- **Indian peers (GIDC, UPSIDA, MIDC, TIDCO, TGIIC, KSIIDC)** — strong on *operational access* (plot lists, rates, GIS, e-services) and weak on *narrative and decision support*. Their homepages are dense quick-link boards.
- **International agencies (Singapore EDB, IDA Ireland, Bahrain EDB, ADIO)** — strong on *journey, proposition and proof* and weaker on *live property data*, because property is often not theirs to hold.

**Nobody in the benchmark set does both well.** That is the whole strategic opening.

> **The APIIC position: the only industrial development corporation website in the world that gives you an international-agency-grade investment narrative *and* live, dated, plot-level land data in the same journey — and shows you when each number was last verified.**

That is a claim APIIC can actually make good on, because APIIC owns the land, the parks, the utilities data and the policy relationships. IDA Ireland can't. Singapore EDB can't. GIDC has the data but not the story. This is the line to put in front of the MD.

### 1.4 The design brief compressed to one paragraph

Build for one person: a decision-maker with capital, a shortlist of three states, and forty minutes. In those forty minutes she must be able to (1) understand why Andhra Pradesh, with sourced evidence; (2) narrow 100+ parks to a shortlist of three that fit her sector, land size, power draw and port distance; (3) see what those three would cost and what support she may qualify for; (4) download a brief she can put in front of her board; and (5) reach a named human at APIIC. If any of those five breaks, the website has failed regardless of how it looks.

---

## Part 2 — Design direction

### 2.1 The idea: "Cadastre"

The visual language comes from APIIC's own instruments — the survey plan, the plot register, the boundary line, the corridor map. Not generic corporate-tech gradients, not another government template.

**The signature device is the parcel line:** a 1px hairline that draws boundaries, separates records, brackets data, and animates as if a plan were being surveyed onto the page. Every park, every plot, every dataset appears as a *record* with an identity, an owner and a verification stamp. The aesthetic argument and the trust argument are the same argument.

**The one memorable element:** the **Freshness Stamp** — a small monospaced chip carried by every live value on the site (`AVAILABLE AREA 42.6 ac · VERIFIED 21 JUL 2026 · ASSET MGMT`). It is unusual, slightly bureaucratic in the best way, and it is the entire credibility thesis rendered as a 24px component. It also happens to implement WEB-016, WEB-034, WEB-141 and WEB-161 at once.

### 2.2 Colour tokens

Anchored to the navy-and-gold language already approved in the APIIC 4.0 leadership decks, so the website, the CMO deck and the corporate collateral read as one system.

```css
--ink:        #0B1F33;  /* harbour navy — hero, footer, headings */
--indigo:     #163A5F;  /* mid navy — panels, map base, nav */
--gold:       #C9962C;  /* accent + primary CTA only. Use sparingly. */
--gold-soft:  #F3E4C0;  /* CTA hover wash, highlight bands */
--tide:       #0F8A80;  /* teal — live data, availability, GIS, "verified" */
--paper:      #F6F7F5;  /* page background — cool off-white, not cream */
--surface:    #FFFFFF;  /* cards */
--line:       #D8DEE3;  /* cadastral hairlines, table rules */
--muted:      #5A6B7A;  /* secondary text, metadata */
```

**Status colours — deliberate rule:** availability states never use red. An allotted plot is not a failure, it is proof of demand.
`Available` → `--tide` · `Limited` → `--gold` · `Fully allotted` → `--muted` grey · `Coming soon` → `--indigo` outline.

Reserve red exclusively for form errors and site alerts (WEB-024, DYN-W17).

### 2.3 Typography

| Role | Face | Use |
|---|---|---|
| Display | **Sora** 600/700, tracking −0.02em | H1–H2, KPI numerals, hero. Engineered, geometric, excellent figures. |
| Body / UI | **Instrument Sans** 400/500 | Body, nav, buttons, forms. Distinctive without shouting; very legible at 16–18px. |
| Data / register | **IBM Plex Mono** 400/500 | Park IDs, rates, areas, distances, "as of" stamps, document versions. Carries the register motif. |
| Indic | **Noto Sans Telugu**, **Noto Sans Devanagari** | Full Telugu and Hindi parity for priority pages (WEB-113/114). |

Type scale (desktop): 64 / 44 / 32 / 24 / 20 / 18 / 16 / 14 / 12. Body 18px, line-height 1.6, measure capped at 68 characters (WEB-106, WEB-149).
Fluid down to 40 / 30 / 24 / 20 / 18 / 17 / 16 on mobile.

**Alternates if Sora is rejected:** Manrope (warmer) or Bricolage Grotesque (more editorial).

### 2.4 Icons, imagery, motion

- **Icons:** Phosphor Icons, Regular weight, 24px grid, 1.5px stroke. Duotone permitted only for the six sector marks and the park-infrastructure checklist. Lucide is an acceptable substitute. **One family only** — WEB-147 fails today on exactly this.
- **Imagery (WEB-148):** real, recent, captioned photography of APIIC parks, ports, corridors and units. Approved subjects: park infrastructure, working plants, port and rail gateways, people at work, aerial park views. Banned: stretched logos, low-resolution scans, generic global stock, clip-art handshakes, stock "AI brain" imagery. Every image carries alt text, caption, location, date and rights (WEB-108 — 35 of 64 sampled homepage images currently fail this).
- **Aspect ratios:** hero 21:9 · park card 16:10 · story 4:3 · portrait 1:1. Enforced by the CMS; no free crops.
- **Motion:** one orchestrated moment only. On the homepage, the AP coastline and the three national industrial corridors draw in as SVG strokes over ~1.2s, park nodes settle, then the search field takes focus. Everywhere else: 150ms hover transitions, 60ms scroll-reveal stagger, nothing on a loop. Full `prefers-reduced-motion` support — the hero renders as a static plan.
- **No carousels. No auto-playing tickers. No modal on arrival.** WEB-024 exists because all three are on the site today.

### 2.5 Layout

12 columns, 1280px max content width, 80px desktop gutters, 8px spacing base. Sections breathe: 96–128px vertical rhythm on desktop, 56–72px on mobile. Cards use a 1px `--line` border and 4px radius — near-square, because a survey plan has corners.

---

## Part 3 — The 5IR layer (concrete, not decorative)

The Fifth Industrial Revolution means human-centric, sustainable, resilient industry with humans and machines working together. On a website that must be *visible and measurable*, not a banner that says "5IR". Five commitments, each one rendered as a real component:

| 5IR principle | How it appears on the site | Where |
|---|---|---|
| **Human + machine** | The AI copilot answers, cites its source and as-of date, then names the human officer who owns the answer. Never a dead-end bot. | Every page (§5.1) |
| **Sustainability** | Green Estate panel on every park profile: renewable share, water reuse, CETP/STP status, tree cover, waste handling — each with a source and date. | Park profile |
| **Resilience** | Resilience panel: power reliability, water security, flood/cyclone exposure band, digital redundancy, alternate route access. | Park profile, district profile |
| **Human capital** | Talent proposition with skill pipeline, institutions within 50km, occupations, wage bands — sourced and dated (WEB-028, currently Not Available). | Why Invest, sector, district |
| **Transparency** | Every AI-assisted match explains *why* it matched, in plain language, with the field and date it used. Nothing is a black box. | Finder, screener, copilot |

This is the answer when the MD asks "where is the 5IR angle?" — it is five panels an investor can read, not an adjective.

---

## Part 4 — Information architecture

### 4.1 Primary navigation — 6 groups (WEB-001, WEB-002)

Maximum two visible levels. Corporate, statutory and employee links leave the investor path entirely (WEB-010).

```
INVEST IN AP        FIND LAND & PARKS     SET UP & GROW       POLICIES & DOCUMENTS   INSIGHTS      ABOUT APIIC
Why Andhra Pradesh  Park Finder ★         Investor Guide      Policies Library       News          About APIIC
Priority Sectors    Parks Directory       Services Catalogue  Policy Summaries       Insights      Leadership & Board
Locations           Compare Parks ★       Approvals Overview  Documents & Forms      Events        Organisation
Growth Corridors    Land Availability     Incentives          Fees & Charges         Success       Annual Reports
Incentives          Open GIS (AGILE 2.0)↗ Incentive Check ★   Citizen Charter        Stories       Tenders
Success Stories     How to Apply for Land Investor FAQs       Glossary               Media         RTI & Disclosures
                                                                                                   Careers
```
★ = new decision tool

**Utility bar (above nav):** Search · Language (EN / తెలుగు / हिंदी) · Official Portals ↗ · Contact · Accessibility
**Persistent CTAs (WEB-003, WEB-004):** `Find Land` (secondary, outline) + `Talk to an Expert` (primary, gold) — in the header, in the mobile menu, and pinned in a mobile bottom bar.

### 4.2 Full page inventory — all 45 pages mapped

| ID | Page | URL | Wave | Group |
|---|---|---|---|---|
| PAG-001 | Home | `/` | 0–90d | — |
| PAG-002 | Find Land & Parks hub | `/land-parks` | 0–90d | Find Land |
| PAG-003 | Parks Directory | `/parks` | 0–90d | Find Land |
| PAG-004 | Park Profile template | `/parks/{slug}` | 0–90d | Find Land |
| PAG-043 | Guided Park Finder ★ | `/parks/finder` | 3–6m | Find Land |
| PAG-044 | Compare Parks ★ | `/parks/compare` | 3–6m | Find Land |
| PAG-014 | How to Apply for Land | `/land-application-guide` | 0–90d | Find Land |
| PAG-005 | Why Invest | `/why-invest` | 0–90d | Invest |
| PAG-006 | Priority Sectors | `/sectors` | 3–6m | Invest |
| PAG-007 | Sector Detail template | `/sectors/{sector}` | 3–6m | Invest |
| PAG-008 | Locations | `/locations` | 3–6m | Invest |
| PAG-009 | District Profile template | `/locations/{district}` | 3–6m | Invest |
| PAG-010 | Corridors | `/corridors` | 3–6m | Invest |
| PAG-019 | Incentives Overview | `/incentives` | 3–6m | Invest |
| PAG-045 | Incentive Eligibility Screener ★ | `/incentives/check` | 3–6m | Invest |
| PAG-021 | Success Stories | `/success-stories` | 3–6m | Invest |
| PAG-011 | Start or Expand Guide | `/investor-guide` | 0–90d | Set Up |
| PAG-012 | Services Catalogue | `/services` | 0–90d | Set Up |
| PAG-013 | Service Detail template | `/services/{service}` | 0–90d | Set Up |
| PAG-018 | Approvals Overview | `/approvals` | 3–6m | Set Up |
| PAG-020 | Investor FAQs | `/faqs` | 0–90d | Set Up |
| PAG-015 | Policies Library | `/policies` | 0–90d | Policies |
| PAG-016 | Policy Summary template | `/policies/{policy}` | 3–6m | Policies |
| PAG-017 | Documents & Forms | `/documents` | 0–90d | Policies |
| PAG-022 | News & Announcements | `/news` | 0–90d | Insights |
| PAG-023 | Insights & Reports | `/insights` | 6–12m | Insights |
| PAG-024 | Events | `/events` | 6–12m | Insights |
| PAG-025 | About APIIC | `/about` | 0–90d | About |
| PAG-026 | Leadership & Board | `/about/leadership` | **0–30d** | About |
| PAG-027 | Organisation Structure | `/about/organisation` | 3–6m | About |
| PAG-028 | Annual Reports | `/reports/annual` | 0–90d | About |
| PAG-029 | Tenders | `/tenders` | 0–90d | About |
| PAG-030 | RTI & Disclosures | `/disclosures` | 0–90d | About |
| PAG-031 | Careers | `/careers` | 3–6m | About |
| PAG-032 | Investor Contact | `/contact/investor` | 0–90d | Contact |
| PAG-033 | Zonal Offices | `/contact/zones` | 0–90d | Contact |
| PAG-034 | Help Me Choose | `/contact/help` | 0–90d | Contact |
| PAG-035 | Feedback | `/feedback` | 0–90d | Contact |
| PAG-036 | Official Portal Hub | `/official-portals` | 0–90d | Utility |
| PAG-037 | Search Results | `/search` | 0–90d | Utility |
| PAG-038 | Accessibility Statement | `/accessibility` | 0–90d | Legal |
| PAG-039 | Privacy & Cookies | `/privacy` | 0–90d | Legal |
| PAG-040 | Sitemap | `/sitemap` | 0–90d | Legal |
| PAG-041 | 404 | system | 0–90d | System |
| PAG-042 | Maintenance / Service Alert | system | 0–90d | System |

**Three additions I recommend beyond the 45** (each still inside the website-only guardrail):

| New | URL | Why |
|---|---|---|
| **Data & Freshness Dashboard** | `/trust` | Publishes the 30 DYN datasets with owner, cadence and last-verified date. Turns the workbook's governance model into a public trust asset. No peer does this. |
| **My Shortlist** | `/shortlist` | Browser-local (no login, no PII) basket that carries selected parks across finder → compare → brief → enquiry. It is what makes the demo feel like a product. |
| **Investment Brief generator** | `/shortlist/brief` | Generates a dated PDF of the investor's own shortlist from the same governed content (WEB-033 done properly). |

---

## Part 5 — Cross-cutting components

### 5.1 The Investor Copilot (AI layer)

Persistent, collapsed to a slim bar at the bottom right. Opens to a side panel.

- **Grounded only in published APIIC website content.** No open-web generation, no hallucinated rates.
- **Every answer carries three things:** the plain answer, the source page link with its as-of date, and a named human route ("This is owned by the Asset Management desk — talk to them").
- **Three offered starters:** "Find me land for a 20-acre food processing unit near a port" · "What support could a ₹200 Cr electronics project qualify for?" · "What do I need before I apply for land?"
- **Hard limits, stated in the panel:** it does not allot land, quote binding prices, confirm eligibility or accept applications. It hands off.
- **Escalation:** two unresolved turns → offers the enquiry form pre-filled with the conversation context.
- **Accessibility:** full keyboard operation, ARIA live region for responses, transcript downloadable.

### 5.2 The Freshness Stamp

```
┌──────────────────────────────────────────────┐
│ AVAILABLE AREA                               │
│ 42.6 acres                                   │  ← Sora 700, 32px
│ ─────────────────────────────────────────    │  ← 1px --line
│ ⌁ VERIFIED 21 JUL 2026 · ASSET MANAGEMENT ⓘ │  ← Plex Mono 12px, --muted
└──────────────────────────────────────────────┘
```
`ⓘ` opens: definition, inclusion rules, source system, owner, next review date.
If the value is past its `Stale After` threshold (per the Dynamic Content Calendar), the stamp turns amber and reads `⌁ LAST VERIFIED 04 JUN 2026 · REVIEW OVERDUE`. **A stale number is never silently presented as current** — this single behaviour resolves WEB-139, WEB-140 and WEB-161.

### 5.3 The CTA framework (WEB-157)

One primary per page, one secondary, one help route. Action-led labels only.

| Template | Primary | Secondary | Help |
|---|---|---|---|
| Home | Find land & parks | Why Andhra Pradesh | Talk to an expert |
| Parks Directory | Open park finder | Compare parks | Talk to an expert |
| Park Profile | Enquire about this park | Open detailed GIS ↗ | Add to shortlist |
| Why Invest | Download investor brief | Explore sectors | Talk to an expert |
| Sector | Explore locations | View sector policies | Contact sector desk |
| Service | Apply on official portal ↗ | Download checklist | Ask a question |
| Policy | Download official policy | Check my eligibility | Contact policy desk |
| Compare | Enquire about shortlist | Download brief | Talk to an expert |

Never two competing primaries on a screen. Every CTA fires a named analytics event (WEB-143).

### 5.4 External destination treatment (WEB-011, WEB-012, WEB-128, WEB-156)

Every outbound link renders as an **Official Portal Card**, never a bare link:

```
┌────────────────────────────────────────────────────┐
│ ⧉  APIIC Online Land Application            EXTERNAL│
│    Submit and track a land application              │
│    Owner: Investor Services · Support: 0863-xxxxxxx │
│    ⌁ LINK CHECKED 24 JUL 2026 · STATUS: AVAILABLE   │
│    [ Open official portal ↗ ]                       │
└────────────────────────────────────────────────────┘
```
The homepage today links to non-standard ports (8443, 4470) that corporate firewalls block. Where APIIC owns the destination, front it on standard HTTPS; where it doesn't, label it, monitor it, and show the last check time. If a monitored portal is down, the card says so and offers the alternative — that is DYN-W17 rendered as a component.

### 5.5 The component library to build

Navigation bar · Utility bar · Mobile bottom action bar · Hero (three variants: home, section, template) · KPI stat with Freshness Stamp · Parcel Card (park) · Sector card · Story card · Document row (version, status, size, date) · Filter rail · Filter chip set · Comparison table (sticky first column) · Map embed with static fallback · Accordion · Tabbed panel · Alert banner (single, dismissible, persistent dismissal) · Official Portal Card · Enquiry form · Copilot panel · Breadcrumb · Pagination · Empty state · Zero-result state · Skeleton loader · Footer.

---

## Part 6 — Page-by-page content specification

Conventions used below:
`{{TOKEN}}` = a governed value bound to a Dynamic Content Calendar dataset. **No figure is hardcoded and no figure is invented here** — every one arrives with a value, unit, definition, as-of date and owner, exactly as WEB-016 requires. Copy shown in quotes is production-ready.

---

### 6.1 Home — `/` (PAG-001 · WEB-013 → WEB-024)

The current homepage carries notices, modals, a ticker, leadership content that has contradicted itself, and unqualified statistics. Replace all of it with eight blocks.

**Block 1 — Hero (the thesis)**

> **H1:** "Build in Andhra Pradesh. We own the land, and we'll show you the plan."
> **Sub:** "Search {{KPI:park_count}} industrial parks across {{KPI:district_count}} districts. Every plot, rate and utility on this site carries the date it was last verified."

Behind it: the AP coastline and three national industrial corridors drawing in as hairline SVG, park nodes settling as small tide-coloured dots. Then the search field takes focus.

Inline search: `Search parks, sectors, policies or documents` with three chips beneath — `Food processing near a port` · `20–50 acres, power-intensive` · `AP Industrial Development Policy 4.0`.

CTAs: `Find land & parks` (gold) · `Why Andhra Pradesh` (outline).
Max two. No third. No carousel.

**Block 2 — Top tasks (WEB-014)** — six cards, one row of six on desktop, 2×3 on mobile:
Find land & parks · Explore sectors · Understand the setup journey · Read policies & incentives · Check what you may qualify for · Talk to an expert.
Each: Phosphor icon, label, one line of plain language, arrow. Nothing else.

**Block 3 — Verified position (WEB-016 · DYN-W02, DYN-W03)** — four KPIs, each with a Freshness Stamp:
`{{KPI:land_bank_acres}}` land bank · `{{KPI:developed_parks}}` developed parks · `{{KPI:available_acres}}` currently available · `{{KPI:units_operating}}` operating units.
Footer line: "Definitions and sources for every figure → /trust"

**Block 4 — Land available now (WEB-017 · DYN-W05)** — six Parcel Cards, live availability, sorted by recency of verification. Each card: park name, district, available area, indicative rate, three connectivity facts, availability chip, freshness stamp. `See all {{KPI:park_count}} parks →`

**Block 5 — Priority sectors (WEB-018)** — six sector tiles with duotone marks: Electronics & Semiconductors · Food Processing · Pharmaceuticals & Life Sciences · Textiles & Apparel · Aerospace & Defence · Green Energy & EV. Each: one-line opportunity statement, link to sector page.

**Block 6 — Where growth is happening (WEB-019)** — the corridor map, interactive. Three corridors, nodes, linked parks. Static accessible fallback with a text list of corridors and nodes.

**Block 7 — Proof (WEB-020)** — three success stories, each with sector, location, what the investor needed, what APIIC did, and one measurable outcome. Approved and consented only. Not a logo wall.

**Block 8 — Talk to us (WEB-022)** — split panel. Left: "Tell us what you're planning. An APIIC officer will respond within {{SLA:investor_response}} working day(s)." Six-field form: name, organisation, sector, land requirement, district preference, email/phone + consent. Right: zonal map, phone, office hours, and the escalation contact.

Plus a **single** dismissible alert slot at the very top for genuine service alerts only (DYN-W17), with dismissal persisted.

---

### 6.2 Find Land & Parks hub — `/land-parks` (PAG-002)

The decision fork. Four routes, honestly labelled by effort:

| Route | For | Time |
|---|---|---|
| **Guided Park Finder** ★ | "I know my requirement, not my location" | ~2 min |
| **Browse all parks** | "I want to see everything" | Self-paced |
| **Open GIS (AGILE 2.0)** ↗ | "I want plot-level spatial detail" | External |
| **Talk to an expert** | "I'd rather explain it to a person" | 1 working day |

Below: how APIIC land works, in four plain steps — what APIIC owns, how allotment works, what determines price, what happens after allotment. Links to `/land-application-guide` and the allotment regulations.

---

### 6.3 Guided Park Finder — `/parks/finder` (PAG-043 · WEB-153) ★

**The single most important new thing on this website.** No login. Does not reserve or allot land. Five questions, one screen each, progress visible, back always available, skippable at any point.

1. **What will you make?** — sector tiles + free text
2. **How much land?** — slider with typed entry: <2 / 2–5 / 5–20 / 20–50 / 50–100 / 100+ acres
3. **What must be close?** — multi-select: seaport, airport, national highway, rail siding, city of 1M+, existing supplier cluster
4. **What does your process need?** — power load band, water demand band, effluent treatment (CETP required / on-site / none), hazardous handling, cold chain, plug-and-play built space
5. **Any preference on region?** — district / corridor / no preference

**Results — explainable by design (5IR transparency):**

```
┌─────────────────────────────────────────────────────────────┐
│ ⌁ KRI-019                                    STRONG MATCH   │
│ Model Industrial Park, Mallavalli · Krishna District        │
│ ───────────────────────────────────────────────────────────  │
│ Available   {{x}} ac    Rate  {{₹}}/ac    Port  {{y}} km    │
│                                                              │
│ Why this matched                                             │
│ ✓ Food processing is a permitted category here               │
│ ✓ {{x}} acres available in your 20–50 acre range             │
│ ✓ CETP operational — verified {{date}}                       │
│ ⚠ Rail siding {{z}} km away — you asked for rail proximity   │
│ — Water demand data not published for this park              │
│                                                              │
│ [ View park ]  [ + Add to shortlist ]  [ Open in GIS ↗ ]     │
│ ⌁ PARK DATA VERIFIED {{date}} · ASSET MANAGEMENT             │
└─────────────────────────────────────────────────────────────┘
```

Three signals, always: ✓ met, ⚠ partly met, — data not published. **Missing data is stated, never silently dropped.** That single rule is what makes the tool credible to a serious investor, and it is exactly what WEB-154's acceptance criterion asks for.

Zero results → widen the nearest constraint automatically and say which one: "No park matches all five. Relaxing rail proximity gives 4 matches." Never a dead end.

Footer: "This is a guide based on published park data. It does not reserve or allot land. Allotment is governed by the APIIC Industrial Parks Allotment Regulations."

---

### 6.4 Parks Directory — `/parks` (PAG-003 · WEB-050)

Split view: filter rail (280px) · results grid or map toggle.

**Filters:** district (multi) · corridor · park type (Industrial Park / MSME Park / Theme Park / SEZ / Private Plug-and-Play) · sector permitted · available area band · indicative rate band · utilities (power ≥ band, assured water, CETP, STP, TSDF, gas, plug-and-play sheds) · connectivity (port/airport/highway/rail within X km) · status (available / limited / fully allotted / coming soon).

**Sort:** most recently verified (default) · available area · rate · distance to nearest port.

**Result card = Parcel Card.** Grid of 3. Persistent count: "{{n}} parks · {{m}} with land available · data verified within {{p}} days."

Map view: cluster pins, click → card, "Open detailed GIS ↗" preserving the selected park where technically possible (WEB-064).

Every card has an `Add to shortlist` checkbox. A sticky bar appears once two are selected: `Compare 2 parks →`.

---

### 6.5 Park Profile — `/parks/{slug}` (PAG-004 · WEB-051 → WEB-064)

The decision page. Ten sections, sticky in-page nav, one consistent template for every park.

**Header:** Park name · `⌁ KRI-019` mono ID · district · type · availability chip · `⌁ PROFILE VERIFIED {{date}}` · CTAs `Enquire about this park` / `Open detailed GIS ↗` / `+ Shortlist`

1. **At a glance** — six stat tiles, each stamped: total area, developed area, available area, plots available, indicative rate, year established.
2. **Where it is** — map preview (static, performant) + `Open detailed GIS ↗`. Address, coordinates, nearest town.
3. **Connectivity (WEB-054)** — table: seaport / airport / national highway / rail head / nearest city / dry port. Distance, road time, and *how it was calculated with the network version and date*. Nobody publishes the method. APIIC should.
4. **Utilities & services (WEB-055 to WEB-058)** — four cards:
   - **Power** — serviceability, supply voltage options, substation, utility contact, verification date. No unsupported capacity promise.
   - **Water** — source, service status, quality report link, contact, date.
   - **Wastewater & environment** — CETP/STP/TSDF type, status, service area, standards, latest report.
   - **Internal infrastructure** — roads, drainage, telecom/fibre, street lighting, fire, health facility, worker amenities, security. Checklist with status and last-verified date each.
5. **Green Estate (5IR)** — renewable share, solar potential, water reuse %, tree cover, waste handling, any green certification. Each sourced and dated. Where not published, say so.
6. **Resilience (5IR)** — power reliability, water security, flood/cyclone exposure band, alternate access route, digital redundancy.
7. **Who's here** — approved anchor units and ecosystem, with park association and source (WEB-062). Approved public references only.
8. **Permitted & preferred sectors** — approved categories, zoning restrictions, linked policies (WEB-061).
9. **Documents (WEB-059)** — approved layout, land schedule, environmental clearance, post-EC monitoring, IALA notification. Each row: title, version, status (Current / Amended / Superseded), issue date, file size, format. Superseded items visible but clearly labelled.
10. **Land & charges (WEB-060)** — approved rate, unit, effective date, what's included, what's not, applicable rebates with policy links, and the source order/GO reference. Prominent caveat: "Indicative. Final allotment price is determined under the Allotment Regulations."

**Footer of every park page:** the zonal officer responsible — role, phone, email, office, last verified (WEB-048, WEB-100). Role-based mailbox, not a personal address.

---

### 6.6 Compare Parks — `/parks/compare` (PAG-044 · WEB-154) ★

Up to four parks. Sticky attribute column, horizontally scrolling park columns. Same fields for every park, in the same order, with each cell's own as-of date on hover.

Rows: district · corridor · park type · total / developed / available area · plots available · indicative rate · power · water · CETP/STP/TSDF · plug-and-play availability · port km · airport km · highway km · rail km · permitted sectors · anchor units · green estate summary · resilience summary · zonal contact.

Three cell states: **value** · **"Not published"** in muted grey · **"Not applicable"**. Never a blank cell — a blank looks like an error and destroys trust.

Actions: `Download comparison (PDF)` · `Enquire about these parks` · `Open all in GIS ↗`.
The PDF is dated, carries every source and as-of date, and is exactly what an investor forwards to their board. That artefact is the conversion event.

---

### 6.7 Why Invest — `/why-invest` (PAG-005 · WEB-025 → WEB-034)

Every claim on this page carries a source, a period and a last-reviewed date. That discipline is the page's differentiator, not a compliance chore.

1. **The proposition** — one paragraph, plain language, no adjectives that can't be sourced.
2. **Market & economy** — GSDP, growth, industrial output, exports, FDI. Each: value, unit, period, source, reviewed date.
3. **Geography & market access (WEB-027)** — coastline, operational and upcoming ports, airports, national highways, rail, the three national industrial corridors, dedicated freight corridor access. Travel-time map plus a sourced facts table.
4. **Infrastructure readiness** — power position and renewable share, industrial water, gas, digital connectivity, logistics parks.
5. **Talent (WEB-028 — currently absent entirely)** — working-age population, annual graduate output by discipline, ITI and polytechnic capacity, skill missions, indicative wage bands by role. Sourced and dated. This is one of the highest-value gaps in the whole audit.
6. **Cost of operating (WEB-029)** — sourced bands for land, power tariff, industrial water, labour, road and sea freight. Clear disclaimers and methodology note.
7. **Policy & support (WEB-030)** — plain-language summary of the AP Industrial Development Policy 4.0 (2024–29) and the sector policies, each linked to the official document. What support exists, who it's for, when it applies.
8. **Sustainability (WEB-031)** — renewable capacity, green industrial commitments, circular economy land reserved, environmental reporting.
9. **How APIIC supports you** — pre-investment, setup, aftercare. Named route at each stage.
10. **Proof** — three stories, then the full library.
11. **Sources & methodology (WEB-034)** — a full register of every figure on the page with source, period, owner and reviewed date. Almost no peer publishes this. It converts scepticism into confidence.

CTA: `Download the investor brief (PDF, dated)` — generated from this same governed content, never separately maintained.

---

### 6.8 Sector template — `/sectors/{sector}` (PAG-007 · WEB-036)

One structure for all sectors, so an investor learns it once:
Hero (sector + one-line opportunity) → Why AP for this sector (sourced) → The ecosystem here (anchor units, suppliers, institutions, clusters) → Talent for this sector → Infrastructure this sector needs, and where it exists → Sector-ready parks (live cards, filtered) → Policies & incentives for this sector (auto-linked by tag) → Proof (case studies) → Sector desk contact (role-based).

Launch set: Electronics & Semiconductors · Food Processing · Pharmaceuticals & Life Sciences · Textiles & Apparel · Aerospace & Defence · Green Energy & EV.

### 6.9 District template — `/locations/{district}` (PAG-009 · WEB-043)

Hero with district map → economy at a glance (sourced) → strong sectors → APIIC parks here (live cards) → connectivity → talent & institutions → utilities position → anchor units → the zonal office that serves you → related corridors.

### 6.10 Corridors — `/corridors` (PAG-010 · WEB-044)

Interactive corridor map as hero. Per corridor: what it is, the nodes, the anchor infrastructure, current status and timeline, the APIIC parks along it, and the documents. Accessible non-map alternative required.

---

### 6.11 Investor Guide — `/investor-guide` (PAG-011 · WEB-065)

The whole journey on one page, in six stages, as a horizontal timeline that collapses to vertical on mobile:

**1 Explore** → **2 Choose location** → **3 Apply for land** → **4 Get approvals** → **5 Build & commission** → **6 Operate & grow**

Each stage: what happens, who does it (APIIC / other authority), what you need to prepare, indicative timeline, the linked service, and where to get help. Indicative timelines are labelled indicative and dated.

The aftercare stage matters and is missing today — an investor who sees that APIIC is present *after* allotment reads a very different corporation.

### 6.12 Services Catalogue — `/services` + `/services/{service}` (PAG-012/013 · WEB-066)

Filterable cards by stage, audience, authority and delivery mode. Each service page, one template:
Purpose (one line) → Who it's for → What you need before you start → Steps → Fee (with effective date) → Service level and escalation (WEB-075) → Authority → Then the Official Portal Card as primary CTA.

**The rule: nobody leaves this website for a portal without first knowing what the service is, what it costs, what it needs and how long it takes.** That single rule fixes the most common failure across every Indian peer site in the benchmark sheet.

### 6.13 Policies Library — `/policies` (PAG-015 · WEB-070)

Filters: sector · policy type · status (In force / Amended / Superseded) · effective year · issuing department.
Row: title, one-line scope, status chip, effective date, last amended, `Read summary` + `Download official PDF` + file metadata.

**Policy Summary template (PAG-016):** what it covers → who's eligible → what you get → key dates and validity → amendments in order → related sectors and parks → `Check my eligibility` → `Download the official policy`. Header disclaimer: "This is a plain-language summary. The official policy document is the authority."

### 6.14 Incentive Eligibility Screener — `/incentives/check` (PAG-045 · WEB-155) ★

Seven questions: sector · investment band · employment expected · enterprise category (Micro/Small/Medium/Large/Mega/Ultra-Mega) · location district · entrepreneur category (as recognised in policy) · sustainability measures planned.

Output: possible policy matches, each with *why it matched* in plain words, the official policy link, and the responsible desk. Persistent, unmissable framing: **"Indicative only. Not an application, an approval or an entitlement. Eligibility is determined by the competent authority under the official policy."**

CTAs: `View official policy` · `Talk to the policy desk`.

### 6.15 Official Portal Hub — `/official-portals` (PAG-036 · WEB-079)

Portal cards grouped by audience: **Investors** (land application, payments, status, single window) · **Existing allottees & IALA** (property tax, occupancy, services) · **Vendors** (e-procurement, tenders) · **Employees** (internal — clearly separated). Each card carries purpose, owner, support contact, external indicator and last link-check time. A live status strip at the top surfaces any portal currently unavailable.

### 6.16 Help Me Choose — `/contact/help` (PAG-034 · WEB-102)

Four honest doors, because today an investor, a complainant and an employee all land in the same place:
"I'm exploring investing" → investor enquiry · "I already have an allotment and need service" → allottee support + portal · "I want to raise a grievance" → the authorised grievance route · "Something on this website is wrong" → website feedback.
Each door states who receives it, the expected response time and the escalation path.

### 6.17 Data & Freshness Dashboard — `/trust` (new)

A public table of all 30 dynamic datasets: what it is, which pages use it, the owning function, the update cadence, when it was last verified, and whether it is currently within its freshness window. A visible "{{n}}% of published datasets verified within cadence" figure at the top.

This is the page that separates APIIC from every peer in the benchmark sheet. It says: *we know what we publish, who owns it, and when it was last checked.* Put it in the footer of every page as "Data & freshness".

### 6.18 System pages

- **Search (PAG-037 · WEB-152)** — query, filters (content type, sector, district, date, status), snippets, dates, spelling correction, clear-filters, and a real zero-result state offering top tasks, the copilot and human contact.
- **404 (PAG-041)** — "That page has moved or retired." Search field, top six tasks, report-this-link, contact. Correct HTTP status.
- **Maintenance / Service Alert (PAG-042 · DYN-W17)** — affected destination, when it started, expected recovery, what to use instead, when this message was last updated.
- **Accessibility (PAG-038)** — standard targeted (WCAG 2.2 AA), current conformance status, known issues with fix dates, how to report, contact, review date. Publishing known issues honestly is stronger than claiming perfection.

---

## Part 7 — Non-negotiable quality bar

Fold these into the design review and the developer contract; they are the workbook's acceptance criteria, unchanged.

**Accessibility (WEB-104 → WEB-116)** — WCAG 2.2 AA verified by independent audit. Every top task completable by keyboard alone with a visible focus ring. Meaningful alt text on all informative images (35 of 64 sampled homepage images fail today). Working skip link, one `main` landmark, labelled nav regions per template. Captions and transcripts on all video. HTML preferred over PDF for key content; PDFs tagged. An accessibility toolbar is not accessibility — remove the reliance on it.

**Performance (WEB-122 → WEB-126)** — LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 at p75 on priority pages. Published performance budget enforced in CI. AVIF/WebP with responsive `srcset` and explicit dimensions. Fonts self-hosted and subset (including Telugu). Lazy-load below the fold, never the hero. Map embeds load a static image first and hydrate on interaction.

**Security & privacy (WEB-127 → WEB-132)** — HTTPS everywhere with no mixed content. No non-standard ports on public destinations that APIIC owns. CSP (nonce-based, report-only first), HSTS, Referrer-Policy, Permissions-Policy, secure cookies. Consent manager blocking non-essential tags until consent, with withdrawal. Privacy notice rewritten for forms, analytics, cookies, processors, retention and rights.

**SEO (WEB-117 → WEB-121, WEB-158 → WEB-160)** — one H1 per page, logical heading order, unique title and meta description, canonical, share image. Schema: Organization, BreadcrumbList, Article, FAQPage, Event, Dataset, and Place for parks and districts. Keyword map: one primary intent per priority page, reviewed quarterly. Genuine local content for districts and parks — no doorway pages.

**Governance (WEB-136 → WEB-145)** — structured content types for parks, sectors, policies, services, documents, contacts, news, stories. Maker-checker on all P0 content. Owner, approver, source, effective date and review date mandatory before publish. Shared facts stored once and reused (this is what makes contradictory leadership content structurally impossible). Consent-aware analytics with a named event taxonomy tracking search → filter → park view → document download → CTA click → form completion → portal exit.

**Launch blockers, do these in week one (0–30 day items):** remove the contradictory leadership content (WEB-015, WEB-092); delete the "best viewed in IE9/IE10" footer text (WEB-135); publish a governed leadership directory (PAG-026).

---

## Part 8 — The prototype for the MD

Don't prototype 45 pages. Prototype **one investor's forty minutes**, in twelve screens, in this order. The demo tells a story, and the story is: *she arrives not knowing, and leaves with a dated brief and a named officer.*

| # | Screen | What it proves |
|---|---|---|
| 1 | **Home** | This is not a government notice board. |
| 2 | **Why Invest** (scrolled to Talent + Sources) | Every claim is sourced and dated. |
| 3 | **Guided Park Finder** — Q1–Q5 | We understand what an investor actually needs. |
| 4 | **Finder results** with match explanations | Our AI explains itself. Nothing is hidden. |
| 5 | **Parks Directory** with filters live | We have real, filterable land data. |
| 6 | **Park Profile** — top half | Decision-ready in one page. |
| 7 | **Park Profile** — Green Estate + Resilience | This is the 5IR commitment, measured. |
| 8 | **Compare Parks** — three parks side by side | We make the choice easy, and we admit what we don't publish. |
| 9 | **Incentive Screener** — result state | We help before we ask for anything. |
| 10 | **Investment Brief PDF** preview | She leaves with a board-ready artefact. |
| 11 | **Talk to an Expert** — form + confirmation with SLA | A named human, a stated response time. |
| 12 | **Data & Freshness Dashboard** | We govern what we publish. No peer does this. |

**Two extras worth building if time allows:** the Investor Copilot panel open over the park profile (the 5IR human+machine moment), and the mobile view of the finder results (proves mobile-first, WEB-104).

**Suggested MD framing, one slide before the demo:**
> 161 requirements audited. Only 15 are fully met today. 82 are critical. The three things no competing state website does — explainable guided site selection, honest side-by-side comparison, and published data freshness — are all things APIIC can do because APIIC owns the land, the parks and the data. This is a ninety-day-to-first-release programme, not a two-year rebuild.

---

## Part 9 — Delivery, mapped to the workbook's own 90-day backlog

| Wave | Weeks | Ship | Backlog IDs |
|---|---|---|---|
| **0 — Truth** | 1–2 | Leadership fix, browser text removal, scope lock, page inventory with keep/merge/redirect/remove decisions | BL-W01, BL-W02 |
| **1 — Foundation** | 1–8 | IA, URL map, content model with owner/approver/review fields, design system and templates | BL-W03, BL-W04, BL-W05 |
| **2 — The investor spine** | 3–12 | Home, Why Invest, Parks directory + 5–10 pilot park profiles, Investor Guide, Services, Policies, Contact & enquiry, Search | BL-W06 to BL-W12 |
| **3 — Quality gates** | 2–12 | Freshness controls on the 30 datasets, WCAG remediation, performance budget, security & privacy baseline, analytics & conversion funnel | BL-W13 to BL-W16, BL-W23 |
| **4 — Migration & launch** | 6–13 | Redirects, duplicate removal, launch QA, monitoring, runbooks, owner training | BL-W17, BL-W18, BL-W24, BL-W25 |
| **5 — Depth** | Months 3–6 | Park Finder, Compare, Incentive Screener, sectors, districts, corridors, success stories, multilingual priority pages | BL-W19 to BL-W22 + PAG-043/044/045 |

The three star tools land in months 3–6 per the workbook's own priority — but they should be **prototyped now**, because they are what convince leadership to fund the whole programme.

---

## Part 10 — Traceability

Every element in this blueprint traces to the workbook:

- **Pages** → `Page Inventory` PAG-001 to PAG-045, plus three recommended additions flagged as such
- **Features** → `Website Feature Audit` WEB-001 to WEB-161
- **Live data behaviour** → `Dynamic Content Calendar` DYN-W01 to DYN-W30
- **Technical acceptance** → `Technical Website QA`
- **Sequencing** → `90-Day Website Backlog` BL-W01 to BL-W25
- **Design principles** → `Best-Practice Patterns` BP-W01 to BP-W20
- **Visual and content standards** → `Image Gap Crosswalk` IMG-G01 to IMG-G16 → WEB-146 to WEB-161
- **Positioning** → `Benchmark Comparison` BEN-001 to BEN-013

Nothing here contradicts the workbook's exclusions. No transaction, allotment, payment, grievance workflow or GIS engine is rebuilt in the website.

---

*Prepared as the design and content basis for the APIIC website prototype. Figures shown as `{{TOKEN}}` are deliberately unbound — under WEB-016 no number may be published without a value, unit, definition, as-of date and owner. Bind them from the Dynamic Content Calendar before any external release.*
