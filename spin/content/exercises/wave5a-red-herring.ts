// Welle 5a: 3 Übungen für red_herring (Ablenkung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aRedHerring: Exercise[] = [
  {
    id: 'wave5a-red_herring-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Unternehmenssprecherin hier ein?',
      en: 'Which technique is the company spokesperson using here?',
    },
    scenario: {
      de: 'Radiointerview mit einem regionalen Energieversorger: Der Moderator fragt die Unternehmenssprecherin, warum die Grundgebühr zum Jahreswechsel um 18 Prozent steigt. Ihre Antwort: „Wissen Sie, was viele vergessen — wir waren letzten Sommer der erste Versorger, der den Hochwasser-Opfern in der Region kostenlos Notstrom bereitgestellt hat." Die Frage nach der Gebühr bleibt offen.',
      en: 'Radio interview with a regional energy provider: the host asks the company spokesperson why the standing charge is rising by 18 percent at the turn of the year. Her answer: "You know what many people forget — last summer we were the first provider to supply free emergency power to the flood victims in our region." The question about the charge is left hanging.',
    },
    options: [
      { de: 'Red Herring (Ablenkung)', en: 'Red herring' },
      { de: 'Whataboutism (Tu Quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Framing (positive Selbstdarstellung)', en: 'Framing (positive self-portrayal)' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Red Herring: Die Sprecherin führt ein sachfremdes, positiv besetztes Nebenthema (Hochwasser-Hilfe) ein, um von der offenen Gebührenfrage abzulenken — sie widerlegt den Punkt nicht, sie lässt ihn unbeantwortet, während die Aufmerksamkeit auf ein sympathisches Thema wandert. Genau darin liegt der Mechanismus: Nachhaken wirkt nun kleinlich, weil man gegen etwas Gutes zu opponieren scheint. Auf echtes Engagement hinzuweisen ist völlig in Ordnung — professionell bleibt es, wenn du zuerst die gestellte Frage beantwortest und den Kontext danach ergänzt, statt ihn als Ausweichmanöver zu nutzen. Erkennen und kontern: Du erkennst das Muster daran, dass das neue Thema mit der Frage sachlich nichts zu tun hat und der ursprüngliche Punkt offen bleibt — halte das Nebenthema kurz fest und führe zur unbeantworteten Frage zurück („Die Notstrom-Hilfe rechne ich Ihnen hoch — meine Frage war die Grundgebühr, die 18-Prozent-Erhöhung"). Whataboutism liegt nahe, weil auch dort von der Sache abgelenkt wird — dort aber mit einem Gegenvorwurf („Und was ist mit den Preisen der Wettbewerber?"), nicht mit dem Verweis auf eine eigene gute Tat; hier fällt kein Gegenangriff, es folgt nur ein Themenwechsel. Framing wäre es, wenn sie dieselbe Erhöhung positiv umdeutete („eine faire Anpassung für die Versorgungssicherheit") — sie deutet die Sache aber nicht um, sie ersetzt sie durch eine andere. Themensetzung (Agenda Setting) bezeichnet, welche Themen über längere Zeit überhaupt mediale Aufmerksamkeit bekommen (redaktionelle Steuerung), nicht das spontane Ausweichen in einem einzelnen Gespräch.',
      en: 'Red herring: the spokesperson introduces an off-topic, positively framed side issue (flood relief) to divert from the open question about the charge — she does not rebut the point, she leaves it unanswered while attention drifts to a sympathetic topic. That is the mechanism: pressing further now feels petty, since you seem to be opposing something good. Pointing to genuine community work is perfectly fine — it stays professional when you first answer the question asked and add the context afterwards, rather than using it to dodge. To spot and counter it: you recognise the pattern because the new topic has no bearing on the question and the original point stays open — briefly acknowledge the side issue and steer back to the unanswered question ("I credit you for the emergency power — my question was the standing charge, the 18 percent rise"). Whataboutism seems close because it also deflects from the substance — but it does so with a counter-accusation ("And what about the competitors\' prices?"), not by pointing to one\'s own good deed; here there is no counter-attack, only a change of subject. Framing would mean reinterpreting the same increase in a positive light ("a fair adjustment for security of supply") — but she does not recast the matter, she replaces it with another. Agenda setting describes which topics receive sustained media attention over time (editorial gatekeeping), not the spontaneous dodge within a single conversation.',
    },
    points: 10,
    primaryTechniqueId: 'red_herring',
    relatedTechniques: ['red_herring', 'whataboutism', 'framing', 'agenda_setting'],
  },
  {
    id: 'wave5a-red_herring-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du moderierst ein Podium zur Netzstabilität. Auf deine Frage an einen Vorstand, warum die zugesagten Netzausbau-Investitionen im letzten Jahr nur zur Hälfte abgerufen wurden, antwortet er mit einer engagierten Schilderung, wie viele Ausbildungsplätze sein Unternehmen in strukturschwachen Regionen schafft. Das Publikum applaudiert; deine Investitionsfrage ist unbeantwortet.',
      en: 'You are moderating a panel on grid stability. When you ask a board member why only half of the pledged grid-expansion investment was actually drawn down last year, he responds with a spirited account of how many apprenticeships his company creates in economically weak regions. The audience applauds; your investment question is unanswered.',
    },
    options: [
      {
        de: 'Ich halte das Nebenthema kurz und sichtbar fest, parke es und führe zur offenen Frage zurück: „Die Ausbildungsplätze rechne ich Ihnen hoch — meine Frage war, warum nur die Hälfte der zugesagten Netzausbau-Investitionen abgerufen wurde. Können Sie das beantworten?"',
        en: 'I briefly and visibly acknowledge the side topic, park it, and steer back to the open question: "I credit you for the apprenticeships — but my question was why only half of the pledged grid-expansion investment was drawn down. Can you answer that?"',
      },
      {
        de: 'Ich lasse den Themenwechsel laufen und hake beim sympathischen Ausbildungsthema nach, um die gute Stimmung im Saal nicht zu kippen.',
        en: 'I let the topic switch stand and follow up on the appealing apprenticeship theme, so as not to spoil the good mood in the room.',
      },
      {
        de: 'Ich unterstelle dem Vorstand offen, er wolle Zahlen vertuschen, und fordere ihn auf, endlich reinen Tisch zu machen.',
        en: 'I openly accuse the board member of trying to cover up figures and demand he finally come clean.',
      },
      {
        de: 'Ich kontere mit einer eigenen Gegenfrage, warum denn die Wettbewerber noch weniger investiert hätten.',
        en: 'I counter with a question of my own, asking why the competitors invested even less.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Antwort des Vorstands ist ein Red Herring: Ein sachfremdes, positiv besetztes Thema (Ausbildungsplätze) verdrängt die offene Investitionsfrage, ohne sie zu widerlegen — der Applaus macht das Nachhaken scheinbar kleinlich. Die beste Option nimmt dem Muster die Wirkung: Du würdigst das Nebenthema kurz, machst sichtbar, dass es die Frage nicht beantwortet, und stellst die eigentliche Frage erneut. Willst du selbst auf echtes Engagement hinweisen, beantworte zuerst die gestellte Frage und stell das Lob daneben — dann trägt es als Kontext, statt als Ausweichen zu dienen. Erkennen und kontern: Sobald ein neues, unverbundenes Thema die Frage überdeckt, benennst du die Lücke ruhig und führst zurück, statt dich mittragen zu lassen. Beim sympathischen Nebenthema nachzuhaken belohnt genau die Ablenkung und lässt die Investitionsfrage endgültig fallen. Dem Vorstand Vertuschung zu unterstellen greift die Person an (Ad hominem) und verschiebt die Sachfrage in einen Schlagabtausch. Eine eigene Gegenfrage nach den Wettbewerbern öffnet ein zweites Ablenkungsthema (Whataboutism) und bringt dich von deiner eigenen Frage weiter weg.',
      en: 'The board member\'s answer is a red herring: an off-topic, positively framed subject (apprenticeships) crowds out the open investment question without rebutting it — the applause makes pressing further seem petty. The best option removes the effect: you briefly acknowledge the side topic, make visible that it does not answer the question, and re-ask the actual one. If you want to point to genuine community work yourself, answer the question asked first and set the praise beside it — then it carries as context instead of serving as a dodge. To spot and counter it: the moment a new, unconnected topic overlays the question, calmly name the gap and steer back rather than being carried along. Following up on the appealing side topic rewards exactly the dodge and drops the investment question for good. Accusing the board member of a cover-up attacks the person (ad hominem) and turns the substantive question into a clash. Countering with your own question about competitors opens a second diversion (whataboutism) and moves you further from your own question.',
    },
    points: 10,
    primaryTechniqueId: 'red_herring',
    relatedTechniques: ['red_herring', 'ad_hominem', 'whataboutism'],
  },
  {
    id: 'wave5a-red_herring-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit dieser Antwort versucht der Personalleiter, ___.',
      en: 'Complete the sentence: With this answer, the HR director is trying to ___.',
    },
    scenario: {
      de: 'Betriebsversammlung eines Logistikunternehmens: Der Betriebsrat fragt den Personalleiter, warum die zugesagte Gehaltsanpassung erneut verschoben wird. Er antwortet mit einer langen, warmen Würdigung des „einzigartigen Teamgeists" und lädt zum Sommerfest ein — die Frage nach der Anpassung stellt er nicht.',
      en: 'Company assembly at a logistics firm: the works council asks the HR director why the promised pay adjustment has been postponed again. He responds with a long, warm tribute to the "unique team spirit" and invites everyone to the summer party — he does not address the adjustment.',
    },
    options: [
      {
        de: 'die unbeantwortete Gehaltsfrage durch ein sachfremdes, positiv besetztes Nebenthema aus dem Blick zu rücken (Red Herring / Ablenkung)',
        en: 'push the unanswered pay question out of view with an off-topic, positively framed side issue (red herring)',
      },
      {
        de: 'das Unternehmen durch die Betonung des guten Teamklimas in ein günstiges Licht zu rücken (Framing)',
        en: 'cast the company in a favourable light by emphasising the good team climate (framing)',
      },
      {
        de: 'die Frage mit einem Gegenvorwurf an den Betriebsrat abzuwehren (Whataboutism)',
        en: 'deflect the question with a counter-accusation against the works council (whataboutism)',
      },
      {
        de: 'über längere Zeit die Themensetzung (Agenda Setting) im Unternehmen zu steuern — also welche Themen überhaupt Aufmerksamkeit bekommen',
        en: 'steer the company\'s agenda setting over an extended period — that is, which topics get any attention at all',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Red Herring: „Teamgeist" und „Sommerfest" sind beide angenehm — und genau deshalb geeignet, die konkrete Gehaltsfrage zu überdecken, ohne sie zu beantworten oder zu widerlegen. Der Hebel: Wer jetzt nachhakt, wirkt, als spräche er gegen die gute Stimmung. Gegen ein ehrliches Lob der Teamkultur ist nichts einzuwenden — entscheidend ist die Reihenfolge: Sag zu, wann und wie die Gehaltsanpassung kommt, und würdige den Teamgeist danach. Rückt das Lob an die Stelle der Antwort, wird aus Anerkennung ein Vorhang. Achte beim Erkennen darauf, ob das neue Thema die Frage sachlich berührt oder sie nur überlagert; benenne die offene Frage und bitte um eine konkrete Zusage. Framing läge vor, wenn er die Verschiebung selbst schönredete („eine bewusste Investition in Stabilität statt vorschneller Zusagen") — er deutet die Anpassung aber nicht um, er lässt sie fallen. Whataboutism würde die Frage mit einem Gegenvorwurf kontern („Und wie steht der Betriebsrat eigentlich zu den hohen Krankenständen?"); hier fällt kein Gegenangriff, es kommt nur ein wohliges Ersatzthema. Themensetzung (Agenda Setting) beschreibt die langfristige Steuerung der Themenlandschaft, nicht das spontane Ausweichen auf eine einzelne Frage.',
      en: 'Red herring: "team spirit" and "summer party" are both pleasant — and precisely for that reason apt to cover the concrete pay question without answering or rebutting it. The lever: anyone pressing further now looks as if they are speaking against the good mood. There is nothing wrong with honest praise for the team culture — what matters is the order: commit to when and how the pay adjustment will come, and honour the team spirit after that. Once the praise takes the place of the answer, recognition turns into a curtain. When spotting it, check whether the new topic actually bears on the question or merely overlays it; name the open question and ask for a concrete commitment. Framing would mean he talked up the postponement itself ("a deliberate investment in stability rather than rushed promises") — but he does not recast the adjustment, he drops it. Whataboutism would counter the question with a counter-accusation ("And how does the works council feel about the high absence rates?"); here there is no counter-attack, just a cosy substitute topic. Agenda setting describes the long-term shaping of the topic landscape, not a spontaneous dodge on a single question.',
    },
    points: 10,
    primaryTechniqueId: 'red_herring',
    relatedTechniques: ['red_herring', 'framing', 'whataboutism', 'agenda_setting'],
  },
];
