import type { SimulatorPost } from '../types';

export const politicalPosts: SimulatorPost[] = [
  {
    id: 'pol-1',
    author: { de: 'MdB Friedrich K.', en: 'Rep. Friedrich K.' },
    content: {
      de: 'Entweder wir investieren JETZT in die Bundeswehr, oder Europa wird schutzlos sein! Es gibt nur diese zwei Möglichkeiten. Wer dagegen stimmt, gefährdet unsere Kinder! 🇩🇪',
      en: 'Either we invest in defense NOW, or Europe will be defenseless! There are only these two options. Anyone voting against endangers our children! 🇩🇪',
    },
    engagement: { likes: 34567, shares: 12345, comments: 5678 },
    isAuthentic: false,
    redFlags: [
      { de: 'Falsche Dichotomie — mehr als zwei Optionen existieren', en: 'False dichotomy — more than two options exist' },
      { de: 'Emotionale Erpressung ("unsere Kinder")', en: 'Emotional blackmail ("our children")' },
      { de: 'Zeitdruck ohne Begründung ("JETZT")', en: 'Time pressure without justification ("NOW")' },
    ],
    techniquesUsed: ['false_dichotomy', 'emotional_appeal', 'scarcity', 'framing'],
    explanation: {
      de: 'Klassische falsche Dichotomie: Komplexe sicherheitspolitische Fragen werden auf ein Entweder-Oder reduziert, verstärkt durch emotionalen Appell.',
      en: 'Classic false dichotomy: complex security policy questions reduced to an either-or, reinforced by emotional appeal.',
    },
  },
  {
    id: 'pol-2',
    author: { de: 'Bundestag Pressestelle', en: 'Parliament Press Office' },
    content: {
      de: 'Ausschuss für Digitales: Sachverständigenanhörung zum AI Act abgeschlossen. 12 Expert:innen gehört, Stellungnahmen veröffentlicht. Protokoll und Gutachten: bundestag.de/ausschuesse/digital/2025-03',
      en: 'Digital Affairs Committee: expert hearing on AI Act completed. 12 experts heard, written statements published. Minutes and reports: parliament.gov/committees/digital/2025-03',
    },
    engagement: { likes: 876, shares: 345, comments: 56 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Parlamentarische Standardkommunikation: Sachlich, mit konkreten Angaben zu Verfahren, Teilnehmerzahl und Quellenlink.',
      en: 'Standard parliamentary communication: factual, with concrete details on process, participant count, and source link.',
    },
  },
  {
    id: 'pol-3',
    author: { de: 'Patriot_DE_1488', en: 'Patriot_US_1488' },
    content: {
      de: '🔴 AUFWACHEN! Die Mainstream-Medien berichten NICHT darüber: [Link zu Blog] Über 10.000 Mal geteilt! Die Wahrheit lässt sich nicht unterdrücken! #Aufwachen #Systemmedien',
      en: '🔴 WAKE UP! Mainstream media are NOT reporting this: [Link to blog] Shared over 10,000 times! The truth cannot be suppressed! #WakeUp #MSM',
    },
    engagement: { likes: 45123, shares: 23456, comments: 6789 },
    isAuthentic: false,
    redFlags: [
      { de: 'Anti-Medien-Narrativ ohne Beleg', en: 'Anti-media narrative without evidence' },
      { de: 'Social Proof als Qualitätsbeweis ("10.000 Mal geteilt")', en: 'Social proof as quality indicator ("shared 10,000 times")' },
      { de: 'Zahlen im Accountnamen können Szenecodes sein', en: 'Numbers in account name may be scene codes' },
      { de: 'Link zu nicht verifizierbarer Quelle', en: 'Link to unverifiable source' },
    ],
    techniquesUsed: ['reactance_theory', 'social_proof', 'emotional_appeal', 'digital_influence'],
    explanation: {
      de: 'Typisches Muster koordinierter Desinformation: Anti-Establishment-Framing, Social Proof durch Teilungszahlen, verdächtiger Accountname.',
      en: 'Typical coordinated manipulation pattern: anti-establishment framing, social proof through share counts, suspicious account name.',
    },
  },
  {
    id: 'pol-4',
    author: { de: 'Correctiv Faktencheck', en: 'PolitiFact' },
    content: {
      de: 'Faktencheck: Behauptung "Deutschland gibt 50% des Haushalts für Migration aus" — Bewertung: FALSCH. Tatsächlich: 2,1% (Einzelplan 06, BMI). Quellen: Bundeshaushalt 2025, Destatis. Vollständige Analyse: correctiv.org/fc-2025-0134',
      en: 'Fact check: Claim "Country spends 50% of budget on migration" — Rating: FALSE. Actual figure: 2.1% (Interior Ministry budget). Sources: Federal budget 2025, statistics office. Full analysis: politifact.com/fc-2025-0134',
    },
    engagement: { likes: 2345, shares: 1876, comments: 567 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Professioneller Faktencheck: Klare Bewertung, konkrete Gegenzahlen, offizielle Quellen, nachvollziehbare Methodik.',
      en: 'Professional fact-check: clear rating, concrete counter-figures, official sources, transparent methodology.',
    },
  },
  {
    id: 'pol-5',
    author: { de: 'Wahlkampf-Team Partei X', en: 'Campaign Team Party X' },
    content: {
      de: '😢 Diese Rentnerin kann sich kein Essen mehr leisten. UNSERE Regierung hat sie vergessen! Nur WIR kämpfen für die Schwachen. Teile dieses Video, wenn du auch wütend bist! #Gerechtigkeit',
      en: '😢 This retiree can\'t afford food anymore. OUR government has forgotten her! Only WE fight for the vulnerable. Share this video if you\'re angry too! #Justice',
    },
    engagement: { likes: 67890, shares: 34567, comments: 8901 },
    isAuthentic: false,
    redFlags: [
      { de: 'Einzelfall als Beweis für Systemversagen', en: 'Single case as proof of systemic failure' },
      { de: 'Us-vs-Them-Framing ("UNSERE Regierung" vs. "WIR")', en: 'Us-vs-them framing ("OUR government" vs. "WE")' },
      { de: 'Emotionale Manipulation durch persönliches Schicksal', en: 'Emotional manipulation through personal fate' },
      { de: 'Aufforderung zum Teilen aus Wut', en: 'Call to share from anger' },
    ],
    techniquesUsed: ['emotional_appeal', 'framing', 'narrative_persuasion', 'false_dichotomy', 'social_proof'],
    explanation: {
      de: 'Populistische Kampagne: Emotionalisierung durch Einzelschicksal, klare Feindbilder, Vereinfachung komplexer Sozialpolitik.',
      en: 'Populist campaign: emotionalization through individual fate, clear enemy images, oversimplification of complex social policy.',
    },
  },
  {
    id: 'pol-6',
    author: { de: 'Stadt Freiburg', en: 'City of Portland' },
    content: {
      de: 'Bauupdate Stadtbahn Linie 5: Gleisbauarbeiten Bertoldstraße planmäßig. Sperrung bis 28.03. Umleitungen: Linie 1 über Habsburgerstr. Echtzeitkarte: freiburg.de/stadtbahn-update',
      en: 'Construction update light rail line 5: track work on Main St. on schedule. Closure until March 28. Detours: Line 1 via Harbor St. Real-time map: portland.gov/transit-update',
    },
    engagement: { likes: 234, shares: 567, comments: 89 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Sachliche kommunale Kommunikation: Konkreter Zeitrahmen, alternative Routen, Echtzeitinformation verlinkt.',
      en: 'Factual municipal communication: concrete timeframe, alternative routes, real-time information linked.',
    },
  },
  {
    id: 'pol-7',
    author: { de: 'Politik_Analyse_Pro', en: 'Political_Analysis_Pro' },
    content: {
      de: 'Die Arbeitslosenquote ist auf 5,9% gestiegen — BEWEIS, dass die Wirtschaftspolitik gescheitert ist! (Im Kleingedruckten: saisonbereinigt liegt sie bei 5,1%, Vorjahr: 5,3%)',
      en: 'Unemployment rate has risen to 5.9% — PROOF the economic policy has failed! (Fine print: seasonally adjusted it\'s 5.1%, previous year: 5.3%)',
    },
    engagement: { likes: 12345, shares: 6789, comments: 2345 },
    isAuthentic: false,
    redFlags: [
      { de: 'Cherry-Picking: Nicht-saisonbereinigte Zahl gewählt', en: 'Cherry-picking: non-seasonally adjusted figure chosen' },
      { de: 'Kontext fehlt (saisonbereinigt sogar besser als Vorjahr)', en: 'Context missing (seasonally adjusted even better than prior year)' },
      { de: 'Übertriebene Schlussfolgerung aus einer einzelnen Zahl', en: 'Exaggerated conclusion from a single figure' },
    ],
    techniquesUsed: ['framing', 'anchoring', 'emotional_appeal', 'equivocation'],
    explanation: {
      de: 'Statistische Manipulation: Die nicht-saisonbereinigte Zahl wird gewählt, weil sie dramatischer klingt. Die bereinigte Zahl zeigt eine Verbesserung.',
      en: 'Statistical manipulation: non-seasonally adjusted figure chosen because it sounds more dramatic. Adjusted figure actually shows improvement.',
    },
  },
  {
    id: 'pol-8',
    author: { de: 'Vereinte Nationen', en: 'United Nations' },
    content: {
      de: 'IPCC-Sonderbericht veröffentlicht: Globale Erwärmung hat 1,3°C erreicht. Bei aktuellem Pfad: 2,7°C bis 2100. 47 Handlungsempfehlungen. Volltext (EN): ipcc.ch/sr-2025',
      en: 'IPCC special report released: global warming has reached 1.3°C. Current trajectory: 2.7°C by 2100. 47 policy recommendations. Full text: ipcc.ch/sr-2025',
    },
    engagement: { likes: 8765, shares: 4567, comments: 1234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Seriöse internationale Kommunikation: Peer-reviewed Daten, konkrete Projektionen, Handlungsempfehlungen, Originalquelle verlinkt.',
      en: 'Credible international communication: peer-reviewed data, concrete projections, policy recommendations, original source linked.',
    },
  },
  {
    id: 'pol-9',
    author: { de: 'MdB Sabine W.', en: 'Sen. Sabine W.' },
    content: {
      de: 'Statt über den Skandal in ihrem eigenen Ministerium zu reden, lenkt die Ministerin ab und redet über Digitalisierung. Typisch! Was hat SIE zu verbergen? Die wahren Fragen bleiben unbeantwortet!',
      en: 'Instead of addressing the scandal in her own ministry, the minister deflects and talks about digitalization. Typical! What is SHE hiding? The real questions remain unanswered!',
    },
    engagement: { likes: 23456, shares: 8901, comments: 3456 },
    isAuthentic: false,
    redFlags: [
      { de: 'Whataboutism — Ablenkungsvorwurf als eigene Ablenkung', en: 'Whataboutism — accusation of deflection as own deflection' },
      { de: 'Suggestivfrage ("Was hat SIE zu verbergen?")', en: 'Leading question ("What is SHE hiding?")' },
      { de: 'Keine konkreten Fakten oder Fragen', en: 'No concrete facts or questions' },
    ],
    techniquesUsed: ['ad_hominem', 'framing', 'emotional_appeal', 'reactance_theory'],
    explanation: {
      de: 'Ad-Hominem-Angriff mit Whataboutism: Statt sachlicher Kritik werden Verdächtigungen gestreut. Die Suggestivfrage unterstellt Schuld.',
      en: 'Ad hominem attack with whataboutism: instead of factual criticism, suspicions are spread. The leading question implies guilt.',
    },
  },
  {
    id: 'pol-10',
    author: { de: 'Bundeswahlleiter', en: 'Federal Election Commission' },
    content: {
      de: 'Amtliches Endergebnis Landtagswahl Sachsen 2025: CDU 31,2%, AfD 28,8%, BSW 14,1%, SPD 8,3%, Grüne 6,2%, Linke 4,8%. Wahlbeteiligung: 71,4%. Alle Ergebnisse: bundeswahlleiter.de/sachsen2025',
      en: 'Official final result state election 2025: Party A 31.2%, Party B 28.8%, Party C 14.1%, Party D 8.3%, Party E 6.2%, Party F 4.8%. Turnout: 71.4%. All results: elections.gov/state2025',
    },
    engagement: { likes: 5678, shares: 3456, comments: 2345 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Amtliche Wahlkommunikation: Exakte Zahlen, vollständiges Ergebnis, Wahlbeteiligung, offizielle Quelle.',
      en: 'Official election communication: exact figures, complete results, turnout, official source.',
    },
  },
  {
    id: 'pol-11',
    author: { de: 'DigitalSecurity Lab', en: 'DigitalSecurity Lab' },
    content: {
      de: '⚠️ Warnung: Deepfake-Video von Bundeskanzler im Umlauf. Analyse: Lippenbewegungen asynchron, Beleuchtung inkonsistent, Quelle: Telegram-Kanal "PatriotNews". NICHT teilen. Analyse: digsec-lab.de/deepfake-alert-2025',
      en: '⚠️ Warning: Deepfake video of chancellor circulating. Analysis: lip movements asynchronous, lighting inconsistent, source: Telegram channel "PatriotNews". DO NOT share. Analysis: digsec-lab.org/deepfake-alert-2025',
    },
    engagement: { likes: 6789, shares: 4567, comments: 1234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Verantwortungsvolle Deepfake-Warnung: Technische Merkmale benannt, Quelle identifiziert, klare Handlungsempfehlung, Analyse verlinkt.',
      en: 'Responsible deepfake warning: technical indicators named, source identified, clear action recommendation, analysis linked.',
    },
  },
  {
    id: 'pol-12',
    author: { de: 'Investigativ-Team @Spiegel', en: 'Investigative Team @NYT' },
    content: {
      de: 'Exklusiv: Interne Dokumente zeigen, wie Lobbyisten den Gesetzentwurf beeinflussten. 14 Monate Recherche, 230 Seiten Akten, 40 Interviews. Teil 1 unserer Serie: spiegel.de/lobbyismus-2025',
      en: 'Exclusive: Internal documents show how lobbyists influenced the bill. 14 months of research, 230 pages of records, 40 interviews. Part 1 of our series: nytimes.com/lobbying-2025',
    },
    engagement: { likes: 12345, shares: 8901, comments: 2345 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Investigativer Journalismus: Transparente Methodik, konkreter Umfang, Originaldokumente, etabliertes Medium.',
      en: 'Investigative journalism: transparent methodology, concrete scope, original documents, established outlet.',
    },
  },
  {
    id: 'pol-13',
    author: { de: 'Volksstimme_2025', en: 'PeoplesVoice_2025' },
    content: {
      de: 'DIE da oben gegen UNS hier unten! Die Elite lacht über euch! Nur EINE Partei steht wirklich für das Volk! Die anderen sind alle GLEICH — korrupt und verlogen! #Volkspartei #Systemwechsel',
      en: 'THOSE up there against US down here! The elite laughs at you! Only ONE party truly stands for the people! All others are the SAME — corrupt and deceitful! #PeoplesParty #SystemChange',
    },
    engagement: { likes: 56789, shares: 23456, comments: 8901 },
    isAuthentic: false,
    redFlags: [
      { de: 'Us-vs-Them-Framing ("Die da oben" vs. "UNS")', en: 'Us-vs-them framing ("Those up there" vs. "US")' },
      { de: 'Pauschale Verurteilung aller Alternativen', en: 'Blanket condemnation of all alternatives' },
      { de: 'Populistische Vereinfachung', en: 'Populist oversimplification' },
    ],
    techniquesUsed: ['framing', 'false_dichotomy', 'emotional_appeal', 'ad_hominem', 'repetition'],
    explanation: {
      de: 'Populistisches Us-vs-Them: Komplexe Politik wird auf Gut gegen Böse reduziert. Alle Alternativen werden pauschal diskreditiert.',
      en: 'Populist us-vs-them: complex politics reduced to good vs. evil. All alternatives are blanketly discredited.',
    },
  },
  {
    id: 'pol-14',
    author: { de: 'Bundespressekonferenz', en: 'Government Press Conference' },
    content: {
      de: 'Gemeinsame Erklärung: Koalitionspartner einigen sich auf Kompromiss beim Bürgergeld. Regelsatz +4,2%. Sanktionsreform ab Q3. Gegenfinanzierung über Subventionsabbau. Details: bundesregierung.de/buergergeld-reform',
      en: 'Joint statement: coalition partners agree on welfare reform compromise. Base rate +4.2%. Sanctions reform from Q3. Funded by subsidy reduction. Details: government.gov/welfare-reform',
    },
    engagement: { likes: 2345, shares: 1234, comments: 567 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Sachliche Regierungskommunikation: Konkreter Kompromiss, Zahlen, Zeitrahmen, Finanzierung genannt, Quellenlink.',
      en: 'Factual government communication: concrete compromise, numbers, timeline, funding specified, source link.',
    },
  },
  {
    id: 'pol-15',
    author: { de: 'RetteUnsereZukunft.de', en: 'SaveOurFuture.org' },
    content: {
      de: '🚨 Bereits 2.847.391 haben unterschrieben! Bist DU dabei? Wenn wir MORGEN nicht 3 Millionen erreichen, war alles umsonst! Diese Petition kann ALLES verändern! retteunserezukunft.de/petition',
      en: '🚨 Already 2,847,391 have signed! Are YOU in? If we don\'t reach 3 million by TOMORROW, it was all for nothing! This petition can change EVERYTHING! saveourfuture.org/petition',
    },
    engagement: { likes: 34567, shares: 23456, comments: 5678 },
    isAuthentic: false,
    redFlags: [
      { de: 'Künstlicher Zeitdruck ("MORGEN")', en: 'Artificial time pressure ("TOMORROW")' },
      { de: 'Überpräzise Zahl suggeriert Echtheit', en: 'Overly precise number suggests authenticity' },
      { de: 'Alles-oder-Nichts-Framing ("alles umsonst")', en: 'All-or-nothing framing ("all for nothing")' },
    ],
    techniquesUsed: ['scarcity', 'social_proof', 'anchoring', 'emotional_appeal', 'false_dichotomy'],
    explanation: {
      de: 'Petition mit manipulativen Elementen: Die künstliche Deadline und das Alles-oder-Nichts-Framing erzeugen Druck. Die präzise Zahl wirkt authentisch.',
      en: 'Petition with manipulative elements: artificial deadline and all-or-nothing framing create pressure. The precise number appears authentic.',
    },
  },
  {
    id: 'pol-16',
    author: { de: 'TU München — Forschung', en: 'MIT Research' },
    content: {
      de: 'Neue Studie unseres Lehrstuhls für Politikwissenschaft: Analyse von 12.000 Social-Media-Posts zeigt Muster in Wahlkampfkommunikation. Peer-reviewed in PNAS. Open Access: tum.de/pol-study-2025',
      en: 'New study from our Political Science department: analysis of 12,000 social media posts reveals patterns in campaign communication. Peer-reviewed in PNAS. Open access: mit.edu/pol-study-2025',
    },
    engagement: { likes: 3456, shares: 1876, comments: 234 },
    isAuthentic: true,
    redFlags: [],
    techniquesUsed: [],
    explanation: {
      de: 'Akademische Kommunikation: Peer-Review, konkreter Datensatz, Open Access, etablierte Universität.',
      en: 'Academic communication: peer-reviewed, concrete dataset, open access, established university.',
    },
  },
  {
    id: 'pol-17',
    author: { de: 'Demokratie_Watchdog', en: 'Democracy_Watchdog' },
    content: {
      de: '🇷🇺 Dringend! Unsere Freunde in [Land X] brauchen EURE Unterstützung! Die westlichen Medien LÜGEN über die Situation! Hier die WAHRE Geschichte: [Link zu RT-Spiegel] #Solidarität #Wahrheit',
      en: '🇷🇺 Urgent! Our friends in [Country X] need YOUR support! Western media are LYING about the situation! Here\'s the TRUE story: [Link to state media mirror] #Solidarity #Truth',
    },
    engagement: { likes: 23456, shares: 15678, comments: 4567 },
    isAuthentic: false,
    redFlags: [
      { de: 'Link zu staatlich kontrolliertem Medium', en: 'Link to state-controlled media' },
      { de: 'Pauschale Delegitimierung westlicher Medien', en: 'Blanket delegitimization of Western media' },
      { de: 'Emotionaler Solidaritätsappell', en: 'Emotional solidarity appeal' },
      { de: 'Verdacht auf koordinierte Einflussoperation', en: 'Suspected coordinated influence operation' },
    ],
    techniquesUsed: ['framing', 'emotional_appeal', 'reactance_theory', 'digital_influence', 'narrative_persuasion'],
    explanation: {
      de: 'Verdacht auf ausländische Einflussoperation: Tarnung als Solidarität, Delegitimierung unabhängiger Medien, Weiterleitung zu staatlichem Narrativ.',
      en: 'Suspected foreign influence operation: disguised as solidarity, delegitimizing independent media, redirecting to state narrative.',
    },
  },
];
