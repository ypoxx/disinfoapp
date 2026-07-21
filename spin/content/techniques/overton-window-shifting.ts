import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: overton_window_shifting).
 * evidenceTier 'frontier' (schwache Evidenz): als Begriffswissen lehren, keine
 * belegten Wirkbehauptungen. Redaktionelle Felder (examples, warningNeurons,
 * difficulty) gefüllt und geprüft. Es gilt Overlay-Schutz.
 */
export const overtonWindowShifting: Technique = {
  id: 'overton_window_shifting',
  name: {
    de: 'Verschieben des Overton-Fensters',
    en: 'Shifting the Overton Window',
  },
  description: {
    de: 'Der Begriff beschreibt das schrittweise Verschieben dessen, was in einer Öffentlichkeit als sagbar und akzeptabel gilt: Eine zunächst als undenkbar oder tabu geltende Position wird über die Zeit wiederholt platziert — meist über einen bewusst gesetzten Extrempunkt oder anhaltende Exposition —, bis sie als diskutabel erscheint. Das „Overton-Fenster" stammt aus der Think-Tank-Welt (Overton/Lehman) und ist als Ordnungskonzept einflussreich, empirisch aber schwach fundiert.',
    en: 'The term describes the gradual shifting of what a public treats as sayable and acceptable: a position first regarded as unthinkable or taboo is placed repeatedly over time — usually via a deliberately extreme anchor point or sustained exposure — until it comes to seem debatable. The "Overton window" originates in the think-tank world (Overton/Lehman); it is influential as an organising concept but only weakly grounded empirically.',
  },
  category: 'influence_ops',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Public-Affairs-Programm eines Industrieverbands über zwölf Monate: Der Verbandssprecher lässt die früher als extrem abgetane Forderung, eine geltende Umweltauflage vollständig zu streichen, in einer Serie von Gastbeiträgen, Studien-Kurzfassungen und Hintergrundrunden mit politischen Redaktionen immer wieder auftauchen — erst als Provokation am Rand, dann prominenter —, bis die Forderung in Talkrunden als seriöse Position mitverhandelt wird, die ein Jahr zuvor niemand ausgesprochen hätte.',
    'Interne Führungskommunikation eines Konzerns über zwei Quartale: In einer Reihe von Townhalls und Intranet-Memos bringt die CEO die zuvor als undenkbar geltende Verlagerung des Stammwerks zunächst als reines Gedankenspiel ins Gespräch, dann als „eines von mehreren Szenarien", schließlich als normalen Tagesordnungspunkt — bis die Belegschaft die Verlagerung als diskutable Option behandelt, die zwölf Monate zuvor als Tabu galt.',
    'Influencer-Seeding-Programm einer Lieferdienst-Plattform über zwei Quartale: Damit die zunächst empört abgelehnte Idee, das Trinkgeld künftig zur Pflichtabgabe zu machen, sagbar wird, lässt die Kommunikationsabteilung das Thema in Creator-Clips und moderierten Community-Threads immer wieder beiläufig auftauchen — erst als Provokation, dann als „gar nicht so abwegig" —, bis es in der Nutzerschaft als normale, diskutierbare Option gilt.',
  ],
  evidence: {
    studies: [
      'Overton / Lehman (Mackinac Center for Public Policy) — Konzeptpapier zum „Overton Window" (nicht peer-reviewt)',
    ],
    findings: 'Das Overton-Fenster ist ein einflussreiches Ordnungskonzept aus der Think-Tank-Welt (Overton/Lehman, Mackinac Center) und nicht peer-reviewt; kontrollierte Belege für ein gezielt planbares „Verschieben" des Sagbaren fehlen weitgehend. Dass sich der Bereich akzeptabler Positionen über die Zeit verändert, ist gut beobachtbar — dass eine einzelne Kampagne ihn steuerbar verschiebt, bleibt spekulativ (sehr niedrige Konfidenz). Der Begriff taugt daher als Beschreibungsraster für ein Muster, nicht als belegte Wirktechnik.',
    uncertainty: {
      confidence: 0.2,
      sampleSize: 'Kein kontrolliertes Studienkorpus; Konzept- und Beobachtungsliteratur',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['repetition', 'door_in_the_face', 'anchoring', 'slippery_slope'],
  warningNeurons: [
    'Eine Position, die kürzlich noch als Tabu oder undenkbar galt, taucht plötzlich wiederholt und wie beiläufig auf.',
    'Ein bewusst überzogener Extrempunkt verschiebt die Mitte, sodass das eigentliche Ziel daneben „gemäßigt" wirkt.',
    'Dieselbe einst unsagbare Forderung wird über Wochen in immer neuen Kanälen und Formaten platziert.',
    'Die Debatte dreht sich nicht mehr um „ob", sondern nur noch um „wie weit" — der Rahmen des Akzeptablen hat sich verschoben.',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
