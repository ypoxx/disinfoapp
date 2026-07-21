import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: appeal_to_ignorance).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const appealToIgnorance: Technique = {
  id: 'appeal_to_ignorance',
  name: {
    de: 'Argument aus Unwissen (Ad ignorantiam)',
    en: 'Appeal to Ignorance (Argumentum ad Ignorantiam)',
  },
  description: {
    de: 'Das Fehlen von Gegenbeweisen wird als Beweis ausgegeben: Weil eine Behauptung nicht widerlegt ist, gilt sie als wahr — oder weil kein Schaden nachgewiesen wurde, als unbedenklich. Die Beweislast wird dabei stillschweigend auf die Zweifelnden verschoben.',
    en: 'Absence of counter-evidence is passed off as proof: because a claim has not been disproven it is treated as true — or because no harm has been shown, as safe. The burden of proof is quietly shifted onto whoever doubts the claim.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Presse-Briefing eines Getränkeherstellers zu einem neuen Zusatzstoff: Auf die Frage der Fachjournalistin nach Gesundheitsrisiken antwortet der Kommunikationsleiter: „Es gibt bis heute keine einzige Studie, die einen Schaden durch diesen Stoff nachweist — solange niemand das Gegenteil beweist, ist er unbedenklich."',
    'Hintergrundgespräch nach anonym erhobenen Compliance-Vorwürfen: Der Unternehmenssprecher sagt dem Wirtschaftsjournalisten: „Niemand hat bis heute auch nur einen belastbaren Beleg für diese Anschuldigungen vorgelegt — damit ist erwiesen, dass an ihnen nichts dran ist."',
    'Messe-Standgespräch eines Nahrungsergänzungs-Anbieters mit der Einkäuferin einer Drogeriekette: Auf ihre Skepsis zur beworbenen Wirkung entgegnet der Vertriebsleiter: „Keine einzige Untersuchung hat je widerlegt, dass unser Präparat die Abwehrkräfte stärkt — der Nutzen steht damit außer Frage."',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Das Argument aus Unwissen ist in der Fehlschluss-Literatur (Stanford Encyclopedia of Philosophy; Walton) fest als informeller Fehlschluss beschrieben und klassifiziert; belegt ist damit vor allem seine logische Struktur, nicht eine bezifferte Überzeugungswirkung. Ob die Schlussweise im Einzelfall überhaupt fehlerhaft ist, hängt stark vom Kontext ab — etwa davon, bei wem berechtigterweise die Beweislast liegt. Die Wirkungsevidenz ist entsprechend schwach: taxonomisch geerdet, ohne durchgängige empirische Wirkungsstudien.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['fear_uncertainty_doubt'],
  warningNeurons: [
    '„Kein Beleg für X" wird umstandslos zu „X ist falsch" — oder „kein Schaden nachgewiesen" zu „unbedenklich"',
    'Die Beweislast kippt: Nicht wer behauptet, sondern wer zweifelt, soll etwas beweisen',
    'Fehlende oder ausstehende Forschung wird als positive Aussage gelesen („noch nie widerlegt", „außer Frage")',
    'Absolutformeln als Kern der Schlussfolgerung: „keine einzige Studie", „niemand konnte je beweisen"',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
