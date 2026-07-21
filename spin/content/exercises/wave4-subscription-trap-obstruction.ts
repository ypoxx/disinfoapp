// Welle R4: 3 Übungen für subscription_trap_obstruction (Abo-Falle / Obstruction).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4SubscriptionTrapObstruction: Exercise[] = [
  {
    id: 'w4-subscription_trap_obstruction-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster trifft hier am genauesten zu?',
      en: 'Which pattern fits most precisely here?',
    },
    scenario: {
      de: 'Etat-Abschluss im Agentur-Controlling: Der Etat-Direktor einer PR-Agentur will das kaum genutzte Medienbeobachtungs-Abo eines ausgelaufenen Kundenetats zum Laufzeitende beenden. Der Abschluss lief seinerzeit online in wenigen Klicks, Preis und automatische Verlängerung standen dort vollständig und korrekt. Für die Kündigung verlangen die AGB jedoch einen eigenhändig unterschriebenen Brief per Einschreiben an die Konzernzentrale im Ausland; das Kontaktformular antwortet automatisiert, elektronische Kündigungen könnten „aus Dokumentationsgründen" nicht berücksichtigt werden.',
      en: 'Closing out a client budget in agency controlling: the account director at a PR agency wants to end the barely used media monitoring subscription tied to an expired client budget. Sign-up back then took a few clicks online, with price and auto-renewal fully and correctly stated. To cancel, however, the terms require a hand-signed letter sent by registered mail to the corporate headquarters abroad; the contact form replies automatically that electronic cancellations cannot be accepted "for documentation reasons".',
    },
    options: [
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Abo-Falle / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Abo-Falle / Obstruction: Der Hebel ist die Asymmetrie zwischen Einstieg und Ausstieg — der Abschluss ist reibungslos, die Kündigung erfordert Kanalwechsel, Schriftform und Postweg ins Ausland. Jede zusätzliche Hürde erhöht die Wahrscheinlichkeit, dass die Kündigung aufgeschoben wird und der Vertrag sich noch einmal verlängert; die Konditionen selbst waren dabei völlig transparent. Legitim einsetzen: Wenn dein Unternehmen Abos anbietet, mach den Ausstieg so einfach wie den Einstieg — ein sichtbarer Kündigungsweg im Konto ist regulatorisch zunehmend Pflicht und erspart dir Beschwerden, Bewertungsportale und Vertrauensverlust; Kundenbindung gehört in das Produkt, nicht in die Ausgangstür. Erkennen und kontern: Vergleiche vor jedem Abschluss den Abschlussweg mit dem Kündigungsweg — steht der nicht in zwei Minuten fest, plane die Kündigung wie einen Termin: Frist notieren, früh und nachweisbar kündigen, Bestätigung einfordern. Sneaking wirkt plausibel, weil auch dort ein Abo-Kontext typisch ist — beim Sneaking bliebe aber eine entscheidungsrelevante Angabe bis nach der Entscheidung verdeckt; hier war beim Abschluss alles offengelegt, die Hürde liegt allein im Weg hinaus. Drip Pricing beträfe die Preisdarstellung im Kaufprozess — hier stimmt der Preis von Anfang an, das Problem beginnt erst beim Verlassen.',
      en: 'Subscription trap / obstruction: the lever is the asymmetry between entry and exit — signing up is frictionless, cancelling requires a channel switch, a hand-signed letter, and registered mail abroad. Every added hurdle raises the odds that the cancellation gets postponed and the contract renews once more; the terms themselves were fully transparent. Used legitimately: if your company sells subscriptions, make leaving as easy as joining — a visible cancellation path in the account is increasingly a regulatory requirement and spares you complaints, review sites, and lost trust; retention belongs in the product, not at the exit. To spot and counter it: before any sign-up, compare the way in with the way out — if the exit path is not clear within two minutes, treat cancellation like an appointment: note the deadline, cancel early and verifiably, and demand confirmation. Sneaking looks plausible because it, too, is typical of subscription contexts — but sneaking keeps a decision-relevant fact hidden until after the decision; here everything was disclosed at sign-up, and the barrier sits solely in the way out. Drip pricing would concern price presentation during checkout — here the price is stated accurately from the outset; the problem only begins when you try to leave.',
    },
    points: 10,
    primaryTechniqueId: 'subscription_trap_obstruction',
    relatedTechniques: ['subscription_trap_obstruction', 'sneaking', 'drip_pricing'],
  },
  {
    id: 'w4-subscription_trap_obstruction-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation eines Software-Anbieters mit Abo-Modell. Im Produkt-Jour-fixe präsentiert der Growth-Manager sein „Retention-Projekt": Der Kündigungslink soll aus dem Kundenkonto verschwinden, Kündigungen künftig nur noch telefonisch über das Sales-Team laufen — „dann können wir jeden Abwanderer noch einmal persönlich abholen". Die Churn-Prognose im Deck sieht beeindruckend aus, und der Vertriebsleiter nickt bereits.',
      en: 'You head corporate communications at a subscription-based software vendor. In the product sync, the growth manager presents his "retention project": the cancellation link is to disappear from the customer account, and cancellations will only be handled by phone through the sales team — "that way we get one more personal shot at every churner". The churn forecast in the deck looks impressive, and the sales director is already nodding.',
    },
    options: [
      {
        de: 'Ich stimme zu — ein Telefonat ist persönlicher als ein Klick, und nur im Gespräch erfahren wir die echten Kündigungsgründe für die Produktentwicklung.',
        en: 'I agree — a phone call is more personal than a click, and only in conversation do we learn the real cancellation reasons for product development.',
      },
      {
        de: 'Ich widerspreche mit Begründung: Der Ausstieg muss so einfach bleiben wie der Einstieg — versteckte Kündigungswege sind regulatorisch riskant und ein Reputationsrisiko, das in Bewertungen und Presseanfragen bei mir landet. Als Alternative schlage ich ein einziges, faires Rückgewinnungsangebot auf der Kündigungsseite vor, danach ein Klick zum Ende.',
        en: 'I push back with reasons: leaving must stay as easy as joining — hidden cancellation paths are a regulatory risk and a reputational one that ends up on my desk via reviews and press inquiries. As an alternative, I propose a single fair win-back offer on the cancellation page, then one click to finish.',
      },
      {
        de: 'Ich schlage einen Kompromiss vor: Der Kündigungslink bleibt, führt aber erst durch mehrere Seiten mit Rabattstufen und einer Feedback-Pflichtabfrage — so verlieren wir keine Kunden ohne Gegenangebot.',
        en: 'I propose a compromise: the cancellation link stays, but first routes through several pages of discount tiers and a mandatory feedback form — that way we lose no customer without a counter-offer.',
      },
      {
        de: 'Ich lehne das Projekt ab und fordere, dass auf der Kündigungsseite künftig gar keine Angebote mehr erscheinen dürfen — jede Rückgewinnungsmaßnahme im Kündigungsprozess ist manipulativ.',
        en: 'I reject the project and demand that the cancellation page carry no offers at all going forward — any win-back measure inside the cancellation flow is manipulative.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Vorschlag ist eine Abo-Falle im Lehrbuchformat: Der reibungslose Einstieg bleibt, der Ausstieg wird auf einen aufwendigeren Kanal verlagert — die Churn-Prognose speist sich nicht aus überzeugten Kunden, sondern aus aufgeschobenen Kündigungen. Die beste Option benennt genau das und liefert eine legitime Alternative: Ein einzelnes, transparentes Rückgewinnungsangebot mit anschließendem Ein-Klick-Ausstieg holt den Kunden ab, ohne ihn festzuhalten. Legitim einsetzen: Kundenbindung im Kündigungsmoment ist professionell vertretbar — als Angebot, nicht als Hürde; wer den Ausstieg leicht macht, senkt die Wechselschwelle auch für den Wiedereinstieg und erspart sich Beschwerdewellen, die am Ende in der Kommunikationsabteilung landen. Erkennen und kontern: Prüf bei jedem „Retention"-Konzept, ob es den Wert des Produkts erhöht oder nur die Kosten des Verlassens — sobald der Kündigungsweg schwerer wird als der Abschlussweg, verteidigst du eine Kennzahl mit der Reputation des Unternehmens, und regulatorisch bewegt sich das Muster zunehmend im verbotenen Bereich (Kündigungsbutton-Pflichten). Die Telefon-Option wirkt plausibel, weil Kündigungsgründe tatsächlich wertvoll sind — aber Feedback lässt sich freiwillig erheben; als einziger Kündigungsweg wird das Gespräch zur Barriere, nicht zur Erkenntnisquelle. Der Rückhalteschleifen-Kompromiss wirkt diplomatisch, ersetzt aber nur eine Obstruktionsform durch eine andere: gestaffelte Pflichtseiten sind das Muster, nicht seine Entschärfung. Das Totalverbot überkorrigiert — ein faires Gegenangebot im Kündigungsmoment ist kein Dark Pattern, solange der Ausstieg danach einen Klick entfernt bleibt; wer jede Rückgewinnung verbietet, verwechselt Manipulation mit Vertrieb.',
      en: 'The proposal is a textbook subscription trap: the frictionless entry stays, while the exit moves to a more burdensome channel — the churn forecast is fed not by convinced customers but by postponed cancellations. The best option names exactly that and offers a legitimate alternative: a single transparent win-back offer followed by a one-click exit engages the customer without holding them captive. Used legitimately: retention at the moment of cancellation is professionally defensible — as an offer, not as a hurdle; making the exit easy lowers the switching threshold for coming back, too, and spares you the flood of complaints that ultimately lands in the communications department. To spot and counter it: for every "retention" concept, check whether it increases the product\'s value or merely the cost of leaving — the moment the way out becomes harder than the way in, you are defending a metric with the company\'s reputation, and regulation increasingly outlaws the pattern (cancellation button requirements). The phone option looks plausible because cancellation reasons genuinely are valuable — but feedback can be collected voluntarily; as the only cancellation path, the call becomes a barrier, not a source of insight. The retention-loop compromise feels diplomatic but merely swaps one form of obstruction for another: staged mandatory pages are the pattern, not its remedy. The blanket ban overcorrects — a fair counter-offer at the moment of cancellation is not a dark pattern as long as the exit stays one click away afterwards; banning all win-back efforts confuses manipulation with sales.',
    },
    points: 10,
    primaryTechniqueId: 'subscription_trap_obstruction',
    relatedTechniques: ['subscription_trap_obstruction', 'sludge'],
  },
  {
    id: 'w4-subscription_trap_obstruction-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Agentur-Teams-Chat am Monatsende: Der Trainee schreibt der Beraterin, der mit einem Klick gestartete Gratis-Test des Bildrechte-Tools habe sich kostenpflichtig verlängert — die Verlängerung stand zwar im Bestellprozess, aber der Kündigungslink führte durch mehrere „Angebotsseiten" und verlangte am Ende einen Anruf beim Support, für den vor Fristablauf kein Termin mehr frei war.',
      en: 'Agency Teams chat at the end of the month: the trainee messages the consultant that the one-click free trial of the image rights tool has rolled over into a paid plan — the renewal was stated during sign-up, but the cancellation link routed through several "offer pages" and ultimately required a support call, with no slot available before the deadline.',
    },
    options: [
      { de: 'Abo-Falle / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Bait-and-Switch', en: 'Bait and switch' },
      { de: 'Default-Effekt (Status quo)', en: 'Default effect (status quo)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Abo-Falle / Obstruction: Der Einstieg war ein Klick, der Ausstieg ein Hindernisparcours aus Rückhalteseiten, Kanalwechsel und Terminknappheit — die Verlängerung kommt nicht durch eine Entscheidung zustande, sondern dadurch, dass die Gegen-Entscheidung praktisch unmöglich gemacht wurde, obwohl alle Konditionen offenlagen. Legitim einsetzen: Gratisphasen sind ein normales Vertriebsinstrument — professionell bleibt das Modell, wenn die Kündigung auf demselben Weg funktioniert wie der Abschluss und rechtzeitig vor Fristablauf möglich ist; eine Erinnerungs-Mail vor Testende ist das vertrauensbildende Gegenstück zu diesem Muster. Erkennen und kontern: Prüf vor jedem Test-Abo den Kündigungsweg, nicht nur den Preis — und wenn du das Muster vor dir hast, kündige sofort nach Abschluss statt kurz vor Fristende; bei bereits verlängerten Verträgen lohnt der Blick auf Kündigungsbutton-Pflichten und Widerrufsrechte. Bait-and-Switch wirkt plausibel, weil aus „gratis" plötzlich „kostenpflichtig" wurde — dort würde aber das beworbene Angebot selbst gegen ein schlechteres ausgetauscht; hier blieb das Produkt unverändert, nur der Ausgang war blockiert. Der Default-Effekt wirkt plausibel, weil die automatische Verlängerung eine Voreinstellung ist — er beschreibt jedoch die passive Tendenz, Voreinstellungen zu belassen; hier hat der Trainee aktiv versucht zu kündigen und wurde durch gebaute Hürden gestoppt: Das aktive Blockieren des Ausstiegs ist die Signatur dieses Musters.',
      en: 'Subscription trap / obstruction: entry was one click, exit an obstacle course of retention pages, a channel switch, and scarce appointments — the renewal happens not through a decision but because the counter-decision was made practically impossible, even though all terms were disclosed. Used legitimately: free trials are a normal sales instrument — the model stays professional when cancellation works through the same channel as sign-up and is possible well before the deadline; a reminder email before the trial ends is the trust-building counterpart to this pattern. To spot and counter it: before any trial subscription, check the cancellation path, not just the price — and when you see the pattern, cancel right after signing up rather than just before the deadline; for contracts that have already renewed, look into cancellation button requirements and withdrawal rights. Bait and switch looks plausible because "free" suddenly became "paid" — but there the advertised offer itself would be swapped for a worse one; here the product stayed the same, only the way out was blocked. The default effect looks plausible because auto-renewal is a preset — but it describes the passive tendency to leave defaults untouched; here the trainee actively tried to cancel and was stopped by engineered hurdles: actively blocking the exit is this pattern\'s signature.',
    },
    points: 10,
    primaryTechniqueId: 'subscription_trap_obstruction',
    relatedTechniques: ['subscription_trap_obstruction', 'bait_and_switch', 'default_status_quo'],
  },
];
