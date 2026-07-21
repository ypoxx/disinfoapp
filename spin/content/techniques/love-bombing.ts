import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: love_bombing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Serious-Mode (Zwang & Kontrolle) und Frontier-Tier (Begriffs-
 * statt Wirkwissen) beachtet. Es gilt Overlay-Schutz.
 */
export const loveBombing: Technique = {
  id: 'love_bombing',
  name: {
    de: 'Love Bombing',
    en: 'Love Bombing',
  },
  description: {
    de: 'Ein Muster überwältigender Zuwendung, Idealisierung und permanenter Aufmerksamkeit in der Frühphase einer Beziehung, das auf eine schnelle, exklusive Bindung zielt und in klinischen wie qualitativen Beschreibungen mit späterer Kontrolle und Abhängigkeit in Verbindung gebracht wird.',
    en: 'A pattern of overwhelming affection, idealization, and relentless attention early in a relationship, aimed at forging a fast, exclusive bond and linked in clinical and qualitative accounts to later control and dependency.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Dating-App-Chat, erste Woche: Ein neues Match — angeblich Ingenieur auf einer Bohrplattform im Ausland — überschüttet die Nutzerin noch vor dem ersten Telefonat mit Nachrichten im Minutentakt, nennt sie „Seelenverwandte", spricht von Heirat und gemeinsamer Zukunft und reagiert auf jede Antwortpause mit spürbarer Enttäuschung.',
    'Einführungswochenende eines „Persönlichkeits-Trainings": Eine Erstteilnehmerin wird vom ersten Moment an von langjährigen Mitgliedern umringt, mit Komplimenten, Umarmungen und kleinen Geschenken überhäuft und immer wieder hört, sie sei „endlich zu Hause" und „etwas Besonderes" — Skepsis wird liebevoll als Angst vor Nähe gedeutet.',
    'Frisch verliebte Beziehung, dritte Woche: Der neue Partner meldet sich stündlich, füllt die Wohnung mit Blumen und teuren Geschenken, erklärt die Partnerin zum „einzigen Menschen, der ihn wirklich versteht", und beginnt zugleich, gemeinsame Abende mit ihren Freundinnen als verlorene Zeit zu zweit zu framen.',
  ],
  evidence: {
    studies: [
      'Strutzenberg et al. (2017) - Love Bombing: A Narcissistic Approach to Relationship Formation',
      'de Freitas et al. (2025, Working Paper) - Emotional Manipulation by AI Companions',
    ],
    findings: 'Der Begriff „Love Bombing" beschreibt ein relationales Muster aus überwältigender Zuwendung und Idealisierung; er stammt aus der Beobachtung von Hochkontroll-Gruppen und Missbrauchsdynamiken. Die empirische Basis ist schmal: Strutzenberg et al. (2017) berichten korrelative Zusammenhänge aus einer Gelegenheitsstichprobe von Studierenden, de Freitas et al. (2025, Working Paper) dokumentieren verwandte bindungsorientierte Taktiken in KI-Companions, ohne Love Bombing als Konstrukt zu validieren. Es sollte daher als Risiko- und Erkennungsmuster verstanden werden, nicht als belegter, kontextübergreifender Effekt.',
    uncertainty: {
      confidence: 0.35,
      sampleSize: 'Wenige Studien; korrelativ und Gelegenheitsstichprobe (Strutzenberg et al. 2017), Working Paper (de Freitas et al. 2025)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['synthetic_intimacy_retention'],
  warningNeurons: [
    'Intensität und Tempo passen nicht zur kurzen Bekanntschaft — Liebeserklärungen, „Seelenverwandte", Zukunftspläne binnen Tagen',
    'Permanente Erreichbarkeit wird eingefordert; Pausen oder Kontakt zu Dritten werden als Distanz oder Verrat gedeutet',
    'Überhöhte Idealisierung („du bist anders als alle anderen") koppelt sich an wachsende Exklusivität und Abgrenzung von Freunden und Familie',
    'Auf Geschenke und Aufmerksamkeit folgt früh eine unausgesprochene Erwartung von Loyalität, Zugeständnissen oder Kontrolle',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
  seriousMode: true,
};
