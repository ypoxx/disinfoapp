# Implementation Checklist für Skalierung auf 1000+ Spieler

## Phase 1: Backend Foundation (Wochen 1-2)

### Database Setup
- [ ] PostgreSQL 15+ installieren (lokal oder Cloud)
- [ ] Datenbank erstellen: `disinfoapp`
- [ ] User & Permissions konfigurieren
- [ ] Backup-Strategie definieren

### Schema & Migrations
- [ ] ORM wählen (Prisma empfohlen)
- [ ] Schema definieren (siehe SCALING_ARCHITECTURE.md)
  - [ ] `users` Tabelle
  - [ ] `progress` Tabelle
  - [ ] `module_progress` Tabelle
  - [ ] `user_achievements` Tabelle
  - [ ] `sessions` Tabelle (optional)
- [ ] Indexes erstellen für Performance
- [ ] Migration-Scripts erstellen
- [ ] Seed-Data für Testing

### Backend API Setup
- [ ] Node.js Projekt initialisieren
  ```bash
  mkdir backend
  cd backend
  npm init -y
  npm install express cors dotenv
  npm install -D typescript @types/node @types/express
  ```
- [ ] TypeScript konfigurieren (`tsconfig.json`)
- [ ] Projektstruktur erstellen
  ```
  backend/
  ├── src/
  │   ├── api/
  │   ├── auth/
  │   ├── database/
  │   ├── middleware/
  │   ├── services/
  │   └── index.ts
  ├── config/
  ├── tests/
  └── package.json
  ```
- [ ] Environment Variables (`.env`)
  - [ ] `DATABASE_URL`
  - [ ] `JWT_SECRET`
  - [ ] `PORT`
  - [ ] `NODE_ENV`

### Core Middleware
- [ ] CORS Setup (Frontend URL whitelisten)
- [ ] Body Parser (JSON)
- [ ] Helmet (Security Headers)
- [ ] Rate Limiter
  ```typescript
  import rateLimit from 'express-rate-limit';

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Minuten
    max: 100 // Max 100 Requests
  });
  ```
- [ ] Error Handler Middleware
- [ ] Request Logger (Morgan oder Pino)

### Authentifizierung
- [ ] JWT Token Generation/Verification
- [ ] Password Hashing (bcrypt)
- [ ] Auth Middleware für geschützte Routes
- [ ] Endpoints:
  - [ ] `POST /api/auth/register` (optional)
  - [ ] `POST /api/auth/login`
  - [ ] `POST /api/auth/logout`
  - [ ] `GET /api/auth/me`

### Basic CRUD API
- [ ] Progress Endpoints:
  - [ ] `GET /api/progress` - User-Fortschritt laden
  - [ ] `PUT /api/progress` - Gesamten Fortschritt updaten
  - [ ] `POST /api/progress/module/:id` - Modul abschließen
  - [ ] `POST /api/progress/xp` - XP hinzufügen
- [ ] Achievement Endpoints:
  - [ ] `GET /api/achievements` - User-Achievements
  - [ ] `POST /api/achievements/:id` - Achievement unlock

### Testing
- [ ] Unit Tests für Services
- [ ] Integration Tests für API
- [ ] Test Database Setup
- [ ] CI/CD Pipeline (GitHub Actions)

---

## Phase 2: Frontend Integration (Wochen 3-4)

### API Client Layer
- [ ] API Client erstellen (`src/services/api.ts`)
  ```typescript
  import axios from 'axios';

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
  });

  // Interceptors für Auth Token
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  ```
- [ ] Error Handling & Retry Logic
- [ ] Request/Response Interceptors
- [ ] Type Definitions für API Responses

### Auth Service
- [ ] `src/services/auth.ts`
  - [ ] `login(username, password)`
  - [ ] `register(username, password)` (optional)
  - [ ] `logout()`
  - [ ] `getCurrentUser()`
  - [ ] `isAuthenticated()`
- [ ] Auth Store (Zustand)
  - [ ] User State
  - [ ] Token Management
  - [ ] Login/Logout Actions

