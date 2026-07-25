# APIIC Website 5.0 — Claude Design Prompt Pack

Twelve paste-ready prompts. **Run Prompt 0 first in a new Claude Design session** — it establishes the design system every later prompt refers to. Then run 1–12 in order in the same session; each one says "use the established APIIC design system", so you never have to repeat the tokens.

Working notes before you start:
- Keep one session for the whole set so the system stays consistent.
- Where a prompt uses `{{TOKEN}}`, put a **plausible placeholder number and a visible "verified" date** in the prototype, and say on screen that figures are illustrative. Do not present unverified numbers to the MD as real APIIC data.
- If a screen comes back too busy, the fix is almost always: fewer CTAs, more whitespace, and one less colour.

---

## PROMPT 0 — Establish the design system

```
I'm designing the new public website for APIIC (Andhra Pradesh Industrial
Infrastructure Corporation), the state agency that owns and develops industrial
land and parks in Andhra Pradesh, India. The audience is corporate investors
deciding where to locate a manufacturing plant. This is a prototype for the
Managing Director and senior leadership.

Set up a design system I'll reuse across every screen. Do not build a page yet —
give me a system page showing the tokens and core components.

DESIGN IDEA — "Cadastre"
The visual language comes from APIIC's own instruments: the survey plan, the plot
register, the boundary line, the corridor map. The signature device is a 1px
hairline that draws boundaries, separates records and brackets data. Every park,
plot and dataset appears as a record with an identity, an owner and a
verification stamp.

COLOUR
--ink       #0B1F33  harbour navy — hero, footer, headings
--indigo    #163A5F  panels, nav, map base
--gold      #C9962C  accent and primary CTA only, used sparingly
--gold-soft #F3E4C0  CTA hover wash, highlight bands
--tide      #0F8A80  live data, availability, verified states
--paper     #F6F7F5  page background (cool off-white, NOT cream)
--surface   #FFFFFF  cards
--line      #D8DEE3  hairlines and table rules
--muted     #5A6B7A  secondary text and metadata

Status rule: availability never uses red. Available = tide, Limited = gold,
Fully allotted = muted grey, Coming soon = indigo outline. Red is reserved for
form errors and service alerts only.

TYPE
Display: Sora 600/700, tracking -0.02em — H1/H2, KPI numerals
Body/UI: Instrument Sans 400/500 — body, nav, buttons, forms
Data:    IBM Plex Mono 400/500 — park IDs, rates, areas, distances, "as of"
         stamps, document versions
Scale desktop: 64/44/32/24/20/18/16/14/12. Body 18px, line-height 1.6,
measure capped at 68 characters.

ICONS: Phosphor Icons, Regular weight, 24px grid, 1.5px stroke. One family only.

LAYOUT: 12 columns, 1280px max width, 80px desktop gutters, 8px spacing base,
96–128px vertical section rhythm. Cards use 1px --line border and 4px radius —
near-square, because a survey plan has corners.

MOTION: restrained. 150ms hover transitions, 60ms scroll-reveal stagger. No
carousels, no auto-playing tickers, no loops. Respect prefers-reduced-motion.

BUILD THESE COMPONENTS ON THE SYSTEM PAGE:

1. FRESHNESS STAMP — the signature component. A value with its verification
   metadata:
     label (Instrument Sans 12px uppercase, --muted)
     value (Sora 700, 32px, --ink)
     1px --line rule
     "⌁ VERIFIED 21 JUL 2026 · ASSET MANAGEMENT ⓘ" (IBM Plex Mono 12px, --muted)
   Show two states: verified (as above) and overdue (the mono line turns --gold
   and reads "⌁ LAST VERIFIED 04 JUN 2026 · REVIEW OVERDUE").

2. PARCEL CARD — an industrial park as a cadastral record:
   mono park ID eyebrow (e.g. "⌁ KRI-019") + availability chip top-right,
   park name (Sora 600, 24px), district and park type,
   a hairline-bordered row of three data points: Available area / Indicative
   rate / Distance to port,
   a freshness stamp line at the bottom,
   and a checkbox labelled "Add to shortlist".
   Show it in all four availability states.

3. OFFICIAL PORTAL CARD — for links that leave the website:
   ⧉ icon, service name, "EXTERNAL" badge, one-line description, owner and
   support contact, "⌁ LINK CHECKED 24 JUL 2026 · STATUS: AVAILABLE" in mono,
   and an "Open official portal ↗" button.

4. NAVIGATION — a utility bar (Search · Language EN/తెలుగు/हिंदी · Official
   Portals ↗ · Contact · Accessibility) above a main bar with the APIIC mark,
   six groups (Invest in AP · Find Land & Parks · Set Up & Grow · Policies &
   Documents · Insights · About APIIC), and two persistent CTAs: "Find land"
   (outline) and "Talk to an expert" (gold, filled).

5. BUTTONS — primary (gold), secondary (outline navy), tertiary (text with
   arrow), plus external-link and disabled variants.

6. FORM FIELD — label, input, helper text, error state with an inline message.

7. FILTER CHIP — default, selected, and removable states.

Build to a quality floor without announcing it: responsive to mobile, visible
keyboard focus rings, and WCAG 2.2 AA contrast throughout.
```

