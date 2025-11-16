# DisinfoApp - Desinformation Detection PWA

Eine progressive Web-App zur Erkennung und Bekämpfung von Desinformation. Diese Anwendung hilft Nutzern dabei, Fake News zu erkennen, kritisches Denken zu entwickeln und Faktencheck-Strategien zu erlernen.

## 🚀 Features

- ✅ **Progressive Web App** - Offline-fähig, installierbar
- ✅ **Responsive Design** - Funktioniert auf allen Geräten
- ✅ **Dark Mode** - Vollständiger Dark Mode Support mit automatischer Systemerkennung
- ✅ **Interaktive Lernmodule** - 5 vollständig implementierte Module
- ✅ **Social Media Simulator** - Realistische Posts zur Praxis
- ✅ **Analytics Dashboard** - Umfassende Fortschritts-Visualisierung
- ✅ **Achievement System** - 17 freischaltbare Erfolge mit Animationen
- ✅ **Daily Challenges** - Tägliche Herausforderungen für aktive Lerner
- ✅ **Gamification** - XP-System, Level, Streaks und Badges
- ✅ **TypeScript** - 100% typ-sichere Entwicklung
- ✅ **Modern UI** - Mit Tailwind CSS und Framer Motion Animationen

## 📚 Lernmodule (ALLE VOLLSTÄNDIG IMPLEMENTIERT!)

1. ✅ **Grundlagen der Desinformation** (Anfänger, 15 Min, 100 XP) - 5 Lektionen + 5 Quiz-Fragen
2. ✅ **Desinformationstaktiken** (Fortgeschritten, 25 Min, 150 XP) - 6 Lektionen + 7 Quiz-Fragen
3. ✅ **Psychologie der Manipulation** (Erweitert, 30 Min, 200 XP) - 5 Lektionen + 5 Quiz-Fragen
4. ✅ **Faktencheck-Strategien** (Fortgeschritten, 20 Min, 150 XP) - 5 Lektionen + 6 Quiz-Fragen
5. ✅ **Praxisanwendung** (Experte, 40 Min, 250 XP) - 5 praxisorientierte Quiz-Fragen

## 🛠️ Tech Stack

- **Framework:** React 18 mit TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **State Management:** Zustand mit Persist Middleware
- **UI Library:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **PWA:** Vite PWA Plugin mit Workbox

## 🏗️ Projektstruktur

```
src/
├── components/          # Wiederverwendbare UI-Komponenten
│   ├── learning/       # Lernmodul-Komponenten
│   ├── quiz/           # Quiz-Komponenten
│   ├── shared/         # Gemeinsame Komponenten (Layout, Header, Footer)
│   └── gamification/   # Gamification-Elemente
├── features/           # Feature-basierte Module
│   ├── home/           # Startseite
│   ├── lessons/        # Lernmodule & Quiz
│   ├── progress/       # Fortschrittsübersicht
│   └── social/         # Social Features (geplant)
├── hooks/              # Custom React Hooks
├── services/           # API und Business Logic
├── stores/             # Zustand State Management
├── types/              # TypeScript Definitionen
├── data/               # Statische Daten (Module)
└── assets/             # Medien und Ressourcen
```

## 🚦 Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Die Anwendung läuft dann unter `http://localhost:3000`

### Build für Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Code Formatierung

```bash
npm run format
```

## 📱 PWA Features

Die App ist als Progressive Web App konzipiert und bietet:

- **Offline-Funktionalität** - Service Worker cached wichtige Assets
- **Installierbar** - Kann auf Desktop und Mobile installiert werden
- **App-ähnliches Feeling** - Standalone Display Mode
- **Push-Benachrichtigungen** - Für tägliche Challenges (geplant)
- **Background Sync** - Synchronisierung bei Netzwerkverfügbarkeit

## 🎯 Entwicklungsplan

