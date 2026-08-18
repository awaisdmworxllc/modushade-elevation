# ModuShade — Pre-launch SEO & tracking pack

Everything below reflects what is live in the build today. Items marked **ACTION**
need something from you before launch.

---

## 1. Final URL list (matches /sitemap.xml)

Core: `/`, `/services`, `/service-areas`, `/projects`, `/about`, `/faq`,
`/contact`, `/privacy-policy`, `/terms`

Services (12):
`/services/motorized-shades` (priority 0.95), `/services/motorized-curtains`,
`/services/outdoor-motorized-shades`, `/services/roller-shades`,
`/services/blackout-shades`, `/services/light-filtering-shades`,
`/services/zebra-shades`, `/services/cellular-shades`,
`/services/roman-shades`, `/services/sheer-shades`,
`/services/custom-drapery`, `/services/custom-blinds`

Service areas (10):
`/service-areas/bergen-county-nj`, `/northern-new-jersey`, `/hudson-county-nj`,
`/manhattan-ny`, `/fort-lee-nj`, `/englewood-nj`, `/edgewater-nj`,
`/essex-county-nj`, `/brooklyn-ny`, `/yonkers-ny`

Projects: `/projects/<slug>` — one page per project, added automatically to the
sitemap as projects are published. **ACTION: content needed (section 6).**

Sitemap is generated server-side, so new services / areas / projects appear
without manual editing. `robots.txt` allows all crawlers and points to
`https://modu-shade.com/sitemap.xml`.

---

## 2. Keyword mapping — service pages (no two pages share intent)

| Page | Primary keyword / intent | Secondary |
|---|---|---|
| /services/motorized-shades | motorized shades Bergen County / NJ (top priority) | smart shades, automated roller shades |
| /services/motorized-curtains | motorized curtains / drapery tracks | app-controlled curtains |
| /services/outdoor-motorized-shades | outdoor motorized shades, patio sun shades | pergola / terrace screens |
| /services/roller-shades | custom roller shades | solar shades |
| /services/blackout-shades | blackout shades bedroom / nursery | room darkening shades |
| /services/light-filtering-shades | light filtering shades | glare / daylight control |
| /services/zebra-shades | zebra shades / dual sheer shades | day-night shades |
| /services/cellular-shades | cellular shades, honeycomb shades | insulating shades |
| /services/roman-shades | custom roman shades | fabric folds, lined roman |
| /services/sheer-shades | sheer shades / Shangri-La shades | adjustable vane shades |
| /services/custom-drapery | custom drapery & curtains | made-to-measure curtains |
| /services/custom-blinds | custom blinds — wood, faux wood, vertical | wood blinds, vertical blinds |

Cannibalisation control already in place: the four legacy blinds pages
(wood / faux wood / vertical / custom) are consolidated into one
`/services/custom-blinds`; "custom window treatments / coverings / solutions"
variants all resolve to `/services`; privacy-shade and light-filtering
duplicates fold into `zebra-shades` and `light-filtering-shades`.

---

## 3. Keyword / search intent per location page

| Page | Primary intent | Local angle used on page |
|---|---|---|
| bergen-county-nj | custom window treatments Bergen County NJ | county hub, home base Cresskill |
| northern-new-jersey | window treatments Northern New Jersey | regional hub, wider county coverage |
| hudson-county-nj | window treatments Hudson County / Jersey City & Hoboken | waterfront condos, building rules |
| manhattan-ny | custom shades & custom drapery Manhattan | pre-war and new-build apartments, COI/service elevators |
| fort-lee-nj | motorized shades Fort Lee NJ + custom window treatments | high-rise towers, tall glass, minutes from base |
| englewood-nj | custom window treatments Englewood NJ | larger single-family homes, tall windows |
| edgewater-nj | motorized & zebra shades Edgewater NJ | waterfront condos and townhomes, river glare |
| essex-county-nj | custom window treatments Essex County NJ | period homes, out-of-square openings |
| brooklyn-ny | custom window treatments Brooklyn NY | brownstones, apartment installs |
| yonkers-ny | custom window treatments Yonkers NY | mixed homes/apartments, hard-to-reach windows |

Each page has its own H1, lead copy, local context sections, unique imagery and
5–7 unique FAQs; no city-swap duplicates.

