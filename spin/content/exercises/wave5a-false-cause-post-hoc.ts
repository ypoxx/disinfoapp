// Welle 5a: 3 Übungen für false_cause_post_hoc (Falsche Kausalität / Post hoc).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aFalseCausePostHoc: Exercise[] = [
  {
    id: 'wave5a-false_cause_post_hoc-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Kampagnenleiterin hier ein?',
      en: 'Which technique is the campaign lead using here?',
    },
    scenario: {
      de: 'Marketing-Review mit der Geschäftsführung: Die Kampagnenleiterin präsentiert das neue Rebranding als Wachstumstreiber — „Sechs Wochen nach dem Relaunch sind die Website-Anfragen um dreißig Prozent gestiegen, das Rebranding zahlt sich also aus." Dass parallel das Weihnachtsgeschäft anlief und ein Mitbewerber eine Preiserhöhung ankündigte, führt sie nicht an.',
      en: 'Marketing review with the executive board: the campaign lead presents the new rebrand as the growth driver — "Six weeks after the relaunch, website enquiries are up thirty percent, so the rebrand is paying off." She does not mention that the holiday season began in parallel and a competitor announced a price rise.',
    },
    options: [
      { de: 'Falsche Kausalität (Post hoc)', en: 'False cause (post hoc)' },
      { de: 'Rosinenpickerei (Cherry Picking)', en: 'Cherry picking' },
      { de: 'Bestätigungsfehler (Confirmation Bias)', en: 'Confirmation bias' },
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Kausalität (Post hoc): Die Kampagnenleiterin schließt allein aus der Reihenfolge „erst Relaunch, dann mehr Anfragen" auf eine Ursache — obwohl mit Weihnachtsgeschäft und der Preiserhöhung des Wettbewerbers zwei naheliegende Alternativtreiber im selben Zeitfenster liegen. Der Hebel: Ein enger zeitlicher Abstand wirkt wie ein Beweis, obwohl er nichts beweist. Legitim einsetzen: Ein Vorher-Nachher-Sprung darf durchaus als Hypothese dienen — professionell wird es, wenn du ihn ausdrücklich als Korrelation kennzeichnest und gegen einen Vergleich ohne die Maßnahme hältst (Vorjahr, Saisonverlauf, Regionen ohne Relaunch), statt ihn zur Ursache zu erklären. Erkennen und kontern: Du erkennst das Muster daran, dass eine Abfolge die ganze Beweislast trägt und parallele Ursachen fehlen — frag nach dem Kontrollvergleich („Wie hat sich der Wert dort entwickelt, wo nichts geändert wurde?") und nach dem Wirkmechanismus. Rosinenpickerei läge vor, wenn sie aus vielen vorliegenden Kennzahlen gezielt die günstige herausgriffe und gegenläufige verschwiege — hier ist die eine Zahl nicht das Problem, sondern der Kausalschluss aus dem Timing. Der Bestätigungsfehler beschriebe, dass sie nur nach bestätigenden Belegen sucht; hier ist der konkrete Fehltritt aber der Schluss von der Abfolge auf die Ursache. Die voreilige Verallgemeinerung beschriebe den Sprung von einem kurzen Sechs-Wochen-Fenster auf eine pauschale Regel — plausibel, doch der Kern liegt nicht in der schmalen Datenbasis: Selbst über einen langen Vergleichszeitraum bliebe der Fehler bestehen, solange die parallelen Ursachen nicht ausgeschlossen sind.',
      en: 'False cause (post hoc): the campaign lead infers a cause purely from the order "relaunch first, then more enquiries" — even though the holiday season and the competitor\'s price rise sit in the very same window as two obvious alternative drivers. The lever: a tight time gap feels like proof although it proves nothing. Used legitimately: a before/after jump may well serve as a hypothesis — it stays professional when you explicitly flag it as a correlation and test it against a comparison without the measure (prior year, seasonal curve, regions with no relaunch), rather than declaring it the cause. To spot and counter it: you recognise the pattern when a sequence carries the whole burden of proof and parallel causes are missing — ask for the control comparison ("how did the figure move where nothing was changed?") and for the mechanism. Cherry picking would apply if she selected the favourable metric from many available ones and suppressed the contrary figures — here the one number is not the problem, the causal leap from timing is. Confirmation bias would describe her only seeking confirming evidence; here the specific misstep is inferring cause from sequence. Hasty generalization would describe leaping from a short six-week window to a blanket rule — plausible, yet the core is not the thin data base: even over a long comparison period the error would remain as long as the parallel causes are not ruled out.',
    },
    points: 10,
    primaryTechniqueId: 'false_cause_post_hoc',
    relatedTechniques: ['false_cause_post_hoc', 'cherry_picking', 'confirmation_bias', 'hasty_generalization'],
  },
  {
    id: 'wave5a-false_cause_post_hoc-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Steuerungsrunde zur Content-Strategie: Der SEO-Verantwortliche will das Budget verdreifachen — „Seit wir im Januar die Blogfrequenz erhöht haben, ist der organische Traffic um vierzig Prozent gestiegen; mehr Beiträge, mehr Traffic." Die Runde nickt, du sollst die Empfehlung als Kommunikationsverantwortliche mittragen.',
      en: 'Steering meeting on content strategy: the SEO lead wants to triple the budget — "Since we raised blog frequency in January, organic traffic is up forty percent; more posts, more traffic." The room nods, and as communications lead you are expected to endorse the recommendation.',
    },
    options: [
      {
        de: 'Ich trenne Abfolge von Ursache: Ich bitte um einen Vergleich, der andere Treiber ausschließt — den Traffic-Verlauf für Seiten ohne neue Beiträge, den Saisonverlauf und die Termine der Google-Updates — und trage die Verdreifachung erst mit, wenn der Effekt auch nach dieser Kontrolle steht.',
        en: 'I separate sequence from cause: I ask for a comparison that rules out other drivers — the traffic trend for pages with no new posts, the seasonal curve and the dates of Google updates — and endorse the tripling only if the effect survives that control.',
      },
      {
        de: 'Ich trage die Empfehlung mit — vierzig Prozent nach der Umstellung sind ein eindeutiger Beleg, dass die Frequenz der Hebel ist.',
        en: 'I endorse the recommendation — forty percent after the switch is clear proof that frequency is the lever.',
      },
      {
        de: 'Ich kontere mit einer eigenen Ursache: In demselben Zeitraum ist auch unser Newsletter-Verteiler gewachsen, also war eher der der Treiber — und schlage vor, stattdessen dort zu investieren.',
        en: 'I counter with a cause of my own: our newsletter list grew in the same period, so that was the real driver — and I propose investing there instead.',
      },
      {
        de: 'Ich schlage vor, die Frequenz sofort noch weiter zu erhöhen und in drei Monaten erneut zu messen — wenn der Traffic dann wieder steigt, ist der Zusammenhang bewiesen.',
        en: 'I propose raising frequency even further right away and re-measuring in three months — if traffic rises again then, the link is proven.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Empfehlung ruht auf einer falschen Kausalität (Post hoc): Aus „erst mehr Beiträge, dann mehr Traffic" wird eine Ursache, obwohl Saison und Google-Updates denselben Anstieg erklären könnten und kein Vergleich ohne die Maßnahme vorliegt. Die beste Option nimmt dem Muster die Grundlage: Du behandelst den Anstieg als Korrelation, verlangst einen Kontrollvergleich (Seiten ohne neue Beiträge, Saison, Update-Termine) und entscheidest erst nach dieser Prüfung. Legitim einsetzen: Ein Vorher-Nachher-Sprung darf ein Anlass zum Testen sein — seriös wird es, wenn er als Korrelation gekennzeichnet und gegen eine Vergleichsbasis gehalten, nicht zur Ursache erklärt wird. Erkennen und kontern: Sobald eine Abfolge allein die Kausalbehauptung trägt, frag nach dem Vergleich ohne die Maßnahme und nach dem Wirkmechanismus. Die Empfehlung ungeprüft mitzutragen begeht genau den Fehlschluss und macht das Timing zum Beweis. Mit einer eigenen Ursache zu kontern wirkt souverän, ersetzt aber nur einen Post-hoc-Schluss durch den nächsten — auch der Newsletter ist bloß zeitgleich gewachsen. Die Frequenz sofort weiter zu erhöhen handelt schon auf der unbewiesenen Ursache; ein zweiter Anstieg ohne Kontrollvergleich wäre wieder nur eine Korrelation, kein Beweis.',
      en: 'The recommendation rests on a false cause (post hoc): "more posts first, then more traffic" is turned into a cause, even though season and Google updates could explain the same rise and there is no comparison without the measure. The best option removes that foundation: you treat the rise as a correlation, demand a control comparison (pages with no new posts, season, update dates) and decide only after that check. Used legitimately: a before/after jump may be a reason to test — it becomes sound when it is flagged as a correlation and held against a comparison base, not declared the cause. To spot and counter it: the moment a sequence alone carries the causal claim, ask for the comparison without the measure and for the mechanism. Endorsing the recommendation unchecked commits exactly the fallacy and turns timing into proof. Countering with a cause of your own looks assured but merely swaps one post-hoc inference for the next — the newsletter, too, only grew at the same time. Raising frequency further right away already acts on the unproven cause; a second rise without a control comparison would again be only a correlation, not proof.',
    },
    points: 10,
    primaryTechniqueId: 'false_cause_post_hoc',
    relatedTechniques: ['false_cause_post_hoc', 'cherry_picking'],
  },
  {
    id: 'wave5a-false_cause_post_hoc-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Namensbeitrag des Produktchefs im Kundenmagazin eines Software-Anbieters: „Seit unsere Kunden das neue Analyse-Modul aktivieren, verlängern sie ihre Verträge um ein Viertel häufiger — das Modul bindet Kunden." Dass vor allem ohnehin hoch engagierte Großkunden das Modul aktivieren, bleibt unerwähnt.',
      en: 'Bylined article by the head of product in a software vendor\'s customer magazine: "Since our customers started switching the new analytics module on, they renew their contracts a quarter more often — the module drives retention." That it is mainly the already highly engaged enterprise customers who switch the module on goes unmentioned.',
    },
    options: [
      { de: 'Falsche Kausalität (Post hoc)', en: 'False cause (post hoc)' },
      { de: 'Rosinenpickerei (Cherry Picking)', en: 'Cherry picking' },
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Kausalität (Post hoc): Aus dem „seit sie aktivieren, verlängern sie häufiger" macht der Produktchef die Ursache „das Modul bindet Kunden" — und übersieht die umgekehrte Wirkrichtung bzw. eine gemeinsame Ursache: Ohnehin loyale, hoch engagierte Großkunden aktivieren das Modul eher und würden auch ohne es häufiger verlängern. Der Hebel: Die konkrete Zahl klingt nach Beleg, doch Nutzung und Treue haben denselben Wurzelgrund, statt auseinander zu folgen. Legitim einsetzen: Eine solche Korrelation darf Anlass für eine saubere Analyse sein — professionell wird es, wenn du vergleichbare Kunden mit und ohne Modul gegenüberstellst, statt Selbstauswahl als Wirkung auszugeben. Erkennen und kontern: Achte darauf, ob die naheliegende umgekehrte Richtung oder ein Dritttreiber ausgeschlossen wurde; frag „Wer aktiviert das Modul überhaupt — und wie treu waren die vorher?". Rosinenpickerei läge vor, wenn er aus mehreren Kennzahlen gezielt die günstige herausgriffe und gegenläufige verschwiege — hier ist nicht die Auswahl der Zahl das Problem, sondern die Kausalrichtung. Die voreilige Verallgemeinerung beschriebe den Sprung von zu wenigen Fällen auf eine pauschale Regel; hier liegt durchaus eine breite Korrelation vor — falsch ist allein die daraus gezogene Ursache.',
      en: 'False cause (post hoc): from the sequence "since they switch it on, they renew more often" the head of product derives the cause "the module drives retention" — overlooking the reverse direction or a shared cause: already loyal, highly engaged enterprise customers are the ones who switch the module on and would renew more often without it too. The lever: the concrete figure sounds like proof, but usage and loyalty share the same root rather than following one from the other. Used legitimately: such a correlation may prompt a clean analysis — it becomes professional when you compare like-for-like customers with and without the module, rather than passing self-selection off as an effect. To spot and counter it: check whether the obvious reverse direction or a third driver was ruled out; ask "who actually turns the module on — and how loyal were they beforehand?". Cherry picking would apply if he selected the favourable metric from several and suppressed the contrary ones — here the problem is not the choice of figure but the direction of causation. Hasty generalization would describe leaping from too few cases to a blanket rule; here there is in fact a broad correlation — only the cause drawn from it is wrong.',
    },
    points: 10,
    primaryTechniqueId: 'false_cause_post_hoc',
    relatedTechniques: ['false_cause_post_hoc', 'cherry_picking', 'hasty_generalization'],
  },
];
