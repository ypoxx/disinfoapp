import type { Exercise } from '../../types';

// ad_hominem — Phase 2 content batch.
export const adHominemExercises: Exercise[] = [
  {
    id: 'ah-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik setzt der Sprecher hier ein?',
      en: 'Which persuasion technique is the spokesperson using here?',
    },
    scenario: {
      de: 'In einer Presse-Fragerunde will eine Journalistin die neuen Sicherheitsdaten des Produkts hinterfragen. Statt auf die Daten einzugehen, entgegnet der Unternehmenssprecher: „Sie sind viel zu jung und unerfahren, um unsere Ingenieursarbeit überhaupt beurteilen zu können."',
      en: 'In a press Q&A, a journalist wants to question the product’s new safety data. Instead of addressing the data, the company spokesperson replies: “You are far too young and inexperienced to judge our engineering work at all.”',
    },
    options: [
      { de: 'Ad Hominem', en: 'Ad hominem' },
      { de: 'Strohmann (Straw Man)', en: 'Straw man' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein klassischer Ad Hominem: Statt die Sicherheitsdaten zu prüfen, greift der Sprecher die Person an — ihr Alter und ihre Erfahrung — und lenkt so von der Sachfrage ab. Der Mechanismus wirkt, weil das Publikum die Glaubwürdigkeit der Quelle mit der Gültigkeit ihres Arguments verwechselt. Die Grenze: Auf echte, sachlich relevante Kompetenz zu verweisen ist legitim; hier dient der Angriff aber nur dazu, eine unbequeme Frage abzuwürgen. Strohmann wäre es, wenn er die Frage verzerrt wiedergäbe und diese Zerrform angriffe — er verdreht aber nichts, er attackiert die Person. Ein emotionaler Appell würde gezielt Gefühle ansprechen; ein Autoritätsargument würde eine Experteninstanz als Beweis anführen — beides passiert hier nicht.',
      en: 'This is a textbook ad hominem: instead of examining the safety data, the spokesperson attacks the person — her age and experience — and thereby diverts from the substantive question. The mechanism works because the audience confuses the credibility of the source with the validity of her argument. The boundary: pointing to genuine, materially relevant competence is legitimate; here the attack merely serves to shut down an inconvenient question. Straw man would apply if he restated the question in a distorted form and attacked that distortion — but he twists nothing, he attacks the person. An emotional appeal would deliberately target feelings; an appeal to authority would cite an expert as proof — neither happens here.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'ah-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Reaktion vor allem?',
      en: 'Which technique primarily shapes this response?',
    },
    scenario: {
      de: 'Ein Wettbewerber veröffentlicht eine sauber belegte Studie, die die Emissionsangaben deines Kunden anzweifelt. In der offiziellen Stellungnahme geht das Kommunikationsteam nicht auf die Messwerte ein, sondern schreibt: „Der Hauptautor der Studie war früher bei einer Verbraucherschutz-Organisation tätig, die unsere Branche seit Jahren kritisiert — das sollten die Leserinnen und Leser bei der Bewertung im Hinterkopf behalten."',
      en: 'A competitor publishes a well-documented study questioning your client’s emissions figures. In the official statement, the communications team does not address the measured values but writes: “The study’s lead author previously worked for a consumer-watchdog group that has criticised our industry for years — readers should keep that in mind when weighing it.”',
    },
    options: [
      { de: 'Ad Hominem', en: 'Ad hominem' },
      { de: 'Strohmann (Straw Man)', en: 'Straw man' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Hier wirkt ein Ad Hominem in seiner „umständlichen" Variante (circumstantial): Nicht die Messwerte werden geprüft, sondern der Hintergrund des Autors wird angeführt, um die Studie ohne Sachprüfung zu entwerten. Der Hebel: Das Publikum überträgt ein Misstrauen gegen die Person auf ihre Daten. Die Grenze verläuft fein — ein echter Interessenkonflikt darf transparent offengelegt werden, wenn er belegbar und relevant ist. Manipulativ wird es, wenn eine frühere Tätigkeit nur als Etikett benutzt wird, um belastbare Messwerte gar nicht erst diskutieren zu müssen. Strohmann würde die Studienaussage verzerren (tut die Stellungnahme nicht). Ein Autoritätsargument würde eine Experteninstanz als Beweis heranziehen — hier wird Glaubwürdigkeit angegriffen, nicht zitiert. Ein emotionaler Appell würde direkt Angst oder Empörung schüren; der Ton bleibt aber sachlich-suggestiv.',
      en: 'This is an ad hominem in its circumstantial form: rather than examining the measured values, the author’s background is invoked to devalue the study without engaging its substance. The lever: the audience transfers distrust of the person onto her data. The boundary is fine — a genuine conflict of interest may be disclosed transparently when it is documented and relevant. It turns manipulative when a former role is used purely as a label to avoid discussing solid measurements at all. Straw man would distort the study’s claim (the statement does not). An appeal to authority would cite an expert as proof — here credibility is attacked, not cited. An emotional appeal would directly stoke fear or outrage; the tone here stays factual-suggestive.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'straw_man'],
  },
  {
    id: 'ah-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik steckt hinter dieser souverän klingenden Antwort?',
      en: 'Which technique lies behind this smooth-sounding answer?',
    },
    scenario: {
      de: 'In einer Krisen-Fragerunde verweist eine Reporterin auf den Test eines unabhängigen Labors, der einen Produktmangel belegt. Der Sprecher bleibt betont ruhig und sagt: „Ich möchte höflich anmerken, dass dieses Labor fast vollständig von unserem größten Wettbewerber finanziert wird — bei allem Respekt sagt das Ergebnis also mehr darüber aus, wer dafür bezahlt hat, als über unser Produkt."',
      en: 'In a crisis Q&A, a reporter cites an independent lab’s test documenting a product defect. The spokesperson stays pointedly calm and says: “I’d politely note that this lab is funded almost entirely by our largest competitor — so with all due respect, the result tells you more about who paid for it than about our product.”',
    },
    options: [
      { de: 'Ad Hominem', en: 'Ad hominem' },
      { de: 'Strohmann (Straw Man)', en: 'Straw man' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Auch das ist ein Ad Hominem (circumstantial), nur elegant verpackt: Der ruhige, höfliche Ton verdeckt, dass der Sprecher den Testbefund nicht widerlegt, sondern die Quelle über ihre Finanzierung diskreditiert — „schau, wer bezahlt hat" ersetzt „schau, was gemessen wurde". Genau hier liegt die anspruchsvolle Grenze: Ein tatsächlicher, belegbarer Interessenkonflikt ist ein legitimer Hinweis, ersetzt aber niemals die Sachprüfung. Manipulativ wird es, wenn die Finanzierung als Totschlagargument dient, um belastbare Messdaten gar nicht zu prüfen. Strohmann scheidet aus, weil der Befund nicht verzerrt, sondern übergangen wird. Das Autoritätsargument ist der verlockendste Fehlgriff: Es zitiert eine Instanz als Beweis — hier wird Glaubwürdigkeit jedoch angegriffen, also gespiegelt, nicht behauptet. Ein emotionaler Appell fehlt gerade, weil der Ton bewusst sachlich gehalten ist — was den Angriff sogar wirksamer macht.',
      en: 'This too is a circumstantial ad hominem, only elegantly wrapped: the calm, courteous tone hides that the spokesperson does not refute the test finding but discredits the source via its funding — “look who paid” replaces “look what was measured”. This is exactly where the demanding boundary sits: a real, documented conflict of interest is a legitimate flag, but it never substitutes for examining the substance. It becomes manipulative when the funding is used as a conversation-stopper to avoid testing solid measurements at all. Straw man is out, because the finding is bypassed, not distorted. Appeal to authority is the most tempting miss: it cites an authority as proof — but here credibility is attacked, i.e. the mirror image, not asserted. An emotional appeal is absent precisely because the tone is deliberately factual — which makes the attack even more effective.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'authority'],
  },
  {
    id: 'ah-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit der Bemerkung „Das sagst ausgerechnet du" ___, statt sich mit den vorgelegten Produktivitätszahlen auseinanderzusetzen.',
      en: 'Complete the sentence: With the remark “That’s rich, coming from you”, the manager ___ instead of engaging with the productivity figures presented.',
    },
    scenario: {
      de: 'In der Diskussion über eine neue Homeoffice-Regelung legt ein Mitarbeiter Zahlen vor, die zeigen, dass seine Produktivität von zu Hause aus gestiegen ist. Die Führungskraft entgegnet nur: „Das sagst ausgerechnet du — du willst doch bloß vom Strand aus arbeiten."',
      en: 'In the discussion about a new work-from-home policy, an employee presents figures showing his productivity rose while working remotely. The manager merely retorts: “That’s rich, coming from you — you just want to work from the beach.”',
    },
    options: [
      {
        de: 'greift die Führungskraft die Motive und den Charakter der Person an, um deren Argument zu entwerten (Ad Hominem)',
        en: 'the manager attacks the person’s motives and character to devalue their argument (ad hominem)',
      },
      {
        de: 'gibt die Führungskraft das Argument verzerrt wieder und widerlegt nur diese Zerrform (Strohmann)',
        en: 'the manager restates the argument in distorted form and only rebuts that distortion (straw man)',
      },
      {
        de: 'beruft sich die Führungskraft auf den Status einer Expertin als Beweis (Autoritätsargument)',
        en: 'the manager invokes an expert’s status as proof (appeal to authority)',
      },
      {
        de: 'erzwingt die Führungskraft eine Wahl zwischen nur zwei Möglichkeiten (Falsche Dichotomie)',
        en: 'the manager forces a choice between only two options (false dichotomy)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus ist Ad Hominem: „Das sagst ausgerechnet du" verschiebt den Fokus von den Zahlen auf ein unterstelltes Eigeninteresse der Person — die Daten bleiben unwiderlegt. Der Hebel funktioniert, weil ein Motiv-Verdacht leichter hängen bleibt als eine Tabelle mit Messwerten. Legitim wäre, ein echtes Eigeninteresse offen anzusprechen und trotzdem die Zahlen zu prüfen; manipulativ ist es, das Motiv als Ersatz für die Sachprüfung zu benutzen. Der Strohmann würde das Argument verdrehen (es wird hier nur übergangen), das Autoritätsargument würde eine Instanz als Beweis anführen, die Falsche Dichotomie würde künstlich auf zwei Optionen verengen — keiner dieser Mechanismen greift, denn angegriffen wird allein die Person.',
      en: 'The mechanism is ad hominem: “That’s rich, coming from you” shifts the focus from the figures to an imputed self-interest of the person — the data stays unrefuted. The lever works because a suspicion of motive sticks more easily than a table of measurements. It would be legitimate to name a genuine self-interest openly and still examine the figures; it is manipulative to use the motive as a substitute for that examination. Straw man would twist the argument (here it is merely bypassed), appeal to authority would cite an instance as proof, false dichotomy would artificially narrow things to two options — none of these mechanisms applies, because it is the person alone who is attacked.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'ah-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als Kommunikationsverantwortliche damit um?',
      en: 'As the communications lead, how do you handle this?',
    },
    scenario: {
      de: 'Eine ehemalige Mitarbeiterin veröffentlicht einen offenen Brief über die Unternehmenskultur — emotional, in Teilen sachlich falsch, aber viral. Ein Kollege legt dir einen Antwortentwurf vor, der vor allem ihre schwachen früheren Leistungsbeurteilungen und persönlichen Konflikte ausbreitet, um ihre Glaubwürdigkeit zu zerstören.',
      en: 'A former employee publishes an open letter about the company culture — emotional, partly factually wrong, but going viral. A colleague hands you a draft reply that mainly airs her weak past performance reviews and personal conflicts, in order to destroy her credibility.',
    },
    options: [
      {
        de: 'Ich streiche den persönlichen Angriff und antworte sachlich: Die konkreten Falschbehauptungen werden mit Belegen korrigiert, der Rest respektvoll eingeordnet. Den Messenger anzugreifen ist ein Ad Hominem, das die Vorwürfe nicht entkräftet, defensiv wirkt und mit dem Ausbreiten interner Personaldaten obendrein rechtliche und HR-Risiken schafft.',
        en: 'I cut the personal attack and respond factually: the specific false claims are corrected with evidence, the rest addressed respectfully. Attacking the messenger is an ad hominem that refutes none of the allegations, looks defensive, and — by airing internal personnel data — also creates legal and HR risk.',
      },
      {
        de: 'Ich veröffentliche den Leistungs-Absatz wie vorgeschlagen — die Quelle zu diskreditieren ist der schnellste Weg, den Brief zu entschärfen.',
        en: 'I publish the performance paragraph as proposed — discrediting the source is the fastest way to defuse the letter.',
      },
      {
        de: 'Ich reagiere gar nicht und hoffe, dass die Sache von selbst abklingt.',
        en: 'I do not respond at all and hope the matter fades on its own.',
      },
      {
        de: 'Ich stelle es als klare Wahl dar: „Entweder ihr glaubt den Menschen, die hier wirklich arbeiten, oder einer einzigen verbitterten Ex-Kollegin."',
        en: 'I frame it as a clear choice: “Either you trust the people who actually work here, or one single embittered former colleague.”',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) trennt Technik und Ethik sauber: Sie widerlegt die Falschbehauptungen sachlich und verzichtet auf den Personenangriff. Das ist auch strategisch klug, denn ein Ad Hominem gegen eine Whistleblowerin löst typischerweise einen Bumerang aus — er wirkt wie ein Schuldeingeständnis, befeuert die Reichweite (Streisand-Effekt) und kann mit veröffentlichten Personalakten Datenschutz- und Arbeitsrecht verletzen. Option 2 IST genau dieser Ad Hominem und maximiert das Risiko. Option 4 vermeidet zwar sichtbare Beleidigungen, ersetzt die Sachfrage aber durch eine Falsche Dichotomie mit eingebautem Ad Hominem („verbitterte Ex-Kollegin") — doppelt manipulativ. Option 3 (Schweigen) vermeidet den Angriff, lässt aber die kursierenden Falschaussagen unkorrigiert und verschenkt die legitime Richtigstellung. Die Grenze: Fakten korrigieren ja, Person demontieren nein.',
      en: 'Only option 1 (index 0) cleanly separates technique from ethics: it refutes the false claims factually and drops the personal attack. It is also strategically wise, because an ad hominem against a whistleblower typically backfires — it reads like an admission of guilt, amplifies reach (the Streisand effect), and, by publishing personnel records, can breach data-protection and employment law. Option 2 IS exactly that ad hominem and maximizes the risk. Option 4 avoids visible insults but replaces the substantive question with a false dichotomy carrying a built-in ad hominem (“embittered former colleague”) — doubly manipulative. Option 3 (silence) avoids the attack but leaves the circulating falsehoods uncorrected and forfeits the legitimate rebuttal. The boundary: correct the facts, yes; dismantle the person, no.',
    },
    points: 15,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'false_dichotomy'],
  },
  {
    id: 'ah-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein PR-Team stellt ein Erwiderungspaket zu einem kritischen Investigativ-Artikel zusammen. Welches geplante Element überschreitet die Grenze von legitimer Erwiderung zu einem unzulässigen persönlichen Angriff?',
      en: 'Your PR team is assembling a rebuttal package to a critical investigative article. Which planned element crosses the line from legitimate rebuttal into an improper personal attack?',
    },
    scenario: {
      de: 'Geplante Bausteine des Erwiderungspakets:',
      en: 'Planned components of the rebuttal package:',
    },
    options: [
      {
        de: 'Eine Punkt-für-Punkt-Richtigstellung der drei nachweisbaren Sachfehler im Artikel, jeweils mit belegter Quelle.',
        en: 'A point-by-point correction of the three demonstrable factual errors in the article, each with a sourced reference.',
      },
      {
        de: 'Der transparente, dokumentierte Hinweis, dass ein im Artikel zitierter „unabhängiger Experte" bezahlter Berater eines Wettbewerbers ist.',
        en: 'A transparent, documented note that an “independent expert” quoted in the article is a paid consultant for a competitor.',
      },
      {
        de: 'Eine ruhige Bekräftigung der Sicherheitsbilanz mit Verweis auf externe Audit-Berichte.',
        en: 'A calm reaffirmation of the safety record, referencing external audit reports.',
      },
      {
        de: 'Ein Sprachregelungs-Baustein, der den Sprechern nahelegt, die frühere Scheidung und die finanziellen Probleme der verantwortlichen Journalistin zu erwähnen, um sie als „verbittert und unzuverlässig" darzustellen.',
        en: 'A talking-point component advising spokespeople to reference the lead journalist’s past divorce and financial troubles, to paint her as “bitter and unreliable”.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Baustein 4 (Index 3) überschreitet die Grenze: Die private Scheidung und Geldprobleme der Journalistin haben null Bezug zur Richtigkeit ihrer Recherche — sie zu erwähnen ist ein reiner Ad Hominem, der die Person beschädigen soll, statt den Artikel zu widerlegen; obendrein drohen Persönlichkeitsrechts- und Verleumdungsrisiken. Der Kontrast zu Baustein 2 (Index 1) ist die eigentliche Lernpointe: Ein belegter Interessenkonflikt einer zitierten Quelle ist KEIN Ad Hominem, sondern eine legitime, sachlich relevante Offenlegung — solange sie dokumentiert ist und die inhaltliche Erwiderung nicht ersetzt. Die Richtigstellung der Sachfehler (Index 0) und die Bekräftigung mit Audit-Belegen (Index 2) bleiben klar auf der Sachebene. Prüffragen für die Grenze: Ist der Hinweis sachlich relevant, belegt — und richtet er sich gegen das Argument oder nur gegen die Person?',
      en: 'Component 4 (index 3) crosses the line: the journalist’s private divorce and money troubles have zero bearing on the accuracy of her reporting — raising them is a pure ad hominem meant to damage the person rather than refute the article; on top of that it risks privacy and defamation exposure. The contrast with component 2 (index 1) is the real teaching point: a documented conflict of interest of a quoted source is NOT an ad hominem but a legitimate, materially relevant disclosure — as long as it is documented and does not replace the substantive rebuttal. Correcting the factual errors (index 0) and reaffirming with audit evidence (index 2) stay clearly on the level of substance. Boundary test questions: is the point materially relevant, documented — and does it target the argument or merely the person?',
    },
    points: 15,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem'],
  },
];
