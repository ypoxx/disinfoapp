# SPIN Content-Offensive – Plan für den Produktausbau

*Für den Product Owner. Ziel: aus 22 „Disinfo-Detektor"-Übungen ein professionelles Persuasions-Curriculum mit ~200 Übungen machen, das sich für ~300 tägliche Nutzer drei Wochen lang nicht wiederholt.*

---

## 1. Ausgangslage (die harten Zahlen)

Der Bestand ist klein, thematisch schief und teilweise schlicht falsch geframt.

**Pool-Größe:** 22 Übungen. Eine Tagessession zieht 7 Items aus genau diesem Pool. Der Session-Builder mischt jede Session alle 22 Items neu durch, ohne pro-Übung-Historie – ein aktiver Nutzer hat den gesamten Inhalt in **~4 Tagen** gesehen und wiederholt danach.

**Typ-Verteilung (22):**

| Typ | Anzahl |
|---|---|
| quick-check | 6 |
| technique-match | 5 |
| response-choice | 5 |
| spot-the-flag | 3 |
| fill-blank | 3 |
| scenario-quiz | 0 |

**Schwierigkeits-Verteilung (22):** beginner 5, intermediate 8, advanced 7, expert 2. Die advanced-Quote ist künstlich aufgebläht: mehrere „advanced"-Items sind 2-Optionen-Binärfragen (siehe §5, Hard Gates).

**Technik-Abdeckung: 12 von 27 Techniken haben ≥1 Übung. 15 haben NULL:**
priming, reciprocity, liking, consistency, ad_hominem, straw_man, equivocation, repetition, illusory_truth_effect, pacing_and_leading, embedded_commands, microtargeting, dark_patterns, nudging, ai_persuasion.

Verteilung bei den abgedeckten Techniken (über `relatedTechniques`): framing 7, authority 7, social_proof 5, scarcity 4, emotional_appeal 4, narrative_persuasion 3, reactance_theory 3, anchoring 2, digital_influence 2, visual_manipulation 2, false_dichotomy 1, synthetic_media 1. → Cluster auf 2–3 Techniken, langer Schwanz mit 0–1.

