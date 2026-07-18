// Konvertiert aus content/quizzes/technique-quiz.ts (TechniqueQuestion → Exercise, Typ 'technique-match').
// Übersprungen: q12 (alle 4 Optionen waren korrekt — ohne Distraktor nicht als Single-Answer-Item lehrbar).
// q11 hatte zwei korrekte Optionen (social_proof, scarcity); als primäre Technik wurde social_proof gewählt
// (Leitelement der Anzeige), die Erklärung entsprechend angepasst — technique-match ist single-answer.

import type { Exercise } from '../types';

export const quizBank: Exercise[] = [
  {
    id: 'qb-1',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier verwendet?',
      en: 'Which technique is being used here?',
    },
    scenario: {
      de: 'Ein Werbe-Banner zeigt: "Ursprünglich 299€ - JETZT NUR 99€! Das ist ein Rabatt von 200€!" Der ursprüngliche Preis wurde aber nie verlangt.',
      en: 'An ad banner shows: "Originally €299 - NOW ONLY €99! That\'s a €200 discount!" But the original price was never actually charged.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Soziale Bewährtheit', en: 'Social Proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der hohe "Original-Preis" dient als Anker, der den aktuellen Preis günstiger erscheinen lässt - auch wenn der hohe Preis nie real war.',
      en: 'The high "original price" serves as an anchor that makes the current price seem cheaper - even though the high price was never real.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'framing'],
  },
  {
    id: 'qb-2',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: '"9 von 10 Zahnärzten empfehlen diese Zahnpasta!" - Werbung für Zahnpasta X',
      en: '"9 out of 10 dentists recommend this toothpaste!" - Advertisement for toothpaste X',
    },
    options: [
      { de: 'Autorität', en: 'Authority' },
      { de: 'Soziale Bewährtheit', en: 'Social Proof' },
      { de: 'Sympathie', en: 'Liking' },
      { de: 'Konsistenz', en: 'Consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Berufung auf Zahnärzte als Experten-Autorität soll Glaubwürdigkeit vermitteln. Es wird mit der Expertise einer Berufsgruppe argumentiert.',
      en: 'Referring to dentists as expert authority is meant to convey credibility. It argues with the expertise of a professional group.',
    },
    points: 10,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'social_proof'],
  },
  {
    id: 'qb-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche psychologische Technik nutzt diese Aussage?',
      en: 'Which psychological technique does this statement use?',
    },
    scenario: {
      de: 'Ein Post behauptet: "Diese Nachricht wird in 24 Stunden GELÖSCHT! Die Wahrheit darf nicht ans Licht! TEILE JETZT bevor es zu spät ist!"',
      en: 'A post claims: "This message will be DELETED in 24 hours! The truth must not come to light! SHARE NOW before it\'s too late!"',
    },
    options: [
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Reaktanz-Theorie', en: 'Reactance Theory' },
      { de: 'Emotionale Appelle', en: 'Emotional Appeal' },
      { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Künstliche Zeitknappheit ("24 Stunden", "bevor es zu spät ist") erzeugt FOMO (Fear of Missing Out) und Dringlichkeit.',
      en: 'Artificial time scarcity ("24 hours", "before it\'s too late") creates FOMO (Fear of Missing Out) and urgency.',
    },
    points: 10,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity', 'reactance_theory', 'emotional_appeal'],
  },
  {
    id: 'qb-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welcher logische Fehlschluss liegt hier vor?',
      en: 'Which logical fallacy is present here?',
    },
    scenario: {
      de: '"Du bist zu jung, um die Wirtschaft zu verstehen. Deshalb ist deine Meinung zur Steuerpolitik irrelevant."',
      en: '"You\'re too young to understand the economy. Therefore, your opinion on tax policy is irrelevant."',
    },
    options: [
      { de: 'Ad Hominem', en: 'Ad Hominem' },
      { de: 'Strohmann', en: 'Straw Man' },
      { de: 'Falsches Dilemma', en: 'False Dichotomy' },
      { de: 'Autorität', en: 'Authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ad Hominem: Statt auf das Argument einzugehen, wird die Person (Alter) angegriffen, um die Meinung zu diskreditieren.',
      en: 'Ad Hominem: Instead of addressing the argument, the person (age) is attacked to discredit the opinion.',
    },
    points: 10,
    primaryTechniqueId: 'ad_hominem',
    relatedTechniques: ['ad_hominem'],
  },
  {
    id: 'qb-5',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik dominiert in dieser Aussage?',
      en: 'Which technique dominates in this statement?',
    },
    scenario: {
      de: '"Entweder du bist für mehr Überwachung, oder du willst, dass Terroristen gewinnen. Du musst dich entscheiden!"',
      en: '"Either you\'re for more surveillance, or you want terrorists to win. You have to choose!"',
    },
    options: [
      { de: 'Falsches Dilemma', en: 'False Dichotomy' },
      { de: 'Emotionale Appelle', en: 'Emotional Appeal' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Reaktanz', en: 'Reactance' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassisches falsches Dilemma: Es werden nur zwei extreme Optionen präsentiert, obwohl viele Zwischenpositionen existieren.',
      en: 'Classic false dichotomy: Only two extreme options are presented, although many intermediate positions exist.',
    },
    points: 10,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy', 'emotional_appeal'],
  },
  {
    id: 'qb-6',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche digitale Technik wird hier beschrieben?',
      en: 'Which digital technique is described here?',
    },
    scenario: {
      de: 'Eine Website zeigt beim Checkout: "Nur noch 1 Zimmer verfügbar!" obwohl 50+ Zimmer frei sind. Der "Schließen"-Button ist versteckt, der "Jetzt buchen"-Button ist riesig und grün.',
      en: 'A website shows at checkout: "Only 1 room left!" although 50+ rooms are available. The "Close" button is hidden, the "Book now" button is huge and green.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark Patterns' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Ankereffekt', en: 'Anchoring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dark Patterns kombinieren mehrere manipulative UI-Elemente: falsche Verknappung, versteckte Optionen, visuell dominante CTAs.',
      en: 'Dark Patterns combine multiple manipulative UI elements: false scarcity, hidden options, visually dominant CTAs.',
    },
    points: 10,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns', 'scarcity', 'nudging'],
  },
  {
    id: 'qb-7',
    type: 'technique-match',
    difficulty: 'beginner',
    question: {
      de: 'Identifiziere die primäre Persuasionstechnik:',
      en: 'Identify the primary persuasion technique:',
    },
    scenario: {
      de: 'Eine Gratis-Probe wird an deiner Haustür verteilt. Später kommt der Verkäufer zurück und fragt, ob du das Produkt kaufen möchtest.',
      en: 'A free sample is distributed at your doorstep. Later, the salesperson returns and asks if you want to buy the product.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sympathie', en: 'Liking' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Konsistenz', en: 'Consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Gratis-Geschenk erzeugt ein Gefühl der Verpflichtung. Menschen fühlen sich gedrängt, die Gefälligkeit zu erwidern.',
      en: 'The free gift creates a feeling of obligation. People feel compelled to return the favor.',
    },
    points: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity', 'liking'],
  },
  {
    id: 'qb-8',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik nutzt diese Strategie?',
      en: 'Which technique uses this strategy?',
    },
    scenario: {
      de: 'Dieselbe Nachricht wird von 50 verschiedenen Accounts mit leicht unterschiedlichen Formulierungen gepostet, um einen Hashtag zu trendy zu machen.',
      en: 'The same message is posted by 50 different accounts with slightly different wordings to make a hashtag trending.',
    },
    options: [
      { de: 'Digitale Einflussnahme', en: 'Digital Influence' },
      { de: 'Soziale Bewährtheit', en: 'Social Proof' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Koordinierte Kampagnen mit Bot-Netzwerken zur Manipulation von Trends sind typisch für digitale Einflussnahme.',
      en: 'Coordinated campaigns with bot networks to manipulate trends are typical of digital influence.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'social_proof', 'repetition'],
  },
  {
    id: 'qb-9',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welcher kognitive Bias wird hier ausgenutzt?',
      en: 'Which cognitive bias is being exploited here?',
    },
    scenario: {
      de: '"Impfungen sind gefährlich" - Diese Behauptung hörst du zum 10. Mal. Langsam klingt sie weniger absurd, obwohl du keine Beweise gesehen hast.',
      en: '"Vaccines are dangerous" - You hear this claim for the 10th time. Slowly it sounds less absurd, although you haven\'t seen any evidence.',
    },
    options: [
      { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Soziale Bewährtheit', en: 'Social Proof' },
      { de: 'Ankereffekt', en: 'Anchoring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Wahrheitsillusion: Wiederholte Aussagen werden als wahrer wahrgenommen - selbst wenn sie falsch sind. Vertrautheit wird mit Wahrheit verwechselt.',
      en: 'Illusory Truth Effect: Repeated statements are perceived as more true - even if they are false. Familiarity is confused with truth.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'qb-10',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird in diesem Szenario eingesetzt?',
      en: 'Which technique is used in this scenario?',
    },
    scenario: {
      de: 'Ein Video zeigt einen Politiker, der angeblich etwas Skandalöses sagt - aber das Video ist ein perfektes Deepfake, erstellt mit KI.',
      en: 'A video shows a politician allegedly saying something scandalous - but the video is a perfect deepfake, created with AI.',
    },
    options: [
      { de: 'Synthetische Medien', en: 'Synthetic Media' },
      { de: 'Visuelle Manipulation', en: 'Visual Manipulation' },
      { de: 'Emotionale Appelle', en: 'Emotional Appeal' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Deepfakes sind KI-generierte Videos und gehören zu synthetischen Medien - eine der gefährlichsten modernen Desinformationstechniken.',
      en: 'Deepfakes are AI-generated videos and belong to synthetic media - one of the most dangerous modern disinformation techniques.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'qb-11',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik trägt diese Werbung hauptsächlich?',
      en: 'Which persuasion technique primarily carries this ad?',
    },
    scenario: {
      de: 'Eine Werbung zeigt: "Millionen Deutsche vertrauen bereits auf Produkt X (Bewertung 4.9★). Ursprünglich 199€, heute nur 79€! Nur noch 5 auf Lager!"',
      en: 'An ad shows: "Millions of Germans already trust Product X (Rating 4.9★). Originally €199, today only €79! Only 5 left in stock!"',
    },
    options: [
      { de: 'Soziale Bewährtheit', en: 'Social Proof' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Autorität', en: 'Authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Leitelement der Anzeige ist Social Proof: "Millionen vertrauen" und die 4.9★-Bewertung eröffnen die Botschaft und tragen die Kaufentscheidung. Verknappung ("Nur noch 5") und der Ankereffekt (199€) verstärken die Wirkung, bleiben aber sekundär.',
      en: 'The lead element of the ad is social proof: "millions trust" and the 4.9★ rating open the message and carry the purchase decision. Scarcity ("only 5 left") and anchoring (€199) amplify the effect but remain secondary.',
    },
    points: 10,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof', 'scarcity', 'anchoring'],
  },
];
