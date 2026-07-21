// Welle R4: 3 Übungen für price_comparison_prevention (Comparison Prevention).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4PriceComparisonPrevention: Exercise[] = [
  {
    id: 'w4-price_comparison_prevention-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster liegt in der Ausschreibung vor?',
      en: 'Which pattern is at work in this tender?',
    },
    scenario: {
      de: 'Ausschreibung der Übersetzungsdienstleistungen: Der Leiter Corporate Communications holt für Geschäftsbericht und laufende Pressearbeit drei Angebote ein. Anbieter A rechnet pro Normzeile, Anbieter B pro Wort mit „Technologie-Rabattstaffel", Anbieter C bietet ausschließlich ein Jahres-„Sprachpaket" mit enthaltenem Kontingent. Alle Preise stehen vollständig in den Angeboten. Auf die Bitte des Einkaufs, zusätzlich den Preis für ein definiertes Referenzdokument zu nennen, antwortet der Vertrieb von C: „Unser Paketmodell sieht Einzelpreise nicht vor."',
      en: 'Tender for translation services: the head of corporate communications collects three quotes for the annual report and ongoing press work. Vendor A charges per standard line, vendor B per word with a "technology discount tier", vendor C offers only an annual "language package" with an included allowance. Every price is fully stated in the quotes. When procurement asks each vendor to additionally price a defined reference document, C\'s sales team replies: "Our package model does not provide for individual prices."',
    },
    options: [
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Comparison Prevention (Vergleichsverhinderung)', en: 'Comparison prevention' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Comparison Prevention: Jeder Anbieter rechnet in einer eigenen Einheit, und die Bitte um eine gemeinsame Referenzgröße wird abgelehnt — ohne gemeinsame Einheit kann kein Angebot als das bessere ausgewiesen werden, und die Entscheidung kann auf weiche Kriterien wie Markenauftritt, Bequemlichkeit oder Bestandsbeziehung rutschen, wo der teurere Anbieter womöglich besser dasteht als im Zahlenvergleich. Legitim einsetzen: Eigene Pakete dürfen sich im Zuschnitt unterscheiden — biete auf Nachfrage trotzdem eine Referenzgröße an, etwa den Preis für ein definiertes Musterdokument; wer Vergleichbarkeit aushält, signalisiert Preisvertrauen und verkürzt die Vergabe. Erkennen und kontern: Definiere selbst das Referenzszenario und lass alle Anbieter exakt dasselbe bepreisen — eine Weigerung ist kein Hindernis, sondern ein Bewertungsergebnis, das in die Entscheidung eingeht. Sneaking wirkt plausibel, weil die Kostenstruktur unübersichtlich erscheint — beim Sneaking blieben Posten aber bis nach der Entscheidung verdeckt oder würden untergeschoben; hier ist jeder Preis ausgewiesen, nur eben unvergleichbar. Drip Pricing läge vor, wenn verpflichtende Zusatzkosten erst schrittweise im Bestellprozess auftauchten — hier ändern sich die Preise nicht, sie stehen von Anfang an vollständig fest. Der Köder-Effekt (Decoy) liegt nahe, weil drei unterschiedlich geschnittene Angebote nach einer gesteuerten Auswahl aussehen — er setzt aber voraus, dass ein Anbieter in sein eigenes Sortiment eine gezielt unterlegene Option einbaut, die eine andere aufwerten soll; hier stammen die drei Angebote von drei Wettbewerbern, und keines ist als dominiertes Lockangebot konstruiert.',
      en: 'Comparison prevention: each vendor charges in its own unit, and the request for a shared reference figure is refused — without a common unit, no offer can be shown to be the better one, and the decision can slide onto soft criteria such as brand presence, convenience, or the incumbent relationship, where the pricier vendor may look better than it would in a numerical comparison. Used legitimately: your own packages may well be structured differently — but offer a reference figure on request, say the price for a defined sample document; a vendor that can withstand comparison signals pricing confidence and shortens the award process. To spot and counter it: define the reference scenario yourself and have every vendor price exactly the same thing — a refusal is not an obstacle but an evaluation result that feeds into the decision. Sneaking looks plausible because the cost structure feels opaque — but sneaking keeps items hidden until after the decision or slips them in; here every price is disclosed, just not comparable. Drip pricing would apply if mandatory extra costs surfaced step by step during ordering — here the prices never change, they are fully stated from the start. The decoy effect seems close because three differently structured offers look like an engineered choice — but a decoy requires one vendor to plant a deliberately inferior option in its own line-up to make another look good; here the three quotes come from three competitors, and none is built as a dominated bait offer.',
    },
    points: 10,
    primaryTechniqueId: 'price_comparison_prevention',
    relatedTechniques: ['price_comparison_prevention', 'sneaking', 'drip_pricing', 'decoy_effect'],
  },
  {
    id: 'w4-price_comparison_prevention-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Pressestelle und sollst bis Freitag ein Medientraining für den Vorstand beauftragen. Drei Anbieter liegen auf dem Tisch: einer rechnet pro Trainingstag inklusive Trainer und Studio, einer pro Teilnehmer mit einzeln buchbaren Modulen, der dritte bietet nur ein pauschales „Executive-Programm" ohne ausgewiesene Posten. Deine Referentin schreibt dir in Teams: „Vergleichen lässt sich das eh nicht — nehmen wir doch einfach das umfangreichste Paket."',
      en: 'You head the press office and need to commission media training for the executive board by Friday. Three offers are on the table: one charges per training day including trainer and studio, one per participant with individually bookable modules, the third offers only a flat "executive programme" with no itemised breakdown. Your associate messages you on Teams: "There\'s no way to compare these anyway — let\'s just take the most comprehensive package."',
    },
    options: [
      {
        de: 'Ich definiere ein Referenzszenario — zwei Trainingstage, vier Vorstandsmitglieder, ein Studiotag — und bitte alle drei Anbieter, exakt dieses Szenario zu bepreisen und die Posten auszuweisen. Sagt ein Anbieter ab, halte ich das in der Vergabeunterlage fest.',
        en: 'I define a reference scenario — two training days, four board members, one studio day — and ask all three vendors to price exactly that scenario with every line item broken out. If a vendor declines, I note that in the procurement file.',
      },
      {
        de: 'Ich nehme das Angebot mit dem niedrigsten Gesamtpreis — was unterm Strich steht, ist die einzige Zahl, die alle drei tatsächlich nennen, und damit die einzige belastbare Vergleichsgröße.',
        en: 'I take the offer with the lowest total price — the bottom line is the only number all three actually state, which makes it the only solid basis for comparison.',
      },
      {
        de: 'Ich folge meiner Referentin und nehme das umfangreichste Programm — wenn Angebote nicht vergleichbar sind, ist der Leistungsumfang das verlässlichere Kriterium als der Preis.',
        en: 'I follow my associate and take the most comprehensive programme — when offers cannot be compared, scope is a more reliable criterion than price.',
      },
      {
        de: 'Ich schließe den Pauschalanbieter aus und lasse künftig grundsätzlich nur noch nach Tagessätzen anbieten — Paketpreise sind in der Beschaffung immer ein Warnsignal.',
        en: 'I exclude the flat-rate vendor and from now on only accept quotes based on day rates — package prices are always a red flag in procurement.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Angebotsstruktur arbeitet als Comparison Prevention: Drei unvergleichbare Preislogiken lassen keinen Zahlenvergleich zu, und unter Termindruck kann die Entscheidung auf Ersatzkriterien kippen — genau das spricht aus dem Vorschlag „nehmen wir das umfangreichste". Die beste Option stellt die Vergleichbarkeit selbst wieder her: Ein von dir definiertes Referenzszenario zwingt alle Angebote auf dieselbe Einheit, und die Weigerung eines Anbieters beantwortet die Preisfrage auf ihre eigene Weise — als Vermerk in der Vergabeunterlage, mit dem du die Entscheidung später belastbar begründen kannst. Legitim einsetzen: Wenn du selbst Leistungen paketierst, halte für Ausschreibungen eine bepreisbare Referenzgröße bereit — das beschleunigt Vergaben und nimmt deinem Angebot den Anschein der Verschleierung. Erkennen und kontern: Sobald in einer Vergabe keine gemeinsame Einheit existiert, definiere sie selbst, bevor du bewertest — nie andersherum. Der niedrigste Gesamtpreis wirkt plausibel, weil er als einzige Zahl überall auftaucht — aber die Bündel enthalten Unterschiedliches, und der günstigste Gesamtpreis kann schlicht der kleinste Leistungsumfang sein; du vergleichst dann Äpfel mit Obstkörben. Das umfangreichste Programm wirkt souverän, kapituliert aber vor dem Muster: Genau auf diesen Ausweg — Umfang statt Preis — zielt die unvergleichbare Struktur, von der am ehesten der Pauschalanbieter profitiert. Der Grundsatz-Ausschluss überkorrigiert: Pakete und Pauschalen sind verbreitet und oft im Kundeninteresse; das Problem ist die verweigerte Aufschlüsselung, nicht die Paketform — eine starre Tagessatz-Regel verkleinert deinen Anbieterpool, ohne das eigentliche Muster zu adressieren.',
      en: 'The offer structure works as comparison prevention: three incompatible pricing schemes rule out a numerical comparison, and under deadline pressure the decision can tip onto substitute criteria — which is exactly what "let\'s take the most comprehensive one" expresses. The best option restores comparability itself: a reference scenario you define forces all offers onto the same unit, and a vendor\'s refusal answers the pricing question in its own way — as a note in the procurement file that lets you justify the decision on the record later. Used legitimately: when you package services yourself, keep a priceable reference figure ready for tenders — it speeds up awards and clears your offer of any appearance of obfuscation. To spot and counter it: whenever a tender lacks a common unit, define one yourself before you evaluate — never the other way round. The lowest total price looks plausible because it is the one number that appears everywhere — but the bundles contain different things, and the cheapest total may simply be the smallest scope; you would be comparing apples to fruit baskets. The most comprehensive programme feels decisive but capitulates to the pattern: the incomparable structure is aimed precisely at that escape route — scope instead of price — from which the flat-rate vendor is the likeliest to benefit. The blanket exclusion overcorrects: packages and flat rates are common and often in the client\'s interest; the problem is the refusal to itemise, not the package format — a rigid day-rate rule shrinks your vendor pool without addressing the actual pattern.',
    },
    points: 10,
    primaryTechniqueId: 'price_comparison_prevention',
    relatedTechniques: ['price_comparison_prevention', 'drip_pricing'],
  },
  {
    id: 'w4-price_comparison_prevention-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt das Muster, das der Produktmanager vorschlägt?',
      en: 'What is the pattern the product manager is proposing called?',
    },
    scenario: {
      de: 'Marketingrunde zur Preisseite der hauseigenen Seminarreihe: Der Produktmanager schlägt der Kommunikationsleiterin vor, Teilnehmerpreise und Einzelbuchungen abzuschaffen und nur noch drei Bündel mit Fantasienamen und Jahreskontingenten anzubieten — „dann redet draußen keiner mehr über den Preis pro Teilnehmer".',
      en: 'Marketing meeting on the pricing page of the in-house seminar series: the product manager proposes to the head of communications that they abolish per-participant prices and single bookings and offer only three bundles with invented names and annual allowances — "then nobody out there will be talking about the per-participant price anymore".',
    },
    options: [
      { de: 'Comparison Prevention (Vergleichsverhinderung)', en: 'Comparison prevention' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Versteckte Kosten (Hidden Fees)', en: 'Hidden fees' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Comparison Prevention: Der Vorschlag schafft die Einheit ab, in der der Markt rechnet — den Preis pro Teilnehmer. Fantasienamen, Bündel und Jahreskontingente lassen sich weder von einem Vergleichsportal noch von einem Wettbewerber neben ein Standardangebot legen, und die Kaufentscheidung soll dort fallen, wo der Anbieter sie haben will: innerhalb der eigenen Preisseite. Legitim einsetzen: Differenzieren über Pakete kannst du professionell vertreten, solange eine Referenzgröße verfügbar bleibt — etwa ein ausgewiesener Preis pro Teilnehmer im Standardfall; Preisangabepflichten wie die Grundpreisangabe im Handel zielen genau auf dieses Muster, und wenn du Vergleichbarkeit anbietest, ersparst du dir den Verdacht, sie zu fürchten. Erkennen und kontern: Prüf bei Angeboten — auch den eigenen — ob sich eine einfache Frage beantworten lässt: „Was kostet die Standardleistung in der marktüblichen Einheit?" Wenn die Antwort strukturell unmöglich gemacht wurde, hast du das Muster vor dir. Der Köder-Effekt wirkt plausibel, weil auch er mit Paketarchitektur arbeitet — er steuert aber die Wahl innerhalb des eigenen Sortiments über eine gezielt unattraktive Vergleichsoption und braucht Vergleichbarkeit dafür sogar; hier soll der Vergleich nach außen unterbunden werden. Drip Pricing wirkt plausibel, weil es ebenfalls die Preisdarstellung betrifft — dort erscheinen verpflichtende Zusatzkosten aber erst schrittweise im Bestellprozess; hier bleiben alle Preise von Anfang an sichtbar, nur eben unvergleichbar geschnitten. Versteckte Kosten wirken plausibel, weil es um eine Preisseite geht — versteckt hieße aber, dass Kostenbestandteile verschwiegen werden oder erst nach der Buchung auftauchen; hier bleiben alle Preise offen ausgewiesen, nur die Einheit, in der man sie vergleichen könnte, verschwindet.',
      en: 'Comparison prevention: the proposal abolishes the unit the market calculates in — the per-participant price. Invented names, bundles, and annual allowances cannot be lined up against a standard offer by any comparison site or competitor, and the purchase decision is meant to happen where the vendor wants it: inside its own pricing page. Used legitimately: you can defend differentiating through packages professionally as long as a reference figure stays available — say, a stated per-participant price for the standard case; price disclosure rules such as unit pricing in retail target exactly this pattern, and offering comparability spares you the suspicion of fearing it. To spot and counter it: for any offer — including your own — check whether one simple question can be answered: "What does the standard service cost in the market\'s usual unit?" If answering it has been made structurally impossible, you are looking at the pattern. The decoy effect looks plausible because it also works through package architecture — but it steers the choice within a vendor\'s own line-up via a deliberately unattractive comparison option and actually depends on comparability; here the aim is to prevent any outside comparison. Drip pricing looks plausible because it also concerns price presentation — but there, mandatory extra costs appear only step by step during checkout; here, all prices remain visible from the start, just structured so they cannot be compared. Hidden fees look plausible because the subject here is a pricing page — but hidden would mean cost components are concealed or surface only after booking; here every price stays openly stated, only the unit you could compare them in disappears.',
    },
    points: 10,
    primaryTechniqueId: 'price_comparison_prevention',
    relatedTechniques: ['price_comparison_prevention', 'decoy_effect', 'drip_pricing'],
  },
];
