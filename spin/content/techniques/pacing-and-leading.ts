import type { Technique } from '../types';

export const pacingAndLeading: Technique =   {
    id: 'pacing_and_leading',
    name: {
      de: 'Pacing und Leading',
      en: 'Pacing and Leading',
      hu: 'Pacing és Leading',
      pl: 'Pacing i Leading',
      sk: 'Pacing a Leading',
      hr: 'Pacing i Leading',
      el: 'Pacing και Leading',
      mk: 'Pacing и Leading',
      cnr: 'Pacing i Leading',
    },
    description: {
      de: 'Erst wird die aktuelle Erfahrung der Person gespiegelt (Pacing), um Rapport aufzubauen, dann wird sie in eine gewünschte Richtung gelenkt (Leading).',
      en: 'First, the person\'s current experience is mirrored (Pacing) to build rapport, then they are guided in a desired direction (Leading).',
      hu: 'Először a személy aktuális élményét tükrözik (Pacing) a rapport kiépítéséhez, majd a kívánt irányba terelik (Leading).',
      pl: 'Najpierw doświadczenie osoby jest odzwierciedlane (Pacing) w celu budowania relacji, następnie jest kierowana w pożądanym kierunku (Leading).',
      sk: 'Najprv sa zrkadlí aktuálna skúsenosť osoby (Pacing) na vybudovanie vzťahu, potom je vedená požadovaným smerom (Leading).',
      hr: 'Prvo se zrcali trenutno iskustvo osobe (Pacing) za izgradnju odnosa, zatim se vodi u željenom smjeru (Leading).',
      el: 'Πρώτα αντικατοπτρίζεται η τρέχουσα εμπειρία του ατόμου (Pacing) για να χτιστεί σχέση, στη συνέχεια οδηγείται προς μια επιθυμητή κατεύθυνση (Leading).',
      mk: 'Прво се огледува тековното искуство на личноста (Pacing) за градење однос, потоа се води во посакуваната насока (Leading).',
      cnr: 'Prvo se ogleda trenutno iskustvo osobe (Pacing) za izgradnju odnosa, zatim se vodi u željenom smjeru (Leading).',
    },
    category: 'nlp',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      '"Sie fühlen sich unsicher... und möchten Klarheit... deshalb sollten Sie..."',
      '"Viele Menschen sorgen sich... verstehen das... und deshalb bieten wir..."',
      'Therapeutische Technik, auch in Verkauf und Politik',
      'Synchronisation mit Körpersprache, dann Führung',
    ],
    evidence: {
      studies: [
        'Bandler & Grinder (1979) - NLP Foundations',
        'Sharpley (1984) - NLP Research Review',
        'Heap (2008) - NLP Efficacy Study',
      ],
      findings: 'Empirische Evidenz für NLP-Techniken ist gemischt. Einige Studien zeigen Effekte, andere nicht. Mechanismen unklar.',
      uncertainty: {
        confidence: 0.55,
        sampleSize: '30+ Studien, N>4,000',
        evidenceQuality: 'low',
      },
    },
    relatedTechniques: ['liking', 'embedded_commands', 'priming'],
    warningNeurons: [
      'Spiegelung eigener Gedanken und Gefühle',
      'Gradueller Übergang zu neuen Ideen',
      'Subtile Verhaltensanpassung',
      'Von Bestätigung zu Suggestion',
    ],
    taxonomyGroups: ['nlp_techniques', 'rapport_building'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rapport.jpg/640px-Rapport.jpg',
      alt: 'Rapport-Aufbau - Grundlage von Pacing und Leading',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rapport.jpg',
      context: 'Bandler & Grinder (1979): Erst spiegeln (Pacing), dann führen (Leading)',
    },
  };
