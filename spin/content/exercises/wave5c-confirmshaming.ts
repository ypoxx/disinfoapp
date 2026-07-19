// Welle 5c: 3 Übungen für confirmshaming.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cConfirmshaming: Exercise[] = [
  {
    id: 'wave5c-confirmshaming-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Conversion-Managerin hier ein?',
      en: 'Which technique is the conversion manager using here?',
    },
    scenario: {
      de: 'Freigabe des neuen Exit-Intent-Layers im Onlineshop eines Kosmetikhändlers: Die Conversion-Managerin zeigt der Marketingleitung die finale Version. Wer den 15-Prozent-Gutschein nicht will, klickt auf „Nein, meine Haut ist mir egal" — der Annehmen-Button daneben heißt schlicht „Gutschein sichern".',
      en: 'Sign-off for a new exit-intent layer in the online shop of a cosmetics retailer: the conversion manager shows marketing leadership the final version. Anyone who does not want the 15-percent voucher clicks "No, I don\'t care about my skin" — while the accept button next to it simply reads "Claim voucher".',
    },
    options: [
      { de: 'Confirmshaming', en: 'Confirmshaming' },
      { de: 'Schuldappelle', en: 'Guilt appeals' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Nudging', en: 'Nudging' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Confirmshaming: Der Scham-Hebel steckt im Wortlaut der Ablehn-Option selbst — das Nein wird als Selbstvorwurf formuliert („meine Haut ist mir egal"), während die Zusage neutral bleibt. Das wirkt, weil niemand sich mit einem Klick eine unangenehme Eigenschaft zuschreiben will; die asymmetrische Beschriftung macht das Ablehnen emotional teurer als das Zustimmen. Legitim einsetzen: Du darfst den Ja-Button attraktiv und den Nutzen des Angebots klar machen — professionell bleibt es, solange die Absage sachlich und neutral formuliert ist („Nein danke"), also nicht mit einem Charakterurteil bestraft wird. Erkennen und kontern: Lies immer beide Button-Texte im Paar — sobald das Nein dir eine Eigenschaft (dumm, geizig, verantwortungslos) zuschreibt, ist es Confirmshaming; entschärfe es, indem du die Ablehn-Option neutral neu textest, und verweise im Zweifel auf das Reputationsrisiko. Schuldappelle liegen nahe, weil auch hier ein schlechtes Gefühl erzeugt wird — sie zielen aber auf Schuld gegenüber konkret benannten Betroffenen und stecken im Argument; hier fehlt jeder Dritte, die Scham richtet sich gegen dich selbst und lebt im Button-Text. Verlustaversion wirkt plausibel, weil ein 15-Prozent-Gutschein im Spiel ist und das Nein einen Rabatt kostet — sie rahmt aber das Angebot als drohenden Verlust, ohne der Ablehnung ein Charakterurteil aufzudrücken; der Hebel säße im entgangenen Vorteil, nicht im Selbstvorwurf des Buttons. Nudging schließlich stupst über Defaults und Anordnung (etwa die Button-Prominenz) in eine Richtung, ohne die Wahl moralisch abzuwerten.',
      en: 'Confirmshaming: the shame lever sits in the wording of the decline option itself — the "no" is phrased as a self-accusation ("I don\'t care about my skin"), while the yes stays neutral. It works because nobody wants to assign themselves an unflattering trait with a single click; the asymmetric labelling makes declining emotionally more expensive than accepting. Used legitimately: you may make the yes-button appealing and the offer\'s value clear — it stays professional as long as the decline is worded plainly and neutrally ("No thanks"), not punished with a character verdict. To spot and counter it: always read both button labels as a pair — the moment the "no" assigns you a trait (foolish, cheap, irresponsible), it is confirmshaming; defuse it by rewording the decline neutrally, and flag the reputational risk if needed. Guilt appeals seem close because they too induce a bad feeling — but they aim at guilt towards specifically named victims and live in the argument; here there is no third party at all, the shame is aimed at you and lives in the button text. Loss aversion looks plausible because a 15-percent voucher is at stake and saying no costs a discount — but it frames the offer as an impending loss without pinning a character verdict on the decline; its lever would sit in the forgone benefit, not in the button\'s self-accusation. Nudging, finally, steers via defaults and layout (such as button prominence) without morally devaluing the choice.',
    },
    points: 10,
    primaryTechniqueId: 'confirmshaming',
    relatedTechniques: ['confirmshaming', 'guilt_appeals', 'loss_aversion', 'nudging'],
  },
  {
    id: 'wave5c-confirmshaming-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Website-Texte eines Versicherers. Die Agentur liefert für das Newsletter-Pop-up zwei Buttons: „Ja, ich will abgesichert sein" und daneben, kleiner, „Nein, ich riskiere lieber meine Familie". Der Performance-Kollege verweist auf die guten Klickzahlen im A/B-Test und bittet um deine Freigabe.',
      en: 'You own the website copy of an insurer. For the newsletter pop-up the agency delivers two buttons: "Yes, I want to be protected" and next to it, smaller, "No, I\'d rather put my family at risk". Your performance colleague points to the strong click numbers in the A/B test and asks for your sign-off.',
    },
    options: [
      {
        de: 'Ich lasse den beschämenden Ablehn-Wortlaut neutral neu texten („Nein danke") und behalte den Nutzen im Ja-Button: Der Selbstvorwurf im Button ist der Kern des Confirmshamings und muss raus, während der Ja-Button attraktiv bleiben darf. Das Reputationsrisiko für den Versicherer kommt obendrauf; kurzfristige Klicks wiegen es nicht auf.',
        en: 'I have the shaming decline wording reworded neutrally ("No thanks") and keep the benefit on the yes-button: the self-accusation in the button is the core of the confirmshaming and has to go, while the yes-button may stay appealing. The reputational risk for the insurer comes on top; short-term clicks do not outweigh it.',
      },
      {
        de: 'Ich gebe frei: Der A/B-Test zeigt mehr Klicks, und bei einem Produkt, das Menschen wirklich schützt, darf die Ablehnung ruhig wehtun.',
        en: 'I sign off: the A/B test shows more clicks, and for a product that genuinely protects people, the decline is allowed to sting a little.',
      },
      {
        de: 'Ich streiche das Pop-up komplett — jede emotionale Ansprache im Interface ist manipulativ und gehört bei einem Versicherer grundsätzlich nicht auf die Website.',
        en: 'I scrap the pop-up entirely — any emotional appeal in an interface is manipulative and has no place on an insurer\'s website at all.',
      },
      {
        de: 'Ich behalte beide Buttons, mache aber den Ablehn-Button genauso groß wie den Ja-Button — dann ist die Wahl wieder fair.',
        en: 'I keep both buttons but make the decline button the same size as the yes-button — that makes the choice fair again.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Ablehn-Text ist Confirmshaming: Das Nein wird als Selbstvorwurf gerahmt („ich riskiere lieber meine Familie"), während das Ja neutral-positiv bleibt — die Scham steckt im Wortlaut der Wahl selbst. Die beste Option greift genau dort an: Sie textet den beschämenden Wortlaut neutral um und nimmt damit den Kern des Musters heraus, behält aber den legitimen Teil (attraktiver Ja-Button, klarer Nutzen). Erst danach kommt das Reputationsargument dazu — der Wortlaut ist der primäre Grund, das Reputationsrisiko der zusätzliche. Erkennen und kontern: Prüf jedes Button-Paar darauf, ob die Ablehnung sachlich bleibt oder dich beschämt — sobald sie dir eine Eigenschaft zuschreibt, textest du sie neutral um. Die Freigabe wirkt plausibel, weil der A/B-Test kurzfristig mehr Klicks zeigt — die Evidenz für dauerhaften Nutzen ist aber dünn, plumpe Beschämung kann Ärger und Reaktanz auslösen, und der Flurschaden landet beim Absender. Das Pop-up ganz zu streichen überkorrigiert: Emotionale Ansprache und ein attraktiver Ja-Button sind legitim — das Problem ist allein der beschämende Ablehn-Text, nicht die Ansprache. Beide Buttons gleich groß zu machen behebt nur die visuelle Hierarchie, lässt aber den beschämenden Wortlaut („ich riskiere lieber meine Familie") unberührt — und laut Warnneuron sitzt die Scham im Wortlaut der Wahl selbst, nicht in der Größe.',
      en: 'The decline text is confirmshaming: the "no" is framed as a self-accusation ("I\'d rather put my family at risk"), while the "yes" stays neutral-positive — the shame is in the wording of the choice itself. The best option strikes exactly there: it rewords the shaming label neutrally and removes the core of the pattern, while keeping the legitimate part (an appealing yes-button, a clear benefit). Only then does the reputation argument come in — the wording is the primary reason, the reputational risk the added one. To spot and counter it: check every button pair for whether the decline stays factual or shames you — the moment it assigns you a trait, reword it neutrally. Signing off looks plausible because the A/B test shows more clicks short-term — but the evidence for lasting benefit is thin, crude shaming can trigger anger and reactance, and the fallout lands on the sender. Scrapping the pop-up overcorrects: emotional appeal and an attractive yes-button are legitimate — the problem is solely the shaming decline text, not the appeal. Making both buttons the same size only fixes the visual hierarchy but leaves the shaming wording ("I\'d rather put my family at risk") untouched — and per the warning sign the shame sits in the wording of the choice itself, not in the size.',
    },
    points: 10,
    primaryTechniqueId: 'confirmshaming',
    relatedTechniques: ['confirmshaming'],
  },
  {
    id: 'wave5c-confirmshaming-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Kündigungsstrecke im Abo-Center eines Streamingdienstes: Um das Abo endgültig zu beenden, muss die Nutzerin auf die Schaltfläche „Ich verzichte auf meine Lieblingsserien" tippen; die Alternative daneben lautet „Weiter genießen".',
      en: 'Cancellation flow in the account centre of a streaming service: to end the subscription for good, the user has to tap the button "I give up my favourite shows"; the alternative next to it reads "Keep enjoying".',
    },
    options: [
      { de: 'Confirmshaming', en: 'Confirmshaming' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Abo-Falle / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (Roach Motel)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Confirmshaming: Der Bestätigungs-Button zum Kündigen ist als Selbstvorwurf formuliert („Ich verzichte auf meine Lieblingsserien"), die Alternative bleibt positiv besetzt („Weiter genießen") — die Scham steckt im Wortlaut der Wahl selbst, nicht in einem Argument oder in der Struktur der Strecke. Der Hebel wirkt, weil niemand die eigene Entscheidung mit einem Klick als Verzicht oder Fehler quittieren will. Legitim einsetzen: Du darfst den Verbleib-Button einladend gestalten und den Wert des Abos benennen — professionell bleibt es, solange die Kündigung sachlich beschriftet ist („Abo kündigen"). Erkennen und kontern: Lies die Kündigen-Schaltfläche wörtlich — wenn sie dir Verzicht oder einen Makel in den Mund legt statt neutral „kündigen" zu sagen, ist es Confirmshaming; lass dich davon nicht ausbremsen und tippe trotzdem. Verlustaversion ist hier der schärfste Nachbar, weil der Wortlaut die Kündigung tatsächlich als Verlust rahmt („ich verzichte") — entscheidend ist aber, dass der Verlust als Selbstaussage auf dem Ablehn-Button steht; Verlustaversion würde das Angebot selbst als drohenden Verlust rahmen, nicht die Wahl mit einem Selbstvorwurf beschriften. Abo-Falle / Obstruction (Roach Motel) liegt nahe, weil es um eine Kündigungsstrecke geht — sie erschwert das Kündigen aber über Struktur und Hürden (versteckte Schaltflächen, Extra-Schritte, Warteschleifen), während hier ein einziger klarer Button steht, dessen beschämender Wortlaut allein den Ausschlag gibt.',
      en: 'Confirmshaming: the confirm-cancel button is phrased as a self-accusation ("I give up my favourite shows"), while the alternative stays positive ("Keep enjoying") — the shame is in the wording of the choice itself, not in an argument or in the structure of the flow. The lever works because nobody wants to sign off their own decision as a sacrifice or mistake with a single click. Used legitimately: you may make the stay-button inviting and name the subscription\'s value — it stays professional as long as the cancel option is labelled plainly ("Cancel subscription"). To spot and counter it: read the cancel button literally — if it puts sacrifice or a flaw in your mouth instead of plainly saying "cancel", it is confirmshaming; do not let it slow you down, and tap it anyway. Loss aversion is the sharpest neighbour here, because the wording does frame cancellation as a loss ("I give up") — but what matters is that the loss is written as a self-statement on the decline button; loss aversion would frame the offer itself as an impending loss, not label the choice with a self-accusation. Subscription trap / obstruction (Roach Motel) looks close because this is a cancellation flow — but it obstructs cancelling through structure and hurdles (hidden controls, extra steps, hold loops), whereas here there is a single clear button whose shaming wording alone does the work.',
    },
    points: 10,
    primaryTechniqueId: 'confirmshaming',
    relatedTechniques: ['confirmshaming', 'loss_aversion', 'subscription_trap_obstruction'],
  },
];
