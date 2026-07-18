import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: guilt_by_association).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const guiltByAssociation: Technique = {
  id: 'guilt_by_association',
  name: {
    de: 'Kontaktschuld (Guilt by Association)',
    en: 'Kontaktschuld (Guilt by Association)',
  },
  description: {
    de: 'Diskreditierung durch blosse Verbindung zu einer abgelehnten Person/Gruppe.',
    en: 'Discrediting via mere association with a rejected person/group.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Kontaktschuld (Guilt by Association) ist als Argumentationsfehler/Propagandamuster taxonomisch belegt (SEP); eine quantifizierte Wirkung ist nicht generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['ad_hominem'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
