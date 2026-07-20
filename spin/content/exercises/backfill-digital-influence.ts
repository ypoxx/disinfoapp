// Backfill: 3 Übungen für digital_influence (Digitale Einflussnahme).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).
//
// Leitidee der Revision: digital_influence ist der OBERBEGRIFF für die
// systematische Manipulation der gesamten Informationsumgebung. Jede Übung
// zeigt daher eine MEHRVEKTORIGE Operation (Bot-Verstärkung + SEO/Suche +
// Feed-/Kommentar-Kuratierung als ein Programm), sodass jedes Kind-Label
// (CIA = nur Verstärkung, SEO = nur Suche, Astroturfing = nur Personas)
// nachweisbar zu ENG greift und nicht co-korrekt ist.

import type { Exercise } from '../types';

export const backfillDigitalInfluence: Exercise[] = [
  {
    id: 'backfill-digital_influence-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik beschreibt die Operation der Agentur am genauesten?',
      en: "Which technique most precisely describes the agency's operation?",
    },
    scenario: {
      de: 'Eine private Klinikgruppe will vor dem Marktstart einer neuen Selbstzahler-Behandlung das komplette Online-Bild rund um das Verfahren zu ihren Gunsten drehen. Ihre Agentur fährt dafür ein abgestimmtes Programm über mehrere Plattform-Oberflächen zugleich: Ein Bot-Netz hebt einen positiven Behandlungs-Hashtag ins Trending; parallel produziert eine Content-Farm dutzendfach suchmaschinenoptimierte „Erfahrungsberichte" und lexikonartige Seiten, damit Suchtreffer und Autovervollständigung zum Verfahren nur noch Wohlwollendes zeigen; zugleich votet ein zentral gesteuertes Konten-Netz zustimmende Kommentare hoch und kritische nach unten, sodass der Empfehlungsfeed sie umsortiert. Nicht ein Kanal wird bespielt: Trending, Suchtreffer samt Autovervollständigung und Empfehlungsfeed werden als eine einzige Informationsumgebung umgebaut — die Bot-Verstärkung ist darin nur ein Baustein neben der Such- und Feed-Steuerung.',
      en: 'A private hospital group wants to tilt the entire online picture around a new self-pay treatment in its favour ahead of launch. Its agency runs one coordinated programme across several platform surfaces at once: a bot network lifts a positive treatment hashtag into trending; in parallel, a content farm churns out dozens of search-optimised "patient experience" posts and encyclopaedia-style pages so that search results and autocomplete for the procedure show nothing but favourable material; and at the same time a centrally steered account network upvotes approving comments and downvotes critical ones so the recommendation feed reorders them. It is not one channel that is worked: trending, search results with autocomplete, and the recommendation feed are rebuilt as a single information environment — the bot amplification is only one building block in it, alongside the steering of search and feed.',
    },
    options: [
      { de: 'Digitale Einflussnahme', en: 'Digital influence' },
      { de: 'Coordinated Inauthentic Amplification', en: 'Coordinated inauthentic amplification' },
      { de: 'Datenlücken / SEO-Manipulation', en: 'Data voids / SEO manipulation' },
      { de: 'Firehose of Falsehood', en: 'Firehose of falsehood' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Digitale Einflussnahme ist der Oberbegriff für genau das: die systematische Manipulation der gesamten Informationsumgebung, die mehrere Hebel zu einem Programm verschaltet — Bot-Verstärkung ins Trending, suchmaschinenoptimierte Inhaltsflut für die Trefferliste und ein gesteuertes Umsortieren der Kommentar- und Empfehlungsränge. Der Hebel wirkt, weil wir das, was uns eine Plattform übereinstimmend als beliebt, gesucht und zustimmungsfähig anzeigt, für ein echtes Meinungsbild halten — und weil sich diese Bearbeitung über alle Oberflächen zugleich beliebig skalieren lässt (Woolley & Howard 2018; Ferrara et al. 2016; moderate Evidenz — dokumentiert und wirksam, mit plattformabhängiger Wirkstärke). So setzt du es sauber ein: Einen Launch darfst du kanalübergreifend orchestrieren — aber mit echten Fürsprechern, offen ausgewiesenen Kooperationen, redlicher Suchoptimierung eigener Inhalte und gekennzeichneter Bezahl-Promotion, sodass jede Oberfläche echte Nachfrage spiegelt statt fingierter. Daran erkennst du es: Stutzig macht, wenn mehrere Sichtbarkeits-Oberflächen — Trending, Suche, Empfehlungsränge — gleichzeitig und ohne reale Nachrichtenlage in dieselbe Richtung kippen; dann lohnt der Blick darauf, wer die Aktivität eigentlich trägt. Coordinated Inauthentic Amplification benennt nur einen Ausschnitt hiervon — das gleichgeschaltete Hochspielen einer Botschaft durch viele Konten —, deckt aber die Suchtreffer-Bearbeitung nicht ab. Datenlücken / SEO-Manipulation trifft ebenfalls nur eine Oberfläche, die Suchseite, und lässt Trending und Feed außen vor. Firehose of Falsehood setzt auf eine hohe Zahl einander widersprechender Falschversionen, die ermüden sollen — hier ist die Botschaft aber kohärent und einseitig positiv, und das Ziel ist Sichtbarkeit, nicht Erschöpfung.',
      en: 'Digital influence is the umbrella for exactly this: the systematic manipulation of the whole information environment, wiring several levers into one programme — bot amplification into trending, a search-optimised flood of content for the results page, and a steered reordering of comment and recommendation ranks. The lever works because we treat whatever a platform consistently shows us as popular, searched-for and endorsed as a real picture of opinion — and because this reworking scales at will across every surface at once (Woolley & Howard 2018; Ferrara et al. 2016; moderate evidence — documented and effective, with impact depending on the platform). How to use it cleanly: you may orchestrate a launch across channels — but with genuine advocates, openly declared partnerships, honest search optimisation of your own content and labelled paid promotion, so each surface mirrors real demand rather than a manufactured one. How to spot it: be wary when several visibility surfaces — trending, search, recommendation ranks — tip the same way at once with no real news event behind them; that is the moment to ask who is actually carrying the activity. Coordinated inauthentic amplification names only one slice of this — many accounts boosting a message in lockstep — but does not cover the reworking of search results. Data voids / SEO manipulation likewise hits only one surface, the search page, and leaves trending and the feed untouched. Firehose of falsehood relies on a high volume of mutually contradictory false versions meant to exhaust the audience — here the message is coherent and one-sidedly positive, and the goal is visibility, not exhaustion.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'coordinated_inauthentic_amplification', 'data_voids_seo_manipulation', 'firehose_of_falsehood'],
  },
  {
    id: 'backfill-digital_influence-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Markteinführung einer neuen Kopfhörer-Marke: Als Kommunikationsleiterin sitzt du im Pitch einer Agentur, die ein „Digital-Dominanz"-Paket verkauft. Ihr Versprechen: ein verzahntes Programm aus einigen tausend automatisierten Profilen, die euren Markennamen ins Trending posten, einer Content-Farm, die suchmaschinenoptimierte Lobtexte und Vergleichsseiten für die Trefferliste produziert, und Dutzenden erfundenen „Kundinnen", die überall Fünf-Sterne-Bewertungen streuen — alles aus einer Hand, damit am Launch-Tag nicht nur der Feed, sondern ebenso Suchtreffer und Bewertungen wie ein einziger organischer Begeisterungssturm aussehen. Der Geschäftsführer findet die Reichweitenprognose stark.',
      en: 'Launch of a new headphone brand: as head of communications you are in the pitch of an agency selling a "digital dominance" package. Their promise: an interlocking programme of a few thousand automated profiles that post your brand name into trending, a content farm that produces search-optimised praise and comparison pages for the results list, and dozens of invented "customers" scattering five-star reviews everywhere — all from a single provider, so that on launch day not the feed alone but search results and star ratings alike read as one organic surge of enthusiasm. Your managing director likes the reach forecast.',
    },
    options: [
      {
        de: 'Ich lehne den inauthentischen Apparat ab und lege ein ebenso kanalübergreifendes, aber echtes Programm vor: offengelegte Creator-Kooperationen, redlich optimierte eigene Inhalte, gekennzeichnete Promotion und um Bewertungen gebetene Erstkäufer — Reichweite über Feed, Suche und Ratings, die reale Nachfrage spiegelt.',
        en: 'I turn down the inauthentic apparatus and put an equally cross-channel but genuine programme on the table: disclosed creator partnerships, honestly optimised owned content, labelled promotion, and early buyers asked for reviews — reach across feed, search and ratings that mirrors real demand.',
      },
      {
        de: 'Ich sage zu: Am Produkt wird nichts Falsches behauptet, verbreitet wird nur der Markenname — das ist reine Reichweitenmechanik, und die Aussage bleibt ja wahr.',
        en: 'I say yes: nothing false is claimed about the product, only the brand name is spread — that is pure reach mechanics, and the message itself stays true.',
      },
      {
        de: 'Ich streiche nur die Bots und behalte Content-Farm und gestreute Bewertungen — Suchoptimierung und Rezensionen zähle ich zum normalen Content-Marketing.',
        en: 'I cut only the bots and keep the content farm and the seeded reviews — I count search optimisation and reviews as normal content marketing.',
      },
      {
        de: 'Ich nehme das Paket, lasse es aber über einen ausländischen Subunternehmer laufen, damit sich nichts zu uns zurückverfolgen lässt, falls etwas auffliegt.',
        en: "I take the package but route it through an offshore subcontractor so nothing can be traced back to us if anything surfaces.",
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verkauft wird hier digitale Einflussnahme in Reinform: eine gemietete Konten- und Content-Infrastruktur, die Feed, Suchtreffer und Bewertungen gleichzeitig mit fabrizierter Aktivität bespielt, damit fingierte Begeisterung wie ein organischer Sturm wirkt. Deinen professionellen Trennstrich ziehst du nicht bei „koordiniert ja oder nein" — orchestrieren darfst du —, sondern bei „echt und offengelegt gegen fingiert und verdeckt", und das auf jeder Oberfläche zugleich. Die tragfähige Antwort behält die kanalübergreifende Reichweite und nimmt der Sache nur die Fälschung. „Die Botschaft bleibt ja wahr" wirkt harmlos, weil es nach Ehrlichkeit klingt — getäuscht wird aber nicht über das Produkt, sondern über die Echtheit des Zuspruchs und über die Plattformen selbst; fliegt es auf, verlierst du Sichtbarkeit durch Sperren und Glaubwürdigkeit zugleich. Nur die Bots zu streichen und Content-Farm samt gestreuten Fünf-Sterne-Bewertungen zu behalten, verschiebt bloß das Etikett: erfundene „Kundinnen" mit Schein-Rezensionen sind für sich schon inauthentisch — du tauschst das Vehikel, nicht das Problem. Und den Auftrag über einen ausländischen Subunternehmer zu verschleiern, macht es nicht sauberer, sondern riskanter: Verdeckung ersetzt keine Legitimität, sie vertieft nur den Schaden, wenn die Spur doch auffliegt.',
      en: "What is being sold here is digital influence in pure form: a rented account-and-content infrastructure that works the feed, search results and ratings simultaneously with fabricated activity, so that faked enthusiasm looks like an organic surge. Your professional dividing line does not run at \"coordinated, yes or no\" — orchestrating is allowed — but at \"genuine and disclosed versus faked and covert\", and that on every surface at once. The workable answer keeps the cross-channel reach and strips the effort of its forgery alone. \"But the message stays true\" feels harmless because it sounds like honesty — yet the deception is not about the product; it is about the authenticity of the support and about the platforms themselves; if it surfaces, you lose visibility to bans and credibility all at once. Cutting only the bots while keeping the content farm and the seeded five-star reviews merely moves the label: invented \"customers\" with sham reviews are inauthentic in their own right — you swap the vehicle, not the problem. And hiding the contract behind an offshore subcontractor makes it riskier, not cleaner: concealment is no substitute for legitimacy; it only deepens the damage if the trail surfaces after all.",
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'coordinated_inauthentic_amplification', 'astroturfing_sockpuppets', 'data_voids_seo_manipulation'],
  },
  {
    id: 'backfill-digital_influence-3',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Ergänze den Satz: Der Betreiber prägt das Meinungsbild zum Konzern, indem er ___.',
      en: 'Complete the sentence: the operator shapes the picture of opinion about the group by ___.',
    },
    scenario: {
      de: 'Nach einer kritischen Investigativserie über einen Rohstoffkonzern kippt binnen zwei Tagen das gesamte Online-Bild. Ein beauftragter Betreiber bearbeitet dazu die Informationsumgebung des Themas an mehreren Stellen zugleich: Ein automatisiertes Konten-Netz flutet die Kritik-Beiträge mit gleichlautenden Antworten und votet zugleich einen entlastenden Zweitbeitrag hoch, sodass der Empfehlungs-Algorithmus die Kritik als „umstritten" herabstuft; parallel schiebt eine Serie suchmaschinenoptimierter Seiten die entlastende Darstellung in den Suchtreffern nach oben. Weder Flut noch Verbreitung noch die Suchpräsenz haben ein organisches Wachstumsprofil — alles ist darauf gebaut, dass die automatische Kuratierung mehrerer Oberflächen es belohnt; die Verstärkung der Kommentare ist dabei nur ein Hebel neben der Umsortierung von Empfehlungsfeed und Suchtreffern.',
      en: 'After a critical investigative series about a raw-materials group, the entire online picture flips within two days. A contracted operator works the information environment around the topic in several places at once: an automated account network floods the critical posts with identically worded replies and simultaneously upvotes an exculpatory second piece, so the recommendation algorithm downgrades the criticism as "contested"; in parallel, a run of search-optimised pages pushes the exculpatory account up the search results. Neither the flood, nor the spread, nor the search presence has an organic growth profile — everything is built so the automated curation of several surfaces rewards it; the amplification of the comments is only one lever here, alongside the reordering of the recommendation feed and the search results.',
    },
    options: [
      {
        de: 'das digitale Umfeld des Themas über mehrere Hebel zugleich umbaut — Empfehlungsränge, Kommentarreihen und Suchtreffer systematisch zu seinen Gunsten kuratieren lässt (Digitale Einflussnahme)',
        en: "reshaping the topic's digital environment through several levers at once — having recommendation ranks, comment ordering and search results systematically curated in his favour (digital influence)",
      },
      {
        de: 'eine echte Wissens- und Suchlücke besetzt, damit Suchende zum Thema ausschließlich die entlastende Version finden (Datenlücken / SEO-Manipulation)',
        en: 'occupying a genuine knowledge and search gap so that searchers on the topic find only the exculpatory version (data voids / SEO manipulation)',
      },
      {
        de: 'erfundene Einzel-Unterstützer mit eigenen ausgestalteten Profilen als spontane Bürgerbewegung auftreten lässt (Astroturfing / Sockenpuppen)',
        en: "having invented individual supporters with their own fleshed-out profiles appear as a spontaneous citizens' movement (astroturfing / sock puppets)",
      },
      {
        de: 'dieselbe entlastende Kernaussage so oft wiederholt, bis sie allein durch Vertrautheit glaubwürdiger klingt (Wiederholung / Illusion der Wahrheit)',
        en: 'repeating the same exculpatory core claim until it sounds more credible through familiarity alone (repetition / illusory-truth effect)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Digitale Einflussnahme: Der Betreiber setzt nicht an einer einzelnen Botschaft an, sondern baut die Sichtbarkeits-Maschine mehrerer Oberflächen um — Empfehlungsränge, Kommentar-Reihenfolge und Suchtreffer werden zugleich so gefüttert, dass die Kritik heruntersinkt und die entlastende Version aufsteigt. Wirksam ist das, weil eine Plattform uns ihre kuratierte Reihenfolge als neutralen Spiegel der Relevanz verkauft; wer sie steuert, verschiebt das wahrgenommene Meinungsbild, ohne ein einziges Argument gewinnen zu müssen. So setzt du es sauber ein: Auf eine kritische Serie darfst du kanalübergreifend antworten — aber mit einer offen abgesenderten, faktenbasierten Gegendarstellung, die auf ihre eigene Substanz baut statt auf fingierte Rangsignale. Daran erkennst du es: Stutzig macht das fehlende organische Vorlauf-Wachstum — alles erscheint im Takt, ohne dass eine reale Diskussion es trägt; dann sieh nach, wer die Aktivität wirklich betreibt. Datenlücken / SEO-Manipulation griffe nur, wenn es allein um das Besetzen einer echten Suchlücke ginge — hier ist die Suche nur einer von mehreren gleichzeitig bearbeiteten Hebeln, neben Feed und Kommentaren. Astroturfing zielt auf erfundene Einzel-Personas, die als spontane Bürger- oder Kundenstimmen auftreten; hier tritt niemand als ausgestaltete Person auf, manipuliert wird die Ranking-Maschine, nicht eine vorgetäuschte Bürgerschaft. Wiederholung / Illusion der Wahrheit setzte auf die Vertrautheit der oft gehörten Aussage — der eigentliche Hebel ist hier aber die algorithmische Umsortierung mehrerer Oberflächen, nicht menschliche Gewöhnung.',
      en: 'Digital influence: the operator does not target a single message but rebuilds the visibility machinery of several surfaces — recommendation ranks, comment ordering and search results are fed at the same time so the criticism sinks and the exculpatory version rises. It works because a platform sells us its curated ordering as a neutral mirror of relevance; whoever steers it shifts the perceived picture of opinion without having to win a single argument. How to use it cleanly: you may answer a critical series across channels — but with an openly attributed, fact-based rebuttal that rests on its own substance rather than on faked rank signals. How to spot it: be wary of the missing organic run-up — everything appears on cue, with no real discussion carrying it; then look at who is actually driving the activity. Data voids / SEO manipulation would apply only if this were solely about occupying a genuine search gap — here search is just one of several levers worked in parallel, alongside the feed and the comments. Astroturfing aims at invented individual personas appearing as spontaneous citizen or customer voices; here no one appears as a fleshed-out person — what is manipulated is the ranking machinery, not a faked citizenry. Repetition / illusory-truth effect would bank on the familiarity of an oft-heard claim — but the real lever here is the algorithmic reordering of several surfaces, not human habituation.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'data_voids_seo_manipulation', 'astroturfing_sockpuppets', 'repetition'],
  },
];
