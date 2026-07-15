import type { Exercise } from '../../types';

// priming — validated sample batch (content-samples.md), QA: pass.
// primaryTechniqueId added per the Phase 0 content lint.
export const primingExercises: Exercise[] = [
  {
    id: 'pr-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik bereitet das Publikum hier vor, noch bevor die eigentliche Botschaft kommt?',
      en: 'Which technique is preparing the audience here, before the actual message even arrives?',
    },
    scenario: {
      de: 'Bei der Vorstellung eines neuen Öko-Sortiments läuft im Saal durchgehend leises Naturgeräusch-Ambiente, an den Wänden erscheinen Bilder von Wäldern und klarem Wasser — noch bevor der erste Produktname fällt.',
      en: 'At the launch of a new eco product line, the room plays soft nature-sound ambience throughout and images of forests and clear water run on the walls — before the first product name is even mentioned.',
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Priming aktiviert Assoziationen (Natur, Reinheit) im Gedächtnis, bevor die eigentliche Botschaft kommt — diese Vor-Aktivierung färbt die spätere Wahrnehmung des Produkts, oft unbewusst. Ethisch vertretbar, wenn die geweckten Assoziationen wirklich zum Produkt passen; manipulativ, wenn sie eine grüne Aura erzeugen, die das Produkt nicht einlöst (Greenwashing). Anchoring würde einen Zahlen- oder Referenzwert setzen, Framing würde ein und dieselbe Information unterschiedlich darstellen — beides greift hier nicht, denn es gibt noch gar keine Information, nur eine vorbereitende Atmosphäre.',
      en: 'Priming activates associations (nature, purity) in memory before the actual message arrives — this pre-activation colours how the product is later perceived, often unconsciously. It is ethically defensible when the evoked associations genuinely fit the product; manipulative when it creates a green aura the product does not deliver (greenwashing). Anchoring would set a number or reference value, and framing would present one and the same piece of information differently — neither applies here, because there is no information yet, only a preparatory atmosphere.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'priming',
    relatedTechniques: ['priming'],
  },
  {
    id: 'pr-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik beeinflusst hier — allein durch die Reihenfolge der Fragen — die Antworten auf die letzte Frage?',
      en: 'Which technique influences the answers to the final question here — purely through the order of the questions?',
    },
    scenario: {
      de: 'Das Kommunikationsteam gestaltet eine Mitarbeiterbefragung. Die ersten Fragen drehen sich um jüngste IT-Sicherheitsvorfälle und Datenschutzrisiken. Erst danach folgt die allgemeine Frage: "Wie sehr vertrauen Sie der Unternehmensführung?"',
      en: 'The communications team is designing an employee survey. The first questions all concern recent IT security incidents and data-protection risks. Only then comes the general question: "How much do you trust company leadership?"',
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Priming: Die vorangehenden Fragen aktivieren Konzepte wie Risiko und Sicherheitslücke, die kognitiv präsent bleiben und die nachfolgende, thematisch unabhängige Vertrauensfrage nach unten ziehen. Legitim ist es, Themen logisch zu gruppieren; manipulativ wird es, wenn die Reihenfolge gezielt konstruiert wird, um eine Kennzahl zu steuern. Anchoring scheidet aus, weil kein numerischer oder Referenzwert gesetzt wird; Framing meint die Formulierung einer einzelnen Frage, nicht den Übertrag zwischen Fragen; ein emotionaler Appell würde direkt Gefühle ansprechen, statt vorab Konzepte zu aktivieren.',
      en: 'Priming: the preceding questions activate concepts such as risk and breach, which stay cognitively accessible and drag down the later, topically unrelated trust question. Grouping topics logically is legitimate; it becomes manipulative when the order is engineered specifically to steer a metric. Anchoring is out because no numeric or reference value is set; framing concerns the wording of a single question, not the carry-over between questions; an emotional appeal would target feelings directly rather than pre-activating concepts.',
    },
    points: 10,
    primaryTechniqueId: 'priming',
    relatedTechniques: ['priming', 'framing'],
  },
  {
    id: 'pr-new-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Diese wiederholten Begriffe sollen im Publikum gezielt ___, sodass das Produkt später auf eine bereits vorbereitete Grundlage trifft.',
      en: 'Complete the sentence: These repeated words are meant to deliberately ___ in the audience, so that the product later lands on ground already prepared.',
    },
    scenario: {
      de: 'Eine Kampagne für eine private Altersvorsorge verwendet in Anzeigen, Blogbeiträgen und Betreffzeilen konsequent Wörter wie "Geborgenheit", "Zuhause" und "Schutz" — schon Wochen bevor das eigentliche Produkt beworben wird.',
      en: 'A campaign for a private pension product consistently uses words like "security", "home" and "protection" in ads, blog posts and subject lines — weeks before the actual product is advertised.',
    },
    options: [
      { de: 'verwandte Assoziationen und Gefühle aktivieren (Priming)', en: 'activate related associations and feelings (priming)' },
      { de: 'einen numerischen Referenzwert setzen (Anchoring)', en: 'set a numeric reference value (anchoring)' },
      { de: 'eine künstliche Verknappung erzeugen (Scarcity)', en: 'create artificial scarcity (scarcity)' },
      { de: 'eine soziale Vergleichsnorm etablieren (Social Proof)', en: 'establish a social comparison norm (social proof)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Priming: Die konsequente Wiederholung emotional aufgeladener Begriffe aktiviert im Gedächtnis verwandte Assoziationen (Sicherheit, Zuhause), die noch aktiv sind, wenn später das Produkt erscheint — die spätere Botschaft wird dadurch flüssiger und positiver verarbeitet. Legitim, wenn das Produkt die geweckte Erwartung wirklich einlöst; manipulativ, wenn die Wortwahl eine Geborgenheit suggeriert, die das Finanzprodukt sachlich nicht trägt. Anchoring bräuchte einen Zahlenwert, Scarcity eine Knappheitsbehauptung, Social Proof einen Verweis auf das Verhalten anderer — nichts davon liegt hier vor, es geht rein um vorab aktivierte Konzepte.',
      en: 'This is priming: the consistent repetition of emotionally charged words activates related associations in memory (security, home) that are still active when the product later appears — the later message is then processed more fluently and more positively. Legitimate if the product truly delivers on the expectation raised; manipulative if the word choice suggests a sense of safety the financial product cannot substantively back up. Anchoring would need a numeric value, scarcity a claim of limited supply, social proof a reference to what others do — none of which is present here; this is purely about pre-activated concepts.',
    },
    points: 10,
    primaryTechniqueId: 'priming',
    relatedTechniques: ['priming', 'emotional_appeal'],
  },
  {
    id: 'pr-new-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie bewertest du den Vorschlag als PR-Profi?',
      en: 'As a PR professional, how do you assess the proposal?',
    },
    scenario: {
      de: 'Du schreibst die Ankündigung einer Preiserhöhung an Bestandskunden. Eine Kollegin schlägt vor, die E-Mail mit einem ausführlichen Absatz über die langjährige Zuverlässigkeit und das soziale Engagement des Unternehmens zu eröffnen — und erst danach die Preiserhöhung zu nennen, um die Leser vorab positiv "einzustimmen".',
      en: 'You are writing a price-increase announcement to existing customers. A colleague suggests opening the email with a detailed paragraph about the company\'s long-standing reliability and community engagement — and only then mentioning the price increase, to positively "prime" readers beforehand.',
    },
    options: [
      {
        de: 'Der Absatz ist als Priming vertretbar, solange die genannten Fakten wahr und für die Preisentscheidung relevant sind — ich prüfe, dass er echten Kontext liefert und die eigentliche Nachricht nicht verschleiert oder verzögert versteckt.',
        en: 'The paragraph is defensible priming as long as the stated facts are true and relevant to the pricing decision — I check that it provides genuine context and does not obscure or bury the actual news.',
      },
      {
        de: 'Ablehnen: Jede positive Einstimmung vor einer schlechten Nachricht ist Manipulation und grundsätzlich tabu.',
        en: 'Reject it: any positive priming before bad news is manipulation and categorically off-limits.',
      },
      {
        de: 'Übernehmen wie vorgeschlagen — je stärker die positive Vorab-Stimmung, desto besser die Reaktion, unabhängig vom Inhalt des Absatzes.',
        en: 'Adopt it as proposed — the stronger the positive pre-mood, the better the reaction, regardless of what the paragraph actually says.',
      },
      {
        de: 'Das ist Anchoring; ich nenne stattdessen zuerst einen deutlich höheren Vergleichspreis, an dem die neue Erhöhung günstig wirkt.',
        en: 'That is anchoring; instead I first cite a much higher comparison price against which the new increase looks cheap.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der vorgeschlagene Absatz IST Priming: Er aktiviert Goodwill-Assoziationen (Zuverlässigkeit, Verantwortung), bevor die unangenehme Botschaft kommt. Der Mechanismus ist wirksam, aber die ethische Grenze entscheidet über die Zulässigkeit. Vertretbar ist er, wenn die Fakten stimmen, sachlich relevant sind und die Preiserhöhung klar und ohne Verzögerung erscheint (Option 0). Option 1 überkorrigiert: Kontext vor einer Nachricht zu setzen ist nicht per se Manipulation. Option 2 maximiert die Wirkung ohne Rücksicht auf Wahrheit und Transparenz und riskiert Vertrauensverlust und Backlash. Option 3 verwechselt die Technik — ein konstruierter Vergleichspreis ist Anchoring — und ist zudem selbst manipulativ, weil der Referenzpreis künstlich gesetzt wird.',
      en: 'The proposed paragraph IS priming: it activates goodwill associations (reliability, responsibility) before the unwelcome message arrives. The mechanism is effective, but the ethical boundary decides admissibility. It is defensible when the facts are true, materially relevant, and the price increase appears clearly and without delay (option 0). Option 1 overcorrects: providing context before news is not inherently manipulation. Option 2 maximises the effect regardless of truth and transparency and risks eroding trust and provoking backlash. Option 3 misidentifies the technique — a constructed comparison price is anchoring — and is itself manipulative, since the reference price is set artificially.',
    },
    points: 15,
    primaryTechniqueId: 'priming',
    relatedTechniques: ['priming', 'anchoring'],
  },
];
