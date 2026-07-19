import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: default_status_quo).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const defaultStatusQuo: Technique = {
  id: 'default_status_quo',
  name: {
    de: 'Default-/Status-quo-Effekt',
    en: 'Default / Status Quo Effect',
  },
  description: {
    de: 'Voreingestellte Optionen werden überproportional beibehalten: Die Voreinstellung wirkt wie eine implizite Empfehlung, und Nichtstun wird zur Entscheidung. Wer den Default setzt, entscheidet damit oft faktisch mit — ohne dass eine Option versteckt oder der Ausstieg erschwert wäre.',
    en: 'People disproportionately stick with whatever option is pre-selected: the default reads as an implicit recommendation, and doing nothing becomes a decision. Whoever sets the default often effectively decides — without hiding any option or making the exit hard.',
  },
  category: 'cognitive_bias',
  difficulty: 'beginner',
  effectiveness: 'high',
  examples: [
    'E-Mail des Key-Account-Managers an die Leiterin Unternehmenskommunikation, vier Wochen vor Vertragsende des Medienbeobachtungs-Tools: „Gute Nachricht: Ihr Vertrag verlängert sich automatisch um zwölf Monate — Sie müssen nichts weiter tun." Die Kündigung wäre formlos per E-Mail möglich, doch die Voreinstellung macht Nichtstun zur Verlängerung — eine aktive Prüfung des Tools findet nie statt.',
    'Online-Anmeldemaske eines Branchenkongresses, ausgefüllt vom Referenten der Pressestelle: Im Dropdown der Ausstellerpakete ist „Standard plus Medienpartnerschaft (zzgl. 1.900 €)" bereits vorausgewählt; die günstigere Basisvariante steht mit Preis sichtbar direkt darunter. Die meisten Anmelder übernehmen die Vorauswahl — sie wirkt wie die übliche, empfohlene Option.',
    'Rundmail der internen Kommunikation an alle Führungskräfte zum Start des neuen Intranets: Der wöchentliche Management-Digest ist für alle voraktiviert, ein Klick im Profil genügt zur Abbestellung. Ein halbes Jahr später meldet das Team dem Vorstand „93 Prozent Abonnentenquote" — als Beleg für die Akzeptanz des Formats.',
  ],
  evidence: {
    studies: [
      'Johnson et al. (2003) - Do Defaults Save Lives?'
    ],
    findings: 'Johnson & Goldstein (2003) zeigen im Ländervergleich zur Organspende, dass Opt-out-Voreinstellungen die erfassten Zustimmungsraten drastisch über das Niveau von Opt-in-Regelungen heben — ein vielfach replizierter, klassischer Grundeffekt. Wie groß der Effekt im Einzelfall ausfällt, hängt stark vom Kontext ab (Entscheidungsdomäne, Aufwand des Abwählens, Vertrauen in den Voreinstellenden); die Befunde stammen zudem überwiegend aus westlichen Stichproben (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Feld-/Länderdaten und Experimente (u. a. Organspende-Register)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['nudging'],
  warningNeurons: [
    '„Sie müssen nichts weiter tun" — Nichtstun führt zum Abschluss, nur der Ausstieg verlangt aktives Handeln',
    'Eine Option ist bereits vorausgewählt, ohne Begründung, warum gerade diese',
    'Zustimmungs- oder Nutzungsquoten aus Opt-out-Voreinstellungen werden als aktive Entscheidung der Betroffenen präsentiert',
    'Die Abwahl ist zwar einfach möglich, wird aber nur beiläufig oder im Kleingedruckten erwähnt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
