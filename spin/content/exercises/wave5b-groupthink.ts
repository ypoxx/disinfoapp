// Welle 5b: 3 Übungen für groupthink (Groupthink / Konsensdruck).
// evidenceTier 'weak' — keine starken Wirkbehauptungen; kein seriousMode
// (Kategorie social_dynamics, dual-use), daher doppelter Takeaway:
// legitim einsetzen UND erkennen/kontern.
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bGroupthink: Exercise[] = [
  {
    id: 'wave5b-groupthink-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt die Szene?',
      en: 'Which technique carries the scene?',
    },
    scenario: {
      de: 'Blind zu klassifizieren: Strategie-Offsite eines Mittelständlers → Geschäftsführung und Bereichsleiter im Raum. Der Vorsitzende eröffnet: „Wir ziehen die Übernahme durch, da sind wir uns doch alle einig — reißen wir das jetzt nicht wieder auf." Ein Bereichsleiter mit einer kritischen Due-Diligence-Notiz sieht die reihum nickenden Kollegen, schweigt und legt seine Bedenken nicht vor. Das Protokoll vermerkt einen einstimmigen Beschluss; die abweichende Analyse taucht nirgends auf.',
      en: 'To classify blind: a mid-sized firm\'s strategy offsite → management and division heads in the room. The chair opens: "We\'re going through with the acquisition, we all agree on that — let\'s not reopen it now." A division head with a critical due-diligence note sees his colleagues nodding around the table, stays silent and never raises his concerns. The minutes record a unanimous decision; the dissenting analysis appears nowhere.',
    },
    options: [
      { de: 'Groupthink (Konsensdruck)', en: 'Groupthink (Manufactured Consensus)' },
      { de: 'Social Proof (Sozialer Beweis)', en: 'Social Proof' },
      { de: 'Unity/Identity (Wir-Identität)', en: 'Unity/Identity' },
      { de: 'Sycophancy', en: 'Sycophancy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Groupthink: Der Hebel ist der Konsensdruck in der Entscheidungsgruppe selbst — die Schlussformel „wir sind uns doch alle einig" plus die sichtbaren Nickenden bringen den Zweifler zur Selbstzensur, bis eine Illusion der Einmütigkeit entsteht und die kritische Prüfung ausbleibt. So setzt du das professionell ein: Echte Geschlossenheit und Alignment sind ein legitimes Ziel — aber nur, wenn du den Widerspruch aktiv schützt (Advocatus Diaboli, anonyme Einwände, ein Beschluss erst nach den Gegenargumenten). Daran erkennst du es und so entschärfst du es: Achte darauf, ob Einigkeit behauptet wird, bevor Einwände überhaupt gehört wurden — hol die Zweifel ausdrücklich herein und trenne die Harmonie der Runde von der Qualität der Entscheidung. Social Proof läge vor, wenn das Verhalten vieler anderer als Beleg für die richtige Wahl diente („der ganze Markt macht das schon") — hier zählt kein externer Beweis, sondern der interne Druck, den Konsens nicht zu brechen. Unity/Identity würde an eine geteilte Wir-Identität oder Zugehörigkeit appellieren („wir als Familie/Team halten zusammen") — ein solcher Identitätsappell fehlt; es geht allein um die Einmütigkeit im Entscheidungsprozess. Sycophancy wäre übertriebenes Zustimmen und Schmeicheln, um einer einzelnen mächtigen Person zu gefallen — hier dient das Schweigen der Gruppenharmonie und dem Konsens, nicht der Schmeichelei gegenüber einer Person.',
      en: 'Groupthink: the lever is the consensus pressure inside the decision-making group itself — the closing formula "we all agree" plus the visible nodders drive the doubter into self-censorship, until an illusion of unanimity forms and critical scrutiny fails to happen. Using it professionally: genuine cohesion and alignment are a legitimate goal — but only if you actively protect dissent (devil\'s advocate, anonymous objections, a decision only after the counter-arguments). Recognising and defusing it: watch whether agreement is asserted before objections have even been heard — draw the doubts out explicitly and separate the harmony of the room from the quality of the decision. Social Proof would apply if the behaviour of many others served as evidence for the right choice ("the whole market already does it") — here no external proof counts, only the internal pressure not to break the consensus. Unity/Identity would appeal to a shared we-identity or belonging ("we as a family/team stick together") — no such identity appeal appears; it is purely about unanimity in the decision process. Sycophancy would be exaggerated agreement and flattery to please a single powerful person — here the silence serves group harmony and consensus, not flattery of an individual.',
    },
    points: 10,
    primaryTechniqueId: 'groupthink',
    relatedTechniques: ['groupthink', 'social_proof', 'unity_identity', 'sycophancy'],
  },
  {
    id: 'wave5b-groupthink-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du moderierst als Kommunikationsverantwortliche die Sitzung einer Krisen-Taskforce. Die Geschäftsführung hat eine Antwortlinie vorgegeben; im Raum wird genickt, im Chat häufen sich „+1". Dir fällt auf, dass zwei Fachleute, die vorab schriftlich Bedenken angemeldet hatten, jetzt schweigen. Alle wollen die Sitzung schnell schließen.',
      en: 'You are moderating a crisis task force meeting as communications lead. Management has set a response line; the room nods, the chat fills with "+1". You notice that two specialists who had submitted written concerns beforehand are now silent. Everyone wants to close the meeting quickly.',
    },
    options: [
      {
        de: 'Ich hole die Zweifel aktiv herein: Ich bitte die beiden ausdrücklich, ihre schriftlichen Bedenken vorzutragen, lasse Einwände auch anonym sammeln und benenne eine Person als Advocatus Diaboli — der Beschluss fällt erst, wenn die Gegenargumente auf dem Tisch lagen.',
        en: 'I actively draw the doubts out: I ask the two explicitly to present their written concerns, let objections be gathered anonymously too, and name someone as devil\'s advocate — the decision is made only once the counter-arguments are on the table.',
      },
      {
        de: 'Ich schließe die Sitzung zügig — die sichtbare Einmütigkeit ist ein gutes Zeichen, und wer wirklich Bedenken hat, hätte sie ja einbringen können.',
        en: 'I close the meeting swiftly — the visible unanimity is a good sign, and anyone with real concerns could have raised them.',
      },
      {
        de: 'Ich verstärke die Geschlossenheit, indem ich die „+1"-Welle zusammenfasse und als klares, einstimmiges Mandat der Taskforce nach oben melde.',
        en: 'I reinforce the cohesion by summarising the "+1" wave and reporting it upward as the task force\'s clear, unanimous mandate.',
      },
      {
        de: 'Ich spreche die beiden Schweigenden hinterher unter vier Augen an, halte die Runde selbst aber harmonisch — nach außen soll die Taskforce geschlossen wirken.',
        en: 'I speak to the two silent ones privately afterwards, but keep the meeting itself harmonious — outwardly the task force should look united.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: In der Runde wirkt Groupthink — Konsensdruck und die „+1"-Welle erzeugen eine Illusion der Einmütigkeit, unter der die beiden Fachleute ihre vorab notierten Bedenken zurückhalten; die kritische Prüfung fällt aus, obwohl der Zweifel dokumentiert vorliegt. So setzt du das professionell ein: Alignment ist ein legitimes Ziel, aber tragfähig wird es erst, wenn du den Widerspruch strukturell schützt — genau das leistet Option 1 mit ausdrücklicher Einladung, anonymem Kanal und Advocatus Diaboli. Erkennen und kontern: Ein Beschluss trägt erst, wenn die dokumentierten Einwände wirklich vorgetragen wurden — nicht schon, wenn niemand mehr widerspricht; werte Zustimmung, die auf zurückgehaltenen Notizen sitzt, als offene Frage statt als Mandat. Option 2 klingt effizient, verwechselt aber Schweigen mit Zustimmung — „hätte einbringen können" ist genau das, was Selbstzensur verhindert. Option 3 wirkt nach Führungsstärke, macht dich aber zum Treiber des Groupthinks: Du produzierst die Einmütigkeit, die du eigentlich prüfen müsstest. Option 4 sieht fürsorglich aus, konserviert aber die Fassade nach außen; ein Vier-Augen-Gespräch korrigiert die Gruppenentscheidung nicht und lässt die Bedenken aus dem Protokoll heraus.',
      en: 'Mechanism: groupthink is at work in the room — consensus pressure and the "+1" wave create an illusion of unanimity under which the two specialists hold back the concerns they had noted in advance; critical scrutiny fails even though the doubt is on record. Using it professionally: alignment is a legitimate goal, but it only becomes sound once you structurally protect dissent — which is exactly what option 1 does with an explicit invitation, an anonymous channel and a devil\'s advocate. Recognising and countering it: a decision only holds once the documented objections have actually been voiced — not merely once no one pushes back; treat agreement that rests on withheld notes as an open question rather than a mandate. Option 2 sounds efficient but mistakes silence for agreement — "could have raised them" is precisely what self-censorship prevents. Option 3 looks like leadership but makes you the driver of the groupthink: you manufacture the very unanimity you should be testing. Option 4 seems caring but preserves the outward façade; a private word does not correct the group decision and keeps the concerns out of the minutes.',
    },
    points: 10,
    primaryTechniqueId: 'groupthink',
    relatedTechniques: ['groupthink', 'social_proof'],
  },
  {
    id: 'wave5b-groupthink-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Interner Slack-Kanal einer Redaktion: In der Diskussion um die Titelrichtung geben die ersten Wortmeldungen den Ton vor, dann reihen sich Daumen-hoch und „sehe ich auch so" aneinander. Mehrere Redakteurinnen halten die Zeile weiter für riskant, schweigen aber — die anderen sind offenbar alle dafür, und keine will die sichtbare Einigkeit als Einzige brechen. Ein getippter Einwand wird vor der Konferenz wieder gelöscht; nach außen herrscht volle Einigkeit, die Zweifel laufen nur noch als DM zwischen Kolleginnen.',
      en: 'An editorial team\'s internal Slack channel: as the discussion on the headline direction unfolds, the first few posts set the tone and then thumbs-up and "I see it the same way" pile on. Several editors still consider the line risky but stay silent — everyone else is apparently in favour, and none wants to be the one to break the visible agreement. A typed-out objection is deleted before the conference; outwardly there is full agreement, and the doubts run on only as DMs between colleagues.',
    },
    options: [
      { de: 'Groupthink (Konsensdruck)', en: 'Groupthink (Manufactured Consensus)' },
      { de: 'Social Proof (Sozialer Beweis)', en: 'Social Proof' },
      { de: 'Sycophancy', en: 'Sycophancy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Groupthink: Die Gruppe stellt nach außen Einmütigkeit her, während die Zweifel privat (per DM) weiterlaufen — reihum Zustimmung, gelöschter Einwand und Selbstzensur, weil keine die sichtbare Einigkeit als Einzige brechen will, sind die Kennzeichen des Konsensdrucks in einer Entscheidungsrunde. Erkennen und kontern: Frag dich, ob hinter der Titelseite echte Deckung steht oder nur eine geglättete Fläche — hol die stillen Bedenken ausdrücklich in die Konferenz und lies die einheitliche Fassade als Warnsignal, nicht als Bestätigung. Legitim einsetzen: Konsens und Geschlossenheit sind zulässige Ziele, solange du Widerspruch aktiv schützt statt ihn zu glätten. Social Proof läge vor, wenn das Verhalten vieler anderer die Redakteurinnen inhaltlich überzeugte, die Zeile sei richtig („die anderen Medien fahren dieselbe Linie") — hier ändert niemand seine Meinung, die Zweifel bleiben bestehen und laufen nur verdeckt weiter; unterdrückt wird die Äußerung, nicht die Überzeugung. Sycophancy wäre unaufrichtige Zustimmung nach oben, um einer einzelnen mächtigen Person zu gefallen — hier gibt es keine Person, der geschmeichelt wird; die Redakteurinnen richten sich an der Einmütigkeit der Gruppe aus, nicht an der Gunst einer Vorgesetzten.',
      en: 'Groupthink: the group manufactures unanimity outwardly while the doubts run on in private (via DM) — the round of agreement, the deleted objection and the self-censorship, because no one wants to be the single voice that breaks the visible agreement, are the marks of consensus pressure in a decision-making circle. Recognising and countering it: ask whether there is real backing behind the front page or just a smoothed-over surface — bring the silent concerns explicitly into the conference and read a uniform façade as a warning sign, not as confirmation. Using it professionally: consensus and cohesion are legitimate goals, as long as you actively protect dissent rather than smoothing it over. Social Proof would apply if the behaviour of many others actually convinced the editors that the line was right ("the other outlets are running the same line") — but here no one changes their mind; the doubts persist and merely go underground, and what is suppressed is the expression, not the conviction. Sycophancy would be insincere agreement directed upward to please a single powerful person — but here there is no individual being flattered; the editors align with the group\'s unanimity, not with a superior\'s favour.',
    },
    points: 10,
    primaryTechniqueId: 'groupthink',
    relatedTechniques: ['groupthink', 'social_proof', 'sycophancy'],
  },
];
