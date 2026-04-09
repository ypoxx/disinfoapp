import type { Technique } from '../types';

export const illusoryTruthEffect: Technique =   {
    id: 'illusory_truth_effect',
    name: {
      de: 'Wahrheitsillusion',
      en: 'Illusory Truth Effect',
      hu: 'Igazságillúzió-hatás',
      pl: 'Efekt iluzji prawdy',
      sk: 'Efekt ilúzie pravdy',
      hr: 'Efekt iluzorne istine',
      el: 'Φαινόμενο απατηλής αλήθειας',
      mk: 'Ефект на илузорна вистина',
      cnr: 'Efekat iluzorne istine',
    },
    description: {
      de: 'Wiederholte Aussagen werden als wahrer wahrgenommen, auch wenn sie falsch sind. Vertrautheit wird mit Wahrheit verwechselt.',
      en: 'Repeated statements are perceived as more true, even if they are false. Familiarity is confused with truth.',
      hu: 'Az ismételt állításokat igazabbnak érzékeljük, még ha hamisak is. Az ismerősséget összekeverik az igazsággal.',
      pl: 'Powtarzane stwierdzenia są postrzegane jako bardziej prawdziwe, nawet jeśli są fałszywe. Znajomość jest mylona z prawdą.',
      sk: 'Opakované výroky sú vnímané ako pravdivejšie, aj keď sú nepravdivé. Známosť sa zamieňa s pravdou.',
      hr: 'Ponovljene tvrdnje se percipiraju kao istinitije, čak i ako su lažne. Poznatost se miješa s istinom.',
      el: 'Οι επαναλαμβανόμενες δηλώσεις γίνονται αντιληπτές ως πιο αληθινές, ακόμα κι αν είναι ψευδείς. Η οικειότητα συγχέεται με την αλήθεια.',
      mk: 'Повторените изјави се перципираат како поверодостојни, дури и ако се лажни. Познатоста се меша со вистината.',
      cnr: 'Ponovljene tvrdnje se percipiraju kao istinitije, čak i ako su lažne. Poznatost se miješa sa istinom.',
    },
    category: 'cognitive_bias',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Mythen, die durch Wiederholung "wahr" werden',
      'Fake News, die durch virale Verbreitung Glaubwürdigkeit gewinnen',
      'Urban Legends, die durch Erzählung verstärkt werden',
      'Marketing-Claims, die durch Wiederholung akzeptiert werden',
    ],
    evidence: {
      studies: [
        'Begg et al. (1992) - Repetition and Truth',
        'Fazio et al. (2015) - Knowledge Does Not Protect',
        'Pennycook et al. (2018) - Prior Exposure Study',
      ],
      findings: 'Der Effekt ist robust und funktioniert auch bei offensichtlich falschen Aussagen. Selbst Experten sind nicht immun.',
      uncertainty: {
        confidence: 0.88,
        sampleSize: '70+ Studien, N>11,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['repetition', 'priming', 'social_proof'],
    warningNeurons: [
      'Häufig wiederholte Behauptungen ohne Beweis',
      'Virale Verbreitung in sozialen Medien',
      'Gefühl von Vertrautheit ohne Quellenkenntnis',
      'Akzeptanz aufgrund von Bekanntheit',
    ],
    taxonomyGroups: ['cognitive_biases', 'information_repetition'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cognitive_bias_codex_en.svg/640px-Cognitive_bias_codex_en.svg.png',
      alt: 'Cognitive Bias Codex - Übersicht kognitiver Verzerrungen',
      credit: 'John Manoogian III / Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cognitive_bias_codex_en.svg',
      context: 'Die Wahrheitsillusion: Wiederholte Aussagen werden als wahrer wahrgenommen - Hasher et al. (1977)',
    },
  };
