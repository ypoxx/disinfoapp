import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) (Taxonomie 21.0.1, Knoten: false_balance).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const falseBalance: Technique = {
  id: 'false_balance',
  name: {
    de: 'False Balance / Bothsidesism',
    en: 'False Balance / Bothsidesism',
  },
  description: {
    de: 'Eine einseitige Faktenlage wird als ausgewogene Kontroverse inszeniert: Eine empirisch schwache Minderheitsposition erhält gleichberechtigten Raum neben dem Stand des Wissens, sodass ein Konsens wie eine offene Debatte wirkt.',
    en: 'Staging a lopsided body of evidence as a balanced controversy: an empirically weak minority view is given equal footing with the established state of knowledge, making consensus look like open debate.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Krisen-Q&A eines Getränkeherstellers zur Neubewertung eines Süßstoffs: Auf die Frage der Gesundheitsjournalistin nach der Einschätzung der europäischen Behörden antwortet der Pressesprecher: „Die Wissenschaft ist da gespalten" — und stellt dem breit getragenen Behördenkonsens die Einzelmeinung eines verbandsfinanzierten Forschers als gleichwertige zweite Seite gegenüber.',
    'Redaktionsverhandlung vor einem kritischen Beitrag über ein Nahrungsergänzungsmittel: Der Agentur-Berater des Herstellers fordert von der Wissenschaftsredakteurin, „aus Gründen der Ausgewogenheit" neben der einhelligen Studienlage einen der wenigen abweichenden Mediziner in gleicher Länge zu Wort kommen zu lassen — der Beitrag zeigt damit eine offene Debatte, die es in der Fachliteratur nicht gibt.',
    'LinkedIn-Post eines Verbandssprechers zur geplanten Mehrwegpflicht: Unter der Überschrift „Zwei Sichtweisen, eine Debatte" stellt er die übereinstimmenden Ökobilanzen mehrerer unabhängiger Institute und ein einzelnes verbandsnahes Gegengutachten als gleichberechtigte Positionen nebeneinander — die Regelung wirkt dadurch wissenschaftlich umstritten.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies',
      'Boykoff & Boykoff (2004) - Balance as Bias: Global Warming and the US Prestige Press'
    ],
    findings: 'False Balance ist als Argumentations- und Berichterstattungsmuster taxonomisch beschrieben (Hansen 2015, SEP); Inhaltsanalysen belegen das Muster empirisch, etwa in der US-Klimaberichterstattung 1988–2002 (Boykoff & Boykoff 2004). Belegt ist damit das Muster selbst, nicht seine Wirkung: Eine quantifizierte Persuasions- oder Einstellungswirkung auf das Publikum ist nicht generell etabliert und gilt als stark kontextabhängig (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['cherry_picking'],
  warningNeurons: [
    '„Die Wissenschaft ist gespalten" oder „umstritten" — ohne Blick auf das Mengenverhältnis der Belege',
    'Eine Einzelstimme oder ein Einzelgutachten steht gleichgewichtig neben einem breiten Fachkonsens',
    'Das Format erzwingt Symmetrie: je eine Stimme pro und contra, unabhängig von der Evidenzlage',
    '„Ausgewogenheit" wird als Argument geführt, wo die Faktenlage selbst nicht ausgewogen ist',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
