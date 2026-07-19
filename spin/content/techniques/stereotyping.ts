import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: stereotyping).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const stereotyping: Technique = {
  id: 'stereotyping',
  name: {
    de: 'Stereotypisierung',
    en: 'Stereotyping',
  },
  description: {
    de: 'Ein festes, vereinfachendes Gruppenbild wird als selbstverständlich vorausgesetzt und pauschal auf alle Mitglieder übertragen, sodass Einzelne nur noch durch die zugeschriebene Gruppeneigenschaft wahrgenommen und bewertet werden.',
    en: 'A fixed, oversimplified image of a group is taken for granted and applied wholesale to every member, so that individuals are perceived and judged only through the trait ascribed to the group.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Employer-Branding-Workshop, intern: Die Recruiting-Leiterin sagt vor der Geschäftsführung: „Bewerber der Gen Z sind samt und sonders illoyal und anspruchsvoll — kaum eingearbeitet, schielen sie schon zur nächsten Tür. Bindungsprogramme lohnen bei denen nicht." Das feste Gruppenbild entscheidet über die Strategie, bevor ein einziger Kandidat betrachtet ist.',
    'Vertriebs-Enablement-Call: Der Vertriebsleiter brieft sein neues Außendienstteam: „Einkäufer im Maschinenbau ticken alle gleich — sturköpfig, geizig, technikverliebt. Wer denen mit Emotion kommt, ist unten durch." Die pauschale Berufsschablone legt die Ansprache fest, unabhängig vom konkreten Gegenüber.',
    'Kreativ-Briefing einer Agentur für eine Versicherungskampagne: Die Kampagnenplanerin sagt zur Art-Direktion: „Zielgruppe sind die typischen Rentner — technikscheu, sicherheitsversessen, misstrauisch gegen alles Digitale. Die Motive müssen groß, analog und beruhigend sein." Das Altersklischee ersetzt die Segmentanalyse.',
  ],
  evidence: {
    studies: [
      'Lippmann (1922) - Public Opinion'
    ],
    findings: 'Der Begriff geht auf Lippmann (1922, „Bilder in unseren Köpfen") zurück; die sozialpsychologische Tradition belegt breit, dass Stereotype Wahrnehmung und Bewertung von Gruppen strukturieren. Wie stark ihr gezielter Einsatz als Beeinflussungsmittel wirkt, ist jedoch nicht pauschal quantifiziert und stark kontextabhängig. Die Evidenzbasis auf Knotenebene stützt sich hier nur auf die klassische Quelle (geringe Konfidenz, überwiegend westliche Stichproben).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Konzeptueller Ursprung (Lippmann 1922); breite, aber uneinheitliche sozialpsychologische Tradition',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['scapegoating_othering', 'representativeness_heuristic'],
  warningNeurons: [
    'Pauschale Allquantoren über eine ganze Gruppe („alle", „samt und sonders", „die sind eben so", „typisch X")',
    'Einer Gruppe wird eine feste Eigenschaft zugeschrieben; Gegenbeispiele gelten nur als Ausnahme, die die Regel bestätigt',
    'Das Gruppenbild wird als bekannt vorausgesetzt statt belegt („weiß doch jeder", „das kennt man ja")',
    'Aus der bloßen Gruppenzugehörigkeit wird direkt auf Verhalten oder Charakter des Einzelnen geschlossen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
