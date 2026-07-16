import type { Exercise } from '../../types';

// liking — Phase 3 densification batch.
export const likingP3Exercises: Exercise[] = [
  {
    id: 'lk-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Überzeugungshebel liegen hier übereinander. Welcher ist der DOMINANTE Treiber dafür, dass sich die Einkaufsleiterin am Ende für Anbieter A entscheidet — gegen den sachlich stärkeren Anbieter B?',
      en: 'Several persuasion levers are stacked here. Which is the DOMINANT driver behind the procurement lead ultimately choosing Vendor A — over the objectively stronger Vendor B?',
    },
    scenario: {
      de: 'Nach einer halbjährigen Evaluation muss die Einkaufsleiterin eines Mittelständlers zwischen zwei nahezu gleichwertigen Enterprise-Softwareplattformen wählen. Sachlich spricht mehr für Anbieter B: Ein unabhängiger Analystenbericht bewertet B eine Stufe besser, B hat deutlich mehr Referenzkunden in derselben Branche, und B ist sogar etwas günstiger. Der Vertriebler von Anbieter A ist ihr über die Monate jedoch richtig ans Herz gewachsen — gleiche Region, gleicher trockener Humor, dieselbe Begeisterung für ein Nischen-Hobby; die Termine fühlen sich eher an wie ein Treffen unter Freunden. Nebenbei hat er auch das viel genutzte Branchen-Handbuch zur Einführung solcher Systeme mitverfasst und bei den Terminen ein paar Mittagessen bezahlt. Bei der internen Empfehlung sagt sie, die Plattformen seien „im Grunde ein Unentschieden" — sie baue „einfach lieber eine langfristige Partnerschaft mit jemandem auf, mit dem sie auf einer Wellenlänge ist und mit dem die Zusammenarbeit richtig Freude macht", und votiert für Anbieter A.',
      en: 'After a six-month evaluation, the procurement lead of a mid-sized company must choose between two nearly equivalent enterprise software platforms. On the merits, more speaks for Vendor B: an independent analyst report rates B one tier higher, B has significantly more reference customers in the same industry, and B is even slightly cheaper. Yet over the months she has grown genuinely fond of Vendor A’s account executive — same region, same dry humour, the same enthusiasm for a niche hobby; the meetings feel more like catching up with a friend. In passing, he also co-authored the widely used industry handbook on rolling out such systems, and picked up the tab for a few lunches during their meetings. In her internal recommendation she says the platforms are “basically a tie” — she would “simply rather build a long-term partnership with someone she’s on the same wavelength with and genuinely enjoys working with”, and votes for Vendor A.',
    },
    options: [
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominant ist Sympathie (Liking). Der Mechanismus: Ähnlichkeit (gleiche Region, gleicher Humor, gleiches Hobby) und eine über Monate gewachsene, freundschaftlich wirkende Beziehung erzeugen echte Zuneigung — und zu Menschen, die wir mögen, sagen wir eher ja, notfalls sogar gegen die sachlich bessere Option. Genau das passiert hier: Ihre eigene Begründung ist rein affektiv („auf einer Wellenlänge", „Freude an der Zusammenarbeit"), und die Entscheidung fällt gegen die härteren Argumente. Die Grenze: Eine echte, gute Arbeitsbeziehung ist völlig legitim und im B2B sogar wertvoll — manipulativ (bzw. hier ein Compliance-/Sorgfaltsproblem) wird es, wenn erzeugte Nähe eine objektiv bessere, günstigere Alternative verdrängt und die neutrale Beschaffungsentscheidung aushebelt. Warum die anderen Hebel NICHT der Treiber sind: Sozialer Beweis (Index 1) zeigt gerade in die andere Richtung — B hat mehr Referenzkunden, die Masse spricht also für B, nicht für A. Das Autoritätsargument (Index 2) ist verlockend, weil der Vertriebler das Handbuch mitverfasst hat; doch die stärkere, neutrale Autorität — der unabhängige Analystenbericht — bewertet B höher, und sie beruft sich in ihrer Begründung nicht auf seine Expertise, sondern auf die persönliche Beziehung. Reziprozität (Index 3) scheidet aus: Ein paar bezahlte Mittagessen sind eine Höflichkeit, keine Gabe von Gewicht, die ein Verpflichtungsgefühl auslöst — und sie erwähnt kein Gefühl, etwas zurückzahlen zu müssen. Es bleibt allein die erzeugte Sympathie, die die counter-rationale Wahl trägt.',
      en: 'The dominant lever is liking. The mechanism: similarity (same region, same humour, same hobby) plus a months-long, friendship-like relationship create genuine affection — and we are more likely to say yes to people we like, even against the objectively better option. That is exactly what happens: her own justification is purely affective (“on the same wavelength”, “enjoys working with him”), and the decision goes against the harder evidence. The boundary: a real, good working relationship is entirely legitimate and even valuable in B2B — it turns manipulative (or here a compliance / due-diligence problem) when manufactured closeness crowds out an objectively better, cheaper alternative and overrides a neutral procurement decision. Why the other levers are NOT the driver: social proof (index 1) actually points the other way — B has more reference customers, so the crowd favours B, not A. Appeal to authority (index 2) is tempting because the account executive co-authored the handbook; but the stronger, neutral authority — the independent analyst report — rates B higher, and she does not invoke his expertise in her reasoning, only the personal relationship. Reciprocity (index 3) is out: a few paid lunches are a courtesy, not a gift of weight that triggers a sense of obligation — and she mentions no feeling of needing to repay anything. What remains is manufactured liking alone carrying the counter-rational choice.',
    },
    points: 20,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'social_proof', 'authority', 'reciprocity'],
  },
];
