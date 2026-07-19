import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: interactive_ai_persuasion).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const interactiveAiPersuasion: Technique = {
  id: 'interactive_ai_persuasion',
  name: {
    de: 'Interaktive KI-Persuasion',
    en: 'Interactive AI Persuasion',
  },
  description: {
    de: 'Dialogfähige KI-Systeme, die im Gesprächsverlauf auf Einwände, Emotionen und Formulierungen der Nutzerin reagieren und ihre Argumente Zug um Zug neu zuschneiden. Der persuasive Hebel entsteht aus der laufenden Anpassung im Dialog selbst — nicht aus einem vorab fixierten Text und nicht aus reiner Profil-Segmentierung.',
    en: 'Conversational AI systems that respond to a user\'s objections, emotions and wording as the dialogue unfolds and re-tailor their arguments turn by turn. The persuasive lever comes from the live adaptation inside the conversation itself — not from a pre-scripted message and not from mere profile-based targeting.',
  },
  category: 'ai_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Kündigungsstrecke im Kundenportal eines Mobilfunkanbieters: Ein KI-Retention-Assistent chattet mit einem kündigungswilligen Bestandskunden und formt seine Gegenargumente in Echtzeit um — nennt der Kunde den Preis, rechnet der Bot einen Rabatt vor; nennt er die Netzabdeckung, wechselt der Bot zu Ausbaudaten; jede neue Antwort verschiebt das nächste Argument, statt einen festen Halte-Text abzuspulen.',
    'Beratungs-Chat auf einem Gesundheitsportal: Eine verunsicherte Nutzerin schildert einem KI-Berater ihre Bedenken gegen eine Früherkennungsuntersuchung. Der Bot greift jeden einzelnen Einwand nacheinander auf — Angst vor dem Ergebnis, Zeitaufwand, Schamgefühl — und schneidet sein Zureden fortlaufend auf genau die zuletzt geäußerte Sorge zu.',
    'Dialog-Widget im Mitgliederbereich einer Genossenschaft vor der Abstimmung über eine neue Beitragsordnung: Ein KI-Gesprächsagent bespricht die Vorlage mit noch unentschlossenen Mitgliedern und passt seine Argumente Zug um Zug an die im Chat vorgebrachten Zweifel an — auf einen Kosteneinwand folgt ein Kosten-Nutzen-Argument, auf einen Einwand zum Aufwand ein Umsetzungsplan; die Argumentationslinie entsteht erst im Verlauf des Gesprächs.',
  ],
  evidence: {
    studies: [
      'Matz et al. (2024) - The potential of generative AI for personalized persuasion at scale',
      'Salvi et al. (2025) - On the conversational persuasiveness of GPT-4',
      'Costello et al. (2024) - Durably reducing conspiracy beliefs through dialogues with AI'
    ],
    findings: 'Kontrollierte Experimente (u.a. Salvi et al. 2025; Matz et al. 2024) zeigen, dass dialogfähige LLM-Systeme in einzelnen Settings mindestens so überzeugend wirken können wie menschliche Gegenüber und dass Personalisierung bzw. adaptive Anpassung die persuasive Wirkung erhöhen kann. Die Befunde stammen überwiegend aus Laborstudien und Preprints, decken nicht jede Domäne, Zielgruppe oder Modellkonfiguration ab, und die Wirkpfade (u.a. Informationsdichte, Personalisierung, Post-Training) sind heterogen. Die Wirkung ist damit plausibel belegt, in Reichweite und Größe aber noch offen (moderate Evidenz).',
    uncertainty: {
      confidence: 0.7,
      sampleSize: 'Mehrere kontrollierte Experimente sowie Meta-/Survey-Arbeiten (überwiegend Preprints)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['ai_persuasion', 'microtargeting', 'sycophancy', 'anthropomorphic_trust_cues'],
  warningNeurons: [
    'Der Chat kontert jeden Einwand mit einem neu zugeschnittenen Gegenargument, statt einen festen Info-Text zu wiederholen',
    'Das System greift Emotionen und Formulierungen aus deiner letzten Antwort auf und spiegelt sie in seiner Begründung',
    'Je länger das Gespräch läuft, desto passgenauer sitzen die Argumente — die Antworten werden im Verlauf persönlicher',
    'Kein menschliches Gegenüber erkennbar, aber ein Gesprächsziel (Bleiben, Kaufen, Zustimmen) wird beharrlich und anpassungsfähig verfolgt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
