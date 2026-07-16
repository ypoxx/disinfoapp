import type { Exercise } from '../../types';

// digital_influence — Phase 3 densification batch.
export const digitalInfluenceP3Exercises: Exercise[] = [
  {
    id: 'di-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist der dominante Treiber dieser Kampagne?',
      en: 'Which technique is the dominant driver of this campaign?',
    },
    scenario: {
      de: 'Für den Launch eures neuen Kopfhörers schlägt eine Agentur vor: Ein Netzwerk aus 400 eigens angelegten Accounts, die sich als unabhängige Erst-Käufer ausgeben, postet nach einem festen Zeitplan koordiniert nahezu wortgleiche Lob-Beiträge mit demselben Hashtag. Parallel liken und teilen tausende automatisierte Accounts (Bots) diese Beiträge, bis der Hashtag in die Trending-Liste rutscht. Echte Nutzerinnen und Nutzer sehen dann einen scheinbar organischen Hype und denken: „Anscheinend reden gerade alle darüber."',
      en: 'For the launch of your new headphones, an agency proposes: a network of 400 purpose-built accounts posing as independent early buyers posts near-identical praise, on a fixed schedule, coordinated around the same hashtag. In parallel, thousands of automated accounts (bots) like and share these posts until the hashtag slips into the trending list. Real users then see a seemingly organic hype and think: "Everyone seems to be talking about this right now."',
    },
    options: [
      { de: 'Digitale Einflussnahme (koordiniertes inauthentisches Verhalten / Astroturfing)', en: 'Digital influence (coordinated inauthentic behaviour / astroturfing)' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Repetition', en: 'Repetition' },
      { de: 'Microtargeting', en: 'Microtargeting' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der dominante Treiber ist digitale Einflussnahme: Die gesamte Kampagne steht und fällt mit einem koordinierten, inauthentischen Apparat — 400 gefälschte „Käufer"-Accounts plus Bot-Verstärkung, eigens gebaut, um den Trend-Algorithmus zu spielen und einen organischen Konsens zu fälschen (koordiniertes inauthentisches Verhalten / Astroturfing). Sozialer Beweis ist der psychologische Effekt, den die Kampagne AUSNUTZT („alle reden darüber") — aber sozialer Beweis als Technik hieße, echtes Mehrheitsverhalten sichtbar zu machen; sobald die Menge über gefälschte, gesteuerte Accounts fabriziert wird, ist die eigentliche Technik digitale Einflussnahme (manufacturierter sozialer Beweis). Repetition (derselbe Hashtag, das getaktete Posten) ist eine taktische Schicht innerhalb der Operation, nicht ihr Motor. Microtargeting fehlt völlig — es gibt keine personenbezogene Datenprofilierung, alle sehen denselben fabrizierten Trend. Grenze: einen Launch mit offengelegten Markenbotschaftern und echten Kundenstimmen anzuschieben ist legitim; Fake-Accounts und Bots einzusetzen, um unabhängige Graswurzel-Begeisterung zu simulieren, ist Astroturfing — täuschend und in der EU eine unzulässige unlautere Geschäftspraxis (verdeckte Werbung, vorgetäuschte Verbraucherstimmen).',
      en: 'The dominant driver is digital influence: the whole campaign stands or falls on a coordinated, inauthentic apparatus — 400 fake "buyer" accounts plus bot amplification, purpose-built to game the trending algorithm and fabricate an organic-looking consensus (coordinated inauthentic behaviour / astroturfing). Social proof is the psychological effect the campaign EXPLOITS ("everyone is talking about this") — but social proof as a technique would mean surfacing genuine majority behaviour; the moment the crowd is fabricated through fake, directed accounts, the operative technique is digital influence (manufactured social proof). Repetition (the same hashtag, the timed posting) is a tactical layer inside the operation, not its engine. Microtargeting is entirely absent — there is no per-person data profiling; everyone sees the same fabricated trend. Boundary: seeding a launch with disclosed brand ambassadors and real customer voices is legitimate; deploying fake accounts and bots to simulate independent grassroots enthusiasm is astroturfing — deceptive and, in the EU, an unlawful unfair commercial practice (hidden advertising, fake consumer representation).',
    },
    points: 20,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'social_proof', 'repetition'],
  },
  {
    id: 'di-p3-2',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team plant, die Reichweite einer neuen Nachhaltigkeits-Kampagne zu erhöhen. Welcher geplante Baustein überschreitet die Grenze von legitimer Reichweiten-Arbeit hin zu unzulässiger digitaler Einflussnahme?',
      en: 'Your team is planning to increase the reach of a new sustainability campaign. Which planned component crosses the line from legitimate reach-building into improper digital influence?',
    },
    scenario: {
      de: 'Geplante Bausteine der Kampagne:',
      en: 'Planned components of the campaign:',
    },
    options: [
      {
        de: 'Mitarbeitende ermutigen, die Kampagne in ihren eigenen Netzwerken zu teilen — mit dem klaren Hinweis, dass sie für das Unternehmen arbeiten.',
        en: 'Encourage employees to share the campaign in their own networks — with a clear note that they work for the company.',
      },
      {
        de: 'Bezahlte, deutlich als „Anzeige" gekennzeichnete Beiträge bei der Plattform schalten.',
        en: 'Run paid posts on the platform, clearly labelled as "advertising".',
      },
      {
        de: 'Eine Handvoll Influencer beauftragen, die die Zusammenarbeit transparent als bezahlte Partnerschaft ausweisen.',
        en: 'Commission a handful of influencers who transparently disclose the collaboration as a paid partnership.',
      },
      {
        de: '150 neu erstellte anonyme Profile betreiben, die sich als unabhängige Bürgerinnen und Bürger ausgeben und koordiniert dieselben Pro-Botschaften posten, um eine spontane Graswurzelbewegung vorzutäuschen.',
        en: 'Operate 150 newly created anonymous profiles posing as independent citizens that post the same pro-messages in a coordinated way, to fake a spontaneous grassroots movement.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Baustein 4 (Index 3) überschreitet die Grenze: Ein Netzwerk koordinierter, inauthentischer Accounts zu betreiben, die unabhängige Bürger vortäuschen, um eine spontane Graswurzelbewegung zu simulieren, ist Astroturfing bzw. koordiniertes inauthentisches Verhalten. Es täuscht darüber, WER da spricht, verletzt die Authentizitäts-Regeln der Plattformen und ist als verdeckte Werbung/vorgetäuschte Graswurzel eine unlautere Geschäftspraxis. Die anderen drei Bausteine erhöhen die Reichweite ehrlich, weil der Absender offengelegt ist: Mitarbeiter-Advocacy MIT Hinweis auf das Arbeitsverhältnis, klar gekennzeichnete bezahlte Anzeigen und Influencer, die die Partnerschaft als Werbung ausweisen, lassen das Publikum jederzeit wissen, wer hinter der Botschaft steht. Prüffrage für die Grenze: Sind Identität des Sprechers und Absender authentisch und offengelegt? Legitime Verstärkung erfindet niemals unabhängige Stimmen.',
      en: 'Component 4 (index 3) crosses the line: running a network of coordinated, inauthentic accounts that impersonate independent citizens to simulate a spontaneous grassroots movement is astroturfing, i.e. coordinated inauthentic behaviour. It deceives about WHO is speaking, breaches platforms’ authenticity rules, and as hidden advertising / fake grassroots is an unfair commercial practice. The other three amplify reach honestly because the sponsor is disclosed: employee advocacy WITH a note about the employment relationship, clearly labelled paid ads, and influencers marking the partnership as advertising all keep the audience aware of who stands behind the message. Boundary test: are the speaker’s identity and the sponsor authentic and disclosed? Legitimate amplification never invents independent voices.',
    },
    points: 15,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'social_proof'],
  },
  {
    id: 'di-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'Which technique is being used here?',
    },
    scenario: {
      de: 'Ein Unternehmen kauft ein Netzwerk aus tausenden gefälschten Social-Media-Accounts und automatisierten Bots, die sich als echte Menschen ausgeben, um seine Botschaften massenhaft zu verbreiten und einen Hashtag künstlich in die Trends zu heben.',
      en: 'A company buys a network of thousands of fake social media accounts and automated bots that pose as real people, in order to spread its messages en masse and push a hashtag into the trends artificially.',
    },
    options: [
      { de: 'Digitale Einflussnahme', en: 'Digital influence' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Knappheit (Scarcity)', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist digitale Einflussnahme in ihrer deutlichsten Form: gefälschte Accounts und Bots, die echte Menschen vortäuschen, um Botschaften künstlich zu verstärken und einen Trend zu fabrizieren (koordiniertes inauthentisches Verhalten). Der Hebel: Skalierung und vorgetäuschte Authentizität erzeugen den Eindruck breiter, organischer Zustimmung. Ein Autoritätsargument würde eine Experteninstanz als Beweis anführen — hier wird keine zitiert. Reziprozität würde mit einer Gegenleistung („erst geben, dann nehmen") arbeiten, Knappheit mit künstlich begrenzter Verfügbarkeit — beides fehlt. Grenze: eigene Beiträge offen zu bewerben ist legitim; Fake-Accounts und Bots einzusetzen, um Zustimmung vorzutäuschen, ist täuschend und verstößt gegen die Regeln der Plattformen.',
      en: 'This is digital influence in its most blatant form: fake accounts and bots impersonating real people to amplify messages artificially and fabricate a trend (coordinated inauthentic behaviour). The lever: scale plus faked authenticity create the impression of broad, organic agreement. An appeal to authority would cite an expert as proof — none is cited here. Reciprocity would work through a favour returned ("give first, then take"), scarcity through artificially limited availability — neither is present. Boundary: openly promoting your own posts is legitimate; deploying fake accounts and bots to fake agreement is deceptive and breaches platforms’ rules.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence'],
  },
  {
    id: 'di-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt dieses Vorgehen vor allem?',
      en: 'Which technique primarily shapes this approach?',
    },
    scenario: {
      de: 'Innerhalb von zwei Stunden erscheinen unter eurem neuen Produkt 300 Fünf-Sterne-Bewertungen. Auffällig: Die Accounts wurden fast alle am selben Tag angelegt, schreiben nahezu identische Sätze und haben sonst nie etwas bewertet. Eine Agentur hat sie beauftragt, um den Eindruck breiter Begeisterung zu erzeugen.',
      en: 'Within two hours, 300 five-star reviews appear under your new product. Tellingly, almost all the accounts were created on the same day, write near-identical sentences and have never reviewed anything else. An agency commissioned them to create the impression of broad enthusiasm.',
    },
    options: [
      { de: 'Digitale Einflussnahme', en: 'Digital influence' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Repetition', en: 'Repetition' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das prägende Merkmal ist digitale Einflussnahme: Die Bewertungen stammen aus einem koordinierten Netzwerk inauthentischer Accounts (am selben Tag erstellt, nahezu identischer Text, keine sonstige Aktivität, im Auftrag) — das ist koordiniertes inauthentisches Verhalten bzw. gefälschtes Engagement. Sozialer Beweis ist der verlockende Fast-Treffer: Die Bewertungen sollen genau über den Social-Proof-Reiz wirken („alle lieben es"). Aber sozialer Beweis als Technik meint das Sichtbarmachen ECHTEN Mehrheitsverhaltens; sobald die Menge über koordinierte Fake-Accounts fabriziert wird, ist die operative Technik digitale Einflussnahme (manufacturierter sozialer Beweis). Repetition (die nahezu identische Formulierung) ist ein Symptom der Koordination, nicht der Treiber. Ein Autoritätsargument wird nicht angeführt. Grenze: echte, verifizierte Käufer um ehrliche Bewertungen zu bitten ist legitim; gefälschte Bewertungen von Schein-Accounts zu beauftragen ist Astroturfing und unzulässig (gefälschte Verbraucherbewertungen sind eine verbotene unlautere Geschäftspraxis).',
      en: 'The defining feature is digital influence: the reviews come from a coordinated network of inauthentic accounts (created the same day, near-identical text, no other activity, commissioned) — that is coordinated inauthentic behaviour, i.e. fake engagement. Social proof is the tempting near-miss: the reviews are meant to work precisely through the social-proof cue ("everyone loves it"). But social proof as a technique means surfacing GENUINE majority behaviour; the moment the crowd is fabricated through coordinated fake accounts, the operative technique is digital influence (manufactured social proof). Repetition (the near-identical wording) is a symptom of the coordination, not the driver. No appeal to authority is made. Boundary: inviting real, verified buyers to leave honest reviews is legitimate; commissioning fake reviews from sham accounts is astroturfing and unlawful (fake consumer reviews are a banned unfair commercial practice).',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'social_proof'],
  },
  {
    id: 'di-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt vor allem hinter diesem Vorgehen?',
      en: 'Which technique primarily lies behind this approach?',
    },
    scenario: {
      de: 'Eine PR-Firma verteilt denselben vorformulierten Textbaustein an ein Netzwerk aus 200 koordinierten, teils automatisierten Accounts. Über Wochen streuen diese Accounts die Aussage wortgleich in Kommentarspalten, Foren und unter Nachrichtenartikeln, sodass sie überall gleichzeitig und aus scheinbar vielen unabhängigen Quellen auftaucht und wie ein breiter Konsens wirkt.',
      en: 'A PR firm distributes the same pre-written talking point to a network of 200 coordinated, partly automated accounts. Over weeks, these accounts seed the statement verbatim across comment sections, forums and under news articles, so it surfaces everywhere at once and from seemingly many independent sources, looking like a broad consensus.',
    },
    options: [
      { de: 'Digitale Einflussnahme', en: 'Digital influence' },
      { de: 'Repetition', en: 'Repetition' },
      { de: 'Illusorischer Wahrheitseffekt', en: 'Illusory truth effect' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das prägende Merkmal ist digitale Einflussnahme: Ein zentral gesteuertes Netzwerk aus 200 koordinierten, teils automatisierten Accounts verteilt dieselbe Botschaft, um viele scheinbar unabhängige Quellen und einen falschen Konsens vorzutäuschen (koordiniertes inauthentisches Verhalten). Repetition ist der verlockende Fast-Treffer — aber Repetition meint EINE Quelle, die dieselbe Botschaft immer wieder wiederholt; entscheidend ist hier die vorgetäuschte Vielstimmigkeit aus Fake-Accounts, nicht die Wiederholung an sich. Der illusorische Wahrheitseffekt (wiederholte Aussagen wirken glaubwürdiger) ist der beabsichtigte psychologische EFFEKT, nicht die eingesetzte Methode. Sozialer Beweis würde echtes Mehrheitsverhalten zeigen — hier wird es fabriziert. Wäre es EIN offen erkennbarer Markenaccount, der seinen Slogan wiederholt, wäre es Repetition; die manufacturierte Multi-Quellen-Illusion macht es zu digitaler Einflussnahme. Grenze: eine Kernbotschaft offen und konsistent zu kommunizieren ist legitim; sie über verdeckte, koordinierte Fake-Accounts als unabhängigen Konsens zu tarnen, ist täuschend.',
      en: 'The defining feature is digital influence: a centrally directed network of 200 coordinated, partly automated accounts distributes the same message to fake many seemingly independent sources and a false consensus (coordinated inauthentic behaviour). Repetition is the tempting near-miss — but repetition means ONE source repeating the same message again and again; what matters here is the faked multiplicity of voices from fake accounts, not the repetition itself. The illusory truth effect (repeated statements feel more credible) is the intended psychological EFFECT, not the method deployed. Social proof would display genuine majority behaviour — here it is fabricated. If it were ONE openly identifiable brand account repeating its slogan, it would be repetition; the manufactured multi-source illusion is what makes it digital influence. Boundary: communicating a core message openly and consistently is legitimate; disguising it as independent consensus through covert, coordinated fake accounts is deceptive.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'repetition', 'illusory_truth_effect'],
  },
  {
    id: 'di-p3-6',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Weil hinter den scheinbar unabhängigen Stimmen in Wahrheit ___ steckt, entsteht der täuschende Eindruck einer spontanen, breiten Bewegung.',
      en: 'Complete the sentence: Because behind the seemingly independent voices there is in fact ___, a deceptive impression of a spontaneous, broad movement arises.',
    },
    scenario: {
      de: 'Unter einem Gesetzesvorschlag, der eure Branche betrifft, tauchen über Nacht tausende gleichlautende Kommentare „besorgter Bürgerinnen und Bürger" auf. Eine Recherche zeigt: Fast alle Accounts wurden am selben Tag erstellt und werden von einer einzigen beauftragten Agentur betrieben.',
      en: 'Under a legislative proposal affecting your industry, thousands of identically worded comments from "concerned citizens" appear overnight. An investigation shows: almost all the accounts were created on the same day and are run by a single commissioned agency.',
    },
    options: [
      { de: 'ein zentral gesteuertes Netzwerk koordinierter, teils automatisierter Fake-Accounts', en: 'a centrally directed network of coordinated, partly automated fake accounts' },
      { de: 'eine einzige, immer wiederholte Kernbotschaft einer offen erkennbaren Quelle', en: 'a single, repeatedly hammered core message from an openly identifiable source' },
      { de: 'ein aus persönlichen Daten abgeleitetes, maßgeschneidertes Einzelprofil jedes Empfängers', en: 'a tailored individual profile of each recipient derived from personal data' },
      { de: 'eine anerkannte Experteninstanz, die als Beweis für die Position zitiert wird', en: 'a recognised expert authority cited as proof of the position' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur das zentral gesteuerte Netzwerk koordinierter Fake-Accounts passt: Die „unabhängigen" Stimmen sind in Wahrheit eine einzige Regie hinter tausenden inauthentischen Accounts — genau das erzeugt den falschen Eindruck einer spontanen Graswurzelbewegung (Astroturfing / koordiniertes inauthentisches Verhalten). Eine einzelne, offen erkennbare Quelle, die ihre Botschaft wiederholt, wäre Repetition und würde die vorgetäuschte Unabhängigkeit gerade nicht erzeugen. Ein aus persönlichen Daten abgeleitetes Einzelprofil beschreibt Microtargeting — hier sehen aber alle dieselben gleichlautenden Kommentare, es gibt keine personenbezogene Zuspitzung. Eine zitierte Experteninstanz wäre ein Autoritätsargument und hat mit gefälschten Bürgerstimmen nichts zu tun. Grenze: echte Betroffene zu mobilisieren, offen und transparent, ist legitimes Campaigning; gefälschte Bürgerstimmen zu fabrizieren, um Reichweite und Konsens vorzutäuschen, überschreitet die Linie.',
      en: 'Only the centrally directed network of coordinated fake accounts fits: the "independent" voices are in truth a single directing hand behind thousands of inauthentic accounts — exactly what creates the false impression of a spontaneous grassroots movement (astroturfing / coordinated inauthentic behaviour). A single, openly identifiable source repeating its message would be repetition and would precisely NOT produce the faked independence. A tailored individual profile derived from personal data describes microtargeting — but here everyone sees the same identically worded comments; there is no per-person tailoring. A cited expert authority would be an appeal to authority and has nothing to do with fabricated citizen voices. Boundary: mobilising genuinely affected people, openly and transparently, is legitimate campaigning; fabricating fake citizen voices to fake reach and consensus crosses the line.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence'],
  },
  {
    id: 'di-p3-7',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie reagierst du als Kommunikationsverantwortliche?',
      en: 'As the communications lead, how do you respond?',
    },
    scenario: {
      de: 'Eine Journalistin kontaktiert euch: Sie hat Belege, dass eine von euch beauftragte Sub-Agentur seit Monaten ein Netzwerk aus Bots und Fake-Accounts betreibt, das eure Produkte als „unabhängige Fans" lobt und Kritiker unter Druck setzt. Die Operation lief ohne dein Wissen. Sie bittet um eine Stellungnahme bis morgen.',
      en: 'A journalist contacts you: she has evidence that a sub-agency you commissioned has, for months, been running a network of bots and fake accounts that praise your products as "independent fans" and pressure critics. The operation ran without your knowledge. She asks for a statement by tomorrow.',
    },
    options: [
      {
        de: 'Ich stoppe die Operation sofort, sichere die Beweise, beende den Vertrag mit der Sub-Agentur, informiere die Plattform und lege proaktiv transparent offen, was geschah, samt Richtigstellung. Astroturfing ist eine unzulässige unlautere Geschäftspraxis und verstößt gegen die Plattform-Regeln; einmal belegt, verwandelt jede Vertuschung ein lösbares Problem in einen dauerhaften Vertrauens- und Rechtsskandal.',
        en: 'I stop the operation immediately, preserve the evidence, terminate the sub-agency’s contract, notify the platform, and proactively disclose transparently what happened, with a correction. Astroturfing is an unlawful unfair commercial practice and breaches platform rules; once documented, any cover-up turns a solvable problem into a lasting trust-and-legal scandal.',
      },
      {
        de: 'Ich lasse alle Fake-Accounts still löschen, bevor die Journalistin veröffentlicht, damit sich nichts mehr nachweisen lässt.',
        en: 'I quietly have all the fake accounts deleted before the journalist publishes, so nothing can be proven anymore.',
      },
      {
        de: 'Ich streite alles ab und stelle die Journalistin als voreingenommen dar — ohne die Accounts kann sie ohnehin nichts beweisen.',
        en: 'I deny everything and paint the journalist as biased — without the accounts she can’t prove anything anyway.',
      },
      {
        de: 'Ich lasse die Kampagne weiterlaufen, streue aber zusätzlich echte Kundenstimmen ein, damit das Ganze „natürlicher" aussieht.',
        en: 'I let the campaign keep running but additionally seed some real customer voices so the whole thing looks "more natural".',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) ist Best Practice: Die inauthentische Operation sofort beenden, Beweise sichern, den Vertrag kündigen, die Plattform informieren und proaktiv transparent offenlegen. Das trennt Technik und Ethik sauber und denkt die Second-Order-Effekte mit: Astroturfing ist täuschend, verletzt Plattform-Regeln und ist eine unlautere Geschäftspraxis — sobald die Journalistin Belege hat, entscheidet nicht mehr das OB der Aufdeckung, sondern nur noch, ob ihr als aufklärend oder als vertuschend dasteht. Option 2 (Accounts löschen) ist der gefährlichste Fehlgriff: Das ist Beweisvernichtung, verschärft die rechtliche Lage und liefert — da sie die Belege bereits hat — die Schlagzeile „Firma vertuscht" frei Haus. Option 3 (Abstreiten plus Angriff auf die Journalistin) kombiniert eine Lüge mit einem Ad Hominem und fliegt auf, sobald die Beweise öffentlich werden. Option 4 (weiterlaufen lassen und echte Stimmen beimischen) heilt nichts — die Operation bleibt inauthentisch, das Beimischen echter Stimmen kaschiert die Täuschung nur. Grenze: offengelegte, ehrliche Verstärkung ja; verdeckte Fake-Account-Netzwerke nein — und wenn sie aufgeflogen sind, ist Transparenz die einzige tragfähige Antwort.',
      en: 'Only option 1 (index 0) is best practice: stop the inauthentic operation at once, preserve the evidence, terminate the contract, notify the platform, and disclose proactively and transparently. It cleanly separates technique from ethics and weighs the second-order effects: astroturfing is deceptive, breaches platform rules and is an unfair commercial practice — once the journalist has proof, the question is no longer WHETHER it comes out, but only whether you look like the party that came clean or the party that covered up. Option 2 (delete the accounts) is the most dangerous misstep: it is evidence destruction, worsens the legal exposure and — since she already holds the proof — hands you the "company covers up" headline. Option 3 (deny plus attack the journalist) combines a lie with an ad hominem and collapses the moment the evidence goes public. Option 4 (keep it running and blend in real voices) cures nothing — the operation stays inauthentic, and mixing in genuine voices merely camouflages the deception. Boundary: disclosed, honest amplification yes; covert fake-account networks no — and once they are exposed, transparency is the only tenable response.',
    },
    points: 15,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'ad_hominem'],
  },
];
