import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: behavioral_mimicry).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const behavioralMimicry: Technique = {
  id: 'behavioral_mimicry',
  name: {
    de: 'Behaviorale Mimikry (Chamäleon-Effekt)',
    en: 'Behavioral Mimicry (Chameleon Effect)',
  },
  description: {
    de: 'Das meist nichtbewusste Spiegeln von Haltung, Gestik, Mimik und Sprechweise des Gegenübers, das Sympathie und Kooperationsbereitschaft erhöhen kann (Chamäleon-Effekt). Die berichteten Effekte gelten als klein und replikationsunsicher.',
    en: 'The largely nonconscious mirroring of a counterpart\'s posture, gestures, expression, and speech patterns, which can raise rapport and willingness to cooperate (the chameleon effect). The reported effects are considered small and hard to replicate.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate',
  effectiveness: 'low',
  examples: [
    'Preisverhandlung im Jahrestermin: Über das Gespräch hinweg übernimmt die Vertriebsleiterin einer Agentur unbewusst die zurückgelehnte Haltung, das langsame Sprechtempo und einzelne Wortwendungen des Einkaufsleiters; die Stimmung wird hörbar entspannter — ohne Kompliment, ohne Ähnlichkeitsbehauptung und ohne Lenkungsschritt zum Abschluss.',
    'Hintergrundgespräch zur Quartalsbilanz: Der Pressesprecher gleicht Körperhaltung, Gestik und Satzrhythmus des Fachjournalisten fortlaufend an, sodass das Gespräch vertraulicher wirkt; er spiegelt nur den Ausdruck, ohne den Journalisten zu einer bestimmten Deutung hinzuführen.',
    'Bewerbungsgespräch per Videocall: Die Recruiterin passt Kopfneigung, Sprechtempo und Lieblingsformulierungen der Kandidatin über den Call hinweg an; die Kandidatin taut sichtbar auf, obwohl kein Sympathie-Kompliment und keine Gefälligkeit gesetzt werden.',
  ],
  evidence: {
    studies: [
      'Chartrand & Bargh (1999) - The Chameleon Effect: The Perception-Behavior Link and Social Interaction',
      'van Baaren et al. (2004) - Mimicry and Prosocial Behavior',
    ],
    findings: 'Chartrand & Bargh (1999) beschrieben den Chamäleon-Effekt: Menschen ahmen Haltung und Gestik ihres Gegenübers oft unbewusst nach, was Sympathie fördern kann; van Baaren et al. (2004) berichteten im Anschluss von mehr Hilfsbereitschaft nach vorheriger Nachahmung. Die Befunde stammen aus der Social-Priming-Literatur, deren Effekte in präregistrierten Replikationen geschrumpft oder uneinheitlich ausfielen. Größe des Effekts und Übertragbarkeit auf gezielte Beeinflussung gelten als unsicher (schwache, umstrittene Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Laborstudien; Replikationen uneinheitlich',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['liking', 'pacing_and_leading'],
  warningNeurons: [
    'Haltung, Gestik oder Sprechtempo deines Gegenübers werden über das Gespräch hinweg auffällig deckungsgleich mit deinen',
    'Die wachsende Vertrautheit speist sich aus Gleichklang im Auftreten, nicht aus Argumenten oder gemeinsamen Inhalten',
    'Die Spiegelung setzt verzögert ein — kurz nachdem du eine Geste oder Formulierung verwendet hast, taucht sie beim Gegenüber wieder auf',
    'Das Nachahmen wirkt mechanisch und aufgesetzt, sobald du bewusst darauf achtest',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
