// Pilotwelle R3: 3 Übungen für decoy_effect (Köder-Effekt).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotDecoyEffect: Exercise[] = [
  {
    id: 'p3-decoy_effect-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt im Aufbau des Angebots?',
      en: 'Which technique is built into the structure of the offer?',
    },
    scenario: {
      de: 'Du prüfst für deine Geschäftsführerin das Angebot eines Medienbeobachtungs-Dienstleisters. Drei Tarife stehen im Vergleich: "Basic" (490 € pro Monat, 200 Quellen), "Pro" (890 € pro Monat, 900 Quellen plus Wochenreport) — und "Advanced" (920 € pro Monat, 600 Quellen, ohne Report). Dir fällt auf: Advanced würde niemand wählen. Aber seit es in der Tabelle steht, wirkt Pro wie die klar beste Wahl.',
      en: 'You are vetting a media monitoring vendor\'s offer for your managing director. Three plans sit side by side: "Basic" (€490 per month, 200 sources), "Pro" (€890 per month, 900 sources plus a weekly report) — and "Advanced" (€920 per month, 600 sources, no report). You notice that nobody would ever pick Advanced. Yet since it appeared in the table, Pro looks like a clear win.',
    },
    options: [
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Falsches Dilemma', en: 'False dichotomy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Köder-Effekt (Decoy): "Advanced" ist asymmetrisch dominiert — weniger Quellen, kein Report und dabei sogar teurer als Pro, aber nicht in allen Punkten schlechter als Basic. Der Vergleich mit dem Köder ist mühelos zu entscheiden und ersetzt die eigentlich nötige Prüfung, ob Pro den eigenen Bedarf zum Preis wert ist. Legitim einsetzen heißt: Paketstufen so bauen, dass jede Stufe einen echten Anwendungsfall hat und die Preislogik der Empfehlung standhält — nicht eine Attrappe einfügen, die nur den Vergleich verzerrt. Erkennen und kontern: jede Option gegen die eigenen Anforderungen prüfen statt gegen die Nachbaroption — und testen, ob die "klare" Wahl auch ohne die dominierte Option noch überzeugt. Der Ankereffekt wirkt plausibel, weil hier Preise verglichen werden — er würde aber über eine zuerst genannte Referenzzahl wirken, nicht über eine eigens platzierte unterlegene Option. Nudging steuert über Voreinstellungen, Reihenfolge oder Darstellung, ohne das Optionsset inhaltlich zu verändern — hier wird gezielt eine unattraktive Option hinzugefügt, die den Vergleich selbst kippt. Ein Falsches Dilemma würde die Auswahl künstlich auf zwei Möglichkeiten verengen — hier passiert das Gegenteil: Eine Option kommt hinzu.',
      en: 'Decoy effect: "Advanced" is asymmetrically dominated — fewer sources, no report, and actually more expensive than Pro, yet not worse than Basic on every count. The comparison with the decoy is effortless to decide and replaces the check that actually matters: whether Pro is worth the price for your needs. Used legitimately, this means building tiers so that each one has a genuine use case and the pricing logic survives scrutiny — not inserting a dummy that only skews the comparison. To recognise and counter it: evaluate every option against your own requirements rather than against the neighbouring option — and test whether the "obvious" choice still convinces once the dominated option is removed. Anchoring looks plausible because prices are being compared — but it would work through a first-mentioned reference number, not through a purpose-built inferior option. Nudging steers via defaults, order, or presentation without materially changing the option set — here an unattractive option is deliberately added, tipping the comparison itself. A false dichotomy would artificially narrow the choice to two possibilities — here the opposite happens: an option is added.',
    },
    points: 10,
    primaryTechniqueId: 'decoy_effect',
    relatedTechniques: ['decoy_effect', 'anchoring', 'nudging', 'false_dichotomy'],
  },
  {
    id: 'p3-decoy_effect-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Branchenverbands und verantwortest den Sponsoring-Vertrieb für den Jahreskongress. Ziel ist der Verkauf des Premium-Pakets (15.000 €). Im Jour fixe schlägt die Vermarktungsagentur vor, ein drittes Paket ins Angebot zu nehmen: 15.500 €, aber ohne Bühnenslot und mit kleinerer Standfläche als Premium. "Das bucht niemand — aber daneben greifen alle zu Premium."',
      en: 'You head communications at an industry association and own sponsorship sales for the annual congress. The goal is to sell the premium package (€15,000). In the weekly agency call, the sales agency proposes adding a third package to the lineup: €15,500, but without a stage slot and with a smaller booth than premium. "Nobody will book it — but next to it, everyone goes for premium."',
    },
    options: [
      {
        de: 'Ich übernehme den Vorschlag — getäuscht wird niemand, alle Pakete sind wahrheitsgemäß beschrieben, und die Entscheidung bleibt frei.',
        en: 'I adopt the proposal — nobody is being deceived, every package is described truthfully, and the decision remains free.',
      },
      {
        de: 'Ich schärfe stattdessen die echten Unterschiede: Jedes Paket bekommt einen klaren Anwendungsfall und eine nachvollziehbare Preislogik — und ich prüfe im Gespräch mit Stammsponsoren, ob Premium aus eigener Stärke überzeugt.',
        en: 'Instead, I sharpen the genuine differences: each package gets a clear use case and a pricing logic that holds up — and I check with long-standing sponsors whether premium convinces on its own merits.',
      },
      {
        de: 'Ich setze lieber auf Verknappung und lasse kommunizieren, es seien "nur noch zwei Premium-Pakete verfügbar" — Zeitdruck wirkt zuverlässiger als ein Vergleichstrick.',
        en: 'I go for scarcity instead and have us communicate that "only two premium packages are left" — time pressure works more reliably than a comparison trick.',
      },
      {
        de: 'Ich streiche das Angebot auf ein einziges Paket zusammen — wer mehrere Optionen anbietet, lenkt damit zwangsläufig Entscheidungen und handelt unlauter.',
        en: 'I cut the lineup down to a single package — offering multiple options inevitably steers decisions and is therefore unfair.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Vorschlag ist ein Köder-Effekt (Decoy): Ein Paket, das weniger bietet als Premium und dabei sogar mehr kostet, ist asymmetrisch dominiert — und macht Premium zur scheinbar rational zwingenden Wahl, weil der Vergleich mit der Attrappe die Prüfung des eigentlichen Preis-Leistungs-Verhältnisses ersetzt. Bei professionellen Einkäufern ist das doppelt riskant: Sponsoren kalkulieren Pakete nach, und wer die Attrappe erkennt, misstraut künftig der gesamten Preisstruktur. Legitim einsetzen heißt: Optionsarchitektur bewusst gestalten — gestufte Pakete mit echten Anwendungsfällen sind Handwerk, die empfohlene Stufe darf prominent stehen. Erkennen und kontern als Einkäufer: jede Option gegen den eigenen Bedarf prüfen und fragen, ob die Wahl auch ohne die dominierte Option gleich ausfiele. Option A wirkt plausibel, weil tatsächlich keine Beschreibung falsch ist — die Steuerung liegt aber nicht in den Fakten, sondern im konstruierten Vergleich, der die freie Entscheidung gezielt verzerrt. Option C tauscht nur den Hebel: Verknappung — und mit einer erfundenen Restmenge käme eine schlicht unwahre Aussage hinzu. Option D überkorrigiert: Mehrere Optionen anzubieten ist legitim und kundenfreundlich; das Problem ist allein die bewusst dominierte Attrappe.',
      en: 'The proposal is a decoy effect: a package that offers less than premium yet costs even more is asymmetrically dominated — and it makes premium look like the rationally inevitable choice, because the comparison with the dummy replaces scrutiny of the actual price-performance ratio. With professional buyers this is doubly risky: sponsors recalculate packages, and anyone who spots the dummy will distrust your entire pricing structure going forward. Used legitimately, this means designing choice architecture deliberately — tiered packages with genuine use cases are craft, and the recommended tier may stand out. To recognise and counter it as a buyer: check every option against your own needs and ask whether the choice would come out the same without the dominated option. Option A sounds plausible because no description is actually false — but the steering lies not in the facts but in the constructed comparison, which deliberately distorts the free decision. Option C merely swaps the lever: scarcity — and with an invented remaining quantity it would add a plainly untrue claim. Option D overcorrects: offering multiple options is legitimate and customer-friendly; the problem is solely the deliberately dominated dummy.',
    },
    points: 10,
    primaryTechniqueId: 'decoy_effect',
    relatedTechniques: ['decoy_effect', 'scarcity'],
  },
  {
    id: 'p3-decoy_effect-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik macht das große Paket so attraktiv?',
      en: 'Which technique makes the big package look so attractive?',
    },
    scenario: {
      de: 'Du buchst mit deinem Volontär ein Medientraining auf der Preisseite eines Webinar-Anbieters. Drei Varianten: "Aufzeichnung" für 99 €, "Live-Teilnahme" für 149 € — und "Live-Teilnahme plus Aufzeichnung" für ebenfalls 149 €. Dein Volontär tippt sofort auf die dritte: "Beides zum Preis der reinen Live-Teilnahme? Da braucht man doch gar nicht nachzudenken."',
      en: 'You and your trainee are booking media training on a webinar provider\'s pricing page. Three variants: "Recording" for €99, "Live attendance" for €149 — and "Live attendance plus recording", also for €149. Your trainee immediately points at the third: "Both for the price of live alone? That\'s a no-brainer."',
    },
    options: [
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Verknappung', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Köder-Effekt (Decoy): Die reine Live-Teilnahme für 149 € ist der Köder — sie bietet weniger als das Komplettpaket und kostet exakt dasselbe, ist also dominiert. Der Vergleich mit ihr macht das Komplettpaket zum "Selbstläufer" und verdrängt die eigentliche Frage: Braucht ihr Live-Teilnahme und Aufzeichnung überhaupt, oder reicht die Aufzeichnung für 99 €? Legitim einsetzen heißt: Paketpreise so gestalten, dass jede Stufe für eine echte Zielgruppe gedacht ist — nicht als Attrappe für den Vergleich. Erkennen und kontern: die dominierte Option gedanklich streichen und die Wahl noch einmal nur am eigenen Bedarf ausrichten. Der Ankereffekt liegt nahe, weil Preise nebeneinanderstehen — er würde aber über eine zuerst gesetzte Referenzzahl wirken, die das Preisempfinden verschiebt; hier zieht die dominierte Mitteloption die Wahl um. Verknappung würde über begrenzte Plätze oder Fristen Druck aufbauen — davon ist auf der Preisseite nichts zu sehen.',
      en: 'Decoy effect: live attendance alone at €149 is the decoy — it offers less than the full package at exactly the same price, which makes it a dominated option. The comparison with it turns the full package into a "no-brainer" and crowds out the question that actually matters: do you need live attendance plus recording at all, or would the €99 recording do? Used legitimately, this means designing package prices so that every tier serves a real audience — not as a dummy for the comparison. To recognise and counter it: mentally strike the dominated option and re-run the choice against your actual needs alone. Anchoring seems close because the prices sit side by side — but it would work through a first-set reference number that shifts price perception; here the dominated middle option pulls the choice. Scarcity would build pressure through limited seats or deadlines — nothing of the sort appears on this pricing page.',
    },
    points: 10,
    primaryTechniqueId: 'decoy_effect',
    relatedTechniques: ['decoy_effect', 'anchoring', 'scarcity'],
  },
];
