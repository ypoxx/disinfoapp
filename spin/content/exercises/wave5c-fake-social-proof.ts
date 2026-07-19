// Welle 5c: 3 Übungen für fake_social_proof.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cFakeSocialProof: Exercise[] = [
  {
    id: 'wave5c-fake_social_proof-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Sprint-Review eines Online-Shops: Die Conversion-Managerin präsentiert ein neues Checkout-Overlay, das jeder Kundin „Gerade sehen sich 17 Personen diesen Artikel an" anzeigt. Auf Nachfrage räumt das Entwicklerteam ein: Die Zahl wird bei jedem Seitenaufruf zufällig zwischen 8 und 25 erzeugt, echte Sitzungsdaten fließen nicht ein.',
      en: 'An online shop\'s sprint review: the conversion manager presents a new checkout overlay that tells every customer "17 people are viewing this item right now." Pressed on it, the dev team concedes that the number is generated at random between 8 and 25 on each page load; no real session data feeds into it.',
    },
    options: [
      { de: 'Falscher sozialer Beweis (Fake Social Proof)', en: 'Fake social proof' },
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / sock puppets' },
      { de: 'Fabrizierte Dringlichkeit (Fake Urgency / Countdown)', en: 'Fake urgency / countdown' },
      { de: 'Echter sozialer Beweis (Social Proof)', en: 'Genuine social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fake Social Proof: Das Overlay fabriziert ein Popularitätssignal — eine Betrachterzahl ohne reale Grundlage —, das direkt im Interface an der Kaufentscheidung sitzt. Der Hebel ist sozialer Beweis: „So viele andere interessieren sich gerade dafür, also greif zu." Legitim wird dasselbe Element, sobald die Zahl echte, aktuelle Sitzungsdaten abbildet statt gewürfelt zu werden — reales Interesse darfst du zeigen, erfundenes nicht. Erkennen und kontern: Lade die Seite mehrfach neu — springt die Zahl ohne Muster, ist sie erfunden; verlange die Datenquelle, bevor du solche Widgets freigibst. Astroturfing wäre es, wenn mehrere verdeckt gesteuerte Schein-Personen als unabhängige Kundinnen aufträten — hier gibt es keine Personas, nur eine fabrizierte Zahl. Fabrizierte Dringlichkeit setzt auf erfundenen Zeitdruck (ablaufende Countdowns), nicht auf vorgetäuschte Beliebtheit. Echter sozialer Beweis läge nur vor, wenn die angezeigte Aktivität real gemessen wäre — genau das ist hier nicht der Fall.',
      en: 'Fake social proof: the overlay fabricates a popularity signal — a viewer count with no real basis — sitting right in the interface at the point of purchase. The lever is social proof: "so many others are interested right now, so grab it." The same element becomes legitimate once the number reflects real, live session data instead of being rolled at random — you may show genuine interest, not invented interest. To spot and counter it, reload the page a few times: if the number jumps with no pattern, it is fabricated; demand the data source before you sign off on such widgets. Astroturfing would be several covertly steered fake personas posing as independent customers — here there are no personas, just a fabricated number. Fake urgency relies on invented time pressure (expiring countdowns), not on simulated popularity. Genuine social proof would require the displayed activity to be actually measured — which is precisely not the case here.',
    },
    points: 10,
    primaryTechniqueId: 'fake_social_proof',
    relatedTechniques: ['fake_social_proof', 'social_proof', 'astroturfing_sockpuppets', 'fake_urgency_countdown'],
  },
  {
    id: 'wave5c-fake_social_proof-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Brand-Lead eines Direct-to-Consumer-Startups sitzt du im Sprint-Planning. Der Performance-Marketer schlägt für die Landingpage ein Live-Widget vor: alle paar Sekunden eine Meldung „Lena aus Hamburg hat gerade gekauft", mit Namen und Städten aus einer Zufallsliste — echte Bestellungen gibt es dafür nicht. Er verspricht sich davon spürbar mehr Conversions.',
      en: 'As brand lead of a direct-to-consumer startup, you are in sprint planning. The performance marketer proposes a live widget for the landing page: every few seconds a message reading "Lena from Hamburg just bought this," with names and cities drawn from a random list — there are no actual orders behind them. He expects a noticeable lift in conversions.',
    },
    options: [
      {
        de: 'Ich lehne die erfundenen Meldungen ab und schlage echte Social-Proof-Signale vor: nur reale, aktuelle Käufe (opt-in, anonymisiert) oder verifizierte Bewertungen und Kundenzahlen anzeigen — und weise auf das Abmahn- und Reputationsrisiko erfundener Kaufhinweise hin.',
        en: 'I reject the invented messages and propose genuine social-proof signals instead: show only real, recent purchases (opt-in, anonymised) or verified reviews and customer counts — and I flag the legal and reputational risk of fabricated purchase notices.',
      },
      {
        de: 'Ich stimme zu, kennzeichne die Meldungen aber ganz klein mit „beispielhaft" im Footer — dann ist es ja transparent.',
        en: 'I agree, but I label the messages "illustrative" in tiny print in the footer — that makes it transparent.',
      },
      {
        de: 'Ich lasse die Namen weg und zeige nur „Jemand hat gerade gekauft" — ohne Namen ist es keine Erfindung mehr.',
        en: 'I drop the names and just show "someone just bought this" — without names it is no longer fabrication.',
      },
      {
        de: 'Ich baue das Widget mit echten Namen, setze die Kauf-Frequenz aber höher als real an, damit der Shop lebendiger wirkt.',
        en: 'I build the widget with real names but set the purchase frequency higher than reality so the shop feels more alive.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die vorgeschlagenen Live-Meldungen sind Fake Social Proof: erfundene Kaufhinweise, die Beliebtheit im Interface vortäuschen und an der Entscheidungsstelle zum schnellen Handeln drängen. Die beste Option ersetzt die Erfindung durch ihr legitimes Pendant — nur real erfasste, opt-in freigegebene Käufe oder verifizierte Bewertungen — und benennt das Risiko: Erfundene Kaufhinweise gelten in mehreren Ländern als irreführende Geschäftspraxis und sind abmahnfähig; fliegt es auf, trifft der Vertrauensverlust die Marke unmittelbar. Ein kleiner „beispielhaft"-Hinweis im Footer wirkt plausibel, weil er nach Transparenz klingt — versteckte Kennzeichnung entlastet aber nicht, die angezeigten Käufe bleiben erfunden. Die Namen wegzulassen ändert nichts daran, dass die Kaufereignisse selbst frei erfunden sind. Und die Frequenz „lebendiger" als real anzusetzen, ist genau die Fälschung, um die es geht. Sobald die angezeigte Aktivität nicht real gemessen ist, ist die Grenze überschritten.',
      en: 'The proposed live messages are fake social proof: invented purchase notices that simulate popularity in the interface and push for quick action at the point of decision. The best option replaces the invention with its legitimate counterpart — only genuinely recorded, opt-in-approved purchases or verified reviews — and names the risk: fabricated purchase notices count as a misleading commercial practice in several jurisdictions and are actionable; if it surfaces, the loss of trust hits the brand directly. A tiny "illustrative" note in the footer seems plausible because it sounds like transparency — but concealed labelling is no relief, and the displayed purchases stay fabricated. Dropping the names changes nothing about the purchase events themselves being invented. And setting the frequency "livelier" than reality is exactly the falsification at issue. The moment the displayed activity is not actually measured, the line is crossed.',
    },
    points: 10,
    primaryTechniqueId: 'fake_social_proof',
    relatedTechniques: ['fake_social_proof', 'social_proof'],
  },
  {
    id: 'wave5c-fake_social_proof-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Dieses Muster heißt ___.',
      en: 'Complete the sentence: this pattern is called ___.',
    },
    scenario: {
      de: 'App-Store-Auftritt einer erst drei Wochen alten Meditations-App: Die Produktseite zeigt prominent „4,9 von 5 — empfohlen von über 12.000 Nutzern". Tatsächlich liegen bislang nur rund 40 echte Bewertungen vor; Durchschnitt und Nutzerzahl sind frei gesetzt und im Interface platziert.',
      en: 'The app-store listing of a meditation app that is only three weeks old: the product page prominently shows "4.9 out of 5 — recommended by over 12,000 users." In reality there are only about 40 genuine ratings so far; the average and the user count are made up and placed in the interface.',
    },
    options: [
      {
        de: 'Falscher sozialer Beweis (Fake Social Proof) — fabrizierte Popularitätssignale ohne reale Grundlage, im Interface platziert',
        en: 'fake social proof — fabricated popularity signals with no real basis, placed in the interface',
      },
      {
        de: 'Astroturfing / Sockpuppets — mehrere verdeckt gesteuerte Schein-Personen schreiben scheinbar unabhängige Bewertungen',
        en: 'astroturfing / sock puppets — several covertly steered fake personas write seemingly independent reviews',
      },
      {
        de: 'Echter sozialer Beweis (Social Proof) — reale Belege, dass viele andere das Produkt nutzen und schätzen',
        en: 'genuine social proof — real evidence that many others use and value the product',
      },
      {
        de: 'Getarnte Werbung (Schleichwerbung) — bezahlte Botschaft im Gewand redaktioneller Inhalte',
        en: 'disguised advertising — a paid message dressed up as editorial content',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fake Social Proof: Durchschnitt und Nutzerzahl sind fabrizierte Popularitätssignale, prominent im Interface platziert, obwohl kaum echte Bewertungen vorliegen. Der Hebel ist sozialer Beweis über scheinbare Masse und Qualität. Erkennen und kontern: Vergleiche die behauptete Nutzerzahl mit der sichtbaren Zahl echter Bewertungen und dem Alter des Angebots — klaffen sie auseinander, ist die Angabe gesetzt; verlange die Rohdaten. Legitim ist dieselbe Anzeige nur mit real erhobenen, nachprüfbaren Werten. Astroturfing läge vor, wenn die Bewertungen von verdeckt gesteuerten Schein-Personen geschrieben wären — hier sind es keine erfundenen Personen, sondern erfundene Aggregatzahlen. Echter sozialer Beweis bräuchte reale Belege statt frei gesetzter Werte. Getarnte Werbung meint eine als redaktionell verkleidete bezahlte Botschaft — hier geht es nicht um ein getarntes Format, sondern um fabrizierte Popularität.',
      en: 'Fake social proof: the average and the user count are fabricated popularity signals placed prominently in the interface, even though almost no genuine ratings exist. The lever is social proof via apparent mass and quality. To spot and counter it, compare the claimed user count with the visible number of real ratings and the age of the listing — if they diverge, the figure is made up; demand the raw data. The same display is legitimate only with genuinely collected, verifiable values. Astroturfing would apply if the reviews were written by covertly steered fake personas — here there are no invented people, only invented aggregate numbers. Genuine social proof would require real evidence rather than made-up values. Disguised advertising means a paid message cloaked as editorial content — this is not a cloaked format but fabricated popularity.',
    },
    points: 10,
    primaryTechniqueId: 'fake_social_proof',
    relatedTechniques: ['fake_social_proof', 'astroturfing_sockpuppets', 'social_proof', 'disguised_ads'],
  },
];