---

## PROMPT 1 — Homepage

```
Using the established APIIC design system, build the homepage. Eight blocks,
in this order. Full-width, responsive.

1 HERO — full-bleed, --ink background.
  H1: "Build in Andhra Pradesh. We own the land, and we'll show you the plan."
  Sub: "Search 100+ industrial parks across Andhra Pradesh. Every plot, rate and
  utility on this site carries the date it was last verified."
  Behind the text: the Andhra Pradesh coastline and three industrial corridors
  drawn as thin --tide and --gold SVG hairlines, with small dots marking parks.
  It should look like a survey plan, not a stock map — and it animates in as if
  being drawn, once, over about 1.2 seconds.
  A prominent search field: "Search parks, sectors, policies or documents" with
  three suggestion chips below it: "Food processing near a port", "20–50 acres,
  power-intensive", "AP Industrial Development Policy 4.0".
  Two CTAs only: "Find land & parks" (gold) and "Why Andhra Pradesh" (outline).

2 TOP TASKS — six cards in one row on desktop, 2×3 on mobile. Phosphor icon,
  label, one plain line, arrow. Nothing else:
  Find land & parks / Explore sectors / Understand the setup journey /
  Read policies & incentives / Check what you may qualify for / Talk to an expert

3 VERIFIED POSITION — four KPIs using the Freshness Stamp component:
  land bank (acres), developed parks, currently available (acres), operating
  units. Underneath, a quiet link: "Definitions and sources for every figure →"

4 LAND AVAILABLE NOW — six Parcel Cards in a 3×2 grid, mixed availability
  states, sorted by most recently verified. Section link: "See all parks →"

5 PRIORITY SECTORS — six tiles: Electronics & Semiconductors, Food Processing,
  Pharmaceuticals & Life Sciences, Textiles & Apparel, Aerospace & Defence,
  Green Energy & EV. Each with a duotone icon and a one-line opportunity
  statement.

6 WHERE GROWTH IS HAPPENING — a wide corridor map panel on --indigo, three
  corridors as hairlines with labelled nodes and linked parks.

7 PROOF — three success story cards. Each: sector tag, location, what the
  investor needed, what APIIC did, one measurable outcome. Real structure, not a
  logo wall.

8 TALK TO US — a split panel. Left: "Tell us what you're planning. An APIIC
  officer will respond within 1 working day." Six fields: name, organisation,
  sector, land requirement, preferred district, email or phone, plus a consent
  checkbox. Right: a small zonal map, phone, office hours and escalation
  contact.

Then a footer with the six nav groups, "Data & freshness", accessibility,
privacy, sitemap, and a last-reviewed date.

No carousel. No auto-playing ticker. No pop-up on arrival. Two primary CTAs
maximum in the hero. Generous whitespace — this page must feel calm and
confident, the opposite of a government notice board.
```

---

## PROMPT 2 — Why Invest

