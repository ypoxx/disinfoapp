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
      de: 'Reputationsagentur, Strategie-Call mit einem Automobilzulieferer nach einem Rückruf: Der SEO-Lead erklärt der Kommunikationsleiterin, zum breit abgedeckten Firmennamen stünden bereits zutreffende Rückruf-Berichte auf den vorderen Suchplätzen — man werde die Trefferreihenfolge so umsortieren, dass günstige Seiten nach oben wandern und die korrekten kritischen Berichte auf Seite zwei rücken. Ziel seien Interessenten, die den Namen googeln, ohne sich schon eine Meinung gebildet zu haben, und die erfahrungsgemäß nur die ersten Treffer ansehen.',
      en: 'Reputation agency, strategy call with a car-parts supplier after a recall: the SEO lead tells the head of communications that the broadly covered company name already shows accurate recall reports in the top search positions — the team will reorder the results so that favourable pages move up and the correct critical reports slide to page two. The target: prospects who google the name without having formed an opinion yet, and who typically only look at the first hits.',
    },
    options: [
      { de: 'Search Engine Manipulation Effect (SEME)', en: 'Search Engine Manipulation Effect (SEME)' },
      { de: 'Data Voids / SEO-Manipulation', en: 'Data Voids / SEO manipulation' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'SEME benennt genau dieses Muster: Nicht der Inhalt einzelner Beiträge wird bestritten, sondern die Reihenfolge der Suchtreffer umsortiert — Günstiges nach oben, die zutreffenden Rückruf-Berichte auf Seite zwei —, weil unentschlossene Suchende meist nur die ersten Treffer ansehen. Behandle SEME dabei als Begriffswissen, nicht als Wirkgarantie: Wie stark die Trefferreihenfolge Meinungen wirklich verschiebt, ist bislang kaum über die Ursprungsforschung hinaus bestätigt und offen umstritten. Die legitime Grenze kannst du klar ziehen: Suchmaschinenoptimierung, die zutreffende, relevante Inhalte überhaupt auffindbar macht, ist normales Handwerk — SEME beginnt dort, wo belegbar richtige Berichte gezielt aus dem Sichtfeld gedrängt werden. So entschärfst du es: Prüfe, ob die ersten Treffer zu einem Namen auffällig gleichförmig sind, und schau bewusst auf Seite zwei, bevor du dir ein Urteil bildest. Data Voids wären es, wenn zu einem neuen oder seltenen Begriff kaum verlässliche Inhalte existierten und eine Partei diese Lücke mit eigenen Seiten füllte — hier ist der Firmenname breit abgedeckt, die korrekte Kritik existiert bereits und wird nur nach unten sortiert. Microtargeting würde einzelnen Segmenten maßgeschneiderte Botschaften ausspielen; hier wird niemand segmentiert, nur die Ergebnisreihenfolge geordnet. Themensetzung bestimmt, welche Themen überhaupt Aufmerksamkeit bekommen, nicht die Trefferposition zu einem bereits gesuchten Namen.',
      en: 'SEME names exactly this pattern: the content of individual pieces is not disputed — the order of the search hits is rearranged, favourable on top and the accurate recall reports onto page two, because undecided searchers rarely look past the first results. Treat SEME as terminology, not a guaranteed effect: how strongly result order actually moves opinion has barely been confirmed beyond the original research and remains contested. You can draw the legitimate line clearly: optimisation that makes accurate, relevant content findable at all is ordinary craft — SEME starts where verifiably correct reports are deliberately pushed out of sight. To defuse it, check whether the top hits for a name are suspiciously uniform and deliberately look at page two before forming a view. Data voids would apply if a new or rare term carried little reliable content and one party filled that gap with its own pages — here the company name is broadly covered, the correct criticism already exists and is merely sorted downward. Microtargeting would serve tailored messages to specific segments; here no one is segmented, only the result order is arranged. Agenda setting decides which topics get attention at all, not the hit position for a name already being searched.',
    },
    points: 10,
    primaryTechniqueId: 'search_engine_manipulation_effect',
    relatedTechniques: ['search_engine_manipulation_effect', 'data_voids_seo_manipulation', 'microtargeting', 'agenda_setting'],
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
      de: 'Der Agenturvorschlag ist ein SEME-Manöver: Nicht der Wahrheitsgehalt der Berichte wird bestritten, sondern ihre Trefferposition verschoben, damit unentschlossene Patientinnen die zutreffende Kritik übersehen. Die beste Option zieht die Grenze der Suchmaschinenoptimierung sauber: relevante, korrekte Inhalte auffindbar machen — statt belegbar richtige Berichterstattung aus dem Sichtfeld zu drängen. Option 2 wirkt plausibel, weil „nicht gelöscht, nur schlechter platziert" nach harmlosem SEO klingt — genau diese Verschiebung der Reihenfolge ist aber der Kern von SEME und fliegt im Krisenfall reputativ teuer auf. Die zusätzlichen positiven Nutzerstimmen wären Astroturfing (fingierte Graswurzel-Zustimmung) und legten eine zweite Täuschung obendrauf. Der Löschweg über Gegendarstellung greift zu einem juristischen Mittel gegen zutreffende Berichterstattung — sachfremd und meist aussichtslos. Zur Einordnung: SEME ist ein umstrittener Frontier-Effekt; du entscheidest hier nicht wegen einer garantierten Wirkung, sondern weil das Verdrängen wahrer Information handwerklich wie ethisch die falsche Antwort ist.',
      en: 'The agency\'s proposal is a SEME manoeuvre: it does not dispute the truth of the reports but shifts their hit position so undecided patients miss the accurate criticism. The best option draws the line of search optimisation cleanly: make relevant, correct content findable — rather than pushing verifiably correct reporting out of view. Option 2 seems plausible because "not deleted, just ranked lower" sounds like harmless SEO — but that very reordering is the core of SEME, and once exposed in a crisis it costs dearly in reputation. The extra positive user voices would be astroturfing (fake grassroots endorsement) and would stack a second deception on top. The takedown route via right-of-reply reaches for a legal tool against accurate reporting — off-target and usually hopeless. For context: SEME is a contested frontier effect; you decide here not because of a guaranteed impact but because suppressing true information is the wrong answer, both as craft and ethically.',
    },
    points: 10,
    primaryTechniqueId: 'search_engine_manipulation_effect',
    relatedTechniques: ['search_engine_manipulation_effect', 'data_voids_seo_manipulation', 'digital_influence'],
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
      de: 'Hintergrundgespräch im Kampagnenteam eines kommunalen Referendums: Der Digitalstratege präsentiert der Kampagnenleiterin einen Plan, mit dem zur breit diskutierten Abstimmungsfrage die organischen Suchergebnisse so umsortiert werden, dass zustimmende Treffer die Plätze eins bis fünf halten und die ebenso vorhandenen Gegenargumente erst weit unten erscheinen — gezielt für unentschlossene Wählerinnen, deren Präferenz sich an den ersten Treffern bilden soll.',
      en: 'Background briefing in the campaign team for a municipal referendum: the digital strategist presents the campaign lead with a plan that reorders the organic search results on the widely debated ballot question so that supportive hits hold positions one to five while the equally-present counter-arguments appear only far below — aimed at undecided voters whose preference is meant to form on the first hits.',
    },
    options: [
      { de: 'Search Engine Manipulation Effect (SEME)', en: 'Search Engine Manipulation Effect (SEME)' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Data Voids / SEO-Manipulation', en: 'Data Voids / SEO manipulation' },
      { de: 'Astroturfing', en: 'Astroturfing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster heißt Search Engine Manipulation Effect (SEME): Die Rangfolge der Suchtreffer wird zugunsten einer Seite umsortiert, damit sich die Präferenz noch unentschlossener Wählerinnen an den zuerst sichtbaren Treffern bildet. Verlass dich hier auf den Namen, nicht auf eine Zahl: Sicher benennen kannst du das Muster — wie stark Ranking Entscheidungen tatsächlich verschiebt, ist empirisch dünn abgesichert und fachlich bestritten. Die legitime Seite ist auch hier klar: Willst du zu einer Abstimmungsfrage gefunden werden, optimiere zutreffende, sachlich relevante Inhalte auf Auffindbarkeit — SEME beginnt erst, wo du die ebenso vorhandenen Gegenargumente gezielt nach unten drückst, damit niemand sie mehr sieht. Erkennen kannst du es so: Zeigen die ersten Treffer zu einer strittigen Frage nur eine Seite, schau bewusst auf Seite zwei und frag dich, wer diese Platzierung betreibt. Themensetzung ist der naheliegende Verwechslungspartner — sie bestimmt aber, welche Themen überhaupt auf die Agenda kommen, nicht die Trefferreihenfolge zu einer bereits gesuchten Frage. Data Voids setzten voraus, dass zur Frage kaum Inhalte existieren und eine Seite die Lücke füllt — hier ist die Abstimmung breit diskutiert, die Gegenargumente sind vorhanden und werden nur nach unten sortiert. Astroturfing wäre fingierte Graswurzel-Unterstützung; es fälscht die Herkunft von Zustimmung, nicht die Position in der Suche.',
      en: 'The pattern is called the Search Engine Manipulation Effect (SEME): the rank order of search hits is rearranged to favour one side, so that still-undecided voters form their preference on whatever is visible first. Rely on the name here, not on a number: you can name the pattern with confidence — how strongly ranking actually shifts decisions is thinly evidenced and professionally disputed. The legitimate side is clear here too: if you want to be found on a ballot question, optimise accurate, genuinely relevant content for discoverability — SEME only begins where you deliberately push the equally-present counter-arguments down so no one sees them. You can spot it like this: if the top hits on a contested question show only one side, deliberately look at page two and ask who is driving that placement. Agenda setting is the obvious mix-up — but it decides which topics reach the agenda at all, not the hit order for a question already being searched. Data voids would require that little content exists on the question and one side fills the gap — here the vote is widely debated, the counter-arguments exist and are merely sorted downward. Astroturfing would be faked grassroots support; it fakes the origin of endorsement, not the position in search.',
    },
    points: 10,
    primaryTechniqueId: 'search_engine_manipulation_effect',
    relatedTechniques: ['search_engine_manipulation_effect', 'agenda_setting', 'data_voids_seo_manipulation', 'astroturfing_sockpuppets'],
  },
];
