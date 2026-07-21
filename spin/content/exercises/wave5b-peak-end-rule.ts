import type { Exercise } from '../types';

/**
 * Wave 5b — Übungen zur Peak-End-Regel (peak_end_rule).
 * Redaktionell geprüft. NICHT in exercises/index.ts registriert.
 */
export const wave5bPeakEndRule: Exercise[] = [
  {
    id: 'wave5b-peak_end_rule-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik strukturiert diesen Ablauf?',
      en: 'Which technique shapes this sequence?',
    },
    scenario: {
      de: 'Eine Agentur plant den Ablauf einer Investoren-Roadshow so, dass jeder Termin mit dem stärksten Proof-Point und einem kurzen, persönlichen Dank endet. Der New Business Director sagt intern: „Die Investoren erinnern sich an den letzten Eindruck und den einen Wow-Moment — nicht an die 40 Minuten dazwischen."',
      en: 'An agency sequences an investor roadshow so every session closes with its strongest proof point and a short, personal thank-you. The new-business director says internally: "Investors remember the last impression and the one wow moment — not the 40 minutes in between."',
    },
    options: [
      { de: 'Peak-End-Regel', en: 'Peak-End Rule' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Ankereffekt', en: 'Anchoring effect' },
      { de: 'Emotionale Ansprache', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Peak-End-Regel: Ein Erlebnis wird rückblickend nach seinem intensivsten Moment und seinem Ende bewertet, die Dauer dazwischen zählt kaum — genau darauf spielt „letzter Eindruck und der eine Wow-Moment" an. Legitim einsetzen: Plane den Höhepunkt und den Schluss deiner Präsentation oder Customer Journey bewusst, statt Energie gleichmäßig zu verteilen. Erkennen & kontern: Wenn ein Urteil an einem inszenierten Finale hängt, rekonstruiere den kompletten Verlauf und bewerte anhand vorab gesetzter Kriterien. Verfügbarkeitsheuristik wäre es, wenn ein leicht erinnerbares Beispiel eine Häufigkeit oder Wahrscheinlichkeit verzerrt — hier geht es aber um die zeitliche Struktur eines einzelnen Erlebnisses. Der Ankereffekt bezöge sich auf einen früh gesetzten Referenzwert (etwa die erste Zahl), nicht auf das Ende. Emotionale Ansprache beschreibt das Auslösen von Gefühlen allgemein, erklärt aber nicht, warum gerade Höhepunkt und Schluss die Erinnerung dominieren.',
      en: 'Peak-End Rule: an experience is judged in hindsight by its most intense moment and its ending, with the duration in between barely counting — exactly what "last impression and the one wow moment" points to. Use it professionally: deliberately design the peak and the close of your pitch or customer journey instead of spreading energy evenly. Spot & counter it: when a judgment rests on a staged finale, reconstruct the full sequence and score against criteria set in advance. Availability heuristic would apply if an easily recalled example distorted a frequency or probability — but here it is about the temporal structure of one experience. Anchoring would concern an early reference value (such as the first number), not the ending. Emotional appeal describes triggering feelings in general but does not explain why the peak and the close in particular dominate the memory.',
    },
    points: 10,
    primaryTechniqueId: 'peak_end_rule',
    relatedTechniques: ['peak_end_rule', 'availability_heuristic', 'anchoring', 'emotional_appeal'],
  },
  {
    id: 'wave5b-peak_end_rule-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Nach den finalen Pitches dreier Agenturen sollst du eine Empfehlung abgeben. Inhaltlich lagen alle drei gleichauf, doch Agentur B hat mit einem beeindruckenden Show-Reel und einem Standing-Ovation-Moment geschlossen. Dein Bauchgefühl favorisiert jetzt klar Agentur B.',
      en: 'After the final pitches of three agencies you have to make a recommendation. All three were level on substance, but agency B closed with an impressive show-reel and a standing-ovation moment. Your gut now clearly favours agency B.',
    },
    options: [
      { de: 'Du gehst die komplette Leistung jeder Agentur anhand vorab definierter Kriterien Punkt für Punkt durch, bevor du dich festlegst.', en: 'You work through each agency\'s full performance point by point against criteria defined in advance before deciding.' },
      { de: 'Du folgst dem klaren Bauchgefühl — der starke Schluss zeigt, dass Agentur B im Ernstfall abliefert.', en: 'You follow the clear gut feeling — the strong finish shows agency B will deliver when it counts.' },
      { de: 'Du entscheidest dich für die Agentur, deren Pitch am längsten und ausführlichsten war.', en: 'You pick the agency whose pitch was the longest and most detailed.' },
      { de: 'Du wählst die Agentur, deren erster Eindruck beim Einstieg am stärksten war.', en: 'You choose the agency whose opening made the strongest first impression.' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Nach der Peak-End-Regel prägt der inszenierte Schluss (Show-Reel, Standing Ovation) dein Gesamturteil stärker als die inhaltlich gleichwertige Leistung davor. Legitim einsetzen: Plane in eigenen Pitches Peak und Schluss bewusst — aber trenne diese Dramaturgie sauber von der Bewertung fremder Pitches. Erkennen & kontern: Trenne den Eindruck vom Ende ab und bewerte den kompletten Verlauf strukturiert anhand von Kriterien, die du vor den Pitches festgelegt hast — so neutralisierst du den Finaleffekt. Dem Bauchgefühl zu folgen (Option 2) wirkt souverän, ist aber genau der Peak-End-Effekt: Ein starker Schluss belegt keine bessere Leistung. Die längste Präsentation zu wählen (Option 3) überkorrigiert in Richtung Dauer, die laut Befundlage kaum aussagekräftig ist. Der stärkste erste Eindruck (Option 4) ersetzt nur eine Verzerrung durch eine andere — den Primäreffekt statt des Endeffekts.',
      en: 'Mechanism: by the Peak-End Rule the staged close (show-reel, standing ovation) shapes your overall judgment more than the substantively equal performance before it. Use it professionally: design the peak and the close of your own pitches deliberately — but keep that stagecraft strictly separate from how you judge other people\'s pitches. Spot & counter it: separate the impression from the ending and score the full sequence against criteria you fixed before the pitches — that neutralises the finale effect. Following your gut (option 2) feels confident but is exactly the peak-end effect: a strong finish is no proof of better work. Picking the longest pitch (option 3) over-corrects toward duration, which the evidence says barely matters. The strongest opening (option 4) just swaps one bias for another — the primacy effect instead of the end effect.',
    },
    points: 10,
    primaryTechniqueId: 'peak_end_rule',
    relatedTechniques: ['peak_end_rule', 'anchoring'],
  },
  {
    id: 'wave5b-peak_end_rule-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze die Lücke: Für die Erinnerung an ein Erlebnis zählen laut Peak-End-Regel vor allem der intensivste Moment und ___ — die Gesamtdauer wird dagegen kaum gewichtet.',
      en: 'Fill the blank: for the memory of an experience, the Peak-End Rule says what counts most is the most intense moment and ___ — while the total duration barely matters.',
    },
    options: [
      { de: 'das Ende', en: 'the ending' },
      { de: 'der erste Eindruck', en: 'the first impression' },
      { de: 'die Häufigkeit der Wiederholung', en: 'how often it was repeated' },
      { de: 'der Durchschnitt aller Momente', en: 'the average of all moments' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Die Peak-End-Regel benennt zwei Ankerpunkte der Erinnerung — den intensivsten Moment (Peak) und das Ende; die Dauer verschwindet fast völlig aus dem Urteil („Duration Neglect"). Legitim einsetzen: Lege den Höhepunkt und den Schluss eines Events oder Gesprächs bewusst an. Erkennen & kontern: Frage dich, ob dein Gesamteindruck am Ende hängt, und ziehe den ganzen Verlauf heran. „Der erste Eindruck" beschreibt den Primäreffekt — ein verwandter, aber anderer Anfangs-Bias. „Häufigkeit der Wiederholung" gehört zum Illusory-Truth-Effekt, nicht zur Peak-End-Regel. „Der Durchschnitt aller Momente" ist genau das, was die Peak-End-Regel widerlegt: Nicht der Mittelwert, sondern Spitze und Schluss bestimmen die Bewertung.',
      en: 'Mechanism: the Peak-End Rule names two anchor points of memory — the most intense moment (peak) and the ending; duration all but drops out of the judgment ("duration neglect"). Use it professionally: deliberately design the high point and the close of an event or conversation. Spot & counter it: ask whether your overall impression is hanging on the ending, and bring the whole sequence back into view. "The first impression" describes the primacy effect — a related but different opening bias. "How often it was repeated" belongs to the illusory-truth effect, not the Peak-End Rule. "The average of all moments" is precisely what the Peak-End Rule refutes: not the mean, but the peak and the close drive the evaluation.',
    },
    points: 10,
    primaryTechniqueId: 'peak_end_rule',
    relatedTechniques: ['peak_end_rule', 'illusory_truth_effect', 'anchoring'],
  },
];
