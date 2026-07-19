import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: middle_ground_fallacy).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const middleGroundFallacy: Technique = {
  id: 'middle_ground_fallacy',
  name: {
    de: 'Goldene Mitte (Ad temperantiam)',
    en: 'Middle-Ground Fallacy (Argument to Moderation)',
  },
  description: {
    de: 'Der Mittelweg zwischen zwei Positionen wird als richtig gesetzt, allein weil er in der Mitte liegt — der Kompromiss ersetzt die Prüfung, welche Seite die besseren Belege hat.',
    en: 'Treating the midpoint between two positions as correct simply because it sits in the middle — the compromise stands in for actually weighing which side the evidence supports.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Interne Freigaberunde für ein Nachhaltigkeits-Statement: Das Fachteam beziffert den CO2-Fußabdruck eines Produkts anhand geprüfter Messdaten auf 8 kg, eine aktivistische Kampagne behauptet 40 kg. Der Bereichsleiter beendet die Diskussion: „Nehmen wir 24 — die realistische Zahl wird schon in der Mitte liegen", und begründet die 24 allein damit, dass sie zwischen beiden Werten liegt.',
    'Interne Zielabstimmung für ein Klimaversprechen eines Konsumgüterherstellers: Die Nachhaltigkeitsabteilung hält, gestützt auf ein durchgerechnetes Reduktionsszenario, minus 60 Prozent bis 2030 für nötig; der Vertrieb hält minus 10 Prozent für machbar. Die Kommunikationsleiterin legt fest: „Kommunizieren wir minus 35 Prozent — das ist genau die Mitte und damit die vernünftige Zahl", ohne zu prüfen, welche Seite ihre Zahl besser stützt.',
    'Kundenmagazin-Interview eines Nahrungsmittelherstellers zum Zuckergehalt: Ernährungswissenschaftler empfehlen eine deutliche Reduktion, ein Lobbyverband sieht keinen Handlungsbedarf. Die Sprecherin positioniert die Firma: „Wir halten es mit dem gesunden Menschenverstand — die Wahrheit liegt in der Mitte, ein bisschen weniger Zucker reicht", ohne die Studienlage gegen die Verbandsmeinung zu wiegen.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) – „Fallacies", Stanford Encyclopedia of Philosophy',
    ],
    findings: 'Die Goldene Mitte (Argument ad temperantiam) ist als informeller Fehlschluss in der Fehlschluss-Literatur beschrieben (Stanford Encyclopedia of Philosophy, Hansen 2015; Walton): Ein Kompromiss ist nicht schon deshalb wahr, weil er zwischen zwei Positionen liegt. Die Einordnung ist begrifflich-taxonomisch gesichert; eine quantifizierte Wirkung auf Publikumsurteile ist nicht allgemein belegt (geringe Evidenz, stark kontextabhängig).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine quantitativen Wirkungsstudien; taxonomische Quellen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['false_balance', 'false_dichotomy'],
  warningNeurons: [
    '„Die Wahrheit liegt in der Mitte" / „irgendwo dazwischen" als Schlusssatz einer Sachfrage',
    'Der Kompromiss wird mit seiner Position begründet („weil es die Mitte ist"), nicht mit Argumenten oder Belegen',
    'Der arithmetische Mittelwert zweier Forderungen oder Zahlen wird zur „vernünftigen" Antwort erklärt',
    'Eine gemessene und eine bloß behauptete Position werden als gleich weit von der Wahrheit entfernt behandelt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
