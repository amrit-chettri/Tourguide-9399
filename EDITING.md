# Editing nepguide

This is a web-only static directory. No database, sign-in, or booking system is used.

## Add your guide details and social links

Edit `packages/web/src/web/lib/site-config.ts`.

- Replace the sample names, experience, daily prices, currency, regions, languages and descriptions with real information.
- Replace each sample biography in `guideBiographies` (keyed by guide ID) with the guide's real background and trekking experience. Every card displays this biography under its About label.
- Set each guide’s `phone` to their real international number (including `+977`). This enables the phone and WhatsApp links automatically. WhatsApp opens a prefilled trekking inquiry; it does not send a message automatically.
- Set `sample: false` after replacing a sample profile.
- Add or remove guide entries as needed. If adding a new region, also add its name to the region filter list in `packages/web/src/web/pages/guides.tsx`.
- Edit `destinations` in the same config file to update homepage region descriptions, photos, and highlights. Each whole card opens its destination page, such as `/destinations/everest`.
- Each destination has an explicit `slug` and optional `guideRegion`. Poon Hill (`poon-hill`) and Mardi Himal (`mardi-himal`) map to Annapurna guides. Manaslu (`manaslu`) currently has no matching guides and links to contact; set `guideRegion: 'Manaslu'` and add real Manaslu profiles/filter when available.
- Edit `packages/web/src/web/lib/destination-details.ts` for destination introductions, stories, route ideas, gallery images/captions, and source links. Destination-page guide buttons open the matching region filter (for example, `/guides?region=Everest`).
- Guide initials remain as unused legacy data but are no longer displayed. Guide cards show full names without initial badges.
- Paste full WhatsApp, Facebook and Instagram URLs into `siteConfig.contacts`.
- Enter a plain email address in `siteConfig.contacts.email`; the website adds `mailto:` automatically.
- Footer contact links open directly, without a pop-up. Until your links are added, social channels open their official homepages and Email opens the visitor's configured email composer with no recipient.
- Add photos under `packages/web/public/images/` and use `/images/your-photo.jpg` as the image path. Current images show mountain scenery, not portraits of the sample guides.

## Before launch

The directory-wide preview disclaimer and footer coming-soon message have been removed. Individual sample labels remain until real profile data is supplied; set each guide's `sample` flag to `false` after replacing their details.

Current prices use USD and a dollar symbol. If using NPR, change the price display in `packages/web/src/web/components/guide-card.tsx` to use `Rs.` instead of `$`.

The shared header, contact section, and footer are in `packages/web/src/web/components/site-layout.tsx`. Homepage destination content is rendered in `pages/home.tsx`; guide cards and region filters are rendered on the separate `pages/guides.tsx` page.

Destination detail pages are rendered by `pages/destination.tsx`. All six destinations have a descriptive story, three-image gallery, route ideas, and a guide/contact CTA. Manaslu also includes a restricted-area planning note. Review photography usage rights and replace photos with your own licensed images before commercial launch.

## Run and check

The home path is `/home`, with destination descriptions instead of guide cards. `/guides` is the separate directory page; its region filters are saved in the URL and work on refresh. `/how-it-works` and `/contact` open the corresponding homepage sections. Opening `/` redirects to `/home`. All paths are relative to the hosting domain; navigation contains no preview-hostname references. To remove the platform hostname from the public address, connect a domain you own in the website publishing settings. A name such as `nepguide/home` on its own is not a complete public web address; use your actual domain followed by `/home`.

`bun run dev` starts the web preview on its assigned port.

`bun run lint` and `bun run build` check the project. The managed template includes unused desktop/mobile scaffolding, but no desktop or mobile app is customized or served.