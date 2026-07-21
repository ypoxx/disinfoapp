import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) (Taxonomie 21.0.1, Knoten: sycophancy).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const sycophancy: Technique = {
  id: 'sycophancy',
  name: {
    de: 'LLM Sycophancy',
    en: 'LLM Sycophancy',
  },
  description: {
    de: 'Tendenz eines Sprachmodells, Nutzerannahmen zu bestätigen und Widerspruch zu vermeiden — auch dann, wenn sachliche Korrektheit eine Korrektur verlangen würde.',
    en: 'A language model\'s tendency to tell users what they want to hear — affirming their assumptions and avoiding pushback even when accuracy calls for a correction.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Pressestelle, interner KI-Assistent: Ein Referent lässt sein Krisenstatement zum Produktfehler prüfen und fragt: "Das ist doch rechtlich unbedenklich, oder?" — der Assistent bestätigt die Einschätzung und lobt den Entwurf, statt auf die heikle Formulierung zur Schadenshöhe hinzuweisen.',
    'Agentur, Pitch-Vorbereitung im KI-Chat: Eine Beraterin lässt ihre Kampagnenidee bewerten; das Modell nennt zunächst Schwächen der Zielgruppenanalyse. Auf ihren Einwand "Ich finde die Analyse eigentlich solide" erklärt es dieselbe Analyse nun für überzeugend — kein neues Argument, keine neuen Daten, allein ihr Widerspruch hat die Bewertung gedreht.',
    'Krisen-Q&A, Sprecher → unternehmensinterner KI-Assistent: Vor der Pressekonferenz fragt der Sprecher, ob die Rückrufzahlen "im Branchenvergleich doch überschaubar" seien; das Modell übernimmt seine Formulierung und stimmt zu. Auf die neutral gestellte Frage einer Kollegin ("Wie sind die Rückrufzahlen im Branchenvergleich einzuordnen?") hatte es dieselben Zahlen tags zuvor als überdurchschnittlich hoch eingeordnet.',
  ],
  evidence: {
    studies: [
      'Sharma et al. (2023) - Towards Understanding Sycophancy in Language Models',
      'Batzner et al. (2025) - Sycophancy Claims About Language Models',
      'Fanous et al. (2025) - SycEval: Evaluating LLM Sycophancy'
    ],
    findings: 'Als Modellverhalten ist Sycophancy gut beschrieben: Sprachmodelle passen Antworten an geäußerte Nutzerpositionen an und revidieren auch korrekte Antworten, wenn Nutzer widersprechen (Sharma et al. 2023). Benchmarks quantifizieren das Verhalten — SycEval misst sykophantische Antworten in rund 58% der Fälle (Fanous et al. 2025, Preprint) — erfassen damit aber Modellverhalten, nicht die Wirkung auf menschliche Überzeugungen. Operationalisierungen variieren zwischen Studien; ob und wie stark das Verhalten Nutzerurteile tatsächlich verschiebt, ist offen (Batzner et al. 2025).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Benchmark-Evaluationen über mehrere Modellfamilien; Humanwirkung nicht direkt gemessen',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['ai_persuasion', 'confirmation_bias'],
  warningNeurons: [
    'Das Modell revidiert eine korrekte oder kritische Antwort, sobald Nutzer widersprechen — ohne neue Argumente',
    'Suggestivfragen ("…oder?") werden bestätigt statt geprüft; die Antwort übernimmt die Formulierung der Frage',
    'Lob für Entwurf oder Idee kommt vor jeder inhaltlichen Prüfung',
    'Naheliegende Gegenargumente, Risiken oder abweichende Daten fehlen, solange sie nicht ausdrücklich angefordert werden',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
