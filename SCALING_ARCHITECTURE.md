# Skalierungsarchitektur für 1000+ gleichzeitige Spieler

## Aktuelle Architektur (IST-Zustand)

**Typ:** Client-Only PWA (Progressive Web App)
- **Frontend:** React + TypeScript + Vite
- **State Management:** Zustand mit localStorage persistence
- **Datenspeicherung:** Browser localStorage (client-seitig)
- **Backend:** ❌ Nicht vorhanden
- **Datenbank:** ❌ Nicht vorhanden
- **Synchronisation:** ❌ Keine (jeder Client isoliert)

### Aktuelle Limitierungen:
- ❌ Kein Multiplayer möglich
- ❌ Keine zentrale Datenspeicherung
- ❌ Keine Benutzerkonten/Authentifizierung
- ❌ Keine Leaderboards oder Vergleichsmöglichkeiten
- ❌ Fortschritt nur lokal (geht bei Browser-Wechsel verloren)
- ❌ Keine Analyse aggregierter Daten möglich
- ❌ DSGVO-Konformität unklar (lokale Speicherung ohne Consent)

---

## SOLL-Architektur für 1000+ Spieler

### Design-Prinzipien
✅ **Privacy by Design** - Besser als DSGVO
✅ **Data Minimalism** - Sparsame Datennutzung
✅ **Unkommerziell** - Keine Kosten-intensive Infrastruktur
✅ **Standard-Hardware** - Übliche Speicher/Server-Kapazitäten
✅ **Open Source Stack** - Keine Lizenzkosten

---

## 1. Backend-Infrastruktur (NEU)

### 1.1 Backend-Framework
**Empfehlung:** Node.js mit Express/Fastify ODER Go

**Warum:**
- Geringe Ressourcen-Nutzung
- Gut skalierbar für 1000+ Nutzer
- Open Source, kostenlos
- Große Community

**Was erstellen:**
```
backend/
├── src/
│   ├── api/          # REST API Endpoints
│   ├── websocket/    # Echtzeit-Kommunikation (optional)
│   ├── auth/         # Authentifizierung
│   ├── database/     # Datenbank-Schema & Migrations
│   ├── services/     # Business Logic
│   └── middleware/   # CORS, Rate Limiting, Logging
├── config/           # Umgebungskonfiguration
└── tests/            # Backend-Tests
```

**Geschätzter Aufwand:** 40-60 Stunden

---

## 2. Datenbank-Architektur (NEU)

### 2.1 Primäre Datenbank
**Empfehlung:** PostgreSQL (Open Source, DSGVO-freundlich)

**Warum:**
- Kostenlos, Open Source
- ACID-konform (Datenkonsistenz)
- Hervorragende Performance für 1000+ Nutzer
- JSON-Support für flexible Daten
- Läuft auf Standard-Hardware

**Alternative:** SQLite für sehr kleine Deployments (<100 Nutzer)

### 2.2 Datenbank-Schema (Minimal-Design)

```sql
-- Benutzer-Tabelle (DSGVO-konform, minimal)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(50) UNIQUE,  -- Optional, Pseudonym
  created_at TIMESTAMP DEFAULT NOW(),
  last_active TIMESTAMP,
  consent_given BOOLEAN DEFAULT FALSE,  -- DSGVO Consent
  data_retention_days INTEGER DEFAULT 90  -- Auto-Löschung
);

-- Fortschritt-Tabelle
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  modules_completed INTEGER DEFAULT 0,
  total_time_spent INTEGER DEFAULT 0,  -- in Sekunden
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Modul-Fortschritt
CREATE TABLE module_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id VARCHAR(50),
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER,
  attempts INTEGER DEFAULT 0,
  time_spent INTEGER DEFAULT 0,
  last_accessed TIMESTAMP,
  UNIQUE(user_id, module_id)
);

-- Achievements (platzsparend)
CREATE TABLE user_achievements (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id VARCHAR(50),
  unlocked_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (user_id, achievement_id)
);

-- Session-Tracking (optional, für Analytics)
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  started_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP,
  ip_hash VARCHAR(64)  -- Gehashte IP für Sicherheit
);
```

