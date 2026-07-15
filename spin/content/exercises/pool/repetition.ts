import type { Exercise } from '../../types';

// repetition — Phase 2 content batch.
export const repetitionExercises: Exercise[] = [
  {
    id: 'rp-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik steht hinter diesem Vorgehen?',
      en: 'Which persuasion technique is behind this approach?',
    },
    scenario: {
      de: 'Zum Launch nutzt ein Start-up denselben Slogan „Einfach. Sicher. Für alle." wortgleich in jedem Werbespot, jeder E-Mail-Signatur, jedem Social-Post und auf jedem Messebanner — immer wieder exakt dieselbe Zeile.',
      en: 'For its launch, a start-up uses the same slogan "Simple. Safe. For everyone." word for word in every ad, every email signature, every social post and on every trade-fair banner — the exact same line, over and over.',
    },
    options: [
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Wiederholung (Mere-Exposure-Effekt): Dieselbe Botschaft immer wieder wortgleich auszuspielen erhöht Vertrautheit, Wiedererkennung und Akzeptanz — ganz unabhängig davon, ob neue Argumente dazukommen. Legitim ist das als Wiedererkennungsanker beim Markenaufbau; manipulativ wird es, wenn eine unbelegte Behauptung so lange wiederholt wird, bis sie allein durch Vertrautheit „stimmt". Priming würde vorab verwandte Assoziationen wecken, statt dieselbe Zeile zu wiederholen; Sozialer Beweis bräuchte einen Verweis darauf, dass viele andere es tun oder glauben; Framing würde dieselbe Information aus einem gewählten Blickwinkel neu darstellen — hier bleibt die Zeile aber jedes Mal identisch, und genau diese Identität ist das Kennzeichen der Wiederholung.',
      en: 'This is repetition (the mere-exposure effect): running the same message verbatim again and again raises familiarity, recognition and acceptance — regardless of whether any new argument is added. It is legitimate as a recognition anchor in brand-building; it turns manipulative when an unsupported claim is repeated until it "feels true" through familiarity alone. Priming would evoke related associations beforehand rather than repeat the identical line; social proof would need a reference to many others doing or believing it; framing would re-present the same information from a chosen angle — but here the line stays identical every time, and that very sameness is the signature of repetition.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition'],
  },
  {
    id: 'rp-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'In einem Veränderungsprogramm wiederholt die Geschäftsführung über Monate in jedem Townhall, jedem Newsletter und auf jedem Intranet-Banner exakt denselben Satz: „Gemeinsam gestalten wir den Wandel." Neue Argumente folgen nicht — der Satz allein soll vertraut und selbstverständlich werden.',
      en: 'In a change program, leadership repeats the exact same sentence for months in every town hall, every newsletter and on every intranet banner: "Together we shape the change." No new arguments follow — the sentence alone is meant to become familiar and self-evident.',
    },
    options: [
      { de: 'Framing', en: 'Framing' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Hebel ist Wiederholung: Ein und derselbe Satz wird über viele Kanäle und Wochen wortgleich ausgespielt, damit er allein durch Vertrautheit akzeptiert wird (Mere-Exposure-Effekt). Legitim ist das, um eine gemeinsame Sprache und Wiedererkennung zu schaffen; manipulativ wird es, wenn die wiederholte Formel echte Argumente und Rückfragen ersetzt. Framing scheidet aus, weil dieselbe Aussage nicht aus einem neuen Blickwinkel dargestellt, sondern identisch wiederholt wird. Priming würde vorab verwandte Konzepte aktivieren, nicht denselben Satz hämmern. Narrative Persuasion würde über eine Geschichte mit Figuren und Handlung überzeugen — hier gibt es keine Erzählung, nur eine wiederholte Parole.',
      en: 'The lever is repetition: one and the same sentence is run verbatim across many channels and weeks so that it is accepted through familiarity alone (mere-exposure effect). It is legitimate for building a shared language and recognition; it becomes manipulative when the repeated formula replaces real arguments and questions. Framing is out because the statement is not re-presented from a new angle but repeated identically. Priming would pre-activate related concepts, not hammer the same sentence. Narrative persuasion would convince through a story with characters and plot — there is no narrative here, only a repeated slogan.',
    },
    points: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'priming'],
  },
  {
    id: 'rp-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik steht hier im Vordergrund?',
      en: 'Which technique is primarily at work here?',
    },
    scenario: {
      de: 'In einem schwierigen Interview weicht eine Sprecherin, im Medientraining auf die „Broken-Record"-Technik gecoacht, jeder kritischen Frage aus und kehrt — egal wonach gefragt wird — immer zu exakt demselben Kernsatz zurück: „Sicherheit hat für uns oberste Priorität." Innerhalb von zehn Minuten fällt diese Zeile fünfmal wortgleich, damit genau sie und keine inhaltliche Antwort als Zitat in der Berichterstattung hängen bleibt.',
      en: 'In a tough interview, a spokesperson coached in the media-training "broken record" technique dodges every critical question and — no matter what is asked — always returns to the exact same core sentence: "Safety is our top priority." Within ten minutes the line is delivered verbatim five times, so that precisely it, and no substantive answer, is what sticks as the quote in the coverage.',
    },
    options: [
      { de: 'Wahrheitsillusion', en: 'Illusory truth effect' },
      { de: 'Pacing and Leading', en: 'Pacing and leading' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Die eingesetzte Technik ist Wiederholung: Derselbe Kernsatz wird wortgleich immer wieder platziert („Broken Record" / Message-Discipline), um Wiedererkennung, Salienz und Share-of-Voice zu maximieren — die Zeile soll die Berichterstattung dominieren. Legitim ist diszipliniertes Bei-der-Kernbotschaft-Bleiben; manipulativ wird es, wenn die wiederholte Formel konkrete Fragen ins Leere laufen lässt und Antworten ersetzt. Die Wahrheitsillusion ist die verlockende Nachbar-Antwort, benennt aber die kognitive Wirkung (wiederholte Aussagen wirken wahrer) — gefragt ist jedoch die Technik, die die Sprecherin aktiv anwendet, und das ist das Wiederholen selbst; zudem geht es hier um Erinnerbarkeit und Dominanz der Zeile, nicht um den gefühlten Wahrheitsgehalt einer prüfbaren Behauptung. Pacing and Leading würde erst den Zustand des Gegenübers spiegeln und dann führen — davon ist nichts zu sehen. Framing würde denselben Sachverhalt aus einem gewählten Blickwinkel darstellen, doch hier bleibt der Wortlaut jedes Mal exakt gleich.',
      en: 'The technique in play is repetition: the same core sentence is placed verbatim over and over ("broken record" / message discipline) to maximize recognition, salience and share of voice — the line is meant to dominate the coverage. Disciplined staying-on-message is legitimate; it becomes manipulative when the repeated formula lets concrete questions run into the void and substitutes for answers. The illusory truth effect is the tempting neighbouring answer, but it names the cognitive result (repeated statements feel more true) — what is asked for is the technique the spokesperson actively applies, and that is the repeating itself; moreover this is about the recall and dominance of the line, not the perceived truth of a checkable claim. Pacing and leading would first mirror the counterpart\'s state and then guide — none of which appears here. Framing would present the same facts from a chosen angle, yet here the wording stays exactly the same each time.',
    },
    points: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'illusory_truth_effect'],
  },
  {
    id: 'rp-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Weil die identische Aussage über Wochen auf allen Kanälen ___, gewinnt sie allein durch die entstehende Vertrautheit an gefühlter Glaubwürdigkeit — auch ohne einen einzigen neuen Beleg.',
      en: 'Complete: because the identical statement ___ across all channels for weeks, it gains felt credibility purely through the resulting familiarity — without a single new piece of evidence.',
    },
    scenario: {
      de: 'Eine Awareness-Kampagne spielt dieselbe Kernaussage über Wochen unverändert auf Plakaten, in Radiospots und in Social-Media-Anzeigen aus.',
      en: 'An awareness campaign runs the same core statement unchanged for weeks on billboards, in radio spots and in social-media ads.',
    },
    options: [
      { de: 'immer wieder wortgleich wiederholt wird (Wiederholung / Mere-Exposure-Effekt)', en: 'is repeated verbatim again and again (repetition / mere-exposure effect)' },
      { de: 'aus einem neuen Blickwinkel dargestellt wird (Framing)', en: 'is presented from a new angle (framing)' },
      { de: 'als knappes, bald auslaufendes Angebot markiert wird (Knappheit)', en: 'is marked as a scarce, soon-expiring offer (scarcity)' },
      { de: 'von prominenten Fachleuten beglaubigt wird (Autorität)', en: 'is vouched for by prominent experts (authority)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Richtig ist „immer wieder wortgleich wiederholt": Der Mechanismus ist der Mere-Exposure-Effekt — je häufiger wir derselben Aussage begegnen, desto vertrauter und damit gefühlt glaubwürdiger wirkt sie, unabhängig vom Wahrheitsgehalt. Legitim ist Wiederholung, um eine belegte Kernbotschaft erinnerbar zu machen; manipulativ, sobald eine unbelegte Behauptung durch bloße Frequenz „wahr" gemacht werden soll. Framing würde die Darstellung ändern, nicht die Frequenz; Knappheit bräuchte einen Verfügbarkeits- oder Zeitdruck; Autorität bräuchte eine glaubwürdige Quelle als Bürgen — keiner dieser Hebel wird hier gezogen, es zählt allein die schiere Wiederholung.',
      en: 'The correct completion is "is repeated verbatim again and again": the mechanism is the mere-exposure effect — the more often we encounter the same statement, the more familiar and therefore the more credible it feels, regardless of its truth. Repetition is legitimate for making a substantiated core message memorable; it is manipulative the moment an unsupported claim is meant to be made "true" through sheer frequency. Framing would change the presentation, not the frequency; scarcity would need availability or time pressure; authority would need a credible source as guarantor — none of these levers is pulled here; only sheer repetition counts.',
    },
    points: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'illusory_truth_effect'],
  },
  {
    id: 'rp-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein falsches Gerücht kursiert. Wie setzt du Wiederholung als PR-Profi richtig ein, ohne das Gerücht zu verstärken?',
      en: 'A false rumor is circulating. As a PR professional, how do you use repetition correctly without amplifying the rumor?',
    },
    scenario: {
      de: 'Über deinen Kunden kursiert das falsche Gerücht „Produkt X sei unsicher". Eine Kollegin schlägt vor, ab sofort täglich mehrfach den Satz „Produkt X ist NICHT unsicher" auf allen Kanälen zu posten — so oft wie möglich, damit die Richtigstellung sich durchsetzt.',
      en: 'A false rumor is circulating about your client: "Product X is unsafe." A colleague proposes posting the sentence "Product X is NOT unsafe" several times a day across all channels from now on — as often as possible, so that the correction prevails.',
    },
    options: [
      {
        de: 'Eine klare, positiv formulierte und belegte Kernaussage („Produkt X erfüllt die unabhängig geprüfte Sicherheitsnorm Y") in maßvoller Taktung konsequent über die Kanäle wiederholen — ohne das Gerücht selbst zu zitieren.',
        en: 'Consistently repeat a clear, positively phrased and substantiated core message ("Product X meets the independently tested safety standard Y") at a measured cadence across channels — without quoting the rumor itself.',
      },
      {
        de: 'Den Vorschlag übernehmen und die Verneinung „Produkt X ist NICHT unsicher" mehrmals täglich wiederholen, bis das Gerücht widerlegt ist.',
        en: 'Adopt the proposal and repeat the negation "Product X is NOT unsafe" several times a day until the rumor is refuted.',
      },
      {
        de: 'Gar nichts sagen: Jede Wiederholung riskiert einen Streisand-Effekt, also das Thema komplett aussitzen.',
        en: 'Say nothing at all: any repetition risks a Streisand effect, so simply wait the topic out.',
      },
      {
        de: 'Die emotional stärkste Gegenbotschaft mit maximaler Frequenz auf jedem Kanal ausspielen — je öfter, desto besser.',
        en: 'Run the emotionally strongest counter-message at maximum frequency on every channel — the more often, the better.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Beste Wahl ist es, die richtige, belegte Botschaft affirmativ und in maßvoller Frequenz zu wiederholen, ohne das Gerücht zu wiederholen. Der Grund liegt in einem Effekt zweiter Ordnung: Wiederholt man eine Falschbehauptung — selbst zum Widerlegen —, steigt allein durch die Vertrautheit ihr gefühlter Wahrheitsgehalt (Wahrheitsillusion / Continued-Influence-Effekt). Die zweite Option tut genau das: „Produkt X ist NICHT unsicher" transportiert die Verknüpfung „Produkt X — unsicher" mit und verankert sie tiefer. Nichts zu sagen überkorrigiert: Schweigen überlässt dem Gerücht die alleinige Wiederholung und damit die Salienz; ein bloßes Aussitzen zediert das Feld. Die maximale Frequenz ignoriert Werbe-Wearout und Reaktanz — zu hohe Kadenz wirkt wie Spin, ermüdet das Publikum und kann Abwehr auslösen. Die professionelle Grenze: Wiederhole die Wahrheit, nicht den Mythos, und dosiere die Frequenz.',
      en: 'The best choice is to repeat the correct, substantiated message affirmatively and at a measured frequency, without repeating the rumor. The reason is a second-order effect: repeating a false claim — even to debunk it — raises its felt truth through familiarity alone (illusory truth / continued-influence effect). The second option does exactly that: "Product X is NOT unsafe" carries the association "Product X — unsafe" along and entrenches it more deeply. Saying nothing overcorrects: silence leaves the rumor as the only thing being repeated, and thus owns the salience; simply waiting it out cedes the field. Maximum frequency ignores advertising wearout and reactance — too high a cadence reads as spin, fatigues the audience and can trigger pushback. The professional boundary: repeat the truth, not the myth, and dose the frequency.',
    },
    points: 15,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'illusory_truth_effect'],
  },
  {
    id: 'rp-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Deine Wiederholungs-Strategie für die Kampagne besteht aus vier Bausteinen. Einer überschreitet die ethisch-rechtliche Grenze. Welcher?',
      en: 'Your repetition strategy for the campaign consists of four components. One crosses the ethical-legal line. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine, um die Kernbotschaft durch Wiederholung zu verankern:',
      en: 'Planned components for anchoring the core message through repetition:',
    },
    options: [
      {
        de: 'Denselben klaren Kern-Claim konsequent in allen offiziellen Kanälen wiederholen, damit er wiedererkannt wird.',
        en: 'Consistently repeat the same clear core claim across all official channels so it becomes recognizable.',
      },
      {
        de: 'Eine belegte Aussage („unabhängig nach Norm Y geprüft") wortgleich in Anzeigen und auf der Website wiederholen.',
        en: 'Repeat a substantiated statement ("independently tested to standard Y") verbatim in ads and on the website.',
      },
      {
        de: 'Eine immergültige FAQ pflegen, die dieselbe korrekte Sicherheitsinformation wiederholt bereitstellt.',
        en: 'Maintain an evergreen FAQ that repeatedly provides the same accurate safety information.',
      },
      {
        de: 'Dutzende eigens angelegte, wie unabhängig wirkende Fake-Accounts koordiniert dieselbe Botschaft posten lassen, um den Eindruck spontaner, breiter Zustimmung zu erzeugen.',
        en: 'Have dozens of purpose-built, seemingly independent fake accounts post the identical message in a coordinated way to manufacture the impression of spontaneous, broad agreement.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitime Wiederholung ist transparent und an eine belegte Botschaft gebunden: Ein wiedererkennbarer Kern-Claim, eine wortgleich wiederholte geprüfte Aussage und eine gepflegte FAQ verankern die Botschaft, ohne jemanden zu täuschen. Baustein 4 überschreitet die Grenze: Die koordinierte Verbreitung derselben Botschaft über eigens angelegte, scheinbar unabhängige Fake-Accounts täuscht eine organische Mehrheit vor (Astroturfing / koordiniertes unauthentisches Verhalten). Das kombiniert Wiederholung mit fabriziertem sozialem Beweis, verstößt gegen Plattform- und Wettbewerbsregeln und ist rechtlich wie ethisch unzulässig — der Absender wird verschleiert und Zustimmung erfunden. Prüffragen für die Grenze: Ist die Wiederholung transparent, ist der wiederholte Inhalt belegt, und wird die Quelle echt (nicht vorgetäuscht) ausgewiesen?',
      en: 'Legitimate repetition is transparent and tied to a substantiated message: a recognizable core claim, a verbatim-repeated tested statement and a maintained FAQ anchor the message without deceiving anyone. Component 4 crosses the line: coordinating the same message across purpose-built, seemingly independent fake accounts fakes an organic majority (astroturfing / coordinated inauthentic behavior). It combines repetition with fabricated social proof, breaches platform and fair-competition rules and is both legally and ethically inadmissible — the sender is disguised and agreement is invented. Boundary checks: is the repetition transparent, is the repeated content substantiated, and is the source disclosed genuinely (not faked)?',
    },
    points: 15,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'social_proof'],
  },
];
