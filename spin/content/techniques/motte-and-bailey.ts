import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: motte_and_bailey).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const motteAndBailey: Technique = {
  id: 'motte_and_bailey',
  name: {
    de: 'Motte-and-Bailey',
    en: 'Motte-and-Bailey',
  },
  description: {
    de: 'Eine weitreichende, umstrittene Behauptung (Bailey) wird öffentlich vertreten; sobald sie angegriffen wird, zieht man sich auf eine triviale, kaum bestreitbare Variante (Motte) zurück und tut so, als sei nur diese gemeint — um die starke These anschließend wieder aufzunehmen.',
    en: 'A sweeping, contested claim (the bailey) is put forward publicly; the moment it is challenged, the speaker retreats to a trivial, near-undeniable version (the motte), acts as if that was all they ever meant, and then reoccupies the strong claim once the pressure lifts.',
  },
  category: 'logical_fallacy',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Nachhaltigkeits-Pressekonferenz eines Konsumgüterkonzerns: Die Nachhaltigkeitschefin verkündet vor Fachjournalisten „Unsere Produktion ist klimaneutral." Als eine Journalistin die realen Scope-1-Emissionen vorhält, heißt es: „Gemeint ist selbstverständlich klimaneutral durch Kompensationszertifikate — nichts anderes steht im Bericht." In der Kampagne am Folgetag wirbt der Konzern wieder ungefiltert mit „klimaneutraler Produktion".',
    'Vertriebs-Keynote eines Beratungshauses vor Einkaufsleitern: Der Partner behauptet „Unsere Methode steigert die Produktivität um 40 Prozent." Auf die Nachfrage eines skeptischen CFOs nach der Datenbasis rudert er zurück: „Die 40 Prozent stammen aus einem einzelnen Pilotteam unter Idealbedingungen — dass die Methode überhaupt etwas bringt, bestreitet ja niemand." Im nächsten Pitch fällt erneut die Zahl von 40 Prozent.',
    'Talkshow-Runde zur Lieferketten-Regulierung: Der Verbandssprecher erklärt „Das Gesetz vernichtet Zehntausende Arbeitsplätze." Als die Moderatorin eine Gegenstudie zitiert, weicht er aus: „Ich habe lediglich gesagt, dass Regulierung Bürokratiekosten verursacht — das ist unbestreitbar." Nach der Werbepause führt er die Zehntausend-Arbeitsplätze-These wieder als Faktum an.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Motte-and-Bailey ist als Argumentations- und Propagandamuster in der Fehlschluss-Literatur beschrieben und taxonomisch verankert (Hansen 2015, SEP/Fallacies). Der Beleg ist konzeptuell-analytisch, nicht experimentell: Eine quantifizierte Persuasions- oder Verhaltenswirkung ist nicht generell etabliert und dürfte stark von Publikum und Kontext abhängen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['equivocation', 'straw_man'],
  warningNeurons: [
    'Dieselbe Behauptung existiert in zwei Lesarten: eine kaum bestreitbare zum Verteidigen, eine weitreichende zum Werben.',
    'Unter Widerspruch schrumpft der Anspruch schlagartig („Ich habe doch nur gesagt, dass …"), ohne dass die ursprüngliche Aussage zurückgenommen wird.',
    'Die Rückzugsposition ist so trivial, dass ihr niemand widersprechen würde — trotzdem wird sie verteidigt, als stünde die große These auf dem Spiel.',
    'Sobald der Druck nachlässt, taucht die starke These unverändert wieder auf — etwa in Kampagne, Deck oder Folgeinterview.',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
