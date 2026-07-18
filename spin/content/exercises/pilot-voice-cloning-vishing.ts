// Pilotwelle R3: 3 Übungen für voice_cloning_vishing.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotVoiceCloningVishing: Exercise[] = [
  {
    id: 'p3-voice_cloning_vishing-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier gegen den Social-Media-Manager eingesetzt?',
      en: 'Which technique is being used against the social media manager here?',
    },
    scenario: {
      de: 'Montagmorgen in der Unternehmenskommunikation: Der Social-Media-Manager erhält einen Anruf, angeblich von der Pressesprecherin, die auf Auslandstermin ist. Die Stimme klingt exakt wie sie — gleiche Färbung, gleiche Floskeln — und weist ihn an, ein parallel per Mail geschicktes Statement zu einem Datenleck „in den nächsten zehn Minuten" über den Konzernaccount zu veröffentlichen. Später stellt sich heraus: Die Sprecherin hat nie angerufen; ihre Stimme wurde aus Pressekonferenz-Mitschnitten geklont.',
      en: 'Monday morning in corporate communications: the social media manager gets a call, supposedly from the press spokesperson, who is travelling abroad. The voice sounds exactly like her — same timbre, same stock phrases — and instructs him to publish a statement — sent over by email in parallel — about a data breach "within the next ten minutes" via the corporate account. It later turns out the spokesperson never called; her voice was cloned from press conference recordings.',
    },
    options: [
      { de: 'Voice Cloning / Vishing', en: 'Voice cloning / vishing' },
      { de: 'Synthetische Medien (Deepfake-Video/-Bild)', en: 'Synthetic media (deepfake video/imagery)' },
      { de: 'Autorität', en: 'Authority' },
      { de: 'KI-gestützte Persuasion', en: 'AI-powered persuasion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Voice Cloning / Vishing: Die Stimme ist unser stärkstes alltägliches Identitätssignal — wer sie hört, prüft selten weiter. Eine geklonte Stimme kapert dieses Signal und kombiniert es mit Zeitdruck und Anweisungston, damit die übliche Freigabe-Routine übersprungen wird. Legitim ist die Basistechnologie durchaus: lizenzierte Synthesestimmen mit Einwilligung und Kennzeichnung, etwa für Audio-Produktionen oder Barrierefreiheit — professionell heißt außerdem, im Team Verifikationsroutinen zu vereinbaren, bevor der Ernstfall eintritt. Erkennen und kontern: Auffällig ist die Kombination aus vertrauter Stimme, ungewohntem Ablauf und Eile; entschärft wird sie durch Rückruf über die hinterlegte Nummer oder einen zweiten Kanal — nie über den Kanal der Anfrage. Synthetische Medien wirken plausibel, weil Voice Cloning zur Deepfake-Familie gehört — der Katalog trennt aber die audio-basierte Identitätstäuschung im direkten Kontakt vom generischen Deepfake in Video und Bild. Autorität wirkt hier mit (Anweisung der Vorgesetzten), ist aber der verstärkende Hebel, nicht der Kern der Täuschung. KI-gestützte Persuasion bezeichnet personalisierte Überzeugungsarbeit durch KI-Systeme, nicht das Auftreten unter fremder Identität.',
      en: 'Voice cloning / vishing: the voice is our strongest everyday identity signal — once we hear it, we rarely verify further. A cloned voice hijacks that signal and pairs it with time pressure and a directive tone so the usual approval routine gets skipped. The underlying technology has legitimate uses: licensed synthetic voices with consent and disclosure, for audio production or accessibility — and acting professionally also means agreeing on verification routines in your team before an incident happens. To spot and counter it: the tell is the combination of a familiar voice, an unusual procedure, and urgency; defuse it by calling back on the number on file or via a second channel — never via the channel the request came through. Synthetic media seems plausible because voice cloning belongs to the deepfake family — but the catalogue separates audio-based identity deception in live contact from generic deepfakes in video and imagery. Authority is at work here (an instruction from a superior), but it is the amplifying lever, not the core of the deception. AI-powered persuasion means personalised persuasion by AI systems, not operating under a stolen identity.',
    },
    points: 10,
    primaryTechniqueId: 'voice_cloning_vishing',
    relatedTechniques: ['voice_cloning_vishing', 'synthetic_media', 'authority'],
  },
  {
    id: 'p3-voice_cloning_vishing-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Interne Kommunikation eines Maschinenbauers. Auf deiner Mailbox: eine Sprachnachricht, angeblich vom CEO, der gerade zu Investorengesprächen in den USA ist. Die vertraute Stimme bittet dich, eine kurz darauf per Mail eingegangene Mitteilung zu einem angeblichen Standortverkauf „noch vor seinem Rückflug, ohne Abstimmungsschleife" im Intranet zu veröffentlichen. Die Nachricht kam von einer unbekannten Nummer.',
      en: 'You head internal communications at a machinery manufacturer. On your voicemail: a message, supposedly from the CEO, who is in the US for investor meetings. The familiar voice asks you to publish an announcement — which arrives by email shortly afterwards — about an alleged site sale on the intranet "before his return flight, skipping the sign-off loop". The message came from an unknown number.',
    },
    options: [
      {
        de: 'Ich veröffentliche nichts, sondern verifiziere über einen zweiten, bekannten Kanal — Rückruf auf der hinterlegten Nummer des CEO oder über sein Büro — und informiere parallel die IT-Sicherheit über den Vorfall.',
        en: 'I publish nothing and verify via a second, known channel — calling back on the CEO\'s number on file or via his office — and inform IT security about the incident in parallel.',
      },
      {
        de: 'Ich rufe auf der Nummer zurück, von der die Sprachnachricht kam, und lasse mir den Auftrag noch einmal persönlich bestätigen.',
        en: 'I call back on the number the voice message came from and have the instruction confirmed to me personally.',
      },
      {
        de: 'Ich höre die Nachricht mehrfach ab und achte auf synthetische Artefakte — klingt die Stimme natürlich, führe ich den Auftrag aus, denn der Zeitdruck ist offenbar real.',
        en: 'I replay the message several times and listen for synthetic artefacts — if the voice sounds natural, I carry out the instruction, since the time pressure is apparently real.',
      },
      {
        de: 'Ich veröffentliche die Mitteilung im Intranet, kennzeichne sie aber als „vorbehaltlich Bestätigung" und hole die Freigaben im Nachgang ein.',
        en: 'I publish the announcement on the intranet but flag it "pending confirmation" and collect the sign-offs afterwards.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Sprachnachricht zeigt das klassische Vishing-Muster: vertraute Stimme plus Zeitdruck, Vertraulichkeit und die Bitte, den üblichen Prozess zu umgehen — genau diese Kombination soll verhindern, dass du prüfst. Die beste Option folgt dem Rückkanal-Prinzip: Verifiziert wird immer über einen unabhängigen, vorab bekannten Kanal, und die IT-Sicherheit gehört informiert, weil ein Vishing-Versuch selten allein kommt. Professionell heißt darüber hinaus, solche Verifikationsroutinen — hinterlegte Nummern, Vier-Augen-Freigabe, notfalls ein Codewort — vor dem Ernstfall zu vereinbaren; geklonte Stimmen selbst haben nur mit Einwilligung und Kennzeichnung einen legitimen Platz, etwa in der Audio-Produktion. Der Rückruf auf der Absendernummer wirkt wie Verifikation, bestätigt aber nur den Angreifer: Die Nummer gehört ihm. Die Hörprüfung überschätzt das eigene Ohr — Wahrnehmungsstudien und Detektionsforschung deuten darauf hin, dass weder Laien noch Software geklonte Stimmen unter realistischen Bedingungen zuverlässig erkennen; wer die Entscheidung daran hängt, macht die Täuschungsqualität zum Freifahrtschein. Und „vorbehaltlich Bestätigung" klingt vorsichtig, veröffentlicht die mögliche Falschmeldung aber trotzdem — bei einer erfundenen Standortverkaufs-Meldung ist der Schaden in der Belegschaft dann bereits angerichtet.',
      en: 'The voicemail shows the classic vishing pattern: a familiar voice plus time pressure, confidentiality, and a request to bypass the usual process — exactly the combination designed to keep you from verifying. The best option follows the out-of-band principle: verification always runs through an independent, previously known channel, and IT security needs to know, because a vishing attempt rarely comes alone. Being professional also means agreeing on such verification routines — numbers on file, dual sign-off, a code word if needed — before an incident occurs; cloned voices themselves have a legitimate place only with consent and disclosure, for instance in audio production. Calling back on the sender\'s number feels like verification but only confirms the attacker: the number is his. The listening test overrates your own ear — perception studies and detection research suggest that neither laypeople nor software reliably identify cloned voices under realistic conditions; making the decision hinge on it turns the quality of the fake into a free pass. And "pending confirmation" sounds cautious but still publishes the potential false report — with a fabricated site-sale announcement, the damage across the workforce is already done.',
    },
    points: 10,
    primaryTechniqueId: 'voice_cloning_vishing',
    relatedTechniques: ['voice_cloning_vishing'],
  },
  {
    id: 'p3-voice_cloning_vishing-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Die Pressestelle hat es hier mit ___ zu tun.',
      en: 'Complete the sentence: The press office is dealing with ___.',
    },
    scenario: {
      de: 'Anruf eines Investigativjournalisten bei der Pressestelle, Bitte um Stellungnahme binnen 24 Stunden: Ihm sei ein Audiomitschnitt zugespielt worden, in dem die Vorständin intern abfällig über Fördergeld-Auflagen spricht. Die Stimme klingt unverkennbar nach ihr — doch die Vorständin bestreitet das Gespräch, war im fraglichen Zeitraum nachweislich im Ausland, und die forensische Prüfung stuft die Datei als KI-generiert ein.',
      en: 'An investigative journalist calls the press office asking for a statement within 24 hours: he has been passed an audio recording in which a member of the executive board speaks disparagingly in private about subsidy conditions. The voice is unmistakably hers — yet the executive denies the conversation, was verifiably abroad during the period in question, and forensic analysis classifies the file as AI-generated.',
    },
    options: [
      {
        de: 'einem Audio-Deepfake: einer geklonten Stimme, die eine reale Person Dinge sagen lässt, die sie nie gesagt hat (Voice Cloning)',
        en: 'an audio deepfake: a cloned voice making a real person say things she never said (voice cloning)',
      },
      {
        de: 'einem manipulierten Video, das echte Aufnahmen in einen falschen Zusammenhang setzt (Synthetische Medien im Bild-/Videobereich)',
        en: 'a manipulated video placing genuine footage in a false context (synthetic media in imagery/video)',
      },
      {
        de: 'einer echten, aber selektiv gekürzten Aufnahme, die den Gesamteindruck verzerrt (Cherry-Picking)',
        en: 'a genuine but selectively edited recording that distorts the overall impression (cherry-picking)',
      },
      {
        de: 'einer wörtlich wahren Aussage, die einen falschen Gesamteindruck erzeugt (Paltering)',
        en: 'a literally true statement crafted to leave a false overall impression (paltering)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Voice Cloning: Auch außerhalb des Betrugsanrufs wirkt die Stimme als Echtheitsbeweis — ein geklonter „Mitschnitt" erzeugt Reputationsschaden und zwingt die Organisation in die Defensive, denn Dementis wirken schwächer als Audio. Der zweite Schadenspfad läuft umgekehrt: Wo Audio-Fälschungen bekannt sind, lassen sich auch echte Aufnahmen als Fälschung abtun — beide Richtungen beschädigen Vertrauen. Professionell reagieren heißt hier: prüfbare Fakten sammeln (Kalender- und Reisedaten, forensische Einstufung), der Redaktion Herkunft und Prüfbarkeit der Datei abverlangen und die Verifikationslage transparent machen, statt nur zu dementieren — und im eigenen Haus synthetische Stimmen nur mit Einwilligung und Kennzeichnung einzusetzen. Erkennen: Abgleich mit belegbaren Zeit- und Ortsdaten plus forensische Prüfung schlägt das eigene Ohr. Das manipulierte Video wirkt plausibel, weil Deepfake meist mit Bewegtbild assoziiert wird — hier ist es aber reines Audio, wofür der Katalog den eigenen Begriff führt. Cherry-Picking wäre eine echte, verzerrend gekürzte Aufnahme — die Forensik zeigt jedoch generiertes Material. Paltering betrifft wahre Aussagen eines Senders, die falsch wirken sollen; hier ist die gesamte Äußerung fabriziert.',
      en: 'Voice cloning: outside the fraud-call scenario too, the voice serves as proof of authenticity — a cloned "recording" inflicts reputational damage and forces the organisation onto the defensive, since denials feel weaker than audio. The second harm path runs in reverse: once audio fakes are known to exist, genuine recordings can be dismissed as fakes — both directions erode trust. Responding professionally means assembling verifiable facts (calendar and travel records, the forensic classification), requiring the newsroom to account for the file\'s origin and verifiability, and laying out the verification picture instead of merely denying — while using synthetic voices in your own organisation only with consent and disclosure. To recognise it: cross-checking against documented time and location data plus forensic analysis beats your own ear. The manipulated video seems plausible because deepfakes are mostly associated with moving images — but this is pure audio, for which the catalogue keeps a term of its own. Cherry-picking would be a genuine recording edited to distort — yet forensics shows generated material. Paltering concerns true statements by a sender designed to mislead; here the entire utterance is fabricated.',
    },
    points: 10,
    primaryTechniqueId: 'voice_cloning_vishing',
    relatedTechniques: ['voice_cloning_vishing', 'synthetic_media', 'cherry_picking'],
  },
];
