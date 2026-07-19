import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: anthropomorphic_trust_cues).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const anthropomorphicTrustCues: Technique = {
  id: 'anthropomorphic_trust_cues',
  name: {
    de: 'Anthropomorphe Vertrauenssignale',
    en: 'Anthropomorphic Trust Cues',
  },
  description: {
    de: 'Vermenschlichende Gestaltungssignale — Name, Stimme, Avatar, Ich-Form, Gefühlsvokabular —, die ein System als menschenähnliches Gegenüber inszenieren und ihm Kompetenz, Empathie oder Verlässlichkeit zuschreiben lassen können, die es nicht hat; heikel wird das, wenn zugleich Grenzen und Interessen des Systems verdeckt bleiben.',
    en: 'Design cues that make a system feel human — a name, a voice, an avatar, first-person phrasing, emotional vocabulary — inviting users to credit it with competence, empathy, or reliability it may not have; the pattern turns problematic when the system\'s limits and interests stay hidden at the same time.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Produktdemo eines Chatbot-Anbieters, Vertriebsleiter → Leiterin Kundenkommunikation: Der Service-Bot „Clara" tritt mit Porträtfoto, simulierten Tipppausen und Sätzen wie „Da muss ich kurz nachdenken" und „Das tut mir wirklich leid für Sie" auf — auf die Frage, ob sich der Bot als KI zu erkennen gibt, weicht der Vertriebsleiter aus: Die menschliche Anmutung sei „der wichtigste Akzeptanz-Hebel".',
    'Intranet-Launch eines internen KI-Assistenten, HR-Projektleiterin → Leiter interne Kommunikation bei der Textabnahme: Der Assistent soll als „Kollege Max" eingeführt werden — mit Mitarbeiterporträt im Team-Layout, eigener Vorstellungsmail („Ich freue mich auf euch") und dem Anspruch, er „kenne das Unternehmen wie ein langjähriger Kollege"; Hinweise auf Fehlergrenzen und Datenverarbeitung fehlen im Entwurf komplett.',
    'Kampagnen-Briefing bei einem Versicherer, Produktmanager → Kommunikationsberaterin: Der Altersvorsorge-Bot duzt die Nutzer, sagt „Ich mache mir Sorgen um deine Rentenlücke" und wird in den Anzeigen als „dein persönlicher Finanzcoach, der immer für dich da ist" inszeniert — dass hinter den Empfehlungen Provisionsinteressen und ein begrenztes Produktuniversum stehen, soll laut Briefing „die Tonalität nicht stören".',
  ],
  evidence: {
    studies: [
      'Rogiers et al. (2024) - Persuasion with Large Language Models: a Survey',
      'Pizzi et al. (2023) - I, chatbot! The impact of anthropomorphism and gaze direction on willingness to disclose personal information and behavioral intentions'
    ],
    findings: 'Der Begriff beschreibt Gestaltungssignale wie Name, Stimme, Avatar oder Ich-Form, die ein System menschenähnlich erscheinen lassen. Laborbefunde deuten an, dass anthropomorphe Chatbot-Gestaltung wahrgenommenes Vertrauen und die Bereitschaft zur Selbstoffenbarung erhöhen kann (Pizzi et al. 2023); der Effekt auf tatsächliches Verhalten gilt als fragil und kontextabhängig, Replikationen stehen aus. Ob solche Signale manipulativ wirken, hängt nach der Übersichtsarbeit von Rogiers et al. (2024) von Täuschung, Kontext und Vulnerabilität ab — direkte Wirkungsevidenz für einzelne Designelemente fehlt (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Einzelne Laborstudien und eine Übersichtsarbeit; keine Wirkungsstudien zu einzelnen Designelementen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['authority', 'sycophancy', 'automation_bias_overreliance'],
  warningNeurons: [
    'Ein System spricht in Ich-Form über Gefühle oder Fürsorge („ich freue mich", „ich mache mir Sorgen"), die es nicht haben kann',
    'Menschlicher Name, Porträt-Avatar oder inszenierte Tipp- und Atempausen kaschieren, dass eine Software antwortet',
    'Beziehungsvokabular („dein persönlicher Begleiter", „immer für dich da") ersetzt Angaben zu Grenzen, Datenverarbeitung und Interessen des Anbieters',
    'Die direkte Frage, ob man mit einer KI spricht, wird ausweichend oder gar nicht beantwortet',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
