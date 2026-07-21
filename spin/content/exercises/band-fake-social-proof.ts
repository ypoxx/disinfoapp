// Band-Übung (BEGINNER): 1 Übung für die bestehende Technik 'fake_social_proof'.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Szenario bewusst blatant und rein aus Oberflächen-Cues lösbar: der auf der
// Seite selbst sichtbare Widerspruch (»seit heute im Sortiment« vs. Zehntausende
// verkauft; Zähler läuft live hoch, obwohl du nur zusiehst; ein zweiter Reiter
// zeigt 0 Bewertungen) — kein erzähltes Geständnis, keine Insider-Bestellzahlen,
// sondern ein Interface-Widerspruch, der den 'fake'-Charakter (nicht bloß
// 'social_proof') auf der Oberfläche unmissverständlich macht.
// Grenzt sich damit als andere Denkoperation von den intermediate-Übungen in
// wave5c-fake-social-proof.ts (Betrachterzahl »17 Personen«, Live-Kauf-Meldung
// »Lena aus Hamburg«, App-Store-Sternschnitt) ab; zusätzlich Signal
// (Verkaufszähler) und reduzierte Optionszahl (3 statt 4).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandFakeSocialProof: Exercise[] = [
  {
    id: 'band-fake_social_proof-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Du prüfst die Produktseite eines Online-Shops; der Betreiber spielt dir die Kaufumgebung aus. Oben steht das Label „Neu — seit heute im Sortiment". Direkt über dem Kauf-Button läuft ein Zähler „Bereits 34.812 verkauft", und die Zahl klettert im Sekundentakt weiter, während du nur zusiehst und nichts anklickst. Ein zweiter Reiter „Bewertungen" zeigt 0.',
      en: 'You are checking the product page of an online shop; the operator serves you the buying environment. At the top sits the label "New — added to the range today." Right above the buy button a counter reads "34,812 already sold," and the number keeps climbing every second while you just watch and click nothing. A second tab, "Reviews," shows 0.',
    },
    options: [
      { de: 'Fake Social Proof', en: 'Fake social proof' },
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / sock puppets' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fake Social Proof — ein fabriziertes Popularitätssignal ohne reale Grundlage, gesetzt direkt an der Kaufentscheidung: Die hohe Verkaufszahl soll dir „so viele haben schon zugegriffen, das kann kein Fehlkauf sein" suggerieren und deinen Zweifel überspringen. So nutzt du denselben Hebel professionell: Einen Bestseller-Hinweis darfst du zeigen, sobald die Zahl real aus dem Bestellsystem belegt und ehrlich gerundet ist; bei einem taufrischen Produkt bleibst du beim ehrlichen „neu im Sortiment" statt einer erfundenen Bilanz — reale Beliebtheit machst du sichtbar, erfundene nicht. Daran erkennst du es und so entschärfst du es: Halte die behauptete Zahl gegen Alter und Belege der Seite — Zehntausende Verkäufe an einem erst heute gelisteten Produkt, ein Zähler, der beim bloßen Zusehen weiterläuft, und zugleich 0 Bewertungen ergeben zusammen kein reales Bild; verlange die Datenquelle, bevor du ein solches Badge freigibst, und lehne jede Zahl ab, die sich nicht aus dem Bestellsystem belegen lässt. Astroturfing (vorgetäuschte Graswurzel-Unterstützung durch verdeckt gesteuerte Schein-Personen) lag nahe, weil auch dort Popularität fabriziert wird — hier tritt aber keine erfundene Person als unabhängige Käuferin auf, sondern nur eine erfundene Aggregatzahl. Social Proof — echte, gemessene Beliebtheit — wäre richtig, wenn die Zahl tatsächliche Bestellungen abbildete; bei einem seit heute gelisteten Produkt mit hochlaufendem Fantasie-Zähler und 0 Bewertungen ist genau das ausgeschlossen. Das „fake" steckt im Widerspruch, den die Oberfläche selbst zeigt.',
      en: 'Fake social proof — a fabricated popularity signal with no real basis, placed right at the point of purchase: the high sales figure is meant to whisper "so many have already bought in, this can\'t be a mistake" and slip past your doubt. To use the same lever professionally, you may show a bestseller badge once the number is genuinely backed by the order system and honestly rounded; for a brand-new product, stick to an honest "new in the range" instead of an invented tally — surface real popularity, never invented popularity. To spot and defuse it, hold the claimed figure against the age and evidence of the page: tens of thousands of sales on a product listed only today, a counter that keeps running while you merely watch, and 0 reviews alongside it add up to nothing real; demand the data source before you sign off on such a badge, and reject any number that cannot be traced to the order system. Astroturfing (faked grassroots support staged by covertly steered fake personas) was tempting because it, too, manufactures popularity — but here no invented person poses as an independent buyer, only an invented aggregate number. Social proof — genuine, measured popularity — would be right if the figure reflected actual orders; for a product listed only today, with a fantasy counter ticking upward and 0 reviews, that is precisely ruled out. The "fake" lives in the contradiction the interface shows on its own surface.',
    },
    points: 10,
    primaryTechniqueId: 'fake_social_proof',
    relatedTechniques: ['fake_social_proof', 'astroturfing_sockpuppets', 'social_proof'],
  },
];
