# Raymond Vandenberg — Portfolio

A modern, responsive portfolio, built with **Next.js 14, TypeScript, React, and Tailwind CSS**. Live at **[venterprise.io](https://venterprise.io)**.

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** for type safety
- **Tailwind CSS** for styling, with light/dark theming via CSS variables
- **next/font** (Righteous + Poppins) and **next/og** (generated Open Graph image)
- **Cypress** for end-to-end tests
- **ESLint** (`eslint-config-next`) for code quality

## Features

- Responsive, accessible layout with **light/dark mode** (no flash on load)
- Animated **canvas hero background** (flow field) and a scroll-linked left "trace"
- **Scroll-reveal** animations and a scroll-velocity "float" on the project cards
- Project **case-study pages** (Amazon, Pizzamico) with device-framed screenshots
- **Gallery lightbox** — click any project image to expand, with keyboard/arrow navigation
- **Contact modal** wired to [Web3Forms](https://web3forms.com)
- Centralized site config in [`lib/site.ts`](lib/site.ts)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run cypress:run` | Run the e2e suite headless (needs the dev server on `:3000`) |
| `npm run cypress:open` | Open the Cypress runner |


## Testing

A small Cypress smoke suite covers the home hero, navigation, project pages, the
contact modal, and the image lightbox:

```bash
npm run dev          # in one terminal
npm run cypress:run  # in another
```

## License

MIT
