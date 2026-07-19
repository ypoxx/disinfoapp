// Welle 5b: 3 Übungen für stereotyping (Stereotypisierung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen; kein seriousMode
// (Kategorie social_dynamics) → normaler doppelter Takeaway.
// Registrierung in index.ts erfolgt NICHT in dieser Datei.

import type { Exercise } from '../types';

export const wave5bStereotyping: Exercise[] = [
  {
    id: 'wave5b-stereotyping-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt die Marktforschungsleiterin hier?',
      en: 'Which technique is the market-research lead using here?',
    },
    scenario: {
      de: 'Strategie-Meeting zur Neuausrichtung des Vertriebskanals: Die Marktforschungsleiterin präsentiert der Geschäftsführung ein Kundensegment: „Unsere Bestandskunden über 60 sind durch die Bank technikscheu und beratungsresistent — das ist bei denen einfach so. Digitale Angebote können wir uns bei der Gruppe sparen, die erreichen wir nur analog." Zahlen zum tatsächlichen Nutzungsverhalten legt sie nicht vor.',
      en: 'Strategy meeting on realigning the sales channel: the market-research lead presents a customer segment to the executive board: "Our existing customers over 60 are technophobic and advice-resistant across the board — that is just how they are. We can save ourselves any digital offering for that group, we only reach them offline." She presents no figures on actual usage behaviour.',
    },
    options: [
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Stereotypisierung (Stereotyping)', en: 'Stereotyping' },
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
      { de: 'Repräsentativitätsheuristik (Representativeness heuristic)', en: 'Representativeness heuristic' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Stereotypisierung: Ein festes, vereinfachendes Gruppenbild („über 60 = technikscheu, durch die Bank, das ist bei denen einfach so") wird als selbstverständlich vorausgesetzt und pauschal auf jedes Mitglied übertragen — die konkrete Person verschwindet hinter der zugeschriebenen Alterseigenschaft. Der Hebel wirkt, weil ein griffiges Schema die aufwendige Einzelfall- und Datenprüfung ersetzt und sofort anschlussfähig ist. Legitim einsetzen: Zielgruppen zu segmentieren und Muster zu benennen ist Kern jeder Ansprache — professionell bleibt es, wenn du das Bild an belegten Segmentdaten festmachst, Untergruppen zulässt und es als Hypothese behandelst, nicht als feststehende Eigenschaft. Erkennen und kontern: Frag nach dem Beleg für die Pauschale und danach, wie groß die Streuung innerhalb der Gruppe wirklich ist — sobald „die sind eben so" ohne Daten die Entscheidung trägt und Gegenbeispiele nur „Ausnahmen" sind, ist es Stereotypisierung. Scapegoating / Othering wäre es, wenn die Gruppe für ein konkretes Problem verantwortlich gemacht und als Bedrohung markiert würde — hier wird niemand beschuldigt, nur pauschal charakterisiert. Voreilige Verallgemeinerung betont den Fehlschluss aus zu wenigen Fällen („ich sah drei, also alle"); hier wird das Bild gar nicht erst aus Beobachtungen abgeleitet, sondern als bekanntes Schema vorausgesetzt. Die Repräsentativitätsheuristik schätzt Wahrscheinlichkeit oder Zugehörigkeit danach, wie typisch ein Einzelfall wirkt — hier geht es nicht um eine Wahrscheinlichkeitsschätzung, sondern um die pauschale Eigenschaftszuschreibung an eine ganze Gruppe.',
      en: 'Stereotyping: a fixed, oversimplified image of a group ("over 60 = technophobic, across the board, that is just how they are") is taken for granted and applied wholesale to every member — the individual disappears behind the ascribed trait of age. The lever works because a snappy schema replaces the costly work of checking single cases and data, and slots in instantly. Used legitimately: segmenting audiences and naming patterns is the heart of any outreach — it stays professional when you anchor the image in evidenced segment data, allow for sub-groups, and treat it as a hypothesis rather than a settled trait. To spot and counter it: ask for evidence behind the blanket claim and how much variation there really is within the group — as soon as "that is just how they are" carries the decision without data and counter-examples are dismissed as "exceptions", it is stereotyping. Scapegoating / othering would blame the group for a concrete problem and mark it as a threat — here no one is accused, the group is merely characterised. Hasty generalization stresses the fallacy of inferring from too few cases ("I saw three, so all of them"); here the image is not derived from observations at all but presupposed as a known schema. The representativeness heuristic judges probability or membership by how typical a single case looks — here it is not a probability estimate but a blanket ascription of a trait to a whole group.',
    },
    points: 10,
    primaryTechniqueId: 'stereotyping',
    relatedTechniques: ['stereotyping', 'scapegoating_othering', 'hasty_generalization', 'representativeness_heuristic'],
  },
  {
    id: 'wave5b-stereotyping-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Kreativ-Abnahme für eine Vorsorgekampagne, die du als Kommunikationsverantwortliche verantwortest: Der Zielgruppen-Absatz im Agentur-Briefing lautet: „Die Rentner sind technikscheu, ängstlich und misstrauisch gegen alles Neue — Motive groß, analog und beruhigend." Der Absatz nennt keine Segmentdaten, sondern ein durchgängiges Altersklischee. Die Agentur wartet auf dein Okay.',
      en: 'Creative sign-off for a retirement-provision campaign you own as communications lead: the audience paragraph in the agency brief reads: "Pensioners are technophobic, anxious and suspicious of anything new — visuals big, analogue and reassuring." The paragraph cites no segment data, only a blanket cliché of age. The agency is waiting for your go-ahead.',
    },
    options: [
      {
        de: 'Ich übernehme den Absatz unverändert — das Bild ist eingängig, gibt der Kreation eine klare Richtung, und für die Motivauswahl reicht eine griffige Zielgruppenskizze völlig aus.',
        en: 'I keep the paragraph unchanged — the image is catchy, gives the creative team a clear direction, and a snappy audience sketch is perfectly enough for choosing the visuals.',
      },
      {
        de: 'Ich streiche den Zielgruppen-Absatz ersatzlos, damit niemand voreingenommen wird — die Kreativen sollen die Motive unbelastet von jeder Vorfestlegung entwickeln und ihrem Gespür folgen.',
        en: 'I cut the audience paragraph with nothing in its place so no one is biased — the creatives should develop the visuals free of any prior fix and follow their instinct.',
      },
      {
        de: 'Ich ersetze das pauschale Altersbild durch belegte Segmentdaten: Ich lasse die Zielgruppe nach tatsächlichem Nutzungsverhalten aufschlüsseln, benenne Untergruppen statt „die Rentner" und schlage einen Ansprache-Test vor.',
        en: 'I replace the blanket image of age with evidenced segment data: I have the audience broken down by actual usage behaviour, name sub-groups instead of "pensioners", and propose a test of the messaging.',
      },
      {
        de: 'Ich drehe das Klischee ins Positive und formuliere: „Die Rentner sind alle treu, markenloyal und dankbar für klare Ansprache" — so bleibt die Zielgruppe griffig und der Ton wertschätzend.',
        en: 'I flip the cliché into the positive and write: "Pensioners are all loyal, brand-faithful and grateful for clear messaging" — that keeps the audience snappy and the tone appreciative.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Der Briefing-Absatz ist Stereotypisierung: Ein festes, vereinfachendes Altersbild wird als selbstverständlich vorausgesetzt und pauschal auf „die Rentner" übertragen — die konkrete Zielgruppe verschwindet hinter der zugeschriebenen Eigenschaft, und das Schema ersetzt die Segmentanalyse. Die beste Option nimmt dem Muster die Grundlage: Du behältst die legitime Absicht (eine klare Zielgruppe) bei, ersetzt aber die Pauschale durch belegte Segmentdaten, benennst Untergruppen und behandelst die Ansprache als testbare Hypothese. Legitim einsetzen: Zielgruppen zu bündeln und Muster zu benennen ist zulässig — der Unterschied ist, ob das Bild an Daten hängt und Streuung zulässt oder als feststehende Gruppeneigenschaft gesetzt wird. Erkennen und kontern: Sobald „die sind eben so" ohne Beleg die Planung trägt, frag nach den Segmentdaten und der Streuung innerhalb der Gruppe. Den Absatz unverändert zu übernehmen adelt das Klischee zur Planungsgrundlage. Den Absatz ganz zu streichen wirft mit der Pauschale auch die nötige, datenbasierte Zielgruppenschärfe weg — Freiheit ersetzt keine Analyse. Das Klischee ins Positive zu drehen bleibt Stereotypisierung: „alle treu und dankbar" ist dasselbe rigide Gruppenbild, nur mit umgekehrtem Vorzeichen.',
      en: 'The brief paragraph is stereotyping: a fixed, oversimplified image of age is taken for granted and applied wholesale to "pensioners" — the actual audience disappears behind the ascribed trait, and the schema replaces segment analysis. The best option removes that foundation: you keep the legitimate intent (a clear audience) but replace the blanket claim with evidenced segment data, name sub-groups, and treat the messaging as a testable hypothesis. Used legitimately: bundling audiences and naming patterns is fair — the difference is whether the image is anchored in data and allows for variation, or is set as a settled group trait. To spot and counter it: as soon as "that is just how they are" carries the planning without evidence, ask for the segment data and the variation within the group. Keeping the paragraph unchanged elevates the cliché into the basis for planning. Deleting the paragraph entirely throws out the necessary, data-based audience focus along with the blanket claim — freedom is no substitute for analysis. Flipping the cliché into the positive is still stereotyping: "all loyal and grateful" is the same rigid group image, merely with the sign reversed.',
    },
    points: 10,
    primaryTechniqueId: 'stereotyping',
    relatedTechniques: ['stereotyping'],
  },
  {
    id: 'wave5b-stereotyping-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fachpodcast zur Gründerszene: Der Sprecher eines Wirtschaftsverbands sagt zum Moderator: „Die junge Gründergeneration, das sind doch alle die gleichen Selbstdarsteller — laut im Pitch, dünn in der Bilanz. Kennt man ja." Eine einzelne Gründerin oder konkrete Zahlen kommen im Gespräch nicht vor.',
      en: 'Trade podcast on the start-up scene: the spokesperson of a business association tells the host: "The young founder generation, they are all the same self-promoters — loud in the pitch, thin on the balance sheet. You know the type." No individual founder and no concrete figures come up in the conversation.',
    },
    options: [
      { de: 'Repräsentativitätsheuristik (Representativeness heuristic)', en: 'Representativeness heuristic' },
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
      { de: 'Stereotypisierung (Stereotyping)', en: 'Stereotyping' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Stereotypisierung: Ein festes, vereinfachendes Gruppenbild („alle die gleichen Selbstdarsteller", „kennt man ja") wird als selbstverständlich vorausgesetzt und pauschal auf jeden einzelnen Gründer übertragen — die Person zählt nur noch als Träger der zugeschriebenen Gruppeneigenschaft. Erkennen und kontern: Frag nach dem Beleg für die Pauschale und nach der Streuung innerhalb der Gruppe — sobald „die sind doch alle so" ohne Daten steht und Gegenbeispiele als Ausnahme abgetan werden, ist es Stereotypisierung. Legitim einsetzen: Ein Muster in einer Gruppe zu benennen ist zulässig, wenn du es an Daten festmachst, als Hypothese behandelst und Untergruppen zulässt. Voreilige Verallgemeinerung würde den Fehlschluss aus zu wenigen beobachteten Fällen betonen („ich traf drei, also alle"); hier wird das Bild aber gar nicht aus Beobachtungen abgeleitet, sondern als bekanntes Schema vorausgesetzt („kennt man ja"). Die Repräsentativitätsheuristik schätzt Wahrscheinlichkeit oder Kategorienzugehörigkeit danach, wie typisch ein Einzelfall wirkt („passt ins Muster, also gehört er dazu"); hier geht es nicht um eine solche Wahrscheinlichkeitsschätzung im Einzelfall, sondern um die pauschale Eigenschaftszuschreibung an eine ganze Gruppe.',
      en: 'Stereotyping: a fixed, oversimplified image of a group ("all the same self-promoters", "you know the type") is taken for granted and applied wholesale to every single founder — the person counts only as a carrier of the ascribed group trait. To spot and counter it: ask for evidence behind the blanket claim and for the variation within the group — as soon as "they are all like that" stands without data and counter-examples are waved off as exceptions, it is stereotyping. Used legitimately: naming a pattern in a group is fair when you anchor it in data, treat it as a hypothesis, and allow for sub-groups. Hasty generalization would stress the fallacy of inferring from too few observed cases ("I met three, so all of them"); here, though, the image is not derived from observations at all but presupposed as a known schema ("you know the type"). The representativeness heuristic judges probability or category membership by how typical a single case looks ("fits the pattern, so he belongs to it"); here it is not such a probability estimate about an individual but a blanket ascription of a trait to a whole group.',
    },
    points: 10,
    primaryTechniqueId: 'stereotyping',
    relatedTechniques: ['stereotyping', 'representativeness_heuristic', 'hasty_generalization'],
  },
];
