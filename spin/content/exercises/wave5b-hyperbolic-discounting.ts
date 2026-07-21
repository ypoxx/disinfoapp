// Welle 5b: 3 Übungen für hyperbolic_discounting (Hyperbolische Diskontierung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bHyperbolicDiscounting: Exercise[] = [
  {
    id: 'wave5b-hyperbolic_discounting-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt hinter der Kampagnenidee?',
      en: 'Which technique is behind the campaign idea?',
    },
    scenario: {
      de: 'Produktmeeting eines Fitnessstudio-Anbieters: Der Marketingleiter stellt die neue Kampagne vor: „Erste drei Monate gratis trainieren, der Vertrag mit den vollen Monatsbeiträgen greift erst danach." Intern erklärt er, man setze gezielt darauf, dass Interessenten den sofort verfügbaren Gratis-Einstieg viel stärker gewichten als die zwölf teureren Monate, die weit weg in der Zukunft liegen.',
      en: 'A gym chain\'s product meeting: the marketing lead presents the new campaign — "First three months free, the contract with full monthly fees only kicks in afterwards." Internally he explains the plan deliberately banks on prospects weighting the immediately available free entry far more heavily than the twelve pricier months sitting far off in the future.',
    },
    options: [
      { de: 'Hyperbolische Diskontierung', en: 'Hyperbolic discounting' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Standard-/Status-quo-Effekt (Default)', en: 'Default / status-quo effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Hyperbolische Diskontierung: Der greifbare Sofort-Vorteil (drei Gratismonate) wird bewusst gegen die weit in der Zukunft liegenden, in Summe höheren Beiträge ausgespielt — genau die überproportionale Übergewichtung des Jetzt gegenüber dem Später, die das Muster ausmacht. Legitim einsetzen: Ein kostenloser Einstieg ist ein sauberer Anreiz, wenn du die Gesamtkosten der Laufzeit ebenso sichtbar machst wie den Gratis-Zeitraum. Erkennen und kontern: Rechne den Sofort-Vorteil und die volle Laufzeitsumme nebeneinander auf und frag dich, ob der Abschluss auch ohne den Gratis-Einstieg noch attraktiv wäre — das holt die abgewertete Zukunft zurück ins Bild. Verlustaversion wirkt plausibel, meint aber die stärkere Gewichtung drohender Verluste gegenüber gleich großen Gewinnen — hier droht kein Verlust, ein sofortiger Gewinn schlägt nur einen späteren. Verknappung setzt auf künstlich begrenzte Menge oder Zeit („nur diese Woche") — davon ist hier nichts im Spiel, der Hebel ist der Zeitpunkt des Nutzens, nicht seine Knappheit. Der Standard-Effekt nutzt Trägheit über Voreinstellungen (vorausgewählte Optionen) — hier entscheidet der Kunde aktiv, verführt allein durch den greifbaren Sofort-Vorteil.',
      en: 'Hyperbolic discounting: the tangible immediate benefit (three free months) is deliberately played off against the far-off, higher total fees — exactly the disproportionate overweighting of now over later that defines the pattern. Used legitimately: a free trial is a clean incentive when you make the full-term cost as visible as the free window. To spot and counter it: put the immediate perk and the full-term total side by side and ask whether the deal would still appeal without the free entry — that pulls the discounted future back into view. Loss aversion looks plausible but means weighting a looming loss more heavily than an equal gain — here nothing is being lost, an immediate gain simply beats a later one. Scarcity leans on artificially limited quantity or time ("this week only") — none of that is in play; the lever is the timing of the benefit, not its scarcity. The default effect exploits inertia through pre-set options (pre-selected choices) — here the customer decides actively, tempted purely by the tangible upfront benefit.',
    },
    points: 10,
    primaryTechniqueId: 'hyperbolic_discounting',
    relatedTechniques: ['hyperbolic_discounting', 'loss_aversion', 'scarcity', 'default_status_quo'],
  },
  {
    id: 'wave5b-hyperbolic_discounting-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Energieversorgers. Der Vertrieb schlägt für den neuen Tarif einen Werbespot vor: „50 Euro Sofort-Gutschrift bei Abschluss" groß im Bild, während der über die zweijährige Laufzeit spürbar höhere Arbeitspreis nur klein daneben steht. Die Idee setzt darauf, dass Kunden die sofortige Gutschrift stärker gewichten als die größeren, aber über 24 Monate verteilten Mehrkosten.',
      en: 'You lead communications at an energy provider. Sales proposes a spot for the new tariff: "€50 instant credit on sign-up" big on screen, while the noticeably higher unit price over the two-year term sits small beside it. The idea banks on customers weighting the instant credit more heavily than the larger extra cost spread across 24 months.',
    },
    options: [
      {
        de: 'Ich rechne die Gesamtkosten über die volle Laufzeit sichtbar gegen die Sofort-Gutschrift auf und bestehe darauf, dass beide Zahlen gleich prominent stehen — so wägt der Kunde die 50 Euro heute fair gegen die Mehrkosten über zwei Jahre ab, statt nur den Sofort-Anreiz zu sehen.',
        en: 'I put the full two-year total cost visibly against the instant credit and insist both figures appear equally prominently — so the customer weighs the €50 today fairly against the extra cost over two years, instead of seeing only the immediate lure.',
      },
      {
        de: 'Ich gebe den Spot frei — eine ehrliche Sofort-Gutschrift ist ein legitimer Anreiz, und solange der höhere Arbeitspreis irgendwo im Bild steht, ist die Informationspflicht erfüllt.',
        en: 'I approve the spot — an honest instant credit is a legitimate incentive, and as long as the higher unit price is somewhere on screen the disclosure duty is met.',
      },
      {
        de: 'Ich lasse die Gutschrift auf 100 Euro erhöhen, damit der Sofort-Vorteil noch klarer heraussticht und der Tarif attraktiver wirkt.',
        en: 'I have the credit raised to €100 so the immediate benefit stands out even more and the tariff looks more attractive.',
      },
      {
        de: 'Ich streiche jeden Hinweis auf die Laufzeitkosten, weil vergleichende Zahlen die Werbebotschaft nur verwässern.',
        en: 'I cut every reference to the term cost, because comparative figures only dilute the ad message.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Spot spielt die hyperbolische Diskontierung aus: Die sofortige 50-Euro-Gutschrift ist greifbar und jetzt, die größeren Mehrkosten liegen verteilt in der Zukunft und werden dadurch abgewertet. Die beste Option entschärft genau das, indem sie die Zukunft gleich prominent neben das Jetzt stellt — die volle Laufzeitsumme neben die Sofort-Gutschrift —, sodass der Kunde beide Größen auf Augenhöhe abwägen kann. Legitim einsetzen: Eine Sofort-Gutschrift darf sein, wenn die Gesamtrechnung ebenso sichtbar ist; der Anreiz informiert dann, statt die Zeitwahrnehmung auszunutzen. Erkennen und kontern: Wann immer ein Sofort-Vorteil groß und die Laufzeitkosten klein stehen, stell die Gesamtsumme daneben und frag „Lohnt sich das über die volle Laufzeit?". Die Freigabe „Pflicht erfüllt" (Option 2) wirkt plausibel, weil formal alles genannt ist — aber die ungleiche Prominenz ist der Hebel; die bloße Anwesenheit der Zahl im Kleinen ändert nichts an der Übergewichtung des Jetzt. Die Gutschrift zu erhöhen (Option 3) verstärkt die Diskontierung, statt sie aufzulösen — der Sofort-Anreiz überstrahlt die Zukunft dann noch mehr. Die Laufzeitkosten zu streichen (Option 4) macht die Irreführung vollständig und ist rechtlich wie handwerklich der schlechteste Weg.',
      en: 'The spot leans on hyperbolic discounting: the instant €50 credit is tangible and now, while the larger extra cost sits spread across the future and is discounted for it. The best option defuses exactly that by placing the future as prominently as the present — the full term total next to the instant credit — so the customer can weigh both on equal footing. Used legitimately: an instant credit is fine when the total bill is just as visible; the incentive then informs rather than exploiting time perception. To spot and counter it: whenever an immediate perk is large and the term cost is small, put the total beside it and ask "Is this worth it over the full term?". Approving on "duty met" (option 2) looks plausible because everything is formally stated — but the unequal prominence is the lever; the mere presence of the figure in small print does nothing about the overweighting of now. Raising the credit (option 3) amplifies the discounting instead of resolving it — the immediate lure then outshines the future even more. Cutting the term cost (option 4) completes the deception and is the worst path both legally and professionally.',
    },
    points: 10,
    primaryTechniqueId: 'hyperbolic_discounting',
    relatedTechniques: ['hyperbolic_discounting', 'loss_aversion', 'drip_pricing'],
  },
  {
    id: 'wave5b-hyperbolic_discounting-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'In-App-Kaufdialog eines Mobile-Games: Die Produktverantwortliche bewirbt das Premium-Paket mit „Alle Inhalte sofort freischalten" — die jährliche Abogebühr wird offen genannt, aber betont beiläufig als „ferne" Belastung dargestellt. Kern der Gestaltung: Der greifbare Sofort-Zugang soll für die Nutzer schwerer wiegen als die spätere, in Summe deutlich höhere Gebühr.',
      en: 'A mobile game\'s in-app purchase dialog: the product owner promotes the premium bundle with "Unlock all content instantly" — the annual subscription fee is stated openly but downplayed as a "distant" burden. The core of the design: the tangible instant access should weigh more for users than the later, far higher total fee.',
    },
    options: [
      { de: 'Hyperbolische Diskontierung', en: 'Hyperbolic discounting' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Standard-/Status-quo-Effekt (Default)', en: 'Default / status-quo effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Hyperbolische Diskontierung: Der Sofort-Zugang liegt im Jetzt und wird übergewichtet, während die größere Jahresgebühr in die als „fern" gerahmte Zukunft geschoben und dadurch abgewertet wird — die Zeitachse ist der Hebel, nicht die Höhe des Betrags an sich. Legitim einsetzen: Sofort-Freischaltung darf beworben werden, wenn die Jahresgebühr gleichwertig präsent ist. Erkennen und kontern: Frag dich „Was kostet das über ein volles Jahr, und wäre es das dann noch wert?" — so tauscht du den Moment-Blick gegen die Gesamtrechnung. Verlustaversion wirkt naheliegend, greift aber nur, wenn ein drohender Verlust stärker gewichtet wird als ein gleich großer Gewinn — hier steht ein sofortiger Gewinn gegen einen späteren, kein Verlust. Der Standard-Effekt nutzt Trägheit über Voreinstellungen (vorausgewählte Optionen) — hier wählt der Nutzer aktiv, angezogen allein vom sofort greifbaren Zugang.',
      en: 'Hyperbolic discounting: instant access is in the now and gets overweighted, while the larger annual fee is pushed into a future framed as "distant" and discounted for it — the time axis is the lever, not the size of the sum as such. Used legitimately: instant unlock may be advertised when the annual fee is just as present. To spot and counter it: ask "What does this cost over a full year, and would it still be worth it then?" — trading the in-the-moment view for the total bill. Loss aversion seems close but only bites when a looming loss outweighs an equal gain — here an immediate gain stands against a later one, no loss. The default effect exploits inertia through pre-set options (pre-selected choices) — here the user chooses actively, drawn purely by the instantly available access.',
    },
    points: 10,
    primaryTechniqueId: 'hyperbolic_discounting',
    relatedTechniques: ['hyperbolic_discounting', 'loss_aversion', 'default_status_quo'],
  },
];
