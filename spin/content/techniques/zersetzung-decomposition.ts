import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: zersetzung_decomposition).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Serious-Mode (Zwang & Kontrolle): nüchterner Ton, Fokus auf Erkennen
 * und Schutz der Betroffenen. Evidenz-Tier weak: keine quantifizierten
 * Wirkbehauptungen. Es gilt Overlay-Schutz.
 */
export const zersetzungDecomposition: Technique = {
  id: 'zersetzung_decomposition',
  name: {
    de: 'Zersetzung',
    en: 'Zersetzung (Decomposition)',
  },
  description: {
    de: 'Verdeckt orchestrierte, über lange Zeit angelegte Zermürbungskampagne: Ein Bündel unauffälliger Einzelmaßnahmen — Gerüchte, Isolation, Sabotage, gezielte Verunsicherung — läuft hinter einer Fassade sozialer Normalität zusammen, um eine Person oder Gruppe zu lähmen, ohne dass die Betroffenen einen Urheber greifen können.',
    en: 'A covertly orchestrated, long-running attrition campaign: a bundle of individually unremarkable measures — rumours, isolation, sabotage, deliberate destabilisation — converges behind a façade of social normality to paralyse a targeted individual or group, while those affected can never pin down who is behind it.',
  },
  category: 'coercive_control',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Betriebsseelsorge, Einzelgespräch: Eine Abteilungsleiterin schildert, wie über Monate hinweg unauffällig Fäden gegen sie gezogen werden — anonyme Gerüchte über ihre Kompetenz sickern durchs Haus, Einladungen erreichen sie „versehentlich" nicht mehr, Unterlagen verschwinden aus dem Team-Laufwerk, Freigaben verzögern sich ohne Grund und langjährige Verbündete gehen nach und nach auf Abstand. Es gibt keinen offenen Angriff und keine sichtbare Gruppe von Gegnern; jeder Vorfall wirkt für sich wie ein Zufall, doch alles läuft hinter einer Fassade der Normalität zusammen und zermürbt sie zusehends, ohne dass sie einen Urheber greifen kann.',
    'Rechercheredaktion, Fall eines Investigativjournalisten: In kurzer Folge häufen sich anonyme Beschwerden bei der Chefredaktion, gefälschte Profile streuen halbwahre Andeutungen über seine Vergangenheit, Quellen springen nach merkwürdigen Anrufen reihenweise ab, Reisekostenanträge bleiben liegen und Termine platzen ohne Erklärung. Die Maßnahmen greifen ineinander und zielen einzig darauf, ihn zu zermürben und kaltzustellen — koordiniert genug, dass es kein Zufall ist, verdeckt genug, dass bei keiner Person sichtbar ein Faden zusammenläuft.',
    'Vereinsberatung, Bericht eines Initiativen-Vorstands: Über ein Jahr wird zwischen den Aktiven einer regierungskritischen Bürgerinitiative Misstrauen gesät, gefälschte interne „Leaks" behaupten Alleingänge Einzelner, die Sitzungslogistik wird immer wieder sabotiert und Förderanträge versickern spurlos — bis Zusammenhalt und Handlungsfähigkeit zerfallen, während der Absender im Dunkeln bleibt.',
  ],
  evidence: {
    studies: [
      'Pingel-Schliemann (2002) - Zersetzen. Strategie einer Diktatur'
    ],
    findings: 'Die Zersetzungsstrategie ist vor allem historisch-dokumentarisch belegt: Pingel-Schliemann (2002) rekonstruiert aus Stasi-Akten, wie verdeckte, koordinierte Zermürbung (Gerüchte, Isolation, Sabotage, gezielte Verunsicherung) als staatliche Repression eingesetzt wurde. Es handelt sich um Fall- und Aktenevidenz, nicht um experimentelle Wirkungsforschung; ein bezifferter Wirkungsgrad lässt sich daraus nicht ableiten, und die Übertragbarkeit auf heutige Kontexte ist offen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Historisch-dokumentarische Fallevidenz (Aktenauswertung)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: [],
  warningNeurons: [
    'Eine Häufung kleiner „Missgeschicke", Gerüchte und Pannen, die einzeln harmlos wirken, sich aber immer gegen dieselbe Person oder Gruppe richten',
    'Kein greifbarer Absender: Der Druck kommt aus wechselnden, anonymen Quellen hinter einer Fassade der Normalität',
    'Fortschreitende Isolation — Vertraute, Verbündete und Unterstützer halten nach und nach Abstand',
    'Sabotage im Verborgenen: verschwundene Unterlagen, geplatzte Termine, versickernde Anträge ohne erkennbaren Grund',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
