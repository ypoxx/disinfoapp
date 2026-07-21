import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: groupthink).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 *
 * evidenceTier 'weak': Evidenz umstritten (Baron 2005) — keine starken
 * Wirkbehauptungen. Kein seriousMode (Kategorie social_dynamics, generell
 * legal, dual-use), daher doppelter Takeaway: legitim einsetzen UND erkennen.
 */
export const groupthink: Technique = {
  id: 'groupthink',
  name: {
    de: 'Groupthink (Konsensdruck)',
    en: 'Groupthink (Manufactured Consensus)',
  },
  description: {
    de: 'Konformitäts- und Konsensdruck in einer Entscheidungsgruppe unterdrückt Zweifel und kritische Prüfung: Abweichende zensieren sich selbst oder werden als illoyal markiert, bis eine Illusion der Einmütigkeit entsteht — als Steuerungstechnik durch künstlich erzeugte Geschlossenheit.',
    en: 'Conformity and consensus pressure inside a decision-making group suppresses doubt and critical scrutiny: dissenters self-censor or get branded disloyal until an illusion of unanimity forms — wielded as a steering technique through manufactured cohesion.',
  },
  category: 'social_dynamics',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Strategie-Offsite eines Mittelständlers: Der Geschäftsführer eröffnet die Runde der Bereichsleiter mit „Wir ziehen die Übernahme durch, da sind wir uns doch alle einig — reißen wir das jetzt nicht wieder auf." Ein Bereichsleiter mit einer kritischen Due-Diligence-Notiz sieht die reihum nickenden Kollegen, schweigt und legt seine Bedenken nicht vor; das Protokoll vermerkt einen einstimmigen Beschluss.',
    'Internes Creative-Review in einer Agentur: Die Teamleiterin rahmt das Kampagnenkonzept als „im Grunde entschieden, der Kunde liebt es". Als eine Texterin ein Reputationsrisiko anspricht, fällt die Runde rasch in einstimmiges „passt schon, machen wir so" zurück; niemand greift den Einwand inhaltlich auf. Sie liest die geschlossene Stimmung, zieht ihren Punkt zurück, und das Risiko wird nirgends festgehalten.',
    'Krisen-Taskforce im firmeninternen Slack-Kanal: Nachdem die Geschäftsführung eine Antwortlinie vorgegeben hat, quittieren Mitglieder, die vorab schriftlich zweifelten, mit „+1" und Daumen-hoch; der Entwurf eines Warnhinweises wird vor der Sitzung still gelöscht. Nach außen wirkt die Taskforce geschlossen, die Bedenken laufen nur noch als Direktnachricht.',
  ],
  evidence: {
    studies: [
      'Janis (1972) - Victims of Groupthink: A Psychological Study of Foreign-Policy Decisions and Fiascoes',
      'Baron (2005) - So Right It\'s Wrong: Groupthink and the Ubiquitous Nature of Polarized Group Decision Making'
    ],
    findings: 'Janis (1972) beschreibt anhand von Fallstudien, wie Konsens- und Konformitätsdruck in kohäsiven Gruppen zu Selbstzensur, einer Illusion der Einmütigkeit und ausbleibender kritischer Prüfung führen kann. Die spezifischen Antezedenzien des Modells sind empirisch jedoch schwer zu bestätigen und gelten als umstritten (Baron 2005). Die Belege stammen überwiegend aus retrospektiven Fallanalysen statt aus kontrollierten Studien; entsprechend niedrig ist die Konfidenz (schwache, bestrittene Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Retrospektive Fallstudien; keine belastbaren Antezedenzien',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'unity_identity', 'sycophancy'],
  warningNeurons: [
    '„Wir sind uns doch alle einig" als Schlussformel, bevor Einwände überhaupt gehört wurden',
    'Abweichende Stimmen werden als illoyal oder störend markiert, nicht inhaltlich beantwortet',
    'Sichtbare Einmütigkeit nach außen, während Zweifel nur noch privat geäußert werden (Flurgespräch, DM)',
    'Kritische Prüfung wird mit Zeitdruck oder Harmonie abgewürgt („Reißen wir das jetzt nicht wieder auf")',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
