# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

Single-page Next.js 16 app using the App Router (`src/app/`). All sections are React Server Components except `Navbar` and `Contact`, which are Client Components (`"use client"`) for interactivity.

**Page structure** — `src/app/page.tsx` composes all sections in order:
1. `Navbar` — fixed, transparent→charcoal on scroll, mobile hamburger menu
2. `Hero` — full-screen dark landing with stats grid
3. `Services` — 6-card grid, white background
4. `Projects` — 6-card portfolio grid, gray background
5. `About` — company story + values + team, white background
6. `Contact` — dark background, contact details + controlled form with success state
7. `Footer` — dark background

**Color tokens** (used as arbitrary Tailwind values throughout):
- Charcoal: `#1a1a1a` (dark bg), `#2d2d2d` (elevated surface)
- Orange accent: `#f97316` (primary), `#ea6a0a` (hover)

## Contact Form

The form in `Contact.tsx` is a frontend-only controlled component. To actually send emails, wire up `handleSubmit` to a Next.js API route (`src/app/api/contact/route.ts`) or a third-party service like Formspree/Resend.