**Framing-Audit (Kern des Problems):** Die 22 Items zerfallen sauber in drei Lager, die fast 1:1 auf den Typ abbilden.
- **DETECTION (9 Items – die alte DisinfoApp): alle 6 quick-checks + 3 spot-the-flags.** Jeder quick-check fragt „Welche Technik wird hier eingesetzt?", bietet aber nur die Binärentscheidung *„Manipulationstechniken erkennbar"* vs. *„Sachliche Kommunikation"* – ein Faktencheck-Urteil, keine Technik. Erklärungen verstärken das („Klassische Manipulationstechniken", „Warnsignale"). spot-the-flags sind derselbe Reflex in HD („Lehrbuchbeispiel für manipulative Kommunikation").
- **RECOGNITION (5 Items): die technique-matches.** Bereits gut ausgerichtet – benannte Technik-Optionen (Knappheit, Sozialer Beweis, Framing, Autorität), Profi-Framing.
- **APPLICATION (8 Items): 5 response-choices + 3 fill-blanks.** Setzen den Lernenden korrekt in den PR-Sessel („Was tust du?") und belohnen Craft-Konzepte (Prebunking/Inoculation, Streisand-Effekt).

**Netto: nur 13 von 22 Items passen zur Neupositionierung. 9 sind noch die alte App.** Verdikt-Zählung des Audits: **12 keep, 6 revise, 4 retire.**

**Bekannte Datenfehler:** 3 Items sind Multi-Answer (`correctAnswers` > 1 Index), aber die Session-UI wertet single-choice: ein Klick auf *eine* richtige Option markiert das ganze Item korrekt (Grading-Bug). Drei quick-checks haben einen fragwürdigen Key: qc-2 (gespoofter Handle @raborki → als „sachlich/korrekt" gewertet), qc-3 (envirotrust), qc-5 (legitime Umfrage).

---

## 2. Zielbild & Sizing-Modell (Herleitung)

**Ziel:** Für einen reifen Tagesnutzer wiederholt sich **innerhalb von 21 Tagen (3 Wochen) keine Übung**. Das ist das Anti-Langeweile-/Retention-Ziel für ~300 tägliche Nutzer. (Heute: Wiederholung nach ~4 Tagen.)

**Schritt 1 – naiver Boden.** 7 Items/Session/Tag × 21 Tage = **147 einzigartige Items** – *wenn* der Pool perfekt fungibel wäre (jedes Item an jedem Tag ziehbar).

**Schritt 2 – Gating-Fragmentierung.** Der Pool ist nicht fungibel. Nach den Engine-Upgrades (§7) ist ein Item an einem gegebenen Tag nur ziehbar, wenn (a) seine Technik bereits eingeführt wurde, (b) seine Schwierigkeit im ±1-Band der Nutzer-Mastery liegt und (c) es außerhalb seines Cooldown-Fensters ist. Für einen fortgeschrittenen Nutzer sind praktisch nur ~65–75 % des Pools an einem beliebigen Tag eligibel. Fragmentierungsfaktor konservativ **1,4×**.

> 147 × 1,4 ≈ **206 Items.**

**Schritt 3 – Zielgröße: 210 Übungen** (aufgerundet, gibt Puffer für unebene Technik-Cluster). Das ist ein **~9,5×-Ausbau** von 22 → 210, also **+188 neue Items**.

**Warum nicht kleiner:** Bei 147 exakt reißt jede Gating-Reibung sofort die 21-Tage-Garantie. Warum nicht viel größer: Autorenkosten skalieren linear und jedes Item braucht adversariales QA (§8); 210 ist der kleinste Pool, der das Ziel robust hält.

---

## 3. Ton & Reframing (Positionierungs-Entscheidung)

**Positionierung:** „Dies sind die legitimen Hebel professioneller Überzeugung. Jeder Hebel hat eine ethische und eine manipulative Einstellung – ein PR-Profi muss den Hebel erkennen UND wissen, wo die ethische Linie liegt." Der Pool liest sich als **Handwerks-Curriculum für Kommunikationsprofis**, NICHT als Fake-News-Detektor.

**Ziel-Mischung:** ~45 % Recognition, ~45 % Application, ~10 % Ethik-Grenze. Der ethische Rahmen wird in der **Erklärung jedes Items** getragen, nicht in der Frage.

**Reframing-Regel für jedes Detection-Bestandsitem (mechanisch anwenden):**
1. **FRAGE** benennt entweder die Technik („Welche Technik dominiert hier?") oder setzt den Lernenden in den PR-Sessel („Was tust du?"). Nie eine echt/fake-Urteilsfrage.
2. **OPTIONEN** sind benannte Techniken (Recognition) oder professionelle Handlungszüge (Application). Die Strings *„Manipulationstechniken erkennbar"* / *„Sachliche Kommunikation"* sind **verboten** – das ist ein Faktencheck-Urteil, keine Technik.
3. **ERKLÄRUNG** lehrt den Mechanismus (warum der Hebel wirkt) und seine ethische Grenze (legitim vs. manipulativ), nicht „Warnsignale, dass dies Fake ist".
4. Trägt das Item keine identifizierbare Technik (qc-2, qc-5), **RETIRE** – ein leeres Item wird nicht reframed. Nur gezielt neu bauen, wenn das Szenario selbst eine lehrbare Technik enthält (z. B. qc-2 um die gespoofte-Handle-Impersonation als Autoritäts-/Liking-Item neu aufbauen).
5. **Rohszenario als Seed wiederverwenden:** qc-1 (5G-Dringlichkeit) → technique-match auf reactance/urgency oder ethics-boundary spot-the-flag; qc-6 (Pump-and-Dump) → scarcity/urgency-Recognition. Die Szenarien sind gut; nur die Frage-/Options-/Framing-Schicht ist falsch.

**Neutralitäts-Note:** neutrale Business-/Comms-Szenarien (Launch, Krise, Media-Q&A, Kampagne) vor politisch aufgeladenen (tm-4 Immigration) bevorzugen – außer die Technik verlangt den geladenen Rahmen zwingend.

**Konkrete Verdikte auf den Bestand:** 12 keep (technique-matches, response-choices, fill-blanks), 6 revise (die 6 quick-checks: nach Regel 1–3 reframen), 4 retire (qc-2 & qc-5 leer → raus; 2 spot-the-flags von „ist das Fake" auf „wo überschreitet es die Grenze" umbauen oder ersetzen).

---

## 4. Übungstypen-Spezifikation

| Typ | Prüft | Optionen | Distraktor-Regel | Punkte / Limit | Schwierigkeit |
|---|---|---|---|---|---|
| **quick-check** | Schnelle Einzeltechnik-Erkennung aus Oberflächen-Cues (<10s). Der Session-Opener. | 2–4, **jede Option eine benannte Technik** (nie echt/fake – Kern-Reframe) | Distraktoren aus **derselben Kategorie** (cognitive_bias, social_dynamics…) → plausibel, aber genau einer passt zu den Cues | 5 P / 10s | **nur beginner/intermediate** |
| **technique-match** | Mechanismus-Recognition: Comms-Szenario → treibende Technik. Best-ausgerichteter Typ. | genau 4, alle benannte Techniken, einer eindeutig korrekt | **alle 3 Distraktoren plausibel** (gleiche Kategorie / häufig verwechselter Nachbar, z. B. scarcity vs. social_proof vs. anchoring). **Keine Gimme-Distraktoren** (Dark Patterns gegen eine Schlagzeilen-Statistik) – behebt tm-5 | 10 P | beginner→advanced (skaliert mit Subtilität & Near-Miss der Distraktoren) |
| **response-choice** | Application: PR-Sessel, professionell korrekter Zug. | 4 plausible Profi-Aktionen, genau eine best-practice | – | – | intermediate→expert |
| **fill-blank** | Vokabular + kausaler Mechanismus (die Schlüsselphrase). | 4 Kandidaten-Begriffe | Blank in einem Satz, der die Technik in Aktion beschreibt | – | meist intermediate |
| **spot-the-flag** | **Ethik-Grenze** (reframed von „spot the disinfo"): wo kippt legitime Persuasion in Manipulation/Vertrauens-/Rechtsrisiko. | 4 Szenario-Elemente, eines überschreitet die Linie | Szenario enthält **ein** Grenzelement (fabrizierte Popularität, Fake-Countdown, geborgte Autorität, unoffengelegtes Geschenk). Frage: „Welches Element überschreitet die ethische/rechtliche Grenze?" **NICHT** „ist das Fake" | – | advanced |
| **scenario-quiz** *(NEU, heute 0)* | Multi-Step-Transfer für die Expert-Stufe: primären Treiber unter mehreren Techniken isolieren ODER optimalen Zug unter konkurrierenden Constraints (Wirksamkeit + Ethik + Recht). | 4, alle verteidigbar aussehend, einer optimal | Szenario schichtet 2–3 Techniken. Frage nach dem DOMINANTEN Treiber / einzig besten Zug | – | expert (und hartes advanced) |

**Invariante für alle Typen: `correctAnswers.length === 1`** (siehe §7, Multi-Select-Entscheidung).

---

## 5. Schwierigkeits-Rubrik

Vier Bänder mit konkreten, testbaren Kriterien (behebt die aktuelle Inflation, in der 2-Optionen-Binärfragen „advanced" hießen).

- **BEGINNER:** genau EINE Technik, **blatant** im Szenario (explizite Cue-Wörter), Technik in den Optionen benannt. Kein Domänenwissen über die Technik hinaus. 2–3 distinkte Optionen. Antwort in <10s aus Oberflächen-Cues ableitbar. Typen: quick-check, leichter technique-match.
- **INTERMEDIATE:** EINE dominante Technik unter **plausiblen, verwechselbaren Distraktoren** (gleiche Kategorie / häufig verwechselter Nachbar) ODER eine gerade Application-Wahl. Erfordert Kenntnis des **Mechanismus**, nicht nur des Labels. 4 Optionen. Typen: technique-match, fill-blank, leichter response-choice.
- **ADVANCED:** Technik ist **subtil/eingebettet** (keine Cue-Wörter), Distraktoren sind **Near-Misses**, ODER die Application verlangt Abwägen eines Second-Order-Effekts (Reactance-Backfire, Streisand, Vertrauens-/Rechtsexposition). Multi-Satz-Szenario. Typen: response-choice, spot-the-flag, harter technique-match.
- **EXPERT:** **mehrere Techniken co-präsent**, Lernender isoliert den PRIMÄREN Treiber, ODER optimaler Zug unter konkurrierenden Constraints (Wirksamkeit vs. Ethik vs. Recht). Nur subtile Hebel (priming, equivocation, illusory_truth_effect, pacing_and_leading). Keine Oberflächen-Cues. Typ: scenario-quiz.

**HARD GATES (Label sofort ungültig):**
- Ein 2-Optionen-Item kann **nie** advanced/expert sein.
- Ein beginner-Item darf **nie** Trade-off-Abwägung verlangen.
- Ein Item, dessen Antwort „welches davon ist echt" ist, ist **keine** Schwierigkeit – es ist ein Detection-Item und muss reframed oder retired werden.

---

## 6. Ziel-Matrix (210 Übungen)

**Typ-Ziel** (45 % Recognition / 45 % Application / 10 % Ethik):

| Typ | Ziel | Anteil | Lager |
|---|---|---|---|
| quick-check | 40 | 19 % | Recognition |
| technique-match | 55 | 26 % | Recognition |
| response-choice | 48 | 23 % | Application |
| fill-blank | 25 | 12 % | Application |
| scenario-quiz | 20 | 9,5 % | Application |
| spot-the-flag | 22 | 10,5 % | Ethik |
| **Summe** | **210** | | Recog 45 % / App 44,5 % / Ethik 10,5 % |

**Schwierigkeits-Ziel:** beginner 42 (20 %), intermediate 74 (35 %), advanced 63 (30 %), expert 31 (15 %). (quick-checks füllen beginner/intermediate; scenario-quiz füllt expert; spot-the-flags füllen advanced.)

**Technik-Ziel** – Grundlast **min. 6 Übungen/Technik** über ≥3 Typen und ≥2 Schwierigkeitsbänder; Kern-/Hoch-Wirksamkeits-Techniken 9–10. 27 Techniken × Ø ~7,8 ≈ 210.

| Priorität | Techniken | Übungen je |
|---|---|---|
| **Kern** (hohe Wirksamkeit, PR-Alltag) | framing, authority, social_proof, scarcity, emotional_appeal, anchoring, reciprocity, nudging | 9–10 |
| **Standard** | narrative_persuasion, reactance_theory, consistency, liking, priming, false_dichotomy, microtargeting, dark_patterns, digital_influence, visual_manipulation, repetition | 7–8 |
| **Nische / subtil** | ad_hominem, straw_man, equivocation, illusory_truth_effect, pacing_and_leading, embedded_commands, synthetic_media, ai_persuasion | 6 |

**Deckungs-Sprung:** von 12/27 auf **27/27** Techniken mit ≥6 Items. Die 15 Null-Techniken sind der Löwenanteil der +188 neuen Items (~110 davon), der Rest verdichtet die 12 dünn abgedeckten (v. a. false_dichotomy 1→7, synthetic_media 1→6, anchoring 2→9).

**`primaryTechniqueId`-Konvention:** jedes Item zählt in der Matrix **nur zu seiner primären Technik** (nicht zu allen `relatedTechniques`) – sonst verschmiert die Deckung wie heute (framing wird 7-fach gezählt, obwohl es oft nur Nebentechnik ist).

---

## 7. Engine-Anpassungen

Der größere Pool ist **wertlos ohne Selektions-Upgrades**. Heute wird nichts pro Übung protokolliert; der Store ist nur nach `techniqueId` gekeyt.

### Must-have (blockiert die 21-Tage-Garantie ohne diese)

1. **Pro-Übung No-Repeat-Memory (nach `exerciseId`).** Heute existiert *keine* Übungs-Granularität: knowledge-store ist nach techniqueId gekeyt, progress-store hält nur Aggregat-Zähler (xp, streak, sessionsCompleted, totalQuestionsAnswered), `ItemResult` trägt itemIndex + techniqueId, aber **keine exerciseId**. → `exerciseId` in `ItemResult` aufnehmen, beantwortete IDs mit Zeitstempel persistieren, ein Cooldown-/Exklusionsfenster (Ziel: 21 Tage) in der Selektion erzwingen. **Ohne das ist der 210er-Pool verschwendet** (Items tauchen zufällig session-über-session wieder auf, memorierte Items füttern falsche „correct" in SM-2).
2. **`primaryTechniqueId` pro Übung (explizites Tag).** Heute kreditiert `handleAnswer` ALLE `relatedTechniques` gleich in SM-2 und session-runner nutzt implizit `relatedTechniques[0]` als „die" Technik (Farbe, Attribution). In einem Multi-Technik-Pool verschmiert das Mastery. → `primaryTechniqueId` macht Gating, Interleaving, Mastery-Kredit und Kategorie-Färbung deterministisch. *(Voraussetzung für §6-Matrix.)*
3. **Gating auf eingeführte Techniken.** Heute ist `availableExercises` = alle Übungen unabhängig vom Wissensstand; nur 'learn'/'review' respektieren `knownIds`. → Selektion muss Übungs-Techniken mit `Object.keys(knowledgeState)` schneiden; sonst wird der Nutzer ab Tag 1 zu nie eingeführten Techniken abgefragt (bei 27-Technik-Deckung Routine).
4. **Difficulty-Gating, das `exercise.difficulty` liest.** Heute **tot** für Übungen: der einzige Difficulty-Sort (session-builder.ts:76-79) rankt unbeschaubte *Techniken*; `exercise.difficulty` wird bei der Übungs-Auswahl nie gelesen. → Selektion auf das ±1-Mastery-Band biasen (kein 'expert'-Item bei masteryLevel-Band beginner). Nötig für den beginner→expert-Spannbogen.

### Entscheidung: Multi-Select → **NICHT bauen, auf Single-Answer standardisieren**

Die gesamte session-runner-UX ist single-tap-committed: ein Tap setzt `selectedAnswer`, zeigt sofort Feedback, sperrt das Item (session-runner.tsx:73-98, 379-401). Kein Submit-Affordance, keine Multi-Select-Akkumulation → ein Multi-Answer-Item ist heute durch Tappen *einer* richtigen Option grading-bar (der Bug). **Empfehlung: `correctAnswers.length === 1` als Invariante per Content-Lint erzwingen und die 3 bestehenden Multi-Answer-Items auf Single-Answer konvertieren.** Content-only-Fix, null Engine-/UI-Risiko, hält das Grading über 210 Items ehrlich. Bonus: die scenario-quiz-Regel „ein primäres Urteil erzwingen" umgeht denselben Bug baulich. *(Echtes Multi-Select nur bauen, wenn ein echter pädagogischer „select all"-Bedarf entsteht – bei nur 3 Items und Single-Tap-Microlearning nicht gerechtfertigt.)*

### Nice-to-have (nicht blockierend)

5. **`timeLimit` & `points` verdrahten oder entfernen.** Beide werden nirgends gelesen (kein Timer im session-runner; scoring.ts ignoriert `points` zugunsten flacher Konstanten). Entscheidung explizit treffen: entweder als Feature implementieren oder als totes Schema droppen. Für 210 Items **empfohlen: Schema behalten, aber Autoren-Konvention festschreiben** (quick-check 5 P/10s etc.), Verdrahtung später.
6. **Phasen-basierte Sequenzierung.** `phases.ts` wird von **null** Dateien in src/ importiert – Standalone-Daten (techniqueId→Phase: attention→…→justification). Könnte ein Curriculum gaten (Techniken in Phasen-Reihenfolge einführen) statt der heutigen „einfachste unbeschaubte Technik"-Heuristik. Nice-to-have.

---

## 8. Qualitäts-Rubrik & Autoren-Workflow

**Pro-Item-QA-Checkliste (jede Übung muss ALLE bestehen):**
1. **Framing:** Frage benennt Technik oder setzt in den PR-Sessel – kein echt/fake-Urteil. Verbotene Strings abwesend.
2. **Optionen:** benannte Techniken (Recognition) oder Profi-Aktionen (Application); genau eine korrekt; `correctAnswers.length === 1`.
3. **Distraktoren:** alle plausibel (gleiche Kategorie / verwechselter Nachbar); keine Gimmes.
4. **Erklärung:** lehrt Mechanismus **und** ethische Grenze (legitim vs. manipulativ).
5. **Schwierigkeit:** erfüllt das Band-Kriterium; kein Hard-Gate verletzt (kein 2-Optionen-„advanced").
6. **`primaryTechniqueId`** gesetzt und in den `relatedTechniques` enthalten.
7. **Neutralität:** Business-/Comms-Szenario, außer die Technik verlangt einen geladenen Rahmen.
8. **DE + EN** beide vorhanden; DE führend.

**Validierungsskript** (`scripts/validate-exercises.ts`, blockiert Build): prüft mechanisch, was maschinell prüfbar ist —
- `correctAnswers.length === 1` für **jedes** Item (fängt den Multi-Answer-Bug);
- `options.length` im Typ-Range (quick-check 2–4, technique-match/response-choice/fill-blank/spot-the-flag/scenario-quiz = 4);
- Hard-Gate: `options.length < 3` ⇒ difficulty ∈ {beginner};
- verbotene Options-Strings („Manipulationstechniken erkennbar", „Sachliche Kommunikation") ⇒ Fail;
- `primaryTechniqueId` gesetzt **und** ⊆ `relatedTechniques`;
- alle `relatedTechniques` referenzieren existierende Technik-IDs;
- `de` in jeder `LocalizedText` nicht leer;
- eindeutige `id`; `points`/`timeLimit` nach Typ-Konvention.

**Adversariales QA (menschlich, was das Skript nicht kann):** ein zweiter Autor spielt den Distraktor-Advokaten – kann er einen Distraktor als „auch korrekt" verteidigen? Dann ist das Item mehrdeutig und geht zurück. Genau dieses Gate haben die 4 Sample-Techniken bestanden (§Schluss).

**Autoren-Loop:** Technik-Datei als Seed (name, description, examples[], warningNeurons[], evidence) → Item entwerfen → Checkliste → Validierungsskript → adversariales QA → merge.

---

## 9. Phasenplan (unabhängig mergebar, MVP zuerst)

**Phase 0 – Fundament (Engine + Lint), 1 Sprint.** Must-haves #1–4 aus §7 + Validierungsskript (§8) + Konvertierung der 3 Multi-Answer-Items. *Kein neuer Content.* Danach ist der Pool sicher erweiterbar; ohne dies verpufft jeder neue Content. **Mergebar allein.**

**Phase 1 – Bestand sanieren, 0,5 Sprint.** Die 22 nach §3-Verdikten: 12 keep, 6 quick-checks revise, 4 retire (2 leere raus, 2 spot-the-flags umbauen). Ergebnis: ~18 saubere Items, alle grün im Validierungsskript. **Mergebar allein.**

**Phase 2 – MVP-Content-Batch: die 15 Null-Techniken, ~2 Sprints.** Je 6 Items für die 15 unabgedeckten Techniken = **~90 neue Items** → Deckung 12/27 → 27/27. Priorität, weil „Nutzer wird zu nie gesehener Technik abgefragt" nach Gating (#3) sonst Content-Löcher erzeugt. Batchweise mergebar (je 3–4 Techniken).

**Phase 3 – Verdichten auf 210, ~2 Sprints.** Kern-Techniken auf 9–10, dünne (false_dichotomy, synthetic_media, anchoring…) auffüllen, scenario-quiz-Typ (0→20) und spot-the-flag ethik-reframed (→22) aufbauen. Bringt den Pool auf ~210 und erfüllt die Typ-/Schwierigkeits-Matrix. Batchweise mergebar.

**Phase 4 – Nice-to-haves, opportunistisch.** timeLimit/points verdrahten (§7 #5), Phasen-Sequenzierung (§7 #6). Nicht blockierend für die 21-Tage-Garantie.

**Kritischer Pfad zur 21-Tage-Garantie: Phase 0 → 2 → 3.** Phase 1 und 4 parallelisierbar.

---

## 10. Offene Entscheidungen für den Product Owner

1. **Zielgröße 210 bestätigen?** Bei knapperem Autorenbudget ist 147 der harte Boden – aber ohne Fragmentierungspuffer reißt die 21-Tage-Garantie bei erster Gating-Reibung. Alternative: 21-Tage-Ziel auf 14 Tage senken → ~140 Items.
2. **Multi-Select final begraben?** Empfehlung: ja, Single-Answer-Invariante. Nur überstimmen, wenn ein echter „select all that apply"-Lernbedarf existiert (dann echtes State-/UI-Update im session-runner nötig).
3. **`timeLimit`/`points` – Feature oder totes Schema?** Empfehlung: Schema + Autoren-Konvention behalten, Verdrahtung als Phase 4. Alternativ jetzt ersatzlos droppen.
4. **Retire vs. Rebuild für qc-2/qc-5:** bestätigen, dass leere Detection-Items ersatzlos raus dürfen (statt erzwungenem Reframe).
5. **Politisch geladene Szenarien:** tm-4 (Immigration) neutralisieren oder als bewusste Ausnahme behalten? Empfehlung: neutralisieren, außer die Technik verlangt den Rahmen.
6. **Phasen-Curriculum (`phases.ts`) aktivieren?** Reihenfolge-Sequenzierung ist ein Produkt-Feature mit eigenem Design-Aufwand – als eigenes Vorhaben nach dem Pool-Ausbau bewerten.

---

*Proof: Als Beleg für die Autorierbarkeit wurde eine validierte Sample-Charge für vier bislang unabgedeckte Techniken erstellt – **priming, reciprocity, dark_patterns, nudging**. Alle vier haben das adversariale QA im ersten Durchgang bestanden (4/4), erfüllen die Single-Answer-Invariante, das Framing-Reframe (benannte Techniken statt echt/fake-Urteil) und die ethische-Grenze-Erklärung. Sie dienen als Muster für den Autoren-Loop in Phase 2.*
