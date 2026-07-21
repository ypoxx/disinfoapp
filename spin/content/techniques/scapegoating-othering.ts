import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: scapegoating_othering).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const scapegoatingOthering: Technique = {
  id: 'scapegoating_othering',
  name: {
    de: 'Scapegoating / Othering (Sündenbock)',
    en: 'Scapegoating / Othering',
  },
  description: {
    de: 'Ein komplexes Problem wird kollektiv einer Gruppe zugeschrieben, die zugleich als fremde, bedrohliche „Andere" konstruiert wird („die sind schuld"). Der Mechanismus bündelt diffuse Unzufriedenheit auf einen greifbaren Sündenbock und schweißt ein „Wir" gegen ein „Die" zusammen — die eigentliche, oft strukturelle Ursache bleibt dabei ungeprüft.',
    en: 'A complex problem is pinned collectively on a group that is simultaneously cast as an alien, threatening \'other\' (\'they are to blame\'). The move channels diffuse discontent onto a tangible scapegoat and welds an \'us\' together against a \'them\' — while the actual, often structural cause goes unexamined.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'All-Hands nach einem verpatzten Produktlaunch: Der Vertriebsvorstand sagt vor der versammelten Belegschaft: „Seit wir den zugekauften Standort dazugenommen haben, geht es bergab — die ziehen nicht mit, verstehen unsere Kultur nicht und ziehen den ganzen Laden runter. Solange die den Ton mitbestimmen, kommen wir nicht auf die Beine." Ein Beleg für die behauptete Ursache fehlt; die zugekaufte Belegschaft wird geschlossen zum Grund und zur Bedrohung erklärt.',
    'Verbands-Pressekonferenz zur Lage des stationären Handels: Der Hauptgeschäftsführer erklärt vor Wirtschaftsjournalisten: „Schuld an der Misere sind die anonymen Plattform-Konzerne — sie halten sich an keine Regeln, saugen die Innenstädte aus und zerstören, was Generationen aufgebaut haben. Sie sind das eigentliche Problem." Strukturelle Ursachen wie Mietniveau oder verändertes Kaufverhalten nennt er nicht; eine ganze Akteursgruppe wird zum Alleinschuldigen und zur Bedrohung erklärt.',
    'Krisensitzung nach einem gescheiterten IT-Projekt: Die Programmleiterin sagt in die Runde der Abteilungsleiter: „Das Problem sitzt nicht bei uns, sondern bei den externen Beratern — die haben uns von Anfang an fremde Prozesse übergestülpt und ziehen die Firma runter. Trennen wir uns von denen, läuft es wieder." Die eigenen Anforderungen und Entscheidungen werden nicht analysiert; die externe Gruppe wird geschlossen für das Scheitern verantwortlich gemacht.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Scapegoating und Othering sind als rhetorisch-propagandistisches Muster gut beschrieben (Hansen 2015, SEP zu Fehlschlüssen): das Zuweisen kollektiver Schuld an eine als bedrohlich konstruierte Gruppe ist ein wiedererkennbarer Argumentationszug. Eine quantifizierte, verallgemeinerbare Persuasions- oder Verhaltenswirkung ist damit jedoch nicht belegt; wie stark der Hebel greift, hängt stark von Kontext und Publikum ab. Der Eintrag beschreibt hier ein wiedererkennbares Muster, keine Technik mit gesichertem Wirkungsnachweis (niedrige Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomisch/philosophisch belegt; kein quantifizierter Wirkungsnachweis',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['fear_uncertainty_doubt'],
  warningNeurons: [
    'Ein diffuses Problem bekommt genau eine schuldige Gruppe — „die sind schuld", „seit die da sind, geht es bergab"',
    'Die Gruppe wird als Fremdkörper und Bedrohung markiert: Wir-gegen-die, „passen nicht zu uns", „ziehen uns runter"',
    'Die vorgeschlagene Lösung besteht darin, die Gruppe loszuwerden oder auszuschließen — nicht darin, die Ursache zu prüfen',
    'Eigene Anteile, strukturelle oder komplexe Ursachen bleiben unbenannt; ein Beleg für die behauptete Kausalität fehlt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
