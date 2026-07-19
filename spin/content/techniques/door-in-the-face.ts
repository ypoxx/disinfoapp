import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: door_in_the_face).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const doorInTheFace: Technique = {
  id: 'door_in_the_face',
  name: {
    de: 'Door-in-the-Face',
    en: 'Door-in-the-Face',
  },
  description: {
    de: 'Compliance-Technik in zwei Zügen: Auf eine bewusst überzogene Bitte, deren Ablehnung einkalkuliert ist, folgt die eigentlich gewollte kleinere — als Entgegenkommen gerahmt, das die Gegenseite zu einem eigenen Zugeständnis bewegen soll.',
    en: 'A two-step compliance move: an intentionally oversized request, made to be refused, is followed by the smaller request that was the real goal — framed as a concession meant to draw a matching concession from the other side.',
  },
  category: 'cognitive_bias',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Jahresgespräch zur Etatplanung im Videocall: Der Neugeschäfts-Direktor der Agentur legt der Kommunikationschefin zuerst ein Full-Service-Mandat über 400.000 Euro vor — kalkuliert auf Ablehnung. Nach ihrem Nein folgt: „Dann starten wir doch wenigstens mit dem Media-Training für Ihre Geschäftsführung" — dem eigentlichen Verkaufsziel von Anfang an.',
    'Interviewanfrage per E-Mail an die Pressestelle: Die Wirtschaftsredakteurin bittet zunächst um ein sechzigminütiges Kamerainterview mit dem CEO zur laufenden Restrukturierung. Auf die Absage des Pressesprechers antwortet sie: „Dann geben Sie mir wenigstens ein schriftliches Statement mit den zwei Kennzahlen" — genau die Antwort, auf die sie es von Beginn an abgesehen hatte.',
    'Interne Budgetrunde mit dem Finanzvorstand: Die Leiterin Unternehmenskommunikation fordert zunächst drei neue Stellen für ein eigenes Newsroom-Team. Nach der erwartbaren Ablehnung schiebt sie die eigentliche Bitte nach: „Dann brauche ich aber mindestens die eine Redakteursstelle" — gerechnet darauf, dass der Vorstand nach seinem Nein ein Entgegenkommen zeigen will.',
  ],
  evidence: {
    studies: [
      'Cialdini (1984) - Influence: The Psychology of Persuasion',
      'Feeley et al. (2012) - The Door-in-the-Face Persuasive Message Strategy: A Meta-Analysis of the First 35 Years'
    ],
    findings: 'Der Mechanismus — Kontrastwirkung plus die Norm wechselseitiger Zugeständnisse — ist seit Cialdini (1984) beschrieben und vielfach untersucht. Die Meta-Analyse von Feeley, Anker und Aloe (2012) über 35 Jahre Forschung findet allerdings nur einen kleinen Effekt auf verbale Zustimmung (r ≈ .13); auf tatsächliches Verhalten ist der Effekt meta-analytisch nicht signifikant (r ≈ .05). Wie viel die Technik in einem konkreten Kontext bewirkt, bleibt damit offen — als zuverlässig wirksam sollte sie nicht dargestellt werden (geringe Evidenzsicherheit).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['reciprocity', 'decoy_effect'],
  warningNeurons: [
    'Die erste Bitte ist auffällig überdimensioniert — als wäre die Ablehnung von vornherein einkalkuliert',
    'Unmittelbar nach der Ablehnung folgt eine deutlich kleinere, auffallend vernünftige Bitte',
    'Formulierungen wie „dann wenigstens" oder „ich komme Ihnen entgegen" rahmen die zweite Bitte als Zugeständnis',
    'Nach dem Nein entsteht der Impuls, etwas gutmachen zu müssen — obwohl die Gegenseite nichts gegeben hat',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
