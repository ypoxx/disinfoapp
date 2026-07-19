import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: nemawashi).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const nemawashi: Technique = {
  id: 'nemawashi',
  name: {
    de: 'Nemawashi (vorbereitende Konsensbildung)',
    en: 'Nemawashi (laying the groundwork for consensus)',
  },
  description: {
    de: 'Informelle Vorab-Abstimmung mit den Beteiligten einzeln und vor der formellen Sitzung: Bedenken werden ausgeräumt und Zustimmung gesichert, sodass die offizielle Entscheidung nur noch bestätigt wird. Dual-use — echte frühe Beteiligung oder das Vorab-Neutralisieren von Widerspruch im Plenum.',
    en: 'Aligning stakeholders informally and one by one before the formal meeting — clearing objections and securing agreement so the official decision merely ratifies what is already settled. Dual-use: genuine early involvement, or quietly pre-empting dissent before anyone can voice it in the room.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Vor der Aufsichtsratssitzung zur neuen Konzernstrategie ruft die Vorstandsvorsitzende die drei einflussreichsten Aufsichtsräte nacheinander einzeln an, räumt ihre Einwände in Ruhe aus und sichert sich jeweils ihr Ja; als das Gremium formal tagt, ist die Strategie ohne Aussprache bestätigt.',
    'In den Tagen vor der Gesellschafterversammlung sucht der Finanzvorstand jeden der fünf Regionalgeschäftsführer einzeln im Büro auf, um deren Zustimmung zum Sparprogramm vorab abzusichern; als zwei nicht zusagen, vertagt er die Versammlung lieber, als den offenen Konflikt im Plenum zu riskieren.',
    'Zwei Tage vor der Verbandssitzung verschickt der Geschäftsführer den Beschlussentwurf nicht an den Verteiler, sondern einzeln an die Wortführer der größten Mitgliedsunternehmen, holt ihr Einverständnis in getrennten Telefonaten ein und lässt das Gremium am Sitzungstag nur noch protokollieren, was längst abgesprochen ist.',
  ],
  evidence: {
    studies: [
      'Machizawa (2013) - Nemawashi. In: The Encyclopedia of Cross-Cultural Psychology'
    ],
    findings: 'Nemawashi ist überwiegend definitorisch und aus der Kultur- und Managementforschung beschrieben (u. a. Machizawa 2013); die Wirksamkeit ist nicht experimentell quantifiziert. Der Kernmechanismus — vorgelagerte Einzelabstimmung sichert Zustimmung, bevor formell entschieden wird — gilt als plausibel, seine Einordnung als legitim oder manipulativ hängt von Transparenz und Freiwilligkeit ab. Belastbare Effektstärken fehlen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.3,
      sampleSize: 'Keine; definitorisch-qualitative Quellenbasis',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['groupthink', 'social_proof'],
  warningNeurons: [
    'Die formelle Sitzung bestätigt nur noch ein Ergebnis, das offensichtlich vorab feststand — eine echte Debatte findet nicht statt.',
    'Zustimmung wird einzeln und informell eingeholt, bevor alle gemeinsam am Tisch sitzen.',
    'Wer im Plenum Bedenken äußern will, steht plötzlich allein gegen einen bereits geschlossenen Kreis.',
    'Die Tagesordnung ist formal offen, die Entscheidung praktisch aber schon „durchtelefoniert".',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
