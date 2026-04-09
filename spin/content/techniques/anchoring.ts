import type { Technique } from '../types';

export const anchoring: Technique =   {
    id: 'anchoring',
    name: {
      de: 'Ankereffekt',
      en: 'Anchoring',
      hu: 'Horgonyzás',
      pl: 'Zakotwiczenie',
      sk: 'Kotvenie',
      hr: 'Sidrenje',
      el: 'Αγκύρωση',
      mk: 'Сидрење',
      cnr: 'Sidrenje',
    },
    description: {
      de: 'Die erste Information, die wir erhalten (der "Anker"), beeinflusst stark unsere nachfolgenden Urteile und Einschätzungen, selbst wenn diese Information irrelevant ist.',
      en: 'The first information we receive (the "anchor") strongly influences our subsequent judgments and assessments, even if this information is irrelevant.',
      hu: 'Az első információ, amit kapunk (a "horgony"), erősen befolyásolja későbbi ítéleteinket és becsléseinket, még akkor is, ha ez az információ irreleváns.',
      pl: 'Pierwsza informacja, którą otrzymujemy ("kotwica"), silnie wpływa na nasze późniejsze osądy i oceny, nawet jeśli ta informacja jest nieistotna.',
      sk: 'Prvá informácia, ktorú dostaneme ("kotva"), silne ovplyvňuje naše následné úsudky a hodnotenia, aj keď je táto informácia irelevantná.',
      hr: 'Prva informacija koju primimo ("sidro") snažno utječe na naše naknadne prosudbe i procjene, čak i kada je ta informacija irelevantna.',
      el: 'Η πρώτη πληροφορία που λαμβάνουμε (η "άγκυρα") επηρεάζει ισχυρά τις μεταγενέστερες κρίσεις και εκτιμήσεις μας, ακόμα κι αν αυτή η πληροφορία είναι άσχετη.',
      mk: 'Првата информација што ја примаме ("сидрото") силно влијае на нашите последователни судења и проценки, дури и кога таа информација е ирелевантна.',
      cnr: 'Prva informacija koju primimo ("sidro") snažno utiče na naše naknadne prosudbe i procjene, čak i kada je ta informacija irelevantna.',
    },
    category: 'cognitive_bias',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      'Ein hoher ursprünglicher Preis macht einen reduzierten Preis attraktiver',
      'Gehaltsverhandlungen: Die erste genannte Zahl beeinflusst das Ergebnis',
      'Umfragen: Die erste Antwortoption wird überproportional gewählt',
    ],
    evidence: {
      studies: [
        'Tversky & Kahneman (1974) - Judgment under Uncertainty',
        'Ariely et al. (2003) - Coherent Arbitrariness',
        'Furnham & Boo (2011) - Anchoring Meta-Analysis',
      ],
      findings: 'Anchoring ist einer der robustesten kognitiven Biases. Effekte zeigen sich selbst bei Experten und bleiben auch bei expliziter Warnung bestehen.',
      uncertainty: {
        confidence: 0.92,
        sampleSize: '200+ Studien, N>25,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['framing', 'priming', 'scarcity'],
    warningNeurons: [
      'Betonung von Referenzpunkten oder Vergleichswerten',
      'Extreme Ausgangswerte als Kontrast',
      'Erste genannte Zahl in Verhandlungen',
      '"Normalpreis" vs. "Aktionspreis" Vergleiche',
    ],
    taxonomyGroups: ['cognitive_biases', 'decision_making'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Anchoring_and_adjustment_heuristic_bias.svg/640px-Anchoring_and_adjustment_heuristic_bias.svg.png',
      alt: 'Anchoring und Adjustment Heuristik - Diagramm',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anchoring_and_adjustment_heuristic_bias.svg',
      context: 'Tversky & Kahneman (1974) zeigten, dass Anfangswerte nachfolgende Urteile verzerren',
    },
  };
