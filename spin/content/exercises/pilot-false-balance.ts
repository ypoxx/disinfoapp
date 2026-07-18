// Pilotwelle R3: 3 Übungen für false_balance.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotFalseBalance: Exercise[] = [
  {
    id: 'p3-false_balance-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Pressesprecherin hier ein?',
      en: 'Which technique is the press officer using here?',
    },
    scenario: {
      de: 'Hintergrundgespräch eines Chemiekonzerns zur Sicherheit eines Zusatzstoffs: Die Pressesprecherin verteilt an die Fachjournalisten ein „Pro und Contra"-Factsheet — links die übereinstimmende Bewertung von Behörden und Metaanalysen, rechts, in gleicher Länge und Aufmachung, die Position eines einzelnen abweichenden Forschers. Ihr Fazit: „Sie sehen: Die Fachwelt ist geteilter Meinung."',
      en: 'Background briefing by a chemicals company on the safety of an additive: the press officer hands the trade journalists a "pro and con" factsheet — on the left, the concurring assessment of regulators and meta-analyses; on the right, at equal length and in identical layout, the position of one dissenting researcher. Her conclusion: "As you can see, the experts are divided."',
    },
    options: [
      { de: 'False Balance / Bothsidesism', en: 'False balance / bothsidesism' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Falsches Dilemma', en: 'False dilemma' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'False Balance: Eine einseitige Evidenzlage — Behörden und Metaanalysen auf der einen, ein Einzelforscher auf der anderen Seite — wird durch das symmetrische Format als offene Kontroverse inszeniert. Als Hebel gilt eine Fairness-Heuristik: Wer „beide Seiten" gleich groß sieht, kann auf eine geteilte Fachwelt schließen, ohne das Mengenverhältnis der Belege zu prüfen — dieser Wirkungsweg ist plausibel, aber nicht direkt belegt; gesichert ist das Muster selbst, nicht seine Publikumswirkung. Legitim ist das Format dort, wo die Fachdebatte tatsächlich offen ist — dann gehört die Gegenüberstellung zum Handwerk. Erkennen und kontern: nach dem Mengenverhältnis fragen („Wie viele unabhängige Bewertungen stehen auf jeder Seite?") und die Gewichtung explizit machen. Cherry-Picking wirkt plausibel, weil auch hier Evidenz verzerrt wird — es würde aber günstige Belege auswählen und die Gegenseite weglassen; hier wird die Gegenseite gerade gezeigt, nur falsch gewichtet. Ein falsches Dilemma verengt Handlungsoptionen künstlich auf zwei; hier geht es nicht um Optionen, sondern um Evidenzgewichtung. Ein Strohmann würde die Position der Kritiker verzerrt wiedergeben und gegen die Verzerrung argumentieren.',
      en: 'False balance: a lopsided body of evidence — regulators and meta-analyses on one side, a single researcher on the other — is staged as an open controversy through the symmetrical format. The presumed lever is a fairness heuristic: seeing "both sides" at equal size, readers may infer a divided field without checking the actual weight of the evidence — a plausible but not directly demonstrated pathway; what is documented is the pattern itself, not its effect on audiences. The format is legitimate where the expert debate genuinely is open — then the juxtaposition is simply good craft. To spot and counter it: ask about the ratio ("How many independent assessments sit on each side?") and make the weighting explicit. Cherry-picking seems plausible because evidence is distorted here too — but it would select favourable findings and omit the other side; here the other side is deliberately shown, just falsely weighted. A false dilemma artificially narrows options to two; this is about weighting evidence, not choosing options. A straw man would misrepresent the critics\' position and argue against the misrepresentation.',
    },
    points: 10,
    primaryTechniqueId: 'false_balance',
    relatedTechniques: ['false_balance', 'cherry_picking'],
  },
  {
    id: 'p3-false_balance-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Ein TV-Magazin plant einen Beitrag über die Sicherheit eures zugelassenen Medizinprodukts. Die Redaktion will euren Studienleiter in ein Streitgespräch mit einem Einzelkritiker setzen — Format 1:1, gleiche Redezeit —, obwohl Zulassungsstudien und alle Fachgesellschaften die Sicherheit einheitlich bestätigen. Du leitest die Unternehmenskommunikation.',
      en: 'A TV magazine is preparing a segment on the safety of your approved medical device. The editors want to put your head of clinical research into a head-to-head debate with a lone critic — one-on-one format, equal airtime — even though the approval studies and every professional society uniformly confirm its safety. You are head of corporate communications.',
    },
    options: [
      {
        de: 'Ich sage zu, verhandle aber die Einordnung: Der Beitrag soll das Mengenverhältnis der Evidenz benennen — Zulassungsstudien und Fachgesellschaften auf der einen Seite, eine Einzelposition auf der anderen —, und unser Studienleiter macht diese Gewichtung im Gespräch selbst zum Thema.',
        en: 'I accept, but negotiate the framing: the segment should state the actual ratio of the evidence — approval studies and professional societies on one side, a single dissenting voice on the other — and our head of research makes that weighting explicit in the debate itself.',
      },
      {
        de: 'Ich sage ab: Wer sich neben einen Einzelkritiker setzt, wertet ihn zur gleichrangigen Gegenstimme auf — ohne unsere Teilnahme platzt das Format.',
        en: 'I decline: sitting next to a lone critic elevates him to an equal counter-voice — without our participation, the format falls apart.',
      },
      {
        de: 'Ich sage zu und lasse unseren Studienleiter die Kritikpunkte offensiv zerlegen — je härter das Streitgespräch, desto deutlicher setzt sich die bessere Faktenlage durch.',
        en: 'I accept and have our head of research aggressively dismantle the criticisms — the tougher the debate, the more clearly the stronger evidence prevails.',
      },
      {
        de: 'Ich biete der Redaktion stattdessen ein Exklusivinterview ohne Gegenstimme an — so kontrollieren wir die Botschaft vollständig.',
        en: 'I offer the editors an exclusive interview without an opposing voice instead — that way we fully control the message.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das 1:1-Format ist der Hebel der False Balance: Es signalisiert Gleichrangigkeit unabhängig vom Inhalt — das Format legt dem Publikum „umstritten" nahe und kann hängen bleiben, selbst wenn dein Studienleiter das Gespräch inhaltlich gewinnt. Die beste Option arbeitet deshalb am Rahmen statt nur am Inhalt: Sie akzeptiert das legitime journalistische Interesse an Gegenstimmen, macht aber das Mengenverhältnis der Evidenz zur ausgesprochenen Botschaft — vor der Ausstrahlung in der Verhandlung mit der Redaktion und im Gespräch selbst. Genau das ist auch der allgemeine Konter gegen False Balance: Gewichtung explizit machen statt Symmetrie hinnehmen. Die Absage wirkt plausibel, weil Teilnahme den Kritiker tatsächlich aufwertet — aber der Beitrag läuft auch ohne euch, dann mit leerem Stuhl und ohne eure Einordnung. Das offensive Zerlegen wirkt plausibel, weil die Faktenlage ja trägt — es bestätigt aber den Kontroversen-Rahmen: Je härter der Schlagabtausch, desto offener wirkt die Frage. Das Exklusivinterview wirkt plausibel, weil es den Rahmen scheinbar zurückerobert — es ersetzt jedoch falsche Ausgewogenheit durch den Verzicht auf jede Gegenstimme und liest sich für die Redaktion wie Ausweichen.',
      en: 'The one-on-one format is the false-balance lever: it signals equivalence regardless of content — the format suggests "controversial" to the audience and can stick, even if your head of research wins the debate on substance. The best option therefore works on the frame, not just the content: it accepts the legitimate journalistic interest in dissenting voices but turns the actual ratio of the evidence into an explicit message — in the pre-broadcast negotiation with the editors and in the debate itself. That is also the general counter to false balance: make the weighting explicit instead of accepting symmetry. Declining seems plausible because participation does elevate the critic — but the segment airs without you anyway, then with an empty chair and none of your context. Aggressively dismantling the critic seems plausible because the evidence does hold up — but it confirms the controversy frame: the harder the exchange, the more open the question appears. The exclusive interview seems plausible because it appears to reclaim the frame — but it replaces false balance with the absence of any opposing voice, and to the newsroom it reads as evasion.',
    },
    points: 10,
    primaryTechniqueId: 'false_balance',
    relatedTechniques: ['false_balance'],
  },
  {
    id: 'p3-false_balance-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster steckt in diesem Vorschlag?',
      en: 'Which pattern is at work in this proposal?',
    },
    scenario: {
      de: 'Planungsmeeting für das Kundenmagazin eines Energieversorgers: Der Redakteur schlägt vor, den Artikel zur Netzstabilität als Streitgespräch anzulegen — ein Netzbetreiber-Ingenieur gegen einen Blogger, der einen flächendeckenden Blackout vorhersagt, beide mit gleichem Raum. Seine Begründung: „So wirkt der Artikel ausgewogen."',
      en: 'Planning meeting for a utility company\'s customer magazine: the editor proposes structuring the grid-stability article as a head-to-head debate — a grid engineer versus a blogger predicting a nationwide blackout, both given equal space. His reasoning: "That way the article feels balanced."',
    },
    options: [
      { de: 'False Balance / Bothsidesism', en: 'False balance / bothsidesism' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'False Balance: Das symmetrische Format — Fachposition und Einzelmeinung mit gleichem Raum — soll eine offene Kontroverse erzeugen, die es in der Fachwelt so nicht gibt; die Leser können aus der Form auf die Sachlage schließen — belegt ist das Muster, die Einstellungswirkung gilt als plausibel, nicht als gesichert. Legitim ist das Streitgespräch dort, wo tatsächlich Dissens unter Fachleuten besteht — dann ist die Gegenüberstellung guter Journalismus. Erkennen und kontern: vor der Formatwahl das Mengenverhältnis der Belege prüfen und die Gewichtung im Text benennen, statt Symmetrie mit Ausgewogenheit zu verwechseln. Cherry-Picking wirkt plausibel, weil auch dort die Evidenzlage verzerrt wird — es würde aber nur die günstigen Belege zeigen und die Gegenposition weglassen; hier bekommt die Gegenposition ausdrücklich Raum, nur eben zu viel davon.',
      en: 'False balance: the symmetrical format — expert position and lone dissenter at equal length — is meant to create the impression of an open controversy that does not exist in the field; readers may infer the state of the evidence from the shape of the piece — the pattern is documented, its effect on attitudes is considered plausible, not established. The debate format is legitimate where experts genuinely disagree — then the juxtaposition is good journalism. To spot and counter it: check the actual ratio of the evidence before choosing the format, and state the weighting in the text instead of mistaking symmetry for balance. Cherry-picking seems plausible because it also distorts the evidence — but it would show only the favourable findings and omit the opposing side; here the opposing side explicitly gets space, just far too much of it.',
    },
    points: 10,
    primaryTechniqueId: 'false_balance',
    relatedTechniques: ['false_balance', 'cherry_picking'],
  },
];
