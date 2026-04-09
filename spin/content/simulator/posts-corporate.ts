import type { SimulatorPost } from '../types';

// Corporate & PR posts (corp-1 through corp-17)
export const corporatePosts: SimulatorPost[] = [
  {
    id: 'corp-1',
    author: { de: 'GreenEnergy Solutions', en: 'GreenEnergy Solutions' },
    content: {
      de: 'Wir sind stolz, bekannt zu geben, dass wir unsere CO₂-Emissionen um 50% reduziert haben! 🌍 Nachhaltigkeit ist keine Option, sondern unser Versprechen. #GreenFuture #Nachhaltigkeit',
      en: 'We\'re proud to announce we\'ve reduced our CO₂ emissions by 50%! 🌍 Sustainability isn\'t optional — it\'s our promise. #GreenFuture #Sustainability',
    },
    engagement: { likes: 12453, shares: 3421, comments: 287 },
    isAuthentic: false,
    redFlags: [
      { de: 'Keine Angabe des Bezugszeitraums oder der Berechnungsmethode', en: 'No reference period or calculation method specified' },
      { de: 'Vage Formulierung ohne konkrete Daten', en: 'Vague wording without concrete data' },
      { de: 'Emotionales Framing statt Fakten', en: 'Emotional framing instead of facts' },
    ],
    techniquesUsed: ['framing', 'emotional_appeal', 'anchoring'],
    explanation: {
      de: 'Klassisches Greenwashing: Die 50%-Reduktion klingt beeindruckend, aber ohne Bezugsjahr, Scope-Definition oder unabhängige Prüfung ist die Zahl bedeutungslos.',
      en: 'Classic greenwashing: 50% reduction sounds impressive, but without a baseline year, scope definition, or independent verification, the number is meaningless.',
    },
  },
  {
    id: 'corp-2',
    author: { de: 'Siemens Energy', en: 'Siemens Energy' },
    content: {
      de: 'Unser Nachhaltigkeitsbericht 2025 ist veröffentlicht. Scope 1-3 Emissionen: 4,2 Mio. t CO₂e (Vorjahr: 4,8 Mio. t). Methodik nach GHG Protocol. Vollständiger Bericht: siemens-energy.com/sustainability',
      en: 'Our 2025 sustainability report is published. Scope 1-3 emissions: 4.2M t CO₂e (previous year: 4.8M). GHG Protocol methodology. Full report: siemens-energy.com/sustainability',
    },
    engagement: { likes: 2341, shares: 876, comments: 134 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Seriöser Nachhaltigkeitsbericht: Konkrete Zahlen, Vergleichswerte, anerkannte Methodik (GHG Protocol), Quellenangabe.',
      en: 'Credible sustainability report: concrete numbers, year-over-year comparison, recognized methodology (GHG Protocol), source link.',
    },
  },
  {
    id: 'corp-3',
    author: { de: 'Thomas M. — CEO & Visionär', en: 'Thomas M. — CEO & Visionary' },
    content: {
      de: 'Heute vor 10 Jahren habe ich meinen Job gekündigt und mit 500€ in einer Garage angefangen. Jetzt: 200 Mitarbeiter, 8 Standorte. Die Lektion? Glaube an dich selbst. 💪 Wer will, der kann. #Entrepreneurship #Motivation',
      en: 'Today, 10 years ago, I quit my job and started with €500 in a garage. Now: 200 employees, 8 offices. The lesson? Believe in yourself. 💪 Where there\'s a will, there\'s a way. #Entrepreneurship #Motivation',
    },
    engagement: { likes: 45678, shares: 12345, comments: 2345 },
    isAuthentic: false,
    redFlags: [
      { de: 'Survivorship Bias — nur Erfolgsgeschichten werden erzählt', en: 'Survivorship bias — only success stories are told' },
      { de: 'Vereinfachung komplexer Erfolgsfaktoren auf "Glauben"', en: 'Oversimplification of complex success factors to "belief"' },
      { de: 'Versteckter Autoritätsappell durch Selbstdarstellung', en: 'Hidden authority appeal through self-presentation' },
    ],
    techniquesUsed: ['authority', 'narrative_persuasion', 'emotional_appeal', 'anchoring'],
    explanation: {
      de: 'LinkedIn-Humble-Brag mit narrativer Überzeugung. Die Geschichte verschweigt Privilegien, Netzwerke und Glück — und suggeriert, Erfolg sei reine Willenskraft.',
      en: 'LinkedIn humble-brag using narrative persuasion. The story omits privilege, networks, and luck — implying success is purely willpower.',
    },
  },
  {
    id: 'corp-4',
    author: { de: 'Volkswagen AG', en: 'Volkswagen AG' },
    content: {
      de: 'Wichtige Information: Wir rufen weltweit 120.000 Fahrzeuge der Baureihe ID.4 (Bj. 2024) zurück. Grund: Möglicher Softwarefehler im Bremssystem. Betroffene Kunden werden direkt kontaktiert. Details: vw.com/recall-2025',
      en: 'Important notice: We are recalling 120,000 ID.4 vehicles (MY 2024) worldwide. Reason: potential software issue in braking system. Affected customers will be contacted directly. Details: vw.com/recall-2025',
    },
    engagement: { likes: 1234, shares: 5678, comments: 892 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Transparente Krisenkommunikation: Konkretes Problem benannt, Umfang angegeben, proaktive Kundenansprache, Link zu Details.',
      en: 'Transparent crisis communication: specific problem named, scope stated, proactive customer outreach, link to details.',
    },
  },
  {
    id: 'corp-5',
    author: { de: 'BestWorkplace_Reviews', en: 'BestWorkplace_Reviews' },
    content: {
      de: '🌟 "TechCorp ist der beste Arbeitgeber, den ich je hatte!" — Hier arbeiten die glücklichsten Menschen! 100% Weiterempfehlung! Bewirb dich jetzt: techcorp.com/jobs 🚀 #DreamJob #BestCompany',
      en: '🌟 "TechCorp is the best employer I\'ve ever had!" — The happiest employees work here! 100% recommendation! Apply now: techcorp.com/jobs 🚀 #DreamJob #BestCompany',
    },
    engagement: { likes: 8234, shares: 2345, comments: 156 },
    isAuthentic: false,
    redFlags: [
      { de: 'Übertrieben positive Sprache ohne Differenzierung', en: 'Excessively positive language without nuance' },
      { de: '"100% Weiterempfehlung" ist unrealistisch', en: '"100% recommendation" is unrealistic' },
      { de: 'Direkte Verlinkung zu Stellenangeboten — werblich', en: 'Direct link to job postings — promotional' },
    ],
    techniquesUsed: ['social_proof', 'emotional_appeal', 'authority'],
    explanation: {
      de: 'Astroturfing: Gefälschte oder gesteuerte Mitarbeiterbewertungen, die wie authentische Empfehlungen wirken sollen.',
      en: 'Astroturfing: fake or orchestrated employee reviews designed to appear as authentic recommendations.',
    },
  },
  {
    id: 'corp-6',
    author: { de: 'Deutsche Börse AG', en: 'Deutsche Börse AG' },
    content: {
      de: 'Q3/2025 Ergebnis: Nettoerlöse 1,4 Mrd. € (+8% YoY). EBITDA-Marge 58%. Cashflow: 890 Mio. €. Jahresprognose bestätigt. Vollständiger Quartalsbericht und Analysten-Call: deutsche-boerse.com/ir',
      en: 'Q3/2025 results: net revenue €1.4B (+8% YoY). EBITDA margin 58%. Cash flow: €890M. Full-year guidance confirmed. Quarterly report and analyst call: deutsche-boerse.com/ir',
    },
    engagement: { likes: 1876, shares: 654, comments: 89 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Standard-IR-Kommunikation: Konkrete Finanzkennzahlen, Vergleichbarkeit (YoY), bestätigte Prognose, Verweis auf vollständigen Bericht.',
      en: 'Standard IR communication: concrete financial metrics, comparability (YoY), confirmed guidance, reference to full report.',
    },
  },
  {
    id: 'corp-7',
    author: { de: 'Bürger für freie Energie', en: 'Citizens for Free Energy' },
    content: {
      de: 'Wir — ganz normale Bürger — fordern: Schluss mit dem Windrad-Wahnsinn! 95% der Anwohner sind dagegen! Unterschreibe unsere Petition: energie-freiheit.de #Bürgerwille #Windkraft',
      en: 'We — ordinary citizens — demand: Stop the wind turbine madness! 95% of residents are against it! Sign our petition: energy-freedom.org #PeoplesWill #WindPower',
    },
    engagement: { likes: 23456, shares: 15678, comments: 4567 },
    isAuthentic: false,
    redFlags: [
      { de: 'Astroturfing: vermeintliche Bürgerinitiative, möglicherweise industriefinanziert', en: 'Astroturfing: apparent grassroots initiative, possibly industry-funded' },
      { de: '"95% dagegen" — Quelle und Methodik fehlen', en: '"95% against" — source and methodology missing' },
      { de: 'Emotionale Sprache ("Wahnsinn") statt Sachargumente', en: 'Emotional language ("madness") instead of factual arguments' },
    ],
    techniquesUsed: ['social_proof', 'emotional_appeal', 'framing', 'anchoring', 'reactance_theory'],
    explanation: {
      de: 'Verdacht auf Astroturfing: Die Initiative tarnt sich als Bürgerbewegung, nutzt aber typische Lobby-Rhetorik und unbelegte Statistiken.',
      en: 'Suspected astroturfing: the initiative disguises itself as a citizens\' movement but uses typical lobby rhetoric and unsubstantiated statistics.',
    },
  },
  {
    id: 'corp-8',
    author: { de: 'DataSecure GmbH', en: 'DataSecure Inc.' },
    content: {
      de: 'Wichtige Mitteilung: Am 15.03. wurde unbefugter Zugriff auf Kundendaten festgestellt. Betroffen: E-Mail-Adressen und verschlüsselte Passwörter von ca. 50.000 Nutzern. Maßnahmen: Passwort-Reset erzwungen, Behörden informiert, externe Forensik beauftragt. FAQ: datasecure.de/incident',
      en: 'Important notice: On March 15, unauthorized access to customer data was detected. Affected: email addresses and encrypted passwords of approx. 50,000 users. Actions: forced password reset, authorities notified, external forensics engaged. FAQ: datasecure.com/incident',
    },
    engagement: { likes: 567, shares: 2345, comments: 1234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Vorbildliche Incident-Kommunikation: Konkrete Angaben zum Vorfall, Umfang, ergriffene Maßnahmen und weiterführende Informationen.',
      en: 'Exemplary incident communication: specific details about the breach, scope, actions taken, and further information.',
    },
  },
  {
    id: 'corp-9',
    author: { de: 'Gesundheitsinstitut Vital', en: 'Vital Health Institute' },
    content: {
      de: 'Neue Studie beweist: Unser Nahrungsergänzungsmittel VitalBoost steigert die Konzentration um 340%! Von führenden Wissenschaftlern entwickelt. Jetzt 30% Rabatt! vitalbooost.com/studie',
      en: 'New study proves: our supplement VitalBoost increases concentration by 340%! Developed by leading scientists. Now 30% off! vitalboost.com/study',
    },
    engagement: { likes: 34567, shares: 12345, comments: 5678 },
    isAuthentic: false,
    redFlags: [
      { de: '"340% Steigerung" — unrealistischer Effekt', en: '"340% increase" — unrealistic effect size' },
      { de: 'Studie wird vom Hersteller selbst zitiert', en: 'Study is cited by the manufacturer itself' },
      { de: 'Direkter Verkaufslink — kommerzielles Interesse', en: 'Direct sales link — commercial interest' },
      { de: '"Führende Wissenschaftler" — keine Namen genannt', en: '"Leading scientists" — no names given' },
    ],
    techniquesUsed: ['authority', 'anchoring', 'scarcity', 'illusory_truth_effect'],
    explanation: {
      de: 'Industriefinanzierte Pseudostudie mit unrealistischen Effektgrößen. "Führende Wissenschaftler" ohne Namensnennung ist ein klassisches Autoritätssignal.',
      en: 'Industry-funded pseudo-study with unrealistic effect sizes. "Leading scientists" without names is a classic authority signal.',
    },
  },
  {
    id: 'corp-10',
    author: { de: 'Ärzte ohne Grenzen', en: 'Doctors Without Borders' },
    content: {
      de: 'Lagebericht Sudan: 2,4 Mio. Binnenvertriebene seit März. 340 medizinische Einrichtungen zerstört. MSF-Teams behandeln täglich 800 Patienten in 12 Feldkliniken. Vollständiger Bericht: msf.de/sudan-update',
      en: 'Situation report Sudan: 2.4M internally displaced since March. 340 medical facilities destroyed. MSF teams treat 800 patients daily in 12 field clinics. Full report: msf.org/sudan-update',
    },
    engagement: { likes: 4567, shares: 3456, comments: 234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Sachliche NGO-Kommunikation: Konkrete Zahlen, zeitliche Einordnung, eigene Kapazitäten transparent dargestellt, Quelle verlinkt.',
      en: 'Factual NGO communication: concrete numbers, temporal context, own capacity transparently stated, source linked.',
    },
  },
  {
    id: 'corp-11',
    author: { de: 'Happy_Customer_2025', en: 'Happy_Customer_2025' },
    content: {
      de: '😍 OMG dieses Produkt hat mein Leben verändert!!! Ich kann es nur JEDEM empfehlen!! Bestellt es SOFORT auf megastore.com!! Bestes Produkt ALLER ZEITEN!!! #Lebensverändernd #MussManHaben',
      en: '😍 OMG this product changed my life!!! I recommend it to EVERYONE!! Order it NOW on megastore.com!! Best product EVER!!! #LifeChanging #MustHave',
    },
    engagement: { likes: 456, shares: 234, comments: 12 },
    isAuthentic: false,
    redFlags: [
      { de: 'Übertriebene Emotionalität und Superlative', en: 'Excessive emotionality and superlatives' },
      { de: 'Direkte Kaufaufforderung mit Link', en: 'Direct purchase call with link' },
      { de: 'Account-Name wirkt generiert', en: 'Account name appears generated' },
      { de: 'Unrealistisch positiv ohne konkreten Nutzen', en: 'Unrealistically positive without concrete benefit' },
    ],
    techniquesUsed: ['social_proof', 'emotional_appeal', 'scarcity', 'repetition'],
    explanation: {
      de: 'Typische Fake-Bewertung: Übertriebene Begeisterung, keine konkreten Details, direkte Kaufaufforderung, generischer Accountname.',
      en: 'Typical fake review: excessive enthusiasm, no concrete details, direct purchase call, generic account name.',
    },
  },
  {
    id: 'corp-12',
    author: { de: 'Bosch Engineering', en: 'Bosch Engineering' },
    content: {
      de: 'Neue Partnerschaft mit @TUM: Gemeinsames Forschungsprojekt zu Festkörperbatterien. 3-jährige Zusammenarbeit, 15 Doktorandenstellen. Erste Ergebnisse Q2/2026 erwartet. bosch.com/research/solid-state',
      en: 'New partnership with @TUM: Joint research project on solid-state batteries. 3-year collaboration, 15 PhD positions. Initial results expected Q2/2026. bosch.com/research/solid-state',
    },
    engagement: { likes: 3456, shares: 1234, comments: 178 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Glaubwürdige Unternehmenskommunikation: Konkreter Partner, definierter Zeitrahmen, messbare Meilensteine, Quellenlink.',
      en: 'Credible corporate communication: concrete partner, defined timeline, measurable milestones, source link.',
    },
  },
  {
    id: 'corp-13',
    author: { de: 'CloudMax Pro', en: 'CloudMax Pro' },
    content: {
      de: 'Warum zahlen Sie noch für [Konkurrent]? CloudMax bietet ALLES was [Konkurrent] kann — nur 70% günstiger! Außerdem: [Konkurrent] hatte letztes Jahr 3 Ausfälle. Bei uns? NULL. Wechseln Sie jetzt!',
      en: 'Why still pay for [Competitor]? CloudMax offers EVERYTHING [Competitor] can — 70% cheaper! Also: [Competitor] had 3 outages last year. Us? ZERO. Switch now!',
    },
    engagement: { likes: 6789, shares: 2345, comments: 567 },
    isAuthentic: false,
    redFlags: [
      { de: 'Direkter Angriff auf Konkurrenz statt eigener Stärken', en: 'Direct attack on competitor instead of own strengths' },
      { de: '"70% günstiger" ohne Vergleichsgrundlage', en: '"70% cheaper" without comparison basis' },
      { de: 'Cherry-picked Statistik (Ausfälle)', en: 'Cherry-picked statistic (outages)' },
    ],
    techniquesUsed: ['anchoring', 'ad_hominem', 'false_dichotomy', 'framing'],
    explanation: {
      de: 'Manipulativer Vergleich: Selektive Fakten, kein Kontext zu Servicelevel oder Funktionsumfang. Der Preisanker ist ohne Basis.',
      en: 'Manipulative comparison: selective facts, no context on service levels or features. The price anchor has no basis.',
    },
  },
  {
    id: 'corp-14',
    author: { de: 'Max-Planck-Gesellschaft', en: 'Max Planck Society' },
    content: {
      de: 'Durchbruch in der Materialforschung: Team um Prof. Li am MPI für Polymerforschung entwickelt selbstheilenden Kunststoff. Publikation in Nature Materials (DOI: 10.1038/s41563-025-xxxx). Pressemitteilung: mpg.de/pm-2025-034',
      en: 'Breakthrough in materials research: team led by Prof. Li at MPI for Polymer Research develops self-healing plastic. Published in Nature Materials (DOI: 10.1038/s41563-025-xxxx). Press release: mpg.de/pr-2025-034',
    },
    engagement: { likes: 5678, shares: 2345, comments: 234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Vorbildliche Wissenschaftskommunikation: Namentliche Zuordnung, Peer-Review-Journal, DOI-Nummer, offizielle Pressemitteilung.',
      en: 'Exemplary science communication: named attribution, peer-reviewed journal, DOI number, official press release.',
    },
  },
  {
    id: 'corp-15',
    author: { de: 'FashionBrand Global', en: 'FashionBrand Global' },
    content: {
      de: '🎗️ Wir spenden 1% jedes Einkaufs an Kinderhilfsorganisationen! Zeige Herz und kaufe unsere neue Kollektion! Zusammen verändern wir die Welt! ❤️ #ShopForGood #Charity',
      en: '🎗️ We donate 1% of every purchase to children\'s charities! Show your heart and buy our new collection! Together we change the world! ❤️ #ShopForGood #Charity',
    },
    engagement: { likes: 18234, shares: 5678, comments: 1234 },
    isAuthentic: false,
    redFlags: [
      { de: 'Kaufaufforderung als soziales Engagement getarnt', en: 'Purchase call disguised as social engagement' },
      { de: '1% ist minimal — klingt aber nach viel', en: '1% is minimal — but sounds like a lot' },
      { de: 'Keine Angabe zur konkreten Organisation', en: 'No mention of specific organization' },
    ],
    techniquesUsed: ['reciprocity', 'emotional_appeal', 'framing', 'narrative_persuasion'],
    explanation: {
      de: 'Cause-Related Marketing als Ablenkung: Die Spende ist minimal, der Fokus liegt auf der Kaufaufforderung. Keine Transparenz über die Empfänger.',
      en: 'Cause-related marketing as distraction: the donation is minimal, the focus is on the purchase call. No transparency about recipients.',
    },
  },
  {
    id: 'corp-16',
    author: { de: 'Robert Koch-Institut', en: 'CDC (Centers for Disease Control)' },
    content: {
      de: 'Aktuelle Influenza-Surveillance KW 14: 2.847 laborbestätigte Fälle. Positivenrate: 12,3%. Trend: leicht rückläufig. Dominanter Subtyp: A(H1N1)pdm09. Wochenbericht: rki.de/influenza',
      en: 'Current influenza surveillance week 14: 2,847 lab-confirmed cases. Positivity rate: 12.3%. Trend: slightly declining. Dominant subtype: A(H1N1)pdm09. Weekly report: cdc.gov/flu',
    },
    engagement: { likes: 1234, shares: 567, comments: 89 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Mustergültige Gesundheitskommunikation: Präzise Daten, Trendangabe, Quellenlink, keine Emotionalisierung.',
      en: 'Model health communication: precise data, trend indication, source link, no emotionalization.',
    },
  },
  {
    id: 'corp-17',
    author: { de: 'DreamJob Inc.', en: 'DreamJob Inc.' },
    content: {
      de: '🚀 TRAUM-STELLE: Social Media Manager (m/w/d) — Gehalt: "wettbewerbsfähig". Benefits: Obstkorb, flache Hierarchien! Nur HEUTE bewerben möglich! Passt auf JEDEN! dreamjob.com/bewerbung',
      en: '🚀 DREAM JOB: Social Media Manager — Salary: "competitive". Benefits: free fruit, flat hierarchies! Application ONLY open TODAY! Perfect for EVERYONE! dreamjob.com/apply',
    },
    engagement: { likes: 3456, shares: 1234, comments: 567 },
    isAuthentic: false,
    redFlags: [
      { de: 'Keine konkrete Gehaltsangabe ("wettbewerbsfähig")', en: 'No specific salary ("competitive")' },
      { de: 'Künstlicher Zeitdruck ("Nur HEUTE")', en: 'Artificial time pressure ("Only TODAY")' },
      { de: '"Passt auf JEDEN" — unrealistisch', en: '"Perfect for EVERYONE" — unrealistic' },
      { de: 'Nichtssagende Benefits ("Obstkorb")', en: 'Meaningless benefits ("free fruit")' },
    ],
    techniquesUsed: ['scarcity', 'dark_patterns', 'framing', 'emotional_appeal'],
    explanation: {
      de: 'Dark Patterns in der Stellenanzeige: Künstliche Verknappung, verschleiertes Gehalt, übertriebene Versprechen — alles Warnzeichen.',
      en: 'Dark patterns in job posting: artificial scarcity, hidden salary, exaggerated promises — all warning signs.',
    },
  },
];
