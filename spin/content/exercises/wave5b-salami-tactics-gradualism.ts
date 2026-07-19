// Welle 5b: 3 Übungen für salami_tactics_gradualism (Salamitaktik / Gradualismus).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bSalamiTacticsGradualism: Exercise[] = [
  {
    id: 'wave5b-salami_tactics_gradualism-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik setzt der Vertriebsleiter hier ein?',
      en: 'Which technique is the sales director using here?',
    },
    scenario: {
      de: 'Compliance-Review der Reisekostenrichtlinie: Über ein Jahr hebt der Vertriebsleiter die Grenze für genehmigungsfreie Bewirtungen in jeder Quartalsaktualisierung um 20 Euro an und begründet jeden Schritt mit dem jeweils zuletzt gültigen Wert. Keine einzelne Anhebung fällt im Review auf; kumuliert liegt die Grenze am Jahresende beim Doppelten, ohne dass die Erhöhung je als solche beschlossen wurde.',
      en: 'Compliance review of the travel-expense policy: over the course of a year the sales director raises the threshold for hospitality that needs no sign-off by 20 euros in every quarterly update, justifying each step with the value most recently in force. No single raise stands out in the review; cumulatively the threshold has doubled by year-end, without the increase ever being decided as such.',
    },
    options: [
      { de: 'Salamitaktik (Gradualismus)', en: 'Salami Tactics (Gradualism)' },
      { de: 'Slippery Slope (Dammbruchargument)', en: 'Slippery slope' },
      { de: 'Foot-in-the-Door (Konsistenz-Hebel)', en: 'Foot-in-the-door (consistency lever)' },
      { de: 'Ankereffekt (Referenzpunkt-Verschiebung)', en: 'Anchoring (reference-point shift)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Salamitaktik: Der Vertriebsleiter treibt selbst eine Reihe kleiner Schritte in dieselbe Richtung und hält jeden knapp unterhalb der Schwelle, an der jemand widerspräche — der jeweils zuletzt erreichte Stand wird zum Maßstab für den nächsten, sodass das Gesamtziel (Verdopplung der Grenze) nie als Ganzes zur Entscheidung steht. Legitim einsetzen: Eine Regel schrittweise auszurollen ist professionell, wenn das Ziel offen benannt ist und der kumulierte Endstand jederzeit als Ganzes geprüft werden kann. Erkennen und kontern: Du erkennst das Muster daran, dass jeder Schritt gegen den vorherigen statt gegen einen festen Referenzstand bewertet wird — leg die Einzelschritte über den ganzen Zeitraum nebeneinander und beurteile die Summe als eine Entscheidung. Beim Slippery Slope ist die Rolle umgekehrt: Dort warnt jemand vor der Kette, um einen Schritt zu verhindern — hier geht jemand die Schritte tatsächlich. Foot-in-the-Door nutzt eine einzelne kleine Zusage, um danach eine deutlich größere Bitte durchzusetzen (ein Sprung) — die Salamitaktik vermeidet gerade den Sprung, jeder Schritt bleibt bewusst klein. Der Ankereffekt verschiebt mit einem einzigen vorgegebenen Referenzwert die Beurteilung einer folgenden Zahl — hier wird dagegen real eine Kette von Schritten vollzogen, und der Anker wandert mit jedem Schritt weiter.',
      en: 'Salami tactics: the sales director himself drives a run of small steps in the same direction, keeping each just below the threshold at which someone would object — the level last reached becomes the yardstick for the next, so the overall goal (doubling the threshold) never comes up for decision as a whole. Used legitimately: rolling out a rule in stages is professional when the goal is stated openly and the cumulative end state can be reviewed as a whole at any time. To spot and counter it: you recognise the pattern when each step is judged against the previous one rather than a fixed reference point — line up the individual steps across the entire period and judge the sum as a single decision. With the slippery slope the role is reversed: there someone warns of the chain to block a step — here someone actually takes the steps. Foot-in-the-door uses one small commitment to then push through a markedly larger request (a jump) — salami tactics deliberately avoids the jump, keeping every step small. Anchoring shifts the judgement of a single following figure by supplying one reference value — here, by contrast, a chain of real steps is actually carried out, and the anchor drifts further with every step.',
    },
    points: 10,
    primaryTechniqueId: 'salami_tactics_gradualism',
    relatedTechniques: ['salami_tactics_gradualism', 'slippery_slope', 'consistency', 'anchoring'],
  },
  {
    id: 'wave5b-salami_tactics_gradualism-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die rechtliche Freigabe der Nachhaltigkeits-Claims im Kundenmagazin. Dir fällt auf, dass die Agentur die CO2-Aussage seit Monaten in jeder Ausgabe minimal verstärkt — jede einzelne Änderung liegt knapp innerhalb dessen, was du zuletzt durchgewunken hast, doch die aktuelle Fassung verspricht spürbar mehr als die von vor einem Jahr.',
      en: 'You are responsible for the legal sign-off of the sustainability claims in the customer magazine. You notice that the agency has been strengthening the carbon claim by a fraction in every issue for months — each individual change sits just within what you last waved through, yet the current wording promises noticeably more than the one from a year ago.',
    },
    options: [
      {
        de: 'Ich lege die Fassungen der letzten zwölf Monate nebeneinander und bewerte den kumulierten Sprung als eine Aussage — dann lege ich einen belegbaren Referenzstand fest, gegen den künftig jede Ausgabe geprüft wird, nicht gegen die jeweils letzte.',
        en: 'I line up the past twelve months of wording and assess the cumulative jump as a single claim — then I fix an evidence-backed reference point against which every future issue is checked, not against the most recent one.',
      },
      {
        de: 'Ich gebe auch diese Ausgabe frei — die Änderung ist gegenüber der letzten Fassung minimal und für sich genommen nicht zu beanstanden.',
        en: 'I sign this issue off too — the change is minimal compared with the last version and, taken on its own, gives no grounds for objection.',
      },
      {
        de: 'Ich stoppe sämtliche Nachhaltigkeits-Claims sofort und untersage der Agentur jede weitere Formulierung zum Thema.',
        en: 'I halt all sustainability claims at once and forbid the agency any further wording on the topic.',
      },
      {
        de: 'Ich spreche die Agentur auf ihr Vorgehen an und bitte um die Zusage, künftig maßvoller zu formulieren.',
        en: 'I raise the pattern with the agency and ask for an assurance to word things more moderately in future.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Vorgehen ist eine Salamitaktik: Jede Ausgabe wird nur gegen die vorherige gemessen, sodass die Verstärkung Schritt für Schritt unter der Beanstandungsschwelle bleibt und die kumulierte Wirkaussage nie als Ganzes zur Prüfung steht. Die beste Option nimmt dem Muster die Grundlage: Du aggregierst die Einzelschritte, bewertest den Gesamtsprung als eine Aussage und ersetzt den wandernden Maßstab („die letzte Fassung") durch einen festen, belegbaren Referenzstand. Legitim einsetzen: Einen Claim schrittweise zu schärfen ist zulässig, solange jede Stufe durch Belege gedeckt ist und der Endstand offen als Ganzes geprüft wird. Erkennen und kontern: Sobald jeder Schritt nur am vorherigen gemessen wird, hol den kumulierten Stand auf den Tisch und fixiere einen unabhängigen Prüfmaßstab. Diese Ausgabe erneut durchzuwinken ist genau der Effekt, auf den die Taktik baut — für sich ist jeder Schritt klein, die Summe ist das Problem. Sämtliche Claims sofort zu stoppen ist überzogen und verwirft auch die belegbaren Aussagen. Nur um eine Zusage zur „Mäßigung" zu bitten verlässt sich auf guten Willen und lässt den wandernden Maßstab unangetastet, der die Salamitaktik überhaupt erst funktionieren lässt.',
      en: 'The approach is salami tactics: each issue is measured only against the previous one, so the strengthening stays below the objection threshold step by step and the cumulative claim never comes up for review as a whole. The best option removes that foundation: you aggregate the individual steps, assess the overall jump as a single claim, and replace the drifting yardstick ("the last version") with a fixed, evidence-backed reference point. Used legitimately: sharpening a claim in stages is permissible as long as each stage is backed by evidence and the end state is reviewed openly as a whole. To spot and counter it: the moment each step is measured only against the previous one, put the cumulative state on the table and fix an independent benchmark. Waving this issue through again is exactly the effect the tactic relies on — each step is small on its own, the sum is the problem. Halting all claims at once is an overreaction that also discards the well-evidenced statements. Merely asking for an assurance of "moderation" relies on good faith and leaves untouched the drifting yardstick that lets salami tactics work in the first place.',
    },
    points: 10,
    primaryTechniqueId: 'salami_tactics_gradualism',
    relatedTechniques: ['salami_tactics_gradualism', 'consistency'],
  },
  {
    id: 'wave5b-salami_tactics_gradualism-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fachausschuss-Sitzungen zur Auslegung einer Branchennorm: Der Verbandsvertreter setzt Sitzung für Sitzung eine jeweils minimal weiter gehende Auslegung durch und beruft sich dabei stets auf die zuletzt beschlossene Fassung als Maßstab. Keine einzelne Sitzung überschreitet erkennbar den Rahmen; nach zwei Jahren gilt eine Praxis als Standard, die anfangs klar außerhalb der Norm lag.',
      en: 'Technical-committee sessions on interpreting an industry standard: session after session the association representative pushes through a marginally more far-reaching reading, always citing the version last agreed as the benchmark. No single session visibly oversteps the frame; after two years a practice counts as standard that at the outset lay clearly outside the norm.',
    },
    options: [
      { de: 'Salamitaktik (Gradualismus)', en: 'Salami Tactics (Gradualism)' },
      { de: 'Slippery Slope (Dammbruchargument)', en: 'Slippery slope' },
      { de: 'Foot-in-the-Door (Konsistenz-Hebel)', en: 'Foot-in-the-door (consistency lever)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster heißt Salamitaktik (Gradualismus): Der Verbandsvertreter geht eine Reihe kleiner Schritte tatsächlich, hält jeden knapp im Rahmen und macht den zuletzt erreichten Stand zum Maßstab für den nächsten — so verschiebt sich die Norm kumuliert, ohne dass die Gesamtverschiebung je als solche entschieden wird. Legitim einsetzen: Eine Auslegung schrittweise fortzuentwickeln ist zulässig, wenn das Ziel offenliegt und der kumulierte Stand als Ganzes prüfbar bleibt. Erkennen und kontern: Miss nicht jede Sitzung an der letzten, sondern am ursprünglichen Normwortlaut, und zieh den Gesamtweg über den ganzen Zeitraum auf. Beim Slippery Slope ist die Rolle umgekehrt: Dort warnt jemand vor einer solchen Kette, um den ersten Schritt zu verhindern — hier werden die Schritte real gegangen. Foot-in-the-Door nutzt eine einzelne kleine Zusage als Türöffner für einen deutlich größeren Folge-Ask (ein Sprung) — die Salamitaktik vermeidet den Sprung und schiebt stattdessen vielfach dieselbe kleine Distanz.',
      en: 'The pattern is called salami tactics (gradualism): the association representative actually takes a run of small steps, keeps each just within the frame, and makes the level last reached the yardstick for the next — so the norm shifts cumulatively without the overall move ever being decided as such. Used legitimately: developing an interpretation in stages is permissible when the goal is out in the open and the cumulative state stays reviewable as a whole. To spot and counter it: measure each session not against the last but against the original wording of the norm, and lay out the whole path across the entire period. With the slippery slope the role is reversed: there someone merely warns of such a chain to block the first step — here the steps are actually taken. Foot-in-the-door uses one small commitment as a door-opener for a markedly larger follow-up ask (a jump) — salami tactics avoids the jump and instead nudges the same small distance many times over.',
    },
    points: 10,
    primaryTechniqueId: 'salami_tactics_gradualism',
    relatedTechniques: ['salami_tactics_gradualism', 'slippery_slope', 'consistency'],
  },
];
