// Backfill: 3 Übungen für embedded_commands (Eingebettete Befehle).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillEmbeddedCommands: Exercise[] = [
  {
    id: 'backfill-embedded_commands-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Webinar-Moderator ein?',
      en: 'Which technique is the webinar host using?',
    },
    scenario: {
      de: 'Produkt-Webinar eines SaaS-Anbieters, live vor angemeldeten Interessenten. Beim Folienwechsel sagt der Moderator beiläufig: „Sie müssen sich das jetzt gar nicht ansehen — aber während Sie gleich das Preismenü öffnen und den Jahresplan wählen, achten Sie ruhig auf das kleine Sparsymbol." Die Handlungsanweisung „Preismenü öffnen und Jahresplan wählen" steckt mitten im Nebensatz, herausgehoben durch eine kurze Pause und leicht gehobene Stimme; der Hauptsatz signalisiert vorgeblich Unverbindlichkeit.',
      en: 'A SaaS provider\'s product webinar, live in front of registered prospects. Changing slides, the host says casually: "You really don\'t have to look at this now — but as you go ahead and open the pricing menu and pick the annual plan, do keep an eye on the little savings icon." The instruction to "open the pricing menu and pick the annual plan" sits buried in the subordinate clause, set off by a short pause and a slightly raised voice; the main clause pretends there is no obligation at all.',
    },
    options: [
      { de: 'Eingebettete Befehle', en: 'Embedded commands' },
      { de: 'Pacing and Leading', en: 'Pacing and leading' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Eingebettete Befehle: Eine konkrete Handlungsaufforderung im Imperativ — „Preismenü öffnen, Jahresplan wählen" — wird in einen Satz eingebettet, dessen Oberfläche etwas anderes tut (eine unverbindliche Beobachtung anbieten), und durch Pause und Betonung markiert. Der Mechanismus: Der Befehl umgeht die bewusste Prüfung, weil der Hauptsatz die Aufmerksamkeit auf sich zieht und der „Sie müssen nicht"-Rahmen jeden Druck bestreitet. Wichtig zur Einordnung: Die empirische Wirkung dieser Muster ist schwach und inkonsistent belegt — verlässlich ist an ihnen vor allem, dass sie verdeckt bleiben, nicht, dass sie zuverlässig steuern. Legitim einsetzen: Eine klare, offen ausgesprochene Handlungsaufforderung ist völlig in Ordnung — „Wenn der Jahresplan passt, wählen Sie ihn hier." Sauber wird es, sobald die Aufforderung im Hauptsatz steht und nicht getarnt ist. Erkennen und kontern: Achte auf Imperative, die in Nebensätzen stecken und durch Betonung oder Pause hervorgehoben werden; sprich die eigentliche Aufforderung laut aus („Sie wollen, dass ich jetzt den Jahresplan wähle"), dann verliert die Tarnung ihre Funktion. Pacing and Leading wirkt verwandt, würde aber erst eine Kette zutreffender Aussagen aufbauen („Sie sitzen gerade am Rechner, Sie haben sich angemeldet …") und dann zur Handlung überleiten — hier fehlt die Zustimmungskette, der Befehl steckt direkt im Satz. Priming würde einen Begriff vorab aktivieren, ohne eine Handlung zu nennen; Framing würde dieselbe Wahl bewertend rahmen („der clevere Plan"), statt eine markierte Anweisung einzuschmuggeln.',
      en: 'Embedded commands: a concrete imperative instruction — "open the pricing menu, pick the annual plan" — is embedded in a sentence whose surface is doing something else (offering a no-obligation observation) and marked out by a pause and stress. The mechanism: the command slips past conscious scrutiny because the main clause holds the attention and the "you don\'t have to" wrapper denies any pressure. Worth keeping in view: the empirical effect of these patterns is weak and inconsistently evidenced — what is reliable about them is mainly that they stay concealed, not that they steer behaviour dependably. Used legitimately: a clear, openly stated call to action is entirely fine — "If the annual plan suits you, choose it here." It stays clean the moment the ask sits in the main clause and is not disguised. To spot and counter it: watch for imperatives lodged in subordinate clauses and highlighted by stress or a pause; say the actual ask out loud ("you want me to pick the annual plan right now"), and the disguise loses its function. Pacing and leading looks related but would first build a chain of accurate statements ("you\'re at your computer, you registered …") and then lead into the action — here there is no agreement chain; the command sits straight in the sentence. Priming would pre-activate a concept without naming an action; framing would cast the same choice in an evaluative light ("the smart plan") rather than smuggle in a marked instruction.',
    },
    points: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'pacing_and_leading', 'priming', 'framing'],
  },
  {
    id: 'backfill-embedded_commands-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Skript-Freigabe vor einem Kunden-Onboarding-Video: Als Kommunikationsverantwortliche eines Softwareanbieters prüfst du das Sprecherskript, das ein externer Rhetoriktrainer geliefert hat. An mehreren Stellen steckt die eigentliche Aufforderung betont in einem Nebensatz, während der Hauptsatz von etwas ganz anderem spricht — etwa: „Sie werden gleich sehen, wie reibungslos der Start läuft, sobald Sie DIE ZUSATZMODULE AKTIVIEREN UND IHR TEAM EINLADEN." Der Trainer nennt das seinen „Konversions-Booster".',
      en: 'Script sign-off before a customer onboarding video: as the communications lead at a software provider, you are vetting the voice-over script an external rhetoric trainer delivered. In several places the actual instruction sits stressed in a subordinate clause while the main clause talks about something else entirely — for instance: "You\'ll see in a moment how smoothly the start goes once you ACTIVATE THE ADD-ON MODULES AND INVITE YOUR TEAM." The trainer calls this his "conversion booster."',
    },
    options: [
      {
        de: 'Ich stelle die Aufforderung offen: Ich schreibe die Stellen so um, dass die Handlung im Hauptsatz klar benannt und begründet ist („Aktivieren Sie die Zusatzmodule, wenn Ihr Team sie braucht — so geht das"). Die getarnten Imperative fliegen raus; eine ehrliche, direkte Aufforderung trägt bei diesem Publikum weiter und hält jeder Nachprüfung stand.',
        en: 'I make the ask explicit: I rewrite those passages so the action is named and justified in the main clause ("Activate the add-on modules if your team needs them — here is how"). The disguised imperatives go; an honest, direct call to action carries further with this audience and survives any scrutiny.',
      },
      {
        de: 'Ich lasse es stehen: Das Muster ist so subtil, dass es niemand bewusst bemerkt, und schaden kann eine zusätzliche Handlungsaufforderung ohnehin nicht.',
        en: 'I leave it in: the pattern is so subtle that no one consciously notices, and an extra nudge to act cannot hurt anyway.',
      },
      {
        de: 'Ich melde nur die auffälligste Stelle zurück und lasse die subtileren Einbettungen stehen — eine oder zwei markierte Aufforderungen, die kaum jemandem auffallen, fallen doch nicht ins Gewicht.',
        en: 'I flag only the most conspicuous spot and leave the subtler embeddings in — one or two marked instructions that hardly anyone notices surely do not matter.',
      },
      {
        de: 'Ich streiche jede Handlungsaufforderung: Das Video beschreibt nur noch die Vorteile der Module, und ob jemand sie aktiviert, überlasse ich vollständig dem Zufall.',
        en: 'I cut every call to action: the video only describes the modules\' benefits, and whether anyone activates them I leave entirely to chance.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Trainer arbeitet mit eingebetteten Befehlen: Der Imperativ „Zusatzmodule aktivieren, Team einladen" steckt betont im Nebensatz, während der beruhigende Hauptsatz („wie reibungslos der Start läuft") die Aufmerksamkeit von der eigentlichen Anweisung wegzieht. Die beste Option behält den legitimen Kern — dein Onboarding-Video darf und soll zum Handeln auffordern — und holt die Aufforderung nur aus der Tarnung in den Hauptsatz, wo sie offen und begründet steht. Option 2 wirkt plausibel, weil „unbemerkt" nach „risikolos" klingt; genau umgekehrt: Wird der Trick doch bemerkt, liest er sich als Manipulationsversuch und beschädigt das Vertrauen, das ein Onboarding gerade aufbauen soll — und die empirische Wirkung solcher Muster ist ohnehin schwach und inkonsistent, du riskierst also Reputation für einen unsicheren Ertrag. Option 3 ist der verführerischste Fehlgriff: Ausgerechnet die auffälligste Stelle zu melden und die subtileren stehen zu lassen behält genau die am besten getarnten Anweisungen — also die, die ein Zuhörer am ehesten übersieht — und liefert am Ende weder ein ehrliches Skript noch ein von der Manipulation befreites; ein halber Fix ist hier keiner. Option 4 überkorrigiert ins Gegenteil — eine klare Aufforderung ist nichts Anrüchiges; sie ganz zu streichen verschenkt Wirkung ohne Not und verwechselt „offen auffordern" mit „manipulieren".',
      en: 'The trainer is using embedded commands: the imperative "activate the add-on modules, invite your team" sits stressed in the subordinate clause while the reassuring main clause ("how smoothly the start goes") pulls attention away from the actual instruction. The best option keeps the legitimate core — your onboarding video may and should prompt action — and merely lifts the ask out of its disguise into the main clause, where it stands openly and with a reason. Option 2 seems plausible because "unnoticed" sounds like "risk-free"; it is the reverse: if the trick is noticed, it reads as an attempted manipulation and damages the very trust an onboarding is meant to build — and the empirical effect of such patterns is weak and inconsistent anyway, so you would be risking reputation for an uncertain return. Option 3 is the most tempting misstep: flagging only the most conspicuous spot and leaving the subtler ones keeps precisely the best-disguised instructions — the very ones a listener is most likely to miss — and in the end delivers neither an honest script nor one cleared of the manipulation; a half fix is no fix here. Option 4 over-corrects into the opposite — a clear ask is nothing disreputable; cutting it entirely forfeits effect for no reason and confuses "asking openly" with "manipulating."',
    },
    points: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'repetition'],
  },
  {
    id: 'backfill-embedded_commands-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Die E-Mail wirkt, indem sie ___.',
      en: 'Complete the sentence: the email works by ___.',
    },
    scenario: {
      de: 'Nachfass-E-Mail eines B2B-Softwareanbieters nach einer Produktdemo, adressiert an die Fachbereichsleiterin. Die eigentliche Aufforderung steht — in Versalien hervorgehoben — mitten in einem Satz, der vordergründig nur den nächsten Gesprächstermin ankündigt: „Damit wir nächste Woche über echte Zahlen sprechen und nicht über Folien, RICHTEN SIE VORHER DEN PILOTZUGANG EIN UND LADEN IHR TEAM EIN." Allein die Großschreibung hebt die Handlungsphrase heraus; der Satz selbst organisiert an der Oberfläche nur das Meeting.',
      en: 'A follow-up email from a B2B software vendor after a product demo, addressed to the department head. The actual instruction stands — set in capitals — in the middle of a sentence that ostensibly only announces the next meeting: "So that next week we talk about real numbers rather than slides, SET UP THE PILOT ACCESS BEFOREHAND AND INVITE YOUR TEAM." The capitalisation alone lifts the action phrase out; on its surface the sentence merely arranges the meeting.',
    },
    options: [
      {
        de: 'eine Handlungsaufforderung („Pilotzugang einrichten, Team einladen") in einen Satz einbettet, der vordergründig nur ein Meeting ankündigt, und sie durch Versalien markiert (Eingebettete Befehle)',
        en: 'embedding an instruction ("set up pilot access, invite your team") in a sentence that ostensibly only announces a meeting and marking it with capitals (embedded commands)',
      },
      {
        de: 'ausdrücklich die Entscheidungsfreiheit der Empfängerin betont, um deren Widerstand gegen die Bitte abzubauen (But-You-Are-Free / Autonomiebetonung)',
        en: 'expressly affirming the recipient\'s freedom to choose in order to lower her resistance to the request (but-you-are-free / autonomy affirmation)',
      },
      {
        de: 'erst mit zutreffenden Aussagen Zustimmung aufbaut und dann zur gewünschten Handlung überleitet (Pacing und Leading)',
        en: 'first building agreement with accurate statements and then leading into the desired action (pacing and leading)',
      },
      {
        de: 'die Wahl in eine bewertende Perspektive rückt, sodass der Pilotstart als die kluge Option erscheint (Framing)',
        en: 'casting the choice in an evaluative light so that starting the pilot appears to be the smart option (framing)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Eingebettete Befehle: Der eigentliche Imperativ „Pilotzugang einrichten und Team einladen" ist in einen Satz gepackt, der vordergründig nur den Folgetermin organisiert — und im geschriebenen Kanal übernimmt die Versalienschreibung die Rolle, die im Gespräch Betonung und Pause spielen: Sie hebt die Handlungsphrase heraus, ohne sie als Aufforderung auszuweisen. Genau diese Tarnung ist das Kennzeichen; die empirische Steuerungswirkung selbst ist schwach belegt. Legitim einsetzen: Setz deine Handlungsaufforderung sichtbar als eigenen Satz und begründe sie — „Bitte richten Sie den Pilotzugang bis Donnerstag ein, dann arbeiten wir im Termin mit Ihren echten Zahlen." Sauberes Handwerk zeigt die Bitte, statt sie zu verstecken. Erkennen und kontern: Lies den Satz einmal ohne die Hervorhebung und frag dich, was übrig bleibt — steckt darin eine Anweisung, die der Hauptsatz gar nicht ankündigt, ist der Hebel entlarvt; benenne ihn dann ausdrücklich als das, was er ist. Antwort 2 (But-You-Are-Free) beschreibt einen echten Nachbarn — das ausdrückliche Betonen der Wahlfreiheit —, doch der Text enthält gar keine Freiheitsformel; er markiert eine Handlung, statt Autonomie zu beteuern. Pacing und Leading bräuchte eine vorangehende Kette zutreffender Aussagen, auf die eine Führung aufsetzt — die fehlt hier. Framing würde den Pilotstart bewertend aufladen („der kluge erste Schritt"), statt eine getarnte Anweisung einzuschmuggeln.',
      en: 'Embedded commands: the actual imperative "set up pilot access and invite your team" is packed into a sentence that ostensibly only arranges the follow-up meeting — and in the written channel the capitalisation takes on the role that stress and a pause play in speech: it lifts the action phrase out without labelling it as a request. That disguise is the hallmark; the steering effect itself is weakly evidenced. Used legitimately: put your call to action visibly as its own sentence and give a reason — "Please set up the pilot access by Thursday, so we can work with your real numbers in the meeting." Clean craft shows the request rather than hiding it. To spot and counter it: read the sentence once without the emphasis and ask what remains — if it contains an instruction the main clause never announced, the lever is exposed; then name it plainly for what it is. Answer 2 (but-you-are-free) describes a genuine neighbour — expressly stressing freedom of choice — but the text contains no freedom formula at all; it marks an action rather than protesting autonomy. Pacing and leading would need a preceding chain of accurate statements for a lead to build on — that is missing here. Framing would charge the pilot start evaluatively ("the smart first step") rather than smuggle in a disguised instruction.',
    },
    points: 10,
    primaryTechniqueId: 'embedded_commands',
    relatedTechniques: ['embedded_commands', 'but_you_are_free', 'pacing_and_leading', 'framing'],
  },
];
