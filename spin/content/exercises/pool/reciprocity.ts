import type { Exercise } from '../../types';

// reciprocity — validated sample batch (content-samples.md), QA: pass.
export const reciprocityExercises: Exercise[] = [
  {
    id: 're-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik steht hinter diesem Vorgehen?',
      en: 'Which persuasion technique is behind this approach?',
    },
    scenario: {
      de: 'Noch bevor sie um Berichterstattung bittet, schickt eine Agentur ausgewählten Journalisten ein hochwertiges Produktpaket als „unverbindliches Geschenk".',
      en: 'Before even asking for coverage, an agency sends selected journalists a premium product package as a "no-strings gift".',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reziprozität nutzt das tief verankerte Bedürfnis, eine Gefälligkeit zu erwidern: Wer ein Geschenk annimmt, fühlt sich verpflichtet, etwas zurückzugeben — hier wohlwollende Berichterstattung. Legitim bleibt die Geste, solange sie klein, transparent und ohne erwartete Gegenleistung ist; manipulativ wird sie, wenn das Geschenk gezielt eine Gegenleistung erzwingen soll. Sozialer Beweis, Knappheit und Autorität setzen an anderen Hebeln an und fehlen hier.',
      en: 'Reciprocity taps the deep-seated need to return a favor: accepting a gift creates a felt obligation to give something back — here, favorable coverage. The gesture stays legitimate as long as it is small, transparent, and free of an expected return; it turns manipulative when the gift is engineered to extract one. Social proof, scarcity, and authority pull on different levers and are absent here.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 're-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Eine PR-Agentur bietet einem potenziellen Neukunden ein kostenloses, umfassendes Marken-Audit an — ganz ohne Verpflichtung. Erst nachdem sie die wertvolle Analyse übergeben hat, folgt das Angebot für den bezahlten Retainer.',
      en: 'A PR agency offers a prospective client a free, comprehensive brand audit — with no obligation whatsoever. Only after handing over the valuable analysis does it pitch the paid retainer.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel ist Reziprozität: Die Agentur erbringt zuerst eine echte, wertvolle Leistung und erzeugt so ein Verpflichtungsgefühl, das den späteren Abschluss wahrscheinlicher macht. Commitment & Konsistenz wäre es, wenn zuerst eine kleine Zusage eingeholt würde (Foot-in-the-door) — hier wird jedoch nichts abgefragt, sondern etwas gegeben. Sympathie und sozialer Beweis spielen keine tragende Rolle. Legitim bleibt das kostenlose Audit, solange es echten Wert liefert und der Kunde frei „Nein" sagen kann.',
      en: 'The lever is reciprocity: the agency first delivers genuine, valuable work, creating a sense of obligation that makes the later sale more likely. Commitment & consistency would apply if a small prior "yes" were solicited first (foot-in-the-door) — but here nothing is asked, something is given. Liking and social proof play no leading role. The free audit stays legitimate as long as it delivers real value and the client is free to say "no".',
    },
    points: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 're-new-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du leitest die PR für einen Produkt-Launch und möchtest, dass eine wichtige Fachjournalistin zu deinem Briefing kommt. Welches Vorgehen nutzt Reziprozität professionell und bleibt auf der richtigen Seite der Grenze?',
      en: 'You lead PR for a product launch and want an important trade journalist to attend your briefing. Which approach uses reciprocity professionally and stays on the right side of the line?',
    },
    options: [
      {
        de: 'Ihr exklusiv und unverbindlich vorab aufbereitete Marktdaten und ein Experten-Interview anbieten — echter, für ihre Arbeit nützlicher Mehrwert',
        en: 'Offer her exclusive, no-strings prepared market data and an expert interview in advance — genuine value that is useful for her work',
      },
      {
        de: 'Ihr eine voll bezahlte Wochenendreise ins Luxusresort schicken, verbunden mit der Erwartung wohlwollender Berichterstattung',
        en: 'Send her a fully paid luxury-resort weekend, tied to the expectation of favorable coverage',
      },
      {
        de: 'Andeuten, dass künftige Anzeigenbuchungen deines Kunden von ihrer Berichterstattung abhängen',
        en: "Hint that your client's future ad bookings depend on her coverage",
      },
      {
        de: 'Sie mit täglichen Erinnerungs-E-Mails und Anrufen zur Teilnahme drängen',
        en: 'Pressure her into attending with daily reminder emails and calls',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reziprozität wirkt professionell, wenn du zuerst echten, für die Gegenseite nützlichen Wert lieferst (exklusive Daten, Zugang, Zeit) — ohne Bedingung. Das schafft Wohlwollen, lässt der Journalistin aber die volle redaktionelle Freiheit. Option 2 koppelt einen persönlichen Luxusvorteil an eine erwartete Gegenleistung: Das ist keine Reziprozität mehr, sondern ein Inducement mit Bestechungs- und Compliance-Risiko. Option 3 ist offene Nötigung über Werbebudgets. Option 4 nutzt gar keine Reziprozität, sondern erzeugt Druck und Reaktanz. Die Grenze verläuft dort, wo die Gabe an eine erwartete konkrete Gegenleistung gebunden wird.',
      en: 'Reciprocity works professionally when you first deliver genuine value useful to the other side (exclusive data, access, time) — with no conditions. That builds goodwill while leaving the journalist full editorial freedom. Option 2 ties a personal luxury benefit to an expected return: that is no longer reciprocity but an inducement carrying bribery and compliance risk. Option 3 is open coercion via ad budgets. Option 4 uses no reciprocity at all — it creates pressure and reactance. The line is crossed the moment the gift is bound to an expected, specific return.',
    },
    points: 15,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 're-new-4',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team plant ein Reziprozitäts-Programm für die Pressearbeit. Ein Baustein überschreitet die ethische Grenze von legitimer Wertschätzung hin zu einem unzulässigen Anreiz. Welcher?',
      en: 'Your team is planning a reciprocity program for media relations. One component crosses the ethical line from legitimate goodwill into an improper inducement. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine für den Launch-Presseverteiler:',
      en: 'Planned components for the launch press list:',
    },
    options: [
      {
        de: 'Journalisten erhalten unter Embargo frühzeitigen Zugang zu belastbaren Produktdaten',
        en: 'Journalists receive early, embargoed access to solid product data',
      },
      {
        de: 'Als Willkommensgeste liegt jedem Pressekit ein Fachbuch zum Thema bei (Wert ca. 30 €)',
        en: 'As a welcome gesture, each press kit includes a subject-matter book (worth about €30)',
      },
      {
        de: 'Eine offene Einladung zum Presse-Frühstück am Launch-Tag',
        en: 'An open invitation to a press breakfast on launch day',
      },
      {
        de: 'Eine voll bezahlte „Recherchereise" in ein Luxusresort — bevorzugt vergeben an Journalisten, die positive Berichterstattung zusagen',
        en: 'A fully paid "research trip" to a luxury resort — awarded preferentially to journalists who commit to positive coverage',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitime Reziprozität bietet proportionalen, transparenten und bedingungslosen Wert: Embargo-Daten, ein kleines Fachgeschenk und eine offene Einladung stärken die Beziehung, ohne die redaktionelle Unabhängigkeit zu kaufen. Baustein 4 kippt die Technik ins Manipulative: Ein hochwertiger persönlicher Vorteil wird an eine zugesagte Gegenleistung gekoppelt — ein Quid-pro-quo-Inducement mit Compliance- und Bestechungsrisiko. Die Grenze lässt sich an drei Fragen prüfen: Ist die Gabe proportional, transparent und frei von einer erwarteten Gegenleistung?',
      en: 'Legitimate reciprocity offers proportionate, transparent, and unconditional value: embargoed data, a small subject-matter gift, and an open invitation strengthen the relationship without buying editorial independence. Component 4 tips the technique into manipulation: a high-value personal benefit is tied to a promised return — a quid-pro-quo inducement carrying compliance and bribery risk. The boundary can be checked with three questions: is the gift proportionate, transparent, and free of an expected return?',
    },
    points: 15,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity'],
  },
];
