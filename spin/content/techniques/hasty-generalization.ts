import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: hasty_generalization).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const hastyGeneralization: Technique = {
  id: 'hasty_generalization',
  name: {
    de: 'Voreilige Verallgemeinerung',
    en: 'Hasty Generalization',
  },
  description: {
    de: 'Aus zu wenigen oder unrepräsentativen Fällen wird eine weitreichende Behauptung über die Gesamtheit gezogen — typisch, indem ein einzelnes anschauliches Beispiel zur Regel für „alle" oder „immer" erhoben wird, ohne zu prüfen, wie repräsentativ die Stichprobe ist.',
    en: 'Drawing a sweeping claim about a whole population from too few or unrepresentative cases — typically by elevating a single vivid instance into a rule about "everyone" or "always", without checking how representative the sample is.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Talkrunde zur Fachkräftelage: Ein Verbandsvertreter erzählt von zwei Handwerksbetrieben aus seinem Landkreis, die problemlos neue Azubis fanden, und folgert vor der Kamera: „Den vielbeschworenen Fachkräftemangel gibt es gar nicht — wer wirklich ausbilden will, findet auch Leute." Als die Moderatorin nach belastbaren Branchenzahlen fragt, schiebt er als Beleg bloß einen dritten Betrieb aus dem Nachbarort nach.',
    'Vertriebs-Reporting-Meeting: Nach drei gewonnenen Ausschreibungen im Norden — Ergebnisse aus den übrigen Regionen stehen noch aus — präsentiert der Regionalleiter die Folie „Unser neues Preismodell schlägt überall durch" und empfiehlt den sofortigen bundesweiten Rollout.',
    'Auswertungscall zur Verpackungs-Neugestaltung: Die Marktforscherin berichtet, in zwei spontan besetzten Fokusgruppen mit je sechs Personen sei das Design gut angekommen, und hält im Protokoll fest: „Die Zielgruppe akzeptiert die neue Verpackung." Eine repräsentative Erhebung ist nicht vorgesehen.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)',
      'Tversky & Kahneman (1971) - Belief in the Law of Small Numbers',
    ],
    findings: 'Voreilige Verallgemeinerung ist als informeller Fehlschluss in der Fehlschluss-Literatur fest etabliert und taxonomisch beschrieben (SEP/Walton, Hansen 2015). Verwandte Befunde zum „Gesetz der kleinen Zahl" (Tversky & Kahneman) belegen, dass Menschen aus sehr kleinen Stichproben systematisch zu weitreichende Schlüsse ziehen. Eine allgemeine, quantifizierte Wirkung als Überzeugungstechnik ist dagegen nicht etabliert; die Evidenz ist begrifflich-theoretisch geerdet, nicht durchgängig experimentell (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Fehlschluss-Taxonomie plus verwandte Heuristik-Studien',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['cherry_picking', 'representativeness_heuristic', 'composition_division'],
  warningNeurons: [
    'Ein einzelner anschaulicher Fall trägt eine pauschale „alle/immer/niemand"-Aussage',
    'Der Sprung von „ein paar Beispielen" zu „der Zielgruppe / dem Markt / den Kunden" ohne Angabe der Stichprobengröße',
    'Eine sehr kleine oder erkennbar unrepräsentative Basis (zwei Betriebe, drei Deals, eine Fokusgruppe) begründet eine weitreichende Entscheidung',
    'Auf die Frage nach Repräsentativität folgt ein weiteres Einzelbeispiel statt einer belastbaren Erhebung',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
