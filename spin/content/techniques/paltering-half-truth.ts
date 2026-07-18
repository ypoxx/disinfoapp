import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) (Taxonomie 21.0.1, Knoten: paltering_half_truth).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const palteringHalfTruth: Technique = {
  id: 'paltering_half_truth',
  name: {
    de: 'Paltering (Halbwahrheit)',
    en: 'Paltering (Half-Truth)',
  },
  description: {
    de: 'Täuschung durch Aussagen, die wörtlich wahr sind, aber gezielt einen falschen Gesamteindruck erzeugen — typisch, indem die entscheidende Information weggelassen oder eine andere als die gestellte Frage beantwortet wird.',
    en: 'Deception through statements that are literally true but crafted to leave a false overall impression — typically by omitting the decisive fact or answering a question that was never asked.',
  },
  category: 'logical_fallacy',
  difficulty: 'advanced',
  effectiveness: 'high',
  examples: [
    'Krisen-Q&A nach Medienberichten über Stellenabbau: Auf die Frage der Wirtschaftsjournalistin, ob Entlassungen geplant sind, antwortet der Pressesprecher: „Dem Vorstand liegt aktuell kein Beschluss zu Entlassungen vor" — die Beschlussvorlage ist für die Sitzung nächste Woche bereits terminiert.',
    'Agentur-Pitch vor der Marketingleiterin eines Herstellers: Der Neugeschäfts-Direktor versichert: „Wir betreuen bereits Kunden aus Ihrer Branche" — gemeint ist ein einzelnes Kleinmandat, das zum Quartalsende ausläuft.',
    'Vertragsverhandlung nach einem Sicherheitsvorfall: Dem Einkäufer des Großkunden gegenüber betont der Vertriebsleiter im Call: „Kein einziger Kunde hat deswegen gekündigt" — die vertragliche Kündigungsfrist endet erst im Folgemonat.',
  ],
  evidence: {
    studies: [
      'Rogers et al. (2017) - Artful Paltering: The Risks and Rewards of Using Truthful Statements to Mislead Others'
    ],
    findings: 'Rogers et al. (2017) zeigen in Verhandlungs- und Laborexperimenten, dass Paltering — Täuschen mit wörtlich wahren Aussagen — verbreitet ist und vom Sender als ethischer empfunden wird als eine direkte Lüge. Empfänger bewerten es nach Aufdeckung jedoch ähnlich negativ wie eine Lüge und entziehen entsprechend Vertrauen. Die Befunde stammen aus Labor- und Verhandlungsstudien mit überwiegend westlichen Stichproben; wie weit sie sich auf andere Kontexte übertragen, ist offen (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Mehrere Experimente (Labor-/Verhandlungsstudien)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['cherry_picking', 'equivocation'],
  warningNeurons: [
    'Wörtlich präzise Antwort auf eine Frage, die so nicht gestellt wurde',
    'Auffällig enge Zeit- oder Geltungsfenster („aktuell", „zum jetzigen Zeitpunkt", „liegt nicht vor")',
    'Die Aussage stimmt im Wortlaut — die naheliegende Schlussfolgerung daraus nicht',
    'Nachfragen zum Weggelassenen werden mit einer weiteren Teilwahrheit beantwortet',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
