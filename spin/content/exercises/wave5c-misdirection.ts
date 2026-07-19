// Welle 5c: 3 Übungen für misdirection.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
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
      de: 'Freigabe der überarbeiteten Warenkorb-Seite im Onlineshop eines Elektronikhändlers: Die UX-Managerin zeigt der Geschäftsleitung die finale Version. Wer zur Kasse geht, sieht mittig einen großen orangefarbenen Button „Mit Garantie-Plus weiter"; der Weg ohne die kostenpflichtige Zusatzgarantie führt nur über einen kleinen, blassgrauen Textlink „Ohne fortfahren" ganz unten.',
      en: 'Sign-off for the reworked cart page in the online shop of an electronics retailer: the UX manager shows leadership the final version. Anyone heading to checkout sees a large orange button in the centre, "Continue with Warranty Plus"; the path without the paid extra warranty is only a small, pale-grey text link at the very bottom, "Continue without".',
    },
    options: [
      { de: 'Misdirection (Fehlleitung)', en: 'Misdirection' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Confirmshaming', en: 'Confirmshaming' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / Status Quo Effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Misdirection: Beide Wege sind sichtbar, aber optisch krass ungleich gewichtet — der teure Button springt groß und farbig ins Auge, die kostenlose Wahl ist zum blassen Textlink am Seitenende degradiert. Das wirkt, weil unsere Aufmerksamkeit dem stärksten Reiz folgt und die unauffällige Option schlicht überlesen wird; die Fehlleitung sitzt in der Salienz-Asymmetrie der Oberfläche. Legitim einsetzen: Du darfst die von dir empfohlene Option gestalterisch hervorheben und ihren Nutzen klar benennen — professionell bleibt es, solange die günstigere Wahl gleichwertig auffindbar ist (vergleichbare Größe, kein Verstecken als grauer Link). Erkennen und kontern: Frag dich bei jedem Screen, ob die für dich vorteilhafte Option genauso leicht zu finden ist wie die profitable — wenn eine als Button prangt und die andere als Fußnote verschwindet, ist es Misdirection; entschärfe es, indem du beide Wege gleich sichtbar setzt. Sneaking liegt nahe, weil auch hier ein kostenpflichtiger Zusatz im Spiel ist — dort wird der Posten aber heimlich in den Warenkorb geschoben oder im Kleingedruckten versteckt; hier ist die Garantie offen sichtbar, nur die Alternative ist optisch erdrückt. Confirmshaming wirkt verwandt, weil eine Ablehn-Option existiert — der Link heißt aber neutral „Ohne fortfahren", er beschämt dich nicht; die Manipulation liegt in der Sichtbarkeit, nicht im Wortlaut. Der Default-/Status-quo-Effekt schließlich bräuchte eine vorausgewählte Voreinstellung, die du aktiv abwählen musst — hier ist nichts vorangekreuzt, es zählt allein das optische Gewicht.',
      en: 'Misdirection: both paths are visible, but weighted starkly unequally — the expensive button is large and colourful and grabs the eye, while the free choice is demoted to a pale text link at the foot of the page. It works because attention follows the strongest cue and the inconspicuous option is simply read past; the misdirection sits in the interface\'s salience asymmetry. Used legitimately: you may visually foreground the option you recommend and state its benefit clearly — it stays professional as long as the cheaper choice is equally findable (comparable size, not hidden as a grey link). To spot and counter it: for every screen, ask whether the option in your interest is as easy to find as the profitable one — if one is a prominent button and the other vanishes into a footnote, it is misdirection; defuse it by giving both paths equal visibility. Sneaking looks close because a paid extra is involved too — but there the item is quietly slipped into the cart or buried in the fine print; here the warranty is openly visible, only its alternative is visually crushed. Confirmshaming feels related because a decline option exists — but the link reads neutrally ("Continue without") and does not shame you; the manipulation is in visibility, not wording. The default / status quo effect, finally, would need a pre-selected setting you have to actively opt out of — here nothing is pre-ticked; it is visual weight alone that does the work.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'sneaking', 'confirmshaming', 'default_status_quo'],
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
      de: 'Du verantwortest das Produkt-Marketing einer SaaS-App. Die Agentur liefert den neuen Paywall-Screen: Das kostenpflichtige Jahresabo liegt als große, farbig hervorgehobene Karte in der Bildmitte, der Weg in die dauerhaft kostenlose Basis-Version nur als kleiner, blassgrauer Link „Später" oben in der Ecke. Der Growth-Kollege verweist auf die höhere Conversion im A/B-Test und bittet um deine Freigabe.',
      en: 'You own product marketing for a SaaS app. The agency delivers the new paywall screen: the paid annual plan sits as a large, colour-highlighted card in the centre, while the path into the permanently free basic version is only a small, pale-grey link ("Later") up in the corner. Your growth colleague points to the higher conversion in the A/B test and asks for your sign-off.',
    },
    options: [
      {
        de: 'Ich lasse den Gratis-Weg gleichwertig sichtbar setzen — als vollwertigen Button in vergleichbarer Größe statt als blassen Eck-Link — und behalte die klare Empfehlung fürs Abo im Text: Die Salienz-Asymmetrie ist Misdirection, und als Anbieter tragen wir das Reputations- und Regulierungsrisiko.',
        en: 'I have the free path made equally visible — a full button of comparable size instead of a pale corner link — and keep the clear recommendation for the plan in the copy: the salience asymmetry is misdirection, and as the provider we carry the reputational and regulatory risk.',
      },
      {
        de: 'Ich gebe frei: Der A/B-Test zeigt mehr Abschlüsse, und wenn beide Optionen auf dem Screen vorhanden sind, ist die Wahl doch fair.',
        en: 'I sign off: the A/B test shows more conversions, and if both options are present on the screen, the choice is fair after all.',
      },
      {
        de: 'Ich streiche jede Hervorhebung — beide Optionen kommen gleich grau und unscheinbar, dann kann uns niemand Beeinflussung vorwerfen.',
        en: 'I strip out every bit of emphasis — both options go equally grey and plain, so nobody can accuse us of steering.',
      },
      {
        de: 'Ich lasse nur den Text des Gratis-Links freundlicher formulieren („Erst mal kostenlos starten"), Größe und Farbe bleiben wie sie sind.',
        en: 'I just have the free link\'s wording made friendlier ("Start free for now"); its size and colour stay as they are.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Screen ist Misdirection: Beide Wege sind da, aber die kostenlose Wahl ist zum blassen Eck-Link erdrückt, während das Abo als farbige Karte die Aufmerksamkeit bindet — der Hebel steckt in der optischen Ungleichgewichtung, nicht im Wortlaut. Die beste Option trennt den legitimen Kern (eine klare, hervorgehobene Empfehlung fürs Abo) vom übergriffigen Teil und macht den Gratis-Weg gleichwertig auffindbar; damit darfst du weiter werben, ohne die vorteilhafte Nutzerwahl zu verstecken. Erkennen und kontern: Prüf bei jedem Screen, ob die für Nutzer:innen günstige Option genauso leicht zu finden ist wie die profitable — sobald eine als Button prangt und die andere als Fußnote verschwindet, stellst du die Sichtbarkeit gleich. Die Freigabe wirkt plausibel, weil der A/B-Test kurzfristig mehr Abschlüsse zeigt — „beide Optionen sind vorhanden" verwechselt aber Existenz mit Auffindbarkeit; genau die Salienz-Asymmetrie ist das Muster, und der Flurschaden landet beim Absender. Alle Hervorhebung zu streichen überkorrigiert: Eine erkennbare Empfehlung und ein attraktiver Abo-Button sind legitim — das Problem ist allein, dass die Alternative optisch erdrückt wird. Nur den Link-Text freundlicher zu formulieren behandelt ein Wortlaut-Problem, das hier gar nicht besteht — die Fehlleitung sitzt in Größe und Farbe, und die lässt diese Option unverändert.',
      en: 'The screen is misdirection: both paths are there, but the free choice is crushed into a pale corner link while the plan binds attention as a colourful card — the lever is in the visual imbalance, not the wording. The best option separates the legitimate core (a clear, foregrounded recommendation for the plan) from the intrusive part and makes the free path equally findable; you may keep advertising without hiding the choice in the user\'s interest. To spot and counter it: for every screen, check whether the option in users\' interest is as easy to find as the profitable one — the moment one is a prominent button and the other vanishes into a footnote, equalise the visibility. Signing off looks plausible because the A/B test shows more conversions short-term — but "both options are present" confuses existence with findability; the salience asymmetry itself is the pattern, and the fallout lands on the sender. Stripping out all emphasis overcorrects: a recognisable recommendation and an attractive plan button are legitimate — the problem is solely that the alternative is visually crushed. Merely making the link\'s wording friendlier treats a wording problem that does not exist here — the misdirection sits in size and colour, and that option leaves both untouched.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'confirmshaming'],
  },
  {
    id: 'wave5c-misdirection-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Abo-Verwaltung eines Streamingdienstes: Wer vom teuren Premium- auf das günstige Basis-Paket wechseln möchte, findet den Wechsel nur als kleinen grauen Textlink am unteren Seitenrand; die Schaltfläche „Premium behalten" steht groß und farbig in der Mitte des Screens.',
      en: 'Subscription management of a streaming service: anyone wanting to switch from the expensive premium to the cheaper basic plan finds the switch only as a small grey text link at the bottom of the page; the "Keep premium" button sits large and colourful in the centre of the screen.',
    },
    options: [
      { de: 'Misdirection (Fehlleitung)', en: 'Misdirection' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Nudging', en: 'Nudging' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Misdirection: Beide Wege existieren, aber die für die Nutzerin günstige Wahl — der Wechsel ins billigere Paket — ist zum grauen Textlink am Seitenrand degradiert, während „Premium behalten" groß und farbig die Aufmerksamkeit bindet. Der Hebel steckt in der Salienz-Asymmetrie: Das Auge folgt dem stärksten Reiz und übersieht die unscheinbare Option. Legitim einsetzen: Du darfst die von dir bevorzugte Option gestalterisch betonen — professionell bleibt es, solange der günstigere Wechsel gleichwertig auffindbar ist. Erkennen und kontern: Frag dich, ob die für dich vorteilhafte Wahl genauso leicht zu finden ist wie die profitable — wenn eine als Button prangt und die andere als grauer Link verschwindet, ist es Misdirection; such gezielt nach der versteckten Option und lass dich vom optischen Gewicht nicht ausbremsen. Sneaking klingt verwandt, meint aber das heimliche Einschieben eines Postens oder einer Bindung, die du nicht bemerkst — hier ist alles offen sichtbar, nur ungleich gewichtet. Nudging wirkt plausibel, weil auch dort über Gestaltung gestupst wird — ein legitimer Nudge lässt die vorteilhafte Wahl aber genauso leicht zugänglich; sobald eine Option gezielt erdrückt und weggeräumt wird, ist die Grenze zum manipulativen Dark Pattern überschritten.',
      en: 'Misdirection: both paths exist, but the choice in the user\'s interest — switching to the cheaper plan — is demoted to a grey text link at the edge of the page, while "Keep premium" binds attention, large and colourful. The lever is the salience asymmetry: the eye follows the strongest cue and overlooks the inconspicuous option. Used legitimately: you may visually emphasise the option you prefer — it stays professional as long as the cheaper switch is equally findable. To spot and counter it: ask whether the choice in your interest is as easy to find as the profitable one — if one is a prominent button and the other vanishes as a grey link, it is misdirection; deliberately look for the hidden option and do not let the visual weight slow you down. Sneaking sounds related but means quietly slipping in an item or commitment you do not notice — here everything is openly visible, merely weighted unequally. Nudging looks plausible because it too steers through design — but a legitimate nudge keeps the beneficial choice just as accessible; the moment one option is deliberately crushed and tucked away, the line to a manipulative dark pattern has been crossed.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'sneaking', 'nudging'],
  },
];
