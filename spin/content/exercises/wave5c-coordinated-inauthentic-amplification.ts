// Welle 5c: 3 Übungen für coordinated_inauthentic_amplification
// (Coordinated Inauthentic Amplification / koordinierte unauthentische Verstärkung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// EN durchgängig US-Rechtschreibung. relatedTechniques nur registrierte IDs.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cCoordinatedInauthenticAmplification: Exercise[] = [
  {
    id: 'wave5c-coordinated_inauthentic_amplification-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Wettbewerbs-Monitoring vor einem Produkt-Launch: Als Analystin einer Kommunikationsagentur beobachtest du, wie ein Kampagnen-Hashtag über Nacht in die Trends klettert. Rund 300 Konten spielen im Minutentakt denselben Werbeclip wortgleich aus und liken, teilen und zitieren fast ausschließlich sich gegenseitig, bis der Algorithmus das Thema als Trend ausspielt. Die Konten haben keine eigene Geschichte und kein individuelles Profil — sie posten nichts außer diesem einen, überall identischen Inhalt und existieren erkennbar nur, um ihn wechselseitig hochzuspielen.',
      en: 'Competitive monitoring ahead of a product launch: as an analyst at a communications agency you watch a campaign hashtag climb into the trends overnight. Around 300 accounts push the same promo clip verbatim by the minute and like, share and quote almost exclusively one another, until the algorithm surfaces the topic as a trend. The accounts have no backstory and no individual profile — they post nothing but this one identical piece of content and visibly exist only to boost it back and forth.',
    },
    options: [
      { de: 'Coordinated Inauthentic Amplification', en: 'Coordinated Inauthentic Amplification' },
      { de: 'Astroturfing / Sockpuppets (erfundene einzelne Bürgerstimmen mit eigener Geschichte)', en: 'Astroturfing / sockpuppets (fabricated individual grassroots voices, each with their own backstory)' },
      { de: 'Bezahlte Reichweite (Paid Amplification — offen gebuchte Influencer und Anzeigen)', en: 'Paid amplification (openly booked influencers and ads)' },
      { de: 'Fake Social Proof (gefälschte Einzel-Bewertungen und Gütesiegel)', en: 'Fake social proof (fabricated individual ratings and trust badges)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Coordinated Inauthentic Amplification: Ein zentral gesteuertes Netzwerk scheinbar unabhängiger Konten spielt dieselbe Botschaft synchron aus und verstärkt sich fast nur selbst — so wird die Trending- und Sichtbarkeitsmechanik der Plattform überlistet und Reichweite, Konsens und Relevanz vorgetäuscht. Der Hebel wirkt, weil Publikum und Algorithmus aus sichtbarer Reichweite auf echte Popularität schließen; ist die Metrik gefälscht, kippt dieser Schluss. So nutzt du Verstärkung professionell: über ein transparent gekennzeichnetes Mitarbeiterprogramm, in dem reale Kolleginnen und Kollegen freiwillig und erkennbar teilen — koordiniert, aber offen und nicht als vermeintlich unabhängige Fremde. Daran erkennst du es und so entschärfst du es: Achte auf nahezu wortgleiche Posts im engen Zeitfenster, ein Netzwerk, das sich fast nur selbst liked, inhaltsleere Konten ohne eigene Historie und ein Trending ohne reale Nachrichtenlage — dann bewerte die Reichweite skeptisch, prüfe die Herkunft der Konten und stütze dein Urteil auf unabhängige Quellen statt auf die Zahl. Astroturfing wäre der nähere Fall, wenn einzelne erfundene Personas als unabhängige Bürgerstimmen mit eigener Geschichte aufträten; hier haben die Konten aber gar kein individuelles Profil — der Kern ist die gleichförmige, wechselseitige Amplifikation, nicht die einzelne erfundene Person. Bezahlte Reichweite (Paid Amplification) läge vor, wenn Influencer oder Anzeigen offen gebucht und als Werbung erkennbar wären; hier ist die Koordination gerade verdeckt und als organisch getarnt. Fake Social Proof setzt auf gefälschte Einzelsignale wie erfundene Bewertungen oder Gütesiegel; hier entsteht der Schein dagegen durch ein koordiniertes Netzwerk, das ein Trending erzwingt.',
      en: 'Coordinated Inauthentic Amplification: a centrally run network of seemingly independent accounts pushes the same message in sync and boosts almost only itself — gaming the platform\'s trending and visibility mechanics to fake reach, consensus and relevance. The lever works because audience and algorithm infer real popularity from visible reach; once that metric is faked, the inference collapses. Used professionally, you amplify through a transparently disclosed employee program in which real colleagues share voluntarily and visibly — coordinated, but open and not posing as supposedly independent strangers. To spot and counter it: watch for near-verbatim posts in a tight time window, a network that mostly likes itself, empty accounts with no history of their own, and trending with no real news behind it — then treat the reach with skepticism, check the provenance of the accounts and base your judgment on independent sources rather than the number. Astroturfing would be the closer cousin if individual invented personas appeared as independent citizen voices each with their own backstory; here the accounts have no individual profile at all — the core is the uniform, reciprocal amplification, not the single fabricated person. Paid amplification would apply if influencers or ads were booked openly and recognizable as advertising; here the coordination is deliberately covert and disguised as organic. Fake social proof relies on faked individual signals such as invented reviews or trust badges; here the illusion comes instead from a coordinated network forcing a trend.',
    },
    points: 10,
    primaryTechniqueId: 'coordinated_inauthentic_amplification',
    relatedTechniques: ['coordinated_inauthentic_amplification', 'social_proof', 'repetition'],
  },
  {
    id: 'wave5c-coordinated_inauthentic_amplification-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Kommunikation für einen Software-Launch. Eine Growth-Agentur pitcht dir ein „Trending-Paket": 300 gesteuerte und automatisierte Konten, die am Launch-Tag denselben Post synchron ausspielen und sich gegenseitig verstärken, bis das Produkt in den Trends steht — „sieht organisch aus, keiner merkt was". Die Zahlen im Report sähen stark aus.',
      en: 'You lead comms for a software launch. A growth agency pitches you a "trending package": 300 controlled and automated accounts that on launch day push the same post in sync and boost one another until the product hits the trends — "looks organic, nobody notices". The numbers in the report would look strong.',
    },
    options: [
      {
        de: 'Ich lehne das verdeckte Netzwerk ab und setze auf offene, authentische Verstärkung: ein transparent gekennzeichnetes Botschafter- und Mitarbeiterprogramm, in dem reale Personen freiwillig und erkennbar teilen. Reichweite wird ehrlich ausgewiesen, keine gemieteten oder automatisierten Konten, keine vorgetäuschte Graswurzel.',
        en: 'I decline the covert network and go for open, authentic amplification: a transparently disclosed ambassador and employee program in which real people share voluntarily and visibly. Reach is reported honestly, no rented or automated accounts, no faked grassroots.',
      },
      {
        de: 'Ich buche das Paket — am Launch-Tag zählt Sichtbarkeit, und wenn es organisch aussieht, ist der Trending-Effekt den Aufwand wert.',
        en: 'I book the package — on launch day visibility is what counts, and if it looks organic the trending effect is worth it.',
      },
      {
        de: 'Ich nehme das Paket, lasse aber nur echte Zitate posten und reduziere auf 100 Konten — dann ist es weniger auffällig und wirkt glaubwürdiger.',
        en: 'I take the package but have only genuine quotes posted and cut it to 100 accounts — that way it is less conspicuous and looks more credible.',
      },
      {
        de: 'Ich verbiete jede koordinierte Kampagne grundsätzlich: Sobald mehrere Konten abgestimmt dieselbe Botschaft teilen, ist es immer Manipulation.',
        en: 'I ban any coordinated campaign on principle: the moment several accounts share the same message in a concerted way, it is always manipulation.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Angebot ist Coordinated Inauthentic Amplification: ein zentral gesteuertes Netzwerk gemieteter und automatisierter Konten, das durch synchrones, gegenseitiges Hochspielen echte Reichweite und Zustimmung vortäuscht. Der Mechanismus wirkt, weil Publikum und Algorithmus aus Reichweite auf echte Popularität schließen — die Täuschung liegt in der verdeckten Koordination und den gefälschten Metriken, nicht im Inhalt des Posts. So setzt du Verstärkung professionell ein: mit benannten, klar als solchen ausgewiesenen Markenbotschaftern, die aus eigener Überzeugung und unter eigenem Namen teilen — koordiniert terminiert ist das erlaubt, solange niemand Unabhängigkeit vortäuscht. Der Unterschied ist die Echtheit und Offenlegung der Beteiligten. So erkennst und konterst du es: Frag bei jedem „Trending"- oder Reichweiten-Angebot, ob die Konten real und unabhängig sind, ob die Beteiligung freiwillig und gekennzeichnet ist und ob die ausgewiesene Reichweite echter Beteiligung entspricht — fehlt das, ist die Grenze zur Manipulation überschritten. Das Paket zu buchen begeht genau diese Grenzüberschreitung: Der Kern des Problems ist die verdeckte Koordination, nicht die Frage, wie „organisch" es aussieht. Auf 100 Konten mit echten Zitaten zu reduzieren, ändert daran nichts — gemietete, zentral gesteuerte Konten bleiben ein inauthentisches Netzwerk, nur etwas kleiner; das ist Feigenblatt statt Lösung. Jede koordinierte Kampagne pauschal zu verbieten überkorrigiert: Abgestimmte Verstärkung durch reale, offen agierende Menschen ist legitim; das Problem ist die verdeckte, vorgetäuschte Graswurzel, nicht die Koordination an sich.',
      en: 'The offer is Coordinated Inauthentic Amplification: a centrally run network of rented and automated accounts that fakes real reach and agreement through synchronized, mutual boosting. The mechanism works because audience and algorithm infer genuine popularity from reach — the deception lies in the covert coordination and the faked metrics, not in the content of the post. Using amplification professionally means working with named brand ambassadors who are clearly identified as such and share under their own name out of genuine conviction — timing that in a coordinated way is fine, as long as no one fakes independence. The difference is the genuineness and disclosure of the participants. To spot and counter it: for any "trending" or reach offer, ask whether the accounts are real and independent, whether participation is voluntary and disclosed, and whether the reported reach matches genuine engagement — if that is missing, the line into manipulation has been crossed. Booking the package commits exactly that crossing: the core problem is the covert coordination, not how "organic" it looks. Cutting to 100 accounts with genuine quotes changes nothing — rented, centrally controlled accounts remain an inauthentic network, just a bit smaller; that is a fig leaf, not a fix. Banning every coordinated campaign wholesale overcorrects: concerted amplification by real, openly acting people is legitimate; the problem is the covert, faked grassroots, not coordination as such.',
    },
    points: 10,
    primaryTechniqueId: 'coordinated_inauthentic_amplification',
    relatedTechniques: ['coordinated_inauthentic_amplification', 'social_proof'],
  },
  {
    id: 'wave5c-coordinated_inauthentic_amplification-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Kommentarspalten-Analyse nach kritischer Berichterstattung über einen Konzern: Unter jedem negativen Artikel erscheinen innerhalb weniger Minuten dieselben zwei entlastenden Botschaften, gepostet von rund 80 Konten ohne eigenes Profil, die sich fast nur gegenseitig hochvoten — bis die Spalte nach überwältigender Kunden-Zustimmung aussieht.',
      en: 'Comment-section analysis after critical reporting about a corporation: within minutes, the same two exonerating messages appear under every negative article, posted by roughly 80 profileless accounts that almost only upvote one another — until the section looks like overwhelming customer approval.',
    },
    options: [
      { de: 'Coordinated Inauthentic Amplification', en: 'Coordinated Inauthentic Amplification' },
      { de: 'Astroturfing / Sockpuppets (erfundene einzelne Bürgerstimmen mit eigener Geschichte)', en: 'Astroturfing / sockpuppets (fabricated individual grassroots voices with their own backstory)' },
      { de: 'Repetition (Wiederholung durch eine Quelle)', en: 'Repetition (one source repeating a message)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Coordinated Inauthentic Amplification: Ein Netzwerk scheinbar unabhängiger Konten spielt zeitgleich dieselbe Botschaft aus und votet sich gegenseitig hoch, um in der Kommentarspalte einen breiten Konsens und überwältigende Zustimmung vorzutäuschen. Der Hebel ist die vorgetäuschte Menge: Aus vielen gleichlautenden, hochgevoteten Stimmen schließen Leser auf eine echte Mehrheit. So nutzt du Verstärkung professionell: indem du dich in einer offenen Fach-Community einbringst, in der reale, erkennbare Stimmen aus eigener Überzeugung Position beziehen — sichtbar und ohne vorgetäuschte Unabhängigkeit. Daran erkennst du es: dieselbe Botschaft nahezu wortgleich im engen Zeitfenster, ein Netzwerk, das sich fast nur selbst hochvotet, profillose Konten und ein Zustimmungsbild ohne erkennbare echte Beteiligung — dann bewerte die Kommentarlage skeptisch und prüfe die Herkunft der Konten. Astroturfing wäre der nähere Fall, wenn einzelne erfundene Personas als unabhängige Kunden mit eigener Geschichte aufträten; hier haben die Konten aber kein individuelles Profil, und der Kern ist die koordinierte, sich wechselseitig verstärkende Vielzahl, nicht die einzelne erfundene Person. Repetition beschreibt, dass eine Quelle dieselbe Botschaft wiederholt, bis sie vertraut wirkt; hier liegt der Kern dagegen in den rund 80 scheinbar unabhängigen Absendern, die sich gegenseitig hochvoten und gemeinsam Konsens simulieren.',
      en: 'Coordinated Inauthentic Amplification: a network of seemingly independent accounts pushes the same message simultaneously and upvotes itself to fake broad consensus and overwhelming approval in the comment section. The lever is the faked quantity: from many identical, upvoted voices readers infer a real majority. Used professionally, you amplify by taking part in an open professional community where real, identifiable voices state their position out of genuine conviction — visibly and without faking independence. To spot it: the same message near-verbatim in a tight time window, a network that mostly upvotes itself, profileless accounts, and a picture of approval with no discernible genuine participation — then treat the comment picture with skepticism and check the provenance of the accounts. Astroturfing would be the closer cousin if individual invented personas appeared as independent customers each with their own backstory; here the accounts have no individual profile, and the core is the coordinated, mutually reinforcing multitude, not the single fabricated person. Repetition describes one source repeating the same message until it feels familiar; here the core is instead the roughly 80 seemingly independent senders that upvote one another and together simulate consensus.',
    },
    points: 10,
    primaryTechniqueId: 'coordinated_inauthentic_amplification',
    relatedTechniques: ['coordinated_inauthentic_amplification', 'repetition', 'social_proof'],
  },
];
