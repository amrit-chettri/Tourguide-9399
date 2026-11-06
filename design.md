# nepguide — Design

Web-only static Nepali trekking guide directory with an editorial Himalayan identity. No database, sign-in, booking system, or new APIs. Mobile and desktop scaffolding remain unused.

## Palette and typography
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