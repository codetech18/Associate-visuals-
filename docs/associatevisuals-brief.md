# AssociateVisuals — Portfolio Site Build Brief

Handoff document for building the AssociateVisuals portfolio site. Read fully before scaffolding.

---

## Project overview

**Subject**: AssociateVisuals, a Lagos-based cinematography brand run by Sam. Commercial DP focused on real estate, brand content, and creator work.

**Audience**: Real estate agents and developers, growing Nigerian brands, content creators. Primarily viewing on mobile.

**Job of the page**: Convert cold visitors into people who message Sam on WhatsApp to discuss a project.

**Maintenance**: Solo dev (Akorede), no CMS. Content lives as typed data in the repo.

**Physical scene guiding the design**: A brand manager or real estate agent, 8pm on a Friday, scrolling on their phone in a dimly lit room with half-attention, evaluating whether Sam is the DP for their next campaign. This forces dark, cinematic, quiet: the site should feel premium in low light, not shouty.

---

## The signature element

The one detail this site will be remembered by: a **live-running timecode** in the top-right of the hero, in monospace, ticking up as the reel plays (`00:00:14`), with a small pulsing dot beside it that reads as a "REC" indicator without saying the word. Muted color, small (11px), never dominant. Resets on reel loop. This is the thing that says "made by a cinematographer" without narrating it.

Everything else stays disciplined so this detail lands.

---

## Design system

### Colors

Use OKLCH in code; hex shown for reference. Every neutral is tinted toward warm, never pure black or white.

| Role | Hex | OKLCH |
|---|---|---|
| Background | `#14120F` | `oklch(0.16 0.006 60)` |
| Surface (elevated) | `#1C1A16` | `oklch(0.20 0.007 65)` |
| Surface (subtle) | `#242019` | `oklch(0.24 0.008 65)` |
| Text primary | `#F0EBE1` | `oklch(0.94 0.010 80)` |
| Text muted | `#7A756B` | `oklch(0.53 0.008 75)` |
| Text subtle | `#4A453E` | `oklch(0.35 0.007 70)` |
| Accent (bone) | `#A3986A` | `oklch(0.66 0.045 90)` |
| Border hairline | `rgba(240, 235, 225, 0.06)` | — |
| Border emphasis | `rgba(240, 235, 225, 0.12)` | — |

**Color strategy**: Restrained. Tinted neutrals carry 95% of the surface. The bone accent appears only on interactive elements (links, CTAs) and the process step numbers. Fewer than five appearances per page.

### Typography

**Faces**:

- **Inter Tight** (variable, Google Fonts) — display and body. All headlines and paragraph text.
- **JetBrains Mono** (variable, Google Fonts) — micro-text only: section labels, timecodes, project meta (year, role), stats readouts, footer.

The grotesk + mono pairing is the typographic point of view. Do not add a third face.

**Scale** (desktop / mobile):

| Role | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Hero headline | 34px / 26px | 500 | 1.05 | -0.02em |
| Section headline | 22px / 20px | 500 | 1.15 | -0.02em |
| Body | 13px / 13px | 400 | 1.6 | 0 |
| Micro label (mono) | 11px / 11px | 400 | 1.4 | 0.05em |
| Timecode (mono) | 11px | 400 | 1 | 0 |
| Big text moment | 28px / 22px | 500 | 1.15 | -0.02em |

Hierarchy uses scale contrast ≥ 1.5. Two weights only: 400 and 500. Sentence case throughout, no ALL CAPS, no Title Case. Body line length capped at 65-75ch.

### Spacing

Tailwind spacing scale. Vary rhythm intentionally: don't use the same section padding everywhere. Hero gets more breathing room (80px vertical), interior sections tighter (48px), meta strips tightest (24px). Mobile roughly 60% of desktop verticals.

Cards used sparingly and only when a boundary is needed (thumbnails). No nested cards. Most sections separated by hairline rules, not boxes.

### Motion

**Curves**: cubic-bezier(0.16, 1, 0.3, 1) (ease-out-expo). Never bounce, never elastic.

**Smooth scroll**: Lenis with `lerp: 0.1, duration: 1.2, easing: t => 1 - Math.pow(1 - t, 4)`. Reduce intensity on mobile (`lerp: 0.15`).

