/**
 * Enhanced Social Media Simulator Posts with Technique Tagging
 * Each post is tagged with relevant persuasion techniques used
 */

export interface SimulatorPost {
  id: string;
  author: string;
  authorImage: string;
  verified: boolean;
  content: string;
  image?: string;
  likes: number;
  shares: number;
  comments: number;
  timestamp: string;
  isDisinfo: boolean;
  redFlags: string[];
  explanation: string;
  techniques: string[]; // IDs of persuasion techniques used
}

export const simulatorPosts: SimulatorPost[] = [
  {
    id: '1',
    author: 'News Alert Daily',
    authorImage: '🗞️',
    verified: false,
    content:
      '🚨 BREAKING: Neue Studie zeigt, dass 90% der Menschen dieses einfache Hausmittel nicht kennen! Ärzte hassen diesen Trick! Teilen bevor es gelöscht wird! #Gesundheit #Wissen',
    likes: 15234,
    shares: 8921,
    comments: 432,
    timestamp: 'vor 2 Stunden',
    isDisinfo: true,
    redFlags: [
      'Clickbait-Sprache ("Ärzte hassen...")',
      'Dringlichkeit ("Teilen bevor es gelöscht wird")',
      'Übertriebene Zahlen ohne Quelle',
      'Keine konkrete Information',
      'Keine seriöse Quelle',
    ],
    explanation:
      'Klassisches Clickbait-Muster mit emotionaler Manipulation und falscher Dringlichkeit. Keine verifizierbaren Fakten oder seriöse Quellenangaben.',
    techniques: ['scarcity', 'emotional_appeal', 'authority', 'illusory_truth_effect'],
  },
  {
    id: '2',
    author: 'Prof. Dr. Maria Schmidt',
    authorImage: '👩‍🔬',
    verified: true,
    content:
      'Unsere neue Studie zu Klimaanpassung wurde heute in Nature veröffentlicht. Die Ergebnisse zeigen bedeutende regionale Unterschiede. Link zur Vollversion: nature.com/artikel...',
    likes: 892,
    shares: 234,
    comments: 67,
    timestamp: 'vor 5 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöser wissenschaftlicher Post: Verifizierter Account, Referenz zu peer-reviewter Publikation, konkrete Quellenangabe, sachliche Sprache.',
    techniques: [], // No manipulation techniques
  },
  {
    id: '3',
    author: 'WAHR_HEIT_2024',
    authorImage: '👁️',
    verified: false,
    content:
      'Sie wollen NICHT, dass du das siehst!!! Die WAHRHEIT über [aktuelles Thema]! 99% der Mainstream-Medien verschweigen das! TEILEN TEILEN TEILEN!!!',
    likes: 45123,
    shares: 23456,
    comments: 1234,
    timestamp: 'vor 1 Tag',
    isDisinfo: true,
    redFlags: [
      'Verschwörungsrhetorik ("Sie wollen nicht...")',
      'Übermäßige Großschreibung und Ausrufezeichen',
      'Pauschale Anschuldigungen gegen Medien',
      'Keine konkreten Fakten oder Quellen',
      'Aufforderung zum unreflektierten Teilen',
    ],
    explanation:
      'Typisches Desinformationsmuster mit Verschwörungsrhetorik, emotionaler Manipulation und Aufforderung zur viralen Verbreitung ohne Prüfung.',
    techniques: ['reactance_theory', 'emotional_appeal', 'repetition', 'ad_hominem', 'false_dichotomy'],
  },
  {
    id: '4',
    author: 'Tagesschau',
    authorImage: '📺',
    verified: true,
    content:
      'Bundestag beschließt neues Gesetz zur Digitalisierung der Verwaltung. Die Reform soll bis 2025 umgesetzt werden. Mehr Details in unserem Artikel (Link)',
    likes: 3421,
    shares: 891,
    comments: 234,
    timestamp: 'vor 3 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse Nachricht: Verifizierter Medienaccount, konkrete Fakten, sachliche Sprache, Quellenangabe, keine emotionale Manipulation.',
    techniques: [],
  },
  {
    id: '5',
    author: 'Gesundheits_Guru_88',
    authorImage: '🌿',
    verified: false,
    content:
      'Wissenschaftlich BEWIESEN: Diese 3 Lebensmittel heilen JEDE Krankheit! Big Pharma hasst mich für diese Enthüllung! (Link zu dubioser Website)',
    likes: 28934,
    shares: 15678,
    comments: 3421,
    timestamp: 'vor 6 Stunden',
    isDisinfo: true,
    redFlags: [
      'Wunderheilungs-Behauptungen',
      'Verschwörung gegen "Big Pharma"',
      'Pseudowissenschaftliche Sprache',
      'Übertreibungen ("JEDE Krankheit")',
      'Link zu unseriöser Quelle',
    ],
    explanation:
      'Gefährliche Gesundheitsdesinformation mit wissenschaftlich unhaltbaren Behauptungen und Verschwörungsrhetorik.',
    techniques: ['authority', 'emotional_appeal', 'false_dichotomy', 'reactance_theory', 'illusory_truth_effect'],
  },
  {
    id: '6',
    author: 'TechInfluencer_Pro',
    authorImage: '💻',
    verified: false,
    content:
      'NUR HEUTE: Exklusives Angebot! Nur noch 3 Plätze für meinen KI-Millionärs-Kurs verfügbar! Gestern erst 10.000€ verdient! Schnell sein lohnt sich! 🚀💰',
    likes: 8234,
    shares: 4123,
    comments: 891,
    timestamp: 'vor 4 Stunden',
    isDisinfo: true,
    redFlags: [
      'Künstliche Verknappung ("Nur noch 3 Plätze")',
      'Unrealistische Gewinnversprechen',
      'Zeitdruck ("NUR HEUTE")',
      'Keine nachprüfbaren Beweise',
      'Typisches Schema für Betrug',
    ],
    explanation:
      'Klassischer "Get Rich Quick" Betrug mit künstlicher Verknappung und unrealistischen Versprechen. Nutzt Zeitdruck und FOMO.',
    techniques: ['scarcity', 'anchoring', 'social_proof', 'emotional_appeal', 'dark_patterns'],
  },
  {
    id: '7',
    author: 'Wissenschaftsrat Deutschland',
    authorImage: '🔬',
    verified: true,
    content:
      'Neue Empfehlungen zur Forschungsförderung veröffentlicht. Der Bericht basiert auf 2-jähriger Analyse und Expertenbefragungen. Vollständiger Bericht: wissenschaftsrat.de',
    likes: 1243,
    shares: 456,
    comments: 123,
    timestamp: 'vor 1 Tag',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse institutionelle Kommunikation: Verifizierter Account, transparenter Prozess, konkrete Quellenangabe, sachliche Sprache.',
    techniques: [],
  },
  {
    id: '8',
    author: 'DeinFreund_1337',
    authorImage: '😎',
    verified: false,
    content:
      'WHATSAPP wird MORGEN kostenpflichtig!!! Leite diese Nachricht an 10 Kontakte weiter um deinen Account kostenlos zu halten! Funktioniert wirklich, mein Cousin arbeitet bei WhatsApp!!!',
    likes: 67234,
    shares: 89123,
    comments: 12345,
    timestamp: 'vor 8 Stunden',
    isDisinfo: true,
    redFlags: [
      'Klassische Kettenbrief-Struktur',
      'Falsche Dringlichkeit',
      'Angebliche Insider-Information ohne Beweis',
      'Aufforderung zur Weiterleitung',
      'Bekannte Falschinformation',
    ],
    explanation:
      'Typischer Hoax/Kettenbrief. Diese Falschmeldung kursiert seit Jahren in verschiedenen Varianten. Nutzt soziale Pflicht und Angst.',
    techniques: ['scarcity', 'social_proof', 'reciprocity', 'illusory_truth_effect', 'digital_influence'],
  },
  {
    id: '9',
    author: 'Marketing_Experte',
    authorImage: '📈',
    verified: false,
    content:
      'Wie ich in nur 30 Tagen von 0 auf 100.000 Follower kam - ohne zu bezahlen! 🎯 Der Algorithmus HASST diesen einen Trick! Thread 🧵👇',
    likes: 23456,
    shares: 12345,
    comments: 3456,
    timestamp: 'vor 12 Stunden',
    isDisinfo: true,
    redFlags: [
      'Unrealistische Wachstumsversprechen',
      '"Algorithmus hasst diesen Trick" Clickbait',
      'Zu gut um wahr zu sein',
      'Wahrscheinlich Lead-Generierung für Kurs-Verkauf',
      'Ausnutzung von Wunschdenken',
    ],
    explanation:
      'Typisches Marketing-Schema zum Verkauf von Kursen/Coaching. Nutzt Clickbait, unrealistische Versprechen und Wunschdenken.',
    techniques: ['anchoring', 'authority', 'emotional_appeal', 'framing', 'narrative_persuasion'],
  },
  {
    id: '10',
    author: 'Deutsche Verbraucherzentrale',
    authorImage: '🛡️',
    verified: true,
    content:
      'Warnung: Aktuell kursieren gefälschte Rechnungen im Namen großer Versandhändler. Öffnen Sie keine verdächtigen Anhänge. Mehr Infos und Verhaltenstipps: verbraucherzentrale.de/phishing',
    likes: 5432,
    shares: 2345,
    comments: 456,
    timestamp: 'vor 2 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse Verbraucherwarnung: Verifizierte offizielle Stelle, konkrete Handlungsempfehlungen, Quellenangabe, sachlicher Ton.',
    techniques: [],
  },
  {
    id: '11',
    author: 'Schockierende_Fakten',
    authorImage: '😱',
    verified: false,
    content:
      'SCHOCK: [Prominenter Name] in SKANDAL verwickelt!!! Die Mainstream-Medien SCHWEIGEN!!! Teile bevor es zensiert wird!!! (Link zu dubiosen Blog)',
    likes: 89234,
    shares: 56789,
    comments: 8912,
    timestamp: 'vor 6 Stunden',
    isDisinfo: true,
    redFlags: [
      'Sensationsheischende Sprache',
      'Verschwörungsrhetorik ("Medien schweigen")',
      'Zensur-Angst als Motivator',
      'Keine seriöse Quelle',
      'Clickbait ohne Substanz',
    ],
    explanation:
      'Klassische Desinformations-Taktik: Emotionale Aufregung, Verschwörungsdenken, künstliche Dringlichkeit. Keine verifizierbaren Fakten.',
    techniques: ['emotional_appeal', 'reactance_theory', 'scarcity', 'framing', 'digital_influence'],
  },
  {
    id: '12',
    author: 'Bundesgesundheitsministerium',
    authorImage: '🏥',
    verified: true,
    content:
      'Grippeimpfung jetzt verfügbar. STIKO empfiehlt Impfung für Risikogruppen ab 60 Jahren. Kostenlose Beratung bei Hausärzten. Infos: bundesgesundheitsministerium.de',
    likes: 2341,
    shares: 987,
    comments: 345,
    timestamp: 'vor 1 Tag',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Offizielle Gesundheitskommunikation: Verifizierter Regierungsaccount, evidenzbasierte Empfehlung, klare Quellenangabe.',
    techniques: [],
  },
];

/**
 * Get posts by difficulty (based on number and subtlety of techniques)
 */
export function getPostsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): SimulatorPost[] {
  const postsByTechniqueCount = simulatorPosts.map((post) => ({
    ...post,
    techniqueCount: post.techniques.length,
  }));

  switch (difficulty) {
    case 'easy':
      return postsByTechniqueCount.filter((p) => p.techniqueCount === 0 || p.techniqueCount <= 2).slice(0, 5);
    case 'medium':
      return postsByTechniqueCount.filter((p) => p.techniqueCount >= 3 && p.techniqueCount <= 4).slice(0, 5);
    case 'hard':
      return postsByTechniqueCount.filter((p) => p.techniqueCount >= 5).slice(0, 5);
    default:
      return simulatorPosts.slice(0, 5);
  }
}

/**
 * Get random selection of posts
 */
export function getRandomPosts(count: number = 5): SimulatorPost[] {
  const shuffled = [...simulatorPosts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