```
Using the APIIC design system, build the "Why Invest in Andhra Pradesh" page.

The differentiator of this page is that every single claim carries a source, a
period and a last-reviewed date, shown visibly — not hidden in footnotes. Design
a compact inline "source note" treatment in IBM Plex Mono that sits under each
data block without cluttering it.

Sections, in order:
1  The proposition — one confident paragraph, large type, no unsupported
   adjectives.
2  Market & economy — four sourced indicators.
3  Geography & market access — a travel-time map (coastline, ports, airports,
   highways, three industrial corridors) plus a sourced facts table.
4  Infrastructure readiness — power and renewable share, industrial water, gas,
   digital connectivity, logistics parks.
5  Talent — working-age population, annual graduate output by discipline, ITI
   and polytechnic capacity, indicative wage bands by role. Make this section
   visually strong; it's currently missing from the site entirely and it's what
   manufacturers ask about first.
6  Cost of operating — sourced bands for land, power, water, labour, freight,
   with a visible methodology note.
7  Policy & support — plain-language summary cards linking to official policy
   documents.
8  Sustainability — renewable capacity, green commitments, circular economy land.
9  How APIIC supports you — three stages: pre-investment, setup, aftercare, each
   with a named route.
10 Proof — three story cards.
11 SOURCES & METHODOLOGY — a full register table: figure, source, period, owner,
   last reviewed. Design this to look authoritative and readable, not like an
   appendix. It's a trust asset.

Primary CTA, sticky on scroll: "Download the investor brief (PDF, dated)".
```

---

## PROMPT 3 — Guided Park Finder, questions

```
Using the APIIC design system, build the Guided Park Finder question flow. This
is the most important new feature on the site — an investor answers five
questions and gets matched to industrial parks. No login required.

One question per screen, centred, generous whitespace, with a thin progress
indicator across the top showing 5 steps. Back is always available. Every step
is skippable via a quiet "Skip this" link.

Show me all five steps as separate screens:

Step 1 — "What will you make?" A grid of sector tiles with duotone Phosphor
icons, plus a free-text field labelled "Or describe it".

Step 2 — "How much land do you need?" A range slider with band labels (under 2,
2–5, 5–20, 20–50, 50–100, 100+ acres) and an exact-acreage input beside it.

Step 3 — "What needs to be close?" Multi-select cards: seaport, airport,
national highway, rail siding, city of 1M+, existing supplier cluster. Each
selected card gets an optional distance preference.

Step 4 — "What does your process need?" Grouped selectors: power load band,
water demand band, effluent treatment (CETP required / on-site / none),
hazardous handling, cold chain, plug-and-play built space.

Step 5 — "Any preference on region?" A small AP map with selectable districts
and corridors, plus a "No preference" option.

At the bottom of every step, small and quiet: "This is a guide. It does not
reserve or allot land."

The flow should feel like a well-made product, not a government form. Calm,
confident, one decision at a time.
```

---

## PROMPT 4 — Park Finder results (the explainability screen)

```
Using the APIIC design system, build the Guided Park Finder results screen.

Header: "6 parks match your requirement" with the investor's answers shown as
removable filter chips (Food processing · 20–50 acres · Near a seaport · CETP
required · Krishna & Guntur districts) so they can adjust without restarting.

Result cards, stacked vertically, full width. Each card:
- mono park ID eyebrow + a match-strength badge (Strong match / Good match /
  Partial match) — use --tide, --indigo and --muted, never red
- park name, district, park type
- a hairline row of key data: available area, indicative rate, distance to port,
  power availability
- THE CRITICAL SECTION, headed "Why this matched" — a list with three distinct
  signal types, each visually different:
    ✓  met            (--tide)   e.g. "Food processing is a permitted category here"
    ⚠  partly met     (--gold)   e.g. "Rail siding 18 km away — you asked for rail proximity"
    —  not published  (--muted)  e.g. "Water demand data not published for this park"
- three actions: "View park", "+ Add to shortlist", "Open in GIS ↗"
- a freshness stamp line

Show at least one card carrying all three signal types. The honesty about
missing data is deliberate and is the point of the screen — design it so it
reads as confidence, not apology.

Include a sticky bottom bar that appears once two parks are shortlisted:
"2 parks shortlisted — Compare →"

Also show the zero-result state: "No park matches all five requirements.
Relaxing rail proximity gives 4 matches." with a one-click "Show those 4"
button. Never a dead end.
```

---

## PROMPT 5 — Parks Directory

