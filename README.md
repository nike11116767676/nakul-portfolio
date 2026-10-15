# Nakul Padiyar — Java Developer Portfolio

A responsive, single-page developer portfolio built with React and Vite. It introduces Nakul's Java/backend interests, education, and three featured project concepts in a dark navy interface.

> Project implementation details, repository links, personal profiles, and contact information were not present in the starting workspace. The portfolio intentionally leaves those claims/links unset until they can be verified.

## Technology

- React with JavaScript and JSX
- Vite
- Tailwind CSS v4 with custom responsive CSS
- Framer Motion
- Lucide React

## Features

- Responsive navigation with keyboard-accessible mobile menu
- Hero, About, Skills, Projects, Education, Certifications, Contact, and Footer sections
- Three data-driven project cards in the requested order, with CSS-built illustrative visuals
- No fabricated project repository/demo buttons or social links
- Optional resume button that is disabled until a real PDF is added
- Reduced-motion support, semantic landmarks, skip link, and visible keyboard focus
- SEO title, description, Open Graph metadata, theme color, and favicon

## Project structure

```text
public/
  favicon.svg
src/
  components/   Reusable page sections and project visuals
  data/         Editable profile, skills, projects, education, certifications
  App.jsx
  index.css
  main.jsx
index.html
vite.config.js
```

## Run locally

Install Node.js (LTS), then run:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build and preview

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Personal configuration

- Edit `src/data/profile.js` to set your phone, email, GitHub profile, LinkedIn profile, and resume availability.
- `src/data/skills.js` controls the technologies shown. Keep only skills you can discuss and demonstrate.
- `src/data/projects.js` controls descriptions, verified features, technology tags, repository URLs, and demo URLs. Add details only after confirming them against each project.
- `src/data/education.js` and `src/data/certifications.js` hold editable education and credential details.
- Illustrative project-card previews are drawn with CSS in `src/components/ProjectVisual.jsx`; they are not real screenshots.

### Resume

Add your real PDF at `public/Nakul-Padiyar-Resume.pdf`, then set `resumeAvailable: true` in `src/data/profile.js`. The resume download button remains hidden until enabled.

### Project links and claims

Use empty strings for unavailable URLs and empty feature arrays until you verify project implementation. Empty URLs are not rendered as links. The CodeVanta technology tags are populated from the supplied project brief; verify them against its current code before publishing.

## Deploy to Vercel

1. Push the project to a GitHub repository you create.
2. Import that repository in Vercel.
3. Use the default Vite settings: build command `npm run build`, output directory `dist`.
4. Deploy. The site is a static frontend and does not require a backend service.

If you need to initialize Git locally:

```bash
git init
git add .
git commit -m "Create developer portfolio"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

Replace the remote placeholder with a repository URL you own. Do not commit credentials, private environment files, or API keys.
