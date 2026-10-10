# AssociateVisuals

Portfolio site for AssociateVisuals, a Lagos-based cinematography brand.
Full spec lives in [docs/associatevisuals-brief.md](docs/associatevisuals-brief.md).

## Stack

Next.js 16 (App Router, TypeScript), React 19, Tailwind CSS 4, CSS Modules,
and Vercel Analytics. Native scrolling; no scroll interception or reveal
library on the redesigned pages. No CMS: project content is typed data in `content/`.

## Develop

```bash
npm run dev
```

## Content

- `content/site.ts` — brand, contact, socials, metadata
- `content/projects.ts` — film collection, curated order, formats, orientation, and optional confirmed credits
- `components/Services.tsx`, `components/Process.tsx` — capabilities and process copy
- `components/portfolio.module.css`, `app/globals.css` — editorial design system

The 17 films are linked from Sam's shared Google Drive folders. Drive-hosted
project pages show a poster and a direct viewing link; embedding is optional
and only loads after a click. A return-to-preview control and direct link
remain available if the embed fails. Google controls availability and playback
restrictions, and originals must remain publicly viewable.

An optimized landscape ZIZOU preview lives in `public/videos/`. A separate
30fps background copy trims the black head/tail frames and reduces download size,
without changing the project-page preview. It plays muted and loops in the hero,
with a pause control. Automatic playback is disabled
for reduced-motion, data-saving, and reported 2G connections. It pauses outside
the viewport and when the document is hidden. Its project page uses native
video controls and `preload="none"`. Other videos are not downloaded on page load.

Project cards use responsive, lazy-loaded frames from the supplied videos.
Portrait and landscape films have separate presentation. Sam's supplied
portrait appears in About, immediately after the hero. Client credits, dates,
and outcomes should be added only after confirmation; no invented testimonials
or results are displayed. The hero is a ZIZOU project trailer, not a claimed showreel.
`lib/cloudinary.ts` remains available for a future hosting migration.

## Before launch

- Confirm domain in `content/site.ts` (`url`)
- Confirm Instagram/TikTok handles in `content/site.ts`
- Confirm project credits and descriptions with Sam
- Replace interim video frames with Sam's preferred high-resolution posters
- Consider dedicated video hosting for reliable, branded in-page playback
