import type { Technique } from '../types';

export const framing: Technique =   {
    id: 'framing',
    name: {
      de: 'Rahmung',
      en: 'Framing',
      hu: 'Keretezés',
      pl: 'Ramowanie',
      sk: 'Rámcovanie',
      hr: 'Uokvirivanje',
      el: 'Πλαισίωση',
      mk: 'Рамкирање',
      cnr: 'Uokvirivanje',
    },
    description: {
      de: 'Die Art und Weise, wie Informationen präsentiert werden, beeinflusst deren Wahrnehmung und Interpretation. Durch die Wahl bestimmter Worte, Kontexte oder Perspektiven wird die Bedeutung einer Nachricht geformt.',
      en: 'The way information is presented influences its perception and interpretation. By choosing specific words, contexts, or perspectives, the meaning of a message is shaped.',
      hu: 'Az információk bemutatásának módja befolyásolja azok észlelését és értelmezését. Bizonyos szavak, kontextusok vagy nézőpontok megválasztásával alakítják az üzenet jelentését.',
      pl: 'Sposób prezentacji informacji wpływa na ich postrzeganie i interpretację. Poprzez wybór określonych słów, kontekstów lub perspektyw kształtuje się znaczenie przekazu.',
      sk: 'Spôsob, akým sú informácie prezentované, ovplyvňuje ich vnímanie a interpretáciu. Výberom určitých slov, kontextov alebo perspektív sa formuje význam správy.',
      hr: 'Način na koji se informacije prezentiraju utječe na njihovu percepciju i interpretaciju. Odabirom određenih riječi, konteksta ili perspektiva oblikuje se značenje poruke.',
      el: 'Ο τρόπος παρουσίασης των πληροφοριών επηρεάζει την αντίληψη και την ερμηνεία τους. Μέσω της επιλογής συγκεκριμένων λέξεων, πλαισίων ή οπτικών γωνιών διαμορφώνεται η σημασία του μηνύματος.',
      mk: 'Начинот на кој се презентираат информациите влијае на нивната перцепција и интерпретација. Преку изборот на одредени зборови, контексти или перспективи се обликува значењето на пораката.',
      cnr: 'Način na koji se informacije prezentuju utiče na njihovu percepciju i interpretaciju. Odabirom određenih riječi, konteksta ili perspektiva oblikuje se značenje poruke.',
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
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Daniel_Kahneman_%283283955327%29_%28cropped%29.jpg',
      alt: 'Daniel Kahneman - Nobelpreisträger und Pionier der Framing-Forschung',
      credit: 'World Economic Forum / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Daniel_Kahneman_(3283955327)_(cropped).jpg',
      context: 'Kahneman entwickelte mit Tversky die Framing-Theorie (Asian Disease Problem, 1981)',
    },
  };
