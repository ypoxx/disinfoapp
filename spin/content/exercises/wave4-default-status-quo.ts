// Welle R4: 3 Übungen für default_status_quo (Default-/Status-quo-Effekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4DefaultStatusQuo: Exercise[] = [
  {
    id: 'w4-default_status_quo-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Anbieter hier ein?',
      en: 'Which technique is the vendor using here?',
    },
    scenario: {
      de: 'Buchungsstrecke eines Presseverteiler-Dienstes, die der Junior-Berater einer PR-Agentur für einen Kundenversand durchklickt: Im Bestellformular ist die Laufzeit „12 Monate, verlängert sich automatisch" vorausgewählt; die Alternative „Einzelversand ohne Bindung" steht sichtbar direkt darunter und ließe sich mit einem Klick wählen. Beide Preise sind korrekt und vollständig ausgewiesen, die Kündigung ginge später formlos per E-Mail.',
      en: 'Checkout flow of a press-distribution service that a junior consultant at a PR agency is clicking through for a client mailing: the order form has "12 months, renews automatically" pre-selected; the alternative "single mailing, no commitment" sits visibly right below it, one click away. Both prices are stated correctly and in full, and cancelling later would take a simple e-mail.',
    },
    options: [
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Default-/Status-quo-Effekt: Die Voreinstellung wirkt wie eine implizite Empfehlung, und der Weg des geringsten Aufwands führt zum Abo — wer einfach durchklickt, hat die Zwölf-Monats-Bindung gewählt, ohne sich je aktiv dafür zu entscheiden. Nichts ist versteckt, nichts erschwert; der Hebel ist allein, welche Option ohne Zutun gilt. Legitim einsetzen: Defaults sind seriöses Handwerk, wenn die Voreinstellung dem mutmaßlichen Kundeninteresse dient und offen begründet wird — etwa die datensparsamste oder die meistgewählte Variante. Erkennen und kontern: Prüfe bei jedem Formular, was passiert, wenn du nichts änderst — und triff die Laufzeitentscheidung aktiv, als wäre kein Feld vorbelegt. Sneaking wirkt plausibel, weil auch dort ungewollt ein Posten im Warenkorb landet — Sneaking schiebt ihn aber verdeckt hinein, während hier beide Optionen samt Preis offen sichtbar sind. Die Subscription Trap liegt nahe, weil ein Abo entsteht — sie bezeichnet aber erschwerte Ausstiege (Hotlines, Kündigungshürden); hier wäre die Kündigung ausdrücklich formlos möglich. Drip Pricing passt scheinbar, weil es um Buchungsstrecken und Kosten geht — dort tröpfeln Zusatzkosten erst spät in den Bestellprozess, hier sind alle Preise von Anfang an vollständig ausgewiesen.',
      en: 'Default / status quo effect: the pre-selection reads as an implicit recommendation, and the path of least effort leads to the subscription — anyone who just clicks through has "chosen" the twelve-month commitment without ever actively deciding on it. Nothing is hidden, nothing is obstructed; the lever is solely which option applies when you do nothing. Used legitimately: defaults are honest craft when the pre-set option serves the customer\'s likely interest and is openly justified — say, the most privacy-friendly or the most commonly chosen option. To spot and counter it: for every form, check what happens if you change nothing — and make the term decision actively, as if no field were pre-filled. Sneaking looks plausible because there, too, an unwanted item ends up in the basket — but sneaking slips it in covertly, whereas here both options and their prices are in plain view. The subscription trap seems close because a subscription results — but it denotes obstructed exits (hotlines, cancellation hurdles); here cancelling would explicitly take a simple e-mail. Drip pricing appears to fit because checkout flows and costs are involved — but there, extra charges trickle in late in the process, while here all prices are fully stated from the start.',
    },
    points: 10,
    primaryTechniqueId: 'default_status_quo',
    relatedTechniques: ['default_status_quo', 'sneaking', 'subscription_trap_obstruction', 'drip_pricing'],
  },
  {
    id: 'w4-default_status_quo-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation. Vier Wochen vor Vertragsende eures Social-Listening-Tools schreibt dir der Key-Account-Manager: „Gute Nachricht: Ihr Vertrag verlängert sich automatisch um zwölf Monate — Sie müssen nichts weiter tun." Das Tool wird im Team gemischt bewertet; eine Kündigung wäre formlos per E-Mail möglich.',
      en: 'You head corporate communications. Four weeks before your social listening tool\'s contract expires, the key account manager writes: "Good news: your contract renews automatically for twelve months — no action needed on your side." Your team is split on the tool; cancelling would take a simple e-mail.',
    },
    options: [
      {
        de: 'Ich mache aus der Voreinstellung eine aktive Entscheidung: Termin vor Fristablauf, kurze Team-Bewertung, Blick auf zwei Alternativen — verlängert wird nur nach einem bewussten Ja, sonst kündige ich fristgerecht.',
        en: 'I turn the default into an active decision: a meeting before the deadline, a short team review, a look at two alternatives — we renew only after a deliberate yes; otherwise I cancel within the notice period.',
      },
      {
        de: 'Ich tue nichts: Das Tool läuft, das Team ist eingearbeitet, und der Anbieter hat den Prozess ja bewusst so bequem gestaltet — kein Handlungsbedarf ist auch eine Antwort.',
        en: 'I do nothing: the tool is running, the team is trained, and the vendor deliberately made the process this convenient — no action needed is an answer, too.',
      },
      {
        de: 'Ich kündige sofort: Automatische Verlängerungen sind ein unseriöses Druckmittel — mit Anbietern, die so arbeiten, beenden wir die Zusammenarbeit grundsätzlich.',
        en: 'I cancel immediately: automatic renewals are an underhanded pressure tactic — we end the relationship with any vendor who works this way, on principle.',
      },
      {
        de: 'Ich antworte dem Key-Account-Manager, dass wir die automatische Verlängerung mitnehmen, und bitte im Gegenzug um zehn Prozent Treuerabatt.',
        en: 'I reply to the key account manager that we will go along with the automatic renewal and ask for a ten percent loyalty discount in return.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Anbieter setzt auf den Default-/Status-quo-Effekt: Die Verlängerung ist der Zustand, der ohne Zutun eintritt — „Sie müssen nichts weiter tun" rahmt Nichtstun als bequemen Normalfall und verschiebt den gesamten Entscheidungsaufwand auf den Ausstieg. Die beste Option neutralisiert genau das: Ein Termin vor Fristablauf ersetzt den Automatismus durch einen aktiven Entscheidungspunkt, und die Bewertung samt Alternativen stellt die Frage neu, die der Default überspringt — würden wir heute wieder abschließen? Legitim einsetzen: Auch du darfst in eigenen Angeboten mit Verlängerungs-Defaults arbeiten — professionell bleibt es, wenn du rechtzeitig und aktiv an das Fristende erinnerst und der Ausstieg so einfach ist wie der Verbleib. Erkennen und kontern: Werde aufmerksam, sobald „nichts tun" zum Abschluss führt — und lege dir für jeden Auto-Renewal-Vertrag einen Prüftermin vor die Frist. Nichtstun wirkt plausibel, weil das Tool ja läuft und niemand drängt — genau darin liegt der Effekt: Die Bequemlichkeit ersetzt die Prüfung, und der Anbieter hat faktisch für euch entschieden. Die Sofort-Kündigung überkorrigiert: Automatische Verlängerungen sind verbreitet und rechtlich wie praktisch legitim; das Problem ist nicht der Default, sondern eine ungeprüfte Entscheidung — vielleicht ist das Tool die richtige Wahl. Der Treuerabatt wirkt wie aktives Verhandeln, akzeptiert aber die Verlängerung als gesetzt: Verhandelt wird nur noch der Preis des Status quo, nicht die eigentliche Frage, ob das Tool bleiben soll.',
      en: 'The vendor is running the default / status quo effect: renewal is what happens without any action — "no action needed" frames doing nothing as the convenient normal case and shifts the entire decision effort onto the exit. The best option neutralises exactly that: a meeting before the deadline takes the renewal off autopilot and replaces it with an active decision point, and the review with alternatives re-asks the question the default skips — would we sign again today? Used legitimately: you too may work with renewal defaults in your own offerings — it stays professional when you actively remind clients of the deadline in good time and leaving is as easy as staying. To spot and counter it: take notice whenever "doing nothing" closes a deal — and put a review date before the deadline of every auto-renewing contract. Doing nothing looks plausible because the tool is running and nobody is pushing — which is precisely the effect: convenience replaces scrutiny, and the vendor has effectively decided for you. Cancelling immediately overcorrects: automatic renewals are common and legitimate, legally and practically; the problem is not the default but an unexamined decision — the tool might well be the right choice. The loyalty discount feels like active negotiating but accepts the renewal as given: you end up negotiating only the price of the status quo, not the actual question of whether the tool should stay.',
    },
    points: 10,
    primaryTechniqueId: 'default_status_quo',
    relatedTechniques: ['default_status_quo', 'nudging', 'loss_aversion'],
  },
  {
    id: 'w4-default_status_quo-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster erklärt die hohe Quote am ehesten?',
      en: 'Which pattern most plausibly explains the high rate?',
    },
    scenario: {
      de: 'Jour fixe mit dem Kommunikationschef: Die Referentin für interne Kommunikation präsentiert die Halbjahreszahlen der neuen Mitarbeiter-App — „82 Prozent Opt-in-Quote bei den Push-Benachrichtigungen, die Belegschaft will das Format." Die Push-Meldungen waren bei der Einführung für alle aktiviert; deaktivieren lassen sie sich jederzeit mit zwei Fingertipps in den Einstellungen.',
      en: 'Weekly check-in with the head of communications: the internal comms officer presents the new employee app\'s half-year figures — "an 82 percent opt-in rate for push notifications; the workforce wants this format." Push notifications were switched on for everyone at launch; turning them off takes two taps in the settings at any time.',
    },
    options: [
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Sludge / Bad Friction', en: 'Sludge / bad friction' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Default-/Status-quo-Effekt: Die Pushs waren voraktiviert — die 82 Prozent messen also vor allem, wie viele Beschäftigte die Voreinstellung nie angerührt haben, nicht, wie viele sich aktiv dafür entschieden haben. Aus einem Opt-out-Zustand wird rhetorisch eine „Opt-in-Quote" und damit ein Akzeptanzbeleg. Legitim einsetzen: Voraktivierte Kanäle können bei relevanten Pflichtinformationen vertretbar sein — professionell bleibt es, wenn du die Zahl ehrlich als Opt-out-Quote ausweist und Akzeptanz zusätzlich aktiv misst, etwa über Öffnungsraten oder eine Befragung. Erkennen und kontern: Frag bei jeder Zustimmungs- oder Nutzungsquote zuerst, was die Voreinstellung war — Kennzahlen aus Defaults belegen Trägheit, nicht Zustimmung. Social Proof wirkt plausibel, weil die 82 Prozent wie ein „alle machen mit"-Argument auftreten — Social Proof wäre aber der Hebel, mit dem man andere über das Verhalten der Mehrheit überzeugt; hier geht es darum, wie die Quote überhaupt zustande kam. Sludge liegt nahe, weil man an Hürden beim Abschalten denken könnte — doch das Deaktivieren ist ausdrücklich einfach; es braucht keine Reibung, die bloße Voreinstellung genügt.',
      en: 'Default / status quo effect: push notifications were pre-enabled — so the 82 percent mostly measures how many employees never touched the default, not how many actively chose it. An opt-out state is rhetorically converted into an "opt-in rate" and thereby into proof of acceptance. Used legitimately: pre-enabled channels can be defensible for genuinely essential information — it stays professional when you honestly label the number as an opt-out rate and measure acceptance actively on top, via open rates or a survey. To spot and counter it: whenever you see a consent or usage rate, first ask what the default was — metrics born from defaults prove inertia, not endorsement. Social proof looks plausible because the 82 percent poses as an "everyone is on board" argument — but social proof would be the lever of persuading others via the majority\'s behaviour; the question here is how the rate came about in the first place. Sludge seems close because you might suspect hurdles around switching off — yet deactivating is explicitly easy; no friction is needed; the default alone does the work.',
    },
    points: 10,
    primaryTechniqueId: 'default_status_quo',
    relatedTechniques: ['default_status_quo', 'social_proof', 'sludge'],
  },
];
