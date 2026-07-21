// Übernommen 1:1 aus docs/content-samples.md (Content-Offensive Phase 2, QA: 4/4 bestanden).
// 16 Übungen für priming, reciprocity, dark_patterns, nudging. Texte unverändert;
// ergänzt wurde nur primaryTechniqueId, das timeLimit-Feld der Quelle wurde entfernt (nicht mehr im Schema).

import type { Exercise } from '../types';

export const waveR2: Exercise[] = [
  // ===== priming =====
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

  // ===== reciprocity =====
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

  // ===== dark_patterns =====
  {
    id: 'da-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik dominiert dieses Interface?',
      en: 'Which technique dominates this interface?',
    },
    scenario: {
      de: 'In der Abo-Verwaltung eurer App ist "Abo behalten" ein großer grüner Button in der Bildmitte. "Kündigen" erscheint nur als kleiner, grauer Textlink ganz unten — kaum sichtbar.',
      en: 'In your app\'s subscription settings, "Keep subscription" is a large green button in the centre. "Cancel" appears only as a small, grey text link at the very bottom — barely visible.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die ungleiche visuelle Hierarchie — auffälliger "Behalten"-Button gegen versteckten "Kündigen"-Link — lenkt gezielt weg von der Kündigung. Das ist ein klassisches Dark Pattern (Obstruktion). Abgrenzung zum Nudging: Ein Nudge lässt beide Optionen gleich leicht erreichbar und ist transparent; hier wird die legitime Wahl bewusst erschwert. Die ethische Grenze liegt genau dort: Standardwerte und Gestaltung dürfen lenken, aber nicht die gegenteilige Handlung verstecken.',
      en: 'The unequal visual hierarchy — a prominent "Keep" button against a hidden "Cancel" link — deliberately steers away from cancelling. That is a classic dark pattern (obstruction). Contrast with nudging: a nudge keeps both options equally easy to reach and is transparent; here the legitimate choice is deliberately obstructed. That is exactly where the ethical line sits: defaults and design may guide, but must not hide the opposite action.',
    },
    points: 5,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'da-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'Im Online-Ticketing für euer Firmenevent wird der Basispreis groß beworben. Bearbeitungsgebühr, "Klimabeitrag" und Versandpauschale sind vorausgewählt und erscheinen erst im letzten Schritt vor dem Bezahlen.',
      en: 'In the online ticketing for your corporate event, the base price is advertised prominently. A handling fee, a "climate contribution" and a shipping charge are pre-selected and only appear at the final step before payment.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zwei Interface-Tricks greifen ineinander: verschleierte Kosten bis zum letzten Schritt ("Drip Pricing") und vorausgewählte Zusatzposten. Beides sind Dark Patterns — die Manipulation liegt in der Gestaltung des Ablaufs, nicht im Argument. Anchoring ist der naheliegende Fehlgriff: Es würde einen Referenzpreis setzen, um den Endpreis günstig wirken zu lassen — hier geht es aber ums Verstecken und Vorbelegen, nicht ums Verankern. Legitime Alternative: alle Kosten transparent von Anfang an, Zusatzposten aktiv wählbar.',
      en: 'Two interface tricks interlock: costs concealed until the final step ("drip pricing") and pre-selected add-on items. Both are dark patterns — the manipulation lives in the design of the flow, not in an argument. Anchoring is the tempting wrong pick: it would set a reference price to make the final price feel cheap — but here the mechanism is hiding and pre-checking, not anchoring. The legitimate alternative: all costs transparent from the start, add-ons actively opt-in.',
    },
    points: 10,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'da-new-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie reagierst du?',
      en: 'How do you respond?',
    },
    scenario: {
      de: 'Vor dem Produktlaunch schlägt das Marketing vor, im Anmeldeformular das Newsletter-Kästchen voranzukreuzen und die Datenweitergabe an Partner standardmäßig zu aktivieren — "das hebt unsere Opt-in-Rate sofort". Du leitest die Unternehmenskommunikation.',
      en: 'Ahead of the product launch, marketing proposes pre-ticking the newsletter box on the sign-up form and enabling data sharing with partners by default — "that lifts our opt-in rate instantly". You lead corporate communications.',
    },
    options: [
      {
        de: 'Ich stoppe die vorangekreuzten Kästchen: Das ist ein Dark Pattern und bei einwilligungspflichtigen Daten (DSGVO) rechtlich angreifbar. Ich schlage eine klare, aktive Opt-in-Formulierung vor, die den Nutzen benennt und trotzdem konvertiert.',
        en: 'I stop the pre-ticked boxes: this is a dark pattern and, for consent-based data (GDPR), legally vulnerable. I propose a clear, active opt-in that names the benefit and still converts.',
      },
      {
        de: 'Ich stimme zu — höhere Opt-in-Raten sind das Ziel, und die meisten Wettbewerber machen es genauso.',
        en: 'I agree — higher opt-in rates are the goal, and most competitors do it the same way.',
      },
      {
        de: 'Ich lasse das Newsletter-Kästchen vorangekreuzt, entferne aber die Partner-Weitergabe — ein Kompromiss.',
        en: 'I keep the newsletter box pre-ticked but drop the partner sharing — a compromise.',
      },
      {
        de: 'Ich schiebe die Entscheidung ohne eigene Stellungnahme an die Rechtsabteilung ab.',
        en: 'I push the decision to legal without taking a position myself.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Vorangekreuzte Einwilligung ist keine gültige Einwilligung — das hat der EuGH (Planet49) klar entschieden — und untergräbt bei Auffliegen das Vertrauen weit teurer als der kurzfristige Opt-in-Gewinn. Der Kompromiss (Option 3) klingt vernünftig, verschickt aber weiterhin ein Dark Pattern und dieselbe rechtliche Angreifbarkeit; das ist der verführerische Fehlgriff. Die Abgabe an die Rechtsabteilung (Option 4) verkennt, dass Kommunikation hier eine eigene Haltung zu Marke und Vertrauen einbringen muss. Dieselbe Design-Stellschraube (Standardwerte) hat eine ethische Einstellung: transparentes, aktives Opt-in, das den Nutzen kommuniziert.',
      en: 'Pre-ticked consent is not valid consent — the CJEU (Planet49) settled this clearly — and once exposed it erodes trust far more expensively than the short-term opt-in gain. The compromise (option 3) sounds reasonable but still ships a dark pattern and the same legal exposure; that is the tempting wrong pick. Punting to legal (option 4) misses that comms must bring its own stance on brand and trust here. The same design lever (defaults) has an ethical setting: a transparent, active opt-in that communicates the benefit.',
    },
    points: 15,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'da-new-4',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welches Gestaltungselement überschreitet die ethische Grenze zum Dark Pattern?',
      en: 'Which design element crosses the ethical line into a dark pattern?',
    },
    scenario: {
      de: 'Ihr überarbeitet den Cookie-Banner der Unternehmensseite. Vier Elemente stehen zur Debatte: A) eine kurze, klare Erklärung, welche Daten wofür genutzt werden; B) "Alle akzeptieren" ist ein Klick, "Ablehnen" nur über zwei weitere Klicks in einem grau gehaltenen Untermenü erreichbar; C) die Einstellungen lassen sich jederzeit über einen Link im Footer ändern; D) ein sichtbarer Link zur Datenschutzerklärung.',
      en: 'You are reworking the company site\'s cookie banner. Four elements are up for debate: A) a short, clear explanation of which data is used for what; B) "Accept all" is one click, while "Reject" is reachable only via two more clicks in a greyed-out sub-menu; C) settings can be changed at any time via a link in the footer; D) a visible link to the privacy policy.',
    },
    options: [
      {
        de: 'A — die kurze, klare Datenerklärung',
        en: 'A — the short, clear data explanation',
      },
      {
        de: 'B — "Akzeptieren" in einem Klick, "Ablehnen" tief vergraben',
        en: 'B — "Accept" in one click, "Reject" buried deep',
      },
      {
        de: 'C — jederzeit änderbare Einstellungen im Footer',
        en: 'C — settings changeable any time via the footer',
      },
      {
        de: 'D — der sichtbare Link zur Datenschutzerklärung',
        en: 'D — the visible link to the privacy policy',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Die ethische Grenze liegt bei der Symmetrie der Wege: Wenn Akzeptieren ein Klick ist und Ablehnen bewusst hinter Klicks und blasser Gestaltung vergraben wird, ist das Obstruktion — ein Dark Pattern, das die Einwilligung unwirksam macht. A, C und D sind legitime Transparenzelemente und keine Manipulation; sie geben Information und Kontrolle, ohne die gegenteilige Wahl zu erschweren. Der Test für Kommunikationsprofis: Akzeptieren und Ablehnen müssen gleich leicht erreichbar sein — sobald ein Weg absichtlich schwerer gemacht wird, ist die Linie überschritten.',
      en: 'The ethical line is the symmetry of the paths: when accepting is one click while rejecting is deliberately buried behind clicks and pale styling, that is obstruction — a dark pattern that invalidates consent. A, C and D are legitimate transparency elements, not manipulation; they provide information and control without making the opposite choice harder. The test for comms professionals: accept and reject must be equally easy to reach — the moment one path is deliberately made harder, the line is crossed.',
    },
    points: 15,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },

  // ===== nudging =====
  {
    id: 'nu-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik dominiert hier?',
      en: 'Which technique dominates here?',
    },
    scenario: {
      de: 'Bei der Installation einer App ist das Häkchen "Newsletter abonnieren" bereits gesetzt — wer das nicht möchte, muss es aktiv entfernen.',
      en: 'When installing an app, the "Subscribe to newsletter" checkbox is already ticked — anyone who does not want it has to actively uncheck it.',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Eine vorausgewählte Standardoption ("Default") ist der klassische Nudge: Die Entscheidungsarchitektur lenkt das Verhalten, ohne die Wahl zu verbieten — die meisten Menschen behalten schlicht die Voreinstellung. Anchoring bräuchte einen Zahlenanker, Priming eine vorgelagerte Reizsetzung, Framing eine bestimmte Formulierung — hier wirkt allein die Voreinstellung. Ethische Grenze: legitim, wenn das Abwählen transparent und mühelos möglich ist; manipulativ, wenn der Default dem Absender nützt und der Ausstieg versteckt wird.',
      en: 'A pre-selected default option is the classic nudge: the choice architecture steers behavior without forbidding any option — most people simply keep the preset. Anchoring would need a numeric anchor, priming a preceding stimulus, framing a particular wording — here the preset alone does the work. Ethical line: legitimate when opting out is transparent and effortless; manipulative when the default serves the sender and the exit is hidden.',
    },
    points: 5,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'anchoring', 'framing'],
  },
  {
    id: 'nu-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Interne Mitteilung der HR-Abteilung: "Ab 1. März werden alle Mitarbeitenden automatisch mit 5 % ihres Bruttogehalts in die neue betriebliche Altersvorsorge aufgenommen. Wer nicht teilnehmen möchte, kann sich jederzeit über das Portal abmelden."',
      en: 'Internal HR message: "As of March 1, all employees will be automatically enrolled in the new company pension plan at 5% of gross salary. Anyone who does not wish to participate can opt out at any time via the portal."',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der treibende Hebel ist die automatische Aufnahme mit Abmeldeoption (Opt-out statt Opt-in) — eine veränderte Entscheidungsarchitektur, also Nudging. Die 5-%-Zahl könnte man für Anchoring halten, aber der Anker bewegt hier keine Verhandlung; entscheidend ist der Default. Framing wäre eine andere Formulierung derselben Zahl, Sozialer Beweis bräuchte einen Verweis auf das Verhalten anderer — beides fehlt. Ethische Grenze: legitim, weil das Ziel (Altersvorsorge) im Interesse der Beschäftigten liegt und die Abmeldung ausdrücklich und einfach genannt ist; manipulativ würde es, wenn der Ausstieg erschwert oder verschwiegen würde.',
      en: 'The driving lever is automatic enrollment with an opt-out (opt-out instead of opt-in) — a modified choice architecture, i.e. nudging. The 5% figure looks like anchoring, but no anchor is moving a negotiation here; the default is decisive. Framing would be a different wording of the same figure, social proof would need a reference to what others do — both are absent. Ethical line: legitimate because the goal (retirement saving) is in the employees\' interest and opting out is stated plainly and easily; it would become manipulative if the exit were obstructed or concealed.',
    },
    points: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'anchoring', 'framing'],
  },
  {
    id: 'nu-new-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du gestaltest die Spendenstrecke einer gemeinnützigen Kampagne und sollst wiederkehrende Spenden erhöhen, ohne die Marke ethisch zu beschädigen. Was tust du?',
      en: 'You are designing the donation flow for a nonprofit campaign and are asked to increase recurring donations without damaging the brand ethically. What do you do?',
    },
    scenario: {
      de: 'Auf der Spendenseite können Unterstützende zwischen einer einmaligen und einer monatlichen Spende wählen. Der Vorstand will mehr Daueraufträge, die Kommunikationsleitung besteht auf Vertrauenswürdigkeit.',
      en: 'On the donation page, supporters can choose between a one-time and a monthly gift. The board wants more recurring donations; comms leadership insists on trustworthiness.',
    },
    options: [
      {
        de: 'Die monatliche Spende als Standard vorauswählen, aber die Einmalspende gleichwertig sichtbar lassen und den Wechsel mit einem Klick ermöglichen.',
        en: 'Pre-select the monthly gift as the default, but keep the one-time option equally visible and switchable with a single click.',
      },
      {
        de: 'Die monatliche Spende vorauswählen und die Einmal-Option nur über einen kleinen Link im Seitenfuß zugänglich machen.',
        en: 'Pre-select the monthly gift and make the one-time option reachable only via a small link in the page footer.',
      },
      {
        de: 'Beide Optionen ohne Vorauswahl neutral nebeneinanderstellen und keine Standardoption setzen.',
        en: 'Place both options neutrally side by side with no pre-selection and set no default.',
      },
      {
        de: 'Die Schaltfläche für die Einmalspende ausgrauen, sodass sie schwerer anzuklicken ist.',
        en: 'Grey out the one-time donation button so it is harder to click.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein legitimer Nudge setzt eine wirksame Voreinstellung, hält die Alternative aber transparent und mühelos erreichbar — das erhöht wiederkehrende Spenden und wahrt die Wahlfreiheit. Option 2 und 4 machen aus dem Nudge ein Dark Pattern: Sie erschweren gezielt die Alternative und riskieren bei Entdeckung Reaktanz und Reputationsschaden. Option 3 ist ethisch einwandfrei, verzichtet aber vollständig auf den Hebel und verfehlt damit das gesetzte Ziel. Die Kunst des Nudgings liegt genau in dieser Linie: Verhalten lenken, ohne die reale Wahlmöglichkeit zu verwässern.',
      en: 'A legitimate nudge sets an effective default while keeping the alternative transparent and effortless to reach — this raises recurring donations and preserves freedom of choice. Options 2 and 4 turn the nudge into a dark pattern: they deliberately obstruct the alternative and risk reactance and reputational damage if exposed. Option 3 is ethically clean but forgoes the lever entirely and therefore misses the stated goal. The craft of nudging lies exactly on this line: steer behavior without diluting the real ability to choose.',
    },
    points: 15,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'dark_patterns', 'framing'],
  },
  {
    id: 'nu-new-4',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welches Merkmal macht diese Entscheidungsarchitektur manipulativ statt legitim?',
      en: 'Which feature makes this choice architecture manipulative rather than legitimate?',
    },
    scenario: {
      de: 'Ein Cookie-Banner zeigt einen großen, farbig hervorgehobenen Button "Alle akzeptieren". Die Option "Ablehnen" ist als blasser, kaum sichtbarer Textlink am unteren Rand versteckt und erfordert zwei zusätzliche Klicks.',
      en: 'A cookie banner shows a large, brightly highlighted "Accept all" button. The "Reject" option is hidden as a pale, barely visible text link at the bottom and requires two extra clicks.',
    },
    options: [
      {
        de: 'Die Ablehnen-Option ist bewusst schwer auffindbar und mit zusätzlichem Aufwand belegt — der Ausstieg ist nicht mehr gleichwertig möglich.',
        en: 'The reject option is deliberately hard to find and burdened with extra effort — opting out is no longer an equivalent choice.',
      },
      {
        de: 'Es wird überhaupt eine Standardvorauswahl angeboten.',
        en: 'A default pre-selection is offered at all.',
      },
      {
        de: 'Der Akzeptieren-Button ist farblich hervorgehoben.',
        en: 'The accept button is visually highlighted with color.',
      },
      {
        de: 'Das Banner erscheint sofort beim Aufruf der Seite.',
        en: 'The banner appears immediately when the page loads.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die ethische Grenze eines Nudges verläuft dort, wo die Wahlfreiheit real erhalten bleibt: Der Ausstieg muss so einfach und transparent sein wie der gewünschte Weg. Hier wird die Ablehnung durch Sichtbarkeits- und Klick-Asymmetrie systematisch erschwert — das ist ein Dark Pattern, kein legitimer Nudge. Eine Standardoption (2) und ein farblich betonter Button (3) sind für sich genommen zulässige Gestaltungsmittel; der Erscheinungszeitpunkt (4) ist irrelevant. Manipulativ wird es erst durch die künstliche Reibung, die die gleichwertige Alternative faktisch entwertet.',
      en: 'The ethical line of a nudge runs where freedom of choice genuinely remains: the exit must be as easy and transparent as the preferred path. Here rejection is systematically obstructed through asymmetry of visibility and clicks — that is a dark pattern, not a legitimate nudge. A default option (2) and a color-emphasized button (3) are permissible design means in themselves; the timing of appearance (4) is irrelevant. It becomes manipulative only through the artificial friction that effectively devalues the equivalent alternative.',
    },
    points: 15,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'dark_patterns'],
  },
];
