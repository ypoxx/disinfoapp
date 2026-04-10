import type { Exercise } from '../types';

export const responseChoices: Exercise[] = [
  {
    id: 'rc-1',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ihr Unternehmen wird in einem viralen Tweet falsch beschuldigt, Kundendaten verkauft zu haben. Der Tweet hat 15.000 Retweets. Was tun Sie?',
      en: 'Your company is falsely accused in a viral tweet of selling customer data. The tweet has 15,000 retweets. What do you do?',
    },
    options: [
      {
        de: 'Schnell mit Fakten antworten, dabei sachlich bleiben und Belege liefern',
        en: 'Respond quickly with facts, stay professional, and provide evidence',
      },
      {
        de: 'Den Tweet ignorieren - Aufmerksamkeit verstärkt nur die Reichweite',
        en: 'Ignore the tweet — attention only amplifies its reach',
      },
      {
        de: 'Sofort rechtliche Schritte androhen',
        en: 'Immediately threaten legal action',
      },
      {
        de: 'Einen emotionalen Gegenpost veröffentlichen',
        en: 'Publish an emotional counter-post',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei 15.000 Retweets ist Ignorieren keine Option mehr — die Falschinformation verbreitet sich bereits. Eine sachliche, faktenbasierte Antwort mit Belegen (z.B. Link zum Datenschutzbericht) ist die beste Strategie. Rechtliche Drohungen wirken defensiv und emotionale Gegenreaktionen eskalieren.',
      en: 'At 15,000 retweets, ignoring is no longer an option — the false information is already spreading. A calm, fact-based response with evidence (e.g., a link to your data protection report) is the best strategy. Legal threats come across as defensive, and emotional counter-reactions only escalate.',
    },
    points: 15,
    relatedTechniques: ['framing', 'emotional_appeal'],
  },
  {
    id: 'rc-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ein Faktencheck-Portal veröffentlicht eine fehlerhafte Analyse über Ihre Organisation. Was ist der beste erste Schritt?',
      en: 'A fact-checking outlet publishes a flawed analysis about your organization. What is the best first step?',
    },
    options: [
      {
        de: 'Das Portal direkt kontaktieren und eine Korrektur mit Belegen einfordern',
        en: 'Contact the outlet directly and request a correction with supporting evidence',
      },
      {
        de: 'Eine Gegendarstellung auf Social Media posten',
        en: 'Post a rebuttal on social media',
      },
      {
        de: 'Die eigenen Mitarbeiter mobilisieren, um negative Kommentare zu schreiben',
        en: 'Mobilize your employees to write negative comments',
      },
      {
        de: 'Abwarten, ob jemand den Fehler bemerkt',
        en: 'Wait and see if someone notices the error',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Seriöse Faktencheck-Portale haben Korrekturprozesse. Der direkte, professionelle Kontakt mit konkreten Belegen ist am effektivsten. Mitarbeiter zu mobilisieren wäre Astroturfing — eine unethische Kommunikationstechnik.',
      en: 'Reputable fact-checking outlets have correction processes. Direct, professional contact with concrete evidence is the most effective approach. Mobilizing employees would be astroturfing — an unethical communication technique.',
    },
    points: 15,
    relatedTechniques: ['authority'],
  },
  {
    id: 'rc-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Sie entdecken, dass mehrere Social-Media-Accounts koordiniert Falschinformationen über Ihren Kunden verbreiten. Die Accounts sehen authentisch aus. Was ist Ihre Strategie?',
      en: 'You discover that multiple social media accounts are spreading false information about your client in a coordinated manner. The accounts look authentic. What is your strategy?',
    },
    options: [
      {
        de: 'Beweise dokumentieren, bei der Plattform melden, parallel ein transparentes Statement vorbereiten',
        en: 'Document evidence, report to the platform, and prepare a transparent statement in parallel',
      },
      {
        de: 'Jeden einzelnen Account öffentlich als Fake entlarven',
        en: 'Publicly expose each individual account as fake',
      },
      {
        de: 'Eigene koordinierte Gegenaccounts erstellen',
        en: 'Create your own coordinated counter-accounts',
      },
      {
        de: 'Nur intern informieren und abwarten',
        en: 'Only inform internally and wait',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Professionelles Vorgehen: (1) Beweissicherung (Screenshots, Zeitstempel), (2) Plattform-Meldung, (3) Transparentes Statement über die Kampagne. Gegenaccounts zu erstellen wäre unethisch. Öffentliches Entlarven kann kontraproduktiv sein (Streisand-Effekt).',
      en: 'Professional approach: (1) Secure evidence (screenshots, timestamps), (2) report to the platform, (3) issue a transparent statement about the campaign. Creating counter-accounts would be unethical. Public exposure can backfire (Streisand effect).',
    },
    points: 15,
    relatedTechniques: ['social_proof', 'digital_influence'],
  },
  {
    id: 'rc-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Deepfake-Video zeigt Ihren CEO bei einer angeblichen Bestechungsübergabe. Das Video verbreitet sich schnell. Was hat höchste Priorität?',
      en: 'A deepfake video shows your CEO in an alleged bribery exchange. The video is spreading rapidly. What is the highest priority?',
    },
    options: [
      {
        de: 'Sofort ein offizielles Dementi mit Alibibibeweis veröffentlichen und Forensik-Analyse beauftragen',
        en: 'Immediately issue an official denial with alibi evidence and commission a forensic analysis',
      },
      {
        de: 'Das Video auf allen Plattformen melden lassen',
        en: 'Report the video on all platforms',
      },
      {
        de: 'Eine Pressekonferenz für morgen einberufen',
        en: 'Schedule a press conference for tomorrow',
      },
      {
        de: 'Die Polizei informieren und sonst nichts tun',
        en: 'Inform the police and do nothing else',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei Deepfakes zählt Geschwindigkeit. Jede Stunde ohne Dementi festigt die Falschdarstellung. Ein schnelles offizielles Statement mit konkretem Alibibibeweis (z.B. "CEO war zu diesem Zeitpunkt in Meeting X") plus forensische Analyse des Videos ist die beste Kombination.',
      en: 'With deepfakes, speed is critical. Every hour without a denial reinforces the false narrative. A quick official statement with concrete alibi evidence (e.g., "The CEO was in meeting X at that time") combined with a forensic analysis of the video is the strongest approach.',
    },
    points: 15,
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'rc-5',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Ihre Organisation plant ein kontroverses Projekt. Sie wissen, dass Gegner bald eine Negativkampagne starten werden. Was tun Sie präventiv?',
      en: 'Your organization is planning a controversial project. You know that opponents will soon launch a negative campaign. What do you do preemptively?',
    },
    options: [
      {
        de: 'Prebunking: Proaktiv transparente Informationen veröffentlichen, bevor die Kampagne startet',
        en: 'Prebunking: Proactively publish transparent information before the campaign launches',
      },
      {
        de: 'Abwarten und nur reagieren, wenn die Kampagne tatsächlich startet',
        en: 'Wait and only respond once the campaign actually launches',
      },
      {
        de: 'Die Gegner vorsorglich diskreditieren',
        en: 'Preemptively discredit the opponents',
      },
      {
        de: 'Das Projekt geheim halten, so lange es geht',
        en: 'Keep the project secret for as long as possible',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Prebunking (auch "Inoculation") ist die effektivste Prävention: Menschen werden widerstandsfähiger gegen Manipulation, wenn sie vorher über die zu erwartenden Techniken informiert werden. Die Forschung zeigt, dass proaktive Transparenz wirksamer ist als reaktive Korrekturen.',
      en: 'Prebunking (also known as "inoculation") is the most effective prevention: People become more resilient to manipulation when they are informed about the expected techniques beforehand. Research shows that proactive transparency is more effective than reactive corrections.',
    },
    points: 15,
    relatedTechniques: ['narrative_persuasion', 'framing'],
  },
  // --- New exercises for uncovered techniques ---
  {
    id: 'rc-6',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ein TV-Sender zeigt vor einem Interview mit Ihrem CEO bedrohliche Bilder Ihrer Fabrik mit dunklem Rauch (in Wahrheit harmloser Wasserdampf). Das Publikum ist bereits negativ eingestimmt. Wie reagieren Sie?',
      en: 'A TV channel shows ominous images of your factory with dark smoke (actually harmless steam) before an interview with your CEO. The audience is already negatively primed. How do you respond?',
    },
    options: [
      { de: 'Beschwerde beim Sender einreichen und das Interview absagen', en: 'File a complaint with the channel and cancel the interview' },
      { de: 'Im Interview direkt die Bildwahl ansprechen und sachlich den Unterschied zwischen Rauch und Dampf erklären', en: 'Directly address the image choice in the interview and factually explain the difference between smoke and steam' },
      { de: 'Nach dem Interview einen wütenden Post auf Social Media veröffentlichen', en: 'Publish an angry post on social media after the interview' },
      { de: 'Die Bilder ignorieren und nur über das eigentliche Thema sprechen', en: 'Ignore the images and only talk about the actual topic' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Priming direkt ansprechen: Wenn man die manipulative Rahmung explizit benennt ("Diese Bilder zeigen Wasserdampf, keinen Rauch"), verliert sie ihre Wirkung. Absagen oder Ignorieren überlässt dem Sender die Deutungshoheit.',
      en: 'Address priming directly: When you explicitly name the manipulative framing ("Those images show steam, not smoke"), it loses its effect. Canceling or ignoring leaves narrative control to the channel.',
    },
    points: 15,
    relatedTechniques: ['priming'],
  },
  {
    id: 'rc-7',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Eine Lobbygruppe hat Ihrer Organisation kostenloses Sponsoring für eine Veranstaltung angeboten. Jetzt fordert sie im Gegenzug öffentliche Unterstützung für ein umstrittenes Gesetz. Wie gehen Sie vor?',
      en: 'A lobby group offered your organization free sponsorship for an event. Now they demand public support for a controversial bill in return. How do you proceed?',
    },
    options: [
      { de: 'Transparent kommunizieren, dass Sponsoring keine politische Stellungnahme impliziert, und eine klare Sponsoring-Policy veröffentlichen', en: 'Transparently communicate that sponsorship does not imply political endorsement, and publish a clear sponsoring policy' },
      { de: 'Die Unterstützung leisten, um die Beziehung nicht zu gefährden', en: 'Provide the support to avoid jeopardizing the relationship' },
      { de: 'Das Sponsoring rückwirkend zurückzahlen', en: 'Retroactively repay the sponsorship' },
      { de: 'Die Lobbygruppe öffentlich anprangern', en: 'Publicly denounce the lobby group' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reziprozitätsfalle erkennen und Grenzen setzen: Transparenz über die Trennung von Sponsoring und politischer Positionierung schützt die Glaubwürdigkeit. Eine klare Policy verhindert zukünftige Abhängigkeiten.',
      en: 'Recognize the reciprocity trap and set boundaries: Transparency about the separation of sponsorship and political positioning protects credibility. A clear policy prevents future dependencies.',
    },
    points: 15,
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 'rc-8',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein beliebter lokaler Bürgermeister kritisiert öffentlich Ihr Bauprojekt. Die Community steht hinter ihm. Ein direkter Angriff auf ihn würde die Stimmung verschlechtern. Was tun Sie?',
      en: 'A popular local mayor publicly criticizes your construction project. The community stands behind him. A direct attack on him would worsen sentiment. What do you do?',
    },
    options: [
      { de: 'Den Bürgermeister einladen, das Projekt vor Ort zu besichtigen, und lokale Vorteile präsentieren', en: 'Invite the mayor to visit the project on-site and present local benefits' },
      { de: 'Eine Gegenkampagne starten, die seine Kritikpunkte widerlegt', en: 'Launch a counter-campaign refuting his criticism points' },
      { de: 'Über seinen Kopf hinweg direkt mit dem Gemeinderat verhandeln', en: 'Negotiate directly with the city council over his head' },
      { de: 'Abwarten, bis die Aufregung sich legt', en: 'Wait until the excitement dies down' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Liking-Effekt nutzen statt dagegen kämpfen: Den beliebten Bürgermeister zum Verbündeten machen, statt ihn zu bekämpfen. Eine persönliche Einladung signalisiert Respekt und gibt die Chance, durch Nähe und Fakten zu überzeugen.',
      en: 'Leverage the liking effect instead of fighting it: Turn the popular mayor into an ally rather than an opponent. A personal invitation signals respect and provides the chance to persuade through proximity and facts.',
    },
    points: 15,
    relatedTechniques: ['liking'],
  },
  {
    id: 'rc-9',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ihre Organisation hat ihre Klimastrategie geändert. Kritiker werfen Ihnen Scheinheiligkeit vor und zitieren alte Statements. Wie kommunizieren Sie die Kehrtwende?',
      en: 'Your organization changed its climate strategy. Critics accuse you of hypocrisy and cite old statements. How do you communicate the reversal?',
    },
    options: [
      { de: 'Die alten Statements leugnen oder herunterspielen', en: 'Deny or downplay the old statements' },
      { de: 'Proaktiv erklären, warum sich die Position geändert hat, mit konkreten Fakten und einem klaren Zeitstrahl der Entwicklung', en: 'Proactively explain why the position changed, with concrete facts and a clear timeline of the evolution' },
      { de: 'Die Kritiker als uninformiert bezeichnen', en: 'Call the critics uninformed' },
      { de: 'Schnell ein neues Thema setzen, um von der Kehrtwende abzulenken', en: 'Quickly set a new topic to distract from the reversal' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Konsistenz-Vorwürfe mit Transparenz begegnen: "Wir haben unsere Position geändert, weil neue Erkenntnisse X zeigten" ist glaubwürdiger als Leugnen. Ein Zeitstrahl zeigt, dass die Änderung durchdacht war, nicht opportunistisch.',
      en: 'Counter consistency accusations with transparency: "We changed our position because new findings X emerged" is more credible than denial. A timeline shows the change was deliberate, not opportunistic.',
    },
    points: 15,
    relatedTechniques: ['consistency'],
  },
  {
    id: 'rc-10',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'In einer Podiumsdiskussion greift Ihr Gegner den Bildungsweg Ihrer Sprecherin an statt ihre Argumente. Das Publikum ist verunsichert. Was ist die beste Reaktion?',
      en: 'In a panel discussion, your opponent attacks your spokesperson\'s educational background instead of her arguments. The audience is unsettled. What is the best response?',
    },
    options: [
      { de: 'Den Angriff benennen ("Das ist ein persönlicher Angriff — zurück zum Thema") und sofort sachlich weiterargumentieren', en: 'Name the attack ("That is a personal attack — back to the topic") and immediately continue arguing factually' },
      { de: 'Mit einem persönlichen Gegenangriff kontern', en: 'Counter with a personal counter-attack' },
      { de: 'Die Sprecherin durch jemanden mit beeindruckenderem Lebenslauf ersetzen', en: 'Replace the spokesperson with someone with a more impressive resume' },
      { de: 'Den Angriff ignorieren', en: 'Ignore the attack' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad-Hominem-Technik explizit benennen und zur Sachebene zurückkehren. Das Publikum erkennt den Angriff, und die Sprecherin behält die Kontrolle. Gegenangriffe eskalieren; Ignorieren kann als Schwäche gedeutet werden.',
      en: 'Explicitly name the ad hominem technique and return to the factual level. The audience recognizes the attack, and the spokesperson maintains control. Counter-attacks escalate; ignoring can be perceived as weakness.',
    },
    points: 15,
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'rc-11',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Aktivist behauptet in einem viralen Video: "Die Firma will Naturschutzgebiete komplett zerstören!" In Wahrheit plant Ihr Unternehmen eine begrenzte, genehmigte Erweiterung mit Ausgleichsmaßnahmen. Wie reagieren Sie?',
      en: 'An activist claims in a viral video: "The company wants to completely destroy nature reserves!" In reality, your company plans a limited, approved expansion with compensation measures. How do you respond?',
    },
    options: [
      { de: 'Die Strohmann-Darstellung benennen, die genehmigten Pläne mit Karten und Genehmigungsdokumenten veröffentlichen', en: 'Name the straw man misrepresentation, publish the approved plans with maps and permit documents' },
      { de: 'Den Aktivisten verklagen', en: 'Sue the activist' },
      { de: 'Ein eigenes emotionales Gegenvideo produzieren', en: 'Produce your own emotional counter-video' },
      { de: 'Die Behauptung einfach dementieren', en: 'Simply deny the claim' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Strohmann-Darstellungen mit Primärquellen widerlegen: Karten, Genehmigungen und Ausgleichspläne sprechen für sich. Die verzerrte Darstellung direkt benennen hilft dem Publikum, die Manipulation zu erkennen.',
      en: 'Refute straw man representations with primary sources: Maps, permits, and compensation plans speak for themselves. Directly naming the distorted representation helps the audience recognize the manipulation.',
    },
    points: 15,
    relatedTechniques: ['straw_man'],
  },
  {
    id: 'rc-12',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Sie entdecken, dass ein Konkurrent gezielt personalisierte Falschinformationen an Ihre B2B-Kunden versendet, basierend auf deren LinkedIn-Profilen und Brancheninteressen. Was tun Sie?',
      en: 'You discover that a competitor is sending targeted, personalized misinformation to your B2B clients based on their LinkedIn profiles and industry interests. What do you do?',
    },
    options: [
      { de: 'Jeden einzelnen Kunden direkt kontaktieren und die Falschinformation richtigstellen', en: 'Directly contact each individual client and correct the misinformation' },
      { de: 'Beweise sichern, Kunden proaktiv mit Fakten-Update informieren und rechtliche Schritte gegen den Konkurrenten prüfen', en: 'Secure evidence, proactively inform clients with a fact update, and evaluate legal action against the competitor' },
      { de: 'Eigene Microtargeting-Kampagne gegen den Konkurrenten starten', en: 'Launch your own microtargeting campaign against the competitor' },
      { de: 'Abwarten, ob Kunden sich bei Ihnen melden', en: 'Wait and see if clients contact you' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Dreifach-Strategie gegen Microtargeting: (1) Beweissicherung für mögliche rechtliche Schritte, (2) proaktive Kunden-Kommunikation mit Fakten, (3) rechtliche Prüfung. Gegen-Microtargeting wäre unethisch und könnte eskalieren.',
      en: 'Triple strategy against microtargeting: (1) Evidence preservation for potential legal action, (2) proactive client communication with facts, (3) legal evaluation. Counter-microtargeting would be unethical and could escalate.',
    },
    points: 15,
    relatedTechniques: ['microtargeting'],
  },
  {
    id: 'rc-13',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ihr Unternehmen wird beschuldigt, in seiner App Dark Patterns zu verwenden (versteckte Kosten, schwer auffindbare Kündigung). Verbraucherschützer haben das Thema aufgegriffen. Wie reagieren Sie?',
      en: 'Your company is accused of using dark patterns in its app (hidden costs, hard-to-find cancellation). Consumer advocates have picked up the topic. How do you respond?',
    },
    options: [
      { de: 'Sofort ein UX-Audit starten, Ergebnisse transparent veröffentlichen und konkrete Verbesserungen mit Zeitplan ankündigen', en: 'Immediately start a UX audit, transparently publish results, and announce concrete improvements with a timeline' },
      { de: 'Die Vorwürfe als "Missverständnis" abtun', en: 'Dismiss the accusations as a "misunderstanding"' },
      { de: 'Darauf hinweisen, dass alle Konkurrenten es genauso machen', en: 'Point out that all competitors do the same' },
      { de: 'Die Änderungen still durchführen, ohne die Vorwürfe zu kommentieren', en: 'Make changes quietly without commenting on the accusations' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Transparente Selbstkorrektur ist die stärkste Antwort auf Dark-Pattern-Vorwürfe. Ein öffentliches Audit zeigt Ernsthaftigkeit, ein Zeitplan Verbindlichkeit. "Alle machen es" und stilles Korrigieren untergraben das Vertrauen.',
      en: 'Transparent self-correction is the strongest response to dark pattern accusations. A public audit shows seriousness, a timeline shows commitment. "Everyone does it" and quiet fixes undermine trust.',
    },
    points: 15,
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'rc-14',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Ihr Team soll eine Gesundheitskampagne zur Impfbereitschaft gestalten. Wie nutzen Sie Nudging ethisch vertretbar?',
      en: 'Your team is designing a health campaign to increase vaccination willingness. How do you use nudging ethically?',
    },
    options: [
      { de: 'Impftermine als Standard-Option in Arztpraxen vorschlagen (Opt-out statt Opt-in), transparent kommuniziert', en: 'Suggest vaccination appointments as default option in doctor\'s offices (opt-out instead of opt-in), transparently communicated' },
      { de: 'Angst vor Krankheit schüren, um Impfbereitschaft zu erhöhen', en: 'Stoke fear of disease to increase vaccination willingness' },
      { de: 'Falsche Statistiken über Impfquoten verbreiten (Social Proof)', en: 'Spread false statistics about vaccination rates (social proof)' },
      { de: 'Ungeimpfte öffentlich stigmatisieren', en: 'Publicly stigmatize unvaccinated people' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ethisches Nudging: Opt-out-Defaults erhöhen die Teilnahme, ohne die Wahlfreiheit einzuschränken (libertärer Paternalismus). Transparenz ist entscheidend — die Default-Option muss als solche erkennbar sein. Angst, Falschdaten und Stigmatisierung sind manipulativ, nicht nudging.',
      en: 'Ethical nudging: Opt-out defaults increase participation without restricting freedom of choice (libertarian paternalism). Transparency is key — the default option must be recognizable as such. Fear, false data, and stigmatization are manipulative, not nudging.',
    },
    points: 15,
    relatedTechniques: ['nudging'],
  },
  {
    id: 'rc-15',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'KI-generierte Fake-Bewertungen überschwemmen die Bewertungsseiten Ihres Produkts. Die Bewertungen klingen authentisch und sind kaum von echten zu unterscheiden. Was ist Ihre Strategie?',
      en: 'AI-generated fake reviews flood your product\'s review sites. The reviews sound authentic and are nearly indistinguishable from real ones. What is your strategy?',
    },
    options: [
      { de: 'Eigene KI-generierte positive Bewertungen veröffentlichen, um das Gleichgewicht herzustellen', en: 'Publish your own AI-generated positive reviews to restore balance' },
      { de: 'Plattformen kontaktieren, KI-Erkennungstools nutzen, parallel verifizierte Kundenstimmen sammeln und prominent platzieren', en: 'Contact platforms, use AI detection tools, in parallel collect verified customer voices and feature them prominently' },
      { de: 'Alle Bewertungsportale deaktivieren', en: 'Deactivate all review portals' },
      { de: 'Die Fake-Bewertungen einzeln kommentieren und als Fälschung markieren', en: 'Individually comment on fake reviews and mark them as fabricated' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Gegen KI-Überzeugung hilft Authentizität: Verifizierte, echte Kundenstimmen sind das stärkste Gegengewicht. Plattform-Meldungen und KI-Erkennungstools bekämpfen die Symptome. Eigene Fake-Bewertungen wären unethisch und illegal.',
      en: 'Against AI persuasion, authenticity helps: Verified, real customer voices are the strongest counterweight. Platform reports and AI detection tools combat the symptoms. Creating your own fake reviews would be unethical and illegal.',
    },
    points: 15,
    relatedTechniques: ['ai_persuasion'],
  },
  {
    id: 'rc-16',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ein Konkurrent bietet in seiner Werbung einen "Vergleichsrechner" an. Der Startpreis (Anker) Ihres Produkts ist dabei absichtlich 40% zu hoch angesetzt. Wie reagieren Sie?',
      en: 'A competitor offers a "comparison calculator" in their advertising. Your product\'s starting price (anchor) is intentionally set 40% too high. How do you respond?',
    },
    options: [
      { de: 'Den gleichen Rechner auf Ihrer Seite mit korrekten Zahlen veröffentlichen und die Diskrepanz sachlich dokumentieren', en: 'Publish the same calculator on your site with correct numbers and factually document the discrepancy' },
      { de: 'Den Konkurrenten öffentlich als Lügner bezeichnen', en: 'Publicly call the competitor a liar' },
      { de: 'Ihre Preise senken, um dem falschen Vergleich zu entsprechen', en: 'Lower your prices to match the false comparison' },
      { de: 'Nichts tun — Kunden werden es selbst merken', en: 'Do nothing — customers will figure it out themselves' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Anchoring-Manipulation mit Transparenz begegnen: Ein eigener, korrekter Vergleich mit dokumentierter Diskrepanz entlarvt den falschen Anker. Sachlichkeit überzeugt mehr als emotionale Vorwürfe.',
      en: 'Counter anchoring manipulation with transparency: Your own correct comparison with documented discrepancy exposes the false anchor. Objectivity is more convincing than emotional accusations.',
    },
    points: 15,
    relatedTechniques: ['anchoring'],
  },
  {
    id: 'rc-17',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Eine falsche Behauptung über Ihre Branche ("Produkt X verursacht Krebs") wird seit Jahren wiederholt, obwohl sie mehrfach widerlegt wurde. Sie taucht gerade wieder in Social Media auf. Was ist die beste Langzeitstrategie?',
      en: 'A false claim about your industry ("Product X causes cancer") has been repeated for years, despite being debunked multiple times. It is resurfacing on social media. What is the best long-term strategy?',
    },
    options: [
      { de: 'Die Widerlegung noch einmal veröffentlichen', en: 'Publish the debunking again' },
      { de: 'Eine dauerhafte Faktencheck-Seite erstellen, SEO-optimiert, die automatisch bei relevanten Suchanfragen erscheint', en: 'Create a permanent, SEO-optimized fact-check page that automatically appears for relevant search queries' },
      { de: 'Alle Erwähnungen juristisch verfolgen', en: 'Legally pursue all mentions' },
      { de: 'Die Behauptung ignorieren', en: 'Ignore the claim' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Gegen den Illusory Truth Effect braucht es eine dauerhafte Gegenerzählung, die genauso sichtbar ist wie die Falschbehauptung. SEO-optimierte Faktencheck-Seiten erreichen Menschen genau dann, wenn sie danach suchen. Einmalige Widerlegungen verblassen, juristische Verfolgung skaliert nicht.',
      en: 'Against the illusory truth effect, you need a permanent counter-narrative that is as visible as the false claim. SEO-optimized fact-check pages reach people exactly when they search for the topic. One-time debunking fades, legal action does not scale.',
    },
    points: 15,
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'rc-18',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Bot-Netzwerk verbreitet koordiniert negative Inhalte über Ihr Unternehmen auf mehreren Plattformen gleichzeitig. Die Inhalte werden von echten Nutzern geteilt. Was tun Sie zuerst?',
      en: 'A bot network is spreading coordinated negative content about your company across multiple platforms simultaneously. The content is being shared by real users. What do you do first?',
    },
    options: [
      { de: 'Sofort auf Social Media die Kampagne öffentlich entlarven', en: 'Immediately publicly expose the campaign on social media' },
      { de: 'Forensische Analyse der Accounts beauftragen, Beweise sichern, dann koordiniert bei allen Plattformen melden', en: 'Commission forensic analysis of the accounts, secure evidence, then file coordinated reports with all platforms' },
      { de: 'Eigene Bots einsetzen, um positive Inhalte zu verbreiten', en: 'Deploy your own bots to spread positive content' },
      { de: 'Alle Kommentare auf eigenen Kanälen deaktivieren', en: 'Disable all comments on your own channels' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Bei digitaler Einflussnahme ist Beweissicherung der wichtigste erste Schritt. Forensische Analyse identifiziert das Bot-Netzwerk, koordinierte Plattform-Meldungen erhöhen die Chance auf Löschung. Eigene Bots sind unethisch, vorschnelles Entlarven kann nach Paranoia aussehen.',
      en: 'With digital influence operations, evidence preservation is the most important first step. Forensic analysis identifies the bot network, coordinated platform reports increase the chance of removal. Your own bots are unethical, premature exposure can look paranoid.',
    },
    points: 15,
    relatedTechniques: ['digital_influence'],
  },
];
