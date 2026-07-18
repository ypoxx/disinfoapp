// Pilotwelle R3: 3 Übungen für availability_heuristic (Verfügbarkeitsheuristik).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotAvailabilityHeuristic: Exercise[] = [
  {
    id: 'p3-availability_heuristic-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt die Argumentation?',
      en: 'Which technique is doing the work in this argument?',
    },
    scenario: {
      de: 'Vorstandssitzung zur Budgetfreigabe, Leiter IT-Sicherheit → Vorstand, du begleitest die Vorlage kommunikativ. Statt der eigenen Vorfallstatistik zeigt er drei bebilderte Fallgeschichten gehackter Mittelständler, die in den letzten Wochen Schlagzeilen machten, erzählt jede im Detail nach und schließt: "Sie sehen ja selbst, wie oft das inzwischen passiert — die Frage ist nicht ob, sondern wann es uns trifft." Eine Zahl, wie häufig solche Angriffe die eigene Branche tatsächlich treffen, nennt er an keiner Stelle.',
      en: 'Board meeting on a budget approval; the head of IT security presents to the board, and you support the paper on the comms side. Instead of the company\'s own incident statistics, he shows three illustrated case stories of hacked mid-sized firms that made headlines in recent weeks, retells each in detail, and concludes: "You can see for yourselves how often this happens now — the question is not if but when it hits us." At no point does he give a figure for how often such attacks actually hit his own industry.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Verfügbarkeitsheuristik: Wie leicht Beispiele erinnerbar sind, bestimmt, wie häufig etwas erscheint — deshalb ersetzen drei frische, bildhaft nacherzählte Schlagzeilenfälle die Häufigkeitsfrage ("wie oft das passiert") und lassen ein statistisch seltenes Ereignis unausweichlich wirken. Legitim einsetzen: Ein aktueller Fall darf ein reales Risiko anschaulich machen — professionell wird es, wenn daneben die Basisrate steht, also die Zahl, wie oft das Ereignis die eigene Branche tatsächlich trifft. Erkennen und kontern: Immer wenn Anekdoten Wahrscheinlichkeitsaussagen tragen, die Basisrate einfordern ("Wie viele Unternehmen unserer Größe traf das im letzten Jahr?"). Cherry-Picking wirkt plausibel, weil die eigene Statistik weggelassen wird — Cherry-Picking bezeichnet aber das selektive Auswählen stützender Belege aus einer vorhandenen Datenlage; hier arbeitet ein anderer Hebel: Nicht die Auswahl der Daten, sondern die leichte Erinnerbarkeit dramatischer Einzelfälle erzeugt das Häufigkeitsurteil. Der Ankereffekt liegt nahe, weil ein Eindruck zu Beginn gesetzt wird — er bräuchte aber einen Ausgangswert, an dem spätere Schätzungen kleben; hier wird gar keine Zahl genannt. Verlustaversion passt scheinbar, weil ein Schaden droht — sie würde jedoch betonen, was beim Nichthandeln verloren geht, während hier die wahrgenommene Häufigkeit des Ereignisses selbst verzerrt wird.',
      en: 'Availability heuristic: how easily examples come to mind drives how frequent something seems — which is why three fresh, vividly retold headline cases stand in for the frequency question ("how often this happens") and make a statistically rare event feel inevitable. Used legitimately: a current case may make a real risk tangible — it becomes professional when the base rate sits next to it, i.e. the figure for how often the event actually hits your own industry. To recognise and counter it: whenever anecdotes carry probability claims, demand the base rate ("how many companies our size did this hit last year?"). Cherry-picking looks plausible because the company\'s own statistics are omitted — but cherry-picking means selectively picking supportive evidence from an existing body of data; the lever here is different: it is not the selection of data but the easy recall of dramatic single cases that produces the frequency judgment. Anchoring seems close because an impression is set early on — but it would need an initial value for later estimates to stick to, and no number is given at all. Loss aversion fits on the surface because damage looms — but it would stress what is lost by not acting, whereas here it is the perceived frequency of the event itself that gets distorted.',
    },
    points: 10,
    primaryTechniqueId: 'availability_heuristic',
    relatedTechniques: ['availability_heuristic', 'anchoring', 'cherry_picking', 'loss_aversion'],
  },
  {
    id: 'p3-availability_heuristic-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation eines Lebensmittelherstellers. Ein Wettbewerber steckt seit Tagen in einem breit berichteten Rückruf. Im wöchentlichen Jour fixe schlägt der Vertriebsleiter für eure ohnehin geplante Pressemitteilung zur Produktsicherheit vor: "Ruf die Rückruf-Bilder auf und positioniere uns als die Sicheren — solange die Sache präsent ist, glaubt jeder, dass so etwas ständig passiert. Dieses Fenster müssen wir nutzen." Tatsächlich sind Rückrufe dieser Art in der Branche sehr selten.',
      en: 'You head corporate communications at a food manufacturer. A competitor has been stuck in a widely covered product recall for days. In the weekly leadership check-in, the sales director makes a suggestion for your already-planned press release on product safety: "Play up the recall images and position us as the safe ones — as long as it\'s fresh in people\'s minds, everyone believes this happens all the time. We have to use this window." In fact, recalls of this kind are very rare in the industry.',
    },
    options: [
      {
        de: 'Ich folge dem Vorschlag — der Anlass ist real, die Aufmerksamkeit ist da, und wer das Zeitfenster nicht nutzt, überlässt es dem Wettbewerb, die Deutung zu setzen.',
        en: 'I go with the suggestion — the occasion is real, the attention is there, and if we do not use the window, we leave it to competitors to set the narrative.',
      },
      {
        de: 'Ich nutze den Anlass, ohne die verzerrte Risikowahrnehmung zu füttern: Die Mitteilung nimmt die aktuelle Debatte zum Aufhänger, ordnet mit Branchendaten ein, wie selten solche Vorfälle tatsächlich sind, und belegt unsere Prüfprozesse konkret.',
        en: 'I use the occasion without feeding the distorted risk perception: the release takes the current debate as its hook, uses industry data to put into perspective how rare such incidents actually are, and documents our testing processes concretely.',
      },
      {
        de: 'Ich verschiebe die Pressemitteilung um ein halbes Jahr — jede zeitliche Nähe zum Rückruf würde zwangsläufig als Ausschlachten der Lage gelesen.',
        en: 'I postpone the press release by six months — any temporal proximity to the recall would inevitably be read as exploiting the situation.',
      },
      {
        de: 'Ich übernehme die Stoßrichtung, nenne den Wettbewerber aber nicht beim Namen — ohne Namensnennung ist die Anspielung rechtlich wie ethisch unbedenklich.',
        en: 'I keep the thrust but do not name the competitor — without naming names, the allusion is legally and ethically unobjectionable.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Vorschlag setzt auf die Verfügbarkeitsheuristik: Solange die Rückruf-Bilder präsent sind, überschätzt das Publikum, wie häufig solche Vorfälle sind — und genau diese Verzerrung soll die eigene Positionierung tragen, obwohl das Ereignis selten ist. Legitim einsetzen: Ein aktueller Anlass als Aufhänger ist handwerklich sauber — professionell bleibt es, wenn die Mitteilung die Wahrnehmung einordnet statt sie auszunutzen: die Basisrate nennen — also die Zahl, wie oft solche Vorfälle die Branche tatsächlich treffen — und eigene Prüfprozesse belegen; genau das leistet die richtige Option, und sie ist nebenbei die robustere Positionierung, falls es die eigene Branche doch einmal trifft. Erkennen und kontern: Wenn eine Kommunikationsidee davon lebt, dass "die Sache gerade präsent ist", prüfen, ob sie eine Übertreibung der tatsächlichen Häufigkeit braucht, um zu funktionieren. Option 1 wirkt plausibel, weil Anlassbezug tatsächlich Standardhandwerk ist — sie übernimmt aber ungefiltert das Kalkül, eine bekannt falsche Häufigkeitswahrnehmung zu verstärken. Option 3 überkorrigiert: Nicht der Zeitpunkt ist das Problem, sondern die Angstverstärkung; wer den legitimen Anlass verschenkt, kommuniziert schlicht gar nicht. Option 4 verwechselt die Ebenen: Der Verzicht auf Namensnennung ändert nichts daran, dass die Botschaft von einer verzerrten Risikowahrnehmung lebt — das Problem ist der Mechanismus, nicht die Namensnennung.',
      en: 'The suggestion runs on the availability heuristic: as long as the recall images are salient, the audience overestimates how common such incidents are — and precisely this distortion is meant to carry the positioning, even though the event is rare. Used legitimately: hooking a release to a current occasion is sound craft — it stays professional when the release calibrates perception instead of exploiting it: state the base rate — the figure for how often such incidents actually hit the industry — and document your own testing processes; that is exactly what the correct option does, and it is also the more robust positioning should your own industry ever be hit. To recognise and counter it: when a comms idea depends on something "being fresh in people\'s minds", check whether it needs an exaggeration of the actual frequency to work. Option 1 looks plausible because newsjacking genuinely is standard craft — but it adopts, unfiltered, the calculation of amplifying a frequency perception known to be false. Option 3 overcorrects: the timing is not the problem, the fear amplification is; giving up the legitimate occasion means simply not communicating. Option 4 confuses the levels: dropping the name changes nothing about the message living off a distorted risk perception — the problem is the mechanism, not the naming.',
    },
    points: 10,
    primaryTechniqueId: 'availability_heuristic',
    relatedTechniques: ['availability_heuristic', 'emotional_appeal', 'framing'],
  },
  {
    id: 'p3-availability_heuristic-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster nutzt der Post?',
      en: 'Which pattern is the post using?',
    },
    scenario: {
      de: 'LinkedIn-Post eines Versicherungsmaklers, gerichtet an Geschäftsführer im Mittelstand: "Der Cyberangriff auf den Klinikverbund ist gerade in allen Nachrichten. Man liest ja inzwischen ständig von solchen Fällen — das zeigt, wie verbreitet das Risiko längst ist. Kaum ein Mittelständler bleibt heute noch verschont."',
      en: 'LinkedIn post by an insurance broker, aimed at managing directors of mid-sized firms: "The cyberattack on the hospital group is all over the news right now. You read about cases like this all the time these days — which just shows how widespread the risk has become. Hardly any mid-sized firm is spared anymore."',
    },
    options: [
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verfügbarkeitsheuristik: Der Post schließt von der Erinnerbarkeit auf die Häufigkeit — "man liest ständig davon" wird zu "das Risiko ist verbreitet" und "kaum jemand bleibt verschont", ohne eine einzige Zahl zur tatsächlichen Betroffenheit. Dass ständig berichtet wird, belegt aber nur die Nachrichtenlage, nicht die Fallzahlen; genau dieser Kurzschluss ist der Mechanismus. Legitim einsetzen: Anschaulichkeit ist nicht das Problem — entscheidend ist die Auswahl des Falls: Wer statt des gerade lautesten Vorfalls einen für den Mittelstand tatsächlich typischen wählt, illustriert das Risiko, ohne die Häufigkeitswahrnehmung zu verzerren. Erkennen und kontern: Wenn "ständig"/"kaum jemand"-Aussagen sich auf Schlagzeilen statt auf Daten stützen, nach der Datenbasis fragen, bevor man die Risikoeinschätzung übernimmt. Emotionale Appelle wirken plausibel, weil ein Cyberangriffs-Szenario Geschäftsführer naturgemäß beunruhigt — der Post argumentiert aber nicht über Gefühle, sondern über einen Erinnerungs-Schluss von Berichtsfrequenz auf Verbreitung; die Beunruhigung entsteht erst als Folge des überhöhten Häufigkeitsurteils. Themensetzung liegt nahe, weil eine Nachrichtenlage aufgegriffen wird — sie beschreibt aber, wie Medien durch wiederholte Berichterstattung bestimmen, worüber gesprochen wird; hier setzt niemand ein Thema, sondern jemand münzt dessen Präsenz in eine überzogene Häufigkeitsaussage um.',
      en: 'Availability heuristic: the post reasons from recall to frequency — "you read about this all the time" becomes "the risk is widespread" and "hardly anyone is spared", without a single figure on actual exposure. Constant coverage only proves the state of the news cycle, not the case numbers; that shortcut is the mechanism. Used legitimately: vividness itself is not the problem — what matters is which case you pick: choosing an incident that is actually typical for mid-sized firms, rather than the one currently making the most noise, illustrates the risk without distorting the perceived frequency. To recognise and counter it: when "all the time" or "hardly anyone" claims rest on headlines rather than data, ask for the data basis before adopting the risk assessment. Emotional appeal looks plausible because a cyberattack scenario is naturally unsettling for managing directors — but the post does not argue through feelings; it argues through an inference from coverage frequency to prevalence, and the unease only follows from the inflated frequency judgment. Agenda setting seems close because a news cycle is being picked up — but it describes how media determine what gets talked about through repeated coverage; here nobody is setting a topic, someone is converting its salience into an inflated frequency claim.',
    },
    points: 10,
    primaryTechniqueId: 'availability_heuristic',
    relatedTechniques: ['availability_heuristic', 'emotional_appeal', 'agenda_setting'],
  },
];
