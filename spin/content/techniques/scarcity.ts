import type { Technique } from '../types';

export const scarcity: Technique =   {
    id: 'scarcity',
    name: {
      de: 'Verknappung',
      en: 'Scarcity',
      hu: 'Szűkösség',
      pl: 'Niedobór',
      sk: 'Nedostatok',
      hr: 'Oskudica',
      el: 'Σπανιότητα',
      mk: 'Недостаток',
      cnr: 'Oskudica',
    },
    description: {
      de: 'Dinge erscheinen wertvoller und begehrenswerter, wenn sie knapp oder nur begrenzt verfügbar sind. Dies erzeugt Dringlichkeit und FOMO (Fear of Missing Out).',
      en: 'Things appear more valuable and desirable when they are scarce or only available in limited quantities. This creates urgency and FOMO (Fear of Missing Out).',
      hu: 'A dolgok értékesebbnek és kívánatosabbnak tűnnek, ha ritkák vagy csak korlátozott mennyiségben elérhetők. Ez sürgősséget és FOMO-t (lemaradástól való félelmet) kelt.',
      pl: 'Rzeczy wydają się cenniejsze i bardziej pożądane, gdy są rzadkie lub dostępne w ograniczonej ilości. Tworzy to poczucie pilności i FOMO (strach przed przegapieniem).',
      sk: 'Veci sa zdajú hodnotnejšie a žiadanejšie, keď sú vzácne alebo dostupné len v obmedzenom množstve. To vytvára naliehavosť a FOMO (strach zo zmeškania).',
      hr: 'Stvari se čine vrjednijima i poželjnijima kada su rijetke ili dostupne samo u ograničenim količinama. To stvara hitnost i FOMO (strah od propuštanja).',
      el: 'Τα πράγματα φαίνονται πιο πολύτιμα και επιθυμητά όταν είναι σπάνια ή διαθέσιμα σε περιορισμένες ποσότητες. Αυτό δημιουργεί επείγον και FOMO (φόβο να χάσεις κάτι).',
      mk: 'Работите изгледаат повредни и попожелни кога се ретки или достапни само во ограничени количини. Ова создава итност и FOMO (страв од пропуштање).',
      cnr: 'Stvari se čine vrijednijima i poželjnijima kada su rijetke ili dostupne samo u ograničenim količinama. To stvara hitnost i FOMO (strah od propuštanja).',
    },
    category: 'social_dynamics',
    difficulty: 'beginner',
    effectiveness: 'high',
    examples: [
      '"Nur noch 3 auf Lager!" Meldungen',
      '"Angebot gilt nur noch heute!" Zeitdruck',
      'Limitierte Editionen und exklusive Zugänge',
      '"Nur für die ersten 100 Käufer"',
    ],
    evidence: {
      studies: [
        'Cialdini (1975) - Scarcity Principle',
        'Worchel et al. (1975) - Cookie Jar Study',
        'Lynn (1991) - Scarcity Effects on Value',
      ],
      findings: 'Verknappung erhöht die wahrgenommene Attraktivität konsistent. Effekt ist stärker bei neu eingetretener Knappheit vs. dauerhafter Knappheit.',
      uncertainty: {
        confidence: 0.88,
        sampleSize: '80+ Studien, N>12,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['anchoring', 'social_proof', 'reciprocity'],
    warningNeurons: [
      'Künstliche Zeitlimits',
      '"Nur noch X verfügbar" ohne Verifikation',
      'Countdown-Timer bei Online-Angeboten',
      'Exklusivitätsversprechen ohne echte Limitation',
    ],
    taxonomyGroups: ['social_influence', 'urgency_creation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Robert_B_Cialdini_-_Influence_-_The_Psychology_of_Persuasion.JPG/480px-Robert_B_Cialdini_-_Influence_-_The_Psychology_of_Persuasion.JPG',
      alt: 'Robert Cialdini - Influence: The Psychology of Persuasion',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Robert_B_Cialdini_-_Influence_-_The_Psychology_of_Persuasion.JPG',
      context: 'Cialdini identifizierte Verknappung als eines der sechs Prinzipien der Überzeugung',
    },
  };
