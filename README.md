# AssociateVisuals

Portfolio site for AssociateVisuals, a Lagos-based cinematography brand.
Full spec lives in [docs/associatevisuals-brief.md](docs/associatevisuals-brief.md).

## Stack

Next.js (App Router, TypeScript), Tailwind CSS 4, Lenis smooth scroll,
GSAP ScrollTrigger, Vercel Analytics. No CMS: content is typed data in
`content/`.

## Develop

```bash
npm run dev
```

## Content

- `content/site.ts` — brand, contact, socials, showreel
- `content/projects.ts` — portfolio projects (drives /work, case studies, sitemap)
- `content/services.ts`, `content/process.ts` — homepage lists

The 17 portfolio videos are linked from Sam's shared Google Drive folders in
`content/projects.ts`. Players load a Drive preview iframe only after a click;
the homepage and project grid do not preload video files. Every player also
links to the original Drive file. Files must remain publicly viewable for
visitors to play them. Drive controls, availability, and playback restrictions
are managed by Google. No original video files are stored in this repository.

Project cards use graphic covers until pictures arrive. Client credits, dates,
and descriptions are optional and should be added only after confirmation.
The homepage spotlight is ZIZOU project trailer, not a claimed showreel.
`lib/cloudinary.ts` remains available for a future hosting migration.

## Before launch

- Confirm domain in `content/site.ts` (`url`)
- Confirm Instagram/TikTok handles in `content/site.ts`
- Confirm project credits and descriptions with Sam
- Add posters and portrait; confirm the preferred homepage spotlight
