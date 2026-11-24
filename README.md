# Bravo Barbershop And Salon — Site Documentation

**Status: one-page design proposal, not the live site.** Reused the build
originally made for Global Barber Shop (same template, dark/premium direction,
expressive motion) and repurposed every piece of content for this client.
`robots.txt` and a meta `noindex` tag keep it out of search while it's a demo.
Booking buttons are placeholders.

## Client
- Business: Bravo Barbershop And Salon
- Address: 4908 17 Ave SE, Unit 104, Calgary, AB T2A 0V4
- Phone: (825) 747-7527
- Hours: Mon–Sat 9am–9pm, Sun 10am–10pm (given directly by the client)
- Instagram: @kidubravo (https://www.instagram.com/kidubravo/)
- Languages: not confirmed

**On the business name:** their own printed thank-you card (seen in the
Instagram feed) reads **"Bravo Cutz Barber Shop & Salon."** The client asked
to use **"Bravo Barbershop And Salon"** on the site instead — that's what's
live in the copy now. Worth a second look before this goes further: if the
card is current signage/branding, a mismatched name on the site will hurt
local SEO (NAP consistency) and could confuse anyone cross-checking Google
against the site.

**NAP confidence:** address and phone came from the client's own printed
material (a "thank you" graphic posted to Instagram) showing the full
business name, address and phone together — phone matches what the client
gave directly. No independent third-party listing exists (no Google/Yelp/
Fresha/Facebook page found for this business under either name), so there's
no second source to cross-check against, unlike the previous project.

## Business context
- Walk-in barbershop, no appointment required, open 7 days.
- No pricing available anywhere (no website, no third-party booking listing).
  Services section lists categories only — "ask in shop" for pricing, rather
  than inventing numbers.
- Services shown are inferred from the actual Instagram photos used: fades,
  custom hair-design/line-art work, beard grooming, kids' cuts. If the shop
  also does colour, extensions or other salon services implied by "& Salon"
  in the name, that's unconfirmed and not claimed anywhere on the page.
- Kidu (@kidubravo) is the face of the account and appears repeatedly in the
  shop's own posts, but ownership isn't confirmed — copy refers to "the team"
  and credits Kidu as "the face behind @kidubravo" rather than asserting he's
  the owner. Confirm before changing this.

## Design
- Same system as the Global Barber Shop build: dark & premium, expressive
  motion, full-bleed hero, Playfair Display for headings.
- About section redesigned without a portrait photo — none of the available
  Instagram photos are a usable clean headshot (the only candidate is mixed
  into a busy promotional graphic with text and logos, not croppable in this
  environment). Centred, text-only treatment used instead.
- Gallery uses 5 photos (not 6) in a deliberate 1-large + 4-regular layout,
  rather than padding to 6 with a near-duplicate angle of the same haircut.

## Technical
- Single page: `index.html`, same structure as the previous build.
- JSON-LD `HairSalon` schema with real NAP + hours; `sameAs` includes only
  Instagram (no confirmed Facebook page for this business).
- Live "open now / closes at" status computed against `America/Edmonton` time,
  using the hours the client gave directly.
- "Book Now" scrolls to an on-page panel explaining a booking widget would go
  there — no booking platform confirmed for this client (unlike the previous
  project, no Fresha/Square/Booksy listing was found), so no platform is named.

### Open items before this could go live
- Resolve the business name question above with the client.
- Get real pricing if they want it shown — currently none, by design, not
  oversight.
- A clean, unposed photo of the shop interior/exterior and of the team/owner —
  everything currently used is a client haircut photo pulled from Instagram.
- Confirm whether "& Salon" implies services beyond barbering that should be
  listed.
- Same technical gaps as the previous build: no Services/Contact/404 pages,
  no sitemap.xml, no self-hosted fonts, no AVIF/WebP (source images are
  360×640 from Instagram's CDN — fine for mobile, soft at large desktop
  sizes), no real favicon/touch-icon set, no booking platform wired up.
- This repo's git history and remote (`origin` → `abdul-dev06/globalbarber`)
  were set up for the previous client. If this needs to go to GitHub, it
  should go to a separate repo for Bravo — flagged to the user, not yet
  resolved.

## Assets
- `img/gallery-*.jpg` — pulled from instagram.com/kidubravo, Nov 2026. Of 13
  images fetched, 2 failed to download (bad signed URLs) and several were
  excluded on inspection: promotional graphics with burned-in text/logos, and
  one near-duplicate angle of a haircut already used. 5 clean, usable photos
  remain. Temporary for the pitch — replace with client-supplied originals
  before launch.
- `favicon.svg` — placeholder monogram ("B"), not a real logo.

## Maintenance log
- 2026-11-23 — Repurposed the Global Barber Shop build for Bravo Barbershop
  And Salon: new NAP, new Instagram-sourced gallery, services rewritten
  without invented pricing, About section redesigned without a portrait photo.

## Client agreement
- Not yet in place — this is a pre-sale proposal.
