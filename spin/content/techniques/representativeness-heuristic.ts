import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: representativeness_heuristic).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const representativenessHeuristic: Technique = {
  id: 'representativeness_heuristic',
  name: {
    de: 'Repräsentativitätsheuristik',
    en: 'Representativeness Heuristic',
  },
  description: {
    de: 'Wahrscheinlichkeiten werden danach beurteilt, wie ähnlich ein Einzelfall dem typischen Bild (Prototyp) einer Kategorie ist — „passt genau ins Bild" ersetzt die Frage, wie häufig die Kategorie tatsächlich vorkommt (Basisrate).',
    en: 'Judging how likely something is by how closely it matches the mental prototype of a category — "it fits the profile" stands in for the question of how common that category actually is (the base rate).',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Krisenstab-Call nach einem anonymen Leak vertraulicher Zahlen an eine Wirtschaftsredaktion: Der Vertriebsvorstand erklärt der Kommunikationsleiterin: „Das war jemand aus der IT — Einzelgänger, Nachtschichten, Adminrechte, das passt exakt ins Täterbild." Dass laut dem eigenen Sicherheitsbericht die weitaus meisten Datenabflüsse im Haus auf versehentliche Weitergaben durch Führungskräfte zurückgingen, spielt in seiner Lagebewertung keine Rolle.',
    'Content-Planning einer Agentur: Die Kreativdirektorin präsentiert dem Kundenberater das Kampagnenvideo mit den Worten: „Haustier, Plot-Twist, unter 20 Sekunden — das hat alles, was die großen viralen Cases hatten. Das geht durch die Decke." Wie verschwindend klein der Anteil der Videos mit genau diesen Merkmalen ist, der je viral ging, kommt in der Reichweitenprognose nicht vor.',
    'Hintergrundgespräch zur Krisenprävention: Der externe Berater beruhigt die Geschäftsführerin eines Familienbetriebs: „Ein Shitstorm-Risiko sehe ich bei Ihnen nicht — so etwas trifft arrogante Konzerne, Sie sind der sympathische Mittelständler von nebenan." Das Risiko wird an der Ähnlichkeit zum typischen Shitstorm-Opfer bemessen, nicht daran, wie oft es Unternehmen dieser Größe tatsächlich trifft.',
  ],
  evidence: {
    studies: [
      'Tversky et al. (1974) - Judgment under Uncertainty: Heuristics and Biases'
    ],
    findings: 'Tversky und Kahneman (1974) beschreiben die Repräsentativitätsheuristik anhand von Urteilsexperimenten, in denen Versuchspersonen die Wahrscheinlichkeit einer Kategorienzugehörigkeit nach der Ähnlichkeit zum Prototyp schätzten und vorgegebene Basisraten dabei weitgehend ignorierten (klassisch im Ingenieur-Jurist-Paradigma). Der Grundeffekt ist vielfach repliziert; wie stark Basisraten vernachlässigt werden, hängt allerdings deutlich von Aufgabenformat und Kontext ab, und die klassischen Befunde stammen überwiegend aus WEIRD-Stichproben (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Klassische Urteilsexperimente, vielfach repliziert',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['availability_heuristic', 'confirmation_bias'],
  warningNeurons: [
    '„Passt genau ins Bild"-Argumente: Ein Einzelfall wird einer Kategorie zugeordnet, weil er dem typischen Vertreter ähnelt',
    'Wahrscheinlichkeits- oder Risikoaussagen ganz ohne Häufigkeitsdaten — wie oft die Kategorie überhaupt vorkommt, fragt niemand',
    'Je detaillierter und stimmiger das gezeichnete Szenario, desto wahrscheinlicher wirkt es — obwohl jedes Zusatzdetail es objektiv unwahrscheinlicher macht',
    'Statistisch häufige, aber untypisch wirkende Erklärungen werden vorschnell verworfen („sieht nicht danach aus")',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
