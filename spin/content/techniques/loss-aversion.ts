import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) — Taxonomie 21.0.1, Knoten: loss_aversion.
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt.
 * Es gilt Overlay-Schutz.
 */
export const lossAversion: Technique = {
  id: 'loss_aversion',
  name: {
    de: 'Verlustaversion',
    en: 'Loss Aversion',
  },
  description: {
    de: 'Verluste wiegen subjektiv schwerer als gleich große Gewinne. Wer betont, was der Adressat zu verlieren droht — statt was er gewinnen könnte —, erzeugt deshalb mehr Handlungsdruck als das spiegelbildliche Gewinnversprechen.',
    en: 'Losses loom larger than equivalent gains. Stressing what the audience stands to lose — rather than what it might gain — therefore creates more pressure to act than the mirror-image promise of a gain.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Vertragsverlängerung im Agentur-Pitch, Agenturchefin → Marketingleiterin: Statt den Mehrwert der neuen Laufzeit zu rechnen, listet sie auf, was beim Wechsel wegfiele — eingespieltes Team, aufgebautes Themenwissen, gewachsene Redaktionskontakte.',
    'Intranet-Beitrag zur CRM-Umstellung, Projektleiter → Belegschaft: Die Botschaft führt nicht mit den neuen Funktionen, sondern mit dem drohenden Verlust: "Wer nicht bis Quartalsende migriert, verliert den Zugriff auf seine gespeicherten Kundenauswertungen."',
    'Redaktionsverhandlung am Telefon, Pressesprecher → Ressortleiterin: Statt den Nachrichtenwert des angebotenen Interviews herauszustellen, erinnert er daran, was die Redaktion zu verlieren droht — den über Jahre aufgebauten bevorzugten Zugang zum Vorstand.',
  ],
  evidence: {
    studies: [
      'Kahneman & Tversky (1979) - Prospect Theory: An Analysis of Decision under Risk'
    ],
    findings: 'Der Grundeffekt geht auf die Prospect Theory zurück (Kahneman & Tversky, 1979) und ist vielfach repliziert. Effektgröße und Robustheit sind jedoch stark kontextabhängig: Die oft zitierte Faustregel, Verluste wögen etwa doppelt so schwer wie Gewinne, gilt nicht universell, und die Befunde stammen überwiegend aus WEIRD-Stichproben (westlich, gebildet, industrialisiert, wohlhabend, demokratisch). Für Kommunikationssituationen ist der Effekt daher als moderat einzuschätzen, nicht als feste Größe, mit der sich verlässlich planen ließe.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['framing', 'scarcity'],
  warningNeurons: [
    'Die Botschaft führt mit dem, was wegfallen könnte, statt mit dem, was hinzukommt',
    'Verlustvokabular ("verlieren", "aufgeben", "unwiderruflich") ohne die spiegelbildliche Gewinnrechnung',
    'Aufgebauter Besitzstand — Status, Daten, Kontakte, Vorteile — wird unmittelbar vor einer Entscheidung sichtbar gemacht',
    'Der drohende Verlust ist konstruiert oder übertrieben, obwohl die tatsächliche Bilanz der Entscheidung ausgewogen wäre',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