```
Using the APIIC design system, build the Industrial Parks Directory page.

Layout: a 280px filter rail on the left, results on the right, with a
grid/map view toggle.

FILTER RAIL, collapsible groups:
district (multi-select with search) · corridor · park type (Industrial Park,
MSME Park, Theme Park, SEZ, Private Plug-and-Play) · permitted sector ·
available area band · indicative rate band · utilities (power band, assured
water, CETP, STP, TSDF, gas, plug-and-play sheds) · connectivity (port, airport,
highway, rail within X km) · availability status.
A "Clear all" and a live count at the top of the rail.

RESULTS AREA:
- a summary line: "104 parks · 61 with land available · data verified within
  30 days"
- sort control: most recently verified (default), available area, indicative
  rate, distance to nearest port
- selected filters as removable chips
- a 3-column grid of Parcel Cards
- pagination

Also show the MAP VIEW state: an AP map with clustered park pins, a selected
pin opening a compact Parcel Card in a panel, and an "Open detailed GIS ↗"
button.

Include the sticky comparison bar at the bottom once two or more parks are
selected.

And show the zero-result state with the nearest-match suggestion.
```

---

## PROMPT 6 — Park Profile

```
Using the APIIC design system, build the Industrial Park Profile page — the
single page an investor uses to decide. Use a fictional but realistic example:
"Model Industrial Park, Mallavalli, Krishna District", park ID KRI-019.

STICKY HEADER: park name, mono park ID, district, park type, availability chip,
"⌁ PROFILE VERIFIED 21 JUL 2026", and three actions: "Enquire about this park"
(gold), "Open detailed GIS ↗" (outline), "+ Shortlist".
Below it, a sticky in-page nav for the ten sections.

SECTIONS:
1  AT A GLANCE — six Freshness Stamp tiles: total area, developed area,
   available area, plots available, indicative rate, year established.
2  WHERE IT IS — a static map preview with an "Open detailed GIS ↗" overlay
   button, address, coordinates, nearest town.
3  CONNECTIVITY — a table: seaport, airport, national highway, rail head,
   nearest city, dry port. Columns for distance, road time, and how it was
   calculated with the date. Publishing the method is deliberate.
4  UTILITIES & SERVICES — four cards: Power (serviceability, voltage options,
   substation, utility contact); Water (source, service status, quality report
   link); Wastewater & environment (CETP/STP/TSDF type, status, standards,
   latest report); Internal infrastructure (a checklist of roads, drainage,
   fibre, street lighting, fire, health facility, worker amenities, security —
   each with a status and last-verified date).
5  GREEN ESTATE — renewable share, solar potential, water reuse %, tree cover,
   waste handling, certifications. Each sourced and dated. Where a figure isn't
   published, say "Not published" in --muted rather than hiding the row. Give
   this section a distinct --tide-tinted treatment.
6  RESILIENCE — power reliability, water security, flood/cyclone exposure band,
   alternate access route, digital redundancy. Same honest treatment.
7  WHO'S HERE — approved anchor units with sector tags.
8  PERMITTED & PREFERRED SECTORS — approved categories, zoning restrictions,
   linked policies.
9  DOCUMENTS — rows with title, version, status chip (Current / Amended /
   Superseded), issue date, file size, format, download.
10 LAND & CHARGES — approved rate, unit, effective date, what's included and
   excluded, applicable rebates with policy links, source GO reference, and a
   clear caveat that the final allotment price is determined under the Allotment
   Regulations.

FOOTER OF THE PAGE: the responsible zonal officer — role title, role-based
email, phone, office, and "⌁ CONTACT VERIFIED 18 JUL 2026".

Sections 5 and 6 are the sustainability and resilience commitments — they should
feel substantial and measured, not like a green badge.
```

---

## PROMPT 7 — Compare Parks

```
Using the APIIC design system, build the Compare Parks screen. Three parks side
by side, with room for a fourth.

A sticky left column carries the attribute names; the park columns scroll
horizontally on narrow screens. Each park column header: mono park ID, park
name, district, availability chip, a small thumbnail, and a remove control.
A "+ Add a park" empty column on the right.

ROWS: district · corridor · park type · total area · developed area · available
area · plots available · indicative rate · power · water · CETP/STP/TSDF ·
plug-and-play availability · distance to port · airport · highway · rail ·
permitted sectors · anchor units · green estate summary · resilience summary ·
zonal contact.

THREE CELL STATES — this is the important detail:
- a value, in Plex Mono for figures, with its as-of date visible on hover
- "Not published" in --muted italic
- "Not applicable" in --muted
Never leave a cell blank. A blank reads as a bug and destroys trust.

Add subtle row highlighting so that where parks differ meaningfully, the
difference is easy to spot — but don't declare a winner. APIIC doesn't rank its
own parks.

Bottom action bar: "Download comparison (PDF)" (gold), "Enquire about these
parks", "Open all in GIS ↗".

Also design the PDF preview state — a clean, dated, one-page comparison sheet
carrying every source and as-of date, with the APIIC mark. This is the artefact
an investor forwards to their board, so it should look genuinely printable.
```