### ✅ Phase 1: Foundation (Abgeschlossen)
- [x] Projekt-Setup mit Vite, React, TypeScript
- [x] Tailwind CSS Konfiguration
- [x] Projektstruktur
- [x] React Router Navigation
- [x] Basis UI-Komponenten
- [x] Zustand State Management
- [x] TypeScript Types
- [x] Responsive Design Foundation
- [x] PWA Grundkonfiguration

### ✅ Phase 2 + 3: Core Learning & Content (Abgeschlossen)
- [x] Lesson Module System
- [x] Quiz Engine mit Timer und Feedback
- [x] Progress Tracking erweitert
- [x] Multimedia Support
- [x] Interaktives Feedback System
- [x] **ALLE 5 Lernmodule mit vollständigem Content**
- [x] **28 umfassende Quiz-Fragen über alle Module**
- [x] Achievement System implementiert
- [x] Detaillierte Fortschritts-Visualisierung
- [x] Psychologie-Modul mit kognitiven Verzerrungen
- [x] Faktencheck-Modul mit CRAAP-Test und Tools
- [x] Praxis-Modul für reale Szenarien

### ✅ Phase 3: Interactivity (ABGESCHLOSSEN!)
- [x] **Social Media Simulator** - Interaktive Simulation mit 5 realistischen Posts
- [x] **Real-time Validation** - Sofortiges Feedback und Analyse-Tools
- [x] **Red Flag Detection** - Interaktive Identifikation von Warnsignalen
- [x] **Pattern Recognition** - Lernen durch realistische Szenarien
- [ ] Drag-and-Drop Exercises (Optional für Zukunft)
- [ ] External Fact-Check API Integration (Optional)

### ✅ Phase 4: Gamification (ABGESCHLOSSEN!)
- [x] **Achievement System** - 17 detaillierte Erfolge mit Icons und Beschreibungen
- [x] **Animated Notifications** - Aufwendige Animationen beim Freischalten
- [x] **Daily Challenges** - Täglich neue Herausforderungen
- [x] **Streak Tracking** - Erfassung von Lernstreaks mit Belohnungen
- [x] **Analytics Dashboard** - Umfassende Statistiken und Visualisierungen
- [x] **Dark Mode** - Vollständiger Theme-Support
- [ ] Leaderboards (Optional für Zukunft)
- [ ] Sharing Funktionalität (Optional)

### 📋 Phase 5: PWA & Polish (In Planung)
- [ ] Service Worker Optimierung
- [ ] Erweiterte Offline-Funktionalität
- [ ] Push Notifications
- [ ] Performance Optimierung
- [ ] Analytics Integration
- [ ] Accessibility Audit
- [ ] User Testing

## 🎨 Design Prinzipien

- **Mobile-First** - Primär für mobile Nutzung entwickelt
- **Accessibility** - WCAG AAA Compliance angestrebt
- **Performance** - Optimiert für schnelle Ladezeiten (473 KiB Precache)
- **Intuitive UX** - Einfache, selbsterklärende Benutzerführung
- **Dark Mode** - Vollständig implementiert mit System-Präferenz-Erkennung
- **Smooth Animations** - Framer Motion für flüssige Übergänge

## 📄 Lizenz

Dieses Projekt wurde für Bildungszwecke entwickelt.

## 🤝 Beitragen

Contributions sind willkommen! Bitte öffne ein Issue oder Pull Request.

## 📞 Kontakt

Entwickelt mit ❤️ für digitale Medienkompetenz

---

**Status:** MASSIV VERBESSERT! 🚀 | Version 2.0.0

## 🎉 Version 2.0.0 - Major Update

**Neue Features:**
- 🌙 Dark Mode mit System-Präferenz
- 📱 Social Media Simulator (5 realistische Posts)
- 📊 Analytics Dashboard mit umfassenden Statistiken
- 🏆 17 Achievement Badges mit animierten Benachrichtigungen
- 🎯 Daily Challenges System
- ✨ Verbesserte UI/UX mit mehr Animationen
- 🔗 Neue Navigation mit Simulator-Link
- 💾 Drei neue Zustand Stores (Theme, Achievements, Challenges)