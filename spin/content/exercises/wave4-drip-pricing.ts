// Welle R4: 3 Übungen für drip_pricing (Drip Pricing).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4DripPricing: Exercise[] = [
  {
    id: 'w4-drip_pricing-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt der Ticketshop hier ein?',
      en: 'Which pattern is the ticket shop using here?',
    },
    scenario: {
      de: 'Ticketkontingent für den Branchenkongress: Die Eventmanagerin einer Kommunikationsagentur bucht im Ticketshop zwölf Plätze für Kunden und Team. Beworben und intern freigegeben sind 79 Euro pro Ticket. Im Bestellprozess kommt auf der zweiten Seite eine „Vorverkaufsgebühr" pro Ticket hinzu, auf der dritten eine „Systempauschale" pro Bestellung, auf der Bezahlseite schließlich ein „Zahlartentgelt" — der Endpreis liegt gut ein Viertel über der freigegebenen Summe.',
      en: 'Ticket block for the industry congress: the event manager at a communications agency is booking twelve seats for clients and team in the ticket shop. The advertised — and internally approved — price is 79 euros per ticket. During checkout, page two adds a per-ticket "presale fee", page three a per-order "system charge", and the payment page a "payment method fee" — the final price ends up a good quarter above the approved budget.',
    },
    options: [
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
      { de: 'Comparison Prevention (Vergleichsverhinderung)', en: 'Comparison prevention' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Drip Pricing: Ein niedriger Einstiegspreis holt die Käuferin in den Prozess, verpflichtende Gebühren erscheinen erst schrittweise — mit jeder ausgefüllten Seite wächst der Aufwand, den ein Abbruch entwerten würde, und jede einzelne Gebühr wirkt für sich genommen zu klein für einen Neustart bei einem anderen Anbieter. Legitim einsetzen: Wenn du selbst Tickets oder Leistungen bepreist, gehören alle verpflichtenden Kosten in den zuerst genannten Preis; nur echte Wahlleistungen dürfen später dazukommen — das hält der Bezahlseite stand und erspart dir Beschwerden nach der Buchung. Erkennen und kontern: Klick dich bis zur Bezahlseite durch, ohne abzuschließen, und mach den dort ausgewiesenen Endpreis zur Vergleichs- und Freigabegröße — nicht den beworbenen Einstiegspreis. Sneaking wirkt plausibel, weil auch dort Kosten spät auftauchen — beim Sneaking werden Posten aber verdeckt hinzugefügt oder erst nach der Entscheidung sichtbar; hier werden alle Gebühren vor dem Abschluss angezeigt, nur eben tröpfchenweise. Bait-and-Switch läge vor, wenn die beworbenen Tickets gar nicht verfügbar wären und ein schlechteres Angebot an ihre Stelle träte — Produkt und Plätze bleiben hier unverändert, nur der Preis wächst. Comparison Prevention würde den Vergleich selbst erschweren, etwa durch unvergleichbare Bündel oder uneinheitliche Einheiten — hier war der Vergleich einfach, er lief nur über einen Preis, den am Ende niemand zahlt.',
      en: 'Drip pricing: a low headline price draws the buyer into the flow, and mandatory fees surface only step by step — with every completed page, the effort that abandoning would waste grows, and each individual fee looks too small on its own to justify starting over with another vendor. Used legitimately: when you price tickets or services yourself, every mandatory cost belongs in the first price you name; only genuinely optional extras may be added later — that holds up on the payment page and spares you complaints after booking. To spot and counter it: click through to the payment page without completing the purchase, and make the final price shown there your basis for comparison and approval — not the advertised headline price. Sneaking looks plausible because costs also appear late there — but sneaking adds items covertly or reveals them only after the decision; here every fee is displayed before completion, just drip by drip. Bait-and-switch would apply if the advertised tickets were unavailable and a worse offer took their place — the product and seats stay unchanged here, only the price grows. Comparison prevention would hamper the comparison itself, for instance through incomparable bundles or inconsistent units — here comparing was easy, it just ran on a price nobody ends up paying.',
    },
    points: 10,
    primaryTechniqueId: 'drip_pricing',
    relatedTechniques: ['drip_pricing', 'sneaking', 'bait_and_switch', 'price_comparison_prevention'],
  },
  {
    id: 'w4-drip_pricing-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest das Budget der Unternehmenskommunikation. Für den Versand der Jahresauftaktmeldung hat dein Referent drei Presseverteiler-Dienste verglichen und den mit dem günstigsten Paketpreis empfohlen. Beim Buchen im Bestellportal kommen nacheinander Empfängerstaffel, Regionszuschlag und eine verpflichtende „Übermittlungsgebühr" hinzu; der Endpreis liegt inzwischen über dem des zweitplatzierten Anbieters. Dein Referent schreibt im Chat: „Bin fast durch mit dem Formular — soll ich einfach abschließen?"',
      en: 'You own the corporate communications budget. For distributing the new year\'s kick-off release, your associate compared three newswire services and recommended the one with the lowest package price. During booking in the order portal, a recipient tier, a regional surcharge, and a mandatory "transmission fee" are added one after another; the final price is now above the second-ranked provider\'s. Your associate messages you: "Almost done with the form — should I just complete it?"',
    },
    options: [
      {
        de: 'Ich lasse ihn bis zur Bezahlseite gehen, ohne abzuschließen, und notiere den dortigen Endpreis. Dann stellen wir den Anbietervergleich auf Endpreise um — gebucht wird der Dienst, der auf der Bezahlseite gewinnt; die bereits investierte Formularzeit spielt für die Entscheidung keine Rolle.',
        en: 'I have him go to the payment page without completing the order and note the final price shown there. Then we redo the vendor comparison on final prices — we book the service that wins on the payment page; the form-filling time already invested plays no role in the decision.',
      },
      {
        de: 'Ich lasse ihn abschließen: Das Formular ist fast fertig, die Meldung muss raus, und die einzelnen Gebühren sind für sich genommen Kleinbeträge, die den Vergleich nicht ernsthaft ändern.',
        en: 'I have him complete it: the form is nearly done, the release has to go out, and the individual fees are small amounts on their own that do not seriously change the comparison.',
      },
      {
        de: 'Ich lasse ihn beim Anbieter anrufen und einen Nachlass auf den Paketpreis verhandeln — die Gebühren sind branchenüblich, entscheidend ist, dass der Basispreis der günstigste bleibt.',
        en: 'I have him call the provider and negotiate a discount on the package price — the fees are standard in the industry, what matters is that the base price stays the lowest.',
      },
      {
        de: 'Ich streiche den Anbieter und künftig jeden Dienst mit mehrstufigem Bestellprozess von der Liste — wer den Endpreis nicht auf der Startseite nennt, kommt für uns grundsätzlich nicht infrage.',
        en: 'I drop this provider and, going forward, every service with a multi-step ordering process — any vendor that does not state the final price on its landing page is off the table for us on principle.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Portal arbeitet mit Drip Pricing: Der niedrige Paketpreis hat den Vergleich gewonnen, die verpflichtenden Zuschläge tropfen erst im Bestellprozess nach — und die bereits investierte Formularzeit soll den Abschluss trotz gekipptem Vergleich tragen. Die beste Option entzieht dem Muster beide Hebel: Der Endpreis von der Bezahlseite wird zur einzigen Vergleichsgröße, und die versunkene Formularzeit wird ausdrücklich für irrelevant erklärt — entschieden wird, als stünde die Wahl neu an. Legitim einsetzen: Für eigene Angebote heißt das, den Preis zu kommunizieren, der auf der Bezahlseite steht; ein Einstiegspreis „ab" ist vertretbar, wenn alles Verpflichtende darin enthalten ist. Erkennen und kontern: Mach den Checkout-Durchklick ohne Abschluss zum Standard deiner Anbietervergleiche — der Preis auf der Bezahlseite ist der Preis. Abschließen wirkt plausibel, weil der Termindruck real ist und jede Gebühr einzeln klein aussieht — genau diese Salamitaktik ist der Mechanismus, und das „fast fertige" Formular ist ein versunkener Aufwand, der über den künftigen Preis nichts aussagt. Der Verhandlungsweg wirkt professionell, verhandelt aber die falsche Zahl: Ein Nachlass auf den Basispreis lässt die Gebührenstruktur unangetastet, und der Vergleich liefe weiter über einen Preis, den niemand zahlt. Die Grundsatz-Streichung überkorrigiert: Mehrstufige Bestellprozesse sind normal und oft nötig — das Problem sind verpflichtende Kosten, die erst spät erscheinen; eine Pauschalregel verkleinert deinen Anbieterpool, ohne dein Budget besser zu schützen als der Endpreis-Vergleich.',
      en: 'The portal is running drip pricing: the low package price won the comparison, the mandatory surcharges drip in only during ordering — and the time already sunk into the form is meant to carry the purchase even though the comparison has flipped. The best option removes both levers: the final price from the payment page becomes the only basis for comparison, and the sunk form time is explicitly declared irrelevant — the decision is made as if the choice were fresh. Used legitimately: for your own offerings, this means communicating the price that appears on the payment page; a "from" price is defensible when everything mandatory is included in it. To spot and counter it: make the no-purchase checkout click-through a standard step in your vendor comparisons — the price on the payment page is the price. Completing the order looks plausible because the deadline pressure is real and each fee looks small in isolation — but that salami tactic is precisely the mechanism, and the "nearly finished" form is a sunk cost that says nothing about the price ahead. The negotiation route feels professional but haggles over the wrong number: a discount on the base price leaves the fee structure untouched, and the comparison would still run on a price nobody pays. Dropping vendors on principle overcorrects: multi-step ordering flows are normal and often necessary — the problem is mandatory costs appearing late; a blanket rule shrinks your vendor pool without protecting your budget any better than comparing final prices does.',
    },
    points: 10,
    primaryTechniqueId: 'drip_pricing',
    relatedTechniques: ['drip_pricing', 'sneaking', 'price_comparison_prevention'],
  },
  {
    id: 'w4-drip_pricing-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster schlägt der Kollege hier vor?',
      en: 'Which pattern is the colleague proposing here?',
    },
    scenario: {
      de: 'Teams-Abstimmung zur neuen Anmeldestrecke der hauseigenen Seminarreihe: Der Marketingkollege schlägt der Kommunikationsleiterin vor, mit „ab 890 Euro" zu werben und die verpflichtende Digital- und Verpflegungspauschale erst auf den späteren Seiten der Anmeldung einzublenden — „dann sieht der Einstieg günstiger aus als beim Wettbewerb, und wer einmal drin ist, bricht nicht mehr ab".',
      en: 'Teams call on the new sign-up flow for the in-house seminar series: the marketing colleague proposes to the head of communications that they advertise "from 890 euros" and surface the mandatory digital and catering charges only on the later pages of the registration — "that way the entry price looks cheaper than the competition\'s, and once people are in, they don\'t drop out".',
    },
    options: [
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Comparison Prevention (Vergleichsverhinderung)', en: 'Comparison prevention' },
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Drip Pricing: Der Vorschlag zerlegt den wahren Preis in einen werblichen Einstiegspreis und später eingeblendete Pflichtposten — der Vergleich mit dem Wettbewerb läuft dann über eine Zahl, die keine Teilnehmerin am Ende zahlt, und der Fortschritt in der Anmeldestrecke soll den Abbruch unattraktiv machen. Legitim einsetzen: Ein „ab"-Preis ist professionell vertretbar, wenn alle verpflichtenden Kosten darin stecken und nur echte Wahlleistungen — etwa ein Workshoptag oder ein Hotelpaket — später dazukommen; das schützt die Marke, erspart Stornodiskussionen und hält der Rechtslage stand, denn Drip Pricing ist in mehreren Märkten bereits Gegenstand von Regulierung. Erkennen und kontern: Prüf eigene Buchungsstrecken aus Kundensicht bis zur letzten Seite — weicht der Endpreis vom beworbenen Preis ab, ohne dass eine freiwillige Auswahl dazwischenlag, hast du das Muster im eigenen Haus. Comparison Prevention (Vergleichsverhinderung) wirkt plausibel, weil der Kollege ausdrücklich auf den Wettbewerbsvergleich zielt („dann sieht der Einstieg günstiger aus als beim Wettbewerb") — sie würde den Vergleich aber selbst unmöglich machen, etwa durch unvergleichbare Bündel oder uneinheitliche Einheiten; hier bleiben die Angebote vergleichbar, und die Pflichtposten werden im Prozess offengelegt — der Vergleich läuft nur über die falsche Zahl. Bait-and-Switch liegt nahe, weil „ab 890 Euro" wie ein Lockpreis wirkt — dort würde aber das beworbene Angebot ausgetauscht oder für nicht verfügbar erklärt und ein schlechteres an seine Stelle treten; hier bleibt das Seminar unverändert, nur der Preis wächst um Pflichtposten. Sneaking liegt nahe, weil Kosten spät sichtbar werden — dort blieben sie aber bis nach der Entscheidung verborgen oder würden ungefragt hinzugefügt; hier werden die Pauschalen vor dem Abschluss angezeigt, nur eben Schritt für Schritt.',
      en: 'Drip pricing: the proposal splits the true price into an advertised entry price and mandatory charges shown later — the comparison with competitors then runs on a number no participant ends up paying, and progress through the sign-up flow is meant to make dropping out unattractive. Used legitimately: a "from" price is professionally defensible when every mandatory cost is included and only genuinely optional extras — say, a workshop day or a hotel package — are added later; that protects the brand, avoids cancellation disputes, and holds up legally, since several markets already regulate against drip pricing. To spot and counter it: walk your own booking flows from the customer\'s perspective through to the last page — if the final price deviates from the advertised one without any voluntary choice in between, you have the pattern in your own house. Comparison prevention looks plausible because the colleague explicitly targets the competitive comparison ("the entry price looks cheaper than the competition\'s") — but that pattern would make comparing impossible in the first place, say through incomparable bundles or inconsistent units; here the offers stay comparable and the mandatory charges are disclosed within the flow — the comparison merely runs on the wrong number. Bait-and-switch seems close because "from 890 euros" works like a lure price — but there the advertised offer would be swapped out or declared unavailable, with a worse one taking its place; here the seminar stays unchanged, only the price grows through mandatory charges. Sneaking seems close because costs become visible late — but there they would stay hidden until after the decision or be added without asking; here the charges are displayed before completion, just step by step.',
    },
    points: 10,
    primaryTechniqueId: 'drip_pricing',
    relatedTechniques: ['drip_pricing', 'price_comparison_prevention', 'bait_and_switch', 'sneaking'],
  },
];
