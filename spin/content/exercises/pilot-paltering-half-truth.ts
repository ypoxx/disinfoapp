// Pilotwelle R3: 3 Übungen für paltering_half_truth.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotPalteringHalfTruth: Exercise[] = [
  {
    id: 'p3-paltering_half_truth-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der IR-Sprecher hier ein?',
      en: 'Which technique is the IR spokesperson using here?',
    },
    scenario: {
      de: 'Analystencall nach dem Quartalsbericht: Ein Analyst fragt den IR-Sprecher, ob der Konzern Kunden an den neuen Wettbewerber verliert. Die Antwort: „Unsere Kundenzahl ist im letzten Quartal gewachsen." Das stimmt — allerdings nur durch eine zugekaufte Firmenkundensparte; organisch sind Kunden abgewandert.',
      en: 'Analyst call after the quarterly report: an analyst asks the IR spokesperson whether the company is losing customers to the new competitor. The answer: "Our customer base grew last quarter." That is true — but only because of an acquired business-customer unit; organically, customers have been leaving.',
    },
    options: [
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Paltering: Die Aussage ist wörtlich wahr, beantwortet aber nicht die gestellte Frage — sie legt dem Analysten nahe, die Lücke selbst günstig zu füllen („wächst, also kein Kundenverlust"). Genau darin liegt der Mechanismus: Der Sender lügt nicht, der Empfänger zieht die falsche Schlussfolgerung selbst. Legitim einsetzen lässt sich der Kern — mit einer wahren, positiven Kennzahl antworten —, solange die eigentliche Frage danach ehrlich beantwortet wird. Erkennen und kontern: prüfen, ob die Antwort zur Frage passt, und konkret nachhaken („Wie hat sich die Kundenzahl organisch entwickelt?"). Cherry-Picking wirkt plausibel, weil auch hier eine günstige Kennzahl gewählt wird — es bezeichnet aber das Auswählen günstiger Belege aus einer größeren Datenlage in einer Darstellung, nicht die wörtlich wahre Ausweichantwort auf eine direkte Frage. Äquivokation bräuchte ein Wort, das in wechselnder Bedeutung verwendet wird; ein Strohmann würde die Frage des Analysten verzerrt wiedergeben und gegen diese Verzerrung argumentieren.',
      en: 'Paltering: the statement is literally true but does not answer the question asked — it invites the analyst to fill the gap favourably himself ("growing, so no customer losses"). That is precisely the mechanism: the sender never lies, the receiver draws the false conclusion on their own. The legitimate core — answering with a true, positive metric — is fine, as long as the actual question is then answered honestly. To spot and counter it: check whether the answer matches the question, and follow up specifically ("How did the customer base develop organically?"). Cherry-picking seems plausible because a favourable metric is chosen here too — but it means selecting favourable evidence from a larger body of data in a presentation, not giving a literally true evasive answer to a direct question. Equivocation would require a word used in shifting meanings; a straw man would distort the analyst\'s question and argue against that distortion.',
    },
    points: 10,
    primaryTechniqueId: 'paltering_half_truth',
    relatedTechniques: ['paltering_half_truth', 'cherry_picking'],
  },
  {
    id: 'p3-paltering_half_truth-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Produktrückruf bei einem Haushaltsgeräte-Hersteller, 12 Prozent einer Baureihe sind betroffen. Als Kommunikationschefin bereitest du die Vorständin auf ein TV-Interview vor. Der Justiziar schlägt als Kernbotschaft vor: „Die ganz große Mehrheit unserer Geräte ist einwandfrei" — faktisch korrekt; die betroffene Baureihe soll möglichst nicht aktiv genannt werden.',
      en: 'Product recall at a home-appliance manufacturer; 12 percent of one product line is affected. As head of communications, you are preparing the CEO for a TV interview. Legal counsel proposes the key message: "The vast majority of our appliances are flawless" — factually correct; the affected product line is not to be mentioned proactively.',
    },
    options: [
      {
        de: 'Ich baue die Botschaft um: Die korrekte Einordnung darf bleiben, aber zuerst kommen betroffene Baureihe, Erkennungsmerkmal und nächste Schritte — damit stimmt nicht nur der Wortlaut, sondern auch der Gesamteindruck.',
        en: 'I restructure the message: the accurate framing can stay, but the affected product line, how to identify it, and next steps come first — so not just the wording but the overall impression is true.',
      },
      {
        de: 'Ich übernehme den Vorschlag: Jede einzelne Aussage ist belegbar wahr, damit ist die Kommunikation juristisch wie ethisch abgesichert.',
        en: 'I adopt the proposal: every single statement is verifiably true, so the communication is covered both legally and ethically.',
      },
      {
        de: 'Ich streiche alle Zahlen und lasse die Vorständin ausschließlich über das Qualitätsversprechen und die Prüfprozesse sprechen.',
        en: 'I cut all numbers and have the CEO speak exclusively about the quality promise and our testing processes.',
      },
      {
        de: 'Ich halte die Details zurück und lasse sie nur dann nennen, wenn die Moderatorin explizit nach der betroffenen Baureihe fragt.',
        en: 'I hold back the details and have them mentioned only if the interviewer explicitly asks about the affected product line.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag des Justiziars ist Paltering: wörtlich wahr, aber der Gesamteindruck („kaum ein Problem") täuscht — und in einem Rückruf gefährdet das Betroffene und die Glaubwürdigkeit gleich mit. Die beste Option nutzt den legitimen Kern der Aussage (wahre Verhältnismäßigkeit als Einordnung), stellt aber die entscheidende Information voran: Wer betroffen ist, muss es aus dem Interview erfahren, nicht aus der Nachberichterstattung. Der Übernahme-Vorschlag wirkt plausibel, weil er wörtliche Wahrheit mit Ehrlichkeit gleichsetzt — genau diese Verwechslung macht Paltering für Sender attraktiv; nach Aufdeckung wird es vom Publikum aber ähnlich hart bestraft wie eine Lüge (Rogers et al. 2017). Die Zahlen ganz zu streichen ersetzt die Halbwahrheit durch Ausweichen und fällt beim ersten Nachhaken im Interview in sich zusammen. Details nur auf Nachfrage zu nennen ist reaktives Paltering: Was erst auf Druck kommt, wirkt wie ein Eingeständnis und überlässt der Redaktion die Erzählung.',
      en: 'Legal counsel\'s proposal is paltering: literally true, but the overall impression ("hardly a problem") deceives — and in a recall that endangers affected customers and credibility alike. The best option keeps the legitimate core of the statement (true proportionality as context) but puts the decisive information first: those affected must learn it from the interview, not from the follow-up coverage. Adopting the proposal seems plausible because it equates literal truth with honesty — exactly the confusion that makes paltering attractive to senders; once exposed, audiences punish it about as harshly as a lie (Rogers et al. 2017). Cutting the numbers entirely replaces the half-truth with evasion and collapses at the first follow-up question. Mentioning details only on demand is reactive paltering: what surfaces only under pressure reads as an admission and hands the narrative to the newsroom.',
    },
    points: 10,
    primaryTechniqueId: 'paltering_half_truth',
    relatedTechniques: ['paltering_half_truth'],
  },
  {
    id: 'p3-paltering_half_truth-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit diesem Einwand versucht der Kommunikationschef, ___.',
      en: 'Complete the sentence: With this objection, the head of communications is trying to ___.',
    },
    scenario: {
      de: 'Redaktionsverhandlung vor Veröffentlichung eines kritischen Berichts: Der Redakteur konfrontiert den Kommunikationschef mit einer schwachen Kundenzufriedenheits-Kennzahl. Dessen Einwand: „Diese Zahl ist veraltet, uns liegen längst neuere Daten vor." Das stimmt — die neueren Werte sind allerdings noch schlechter.',
      en: 'Pre-publication negotiation with a newsroom over a critical report: the editor confronts the head of communications with a weak customer-satisfaction figure. His objection: "That number is outdated — we have had newer data for a while." True — except the newer figures are even worse.',
    },
    options: [
      {
        de: 'mit einer wörtlich wahren Aussage einen falschen Gesamteindruck zu erzeugen (Paltering)',
        en: 'create a false overall impression with a literally true statement (paltering)',
      },
      {
        de: 'aus einer größeren Datenlage nur die günstigen Belege zu präsentieren (Cherry-Picking)',
        en: 'present only the favourable evidence from a larger body of data (cherry-picking)',
      },
      {
        de: 'ein mehrdeutiges Wort in wechselnder Bedeutung zu verwenden (Äquivokation)',
        en: 'use an ambiguous word in shifting meanings (equivocation)',
      },
      {
        de: 'die Kritik des Redakteurs verzerrt wiederzugeben und dagegen zu argumentieren (Strohmann-Argument)',
        en: 'distort the editor\'s criticism and argue against the distortion (straw man)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Paltering: „Veraltet" und „neuere Daten liegen vor" ist beides wahr — zusammen legt es aber nahe, die Kritik sei gegenstandslos. Der Redakteur soll die Lücke selbst günstig füllen; genau diese selbst gezogene Fehl-Schlussfolgerung ist der Hebel. Legitim ist der Kern durchaus: Veraltete Zahlen zu korrigieren gehört zum Handwerk — dann aber mit den neuen Werten auf dem Tisch. Erkennen und kontern: die eine Standardfrage stellen, an der Paltering platzt („Wie lauten die neueren Daten konkret?"). Cherry-Picking liegt nahe, weil es um Datenauswahl zu gehen scheint — hier wird aber nichts Günstiges präsentiert, sondern das Ungünstige hinter einer wahren Aussage verdeckt. Äquivokation bräuchte einen Begriff, der unbemerkt die Bedeutung wechselt; ein Strohmann würde die Kritik umdeuten und gegen die Umdeutung argumentieren, statt sie mit einer Teilwahrheit abzuwehren.',
      en: 'Paltering: "outdated" and "we have newer data" are both true — together they suggest the criticism is baseless. The editor is meant to fill the gap favourably himself; that self-drawn false conclusion is the lever. The core is perfectly legitimate: correcting outdated figures is part of the craft — but then with the new figures on the table. To spot and counter it, ask the one standard question that makes paltering collapse: "What exactly do the newer figures say?" Cherry-picking seems close because data selection appears to be at play — but nothing favourable is being presented here; the unfavourable is being hidden behind a true statement. Equivocation would need a term that quietly shifts meaning; a straw man would reinterpret the criticism and argue against the reinterpretation instead of deflecting it with a partial truth.',
    },
    points: 10,
    primaryTechniqueId: 'paltering_half_truth',
    relatedTechniques: ['paltering_half_truth', 'cherry_picking'],
  },
];
