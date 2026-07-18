import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) — Taxonomie 21.0.1, Knoten: confirmation_bias.
 * Redaktionelle Felder (examples, warningNeurons, difficulty) sind gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const confirmationBias: Technique = {
  id: 'confirmation_bias',
  name: {
    de: 'Bestätigungsfehler',
    en: 'Confirmation Bias',
  },
  description: {
    de: 'Die Neigung, Information so zu suchen, zu deuten und zu erinnern, dass sie die eigene Überzeugung stützt: Bestätigendes wird ungeprüft übernommen, Gegenbelege werden strenger geprüft, umgedeutet oder vergessen — meist ohne Absicht.',
    en: 'The tendency to search for, interpret, and remember information in ways that back up what one already believes: confirming input gets a free pass, while disconfirming evidence faces tougher scrutiny, gets explained away, or is forgotten — usually without any intent to deceive.',
  },
  category: 'cognitive_bias',
  difficulty: 'beginner',
  effectiveness: 'high',
  examples: [
    'Medienresonanz-Reporting nach dem Produktlaunch, PR-Referentin → Kommunikationschefin: Vom Erfolg ihres Launches überzeugt, liest die Referentin die positiven Clippings gründlich, überfliegt die kritischen als "übliche Skeptiker" und hat in der Abschlussrunde vor allem die Lobzitate präsent — nicht aus Taktik, sondern weil sie ihr eigenes gefiltertes Bild für die Faktenlage hält.',
    'Recherche für ein Positionspapier zur Homeoffice-Regelung, Referent Interne Kommunikation → Geschäftsführung: Als Befürworter der Regelung sucht er nach "Studie Homeoffice Produktivität steigt", übernimmt die Treffer ins Papier und stuft Untersuchungen mit gegenteiligem Befund als "methodisch veraltet" ein — seine Suchanfrage konnte Gegenbelege von vornherein kaum zutage fördern.',
    'Krisenstab per Videokonferenz, Kommunikationsleiter, der sich früh auf "Das flaut ab" festgelegt hat: Sinkende Erwähnungszahlen gelten ihm als Beleg fürs Abflauen, der späte Einstieg eines Leitmediums als "Nachzügler ohne Folgewirkung" — jede neue Information deutet er so, dass sie seine Entwarnung bestätigt.',
  ],
  evidence: {
    studies: [
      'Nickerson (1998) - Confirmation Bias: A Ubiquitous Phenomenon in Many Guises'
    ],
    findings: 'Der Grundeffekt — belief-konforme Suche, Deutung und Erinnerung von Information — ist über viele Domänen repliziert; Nickersons Übersichtsarbeit (1998) bündelt Befunde aus Labor- und Feldstudien und gilt als Standardreferenz. Effektgröße und Robustheit sind allerdings stark kontextabhängig, und die Belege stammen überwiegend aus WEIRD-Stichproben. Die Taxonomie stuft die Konfidenz deshalb als moderat ein.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['cherry_picking', 'availability_heuristic'],
  warningNeurons: [
    'Recherche beginnt mit der These statt mit der Frage — Suchbegriffe, die nur bestätigende Treffer liefern können ("Studie belegt X")',
    'Asymmetrische Prüfstrenge: Gegenbelege werden seziert, bestätigende Befunde ungeprüft übernommen',
    'Ambivalente Daten werden durchgängig in Richtung der eigenen Erwartung gedeutet ("Ausreißer", "Nachzügler", "falsch gemessen")',
    'Quellenmix ohne Widerspruch: Monitoring, Berater und Feedbackrunden bestätigen einander, kritische Stimmen kommen schlicht nicht vor',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
