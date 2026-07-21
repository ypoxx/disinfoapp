import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: loaded_question).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const loadedQuestion: Technique = {
  id: 'loaded_question',
  name: {
    de: 'Fangfrage (unterstellende Frage)',
    en: 'Loaded Question (Complex Question)',
  },
  description: {
    de: 'Eine Frage behandelt eine strittige oder unbewiesene Annahme als bereits feststehend: Wer antwortet, bestätigt die eingebaute Unterstellung mit — ob er nun mit Ja oder mit Nein reagiert. Der Lehrbuchfall: „Haben Sie aufgehört, Ihre Zahlen zu schönen?"',
    en: 'A question that treats a disputed or unproven assumption as already settled: whoever answers concedes the built-in premise — whether they say yes or no. The textbook case: "Have you stopped window-dressing your figures?"',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Bilanzpressekonferenz eines Industriekonzerns: Ein Wirtschaftsjournalist richtet an den Finanzvorstand die Frage: „Wann hört Ihr Haus endlich auf, die Rückstellungen kleinzurechnen?" Dass überhaupt kleingerechnet wird, ist an keiner Stelle belegt — die Frage setzt es als feststehend voraus, sodass jede Antwort den Vorwurf mitträgt.',
    'Interne Townhall nach Umbaugerüchten: Eine Mitarbeiterin fragt die Personalchefin von der Bühne: „Warum verschweigen Sie uns den längst beschlossenen Stellenabbau?" Ob ein Abbau beschlossen ist, steht gar nicht fest; ein Ja wie ein Nein bestätigt die Unterstellung, es gebe einen.',
    'Podiumsdiskussion zu Influencer-Marketing: Die Moderatorin fragt die Agenturchefin vor Publikum: „Seit wann kaufen Sie die Reichweite Ihrer Kampagnen mit Fake-Followern ein?" Dass überhaupt Fake-Follower im Spiel sind, ist nie zugestanden — die Frage behandelt es bereits als erwiesen.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Die Fangfrage ist als informeller Fehlschluss („complex question" / „plurium interrogationum") in Logik und Rhetorik gut beschrieben (Hansen 2015, SEP; Walton). Belegt ist damit das Muster — eine unbewiesene Voraussetzung, die im Frageformat mitläuft —, nicht eine allgemein quantifizierte Wirkung. Wie stark eine unterstellende Frage tatsächlich überzeugt oder Zustimmung erzeugt, ist empirisch nicht durchgängig gemessen (schwache Evidenz, stark kontextabhängig).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine Wirkungsstudien; taxonomisch/logisch belegt',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['false_dichotomy', 'straw_man'],
  warningNeurons: [
    'Die Frage enthält eine Behauptung, die nie belegt oder zugestanden wurde („Warum verschweigt Ihr Vorstand …?")',
    'Egal ob du mit Ja oder Nein antwortest — die Unterstellung gilt danach als bestätigt',
    'Ein wertendes Wort steckt fest in der Frage („schönen", „vertuschen", „endlich", „immer noch")',
    'Die eigentliche Streitfrage wird übersprungen und als längst geklärt vorausgesetzt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
