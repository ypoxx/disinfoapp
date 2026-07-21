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
      { de: 'Emotional Appeal (Angstappell)', en: 'Emotional appeal (fear appeal)' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Fear, Uncertainty and Doubt (FUD)', en: 'Fear, Uncertainty and Doubt (FUD)' },
      { de: 'Künstliche Krise (Krisenausnutzung)', en: 'Manufactured crisis exploitation' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'FUD: Der Vertriebsleiter belegt keine Gefahr, sondern hängt unwiderlegbaren Zweifel an die Alternative — „kann niemand garantieren", „wenn nicht, wer haftet?". Der Hebel setzt darauf, dass eine offene, nicht prüfbare Unsicherheit schwerer auszuräumen ist als eine konkrete Behauptung, und schiebt so die Entscheidung Richtung Zögern oder Ablehnen. Legitim einsetzen: Reale Anbieter-Risiken darfst du ansprechen — professionell bleibt es, wenn du sie überprüfbar machst (Referenzen, Zertifikate, Exit- und Migrationsklauseln) statt sie als diffuse „Wer weiß"-Frage stehen zu lassen. Erkennen und kontern: Du erkennst FUD daran, dass die eigene Option gar nicht positiv belegt wird — verlange konkrete, prüfbare Risiken und übersetze jedes „kann niemand garantieren" in eine entscheidbare Frage (Wie wahrscheinlich? Woran gemessen? Welcher Notfallplan?). Der allgemeine Angstappell (Emotional Appeal) liegt nahe, weil Furcht mitschwingt — er arbeitet aber mit dramatisierter Sprache oder einem drastischen Bild; hier ist der Ton nüchtern-sachlich, der Kern kalter, unfalsifizierbarer Zweifel, nicht das Gefühl selbst. Verlustaversion würde einen konkreten, bezifferten Verlust in den Vordergrund stellen, den der Adressat zu tragen hätte; hier wird kein Verlust gerahmt, sondern gerade die Unwiderlegbarkeit („niemand kann garantieren") zum Hebel gemacht. Die künstliche Krise (Krisenausnutzung) läge vor, wenn er eine konkrete, akute Notlage behauptete oder inszenierte und diese ausschlachtete — er stellt aber keine Krise fest, sondern nur die unbeantwortbare Frage, ob eines Tages eine entstehen könnte.',
      en: 'FUD: the sales director proves no danger; he attaches irrefutable doubt to the alternative — "nobody can guarantee", "if it doesn\'t, who is liable?". The lever relies on an open, untestable uncertainty being harder to dispel than a concrete claim, nudging the decision toward hesitation or rejection. Used legitimately: you may raise genuine vendor risks — it stays professional when you make them checkable (references, certifications, exit and migration clauses) instead of leaving them as a vague "who knows" question. To spot and counter it: you recognise FUD when the speaker\'s own option is never positively evidenced — demand concrete, testable risks and translate every "nobody can guarantee" into a decidable question (how likely? measured how? what contingency plan?). A generic fear appeal seems close because fear is in the air — but it works through dramatised language or a drastic image; here the tone is dry and matter-of-fact, the core cold, unfalsifiable doubt, not the feeling itself. Loss aversion would foreground a concrete, quantified loss the audience would bear; here no loss is framed — instead the very unfalsifiability ("nobody can guarantee") is made the lever. Manufactured crisis exploitation would require him to assert or stage a concrete, acute emergency and cash in on it — but he states no crisis, only the unanswerable question of whether one might someday arise.',
    },
    points: 10,
    primaryTechniqueId: 'fear_uncertainty_doubt',
    relatedTechniques: ['fear_uncertainty_doubt', 'emotional_appeal', 'loss_aversion'],
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
        de: 'Ich drehe den Spieß um und male aus, was der Verbleib auf dem maroden Altsystem kostet — Totalausfall im Quartalsabschluss, verlorene Kundendaten, persönliche Haftung des Ausschusses.',
        en: 'I turn the tables and spell out what staying on the failing legacy system costs — a total outage during quarterly close, lost customer data, personal liability for the committee.',
      },
      {
        de: 'Ich übersetze den offenen Zweifel in prüfbare Größen: Ich benenne die konkreten Migrationsrisiken mit Wahrscheinlichkeit, zeige Testlauf und Rollback-Plan — und mache aus „kann niemand garantieren" eine entscheidbare Sachfrage.',
        en: 'I translate the open doubt into testable terms: I name the concrete migration risks with their likelihood, show the test run and the rollback plan — turning "nobody can guarantee" into a decidable question.',
      },
      {
        de: 'Ich nehme den Einwand als Stoppsignal und vertage die Migration um zwei Quartale, bis restlose Sicherheit besteht — bei einem so erfahrenen Bereichsleiter geht Vorsicht vor Tempo.',
        en: 'I take the objection as a stop signal and postpone the migration by two quarters until there is full certainty — with a department head this experienced, caution beats speed.',
      },
      {
        de: 'Ich weise den Einwand als reine Besitzstands-Blockade zurück und bitte den Bereichsleiter, sich sachlichen Argumenten endlich nicht länger zu verschließen.',
        en: 'I dismiss the objection as pure turf-protecting obstruction and ask the department head to finally stop shutting himself off from rational arguments.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Einwand ist FUD: „Niemand kann garantieren" ist per Konstruktion nicht widerlegbar, benennt aber kein konkretes Risiko — er soll die Entscheidung über diffuse Unsicherheit kippen, nicht über eine prüfbare Aussage. Die beste Option nimmt dem Muster genau seine Grundlage: Du übersetzt den offenen Zweifel in konkrete, messbare Risiken mit Wahrscheinlichkeit, Testlauf und Rückfalloption — damit steht wieder eine entscheidbare Sachfrage im Raum. Legitim einsetzen: Echte Restrisiken zu benennen ist seriös und gehört zu jedem Migrationsplan — der Unterschied ist, ob du sie überprüfbar mit Handlungsweg lieferst oder als „Was, wenn"-Angst stehen lässt. Erkennen und kontern: Sobald eine Warnung sich jeder Prüfung entzieht, frag nach dem konkreten Szenario, seiner Wahrscheinlichkeit und dem Notfallplan — das entschärft FUD, ohne die Sorge kleinzureden. Mit eigenen Schreckensbildern zu kontern verlagert die ganze Debatte auf Angstniveau (Gegen-FUD) und kostet dich die Glaubwürdigkeit, die deinen Plan trägt. Zu vertagen belohnt genau die Taktik und macht unwiderlegbaren Zweifel zum Vetorecht. Den Einwand als Blockade abzukanzeln ist ein Angriff auf die Person statt auf das Argument — die offene Sachfrage „Wie sicher ist die Migration?" bleibt dann unbeantwortet im Raum stehen.',
      en: 'The objection is FUD: "nobody can guarantee" is unfalsifiable by construction yet names no concrete risk — it is meant to tip the decision through diffuse uncertainty, not through a testable claim. The best option removes exactly that foundation: you translate the open doubt into concrete, measurable risks with likelihood, a test run and a fallback — putting a decidable question back on the table. Used legitimately: naming genuine residual risks is sound practice and belongs in every migration plan — the difference is whether you deliver them checkably, with a path of action, or leave them as "what if" fear. To spot and counter it: the moment a warning resists any test, ask for the concrete scenario, its probability and the contingency plan — that defuses FUD without belittling the concern. Countering with alarming imagery of your own shifts the whole debate to the level of fear (counter-FUD) and costs you the credibility your plan rests on. Postponing rewards the very tactic and turns irrefutable doubt into a veto. Dismissing the objection as obstruction attacks the person rather than the argument — the open question "how safe is the migration?" then stays unanswered in the room.',
    },
    points: 10,
    primaryTechniqueId: 'fear_uncertainty_doubt',
    relatedTechniques: ['fear_uncertainty_doubt', 'emotional_appeal', 'ad_hominem'],
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
      { de: 'Künstliche Krise (Krisenausnutzung)', en: 'Manufactured crisis exploitation' },
      { de: 'Fear, Uncertainty and Doubt (FUD)', en: 'Fear, Uncertainty and Doubt (FUD)' },
      { de: 'Emotional Appeal (Angstappell)', en: 'Emotional appeal (fear appeal)' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'FUD: Der Beitrag stellt keine überprüfbare Behauptung auf, sondern reiht unfalsifizierbare Zweifelsfragen aneinander — „Wissen Sie, ob es den Anbieter nächstes Jahr noch gibt?". Der Hebel setzt darauf, dass eine offene Unsicherheit über die günstigere Alternative den Wechsel ausbremst, ohne dass das eigene Produkt positiv belegt werden muss. Legitim einsetzen: Sicherheits- und Standortfragen darfst du aufwerfen — professionell wird daraus eine Checkliste mit prüfbaren Kriterien (Zertifikate, Rechenzentrums-Standort, SLA, Exit-Plan) statt einer Kette rhetorischer Ängste. Erkennen und kontern: Frag bei jeder „Wissen Sie, ob…"-Frage nach dem konkreten, prüfbaren Risiko und beantworte sie für die Alternative sachlich — verdampft der Zweifel dabei, war es FUD. Der allgemeine Angstappell (Emotional Appeal) liegt nahe, weil Haftungs- und Datenverlust-Sorge mitschwingt — er würde aber mit dramatisierter Sprache oder einem drastischen Bild arbeiten; hier bleibt der Ton nüchtern, der Kern ist die kalt gestellte Unsicherheit selbst. Die künstliche Krise (Krisenausnutzung) läge vor, wenn der Beitrag einen konkreten, akuten Notfall behauptete oder inszenierte, um ihn auszunutzen — er behauptet aber keinen Vorfall, sondern fragt nur, was im hypothetischen Ernstfall wäre; ohne festgestellte Krise bleibt es beim Säen von Zweifel.',
      en: 'FUD: the post makes no testable claim; it strings together unfalsifiable doubt-questions — "do you know whether the provider will still exist next year?". The lever relies on open uncertainty about the cheaper alternative stalling the switch, without the vendor\'s own product having to be positively evidenced. Used legitimately: you may raise security and data-location questions — done professionally that becomes a checklist of testable criteria (certifications, data-centre location, SLA, exit plan) rather than a chain of rhetorical fears. To spot and counter it: for every "do you know whether…" question, ask for the concrete, testable risk and answer it factually for the alternative — if the doubt evaporates, it was FUD. A generic fear appeal seems close because worry over liability and data loss is in the air — but it would work through dramatised language or a drastic image; here the tone stays dry, the core is the coldly posed uncertainty itself. Manufactured crisis exploitation would require the post to assert or stage a concrete, acute emergency in order to exploit it — but it asserts no incident, only asks what a hypothetical emergency would mean; with no crisis established, it stays at the level of seeding doubt.',
    },
    points: 10,
    primaryTechniqueId: 'fear_uncertainty_doubt',
    relatedTechniques: ['fear_uncertainty_doubt', 'emotional_appeal'],
  },
];
