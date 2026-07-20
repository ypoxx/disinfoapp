// Backfill: 3 Übungen für straw_man (Strohmann-Argument).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillStrawMan: Exercise[] = [
  {
    id: 'backfill-straw_man-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Bereichsleiter ein?',
      en: 'Which technique is the division head using?',
    },
    scenario: {
      de: 'Strategie-Meeting eines Maschinenbauers: Die Personalleiterin schlägt vor, für drei ortsunabhängige Fachrollen zwei feste Homeoffice-Tage pro Woche einzuführen. Der Bereichsleiter entgegnet vor der Runde: „Also willst du das Büro faktisch abschaffen und jeden machen lassen, was er will — ohne Büro bricht bei uns doch die ganze Zusammenarbeit zusammen." Anschließend argumentiert er ausführlich gegen ein Unternehmen ganz ohne Präsenz.',
      en: 'Strategy meeting at a machinery manufacturer: the head of HR proposes two fixed work-from-home days per week for three location-independent specialist roles. The division head replies to the room: "So you basically want to abolish the office and let everyone do whatever they like — with no office our whole collaboration would collapse." He then argues at length against a company with no on-site presence at all.',
    },
    options: [
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Dammbruch (Slippery Slope)', en: 'Slippery slope' },
      { de: 'Ablenkung (Red Herring)', en: 'Red herring' },
      { de: 'Falsches Dilemma', en: 'False dichotomy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Strohmann: Der Bereichsleiter ersetzt die tatsächliche Position — zwei Homeoffice-Tage für drei Rollen — durch eine überzeichnete Karikatur („Büro abschaffen", „jeder macht, was er will") und widerlegt dann diese Karikatur statt des echten Vorschlags. Der Mechanismus wirkt, weil die aufgeblasene Extremversion leichter anzugreifen ist als die maßvolle Originalposition, das Publikum die Zuspitzung aber unbewusst der Antragstellerin zurechnet. So arbeitest du professionell: Bevor du eine Gegenposition angreifst, gib sie in ihrer stärksten, wohlwollendsten Lesart wieder — dieses Steelmanning ist kein Zugeständnis, sondern ein Glaubwürdigkeits-Gewinn: Wer die Gegenseite fair trifft, wird ernster genommen und kommt zu belastbareren Entscheidungen. Woran du den Strohmann erkennst: Der Bereichsleiter widerlegt minutenlang ein „Unternehmen ganz ohne Präsenz", das niemand gefordert hat. Zum Entschärfen weigerst du dich, die Karikatur zu übernehmen, und bittest ihn, seinen Einwand am konkreten Antrag festzumachen — zwei feste Tage, drei ortsunabhängige Rollen; sobald er das tut, fällt die Extremversion in sich zusammen. Ein Dammbruch-Argument würde den maßvollen Vorschlag akzeptieren, aber eine unbelegte Kettenreaktion ins Extrem behaupten („erst zwei Tage, dann steht das Büro bald ganz leer") — hier wird die Position aber von Anfang an verzerrt wiedergegeben, nicht ihre Folgekette. Ein Red Herring würde ein sachfremdes Nebenthema einführen, statt die Position selbst zu entstellen. Ein falsches Dilemma würde bloß zwei Optionen behaupten („entweder volle Präsenz oder Chaos") — der Kern ist hier jedoch die verzerrte Wiedergabe des Vorschlags, nicht die künstliche Zweiteilung.',
      en: 'Straw man: the division head replaces the actual position — two work-from-home days for three roles — with an inflated caricature ("abolish the office", "everyone does whatever they like") and then refutes that caricature instead of the real proposal. The mechanism works because the inflated extreme is easier to attack than the measured original, while the audience unconsciously credits the exaggeration to the person who proposed it. This is how you work professionally: before you attack an opposing view, restate it in its strongest, most charitable form — this steelmanning is no concession but a gain in credibility: whoever engages the other side fairly is taken more seriously and arrives at sturdier decisions. How you spot the straw man: the division head spends minutes refuting a "company with no on-site presence" that nobody called for. To defuse it, refuse to adopt the caricature and ask him to pin his objection to the concrete proposal — two fixed days, three location-independent roles; the moment he does, the extreme version collapses. A slippery-slope argument would accept the measured proposal but assert an unproven chain reaction toward the extreme ("first two days, then the office soon stands empty") — here, though, the position is distorted from the outset, not its downstream chain. A red herring would introduce an irrelevant side topic rather than warp the position itself. A false dichotomy would merely assert two options ("either full presence or chaos") — but the core here is the distorted rendering of the proposal, not an artificial split.',
    },
    points: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'slippery_slope', 'red_herring', 'false_dichotomy'],
  },
  {
    id: 'backfill-straw_man-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Stakeholder-Podium eines Konsumgüterherstellers, Publikum aus Handel und Presse: Als Nachhaltigkeitsverantwortliche hast du vorgeschlagen, Einwegverpackungen in der Premiumlinie über drei Jahre schrittweise durch Mehrweg zu ersetzen. Ein Vertreter des Handelsverbands entgegnet ins Mikrofon: „Sie wollen also sämtliche Verpackungen verbieten und die Preise für jeden Verbraucher in die Höhe treiben." Die Moderatorin dreht sich zu dir.',
      en: 'Stakeholder panel of a consumer-goods manufacturer, audience from retail and press: as head of sustainability, you proposed replacing single-use packaging in the premium line with reusables over three years, step by step. A retail-association representative retorts into the microphone: "So you want to ban all packaging and drive up prices for every consumer." The moderator turns to you.',
    },
    options: [
      {
        de: 'Ich benenne die Verzerrung ruhig und stelle die echte Position wieder her: „Es geht um die Premiumlinie und um Mehrweg statt Einweg über drei Jahre, nicht um ein Verpackungsverbot" — und beantworte dann die reale Sorge, die Kostenfrage, mit den Pilotzahlen.',
        en: 'I calmly name the distortion and restore the real position: "This is about the premium line and reusables instead of single-use over three years, not a packaging ban" — and then address the genuine concern, the cost question, with the pilot figures.',
      },
      {
        de: 'Ich nehme die zugespitzte Version an und verteidige sie: „Im Grunde ja — langfristig wäre sogar der komplette Verzicht auf Verpackung machbar", und lege dar, warum das gehen könnte.',
        en: 'I take on the exaggerated version and defend it: "Essentially yes — in the long run even fully eliminating packaging would be feasible", and set out why it could work.',
      },
      {
        de: 'Ich kontere mit meiner eigenen Zuspitzung seiner Haltung: „Sie wollen also, dass wir unbegrenzt Plastik in die Umwelt kippen, Hauptsache der Preis bleibt gleich?"',
        en: 'I counter with my own exaggeration of his stance: "So you want us to dump unlimited plastic into the environment as long as the price stays the same?"',
      },
      {
        de: 'Ich lasse das Thema und lenke auf die schwache Recyclingquote seines Verbands: „Bevor Sie über unsere Verpackung reden — Ihre eigenen Mitglieder sammeln kaum die Hälfte zurück."',
        en: 'I drop the topic and pivot to his association\'s weak recycling rate: "Before you talk about our packaging — your own members collect barely half of it back."',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Verbandsvertreter baut einen Strohmann: Aus „Mehrweg in der Premiumlinie über drei Jahre" macht er „sämtliche Verpackungen verbieten und alle Preise hochtreiben" und greift diese Extremversion an. Der Hebel wirkt, weil das Publikum aus Handel und Presse die eingängige Extremformel („alles verbieten, Preise hoch") schneller behält als deinen differenzierten Dreijahresplan — und sie dir zuschreibt, wenn du sie nicht sofort zurückweist. Die beste Antwort trennt zwei Schritte sauber — erst die Verzerrung korrigieren und die reale Position wieder in den Raum stellen, dann die legitime Sorge dahinter (die Kosten) ernst nehmen und mit Daten beantworten. So verlierst du nicht die Deutungshoheit über deinen eigenen Vorschlag. Legitim ist im Gegenzug, ein Gegenargument fair zu bündeln, damit eine Runde vorankommt — der Prüfstein bleibt, ob die Gegenseite sich in deiner Zusammenfassung wiedererkennt. Die zugespitzte Version anzunehmen (Option 2) wirkt souverän, übernimmt aber die Karikatur und liefert dem Publikum genau das Bild, das der Vertreter zeichnen wollte. Mit einer eigenen Zuspitzung zu kontern (Option 3) fühlt sich schlagfertig an, errichtet aber einen zweiten Strohmann und macht das Podium für beide unglaubwürdig. Auf die Recyclingquote auszuweichen (Option 4) ist kein Strohmann mehr, sondern Whataboutism: Der Gegenvorwurf lenkt vom Sachpunkt ab, statt deine Position zu klären, und bestätigt den Eindruck, du weichst der Kostenfrage aus.',
      en: 'The association representative builds a straw man: he turns "reusables in the premium line over three years" into "ban all packaging and drive up every price" and attacks that extreme version. The lever works because an audience of retail and press remembers the catchy extreme ("ban everything, prices up") faster than your nuanced three-year plan — and pins it on you unless you reject it at once. The best answer separates two steps cleanly — first correct the distortion and put the real position back in the room, then take the legitimate concern behind it (cost) seriously and answer it with data. That way you keep control over how your own proposal is read. Conversely, it is legitimate to bundle a counter-argument fairly so a session can move forward — the test remains whether the other side recognises itself in your summary. Taking on the exaggerated version (option 2) looks self-assured but adopts the caricature and hands the audience exactly the picture the representative wanted to paint. Countering with your own exaggeration (option 3) feels quick-witted but erects a second straw man and discredits the panel for both sides. Pivoting to the recycling rate (option 4) is no longer a straw man but whataboutism: the counter-accusation distracts from the substantive point instead of clarifying your position, and confirms the impression that you are dodging the cost question.',
    },
    points: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'whataboutism'],
  },
  {
    id: 'backfill-straw_man-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Mit dieser Entgegnung versucht der Kreativdirektor, ___.',
      en: 'Complete the sentence: with this rejoinder, the creative director is trying to ___.',
    },
    scenario: {
      de: 'Konzeptrunde einer Werbeagentur: Ein Junior-Stratege schlägt vor, das neue Kampagnenmotiv vor dem großen Launch einmal mit einer kleinen Fokusgruppe zu testen. Der Kreativdirektor entgegnet vor dem Team: „Nach dir sollen wir also nie mehr unserem Bauchgefühl trauen und Fokusgruppen die ganze Kreation diktieren lassen — das ist das Ende jeder guten Idee." Danach argumentiert er nur noch gegen „Kampagnen nach Gruppendiktat".',
      en: 'Concept meeting at an ad agency: a junior strategist proposes testing the new campaign visual once with a small focus group before the big launch. The creative director replies in front of the team: "So according to you we should never trust our gut again and let focus groups dictate the entire creative — that\'s the end of every good idea." He then argues only against "campaigns by group dictate".',
    },
    options: [
      {
        de: 'die tatsächliche Position — ein kleiner Vorabtest — als extreme Karikatur auszugeben und diese zu widerlegen',
        en: 'pass off the actual position — one small pre-test — as an extreme caricature and refute that',
      },
      {
        de: 'nur zwei Möglichkeiten zu behaupten, wo mehr existieren',
        en: 'assert only two options where more exist',
      },
      {
        de: 'aus dem kleinen Test eine unaufhaltsame Kette bis zum Untergang der Kreativität abzuleiten',
        en: 'derive from the small test an unstoppable chain ending in the ruin of all creativity',
      },
      {
        de: 'aus einem einzigen Vorschlag eine weitreichende Regel über „alle" und „immer" zu ziehen',
        en: 'draw a sweeping rule about "all" and "always" from a single proposal',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Strohmann: Aus „einmal klein vortesten" macht der Kreativdirektor „nie mehr Bauchgefühl, Fokusgruppen diktieren die ganze Kreation" — eine Position, die niemand vertreten hat, und gegen die es sich bequem austeilt. Wirksam ist das, weil die absolute Verallgemeinerung („nie mehr", „die ganze Kreation") den begrenzten Vorschlag zur Grundsatzforderung aufbläst und das Team unbewusst gegen diese Grundsatzforderung Stellung bezieht, nicht gegen den echten Test. Legitim ist die verwandte, ehrliche Figur, ein Argument zur Prüfung zuzuspitzen (reductio ad absurdum) — aber nur, wenn die Zuspitzung wirklich aus der Position folgt, nicht wenn sie ihr untergeschoben wird. Erkennen und kontern: Achte auf das Zuschreibungssignal „Nach dir sollen wir also …" plus Extrem, und hol die Debatte auf den realen Umfang zurück — „Ich habe einen einzigen kleinen Test vorgeschlagen, keine Gruppendiktatur." Ein falsches Dilemma stellte künstlich zwei Ausgänge gegenüber („Bauchgefühl oder Fokusgruppe"), ohne den Vorschlag selbst zu entstellen. Beim Dammbruch bliebe der Testvorschlag unangetastet; behauptet würde nur, er setze eine unaufhaltsame Kette in Gang, die zwangsläufig im Ruin der Kreativität endet — der Kreativdirektor bestreitet aber gar nicht die Folgen des Tests, er tauscht den Test selbst gegen eine Karikatur. Eine voreilige Verallgemeinerung zöge aus zu wenigen Fällen eine Regel über die Gesamtheit — von Fallzahlen ist hier aber nirgends die Rede; angegriffen wird eine aufgeblasene Fremdposition, kein statistischer Schnellschuss.',
      en: 'Straw man: the creative director turns "test it small, once" into "never trust your gut again, focus groups dictate the entire creative" — a position no one held and one that is comfortable to lash out at. It works because the absolute generalisation ("never again", "the entire creative") inflates a limited proposal into a matter-of-principle demand, and the team unconsciously takes a stand against that demand rather than against the real test. A related, honest move is equally legitimate: pushing an argument to its limit (reductio ad absurdum) to test it — but only when the extreme genuinely follows from the position rather than being foisted on it. To spot and counter it: watch for the attribution signal "So according to you we should …" plus an extreme, and pull the debate back to the real scope — "I proposed one single small test, not rule by focus group." A false dichotomy would artificially pit two outcomes against each other ("gut feeling or focus group") without warping the proposal itself. With a slippery slope the test proposal would stand untouched; the only claim would be that it sets off an unstoppable chain ending inevitably in the ruin of creativity — but the creative director does not dispute the test\'s consequences at all; he swaps the test itself for a caricature. A hasty generalisation would draw a rule about the whole from too few cases — but there is no talk of case counts here; what is attacked is an inflated version of someone else\'s position, not a statistical rush to judgment.',
    },
    points: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'false_dichotomy', 'slippery_slope', 'hasty_generalization'],
  },
];
