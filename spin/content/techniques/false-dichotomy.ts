import type { Technique } from '../types';

export const falseDichotomy: Technique =   {
    id: 'false_dichotomy',
    name: {
      de: 'Falsches Dilemma',
      en: 'False Dichotomy',
      hu: 'Hamis dilemma',
      pl: 'Fałszywy dylemat',
      sk: 'Falošná dilema',
      hr: 'Lažna dilema',
      el: 'Ψευδές δίλημμα',
      mk: 'Лажна дилема',
      cnr: 'Lažna dilema',
    },
    description: {
      de: 'Präsentation von nur zwei Optionen, obwohl weitere Alternativen existieren. Dies vereinfacht komplexe Situationen unrealistisch und erzwingt eine Wahl.',
      en: 'Presentation of only two options when more alternatives exist. This unrealistically simplifies complex situations and forces a choice.',
      hu: 'Csak két lehetőség bemutatása, amikor több alternatíva is létezik. Ez irreálisan leegyszerűsíti a komplex helyzeteket és választásra kényszerít.',
      pl: 'Prezentacja tylko dwóch opcji, gdy istnieje więcej alternatyw. Nierealistycznie upraszcza to złożone sytuacje i wymusza wybór.',
      sk: 'Prezentácia len dvoch možností, keď existuje viac alternatív. To nerealisticky zjednodušuje zložité situácie a núti k výberu.',
      hr: 'Prezentacija samo dvije opcije kada postoji više alternativa. To nerealistično pojednostavljuje složene situacije i prisiljava na izbor.',
      el: 'Παρουσίαση μόνο δύο επιλογών ενώ υπάρχουν περισσότερες εναλλακτικές. Αυτό απλοποιεί μη ρεαλιστικά πολύπλοκες καταστάσεις και εξαναγκάζει σε επιλογή.',
      mk: 'Презентација на само две опции кога постојат повеќе алтернативи. Ова нереално ги поедноставува сложените ситуации и присилува на избор.',
      cnr: 'Prezentacija samo dvije opcije kada postoji više alternativa. To nerealistično pojednostavljuje složene situacije i prisiljava na izbor.',
    },
    category: 'logical_fallacy',
    difficulty: 'beginner',
    effectiveness: 'moderate',
    examples: [
      '"Entweder bist du für uns oder gegen uns"',
      '"Willst du sicher oder frei sein?"',
      '"Du musst dich entscheiden: Karriere oder Familie"',
      '"Entweder Wirtschaftswachstum oder Klimaschutz"',
    ],
    evidence: {
      studies: [
        'Johnson-Laird & Byrne (1991) - Deduction',
        'Evans (2002) - Logic and Human Reasoning',
        'Hurley (2015) - Logic Textbook Analysis',
      ],
      findings: 'Falsche Dichotomien reduzieren kognitive Belastung und führen zu schnelleren, aber oft suboptimalen Entscheidungen.',
      uncertainty: {
        confidence: 0.76,
        sampleSize: '35+ Studien, N>5,500',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'emotional_appeal', 'straw_man'],
    warningNeurons: [
      '"Entweder... oder..." Formulierungen',
      'Ausschluss von Mittelwegen',
      'Vereinfachung komplexer Entscheidungen',
      'Polarisierende Sprache',
    ],
    taxonomyGroups: ['logical_fallacies', 'oversimplification'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Yin_yang.svg/480px-Yin_yang.svg.png',
      alt: 'Yin und Yang - Symbolisierung falscher Dichotomie',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yin_yang.svg',
      context: 'Falsches Dilemma: Nur zwei Optionen anbieten, obwohl Alternativen existieren',
    },
  };