**Speicherbedarf (geschätzt):**
- 1000 aktive Nutzer: ~5-10 MB
- 10.000 aktive Nutzer: ~50-100 MB
- Sehr sparsam durch normalisierte Struktur

**Geschätzter Aufwand:** 20-30 Stunden (Schema + Migrations + ORM Setup)

---

## 3. Authentifizierung & Privacy (NEU)

### 3.1 Authentifizierung-Strategie
**Empfehlung:** Hybrid-Ansatz (Privacy-First)

**Option A: Anonymes Spielen (Standard)**
- Kein Account erforderlich
- Temporäre UUID im localStorage
- Fortschritt nur lokal oder optional sync
- **Vorteil:** Maximale Privacy, keine DSGVO-Hürden
- **Nachteil:** Fortschritt geht bei Browser-Wechsel verloren

**Option B: Optionaler Account**
- Username + Passwort (kein Email erforderlich!)
- JWT-Tokens für Sessions
- Expliziter DSGVO-Consent
- **Vorteil:** Fortschritt über Geräte hinweg
- **Nachteil:** Mehr Komplexität

**Empfehlung:** Beide Optionen anbieten!

### 3.2 DSGVO-Konformität (Besser als Standard)

**Maßnahmen:**
1. **Datenminimierung:**
   - Keine Email-Adressen sammeln
   - Keine echten Namen
   - Keine Tracking-Cookies
   - Nur Pseudonyme (Usernames)

2. **Privacy by Design:**
   - Opt-In für alle Datenerfassung
   - Klare Consent-Banner
   - Recht auf Vergessenwerden (DELETE CASCADE in DB)
   - Daten-Export (JSON-Download)

3. **Datenschutz-Features:**
   - Auto-Löschung inaktiver Accounts (90 Tage)
   - IP-Hashing statt IP-Speicherung
   - Keine Third-Party Analytics
   - Ende-zu-Ende verschlüsselt (HTTPS only)

4. **Transparenz:**
   - Open Source Code (Nutzer können prüfen)
   - Klare Privacy Policy
   - Lokales Hosting (kein US-Server)

**Geschätzter Aufwand:** 15-20 Stunden

---

## 4. API-Design (NEU)

### 4.1 REST API Endpoints

```typescript
// Authentifizierung
POST   /api/auth/register          // Optional: Account erstellen
POST   /api/auth/login             // Optional: Anmelden
POST   /api/auth/logout            // Session beenden
GET    /api/auth/me                // Aktueller User

// Fortschritt
GET    /api/progress               // User-Fortschritt laden
PUT    /api/progress               // Fortschritt speichern (sync)
POST   /api/progress/module/:id    // Modul abschließen
POST   /api/progress/xp            // XP hinzufügen

// Achievements
GET    /api/achievements           // User-Achievements
POST   /api/achievements/:id       // Achievement freischalten

// Leaderboard (optional)
GET    /api/leaderboard            // Top 100 Spieler (anonymisiert)

// Privacy
GET    /api/user/export            // Daten-Export (DSGVO)
DELETE /api/user/delete            // Account löschen (DSGVO)
```

### 4.2 Datenkompression & Optimierung
- **Gzip/Brotli** für alle Responses
- **JSON minimieren** (kurze Keys)
- **Paginierung** für große Listen
- **Caching** (ETag, Cache-Control)

**Bandbreite (geschätzt pro User):**
- Login: ~1 KB
- Fortschritt laden: ~2-5 KB
- Fortschritt speichern: ~1-3 KB
- **Total pro Session:** ~10-15 KB

**Geschätzter Aufwand:** 30-40 Stunden

---

## 5. Frontend-Anpassungen (ÄNDERN)

### 5.1 State Management Umbauen

