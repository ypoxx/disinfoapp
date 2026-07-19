import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: false_cause_post_hoc).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const falseCausePostHoc: Technique = {
  id: 'false_cause_post_hoc',
  name: {
    de: 'Falsche Kausalität (Post hoc)',
    en: 'False Cause (Post Hoc)',
  },
  description: {
    de: 'Aus einer bloßen zeitlichen Abfolge oder Korrelation wird eine Ursache-Wirkung-Beziehung behauptet, obwohl Zufall, umgekehrte Wirkrichtung oder eine gemeinsame dritte Ursache genauso plausibel sind (post hoc ergo propter hoc — „danach, also deswegen").',
    en: 'Presenting a mere temporal sequence or correlation as proof of cause and effect, although coincidence, reverse causation, or a shared third driver are just as plausible (post hoc ergo propter hoc — "after it, therefore because of it").',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Quartals-Business-Review vor der Geschäftsführung: Der Vertriebsleiter verkauft die neue Provisionsregel als Erfolg — „Wir haben sie im April eingeführt, seither ist der Umsatz um zwölf Prozent gestiegen, sie wirkt also." Dass im selben Quartal ein großer Wettbewerber den Markt verließ, erwähnt er nicht.',
    'LinkedIn-Namensbeitrag einer Agenturchefin: „Unternehmen mit eigenem Podcast wachsen im Schnitt schneller — wer bis heute keinen hat, verschenkt Wachstum." Dass ohnehin wachstumsstarke Firmen sich einen Podcast eher leisten und leisten wollen, bleibt unerwähnt.',
    'Townhall nach einem Reorg: Die Personalchefin führt die gesunkene Krankenquote auf das neue Wellbeing-Programm zurück — „Seit dem Start im Herbst sind die Fehltage um ein Fünftel gefallen." Dass die Grippewelle des Vorjahres ausblieb und der Winter mild war, lässt sie beiseite.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) — Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Post hoc / false cause ist in der Logik- und Argumentationstheorie (SEP, Walton) als informeller Fehlschluss gut katalogisiert: Der Schluss von Reihenfolge oder Korrelation auf Kausalität ist formal nicht gedeckt. Wie stark ein solcher Kausal-Kurzschluss tatsächlich überzeugt, ist jedoch nicht generell quantifiziert und stark kontextabhängig; die Belege sind hier begrenzt (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine belastbare Wirkungsquantifizierung (taxonomisch geerdet)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['cherry_picking', 'confirmation_bias'],
  warningNeurons: [
    'Eine zeitliche Abfolge trägt die ganze Beweislast („seit/nachdem … , deshalb …") — je enger der Abstand, desto zwingender soll sie wirken',
    'Genau eine Ursache wird genannt; Zufall, Saison, umgekehrte Wirkrichtung oder ein gemeinsamer Dritttreiber werden nicht ausgeschlossen',
    'Korrelation oder Reihenfolge steht da, aber kein plausibler Wirkmechanismus, der beides verbindet',
    'Kein Vergleich ohne die Maßnahme (Kontrollgruppe, Vorjahr, andere Einheiten), an dem sich der Effekt prüfen ließe',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