---

## 4. SEO titles & meta descriptions

**Homepage**
- Title: `ModuShade | Custom Window Treatments in Bergen County & NYC`
- Meta: "Premium custom window treatments without the premium price. Motorized shades, blinds and drapery measured and installed across Bergen County, Northern NJ, Hudson County and Manhattan."

**Services** (titles as live; each meta names the product + service area)
- Motorized Shades in Bergen County & Northern NJ | ModuShade
- Motorized Curtains & Drapery Tracks | ModuShade NJ & NYC
- Outdoor Motorized Shades for Patios & Terraces | ModuShade NJ
- Custom Roller Shades | Bergen County & Northern NJ | ModuShade
- Blackout Shades for Bedrooms & Nurseries | ModuShade NJ & NYC
- Light Filtering Shades | Soft Daylight & Privacy | ModuShade
- Zebra Shades (Dual Sheer Shades) | ModuShade NJ & NYC
- Cellular & Honeycomb Shades | Insulating Window Shades | ModuShade
- Custom Roman Shades | Tailored Fabric Shades | ModuShade NJ
- Sheer & Shangri-La Shades | Adjustable Vane Shades | ModuShade
- Custom Drapery & Curtains | Made to Measure | ModuShade NJ & NYC
- Custom Blinds — Wood, Faux Wood & Vertical | ModuShade NJ & NYC

**Locations**
- Custom Window Treatments in Bergen County, NJ | ModuShade
- Window Treatments in Northern New Jersey | ModuShade
- Window Treatments in Hudson County, NJ | ModuShade
- Custom Window Treatments in Manhattan, NY | ModuShade
- Window Treatments & Motorized Shades in Fort Lee, NJ | ModuShade
- Custom Window Treatments in Englewood, NJ | ModuShade
- Window Treatments in Edgewater, NJ | Motorized Shades | ModuShade
- Custom Window Treatments in Essex County, NJ | ModuShade
- Custom Window Treatments in Brooklyn, NY | ModuShade
- Custom Window Treatments in Yonkers, NY | ModuShade

All metas are unique and under ~160 characters; every title is under 60–65
characters including the brand.

---

## 5. Crawlability, structure & schema

- Server-rendered HTML: every service, location and project page ships full
  content in the initial response — no JS required for Google to read it.
- Clean, keyword-relevant URLs; one H1 per page; H2/H3 hierarchy per section.
- Self-referencing canonical on every page; `index,follow,max-image-preview:large`.
- Breadcrumbs in the UI plus `BreadcrumbList` schema on service, location and
  project pages.
- `HomeAndConstructionBusiness` (LocalBusiness) schema sitewide with name, phone,
  email, address, area served and genuine reviews; `Service` schema per service
  page; `FAQPage` schema where FAQs exist.
- Internal linking: services ↔ locations ↔ projects cross-links, plus header,
  footer and in-page CTAs.
- Every image has descriptive alt text, explicit dimensions and lazy loading
  below the hero; mobile-first responsive layout throughout.

---

## 6. Projects / Our Work — what I need from you

The architecture is ready: adding one object to `src/data/projects.ts` creates
`/projects/<slug>`, adds it to `/projects`, links it from the matching service
and location pages, and adds it to the sitemap. Nothing is invented — the list
stays empty until you send real material.

For each of the first 4–6 projects, please send:
1. 3–6 photos (landscape preferred, highest resolution you have) — and
   before/after pairs where you have them.
2. City / town (e.g. Fort Lee, NJ).
3. Product actually installed (e.g. motorized blackout roller shades).
4. Rooms / number of windows.
5. What the customer wanted (2–3 lines).
6. What you recommended and why (2–3 lines).
7. Blackout vs light filtering, and motorisation details (remote, wall switch,
   app, hardwired or battery) where applicable.
8. Approximate year, and whether the customer's first name may be used.

Suggested first set for SEO coverage: one Fort Lee motorized, one Manhattan or
Edgewater high-rise, one Bergen County blackout bedroom, one drapery or zebra
project, one outdoor/patio project.

---

## 7. Reviews

