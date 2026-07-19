// Welle 5c: 3 Übungen für black_grey_white_propaganda (Schwarze, graue und weiße Propaganda).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → deskriptives Raster, keine starken Wirkbehauptungen. Kein seriousMode.
// Kern der Technik: Einordnung nach Quellentransparenz (offen/verschleiert/gefälschter Absender).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cBlackGreyWhitePropaganda: Exercise[] = [
  {
    id: 'wave5c-black_grey_white_propaganda-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt dem Rundschreiben zugrunde?',
      en: 'Which technique underlies the circular?',
    },
    scenario: {
      de: 'Interne Prüfung im Kommunikationsteam eines Logistikunternehmens: Vor der Betriebsratswahl kursiert in der Belegschaft ein Rundschreiben, das eindringlich vor der amtierenden Liste warnt und sich gibt, als sei es eine Wortmeldung aus der Belegschaft selbst. Verfasst, bezahlt und verteilt hat es in Wahrheit die Geschäftsführung — der wahre Auftraggeber bleibt verborgen, die ganze Botschaft wird einer falschen Quelle, dem Lager der Beschäftigten, zugeschrieben. Es tritt keine erfundene Einzelperson als Autor auf, es gibt keine gefälschte Absenderdomain und kein manipuliertes Echtheitssiegel; auch ein Netz gefälschter Konten, das breite Basiszustimmung simuliert, fehlt. Kern ist allein, dass die Urheberschaft der Botschaft verschleiert und dem Gegenlager untergeschoben wird.',
      en: 'Internal review in a logistics company\'s communications team: ahead of the works-council election, a circular is going round the workforce that warns urgently against the incumbent slate and presents itself as if it were a statement from the workforce itself. In reality it was written, paid for and distributed by senior management — the true sponsor stays hidden, and the whole message is attributed to a false source, the employees\' own camp. No invented individual appears as its author, there is no spoofed sender domain and no doctored authenticity seal; nor is there a network of fake accounts simulating broad grassroots support. The whole point is simply that the message\'s authorship is concealed and pinned on the opposing camp.',
    },
    options: [
      { de: 'Schwarze, graue und weiße Propaganda (Quellentransparenz)', en: 'Black, grey and white propaganda (source transparency)' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / sockpuppets' },
      { de: 'Integrity Clash / Provenance Laundering', en: 'Integrity clash / provenance laundering' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Schwarze Propaganda: Die ganze Botschaft wird einer falschen Quelle zugeschrieben — sie soll aus dem Lager der Beschäftigten stammen, während der wahre Auftraggeber (die Geschäftsführung) verborgen bleibt. Das ist das schwarze Ende des Rasters weiß–grau–schwarz, das Propaganda nach der Ehrlichkeit ihrer Quelle einordnet. Mechanismus: Die verschleierte, ins Gegenlager verlegte Urheberschaft borgt sich die Glaubwürdigkeit einer scheinbar betroffenen Gruppe. Legitim einsetzen: Wenn du als Unternehmensleitung Position beziehst, tu es offen unter deinem Namen (weiße Propaganda) — mit ausgewiesener Interessenlage und belegten Zahlen; das ist zulässig und übersteht auch die Enttarnung. Erkennen und kontern: Prüf bei jeder Wortmeldung, wer sie verfasst, bezahlt und verteilt hat — wird die Botschaft einer falschen Quelle (etwa dem Gegenlager) untergeschoben, während der wahre Auftraggeber verborgen bleibt, ist es schwarze Propaganda; bleibt bloß der Auftraggeber im Dunkeln, ist es graue. Leg in beiden Fällen die wahre Trägerschaft offen. Identitäts- und Herkunftstäuschung wäre die Wahl, wenn eine konkrete, prüfbare Identität oder ein technisches Herkunftssignal gefälscht würde (eine erfundene Expertin, eine gespoofte Absenderdomain) — beides schließt das Szenario ausdrücklich aus; hier zählt die Quellentransparenz der Botschaft als Ganzes. Astroturfing/Sockpuppets setzt auf ein Netz vorgetäuschter Einzelstimmen, das breite Basiszustimmung simuliert — hier steht ein einzelnes untergeschobenes Rundschreiben, keine inszenierte Menge. Provenance Laundering betrifft erschlichene technische Echtheitssignale (Wasserzeichen, C2PA-Manifeste) — davon ist keine Rede.',
      en: 'Black propaganda: the whole message is attributed to a false source — it is made to look as if it comes from the employees\' own camp, while the true sponsor (management) stays hidden. That is the black end of the white–grey–black grid, which classifies propaganda by how honest it is about its source. Mechanism: the concealed authorship, shifted onto the opposing camp, borrows the credibility of a seemingly affected group. Used legitimately: when you as management take a position, do it openly under your own name (white propaganda) — with a declared interest and evidenced figures; that is fair and survives being uncovered. To spot and counter it: for any intervention, check who wrote, paid for and distributed it — if the message is pinned on a false source (the opposing camp, say) while the true sponsor stays hidden, it is black propaganda; if only the sponsor is kept in the dark, it is grey. Either way, disclose the real backing. Identity and provenance deception would be the pick if a specific, checkable identity or a technical origin signal were faked (an invented expert, a spoofed sender domain) — the scenario rules both out; here what counts is the source transparency of the message as a whole. Astroturfing/sockpuppets relies on a network of feigned individual voices simulating broad grassroots support — here there is a single planted circular, not a staged crowd. Provenance laundering concerns gamed technical authenticity signals (watermarks, C2PA manifests) — none of that is in play.',
    },
    points: 10,
    primaryTechniqueId: 'black_grey_white_propaganda',
    relatedTechniques: ['black_grey_white_propaganda', 'identity_provenance_deception', 'integrity_clash_laundering'],
  },
  {
    id: 'wave5c-black_grey_white_propaganda-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Kommunikationsleiterin eines Branchenverbands sollst du eine Kampagne gegen eine geplante Regulierung aufsetzen. Ein externer Public-Affairs-Berater schlägt vor, die Botschaften über ein neu gegründetes „Bürgerforum Faire Energie" zu streuen — Website, Leserbriefe, Social Media —, ohne dass die Finanzierung durch euren Verband irgendwo erkennbar wird. „So wirkt die Kritik unabhängiger."',
      en: 'As communications lead of an industry association, you are to set up a campaign against a planned regulation. An external public-affairs consultant suggests spreading the messages through a newly founded "Citizens\' Forum for Fair Energy" — website, letters to the editor, social media — without your association\'s funding being visible anywhere. "That way the criticism reads as more independent."',
    },
    options: [
      {
        de: 'Ich bestehe auf offener Urheberschaft: Die Kampagne läuft unter dem Verbandsnamen, mit ausgewiesener Interessenlage und belegten Zahlen. Eine verdeckte Trägerschaft (graue Propaganda) verlagert das Risiko nur auf den Moment der Enttarnung — dann steht nicht die Sache, sondern die Tarnung in der Schlagzeile.',
        en: 'I insist on open authorship: the campaign runs under the association\'s name, with a declared interest and evidenced figures. A concealed backer (grey propaganda) merely shifts the risk to the moment of exposure — and then the disguise, not the issue, becomes the headline.',
      },
      {
        de: 'Ich setze das Bürgerforum um, lasse den Verband aber im Kleingedruckten des Impressums erscheinen — formal korrekt, und die unabhängige Wirkung bleibt weitgehend erhalten.',
        en: 'I go ahead with the citizens\' forum but list the association in the fine print of the imprint — formally correct, and the independent effect is largely preserved.',
      },
      {
        de: 'Ich lehne die Kampagne komplett ab; zu einer geplanten Regulierung öffentlich Stellung zu beziehen, ist für einen Interessenverband ohnehin unseriös.',
        en: 'I reject the campaign entirely; publicly taking a stance on a planned regulation is dubious for an interest group in any case.',
      },
      {
        de: 'Ich baue das Forum auf und lasse zusätzlich eine erfundene, sympathische Sprecherin als Gesicht auftreten, damit die Initiative glaubwürdiger wirkt.',
        en: 'I build the forum and, on top of that, put a fictitious, likeable spokeswoman forward as its face, so the initiative comes across as more credible.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag zielt auf graue Propaganda: dieselbe Botschaft, aber mit verschleiertem Auftraggeber, damit sie unabhängig wirkt. Die beste Option bleibt am weißen Ende des Rasters — offene Urheberschaft mit ausgewiesenem Interesse — und nimmt der Täuschung die Grundlage. Der Mechanismus dahinter: Verdeckte Trägerschaft borgt sich fremde Glaubwürdigkeit, doch der Vorteil hält nur bis zur Enttarnung; danach kippt die Aufmerksamkeit von der Sache auf die Tarnung. Legitim einsetzen: Als Verband darfst du klar Position beziehen — offen, mit Namen und belegten Zahlen ist das saubere Interessenvertretung. Erkennen und kontern: Frag bei jeder „unabhängigen" Initiative, wessen Geld und wessen Interesse dahinterstehen; lässt sich die Trägerschaft nicht offen ausweisen, ist es graue (und mit erfundener Quelle schwarze) Propaganda. Das Forum mit Verband nur im Kleingedruckten bleibt eine Tarnung — die gewollte Unabhängigkeitswirkung entsteht gerade durch das Verstecken und fällt bei Prüfung als Verschleierung auf. Die Kampagne ganz abzulehnen überkorrigiert: Offene Interessenvertretung ist legitim, das Problem ist nicht die Position, sondern die verdeckte Quelle. Die erfundene Sprecherin macht es schlimmer — sie verschiebt die graue Verschleierung zur schwarzen Propaganda mit gefälschter Identität.',
      en: 'The proposal aims at grey propaganda: the same message, but with a concealed sponsor so it reads as independent. The best option stays at the white end of the grid — open authorship with a declared interest — and removes the deception\'s foundation. The mechanism behind it: a hidden backer borrows someone else\'s credibility, but the advantage lasts only until exposure; after that, attention flips from the issue to the disguise. Used legitimately: as an association you may clearly take a position — openly, by name and with evidenced figures, that is clean advocacy. To spot and counter it: for any "independent" initiative, ask whose money and whose interest sit behind it; if the backing cannot be disclosed openly, it is grey (and, with an invented source, black) propaganda. The forum with the association only in the fine print stays a disguise — the intended independence effect exists precisely because of the hiding and reads as obfuscation on inspection. Rejecting the campaign entirely over-corrects: open advocacy is legitimate; the problem is not the position but the concealed source. The invented spokeswoman makes it worse — it moves the grey concealment on to black propaganda with a forged identity.',
    },
    points: 10,
    primaryTechniqueId: 'black_grey_white_propaganda',
    relatedTechniques: ['black_grey_white_propaganda', 'identity_provenance_deception'],
  },
  {
    id: 'wave5c-black_grey_white_propaganda-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'In mehreren lokalen Facebook-Gruppen taucht ein gut gemachtes Erklärvideo zur geplanten Ortsumgehung auf, das deren Vorteile für den Handel betont. Es nennt keinen Absender, kein Impressum, keine Finanzierung — wer es produziert und in Umlauf gebracht hat, bleibt offen. Eine falsche Quelle wird nicht behauptet; die Herkunft ist schlicht nicht ausgewiesen. (Recherche später: eine Standortinitiative der ansässigen Handelskette.)',
      en: 'In several local Facebook groups, a well-made explainer video about the planned bypass road appears, stressing its benefits for local retail. It names no sender, no imprint, no funding — who produced and circulated it is left open. No false source is claimed; the origin is simply not disclosed. (Later research: a location initiative run by the resident retail chain.)',
    },
    options: [
      { de: 'Schwarze, graue und weiße Propaganda (Quellentransparenz)', en: 'Black, grey and white propaganda (source transparency)' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
      { de: 'Integrity Clash / Provenance Laundering', en: 'Integrity clash / provenance laundering' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Graue Propaganda: Der Inhalt ist nicht erfunden, aber seine Herkunft bleibt bewusst im Dunkeln — kein Absender, kein Impressum, keine Finanzierung. Auf dem Raster weiß–grau–schwarz sitzt das in der Mitte: weder offen ausgewiesen (weiß) noch einer falschen Quelle zugeschrieben (schwarz), sondern durch Weglassen des Auftraggebers verschleiert. Der Hebel: Ohne erkennbares Interesse dahinter wirkt die Botschaft neutraler, als sie ist. Legitim einsetzen: Dieselben Inhalte offen unter dem Namen der Standortinitiative zu verbreiten wäre saubere, weiße Kommunikation. Erkennen und kontern: Frag bei anonymem, professionell gemachtem Material immer, wer es bezahlt und in Umlauf gebracht hat — fehlt jede Trägerschaftsangabe, behandle es als graue Propaganda und such die Finanzierungsspur. Identitäts- und Herkunftstäuschung träfe zu, wenn aktiv eine falsche, konkrete Quelle behauptet würde (ein erfundener Autor, ein gefälschtes Impressum) — hier wird nichts vorgetäuscht, nur weggelassen. Provenance Laundering meint das Erschleichen technischer Echtheitssignale wie Wasserzeichen oder C2PA-Manifeste; darum geht es hier nicht.',
      en: 'Grey propaganda: the content is not fabricated, but its origin is deliberately kept in the dark — no sender, no imprint, no funding. On the white–grey–black grid this sits in the middle: neither openly disclosed (white) nor attributed to a false source (black), but obscured by omitting the sponsor. The lever: with no visible interest behind it, the message reads as more neutral than it is. Used legitimately: circulating the same content openly under the location initiative\'s name would be clean, white communication. To spot and counter it: with anonymous, professionally made material, always ask who paid for it and put it into circulation — if any statement of backing is missing, treat it as grey propaganda and look for the funding trail. Identity and provenance deception would apply if a false, specific source were actively claimed (an invented author, a forged imprint) — here nothing is faked, only omitted. Provenance laundering means gaming technical authenticity signals such as watermarks or C2PA manifests; that is not what is happening here.',
    },
    points: 10,
    primaryTechniqueId: 'black_grey_white_propaganda',
    relatedTechniques: ['black_grey_white_propaganda', 'identity_provenance_deception', 'integrity_clash_laundering'],
  },
];
