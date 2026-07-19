import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: primacy_order_effects).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const primacyOrderEffects: Technique = {
  id: 'primacy_order_effects',
  name: {
    de: 'Primacy-/Reihenfolgeeffekt',
    en: 'Primacy Effect (Order Effects)',
  },
  description: {
    de: 'Die Reihenfolge, in der dieselben Informationen präsentiert werden, kann den Gesamteindruck verschieben: Was zuerst kommt, setzt den Deutungsrahmen, in dem das Spätere gelesen wird. Klassisch bei der Eindrucksbildung (Asch), stark kontextabhängig.',
    en: 'The order in which the same information is presented can shift the overall impression: what comes first sets the interpretive frame for what follows. Classic in impression formation (Asch), but heavily context-dependent.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'low',
  examples: [
    'Analysten-Call zum Halbjahresbericht: Die Investor-Relations-Leiterin baut die Ergebnispräsentation so auf, dass die drei wachsenden Segmente zuerst und ausführlich kommen, das schrumpfende Kerngeschäft erst auf der letzten Folie — dieselben Zahlen, aber die Reihenfolge lässt die Analysten ihren Gesamteindruck an den Eröffnungsfolien ausrichten.',
    'Auswahlgremium für eine Führungsposition: Der Personalleiter mailt dem Panel ein Kandidatenprofil, in dem die Stärken oben stehen und die Vorbehalte erst nach dem Seitenumbruch — er weiß, dass sich der Ersteindruck der Runde an den ersten Zeilen bildet und die späteren Bedenken in deren Licht gelesen werden.',
    'Vergabesitzung für eine neue Leadagentur: Die Projektleiterin legt ihren Favoriten bewusst als ersten von vier Pitch-Terminen, während Aufmerksamkeit und Wohlwollen im Gremium am höchsten sind — die drei folgenden Agenturen werden am Eindruck des Auftakts gemessen.',
  ],
  evidence: {
    studies: [
      'Asch (1946) - Forming Impressions of Personality'
    ],
    findings: 'Asch (1946) zeigte in Eindrucksbildungs-Experimenten, dass eine identische Eigenschaftsliste unterschiedlich bewertet wird, je nachdem welche Eigenschaften zuerst genannt werden (Primacy). Größe und Richtung solcher Reihenfolgeeffekte hängen stark vom Kontext ab — in anderen Settings dominiert stattdessen der Recency-Effekt (das Zuletztgenannte), und Replikationen des klassischen Wärme-Primacy fallen uneinheitlich aus. Die Belege stammen überwiegend aus älteren Laborstudien mit westlichen Stichproben; als robuster, richtungssicherer Hebel taugt der Effekt nicht (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Klassische Laborstudien (Asch 1946); wenige, uneinheitliche Replikationen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['anchoring', 'framing', 'agenda_setting'],
  warningNeurons: [
    'Dieselbe Faktenlage in auffällig günstiger Reihenfolge — das Positive konsequent zuerst, Einschränkungen ganz am Schluss',
    'Der Gesamteindruck steht schon nach den ersten Punkten fest, bevor die vollständige Information auf dem Tisch liegt',
    'Die Reihenfolge von Optionen, Sprechern oder Folien wirkt kuratiert, nicht sachlogisch (also nicht chronologisch, alphabetisch oder nach Bedeutung)',
    'Ungünstige Zahlen oder Vorbehalte erscheinen erst nach der Aufmerksamkeitsspitze — hinten, kurz, spät',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
