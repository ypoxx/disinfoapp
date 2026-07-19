// Welle 5a: 3 Übungen für slippery_slope (Dammbruchargument).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aSlipperySlope: Exercise[] = [
  {
    id: 'wave5a-slippery_slope-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Abteilungsleiter hier ein?',
      en: 'Which technique is the department head using here?',
    },
    scenario: {
      de: 'Betriebsversammlung zur Einführung einer freiwilligen Kernzeit-Lockerung für ein Pilotteam: Ein Abteilungsleiter warnt vor der Belegschaft: „Wenn wir die Kernzeit heute für ein Team aufweichen, will sie morgen jede Abteilung, übermorgen fällt die Anwesenheitspflicht ganz — und am Ende steuert niemand mehr, wer wann arbeitet." Warum der erste Schritt zwangsläufig zum letzten führt, belegt er nicht.',
      en: 'Company assembly on introducing a voluntary relaxation of core hours for one pilot team: a department head warns the workforce: "If we loosen core hours for one team today, tomorrow every department wants it, the day after all attendance rules collapse — and in the end nobody controls who works when." He offers no evidence for why the first step inevitably leads to the last.',
    },
    options: [
      { de: 'Slippery Slope (Dammbruchargument)', en: 'Slippery slope' },
      { de: 'Salami-Taktik (Gradualismus)', en: 'Salami tactics (gradualism)' },
      { de: 'False Cause (Post hoc)', en: 'False cause (post hoc)' },
      { de: 'Fear, Uncertainty and Doubt (FUD)', en: 'Fear, uncertainty and doubt (FUD)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Slippery Slope: Der Abteilungsleiter koppelt einen kleinen, freiwilligen Schritt direkt an ein Extrem („niemand steuert mehr, wer wann arbeitet") und behauptet eine zwangsläufige Kette — ohne zu begründen, warum jede Zwischenstufe die nächste erzwingt. Der Hebel verschiebt die Debatte vom eigentlichen Pilotversuch auf ein Schreckensszenario, das kaum jemand will. Legitim einsetzen: Auf reale Folgeschritte hinzuweisen ist seriös — professionell bleibt es, wenn du die Zwischenschritte begründest und ihre Wahrscheinlichkeit benennst, statt sie als Automatik zu behaupten. Erkennen und kontern: Du erkennst das Muster an Signalwörtern der Zwangsläufigkeit („zwangsläufig", „am Ende") plus fehlender Belege für die Zwischenstufen — frag gezielt nach jedem einzelnen Schritt („Wodurch genau folgt Schritt 2 aus Schritt 1?") und trenne den konkreten Pilotversuch wieder vom Endszenario. Die Salami-Taktik liegt nahe, meint aber das Gegenteil der Rolle: Dort treibt jemand selbst viele kleine, je akzeptable Schritte voran, damit die Summe unbemerkt bleibt — hier warnt jemand vor einer Kette, um einen Schritt zu verhindern. False Cause (Post hoc) bräuchte eine aus Abfolge oder Korrelation abgeleitete Kausalbehauptung über bereits Geschehenes; hier geht es um eine Prognose künftiger Schritte. FUD würde unwiderlegbaren Zweifel an einer Option streuen („kann niemand garantieren"); hier ist es dagegen eine konkret ausformulierte, aber unbelegte Ereigniskette.',
      en: 'Slippery slope: the department head couples a small, voluntary step directly to an extreme ("nobody controls who works when") and asserts an inevitable chain — without explaining why each intermediate stage forces the next. The lever shifts the debate away from the actual pilot and onto a doomsday scenario almost no one wants. Used legitimately: pointing to genuine downstream effects is sound — it stays professional when you justify the intermediate steps and state their likelihood instead of asserting them as automatic. To spot and counter it: you recognise the pattern by inevitability cues ("inevitably", "in the end") plus missing evidence for the middle stages — probe each step individually ("exactly how does step 2 follow from step 1?") and separate the concrete pilot from the end scenario. Salami tactics seems close but describes the opposite role: there someone themselves drives many small, individually acceptable steps so the total goes unnoticed — here someone warns of a chain to block a step. False cause (post hoc) would need a causal claim inferred from sequence or correlation about things that already happened; here it is a forecast of future steps. FUD would spread unfalsifiable doubt about an option ("nobody can guarantee"); here it is instead a fully spelled-out but unevidenced chain of events.',
    },
    points: 10,
    primaryTechniqueId: 'slippery_slope',
    relatedTechniques: ['slippery_slope', 'salami_tactics_gradualism', 'false_cause_post_hoc', 'fear_uncertainty_doubt'],
  },
  {
    id: 'wave5a-slippery_slope-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Lenkungsausschuss zu einem eng begrenzten Pilotprojekt: Als Kommunikationsverantwortliche stellst du vor, dass Kundenservice-Anfragen künftig testweise auch über einen Messenger-Kanal beantwortet werden. Ein Bereichsleiter sagt in die Runde: „Fangen wir mit Messenger an, sind wir bald auf allen Plattformen, dann schreibt jeder Mitarbeiter, was er will, und am Ende steht unkontrolliert unsere Marke im Netz." Die Runde wird zögerlich.',
      en: 'Steering committee on a tightly scoped pilot: as communications lead you present a trial in which customer-service requests may also be answered via a messenger channel. A department head tells the room: "Start with messenger and soon we\'re on every platform, then every employee writes whatever they like, and in the end our brand is out there uncontrolled." The room turns hesitant.',
    },
    options: [
      {
        de: 'Ich zerlege die behauptete Kette: Ich benenne, dass es um genau einen Kanal mit definierten Antwort-Templates, Freigabe-Workflow und Rollenrechten geht, und bitte um den konkreten Beleg, wodurch aus dem Pilot „alle Plattformen" und „jeder schreibt, was er will" werden sollen.',
        en: 'I take the asserted chain apart: I make clear this is exactly one channel with defined reply templates, an approval workflow and role permissions, and I ask for concrete evidence of how the pilot would turn into "every platform" and "everyone writes whatever they like".',
      },
      {
        de: 'Ich ziehe den Pilot zurück: Wenn ein erfahrener Bereichsleiter einen solchen Kontrollverlust befürchtet, ist das Risiko offensichtlich zu groß.',
        en: 'I withdraw the pilot: if an experienced department head fears such a loss of control, the risk is evidently too great.',
      },
      {
        de: 'Ich kontere mit einer eigenen Kette: Ich male aus, dass wir ohne Messenger junge Zielgruppen verlieren, dann Marktanteile, und am Ende komplett von der Konkurrenz verdrängt werden.',
        en: 'I counter with a chain of my own: I spell out that without messenger we lose younger audiences, then market share, and end up driven out entirely by competitors.',
      },
      {
        de: 'Ich weise den Einwand als Fortschrittsfeindlichkeit zurück und bitte den Bereichsleiter, das Pilotprojekt nicht länger zu blockieren.',
        en: 'I dismiss the objection as hostility to progress and ask the department head to stop blocking the pilot.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Einwand ist ein Slippery Slope: Ein klar begrenzter Pilot wird über eine unbelegte Wenn-dann-Kette an ein Extrem („unkontrolliert unsere Marke im Netz") gekoppelt, damit die Entscheidung am Schreckensbild statt am tatsächlichen Vorhaben getroffen wird. Die beste Option nimmt dem Muster die Grundlage: Du holst die Debatte auf den realen Umfang zurück (ein Kanal, Templates, Freigabe, Rollenrechte) und verlangst den Beleg für jeden Zwischenschritt — verdampft die Zwangsläufigkeit, war es ein Dammbruchargument. Legitim einsetzen: Auf echte Skalierungsrisiken hinzuweisen ist berechtigt — seriös wird es, wenn du sie Schritt für Schritt begründest und mit Governance hinterlegst, statt eine Automatik zu behaupten. Erkennen und kontern: Sobald ein kleiner Schritt ohne Zwischenbelege ans Extrem gehängt wird, frag die Kette Glied für Glied ab und trenne Pilot und Endszenario. Den Pilot zurückzuziehen belohnt genau die Taktik und macht die unbelegte Prognose zum Vetorecht. Eine eigene Gegen-Kette aufzubauen bestätigt die Logik des Dammbruch-Arguments und kostet dich Glaubwürdigkeit. Den Einwand als Fortschrittsfeindlichkeit abzukanzeln greift die Person statt das Argument an (Ad hominem) — die offene Sachfrage „Wie ist der Kanal gesteuert?" bleibt dann unbeantwortet.',
      en: 'The objection is a slippery slope: a clearly bounded pilot is coupled via an unevidenced if-then chain to an extreme ("our brand out there uncontrolled"), so the decision is made against the frightening image rather than the actual proposal. The best option removes that foundation: you bring the debate back to the real scope (one channel, templates, approval, role permissions) and demand evidence for each intermediate step — if the inevitability evaporates, it was a slippery-slope argument. Used legitimately: flagging genuine scaling risks is fair — it becomes sound when you justify them step by step and back them with governance, rather than asserting an automatic slide. To spot and counter it: the moment a small step is hung on an extreme with no intermediate evidence, interrogate the chain link by link and separate pilot from end scenario. Withdrawing the pilot rewards exactly that tactic and turns an unevidenced forecast into a veto. Building a counter-chain of your own endorses the slippery-slope logic and costs you credibility. Dismissing the objection as hostility to progress attacks the person rather than the argument (ad hominem) — the open question "how is the channel governed?" then stays unanswered.',
    },
    points: 10,
    primaryTechniqueId: 'slippery_slope',
    relatedTechniques: ['slippery_slope', 'false_cause_post_hoc', 'ad_hominem'],
  },
  {
    id: 'wave5a-slippery_slope-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Namensbeitrag eines Verbandsgeschäftsführers in einer Fachzeitschrift gegen eine eng begrenzte Meldepflicht für Lieferkettendaten: „Steht diese eine Meldepflicht erst im Gesetz, folgt zwangsläufig das öffentliche Register, danach der Pranger für einzelne Firmen, am Ende die staatliche Lenkung ganzer Branchen." Für keinen dieser Zwischenschritte nennt er einen Beleg.',
      en: 'Bylined op-ed by an industry-association director in a trade journal against a narrowly scoped reporting duty for supply-chain data: "Once this one reporting duty is in law, the public register follows inevitably, then the pillory for individual firms, and in the end state control of whole sectors." He cites no evidence for any of these intermediate steps.',
    },
    options: [
      { de: 'Slippery Slope (Dammbruchargument)', en: 'Slippery slope' },
      { de: 'Salami-Taktik (Gradualismus)', en: 'Salami tactics (gradualism)' },
      { de: 'False Cause (Post hoc)', en: 'False cause (post hoc)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Slippery Slope: Der Geschäftsführer hängt einen einzelnen, eng begrenzten Schritt über eine unbelegte Kette an ein Extrem („staatliche Lenkung ganzer Branchen") und behauptet die Folge als „zwangsläufig", ohne zu zeigen, wodurch jede Stufe die nächste erzwingt. So soll die Meldepflicht am Endszenario scheitern, nicht an ihrem eigenen Inhalt. Legitim einsetzen: Vor realen Folgeregulierungen zu warnen ist zulässig — professionell wird es, wenn du die Zwischenschritte samt Wahrscheinlichkeit begründest, statt eine Automatik zu unterstellen. Erkennen und kontern: Achte auf die Kombination aus Zwangsläufigkeits-Wortwahl und fehlenden Belegen für die Zwischenstufen; frag jeden Schritt einzeln ab und beurteile die konkrete Maßnahme für sich. Die Salami-Taktik beschreibt das Gegenteil der Rolle: Dort treibt der Handelnde selbst viele kleine, je akzeptable Schritte voran, damit die Summe unbemerkt bleibt — hier warnt der Autor vor einer Kette, um einen Schritt zu blockieren. False Cause (Post hoc) würde aus einer beobachteten Abfolge oder Korrelation eine Ursache ableiten; hier steht dagegen eine Prognose künftiger, noch gar nicht eingetretener Schritte im Zentrum.',
      en: 'Slippery slope: the director hangs a single, narrowly scoped step onto an extreme ("state control of whole sectors") via an unevidenced chain and asserts the outcome as "inevitable", without showing how each stage forces the next. The aim is to sink the reporting duty on the end scenario rather than on its own content. Used legitimately: warning of genuine follow-on regulation is permissible — it becomes professional when you justify the intermediate steps and their likelihood instead of implying an automatic slide. To spot and counter it: watch for the combination of inevitability wording and missing evidence for the middle stages; interrogate each step on its own and judge the concrete measure by itself. Salami tactics describes the opposite role: there the actor themselves drives many small, individually acceptable steps so the sum goes unnoticed — here the author warns of a chain to block a step. False cause (post hoc) would infer a cause from an observed sequence or correlation; here the focus is instead a forecast of future steps that have not yet occurred.',
    },
    points: 10,
    primaryTechniqueId: 'slippery_slope',
    relatedTechniques: ['slippery_slope', 'salami_tactics_gradualism', 'false_cause_post_hoc'],
  },
];
