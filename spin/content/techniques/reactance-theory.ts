import type { Technique } from '../types';

export const reactanceTheory: Technique =   {
    id: 'reactance_theory',
    name: {
      de: 'Reaktanz-Theorie',
      en: 'Reactance Theory',
      hu: 'Reactance Theory (reaktancia-elmélet)',
      pl: 'Reactance Theory (teoria reaktancji)',
      sk: 'Reactance Theory (teória reaktancie)',
      hr: 'Reactance Theory (teorija reaktancije)',
      el: 'Reactance Theory (θεωρία ψυχολογικής αντίδρασης)',
      mk: 'Reactance Theory (теорија на реактанција)',
      cnr: 'Reactance Theory (teorija reaktancije)',
    },
    description: {
      de: 'Wenn Menschen das Gefühl haben, ihre Freiheit wird eingeschränkt, reagieren sie oft mit Widerstand und tun das Gegenteil. Dies kann auch genutzt werden, um gewünschtes Verhalten zu fördern.',
      en: 'When people feel their freedom is being restricted, they often react with resistance and do the opposite. This can also be used to promote desired behavior.',
      hu: 'Amikor az emberek úgy érzik, hogy szabadságukat korlátozzák, gyakran ellenállással reagálnak és az ellenkezőjét teszik. Ez felhasználható a kívánt viselkedés előmozdítására is.',
      pl: 'Kiedy ludzie czują, że ich wolność jest ograniczana, często reagują oporem i robią coś przeciwnego. Może to być również wykorzystywane do promowania pożądanych zachowań.',
      sk: 'Keď ľudia cítia, že ich sloboda je obmedzovaná, často reagujú odporom a robia opak. Môže sa to využiť aj na podporu žiaduceho správania.',
      hr: 'Kada ljudi osjećaju da im se sloboda ograničava, često reagiraju otporom i rade suprotno. To se također može koristiti za promicanje željenog ponašanja.',
      el: 'Όταν οι άνθρωποι αισθάνονται ότι η ελευθερία τους περιορίζεται, συχνά αντιδρούν με αντίσταση και κάνουν το αντίθετο. Αυτό μπορεί επίσης να χρησιμοποιηθεί για την προώθηση επιθυμητής συμπεριφοράς.',
      mk: 'Кога луѓето чувствуваат дека нивната слобода е ограничена, често реагираат со отпор и го прават спротивното. Ова исто така може да се користи за промовирање на посакуваното однесување.',
      cnr: 'Kada ljudi osjećaju da im se sloboda ograničava, često reaguju otporom i rade suprotno. To se takođe može koristiti za promociju željenog ponašanja.',
    },
    category: 'cognitive_bias',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      '"Nicht für Kinder geeignet" erhöht Interesse bei Jugendlichen',
      'Reverse Psychology: "Du schaffst das sowieso nicht"',
      'Verbote erzeugen Begierde',
      'Limited access erzeugt Begehrlichkeit',
    ],
    evidence: {
      studies: [
        'Brehm (1966) - Psychological Reactance Theory',
        'Pennebaker & Sanders (1976) - Graffiti Study',
        'Wicklund (1974) - Freedom and Reactance',
      ],
      findings: 'Reaktanz tritt besonders bei wahrgenommener Bedrohung der Freiheit auf. Effekt variiert stark nach Persönlichkeit.',
      uncertainty: {
        confidence: 0.78,
        sampleSize: '60+ Studien, N>8,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['scarcity', 'framing', 'emotional_appeal'],
    warningNeurons: [
      'Betonte Verbote oder Einschränkungen',
      'Exklusivität durch künstliche Barrieren',
      '"Sie sollten nicht..." Formulierungen',
      'Provokative Freiheitsentzug-Darstellungen',
    ],
    taxonomyGroups: ['cognitive_biases', 'resistance_manipulation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Forbidden_fruit.jpg/480px-Forbidden_fruit.jpg',
      alt: 'Verbotene Frucht - Symbol für psychologische Reaktanz',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Forbidden_fruit.jpg',
      context: 'Brehm (1966): Verbote erhöhen oft die Attraktivität des Verbotenen',
    },
  };
