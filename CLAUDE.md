# CLAUDE.md — Site Build Guide

Working guide for building static client websites. Read fully before
generating, editing, or reviewing any site in this repo.

These sites are leased, not sold — built once and maintained for years on a
monthly fee. Most of what follows is a default with a reason attached, not a
rule. Where you have a good reason to go a different way, take it and tell me
why. Where you're unsure, ask.

The two things worth holding onto through any deviation: the client's phone has
to ring, and the site has to feel right on a smartphone.

---

## 1. What these sites are for

Every client here is a small local business — barbershops, trades, auto shops,
driving schools — whose customers find them on Google, on a phone, usually
looking for one of three things: are you open, where are you, what's your
number.

A site that looks incredible and buries those three things has failed at the
job it was hired for. A plain site that surfaces them works. The goal is both,
and when they pull against each other, that tension is worth raising with me
rather than resolving silently.

---

## 2. Before building — what to ask

Ask rather than assume. A missing business detail is worth one question; a
plausible invention becomes a bug the client finds later.

**Business**

- Name exactly as on their Google listing, full address, phone, email
- Hours for all seven days
- What they do in their own words — and what they want *more* of
- Service area, as neighbourhoods rather than just "Calgary"
- Years in business, owner name, anything that builds trust
- Languages spoken by staff

**Site**

- Which pages (section 4 has starting points by industry)
- Services to list, with pricing if they'll share it
- Booking: embedded platform, phone only, or a form?
- Domain — new or existing, and where it's registered
- Social profiles to link
- Anything sold online? Flag it early if so; static may not be the right fit.

**Design** — see section 5. Ask me for direction rather than picking one.

**Assets**

- What photos exist and where they live

If the photos don't exist, say so plainly and tell me what needs shooting
before design starts. Designing around images that don't exist is how sites end
up with stock placeholders.

---

## 3. The things that earn their keep

None of these are stylistic. They're the difference between a site that
generates calls and one that just sits there. Deviating from any of them is
possible — just flag it so it's a decision rather than an oversight.

**Getting the call**

- Phone numbers as real `tel:` links, reachable within a screen of the top on
  mobile. Someone tapping a number should get a dialer, not a search page.
- Address as selectable text, not only inside a map embed
- Hours as text on the homepage — the single most-looked-for thing for a
  walk-in business
- Email as `mailto:`, directions linked out to Google Maps
- Every clickable thing goes somewhere real

**Being found**

- Unique title (under ~60 chars, include the city) and meta description
  (~150 chars) per page
- One `<h1>` per page, describing that page rather than just the business name
- Open Graph tags and a canonical link
- JSON-LD `LocalBusiness` schema, or the right subtype — `HairSalon`,
  `AutoRepair`, `DrivingSchool`, `HomeAndConstructionBusiness`
- Name, address and phone matching the Google Business Profile exactly, down to
  the punctuation and suite number. Mismatches quietly hurt local ranking.
- `robots.txt` and `sitemap.xml` in the root
- Critical content — hours, address, services, phone — living in the HTML
  rather than injected by JavaScript, so crawlers see it

**Basic completeness**

- Favicon and a 180×180 touch icon
- A 404 page
- `lang` on `<html>`, viewport meta tag
- `README.md` (section 8)

**Worth catching before launch**

Placeholder text, unedited template copy, stock photos of work that isn't the
client's, filenames masquerading as alt text, and untested booking or contact
paths. Every one of these is something I've found live on a real competitor's
site — they're the reason clients hire us over a DIY platform.

---

## 4. Pages

Default to the smallest set that covers the client's real searches. Extra pages
help SEO only when each targets a distinct thing someone actually types.

- **Barbershop / salon** — Home, Services & Pricing, Gallery, Book, Contact
- **Auto repair** — Home, a page per major service (brakes, tires, diagnostics,
  inspections), About, Contact
- **Trades** — Home, a page per service, Portfolio, Service Areas, Contact.
  Seasonal services get their own page, live before the season starts.
