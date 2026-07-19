import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: conspiracy_theory_narratives).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const conspiracyTheoryNarratives: Technique = {
  id: 'conspiracy_theory_narratives',
  name: {
    de: 'Verschwörungsnarrative',
    en: 'Conspiracy Theory Narratives',
  },
  description: {
    de: 'Ein Ereignis wird als geheimer, koordinierter und böswilliger Plan einer mächtigen Gruppe erklärt — meist unwiderlegbar angelegt: Gegenbeweise gelten als Teil der Vertuschung, Zweifler als naiv oder mitverstrickt.',
    en: 'Framing an event as the secret, coordinated and malevolent scheme of a powerful group — typically built to be unfalsifiable: counter-evidence is recast as part of the cover-up, and doubters as naive or complicit.',
  },
  category: 'emotional_manipulation',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Interne Mitarbeiterversammlung nach einer verlorenen Ausschreibung: Der Vertriebschef erklärt der Belegschaft, der Zuschlag an den Wettbewerber sei kein Zufall — Vergabestelle, Konkurrent und ein Branchenmedium hätten das seit Monaten hinter den Kulissen abgestimmt, um uns gezielt aus dem Markt zu drängen. Dass es dafür keinen einzigen Beleg gebe, zeige nur, wie professionell die Sache eingefädelt wurde.',
    'Podcast-Auftritt der Gründerin eines Nahrungsergänzungs-Startups: Auf die kritische Nachfrage des Hosts zu einer laufenden Behördenprüfung antwortet sie, das Verfahren sei bestellt — Pharmakonzerne, die Aufsichtsbehörde und die etablierte Presse zögen im Verborgenen an einem Strang, um ihr Produkt vom Markt fernzuhalten. Je lauter die Kritik, desto klarer sei, dass man ihr auf die Spur gekommen sei.',
    'Hintergrundgespräch eines Verbandsvertreters mit einer Fachjournalistin zu einer neuen Lieferketten-Regulierung: Er stellt das Gesetz als abgestimmtes Manöver dar — eine kleine, global vernetzte Gruppe aus NGOs und Beamten habe die Regeln bewusst so entworfen, um den Mittelstand auszuschalten; die offiziellen Begründungen seien bloß Fassade. Nachweise verlangt er nicht, denn die eigentlichen Absprachen liefen ohnehin im Verborgenen.',
  ],
  evidence: {
    studies: [
      'Douglas, Sutton & Cichocka (2017) - The Psychology of Conspiracy Theories',
    ],
    findings: 'Douglas, Sutton & Cichocka (2017) systematisieren in einem Review, dass Verschwörungsglaube aus epistemischen (Erklärungsbedürfnis), existenziellen (Kontroll- und Sicherheitsgefühl) und sozialen Motiven (Aufwertung der eigenen Gruppe) gespeist wird und sich Korrekturen hartnäckig widersetzt, weil Gegenbelege in die Erzählung eingebaut werden. Es handelt sich um eine Übersichtsarbeit ohne einheitliche Effektstärke; die Befunde stammen überwiegend aus westlichen Stichproben und sind stark kontextabhängig (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Review der Psychologie des Verschwörungsglaubens (keine einheitliche Effektstärke)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['narrative_persuasion', 'scapegoating_othering', 'false_cause_post_hoc'],
  warningNeurons: [
    'Ein komplexes Ereignis wird als geheimer, abgestimmter Plan mehrerer mächtiger Akteure erklärt — mit klarer böser Absicht, aber ohne offengelegten Mechanismus',
    'Das Fehlen von Belegen gilt selbst als Beweis: je weniger Spuren, desto perfekter die Vertuschung — die Behauptung ist so nicht widerlegbar',
    'Gegenargumente und ihre Urheber werden Teil der Verschwörung erklärt („die sind gekauft / naiv / stecken mit drin")',
    'Zufall, Eigeninteresse und strukturelle Ursachen kommen als Erklärung nicht vor; alles läuft angeblich bei einer verborgenen Elite zusammen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
