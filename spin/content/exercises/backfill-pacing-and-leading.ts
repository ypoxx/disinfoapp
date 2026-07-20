// Backfill: 3 Übungen für die bestehende Technik 'pacing_and_leading' (Pacing und Leading).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Formatvorbild: backfill-liking.ts / pilot-paltering-half-truth.ts (Golden Set).
// Hinweis: Technik hat kein evidenceTier 'frontier'; empirische NLP-Evidenz ist gemischt (evidenceQuality 'low').
// NICHT in index.ts registriert — Registrierung erfolgt separat.

import type { Exercise } from '../types';

export const backfillPacingAndLeading: Exercise[] = [
  {
    id: 'backfill-pacing_and_leading-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Transformationsleiter hier ein?',
      en: 'Which technique is the transformation lead using here?',
    },
    scenario: {
      de: 'Interne Betriebsversammlung zur Einführung eines neuen Ticketing-Systems: Vor dem sichtlich genervten Support-Team stellt der Transformationsleiter nicht die Software vor, sondern benennt zuerst, was alle täglich erleben: „Das alte System hängt bei jeder zweiten Anfrage. Sie tippen dieselben Kundendaten in drei Masken. Und wenn dann etwas hakt, landet die Beschwerde trotzdem bei Ihnen." Zustimmendes Raunen im Saal. In genau demselben Ton macht er weiter: „Und genau deshalb werden Sie das neue System nicht als weiteres Tool empfinden, sondern als das, was Ihnen die Doppelarbeit endlich abnimmt."',
      en: 'Internal all-hands about rolling out a new ticketing system: facing the visibly fed-up support team, the transformation lead does not present the software but first names what everyone lives through daily: "The old system stalls on every other request. You type the same customer data into three screens. And when something then goes wrong, the complaint still lands on your desk anyway." A murmur of agreement across the room. In exactly the same tone he continues: "And that is precisely why you will not experience the new system as yet another tool, but as the thing that finally takes the double work off your hands."',
    },
    options: [
      { de: 'Pacing und Leading', en: 'Pacing and Leading' },
      { de: 'Eingebettete Befehle (Embedded Commands)', en: 'Embedded Commands' },
      { de: 'Behaviorale Mimikry (Chamäleon-Effekt)', en: 'Behavioral Mimicry (Chameleon Effect)' },
      { de: 'Fuß-in-der-Tür (Foot-in-the-Door)', en: 'Foot-in-the-Door' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Pacing und Leading: Erst spiegelt der Transformationsleiter die aktuelle Erfahrung des Teams in einer Reihe unstrittiger Beobachtungen (Pacing) und sammelt Zustimmung ein — dann hängt er mit „und genau deshalb werden Sie …" nahtlos seine eigentliche Bewertung an (Leading). Der Mechanismus: Die Zustimmung zu den zutreffenden Spiegel-Sätzen trägt sich auf die daran gekoppelte Suggestion über, ehe diese kritisch geprüft wird. (Die empirische Basis für NLP-Techniken ist gemischt — der Ablauf ist beobachtbar, die Wirkstärke unsicher.) Legitim nutzt du den Kern, indem du reale Frustration zuerst offen benennst, bevor du eine Veränderung empfiehlst — ehrliche Change-Kommunikation erkennt den Ist-Zustand an, statt ihn zu überspringen. Erkennen und kontern: Achte auf den Scharnier-Moment, in dem eine Kette wahrer Beschreibungen in ein „also/deshalb/genau weil" kippt, und bewerte das Versprechen über das neue System getrennt von der zutreffenden Beschwerde-Beschreibung. Eingebettete Befehle wären ein in einen Nebensatz versteckter Handlungsbefehl — hier ist die Bewertung offen ausgesprochen, nicht getarnt. Behaviorale Mimikry meint das nonverbale Spiegeln von Haltung, Tempo und Wortwahl, nicht das inhaltliche Aufgreifen der Gefühlslage samt anschließender Führung. Fuß-in-der-Tür bräuchte eine kleine, bereits erfüllte Erstbitte, auf der eine größere aufsetzt — hier gibt es keine gestaffelten Bitten, sondern Spiegeln und dann Lenken.',
      en: 'Pacing and Leading: the transformation lead first mirrors the team\'s current experience in a run of unarguable observations (Pacing) and gathers agreement — then, with "and that is precisely why you will …", he seamlessly attaches his real appraisal (Leading). The mechanism: agreement with the accurate mirroring statements carries over onto the suggestion coupled to them, before that suggestion is scrutinised. (The empirical basis for NLP techniques is mixed — the sequence is observable, its effect size uncertain.) You use the core legitimately by naming real frustration openly before you recommend a change — honest change communication acknowledges the current state instead of skipping over it. To spot and counter it: watch for the hinge moment where a chain of true descriptions tips into a "so/therefore/precisely because", and judge the promise about the new system separately from the accurate account of the complaints. Embedded commands would be an action instruction hidden inside a subordinate clause — here the appraisal is stated openly, not disguised. Behavioral mimicry means nonverbally mirroring posture, pace, and wording, not taking up the substance of the mood and then steering. Foot-in-the-door would require a small first request already granted, on which a larger one builds — here there are no staged requests, just mirroring and then steering.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'embedded_commands', 'behavioral_mimicry', 'foot_in_the_door'],
  },
  {
    id: 'backfill-pacing_and_leading-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Vertriebsgespräch mit dem Anbieter einer Employer-Branding-Plattform: Als Kommunikationschefin sitzt du dem Key-Account-Manager gegenüber. Statt mit dem Produkt zu starten, zeichnet er ruhig deinen Alltag nach — jede Kampagne musst du inzwischen einzeln vor dem Finanzressort verteidigen, die Honorare deiner Agenturen steigen Jahr für Jahr, und am Ende bleibt an dir hängen, jeden Euro nach oben zu begründen. Du hörst zu und merkst, wie genau er dich trifft. Dann, ganz beiläufig: „Wenn ich das so höre, führt da ehrlich gesagt nur ein Weg heraus — der Jahresvertrag, noch in diesem Quartal gezeichnet, nimmt Ihnen genau dieses ständige Rechtfertigen ab."',
      en: 'Sales meeting with the vendor of an employer-branding platform: as head of communications, you are sitting across from the key-account manager. Instead of opening with the product, he calmly retraces your everyday reality — every campaign now has to be defended one by one before the finance department, your agency fees climb year after year, and in the end it falls to you to justify every euro upward. You listen and notice how precisely he reads you. Then, quite casually: "Hearing all that, there is honestly only one way out — the annual contract, signed still within this quarter, takes exactly this constant justifying off your plate."',
    },
    options: [
      {
        de: 'Ich trenne die zutreffende Spiegelung von der Schlussfolgerung: Ja, meine Lage ist richtig beschrieben — ob daraus ausgerechnet der Jahresvertrag folgt, prüfe ich an eigenen Kriterien, unabhängig davon, wie gut er meinen Gemütszustand getroffen hat.',
        en: 'I separate the accurate mirroring from the conclusion: yes, my situation is correctly described — but whether the annual contract of all things follows from it, I test against my own criteria, regardless of how well he read my state of mind.',
      },
      {
        de: 'Er hat meine Situation exakt erfasst — wer das Problem so genau versteht, hat vermutlich auch die richtige Lösung. Ich zeichne den Jahresvertrag.',
        en: 'He has grasped my situation exactly — whoever understands the problem that precisely probably also has the right solution. I sign the annual contract.',
      },
      {
        de: 'Ich weise seine Situationsbeschreibung zurück, bestreite, unter Druck zu stehen, und ziehe das Gespräch ab jetzt betont kühl und misstrauisch durch, um ihm keine Angriffsfläche zu bieten.',
        en: 'I reject his read of my situation, deny being under any pressure, and run the rest of the conversation in a pointedly cool, suspicious manner so as to give him no opening.',
      },
      {
        de: 'Das eigentliche Problem ist das enge „noch in diesem Quartal": Ich lasse mich vom Zeitfenster nicht drängen, bitte um zwei Wochen Bedenkzeit und behandle den Fall damit als erledigt.',
        en: 'The real problem is the tight "still within this quarter": I refuse to be rushed by the time window, ask for two weeks to think, and treat the matter as settled that way.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Key-Account-Manager fährt Pacing und Leading: Zuerst spiegelt er deine Lage so genau, dass du innerlich zustimmst (Pacing), dann koppelt er im Moment dieses Wiedererkennens seine Kaufempfehlung an die Zustimmung (Leading). Wirksam ist das, weil ein „Ja, so ist es" zur Beschreibung sich unbemerkt zu einem „Ja" zur angehängten Konsequenz verlängern kann. Legitim ist der Kern durchaus: In deiner eigenen Kommunikation baust du Rapport, indem du die Lage deines Gegenübers zuerst präzise anerkennst, bevor du etwas vorschlägst — sauber bleibt das, solange die Anerkennung nicht zum Hebel für einen angehängten Appell wird. Die beste Option nimmt genau diese Trennung ernst: Die Situationsanalyse kann stimmen — die zutreffende Diagnose bindet dich trotzdem nicht an seine Therapie, die du an eigenen Kriterien prüfst. Option zwei fällt auf den Hebel herein und verwechselt „versteht mein Problem" mit „hat die richtige Lösung" — Treffsicherheit bei der Beschreibung ist kein Beleg für die Empfehlung. Betont kühl und misstrauisch zu werden überkorrigiert: Du bestreitest eine Lage, die real zutrifft, und verlierst Gesprächsqualität und Information, obwohl das Spiegeln an sich kein Angriff ist. Die vierte Option bekämpft die falsche Technik — sie kontert nur die Verknappung im „noch in diesem Quartal", lässt aber den eigentlichen Zug, das Anhängen der Empfehlung an deine Zustimmung, ungeprüft; Bedenkzeit allein trennt die zutreffende Spiegelung nicht von der fragwürdigen Schlussfolgerung.',
      en: 'The key-account manager runs pacing and leading: first he mirrors your situation so accurately that you inwardly agree (Pacing), then, in the moment of that recognition, he couples his buying recommendation to your agreement (Leading). It works because a "yes, that\'s how it is" about the description can quietly stretch into a "yes" to the consequence attached to it. The core is genuinely legitimate: in your own communication you build rapport by first acknowledging your counterpart\'s situation precisely before you propose anything — it stays clean as long as that acknowledgement does not become the lever for a bolted-on appeal. The best option takes exactly that separation seriously: the situational analysis may be right — yet an accurate diagnosis still does not commit you to his therapy, which you test against your own criteria. Option two falls for the lever and confuses "understands my problem" with "has the right solution" — accuracy in the description is no evidence for the recommendation. Turning pointedly cool and suspicious over-corrects: you deny a situation that is in fact true and lose conversational quality and information, even though mirroring as such is not an attack. The fourth option fights the wrong technique — it only counters the scarcity in "still within this quarter" but leaves the actual move, attaching the recommendation to your agreement, unexamined; asking for time alone does not separate the accurate mirroring from the questionable conclusion.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'scarcity', 'liking'],
  },
  {
    id: 'backfill-pacing_and_leading-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Die abschließende Empfehlung wirkt hier besonders überzeugend, weil ___.',
      en: 'Complete the sentence: The closing recommendation lands as especially convincing here because ___.',
    },
    scenario: {
      de: 'Moderierter Strategie-Workshop einer Konzernkommunikation: Die externe Moderatorin startet mit drei Beobachtungen, denen im Raum niemand widerspricht — „Die Nachrichtenlage dreht schneller als vor fünf Jahren, bei jeder Anfrage rennen mehrere Kollegen parallel los, und keiner weiß am Morgen sicher, wer heute eigentlich entscheidet." Alle nicken. Erst danach schiebt sie ihre eigentliche These nach: „Also ist ein zentrales Newsroom-Modell der logische nächste Schritt."',
      en: 'A facilitated strategy workshop in a corporate-communications department: the external facilitator opens with three observations no one in the room disputes — "The news cycle turns faster than five years ago, on every inquiry several colleagues sprint off in parallel, and no one is sure in the morning who actually gets to decide today." Everyone nods. Only then does she attach her actual thesis: "So a central newsroom model is the logical next step."',
    },
    options: [
      {
        de: 'die Zustimmung zu den zuvor gespiegelten, unstrittigen Wahrheiten auf die daran angehängte These übertragen wird — erst Bestätigung, dann Führung (Pacing und Leading)',
        en: 'agreement with the previously mirrored, unarguable truths is carried over onto the thesis attached to them — validation first, then steering (Pacing and Leading)',
      },
      {
        de: 'ein früher gesetzter Reiz spätere Urteile unbewusst in eine Richtung bahnt, ohne dass zuvor eine gemeinsame Ausgangslage gespiegelt wurde (Priming)',
        en: 'an earlier stimulus unconsciously nudges later judgements in one direction, without any shared starting point having been mirrored first (priming)',
      },
      {
        de: 'die Teilnehmenden sich zuvor öffentlich auf eine Position festgelegt haben und nun konsistent zu diesem Bekenntnis handeln wollen (Konsistenzprinzip)',
        en: 'the participants had earlier committed publicly to a position and now want to act consistently with that commitment (consistency principle)',
      },
      {
        de: 'die eigentliche These als versteckter Handlungsbefehl in einen harmlosen Nebensatz eingebettet wurde (Eingebettete Befehle)',
        en: 'the actual thesis was embedded as a hidden action command inside an innocuous subordinate clause (embedded commands)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Pacing und Leading: Die drei Eingangssätze spiegeln die geteilte Realität des Raums so präzise, dass alle zustimmen (Pacing) — und die Moderatorin knüpft mit „also …" ihre Newsroom-These direkt an dieses Ja (Leading). Der verräterische Marker ist die Reihenfolge: mehrere unstrittige Wahrheiten, dann ein Scharnierwort, das eine strittige Empfehlung als bloße Fortsetzung erscheinen lässt. Legitim ist der Kern — eine gemeinsame Lagebeschreibung schafft Gesprächsboden und ein geteiltes Problemverständnis; problematisch wird es erst, wenn die Zustimmung zur Diagnose stillschweigend als Zustimmung zur Lösung gezählt wird. Erkennen und kontern: Zerlege die Kette und behandle die These als eigene, zu belegende Behauptung — „Die ersten drei Punkte teile ich; warum folgt daraus zwingend genau dieses Modell?" Priming würde einen vorab gesetzten, oft themenfremden Reiz voraussetzen, der spätere Urteile bahnt — hier wirkt keine unterschwellige Vorbelastung, sondern offen gespiegelte Zustimmung. Das Konsistenzprinzip bräuchte ein früheres, selbstbindendes Bekenntnis, dem man treu bleiben will — die Zustimmung entsteht hier frisch im Moment, nicht aus einer alten Festlegung. Eingebettete Befehle wären ein getarnter Befehl im Nebensatz — die These steht hier offen und unverhohlen am Ende, nicht versteckt.',
      en: 'Pacing and Leading: the three opening statements mirror the room\'s shared reality so precisely that everyone agrees (Pacing) — and with "so …" the facilitator ties her newsroom thesis directly to that yes (Leading). The tell-tale marker is the order: several unarguable truths, then a hinge word that makes a contestable recommendation look like a mere continuation. The core is legitimate — a shared description of the situation creates common ground and a joint understanding of the problem; it only turns problematic when agreement with the diagnosis is quietly counted as agreement with the solution. To spot and counter it: break the chain apart and treat the thesis as its own claim that still needs support — "I share the first three points; why does exactly this model necessarily follow from them?" Priming would presuppose an earlier, often unrelated stimulus that channels later judgements — here it is not a subliminal predisposition at work but openly mirrored agreement. The consistency principle would require an earlier, self-binding commitment one wants to stay true to — here the agreement arises fresh in the moment, not from a prior pledge. Embedded commands would be a disguised command in a subordinate clause — here the thesis stands openly and unconcealed at the end, not hidden.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'priming', 'consistency', 'embedded_commands'],
  },
];
