// Welle 5c: 3 Übungen für disguised_ads (Disguised Ads / Getarnte Werbung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cDisguisedAds: Exercise[] = [
  {
    id: 'wave5c-disguised_ads-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster nutzt der Anbieter hier?',
      en: 'Which pattern is the provider using here?',
    },
    scenario: {
      de: 'Recherche im Fachmedium für Logistik: Eine PR-Managerin liest online einen Beitrag mit der Überschrift „Marktüberblick: Wohin sich die Lagerlogistik bewegt". Er steht in der Rubrik „Analyse", trägt dieselbe Typografie wie die redaktionellen Texte des Hauses und liest sich wie eine neutrale Branchenübersicht — empfiehlt am Ende aber ausschließlich die Software eines einzigen Anbieters. Ganz oben steht klein und ausgegraut „Anzeige · In Kooperation mit …"; der Beitrag wurde vom Marketing dieses Anbieters bezahlt und geliefert.',
      en: 'Research in a logistics trade outlet: a PR manager reads an online piece headlined "Market overview: where warehouse logistics is heading". It sits in the "Analysis" section, uses the same typography as the house\'s editorial texts, and reads like a neutral industry survey — but ends by recommending one single vendor\'s software exclusively. At the very top, small and greyed out, it says "Advertisement · In cooperation with …"; the piece was paid for and supplied by that vendor\'s marketing.',
    },
    options: [
      { de: 'Disguised Ads / Getarnte Werbung', en: 'Disguised ads' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Bait-and-Switch', en: 'Bait-and-switch' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Disguised Ads: Ein bezahlter Werbebeitrag übernimmt Layout, Rubrik und Ton der Redaktion, sodass sein kommerzieller Charakter untergeht — der Hebel ist das Vertrauen, das Leserinnen einer unabhängigen „Analyse" entgegenbringen, aber nicht einer Anzeige. Legitim einsetzen: Advertorials und Native Ads sind ein normales Instrument, solange die Kennzeichnung („Anzeige"/„Sponsored") prominent steht und der bezahlte Beitrag sichtbar vom redaktionellen Umfeld abgesetzt ist; platzierst du selbst solche Inhalte, ist das zugleich rechtlich geboten (Trennungsgebot). Erkennen und kontern: Prüfe bei jeder „neutralen" Empfehlung, wer sie bezahlt hat, und behandle eine „Analyse", die durchgehend nur einen Anbieter nennt, als Marketingmaterial — die ausgegraute Mini-Kennzeichnung ist genau das Signal, dem du nachgehst. Sneaking wirkt plausibel, weil auch dort etwas verborgen wird — dort ist es aber ein zusätzlicher Posten oder eine Zustimmung, die verdeckt in eine Transaktion rutscht; hier ist es die werbliche Natur eines Inhalts. Bait-and-Switch liegt nahe, weil ebenfalls ein kommerzieller Zweck im Spiel ist — dort wird jedoch ein beworbenes Angebot beim Zugriff gegen ein anderes getauscht; hier wird kein Angebot ausgetauscht, sondern die Anzeige als Redaktion getarnt. Identitäts- und Herkunftstäuschung passt scheinbar, weil eine Herkunft verschleiert wird — verschleiert wird dort aber, wer spricht (die Quelle/der Absender); hier bleibt der Absender erkennbar, verschleiert wird, dass es überhaupt Werbung ist.',
      en: 'Disguised ads: a paid promotional piece adopts the editorial layout, section, and tone, so its commercial nature disappears — the lever is the trust readers place in an independent "analysis" but not in an advertisement. Used legitimately: advertorials and native ads are an ordinary instrument as long as the label ("Advertisement"/"Sponsored") is prominent and the paid piece is visibly set apart from its editorial surroundings; when you place such content yourself, that is also legally required (the separation principle). To spot and counter it: with any "neutral" recommendation, check who paid for it, and treat an "analysis" that names only one vendor throughout as marketing material — the greyed-out mini-label is exactly the signal you follow up on. Sneaking looks plausible because something is hidden there too — but there it is an extra item or a consent slipped covertly into a transaction; here it is the promotional nature of a piece of content. Bait-and-switch is close because a commercial purpose is at play as well — but there an advertised offer is swapped for another the moment you act on it; here no offer is swapped, the ad is merely disguised as editorial. Identity and provenance deception seems to fit because an origin is concealed — but there it is who is speaking (the source/sender) that is disguised; here the sender stays identifiable and what is concealed is that this is advertising at all.',
    },
    points: 10,
    primaryTechniqueId: 'disguised_ads',
    relatedTechniques: ['disguised_ads', 'sneaking', 'bait_and_switch', 'identity_provenance_deception'],
  },
  {
    id: 'wave5c-disguised_ads-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation. Für eine Produkteinführung schlägt deine Agentur ein „redaktionelles Format" in einem Fachportal vor: ein Beitrag, der optisch und im Ton exakt wie die Redaktionstexte des Portals gebaut ist. Die Agentur rät, den „Anzeige"-Hinweis „möglichst dezent" zu halten — „das wirkt glaubwürdiger, wenn es nicht sofort nach Werbung aussieht". Die Platzierung ist gebucht, Freigabe bei dir.',
      en: 'You head corporate communications. For a product launch your agency proposes an "editorial format" in a trade portal: a piece built to look and read exactly like the portal\'s editorial texts. The agency advises keeping the "Advertisement" label "as discreet as possible" — "it comes across as more credible if it does not immediately look like an ad". The placement is booked; sign-off is yours.',
    },
    options: [
      {
        de: 'Ich gebe nur mit deutlicher Kennzeichnung frei: „Anzeige"/„Sponsored" gut sichtbar am Anfang, klare optische Trennung vom redaktionellen Umfeld, bezahlte Partnerschaft offengelegt. Getarnt verstößt es gegen das Trennungsgebot und beschädigt, einmal aufgedeckt, genau die Glaubwürdigkeit, für die wir zahlen.',
        en: 'I only sign off with a clear label: "Advertisement"/"Sponsored" plainly visible at the top, a clear visual separation from the editorial surroundings, the paid partnership disclosed. Disguised, it breaches the separation principle and, once exposed, damages the very credibility we are paying for.',
      },
      {
        de: 'Ich folge der Agentur: Ein kleiner, ausgegrauter Hinweis reicht rechtlich meist aus, und die Glaubwürdigkeit der Redaktionsoptik ist bei der Einführung genau das, was wir brauchen.',
        en: 'I follow the agency: a small, greyed-out note is usually enough legally, and the credibility of the editorial look is exactly what we need for the launch.',
      },
      {
        de: 'Ich lasse den Hinweis im Text stehen, aber ans Ende rücken — nach dem eigentlichen Beitrag, wo er die Wirkung des Einstiegs nicht stört.',
        en: 'I keep the note in the piece but move it to the end — after the actual article, where it does not interfere with the effect of the opening.',
      },
      {
        de: 'Ich stoppe die Platzierung ganz und untersage künftig jedes Native-Advertising-Format — bezahlte Beiträge in Redaktionsumgebungen sind grundsätzlich unseriös.',
        en: 'I cancel the placement entirely and ban every native-advertising format going forward — paid pieces in editorial environments are inherently disreputable.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag zielt auf Disguised Ads: Der bezahlte Beitrag soll die Glaubwürdigkeit der Redaktionsoptik borgen, indem seine werbliche Natur untergeht. Die beste Option trennt das legitime Instrument von der Tarnung: Native Advertising bleibt professionell, wenn die Kennzeichnung prominent steht und der Beitrag sichtbar vom Redaktionsumfeld abgesetzt ist — genau das verlangt auch das presserechtliche Trennungsgebot. Legitim einsetzen: Ein gut sichtbar als „Anzeige" markierter Fachbeitrag darf ruhig hochwertig und im Look des Umfelds gestaltet sein; getarnt wird er erst durch die versteckte Kennzeichnung. Erkennen und kontern: Wenn dir jemand rät, ein Werbe-Label „dezent" zu halten, damit es „nicht nach Werbung aussieht", ist das die Ansage der Technik selbst — dreh die Logik um und mach die Kennzeichnung zur Bedingung der Freigabe. Der Agentur zu folgen wirkt plausibel, weil die Redaktionsoptik kurzfristig glaubwürdiger trägt — sie riskiert aber Beanstandungen wegen Schleichwerbung und einen Vertrauensverlust, der teurer ist als der gewonnene Glanz. Den Hinweis ans Ende zu rücken wirkt wie ein Kompromiss, hält die Tarnung aber genau dort aufrecht, wo die Entscheidung fällt — beim Einstieg; eine Kennzeichnung, die man erst nach dem Lesen findet, erfüllt ihren Zweck nicht. Die Komplett-Absage samt Verbot überkorrigiert: Sie wirft ein zulässiges, transparent einsetzbares Format weg, statt schlicht die fehlende Kennzeichnung zu beheben.',
      en: 'The proposal aims at disguised ads: the paid piece is meant to borrow the credibility of the editorial look by letting its promotional nature disappear. The best option separates the legitimate instrument from the disguise: native advertising stays professional when the label is prominent and the piece is visibly set apart from the editorial surroundings — which is exactly what the press-law separation principle requires. Used legitimately: a trade piece clearly marked "Advertisement" may well be high-quality and styled like its surroundings; it only becomes disguised through the hidden label. To spot and counter it: when someone advises keeping an ad label "discreet" so it "does not look like an ad", that is the technique announcing itself — flip the logic and make the label a condition of sign-off. Following the agency looks plausible because the editorial look carries more credibility in the short term — but it risks complaints over covert advertising and a loss of trust costlier than the borrowed shine. Moving the note to the end feels like a compromise but keeps the disguise exactly where the decision is made — at the opening; a label you only find after reading does not do its job. Cancelling everything plus a ban overcorrects: it throws away a permissible, transparently usable format instead of simply fixing the missing label.',
    },
    points: 10,
    primaryTechniqueId: 'disguised_ads',
    relatedTechniques: ['disguised_ads'],
  },
  {
    id: 'wave5c-disguised_ads-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vervollständige die Abgrenzung: Bei getarnter Werbung wird verschleiert, ___; beim Sneaking wird verschleiert, ___.',
      en: 'Complete the distinction: with disguised ads, what is concealed is ___; with sneaking, what is concealed is ___.',
    },
    options: [
      {
        de: '… dass ein Inhalt oder Bedienelement überhaupt Werbung ist — … dass einer Transaktion ein zusätzlicher Posten oder eine Zustimmung beigefügt wurde',
        en: '… that a piece of content or an interface element is advertising at all — … that an extra item or a consent has been added to a transaction',
      },
      {
        de: '… dass einer Transaktion ein zusätzlicher Posten beigefügt wurde — … dass ein Inhalt überhaupt Werbung ist',
        en: '… that an extra item has been added to a transaction — … that a piece of content is advertising at all',
      },
      {
        de: '… mit welchem Lockangebot geworben wurde — … welches Ersatzangebot an seine Stelle tritt',
        en: '… which teaser offer was advertised — … which substitute offer takes its place',
      },
      {
        de: '… wer der wahre Absender einer Botschaft ist — … welche Quelle die Botschaft stützt',
        en: '… who the true sender of a message is — … which source backs the message',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Beide Muster arbeiten mit dem Verbergen einer Information — sie unterscheiden sich darin, welche. Getarnte Werbung verbirgt den werblichen Charakter selbst: Ein Inhalt oder ein Button sieht redaktionell oder funktional aus, obwohl er bezahlt ist. Sneaking verbirgt einen zusätzlichen Posten oder eine Zustimmung, die verdeckt in eine Transaktion rutscht und erst nach der Entscheidung sichtbar wird. Legitim einsetzen: Gestaltest du eigene Werbebeiträge, gehört die Kennzeichnung sichtbar an den Anfang — das ist der Test, an dem du auch fremde Formate misst. Erkennen und kontern: Frag bei einem „Beitrag", ob er bezahlt ist (Disguised Ads), und bei einem Vertrag, ob ein Posten dazukam, den du nie gewählt hast (Sneaking). Die zweite Option vertauscht genau die beiden Verschleierungen, auf die es ankommt. Die dritte beschreibt Bait-and-Switch: Dort geht es um ein Lockangebot, das gegen ein anderes getauscht wird, nicht um verborgene Werbung. Die vierte beschreibt Identitäts- und Herkunftstäuschung: Dort wird verschleiert, wer spricht — bei getarnter Werbung bleibt der Absender erkennbar, verborgen wird nur, dass es Werbung ist.',
      en: 'Both patterns work by hiding a piece of information — they differ in which. Disguised ads hide the promotional character itself: a piece of content or a button looks editorial or functional even though it is paid for. Sneaking hides an extra item or a consent that slips covertly into a transaction and only surfaces after the decision. Used legitimately: when you design your own promotional pieces, the label belongs visibly at the top — that is the test you also apply to other people\'s formats. To spot and counter it: with a "piece", ask whether it was paid for (disguised ads); with a contract, ask whether an item was added that you never chose (sneaking). The second option swaps exactly the two concealments that matter. The third describes bait-and-switch: there a teaser offer is swapped for another, not hidden advertising. The fourth describes identity and provenance deception: there what is concealed is who is speaking — with disguised ads the sender stays identifiable and only the fact that it is advertising is hidden.',
    },
    points: 10,
    primaryTechniqueId: 'disguised_ads',
    relatedTechniques: ['disguised_ads', 'sneaking', 'bait_and_switch', 'identity_provenance_deception'],
  },
];
