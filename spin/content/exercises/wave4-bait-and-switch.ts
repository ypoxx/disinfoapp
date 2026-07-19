// Welle R4: 3 Übungen für bait_and_switch (Bait-and-Switch).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4BaitAndSwitch: Exercise[] = [
  {
    id: 'w4-bait_and_switch-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt der Veranstalter hier ein?',
      en: 'Which pattern is the organizer using here?',
    },
    scenario: {
      de: 'Sponsoring des Branchenkongresses: Die Kommunikationsmanagerin eines Mittelständlers meldet sich per Mail auf das im Veranstalter-Newsletter beworbene „Silber-Paket zum Frühbucherpreis" (4.900 Euro). Die Sponsoring-Verantwortliche antwortet, das Silber-Kontingent sei „leider bereits vergeben" — verfügbar sei nur noch das Gold-Paket für 9.800 Euro, das man „angesichts der Sichtbarkeitsziele ohnehin empfehle". Der Newsletter der Folgewoche bewirbt das Silber-Paket zum Frühbucherpreis unverändert weiter.',
      en: 'Sponsoring the industry congress: the communications manager at a mid-sized company emails in response to the "Silver package at the early-bird rate" (4,900 euros) advertised in the organizer\'s newsletter. The sponsorship lead replies that the Silver allotment is "unfortunately already taken" — all that remains is the Gold package at 9,800 euros, which they "would recommend anyway given the visibility goals". The following week\'s newsletter advertises the Silver package at the early-bird rate, unchanged.',
    },
    options: [
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bait-and-Switch: Das attraktive Silber-Paket holt die Interessentin in den Kontakt, ist bei Inanspruchnahme aber nicht verfügbar — an seine Stelle tritt sofort die doppelt so teure Alternative. Der Hebel: Wer sich einmal gemeldet, budgetiert und intern angekündigt hat, verhandelt eher über das Ersatzangebot, als von vorn zu suchen; dass die Werbung unverändert weiterläuft, zeigt, dass das Lockangebot seine Arbeit weiter tun soll. Legitim einsetzen: Wenn du selbst mit Aktionspaketen wirbst, nenne Kontingent und Zeitraum, stoppe die Werbung, sobald ausverkauft ist, und biete bei Nichtverfügbarkeit Warteliste oder gleichwertigen Ersatz zu den beworbenen Konditionen — Lockangebote ohne echte Verfügbarkeit sind in vielen Märkten auch lauterkeitsrechtlich angreifbar. Erkennen und kontern: Frag schriftlich nach, ob und wie lange das beworbene Angebot verfügbar war, und bewerte das Ersatzangebot wie ein neues Angebot — im Vergleich zu Alternativen, nicht im Vergleich zum entfallenen Lockpreis. Drip Pricing wirkt plausibel, weil auch dort am Ende mehr gezahlt wird — dort bleibt aber dasselbe Paket bestehen, und verpflichtende Gebühren kommen schrittweise hinzu; hier wird das Paket selbst ausgetauscht. Sneaking liegt nahe, weil Gray et al. (2018) Bait-and-Switch selbst dem Sneaking zuordnen — als eigenständige Antwort läge es aber nur vor, wenn Posten verdeckt in den Auftrag rutschten und erst nach der Entscheidung sichtbar würden; hier geschieht der Austausch offen, vor dem Abschluss. Der Köder-Effekt klingt nach demselben Köder, funktioniert aber anders: Dort lenkt eine dritte, unattraktive, aber verfügbare Option die Wahl zwischen realen Angeboten — hier ist das Lockangebot gar nicht erhältlich.',
      en: 'Bait-and-switch: the attractive Silver package pulls the prospect into contact but is unavailable the moment she acts on it — and the alternative at twice the price is substituted immediately. The lever: once someone has reached out, budgeted, and announced the plan internally, they are more likely to negotiate over the substitute than to start the search over; the ad continuing to run unchanged shows the bait is meant to keep doing its job. Used legitimately: when you advertise promotional packages yourself, state the allotment and the time window, stop the advertising once it sells out, and offer a waitlist or an equivalent substitute at the advertised terms when it is unavailable — bait offers without genuine availability are also legally contestable in many markets. To spot and counter it: ask in writing whether and for how long the advertised offer was available, and evaluate the substitute as a fresh offer — against alternatives, not against the vanished bait price. Drip pricing looks plausible because you also end up paying more there — but there the same package stays in place and mandatory fees are added step by step; here the package itself is swapped. Sneaking is a tempting pick because Gray et al. (2018) classify bait-and-switch as a subtype of sneaking — but as an answer in its own right it would only apply if items slipped into the order covertly and surfaced only after the decision; here the swap happens openly, before completion. The decoy effect sounds like the same bait but works differently: there, a third, unattractive but available option steers the choice between real offers — here the bait offer cannot be bought at all.',
    },
    points: 10,
    primaryTechniqueId: 'bait_and_switch',
    relatedTechniques: ['bait_and_switch', 'drip_pricing', 'sneaking', 'decoy_effect'],
  },
  {
    id: 'w4-bait_and_switch-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation. Für den Messeauftritt hat dein Eventmanager das im Ausstellerportal beworbene Standpaket „Kompakt" (6.500 Euro) budgetiert und intern freigegeben. Beim Buchen teilt ihm der Vertrieb des Veranstalters mit, „Kompakt" sei „für diese Messe ausgebucht" — verfügbar sei nur „Premium" für 11.000 Euro, und man solle „zeitnah zeichnen, die Fläche ist begehrt". Das Ausstellerportal bewirbt „Kompakt" weiterhin. Dein Eventmanager fragt, ob er „Premium" fest machen soll.',
      en: 'You head corporate communications. For the trade-fair presence, your event manager budgeted and got internal approval for the "Compact" booth package (6,500 euros) advertised in the exhibitor portal. When booking, the organizer\'s sales team tells him "Compact" is "sold out for this fair" — only "Premium" at 11,000 euros is available, and he should "sign soon, the floor space is in demand". The exhibitor portal still advertises "Compact". Your event manager asks whether he should lock in "Premium".',
    },
    options: [
      {
        de: 'Ich lasse mir schriftlich bestätigen, ob und wie lange „Kompakt" buchbar war, und weise darauf hin, dass das Paket weiter beworben wird. Über „Premium" entscheiden wir wie über ein neues Angebot: im Vergleich mit anderen Messen und Formaten für die 11.000 Euro — nicht im Vergleich zum entfallenen Kompakt-Preis.',
        en: 'I ask for written confirmation of whether and for how long "Compact" was bookable, and point out that the package is still being advertised. We treat "Premium" as a fresh offer: compared against other fairs and formats for the 11,000 euros — not against the vanished Compact price.',
      },
      {
        de: 'Ich lasse ihn „Premium" buchen: Der Messetermin steht, die Fläche ist offenbar knapp, und die Differenz lässt sich über eine Umschichtung im Eventbudget auffangen.',
        en: 'I have him book "Premium": the fair date is fixed, floor space is evidently tight, and the difference can be absorbed by reallocating the event budget.',
      },
      {
        de: 'Ich lasse ihn einen Nachlass auf „Premium" verhandeln — wenn wir zehn Prozent herausholen, ist der Abstand zum budgetierten Paket vertretbar.',
        en: 'I have him negotiate a discount on "Premium" — if we get ten percent off, the gap to the budgeted package is acceptable.',
      },
      {
        de: 'Ich sage den Messeauftritt ab und lasse den Veranstalter für künftige Planungen sperren — wer ein ausgebuchtes Paket weiter bewirbt, kommt als Partner grundsätzlich nicht mehr infrage.',
        en: 'I cancel the fair presence and have the organizer blocked for future planning — any partner that keeps advertising a sold-out package is off the table for us on principle.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Veranstalter arbeitet mit Bait-and-Switch: Das beworbene Kompakt-Paket hat Budgetierung und interne Freigabe gewonnen, beim Zugriff wird es gegen die deutlich teurere Alternative getauscht — und der Zeitdruck („zeitnah zeichnen") soll den Abschluss tragen, bevor jemand vergleicht. Die beste Option entzieht dem Muster beide Hebel: Die schriftliche Nachfrage samt Hinweis auf die weiterlaufende Werbung dokumentiert den Köder und erschwert die Ausrede, und „Premium" wird bewertet, als stünde die Wahl neu an — gegen echte Alternativen statt gegen den entfallenen Lockpreis. Legitim einsetzen: Für eigene Angebote heißt das, ausgebuchte Pakete sofort aus der Werbung zu nehmen und Interessenten Warteliste oder gleichwertigen Ersatz zu den beworbenen Konditionen anzubieten — das schützt die Beziehung, die du beim nächsten Anlass wieder brauchst. Erkennen und kontern: Sobald ein beworbenes Angebot „ausgebucht" ist und sofort ein teureres an seine Stelle tritt, mach die Verfügbarkeitsfrage schriftlich und den Anbietervergleich neu auf — die bereits investierte Planung ist kein Grund zu bleiben. Sofort buchen wirkt plausibel, weil Termin und Knappheit real klingen — aber „die Fläche ist begehrt" ist die Behauptung des Verkäufers, und die Budget-Umschichtung belohnt genau den Austausch, der das Muster trägt. Der Nachlass wirkt professionell, verhandelt aber im getauschten Rahmen: Der Bezugspunkt bleibt der Lockpreis, und „Premium" minus zehn Prozent kann im offenen Vergleich trotzdem das schlechteste Angebot sein. Die Absage samt Sperre überkorrigiert: Sie kann deine Kommunikationsziele härter treffen als den Veranstalter — Dokumentation, Beschwerde und ein neuer Vergleich schützen dich genauso, ohne die Messe zu opfern, falls sie den Vergleich doch gewinnt.',
      en: 'The organizer is running a bait-and-switch: the advertised Compact package secured the budget and internal sign-off, and at the moment of access it is swapped for the far pricier alternative — with time pressure ("sign soon") meant to carry the deal before anyone compares. The best option removes both levers: the written query plus the note about the still-running ad documents the bait and forecloses excuses, and "Premium" is evaluated as if the choice were fresh — against real alternatives instead of the vanished bait price. Used legitimately: for your own offerings, this means pulling sold-out packages from advertising immediately and offering prospects a waitlist or an equivalent substitute at the advertised terms — that protects the relationship you will need again next time. To spot and counter it: whenever an advertised offer is "sold out" and a pricier one is substituted on the spot, put the availability question in writing and reopen the vendor comparison — the planning already invested is no reason to stay. Booking immediately looks plausible because the date and the scarcity sound real — but "the floor space is in demand" is the seller\'s claim, and reallocating the budget rewards exactly the swap that drives the pattern. The discount route feels professional but negotiates inside the swapped frame: the reference point remains the bait price, and "Premium" minus ten percent can still be the worst offer in an open comparison. Cancelling plus a blanket block overcorrects: it may hit your communications goals harder than it hits the organizer — documentation, a complaint, and a fresh comparison protect you just as well without sacrificing the fair if it wins that comparison after all.',
    },
    points: 10,
    primaryTechniqueId: 'bait_and_switch',
    relatedTechniques: ['bait_and_switch', 'scarcity', 'drip_pricing'],
  },
  {
    id: 'w4-bait_and_switch-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster schlägt der Kollege hier vor?',
      en: 'Which pattern is the colleague proposing here?',
    },
    scenario: {
      de: 'Jour fixe zur Vermarktung der hauseigenen Seminarreihe: Der Vertriebskollege schlägt der Kommunikationsleiterin vor, ein „Einsteiger-Coaching für 490 Euro" zu bewerben, das faktisch nie stattfinden soll — „wer anfragt, hört, das sei ausgebucht, und bekommt dann das Jahresprogramm für 4.200 Euro angeboten. Hauptsache, die Leute melden sich erst mal."',
      en: 'Weekly meeting on marketing the in-house seminar series: the sales colleague proposes to the head of communications that they advertise a "starter coaching for 490 euros" that is never actually meant to run — "whoever inquires hears it is fully booked and then gets offered the annual program for 4,200 euros. The main thing is that people get in touch in the first place."',
    },
    options: [
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bait-and-Switch: Das fiktive Einstiegsangebot erzeugt Anfragen und eine erste Festlegung — wer sich gemeldet hat, ist im Gespräch und bekommt dann das eigentliche, um ein Vielfaches teurere Angebot; der Austausch ist von Anfang an geplant, das Lockangebot war nie verfügbar. Legitim einsetzen: Einstiegsangebote sind ein völlig professionelles Instrument, solange sie real buchbar sind — übersteigt die Nachfrage die Kapazität, gehören Interessenten auf eine Warteliste zu den beworbenen Konditionen; als Kommunikationsleiterin stoppst du den Vorschlag auch deshalb, weil Lockangebote ohne echte Verfügbarkeit in vielen Märkten lauterkeitsrechtlich verboten sind und aufgedeckt die Marke teurer kommen als jedes Jahresprogramm einbringt. Erkennen und kontern: Wenn ein beworbenes Angebot bei jeder Anfrage „ausgebucht" ist und stets dasselbe teurere an seine Stelle tritt, frag nach Kontingent und Aktionszeitraum — kommt keine belastbare Antwort, bewerte nur das tatsächlich verfügbare Angebot und lass den Lockpreis aus der Rechnung. Verknappung wirkt plausibel, weil „ausgebucht" nach Knappheit klingt — Verknappung beschleunigt aber den Kauf desselben Angebots durch begrenzte Verfügbarkeit; hier dient die Nichtverfügbarkeit dem Schwenk auf ein anderes Angebot. Drip Pricing liegt nahe, weil der Endpreis auch dort über dem beworbenen liegt — dort wächst aber der Preis desselben Produkts durch schrittweise nachgereichte Pflichtgebühren; hier wird das Produkt selbst ersetzt.',
      en: 'Bait-and-switch: the fictitious entry offer generates inquiries and a first commitment — whoever has reached out is in the conversation and then gets the actual offer at many times the price; the swap is planned from the start, and the bait was never available. Used legitimately: entry offers are a perfectly professional instrument as long as they are genuinely bookable — if demand exceeds capacity, prospects belong on a waitlist at the advertised terms; as head of communications you also stop this proposal because bait offers without genuine availability are legally prohibited in many markets, and once exposed they cost the brand more than any annual program brings in. To spot and counter it: when an advertised offer is "fully booked" at every inquiry and the same pricier one is always substituted, ask for the allotment and the promotion window — if no solid answer comes, evaluate only the offer that actually exists and leave the bait price out of the calculation. Scarcity looks plausible because "fully booked" sounds like short supply — but scarcity accelerates the purchase of the same offer through limited availability; here the unavailability serves the pivot to a different offer. Drip pricing seems close because the final price also ends up above the advertised one — but there the price of the same product grows as mandatory fees are added step by step; here the product itself is replaced.',
    },
    points: 10,
    primaryTechniqueId: 'bait_and_switch',
    relatedTechniques: ['bait_and_switch', 'scarcity', 'drip_pricing'],
  },
];
