// Welle R4: 3 Übungen für cognitive_dissonance_induction (Erzeugen kognitiver Dissonanz).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4CognitiveDissonanceInduction: Exercise[] = [
  {
    id: 'w4-cognitive_dissonance_induction-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt die Vertriebsleiterin?',
      en: 'Which technique is the sales director using?',
    },
    scenario: {
      de: 'Vertriebstagung eines Maschinenbauers: Das neue CRM ist im Außendienst umstritten. Die Vertriebsleiterin bittet ausgerechnet die beiden lautesten Kritiker, im Workshop-Slot „die drei überzeugendsten Gründe für den Umstieg" zu erarbeiten und vor versammelter Mannschaft zu präsentieren. In der Feedbackrunde vier Wochen später klingen beide deutlich versöhnlicher.',
      en: 'Sales conference at a machinery manufacturer: the new CRM is contested among the field sales force. The sales director asks the two loudest critics, of all people, to work out "the three most compelling reasons to switch" and present them to the assembled team in the workshop slot. In the feedback round four weeks later, both sound noticeably more conciliatory.',
    },
    options: [
      { de: 'Konsistenz', en: 'Consistency' },
      { de: 'Soziale Bewährtheit', en: 'Social proof' },
      { de: 'Erzeugen kognitiver Dissonanz', en: 'Inducing cognitive dissonance' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Erzeugen kognitiver Dissonanz: Die Kritiker werden dazu gebracht, öffentlich gegen ihre eigene Haltung zu argumentieren. Zwischen dem, was sie vor der Mannschaft vertreten haben, und dem, was sie denken, entsteht eine unangenehme Spannung — und die löst sich nach Festinger eher über die Einstellung als über den Widerruf der Aussage, zumal die Präsentation freiwillig wirkte und nicht extra belohnt wurde. Zur Einordnung: Der Grundeffekt stammt aus Festinger & Carlsmith (1959); eine Multilab-Replikation des Paradigmas (Vaidis et al. 2024) fiel schwächer und uneinheitlich aus, verlass dich also nicht auf eine sichere Wirkung. Legitim einsetzen: Perspektivwechsel-Formate („Vertritt mal die Gegenseite") sind wertvoll, wenn die Rollenzuweisung offen benannt ist und ein Nein folgenlos bleibt — problematisch wird es, wenn gezielt Skeptiker ohne Rollen-Rahmung auf die Pro-Position festgelegt werden. Erkennen und kontern: Frage dich, warum ausgerechnet du die Vorteile präsentieren sollst — und benenne die Rolle offen („Ich trage die Pro-Argumente vor, meine Bewertung ist eine andere"), dann bindet dich die Aussage nicht. Konsistenz wirkt plausibel, weil eine öffentliche Aussage künftiges Verhalten bindet — dort beruft sich aber jemand auf eine bestehende Festlegung („Sie haben doch gesagt …"); hier wird der Widerspruch zur eigenen Haltung erst erzeugt. Soziale Bewährtheit läge vor, wenn die Menge der Zustimmenden als Argument dienen würde („Die meisten Kollegen sind schon umgestiegen") — die Mehrheit spielt hier keine Rolle. Priming wirkt plausibel, weil das Erarbeiten von Pro-Argumenten positive Assoziationen aktiviert — der Hebel ist aber nicht die beiläufige Aktivierung, sondern der offene Auftritt gegen die eigene Position.',
      en: 'Inducing cognitive dissonance: the critics are made to argue publicly against their own view. Between what they advocated in front of the team and what they think, an uncomfortable tension arises — and per Festinger it tends to resolve through the attitude rather than through retracting the statement, especially since the presentation appeared voluntary and was not separately rewarded. For context: the basic effect goes back to Festinger & Carlsmith (1959); a multilab replication of the paradigm (Vaidis et al. 2024) came out weaker and mixed, so do not count on a guaranteed effect. Used legitimately: perspective-switching formats ("argue the other side for a moment") are valuable when the role assignment is stated openly and a no carries no cost — it turns problematic when sceptics are deliberately locked into the pro position without that framing. To spot and counter it: ask yourself why you, of all people, are supposed to present the upsides — and name the role openly ("I am presenting the pro arguments; my own assessment differs"), then the statement does not bind you. Consistency looks plausible because a public statement binds future behaviour — but there someone invokes an existing commitment ("you did say …"); here the contradiction with one\'s own view is created in the first place. Social proof would apply if the number of adopters served as the argument ("most of your colleagues have already switched") — the majority plays no role here. Priming looks plausible because compiling pro arguments activates positive associations — but the lever is not incidental activation, it is the open appearance against one\'s own position.',
    },
    points: 10,
    primaryTechniqueId: 'cognitive_dissonance_induction',
    relatedTechniques: ['cognitive_dissonance_induction', 'consistency', 'social_proof', 'priming'],
  },
  {
    id: 'w4-cognitive_dissonance_induction-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die interne Kommunikation eines Handelskonzerns und hältst die geplante Zusammenlegung zweier Servicecenter für schlecht vorbereitet — das ist im Haus bekannt. Im Steuerungskreis schlägt der Partner der begleitenden Strategieberatung vor: „Am glaubwürdigsten wäre es, wenn gerade Sie im Townhall die Chancen der Zusammenlegung vorstellen." Eine Entscheidung des Vorstands steht noch aus.',
      en: 'You head internal communications at a retail group and consider the planned merger of two service centres poorly prepared — which is well known in the company. In the steering committee, the partner from the accompanying strategy consultancy suggests: "It would be most credible if you, of all people, presented the upsides of the merger at the town hall." The board has not yet decided.',
    },
    options: [
      {
        de: 'Ich mache die Rollentrennung explizit: Ich moderiere das Townhall und ordne die Chancen sichtbar als Position des Projektteams ein — meine eigene Bewertung gebe ich erst nach der laufenden Prüfung ab und halte sie vorher schriftlich fest.',
        en: 'I make the separation of roles explicit: I moderate the town hall and visibly attribute the upsides to the project team — I give my own assessment only after the ongoing review, and I put it in writing beforehand.',
      },
      {
        de: 'Ich übernehme den Part: Ein einzelner Vortrag ändert meine Haltung nicht, und meine Bedenken kann ich intern hinterher immer noch anbringen.',
        en: 'I take it on: a single presentation will not change my views, and I can still raise my concerns internally afterwards.',
      },
      {
        de: 'Ich sage zu, baue aber unauffällig Schwachstellen der Zusammenlegung in die Präsentation ein, damit das Publikum die Risiken von selbst erkennt.',
        en: 'I accept, but quietly weave weaknesses of the merger into the presentation so the audience discovers the risks on its own.',
      },
      {
        de: 'Ich lehne jede Mitwirkung am Townhall ab und erkläre im Steuerungskreis, dass ich mich an einer solchen Inszenierung nicht beteilige.',
        en: 'I refuse any involvement in the town hall and declare in the steering committee that I won\'t be part of that kind of stage-managed exercise.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag würde dich als bekannte Skeptikerin öffentlich auf die Pro-Position festlegen, bevor die Entscheidung gefallen ist. Genau das ist Erzeugen kognitiver Dissonanz: Die Spannung zwischen deinem Auftritt und deiner Haltung löst sich erfahrungsgemäß eher, indem die Haltung nachzieht — und nebenbei wird deine Glaubwürdigkeit als Kronzeugin eingespannt. Die beste Option hält dich im Prozess und entschärft den Hebel: Wer die Chancen sichtbar dem Projektteam zuordnet und die eigene Bewertung vorher schriftlich fixiert, spricht erkennbar in einer Rolle — eine Rollenaussage erzeugt kaum Dissonanz mit der eigenen Position. Legitim einsetzen: Du darfst Botschaften anderer professionell vortragen und moderieren — professionell bleibt es, wenn Absender und Rolle transparent sind und niemand deine Person als Beleg verkauft. Erkennen und kontern: Werde aufmerksam, wenn ausgerechnet deine Skepsis dich zur „glaubwürdigsten" Fürsprecherin machen soll; benenne die Rolle offen und lege deine eigene Position vor dem Auftritt schriftlich fest. Option zwei wirkt plausibel, weil ein Vortrag harmlos erscheint — genau diese Unterschätzung macht den Mechanismus wirksam, und dein öffentliches Pro entwertet deine spätere Kritik obendrein rhetorisch. Option drei wirkt plausibel, weil sie deine Bedenken transportiert — verdeckte Sabotage einer zugesagten Präsentation ist aber unprofessionell und beschädigt bei Aufdeckung dich, nicht das Projekt. Option vier wirkt plausibel, weil sie die Vereinnahmung klar zurückweist — sie überkorrigiert jedoch: Mit offener Rollentrennung bist du genauso geschützt, bleibst aber handlungs- und auskunftsfähig.',
      en: 'The proposal would lock you, a known sceptic, into the pro position publicly before the decision is made. That is precisely inducing cognitive dissonance: the tension between your appearance and your view tends to resolve with the view falling in line — and your credibility gets harnessed as star witness along the way. The best option keeps you in the process and defuses the lever: attributing the upsides visibly to the project team and fixing your own assessment in writing beforehand means you are recognisably speaking in a role — and a role statement creates hardly any dissonance with your own position. Used legitimately: you may professionally present and moderate other people\'s messages — it stays professional when sender and role are transparent and nobody sells your person as evidence. To spot and counter it: take notice when your scepticism, of all things, is what supposedly makes you the "most credible" advocate; name the role openly and put your own position in writing before you go on stage. Option two looks plausible because one presentation seems harmless — exactly that underestimation is what makes the mechanism work, and your public endorsement additionally devalues your later criticism rhetorically. Option three looks plausible because it carries your concerns — but covertly sabotaging a presentation you agreed to give is unprofessional and, once discovered, damages you, not the project. Option four looks plausible because it clearly rejects the co-opting — but it overcorrects: with an open separation of roles you are just as protected while remaining free to act and to answer questions.',
    },
    points: 10,
    primaryTechniqueId: 'cognitive_dissonance_induction',
    relatedTechniques: ['cognitive_dissonance_induction', 'consistency'],
  },
  {
    id: 'w4-cognitive_dissonance_induction-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Redaktionsmeeting im Corporate Newsroom: Die Volontärin hält das neue Paywall-Modell für kundenfeindlich — das weiß der Newsroom-Leiter. Er überträgt ihr trotzdem den Intranet-Erklärartikel „Warum die Paywall unseren Journalismus sichert", inklusive Recherche der besten Argumente. Beim Schreiben rückt ihr Urteil Stück für Stück näher an den eigenen Text.',
      en: 'Editorial meeting in the corporate newsroom: the trainee considers the new paywall model customer-hostile — the newsroom lead knows this. He nevertheless assigns her the intranet explainer "Why the paywall secures our journalism", including researching the best arguments. As she writes, her judgement inches closer and closer to her own text.',
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Erzeugen kognitiver Dissonanz', en: 'Inducing cognitive dissonance' },
      { de: 'Konsistenz', en: 'Consistency' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Erzeugen kognitiver Dissonanz — hier in der klassischen Variante des einstellungswidrigen Schreibens: Die Volontärin formuliert unter eigenem Namen Argumente gegen ihre Überzeugung, und die Spannung zwischen Text und Haltung löst sich, indem die Haltung dem Text folgt. Der Effekt geht auf Festinger zurück; wie stark er ausfällt, ist nach einer schwächeren Multilab-Replikation (Vaidis et al. 2024) allerdings offener, als Lehrbücher suggerieren. Legitim einsetzen: Jemanden bewusst die Gegenposition ausarbeiten zu lassen ist ein gutes Prüfinstrument — professionell bleibt es, wenn die Aufgabe als Rollenübung benannt ist und die eigene Bewertung ausdrücklich daneben stehen darf. Erkennen und kontern: Wenn du gegen deine Überzeugung formulieren sollst, mache die Auftragslage im Text und im Team sichtbar („Position des Hauses, nicht meine Bewertung") und notiere deine eigene Einschätzung vorher — so bleibt der Widerspruch außen statt in dir. Priming wirkt plausibel, weil die Recherche der „besten Argumente" positive Assoziationen zur Paywall aktiviert — Priming arbeitet aber mit beiläufigen Reizen ohne eigene Festlegung; hier entsteht der Schub gerade dadurch, dass sie selbst formuliert. Konsistenz wirkt plausibel, weil der veröffentlichte Artikel sie künftig binden dürfte — die Technik Konsistenz setzt aber an einer bestehenden Festlegung an, auf die sich jemand beruft; hier wird der Widerspruch zur eigenen Haltung erst hergestellt.',
      en: 'Inducing cognitive dissonance — here in the classic counter-attitudinal writing variant: the trainee drafts arguments against her own conviction under her own name, and the tension between text and view resolves with the view following the text. The effect goes back to Festinger; how strong it is remains more open than textbooks suggest, after a weaker multilab replication (Vaidis et al. 2024). Used legitimately: having someone deliberately work out the opposing position is a good stress test — it stays professional when the task is labelled as a role exercise and their own assessment is explicitly allowed to stand alongside. To spot and counter it: when you are asked to write against your conviction, make the assignment visible in the text and in the team ("the company\'s position, not my assessment") and note your own view beforehand — that keeps the contradiction outside you rather than inside. Priming looks plausible because researching the "best arguments" activates positive associations with the paywall — but priming works through incidental cues without any commitment of your own; here the push comes precisely from her doing the writing herself. Consistency looks plausible because the published article will likely bind her in future — but the consistency technique starts from an existing commitment that someone invokes; here the contradiction with her own view is created in the first place.',
    },
    points: 10,
    primaryTechniqueId: 'cognitive_dissonance_induction',
    relatedTechniques: ['cognitive_dissonance_induction', 'priming', 'consistency'],
  },
];
