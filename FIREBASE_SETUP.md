# Firebase Setup Guide – DisinfoApp

Diese Anleitung führt dich Schritt für Schritt durch die Einrichtung von Firebase für die DisinfoApp.
Du brauchst nur einen **Google-Account** und ca. **10 Minuten**.

---

## 1. Firebase-Projekt erstellen

1. Gehe zu [console.firebase.google.com](https://console.firebase.google.com)
2. Klicke **„Projekt hinzufügen"** (oder „Add project")
3. Projektname: z.B. `disinfoapp` (frei wählbar)
4. Google Analytics: **deaktivieren** (nicht benötigt) → „Projekt erstellen"
5. Warte, bis das Projekt erstellt ist → „Weiter"

---

## 2. Web-App registrieren

1. Klicke auf das **Web-Symbol** (`</>`) auf der Projekt-Übersichtsseite
2. App-Nickname: z.B. `DisinfoApp Web`
3. Firebase Hosting: **nicht** ankreuzen (wir nutzen Netlify)
4. Klicke **„App registrieren"**
5. Du siehst jetzt die **Firebase-Konfigurationswerte** – kopiere diese:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "disinfoapp-xxxxx.firebaseapp.com",
  projectId: "disinfoapp-xxxxx",
  storageBucket: "disinfoapp-xxxxx.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

## 3. Google Sign-In aktivieren

1. Im Firebase-Menü links: **Build → Authentication**
2. Klicke **„Los gehts"** (oder „Get started")
3. Tab **„Sign-in method"** → Klicke auf **„Google"**
4. Schalter auf **„Aktivieren"**
5. Wähle eine **Support-E-Mail** (deine eigene)
6. **Speichern**

---

## 4. Firestore-Datenbank erstellen

1. Im Firebase-Menü links: **Build → Firestore Database**
2. Klicke **„Datenbank erstellen"**
3. Standort: **europe-west3 (Frankfurt)** empfohlen
4. Sicherheitsregeln: Wähle **„Im Produktionsmodus starten"**
5. Klicke **„Erstellen"**

### Sicherheitsregeln konfigurieren

Gehe zu **Firestore → Regeln** und ersetze den Inhalt mit:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Nutzer können nur ihre eigenen Daten lesen/schreiben
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    // Alles andere blockieren
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Klicke **„Veröffentlichen"**.

---

## 5. Autorisierte Domains hinzufügen

1. **Authentication → Settings → Authorized domains**
2. Füge deine Netlify-Domain hinzu, z.B.:
   - `dein-app-name.netlify.app`
   - Ggf. deine Custom Domain

> `localhost` ist standardmäßig bereits autorisiert (für lokale Entwicklung).

---

## 6. Environment-Variablen setzen

### Lokal (Entwicklung)

Kopiere `.env.example` zu `.env` und fülle die Werte aus Schritt 2 ein:

```bash
cp .env.example .env
```

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=disinfoapp-xxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=disinfoapp-xxxxx
VITE_FIREBASE_STORAGE_BUCKET=disinfoapp-xxxxx.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

### Netlify (Produktion)

1. Gehe zu **Netlify → Site settings → Environment variables**
2. Füge alle 6 Variablen mit denselben Werten hinzu:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

---

## 7. Testen

1. `npm run dev` starten
2. Der „Mit Google anmelden"-Button sollte im Header erscheinen
3. Klicke darauf → Google-Login-Popup öffnet sich
4. Nach erfolgreicher Anmeldung: Avatar erscheint im Header
5. Lernfortschritte werden automatisch in Firestore synchronisiert

### Ohne Firebase

Die App funktioniert auch **ohne Firebase-Konfiguration**. Dann:
- Kein Login-Button sichtbar
- Fortschritte werden nur lokal im Browser gespeichert
- Daten gehen bei Browser-Bereinigung verloren

---

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Login-Popup öffnet sich nicht | Domain in Authorized Domains prüfen |
| `auth/unauthorized-domain` Error | Netlify-Domain zu Authorized Domains hinzufügen |
| Daten werden nicht gespeichert | Firestore-Regeln prüfen (Schritt 4) |
| Login-Button fehlt | `.env`-Variablen prüfen, Dev-Server neu starten |

---

## Datenschutz

Die App speichert **minimal Daten**:
- Firebase UID (anonyme ID)
- Profilbild-URL (für Avatar-Anzeige)
- Lernfortschritte (Quizze, Module, XP)

**Nicht gespeichert werden**: Name, E-Mail-Adresse, persönliche Daten.
