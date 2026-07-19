import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: begging_the_question).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const beggingTheQuestion: Technique = {
  id: 'begging_the_question',
  name: {
    de: 'Zirkelschluss (Begging the Question)',
    en: 'Begging the Question (Circular Reasoning)',
  },
  description: {
    de: 'Die strittige Behauptung wird nicht belegt, sondern in einer der Prämissen bereits als wahr unterstellt — der Schluss dreht sich im Kreis, weil das zu Beweisende schon vorausgesetzt ist (petitio principii).',
    en: 'The contested claim is not supported but already taken as true within one of the premises — the argument turns in a circle, presupposing the very point it is meant to prove (petitio principii).',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Strategie-Offsite eines Softwarehauses: Auf die Frage des Beirats, warum die umstrittene Vertriebschefin unbedingt im Vorstand bleiben soll, antwortet der CEO: „Sie gehört in den Vorstand, weil sie eine geborene Führungspersönlichkeit ist — und dass sie eine geborene Führungspersönlichkeit ist, sieht man ja daran, dass sie im Vorstand sitzt."',
    'Agenturpräsentation vor dem Marketingteam eines Herstellers: Die Beraterin verteidigt den Claim „nachhaltigste Marke der Branche": „Wir sind die nachhaltigste Marke, weil unser Verfahren das umweltfreundlichste am Markt ist — und dass es das umweltfreundlichste ist, steht fest, weil wir eben als nachhaltigste Marke gelten."',
    'Hintergrundgespräch mit einer Fachjournalistin zur Datenqualität: Der Unternehmenssprecher erklärt: „Unsere Reichweitenzahlen sind verlässlich, weil sie aus unserem geprüften Messsystem stammen — und dass das System geprüft ist, wissen wir, weil es verlässliche Zahlen liefert."',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Der Zirkelschluss (petitio principii) ist in Logik und Argumentationstheorie fest etabliert und beschrieben (Hansen 2015/SEP; Walton). Er benennt eine strukturelle Eigenschaft des Arguments — die Prämisse setzt die Konklusion bereits voraus —, keine gemessene Überzeugungswirkung. Belastbare quantitative Evidenz dazu, wie stark oder unter welchen Bedingungen Zuhörer darauf hereinfallen, fehlt weitgehend (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine Wirkungsstudien (taxonomisch/logisch begründet)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['equivocation', 'false_dichotomy'],
  warningNeurons: [
    'Die Begründung wiederholt die Behauptung nur mit anderen Worten, statt sie unabhängig zu stützen',
    'Prämisse und Konklusion setzen einander wechselseitig voraus („A, weil B — und B, weil A")',
    'Der angebotene Beleg lässt sich nur akzeptieren, wenn man das Fazit bereits glaubt',
    'Dasselbe bewertende Schlüsselwort („seriös", „verlässlich", „führend") steht auf beiden Seiten des „weil"',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
