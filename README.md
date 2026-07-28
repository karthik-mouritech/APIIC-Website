# APIIC Website Prototype

Static, Vercel-ready prototype for the Andhra Pradesh Industrial Infrastructure Corporation (APIIC).

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Select **Other** as the framework preset.
3. Leave the build command and output directory blank, then deploy.

Vercel serves the site as static HTML. The entry point is `index.html`; the remaining `.dc.html` files are page templates used by the included browser runtime.

## Local preview

Run `python3 -m http.server 8080` in the repository and open `http://localhost:8080`.

## Note

This prototype contains illustrative data and placeholders, as marked in the supplied design files. Replace them with approved APIIC content before public launch.

## Brand palette (v5.1 — sampled from the APIIC logo)

| Role | Hex | Where it is used |
| --- | --- | --- |
| APIIC Blue | `#245484` | Dominant. Nav, dark bands, primary buttons, headings, links, focus rings |
| Deep Blue | `#16385C` | Body text, footers |
| Mid Blue | `#2E6399` | Hover state for blue surfaces and links |
| APIIC Green | `#009C54` | Availability and positive status only |
| Terracotta | `#D8783C` | Accent rules, eyebrow labels, limited badges, link hover |
| Paper | `#F7F9FB` | Page background |
| Line | `#DDE4EC` | Hairline borders |
| Muted | `#5A6B7A` | Secondary text |

Terracotta is never placed behind text (3.8:1 at body sizes). Primary actions
are blue on white or white on blue.

## Layout system (v6 — homepage language rolled out sitewide)

Every page now shares the homepage's frame: a 1280px container, a photographic
dark-blue page header (estate/port photography under a 96° navy gradient), an
uppercase eyebrow breadcrumb preceded by a 34px terracotta rule, a Sora headline
at 52px+ with -0.035em tracking, and a `#CBD9EC` standfirst. Decorative SVG
squiggles in the old headers were removed. Paper is `#F7F9FB`, hairlines
`#DDE4EC`, link hover terracotta `#B75F28`. Tool pages (Park Finder, Park
Profile, Talk to an Expert, System pages) keep their working-surface headers by
design and inherit the same tokens, type and container width.

Type: Sora for headings and figures, Instrument Sans for everything else.
Radii 8px / 6px. Actions are squared; chips and status dots stay pills.
Provenance is written as prose ("As of 21 Jul 2026 · Land Bank Cell"), never as
uppercase monospace audit flags.
