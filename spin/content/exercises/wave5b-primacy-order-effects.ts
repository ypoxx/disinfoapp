// Welle 5b: 3 Übungen für primacy_order_effects (Primacy-/Reihenfolgeeffekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' — keine starken Wirkbehauptungen; Formulierungen mit „kann".
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bPrimacyOrderEffects: Exercise[] = [
  {
    id: 'wave5b-primacy_order_effects-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt der Bereichsleiter hier?',
      en: 'Which technique is the division head using here?',
    },
    scenario: {
      de: 'Vorstandsvorlage zur Standortentscheidung: Der Bereichsleiter ordnet die Entscheidungsunterlage so, dass die Vorteile seines Wunschstandorts auf Seite eins ausführlich stehen und die Risiken erst im Anhang — Zahlen und Wortlaut bleiben unverändert, allein die Reihenfolge lenkt, was der Vorstand zuerst liest und woran er seinen Ersteindruck bildet.',
      en: 'Board decision paper on a site choice: the division head arranges the document so the advantages of his preferred site fill page one, while the risks appear only in the appendix — the figures and wording stay the same; only the sequence steers what the board reads first and where it forms its initial impression.',
    },
    options: [
      { de: 'Primacy-/Reihenfolgeeffekt', en: 'Primacy effect (order effects)' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Primacy-/Reihenfolgeeffekt: Das definierende Merkmal ist, dass Zahlen und Wortlaut identisch bleiben und allein die Position im Dokument den Eindruck verschiebt — das Zuerstgelesene setzt den Rahmen, in dem die späteren Risiken gelesen werden. In Eindrucksbildungsstudien kann eine solche Reihenfolge den Gesamteindruck verschieben, der Effekt ist aber kontextabhängig. So setzt du Reihenfolge professionell ein: Eine sinnvolle Dramaturgie (Kernbotschaft zuerst) ist legitim, solange die Ordnung einem offengelegten, sachlichen Kriterium folgt und die Einschränkungen nicht im Anhang verschwinden. Daran erkennst du es und so entschärfst du es: Wird das Positive konsequent zuerst und Kritisches zuletzt platziert, ordne die Punkte selbst nach einem neutralen Kriterium (chronologisch, nach Kosten, alphabetisch) und bilde dein Urteil erst, wenn alles auf dem Tisch liegt. Die Distraktoren sind echte Nachbarn: Ankereffekt läge vor, wenn eine zuerst genannte Zahl als Bezugspunkt haften bliebe, an dem sich alle weiteren Schätzungen ausrichten — hier gibt es keinen solchen Zahlenanker, nur eine Abfolge. Framing wäre die gleiche Tatsache in wertender Wortwahl (Chance statt Risiko) — hier ist der Wortlaut aber ausdrücklich unverändert. Themensetzung (Agenda Setting) bestimmt, welche Themen überhaupt Aufmerksamkeit bekommen; hier stehen alle Themen in derselben Vorlage, verschoben wird nur ihre Reihenfolge.',
      en: 'Primacy effect (order effects): the defining feature is that the figures and wording stay identical and position alone shifts the impression — what is read first sets the frame in which the later risks are read. In impression-formation studies such an ordering can move the overall impression, though the effect is context-dependent. Using order professionally: a sensible dramaturgy (core message first) is legitimate, as long as the ordering follows a disclosed, factual criterion and the caveats do not vanish into an appendix. How to spot and defuse it: when the positive is consistently placed first and the critical last, reorder the points yourself by a neutral criterion (chronological, by cost, alphabetical) and withhold judgment until everything is on the table. The distractors are genuine neighbours: anchoring would apply if a first-mentioned number stuck as a reference point that later estimates cling to — there is no such numeric anchor here, only a sequence. Framing would be the same fact in evaluative wording (opportunity instead of risk) — but here the wording is expressly unchanged. Agenda setting governs which topics get attention at all; here all topics sit in the same paper, only their order is shifted.',
    },
    points: 10,
    primaryTechniqueId: 'primacy_order_effects',
    relatedTechniques: ['primacy_order_effects', 'anchoring', 'framing', 'agenda_setting'],
  },
  {
    id: 'wave5b-primacy_order_effects-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation und bereitest die Entscheidungsunterlage für den Vorstand aus vier Standortgutachten auf. Dir fällt auf: Der Fachbereich, der zugeliefert hat, hat sein Wunschgutachten an die erste Stelle gesetzt und ausführlich aufbereitet, die drei kritischeren folgen knapp dahinter. Inhaltlich ist alles korrekt — nur die Reihenfolge ist nicht sachlich begründet.',
      en: 'You lead communications and are preparing the board\'s decision paper from four site assessments. You notice: the department that supplied them placed its preferred assessment first and worked it up in detail, with the three more critical ones following briefly behind. Nothing is factually wrong — only the ordering has no substantive justification.',
    },
    options: [
      {
        de: 'Ich mache die Reihenfolge zur bewussten Variable: Ich ordne die vier Gutachten nach einem neutralen, offengelegten Kriterium (etwa nach Kosten oder alphabetisch), stelle jedem dieselbe kurze Kennzahlen-Übersicht an gleicher Position voran und weise den Vorstand auf die geänderte Sortierung hin — so trägt die Substanz den Eindruck, nicht die Position.',
        en: 'I make the ordering a deliberate variable: I sort the four assessments by a neutral, disclosed criterion (by cost, say, or alphabetically), put the same short key-figures summary at the same spot in each, and flag the re-sorting to the board — so substance carries the impression, not position.',
      },
      {
        de: 'Ich drehe die Reihenfolge einfach um und setze das kritischste Gutachten nach vorn — dann gleicht der Vorteil des Erstplatzierten sich von selbst wieder aus.',
        en: 'I simply reverse the order and put the most critical assessment first — that way the front-runner\'s advantage cancels itself out.',
      },
      {
        de: 'Reihenfolge ist reine Formsache; ich lasse die Vorlage, wie sie geliefert wurde, und verlasse mich darauf, dass der Vorstand ohnehin alle vier Gutachten vollständig durchliest.',
        en: 'Order is a mere formality; I leave the paper as delivered and rely on the board reading all four assessments in full anyway.',
      },
      {
        de: 'Ich stelle das schwächste Gutachten bewusst an den Anfang, damit die drei stärkeren danach umso überzeugender wirken.',
        en: 'I deliberately put the weakest assessment first, so the three stronger ones land all the more convincingly afterwards.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Der Reihenfolgeeffekt kann den Ersteindruck an das binden, was zuerst und ausführlich präsentiert wird — hier das Wunschgutachten des Fachbereichs; die späteren, knapper platzierten Gutachten werden dann in dessen Licht gelesen. Der Effekt ist zwar kontextabhängig und nicht garantiert, aber genau deshalb nimmst du die Reihenfolge nicht als gegeben hin. Legitim einsetzen: Eine Dramaturgie ist erlaubt — sie muss nur einem offengelegten, sachlichen Kriterium folgen, und genau das leistet die beste Option, indem sie die Sortierung neutralisiert, für alle Gutachten dieselbe Ausgangsinformation an gleicher Stelle liefert und die Änderung transparent macht. Erkennen und kontern: Werde hellhörig, wenn eine Reihenfolge nicht sachlogisch begründet ist, und bilde dein Urteil erst, wenn alles gleichwertig aufbereitet vorliegt. Option 2 wirkt fair, ersetzt aber nur einen willkürlichen Auftakt durch einen anderen — der Vorteil des Erstplatzierten wandert bloß zum Kritischsten, statt zu verschwinden. Option 3 klingt nach Vertrauen in den Vorstand, ignoriert aber, dass gerade die Aufbereitung deine Aufgabe ist; „liest ohnehin alles" lässt die verzerrende Reihenfolge unangetastet. Option 4 nutzt den Effekt selbst manipulativ aus (schwacher Auftakt als Kontrastfolie) — das ist dieselbe Verzerrung, nur zugunsten einer anderen Option, und untergräbt eine neutrale Entscheidungsgrundlage.',
      en: 'Mechanism: the order effect can tie the initial impression to whatever is presented first and in detail — here the department\'s preferred assessment; the later, more briefly placed ones are then read in its light. The effect is context-dependent and not guaranteed, but that is precisely why you do not take the ordering as given. Using it legitimately: a dramaturgy is allowed — it just has to follow a disclosed, factual criterion, which is exactly what the best option does by neutralising the sort, giving every assessment the same baseline information in the same place, and flagging the change transparently. Spotting and countering it: prick up your ears when an order has no substantive justification, and withhold judgment until everything is worked up on equal terms. Option 2 looks fair but merely swaps one arbitrary opener for another — the front-runner\'s edge just migrates to the most critical assessment instead of disappearing. Option 3 sounds like trust in the board but ignores that the write-up is your job; "reads it all anyway" leaves the distorting order untouched. Option 4 exploits the effect manipulatively itself (a weak opener as a foil) — the same distortion, merely in favour of a different option, and it undermines a neutral basis for the decision.',
    },
    points: 10,
    primaryTechniqueId: 'primacy_order_effects',
    relatedTechniques: ['primacy_order_effects', 'framing'],
  },
  {
    id: 'wave5b-primacy_order_effects-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Der Unterschied in der Bewertung beruht hier darauf, dass ___.',
      en: 'Complete the sentence: the difference in ratings here rests on the fact that ___.',
    },
    scenario: {
      de: 'Referenzcheck-Zusammenfassung an ein Auswahlgremium: Für zwei Kandidatinnen liegt Wort für Wort dieselbe Eigenschaftsliste vor — bei der einen stehen die Stärken zuerst und die Schwächen zuletzt, bei der anderen umgekehrt. Das Gremium bewertet die erste Kandidatin durchweg etwas positiver, obwohl die genannten Eigenschaften identisch sind.',
      en: 'Reference-check summary to a selection panel: for two candidates the very same list of traits is provided, word for word — for one the strengths come first and the weaknesses last, for the other the reverse. The panel rates the first candidate somewhat more positively throughout, although the traits listed are identical.',
    },
    options: [
      {
        de: 'die zuerst genannten Eigenschaften den Gesamteindruck stärker prägen können und die später genannten in deren Licht gelesen werden (Primacy-/Reihenfolgeeffekt)',
        en: 'the traits mentioned first can weigh more heavily on the overall impression and the later ones are read in their light (primacy effect / order effects)',
      },
      {
        de: 'eine zuerst genannte Zahl als Bezugspunkt haften bleibt und alle weiteren Urteile daran ausgerichtet werden (Ankereffekt)',
        en: 'a first-mentioned number sticks as a reference point that all further judgments are aligned to (anchoring)',
      },
      {
        de: 'dieselbe Eigenschaft durch wertende Wortwahl positiv statt negativ gedeutet wird (Framing)',
        en: 'the same trait is cast as positive rather than negative through evaluative wording (framing)',
      },
      {
        de: 'die mehrfache Nennung einer Eigenschaft sie allein durch Wiederholung glaubwürdiger erscheinen lässt (Illusory-Truth-Effekt)',
        en: 'naming a trait several times makes it seem more credible through repetition alone (illusory-truth effect)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Primacy-/Reihenfolgeeffekt: Kennzeichen ist, dass die Eigenschaftsliste Wort für Wort identisch ist und allein die Reihenfolge die Bewertung verschiebt — das genau ist Aschs klassischer Befund zur Eindrucksbildung, wobei die Größe des Effekts kontextabhängig ist. Legitim einsetzen: Wichtiges zuerst zu nennen ist eine normale Priorisierung — sauber bleibt sie, wenn die Reihenfolge einem sachlichen Kriterium folgt und nicht gezielt Ungünstiges nach hinten schiebt. Daran erkennst du es: Wo dieselben Punkte je nach Position unterschiedlich bewertet werden, liegt ein Reihenfolgeeffekt vor; prüf dann, ob die Ordnung sachlich begründet ist, und bilde dein Urteil über die Gesamtliste, nicht über ihren Anfang. Der Ankereffekt (Option 2) läge vor, wenn eine erste Zahl als Bezugspunkt haften bliebe — hier gibt es keine solche Zahl, nur eine Abfolge von Eigenschaften. Framing (Option 3) bräuchte eine unterschiedliche, wertende Wortwahl — die ist hier ausdrücklich identisch. Der Illusory-Truth-Effekt (Option 4) setzt Wiederholung voraus, die eine Aussage glaubwürdiger macht — hier wird nichts wiederholt, verschoben ist allein die Position derselben, einmal genannten Eigenschaften.',
      en: 'Primacy effect (order effects): the hallmark is that the trait list is word-for-word identical and order alone shifts the rating — precisely Asch\'s classic impression-formation finding, with the size of the effect being context-dependent. Using it legitimately: naming the important things first is ordinary prioritisation — it stays clean when the order follows a factual criterion and does not deliberately push the unfavourable to the back. How to spot it: where the same points are rated differently depending on position, an order effect is at work; then check whether the ordering has a substantive basis, and form your judgment about the whole list, not its opening. Anchoring (option 2) would apply if a first number stuck as a reference point — there is no such number here, only a sequence of traits. Framing (option 3) would require different, evaluative wording — which is expressly identical here. The illusory-truth effect (option 4) presupposes repetition that makes a claim more credible — nothing is repeated here; only the position of the same, once-named traits is shifted.',
    },
    points: 10,
    primaryTechniqueId: 'primacy_order_effects',
    relatedTechniques: ['primacy_order_effects', 'anchoring', 'illusory_truth_effect'],
  },
];
