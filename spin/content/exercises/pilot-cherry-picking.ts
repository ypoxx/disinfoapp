// Pilotwelle R3: 3 Übungen für cherry_picking (Cherry-Picking / Card-Stacking).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotCherryPicking: Exercise[] = [
  {
    id: 'p3-cherry_picking-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt dem Faktenblatt zugrunde?',
      en: 'Which technique is the fact sheet built on?',
    },
    scenario: {
      de: 'Du prüfst für die Geschäftsführung das Faktenblatt eines Branchenverbands zur Wirksamkeit einer neuen Verpackungslösung. Das Blatt zitiert vier Studien, die Vorteile zeigen — jede korrekt wiedergegeben. Deine Recherche ergibt: Zum Thema existieren elf Studien. Die sieben mit neutralen oder negativen Ergebnissen erwähnt das Faktenblatt nicht, obwohl der Verband sie in einer internen Literaturübersicht selbst aufführt.',
      en: 'You are vetting an industry association\'s fact sheet on the effectiveness of a new packaging solution for your executive board. The sheet cites four studies showing benefits — each quoted accurately. Your research turns up eleven studies on the topic. The seven with neutral or negative results go unmentioned, even though the association lists them in its own internal literature review.',
    },
    options: [
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'False Balance / Bothsidesism', en: 'False balance / bothsidesism' },
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Cherry-Picking / Card-Stacking: Aus einer gemischten Beleglage werden nur die stützenden Befunde ausgewählt — jede zitierte Studie stimmt, das Gesamtbild kippt trotzdem, weil der Empfänger die Auswahl nicht sieht. Legitim einsetzen heißt: die stärksten Belege führen, aber Grundgesamtheit und Gegenbefunde offenlegen oder auf Nachfrage liefern können. Erkennen und kontern: nach der vollständigen Studienlage fragen („Wie viele Untersuchungen gibt es insgesamt?“) und Übersichtsarbeiten statt Einzelstudien heranziehen. Paltering wirkt plausibel, weil auch dort Wahres einen falschen Eindruck erzeugt — es bezeichnet aber die wörtlich wahre Einzelaussage, etwa als Ausweichantwort auf eine konkrete Frage, nicht die systematische Auswahl aus einem Belegkorpus. False Balance wäre das Gegenstück: eine eindeutige Faktenlage würde als offene Kontroverse inszeniert — hier wird eine gemischte Faktenlage als einhellig präsentiert. Der Bestätigungsfehler ist ein unbewusster Verarbeitungsfehler des Empfängers; hier wählt der Absender nachweislich gezielt aus, denn die Gegenstudien stehen in seiner eigenen Übersicht.',
      en: 'Cherry-picking / card-stacking: from a mixed body of evidence, only the supporting findings are selected — every cited study is accurate, yet the overall picture tips because the audience never sees the selection. Used legitimately, this means leading with your strongest evidence while disclosing the full base and being able to produce counter-findings on request. To recognise and counter it: ask for the complete evidence base ("how many studies are there in total?") and rely on reviews rather than single studies. Paltering looks plausible because there, too, true statements create a false impression — but it denotes a literally true individual statement, typically dodging a specific question, not systematic selection from a body of evidence. False balance would be the mirror image: staging a clear-cut evidence base as an open controversy — here a mixed evidence base is presented as unanimous. Confirmation bias is the receiver\'s unconscious processing error; here the sender demonstrably selects on purpose, since the counter-studies sit in its own review.',
    },
    points: 10,
    primaryTechniqueId: 'cherry_picking',
    relatedTechniques: ['cherry_picking', 'paltering_half_truth', 'false_balance', 'confirmation_bias'],
  },
  {
    id: 'p3-cherry_picking-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Softwareanbieters. Vor dem Launch-Pressegespräch legt dir der Vertriebsleiter eine Folie vor: Von zwölf Pilotkunden werden die drei mit den besten Effizienzgewinnen zitiert („bis zu 40 Prozent schneller“). Die übrigen neun lagen deutlich darunter, zwei brachen das Pilotprojekt ab. „Nimm nur die drei — die Zahlen stimmen ja“, sagt er.',
      en: 'You head communications at a software vendor. Ahead of the launch press briefing, the sales director hands you a slide: of twelve pilot customers, it quotes the three with the best efficiency gains ("up to 40 percent faster"). The other nine came in well below that, and two dropped out of the pilot. "Just use the three — the numbers are accurate," he says.',
    },
    options: [
      {
        de: 'Ich übernehme die Folie — jede der drei Zahlen ist korrekt und belegt, und für die Auswahl der Referenzkunden ist der Vertrieb zuständig.',
        en: 'I use the slide as is — each of the three figures is accurate and documented, and picking reference customers is sales\' call.',
      },
      {
        de: 'Ich lasse zusätzlich einen kritischen Analystenkommentar einbauen — wenn auch eine Gegenstimme vorkommt, ist die Auswahl der drei Fälle ausgeglichen.',
        en: 'I add a critical analyst quote — with a dissenting voice included, the selection of the three cases is balanced out.',
      },
      {
        de: 'Ich zeige die stärksten Fälle als Belege, ordne sie aber ein: Spannbreite über alle zwölf Piloten nennen, „bis zu 40 Prozent“ als Bestwert kennzeichnen und die vollständige Pilotauswertung für Nachfragen bereithalten.',
        en: 'I lead with the strongest cases but put them in context: state the range across all twelve pilots, label "up to 40 percent" as the best case, and keep the full pilot evaluation ready for follow-up questions.',
      },
      {
        de: 'Ich streiche alle Kundenzahlen aus dem Pressegespräch — wer eigene Pilotdaten zitiert, argumentiert immer interessengeleitet.',
        en: 'I cut all customer figures from the briefing — anyone quoting their own pilot data is arguing out of self-interest by definition.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Die Folie ist Cherry-Picking / Card-Stacking: Jede Einzelzahl stimmt, aber die Auswahl von drei aus zwölf Fällen — ohne die neun schwächeren und zwei Abbrüche — verzerrt das Gesamtbild. Der Hebel wirkt, weil Journalisten die Grundgesamtheit zunächst nicht sehen; fragt aber einer nach („Wie viele Piloten gab es insgesamt?“), kippt die Geschichte genau im Launch-Moment. Legitim einsetzen: die stärksten Referenzen führen ist Handwerk — solange Spannbreite und Grundgesamtheit transparent sind. Erkennen und kontern: Bestwert-Formulierungen („bis zu“) als Signal nehmen und die Verteilung dahinter erfragen. Die Folie unverändert zu übernehmen wirkt plausibel, weil die Zahlen tatsächlich korrekt sind und Arbeitsteilung professionell klingt — aber wörtlich wahre Bestwerte ohne Grundgesamtheit erzeugen einen falschen Gesamteindruck, und das Pressegespräch verantwortest du. Der zusätzliche Analystenkommentar verwechselt Ausgewogenheit der Stimmen mit Vollständigkeit der Datenbasis — eine Gegenstimme heilt die verzerrte Auswahl nicht, sie kaschiert sie. Alle Kundenzahlen zu streichen überkorrigiert: Eigene Evidenz zu zeigen ist legitim; das Problem ist die Auswahl, nicht die Zahl an sich.',
      en: 'The slide is cherry-picking / card-stacking: every individual figure is accurate, but selecting three of twelve cases — without the nine weaker ones and two dropouts — skews the overall picture. The lever works because journalists cannot see the underlying population at first; but the moment one asks ("how many pilots were there in total?"), the story flips right at launch. Used legitimately, leading with your strongest references is craft — as long as range and population are transparent. To recognise and counter it: treat best-case phrasing ("up to") as a signal and ask for the distribution behind it. Using the slide as is sounds plausible because the numbers really are accurate and the division of labour sounds professional — but literally true best cases without the base create a false overall impression, and the briefing is your responsibility. Adding a critical analyst quote confuses balance of voices with completeness of the data — a dissenting voice does not repair the skewed selection, it papers over it. Cutting all customer figures overcorrects: presenting your own evidence is legitimate; the problem is the selection, not the figures as such.',
    },
    points: 10,
    primaryTechniqueId: 'cherry_picking',
    relatedTechniques: ['cherry_picking', 'paltering_half_truth', 'false_balance'],
  },
  {
    id: 'p3-cherry_picking-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster zeigt der Beitrag?',
      en: 'Which pattern does the post show?',
    },
    scenario: {
      de: 'LinkedIn-Beitrag einer Personalberatung zum eigenen Vermittlungserfolg: Zitiert werden fünf Kandidatenstimmen mit Bestnoten aus der Jahresbefragung. Dass zwei Drittel der Befragten die Betreuung mittelmäßig oder schlechter bewerteten, steht in der internen Auswertung — im Beitrag steht davon nichts.',
      en: 'A recruitment firm\'s LinkedIn post on its placement record: it quotes five candidate testimonials with top marks from the annual survey. That two thirds of respondents rated the service mediocre or worse is in the internal evaluation — the post says nothing about it.',
    },
    options: [
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Framing', en: 'Framing' },
      { de: 'False Balance / Bothsidesism', en: 'False balance / bothsidesism' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Cherry-Picking / Card-Stacking: Aus einer gemischten Befragung werden nur die fünf besten Stimmen ausgewählt — jedes Zitat ist echt, das Gesamtbild verkehrt sich trotzdem, weil die Mehrheit der Bewertungen fehlt. Legitim einsetzen: Testimonials sind erlaubtes Handwerk, wenn sie als Einzelstimmen erkennbar sind und keiner bekannten Gesamtauswertung widersprechen, die man selbst unter Verschluss hält. Erkennen und kontern: nach der Grundgesamtheit fragen — wie viele wurden befragt, wie sieht der Schnitt aus? Framing wirkt naheliegend, weil der Beitrag ein positives Bild zeichnet — Framing würde aber die Deutung über Wortwahl und Perspektive steuern; hier wird die Datenbasis selbst beschnitten. False Balance würde eine eindeutige Faktenlage als offene Kontroverse mit zwei gleichwertigen Seiten inszenieren — hier passiert das Gegenteil: Eine gemischte Faktenlage erscheint einhellig positiv.',
      en: 'Cherry-picking / card-stacking: from a mixed survey, only the five best voices are selected — every quote is genuine, yet the overall picture flips because the majority of ratings are missing. Used legitimately: testimonials are accepted craft when they are recognisable as individual voices and do not contradict a known overall evaluation you are keeping under wraps. To recognise and counter it: ask about the base — how many were surveyed, what does the average look like? Framing seems close because the post paints a positive picture — but framing would steer interpretation through word choice and perspective; here the evidence base itself is trimmed. False balance would stage a clear-cut evidence base as an open controversy with two equal sides — here the opposite happens: a mixed evidence base appears unanimously positive.',
    },
    points: 10,
    primaryTechniqueId: 'cherry_picking',
    relatedTechniques: ['cherry_picking', 'framing', 'false_balance'],
  },
];
