# Pawan — Portfolio

A single-page portfolio site built with React 19, Vite, and GSAP. Single white
theme with one green accent, Inter throughout, responsive down to 320px, and all
copy driven from one data file.

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Editing content

Nearly everything on the page comes from [`src/data/siteContent.js`](src/data/siteContent.js) —
edit that file rather than the markup:

| Export          | Controls                                             |
| --------------- | ---------------------------------------------------- |
| `site`          | Name, role, email, availability, response time        |
| `hero`          | Availability badge, kicker, headline, paragraph, both CTAs |
| `techIntro`     | Eyebrow, headline, and blurb above the tech stack      |
| `techCategories`| Tabs and their tech items in the Tech section          |
| `about`         | Eyebrow, headline, quote, image, and the three stats  |
| `navItems`      | Header navigation and scrollspy targets               |
| `projectsIntro` | Eyebrow, headline, and blurb above the work grid       |
| `projects`      | Work cards — image, tags, year, and optional `href`    |
| `servicesIntro` | Centred eyebrow + headline above the services grid    |
| `services`      | Service cards; `icon` maps to a key in `ServiceIcon.jsx` |
| `caseStudy`     | Featured client quote — set to `null` to hide the section |
| `contact`       | Footer headline, circular CTA label, form label       |
| `footerGroups`  | The link columns in the footer                        |

### Before going live

- Replace `site.email` (currently `pawan@example.com`).
- Replace `caseStudy` with a real client and their own words, or set it to `null`.
- Fill in each project's `href`. While it is empty the card renders as an
  `<article>` with no "View project" link and no hover lift, rather than as a
  link to nowhere.
- `about.stats` values count up on scroll; edit the numbers there, not in markup.
- `site.locations` and `site.phone` are empty by default and their rows stay
  hidden until you add real ones.
- The About and case-study images are hotlinked from Unsplash; move them into
  `src/assets/` to drop the third-party dependency.

## Scroll animations

[`src/hooks/useScrollAnimations.js`](src/hooks/useScrollAnimations.js) owns every scroll-driven effect
(GSAP + ScrollTrigger). Markup opts in through data attributes:

| Attribute            | Effect                                              |
| -------------------- | --------------------------------------------------- |
| `data-reveal`        | Element fades and rises once as it enters view       |
| `data-reveal-group`  | Same, staggered across the element's direct children |
| `data-reveal-each`   | Each child gets its own trigger — use for multi-row grids |
| `data-reveal-words`  | Words rise out of a clipping mask, one after another |
| `data-count`         | Number counts up from zero to the value in the attribute |

Word-level reveals need [`<SplitWords />`](src/components/SplitWords.jsx) inside the heading. It emits
`.word` / `.word-inner` spans while keeping the words as real text nodes, so the
heading still reads normally to screen readers.

Also wired up: a fixed scroll-progress bar, a back-to-top button, shallow
parallax on the hero wash, and a scale-in on the About and case-study images.

The tech grid's per-tile entrance is pure CSS, not GSAP — see
[`TechStack.jsx`](src/components/TechStack.jsx). Keying the panel on the active category remounts
it, which replays the `techIn` keyframes with a `--i`-based delay on every tab
switch. Doing this in GSAP would mean re-registering triggers for nodes that
unmount whenever the tab changes.

`TechStack` follows the ARIA tabs pattern: `role="tablist"` / `role="tab"` /
`role="tabpanel"`, a roving `tabindex` so only the selected tab is in the tab
order, and arrow / Home / End key navigation between tabs.

Two rules this file follows:

- **The hidden state is never in CSS.** GSAP applies it. If the script fails or
  the visitor prefers reduced motion, the page renders fully visible rather than
  blank — the usual failure mode of CSS-first reveal animations.
- **Nothing starts until the loader is gone**, or ScrollTrigger would measure the
  page while `body` is still scroll-locked and every trigger would fire at once.

ScrollTrigger adds roughly 46 kB (about 18 kB gzipped) to the bundle.

## Icons

Service icons are inline SVG in [`src/components/ServiceIcon.jsx`](src/components/ServiceIcon.jsx) — no
icon library and no network request. Each is drawn on a 48×48 grid with
`stroke="currentColor"`; paths marked `className="icon-accent"` pick up the brand
green so every icon reads two-tone. Add a new entry to the `icons` map and
reference its key from `services[].icon`.

## Contact form

[`src/components/ContactForm.jsx`](src/components/ContactForm.jsx) validates on submit (required, then
email shape) and reports errors through `aria-invalid` / `aria-describedby` with a
`role="alert"` message. **There is no backend** — a valid submission opens the
visitor's mail client addressed to `site.email`. Replace `handleSubmit` with a
`fetch()` to a real endpoint (Formspree, Resend, your own API) when you have one.

## Theming

There is one theme — white surfaces, a single green accent, no gradients and no
light/dark switch. Every color is a CSS custom property in
[`src/index.css`](src/index.css) and components reference the tokens only, so re-skinning
the site means editing that one block.

Two greens are defined on purpose: `--accent` (`#10b981`) for fills, and
`--accent-ink` (`#047857`) for green *text* on white. The lighter green only
reaches about 2.5:1 against white, which is unreadable at body sizes, so
anything text-shaped uses the darker one.

Typography is Inter at weights 400–900, loaded from Google Fonts. Headings run at
800 with negative tracking.

Two deliberate exceptions to "flat colour only":

- `.hero-glow` — a full-width wash of soft green radial gradients fading into the
  white page behind the hero. It sits outside `.container` so it spans the whole
  page width, uses `width: 100%` rather than `100vw` (which would overflow by the
  scrollbar's width), and sits at `z-index: -1` so it can never paint over
  content. Its height follows the `--hero-height` token shared with `.hero-card`.
- The footer's faint grid lines, which are `linear-gradient()` hard stops in a
  single border colour — a pattern, not a colour blend.

## Loader and scrollbar

[`src/hooks/usePageLoader.js`](src/hooks/usePageLoader.js) drives the intro overlay from the real
`window.load` event — fonts, images and scripts — not a fixed timer, with a 700ms
minimum so a warm cache does not cause a one-frame flash. It moves through
`loading → exiting → done`; the exit slides the overlay up and then unmounts it,
and `body.is-loading` locks scrolling meanwhile.

The scrollbar is styled in `src/index.css` via `scrollbar-color` (Firefox) and
`::-webkit-scrollbar` (Chrome, Edge, Safari): green thumb on a light track.

## Accessibility notes

- Skip link to the main content, labelled landmarks, and headings wired to their
  sections via `aria-labelledby`.
- Star ratings are exposed as text (`Rated 5 out of 5 stars`) instead of raw glyphs.
- The hero animation is gated behind `prefers-reduced-motion`, and global
  transitions are reduced to near-zero for the same users.
