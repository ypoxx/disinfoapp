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
      { de: 'Kontaktschuld (Guilt by Association)', en: 'Guilt by association' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad hominem: Der Vertriebsleiter entkräftet nicht die Deckungsbeitragsrechnung, sondern erklärt den Menschen dahinter für unzuständig — Betriebszugehörigkeit und fehlende P&L-Erfahrung ersetzen jede Auseinandersetzung mit den Zahlen. Der Mechanismus wirkt, weil das Publikum die abgewertete Person unbewusst mit dem abgewerteten Inhalt verrechnet: Wer klein gemacht wird, dessen Analyse wirkt kleiner, ganz ohne Gegenbeleg. Legitim ist der angrenzende, ehrliche Zug, die Glaubwürdigkeit einer Quelle zu prüfen, wenn es wirklich um Zeugnis oder Einschätzung geht — dann aber offen und ergebnisoffen, nicht als Ersatz für die Prüfung der vorgelegten Rechnung. Erkennen und kontern: Trenne Person und Aussage und hol die Runde an die Sache zurück — „Erfahrung hin oder her, die Deckungsbeiträge liegen auf dem Tisch; welche Zahl darin stimmt aus deiner Sicht nicht?" Beweis durch Autorität wäre der Spiegelzug — jemand stützt eine Behauptung auf seinen Rang statt auf Argumente —, hier wird Kompetenz aber aberkannt, nicht behauptet. Kontaktschuld würde den Controller über eine unliebsame Verbindung diskreditieren („typisch, kommt ja aus der Beraterecke"), nicht über seine eigenen Eigenschaften. Ein Strohmann würde seine Rechnung verzerrt wiedergeben und die Verzerrung angreifen — hier bleibt die Rechnung unangetastet, angegriffen wird der Mensch.',
      en: 'Ad hominem: the sales director does not rebut the contribution-margin analysis; he declares the person behind it unqualified — tenure and a missing P&L track record stand in for any engagement with the figures. The mechanism works because the audience unconsciously offsets the belittled person against the belittled content: shrink the person and the analysis looks smaller too, with no counter-evidence offered. The legitimate, adjacent move is to weigh a source\'s credibility when testimony or judgement genuinely is the issue — but done openly and with an open outcome, not as a substitute for checking the numbers on the table. To spot and counter it: separate person from statement and pull the room back to the substance — "Experience aside, the contribution margins are right here; which figure in them do you think is wrong?" Appeal to authority would be the mirror move — someone leaning on rank instead of arguments — but here competence is denied, not claimed. Guilt by association would discredit the controller through an unwelcome connection ("figures, he comes from the consulting crowd"), not through his own traits. A straw man would misrepresent his analysis and attack the distortion — here the analysis is left untouched and the person is what gets hit.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'authority', 'guilt_by_association', 'straw_man'],
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
      de: 'Stakeholder-Panel eines Logistikkonzerns, Publikum aus Investoren und Fachpresse: Als Nachhaltigkeitschefin präsentierst du die neue Emissionsbilanz und den Absenkpfad. Ein Analyst greift zum Mikrofon: „Ehrlich gesagt — von jemandem, der selbst dreimal im Monat zu Konferenzen fliegt, ist dieser Vortrag über CO₂ ein bisschen dreist. Warum sollte hier überhaupt jemand auf Sie hören?" Die Moderatorin gibt dir das Wort.',
      en: 'Stakeholder panel of a logistics group, audience of investors and trade press: as head of sustainability you present the new emissions balance and reduction path. An analyst grabs the microphone: "Frankly — coming from someone who flies to conferences three times a month, this lecture on CO₂ is a bit rich. Why should anyone here listen to you at all?" The moderator hands you the floor.',
    },
    options: [
      {
        de: 'Ich benenne den Wechsel ruhig und lenke zurück auf die Sache: „Ob ich fliege, ändert nichts an der Bilanz auf der Folie. Die Emissionen und der Absenkpfad stehen für sich — welchen Wert daran halten Sie für falsch?"',
        en: 'I calmly name the shift and steer back to the substance: "Whether I fly changes nothing about the balance on this slide. The emissions and the reduction path stand on their own — which figure in them do you think is wrong?"',
      },
      {
        de: 'Ich schieße persönlich zurück: „Bevor Sie mir Reisen vorhalten — Ihr eigener Fonds hält bis heute Anteile an zwei Kohlebetreibern."',
        en: 'I fire back personally: "Before you lecture me about travel — your own fund still holds stakes in two coal operators."',
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
      de: 'Der Analyst führt einen Ad hominem in seiner Tu-quoque-Variante: Statt die Emissionsbilanz zu prüfen, hält er dir deine Flüge vor, als entwertete deine Person die Daten. Die beste Antwort trennt beides sauber — sie benennt knapp den Wechsel von der Sache zur Person und stellt die Zahlen wieder in den Raum, ohne sich lange zu rechtfertigen. So behältst du die Deutungshoheit über deinen eigenen Vortrag und zwingst die Debatte zurück auf prüfbaren Boden. Legitim ist im Gegenzug, einen echten Interessenkonflikt offenzulegen, wenn er die Einschätzung wirklich berührt — aber das prüft man an der Aussage, nicht am Menschen. Persönlich zurückzuschießen (Option 2) fühlt sich schlagfertig an, errichtet aber einen zweiten Ad hominem und bestätigt dem Publikum, dass hier über Personen gestritten wird statt über Zahlen. Nachzugeben (Option 3) verwechselt einen Personenangriff mit einem Sachargument und verschenkt deine Bilanz, obwohl kein einziger Wert widerlegt wurde. Auszuweichen (Option 4) lässt den Angriff unwidersprochen stehen und wirkt, als hättest du auf die Kernfrage keine Antwort.',
      en: 'The analyst runs an ad hominem in its tu-quoque form: instead of checking the emissions balance he holds your flights against you, as if your person devalued the data. The best answer separates the two cleanly — it briefly names the shift from substance to person and puts the numbers back in the room without a long self-justification. That keeps control over how your own presentation is read and forces the debate back onto testable ground. Legitimate in turn is disclosing a genuine conflict of interest when it truly bears on the judgement — but you test that against the statement, not the person. Firing back personally (option 2) feels quick-witted but erects a second ad hominem and confirms to the audience that this is a fight about people rather than figures. Conceding (option 3) mistakes a personal attack for a substantive argument and gives away your balance even though not one figure was refuted. Deflecting (option 4) lets the attack stand unchallenged and makes it look as if you have no answer to the core question.',
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
      de: 'Fachdebatte unter einem LinkedIn-Beitrag: Eine Ökonomin legt in einem Gastbeitrag mit drei Studien dar, warum eine geplante Subvention ihr Ziel verfehlen dürfte. Der Sprecher eines Branchenverbands kommentiert darunter, ohne auf eine der Studien einzugehen: „Genau das erwartet man von einer verbitterten Uni-Ökonomin, die es in der freien Wirtschaft nie zu etwas gebracht hat. Kann man getrost ignorieren."',
      en: 'Expert exchange under a LinkedIn post: in a guest article an economist uses three studies to lay out why a planned subsidy is likely to miss its target. The spokesperson of an industry association comments beneath it, engaging none of the studies: "Exactly what you would expect from a bitter university economist who never made it in the real economy. Safe to ignore."',
    },
    options: [
      {
        de: 'das Argument zu entkräften, indem er die Person der Autorin angreift, statt auf ihre Belege einzugehen (Ad hominem)',
        en: 'discredit the argument by attacking the author\'s person instead of engaging her evidence (ad hominem)',
      },
      {
        de: 'die Autorin über eine unliebsame Verbindung oder Gruppe verdächtig zu machen (Kontaktschuld / Guilt by Association)',
        en: 'taint the author through an unwelcome connection or group (guilt by association)',
      },
      {
        de: 'ihre These verzerrt wiederzugeben und dann die Verzerrung zu widerlegen (Strohmann-Argument)',
        en: 'misrepresent her thesis and then refute the distortion (straw man)',
      },
      {
        de: 'durch emotional aufgeladene Reizwörter ein Gefühl statt eines Urteils auszulösen (Reizsprache / Loaded Language)',
        en: 'trigger a feeling rather than a judgement through emotionally charged trigger words (loaded language)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad hominem: Der Sprecher widerlegt keine der drei Studien, sondern erklärt die Autorin für persönlich unglaubwürdig — „verbittert", gescheitert in der Wirtschaft — und leitet daraus ab, ihr Argument sei erledigt. Verräterisch ist die Kurzschluss-Struktur „So jemand sagt X, also ist X falsch": Eine Eigenschaft der Person wird zur Widerlegung der Sache umgemünzt. Legitim ist allein der eng verwandte Fall, in dem die Verlässlichkeit einer Quelle wirklich zur Debatte steht — etwa eine dokumentierte Vorgeschichte von Falschaussagen; auch dann bleibt zu prüfen, ob das Argument für sich trägt. Erkennen und kontern: Frag dich, ob die These unabhängig davon steht, wer sie äußert — „Die drei Studien liegen vor; welche davon ist inhaltlich falsch?" Kontaktschuld würde nicht die Autorin selbst, sondern eine Verbindung zu einer unliebsamen Gruppe zum Vorwurf machen; ein Strohmann würde ihre These entstellen statt sie zu übergehen; Reizsprache läge vor, wenn nur die Wortwahl aufgeladen wäre — hier ist der Kern aber, dass der Personenangriff selbst die Widerlegung ersetzt.',
      en: 'Ad hominem: the spokesperson refutes none of the three studies; he declares the author personally incredible — "bitter", a failure in business — and infers from that her argument is settled. The tell is the short-circuit structure "such a person says X, therefore X is false": a trait of the person is turned into a refutation of the substance. Legitimate is only the closely related case in which a source\'s reliability genuinely is at issue — a documented history of false statements, say; even then you still have to check whether the argument stands on its own. To spot and counter it: ask whether the thesis holds regardless of who states it — "The three studies are here; which of them is substantively wrong?" Guilt by association would fault not the author herself but a link to an unwelcome group; a straw man would distort her thesis rather than bypass it; loaded language would be at work if only the word choice were charged — but here the core is that the personal attack itself stands in for the refutation.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem', 'guilt_by_association', 'straw_man', 'loaded_language'],
  },
];
