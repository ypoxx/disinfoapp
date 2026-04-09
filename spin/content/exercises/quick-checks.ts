import type { Exercise } from '../types';

export const quickChecks: Exercise[] = [
  {
    id: 'qc-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: '🔴 EILMELDUNG: Studie beweist - 5G-Strahlung verursacht Krebs! Die Regierung verschweigt die Wahrheit! TEILEN bevor es gelöscht wird!!!',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Desinformation: Unbelegte Behauptung, Verschwörungsnarrativ ("Regierung verschweigt"), Dringlichkeits-Appell ("bevor es gelöscht wird"), emotionale Sprache.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'qc-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Robert Koch-Institut (@raborki): Aktuelle Influenza-Zahlen für KW 12: 3.421 laborbestätigte Fälle. Trend rückläufig. Detaillierter Wochenbericht: rki.de/influenza',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [1],
    explanation: {
      de: 'Seriöser Post: Offizielle Institution, konkrete Zahlen, Quellenangabe, sachlicher Ton, keine emotionale Sprache.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Neue Analyse zeigt: Das Unternehmen XY hat seine CO2-Bilanz um 40% geschönt. Drei unabhängige Gutachter bestätigen die Diskrepanz. Vollständiger Bericht mit Methodik: envirotrust.org/report-2024',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [1],
    explanation: {
      de: 'Wahrscheinlich seriös: Konkrete Zahlen, mehrere unabhängige Quellen, vollständiger Bericht mit Methodik verlinkt. Natürlich sollte man die Quelle "envirotrust.org" noch lateral prüfen.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'qc-4',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Ein Insider bei der Firma ABC packt aus: "Die neuen Produkte sind gesundheitsschädlich!" Über 50.000 haben schon geteilt. Die Mainstream-Medien berichten nicht darüber - fragt euch warum!',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [0],
    explanation: {
      de: 'Warnsignale: Anonyme Quelle ("ein Insider"), Social-Proof-Manipulation ("50.000 haben geteilt"), Anti-Medien-Narrativ, keine konkreten Belege, emotionaler Appell.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['social_proof', 'reactance_theory', 'authority'],
  },
  {
    id: 'qc-5',
    type: 'quick-check',
    difficulty: 'advanced',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Laut einer Erhebung des Meinungsforschungsinstituts Infratest dimap im Auftrag der ARD sind 62% der Befragten mit der Arbeit der Bundesregierung unzufrieden. Die Befragung wurde am 15.3. unter 1.204 Wahlberechtigten durchgeführt.',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [1],
    explanation: {
      de: 'Seriös: Renommiertes Institut, klarer Auftraggeber, konkrete Stichprobengröße und Datum, sachliche Darstellung. Professionelle Kommunikatoren sollten solche Umfragen einordnen können.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-6',
    type: 'quick-check',
    difficulty: 'advanced',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'BREAKING: CEO von TechCorp in geheimes Treffen mit Lobbyisten verwickelt! Exklusive Fotos beweisen alles. Die Aktie wird morgen einbrechen - noch schnell verkaufen! #TechCorpSkandal',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Marktmanipulation durch Desinformation: Vage Behauptungen ("geheimes Treffen"), unbelegte "Beweise", Handlungsaufforderung zum Aktienverkauf, Hashtag-Kampagne zur Viralität.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['scarcity', 'emotional_appeal', 'framing'],
  },
];
