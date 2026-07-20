import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: coercive_control).
 * Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
 * Elemente; Erklärungen fokussieren auf Erkennen und Schutz der Betroffenen,
 * nie auf Anwendung. Evidenz-Tier weak: keine quantifizierten Wirkbehauptungen.
 * Es gilt Overlay-Schutz.
 */
export const coerciveControl: Technique = {
  id: 'coercive_control',
  name: {
    de: 'Coercive Control (Zwang und Kontrolle)',
    en: 'Coercive Control',
  },
  description: {
    de: 'Anhaltendes Herrschaftsmuster, in dem eine Person die Autonomie einer anderen durch ein Geflecht aus Regeln, Überwachung, Isolation und Mikroregulierung des Alltags systematisch beschneidet — kein Einzelvorfall, sondern ein dauerhaftes Kontrollregime mit Sanktionen bei Abweichung.',
    en: 'A sustained pattern of domination in which one person systematically strips another of autonomy through a web of rules, surveillance, isolation, and micro-regulation of everyday life — not an isolated incident but an ongoing regime of control that punishes any step out of line.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Erstgespräch in einer Fachberatungsstelle: Eine Klientin schildert, ihr Ehemann lasse sie jede Ausgabe im gemeinsamen Konto-Chat einzeln rechtfertigen, gebe feste Heimkehrzeiten vor und verhänge bei Verspätung tagelangen Kontaktentzug — ein dichtes Alltagsregime, in dem sie über Monate kaum noch eine Entscheidung ohne seine Freigabe trifft.',
    'Fallübergabe im Team eines Frauenhauses: Eine Betroffene berichtet, ihr Partner habe über ein Jahr jeden Kontakt zu Freundinnen und Familie als „Illoyalität" umgedeutet, verabredete Treffen systematisch sabotiert und ihr Telefon kontrolliert, bis sie niemanden mehr hatte, den sie um Hilfe hätte bitten können.',
    'Anamnese in einer hausärztlichen Sprechstunde: Eine Patientin erwähnt beiläufig, ihr Freund bestimme ihre Kleidung, verlange rund um die Uhr Standortfreigabe und lasse sie nach jedem Termin lückenlos Rechenschaft ablegen; jede einzelne Vorgabe erscheine ihr „nachvollziehbar", zusammen bleibe ihr kein unbeobachteter Raum mehr.',
  ],
  evidence: {
    studies: [
      'Stark (2007) - Coercive Control: How Men Entrap Women in Personal Life'
    ],
    findings: 'Stark (2007) prägt Coercive Control als anhaltendes Muster aus Kontrolle, Isolation und Autonomieentzug und verschiebt den Blick vom Einzelvorfall zum Regime; das Konstrukt ist klinisch beschrieben und in mehreren Rechtsordnungen als Straftatbestand verankert (u.a. England/Wales seit 2015). Es handelt sich um ein konzeptionell-klinisches Modell, nicht um einen quantifizierten Persuasions- oder Wirkungseffekt; Operationalisierung und Übertragbarkeit über überwiegend westliche Kontexte hinaus bleiben offen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['gaslighting', 'love_bombing', 'societal_atomization', 'zersetzung_decomposition', 'networked_harassment'],
  warningNeurons: [
    'Ein dichtes Regelwerk für den Alltag — Kleidung, Kontakte, Uhrzeiten, Ausgaben — mit spürbaren Sanktionen bei Abweichung',
    'Lückenlose Überwachung, als „Fürsorge" gerahmt: Standortfreigabe, Mitlesen von Konto und Nachrichten, Rechenschaftspflicht nach jedem Termin',
    'Fortschreitende Isolation: Kontakte zu Freundinnen, Familie oder Kolleg:innen werden umgedeutet, sabotiert oder unterbunden',
    'Der Schaden liegt im Muster, nicht im einzelnen Vorfall — jede Episode wirkt „für sich harmlos", die Summe schnürt den Handlungsspielraum zu',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
