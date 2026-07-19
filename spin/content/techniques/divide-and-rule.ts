import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: divide_and_rule).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const divideAndRule: Technique = {
  id: 'divide_and_rule',
  name: {
    de: 'Divide and Rule (Teile und herrsche)',
    en: 'Divide and Rule',
  },
  description: {
    de: 'Ein Mächtiger schürt gezielt Misstrauen und Rivalität zwischen zwei oder mehr untergeordneten Gruppen, damit sie sich nicht verbünden und ihm geschlossen gegenübertreten. Anders als beim Sündenbock wird kein gemeinsamer Gegner benannt — die Technik hält potenzielle Verbündete auseinander, häufig indem jeder Seite getrennt erzählt wird, die andere handle gegen ihre Interessen.',
    en: 'A power-holder deliberately stokes distrust and rivalry between two or more subordinate groups so they cannot band together and confront that power-holder as a bloc. Unlike scapegoating, no common enemy is named — the technique keeps potential allies apart, often by telling each side separately that the other is working against its interests.',
  },
  category: 'influence_ops',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Interne E-Mail-Serie der Werksleitung: In getrennten Mails an das Montage- und das Logistikteam schreibt der Werksleiter jeweils, das andere Team blockiere die überfällige Lohnrunde — obwohl beide Teams zuvor gemeinsam mehr Personal gefordert hatten. Solange sich Montage und Logistik gegenseitig verdächtigen, tritt keine gemeinsame Forderung an die Leitung.',
    'Tarifgespräch mit gespaltener Arbeitnehmerseite: Gegenüber dem Betriebsrat lobt die Personalchefin im Vier-Augen-Termin dessen Vernunft und warnt vor der „unrealistischen" Gewerkschaft; der Gewerkschaftssekretärin sagt sie im nächsten Termin, der Betriebsrat sei längst kompromissbereit und falle ihr in den Rücken. Ziel ist, dass beide getrennt verhandeln, statt der Geschäftsführung geschlossen gegenüberzutreten.',
    'Verbandsinterne Hintergrundrunde: Der Vorsitzende streut gegenüber den mittelständischen Mitgliedern, die Großkonzerne im Verband wollten sie bei der neuen Beitragsordnung überstimmen — und sagt den Großkonzernen umgekehrt, der Mittelstand plane eine Blockade. So verhandelt er mit beiden Lagern einzeln und verhindert, dass sie sich gegen seine Beitragsvorlage verbünden.',
  ],
  evidence: {
    studies: [
      'Acemoglu, Robinson & Verdier (2004) - Kleptocracy and Divide-and-Rule: A Model of Personal Rule',
      'Kant (1795) - Zum ewigen Frieden. Ein philosophischer Entwurf',
    ],
    findings: 'Divide-and-Rule (divide et impera) ist historisch breit als Herrschaftsstrategie belegt und bei Acemoglu, Robinson und Verdier (2004) modelltheoretisch als Stabilisierung persönlicher Herrschaft beschrieben: Ein Machthaber verhindert die Koalitionsbildung untergeordneter Gruppen, indem er Misstrauen zwischen ihnen sät. Die Evidenz ist theoretisch-historisch, kein experimenteller Wirkungsnachweis; Effektgrößen sind nicht quantifiziert und die Wirkung stark kontextabhängig. Der Eintrag beschreibt ein wiedererkennbares Muster, keine Technik mit gesichertem Wirkungsnachweis (niedrige Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Modelltheoretisch/historisch belegt; kein quantifizierter Wirkungsnachweis',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['scapegoating_othering'],
  warningNeurons: [
    'Dieselben potenziellen Verbündeten werden getrennt angesprochen — jede Seite hört, die andere handle gegen ihre Interessen',
    'Eine ursprünglich gemeinsame Forderung an die Führung zerfällt plötzlich in gegenseitige Schuldzuweisungen zwischen zwei untergeordneten Gruppen',
    'Nicht ein gemeinsamer Gegner wird benannt, sondern zwei annähernd gleich starke Gruppen werden gegeneinander in Stellung gebracht',
    'Wer von der Spaltung profitiert, hält getrennte Vier-Augen-Kanäle offen und verhindert, dass beide Seiten direkt miteinander abgleichen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
