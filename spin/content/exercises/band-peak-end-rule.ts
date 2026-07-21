import type { Exercise } from '../types';

/**
 * Band-Übung (BEGINNER) zur Peak-End-Regel (peak_end_rule) — komplementär zum
 * intermediate-Band der wave5b-Übungen und des intermediate band-Items.
 * Bewusst blatant: explizite Cue-Wörter ("woran er sich erinnert", "zum Abschied",
 * "den ganzen ... danach bewerten"), in <10s aus Oberflächen-Cues lösbar, 3 Optionen.
 * Eigenes Sujet (Kunden-Onboarding-Call, Geschenk zum Schluss) — keine Dublette zu
 * technique.examples (Event-Debrief, Hotline, Townhall) und zum band-intermediate
 * (Produktdemo-Briefing). NICHT in exercises/index.ts registriert.
 */
export const bandPeakEndRule: Exercise[] = [
  {
    id: 'band-peak_end_rule-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik erkennst du hier?',
      en: 'Which technique do you recognise here?',
    },
    scenario: {
      de: 'Eine Kundenbetreuerin plant den Abschluss-Call eines langen Onboardings mit einem Neukunden und sagt ganz offen zu ihrer Kollegin: „Die zähen Konfigurationsschritte in der Mitte vergisst er sowieso. Wir enden mit dem einen Aha-Moment, den er liebt, und schicken ihm zum Abschied ein kleines Dankespaket. Woran er sich morgen erinnert, ist der Schluss — und danach bewertet er das ganze Onboarding."',
      en: 'A customer-success manager is planning the closing call of a long onboarding with a new client and says plainly to her colleague: "He\'ll forget the dull configuration steps in the middle anyway. We end on the one aha-moment he loves and send him a little thank-you package on the way out. What he remembers tomorrow is the ending — and that\'s what he\'ll rate the whole onboarding by."',
    },
    options: [
      { de: 'Peak-End-Regel', en: 'Peak-End Rule' },
      { de: 'Reziprozität (Gefälligkeit erzeugt Rückgabe-Gefühl)', en: 'Reciprocity (a favour creates a felt need to give back)' },
      { de: 'Verfügbarkeitsheuristik (leicht Erinnerbares verzerrt das Urteil)', en: 'Availability heuristic (what is easily recalled skews the judgment)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Peak-End-Regel: Das Gesamturteil über ein Erlebnis hängt vor allem am intensivsten Moment und am Ende, kaum am langen Verlauf dazwischen — die Betreuerin baut den Call genau so, dass der Aha-Moment und das Abschiedsgeschenk als Schluss stehen bleiben. Der Hebel wirkt, weil das Gedächtnis kein vollständiges Protokoll speichert, sondern das Erlebnis auf wenige markante Stützpunkte verdichtet. Legitim einsetzen: Setze den Höhepunkt und den sauberen Abschluss einer Demo oder Customer Journey bewusst, statt deine Energie gleichmäßig zu verteilen. Erkennen und kontern: Wenn dein Eindruck an einem inszenierten Finale hängt, hol dir den gesamten Ablauf zurück und bewerte an vorab gesetzten Kriterien, nicht am letzten Gefühl. Reziprozität läge nahe, weil zum Schluss ein Geschenk übergeben wird — sie zielt aber darauf, ein Gefühl der Rückgabe-Pflicht zu erzeugen; hier dient das Paket dem Erinnerungs-Schluss, nicht einer Gegenleistung. Die Verfügbarkeitsheuristik wirkt plausibel, weil das Finale der am leichtesten erinnerbare Programmpunkt ist — sie beträfe aber ein Häufigkeits- oder Wahrscheinlichkeitsurteil, während es hier um die zeitliche Struktur eines einzelnen Erlebnisses geht.',
      en: 'Peak-End Rule: the overall verdict on an experience rests mainly on its most intense moment and its ending, barely on the long stretch in between — the manager builds the call precisely so that the aha-moment and the parting gift are what remain. The lever works because memory stores no full transcript but compresses the experience into a few salient anchor points. Used legitimately: deliberately design the peak and a clean close of a demo or customer journey instead of spreading your energy evenly. To spot and counter it: when your impression hangs on a staged finale, pull the whole sequence back into view and score against criteria set in advance, not the last feeling in the room. Reciprocity is tempting because a gift is handed over at the end — but reciprocity aims to create a felt duty to give back; here the package serves the memorable ending, not a return favour. The availability heuristic looks plausible because the finale is the most easily recalled item — but it would concern a frequency or probability judgment, whereas this is about the temporal structure of a single experience.',
    },
    points: 10,
    primaryTechniqueId: 'peak_end_rule',
    relatedTechniques: ['peak_end_rule', 'reciprocity', 'availability_heuristic'],
  },
];
