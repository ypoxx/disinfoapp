import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: negativity_bias).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const negativityBias: Technique = {
  id: 'negativity_bias',
  name: {
    de: 'Negativitäts-Bias',
    en: 'Negativity Bias',
  },
  description: {
    de: 'Negative Information wird stärker gewichtet und zieht mehr Aufmerksamkeit auf sich als gleich starke positive — ein einzelner Negativpunkt prägt den Gesamteindruck oft mehr als mehrere Positivpunkte. Kommunikativ ausgenutzt, indem das Negative überproportional prominent gesetzt wird: als Aufmacher, als zugespitzter Blickwinkel, als wiederholte Botschaft.',
    en: 'Negative information carries more weight and commands more attention than equally strong positive information — a single negative point often shapes the overall impression more than several positive ones. It is exploited by giving the negative disproportionate prominence: as the lead, the sharpened angle, the repeated note.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Investor-Relations-Kommunikation zum Jahresabschluss: Neben zehn übertroffenen Zielen steht eine knapp verfehlte Marge. Der IR-Leiter weiß, dass diese eine Zahl den ganzen Analystencall bestimmen wird, und baut seine Sprachregelung vorab um sie herum — nicht weil sie unter elf Kennzahlen die wichtigste ist, sondern weil ein einzelner Negativwert schwerer wiegt und mehr Aufmerksamkeit bindet als zehn gleich gut belegte positive. Die Zahlen selbst bleiben unverändert und sachlich benannt.',
    'Vorbereitung der Betriebsversammlung nach der Mitarbeiterbefragung: Neun von zehn Werten sind spürbar besser als im Vorjahr, einer ist gefallen — die interne Kommunikationsleiterin baut die gesamte Agenda um genau diesen einen Kritikpunkt herum, weil die Belegschaft die eine gesunkene Zahl ohnehin stärker gewichtet als die neun gestiegenen.',
    'Fact Sheet eines Verbandes für Abgeordnetenbüros in einer Regulierungsdebatte: Der Public-Affairs-Manager stellt der geplanten Regelung eine einzelne dokumentierte Risikozahl gegenüber zehn ebenso gut belegten Nutzenkennzahlen — bewusst alle in gleicher, schlichter Aufmachung, ohne Hervorhebung. Er verlässt sich darauf, dass die eine Risikozahl die Wahrnehmung der Büros bestimmt und die zehn Nutzenwerte verblassen lässt, weil ein Negativpunkt schwerer wiegt als zehn gleich starke positive.',
  ],
  evidence: {
    studies: [
      'Rozin & Royzman (2001) - Negativity Bias, Negativity Dominance, and Contagion'
    ],
    findings: 'Rozin und Royzman (2001) fassen breite Befunde zusammen, wonach negative Reize stärker gewichtet werden, schneller Aufmerksamkeit binden und Positives gleicher Stärke überlagern (Negativitäts-Dominanz). Es handelt sich überwiegend um ein Review heterogener Einzelbefunde; Effektgröße und Robustheit sind stark kontextabhängig und stützen sich vor allem auf WEIRD-Stichproben. Als allgemeine Tendenz gut dokumentiert, für konkrete Wirkungsvorhersagen aber nur begrenzt belastbar (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Übersichtsarbeit (heterogene Einzelbefunde, überwiegend WEIRD)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['doomscrolling_fomo_engineering', 'optimism_bias'],
  warningNeurons: [
    'Ein einzelner negativer Punkt bestimmt den Gesamteindruck, obwohl die Bilanz überwiegend positiv ist',
    'Das Negative steht prominent (Aufmacher, Fettung, Wiederholung), die gleich starke positive Information nur am Rand',
    'Aus einer ausgewogenen Faktenlage wird eine Schlagzeile mit rein negativer Zuspitzung',
    'Positives und Negatives sind gleich gut belegt — Aufmerksamkeit und Gewichtung liegen aber einseitig beim Negativen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
