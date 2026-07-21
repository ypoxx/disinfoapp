import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: price_comparison_prevention).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const priceComparisonPrevention: Technique = {
  id: 'price_comparison_prevention',
  name: {
    de: 'Comparison Prevention (Vergleichsverhinderung)',
    en: 'Comparison Prevention',
  },
  description: {
    de: 'Ein Dark Pattern, das den Preis- oder Leistungsvergleich selbst sabotiert: uneinheitliche Mengeneinheiten, nur im Bündel erhältliche Leistungen, hauseigene Paketnamen oder verweigerte Aufschlüsselungen sorgen dafür, dass sich Angebote nicht Posten für Posten nebeneinanderlegen lassen. Alle Kosten sind sichtbar — vergleichbar sind sie nicht.',
    en: 'A dark pattern that sabotages the act of comparing itself: mismatched units of measure, features sold only in bundles, proprietary package names, or refused itemisation keep offers from being lined up side by side. Every cost is on the table — it just cannot be compared.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Verhandlung über die Mediaplanung fürs nächste Jahr: Der Anzeigenverkäufer eines Fachverlags bietet der Mediaplanerin drei „Sichtbarkeitspakete" an — „Impact", „Impact Plus", „360" — jeweils anders geschnitten aus Print-Anzeigen, Newsletter-Bannern und Event-Logo. Einen Preis pro Anzeigenseite oder pro tausend Kontakte nennt er auch auf Nachfrage nicht: „Unsere Pakete sind so nicht aufschlüsselbar." Der Vergleich mit dem Konkurrenzverlag, der nach TKP anbietet, ist damit blockiert.',
    'Toolauswahl fürs Medienmonitoring: Die Kommunikationsreferentin vergleicht drei Angebote per E-Mail. Anbieter A rechnet pro monatlichem Erwähnungs-Kontingent, Anbieter B pro Nutzerlizenz plus „Quellenpaketen", Anbieter C ausschließlich im Jahresbündel mit Social Listening. Auf ihre Bitte, die Kosten auf „Preis pro Nutzer und Monat bei vergleichbarem Quellenumfang" umzurechnen, antwortet der Vertriebsmitarbeiter von C: „Unser Modell lässt sich so nicht abbilden."',
    'Standortsuche für die Jahrespressekonferenz: Das erste Tagungshotel schickt der Eventverantwortlichen der Pressestelle einen Paketpreis pro Person, das zweite Raummiete plus Einzelposten, das dritte ein „Pauschalarrangement", in dem Technik, Catering und Personal nicht ausgewiesen sind. Auf die Bitte um eine Aufschlüsselung antwortet der Bankettleiter, das Arrangement werde „grundsätzlich nur als Gesamtpaket kalkuliert".',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Comparison Prevention ist ein in Dark-Pattern-Taxonomien etabliertes Muster: Gray et al. (2018) und Mathur et al. (2019) führen die gezielte Vergleichsbehinderung als eigenständige Kategorie. Die Evidenz ist damit taxonomisch und prävalenzbasiert — sie beschreibt, dass und in welchen Formen das Muster vorkommt, nicht, wie stark es Entscheidungen tatsächlich verschiebt. Zur Verhaltenswirkung fehlen belastbare Experimente; sie gilt als stark kontextabhängig (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien, keine Wirkexperimente',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['drip_pricing', 'sneaking', 'sludge'],
  warningNeurons: [
    'Anbieter desselben Marktes rechnen in absichtlich verschiedenen Einheiten (pro Nutzer, pro Kontingent, pro Bündel) — eine gemeinsame Vergleichsgröße fehlt',
    'Leistungen gibt es nur in hauseigenen Paketen mit Fantasienamen, nie als aufgeschlüsselte Einzelposten',
    'Die Bitte um Umrechnung auf eine Standardgröße (pro Stück, pro Nutzer, pro tausend Kontakte) wird abgelehnt oder ausweichend beantwortet',
    'Alle Kosten stehen im Angebot — nebeneinanderlegen lässt sich trotzdem nichts',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