**Reveal on scroll**: elements start `opacity: 0, translateY: 12px, scale: 0.98` and animate to `opacity: 1, translateY: 0, scale: 1` over 900ms with ease-out-expo. Use GSAP ScrollTrigger, `once: true`.

**Nav on scroll**: initially transparent. After 40px scroll, adds a solid `#14120F` background (not glass blur, keep it disciplined) and a hairline bottom border. 200ms transition.

**Focus rack on work grid hover** (desktop only): hovering a project thumbnail transitions all other thumbnails to `filter: grayscale(1); opacity: 0.5;` over 400ms with ease-out-expo. The hovered thumbnail stays sharp. On leave, all return. This mimics camera focus racking.

**Video preview loops**: muted MP4 loops autoplay in project thumbnails on hover (desktop) or when in viewport (mobile). Loops are 5-8s, under 3MB each.

Respect `prefers-reduced-motion`: disable Lenis, disable reveal animations, disable focus rack.

---

## Site architecture

Three pages:

- `/` — homepage, long-scroll marketing pitch
- `/work` — full portfolio grid, filterable by category
- `/work/[slug]` — individual project case studies

Navigation on all pages: transparent-to-solid on scroll, wordmark left, links right (work, about, services, contact). Mobile: wordmark left, hamburger right that opens a full-screen overlay.

---

## Homepage, section by section

### Hero

Structure top to bottom:

1. Nav (thin, 56px)
2. Hero reel container: full width, aspect ratio 16/9 desktop, 4/5 mobile, muted autoplay loop of a 20-30 second showcase montage. Poster frame shows before video loads.
3. Signature timecode: top-right corner of the reel, absolute positioned, JetBrains Mono 11px muted color, format `00:00:14`, updates every second as reel plays, resets on loop. Small pulsing dot (6px) beside it, muted color, opacity animates 0.4 to 1 on a 1.2s loop.
4. Text block below reel, two-column desktop (headline left, CTA link right; stacks on mobile):
   - Micro label (mono, muted): "Cinematography, Lagos"
   - Headline: "Visuals for modern brands."
   - Subheadline (body, muted): "Cinematography and post-production for real estate, brands, and creators who want to stand out."
   - CTA link (accent, underlined): "View portfolio →"

No stats, no logos above the fold. Reel and headline carry it.

### Selected work

Asymmetric grid, not identical tiles. Uses visual rhythm to differentiate.

Layout (desktop):

- Section label (mono): "Selected work"
- Sub-headline: "Recent projects." (with right-aligned "view all →" accent link)
- Row 1: one large tile (aspect 16/9, full width)
- Row 2: two medium tiles side by side (aspect 4/5 each)
- Row 3: one large tile (aspect 16/9, full width)

Total four featured projects. Mobile: all tiles stack to single column at aspect 16/10.

Each tile shows the preview MP4 loop, and a bottom-left overlay with project title (weight 500) plus category and year in mono muted color. Focus rack behavior applies on hover.

### About

Section label: "About"

Split layout, 1.5fr text / 1fr portrait on desktop, single column mobile with portrait first.

Text side:

- Big text moment: "I'm Sam. I make cinematic video for brands, real estate, and creators."
- Body paragraph: "Based in Lagos, working with growing brands and property companies who want video that actually converts. I care about detail, clarity, and the kind of image that turns a scroll into a call."

Right: portrait image, aspect ratio 4/5, no border, subtle background if image is missing.

### Signal (replaces the stats section)

Section label: "Signal"

Do not use big-number/small-label metric cards (SaaS cliché). Instead, one typographic paragraph in the big-text-moment size:

> "Twenty-plus projects delivered. Two years shooting professionally in Lagos. Trusted by growing brands, real estate teams, and creators who need visuals that convert attention into results."

This carries the same information as a stats grid without falling into the pattern.

### Services

Section label: "Services"

Two-column list, hairline top-borders between rows. Numbered on the left in mono muted color, service name right-aligned in body color. Numbers here are enumeration, not sequence.

```
01  Cinematography
02  Drone piloting
03  Video editing
04  Color grading
05  Real estate video
06  Brand + commercial
07  Short-form content
08  Long-form (YouTube)
```

Mobile: single column, same hairline treatment.

### Process

Section label: "Process"

