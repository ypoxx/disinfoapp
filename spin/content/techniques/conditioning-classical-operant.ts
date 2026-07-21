import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: conditioning_classical_operant).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const conditioningClassicalOperant: Technique = {
  id: 'conditioning_classical_operant',
  name: {
    de: 'Konditionierung (klassisch/operant)',
    en: 'Conditioning (Classical/Operant)',
  },
  description: {
    de: 'Formung von Reaktionen, Gefühlen und Gewohnheiten durch wiederholte Kopplung — eines neutralen Reizes mit einer emotionalen Bedeutung (klassisch) oder eines Verhaltens mit Belohnung bzw. deren Ausbleiben (operant) —, bis der Reiz allein die Reaktion auslöst.',
    en: 'Shaping responses, feelings, and habits through repeated pairing — of a neutral cue with an emotional meaning (classical) or of a behaviour with reward or its absence (operant) — until the cue alone triggers the response.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Markenrelaunch eines Getränkeherstellers, Briefing der Kreativagentur durch die Marketingleiterin: Über alle Kontaktpunkte hinweg — Spot, Plakat, Regaldisplay — wird das Produkt monatelang konsequent mit denselben warmen Sommer- und Freundschaftsbildern und einem festen Fünf-Ton-Signet gekoppelt, ohne ein einziges Produktargument, bis allein der Jingle im Supermarkt das gute Gefühl abruft.',
    'Community-Management eines SaaS-Anbieters, Steuerung durch die Social-Media-Managerin: Wer im Nutzerforum eine Erfolgsgeschichte postet, wird jedes Mal binnen Minuten mit sichtbarem Lob, Badge und Marken-Repost belohnt, kritische Threads bleiben bewusst unkommentiert — über Wochen verschiebt sich der Grundton des Forums Richtung Lobmeldungen.',
    'Kundenbindungsprogramm einer Café-Kette, Rollout durch den Loyalty-Manager: Jeder Kauf über die App wird sofort und immer gleich mit einem Stempel quittiert, jeder zehnte fest mit einem Gratisgetränk — der berechenbare Takt macht den Gang zum eigenen Laden statt zum Wettbewerber über Monate zur eingeübten Gewohnheit.',
  ],
  evidence: {
    studies: [
      'Pavlov (1927) - Conditioned Reflexes',
      'Skinner (1953) - Science and Human Behavior',
    ],
    findings: 'Klassische (Pavlov, 1927) und operante (Skinner, 1953) Konditionierung sind gut belegte Grundmechanismen des Lernens: Wiederholte Kopplung von Reizen bzw. von Verhalten und Konsequenz formt Reaktionen und Gewohnheiten. Evaluative Konditionierung — Marke plus wiederholter positiver Reiz — ist auch in Marketing und Plattformdesign empirisch fassbar, allerdings meist mit kleinen Effekten und stark kontextabhängig. Die Übertragung dieser Grundlagen- und Laborbefunde auf gezielte, großflächige Meinungslenkung ist dagegen locker und nicht direkt belegt (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Grundlagenforschung (Pavlov/Skinner) plus Studien zu evaluativer Konditionierung',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['gamification_variable_reward', 'priming', 'repetition'],
  warningNeurons: [
    'Ein zunächst neutrales Zeichen — Jingle, Farbe, Duft, Logo — wird über viele Kontakte hinweg stur mit demselben guten Gefühl gekoppelt, ohne Sachargument.',
    'Eine erwünschte Reaktion wird jedes Mal prompt belohnt, eine unerwünschte konsequent ignoriert — der Ton verschiebt sich langsam über die Zeit.',
    'Der Reiz allein löst schon die Reaktion aus, bevor überhaupt ein Inhalt da ist (der Signalton macht Vorfreude, das Logo erzeugt Vertrauen).',
    'Die Wirkung entsteht durch Wiederholung und Timing der Kopplung, nicht durch ein Argument — Häufigkeit und Sofortigkeit sind auffällig getaktet.',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
