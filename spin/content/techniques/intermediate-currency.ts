import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: intermediate_currency).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const intermediateCurrency: Technique = {
  id: 'intermediate_currency',
  name: {
    de: 'Intermediate Currency (Zwischenwährung)',
    en: 'Intermediate Currency',
  },
  description: {
    de: 'Eine virtuelle Zwischenwährung — Credits, Coins, Punkte, Token — schiebt sich zwischen Geld und Kauf: Ausgaben werden in der Kunstwährung ausgezeichnet statt in Euro, was den Bezug zum realen Preis lockert; krumme Paketgrößen sorgen zusätzlich für Restguthaben, das faktisch liegen bleibt.',
    en: 'A virtual intermediate currency — credits, coins, points, tokens — is slotted between money and purchase: spending is priced in the artificial unit rather than in real money, loosening the link to the actual cost; odd bundle sizes also leave residual balances that effectively go unused.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Lizenzportal für Pressebilder: Die Bildredakteurin einer Unternehmenskommunikation soll fünf Motive lizenzieren. Das Portal verkauft keine Einzelbilder gegen Euro, sondern „Credits" im Paket — 500 Credits für 49 Euro; ein Motiv kostet 90 Credits, ein Bundle 220. Nach dem Aufladen zeigt der Warenkorb nur noch Credit-Beträge, der Euro-Bezug verschwindet, und es bleiben 30 Credits liegen, für die kein Motiv passt.',
    'Freigaberunde für ein KI-Text-Tool im Team-Chat: Der Anbieter rechnet nicht in Euro pro Text ab, sondern in „Sparks" — 10.000 Sparks im Monatsplan, ein längerer Entwurf verbraucht rund 1.200. Im Dashboard sieht die Content-Managerin nur ihren Spark-Stand sinken; was ein einzelner Entwurf in Euro kostet, ist nirgends ausgewiesen.',
    'Virtueller Messestand auf einer Branchenplattform: Der Eventmanager schaltet Zusatzfunktionen — Lead-Scan, Vortrags-Slot, Chat-Push — nicht gegen Rechnung frei, sondern mit „Coins" aus einem vorab gekauften Guthaben (2.000 Coins für 199 Euro). Jede Funktion ist in Coins ausgezeichnet, das Restguthaben reicht nie glatt für die nächste, und nachkaufen lässt sich nur das nächstgrößere Coin-Paket.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale',
    ],
    findings: 'Intermediate Currency ist in Dark-Pattern-Taxonomien als eigenes Muster erfasst (Gray et al. 2018; Mathur et al. 2019); diese Arbeiten belegen vor allem Vorkommen und Verbreitung, nicht die Verhaltenswirkung im Einzelfall. Dass die Zwischenwährung das Ausgeben vom realen Geldwert entkoppelt, ist eine plausible, aber überwiegend indirekt gestützte und stark kontextabhängige Annahme. Belastbare, replizierte Wirkungsmaße fehlen; die Konfidenz ist entsprechend niedrig.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie-/Prävalenzstudien (keine kontrollierte Wirkungsmessung)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['gamification_variable_reward', 'drip_pricing'],
  warningNeurons: [
    'Preise stehen in einer Kunstwährung (Credits, Coins, Punkte, Token) statt in Euro — der reale Betrag erscheint nur beim Aufladen',
    'Guthaben gibt es nur in krummen Paketen, die nie glatt aufgehen — es bleibt planmäßig ein Rest liegen',
    'Nach dem Aufladen verschwindet der Euro-Bezug aus Warenkorb und Abrechnung',
    'Der Umrechnungskurs Kunstwährung ↔ Geld ist ungerade oder wechselt je nach Paketgröße',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
