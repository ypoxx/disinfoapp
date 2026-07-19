import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: optimism_bias).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const optimismBias: Technique = {
  id: 'optimism_bias',
  name: {
    de: 'Optimismus-Bias',
    en: 'Optimism Bias',
  },
  description: {
    de: 'Die systematische Neigung, das eigene Risiko für negative Ereignisse niedriger einzuschätzen als das vergleichbarer anderer — das Gefühl „mir passiert das nicht", das Vorsicht, Vorsorge und Prüfbereitschaft senkt.',
    en: 'The systematic tendency to judge one\'s own risk of negative events as lower than that of comparable others — the "it won\'t happen to me" sense that erodes caution, precaution and the readiness to double-check.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Interne Risiko-Sitzung eines Mittelständlers vor dem Go-live einer neuen Warenwirtschaft: Die externe Sicherheitsberaterin zeigt, dass jeder vierte vergleichbare Betrieb dieser Größe binnen zwei Jahren einen Ransomware-Vorfall verzeichnet. Der IT-Leiter akzeptiert die Quote — für die anderen: „Das gilt für Betriebe unserer Größe, schon klar, aber unser Team arbeitet zu diszipliniert, uns trifft das nicht" — und streicht das Budget für das zweite Backup-System.',
    'Beiratssitzung eines Start-ups vor der Series-A-Runde: Die Gründerin legt dem Gremium nur das Best-Case-Szenario der Liquiditätsplanung vor; auf die Rückfrage nach einem Puffer für ausfallende Großkunden entgegnet sie: „Solche Ausfälle betreffen andere Gründungen, unser Team zieht das durch."',
    'Onboarding-Gespräch einer Vertriebsleiterin mit einem neuen Außendienstler zur Dienstwagen-Police: Auf den Rat zur Vollkasko winkt er ab — „Unfälle bauen die Fahranfänger, mit meiner Erfahrung passiert mir das nicht" — und wählt die Minimaldeckung.',
  ],
  evidence: {
    studies: [
      'Weinstein (1980) - Unrealistic Optimism About Future Life Events'
    ],
    findings: 'Weinstein (1980) zeigte, dass Menschen ihre eigene Wahrscheinlichkeit für negative Lebensereignisse im Vergleich zu ähnlichen anderen systematisch zu niedrig einschätzen (unrealistischer Optimismus). Der Befund gilt als vielfach repliziert, doch die Effekte sind klein und stark kontextabhängig, und die Studienbasis stammt überwiegend aus westlichen (WEIRD-)Fragebogenstichproben. Wie deutlich der Bias eine konkrete Vorsorge- oder Kommunikationsentscheidung verschiebt, ist im Einzelfall offen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Fragebogenstudien, überwiegend westliche (WEIRD-)Stichproben',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['availability_heuristic', 'confirmation_bias'],
  warningNeurons: [
    'Das eigene Risiko wird ausdrücklich niedriger angesetzt als das vergleichbarer anderer („uns/mir passiert das nicht")',
    'Geplant wird nur das Best-Case-Szenario; Puffer, Notfallpläne oder Versicherungen gelten als unnötig',
    'Warnungen werden mit Verweis auf die eigene Kompetenz oder Sonderstellung abgewiesen („bei uns ist das anders")',
    'Statistische Basisraten werden für „die anderen" akzeptiert, aber nicht auf die eigene Lage angewandt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
