import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: kompromat_leverage).
 * Serious-Mode (Zwang & Kontrolle): nüchterner Ton, kein „einsetzen"; die
 * Felder fokussieren auf Erkennen des Musters und Schutz der Betroffenen.
 * Evidenz-Tier weak: keine quantifizierten Wirkbehauptungen. Es gilt
 * Overlay-Schutz.
 */
export const kompromatLeverage: Technique = {
  id: 'kompromat_leverage',
  name: {
    de: 'Kompromat (Druck über kompromittierendes Material)',
    en: 'Kompromat (Compromising Material as Leverage)',
  },
  description: {
    de: 'Kompromittierendes Material — echt, selektiv zugeschnitten oder fabriziert — wird gesammelt und seine Veröffentlichung offen oder verdeckt angedroht, um eine Zielperson gefügig zu machen, zu kontrollieren oder zu diskreditieren.',
    en: 'Compromising material — genuine, selectively edited, or fabricated — is gathered and its release threatened openly or by implication in order to make a target compliant, control them, or discredit them.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Vertrauliches Vier-Augen-Gespräch vor einer Vorstandsentscheidung: Der Mittelsmann eines Großaktionärs deutet der Finanzvorständin an, man verfüge über private Chatprotokolle und Reisekostenbelege, die „unangenehm" wären — die „müssten nicht herauskommen", wenn sie beim anstehenden Beschluss auf seine Linie einschwenke.',
    'Kurz vor Veröffentlichung einer Investigativ-Recherche: Die Chefredaktion erhält ein anonymes Dossier mit privaten, aus dem Kontext gerissenen Aufnahmen der recherchierenden Journalistin, dazu der Hinweis, weitere „Enthüllungen" folgten, sollte der Beitrag erscheinen.',
    'Interne Beförderungsrunde: Ein Abteilungsleiter lässt die Mitbewerberin um dieselbe Position wissen, er habe ältere private Nachrichten von ihr gespeichert; sie solle ihre Bewerbung „noch einmal überdenken", dann bleibe die Sache unter ihnen.',
  ],
  evidence: {
    studies: [
      'Ledeneva (2006) - How Russia Really Works: The Informal Practices That Shaped Post-Soviet Politics and Business'
    ],
    findings: 'Ledeneva (2006) dokumentiert Kompromat als etablierte informelle Praxis in post-sowjetischer Politik und Wirtschaft: kompromittierendes Material wird gesammelt, gehandelt und als Druckmittel eingesetzt, um Zielpersonen gefügig zu machen oder zu diskreditieren. Die Befunde sind qualitativ-ethnographisch und stark kontextgebunden; ein bezifferter Wirkungsnachweis oder eine belegte Übertragbarkeit auf andere Systeme liegt nicht vor (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Qualitativ-ethnographische Fallanalyse (post-sowjetischer Kontext)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['zersetzung_decomposition', 'black_grey_white_propaganda'],
  warningNeurons: [
    'Andeutung, man „verfüge über" private Unterlagen, Chats oder Aufnahmen — gekoppelt an eine Erwartung an dein Verhalten',
    'Die Veröffentlichung wird nicht verlangt, sondern in Aussicht gestellt („das müsste nicht herauskommen")',
    'Das Material erscheint zeitlich exakt vor einer Entscheidung, Abstimmung oder Veröffentlichung',
    'Herkunft, Echtheit und Kontext des Materials bleiben bewusst vage oder anonym',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
