// Band-Übung ADVANCED für gaslighting (Gaslighting).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner, sachlicher Ton, keine
// spielerischen Elemente, kein "legitim einsetzen"; die Übung prüft NUR
// Erkennen und Schutz der Betroffenen. Evidenz-Tier weak: keine Wirkbehauptungen.
// Zielband ADVANCED (komplementär zum intermediate-Band der wave6-Übungen):
// Technik subtil/eingebettet, ruhiger Ton, keine Cue-Wörter,
// Near-Miss-Distraktoren, Multi-Satz-Szenario, blinde Klassifikation.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const bandGaslighting: Exercise[] = [
  {
    id: 'band-gaslighting-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster liegt hier vor?',
      en: 'Which pattern is at work here?',
    },
    scenario: {
      de: 'Rückblick auf ein halbes Jahr in einer Kommunikationsagentur: Zwischen der Etatdirektorin und ihrem Projektleiter läuft es nach einem festen Ablauf. Verweist er im Jour fixe auf das freigegebene Briefing-Protokoll, entgegnet sie ruhig, das Dokument halte „nur die Stimmung fest, nicht das, was wir wirklich beschlossen haben" — vereinbart worden sei im Flurgespräch etwas anderes, woran er sich offenbar nicht mehr erinnere. Zieht er die abgestimmte Timeline heran, erklärt sie sachlich, er „vermenge schon wieder zwei Gesprächsstränge", und gibt zu bedenken, er habe zuletzt „viel um die Ohren gehabt". Inzwischen lässt er sich Zusagen doppelt per Mail bestätigen, gleicht seine eigenen Notizen mehrfach ab und bringt strittige Punkte im Jour fixe lieber gar nicht erst zur Sprache.',
      en: 'Looking back over six months at a communications agency: the account director and her project lead have settled into a fixed routine. When he points, in the weekly team meeting, to the signed-off briefing minutes, she calmly replies that the document "only captures the mood, not what we actually decided" — the real agreement, she says, was reached in a hallway chat he evidently no longer remembers. When he pulls up the agreed timeline, she matter-of-factly tells him he is "conflating two separate discussions again" and gently notes he has "had a lot on his plate lately". By now he has commitments confirmed twice over by email, cross-checks his own notes several times, and would rather not raise contested points in the weekly team meeting at all.',
    },
    options: [
      { de: 'Gaslighting (Realität systematisch in Zweifel ziehen)', en: 'Gaslighting (systematically casting doubt on reality)' },
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (Deny, Attack, Reverse Victim and Offender)' },
      { de: 'Coercive Control (Zwang & Kontrolle)', en: 'Coercive control' },
      { de: 'Paltering (irreführende Teilwahrheit)', en: 'Paltering (misleading half-truth)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gaslighting: Entscheidend ist nicht, dass eine einzelne Absprache bestritten wird. Belegte Realität — Protokoll, abgestimmte Timeline, abgezeichnete Freigabe — wird systematisch als unzuverlässig umgedeutet, und der Zweifel wandert auf die Person selbst („du vermengst schon wieder Gesprächsstränge", „du hattest viel um die Ohren"). So verliert der Projektleiter nach und nach das Vertrauen in die eigene Wahrnehmung. Der ruhige, vernünftige Ton ist Teil des Musters, nicht sein Gegenbeweis. Schutzhinweis: Deine Dokumentation ist der Ankerpunkt, den diese Taktik auflösen will — sichere Protokolle, Freigaben und Chatverläufe außerhalb der Reichweite der anderen Person, halte Vereinbarungen sofort schriftlich und nachvollziehbar fest (nicht im Flurgespräch) und lass dir Beschlüsse von Mitwissenden bestätigen, solange die Erinnerung frisch ist. Erkennen und kontern: Trenne im Gespräch die belegbare Sachebene („Liegt das freigegebene Protokoll vor?") von der Unterstellung über deinen Kopf hinweg („Du verwechselst ständig etwas"); bleib bei den Belegen, bestehe darauf, Strittiges am dokumentierten Stand zu klären, und lass keine unverifizierbare „Flurabsprache" die dokumentierte Fassung überschreiben. DARVO lag nahe, weil auch hier belegte Zusagen glatt abgestritten werden — dort kippt die Person unter Vorwurf aber ins Gegenteil und macht die Betroffene zur eigentlichen Täterin; hier gibt es keine Rollenumkehr, sondern die gezielte Untergrabung ihrer Realitätssicht. Coercive Control wirkte plausibel, weil das Muster über Monate läuft und schleichend Dominanz aufbaut — Zwang & Kontrolle ist aber der Oberbegriff für ein ganzes Bündel aus Isolation, Überwachung, Drohung und Regelsetzung; hier greift genau ein Hebel daraus, das Untergraben der Wahrnehmung, und der heißt für sich Gaslighting. Paltering wirkte plausibel, weil die „nur die Stimmung"-Formel wie eine geschickte Teilwahrheit klingt — Paltering führt jedoch mit technisch Zutreffendem in die Irre, um eine einzelne Sachfrage zu drehen; hier geht es nicht um ein einzelnes Faktum, sondern darum, das Vertrauen in die eigene Erinnerung dauerhaft aufzulösen.',
      en: 'Gaslighting: what matters is not that a single agreement is denied. Documented reality — the minutes, the agreed timeline, the signed-off approval — is systematically reframed as unreliable, and the doubt is shifted onto the person himself ("you\'re conflating separate discussions again", "you\'ve had a lot on your plate"). Step by step, the project lead loses trust in his own perception. The calm, reasonable tone is part of the pattern, not evidence against it. Protective note: your documentation is the anchor this tactic sets out to dissolve — secure minutes, approvals and chat histories beyond the other person\'s reach, record agreements in writing and traceably right away (not in a hallway chat), and have people who were there confirm decisions while the memory is still fresh. To spot and counter it: in the moment, separate the verifiable factual level ("Do the signed-off minutes exist?") from the claim made over your head ("You\'re always confusing things"); stay on the evidence, insist on settling disputes against the documented record, and never let an unverifiable "hallway agreement" overwrite the documented version. DARVO was close because here too documented commitments are flatly denied — but in DARVO the person, once accused, flips it around and recasts the affected party as the real offender; here there is no role reversal, just the deliberate undermining of one\'s sense of reality. Coercive control seemed plausible because the pattern runs for months and quietly builds dominance — but coercive control is the umbrella term for a whole bundle of isolation, monitoring, threats and rule-setting; here exactly one lever from it is at work, the undermining of perception, and on its own that is called gaslighting. Paltering seemed plausible because the "only the mood" line sounds like a deft half-truth — but paltering misleads with technically accurate statements to spin a single factual question; here it is not about a single fact but about permanently dissolving one\'s trust in one\'s own memory.',
    },
    points: 10,
    primaryTechniqueId: 'gaslighting',
    relatedTechniques: ['gaslighting', 'darvo', 'coercive_control', 'paltering_half_truth'],
  },
];
