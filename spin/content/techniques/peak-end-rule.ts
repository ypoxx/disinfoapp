import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: peak_end_rule).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const peakEndRule: Technique = {
  id: 'peak_end_rule',
  name: {
    de: 'Peak-End-Regel',
    en: 'Peak-End Rule',
  },
  description: {
    de: 'Ein Erlebnis wird rückblickend nach seinem intensivsten Moment (Peak) und seinem Ende bewertet — nicht nach Summe oder Durchschnitt. Ein starker Schluss oder ein einzelner Höhepunkt prägt die Erinnerung stärker als der lange Verlauf dazwischen.',
    en: 'A past experience is judged in hindsight by its most intense moment (the peak) and by how it ended — not by the sum or average of the whole. A strong finish or a single high point shapes the memory more than everything in between.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Debriefing nach einem Kundenevent: Die Eventmanagerin erklärt dem Marketingleiter, warum das Programm trotz zäher Vormittags-Panels bewusst mit einer emotionalen Keynote und einem Überraschungs-Give-away schließt — woran sich die Gäste morgen erinnern, entscheide die letzte halbe Stunde, nicht der Durchschnitt des Tages.',
    'Prozess-Review im Kundenservice: Die Teamleiterin instruiert die Hotline, jedes schwierige Gespräch mit einer verbindlichen Lösungszusage und einem persönlichen Dank zu beenden — der Verlauf davor sei mühsam, doch die spätere Weiterempfehlung hänge am intensivsten Moment und am Schluss.',
    'Retrospektive nach einem holprigen Software-Rollout: Der Kommunikationschef plant die Mitarbeiter-Townhall so, dass sie mit dem einen echten Quartalserfolg als Höhepunkt und einem starken Ausblick endet — die wochenlangen Pannen dazwischen sollen in der Erinnerung nicht das Bild bestimmen.',
  ],
  evidence: {
    studies: [
      'Kahneman et al. (1993) - When More Pain Is Preferred to Less: Adding a Better End'
    ],
    findings: 'Kahneman und Kollegen (1993) zeigten im Kaltwasser-Experiment (Cold-Pressor-Test), dass die rückblickende Bewertung stark vom intensivsten Moment (Peak) und vom Ende abhängt, während die Dauer kaum ins Gewicht fällt („Duration Neglect"): Probanden bevorzugten eine längere, aber milder endende Prozedur. Der Befund gilt als klassisch und wurde repliziert, stammt aber aus einer Laborstudie mit westlicher Stichprobe; Effektgröße und Übertragbarkeit auf komplexe Kommunikationssituationen sind kontextabhängig (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Ein Laborexperiment (Kaltwasser-/Cold-Pressor-Studie)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['availability_heuristic', 'anchoring', 'emotional_appeal'],
  warningNeurons: [
    'Ein bewusst inszenierter Schlussmoment (Standing Ovation, Give-away, „Big Reveal") prägt die Bewertung stärker als der Inhalt davor',
    'Ein einzelner emotionaler Höhepunkt überstrahlt in der Erinnerung einen langen, durchwachsenen Verlauf',
    'Dauer und Summe des Erlebnisses werden kaum gewichtet („war doch super") trotz langer Durststrecke',
    'Das Gesamturteil kippt je nachdem, wie das Erlebnis endete — nicht danach, was insgesamt passierte',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
