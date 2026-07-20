import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: darvo).
 * Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
 * Elemente; Erklärungen fokussieren auf Erkennen und Schutz der Betroffenen,
 * nie auf Anwendung. Evidenz-Tier weak: keine bezifferten Wirkbehauptungen.
 * Es gilt Overlay-Schutz.
 */
export const darvo: Technique = {
  id: 'darvo',
  name: {
    de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)',
    en: 'DARVO (Deny, Attack, Reverse Victim and Offender)',
  },
  description: {
    de: 'Reaktionsmuster einer mit Fehlverhalten konfrontierten Person: erst pauschales Leugnen, dann Angriff auf die Glaubwürdigkeit und die Motive der vorwerfenden Person, schließlich Rollenumkehr — die beschuldigte Person stilisiert sich zum eigentlichen Opfer.',
    en: 'A response pattern used by someone confronted with wrongdoing: first blanket denial, then an attack on the accuser\'s credibility and motives, and finally a role reversal in which the accused casts themselves as the real victim.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Personalgespräch nach einer protokollierten Belästigungsbeschwerde: Mit dem dokumentierten Vorfall konfrontiert, erklärt der Teamleiter gegenüber der HR-Managerin, es habe „nichts dergleichen" gegeben, die Beschwerdeführerin sei „notorisch nachtragend" und betreibe eine Rufmordkampagne — in Wahrheit sei er hier das Ziel und werde vorverurteilt.',
    'Podcast-Interview nach dokumentierten Plagiatsvorwürfen: Statt zu den belegten Textstellen Stellung zu nehmen, nennt der Agenturchef die Vorwürfe „frei erfunden", unterstellt der recherchierenden Journalistin einen „persönlichen Feldzug" und erklärt, eigentlich sei er das Opfer einer koordinierten Diffamierung.',
    'Vier-Augen-Klärung nach einer internen Spesenprüfung: Mit den auffälligen Belegen konfrontiert, streitet der Vertriebsleiter jede Unregelmäßigkeit ab, wirft dem Innenrevisor vor, ihn aus persönlicher Missgunst „vernichten" zu wollen, und stellt sich als Verfolgter dar, den man zum Sündenbock mache.',
  ],
  evidence: {
    studies: [
      'Harsey & Freyd (2020) - Deny, Attack, and Reverse Victim and Offender (DARVO): What Is the Influence on Perceived Perpetrator and Victim Credibility?',
      'Freyd (1997) - Violations of power, adaptive blindness, and betrayal trauma theory (DARVO)',
    ],
    findings: 'Experimentelle Studien (Harsey & Freyd 2020) deuten darauf hin, dass eine DARVO-Reaktion die wahrgenommene Glaubwürdigkeit der beschuldigenden Person senkt und die dem Beschuldigten zugeschriebene Verantwortung verringert; eine kurze Aufklärung über das Muster mildert diesen Effekt. Die Befunde stammen aus kleinen, studentischen Stichproben mit Wahrnehmungsmaßen im Labor, nicht aus dem Feld — sie belegen das Muster und einen kleinen Effekt auf die Fremdwahrnehmung, keinen bezifferten „Manipulationserfolg". Ursprung und Kern des Konzepts liegen in der klinischen Verratstrauma-Forschung (betrayal trauma; Freyd 1997); die Evidenzlage ist entsprechend schwach.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Wenige Laborexperimente, überwiegend studentische Stichproben',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['gaslighting', 'whataboutism', 'ad_hominem'],
  warningNeurons: [
    'Auf einen belegten Vorwurf folgt sofort pauschales Leugnen statt Auseinandersetzung mit dem konkreten Beleg',
    'Der Fokus kippt von der Sache auf die Glaubwürdigkeit und die Motive der vorwerfenden Person',
    'Die konfrontierte Person stilisiert sich zum eigentlichen Opfer — aus der beschuldigten Person wird ein Verfolgter',
    'Reizwörter wie „Hetzkampagne", „Rufmord" oder „Vorverurteilung" ersetzen die Antwort auf die konkrete Frage',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
