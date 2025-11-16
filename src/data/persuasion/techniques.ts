import { PersuasionTechnique } from '@/types/persuasion';

/**
 * All 28 persuasion techniques with comprehensive metadata
 */
export const persuasionTechniques: PersuasionTechnique[] = [
  {
    id: 'framing',
    name: {
      de: 'Framing',
      en: 'Framing',
    },
    description: {
      de: 'Die Art und Weise, wie Informationen präsentiert werden, beeinflusst deren Wahrnehmung und Interpretation. Durch die Wahl bestimmter Worte, Kontexte oder Perspektiven wird die Bedeutung einer Nachricht geformt.',
      en: 'The way information is presented influences its perception and interpretation. By choosing specific words, contexts, or perspectives, the meaning of a message is shaped.',
    },
    category: 'cognitive_bias',
    difficulty: 'intermediate',
    effectiveness: 'very_high',
    examples: [
      'Ein medizinisches Verfahren als "90% Überlebenschance" statt "10% Todesrisiko" darstellen',
      'Politische Maßnahmen als "Investition in die Zukunft" statt "Steuererhöhung" bezeichnen',
      'Klimawandel als "Klimakrise" statt "Klimaveränderung" framen',
    ],
    evidence: {
      studies: [
        'Tversky & Kahneman (1981) - Asian Disease Problem',
        'Lakoff (2004) - Don\'t Think of an Elephant',
        'Entman (1993) - Framing Theory',
      ],
      findings: 'Framing-Effekte sind robust und zeigen konsistente Ergebnisse über verschiedene Domänen hinweg. Menschen treffen unterschiedliche Entscheidungen basierend auf der Präsentation von Informationen, selbst wenn die faktischen Inhalte identisch sind.',
      uncertainty: {
        confidence: 0.95,
        sampleSize: '50+ Studien, N>10,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['priming', 'anchoring', 'narrative_persuasion'],
    warningNeurons: [
      'Emotionale Sprache ohne faktische Grundlage',
      'Einseitige Darstellung komplexer Sachverhalte',
      'Vermeidung neutraler Begriffe',
      'Metaphern, die bestimmte Assoziationen wecken',
    ],
    taxonomyGroups: ['cognitive_biases', 'information_presentation'],
  },
  {
    id: 'priming',
    name: {
      de: 'Priming',
      en: 'Priming',
    },
    description: {
      de: 'Die Aktivierung bestimmter Konzepte oder Assoziationen im Gedächtnis beeinflusst nachfolgende Wahrnehmungen und Entscheidungen, oft ohne dass die Person sich dessen bewusst ist.',
      en: 'The activation of certain concepts or associations in memory influences subsequent perceptions and decisions, often without the person being aware of it.',
    },
    category: 'cognitive_bias',
    difficulty: 'advanced',
    effectiveness: 'high',
    examples: [
      'Werbung zeigt Bilder von Familie und Geborgenheit vor Produktpräsentation',
      'Verwendung von Wörtern wie "Sicherheit" und "Schutz" vor politischen Vorschlägen',
      'Musik in Supermärkten zur Beeinflussung des Kaufverhaltens',
    ],
    evidence: {
      studies: [
        'Bargh et al. (1996) - Automaticity of Social Behavior',
        'Meyer & Schvaneveldt (1971) - Semantic Priming',
        'Tulving & Schacter (1990) - Priming and Memory',
      ],
      findings: 'Priming-Effekte sind nachweisbar, aber die Effektgrößen sind oft kleiner als ursprünglich angenommen. Meta-Analysen zeigen moderate Effekte mit erheblicher Variabilität.',
      uncertainty: {
        confidence: 0.75,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'anchoring', 'emotional_appeal'],
    warningNeurons: [
      'Wiederholte Verwendung bestimmter Begriffe oder Bilder',
      'Kontextelemente, die nicht direkt zum Thema gehören',
      'Emotionale Vorbereitung durch Musik oder Atmosphäre',
      'Subtile Assoziationen zwischen nicht verwandten Konzepten',
    ],
    taxonomyGroups: ['cognitive_biases', 'unconscious_influence'],
  },
  {
    id: 'anchoring',
    name: {
      de: 'Ankereffekt',
      en: 'Anchoring',
    },
    description: {
      de: 'Die erste Information, die wir erhalten (der "Anker"), beeinflusst stark unsere nachfolgenden Urteile und Einschätzungen, selbst wenn diese Information irrelevant ist.',
      en: 'The first information we receive (the "anchor") strongly influences our subsequent judgments and assessments, even if this information is irrelevant.',
    },
    category: 'cognitive_bias',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      'Ein hoher ursprünglicher Preis macht einen reduzierten Preis attraktiver',
      'Gehaltsverhandlungen: Die erste genannte Zahl beeinflusst das Ergebnis',
      'Umfragen: Die erste Antwortoption wird überproportional gewählt',
    ],
    evidence: {
      studies: [
        'Tversky & Kahneman (1974) - Judgment under Uncertainty',
        'Ariely et al. (2003) - Coherent Arbitrariness',
        'Furnham & Boo (2011) - Anchoring Meta-Analysis',
      ],
      findings: 'Anchoring ist einer der robustesten kognitiven Biases. Effekte zeigen sich selbst bei Experten und bleiben auch bei expliziter Warnung bestehen.',
      uncertainty: {
        confidence: 0.92,
        sampleSize: '200+ Studien, N>25,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['framing', 'priming', 'scarcity'],
    warningNeurons: [
      'Betonung von Referenzpunkten oder Vergleichswerten',
      'Extreme Ausgangswerte als Kontrast',
      'Erste genannte Zahl in Verhandlungen',
      '"Normalpreis" vs. "Aktionspreis" Vergleiche',
    ],
    taxonomyGroups: ['cognitive_biases', 'decision_making'],
  },
  {
    id: 'social_proof',
    name: {
      de: 'Soziale Bewährtheit',
      en: 'Social Proof',
    },
    description: {
      de: 'Menschen orientieren sich am Verhalten anderer, besonders in unsicheren Situationen. Wenn viele etwas tun, erscheint es richtig und sicher.',
      en: 'People orient themselves based on the behavior of others, especially in uncertain situations. When many do something, it appears correct and safe.',
    },
    category: 'social_dynamics',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      '"Bestseller" oder "Meistverkauft" Labels',
      'Testimonials und Kundenbewertungen',
      '"9 von 10 Experten empfehlen..." Aussagen',
      'Lange Warteschlangen vor Restaurants',
    ],
    evidence: {
      studies: [
        'Cialdini (1984) - Influence: Science and Practice',
        'Asch (1951) - Conformity Experiments',
        'Sherif (1936) - Group Norms Formation',
      ],
      findings: 'Social Proof ist extrem wirksam, besonders bei Ambiguität und wenn die Referenzgruppe ähnlich zur eigenen ist.',
      uncertainty: {
        confidence: 0.93,
        sampleSize: '150+ Studien, N>20,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['authority', 'liking', 'consistency'],
    warningNeurons: [
      'Behauptungen über "die meisten Menschen"',
      'Testimonials ohne Überprüfbarkeit',
      'Künstlich erzeugte Popularität (z.B. gekaufte Bewertungen)',
      'Betonung von Gruppenzugehörigkeit',
    ],
    taxonomyGroups: ['social_influence', 'conformity'],
  },
  {
    id: 'scarcity',
    name: {
      de: 'Verknappung',
      en: 'Scarcity',
    },
    description: {
      de: 'Dinge erscheinen wertvoller und begehrenswerter, wenn sie knapp oder nur begrenzt verfügbar sind. Dies erzeugt Dringlichkeit und FOMO (Fear of Missing Out).',
      en: 'Things appear more valuable and desirable when they are scarce or only available in limited quantities. This creates urgency and FOMO (Fear of Missing Out).',
    },
    category: 'social_dynamics',
    difficulty: 'beginner',
    effectiveness: 'high',
    examples: [
      '"Nur noch 3 auf Lager!" Meldungen',
      '"Angebot gilt nur noch heute!" Zeitdruck',
      'Limitierte Editionen und exklusive Zugänge',
      '"Nur für die ersten 100 Käufer"',
    ],
    evidence: {
      studies: [
        'Cialdini (1975) - Scarcity Principle',
        'Worchel et al. (1975) - Cookie Jar Study',
        'Lynn (1991) - Scarcity Effects on Value',
      ],
      findings: 'Verknappung erhöht die wahrgenommene Attraktivität konsistent. Effekt ist stärker bei neu eingetretener Knappheit vs. dauerhafter Knappheit.',
      uncertainty: {
        confidence: 0.88,
        sampleSize: '80+ Studien, N>12,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['anchoring', 'social_proof', 'reciprocity'],
    warningNeurons: [
      'Künstliche Zeitlimits',
      '"Nur noch X verfügbar" ohne Verifikation',
      'Countdown-Timer bei Online-Angeboten',
      'Exklusivitätsversprechen ohne echte Limitation',
    ],
    taxonomyGroups: ['social_influence', 'urgency_creation'],
  },
  {
    id: 'reciprocity',
    name: {
      de: 'Reziprozität',
      en: 'Reciprocity',
    },
    description: {
      de: 'Menschen fühlen sich verpflichtet, Gefälligkeiten zu erwidern. Wenn jemand uns etwas gibt, möchten wir etwas zurückgeben, selbst wenn wir das Geschenk nicht wollten.',
      en: 'People feel obligated to return favors. When someone gives us something, we want to give something back, even if we didn\'t want the gift.',
    },
    category: 'social_dynamics',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Kostenlose Proben im Supermarkt',
      'Gratis E-Books vor kostenpflichtigem Angebot',
      'Personalisierte Geschenke von Lobbyisten',
      '"Geben Sie, was Sie für richtig halten" Modelle',
    ],
    evidence: {
      studies: [
        'Cialdini et al. (1975) - Reciprocity Concession',
        'Regan (1971) - Effects of Favor and Liking',
        'Gouldner (1960) - Norm of Reciprocity',
      ],
      findings: 'Reziprozität ist kulturübergreifend robust. Selbst unerwünschte Gefälligkeiten erzeugen Verpflichtungsgefühl.',
      uncertainty: {
        confidence: 0.90,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['social_proof', 'liking', 'consistency'],
    warningNeurons: [
      'Unerwartete Geschenke oder Gefälligkeiten',
      '"Kostenlos" Angebote mit späteren Verpflichtungen',
      'Personalisierte Zuwendungen',
      'Door-in-the-face Technik (große Bitte gefolgt von kleinerer)',
    ],
    taxonomyGroups: ['social_influence', 'obligation_creation'],
  },
  {
    id: 'authority',
    name: {
      de: 'Autorität',
      en: 'Authority',
    },
    description: {
      de: 'Menschen neigen dazu, Autoritätspersonen zu gehorchen und deren Aussagen für glaubwürdiger zu halten, oft ohne kritische Prüfung.',
      en: 'People tend to obey authority figures and consider their statements more credible, often without critical examination.',
    },
    category: 'social_dynamics',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      'Ärzte in weißen Kitteln in der Werbung',
      'Falsche Titel oder Qualifikationen',
      'Uniformen und Abzeichen als Autoritätssymbole',
      '"Wissenschaftler sagen..." ohne Quellenangabe',
    ],
    evidence: {
      studies: [
        'Milgram (1963) - Obedience to Authority',
        'Bickman (1974) - Uniform Effects on Compliance',
        'Cialdini (1984) - Authority Principle',
      ],
      findings: 'Autoritätssymbole führen zu deutlich erhöhter Compliance. Effekt ist stärker bei wahrgenommener Expertise und Legitimität.',
      uncertainty: {
        confidence: 0.94,
        sampleSize: '120+ Studien, N>18,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['social_proof', 'liking', 'framing'],
    warningNeurons: [
      'Berufung auf Titel ohne Relevanz zum Thema',
      'Autoritätssymbole (Kleidung, Umgebung)',
      'Fehlende Quellenangaben bei Expertenaussagen',
      'Generalisierung von Expertise auf fremde Gebiete',
    ],
    taxonomyGroups: ['social_influence', 'credibility'],
  },
  {
    id: 'liking',
    name: {
      de: 'Sympathie',
      en: 'Liking',
    },
    description: {
      de: 'Wir sagen eher ja zu Menschen, die wir mögen. Sympathie wird durch Attraktivität, Ähnlichkeit, Komplimente und Kooperation erzeugt.',
      en: 'We are more likely to say yes to people we like. Liking is created through attractiveness, similarity, compliments, and cooperation.',
    },
    category: 'social_dynamics',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Attraktive Verkäufer und Werbegesichter',
      '"Menschen wie Sie" in Marketingbotschaften',
      'Influencer, die eine persönliche Verbindung aufbauen',
      'Komplimente vor Verkaufsgesprächen',
    ],
    evidence: {
      studies: [
        'Cialdini (1984) - Liking Principle',
        'Burger et al. (2004) - Similarity and Compliance',
        'Berscheid & Walster (1974) - Physical Attractiveness',
      ],
      findings: 'Sympathie erhöht Persuasion signifikant. Ähnlichkeit, Komplimente und wiederholter Kontakt steigern Sympathie.',
      uncertainty: {
        confidence: 0.87,
        sampleSize: '90+ Studien, N>14,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['social_proof', 'reciprocity', 'authority'],
    warningNeurons: [
      'Übermäßige Schmeicheleien',
      'Betonung von Gemeinsamkeiten',
      'Künstlich erzeugte Vertrautheit',
      'Attraktivität als Hauptargument',
    ],
    taxonomyGroups: ['social_influence', 'relationship_building'],
  },
  {
    id: 'consistency',
    name: {
      de: 'Konsistenz',
      en: 'Consistency',
    },
    description: {
      de: 'Menschen streben danach, mit ihren früheren Aussagen und Handlungen konsistent zu sein. Kleine Zusagen führen zu größeren Verpflichtungen.',
      en: 'People strive to be consistent with their previous statements and actions. Small commitments lead to larger obligations.',
    },
    category: 'social_dynamics',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Foot-in-the-door Technik (kleine Bitte, dann größere)',
      'Öffentliche Zusagen verstärken Bindung',
      'Unterschriften für Petitionen führen zu späteren Spenden',
      '"Sie haben doch gesagt..." Argumentationen',
    ],
    evidence: {
      studies: [
        'Cialdini et al. (1978) - Low-ball Procedure',
        'Freedman & Fraser (1966) - Foot-in-the-door',
        'Festinger (1957) - Cognitive Dissonance',
      ],
      findings: 'Konsistenzstreben ist sehr stark, besonders bei öffentlichen und freiwilligen Zusagen.',
      uncertainty: {
        confidence: 0.89,
        sampleSize: '110+ Studien, N>16,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['reciprocity', 'liking', 'social_proof'],
    warningNeurons: [
      'Kleine Anfangsforderungen vor größeren',
      'Öffentliche Selbstverpflichtungen',
      'Berufung auf frühere Aussagen',
      'Identitätsbasierte Argumentation',
    ],
    taxonomyGroups: ['social_influence', 'commitment'],
  },
  {
    id: 'reactance_theory',
    name: {
      de: 'Reaktanz-Theorie',
      en: 'Reactance Theory',
    },
    description: {
      de: 'Wenn Menschen das Gefühl haben, ihre Freiheit wird eingeschränkt, reagieren sie oft mit Widerstand und tun das Gegenteil. Dies kann auch genutzt werden, um gewünschtes Verhalten zu fördern.',
      en: 'When people feel their freedom is being restricted, they often react with resistance and do the opposite. This can also be used to promote desired behavior.',
    },
    category: 'cognitive_bias',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      '"Nicht für Kinder geeignet" erhöht Interesse bei Jugendlichen',
      'Reverse Psychology: "Du schaffst das sowieso nicht"',
      'Verbote erzeugen Begierde',
      'Limited access erzeugt Begehrlichkeit',
    ],
    evidence: {
      studies: [
        'Brehm (1966) - Psychological Reactance Theory',
        'Pennebaker & Sanders (1976) - Graffiti Study',
        'Wicklund (1974) - Freedom and Reactance',
      ],
      findings: 'Reaktanz tritt besonders bei wahrgenommener Bedrohung der Freiheit auf. Effekt variiert stark nach Persönlichkeit.',
      uncertainty: {
        confidence: 0.78,
        sampleSize: '60+ Studien, N>8,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['scarcity', 'framing', 'emotional_appeal'],
    warningNeurons: [
      'Betonte Verbote oder Einschränkungen',
      'Exklusivität durch künstliche Barrieren',
      '"Sie sollten nicht..." Formulierungen',
      'Provokative Freiheitsentzug-Darstellungen',
    ],
    taxonomyGroups: ['cognitive_biases', 'resistance_manipulation'],
  },
  {
    id: 'ad_hominem',
    name: {
      de: 'Ad Hominem',
      en: 'Ad Hominem',
    },
    description: {
      de: 'Statt auf das Argument einzugehen, wird die Person angegriffen. Dies lenkt von sachlichen Diskussionen ab und diskreditiert den Gesprächspartner.',
      en: 'Instead of addressing the argument, the person is attacked. This distracts from factual discussions and discredits the interlocutor.',
    },
    category: 'logical_fallacy',
    difficulty: 'beginner',
    effectiveness: 'moderate',
    examples: [
      '"Du bist zu jung, um das zu verstehen"',
      '"Als Ausländer kannst du das nicht beurteilen"',
      '"Jemand mit deinem Hintergrund sollte schweigen"',
      'Persönliche Angriffe statt Sachargumente',
    ],
    evidence: {
      studies: [
        'Walton (1998) - Ad Hominem Arguments',
        'Tindale (2007) - Fallacies and Argument',
        'Woods & Walton (1989) - Fallacies Selected Papers',
      ],
      findings: 'Ad Hominem kann effektiv sein, wenn Glaubwürdigkeit der Quelle relevant ist, aber unterminiert rationale Diskurse.',
      uncertainty: {
        confidence: 0.72,
        sampleSize: '40+ Studien, N>6,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['straw_man', 'emotional_appeal', 'authority'],
    warningNeurons: [
      'Persönliche Eigenschaften statt Argumente adressiert',
      'Diskreditierung durch Assoziation',
      'Fokus auf Messenger statt Message',
      'Charakterangriffe',
    ],
    taxonomyGroups: ['logical_fallacies', 'argumentation'],
  },
  {
    id: 'false_dichotomy',
    name: {
      de: 'Falsches Dilemma',
      en: 'False Dichotomy',
    },
    description: {
      de: 'Präsentation von nur zwei Optionen, obwohl weitere Alternativen existieren. Dies vereinfacht komplexe Situationen unrealistisch und erzwingt eine Wahl.',
      en: 'Presentation of only two options when more alternatives exist. This unrealistically simplifies complex situations and forces a choice.',
    },
    category: 'logical_fallacy',
    difficulty: 'beginner',
    effectiveness: 'moderate',
    examples: [
      '"Entweder bist du für uns oder gegen uns"',
      '"Willst du sicher oder frei sein?"',
      '"Du musst dich entscheiden: Karriere oder Familie"',
      '"Entweder Wirtschaftswachstum oder Klimaschutz"',
    ],
    evidence: {
      studies: [
        'Johnson-Laird & Byrne (1991) - Deduction',
        'Evans (2002) - Logic and Human Reasoning',
        'Hurley (2015) - Logic Textbook Analysis',
      ],
      findings: 'Falsche Dichotomien reduzieren kognitive Belastung und führen zu schnelleren, aber oft suboptimalen Entscheidungen.',
      uncertainty: {
        confidence: 0.76,
        sampleSize: '35+ Studien, N>5,500',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'emotional_appeal', 'straw_man'],
    warningNeurons: [
      '"Entweder... oder..." Formulierungen',
      'Ausschluss von Mittelwegen',
      'Vereinfachung komplexer Entscheidungen',
      'Polarisierende Sprache',
    ],
    taxonomyGroups: ['logical_fallacies', 'oversimplification'],
  },
  {
    id: 'straw_man',
    name: {
      de: 'Strohmann-Argument',
      en: 'Straw Man',
    },
    description: {
      de: 'Das Argument des Gegners wird verzerrt oder vereinfacht dargestellt, um es leichter widerlegen zu können. Die tatsächliche Position wird nicht adressiert.',
      en: 'The opponent\'s argument is distorted or simplified to make it easier to refute. The actual position is not addressed.',
    },
    category: 'logical_fallacy',
    difficulty: 'intermediate',
    effectiveness: 'moderate',
    examples: [
      '"Die wollen alle Autos verbieten!" (statt: Emissionen reduzieren)',
      '"Feministen hassen alle Männer!" (Verzerrung)',
      '"Sozialisten wollen alles verstaatlichen!" (Vereinfachung)',
      'Extreme Interpretation moderater Positionen',
    ],
    evidence: {
      studies: [
        'Walton (1996) - Straw Man Fallacy',
        'Aikin & Casey (2011) - Straw Man Arguments',
        'Talisse & Aikin (2006) - Two Forms of Straw Man',
      ],
      findings: 'Strohmann-Argumente sind weit verbreitet und effektiv zur Mobilisierung, unterminieren aber konstruktiven Dialog.',
      uncertainty: {
        confidence: 0.74,
        sampleSize: '30+ Studien, N>4,500',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['ad_hominem', 'false_dichotomy', 'emotional_appeal'],
    warningNeurons: [
      'Übertriebene oder vereinfachte Darstellung gegnerischer Positionen',
      'Ignorierung von Nuancen',
      'Fokus auf extreme Randpositionen',
      '"Die wollen..." Generalisierungen',
    ],
    taxonomyGroups: ['logical_fallacies', 'argumentation'],
  },
  {
    id: 'equivocation',
    name: {
      de: 'Äquivokation',
      en: 'Equivocation',
    },
    description: {
      de: 'Verwendung mehrdeutiger Begriffe oder Änderung der Bedeutung eines Wortes während der Argumentation, um zu irreführen oder zu verwirren.',
      en: 'Use of ambiguous terms or changing the meaning of a word during argumentation to mislead or confuse.',
    },
    category: 'logical_fallacy',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      '"Freiheit" mal als politische, mal als wirtschaftliche Freiheit verwenden',
      '"Natürlich" als "in der Natur vorkommend" und "gut/harmlos" verwenden',
      'Wechsel zwischen technischer und Alltagsbedeutung von Begriffen',
      '"Theorie" in wissenschaftlichem vs. umgangssprachlichem Sinn',
    ],
    evidence: {
      studies: [
        'Macagno & Walton (2008) - Equivocation Study',
        'Hamblin (1970) - Fallacies Analysis',
        'Walton (1996) - Argumentation Schemes',
      ],
      findings: 'Äquivokation ist subtil und schwer zu erkennen. Effektivität hängt von sprachlicher Kompetenz ab.',
      uncertainty: {
        confidence: 0.68,
        sampleSize: '25+ Studien, N>3,500',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'straw_man', 'narrative_persuasion'],
    warningNeurons: [
      'Wechselnde Bedeutungen desselben Begriffs',
      'Mehrdeutige Schlüsselbegriffe',
      'Vermischung technischer und Alltagssprache',
      'Unklare Definitionen',
    ],
    taxonomyGroups: ['logical_fallacies', 'language_manipulation'],
  },
  {
    id: 'emotional_appeal',
    name: {
      de: 'Emotionale Appelle',
      en: 'Emotional Appeal',
    },
    description: {
      de: 'Ansprache von Emotionen (Angst, Wut, Mitgefühl, Freude) statt rationaler Argumentation. Emotionen können logisches Denken überschreiben.',
      en: 'Addressing emotions (fear, anger, compassion, joy) instead of rational argumentation. Emotions can override logical thinking.',
    },
    category: 'emotional_manipulation',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      'Angstappelle: "Denken Sie an Ihre Kinder!"',
      'Wut: "Diese Elite raubt uns unsere Rechte!"',
      'Mitgefühl: Bilder leidender Menschen',
      'Nostalgie: "Früher war alles besser"',
    ],
    evidence: {
      studies: [
        'Petty & Cacioppo (1986) - Elaboration Likelihood Model',
        'Nabi (2002) - Discrete Emotions and Persuasion',
        'Dillard & Peck (2000) - Affect and Persuasion',
      ],
      findings: 'Emotionale Appelle sind sehr effektiv, besonders bei niedriger kognitiver Verarbeitung. Angst und Wut sind besonders wirksam.',
      uncertainty: {
        confidence: 0.91,
        sampleSize: '150+ Studien, N>22,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['framing', 'priming', 'narrative_persuasion'],
    warningNeurons: [
      'Starke emotionale Sprache und Bilder',
      'Appell an Urängste',
      'Fehlende sachliche Argumentation',
      'Dramatisierung und Übertreibung',
    ],
    taxonomyGroups: ['emotional_manipulation', 'persuasion_techniques'],
  },
  {
    id: 'repetition',
    name: {
      de: 'Wiederholung',
      en: 'Repetition',
    },
    description: {
      de: 'Häufige Wiederholung von Botschaften erhöht deren Glaubwürdigkeit und Akzeptanz, unabhängig vom Wahrheitsgehalt (Mere Exposure Effect).',
      en: 'Frequent repetition of messages increases their credibility and acceptance, regardless of truthfulness (Mere Exposure Effect).',
    },
    category: 'cognitive_bias',
    difficulty: 'beginner',
    effectiveness: 'high',
    examples: [
      'Politische Slogans werden endlos wiederholt',
      'Werbesprüche und Jingles',
      'Wiederholte Falschbehauptungen in sozialen Medien',
      '"Big Lie" Taktik: große Lügen ständig wiederholen',
    ],
    evidence: {
      studies: [
        'Zajonc (1968) - Mere Exposure Effect',
        'Hasher et al. (1977) - Frequency and Truth',
        'Pennycook et al. (2018) - Prior Exposure Increases Belief',
      ],
      findings: 'Wiederholung erhöht Vertrautheit und wahrgenommene Wahrheit signifikant. Effekt bleibt auch bei expliziter Warnung bestehen.',
      uncertainty: {
        confidence: 0.90,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['illusory_truth_effect', 'priming', 'narrative_persuasion'],
    warningNeurons: [
      'Identische Formulierungen in verschiedenen Kontexten',
      'Mantrenartige Wiederholung von Phrasen',
      'Koordinierte Verbreitung derselben Botschaft',
      'Slogans statt Argumente',
    ],
    taxonomyGroups: ['cognitive_biases', 'information_repetition'],
  },
  {
    id: 'illusory_truth_effect',
    name: {
      de: 'Wahrheitsillusion',
      en: 'Illusory Truth Effect',
    },
    description: {
      de: 'Wiederholte Aussagen werden als wahrer wahrgenommen, auch wenn sie falsch sind. Vertrautheit wird mit Wahrheit verwechselt.',
      en: 'Repeated statements are perceived as more true, even if they are false. Familiarity is confused with truth.',
    },
    category: 'cognitive_bias',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Mythen, die durch Wiederholung "wahr" werden',
      'Fake News, die durch virale Verbreitung Glaubwürdigkeit gewinnen',
      'Urban Legends, die durch Erzählung verstärkt werden',
      'Marketing-Claims, die durch Wiederholung akzeptiert werden',
    ],
    evidence: {
      studies: [
        'Begg et al. (1992) - Repetition and Truth',
        'Fazio et al. (2015) - Knowledge Does Not Protect',
        'Pennycook et al. (2018) - Prior Exposure Study',
      ],
      findings: 'Der Effekt ist robust und funktioniert auch bei offensichtlich falschen Aussagen. Selbst Experten sind nicht immun.',
      uncertainty: {
        confidence: 0.88,
        sampleSize: '70+ Studien, N>11,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['repetition', 'priming', 'social_proof'],
    warningNeurons: [
      'Häufig wiederholte Behauptungen ohne Beweis',
      'Virale Verbreitung in sozialen Medien',
      'Gefühl von Vertrautheit ohne Quellenkenntnis',
      'Akzeptanz aufgrund von Bekanntheit',
    ],
    taxonomyGroups: ['cognitive_biases', 'information_repetition'],
  },
  {
    id: 'pacing_and_leading',
    name: {
      de: 'Pacing und Leading',
      en: 'Pacing and Leading',
    },
    description: {
      de: 'Erst wird die aktuelle Erfahrung der Person gespiegelt (Pacing), um Rapport aufzubauen, dann wird sie in eine gewünschte Richtung gelenkt (Leading).',
      en: 'First, the person\'s current experience is mirrored (Pacing) to build rapport, then they are guided in a desired direction (Leading).',
    },
    category: 'nlp_technique',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      '"Sie fühlen sich unsicher... und möchten Klarheit... deshalb sollten Sie..."',
      '"Viele Menschen sorgen sich... verstehen das... und deshalb bieten wir..."',
      'Therapeutische Technik, auch in Verkauf und Politik',
      'Synchronisation mit Körpersprache, dann Führung',
    ],
    evidence: {
      studies: [
        'Bandler & Grinder (1979) - NLP Foundations',
        'Sharpley (1984) - NLP Research Review',
        'Heap (2008) - NLP Efficacy Study',
      ],
      findings: 'Empirische Evidenz für NLP-Techniken ist gemischt. Einige Studien zeigen Effekte, andere nicht. Mechanismen unklar.',
      uncertainty: {
        confidence: 0.55,
        sampleSize: '30+ Studien, N>4,000',
        evidenceQuality: 'low',
      },
    },
    relatedTechniques: ['liking', 'embedded_commands', 'priming'],
    warningNeurons: [
      'Spiegelung eigener Gedanken und Gefühle',
      'Gradueller Übergang zu neuen Ideen',
      'Subtile Verhaltensanpassung',
      'Von Bestätigung zu Suggestion',
    ],
    taxonomyGroups: ['nlp_techniques', 'rapport_building'],
  },
  {
    id: 'embedded_commands',
    name: {
      de: 'Eingebettete Befehle',
      en: 'Embedded Commands',
    },
    description: {
      de: 'Befehle oder Suggestionen werden in scheinbar harmlose Sätze eingebettet, oft durch Betonung oder sprachliche Muster hervorgehoben.',
      en: 'Commands or suggestions are embedded in seemingly harmless sentences, often highlighted through emphasis or linguistic patterns.',
    },
    category: 'nlp_technique',
    difficulty: 'expert',
    effectiveness: 'low',
    examples: [
      '"Ich weiß nicht, ob SIE JETZT KAUFEN wollen, aber..."',
      '"Du musst nicht ENTSPANNEN, wenn du nicht willst"',
      '"Manche Menschen ENTSCHEIDEN SICH SOFORT, andere brauchen Zeit"',
      'Hypnotische Sprachmuster in Verkaufsgesprächen',
    ],
    evidence: {
      studies: [
        'Erickson (1980) - Hypnotic Language Patterns',
        'Lynn et al. (2000) - Hypnosis Review',
        'Wagstaff (2010) - Hypnotic Suggestion Mechanisms',
      ],
      findings: 'Wissenschaftliche Evidenz für embedded commands ist sehr schwach. Effekte sind klein und inkonsistent.',
      uncertainty: {
        confidence: 0.45,
        sampleSize: '20+ Studien, N>2,500',
        evidenceQuality: 'low',
      },
    },
    relatedTechniques: ['pacing_and_leading', 'priming', 'framing'],
    warningNeurons: [
      'Ungewöhnliche Betonungen in Sätzen',
      'Imperativformen in Nebensätzen',
      'Hypnotische Sprachmuster',
      'Wiederholte Handlungsaufforderungen',
    ],
    taxonomyGroups: ['nlp_techniques', 'subliminal_influence'],
  },
  {
    id: 'microtargeting',
    name: {
      de: 'Microtargeting',
      en: 'Microtargeting',
    },
    description: {
      de: 'Nutzung detaillierter persönlicher Daten zur Erstellung hochgradig personalisierter Botschaften, die auf individuelle Schwachstellen abzielen.',
      en: 'Use of detailed personal data to create highly personalized messages that target individual vulnerabilities.',
    },
    category: 'digital_technique',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Cambridge Analytica Skandal: psychografisches Profiling',
      'Personalisierte politische Werbung basierend auf Facebook-Daten',
      'Individualisierte Produktwerbung basierend auf Browsing-Verhalten',
      'Dynamische Preisgestaltung basierend auf Nutzerprofil',
    ],
    evidence: {
      studies: [
        'Matz et al. (2017) - Psychological Targeting',
        'Kosinski et al. (2013) - Digital Footprints',
        'Tufekci (2014) - Engineering the Public',
      ],
      findings: 'Microtargeting kann Persuasion signifikant erhöhen. Effektivität hängt von Datenqualität und Modellgenauigkeit ab.',
      uncertainty: {
        confidence: 0.73,
        sampleSize: '25+ Studien, N>50,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['digital_influence', 'framing', 'emotional_appeal'],
    warningNeurons: [
      'Ungewöhnlich relevante Werbung',
      'Botschaften, die persönliche Details kennen',
      'Exakte Ansprache von Ängsten oder Wünschen',
      'Verdächtig passende Angebote',
    ],
    taxonomyGroups: ['digital_techniques', 'data_exploitation'],
  },
  {
    id: 'digital_influence',
    name: {
      de: 'Digitale Einflussnahme',
      en: 'Digital Influence',
    },
    description: {
      de: 'Systematische Manipulation der digitalen Informationsumgebung durch Bots, koordinierte Kampagnen, Algorithmus-Manipulation und astroturfing.',
      en: 'Systematic manipulation of the digital information environment through bots, coordinated campaigns, algorithm manipulation, and astroturfing.',
    },
    category: 'digital_technique',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Bot-Netzwerke, die Hashtags trendy machen',
      'Koordinierte Inauthentic Behavior Kampagnen',
      'SEO-Manipulation für Desinformation',
      'Fake Grassroots Bewegungen (Astroturfing)',
    ],
    evidence: {
      studies: [
        'Woolley & Howard (2018) - Computational Propaganda',
        'Broniatowski et al. (2018) - Russian Trolls',
        'Ferrara et al. (2016) - Rise of Social Bots',
      ],
      findings: 'Digitale Manipulation ist nachweislich effektiv und weit verbreitet. Skalierbarkeit macht sie besonders gefährlich.',
      uncertainty: {
        confidence: 0.82,
        sampleSize: '40+ Studien, N>100,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['microtargeting', 'social_proof', 'repetition'],
    warningNeurons: [
      'Plötzliche virale Trends ohne organisches Wachstum',
      'Unnatürliche Posting-Muster',
      'Koordinierte identische Botschaften',
      'Verdächtig neue oder namenlose Accounts',
    ],
    taxonomyGroups: ['digital_techniques', 'coordinated_manipulation'],
  },
  {
    id: 'visual_manipulation',
    name: {
      de: 'Visuelle Manipulation',
      en: 'Visual Manipulation',
    },
    description: {
      de: 'Einsatz von Bildern, Videos, Grafiken und Design-Elementen zur emotionalen Beeinflussung und Verzerrung der Wahrnehmung.',
      en: 'Use of images, videos, graphics, and design elements for emotional influence and perception distortion.',
    },
    category: 'digital_technique',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Manipulierte Statistik-Grafiken mit verzerrten Skalen',
      'Aus dem Kontext gerissene Bilder',
      'Emotionale Bildauswahl (weinende Kinder, wütende Menschenmassen)',
      'Farbpsychologie in politischen Kampagnen',
    ],
    evidence: {
      studies: [
        'Messaris & Abraham (2001) - Visual Arguments',
        'Huff (1954) - How to Lie with Statistics',
        'Cairo (2019) - Truthful Charts',
      ],
      findings: 'Visuelle Informationen werden schneller verarbeitet und emotional wirksamer als Text. Manipulation schwer zu erkennen.',
      uncertainty: {
        confidence: 0.85,
        sampleSize: '50+ Studien, N>8,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'emotional_appeal', 'synthetic_media'],
    warningNeurons: [
      'Fehlende Quellenangaben bei Bildern',
      'Ungewöhnliche Bildausschnitte',
      'Statistiken mit verzerrten Achsen',
      'Emotionale statt sachliche Bildauswahl',
    ],
    taxonomyGroups: ['digital_techniques', 'media_manipulation'],
  },
  {
    id: 'synthetic_media',
    name: {
      de: 'Synthetische Medien',
      en: 'Synthetic Media',
    },
    description: {
      de: 'KI-generierte oder manipulierte Medieninhalte (Deepfakes, KI-Bilder, gefälschte Audio) zur Täuschung oder Beeinflussung.',
      en: 'AI-generated or manipulated media content (deepfakes, AI images, fake audio) for deception or influence.',
    },
    category: 'digital_technique',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Deepfake Videos von Politikern',
      'KI-generierte Bilder von nicht-existenten Ereignissen',
      'Voice-Cloning für Betrug',
      'Synthetische Nachrichtenartikel',
    ],
    evidence: {
      studies: [
        'Chesney & Citron (2019) - Deep Fakes',
        'Vaccari & Chadwick (2020) - Deepfakes and Democracy',
        'Westerlund (2019) - Emergence of Deepfakes',
      ],
      findings: 'Synthetische Medien sind zunehmend überzeugend und schwer zu erkennen. Potenzial für massiven Schaden ist hoch.',
      uncertainty: {
        confidence: 0.78,
        sampleSize: '20+ Studien, N>3,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['visual_manipulation', 'digital_influence', 'emotional_appeal'],
    warningNeurons: [
      'Unnatürliche Bewegungen oder Übergänge in Videos',
      'Inkonsistente Beleuchtung oder Schatten',
      'Fehlende Verifikation von dramatischen Claims',
      'Zu perfekte oder generische Gesichter in Bildern',
    ],
    taxonomyGroups: ['digital_techniques', 'ai_manipulation'],
  },
  {
    id: 'dark_patterns',
    name: {
      de: 'Dark Patterns',
      en: 'Dark Patterns',
    },
    description: {
      de: 'Manipulative UI/UX-Design-Elemente, die Nutzer zu ungewollten Handlungen verleiten oder Entscheidungen erschweren.',
      en: 'Manipulative UI/UX design elements that trick users into unwanted actions or make decisions difficult.',
    },
    category: 'digital_technique',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Versteckte Abmelde-Buttons',
      'Pre-checked Boxen für Newsletter-Anmeldung',
      'Verschleierte Kosten bis zum letzten Schritt',
      'Künstliche Dringlichkeit ("Nur noch 1 Zimmer!")',
      'Roach Motel: Einfach rein, schwer raus',
    ],
    evidence: {
      studies: [
        'Gray et al. (2018) - Dark Patterns Taxonomy',
        'Mathur et al. (2019) - Dark Patterns at Scale',
        'Luguri & Strahilevitz (2021) - Dark Patterns and Consumer',
      ],
      findings: 'Dark Patterns sind weit verbreitet und messbar effektiv. Sie reduzieren Nutzer-Autonomie signifikant.',
      uncertainty: {
        confidence: 0.87,
        sampleSize: '30+ Studien, N>15,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['scarcity', 'framing', 'consistency'],
    warningNeurons: [
      'Schwierige oder versteckte Opt-Out-Optionen',
      'Unklare oder irreführende Button-Labels',
      'Unterschiedliche visuelle Hierarchie für Ja/Nein',
      'Künstlicher Zeitdruck',
    ],
    taxonomyGroups: ['digital_techniques', 'interface_manipulation'],
  },
  {
    id: 'nudging',
    name: {
      de: 'Nudging',
      en: 'Nudging',
    },
    description: {
      de: 'Subtile Veränderung der Entscheidungsarchitektur, um Verhalten in eine gewünschte Richtung zu lenken, ohne Wahlfreiheit einzuschränken.',
      en: 'Subtle modification of choice architecture to guide behavior in a desired direction without restricting freedom of choice.',
    },
    category: 'cognitive_bias',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      'Gesunde Lebensmittel auf Augenhöhe in Kantinen',
      'Opt-out statt Opt-in bei Organspende',
      'Standard-Einstellungen bei Software',
      'Fußabdrücke zum Mülleimer',
    ],
    evidence: {
      studies: [
        'Thaler & Sunstein (2008) - Nudge Theory',
        'Benartzi & Thaler (2013) - Behavioral Economics',
        'Hansen & Jespersen (2013) - Nudge Typology',
      ],
      findings: 'Nudges können Verhalten effektiv beeinflussen. Ethische Bedenken bei mangelnder Transparenz.',
      uncertainty: {
        confidence: 0.84,
        sampleSize: '100+ Studien, N>50,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['framing', 'anchoring', 'dark_patterns'],
    warningNeurons: [
      'Default-Optionen, die vorteilhaft für Anbieter sind',
      'Subtile Umgebungsveränderungen',
      'Architektur der Wahlmöglichkeiten',
      'Intransparente Entscheidungshilfen',
    ],
    taxonomyGroups: ['cognitive_biases', 'choice_architecture'],
  },
  {
    id: 'ai_persuasion',
    name: {
      de: 'KI-gestützte Persuasion',
      en: 'AI-Powered Persuasion',
    },
    description: {
      de: 'Einsatz von künstlicher Intelligenz zur personalisierten, adaptiven und skalierten Persuasion durch Verhaltensvorhersage und Echtzeit-Optimierung.',
      en: 'Use of artificial intelligence for personalized, adaptive, and scaled persuasion through behavior prediction and real-time optimization.',
    },
    category: 'digital_technique',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Chatbots, die Gesprächsstil an Nutzer anpassen',
      'Algorithmen, die perfekte Timing für Benachrichtigungen finden',
      'KI-generierte personalisierte Inhalte',
      'Predictive Analytics für Verhaltensänderung',
    ],
    evidence: {
      studies: [
        'Matz et al. (2017) - Algorithmic Persuasion',
        'Yeomans et al. (2019) - Conversational Receptiveness',
        'Susser et al. (2019) - Online Manipulation',
      ],
      findings: 'KI kann menschliche Persuasionsexperten übertreffen. Skalierbarkeit und Personalisierung erhöhen Wirksamkeit dramatisch.',
      uncertainty: {
        confidence: 0.76,
        sampleSize: '15+ Studien, N>20,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['microtargeting', 'digital_influence', 'nudging'],
    warningNeurons: [
      'Unnatürlich passende Empfehlungen',
      'Perfektes Timing von Botschaften',
      'Adaptive Gesprächsführung',
      'Kontinuierliche Verhaltensoptimierung',
    ],
    taxonomyGroups: ['digital_techniques', 'ai_manipulation'],
  },
  {
    id: 'narrative_persuasion',
    name: {
      de: 'Narrative Persuasion',
      en: 'Narrative Persuasion',
    },
    description: {
      de: 'Geschichten und Narrative sind mächtiger als Fakten. Sie aktivieren Emotionen, schaffen Identifikation und umgehen kritisches Denken.',
      en: 'Stories and narratives are more powerful than facts. They activate emotions, create identification, and bypass critical thinking.',
    },
    category: 'emotional_manipulation',
    difficulty: 'intermediate',
    effectiveness: 'very_high',
    examples: [
      'Anekdotische Evidenz statt Statistiken',
      'Heldenreisen in Werbung und Politik',
      'Verschwörungsnarrative mit dramatischer Story',
      'Case Studies statt Meta-Analysen',
    ],
    evidence: {
      studies: [
        'Green & Brock (2000) - Transportation Theory',
        'Slater & Rouner (2002) - Entertainment-Education',
        'Dahlstrom (2014) - Using Narratives',
      ],
      findings: 'Narrative reduzieren Counter-Arguing und erhöhen Persuasion. Effekt ist stärker bei involvierten, emotionalen Geschichten.',
      uncertainty: {
        confidence: 0.86,
        sampleSize: '80+ Studien, N>12,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['emotional_appeal', 'framing', 'liking'],
    warningNeurons: [
      'Einzelfälle statt repräsentativer Daten',
      'Dramatische Geschichten ohne Kontext',
      'Emotionale Erzählungen statt Fakten',
      'Identifikationsfiguren als Hauptargument',
    ],
    taxonomyGroups: ['emotional_manipulation', 'storytelling'],
  },
];

/**
 * Get technique by ID
 */
export function getTechniqueById(id: string): PersuasionTechnique | undefined {
  return persuasionTechniques.find((t) => t.id === id);
}

/**
 * Get techniques by category
 */
export function getTechniquesByCategory(category: string): PersuasionTechnique[] {
  return persuasionTechniques.filter((t) => t.category === category);
}

/**
 * Get techniques by difficulty
 */
export function getTechniquesByDifficulty(difficulty: string): PersuasionTechnique[] {
  return persuasionTechniques.filter((t) => t.difficulty === difficulty);
}

/**
 * Search techniques by query
 */
export function searchTechniques(query: string): PersuasionTechnique[] {
  const lowerQuery = query.toLowerCase();
  return persuasionTechniques.filter(
    (t) =>
      t.name.de.toLowerCase().includes(lowerQuery) ||
      t.name.en.toLowerCase().includes(lowerQuery) ||
      t.description.de.toLowerCase().includes(lowerQuery) ||
      t.description.en.toLowerCase().includes(lowerQuery)
  );
}
