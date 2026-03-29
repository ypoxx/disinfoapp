import type { LearningModule } from '@/types';

export const modules: LearningModule[] = [
  {
    id: 'basics',
    name: {
      de: 'Grundlagen der Desinformation',
      en: 'Basics of Disinformation',
    },
    description: {
      de: 'Lerne die Grundlagen: Was ist Desinformation, wie unterscheidet sie sich von Fehlinformation und warum ist sie gefährlich?',
      en: 'Learn the basics: What is disinformation, how does it differ from misinformation, and why is it dangerous?',
    },
    type: 'lesson',
    difficulty: 'beginner',
    duration: 15,
    points: 100,
    prerequisites: [],
    tags: ['grundlagen', 'einführung', 'theorie'],
    content: {
      title: {
        de: 'Grundlagen der Desinformation',
      },
      media: [],
      interactions: [],
    },
  },
  {
    id: 'tactics',
    name: {
      de: 'Desinformationstaktiken',
      en: 'Disinformation Tactics',
    },
    description: {
      de: 'Erkenne gängige Taktiken und Techniken, die zur Verbreitung von Falschinformationen eingesetzt werden.',
      en: 'Recognize common tactics and techniques used to spread false information.',
    },
    type: 'lesson',
    difficulty: 'intermediate',
    duration: 25,
    points: 150,
    prerequisites: ['basics'],
    tags: ['taktiken', 'manipulation', 'praktisch'],
    content: {
      title: {
        de: 'Desinformationstaktiken',
      },
      media: [],
      interactions: [],
    },
  },
  {
    id: 'psychology',
    name: {
      de: 'Psychologie der Manipulation',
      en: 'Psychology of Manipulation',
    },
    description: {
      de: 'Verstehe die psychologischen Mechanismen, die Desinformation so wirksam machen: Kognitive Verzerrungen und emotionale Trigger.',
      en: 'Understand the psychological mechanisms that make disinformation so effective: cognitive biases and emotional triggers.',
    },
    type: 'lesson',
    difficulty: 'advanced',
    duration: 30,
    points: 200,
    prerequisites: ['basics', 'tactics'],
    tags: ['psychologie', 'kognition', 'bias'],
    content: {
      title: {
        de: 'Psychologie der Manipulation',
      },
      media: [],
      interactions: [],
    },
  },
  {
    id: 'verification',
    name: {
      de: 'Faktencheck-Strategien',
      en: 'Fact-Checking Strategies',
    },
    description: {
      de: 'Lerne praktische Methoden und Tools zum Überprüfen von Informationen und Quellen.',
      en: 'Learn practical methods and tools for verifying information and sources.',
    },
    type: 'lesson',
    difficulty: 'intermediate',
    duration: 20,
    points: 150,
    prerequisites: ['basics'],
    tags: ['faktencheck', 'tools', 'praxis'],
    content: {
      title: {
        de: 'Faktencheck-Strategien',
      },
      media: [],
      interactions: [],
    },
  },
  {
    id: 'practice',
    name: {
      de: 'Praxisanwendung',
      en: 'Practical Application',
    },
    description: {
      de: 'Wende dein Wissen in realistischen Szenarien an und entwickle deine Fähigkeiten zur Desinformationserkennung.',
      en: 'Apply your knowledge in realistic scenarios and develop your disinformation detection skills.',
    },
    type: 'simulation',
    difficulty: 'expert',
    duration: 40,
    points: 250,
    prerequisites: ['basics', 'tactics', 'verification'],
    tags: ['simulation', 'praxis', 'fortgeschritten'],
    content: {
      title: {
        de: 'Praxisanwendung',
      },
      media: [],
      interactions: [],
    },
  },
  {
    id: 'crisis-response',
    name: {
      de: 'Krisenreaktion für Kommunikatoren',
      en: 'Crisis Response for Communicators',
    },
    description: {
      de: 'Erfahre, wie Kommunikationsprofis auf Desinformationsangriffe gegen ihre Organisationen reagieren sollten: Strategien, Stakeholder-Management und ethische Leitlinien.',
      en: 'Learn how communication professionals should respond to disinformation attacks on their organizations: strategies, stakeholder management, and ethical guidelines.',
    },
    type: 'lesson',
    difficulty: 'expert',
    duration: 35,
    points: 300,
    prerequisites: ['basics', 'tactics', 'psychology'],
    tags: ['krise', 'kommunikation', 'strategie', 'reaktion'],
    content: {
      title: {
        de: 'Krisenreaktion für Kommunikatoren',
      },
      media: [],
      interactions: [],
    },
  },
];
