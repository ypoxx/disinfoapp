import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: nagging).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const nagging: Technique = {
  id: 'nagging',
  name: {
    de: 'Nagging (Drängeln)',
    en: 'Nagging',
  },
  description: {
    de: 'Dieselbe Aufforderung wird durch wiederholte, unterbrechende Nachfragen so lange erneut gestellt, bis die Zielperson allein zur Beendigung der Störung nachgibt — die Zustimmung entsteht aus Zermürbung, nicht aus Überzeugung.',
    en: 'The same request is re-issued through repeated, interruptive prompts until the target gives in simply to make it stop — consent won through attrition rather than conviction.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Onboarding eines Media-Monitoring-Tools im Comms-Team: Bei jedem Log-in der Werkstudentin schiebt sich derselbe Dialog „Jetzt auf Pro upgraden?" vor die Oberfläche. Tippt sie „Nicht jetzt", ist er beim nächsten Log-in unverändert wieder da, danach nach jeder gespeicherten Suche — kein neues Argument, kein Rabatt, keine ablaufende Frist, nur dieselbe Bitte in immer kürzeren Abständen, bis sie schließlich upgradet, damit die Unterbrechungen aufhören.',
    'Newsroom-Website des Konzerns, Perspektive der Online-Redakteurin im Test: Wer die Tracking-Einwilligung ablehnt, bekommt das Consent-Banner bei jedem Seitenaufruf erneut vorgelegt; „Zustimmen" lässt es dauerhaft verschwinden, „Ablehnen" nur bis zum nächsten Klick. Dieselbe Frage kehrt so bei jedem Artikel zurück, ohne neues Argument und ohne Frist, bis ein Teil der Leser:innen aus Genervtheit zustimmt.',
    'Agenturauswahl beim Mittelständler: Nach dem „Aktuell kein Bedarf" der Pressesprecherin ruft der Vertriebler einer Nachrichtenagentur sie im Zwei-Tage-Takt erneut an — jedes Mal mit demselben Angebot und derselben Bitte um einen Termin, nicht mit einem neuen. Nach der achten identischen Nachfrage sagt sie den Termin zu, um die Anrufe zu beenden.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale',
    ],
    findings: 'Nagging ist in etablierten Dark-Pattern-Taxonomien als eigenes Muster erfasst und in Bestandsaufnahmen kommerzieller Websites und Apps dokumentiert (Gray et al. 2018; Mathur et al. 2019). Diese Arbeiten belegen Vorkommen und Verbreitung des Musters, nicht seine kausale Wirkung auf Entscheidungen — wie stark wiederholtes Nachfragen die Zustimmungsrate tatsächlich anhebt, ist experimentell kaum quantifiziert und dürfte stark vom Kontext abhängen. Die Konfidenz ist entsprechend niedrig (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien; keine kausalen Wirkexperimente',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['sludge', 'consent_and_privacy_dark_patterns', 'dark_patterns'],
  warningNeurons: [
    'Dieselbe Aufforderung kehrt nach einer Ablehnung unverändert zurück — bei jedem Log-in, Seitenaufruf oder Kontakt aufs Neue',
    'Ablehnen wirkt nur vorübergehend, Zustimmen dauerhaft — das Nein beendet die Frage nicht, das Ja schon',
    'Kein neues Argument, kein Rabatt, keine Frist — allein die Wiederholung soll den Widerstand aufzehren',
    'Am Ende steht ein Ja, das erkennbar nur die Störung beenden soll und nicht aus Interesse kommt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
