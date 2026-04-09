import type { Exercise } from '../types';

export const techniqueMatches: Exercise[] = [
  {
    id: 'tm-1',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Nur noch 3 Plätze frei! Melden Sie sich JETZT an, bevor es zu spät ist! Dieses Angebot gibt es nur heute!"',
      en: '"Only 3 spots left! Sign up NOW before it\'s too late! This offer is available today only!"',
    },
    options: [
      {
        de: 'Knappheit (Scarcity)',
        en: 'Scarcity',
      },
      {
        de: 'Sozialer Beweis',
        en: 'Social proof',
      },
      {
        de: 'Framing',
        en: 'Framing',
      },
      {
        de: 'Autoritätsargument',
        en: 'Appeal to authority',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Künstliche Knappheit erzeugt Dringlichkeit und Angst, etwas zu verpassen (FOMO). Kommunikationsprofis sollten dieses Muster erkennen — es ist eine der am häufigsten eingesetzten Überzeugungstechniken.',
      en: 'Artificial scarcity creates urgency and fear of missing out (FOMO). Communication professionals should recognize this pattern — it is one of the most commonly used persuasion techniques.',
    },
    points: 10,
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'tm-2',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Führende Wissenschaftler der Harvard University haben bestätigt, dass..." (ohne Quellenangabe oder Studienname)',
      en: '"Leading scientists at Harvard University have confirmed that..." (without citation or study name)',
    },
    options: [
      {
        de: 'Autoritätsargument (falsche Autorität)',
        en: 'Appeal to authority (false authority)',
      },
      {
        de: 'Emotionaler Appell',
        en: 'Emotional appeal',
      },
      {
        de: 'Wiederholung',
        en: 'Repetition',
      },
      {
        de: 'Nudging',
        en: 'Nudging',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Autoritätsreferenz: Ein prestigeträchtiger Name wird ohne konkrete Quellenangabe benutzt. Kommunikationsprofis sollten immer die Primärquelle prüfen.',
      en: 'False appeal to authority: A prestigious name is used without a concrete source reference. Communication professionals should always verify the primary source.',
    },
    points: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'tm-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Pressemitteilung: "Unser Produkt wurde bereits von über 2 Millionen zufriedenen Kunden gewählt. Schließen Sie sich der wachsenden Gemeinschaft an!"',
      en: 'Press release: "Our product has already been chosen by over 2 million satisfied customers. Join the growing community!"',
    },
    options: [
      {
        de: 'Sozialer Beweis (Social Proof)',
        en: 'Social proof',
      },
      {
        de: 'Knappheit',
        en: 'Scarcity',
      },
      {
        de: 'Priming',
        en: 'Priming',
      },
      {
        de: 'Ad Hominem',
        en: 'Ad hominem',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Social Proof nutzt die menschliche Tendenz, sich an der Mehrheit zu orientieren. In der PR ist diese Technik allgegenwärtig — die Grenze zur Manipulation ist fließend.',
      en: 'Social proof leverages the human tendency to follow the majority. In PR, this technique is ubiquitous — the line between persuasion and manipulation is blurry.',
    },
    points: 10,
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'tm-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: '"Entweder wir stoppen die Immigration sofort, oder unsere Kultur geht unter. Es gibt keinen Mittelweg."',
      en: '"Either we stop immigration immediately, or our culture will perish. There is no middle ground."',
    },
    options: [
      {
        de: 'Falsche Dichotomie',
        en: 'False dichotomy',
      },
      {
        de: 'Anchoring',
        en: 'Anchoring',
      },
      {
        de: 'Reziprozität',
        en: 'Reciprocity',
      },
      {
        de: 'Pacing & Leading',
        en: 'Pacing & leading',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Dichotomie reduziert komplexe Themen auf zwei Extremoptionen. In der politischen Kommunikation ein häufiges Mittel — für Kommunikationsprofis ist es wichtig, die ausgeblendeten Alternativen aufzuzeigen.',
      en: 'A false dichotomy reduces complex issues to two extreme options. This is a common device in political communication — for communication professionals, it is important to highlight the alternatives being left out.',
    },
    points: 10,
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'tm-5',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein Nachrichtenportal titelt: "Dramatischer Anstieg: Beschwerden über Firma X verdoppelt!" (Im Kleingedruckten: von 3 auf 6 Beschwerden)',
      en: 'A news outlet headlines: "Dramatic surge: Complaints about Company X doubled!" (In the fine print: from 3 to 6 complaints)',
    },
    options: [
      {
        de: 'Framing (durch relative Zahlen)',
        en: 'Framing (through relative numbers)',
      },
      {
        de: 'Dark Patterns',
        en: 'Dark patterns',
      },
      {
        de: 'Synthetic Media',
        en: 'Synthetic media',
      },
      {
        de: 'Liking',
        en: 'Liking',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Framing durch relative statt absolute Zahlen: "Verdoppelt" klingt dramatisch, aber von 3 auf 6 ist praktisch bedeutungslos. Kommunikationsprofis müssen Statistiken immer im Kontext lesen.',
      en: 'Framing through relative rather than absolute numbers: "Doubled" sounds dramatic, but going from 3 to 6 is practically meaningless. Communication professionals must always read statistics in context.',
    },
    points: 10,
    relatedTechniques: ['framing', 'anchoring'],
  },
];
