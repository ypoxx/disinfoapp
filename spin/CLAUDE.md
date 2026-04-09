# SPIN — Kommunikationstechniken meistern

## Projekt-Überblick

SPIN ist eine mobile-first Webapp, die Kommunikationsprofis (PR, Unternehmenskommunikation) Überzeugungstechniken beibringt. Gamifiziert, evidenzbasiert, professionell. Für ~300 Nutzer.

## Tech-Stack

- **React 19** + **Vite 8** + **TypeScript 6**
- **Tailwind CSS v4** mit eigenen Design-Tokens (`src/design/tokens.css`)
- **Zustand 5** für State Management (4 Stores)
- **Firebase** für Auth (Google Sign-In) und Firestore (Cloud-Sync)
- **Framer Motion** für Animationen
- **i18next** für Internationalisierung (9 Sprachen)
- **Radix UI** für zugängliche UI-Primitives
- **Lucide React** für Icons
- Deployment: **Netlify**

## Verzeichnisstruktur

```
spin/
  content/          # Inhaltliche Daten (Techniken, Übungen, etc.)
    types.ts        # Typ-Definitionen für alle Inhalte
    techniques/     # 1 Datei pro Technik (27 Stück)
    counter-measures/
    exercises/
    quizzes/
    simulator/
    badges.ts
    relationships.ts
    taxonomy.ts
    phases.ts

  src/
    design/         # Design-System
      tokens.css    # CSS Custom Properties
      components/   # ~15 Kernkomponenten
      layouts/      # App-Shell, Session-Layout

    engine/         # Lern-Engine
      learning-engine.ts
      spaced-repetition.ts
      interleaving.ts
      session-builder.ts
      scoring.ts

    features/       # Screens (4 Hauptbereiche)
      today/        # Tagesübersicht, Daily Session
      practice/     # Übungen, Simulator
      library/      # Technik-Bibliothek
      profile/      # Fortschritt, Badges, Einstellungen
      onboarding/   # Willkommen, Diagnostic Quiz

    stores/         # Zustand Stores
      auth-store.ts
      knowledge-store.ts
      progress-store.ts
      settings-store.ts

    lib/            # Infrastruktur (Firebase, Sync)
    i18n/           # Internationalisierung
    hooks/          # Shared React Hooks
    utils/          # Hilfsfunktionen
```

## Wichtige Konventionen

### Content-Dateien
- Jede Technik ist eine eigene Datei in `content/techniques/`
- Alle Texte nutzen den `LocalizedText`-Typ: `{ de: string; en: string; hu?: string; ... }`
- Deutsch (de) und Englisch (en) sind Pflichtsprachen
- Fallback-Kette: gewählte Sprache → en → de

### Design
- Farben nur über CSS Custom Properties (`var(--color-*)`)
- Mobile-first: Basis-Styles für Mobile, `md:` Breakpoint für Desktop
- Touch-Targets mindestens 48px
- Dark Mode über `.dark` Klasse auf `<html>`

### Code-Stil
- Funktionale React-Komponenten mit TypeScript
- Named Exports (kein default export)
- Path-Aliases: `@/` für `src/`, `@content/` für `content/`
- Kein `any` Typ — immer typisiert

### Gamification
- "Mastery Rating" (0-100) statt Level-System
- Professionelle Sprache (keine Emojis in UI)
- Badges mit Rarity-System (common/rare/epic/legendary)

### Lern-Engine
- SM-2 Spaced Repetition für Wiederholungsintervalle
- Interleaving: Keine zwei aufeinanderfolgenden Fragen zur selben Technik
- Microlearning: Sessions sind 3-5 Minuten

## Commands

```bash
npm run dev       # Dev-Server starten (Port 3000)
npm run build     # TypeScript prüfen + Vite Build
npm run lint      # ESLint
npm run preview   # Production-Build vorschauen
```

## Sprachen

DE, EN, HU, PL, SK, HR, EL, MK, CNR — vollständig übersetzt (Interface + Inhalte).

## Kontext

Dieses Projekt ist eine Neuimplementierung der DisinfoApp (im Elternverzeichnis). Die Technik-Datenbank und Übungen wurden von dort migriert und neutral umformuliert. Der Fokus liegt auf "Kommunikationstechniken lernen", nicht auf "Desinformation erkennen".
