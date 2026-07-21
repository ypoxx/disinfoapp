import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: search_engine_manipulation_effect).
 * Frontier-Tier: als BEGRIFFSWISSEN gelehrt (Muster benennen), nicht als
 * belegter Effekt. Single-Lab-Abhängigkeit (Epstein/Robertson), keine
 * unabhängige Feldreplikation. Es gilt Overlay-Schutz.
 */
export const searchEngineManipulationEffect: Technique = {
  id: 'search_engine_manipulation_effect',
  name: {
    de: 'Search Engine Manipulation Effect (SEME)',
    en: 'Search Engine Manipulation Effect (SEME)',
  },
  description: {
    de: 'Die Reihenfolge von Suchergebnissen wird so gestaltet, dass günstige Treffer die oberen Plätze belegen und ungünstige nach unten rücken — mit dem Ziel, die Präferenz noch unentschlossener Nutzer zu verschieben.',
    en: 'Ordering search results so that favourable hits occupy the top positions and unfavourable ones are pushed down — aiming to shift the preferences of still-undecided users.',
  },
  category: 'digital_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Reputationsagentur, Strategie-Call mit einem Automobilzulieferer nach einem Rückruf: Der SEO-Lead erklärt der Kommunikationsleiterin, zum breit abgedeckten Firmennamen stünden bereits zutreffende Rückruf-Berichte auf den vorderen Suchplätzen — man werde die Trefferreihenfolge so umsortieren, dass günstige Seiten nach oben wandern und die korrekten kritischen Berichte auf Seite zwei rücken. Ziel seien Interessenten, die den Namen googeln, ohne sich schon eine Meinung gebildet zu haben, und die erfahrungsgemäß nur die ersten Treffer ansehen.',
    'Hintergrundgespräch im Kampagnenteam eines kommunalen Referendums: Der Digitalstratege präsentiert der Kampagnenleiterin einen Plan, mit dem zur breit diskutierten Abstimmungsfrage die organischen Suchergebnisse so umsortiert werden, dass zustimmende Treffer die Plätze eins bis fünf halten und die ebenso vorhandenen Gegenargumente erst weit unten erscheinen — gezielt für unentschlossene Wählerinnen, deren Präferenz sich an den ersten Treffern bilden soll.',
    'Interner Trust-&-Safety-Review bei einem Vergleichsportal: Eine Analystin zeigt der Head of Trust, dass ein Anbieter zum vielfach besetzten Produktsegment auf die oberen Ergebnisplätze geschoben wurde, während gleichwertige Wettbewerber-Treffer nach unten rutschen. Nutzer ohne feste Präferenz, die den erstplatzierten Treffer wählen, werden so allein durch die Position zu diesem Anbieter gelenkt.',
  ],
  evidence: {
    studies: [
      'Epstein & Robertson (2015) - The search engine manipulation effect (SEME) and its possible impact on the outcomes of elections',
      'Zweig (2017) - Watching the watchers: Epstein and Robertson\'s \'Search Engine Manipulation Effect\'',
      'Epstein & Li (2024) - Can biased search results change people\'s opinions about anything at all? A close replication of SEME',
    ],
    findings: 'Der Begriff bezeichnet den in Laborstudien beobachteten Effekt, dass die Reihenfolge von Suchtreffern die Präferenz unentschlossener Nutzer verschieben kann. Die Belege stammen nahezu vollständig aus einem einzelnen Forschungsteam (Epstein/Robertson), eine unabhängige Feldreplikation fehlt; realistische Verschiebungen liegen eher bei 2–4 Prozent, während oft zitierte zweistellige Werte auf einer summierenden Metrik (VMP) und Subgruppen beruhen (Kritik: Zweig 2017). Konfidenz niedrig, Übertragbarkeit auf reale Wahlen umstritten.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Laborexperimente eines einzelnen Forschungsteams; keine unabhängige Feldreplikation',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['digital_influence', 'microtargeting', 'agenda_setting'],
  warningNeurons: [
    'Auffällig gleichförmige Treffer auf den ersten Suchplätzen zu einem Namen, während Gegenstimmen erst auf Seite zwei erscheinen',
    'Frisch optimierte Landingpages oder Bewertungsseiten besetzen kurz vor einem heiklen Ereignis die oberen Ränge',
    'Eine beauftragte Agentur verspricht, Suchergebnisse zu „bereinigen" oder zutreffende Treffer „nach unten zu drücken"',
    'Der Effekt zielt ausdrücklich auf Unentschlossene, nicht auf bereits Überzeugte',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
