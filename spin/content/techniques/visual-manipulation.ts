import type { Technique } from '../types';

export const visualManipulation: Technique =   {
    id: 'visual_manipulation',
    name: {
      de: 'Visuelle Manipulation',
      en: 'Visual Manipulation',
      hu: 'Vizuális manipuláció',
      pl: 'Manipulacja wizualna',
      sk: 'Vizuálna manipulácia',
      hr: 'Vizualna manipulacija',
      el: 'Οπτική χειραγώγηση',
      mk: 'Визуелна манипулација',
      cnr: 'Vizuelna manipulacija',
    },
    description: {
      de: 'Einsatz von Bildern, Videos, Grafiken und Design-Elementen zur emotionalen Beeinflussung und Verzerrung der Wahrnehmung.',
      en: 'Use of images, videos, graphics, and design elements for emotional influence and perception distortion.',
      hu: 'Képek, videók, grafikák és dizájnelemek alkalmazása az érzelmek befolyásolására és az észlelés torzítására.',
      pl: 'Wykorzystanie obrazów, filmów, grafik i elementów projektowych do wywierania wpływu emocjonalnego i zniekształcania percepcji.',
      sk: 'Použitie obrazov, videí, grafiky a dizajnových prvkov na emocionálne ovplyvňovanie a skreslenie vnímania.',
      hr: 'Korištenje slika, videa, grafika i dizajnerskih elemenata za emocionalno utjecanje i iskrivljavanje percepcije.',
      el: 'Χρήση εικόνων, βίντεο, γραφικών και στοιχείων σχεδιασμού για συναισθηματική επιρροή και παραμόρφωση της αντίληψης.',
      mk: 'Користење слики, видеа, графики и дизајнерски елементи за емоционално влијание и изобличување на перцепцијата.',
      cnr: 'Korišćenje slika, videa, grafika i dizajnerskih elemenata za emocionalni uticaj i iskrivljavanje percepcije.',
    },
    category: 'digital_influence',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Manipulierte Statistik-Grafiken mit verzerrten Skalen',
      'Aus dem Kontext gerissene Bilder',
      'Emotionale Bildauswahl (weinende Kinder, wütende Menschenmassen)',
      'Farbpsychologie in politischen Kampagnen',
    ],
    evidence: {
      studies: [
        'Messaris & Abraham (2001) - Visual Arguments',
        'Huff (1954) - How to Lie with Statistics',
        'Cairo (2019) - Truthful Charts',
      ],
      findings: 'Visuelle Informationen werden schneller verarbeitet und emotional wirksamer als Text. Manipulation schwer zu erkennen.',
      uncertainty: {
        confidence: 0.85,
        sampleSize: '50+ Studien, N>8,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'emotional_appeal', 'synthetic_media'],
    warningNeurons: [
      'Fehlende Quellenangaben bei Bildern',
      'Ungewöhnliche Bildausschnitte',
      'Statistiken mit verzerrten Achsen',
      'Emotionale statt sachliche Bildauswahl',
    ],
    taxonomyGroups: ['digital_techniques', 'media_manipulation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Truncated_Bar_Graph.svg/640px-Truncated_Bar_Graph.svg.png',
      alt: 'Abgeschnittenes Balkendiagramm - Beispiel für irreführende Visualisierung',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Truncated_Bar_Graph.svg',
      context: 'Verzerrte Achsen und manipulierte Grafiken verfälschen die Wahrnehmung von Daten',
    },
  };