This is the one section where numbering is genuinely sequential. Three columns desktop (stacks vertically mobile), separated by vertical hairlines (horizontal on mobile).

Each step:

- Number in accent color (mono, 11px): 01
- Step name (weight 500, 15px): Strategy
- Description (body, muted, 12px): one sentence

Steps: Strategy (Understanding your brand, audience, and objectives), Production (Executing shoots with attention to lighting and composition), Post (Refining through editing, sound design, and color).

### Trusted by

Section label: "Trusted by"

Horizontal logo strip, 5-8 client logos. All logos rendered at `filter: brightness(0.7)` to unify appearance. On hover, the hovered logo returns to full brightness. Mobile: wraps to two rows.

**Fallback if Sam has no logos ready**: replace with a client names text list ("Trusted by Amuludun Kitchen, Foodiefy, Villa 34 Estates, and other Lagos brands"). Do not use fake or generic logos.

### Contact

Section label: "Contact"

Two-column desktop, stacked mobile:

Left:

- Big-text-moment: "Ready to bring your vision to life?"
- Contact details caption (mono, muted): "associatekoith@gmail.com · +234 906 569 3535"

Right:

- Filled pill CTA in accent color: "Start a project"
- CTA links to WhatsApp: `https://wa.me/2349065693535?text=Hi%20Sam,%20I'd%20like%20to%20discuss%20a%20project.`

No contact form. WhatsApp deep-link is the primary conversion path.

### Footer

Thin (16px vertical padding), border-top hairline. Two columns:

- Left (mono, muted): "Associate Visuals — © 2026"
- Right (mono, muted): instagram, tiktok, whatsapp links

---

## /work page

Header:

- Page title: "Selected work" (hero headline size)
- Filter row: `All | Real estate | Brand | Creator | Short-form | Long-form`. Active filter has bottom-border in accent color. Filter is client-side, no page navigation.

Grid: 3-column desktop, 2-column tablet, 1-column mobile. All tiles aspect ratio 16/10 (uniform on this page, since the asymmetry is a homepage-only signature). Same hover behavior as homepage tiles. Sort newest first.

---

## /work/[slug] page

Layout:

1. Nav (unchanged, but wordmark is a link back to `/work`)
2. Full-width video player, aspect ratio 16/9, with poster frame and controls. This is the highest-quality version of the project video.
3. Project meta strip: four columns separated by vertical hairlines: Client, Year, Role, Category. All values in mono, labels in muted color, values in primary.
4. Brief text block, max-width 640px centered: 1-2 paragraphs describing the project. Body copy, generous line-height.
5. Optional stills grid: 2-column, aspect ratio 3/2, up to 6 stills. Skip section if project has no stills.
6. Footer navigation: previous project link (left), next project link (right), both in accent color with arrows.

---

## Mobile behavior

Breakpoint: 768px.

Key adaptations already noted per-section. General rules:

- Nav: right-aligned hamburger opens full-screen overlay, black background, links stacked vertically at 24px weight 500
- Reduce type sizes as spec'd above
- Reduce vertical padding by ~40%
- All multi-column grids collapse to single column
- Focus rack disabled (hover has no meaning on touch)
- Preview MP4 loops trigger on IntersectionObserver instead of hover
- Reduce Lenis intensity (`lerp: 0.15`)

---

## Copy voice

Declarative. Cinematographer speaks with confidence, never with humility filler. Short sentences carry more weight than long ones. No filler words like "seamless", "leverage", "unlock", "empower". No "we specialize in" or "we deliver". Say what he does.

No em dashes anywhere in copy. Use commas, colons, or periods. This is an intentional discipline; em dashes read as generic AI copy.

Sentence case throughout. Active voice.

---

## Data model

`/content/projects.ts`:

```typescript
export type ProjectCategory =
  | 'real-estate'
  | 'brand'
  | 'creator'
  | 'short-form'
  | 'long-form';

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  role: string;
  category: ProjectCategory;
  featured: boolean;
  featuredSize?: 'large' | 'medium';
  brief: string;
  video: {
    src: string;
    poster: string;
    preview: string;
  };
  stills?: string[];
};

export const projects: Project[] = [
  // populated as Sam delivers content
];
```

`/content/services.ts`, `/content/site.ts`, `/content/process.ts` follow the same pattern: typed constants exported for use in components.

---

## Tech stack

