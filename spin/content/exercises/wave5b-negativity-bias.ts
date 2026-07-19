// Welle 5b: 3 Übungen für negativity_bias (Negativitäts-Bias).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' — kein seriousMode, kein frontier: normale Erkennen-&-Kontern-Didaktik,
// aber keine starken Wirkbehauptungen.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bNegativityBias: Exercise[] = [
  {
    id: 'wave5b-negativity_bias-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt der Redakteur hier aus?',
      en: 'Which technique is the editor exploiting here?',
    },
    scenario: {
      de: 'Social-Media-Desk einer Nachrichtenredaktion: Aus demselben ausgewogenen Quartalsbericht — Rekordumsatz und ein verfehltes Klimaziel — kann der Redakteur die gute oder die schlechte Nachricht nach oben ziehen. Er führt jede Ausspielung mit dem verfehlten Klimaziel an, obwohl der Rekordumsatz genauso gut belegt ist, weil die negative Nachricht verlässlich fast das Doppelte an Klicks und Verweildauer bringt. Die Formulierung bleibt sachlich; es zählt allein, dass das Negative oben steht.',
      en: 'Social-media desk at a news outlet: from the same balanced quarterly report — record revenue and one missed climate target — the editor can push either the good or the bad news to the top. He leads every version with the missed climate target, even though the record revenue is just as well documented, because the negative news reliably draws nearly double the clicks and dwell time. The wording stays factual; all that matters is that the negative sits on top.',
    },
    options: [
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Negativitäts-Bias', en: 'Negativity bias' },
      { de: 'Emotional Appeal (Angstappell)', en: 'Emotional appeal (fear appeal)' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Negativitäts-Bias: Die gute wie die schlechte Nachricht stehen für dieselbe Bilanz, doch der negative Aufmacher zieht deutlich mehr Aufmerksamkeit — negative Information wird stärker gewichtet als gleich starke positive, ein einzelner Negativpunkt sticht die gute Gesamtbilanz aus. Legitim einsetzen: Ein reales Problem darfst du zum Aufmacher machen, wenn es die relevanteste Nachricht ist — professionell bleibt es, wenn die Zuspitzung die Faktenlage trifft und nicht nur die Klickkurve. Erkennen und kontern: Frag dich, ob das Negative wirklich das Gewichtigste ist oder nur das Aufmerksamste — stell die Schlagzeile neben die volle Bilanz und prüfe, ob die Gewichtung noch stimmt. Verlustaversion liegt nahe, ist aber falsch: Sie bräuchte eine Entscheidung, bei der ein konkreter Verlust gegen einen Gewinn abgewogen wird („was Sie verlieren, wenn…") — hier trifft niemand eine Wahl zwischen Gewinn und Verlust, das Negative gewinnt schlicht mehr Aufmerksamkeit. Die Verfügbarkeitsheuristik würde über ein lebhaftes, leicht erinnerbares Einzelbeispiel laufen, das die Häufigkeit überschätzen lässt — hier gibt es kein Beispiel, nur die stärkere Gewichtung derselben Zahl. Der Angstappell (Emotional Appeal) arbeitet mit dramatisierter Sprache oder einem drastischen Bild, das Furcht auslöst; der Aufmacher bleibt hier sachlich formuliert und wirkt allein durch die negative Stoßrichtung.',
      en: 'Negativity bias: the good news and the bad news stand for the same set of results, yet the negative lead draws far more attention — negative information is weighted more heavily than equally strong positive, and a single negative point outshines the strong overall result. Used legitimately: you may lead with a real problem when it is the most relevant news — it stays professional when the sharpened angle matches the facts, not just the click curve. To spot and counter it: ask whether the negative is truly the weightiest point or merely the most attention-grabbing — set the headline against the full record and check the proportions still hold. Loss aversion feels close but is wrong: it would need a decision weighing a concrete loss against a gain ("what you lose if…") — here nobody chooses between gain and loss, the negative simply commands more attention. The availability heuristic would run through a vivid, easily recalled single case that inflates perceived frequency — here there is no example, only the heavier weighting of the same figure. A fear appeal works through dramatised language or a drastic image that triggers fear; here the lead stays plainly worded and works purely through its negative thrust.',
    },
    points: 10,
    primaryTechniqueId: 'negativity_bias',
    relatedTechniques: ['negativity_bias', 'loss_aversion', 'availability_heuristic', 'emotional_appeal'],
  },
  {
    id: 'wave5b-negativity_bias-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Betriebsversammlung nach der Mitarbeiterbefragung: Als Kommunikationsleiterin präsentierst du die Ergebnisse — neun von zehn Werten sind gegenüber dem Vorjahr gestiegen, der Wert „Vertrauen ins Management" ist leicht gefallen. Nach zwei Minuten dreht sich die ganze Diskussion nur noch um diesen einen gesunkenen Wert; die neun Verbesserungen sind aus dem Raum verschwunden.',
      en: 'All-hands after the employee survey: as head of comms you present the results — nine of ten scores rose year on year, while "trust in management" dipped slightly. Within two minutes the entire discussion is about that one fallen score; the nine improvements have vanished from the room.',
    },
    options: [
      {
        de: 'Ich lasse den kritischen Wert beim nächsten Mal aus der Präsentation heraus und führe nur die neun Verbesserungen auf — so überlagert die eine Zahl nicht wieder die gute Nachricht.',
        en: 'Next time I leave the critical score out of the deck and show only the nine improvements — so the one figure does not overshadow the good news again.',
      },
      {
        de: 'Ich benenne den gesunkenen Wert offen und stelle ihn in Proportion: Ich zeige ihn neben den neun gestiegenen mit den konkreten Zahlen und nenne den einen Schritt, den wir daraufhin gehen — damit die eine Zahl ihr tatsächliches Gewicht zurückbekommt.',
        en: 'I name the fallen score openly and set it in proportion: I show it beside the nine that rose, with the actual figures, and name the one step we are taking in response — so the single number regains its true weight.',
      },
      {
        de: 'Ich kontere, indem ich auf den Fachkräftemangel und die Krise der Branche verweise — verglichen mit diesen Bedrohungen von außen ist der interne Wert eine Randnotiz.',
        en: 'I counter by pointing to the talent shortage and the sector crisis — next to those external threats the internal score is a footnote.',
      },
      {
        de: 'Ich halte dagegen, dass ein schwacher Wert unter zehn nicht zählen sollte, und bitte die Runde, sich endlich auf die positiven Ergebnisse zu konzentrieren.',
        en: 'I push back that one weak score out of ten should not count, and ask the room to finally focus on the positive results.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Hier wirkt der Negativitäts-Bias: Der eine gesunkene Wert zieht mehr Aufmerksamkeit als die neun gestiegenen zusammen — nicht weil er wichtiger ist, sondern weil Negatives stärker gewichtet wird. Die beste Option arbeitet nicht mit Verdrängung gegen das Muster, sondern stellt die Proportion wieder her: Du nennst das Negative ehrlich, verankerst es sichtbar in der vollen Bilanz und gibst ihm mit einem konkreten Schritt genau das Gewicht, das es verdient. Legitim einsetzen: Kritik sichtbar zu adressieren ist seriös — der Unterschied ist, ob du sie in Proportion setzt oder sie (in beide Richtungen) über- oder untergewichtest. Erkennen und kontern: Sobald ein einzelner Negativpunkt die ganze Wahrnehmung kippt, hol die vollständige Faktenlage zurück ins Bild und prüfe die Gewichtung mit Zahlen, statt das Gefühl zu bedienen. Den Wert wegzulassen (Option 1) wäre Cherry Picking und zerstört Vertrauen, sobald es auffällt — es bekämpft den Bias mit einer neuen Verzerrung. Auf äußere Bedrohungen umzulenken (Option 3) ist ein Whataboutism-Manöver: Es beantwortet den Kritikpunkt nicht, sondern überlagert ihn mit einem noch größeren Negativen und wirkt ausweichend. Die Runde zu bitten, sich auf das Positive zu konzentrieren (Option 4), redet die Sorge klein und lässt die offene Frage — warum ist das Vertrauen gesunken? — unbeantwortet im Raum stehen.',
      en: 'This is negativity bias at work: the one fallen score pulls more attention than the nine that rose combined — not because it matters more, but because negatives are weighted more heavily. The best option does not fight the pattern by suppression; it restores proportion: you name the negative honestly, anchor it visibly in the full record, and give it exactly the weight it deserves with a concrete next step. Used legitimately: addressing criticism openly is sound — the difference is whether you keep it in proportion or over- or under-weight it (in either direction). To spot and counter it: the moment a single negative point tips the whole perception, bring the complete picture back into view and check the weighting with numbers rather than feeding the feeling. Dropping the score (option 1) is cherry-picking and destroys trust the moment it is noticed — it fights the bias with a fresh distortion. Redirecting to external threats (option 3) is a whataboutism move: it does not answer the criticism, it buries it under an even bigger negative and reads as evasive. Asking the room to focus on the positive (option 4) belittles the concern and leaves the open question — why has trust fallen? — unanswered in the room.',
    },
    points: 10,
    primaryTechniqueId: 'negativity_bias',
    relatedTechniques: ['negativity_bias', 'cherry_picking', 'whataboutism'],
  },
  {
    id: 'wave5b-negativity_bias-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fact Sheet eines Verbandes für Abgeordnetenbüros in einer Regulierungsdebatte: Der Public-Affairs-Manager stellt der geplanten Regelung eine einzelne dokumentierte Risikozahl gegenüber zehn ebenso gut belegten Nutzenkennzahlen — alle elf in derselben schlichten Aufmachung, gleiche Schrift, gleiche Größe. In den Rückmeldungen aus den Büros taucht am Ende fast nur die eine Risikozahl auf; die zehn Nutzenwerte spielen in der Debatte kaum eine Rolle.',
      en: 'A trade association\'s fact sheet for legislators\' offices in a regulation debate: the public-affairs manager sets one documented risk figure against ten equally well-sourced benefit metrics — all eleven in the same plain layout, same type, same size. In the feedback coming back from the offices, essentially only the one risk figure shows up; the ten benefit figures barely register in the debate.',
    },
    options: [
      { de: 'Negativitäts-Bias', en: 'Negativity bias' },
      { de: 'Cherry Picking (Rosinenpicken)', en: 'Cherry-picking' },
      { de: 'Framing (Rahmung)', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Negativitäts-Bias: Alle elf Zahlen stehen gleichrangig und gleich gut belegt auf dem Blatt — trotzdem bestimmt die eine negative die Debatte, weil Negatives stärker gewichtet wird als gleich starkes Positives. Legitim einsetzen: Ein echtes Risiko sichtbar zu machen ist zulässig, wenn es das entscheidende ist — professionell bleibt es, wenn die Aufmerksamkeit, die es bekommt, seiner Belegkraft entspricht und nicht nur seiner negativen Ladung. Erkennen und kontern: Prüfe, ob eine Zahl die Debatte trägt, weil sie das Gewichtigste ist, oder nur, weil sie negativ ist — gewichte bewusst nach Belegkraft und stell alle Werte gleichrangig nebeneinander, dann verschwindet der Effekt. Cherry Picking wäre es, wenn die zehn beruhigenden Werte weggelassen würden — sie stehen hier aber alle auf dem Blatt; ausgenutzt wird die Gewichtung, nicht die Auswahl. Framing (Rahmung) würde denselben Sachverhalt sprachlich umdeuten (etwa „90 % sicher" statt „10 % Risiko") — hier bleibt die Formulierung neutral, es wirkt allein das stärkere Gewicht des einen Negativen.',
      en: 'Negativity bias: all eleven figures sit on the page as equals and equally well sourced — yet the one negative dominates the debate, because negatives are weighted more heavily than equally strong positives. Used legitimately: making a genuine risk visible is fine when it is the decisive one — it stays professional when the attention it gets matches its evidential force, not just its negative charge. To spot and counter it: check whether a figure carries the debate because it is the weightiest point or merely because it is negative — weight deliberately by evidential force and line all the figures up as equals, and the effect disappears. It would be cherry-picking if the ten reassuring figures were left out — but here they are all on the page; what is exploited is the weighting, not the selection. Framing would recast the same fact in words (say "90% safe" instead of "10% at risk") — here the wording stays neutral, and it works purely through the greater weight of the single negative.',
    },
    points: 10,
    primaryTechniqueId: 'negativity_bias',
    relatedTechniques: ['negativity_bias', 'cherry_picking', 'framing'],
  },
];
