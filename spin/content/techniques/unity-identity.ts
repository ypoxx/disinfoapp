import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: unity_identity).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const unityIdentity: Technique = {
  id: 'unity_identity',
  name: {
    de: 'Unity / Identitäts-Appell',
    en: 'Unity / Identity Appeal',
  },
  description: {
    de: 'Einfluss über geteilte Identität: Die Botschaft aktiviert ein gemeinsames „Wir" — Berufsstand, Region, das Unternehmen als „Familie" —, sodass Zustimmung wie Loyalität zur eigenen Gruppe wirkt und Widerspruch wie ein Ausscheren. Der Hebel ist reklamierte Mitgliedschaft, nicht die Zahl der Zustimmenden.',
    en: 'Influence through shared identity: the message activates a common "we" — the profession, the region, the company as "family" — so that agreeing feels like loyalty to one\'s own group and pushing back feels like breaking ranks. The lever is claimed membership, not how many others agree.',
  },
  category: 'social_dynamics',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Keynote auf dem Branchenkongress: Der Vertriebsleiter eines Freigabe-Tools eröffnet vor versammelten Pressesprechern mit „Wir Kommunikatoren wissen doch, wie zäh Abstimmungsschleifen sind" — als Anbieter gehört er der Zunft gar nicht an, aber das „Wir" macht sein Produkt zum Vorschlag aus den eigenen Reihen.',
    'Townhall zum Sparprogramm: Der CEO rahmt die Einschnitte gegenüber der Belegschaft mit „Wir sind eine Familie, und eine Familie steht so etwas gemeinsam durch — wer jetzt nur auf den eigenen Bereich schaut, stellt sich außerhalb". Die reklamierte Mitgliedschaft in der „Familie" macht Zustimmung zur Loyalitätsfrage: Kritische Nachfragen zu den Kürzungen erscheinen als Ausscheren aus dem „Wir", nicht als berechtigte Sachfrage.',
    'Kaltakquise per LinkedIn-Nachricht: Eine Beraterin schreibt dem Kommunikationschef eines Versicherers „Als Ex-Sprecherin weiß ich, wie es auf Ihrer Seite des Tisches aussieht — wir Sprecher ticken anders als klassische Berater". Die geteilte Berufsbiografie soll den Termin sichern, bevor über die Leistung gesprochen wurde.',
  ],
  evidence: {
    studies: [
      'Cialdini (1984) - Influence: The Psychology of Persuasion'
    ],
    findings: 'Die Annahme geht auf Cialdinis siebtes Prinzip „Unity" zurück: Botschaften sollen stärker wirken, wenn Sender und Empfänger eine gemeinsame Identität teilen. Der Beleg stammt primär aus Praxis- und Theoriewerken und nur indirekt aus der Forschung zu In-Group-Dynamik; Effektgrößen sind kontextabhängig, nicht durchgängig quantifiziert, gezielte Replikationen stehen aus. Die vorhandenen Befunde beruhen zudem überwiegend auf westlichen Stichproben — die Konfidenz ist entsprechend niedrig.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine systematische Studienbasis; primär Theorie-/Praxiswerk mit indirekten Einzelbefunden',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'liking'],
  warningNeurons: [
    '„Wir"-Rahmung unmittelbar vor einer Bitte, einem Angebot oder einer Zumutung',
    'Betonte Gruppenzugehörigkeit (Zunft, Region, „Familie"), die zur Sachfrage nichts beiträgt',
    'Zustimmung wird als Loyalität gerahmt — Widerspruch damit implizit als Verrat an der Gruppe',
    'Der Absender reklamiert Mitgliedschaft in deiner Gruppe, obwohl er ihr erkennbar nicht angehört',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
