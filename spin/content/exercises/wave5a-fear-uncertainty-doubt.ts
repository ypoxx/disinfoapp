// Welle 5a: 3 Übungen für fear_uncertainty_doubt (FUD).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aFearUncertaintyDoubt: Exercise[] = [
  {
    id: 'wave5a-fear_uncertainty_doubt-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Vertriebsleiter hier ein?',
      en: 'Which technique is the sales director using here?',
    },
    scenario: {
      de: 'Evaluierungstermin bei einem Maschinenbauer: Ein günstigerer Cloud-Challenger liegt im Auswahlverfahren vorn. Der Vertriebsleiter des etablierten Anbieters sagt zum IT-Leiter: „Ehrlich gesagt — bei so einem jungen Anbieter kann Ihnen heute niemand garantieren, dass es die Plattform in drei Jahren überhaupt noch gibt. Und wenn nicht: Wer migriert dann Ihre Daten, und wer haftet? Wollen Sie dieses Risiko wirklich eingehen?" Einen konkreten Vorfall oder Beleg nennt er nicht.',
      en: 'Evaluation meeting at a machinery manufacturer: a cheaper cloud challenger is leading the selection. The established vendor\'s sales director tells the IT lead: "Honestly — with a provider that young, nobody can guarantee today that the platform will even exist in three years. And if it doesn\'t: who migrates your data then, and who is liable? Do you really want to take that risk?" He cites no concrete incident or evidence.',
    },
    options: [
      { de: 'Fear, Uncertainty and Doubt (FUD)', en: 'Fear, Uncertainty and Doubt (FUD)' },
      { de: 'Emotional Appeal (Angstappell)', en: 'Emotional appeal (fear appeal)' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'FUD: Der Vertriebsleiter belegt keine Gefahr, sondern hängt unwiderlegbaren Zweifel an die Alternative — „kann niemand garantieren", „wenn nicht, wer haftet?". Der Hebel setzt darauf, dass eine offene, nicht prüfbare Unsicherheit schwerer auszuräumen ist als eine konkrete Behauptung, und schiebt so die Entscheidung Richtung Zögern oder Ablehnung. Legitim einsetzen: Reale Anbieter-Risiken darfst du ansprechen — professionell bleibt es, wenn du sie überprüfbar machst (Referenzen, Zertifikate, Exit- und Migrationsklauseln) statt sie als diffuse „Wer weiß"-Frage stehen zu lassen. Erkennen und kontern: Du erkennst FUD daran, dass die eigene Option gar nicht positiv belegt wird — verlange konkrete, prüfbare Risiken und übersetze jedes „kann niemand garantieren" in eine entscheidbare Frage (Wie wahrscheinlich? Woran gemessen? Welcher Notfallplan?). Der allgemeine Angstappell (Emotional Appeal) liegt nahe, weil Furcht mitschwingt — er arbeitet aber mit einer emotionalen Botschaft oder einem Bild; hier ist der Kern kalter, unfalsifizierbarer Zweifel, nicht das Gefühl selbst. Die Verfügbarkeitsheuristik bräuchte ein lebhaftes, erinnerbares Beispiel („denken Sie an den Ausfall bei X"), das ein Risiko wahrscheinlicher erscheinen lässt — genau ein solches Beispiel fehlt hier. Verlustaversion würde einen konkreten, dir selbst drohenden Verlust in den Vordergrund stellen; hier wird kein bezifferter Verlust gerahmt, sondern offene Unsicherheit erzeugt.',
      en: 'FUD: the sales director proves no danger; he attaches irrefutable doubt to the alternative — "nobody can guarantee", "if it doesn\'t, who is liable?". The lever relies on an open, untestable uncertainty being harder to dispel than a concrete claim, nudging the decision toward hesitation or rejection. Used legitimately: you may raise genuine vendor risks — it stays professional when you make them checkable (references, certifications, exit and migration clauses) instead of leaving them as a vague "who knows" question. To spot and counter it: you recognise FUD when the speaker\'s own option is never positively evidenced — demand concrete, testable risks and translate every "nobody can guarantee" into a decidable question (how likely? measured how? what contingency plan?). A generic fear appeal seems close because fear is in the air — but that works through an emotional message or image; here the core is cold, unfalsifiable doubt, not the feeling itself. The availability heuristic would need a vivid, recallable example ("remember the outage at X") that makes a risk feel more probable — no such example appears here. Loss aversion would foreground a concrete loss threatening you specifically; here no quantified loss is framed, only open uncertainty is manufactured.',
    },
    points: 10,
    primaryTechniqueId: 'fear_uncertainty_doubt',
    relatedTechniques: ['fear_uncertainty_doubt', 'emotional_appeal', 'availability_heuristic', 'loss_aversion'],
  },
  {
    id: 'wave5a-fear_uncertainty_doubt-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Lenkungsausschuss zur Ablösung eines Altsystems: Als Projektleiterin präsentierst du den Migrationsplan. Ein Bereichsleiter, der am alten System hängt, sagt in die Runde: „Niemand kann uns garantieren, dass diese Migration ohne Datenverlust läuft. Wollen wir dieses Restrisiko wirklich der ganzen Firma zumuten?" Die Stimmung im Gremium kippt spürbar ins Zögern.',
      en: 'Steering committee on replacing a legacy system: as project lead, you present the migration plan. A department head attached to the old system tells the room: "Nobody can guarantee this migration runs without data loss. Do we really want to impose that residual risk on the whole company?" The mood in the committee tips visibly toward hesitation.',
    },
    options: [
      {
        de: 'Ich hole den diffusen Zweifel auf den Boden: Ich benenne die konkreten Migrationsrisiken mit Eintrittswahrscheinlichkeit, zeige Testmigration, Rollback-Plan und messbare Erfolgskriterien — und mache aus dem unwiderlegbaren „kann niemand garantieren" prüfbare, entscheidbare Fragen.',
        en: 'I bring the vague doubt down to earth: I name the concrete migration risks with their likelihood, show the test migration, the rollback plan and measurable success criteria — turning the irrefutable "nobody can guarantee" into checkable, decidable questions.',
      },
      {
        de: 'Ich vertage das Projekt: Wenn ein erfahrener Bereichsleiter solche Bedenken äußert, ist das Risiko offenbar zu hoch — Sicherheit geht vor.',
        en: 'I postpone the project: if an experienced department head voices such concerns, the risk is evidently too high — safety first.',
      },
      {
        de: 'Ich kontere mit eigenen Schreckensbildern: Ich male aus, was passiert, wenn wir am maroden Altsystem festhalten — Totalausfall, Datenverlust, Haftungsfälle.',
        en: 'I counter with alarming imagery of my own: I spell out what happens if we cling to the failing legacy system — total outage, data loss, liability cases.',
      },
      {
        de: 'Ich weise den Einwand als reine Blockadetaktik zurück und bitte den Bereichsleiter, sich sachlichen Argumenten nicht länger zu verschließen.',
        en: 'I dismiss the objection as pure obstruction and ask the department head to stop shutting himself off from rational arguments.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Einwand ist FUD: „Niemand kann garantieren" ist per Konstruktion nicht widerlegbar, benennt aber kein konkretes Risiko — er soll die Entscheidung über diffuse Unsicherheit kippen, nicht über eine prüfbare Aussage. Die beste Option nimmt dem Muster genau seine Grundlage: Du übersetzt den offenen Zweifel in konkrete, messbare Risiken mit Wahrscheinlichkeit, Testlauf und Rückfalloption — damit steht wieder eine entscheidbare Sachfrage im Raum. Legitim einsetzen: Echte Restrisiken zu benennen ist seriös und gehört zu jedem Migrationsplan — der Unterschied ist, ob du sie überprüfbar mit Handlungsweg lieferst oder als „Was, wenn"-Angst stehen lässt. Erkennen und kontern: Sobald eine Warnung sich jeder Prüfung entzieht, frag nach dem konkreten Szenario, seiner Wahrscheinlichkeit und dem Notfallplan — das entschärft FUD, ohne die Sorge kleinzureden. Vertagen belohnt genau die Taktik und macht unwiderlegbaren Zweifel zum Vetorecht. Mit eigenen Schreckensbildern zu kontern verlagert die ganze Debatte auf Angstniveau (Gegen-FUD) und kostet dich die Glaubwürdigkeit, die deinen Plan trägt. Den Einwand als Blockade abzukanzeln ist ein Angriff auf die Person statt auf das Argument — die offene Sachfrage „Wie sicher ist die Migration?" bleibt dann unbeantwortet im Raum stehen.',
      en: 'The objection is FUD: "nobody can guarantee" is unfalsifiable by construction yet names no concrete risk — it is meant to tip the decision through diffuse uncertainty, not through a testable claim. The best option removes exactly that foundation: you translate the open doubt into concrete, measurable risks with likelihood, a test run and a fallback — putting a decidable question back on the table. Used legitimately: naming genuine residual risks is sound practice and belongs in every migration plan — the difference is whether you deliver them checkably, with a path of action, or leave them as "what if" fear. To spot and counter it: the moment a warning resists any test, ask for the concrete scenario, its probability and the contingency plan — that defuses FUD without belittling the concern. Postponing rewards the very tactic and turns irrefutable doubt into a veto. Countering with alarming imagery of your own shifts the whole debate to the level of fear (counter-FUD) and costs you the credibility your plan rests on. Dismissing the objection as obstruction attacks the person rather than the argument — the open question "how safe is the migration?" then stays unanswered in the room.',
    },
    points: 10,
    primaryTechniqueId: 'fear_uncertainty_doubt',
    relatedTechniques: ['fear_uncertainty_doubt', 'emotional_appeal'],
  },
  {
    id: 'wave5a-fear_uncertainty_doubt-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'LinkedIn-Beitrag eines Produktmarketing-Managers bei einem etablierten Backup-Software-Anbieter: „3 Fragen, die sich jeder CIO vor dem Wechsel zu einem Billig-Cloud-Backup stellen sollte: Wissen Sie wirklich, in welchem Land Ihre Daten liegen? Wissen Sie, ob es den Anbieter im nächsten Jahr noch gibt? Und wer haftet, wenn im Ernstfall nichts mehr da ist?" Weder ein konkreter Vorfall noch Daten werden genannt — nur Fragen, die Unsicherheit erzeugen.',
      en: 'LinkedIn post by a product-marketing manager at an established backup-software vendor: "3 questions every CIO should ask before switching to a cut-price cloud backup: Do you really know which country your data sits in? Do you know whether the provider will still exist next year? And who is liable if, in an emergency, nothing is left?" Neither a concrete incident nor any data is cited — only questions that manufacture uncertainty.',
    },
    options: [
      { de: 'Fear, Uncertainty and Doubt (FUD)', en: 'Fear, Uncertainty and Doubt (FUD)' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Emotional Appeal (Angstappell)', en: 'Emotional appeal (fear appeal)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'FUD: Der Beitrag stellt keine überprüfbare Behauptung auf, sondern reiht unfalsifizierbare Zweifelsfragen aneinander — „Wissen Sie, ob es den Anbieter nächstes Jahr noch gibt?". Der Hebel setzt darauf, dass eine offene Unsicherheit über die günstigere Alternative den Wechsel ausbremst, ohne dass das eigene Produkt positiv belegt werden muss. Legitim einsetzen: Sicherheits- und Standortfragen darfst du aufwerfen — professionell wird daraus eine Checkliste mit prüfbaren Kriterien (Zertifikate, Rechenzentrums-Standort, SLA, Exit-Plan) statt einer Kette rhetorischer Ängste. Erkennen und kontern: Frag bei jeder „Wissen Sie, ob…"-Frage nach dem konkreten, prüfbaren Risiko und beantworte sie für die Alternative sachlich — verdampft der Zweifel dabei, war es FUD. Die Verfügbarkeitsheuristik liegt nahe, weil auch sie Risiken größer wirken lässt — sie bräuchte aber ein lebhaftes, erinnerbares Beispiel („erinnern Sie sich an den großen Ausfall bei X?"), das hier bewusst fehlt; es bleibt bei bloßen Fragen. Der allgemeine Angstappell würde mit einem emotionalen Bild oder einer Erzählung arbeiten; hier ist der Kern die offene, kalt gestellte Unsicherheit selbst, nicht ein Gefühl oder Bild.',
      en: 'FUD: the post makes no testable claim; it strings together unfalsifiable doubt-questions — "do you know whether the provider will still exist next year?". The lever relies on open uncertainty about the cheaper alternative stalling the switch, without the vendor\'s own product having to be positively evidenced. Used legitimately: you may raise security and data-location questions — done professionally that becomes a checklist of testable criteria (certifications, data-centre location, SLA, exit plan) rather than a chain of rhetorical fears. To spot and counter it: for every "do you know whether…" question, ask for the concrete, testable risk and answer it factually for the alternative — if the doubt evaporates, it was FUD. The availability heuristic seems close because it too inflates perceived risk — but it would need a vivid, recallable example ("remember the big outage at X?"), which is deliberately absent here; only questions remain. A generic fear appeal would work through an emotional image or narrative; here the core is the open, coldly posed uncertainty itself, not a feeling or image.',
    },
    points: 10,
    primaryTechniqueId: 'fear_uncertainty_doubt',
    relatedTechniques: ['fear_uncertainty_doubt', 'availability_heuristic', 'emotional_appeal'],
  },
];
