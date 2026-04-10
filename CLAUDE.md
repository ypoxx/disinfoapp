# Repository-Struktur

## Aktives Projekt: SPIN (`spin/`)

**SPIN** ist die aktive, produktive App. Alle Entwicklung, Bugfixes und Features betreffen ausschließlich `spin/`.

- Hauptverzeichnis: `spin/`
- Detaillierte Dokumentation: `spin/CLAUDE.md`
- Build & Deploy: Netlify baut aus `spin/` (siehe `netlify.toml` → `base = "spin"`)
- Commands: Immer `cd spin` zuerst, dann `npm run dev/build/lint`

## Archiv: Alte DisinfoApp (`src/`, `package.json`, `vite.config.ts`)

Die Dateien im Root (`src/`, `package.json`, `vite.config.ts`, `index.html`) gehören zur **alten DisinfoApp** — einer früheren Version, die durch SPIN ersetzt wurde.

**NICHT bearbeiten. NICHT bauen. NICHT deployen.**

Diese Dateien bleiben als Referenz im Repo, werden aber nicht mehr genutzt. Die `netlify.toml` ist auf `spin/` konfiguriert.

### Häufiger Fehler vermeiden

Wenn `npm run build` im Root-Verzeichnis ausgeführt wird, baut es die ALTE DisinfoApp. Das Richtige:

```bash
cd spin && npm run build    # SPIN bauen
cd spin && npm run dev      # SPIN Entwicklung
```
