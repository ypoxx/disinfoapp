import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: red_herring).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const redHerring: Technique = {
  id: 'red_herring',
  name: {
    de: 'Red Herring (Ablenkung)',
    en: 'Red Herring',
  },
  description: {
    de: 'Ablenkung von der eigentlichen Frage durch ein neues, sachfremdes und oft emotional besetztes Nebenthema — der ursprüngliche Punkt wird nicht widerlegt, sondern unbeantwortet aus dem Blick gerückt.',
    en: 'Diverting from the actual question by introducing a new, off-topic and often emotionally charged side issue — the original point is never rebutted, just quietly left unanswered while attention moves elsewhere.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Bilanzpressekonferenz eines Maschinenbauers: Auf die Frage der Wirtschaftsjournalistin, warum die zugesagte Dividende ausgesetzt wird, antwortet der Vorstandssprecher mit einer ausführlichen Würdigung der 400 in der Region gesicherten Arbeitsplätze und des sozialen Engagements des Hauses — die Dividendenfrage bleibt unbeantwortet.',
    'Betriebsversammlung eines Logistikunternehmens: Der Betriebsrat fragt den Personalleiter, warum die zugesagte Gehaltsanpassung erneut verschoben wird. Er antwortet mit einer warmen Würdigung des „einzigartigen Teamgeists" und einer Einladung zum Sommerfest; die Frage nach der Anpassung stellt er nicht.',
    'Live-Q&A eines Mobilitäts-Startups auf LinkedIn: Auf die Nutzerfrage, warum das seit einem Jahr versprochene Feature erneut um sechs Monate verschoben wurde, verweist die Kommunikationsleiterin stolz auf den soeben gepflanzten 100.000sten Baum des firmeneigenen Klimaprogramms — die Verzögerung kommentiert sie nicht.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Red Herring ist in der Fehlschluss-Literatur als Argumentationsmuster beschrieben und taxonomisch verankert (Hansen 2015, SEP/Fallacies). Eine quantifizierte, verallgemeinerbare Persuasions- oder Verhaltenswirkung ist damit nicht belegt; ob und wie stark eine Ablenkung überzeugt, hängt stark von Publikum und Kontext ab. Der Eintrag wird daher als Begriffs- und Erkennungswissen geführt, nicht als belegter Wirkeffekt (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['straw_man', 'ad_hominem', 'agenda_setting'],
  warningNeurons: [
    'Die Antwort greift ein neues Thema auf, das mit der gestellten Frage sachlich nichts zu tun hat',
    'Der ursprüngliche Punkt wird nicht bestritten, sondern schlicht unbeantwortet zurückgelassen',
    'Das eingeführte Nebenthema ist sympathisch oder emotional besetzt (Werte, Region, Team), sodass Nachhaken kleinlich wirkt',
    'Auf die Nachfrage folgt das nächste Nebenthema statt einer Antwort auf die erste Frage',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
