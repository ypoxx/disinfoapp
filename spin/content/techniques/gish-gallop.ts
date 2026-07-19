import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: gish_gallop).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const gishGallop: Technique = {
  id: 'gish_gallop',
  name: {
    de: 'Gish Gallop',
    en: 'Gish Gallop',
  },
  description: {
    de: 'Rhetorische Überwältigung durch eine schnelle Flut vieler kleiner Behauptungen: Weil jede einzelne mehr Zeit zum Widerlegen als zum Aufstellen kostet, bleibt in der Redezeit die Mehrzahl unwidersprochen — und wirkt dadurch bestätigt.',
    en: 'Rhetorical overwhelm by rattling off many small claims in quick succession: because each one takes longer to refute than to assert, most go unrebutted within the time available — and so appear to stand.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'TV-Wirtschaftstalk zur geplanten Werksschließung: Noch während die Gewerkschafterin ihren Einwand zu Ende formuliert, setzt die Konzernsprecherin ein und reiht in einer knappen Minute elf Punkte aneinander — Weltmarktpreise, Energiekosten, Lieferketten, Wechselkurse, Bürokratie, Krankenstand, dazu drei Statistiken und zwei Vergleichsländer. Für eine geordnete Erwiderung öffnet sich in der Sendung keine Lücke; das meiste bleibt unwidersprochen stehen.',
    'Hauptversammlung nach einem schwachen Geschäftsjahr: Auf die schlichte Frage eines Aktionärs, warum die Dividende gekürzt wird, antwortet der Finanzvorstand mit einem dichten Wortschwall aus vierzehn Einzelgründen — Regulierung, Zinsumfeld, Sondereffekte, Investitionsquote, Peer-Vergleich, Rückstellungen. Ein Aktionär in Reihe drei zählt auf seinem Block mit und kommt auf vierzehn; gründlich geprüft ist bis zum Ende der Aussprache kein einziger.',
    'Moderierte Podiumsdiskussion zur Verkehrswende: Auf den Einwand des Verkehrsplaners, das Konzept spare kaum CO₂, entgegnet die Lobbyvertreterin mit einer Serie knapper Behauptungen im Sekundentakt — Studien, Kosten, Arbeitsplätze, Auslandsbeispiele, technische Details. Der Moderator unterbricht nach dem zwölften Punkt und bittet, einen einzigen davon zu belegen; sie greift stattdessen den nächsten auf. Jede Behauptung für sich ist in der Redezeit kaum zu prüfen, in der Summe gar nicht.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Der Gish Gallop ist als rhetorisches Debatten- und Fehlschlussmuster gut beschrieben und benannt (Fallacy-Literatur, SEP); der Mechanismus beruht auf der Asymmetrie zwischen kurzem Behaupten und aufwendigem Widerlegen. Eine quantifizierte Persuasions- oder Verhaltenswirkung ist jedoch nicht generell belegt — die Einordnung stützt sich auf Taxonomie und Mechanismusplausibilität, nicht auf Wirkungsstudien (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['straw_man'],
  warningNeurons: [
    'Auffällige Menge kurzer Behauptungen in einer einzigen Wortmeldung — mehr, als in der verfügbaren Zeit zu prüfen sind',
    'Das Verhältnis kippt: Jede Behauptung ist in Sekunden gesagt, aber nur in Minuten zu widerlegen',
    'Wer einen einzelnen Punkt herausgreift, soll wie ein Ausweicher vor den übrigen dastehen',
    'Tempo und Breite statt Tiefe: viele Themen angerissen, keines belegt oder zu Ende geführt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
