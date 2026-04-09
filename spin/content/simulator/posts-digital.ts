import type { SimulatorPost } from '../types';

export const digitalPosts: SimulatorPost[] = [
  {
    id: 'dig-1',
    author: { de: 'FitnessQueen_Lisa', en: 'FitnessQueen_Lisa' },
    content: {
      de: 'So happy mit meinem neuen Protein-Shake von @VitalFit! 💪 Schmeckt mega und die Ergebnisse sprechen für sich! Code LISA20 für 20% Rabatt! #Fitness #Ad #Sponsored',
      en: 'So happy with my new protein shake from @VitalFit! 💪 Tastes amazing and the results speak for themselves! Code LISA20 for 20% off! #Fitness #Ad #Sponsored',
    },
    engagement: { likes: 23456, shares: 1234, comments: 567 },
    isAuthentic: false,
    redFlags: [
      { de: 'Bezahlte Partnerschaft (immerhin gekennzeichnet)', en: 'Paid partnership (at least marked)' },
      { de: 'Subjektive Erfahrung als Beweis', en: 'Subjective experience as proof' },
      { de: 'Rabattcode erzeugt Kaufdruck', en: 'Discount code creates purchase pressure' },
    ],
    techniquesUsed: ['liking', 'social_proof', 'reciprocity', 'scarcity'],
    explanation: {
      de: 'Influencer-Marketing: Zwar gekennzeichnet, aber die persönliche Empfehlung verschleiert den kommerziellen Charakter. Der Rabattcode nutzt Reziprozität.',
      en: 'Influencer marketing: marked, but the personal recommendation obscures the commercial nature. The discount code uses reciprocity.',
    },
  },
  {
    id: 'dig-2',
    author: { de: 'Mozilla Foundation', en: 'Mozilla Foundation' },
    content: {
      de: 'Firefox 135 veröffentlicht: Verbesserte Tracking-Protection, neuer Privacy-Report für Nutzer. Alle Änderungen im Changelog. Download: firefox.com Quellcode: github.com/mozilla/firefox',
      en: 'Firefox 135 released: improved tracking protection, new privacy report for users. All changes in changelog. Download: firefox.com Source: github.com/mozilla/firefox',
    },
    engagement: { likes: 4567, shares: 2345, comments: 345 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Transparente Open-Source-Kommunikation: Konkrete Features, Changelog verlinkt, Quellcode öffentlich.',
      en: 'Transparent open-source communication: concrete features, changelog linked, source code public.',
    },
  },
  {
    id: 'dig-3',
    author: { de: 'SaaS_Accelerator', en: 'SaaS_Accelerator' },
    content: {
      de: '⏰ LETZTE WARNUNG: Unser Pro-Plan steigt MORGEN von 29€ auf 99€! Sichere dir JETZT den alten Preis — für IMMER! Nur noch 47 Plätze! saas-accel.com/pricing 🔥',
      en: '⏰ LAST WARNING: Our Pro plan goes from $29 to $99 TOMORROW! Lock in the old price NOW — FOREVER! Only 47 spots left! saas-accel.com/pricing 🔥',
    },
    engagement: { likes: 12345, shares: 6789, comments: 1234 },
    isAuthentic: false,
    redFlags: [
      { de: '240% Preiserhöhung über Nacht — unrealistisch', en: '240% price increase overnight — unrealistic' },
      { de: 'Doppelter Zeitdruck + künstliche Verknappung', en: 'Double time pressure + artificial scarcity' },
      { de: '"Für IMMER" — unrealistische Garantie', en: '"FOREVER" — unrealistic guarantee' },
    ],
    techniquesUsed: ['scarcity', 'anchoring', 'dark_patterns', 'emotional_appeal'],
    explanation: {
      de: 'Klassischer Dark Pattern: Die dramatische Preiserhöhung existiert wahrscheinlich nicht. "47 Plätze" und "MORGEN" erzeugen FOMO.',
      en: 'Classic dark pattern: the dramatic price increase probably doesn\'t exist. "47 spots" and "TOMORROW" create FOMO.',
    },
  },
  {
    id: 'dig-4',
    author: { de: 'BSI — Bundesamt für Sicherheit', en: 'CISA — Cybersecurity Agency' },
    content: {
      de: 'Warnstufe ORANGE: Kritische Schwachstelle in OpenSSL 3.4 (CVE-2025-1234, CVSS 9.1). Sofortiges Update empfohlen. Betroffene Versionen: 3.4.0-3.4.2. Patch: openssl.org. Advisory: bsi.bund.de/cert',
      en: 'Alert level ORANGE: Critical vulnerability in OpenSSL 3.4 (CVE-2025-1234, CVSS 9.1). Immediate update recommended. Affected: 3.4.0-3.4.2. Patch: openssl.org. Advisory: cisa.gov/cert',
    },
    engagement: { likes: 3456, shares: 5678, comments: 234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Offizielle Sicherheitswarnung: CVE-Nummer, CVSS-Score, betroffene Versionen, Patch-Link, behördliche Quelle.',
      en: 'Official security advisory: CVE number, CVSS score, affected versions, patch link, government source.',
    },
  },
  {
    id: 'dig-5',
    author: { de: 'KI_Produkt_Reviews', en: 'AI_Product_Reviews' },
    content: {
      de: '⭐⭐⭐⭐⭐ "Dieses KI-Tool hat meine Produktivität um 500% gesteigert!" — Sarah M., Marketing-Managerin. "Unverzichtbar!" — Thomas K., CEO. Teste es kostenlos: aibooster.com',
      en: '⭐⭐⭐⭐⭐ "This AI tool increased my productivity by 500%!" — Sarah M., Marketing Manager. "Indispensable!" — Thomas K., CEO. Try free: aibooster.com',
    },
    engagement: { likes: 8901, shares: 3456, comments: 678 },
    isAuthentic: false,
    redFlags: [
      { de: '"500% Steigerung" — nicht messbar und unrealistisch', en: '"500% increase" — not measurable and unrealistic' },
      { de: 'Generische Namen ohne Verifizierbarkeit', en: 'Generic names without verifiability' },
      { de: 'Verdacht auf KI-generierte Testimonials', en: 'Suspected AI-generated testimonials' },
    ],
    techniquesUsed: ['social_proof', 'authority', 'anchoring', 'ai_persuasion'],
    explanation: {
      de: 'Wahrscheinlich KI-generierte Fake-Testimonials: Generische Namen, unrealistische Zahlen, nicht verifizierbar.',
      en: 'Likely AI-generated fake testimonials: generic names, unrealistic numbers, not verifiable.',
    },
  },
  {
    id: 'dig-6',
    author: { de: 'GitHub Universe', en: 'GitHub Universe' },
    content: {
      de: 'Talk-Aufzeichnung jetzt verfügbar: "Scaling ML Pipelines at Spotify" von @hedvigps. Architektur, Lessons Learned, Benchmarks. youtube.com/gh-universe/talk-42 Slides: speakerdeck.com/hedvigps',
      en: 'Talk recording now available: "Scaling ML Pipelines at Spotify" by @hedvigps. Architecture, lessons learned, benchmarks. youtube.com/gh-universe/talk-42 Slides: speakerdeck.com/hedvigps',
    },
    engagement: { likes: 5678, shares: 2345, comments: 345 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Legitime Tech-Konferenz-Kommunikation: Konkreter Sprecher, Thema, Ressourcen verlinkt.',
      en: 'Legitimate tech conference communication: concrete speaker, topic, resources linked.',
    },
  },
  {
    id: 'dig-7',
    author: { de: 'DropShipKing_2025', en: 'DropShipKing_2025' },
    content: {
      de: '🤯 VORHER/NACHHER: Mit meinem Dropshipping-System von 0€ auf 50.000€/Monat! Kein Startkapital nötig! Nur noch DIESE WOCHE zum Einführungspreis! dropshipking.com/kurs 💰',
      en: '🤯 BEFORE/AFTER: From $0 to $50,000/month with my dropshipping system! No starting capital needed! Intro price only THIS WEEK! dropshipking.com/course 💰',
    },
    engagement: { likes: 45678, shares: 12345, comments: 3456 },
    isAuthentic: false,
    redFlags: [
      { de: 'Unrealistische Einkommensversprechen', en: 'Unrealistic income promises' },
      { de: '"Kein Startkapital" — aber der Kurs kostet Geld', en: '"No starting capital" — but the course costs money' },
      { de: 'Zeitdruck ("Nur DIESE WOCHE")', en: 'Time pressure ("Only THIS WEEK")' },
    ],
    techniquesUsed: ['anchoring', 'scarcity', 'social_proof', 'emotional_appeal', 'narrative_persuasion'],
    explanation: {
      de: 'Klassischer Get-Rich-Quick-Betrug: Die Vorher/Nachher-Darstellung ist nicht verifizierbar, die Versprechen unrealistisch.',
      en: 'Classic get-rich-quick scam: before/after claims are unverifiable, promises unrealistic.',
    },
  },
  {
    id: 'dig-8',
    author: { de: 'Signal Messenger', en: 'Signal Messenger' },
    content: {
      de: 'Transparenzbericht 2025: 0 Nutzerdaten an Behörden weitergegeben (da wir keine haben). 2 Anfragen erhalten, 2 abgelehnt. Technische Details: signal.org/transparency Quellcode: github.com/signalapp',
      en: 'Transparency report 2025: 0 user data shared with authorities (because we have none). 2 requests received, 2 declined. Technical details: signal.org/transparency Source: github.com/signalapp',
    },
    engagement: { likes: 12345, shares: 6789, comments: 567 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Vorbildliche Datenschutz-Kommunikation: Transparenzbericht mit konkreten Zahlen, Open Source, technische Dokumentation.',
      en: 'Model privacy communication: transparency report with concrete numbers, open source, technical documentation.',
    },
  },
  {
    id: 'dig-9',
    author: { de: 'Viral_Content_Hub', en: 'Viral_Content_Hub' },
    content: {
      de: '🏷️ Markiere jemanden, der DAS sehen MUSS! 😱 Wenn dieses Video 1 Million Views erreicht, spende ich 10.000€! Folge mir für mehr! #Viral #Challenge',
      en: '🏷️ Tag someone who NEEDS to see this! 😱 If this video reaches 1M views, I\'ll donate $10,000! Follow for more! #Viral #Challenge',
    },
    engagement: { likes: 89012, shares: 45678, comments: 23456 },
    isAuthentic: false,
    redFlags: [
      { de: 'Engagement-Bait ("Markiere jemanden")', en: 'Engagement bait ("Tag someone")' },
      { de: 'Bedingte Spende als Köder für Views', en: 'Conditional donation as bait for views' },
      { de: 'Follow-Aufforderung — Ziel ist Reichweitenaufbau', en: 'Follow request — goal is audience building' },
    ],
    techniquesUsed: ['reciprocity', 'social_proof', 'emotional_appeal', 'digital_influence'],
    explanation: {
      de: 'Engagement-Bait: Die bedingte Spende wird selten eingelöst. Ziel ist Follower-Aufbau und Algorithmus-Manipulation.',
      en: 'Engagement bait: conditional donation is rarely fulfilled. Goal is follower growth and algorithm manipulation.',
    },
  },
  {
    id: 'dig-10',
    author: { de: 'TechStartup — Gründer Update', en: 'TechStartup — Founder Update' },
    content: {
      de: 'Series A abgeschlossen: 12 Mio. € von Index Ventures und HV Capital. Kennzahlen: 340 zahlende Kunden, 89% Net Revenue Retention, 2,1 Mio. € ARR. Team: 28 Mitarbeiter. Wir stellen ein: techstartup.de/jobs',
      en: 'Series A closed: €12M from Index Ventures and HV Capital. Metrics: 340 paying customers, 89% NRR, €2.1M ARR. Team: 28 employees. Hiring: techstartup.com/jobs',
    },
    engagement: { likes: 5678, shares: 2345, comments: 456 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Transparente Startup-Kommunikation: Konkrete Investoren, Metriken, Teamgröße. Typischer LinkedIn-Post eines Gründers.',
      en: 'Transparent startup communication: concrete investors, metrics, team size. Typical founder LinkedIn post.',
    },
  },
  {
    id: 'dig-11',
    author: { de: 'AI_Revolution_Now', en: 'AI_Revolution_Now' },
    content: {
      de: '🤖 Unsere KI kann JETZT Krebs mit 99,9% Genauigkeit erkennen! Die Medizin wird NIE WIEDER die gleiche sein! Investiere JETZT bevor es zu spät ist! airevolution.io/invest',
      en: '🤖 Our AI can NOW detect cancer with 99.9% accuracy! Medicine will NEVER be the same! Invest NOW before it\'s too late! airevolution.io/invest',
    },
    engagement: { likes: 34567, shares: 12345, comments: 4567 },
    isAuthentic: false,
    redFlags: [
      { de: '"99,9% Genauigkeit" — klinisch nicht verifiziert', en: '"99.9% accuracy" — clinically unverified' },
      { de: 'Investitionsaufforderung — kommerzielles Interesse', en: 'Investment call — commercial interest' },
      { de: 'Übertreibung des Entwicklungsstands', en: 'Exaggeration of development stage' },
    ],
    techniquesUsed: ['authority', 'scarcity', 'anchoring', 'ai_persuasion', 'emotional_appeal'],
    explanation: {
      de: 'KI-Hype als Investitionsköder: Laborergebnisse werden als marktreif präsentiert. Keine Peer-Review, keine klinische Studie.',
      en: 'AI hype as investment bait: lab results presented as market-ready. No peer review, no clinical trial.',
    },
  },
  {
    id: 'dig-12',
    author: { de: 'Tech Workers Coalition DE', en: 'Tech Workers Coalition' },
    content: {
      de: 'Offener Brief: 340 Mitarbeiter von [TechCo] fordern Transparenz bei KI-Trainingsdaten. Forderungen: Audit der Datensätze, Opt-out für Kreative, Vergütungsmodell. Volltext: twc-de.org/offener-brief-2025',
      en: 'Open letter: 340 employees of [TechCo] demand transparency on AI training data. Demands: dataset audit, creator opt-out, compensation model. Full text: techworkerscoalition.org/open-letter-2025',
    },
    engagement: { likes: 6789, shares: 4567, comments: 1234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Authentischer Arbeitnehmer-Aktivismus: Konkrete Forderungen, nachprüfbare Unterzeichner, strukturierte Argumentation.',
      en: 'Authentic worker activism: concrete demands, verifiable signatories, structured arguments.',
    },
  },
  {
    id: 'dig-13',
    author: { de: 'StreamPlus Premium', en: 'StreamPlus Premium' },
    content: {
      de: '⚠️ Deine kostenlose Testphase endet in 2 Stunden! Danach: 14,99€/Monat. JETZT upgraden und 50% sparen — für immer! [Großer roter Button: UPGRADE] [Kleiner grauer Text: Abbestellen]',
      en: '⚠️ Your free trial ends in 2 hours! After: $14.99/month. Upgrade NOW and save 50% — forever! [Big red button: UPGRADE] [Tiny gray text: Cancel]',
    },
    engagement: { likes: 1234, shares: 567, comments: 890 },
    isAuthentic: false,
    redFlags: [
      { de: 'Dark Pattern: Kündigung schwer auffindbar', en: 'Dark pattern: cancellation hard to find' },
      { de: 'Künstlicher Zeitdruck (2 Stunden)', en: 'Artificial time pressure (2 hours)' },
      { de: 'Irreführender Rabatt ("50% für immer")', en: 'Misleading discount ("50% forever")' },
    ],
    techniquesUsed: ['dark_patterns', 'scarcity', 'anchoring', 'nudging'],
    explanation: {
      de: 'Lehrbuch-Dark-Pattern: Auffälliger Upgrade-Button vs. versteckte Kündigung. Der Zeitdruck und der "50% für immer"-Anker manipulieren die Entscheidung.',
      en: 'Textbook dark pattern: prominent upgrade button vs. hidden cancellation. Time pressure and "50% forever" anchor manipulate the decision.',
    },
  },
  {
    id: 'dig-14',
    author: { de: 'Electronic Frontier Foundation', en: 'Electronic Frontier Foundation' },
    content: {
      de: 'Neues Analyse-Tool: Prüfe welche Tracker deine meistgenutzten Apps verwenden. Open Source, keine Daten gespeichert. Ergebnisse unserer Studie: 87% der Top-100-Apps teilen Daten mit Drittanbietern. eff.org/tracker-check',
      en: 'New analysis tool: check which trackers your most-used apps employ. Open source, no data stored. Study findings: 87% of top 100 apps share data with third parties. eff.org/tracker-check',
    },
    engagement: { likes: 8901, shares: 5678, comments: 1234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Vertrauenswürdige Digital-Rights-Organisation: Open-Source-Tool, transparente Methodik, keine kommerzielle Absicht.',
      en: 'Trustworthy digital rights organization: open-source tool, transparent methodology, no commercial intent.',
    },
  },
  {
    id: 'dig-15',
    author: { de: 'CryptoMoonShot_2025', en: 'CryptoMoonShot_2025' },
    content: {
      de: '🚀🌕 LIMITED EDITION: Nur 10.000 NFTs! Erste 500 Käufer bekommen EXCLUSIVE Vorteile! Floor Price explodiert gerade! Nicht verpassen — MINT JETZT! cryptomoon.io/mint 💎🙌',
      en: '🚀🌕 LIMITED EDITION: Only 10,000 NFTs! First 500 buyers get EXCLUSIVE perks! Floor price exploding right now! Don\'t miss out — MINT NOW! cryptomoon.io/mint 💎🙌',
    },
    engagement: { likes: 23456, shares: 12345, comments: 5678 },
    isAuthentic: false,
    redFlags: [
      { de: 'Künstliche Verknappung + FOMO', en: 'Artificial scarcity + FOMO' },
      { de: '"Floor Price explodiert" — nicht verifizierbar', en: '"Floor price exploding" — unverifiable' },
      { de: 'Übermäßige Emojis und Dringlichkeit', en: 'Excessive emojis and urgency' },
    ],
    techniquesUsed: ['scarcity', 'social_proof', 'emotional_appeal', 'anchoring', 'dark_patterns'],
    explanation: {
      de: 'Typischer Crypto/NFT-Scam: Künstliche Verknappung, FOMO-Erzeugung, nicht verifizierbare Behauptungen über Wertsteigerung.',
      en: 'Typical crypto/NFT scam: artificial scarcity, FOMO creation, unverifiable claims about value appreciation.',
    },
  },
  {
    id: 'dig-16',
    author: { de: 'Oxford Internet Institute', en: 'Oxford Internet Institute' },
    content: {
      de: 'Neue Studie: Algorithmische Empfehlungen verstärken politische Polarisierung um 23% in kontrollierten Experimenten (N=15.000, 6 Länder). Open Access: oii.ox.ac.uk/algo-polarization. Daten: github.com/oii-research/algo-pol',
      en: 'New study: algorithmic recommendations amplify political polarization by 23% in controlled experiments (N=15,000, 6 countries). Open access: oii.ox.ac.uk/algo-polarization. Data: github.com/oii-research/algo-pol',
    },
    engagement: { likes: 4567, shares: 3456, comments: 567 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Exzellente Wissenschaftskommunikation: Konkreter Effekt, Stichprobengröße, Open Access, Replikationsdaten verfügbar.',
      en: 'Excellent science communication: concrete effect, sample size, open access, replication data available.',
    },
  },
];
