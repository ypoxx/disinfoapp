import type { Exercise } from '../../types';

// repetition — Phase 3 densification batch.
export const repetitionP3Exercises: Exercise[] = [
  {
    id: 'rp-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken hier zusammen. Welche ist der dominante Treiber — der Haupthebel, auf dem die gesamte Strategie beruht?',
      en: 'Several techniques work together here. Which one is the dominant driver — the main lever the whole strategy rests on?',
    },
    scenario: {
      de: 'Ein B2B-Softwareanbieter will die junge Marktkategorie „die autonome Lieferkette" für sich besetzen. Die Marketingleitung gibt eine strikte Sprachregelung aus: Über ein ganzes Quartal beginnt jede Analystenpräsentation, jeder Sales-Pitch, jeder Podcast-Auftritt der Gründerin und jeder LinkedIn-Post mit exakt denselben drei Worten — „die autonome Lieferkette". Der Ausdruck behauptet nichts Überprüfbares; er ist ein Kategorie-Label, kein Faktenversprechen. Er soll allein durch seine schiere, wortgleiche Häufigkeit so vertraut werden, dass Analystinnen und Journalisten bei dieser Kategorie zuerst an genau diese Firma denken. Zwei Nebeneffekte sind eingeplant: Die Phrase steht bewusst ganz am Anfang jedes Auftritts, um die Wahrnehmung des restlichen Pitches vorzuprägen, und sie rückt das Produkt vom nüchternen Etikett „Logistiksoftware" weg hin zu einer aufregenderen neuen Kategorie.',
      en: 'A B2B software vendor wants to own the young market category "the autonomous supply chain". Marketing leadership issues a strict messaging rule: for an entire quarter, every analyst presentation, every sales pitch, every podcast appearance by the founder and every LinkedIn post opens with the exact same three words — "the autonomous supply chain". The expression asserts nothing verifiable; it is a category label, not a factual promise. Purely through its sheer, verbatim frequency it is meant to become so familiar that analysts and journalists think of this company first whenever the category comes up. Two side effects are built in: the phrase is deliberately placed at the very start of each appearance to pre-shape how the rest of the pitch is perceived, and it moves the product away from the dry label "logistics software" toward a more exciting new category.',
    },
    options: [
      {
        de: 'Wiederholung — dieselbe wortgleiche Phrase wird über alle Kanäle und ein ganzes Quartal hochfrequent ausgespielt, damit sie durch bloße Vertrautheit Wiedererkennung und Share-of-Voice gewinnt.',
        en: 'Repetition — the same verbatim phrase is run at high frequency across all channels for a whole quarter, so that through familiarity alone it gains recognition and share of voice.',
      },
      {
        de: 'Wahrheitsillusion — durch die häufige Wiederholung wird die zentrale Aussage als wahrer wahrgenommen, obwohl sie unbelegt ist.',
        en: 'Illusory truth effect — through frequent repetition the central claim is perceived as more true, even though it is unsubstantiated.',
      },
      {
        de: 'Priming — indem die Phrase jedem Auftritt vorangestellt wird, prägt sie die Wahrnehmung des nachfolgenden Pitches vor.',
        en: 'Priming — by placing the phrase ahead of every appearance, it pre-shapes how the subsequent pitch is perceived.',
      },
      {
        de: 'Framing — die Phrase stellt das Produkt aus einem gewählten Blickwinkel dar (neue Kategorie statt schlichter Logistiksoftware).',
        en: 'Framing — the phrase presents the product from a chosen angle (a new category rather than plain logistics software).',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominanter Treiber ist die Wiederholung. Das Rückgrat der Strategie ist die identische, wortgleiche Phrase, die über ein Quartal und alle Kanäle mit maximaler Frequenz ausgespielt wird; das erklärte Ziel — Wiedererkennung, Salienz und Share-of-Voice, also „zuerst an uns denken" — ist genau die Wirkung des Mere-Exposure-Effekts: Vertrautheit entsteht durch schiere Häufigkeit. Legitim ist das als Wiedererkennungsanker beim Aufbau einer Kategorie; die Grenze zur Manipulation verliefe dort, wo die Frequenz echte Argumente ersetzt oder eine unbelegte Behauptung „wahr" hämmert. Die Wahrheitsillusion ist der verlockendste Fehlgriff, scheidet hier aber aus: Sie braucht eine überprüfbare Behauptung, deren gefühlter Wahrheitsgehalt durch Wiederholung steigt. „Die autonome Lieferkette" ist jedoch ein bloßes Kategorie-Label und behauptet nichts, das wahr oder falsch sein könnte — es geht um Erinnerbarkeit und Dominanz der Phrase, nicht um gefühlte Wahrheit. Priming und Framing sind real vorhanden, aber untergeordnet: Priming beschreibt nur den Platzierungs-Nebeneffekt (Phrase zuerst, um den Rest einzufärben), Framing die einmalige Blickwinkel-Wahl (neue Kategorie statt Logistiksoftware). Beide sind Feinjustierungen innerhalb einzelner Auftritte — der Motor, der die Botschaft quartalslang über alle Kanäle trägt, ist die schiere Wiederholung selbst.',
      en: 'The dominant driver is repetition. The backbone of the strategy is the identical, verbatim phrase run at maximum frequency for a quarter across every channel; the stated goal — recognition, salience and share of voice, i.e. "think of us first" — is exactly what the mere-exposure effect produces: familiarity built through sheer frequency. This is legitimate as a recognition anchor when establishing a category; the line into manipulation would be crossed where frequency replaces real arguments or hammers an unsupported claim into feeling "true". The illusory truth effect is the most tempting miss, but it does not apply here: it needs a checkable claim whose felt truth rises with repetition. "The autonomous supply chain" is a bare category label and asserts nothing that could be true or false — this is about the recall and dominance of the phrase, not about perceived truth. Priming and framing are genuinely present but subordinate: priming only names the placement side effect (phrase first, to colour the rest), framing the one-off angle choice (a new category instead of logistics software). Both are fine-tuning within individual appearances — the engine that carries the message across all channels for a whole quarter is the sheer repetition itself.',
    },
    points: 20,
    primaryTechniqueId: 'repetition',
    relatedTechniques: ['repetition', 'priming', 'framing'],
  },
];
