import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) — Taxonomie 21.0.1, Knoten: decoy_effect.
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const decoyEffect: Technique = {
  id: 'decoy_effect',
  name: {
    de: 'Köder-Effekt (Decoy)',
    en: 'Decoy Effect (Asymmetric Dominance)',
  },
  description: {
    de: 'Eine gezielt unterlegene Zusatzoption — der Köder — lässt eine Zieloption im direkten Vergleich klar überlegen erscheinen und verschiebt die Wahl zu ihr, ohne dass sich an der Zieloption selbst etwas ändert.',
    en: 'A deliberately inferior extra option added to the set — the decoy — makes a target option look like the obvious winner by comparison, steering choice toward it without changing the target itself.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Agentur-Pitch vor dem Marketingleiter eines Mittelständlers: Die Agentur präsentiert drei Betreuungspakete — "Basis" (4.000 € monatlich, nur Pressearbeit), "Premium" (7.500 €, Pressearbeit, Social Media und Reporting) und als Köder "Plus" (7.200 €, Pressearbeit und Social Media, aber ohne Reporting). Neben dem klar unterlegenen Plus-Paket wirkt Premium wie die einzig vernünftige Wahl.',
    'Verhandlung zwischen der Kommunikationschefin eines Herstellers und dem Anzeigenleiter eines Fachverlags über eine Kongress-Partnerschaft: Zur Wahl stehen ein Online-Paket (3.000 €), ein Print-Advertorial (5.500 €) und das Kombipaket Print plus Online (5.800 €). Das Advertorial dient als Köder — neben ihm erscheint das Kombipaket für 300 € Aufpreis als Selbstläufer.',
    'Interne Entscheidungsvorlage des Leiters Unternehmenskommunikation an den Vorstand zum Website-Relaunch: Neben dem Zielszenario "Modernisierung" (180.000 €) stehen eine Minimalvariante (90.000 €) und ein Köder-Szenario für 195.000 €, das weniger Funktionen bietet als "Modernisierung". Gegen die dominierte dritte Option wirkt das Zielszenario wie die offensichtlich beste Entscheidung.',
  ],
  evidence: {
    studies: [
      'Huber et al. (1982) - Adding Asymmetrically Dominated Alternatives: Violations of Regularity and the Similarity Hypothesis',
      'Padamwar et al. (2024) - An integrative review of the decoy effect on choice behavior'
    ],
    findings: 'Der Grundeffekt — eine asymmetrisch dominierte Köderoption erhöht die Wahlwahrscheinlichkeit der dominierenden Zieloption — ist seit Huber et al. (1982) vielfach im Labor repliziert. Die Effektstärke variiert jedoch deutlich mit Attributanzahl, Realismus der Optionen und Stabilität der Präferenzen; in realitätsnahen Entscheidungssituationen fällt der Effekt oft schwächer aus als im Labor. Die Evidenzbasis stammt zudem überwiegend aus WEIRD-Stichproben, die Übertragbarkeit gilt daher als moderat gesichert.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['anchoring', 'nudging'],
  warningNeurons: [
    'Eine Option im Angebot, die niemand vernünftigerweise wählen würde — kaum günstiger, aber klar schlechter als eine andere',
    'Dreier-Sets, in denen genau eine Option eine andere in allen relevanten Punkten schlägt — oder in allen außer einem minimalen Preisvorteil',
    'Minimaler Preisabstand bei großem Leistungsunterschied ("nur 300 € mehr für das Komplettpaket")',
    'Die "klar beste Wahl" gibt es erst, seit eine dritte Option in den Vergleich gerückt ist',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
