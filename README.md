# Floyd Jones — Portfolio

Personal portfolio site for Floyd Jones, front-end engineer. Built with [SvelteKit](https://kit.svelte.dev/) and deployed on Vercel.

## Tech Stack

- **Framework:** SvelteKit (Svelte 4), fully server-rendered
- **Styling:** Design tokens in `src/lib/styles/tokens.css` (light and dark themes), shared rules in `src/lib/styles/global.css`, scoped CSS per component
- **Fonts:** Bricolage Grotesque and Martian Mono, self-hosted with Fontsource
- **Motion:** [motion-components](https://www.motion-components.dev) custom elements (entrances, headline reveals, button and card feedback), registered after hydration in `src/lib/motion.js` and switched off under `prefers-reduced-motion`
- **Deployment:** Vercel (`@sveltejs/adapter-vercel`)

## Structure

- `src/routes/+page.svelte` composes the sections in `src/lib/components/`
- `src/lib/data/projects.js` holds all page content (projects, steps, roles, skills, contact)
- `static/work/` holds the project screenshots