- **Next.js 15+** (App Router), TypeScript, React Server Components where possible
- **Tailwind CSS 4** with custom theme file mapping tokens above
- **Lenis** for smooth scroll
- **GSAP + ScrollTrigger** for reveal animations
- **Cloudinary** for video and image hosting (Akorede already has an account). All videos self-hosted MP4, H.264, max 1080p, target under 5MB for previews and under 15MB for full case study videos.
- **Vercel Analytics** for privacy-friendly analytics (no consent banner needed)
- **Vercel** for hosting
- **Next/Font** for Inter Tight and JetBrains Mono (avoid FOUT)

No Resend, no contact form, no CMS.

---

## File structure

```
/app
  layout.tsx
  page.tsx
  globals.css
  /work
    page.tsx
    /[slug]
      page.tsx
/components
  Nav.tsx
  Hero.tsx
  HeroTimecode.tsx
  SelectedWork.tsx
  ProjectTile.tsx
  About.tsx
  Signal.tsx
  Services.tsx
  Process.tsx
  TrustedBy.tsx
  Contact.tsx
  Footer.tsx
  VideoPlayer.tsx
  VideoPreview.tsx
  RevealOnScroll.tsx
  FilterTabs.tsx
/content
  projects.ts
  services.ts
  process.ts
  site.ts
/lib
  lenis.ts
  gsap.ts
  cloudinary.ts
/public
  /images
  /videos
```

---

## Placeholder strategy while Sam gathers assets

Videos: use short royalty-free cinematic clips from Pexels or Coverr. Real estate wide shots, brand product close-ups, drone footage.

Portrait: use a plain silhouette placeholder in surface color. Do not fake a photo of Sam.

Project titles: realistic Lagos-context names ("Villa 34", "The Landing Estate", "Marca campaign", "Ade — creator series"). Never lorem ipsum for titles.

Client logos: use text placeholders in muted color rather than fake brand marks.

Body copy: use the copy given in this brief. Do not generate new marketing copy that Sam has not approved.

---

## Accessibility

- All videos: `aria-label` describing content
- Portrait and stills: descriptive `alt` text
- Interactive elements: visible focus states using 2px accent color outline with 4px offset
- Semantic HTML: nav, main, section, article, footer
- Keyboard tab order matches visual reading order
- Respect `prefers-reduced-motion`: disable Lenis, reveal animations, and focus rack
- Color contrast: text primary on background = 15:1 (WCAG AAA), text muted on background = 4.8:1 (WCAG AA)

---

## SEO and metadata

- Site title pattern: `[Page] — AssociateVisuals`
- Homepage title: `AssociateVisuals — Cinematography, Lagos`
- Meta description on homepage: the subheadline
- Open Graph image: 1200x630, dark background, wordmark centered, tagline below. Generate as static image in `/public/og.png`.
- Structured data: Person schema for Sam, Organization schema for AssociateVisuals
- Sitemap generated at build time from projects data

---

## Build order for Claude Code

1. Scaffold Next.js app with TypeScript, Tailwind CSS 4
2. Configure Tailwind theme with color tokens above; set up Next/Font for Inter Tight and JetBrains Mono
3. Build `layout.tsx` with root shell, font loading, Lenis provider
4. Create Project type and placeholder data (8 projects covering all categories)
5. Build Nav component with scroll behavior
6. Build homepage top to bottom, section by section, matching this spec
7. Build /work page and filter behavior
8. Build /work/[slug] template
9. Wire up GSAP reveal animations and focus rack behavior
10. Add signature timecode component
11. Configure Vercel Analytics
12. Test mobile behavior and prefers-reduced-motion
13. Deploy to Vercel preview
14. Replace placeholders with real assets as Sam delivers them

Do not add features, sections, or copy not specified in this brief without asking Akorede first. When in doubt, cut, do not add.

---

## Assets still needed from Sam

Videos: showreel, 8-10 individual project files with titles/clients/years/roles/categories, 5-8 second muted preview loops per project (can be generated by trimming main files).

Images: portrait, 2-3 stills per project, client logos (SVG or PNG).

Content: 2-3 written testimonials (if he has them, we add a testimonials section later; if not, we ship without).

Confirmations: domain choice (associatevisuals.com or alternative), services list (any to drop), contact number and email still current, services list finalized.
