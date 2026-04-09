import type { Exercise } from '../types';

export const techniqueMatches: Exercise[] = [
  {
    id: 'tm-1',
    type: 'technique-match',
    difficulty: 'beginner',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: '"Nur noch 3 Plätze frei! Melden Sie sich JETZT an, bevor es zu spät ist! Dieses Angebot gibt es nur heute!"',
    },
    options: [
      { de: 'Knappheit (Scarcity)' },
      { de: 'Sozialer Beweis' },
      { de: 'Framing' },
      { de: 'Autoritätsargument' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Künstliche Knappheit erzeugt Dringlichkeit und Angst, etwas zu verpassen (FOMO). Kommunikatoren sollten dieses Muster erkennen - es wird oft in Desinformationskampagnen eingesetzt.',
    },
    points: 10,
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'tm-2',
    type: 'technique-match',
    difficulty: 'beginner',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: '"Führende Wissenschaftler der Harvard University haben bestätigt, dass..." (ohne Quellenangabe oder Studienname)',
    },
    options: [
      { de: 'Autoritätsargument (falsche Autorität)' },
      { de: 'Emotionaler Appell' },
      { de: 'Wiederholung' },
      { de: 'Nudging' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Autoritätsreferenz: Ein prestigeträchtiger Name wird ohne konkrete Quellenangabe benutzt. Kommunikatoren sollten immer die Primärquelle prüfen.',
    },
    points: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'tm-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: 'Pressemitteilung: "Unser Produkt wurde bereits von über 2 Millionen zufriedenen Kunden gewählt. Schließen Sie sich der wachsenden Gemeinschaft an!"',
    },
    options: [
      { de: 'Sozialer Beweis (Social Proof)' },
      { de: 'Knappheit' },
      { de: 'Priming' },
      { de: 'Ad Hominem' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Social Proof nutzt die menschliche Tendenz, sich an der Mehrheit zu orientieren. In der PR ist diese Technik allgegenwärtig - die Grenze zur Manipulation ist fließend.',
    },
    points: 10,
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'tm-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: '"Entweder wir stoppen die Immigration sofort, oder unsere Kultur geht unter. Es gibt keinen Mittelweg."',
    },
    options: [
      { de: 'Falsche Dichotomie' },
      { de: 'Anchoring' },
      { de: 'Reziprozität' },
      { de: 'Pacing & Leading' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Dichotomie reduziert komplexe Themen auf zwei Extremoptionen. In der politischen Kommunikation ein häufiges Mittel - für Kommunikatoren ist es wichtig, die ausgeblendeten Alternativen aufzuzeigen.',
    },
    points: 10,
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'tm-5',
    type: 'technique-match',
    difficulty: 'advanced',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: 'Ein Nachrichtenportal titelt: "Dramatischer Anstieg: Beschwerden über Firma X verdoppelt!" (Im Kleingedruckten: von 3 auf 6 Beschwerden)',
    },
    options: [
      { de: 'Framing (durch relative Zahlen)' },
      { de: 'Dark Patterns' },
      { de: 'Synthetic Media' },
      { de: 'Liking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Framing durch relative statt absolute Zahlen: "Verdoppelt" klingt dramatisch, aber von 3 auf 6 ist praktisch bedeutungslos. Kommunikatoren müssen Statistiken immer im Kontext lesen.',
    },
    points: 10,
    relatedTechniques: ['framing', 'anchoring'],
  },
];
