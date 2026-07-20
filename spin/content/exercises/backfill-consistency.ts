// Backfill: 3 Übungen für consistency (Konsistenz).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillConsistency: Exercise[] = [
  {
    id: 'backfill-consistency-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Anbieter ein?',
      en: 'Which technique is the provider using?',
    },
    scenario: {
      de: 'Systemwechsel bei einem mittelständischen Versicherer: Ein Cloud-Anbieter gewinnt die IT-Leiterin mit einem auffällig günstigen Einstiegsangebot — zwei Jahre Rabatt, kostenlose Migration. Sie sagt intern zu, kündigt den Wechsel im Führungskreis an und stoppt die laufende Ausschreibung. Kurz vor der Unterschrift zieht der Anbieter zwei der beworbenen Konditionen zurück: Die Migration kostet nun doch, der Rabatt gilt nur ein Jahr. Statt neu zu vergleichen, unterschreibt sie — sie hat sich schließlich schon festgelegt und den Wechsel überall angekündigt.',
      en: 'System switch at a mid-sized insurer: a cloud provider wins over the head of IT with a strikingly cheap entry offer — two years of discount, migration free of charge. She commits internally, announces the switch to the leadership circle and halts the running tender. Just before signing, the provider withdraws two of the advertised terms: the migration now does carry a cost, and the discount only holds for one year. Instead of comparing afresh, she signs — after all, she has already committed and announced the switch everywhere.',
    },
    options: [
      { de: 'Konsistenz', en: 'Consistency' },
      { de: 'Foot-in-the-Door', en: 'Foot-in-the-door' },
      { de: 'Sunk-Cost-Eskalation', en: 'Sunk-cost escalation' },
      { de: 'Ankereffekt', en: 'Anchoring effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konsistenz, hier in der Spielart des Low-Ball: Die IT-Leiterin bindet sich zuerst unter attraktiven Bedingungen, und als der Anbieter die Konditionen nachträglich verschlechtert, hält sie an der einmal getroffenen Entscheidung fest, statt neu zu rechnen. Der Hebel ist nicht das Angebot selbst, sondern die schon gefällte Festlegung: Einmal zugesagt und angekündigt, will man sich nicht widersprechen — auch dann nicht, wenn der ursprüngliche Grund für die Zusage weggebrochen ist. So nutzt du das professionell: Ändern sich Rahmenbedingungen nach einer Zusage, leg sie offen und lass dein Gegenüber frei neu entscheiden, statt die alte Festlegung als Hebel zu benutzen. Erkennen und kontern: Sobald sich die Bedingungen nach deinem Ja verschlechtern, behandle die Sache wie eine frische Entscheidung — würdest du unter den jetzigen Konditionen neu zusagen? Wenn nein, ist die alte Zusage kein Grund. Foot-in-the-Door sähe anders aus: Dort geht einer kleinen, bereits erfüllten Erstbitte eine größere nach — hier stand von Beginn an die volle Zusage, nur die Bedingungen kippten hinterher. Sunk-Cost-Eskalation zöge ihre Kraft aus bereits versenkten Kosten („so viel investiert, jetzt nicht abbrechen") — investiert ist hier fast nichts, es zählt die Selbstbindung, nicht ein verlorener Einsatz. Der Ankereffekt läge vor, wenn der niedrige Einstiegspreis nur ihre Preiswahrnehmung verschöbe — der eigentliche Zug ist aber, dass sie ihrer eigenen Entscheidung treu bleibt, nicht dass sie eine Zahl als Bezugsgröße nimmt.',
      en: 'Consistency, here in its low-ball variant: the head of IT first commits under attractive conditions, and when the provider worsens the terms after the fact, she sticks with the decision she once made instead of recalculating. The lever is not the offer itself but the commitment already made: once you have said yes and announced it, you do not want to contradict yourself — not even when the original reason for the yes has fallen away. How to use it professionally: when conditions change after a commitment, put them on the table and let your counterpart decide freely anew, rather than using the old commitment as leverage. To spot and counter it: the moment the terms worsen after your yes, treat the matter as a fresh decision — would you commit again under the conditions as they now stand? If not, the old yes is no reason. Foot-in-the-door would look different: there a small, already granted first request is followed by a larger one — here the full commitment stood from the start; only the conditions tipped afterwards. Sunk-cost escalation would draw its force from costs already sunk ("invested so much, don\'t abandon it now") — almost nothing is invested here; what counts is the self-binding, not a lost stake. The anchoring effect would apply if the low entry price merely shifted her price perception — but the actual move is that she stays true to her own decision, not that she takes a number as a reference point.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'foot_in_the_door', 'sunk_cost_escalation', 'anchoring'],
  },
  {
    id: 'backfill-consistency-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Produktentwicklung einer Digitalagentur: Die Bereichsleiterin hat „Produkt X" über Monate zu ihrem Steckenpferd gemacht — in jedem Jour fixe verteidigt, gegen interne Zweifel durchgeboxt, als ihre strategische Handschrift verstanden. Zwei Monate vor dem Launch zeigen die Nutzertests klar: X fällt in dieser Form durch, ein Pivot wäre der klügere Weg. In der Runde sagt sie: „Ich habe monatelang für genau diesen Kurs gestanden — jetzt umzuschwenken hieße zuzugeben, dass ich die ganze Zeit falschlag." Du verantwortest das Produktmarketing und kennst die Testdaten.',
      en: 'Product development at a digital agency: the division head has made "Product X" her personal cause over months — defended in every check-in, pushed through against internal doubts, understood as her strategic signature. Two months before launch, user testing shows clearly: X in this form fails, and a pivot would be the wiser path. In the room she says: "I have stood for exactly this course for months — to switch now would mean admitting I was wrong all along." You own product marketing and know the test data.',
    },
    options: [
      {
        de: 'Ich trenne die Selbstbindung der Leiterin von der jetzt richtigen Entscheidung: Ich mache im Team explizit, dass wir uns auf ein erfolgreiches Produkt verpflichtet haben, nicht auf einen bestimmten Weg dorthin, und lege die Testdaten als Grund für einen offen kommunizierten Kurswechsel auf den Tisch.',
        en: 'I separate the head\'s self-binding from the decision that is now right: I make explicit to the team that we committed to a successful product, not to one particular path to it, and I put the test data on the table as the reason for an openly communicated course correction.',
      },
      {
        de: 'Ich halte am Launch fest: Die Leiterin hat sich monatelang für X verbürgt, und ein Pivot würde ihre Autorität vor dem ganzen Bereich beschädigen — das wiegt für mich schwerer als ein enttäuschender Testlauf.',
        en: 'I stick with the launch: the head has vouched for X for months, and a pivot would damage her authority in front of the whole division — to me that outweighs one disappointing test run.',
      },
      {
        de: 'Ich ziehe daraus die Lehre, dass wir uns künftig gar nicht mehr früh auf Projektziele festlegen sollten — solche Selbstverpflichtungen sind Manipulation und binden uns nur an Fehlentscheidungen.',
        en: 'I draw the lesson that we should stop committing to project goals early at all in future — such self-commitments are manipulation and only chain us to bad decisions.',
      },
      {
        de: 'Ich bereite den Pivot still im engsten Kreis vor und lasse die Leiterin ihn als ihre eigene Idee präsentieren, damit niemand ein Zurückrudern von ihrer monatelangen Linie bemerken muss.',
        en: 'I prepare the pivot quietly in the innermost circle and let the head present it as her own idea, so no one has to notice a walk-back from her months-long line.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Bereichsleiterin steht unter Konsistenzdruck aus eigener Hand: Wer sich monatelang hinter X gestellt hat, erlebt den Pivot als Eingeständnis, die ganze Zeit falschgelegen zu haben — und dieses drohende Selbstwiderspruch-Gefühl bindet stärker an X als jede Sachlage. Die beste Option löst den Druck nicht mit Trotz, sondern richtet die Konsistenz neu aus: Verpflichtet habt ihr euch auf ein erfolgreiches Produkt, nicht auf einen bestimmten Weg — damit wird der datenbelegte Kurswechsel selbst zur konsequenten Handlung, und niemand muss sein Gesicht verlieren. So nutzt du das professionell: Formuliere Ziele von Anfang an ergebnis- statt wegbezogen und sag laut, dass neue Belege den Kurs korrigieren dürfen — dann trägt die Festlegung, ohne zur Falle zu werden. Erkennen und kontern: Wenn ein „ich stehe seit Monaten dafür" gegen bessere Daten in Stellung geht, benenne, worauf die Verpflichtung wirklich zielt — auf das Ergebnis —, und deute den Rückzug vom Weg als Zeichen von Urteilskraft, nicht von Wankelmut. Am Launch festzuhalten (Option 2) wirkt loyal, verwechselt aber Treue zur Person mit Treue zur Sache — die Autorität der Leiterin übersteht einen offenen, gut begründeten Schwenk leichter als einen sehenden Auges verfehlten Launch. Selbstverpflichtungen grundsätzlich abzuschaffen (Option 3) überkorrigiert: Nicht das Commitment ist das Problem, sondern sein Gebrauch als Fessel. Der stille Pivot mit fremden Federn (Option 4) rettet zwar das Gesicht der Leiterin, hält den Konsistenzdruck aber unausgesprochen am Leben und untergräbt das Vertrauen, das eine offen kommunizierte Korrektur gerade schaffen würde.',
      en: 'The division head is under a consistency pressure of her own making: someone who has backed X for months experiences the pivot as an admission of having been wrong all along — and that looming sense of self-contradiction binds her to X more strongly than any facts. The best option meets the pressure not with defiance but by re-aiming the consistency: what you committed to is a successful product, not one particular path — which makes the data-backed course correction itself the consistent act, and no one has to lose face. How to use it professionally: frame goals as outcome-based rather than path-based from the outset and say out loud that new evidence may correct the course — then the commitment carries weight without becoming a trap. To spot and counter it: when an "I have stood for this for months" is deployed against better data, name what the commitment really aims at — the outcome — and read stepping off the path as a sign of judgment, not of fickleness. Sticking with the launch (option 2) looks loyal but confuses fidelity to the person with fidelity to the matter — the head\'s authority survives an open, well-reasoned turn more easily than a launch missed with eyes open. Abolishing self-commitments wholesale (option 3) over-corrects: the commitment is not the problem, its use as a shackle is. The quiet pivot dressed in someone else\'s feathers (option 4) does save the head\'s face but keeps the consistency pressure alive unspoken and undermines the very trust an openly communicated correction would build.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'cognitive_dissonance_induction'],
  },
  {
    id: 'backfill-consistency-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Die selbst formulierte, schriftliche Selbstverpflichtung wirkt, weil ___.',
      en: 'Complete the sentence: the self-authored, written commitment works because ___.',
    },
    scenario: {
      de: 'Weiterbildungsprogramm eines Berufsverbands: Statt den Teilnehmenden bloß einen Lernplan vorzusetzen, lässt die Akademie jeden zu Beginn auf dem persönlichen Dashboard einen eigenen Satz eintippen — konkret, in eigenen Worten, mit selbst gesetztem Termin: „Bis Ende Q2 schließe ich Modul 3 ab, weil …". Die Abschlussquote der Selbstverpflichteten liegt danach deutlich höher als in früheren Jahrgängen ohne diesen Schritt.',
      en: 'A professional association\'s training programme: instead of just handing participants a study plan, the academy has each of them type a sentence of their own onto their personal dashboard at the start — concrete, in their own words, with a self-set deadline: "By the end of Q2 I will complete Module 3, because …". The completion rate among those who commit is markedly higher afterwards than in earlier cohorts without this step.',
    },
    options: [
      {
        de: 'eine selbst formulierte, konkrete und schriftlich festgehaltene Festlegung Menschen dazu bringt, sich später zu ihr passend zu verhalten (Konsistenz)',
        en: 'a self-authored, concrete, written commitment gets people to behave later in line with it (consistency)',
      },
      {
        de: 'eine kleine erste Bitte den Weg für eine spätere, größere Bitte ebnet (Foot-in-the-Door)',
        en: 'a small first request paves the way for a later, larger one (foot-in-the-door)',
      },
      {
        de: 'die sichtbar hohe Abschlussquote der anderen zum Maßstab für das eigene Durchhalten wird (Social Proof)',
        en: 'the visibly high completion rate of the others becomes the yardstick for one\'s own perseverance (social proof)',
      },
      {
        de: 'der bereits gezahlte Programmbeitrag ein Abbrechen als Verlust erscheinen lässt (Sunk-Cost-Eskalation)',
        en: 'the programme fee already paid makes dropping out feel like a loss (sunk-cost escalation)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konsistenz: Was man selbst in eigenen Worten formuliert, konkret macht und schriftlich festhält, wirkt wie ein Versprechen an sich selbst — und dem will man treu bleiben. Nicht die Vorgabe der Akademie bindet, sondern der eigene, festgehaltene Satz; genau deshalb steigt die Abschlussquote. So nutzt du das professionell: Wenn jemand ein Ziel ohnehin erreichen will, lass ihn es selbst, konkret und terminiert aufschreiben — das hilft, den guten Vorsatz zu halten, solange du niemanden zu einer Festlegung drängst, die er nicht teilt. Erkennen und kontern: Werde aufmerksam, wenn dich ein Formular erst etwas erklären lässt und dich später an genau diese Erklärung erinnert — prüf die Sache an ihrem Nutzen, nicht daran, ob sie zu deinem früheren Satz passt. Foot-in-the-Door bräuchte zwei getrennte Bitten nacheinander — eine kleine als Türöffner für die eigentliche; hier steht nur eine einzige Festlegung, die auf ihre Urheberin selbst zurückwirkt. Social Proof würde über die sichtbare Quote der anderen wirken („so viele schaffen es") — hier bewegt der eigene Satz, nicht die Zahl der übrigen. Sunk-Cost-Eskalation zeigte auf den schon gezahlten Beitrag („so viel bezahlt, jetzt nicht abbrechen") — der Hebel ist aber die frische, selbst geschriebene Zusage, nicht das ausgegebene Geld.',
      en: 'Consistency: what you phrase yourself, in your own words, make concrete and put in writing works like a promise to yourself — and you want to stay true to it. It is not the academy\'s directive that binds but your own recorded sentence; that is exactly why completion rises. How to use it professionally: when someone wants to reach a goal anyway, have them write it down themselves, concretely and with a deadline — that helps a good intention hold, as long as you never push anyone into a commitment they don\'t share. To spot and counter it: take notice when a form first has you spell something out and later reminds you of exactly that — judge the matter on its merits, not on whether it matches the sentence you wrote earlier. Foot-in-the-door would need two separate requests in sequence — a small one as the door-opener for the real one; here there is only a single commitment that acts back on its own author. Social proof would work through the visible rate of others ("so many manage it") — here your own sentence moves you, not the count of the rest. Sunk-cost escalation would point to the fee already paid ("paid so much, don\'t quit now") — but the lever is the fresh, self-written commitment, not the money spent.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'foot_in_the_door', 'social_proof', 'sunk_cost_escalation'],
  },
];