---

## PROMPT 8 — Incentive Eligibility Screener

```
Using the APIIC design system, build the Incentive Eligibility Screener — a
short questionnaire that tells an investor which policy support they may
possibly qualify for. It is indicative only and must say so, clearly and
repeatedly, without feeling defensive.

Show two screens.

SCREEN A — the questionnaire. Seven questions on one scrollable page with a
sticky progress rail: sector · investment band · employment expected ·
enterprise category (Micro / Small / Medium / Large / Mega / Ultra-Mega) ·
district · entrepreneur category as recognised in policy · sustainability
measures planned. Clean grouped controls, generous spacing.

SCREEN B — the result. Header: "Based on what you've told us, these policies may
apply to your project." Then policy match cards, each with:
- policy name and issuing department
- status chip (In force) and validity period
- "Why this may apply to you" — two or three plain-language bullets referencing
  the specific answers given
- what the policy broadly offers, in plain words
- two actions: "Read the plain-language summary" and "Download official policy"
- the responsible desk

A persistent, calm disclaimer panel — not a red warning box, an --indigo
information panel: "This is indicative only. It is not an application, an
approval or an entitlement. Eligibility is determined by the competent authority
under the official policy document."

Bottom CTA: "Talk to the policy desk".
```

---

## PROMPT 9 — Talk to an Expert

```
Using the APIIC design system, build the investor enquiry experience. Two
screens.

SCREEN A — the form. A calm, confident single-column layout, maximum 640px wide,
on --paper.
Heading: "Tell us what you're planning."
Sub: "An APIIC officer will respond within 1 working day."
If the investor arrived from a park page or a shortlist, show a small context
card at the top: "About: Model Industrial Park, Mallavalli (KRI-019)" or
"About your shortlist of 3 parks" — with a remove control.
Fields: name · organisation · role · sector · investment stage (exploring /
shortlisting / ready to apply) · land requirement in acres · preferred districts
· timeline · email · phone · anything else we should know · consent checkbox
with a link to the privacy notice.
Show an error state on one field with an inline message and an error summary at
the top of the form.
Beside the form, a quiet panel: office hours, phone, the escalation contact, and
"What happens next" in three steps.

SCREEN B — the confirmation. Not a bare thank-you. Show:
- a reference number in Plex Mono
- "We've received your enquiry. The Krishna zonal desk will respond by
  27 July 2026."
- who specifically will respond, by role
- what to do if you don't hear back, with the escalation route
- three useful next steps while they wait: download the investor brief, read the
  setup guide, browse similar parks

The confirmation screen is where most government websites give up. This one
should feel like the beginning of a relationship.
```

---

## PROMPT 10 — Data & Freshness Dashboard

```
Using the APIIC design system, build a public "Data & freshness" page at /trust.
No other industrial development corporation website in India or internationally
publishes this, and it is APIIC's strongest credibility signal.

HEADER: "What we publish, who owns it, and when we last checked it."
Sub: "APIIC publishes 30 live datasets on this website. This page shows the
status of every one of them."

A summary strip of four figures using the Freshness Stamp treatment:
datasets published · % verified within their cadence · datasets overdue ·
last full certification date.

Then the main table, filterable by owning function and by status:
columns — dataset · pages that use it · owning function · update cadence ·
last verified · status.
Status chips: "Current" (--tide), "Due soon" (--gold), "Overdue" (--gold, with
an outline treatment). Never red — this is a transparency page, not an alarm.

Populate it with realistic rows drawn from APIIC's actual data domains: current
leadership, homepage KPIs, land availability summary, park directory, park
availability, park rates and charges, park power information, park water
information, park infrastructure checklist, connectivity facts, park documents
and layouts, policies and amendments, incentive summaries, service catalogue,
official portal links, news and announcements, tenders and corrigenda, annual
reports, sector statistics, district and corridor facts, success stories,
events, contact directory, careers, FAQs, homepage featured content, document
metadata, page review status, privacy and accessibility statements, service
alerts.

Below the table, a short plain-language explanation of what "verified" means,
what happens when a dataset goes overdue, and how to report something that looks
wrong.

Design this to be genuinely readable and even a little beautiful. It's a
governance artefact that doubles as a marketing asset.
```