Genuine Google review quotes are displayed and included in schema. The star
rating + review count block is built but intentionally switched off, because a
hard-coded count goes stale. Two accurate options:
- **A (recommended):** pull rating and count live from the Google Business
  Profile / Places API, cached for a few hours, so the number is always current.
- **B:** leave quotes only, no numeric rating.

---

## 8. Tracking — configured, IDs pending

Events already firing on every relevant CTA: `phone_click`, `whatsapp_click`,
`email_click`, `generate_lead` (consultation and contact forms), each stamped
with lead source (UTM, `gclid`, referrer channel, landing page), stored per
session so the original source survives internal navigation.

**ACTION:** send either a GTM container ID or a GA4 measurement ID (one, not
both, to avoid double counting) and it goes live immediately. Then:
- GA4: mark `generate_lead`, `phone_click`, `whatsapp_click` as key events.
- Search Console: verify `modu-shade.com` after the domain move and submit
  `/sitemap.xml`.
- GTM: only needed if you also run Google Ads conversions.

Full funnel (organic → lead → qualified → appointment → sale) needs the offline
stages tracked in your CRM/sheet against the lead source captured on the site.

---

## 9. Website ↔ Google Business Profile consistency

Keep these identical across site, GBP and citations: business name **ModuShade**,
one phone number, `https://modu-shade.com`, email `info@modu-shade.com`, service
list matching the 12 service pages, and service areas matching the 10 area pages
(Bergen County, Northern NJ, Hudson County, Essex County, Manhattan, Brooklyn,
Yonkers plus named towns). GBP services and posts should link to the matching
service or location page.

---

## 10. 301 redirect map (from the current modu-shade.com)

Implemented in `src/data/redirects.ts`, matched case-insensitively with or
without a trailing slash and with or without `.html`. No chains; nothing points
at the homepage unless the old page *was* the homepage.

| Old URL | New URL |
|---|---|
| /index, /home | / |
| /about-us | /about |
| /contact-us | /contact |
| /faqs | /faq |
| /our-work | /projects |
| /service-area | /service-areas |
| /shades, /custom-window-treatments, /custom-window-coverings, /custom-window-solutions | /services |
| /shades-custom, /custom-shades, /roller-shades | /services/roller-shades |
| /shades-blackout, /blackout-shades | /services/blackout-shades |
| /shades-light-filtering, /light-filtering-shades | /services/light-filtering-shades |
| /shades-privacy, /privacy-shades, /zebra-shades | /services/zebra-shades |
| /motorized-shades | /services/motorized-shades |
| /cellular-shades, /honeycomb-shades | /services/cellular-shades |
| /roman-shades | /services/roman-shades |
| /sheer-shades | /services/sheer-shades |
| /blinds, /blinds-custom, /custom-blinds, /blinds-wood, /wood-blinds, /blinds-faux-wood, /faux-wood-blinds, /blinds-vertical, /vertical-blinds | /services/custom-blinds |
| /drapery, /curtains, /custom-drapery | /services/custom-drapery |
| /motorized-curtains | /services/motorized-curtains |
| /outdoor-shades, /outdoor-motorized-shades | /services/outdoor-motorized-shades |
| /bergen-county-nj, /hudson-county-nj, /essex-county-nj, /northern-new-jersey, /fort-lee-nj, /englewood-nj, /edgewater-nj, /manhattan-ny, /brooklyn-ny, /yonkers-ny | same slug under /service-areas/ |

**ACTION:** export the indexed URL list from Search Console (Pages report) or
the old sitemap so any URL not in this table gets mapped before the cutover.

---

## 11. Performance / Core Web Vitals

Server-rendered pages, no client-side data fetching on first paint, single
Google Fonts request, images with explicit dimensions and lazy loading, hero
video muted/inline with a poster first frame and paused off-screen. Final
PageSpeed / CWV numbers should be measured on the production domain after the
move — field data only exists once the real domain serves traffic.

---

## 12. Free Professional Installation — wording to confirm

Proposed short form: **"Free professional installation."**
Longer form for value sections: **"Free professional installation on every
order — measured, installed and adjusted by our own team."**

Planned placement (not repeated everywhere): homepage value block, services
overview, motorized-shades page, contact page and the pre-CTA block on service
pages. Confirm the wording and any conditions (minimum order, service area
limits) and it will be applied.
