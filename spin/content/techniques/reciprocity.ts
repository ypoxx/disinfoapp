import type { Technique } from '../types';

export const reciprocity: Technique =   {
    id: 'reciprocity',
    name: {
      de: 'Reziprozität',
      en: 'Reciprocity',
      hu: 'Reciprocitás',
      pl: 'Wzajemność',
      sk: 'Reciprocita',
      hr: 'Reciprocitet',
      el: 'Αμοιβαιότητα',
      mk: 'Реципроцитет',
      cnr: 'Reciprocitet',
    },
    description: {
      de: 'Menschen fühlen sich verpflichtet, Gefälligkeiten zu erwidern. Wenn jemand uns etwas gibt, möchten wir etwas zurückgeben, selbst wenn wir das Geschenk nicht wollten.',
      en: 'People feel obligated to return favors. When someone gives us something, we want to give something back, even if we didn\'t want the gift.',
      hu: 'Az emberek kötelességüknek érzik, hogy viszonozzák a szívességeket. Amikor valaki ad nekünk valamit, viszonozni akarjuk, még akkor is, ha nem akartuk az ajándékot.',
      pl: 'Ludzie czują się zobowiązani do odwzajemniania przysług. Gdy ktoś daje nam coś, chcemy oddać, nawet jeśli nie chcieliśmy prezentu.',
      sk: 'Ľudia cítia povinnosť opätovať láskavosti. Keď nám niekto niečo dá, chceme niečo dať späť, aj keď sme dar nechceli.',
      hr: 'Ljudi se osjećaju obveznima uzvratiti usluge. Kada nam netko nešto da, želimo uzvratiti, čak i ako nismo željeli dar.',
      el: 'Οι άνθρωποι αισθάνονται υποχρεωμένοι να ανταποδώσουν χάρες. Όταν κάποιος μας δίνει κάτι, θέλουμε να δώσουμε κάτι πίσω, ακόμα κι αν δεν θέλαμε το δώρο.',
      mk: 'Луѓето се чувствуваат обврзани да возвратат услуги. Кога некој ни дава нешто, сакаме да возвратиме, дури и ако не сакавме подарок.',
      cnr: 'Ljudi se osjećaju obaveznim da uzvrate usluge. Kada nam neko nešto da, želimo uzvratiti, čak i ako nismo željeli poklon.',
    },
    category: 'social_dynamics',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Kostenlose Proben im Supermarkt',
      'Gratis E-Books vor kostenpflichtigem Angebot',
      'Personalisierte Geschenke von Lobbyisten',
      '"Geben Sie, was Sie für richtig halten" Modelle',
    ],
    evidence: {
      studies: [
        'Cialdini et al. (1975) - Reciprocity Concession',
        'Regan (1971) - Effects of Favor and Liking',
        'Gouldner (1960) - Norm of Reciprocity',
      ],
      findings: 'Reziprozität ist kulturübergreifend robust. Selbst unerwünschte Gefälligkeiten erzeugen Verpflichtungsgefühl.',
      uncertainty: {
        confidence: 0.90,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['social_proof', 'liking', 'consistency'],
    warningNeurons: [
      'Unerwartete Geschenke oder Gefälligkeiten',
      '"Kostenlos" Angebote mit späteren Verpflichtungen',
      'Personalisierte Zuwendungen',
      'Door-in-the-face Technik (große Bitte gefolgt von kleinerer)',
    ],
    taxonomyGroups: ['social_influence', 'obligation_creation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Gift_box_icon.svg/480px-Gift_box_icon.svg.png',
      alt: 'Geschenkbox - Symbol der Reziprozität',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gift_box_icon.svg',
      context: 'Reziprozität: Geschenke erzeugen Verpflichtungsgefühl - Cialdini et al. (1975)',
    },
  };
