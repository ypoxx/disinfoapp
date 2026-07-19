import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: guilt_appeals).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const guiltAppeals: Technique = {
  id: 'guilt_appeals',
  name: {
    de: 'Schuldappelle',
    en: 'Guilt Appeals',
  },
  description: {
    de: 'Erzeugt gezielt Schuldgefühle — typisch, indem Untätigkeit oder eine Entscheidung als Versäumnis gegenüber konkreten Betroffenen gerahmt wird — und bietet im selben Zug die eine Handlung an, die die Schuld auflöst: zusagen, spenden, unterschreiben, bleiben.',
    en: 'Deliberately induces guilt — typically by framing inaction or a decision as letting specific people down — and in the same breath offers the one action that relieves it: agree, donate, sign, stay.',
  },
  category: 'emotional_manipulation',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Intranet-Aufruf zur Mitarbeiter-Spendenaktion: Die CSR-Referentin schreibt an die Belegschaft: „Während du diese Zeilen liest, warten die Familien im Projektort weiter auf sauberes Trinkwasser — jeder Tag ohne deine Spende ist ein Tag, den sie verlieren." Direkt darunter steht der Ein-Klick-Spendenbutton, der das schlechte Gewissen sofort auflösen soll.',
    'Teammeeting der Unternehmenskommunikation zur Messeplanung: Die Projektleiterin wirbt um freiwillige Wochenendschichten am Stand: „Letztes Jahr mussten zwei Kolleginnen alles allein stemmen und waren danach wochenlang am Limit — wer sich diesmal nicht einträgt, sollte wissen, wem er das erneut zumutet." Die Eintragungsliste kreist unmittelbar danach durch die Runde.',
    'Rückgewinnungsmail eines Redaktionstool-Anbieters an die Kommunikationschefin nach ihrer Kündigung: „Ihr Newsroom arbeitet seit Jahren täglich mit unseren Vorlagen — mit diesem Schritt nehmen Sie Ihren Kolleginnen und Kollegen ein Werkzeug weg, auf das sie sich verlassen haben. Ein Klick genügt, um das rückgängig zu machen."',
  ],
  evidence: {
    studies: [
      'O\'Keefe (2000) - Guilt and Social Influence'
    ],
    findings: 'O\'Keefe (2000) fasst die experimentelle Forschung zu Schuldappellen zusammen: Sie können Einstellungen und Verhalten beeinflussen, der Zusammenhang ist aber paradox — explizitere Appelle erzeugen zwar mehr Schuldgefühl (r = .43), sind jedoch weniger persuasiv (r = −.26), weil sie Ärger und Reaktanz auslösen. Der Befund gilt als repliziert, beruht aber überwiegend auf Laborstudien mit westlichen Stichproben; die Effekte sind klein und stark kontextabhängig (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Review/Metaanalyse über mehrere Experimente (O\'Keefe 2000)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['emotional_appeal', 'guilt_by_association', 'door_in_the_face', 'reciprocity'],
  warningNeurons: [
    'Deine Untätigkeit oder Absage wird als moralisches Versäumnis gegenüber konkret benannten Betroffenen gerahmt („Während du zögerst …", „Das dürfen Sie dann den Kollegen erklären")',
    'Direkt neben dem erzeugten Schuldgefühl steht die eine Handlung, die es sofort auflöst — Zusage, Spende, Unterschrift, „ein Klick genügt"',
    'Frühere Fehler oder Belastungen anderer werden aufgerufen, damit du sie jetzt „wiedergutmachen" kannst',
    'Die Sachfrage (Nutzen, Kosten, Alternativen) tritt hinter die Frage zurück, was für ein Mensch du bist, wenn du ablehnst',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