**Aktuell:** Zustand mit localStorage
**Neu:** Zustand mit API-Synchronisation

```typescript
// Beispiel: progressStore.ts (neu)
export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Neu: Sync mit Backend
      syncWithServer: async () => {
        const response = await fetch('/api/progress', {
          headers: { Authorization: `Bearer ${getToken()}` }
        });
        const serverData = await response.json();
        set(serverData);
      },

      // Neu: Auto-Save nach Änderungen
      saveToServer: debounce(async () => {
        await fetch('/api/progress', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`
          },
          body: JSON.stringify(get())
        });
      }, 5000), // Alle 5 Sekunden

      completeModule: (moduleId, score, timeSpent) => {
        set(/* ... lokale Änderung ... */);
        get().saveToServer(); // Trigger sync
      }
    }),
    {
      name: 'user-progress',
      partialize: (state) => ({
        // Nur bestimmte Felder in localStorage
        modules: state.modules,
        xp: state.xp,
        level: state.level
      })
    }
  )
);
```

### 5.2 Offline-First mit Service Worker

**Strategie:**
1. Änderungen lokal speichern (localStorage)
2. Bei Netzwerk: Zu Server synchronisieren
3. Bei Offline: In Queue stellen
4. Bei Online: Queue abarbeiten

**Service Worker Änderungen:**
```javascript
// Neu: Background Sync für Offline-Änderungen
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgressToServer());
  }
});
```

### 5.3 Consent-Management UI (NEU)

**Neue Komponenten:**
- `ConsentBanner.tsx` - DSGVO Consent beim ersten Besuch
- `PrivacySettings.tsx` - Datenschutz-Einstellungen
- `DataExport.tsx` - Daten-Export Button
- `AccountDeletion.tsx` - Account löschen

**Geschätzter Aufwand:** 40-50 Stunden

---

## 6. Deployment & Infrastruktur

### 6.1 Hosting-Optionen (Unkommerziell/Günstig)

**Option A: Self-Hosting (Empfohlen für Non-Profit)**
- **Hardware:** 1 Server (4 GB RAM, 2 CPU Cores)
- **OS:** Linux (Ubuntu/Debian)
- **Kosten:** ~5-10€/Monat (Hetzner, DigitalOcean)
- **Kann 1000-2000 gleichzeitige Nutzer handlen**

**Option B: Free Tier Cloud**
- **Railway.app:** 500h/Monat free (gut für Start)
- **Fly.io:** 3 VMs free
- **Render.com:** Free PostgreSQL + Web Service
- **Limitierung:** ~100-500 Nutzer je nach Nutzung

**Option C: University/Non-Profit Hosting**
- Viele Unis bieten kostenlose Server für Bildungsprojekte
- Anfrage bei IT-Abteilung

### 6.2 Deployment-Setup

```yaml
# docker-compose.yml (Beispiel)
version: '3.8'
services:
  frontend:
    build: ./
    ports:
      - "3000:80"
    environment:
      - VITE_API_URL=http://api:8000

  api:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/disinfoapp
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=disinfoapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=${DB_PASSWORD}

volumes:
  postgres_data:
