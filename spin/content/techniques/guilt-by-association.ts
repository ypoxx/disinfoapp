import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: guilt_by_association).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const guiltByAssociation: Technique = {
  id: 'guilt_by_association',
  name: {
    de: 'Kontaktschuld (Guilt by Association)',
    en: 'Guilt by Association',
  },
  description: {
    de: 'Diskreditierung einer Person oder Position allein über ihre — oft konstruierte — Verbindung zu einer abgelehnten Person oder Gruppe: Geprüft wird nicht das Argument, sondern die Nachbarschaft. Die Zuordnung wirkt zugleich als Drohkulisse für alle, die Ähnliches vertreten wollen.',
    en: 'Discrediting a person or position purely through its — often manufactured — link to a disliked person or group: what gets examined is not the argument but the company it keeps. The labelling doubles as a deterrent for anyone tempted to voice something similar.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Hintergrundgespräch zur geplanten Branchenregulierung: Auf die Frage des Wirtschaftsjournalisten nach einer kritischen Kostenstudie antwortet der Verbandssprecher: „Das Institut dahinter hat auch schon für die Kampagnenplattform der Gegenseite gearbeitet — dann wissen Sie ja, was Sie von den Zahlen zu halten haben." Auf Methodik oder Ergebnisse der Studie geht er mit keinem Wort ein.',
    'Strategie-Meeting zur Themenplanung: Die PR-Referentin schlägt ein Transparenz-Dashboard mit Lieferkettendaten vor. Der Bereichsleiter räumt den Punkt ab: „Genau so etwas macht auch dieser Krawall-Blog, der uns seit Monaten angreift — wenn wir damit anfangen, stellen wir uns auf eine Stufe mit denen." Ob das Dashboard dem Unternehmen nützen würde, wird nicht mehr geprüft.',
    'Kommentarspalte unter dem LinkedIn-Post eines Mittelständlers zur neuen Nachhaltigkeitsinitiative: Ein Wettbewerber-Account verweist auf die Verbandsmitgliedschaft des Unternehmens: „Im selben Verband sitzt auch der Konzern, der gerade wegen Umweltauflagen vor Gericht steht. Mehr muss man über diese ‚Initiative‘ nicht wissen." Zum Inhalt der Initiative: kein Wort.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Kontaktschuld ist in der argumentationstheoretischen Literatur als Fehlschluss taxonomisch gut geerdet (SEP; Hansen 2015) und wird als wiederkehrendes Propagandamuster beschrieben. Belegt ist damit vor allem die Einordnung des Musters; wie stark bloße Assoziation Urteile tatsächlich verschiebt, ist nicht durchgängig gemessen und dürfte stark vom Kontext abhängen (geringe Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomische/argumentationstheoretische Literatur, keine direkten Effektmessungen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['ad_hominem', 'straw_man'],
  warningNeurons: [
    'Verhandelt wird die Herkunft oder das Umfeld einer Aussage, nicht ihr Inhalt — „von denen" ersetzt das Gegenargument',
    'Die angeführte Verbindung ist bloße Nähe (gemeinsamer Verband, früherer Auftraggeber, ein Like, ein Gruppenfoto) und trägt zur strittigen Sachfrage nichts bei',
    '„Das fordern auch die Falschen" wird als Widerlegung präsentiert — obwohl es über die Richtigkeit der Forderung nichts aussagt',
    'Die Zuordnung wirkt als Drohkulisse: Wer die Position übernimmt, riskiert selbst das Etikett — und schweigt lieber',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
