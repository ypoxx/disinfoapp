import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: proxy_attack).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const proxyAttack: Technique = {
  id: 'proxy_attack',
  name: {
    de: 'Proxy Attack (Angriff durch Stellvertreter)',
    en: 'Proxy Attack (Angriff durch Stellvertreter)',
  },
  description: {
    de: 'Einen Dritten, Stellvertreter oder eine Scheininstanz den Angriff bzw. die belastende Handlung ausfuehren lassen, um eigene Verantwortung zu verschleiern.',
    en: 'Getting a third party, proxy or front to carry out an attack so the instigator stays hidden and deniable.',
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
      'Senger (1991) - The Book of Stratagems: Tactics for Triumph and Survival'
    ],
    findings: 'Akteure koennen Angriffe oder belastende Handlungen ueber Dritte, Stellvertreter oder Scheininstanzen ausfuehren lassen, um eigene Verantwortung zu verschleiern (plausible deniability) und unangreifbar zu bleiben.',
    uncertainty: {
      confidence: 0.2,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['astroturfing_sockpuppets', 'coordinated_inauthentic_amplification', 'networked_harassment'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
  seriousMode: true,
};
