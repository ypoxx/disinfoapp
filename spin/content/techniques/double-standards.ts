import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: double_standards).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const doubleStandards: Technique = {
  id: 'double_standards',
  name: {
    de: 'Doppelstandards',
    en: 'Double Standards',
  },
  description: {
    de: 'Gleichartige Fälle werden je nach Zugehörigkeit ungleich beurteilt: Das eigene Lager wird am milden Maßstab gemessen, das gegnerische am strengen. Dasselbe Verhalten gilt bei den einen als lässlich oder gar lobenswert, bei den anderen als Skandal.',
    en: 'Judging like cases by unlike standards depending on affiliation: a lenient yardstick for one\'s own side, a strict one for the other. The same conduct is waved through — even praised — for us and condemned for them.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'All-Hands eines Softwareanbieters: Der Vertriebsvorstand lobt vor der versammelten Belegschaft, dass das eigene Team einen Großkunden per aggressivem Last-Minute-Rabatt vom Wettbewerber abgeworben hat — „genau dieser Biss zeichnet uns aus". Als ein Wettbewerber Monate zuvor mit demselben Manöver einen Kunden abgeworben hatte, nannte er es in derselben Runde „unseriöses Dumping".',
    'Hintergrundgespräch eines Branchenverbands mit einer Fachjournalistin: Der Verbandssprecher bezeichnet die Kartellstrafe der Behörde gegen ein Mitgliedsunternehmen als „überzogene Bürokratie-Willkür" — dieselbe Behörde hatte er Wochen zuvor für eine gleichartige Strafe gegen einen ausländischen Konkurrenten als „endlich konsequenten Verbraucherschutz" gelobt.',
    'Redaktionsrunde vor einem Statement: Vor ihrem Sprecherteam verwirft die Kommunikationschefin eines Lebensmittelkonzerns eine kritische, NGO-finanzierte Studie mit dem Argument „von einer interessierten Seite bezahlt, also wertlos" — im selben Briefing empfiehlt sie demselben Team, eine von der eigenen Branche finanzierte, günstige Studie als „unabhängige Evidenz" zu zitieren.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) — Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Doppelstandards sind als Argumentations- und Propagandamuster taxonomisch beschrieben (Hansen 2015, SEP-Eintrag zu Fehlschlüssen); die naheliegende kognitive Grundlage — motiviertes Schließen und Ingroup-Favorisierung — ist plausibel, aber eine eigenständige, quantifizierte Wirkung genau dieses Musters ist nicht belastbar etabliert. Eingeordnet als schwache Evidenz: Gelehrt wird das Muster als benennbarer Argumentationsfehler, nicht als belegter Wirkhebel.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine Effektstudien; taxonomische/philosophische Einordnung',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['whataboutism', 'framing'],
  warningNeurons: [
    'Dasselbe Verhalten wird je nach Akteur gegensätzlich benannt („entschlossen" beim eigenen Lager, „rücksichtslos" beim anderen)',
    'Das Bewertungskriterium wechselt mit der Zugehörigkeit — bei „uns" zählt die gute Absicht, bei „denen" allein das Ergebnis',
    'Ein Maßstab, der gegen die Gegenseite ins Feld geführt wird, wird für die eigene Seite stillschweigend ausgesetzt',
    'Die Asymmetrie fällt erst auf, wenn man die beiden Urteile über die vergleichbaren Fälle direkt nebeneinanderlegt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