### Store Refactoring
Für jeden Store (`progressStore`, `knowledgeStore`, etc.):

- [ ] **progressStore.ts**
  - [ ] `syncWithServer()` Funktion
  - [ ] `saveToServer()` mit Debounce
  - [ ] Optimistic Updates
  - [ ] Error Handling & Rollback
  - [ ] Offline Queue

- [ ] **knowledgeStore.ts**
  - [ ] Server-Sync bei Technik-Mastery
  - [ ] Batch-Updates für Performance

- [ ] **achievementStore.ts**
  - [ ] Server-Sync bei Unlock
  - [ ] Server-seitige Validierung

- [ ] **challengeStore.ts**
  - [ ] Daily Challenges vom Server laden
  - [ ] Completion an Server melden

### Sync Service
- [ ] `src/services/sync.ts`
  - [ ] Auto-Sync Interval (alle 30s)
  - [ ] Conflict Resolution
  - [ ] Last-Write-Wins oder Merge-Strategy
  - [ ] Sync Status Indicator

### Offline-First Features
- [ ] Service Worker Update
  - [ ] Background Sync API
  - [ ] Sync Queue in IndexedDB
  - [ ] Auto-Retry bei Netzwerk
- [ ] Offline Indicator UI
- [ ] Sync-Status Banner

### Auth UI Components
- [ ] `src/components/auth/LoginForm.tsx`
- [ ] `src/components/auth/RegisterForm.tsx` (optional)
- [ ] `src/components/auth/AuthModal.tsx`
- [ ] Auth Routes (`/login`, `/register`)
- [ ] Protected Route Wrapper

### Loading States
- [ ] Loading Spinner Component
- [ ] Skeleton Screens für Data Fetching
- [ ] Error States für Failed Requests

---

## Phase 3: Privacy & DSGVO (Wochen 5-6)

### DSGVO Consent
- [ ] Consent Banner Component
  ```tsx
  <ConsentBanner
    onAccept={() => setConsent(true)}
    onDecline={() => setConsent(false)}
  />
  ```
- [ ] Consent Storage (Cookie oder localStorage)
- [ ] Granulare Consent Options
  - [ ] Essential (immer an)
  - [ ] Analytics (optional)
  - [ ] Sync/Cloud (optional)

### Privacy Features Backend
- [ ] Data Export Endpoint
  ```typescript
  GET /api/user/export
  // Returns: { user: {...}, progress: {...}, achievements: [...] }
  ```
- [ ] Account Deletion Endpoint
  ```typescript
  DELETE /api/user/delete
  // Löscht User + CASCADE alle Daten
  ```
- [ ] Auto-Deletion Job (Cron)
  - [ ] Inaktive Accounts >90 Tage löschen
  - [ ] Email-Warnung 7 Tage vorher (falls Email vorhanden)

### Privacy UI Components
- [ ] `src/components/privacy/PrivacySettings.tsx`
  - [ ] Consent Management
  - [ ] Data Export Button
  - [ ] Account Deletion Button
- [ ] `src/components/privacy/DataExport.tsx`
  - [ ] JSON Download
  - [ ] User-freundliche Anzeige
- [ ] Privacy Policy Page (`/privacy`)
- [ ] Terms of Service Page (`/terms`)

### Migration Tool (localStorage → Server)
- [ ] Migration Endpoint
  ```typescript
  POST /api/migrate
  Body: { localData: {...} } // localStorage dump
  ```
- [ ] Migration UI Component
  - [ ] "Fortschritt sichern" Banner
  - [ ] Ein-Klick Migration
  - [ ] Erfolgs-Feedback
- [ ] Migration Validation

---

## Phase 4: Optional Features (Wochen 7-8)

### Leaderboard
- [ ] Backend:
  - [ ] `GET /api/leaderboard?limit=100`
  - [ ] Anonymisierung (nur Username, kein User-ID)
  - [ ] Caching (Redis)
