import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: anaphora).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Frontier-Tier: als Begriffs- und Formwissen geführt, keine
 * Wirkversprechen (Audit-Downgrade der Mere-Exposure-Analogie). Es gilt
 * Overlay-Schutz.
 */
export const anaphora: Technique = {
  id: 'anaphora',
  name: {
    de: 'Anapher',
    en: 'Anaphora',
  },
  description: {
    de: 'Rhetorische Wiederholungsfigur: Aufeinanderfolgende Sätze oder Satzteile beginnen mit demselben Wort oder derselben Wendung. Der wiederkehrende Auftakt gibt der Passage Rhythmus und rückt die wiederholte Formel in den Vordergrund.',
    en: 'A rhetorical figure of repetition in which consecutive clauses or sentences open with the same word or phrase. The recurring opening lends the passage cadence and pushes the repeated formula to the foreground.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Betriebsversammlung nach einem schwachen Quartal: Die Vorstandsvorsitzende schließt ihre Rede an die Belegschaft mit dreimal demselben Satzanfang: „Wir bleiben bei unserem Wort zu den Standorten. Wir bleiben bei unserem Wort zu den Löhnen. Wir bleiben bei unserem Wort zu euch."',
    'Pressestatement nach einem Produktrückruf: Vor den Wirtschaftsredaktionen beginnt der Unternehmenssprecher drei Sätze in Folge gleich: „Sicherheit steht über dem Termin. Sicherheit steht über dem Umsatz. Sicherheit steht über jeder Schlagzeile."',
    'Kampagnen-Kickoff auf LinkedIn: Der Kommunikationschef eines Energie-Start-ups postet den Gründungsaufruf an Follower und Fachcommunity, jede Zeile mit demselben Auftakt: „Dafür stehen wir auf. Dafür arbeiten wir. Dafür treten wir an."',
  ],
  evidence: {
    studies: [],
    findings: 'Anapher ist als rhetorische Wiederholungsfigur seit der antiken Rhetorik beschrieben und als Stilmittel gut dokumentiert. Eine spezifische, empirisch gesicherte Überzeugungswirkung der Anapher ist im aktuellen Quellenstand nicht belegt: Das Audit stuft die frühere Ableitung aus allgemeiner Wiederholungs- und Mere-Exposure-Forschung als zu großen Analogiesprung ein (Evidenzstatus: spekulativ, niedrige Konfidenz). Der Eintrag wird daher als Begriffs- und Formwissen geführt, nicht als Technik mit belegter Wirkstärke.',
    uncertainty: {
      confidence: 0.2,
      sampleSize: 'Keine spezifische Wirkstudie (rhetorische Formbeschreibung)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['repetition', 'illusory_truth_effect', 'emotional_appeal'],
  warningNeurons: [
    'Mehrere aufeinanderfolgende Sätze beginnen wortgleich — der Auftakt wird zur Formel',
    'Der Rhythmus des Dreiklangs trägt die Passage, während die eigentliche Begründung dünn bleibt oder fehlt',
    'Die wiederholte Wendung ersetzt eine differenzierte Aussage durch einen eingängigen Merksatz',
    'Eine strittige oder unbelegte Behauptung reist im Windschatten der eingängigen Wiederholungsstruktur mit',
  ],
  taxonomyGroups: ['familiarity_principle', 'pathos'],
  evidenceTier: 'frontier',
};
