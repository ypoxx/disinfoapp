import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: appeal_to_tradition).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const appealToTradition: Technique = {
  id: 'appeal_to_tradition',
  name: {
    de: 'Traditionsargument (Ad antiquitatem)',
    en: 'Appeal to Tradition',
  },
  description: {
    de: 'Etwas gilt als richtig, gut oder geboten, allein weil es lange üblich war oder „schon immer so" gemacht wurde — Alter und Herkommen treten an die Stelle des Sacharguments.',
    en: 'Treating something as right, good, or necessary simply because it is long-established or "the way it has always been done" — age and custom stand in for a substantive reason.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Strategie-Workshop zum Freigabeprozess: Auf den Vorschlag der Projektleiterin, Pressemitteilungen künftig digital freizugeben, entgegnet der Kommunikationschef vor dem Team: „Das läuft bei uns seit dreißig Jahren über den grünen Laufzettel, und weil wir es immer so gemacht haben, bleibt es auch dabei." Einen Sachgrund gegen das digitale Verfahren nennt er nicht.',
    'Kundentermin zur Rezeptur-Umstellung eines Getränkeherstellers: Der Marketingleiter wehrt den Modernisierungsvorschlag der Agentur ab: „Wir brauen nach demselben Rezept wie 1901 — was über hundert Jahre getragen hat, ändert man nicht." Ob die Rezeptur den heutigen Geschmack noch trifft, prüft er nicht.',
    'Hintergrundgespräch mit einer Fachjournalistin zur Reform der Hauptversammlung: Der Aufsichtsratsvorsitzende verteidigt die Präsenzpflicht: „Die Aktionäre kommen seit jeher persönlich zusammen — das ist gelebte Tradition, daran rütteln wir nicht." Sachgründe gegen ein digitales Format bleibt er schuldig.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Das Traditionsargument ist in der Argumentationstheorie als informeller Fehlschluss beschrieben und katalogisiert (SEP zu Fallacies, Hansen 2015; Walton): Aus dem Alter oder der Üblichkeit einer Praxis folgt logisch nicht ihre Richtigkeit. Eine durchgängige, quantifizierte Wirkungsevidenz — wie stark solche Appelle Einstellungen tatsächlich verschieben — liegt nicht vor; die Einordnung ist theoretisch-taxonomisch, nicht experimentell gesichert (geringe Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine Wirkungsstudien; taxonomische Einordnung',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['appeal_to_nature', 'default_status_quo'],
  warningNeurons: [
    'Das Alter oder die Dauer einer Praxis wird als Begründung angeführt („seit jeher", „schon immer so", „seit Generationen")',
    'Aus bloßer Langlebigkeit wird auf Bewährtheit geschlossen — ohne Ergebnis- oder Sachbeleg',
    'Der Änderungsvorschlag wird nicht inhaltlich widerlegt, sondern mit Verweis auf Herkunft und Brauch abgewehrt',
    'Emotionale Aufladung über Begriffe wie „Erbe", „gewachsen", „bei uns üblich"',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
