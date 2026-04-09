import type { Technique } from '../types';

export const embeddedCommands: Technique =   {
    id: 'embedded_commands',
    name: {
      de: 'Eingebettete Befehle',
      en: 'Embedded Commands',
      hu: 'Beágyazott parancsok',
      pl: 'Ukryte polecenia',
      sk: 'Zabudované príkazy',
      hr: 'Ugrađene naredbe',
      el: 'Ενσωματωμένες εντολές',
      mk: 'Вградени наредби',
      cnr: 'Ugrađene naredbe',
    },
    description: {
      de: 'Befehle oder Suggestionen werden in scheinbar harmlose Sätze eingebettet, oft durch Betonung oder sprachliche Muster hervorgehoben.',
      en: 'Commands or suggestions are embedded in seemingly harmless sentences, often highlighted through emphasis or linguistic patterns.',
      hu: 'Parancsok vagy szuggesztiók ártalmatlannak tűnő mondatokba vannak beágyazva, gyakran hangsúlyozással vagy nyelvi mintákkal kiemelve.',
      pl: 'Polecenia lub sugestie są osadzane w pozornie nieszkodliwych zdaniach, często podkreślane przez akcent lub wzorce językowe.',
      sk: 'Príkazy alebo návrhy sú zabudované do zdanlivo neškodných viet, často zvýraznené dôrazom alebo jazykovými vzormi.',
      hr: 'Naredbe ili sugestije su ugrađene u naizgled bezazlene rečenice, često istaknute naglašavanjem ili jezičnim uzorcima.',
      el: 'Οι εντολές ή οι υποδείξεις ενσωματώνονται σε φαινομενικά αβλαβείς προτάσεις, συχνά τονισμένες μέσω έμφασης ή γλωσσικών μοτίβων.',
      mk: 'Наредбите или сугестиите се вградени во навидум безопасни реченици, често истакнати преку акцент или јазични обрасци.',
      cnr: 'Naredbe ili sugestije su ugrađene u naizgled bezazlene rečenice, često istaknute naglašavanjem ili jezičkim obrascima.',
    },
    category: 'nlp',
    difficulty: 'expert',
    effectiveness: 'low',
    examples: [
      '"Ich weiß nicht, ob SIE JETZT KAUFEN wollen, aber..."',
      '"Du musst nicht ENTSPANNEN, wenn du nicht willst"',
      '"Manche Menschen ENTSCHEIDEN SICH SOFORT, andere brauchen Zeit"',
      'Hypnotische Sprachmuster in Verkaufsgesprächen',
    ],
    evidence: {
      studies: [
        'Erickson (1980) - Hypnotic Language Patterns',
        'Lynn et al. (2000) - Hypnosis Review',
        'Wagstaff (2010) - Hypnotic Suggestion Mechanisms',
      ],
      findings: 'Wissenschaftliche Evidenz für embedded commands ist sehr schwach. Effekte sind klein und inkonsistent.',
      uncertainty: {
        confidence: 0.45,
        sampleSize: '20+ Studien, N>2,500',
        evidenceQuality: 'low',
      },
    },
    relatedTechniques: ['pacing_and_leading', 'priming', 'framing'],
    warningNeurons: [
      'Ungewöhnliche Betonungen in Sätzen',
      'Imperativformen in Nebensätzen',
      'Hypnotische Sprachmuster',
      'Wiederholte Handlungsaufforderungen',
    ],
    taxonomyGroups: ['nlp_techniques', 'subliminal_influence'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Photographic_Studies_in_Hypnosis%2C_Abnormal_Psychology_%281938%29.webm/640px--Photographic_Studies_in_Hypnosis%2C_Abnormal_Psychology_%281938%29.webm.jpg',
      alt: 'Historische Hypnose-Studie (1938)',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Photographic_Studies_in_Hypnosis,_Abnormal_Psychology_(1938).ogv',
      context: 'Erickson entwickelte Techniken für eingebettete Befehle in der Hypnotherapie',
    },
  };
