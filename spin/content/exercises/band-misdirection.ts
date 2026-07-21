// Band-Übung (ADVANCED) für misdirection (Misdirection / Fehlleitung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier der Technik: 'weak' — keine starken Wirkbehauptungen, nur
// beschriebene Gestaltungs-Absicht, keine quantifizierte Entscheidungs-Wirkung.
// Trennschärfe: In DIESER App IST misdirection ein Dark Pattern der
// Salienz-Asymmetrie (category dark_patterns). Das Szenario macht die
// misdirection-EIGENE Signatur explizit: die für die Reisenden vorteilhafte
// Option (Sparpreis) wird GEZIELT in den Hintergrund gestaltet, mit benanntem
// anbieter-adversem Vorsatz (Marge vor Reisenden-Interesse) — das trennt es vom
// wohlmeinenden/neutralen Nudge. Kein Cue-Wort ("Salienz", "optisches Gewicht",
// "Aufmerksamkeit") im Szenario, keine monokausale Wirkformel.
// Distraktoren = echte, sauber trennbare Nachbarn: Obstruction (Reibung statt
// Sichtbarkeit) und Default (Vorauswahl statt Gewichtung). Bewusst NICHT als
// Distraktor: 'nudging' (in dieser App absichtsneutral definiert und damit für
// eine salienz-basierte Lenkung ko-korrekt) sowie 'confirmshaming' (verlangt
// beschämenden Wortlaut, im Szenario nicht vorhanden). Keine Dublette zu
// technique.examples (kein „großer Button vs. Textlink", kein Abo-/Spenden-Sujet).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandMisdirection: Exercise[] = [
  {
    id: 'band-misdirection-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik prägt diesen Auswahlschritt?',
      en: 'Which technique shapes this selection step?',
    },
    scenario: {
      de: 'Wettbewerbsbeobachtung im Insights-Team eines Reise-Vergleichsportals: Eine Analystin hält für den internen Report fest, wie ein großer Fernbus-Anbieter in seiner App eine Verbindung zum Kauf anbietet. Auf dem Auswahlschritt liegt der teurere Flextarif als aufgeklappte, kräftig eingefärbte Karte mit fetter Überschrift und breiter Auswahlschaltfläche mitten im Sichtfeld. Der günstigere Sparpreis zur exakt selben Fahrt — für die Reisenden das bessere Angebot — steht direkt darunter, offen mit seinem Preis, aber nur als einzeilige, blassgrau gesetzte Zeile, die im Layout fast untergeht und beim schnellen Durchtippen leicht übersehen wird. Beide Tarife lassen sich an derselben Stelle und mit demselben Aufwand auswählen. Die Analystin notiert, dass die günstigere Option nicht aus Platzgründen so klein ausfällt, sondern gezielt in den Hintergrund gestaltet ist, damit der Blick bei dem margenstärkeren Flextarif bleibt.',
      en: 'Competitive monitoring in a travel comparison platform\'s insights team: an analyst is documenting, for the internal report, how a large intercity-coach operator presents a route for purchase in its app. On the selection step, the pricier Flex fare sits front and centre as an expanded card in strong colour, with a bold heading and a wide select button. The cheaper Saver fare for the very same journey — the better deal for travellers — sits directly below it, shown openly with its price, yet only as a single pale-grey line that all but disappears in the layout and is easy to miss when you tap through quickly. Both fares can be selected in the same place and with the same effort. The analyst notes that the cheaper option is small not for want of space but by design, kept in the background so the eye stays on the higher-margin Flex fare.',
    },
    options: [
      { de: 'Misdirection (Fehlleitung)', en: 'Misdirection' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Misdirection: Beide Fahrpreise stehen offen und sind an derselben Stelle mit demselben Aufwand wählbar — der Hebel liegt nicht in einer Hürde, sondern in einer Salienz-Asymmetrie (der ungleichen Sichtbarkeit zweier gleichwertiger Wege): Die für die Reisenden günstigere Option ist gezielt in den Hintergrund gestaltet — klein, blassgrau, an den Rand gerückt —, damit der Blick bei dem margenstärkeren Flextarif bleibt. Dass hier die vorteilhafte Wahl bewusst zugunsten der Anbieter-Marge zurückgenommen wird, macht das Muster zum Dark Pattern — nicht eine versteckte Gebühr, eine Vorauswahl oder ein beschämender Wortlaut. Legitim einsetzen: Du darfst einen Tarif sichtbar empfehlen — professionell bleibst du, wenn du beide Optionen gleich gut lesbar und gleich leicht auswählbar hältst und deine Hervorhebung dem Interesse der Reisenden folgt, nicht allein der Marge. Erkennen und kontern: Frag dich auf jedem Auswahl- und Abschluss-Screen, welche Option künstlich klein, blass oder an den Rand gerückt ist, lies die unscheinbaren Zeilen bewusst zuerst und stell bei einer Freigabe die gestalterische Balance her, bevor du zustimmst. Subscription Trap / Obstruction (Roach Motel) scheint nah, weil der Sparpreis so schwer auffällt — dort wäre die günstige Wahl aber durch echte Reibung erschwert (Extraschritte, Rückhalte-Screens, eine tief vergrabene Menüebene); hier liegt sie auf demselben Screen und ist mit demselben Aufwand wählbar, nur gestalterisch zurückgenommen. Der Default-/Status-quo-Effekt lockt, weil der dominante Flextarif wie der schon vorgezeichnete Weg wirkt — er griffe aber nur, wenn eine Option tatsächlich vorbelegt oder vorausgewählt wäre; hier musst du aktiv wählen, es trägt dich keine Voreinstellung, und was den Blick zieht, ist die ungleiche Gestaltung.',
      en: 'Misdirection: both fares are shown openly and can be selected in the same place with the same effort — the lever is not a hurdle but a salience asymmetry (the unequal visibility of two equivalent paths): the option that is better for travellers is deliberately kept in the background — small, pale grey, pushed to the edge — so the eye stays on the higher-margin Flex fare. That the beneficial choice is toned down on purpose to protect the provider\'s margin is what makes this a dark pattern, rather than a hidden fee, a pre-selection, or shaming wording. Used legitimately: you may recommend a fare visibly — you stay professional when you keep both options equally readable and equally easy to select and let your emphasis follow the traveller\'s interest, not just the margin. To spot and counter it: on any selection or checkout screen, ask which option is being kept artificially small, faint, or pushed to the edge, deliberately read the inconspicuous lines first, and on any sign-off restore the visual balance before you approve. Subscription trap / obstruction looks close because the Saver fare is so hard to notice — but there the cheaper choice would be burdened with real friction (extra steps, retention screens, a deeply buried menu level); here it sits on the same screen and takes the same effort to select, merely toned down visually. The default / status quo effect tempts because the dominant Flex fare reads like the path already laid out — but it would only apply if an option were actually pre-filled or pre-selected; here you have to choose actively, with no default carrying you, and it is the uneven design that draws the eye.',
    },
    points: 10,
    primaryTechniqueId: 'misdirection',
    relatedTechniques: ['misdirection', 'subscription_trap_obstruction', 'default_status_quo'],
  },
];