- [ ] Frontend:
  - [ ] `src/features/leaderboard/LeaderboardPage.tsx`
  - [ ] Top 100 Anzeige
  - [ ] User-Position Highlight

### Analytics (Privacy-First)
- [ ] Aggregierte Statistiken (keine User-IDs)
  - [ ] Durchschnittliche Completion Rate
  - [ ] Beliebteste Module
  - [ ] Durchschnittliche Session-Dauer
- [ ] Admin Dashboard (optional)
  - [ ] `/admin/analytics`
  - [ ] Grafiken mit Recharts/Chart.js

### Multiplayer/Social (Optional)
- [ ] Friend System
- [ ] Challenge andere Spieler
- [ ] Shared Progress Vergleich

---

## Phase 5: Testing & Deployment (Wochen 8-9)

### Load Testing
- [ ] Tool: k6 oder Apache Bench
- [ ] Test-Szenarien:
  - [ ] 100 gleichzeitige User
  - [ ] 500 gleichzeitige User
  - [ ] 1000 gleichzeitige User
- [ ] Performance Metrics:
  - [ ] Response Time < 200ms
  - [ ] Throughput > 100 req/s
  - [ ] Error Rate < 1%

### E2E Testing
- [ ] Playwright oder Cypress
- [ ] Critical User Flows:
  - [ ] Registration → Login → Play → Progress Save
  - [ ] Offline Mode → Sync
  - [ ] Achievement Unlock
  - [ ] Data Export/Deletion

### Deployment Setup

#### Option A: Docker Compose (Empfohlen)
- [ ] `Dockerfile` für Backend
  ```dockerfile
  FROM node:20-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --production
  COPY . .
  RUN npm run build
  CMD ["node", "dist/index.js"]
  ```
- [ ] `Dockerfile` für Frontend
- [ ] `docker-compose.yml`
  ```yaml
  version: '3.8'
  services:
    frontend:
      build: .
      ports: ["3000:80"]
    api:
      build: ./backend
      ports: ["8000:8000"]
      depends_on: [db]
    db:
      image: postgres:15-alpine
      volumes: [postgres_data:/var/lib/postgresql/data]
  ```
- [ ] Environment Variables in `.env`
- [ ] Docker Volumes für Persistence

#### Option B: Platform-as-a-Service
- [ ] Railway.app Setup
  - [ ] GitHub Integration
  - [ ] Auto-Deploy on Push
  - [ ] PostgreSQL Add-on
- [ ] Render.com Setup
  - [ ] Web Service (Backend)
  - [ ] Static Site (Frontend)
  - [ ] PostgreSQL Database
- [ ] Fly.io Setup

### CI/CD Pipeline
- [ ] GitHub Actions Workflow
  ```yaml
  name: Deploy
  on:
    push:
      branches: [main]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - run: npm install
        - run: npm test
    deploy:
      needs: test
      runs-on: ubuntu-latest
      steps:
        - run: docker-compose up -d
  ```
- [ ] Automated Tests
- [ ] Automated Deployment

### Monitoring & Logging
- [ ] Logging Setup (Winston/Pino)
  - [ ] Error Logs
  - [ ] Access Logs
  - [ ] Performance Logs
- [ ] Monitoring Tools
  - [ ] UptimeRobot (Free, 50 Monitors)
  - [ ] Grafana + Prometheus (Self-hosted)
  - [ ] Sentry (Error Tracking, Free Tier)
- [ ] Alerts
  - [ ] Downtime Alert
  - [ ] High Error Rate Alert
  - [ ] High Load Alert

