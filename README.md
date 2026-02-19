# Portfolio

A dark-themed personal portfolio (React, Vite, Tailwind CSS) with Hero, About, Projects, Skills, Certificates, and Contact sections.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. Tailwind is configured to purge unused CSS.

## Deploy

- **Vercel**: Connect the repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages**: For a repo named `portfolio`, set in `vite.config.js`: `base: '/portfolio/'`. Then build and deploy the `dist` folder to the `gh-pages` branch (e.g. with `vite-plugin-gh-pages` or manually).

## Customize

- **Profile / copy**: Edit `src/data/profile.js`. Place your hero photo at `public/avatar.png` (or set `profile.avatar` to your image path).
- **Projects**: Edit `src/data/projects.js`.
- **Skills**: Edit `src/data/skills.js`.
- **Certificates**: Edit `src/data/certificates.js`.
- **Contact form**: Set `VITE_FORM_ENDPOINT` in `.env` (see `.env.example`) to a service like Formspree or your own endpoint.

## Theme

Black background (`#0a0a0f`), purple accent (`#a855f7`, `#6d28d9`), white text. Responsive breakpoints: 640, 768, 1024, 1280 px.
