import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: salami_tactics_gradualism).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const salamiTacticsGradualism: Technique = {
  id: 'salami_tactics_gradualism',
  name: {
    de: 'Salamitaktik / Gradualismus',
    en: 'Salami Tactics (Gradualism)',
  },
  description: {
    de: 'Eine große, für sich strittige Veränderung in vielen kleinen Einzelschritten durchsetzen, von denen jeder harmlos und akzeptabel wirkt — erst ihre Summe ergibt die eigentliche Verschiebung, die offen als Ganzes gefordert auf Widerstand gestoßen wäre.',
    en: 'Pushing through a large, contested change as a run of small increments, each of which looks harmless and acceptable on its own — only their cumulative total produces the real shift, which would have met resistance if demanded outright.',
  },
  category: 'cognitive_bias',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Interne Freigabekette für Sponsoring-Ausgaben: Der Bereichsleiter beantragt über acht Monate hinweg jeweils Einzelbeträge knapp unter der 5.000-Euro-Grenze, ab der der Vorstand mitzeichnen müsste — jede Freigabe ist für sich unauffällig, in Summe hat er ein Sponsoring-Budget aufgebaut, das als Ganzes nie zur Entscheidung stand.',
    'Redaktionelle Freigabe der Kundenmagazin-Texte durch die Rechtsabteilung: Die Agentur reicht Ausgabe für Ausgabe Formulierungen ein, die die Produktwirkung jeweils nur eine Nuance stärker darstellen als zuletzt — keine einzelne Änderung überschreitet erkennbar die Compliance-Grenze, nach einem Jahr steht dort eine Wirkaussage, die als direkter Vorschlag nie durch die Prüfung gekommen wäre.',
    'Monatliche Team-Rundmails der Standortleiterin zur Büropräsenz: Sie verschiebt die erwartete Anwesenheit in jeder Mail um einen halben Tag nach oben und begründet jeden Schritt mit dem zuletzt erreichten Stand — jede Mail wirkt wie eine kleine organisatorische Feinjustierung, in der Jahressumme ist aus „zwei Bürotagen" faktisch Vollpräsenz geworden, ohne dass die Regel je offiziell neu beschlossen wurde.',
  ],
  evidence: {
    studies: [
      'Freedman & Fraser (1966) - Compliance without pressure: The foot-in-the-door technique'
    ],
    findings: 'Die klassische Foot-in-the-Door-Studie (Freedman & Fraser 1966) zeigt, dass eine kleine anfängliche Zusage spätere größere Zustimmung begünstigen kann — der Mechanismus, auf den sich die Salamitaktik beruft. Für die schrittweise gesellschaftliche oder organisationale Gradualisierung selbst liegt jedoch keine eigenständige, quantifizierte Wirkungsforschung vor; die Übertragung ist eine Analogie, kein direkter Beleg. Die Konfidenz ist entsprechend niedrig und stark kontextabhängig.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Eine FITD-Primärstudie (analoge Übertragung)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['slippery_slope', 'consistency', 'door_in_the_face'],
  warningNeurons: [
    'Eine Reihe kleiner Einzelschritte in dieselbe Richtung, jeder knapp unterhalb der Schwelle, an der Widerspruch oder eine formale Freigabe entstünde',
    'Jeder Schritt wird mit dem zuletzt erreichten Stand als „schon üblich" begründet — der neue Normalzustand wird zum Maßstab für den nächsten',
    'Das Gesamtziel steht nie zur Entscheidung; erst die Summe über Monate ergibt die eigentlich strittige Verschiebung',
    'Wer den kumulierten Endpunkt anspricht, wird auf den „doch harmlosen" aktuellen Einzelschritt zurückverwiesen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
