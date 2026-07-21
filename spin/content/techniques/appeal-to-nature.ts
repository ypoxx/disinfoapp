import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: appeal_to_nature).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 * evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
 */
export const appealToNature: Technique = {
  id: 'appeal_to_nature',
  name: {
    de: 'Appell an die Natürlichkeit (Ad naturam)',
    en: 'Appeal to Nature (ad naturam)',
  },
  description: {
    de: 'Etwas gilt als gut, gesund oder sicher, weil es „natürlich" sei — und das Künstliche, Synthetische oder Chemische im selben Zug als schlechter. Die Natürlichkeit selbst wird zum Werturteil erklärt, ohne dass Nutzen, Sicherheit oder Wirkung belegt werden.',
    en: 'Treating something as good, healthy or safe because it is "natural" — and, in the same move, casting the artificial, synthetic or chemical as worse. Naturalness itself is presented as the verdict, without any evidence on benefit, safety or effect.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Produkt-Launch eines Kosmetikherstellers: Beim Presse-Event erklärt die Marketingleiterin den Fachjournalistinnen, die neue Pflegeserie sei „zu 100 Prozent natürlich und deshalb hautverträglicher als jede laborbasierte Formulierung" — Vergleichsdaten zur Verträglichkeit nennt sie nicht.',
    'Beratungsgespräch im Reformhaus: Auf die Frage einer Kundin nach einem Süßungsmittel empfiehlt der Inhaber Agavendicksaft statt raffiniertem Zucker mit den Worten „Das ist ein reines Naturprodukt, also gesünder für den Körper" — dass beide praktisch gleich viel Zucker liefern, erwähnt er nicht.',
    'Namensbeitrag einer Molkerei-Geschäftsführerin in einem Branchenmagazin gegen pflanzliche Drinks: Sie schreibt, Kuhmilch sei „ein Naturprodukt und dem technisch hergestellten Haferdrink ernährungsphysiologisch überlegen" — einen Nährwertvergleich legt sie nicht bei.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) — Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Der Appell an die Natürlichkeit ist als informeller Fehlschluss lexikografisch gut dokumentiert (SEP/Hansen 2015): Aus „natürlich" folgt logisch weder „gut" noch „sicher", weil „natürlich" eine beschreibende, „gut/sicher" eine bewertende Aussage ist. Eine eigenständige, quantifizierte Überzeugungswirkung ist dagegen nicht belastbar etabliert — die Einordnung stützt sich auf die Fehlschluss-Taxonomie, nicht auf Wirkungsstudien (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine Wirkungsstudien; taxonomisch-lexikografische Einordnung',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['appeal_to_tradition', 'false_dichotomy'],
  warningNeurons: [
    'Das Prädikat „natürlich" (oder „rein", „naturbelassen", „chemiefrei") steht selbst als Beleg für gut, gesund oder sicher — ohne Daten dazu.',
    'Das Gegenstück „künstlich/synthetisch/chemisch" wird pauschal abgewertet, ohne ein konkretes Risiko zu benennen.',
    'Der Sprung von einer Herkunfts- oder Beschaffenheitsaussage („ist natürlich") auf ein Werturteil („also besser") bleibt unbegründet.',
    'Nachfragen nach Wirk-, Sicherheits- oder Nährwertdaten werden erneut mit dem Naturhinweis selbst beantwortet.',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
