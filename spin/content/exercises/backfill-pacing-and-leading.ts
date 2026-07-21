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
      { de: 'Behaviorale Mimikry (Chamäleon-Effekt)', en: 'Behavioural Mimicry (Chameleon Effect)' },
      { de: 'Fuß-in-der-Tür (Foot-in-the-Door)', en: 'Foot-in-the-Door' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Pacing und Leading: Erst spiegelt der Transformationsleiter die aktuelle Erfahrung des Teams in einer Reihe unstrittiger Beobachtungen (Pacing) und sammelt Zustimmung ein — dann hängt er mit „und genau deshalb werden Sie …" nahtlos seine eigentliche Bewertung an (Leading). Der Mechanismus: Die Zustimmung zu den zutreffenden Spiegel-Sätzen trägt sich auf die daran gekoppelte Suggestion über, ehe diese kritisch geprüft wird. (Die empirische Basis für NLP-Techniken ist gemischt — der Ablauf ist beobachtbar, die Wirkstärke unsicher.) So arbeitest du sauber: Benenne reale Frustration zuerst offen, bevor du eine Veränderung empfiehlst — ehrliche Change-Kommunikation erkennt den Ist-Zustand an, statt ihn zu überspringen. Der Prüfpunkt: Achte auf den Scharnier-Moment, in dem eine Kette wahrer Beschreibungen in ein „also/deshalb/genau weil" kippt, und miss das Versprechen über das neue System an seinen eigenen Belegen, nicht an der Richtigkeit der Beschwerde-Beschreibung. Eingebettete Befehle wären ein in einen Nebensatz versteckter Handlungsbefehl — hier ist die Bewertung offen ausgesprochen, nicht getarnt. Behaviorale Mimikry meint das nonverbale Spiegeln von Haltung, Tempo und Wortwahl, nicht das inhaltliche Aufgreifen der Gefühlslage samt anschließender Führung. Fuß-in-der-Tür bräuchte eine kleine, bereits erfüllte Erstbitte, auf der eine größere aufsetzt — hier gibt es keine gestaffelten Bitten, sondern Spiegeln und dann Lenken.',
      en: 'Pacing and Leading: the transformation lead first mirrors the team\'s current experience in a run of unarguable observations (Pacing) and gathers agreement — then, with "and that is precisely why you will …", he seamlessly attaches his real appraisal (Leading). The mechanism: agreement with the accurate mirroring statements carries over onto the suggestion coupled to them, before that suggestion is scrutinised. (The empirical basis for NLP techniques is mixed — the sequence is observable, its effect size uncertain.) This is how you work cleanly: name real frustration openly before you recommend a change — honest change communication acknowledges the current state instead of skipping over it. The checkpoint: watch for the hinge moment where a chain of true descriptions tips into a "so/therefore/precisely because", and measure the promise about the new system against its own evidence, not against how accurate the account of the complaints is. Embedded commands would be an action instruction hidden inside a subordinate clause — here the appraisal is stated openly, not disguised. Behavioural mimicry means nonverbally mirroring posture, pace, and wording, not taking up the substance of the mood and then steering. Foot-in-the-door would require a small first request already granted, on which a larger one builds — here there are no staged requests, just mirroring and then steering.',
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
      de: 'Vertriebsgespräch mit dem Anbieter einer Employer-Branding-Plattform: Als Kommunikationschefin sitzt du dem Key-Account-Manager gegenüber. Er beginnt nicht mit dem Produkt, sondern schwingt sich auf dich ein: Er übernimmt dein Sprechtempo, wird ruhiger, als du langsamer wirst, greift deine Formulierungen auf, nickt im Takt deiner Sätze und spiegelt sogar deine Sitzhaltung. Nach zehn Minuten fühlst du dich ungewöhnlich gut verstanden. Genau in diesem Moment, ganz beiläufig: „So wie wir hier zusammenfinden, führt ehrlich gesagt nur ein Weg weiter — der Jahresvertrag, noch in diesem Quartal gezeichnet, nimmt Ihnen das ewige Rechtfertigen ab."',
      en: 'Sales meeting with the vendor of an employer-branding platform: as head of communications, you are sitting across from the key-account manager. He does not open with the product but tunes himself to you: he takes on your speaking pace, grows calmer as you slow down, picks up your phrasings, nods in time with your sentences and even mirrors the way you sit. After ten minutes you feel unusually well understood. In precisely that moment, quite casually: "The way we are clicking here, there is honestly only one way forward — the annual contract, signed still within this quarter, takes the endless justifying off your plate."',
    },
    options: [
      {
        de: 'Ich trenne das gute Gefühl, verstanden zu werden, von der Schlussfolgerung: Ja, er hat sich perfekt auf mich eingeschwungen — ob daraus ausgerechnet der Jahresvertrag folgt, prüfe ich an eigenen Kriterien, unabhängig davon, wie gut der Draht gerade ist.',
        en: 'I separate the good feeling of being understood from the conclusion: yes, he has tuned in to me perfectly — but whether the annual contract of all things follows from that, I test against my own criteria, regardless of how good the rapport happens to be.',
      },
      {
        de: 'Er hat sich so mühelos auf mich eingestellt — wer einen so guten Draht herstellt, hat vermutlich auch das richtige Angebot. Ich zeichne den Jahresvertrag.',
        en: 'He tuned in to me so effortlessly — whoever builds rapport this good probably also has the right offer. I sign the annual contract.',
      },
      {
        de: 'Ich mache dicht, spiegle betont nichts zurück und ziehe das Gespräch ab jetzt kühl und misstrauisch durch, um ihm keinen Draht zu lassen.',
        en: 'I shut down, deliberately mirror nothing back, and run the rest of the conversation coolly and suspiciously so as to give him no rapport to work with.',
      },
      {
        de: 'Das eigentliche Problem ist das enge „noch in diesem Quartal": Ich lasse mich vom Zeitfenster nicht drängen, bitte um zwei Wochen Bedenkzeit und behandle den Fall damit als erledigt.',
        en: 'The real problem is the tight "still within this quarter": I refuse to be rushed by the time window, ask for two weeks to think, and treat the matter as settled that way.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Key-Account-Manager fährt Pacing und Leading in seiner nonverbalen Spielart: Zuerst schwingt er sich über Tempo, Tonlage, Wortwahl und Haltung so genau auf dich ein, dass echtes Rapport entsteht (Pacing) — und im Moment dieses Gleichklangs koppelt er seine Kaufempfehlung daran (Leading). Wirksam ist das, weil das Gefühl „wir sind auf einer Wellenlänge" sich unbemerkt in ein „Ja" zur angehängten Empfehlung verlängern kann. Rapport aufzubauen ist selbst nichts Anrüchiges: In deiner eigenen Kommunikation stimmst du dich bewusst auf dein Gegenüber ab, bevor du etwas vorschlägst — sauber bleibt das, solange der hergestellte Gleichklang nicht zum Hebel für einen angehängten Appell wird. Die beste Option nimmt genau diese Trennung ernst: Der gute Draht kann echt sein — er belegt trotzdem nicht, dass ausgerechnet der Jahresvertrag die richtige Wahl ist, die du an eigenen Kriterien prüfst. Option zwei fällt auf den Hebel herein und verwechselt „stellt einen guten Draht her" mit „hat die richtige Lösung" — Anschlussfähigkeit ist kein Beleg für die Empfehlung. Dichtzumachen und betont kühl zu werden überkorrigiert: Du zerstörst eine an sich nützliche Gesprächsebene und verhandelst schlechter, obwohl Spiegeln allein kein Angriff ist. Die vierte Option bekämpft die falsche Technik — sie kontert nur die Verknappung im „noch in diesem Quartal", lässt aber den eigentlichen Zug, das Anhängen der Empfehlung an den hergestellten Gleichklang, ungeprüft; Bedenkzeit allein trennt den Rapport nicht von der fragwürdigen Schlussfolgerung.',
      en: 'The key-account manager runs pacing and leading in its nonverbal variant: first he tunes himself to you so precisely — through pace, tone, word choice and posture — that genuine rapport forms (Pacing), and in the moment of that resonance he couples his buying recommendation to it (Leading). It works because the feeling "we are on the same wavelength" can quietly stretch into a "yes" to the recommendation attached to it. Building rapport is nothing disreputable in itself: in your own communication you deliberately attune to your counterpart before you propose anything — it stays clean as long as the resonance you create does not become the lever for a bolted-on appeal. The best option takes exactly that separation seriously: the rapport may be real — it still does not prove that the annual contract of all things is the right choice, which you test against your own criteria. Option two falls for the lever and confuses "builds good rapport" with "has the right solution" — being easy to connect with is no evidence for the recommendation. Shutting down and turning pointedly cool over-corrects: you destroy a genuinely useful conversational level and negotiate worse, even though mirroring as such is not an attack. The fourth option fights the wrong technique — it only counters the scarcity in "still within this quarter" but leaves the actual move, attaching the recommendation to the resonance he built, unexamined; asking for time alone does not separate the rapport from the questionable conclusion.',
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
      de: 'Pacing und Leading: Die drei Eingangssätze spiegeln die geteilte Realität des Raums so präzise, dass alle zustimmen (Pacing) — und die Moderatorin knüpft mit „also …" ihre Newsroom-These direkt an dieses Ja (Leading). Der verräterische Marker ist die Reihenfolge: mehrere unstrittige Wahrheiten, dann ein Scharnierwort, das eine strittige Empfehlung als bloße Fortsetzung erscheinen lässt. Legitim und wertvoll ist die Grundfigur: Eine gemeinsame Lagebeschreibung schafft Gesprächsboden und ein geteiltes Problemverständnis; problematisch wird es erst, wenn die Zustimmung zur Diagnose stillschweigend als Zustimmung zur Lösung gezählt wird. Erkennen und kontern: Zerlege die Kette und behandle die These als eigene, zu belegende Behauptung — „Die ersten drei Punkte teile ich; warum folgt daraus zwingend genau dieses Modell?" Priming würde einen vorab gesetzten, oft themenfremden Reiz voraussetzen, der spätere Urteile bahnt — hier wirkt keine unterschwellige Vorbelastung, sondern offen gespiegelte Zustimmung. Das Konsistenzprinzip bräuchte ein früheres, selbstbindendes Bekenntnis, dem man treu bleiben will — die Zustimmung entsteht hier frisch im Moment, nicht aus einer alten Festlegung. Eingebettete Befehle wären ein getarnter Befehl im Nebensatz — die These steht hier offen und unverhohlen am Ende, nicht versteckt.',
      en: 'Pacing and Leading: the three opening statements mirror the room\'s shared reality so precisely that everyone agrees (Pacing) — and with "so …" the facilitator ties her newsroom thesis directly to that yes (Leading). The tell-tale marker is the order: several unarguable truths, then a hinge word that makes a contestable recommendation look like a mere continuation. Legitimate and valuable is the underlying move: a shared description of the situation creates common ground and a joint understanding of the problem; it only turns problematic when agreement with the diagnosis is quietly counted as agreement with the solution. To spot and counter it: break the chain apart and treat the thesis as its own claim that still needs support — "I share the first three points; why does exactly this model necessarily follow from them?" Priming would presuppose an earlier, often unrelated stimulus that channels later judgements — here it is not a subliminal predisposition at work but openly mirrored agreement. The consistency principle would require an earlier, self-binding commitment one wants to stay true to — here the agreement arises fresh in the moment, not from a prior pledge. Embedded commands would be a disguised command in a subordinate clause — here the thesis stands openly and unconcealed at the end, not hidden.',
    },
    points: 10,
    primaryTechniqueId: 'pacing_and_leading',
    relatedTechniques: ['pacing_and_leading', 'priming', 'consistency', 'embedded_commands'],
  },
];