### Security Hardening
- [ ] HTTPS/SSL (Let's Encrypt)
- [ ] Security Headers (Helmet)
- [ ] Rate Limiting
- [ ] SQL Injection Prevention (ORM)
- [ ] XSS Prevention (React escaping)
- [ ] CSRF Protection
- [ ] Secrets Management (nicht in Git!)
- [ ] Dependency Scanning (npm audit)

### Backup Strategy
- [ ] Database Backups
  - [ ] Daily Automated Backups
  - [ ] Retention: 7 Tage
  - [ ] Offsite Storage (AWS S3/Hetzner Storage Box)
- [ ] Backup Restore Testing (monatlich)

---

## Phase 6: Launch & Maintenance

### Pre-Launch Checklist
- [ ] Privacy Policy veröffentlicht
- [ ] Terms of Service veröffentlicht
- [ ] DSGVO-Compliance Review
- [ ] Performance Testing abgeschlossen
- [ ] Security Audit durchgeführt
- [ ] Backup-System getestet
- [ ] Monitoring aktiv
- [ ] Documentation vollständig

### Launch
- [ ] Soft Launch (Beta-Tester)
- [ ] Feedback sammeln
- [ ] Bug Fixes
- [ ] Public Launch
- [ ] Migration-Tool für alte User

### Post-Launch
- [ ] Monitoring (täglich)
- [ ] User Feedback sammeln
- [ ] Bug Fixes & Patches
- [ ] Feature Requests priorisieren
- [ ] Performance Optimierung

### Wartung (laufend)
- [ ] Server-Updates (monatlich)
- [ ] Dependency Updates (monatlich)
- [ ] Security Patches (sofort)
- [ ] Database Optimization (quartalsweise)
- [ ] Backup-Tests (monatlich)
- [ ] Analytics Review (wöchentlich)

---

## Ressourcen & Links

### Dokumentation
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Express.js Docs](https://expressjs.com/)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
- [DSGVO Checkliste](https://gdpr.eu/checklist/)

### Tools
- [Railway.app](https://railway.app) - Free Tier Hosting
- [Render.com](https://render.com) - Free PostgreSQL + Hosting
- [Hetzner](https://www.hetzner.com) - Günstige VPS (5€/Monat)
- [Let's Encrypt](https://letsencrypt.org) - Free SSL
- [UptimeRobot](https://uptimerobot.com) - Free Monitoring

### Testing
- [k6](https://k6.io) - Load Testing
- [Playwright](https://playwright.dev) - E2E Testing
- [Postman](https://www.postman.com) - API Testing

---

## Geschätzter Zeitplan

| Phase | Aufwand | Kalenderzeit |
|-------|---------|--------------|
| **Phase 1: Backend** | 60-80h | 2-3 Wochen |
| **Phase 2: Frontend** | 60-80h | 2-3 Wochen |
| **Phase 3: Privacy** | 30-40h | 1-2 Wochen |
| **Phase 4: Optional** | 40-60h | 1-2 Wochen |
| **Phase 5: Testing/Deploy** | 30-50h | 1-2 Wochen |
| **TOTAL** | **220-310h** | **7-12 Wochen** |

**Bei Vollzeit (40h/Woche):** 5-8 Wochen
**Bei Teilzeit (20h/Woche):** 11-16 Wochen
**Bei Hobby (10h/Woche):** 22-31 Wochen

---

## Quick Start Script

```bash
#!/bin/bash
# Quick start für lokale Entwicklung

# 1. Backend Setup
mkdir backend
cd backend
npm init -y
npm install express cors dotenv pg
npm install -D typescript @types/node @types/express prisma
npx prisma init
# → Dann schema.prisma bearbeiten

# 2. Frontend: API URL setzen
cd ..
echo "VITE_API_URL=http://localhost:8000" > .env

# 3. Database starten (Docker)
docker run --name disinfoapp-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=disinfoapp \
  -p 5432:5432 \
  -d postgres:15-alpine

# 4. Backend starten
cd backend
npx prisma migrate dev
npm run dev

# 5. Frontend starten (neues Terminal)
cd ..
npm run dev
```

---

## Hilfe & Support

Bei Fragen/Problemen:
1. **Dokumentation prüfen:** Siehe `SCALING_ARCHITECTURE.md`
2. **GitHub Issues:** Falls Open Source
3. **Community:** Reddit r/webdev, StackOverflow
4. **DSGVO Beratung:** Anwalt oder datenschutz.org

**Viel Erfolg! 🚀**
