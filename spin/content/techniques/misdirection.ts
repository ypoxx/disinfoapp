import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: misdirection).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const misdirection: Technique = {
  id: 'misdirection',
  name: {
    de: 'Misdirection (Fehlleitung)',
    en: 'Misdirection',
  },
  description: {
    de: 'Dark Pattern, bei dem Gestaltung und Wortwahl die Aufmerksamkeit gezielt auf die für den Anbieter vorteilhafte Option lenken und die im Interesse der Nutzer:innen liegende Wahl unauffällig machen: Sie wird klein, blass, weggescrollt oder als bloßer Textlink gesetzt, während die gewünschte Option groß und farbig prangt. Die Fehlleitung sitzt in der Salienz-Asymmetrie der Oberfläche, nicht in einem beschämenden Wortlaut oder einem heimlich eingefügten Zusatz.',
    en: 'A dark pattern in which layout and wording deliberately steer attention toward the option that benefits the provider while making the choice in the user\'s interest hard to notice: it is rendered small, faint, scrolled out of view, or demoted to a plain text link, while the preferred option is large and eye-catching. The misdirection lives in the interface\'s salience asymmetry, not in shaming wording or a quietly inserted add-on.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Freigabe der neuen Buchungsstrecke im Reiseportal: Der Product Owner zeigt dem Team die Bezahlseite. Die Weiterbuchung mit kostenpflichtiger Reiseversicherung liegt als großer grüner Button „Sicher weiter" oben; die Variante ohne Zusatz steht nur als blasser grauer Textlink „Ohne Schutz fortfahren" klein darunter.',
    'Review des Paywall-Screens einer Meditations-App: Die Growth-Designerin präsentiert der Produktleitung den Abo-Screen. Das Jahresabo prangt als groß hervorgehobene Karte mit „Beliebt"-Badge in der Bildmitte; der Weg in die kostenlose Basis-Version führt nur über ein kaum sichtbares graues „Später" oben in der Ecke.',
    'Abnahme des neuen Spendenformulars einer Hilfsorganisation: Der Fundraising-Leiter geht mit der Online-Redaktion die Seite durch. Die monatliche Dauerspende ist als großer, farbig hinterlegter Button „Jeden Monat helfen" gesetzt; die einmalige Spende lässt sich nur über einen kleinen, blassgrauen Reiter am unteren Seitenrand auswählen.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Misdirection ist in Dark-Pattern-Taxonomien als eigenständiges Muster etabliert und breit dokumentiert (Gray et al. 2018; Mathur et al. 2019 in einer Analyse von rund 11.000 Shopping-Seiten). Die Belege sind jedoch überwiegend taxonomisch und prävalenzbasiert, nicht experimentell: Wie stark eine salienz-asymmetrische Gestaltung die tatsächliche Entscheidung verschiebt, ist kaum sauber quantifiziert und dürfte stark vom Kontext abhängen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine experimentellen Effektstärken; taxonomisch/prävalenzbasiert belegt',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['dark_patterns', 'sneaking', 'visual_manipulation', 'default_status_quo'],
  warningNeurons: [
    'Die für dich günstige Option (Ablehnen, Kündigen, Gratis-Variante) ist klein, blass oder ausgegraut — die für den Anbieter günstige groß und farbig',
    'Zwei gleichwertige Wege sind optisch ungleich gewichtet: Ein Button springt ins Auge, der andere ist zum bloßen Textlink degradiert',
    'Die eigentlich vorteilhafte Wahl ist weggescrollt, unter „Weitere Optionen" versteckt oder in einer unscheinbaren Bildschirmecke platziert',
    'Deine Aufmerksamkeit wird auf einen auffälligen Reiz gezogen, während die Alternative daneben bewusst unscheinbar bleibt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
