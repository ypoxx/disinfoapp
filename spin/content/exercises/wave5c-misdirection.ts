// Welle 5c: 3 Übungen für misdirection (Misdirection / Fehlleitung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier: 'weak' — keine starken Wirkbehauptungen.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cMisdirection: Exercise[] = [
  {
    id: 'wave5c-misdirection-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die UX-Managerin hier ein?',
      en: 'Which technique is the UX manager using here?',
    },
    scenario: {
      de: 'Design-Review im E-Commerce-Team eines Elektronikhändlers: Die UX-Managerin zeigt der Geschäftsleitung den überarbeiteten Checkout. Die kostenpflichtige Zusatzgarantie liegt als großer, orange leuchtender Button „Jetzt absichern" mittig im Blick; der Weg ohne Garantie steht daneben nur als blassgrauer, kleiner Textlink „Ohne fortfahren". Der Preis der Zusatzgarantie ist offen ausgewiesen, keine Option ist vorausgewählt, und die Ablehnung kostet genau einen Klick — nur das optische Gewicht ist ungleich verteilt.',
      en: 'Design review in an electronics retailer\'s e-commerce team: the UX manager walks the executive board through the reworked checkout. The paid extended warranty sits centre-stage as a large, glowing-orange button, "Protect it now"; the path without the warranty appears next to it only as a small, pale-grey text link, "Continue without". The warranty\'s price is stated in the open, no option is pre-selected, and declining takes exactly one click — only the visual weight is distributed unequally.',
    },
    options: [
      { de: 'Misdirection (Fehlleitung)', en: 'Misdirection' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Misdirection: Beide Wege sind vorhanden und gleich erreichbar, aber optisch deutlich ungleich gewichtet — der orange Button fängt den Blick, der graue Textlink verschwindet fast. Die Fehlleitung sitzt allein in dieser Salienz-Asymmetrie: Deine Aufmerksamkeit wird auf die anbietergünstige Option gezogen, während die gleichwertige Alternative visuell zurücktritt. Legitim einsetzen: Eine klare visuelle Empfehlung ist zulässig — professionell bleibt sie, wenn beide Optionen gut lesbar und gleich leicht klickbar sind und die Hervorhebung dem Kundeninteresse folgt, nicht nur der Marge. Erkennen und kontern: Frag dich bei jedem Screen, welche Option künstlich klein oder blass gehalten ist, und lies bewusst auch die unauffälligen Elemente, bevor du klickst. Sneaking scheint plausibel, weil eine Zusatzleistung ins Spiel kommt — dort wird der Posten aber verdeckt eingeschoben oder sein Preis verborgen; hier ist der Preis offen ausgewiesen. Der Default-/Status-quo-Effekt lockt über die „Pfad des geringsten Widerstands"-Lesart — er greift aber nur, wenn eine Option vorausgewählt ist; hier ist nichts vorbelegt, es wirkt allein die Salienz. Subscription Trap / Obstruction läge vor, wenn die Ablehnung durch Extraschritte oder Hürden erschwert wäre — hier kostet sie genau einen Klick, sie ist nur unauffällig gemacht, nicht erschwert.',
      en: 'Misdirection: both paths are present and equally reachable, yet weighted starkly unequally — the orange button grabs the eye while the grey text link almost disappears. The steering lives solely in this salience asymmetry: your attention is pulled to the provider-friendly option while the equivalent alternative visually recedes. Used legitimately: a clear visual recommendation is fine — it stays professional when both options are equally readable and equally easy to click, and the emphasis follows the customer\'s interest, not just the margin. To spot and counter it: on any screen, ask which option is being kept artificially small or faint, and deliberately read the unobtrusive elements before you click. Sneaking looks plausible because an add-on is in play — but there the item is slipped in covertly or its price hidden; here the price is stated in the open. The default / status quo effect tempts via the "path of least resistance" reading — but it only bites when an option is pre-selected; here nothing is pre-filled, salience alone does the work. Subscription trap / obstruction would apply if declining were burdened with extra steps or hurdles — here it takes exactly one click; it is merely made inconspicuous, not obstructed.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'sneaking', 'default_status_quo', 'subscription_trap_obstruction'],
  },
  {
    id: 'wave5c-misdirection-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest das Produkt-Marketing eines SaaS-Anbieters. Der Growth-Kollege legt dir den neuen Upgrade-Dialog zur Freigabe vor: Das kostenpflichtige Pro-Abo erscheint als großer, farbiger Button mittig, die Fortsetzung mit dem Gratis-Tarif nur als blasser, kleiner Textlink am Rand. Beide Optionen funktionieren, der Preis steht dabei — er bittet um deine Freigabe für den Livegang.',
      en: 'You own product marketing at a SaaS vendor. Your growth colleague sends you the new upgrade dialog for sign-off: the paid Pro plan appears as a large, colourful button in the centre, while continuing on the free tier is only a faint, small text link at the edge. Both options work and the price is shown — he asks for your sign-off to ship it.',
    },
    options: [
      {
        de: 'Ich gebe erst frei, wenn beide Wege gleich gut sichtbar und gleich leicht klickbar sind. Eine klare Empfehlung fürs Pro-Abo darf bleiben — aber als offene, lesbare Empfehlung, nicht als künstlich blass gehaltener Gratis-Link.',
        en: 'I sign off only once both paths are equally visible and equally easy to click. A clear recommendation for the Pro plan may stay — but as an open, legible recommendation, not as an artificially faded free-tier link.',
      },
      {
        de: 'Ich gebe frei: Beide Optionen sind ja sichtbar und der Preis steht dabei — damit ist die Wahl fair, den Rest macht gutes Design.',
        en: 'I sign off: both options are visible and the price is shown — that makes the choice fair, and the rest is just good design.',
      },
      {
        de: 'Ich lasse beide Optionen komplett gleich grau und unscheinbar gestalten — nur wenn keine Option heraussticht, ist der Dialog wirklich manipulationsfrei.',
        en: 'I have both options rendered completely alike, grey and unremarkable — only if nothing stands out is the dialog truly free of manipulation.',
      },
      {
        de: 'Ich gebe frei, sobald der Growth-Kollege den Linktext freundlicher formuliert — Größe und Farbe der beiden Elemente können so bleiben.',
        en: 'I sign off as soon as the growth colleague makes the link wording friendlier — the size and colour of the two elements can stay as they are.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Dialog nutzt Misdirection: Nicht ein verstecktes Angebot oder ein beschämender Wortlaut lenkt die Wahl, sondern die reine Salienz-Asymmetrie — der große farbige Button zieht den Blick, der blasse Textlink tritt zurück. Die beste Option setzt genau dort an: Sie stellt die visuelle Balance her (gleich sichtbar, gleich klickbar) und lässt die Empfehlung ausdrücklich zu. Denn eine offene Empfehlung ist legitim — du darfst dem Kunden sagen, welchen Tarif du für den passenden hältst; unzulässig wird es erst, wenn die Alternative künstlich klein und blass gehalten wird, sodass sie kaum noch als gleichwertige Wahl wahrgenommen wird. Der Unterschied ist Transparenz gegenüber verdeckter Blicklenkung, nicht Empfehlung gegenüber Neutralität. Erkennen und kontern: Prüf bei jeder Freigabe, ob die weniger lukrative Option nur inhaltlich schwächer empfohlen oder auch optisch benachteiligt ist — Letzteres gehört korrigiert. Option 1 wirkt fair, verwechselt aber Sichtbarkeit mit Gleichgewicht: „vorhanden und mit Preis" heißt nicht „gleich gewichtet"; genau die ungleiche Gewichtung ist der Hebel. Option 2 überkorrigiert — alles gleich grau und unscheinbar opfert die Bedienbarkeit und lässt die Nutzer:innen ratlos zurück; nicht jede Hervorhebung ist Manipulation, nur die versteckte. Option 3 sitzt am falschen Ort: Die Fehlleitung liegt hier im Visuellen (Größe, Farbe), nicht im Wortlaut — einen freundlicheren Linktext zu formulieren, während der Button dominant bleibt, ändert am eigentlichen Effekt nichts.',
      en: 'The dialog uses misdirection: the choice is steered not by a hidden offer or shaming wording but by pure salience asymmetry — the large colourful button grabs the eye while the faint text link recedes. The best option addresses exactly that: it restores visual balance (equally visible, equally clickable) while explicitly allowing the recommendation. An open recommendation is legitimate — you may tell customers which plan you consider the right fit; it only becomes illegitimate when the alternative is kept artificially small and faint so it is barely perceived as an equal choice. The dividing line is transparency versus covert eye-steering, not recommendation versus neutrality. To spot and counter it: on every sign-off, check whether the less lucrative option is merely recommended less strongly in substance or also handicapped visually — the latter must be fixed. Option 1 feels fair but confuses visibility with balance: "present and priced" is not "equally weighted"; the unequal weighting is precisely the lever. Option 2 overcorrects — making everything alike, grey and unremarkable, sacrifices usability and leaves users adrift; not every emphasis is manipulation, only the hidden kind. Option 3 aims at the wrong place: the misdirection here is visual (size, colour), not verbal — softening the link wording while the button stays dominant changes nothing about the actual effect.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'visual_manipulation', 'sneaking'],
  },
  {
    id: 'wave5c-misdirection-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt den Tarif-Screen am ehesten?',
      en: 'Which technique most clearly shapes the plan screen?',
    },
    scenario: {
      de: 'Retention-Review der Abo-Verwaltung eines Streamingdienstes: Der UX-Lead zeigt der Produktleitung den Tarif-Screen. Wer vom teuren Premium- auf das günstige Basis-Paket wechseln möchte, findet den Wechsel — obwohl er mit einem Klick erledigt ist — nur als kleinen, blassgrauen Textlink am unteren Seitenrand, während „Premium behalten" als großer, farbiger Button oben prangt. Nichts ist versteckt oder mit Extraschritten erschwert; beide Tarife und Preise stehen offen da.',
      en: 'Retention review of a streaming service\'s subscription settings: the UX lead shows the product lead the plan screen. Anyone wanting to move from the pricey Premium to the cheaper Basic plan finds the switch — even though it takes a single click — only as a small, pale-grey text link at the bottom of the page, while "Keep Premium" sits up top as a large, colourful button. Nothing is hidden or burdened with extra steps; both plans and prices are on open display.',
    },
    options: [
      { de: 'Misdirection (Fehlleitung)', en: 'Misdirection' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Misdirection: Der Wechsel ins günstigere Paket ist mit einem Klick erledigt und liegt offen auf der Seite — er wird nur optisch an den Rand gedrängt, klein und blassgrau, während „Premium behalten" den Blick auf sich zieht. Der Hebel ist die Salienz-Asymmetrie, nicht eine Hürde und nicht eine Voreinstellung. Legitim einsetzen: Den aktuell genutzten Tarif sichtbar hervorzuheben, ist vertretbar — professionell bleibt es, wenn der Wechsel-Link genauso gut auffindbar und lesbar ist wie der Verbleib-Button. Erkennen und kontern: Achte in Kündigungs- und Downgrade-Strecken gezielt auf die Option, die klein oder blass gehalten ist — wenn sie mit einem Klick erreichbar, aber optisch vergraben ist, ist es Fehlleitung, und du klickst sie bewusst trotzdem. Subscription Trap / Obstruction läge vor, wenn der Wechsel echte Reibung verlangte — zusätzliche Schritte, Rückhalte-Screens, eine Hotline; hier genügt ein Klick, es fehlt jede Hürde. Der Default-/Status-quo-Effekt verlockt, weil „Premium behalten" der bequeme Ist-Zustand ist — er bräuchte aber eine echte Vorauswahl oder Voreinstellung; hier ist nichts vorbelegt, es wirkt allein das optische Gewicht. Der Köder-Effekt läge vor, wenn ein drittes, absichtlich unattraktives Paket das Premium-Abo vernünftig aussehen ließe — hier gibt es nur zwei Tarife und keine solche Ködervariante.',
      en: 'Misdirection: the switch to the cheaper plan takes a single click and sits openly on the page — it is merely pushed to the margin, small and pale-grey, while "Keep Premium" draws the eye. The lever is salience asymmetry, not a hurdle and not a default. Used legitimately: visibly highlighting the plan currently in use is defensible — it stays professional when the switch link is just as findable and readable as the keep button. To spot and counter it: in cancellation and downgrade flows, deliberately look for the option kept small or faint — if it is one click away yet visually buried, it is misdirection, and you click it anyway on purpose. Subscription trap / obstruction would apply if switching demanded real friction — extra steps, retention screens, a hotline; here a single click suffices, there is no hurdle at all. The default / status quo effect tempts because "Keep Premium" is the comfortable current state — but it would need a genuine pre-selection or default setting; here nothing is pre-filled, visual weight alone does the work. The decoy effect would apply if a third, deliberately unattractive plan made Premium look reasonable — here there are only two plans and no such bait option.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'subscription_trap_obstruction', 'default_status_quo', 'decoy_effect'],
  },
];
