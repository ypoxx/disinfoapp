// Backfill: 3 Übungen für repetition (Wiederholung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Eigene Miniaturen — keine wörtliche Übernahme der Technik-examples.
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillRepetition: Exercise[] = [
  {
    id: 'backfill-repetition-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Kommunikationschef hier ins Zentrum?',
      en: 'Which technique is the head of communications putting at the centre here?',
    },
    scenario: {
      de: 'Anhaltende Debatte um die Netzstabilität eines Energieversorgers: Der Kommunikationschef gibt CEO, Werkssprechern und Social-Media-Team für die nächsten sechs Wochen eine einzige Vorgabe — im TV-Interview, im Podcast, in jeder Pressemitteilung und in jedem LinkedIn-Post fällt wortgleich derselbe Satz: „Unser Netz ist das sicherste Europas." Keine Kennzahl, kein Beleg, keine Variation; auf jede Nachfrage kommt exakt dieselbe Formel zurück. Es geht nicht um ein Argument, sondern darum, dass niemand mehr an dem Satz vorbeikommt.',
      en: 'Ongoing debate about a utility company\'s grid stability: the head of communications gives the CEO, plant spokespeople and social-media team a single instruction for the next six weeks — in the TV interview, on the podcast, in every press release and in every LinkedIn post, the exact same sentence appears word for word: "Our grid is the safest in Europe." No figure, no evidence, no variation; every follow-up returns precisely the same formula. The point is not an argument, but that no one can get past the sentence anymore.',
    },
    options: [
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Wahrheitsillusion (Illusory-Truth-Effekt)', en: 'Illusory truth effect' },
      { de: 'Mere-Exposure-Effekt', en: 'Mere-exposure effect' },
      { de: 'Anapher', en: 'Anaphora' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Wiederholung: Ein und dieselbe Formulierung läuft koordiniert über alle Sprecher und Kanäle — Slogan statt Argument, nie ein neuer Beleg, jede Nachfrage endet in derselben Wendung. Der Hebel ist Verarbeitungsflüssigkeit: Was uns oft und in identischer Form begegnet, verarbeiten wir müheloser, und diese Leichtigkeit deuten wir als Zustimmung — unabhängig davon, ob je ein Beleg fiel. Legitim einsetzen: In Kampagne und Krise ist eine stabile Kernbotschaft, konsequent über alle Kanäle gehalten, professionelle Botschaftsdisziplin — sie verankert Wiedererkennung und Verlässlichkeit, solange hinter der Formel eine belegbare Aussage steht. Erkennen und kontern: Stutzig macht die wortgleiche Wendung in verschiedenen Kontexten und die Nachfrage, die keinen Beleg, sondern nur die Formel zurückbringt — verlange die Substanz dahinter („Woran genau messen Sie ‚das sicherste‘?"), statt den Satz weiterzutragen. Die Wahrheitsillusion benennt den Effekt im Kopf des Publikums (die wiederholte Aussage fühlt sich wahrer an), nicht die Sendetaktik, nach der hier gefragt ist. Der Mere-Exposure-Effekt zielt eng auf einen inhaltsleeren Reiz — Logo, Name, Melodie —, der allein durch Vertrautheit sympathischer wird; hier wird eine inhaltliche Behauptung wiederholt, nicht ein neutrales Zeichen. Eine Anapher wäre der gleiche Wortanfang in aufeinanderfolgenden Sätzen einer einzigen Passage („Wir liefern. Wir schützen. Wir verbinden."), nicht dieselbe Aussage über Wochen und Kanäle.',
      en: 'Repetition: one and the same phrasing runs, coordinated, across every spokesperson and channel — a slogan instead of an argument, never a fresh piece of evidence, every follow-up ending in the same wording. The lever is processing fluency: what we encounter often and in identical form, we process more easily, and we read that ease as agreement — regardless of whether any evidence was ever given. Used legitimately: in a campaign or a crisis, a stable core message held consistently across all channels is professional message discipline — it anchors recognition and reliability, as long as a verifiable claim sits behind the formula. To spot and counter it: the tell is the word-for-word phrasing across different contexts and the follow-up that returns only the formula rather than evidence — demand the substance behind it ("By what measure exactly is it \'the safest\'?") instead of carrying the sentence onward. The illusory truth effect names the effect in the audience\'s head (the repeated claim feels truer), not the deployment tactic the question asks about. The mere-exposure effect narrowly targets a content-free stimulus — a logo, name or tune — that grows more likeable through familiarity alone; here a substantive claim is repeated, not a neutral mark. An anaphora would be the same opening in successive sentences of a single passage ("We deliver. We protect. We connect."), not the same claim across weeks and channels.',
    },
    points: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'illusory_truth_effect', 'mere_exposure_effect', 'anaphora'],
  },
  {
    id: 'backfill-repetition-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Reputationsstreit eines Lebensmittelherstellers: Ein Aktivisten-Bündnis fährt seit Wochen dieselbe Zeile — auf jedem Panel, in jedem Reel, unter jedem Post steht wortgleich „Marke X versteckt Zucker." Immer identisch, koordiniert über alle Accounts, ohne neuen Beleg; es ist der immer gleiche Satz, der sich durch schiere Frequenz festsetzt. Als Kommunikationschefin sollst du die Vorständin auf den live gestreamten Townhall-Auftritt vorbereiten.',
      en: 'Reputation dispute at a food manufacturer: for weeks an activist coalition has been running the same line — on every panel, in every reel, under every post the words appear verbatim: "Brand X hides sugar." Always identical, coordinated across all accounts, with no new evidence; it is the ever-same sentence that lodges itself through sheer frequency. As head of communications, you are to prepare the CEO for a live-streamed town-hall appearance.',
    },
    options: [
      {
        de: 'Ich lasse die Vorständin mit der eigenen, wahren Kernaussage führen und diese konsequent wiederholen — „Jede Zutat steht vollständig auf der Packung" — und die Zuckerwerte konkret zeigen, ohne den gegnerischen Slogan zu zitieren.',
        en: 'I have the CEO lead with our own true core message and repeat it consistently — "Every ingredient is listed in full on the pack" — and show the actual sugar figures, without quoting the opponents\' slogan.',
      },
      {
        de: 'Ich baue die Widerlegung um den gegnerischen Satz herum auf: „Marke X versteckt keinen Zucker" — so ist der Vorwurf klar benannt und direkt entkräftet.',
        en: 'I build the rebuttal around the opponents\' line: "Brand X does not hide sugar" — that names the accusation clearly and refutes it head-on.',
      },
      {
        de: 'Ich rate zum Schweigen: Wer den Vorwurf nie aufgreift, gibt ihm keine Bühne — die Sache läuft sich von selbst tot.',
        en: 'I advise silence: whoever never engages the accusation gives it no stage — the matter will burn out on its own.',
      },
      {
        de: 'Ich setze auf Masse: Wir fluten Social Media mit möglichst vielen verschiedenen Gegenbotschaften gleichzeitig, damit der Vorwurf im Rauschen untergeht.',
        en: 'I go for volume: we flood social media with as many different counter-messages as possible at once, so the accusation drowns in the noise.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorwurf wirkt, weil er wiederholt wird: Jede Nennung steigert die Vertrautheit und damit die Zustimmung — und dieser Effekt bleibt sogar bestehen, wenn die Nennung als Dementi gemeint ist (Pennycook et al., 2018, zur Wirkung wiederholter Exposition). Deshalb ist die beste Antwort, nicht den fremden Slogan zu wiederholen, sondern die eigene, wahre Kernaussage zu setzen und diese diszipliniert zu wiederholen — die Belege (die Zuckerwerte) lieferst du direkt mit. Den Vorwurf im Dementi zu spiegeln (Option 2) fühlt sich sauber und direkt an, ist aber der klassische Fehler: Die Verneinung transportiert die Formel „Marke X — versteckt — Zucker" ein weiteres Mal, hängen bleibt die Verknüpfung, nicht das „kein". Schweigen (Option 3) überlässt der Gegenseite die alleinige Wiederholung und damit die Deutungshoheit — der Satz verfestigt sich ungestört. Auf schiere Masse zu setzen (Option 4) ist ein Firehose-Reflex: viele widersprüchliche Gegenbotschaften erzeugen Rauschen statt einer merkbaren Aussage und lassen dich unglaubwürdig wirken. Wiederholung schlägst du nicht mit Gegen-Wiederholung des fremden Slogans, sondern mit konsequenter Wiederholung deiner eigenen, belegten Botschaft.',
      en: 'The accusation works because it is repeated: every mention raises familiarity and, with it, acceptance — and the effect holds even when you are the one saying it, as a denial (Pennycook et al., 2018, on the impact of repeated exposure). That is exactly why the best answer is not to repeat the other side\'s slogan but to set your own true core message and repeat it with discipline — supplying the evidence (the sugar figures) alongside. Mirroring the accusation in a denial (option 2) feels clean and direct, but it is the classic mistake: the negation carries the formula "Brand X — hides — sugar" one more time, and what sticks is the association, not the "not". Silence (option 3) hands the other side the sole repetition, and with it control of the narrative — the sentence hardens undisturbed. Betting on sheer volume (option 4) is a firehose reflex: many contradictory counter-messages create noise rather than one memorable statement and make you look unreliable. You beat repetition not by counter-repeating their slogan, but by consistently repeating your own, evidenced message.',
    },
    points: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'illusory_truth_effect', 'firehose_of_falsehood'],
  },
  {
    id: 'backfill-repetition-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Das Kernprinzip der Technik, die der Verband hier einsetzt, ist, ___.',
      en: 'Complete the sentence: the core principle of the technique the association is using here is to ___.',
    },
    scenario: {
      de: 'Vor einer wichtigen Gesetzesabstimmung stimmt ein Branchenverband seine 40 Mitgliedsunternehmen auf eine einzige Kernaussage ein: In jeder Anhörung, jedem Hintergrundgespräch und jedem Namensbeitrag sollen Verbandsspitze, Firmensprecher und Fachreferenten wortgleich denselben Satz platzieren — „Diese Vorschrift kostet Arbeitsplätze." Kein zusätzliches Argument, keine variierte Fassung; die Wette lautet, dass Abgeordnete den identischen Satz so oft und aus so vielen Richtungen hören, bis er unausweichlich wird.',
      en: 'Ahead of an important legislative vote, an industry association aligns its 40 member companies on a single core statement: in every hearing, every background briefing and every op-ed, the association\'s leadership, company spokespeople and policy officers are to place the exact same sentence word for word — "This regulation costs jobs." No additional argument, no varied wording; the bet is that legislators hear the identical sentence so often and from so many directions that it becomes unavoidable.',
    },
    options: [
      {
        de: 'dieselbe Botschaft in identischem Wortlaut so oft und aus so vielen Richtungen zu platzieren, bis sie sich allein durch ihre Frequenz festsetzt (Wiederholung)',
        en: 'place the same message in identical wording so often and from so many directions that it lodges itself through frequency alone (repetition)',
      },
      {
        de: 'eine nachweislich falsche Behauptung so beharrlich zu wiederholen, bis das Publikum sie allein wegen ihrer Vertrautheit für wahr hält (Wahrheitsillusion)',
        en: 'repeat a demonstrably false claim so persistently that the audience takes it to be true purely because it is familiar (illusory truth effect)',
      },
      {
        de: 'einen inhaltsleeren Reiz — Logo, Name, Melodie — so häufig zu zeigen, bis er allein durch Vertrautheit sympathischer wirkt (Mere-Exposure-Effekt)',
        en: 'show a content-free stimulus — a logo, name or tune — so frequently that it becomes more likeable through familiarity alone (mere-exposure effect)',
      },
      {
        de: 'auf die sichtbare Zustimmung möglichst vieler zu verweisen, damit sich der Einzelne der Mehrheit anschließt (Social Proof)',
        en: 'point to the visible approval of as many people as possible so that the individual falls in line with the majority (social proof)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Wiederholung: Das Kernprinzip ist die schiere Frequenz — dieselbe Aussage, wortgleich und aus vielen Mündern, bis sie unausweichlich wird. Nicht ein Argument trägt sie, sondern ihre koordinierte Allgegenwart. Legitim einsetzen: Abgestimmte, einheitliche Advocacy ist im Verbandsgeschäft völlig sauber — solange die geteilte Aussage belegt ist und jeder Absender offen als Interessenvertreter erkennbar bleibt; problematisch wird es erst, wenn die Formel den fehlenden Beleg ersetzt. Erkennen: Frag dich, ob dich der Satz überzeugt, weil du ihn geprüft hast — oder nur, weil er dir aus jeder Richtung gleichlautend begegnet ist; genau diese Gleichlautigkeit über viele Quellen ist dein Warnsignal. Die Wahrheitsillusion (Option 2) benennt nicht das Sende-, sondern das Wirkprinzip — den Effekt, dass eine wiederholte Aussage wahrer erscheint —, und zielt klassisch auf falsche Behauptungen; gefragt war die eingesetzte Technik. Der Mere-Exposure-Effekt (Option 3) braucht einen inhaltsleeren Reiz und erhöht Sympathie, nicht Zustimmung zu einer Aussage. Social Proof (Option 4) beruft sich auf sichtbare Mehrheiten — hier zählt nicht, dass viele zustimmen, sondern dass ein und derselbe Satz vielfach wiederholt wird.',
      en: 'Repetition: the core principle is sheer frequency — the same statement, word for word and from many mouths, until it becomes unavoidable. It is carried not by an argument but by its coordinated omnipresence. Used legitimately: aligned, consistent advocacy is entirely clean in association work — as long as the shared statement is evidenced and every sender remains openly identifiable as an interest group; it turns problematic only when the formula stands in for the missing evidence. To spot it: ask whether the sentence convinces you because you have checked it — or only because it has reached you from every direction in identical wording; that very uniformity across many sources is your warning sign. The illusory truth effect (option 2) names not the deployment but the effect principle — that a repeated claim comes to seem truer — and classically targets false claims; the question asked for the technique being used. The mere-exposure effect (option 3) needs a content-free stimulus and raises liking, not agreement with a statement. Social proof (option 4) invokes visible majorities — here what counts is not that many agree, but that one and the same sentence is repeated many times over.',
    },
    points: 10,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'illusory_truth_effect', 'mere_exposure_effect', 'social_proof'],
  },
];
