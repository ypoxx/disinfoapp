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
  {
    id: '13',
    author: 'Klima_Wahrheit_NOW',
    authorImage: '🌍',
    verified: false,
    content:
      'Der Klimawandel ist eine LÜGE der Eliten!!! Schaut euch die Zahlen WIRKLICH an! Noch NIE war es so kalt wie diesen Winter! ALLE Wissenschaftler lügen für Geld!!!',
    likes: 34521,
    shares: 21345,
    comments: 5678,
    timestamp: 'vor 3 Stunden',
    isDisinfo: true,
    redFlags: [
      'Leugnung wissenschaftlicher Fakten',
      'Verschwörungsrhetorik ("Eliten", "ALLE lügen")',
      'Anekdotische Evidenz statt Daten',
      'Pauschale Diskreditierung von Wissenschaftlern',
      'Übermäßige Großschreibung',
    ],
    explanation:
      'Klimawandelleugnung mit klassischen Desinformationsmustern: Verschwörungsdenken, falsche Verallgemeinerungen, Anekdoten statt wissenschaftlicher Daten.',
    techniques: ['ad_hominem', 'false_dichotomy', 'cherry_picking', 'reactance_theory', 'emotional_appeal'],
  },
  {
    id: '14',
    author: 'Potsdam-Institut für Klimafolgenforschung',
    authorImage: '🌡️',
    verified: true,
    content:
      'Unser neuer Bericht zeigt: 2024 war das wärmste Jahr seit Aufzeichnungsbeginn. Durchschnittstemperatur lag 1.48°C über vorindustriellem Niveau. Quelle: pik-potsdam.de/klima2024',
    likes: 3456,
    shares: 1234,
    comments: 567,
    timestamp: 'vor 5 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöser wissenschaftlicher Post: Renommierte Forschungseinrichtung, konkrete Daten, Quellenangabe, sachliche Sprache.',
    techniques: [],
  },
  {
    id: '15',
    author: 'Krypto_Millionär_2024',
    authorImage: '💎',
    verified: false,
    content:
      '🚀 GEHEIM-TIPP: Diese unbekannte Kryptowährung wird MORGEN durch die Decke gehen! Meine Insider sagen 10.000% GEWINN! Investiere JETZT bevor es zu spät ist! Nur noch 24h Zeit! 💰💰💰',
    likes: 15678,
    shares: 9876,
    comments: 2345,
    timestamp: 'vor 1 Stunde',
    isDisinfo: true,
    redFlags: [
      'Unrealistische Gewinnversprechen (10.000%)',
      'Künstliche Zeitknappheit (24h)',
      'Angebliche Insider-Informationen',
      'Pump-and-Dump Schema verdächtig',
      'Keine seriöse Analyse',
    ],
    explanation:
      'Klassischer Krypto-Betrug (Pump and Dump): Unrealistische Versprechen, Zeitdruck, angebliche Insider-Info. Ziel ist es, eigene Investments zu verkaufen.',
    techniques: ['scarcity', 'authority', 'anchoring', 'FOMO', 'dark_patterns'],
  },
  {
    id: '16',
    author: 'Stiftung Warentest',
    authorImage: '✅',
    verified: true,
    content:
      'Aktueller Vergleich: 16 Smartphones im Test. Preis-Leistungs-Sieger kostet 349€. Detaillierte Testergebnisse und Methodik: test.de/smartphones-2024',
    likes: 4567,
    shares: 1890,
    comments: 678,
    timestamp: 'vor 6 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöser Produkttest: Unabhängige Organisation, transparente Methodik, konkrete Ergebnisse, Quellenangabe.',
    techniques: [],
  },
  {
    id: '17',
    author: 'Ernährungsguru_Detox',
    authorImage: '🥗',
    verified: false,
    content:
      'ACHTUNG: 99% aller Lebensmittel sind VERGIFTET durch Chemtrails! Nur MEINE Bio-Detox-Kur für 299€ kann dich retten! Ärzte verschweigen das!!! Link in Bio 🌿',
    likes: 23456,
    shares: 14567,
    comments: 4321,
    timestamp: 'vor 4 Stunden',
    isDisinfo: true,
    redFlags: [
      'Verschwörungstheorien (Chemtrails)',
      'Angstmacherei ohne Grundlage',
      'Produkt-Verkauf durch Panikmache',
      'Diskreditierung von Ärzten',
      'Pseudowissenschaftliche Begriffe',
    ],
    explanation:
      'Gefährliche Gesundheitsdesinformation kombiniert mit Produktverkauf. Nutzt Verschwörungstheorien und Angst zur Manipulation.',
    techniques: ['fear_appeal', 'authority', 'reactance_theory', 'scarcity', 'illusory_truth_effect'],
  },
  {
    id: '18',
    author: 'Deutsche Sporthochschule Köln',
    authorImage: '⚽',
    verified: true,
    content:
      'Studie: 150 Minuten moderate Bewegung pro Woche reduzieren Herz-Kreislauf-Risiko um 35%. Veröffentlicht im European Journal of Sports Science. Details: dshs-koeln.de/studie',
    likes: 2345,
    shares: 890,
    comments: 234,
    timestamp: 'vor 1 Tag',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Wissenschaftlich fundierte Gesundheitsinformation: Renommierte Einrichtung, peer-reviewed Publikation, konkrete Daten.',
    techniques: [],
  },
  {
    id: '19',
    author: 'Schnell_Reich_System',
    authorImage: '💸',
    verified: false,
    content:
      'Verdiene 5000€ pro Woche von zu Hause! KEIN Risiko! KEINE Vorkenntnisse! Mein System funktioniert GARANTIERT! Erste 50 Anmeldungen bekommen 70% Rabatt! Beeile dich!!!',
    likes: 45678,
    shares: 23456,
    comments: 6789,
    timestamp: 'vor 2 Stunden',
    isDisinfo: true,
    redFlags: [
      'Unrealistische Einkommensversprechen',
      'Garantie-Versprechen bei Investitionen (unmöglich)',
      'Künstliche Verknappung (erste 50)',
      'Klassisches MLM/Schneeballsystem-Muster',
      'Zu gut um wahr zu sein',
    ],
    explanation:
      'Typisches Betrugsmuster (MLM/Schneeballsystem): Unrealistische Versprechen, Zeitdruck, keine echte Geschäftsgrundlage.',
    techniques: ['scarcity', 'anchoring', 'social_proof', 'reciprocity', 'dark_patterns'],
  },
  {
    id: '20',
    author: 'Max_Politikexperte',
    authorImage: '🎙️',
    verified: false,
    content:
      'Die Regierung plant GEHEIM die totale Überwachung!!! Alle Handys werden abgehört! Insider haben mir BEWEISE geschickt! Teilt das überall, sie wollen uns mundtot machen!!!',
    likes: 67890,
    shares: 45678,
    comments: 12345,
    timestamp: 'vor 7 Stunden',
    isDisinfo: true,
    redFlags: [
      'Verschwörungstheorie ohne Beweise',
      'Angebliche "Insider-Informationen"',
      'Panikmache und Angstschürung',
      'Aufforderung zur viralen Verbreitung',
      'Keine seriösen Quellen',
    ],
    explanation:
      'Klassische Verschwörungserzählung: Unbewiesene Behauptungen, angebliche Insider, Opferrolle, emotionale Manipulation.',
    techniques: ['reactance_theory', 'authority', 'fear_appeal', 'illusory_truth_effect', 'framing'],
  },
  {
    id: '21',
    author: 'Bundesamt für Verfassungsschutz',
    authorImage: '🔐',
    verified: true,
    content:
      'Warnung vor Desinformationskampagnen zu aktuellen Ereignissen. Prüfen Sie Quellen kritisch. Faktenchecks finden Sie bei: correctiv.org, mimikama.at. #Medienkompetenz',
    likes: 3456,
    shares: 1789,
    comments: 456,
    timestamp: 'vor 5 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Offizielle Warnung einer Behörde: Verifizierter Account, konkrete Handlungsempfehlungen, seriöse Quellenverweise.',
    techniques: [],
  },
  {
    id: '22',
    author: 'AI_Guru_Insider',
    authorImage: '🤖',
    verified: false,
    content:
      'ChatGPT wird BALD kostenpflichtig!!! OpenAI gibt es GRATIS nur noch diese Woche! Sichere dir JETZT deinen lebenslangen Zugang für nur 49€! Link 👉 ai-lifetime-deal.xyz',
    likes: 34567,
    shares: 19876,
    comments: 5432,
    timestamp: 'vor 3 Stunden',
    isDisinfo: true,
    redFlags: [
      'Falsche Informationen über OpenAI',
      'Künstliche Dringlichkeit',
      'Verdächtige Domain (.xyz)',
      'Unrealistische Angebote',
      'Phishing/Scam verdächtig',
    ],
    explanation:
      'Scam mit falscher Dringlichkeit. ChatGPT hat bereits kostenlose und kostenpflichtige Versionen. Dies ist ein Betrugsversuch.',
    techniques: ['scarcity', 'anchoring', 'fear_appeal', 'dark_patterns', 'digital_influence'],
  },
  {
    id: '23',
    author: 'Max-Planck-Gesellschaft',
    authorImage: '🔬',
    verified: true,
    content:
      'Durchbruch in der Quantenphysik: Forscherteam weist erstmals Quantenverschränkung über 100km nach. Studie erscheint in Physical Review Letters. Details: mpg.de/quantenphysik',
    likes: 5678,
    shares: 2345,
    comments: 789,
    timestamp: 'vor 8 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse wissenschaftliche Meldung: Renommierte Institution, peer-reviewed Journal, konkrete Fakten, Quellenangabe.',
    techniques: [],
  },
  {
    id: '24',
    author: 'Mamas_Gesundheitstipps',
    authorImage: '👶',
    verified: false,
    content:
      'IMPFUNGEN schaden deinen Kindern!!! Meine Nachbarin hat 3 Kinder geimpft und ALLE wurden krank! Die Pharma-Lobby verschweigt die WAHRHEIT! Schütze deine Kinder!!!',
    likes: 56789,
    shares: 34567,
    comments: 8901,
    timestamp: 'vor 4 Stunden',
    isDisinfo: true,
    redFlags: [
      'Gefährliche Anti-Impf-Desinformation',
      'Anekdotische statt wissenschaftlicher Evidenz',
      'Verschwörungsrhetorik gegen Pharmaindustrie',
      'Emotionale Manipulation (Kinder in Gefahr)',
      'Widerspruch zu wissenschaftlichem Konsens',
    ],
    explanation:
      'Gefährliche Gesundheitsdesinformation: Anekdoten statt Wissenschaft, Verschwörungsdenken, emotionale Manipulation. Widerspricht medizinischem Konsens.',
    techniques: ['fear_appeal', 'ad_hominem', 'anecdotal_evidence', 'reactance_theory', 'emotional_appeal'],
  },
  {
    id: '25',
    author: 'Robert Koch-Institut',
    authorImage: '🏥',
    verified: true,
    content:
      'Aktuelle Grippewelle: 15.000 Fälle in KW 47. Impfquote bei Risikogruppen 45%. STIKO empfiehlt weiterhin Impfung. Wöchentlicher Bericht: rki.de/influenza',
    likes: 2890,
    shares: 987,
    comments: 345,
    timestamp: 'vor 6 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Offizielle Gesundheitsbehörde: Konkrete Zahlen, evidenzbasierte Empfehlungen, transparente Datenquelle.',
    techniques: [],
  },
  {
    id: '26',
    author: 'Elon_Musk_FanPage',
    authorImage: '🚀',
    verified: false,
    content:
      '🎁 ELON MUSK VERSCHENKT 10.000 BITCOIN!!! Sende 0.5 BTC an diese Adresse und bekomme 5 BTC zurück! NUR HEUTE gültig! Beeile dich! Schon 10.000 Menschen haben teilgenommen!',
    likes: 78901,
    shares: 45678,
    comments: 12345,
    timestamp: 'vor 2 Stunden',
    isDisinfo: true,
    redFlags: [
      'Klassischer Krypto-Betrug',
      'Zu gut um wahr zu sein',
      'Elon Musk Impersonation (häufige Masche)',
      'Send-Money-First Schema',
      'Künstliche Dringlichkeit und Social Proof',
    ],
    explanation:
      'Weitverbreiteter Krypto-Scam: Nutzt Prominente für Glaubwürdigkeit, verlangt Vorauszahlung, gibt nichts zurück. Klassischer Betrug.',
    techniques: ['authority', 'scarcity', 'social_proof', 'reciprocity', 'dark_patterns'],
  },
  {
    id: '27',
    author: 'Deutsche Bahn AG',
    authorImage: '🚄',
    verified: true,
    content:
      'Bauarbeiten auf Strecke Hamburg-Berlin 15.-17. Januar. Ersatzverkehr mit Bussen eingerichtet. Reisezeit verlängert sich um ca. 60 Min. Aktuelle Infos: bahn.de/bauarbeiten',
    likes: 1234,
    shares: 567,
    comments: 234,
    timestamp: 'vor 1 Tag',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Offizielle Serviceinformation: Verifiziertes Unternehmen, konkrete Fakten, Alternativlösungen, Quellenangabe.',
    techniques: [],
  },
  {
    id: '28',
    author: 'Verschwörung_Aufdecken',
    authorImage: '👁️‍🗨️',
    verified: false,
    content:
      'Die Mondlandung war GEFAKED!!! NASA gibt es zu (Link zu dubiosen Blog)!!! ALLE Fotos sind Photoshop! Warum sehen wir keine Sterne??? WACHT AUF!!!',
    likes: 45678,
    shares: 28901,
    comments: 7890,
    timestamp: 'vor 5 Stunden',
    isDisinfo: true,
    redFlags: [
      'Widerlegte Verschwörungstheorie',
      'Falsche wissenschaftliche Behauptungen',
      'Link zu unseriöser Quelle',
      'Emotionale Manipulation ("WACHT AUF")',
      'Ignoriert wissenschaftliche Evidenz',
    ],
    explanation:
      'Klassische Mondlandungs-Verschwörungstheorie: Wissenschaftlich widerlegt, falsche Argumente, emotionale statt rationaler Argumentation.',
    techniques: ['reactance_theory', 'false_dichotomy', 'cherry_picking', 'illusory_truth_effect', 'framing'],
  },
  {
    id: '29',
    author: 'Deutsches Zentrum für Luft- und Raumfahrt',
    authorImage: '🛰️',
    verified: true,
    content:
      'Erfolgreicher Start der Erdbeobachtungsmission EnMAP-2. Satellit liefert hochauflösende Spektraldaten für Umweltforschung. Mission unterstützt Klimaschutz und Landwirtschaft. dlr.de/enmap',
    likes: 3456,
    shares: 1234,
    comments: 456,
    timestamp: 'vor 7 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Offizielle Raumfahrtorganisation: Verifizierter Account, konkrete Missionsinformationen, wissenschaftlicher Kontext.',
    techniques: [],
  },
  {
    id: '30',
    author: 'Trading_Secrets_VIP',
    authorImage: '📊',
    verified: false,
    content:
      'Mein geheimes Trading-System hat 98% Erfolgsquote!!! Verdiene 1000€ täglich GARANTIERT! Nur die ersten 20 bekommen Zugang zu meinem Telegram-Kanal! Jetzt oder nie! 💰',
    likes: 34567,
    shares: 19876,
    comments: 4567,
    timestamp: 'vor 3 Stunden',
    isDisinfo: true,
    redFlags: [
      'Unrealistische Erfolgsquote (98%)',
      'Garantierte Gewinne (unmöglich beim Trading)',
      'Künstliche Verknappung',
      'Klassisches Schema für Trading-Scams',
      'Kein Risikohinweis (gesetzlich vorgeschrieben)',
    ],
    explanation:
      'Trading-Betrug: Unrealistische Versprechen, keine echte Strategie, Ziel ist Verkauf wertloser Kurse oder Gebühren für "VIP-Gruppen".',
    techniques: ['scarcity', 'anchoring', 'authority', 'social_proof', 'dark_patterns'],
  },
  {
    id: '31',
    author: 'Verbraucherzentrale Bundesverband',
    authorImage: '⚖️',
    verified: true,
    content:
      'Neue Studie: 67% der Online-Shops nutzen Dark Patterns zur Manipulation. Wir fordern strengere Regulierung. Tipps zum Schutz: verbraucherzentrale.de/dark-patterns',
    likes: 4567,
    shares: 2345,
    comments: 789,
    timestamp: 'vor 4 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse Verbraucherschutz-Information: Offizielle Organisation, evidenzbasierte Studie, konkrete Handlungsempfehlungen.',
    techniques: [],
  },
  {
    id: '32',
    author: 'Immobilien_Investmentking',
    authorImage: '🏠',
    verified: false,
    content:
      'Mit meiner GEHEIMEN Methode kaufst du Immobilien OHNE Eigenkapital! Werde Millionär in 2 Jahren! Banken HASSEN diesen Trick! Gratis Webinar NUR HEUTE! Link 👉',
    likes: 23456,
    shares: 12345,
    comments: 3456,
    timestamp: 'vor 6 Stunden',
    isDisinfo: true,
    redFlags: [
      'Unrealistische Versprechen (Millionär in 2 Jahren)',
      'Unmögliche Behauptungen (ohne Eigenkapital)',
      '"Geheime Methode" Clickbait',
      'Zeitdruck für Webinar-Anmeldung',
      'Wahrscheinlich Verkauf überteuerter Kurse',
    ],
    explanation:
      'Klassischer Get-Rich-Quick Scam im Immobilienbereich: Unrealistische Versprechen, Clickbait, Ziel ist Verkauf teurer Coaching-Programme.',
    techniques: ['scarcity', 'authority', 'anchoring', 'emotional_appeal', 'framing'],
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
