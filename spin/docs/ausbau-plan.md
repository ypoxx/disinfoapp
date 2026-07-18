# SPIN Ausbau-Programm — 135 Techniken, adaptive Engine, R1–R7

*Dachplan für den Vollausbau der App auf Basis der Persuasions-Taxonomie v21.0.1 (135 Knoten, 171 Kanten, 44 Lexikon-Begriffe). Baut auf der [Content-Offensive](./content-offensive-plan.md) auf und ersetzt deren Phasenplan; ihre Qualitätsregeln (Framing-Reframe, Schwierigkeits-Rubrik, Distraktor-Regeln, Validierungsskript) werden übernommen und erweitert.*

**Product-Owner-Entscheidungen (fixiert):**
1. Frontier-Begriffe: Evidenz-Label auf jedem Eintrag **plus** eigenes Radar-Regal.
2. Kompetenz-Kalibrierung: **komplett verdeckt** (kein Score-Screen, kein Reveal); ein transparenter Hinweis „SPIN passt Auswahl und Schwierigkeit automatisch an dein Niveau an" in den Einstellungen.
3. Umfang: **alle 135 Taxonomie-Begriffe**, inkl. Zwang-&-Kontrolle-Cluster mit ernster Rahmung.
4. Sprachen: **erst DE/EN in Perfektion**, die 7 weiteren Sprachen gesammelt am Ende (R7). (Ist-Zustand bestätigt: i18n bindet ohnehin nur de/en ein.)
5. **Abweichung von der Content-Offensive:** Mehrfachauswahl wird **gebaut** (nicht wegstandardisiert). Grund: PO-Entscheid nach Nutzertest (Grading-Bug soll durch echte Interaktion behoben werden, nicht durch Content-Konvertierung) und das Seziertisch-Feature (R6) braucht „alle Techniken markieren" als Königsdisziplin. Single-Answer bleibt **Default** für quick-check/technique-match/response-choice/fill-blank/scenario-quiz; Mehrfachauswahl ist das definierte Format für spot-the-flag und Seziertisch-Fälle.

---

## Releases

| R | Name | Inhalt | Definition of Done |
|---|---|---|---|
| **R1** | Ehrliches Quiz | Mehrfachauswahl mit Prüfen-Schritt + Teilpunkten; sichtbarer Verdict-Block (Richtig/Falsch/Teilweise) mit „Deine Wahl"/„Lösung"/„Übersehen"; gemeinsame Quiz-Feedback-Komponente (Session-Runner + Diagnostic); Badge-Staffelung statt hartem 27er-Wert; Content-Lint v1 (`scripts/validate-exercises.mjs`); Sanierung defekter Antwortschlüssel (qc-2/qc-5 retire, qc-3 Key prüfen); Doku-Korrektur Sprachen | Zustandsmatrix im Browser grün (hell/dunkel, 375px/Desktop, reduced motion); build+lint+tests grün |
| **R2** | Kluge Session | Engine-Must-haves der Content-Offensive: pro-Übung No-Repeat-Memory (exerciseId + Cooldown 21 Tage), `primaryTechniqueId`, Gating auf eingeführte Techniken, Difficulty-Band ±1; dazu: verdeckte Kalibrierung (Diagnostic-Score-Screen entfällt), Flow-Korridor 75–85 %, Erkenntnistreppe (Recognition→Application→Ethik über die 6 Typen), dynamische Review-Quote + Auffrischen-Modus, tote `technique-quiz.ts` integrieren, 16 validierte Sample-Übungen einbauen, `timeLimit` entfernen, Integritäts-Satz in Einstellungen | Simulationstests mit Kunstprofilen: Korridor gehalten, kein Review-Verfall bei 135 Techniken, 21-Tage-No-Repeat hält |
| **R3** | Neues Regal | Kategorien-Neuordnung (~9–10) mit Farbtokens + Labels; Lernpfade (`content/paths.ts` + UI, ersetzt phases.ts-Idee); Evidenz-Stufen (Belegt/Gemischt/Vorläufig/Frontier) + Radar-Regal; Generator + Override-Schicht aus Taxonomie-JSON; **Pilotwelle: 10 Tier-1-Einträge** durch die volle Produktionslinie | Pilot-Einträge bestehen alle Gates; Persona-Panel-Test; Screenshots an PO |
| **R4** | Welle 1 | Tier-1-Rest + alle Tier-3-Ausbauten bestehender Einträge; Bestands-Sanierung nach Content-Offensive-Verdikten (6 quick-checks reframen); Blindprüfung auch der Alt-Beispiele | Prüfprotokolle vollständig; Stichproben-Audit |
| **R5** | Welle 2 | Tier 2 + alle Radar/Frontier-Begriffe (eigene Fragetypen: Begriffszuordnung, Forschungsstand); 44 Lexikon-Zuordnungsübungen | Evidenz-Ehrlichkeits-Audit über alle Frontier-Einträge |
| **R6** | Welle 3 | Zwang & Kontrolle (Ernstmodus: eigene Kategorie, reduzierte Gamification, nüchterner Stil); Seziertisch (Fall der Woche, scenario-quiz + Mehrfachauswahl); Präzisions-Feedback an Erklärungen; Vollständigkeits-Audit 135/135 | Jede Technik ≥3 Übungen über ≥2 Schwierigkeitsbänder; Persona-Stichprobentest bestanden |
| **R7** | Sprachen | HU/PL/SK/HR/EL/MK/CNR für Interface + Content; Rückübersetzungs-Checks; Sprachumschalter aktivieren | Sprachweise aktivierbar, keine sichtbaren Teilübersetzungen |

