import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: confirmshaming).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const confirmshaming: Technique = {
  id: 'confirmshaming',
  name: {
    de: 'Confirmshaming',
    en: 'Confirmshaming',
  },
  description: {
    de: 'Dark Pattern, bei dem der Text der Ablehn-Option Nutzer:innen für ihr Nein beschämt: Die Absage wird als dumm, geizig oder verantwortungslos formuliert, während die Zustimmung neutral bleibt. Der Scham-Hebel steckt im Wortlaut des Opt-out-Buttons selbst, nicht im umgebenden Argument.',
    en: 'A dark pattern in which the wording of the decline option shames the user for saying no: opting out is phrased as foolish, cheap, or irresponsible, while the accept button stays neutral. The shame sits in the label of the opt-out control itself, not in any surrounding argument.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Exit-Intent-Layer im Onlineshop eines Modehändlers: Die Conversion-Managerin beschriftet den Schließen-Button des Rabatt-Pop-ups nicht mit „Nein danke", sondern mit „Nein, ich zahle lieber den vollen Preis" — der Annehmen-Button daneben heißt schlicht „10 % sichern".',
    'Abmeldestrecke einer Fitness-App: Der Lifecycle-Marketer lässt die Schaltfläche zum Kündigen mit „Ich gebe meine Gesundheit auf" beschriften; wer das Abo behält, tippt auf „Dranbleiben und fit werden".',
    'Download-Formular für ein Whitepaper auf der Website eines B2B-Softwareanbieters: Die Demand-Gen-Managerin formuliert den Verzichts-Link unter dem Formular als „Nein danke, ich entscheide lieber aus dem Bauch", während der Absende-Button „Report jetzt lesen" heißt.',
  ],
  evidence: {
    studies: [
      'Commission (2022) - Bringing Dark Patterns to Light',
      'India (2023) - Guidelines for Prevention and Regulation of Dark Patterns'
    ],
    findings: 'Confirmshaming ist in Dark-Pattern-Taxonomien und regulatorisch klar als eigenes Muster beschrieben (FTC 2022; EU-Kommission 2022; indische CCPA-Leitlinie 2023). Die Belege sind jedoch überwiegend definitorisch-regulatorisch, nicht experimentell: Wie stark beschämende Ablehn-Formulierungen die Zustimmung tatsächlich erhöhen, ist kaum sauber quantifiziert und dürfte stark vom Kontext abhängen (schwache Evidenz, qualitativ geschätztes Konfidenzintervall 0,49–0,79). Vereinzelt deutet die Forschung sogar an, dass zu plumpe Beschämung eher Ärger und Reaktanz auslösen kann.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine experimentellen Effektstärken; taxonomisch/regulatorisch belegt',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['dark_patterns', 'guilt_appeals', 'consent_and_privacy_dark_patterns'],
  warningNeurons: [
    'Der Ablehn-Button ist als Selbstvorwurf formuliert („Nein, ich will …") statt neutral („Nein danke")',
    'Zustimmen ist neutral bis positiv beschriftet, Ablehnen negativ oder abwertend — die beiden Optionen sind sprachlich asymmetrisch',
    'Das Nein unterstellt dir einen Charakter- oder Kompetenzmangel (dumm, geizig, verantwortungslos)',
    'Die Scham steckt im Wortlaut der Wahl selbst, nicht in einem sachlichen Argument daneben',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
