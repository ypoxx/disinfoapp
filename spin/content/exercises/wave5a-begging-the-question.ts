// Welle wave5a: 3 Übungen für begging_the_question.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen; Fokus auf Muster & Kontern.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aBeggingTheQuestion: Exercise[] = [
  {
    id: 'wave5a-begging_the_question-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die HR-Leiterin hier ein?',
      en: 'Which technique is the HR director using here?',
    },
    scenario: {
      de: 'Interne Kandidatendebatte bei einem Konzern: Die HR-Leiterin empfiehlt dem Auswahlgremium einen Bewerber für die Kommunikationsleitung. Auf die Nachfrage, warum gerade er, sagt sie: „Er ist der beste Kandidat, weil er am besten für die Rolle geeignet ist — und dass er am besten geeignet ist, sieht man ja daran, dass er unser bester Kandidat ist."',
      en: 'Internal candidate debate at a corporation: the HR director recommends an applicant for the head-of-communications role to the selection panel. Asked why him in particular, she says: "He is the best candidate because he is the best fit for the role — and that he is the best fit is obvious from the fact that he is our best candidate."',
    },
    options: [
      { de: 'Zirkelschluss (Begging the Question)', en: 'Begging the question (circular reasoning)' },
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zirkelschluss: Die Begründung stützt die Behauptung nicht, sie wiederholt sie nur — „bester Kandidat" und „am besten geeignet" setzen einander wechselseitig voraus. Genau darin liegt der Mechanismus: Der Satz klingt nach Argument, liefert aber keinen unabhängigen Beleg; wer das Fazit noch nicht glaubt, findet hier keinen Grund, es zu glauben. Legitim einsetzen lässt sich ein Zirkelschluss nicht — legitim ist nur, die dahinterliegende Behauptung mit einer eigenständigen Größe zu belegen (Referenzprojekte, Assessment-Ergebnis, Fachkompetenz) statt mit sich selbst. Erkennen und kontern: Streiche die Konklusion und prüfe, ob die Prämisse noch trägt — bleibt nur eine Umformulierung der These übrig, ist der Kreis geschlossen; frag konkret nach („Woran genau — außer am Ergebnis selbst — machen Sie die Eignung fest?"). Äquivokation wirkt plausibel, weil derselbe Wortschatz mehrfach auftaucht — dort wechselt ein Begriff jedoch unbemerkt die Bedeutung, hier bleibt die Bedeutung gleich und die Aussage dreht sich im Kreis. Eine falsche Dichotomie würde die Auswahl künstlich auf zwei Optionen verengen; ein Strohmann würde die Nachfrage des Gremiums verzerrt wiedergeben und gegen diese Verzerrung argumentieren.',
      en: 'Begging the question: the justification does not support the claim, it merely restates it — "best candidate" and "best fit" presuppose one another. That is exactly the mechanism: the sentence sounds like an argument but offers no independent evidence; anyone not already convinced finds no reason here to become convinced. A circular argument cannot be used legitimately — the only legitimate move is to back the underlying claim with a standalone measure (reference projects, assessment results, domain expertise) rather than with itself. To spot and counter it, delete the conclusion and check whether the premise still stands — if all that remains is a rewording of the thesis, the circle is closed; ask specifically ("On what exactly — other than the outcome itself — do you base the suitability?"). Equivocation seems plausible because the same vocabulary recurs — but there a term quietly shifts meaning, whereas here the meaning stays constant and the statement simply loops. A false dichotomy would artificially narrow the choice to two options; a straw man would distort the panel\'s question and argue against that distortion.',
    },
    points: 10,
    primaryTechniqueId: 'begging_the_question',
    relatedTechniques: ['begging_the_question', 'equivocation'],
  },
  {
    id: 'wave5a-begging_the_question-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du redigierst die Argumentationslinie für ein Vorstands-Statement zur anstehenden Preiserhöhung. Der Entwurf des Fachbereichs begründet sie so: „Der neue Preis ist fair, weil er dem tatsächlichen Wert des Produkts entspricht — und dass er dem Wert entspricht, zeigt der Preis selbst." Der Fachbereich besteht auf dieser Formulierung.',
      en: 'You are editing the argument line for a board statement on an upcoming price increase. The business unit\'s draft justifies it thus: "The new price is fair because it reflects the true value of the product — and that it reflects the value is shown by the price itself." The unit insists on this wording.',
    },
    options: [
      {
        de: 'Ich ersetze den Zirkel durch eine eigenständige Begründung: Ich lasse den Preis mit nachprüfbaren Bezugsgrößen stützen — gestiegene Kosten, Vergleichsangebote, konkreter Mehrwert —, die auch überzeugen, wenn man das Fazit noch nicht teilt.',
        en: 'I replace the circle with a standalone justification: I have the price backed by verifiable reference points — increased costs, comparable offers, concrete added value — that convince even someone who does not yet share the conclusion.',
      },
      {
        de: 'Ich lasse die Formulierung stehen: Sie ist in sich logisch widerspruchsfrei und damit sachlich korrekt.',
        en: 'I leave the wording as is: it is internally consistent and therefore factually correct.',
      },
      {
        de: 'Ich wiederhole „fair" und „dem Wert entsprechend" über das Statement verteilt mehrfach — durch die Wiederholung wirkt die Begründung überzeugender.',
        en: 'I repeat "fair" and "reflects the value" several times across the statement — the repetition makes the justification more convincing.',
      },
      {
        de: 'Ich schärfe es zum Entweder-oder: „Entweder der Preis ist fair, oder wir stellen das Produkt ein." Das beendet die Diskussion.',
        en: 'I sharpen it into an either-or: "Either the price is fair, or we discontinue the product." That ends the debate.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf ist ein Zirkelschluss: „fair" wird mit „entspricht dem Wert" begründet und dieser Wert wiederum mit dem Preis — die Behauptung stützt sich auf sich selbst und beweist nichts. Die beste Option bricht den Kreis auf und liefert genau das, was fehlt: eine unabhängige Größe, die auch trägt, wenn das Publikum die Fairness noch nicht unterstellt. „Formulierung stehen lassen" wirkt plausibel, weil ein Zirkel tatsächlich widerspruchsfrei ist — aber Widerspruchsfreiheit ist kein Beleg; genau diese Verwechslung ist die Falle. Das Schlüsselwort mehrfach zu wiederholen wechselt nur die Technik (Wiederholung/Illusory-Truth-Effekt) und lässt den fehlenden Grund unberührt — bei kritischer Presse fällt es sofort auf. Das Entweder-oder ersetzt den einen Fehlschluss durch den nächsten (falsche Dichotomie): Es erzwingt Zustimmung durch eine künstlich verengte Alternative, statt den Preis zu begründen.',
      en: 'The draft is begging the question: "fair" is justified by "reflects the value", and that value in turn by the price — the claim rests on itself and proves nothing. The best option breaks the circle and supplies exactly what is missing: an independent measure that holds even when the audience does not yet assume the fairness. "Leaving the wording" seems plausible because a circle really is internally consistent — but consistency is not evidence; that very confusion is the trap. Repeating the key word only swaps in another technique (repetition / the illusory-truth effect) and leaves the missing reason untouched — the critical press will spot it at once. The either-or replaces one fallacy with the next (false dichotomy): it forces agreement through an artificially narrowed alternative instead of justifying the price.',
    },
    points: 10,
    primaryTechniqueId: 'begging_the_question',
    relatedTechniques: ['begging_the_question', 'false_dichotomy'],
  },
  {
    id: 'wave5a-begging_the_question-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit dieser Argumentation ___.',
      en: 'Complete the sentence: With this argument, ___.',
    },
    scenario: {
      de: 'Podiumsdiskussion zu Verbraucherschutz: Eine Verbandssprecherin verteidigt das eigene Gütesiegel gegen den Vorwurf, es sage nichts aus. Ihre Antwort: „Unser Siegel garantiert Qualität, weil nur Qualitätsprodukte es tragen dürfen — und dass ein Produkt Qualität hat, erkennt man daran, dass es unser Siegel trägt."',
      en: 'Panel discussion on consumer protection: an association spokesperson defends her own quality seal against the charge that it says nothing. Her reply: "Our seal guarantees quality because only quality products may carry it — and that a product has quality is recognised by the fact that it carries our seal."',
    },
    options: [
      {
        de: 'begründet die Sprecherin die strittige Behauptung mit sich selbst — die Prämisse setzt genau das voraus, was bewiesen werden soll (Zirkelschluss)',
        en: 'the spokesperson justifies the contested claim with itself — the premise presupposes exactly what is to be proven (begging the question)',
      },
      {
        de: 'verwendet die Sprecherin denselben Begriff in wechselnder Bedeutung, damit der Schluss gültig erscheint (Äquivokation)',
        en: 'the spokesperson uses the same term in shifting meanings so the conclusion looks valid (equivocation)',
      },
      {
        de: 'verengt die Sprecherin die Optionen künstlich auf zwei, um eine davon zu erzwingen (falsche Dichotomie)',
        en: 'the spokesperson artificially narrows the options to two in order to force one of them (false dichotomy)',
      },
      {
        de: 'stützt sich die Sprecherin auf eine wörtlich wahre, aber unvollständige Aussage, um einen falschen Gesamteindruck zu erzeugen (Paltering)',
        en: 'the spokesperson relies on a literally true but incomplete statement to create a false overall impression (paltering)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zirkelschluss: Siegel bürgt für Qualität — Qualität wird am Siegel festgemacht. Beide Seiten stützen sich gegenseitig, ein unabhängiger Nachweis (Prüfkriterien, Testverfahren) fehlt vollständig; das ist der Mechanismus. Legitim wäre nur eines: Mach die Aussagekraft an nachprüfbaren Vergabekriterien fest, die auch ohne das Siegel Bestand haben. Erkennen und kontern: Frag nach der Größe, die den Kreis von außen bricht („Welche geprüften Kriterien muss ein Produkt erfüllen — unabhängig davon, ob es das Siegel schon trägt?"). Äquivokation liegt nahe, weil „Qualität" zweimal fällt — dort verschiebt sich aber die Wortbedeutung, hier bleibt sie gleich und die Begründung dreht sich im Kreis. Eine falsche Dichotomie bräuchte eine erzwungene Zwei-Optionen-Wahl; Paltering bräuchte eine wörtlich wahre Einzelaussage, deren Auslassung täuscht — beides passiert hier nicht, die Aussage belegt sich schlicht selbst.',
      en: 'Begging the question: the seal vouches for quality — and quality is pinned to the seal. Each side props up the other; independent verification (test criteria, testing procedure) is entirely absent — that is the mechanism. The only legitimate move is to tie the seal\'s meaning to verifiable award criteria that hold even without the seal. To spot and counter it, ask for the measure that breaks the circle from outside ("Which tested criteria must a product meet — regardless of whether it already carries the seal?"). Equivocation seems close because "quality" appears twice — but there the word\'s meaning shifts, whereas here it stays constant and the justification loops. A false dichotomy would need a forced two-option choice; paltering would need a literally true single statement whose omission misleads — neither happens here; the statement simply proves itself.',
    },
    points: 10,
    primaryTechniqueId: 'begging_the_question',
    relatedTechniques: ['begging_the_question', 'equivocation', 'paltering_half_truth'],
  },
];
