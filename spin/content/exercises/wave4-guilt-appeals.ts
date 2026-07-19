// Welle R4: 3 Übungen für guilt_appeals (Schuldappelle).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4GuiltAppeals: Exercise[] = [
  {
    id: 'w4-guilt_appeals-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Vorstand hier ein?',
      en: 'Which technique is the chairman using here?',
    },
    scenario: {
      de: 'Verlängerungsgespräch über ein Sozialsponsoring im Vereinsheim: Die Kommunikationsleiterin eines Regionalversorgers deutet an, das Engagement auslaufen zu lassen. Der Vereinsvorstand antwortet: „An Ihrem Logo auf dem Trikot hängt unsere Jugendarbeit — steigen Sie aus, müssen wir zwei Trainerstellen streichen, und das dürfen Sie dann den Kindern erklären." Dann schiebt er den vorbereiteten Verlängerungsvertrag über den Tisch.',
      en: 'Renewal meeting about a community sponsorship at the clubhouse: the head of communications of a regional utility hints at letting the engagement expire. The club chairman replies: "Our youth programme hangs on your logo on those shirts — if you pull out, we have to cut two coaching positions, and you can be the one to explain that to the kids." Then he slides the pre-drafted renewal contract across the table.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Door-in-the-Face', en: 'Door-in-the-Face' },
      { de: 'Schuldappelle', en: 'Guilt appeals' },
      { de: 'Kontaktschuld (Guilt by Association)', en: 'Guilt by association' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Schuldappell: Der Vorstand rahmt die mögliche Absage als persönliches Versäumnis gegenüber konkret benannten Betroffenen — den Kindern — und legt die schuldauflösende Handlung im selben Moment auf den Tisch: die Unterschrift. Das wirkt, weil Schuld ein unangenehmer Zustand ist, den Menschen schnell loswerden wollen; die Forschung (O\'Keefe 2000) zeigt zugleich, dass dick aufgetragene Appelle eher Ärger und Widerstand auslösen als Zustimmung. Legitim einsetzen: Reale Folgen einer Entscheidung darfst du benennen — professionell bleibt es, wenn du sie transparent machst und der Gegenseite eine freie, informierte Abwägung lässt, statt ein moralisches Urteil an die Unterschrift zu koppeln. Erkennen und kontern: Du erkennst das Muster daran, dass deine Absage moralisch aufgeladen wird und die „Erlösung" griffbereit daneben liegt — trenne beides, vertage die Entscheidung, klär die Sachfragen (Wirkung, Alternativen, Budgetlogik) und benenne das Manöver, wenn nötig, freundlich. Reziprozität liegt nahe, weil eine laufende Beziehung besteht — sie arbeitet aber mit der Verpflichtung, eine erhaltene Gefälligkeit zu erwidern; hier wird an keine erhaltene Gefälligkeit erinnert, sondern Schuld für künftige Folgen erzeugt. Door-in-the-Face wirkt plausibel, weil verhandelt wird — dort folgt aber auf eine bewusst überzogene erste Forderung eine kleinere, die als Zugeständnis erscheint; hier gibt es nur eine Forderung mit moralischem Druck. Kontaktschuld klingt durch den Namen verwandt, bezeichnet aber das Diskreditieren einer Person über ihre Verbindungen zu Dritten — hier wird niemand über seine Kontakte abgewertet.',
      en: 'Guilt appeal: the chairman frames a possible exit as a personal failing towards specifically named people — the kids — and puts the guilt-relieving action on the table in the same moment: the signature. It works because guilt is an aversive state people want to shed quickly; research (O\'Keefe 2000) also shows that heavy-handed appeals tend to trigger anger and resistance rather than compliance. Used legitimately: you may name the real consequences of a decision — it stays professional as long as you make them transparent and leave the other side a free, informed choice instead of tying a moral verdict to the signature. To spot and counter it: you recognise the pattern when your refusal gets morally charged and "redemption" sits within arm\'s reach — separate the two, defer the decision, clarify the substance (impact, alternatives, budget logic), and if needed, name the move politely. Reciprocity seems close because an ongoing relationship exists — but it works through the obligation to return a favour received; here no favour is invoked, guilt about future consequences is manufactured. Door-in-the-Face looks plausible because this is a negotiation — but there a deliberately oversized first demand is followed by a smaller one that reads as a concession; here there is only one demand backed by moral pressure. Guilt by association sounds related by name, but it means discrediting a person through their ties to third parties — nobody here is being devalued over their contacts.',
    },
    points: 10,
    primaryTechniqueId: 'guilt_appeals',
    relatedTechniques: ['guilt_appeals', 'reciprocity', 'door_in_the_face', 'guilt_by_association'],
  },
  {
    id: 'w4-guilt_appeals-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Freigaberunde für die interne Spendenkampagne zur Fluthilfe: Du verantwortest die Mitarbeiterkommunikation. Die Agentur präsentiert als Leitmotiv für Intranet und Aufsteller die Zeile „Wer heute wegsieht, trägt morgen Mitschuld" — darunter der QR-Code zur Spendenseite. Der Etat-Direktor ist überzeugt: „Je stärker das Gewissen drückt, desto höher die Beteiligung."',
      en: 'Sign-off round for the internal flood-relief donation campaign: you own employee communications. The agency presents the lead line for intranet and floor displays: "Look away today, share the blame tomorrow" — with the QR code to the donation page underneath. The account director is convinced: "The guiltier people feel, the more they give."',
    },
    options: [
      {
        de: 'Ich gebe die Zeile frei: Der Etat-Direktor hat recht — Schuld ist der stärkste Spendenhebel, und eine interne Kampagne für einen guten Zweck darf zuspitzen.',
        en: 'I approve the line: the account director is right — guilt is the strongest fundraising lever, and an internal campaign for a good cause is allowed to sharpen the message.',
      },
      {
        de: 'Ich lasse die Zeile entschärfen: In den Mittelpunkt rückt, was eine Spende konkret bewirkt, mit klarem Handlungsschritt — ohne moralisches Urteil über die, die nicht spenden. Explizite Schuldappelle erzeugen zwar Schuldgefühl, aber auch Ärger und Widerstand, und als Absender trägt das Unternehmen den Flurschaden.',
        en: 'I have the line reworked: the focus shifts to what a donation concretely achieves, with a clear call to action — and no moral verdict on those who do not give. Explicit guilt appeals do produce guilt, but also anger and resistance, and as the sender, the company carries the fallout.',
      },
      {
        de: 'Ich streiche jede emotionale Ansprache und lasse ausschließlich Fakten und Spendenkonto kommunizieren — Emotionen haben in der Mitarbeiterkommunikation nichts verloren.',
        en: 'I cut all emotional messaging and have us communicate nothing but facts and the donation account — emotion has no place in employee communications.',
      },
      {
        de: 'Ich behalte die Zeile, nehme aber Logo und Absender von den Aufstellern — dann fällt ein möglicher Unmut wenigstens nicht auf das Unternehmen zurück.',
        en: 'I keep the line but remove the logo and sender from the displays — that way any resentment at least does not land on the company.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Die Zeile ist ein expliziter Schuldappell: Nicht-Spenden wird als moralisches Versagen gerahmt, der QR-Code liefert die schuldauflösende Handlung gleich mit. Genau hier greift der paradoxe Befund der Forschung (O\'Keefe 2000): Explizitere Appelle erzeugen zwar mehr Schuldgefühl, überzeugen aber weniger, weil sie Ärger und Reaktanz auslösen — und in der internen Kommunikation richtet sich dieser Ärger direkt gegen den Absender, also das eigene Unternehmen. Die beste Option ersetzt das moralische Urteil durch Wirksamkeit: zeigen, was die Spende konkret verändert, plus ein einfacher Handlungsschritt — das ist die legitime Form desselben Hebels, emotional ansprechend ohne Anklage. Erkennen und kontern: Prüf bei jeder Kampagnenzeile, ob sie Verhalten ermöglicht oder Menschen verurteilt — sobald das Nicht-Mitmachen als Charakterfehler adressiert wird, bist du im Schuldappell. Die Freigabe wirkt plausibel, weil die Intuition „mehr Druck = mehr Wirkung" verbreitet ist — sie ist aber empirisch gerade nicht gedeckt, und der gute Zweck heilt den Kollateralschaden im Betriebsklima nicht. Die Fakten-Variante überkorrigiert: Emotionale Ansprache ist legitim und für Hilfskampagnen sogar angemessen — problematisch ist das moralische Urteil, nicht das Gefühl. Der anonyme Aushang behandelt das Symptom statt der Ursache: Der Appell bleibt übergriffig, und ein verdeckter Absender ist in der Mitarbeiterkommunikation ein eigenes Glaubwürdigkeitsrisiko.',
      en: 'The line is an explicit guilt appeal: not donating is framed as a moral failure, and the QR code supplies the guilt-relieving action on the spot. This is exactly where the paradoxical research finding applies (O\'Keefe 2000): more explicit appeals produce more guilt but persuade less, because they trigger anger and reactance — and in internal communications that anger lands squarely on the sender, your own company. The best option replaces the moral verdict with efficacy: show what the donation concretely changes, plus one easy action step — the legitimate form of the same lever, emotionally engaging without an accusation. To spot and counter it: for every campaign line, check whether it enables behaviour or passes judgement on people — the moment non-participation is addressed as a character flaw, you are in guilt-appeal territory. Approving the line feels plausible because the intuition "more pressure, more effect" is widespread — but it is precisely what the evidence does not support, and a good cause does not heal the collateral damage to workplace morale. The facts-only route overcorrects: emotional messaging is legitimate and, for relief campaigns, even fitting — the problem is the moral verdict, not the emotion. The anonymous display treats the symptom instead of the cause: the appeal remains intrusive, and a hidden sender is its own credibility risk in employee communications.',
    },
    points: 10,
    primaryTechniqueId: 'guilt_appeals',
    relatedTechniques: ['guilt_appeals', 'emotional_appeal'],
  },
  {
    id: 'w4-guilt_appeals-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Voicemail des Caterers an die Eventmanagerin drei Wochen vor der Firmenweihnachtsfeier: „Wir haben unsere Aushilfen für Ihren Termin fest eingeplant — wenn Sie jetzt stornieren, sitzen die Leute vor den Feiertagen ohne die Schicht da, mit der sie gerechnet haben. Mit Ihrer Zusage bis Freitag ist das vom Tisch."',
      en: 'Voicemail from the caterer to the event manager three weeks before the company holiday party: "We have firmly scheduled our temp staff for your date — if you cancel now, those people head into the holidays without the shift they were counting on. With your confirmation by Friday, that is off the table."',
    },
    options: [
      { de: 'Schuldappelle', en: 'Guilt appeals' },
      { de: 'Kontaktschuld (Guilt by Association)', en: 'Guilt by association' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Schuldappell: Die mögliche Stornierung wird als persönliches Versäumnis gegenüber konkreten Dritten gerahmt — den Aushilfen vor den Feiertagen — und die schuldauflösende Handlung samt Frist gleich mitgeliefert („Zusage bis Freitag"). Der Hebel wirkt, weil Schuld unangenehm ist und die angebotene Handlung sie sofort beendet. Legitim einsetzen: Planungsfolgen darfst du transparent machen — professionell formuliert heißt das: Fakten und Fristen nennen (Stornobedingungen, Personaldisposition), ohne die Entscheidung der Gegenseite moralisch aufzuladen. Erkennen und kontern: Du erkennst das Muster daran, dass deine geschäftliche Entscheidung zur Gewissensfrage wird und die „Erlösung" terminiert daneben steht — hol die Sachlage ein (Was steht im Vertrag? Welche Stornofrist gilt?) und entscheide auf dieser Basis, nicht gegen das schlechte Gewissen. Kontaktschuld wirkt durch den ähnlichen Namen plausibel, bezeichnet aber etwas anderes: das Diskreditieren einer Person über ihre Verbindungen zu zweifelhaften Dritten — hier wird niemand über Kontakte abgewertet. Verlustaversion liegt nahe, weil ein drohender Verlust ausgemalt wird — sie meint aber den Hebel, dass dir selbst ein Verlust droht; hier wird der Verlust anderer zu deiner moralischen Last gemacht.',
      en: 'Guilt appeal: the possible cancellation is framed as a personal failing towards specific third parties — the temp staff before the holidays — with the guilt-relieving action and its deadline delivered in the same breath ("confirmation by Friday"). The lever works because guilt is aversive and the offered action ends it instantly. Used legitimately: you may make planning consequences transparent — done professionally, that means stating facts and deadlines (cancellation terms, staffing logistics) without morally charging the other side\'s decision. To spot and counter it: you recognise the pattern when your business decision is turned into a matter of conscience with "redemption" scheduled right next to it — pull up the facts (what does the contract say, which cancellation window applies?) and decide on that basis, not against a guilty conscience. Guilt by association looks plausible because of the similar name, but it denotes something else: discrediting a person through their ties to dubious third parties — nobody here is devalued over their contacts. Loss aversion seems close because the message paints a picture of looming loss — but that lever works on a loss you yourself would suffer; here, other people\'s loss is turned into your moral burden.',
    },
    points: 10,
    primaryTechniqueId: 'guilt_appeals',
    relatedTechniques: ['guilt_appeals', 'guilt_by_association', 'loss_aversion'],
  },
];
