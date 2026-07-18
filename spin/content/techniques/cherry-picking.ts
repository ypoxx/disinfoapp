import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) — Taxonomie 21.0.1, Knoten: cherry_picking.
 * Redaktionelle Felder (examples, warningNeurons, difficulty) sind gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const cherryPicking: Technique = {
  id: 'cherry_picking',
  name: {
    de: 'Cherry-Picking / Card-Stacking',
    en: 'Cherry-Picking / Card-Stacking',
  },
  description: {
    de: 'Selektive Belegauswahl (Rosinenpickerei): Aus einer gemischten Faktenlage werden nur die stützenden Befunde präsentiert, widersprechende bleiben weg — jede einzelne Angabe kann stimmen, das Gesamtbild ist trotzdem verzerrt.',
    en: 'Selecting only the evidence that supports a position and leaving out what contradicts it — every cited figure can be accurate, yet the overall picture ends up skewed.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Pressemitteilung zur Produktsicherheit, Kommunikationschef → Fachpresse: Zitiert werden nur die zwei Testkategorien, die das Produkt bestanden hat — die drei Kategorien mit Beanstandungen aus demselben Prüfbericht kommen im Text nicht vor.',
    'Agentur-Pitch vor der Marketingleiterin eines Handelskonzerns: Die Agentur belegt ihre Leistungsfähigkeit mit den drei Kampagnen, die über dem Branchenschnitt lagen — die Mehrzahl ihrer Kampagnen aus demselben Zeitraum, die darunter blieb, taucht auf keiner Folie auf.',
    'Townhall zur Mitarbeiterbefragung, Bereichsleiter → Belegschaft: Präsentiert werden die vier Kennzahlen, die sich verbessert haben — die sieben verschlechterten Werte aus derselben Befragung, darunter die Führungszufriedenheit, fehlen im Foliensatz.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Cherry-Picking / Card-Stacking ist als Argumentations- und Propagandamuster taxonomisch belegt (Hansen 2015, SEP/Fallacies) und als Fehlschluss der unvollständigen Evidenz gut beschrieben. Eine quantifizierte Persuasions- oder Verhaltenswirkung ist dagegen nicht generell etabliert; die Wirkung gilt als stark kontext- und publikumsabhängig. Die Einordnung stützt sich auf Taxonomie- und Theoriearbeit, nicht auf replizierte Wirkungsstudien.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['false_balance', 'confirmation_bias', 'paltering_half_truth'],
  warningNeurons: [
    'Nur stützende Studien, Zahlen oder Stimmen — Gegenbefunde und Einschränkungen fehlen vollständig',
    'Handverlesene Zeiträume, Vergleichswerte oder Startpunkte, die die Entwicklung günstig aussehen lassen',
    'Zitate ohne Kontext, die der Gesamtaussage ihrer Quelle widersprechen (Quote-Mining)',
    'Auf die Frage nach der Grundgesamtheit („Wie viele Fälle gab es insgesamt?“) folgt Ausweichen statt Einordnung',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
