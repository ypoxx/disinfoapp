// Band-Übung (BEGINNER) für disguised_ads (Disguised Ads / Getarnte Werbung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Bewusst blatant und in <10s aus Oberflächen-Cues lösbar. Neutrales
// B2B-/Comms-Szenario aus der Perspektive einer Kommunikationsmanagerin, die
// das Muster im Medienmonitoring erkennt — keine Consumer-/Opfer-Perspektive.
// Bewusst abgesetzt von technique.examples:
//   - [0] Advertorial im Redaktionslayout (Logistik-Fachportal);
//   - [1] grüner „Jetzt herunterladen"-Button auf Freeware-Downloadseite;
//   - [2] bezahlter Beitrag im Verbands-Newsletter;
// und von den intermediate-Übungen in wave5c-disguised-ads.ts. Hier: eine
// gebuchte Kachel, die sich als Eintrag im „Meistgelesen"-Modul tarnt.
// Der Tell ist der ausgegraute „Anzeige"-Cue neben echten Ressort-Links,
// nicht ein Erzähler-Urteil.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandDisguisedAds: Exercise[] = [
  {
    id: 'band-disguised_ads-1',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik nutzt der Komponenten-Hersteller hier?',
      en: 'Which technique is the components manufacturer using here?',
    },
    scenario: {
      de: 'B2B-Fachportal für Maschinenbau: Als Kommunikationsmanagerin sichtest du im Medienmonitoring die Startseite des Portals. In der Spalte „Meistgelesen im Ressort" — gleiche Kachelform, gleiche Typografie wie die redaktionellen Einträge daneben — steht an dritter Stelle ein Beitrag eines Komponenten-Herstellers, der direkt in dessen Produktkatalog verlinkt. Vom echten Ressort-Link unterscheidet ihn nur ein ausgegrautes „Anzeige" am oberen Kachelrand.',
      en: 'B2B trade portal for mechanical engineering: as a comms manager, you are scanning the portal\'s front page during media monitoring. In the "Most read in this section" column — same tile shape, same typography as the editorial entries beside it — the third slot holds a post from a components manufacturer that links straight into its product catalogue. The only thing setting it apart from a genuine section link is a greyed-out "Ad" along the top edge of the tile.',
    },
    options: [
      { de: 'Disguised Ads / Getarnte Werbung', en: 'Disguised ads' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Disguised Ads (getarnte Werbung): Eine bezahlte Platzierung nimmt die Form eines redaktionellen oder funktionalen Elements der Seite an — hier eine Kachel im „Meistgelesen"-Modul —, sodass ihr werblicher Charakter mit den echten Einträgen verschwimmt. Der Hebel ist das Vertrauen, das Leser einer Redaktionsauswahl entgegenbringen, aber nicht einer Werbefläche. Legitim einsetzen: Native Ads (in die Umgebung eingepasste Anzeigen) sind zulässig, wenn du sie sichtbar als „Anzeige" kennzeichnest und klar vom redaktionellen Teil abtrennst — das Trennungsgebot verlangt genau das. Erkennen und kontern: Im Redaktions-Review prüfst du jede Platzierung auf eine deutliche Kennzeichnung, und im Monitoring markierst du unausgewiesene bezahlte Beiträge, statt der Optik zu vertrauen. Sneaking (Verschleiern) wirkt plausibel, weil auch dort etwas verborgen wird — dort rutscht aber ein Zusatzposten oder eine verdeckte Zustimmung in eine Transaktion; hier ist es die werbliche Natur eines Elements. Bait-and-Switch liegt nahe, weil am Ende ein Produktkatalog erscheint — dort wird jedoch ein konkret beworbenes Angebot beim Zugriff gegen ein anderes getauscht; hier wird nichts getauscht, eine Anzeige tarnt sich nur als Redaktionsbeitrag.',
      en: 'Disguised ads: a paid placement takes on the form of an editorial or functional element on the page — here a tile in the "Most read" module — so that its promotional nature blurs into the genuine entries. The lever is the trust readers place in an editorial selection, not in an ad slot. Using it legitimately: native ads (ads fitted to their surroundings) are fine as long as you label them visibly as "Ad" and keep them clearly separate from the editorial part — the separation principle requires exactly that. Spotting and countering it: in editorial review, check every placement for a clear label, and in monitoring, flag unlabelled paid posts instead of trusting the look. Sneaking looks plausible because something is hidden there too — but there an extra item or a hidden opt-in slips into a transaction; here it is the promotional nature of an element. Bait-and-switch is close because you land in a product catalogue in the end — but there a specifically advertised offer is swapped for another the moment you act on it; here nothing is swapped, an ad merely disguises itself as an editorial post.',
    },
    points: 10,
    primaryTechniqueId: 'disguised_ads',
    relatedTechniques: ['disguised_ads', 'sneaking', 'bait_and_switch'],
  },
];
