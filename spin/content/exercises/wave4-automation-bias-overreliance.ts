// Welle R4: 3 Übungen für automation_bias_overreliance (Automation Bias / Übervertrauen in Systeme).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4AutomationBiasOverreliance: Exercise[] = [
  {
    id: 'w4-automation_bias_overreliance-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster zeigt der Teamleiter?',
      en: 'Which pattern is the team lead displaying?',
    },
    scenario: {
      de: 'Wochenrückblick im Kommunikationsteam eines Softwareanbieters, du moderierst als Leiterin Unternehmenskommunikation: Die Volontärin zeigt dem Teamleiter Digital einen Reddit-Thread, in dem IT-Administratoren über eine Sicherheitslücke in eurem Produkt diskutieren — mit wachsender Beteiligung. Der Teamleiter beruhigt: Das KI-Monitoring stufe die Lage seit Wochen als „unkritisch" ein, und das System werte schließlich Millionen Quellen aus — darauf könne man sich verlassen. Der Thread wandert unbearbeitet ins Archiv.',
      en: 'Weekly review in a software vendor\'s communications team, chaired by you as head of corporate communications: the trainee shows the digital team lead a Reddit thread where IT administrators are discussing a security flaw in your product — with growing engagement. The team lead waves it off: the AI monitoring has rated the situation "non-critical" for weeks, and after all, the system scans millions of sources — that rating can be relied on. The thread is filed away untouched.',
    },
    options: [
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
      { de: 'LLM Sycophancy', en: 'LLM sycophancy' },
      { de: 'Automation Bias (Übervertrauen in Systeme)', en: 'Automation bias (over-reliance)' },
      { de: 'Anthropomorphe Vertrauenssignale', en: 'Anthropomorphic trust cues' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Automation Bias: Die Einstufung des Monitorings ersetzt die Prüfung eines direkten Gegenhinweises — „kein Alarm" wird als „kein Problem" gelesen, obwohl eine konkrete Beobachtung auf dem Tisch liegt (Auslassungsfehler). Legitim einsetzen: KI-Monitoring ist als Vorfilter Standard — professionell wird es, wenn du es als eine Quelle unter mehreren führst und seine Abdeckungslücken (geschlossene Gruppen, neue Plattformen) dokumentierst. Erkennen und kontern: Wenn du einen direkten Hinweis mit Verweis auf ein stilles Dashboard verwerfen willst, halte inne — prüfe den Hinweis auf seinem eigenen Weg nach und teste stichprobenartig, ob das Tool die Quelle überhaupt erfasst. Bestätigungsfehler wirkt plausibel, weil der Teamleiter die bequeme Lesart wählt — er würde aber bedeuten, dass er Belege passend zu einer vorgefassten Überzeugung filtert; hier hängt sein Urteil allein an der Autorität der Automatik. LLM Sycophancy liegt nahe, weil ein KI-System beteiligt ist — sie bezeichnet aber ein Modell, das unter Widerspruch auf Nutzerlinie einschwenkt; dieses System verhält sich unauffällig, der Fehler entsteht beim Menschen. Anthropomorphe Vertrauenssignale passen scheinbar, weil dem System Kompetenz zugeschrieben wird — die Technik meint jedoch gestaltete Vermenschlichungssignale wie Name, Avatar oder Ich-Ansprache; hier trägt kein Designelement das Vertrauen, sondern die Gewohnheit, der Automatik das letzte Wort zu lassen.',
      en: 'Automation bias: the monitoring tool\'s rating replaces the examination of a direct counter-signal — "no alert" is read as "no problem" even though a concrete observation is on the table (omission error). Used legitimately: AI monitoring is a standard pre-filter — it becomes professional when you treat it as one source among several and document its coverage gaps (closed groups, new platforms). To recognize and counter it: whenever you are about to dismiss a direct tip by pointing at a quiet dashboard, pause — follow the tip through its own channel and spot-check whether the tool even covers that source. Confirmation bias looks plausible because the team lead picks the convenient reading — but it would mean he filters evidence to fit a pre-existing belief; here his judgment rests solely on the authority of the automation. LLM sycophancy seems close because an AI system is involved — but it describes a model that caves to the user\'s position under pushback; this system behaves unremarkably, the error arises on the human side. Anthropomorphic trust cues appear to fit because competence is attributed to the system — but that technique refers to designed humanizing signals such as a name, an avatar, or first-person voice; here no design element carries the trust, only the habit of giving the automation the final word.',
    },
    points: 10,
    primaryTechniqueId: 'automation_bias_overreliance',
    relatedTechniques: ['automation_bias_overreliance', 'confirmation_bias', 'sycophancy', 'anthropomorphic_trust_cues'],
  },
  {
    id: 'w4-automation_bias_overreliance-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Krisencall bei einem Getränkehersteller: Auf TikTok kursiert ein Video, das angeblich verschimmelte Tanks in eurem Abfüllwerk zeigt. Das Verifikationstool eurer Agentur meldet „89 % wahrscheinlich authentisch". Der CEO wartet auf deine Empfehlung als Leiterin Unternehmenskommunikation: Entschuldigung vorbereiten oder Fälschung erklären?',
      en: 'Crisis call at a beverage manufacturer: a video allegedly showing moldy tanks in your bottling plant is circulating on TikTok. Your agency\'s verification tool reports "89% likely authentic". The CEO is waiting for your recommendation as head of corporate communications: prepare an apology or declare the video a fake?',
    },
    options: [
      {
        de: 'Ich folge dem Tool: 89 % Wahrscheinlichkeit sind eine klare Ansage — ich empfehle, die Entschuldigung vorzubereiten, bevor uns die Berichterstattung überrollt.',
        en: 'I follow the tool: 89% probability is a clear verdict — I recommend preparing the apology before the coverage overtakes us.',
      },
      {
        de: 'Ich behandle den Wert als ein Indiz von mehreren: Ich lasse parallel das Werk die gezeigten Anlagen abgleichen und hole eine forensische Zweitmeinung ein — erst mit einem unabhängigen Prüfpfad gebe ich dem CEO eine Empfehlung.',
        en: 'I treat the score as one signal among several: in parallel, I have the plant compare the equipment shown and commission a forensic second opinion — only with an independent line of verification do I give the CEO a recommendation.',
      },
      {
        de: 'Ich lasse das Video ein zweites Mal durch das Tool laufen — bestätigt es den Wert, ist die Einschätzung belastbar und ich empfehle die Entschuldigung.',
        en: 'I run the video through the tool a second time — if it confirms the score, the assessment is solid and I recommend the apology.',
      },
      {
        de: 'Ich ignoriere den Score grundsätzlich: Solche Tools liegen zu oft daneben, bei Bildmaterial verlasse ich mich auf mein eigenes Auge.',
        en: 'I disregard the score on principle: tools like this are wrong too often, and with visual material I rely on my own eye.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Konfidenzwert ist eine Systemausgabe mit unbekannter Fehlerquote in genau diesem Fall — ihn unbesehen zur Entscheidungsgrundlage zu machen, ist der Mechanismus von Automation Bias: Das Werkzeug bekommt das letzte Wort, bevor die naheliegende menschliche Prüfung stattgefunden hat (Übernahmefehler). Legitim einsetzen: Verifikationstools beschleunigen die Triage — professionell führst du den Score als ein Indiz neben unabhängigen Prüfwegen und legst vorab fest, ab welcher Tragweite eine zweite Instanz zwingend ist. Erkennen und kontern: Bevor eine Toolausgabe eine Krisenentscheidung dreht, sichere den schnellsten unabhängigen Prüfpfad — hier der Abgleich mit dem Werk und die forensische Zweitmeinung — und gib erst dann eine Linie aus. Die Entschuldigungs-Option wirkt plausibel, weil 89 % nach Gewissheit klingen und Tempo in der Krise zählt — sie überträgt die volle Entscheidungslast aber auf einen Wert, dessen Fehlerraten und Trainingsgrenzen du nicht kennst. Der zweite Durchlauf klingt nach Sorgfalt, prüft jedoch nichts Unabhängiges: Dasselbe Modell liefert zum selben Material dieselbe Verzerrung. Der Komplettverzicht überkorrigiert — das Tool liefert ein brauchbares Signal, nur eben keines, das die menschliche Prüfung ersetzt; das eigene Auge ist bei modernem Bildmaterial der schwächste Prüfer von allen.',
      en: 'The confidence score is a system output with an unknown error rate for this specific case — turning it into the basis for a decision sight unseen is the mechanism of automation bias: the tool gets the final word before the obvious human check has happened (commission error). Used legitimately: verification tools speed up triage — you use them professionally by treating the score as one signal alongside independent lines of verification, with a pre-agreed threshold above which a second instance is mandatory. To recognize and counter it: before a tool output swings a crisis decision, secure the fastest independent check — here, the comparison with the plant and a forensic second opinion — and only then issue a line. The apology option looks plausible because 89% sounds like certainty and speed matters in a crisis — but it shifts the full weight of the decision onto a number whose error rates and training limits you do not know. The second run sounds diligent yet verifies nothing independent: the same model given the same material returns the same bias. Dropping the score on principle overcorrects — the tool provides a useful signal, just not one that replaces human verification; with modern imagery, the naked eye is the weakest reviewer of all.',
    },
    points: 10,
    primaryTechniqueId: 'automation_bias_overreliance',
    relatedTechniques: ['automation_bias_overreliance', 'synthetic_media'],
  },
  {
    id: 'w4-automation_bias_overreliance-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster beschreibt den Fehler des Referenten?',
      en: 'Which pattern describes the officer\'s mistake?',
    },
    scenario: {
      de: 'Redaktionsschluss für den Mitarbeiter-Newsletter: Der Referent Interne Kommunikation lässt den KI-Assistenten die Eckdaten aus dem Quartalsbericht ziehen. Eine Umsatzzahl kommt ihm zu hoch vor, aber er übernimmt sie — das Modell habe den Bericht ja „im Kontext". Am nächsten Tag korrigiert das Controlling: Die Zahl stammte aus der Vorjahrestabelle.',
      en: 'Copy deadline for the employee newsletter: the internal communications officer has the AI assistant pull the key figures from the quarterly report. One revenue figure strikes him as too high, but he keeps it — after all, the model has the report "in context". The next day, controlling issues a correction: the figure came from the prior-year table.',
    },
    options: [
      { de: 'Automation Bias (Übervertrauen in Systeme)', en: 'Automation bias (over-reliance)' },
      { de: 'LLM Sycophancy', en: 'LLM sycophancy' },
      { de: 'Anthropomorphe Vertrauenssignale', en: 'Anthropomorphic trust cues' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Automation Bias: Der Referent übernimmt die Systemausgabe gegen den eigenen Zweifel — das Modell hat den Bericht „im Kontext", also wird die Zahl schon stimmen (Übernahmefehler). Genau dieses Muster ist empirisch gut beschrieben: Empfehlungen der Automatik werden auch dann übernommen, wenn eigene Informationen dagegensprechen. Legitim einsetzen: KI-Extraktion spart bei Kennzahlen echte Zeit — professionell wird sie mit Fundstellenpflicht (Seite, Tabelle) und einem Stichprobenabgleich gegen das Original, bevor etwas in den Versand geht. Erkennen und kontern: Nimm dein eigenes Stutzen als Prüfsignal ernst — wenn dir ein Wert falsch vorkommt, ist das der Moment für den Blick ins Quelldokument, nicht für den Verweis auf das Werkzeug. LLM Sycophancy wirkt plausibel, weil ein KI-Assistent den Fehler produziert — sie würde aber bedeuten, dass das Modell sich einer vorgegebenen Nutzerposition anpasst; hier hat niemand eine Position vorgegeben, das Modell hat schlicht danebengegriffen, und der eigentliche Fehler ist die ungeprüfte Übernahme. Anthropomorphe Vertrauenssignale liegen nahe, weil der Referent dem Modell menschliche Lesekompetenz zuschreibt — die Technik bezeichnet aber gestaltete Vermenschlichungssignale wie Name, Avatar oder Ich-Ansprache, die Vertrauen erzeugen sollen; hier gibt es kein solches Designelement, das Vertrauen sitzt in der Automatik selbst.',
      en: 'Automation bias: the officer adopts the system output against his own doubt — the model has the report "in context", so the figure must be right (commission error). Exactly this pattern is well documented empirically: recommendations from automation are adopted even when one\'s own information contradicts them. Used legitimately: AI extraction saves real time on key figures — it becomes professional with mandatory source references (page, table) and a spot-check against the original before anything goes out. To recognize and counter it: treat your own hesitation as a verification signal — when a figure strikes you as wrong, that is the moment to open the source document, not to defer to the tool. LLM sycophancy looks plausible because an AI assistant produced the error — but it would mean the model bends to a position the user handed it; nobody stated a position here, the model simply got it wrong, and the actual failure is the unverified adoption. Anthropomorphic trust cues seem close because the officer credits the model with human reading competence — but that technique refers to designed humanizing signals such as a name, an avatar, or first-person voice built to create trust; there is no such design element here, the trust sits in the automation itself.',
    },
    points: 10,
    primaryTechniqueId: 'automation_bias_overreliance',
    relatedTechniques: ['automation_bias_overreliance', 'sycophancy', 'anthropomorphic_trust_cues'],
  },
];
