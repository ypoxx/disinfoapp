import type { Exercise } from '../../types';

// embedded_commands — Phase 2 content batch.
export const embeddedCommandsExercises: Exercise[] = [
  {
    id: 'ec-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter der auffällig betonten Formulierung?',
      en: 'Which technique is behind the conspicuously emphasized phrasing?',
    },
    scenario: {
      de: 'In einem Verkaufs-Webinar sagt der Moderator mit auffälliger Betonung: "Ich weiß nicht, ob Sie sich schon JETZT ANMELDEN möchten – aber schauen wir uns die nächste Folie an."',
      en: 'In a sales webinar the host says, with conspicuous emphasis: "I don\'t know whether you want to SIGN UP NOW – but let\'s look at the next slide."',
    },
    options: [
      { de: 'Pacing & Leading', en: 'Pacing and leading' },
      { de: 'Eingebettete Befehle', en: 'Embedded commands' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Das ist ein eingebetteter Befehl: Die Aufforderung "melden Sie sich jetzt an" wird in einen scheinbar harmlosen, unverbindlichen Trägersatz ("Ich weiß nicht, ob …") verpackt und durch Betonung markiert. So wird sie als Anweisung verarbeitet, während der Oberflächensatz abstreitbar bleibt und der Sprecher direkt zum nächsten Thema übergeht. Legitim ist Betonung, die auf wirklich relevante Informationen lenkt; manipulativ wird sie, wenn ein verdeckter Befehl die bewusste Prüfung umgehen soll – zumal die Evidenz für die Wirkung solcher Muster ohnehin schwach ist. Pacing & Leading bräuchte zuerst eine Reihe zustimmungsfähiger Aussagen, bevor geführt wird; Priming würde vorab Assoziationen aktivieren statt direkt zu befehlen; Framing würde dieselbe Information nur anders darstellen – hier wird jedoch eine getarnte Handlungsaufforderung eingeschmuggelt.',
      en: 'This is an embedded command: the directive "sign up now" is wrapped in a seemingly harmless, non-committal carrier sentence ("I don\'t know whether …") and marked by emphasis. It is thus processed as an instruction while the surface sentence stays deniable and the speaker moves straight on to the next topic. Emphasis that steers attention to genuinely relevant information is legitimate; it turns manipulative when a covert command is meant to bypass conscious evaluation – all the more so because the evidence for the effect of such patterns is weak anyway. Pacing and leading would first need a series of agreeable statements before leading; priming would pre-activate associations rather than command directly; framing would merely present the same information differently – but here a disguised call to action is smuggled in.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'pacing_and_leading', 'priming'],
  },
  {
    id: 'ec-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'In der Nachfass-Mail nach einer Produktdemo schreibt der Vertriebler betont beiläufig: "Wie auch immer Sie sich am Ende entscheiden – Sie STARTEN JA OHNEHIN DIE TESTPHASE, nehme ich an – und sonst melden Sie sich einfach bei mir."',
      en: 'In the follow-up email after a product demo, the sales rep writes with studied casualness: "Whatever you decide in the end – you\'ll GO AHEAD AND START THE TRIAL anyway, I assume – and otherwise just get in touch."',
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Pacing & Leading', en: 'Pacing and leading' },
      { de: 'Eingebettete Befehle', en: 'Embedded commands' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Der tragende Hebel ist ein eingebetteter Befehl: Die Aufforderung "starten Sie die Testphase" wird als betontes Satzstück in einen abstreitbaren Trägersatz ("Wie auch immer Sie sich entscheiden … nehme ich an") eingeschmuggelt, sodass sie bei geringer Aufmerksamkeit als Anweisung wirkt, der Absender sie aber jederzeit als bloße Vermutung abtun kann. Pacing & Leading scheidet aus, weil es zuerst eine Kette zustimmungsfähiger Aussagen (ein Ja-Set) aufbauen würde, um dann zu führen – hier gibt es keine solche Zustimmungskette, nur eine einzelne getarnte Anweisung. Priming würde vorab in unabhängigen Kontexten Assoziationen aktivieren, statt jetzt eine verdeckte Aufforderung zu setzen. Framing würde denselben Sachverhalt nur anders bewerten lassen. Ethische Grenze: Betonung, die die Aufmerksamkeit auf relevante Informationen lenkt, ist zulässig; eine verdeckte Anweisung, die die bewusste Zustimmung umgehen soll, ist manipulativ.',
      en: 'The load-bearing lever is an embedded command: the directive "start the trial" is smuggled in as an emphasized fragment inside a deniable carrier sentence ("Whatever you decide … I assume"), so it registers as an instruction under low attention while the sender can always dismiss it as a mere guess. Pacing and leading is ruled out because it would first build a chain of agreeable statements (a yes-set) and only then lead – there is no such agreement chain here, just a single disguised instruction. Priming would pre-activate associations in unrelated contexts beforehand rather than issue a covert directive now. Framing would merely recast the same matter for a different evaluation. Ethical boundary: emphasis that steers attention to relevant information is permissible; a covert directive engineered to bypass conscious consent is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'pacing_and_leading', 'priming'],
  },
  {
    id: 'ec-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik trägt hier die eigentliche Wirkung?',
      en: 'Which technique carries the actual effect here?',
    },
    scenario: {
      de: 'Die Renewal-Mail eines Account-Managers klingt betont zurückhaltend. Im Fließtext steht: "Bitte fühlen Sie sich zu nichts gedrängt. Sie brauchen den Vertrag heute noch nicht zu verlängern und die Freigabe jetzt zu erteilen – überschlafen Sie es ruhig." Auffällig ist, dass ausgerechnet die gewünschten Handlungen – verlängern, Freigabe erteilen – vollständig ausformuliert im Verneinungssatz stehen, während der Rest der Mail bewusst locker gehalten ist.',
      en: 'An account manager\'s renewal email sounds deliberately low-key. The body reads: "Please don\'t feel pressured about anything. You don\'t need to renew the contract today or grant the approval now – feel free to sleep on it." What stands out is that the very actions being sought – renew, grant approval – are spelled out in full inside the negating sentence, while the rest of the mail is kept intentionally casual.',
    },
    options: [
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Pacing & Leading', en: 'Pacing and leading' },
      { de: 'Eingebettete Befehle', en: 'Embedded commands' },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Subtiler eingebetteter Befehl per Verneinung: Wie beim Klassiker "Denken Sie jetzt nicht an einen rosa Elefanten" verarbeitet der Kopf die genannte Handlung ("verlängern", "Freigabe erteilen") unabhängig vom "nicht" – die Verneinung ist nur der tarnende Trägersatz, der den Befehl abstreitbar macht (vgl. das Muster "Sie müssen nicht ENTSPANNEN"). Pacing & Leading scheidet aus, weil keine Kette zustimmungsfähiger Aussagen aufgebaut und dann angeführt wird. Priming würde die Handlungskonzepte beiläufig in früheren, unabhängigen Kontexten voraktivieren, statt sie – wenn auch verneint – als konkrete Aufforderung direkt zu setzen. Framing würde dieselbe Tatsache anders bewerten lassen, doch hier geht es nicht um Bewertung, sondern um eine eingeschmuggelte Handlungsanweisung. Grenze: Zurückhaltung zu signalisieren ist legitim; die erwünschte Handlung verdeckt im Verneinungssatz zu platzieren, um die bewusste Prüfung zu unterlaufen, ist manipulativ.',
      en: 'A subtle embedded command via negation: as in the classic "don\'t think of a pink elephant," the mind processes the named action ("renew," "grant approval") regardless of the "not" – the negation is merely the concealing carrier sentence that makes the command deniable (compare the pattern "you don\'t have to RELAX"). Pacing and leading is ruled out because no chain of agreeable statements is built up and then led. Priming would pre-activate the action concepts incidentally in earlier, unrelated contexts rather than setting them directly – even if negated – as a concrete directive. Framing would have the same fact evaluated differently, but this is not about evaluation, it is a smuggled-in instruction to act. Boundary: signalling restraint is legitimate; covertly placing the desired action inside a negating sentence to undercut conscious scrutiny is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'priming', 'pacing_and_leading'],
  },
  {
    id: 'ec-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Damit die Handlungsaufforderung wirkt, ohne offen als Befehl aufzutreten, wird sie ___.',
      en: 'Complete: For the call to action to work without openly appearing as a command, it is ___.',
    },
    scenario: {
      de: 'Eine Werbetexterin schreibt eine Call-to-Action-Zeile für einen Newsletter und hebt gezielt ein Wort hervor: "Sie müssen sich heute noch nicht FESTLEGEN." Betont ist ausgerechnet die Handlung, welche die Leserin eigentlich ausführen soll.',
      en: 'A copywriter drafts a call-to-action line for a newsletter and deliberately emphasizes one word: "You don\'t have to COMMIT today." The emphasized word is precisely the action the reader is actually meant to take.',
    },
    options: [
      {
        de: 'in einen harmlos wirkenden Trägersatz eingebettet und durch Betonung markiert (Eingebettete Befehle)',
        en: 'embedded in a seemingly harmless carrier sentence and marked by emphasis (embedded commands)',
      },
      {
        de: 'durch vorgeschaltete Reizwörter im Gedächtnis voraktiviert (Priming)',
        en: 'pre-activated in memory by upstream trigger words (priming)',
      },
      {
        de: 'durch eine Reihe zustimmungsfähiger Aussagen vorbereitet und dann angeführt (Pacing & Leading)',
        en: 'set up by a series of agreeable statements and then led (pacing and leading)',
      },
      {
        de: 'durch vielfache Wiederholung vertraut und dadurch glaubwürdiger gemacht (Wiederholung)',
        en: 'made familiar and therefore more credible through repeated exposure (repetition)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist der Mechanismus des eingebetteten Befehls: Die Aufforderung ("festlegen") steckt in einem scheinbar harmlosen Trägersatz ("Sie müssen sich heute noch nicht …") und wird durch Betonung als Anweisung markiert – der Verneinungsrahmen macht sie abstreitbar, das betonte Wort wirkt trotzdem als Befehl. Priming würde die Assoziation vorab in unabhängigen Kontexten wecken, nicht mitten in der Aufforderung; Pacing & Leading bräuchte zuerst mehrere Zustimmungssätze; Wiederholung setzt auf Vertrautheit durch mehrfache Exposition. Keiner dieser drei beschreibt das Einbetten-plus-Betonen, das hier greift. Ethisch: Die Betonung relevanter Fakten ist zulässig; eine getarnte Handlungsanweisung, welche die bewusste Prüfung umgeht, überschreitet die Grenze.',
      en: 'This is the embedded-command mechanism: the directive ("commit") sits inside a seemingly harmless carrier sentence ("you don\'t have to … today") and is marked as an instruction by emphasis – the negation frame makes it deniable, yet the emphasized word still works as a command. Priming would evoke the association beforehand in unrelated contexts, not in the middle of the directive; pacing and leading would first need several agreement statements; repetition relies on familiarity through repeated exposure. None of these three describes the embedding-plus-emphasis at work here. Ethically: emphasizing relevant facts is permissible; a disguised instruction to act that bypasses conscious scrutiny crosses the line.',
    },
    points: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'priming', 'pacing_and_leading'],
  },
  {
    id: 'ec-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie entscheidest du als Kommunikationsprofi?',
      en: 'As a communications professional, how do you decide?',
    },
    scenario: {
      de: 'Du verantwortest die Kommunikation für einen SaaS-Launch. Eine externe Texterin liefert Landingpage-Copy, die voll von betonten, eingebetteten Aufforderungen ist: "Während Sie das lesen, MELDEN SIE SICH JETZT AN." Die Conversion-Prognose klingt gut, doch du fragst dich, ob das professionell tragbar ist.',
      en: 'You are responsible for communications for a SaaS launch. An external copywriter delivers landing-page copy full of emphasized, embedded directives: "As you read this, SIGN UP NOW." The conversion forecast looks good, but you wonder whether it is professionally defensible.',
    },
    options: [
      {
        de: 'Die eingebetteten Befehle behalten und noch weitere betonte Aufforderungen ergänzen, um die Conversion zu maximieren – Wirkung geht vor.',
        en: 'Keep the embedded commands and add even more emphasized directives to maximize conversions – results come first.',
      },
      {
        de: 'Die verdeckten eingebetteten Befehle durch einen klaren, ehrlichen Call-to-Action ersetzen und Betonung nur einsetzen, um wirklich relevante Informationen sichtbar zu machen – überzeugend, aber transparent. So bleibt die Wirkung erhalten, ohne Vertrauen zu riskieren oder bei Entdeckung Reaktanz auszulösen.',
        en: 'Replace the covert embedded commands with a clear, honest call to action and use emphasis only to surface genuinely relevant information – persuasive but transparent. This preserves the effect without risking trust or triggering reactance if the trick is noticed.',
      },
      {
        de: 'Zur Sicherheit jeden Call-to-Action und jede Hervorhebung streichen und die Seite völlig neutral halten.',
        en: 'To be safe, remove every call to action and all emphasis and keep the page completely neutral.',
      },
      {
        de: 'Die Befehle durch die Zeile "Die meisten Nutzer melden sich sofort an" ersetzen, auch wenn das so nicht belegt ist.',
        en: 'Replace the commands with the line "most users sign up immediately," even if that is not actually backed by data.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Beste Wahl ist der transparente Weg: den verdeckten Befehl durch einen klaren, ehrlichen CTA ersetzen und Betonung nur für echte, relevante Information nutzen – wirksam UND ehrlich. Entscheidend ist der Zweitrunden-Effekt: Eingebettete Befehle sind empirisch schwach belegt, und wenn Leser die Manipulation bemerken, drohen Reaktanz, Vertrauensverlust und Reputationsschaden. Mehr eingebettete Befehle zu ergänzen maximiert einen zweifelhaften Effekt und erhöht genau dieses Risiko. Jeden CTA und jede Hervorhebung zu streichen überkorrigiert – ein klarer CTA ist legitime Überzeugung, seine Streichung opfert Wirkung ohne ethischen Gewinn. Den Befehl durch einen – hier zudem unbelegten – Sozialbeweis ("die meisten Nutzer …") zu ersetzen verwechselt die Lösung: Das ist selbst irreführend, statt das eigentliche Problem, die verdeckte Anweisung, zu beheben.',
      en: 'The best choice is the transparent route: replace the covert command with a clear, honest CTA and use emphasis only for genuine, relevant information – effective AND honest. The second-order effect is decisive: embedded commands are empirically weakly supported, and if readers notice the manipulation, reactance, loss of trust and reputational damage follow. Adding even more embedded commands maximizes a dubious effect and raises exactly that risk. Removing every CTA and all emphasis overcorrects – a clear CTA is legitimate persuasion, and deleting it sacrifices effectiveness with no ethical gain. Replacing the command with a – here also unsupported – piece of social proof ("most users …") mistakes the fix: it is itself misleading instead of addressing the actual problem, the covert directive.',
    },
    points: 15,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'reactance_theory'],
  },
  {
    id: 'ec-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welcher Baustein überschreitet die Grenze von legitimer Betonung zu einem verdeckten eingebetteten Befehl, der die bewusste Zustimmung umgeht?',
      en: 'Which component crosses the line from legitimate emphasis into a covert embedded command that bypasses conscious consent?',
    },
    scenario: {
      de: 'Dein Team prüft ein Callcenter-Skript für Vertragsverlängerungen. Vier geplante Bausteine:',
      en: 'Your team is reviewing a call-center script for contract renewals. Four planned components:',
    },
    options: [
      {
        de: 'Der Agent betont deutlich das Datum der Verlängerungsfrist, damit die Kundin die relevante Information klar mitbekommt.',
        en: 'The agent clearly emphasizes the renewal deadline date so the customer plainly registers the relevant information.',
      },
      {
        de: 'Auf der Bestätigungsseite gibt es einen klar beschrifteten Button "Jetzt verlängern".',
        en: 'On the confirmation page there is a clearly labeled "Renew now" button.',
      },
      {
        de: 'Der Agent fasst die zuvor geäußerten Bedürfnisse der Kundin zusammen, bevor er den passenden Tarif empfiehlt.',
        en: 'The agent summarizes the needs the customer stated earlier before recommending the fitting plan.',
      },
      {
        de: 'Das Skript weist die Agenten an, die Aufforderung mit Stimmbetonung beiläufig in eine Nebenbemerkung einzuflechten: "Ich will Sie zu nichts drängen – aber Sie VERLÄNGERN JETZT und haken das ab", getarnt als Smalltalk, damit die Kundin die Anweisung nicht bewusst registriert.',
        en: 'The script instructs agents to weave the directive casually into an aside using vocal stress: "I don\'t want to pressure you – but you\'ll RENEW NOW and be done with it," disguised as small talk so the customer does not consciously register the instruction.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Baustein 4 überschreitet die Grenze: Ein eingebetteter Befehl ("Sie verlängern jetzt") wird durch Stimmbetonung markiert, in eine harmlose Nebenbemerkung getarnt und bewusst so platziert, dass die Kundin die Anweisung nicht bewusst prüft – das umgeht die informierte Zustimmung und ist manipulativ (mit Compliance-Risiko im Kundenkontakt). Die anderen drei sind legitim: Das Datum der Frist zu betonen (Baustein 1) lenkt die Aufmerksamkeit auf eine echte, relevante Information; ein klar beschrifteter "Jetzt verlängern"-Button (Baustein 2) ist ein transparenter, expliziter Call-to-Action; die geäußerten Bedürfnisse zusammenzufassen (Baustein 3) ist ehrliche, bedarfsgerechte Beratung – ein Pacing-Schritt, der offen und wahrheitsgemäß bleibt und keine verdeckte Anweisung enthält. Die Linie verläuft dort, wo Betonung aufhört, relevante Information sichtbar zu machen, und beginnt, eine verdeckte Anweisung an der bewussten Prüfung vorbeizuschmuggeln.',
      en: 'Component 4 crosses the line: an embedded command ("you\'ll renew now") is marked by vocal stress, disguised as a harmless aside, and deliberately placed so the customer does not consciously scrutinize the instruction – this bypasses informed consent and is manipulative (with compliance risk in customer contact). The other three are legitimate: emphasizing the deadline date (component 1) directs attention to a genuine, relevant piece of information; a clearly labeled "Renew now" button (component 2) is a transparent, explicit call to action; summarizing the stated needs (component 3) is honest, needs-based advice – a pacing step that stays open and truthful and carries no covert instruction. The line runs where emphasis stops surfacing relevant information and starts smuggling a covert instruction past conscious scrutiny.',
    },
    points: 15,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'pacing_and_leading'],
  },
];
