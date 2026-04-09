import type { Technique } from '../types';

export const digitalInfluence: Technique =   {
    id: 'digital_influence',
    name: {
      de: 'Digitale Einflussnahme',
      en: 'Digital Influence',
      hu: 'Digitális befolyásolás',
      pl: 'Wpływ cyfrowy',
      sk: 'Digitálny vplyv',
      hr: 'Digitalni utjecaj',
      el: 'Ψηφιακή επιρροή',
      mk: 'Дигитално влијание',
      cnr: 'Digitalni uticaj',
    },
    description: {
      de: 'Systematische Manipulation der digitalen Informationsumgebung durch Bots, koordinierte Kampagnen, Algorithmus-Manipulation und astroturfing.',
      en: 'Systematic manipulation of the digital information environment through bots, coordinated campaigns, algorithm manipulation, and astroturfing.',
      hu: 'A digitális információs környezet szisztematikus manipulálása botok, koordinált kampányok, algoritmus-manipuláció és asztroturfing révén.',
      pl: 'Systematyczna manipulacja cyfrowym środowiskiem informacyjnym poprzez boty, skoordynowane kampanie, manipulację algorytmami i astroturfing.',
      sk: 'Systematická manipulácia digitálneho informačného prostredia prostredníctvom botov, koordinovaných kampaní, manipulácie algoritmov a astroturfingu.',
      hr: 'Sustavna manipulacija digitalnog informacijskog okruženja putem botova, koordiniranih kampanja, manipulacije algoritama i astroturfinga.',
      el: 'Συστηματική χειραγώγηση του ψηφιακού περιβάλλοντος πληροφοριών μέσω bots, συντονισμένων εκστρατειών, χειραγώγησης αλγορίθμων και astroturfing.',
      mk: 'Систематска манипулација на дигиталната информациска средина преку ботови, координирани кампањи, манипулација со алгоритми и астротурфинг.',
      cnr: 'Sistematska manipulacija digitalnog informacionog okruženja putem botova, koordinisanih kampanja, manipulacije algoritama i astroturfinga.',
    },
    category: 'digital_influence',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Bot-Netzwerke, die Hashtags trendy machen',
      'Koordinierte Inauthentic Behavior Kampagnen',
      'SEO-Manipulation für Desinformation',
      'Fake Grassroots Bewegungen (Astroturfing)',
    ],
    evidence: {
      studies: [
        'Woolley & Howard (2018) - Computational Propaganda',
        'Broniatowski et al. (2018) - Russian Trolls',
        'Ferrara et al. (2016) - Rise of Social Bots',
      ],
      findings: 'Digitale Manipulation ist nachweislich effektiv und weit verbreitet. Skalierbarkeit macht sie besonders gefährlich.',
      uncertainty: {
        confidence: 0.82,
        sampleSize: '40+ Studien, N>100,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['microtargeting', 'social_proof', 'repetition'],
    warningNeurons: [
      'Plötzliche virale Trends ohne organisches Wachstum',
      'Unnatürliche Posting-Muster',
      'Koordinierte identische Botschaften',
      'Verdächtig neue oder namenlose Accounts',
    ],
    taxonomyGroups: ['digital_techniques', 'coordinated_manipulation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Social_Network_Analysis_Visualization.png/640px-Social_Network_Analysis_Visualization.png',
      alt: 'Soziale Netzwerkanalyse - Visualisierung digitaler Einflussnahme',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Social_Network_Analysis_Visualization.png',
      context: 'Bot-Netzwerke und koordinierte Kampagnen manipulieren digitale Diskurse',
    },
  };
