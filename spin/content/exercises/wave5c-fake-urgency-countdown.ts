// Welle 5c: 3 Übungen für fake_urgency_countdown (Fake Urgency / Countdown Timers).
// evidenceTier moderate, kein seriousMode: doppelter Takeaway (legitim einsetzen + erkennen/kontern).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cFakeUrgencyCountdown: Exercise[] = [
  {
    id: 'wave5c-fake_urgency_countdown-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt in diesem Interface?',
      en: 'Which technique is at work in this interface?',
    },
    scenario: {
      de: 'Produkt-Review eines Reiseportals: Auf der Buchungsseite blinkt neben jedem Hotel ein roter Countdown „Dieser Preis endet in 04:59". Lädst du die Seite neu, steht die Uhr wieder bei 04:59 — ein tatsächliches Preisende hinterlegt das System nirgends, der Preis ist auch am nächsten Tag derselbe.',
      en: 'Product review of a travel portal: on the booking page a red countdown flashes next to every hotel, "This price ends in 04:59". Reload the page and the clock is back at 04:59 — the system stores no actual price cut-off anywhere, and the price is the same the next day.',
    },
    options: [
      { de: 'Fake Urgency / Countdown Timers', en: 'Fake Urgency / Countdown Timers' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Verlustaversion', en: 'Loss Aversion' },
      { de: 'Bait-and-Switch', en: 'Bait-and-Switch' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fake Urgency / Countdown Timers: Der Mechanismus ist ein erfundener Zeitdruck — eine tickende Uhr soll die überlegte Prüfung verkürzen, obwohl hinter der Deadline kein nachprüfbares, für alle gleiches Enddatum steht; der Reset beim Neuladen ist der verräterische Beleg. So setzt du Dringlichkeit sauber ein: Nenne einen echten, für alle geltenden Stichtag, den du auch einhältst, statt eine Uhr zu inszenieren. Daran erkennst und konterst du das Muster: Lade die Seite neu oder komm später wieder — läuft der Countdown erneut von vorn oder bleibt der Preis unverändert, ist die Dringlichkeit vorgetäuscht. Die Distraktoren sind echte Nachbarn: Verknappung läge vor, wenn ein tatsächlich begrenzter Bestand („noch 3 Zimmer") den Druck trägt; Verlustaversion beschreibt das dahinterliegende Prinzip (Verluste wiegen schwerer), ist aber keine Interface-Taktik; Bait-and-Switch wäre es erst, wenn der beworbene Preis beim Klick durch einen höheren ersetzt würde.',
      en: 'Fake Urgency / Countdown Timers: the mechanism is invented time pressure — a ticking clock meant to short-circuit deliberation, even though no verifiable, universally applied cut-off sits behind the deadline; the reset on reload is the giveaway. Using urgency cleanly: state a real, universally valid deadline you actually honour instead of staging a clock. Spotting and countering it: reload the page or come back later — if the countdown restarts or the price is unchanged, the urgency is fabricated. The distractors are genuine neighbours: scarcity would apply if a truly limited stock ("3 rooms left") carried the pressure; loss aversion names the underlying principle (losses loom larger) but is not an interface tactic; bait-and-switch would only fit if the advertised price were swapped for a higher one on click.',
    },
    points: 10,
    primaryTechniqueId: 'fake_urgency_countdown',
    relatedTechniques: ['fake_urgency_countdown', 'scarcity', 'loss_aversion', 'bait_and_switch'],
  },
  {
    id: 'wave5c-fake_urgency_countdown-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Conversion-Optimierung im Marketing. Die Agentur schlägt für die Kampagnen-Landingpage einen Countdown „Angebot endet in 10:00" vor, der bei jedem Seitenaufruf neu startet — ein echtes Aktionsende gibt es nicht. Sie verspricht ein spürbares Umsatzplus.',
      en: 'You own conversion optimisation in marketing. The agency proposes a countdown for the campaign landing page, "Offer ends in 10:00", restarting on every page load — there is no real end to the promotion. They promise a noticeable revenue lift.',
    },
    options: [
      {
        de: 'Ich übernehme den Timer — solange niemand das Zurücksetzen bemerkt, hebt er die Conversion, und der Effekt rechtfertigt das Mittel.',
        en: 'I take the timer — as long as nobody notices the reset it lifts conversion, and the outcome justifies the means.',
      },
      {
        de: 'Ich lasse den Countdown weg und ersetze ihn durch einen echten, für alle gleichen Stichtag (Aktionsende Sonntag 23:59), den wir auch einhalten — Dringlichkeit ja, aber nachprüfbar.',
        en: 'I drop the countdown and replace it with a real, universally valid deadline (promotion ends Sunday 23:59) that we actually honour — urgency yes, but verifiable.',
      },
      {
        de: 'Ich behalte den Timer, stelle ihn aber auf 24 statt 10 Minuten — so wirkt er weniger aggressiv und fällt seltener auf.',
        en: 'I keep the timer but set it to 24 instead of 10 minutes — that way it feels less aggressive and gets noticed less often.',
      },
      {
        de: 'Ich tausche den Timer gegen einen „Nur noch 2 verfügbar"-Hinweis, obwohl der Bestand unbegrenzt ist — eine Mengenangabe wirkt seriöser als eine Uhr.',
        en: 'I swap the timer for a "Only 2 left" note even though stock is unlimited — a quantity claim looks more credible than a clock.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Beste Wahl: einen echten, für alle geltenden Stichtag setzen und einhalten. Der Mechanismus der Fake Urgency ist erfundener Zeitdruck, der die Prüfung verkürzt — sobald der Reset auffliegt (und bei ~300 wiederkehrenden Profis fliegt er auf), kippt der kurzfristige Uplift in einen Vertrauens- und Reputationsschaden, und regulatorisch (FTC, CMA/ICO) ist das Muster als irreführend eingestuft. Legitim einsetzen heißt: Dringlichkeit an eine reale Deadline oder einen realen Bestand koppeln, die du belegen kannst. So kontern die falschen Optionen sich selbst: „Effekt rechtfertigt das Mittel" (0) verwechselt kurzfristige Conversion mit nachhaltigem Wert und ignoriert das Täuschungsrisiko; den Timer nur zu verlängern (2) ändert nichts daran, dass die Deadline erfunden bleibt; der Wechsel zu „nur noch 2 verfügbar" (3) ersetzt Fake Urgency bloß durch vorgetäuschte Verknappung — dieselbe Täuschung im Nachbarkostüm.',
      en: 'Best move: set a real, universally valid deadline and honour it. The mechanism of fake urgency is invented time pressure that shortens scrutiny — once the reset is spotted (and with ~300 recurring professionals it will be), the short-term uplift flips into a trust and reputation loss, and regulators (FTC, CMA/ICO) classify the pattern as misleading. Using urgency legitimately means tying it to a real deadline or real stock you can prove. How the wrong options undo themselves: "the outcome justifies the means" (0) mistakes short-term conversion for durable value and ignores the deception risk; merely lengthening the timer (2) does not change that the deadline is invented; switching to "only 2 left" (3) just replaces fake urgency with faked scarcity — the same deception in a neighbouring costume.',
    },
    points: 10,
    primaryTechniqueId: 'fake_urgency_countdown',
    relatedTechniques: ['fake_urgency_countdown', 'scarcity', 'loss_aversion'],
  },
  {
    id: 'wave5c-fake_urgency_countdown-3',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Element ist das Fake-Urgency-Signal?',
      en: 'Which element is the fake-urgency signal?',
    },
    scenario: {
      de: 'E-Commerce-Audit für einen Kunden: Du prüfst die Checkout-Seite auf irreführende Muster. Vier Elemente stehen zur Auswahl — nur eines setzt Zeitdruck ein, den die Sache nicht hergibt.',
      en: 'E-commerce audit for a client: you review the checkout page for misleading patterns. Four elements are on the table — only one applies time pressure the situation does not warrant.',
    },
    options: [
      {
        de: 'Ein Countdown „Warenkorb reserviert – 05:00", der nach Ablauf einfach von vorn beginnt, ohne dass je etwas verfällt.',
        en: 'A countdown "Cart reserved – 05:00" that simply restarts when it hits zero, with nothing ever expiring.',
      },
      {
        de: 'Ein Feld „Gutscheincode" unter der Zahlungsübersicht.',
        en: 'A "Voucher code" field below the payment summary.',
      },
      {
        de: 'Ein Hinweis „Versandkostenfrei ab 50 €" mit korrektem Schwellenwert.',
        en: 'A note "Free shipping from €50" with the correct threshold.',
      },
      {
        de: 'Eine echte Lagerangabe „Noch 3 Stück – Nachbestellung in 2 Wochen", die den tatsächlichen Bestand spiegelt.',
        en: 'A genuine stock note "3 left – restock in 2 weeks" that reflects actual inventory.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Fake-Urgency-Signal ist der Reservierungs-Countdown (0): Der Mechanismus ist erfundener Zeitdruck — die Uhr suggeriert, der Warenkorb verfalle, obwohl sie nach Null einfach neu startet und nichts verloren geht. Legitim wäre Dringlichkeit nur mit einer realen Frist (etwa einer echten Reservierungslogik, die abläuft) oder einem realen Bestand. So erkennst du es: Warte den Ablauf ab oder lade neu — passiert nichts oder springt die Uhr zurück, ist der Druck vorgetäuscht. Die Distraktoren sind bewusst harmlos bzw. ehrlich: Das Gutscheinfeld (1) ist neutrale Funktion, der Versandkosten-Hinweis (2) nennt einen korrekten Schwellenwert ohne Zeitdruck, und die Lagerangabe (3) ist echte Verknappung — sie spiegelt den tatsächlichen Bestand und ist damit gerade kein Dark Pattern, sondern die legitime Schwester der Fake Urgency.',
      en: 'The fake-urgency signal is the reservation countdown (0): the mechanism is invented time pressure — the clock implies the cart will expire, yet it simply restarts after zero and nothing is lost. Urgency would be legitimate only with a real deadline (say a genuine reservation timeout that actually lapses) or real stock. How to spot it: let it run out or reload — if nothing happens or the clock jumps back, the pressure is fabricated. The distractors are deliberately harmless or honest: the voucher field (1) is a neutral function, the shipping note (2) states a correct threshold with no time pressure, and the stock note (3) is genuine scarcity — it reflects real inventory and is therefore not a dark pattern but the legitimate sibling of fake urgency.',
    },
    points: 10,
    primaryTechniqueId: 'fake_urgency_countdown',
    relatedTechniques: ['fake_urgency_countdown', 'scarcity', 'drip_pricing'],
  },
];
