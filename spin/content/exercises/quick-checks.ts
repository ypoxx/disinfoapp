import type { Exercise } from '../types';

export const quickChecks: Exercise[] = [
  {
    id: 'qc-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: '🔴 EILMELDUNG: Studie beweist - 5G-Strahlung verursacht Krebs! Die Regierung verschweigt die Wahrheit! TEILEN bevor es gelöscht wird!!!',
      en: '🔴 BREAKING: Study proves 5G radiation causes cancer! The government is hiding the truth! SHARE before it gets deleted!!!',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Manipulationstechniken: Unbelegte Behauptung, Verschwörungsnarrativ ("Regierung verschweigt"), Dringlichkeits-Appell ("bevor es gelöscht wird"), emotionale Sprache.',
      en: 'Classic manipulation techniques: Unsubstantiated claim, conspiracy narrative ("government is hiding"), urgency appeal ("before it gets deleted"), emotional language.',
    },
    points: 5,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'qc-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Neue Analyse zeigt: Das Unternehmen XY hat seine CO2-Bilanz um 40% geschönt. Drei unabhängige Gutachter bestätigen die Diskrepanz. Vollständiger Bericht mit Methodik: envirotrust.org/report-2024',
      en: 'New analysis shows: Company XY inflated its carbon footprint figures by 40%. Three independent auditors confirm the discrepancy. Full report with methodology: envirotrust.org/report-2024',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Wahrscheinlich sachlich: Konkrete Zahlen, mehrere unabhängige Quellen, vollständiger Bericht mit Methodik verlinkt. Natürlich sollte man die Quelle "envirotrust.org" noch lateral prüfen.',
      en: 'Likely factual: Concrete figures, multiple independent sources, full report with methodology linked. Of course, the source "envirotrust.org" should still be checked through lateral reading.',
    },
    points: 5,
    relatedTechniques: ['authority'],
  },
  {
    id: 'qc-4',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Ein Insider bei der Firma ABC packt aus: "Die neuen Produkte sind gesundheitsschädlich!" Über 50.000 haben schon geteilt. Die Mainstream-Medien berichten nicht darüber - fragt euch warum!',
      en: 'An insider at company ABC reveals: "The new products are harmful to health!" Over 50,000 have already shared this. The mainstream media aren\'t covering it — ask yourselves why!',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Warnsignale: Anonyme Quelle ("ein Insider"), Social-Proof-Manipulation ("50.000 haben geteilt"), Anti-Medien-Narrativ, keine konkreten Belege, emotionaler Appell.',
      en: 'Warning signs: Anonymous source ("an insider"), social proof manipulation ("50,000 have shared"), anti-media narrative, no concrete evidence, emotional appeal.',
    },
    points: 5,
    relatedTechniques: ['social_proof', 'reactance_theory', 'authority'],
  },
  {
    id: 'qc-6',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'BREAKING: CEO von TechCorp in geheimes Treffen mit Lobbyisten verwickelt! Exklusive Fotos beweisen alles. Die Aktie wird morgen einbrechen - noch schnell verkaufen! #TechCorpSkandal',
      en: 'BREAKING: TechCorp CEO caught in secret meeting with lobbyists! Exclusive photos prove everything. The stock will crash tomorrow — sell now while you can! #TechCorpScandal',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Marktmanipulation: Vage Behauptungen ("geheimes Treffen"), unbelegte "Beweise", Handlungsaufforderung zum Aktienverkauf, Hashtag-Kampagne zur Viralität.',
      en: 'Classic market manipulation: Vague claims ("secret meeting"), unsubstantiated "proof", call to action to sell stock, hashtag campaign for virality.',
    },
    points: 5,
    relatedTechniques: ['scarcity', 'emotional_appeal', 'framing'],
  },
];
