import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: trick_wording).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const trickWording: Technique = {
  id: 'trick_wording',
  name: {
    de: 'Trick Wording (Verwirrende Formulierung)',
    en: 'Trick Wording (Confusing Wording)',
  },
  description: {
    de: 'Eine Wahl wird sprachlich so verdreht formuliert — doppelte Verneinung, verschachteltes Opt-in/Opt-out, mehrdeutiger Zustimmungssatz —, dass Menschen die Option treffen, die sie eigentlich nicht wollten. Der Hebel ist die Formulierung des Entscheidungssatzes selbst, nicht sein Inhalt.',
    en: 'A choice is phrased in a deliberately tangled way — a double negative, a nested opt-in/opt-out, an ambiguous consent line — so that people pick the option they did not actually want. The lever is the wording of the decision itself, not its substance.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Abmeldeseite eines Handels-Newsletters: Ein Abonnent klickt auf „Newsletter abbestellen" und findet dort ein leeres Kästchen mit dem Hinweis „Setzen Sie hier keinen Haken, wenn Sie keine Angebote unserer Partner verpassen möchten." Wer wirklich aussteigen will, muss die doppelte Verneinung erst entwirren, um zu erkennen, dass er ankreuzen muss — nicht leer lassen.',
    'Einwilligungsdialog im Bewerbungsportal eines Konzerns: Vor dem Absenden erscheint die Zeile „Ich möchte nicht, dass meine Daten nicht für weitere passende Stellen gespeichert werden", mit einem Kästchen zum Bestätigen. Die Bewerberin, die eine Speicherung ablehnen will, muss die doppelte Verneinung auflösen, um zu merken, dass Bestätigen genau die Speicherung auslöst, die sie vermeiden wollte.',
    'Papierformular zur Datenfreigabe in einer Bankberatung: Auf dem Bogen, den die Beraterin zum Unterschreiben vorlegt, steht das Kästchen „Kein Widerspruch gegen die Nichtnutzung meiner Daten zu Werbezwecken." Der Kunde, der Werbung ablehnen will, kann der doppelten Verneinung nicht entnehmen, ob ein Kreuz seine Ablehnung setzt oder aufhebt.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale',
    ],
    findings: 'Trick Wording zählt in den einschlägigen Dark-Pattern-Taxonomien (Gray et al. 2018; Mathur et al. 2019) zu den katalogisierten und im Web nachweisbar verbreiteten Mustern. Die Belege sind bislang taxonomisch und prävalenzbasiert — sie zeigen, dass das Muster existiert und häufig vorkommt, nicht wie stark es eine einzelne Entscheidung verzerrt. Wie groß der Effekt ausfällt, hängt stark vom Kontext ab und ist experimentell kaum isoliert untersucht (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien, keine isolierten Wirkexperimente',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['equivocation', 'loaded_language', 'default_status_quo', 'sneaking'],
  warningNeurons: [
    'Doppelte oder verschachtelte Verneinung in einer Checkbox-, Schalter- oder Zustimmungszeile („nicht … keine …")',
    'Der Entscheidungssatz muss zweimal gelesen werden, um zu erkennen, welche Aktion das „Nein" transportiert',
    'Die intuitive Handlung (Haken entfernen, Schalter aus) führt zum Gegenteil der beabsichtigten Wahl',
    'Ankreuzen und Leerlassen tauschen durch die Formulierung die Bedeutung — Zustimmung und Ablehnung sind sprachlich verdreht',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
