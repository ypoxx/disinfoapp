import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: gamification_variable_reward).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const gamificationVariableReward: Technique = {
  id: 'gamification_variable_reward',
  name: {
    de: 'Gamification / Variable Belohnungen',
    en: 'Gamification / Variable Reward Schedules',
  },
  description: {
    de: 'Engagement-Design mit Spielmechaniken — Punkte, Streaks, Abzeichen, Ranglisten — und variabel getakteten Belohnungen, deren unvorhersehbares Eintreffen auf Wiederkehr und Gewohnheitsbildung zielt.',
    en: 'Engagement design built on game mechanics — points, streaks, badges, leaderboards — and rewards delivered on an unpredictable schedule, designed to drive return visits and habit formation.',
  },
  category: 'digital_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Redaktionsplanung im Social-Media-Team eines Versicherers: Die Plattform zeigt dem Corporate-Account einen „21-Tage-Posting-Streak" samt Verfallswarnung. Der Junior-Redakteur schlägt der Teamleiterin vor, am Feiertag einen inhaltsleeren Beitrag zu veröffentlichen — nicht weil der Themenplan es vorsieht, sondern damit die Serie nicht reißt.',
    'Rollout eines Employee-Advocacy-Tools im Konzern: Das Tool vergibt Punkte, Abzeichen und ein wöchentliches Abteilungs-Ranking für geteilte Unternehmensinhalte. Der Leiterin Interne Kommunikation fällt im Monitoring auf, dass Vertriebsmitarbeiter zunehmend beliebige Beiträge durchreichen — die Rangliste belohnt Frequenz, nicht Botschaftstreue.',
    'Pitch-Tracking in der PR-Software einer Agentur: Öffnungen der Presseaussendung werden nicht als Tagesreport gebündelt, sondern einzeln, in unvorhersehbaren Abständen und mit „Treffer"-Animation gemeldet. Die Beraterin lässt den Tab den ganzen Nachmittag offen und aktualisiert immer wieder — der nächste Treffer könnte jederzeit kommen.',
  ],
  evidence: {
    studies: [
      'Sailer et al. (2020) - The Gamification of Learning: A Meta-analysis'
    ],
    findings: 'Die belastbarste Evidenz stammt aus dem Bildungskontext: Sailer & Homner (2020) finden in ihrer Meta-Analyse kleine bis mittlere Effekte von Gamification auf Lernergebnisse und Motivation (g ≈ 0,25–0,49). Ob sich diese Befunde auf kommerzielle Habit-Loops übertragen lassen und ob variabel getaktete Belohnungen dort Gewohnheiten oder gar Schäden erzeugen, ist nicht belegt; die verbreiteten Suchtvergleiche („Slot Machine in der Hosentasche") sind Deutung, kein gesicherter Befund. Insgesamt niedrige Evidenzsicherheit bei hoher Kontextabhängigkeit.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['attention_engagement_loops', 'doomscrolling_fomo_engineering', 'loss_aversion'],
  warningNeurons: [
    'Belohnt wird die Frequenz der Nutzung — täglich einloggen, täglich posten — nicht die Qualität des Ergebnisses',
    'Verfallsdrohung: Eine Serie oder ein Status geht verloren, sobald du einen Tag aussetzt',
    'Rückmeldungen kommen einzeln und in unvorhersehbarem Takt statt gebündelt — jedes Öffnen könnte ein Treffer sein',
    'Konfetti, Abzeichen und Ranglisten feiern Aktivität, die mit deinem eigentlichen Arbeitsziel nichts zu tun hat',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
