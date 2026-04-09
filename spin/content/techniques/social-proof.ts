import type { Technique } from '../types';

export const socialProof: Technique =   {
    id: 'social_proof',
    name: {
      de: 'Soziale Bewährtheit',
      en: 'Social Proof',
      hu: 'Társadalmi bizonyíték',
      pl: 'Społeczny dowód słuszności',
      sk: 'Sociálny dôkaz',
      hr: 'Društveni dokaz',
      el: 'Κοινωνική απόδειξη',
      mk: 'Социјален доказ',
      cnr: 'Društveni dokaz',
    },
    description: {
      de: 'Menschen orientieren sich am Verhalten anderer, besonders in unsicheren Situationen. Wenn viele etwas tun, erscheint es richtig und sicher.',
      en: 'People orient themselves based on the behavior of others, especially in uncertain situations. When many do something, it appears correct and safe.',
      hu: 'Az emberek mások viselkedése alapján tájékozódnak, különösen bizonytalan helyzetekben. Ha sokan csinálnak valamit, az helyesnek és biztonságosnak tűnik.',
      pl: 'Ludzie orientują się na podstawie zachowań innych, szczególnie w niepewnych sytuacjach. Gdy wielu coś robi, wydaje się to słuszne i bezpieczne.',
      sk: 'Ľudia sa orientujú podľa správania iných, najmä v neistých situáciách. Keď niečo robí veľa ľudí, zdá sa to správne a bezpečné.',
      hr: 'Ljudi se orijentiraju prema ponašanju drugih, posebno u nesigurnim situacijama. Kada mnogi nešto rade, čini se ispravnim i sigurnim.',
      el: 'Οι άνθρωποι προσανατολίζονται με βάση τη συμπεριφορά των άλλων, ειδικά σε αβέβαιες καταστάσεις. Όταν πολλοί κάνουν κάτι, φαίνεται σωστό και ασφαλές.',
      mk: 'Луѓето се ориентираат според однесувањето на другите, особено во неизвесни ситуации. Кога многумина прават нешто, тоа изгледа правилно и безбедно.',
      cnr: 'Ljudi se orijentišu prema ponašanju drugih, posebno u nesigurnim situacijama. Kada mnogi nešto rade, čini se ispravnim i sigurnim.',
    },
    category: 'social_dynamics',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      '"Bestseller" oder "Meistverkauft" Labels',
      'Testimonials und Kundenbewertungen',
      '"9 von 10 Experten empfehlen..." Aussagen',
      'Lange Warteschlangen vor Restaurants',
    ],
    evidence: {
      studies: [
        'Cialdini (1984) - Influence: Science and Practice',
        'Asch (1951) - Conformity Experiments',
        'Sherif (1936) - Group Norms Formation',
      ],
      findings: 'Social Proof ist extrem wirksam, besonders bei Ambiguität und wenn die Referenzgruppe ähnlich zur eigenen ist.',
      uncertainty: {
        confidence: 0.93,
        sampleSize: '150+ Studien, N>20,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['authority', 'liking', 'consistency'],
    warningNeurons: [
      'Behauptungen über "die meisten Menschen"',
      'Testimonials ohne Überprüfbarkeit',
      'Künstlich erzeugte Popularität (z.B. gekaufte Bewertungen)',
      'Betonung von Gruppenzugehörigkeit',
    ],
    taxonomyGroups: ['social_influence', 'conformity'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Asch_experiment.svg',
      alt: 'Asch Konformitätsexperiment - Linienvergleich',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Asch_experiment.svg',
      context: 'Asch (1951) zeigte: 75% der Teilnehmer gaben mindestens einmal eine falsche Antwort, um der Gruppe zu entsprechen',
    },
  };
