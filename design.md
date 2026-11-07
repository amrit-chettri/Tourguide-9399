# nepguide — Alpine Dark design

## Latest approved direction (overrides earlier palette notes)
Use deep charcoal green #17211C for backgrounds, forest #24352B for navbar/cards, sage #789078 for secondary accents, warm cream #D8D2C4 for text, amber #E9A857 for buttons/highlights. No warm-light destination panels. Poppins throughout, slightly larger and semibold body text; bold display titles. Spacious layout, pill buttons, a polished floating rounded navbar, minimal decorative divider rules, subtle dual-shadow neumorphism on dark cards with gentle lift hover. Natural real trekking photography only. Low-amplitude image parallax with reduced-motion support.

Seventeen destinations including independent Jiri town/foothill visit and Everest trek; never a combined Jiri–Everest product. Destination cards only discover destinations, no Add to trip controls. A distinct `/plan` multi-destination planner presents labeled choices, estimates and email/WhatsApp handoff. Guides remain exclusively on `/guides`, displaying full names without initials, years of experience, and USD daily guide fees. Ample card padding and inter-section spacing. All previously requested pickup/enquiry/payment-logo features remain in scope without APIs or backend.

Web-only static Nepali trekking guide directory with an editorial Himalayan identity. No database, sign-in, booking system, or new APIs. Mobile and desktop scaffolding remain unused.

## Palette and typography
- Latest direction: retain blue brand/header/guide directory, but use warm ivory #faf6ef, sand #efe4d4, terracotta #a76642 and deep brown #40362e in destination discovery, trip planner and enquiry surfaces. Warm cards have generous scenic images, duration badges and separate selection controls.
- Homepage hero is a real photograph of a backpacking man in the Himalayas. A seventeen-destination catalogue includes city, wildlife, lake and trekking journeys. Do not claim photography ratings or fixed travel times.
- New `/plan` page allows one or multiple destination selections, Kathmandu pickup, preferred date, travellers and notes. Show provisional Kathmandu-to-Kathmandu day ranges with acclimatization; multi-stop totals are conservative sums of independent journeys, not an optimized route. Preserve selection via URL, not a backend.
- Every destination has a Kathmandu pickup selector and prefilled WhatsApp CTA to +9779866449988. Trip plans and price/destination enquiry forms open email composers addressed to amrit.git.np@gmail.com. Nothing sends automatically. No new APIs, database, booking or payment processing.
- Payment acceptance logos (Visa, Mastercard, American Express, Stripe) are decorative brand icons, no checkout. Place No hidden charges beside transparent quote messaging; confirm inclusions/exclusions through contact.
- White-blue background #f1f7fc; card #fbfdff; foreground #233b54.
- Primary blue #244f78; navy contact/footer #183b5c; sky-blue accent #d5eaff; border #d7e3ec.
- Legacy CSS tokens `--forest` and `--lime` now represent primary blue and sky-blue, not green.
- Georgia display headings, Poppins navigation and labels, Source Sans 3 descriptions. Guide biographies are 16px with generous line height.
- Keep the nepguide header/footer logo and blue branded favicon. The platform badge is removed; analytics and dev feedback remain.

## Pages
- `/home`: panoramic Himalayan sunrise hero, six destinations with descriptions (Everest, Annapurna, Langtang, Poon Hill, Mardi Himal, Manaslu), how-it-works, contact. No guide cards on this page.
- `/guides`: dedicated directory with all 10 sample profiles and URL-based region filters. Hero CTA opens this page.
- `/destinations/:slug`: dedicated regional stories with an immersive photo hero, descriptive editorial content, three-image gallery, route ideas, and a CTA to the matching guide filter.
- Destination slugs are explicit (`poon-hill`, `mardi-himal`, `manaslu`). Poon Hill/Mardi use the Annapurna guide filter; Manaslu uses contact rather than claiming region-specific guides that are not in the directory.
- `/how-it-works` and `/contact`: homepage section entry routes. `/` redirects to `/home`.
- Shared header, contact section, and footer on both pages. The preview hostname is configured by the platform; custom domains use publishing settings.

## Visual layout
Maximum 1200px content with generous spacing. Premium destination cards use larger photography, restrained blue-white surfaces, fine borders, subtle elevation, editorial numbering and serif titles. The whole card links to a destination story page. On tablets destination cards use side-by-side photography and text; phones stack the cards.

Premium guide cards use softly elevated blue-white surfaces, scenic covers, refined serif names, distinct biographies, and clean experience/fee rows instead of heavy panels. No initials or initial avatars are displayed. Scenic images are not presented as guide portraits. Guide cards use three columns on desktop, two on tablet, and one on phones.

Three hero-adjacent statements stay visible on mobile, with 16px semibold text (15px on small screens) and blue-toned icons. Phone navigation collapses to a menu. Keep keyboard focus and reduced-motion support.

## Content and contact behavior
Static content lives in `packages/web/src/web/lib/site-config.ts`, including destinations, guides, biographies, and contact links. Individual Sample profile labels stay until real data is supplied; the directory-wide disclaimer and footer coming-soon message are removed.

Empty guide phone/WhatsApp actions show an accessible configuration notice rather than contacting invented recipients. Footer socials open configured URLs directly, otherwise official platform homepages; empty email opens `mailto:` with no recipient. Footer links have no configuration pop-up.

## Main flow
Explore regions on the homepage → open all guides or a region-filtered directory → read biographies, languages, experience, and daily fees → contact a guide directly when a real number has been configured.