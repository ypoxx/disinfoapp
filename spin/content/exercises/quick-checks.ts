import type { Exercise } from '../types';

export const quickChecks: Exercise[] = [
  {
    id: 'qc-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: '🔴 EILMELDUNG: Studie beweist - 5G-Strahlung verursacht Krebs! Die Regierung verschweigt die Wahrheit! TEILEN bevor es gelöscht wird!!!',
      en: '🔴 BREAKING: Study proves 5G radiation causes cancer! The government is hiding the truth! SHARE before it gets deleted!!!',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Manipulationstechniken: Unbelegte Behauptung, Verschwörungsnarrativ ("Regierung verschweigt"), Dringlichkeits-Appell ("bevor es gelöscht wird"), emotionale Sprache.',
      en: 'Classic manipulation techniques: Unsubstantiated claim, conspiracy narrative ("government is hiding"), urgency appeal ("before it gets deleted"), emotional language.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'qc-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Robert Koch-Institut (@raborki): Aktuelle Influenza-Zahlen für KW 12: 3.421 laborbestätigte Fälle. Trend rückläufig. Detaillierter Wochenbericht: rki.de/influenza',
      en: 'Robert Koch Institute (@raborki): Current influenza figures for calendar week 12: 3,421 lab-confirmed cases. Trend declining. Detailed weekly report: rki.de/influenza',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Sachliche Kommunikation: Offizielle Institution, konkrete Zahlen, Quellenangabe, sachlicher Ton, keine emotionale Sprache.',
      en: 'Factual communication: Official institution, concrete figures, source referenced, neutral tone, no emotional language.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Neue Analyse zeigt: Das Unternehmen XY hat seine CO2-Bilanz um 40% geschönt. Drei unabhängige Gutachter bestätigen die Diskrepanz. Vollständiger Bericht mit Methodik: envirotrust.org/report-2024',
      en: 'New analysis shows: Company XY inflated its carbon footprint figures by 40%. Three independent auditors confirm the discrepancy. Full report with methodology: envirotrust.org/report-2024',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Wahrscheinlich sachlich: Konkrete Zahlen, mehrere unabhängige Quellen, vollständiger Bericht mit Methodik verlinkt. Natürlich sollte man die Quelle "envirotrust.org" noch lateral prüfen.',
      en: 'Likely factual: Concrete figures, multiple independent sources, full report with methodology linked. Of course, the source "envirotrust.org" should still be checked through lateral reading.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'qc-4',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Ein Insider bei der Firma ABC packt aus: "Die neuen Produkte sind gesundheitsschädlich!" Über 50.000 haben schon geteilt. Die Mainstream-Medien berichten nicht darüber - fragt euch warum!',
      en: 'An insider at company ABC reveals: "The new products are harmful to health!" Over 50,000 have already shared this. The mainstream media aren\'t covering it — ask yourselves why!',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Warnsignale: Anonyme Quelle ("ein Insider"), Social-Proof-Manipulation ("50.000 haben geteilt"), Anti-Medien-Narrativ, keine konkreten Belege, emotionaler Appell.',
      en: 'Warning signs: Anonymous source ("an insider"), social proof manipulation ("50,000 have shared"), anti-media narrative, no concrete evidence, emotional appeal.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['social_proof', 'reactance_theory', 'authority'],
  },
  {
    id: 'qc-5',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Laut einer Erhebung des Meinungsforschungsinstituts Infratest dimap im Auftrag der ARD sind 62% der Befragten mit der Arbeit der Bundesregierung unzufrieden. Die Befragung wurde am 15.3. unter 1.204 Wahlberechtigten durchgeführt.',
      en: 'According to a survey by the polling institute Infratest dimap, commissioned by ARD, 62% of respondents are dissatisfied with the federal government\'s performance. The survey was conducted on March 15 among 1,204 eligible voters.',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Sachlich: Renommiertes Institut, klarer Auftraggeber, konkrete Stichprobengröße und Datum, sachliche Darstellung. Kommunikationsprofis sollten solche Umfragen einordnen können.',
      en: 'Factual: Reputable institute, clearly stated commissioner, specific sample size and date, neutral presentation. Communication professionals should be able to contextualize such surveys.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-6',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'BREAKING: CEO von TechCorp in geheimes Treffen mit Lobbyisten verwickelt! Exklusive Fotos beweisen alles. Die Aktie wird morgen einbrechen - noch schnell verkaufen! #TechCorpSkandal',
      en: 'BREAKING: TechCorp CEO caught in secret meeting with lobbyists! Exclusive photos prove everything. The stock will crash tomorrow — sell now while you can! #TechCorpScandal',
    },
    options: [
      {
        de: 'Manipulationstechniken erkennbar',
        en: 'Manipulation techniques detected',
      },
      {
        de: 'Sachliche Kommunikation',
        en: 'Factual communication',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Marktmanipulation: Vage Behauptungen ("geheimes Treffen"), unbelegte "Beweise", Handlungsaufforderung zum Aktienverkauf, Hashtag-Kampagne zur Viralität.',
      en: 'Classic market manipulation: Vague claims ("secret meeting"), unsubstantiated "proof", call to action to sell stock, hashtag campaign for virality.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['scarcity', 'emotional_appeal', 'framing'],
  },
  // --- New exercises for uncovered techniques ---
  {
    id: 'qc-7',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Vor einer Talkshow zum Thema Steuerpolitik zeigt der Sender eine 3-minütige Reportage über Obdachlosigkeit und Kinderarmut. Direkt danach fragt der Moderator: "Brauchen wir höhere Steuern?"',
      en: 'Before a talk show about tax policy, the channel airs a 3-minute report on homelessness and child poverty. Right after, the host asks: "Do we need higher taxes?"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Priming: Die emotionalen Bilder von Armut beeinflussen unbewusst die Bewertung der anschließenden Steuerfrage. Der Zuschauer wird emotional voreingestellt, bevor die sachliche Debatte beginnt.',
      en: 'Priming: The emotional images of poverty unconsciously influence the evaluation of the subsequent tax question. The viewer is emotionally primed before the factual debate begins.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['priming'],
  },
  {
    id: 'qc-8',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Eine NGO lädt Journalisten zu einer exklusiven Pressereise ein (Flug, Hotel, Verpflegung kostenlos). Drei Wochen später bittet sie um wohlwollende Berichterstattung über ihr neues Projekt.',
      en: 'An NGO invites journalists on an exclusive press trip (flights, hotel, meals all free). Three weeks later, it asks for favorable coverage of its new project.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reziprozität: Die kostenlose Einladung erzeugt ein Gefühl der Verpflichtung. Journalisten fühlen sich (oft unbewusst) gedrängt, positiv zu berichten. Das Prinzip der Gegenseitigkeit ist eine der stärksten sozialen Normen.',
      en: 'Reciprocity: The free invitation creates a sense of obligation. Journalists feel (often unconsciously) compelled to report favorably. The principle of reciprocity is one of the strongest social norms.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 'qc-9',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Ein Pharmaunternehmen wählt für seine Werbekampagne einen sympathischen TV-Arzt, der in einer beliebten Arztserie mitspielt. Er empfiehlt das Medikament in einem lockeren, freundlichen Ton.',
      en: 'A pharmaceutical company chooses a likeable TV doctor, who stars in a popular medical drama, for its ad campaign. He recommends the medication in a casual, friendly tone.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Liking-Prinzip: Menschen lassen sich leichter von Personen überzeugen, die sie mögen oder attraktiv finden. Der TV-Arzt ist keine medizinische Autorität, aber seine Beliebtheit überträgt sich auf das Produkt.',
      en: 'Liking principle: People are more easily persuaded by those they like or find attractive. The TV doctor is not a medical authority, but his popularity transfers to the product.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['liking'],
  },
  {
    id: 'qc-10',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: '"Sie haben letztes Jahr unsere Petition für sauberes Trinkwasser unterschrieben. Als jemand, dem Umweltschutz am Herzen liegt, unterstützen Sie sicher auch unsere neue Kampagne gegen Pestizide?"',
      en: '"You signed our petition for clean drinking water last year. As someone who cares about the environment, you surely support our new campaign against pesticides too?"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konsistenz-Prinzip: Menschen möchten mit früheren Handlungen und Aussagen konsistent bleiben. Die Erinnerung an die Petition-Unterschrift erzeugt Druck, auch die neue Kampagne zu unterstützen — unabhängig von deren Inhalt.',
      en: 'Consistency principle: People want to remain consistent with their past actions and statements. The reminder of the petition signature creates pressure to support the new campaign — regardless of its content.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['consistency'],
  },
  {
    id: 'qc-11',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'In einer Bundestagsdebatte sagt ein Abgeordneter: "Herr Müller hat ja nicht mal einen Hochschulabschluss — wie kann er über Bildungspolitik urteilen?" Zum eigentlichen Gesetzentwurf sagt er nichts.',
      en: 'In a parliamentary debate, an MP says: "Mr. Mueller doesn\'t even have a university degree — how can he judge education policy?" He says nothing about the actual bill.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad Hominem: Angriff auf die Person statt auf das Argument. Der fehlende Abschluss ist irrelevant für die Qualität des Gesetzentwurfs. Kommunikationsprofis sollten solche Ablenkungsmanöver erkennen und zum Sachthema zurückführen.',
      en: 'Ad hominem: Attack on the person instead of the argument. The lack of a degree is irrelevant to the quality of the bill. Communication professionals should recognize such diversionary tactics and steer back to the topic.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'qc-12',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Aktivist auf Twitter: "Die Regierung will Waffenverkäufe regulieren? Also wollen sie uns ALLE Waffen wegnehmen und uns wehrlos machen! Das ist der erste Schritt zur Diktatur!"',
      en: 'Activist on Twitter: "The government wants to regulate gun sales? So they want to take ALL our guns and leave us defenseless! That\'s the first step to dictatorship!"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Strohmann-Argument: Die Position des Gegners wird verzerrt dargestellt ("regulieren" wird zu "alle wegnehmen"), um sie leichter angreifbar zu machen. Kommunikationsprofis müssen die Originalposition korrekt wiedergeben.',
      en: 'Straw man fallacy: The opponent\'s position is distorted ("regulate" becomes "take all away") to make it easier to attack. Communication professionals must accurately represent the original position.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['straw_man'],
  },
  {
    id: 'qc-13',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Werbung: "NaturPur Hautcreme — dermatologisch getestet, mit natürlichen Inhaltsstoffen für ein reines Hautgefühl." (Hinweis: "getestet" bedeutet nicht "bestanden"; "natürlich" ist kein Qualitätssiegel)',
      en: 'Ad: "NaturePure skin cream — dermatologically tested, with natural ingredients for a pure skin feeling." (Note: "tested" does not mean "passed"; "natural" is not a quality seal)',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Äquivokation: Mehrdeutige Sprache suggeriert mehr als sie sagt. "Dermatologisch getestet" klingt wie ein Gütesiegel, bedeutet aber nur, dass ein Test stattfand — nicht, dass er bestanden wurde. "Natürlich" wird mit "sicher" gleichgesetzt.',
      en: 'Equivocation: Ambiguous language suggests more than it states. "Dermatologically tested" sounds like a quality seal but only means a test occurred — not that it passed. "Natural" is equated with "safe."',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['equivocation'],
  },
  {
    id: 'qc-14',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Ein Politiker wiederholt in jeder Rede, in jedem Interview und auf jedem Plakat denselben Slogan: "Sicherheit. Wohlstand. Heimat." Ohne weitere inhaltliche Erklärung.',
      en: 'A politician repeats the same slogan in every speech, every interview, and on every poster: "Security. Prosperity. Homeland." Without any further substantive explanation.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Repetition / Illusory Truth Effect: Durch ständige Wiederholung werden auch inhaltsleere Slogans als "wahr" und vertrauenswürdig empfunden. Das Gehirn verwechselt Vertrautheit mit Glaubwürdigkeit.',
      en: 'Repetition / Illusory truth effect: Through constant repetition, even contentless slogans are perceived as "true" and trustworthy. The brain confuses familiarity with credibility.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['repetition', 'illusory_truth_effect'],
  },
  {
    id: 'qc-15',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Verkäufer: "Ich verstehe, dass Sie frustriert sind über die hohen Energiekosten. Das geht vielen so. Es ist verständlich, dass man nach Lösungen sucht. Und genau deshalb empfehle ich Ihnen unsere Premium-Solaranlage..."',
      en: 'Salesperson: "I understand you\'re frustrated about high energy costs. Many people feel this way. It\'s natural to look for solutions. And that\'s exactly why I recommend our premium solar system..."',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Pacing & Leading: Zuerst wird die Realität des Gegenübers gespiegelt (Pacing: "Ich verstehe...", "vielen geht es so"), dann wird die Person schrittweise in eine gewünschte Richtung gelenkt (Leading: "genau deshalb...").',
      en: 'Pacing & leading: First, the other person\'s reality is mirrored (pacing: "I understand...", "many people feel this way"), then the person is gradually guided in the desired direction (leading: "that\'s exactly why...").',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['pacing_and_leading'],
  },
  {
    id: 'qc-16',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Webinar-Moderator: "Ich sage nicht, dass Sie sich SOFORT ANMELDEN sollten, aber die erfolgreichsten Unternehmer, die ich kenne, HANDELN SCHNELL und ENTSCHEIDEN HEUTE."',
      en: 'Webinar host: "I\'m not saying you should SIGN UP RIGHT NOW, but the most successful entrepreneurs I know ACT FAST and DECIDE TODAY."',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Embedded Commands: Die betonten Phrasen "SOFORT ANMELDEN", "HANDELN SCHNELL" und "ENTSCHEIDEN HEUTE" sind versteckte Handlungsaufforderungen, eingebettet in eine scheinbar neutrale Aussage. Das Bewusstsein hört die Verneinung, das Unterbewusstsein die Befehle.',
      en: 'Embedded commands: The emphasized phrases "SIGN UP RIGHT NOW", "ACT FAST" and "DECIDE TODAY" are hidden directives embedded in a seemingly neutral statement. The conscious mind hears the negation, the subconscious hears the commands.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['embedded_commands'],
  },
  {
    id: 'qc-17',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Eine Partei schaltet auf Facebook unterschiedliche Anzeigen: Rentner sehen Versprechen zu höheren Renten, junge Eltern sehen Kita-Ausbau, Pendler sehen Steuersenkungen auf Sprit. Jede Gruppe sieht nur "ihre" Botschaft.',
      en: 'A political party runs different ads on Facebook: retirees see promises of higher pensions, young parents see childcare expansion, commuters see fuel tax cuts. Each group only sees "their" message.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Microtargeting: Personalisierte Botschaften basierend auf Nutzerdaten. Jede Zielgruppe erhält nur die Information, die sie hören will. Das Gesamtbild — möglicherweise widersprüchliche Versprechen — bleibt verborgen.',
      en: 'Microtargeting: Personalized messages based on user data. Each target group receives only the information they want to hear. The full picture — potentially contradictory promises — remains hidden.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['microtargeting'],
  },
  {
    id: 'qc-18',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Beim Kündigen eines Streaming-Abos: Schritt 1: "Grund auswählen" → Schritt 2: "Sind Sie sicher?" → Schritt 3: "Sonderangebot: 50% Rabatt!" → Schritt 4: "Wirklich kündigen?" → Schritt 5: kleiner grauer Link "Kündigung bestätigen"',
      en: 'When canceling a streaming subscription: Step 1: "Select reason" → Step 2: "Are you sure?" → Step 3: "Special offer: 50% off!" → Step 4: "Really cancel?" → Step 5: small grey link "Confirm cancellation"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dark Patterns: Mehrere manipulative UX-Designmuster — Bestätigungsschikane (5 Schritte zum Kündigen), visuelles Verstecken (kleiner grauer Link), emotionale Manipulation (Sonderangebot als Ablenkung). Ein ethisches Design würde die Kündigung so einfach machen wie die Anmeldung.',
      en: 'Dark patterns: Multiple manipulative UX design patterns — confirmshaming (5 steps to cancel), visual hiding (small grey link), emotional manipulation (special offer as distraction). Ethical design would make cancellation as easy as signing up.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'qc-19',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'In einer Firmenkantine werden gesunde Gerichte auf Augenhöhe platziert, während Süßigkeiten in eine untere Ecke verschoben werden. Die Portionsgrößen der Salate wurden vergrößert, die der Desserts verkleinert.',
      en: 'In a company cafeteria, healthy meals are placed at eye level, while sweets are moved to a lower corner. Salad portions have been increased, dessert portions decreased.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nudging: Subtile Änderungen der Entscheidungsarchitektur beeinflussen das Verhalten, ohne Optionen zu verbieten. Anders als bei aggressiven Manipulationstechniken wird Nudging oft als ethisch vertretbar angesehen, wenn es im Interesse der Betroffenen liegt (libertärer Paternalismus).',
      en: 'Nudging: Subtle changes to the choice architecture influence behavior without removing options. Unlike aggressive manipulation techniques, nudging is often considered ethically acceptable when it serves the interests of those affected (libertarian paternalism).',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['nudging'],
  },
  {
    id: 'qc-20',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Ein Online-Shop zeigt 500 begeisterte Produktbewertungen. Alle klingen authentisch, variieren in Länge und Stil. In Wahrheit wurden sie von einer KI generiert, die auf echten Bewertungen trainiert wurde.',
      en: 'An online shop displays 500 enthusiastic product reviews. They all sound authentic, varying in length and style. In reality, they were generated by an AI trained on real reviews.',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'KI-gestützte Überzeugung: Moderne KI kann täuschend echte Bewertungen generieren, die für Menschen kaum von echten zu unterscheiden sind. In Kombination mit Social Proof (500 positive Bewertungen) entsteht ein mächtiges Manipulationswerkzeug.',
      en: 'AI-powered persuasion: Modern AI can generate deceptively authentic reviews that are nearly indistinguishable from real ones. Combined with social proof (500 positive reviews), this creates a powerful manipulation tool.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['ai_persuasion'],
  },
  {
    id: 'qc-21',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Das Bundesamt für Verbraucherschutz (@BVL_Bund): "Rückruf: Charge 2024-A8 des Produkts XY wegen möglicher Salmonellen-Kontamination. Betroffene Chargen: siehe Liste. Verbraucher-Hotline: 0800-123456"',
      en: 'Federal Office for Consumer Protection (@BVL_Bund): "Recall: Batch 2024-A8 of product XY due to possible Salmonella contamination. Affected batches: see list. Consumer hotline: 0800-123456"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Sachliche Kommunikation: Offizielle Behörde, konkrete Chargen-Angaben, Hotline für Rückfragen, sachlicher Ton. Dies ist vorbildliche Krisenkommunikation — transparent, spezifisch und handlungsorientiert.',
      en: 'Factual communication: Official authority, specific batch numbers, hotline for inquiries, neutral tone. This is exemplary crisis communication — transparent, specific, and action-oriented.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-22',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: '"LETZTE CHANCE! Nur noch bis Mitternacht: Ihr exklusiver Zugang zum Premium-Bereich wird danach für immer gesperrt. Alle anderen haben sich schon angemeldet — verpassen Sie nichts!"',
      en: '"LAST CHANCE! Only until midnight: Your exclusive access to the premium area will be locked forever after. Everyone else has already signed up — don\'t miss out!"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Kombination aus Knappheit ("nur bis Mitternacht", "für immer gesperrt") und Reaktanz-Theorie (die drohende Einschränkung der Freiheit motiviert zum Handeln). Zusätzlich Social Proof ("alle anderen haben sich schon angemeldet").',
      en: 'Combination of scarcity ("only until midnight", "locked forever") and reactance theory (the threat of restricted freedom motivates action). Additionally, social proof ("everyone else has already signed up").',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['scarcity', 'reactance_theory'],
  },
  {
    id: 'qc-23',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'What technique is being used here?',
    },
    scenario: {
      de: 'Europäische Arzneimittel-Agentur (EMA): "Neue Langzeitdaten zu Medikament Z: Bei 12.500 Patienten über 24 Monate zeigt sich eine Wirksamkeit von 67,3% (95%-KI: 64,1-70,5%). Nebenwirkungsprofil bestätigt. Vollständige Bewertung: ema.europa.eu/Z-assessment"',
      en: 'European Medicines Agency (EMA): "New long-term data on drug Z: In 12,500 patients over 24 months, efficacy of 67.3% (95% CI: 64.1-70.5%). Side effect profile confirmed. Full assessment: ema.europa.eu/Z-assessment"',
    },
    options: [
      { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
      { de: 'Sachliche Kommunikation', en: 'Factual communication' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Sachliche Kommunikation auf hohem Niveau: Offizielle Behörde, große Stichprobe, Konfidenzintervall angegeben, Langzeitdaten, vollständiger Bericht verlinkt. Dies ist wissenschaftliche Transparenz — das Gegenteil von Äquivokation.',
      en: 'High-quality factual communication: Official authority, large sample size, confidence interval provided, long-term data, full report linked. This is scientific transparency — the opposite of equivocation.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
];
