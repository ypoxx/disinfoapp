import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: historical_narrative_control).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 * evidenceTier 'frontier' → als Begriffswissen gelehrt (Muster benennen), nie
 * als belegter Wirkzusammenhang. Kein seriousMode (Kategorie influence_ops).
 */
export const historicalNarrativeControl: Technique = {
  id: 'historical_narrative_control',
  name: {
    de: 'Kontrolle des Geschichtsbildes',
    en: 'Historical Narrative Control',
  },
  description: {
    de: 'Die Deutung der Vergangenheit wird gezielt kuratiert — durch selektives Erinnern, Revision des Rückblicks und Gedenkpolitik —, damit eine bestimmte Lesart der Geschichte dominiert und die gegenwärtige Ordnung, Strategie oder Führung als deren logische Fortsetzung legitim erscheint.',
    en: 'The reading of the past is deliberately curated — through selective remembering, revision of the record, and commemoration — so that one version of history dominates and the present order, strategy, or leadership appears as its legitimate continuation.',
  },
  category: 'influence_ops',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Konzernkommunikation → Belegschaft und Öffentlichkeit, Kampagne zum 100-jährigen Firmenjubiläum: Festschrift, Werksmuseum und Zeitstrahl inszenieren die Firmengeschichte als durchgängige Erzählung von „Nachhaltigkeit seit 1925" — die jahrzehntelange Rüstungssparte und ein Umweltskandal der 1980er kommen schlicht nicht vor. Die kuratierte Vergangenheit soll die heutige Green-Strategie als logische Fortsetzung erscheinen lassen.',
    'Neuer CEO → Führungskräfte, Auftaktrede beim Strategie-Offsite nach der Fusion: Er erzählt die Unternehmensgeschichte neu — die Ära seines Vorgängers erscheint als „Jahrzehnt des Stillstands", die eigene Berufung als überfällige Rückkehr zu den „wahren Gründerwerten". Der umgeschriebene Rückblick legitimiert den harten Umbau der Gegenwart.',
    'Verbandsgeschäftsführerin → Fachpresse und Politik, Gedenk-Ausstellung zum 75. Branchenjubiläum: Die Schau erzählt die Industrie als „Wiederaufbau-Motor und Garant des Wohlstands"; die Mitverantwortung in der Klimadebatte und frühere Kartellverfahren bleiben aus der Chronik ausgespart. Die gepflegte Erinnerung soll den heutigen Anspruch auf regulatorische Schonung stützen.',
  ],
  evidence: {
    studies: [],
    findings: 'Die Kontrolle des Geschichtsbildes ist ein etabliertes Konzept der Erinnerungspolitik (selektives Erinnern, Revision, Gedenkpolitik) und beschreibt, wie die dominante Lesart der Vergangenheit kollektive Identität formt und gegenwärtige Macht legitimieren kann. Im aktuellen Quellenset liegt dazu keine kontrollierte Wirkungsmessung und kein Effektmaß vor; der Knoten wird bewusst als spekulativ geführt (sehr geringe Konfidenz). Er dient daher als Begriffswissen zum Benennen des Musters, nicht als belegter Wirkzusammenhang.',
    uncertainty: {
      confidence: 0.2,
      sampleSize: 'Keine kontrollierte Studie im Quellenset (konzeptuell)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['agenda_setting', 'narrative_persuasion'],
  warningNeurons: [
    'Die Firmen- oder Branchengeschichte erscheint als lückenlose, widerspruchsfreie Erzählung — unbequeme Kapitel fehlen im Zeitstrahl',
    'Jahrestage, Festschriften, Museen oder Chroniken rücken auffällig eine einzige Lesart der Vergangenheit ins Zentrum',
    'Die Vergangenheit ist so zugeschnitten, dass die heutige Strategie oder Führung als ihre naturgegebene Fortsetzung erscheint',
    'Frühere Positionen oder Verantwortlichkeiten werden rückwirkend umgedeutet oder aus dem offiziellen Rückblick getilgt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
