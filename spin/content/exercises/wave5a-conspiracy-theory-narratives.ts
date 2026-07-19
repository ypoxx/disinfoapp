// Welle 5a: 3 Übungen für conspiracy_theory_narratives (Verschwörungsnarrative).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'moderate' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aConspiracyTheoryNarratives: Exercise[] = [
  {
    id: 'wave5a-conspiracy_theory_narratives-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der IT-Leiter hier ein?',
      en: 'Which technique is the IT lead using here?',
    },
    scenario: {
      de: 'Krisenrunde der Geschäftsführung nach einem Datenleck: Der IT-Leiter erklärt, der Vorfall sei kein Versagen der eigenen Systeme — Wettbewerber, eine Sicherheitsforschungs-Firma und ein Wirtschaftsjournalist hätten das Leck gemeinsam eingefädelt, um kurz vor dem Börsengang gezielt Vertrauen zu zerstören. Dass die Forensik bislang keine Spur einer solchen Absprache finde, beweise nur, wie sauber die Sache eingefädelt worden sei.',
      en: 'Executive crisis meeting after a data breach: the IT lead argues the incident was no failure of their own systems — a competitor, a security-research firm and a business journalist jointly engineered the leak to destroy trust right before the IPO. That the forensics have so far found no trace of any such arrangement only proves, he says, how cleanly it was set up.',
    },
    options: [
      { de: 'Verschwörungsnarrativ', en: 'Conspiracy theory narrative' },
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Fear, Uncertainty, Doubt (FUD)', en: 'Fear, uncertainty, doubt (FUD)' },
      { de: 'False Cause (Post hoc)', en: 'False cause (post hoc)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verschwörungsnarrativ: Ein unangenehmes Ereignis wird als geheimer, abgestimmter Plan mehrerer mächtiger Akteure (Wettbewerber, Forschungsfirma, Journalist) mit klarer böser Absicht gerahmt — und die Behauptung so gebaut, dass sie unwiderlegbar ist: Das Ausbleiben von Belegen wird selbst zum Beweis der perfekten Vertuschung. Der Hebel: Die Erzählung erklärt das eigene Versagen weg, bündelt Angst und macht jeden Gegenbeleg zum Teil der Verschwörung. Legitim einsetzen: Auf tatsächlich dokumentiertes, koordiniertes Fehlverhalten hinzuweisen ist legitim — professionell wird es, wenn deine Behauptung falsifizierbar bleibt, du Belege sicherst und den Verdacht der Forensik oder den Behörden übergibst, statt eine unbeweisbare Absprache zu unterstellen. Erkennen und kontern: Du erkennst das Muster daran, dass fehlende Beweise als Beweis gelten und Zweifler zu Mitwissern erklärt werden — frag, welche Beobachtung die These widerlegen würde; lässt sich keine benennen, ist es ein Verschwörungsnarrativ. Scapegoating würde einer greifbaren Gruppe kollektiv die Schuld zuweisen und sie als Fremdkörper ausgrenzen — hier ist der Kern aber die geheime Koordination mehrerer Akteure samt unwiderlegbarer Vertuschung, nicht die bloße Sündenbock-Zuweisung. FUD würde diffuse Angst und Zweifel streuen, um zu lähmen — hier gibt es dagegen eine konkrete, geschlossene Täter-Erzählung. False Cause läge vor, wenn allein aus einer zeitlichen Abfolge auf eine Ursache geschlossen würde; hier steht nicht das Timing, sondern der behauptete geheime Plan im Zentrum.',
      en: 'Conspiracy theory narrative: an inconvenient event is framed as the secret, coordinated scheme of several powerful actors (competitor, research firm, journalist) with clear malicious intent — and the claim is built to be unfalsifiable: the absence of evidence is itself turned into proof of a perfect cover-up. The lever: the narrative explains away one\'s own failure, channels fear onto a target and recasts every counter-fact as part of the plot. Used legitimately: pointing to actually documented, coordinated wrongdoing is legitimate — it stays professional when your claim remains falsifiable, you secure evidence and hand the suspicion to forensics or the authorities, rather than positing an unprovable arrangement. To spot and counter it: you recognise the pattern when missing evidence counts as evidence and doubters are declared to be in on it — ask which observation would disprove the thesis; if none can be named, it is a conspiracy narrative. Scapegoating would pin collective blame on a tangible group and cast it out as an outsider — here the core is the secret coordination of several actors plus an unfalsifiable cover-up, not mere scapegoat attribution. FUD would spread diffuse fear and doubt to paralyse — here, by contrast, there is a concrete, self-contained culprit narrative. False cause would apply if a cause were inferred from a mere time sequence; here it is not the timing but the alleged secret plot that is central.',
    },
    points: 10,
    primaryTechniqueId: 'conspiracy_theory_narratives',
    relatedTechniques: ['conspiracy_theory_narratives', 'scapegoating_othering', 'fear_uncertainty_doubt', 'false_cause_post_hoc'],
  },
  {
    id: 'wave5a-conspiracy_theory_narratives-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Kommunikationsverantwortliche stimmst du die Sprachregelung zu einem Produktrückruf ab. Der Vertriebsvorstand drängt auf eine offensive Linie: In der Pressemitteilung solle stehen, der Rückruf sei durch eine abgestimmte Kampagne aus Aufsichtsbehörde, Wettbewerber und Leitmedien erzwungen worden, die das Unternehmen gezielt beschädigen wolle. Belege dafür hat er nicht — „die liegen ja im Verborgenen".',
      en: 'As communications lead you are settling the messaging on a product recall. The head of sales pushes for an aggressive line: the press release should state that the recall was forced by a coordinated campaign of the regulator, a competitor and the leading media, out to damage the company on purpose. He has no evidence for it — "that is all hidden, of course."',
    },
    options: [
      {
        de: 'Ich lehne das unbeweisbare Komplott-Framing ab und halte die Mitteilung auf Prüfbares: Ich benenne die konkrete, belegte Ursache des Rückrufs und die Abhilfe. Gibt es echte Hinweise auf abgestimmtes Fehlverhalten, sichern wir sie und übergeben sie der Rechtsabteilung — statt eine geheime Absprache zu behaupten, die wir nicht zeigen können.',
        en: 'I reject the unprovable plot framing and keep the statement to what is checkable: I name the concrete, evidenced cause of the recall and the remedy. If there are genuine indications of coordinated wrongdoing, we secure them and hand them to legal — rather than asserting a secret arrangement we cannot show.',
      },
      {
        de: 'Ich übernehme die Linie des Vorstands — eine klare Feind-Erzählung schweißt die Belegschaft zusammen und lenkt den Druck von unseren eigenen Fehlern weg.',
        en: 'I adopt the board\'s line — a clear enemy narrative rallies the workforce and diverts pressure away from our own mistakes.',
      },
      {
        de: 'Ich gebe „kein Kommentar" heraus und warte ab — solange wir die Absprache nicht beweisen können, ist Schweigen sicherer, als sich festzulegen.',
        en: 'I put out "no comment" and wait — as long as we cannot prove the arrangement, silence is safer than committing.',
      },
      {
        de: 'Ich entschärfe das Framing, indem ich die Schuld auf einen einzigen Akteur zuspitze: Ich nenne nur den Wettbewerber als Urheber — das ist konkreter und wirkt glaubwürdiger als ein ganzes Netzwerk.',
        en: 'I soften the framing by narrowing the blame to one actor: I name only the competitor as the instigator — that is more concrete and reads as more credible than a whole network.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorstand will ein Verschwörungsnarrativ setzen: ein Ereignis als geheimen, abgestimmten Plan mächtiger Akteure, unwiderlegbar gebaut („die Belege liegen im Verborgenen"). Die beste Option nimmt dem Muster die Grundlage: Du bleibst bei Prüfbarem, benennst die belegte Ursache und die Abhilfe und gibst einen echten Verdacht in einen Prozess (Recht, Behörde), statt ihn öffentlich zu behaupten. Legitim einsetzen: Auf dokumentiertes, koordiniertes Fehlverhalten hinzuweisen ist zulässig — der Unterschied ist, ob deine Aussage falsifizierbar und belegt ist oder eine unsichtbare Absprache unterstellt. Erkennen und kontern: Frag bei jeder solchen These, welcher Befund sie widerlegen würde — lässt sich keiner benennen und wird das Fehlen von Beweisen zum Beweis, ist es ein Verschwörungsnarrativ. Die Linie zu übernehmen begeht genau diesen Fehler und bindet die Glaubwürdigkeit des Unternehmens an eine Behauptung ohne Boden. „Kein Kommentar" wirkt vorsichtig, überlässt aber das Feld der Spekulation und beantwortet die eigentliche Frage nach der Rückruf-Ursache nicht. Die Schuld auf einen einzigen Akteur zuzuspitzen wirkt konkreter, ersetzt aber nur das große Komplott durch einen unbelegten Sündenbock — genauso unbeweisbar, nur kleiner.',
      en: 'The board wants to plant a conspiracy narrative: an event framed as the secret, coordinated scheme of powerful actors, built to be unfalsifiable ("the evidence is hidden"). The best option removes that foundation: you stay with what is checkable, name the evidenced cause and the remedy, and route a genuine suspicion into a process (legal, authorities) rather than asserting it in public. Used legitimately: pointing to documented, coordinated wrongdoing is fair — the difference is whether your statement is falsifiable and evidenced or posits an invisible arrangement. To spot and counter it: for any such thesis, ask which finding would disprove it — if none can be named and the absence of evidence becomes the evidence, it is a conspiracy narrative. Adopting the line commits exactly that error and ties the company\'s credibility to a groundless claim. "No comment" looks cautious but cedes the field to speculation and leaves the real question about the recall\'s cause unanswered. Narrowing the blame to a single actor seems more concrete but merely swaps the grand plot for an unevidenced scapegoat — just as unprovable, only smaller.',
    },
    points: 10,
    primaryTechniqueId: 'conspiracy_theory_narratives',
    relatedTechniques: ['conspiracy_theory_narratives', 'scapegoating_othering'],
  },
  {
    id: 'wave5a-conspiracy_theory_narratives-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Newsletter-Beitrag des Gründers einer Energie-Wende-Firma an seine Abonnenten: „Warum kommt unsere Technologie nicht in Fahrt? Weil ein Netzwerk aus alter Industrie, Aufsicht und Fachpresse im Stillen zusammenarbeitet, um sie auszubremsen — jede negative Studie, jede verzögerte Genehmigung folgt demselben Drehbuch. Dass man ihnen nichts nachweisen kann, zeigt nur, wie gut sie es verbergen." Belege für die Absprache nennt er keine.',
      en: 'Newsletter piece by the founder of an energy-transition company to his subscribers: "Why isn\'t our technology taking off? Because a network of legacy industry, regulators and the trade press quietly works together to hold it back — every negative study, every delayed permit follows the same script. That nothing can be pinned on them only shows how well they hide it." He offers no evidence for the arrangement.',
    },
    options: [
      { de: 'Verschwörungsnarrativ', en: 'Conspiracy theory narrative' },
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Narrative Persuasion (Erzähl-Überzeugung)', en: 'Narrative persuasion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verschwörungsnarrativ: Der Gründer erklärt den ausbleibenden Erfolg als geheimen, abgestimmten Plan mehrerer mächtiger Akteure („Netzwerk aus Industrie, Aufsicht und Presse", „dasselbe Drehbuch") — und macht die These unwiderlegbar, indem das Fehlen von Beweisen zum Beleg der Vertuschung wird. Der Hebel: Die Erzählung liefert eine geschlossene Erklärung, entlastet die eigene Technologie und immunisiert sich gegen jeden Einwand. Erkennen und kontern: Frag, welche Beobachtung die Behauptung widerlegen würde — wird jeder Gegenbeleg als Teil des Plans umgedeutet, ist die These nicht falsifizierbar und damit ein Verschwörungsnarrativ. Legitim einsetzen: Auf belegbare, koordinierte Marktbehinderung hinzuweisen ist zulässig, solange deine Aussage prüfbar bleibt und du die Belege offenlegst. Scapegoating würde einer greifbaren Gruppe kollektiv die Schuld zuweisen und sie ausgrenzen — hier ist der Kern aber die behauptete geheime Koordination samt unwiderlegbarer Vertuschung, nicht die bloße Schuldzuweisung. Narrative Persuasion meint, mit einer mitreißenden Geschichte statt mit Fakten zu überzeugen; das ist zwar das Vehikel, doch das prägende Muster hier ist der unfalsifizierbare geheime Plan mächtiger Akteure.',
      en: 'Conspiracy theory narrative: the founder explains the lack of success as the secret, coordinated scheme of several powerful actors ("a network of industry, regulators and press", "the same script") — and makes the thesis unfalsifiable by turning the absence of evidence into proof of the cover-up. The lever: the narrative offers a closed explanation, exonerates his own technology and immunises itself against any objection. To spot and counter it: ask which observation would disprove the claim — if every counter-fact is reinterpreted as part of the plan, the thesis is not falsifiable and thus a conspiracy narrative. Used legitimately: pointing to evidenced, coordinated market obstruction is fair, as long as your statement stays checkable and you disclose the evidence. Scapegoating would pin collective blame on a tangible group and exclude it — here the core is the alleged secret coordination plus an unfalsifiable cover-up, not mere blame attribution. Narrative persuasion means winning people over with a gripping story instead of facts; that is the vehicle here, but the defining pattern is the unfalsifiable secret plot of powerful actors.',
    },
    points: 10,
    primaryTechniqueId: 'conspiracy_theory_narratives',
    relatedTechniques: ['conspiracy_theory_narratives', 'scapegoating_othering', 'narrative_persuasion'],
  },
];
