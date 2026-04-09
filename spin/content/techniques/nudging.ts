import type { Technique } from '../types';

export const nudging: Technique =   {
    id: 'nudging',
    name: {
      de: 'Nudging',
      en: 'Nudging',
      hu: 'Nudging (lökdösés)',
      pl: 'Nudging (szturchanie)',
      sk: 'Nudging (postrčenie)',
      hr: 'Nudging (guranje)',
      el: 'Nudging (ώθηση)',
      mk: 'Nudging (туркање)',
      cnr: 'Nudging (guranje)',
    },
    description: {
      de: 'Subtile Veränderung der Entscheidungsarchitektur, um Verhalten in eine gewünschte Richtung zu lenken, ohne Wahlfreiheit einzuschränken.',
      en: 'Subtle modification of choice architecture to guide behavior in a desired direction without restricting freedom of choice.',
      hu: 'A döntési architektúra finom módosítása a viselkedés kívánt irányba terelésére a választási szabadság korlátozása nélkül.',
      pl: 'Subtelna modyfikacja architektury wyboru, aby kierować zachowanie w pożądanym kierunku bez ograniczania wolności wyboru.',
      sk: 'Jemná úprava architektúry výberu na usmernenie správania v požadovanom smere bez obmedzenia slobody výberu.',
      hr: 'Suptilna modifikacija arhitekture izbora za usmjeravanje ponašanja u željenom smjeru bez ograničavanja slobode izbora.',
      el: 'Λεπτή τροποποίηση της αρχιτεκτονικής επιλογής για να κατευθύνει τη συμπεριφορά προς μια επιθυμητή κατεύθυνση χωρίς να περιορίζει την ελευθερία επιλογής.',
      mk: 'Суптилна модификација на архитектурата на избор за насочување на однесувањето во посакуваната насока без ограничување на слободата на избор.',
      cnr: 'Suptilna modifikacija arhitekture izbora za usmjeravanje ponašanja u željenom smjeru bez ograničavanja slobode izbora.',
    },
    category: 'cognitive_bias',
    difficulty: 'advanced',
    effectiveness: 'moderate',
    examples: [
      'Gesunde Lebensmittel auf Augenhöhe in Kantinen',
      'Opt-out statt Opt-in bei Organspende',
      'Standard-Einstellungen bei Software',
      'Fußabdrücke zum Mülleimer',
    ],
    evidence: {
      studies: [
        'Thaler & Sunstein (2008) - Nudge Theory',
        'Benartzi & Thaler (2013) - Behavioral Economics',
        'Hansen & Jespersen (2013) - Nudge Typology',
      ],
      findings: 'Nudges können Verhalten effektiv beeinflussen. Ethische Bedenken bei mangelnder Transparenz.',
      uncertainty: {
        confidence: 0.84,
        sampleSize: '100+ Studien, N>50,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['framing', 'anchoring', 'dark_patterns'],
    warningNeurons: [
      'Default-Optionen, die vorteilhaft für Anbieter sind',
      'Subtile Umgebungsveränderungen',
      'Architektur der Wahlmöglichkeiten',
      'Intransparente Entscheidungshilfen',
    ],
    taxonomyGroups: ['cognitive_biases', 'choice_architecture'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Richard_H._Thaler_EM1B8851_%2824027005667%29.jpg/480px-Richard_H._Thaler_EM1B8851_%2824027005667%29.jpg',
      alt: 'Richard Thaler - Nobelpreisträger und Begründer der Nudge-Theorie',
      credit: 'Bengt Nyman / Wikimedia Commons (CC-BY)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Richard_H._Thaler_EM1B8851_(24027005667).jpg',
      context: 'Thaler & Sunstein (2008): Nudging verändert Entscheidungsarchitektur ohne Wahlfreiheit einzuschränken',
    },
  };
