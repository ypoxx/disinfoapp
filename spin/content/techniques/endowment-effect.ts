import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: endowment_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const endowmentEffect: Technique = {
  id: 'endowment_effect',
  name: {
    de: 'Endowment-Effekt (Besitztumseffekt)',
    en: 'Endowment Effect',
  },
  description: {
    de: 'Was man besitzt — oder auch nur vorläufig in Händen hält —, wird höher bewertet als dasselbe Gut ohne Besitz: Für das Hergeben verlangen Menschen typischerweise mehr, als sie für den Erwerb zahlen würden. Testphasen, Personalisierung und Vormerkungen erzeugen dieses Besitzgefühl gezielt, bevor die eigentliche Entscheidung ansteht.',
    en: 'Ownership inflates value: people typically demand more to give something up than they would pay to acquire it — even after holding it only briefly. Free trials, personalisation, and pre-reservations are built to create that sense of "mine" before the actual decision is on the table.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Videocall zum Ende der kostenlosen Testphase eines Media-Monitoring-Tools: Der Key-Account-Manager teilt der Leiterin Unternehmenskommunikation den Bildschirm mit ihren selbst angelegten Suchprofilen und Dashboards und fragt: „Wollen Sie das alles wirklich wieder hergeben?" — vier Wochen Nutzung haben aus dem Testzugang gefühlten Besitz gemacht, und bepreist wird nun das Hergeben, nicht der Erwerb.',
    'Abschlusspräsentation im Agentur-Pitch: Der Etat-Direktor führt der Marketingleiterin das Konzept durchgehend als „Ihre Kampagne" vor — mit ihrem Logo im Key Visual, fertigem Claim und eingearbeiteten Zitaten ihrer Vorständin. Die Personalisierung soll Besitzgefühl erzeugen, bevor überhaupt beauftragt ist: Was sich schon wie das Eigene anfühlt, gibt man ungern an die Wettbewerbsagentur zurück.',
    'E-Mail des Anzeigenleiters eines Fachverlags an den Pressesprecher vor der Preisverhandlung zur Medienkooperation: Die Sonderseite sei „für Sie bereits fest eingeplant", angehängt das Layout mit seinen Zitaten. Erst im nächsten Schritt kommt der Preis — den vorgemerkten Platz wieder aufzugeben fällt schwerer, als ihn nie gehabt zu haben.',
  ],
  evidence: {
    studies: [
      'Kahneman et al. (1990) - Experimental Tests of the Endowment Effect and the Coase Theorem'
    ],
    findings: 'Kahneman, Knetsch & Thaler (1990) zeigen in Tauschexperimenten (unter anderem mit Kaffeetassen), dass Besitzer für die Aufgabe eines Guts im Schnitt rund das Doppelte dessen verlangen, was Käufer dafür zu zahlen bereit sind — bloßer Besitz verschiebt die Bewertung. Der Grundeffekt ist vielfach repliziert; wie stark er ausfällt, hängt aber deutlich vom Kontext ab, etwa von der Markterfahrung der Beteiligten. Die klassischen Befunde stammen überwiegend aus Laborstudien mit westlichen Stichproben (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Serie von Labor-/Tauschexperimenten',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['loss_aversion'],
  warningNeurons: [
    'Ein Test- oder Gratiszugang ist so gebaut, dass du ihn vor der Kaufentscheidung mit eigenen Daten, Einstellungen oder Inhalten füllst',
    'Besitz wird sprachlich vorweggenommen — „Ihr Dashboard", „Ihre Kampagne", „für Sie reserviert" — obwohl noch kein Vertrag besteht',
    'Die Entscheidung wird als Hergeben von etwas Vorhandenem gerahmt statt als Neuanschaffung („Wollen Sie darauf wirklich verzichten?")',
    'Dein Preisgefühl für das Behalten liegt spürbar über dem, was du für denselben Einstieg heute neu zahlen würdest',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