```

### 6.3 Performance & Skalierung

**Für 1000 gleichzeitige Nutzer:**
- **CPU:** 2-4 Cores ausreichend
- **RAM:** 4-8 GB (mit Redis Cache: 8 GB empfohlen)
- **Storage:** 10-20 GB SSD
- **Bandbreite:** ~50 Mbit/s

**Optimierungen:**
- **Redis** für Session-Cache (reduziert DB-Load)
- **CDN** für statische Assets (z.B. Cloudflare Free)
- **Connection Pooling** für Datenbank
- **Rate Limiting** gegen Missbrauch
- **Load Balancer** ab 2000+ Nutzer

**Geschätzter Aufwand:** 20-30 Stunden

---

## 7. Zusammenfassung der Änderungen

### 7.1 Neue Komponenten/Services

| Komponente | Status | Aufwand | Priorität |
|------------|--------|---------|-----------|
| **Backend API** | ❌ Neu | 40-60h | 🔴 Kritisch |
| **PostgreSQL DB** | ❌ Neu | 20-30h | 🔴 Kritisch |
| **Authentifizierung** | ❌ Neu | 15-20h | 🔴 Kritisch |
| **API Client (Frontend)** | ❌ Neu | 30-40h | 🔴 Kritisch |
| **State Sync Logic** | 🔄 Ändern | 40-50h | 🔴 Kritisch |
| **DSGVO Consent UI** | ❌ Neu | 10-15h | 🟡 Wichtig |
| **Privacy Features** | ❌ Neu | 15-20h | 🟡 Wichtig |
| **Deployment Setup** | ❌ Neu | 20-30h | 🟡 Wichtig |
| **Monitoring/Logging** | ❌ Neu | 10-15h | 🟢 Optional |
| **Leaderboard** | ❌ Neu | 15-20h | 🟢 Optional |

**Total geschätzt:** 215-310 Stunden (5-8 Wochen Vollzeit)

### 7.2 Änderungen an bestehenden Files

**Stores (alle 9 Dateien in `src/stores/`):**
- ✏️ Synchronisation mit Backend hinzufügen
- ✏️ Optimistic Updates implementieren
- ✏️ Error Handling für Netzwerk-Fehler
- ✏️ Offline-Queue Mechanismus

**Services:**
- ❌ Neu: `src/services/api.ts` - API Client
- ❌ Neu: `src/services/auth.ts` - Auth Service
- ❌ Neu: `src/services/sync.ts` - Sync Service

**Components:**
- ❌ Neu: `src/components/auth/` - Login/Register
- ❌ Neu: `src/components/privacy/` - DSGVO Komponenten
- ✏️ Alle bestehenden Komponenten: Loading States für API calls

### 7.3 Nicht ändern (bleibt gleich)

✅ **UI/UX Design** - Bleibt identisch
✅ **Lesson/Quiz Content** - Keine Änderungen
✅ **Component Struktur** - Bleibt modular
✅ **Styling (Tailwind)** - Keine Änderungen
✅ **PWA Features** - Offline-first bleibt

---

## 8. Migrations-Strategie

### Phase 1: Backend Foundation (Woche 1-2)
1. PostgreSQL aufsetzen
2. Datenbank-Schema erstellen
3. Backend API implementieren (basic CRUD)
4. Authentifizierung implementieren

### Phase 2: Frontend Integration (Woche 3-4)
1. API Client erstellen
2. Auth Flow in Frontend einbauen
3. Store-Synchronisation implementieren
4. Offline-First mit Queue

### Phase 3: Privacy & Compliance (Woche 5-6)
1. DSGVO Consent Banner
2. Privacy Settings Page
3. Data Export/Deletion Features
4. Privacy Policy erstellen

### Phase 4: Testing & Deployment (Woche 7-8)
1. Backend Tests (Unit + Integration)
2. Frontend Tests (E2E)
3. Load Testing (1000+ simulierte Nutzer)
4. Deployment auf Produktions-Server
5. Monitoring aufsetzen

---

## 9. Kosten-Schätzung (Non-Profit Budget)

### Minimale Infrastruktur (für 1000 Nutzer):

| Service | Provider | Kosten/Monat |
|---------|----------|--------------|
| **Server** | Hetzner CPX21 | 5,83€ |
| **Domain** | Namecheap .org | 1€ |
| **SSL Zertifikat** | Let's Encrypt | GRATIS |
| **CDN** | Cloudflare Free | GRATIS |
| **Monitoring** | UptimeRobot Free | GRATIS |
| **Backup Storage** | Hetzner Storage Box | 3,20€ |
| **TOTAL** | | **~10€/Monat** |

**Jährlich:** ~120€

**Alternativ:** Komplett kostenlos mit Free Tiers (Railway/Render) - aber limitiert auf ~500 Nutzer.

---

## 10. Technologie-Stack (Final)

### Frontend (bleibt größtenteils)
- ✅ React 18 + TypeScript
- ✅ Vite
- ✅ Tailwind CSS
- ✅ Zustand (mit API sync)
- ✅ React Router
- ✅ Framer Motion
- ❌ NEU: Axios/Fetch API wrapper
- ❌ NEU: React Query (optional, für Cache)

### Backend (NEU)
- Node.js 20+ LTS
- **Framework:** Express.js oder Fastify
- **ORM:** Prisma (TypeScript-native) oder Drizzle
- **Auth:** jsonwebtoken (JWT)
- **Validation:** Zod
- **Logging:** Winston oder Pino

### Datenbank (NEU)
- **Primary:** PostgreSQL 15+
- **Cache:** Redis (optional, für Sessions)

### DevOps
- **Container:** Docker + Docker Compose
- **CI/CD:** GitHub Actions (free)
- **Monitoring:** Grafana + Prometheus (self-hosted, free)

---

## 11. Privacy-First Features (Besser als DSGVO)

### Was das Projekt besonders macht:

1. **Keine unnötigen Daten:**
   - ❌ Keine Email-Pflicht
   - ❌ Keine echten Namen
   - ❌ Keine Telefonnummern
   - ❌ Keine Social Media Links
   - ✅ Nur Username + Passwort (optional!)

2. **User-Kontrolle:**
   - ✅ Anonymes Spielen als Standard
   - ✅ Ein-Klick Daten-Export
   - ✅ Ein-Klick Account-Löschung
   - ✅ Granulare Privacy-Settings

3. **Transparenz:**
   - ✅ Open Source (Code einsehbar)
   - ✅ Klare Privacy Policy
   - ✅ Keine Hidden Tracking
   - ✅ Selbst-Hosting möglich

4. **Daten-Sparsamkeit:**
   - ✅ Minimale Datengröße (~10 KB/User)
   - ✅ Auto-Deletion inaktiver Accounts
   - ✅ Keine Third-Party Services
   - ✅ Lokales Hosting (EU-Server)

---

## 12. Risiken & Mitigation

| Risiko | Wahrscheinlichkeit | Impact | Mitigation |
|--------|-------------------|--------|------------|
| Server-Ausfall | Mittel | Hoch | Backups, Monitoring, Health Checks |
| DDoS Angriff | Niedrig | Hoch | Rate Limiting, Cloudflare Protection |
| Daten-Leak | Niedrig | Kritisch | Verschlüsselung, kein PII speichern |
| Hohe Last (>2000 User) | Mittel | Mittel | Auto-Scaling, Load Balancer |
| DSGVO-Verstoß | Niedrig | Hoch | Rechts-Beratung, Privacy Audit |

---

## Fazit

### Kern-Änderungen für 1000+ Spieler:

1. **Backend API erstellen** (Node.js + Express)
2. **PostgreSQL Datenbank** aufsetzen
3. **Authentifizierung** implementieren (optional + anonym)
4. **Frontend-Stores** für API-Sync umbauen
5. **DSGVO-Compliance** UI/Features hinzufügen
6. **Server deployen** (10€/Monat oder Free Tier)

### Aufwand:
- **Entwicklungszeit:** 5-8 Wochen Vollzeit
- **Kosten:** 10-120€/Jahr (je nach Wahl)
- **Komplexität:** Mittel (machbar für erfahrene Fullstack-Dev)

### Empfehlung:
✅ **Starten mit Free Tier** (Railway/Render) für Prototyp
✅ **Später migrieren** zu self-hosted wenn >500 Nutzer
✅ **Privacy-First Approach** beibehalten
✅ **Schrittweise umbauen** (nicht alles auf einmal)

Die Architektur ist realistisch umsetzbar für ein Non-Profit Projekt! 🚀
