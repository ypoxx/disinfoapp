import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: loaded_language).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const loadedLanguage: Technique = {
  id: 'loaded_language',
  name: {
    de: 'Loaded Language / Euphemismus',
    en: 'Loaded Language / Euphemism',
  },
  description: {
    de: 'Wertungsstarke, beschönigende oder herabsetzende Wortwahl, die die Bewertung schon im Wort mitliefert, statt sie zu begründen. Umfasst Euphemismen (beschönigen), Dysphemismen (herabsetzen) und positiv aufgeladene Schlagwörter (glittering generalities) — derselbe Sachverhalt, ein anders gefärbtes Etikett.',
    en: 'Word choice that is emotionally charged, euphemistic, or disparaging — smuggling a judgment into the label itself instead of arguing for it. Covers euphemisms (to soften), dysphemisms (to denigrate), and glittering generalities (positively loaded buzzwords): the same referent, a differently coloured label.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Interne Townhall eines Konzerns: Der COO nennt den Abbau von 300 Stellen durchgängig „Rightsizing" und „Freisetzung von Kapazitäten", nie Kündigung oder Entlassung — die beschönigende Wortwahl trägt die Bewertung der Maßnahme, bevor eine einzige Zahl auf dem Tisch liegt.',
    'Kampagnen-Landingpage eines Software-Anbieters, vom Produktmarketing-Team für Interessenten getextet: Das neue Abo heißt durchgehend „Freedom-Tarif" und verspricht „echte Unabhängigkeit" — die positiv aufgeladenen Schlagwörter tragen das Urteil, während Leistungsumfang und Kündigungsfrist ungenannt bleiben.',
    'Hintergrundgespräch einer Verbandssprecherin mit einem Fachjournalisten: Über die geplante Regulierung spricht sie nur von „Bürokratiemonster" und „Gängelung", über den eigenen Gegenvorschlag von „schlanker, mündiger Lösung" — derselbe Regelungsgegenstand, gegensätzlich gefärbte Wörter.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Loaded Language ist als rhetorisch-argumentatives Muster gut beschrieben und in Fallacy- und Propaganda-Taxonomien fest verankert (Hansen 2015, SEP). Eine allgemein quantifizierte Persuasions- oder Verhaltenswirkung ist damit jedoch nicht belegt: Wie stark die Wortwahl die Bewertung tatsächlich verschiebt, hängt stark von Publikum und Kontext ab und ist empirisch kaum isoliert gemessen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine isolierte Wirkungsstudie; taxonomisch/quellenbasiert',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['framing', 'loaded_question'],
  warningNeurons: [
    'Ein wertendes Etikett ersetzt die Beschreibung — die Bewertung steckt schon im Substantiv, nicht in einer belegten Aussage',
    'Für dieselbe Sache stehen je nach Absicht zwei Wörter bereit („Steuererleichterung" vs. „Steuergeschenk", „Nachverdichtung" vs. „Betonwüste")',
    'Beschönigende Sammelbegriffe verdecken, wer oder was konkret gemeint ist („Freisetzung", „Kollateralschaden", „Kapazitätsanpassung")',
    'Positiv aufgeladene Schlagwörter ohne fassbaren Inhalt tragen das Urteil allein („Zukunftspaket", „echte Werte", „gesunder Menschenverstand")',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
