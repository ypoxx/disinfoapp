import type { Exercise } from '../types';

export const techniqueMatches: Exercise[] = [
  {
    id: 'tm-1',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Nur noch 3 Plätze frei! Melden Sie sich JETZT an, bevor es zu spät ist! Dieses Angebot gibt es nur heute!"',
      en: '"Only 3 spots left! Sign up NOW before it\'s too late! This offer is available today only!"',
    },
    options: [
      {
        de: 'Knappheit (Scarcity)',
        en: 'Scarcity',
      },
      {
        de: 'Sozialer Beweis',
        en: 'Social proof',
      },
      {
        de: 'Framing',
        en: 'Framing',
      },
      {
        de: 'Autoritätsargument',
        en: 'Appeal to authority',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Künstliche Knappheit erzeugt Dringlichkeit und Angst, etwas zu verpassen (FOMO). Kommunikationsprofis sollten dieses Muster erkennen — es ist eine der am häufigsten eingesetzten Überzeugungstechniken.',
      en: 'Artificial scarcity creates urgency and fear of missing out (FOMO). Communication professionals should recognize this pattern — it is one of the most commonly used persuasion techniques.',
    },
    points: 10,
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'tm-2',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Führende Wissenschaftler der Harvard University haben bestätigt, dass..." (ohne Quellenangabe oder Studienname)',
      en: '"Leading scientists at Harvard University have confirmed that..." (without citation or study name)',
    },
    options: [
      {
        de: 'Autoritätsargument (falsche Autorität)',
        en: 'Appeal to authority (false authority)',
      },
      {
        de: 'Emotionaler Appell',
        en: 'Emotional appeal',
      },
      {
        de: 'Wiederholung',
        en: 'Repetition',
      },
      {
        de: 'Nudging',
        en: 'Nudging',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Autoritätsreferenz: Ein prestigeträchtiger Name wird ohne konkrete Quellenangabe benutzt. Kommunikationsprofis sollten immer die Primärquelle prüfen.',
      en: 'False appeal to authority: A prestigious name is used without a concrete source reference. Communication professionals should always verify the primary source.',
    },
    points: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'tm-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Pressemitteilung: "Unser Produkt wurde bereits von über 2 Millionen zufriedenen Kunden gewählt. Schließen Sie sich der wachsenden Gemeinschaft an!"',
      en: 'Press release: "Our product has already been chosen by over 2 million satisfied customers. Join the growing community!"',
    },
    options: [
      {
        de: 'Sozialer Beweis (Social Proof)',
        en: 'Social proof',
      },
      {
        de: 'Knappheit',
        en: 'Scarcity',
      },
      {
        de: 'Priming',
        en: 'Priming',
      },
      {
        de: 'Ad Hominem',
        en: 'Ad hominem',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Social Proof nutzt die menschliche Tendenz, sich an der Mehrheit zu orientieren. In der PR ist diese Technik allgegenwärtig — die Grenze zur Manipulation ist fließend.',
      en: 'Social proof leverages the human tendency to follow the majority. In PR, this technique is ubiquitous — the line between persuasion and manipulation is blurry.',
    },
    points: 10,
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'tm-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Entweder wir stoppen die Immigration sofort, oder unsere Kultur geht unter. Es gibt keinen Mittelweg."',
      en: '"Either we stop immigration immediately, or our culture will perish. There is no middle ground."',
    },
    options: [
      {
        de: 'Falsche Dichotomie',
        en: 'False dichotomy',
      },
      {
        de: 'Anchoring',
        en: 'Anchoring',
      },
      {
        de: 'Reziprozität',
        en: 'Reciprocity',
      },
      {
        de: 'Pacing & Leading',
        en: 'Pacing & leading',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Dichotomie reduziert komplexe Themen auf zwei Extremoptionen. In der politischen Kommunikation ein häufiges Mittel — für Kommunikationsprofis ist es wichtig, die ausgeblendeten Alternativen aufzuzeigen.',
      en: 'A false dichotomy reduces complex issues to two extreme options. This is a common device in political communication — for communication professionals, it is important to highlight the alternatives being left out.',
    },
    points: 10,
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'tm-5',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Nachrichtenportal titelt: "Dramatischer Anstieg: Beschwerden über Firma X verdoppelt!" (Im Kleingedruckten: von 3 auf 6 Beschwerden)',
      en: 'A news outlet headlines: "Dramatic surge: Complaints about Company X doubled!" (In the fine print: from 3 to 6 complaints)',
    },
    options: [
      {
        de: 'Framing (durch relative Zahlen)',
        en: 'Framing (through relative numbers)',
      },
      {
        de: 'Dark Patterns',
        en: 'Dark patterns',
      },
      {
        de: 'Synthetic Media',
        en: 'Synthetic media',
      },
      {
        de: 'Liking',
        en: 'Liking',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Framing durch relative statt absolute Zahlen: "Verdoppelt" klingt dramatisch, aber von 3 auf 6 ist praktisch bedeutungslos. Kommunikationsprofis müssen Statistiken immer im Kontext lesen.',
      en: 'Framing through relative rather than absolute numbers: "Doubled" sounds dramatic, but going from 3 to 6 is practically meaningless. Communication professionals must always read statistics in context.',
    },
    points: 10,
    relatedTechniques: ['framing', 'anchoring'],
  },
  // --- New exercises for uncovered techniques ---
  {
    id: 'tm-6',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Immobilienmakler zeigt einem Paar zuerst eine heruntergekommene, überteuerte Wohnung. Danach führt er sie zur eigentlichen Wohnung, die er verkaufen möchte — sie wirkt im Vergleich wie ein Schnäppchen.',
      en: 'A real estate agent first shows a couple a run-down, overpriced apartment. Then he takes them to the actual apartment he wants to sell — it looks like a bargain by comparison.',
    },
    options: [
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Nudging', en: 'Nudging' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Anchoring: Der erste Preis/Eindruck setzt einen Anker, an dem alle weiteren Bewertungen gemessen werden. Die überteuerte Wohnung verankert ein hohes Preisniveau, sodass die zweite Wohnung günstig erscheint.',
      en: 'Anchoring: The first price/impression sets an anchor against which all subsequent evaluations are measured. The overpriced apartment anchors a high price level, making the second apartment appear affordable.',
    },
    points: 10,
    relatedTechniques: ['anchoring'],
  },
  {
    id: 'tm-7',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Kosmetikunternehmen verteilt kostenlose Proben im Einkaufszentrum. Wer eine annimmt, wird sofort gefragt: "Darf ich Ihnen das Vollprodukt für nur 29,90€ zeigen?"',
      en: 'A cosmetics company hands out free samples in the shopping mall. Anyone who accepts one is immediately asked: "Can I show you the full product for just €29.90?"',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Konsistenz', en: 'Consistency' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reziprozität: Das kostenlose Geschenk erzeugt ein Gefühl der Verpflichtung. Menschen neigen dazu, Gefälligkeiten zu erwidern — selbst ungebetene. Robert Cialdini identifizierte dies als eines der sechs Grundprinzipien der Überzeugung.',
      en: 'Reciprocity: The free gift creates a sense of obligation. People tend to return favors — even unsolicited ones. Robert Cialdini identified this as one of the six fundamental principles of persuasion.',
    },
    points: 10,
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 'tm-8',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Startup wählt einen bekannten Fußballspieler als Markenbotschafter für seine Finanz-App. In der Werbung sagt er lächelnd: "Ich vertraue mein Geld nur dieser App an."',
      en: 'A startup chooses a famous football player as brand ambassador for its finance app. In the ad, he says with a smile: "I only trust this app with my money."',
    },
    options: [
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
      { de: 'Liking (Sympathie-Prinzip)', en: 'Liking (sympathy principle)' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Repetition', en: 'Repetition' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Liking: Der Fußballer ist kein Finanzexperte (daher kein Autoritätsargument), aber seine Beliebtheit und sein sympathisches Auftreten übertragen sich auf das Produkt. Menschen lassen sich von Personen überzeugen, die sie mögen.',
      en: 'Liking: The footballer is not a financial expert (hence not an authority argument), but his popularity and likeable persona transfer to the product. People are persuaded by those they like.',
    },
    points: 10,
    relatedTechniques: ['liking'],
  },
  {
    id: 'tm-9',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Sie haben sich als umweltbewusster Verbraucher registriert. Konsequenterweise sollten Sie auch unser CO2-Kompensationspaket dazubuchen — es wäre inkonsequent, sich als grün zu bezeichnen und dann nichts zu tun."',
      en: '"You registered as an environmentally conscious consumer. To be consistent, you should also add our CO2 offset package — it would be inconsistent to call yourself green and then do nothing."',
    },
    options: [
      { de: 'Konsistenz (Commitment & Consistency)', en: 'Consistency (commitment & consistency)' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konsistenz-Prinzip: Die frühere Selbstbezeichnung ("umweltbewusst") wird als Hebel genutzt. Menschen empfinden Druck, konsistent mit früheren Entscheidungen zu handeln — selbst wenn die neue Handlung gar nicht logisch daraus folgt.',
      en: 'Consistency principle: The earlier self-label ("environmentally conscious") is used as leverage. People feel pressure to act consistently with previous decisions — even when the new action does not logically follow.',
    },
    points: 10,
    relatedTechniques: ['consistency'],
  },
  {
    id: 'tm-10',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'In einer TV-Debatte sagt Kandidat A über Kandidat B: "Frau Schmidt hat drei gescheiterte Ehen — wie soll jemand, der sein eigenes Leben nicht im Griff hat, ein Land führen?"',
      en: 'In a TV debate, Candidate A says about Candidate B: "Ms. Schmidt has had three failed marriages — how can someone who can\'t manage her own life lead a country?"',
    },
    options: [
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Ad Hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Äquivokation', en: 'Equivocation' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Ad Hominem: Statt politische Positionen anzugreifen, wird die Person diskreditiert. Das Privatleben hat keinen logischen Zusammenhang mit politischer Kompetenz. Ein Strohmann würde die Position verzerren, nicht die Person angreifen.',
      en: 'Ad hominem: Instead of attacking political positions, the person is discredited. Private life has no logical connection to political competence. A straw man would distort the position, not attack the person.',
    },
    points: 10,
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'tm-11',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Umweltschützer fordern ein Tempolimit auf Autobahnen. Ein Lobbyverband antwortet: "Die Grünen wollen uns das Autofahren komplett verbieten und zurück ins Mittelalter schicken!"',
      en: 'Environmentalists demand a speed limit on highways. A lobby group responds: "The Greens want to completely ban driving and send us back to the Middle Ages!"',
    },
    options: [
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Strohmann: Die ursprüngliche Forderung (Tempolimit) wird extrem verzerrt zu "Autofahren komplett verbieten". Diese falsche Darstellung ist leichter anzugreifen als das eigentliche Argument. Der Unterschied zu Ad Hominem: Hier wird das Argument verfälscht, nicht die Person angegriffen.',
      en: 'Straw man: The original demand (speed limit) is extremely distorted to "completely ban driving." This false representation is easier to attack than the actual argument. Unlike ad hominem, the argument is misrepresented here, not the person attacked.',
    },
    points: 10,
    relatedTechniques: ['straw_man'],
  },
  {
    id: 'tm-12',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Eine Versicherung wirbt: "Unsere Kunden sind zu 97% zufrieden." Auf Nachfrage: Die Umfrage wurde nur unter Kunden durchgeführt, die NICHT gekündigt hatten, und "zufrieden" umfasste auch "eher zufrieden".',
      en: 'An insurance company advertises: "97% of our customers are satisfied." When asked: The survey only included customers who had NOT cancelled, and "satisfied" also included "somewhat satisfied."',
    },
    options: [
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Äquivokation (mehrdeutige Sprache)', en: 'Equivocation (ambiguous language)' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Äquivokation: "97% zufrieden" klingt eindeutig, ist aber mehrdeutig definiert. Die selektive Stichprobe und die weite Definition von "zufrieden" verzerren das Ergebnis, ohne technisch zu lügen. In der PR ein häufiges Muster.',
      en: 'Equivocation: "97% satisfied" sounds clear-cut, but is ambiguously defined. The selective sample and broad definition of "satisfied" distort the result without technically lying. A common pattern in PR.',
    },
    points: 10,
    relatedTechniques: ['equivocation'],
  },
  {
    id: 'tm-13',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Unternehmen wiederholt in jeder Pressemitteilung, in Social Media und in Interviews: "Wir sind der innovativste Arbeitgeber Deutschlands." Nach einem Jahr zitieren Medien diesen Satz als Fakt — ohne Beleg.',
      en: 'A company repeats in every press release, on social media, and in interviews: "We are the most innovative employer in Germany." After a year, media outlets cite this as fact — without evidence.',
    },
    options: [
      { de: 'Repetition (Wiederholung)', en: 'Repetition' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
      { de: 'Konsistenz', en: 'Consistency' },
      { de: 'Knappheit', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Repetition: Die ständige Wiederholung einer unbelegten Behauptung führt dazu, dass sie als Wahrheit akzeptiert wird (Illusory Truth Effect). Medien übernehmen den Claim, weil er "bekannt" klingt.',
      en: 'Repetition: Constant repetition of an unsubstantiated claim leads to it being accepted as truth (illusory truth effect). Media adopt the claim because it sounds "familiar."',
    },
    points: 10,
    relatedTechniques: ['repetition'],
  },
  {
    id: 'tm-14',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Eine Nachrichten-Website zeigt vor einem Artikel über Kriminalitätsstatistik eine Bildergalerie: dunkle Straßen, zerbrochene Scheiben, Polizeisirenen. Die eigentlichen Zahlen zeigen einen Rückgang der Kriminalität.',
      en: 'A news website shows an image gallery before an article on crime statistics: dark streets, broken windows, police sirens. The actual figures show a decline in crime.',
    },
    options: [
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming (Voraktivierung)', en: 'Priming (pre-activation)' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Priming: Die bedrohlichen Bilder aktivieren im Leser Angst-Assoziationen, bevor er die eigentlichen Daten sieht. Dadurch werden sinkende Zahlen trotzdem als bedrohlich wahrgenommen. Die Voraktivierung beeinflusst die Interpretation der Fakten.',
      en: 'Priming: The threatening images activate fear associations in the reader before they see the actual data. This causes declining numbers to still be perceived as threatening. The pre-activation influences the interpretation of facts.',
    },
    points: 10,
    relatedTechniques: ['priming'],
  },
  {
    id: 'tm-15',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Eine Preisseite zeigt drei Optionen: "Basic 9€/Monat", "Pro 29€/Monat" (hervorgehoben, "Beliebteste Wahl"), "Enterprise 99€/Monat". Die Pro-Option ist vorausgewählt.',
      en: 'A pricing page shows three options: "Basic €9/month", "Pro €29/month" (highlighted, "Most Popular"), "Enterprise €99/month". The Pro option is pre-selected.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Nudging (Entscheidungsarchitektur)', en: 'Nudging (choice architecture)' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Nudging: Die Vorauswahl (Default-Effekt) und das "Beliebteste Wahl"-Label lenken die Entscheidung, ohne Optionen wegzunehmen. Der Enterprise-Preis dient als Anker, der Pro "günstig" erscheinen lässt. Nudging nutzt kognitive Abkürzungen.',
      en: 'Nudging: The pre-selection (default effect) and "Most Popular" label steer the decision without removing options. The Enterprise price serves as an anchor making Pro seem "affordable." Nudging leverages cognitive shortcuts.',
    },
    points: 10,
    relatedTechniques: ['nudging'],
  },
  {
    id: 'tm-16',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein politischer Chatbot schreibt personalisierte Nachrichten an Wähler: Er erkennt deren Sorgen aus Social-Media-Posts und generiert maßgeschneiderte Argumente — in einem Ton, der menschlich klingt.',
      en: 'A political chatbot writes personalized messages to voters: It identifies their concerns from social media posts and generates tailored arguments — in a tone that sounds human.',
    },
    options: [
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'KI-gestützte Überzeugung', en: 'AI-powered persuasion' },
      { de: 'Pacing & Leading', en: 'Pacing & leading' },
      { de: 'Embedded Commands', en: 'Embedded commands' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'KI-gestützte Überzeugung: Obwohl Microtargeting (Datennutzung) eine Rolle spielt, ist das Kernmerkmal hier die KI-generierte, menschlich klingende Kommunikation. Die Skalierbarkeit und Personalisierung durch KI geht weit über klassisches Microtargeting hinaus.',
      en: 'AI-powered persuasion: Although microtargeting (data usage) plays a role, the core feature here is the AI-generated, human-sounding communication. The scalability and personalization through AI goes far beyond classic microtargeting.',
    },
    points: 10,
    relatedTechniques: ['ai_persuasion'],
  },
  {
    id: 'tm-17',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Entweder wir investieren jetzt 50 Milliarden in Digitalisierung, oder Deutschland wird zum Entwicklungsland. Dazwischen gibt es nichts."',
      en: '"Either we invest 50 billion in digitalization now, or Germany will become a developing country. There is nothing in between."',
    },
    options: [
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Repetition', en: 'Repetition' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Falsche Dichotomie: Das komplexe Thema Digitalisierung wird auf zwei Extremszenarien reduziert. In Wahrheit gibt es viele Abstufungen zwischen "50 Milliarden sofort" und "Entwicklungsland". Diese Technik setzt Entscheider unter Druck.',
      en: 'False dichotomy: The complex topic of digitalization is reduced to two extreme scenarios. In reality, there are many gradations between "50 billion immediately" and "developing country." This technique pressures decision-makers.',
    },
    points: 10,
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'tm-18',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein KI-generiertes Video zeigt einen bekannten Politiker, der angeblich rassistische Aussagen macht. Das Video ist technisch perfekt — Lippenbewegungen, Stimme und Gestik stimmen überein.',
      en: 'An AI-generated video shows a well-known politician allegedly making racist statements. The video is technically perfect — lip movements, voice, and gestures all match.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Synthetische Medien (Deepfake)', en: 'Synthetic media (deepfake)' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Synthetische Medien / Deepfake: KI-generierte Videos, die reale Personen in fabrizierten Situationen zeigen. Anders als einfache visuelle Manipulation (Photoshop) nutzen Deepfakes neuronale Netze zur Erzeugung realistischer, aber vollständig gefälschter Inhalte.',
      en: 'Synthetic media / Deepfake: AI-generated videos showing real people in fabricated situations. Unlike simple visual manipulation (Photoshop), deepfakes use neural networks to create realistic but entirely fabricated content.',
    },
    points: 10,
    relatedTechniques: ['synthetic_media'],
  },
  {
    id: 'tm-19',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Cookie-Banner zeigt: Großer grüner Button "Alle akzeptieren" oben. Kleiner grauer Text "Einstellungen verwalten" unten. Der Ablehn-Button existiert erst nach 3 Klicks in den Untermenüs.',
      en: 'A cookie banner shows: Large green button "Accept All" on top. Small grey text "Manage Settings" at the bottom. The reject button only exists after 3 clicks into sub-menus.',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Dark Patterns (manipulatives Design)', en: 'Dark patterns (manipulative design)' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Embedded Commands', en: 'Embedded commands' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Dark Patterns: Visuelles Verstecken der Ablehn-Option, Bestätigungsschikane (3 Klicks), asymmetrisches Design (groß/grün vs. klein/grau). Der Unterschied zu Nudging: Dark Patterns arbeiten gegen die Interessen des Nutzers, Nudging arbeitet für sie.',
      en: 'Dark patterns: Visually hiding the reject option, confirmshaming (3 clicks), asymmetric design (large/green vs. small/grey). The difference to nudging: Dark patterns work against user interests, nudging works for them.',
    },
    points: 10,
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'tm-20',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Wahlkampf 2024: Eine Partei schaltet auf Instagram Anzeigen, die nur Frauen zwischen 25-40 in Großstädten sehen, mit einem anderen Thema als die Anzeigen, die Männer über 55 auf dem Land sehen.',
      en: 'Election campaign 2024: A party runs Instagram ads visible only to women aged 25-40 in cities, with a different topic than the ads seen by men over 55 in rural areas.',
    },
    options: [
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Microtargeting (personalisierte Zielgruppenansprache)', en: 'Microtargeting (personalized audience targeting)' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Liking', en: 'Liking' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Microtargeting: Mithilfe von Plattform-Daten (Alter, Geschlecht, Wohnort) werden maßgeschneiderte Botschaften an spezifische Zielgruppen gesendet. Das Problem: Wähler sehen nie das Gesamtbild der Versprechen und können widersprüchliche Aussagen nicht erkennen.',
      en: 'Microtargeting: Using platform data (age, gender, location) to send tailored messages to specific audience segments. The problem: Voters never see the full picture of promises and cannot identify contradictory statements.',
    },
    points: 10,
    relatedTechniques: ['microtargeting'],
  },
];
