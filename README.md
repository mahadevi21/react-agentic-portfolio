# Mahadevi S. — Developer Portfolio

A single-page, responsive, accessibility-first portfolio built with **React + Vite** and plain CSS (no UI libraries, two runtime dependencies: `react` and `react-dom`).

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node.js 18 or newer.

## Before you publish: personalise it

All content lives in `src/data/`. You should not need to touch component code.

| File | What to edit |
| --- | --- |
| `src/data/profile.js` | Email, GitHub, LinkedIn, resume path, headline, highlight cards, contact endpoint |
| `src/data/skills.js` | Skill groups and chips |
| `src/data/experience.js` | Experience cards |
| `src/data/projects.js` | Projects, GitHub / live demo links, filter categories |
| `src/data/learning.js` | Learning timeline and each topic's status |

**Checklist**

1. Replace every `TODO` in `src/data/profile.js` and the `your-username` GitHub URLs in `src/data/projects.js`.
2. Add your resume as `public/resume.pdf` (the Download resume button points there).
3. Leave a project's `githubUrl` or `liveUrl` as `""` and that button is hidden automatically.
4. Update the learning statuses in `learning.js` (`practiced`, `in-progress`, `up-next`) so they match reality. The defaults are a starting guess.
5. In `index.html`, set the real `og:url`, and add an `og:image` (1200×630) once deployed.
6. Optional: add project screenshots to `src/assets/` and extend `ProjectCard` to show them (use `loading="lazy"` and meaningful `alt` text).

## Contact form

- Validates name, email and message client-side with accessible labels, per-field error messages, focus moved to the first error, and a live-region success message.
- **Default:** with no endpoint set, submitting opens the visitor's email app with the message pre-filled (no backend needed).
- **Direct sending:** create a form at [Formspree](https://formspree.io) (or a similar service), paste its URL into `contactEndpoint` in `profile.js`, and messages will POST as JSON.

## Project structure

```
src/
├── components/   Navbar, Button, SectionHeading, SkillCard, ProjectCard,
│                 ExperienceCard, Timeline, SocialLinks, ContactForm, Footer, Reveal
├── sections/     Hero, About, Skills, Experience, Projects, Learning,
│                 Accessibility, Contact
├── data/         All editable content
├── hooks/        useActiveSection (active nav indicator)
├── styles/       index.css (design tokens at the top)
├── App.jsx
└── main.jsx
```

## Accessibility and performance notes

- Skip link, landmarks, one `h1`, ordered headings, visible focus rings.
- Mobile menu is a real button with `aria-expanded`, closes with Escape and returns focus.
- Active nav link uses `aria-current`; project filters use `aria-pressed` with a live-region count.
- `prefers-reduced-motion` disables the hero entrance, scroll fade-ins and hover lift.
- No hover-only interactions; touch targets are at least 44px.
- Only two fonts (Bricolage Grotesque, Figtree) via Google Fonts with `display=swap` and system fallbacks. To self-host, swap in `@fontsource` packages.

## Deployment

**Netlify / Vercel:** import the repo. Build command `npm run build`, publish directory `dist`.

**GitHub Pages (project site):**

```bash
VITE_BASE=/your-repo-name/ npm run build
```

Then publish the `dist/` folder (for example with the `gh-pages` package or a GitHub Actions Pages workflow). For a user site (`username.github.io`) no base is needed.

## Testing checklist (from the PRD)

- [ ] Layout at 320px, 768px, 1024px and 1440px with no horizontal scroll
- [ ] Tab through the whole page, including the mobile menu and contact form
- [ ] Screen reader pass with NVDA
- [ ] Submit the form empty, with a bad email, and with valid data
- [ ] Resume button downloads the file
- [ ] `npm run build` completes and the browser console is clean
