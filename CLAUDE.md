# CLAUDE.md - Agent Instructions for DisinfoApp

## Project Overview

DisinfoApp is a mobile-first Progressive Web App for learning about disinformation and communication techniques. The project has two main interfaces:

1. **SwipeFeed** (`/`) - TikTok-style vertical swipe interface for learning terms (PRIMARY)
2. **Legacy Dashboard** (`/dashboard/*`) - Full feature app with modules, quizzes, simulator (SECONDARY)

## Architecture

### Tech Stack
- **Framework:** React 18 + TypeScript 5.5
- **Build:** Vite 5.3
- **Styling:** Tailwind CSS 3.4 + Telekom Design Tokens
- **State:** Zustand with persist middleware
- **Animations:** Framer Motion 11
- **Routing:** React Router v6
- **PWA:** Vite PWA Plugin + Workbox
- **Deployment:** Netlify

### Key Directories
```
src/
├── components/        # Reusable UI components
│   ├── discover/      # SwipeFeed components (PRIMARY)
│   ├── shared/        # Layout, Header, Footer
│   └── ...
├── features/          # Page-level modules
├── data/              # Content and translations
│   ├── persuasion/    # 28 persuasion techniques
│   └── i18n/          # Translations
├── stores/            # Zustand state stores
├── services/          # API services (images, etc.)
├── styles/            # Design tokens and global styles
└── types/             # TypeScript definitions
```

## Design System

### Brand Colors (Telekom-inspired)
- **Primary (Magenta):** #e20074
- **Primary Dark:** #b8005c
- **Primary Light:** #ff1493
- **Background:** #ffffff (light) / #0d0d0d (dark)
- **Surface:** #f8f8f8 (light) / #1a1a1a (dark)
- **Text:** #1a1a1a (light) / #ffffff (dark)

### Typography
- **Primary Font:** TeleNeo (with system sans-serif fallback)
- **Weights:** 400 (Regular), 500 (Medium), 700 (Bold)
- **Scale:** 12px, 14px, 16px, 18px, 20px, 24px, 32px, 48px

### Spacing Scale
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## Development Guidelines

### Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use Zustand for global state
- Keep components small and focused
- Use Tailwind for styling (design tokens via CSS variables)

### i18n Rules
- All user-facing text must use the `LocalizedString` type
- Structure: `{ de: string, en: string, [lang]?: string }`
- Language detection: Browser preference → user selection → fallback to 'de'
- Phase 1 languages: German (de), English (en)
- Phase 2 languages: Hungarian (hu), Polish (pl), Slovak (sk), Croatian (hr), Greek (el), Macedonian (mk), Austrian German (de-AT)

### Content Guidelines
- Target audience: Corporate communication professionals
- Tone: Professional but accessible
- Examples: Real-world, relevant to business communication
- Translations: Must be professionally accurate, check against Wikipedia for technical terms

### Image Guidelines
- Each technique card should have a background image
- Sources (in priority order):
  1. Unsplash API (free, high-quality)
  2. Wikipedia/Wikimedia Commons
  3. AI-generated (local tool for missing images)
- Images are cached locally in `/public/images/techniques/`
- Never show empty/black backgrounds - always have a fallback

### Performance Guidelines
- Keep bundle size minimal
- Use code splitting for routes
- Cache images aggressively
- PWA should work offline with cached content

## File Conventions

### Documentation
- `IDEAS.md` - Unimplemented ideas and brainstorms
- `ROADMAP.md` - Planned features with status
- `CLAUDE.md` - This file (agent instructions)

### When Adding Features
1. Check IDEAS.md for existing ideas
2. Move to ROADMAP.md when starting implementation
3. Mark as completed in ROADMAP.md when done
4. Update this file if architectural changes occur

## Commands

```bash
npm run dev        # Start dev server (port 3000)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Format with Prettier
npm run type-check # TypeScript check
```

## Deployment

- **Platform:** Netlify
- **Branch:** main
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA routing:** Configured in netlify.toml

## Current Focus

The primary focus is the SwipeFeed experience:
- Beautiful, immersive full-screen cards
- Smooth vertical swipe navigation
- High-quality images for each term
- Multi-language support
- Minimal "seen" tracking
- Telekom-inspired design aesthetic
