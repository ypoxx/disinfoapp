// Backfill: 3 Übungen für narrative_persuasion (Narrative Persuasion).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Technik-Eintrag ist fertig; hier werden NUR Übungen ergänzt.
// Kein evidenceTier gesetzt (confidence 0.86, evidenceQuality 'high')
// → nicht 'frontier': Wirkung darf geprüft werden, kein Begriffswissen-Zwang.
// Kein seriousMode. Registrierung in index.ts erfolgt durch die Hauptsession.
// Die drei Szenarien meiden bewusst den technique.examples-Katalog:
//   Übung 1 = immersiver „Tag im Quartier" (Transportation, kein Heldenbogen),
//   Übung 2 = Firmensaga bei einer Reorganisation, Übung 3 = strategische Parabel.

import type { Exercise } from '../types';

export const backfillNarrativePersuasion: Exercise[] = [
  {
    id: 'backfill-narrative_persuasion-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik ist hier am Werk?',
      en: 'Which technique is doing the work here?',
    },
    scenario: {
      de: 'Investoren-Pitch einer Projektentwicklerin für ein neues Stadtquartier, vor Fonds und Fachpresse: Statt Rendite, Leerstandsquoten oder Baukosten zu nennen, führt sie das Publikum zwölf Minuten lang durch „einen Samstag im Jahr 2035" — sie folgt der Anwohnerin Lena vom Morgenkaffee auf dem begrünten Innenhof über den Wochenmarkt bis zum Konzert am Abend, Szene für Szene, mit Geräuschen, Licht und Nachbarn beim Namen. Keine einzige Kennzahl fällt; getragen wird der Pitch allein davon, dass die Zuhörer eine Weile in diesem erzählten Tag leben.',
      en: 'Investor pitch by a property developer for a new city district, before funds and trade press: instead of citing yields, vacancy rates or build costs, she walks the audience for twelve minutes through "a Saturday in 2035" — following resident Lena from her morning coffee in the planted courtyard, through the weekly market, to the evening concert, scene by scene, with sound, light and neighbours by name. Not a single figure is mentioned; the whole pitch rests on the audience living for a while inside that narrated day.',
    },
    options: [
      { de: 'Narrative Persuasion (Erzählstrategie)', en: 'Narrative persuasion' },
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
      { de: 'Liking (Sympathie-Prinzip)', en: 'Liking' },
      { de: 'Framing (Bezugsrahmen setzen)', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Narrative Persuasion: Der Pitch verzichtet auf jedes Argument und ersetzt es durch Versenkung — die Zuhörer folgen einer Figur Szene für Szene durch einen ausgemalten Tag und erleben das Quartier, statt es zu bewerten. Dieses Eintauchen (Transportation) senkt den inneren Widerspruch: Wer in Lenas Samstag lebt, prüft die fehlenden Kennzahlen nicht. So setzt du es sauber ein: Eine erzählte Szene macht ein abstraktes Konzept — „lebendiges Quartier" — greifbar; professionell bleibt sie, wenn die harten Zahlen zu Rendite, Kosten und Belegung auf der nächsten Folie folgen. So durchschaust du es: Nimm die Erzählung gedanklich weg und sieh nach, welche prüfbare Aussage übrig bleibt; bleibt nur ein Gefühl von Lebensqualität, hat die Geschichte den Beleg ersetzt. Ein Emotionaler Appell käme ohne diesen ausgespielten Tagesbogen aus — ein einziges rührendes Bild oder ein Sehnsuchtssatz täte es; hier trägt aber die durchkomponierte Szenenfolge, nicht ein isolierter Reiz. Liking gewönne Zustimmung, indem sich die Entwicklerin selbst als nahbar und dir ähnlich inszenierte — hier steht nicht sie im Zentrum, sondern eine Figur, in deren Tag du hineingezogen wirst. Und Framing rückte dieselben Fakten in einen Deutungsrahmen („Zukunft statt Beton") und argumentierte darin — hier wird nicht gerahmt, sondern ein ganzer Tag von morgens bis abends durcherzählt.',
      en: 'Narrative persuasion: the pitch forgoes any argument and replaces it with immersion — the audience follows a character scene by scene through a painted-out day and experiences the district instead of appraising it. That immersion (transportation) lowers inner resistance: anyone living inside Lena\'s Saturday does not audit the missing figures. Using it cleanly: a narrated scene makes an abstract idea — "a living neighbourhood" — tangible; it stays professional when the hard numbers on yield, cost and occupancy follow on the next slide. Seeing through it: mentally take the story away and check which testable claim is left; if all that remains is a feeling of quality of life, the story has replaced the evidence. An emotional appeal would need no such enacted day-long arc — a single moving image or one line of longing would do; here it is the fully composed sequence of scenes that carries it, not an isolated trigger. Liking would win agreement by casting the developer herself as approachable and similar to you — but she is not at the centre here, a character is, and it is her day you are drawn into. And framing would place the same facts in an interpretive frame ("future, not concrete") and argue within it — here nothing is framed, a whole day is told through from morning to night.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'liking', 'framing'],
  },
  {
    id: 'backfill-narrative_persuasion-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Internes Ankündigungsvideo zu einer großen Reorganisation, das du als Kommunikationsleiter vor dem Versand an die Belegschaft abnimmst: Der Entwurf erzählt den Umbau als nächstes Kapitel einer durchgehenden Firmensaga — Gründergaragen-Anfänge, gemeinsam überstandene Krisen, jetzt der „mutige nächste Aufbruch", getragen von wiederkehrenden Figuren und einem Spannungsbogen über Jahre. Was sich für welche Abteilung konkret ändert, welche Rollen wegfallen, welcher Zeitplan gilt und welche Unterstützung es gibt, steht nirgends. Der Sog der Geschichte soll die Zustimmung tragen.',
      en: 'Internal announcement film for a major reorganisation that you, as head of communications, sign off before it goes to staff: the draft tells the restructuring as the next chapter of a continuous company saga — founder-garage beginnings, crises weathered together, and now the "bold next departure", carried by recurring characters and a tension arc spanning years. What concretely changes for which department, which roles disappear, what the timeline is and what support is on offer appears nowhere. The pull of the story is meant to carry the assent.',
    },
    options: [
      {
        de: 'Ich behalte einen kurzen erzählerischen Rahmen, koppele ihn aber an die konkreten, überprüfbaren Fakten — was sich ändert, für wen, bis wann und mit welcher Unterstützung: Die Geschichte stellt den Sinn her, die Fakten tragen die Entscheidung.',
        en: 'I keep a short narrative frame but tie it to the concrete, verifiable facts — what changes, for whom, by when and with what support: the story supplies the meaning, the facts carry the decision.',
      },
      {
        de: 'Ich gebe den Saga-Film so frei: Eine mitreißende Geschichte trägt eine unbequeme Veränderung nachweislich besser durch die Belegschaft als eine nüchterne Faktenliste.',
        en: 'I clear the saga film as is: a stirring story demonstrably carries an uncomfortable change through the workforce better than a sober list of facts.',
      },
      {
        de: 'Ich streiche jede Erzählung und verschicke nur ein trockenes FAQ mit Orgchart und Stichpunkten — das wirkt sachlich, und niemand kann es als Stimmungsmache abtun.',
        en: 'I cut every bit of narrative and send only a dry FAQ with an org chart and bullet points — that looks factual, and no one can dismiss it as mood-making.',
      },
      {
        de: 'Ich lasse die Saga zuspitzen — dramatischerer Bogen, mehr Gefühl, stärkere Heldenmomente —, damit die Ankündigung noch besser zündet.',
        en: 'I have the saga sharpened — a more dramatic arc, more emotion, stronger hero moments — so the announcement lands even harder.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf betreibt Narrative Persuasion: Ein durchkomponierter Saga-Bogen zieht die Belegschaft in eine Geschichte und ersetzt damit die Auskunft, die eine Reorganisation schuldet — wer sich vom „mutigen Aufbruch" mitreißen lässt, fragt zunächst nicht nach Stellenabbau und Zeitplan. Eine Geschichte kann Sinn stiften und Orientierung geben; die Entscheidung tragen kann nur, was überprüfbar ist. Die beste Option trennt genau das: kurzer erzählerischer Rahmen für den Sinn, konkrete Fakten für die Substanz. Den Saga-Film unverändert freizugeben wirkt vertretbar, weil eine gute Geschichte Veränderung tatsächlich besser durch eine Organisation trägt als eine Aufzählung — doch ohne die konkreten Folgen erzeugt der Sog nur Zustimmung ohne Wissen, und die kippt, sobald die ersten Kündigungen kommen. Jede Erzählung zu streichen und nur ein trockenes FAQ zu schicken wirkt gerade deshalb verlockend, weil es nüchtern und unangreifbar aussieht — doch es verschenkt den legitimen Teil: Ohne jeden Rahmen versteht niemand, warum der Umbau nötig ist, und die Fakten bleiben unverbunden stehen. Die Saga zuzuspitzen erhöht die Transportation und damit gerade die Verwechslung von Ergriffensein und Verstehen — du würdest den Sog verstärken, der die fehlenden Fakten unsichtbar macht.',
      en: 'The draft runs narrative persuasion: a fully composed saga arc pulls the workforce into a story and thereby stands in for the disclosure a reorganisation owes — anyone swept up in the "bold departure" does not first ask about job cuts and timelines. A story can supply meaning and orientation; only what is verifiable can carry the decision. The best option separates exactly that: a short narrative frame for the meaning, concrete facts for the substance. Clearing the saga film unchanged looks defensible, because a good story really does carry change through an organisation better than a list — but without the concrete consequences the pull produces only assent without knowledge, and that collapses the moment the first redundancies land. Cutting every bit of narrative and sending only a dry FAQ is tempting precisely because it looks sober and unassailable — yet it throws away the legitimate part: with no frame at all, no one grasps why the change is needed, and the facts stand there unconnected. Sharpening the saga raises the transportation, and with it the very confusion between being moved and understanding — you would deepen the pull that keeps the missing facts out of sight.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'framing'],
  },
  {
    id: 'backfill-narrative_persuasion-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit dieser Parabel versucht der Berater, ___.',
      en: 'Complete the sentence: with this parable, the consultant is trying to ___.',
    },
    scenario: {
      de: 'Strategie-Präsentation vor dem Vorstand eines Klienten: Statt Marktzahlen, Margen oder Szenarien zu zeigen, erzählt der Berater die ausgedachte Geschichte zweier Fährbetriebe — den einen, der stur an seinen alten Routen festhält und langsam untergeht, den anderen, der sich früh neu erfindet und aufblüht. Er baut die beiden Figuren über zehn Minuten aus, mit Wendepunkten und einem klaren Ende. Erst am Schluss fällt der Satz: „Genau vor dieser Wahl stehen Sie." Eine Datenfolie kommt nicht.',
      en: 'Strategy presentation to a client\'s board: instead of showing market figures, margins or scenarios, the consultant tells the made-up story of two ferry operators — one that stubbornly clings to its old routes and slowly sinks, and one that reinvents itself early and thrives. He builds up the two characters over ten minutes, with turning points and a clear ending. Only at the close comes the line: "This is exactly the choice you face." No data slide follows.',
    },
    options: [
      {
        de: 'das Publikum über eine ausgebaute Geschichte mit Figuren und Handlungsbogen so einzunehmen, dass ihre Moral die Empfehlung ersetzt (Narrative Persuasion)',
        en: 'draw the board in with a developed story that has characters and an arc, so that its moral stands in for the recommendation (narrative persuasion)',
      },
      {
        de: 'die Zuhörer mit einem direkten Gefühlsstoß — Rührung, Empörung — zu bewegen, der ganz ohne Handlung und Figuren auskommt (Emotionale Appelle)',
        en: 'move the listeners with a direct jolt of feeling — tenderness, indignation — that works with no plot and no characters at all (emotional appeal)',
      },
      {
        de: 'mit einem vorgeschalteten Reiz ein späteres, davon getrenntes Urteil unbemerkt zu bahnen (Priming)',
        en: 'quietly prime a later, separate judgement with a stimulus placed in advance (priming)',
      },
      {
        de: 'über betonte Ähnlichkeit und Sympathie zwischen sich und dem Vorstand Zustimmung zu gewinnen (Liking)',
        en: 'win agreement through emphasised similarity and warmth between himself and the board (liking)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Narrative Persuasion: Nicht eine Kennzahl und nicht ein einzelner Reiz überzeugt hier, sondern eine ausgebaute Parabel — zwei Figuren, Wendepunkte, ein klares Ende —, deren Moral als Empfehlung durchgeht. Das Versinken in dieser Geschichte (Transportation) verdrängt die Frage nach Markt, Marge und Alternativen: Wer die beiden Fährbetriebe miterlebt hat, nimmt die Schlusszeile als bewiesen. So setzt du es sauber ein: Eine Analogie macht eine strategische Weggabelung anschaulich und ist ein starker Einstieg — tragfähig bleibt sie, wenn danach die Zahlen kommen, die zeigen, dass dein Fall wirklich der der zweiten Fähre ist. So schützt du dich: Frag nach der Datenfolie hinter der Moral — verlangt die Empfehlung mehr als die Parabel, muss sie sich auch außerhalb der Geschichte belegen lassen. Ein Emotionaler Appell bräuchte keine ausgespielte Handlung — ein einziges Bild oder ein empörter Satz reichte; hier wirkt der ganze durcherzählte Verlauf zweier Betriebe, nicht ein isolierter Gefühlsstoß. Priming setzte einen vorgeschalteten Reiz, der ein späteres, getrenntes Urteil heimlich bahnt; hier ist die Geschichte kein Vorlauf, sondern offen die vorgetragene Empfehlung. Und Liking setzte auf betonte Nähe und Sympathie („ich bin wie Sie") — die Parabel arbeitet aber nicht über Zuneigung zum Berater, sondern über das Hineinziehen in die Erzählung.',
      en: 'Narrative persuasion: what convinces here is neither a figure nor a single trigger but a developed parable — two characters, turning points, a clear ending — whose moral passes for the recommendation. Being immersed in that story (transportation) crowds out the question of market, margin and alternatives: anyone who has lived through the two ferry operators takes the closing line as proven. Using it cleanly: an analogy makes a strategic fork in the road vivid and is a strong way in — it holds up when the figures then follow that show your case really is the second ferry\'s. Protecting yourself: ask for the data slide behind the moral — if the recommendation claims more than the parable, it has to be provable outside the story too. An emotional appeal would need no enacted plot — a single image or one indignant sentence would do; here it is the whole told course of two operators at work, not an isolated jolt of feeling. Priming would set a stimulus placed in advance that secretly shapes a later, separate judgement; here the story is no run-up but openly the recommendation being delivered. And liking would rest on emphasised closeness and warmth ("I am like you") — but the parable works not through fondness for the consultant, it works by drawing the room into the narrative.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'priming', 'liking'],
  },
];
