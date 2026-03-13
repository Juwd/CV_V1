# Marino Portfolio — Design Guidelines

## Design System
- **Theme**: Deep-ocean dark design with custom CSS tokens defined in `/src/styles/theme.css`
- **Color tokens**: `ocean-deep`, `ocean-mid`, `ocean-surface`, `ocean-light`, `ocean-foam`, `ocean-sand`, `ocean-teal`
- **Fonts**: Playfair Display (headings/display), Inter (body), JetBrains Mono (code/typewriter accents) — imported in `/src/styles/fonts.css`
- **Border radius**: Prefer `rounded-2xl` for cards, `rounded-xl` for buttons, `rounded-full` for avatars/badges
- **Glassmorphism**: Use `backdrop-blur-xl` with `bg-ocean-mid/80` or `bg-white/5` for frosted-glass panels

## Visual Style
- All backgrounds use low-opacity ocean-themed overlays (never pure black or white)
- Text hierarchy: `text-ocean-foam` (primary), `text-ocean-foam/50-60` (secondary), `text-ocean-foam/30-40` (muted)
- Accent colors: `ocean-light` (#3b82c4) for primary actions, `ocean-teal` (#22b8a0) for highlights/tags
- Borders are always subtle: `border-ocean-light/8` to `border-ocean-light/20`
- Hover states increase border opacity and add slight background brightness

## Animation
- Uses `motion/react` (NOT framer-motion) — import as `import { motion } from "motion/react"`
- Parallax scrolling on hero via `useScroll` + `useTransform`
- Floating bubbles, spinning decorative rings, typewriter text effect on landing
- Page entries use `whileInView` with staggered delays (0.1s per item)

## Structure
- **Router**: React Router v7 data mode (`react-router`, NOT `react-router-dom`)
- **Layout**: Shared `Layout.tsx` with `WaveBackground`, `Navbar`, and `<Outlet />`
- **Components**: `Navbar.tsx`, `WaveBackground.tsx`, `PageHeader.tsx`, `ProjectCard.tsx`
- **Pages**: 18 routes across Home, Certifications, Field Works, Projects (9 sub-pages), Volunteer (3 sub-pages), Workshops, Contact
- **Navbar brand**: "Marino" with Anchor icon

## Important Notes
- The `<main>` in Layout.tsx MUST have `className="relative pt-16"` (relative is required for scroll calculations)
- When returning to Figma Make, convert local image paths back to `figma:asset/...` imports and use `ImageWithFallback` instead of `<img>`
- Do not modify `/src/styles/theme.css` tokens unless intentionally changing the color palette
- All content is placeholder — replace with real data but do NOT hallucinate skills, certifications, or project details