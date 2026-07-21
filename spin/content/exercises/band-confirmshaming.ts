// Band-Übung (BEGINNER): 1 Übung für die bestehende Technik 'confirmshaming'.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Blatant, in <10s aus Oberflächen-Cues lösbar. Das Szenario ist bewusst
// leichter als die intermediate-Übungen in wave5c-confirmshaming.ts. Die
// Erklärung folgt dennoch dem vollen Bauplan: Mechanismus, doppelter Takeaway
// (sauber einsetzen + erkennen & kontern) und Distraktor-Aufklärung.

import type { Exercise } from '../types';

export const bandConfirmshaming: Exercise[] = [
  {
    id: 'band-confirmshaming-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Double-Opt-in-Dialog eines Firmen-Newsletters: Eine CRM-Redakteurin gestaltet die Anmeldestrecke für die Abonnent:innen so, dass der Ablehn-Button „Nein, ich bleibe lieber schlecht informiert" heißt. Der Button daneben, der die Anmeldung bestätigt, heißt schlicht „Newsletter abonnieren".',
      en: 'Double opt-in dialog for a company newsletter: a CRM editor designs the sign-up flow so that, for the subscribers, the decline button reads "No, I\'d rather stay poorly informed", while the button beside it, which confirms the subscription, simply reads "Subscribe to the newsletter".',
    },
    options: [
      { de: 'Confirmshaming', en: 'Confirmshaming' },
      { de: 'Schuldappelle', en: 'Guilt appeals' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Confirmshaming: Der Ablehn-Button wertet das Nein ab („ich bleibe lieber schlecht informiert"), während die Zusage neutral bleibt („Newsletter abonnieren"). Der Hebel setzt darauf, dass sich kaum jemand per Klick selbst einen Makel bescheinigt — und das Kennzeichen ist eindeutig: Die Abwertung steht im Button-Text, nicht in einem Argument daneben. So machst du es sauber (legitime Praxis): Beschrifte beide Optionen sachlich mit dem, was sie tun — „Newsletter abonnieren" und „Nein danke". Der Ja-Button darf einladend sein; nur der Selbstvorwurf im Nein hat dort nichts zu suchen. Erkennen und kontern: Lies allein den Ablehn-Button — beschimpft er dich (dumm, geizig, uninformiert)? Dann ist es der Trick; klick ihn trotzdem, die Wertung ist Design, keine Aussage über dich. Schuldappelle wären es, wenn der Text dir vorhielte, du schadest anderen; hier trifft der Vorwurf nur dich selbst. Verlustaversion wäre es, wenn der Button den entgangenen Vorteil betonte („dir entgehen die Neuigkeiten") — hier steht aber ein Selbstvorwurf, kein Verlust.',
      en: 'Confirmshaming: the decline button belittles the no ("I\'d rather stay poorly informed"), while the accept option stays neutral ("Subscribe to the newsletter"). The lever banks on few people being willing to click a button that brands them as deficient — and the tell is unmistakable: the put-down sits in the button text, not in any argument beside it. To do it cleanly (the legitimate practice): label both options plainly for what they do — "Subscribe to the newsletter" and "No thanks". The yes-button may be inviting; it is only the self-reproach on the no that has no place there. To spot and counter it: read the decline button on its own — does it insult you (foolish, cheap, uninformed)? Then it is the trick; click it anyway, the judgement is design, not a statement about you. It would be guilt appeals if the text charged you with harming others; here the reproach lands only on you. It would be loss aversion if the button stressed the forgone benefit ("you\'ll miss out on the news") — but what sits on the button is a self-accusation, not a loss.',
    },
    points: 10,
    primaryTechniqueId: 'confirmshaming',
    relatedTechniques: ['confirmshaming', 'guilt_appeals', 'loss_aversion'],
  },
];
