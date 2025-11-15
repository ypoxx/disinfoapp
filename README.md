# DisinfoApp - Desinformation Detection PWA

Eine progressive Web-App zur Erkennung und Bekämpfung von Desinformation. Diese Anwendung hilft Nutzern dabei, Fake News zu erkennen, kritisches Denken zu entwickeln und Faktencheck-Strategien zu erlernen.

## 🚀 Features

- ✅ **Progressive Web App** - Offline-fähig, installierbar
- ✅ **Responsive Design** - Funktioniert auf allen Geräten
- ✅ **Interaktive Lernmodule** - 5 strukturierte Module zum Lernen
- ✅ **Fortschritts-Tracking** - Verfolge deinen Lernfortschritt
- ✅ **Gamification** - XP-System, Level und Streaks
- ✅ **TypeScript** - Typ-sichere Entwicklung
- ✅ **Modern UI** - Mit Tailwind CSS und Framer Motion

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

### 📋 Phase 3: Interactivity (In Planung)
- [ ] Interactive Simulators
- [ ] Drag-and-Drop Exercises
- [ ] Pattern Matching Games
- [ ] Real-time Validation
- [ ] Social Media Sandbox
- [ ] External Fact-Check API Integration

### 📋 Phase 4: Gamification (In Planung)
- [ ] XP und Leveling System erweitern
- [ ] Achievement Badges
- [ ] Leaderboards
- [ ] Daily Challenges
- [ ] Streak Tracking
- [ ] Sharing Funktionalität

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
- **Performance** - Optimiert für schnelle Ladezeiten
- **Intuitive UX** - Einfache, selbsterklärende Benutzerführung
- **Dark Mode Ready** - Unterstützung für Dark Mode vorbereitet

## 📄 Lizenz

Dieses Projekt wurde für Bildungszwecke entwickelt.

## 🤝 Beitragen

Contributions sind willkommen! Bitte öffne ein Issue oder Pull Request.

## 📞 Kontakt

Entwickelt mit ❤️ für digitale Medienkompetenz

---

**Status:** VOLLSTÄNDIG - Alle 5 Module implementiert! ✅ | Version 1.0.0