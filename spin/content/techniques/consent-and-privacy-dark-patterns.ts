import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: consent_and_privacy_dark_patterns).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const consentAndPrivacyDarkPatterns: Technique = {
  id: 'consent_and_privacy_dark_patterns',
  name: {
    de: 'Consent- und Privacy-Dark-Patterns',
    en: 'Consent and Privacy Dark Patterns',
  },
  description: {
    de: 'Dark Patterns rund um die Einwilligung: Interface- und Kommunikationsmuster, die die Entscheidung über Datenverarbeitung oder Datenpreisgabe in Richtung Zustimmung lenken — durch erschwerte Ablehnung, visuelle Hierarchie zugunsten des Zustimmen-Buttons, vorangekreuzte oder gebündelte Zwecke, vage Zweckangaben und wiederholtes Nachfragen bis zur Einwilligungsmüdigkeit. Manipulativ wird das Muster, sobald es die informierte, freiwillige und widerrufbare Entscheidung untergräbt.',
    en: 'Dark patterns built around consent: interface and communication patterns that steer decisions about data processing or disclosure towards "yes" — through obstructed refusal, visual hierarchy favouring the accept button, pre-ticked or bundled purposes, vague purpose statements, and repeated prompts that wear consent down. The pattern turns manipulative once it undermines an informed, voluntary, revocable decision.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Abnahme des Website-Relaunchs im Review-Call: Die UX-Designerin der Digitalagentur führt der Leiterin Unternehmenskommunikation den neuen Cookie-Dialog vor — „Alle akzeptieren" als farbiger Primärbutton, die Ablehnung nur über einen grau gesetzten Textlink „Einstellungen verwalten", hinter dem 14 Verarbeitungszwecke einzeln abzuwählen sind. „Das hebt die Opt-in-Quote fürs Marketing-Tracking", erklärt sie.',
    'Freigabe der Whitepaper-Landingpage in der Marketingrunde: Der Demand-Gen-Manager legt der Kommunikationschefin das Download-Formular vor — die vorangekreuzte Checkbox bündelt den Download mit der Einwilligung, dass „wir und ausgewählte Partner" die Daten „zu Marketingzwecken" nutzen dürfen; wer sie abwählt, bekommt die Meldung, das Whitepaper stehe dann nicht zur Verfügung.',
    'Test der Teilnehmer-App vor dem Kundenkongress: Die Eventmanagerin meldet dem Projektleiter des App-Dienstleisters per Ticket, dass der Dialog zum Adressbuch-Zugriff nur „Erlauben" und „Später erinnern" anbietet — ein echtes Nein gibt es nicht, und der Dialog erscheint bei jedem App-Start erneut, bis zugestimmt wird.',
  ],
  evidence: {
    studies: [
      'OECD (2022) - Dark Commercial Patterns',
      'CCPA Indien (2023) - Guidelines for Prevention and Regulation of Dark Patterns'
    ],
    findings: 'Regulierungs- und Verbraucherschutzberichte — vor allem die OECD-Synthese (2022), ergänzt um die indische CCPA-Guideline (2023) — dokumentieren Consent- und Privacy-Dark-Patterns als verbreitete Muster und liefern Taxonomie und rechtliche Einordnung, aber keine Effektstärken. Dass Dark Commercial Patterns Entscheidungen über Käufe, Daten und Zustimmung beeinflussen können, ist damit nur indirekt gestützt; für die einzelnen Privacy-Unterformen fehlt kontextspezifische Primärevidenz. Auch die Wirksamkeit der üblichen Gegenstrategien ist für diese Technik nicht direkt belegt (moderate Evidenz, Rechtslage weltweit uneinheitlich).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Regulierungs- und Prävalenzberichte (OECD, indische CCPA); keine Effektstärken für Privacy-Unterformen',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns', 'sludge', 'default_status_quo', 'subscription_trap_obstruction'],
  warningNeurons: [
    'Zustimmen ist ein Klick, Ablehnen ein Menü — die Wege zu Ja und Nein sind ungleich lang oder ungleich sichtbar',
    'Zweckangaben bleiben vage („Verbesserung des Nutzererlebnisses", „ausgewählte Partner") oder mehrere Zwecke stecken in einer einzigen Checkbox',
    'Eine echte Ablehnen-Option fehlt oder heißt „Später"/„Nicht jetzt" — und der Dialog kommt wieder, bis zugestimmt wird',
    'Voreingestellte Häkchen bei Einwilligungen, die laut Begleittext freiwillig sind',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
