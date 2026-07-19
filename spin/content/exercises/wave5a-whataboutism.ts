// Welle 5a: 3 Übungen für whataboutism (Tu Quoque).
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
      { de: 'Whataboutism (Tu quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Ad Hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
      { de: 'Red Herring (Ablenkungsmanöver)', en: 'Red herring (diversion)' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Whataboutism: Auf eine konkrete Frage („Wo bleibt die Lärmschutzwand?") folgt keine Antwort, sondern ein Gegenvorwurf gleicher Art („Und die Stadt bei den Radwegen?"). Der Hebel setzt darauf, dass die Zuhörer die beiden Versäumnisse gegeneinander aufwiegen, statt auf der ursprünglichen Frage zu bestehen — der eigene Punkt bleibt unbeantwortet. Legitim einsetzen: Ein Vergleich mit anderen kann sachlich berechtigt sein, etwa um Verhältnismäßigkeit einzuordnen — aber nur, nachdem du die gestellte Frage selbst beantwortet hast, nicht als Ersatz dafür. Erkennen und kontern: Du erkennst das Muster daran, dass auf die Frage ein Gegenvorwurf statt einer Antwort kommt; benenne die Ausweichbewegung ruhig und führe zurück („Auf die Radwege der Stadt komme ich gern zu sprechen — zuerst zur Lärmschutzwand: Wann steht sie?"). Ad Hominem liegt nahe, weil Whataboutism eine Spielart des Tu-quoque ist — Ad Hominem entwertet aber die Person selbst (Kompetenz, Motiv, Charakter), um ihr Argument abzutun; hier wird die Anwohnerin nicht herabgesetzt, sondern das Thema per Gegen-Fehlverhalten verschoben. Ein Red Herring wäre jede sachfremde Ablenkung; Whataboutism ist die spezielle Form, bei der die Ablenkung ein „ihr macht das doch auch"-Gegenvorwurf ist — genau der liegt hier vor. Ein Strohmann würde die Frage verzerrt wiedergeben und gegen die Verzerrung argumentieren; hier wird die Frage gar nicht umgedeutet, nur beiseitegeschoben.',
      en: 'Whataboutism: a concrete question ("Where is the noise barrier?") is met not with an answer but with a counter-accusation of the same kind ("And the city with its cycle paths?"). The lever relies on the audience weighing the two failures against each other instead of pressing the original question — his own point stays unanswered. Used legitimately: a comparison with others can be perfectly valid, e.g. to place a matter in proportion — but only after you have answered the question put to you, not instead of it. To spot and counter it: you recognise the pattern when a question draws a counter-accusation rather than a reply; name the sidestep calmly and steer back ("I\'m happy to come to the city\'s cycle paths — first, the noise barrier: when will it be up?"). Ad hominem seems close because whataboutism is a form of tu quoque — but ad hominem devalues the person themselves (competence, motive, character) to dismiss their argument; here the resident is not belittled, the topic is shifted via a counter-failing. A red herring would be any off-topic diversion; whataboutism is the specific form where the diversion is a "you do it too" counter-accusation — which is exactly what happens here. A straw man would distort the question and argue against the distortion; here the question is not reinterpreted, merely brushed aside.',
    },
    points: 10,
    primaryTechniqueId: 'whataboutism',
    relatedTechniques: ['whataboutism', 'ad_hominem', 'straw_man'],
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
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Kommentarspalte unter dem LinkedIn-Post eines Bahnbetreibers zur Pünktlichkeitsstatistik: Ein Fahrgast schreibt, die Verspätungen auf seiner Linie seien unzumutbar geworden. Der Social-Media-Manager antwortet öffentlich: „Schauen Sie mal ins Ausland — in vielen anderen Ländern sind die Züge noch viel unpünktlicher." Auf die konkrete Linie des Fahrgasts geht er mit keinem Wort ein.',
      en: 'Comment thread under a rail operator\'s LinkedIn post about its punctuality figures: a passenger writes that the delays on his line have become unbearable. The social-media manager replies publicly: "Take a look abroad — in many other countries the trains are far less punctual still." He does not address the passenger\'s specific line with a single word.',
    },
    options: [
      { de: 'Whataboutism (Tu quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Red Herring (Ablenkungsmanöver)', en: 'Red herring (diversion)' },
      { de: 'Ad Hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Whataboutism: Auf die konkrete Beschwerde folgt kein Wort zur betroffenen Linie, sondern ein Verweis auf das (angeblich schlechtere) Verhalten Dritter — „ins Ausland schauen". Der Hebel stellt eine Gleichwertigkeit her („anderswo ist es schlimmer") und schiebt so die eigene Verantwortung beiseite, ohne die Frage zu beantworten. Legitim einsetzen: Ein internationaler Vergleich kann zur Einordnung sinnvoll sein — aber zusätzlich zur Antwort auf die eigene Linie, nicht an ihrer Stelle. Erkennen und kontern: Frag konkret nach dem eigentlichen Punkt zurück („Wie sieht es auf genau dieser Linie aus, und was ändern Sie?"); verpufft dabei der Auslandsvergleich, war es Whataboutism. Ein Red Herring wäre jede beliebige sachfremde Ablenkung; hier ist die Ablenkung speziell ein „woanders ist es auch/schlimmer"-Gegenvorwurf — die engere, treffendere Bezeichnung ist deshalb Whataboutism. Ad Hominem würde den Fahrgast selbst abwerten (etwa als notorischen Nörgler), um seine Beschwerde zu entkräften; das passiert hier nicht — verschoben wird das Thema, nicht die Person angegriffen.',
      en: 'Whataboutism: the concrete complaint draws not a word about the line in question but a reference to third parties\' (supposedly worse) behaviour — "look abroad". The lever manufactures an equivalence ("elsewhere it\'s worse") and thereby pushes its own responsibility aside without answering the question. Used legitimately: an international comparison can help place things in context — but in addition to an answer about your own line, not in its place. To spot and counter it: ask specifically back for the actual point ("How does this exact line look, and what will you change?"); if the comparison abroad evaporates under that, it was whataboutism. A red herring would be any off-topic diversion whatsoever; here the diversion is specifically an "elsewhere it\'s worse" counter-accusation — so whataboutism is the narrower, more precise label. Ad hominem would devalue the passenger himself (say, as a chronic complainer) to disarm his complaint; that does not happen here — the topic is shifted, the person is not attacked.',
    },
    points: 10,
    primaryTechniqueId: 'whataboutism',
    relatedTechniques: ['whataboutism', 'ad_hominem'],
  },
];
