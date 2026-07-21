import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) (Taxonomie 21.0.1, Knoten: agenda_setting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const agendaSetting: Technique = {
  id: 'agenda_setting',
  name: {
    de: 'Themensetzung (Agenda Setting)',
    en: 'Agenda Setting',
  },
  description: {
    de: 'Steuerung darüber, welche Themen überhaupt als wichtig wahrgenommen werden (Salienz) — durch Auswahl, Platzierung und Dauerpräsenz, nicht durch Argumente. Bestimmt wird, worüber nachgedacht wird, nicht was gedacht wird.',
    en: 'Steering which issues people come to see as important (salience) — through selection, placement, and sustained presence rather than argument. It shapes what gets thought about, not what is thought.',
  },
  category: 'digital_influence',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Verbandssprecher → Fachredaktion, laufende Medienarbeit: Ein Branchenverband liefert einer Fachzeitschrift über Monate wöchentlich Studien, Zahlen und O-Töne zum Fachkräftemangel. Das Thema rückt immer öfter auf die Titelseite — und gilt in der Branche bald als das drängendste Problem, obwohl sich die Faktenlage kaum verändert hat.',
    'Kommunikationschefin → Belegschaft, interne Kommunikation (Intranet und Townhall): Drei Quartale in Folge setzt sie "KI-Kompetenz" als Top-Meldung ins Intranet und als ersten Punkt auf jede Townhall-Agenda — inhaltlich gibt es kaum Neues, nur Platzierung und Frequenz ändern sich. In der nächsten Mitarbeiterbefragung rangiert KI als wichtigstes Zukunftsthema des Unternehmens, während der nie behandelte Standortumbau aus der Themenliste fast verschwindet.',
    'Agentur → Vorstand, Pitch zur Hauptversammlung: Die Agentur empfiehlt, in den Wochen vor der HV ausschließlich Interviews, Gastbeiträge und LinkedIn-Posts zum Thema Lieferketten-Resilienz zu takten. Analysten und Wirtschaftspresse übernehmen das Thema als zentrale Bewertungsfrage des Unternehmens.',
  ],
  evidence: {
    studies: [
      'McCombs et al. (1972) - The Agenda-Setting Function of Mass Media',
      'Luo et al. (2019) - A Meta-Analysis of News Media\'s Public Agenda-Setting Effects, 1972-2015'
    ],
    findings: 'Die Chapel-Hill-Studie (McCombs & Shaw 1972) zeigt eine starke Korrelation zwischen Medien- und Publikumsagenda; eine Meta-Analyse über 1972–2015 (Luo et al. 2019) bestätigt die breite Replikation dieses Salienz-Effekts. Die Evidenz ist korrelational und betrifft die wahrgenommene Wichtigkeit von Themen, nicht die Meinungsrichtung. Die Effektstärke hängt deutlich vom Orientierungsbedürfnis des Publikums, von der Themenart und von der Mediennutzung ab.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Meta-Analyse über 40+ Jahre Agenda-Setting-Forschung (Luo et al. 2019)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['framing', 'priming', 'repetition'],
  warningNeurons: [
    'Ein Thema ist über Wochen dauerpräsent, ohne dass sich die Faktenlage ändert',
    'Wichtigkeit entsteht durch Platzierung und Frequenz, nicht durch neue Argumente',
    'Systematische Leerstellen: naheliegende Gegenthemen kommen schlicht nicht vor',
    'Getaktete Themen-Pipelines vor Schlüsselterminen (Bilanz, HV, Tarifrunde, Wahl)',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
