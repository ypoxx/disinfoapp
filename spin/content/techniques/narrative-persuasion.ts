import type { Technique } from '../types';

export const narrativePersuasion: Technique =   {
    id: 'narrative_persuasion',
    name: {
      de: 'Narrative Persuasion',
      en: 'Narrative Persuasion',
      hu: 'Narratív meggyőzés',
      pl: 'Perswazja narracyjna',
      sk: 'Naratívne presviedčanie',
      hr: 'Narativna persuazija',
      el: 'Αφηγηματική πειθώ',
      mk: 'Наративно убедување',
      cnr: 'Narativna persuazija',
    },
    description: {
      de: 'Geschichten und Narrative sind mächtiger als Fakten. Sie aktivieren Emotionen, schaffen Identifikation und umgehen kritisches Denken.',
      en: 'Stories and narratives are more powerful than facts. They activate emotions, create identification, and bypass critical thinking.',
      hu: 'A történetek és narratívák erősebbek a tényeknél. Aktiválják az érzelmeket, azonosulást teremtenek és megkerülik a kritikus gondolkodást.',
      pl: 'Historie i narracje są silniejsze niż fakty. Aktywują emocje, tworzą identyfikację i omijają krytyczne myślenie.',
      sk: 'Príbehy a naratívy sú silnejšie ako fakty. Aktivujú emócie, vytvárajú identifikáciu a obchádzajú kritické myslenie.',
      hr: 'Priče i narativi su moćniji od činjenica. Aktiviraju emocije, stvaraju identifikaciju i zaobilaze kritičko razmišljanje.',
      el: 'Οι ιστορίες και οι αφηγήσεις είναι πιο ισχυρές από τα γεγονότα. Ενεργοποιούν συναισθήματα, δημιουργούν ταύτιση και παρακάμπτουν την κριτική σκέψη.',
      mk: 'Приказните и наративите се помоќни од фактите. Тие ги активираат емоциите, создаваат идентификација и го заобиколуваат критичкото размислување.',
      cnr: 'Priče i narativi su moćniji od činjenica. Aktiviraju emocije, stvaraju identifikaciju i zaobilaze kritičko razmišljanje.',
    },
    category: 'emotional_manipulation',
    difficulty: 'intermediate',
    effectiveness: 'very_high',
    examples: [
      'Anekdotische Evidenz statt Statistiken',
      'Heldenreisen in Werbung und Politik',
      'Verschwörungsnarrative mit dramatischer Story',
      'Case Studies statt Meta-Analysen',
    ],
    evidence: {
      studies: [
        'Green & Brock (2000) - Transportation Theory',
        'Slater & Rouner (2002) - Entertainment-Education',
        'Dahlstrom (2014) - Using Narratives',
      ],
      findings: 'Narrative reduzieren Counter-Arguing und erhöhen Persuasion. Effekt ist stärker bei involvierten, emotionalen Geschichten.',
      uncertainty: {
        confidence: 0.86,
        sampleSize: '80+ Studien, N>12,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['emotional_appeal', 'framing', 'liking'],
    warningNeurons: [
      'Einzelfälle statt repräsentativer Daten',
      'Dramatische Geschichten ohne Kontext',
      'Emotionale Erzählungen statt Fakten',
      'Identifikationsfiguren als Hauptargument',
    ],
    taxonomyGroups: ['emotional_manipulation', 'storytelling'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/640px-GoldenGateBridge-001.jpg',
      alt: 'Golden Gate Bridge - Symbolbild für narrative Strukturen und Verbindungen',
      credit: 'Rich Niewiroski Jr. / Wikimedia Commons (CC-BY 2.5)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:GoldenGateBridge-001.jpg',
      context: 'Narrative schaffen Verbindungen und umgehen kritisches Denken - Green & Brock (2000) Transportation Theory',
    },
  };
