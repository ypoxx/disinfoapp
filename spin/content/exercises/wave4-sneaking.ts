// Welle R4: 3 Übungen für sneaking (Sneaking / Verschleiern).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4Sneaking: Exercise[] = [
  {
    id: 'w4-sneaking-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster zeigt der Anbieter hier?',
      en: 'Which pattern is the vendor using here?',
    },
    scenario: {
      de: 'Rechnungsfreigabe im Team Unternehmenskommunikation: Die Referentin hat im Self-Service-Portal eine Jahreslizenz der Journalisten-Datenbank bestellt — der Bestellprozess zeigte bis zum letzten Klick durchgehend 4.800 Euro. Auf der ersten Rechnung stehen zusätzlich 950 Euro „Onboarding- und Datenpflege-Pauschale"; der Posten stand weder im Bestellprozess noch in der Bestellbestätigung, sondern nur in den AGB hinter einem Link im Seitenfuß.',
      en: 'Invoice sign-off in the corporate communications team: the officer ordered an annual licence for the journalist database via the self-service portal — the checkout showed a steady 4,800 euros right up to the final click. The first invoice adds 950 euros for an "onboarding and data maintenance fee"; the line item appeared neither in the checkout nor in the order confirmation, only in the terms behind a footer link.',
    },
    options: [
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Sneaking: Entscheidungsrelevante Posten werden aus dem sichtbaren Entscheidungsweg herausgehalten — die Zustimmung wird auf Basis eines unvollständigen Bildes eingeholt, und der wahre Preis erscheint erst, als die Entscheidung längst gefallen ist. Der Hebel liegt im Zeitpunkt: Reklamieren nach Vertragsschluss kostet mehr Aufwand, als ein Nein vor dem Klick gekostet hätte. Legitim einsetzen: Eine Einrichtungspauschale ist seriös, wenn sie vor dem Abschlussklick neben dem Lizenzpreis steht — wenn du eigene Angebots- oder Buchungsstrecken verantwortest, weist du alle Pflichtposten im Entscheidungsweg aus, nicht im Seitenfuß. Erkennen und kontern: Vergleiche Rechnung und Bestätigung mit dem letzten angezeigten Bestellschritt, sichere diesen per Screenshot vor der Freigabe und widersprich nicht ausgewiesenen Posten schriftlich. Drip Pricing wirkt plausibel, weil auch dort Kosten „später" auftauchen — dort tropfen sie aber schrittweise noch während des Bestellprozesses ein, vor dem Abschluss; hier blieb der Preis bis zum letzten Klick konstant, und der Posten kam erst danach. Bait-and-Switch liegt nahe, weil das Ergebnis teurer ist als beworben — dort wird jedoch das Angebot selbst gegen ein schlechteres getauscht; die gelieferte Lizenz ist hier exakt die bestellte. Der Subscription Trap passt scheinbar, weil die Mehrkosten ebenfalls erst nach dem Abschluss sichtbar werden — sein Hebel ist aber der künstlich erschwerte Ausstieg, nicht die vor der Entscheidung verborgene Information.',
      en: 'Sneaking: decision-relevant items are kept out of the visible decision path — consent is obtained on an incomplete picture, and the true price only surfaces once the decision has long been made. The lever is timing: disputing a charge after signing costs more effort than a "no" before the click would have. Used legitimately: a setup fee is above board when it sits next to the licence price before the final click — if you own quote or booking flows, you disclose every mandatory item in the decision path, not in the footer. To spot and counter it: compare invoice and confirmation against the last checkout screen you saw, capture that screen before approving, and dispute undisclosed items in writing. Drip pricing looks plausible because costs also show up "late" there — but they trickle in step by step during checkout, before completion; here the price held steady to the final click and the item arrived only afterwards. Bait-and-switch seems close because the outcome is pricier than advertised — but there the offer itself is swapped for a worse one; the licence delivered here is exactly the one ordered. The subscription trap appears to fit because the surprise also surfaces only after signing — but its lever is an artificially obstructed exit, not information hidden before the decision.',
    },
    points: 10,
    primaryTechniqueId: 'sneaking',
    relatedTechniques: ['sneaking', 'drip_pricing', 'bait_and_switch', 'subscription_trap_obstruction'],
  },
  {
    id: 'w4-sneaking-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation. Dein Team hat online eine Webinar-Plattform für die Pressegespräche des nächsten Quartals gebucht. Die Auftragsbestätigung weist zusätzlich ein „Premium-Branding-Paket" für 290 Euro pro Monat aus — niemand im Team hat es ausgewählt, im Bestellprozess war es an keiner Stelle zu sehen. Der erste Pressetermin auf der Plattform ist in zwei Wochen.',
      en: 'You head corporate communications. Your team booked a webinar platform online for next quarter\'s press briefings. The order confirmation lists an additional "premium branding package" at 290 euros per month — nobody on the team selected it, and it was nowhere to be seen during checkout. The first press briefing on the platform is in two weeks.',
    },
    options: [
      {
        de: 'Ich sichere die Belege — letzter Bestellschritt, Bestellbestätigung —, widerspreche dem nicht bestellten Posten schriftlich und verlange die Auftragsbestätigung in der Fassung, die vor dem Klick angezeigt war. Für künftige Buchungen führen wir ein: Screenshot des letzten Bestellschritts vor jeder Freigabe.',
        en: 'I secure the evidence — final checkout screen, order confirmation — dispute the unordered item in writing, and request an order confirmation matching what was displayed before the click. For future bookings we introduce a rule: capture the final checkout screen before every approval.',
      },
      {
        de: 'Ich lasse das Paket im Auftrag: 290 Euro im Monat sind gemessen am Projektbudget zu wenig, um deswegen einen Anbieter zu verärgern, mit dem wir in zwei Wochen live gehen.',
        en: 'I leave the package on the order: 290 euros a month is too small relative to the project budget to antagonise a vendor we go live with in two weeks.',
      },
      {
        de: 'Ich verhandle mit dem Vertrieb einen Rabatt auf das Branding-Paket — wenn es schon im Auftrag steht, holen wir wenigstens einen besseren Preis heraus.',
        en: 'I negotiate a discount on the branding package with sales — if it is on the order anyway, we at least get a better price out of it.',
      },
      {
        de: 'Ich storniere die gesamte Buchung und setze den Anbieter intern auf die Sperrliste — wer so arbeitet, bekommt keine zweite Chance.',
        en: 'I cancel the entire booking and put the vendor on our internal blocklist — anyone who operates like this does not get a second chance.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Anbieter arbeitet mit Sneaking: Ein nie ausgewählter Posten wird nach der Entscheidung in den Auftrag geschoben — das Muster setzt darauf, dass Reklamieren nach Abschluss mühsamer wirkt als stilles Hinnehmen. Die beste Option entzieht genau diesem Kalkül den Boden: Belege sichern stellt die Beweislage her, der schriftliche Widerspruch macht aus dem untergeschobenen Posten einen unbestellten, und die Prozessregel (Screenshot vor Freigabe) schützt künftige Buchungen — ohne den Pressetermin zu gefährden. Legitim einsetzen: Zusatzpakete anzubieten ist normales Geschäft — professionell bleibt es, wenn sie vor dem Abschluss sichtbar sind und aktiv gewählt werden müssen; so gestaltest du auch eigene Buchungs- und Freigabestrecken. Erkennen und kontern: Prüfe jede Bestätigung gegen den letzten angezeigten Bestellschritt — Abweichungen sind kein Zufall und kein Versehen, sondern ein Muster mit Namen. Das Hinnehmen wirkt plausibel, weil Betrag und Beziehungsrisiko klein erscheinen — es bezahlt aber einen nie bestellten Posten und bestätigt dem Anbieter, dass das Muster funktioniert; auf zwölf Monate sind es zudem 3.480 Euro. Der Rabatt-Weg wirkt wie pragmatisches Verhandeln, akzeptiert aber den untergeschobenen Posten als legitime Verhandlungsbasis — verhandelt wird über den Preis von etwas, das nie bestellt war. Die Komplett-Stornierung überkorrigiert: Sie trifft zuerst den eigenen Pressetermin und gibt das berechtigte Anliegen — Auftrag wie angezeigt — für eine Eskalation auf, bevor der schriftliche Widerspruch überhaupt versucht wurde.',
      en: 'The vendor is running sneaking: an item nobody selected is slipped into the order after the decision — the pattern banks on disputing after the fact feeling more tedious than quiet acceptance. The best option removes exactly that calculus: securing evidence establishes the record, the written dispute turns the sneaked-in item into an unordered one, and the process rule (screenshot before approval) protects future bookings — without endangering the press briefing. Used legitimately: offering add-on packages is ordinary business — it stays professional when they are visible before completion and require an active choice; design your own booking and approval flows the same way. To spot and counter it: check every confirmation against the last checkout screen displayed — discrepancies are not random slips but a pattern with a name. Acceptance looks plausible because the amount and the relationship risk seem small — but it pays for an item never ordered and confirms to the vendor that the pattern works; over twelve months it is also 3,480 euros. The discount route feels like pragmatic negotiating but accepts the sneaked-in item as a legitimate basis — you end up negotiating the price of something that was never ordered. Cancelling everything overcorrects: it hits your own press briefing first and trades a justified demand — the order as displayed — for an escalation attempted before the written dispute has even been tried.',
    },
    points: 10,
    primaryTechniqueId: 'sneaking',
    relatedTechniques: ['sneaking', 'drip_pricing'],
  },
  {
    id: 'w4-sneaking-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vervollständige die Abgrenzung: Beim Drip Pricing werden Zusatzkosten ___, beim Sneaking ___.',
      en: 'Complete the distinction: with drip pricing, additional costs are ___, with sneaking they are ___.',
    },
    options: [
      {
        de: '… schrittweise im Laufe des Bestellprozesses eingeblendet — … bis nach der Entscheidung verborgen oder unbemerkt untergeschoben',
        en: '… revealed step by step during checkout — … hidden until after the decision or slipped in unnoticed',
      },
      {
        de: '… bis nach der Entscheidung verborgen — … schrittweise im Laufe des Bestellprozesses eingeblendet',
        en: '… hidden until after the decision — … revealed step by step during checkout',
      },
      {
        de: '… durch unvergleichbar geschnittene Pakete verschleiert — … durch einen künstlich erschwerten Ausstieg abgesichert',
        en: '… obscured through packages bundled so they cannot be compared — … locked in through an artificially obstructed exit',
      },
      {
        de: '… mit einem attraktiven Lockangebot beworben — … nachträglich gegen ein schlechteres Angebot getauscht',
        en: '… advertised with an attractive teaser offer — … swapped afterwards for a worse deal',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Beide Muster verschieben Kosteninformation nach hinten — der Unterschied liegt im Zeitpunkt relativ zur Entscheidung. Drip Pricing lässt Posten schrittweise noch während des Bestellprozesses auftauchen: Abbrechen wäre möglich, aber jeder investierte Schritt macht es unwahrscheinlicher. Sneaking hält die Information bis nach der Zustimmung zurück oder schiebt Posten unbemerkt in die Transaktion — die Entscheidung fällt auf einem unvollständigen Bild. Legitim einsetzen: Wenn du eigene Angebots- oder Buchungsstrecken gestaltest, gehört jeder Pflichtposten vor den Abschlussklick — das ist zugleich der Lackmustest, mit dem du fremde Strecken prüfst. Erkennen und kontern: Vergleiche den letzten angezeigten Endpreis mit Bestätigung und Rechnung; taucht dort Neues auf, war es Sneaking — tauchte es unterwegs häppchenweise auf, war es Drip Pricing. Die zweite Option wirkt plausibel, weil sie dieselben Bausteine enthält — sie vertauscht aber genau die Zeitpunkte, auf die es bei der Abgrenzung ankommt. Die dritte Option beschreibt zwei Nachbarmuster: Comparison Prevention (Vergleich erschweren) und Subscription Trap (Ausstieg erschweren) — beide setzen nicht am verborgenen Posten an. Die vierte beschreibt Bait-and-Switch: Dort wird das Angebot selbst ausgetauscht, nicht Information zurückgehalten.',
      en: 'Both patterns defer cost disclosure — the difference is the timing relative to the decision. Drip pricing lets items surface step by step during checkout: abandoning is possible, but every step invested makes it less likely. Sneaking withholds the information until after consent, or slips items into the transaction unnoticed — the decision is made on an incomplete picture. Used legitimately: when you design your own quote or booking flows, every mandatory item belongs before the final click — which is also the litmus test you apply to other people\'s flows. To spot and counter it: compare the last displayed total against confirmation and invoice; if something new appears there, it was sneaking — if it appeared bit by bit along the way, it was drip pricing. The second option looks plausible because it contains the same building blocks — but it swaps exactly the timings the distinction hinges on. The third option describes two neighbouring patterns: comparison prevention (making comparison hard) and the subscription trap (making exit hard) — neither works through the hidden item. The fourth describes bait-and-switch: there the offer itself is swapped, rather than information being withheld.',
    },
    points: 10,
    primaryTechniqueId: 'sneaking',
    relatedTechniques: ['sneaking', 'drip_pricing', 'price_comparison_prevention', 'subscription_trap_obstruction', 'bait_and_switch'],
  },
];
