// Band-Ausbau: 1 INTERMEDIATE-Übung für mental_accounting (Mental Accounting).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Abgrenzung des Lernkerns:
//  - wave5b-mental-accounting.ts: Bonus-/Extra-Konto (looser spending),
//    Restbudget-Upsell, Kleinkonto-Vergleich (Coffee-to-go).
//  - technique.examples[3] (mental-accounting.ts): House-Money-/Windfall-Effekt,
//    also verschobene RISIKObereitschaft aus realisierten Gewinnen.
//  Diese Übung meidet den Windfall-/Risiko-Frame bewusst und lehrt eine andere
//  Facette: die reine FUNGIBILITÄTS-Verletzung durch Zweckbindung — ein selbst
//  gesetztes Sonderkonto wird so unantastbar, dass man lieber Kreditzinsen zahlt,
//  als das zinslos liegende Geld anzurühren (Thalers klassischer
//  Sparen-und-zugleich-Schulden-Fall). Eingebettet ohne Cue-Wörter, Near-Miss-
//  Distraktoren mit Default-/Status-quo-Bias als Star-Nachbar.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandMentalAccounting: Exercise[] = [
  {
    id: 'band-mental_accounting-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster prägt die Finanzierungslogik der Kommunikationschefin?',
      en: 'Which pattern shapes the head of communications’ financing logic?',
    },
    scenario: {
      de: 'Budgetklausur eines Familienunternehmens vor dem Rebranding. Die Kommunikationschefin verantwortet die Finanzierung des Agenturhonorars und schlägt vor, die Summe über einen kurzfristigen, verzinsten Kontokorrentkredit der Hausbank zu strecken. Dabei liegt auf einer intern selbst angelegten, rechtlich frei verfügbaren Rücklage für das nächstjährige Firmenjubiläum mehr als genug Geld, praktisch unverzinst. Ihr Argument an den CFO in der Runde: „An die Jubiläumsrücklage geht bei uns niemand ran, die ist fest verplant. Das Honorar holen wir uns lieber frisch über die Bank, dann bleibt die Reserve unangetastet.“',
      en: 'Budget retreat at a family business ahead of a rebrand. The head of communications owns the financing of the agency fee and proposes bridging the sum with a short-term, interest-bearing overdraft line from the house bank. Meanwhile an internally self-created, legally unrestricted reserve for next year’s company anniversary holds more than enough, earning virtually no interest. Her argument to the CFO in the room: “Nobody here touches the anniversary reserve, it’s firmly committed. We’d rather draw the fee fresh from the bank, then the reserve stays untouched.”',
    },
    options: [
      { de: 'Verlustaversion (Loss Aversion)', en: 'Loss aversion' },
      { de: 'Default-/Status-quo-Bias', en: 'Default / status-quo bias' },
      { de: 'Mental Accounting', en: 'Mental accounting' },
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Mental Accounting (mentale Buchführung): Geld wird gedanklich getrennten Töpfen zugeordnet und je nach Etikett unterschiedlich bewertet, obwohl ein Euro überall gleich viel wert ist. Hier macht das Etikett „fest verplant“ die Jubiläumsrücklage in den Büchern der Kommunikationschefin unantastbar, obwohl sie aus denselben frei verfügbaren Euro besteht wie jedes andere Firmengeld.\n\nDas Verräterische ist die Folge: Sie nimmt lieber Kreditzinsen in Kauf, als das zinslos liegende Guthaben anzurühren. Sie zahlt also freiwillig drauf, nur um zwei Töpfe getrennt zu halten.\n\nLegitim einsetzen: Rücklagen sichtbar zweckzuwidmen schafft Disziplin und schützt dich vor dem spontanen Griff in die Kasse. Fair und rational bleibt es, solange die Zweckbindung nicht teurer ist als ihr Nutzen, du also nicht Zinsen zahlst, nur um sie zu wahren.\n\nErkennen und kontern: Frag dich, ob die Entscheidung noch stünde, läge alles Geld auf einem einzigen Konto. Würdest du wirklich einen Kredit aufnehmen, während daneben unverzinstes Guthaben liegt? Fällt die Trennung ökonomisch durch, sobald du die Töpfe gedanklich zusammenschiebst, ist es mentale Buchführung.\n\nDer Default-/Status-quo-Bias ist der stärkste Nachbar, weil das „da geht keiner ran“ nach reiner Trägheit klingt. Doch hier wird nicht bloß eine Voreinstellung beibehalten, sondern identisches Geld je nach Topf-Etikett unterschiedlich bewertet. Das Beharren ist die Folge der Kontotrennung, nicht ihr Grund. Verlustaversion scheint zu passen, weil die Reserve „geschützt“ wird. Doch es droht kein Verlust, den du abwenden müsstest: Die Rücklage schrumpft ja nicht, sie würde nur umgewidmet. Der Endowment-Effekt läge vor, wenn die Rücklage überbewertet würde, weil sie der Firma gehört. Doch der Hebel ist nicht „sie gehört uns, also ist sie mehr wert“, sondern „sie liegt im Jubiläumstopf, also ist sie für alles andere gesperrt“.',
      en: 'Mental accounting: money gets sorted into separate mental pots and treated differently by label, even though a euro is worth the same wherever it sits. Here the label “firmly committed” makes the anniversary reserve untouchable in the head of communications’ books, even though it consists of the same freely available euros as any other company money.\n\nThe giveaway is the consequence: she would rather take on loan interest than touch the balance sitting there earning nothing. She pays a premium voluntarily, just to keep two pots apart.\n\nUsed legitimately: earmarking reserves visibly builds discipline and guards you against raiding the till on impulse. It stays fair and rational as long as the earmark doesn’t cost more than it’s worth, i.e. you’re not paying interest merely to preserve it.\n\nTo spot and counter it: ask whether the decision would still hold if all the money sat in a single account. Would you really take out a loan while the idle cash sits right beside it? If the separation fails economically the moment you mentally merge the pots, it’s mental accounting.\n\nDefault/status-quo bias is the closest neighbour, because “nobody touches that” sounds like sheer inertia. But this isn’t merely keeping a preset: identical money is valued differently by pot label, and the reluctance is the result of that split, not its cause. Loss aversion seems to fit because the reserve is being “protected,” but no loss looms to avert: the reserve doesn’t shrink, it would merely be reallocated. The endowment effect would apply if the reserve were overvalued because they own it, but the lever isn’t “it’s ours, so it’s worth more,” it’s “it sits in the anniversary pot, so it’s off-limits for everything else.”',
    },
    points: 10,
    primaryTechniqueId: 'mental_accounting',
    relatedTechniques: ['mental_accounting', 'default_status_quo', 'loss_aversion', 'endowment_effect'],
  },
];
