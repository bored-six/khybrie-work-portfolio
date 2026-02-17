# Portfolio Project Instructions

## Git Rules
- **Commit after EVERY completed task.** No batching.
- Use format: `{type}({scope}): {description}`
- Types: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`
- Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS v4 (config in CSS via `@theme`, not `tailwind.config.js`)
- Lucide React icons (stroke-width 2.5, chunky style)
- Fonts: Outfit (headings), Plus Jakarta Sans (body)

## Design System
- **Playful Geometric** — see `/playful-geometric` command for full spec
- Hard shadows (no blur), bouncy easing, confetti colors
- Invoke `/playful-geometric` when building new UI components

## Project Structure
```
src/
├── components/
│   ├── ui/           → Reusable primitives (Button, Card, SectionHeading, ScrollReveal)
│   ├── layout/       → Navbar, Footer
│   ├── decorations/  → FloatingShapes, DotGrid
│   └── sections/     → Hero, About, Skills, Projects, Experience, Contact
├── data/
│   └── portfolio.ts  → All content (name, bio, skills, projects, experience)
├── hooks/            → useReducedMotion, useScrollReveal
├── App.tsx
├── main.tsx
└── index.css         → Design tokens + global styles
```

## Content
- All portfolio content lives in `src/data/portfolio.ts`
- Display name in Hero: "Khybrie" (real name: Shiek N. Abdurahman)
- Profile image: `src/assets/profile.png`
