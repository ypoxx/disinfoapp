import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: bait_and_switch).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const baitAndSwitch: Technique = {
  id: 'bait_and_switch',
  name: {
    de: 'Bait-and-Switch',
    en: 'Bait-and-Switch',
  },
  description: {
    de: 'Dark Pattern, bei dem ein attraktives Angebot anlockt, das bei Inanspruchnahme nicht (mehr) verfügbar ist — an seine Stelle tritt gezielt eine teurere oder schlechtere Alternative. Kennzeichnend ist der Austausch nach der Festlegung: Beworben wird das eine, angeboten oder geliefert wird das andere.',
    en: 'A dark pattern that draws people in with an attractive offer that turns out to be unavailable the moment they act on it — steering them toward a pricier or inferior alternative instead. The hallmark is the post-commitment swap: one thing is advertised, another is offered or delivered.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Mediabuchung für die Produktkampagne: Die Mediaplanerin bestellt per Mail das im Newsletter des Fachverlags beworbene Aktionspaket „Homepage-Banner zum Sonderpreis". Der Anzeigenverkäufer antwortet, das Kontingent sei „leider gerade vergriffen" — verfügbar sei aber das deutlich teurere Run-of-Site-Paket. Der Newsletter der Folgewoche bewirbt den Sonderpreis unverändert weiter.',
    'Toolauswahl im Team: Der PR-Referent will das auf LinkedIn beworbene Starter-Abo eines Medienbeobachtungs-Dienstes für 29 Euro abschließen. Im Bestellprozess ist genau dieser Tarif ausgegraut („derzeit nicht buchbar"), auswählbar ist nur das Professional-Paket für 119 Euro — während die Anzeige mit dem Starter-Preis parallel weiterläuft.',
    'Agenturauswahl nach dem Pitch: Im Präsentationstermin stellt die Agentur der Kommunikationsleiterin die beiden Seniorberater als künftiges Kernteam vor. Nach Vertragsunterschrift übernimmt beim Kick-off ein Junior-Team; die Seniorberater sind „nur noch punktuell eingebunden".',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Bait-and-Switch ist in den Dark-Pattern-Taxonomien als Täuschungsmuster etabliert: Gray et al. (2018) führen es als Untertyp des Sneaking, Mathur et al. (2019) dokumentieren verwandte Täuschungsmuster in einem Crawl von rund 11.000 Shopping-Websites. Als Lockangebot ohne ausreichende Verfügbarkeit ist die Praxis in vielen Märkten zudem lauterkeitsrechtlich untersagt. Belegt sind damit vor allem Einordnung und Vorkommen des Musters; wie stark es Entscheidungen tatsächlich verschiebt, ist kaum direkt gemessen und stark kontextabhängig (geringe Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien, keine direkten Effektmessungen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['drip_pricing'],
  warningNeurons: [
    'Das beworbene Angebot ist bei Kontaktaufnahme „gerade vergriffen" oder „nicht buchbar" — die Werbung dafür läuft unverändert weiter',
    'Statt Warteliste oder Ersatz zu gleichen Konditionen folgt sofort der Schwenk auf eine teurere oder schlechtere Alternative',
    'Zum Lockangebot fehlen überprüfbare Angaben: kein Kontingent, kein Aktionszeitraum, keine Auskunft, ob es je verfügbar war',
    'Präsentiert wurde das eine, geliefert wird das andere — etwa ein Pitch-Team, das nach Vertragsschluss durch eine andere Besetzung ersetzt wird',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
