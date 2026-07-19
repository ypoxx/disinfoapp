import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: networked_harassment).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const networkedHarassment: Technique = {
  id: 'networked_harassment',
  name: {
    de: 'Koordinierte Online-Belaestigung',
    en: 'Koordinierte Online-Belaestigung',
  },
  description: {
    de: 'Koordiniertes, moralisch motiviertes Schwarmverhalten zur Einschuechterung/Zum-Schweigen-Bringen.',
    en: 'Coordinated, morally motivated swarm harassment to intimidate/silence.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Marwick (2021) - Morally Motivated Networked Harassment as Normative Reinforcement'
    ],
    findings: 'Moralisch motivierte vernetzte Belaestigung dient als normative Verstaerkung innerhalb einer Gruppe und kann Ziele zum Rueckzug zwingen (konzeptuelles Modell).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['scapegoating_othering', 'proxy_attack'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
