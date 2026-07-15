import type { Exercise } from '../../types';

// reciprocity — Phase 2 content batch.
export const reciprocityExtraExercises: Exercise[] = [
  {
    id: 're-new-5',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze den Satz: Nachdem die Leiterin ihre ursprünglich sehr große Forderung sichtbar zurückgenommen hat, verspürt das angesprochene Teammitglied den Drang, ___.',
      en: 'Complete the sentence: After the manager visibly scaled back her originally very large request, the team member she addressed feels an urge to ___.',
    },
    scenario: {
      de: 'Eine Abteilungsleiterin sucht Freiwillige für eine neue bereichsübergreifende Initiative. Zuerst bittet sie ein einzelnes Teammitglied im Vieraugengespräch, die gesamte Initiative in Eigenverantwortung zu leiten. Als es zögert, rudert sie sichtbar zurück und bittet nur noch um Mitarbeit in einer kleinen Arbeitsgruppe — woraufhin es dieser reduzierten Bitte kaum noch ausweichen kann und zusagt.',
      en: 'A department head is looking for volunteers for a new cross-functional initiative. First, in a one-on-one, she asks a single team member to take full ownership of the whole initiative. When the person hesitates, she visibly backs off and asks only for participation in a small working group — whereupon they can hardly refuse this scaled-back request and say yes.',
    },
    options: [
      {
        de: 'das sichtbare Zugeständnis mit einem eigenen Entgegenkommen zu erwidern (Reziprozität)',
        en: 'return that visible concession with an accommodation of their own (reciprocity)',
      },
      {
        de: 'einer bereits gegebenen kleinen Zusage konsistent treu zu bleiben (Commitment & Konsistenz)',
        en: 'stay consistent with a small commitment they already made (commitment & consistency)',
      },
      {
        de: 'dem sichtbaren Verhalten der Mehrheit zu folgen (Sozialer Beweis)',
        en: 'follow the visible behavior of the majority (social proof)',
      },
      {
        de: 'sich an einem zuerst genannten Referenzwert zu orientieren (Ankereffekt)',
        en: 'anchor on a reference value stated first (anchoring)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Reziprozität in Form der Door-in-the-face-Technik: Die Leiterin stellt bewusst eine überzogene Erstforderung und nimmt sie sichtbar zurück. Ihr „Nachgeben" wird als Zugeständnis wahrgenommen, das die Norm der Gegenseitigkeit aktiviert — das Teammitglied erwidert es mit einem eigenen Entgegenkommen und sagt für die kleinere Bitte zu. Legitim bleibt das, wenn auch die reduzierte Bitte fair und sinnvoll ist; manipulativ wird es, wenn die Maximalforderung nur als Trick inszeniert wird, um eine Zustimmung zu erzwingen, die sonst nicht käme. Commitment & Konsistenz (Foot-in-the-door) wäre der umgekehrte Weg — erst eine kleine, dann eine größere Bitte; hier läuft es genau andersherum. Sozialer Beweis fehlt, weil auf kein Mehrheitsverhalten verwiesen wird, und der Ankereffekt scheidet aus, weil kein Zahlen- oder Referenzwert im Spiel ist, sondern ein wechselseitiges Zugeständnis.',
      en: 'This is reciprocity in the form of the door-in-the-face technique: the manager deliberately makes an inflated first request and then visibly withdraws it. Her act of giving ground is read as a concession that activates the norm of reciprocity — the team member answers it with an accommodation of their own and says yes to the smaller ask. It stays legitimate when the reduced request is itself fair and worthwhile; it turns manipulative when the maximal demand is staged purely as a trick to extract a yes that would otherwise never come. Commitment & consistency (foot-in-the-door) is the reverse path — a small request first, then a larger one; here it runs exactly the other way around. Social proof is absent because no majority behavior is invoked, and anchoring is out because there is no number or reference value in play, only a mutual concession.',
    },
    points: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity', 'consistency'],
  },
  {
    id: 're-new-6',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wirkt hier — trotz ihrer bewusst rationalen Selbstwahrnehmung — auf die Einkaufsleiterin?',
      en: 'Which persuasion technique is at work on the head of procurement here — despite her deliberately rational self-image?',
    },
    scenario: {
      de: 'Vor einer großen Vertragsverlängerung wertet das Betreuungsteam eines Lieferanten den Servicetarif der Kundin kostenlos auf — „als Dank für die Partnerschaft". Zusätzlich schickt es der Einkaufsleiterin einen aufwendigen, wirklich nützlichen Benchmarking-Report, den sie nie angefordert hat, und übernimmt die Kosten eines Team-Workshops. Nichts davon wird an die Verlängerung geknüpft. Die Einkaufsleiterin pflegt keinerlei persönliche Nähe zum Team und würde es nie „Freundschaft" nennen — trotzdem ertappt sie sich Wochen später in den Verhandlungen dabei, den Lieferanten preislich nicht so hart zu drücken, wie sie es sonst täte.',
      en: 'Ahead of a major contract renewal, a supplier\'s account team upgrades the client\'s service tier for free — "as a thank-you for the partnership." On top of that it sends the head of procurement a detailed, genuinely useful benchmarking report she never requested, and covers the cost of a team workshop. None of it is tied to the renewal. The head of procurement keeps no personal closeness with the team and would never call it a friendship — yet weeks later, in the negotiations, she catches herself not pushing the supplier on price as hard as she normally would.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel ist Reziprozität: Eine Reihe unaufgeforderter, konkreter Zuwendungen (Gratis-Upgrade, wertvoller Report, bezahlter Workshop) baut ein diffuses Schuldgefühl auf — die Norm der Gegenseitigkeit verlangt, empfangene Gefälligkeiten zu erwidern. Genau das weicht die sonst harte Verhandlungshaltung auf, ganz ohne ausgesprochene Bedingung. Sympathie (Liking) ist die stärkste Fehlspur, greift aber nicht: Die Einkaufsleiterin empfindet ausdrücklich keine persönliche Nähe — es wirkt die Verpflichtung aus empfangenem Wert, nicht bloße Zuneigung. Commitment & Konsistenz würde sie eher in ihrer rationalen, preisorientierten Linie bestärken und damit das Gegenteil bewirken; dass sie davon abweicht, zeigt, dass ein anderer Mechanismus am Werk ist. Sozialer Beweis fehlt mangels Verweis auf das Verhalten anderer. Die ethische Grenze: Kleine, transparente Wertschätzung ohne erwartete Gegenleistung ist legitime Beziehungspflege; ein bewusst vor der Verhandlung aufgebauter „Gefälligkeits-Saldo", der die Unabhängigkeit der Entscheidung untergraben soll, kippt ins Manipulative und berührt Compliance-Regeln zu unzulässiger Vorteilsgewährung.',
      en: 'The lever is reciprocity: a series of unsolicited, concrete benefits (free upgrade, valuable report, paid workshop) builds a diffuse sense of indebtedness — the norm of reciprocity demands that received favors be returned. That is exactly what softens her otherwise hard negotiating stance, with no stated condition at all. Liking is the strongest decoy but does not hold: the head of procurement explicitly feels no personal closeness — what operates is the obligation from received value, not mere affection. Commitment & consistency would, if anything, reinforce her rational, price-focused line and thus produce the opposite; the fact that she deviates from it shows a different mechanism is at work. Social proof is absent, as no one else\'s behavior is invoked. The ethical boundary: small, transparent goodwill with no expected return is legitimate relationship-building; a favor-balance deliberately built up before a negotiation to undermine the independence of a decision tips into manipulation and touches compliance rules on improper inducements.',
    },
    points: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity', 'liking'],
  },
];
