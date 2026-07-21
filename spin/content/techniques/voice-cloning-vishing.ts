import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Pilotwelle R3) (Taxonomie 21.0.1, Knoten: voice_cloning_vishing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const voiceCloningVishing: Technique = {
  id: 'voice_cloning_vishing',
  name: {
    de: 'Voice Cloning / Vishing',
    en: 'Voice Cloning / Vishing',
  },
  description: {
    de: 'Einsatz geklonter Stimmen oder Audio-Deepfakes, um sich in Anrufen und Sprachnachrichten als vertraute oder befugte Person auszugeben — für Betrug, Identitätstäuschung und soziale Manipulation. Vishing bezeichnet dabei das Phishing per Stimme.',
    en: 'Using cloned voices and audio deepfakes to pose as a trusted or authorised person in calls and voice messages — for fraud, identity deception, and social engineering. Vishing is phishing by voice.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Anruf bei der Referentin der Pressestelle am Abend vor der Bilanzpressekonferenz: Die vermeintliche Stimme des Kommunikationschefs — Tonfall und Sprechrhythmus täuschend echt — bittet unter Zeitdruck darum, die noch gesperrte Pressemitteilung „vorab an diese private Mailadresse" zu schicken; der echte Chef hat nie angerufen, seine Stimme ließ sich aus Interview-Mitschnitten klonen.',
    'WhatsApp-Sprachnachricht an eine Wirtschaftsredakteurin vor Veröffentlichung eines kritischen Berichts: Die vertraute Stimme des Unternehmenssprechers „autorisiert" ein entlastendes Exklusivzitat — der echte Sprecher hat die Nachricht nie aufgenommen; seine Stimme wurde aus Podcast-Auftritten synthetisiert.',
    'Anruf beim Kundenberater einer PR-Agentur, angeblich vom Vorstand des wichtigsten Mandanten: Die geklonte Stimme verlangt hörbar gereizt, ein vorbereitetes Dementi „sofort und ohne weitere Abstimmung" an den Presseverteiler zu geben — erst der Rückruf auf der hinterlegten Nummer zeigt, dass der echte Vorstand von nichts weiß.',
  ],
  evidence: {
    studies: [
      'EU AI Act (2024) - Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence',
      'FBI IC3 (2025) - Alert: Senior US Officials Impersonated in Malicious Messaging Campaign (AI Vishing)',
      'FBI IC3 (2025) - Update: Senior U.S. Officials Continue To Be Impersonated in Malicious Messaging Campaign'
    ],
    findings: 'Fallwarnungen des FBI/IC3 (2025) sowie Entscheidungen von FCC und FTC (2024) dokumentieren, dass geklonte Stimmen in realen Vishing- und Impersonation-Kampagnen eingesetzt werden — belegt ist damit der Schadenspfad, nicht eine allgemeine Erfolgsrate. Wahrnehmungsstudien deuten zusätzlich an, dass Audio-Deepfakes auch das Vertrauen in echte Aufnahmen beschädigen. Automatische Detektion bleibt unter realistischen Bedingungen ein offenes technisches Problem; wie oft Angriffe gelingen, hängt stark von Kontext, Zielperson, Kanal und Gegenprüfung ab (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Fall- und Regulierungsquellen; keine repräsentativen Feldstudien',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['synthetic_media'],
  warningNeurons: [
    'Vertraute Stimme, aber ungewohnter Kanal, unbekannte Nummer oder untypische Uhrzeit',
    'Kombination aus Zeitdruck, Vertraulichkeit („nur unter uns") und der Bitte, den üblichen Prozess zu umgehen',
    'Rückruf über die hinterlegte Nummer oder Wechsel auf Video wird abgeblockt oder verzögert',
    'Das Gespräch weicht Zwischenfragen aus: flache Betonung, fehlende Spontanreaktion, untypische Pausen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
