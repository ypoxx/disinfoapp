import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: subscription_trap_obstruction).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const subscriptionTrapObstruction: Technique = {
  id: 'subscription_trap_obstruction',
  name: {
    de: 'Subscription Trap / Obstruction (Roach Motel)',
    en: 'Subscription Trap / Obstruction (Roach Motel)',
  },
  description: {
    de: 'Einfacher Einstieg, künstlich erschwerter Ausstieg (z.B. Kündigung).',
    en: 'Easy sign-up, artificially obstructed exit (e.g. cancellation).',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'high',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Luguri et al. (2021) - Shining a Light on Dark Patterns'
    ],
    findings: 'Obstruktion/erschwerter Ausstieg ist ein etabliertes Dark Pattern; experimentell erhöhen aggressive Dark Patterns die Annahme unerwünschter Optionen deutlich.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['sludge', 'sneaking'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
