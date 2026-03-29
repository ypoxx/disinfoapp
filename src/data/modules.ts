import type { LearningModule } from '@/types';

export const modules: LearningModule[] = [
  {
    id: 'basics',
    name: {
      de: 'Grundlagen der Desinformation',
      en: 'Basics of Disinformation',
    },
    description: {
      de: 'Die Grundlagen für Kommunikationsprofis: Was ist Desinformation, wie unterscheidet sie sich von PR-Spin und Fehlinformation – und warum ist sie eine wachsende Bedrohung für Organisationen?',
      en: 'Essentials for communication professionals: What is disinformation, how does it differ from PR spin and misinformation – and why is it a growing threat to organizations?',
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
      de: 'Erkenne Taktiken, die gegen Organisationen eingesetzt werden: Koordinierte Kampagnen, Reputationsangriffe, Context Collapse und Plattform-Manipulation.',
      en: 'Recognize tactics used against organizations: coordinated campaigns, reputation attacks, context collapse, and platform manipulation.',
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
      de: 'Warum Desinformation wirkt – auch bei Profis: Kognitive Verzerrungen, emotionale Trigger und wie Organisationsvertrauen in Krisen erodiert.',
      en: 'Why disinformation works – even on professionals: cognitive biases, emotional triggers, and how organizational trust erodes in crises.',
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
      de: 'Praktische Tools und Methoden für Kommunikationsabteilungen: Faktencheck-Workflows, Monitoring-Tools und Verifizierung unter Zeitdruck.',
      en: 'Practical tools and methods for communications teams: fact-checking workflows, monitoring tools, and verification under time pressure.',
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
      de: 'Realistische Szenarien aus dem Kommunikationsalltag: Reagiere auf Shitstorms, identifiziere koordinierte Angriffe und übe den Umgang mit Desinformation unter Druck.',
      en: 'Realistic scenarios from daily communications work: respond to crises, identify coordinated attacks, and practice handling disinformation under pressure.',
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
