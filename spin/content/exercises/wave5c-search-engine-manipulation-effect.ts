// Welle 5c: 3 Übungen für search_engine_manipulation_effect.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Frontier-Tier: Begriffswissen (Muster benennen), keine Wirkversprechen.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cSearchEngineManipulationEffect: Exercise[] = [
  {
    id: 'wave5c-search_engine_manipulation_effect-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik beschreibt der SEO-Lead hier?',
      en: 'Which technique is the SEO lead describing here?',
    },
    scenario: {
      de: 'Reputationsagentur, Strategie-Call mit einem Automobilzulieferer nach einem Rückruf: Der SEO-Lead erklärt der Kommunikationsleiterin, man werde zwölf positive Fachartikel und Bewertungsseiten so optimieren, dass sie die ersten Suchtreffer zum Firmennamen belegen; die zutreffenden kritischen Berichte rutschen dadurch auf Seite zwei. Ziel seien Interessenten, die den Namen googeln, ohne sich schon eine Meinung gebildet zu haben.',
      en: 'Reputation agency, strategy call with a car-parts supplier after a recall: the SEO lead tells the head of communications that twelve positive trade articles and review pages will be optimised to occupy the first search hits for the company name; the accurate critical reports thereby slide to page two. The target: prospects who google the name without having formed an opinion yet.',
    },
    options: [
      { de: 'Search Engine Manipulation Effect (SEME)', en: 'Search Engine Manipulation Effect (SEME)' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'SEME benennt genau dieses Muster: Nicht der Inhalt einzelner Beiträge, sondern die Reihenfolge der Suchtreffer wird gestaltet — Günstiges nach oben, zutreffende Kritik auf Seite zwei —, um unentschlossene Suchende zu beeinflussen. Wichtig zur Einordnung: Der Effekt ist Frontier-Wissen, die Belege stammen fast nur aus einem Labor (Epstein/Robertson) und sind umstritten; verlässlich ist der Begriff, nicht eine feste Wirkung. Legitim ist die Grenze klar: Suchmaschinenoptimierung, die zutreffende, relevante Inhalte auffindbar macht, ist normales Handwerk — SEME beginnt dort, wo belegbar richtige Berichte gezielt aus dem Sichtfeld gedrängt werden. Erkennen und kontern: Prüfe, ob die ersten Treffer zu einem Namen auffällig gleichförmig sind, und schau bewusst auf Seite zwei. Microtargeting wäre es, wenn einzelnen Segmenten maßgeschneiderte Botschaften ausgespielt würden — hier wird niemand segmentiert, nur die Ergebnisreihenfolge geordnet. Themensetzung bestimmt, welche Themen überhaupt Aufmerksamkeit bekommen, nicht die Trefferposition zu einem bereits gesuchten Namen. Die Verfügbarkeitsheuristik ist der kognitive Grund, warum obere Treffer stärker wirken — sie beschreibt aber die Wahrnehmung des Nutzers, nicht die gezielte Rangmanipulation.',
      en: 'SEME names exactly this pattern: it is not the content of individual pieces but the order of search hits that is shaped — favourable on top, accurate criticism onto page two — to influence undecided searchers. A caveat for context: the effect is frontier knowledge; the evidence comes almost entirely from one lab (Epstein/Robertson) and is contested — what is reliable is the term, not a fixed effect size. The legitimate line is clear: search optimisation that makes accurate, relevant content findable is ordinary craft — SEME begins where verifiably correct reports are deliberately pushed out of view. To spot and counter it: check whether the top hits for a name are suspiciously uniform, and deliberately look at page two. Microtargeting would mean tailored messages served to specific segments — here no one is segmented, only the result order is arranged. Agenda setting decides which topics get attention at all, not the hit position for a name already searched. The availability heuristic is the cognitive reason top hits carry more weight — but it describes the user\'s perception, not the deliberate rank manipulation.',
    },
    points: 10,
    primaryTechniqueId: 'search_engine_manipulation_effect',
    relatedTechniques: ['search_engine_manipulation_effect', 'microtargeting', 'agenda_setting'],
  },
  {
    id: 'wave5c-search_engine_manipulation_effect-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Kommunikationsleiterin eines Klinikkonzerns berätst du nach kritischer, aber zutreffender Berichterstattung über die Weiterführung. Die Reputationsagentur schlägt vor, die kritischen Artikel über gezielte Optimierung positiver Seiten aus den oberen Suchtreffern zum Konzernnamen zu verdrängen, damit unentschlossene Patientinnen sie kaum noch sehen.',
      en: 'As head of communications at a hospital group, you are advising on next steps after critical but accurate coverage. The reputation agency proposes to push the critical articles out of the top search hits for the group\'s name by optimising positive pages, so that undecided patients barely see them.',
    },
    options: [
      {
        de: 'Ich lehne das Verdrängen zutreffender Kritik ab und lasse stattdessen fundierte, korrekte Inhalte erstellen, die die realen Fragen beantworten — auffindbar ja, aber ohne belegbar richtige Berichte künstlich nach unten zu drücken.',
        en: 'I decline to push down accurate criticism and instead commission solid, correct content that answers the real questions — findable, yes, but without artificially demoting verifiably correct reports.',
      },
      {
        de: 'Ich gebe den Plan frei: Solange die kritischen Artikel nicht gelöscht, sondern nur schlechter platziert werden, ist das reine Suchmaschinenoptimierung.',
        en: 'I approve the plan: as long as the critical articles are not deleted, only ranked lower, it is pure search-engine optimisation.',
      },
      {
        de: 'Ich lasse zusätzlich in Foren und Bewertungsportalen viele positive Nutzerstimmen anlegen, damit die oberen Treffer noch stabiler oben bleiben.',
        en: 'I additionally have lots of positive user voices set up in forums and review portals, so the top hits stay on top more reliably.',
      },
      {
        de: 'Ich verlange, die kritischen Artikel per Gegendarstellung und Löschantrag entfernen zu lassen — dann erübrigt sich die Ranking-Frage ganz.',
        en: 'I demand the critical articles be removed via right-of-reply and takedown requests — then the ranking question disappears entirely.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Agenturvorschlag ist ein SEME-Manöver: Nicht der Wahrheitsgehalt der Berichte wird bestritten, sondern ihre Trefferposition manipuliert, damit unentschlossene Suchende sie übersehen. Die beste Option zieht die legitime Grenze der Suchmaschinenoptimierung sauber: relevante, zutreffende Inhalte auffindbar machen — statt belegbar richtige Kritik aus dem Sichtfeld zu drängen. Option 2 wirkt plausibel, weil „nicht gelöscht, nur schlechter platziert" nach harmlosem SEO klingt — genau diese Verschiebung der Reihenfolge ist aber der Kern von SEME und im Krisenfall auch reputativ riskant, wenn sie auffliegt. Die zusätzlichen positiven Nutzerstimmen wären Astroturfing (fingierte Graswurzel-Zustimmung) und würden das Problem um eine zweite Täuschung erweitern. Der Löschweg über Gegendarstellung greift zu einem juristischen Mittel gegen zutreffende Berichterstattung — sachfremd und meist aussichtslos. Merke zur Einordnung: SEME ist ein umstrittener Frontier-Effekt; du entscheidest hier nicht wegen einer garantierten Wirkung, sondern weil das Verdrängen wahrer Information handwerklich wie ethisch die falsche Antwort ist.',
      en: 'The agency\'s proposal is a SEME manoeuvre: it does not dispute the truth of the reports but manipulates their hit position so undecided searchers miss them. The best option draws the legitimate line of search optimisation cleanly: make relevant, accurate content findable — rather than pushing verifiably correct criticism out of view. Option 2 seems plausible because "not deleted, just ranked lower" sounds like harmless SEO — but that very reordering is the core of SEME, and in a crisis it is reputationally risky once exposed. The extra positive user voices would be astroturfing (fake grassroots endorsement) and would add a second deception on top. The takedown route via right-of-reply reaches for a legal tool against accurate reporting — off-target and usually hopeless. For context: SEME is a contested frontier effect; you decide here not because of a guaranteed impact but because suppressing true information is the wrong answer, both as craft and ethically.',
    },
    points: 10,
    primaryTechniqueId: 'search_engine_manipulation_effect',
    relatedTechniques: ['search_engine_manipulation_effect', 'digital_influence'],
  },
  {
    id: 'wave5c-search_engine_manipulation_effect-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Hintergrundgespräch im Kampagnenteam eines kommunalen Referendums: Der Digitalstratege präsentiert der Kampagnenleiterin einen Plan, mit dem für unentschlossene Wählerinnen die organischen Suchergebnisse zur Abstimmungsfrage systematisch mit zustimmenden Treffern auf den Plätzen eins bis fünf besetzt werden — die Gegenargumente sollen erst weit unten auftauchen.',
      en: 'Background briefing in the campaign team for a municipal referendum: the digital strategist presents the campaign lead with a plan that systematically fills the top-five organic search results on the ballot question with supportive hits for undecided voters — the counter-arguments are meant to appear only far below.',
    },
    options: [
      { de: 'Search Engine Manipulation Effect (SEME)', en: 'Search Engine Manipulation Effect (SEME)' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Astroturfing', en: 'Astroturfing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster heißt Search Engine Manipulation Effect (SEME): Die Rangfolge der Suchtreffer wird zugunsten einer Seite geordnet, um die Präferenz noch unentschlossener Wählerinnen zu verschieben. Der Begriff ist Frontier-Wissen — die Evidenz stammt fast nur aus einem Labor (Epstein/Robertson), ist umstritten, und realistische Verschiebungen liegen niedrig; sicher benennen lässt sich das Muster, nicht eine garantierte Wirkung. Erkennen und einordnen: Wenn die ersten Treffer zu einer strittigen Frage nur eine Seite zeigen, lohnt der Blick auf Seite zwei und auf die Frage, wer diese Platzierung betreibt. Themensetzung ist der naheliegende Verwechslungspartner — sie bestimmt aber, welche Themen überhaupt auf die Agenda kommen, nicht die Trefferreihenfolge zu einer bereits gesuchten Frage. Microtargeting würde einzelnen Wählersegmenten maßgeschneiderte Botschaften ausspielen; hier wird die Ergebnisliste geordnet, nicht die Zielgruppe zerlegt. Astroturfing wäre fingierte Graswurzel-Unterstützung — es fälscht die Herkunft von Zustimmung, nicht die Position in der Suche.',
      en: 'The pattern is called the Search Engine Manipulation Effect (SEME): the rank order of search hits is arranged to favour one side, in order to shift the preferences of still-undecided voters. The term is frontier knowledge — the evidence comes almost entirely from one lab (Epstein/Robertson), is contested, and realistic shifts are small; what can be stated with confidence is the pattern\'s name, not a guaranteed effect. To spot and place it: if the top hits on a contested question show only one side, it is worth looking at page two and asking who is driving that placement. Agenda setting is the obvious mix-up — but it decides which topics reach the agenda at all, not the hit order for a question already being searched. Microtargeting would serve tailored messages to specific voter segments; here the result list is ordered, not the audience dissected. Astroturfing would be faked grassroots support — it fakes the origin of endorsement, not the position in search.',
    },
    points: 10,
    primaryTechniqueId: 'search_engine_manipulation_effect',
    relatedTechniques: ['search_engine_manipulation_effect', 'agenda_setting', 'microtargeting'],
  },
];
