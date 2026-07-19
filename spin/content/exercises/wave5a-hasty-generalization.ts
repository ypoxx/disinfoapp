// Welle 5a: 3 Übungen für hasty_generalization (Voreilige Verallgemeinerung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aHastyGeneralization: Exercise[] = [
  {
    id: 'wave5a-hasty_generalization-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Bereichsleiterin hier ein?',
      en: 'Which technique is the department head using here?',
    },
    scenario: {
      de: 'Kickoff zur Rückkehr ins Büro: Eine Bereichsleiterin begründet die neue Vor-Ort-Pflicht im All-Hands so: „In meinem letzten Team ist die Produktivität eingebrochen, sobald zwei Leute dauerhaft remote gearbeitet haben — Homeoffice funktioniert bei uns einfach nicht." Als aus dem Plenum die Zahlen der anderen Teams eingefordert werden, verweist sie nur auf eine einzelne Kollegin, die im Homeoffice ihre Deadlines gerissen habe.',
      en: 'Return-to-office kickoff: at the all-hands, a department head justifies the new on-site rule like this: "In my last team productivity collapsed the moment two people went fully remote — working from home just doesn\'t work for us." When the floor presses her for the other teams\' figures, she points only to one colleague who missed her deadlines while working from home.',
    },
    options: [
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
      { de: 'Rosinenpickerei (Cherry Picking)', en: 'Cherry picking' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Voreilige Verallgemeinerung: Aus einem einzigen Team und zwei Personen leitet die Bereichsleiterin eine pauschale Regel für das ganze Unternehmen ab („Homeoffice funktioniert bei uns nicht"), ohne zu prüfen, wie repräsentativ dieser eine Fall ist. Genau darin liegt der Hebel: Ein anschauliches Einzelbeispiel wirkt überzeugender als die unbequeme Frage nach der Stichprobengröße. Legitim einsetzen: Eine konkrete Beobachtung darf durchaus als Hypothese dienen — professionell wird es, wenn du sie ausdrücklich als Einzelfall kennzeichnest und vor der Entscheidung gegen breitere Daten hältst, statt sie zur Regel zu erklären. Erkennen und kontern: Du erkennst das Muster am Sprung von „ein Team" zu „bei uns" plus fehlender Stichprobe — frag ruhig nach der Datengrundlage („Auf wie vielen Teams beruht das? Was zeigen die anderen?") und trenne den Einzelfall wieder von der Gesamtaussage. Rosinenpickerei läge vor, wenn sie aus vielen vorliegenden Zahlen gezielt die passenden herauspickte und die gegenteiligen verschwiege — hier gibt es gar keine breitere Datenbasis, nur einen überdehnten Einzelfall. Die Repräsentativitätsheuristik beschriebe das Urteil, ein konkreter Mitarbeiter „wirke" wie ein typischer Homeoffice-Drückeberger; hier geht es dagegen um den Schluss von wenigen Fällen auf die Allgemeinheit. Die Verfügbarkeitsheuristik meinte, dass ihr das eine Team nur besonders leicht in den Sinn kommt — die Aussage hier ist aber die verallgemeinernde Schlussregel selbst, nicht die Abrufbarkeit des Beispiels.',
      en: 'Hasty generalization: from a single team and two people the department head derives a blanket rule for the whole company ("working from home doesn\'t work for us"), without checking how representative that one case is. That is the lever: a vivid single example feels more convincing than the awkward question of sample size. Used legitimately: a concrete observation may well serve as a hypothesis — it stays professional when you explicitly flag it as a single case and test it against broader data before deciding, rather than declaring it a rule. To spot and counter it: you recognise the pattern by the jump from "one team" to "for us" plus a missing sample — calmly ask for the evidence base ("how many teams is this based on? what do the others show?") and separate the single case from the general claim. Cherry picking would apply if she selected the convenient figures from a large body of data and suppressed the contrary ones — here there is no broader dataset at all, just one over-stretched case. The representativeness heuristic would describe judging that a particular employee "looks like" a typical work-from-home slacker; here it is instead the inference from few cases to the whole. The availability heuristic would mean that this one team simply springs to mind most easily — but the claim here is the generalising conclusion itself, not the recall of the example.',
    },
    points: 10,
    primaryTechniqueId: 'hasty_generalization',
    relatedTechniques: ['hasty_generalization', 'cherry_picking', 'representativeness_heuristic', 'availability_heuristic'],
  },
  {
    id: 'wave5a-hasty_generalization-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Redaktionssitzung für den Kundenblog: Der Content-Lead will die gesamte Themenstrategie auf How-to-Videos umstellen, weil ein einzelner Clip letzte Woche außergewöhnlich viele Aufrufe hatte. „Videos ziehen bei unserer Zielgruppe immer", sagt er und drängt auf eine schnelle Entscheidung. Weitere Reichweitendaten liegen nicht auf dem Tisch.',
      en: 'Editorial meeting for the customer blog: the content lead wants to switch the entire topic strategy to how-to videos because one single clip pulled unusually high views last week. "Video always lands with our audience," he says, pushing for a quick decision. No further reach data is on the table.',
    },
    options: [
      {
        de: 'Ich trenne den Einzelerfolg von der Pauschalregel: Ich schlage vor, den einen Ausreißer-Clip gegen die Reichweite der übrigen Formate über mehrere Wochen zu halten und die Umstellung erst nach dieser Auswertung zu entscheiden.',
        en: 'I separate the single success from the blanket rule: I propose holding the one outlier clip against the reach of the other formats over several weeks, and deciding on any switch only after that review.',
      },
      {
        de: 'Ich ziehe die Themenstrategie sofort auf How-to-Videos um — ein so klarer Reichweiten-Erfolg spricht für sich.',
        en: 'I switch the topic strategy to how-to videos right away — a reach win that clear-cut speaks for itself.',
      },
      {
        de: 'Ich kontere mit meinem eigenen Lieblingsformat: Ein Interview-Post lief bei mir vor Jahren einmal stark, also schlage ich stattdessen den Ausbau der Interview-Reihe vor.',
        en: 'I counter with my own favourite format: an interview post once performed strongly for me years ago, so I propose expanding the interview series instead.',
      },
      {
        de: 'Ich lehne Video grundsätzlich ab, weil unser einziger früherer Videoversuch damals gefloppt ist.',
        en: 'I reject video on principle, because our one earlier video attempt flopped at the time.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorstoß des Content-Leads ist eine voreilige Verallgemeinerung: Aus einem einzigen Ausreißer-Clip wird die Regel „Videos ziehen immer" und daraus eine komplette Strategieumstellung — ohne repräsentative Reichweitendaten. Die beste Option nimmt dem Muster die Grundlage: Du behandelst den Einzelfall als Hypothese, hältst ihn über mehrere Wochen gegen die anderen Formate und entscheidest erst nach der Auswertung. Legitim einsetzen: Ein starker Einzelwert darf ein Anlass zum Testen sein — seriös wird es, wenn er ausdrücklich als Stichprobe von eins gekennzeichnet und geprüft, nicht zur Regel erklärt wird. Erkennen und kontern: Sobald „ein Fall" zu „immer" wird und die Stichprobe fehlt, frag nach der Datengrundlage und trenne Einzelerfolg und Gesamtaussage. Sofort umzustellen handelt genau auf der Stichprobe von eins und verwechselt einen Ausreißer mit einem Trend. Mit dem eigenen Lieblingsformat zu kontern wirkt souverän, begeht aber denselben Fehlschluss aus der Gegenrichtung — ein einzelnes altes Erfolgsbeispiel ist ebenso wenig repräsentativ. Video „grundsätzlich" wegen eines einzigen früheren Flops abzulehnen ist wiederum eine voreilige Verallgemeinerung, nur mit umgekehrtem Vorzeichen: auch ein negativer Einzelfall trägt keine pauschale Regel.',
      en: 'The content lead\'s push is a hasty generalisation: a single outlier clip becomes the rule "video always lands", and from that a complete strategy switch — with no representative reach data. The best option removes that foundation: you treat the single case as a hypothesis, hold it against the other formats over several weeks, and decide only after the review. Used legitimately: a strong single figure may be a reason to test — it becomes sound when it is explicitly flagged as a sample of one and examined, not declared a rule. To spot and counter it: the moment "one case" becomes "always" and the sample is missing, ask for the evidence base and separate the single success from the general claim. Switching immediately acts on exactly that sample of one and mistakes an outlier for a trend. Countering with your own favourite format looks assured but commits the same fallacy from the other direction — one old success story is just as unrepresentative. Rejecting video "on principle" over one earlier flop is again a hasty generalisation, merely with the sign reversed: a single negative case carries no blanket rule either.',
    },
    points: 10,
    primaryTechniqueId: 'hasty_generalization',
    relatedTechniques: ['hasty_generalization', 'cherry_picking'],
  },
  {
    id: 'wave5a-hasty_generalization-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Namensbeitrag eines Start-up-Gründers auf LinkedIn: Ohne ein Wort zu Abschlussquote, Vergleichswerten oder verlorenen Deals verkündet er: „Wir haben in den ersten drei Monaten drei Enterprise-Kunden gewonnen — B2B-Vertrieb ist überhaupt nicht schwer, man muss nur konsequent anrufen."',
      en: 'Bylined LinkedIn post by a start-up founder: with not a word on close rates, benchmarks or lost deals, he declares: "We landed three enterprise customers in our first three months — B2B sales isn\'t hard at all, you just have to call consistently."',
    },
    options: [
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Voreilige Verallgemeinerung: Aus drei gewonnenen Deals in drei Monaten macht der Gründer die pauschale Regel „B2B-Vertrieb ist überhaupt nicht schwer" — ein Sprung von einer winzigen, dazu erkennbar erfolgs-selektierten Basis auf eine allgemeine Aussage. Der Hebel: Die konkrete Zahl „drei Kunden" klingt nach Beleg, verdeckt aber die fehlende Repräsentativität. Legitim einsetzen: Frühe Erfolge zu teilen ist völlig in Ordnung — professionell wird es, wenn du sie als Momentaufnahme kleiner Zahlen einordnest statt als Gesetzmäßigkeit. Erkennen und kontern: Achte auf die Kombination aus sehr kleiner Fallzahl und pauschaler „ist/immer/nie"-Regel; frag nach Quote, Vergleichswerten und den verlorenen Deals, bevor du die Aussage übernimmst. Die Verfügbarkeitsheuristik läge vor, wenn die eigenen jüngsten Abschlüsse ihm nur besonders leicht in den Sinn kämen und er deshalb Erfolg für häufig hielte — hier ist der Kern aber die verallgemeinerte Schlussregel aus wenigen Fällen. Die Repräsentativitätsheuristik beschriebe, einen einzelnen Interessenten anhand von Ähnlichkeit zu einem Prototyp einzuschätzen; darum geht es hier nicht, sondern um den Schluss von wenigen Abschlüssen auf „den B2B-Vertrieb" insgesamt.',
      en: 'Hasty generalization: from three deals won in three months the founder makes the blanket rule "B2B sales isn\'t hard at all" — a leap from a tiny, and visibly success-selected, base to a general claim. The lever: the concrete figure "three customers" sounds like proof but hides the missing representativeness. Used legitimately: sharing early wins is perfectly fine — it becomes professional when you frame them as a snapshot of small numbers rather than a law. To spot and counter it: watch for the combination of a very small case count and a blanket "is/always/never" rule; ask for the rate, benchmarks and the lost deals before adopting the claim. The availability heuristic would apply if his own recent wins merely came to mind most easily, leading him to think success is common — but the core here is the generalised conclusion drawn from few cases. The representativeness heuristic would describe judging a single prospect by resemblance to a prototype; that is not the issue here — the issue is the inference from a few closes to "B2B sales" as a whole.',
    },
    points: 10,
    primaryTechniqueId: 'hasty_generalization',
    relatedTechniques: ['hasty_generalization', 'availability_heuristic', 'representativeness_heuristic'],
  },
];
