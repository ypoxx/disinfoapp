// Welle 5a: 3 Übungen für whataboutism (tu quoque).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aWhataboutism: Exercise[] = [
  {
    id: 'wave5a-whataboutism-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Kommunikationsleiter hier ein?',
      en: 'Which technique is the head of communications using here?',
    },
    scenario: {
      de: 'Bürgerforum eines Energieversorgers: Eine Anwohnerin fragt den Kommunikationsleiter, warum die vor zwei Jahren zugesagte Lärmschutzwand am Umspannwerk immer noch fehlt. Seine Antwort: „Und was ist mit der Stadt? Die hat ihre versprochenen Radwege doch auch nie fertiggebaut." Zum Stand der Lärmschutzwand selbst sagt er nichts.',
      en: 'Community forum held by an energy utility: a local resident asks the head of communications why the noise barrier at the substation, promised two years ago, is still missing. His answer: "And what about the city? They never finished their promised cycle paths either." On the status of the noise barrier itself he says nothing.',
    },
    options: [
      { de: 'Whataboutism (tu quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Ad Hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
      { de: 'Doppelstandard', en: 'Double standard' },
      { de: 'Relative Privation (»anderswo ist es schlimmer«)', en: 'Relative privation ("it\'s worse elsewhere")' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Whataboutism: Auf eine konkrete Frage („Wo bleibt die Lärmschutzwand?") folgt keine Antwort, sondern ein Gegenvorwurf gleicher Art gegen einen Dritten („Und die Stadt bei den Radwegen?"). Der Hebel setzt darauf, dass die Zuhörer die beiden Versäumnisse gegeneinander aufwiegen, statt auf der ursprünglichen Frage zu bestehen — der eigene Punkt bleibt unbeantwortet. Legitim einsetzen: Ein Vergleich mit anderen kann sachlich berechtigt sein, etwa um Verhältnismäßigkeit einzuordnen — aber erst, nachdem du die gestellte Frage selbst beantwortet hast, nicht als Ersatz dafür. Erkennen und kontern: Du erkennst das Muster daran, dass auf die Frage ein Gegenvorwurf statt einer Antwort kommt; benenne die Ausweichbewegung ruhig und führe zurück („Auf die Radwege der Stadt komme ich gern zu sprechen — zuerst zur Lärmschutzwand: Wann steht sie?"). Ad Hominem liegt nahe, weil Whataboutism eine Spielart des tu quoque ist — Ad Hominem entwertet aber die Person selbst (Kompetenz, Motiv, Charakter), um ihr Argument abzutun; hier wird die Anwohnerin nicht herabgesetzt, sondern das Thema per Gegenversäumnis eines Dritten verschoben. Ein Doppelstandard läge vor, wenn er ihr vorwürfe, gleiche Fälle mit zweierlei Maß zu messen (der Stadt nachzusehen, was sie ihm ankreidet) — er wirft ihr aber keine Inkonsequenz vor, sondern weicht der Frage aus. Relative Privation wäre die Behauptung, anderswo sei das Problem größer, also zähle seins nicht; er behauptet aber keine Rangfolge der Schwere, sondern stellt schlicht ein „die auch"-Gegenversäumnis daneben — genau das ist Whataboutism.',
      en: 'Whataboutism: a concrete question ("Where is the noise barrier?") is met not with an answer but with a counter-accusation of the same kind against a third party ("And the city with its cycle paths?"). The lever relies on the audience weighing the two failures against each other instead of pressing the original question — his own point stays unanswered. Used legitimately: a comparison with others can be perfectly valid, e.g. to place a matter in proportion — but only after you have answered the question put to you, not instead of it. To spot and counter it: you recognise the pattern when a question draws a counter-accusation rather than a reply; name the sidestep calmly and steer back ("I\'m happy to come to the city\'s cycle paths — first, the noise barrier: when will it be up?"). Ad hominem seems close because whataboutism is a form of tu quoque — but ad hominem devalues the person themselves (competence, motive, character) to dismiss their argument; here the resident is not belittled, the topic is shifted onto a matching failing by a third party. A double standard would mean accusing her of judging like cases by unlike measures (letting the city off for what she charges him with) — but he charges her with no inconsistency, he simply dodges the question. Relative privation would claim the problem is bigger elsewhere so his own does not count; he claims no ranking of severity, he merely sets a "they do it too" countercharge beside it — which is precisely whataboutism.',
    },
    points: 10,
    primaryTechniqueId: 'whataboutism',
    relatedTechniques: ['whataboutism', 'ad_hominem'],
  },
  {
    id: 'wave5a-whataboutism-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Podiumsdiskussion, die du als Kommunikationsberaterin für einen Branchenverband moderierst: Eine Journalistin fragt den Verbandsgeschäftsführer nach den kräftig gestiegenen Mitgliedsbeiträgen. Er antwortet: „Und was ist mit den Kammern? Die haben ihre Beiträge doch viel stärker erhöht." Die Journalistin wirkt kurz aus dem Konzept gebracht, das Publikum wartet auf deine Reaktion.',
      en: 'Panel discussion you are moderating as a communications consultant for an industry association: a journalist asks the association\'s managing director about the sharply increased membership fees. He replies: "And what about the chambers? They raised their fees far more steeply." The journalist is briefly thrown, and the audience waits for your reaction.',
    },
    options: [
      {
        de: 'Ich hole die Frage zurück auf den Tisch: Ich halte freundlich fest, dass die Kammern hier nicht das Thema sind, und bitte den Geschäftsführer, die konkrete Frage nach den eigenen Beiträgen zu beantworten — den Vergleich kann er danach gern einordnen.',
        en: 'I put the question back on the table: I note amiably that the chambers are not the topic here, and ask the managing director to answer the actual question about his own fees — he is welcome to add the comparison afterwards.',
      },
      {
        de: 'Ich lasse es laufen: Der Hinweis auf die Kammern ist ein fairer Punkt, damit ist die Frage im Grunde beantwortet.',
        en: 'I let it pass: the point about the chambers is fair enough, so the question is essentially answered.',
      },
      {
        de: 'Ich kontere für die Journalistin mit einem eigenen Gegenvorwurf: Ich erinnere den Geschäftsführer daran, dass sein Verband schon bei der letzten Erhöhung nicht gerade transparent war.',
        en: 'I counter on the journalist\'s behalf with a counter-accusation of my own: I remind the managing director that his association was hardly transparent at the last increase either.',
      },
      {
        de: 'Ich wechsle das Thema, um die Situation zu entschärfen, und komme vielleicht später auf die Beiträge zurück.',
        en: 'I change the subject to defuse the situation and perhaps return to the fees later.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Antwort des Geschäftsführers ist Whataboutism: Statt die Frage nach den eigenen Beiträgen zu beantworten, verweist er auf ein (angeblich größeres) Fehlverhalten der Kammern. Der Hebel lebt davon, dass die offene Frage in der Aufmerksamkeit durch den Gegenvorwurf verdrängt wird — als Moderatorin ist es deine Aufgabe, sie wieder sichtbar zu machen. Die beste Option trennt beides sauber: Sie erkennt den Vergleich als möglicherweise legitime Einordnung an, besteht aber darauf, dass er die eigentliche Frage nicht ersetzt. Legitim einsetzen: Ein Vergleich mit den Kammern ist zulässig — aber als Zusatz, nachdem die eigenen Zahlen auf dem Tisch liegen, nicht an ihrer Stelle. Erkennen und kontern: Sobald auf eine Frage ein „Und was ist mit …?" folgt, benenne die Verschiebung und führe zur Frage zurück; das entschärft das Muster, ohne den Vergleich pauschal abzuwürgen. Es laufen zu lassen belohnt genau die Ausweichbewegung und setzt den Gegenvorwurf mit einer Antwort gleich. Selbst mit einem Gegenvorwurf zu kontern, ist Gegen-Whataboutism: Es eröffnet einen zweiten Nebenschauplatz und kostet dich als Moderatorin die Neutralität. Das Thema zu wechseln lässt die Ablenkung endgültig gelingen — die ursprüngliche Frage verschwindet dann ganz.',
      en: 'The managing director\'s reply is whataboutism: instead of answering the question about his own fees, he points to the chambers\' (supposedly greater) misconduct. The lever works by crowding the open question out of attention with the counter-accusation — as moderator, your job is to make it visible again. The best option separates the two cleanly: it accepts the comparison as a possibly legitimate piece of context, but insists it does not replace the actual question. Used legitimately: comparing with the chambers is admissible — but as an addition, once his own figures are on the table, not in their place. To spot and counter it: the moment a question draws an "And what about …?", name the shift and steer back to the question; that defuses the pattern without shutting down the comparison wholesale. Letting it pass rewards the very sidestep and equates a counter-accusation with an answer. Countering with a counter-accusation of your own is counter-whataboutism: it opens a second side-show and costs you your neutrality as moderator. Changing the subject lets the diversion succeed outright — the original question then disappears entirely.',
    },
    points: 10,
    primaryTechniqueId: 'whataboutism',
    relatedTechniques: ['whataboutism'],
  },
  {
    id: 'wave5a-whataboutism-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fachpanel zu Lieferketten-Sorgfaltspflichten, ausgerichtet von einem Handelsverband: Eine NGO-Vertreterin wirft dem Verbandssprecher vor, die Mitgliedsunternehmen legten ihre Lieferantenlisten bis heute nicht offen. Seine Antwort: „Und Ihre Organisation? Ihre eigenen Geldgeber halten Sie doch selbst bis heute geheim." Ob die Mitgliedsunternehmen ihre Lieferanten offenlegen, sagt er mit keinem Wort.',
      en: 'Expert panel on supply-chain due diligence, hosted by a trade association: an NGO representative charges the association\'s spokesperson that its member companies still do not disclose their supplier lists. His answer: "And your organisation? You yourselves keep your own funders secret to this day." On whether the member companies disclose their suppliers he says not a word.',
    },
    options: [
      { de: 'Whataboutism (tu quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Ad Hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
      { de: 'Doppelstandard', en: 'Double standard' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Whataboutism (tu quoque) in seiner reinsten Form: Der Vorwurf wird nicht beantwortet, sondern gegen die Kritikerin selbst gewendet — „Sie tun doch das Gleiche" (fehlende Offenlegung hier, fehlende Offenlegung dort). Der Hebel lebt davon, dass die offene Frage nach den Mitgliedsunternehmen hinter dem Gegenvorwurf verschwindet; ob offengelegt wird, bleibt unbeantwortet. Legitim einsetzen: Auf eine Inkonsequenz der Gegenseite hinzuweisen ist zulässig — aber zusätzlich, nachdem du die an dich gerichtete Frage beantwortet hast, nicht an ihrer Stelle. Erkennen und kontern: Sobald ein Vorwurf mit „Und Sie?" zurückgespielt wird, trenne die beiden Punkte und halte den ersten offen („Ihre Geldgeber sind eine faire Frage — die klären wir gleich. Zuerst: Legen Ihre Mitglieder ihre Lieferanten offen, ja oder nein?"). Ad Hominem ist hier besonders verführerisch, weil der Konter tatsächlich auf die Kritikerin zeigt — doch er greift nicht ihre Kompetenz oder Lauterkeit an, um ihr Argument für ungültig zu erklären, sondern hält ihr ein gleichartiges eigenes Versäumnis vor, um der Sache auszuweichen; genau diese „du auch"-Struktur ist tu quoque, nicht Ad Hominem. Ein Doppelstandard wäre der Vorwurf, sie messe gleiche Fälle mit zweierlei Maß — darum geht es ihm aber nicht; er will nicht ihre Maßstäbe entlarven, sondern die Frage nach den Mitgliedern loswerden.',
      en: 'Whataboutism (tu quoque) in its purest form: the accusation is not answered but turned back on the critic herself — "you do exactly the same" (no disclosure here, no disclosure there). The lever works by making the open question about the member companies vanish behind the counter-accusation; whether they disclose is left unanswered. Used legitimately: pointing out an inconsistency on the other side is admissible — but as an addition, once you have answered the question put to you, not in its place. To spot and counter it: the moment an accusation is played back with "And you?", separate the two points and keep the first one open ("Your funders are a fair question — we\'ll get to that. First: do your members disclose their suppliers, yes or no?"). Ad hominem is especially tempting here because the riposte really does point at the critic — yet it does not attack her competence or integrity to declare her argument invalid; it holds an equivalent failing of her own against her in order to duck the issue, and that "you too" structure is tu quoque, not ad hominem. A double standard would be the charge that she measures like cases by two yardsticks — but that is not his aim; he is not out to expose her standards, he wants to be rid of the question about his members.',
    },
    points: 10,
    primaryTechniqueId: 'whataboutism',
    relatedTechniques: ['whataboutism', 'ad_hominem'],
  },
];
