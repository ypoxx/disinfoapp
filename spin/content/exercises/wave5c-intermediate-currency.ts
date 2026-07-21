// Welle R5c: 3 Übungen für intermediate_currency (Intermediate Currency / Zwischenwährung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak': keine starken Wirkbehauptungen, Fokus auf Erkennen und Abgrenzung.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cIntermediateCurrency: Exercise[] = [
  {
    id: 'wave5c-intermediate_currency-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt das Portal hier ein?',
      en: 'Which pattern is the portal using here?',
    },
    scenario: {
      de: 'Beschaffungscheck für ein Untertitel-Tool: Die Video-Redakteurin einer Unternehmenskommunikation prüft einen Dienst, der Bearbeitungsminuten nicht gegen Euro abrechnet, sondern gegen „Units". 5.000 Units kosten 79 Euro; eine Minute Transkription zieht 18 Units, eine Übersetzung 25. Im Nutzungsverlauf steht überall nur der Units-Stand — was eine bearbeitete Minute in Euro kostet, weist das Portal nicht aus, und die kleinste Aufladung geht nie glatt auf den Monatsbedarf auf.',
      en: 'Procurement check for a subtitling tool: the video editor in a corporate communications team is evaluating a service that bills processing minutes not in euros but in "units". 5,000 units cost 79 euros; a minute of transcription draws 18 units, a translation 25. The usage log everywhere shows only the units balance — the portal never states what an edited minute costs in euros, and the smallest top-up never divides evenly into the monthly demand.',
    },
    options: [
      { de: 'Intermediate Currency (Zwischenwährung)', en: 'Intermediate currency' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Gamification (Variable Reward)', en: 'Gamification (variable reward)' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Intermediate Currency: Zwischen Geld und Kauf schiebt sich eine Kunstwährung — der reale Euro-Betrag erscheint nur beim Aufladen, jede Nutzung ist danach in „Units" ausgezeichnet, und die krumme Paketgröße hinterlässt planmäßig ein Restguthaben. Der Preis pro Minute in Euro wird so nie sichtbar, obwohl er sich exakt ausrechnen ließe. Legitim einsetzen: Wenn du selbst mit Credits oder Punkten abrechnest, nenne einen konstanten, transparenten Umrechnungskurs, blende den Euro-Gegenwert an der Kaufstelle mit ein und lass Guthaben punktgenau erwerben oder erstatten — dann bleibt das System für Kundinnen nachvollziehbar. Erkennen und kontern: Rechne vor der Freigabe alles in Euro pro Einheit zurück (79 € ÷ 5.000 Units × 18 = Euro pro Minute), plane das nicht glatt aufgehende Restguthaben als verfallende Kosten ein und vergleiche Anbieter nur in Euro. Drip Pricing wirkt verwandt, weil auch dort der wahre Preis verschleiert wird — dort geschieht das aber durch verpflichtende Gebühren, die im Bestellprozess nachtröpfeln; hier gibt es eine einzige Aufladung vorab, verschleiert wird über die Währungsebene. Gamification (Variable Reward) nutzt ebenfalls Punkte, setzt aber auf zufällige, variable Belohnung, die zum Weitermachen anregt — hier ist nichts zufällig, die Units etikettieren nur den Preis um. Der Köder-Effekt (Decoy) würde eine bewusst schwächere Option einschieben, um eine andere attraktiver aussehen zu lassen — hier gibt es keine Lock-Variante, das Muster steckt allein in Kunstwährung plus Restguthaben.',
      en: 'Intermediate currency: an artificial currency is slotted between money and purchase — the real euro amount appears only at top-up, every use afterwards is priced in "units", and the odd bundle size predictably leaves a residual balance. The euro price per minute never becomes visible, even though it could be worked out exactly. Used legitimately: if you bill in credits or points yourself, state a constant, transparent exchange rate, show the euro equivalent at the point of purchase, and let balances be bought or refunded to the exact amount — then the system stays intelligible for customers. To spot and counter it: before approving, convert everything back to euros per unit (79 € ÷ 5,000 units × 18 = euros per minute), budget the non-even residual balance as an expiring cost, and compare vendors only in euros. Drip pricing looks related because it too obscures the true price — but there it happens through mandatory fees that trickle in during checkout; here there is a single top-up up front, and the obscuring runs through the currency layer. Gamification (variable reward) also uses points, but its lever is random, variable reward that encourages continued play — here nothing is random, the units merely relabel the price. The decoy effect would insert a deliberately weaker option to make another look more attractive — here there is no lure variant; the pattern lies solely in the artificial currency plus residual balance.',
    },
    points: 10,
    primaryTechniqueId: 'intermediate_currency',
    relatedTechniques: ['intermediate_currency', 'drip_pricing', 'gamification_variable_reward', 'decoy_effect'],
  },
  {
    id: 'wave5c-intermediate_currency-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest das Tool-Budget der Kommunikationsabteilung. Deine Referentin empfiehlt eine Grafik-Vorlagen-Plattform, die statt Euro-Preisen mit „Points" arbeitet: 1.000 Points für 59 Euro im Jahresabo, eine Premium-Vorlage kostet 140 Points, ein Icon-Set 35. Der beworbene Einstieg von 59 Euro liegt unter den Euro-Preisen der Wettbewerber. Sie schreibt im Chat: „Wirkt günstiger als die Konkurrenz — sollen wir das Jahrespaket nehmen?"',
      en: 'You own the tool budget for the communications department. Your associate recommends a design-template platform that works in "points" rather than euro prices: 1,000 points for 59 euros on the annual plan, a premium template costs 140 points, an icon set 35. The advertised entry price of 59 euros sits below competitors\' euro prices. She messages you: "Looks cheaper than the competition — should we take the annual package?"',
    },
    options: [
      {
        de: 'Ich lasse unseren realen Jahresbedarf in Vorlagen und Sets schätzen und rechne ihn in Euro pro Stück um (59 € ÷ 1.000 Points × 140 = Euro pro Premium-Vorlage). Erst diese Euro-Werte — inklusive des Restguthabens, das am Jahresende verfällt — stelle ich den Wettbewerbern gegenüber und entscheide danach.',
        en: 'I have our real annual demand for templates and sets estimated and convert it to euros per item (59 € ÷ 1,000 points × 140 = euros per premium template). Only these euro figures — including the residual balance that expires at year-end — do I put up against competitors, and I decide on that basis.',
      },
      {
        de: 'Ich nehme das Jahrespaket: Der beworbene Einstieg von 59 Euro ist klar der günstigste am Markt, und die Points machen das Nachbuchen unterjährig unkompliziert.',
        en: 'I take the annual package: the advertised 59-euro entry is clearly the cheapest on the market, and the points make topping up during the year straightforward.',
      },
      {
        de: 'Ich bitte die Referentin, beim Anbieter ein größeres Point-Kontingent zum selben Preis herauszuhandeln — je mehr Points im Paket, desto günstiger wird jede einzelne Vorlage.',
        en: 'I ask the associate to negotiate a larger point allotment at the same price — the more points in the package, the cheaper each individual template becomes.',
      },
      {
        de: 'Ich setze jedes Tool mit Punkte- oder Credit-Abrechnung grundsätzlich auf die Sperrliste — wer nicht in Euro auszeichnet, kommt für uns nicht infrage.',
        en: 'I put every tool that bills in points or credits on the blocklist as a matter of principle — anyone who does not price in euros is off the table for us.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Plattform arbeitet mit einer Zwischenwährung: Der Euro-Bezug erscheint nur beim Aufladen, danach ist alles in Points ausgezeichnet, und der Vergleich mit dem Wettbewerb läuft über einen Einstiegspreis, der nicht der Nutzungspreis ist. Die beste Option stellt den echten Kurs wieder her: realer Jahresbedarf, Umrechnung in Euro pro Stück, das verfallende Restguthaben als Kostenpunkt eingeplant — verglichen und entschieden wird ausschließlich in Euro. Legitim einsetzen: Für eigene Punktesysteme heißt das, den Euro-Gegenwert an der Kaufstelle mitzuzeigen und Guthaben punktgenau erwerbbar zu machen. Erkennen und kontern: Miss jedes Kunstwährungs-Angebot am realen Bedarf in Euro, nicht am Aufladepreis. Das Jahrespaket zu nehmen wirkt plausibel, weil 59 Euro tatsächlich der niedrigste sichtbare Betrag sind — aber das ist der Aufladepreis, nicht der Preis pro genutzter Vorlage; genau diese Verwechslung ist der Hebel des Musters. Mehr Points herauszuhandeln verhandelt die falsche Zahl: Solange du nicht weißt, wie viele Vorlagen du real brauchst, senkt ein größeres Kontingent nur den rechnerischen Stückpreis und vergrößert das verfallende Restguthaben. Die Grundsatz-Sperre überkorrigiert: Punkte- oder Credit-Abrechnung ist nicht per se ein Problem — sie ist es erst, wenn der Euro-Bezug verschwindet und Restguthaben verfällt; eine Pauschalregel verkleinert deinen Anbieterpool, ohne dein Budget besser zu schützen als die Euro-Rückrechnung.',
      en: 'The platform runs on an intermediate currency: the euro link appears only at top-up, everything afterwards is priced in points, and the comparison with competitors runs on an entry price that is not the usage price. The best option restores the real exchange rate: actual annual demand, conversion to euros per item, the expiring residual balance budgeted as a cost — comparison and decision happen strictly in euros. Used legitimately: for your own points systems, this means showing the euro equivalent at the point of purchase and letting balances be bought to the exact amount. To spot and counter it: measure every artificial-currency offer against real demand in euros, not against the top-up price. Taking the annual package looks plausible because 59 euros really is the lowest visible figure — but that is the top-up price, not the price per template used; that very confusion is the pattern\'s lever. Negotiating more points haggles over the wrong number: as long as you do not know how many templates you actually need, a larger allotment only lowers the notional unit price and enlarges the expiring residual balance. Blocking on principle overcorrects: points or credit billing is not a problem in itself — it becomes one only when the euro link disappears and residual balances expire; a blanket rule shrinks your vendor pool without protecting your budget any better than converting back to euros does.',
    },
    points: 10,
    primaryTechniqueId: 'intermediate_currency',
    relatedTechniques: ['intermediate_currency', 'drip_pricing'],
  },
  {
    id: 'wave5c-intermediate_currency-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster schlägt der Kollege hier vor?',
      en: 'Which pattern is the colleague proposing here?',
    },
    scenario: {
      de: 'Teams-Abstimmung zur neuen Webinar-Plattform des Hauses: Der Marketingkollege schlägt der Kommunikationsleiterin vor, Zusatzleistungen — Aufzeichnung, Zertifikat, Q&A-Modul — nicht einzeln in Euro auszuweisen, sondern die Teilnehmer vorab „Event-Coins" kaufen zu lassen und jede Leistung in Coins zu bepreisen: „Dann fühlt sich das Nachbuchen leichter an, und krumme Restguthaben bleiben ohnehin bei uns."',
      en: 'Teams call on the in-house webinar platform: the marketing colleague proposes to the head of communications that add-ons — recording, certificate, Q&A module — not be listed individually in euros, but that participants buy "event coins" up front and every add-on be priced in coins: "then topping up feels easier, and odd residual balances stay with us anyway."',
    },
    options: [
      { de: 'Intermediate Currency (Zwischenwährung)', en: 'Intermediate currency' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
      { de: 'Gamification (Variable Reward)', en: 'Gamification (variable reward)' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Intermediate Currency: Der Vorschlag schiebt eine Kunstwährung zwischen Euro und Leistung — die Teilnehmer laden „Coins" auf, jede Zusatzleistung ist in Coins ausgezeichnet, der Euro-Bezug verschwindet, und krumme Restguthaben verbleiben ausdrücklich beim Anbieter. Beides zusammen — die entkoppelte Ausgabe und der einbehaltene Rest — ist der Kern des Musters, und der Kollege benennt beide Effekte offen als Ziel. Legitim einsetzen: Ein Guthabensystem ist vertretbar, wenn du den Euro-Gegenwert jeder Leistung mit anzeigst, einen konstanten Kurs hältst und Restguthaben erstattest oder punktgenau nachkaufen lässt — so bleibt die eigene Marke glaubwürdig und die Preisdarstellung prüffest. Erkennen und kontern: Prüfe eigene Buchungsstrecken darauf, ob der Euro-Preis pro Leistung überall sichtbar bleibt und ob Guthaben glatt aufgeht — verschwindet der Euro-Bezug oder bleibt planmäßig ein Rest liegen, hast du das Muster im eigenen Haus. Drip Pricing liegt nahe, weil auch dort der wahre Preis verdeckt wird — dort geschieht das über verpflichtende Gebühren, die spät im Bestellprozess erscheinen; hier gibt es eine Vorab-Aufladung, verdeckt wird über die Währungsebene. Gamification (Variable Reward) nutzt ebenfalls „Coins", zielt aber auf zufällige Belohnung zur Bindung — hier ist nichts zufällig, die Coins etikettieren nur den Preis um. Der Köder-Effekt (Decoy) würde eine bewusst unattraktive Option einschieben, damit eine andere besser wirkt — hier gibt es keine solche Lock-Variante, nur die Kunstwährung und das einbehaltene Restguthaben.',
      en: 'Intermediate currency: the proposal slots an artificial currency between euros and the service — participants load "coins", every add-on is priced in coins, the euro link disappears, and odd residual balances explicitly stay with the provider. The two together — the decoupled spending and the retained remainder — are the heart of the pattern, and the colleague names both effects openly as the goal. Used legitimately: a balance system is defensible if you also show the euro equivalent of each service, hold a constant exchange rate, and refund residual balances or let them be topped up to the exact amount — that keeps your own brand credible and the price presentation audit-proof. To spot and counter it: check your own booking flows for whether the euro price per service stays visible everywhere and whether balances divide evenly — if the euro link disappears or a remainder is left by design, you have the pattern in your own house. Drip pricing is close because it too hides the true price — there it happens through mandatory fees appearing late in checkout; here there is an up-front top-up, and the hiding runs through the currency layer. Gamification (variable reward) also uses "coins", but it aims at random reward to build retention — here nothing is random, the coins merely relabel the price. The decoy effect would insert a deliberately unattractive option so another looks better — here there is no such lure variant, only the artificial currency and the retained residual balance.',
    },
    points: 10,
    primaryTechniqueId: 'intermediate_currency',
    relatedTechniques: ['intermediate_currency', 'drip_pricing', 'gamification_variable_reward', 'decoy_effect'],
  },
];
