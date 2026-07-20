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
      de: 'Welche Technik setzt der Berater ein?',
      en: 'Which technique is the consultant using?',
    },
    scenario: {
      de: 'Beratungsprojekt bei einem Maschinenbauer, Steuerungsmeeting: Die IT-Leiterin hat ihre Abteilung über Monate intern und in Rundmails unter dem selbstgewählten Anspruch „Wir sind der Digital-Vorreiter des Konzerns" positioniert. Der externe Berater will sie zu einem deutlich höheren Migrationsbudget bewegen und argumentiert nicht mit dem Nutzen der Migration, sondern mit ihrer eigenen Festlegung: „Sie haben Ihre Abteilung selbst zum Digital-Vorreiter erklärt — ein knapp gehaltenes Migrationsbudget passt nicht zu dem Anspruch, für den Sie seit Monaten stehen."',
      en: 'A consulting project at a machinery manufacturer, steering meeting: for months the head of IT has positioned her department — internally and in all-staff emails — under the self-chosen claim "We are the group\'s digital front-runner." The external consultant wants to move her toward a markedly higher migration budget and argues not from the migration\'s merits but from her own prior stance: "You declared your department the digital front-runner yourself — a tightly capped migration budget doesn\'t fit the standard you have stood for these past months."',
    },
    options: [
      { de: 'Konsistenz', en: 'Consistency' },
      { de: 'Sympathie', en: 'Liking' },
      { de: 'Foot-in-the-Door', en: 'Foot-in-the-door' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konsistenz: Der Hebel ist nicht der Sachnutzen der Migration, sondern die Festlegung, die die IT-Leiterin selbst und wiederholt getroffen hat. Wer sich monatelang als „Digital-Vorreiter" positioniert hat, gerät unter Druck, jede spätere Entscheidung dazu passend zu treffen — sonst droht der offene Widerspruch zum eigenen erklärten Selbstbild. So nutzt du das professionell: Wenn du jemanden an einen selbst gewählten Anspruch erinnerst, halte die eingeforderte Handlung deckungsgleich mit dem, was tatsächlich zugesagt war, statt unter dem Deckmantel des Anspruchs eine viel weitergehende Forderung durchzudrücken. Erkennen und kontern: Frag dich, ob dein früheres Bekenntnis dich wirklich auf genau diese Zahl festlegt — trenne den Anspruch, zu dem du weiter stehst, von dem konkreten Budget, das man daraus ableiten will. Sympathie ist hier verwechselbar, weil der Satz wie ein Kompliment an ihr Selbstbild klingt — Sympathie zielt aber darauf, dass der Berater selbst gemocht wird (Ähnlichkeit, Wärme, Nähe); hier zählt allein ihre eigene frühere Festlegung, der Berater bliebe austauschbar. Foot-in-the-Door bräuchte eine kleine erste Zusage, die er ihr zuvor entlockt hat, um die große vorzubereiten — er beruft sich aber auf einen längst bestehenden Anspruch, nicht auf eine von ihm gestaffelte Bitte. Reziprozität setzte eine Vorleistung des Beraters voraus, die eine Gegenleistung nahelegt — er gibt hier nichts, er hält ihr nur ihre eigenen Worte vor.',
      en: 'Consistency: the lever is not the migration\'s practical merit but the stance the head of IT has taken herself, again and again. Someone who has positioned herself as the "digital front-runner" for months comes under pressure to make every later decision fit that — otherwise she openly contradicts her own declared self-image. How to use it professionally: when you remind someone of a standard they chose themselves, keep the action you ask for congruent with what was actually promised, instead of pushing a far larger demand through under cover of that standard. To spot and counter it: ask whether your earlier commitment really pins you to this exact figure — separate the standard you still stand by from the specific budget someone wants to derive from it. Liking is confusable here because the line sounds like a compliment to her self-image — but liking aims at making the consultant himself liked (similarity, warmth, rapport); here only her own prior commitment does the work, and the consultant would be interchangeable. Foot-in-the-door would need a small first agreement he had drawn from her earlier to set up the big one — but he invokes a long-standing standard, not a request he staged in steps. Reciprocity would require an advance move by the consultant that invites something in return — he gives nothing here; he merely holds her own words up to her.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'liking', 'foot_in_the_door', 'reciprocity'],
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
      de: 'Team-Offsite einer Digitalagentur: In einem Workshop hat die Bereichsleiterin jede Person laut und sichtbar auf ein Whiteboard schreiben lassen: „Ich stehe dafür, dass wir Produkt X bis zum dritten Quartal launchen." Zwei Monate später zeigen die Nutzertests klar, dass X in dieser Form durchfällt und ein Pivot der klügere Weg wäre. In der Runde sagt die Leiterin: „Wir haben uns alle öffentlich festgelegt — ein Rückzieher jetzt macht uns vor dem ganzen Haus unglaubwürdig." Du verantwortest das Produktmarketing und kennst die Testdaten.',
      en: 'A digital agency\'s team offsite: in a workshop, the division head had every person write out loud and visibly on a whiteboard: "I stand for us launching Product X by the third quarter." Two months later, user testing shows clearly that X in this form fails and a pivot would be the wiser path. In the room, the head says: "We all committed publicly — backing out now makes us look unreliable to the whole company." You own product marketing and know the test data.',
    },
    options: [
      {
        de: 'Ich trenne die öffentliche Zusage von der jetzt richtigen Entscheidung: Ich mache im Team explizit, dass wir uns auf das Ziel — ein erfolgreiches Produkt — festgelegt haben, nicht auf einen bestimmten Weg dorthin, und lege die Testdaten als Grund für einen sauberen, offen kommunizierten Kurswechsel auf den Tisch.',
        en: 'I separate the public commitment from the decision that is now right: I make explicit to the team that we committed to the goal — a successful product — not to one particular path to it, and I put the test data on the table as the reason for a clean, openly communicated course correction.',
      },
      {
        de: 'Ich halte am Launch fest: Wir haben es alle sichtbar zugesagt; ein Pivot würde uns vor dem Rest des Hauses unglaubwürdig machen, und das wiegt schwerer als ein paar schwache Testwerte.',
        en: 'I stick with the launch: we all committed visibly, and a pivot would make us look unreliable to the rest of the company — that outweighs a few weak test scores.',
      },
      {
        de: 'Ich fordere, solche öffentlichen Selbstverpflichtungen im Team künftig ganz zu streichen — sie sind Manipulation und binden uns nur an Fehlentscheidungen.',
        en: 'I demand that we scrap public self-commitments in the team altogether from now on — they are manipulation and only chain us to bad decisions.',
      },
      {
        de: 'Ich ziehe den Pivot still im engsten Kreis durch, ohne die frühere Zusage überhaupt anzusprechen, damit niemand sein Whiteboard-Versprechen zurücknehmen muss.',
        en: 'I push the pivot through quietly in the innermost circle, without addressing the earlier commitment at all, so nobody has to retract their whiteboard promise.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Bereichsleiterin nutzt Konsistenz: Die laut und sichtbar getroffene Selbstverpflichtung („Ich stehe dafür …") bindet die Gruppe stärker an X, als es ein stiller Plan je täte — öffentliche, aktive Zusagen erzeugen genau diesen Sog. Die beste Option leugnet den Sog nicht, sondern lenkt ihn um: Sie richtet die Konsistenz auf das eigentliche Ziel (ein erfolgreiches Produkt) und macht den datenbelegten Kurswechsel damit selbst zur konsequenten Handlung. So nutzt du das professionell: Knüpfe eine Team-Zusage von Anfang an an das Ziel, nicht an einen einzelnen Lösungsweg, und sag laut dazu, dass neue Belege die Zusage aktualisieren dürfen — so trägt das Commitment, ohne zur Falle zu werden. Erkennen und kontern: Wenn dich ein „Wir haben uns doch alle festgelegt" gegen bessere Daten in Stellung bringt, benenne offen, worauf ihr euch wirklich verpflichtet habt — auf das Ergebnis, nicht auf den Wortlaut — und mach den Rückzug vom Weg zum sichtbaren Zeichen von Verlässlichkeit statt von Wankelmut. Das Festhalten am Launch (Option 2) wirkt plausibel, weil ein Rückzieher tatsächlich unangenehm ist — es verwechselt aber Wortlaut-Treue mit Verlässlichkeit; verlässlich ist, wer sein Urteil an die Belege anpasst, nicht wer sehenden Auges gegen die Testdaten liefert. Das grundsätzliche Streichen von Commitments (Option 3) überkorrigiert: Nicht das Instrument ist das Problem, sondern sein Gebrauch als Fessel — gebraucht wird eine Kultur, in der Zusagen bei guten Gründen revidierbar sind. Der stille Pivot (Option 4) meidet die Konfrontation, lässt den Konsistenzdruck aber unausgesprochen im Raum und untergräbt das Vertrauen, das eine offene Kurskorrektur gerade schaffen würde.',
      en: 'The division head is using consistency: the commitment made out loud and visibly ("I stand for …") binds the group to X far more than a quiet plan ever would — public, active pledges create exactly this pull. The best option does not deny the pull but redirects it: it re-aims the consistency at the actual goal (a successful product) and thereby makes the data-backed course correction itself the consistent act. How to use it professionally: tie a team commitment to the goal from the outset, not to a single solution path, and say out loud that new evidence may update the commitment — that way the pledge carries weight without becoming a trap. To spot and counter it: when a "but we all committed" is turned against you in the face of better data, state openly what you actually committed to — the outcome, not the wording — and make stepping off the path a visible sign of reliability rather than of fickleness. Sticking with the launch (option 2) seems plausible because backing out really is uncomfortable — but it confuses fidelity to the wording with reliability; the reliable person adjusts their judgment to the evidence, not the one who ships against the test data with eyes open. Scrapping commitments wholesale (option 3) overcorrects: the tool is not the problem, its use as a shackle is — what is needed is a culture in which commitments can be revised for good reasons. The quiet pivot (option 4) avoids the confrontation but leaves the consistency pressure unspoken in the room and undermines the very trust an open course correction would build.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'sunk_cost_escalation'],
  },
  {
    id: 'backfill-consistency-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Die aktive, öffentliche Selbstformulierung wirkt, weil ___.',
      en: 'Complete the sentence: the active, public self-statement works because ___.',
    },
    scenario: {
      de: 'Mitglieder-Rückgewinnung eines Berufsverbands: Statt die Mitgliedschaft still per Lastschrift zu verlängern, bittet die Geschäftsstelle jedes Mitglied im Verlängerungsformular, einen Satz selbst zu formulieren und im Mitgliederforum sichtbar zu posten: „Ich bleibe dabei, weil …". Die Verlängerungsquote steigt danach spürbar.',
      en: 'A professional association winning back members: instead of quietly renewing memberships by direct debit, the office asks each member in the renewal form to phrase a sentence themselves and post it visibly in the member forum: "I am staying because …". The renewal rate rises noticeably afterwards.',
    },
    options: [
      {
        de: 'freiwillige, öffentlich und aktiv geäußerte Festlegungen Menschen stärker an ein dazu passendes Verhalten binden (Konsistenz)',
        en: 'voluntary commitments stated publicly and actively bind people more strongly to matching behaviour (consistency)',
      },
      {
        de: 'eine kleine erste Bitte den Weg für eine spätere, größere Bitte ebnet (Foot-in-the-Door)',
        en: 'a small first request paves the way for a later, larger one (foot-in-the-door)',
      },
      {
        de: 'das sichtbare Verhalten vieler anderer zum Maßstab für die eigene Entscheidung wird (Social Proof)',
        en: 'the visible behaviour of many others becomes the yardstick for one\'s own decision (social proof)',
      },
      {
        de: 'die bereits gezahlten Jahresbeiträge einen Ausstieg als Verlust erscheinen lassen (Sunk-Cost-Eskalation)',
        en: 'the annual dues already paid make quitting feel like a loss (sunk-cost escalation)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konsistenz: Eine Zusage, die man selbst formuliert (aktiv), sichtbar postet (öffentlich) und ohne Zwang gibt (freiwillig), bindet erheblich stärker als eine stille Abbuchung — genau diese drei Verstärker macht sich das Formular zunutze. Wer „Ich bleibe dabei, weil …" öffentlich geschrieben hat, will sich danach dazu passend verhalten. So nutzt du das professionell: Wenn jemand ohnehin bei euch bleiben will, lass ihn seine Gründe selbst und sichtbar aussprechen — das hilft, einen guten Vorsatz auch zu halten, solange du niemanden zu einem Bekenntnis drängst, das er gar nicht teilt. Erkennen und kontern: Werde aufmerksam, wenn du gebeten wirst, eine Haltung erst laut zu erklären und dann zu handeln — miss die Entscheidung an ihren Sachgründen, nicht daran, ob sie zu der Erklärung passt, die du gerade abgegeben hast. Foot-in-the-Door bräuchte eine gestaffelte Abfolge — erst eine Mini-Zusage, dann die eigentliche Bitte; das Formular verlangt aber in einem einzigen Schritt genau die Handlung, um die es geht. Social Proof läge vor, wenn die Verlängerung mit der Menge der anderen begründet würde („12.000 Kolleginnen sind schon dabei") — hier bewegt die selbst formulierte Zusage, nicht die Zahl der anderen. Sunk-Cost-Eskalation würde auf die schon gezahlten Jahresbeiträge zeigen („so viel investiert, jetzt nicht aufhören") — der Hebel im Formular ist aber die frische, eigene Erklärung, nicht das bereits versenkte Geld.',
      en: 'Consistency: a commitment you phrase yourself (active), post visibly (public) and give without pressure (voluntary) binds considerably more strongly than a silent debit — the form harnesses exactly these three amplifiers. Someone who has publicly written "I am staying because …" then wants to act in line with it. How to use it professionally: when someone wants to stay with you anyway, let them voice their own reasons visibly — that helps a good intention actually stick, as long as you never push anyone into a declaration they don\'t share. To spot and counter it: take notice when you are asked to declare a stance out loud first and then act — judge the decision on its merits, not on whether it matches the declaration you just gave. Foot-in-the-door would need a staged sequence — a mini-commitment first, then the real request; but the form asks in a single step for the very action at stake. Social proof would apply if the renewal were justified by the sheer number of others ("12,000 colleagues are already in") — here your own worded commitment moves you, not the crowd\'s count. Sunk-cost escalation would point to the dues already paid ("invested so much, don\'t quit now") — but the form\'s lever is the fresh, self-authored statement, not the money already spent.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'foot_in_the_door', 'social_proof', 'sunk_cost_escalation'],
  },
];
