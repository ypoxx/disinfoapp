// Welle 5b: 3 Übungen für sunk_cost_escalation (Sunk-Cost-Effekt / Eskalation des Commitments).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bSunkCostEscalation: Exercise[] = [
  {
    id: 'wave5b-sunk_cost_escalation-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Referent ein?',
      en: 'Which technique is the officer using?',
    },
    scenario: {
      de: 'Budgetklausur einer Krankenkasse: Die Leiterin Unternehmenskommunikation soll entscheiden, ob die seit 18 Monaten laufende, aber messbar wirkungslose Podcast-Reihe eingestellt wird. Der zuständige Referent argumentiert: „Wir haben eine eigene Studioausstattung gekauft, drei Staffeln produziert und ein Team eingearbeitet — wenn wir jetzt stoppen, war die ganze Investition für nichts. Lassen Sie uns lieber noch eine Staffel nachlegen." Die Abrufzahlen sinken seit dem Start, die bezahlte Ausrüstung lässt sich nicht weiterverkaufen.',
      en: 'A health insurer\'s budget session: the head of corporate communications has to decide whether to cancel a podcast series that has run for 18 months with no measurable effect. The responsible officer argues: "We bought our own studio kit, produced three seasons, and trained up a team — if we stop now, the whole investment was for nothing. Let\'s add one more season instead." Downloads have been falling since launch; the paid-for equipment cannot be resold.',
    },
    options: [
      { de: 'Sunk-Cost-Effekt / Eskalation des Commitments', en: 'Sunk cost / escalation of commitment' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Konsistenz-Prinzip', en: 'Consistency principle' },
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Sunk-Cost-Effekt: Das Argument fürs Weitermachen ist ausschließlich das bereits Ausgegebene — Studio, drei Staffeln, eingearbeitetes Team —, nicht die künftige Wirkung; „sonst war alles umsonst" macht die versunkenen Kosten zum Entscheidungshebel, und der Vorschlag lautet trotz sinkender Zahlen: nachlegen. Rational zählen nur die künftigen Kosten und Nutzen der zusätzlichen Staffel — das ausgegebene Geld ist so oder so weg. Legitim einsetzen: Wer ein Vorhaben zu Ende bringt, darf getätigte Vorarbeit als Startvorteil benennen — professionell bleibt es, wenn die Fortführung an der erwartbaren künftigen Wirkung hängt, nicht an der Höhe des schon Bezahlten. Erkennen und kontern: Streich in der Entscheidung gedanklich alles Versunkene und frag „Würde ich diese Staffel heute neu starten, wenn ich Ausrüstung und Team schon hätte?" — trennt die Zukunftsfrage von der Vergangenheit. Verlustaversion wirkt plausibel, weil auch dort ein drohender Verlust im Spiel scheint — sie rahmt aber einen künftigen Verlust im Vergleich zu einem gleich großen Gewinn; hier geht es um bereits versunkene, unwiederbringliche Ausgaben. Das Konsistenz-Prinzip liegt nahe, meint aber den Druck, zu einer früher geäußerten Haltung zu passen — hier zählt nicht ein gegebenes Wort, sondern investiertes Geld. Der Endowment-Effekt beschreibt, dass man Besessenes höher bewertet — die Podcast-Reihe wird aber nicht als wertvoller Besitz überschätzt, sondern wegen der hineingesteckten Kosten fortgeführt.',
      en: 'Sunk cost: the case for carrying on rests solely on what has already been spent — studio, three seasons, a trained team — not on future impact; "otherwise it was all for nothing" turns the sunk costs into the decision lever, and despite falling numbers the proposal is to add more. Rationally only the future costs and benefits of the extra season count — the money spent is gone either way. Used legitimately: someone finishing a project may cite prior groundwork as a head start — it stays professional when continuation hinges on the expected future effect, not on the size of what has already been paid. To spot and counter it: mentally strike everything sunk and ask "Would I launch this season fresh today, given I already had the kit and team?" — that separates the future question from the past. Loss aversion looks plausible because a looming loss seems in play — but it frames a prospective loss against an equal gain; here the money is already sunk and unrecoverable. The consistency principle seems close but means the pressure to align with a previously stated position — here it is not a given word but invested money that counts. The endowment effect describes overvaluing what one owns — but the series is not overvalued as a prized possession; it is continued because of the costs poured in.',
    },
    points: 10,
    primaryTechniqueId: 'sunk_cost_escalation',
    relatedTechniques: ['sunk_cost_escalation', 'loss_aversion', 'consistency', 'endowment_effect'],
  },
  {
    id: 'wave5b-sunk_cost_escalation-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Markenkommunikation eines Mittelständlers. Vor drei Jahren habt ihr euch als Namenssponsor bei einem Regionalsport-Event eingekauft; die Wirkung auf Bekanntheit und Leads ist ausgeblieben, der Vertrag läuft aus und müsste aktiv verlängert werden. In der Runde sagt der Vertriebschef: „Wir haben da jetzt drei Jahre und einen sechsstelligen Betrag reingesteckt — wenn wir jetzt aussteigen, war alles umsonst. Einmal noch verlängern, dann zahlt es sich aus."',
      en: 'You own brand communications at a mid-sized company. Three years ago you bought in as title sponsor of a regional sports event; the effect on awareness and leads never materialised, the contract is expiring and would have to be actively renewed. On the call the head of sales says: "We\'ve now put three years and a six-figure sum into this — if we pull out now, it was all for nothing. Renew once more and it\'ll pay off."',
    },
    options: [
      {
        de: 'Ich blende das bereits Ausgegebene bewusst aus und bewerte allein die Verlängerung nach vorn: Was kostet ein weiteres Jahr, welche Wirkung ist realistisch zu erwarten, und wäre dasselbe Budget an anderer Stelle wirksamer? Auf dieser Basis argumentiere ich im Gremium — die drei Jahre sind versunken und dürfen die neue Entscheidung nicht tragen.',
        en: 'I deliberately set aside what has already been spent and judge the renewal on its own, forward-looking terms: what does another year cost, what impact can realistically be expected, and would the same budget do more elsewhere? I argue on that basis in the meeting — the three years are sunk and must not carry the new decision.',
      },
      {
        de: 'Ich stimme der Verlängerung zu: Nach drei Jahren und einem sechsstelligen Einsatz jetzt auszusteigen hieße, die bisherige Investition abzuschreiben — das lässt sich intern kaum vertreten.',
        en: 'I agree to renew: after three years and a six-figure spend, pulling out now would mean writing off the investment so far — that is hard to defend internally.',
      },
      {
        de: 'Ich vertage die Entscheidung um ein Jahr und lasse den Vertrag stillschweigend weiterlaufen, bis wir mehr Klarheit über die Wirkung haben.',
        en: 'I defer the decision by a year and quietly let the contract roll on until we have more clarity on its impact.',
      },
      {
        de: 'Ich mache die Verlängerung allein davon abhängig, ob ein Ausstieg jetzt als Eingeständnis eines Fehlers wirken würde — die Außenwirkung eines Rückzugs wiegt schwerer als die nackten Zahlen.',
        en: 'I make the renewal depend solely on whether pulling out now would look like admitting a mistake — the optics of a withdrawal weigh more than the bare numbers.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vertriebschef spielt den Sunk-Cost-Effekt aus: „Drei Jahre und ein sechsstelliger Betrag" und „sonst war alles umsonst" machen das bereits Ausgegebene zum Grund fürs Weitermachen — und je erfolgloser das Sponsoring lief, desto dringender klingt das Nachlegen. Die beste Option trennt sauber: Was gezahlt ist, ist unwiederbringlich weg und darf die Verlängerungsentscheidung nicht mehr beeinflussen; zählen dürfen nur die künftigen Kosten, die realistisch erwartbare Wirkung und die Alternativverwendung desselben Budgets. Legitim einsetzen: Vorarbeit als Startvorteil zu benennen ist in Ordnung — professionell bleibt es, wenn die Fortführung an der Zukunftswirkung hängt, nicht an der Höhe des Versunkenen. Erkennen und kontern: Frag dich bei jeder „wir haben schon so viel investiert"-Vorlage, ob du dasselbe heute neu beginnen würdest, und rechne nur mit den Zahlen ab morgen. Die Zustimmung aus „sonst schreiben wir alles ab" (Option 2) wirkt plausibel, weil niemand gern eine Fehlinvestition eingesteht — aber genau dieses Abschreiben ist bereits passiert, ob ihr verlängert oder nicht; die Vergangenheit lässt sich mit neuem Geld nicht zurückholen. Das Vertagen (Option 3) wirkt umsichtig, ist aber ein Kick-the-can: Der stillschweigend weiterlaufende Vertrag verlängert den Mittelabfluss ohne neue Erkenntnis und schiebt dieselbe Entscheidung nur mit noch höheren Sunk Costs vor sich her. Die Fixierung auf die Optik eines Rückzugs (Option 4) ersetzt nur eine irrationale Größe durch eine andere: Gesichtswahrung ist ebenso wenig ein Sachgrund für die Verlängerung wie das schon gezahlte Geld.',
      en: 'The head of sales is leaning on the sunk cost effect: "three years and a six-figure sum" and "otherwise it was all for nothing" turn what has already been spent into the reason to carry on — and the less the sponsorship worked, the more urgent the case for adding more sounds. The best option separates cleanly: what is paid is gone for good and must no longer sway the renewal; only the future costs, the realistically expected effect, and the alternative use of the same budget may count. Used legitimately: naming prior work as a head start is fine — it stays professional when continuation hinges on future impact, not on the size of what is sunk. To spot and counter it: whenever a "we\'ve already invested so much" pitch appears, ask whether you would start the same thing fresh today, and settle the account only on the numbers from tomorrow on. Agreeing so as not to "write it all off" (option 2) looks plausible because nobody likes admitting a bad investment — but that write-off has already happened whether you renew or not; the past cannot be bought back with new money. Deferring (option 3) looks prudent but is kicking the can: quietly letting the contract roll on prolongs the outflow without new insight and merely postpones the same decision at even higher sunk cost. Fixating on the optics of a withdrawal (option 4) merely swaps one irrational factor for another: face-saving is no more a substantive reason to renew than the money already paid.',
    },
    points: 10,
    primaryTechniqueId: 'sunk_cost_escalation',
    relatedTechniques: ['sunk_cost_escalation', 'loss_aversion'],
  },
  {
    id: 'wave5b-sunk_cost_escalation-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Kündigungs-Hotline eines Online-Sprachkurses: Die Nutzerin will ihr Jahresabo beenden. Die Servicekraft hält dagegen: „Sie haben jetzt 14 Monate Kursgebühren gezahlt und sich durch zwei komplette Niveaustufen gearbeitet — wenn Sie kurz vor dem Zertifikat kündigen, waren die ganze Mühe und das Geld umsonst. Ziehen Sie es doch zu Ende durch."',
      en: 'The cancellation hotline of an online language course: the user wants to end her annual subscription. The agent counters: "You\'ve now paid 14 months of course fees and worked through two full proficiency levels — if you cancel just before the certificate, all that effort and money was for nothing. Do see it through to the end."',
    },
    options: [
      { de: 'Sunk-Cost-Effekt / Eskalation des Commitments', en: 'Sunk cost / escalation of commitment' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Sunk-Cost-Effekt: Das Argument zum Bleiben ist ausschließlich das bereits Investierte — 14 Monatsgebühren und zwei durchgearbeitete Niveaustufen —, verdichtet in „sonst waren Mühe und Geld umsonst". Rational zählt allein, ob der Kurs von jetzt an noch nützt; das gezahlte Geld ist so oder so weg. Legitim einsetzen: Auf einen nahen Abschluss hinzuweisen ist in Ordnung, wenn der künftige Nutzen (das Zertifikat) das Weitermachen trägt — nicht das schon Bezahlte. Erkennen und kontern: Frag dich „Würde ich dieses Abo heute neu abschließen, so wie mein Lernstand jetzt ist?" — die Antwort hängt an der Zukunft, nicht an den 14 Monaten. Verlustaversion wirkt plausibel, weil „umsonst" nach Verlust klingt — sie rahmt aber einen künftigen Verlust gegen einen gleich großen Gewinn; hier sind Gebühren und Mühe bereits versunken und unwiederbringlich. Der Subscription Trap liegt nahe, weil es um eine Kündigung geht — er bezeichnet aber den künstlich erschwerten Ausstieg (Hürden, versteckte Wege); hier ist der Ausstieg technisch offen, es wird nur mit dem Investierten dagegen argumentiert.',
      en: 'Sunk cost: the case for staying rests solely on what has already been invested — 14 months of fees and two completed levels — condensed into "otherwise the effort and money were for nothing". Rationally the only question is whether the course is still useful from here on; the money paid is gone regardless. Used legitimately: pointing to a near finish is fine when the future benefit (the certificate) carries the decision to continue — not the sum already paid. To spot and counter it: ask "Would I take out this subscription fresh today, at exactly the level I\'m at now?" — the answer hinges on the future, not on the 14 months. Loss aversion looks plausible because "for nothing" sounds like a loss — but it frames a prospective loss against an equal gain; here the fees and effort are already sunk and unrecoverable. The subscription trap seems close because a cancellation is involved — but it denotes an artificially obstructed exit (hurdles, hidden paths); here the exit is technically open, only the money invested is used to argue against it.',
    },
    points: 10,
    primaryTechniqueId: 'sunk_cost_escalation',
    relatedTechniques: ['sunk_cost_escalation', 'loss_aversion', 'subscription_trap_obstruction'],
  },
];
