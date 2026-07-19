import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: darvo).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const darvo: Technique = {
  id: 'darvo',
  name: {
    de: 'DARVO',
    en: 'DARVO',
  },
  description: {
    de: 'Täter-Reaktion: Leugnen, Angreifen, Täter-Opfer-Umkehr bei Konfrontation.',
    en: 'Perpetrator response: Deny, Attack, Reverse Victim and Offender when confronted.',
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
      'Harsey et al. (2020) - Deny, Attack, and Reverse Victim and Offender (DARVO): What Is the Influence on Perceived Perpetrator and Victim Credibility?',
      'Freyd (1997) - Violations of power, adaptive blindness, and betrayal trauma theory (DARVO)'
    ],
    findings: 'DARVO senkt experimentell die wahrgenommene Glaubwürdigkeit des Opfers und die zugeschriebene Täterverantwortung; Aufklärung über DARVO mildert den Effekt.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['gaslighting'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
