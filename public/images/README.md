# Image assets

Expected files:

- `showreel-poster.jpg` — hero reel poster frame
- `<slug>-poster.jpg` — poster frame per project
- `portrait.jpg` — Sam's portrait, 4/5 crop (then wire it into
  `components/About.tsx`, replacing the silhouette placeholder)
- Stills: `<slug>-still-1.jpg` etc, 3/2 crop, then add paths to the
  project's `stills` array in `content/projects.ts`

The Open Graph image is generated at build time by `app/opengraph-image.tsx`,
no static og.png needed.
