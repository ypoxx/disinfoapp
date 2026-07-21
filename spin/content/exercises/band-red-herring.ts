// Band BEGINNER: 1 Übung für red_herring (Ablenkung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Blatant im Szenario (explizite Cue-Wörter), aus Oberflächen-Cues in <10s lösbar.
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Ablenkziel bewusst ein künftiger Roadmap-Punkt (nicht Sponsoring/Community),
// um Kontrast zu technique.examples und wave5a zu schaffen.
// Distraktoren = nächste Nachbarn (whataboutism, framing).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandRedHerring: Exercise[] = [
  {
    id: 'band-red_herring-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik erkennst du in der Antwort des CEO?',
      en: 'Which technique do you recognise in the CEO\'s answer?',
    },
    scenario: {
      de: 'Telefon-Pressekonferenz eines Software-Anbieters: Ein Fachjournalist fragt den CEO geradeheraus, warum die App letzte Woche zwölf Stunden lang komplett ausgefallen ist. Seine Antwort: „Reden wir doch über das, was wirklich zählt — nächstes Quartal launchen wir eine KI-Funktion, die alles verändert." Auf die Störung geht er mit keinem Wort ein — die Frage bleibt unbeantwortet im Raum stehen.',
      en: 'Press call of a software vendor: a trade journalist asks the CEO point-blank why the app was completely down for twelve hours last week. His answer: "Let\'s talk about what really matters — next quarter we\'re launching an AI feature that changes everything." He says not a word about the outage — the question is left hanging in the air.',
    },
    options: [
      { de: 'Red Herring (Ablenkung)', en: 'Red herring (distraction)' },
      { de: 'Whataboutism (Gegenvorwurf)', en: 'Whataboutism (counter-accusation)' },
      { de: 'Framing (positive Umdeutung)', en: 'Framing (positive reframe)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Red Herring: Der CEO wechselt auf ein sachfremdes Thema (die kommende KI-Funktion) und lässt die Frage nach der Störung schlicht unbeantwortet — er widerlegt sie nicht, er schiebt sie beiseite. Warum der Hebel greift: Aufmerksamkeit ist begrenzt, und ein neues, attraktiveres Thema kann die ungeklärte Frage aus dem Blick drängen — wer dem Ausblick folgt, verliert das eigentlich Gefragte aus den Augen. So nutzt du das professionell: Willst du in einem angespannten Gespräch den Fokus auf einen konstruktiven Punkt lenken, beantworte die gestellte Frage zuerst in einem sauberen Satz und leite den Ausblick erst danach ein — die Brücke („…und genau deshalb setzen wir auf X") verbindet beide Punkte, statt die Frage zu ersetzen. Erkennen und kontern: Der Cue ist der übergangslose Themensprung ohne jeden Rückbezug — neues Thema, kein Bezug zur Frage, der alte Punkt bleibt ungeklärt. Halte das ruhig fest und führe zurück („Auf die neue Funktion freue ich mich — meine Frage war aber der zwölfstündige Systemausfall"). Whataboutism wäre es, wenn er mit einem Gegenvorwurf ablenkte („Und wie oft ist die Konkurrenz eigentlich down?") — hier fällt kein Gegenangriff, nur ein Themenwechsel. Framing wäre es, wenn er denselben Vorfall schönredete („geplante Wartung für mehr Stabilität") — er deutet ihn aber nicht um, er ersetzt ihn durch ein anderes Thema.',
      en: 'Red herring: the CEO switches to an off-topic subject (the upcoming AI feature) and simply leaves the outage question unanswered — he doesn\'t rebut it, he pushes it aside. Why the move works: attention is limited, and a fresh, more appealing topic can crowd out the unresolved question — follow the roadmap teaser and you lose track of what was actually asked. How to use this professionally: when you want to steer a tense conversation toward something constructive, answer the question asked in one clean sentence first, then bridge into the outlook ("…and that\'s exactly why we\'re investing in X") — the pivot adds to your answer instead of standing in for it. To spot and counter it: the tell is the seamless jump to a new topic with no link back — new subject, no bearing on the question, the original point still unresolved. Note it calmly and steer back ("I\'m glad about the new feature too — but my question was the twelve-hour outage"). Whataboutism would be deflecting with a counter-accusation ("And how often is the competition down, anyway?") — there\'s no counter-attack here, just a change of subject. Framing would mean spinning the same incident ("planned maintenance for better stability") — but he doesn\'t recast it, he replaces it with a different topic.',
    },
    points: 10,
    primaryTechniqueId: 'red_herring',
    relatedTechniques: ['red_herring', 'whataboutism', 'framing'],
  },
];
