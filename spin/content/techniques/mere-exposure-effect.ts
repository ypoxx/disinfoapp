import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: mere_exposure_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const mereExposureEffect: Technique = {
  id: 'mere_exposure_effect',
  name: {
    de: 'Mere-Exposure-Effekt',
    en: 'Mere-Exposure Effect',
  },
  description: {
    de: 'Bloße wiederholte Wahrnehmung eines zunächst neutralen Reizes — Name, Logo, Gesicht, Melodie — erhöht dessen Vertrautheit und damit die Sympathie, ganz ohne neues Argument oder inhaltliche Aussage.',
    en: 'Merely perceiving an initially neutral stimulus — a name, logo, face or tune — over and over raises its familiarity and, with it, how much people like it, without any new argument or content.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Mediaplanung einer Konsumgütermarke: Die Markenverantwortliche bucht bewusst kurze, inhaltsleere Logo-Einblendungen (nur Schriftzug, keine Botschaft) in hoher Frequenz vor Sport-Livestreams — nicht um etwas zu behaupten, sondern damit die noch unbekannte Marke dem Publikum nach Wochen vertraut und dadurch sympathischer vorkommt.',
    'Neukundengewinnung im B2B: Der Vertriebsmanager sorgt dafür, dem Einkaufsteam des Zielkunden über Monate immer wieder kurz zu begegnen — Branchenfrühstück, Messestand, LinkedIn-Feed — ohne dabei zu verkaufen, allein damit sein Gesicht dem Team vertraut wird und er beim späteren Pitch als „bekannter", sympathischer Ansprechpartner wahrgenommen wird.',
    'Interne Kommunikation vor einer Vorstandswahl im Branchenverband: Der Wahlkampfmanager platziert Porträtfoto und Namen einer noch unbekannten Kandidatin wochenlang in jedem Newsletter-Header und auf jedem Veranstaltungsplakat — ohne inhaltliche Aussage —, damit die Mitglieder ihren Anblick als vertraut und angenehm empfinden, bevor sie ihr Programm überhaupt kennen.',
  ],
  evidence: {
    studies: [
      'Zajonc (1968) - Attitudinal effects of mere exposure',
      'Montoya et al. (2017) - A re-examination of the mere exposure effect: The influence of repeated exposure on recognition, familiarity, and liking'
    ],
    findings: 'Zajonc (1968) und die Meta-Analyse von Montoya et al. (2017) stützen, dass die bloße wiederholte Wahrnehmung eines zunächst neutralen Reizes dessen Sympathiebewertung erhöhen kann. Der Effekt ist klein bis mittel (r ≈ 0,26) und stark moderiert: Er folgt einer umgekehrten U-Kurve — zu häufige Wiederholung kippt in Übersättigung — und hängt von Reiztyp und Komplexität ab. Die Befunde stammen überwiegend aus westlichen Laborstichproben; die Übertragbarkeit auf reale Kampagnen ist begrenzt (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Meta-Analyse über zahlreiche Laborstudien (überwiegend westliche Stichproben)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['repetition', 'liking'],
  warningNeurons: [
    'Ein neutraler Reiz — Logo, Name, Gesicht, Melodie — taucht auffällig häufig auf, ohne je eine inhaltliche Aussage zu machen',
    'Sympathie oder Vertrautheit wächst, obwohl du kein neues Argument und keinen neuen Beleg gehört hast',
    'Die Frequenz der Einblendung, nicht ihr Inhalt, ist der eigentliche Zweck der Platzierung',
    '„Kennt man doch" oder „wirkt irgendwie vertraut" ist der einzige Grund, den du für eine positive Bewertung findest',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
