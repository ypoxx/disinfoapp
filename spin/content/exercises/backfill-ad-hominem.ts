// Backfill: 3 Übungen für ad_hominem (Angriff auf die Person statt auf das Argument).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillAdHominem: Exercise[] = [
  {
    id: 'backfill-ad_hominem-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Vertriebsleiter ein?',
      en: 'Which technique is the sales director using?',
    },
    scenario: {
      de: 'Budgetrunde eines Softwareanbieters: Ein Junior-Controller legt eine Deckungsbeitragsrechnung vor, nach der ein Vorzeigeprojekt seit zwei Quartalen defizitär läuft, samt Zahlen und Quellen. Der Vertriebsleiter geht auf keine einzige Zahl ein und sagt in die Runde: „Du bist acht Monate im Haus und hast noch nie eine eigene P&L verantwortet — auf so ein Tabellenblatt gebe ich ehrlich gesagt nicht viel."',
      en: 'Budget review at a software vendor: a junior controller presents a contribution-margin analysis showing that a flagship project has run at a loss for two quarters, with figures and sources. The sales director engages none of the numbers and tells the room: "You have been here eight months and have never owned a P&L — honestly, I do not put much stock in a spreadsheet like that."',
    },
    options: [
      { de: 'Ad hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
      { de: 'Beweis durch Autorität (Appeal to Authority)', en: 'Appeal to authority' },
      { de: 'Whataboutism (Tu quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Ablenkungsmanöver (Red Herring)', en: 'Red herring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad hominem: Der Vertriebsleiter entkräftet nicht die Deckungsbeitragsrechnung, sondern erklärt den Menschen dahinter für unzuständig — Betriebszugehörigkeit und fehlende P&L-Erfahrung ersetzen jede Auseinandersetzung mit den Zahlen. Der Mechanismus wirkt, weil das Publikum die abgewertete Person unbewusst mit dem abgewerteten Inhalt verrechnet: Wer klein gemacht wird, dessen Analyse wirkt kleiner, ganz ohne Gegenbeleg. Legitim ist der eng benachbarte, ehrliche Zug, die Glaubwürdigkeit einer Quelle zu prüfen, wenn es wirklich um Zeugnis oder Einschätzung geht — dann aber offen und ohne vorab feststehendes Urteil, nicht als Ersatz für die Prüfung der vorgelegten Rechnung. Erkennen und kontern: Trenne Person und Aussage und lade ihn ein, den Fehler zu zeigen statt den Menschen — „Erfahrung hin oder her, die Rechnung steht auf der Folie; sag mir, an welcher Stelle sie sich verrechnet." Beweis durch Autorität wäre der Spiegelzug — jemand stützt eine Behauptung auf seinen Rang statt auf Argumente —, hier wird Kompetenz aber aberkannt, nicht behauptet. Whataboutism in seiner Tu-quoque-Form hielte dem Controller ein eigenes Versäumnis entgegen („du hast doch selbst nie sauber kalkuliert"), um seinen Einwand abzuwerten — hier fällt kein solcher Gegenvorwurf, nur die Absprache seiner Eignung. Ein Ablenkungsmanöver (Red Herring) schöbe ein sachfremdes Nebenthema dazwischen, um von der Rechnung wegzuführen — der Vertriebsleiter lenkt zwar von den Zahlen ab, tut das aber gezielt über die Person, nicht über einen beliebigen Nebenschauplatz.',
      en: 'Ad hominem: the sales director does not rebut the contribution-margin analysis; he declares the person behind it unqualified — tenure and a missing P&L track record stand in for any engagement with the figures. The mechanism works because the audience unconsciously offsets the belittled person against the belittled content: shrink the person and the analysis looks smaller too, with no counter-evidence offered. The legitimate, closely adjacent move is to weigh a source\'s credibility when testimony or judgement genuinely is the issue — but done openly and without a predetermined verdict, not as a substitute for checking the numbers on the table. To spot and counter it: separate person from statement and invite him to point to the error rather than the person — "Experience aside, the calculation is on the slide; show me where it adds up wrong." Appeal to authority would be the mirror move — someone leaning on rank instead of arguments — but here competence is denied, not claimed. Whataboutism in its tu-quoque form would throw one of the controller\'s own failings back at him ("you\'ve never costed a thing cleanly yourself") to devalue his objection — here there is no such counter-charge, only the denial of his standing. A red herring would slip in an unrelated side issue to lead away from the numbers — the sales director does lead away from the figures, but he does so squarely through the person, not through some arbitrary tangent.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'authority', 'whataboutism', 'red_herring'],
  },
  {
    id: 'backfill-ad_hominem-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Stakeholder-Panel eines Logistikkonzerns, Publikum aus Investoren und Fachpresse: Als Nachhaltigkeitschefin präsentierst du die neue Emissionsbilanz und den Absenkpfad. Ein Analyst greift zum Mikrofon: „Ehrlich gesagt — Sie leiten die Kommunikation, Sie sind keine Klimawissenschaftlerin. Auf Emissionszahlen aus einer PR-Abteilung gebe ich nichts; warum sollte hier überhaupt jemand auf Sie hören?" Die Moderatorin gibt dir das Wort.',
      en: 'Stakeholder panel of a logistics group, audience of investors and trade press: as head of sustainability you present the new emissions inventory and reduction path. An analyst grabs the microphone: "Frankly — you run communications, you are not a climate scientist. I put no weight on emissions figures coming from a PR department; why should anyone here listen to you at all?" The moderator hands you the floor.',
    },
    options: [
      {
        de: 'Ich benenne den Wechsel ruhig und lenke zurück auf die Sache: „Wer die Bilanz vorträgt, steht nicht auf der Folie — der Absenkpfad schon. Nehmen Sie den Pfad auseinander, nicht mich."',
        en: 'I calmly name the shift and steer back to the substance: "Who presents the inventory isn\'t on the slide — the reduction path is. Take the pathway apart, not me."',
      },
      {
        de: 'Ich schieße persönlich zurück: „Bevor Sie hier meine Rolle kleinreden — Ihr eigener Fonds hält bis heute Anteile an zwei Kohlebetreibern."',
        en: 'I fire back personally: "Before you talk down my role here — your own fund still holds stakes in two coal operators."',
      },
      {
        de: 'Ich gebe nach: „Da haben Sie recht, ich bin kein glaubwürdiger Absender für dieses Thema" — und überlasse die Zahlen dem Fachbereich.',
        en: 'I concede: "You are right, I am not a credible messenger for this topic" — and leave the figures to the technical department.',
      },
      {
        de: 'Ich weiche aus: „Reden wir lieber über die Fortschritte der Branche insgesamt, das ist doch die eigentliche Frage."',
        en: 'I deflect: "Let us rather talk about the industry\'s progress overall — that is the real question."',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Analyst führt einen klassischen Ad hominem: Statt die Emissionsbilanz zu prüfen, erklärt er dich über deine Rolle zur falschen Absenderin und entwertet damit die Zahlen, ohne eine einzige anzufassen. Was den Angriff trägt, ist eine Kurzschluss-Erwartung im Publikum — „aus der PR-Abteilung, also unglaubwürdig" —, die von der Person auf die Daten abfärbt, obwohl die Herkunft einer korrekten Rechnung nichts an ihrer Richtigkeit ändert. Die beste Antwort trennt beides sauber: Sie benennt knapp den Wechsel von der Sache zur Person und stellt den Absenkpfad wieder in den Raum, ohne sich lange zu rechtfertigen. So behältst du die Deutungshoheit über deinen Vortrag und zwingst die Debatte zurück auf prüfbaren Boden. Legitim ist im Gegenzug, einen echten Interessenkonflikt offenzulegen, wenn er die Einschätzung wirklich berührt — aber das prüft man an der Aussage, nicht am Menschen. Persönlich zurückzuschießen (Option 2) fühlt sich schlagfertig an, begeht aber selbst einen Gegenangriff auf die Person (Whataboutism) und bestätigt dem Publikum, dass hier über Personen gestritten wird statt über Zahlen. Nachzugeben (Option 3) verwechselt einen Personenangriff mit einem Sachargument und verschenkt kampflos deine eigenen Zahlen, obwohl kein einziger Wert widerlegt wurde. Auszuweichen (Option 4) lässt den Angriff unwidersprochen stehen und wirkt, als hättest du auf die Kernfrage keine Antwort.',
      en: 'The analyst runs a textbook ad hominem: instead of examining the emissions inventory he uses your role to cast you as the wrong messenger and thereby devalues the figures without touching a single one. What carries the attack is a short-circuit expectation in the audience — "from the PR department, so not credible" — that bleeds from the person onto the data, even though where a correct calculation comes from changes nothing about whether it is right. The best answer separates the two cleanly: it briefly names the shift from substance to person and puts the reduction path back in the room without a long self-justification. That keeps control over how your presentation is read and forces the debate back onto testable ground. Legitimate in turn is disclosing a genuine conflict of interest when it truly bears on the judgement — but you test that against the statement, not the person. Firing back personally (option 2) feels quick-witted but is itself a counterattack on the person (whataboutism) and confirms to the audience that this is a fight about people rather than figures. Conceding (option 3) mistakes a personal attack for a substantive argument and surrenders your own figures without a fight, even though not one value was refuted. Deflecting (option 4) lets the attack stand unchallenged and makes it look as if you have no answer to the core question.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'whataboutism'],
  },
  {
    id: 'backfill-ad_hominem-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Mit diesem Kommentar versucht der Verbandssprecher, ___.',
      en: 'Complete the sentence: with this comment, the association spokesperson is trying to ___.',
    },
    scenario: {
      de: 'Fachdebatte unter einem LinkedIn-Beitrag: Eine Ökonomin legt in einem Gastbeitrag mit drei Studien dar, warum eine geplante Subvention ihr Ziel verfehlen dürfte. Der Sprecher eines Branchenverbands kommentiert darunter, ohne auf eine der Studien einzugehen: „Genau das erwartet man von einer Uni-Ökonomin ohne einen Tag Praxis in der freien Wirtschaft. Kann man getrost ignorieren."',
      en: 'Expert exchange under a LinkedIn post: in a guest article an economist uses three studies to lay out why a planned subsidy is likely to miss its target. The spokesperson of an industry association comments beneath it, engaging none of the studies: "Exactly what you would expect from a university economist without a single day of practice in the private sector. Safe to ignore."',
    },
    options: [
      {
        de: 'das Argument zu entkräften, indem er die Person der Autorin angreift, statt auf ihre Belege einzugehen (Ad hominem)',
        en: 'discredit the argument by attacking the author\'s person instead of engaging her evidence (ad hominem)',
      },
      {
        de: 'die fehlende Praxis zum alleinigen Maßstab zu erklären, weil nur Praktiker über die Subvention urteilen dürften (Beweis durch Autorität)',
        en: 'make the missing hands-on experience the sole yardstick, as if only practitioners were entitled to judge the subsidy (appeal to authority)',
      },
      {
        de: 'mit einem sachfremden Nebenthema von den drei Studien wegzulenken (Ablenkungsmanöver / Red Herring)',
        en: 'lead away from the three studies with an unrelated side issue (red herring)',
      },
      {
        de: 'durch emotional aufgeladene Reizwörter ein Gefühl statt eines Urteils auszulösen (Reizsprache / Loaded Language)',
        en: 'provoke a feeling rather than a judgement through emotionally charged wording (loaded language)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad hominem: Der Sprecher widerlegt keine der drei Studien, sondern erklärt die Autorin für persönlich ungeeignet — eine Akademikerin ohne Praxis — und leitet daraus ab, ihr Argument sei erledigt. Der Kurzschluss läuft über das Muster „So jemand sagt X, also ist X falsch": Eine Eigenschaft der Person wird zur Widerlegung der Sache umgemünzt, und das Publikum übernimmt die Abwertung, ohne die Belege je gesehen zu haben. Legitim wäre der Einwand nur, wenn ihr Argument allein auf ihrer eigenen Autorität ruhte — dann dürfte man nach der Fachqualifikation fragen; hier aber trägt sie drei Studien vor, die unabhängig von ihrer Vita gelten. Dagegen hältst du so: Frag, ob die These unter einem anderen Namen genauso dastünde — und verlang, dass er eine der drei Studien inhaltlich widerlegt statt die Autorin. Beweis durch Autorität läge umgekehrt vor, wenn er die fehlende Praxis zum alleinigen Maßstab erklärte („nur Praktiker dürfen hier urteilen") — hier wird Autorität nicht angerufen, sondern abgesprochen. Ein Ablenkungsmanöver (Red Herring) schöbe ein sachfremdes Nebenthema ein; er lenkt aber gezielt auf die Person, nicht auf einen beliebigen Nebenschauplatz. Und Reizsprache läge vor, wenn allein die Wortwahl aufgeladen wäre — hier ist der Kern, dass der Personenangriff selbst die Widerlegung ersetzt.',
      en: 'Ad hominem: the spokesperson refutes none of the three studies; he declares the author personally unfit — an academic with no practical experience — and infers from that her argument is settled. The short-circuit runs on the pattern "such a person says X, therefore X is false": a trait of the person is turned into a refutation of the substance, and the audience adopts the dismissal without ever having seen the evidence. The objection would be legitimate only if her argument rested on her own authority alone — then you could ask about her qualifications; but here she presents three studies that hold regardless of her CV. Here is how you push back: ask whether the thesis would stand just the same under a different byline — and demand that he rebut one of the three studies on the merits rather than the author. Appeal to authority would be the reverse move — declaring the missing hands-on experience the sole yardstick ("only practitioners may judge here") — whereas here authority is not invoked but denied. A red herring would slip in an unrelated side issue; but he steers squarely onto the person, not onto some arbitrary tangent. And loaded language would be at work if only the word choice were charged — here the core is that the personal attack itself stands in for the refutation.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'authority', 'red_herring', 'loaded_language'],
  },
];
