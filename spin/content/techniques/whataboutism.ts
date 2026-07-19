import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: whataboutism).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const whataboutism: Technique = {
  id: 'whataboutism',
  name: {
    de: 'Whataboutism (Tu Quoque)',
    en: 'Whataboutism (Tu Quoque)',
  },
  description: {
    de: 'Ablenkung von Kritik, indem statt einer Antwort ein Gegenvorwurf erhoben wird — meist mit dem Verweis auf (echtes oder behauptetes) Fehlverhalten der anderen Seite oder eines Dritten („Und was ist mit …?"). Der ursprüngliche Punkt bleibt unbeantwortet.',
    en: 'Deflecting criticism by responding with a counter-accusation instead of an answer — usually by pointing to the other side\'s or a third party\'s (real or alleged) misconduct ("And what about …?"). The original point is left unaddressed.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Pressekonferenz zur Klimabilanz: Auf die Frage einer Umweltjournalistin, warum der Konzern seine selbst gesetzten CO₂-Ziele verfehlt hat, antwortet der Nachhaltigkeitschef: „Reden wir doch mal über den Wettbewerber X — der stößt pro Tonne Produkt noch deutlich mehr aus." Zur eigenen Zielverfehlung sagt er nichts.',
    'Projekt-Review nach einem gerissenen Launch-Termin: Als die Programm-Managerin den Entwicklungsleiter auf die Verzögerung anspricht, kontert er: „Und was ist mit dem Marketing? Deren Kampagne war letztes Quartal auch drei Wochen zu spät." Warum sein Team den Termin nicht gehalten hat, bleibt offen.',
    'Hintergrundgespräch nach einem Datenleck: Ein Fachjournalist fragt den Pressesprecher eines Software-Anbieters nach der Ursache der Panne. Antwort: „Interessant, dass ausgerechnet Ihr Verlag das fragt — bei Ihnen wurden letztes Jahr auch Abonnentendaten offengelegt." Die eigentliche Ursachenfrage lässt er unbeantwortet.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)'
    ],
    findings: 'Whataboutism (eine Spielart des Tu-quoque-Fehlschlusses) ist in der Fehlschluss- und Propaganda-Literatur seit Langem als Argumentationsmuster beschrieben und klar definiert (SEP/Hansen 2015). Eine quantifizierte Persuasions- oder Verhaltenswirkung ist damit jedoch nicht belegt: Die Einordnung ist taxonomisch, nicht experimentell. Wie stark der Gegenvorwurf tatsächlich ablenkt, hängt erkennbar von Publikum und Kontext ab (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['ad_hominem', 'red_herring'],
  warningNeurons: [
    'Auf eine konkrete Frage folgt keine Antwort, sondern ein Gegenvorwurf („Und was ist mit …?")',
    'Der Verweis zielt auf (echtes oder behauptetes) Fehlverhalten der anderen Seite oder eines Dritten, nicht auf die Sache',
    'Die Formulierung stellt eine Gleichwertigkeit her („die machen das doch auch"), ohne die eigene Verantwortung zu prüfen',
    'Der ursprüngliche Kritikpunkt steht am Ende unbeantwortet im Raum',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
