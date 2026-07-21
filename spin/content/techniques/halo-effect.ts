import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: halo_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const haloEffect: Technique = {
  id: 'halo_effect',
  name: {
    de: 'Halo-Effekt',
    en: 'Halo Effect',
  },
  description: {
    de: 'Ein starker positiver Eindruck in einem Merkmal — Aussehen, Prestige, Markenauftritt — strahlt auf sachlich unabhängige Einzelurteile aus, sodass eine Person oder ein Angebot pauschal als kompetenter, ehrlicher oder hochwertiger gilt, als das eine Merkmal trägt.',
    en: 'A strong positive impression in one attribute — looks, prestige, brand presence — radiates onto unrelated specific judgments, so a person or offer is rated as more competent, honest or high-quality overall than that single attribute warrants.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Anbietervergleich im Einkauf: Gegenüber dem Beschaffungsteam begründet die Fachbereichsleiterin ihre Empfehlung damit, die makellose Hochglanz-Präsentation und das preisgekrönte Produktdesign eines Anbieters ließen darauf schließen, auch dessen Datensicherheit und Servicevertrag seien den nüchterner auftretenden Wettbewerbern überlegen — geprüft hat sie beides nicht.',
    'Interne Team-Mail nach einem TV-Auftritt: Die Kommunikationschefin schreibt, weil der Vorstandschef souverän, sympathisch und rhetorisch glänzend aufgetreten sei, werde das Publikum seine strittigen Quartalszahlen kaum hinterfragen — der starke Gesamteindruck decke die dünne Faktenlage.',
    'Kandidaten-Debriefing im Recruiting: Die Personalleiterin hält die Bewerberin gegenüber dem Fachbereich für die Rolle geeignet — allein weil deren Lebenslauf eine Elite-Universität und einen prominenten Markenarbeitgeber nennt, traut sie ihr auch Führungsstärke und Detailgenauigkeit zu, die im Gespräch nie geprüft wurden.',
  ],
  evidence: {
    studies: [
      'Nisbett & Wilson (1977) - The Halo Effect: Evidence for Unconscious Alteration of Judgments'
    ],
    findings: 'Nisbett & Wilson (1977) zeigten experimentell, dass ein globaler Eindruck von einer Person unbemerkt auf die Bewertung einzelner, sachlich unabhängiger Eigenschaften abfärbt — Probanden hielten dieselben Merkmale (etwa Aussehen und Sprechweise) je nach Gesamteindruck für ansprechender oder störender, ohne diese Beeinflussung zu bemerken. Der Grundeffekt gilt als vielfach repliziert, seine Größe und Robustheit sind jedoch stark kontextabhängig, und die Befunde stammen überwiegend aus westlichen (WEIRD-)Stichproben (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Laborexperimente, überwiegend WEIRD-Stichproben',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['liking', 'authority'],
  warningNeurons: [
    'Ein einzelnes positives Merkmal (Aussehen, Marke, Prestige-Abschluss) wird zur Begründung für sachfremde Urteile herangezogen',
    'Von „wirkt professionell/sympathisch" wird unmittelbar auf „ist kompetent/ehrlich/hochwertig" geschlossen',
    'Die eigentlich tragende Eigenschaft (Datensicherheit, Führungsstärke, Haltbarkeit) wurde nie geprüft, gilt aber als gesichert',
    'Gepflegte Form — Hochglanz, souveräner Auftritt — ersetzt die Prüfung der Substanz',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
