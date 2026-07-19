import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: slippery_slope).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const slipperySlope: Technique = {
  id: 'slippery_slope',
  name: {
    de: 'Slippery Slope (Dammbruchargument)',
    en: 'Slippery Slope',
  },
  description: {
    de: 'Behauptung, ein einzelner, für sich harmloser Schritt löse zwangsläufig eine Kette immer schlimmerer Folgen bis zu einem Extrem aus — ohne die Zwischenstufen zu belegen. So verschiebt sich der Streit vom eigentlichen Schritt auf ein Schreckensszenario.',
    en: 'The claim that a single, individually harmless step will inevitably set off a chain of ever-worse consequences ending in an extreme — without evidencing the intermediate stages. This shifts the argument away from the actual step and onto a doomsday scenario.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Betriebsversammlung zur Einführung einer freiwilligen Kernzeit-Lockerung: Ein Abteilungsleiter warnt vor der Belegschaft: „Wenn wir die Kernzeit heute für ein Team aufweichen, will sie morgen jede Abteilung, übermorgen fällt die Anwesenheitspflicht ganz — und am Ende steuert niemand mehr, wer wann arbeitet." Warum der erste Schritt zwangsläufig zum letzten führt, belegt er nicht.',
    'Namensbeitrag eines Verbandsgeschäftsführers in einer Fachzeitschrift gegen eine eng begrenzte Meldepflicht für Lieferkettendaten: „Steht diese Meldepflicht erst im Gesetz, folgt zwangsläufig das öffentliche Register, danach der Pranger für einzelne Firmen, am Ende die staatliche Lenkung ganzer Branchen." Für keinen dieser Zwischenschritte liefert er einen Beleg.',
    'Produktrunde eines SaaS-Anbieters: Der Datenschutzbeauftragte argumentiert gegen ein optionales, einwilligungsbasiertes Analyse-Feature: „Lassen wir dieses eine Tracking-Pixel zu, kippt unsere ganze Privacy-Positionierung — als Nächstes verkaufen wir Nutzerdaten, und in einem Jahr sind wir genau die Datenkrake, vor der wir warnen." Weshalb der erste Schritt die späteren erzwingt, führt er nicht aus.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Slippery Slope ist in der Fehlschluss- und Argumentationsforschung (z. B. Hansen 2015, SEP) als Muster gut beschrieben und von legitimen Dammbruch-Argumenten abgegrenzt, bei denen die Zwischenschritte tatsächlich belegt sind. Eine quantifizierte, generelle Persuasions- oder Verhaltenswirkung ist dagegen nicht belastbar etabliert; wie stark das Muster überzeugt, hängt stark von Publikum und Kontext ab (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['salami_tactics_gradualism', 'false_cause_post_hoc'],
  warningNeurons: [
    'Signalwörter der Zwangsläufigkeit („zwangsläufig", „unweigerlich", „am Ende landen wir bei…") ohne Beleg für die Zwischenschritte',
    'Eine Kette von Wenn-dann-Stufen, bei der jede Stufe die nächste scheinbar automatisch auslöst',
    'Der harmlose erste Schritt wird direkt an ein Extrem-Szenario gekoppelt, die dazwischenliegenden Stufen bleiben unbegründet',
    'Umkehr der Beweislast: Nicht der Schritt selbst, sondern seine hypothetische Endstufe soll die Entscheidung tragen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
