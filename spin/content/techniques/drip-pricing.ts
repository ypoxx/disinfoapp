import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: drip_pricing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const dripPricing: Technique = {
  id: 'drip_pricing',
  name: {
    de: 'Drip Pricing',
    en: 'Drip Pricing',
  },
  description: {
    de: 'Ein Dark Pattern der Preisdarstellung: Ein niedriger Einstiegspreis zieht in den Kaufprozess, verpflichtende Zusatzkosten — Gebühren, Zuschläge, Pauschalen — erscheinen erst schrittweise in späteren Schritten. Verglichen wird so auf Basis eines Preises, den am Ende niemand zahlt; der wachsende Aufwand im Prozess macht den Abbruch mit jedem Schritt unattraktiver.',
    en: 'A pricing dark pattern: a low headline price pulls people into the checkout, while mandatory extra costs — fees, surcharges, flat charges — surface only step by step later in the flow. Comparison shopping thus happens against a price nobody ends up paying, and the effort already sunk into the process makes abandoning it feel more costly with every step.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Reisebuchung für die Pressereise über das Portal der Airline: Die Eventmanagerin wählt den beworbenen Tarif zu 89 Euro, den sie zuvor mit zwei Wettbewerbern verglichen hat — im Checkout kommen Schritt für Schritt Gepäck, Sitzplatzreservierung und eine „Servicepauschale" hinzu, bis der Endpreis auf der Bezahlseite ein Drittel über dem Vergleichspreis liegt.',
    'Online-Abschluss eines Medienbeobachtungs-Tools im Self-Service: Der PR-Referent kalkuliert die Freigabevorlage mit dem beworbenen Tarif „ab 149 Euro im Monat" — im Bestellprozess kommen nacheinander Nutzerstaffel, Quellenpaket „Print" und eine verpflichtende Einrichtungsgebühr hinzu, jeweils erst auf der nächsten Seite sichtbar, sodass die Vorlage vor der Unterschrift neu geschrieben werden muss.',
    'Hotelbuchung für die Pressekonferenz über ein Buchungsportal: Die Teamassistentin der Unternehmenskommunikation reserviert zwölf Zimmer zum angezeigten Übernachtungspreis — erst in den folgenden Buchungsschritten erscheinen Resort Fee, Reinigungspauschale und eine Gebühr für die gewählte Zahlungsart, sodass der freigegebene Kostenrahmen beim Abschluss nicht mehr stimmt.',
  ],
  evidence: {
    studies: [
      'FTC (2022) - Bringing Dark Patterns to Light',
      'OECD (2022) - Dark Commercial Patterns'
    ],
    findings: 'Verbraucherschutzberichte von FTC, EU-Kommission und OECD (2022) dokumentieren Drip Pricing als verbreitetes Dark Pattern der Preisdarstellung; mit der indischen CCPA-Guideline (2023) wächst die Regulierung auch außerhalb von EU und USA. Diese Quellen belegen Verbreitung und rechtliche Einordnung, nicht die Wirkung: Wie stark schrittweise Kostenaufdeckung Kaufentscheidungen und Preiswahrnehmung tatsächlich verschiebt, hängt von Markt und Disclosure-Design ab und ist nicht einheitlich beziffert (moderate Evidenz, überwiegend westliche Datenbasis).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Regulierungs- und Prävalenzberichte (FTC, EU-Kommission, OECD); keine gepoolte Effektstärke',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns', 'bait_and_switch', 'sneaking', 'price_comparison_prevention'],
  warningNeurons: [
    'Der Endpreis auf der Bezahlseite liegt deutlich über dem beworbenen Einstiegspreis',
    'Verpflichtende Posten („Service-", „System-", „Bearbeitungspauschale") tauchen erst nach mehreren Bestellschritten auf',
    'Der Anbietervergleich lief über einen Preis, den am Ende niemand zahlt',
    'Jede einzelne Gebühr wirkt zu klein für einen Abbruch — zusammen tragen sie den eigentlichen Aufschlag',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
