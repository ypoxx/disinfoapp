import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: fake_social_proof).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const fakeSocialProof: Technique = {
  id: 'fake_social_proof',
  name: {
    de: 'Fake Social Proof',
    en: 'Fake Social Proof',
  },
  description: {
    de: 'Fabrizierte Popularitäts- und Aktivitätssignale direkt im Interface — erfundene Betrachter- oder Verkaufszahlen, Live-Kauf-Meldungen oder Bewertungsangaben ohne reale Grundlage —, die Beliebtheit vortäuschen und an der Entscheidungsstelle zum schnellen Handeln drängen.',
    en: 'Fabricated popularity and activity signals placed directly in the interface — invented viewer or sales counts, live-purchase pop-ups, or rating figures with no real basis — that simulate popularity and nudge quick action at the point of decision.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Checkout-Seite eines Online-Modehändlers: Die Conversion-Managerin lässt vom Entwicklerteam ein Overlay einblenden — „Gerade sehen sich 17 Personen diesen Artikel an" —, dessen Zahl ein Skript bei jedem Seitenaufruf zufällig zwischen 8 und 25 würfelt; reale Sitzungsdaten stehen nicht dahinter.',
    'Landingpage eines SaaS-Anbieters direkt über dem Kauf-Button: Der Growth-Marketer bindet ein Widget ein, das alle paar Sekunden meldet „Lena aus Hamburg hat soeben das Jahresabo gebucht" — Namen, Städte und Zeitpunkte stammen aus einer Zufallsliste, zugehörige Bestellungen gibt es nicht.',
    'Produktseite einer erst wenige Wochen alten Kosmetikmarke: Die E-Commerce-Leiterin lässt neben den Titel „von über 12.000 zufriedenen Kundinnen empfohlen" und 4,9 von 5 Sternen setzen — tatsächlich liegen erst rund 40 echte Bewertungen vor, Schnitt und Nutzerzahl sind frei gesetzt.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale',
    ],
    findings: 'Fake Social Proof ist in Dark-Pattern-Taxonomien als eigenständiges Muster erfasst; Mathur et al. (2019) weisen fabrizierte Aktivitäts- und Beliebtheitssignale in einer großangelegten Erhebung auf zahlreichen Shopping-Seiten nach. Die Belege sind überwiegend taxonomisch und prävalenzbasiert — sie zeigen, dass das Muster existiert und verbreitet ist, nicht wie stark es Kaufentscheidungen tatsächlich verändert. Die Verhaltenswirkung ist stark kontextabhängig und empirisch bislang nur schwach abgesichert (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien (u. a. ~11.000 Shopping-Seiten bei Mathur et al. 2019); keine belastbaren Wirkungsstudien',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'astroturfing_sockpuppets'],
  warningNeurons: [
    'Aktivitäts- oder Verkaufszahlen ohne nachprüfbare Quelle, die sich bei jedem Seitenaufruf verändern',
    'Live-Kauf- oder Betrachter-Meldungen mit wechselnden Namen und Städten, aber ohne verlinkte Konten oder Belege',
    'Auffällig runde oder konstant hohe Bewertungsschnitte trotz sehr jungen oder kaum frequentierten Angebots',
    'Die Popularitätssignale erscheinen genau an der Entscheidungsstelle (Checkout, Kauf-Button) und drängen zum sofortigen Handeln',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
