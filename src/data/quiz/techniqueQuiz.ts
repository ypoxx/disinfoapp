import type { TechniqueQuestion } from '@/types/persuasion';

/**
 * Comprehensive quiz questions for technique identification
 * Multiple question types: identification, matching, scenario-based
 */

export const techniqueQuizQuestions: TechniqueQuestion[] = [
  // === IDENTIFICATION QUESTIONS ===
  {
    id: 'q1',
    type: 'identification',
    question: {
      de: 'Welche Technik wird hier verwendet?',
      en: 'Which technique is being used here?',
    },
    scenario: {
      de: 'Ein Werbe-Banner zeigt: "Ursprünglich 299€ - JETZT NUR 99€! Das ist ein Rabatt von 200€!" Der ursprüngliche Preis wurde aber nie verlangt.',
      en: 'An ad banner shows: "Originally €299 - NOW ONLY €99! That\'s a €200 discount!" But the original price was never actually charged.',
    },
    correctAnswers: ['anchoring'],
    options: [
      { id: 'anchoring', text: { de: 'Ankereffekt', en: 'Anchoring' }, isCorrect: true },
      { id: 'scarcity', text: { de: 'Verknappung', en: 'Scarcity' }, isCorrect: false },
      { id: 'framing', text: { de: 'Framing', en: 'Framing' }, isCorrect: false },
      { id: 'social_proof', text: { de: 'Soziale Bewährtheit', en: 'Social Proof' }, isCorrect: false },
    ],
    explanation: {
      de: 'Der hohe "Original-Preis" dient als Anker, der den aktuellen Preis günstiger erscheinen lässt - auch wenn der hohe Preis nie real war.',
      en: 'The high "original price" serves as an anchor that makes the current price seem cheaper - even though the high price was never real.',
    },
    difficulty: 'beginner',
    relatedTechniques: ['anchoring', 'framing'],
  },
  {
    id: 'q2',
    type: 'identification',
    question: {
      de: 'Identifiziere die Haupt-Manipulationstechnik:',
      en: 'Identify the main manipulation technique:',
    },
    scenario: {
      de: '"9 von 10 Zahnärzten empfehlen diese Zahnpasta!" - Werbung für Zahnpasta X',
      en: '"9 out of 10 dentists recommend this toothpaste!" - Advertisement for toothpaste X',
    },
    correctAnswers: ['authority'],
    options: [
      { id: 'authority', text: { de: 'Autorität', en: 'Authority' }, isCorrect: true },
      { id: 'social_proof', text: { de: 'Soziale Bewährtheit', en: 'Social Proof' }, isCorrect: false },
      { id: 'liking', text: { de: 'Sympathie', en: 'Liking' }, isCorrect: false },
      { id: 'consistency', text: { de: 'Konsistenz', en: 'Consistency' }, isCorrect: false },
    ],
    explanation: {
      de: 'Die Berufung auf Zahnärzte als Experten-Autorität soll Glaubwürdigkeit vermitteln. Es wird mit der Expertise einer Berufsgruppe argumentiert.',
      en: 'Referring to dentists as expert authority is meant to convey credibility. It argues with the expertise of a professional group.',
    },
    difficulty: 'beginner',
    relatedTechniques: ['authority', 'social_proof'],
  },
  {
    id: 'q3',
    type: 'identification',
    question: {
      de: 'Welche psychologische Technik nutzt diese Aussage?',
      en: 'Which psychological technique does this statement use?',
    },
    scenario: {
      de: 'Ein Post behauptet: "Diese Nachricht wird in 24 Stunden GELÖSCHT! Die Wahrheit darf nicht ans Licht! TEILE JETZT bevor es zu spät ist!"',
      en: 'A post claims: "This message will be DELETED in 24 hours! The truth must not come to light! SHARE NOW before it\'s too late!"',
    },
    correctAnswers: ['scarcity'],
    options: [
      { id: 'scarcity', text: { de: 'Verknappung', en: 'Scarcity' }, isCorrect: true },
      { id: 'reactance_theory', text: { de: 'Reaktanz-Theorie', en: 'Reactance Theory' }, isCorrect: false },
      { id: 'emotional_appeal', text: { de: 'Emotionale Appelle', en: 'Emotional Appeal' }, isCorrect: false },
      { id: 'illusory_truth_effect', text: { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' }, isCorrect: false },
    ],
    explanation: {
      de: 'Künstliche Zeitknappheit ("24 Stunden", "bevor es zu spät ist") erzeugt FOMO (Fear of Missing Out) und Dringlichkeit.',
      en: 'Artificial time scarcity ("24 hours", "before it\'s too late") creates FOMO (Fear of Missing Out) and urgency.',
    },
    difficulty: 'intermediate',
    relatedTechniques: ['scarcity', 'reactance_theory', 'emotional_appeal'],
  },
  {
    id: 'q4',
    type: 'identification',
    question: {
      de: 'Welcher logische Fehlschluss liegt hier vor?',
      en: 'Which logical fallacy is present here?',
    },
    scenario: {
      de: '"Du bist zu jung, um die Wirtschaft zu verstehen. Deshalb ist deine Meinung zur Steuerpolitik irrelevant."',
      en: '"You\'re too young to understand the economy. Therefore, your opinion on tax policy is irrelevant."',
    },
    correctAnswers: ['ad_hominem'],
    options: [
      { id: 'ad_hominem', text: { de: 'Ad Hominem', en: 'Ad Hominem' }, isCorrect: true },
      { id: 'straw_man', text: { de: 'Strohmann', en: 'Straw Man' }, isCorrect: false },
      { id: 'false_dichotomy', text: { de: 'Falsches Dilemma', en: 'False Dichotomy' }, isCorrect: false },
      { id: 'authority', text: { de: 'Autorität', en: 'Authority' }, isCorrect: false },
    ],
    explanation: {
      de: 'Ad Hominem: Statt auf das Argument einzugehen, wird die Person (Alter) angegriffen, um die Meinung zu diskreditieren.',
      en: 'Ad Hominem: Instead of addressing the argument, the person (age) is attacked to discredit the opinion.',
    },
    difficulty: 'intermediate',
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'q5',
    type: 'identification',
    question: {
      de: 'Welche Technik dominiert in dieser Aussage?',
      en: 'Which technique dominates in this statement?',
    },
    scenario: {
      de: '"Entweder du bist für mehr Überwachung, oder du willst, dass Terroristen gewinnen. Du musst dich entscheiden!"',
      en: '"Either you\'re for more surveillance, or you want terrorists to win. You have to choose!"',
    },
    correctAnswers: ['false_dichotomy'],
    options: [
      { id: 'false_dichotomy', text: { de: 'Falsches Dilemma', en: 'False Dichotomy' }, isCorrect: true },
      { id: 'emotional_appeal', text: { de: 'Emotionale Appelle', en: 'Emotional Appeal' }, isCorrect: false },
      { id: 'framing', text: { de: 'Framing', en: 'Framing' }, isCorrect: false },
      { id: 'reactance_theory', text: { de: 'Reaktanz', en: 'Reactance' }, isCorrect: false },
    ],
    explanation: {
      de: 'Klassisches falsches Dilemma: Es werden nur zwei extreme Optionen präsentiert, obwohl viele Zwischenpositionen existieren.',
      en: 'Classic false dichotomy: Only two extreme options are presented, although many intermediate positions exist.',
    },
    difficulty: 'beginner',
    relatedTechniques: ['false_dichotomy', 'emotional_appeal'],
  },
  {
    id: 'q6',
    type: 'identification',
    question: {
      de: 'Welche digitale Manipulationstechnik wird hier beschrieben?',
      en: 'Which digital manipulation technique is described here?',
    },
    scenario: {
      de: 'Eine Website zeigt beim Checkout: "Nur noch 1 Zimmer verfügbar!" obwohl 50+ Zimmer frei sind. Der "Schließen"-Button ist versteckt, der "Jetzt buchen"-Button ist riesig und grün.',
      en: 'A website shows at checkout: "Only 1 room left!" although 50+ rooms are available. The "Close" button is hidden, the "Book now" button is huge and green.',
    },
    correctAnswers: ['dark_patterns'],
    options: [
      { id: 'dark_patterns', text: { de: 'Dark Patterns', en: 'Dark Patterns' }, isCorrect: true },
      { id: 'scarcity', text: { de: 'Verknappung', en: 'Scarcity' }, isCorrect: false },
      { id: 'nudging', text: { de: 'Nudging', en: 'Nudging' }, isCorrect: false },
      { id: 'anchoring', text: { de: 'Ankereffekt', en: 'Anchoring' }, isCorrect: false },
    ],
    explanation: {
      de: 'Dark Patterns kombinieren mehrere manipulative UI-Elemente: falsche Verknappung, versteckte Optionen, visuell dominante CTAs.',
      en: 'Dark Patterns combine multiple manipulative UI elements: false scarcity, hidden options, visually dominant CTAs.',
    },
    difficulty: 'intermediate',
    relatedTechniques: ['dark_patterns', 'scarcity', 'nudging'],
  },
  {
    id: 'q7',
    type: 'identification',
    question: {
      de: 'Identifiziere die primäre Persuasionstechnik:',
      en: 'Identify the primary persuasion technique:',
    },
    scenario: {
      de: 'Eine Gratis-Probe wird an deiner Haustür verteilt. Später kommt der Verkäufer zurück und fragt, ob du das Produkt kaufen möchtest.',
      en: 'A free sample is distributed at your doorstep. Later, the salesperson returns and asks if you want to buy the product.',
    },
    correctAnswers: ['reciprocity'],
    options: [
      { id: 'reciprocity', text: { de: 'Reziprozität', en: 'Reciprocity' }, isCorrect: true },
      { id: 'liking', text: { de: 'Sympathie', en: 'Liking' }, isCorrect: false },
      { id: 'scarcity', text: { de: 'Verknappung', en: 'Scarcity' }, isCorrect: false },
      { id: 'consistency', text: { de: 'Konsistenz', en: 'Consistency' }, isCorrect: false },
    ],
    explanation: {
      de: 'Das Gratis-Geschenk erzeugt ein Gefühl der Verpflichtung. Menschen fühlen sich gedrängt, die Gefälligkeit zu erwidern.',
      en: 'The free gift creates a feeling of obligation. People feel compelled to return the favor.',
    },
    difficulty: 'beginner',
    relatedTechniques: ['reciprocity', 'liking'],
  },
  {
    id: 'q8',
    type: 'identification',
    question: {
      de: 'Welche Technik nutzt diese Strategie?',
      en: 'Which technique uses this strategy?',
    },
    scenario: {
      de: 'Dieselbe Nachricht wird von 50 verschiedenen Accounts mit leicht unterschiedlichen Formulierungen gepostet, um einen Hashtag zu trendy zu machen.',
      en: 'The same message is posted by 50 different accounts with slightly different wordings to make a hashtag trending.',
    },
    correctAnswers: ['digital_influence'],
    options: [
      { id: 'digital_influence', text: { de: 'Digitale Einflussnahme', en: 'Digital Influence' }, isCorrect: true },
      { id: 'social_proof', text: { de: 'Soziale Bewährtheit', en: 'Social Proof' }, isCorrect: false },
      { id: 'repetition', text: { de: 'Wiederholung', en: 'Repetition' }, isCorrect: false },
      { id: 'illusory_truth_effect', text: { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' }, isCorrect: false },
    ],
    explanation: {
      de: 'Koordinierte Kampagnen mit Bot-Netzwerken zur Manipulation von Trends sind typisch für digitale Einflussnahme.',
      en: 'Coordinated campaigns with bot networks to manipulate trends are typical of digital influence.',
    },
    difficulty: 'advanced',
    relatedTechniques: ['digital_influence', 'social_proof', 'repetition'],
  },
  {
    id: 'q9',
    type: 'identification',
    question: {
      de: 'Welcher kognitive Bias wird hier ausgenutzt?',
      en: 'Which cognitive bias is being exploited here?',
    },
    scenario: {
      de: '"Impfungen sind gefährlich" - Diese Behauptung hörst du zum 10. Mal. Langsam klingt sie weniger absurd, obwohl du keine Beweise gesehen hast.',
      en: '"Vaccines are dangerous" - You hear this claim for the 10th time. Slowly it sounds less absurd, although you haven\'t seen any evidence.',
    },
    correctAnswers: ['illusory_truth_effect'],
    options: [
      { id: 'illusory_truth_effect', text: { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' }, isCorrect: true },
      { id: 'repetition', text: { de: 'Wiederholung', en: 'Repetition' }, isCorrect: false },
      { id: 'social_proof', text: { de: 'Soziale Bewährtheit', en: 'Social Proof' }, isCorrect: false },
      { id: 'anchoring', text: { de: 'Ankereffekt', en: 'Anchoring' }, isCorrect: false },
    ],
    explanation: {
      de: 'Wahrheitsillusion: Wiederholte Aussagen werden als wahrer wahrgenommen - selbst wenn sie falsch sind. Vertrautheit wird mit Wahrheit verwechselt.',
      en: 'Illusory Truth Effect: Repeated statements are perceived as more true - even if they are false. Familiarity is confused with truth.',
    },
    difficulty: 'intermediate',
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'q10',
    type: 'identification',
    question: {
      de: 'Welche Technik wird in diesem Szenario eingesetzt?',
      en: 'Which technique is used in this scenario?',
    },
    scenario: {
      de: 'Ein Video zeigt einen Politiker, der angeblich etwas Skandalöses sagt - aber das Video ist ein perfektes Deepfake, erstellt mit KI.',
      en: 'A video shows a politician allegedly saying something scandalous - but the video is a perfect deepfake, created with AI.',
    },
    correctAnswers: ['synthetic_media'],
    options: [
      { id: 'synthetic_media', text: { de: 'Synthetische Medien', en: 'Synthetic Media' }, isCorrect: true },
      { id: 'visual_manipulation', text: { de: 'Visuelle Manipulation', en: 'Visual Manipulation' }, isCorrect: false },
      { id: 'emotional_appeal', text: { de: 'Emotionale Appelle', en: 'Emotional Appeal' }, isCorrect: false },
      { id: 'framing', text: { de: 'Framing', en: 'Framing' }, isCorrect: false },
    ],
    explanation: {
      de: 'Deepfakes sind KI-generierte Videos und gehören zu synthetischen Medien - eine der gefährlichsten modernen Desinformationstechniken.',
      en: 'Deepfakes are AI-generated videos and belong to synthetic media - one of the most dangerous modern disinformation techniques.',
    },
    difficulty: 'advanced',
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },

  // === MULTI-CHOICE / MATCHING QUESTIONS ===
  {
    id: 'q11',
    type: 'matching',
    question: {
      de: 'Welche ZWEI Techniken werden hier kombiniert?',
      en: 'Which TWO techniques are combined here?',
    },
    scenario: {
      de: 'Eine Werbung zeigt: "Millionen Deutsche vertrauen bereits auf Produkt X (Bewertung 4.9★). Ursprünglich 199€, heute nur 79€! Nur noch 5 auf Lager!"',
      en: 'An ad shows: "Millions of Germans already trust Product X (Rating 4.9★). Originally €199, today only €79! Only 5 left in stock!"',
    },
    correctAnswers: ['social_proof', 'scarcity'],
    options: [
      { id: 'social_proof', text: { de: 'Soziale Bewährtheit', en: 'Social Proof' }, isCorrect: true },
      { id: 'scarcity', text: { de: 'Verknappung', en: 'Scarcity' }, isCorrect: true },
      { id: 'anchoring', text: { de: 'Ankereffekt', en: 'Anchoring' }, isCorrect: false },
      { id: 'authority', text: { de: 'Autorität', en: 'Authority' }, isCorrect: false },
    ],
    explanation: {
      de: 'Social Proof ("Millionen vertrauen") + Scarcity ("Nur noch 5"). Der Ankereffekt ist auch vorhanden (199€), aber sekundär.',
      en: 'Social Proof ("millions trust") + Scarcity ("only 5 left"). Anchoring is also present (€199), but secondary.',
    },
    difficulty: 'intermediate',
    relatedTechniques: ['social_proof', 'scarcity', 'anchoring'],
  },
  {
    id: 'q12',
    type: 'matching',
    question: {
      de: 'Identifiziere ALLE verwendeten Techniken:',
      en: 'Identify ALL techniques used:',
    },
    scenario: {
      de: 'Post: "95% der Experten verschweigen diese WAHRHEIT! Mainstream-Medien ZENSIEREN das! Teile JETZT bevor es gelöscht wird! Nur heute verfügbar!"',
      en: 'Post: "95% of experts hide this TRUTH! Mainstream media CENSORS it! Share NOW before it\'s deleted! Only available today!"',
    },
    correctAnswers: ['authority', 'reactance_theory', 'scarcity', 'emotional_appeal'],
    options: [
      { id: 'authority', text: { de: 'Autorität (Experten)', en: 'Authority (experts)' }, isCorrect: true },
      { id: 'reactance_theory', text: { de: 'Reaktanz (Zensur)', en: 'Reactance (censorship)' }, isCorrect: true },
      { id: 'scarcity', text: { de: 'Verknappung (nur heute)', en: 'Scarcity (only today)' }, isCorrect: true },
      { id: 'emotional_appeal', text: { de: 'Emotionale Appelle', en: 'Emotional Appeal' }, isCorrect: true },
    ],
    explanation: {
      de: 'Dieser Post ist ein Paradebeispiel für Multi-Technik-Manipulation: Berufung auf Experten, Zensur-Framing (Reaktanz), künstliche Zeitknappheit und Großschreibung für Emotionen.',
      en: 'This post is a prime example of multi-technique manipulation: appealing to experts, censorship framing (reactance), artificial time scarcity, and capitalization for emotions.',
    },
    difficulty: 'advanced',
    relatedTechniques: ['authority', 'reactance_theory', 'scarcity', 'emotional_appeal'],
  },
];

/**
 * Get questions by difficulty
 */
export function getQuestionsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): TechniqueQuestion[] {
  return techniqueQuizQuestions.filter(q => q.difficulty === difficulty);
}

/**
 * Get questions by type
 */
export function getQuestionsByType(type: TechniqueQuestion['type']): TechniqueQuestion[] {
  return techniqueQuizQuestions.filter(q => q.type === type);
}

/**
 * Get random questions
 */
export function getRandomQuestions(count: number = 5): TechniqueQuestion[] {
  const shuffled = [...techniqueQuizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get questions for specific techniques
 */
export function getQuestionsForTechniques(techniqueIds: string[]): TechniqueQuestion[] {
  return techniqueQuizQuestions.filter(q =>
    q.relatedTechniques.some(t => techniqueIds.includes(t))
  );
}
