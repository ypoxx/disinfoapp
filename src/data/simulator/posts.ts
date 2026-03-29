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
  // === NEW: Professional posts for communicators ===
  {
    id: '13',
    author: 'Insider_Enthüllung',
    authorImage: '🔓',
    verified: false,
    content:
      '⚠️ EXKLUSIV: Ehemaliger Mitarbeiter von [Großkonzern] packt aus! Interne Dokumente beweisen systematische Vertuschung von Qualitätsmängeln. Das Management wusste seit Jahren Bescheid! Thread 🧵',
    likes: 34521,
    shares: 18234,
    comments: 2341,
    timestamp: 'vor 3 Stunden',
    isDisinfo: true,
    redFlags: [
      'Anonymer "Insider" ohne Belege',
      'Keine konkreten Dokumente gezeigt',
      'Sensationalistische Sprache',
      'Pauschale Anschuldigungen ohne Details',
      'Typisches Muster für Reputationsangriffe',
    ],
    explanation:
      'Klassischer Reputationsangriff: Angebliche Insider-Informationen ohne verifizierbare Belege. Ziel ist maximaler Reputationsschaden durch virale Verbreitung, bevor Faktenprüfung möglich ist.',
    techniques: ['authority', 'narrative_persuasion', 'emotional_appeal', 'reactance_theory'],
  },
  {
    id: '14',
    author: 'Marktanalyse_DE',
    authorImage: '📊',
    verified: false,
    content:
      'BREAKING: Laut unserer exklusiven Analyse verliert [Unternehmen] 40% Marktanteil bis Q3. Insider bestätigen Massenentlassungen. Aktie wird abstürzen! Jetzt handeln! #Börse #Finanzen',
    likes: 12456,
    shares: 8923,
    comments: 1567,
    timestamp: 'vor 1 Stunde',
    isDisinfo: true,
    redFlags: [
      'Keine Quellenangabe für "exklusive Analyse"',
      'Konkrete Zahlen ohne Methodik',
      'Handlungsaufforderung ("Jetzt handeln")',
      'Anonyme "Insider"',
      'Mögliche Marktmanipulation',
    ],
    explanation:
      'Potenzielle Marktmanipulation durch gefälschte Finanzanalysen. Konkrete Zahlen suggerieren Seriosität, sind aber frei erfunden. Für Kommunikatoren: Solche Posts erfordern sofortige Abstimmung mit IR-Abteilung.',
    techniques: ['authority', 'anchoring', 'scarcity', 'framing'],
  },
  {
    id: '15',
    author: 'KritikerWatch_DE',
    authorImage: '👁️',
    verified: false,
    content:
      'Wir haben 47 Fake-Bewertungen auf Google für [Restaurant-Kette] identifiziert. Alle im gleichen Zeitraum, ähnliche Formulierungen. Screenshot-Dokumentation im Thread. Das ist organisierte Täuschung!',
    likes: 5678,
    shares: 3421,
    comments: 892,
    timestamp: 'vor 5 Stunden',
    isDisinfo: true,
    redFlags: [
      'Methodik der "Identifizierung" unklar',
      'Screenshots leicht manipulierbar',
      'Könnte selbst koordinierte Kampagne gegen das Unternehmen sein',
      'Keine unabhängige Verifizierung',
    ],
    explanation:
      'Subtiler Angriff: Wirft dem Unternehmen Fake-Bewertungen vor, ohne selbst transparent zu sein. Für Kommunikatoren besonders tückisch - selbst wenn teilweise wahr, ist die Motivation des Absenders unklar.',
    techniques: ['framing', 'social_proof', 'emotional_appeal', 'digital_influence'],
  },
  {
    id: '16',
    author: 'TransparenzJetzt',
    authorImage: '🔍',
    verified: false,
    content:
      'CEO von [Energiekonzern] sagte wörtlich: "Klimaschutz ist nicht unser Problem." Das zeigt die wahre Haltung der Industrie! RT wenn ihr findet, dass solche Unternehmen reguliert werden müssen! 🌍',
    likes: 67890,
    shares: 34567,
    comments: 8901,
    timestamp: 'vor 7 Stunden',
    isDisinfo: true,
    redFlags: [
      'Zitat ohne Kontext (wann, wo, in welchem Zusammenhang?)',
      'Keine Quellenangabe für das Zitat',
      'Emotionale Mobilisierung statt Information',
      'Generalisierung von einem Zitat auf "die Industrie"',
    ],
    explanation:
      'Context Collapse: Ein Zitat wird aus dem Zusammenhang gerissen und umgedeutet. Selbst wenn es echt ist, fehlt der entscheidende Kontext. Kommunikatoren müssen hier schnell den Originalkontext liefern.',
    techniques: ['framing', 'emotional_appeal', 'ad_hominem', 'false_dichotomy'],
  },
  {
    id: '17',
    author: 'DigitalWatch_Bot1',
    authorImage: '🤖',
    verified: false,
    content:
      'Absolut inakzeptabel was [Unternehmen] da macht! Boykottiert diesen Laden! #Boykott #NieMehrKaufen',
    likes: 2345,
    shares: 1890,
    comments: 234,
    timestamp: 'vor 20 Min',
    isDisinfo: true,
    redFlags: [
      'Account-Name deutet auf Bot hin',
      'Keine konkreten Vorwürfe',
      'Rein emotionaler Aufruf',
      'Teil einer möglichen koordinierten Kampagne',
      'Generischer Inhalt, austauschbar',
    ],
    explanation:
      'Koordinierte Kampagne: Generischer Boykott-Aufruf ohne Substanz, typisch für Bot-Netzwerke. Kommunikatoren sollten Muster erkennen: Mehrere ähnliche Posts in kurzer Zeit = koordinierte Aktion.',
    techniques: ['emotional_appeal', 'social_proof', 'repetition', 'digital_influence'],
  },
  {
    id: '18',
    author: 'DigitalWatch_Bot2',
    authorImage: '🤖',
    verified: false,
    content:
      'Das Gleiche habe ich auch erlebt! [Unternehmen] betrügt systematisch. Teilt diesen Post damit alle es wissen! #Boykott #NieMehrKaufen',
    likes: 1987,
    shares: 1654,
    comments: 187,
    timestamp: 'vor 18 Min',
    isDisinfo: true,
    redFlags: [
      'Nahezu identische Hashtags wie Bot1',
      'Gleicher Posting-Zeitraum',
      'Keine persönlichen Details zum "Erlebnis"',
      'Ähnliches Account-Muster',
      'Koordinierte Hashtag-Nutzung',
    ],
    explanation:
      'Teil derselben koordinierten Kampagne wie Post 17. Das Muster ist typisch: Mehrere Accounts posten in kurzem Zeitraum ähnliche Inhalte mit gleichen Hashtags, um organische Empörung zu simulieren.',
    techniques: ['social_proof', 'repetition', 'emotional_appeal', 'digital_influence', 'microtargeting'],
  },
  {
    id: '19',
    author: 'LeakedMail_Archive',
    authorImage: '📧',
    verified: false,
    content:
      '🔴 GELEAKT: Interne E-Mail von [Pharma-Unternehmen] zeigt, dass Nebenwirkungen bewusst verschwiegen wurden. Screenshot der E-Mail im Bild. Das muss viral gehen!',
    image: 'fake-email-screenshot.jpg',
    likes: 89234,
    shares: 45678,
    comments: 12345,
    timestamp: 'vor 4 Stunden',
    isDisinfo: true,
    redFlags: [
      'Screenshots von E-Mails sind trivial fälschbar',
      'Keine Möglichkeit die Echtheit zu prüfen',
      'Virale Verbreitung als Ziel statt Aufklärung',
      'Kein journalistischer Kontext',
      'Keine Stellungnahme des Unternehmens eingeholt',
    ],
    explanation:
      'Manipulierter Screenshot: E-Mail-Screenshots sind extrem leicht zu fälschen. Seriöse Berichterstattung würde das Unternehmen um Stellungnahme bitten und die Echtheit verifizieren.',
    techniques: ['visual_manipulation', 'authority', 'emotional_appeal', 'reactance_theory', 'narrative_persuasion'],
  },
  {
    id: '20',
    author: 'LinkedIn Business Insights',
    authorImage: '💼',
    verified: false,
    content:
      'Neue Studie unseres Instituts: 78% der deutschen Unternehmen werden bis 2027 ihre PR-Abteilungen durch KI ersetzen. Die Branche steht vor dem Umbruch. Vollständiger Report gegen E-Mail-Adresse verfügbar.',
    likes: 4567,
    shares: 2345,
    comments: 789,
    timestamp: 'vor 1 Tag',
    isDisinfo: true,
    redFlags: [
      'Unbekanntes "Institut" ohne Namen',
      'Präzise Prozentzahl suggeriert Wissenschaftlichkeit',
      'Lead-Generierung (E-Mail für Report)',
      'Unrealistische Prognose',
      'LinkedIn-typisches Angst-Marketing',
    ],
    explanation:
      'LinkedIn-Desinformation: Nutzt professionellen Kontext für Angst-Marketing und Lead-Generierung. Die präzise "78%"-Zahl ist ein Anchoring-Trick - sie klingt wissenschaftlich, ist aber erfunden.',
    techniques: ['authority', 'anchoring', 'scarcity', 'framing', 'dark_patterns'],
  },
  {
    id: '21',
    author: 'Thought_Leader_Max',
    authorImage: '🎯',
    verified: true,
    content:
      'Unpopular opinion: Unternehmen, die in Krisen transparent kommunizieren, verlieren IMMER. Die einzige Strategie die funktioniert: Schweigen und aussitzen. Habe ich in 20 Jahren PR gelernt. Fight me. 👊',
    likes: 8901,
    shares: 4567,
    comments: 2345,
    timestamp: 'vor 12 Stunden',
    isDisinfo: true,
    redFlags: [
      'Absolutistische Aussage ("IMMER")',
      'Anekdotische Evidenz ("20 Jahre Erfahrung")',
      'Provokation statt Argumentation ("Fight me")',
      'Widerspricht Forschungslage zu Krisenkommunikation',
      'Verifiziert heißt nicht korrekt',
    ],
    explanation:
      'Gefährliche Fachmeinung: Auch verifizierte Accounts können Fehlinformationen verbreiten. Die Aussage widerspricht der Krisenkommunikationsforschung. Verifizierung bestätigt nur die Identität, nicht die Qualität.',
    techniques: ['authority', 'framing', 'false_dichotomy', 'narrative_persuasion'],
  },
  {
    id: '22',
    author: 'BDEW Bundesverband',
    authorImage: '⚡',
    verified: true,
    content:
      'Neue Zahlen zur Energiewende: Erneuerbare Energien deckten im Q3 2025 52% des Bruttostromverbrauchs. Detaillierte Auswertung inkl. Methodik auf unserer Website: bdew.de/energie/erneuerbare',
    likes: 3456,
    shares: 1234,
    comments: 456,
    timestamp: 'vor 2 Tagen',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse Branchenkommunikation: Verifizierter Branchenverband, konkrete Zahlen mit Zeitraum, Methodik transparent verfügbar, sachliche Sprache ohne Emotionalisierung.',
    techniques: [],
  },
  {
    id: '23',
    author: 'Reuters Deutschland',
    authorImage: '📰',
    verified: true,
    content:
      'Faktencheck: Die viral verbreitete Behauptung, [Unternehmen] habe Kundendaten verkauft, ist falsch. Unsere Recherche zeigt: Es handelte sich um einen standardmäßigen Datentransfer im Rahmen einer Übernahme. Vollständiger Faktencheck: reuters.com/...',
    likes: 2345,
    shares: 1567,
    comments: 678,
    timestamp: 'vor 6 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Professioneller Faktencheck einer Nachrichtenagentur: Klar gekennzeichnet als Faktencheck, benennt die Originalbehauptung, liefert Kontext und Quellen.',
    techniques: [],
  },
  {
    id: '24',
    author: 'DPRG - Deutsche PR-Gesellschaft',
    authorImage: '🏛️',
    verified: true,
    content:
      'Ethik in der PR: Unser aktualisierter Kodex betont die besondere Verantwortung von Kommunikatoren im Umgang mit KI-generierten Inhalten. Stellungnahme und Leitlinien: dprg.de/ethik',
    likes: 1234,
    shares: 567,
    comments: 234,
    timestamp: 'vor 3 Tagen',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöse Standesorganisation kommuniziert Branchenstandards. Transparent, sachlich, mit konkretem Verweis auf Ressourcen.',
    techniques: [],
  },
  {
    id: '25',
    author: 'Wirtschafts_Wahrheit',
    authorImage: '💰',
    verified: false,
    content:
      'SKANDAL bei [DAX-Konzern]: Vorstand genehmigt sich 45% Gehaltserhöhung während 2.000 Stellen gestrichen werden! Die Gier kennt keine Grenzen! Mainstream-Medien berichten natürlich NICHT darüber! 🤬',
    likes: 56789,
    shares: 34567,
    comments: 7890,
    timestamp: 'vor 2 Stunden',
    isDisinfo: true,
    redFlags: [
      'Prozentangabe ohne Quellennachweis',
      'Medien-Verschwörung ("berichten natürlich NICHT")',
      'Emotionale Aufladung statt Sachlichkeit',
      'Übertriebene Großschreibung',
      'Kein Link zu verifizierbaren Informationen',
    ],
    explanation:
      'Emotionaler Reputationsangriff mit klassischem "Mainstream schweigt"-Narrativ. Selbst wenn Kern-Fakten stimmen, ist die Darstellung manipulativ. Kommunikatoren sollten prüfen: Stimmen die Zahlen? Was ist der Kontext?',
    techniques: ['emotional_appeal', 'framing', 'anchoring', 'reactance_theory', 'false_dichotomy'],
  },
  {
    id: '26',
    author: 'KI_Faktencheck',
    authorImage: '🤖',
    verified: false,
    content:
      'Unser KI-System hat analysiert: Dieses Foto des CEOs bei der Klimademo ist zu 94,7% eine Deepfake-Fälschung. Die Beleuchtung stimmt nicht überein. Original-Bild wurde in Photoshop erstellt.',
    image: 'deepfake-analysis.jpg',
    likes: 23456,
    shares: 15678,
    comments: 4567,
    timestamp: 'vor 8 Stunden',
    isDisinfo: true,
    redFlags: [
      'Pseudo-präzise Prozentzahl (94,7%)',
      'Unbekanntes "KI-System"',
      'Technische Behauptungen ohne Methodik',
      'Könnte selbst manipulierte Analyse sein',
      '"Photoshop" und "Deepfake" inkonsistent',
    ],
    explanation:
      'Meta-Desinformation: Nutzt den Anschein von Faktencheck-Technologie, um Misstrauen zu säen. Echte KI-Analysen benennen ihre Methodik und Limitationen. Für Kommunikatoren: Auch "Entlarvungen" können Desinformation sein.',
    techniques: ['authority', 'anchoring', 'synthetic_media', 'visual_manipulation', 'framing'],
  },
  {
    id: '27',
    author: 'BR24 Recherche',
    authorImage: '📺',
    verified: true,
    content:
      'Unsere Recherche zeigt: Die virale Behauptung über angebliche Preisabsprachen im Einzelhandel basiert auf einem missverstandenen Gerichtsurteil von 2019. Hintergrund und Einordnung: br.de/recherche/...',
    likes: 1890,
    shares: 934,
    comments: 345,
    timestamp: 'vor 1 Tag',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Qualitätsjournalismus: Verifizierter öffentlich-rechtlicher Sender, ordnet virale Behauptung ein, liefert Kontext und Primärquelle. Vorbildliche Einordnung für Kommunikatoren.',
    techniques: [],
  },
  {
    id: '28',
    author: 'Branchenreport_Plus',
    authorImage: '📋',
    verified: false,
    content:
      'Exklusiv: Unser Branchenreport 2025 zeigt, dass 3 von 4 Kommunikationsabteilungen KI-Tools ohne Governance-Framework einsetzen. Die Risiken sind enorm. Kostenloser Download (begrenzt verfügbar): report2025.link/...',
    likes: 6789,
    shares: 3456,
    comments: 890,
    timestamp: 'vor 2 Tagen',
    isDisinfo: true,
    redFlags: [
      'Unbekannter Absender ohne Impressum',
      'Künstliche Verknappung ("begrenzt verfügbar")',
      'Dubioser Link (nicht .de oder .com Domain)',
      'Angst-basiertes Marketing',
      'Keine Methodik oder Stichprobengröße genannt',
    ],
    explanation:
      'Lead-Generierung im professionellen Gewand: Nutzt Angst vor KI-Risiken für Datensammlung. Seriöse Branchenreports nennen Auftraggeber, Methodik und Stichprobe.',
    techniques: ['authority', 'scarcity', 'framing', 'dark_patterns', 'nudging'],
  },
  {
    id: '29',
    author: 'Handelsblatt',
    authorImage: '📰',
    verified: true,
    content:
      'Exklusiv-Interview: [CEO] erklärt die Strategie hinter der umstrittenen Übernahme. "Wir haben die Risiken sorgfältig abgewogen." Vollständiges Interview mit Einordnung unserer Wirtschaftsredaktion: handelsblatt.com/...',
    likes: 4567,
    shares: 2345,
    comments: 890,
    timestamp: 'vor 5 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Seriöser Wirtschaftsjournalismus: Verifizierte Quelle, direktes Zitat mit Kennzeichnung, redaktionelle Einordnung angekündigt, Transparenz über das Interview-Format.',
    techniques: [],
  },
  {
    id: '30',
    author: 'Whistleblower_Netzwerk',
    authorImage: '🕵️',
    verified: false,
    content:
      'Eine Quelle innerhalb von [Ministerium] bestätigt uns: Die offiziellen Statistiken zu [Thema] werden seit Monaten geschönt. Wir veröffentlichen die echten Zahlen in Kürze. Stay tuned.',
    likes: 45678,
    shares: 23456,
    comments: 5678,
    timestamp: 'vor 4 Stunden',
    isDisinfo: true,
    redFlags: [
      'Anonyme Quelle ohne jede Verifizierung',
      'Ankündigung ohne Substanz ("in Kürze")',
      'Keine konkreten Zahlen oder Belege',
      'Delegitimierung offizieller Institutionen',
      'Spannung aufbauen statt informieren',
    ],
    explanation:
      'Pre-Bunking einer Desinformationskampagne: Erst Spannung und Glaubwürdigkeit aufbauen, dann (möglicherweise gefälschte) Zahlen nachliefern. Kommunikatoren sollten proaktiv reagieren, bevor die "echten Zahlen" erscheinen.',
    techniques: ['narrative_persuasion', 'authority', 'reactance_theory', 'scarcity'],
  },
  {
    id: '31',
    author: 'Data_Journalist_Pro',
    authorImage: '📉',
    verified: true,
    content:
      'Interessantes Detail in den [Unternehmen]-Quartalszahlen: Die Kundenzufriedenheit sank um 12 Punkte - der stärkste Rückgang seit 2018. Die Investor-Präsentation betont hingegen das Umsatzwachstum. Grafik-Vergleich im Thread.',
    likes: 3456,
    shares: 1890,
    comments: 567,
    timestamp: 'vor 9 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Kritischer, aber seriöser Datenjournalismus: Bezieht sich auf öffentliche Daten (Quartalsbericht), benennt konkrete Zahlen, zeigt legitime Diskrepanz in der Unternehmenskommunikation auf.',
    techniques: [],
  },
  {
    id: '32',
    author: 'PR_Krisenberater',
    authorImage: '🛡️',
    verified: false,
    content:
      'WARNUNG an alle Unternehmen: Neue Angriffswelle! Organisierte Gruppen erstellen systematisch gefälschte Glassdoor-Bewertungen, um Firmen als Arbeitgeber zu diskreditieren. Wir haben 15 Fälle dokumentiert. DM für Details.',
    likes: 7890,
    shares: 4567,
    comments: 1234,
    timestamp: 'vor 6 Stunden',
    isDisinfo: true,
    redFlags: [
      'Keine der 15 Fälle wird konkret benannt',
      'Dokumentation nicht öffentlich zugänglich',
      'DM-Aufforderung deutet auf Lead-Generierung hin',
      'Angst-basierte Ansprache',
      'Könnte selbst PR für eigene Beratungsdienste sein',
    ],
    explanation:
      'Angst-Marketing von Beratern: Das Problem (Fake-Bewertungen) ist real, aber die Darstellung dient primär der eigenen Kundengewinnung. Seriöse Berater würden Methodik und mindestens einen anonymisierten Fall teilen.',
    techniques: ['scarcity', 'authority', 'emotional_appeal', 'dark_patterns'],
  },
  {
    id: '33',
    author: 'Initiative Nachrichtenqualität',
    authorImage: '✅',
    verified: true,
    content:
      'Unser Monitoring zeigt: Die Behauptungen über angebliche Stellenabbau-Pläne bei [Unternehmen] gehen auf einen einzigen, nicht verifizierten Blog-Post zurück, der inzwischen von 47 Accounts geteilt wurde. Analyse: initiative-nq.de/...',
    likes: 2345,
    shares: 1234,
    comments: 345,
    timestamp: 'vor 8 Stunden',
    isDisinfo: false,
    redFlags: [],
    explanation:
      'Professionelles Desinformations-Monitoring: Verfolgt die Verbreitung einer Falschbehauptung zurück zur Quelle, quantifiziert die Verbreitung, bietet transparente Analyse.',
    techniques: [],
  },
  {
    id: '34',
    author: 'Energie_Wahrheit_DE',
    authorImage: '⚡',
    verified: false,
    content:
      'Was [Energiekonzern] euch nicht sagt: Die "grüne" Wasserstoff-Strategie basiert auf Zahlen, die ihre eigenen Ingenieure intern als "optimistisch bis unrealistisch" bezeichnen. Quelle: vertrauliches Strategiepapier.',
    likes: 34567,
    shares: 19234,
    comments: 4567,
    timestamp: 'vor 10 Stunden',
    isDisinfo: true,
    redFlags: [
      'Nicht verifizierbares "vertrauliches Strategiepapier"',
      'Selektives Zitat ohne Gesamtkontext',
      'Framing: "Was sie euch nicht sagen"',
      'Kein journalistischer Standard (keine Gegenrecherche)',
      'Subtil - enthält möglicherweise Teilwahrheiten',
    ],
    explanation:
      'Professionell getarnte Desinformation: Mischt plausible Fachkritik mit nicht verifizierbaren Behauptungen. Besonders gefährlich, weil die Grundkritik teilweise berechtigt sein könnte. Kommunikatoren müssen hier zwischen legitimer Kritik und Manipulation unterscheiden.',
    techniques: ['framing', 'authority', 'narrative_persuasion', 'reactance_theory', 'emotional_appeal'],
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
