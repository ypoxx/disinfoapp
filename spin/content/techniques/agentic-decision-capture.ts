import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: agentic_decision_capture).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const agenticDecisionCapture: Technique = {
  id: 'agentic_decision_capture',
  name: {
    de: 'Agentic Decision Capture',
    en: 'Agentic Decision Capture',
  },
  description: {
    de: 'Einflussnahme auf Entscheidungen, die Menschen an KI-Assistenten oder autonome Agenten delegieren: Voreinstellungen, Trefferreihenfolgen, Vorauswahlen oder Ausführungspfade werden so gestaltet, dass der Agent — und mit ihm die auftraggebende Person — in eine bestimmte Option gelenkt wird, ohne dass ein Mensch das Kriterium je bewusst bestätigt hat. Aufkommendes Risikofeld, das die Angriffsfläche von der menschlichen Wahrnehmung auf die Automatisierungsschicht verschiebt.',
    en: 'Influence over decisions that people delegate to AI assistants or autonomous agents: defaults, result ordering, pre-selections or execution paths are shaped so that the agent — and with it the person who delegated the task — lands on a particular option that no human ever consciously endorsed. An emerging risk area that moves the attack surface from human perception onto the automation layer.',
  },
  category: 'ai_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Routine-Beschaffung per KI-Einkaufsagent bei einem Mittelständler: Die Büroleiterin beauftragt den Agenten, „das günstigste kompatible Toner-Set" nachzubestellen. Der Agent übernimmt die vom Marktplatz als „empfohlen" vorsortierte Trefferliste, in der bezahlte Platzierungen oben stehen, und bestellt den erstplatzierten Anbieter — nicht den günstigsten. Kein Mensch hat die Liste je gesehen; die Auswahlreihenfolge im Agentenpfad entscheidet.',
    'Dienstreise-Buchung durch den Kalender-Agenten eines Vielreisenden: Auftrag ist, „das nächstgelegene Hotel zum Tagungsort" zu buchen. Auf der Buchungsseite ist im Seitenquelltext eine für automatisierte Besucher gedachte Auszeichnung hinterlegt, die ein Haus einer bestimmten Kette als „nearest verified partner" kennzeichnet. Der Agent folgt dem manipulierten Signal und bucht es, obwohl zwei näher gelegene Häuser existieren.',
    'Interne Lieferantenfreigabe per Firmen-KI-Agent, Auftrag der Teamleiterin Einkauf: Angebote „nach bestem Preis-Leistungs-Verhältnis" vergleichen und den Sieger vorlegen. Der Agent nutzt eine voreingestellte Bewertungsgewichtung, in der ein bevorzugter Rahmenvertragspartner einen festen Punktebonus erhält — ein Kriterium, das niemand im Team bewusst gesetzt hat, das aber Rangfolge und Freigabe bestimmt.',
  ],
  evidence: {
    studies: [
      'Rogiers et al. (2024) - Persuasion with Large Language Models: a Survey',
      'Cuvin et al. (2025) - DECEPTICON: How Dark Patterns Manipulate Web Agents',
      'Brunner et al. (2026) - AI threats in the wild: The current state of prompt injections on the web',
    ],
    findings: 'Der Begriff beschreibt ein aufkommendes Risikofeld: Delegiert ein Mensch eine Entscheidung an einen KI-Agenten, entstehen neue Angriffsflächen über Voreinstellungen, Trefferreihenfolgen, Dark Patterns oder in Webinhalte eingebettete Anweisungen (indirekte Prompt-Injection). Rogiers et al. (2024) ordnen dies als plausible, aber überwiegend konzeptionelle und zukunftsgerichtete Ausweitung der Persuasionsforschung ein; belastbare Feldbelege und Benchmarks fehlen bislang weitgehend (schwache, spekulative Evidenz). Hohes plausibles Schadens- und Skalierungspotenzial ist ausdrücklich kein Nachweis einer gemessenen Wirkung.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine empirischen Feldstudien; konzeptioneller Survey plus frühe Agenten-Sicherheitsanalysen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['nudging', 'ai_deception_scheming', 'automation_bias_overreliance'],
  warningNeurons: [
    'Eine an einen KI-Agenten delegierte Aufgabe endet bei einer Option, die kein Mensch bewusst ausgewählt oder bestätigt hat',
    'Der Agent übernimmt „empfohlene" Reihenfolgen, Voreinstellungen oder Gewichtungen ungeprüft als Entscheidungsgrundlage',
    'Webinhalte tragen Auszeichnungen oder Anweisungen, die nur für automatisierte Besucher gedacht sind („verified partner", versteckte Instruktionen im Quelltext)',
    'Das Ergebnis lässt sich nicht auf ein vom Auftraggeber gesetztes Kriterium zurückführen — die Kette „Auftrag → Auswahl → Ausführung" ist nicht nachvollziehbar',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
