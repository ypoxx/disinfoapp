import type { Technique } from '../types';

export const equivocation: Technique =   {
    id: 'equivocation',
    name: {
      de: 'Äquivokation',
      en: 'Equivocation',
      hu: 'Kétértelműség',
      pl: 'Ekwiwokacja',
      sk: 'Ekvivokácia',
      hr: 'Ekvivokacija',
      el: 'Αμφισημία',
      mk: 'Еквивокација',
      cnr: 'Ekvivokacija',
    },
    description: {
      de: 'Verwendung mehrdeutiger Begriffe oder Änderung der Bedeutung eines Wortes während der Argumentation, um zu irreführen oder zu verwirren.',
      en: 'Use of ambiguous terms or changing the meaning of a word during argumentation to mislead or confuse.',
      hu: 'Többértelmű kifejezések használata vagy egy szó jelentésének megváltoztatása az érvelés során a félrevezetés vagy zavar keltése érdekében.',
      pl: 'Używanie wieloznacznych terminów lub zmiana znaczenia słowa podczas argumentacji w celu wprowadzenia w błąd lub dezorientacji.',
      sk: 'Používanie nejednoznačných výrazov alebo zmena významu slova počas argumentácie s cieľom zavádzať alebo mýliť.',
      hr: 'Korištenje dvosmislenih pojmova ili promjena značenja riječi tijekom argumentacije kako bi se zavelo ili zbunilo.',
      el: 'Χρήση διφορούμενων όρων ή αλλαγή της σημασίας μιας λέξης κατά την επιχειρηματολογία για να παραπλανήσει ή να μπερδέψει.',
      mk: 'Употреба на двосмислени термини или менување на значењето на збор за време на аргументација за да се заведе или збуни.',
      cnr: 'Korišćenje dvosmislenih pojmova ili promjena značenja riječi tokom argumentacije kako bi se zavelo ili zbunilo.',
    },
    category: 'logical_fallacy',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      '"Freiheit" mal als politische, mal als wirtschaftliche Freiheit verwenden',
      '"Natürlich" als "in der Natur vorkommend" und "gut/harmlos" verwenden',
      'Wechsel zwischen technischer und Alltagsbedeutung von Begriffen',
      '"Theorie" in wissenschaftlichem vs. umgangssprachlichem Sinn',
    ],
    evidence: {
      studies: [
        'Macagno & Walton (2008) - Equivocation Study',
        'Hamblin (1970) - Fallacies Analysis',
        'Walton (1996) - Argumentation Schemes',
      ],
      findings: 'Äquivokation ist subtil und schwer zu erkennen. Effektivität hängt von sprachlicher Kompetenz ab.',
      uncertainty: {
        confidence: 0.68,
        sampleSize: '25+ Studien, N>3,500',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'straw_man', 'narrative_persuasion'],
    warningNeurons: [
      'Wechselnde Bedeutungen desselben Begriffs',
      'Mehrdeutige Schlüsselbegriffe',
      'Vermischung technischer und Alltagssprache',
      'Unklare Definitionen',
    ],
    taxonomyGroups: ['logical_fallacies', 'language_manipulation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Semantic_Net.svg/640px-Semantic_Net.svg.png',
      alt: 'Semantisches Netzwerk - Bedeutungsbeziehungen',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Semantic_Net.svg',
      context: 'Äquivokation nutzt mehrdeutige Begriffe zur Täuschung',
    },
  };
