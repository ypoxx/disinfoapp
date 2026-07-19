// Welle 5b: 3 Übungen für optimism_bias (Optimismus-Bias).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Evidenztier 'weak': keine starken Wirkbehauptungen, ehrlich zur Konfidenz.
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bOptimismBias: Exercise[] = [
  {
    id: 'wave5b-optimism_bias-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik zeigt sich in der Reaktion des Standortleiters?',
      en: 'Which technique is on display in the site manager\'s reaction?',
    },
    scenario: {
      de: 'Interne Krisenübung eines Logistikers: Die Sicherheitsbeauftragte legt die Branchenzahlen zu Lagerhallenbränden vor und empfiehlt eine zweite Sprinklerlinie. Der Standortleiter winkt ab: „Diese Statistik gilt für Betriebe, die es schleifen lassen. Bei uns brennt es nicht — dafür arbeiten wir zu sauber." Er streicht die Investition aus dem Plan.',
      en: 'Internal crisis drill at a logistics firm: the safety officer presents the industry figures on warehouse fires and recommends a second sprinkler line. The site manager waves it off: "Those statistics are for outfits that let things slide. We don\'t have fires here — we run too clean a shop for that." He cuts the investment from the plan.',
    },
    options: [
      { de: 'Optimismus-Bias', en: 'Optimism bias' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Der Standortleiter akzeptiert die Basisrate für „die anderen", nimmt sich selbst aber aus — er schätzt das eigene Risiko systematisch niedriger ein als das vergleichbarer Betriebe („bei uns brennt es nicht"). Das ist der Kern des Optimismus-Bias: unrealistischer Optimismus über das eigene Risiko. So nutzt du gesunden Optimismus professionell: Zuversicht hält ein Team handlungsfähig — dosiert und an belegte Fortschritte gekoppelt ist sie in der Kommunikation legitim. Erkennen und kontern: Sobald jemand eine Statistik für andere gelten lässt, aber nicht für die eigene Lage, führ die Basisrate auf den konkreten Fall zurück und verlang ein Downside-Szenario mit Puffer, statt nur den Best Case zu planen. Die Verfügbarkeitsheuristik läge vor, wenn er nach der Erinnerung an konkrete Fälle urteilte („ich habe nie einen Hallenbrand erlebt, also unwahrscheinlich") — er stützt sich hier aber nicht auf fehlende Erinnerung, sondern nimmt sich pauschal von einer akzeptierten Statistik aus. Der Bestätigungsfehler beschriebe, dass er gezielt nur Belege für die eigene Sauberkeit sammelt und Gegenteiliges ausblendet; hier weist er die Zahl nicht mit Gegenbelegen ab, sondern erklärt sich schlicht zur Ausnahme. Die Repräsentativitätsheuristik läge vor, wenn er das Risiko allein am Stereotyp „so sieht ein brandgefährdeter Betrieb aus" festmachte — der entscheidende Schritt ist hier aber, dass er das eigene Risiko unter das vergleichbarer Betriebe setzt, nicht die Ähnlichkeit zu einem Prototyp.',
      en: 'Mechanism: the site manager accepts the base rate for "the others" but exempts himself — he systematically judges his own risk lower than that of comparable operations ("we don\'t have fires here"). That is the heart of optimism bias: unrealistic optimism about one\'s own risk. Using healthy optimism professionally: confidence keeps a team able to act — dosed and tied to demonstrated progress, it is legitimate in communication. Recognising and countering it: the moment someone lets a statistic apply to others but not to their own situation, bring the base rate back to the concrete case and require a downside scenario with a buffer instead of planning only the best case. The availability heuristic would apply if he judged by the ease of recalling concrete cases ("I have never seen a warehouse fire, so it is unlikely") — but here he leans not on missing recall; he exempts himself wholesale from a statistic he accepts. Confirmation bias would describe him gathering only evidence of his own cleanliness and screening out the opposite; here he does not rebut the figure with counter-evidence, he simply declares himself the exception. The representativeness heuristic would apply if he pinned the risk solely on the stereotype "this is what a fire-prone outfit looks like" — but the decisive move here is that he sets his own risk below that of comparable operations, not resemblance to a prototype.',
    },
    points: 10,
    primaryTechniqueId: 'optimism_bias',
    relatedTechniques: ['optimism_bias', 'availability_heuristic', 'confirmation_bias', 'representativeness_heuristic'],
  },
  {
    id: 'wave5b-optimism_bias-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation und redigierst die Investoren-Präsentation zur Series-A-Runde. Die Gründerin plant nur das Best-Case-Szenario; den Puffer für ausfallende Großkunden hat sie gestrichen, mit dem Hinweis: „Solche Ausfälle betreffen andere Gründungen, uns nicht." Der Beirat wird die Zahlen kritisch prüfen.',
      en: 'You lead communications and are editing the investor deck for the Series-A round. The founder plans only the best-case scenario; she has cut the buffer for defaulting key accounts, noting: "Those defaults hit other start-ups, not us." The board will scrutinise the numbers.',
    },
    options: [
      {
        de: 'Ich stelle die Best-Case-Zahlen neben ein Szenario mit realistischen Kundenausfällen und lege die Branchen-Ausfallrate daneben — so entscheidet der Beirat auf Basisraten statt auf der Annahme, gerade uns treffe das Risiko nicht.',
        en: 'I place the best-case numbers next to a scenario with realistic account defaults and set the industry default rate alongside — so the board decides on base rates rather than on the assumption that the risk spares us in particular.',
      },
      {
        de: 'Ich lasse nur das Best-Case-Szenario stehen — ein Downside-Fall in der Präsentation verunsichert den Beirat und schwächt die Verhandlungsposition unnötig.',
        en: 'I keep only the best-case scenario — a downside case in the deck unsettles the board and needlessly weakens the negotiating position.',
      },
      {
        de: 'Ich drehe die Präsentation ins Defensive: Ich stelle die Ausfallrisiken nach vorn und rechne jede Umsatzzahl vorsichtshalber herunter — lieber wirken wir zu vorsichtig als zu blauäugig, das nimmt dem kritischen Beirat den Wind aus den Segeln.',
        en: 'I flip the deck to the defensive: I lead with the default risks and mark every revenue figure down to be safe — better to look overly cautious than naive, which takes the wind out of a sceptical board\'s sails.',
      },
      {
        de: 'Ich überlasse die Einschätzung der Gründerin — sie kennt ihre Kunden, und wenn sie überzeugt ist, dass die Ausfälle andere treffen, ist das ihre unternehmerische Entscheidung.',
        en: 'I leave the judgment to the founder — she knows her customers, and if she is convinced the defaults hit others, that is her entrepreneurial call.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Die Gründerin unterschätzt das eigene Risiko im Vergleich zu ähnlichen Gründungen („uns nicht") — Optimismus-Bias. Der Hebel greift, weil eine Basisrate für andere akzeptiert, aber nicht auf die eigene Lage angewandt wird. So setzt du Zuversicht professionell ein: Ein optimistisches Zielbild motiviert und ist legitim, solange es an ein belegtes Downside-Szenario gekoppelt bleibt. Erkennen und kontern: Genau das leistet die richtige Option — sie holt die Wahrscheinlichkeit über die Branchen-Ausfallrate zurück in den konkreten Fall und stellt Best und Worst Case nebeneinander, statt nur die Sonnenseite zu planen. Option 2 klingt nach kluger Verhandlungsführung, schreibt aber den Bias fest: Ein fehlender Downside-Fall macht die Zahlen für einen prüfenden Beirat gerade unglaubwürdig. Option 3 korrigiert in die Gegenrichtung und kippt in einen Negativitäts-Bias: Risiken werden überbetont und solide Umsatzzahlen künstlich kleingerechnet — eine defensive Verzerrung ist gegenüber einem prüfenden Beirat genauso wenig belastbar wie die geschönte und verschenkt zudem Verhandlungssubstanz. Option 4 wirkt wie respektvolle Rollentrennung, lässt aber genau die unterschätzte Wahrscheinlichkeit unkorrigiert, deren Prüfung deine Aufgabe in der Aufbereitung ist.',
      en: 'Mechanism: the founder underestimates her own risk relative to similar start-ups ("not us") — optimism bias. The lever works because a base rate is accepted for others but not applied to one\'s own situation. Using confidence professionally: an optimistic target picture motivates and is legitimate, as long as it stays coupled to a substantiated downside scenario. Recognising and countering it: that is exactly what the correct option does — it pulls the probability back to the concrete case via the industry default rate and sets best and worst case side by side instead of planning only the sunny side. Option 2 sounds like shrewd negotiating but locks the bias in: a missing downside case is precisely what makes the numbers unconvincing to a scrutinising board. Option 3 overcorrects in the opposite direction into a negativity bias: risks are overweighted and solid revenue figures marked down artificially — a defensive distortion stands up to a scrutinising board no better than the rosy one, and it gives away negotiating substance. Option 4 looks like respectful role separation but leaves uncorrected the very underestimated probability that it is your job to test in the write-up.',
    },
    points: 10,
    primaryTechniqueId: 'optimism_bias',
    relatedTechniques: ['optimism_bias', 'loss_aversion'],
  },
  {
    id: 'wave5b-optimism_bias-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vervollständige: Das Muster in der Absage des Angestellten heißt ___.',
      en: 'Complete the sentence: The pattern in the employee\'s refusal is called ___.',
    },
    scenario: {
      de: 'Mitarbeiter-Sprechstunde zur Berufsunfähigkeitsvorsorge bei einem Versicherer: Die Beraterin zeigt einem Angestellten die Ausfallquote seiner Berufsgruppe und rät zur Zusatzpolice. Er lehnt ab: „Diese Quote gilt für Kollegen, die sich hängen lassen. Ich bin fit und vorsichtig — mich erwischt das nicht", und unterschreibt nur die Basisabsicherung.',
      en: 'Employee advice session on disability cover run by an insurer: the adviser shows an employee the incidence rate for his occupational group and recommends a top-up policy. He declines: "That rate is for colleagues who let themselves slide. I\'m fit and careful — it won\'t catch me," and signs only the basic cover.',
    },
    options: [
      { de: 'Optimismus-Bias', en: 'Optimism bias' },
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Der Angestellte lässt die Ausfallquote für „Kollegen, die sich hängen lassen" gelten, nimmt sich selbst aber aus („mich erwischt das nicht") — er schätzt sein eigenes Risiko systematisch niedriger ein als das der vergleichbaren Berufsgruppe. Das ist der Optimismus-Bias. So bleibt Optimismus professionell: Als motivierendes Zielbild ist Zuversicht legitim, solange sie die eigene Vorsorge nicht ersetzt. Erkennen und kontern: Achte auf den Bruch zwischen akzeptierter Statistik und ausgenommener eigener Person — und führ die Quote zurück auf den konkreten Fall, hier auf die empfohlene Zusatzpolice. Der Bestätigungsfehler beschriebe das gezielte Sammeln von Belegen für die eigene Fitness bei gleichzeitigem Ausblenden von Gegenteiligem; er sucht hier aber keine Belege, sondern erklärt sich schlicht zur Ausnahme von der Quote. Die Verfügbarkeitsheuristik läge vor, wenn er nach der Erinnerung urteilte („in meinem Umfeld ist noch niemand berufsunfähig geworden") — er stützt sich jedoch nicht auf fehlende Fälle, sondern auf die eigene Sonderstellung. Die Repräsentativitätsheuristik läge vor, wenn er allein am Stereotyp „so sieht ein Risikofall aus" urteilte; entscheidend ist hier aber die Selbst-vs.-andere-Abgrenzung, nicht die Ähnlichkeit zu einem Prototyp.',
      en: 'Mechanism: the employee lets the incidence rate apply to "colleagues who let themselves slide" but exempts himself ("it won\'t catch me") — he systematically judges his own risk lower than that of the comparable occupational group. That is optimism bias. Keeping optimism professional: as a motivating target picture, confidence is legitimate, as long as it does not replace one\'s own precaution. Recognising and countering it: watch for the break between the accepted statistic and the exempted self — and bring the rate back to the concrete case, here to the recommended top-up policy. Confirmation bias would describe the targeted gathering of evidence for his own fitness while screening out the opposite; here he seeks no evidence, he simply declares himself an exception to the rate. The availability heuristic would apply if he judged by recall ("no one around me has ever become disabled") — but he leans not on missing cases, rather on his own special standing. The representativeness heuristic would apply if he judged solely by the stereotype "this is what a risk case looks like"; what is decisive here, though, is the self-versus-others exemption, not resemblance to a prototype.',
    },
    points: 10,
    primaryTechniqueId: 'optimism_bias',
    relatedTechniques: ['optimism_bias', 'confirmation_bias', 'availability_heuristic', 'representativeness_heuristic'],
  },
];
