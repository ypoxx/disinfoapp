import type { Exercise } from '../../types';

// pacing_and_leading — Phase 2 content batch.
export const pacingLeadingExercises: Exercise[] = [
  {
    id: 'pl-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik steckt hinter dieser Eröffnung?',
      en: 'Which persuasion technique is behind this opening?',
    },
    scenario: {
      de: 'Zu Beginn eines Produkt-Webinars sagt der Host: „Sie haben sich gerade eingeloggt, Sie sehen die Agenda vor sich, und viele von Ihnen fragen sich, ob sich die nächste Stunde wirklich lohnt — und genau deshalb schauen wir uns jetzt zuerst das eine Feature an, das Ihnen sofort Zeit spart."',
      en: 'At the start of a product webinar, the host says: "You have just logged in, you can see the agenda in front of you, and many of you are wondering whether the next hour is really worth it — and that is exactly why we will now look first at the one feature that saves you time immediately."',
    },
    options: [
      { de: 'Pacing und Leading', en: 'Pacing and leading' },
      { de: 'Embedded Commands', en: 'Embedded commands' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Wiederholung (Repetition)', en: 'Repetition' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Pacing und Leading: Der Host reiht zuerst mehrere unbestreitbar wahre Aussagen über deinen Moment aneinander (eingeloggt, Agenda sichtbar, Zweifel) — das erzeugt eine Kette kleiner innerer „Ja" und baut Rapport auf (Pacing). Über den Brücken-Konnektor „und genau deshalb" kippt er diese Zustimmung dann in eine gewünschte Richtung (Leading). Der Hebel: Wer eben mehrfach zugestimmt hat, verarbeitet den anschließenden Vorschlag flüssiger und mit weniger Widerstand. Legitim ist das, solange die Spiegelungen wahr sind und die Führung ehrlich und im Interesse der Zuhörer bleibt (hier: Aufmerksamkeit lenken); manipulativ wird es, wenn wahre Aussagen genutzt werden, um eine unbegründete oder falsche Schlussfolgerung einzuschmuggeln. Embedded Commands würde eine versteckte Handlungsaufforderung in einen Nebensatz einbetten; Priming würde Assoziationen vorab aktivieren, statt den aktuellen Zustand aktiv zu spiegeln und sofort weiterzuführen; Wiederholung bräuchte dieselbe Botschaft mehrfach über die Zeit — nichts davon liegt hier vor.',
      en: 'This is pacing and leading: the host first strings together several undeniably true statements about your moment (logged in, agenda visible, doubts) — that produces a chain of small inner "yes" responses and builds rapport (pacing). Via the bridging connector "and that is exactly why", he then tips that agreement into a desired direction (leading). The lever: someone who has just agreed several times processes the following suggestion more fluently and with less resistance. This stays legitimate as long as the mirroring is true and the leading remains honest and in the listeners\' interest (here: directing attention); it turns manipulative when true statements are used to smuggle in an unfounded or false conclusion. Embedded commands would bury a hidden call to action in a subordinate clause; priming would pre-activate associations rather than actively mirror the present state and immediately move on; repetition would need the same message several times over time — none of which is present here.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading'],
  },
  {
    id: 'pl-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik setzt die Kundenbetreuerin hier hauptsächlich ein?',
      en: 'Which persuasion technique is the account manager primarily using here?',
    },
    scenario: {
      de: 'In einem Rückgewinnungsgespräch sagt die Kundenbetreuerin zu einem kündigungsbereiten Kunden: „Ich höre, dass die letzten Wochen frustrierend waren, das Onboarding hat länger gedauert als zugesagt, und Sie überlegen jetzt ernsthaft zu wechseln. Und genau weil dieses verspätete Onboarding Sie zum Wechsel bewegt, lassen Sie uns gemeinsam den neuen, verbindlichen Zeitplan durchgehen, der das behebt."',
      en: 'In a win-back call, the account manager tells a customer who is ready to cancel: "I hear that the past weeks have been frustrating, the onboarding took longer than promised, and you are now seriously considering switching. And precisely because that delayed onboarding is what is pushing you to switch, let us go through the new, binding timeline together that fixes it."',
    },
    options: [
      { de: 'Pacing und Leading', en: 'Pacing and leading' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel ist Pacing und Leading: Die Betreuerin spiegelt zuerst den tatsächlichen Zustand des Kunden präzise wider — Frust, verspätetes Onboarding, Wechselabsicht —, lauter unbestreitbare Aussagen, die Rapport schaffen (Pacing). Mit dem Konnektor „Und genau weil dieses verspätete Onboarding Sie zum Wechsel bewegt, lassen Sie uns ..." knüpft die Führung direkt an eine soeben gespiegelte Tatsache an und dreht die Zustimmung in die gewünschte Richtung: Verbleib statt Kündigung (Leading). Legitim bleibt das, solange die Spiegelung stimmt, die Führung transparent ist und der Kunde weiterhin frei „Nein" sagen kann (echte Lösung statt Druck). Sympathie zielt darauf, durch Ähnlichkeit oder Charme gemocht zu werden — nicht auf die strukturierte Abfolge „erst spiegeln, dann führen". Commitment & Konsistenz würde an eine frühere, ausdrückliche Zusage oder ein aufgerufenes Selbstbild anknüpfen, um den Kunden daran konsistent zu binden — hier wird weder eine Vorab-Verpflichtung noch ein Wert des Kunden ins Spiel gebracht, die Brücke ist die gespiegelte Sachlage selbst. Reziprozität bräuchte eine vorausgehende Gabe, die ein Verpflichtungsgefühl erzeugt — es wird aber nichts gegeben, der Hebel ist die gespiegelte Zustimmung.',
      en: 'The lever is pacing and leading: the manager first precisely mirrors the customer\'s actual state — frustration, delayed onboarding, intent to switch — all undeniable statements that build rapport (pacing). With the connector "And precisely because that delayed onboarding is pushing you to switch, let us ...", the leading step attaches directly to a fact just mirrored and turns the agreement toward the desired direction: staying rather than cancelling (leading). This stays legitimate as long as the mirroring is accurate, the leading is transparent, and the customer remains free to say "no" (a real fix rather than pressure). Liking aims to be liked through similarity or charm — not the structured "mirror first, then lead" sequence. Commitment & consistency would invoke a prior explicit pledge or an appealed-to self-image to bind the customer to stay consistent with it — here neither an advance commitment nor a customer value is brought into play; the bridge is the mirrored situation itself. Reciprocity would need a preceding gift that creates a sense of obligation — but nothing is given; the lever is mirrored agreement.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'liking'],
  },
  {
    id: 'pl-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik trägt diese E-Mail — trotz ihres empathischen, zuhörenden Tons?',
      en: 'Which technique drives this email — despite its empathetic, listening tone?',
    },
    scenario: {
      de: 'Die Bereichsleitung kündigt den Umstieg auf eine einzige Software-Plattform an. Die E-Mail beginnt: „In den letzten Wochen habt ihr uns immer wieder gesagt, dass die Tool-Landschaft zu zersplittert ist, dass Freigaben zu lange dauern und dass die ständigen Kontextwechsel Nerven kosten." Jeder dieser Sätze stammt wörtlich aus der letzten Feedback-Runde des Teams. Der nächste Absatz lautet: „Und genau deshalb ist der Wechsel auf eine gemeinsame Plattform der logische nächste Schritt für uns alle." Intern stand die Entscheidung längst fest.',
      en: 'Division leadership announces a move to a single software platform. The email opens: "Over the past weeks you have told us again and again that the tool landscape is too fragmented, that approvals take too long, and that the constant context-switching is draining." Every one of those sentences comes verbatim from the team\'s last feedback round. The next paragraph reads: "And that is exactly why moving to one shared platform is the logical next step for all of us." Internally, the decision had long since been made.',
    },
    options: [
      { de: 'Pacing und Leading', en: 'Pacing and leading' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Pacing und Leading in Textform: Die Leitung spiegelt dem Team seine eigenen Worte zurück — nachprüfbare Aussagen, denen es ohnehin zustimmt (Pacing) — und überbrückt dann mit „Und genau deshalb" zu einer längst getroffenen Entscheidung (Leading). Die aufgebaute Zustimmung lässt den Plattformwechsel wie die eigene, logische Schlussfolgerung des Teams wirken statt wie eine Anordnung von oben; das senkt den Widerstand. Legitim ist das, wenn die gespiegelten Sorgen korrekt sind und der Sprung zur Schlussfolgerung ehrlich begründet und angreifbar bleibt; manipulativ, wenn echte Empathie einen fertigen Beschluss als scheinbar entstandenen Konsens tarnt und Einwände vorwegnimmt. Priming würde Assoziationen vor einer separaten Botschaft aktivieren — hier wird die geäußerte Erfahrung des Teams gespiegelt und sofort innerhalb einer Nachricht weitergeführt; der Pivot ist der Kern. Framing gestaltet die Darstellung eines einzelnen Fakts um (etwa „90% dafür" statt „10% dagegen") — der Mechanismus hier ist die Abfolge Spiegeln-dann-Führen, nicht ein umgedeuteter Fakt. Commitment & Konsistenz würde eine frühere ausdrückliche Zusage aufrufen; zitiert werden aber nur aktuelle Gefühle, keine Selbstverpflichtung.',
      en: 'This is pacing and leading in written form: leadership mirrors the team\'s own words back to them — verifiable statements they already agree with (pacing) — and then bridges with "And that is exactly why" to a decision that was made long ago (leading). The accumulated agreement makes the platform switch feel like the team\'s own logical conclusion rather than a top-down decree, which lowers resistance. This is legitimate when the mirrored concerns are accurate and the leap to the conclusion is honestly argued and open to challenge; it is manipulative when genuine empathy disguises a done deal as an emergent consensus and pre-empts objections. Priming would pre-activate associations before a separate message — here the team\'s expressed experience is mirrored and immediately carried onward within one message; the pivot is the point. Framing reshapes how a single fact is presented (e.g. "90% in favour" vs "10% against") — the mechanism here is the mirror-then-lead sequence, not a re-cast fact. Commitment & consistency would invoke a prior explicit pledge; only current feelings are cited, not any self-commitment.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'priming'],
  },
  {
    id: 'pl-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze den Satz: Der Mediator spiegelt zunächst die Lage und Stimmung beider Seiten in unbestreitbar wahren Sätzen und ___, sodass sein eigener Vorschlag am Ende wie die natürliche Fortsetzung der bereits erzeugten Zustimmung wirkt.',
      en: 'Complete the sentence: The mediator first mirrors the situation and mood of both sides in undeniably true statements and ___, so that his own proposal ends up feeling like the natural continuation of the agreement already created.',
    },
    scenario: {
      de: 'In einer festgefahrenen Verhandlung zwischen zwei Abteilungen fasst der Mediator zu Beginn präzise zusammen, was beide Seiten gerade erleben und befürchten — Aussagen, denen niemand widersprechen kann.',
      en: 'In a deadlocked negotiation between two departments, the mediator opens by precisely summarizing what both sides are currently experiencing and fearing — statements no one can dispute.',
    },
    options: [
      {
        de: 'lenkt beide über diese Kette aus Zustimmung schrittweise in die gewünschte Richtung (Pacing und Leading)',
        en: 'then steers both, step by step via this chain of agreement, toward the desired direction (pacing and leading)',
      },
      {
        de: 'wiederholt dieselbe Kernaussage so oft, bis sie allein durch Vertrautheit glaubwürdig wirkt (Illusory-Truth-Effekt)',
        en: 'repeats the same core claim until sheer familiarity makes it feel credible (illusory truth effect)',
      },
      {
        de: 'verbirgt eine konkrete Handlungsaufforderung unauffällig in einem Nebensatz (Embedded Commands)',
        en: 'hides a specific call to action inconspicuously inside a subordinate clause (embedded commands)',
      },
      {
        de: 'setzt zuerst einen extrem hohen Vergleichswert, an dem alles Weitere gemessen wird (Anchoring)',
        en: 'first sets an extremely high reference value against which everything else is measured (anchoring)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Satz beschreibt Pacing und Leading: Die wahren, unbestreitbaren Spiegelungen bilden eine „Ja-Kette" (Pacing), auf der der Mediator dann beide Seiten zu seinem Vorschlag führt (Leading) — die akzeptierten Aussagen wirken als Brücke, sodass die Suggestion wie ihr eigener nächster Schritt erscheint. Legitim ist das, wenn die Spiegelung stimmt und das geführte Ergebnis fair und offen auf dem Tisch liegt; manipulativ, wenn wahre Sätze nur aneinandergereiht werden, um Schwung für eine Schlussfolgerung zu erzeugen, die die Parteien sonst ablehnen würden. Die anderen Begriffe benennen andere Mechanismen: Der Illusory-Truth-Effekt beruht auf Wiederholung über die Zeit, Embedded Commands verbergen einen Befehl in einem Satz, und Anchoring setzt einen numerischen Referenzpunkt — keiner beschreibt das Spiegeln-dann-Führen.',
      en: 'The sentence describes pacing and leading: the true, undeniable mirror statements form a "yes-chain" (pacing) on which the mediator then guides both sides toward his proposal (leading) — the accepted statements act as a bridge, so the suggestion appears to be their own next step. This is legitimate when the mirroring is accurate and the guided outcome is fair and openly on the table; manipulative when true sentences are merely strung together to manufacture momentum for a conclusion the parties would otherwise reject. The other terms name different mechanisms: the illusory truth effect relies on repetition over time, embedded commands hide an imperative inside a sentence, and anchoring sets a numeric reference point — none describes the mirror-then-guide move.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'embedded_commands'],
  },
  {
    id: 'pl-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du bist Kommunikationsleiterin und sollst die Herabstufung eines bisher kostenlosen Tarifs an Bestandskunden kommunizieren. Eine Kollegin schlägt Pacing und Leading vor. Welches Vorgehen nutzt die Technik professionell und bleibt auf der richtigen Seite der Grenze?',
      en: 'You are the communications lead and must announce the downgrade of a previously free tier to existing customers. A colleague suggests pacing and leading. Which approach uses the technique professionally and stays on the right side of the line?',
    },
    options: [
      {
        de: 'Ich beginne mit wenigen, nachweislich wahren Aussagen über die tatsächliche Nutzung und Situation der Kunden, benenne dann klar und ohne Umschweife die Änderung samt konkreter Optionen und lasse erkennbar Raum, anderer Meinung zu sein — die Spiegelung bleibt ehrlich, die eigentliche Nachricht steht weit oben und unmissverständlich.',
        en: 'I open with a few demonstrably true statements about the customers\' actual usage and situation, then name the change plainly and up front together with concrete options, and I visibly leave room to disagree — the mirroring stays honest and the actual news sits high and unmistakable.',
      },
      {
        de: 'Ich reihe so viele zustimmungsfähige Sätze wie möglich aneinander, um maximalen Ja-Schwung aufzubauen, und platziere die Herabstufung ganz am Ende, damit die aufgebaute Zustimmung sie mitträgt.',
        en: 'I stack as many agreeable statements as possible to build maximum yes-momentum, and place the downgrade right at the very end so the accumulated agreement carries it along.',
      },
      {
        de: 'Ich spiegle auch Gefühle, die ich nur vermute — etwa „Sie lieben dieses Feature über alles" —, um den Rapport schneller zu vertiefen, selbst wenn ich dafür keinen Beleg habe.',
        en: 'I also mirror feelings I merely assume — such as "you love this feature above all else" — to deepen rapport faster, even without any evidence for them.',
      },
      {
        de: 'Ich lasse das Spiegeln weg und nenne stattdessen zuerst einen abschreckend hohen Alternativpreis, neben dem die Herabstufung großzügig wirkt.',
        en: 'I drop the mirroring and instead lead with a deterrently high alternative price next to which the downgrade looks generous.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Professionelles Pacing und Leading spiegelt nur, was wahr und nachprüfbar ist, führt dann transparent weiter und lässt den Leser echt frei, anderer Meinung zu sein — die eigentliche Nachricht bleibt oben und klar (Option 0). Option 1 behält den Mechanismus, überschreitet aber die Grenze: Schlechte Nachrichten ans Ende zu schieben, um die aufgebaute Zustimmung auszunutzen, ist irreführend, lädt zum Vertrauens-Backlash ein, sobald es auffällt, und verletzt Transparenznormen. Option 2 erfindet Pacing-Aussagen — sie spiegelt Gefühle, für die es keinen Beleg gibt —, das wirkt als falsche Nähe und löst genau in dem Moment Reaktanz aus, in dem es unecht klingt: der klassische Bumerang schlechten Pacings. Option 3 verlässt Pacing und Leading zugunsten eines konstruierten Ankers; das verwechselt nicht nur die Technik, ein künstlicher Referenzpreis ist zudem selbst manipulativ. Die Grenze: Pacing muss wahr sein, Leading transparent, und der Empfänger muss frei „Nein" sagen können.',
      en: 'Professional pacing and leading mirrors only what is true and verifiable, then leads transparently and leaves the reader genuinely free to disagree — the actual news stays high and clear (option 0). Option 1 keeps the mechanism but crosses the line: pushing bad news to the end to exploit the accumulated agreement is deceptive, invites a trust backlash the moment it is noticed, and breaches transparency norms. Option 2 fabricates pacing statements — it mirrors feelings for which there is no evidence — which reads as false intimacy and triggers reactance the instant it rings untrue: the classic backfire of bad pacing. Option 3 abandons pacing and leading for a manufactured anchor; besides misidentifying the technique, an artificial reference price is itself manipulative. The line: pacing must be true, leading must be transparent, and the recipient must stay free to say "no".',
    },
    points: 15,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'anchoring'],
  },
  {
    id: 'pl-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team entwirft ein Pacing-und-Leading-Skript für Rückgewinnungs-Telefonate. Drei Bausteine bleiben im legitimen Bereich, einer überschreitet die ethische Grenze. Welcher?',
      en: 'Your team is drafting a pacing-and-leading script for win-back calls. Three components stay within the legitimate range, one crosses the ethical line. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine für den Gesprächsleitfaden:',
      en: 'Planned components for the call script:',
    },
    options: [
      {
        de: 'Zum Einstieg bestätigen die Agents die tatsächliche Vertragshistorie und die konkret im Ticketsystem dokumentierten Probleme des Kunden.',
        en: 'To open, agents acknowledge the customer\'s actual contract history and the specific problems documented in the ticket system.',
      },
      {
        de: 'Nach der Spiegelung nennen die Agents das Verlängerungsangebot offen und sagen ausdrücklich, dass der Kunde ablehnen kann.',
        en: 'After the mirroring, agents state the renewal offer openly and explicitly say that the customer may decline.',
      },
      {
        de: 'Die Agents sind geschult, Sprechtempo und Tonlage des Kunden aufzunehmen (ruhig bei ruhig, zügig bei zügig), um das Gespräch angenehm zu halten.',
        en: 'Agents are trained to match the customer\'s pace and tone (calm with calm, brisk with brisk) to keep the conversation comfortable.',
      },
      {
        de: 'Direkt nach den wahren Aussagen setzt das Skript im selben bestätigenden Ton einen erfundenen Satz — „und wie Sie ja längst gemerkt haben, ist ein Anbieterwechsel für Ihr Team praktisch unmöglich" —, den der Kunde nie gesagt oder erlebt hat.',
        en: 'Right after the true statements, the script inserts, in the same confirming tone, a fabricated sentence — "and as you have long since noticed, switching providers is practically impossible for your team" — which the customer never said or experienced.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitimes Pacing und Leading spiegelt nur Wahres und führt transparent weiter. Die Bausteine 1 bis 3 bleiben innerhalb der Grenze: die dokumentierte Historie anzuerkennen ist korrektes Pacing, das Angebot offen zu nennen und ein echtes Ablehnungsrecht einzuräumen ist ehrliches Leading, und Tempo und Tonlage aufzunehmen ist üblicher, harmloser Rapport-Aufbau. Baustein 4 überschreitet die Grenze: Er nutzt den durch die echten Aussagen erzeugten Ja-Schwung, um im selben selbstverständlichen Ton eine unbelegte, falsche Behauptung einzuschmuggeln — Täuschung im Gewand von Rapport. Weil der Kunde das nie gesagt oder erlebt hat, fabriziert das „wie Sie ja gemerkt haben" Zustimmung zu einer Unwahrheit und setzt das Unternehmen dem Verlust von Vertrauen und — als Falschdarstellung der Wechselkosten — möglichem rechtlichem Risiko aus. Prüfe jedes Element an drei Fragen: Ist die gespiegelte Aussage wahr, ist die Führung transparent, und bleibt der Kunde frei, zu widersprechen?',
      en: 'Legitimate pacing and leading mirrors only what is true and leads transparently. Components 1 to 3 stay inside the line: acknowledging documented history is accurate pacing, stating the offer openly with a real right to decline is honest leading, and matching pace and tone is standard, harmless rapport-building. Component 4 crosses it: it exploits the yes-momentum built by the genuine statements to smuggle an unverified, false claim in the same self-evident tone — deception dressed as rapport. Because the customer never said or observed it, the "as you have noticed" framing manufactures agreement to a falsehood and exposes the company to loss of trust and — as a misrepresentation of switching costs — potential legal risk. Test each element against three questions: is the mirrored statement true, is the leading transparent, and does the customer stay free to disagree?',
    },
    points: 15,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'liking'],
  },
];
