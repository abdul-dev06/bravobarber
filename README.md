# Global Barber Shop — Site Documentation

**Status: one-page design proposal, not the live site.** Built to show the
client what a rebuild could look like — no visible "demo" framing on the page
itself (removed on request), but `robots.txt` and a meta `noindex` tag still
keep it out of search until it's approved. Booking buttons are placeholders —
see Technical > Open items.

## Client
- Business: Global Barber Shop
- Owner: Hadish ("Hadish the Barber" on Instagram)
- Staff: shop has a full team of barbers behind the chairs, not just Hadish —
  no individual names/bios confirmed yet
- Address: 3012 17 Ave SE #17, Calgary, AB T2A 0P9
- Phone: (587) 470-8295
- Hours: Mon–Thu 9am–9pm, Fri–Sat 9am–10pm, Sun 10am–9pm
- Languages: not yet confirmed with client

**Not yet confirmed directly with the client — pulled from public listings:**
- Phone/address/hours cross-checked across the shop's own site (globalbarber.ca),
  their Fresha booking page, and Yelp — all three agree, so confidence is high.
- One older aggregator listing shows a different phone number, (403) 903-7009,
  and simplified hours (9am–9pm every day). That number also appears on an old
  Instagram "we're hiring" post. Treated as outdated since it doesn't match the
  shop's own site or Fresha, but worth a one-line confirmation with the client
  before this goes live.

## Business context
- Walk-in barbershop, no appointment required, open 7 days.
- Services confirmed with pricing (from the shop's own site): Precision Fade
  $30, Precision Cut & Beard $35, Facial $20.
- Additional services listed on their Fresha page with no public pricing:
  Beard Trim, Head Shave, Hot Towel Shave, Men's Haircut — shown on the demo
  as "ask in shop."
- The shop already has a live site at globalbarber.ca — this proposal is
  positioned as a stronger alternative, not a from-scratch build.

## Design
- Direction: dark & premium — near-black background, warm gold accent.
- Motion: expressive — animated hero entrance, scroll-linked parallax on the
  hero image, staggered reveal-on-scroll for cards and gallery.
- Hero: full-bleed photo.
- Font: Bebas Neue (Google Fonts, loaded via `<link>`) for display headings,
  system font stack for body text. Should be self-hosted before launch per
  the usual build standard.
- Colours: `--bg #0b0b0c`, `--gold #c9a24b` — chosen for the premium-barbershop
  read, not sourced from a client brand guide (none exists yet).

## Technical
- Single page: `index.html`. Real multi-page structure (Services, Gallery,
  Book, Contact) not yet built — this is a homepage-only pitch.
- "Book Now" links scroll to an on-page panel that explains a real booking
  widget (Fresha, since the shop already has a Fresha listing) would embed
  there. No dead links — intentionally inert instead.
- JSON-LD `HairSalon` schema included with real NAP + hours.
- Live "open now / closes at" status computed client-side against
  `America/Edmonton` time so it's correct regardless of visitor timezone.
- No analytics, no contact form yet — homepage-only scope.

### Open items before this could go live
- Confirm phone number and exact hours directly with the client (see above).
- Real photos: gallery is temporarily sourced from Hadish's Instagram
  (@hadishthebarber). Six images checked individually and used; the feed also
  contained a soccer score screenshot, a hiring graphic, an airplane-window
  photo, and one shot of a different shop's storefront ("Planet Barbershop")
  — all excluded. No shop exterior, no wide interior shot, and no logo file
  exist yet. All source images are ~480–640px from Instagram's CDN, fine for
  mobile but soft at large desktop sizes — need client-supplied originals,
  processed to AVIF/WebP per the usual pipeline.
- Real headshot of Hadish — current one is his tiny Instagram profile photo.
- Confirm the "4.8 stars" figure seen on one third-party review aggregator
  against the actual Google Business Profile before using it anywhere.
- Build out Services, Gallery, Book, and Contact as their own pages once the
  client approves the direction, and connect the real Fresha embed.
- Remove `noindex` and the demo banner at launch; add `sitemap.xml`, `404.html`,
  touch icon, and OG share image (1200×630).

## Assets
- `img/gallery-*.jpg`, `img/hadish-profile.jpg` — pulled from
  instagram.com/hadishthebarber, Aug 2026. Temporary for the pitch; replace
  with client-supplied originals before launch.
- `favicon.svg` — placeholder monogram, not a real logo.

## Maintenance log
- 2026-08-28 — Built one-page design proposal (dark/premium direction,
  expressive motion, full-bleed hero) for client pitch. Not launched.

## Client agreement
- Not yet in place — this is a pre-sale proposal.