- **Driving school** — Home, Courses & Pricing, a page per licence class,
  Instructors, Book, Contact

The principle underneath: a service worth its own search term deserves its own
URL. Services hidden in modals or `href="#"` popups can't rank, because there's
nothing for Google to point at.

---

## 5. Design — my call

Aesthetics are mine to decide per project. Don't default to something safe, and
don't talk me out of an ambitious direction. Ask, then build it.

**Ask at the start:**

- Direction — minimal, bold and graphic, dark and premium, warm and
  traditional, editorial, brutalist, or a reference I'll send
- Motion — none, subtle, or expressive
- Hero — static image, video, split layout, full-bleed type, canvas
- Any template, CodePen or site I want used as a starting point

If I send a reference or template, use it, but adapt it to the client's real
content. The failure mode is a beautiful site that still reads like a template
because the copy and photos never got swapped out.

Colour, type, layout, density, motion, weirdness — all open. If a choice will
cost the client conversions, say so once, then build what I asked for.

---

## 6. Mobile first, and mobile hardest

This is the part not to get loose about. These clients' customers are on
phones, outdoors, on mobile data, often one-handed. A site that's beautiful on
your 27" monitor and awkward on a 6" screen has it backwards.

**Approach**

- Design and build the mobile layout first, then expand outward. Retrofitting
  desktop-down is where responsive sites go wrong.
- Base CSS is mobile; `min-width` media queries add complexity for larger
  screens.
- Fluid by default — `clamp()`, relative units, flexible grids — so the layout
  holds at sizes you didn't explicitly test.

**Sizes to check every build**

| Width | Represents |
|---|---|
| 320px | Small/older phones — nothing should break or overflow |
| 375–390px | The most common real-world phone width |
| 430px | Large phones |
| 768px | Tablet portrait |
| 1024px | Tablet landscape / small laptop |
| 1440px+ | Desktop |

Also check landscape phone, and a tall page with the browser chrome visible —
`100vh` heroes get cut off on iOS. Use `100dvh` or `svh` instead.

**On a phone specifically**

- Tap targets at least 44×44px with real space between them
- Body text 16px minimum — anything smaller triggers zoom on iOS inputs
- Primary actions (call, book, directions) within thumb reach, not stranded in
  a top corner
- A sticky call or book button is usually worth it — ask me per project
- Nothing horizontally scrollable; watch wide tables, long unbroken strings and
  oversized images
- Hover-dependent interactions need a tap equivalent
- Test with a real thumb on a real phone before calling anything done.
  Emulators miss weight, reach and glare.

**Weight**

Mobile data is the constraint. Pick a lane with me at the start and note it in
the README:

- **Lean** — trades, auto, driving schools. Someone's hunting for a phone
  number; keep the homepage light and fast.
- **Standard** — most sites. Room for a proper hero, gallery and tasteful
  motion.
- **Showcase** — video heroes, WebGL, heavy galleries, when the look is the
  pitch. Heavier is fine here; just make it deliberate, and lazy-load
  everything not needed at first paint.

Whichever lane: lazy-load below-fold media, give video a poster and no
autoplaying sound, preload only the hero asset, and honour
`prefers-reduced-motion`. Accessibility and SEO stay strong in every lane —
those don't trade off against visual ambition.

---

## 7. Code and assets

**Structure** — this shape by default:

```
client-site/
├── index.html
├── services.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── css/
├── js/
├── img/
├── fonts/
└── README.md
```

**HTML** — semantic elements, headings in order, real `<label>`s on form
fields.

**CSS** — custom properties for colours and fonts defined once in `:root`.
Webfonts self-hosted and subset with `font-display: swap`; a system stack is
often the faster call. Contrast at least 4.5:1 for body text.

**JavaScript** — animation libraries, scroll effects and WebGL are all fair
game when I ask. Prefer browser APIs (Intersection Observer, CSS transforms and
keyframes, View Transitions) before reaching for a dependency; when a library
is genuinely right — GSAP, Lenis, Swiper, Three.js — self-host or pin it and
tell me what it weighs. No jQuery. Defer scripts so nothing blocks first paint.

