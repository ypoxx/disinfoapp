// Welle 5a: 3 Übungen für double_standards (Doppelstandards).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen; Fokus auf Muster & Kontern.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aDoubleStandards: Exercise[] = [
  {
    id: 'wave5a-double_standards-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Nachhaltigkeitschef hier ein?',
      en: 'Which technique is the head of sustainability using here?',
    },
    scenario: {
      de: 'Pressegespräch eines Automobilzulieferers mit einem Wirtschaftsjournalisten: Der Nachhaltigkeitschef bezeichnet die verfehlten Klimaziele eines Wettbewerbers als „Greenwashing, das entlarvt gehört". Die eigenen, im selben Jahr ebenfalls verfehlten Ziele nennt er im selben Gespräch „ambitionierte Zwischenschritte auf einem realistischen Pfad".',
      en: 'Press briefing of an automotive supplier with a business journalist: the head of sustainability calls a competitor\'s missed climate targets "greenwashing that deserves to be exposed". His own targets, missed in the very same year, he describes in the same conversation as "ambitious interim steps on a realistic path".',
    },
    options: [
      { de: 'Doppelstandards', en: 'Double standards' },
      { de: 'Whataboutism (Tu quoque)', en: 'Whataboutism (tu quoque)' },
      { de: 'Cherry-Picking (selektive Belege)', en: 'Cherry-picking (selective evidence)' },
      { de: 'Framing (Deutungsrahmen)', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Doppelstandards: Dasselbe Verhalten — verfehlte Klimaziele — wird beim Wettbewerber zum „Greenwashing" und im eigenen Haus zu „ambitionierten Zwischenschritten". Der Maßstab wechselt allein mit der Zugehörigkeit. Der Hebel wirkt, weil die beiden Urteile nie nebeneinanderstehen: Erst der direkte Vergleich macht die Asymmetrie sichtbar. Legitim ist ein unterschiedlicher Maßstab nur, wenn die Fälle relevant verschieden sind — dann benennst du den Unterschied offen (etwa nachweislich andere Ursachen), statt ihn zu verschweigen. Erkennen und kontern: Leg beide Fälle bewusst nebeneinander und frag nach dem einen, einheitlichen Kriterium („Nach welchem Maßstab ist dasselbe verfehlte Ziel bei den einen Greenwashing und bei uns ein Zwischenschritt?"). Whataboutism liegt nahe, weil auch hier ein Wettbewerber vorkommt — dort wird aber eine Frage oder ein Vorwurf mit einem Gegenvorwurf abgewehrt; hier stellt niemand eine Frage, der Sprecher fällt schlicht zwei unvereinbare Urteile. Cherry-Picking wäre das Auswählen günstiger Belege aus einer größeren Datenlage; hier werden keine Daten ausgewählt, sondern derselbe Sachverhalt ungleich bewertet. Framing liegt nahe, weil die gegensätzlichen Etiketten Deutungsrahmen sind — doch Framing beschreibt das Setzen eines Rahmens an sich; das Kennzeichen hier ist erst der Widerspruch zwischen zwei Rahmen für den gleichen Fall.',
      en: 'Double standards: the same behaviour — missed climate targets — becomes "greenwashing" for the competitor and "ambitious interim steps" for his own house. The yardstick shifts with affiliation alone. The lever works because the two verdicts never sit side by side; only the direct comparison exposes the asymmetry. A different standard is legitimate only when the cases differ in a relevant way — and then you name that difference openly (say, demonstrably different causes) rather than hiding it. To spot and counter it: deliberately place the two cases next to each other and ask for the single, consistent criterion ("By what standard is the same missed target greenwashing for them and an interim step for us?"). Whataboutism looks close because a competitor features here too — but there a question or charge is deflected with a counter-charge; here no one asks anything, the spokesperson simply passes two irreconcilable judgments. Cherry-picking would be selecting favourable evidence from a larger body of data; here no data is selected, the same matter is judged unequally. Framing is tempting because the opposing labels are interpretive frames — but framing describes setting a frame as such; what marks this out is the contradiction between two frames for the same case.',
    },
    points: 10,
    primaryTechniqueId: 'double_standards',
    relatedTechniques: ['double_standards', 'whataboutism', 'cherry_picking', 'framing'],
  },
  {
    id: 'wave5a-double_standards-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Statement-Freigabe bei einem Industriekonzern, den du als Kommunikationsleiterin verantwortest: Ein Kollege legt einen Entwurf vor, der den Stellenabbau eines Wettbewerbers als „kalte Zahlenlogik auf dem Rücken der Beschäftigten" geißelt. Euer eigener, größerer Stellenabbau vom Vorquartal war im damaligen Statement „verantwortungsvolle Restrukturierung zur Zukunftssicherung".',
      en: 'Statement sign-off at an industrial group you head as director of communications: a colleague submits a draft that lambasts a competitor\'s job cuts as "cold numerical logic on the backs of employees". Your own, larger job cuts last quarter were framed in that statement as "responsible restructuring to secure the future".',
    },
    options: [
      {
        de: 'Ich lege die beiden Fälle nebeneinander und ziehe einen einheitlichen Maßstab: Entweder ist Stellenabbau bei vergleichbarer Lage in beiden Fällen legitime Restrukturierung oder in beiden hart — ich gleiche die Wortwahl an, weil eine Journalistin die zwei Statements ohnehin nebeneinanderlegen wird.',
        en: 'I put the two cases side by side and apply one consistent standard: either job cuts in a comparable situation are legitimate restructuring in both cases or harsh in both — I align the wording, because a journalist will place the two statements next to each other anyway.',
      },
      {
        de: 'Ich übernehme den Entwurf: Die Lage des Wettbewerbers ist eine andere, deshalb sind auch andere, schärfere Worte gerechtfertigt.',
        en: 'I adopt the draft: the competitor\'s situation is a different one, so different, sharper words are justified too.',
      },
      {
        de: 'Ich schärfe den Angriff sogar nach und erinnere zusätzlich an frühere Fehltritte des Wettbewerbers, damit unser eigener Abbau daneben milder erscheint.',
        en: 'I sharpen the attack further and additionally recall the competitor\'s earlier missteps, so that our own cuts look milder by comparison.',
      },
      {
        de: 'Ich streiche jede Bewertung aus beiden Statements und lasse nur noch die nackten Zahlen stehen.',
        en: 'I strip every judgment out of both statements and leave nothing but the bare figures.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf baut einen Doppelstandard: Dasselbe Verhalten — Stellenabbau — wird beim Wettbewerber verurteilt und beim eigenen Haus beschönigt. Der Mechanismus lebt davon, dass niemand die beiden Statements zusammen liest; genau das tut ein Wirtschaftsressort aber routinemäßig, und dann kippt die Glaubwürdigkeit. Die beste Option zwingt einen einheitlichen Maßstab auf: Sie prüft, ob die Fälle wirklich relevant verschieden sind, und gleicht die Sprache sonst an. Legitim wäre eine unterschiedliche Bewertung nur mit einem offen benannten, sachlichen Unterschied — nicht mit der bloßen Zugehörigkeit. Erkennen und kontern: Halte deine eigenen früheren Formulierungen neben die aktuelle Aussage und frag, ob ein Außenstehender denselben Maßstab wiedererkennt. Den Entwurf zu übernehmen wirkt plausibel, weil sich fast jeder Fall als „anders" darstellen lässt — doch ohne konkret benannten Unterschied ist genau das die Ausrede, die den Doppelstandard trägt. Den Angriff nachzuschärfen fügt Whataboutism hinzu und verdoppelt das Risiko, statt es zu heilen. Alle Bewertungen zu streichen ist Überkorrektur: Du verschenkst die legitime Einordnung und wirkst ausweichend, obwohl ein konsistenter Maßstab genügt hätte.',
      en: 'The draft builds a double standard: the same behaviour — job cuts — is condemned in the competitor and dressed up for your own house. The mechanism relies on no one reading the two statements together; a business desk does exactly that as a matter of routine, and then credibility collapses. The best option forces a single standard: it checks whether the cases really differ in a relevant way, and otherwise aligns the language. A differing judgment would be legitimate only with an openly stated, substantive difference — not with mere affiliation. To spot and counter it: hold your own earlier wording next to the current statement and ask whether an outsider would recognise the same yardstick. Adopting the draft seems plausible because almost any case can be cast as "different" — but without a concretely named difference, that is precisely the excuse the double standard rides on. Sharpening the attack adds whataboutism and doubles the risk instead of curing it. Stripping out every judgment is an over-correction: you give away the legitimate context and come across as evasive, when a consistent standard would have sufficed.',
    },
    points: 10,
    primaryTechniqueId: 'double_standards',
    relatedTechniques: ['double_standards', 'whataboutism'],
  },
  {
    id: 'wave5a-double_standards-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Damit ___.',
      en: 'Complete the sentence: With this, ___.',
    },
    scenario: {
      de: 'Internes Briefing vor einem Statement bei einer Fluggesellschaft: Vor ihrem Team weist die Kommunikationschefin an, die hohe Verspätungsquote eines Konkurrenten als „chronisches Missmanagement" anzugreifen. Die eigene, im selben Zeitraum sogar höhere Verspätungsquote solle das Team als „Folge außergewöhnlicher Wetterlagen" einordnen.',
      en: 'Internal briefing before a statement at an airline: in front of her team, the head of communications instructs them to attack a competitor\'s high delay rate as "chronic mismanagement". The airline\'s own delay rate, even higher over the same period, is to be framed by the team as "the result of exceptional weather".',
    },
    options: [
      {
        de: 'wendet die Kommunikationschefin einen doppelten Maßstab an — dieselbe Kennzahl (die Verspätungsquote) gilt beim Konkurrenten als Missmanagement und im eigenen Haus als bloße Wetterfolge (Doppelstandards)',
        en: 'the head of communications applies a double standard — the same metric (the delay rate) counts as mismanagement for the competitor and as mere weather for her own house (double standards)',
      },
      {
        de: 'weicht die Kommunikationschefin einer an sie gerichteten Frage aus, indem sie mit einem Gegenvorwurf auf den Konkurrenten zeigt (Whataboutism)',
        en: 'the head of communications deflects a question put to her by pointing a counter-charge at the competitor (whataboutism)',
      },
      {
        de: 'wählt die Kommunikationschefin aus vielen verfügbaren Kennzahlen nur die für das eigene Haus günstigen aus und verschweigt den Rest (Cherry-Picking)',
        en: 'the head of communications selects only the metrics favourable to her own house from many available ones and conceals the rest (cherry-picking)',
      },
      {
        de: 'greift die Kommunikationschefin die Personen hinter der Konkurrenz-Statistik an, statt deren Zahlen zu prüfen (Ad Hominem)',
        en: 'the head of communications attacks the people behind the competitor\'s statistics instead of examining their figures (ad hominem)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Doppelstandards: Dieselbe Kennzahl — die Verspätungsquote — wird beim Konkurrenten als Missmanagement gewertet und im eigenen Haus als Wetterfolge entschuldigt, obwohl die eigene Quote sogar höher liegt. Der Hebel wirkt, weil beide Urteile getrennt fallen; erst nebeneinandergelegt zeigt sich der eine Maßstab, der zweierlei misst. Legitim wäre die Unterscheidung nur mit einem offen benannten, nachweisbaren Unterschied — etwa belegbar andere Ursachen —, nicht mit der bloßen Zugehörigkeit. Erkennen und kontern: Wende das ausgesprochene Kriterium auf beide Seiten an und frag, was übrig bleibt („Wenn eine hohe Quote Missmanagement ist, was ist dann unsere höhere?"). Whataboutism verlangt eine abgewehrte Frage oder einen Gegenvorwurf — hier deutet sie nur zwei Zahlen ungleich, ohne auszuweichen. Cherry-Picking wäre das Verschweigen unbequemer Kennzahlen; hier werden beide Quoten offen genannt, nur nach wechselndem Maßstab bewertet. Ad Hominem ist der verführerischste Distraktor, weil ein Angriff auf die „Statistik der Gegenseite" wie ein Angriff auf deren Herkunft klingt — der eigentliche Fehler ist aber nicht der Herkunftsverweis, sondern dass genau dieser Maßstab für die eigene Quote ausgesetzt wird.',
      en: 'Double standards: the same metric — the delay rate — is rated as mismanagement for the competitor and excused as weather for her own house, even though her own rate is actually higher. The lever works because the two verdicts fall separately; only side by side does the single yardstick that measures two ways become visible. The distinction would be legitimate only with an openly stated, demonstrable difference — such as provably different causes — not with mere affiliation. To spot and counter it: apply the stated criterion to both sides and ask what survives ("If a high rate is mismanagement, then what is our higher one?"). Whataboutism requires a deflected question or a counter-charge — here she merely judges two figures unequally, without evading anything. Cherry-picking would be suppressing inconvenient metrics; here both rates are named openly, only rated by a shifting standard. Ad hominem is the most seductive distractor, because attacking "the other side\'s statistics" sounds like an attack on their origin — but the actual fault is not the reference to origin, it is that this very standard is suspended for her own rate.',
    },
    points: 10,
    primaryTechniqueId: 'double_standards',
    relatedTechniques: ['double_standards', 'whataboutism', 'cherry_picking', 'ad_hominem'],
  },
];
