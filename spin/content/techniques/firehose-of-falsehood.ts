import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: firehose_of_falsehood).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const firehoseOfFalsehood: Technique = {
  id: 'firehose_of_falsehood',
  name: {
    de: 'Firehose of Falsehood',
    en: 'Firehose of Falsehood',
  },
  description: {
    de: 'Systematische Flutung mit Desinformation über viele Kanäle gleichzeitig, in hohem Tempo und bewusst widersprüchlich: Nicht eine einzelne Botschaft soll überzeugen, sondern die schiere Masse einander widersprechender Versionen soll überfordern, jede Richtigstellung abhängen und den Eindruck erzeugen, gesicherte Wahrheit sei ohnehin nicht mehr feststellbar.',
    en: 'Flooding the information space with disinformation across many channels at once, at high speed and deliberately inconsistent: the aim is not to make one message persuasive but to let the sheer mass of mutually contradictory versions overwhelm the audience, outrun every correction, and leave the impression that reliable truth can no longer be established.',
  },
  category: 'influence_ops',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Krisen-Monitoring nach einem Störfall in einem Chemiewerk: Als Monitoring-Leiterin einer Kommunikationsagentur siehst du binnen Stunden ein Dutzend einander offen widersprechender Versionen gleichzeitig über Fringe-Blogs, Messenger-Kanäle, Kurzvideo-Plattformen und Repost-„Nachrichtenseiten" laufen — Sabotage, ein inszenierter Wettbewerber-Angriff, gar nichts passiert, eine vertuschte Havarie, ein Angriff aus dem Ausland. Die Versionen heben sich gegenseitig auf; genau das ist der Punkt: Tempo und Masse machen es unmöglich, den tatsächlichen Befund noch festzustellen.',
    'Public-Affairs-Analyse zu einem geplanten Gesetz: Als Analyst eines Verbands verfolgst du, wie ein Netzwerk über Pseudo-Magazine, Podcasts, Social-Clips und Foren einen schnellen, nie abreißenden Strom ständig wechselnder und untereinander unvereinbarer Behauptungen ausspielt — mal ist das Gesetz harmlos, mal katastrophal, dann existiere es gar nicht, dann sei es längst heimlich beschlossen. Jede Richtigstellung kommt zu spät, weil die nächste Welle schon läuft; das erklärte Ergebnis ist Ermüdung und „man kann ohnehin nichts glauben".',
    'Redaktions-Faktencheck nach einem umstrittenen öffentlichen Ereignis: Als Verifikations-Redakteurin zählst du über Dutzende Kanäle hinweg — Wegwerf-Blogs, Aggregatoren, Kurzvideo, Kommentar-Schwärme — einen Schwall gegensätzlicher Darstellungen desselben Vorfalls: es sei erfunden, es sei echt aber alt, ein Rivale stecke dahinter, die Behörde sei schuld, die Zahlen seien aufgebläht, die Zahlen seien heruntergespielt. Die Darstellungen widersprechen sich offen; nicht Kohärenz, sondern Volumen und Tempo sind das Ziel, und eine gemeinsame Faktenbasis lässt sich nicht mehr fixieren.',
  ],
  evidence: {
    studies: [
      'Paul & Matthews (2016) - The Russian \'Firehose of Falsehood\' Propaganda Model (RAND)'
    ],
    findings: 'Das „Firehose of Falsehood"-Modell (Paul & Matthews 2016, RAND) beschreibt Propaganda mit hohem Volumen, vielen Kanälen, hoher Geschwindigkeit und bewusster Inkonsistenz — es ist ein theoretisch-deskriptives Modell, kein gemessener Wirkungsbeleg. Die Quelle ist eine RAND-Perspective (nicht peer-reviewt); ob und wie stark das Muster Einstellungen oder Verhalten verändert, ist nicht quantifiziert. Die Einordnung stützt sich daher auf Modell- und Mechanismusplausibilität, nicht auf Wirkungsstudien (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['data_voids_seo_manipulation', 'coordinated_inauthentic_amplification', 'gish_gallop'],
  warningNeurons: [
    'Innerhalb kurzer Zeit tauchen viele, einander offen widersprechende Versionen desselben Ereignisses auf — die Widersprüche werden nicht aufgelöst, sondern nebeneinander stehen gelassen',
    'Die Flut verteilt sich gleichzeitig über viele Kanäle und scheinbar unabhängige Quellen (Blogs, Messenger, Kurzvideo, Repost-Seiten) statt aus einer erkennbaren Stimme zu kommen',
    'Tempo und Masse schlagen jede Richtigstellung: Kaum ist eine Version widerlegt, läuft die nächste — Korrekturen kommen nie hinterher',
    'Ziel ist nicht, eine bestimmte Behauptung zu beweisen, sondern zu ermüden und den Eindruck zu erzeugen, „man könne ohnehin nichts sicher wissen"',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
