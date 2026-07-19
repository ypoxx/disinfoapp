import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: cognitive_dissonance_induction).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const cognitiveDissonanceInduction: Technique = {
  id: 'cognitive_dissonance_induction',
  name: {
    de: 'Erzeugen kognitiver Dissonanz',
    en: 'Inducing Cognitive Dissonance',
  },
  description: {
    de: 'Gezielt einen Widerspruch zwischen dem, was jemand tut oder öffentlich sagt, und dem, was er eigentlich denkt, herbeiführen. Die unangenehme Spannung (kognitive Dissonanz, Festinger) kann sich auflösen, indem die Einstellung dem Verhalten nachzieht — nicht umgekehrt.',
    en: 'Deliberately engineering a clash between what someone does or says in public and what they actually believe. The discomfort of that contradiction (cognitive dissonance, Festinger) can resolve itself with the attitude falling in line with the behaviour — not the other way round.',
  },
  category: 'cognitive_bias',
  difficulty: 'advanced',
  effectiveness: 'high',
  examples: [
    'Kickoff-Workshop zur Reorganisation: Die Change-Beraterin bittet gezielt die skeptischen Teamleiter, in Kleingruppen „die drei stärksten Argumente für das neue Betriebsmodell" zu erarbeiten und vor der Abteilung vorzutragen — als harmlose Workshop-Übung gerahmt, ohne Gegenleistung. Das Vortragen gegen die eigene Überzeugung erzeugt eine unangenehme Spannung, und Wochen später hat sie sich bei mehreren nach innen aufgelöst: Sie halten die Argumente inzwischen selbst für tragfähig — die Einstellung ist dem Verhalten nachgezogen, ohne dass irgendjemand sie an ihren Auftritt erinnern musste.',
    'Referenzkunden-Anfrage per E-Mail: Der Account Manager des Softwareanbieters bittet die Projektleiterin des Kunden mitten in der holprigen Pilotphase um „zwei Sätze, was schon gut läuft" für die Kunden-Story — eine kleine Gefälligkeit, die ihrer eigenen kritischen Bilanz widerspricht. Das Lob unter ihrem Namen steht quer zu ihrem Urteil, und diese Spannung löst sich nach innen: Im internen Review gewichtet sie die Probleme von sich aus milder — nicht weil ihr jemand das Zitat vorhält, sondern weil ihre Einschätzung dem eigenen Lob nachgerückt ist.',
    'Messe-Briefing am Stand: Der Vertriebsleiter weist die neue Produktmanagerin an, Besuchern zu sagen, das Analyse-Feature laufe „bereits stabil bei mehreren Kunden" — sie weiß, dass es noch in der Beta steckt. Nach zwei Tagen Standdienst hält sie die Formulierung selbst für vertretbar: Die Spannung zwischen Aussage und Wissen löst sich zugunsten der Aussage.',
  ],
  evidence: {
    studies: [
      'Festinger & Carlsmith (1959) - Cognitive Consequences of Forced Compliance',
      'Vaidis et al. (2024) - A Multilab Replication of the Induced-Compliance Paradigm of Cognitive Dissonance'
    ],
    findings: 'Festinger & Carlsmith (1959) zeigten den Grundeffekt: Wer sich — freiwillig wirkend und ohne große Belohnung — zu einstellungswidrigem Verhalten bewegen lässt, passt die Einstellung danach häufig dem Verhalten an. Eine registrierte Multilab-Replikation genau dieses Induced-Compliance-Paradigmas (Vaidis et al. 2024) fiel allerdings schwächer und uneinheitlich aus: Die Dissonanztheorie gilt als robust, das klassische Nachweisparadigma als replikationsunsicher. Wie stark der Effekt im Einzelfall ausfällt, hängt von Rechtfertigung, Freiwilligkeit und Grad der Festlegung ab (moderate Evidenz, überwiegend westliche Stichproben).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Originalstudie plus registrierte Multilab-Replikation (Induced Compliance)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['consistency'],
  warningNeurons: [
    'Du sollst dich früh öffentlich festlegen (Zitat, Statement, Handzeichen), bevor deine Meinung überhaupt gebildet ist',
    'Bekannten Skeptikern wird ausgerechnet die Pro-Rolle zugewiesen („Sammeln Sie doch mal die Vorteile …")',
    'Kleine Gefälligkeitsaussagen, die deinem Wissensstand widersprechen, werden als harmlos gerahmt („nur zwei Sätze")',
    'Nach einer beiläufigen Zusage fühlt sich deine eigentliche Kritik plötzlich wie Selbstwiderspruch an',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
