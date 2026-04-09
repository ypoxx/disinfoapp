import type { Technique } from '../types';

export const strawMan: Technique =   {
    id: 'straw_man',
    name: {
      de: 'Strohmann-Argument',
      en: 'Straw Man',
      hu: 'Szalmabáb érvelés',
      pl: 'Chochoł',
      sk: 'Slamený panák',
      hr: 'Argument slame',
      el: 'Επιχείρημα σκιάχτρου',
      mk: 'Аргумент на сламено чучело',
      cnr: 'Argument slame',
    },
    description: {
      de: 'Das Argument des Gegners wird verzerrt oder vereinfacht dargestellt, um es leichter widerlegen zu können. Die tatsächliche Position wird nicht adressiert.',
      en: 'The opponent\'s argument is distorted or simplified to make it easier to refute. The actual position is not addressed.',
      hu: 'Az ellenfél érvét eltorzítják vagy leegyszerűsítik, hogy könnyebben cáfolható legyen. A tényleges álláspontot nem kezelik.',
      pl: 'Argument przeciwnika jest zniekształcany lub upraszczany, aby łatwiej go obalić. Rzeczywiste stanowisko nie jest adresowane.',
      sk: 'Argument oponenta je skreslený alebo zjednodušený, aby sa dal ľahšie vyvrátiť. Skutočná pozícia nie je riešená.',
      hr: 'Argument protivnika je iskrivljen ili pojednostavljen kako bi ga bilo lakše opovrgnuti. Stvarna pozicija se ne adresira.',
      el: 'Το επιχείρημα του αντιπάλου διαστρεβλώνεται ή απλοποιείται για να είναι ευκολότερο να ανασκευαστεί. Η πραγματική θέση δεν αντιμετωπίζεται.',
      mk: 'Аргументот на противникот е изобличен или поедноставен за да биде полесно да се побие. Вистинската позиција не се адресира.',
      cnr: 'Argument protivnika je iskrivljen ili pojednostavljen kako bi ga bilo lakše opovrgnuti. Stvarna pozicija se ne adresira.',
    },
    category: 'logical_fallacy',
    difficulty: 'intermediate',
    effectiveness: 'moderate',
    examples: [
      '"Die wollen alle Autos verbieten!" (statt: Emissionen reduzieren)',
      '"Feministen hassen alle Männer!" (Verzerrung)',
      '"Sozialisten wollen alles verstaatlichen!" (Vereinfachung)',
      'Extreme Interpretation moderater Positionen',
    ],
    evidence: {
      studies: [
        'Walton (1996) - Straw Man Fallacy',
        'Aikin & Casey (2011) - Straw Man Arguments',
        'Talisse & Aikin (2006) - Two Forms of Straw Man',
      ],
      findings: 'Strohmann-Argumente sind weit verbreitet und effektiv zur Mobilisierung, unterminieren aber konstruktiven Dialog.',
      uncertainty: {
        confidence: 0.74,
        sampleSize: '30+ Studien, N>4,500',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['ad_hominem', 'false_dichotomy', 'emotional_appeal'],
    warningNeurons: [
      'Übertriebene oder vereinfachte Darstellung gegnerischer Positionen',
      'Ignorierung von Nuancen',
      'Fokus auf extreme Randpositionen',
      '"Die wollen..." Generalisierungen',
    ],
    taxonomyGroups: ['logical_fallacies', 'argumentation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Straw_Man_Fallacy_Icon.svg/480px-Straw_Man_Fallacy_Icon.svg.png',
      alt: 'Strohmann-Argument - Icon',
      credit: 'Wikimedia Commons (CC-BY-SA 4.0)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Straw_Man_Fallacy_Icon.svg',
      context: 'Strohmann: Das Argument des Gegners wird verzerrt, um es leichter anzugreifen',
    },
  };
