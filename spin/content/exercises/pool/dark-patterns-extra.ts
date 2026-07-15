import type { Exercise } from '../../types';

// dark_patterns — Phase 2 content batch.
export const darkPatternsExtraExercises: Exercise[] = [
  {
    id: 'da-new-5',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze den Satz: Weil die Anmeldung nur zwei Klicks kostet, die Kündigung aber ausschließlich telefonisch zu eng begrenzten Zeiten möglich ist, ___.',
      en: 'Complete the sentence: Because signing up takes only two clicks, but cancelling is possible solely by phone during narrowly limited hours, ___.',
    },
    scenario: {
      de: 'Ein Streaming-Dienst wirbt mit „In 30 Sekunden startklar". Das Abo ist online sofort abgeschlossen. Zum Kündigen gibt es online keine Option — nur eine Hotline, die werktags von 9 bis 11 Uhr besetzt ist.',
      en: 'A streaming service advertises "ready in 30 seconds". The subscription is completed online instantly. To cancel, there is no online option — only a hotline staffed on weekdays from 9 to 11 a.m.',
    },
    options: [
      {
        de: 'erschwert das Design absichtlich den Ausstieg, während der Einstieg mühelos bleibt (Dark Pattern / Obstruktion)',
        en: 'the design deliberately obstructs the exit while entry stays effortless (dark pattern / obstruction)',
      },
      {
        de: 'hebt das Design den Tarif mit einem durchgestrichenen Vergleichspreis als Schnäppchen hervor (Anchoring)',
        en: 'the design highlights the plan as a bargain with a crossed-out comparison price (anchoring)',
      },
      {
        de: 'erzeugt das Design mit den knappen Hotline-Zeiten eine künstliche Verknappung, die Nutzer unter Handlungsdruck setzt (Knappheit)',
        en: 'the tight hotline hours create an artificial scarcity that puts users under pressure to act (scarcity)',
      },
      {
        de: 'stupst das Design Nutzer über die Telefonpflicht nur sanft zum Bleiben, ohne den Ausstieg wirklich zu versperren (Nudging)',
        en: 'the design merely nudges users toward staying via the phone requirement, without actually blocking the exit (nudging)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein Dark Pattern vom Typ „Roach Motel" (Obstruktion): Der Einstieg wird mühelos gemacht, der Ausstieg gezielt mit Reibung verbaut — der Aufwandsunterschied hält Nutzer im Vertrag, nicht ihre freie Entscheidung. Die ethische Grenze: Gestaltung darf lenken, aber Ein- und Ausstieg müssen ähnlich leicht erreichbar sein. Anchoring würde über einen gesetzten Vergleichs- oder Referenzpreis ein Urteil verzerren — ein solcher Preis kommt im Szenario gar nicht vor. Knappheit würde über begrenzte Verfügbarkeit oder Zeitdruck zum Abschluss verleiten (FOMO); die knappen Hotline-Zeiten verknappen aber nicht das Angebot, sondern versperren nur den Ausstieg — das ist Reibung, keine echte Verknappung. Und ein Nudge bewahrt gerade die leichte Gegenwahl; hier wird der Ausstieg bewusst blockiert statt nur sanft gelenkt. Nur die absichtliche Asymmetrie zwischen Anmeldung und Kündigung passt zum beschriebenen Mechanismus.',
      en: 'This is a "Roach Motel" dark pattern (obstruction): entry is made effortless while the exit is deliberately walled off with friction — it is the effort gap, not the user\'s free choice, that keeps people subscribed. The ethical line: design may guide, but entry and exit must be roughly equally easy to reach. Anchoring would distort a judgement through a set comparison or reference price — no such price appears in the scenario at all. Scarcity would lure people into signing up through limited availability or time pressure (FOMO); but the tight hotline hours do not make the offer scarce, they only wall off the exit — that is friction, not genuine scarcity. And a nudge specifically preserves the easy counter-choice; here the exit is deliberately blocked rather than merely gently steered. Only the deliberate asymmetry between signing up and cancelling fits the mechanism described.',
    },
    points: 10,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns', 'nudging'],
  },
  {
    id: 'da-new-6',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt hinter diesem Checkout?',
      en: 'Which technique is behind this checkout?',
    },
    scenario: {
      de: 'Beim Online-Checkout eures SaaS-Tarifs ist im Warenkorb bereits ein Zusatzposten „Priority Support, 9 €/Monat" eingetragen — klein, unauffällig und ohne Hinweis hinzugefügt. Wer ihn nicht bemerkt und aktiv entfernt, bezahlt ihn dauerhaft mit.',
      en: 'In the online checkout for your SaaS plan, an add-on "Priority Support, €9/month" is already entered in the cart — small, inconspicuous and added without any notice. Anyone who does not spot it and actively remove it keeps paying for it.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein Dark Pattern vom Typ „Sneaking": Ein kostenpflichtiger Posten wird unbemerkt vorbelegt, sodass die zusätzliche Zahlung zur Standardfolge wird, sobald der Nutzer nicht aktiv widerspricht. Der Trick liegt in der Verschleierung, nicht im Argument. Nudging ist der naheliegende Fehlgriff und zugleich die entscheidende Abgrenzung: Ein legitimer Nudge ist transparent und lässt die Gegenwahl gleich leicht — hier wird der Posten jedoch versteckt und muss erst entdeckt werden, das macht ihn zum Dark Pattern. Anchoring würde einen Referenzpreis setzen, um den Endpreis günstig wirken zu lassen; Framing würde dieselbe Information nur anders formulieren — beides greift nicht, denn manipuliert wird der Ablauf durch stille Vorbelegung, nicht eine Zahl oder eine Darstellung.',
      en: 'This is a "sneaking" dark pattern: a paid item is pre-loaded unnoticed, so the extra charge becomes the default outcome unless the user actively objects. The trick lives in the concealment, not in an argument. Nudging is the tempting wrong pick and also the decisive distinction: a legitimate nudge is transparent and keeps the opposite choice equally easy — here the item is hidden and must first be discovered, which is what makes it a dark pattern. Anchoring would set a reference price to make the final price feel cheap; framing would merely present the same information differently — neither applies, because the flow is manipulated through silent pre-selection, not through a number or a presentation.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns', 'nudging'],
  },
];
