import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: black_grey_white_propaganda).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const blackGreyWhitePropaganda: Technique = {
  id: 'black_grey_white_propaganda',
  name: {
    de: 'Schwarze, graue und weiße Propaganda',
    en: 'Black, Grey and White Propaganda',
  },
  description: {
    de: 'Einordnung von Propaganda nach der Ehrlichkeit ihrer Quelle: weiße Propaganda nennt Urheber und Interesse offen (Inhalt akkurat), graue verschleiert die Herkunft (der Auftraggeber bleibt unklar), schwarze schreibt die Botschaft einer erfundenen oder fremden Quelle zu und täuscht bewusst über den wahren Absender.',
    en: 'Classifying propaganda by how honest it is about its source: white propaganda openly names its originator and interest (content accurate), grey obscures the origin (the sponsor stays unclear), and black attributes the message to a fabricated or borrowed source, deliberately deceiving about who is really behind it.',
  },
  category: 'influence_ops',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Redaktionskonferenz eines Regionalverlags: Dem Wirtschaftsredakteur wird ein fertig formulierter Hintergrund-Text zur geplanten Gewerbeansiedlung anonym zugespielt — flüssig geschrieben, faktennah, aber ohne Absenderangabe, ohne Impressum, ohne Hinweis auf die Finanzierung. Es wird keine falsche Quelle behauptet und keine erfundene Bürgerbewegung mit vielen angeblichen Unterstützern inszeniert; schlicht die Urheberschaft und der Geldgeber des einen Dokuments bleiben bewusst im Dunkeln — weder offen ausgewiesen (wie bei gekennzeichneter Werbung) noch einer fremden Quelle untergeschoben. Nach dem Raster der Quellentransparenz schwebt die Herkunft im Graubereich (grau).',
    'Vor der Betriebsratswahl eines Logistikunternehmens kursiert in der Belegschaft ein Rundschreiben, das im Namen einer „unabhängigen Kollegen-Initiative" eindringlich vor der amtierenden Liste warnt. Verfasst, bezahlt und verteilt hat es in Wahrheit die Geschäftsführung — der wahre Absender bleibt verborgen, die Botschaft wird gezielt dem Lager der Beschäftigten zugeschrieben (schwarz: gefälschte Absenderschaft).',
    'Strategie-Meeting vor einer Kampagne zur Wärmepumpen-Förderung: Die Kommunikationschefin eines Herstellerverbands entscheidet sich bewusst dafür, offen unter dem Verbandsnamen und mit klar ausgewiesener Interessenlage aufzutreten — Absender korrekt, Zahlen belegt (weiß). Sie verwirft die Alternative, dieselben Inhalte über eine scheinbar neutrale „Verbraucherinitiative" ohne erkennbare Trägerschaft auszuspielen (grau).',
  ],
  evidence: {
    studies: [
      'Jowett & O\'Donnell (2018) - Propaganda and Persuasion (Standardwerk)'
    ],
    findings: 'Jowett & O\'Donnell (2018) ordnen Propaganda deskriptiv nach Quellentransparenz und Inhaltsakkuratheit in weiß, grau und schwarz — ein etabliertes analytisches Raster, kein Wirkmodell. Die Einteilung beschreibt, wie offen eine Botschaft ihren Urheber nennt, sagt aber nichts darüber aus, wie stark verdeckte gegenüber offener Urheberschaft überzeugt. Belastbare Effektmaße zum Vergleich der drei Stufen fehlen (schwache Evidenz: taxonomisch, ungetestet).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Kein Effektmaß; deskriptive Klassifikation (Standardwerk)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['identity_provenance_deception', 'integrity_clash_laundering'],
  warningNeurons: [
    'Eine Botschaft, deren wahrer Auftraggeber sich weder aus Impressum noch aus Absender oder Finanzierung erschließt (grau)',
    'Inhalte, die einer erfundenen oder fremden Quelle zugeschrieben werden, um den eigentlichen Absender zu verbergen (schwarz)',
    '„Unabhängige" Initiativen, Portale oder Bürgerforen, deren Trägerschaft und Geldgeber im Dunkeln bleiben',
    'Starkes Interesse, aber keine offen ausgewiesene Urheberschaft — die Quelle wird verdeckt statt genannt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
