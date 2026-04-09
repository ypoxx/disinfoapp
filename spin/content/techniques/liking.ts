import type { Technique } from '../types';

export const liking: Technique =   {
    id: 'liking',
    name: {
      de: 'Sympathie',
      en: 'Liking',
      hu: 'Liking (szimpátia)',
      pl: 'Liking (sympatia)',
      sk: 'Liking (sympatia)',
      hr: 'Liking (simpatija)',
      el: 'Liking (συμπάθεια)',
      mk: 'Liking (симпатија)',
      cnr: 'Liking (simpatija)',
    },
    description: {
      de: 'Wir sagen eher ja zu Menschen, die wir mögen. Sympathie wird durch Attraktivität, Ähnlichkeit, Komplimente und Kooperation erzeugt.',
      en: 'We are more likely to say yes to people we like. Liking is created through attractiveness, similarity, compliments, and cooperation.',
      hu: 'Nagyobb valószínűséggel mondunk igent azoknak, akiket kedvelünk. A szimpátiát a vonzerő, a hasonlóság, a bókok és az együttműködés teremti meg.',
      pl: 'Chętniej mówimy tak osobom, które lubimy. Sympatię buduje atrakcyjność, podobieństwo, komplementy i współpraca.',
      sk: 'S väčšou pravdepodobnosťou povieme áno ľuďom, ktorých máme radi. Sympatiu vytvára príťažlivosť, podobnosť, komplimenty a spolupráca.',
      hr: 'Vjerojatnije ćemo reći da ljudima koje volimo. Simpatija se stvara kroz privlačnost, sličnost, komplimente i suradnju.',
      el: 'Είμαστε πιο πιθανό να πούμε ναι σε ανθρώπους που μας αρέσουν. Η συμπάθεια δημιουργείται μέσω της ελκυστικότητας, της ομοιότητας, των κομπλιμέντων και της συνεργασίας.',
      mk: 'Поверојатно е да кажеме да на луѓе што ги сакаме. Симпатијата се создава преку привлечност, сличност, комплименти и соработка.',
      cnr: 'Vjerovatnije ćemo reći da ljudima koje volimo. Simpatija se stvara kroz privlačnost, sličnost, komplimente i saradnju.',
    },
    category: 'social_dynamics',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Attraktive Verkäufer und Werbegesichter',
      '"Menschen wie Sie" in Marketingbotschaften',
      'Influencer, die eine persönliche Verbindung aufbauen',
      'Komplimente vor Verkaufsgesprächen',
    ],
    evidence: {
      studies: [
        'Cialdini (1984) - Liking Principle',
        'Burger et al. (2004) - Similarity and Compliance',
        'Berscheid & Walster (1974) - Physical Attractiveness',
      ],
      findings: 'Sympathie erhöht Persuasion signifikant. Ähnlichkeit, Komplimente und wiederholter Kontakt steigern Sympathie.',
      uncertainty: {
        confidence: 0.87,
        sampleSize: '90+ Studien, N>14,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['social_proof', 'reciprocity', 'authority'],
    warningNeurons: [
      'Übermäßige Schmeicheleien',
      'Betonung von Gemeinsamkeiten',
      'Künstlich erzeugte Vertrautheit',
      'Attraktivität als Hauptargument',
    ],
    taxonomyGroups: ['social_influence', 'relationship_building'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Handshake_%28102893%29_-_The_Noun_Project.svg/480px-Handshake_%28102893%29_-_The_Noun_Project.svg.png',
      alt: 'Handschlag - Symbol für Sympathie und Verbindung',
      credit: 'The Noun Project / Wikimedia Commons (CC0)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Handshake_(102893)_-_The_Noun_Project.svg',
      context: 'Menschen sagen eher ja zu Personen, die sie mögen - Cialdini (1984)',
    },
  };
