// Welle R4: 3 Übungen für representativeness_heuristic (Repräsentativitätsheuristik).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4RepresentativenessHeuristic: Exercise[] = [
  {
    id: 'w4-representativeness_heuristic-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster trägt die Verdächtigung?',
      en: 'Which pattern is carrying the suspicion?',
    },
    scenario: {
      de: 'Krisenstab-Sitzung, nachdem interne Umbaupläne vorab bei einem Branchendienst gelandet sind. Der Personalvorstand → Krisenstab, du protokollierst für die Kommunikation: „Für mich ist klar, wo das herkommt: der neue Kollege im Social-Media-Team. Jung, auf seinen privaten Kanälen politisch laut, stellt in jedem Meeting kritische Fragen — genau so sehen Leaker aus." Die interne Auswertung der letzten Jahre, nach der fast alle Vorab-Veröffentlichungen auf unachtsame Weitergaben durch langjährige Führungskräfte zurückgingen, erwähnt er nicht.',
      en: 'Crisis-team meeting after internal restructuring plans surfaced early in a trade outlet. The chief HR officer addresses the crisis team while you take notes for comms: "It\'s obvious to me where this came from: the new guy on the social media team. Young, politically loud on his private channels, asks critical questions in every meeting — that is exactly what leakers look like." He does not mention the internal review of past years, which traced almost every premature disclosure to careless sharing by long-serving executives.',
    },
    options: [
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Schuld durch Assoziation', en: 'Guilt by association' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Repräsentativitätsheuristik: Die Wahrscheinlichkeit, dass jemand der Leaker ist, wird an der Ähnlichkeit zum Täter-Prototyp bemessen („genau so sehen Leaker aus") — während die Basisrate, also die interne Auswertung, wonach fast alle Fälle auf Führungskräfte zurückgingen, komplett unter den Tisch fällt. Legitim einsetzen: Typische Muster dürfen eine erste Hypothese liefern — professionell wird die Lagebewertung, wenn du sie sofort gegen die Fallstatistik hältst und die statistisch häufigste Erklärung zuerst prüfst. Erkennen und kontern: Sobald ein „Profil" eine Wahrscheinlichkeitsaussage trägt, frag nach der Basisrate: „Wie sind vergleichbare Fälle bei uns bisher tatsächlich entstanden?" Der Bestätigungsfehler wirkt plausibel, weil der Vorstand nur belastende Merkmale aufzählt — er würde aber voraussetzen, dass eine bestehende Überzeugung durch selektive Beleg-Suche gestützt wird; hier entsteht der Verdacht überhaupt erst aus dem Prototyp-Abgleich. Die Verfügbarkeitsheuristik liegt nahe, weil ein lebhaftes Bild das Urteil prägt — sie würde jedoch von leicht erinnerbaren Fällen auf Häufigkeit schließen; hier wird kein erinnerter Fall bemüht, sondern eine Person mit einem Stereotyp abgeglichen. Schuld durch Assoziation passt scheinbar wegen der politischen Kanäle — sie würde aber jemanden über die Verbindung zu einer diskreditierten Gruppe abwerten, nicht über die Passung zu einem Täterbild eine Wahrscheinlichkeit begründen.',
      en: 'Representativeness heuristic: the probability that someone is the leaker is read off his similarity to the leaker prototype ("that is exactly what leakers look like") — while the base rate, the internal review tracing almost every case to executives, drops out entirely. Used legitimately: typical patterns may generate a first hypothesis — the assessment becomes professional when you immediately check it against the case statistics and test the statistically most common explanation first. To recognise and counter it: the moment a "profile" carries a probability claim, ask for the base rate: "How have comparable cases at our company actually come about so far?" Confirmation bias looks plausible because the executive lists only incriminating traits — but it would require an existing belief propped up by selective evidence-gathering; here the suspicion originates in the prototype match itself. The availability heuristic seems close because a vivid image shapes the judgment — but it would infer frequency from easily recalled cases; no remembered case is invoked here, a person is matched against a stereotype. Guilt by association fits on the surface because of the political channels — but it would discredit someone via their link to a disparaged group, not derive a probability from fit to an offender profile.',
    },
    points: 10,
    primaryTechniqueId: 'representativeness_heuristic',
    relatedTechniques: ['representativeness_heuristic', 'confirmation_bias', 'availability_heuristic', 'guilt_by_association'],
  },
  {
    id: 'w4-representativeness_heuristic-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Kanalstrategie eines Konsumgüterherstellers. Im Quartals-Planning schlägt der Kreativdirektor der Agentur vor, das gesamte Q4-Videobudget auf ein einziges Format zu setzen: „Das Konzept hat die DNA eines viralen Hits — emotionaler Einstieg, Überraschungsmoment, kurze Länge. Exakt das Muster der drei großen Referenzcases, die wir euch gezeigt haben. Da müssen wir all-in gehen." Belastbare Zahlen, wie viele Videos mit genau diesem Muster keine Reichweite erzielen, liegen nicht auf dem Tisch.',
      en: 'You own channel strategy at a consumer goods manufacturer. In the quarterly planning session, the agency\'s creative director proposes putting the entire Q4 video budget on a single format: "This concept has the DNA of a viral hit — emotional opening, surprise moment, short runtime. Exactly the pattern of the three big reference cases we showed you. We have to go all in." No reliable figures are on the table for how many videos with precisely this pattern go nowhere.',
    },
    options: [
      {
        de: 'Ich folge der Empfehlung — Mustererkennung ist genau die Expertise, für die wir die Agentur bezahlen, und die Referenzcases belegen, dass das Muster funktioniert.',
        en: 'I follow the recommendation — pattern recognition is exactly the expertise we pay the agency for, and the reference cases prove the pattern works.',
      },
      {
        de: 'Ich lasse mir weitere Referenzcases mit demselben Muster nachliefern — je mehr erfolgreiche Beispiele die Agentur zeigt, desto belastbarer wird die Prognose.',
        en: 'I ask the agency to supply more reference cases with the same pattern — the more successful examples they show, the more robust the forecast becomes.',
      },
      {
        de: 'Ich nehme die Muster-Ähnlichkeit als Hypothese, aber nicht als Prognose: Ich frage nach der Grundgesamtheit — wie viele Videos mit diesen Merkmalen erzielen tatsächlich Reichweite? — und teste das Format erst mit einem Teilbudget, bevor wir skalieren.',
        en: 'I treat the pattern match as a hypothesis, not a forecast: I ask about the full population — how many videos with these traits actually gain reach? — and test the format with a partial budget before we scale.',
      },
      {
        de: 'Ich lehne den Vorschlag grundsätzlich ab — kreative Bauchentscheidungen haben in einer datengetriebenen Kanalstrategie nichts verloren, geplant wird nur, was vorab durchgerechnet ist.',
        en: 'I reject the proposal on principle — creative gut calls have no place in a data-driven channel strategy; we only plan what has been fully modeled in advance.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Die Empfehlung läuft auf der Repräsentativitätsheuristik: Weil das Konzept dem Prototyp der viralen Referenzcases ähnelt, erscheint der Erfolg wahrscheinlich — die Basisrate, also der riesige Bodensatz an Videos mit demselben Muster und ohne Reichweite, kommt in der Prognose nicht vor. Legitim einsetzen: Muster erfolgreicher Formate sind ein guter Hypothesen-Generator — professionell wird die Planung, wenn du die Ähnlichkeit mit der Grundgesamtheit abgleichst und die Prognose mit einem Test kalibrierst, genau das leistet die richtige Option. Erkennen und kontern: Wenn eine Erfolgsprognose allein auf „hat alles, was X auszeichnet" beruht, frag nach den Fällen, die das Muster ebenfalls hatten und trotzdem scheiterten. Option 1 wirkt plausibel, weil Mustererkennung tatsächlich Agentur-Handwerk ist — sie übernimmt aber die Ähnlichkeits-Prognose ungeprüft und setzt das volle Budget auf ein statistisch seltenes Ereignis. Option 2 klingt nach Sorgfalt, sammelt aber nur weitere Treffer derselben verzerrten Auswahl: Mehr Erfolgsbeispiele sagen nichts über die Misserfolgsquote, die Basisrate bleibt unsichtbar. Option 4 überkorrigiert: Nicht die kreative Hypothese ist das Problem, sondern die ungeprüfte Hochrechnung — wer Muster-Intuition ganz verbietet, verliert den legitimen Ausgangspunkt jeder Formatentwicklung.',
      en: 'The recommendation runs on the representativeness heuristic: because the concept resembles the prototype of the viral reference cases, success feels likely — the base rate, the vast pool of videos with the same pattern and no reach, never enters the forecast. Used legitimately: patterns from successful formats are a good hypothesis generator — planning becomes professional when you check the resemblance against the full population and calibrate the forecast with a test, which is exactly what the correct option does. To recognise and counter it: when a success forecast rests solely on "has everything that makes X work", ask about the cases that shared the pattern and still failed. Option 1 looks plausible because pattern recognition genuinely is agency craft — but it adopts the similarity forecast unchecked and bets the full budget on a statistically rare event. Option 2 sounds diligent but only collects more hits from the same biased sample: additional success stories say nothing about the failure rate, so the base rate stays invisible. Option 4 overcorrects: the creative hypothesis is not the problem, the unchecked extrapolation is — banning pattern intuition altogether removes the legitimate starting point of any format development.',
    },
    points: 10,
    primaryTechniqueId: 'representativeness_heuristic',
    relatedTechniques: ['representativeness_heuristic', 'cherry_picking', 'availability_heuristic'],
  },
  {
    id: 'w4-representativeness_heuristic-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster liegt dem Urteil zugrunde?',
      en: 'Which pattern underlies the judgment?',
    },
    scenario: {
      de: 'Jour fixe zur Krisenprävention: Der externe Kommunikationsberater → Geschäftsführerin eines Familienbetriebs: „Ein Monitoring-Budget für Social Media brauchen Sie nicht. Shitstorms treffen arrogante Konzerne mit anonymer Kommunikation — Sie sind der nahbare Mittelständler von nebenan, das ist ein völlig anderer Typ Unternehmen." Wie häufig es Unternehmen dieser Größe tatsächlich trifft, wird nicht erhoben.',
      en: 'Regular check-in on crisis prevention: the external comms consultant tells the managing director of a family business: "You don\'t need a social media monitoring budget. Shitstorms hit arrogant corporations with faceless communications — you are the approachable mid-sized firm next door, a completely different type of company." How often firms of this size are actually hit is never examined.',
    },
    options: [
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Repräsentativitätsheuristik: Das Risiko wird daran bemessen, wie ähnlich der Betrieb dem typischen Shitstorm-Opfer sieht — weil das Unternehmen nicht ins Prototyp-Bild „arroganter Konzern" passt, erscheint der Fall unwahrscheinlich; die Basisrate, also wie oft es Mittelständler tatsächlich trifft, wird gar nicht erst erhoben. Legitim einsetzen: Typologien dürfen eine Risikoanalyse strukturieren — professionell berätst du, wenn du die Passung zum Typus anschließend mit Fallzahlen für die jeweilige Unternehmensgröße unterlegst. Erkennen und kontern: Wenn eine Risikoeinschätzung auf „ein völlig anderer Typ" statt auf Häufigkeitsdaten beruht, frag nach den Zahlen für die eigene Vergleichsgruppe. Die Verfügbarkeitsheuristik wirkt plausibel, weil Shitstorm-Urteile oft von erinnerten Großfällen geprägt sind — sie würde aber von der leichten Erinnerbarkeit solcher Fälle auf deren Häufigkeit schließen; hier trägt kein erinnertes Beispiel das Urteil, sondern der Abgleich mit einem Opfer-Stereotyp. Framing liegt nahe, weil der Berater das Unternehmen schmeichelhaft als „nahbar" zeichnet — Framing würde aber durch die Wahl des Deutungsrahmens die Bewertung desselben Sachverhalts verschieben, nicht aus einer Typ-Ähnlichkeit eine Wahrscheinlichkeitsaussage ableiten.',
      en: 'Representativeness heuristic: the risk is measured by how much the firm resembles the typical shitstorm victim — because the company does not fit the "arrogant corporation" prototype, the event feels unlikely; the base rate, how often mid-sized firms are actually hit, is never examined. Used legitimately: typologies may structure a risk analysis — you advise professionally when you then back the fit to the type with case numbers for the relevant company size. To recognise and counter it: when a risk assessment rests on "a completely different type" rather than frequency data, ask for the numbers for your own peer group. The availability heuristic looks plausible because shitstorm judgments are often shaped by remembered blockbuster cases — but it would infer frequency from how easily such cases come to mind; here no remembered example carries the judgment, the match against a victim stereotype does. Framing seems close because the consultant flatteringly paints the firm as "approachable" — but framing would shift the evaluation of the same facts through the choice of interpretive frame, not derive a probability claim from resemblance to a type.',
    },
    points: 10,
    primaryTechniqueId: 'representativeness_heuristic',
    relatedTechniques: ['representativeness_heuristic', 'availability_heuristic', 'framing'],
  },
];