---

## PROMPT 11 — Investor Copilot panel

```
Using the APIIC design system, build the Investor Copilot — an AI assistant
panel, shown open over a dimmed Park Profile page so the context is clear.

COLLAPSED STATE: a slim bar bottom-right, --ink background, a Phosphor icon and
"Ask about investing in AP".

OPEN STATE: a 420px side panel, full height, --surface background, hairline left
border.

Panel header: "Investor Copilot" with a one-line scope note underneath:
"Answers from published APIIC content only. It can't allot land, quote binding
prices or accept applications."

Three starter prompts as tappable chips:
"Find me land for a 20-acre food processing unit near a port"
"What support could a ₹200 Cr electronics project qualify for?"
"What do I need before I apply for land?"

Then show a real conversation with three exchanges. Every assistant answer must
carry three things, styled distinctly:
1  the plain answer
2  a source line in Plex Mono: "Source: Model Industrial Park profile · verified
   21 Jul 2026" with the page linked
3  a human handoff line: "Owned by the Asset Management desk — talk to them →"

Show one answer where the copilot does NOT know: "That isn't published on this
website. The Krishna zonal desk can tell you — shall I pass your question to
them?" with a "Yes, send it" button.

At the bottom: an input field, a "Download this conversation" control, and a
small note that the conversation isn't stored with personal data.

The whole panel should read as a helpful, honest colleague — never a chatbot
that pretends to know things. That's the human-plus-machine principle made
visible.
```

---

## PROMPT 12 — Mobile views

```
Using the APIIC design system, build the mobile views (390px) of the four
screens that matter most on a phone:

1  HOMEPAGE — hero with the search field prominent, top tasks as a 2×3 grid,
   KPIs stacked, one featured Parcel Card with a "See all parks" link. A pinned
   bottom action bar with "Find land" and "Talk to an expert".

2  GUIDED PARK FINDER — one question per screen, thumb-reachable controls,
   large tap targets, progress at the top, back arrow top-left.

3  PARK FINDER RESULTS — stacked cards with the "Why this matched" section
   intact and readable. Do not truncate the match explanations; they are the
   value. A pinned "2 shortlisted — Compare" bar.

4  PARK PROFILE — sticky header with the park name and a "Enquire" button, the
   ten sections as an accordion with the in-page nav as a horizontally
   scrollable chip row, and the "At a glance" tiles as a 2-column grid.

Show visible focus states and confirm that every top task is completable with
one thumb.
```

---

## After the twelve screens

Two things to prepare before the MD session:

**A one-slide opener.** 161 requirements audited, 15 fully met today, 82 critical. The three capabilities no competing state website has — explainable guided site selection, honest side-by-side comparison, and published data freshness — are all things APIIC can do because APIIC owns the land, the parks and the data.

**A one-slide closer.** Wave 0 fixes the accuracy failures in two weeks. Wave 2 ships the investor spine in twelve. The three decision tools land in months 3–6. This is a ninety-day-to-first-release programme, not a two-year rebuild.

**Have a defensible answer to the three questions leadership will ask:**

| Likely question | Answer |
|---|---|
| "Where does the live park data come from?" | The website is read-only. It consumes the authorised dataset; it does not become a new source. Freshness and ownership are governed by the 30-dataset calendar in the audit workbook. |
| "Is this replacing AGILE 2.0 / the portals?" | No. The website is the front door and the decision layer. GIS stays the spatial engine, the portals stay transactional. The website's job is to make the handoff clean and labelled. |
| "What if the data isn't ready?" | The design shows "Not published" honestly rather than hiding a gap. The site can launch truthfully with partial data and improve visibly — which is itself a credibility signal. |
