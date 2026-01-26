# ROADMAP.md - Development Roadmap

This file tracks planned features and their implementation status.

---

## Current Sprint: SwipeFeed Redesign

### Phase 1: Foundation (COMPLETED)

#### Infrastructure
- [x] Create CLAUDE.md with agent instructions
- [x] Create IDEAS.md for future ideas
- [x] Create ROADMAP.md (this file)
- [x] Setup Netlify configuration (netlify.toml)
- [x] Update Vite config for Netlify deployment
- [x] Restructure routing (/ = SwipeFeed, /dashboard = legacy)

#### Design System
- [x] Create Telekom-inspired design tokens
- [x] Add TeleNeo font (or fallback with system fonts)
- [x] Update Tailwind config with new tokens
- [x] Create color palette CSS variables (Magenta #e20074)

### Phase 2: SwipeFeed Enhancement (IN PROGRESS)

#### Core Features
- [x] Redesign SwipeFeed with Telekom styling
- [ ] Add image service (Unsplash/Wikipedia integration)
- [ ] Implement image caching strategy
- [ ] Update card design with images
- [x] Improve typography and spacing
- [x] Add language switcher component
- [x] Implement browser language detection

#### i18n System
- [x] Create i18n utility functions
- [x] Add language store with persistence
- [x] Implement language switcher UI
- [x] Verify German translations
- [x] Verify English translations

### Phase 3: Multi-Language (PLANNED)

#### Phase 2 Languages
- [ ] Hungarian (hu) translations
- [ ] Polish (pl) translations
- [ ] Slovak (sk) translations
- [ ] Croatian (hr) translations
- [ ] Greek (el) translations
- [ ] Macedonian (mk) translations
- [ ] Austrian German (de-AT) variants

#### Quality Assurance
- [ ] Professional review of translations
- [ ] Technical term verification (Wikipedia cross-check)
- [ ] Native speaker feedback

### Phase 4: Polish & Launch (PLANNED)

#### Performance
- [ ] PWA offline support for SwipeFeed
- [ ] Image preloading optimization
- [ ] Bundle size optimization
- [ ] Lighthouse audit (target: 90+ all categories)

#### Testing
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Accessibility testing (screen readers)
- [ ] Cross-browser testing
- [ ] Performance testing

---

## Completed Features

### v2.0.0 (Previous Release)
- [x] 28 persuasion techniques with DE/EN content
- [x] 5 learning modules with quizzes
- [x] Social media simulator
- [x] Gamification system (XP, badges, streaks)
- [x] Knowledge dashboard
- [x] Dark mode support
- [x] PWA foundation
- [x] TikTok-style DiscoverFeed (basic version)

---

## Backlog (Prioritized)

### High Priority
1. Complete Phase 1-2 of SwipeFeed redesign
2. Ensure offline capability for core content
3. Add at least 3 Phase 2 languages

### Medium Priority
4. Image generation tool for missing images
5. Spaced repetition for "seen" techniques
6. Category/difficulty filters

### Low Priority
7. Video content integration
8. Advanced analytics
9. Social sharing features

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 2.1.0 | TBD | SwipeFeed redesign with Telekom styling |
| 2.0.0 | 2025 | Major update with gamification and simulator |
| 1.0.0 | 2024 | Initial release with core features |

---

*Last updated: 2026-01-26*
