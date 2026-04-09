import type { SimulatorPost } from '../types';

export const simulatorPosts: SimulatorPost[] = [
  {
    id: '1',
    author: { de: 'News Alert Daily', en: 'News Alert Daily' },
    content: {
      de: '🚨 BREAKING: Neue Studie zeigt, dass 90% der Menschen dieses einfache Hausmittel nicht kennen! Ärzte hassen diesen Trick! Teilen bevor es gelöscht wird! #Gesundheit #Wissen',
      en: '🚨 BREAKING: New study shows 90% of people don\'t know this simple home remedy! Doctors HATE this trick! Share before it gets deleted! #Health #Knowledge',
    },
    engagement: { likes: 15234, shares: 8921, comments: 432 },
    isAuthentic: false,
    redFlags: [
      { de: 'Clickbait-Sprache ("Ärzte hassen...")', en: 'Clickbait language ("Doctors hate...")' },
      { de: 'Dringlichkeit ("Teilen bevor es gelöscht wird")', en: 'Urgency ("Share before deleted")' },
      { de: 'Übertriebene Zahlen ohne Quelle', en: 'Exaggerated numbers without source' },
      { de: 'Keine konkrete Information', en: 'No concrete information' },
    ],
    techniquesUsed: ['scarcity', 'emotional_appeal', 'authority', 'illusory_truth_effect'],
    explanation: {
      de: 'Klassisches Clickbait-Muster mit emotionaler Manipulation und falscher Dringlichkeit. Keine verifizierbaren Fakten.',
      en: 'Classic clickbait pattern with emotional manipulation and false urgency. No verifiable facts.',
    },
  },
  {
    id: '2',
    author: { de: 'Prof. Dr. Maria Schmidt', en: 'Prof. Dr. Maria Schmidt' },
    content: {
      de: 'Unsere neue Studie zu Klimaanpassung wurde heute in Nature veröffentlicht. Die Ergebnisse zeigen bedeutende regionale Unterschiede. Link zur Vollversion: nature.com/artikel...',
      en: 'Our new study on climate adaptation was published in Nature today. Results show significant regional differences. Full version: nature.com/article...',
    },
    engagement: { likes: 892, shares: 234, comments: 67 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Seriöser wissenschaftlicher Post: Referenz zu peer-reviewter Publikation, konkrete Quellenangabe, sachliche Sprache.',
      en: 'Credible scientific post: reference to peer-reviewed publication, concrete source, factual language.',
    },
  },
  {
    id: '3',
    author: { de: 'WAHR_HEIT_2024', en: 'TRUTH_2024' },
    content: {
      de: 'Sie wollen NICHT, dass du das siehst!!! Die WAHRHEIT über [aktuelles Thema]! 99% der Mainstream-Medien verschweigen das! TEILEN TEILEN TEILEN!!!',
      en: 'They DON\'T want you to see this!!! The TRUTH about [current topic]! 99% of mainstream media are hiding it! SHARE SHARE SHARE!!!',
    },
    engagement: { likes: 45123, shares: 23456, comments: 1234 },
    isAuthentic: false,
    redFlags: [
      { de: 'Verschwörungsrhetorik ("Sie wollen nicht...")', en: 'Conspiracy rhetoric ("They don\'t want...")' },
      { de: 'Übermäßige Großschreibung', en: 'Excessive capitalization' },
      { de: 'Pauschale Anschuldigungen gegen Medien', en: 'Blanket accusations against media' },
      { de: 'Keine konkreten Fakten', en: 'No concrete facts' },
    ],
    techniquesUsed: ['reactance_theory', 'emotional_appeal', 'repetition', 'ad_hominem'],
    explanation: {
      de: 'Typisches Manipulationsmuster mit Verschwörungsrhetorik und Aufforderung zur viralen Verbreitung ohne Prüfung.',
      en: 'Typical manipulation pattern using conspiracy rhetoric and calls for viral sharing without verification.',
    },
  },
  {
    id: '4',
    author: { de: 'Tagesschau', en: 'BBC News' },
    content: {
      de: 'Bundestag beschließt neues Gesetz zur Digitalisierung der Verwaltung. Die Reform soll bis 2025 umgesetzt werden. Mehr Details in unserem Artikel (Link)',
      en: 'Parliament passes new digital administration law. Reform to be implemented by 2025. More details in our article (Link)',
    },
    engagement: { likes: 3421, shares: 891, comments: 234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Seriöse Nachricht: Konkrete Fakten, sachliche Sprache, Quellenangabe, keine emotionale Manipulation.',
      en: 'Credible news: concrete facts, factual language, source reference, no emotional manipulation.',
    },
  },
  {
    id: '5',
    author: { de: 'TechInfluencer_Pro', en: 'TechInfluencer_Pro' },
    content: {
      de: 'NUR HEUTE: Exklusives Angebot! Nur noch 3 Plätze für meinen KI-Millionärs-Kurs verfügbar! Gestern erst 10.000€ verdient! 🚀💰',
      en: 'TODAY ONLY: Exclusive offer! Only 3 spots left for my AI millionaire course! Made €10,000 yesterday alone! 🚀💰',
    },
    engagement: { likes: 8234, shares: 4123, comments: 891 },
    isAuthentic: false,
    redFlags: [
      { de: 'Künstliche Verknappung ("Nur noch 3 Plätze")', en: 'Artificial scarcity ("Only 3 spots left")' },
      { de: 'Unrealistische Gewinnversprechen', en: 'Unrealistic profit promises' },
      { de: 'Zeitdruck ("NUR HEUTE")', en: 'Time pressure ("TODAY ONLY")' },
    ],
    techniquesUsed: ['scarcity', 'anchoring', 'social_proof', 'emotional_appeal', 'dark_patterns'],
    explanation: {
      de: 'Klassischer "Get Rich Quick" Betrug mit künstlicher Verknappung und unrealistischen Versprechen.',
      en: 'Classic "get rich quick" scam with artificial scarcity and unrealistic promises.',
    },
  },
  {
    id: '6',
    author: { de: 'Wissenschaftsrat', en: 'Science Council' },
    content: {
      de: 'Neue Empfehlungen zur Forschungsförderung veröffentlicht. Der Bericht basiert auf 2-jähriger Analyse und Expertenbefragungen. Vollständiger Bericht: wissenschaftsrat.de',
      en: 'New research funding recommendations published. Report based on 2-year analysis and expert surveys. Full report: sciencecouncil.org',
    },
    engagement: { likes: 1243, shares: 456, comments: 123 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Seriöse institutionelle Kommunikation: transparenter Prozess, Quellenangabe, sachliche Sprache.',
      en: 'Credible institutional communication: transparent process, source reference, factual language.',
    },
  },
  {
    id: '7',
    author: { de: 'DeinFreund_1337', en: 'YourFriend_1337' },
    content: {
      de: 'WHATSAPP wird MORGEN kostenpflichtig!!! Leite diese Nachricht an 10 Kontakte weiter um deinen Account kostenlos zu halten! Mein Cousin arbeitet bei WhatsApp!!!',
      en: 'WHATSAPP will COST MONEY TOMORROW!!! Forward this message to 10 contacts to keep your account free! My cousin works at WhatsApp!!!',
    },
    engagement: { likes: 67234, shares: 89123, comments: 12345 },
    isAuthentic: false,
    redFlags: [
      { de: 'Klassische Kettenbrief-Struktur', en: 'Classic chain letter structure' },
      { de: 'Falsche Dringlichkeit', en: 'False urgency' },
      { de: 'Angebliche Insider-Information', en: 'Alleged insider information' },
      { de: 'Aufforderung zur Weiterleitung', en: 'Call to forward' },
    ],
    techniquesUsed: ['scarcity', 'social_proof', 'reciprocity', 'illusory_truth_effect'],
    explanation: {
      de: 'Typischer Hoax/Kettenbrief. Diese Falschmeldung kursiert seit Jahren. Nutzt soziale Pflicht und Angst.',
      en: 'Typical hoax/chain letter. This false claim has circulated for years. Uses social obligation and fear.',
    },
  },
  {
    id: '8',
    author: { de: 'Marketing_Experte', en: 'Marketing_Expert' },
    content: {
      de: 'Wie ich in nur 30 Tagen von 0 auf 100.000 Follower kam - ohne zu bezahlen! Der Algorithmus HASST diesen Trick! Thread 🧵👇',
      en: 'How I went from 0 to 100,000 followers in just 30 days - without paying! The algorithm HATES this one trick! Thread 🧵👇',
    },
    engagement: { likes: 23456, shares: 12345, comments: 3456 },
    isAuthentic: false,
    redFlags: [
      { de: 'Unrealistische Erfolgsbehauptung', en: 'Unrealistic success claim' },
      { de: 'Clickbait-Struktur', en: 'Clickbait structure' },
      { de: 'Kein nachprüfbarer Beweis', en: 'No verifiable proof' },
    ],
    techniquesUsed: ['social_proof', 'authority', 'emotional_appeal', 'anchoring'],
    explanation: {
      de: 'Typisches Engagement-Bait-Muster. Thread-Versprechen erzeugt Neugier, liefert aber selten substanzielle Informationen.',
      en: 'Typical engagement bait pattern. Thread promise creates curiosity but rarely delivers substantive information.',
    },
  },
];