Abhängigkeiten: R1 → R2 → (R3 Architektur ‖ möglich) → R4 → R5 → R6 → R7. Content-Wellen erst nach bestandener Pilotwelle (Golden Set).

---

## Qualitätsregeln (verbindlich für jeden Eintrag / jede Übung)

Aus der Content-Offensive übernommen (dort §3–§5, §8): Framing-Reframe (Technik benennen oder PR-Sessel, nie echt/fake-Urteil; verbotene Strings), Distraktor-Regel (gleiche Kategorie / verwechselbarer Nachbar, keine Gimmes), Schwierigkeits-Rubrik mit Hard Gates (kein 2-Optionen-„advanced"), Neutralitäts-Note, QA-Checkliste, Validierungsskript.

**Erweiterungen dieses Programms:**
1. **Beispiel-Regel:** Jedes Beispiel nennt Kanal + Rollen (wer → zu wem, Situation). Generische Beispiele fallen durch.
2. **Blindprüfung der Beispiele:** Zwei unabhängige Prüf-Agenten erhalten nur das Beispiel (ohne Techniknamen) + die 135er-Liste und müssen die Zieltechnik als Haupttreffer identifizieren. Beide müssen treffen, sonst zurück an den Redakteur.
3. **Doppelter Takeaway:** Jede Erklärung endet mit *legitim einsetzen* und *erkennen & kontern*.
4. **Evidenz-Ehrlichkeit:** Konfidenz/`provisional` wörtlich aus der Taxonomie; Frontier-Übungen prüfen Begriffswissen, nie behauptete Wirkung.
5. **Sprachcharta DE/EN** (R3): Register präzise/kollegial/nie belehrend, Floskel-Verbotsliste (maschinell geprüft), Terminologie-Glossar (was bleibt englisch).
6. **Prüfprotokoll:** Pro Eintrag ein versioniertes JSON-Protokoll aller Prüfungen unter `content/qa/`.
7. **Mehrfachauswahl-Invariante:** `correctAnswers.length > 1` nur bei `spot-the-flag` und Seziertisch-Fällen; alle anderen Typen single-answer (Content-Lint).

**Produktionslinie pro Eintrag** (parallelisierbar): Generator (Taxonomie-Basisdaten) → Redakteur (Charta) → Beispiel-Schmiede (3 Kandidaten) → Blindprüfung ×2 → Distraktor-Prüfung → Fach-Check gegen Taxonomie-Quellen → Stil-Lektorat → Prüfprotokoll → Merge.

---

## UX-Verifikationsprotokoll

Jede UI-Änderung wird per Playwright im echten Browser abgenommen: Zustandsmatrix (default / ausgewählt / Mehrfach teilweise / vor Bestätigung / richtig / falsch / gemischt), hell/dunkel, 375 px/Desktop, reduced motion, Screenreader-Ansagen. Regeln: kein Zustand ohne eindeutiges nächstes Signal; vor „Prüfen" jede Auswahl umkehrbar; Doppelklick zerstört nichts. Screenshot-Serien pro Release an den PO.

**Persona-Panel** (Stichprobentests, Feedback fließt als Korrektur zurück): PR-Leiterin mit 15 Jahren Erfahrung (prüft Präzision, reagiert allergisch auf Plattes) · Junior-Kommunikator (prüft Verständlichkeit, Spaß, Motivation) · Wissenschaftsskeptiker (prüft Evidenz-Ehrlichkeit) · UX-kritischer Vielnutzer (prüft Flow, Wiederholungsgefühl, Überraschung).

---

## Statusverfolgung

| Release | Status |
|---|---|
| R1 | in Arbeit |
| R2–R7 | ausstehend |

*Dieses Dokument wird pro Release aktualisiert (Status, Abweichungen, Audit-Ergebnisse).*
