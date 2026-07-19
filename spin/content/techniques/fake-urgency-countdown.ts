import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: fake_urgency_countdown).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const fakeUrgencyCountdown: Technique = {
  id: 'fake_urgency_countdown',
  name: {
    de: 'Fake Urgency / Countdown Timers',
    en: 'Fake Urgency / Countdown Timers',
  },
  description: {
    de: 'Künstliche Dringlichkeit durch erfundene Deadlines, Countdown-Timer oder vorgetäuschte Knappheit in digitalen Interfaces, die die überlegte Prüfung verkürzen soll — anders als bei echter Verknappung steht hinter dem Zeitdruck kein nachprüfbares, für alle gleiches Angebotsende.',
    en: 'Manufactured urgency — invented deadlines, countdown timers or faked scarcity in digital interfaces — engineered to short-circuit deliberation; unlike genuine scarcity, no verifiable, universally applied cut-off sits behind the pressure.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Landingpage-Relaunch eines Online-Shops: Die Growth-Managerin lässt über der Kaufen-Schaltfläche einen Countdown „Angebot endet in 09:58" einbauen — der Timer startet bei jedem neuen Seitenaufruf wieder bei zehn Minuten, ein tatsächliches Angebotsende gibt es nicht.',
    'In-App-Banner eines Abo-Dienstes: Der Product-Owner schaltet für Bestandskunden „Upgrade-Rabatt läuft in 23:14:57 ab", doch die Deadline wird pro Nutzer per Cookie gesetzt und bei jedem, der nicht kauft, still auf 24 Stunden zurückgestellt.',
    'E-Mail-Kampagne eines Modehändlers: Die CRM-Managerin verschickt einen Newsletter mit animiertem Countdown „Sale endet in 02:00:00", der beim Öffnen unabhängig vom echten Kampagnenende jedes Mal aufs Neue bei zwei Stunden zu laufen beginnt.',
  ],
  evidence: {
    studies: [
      'FTC (2022) - Bringing Dark Patterns to Light',
      'CMA/ICO (2023) - Harmful Online Choice Architecture',
    ],
    findings: 'Regulierungsbehörden (FTC 2022; CMA/ICO 2023) dokumentieren künstliche Dringlichkeit als verbreitetes Dark Pattern und definieren das Muster; die Belege sind überwiegend regulatorisch-definitorisch, keine gemessenen Effektstärken. Der plausible Wirkweg — Zeitdruck verkürzt die deliberative Prüfung und stützt sich auf Verlustaversion — ist mechanistisch begründet, aber kontextabhängig und nicht als pauschaler Effekt belegt (moderate Evidenz, überwiegend westliche Marktkontexte).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Regulatorische Bestandsaufnahmen / Taxonomie, keine kontrollierten Effektstudien',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['scarcity', 'loss_aversion', 'dark_patterns'],
  warningNeurons: [
    'Der Countdown startet beim Seiten-Neuladen oder pro Nutzer immer wieder von vorn',
    'Hinter der Deadline steht kein nachprüfbares, für alle gleiches Enddatum',
    'Ein „nur noch X"-Signal ohne Bezug zu echtem Bestand oder echtem Aktionsende',
    'Rote, tickende Ziffern erzeugen Zeitdruck, den die Sache selbst nicht hergibt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
