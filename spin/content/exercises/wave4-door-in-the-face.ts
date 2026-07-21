// Welle R4: 3 Übungen für door_in_the_face (Door-in-the-Face).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4DoorInTheFace: Exercise[] = [
  {
    id: 'w4-door_in_the_face-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Anzeigenleiter ein?',
      en: 'Which technique is the ad sales director using?',
    },
    scenario: {
      de: 'Telefonat zur Medienkooperation: Der Anzeigenleiter des Fachverlags bietet dem PR-Manager eines Mittelständlers zuerst die Jahres-Medienpartnerschaft für 60.000 Euro an. Der PR-Manager lehnt ab. Darauf der Anzeigenleiter: „Verstehe ich. Dann komme ich Ihnen entgegen: Nehmen Sie wenigstens das Themenspecial für 8.000 Euro." Intern war das Special von Anfang an das gesetzte Abschlussziel.',
      en: 'Phone call about a media partnership: the trade publisher\'s ad sales director first offers the PR manager of a mid-sized company the annual media partnership at 60,000 euros. The PR manager declines. The director replies: "Understood. Let me meet you halfway: at least take the themed special at 8,000 euros." Internally, the special had been the designated closing target all along.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Door-in-the-Face', en: 'Door-in-the-face' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
      { de: 'Foot-in-the-Door', en: 'Foot-in-the-door' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Door-in-the-Face: Eine bewusst überzogene erste Bitte wird abgelehnt, dann folgt die eigentlich gewollte kleinere — als Entgegenkommen gerahmt. Der Hebel kombiniert Kontrast (neben 60.000 wirken 8.000 klein) mit der Norm wechselseitiger Zugeständnisse: Wer ein Zugeständnis erhält, soll sich zu einem eigenen verpflichtet fühlen. Dass das Special intern von Anfang an das Ziel war, macht das „Entgegenkommen" zur Inszenierung — zumal die Meta-Analyse von Feeley et al. (2012) nur kleine Effekte auf verbale Zustimmung und keinen belastbaren auf tatsächliches Verhalten findet. Legitim einsetzen: Mit einer ambitionierten, aber ernst gemeinten Maximalposition zu eröffnen und echte Rückzugsstufen zu planen, ist seriöses Verhandeln — professionell bleibt es, wenn jedes Angebot für sich tragfähig ist und du auch zum Erstangebot stehen würdest. Erkennen und kontern: Bewerte die zweite Bitte, als wäre sie die erste — „Hätte ich dem Special auch ohne das 60.000-Euro-Angebot zugestimmt?" Dein Nein zur ersten Bitte erzeugt keine Schuld, die du begleichen müsstest. Der Ankereffekt wirkt plausibel, weil die 60.000 als Referenz die 8.000 günstig erscheinen lassen — er braucht aber keine abgelehnte Bitte; hier kommt der zweite Zug gezielt als Reaktion auf das Nein und wird ausdrücklich als Zugeständnis gerahmt. Der Köder-Effekt läge vor, wenn gleichzeitig eine dritte, gezielt unattraktive Option im Angebot stünde, damit das Special im Vergleich dominiert — hier gibt es keinen simultanen Optionsvergleich, sondern die Sequenz aus Bitte, Ablehnung und Rückzug. Foot-in-the-Door ist das Spiegelbild: Dort steht die kleine Bitte am Anfang und ebnet der großen den Weg — hier verläuft die Sequenz genau umgekehrt.',
      en: 'Door-in-the-face: a deliberately oversized first request gets refused, then the smaller request that was the real goal follows — framed as a concession. The lever combines contrast (next to 60,000, 8,000 looks small) with the norm of reciprocal concessions: whoever receives a concession is supposed to feel obliged to make one in return. That the special was the internal target all along exposes the "meeting you halfway" as staged — and the Feeley et al. (2012) meta-analysis finds only small effects on verbal agreement and no robust effect on actual behaviour. Used legitimately: opening with an ambitious but genuine maximum position and planning real fallback steps is honest negotiating — it stays professional when every offer stands on its own and you would honour the opening offer too. To spot and counter it: evaluate the second request as if it were the first — "Would I have agreed to the special without the 60,000-euro offer?" Your no to the first request creates no debt to repay. Anchoring looks plausible because the 60,000 reference makes 8,000 seem cheap — but anchoring needs no rejected request; here the second move comes specifically in reaction to the no and is explicitly framed as a concession. The decoy effect would apply if a third, deliberately unattractive option sat in the offer at the same time so the special dominates by comparison — here there is no simultaneous comparison of options, only the sequence of request, refusal, and retreat. Foot-in-the-door is the mirror image: there the small request comes first and paves the way for the big one — here the sequence runs exactly the other way.',
    },
    points: 10,
    primaryTechniqueId: 'door_in_the_face',
    relatedTechniques: ['door_in_the_face', 'anchoring', 'decoy_effect'],
  },
  {
    id: 'w4-door_in_the_face-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Unternehmenskommunikation eines Softwareherstellers. Für das Kundenevent hat dir die Eventagentur zuerst ein Gesamtpaket für 150.000 Euro angeboten; du hast abgelehnt. Zwei Tage später ruft der Kundenberater an: „Wir sind Ihnen weit entgegengekommen und haben radikal gestrichen — das Kernpaket für 45.000 Euro. Jetzt wäre ein Zeichen von Ihrer Seite fair." Dein Budgetrahmen liegt bei 40.000 Euro; ein Vergleichsangebot hast du noch nicht eingeholt.',
      en: 'You head corporate communications at a software company. For the customer event, the event agency first offered you a full package at 150,000 euros; you declined. Two days later the account manager calls: "We\'ve gone a long way to meet you and made deep cuts — the core package at 45,000 euros. A gesture on your part would only be fair now." Your budget is 40,000 euros; you have not yet obtained a competing quote.',
    },
    options: [
      {
        de: 'Ich löse die Entscheidung von meinem Nein: Ich bewerte das Kernpaket, als wäre es das Erstangebot — Leistungsverzeichnis gegen Budget prüfen, ein Vergleichsangebot einholen — und lasse mich vom inszenierten „Entgegenkommen" zu nichts verpflichten.',
        en: 'I detach the decision from my no: I evaluate the core package as if it were the opening offer — check the scope against my budget, obtain a competing quote — and let the staged "concession" oblige me to nothing.',
      },
      {
        de: 'Ich sage zu: Die Agentur ist nach meiner Absage einen großen Schritt auf mich zugegangen — jetzt bin ich fairerweise mit einem Zugeständnis an der Reihe, sonst beschädige ich die Geschäftsbeziehung.',
        en: 'I accept: after my refusal the agency took a big step towards me — in fairness it is now my turn to make a concession, or I damage the business relationship.',
      },
      {
        de: 'Ich nehme die 45.000 Euro als Verhandlungsbasis und hole noch ein paar Prozent heraus — gemessen am Erstangebot von 150.000 ist das Kernpaket ohnehin schon ein sehr guter Preis.',
        en: 'I take the 45,000 euros as the negotiating baseline and squeeze out a few more percent — measured against the 150,000 opening offer, the core package is already a very good price.',
      },
      {
        de: 'Ich beende die Zusammenarbeit: Wer mit einem derart überzogenen Erstangebot einsteigt, verhandelt unseriös — solchen Agenturen gebe ich keine zweite Chance.',
        en: 'I end the collaboration: anyone who opens with such an inflated offer negotiates in bad faith — I give agencies like that no second chance.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Kundenberater spielt Door-in-the-Face: Das überzogene Erstangebot war auf Ablehnung kalkuliert, das „radikal gestrichene" Kernpaket ist als Zugeständnis gerahmt und soll über die Norm wechselseitiger Zugeständnisse („ein Zeichen von Ihrer Seite") deine Gegenleistung auslösen. Die beste Option entkoppelt genau das: Wer die zweite Offerte wie ein Erstangebot prüft — Leistung gegen Budget, Marktvergleich —, nimmt dem inszenierten Entgegenkommen seine Verpflichtungskraft, ohne die Verhandlung zu beschädigen. Legitim einsetzen: Auch du darfst mit einer ambitionierten Position eröffnen und Rückzugslinien planen — professionell bleibt es, wenn jede Stufe ein ernst gemeintes, für sich kalkuliertes Angebot ist. Erkennen und kontern: Werde aufmerksam, wenn ein „Zugeständnis" unmittelbar auf dein Nein folgt und mit Fairness-Appellen verknüpft wird — nach deiner Absage stehst du in niemandes Schuld. Die Zusage aus Fairness wirkt plausibel, weil wechselseitige Zugeständnisse tatsächlich eine tragende Verhandlungsnorm sind — nur war das Erstangebot nie ernst gemeint, es gab also kein echtes Zugeständnis, das eine Gegenleistung verdient. Das Weiterverhandeln „gemessen am Erstangebot" klingt nach kluger Taktik, übernimmt aber den 150.000-Euro-Anker als Maßstab — bewertet wird dann der Abstand zum Kunstpreis statt des Marktwerts der Leistung. Der Komplettabbruch überkorrigiert: Ambitionierte Eröffnungsangebote sind in Verhandlungen üblich; entscheidend ist, dass du die zweite Offerte eigenständig bewertest, nicht, dass du jeden Anbieter mit hoher Eröffnung aussortierst.',
      en: 'The account manager is running door-in-the-face: the inflated opening offer was calculated to be refused, and the "radically cut" core package is framed as a concession meant to trigger a matching one from you via the norm of reciprocal concessions ("a gesture from your side"). The best option decouples exactly that: evaluating the second offer as if it were an opening offer — scope against budget, market comparison — strips the staged concession of its power to oblige without damaging the negotiation. Used legitimately: you too may open with an ambitious position and plan fallback lines — it stays professional when every step is a genuine offer that is costed on its own terms. To spot and counter it: take notice when a "concession" follows immediately on your no and comes bundled with fairness appeals — a refusal puts you in no one\'s debt. Accepting out of fairness looks plausible because reciprocal concessions genuinely are a load-bearing negotiating norm — but the opening offer was never meant seriously, so there was no real concession that deserves one in return. Haggling a few points off the 45,000 sounds like smart tactics but adopts the 150,000-euro anchor as the yardstick — you then evaluate the distance to an artificial price instead of the market value of the service. Walking away entirely overcorrects: ambitious opening offers are common in negotiations; what matters is that you evaluate the second offer independently, not that you screen out every vendor who opens high.',
    },
    points: 10,
    primaryTechniqueId: 'door_in_the_face',
    relatedTechniques: ['door_in_the_face', 'anchoring', 'reciprocity'],
  },
  {
    id: 'w4-door_in_the_face-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Teammeeting der Pressestelle: Die Referentin bittet den Werkstudenten zunächst, das komplette Pressespiegel-Archiv des vergangenen Jahres neu zu verschlagworten — „ich weiß, das ist ein Brocken". Als er abwinkt, folgt sofort: „Okay, verstehe. Dann übernimmst du aber wenigstens die laufende Woche?" Um die ging es ihr die ganze Zeit.',
      en: 'Press office team meeting: the communications officer first asks the student assistant to re-tag the entire press clippings archive from last year — "I know it\'s a big ask". When he waves it off, she follows up immediately: "Okay, understood. But then you\'ll at least cover the current week\'s clippings?" That was what she was after the whole time.',
    },
    options: [
      { de: 'Foot-in-the-Door', en: 'Foot-in-the-door' },
      { de: 'Door-in-the-Face', en: 'Door-in-the-face' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Door-in-the-Face: Erst eine bewusst große Bitte, deren Ablehnung einkalkuliert ist, dann die eigentlich gewollte kleine — „dann wenigstens" rahmt sie als Entgegenkommen, das den Werkstudenten seinerseits zu einem Zugeständnis bewegen soll; verstärkend wirkt der Kontrast, denn neben dem Jahresarchiv wirkt eine Woche winzig. Legitim einsetzen: Aufgaben gestaffelt anzubieten ist völlig in Ordnung — professionell bleibt es, wenn die große Anfrage ernst gemeint ist und ein Nein zur kleinen genauso akzeptiert würde. Erkennen und kontern: Prüfe die zweite Bitte für sich — „Würde ich das auch übernehmen, wenn sie direkt damit gekommen wäre?" Dein Nein zur ersten Bitte verpflichtet dich zu nichts. Foot-in-the-Door wirkt plausibel, weil auch dort zwei Bitten aufeinander folgen — dort steht aber die kleine Bitte am Anfang und ebnet der großen den Weg; hier ist die Reihenfolge genau umgekehrt. Reziprozität liegt nahe, weil das „Entgegenkommen" wie eine Vorleistung wirkt, die eine Gegenleistung verlangt — tatsächlich hat die Referentin aber nichts gegeben, sondern nur eine nie ernst gemeinte Forderung zurückgenommen; Door-in-the-Face ist genau diese Anwendung der Reziprozitätsnorm auf ein inszeniertes Zugeständnis.',
      en: 'Door-in-the-face: first a deliberately large request whose refusal is factored in, then the small request that was the real goal — "then at least" frames it as a concession meant to move the student assistant to concede in turn; the contrast reinforces it, since next to a year\'s archive a single week looks tiny. Used legitimately: offering tasks in tiers is perfectly fine — it stays professional when the large request is meant seriously and a no to the small one would be accepted just the same. To spot and counter it: assess the second request on its own — "Would I take this on if she had led with it?" Your no to the first request obliges you to nothing. Foot-in-the-door looks plausible because there too one request follows another — but there the small request comes first and paves the way for the big one; here the order is exactly reversed. Reciprocity seems close because the "concession" feels like an advance favour demanding a return — but the officer gave nothing; she merely withdrew a demand that was never meant seriously. Door-in-the-face is precisely this application of the reciprocity norm to a staged concession.',
    },
    points: 10,
    primaryTechniqueId: 'door_in_the_face',
    relatedTechniques: ['door_in_the_face', 'reciprocity'],
  },
];
