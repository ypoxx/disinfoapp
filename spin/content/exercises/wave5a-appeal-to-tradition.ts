// Welle 5a: 3 Übungen für appeal_to_tradition (Traditionsargument).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aAppealToTradition: Exercise[] = [
  {
    id: 'wave5a-appeal_to_tradition-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Seniorchef hier ein?',
      en: 'Which technique is the senior owner using here?',
    },
    scenario: {
      de: 'Produktklausur eines Bäckerei-Filialisten: Als die neue Vertriebsleiterin vorschlägt, das Sortiment um vegane Backwaren zu erweitern, entgegnet der Seniorchef vor der Runde: „Wir backen seit 1920 nach den Rezepten meines Großvaters — was vier Generationen getragen hat, stellen wir nicht in Frage." Einen Sachgrund gegen das neue Sortiment nennt er nicht.',
      en: 'Product review at a bakery chain: when the new head of sales proposes adding vegan baked goods to the range, the senior owner tells the room: "We have baked to my grandfather\'s recipes since 1920 — what has carried four generations, we do not question." He gives no substantive reason against the new range.',
    },
    options: [
      { de: 'Traditionsargument (Ad antiquitatem)', en: 'Appeal to tradition' },
      { de: 'Natürlichkeitsargument (Appeal to Nature)', en: 'Appeal to nature' },
      { de: 'Status-quo-Verzerrung (Default-Präferenz)', en: 'Status-quo bias (default preference)' },
      { de: 'Social Proof (Bandwagon)', en: 'Social proof (bandwagon)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Traditionsargument: Der Seniorchef macht das Alter der Praxis („seit 1920", „vier Generationen") selbst zum Argument — aus der Dauer folgt für ihn die Richtigkeit, ein Sachgrund gegen vegane Produkte fällt bewusst weg. Der Hebel verschiebt die Debatte vom Sortiment auf das Erbe, das niemand offen antasten will. Legitim einsetzen: Herkunft und lange Erfahrung sind ein echter Wert — professionell bleibt es, wenn du sie als Markenkapital benennst und die Entscheidung trotzdem an heutigen Kriterien misst, statt das Alter als Beweis auszugeben. Erkennen und kontern: Du erkennst das Muster an Zeit- und Herkunftswörtern („seit jeher", „gewachsen") plus fehlendem Sachbeleg — trenne den emotionalen Traditionswert von der Sachfrage und bitte um die inhaltlichen Kriterien (Nachfrage, Marge, Zielgruppe). Das Natürlichkeitsargument bräuchte die Behauptung, etwas sei gut, weil „natürlich" — hier zählt Alter, nicht Natur. Die Status-quo-Verzerrung meint das Festhalten am Bestehenden, weil Wechsel Aufwand oder Risiko bedeutet; hier ist es dagegen das Alter selbst, das als Gütesiegel dient. Social Proof (Bandwagon) beriefe sich darauf, dass viele andere es gerade so machen — hier geht es um Dauer über die Zeit, nicht um die Menge der Mitmacher.',
      en: 'Appeal to tradition: the senior owner turns the age of the practice ("since 1920", "four generations") into the argument itself — for him longevity implies correctness, and a substantive reason against vegan products is deliberately absent. The lever shifts the debate away from the product range and onto a heritage no one wants to openly challenge. Used legitimately: origin and long experience are real value — it stays professional when you name them as brand capital yet still judge the decision by today\'s criteria, rather than presenting age as proof. To spot and counter it: you recognise the pattern by time-and-origin cues ("always", "grown over decades") plus a missing substantive reason — separate the emotional heritage value from the actual question and ask for the concrete criteria (demand, margin, target audience). Appeal to nature would need the claim that something is good because it is "natural" — here it is age, not nature, that counts. Status-quo bias means clinging to the existing arrangement because change means effort or risk; here it is the age itself that serves as a seal of quality. Social proof (bandwagon) would invoke that many others are doing it right now — here the point is duration over time, not the number of people joining in.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_tradition',
    relatedTechniques: ['appeal_to_tradition', 'appeal_to_nature', 'default_status_quo', 'social_proof'],
  },
  {
    id: 'wave5a-appeal_to_tradition-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Redaktionssitzung zum Relaunch des Kundenmagazins: Als Content-Lead schlägst du vor, das gedruckte Heft durch ein digitales Format zu ersetzen. Der Herausgeber winkt ab: „Dieses Magazin erscheint seit vierzig Jahren gedruckt — das ist unsere Tradition, das bewahren wir." Die Runde nickt zögernd.',
      en: 'Editorial meeting on relaunching the customer magazine: as content lead you propose replacing the printed issue with a digital format. The publisher waves it off: "This magazine has appeared in print for forty years — that is our tradition, and we preserve it." The room nods hesitantly.',
    },
    options: [
      {
        de: 'Ich trenne Alter und Sachfrage: Ich würdige, dass das Heft die Marke lange geprägt hat, und bitte dann um die inhaltlichen Kriterien — Reichweite, Kosten, Nutzung —, an denen wir Druck und Digital hier und heute vergleichen.',
        en: 'I separate age from the substantive question: I acknowledge that the magazine has shaped the brand for a long time, then ask for the concrete criteria — reach, cost, usage — by which we compare print and digital here and now.',
      },
      {
        de: 'Ich gebe nach: Ein vierzig Jahre altes Format hat sich offensichtlich bewährt, dagegen komme ich sachlich nicht an.',
        en: 'I give in: a forty-year-old format has evidently proven itself, and I cannot argue against that.',
      },
      {
        de: 'Ich kontere, dass gedruckte Magazine altmodisch und von gestern seien, und dränge auf einen sofortigen Schnitt.',
        en: 'I counter that printed magazines are old-fashioned and yesterday\'s news, and push for an immediate cut.',
      },
      {
        de: 'Ich verweise darauf, dass inzwischen alle Wettbewerber digital publizieren — also müssten wir schon deshalb nachziehen.',
        en: 'I point out that all competitors now publish digitally — so for that reason alone we should follow suit.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Einwand ist ein Traditionsargument: Das Alter des Formats („seit vierzig Jahren") wird zum Beweis seiner Richtigkeit gemacht, ohne dass Druck gegen Digital sachlich abgewogen wird. Die beste Option nimmt dem Muster die Grundlage: Du würdigst den Traditionswert ausdrücklich — so bleibt der Herausgeber im Boot — und holst die Entscheidung zurück auf heutige Kriterien wie Reichweite, Kosten und Nutzung. Legitim einsetzen: Auf gewachsene Marken-Substanz hinzuweisen ist berechtigt; seriös wird es, wenn du sie als einen Faktor neben den Sachzahlen führst, nicht als Ersatz für sie. Erkennen und kontern: Sobald Alter oder Herkommen die Sachprüfung ersetzen, trenne beides und frag nach den inhaltlichen Vergleichsgrößen. Nachzugeben belohnt genau die Taktik und macht Langlebigkeit zum Vetorecht. Die gedruckte Ausgabe pauschal als „von gestern" abzukanzeln greift die Tradition an, statt zu argumentieren, und brüskiert die Runde ohne Sachgewinn. Der Verweis auf „alle Wettbewerber" ersetzt einen Fehlschluss durch den nächsten — das wäre Social Proof (Bandwagon): dass viele es tun, ist so wenig ein Beleg wie dass man es lange tat.',
      en: 'The objection is an appeal to tradition: the age of the format ("for forty years") is made proof of its correctness, without weighing print against digital on the merits. The best option removes that foundation: you explicitly honour the heritage value — keeping the publisher on board — and bring the decision back to today\'s criteria such as reach, cost and usage. Used legitimately: pointing to grown brand substance is fair; it becomes sound when you carry it as one factor alongside the hard figures, not as a replacement for them. To spot and counter it: the moment age or custom replaces the substantive check, separate the two and ask for the concrete comparison metrics. Giving in rewards exactly that tactic and turns longevity into a veto. Dismissing the print edition wholesale as "yesterday\'s news" attacks the tradition instead of arguing, and alienates the room with no substantive gain. Invoking "all competitors" swaps one fallacy for the next — that would be social proof (bandwagon): that many do it is no more proof than that it has long been done.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_tradition',
    relatedTechniques: ['appeal_to_tradition', 'social_proof'],
  },
  {
    id: 'wave5a-appeal_to_tradition-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Namensbeitrag der Geschäftsführerin eines Familienunternehmens in einem Branchenmagazin gegen die Umstellung auf Fernarbeit: „Bei uns sitzt man seit der Gründung 1954 zusammen im Haus — dieses Miteinander ist über Jahrzehnte gewachsen, und was gewachsen ist, gibt man nicht auf." Belege, dass Präsenz die Ergebnisse verbessert, nennt sie nicht.',
      en: 'Bylined op-ed by the managing director of a family firm in a trade magazine, opposing a switch to remote work: "Here we have sat together in one building since our founding in 1954 — this togetherness has grown over decades, and you don\'t give up what has grown." She offers no evidence that on-site presence improves results.',
    },
    options: [
      { de: 'Traditionsargument (Ad antiquitatem)', en: 'Appeal to tradition' },
      { de: 'Natürlichkeitsargument (Appeal to Nature)', en: 'Appeal to nature' },
      { de: 'Status-quo-Verzerrung (Default-Präferenz)', en: 'Status-quo bias (default preference)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Traditionsargument: Die Geschäftsführerin begründet die Präsenz allein mit ihrer Dauer („seit 1954", „über Jahrzehnte gewachsen") — das Alter der Praxis soll ihre Richtigkeit belegen, ein Ergebnisbeleg für Präsenz fehlt bewusst. Legitim einsetzen: Dass ein Team über Jahrzehnte Nähe und Zusammenhalt aufgebaut hat, darf in einer solchen Entscheidung durchaus mitzählen — die Geschäftsführerin müsste dann aber offenlegen, was das gemeinsame Haus konkret leistet, das ein hybrides Modell nicht auch könnte. Erkennen und kontern: Stutzig macht dich, dass „1954" und „über Jahrzehnte gewachsen" die ganze Beweislast tragen, während zur eigentlichen Streitfrage — bringt Präsenz die besseren Ergebnisse? — kein Wort fällt; genau danach fragst du: nach Zahlen zu Produktivität, Fluktuation und Mitarbeiterbindung. Das Natürlichkeitsargument würde behaupten, Präsenz sei „von Natur aus" die menschengemäße Arbeitsform — hier zählt aber das Alter, nicht die Natur. Die Status-quo-Verzerrung meint das Beharren auf dem Bestehenden, weil ein Wechsel Aufwand oder Risiko bedeutet; hier ist es dagegen ausdrücklich das über die Zeit Gewachsene, das als Gütesiegel dient.',
      en: 'Appeal to tradition: the managing director justifies on-site presence solely by its duration ("since 1954", "grown over decades") — the age of the practice is meant to prove its correctness, and evidence of results is deliberately absent. Used legitimately: the closeness and cohesion a team has built over decades may well weigh in such a decision — but the managing director would then have to show what the shared building actually delivers that a hybrid model could not. To spot and counter it: what should give you pause is that "1954" and "grown over decades" carry the entire burden of proof, while the real point of contention — does presence produce the better results? — goes unmentioned; ask precisely that, for figures on productivity, turnover and staff retention. Appeal to nature would claim that presence is "by nature" the human-appropriate way to work — but here it is age, not nature, that counts. Status-quo bias means clinging to the existing arrangement because a change means effort or risk; here it is expressly what has grown over time that serves as a seal of quality.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_tradition',
    relatedTechniques: ['appeal_to_tradition', 'appeal_to_nature', 'default_status_quo'],
  },
];
