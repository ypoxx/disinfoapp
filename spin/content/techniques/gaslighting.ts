import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: gaslighting).
 * Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
 * Elemente, Fokus auf Erkennen und Schutz der Betroffenen — nie "einsetzen".
 * Evidenz-Tier weak: keine Wirkbehauptungen; das Konstrukt ist belegt, die
 * Übertragung auf KI-Systeme ist offen. Es gilt Overlay-Schutz.
 */
export const gaslighting: Technique = {
  id: 'gaslighting',
  name: {
    de: 'Gaslighting',
    en: 'Gaslighting',
  },
  description: {
    de: 'Anhaltende relationale Manipulation, bei der eine Person die Wahrnehmung, Erinnerung oder Urteilsfähigkeit einer anderen systematisch als unzuverlässig hinstellt — dokumentierte Ereignisse werden geleugnet, bis die Betroffene an der eigenen Realitätssicht zweifelt.',
    en: 'Sustained relational manipulation in which one person systematically frames another\'s perception, memory, or judgment as unreliable — denying documented events until the target starts to doubt their own grip on reality.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Vier-Augen-Gespräch nach einem eskalierten Projekt: Die Teamleiterin hält ihrer Referentin entgegen, die dokumentierte Zusage zur Fristverlängerung habe es nie gegeben — die E-Mail, die die Referentin zitiert, habe sie sich „offenbar zusammengereimt", und wenn sie sich schon bei solchen Kleinigkeiten so sicher irre, solle sie ihr Gedächtnis grundsätzlich hinterfragen.',
    'Wiederkehrende Situation im Redaktions-Chat: Sooft eine Redakteurin einen früheren Beschluss anspricht, antwortet der Chefredakteur, das habe so nie im Raum gestanden, sie „dramatisiere" und sei „wieder zu empfindlich"; die Kolleg:innen, die in der Sitzung dabei waren, bezieht er nie ein, sodass sie zunehmend an ihrer eigenen Wahrnehmung der Meetings zweifelt.',
    'Nach einem Personalgespräch: Der Vorgesetzte schreibt das gemeinsame Protokoll im Nachgang um und verschickt es als „das, was wir wirklich vereinbart haben"; als der Mitarbeiter auf seine eigenen Notizen verweist, erklärt ihm der Vorgesetzte, er verwechsle offenkundig Gespräche und solle sich „nichts einbilden", was nie passiert sei.',
  ],
  evidence: {
    studies: [
      'Tager-Shafrir et al. (2024) – Klinisch-psychometrische Validierung des Gaslighting-Konstrukts',
    ],
    findings: 'Tager-Shafrir et al. (2024) validieren Gaslighting psychometrisch als klinisch-psychologisches Konstrukt — belegt ist damit, dass sich das Muster konsistent beschreiben und messen lässt, nicht ein bezifferter Wirkungsgrad. Die Befunde stammen aus überwiegend westlichen Stichproben; eine Übertragung auf KI-Systeme (etwa Bots, die Realitätszweifel verstärken) ist bislang unbelegt und gilt als offen. Die Konfidenz ist niedrig und das Überschätzungsrisiko hoch: als Effektbehauptung trägt der Begriff nicht, als Beschreibung eines relationalen Schadensmusters ist er belastbar.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Klinisch-psychometrische Validierungsstudie (überwiegend westliche Stichproben)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['ai_companion_emotional_retention', 'love_bombing', 'darvo', 'zersetzung_decomposition'],
  warningNeurons: [
    'Dokumentierte Ereignisse (E-Mails, Protokolle, Mitwissende) werden pauschal als Einbildung oder Missverständnis abgetan.',
    'Der Zweifel wird verallgemeinert: nicht nur ein Punkt sei falsch, sondern deine Wahrnehmung oder dein Gedächtnis generell.',
    'Wiederkehrende Abwertung der Wahrnehmung („du bist zu empfindlich", „du dramatisierst", „das bildest du dir ein").',
    'Nach den Gesprächen fühlst du dich unsicherer über die eigene Erinnerung, obwohl Belege vorliegen.',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
