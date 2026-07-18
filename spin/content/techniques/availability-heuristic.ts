import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) — Taxonomie 21.0.1, Knoten: availability_heuristic.
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt.
 * Es gilt Overlay-Schutz.
 */
export const availabilityHeuristic: Technique = {
  id: 'availability_heuristic',
  name: {
    de: 'Verfügbarkeitsheuristik',
    en: 'Availability Heuristic',
  },
  description: {
    de: 'Wie leicht Beispiele im Gedächtnis abrufbar sind, bestimmt, wie häufig oder wahrscheinlich etwas erscheint. Wer einen dramatischen Einzelfall präsent macht, lässt ein seltenes Risiko groß wirken — ganz ohne Zahlen, allein über die Erinnerbarkeit.',
    en: 'How easily examples come to mind is what drives judgments of frequency and likelihood. Keep one dramatic case salient and a rare risk starts to look common — no numbers required, recall alone does the work.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Krisenstab per Videokonferenz, Geschäftsführer → Kommunikationsteam: Nach dem wochenlang berichteten Shitstorm eines Wettbewerbers verlangt er, künftig jede Kundenbeschwerde wie eine drohende Eskalation zu behandeln — der eine präsente Fall lässt ihn das Ereignis für weit wahrscheinlicher halten, als die eigene Beschwerdestatistik hergibt.',
    'Agentur-Pitch beim Neukunden, Beraterin → Marketingleitung: Statt Marktzahlen spielt sie den viralen Clip ein, der im Frühjahr einer bekannten Marke wochenlang die Schlagzeilen füllte, und lässt ihn ausklingen mit: "So etwas ist heute für jede Marke jederzeit drin" — der eine, lebhaft präsente Fall soll das Krisenrisiko allgegenwärtig wirken lassen und das Monitoring-Paket der Agentur verkaufen; wie oft es Marken dieser Größe tatsächlich trifft, bleibt ungenannt.',
    'Hintergrundgespräch zur IT-Sicherheit, Fachjournalistin → Pressesprecher: Sie hält ihm das Datenleck eines Branchennachbarn vor, das gerade die Schlagzeilen dominiert, und fragt, warum sein Haus "ein derart häufiges Risiko" nicht stärker absichere — die präsente Berichterstattung hat aus einem statistisch seltenen Ereignis gefühlt ein alltägliches gemacht.',
  ],
  evidence: {
    studies: [
      'Tversky et al. (1973) - Availability: A Heuristic for Judging Frequency and Probability'
    ],
    findings: 'Der Grundeffekt geht auf Tversky & Kahneman (1973) zurück und ist vielfach repliziert: Was leichter erinnert wird, wird als häufiger und wahrscheinlicher eingeschätzt. Effektgröße und Robustheit sind jedoch stark kontextabhängig, und die Befunde stammen überwiegend aus WEIRD-Stichproben (westlich, gebildet, industrialisiert, reich, demokratisch). Wie stark der Effekt in konkreten Kommunikationssituationen trägt, ist damit nur moderat belegt — er ist ein verlässlich nachweisbarer Hebel, kein Selbstläufer.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['anchoring', 'agenda_setting', 'illusory_truth_effect'],
  warningNeurons: [
    'Ein einzelner, detailreich erzählter Fall ersetzt jede Häufigkeitsangabe ("Denk nur an…", "Sie erinnern sich an…")',
    'Risikoaussagen stützen sich auf frische Schlagzeilen statt auf Basisraten oder eigene Daten',
    'Je bildhafter und dramatischer das Beispiel, desto größer die behauptete Wahrscheinlichkeit',
    'Auf die Frage nach Zahlen folgt die nächste Anekdote statt einer Statistik',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