**Images** — a reasonable starting set for most sites:

| Purpose | Roughly | Notes |
|---|---|---|
| Hero | 1 | Real photo of the actual business or work |
| Exterior | 1 | Helps people find the door |
| Interior | 1–2 | Trust signal, especially barbershops and clinics |
| Work samples | 6–12 | The core of the site for any visual trade |
| Owner or team | 1 | Faces convert; anonymous businesses don't |
| Logo | 1 | SVG or transparent PNG |
| OG share image | 1 | 1200×630 |
| Favicon source | 1 | Square, 512px+ |

Before/after pairs are the strongest asset a trade can give you — ask for them
by name.

Processing: AVIF with WebP fallback, sized to purpose (hero ~1920px, content
~1600px, thumbs ~800px), `width` and `height` attributes to prevent layout
shift, `loading="lazy"` below the fold, EXIF stripped, descriptive filenames
and alt text. Serve appropriately sized versions to phones rather than
shrinking a desktop-sized file with CSS.

Avoid Facebook and Instagram exports as final assets — already compressed once,
and recompressing makes it visibly worse. Get originals off the client's phone.

**Forms and booking** — Formspree or Cloudflare Pages Functions for forms,
always with a visible success state and a honeypot. Embed whatever booking
platform the client already uses (Fresha, Square Appointments, Booksy,
Calendly) rather than building one. Test the whole path end to end; a broken
booking link is worse than none.

**Hosting** — Cloudflare Pages, deployed from the repo. Demos and staging get
`<meta name="robots" content="noindex">` so they never compete with the
client's live site.

---

## 8. README.md — write it as you build

When I come back in eight months to change one thing, this is how you get
context without re-reading the codebase.

```markdown
# [Business Name] — Site Documentation

## Client
- Business, owner/contact, address, public phone, hours, languages

## Business context
- What they do, target customer, what they want more of
- Service area, differentiators, nearby competitors

## Design
- Colours (hex + where they came from), font stack, tone
- Direction, motion level, weight lane
- Reference sites or templates used
- Libraries used and what they weigh
- Decisions worth remembering and why

## Technical
- Pages, each with its purpose and target search term
- Booking platform, form endpoint, analytics, schema type
- Domain, registrar, renewal date
- Cloudflare Pages project name

## Assets
- Where originals live, logo source, photos still needed

## Maintenance log
- [YYYY-MM-DD] Launched
- [YYYY-MM-DD] What changed and why

## Client agreement
- Monthly rate, start date, included edits, term
```

One dated line in the log on every edit.

---

## 9. Before calling it done

Walk this and report back rather than just saying it's finished.

- Phone numbers dial when tapped on a real phone
- Hours and address present as text on the homepage
- NAP matches the Google Business Profile
- Contact form submits and the email lands
- Booking embed loads and a test booking completes
- No dead links, no `href="#"`
- Images optimized, sized for phones, with descriptive alt text
- Unique title and meta description per page; schema validates
- `sitemap.xml`, `robots.txt`, 404 page, favicon all present
- Checked at 320, 375, 430, 768, 1024 and 1440px, plus landscape phone
- No horizontal scroll at any width
- Tested on an actual phone, in hand
- Motion checked with `prefers-reduced-motion: reduce`
- Keyboard navigable with visible focus states
- Search the source for "lorem", "placeholder", "example" — nothing left
- `noindex` present if demo, removed if going live
- README complete, client has approved the content

---

## 10. How to work with me

Ask before assuming. Flag anything that can't be done statically — payments,
accounts, inventory, dynamic search — rather than building a workaround. If a
request would hurt the client's own conversions, say so once and then do it if
I still want it.

Copy gets written for the client's actual customers in plain language. No
"unleash your potential", no "cutting-edge solutions", nothing that could
describe any business in any industry. That filler is exactly what the sites
we're replacing are full of, and avoiding it is most of why we're worth the
monthly.

When editing an existing site, read its README first.
