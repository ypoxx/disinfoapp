import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: sludge).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const sludge: Technique = {
  id: 'sludge',
  name: {
    de: 'Sludge / Bad Friction',
    en: 'Sludge / Bad Friction',
  },
  description: {
    de: 'Absichtlich aufgebaute oder geduldete Reibung — Formulare, Medienbrüche, Fristen, Wartezeiten —, die Menschen von Handlungen abhält, die in ihrem eigenen Interesse liegen: Erstattung anfordern, widersprechen, löschen lassen. Der Weg zum eigenen Anspruch ist mühsamer als der Weg zum Abschluss.',
    en: 'Friction that is deliberately built in or knowingly left in place — forms, channel switches, deadlines, waiting periods — to deter people from acting in their own interest: claiming a refund, objecting, getting something removed. The path to what you are owed is harder than the path to the purchase.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Reichweiten-Gutschrift beim Werbenetzwerk: Die Mediamanagerin einer PR-Agentur bucht Kampagnen im Self-Service-Dashboard in wenigen Minuten. Die vertraglich zugesicherte Gutschrift für fehlerhaft ausgespielte Anzeigen verlangt dagegen ein PDF-Formular auf dem Postweg, Screenshots jeder einzelnen Fehlausspielung und eine Frist von 30 Tagen — ein großer Teil der Ansprüche verfällt, ohne geltend gemacht zu werden.',
    'Branchenverzeichnis ohne Auftrag: Ein Portal hat das Profil einer Pressesprecherin samt Kontaktdaten ungefragt angelegt. Der kostenpflichtige Premium-Eintrag lässt sich per Klick buchen; die Löschung des Profils verlangt ein unterschriebenes Formular auf dem Postweg samt Ausweiskopie, Bearbeitungszeit laut Website „bis zu acht Wochen".',
    'Kulanzgutschrift der Druckerei: Nach fehlerhaft gedruckten Geschäftsberichten sagt der Vertrieb der Teamassistenz der Kommunikationsabteilung am Telefon eine Gutschrift zu. Einlösen lässt sie sich nur über eine Hotline, die werktags von 9 bis 11 Uhr besetzt ist — und der Gutschriftcode verfällt nach 14 Tagen.',
  ],
  evidence: {
    studies: [
      'CMA & ICO (2023) - Harmful design in digital markets: Online Choice Architecture',
      'FTC (2022) - Bringing Dark Patterns to Light'
    ],
    findings: 'Sludge ist regulatorisch gut dokumentiert: Aufsichtsberichte wie CMA/ICO (2023) und FTC (2022) beschreiben asymmetrische Friktion als eigenständiges Schadensmuster und ordnen es rechtlich ein — sie belegen Verbreitung und Definition, nicht die Effektstärke. Wie stark Sludge Verhalten im Einzelfall verschiebt, gilt als heterogen und kontextabhängig; dass unnötige Hürden Autonomie und Wahlfreiheit untergraben, ist primär eine normativ begründete, indirekt gestützte Einordnung (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Regulatorische Berichte und Marktstudien; keine gepoolte Effektschätzung',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns', 'subscription_trap_obstruction'],
  warningNeurons: [
    'Der Weg hinein (buchen, zustimmen, kaufen) hat sichtbar weniger Schritte als der Weg zum eigenen Anspruch (erstatten, widersprechen, löschen)',
    'Medienbruch nur in eine Richtung: online abschließen, aber per Post, Fax oder Hotline zurückfordern',
    'Enge Fristen, kurze Servicezeiten oder Formvorgaben ausgerechnet dort, wo die Gegenseite zahlen oder etwas herausgeben müsste',
    'Abgelehnte oder „unvollständige" Anträge mit Bitte um Neueinreichung — die Hürde selbst erledigt die Ablehnung',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
