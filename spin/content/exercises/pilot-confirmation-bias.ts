// Pilotwelle R3: 3 Übungen für confirmation_bias (Bestätigungsfehler).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotConfirmationBias: Exercise[] = [
  {
    id: 'p3-confirmation_bias-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster erklärt die Lücke im Monitoring?',
      en: 'Which pattern explains the blind spot in the monitoring?',
    },
    scenario: {
      de: 'Du übernimmst die Leitung Unternehmenskommunikation und gehst mit dem bisherigen Issues-Manager sein Monitoring zur Standortdebatte durch. Er ist aufrichtig überzeugt, dass die Kritik am Werksausbau abgeebbt ist — und genau so hat er gearbeitet: Die Suchprofile im Tool sind auf Entwarnungs-Formulierungen eingestellt, zustimmende Leserbriefe hat er vollständig erfasst, zwei kritische Regionalzeitungsberichte als "übliche Verdächtige" abgehakt. Auch in seinen privaten Vorbereitungsnotizen, die niemand sonst zu sehen bekommt, taucht der Gegenwind nicht auf.',
      en: 'You take over as head of corporate communications and walk through the site-expansion monitoring with the outgoing issues manager. He genuinely believes criticism of the plant expansion has died down — and that is exactly how he has worked: the tool\'s search profiles are tuned to all-clear phrasings, supportive letters to the editor are logged in full, and two critical regional newspaper reports were dismissed as "the usual suspects". Even in his private prep notes, which nobody else ever sees, the pushback simply does not appear.',
    },
    options: [
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Bestätigungsfehler: Die Überzeugung "Die Kritik ist abgeebbt" steuert Suche, Deutung und Erinnerung — Suchprofile finden nur Entwarnung, Zustimmung wird vollständig erfasst, Kritik wird wegerklärt. Der Hebel wirkt, weil das Filtern unbewusst geschieht: Der Manager täuscht nicht sein Publikum, er täuscht zuerst sich selbst — die privaten Notizen, die niemand liest, zeigen dieselbe Lücke. Professionell damit umgehen heißt: Monitoring von der Frage her aufsetzen, nicht von der These ("Was würde ich sehen, wenn die Kritik zunimmt?"), und Suchprofile gezielt auf Gegenbelege erweitern. Erkennen und kontern: asymmetrische Prüfstrenge ist das Signal — wenn Gegenbefunde seziert und Bestätigung durchgewunken wird, die Auswertung von einer unbeteiligten Person gegenlesen lassen. Cherry-Picking wirkt plausibel, weil im Ergebnis nur stützende Belege auftauchen — es bezeichnet aber die bewusste Auswahl des Absenders für ein Publikum; hier sitzt der Filter in seiner eigenen Wahrnehmung. Die Verfügbarkeitsheuristik liegt nahe, weil er die Kritik unterschätzt — sie würde aber bedeuten, dass er nach dem urteilt, was ihm leicht einfällt; hier lenkt eine feste Vorüberzeugung aktiv, was er überhaupt sucht und gelten lässt. Framing würde die Deutung anderer über Wortwahl und Perspektive steuern — hier wird keine Botschaft gestaltet, sondern Information verarbeitet.',
      en: 'Confirmation bias: the belief "the criticism has died down" steers search, interpretation, and memory — the search profiles can only find all-clear signals, support is logged in full, criticism gets explained away. The lever works because the filtering is unconscious: the manager is not deceiving his audience, he is deceiving himself first — his private notes, which nobody reads, show the same gap. Handling it professionally means building monitoring around the question, not the thesis ("what would I see if criticism were growing?"), and deliberately extending search profiles to disconfirming evidence. To recognise and counter it: asymmetric scrutiny is the tell — when counter-evidence gets dissected while confirmation is waved through, have an uninvolved colleague review the analysis. Cherry-picking looks plausible because only supporting evidence ends up on record — but it denotes a sender\'s deliberate selection for an audience; here the filter sits in his own perception. The availability heuristic seems close because he underestimates the criticism — but it would mean judging by whatever comes to mind easily; here a firm prior actively steers what he searches for and accepts at all. Framing would shape others\' interpretation through word choice and perspective — no message is being crafted here; information is being processed.',
    },
    points: 10,
    primaryTechniqueId: 'confirmation_bias',
    relatedTechniques: ['confirmation_bias', 'cherry_picking', 'availability_heuristic', 'framing'],
  },
  {
    id: 'p3-confirmation_bias-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Auswertung eines Markenpretests. Die neue Positionierung war dein eigener Vorschlag, die Geschäftsführung entscheidet nächste Woche auf Basis deiner Empfehlung. Beim ersten Durchgang durch die Fokusgruppen-Protokolle fällt dir an deinen Randnotizen etwas auf: Die zustimmenden Passagen hast du markiert und exzerpiert — bei den kritischen stehen Einwände wie "Teilnehmerin hat das Briefing missverstanden". Morgen sollst du die Vorlage schreiben.',
      en: 'You lead the analysis of a brand pretest. The new positioning was your own proposal, and the executive board decides next week based on your recommendation. On your first pass through the focus group transcripts, you notice something about your own margin notes: you highlighted and excerpted the approving passages — next to the critical ones you wrote objections like "participant misunderstood the briefing". The board paper is due tomorrow.',
    },
    options: [
      {
        de: 'Ich vertraue meiner Auswertung — ich kenne Projekt und Briefing am besten, und wer so tief im Thema steckt, kann Zustimmung und Kritik am sichersten einordnen.',
        en: 'I trust my analysis — I know the project and the briefing best, and being this deep in the topic makes me the safest judge of approval and criticism.',
      },
      {
        de: 'Ich lege vor dem zweiten Durchgang schriftlich fest, welche Befunde gegen meine Positionierung sprechen würden, werte die kritischen Passagen mit derselben Systematik aus wie die zustimmenden und lasse eine unbeteiligte Kollegin die Protokolle gegenlesen.',
        en: 'Before a second pass, I write down which findings would count against my positioning, apply the same systematic analysis to the critical passages as to the approving ones, and have an uninvolved colleague review the transcripts.',
      },
      {
        de: 'Ich nehme die kritischen Zitate zusätzlich in den Anhang der Vorlage auf — solange alle Stimmen dokumentiert sind, ist die Auswertung ausgewogen.',
        en: 'I add the critical quotes to the paper\'s appendix — as long as every voice is documented, the analysis is balanced.',
      },
      {
        de: 'Ich ziehe meine Empfehlung zurück und übergebe die Auswertung komplett an die Agentur — wer einen eigenen Vorschlag im Rennen hat, kann Daten grundsätzlich nicht mehr neutral auswerten.',
        en: 'I withdraw my recommendation and hand the entire analysis to the agency — anyone with a proposal of their own in the race is inherently unable to analyse data neutrally.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Die Randnotizen zeigen den Bestätigungsfehler bei der Arbeit: Die eigene Überzeugung ("meine Positionierung trägt") verteilt die Prüfstrenge asymmetrisch — Zustimmung wird exzerpiert, Kritik wegerklärt, ganz ohne Täuschungsabsicht. Der Hebel wirkt, weil sich die Verzerrung wie Sorgfalt anfühlt: Jeder einzelne Einwand gegen ein kritisches Zitat mag berechtigt sein, nur wird er eben nie an die zustimmenden angelegt. Professionell einsetzen lässt sich hier die Gegenrichtung: Falsifikationskriterien vorab festlegen ("Was müsste im Protokoll stehen, damit ich meine Empfehlung ändere?"), symmetrische Auswertung, vier Augen — für die eigene Überzeugung werben ist legitim, wenn die Datenauswertung dagegen abgesichert ist. Erkennen und kontern: asymmetrische Randnotizen sind genau das Warnsignal, das du hier selbst bemerkt hast. Option 0 wirkt plausibel, weil Themennähe echte Expertise ist — aber Nähe plus eigenes Investment ist exakt die Bedingung, unter der der Bias am stärksten wirkt; Expertise schützt nicht davor. Option 2 verwechselt Dokumentation mit Auswertung: Zitate im Anhang heilen nicht, dass die Empfehlung auf verzerrt gewichteten Daten steht — wer liest schon den Anhang gegen die Vorlage. Option 3 überkorrigiert: Involviertheit erfordert Absicherungsverfahren, nicht den Rückzug — sonst dürfte niemand auswerten, der eine Hypothese hat.',
      en: 'The margin notes show confirmation bias at work: your own conviction ("my positioning holds") distributes scrutiny asymmetrically — approval gets excerpted, criticism gets explained away, with no intent to deceive. The lever works because the distortion feels like diligence: every single objection to a critical quote may be justified — it just never gets applied to the approving ones. What you can deploy professionally is the reverse gear: prespecify falsification criteria ("what would the transcript have to say for me to change my recommendation?"), analyse symmetrically, add a second pair of eyes — advocating for your own conviction is legitimate when the data analysis is safeguarded against it. To recognise and counter it: asymmetric margin notes are exactly the warning signal you caught here yourself. Option 0 sounds plausible because closeness to the topic is real expertise — but closeness plus personal stake is precisely the condition under which the bias is strongest; expertise does not immunise. Option 2 confuses documentation with analysis: quotes in an appendix do not repair a recommendation built on skewed weighting — nobody reads the appendix against the paper. Option 3 overcorrects: involvement calls for safeguards, not withdrawal — otherwise nobody with a hypothesis could ever analyse data.',
    },
    points: 10,
    primaryTechniqueId: 'confirmation_bias',
    relatedTechniques: ['confirmation_bias', 'cherry_picking'],
  },
  {
    id: 'p3-confirmation_bias-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster zeigt die Sprecherin?',
      en: 'Which pattern is the spokesperson showing?',
    },
    scenario: {
      de: 'Wochenmeeting der Pressestelle: Die Sprecherin ist überzeugt, dass der neue CEO in den Medien gut ankommt. Ein wohlwollendes Porträt nennt sie "den Beleg dafür", ein kritisches Interview aus derselben Woche "eine Retourkutsche des Redakteurs, zählt nicht". Beide Beiträge liegen dem ganzen Team vor — sie legt nur an beide völlig unterschiedliche Maßstäbe an.',
      en: 'Weekly press office meeting: the spokesperson is convinced the new CEO is landing well in the media. A favourable profile is "the proof", while a critical interview from the same week is "the editor settling a score, doesn\'t count". The whole team has both pieces in front of them — she just holds the two to entirely different standards.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Bestätigungsfehler: Die Vorüberzeugung "Der CEO kommt gut an" verteilt die Beweislast ungleich — der bestätigende Beitrag gilt sofort als Beleg, der widersprechende wird mit einer Zusatzannahme entwertet. So bleibt die Überzeugung von jeder Datenlage unberührt. Professionell damit umgehen: Bewertungsmaßstäbe vor der Auswertung festlegen — was zählt als positives, was als negatives Signal? — und beide Richtungen gleich streng prüfen. Erkennen und kontern: Wenn Gegenbelege regelmäßig eine Sondererklärung brauchen ("zählt nicht, weil…"), nach dem Kriterium fragen, das die Überzeugung widerlegen könnte. Der Ankereffekt wirkt plausibel, weil eine frühe Einschätzung nachwirkt — er beschreibt aber die Verzerrung von Schätzungen durch einen Ausgangswert, nicht das ungleiche Bewerten neuer Belege entlang einer Überzeugung. Cherry-Picking liegt nahe, weil am Ende ein geschöntes Bild steht — aber sie unterschlägt das kritische Interview nicht, das ganze Team kennt es; das Muster sitzt in ihrer Deutung, nicht in einer Auswahl fürs Publikum.',
      en: 'Confirmation bias: the prior "the CEO is landing well" distributes the burden of proof unevenly — the confirming piece counts as proof instantly, the contradicting one is written off with an auxiliary assumption. That way the conviction stays untouched by any state of the evidence. Handling it professionally: fix your evaluation criteria before the review — what counts as a positive signal, what as a negative one? — and test both directions with equal rigour. To recognise and counter it: when counter-evidence routinely needs a special excuse ("doesn\'t count, because…"), ask for the criterion that could disprove the conviction. Anchoring looks plausible because an early assessment lingers — but it describes estimates being skewed by a starting value, not new evidence being graded unevenly along a belief. Cherry-picking seems close because a flattering picture is the result — but she is not suppressing the critical interview, the whole team has it; the pattern sits in her interpretation, not in a selection made for an audience.',
    },
    points: 10,
    primaryTechniqueId: 'confirmation_bias',
    relatedTechniques: ['confirmation_bias', 'anchoring', 'cherry_picking'],
  },
];
