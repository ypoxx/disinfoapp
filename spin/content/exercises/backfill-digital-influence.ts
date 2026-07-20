// Backfill: 3 Übungen für digital_influence (Digitale Einflussnahme).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillDigitalInfluence: Exercise[] = [
  {
    id: 'backfill-digital_influence-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Agentur hier ein?',
      en: 'Which technique is the agency using here?',
    },
    scenario: {
      de: 'Ein Mobilfunk-Herausforderer will die angekündigte Preiserhöhung des Marktführers zum Stadtgespräch machen. Seine Agentur betreibt dafür ein Netz aus mehreren tausend automatisierten Accounts, die über Nacht im getakteten Sekundenraster denselben Protest-Hashtag absetzen — genau so, dass der Empfehlungs- und Trending-Algorithmus der Plattform das Thema für echtes Momentum hält und es Millionen Nutzern oben in den Feed spült. Hinter den Accounts steht kein einziger realer Kunde; die Reichweite entsteht rein daraus, dass die automatische Kuratierung der Plattform gezielt gefüttert und ausgetrickst wird.',
      en: 'A challenger mobile carrier wants the market leader\'s announced price hike to become the talk of the town. Its agency runs a network of several thousand automated accounts that fire off the same protest hashtag overnight on a timed, second-by-second cadence — calibrated precisely so the platform\'s recommendation and trending algorithm reads the topic as real momentum and pushes it to the top of millions of feeds. Not a single real customer stands behind the accounts; the reach comes purely from deliberately feeding and gaming the platform\'s automated curation.',
    },
    options: [
      { de: 'Digitale Einflussnahme', en: 'Digital influence' },
      { de: 'Astroturfing (Sockenpuppen)', en: 'Astroturfing (sock puppets)' },
      { de: 'Koordinierte inauthentische Verstärkung', en: 'Coordinated inauthentic amplification' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Digitale Einflussnahme: Der Hebel liegt nicht bei einzelnen Posts, sondern in der systematischen Manipulation der Informationsumgebung selbst — eine automatisierte Bot-Infrastruktur füttert und überlistet die Kuratierungs-Algorithmen der Plattform (Trending, Empfehlung), sodass die Maschine fabrizierte Aktivität für organisches Momentum hält und das Thema von sich aus nach oben spült. Der Mechanismus wirkt, weil wir dem, was „gerade überall trendet", Relevanz und Verbreitung unterstellen — und weil die Manipulation beliebig skaliert (Woolley & Howard 2018; Ferrara et al. 2016; moderate Evidenz — dokumentiert und wirksam, Wirkstärke je nach Plattform und Erkennungslage). Legitim einsetzen: Reichweite für einen Launch baust du sauber über echte Fürsprecher, offengelegte Kooperationen und transparent gekennzeichnete Bezahl-Promotion — koordiniert ja, aber ohne automatisierte Fake-Aktivität, die dem Algorithmus Organik vorgaukelt. Erkennen und kontern: Stutzig macht ein Trend, der ohne organisches Vorlaufwachstum aus dem Nichts explodiert, im Sekundentakt identische Botschaften und auffällig neue oder namenlose Accounts; prüfe das Wachstumsprofil und die Kontenqualität, bevor du reagierst. Astroturfing wirkt verwandt, meint aber enger das Vortäuschen einer echten Graswurzelbewegung über erfundene Identitäten — hier ist das Ziel nicht primär „echte Menschen", sondern das Aushebeln der Plattform-Algorithmik. Koordinierte inauthentische Verstärkung beschreibt das gleichgeschaltete Verbreiten einer Botschaft durch viele Konten — das ist ein Baustein hiervon, benennt aber nur die Verstärkung, nicht das gezielte Gaming der automatischen Kuratierung. Social Proof läge vor, wenn echte sichtbare Beliebtheit als Argument genutzt würde — hier wird diese Beliebtheit erst maschinell fabriziert.',
      en: 'Digital influence: the lever is not individual posts but the systematic manipulation of the information environment itself — an automated bot infrastructure feeds and outwits the platform\'s curation algorithms (trending, recommendation) so the machine mistakes fabricated activity for organic momentum and pushes the topic up on its own. The mechanism works because we ascribe relevance and reach to whatever "is trending everywhere right now" — and because the manipulation scales at will (Woolley & Howard 2018; Ferrara et al. 2016; moderate evidence — documented and effective, with impact varying by platform and detection). Used legitimately: you build reach for a launch cleanly through genuine advocates, disclosed partnerships and clearly labelled paid promotion — coordinated, yes, but without automated fake activity that fakes organic signal to the algorithm. To spot and counter it: be wary of a trend that explodes from nowhere without organic run-up, of second-by-second identical messages and of conspicuously new or nameless accounts; check the growth profile and account quality before you react. Astroturfing looks related but more narrowly means faking a real grassroots movement through invented identities — here the aim is not primarily "real people" but leveraging the platform algorithm. Coordinated inauthentic amplification describes many accounts spreading a message in lockstep — that is a building block of this, but it names only the amplification, not the deliberate gaming of automated curation. Social proof would be at play if real, visible popularity were used as an argument — here that popularity is manufactured by machine in the first place.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'astroturfing_sockpuppets', 'coordinated_inauthentic_amplification', 'social_proof'],
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
      de: 'Launch-Vorbereitung für eine neue Getränkemarke: Als Kommunikationsleiterin sitzt du im Pitch eines „Buzz"-Dienstleisters. Sein Angebot: Er betreibt einige tausend automatisierte Profile, die euren Markennamen im richtigen Takt posten, teilen und liken, damit der Feed-Algorithmus der Plattform das als echte Welle liest und die Marke ins Trending hebt — „am Launch-Tag steht ihr organisch ganz oben, ohne dass ein Cent nach Werbung aussieht". Der Chef findet die Zahlen verlockend.',
      en: 'Launch prep for a new beverage brand: as head of communications you are sitting in the pitch of a "buzz" vendor. His offer: he runs a few thousand automated profiles that will post, share and like your brand name on the right cadence so the platform\'s feed algorithm reads it as a real wave and lifts the brand into trending — "on launch day you sit organically at the top, without a cent of it looking like advertising." Your boss finds the numbers tempting.',
    },
    options: [
      {
        de: 'Ich lehne die automatisierten Profile ab und lege stattdessen einen echten Launch-Plan vor: Kooperationen mit offengelegten Creatorn, klar gekennzeichnete Bezahl-Promotion und Community-Aktivierung — koordinierte Reichweite, deren Momentum von realen Menschen und transparenten Kennzeichen getragen wird.',
        en: 'I decline the automated profiles and put a real launch plan on the table instead: partnerships with disclosed creators, clearly labelled paid promotion and community activation — coordinated reach whose momentum is carried by real people and transparent labelling.',
      },
      {
        de: 'Ich sage zu: Solange nichts Falsches über das Produkt behauptet wird und nur der Markenname verbreitet wird, ist das reine Reichweitenmechanik — die Botschaft selbst bleibt ja wahr.',
        en: 'I say yes: as long as nothing false is claimed about the product and only the brand name is spread, this is pure reach mechanics — the message itself stays true.',
      },
      {
        de: 'Ich buche das Paket kleiner: nur ein paar hundert statt mehrerer tausend Profile, damit das Muster unauffälliger bleibt und uns eine mögliche Enttarnung nicht so hart trifft.',
        en: 'I book a smaller package: only a few hundred profiles instead of several thousand, so the pattern stays less conspicuous and a possible exposure would not hit us as hard.',
      },
      {
        de: 'Ich nehme das Angebot, verlange aber, dass die Profile echte Nutzernamen und Profilbilder tragen — dann wirkt die Welle glaubwürdiger und niemand erkennt die Automatisierung.',
        en: 'I take the offer but require the profiles to carry real usernames and profile pictures — then the wave looks more credible and no one spots the automation.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Was der Dienstleister verkauft, ist digitale Einflussnahme in Reinform: eine automatisierte Konten-Infrastruktur, die den Kuratierungs-Algorithmus der Plattform mit fabrizierter Aktivität füttert, damit fingiertes Momentum wie organische Beliebtheit aussieht. Der professionelle Trennstrich verläuft nicht bei „koordiniert ja/nein" — ein Launch darf und soll koordiniert sein — sondern bei der Frage, ob reale Menschen und offengelegte Kennzeichen das Momentum tragen oder ob die Algorithmik mit Fake-Signalen ausgetrickst wird. Die beste Option behält die Reichweite und entzieht der Technik die Fälschung. Option 2 wirkt plausibel, weil „die Botschaft ist wahr" nach Unbedenklichkeit klingt — getäuscht wird hier aber nicht über das Produkt, sondern über die Echtheit des Zuspruchs und über die Plattform selbst; fliegt das auf, kostet es Reichweite (Sperren) und Glaubwürdigkeit auf einen Schlag. Option 3 verkleinert nur die Dosis: Auch ein paar hundert Bots gaukeln der Kuratierung Organik vor — die Technik bleibt dieselbe, nur schwerer zu skalieren. Option 4 macht es schlimmer, nicht besser: echte Namen und Bilder auf automatisierte Fake-Profile zu setzen, ist genau die inauthentische Identität, die Plattform-Richtlinien und Betrugsrecht adressieren — Tarnung erhöht das Risiko, statt es zu senken.',
      en: 'What the vendor is selling is digital influence in pure form: an automated account infrastructure that feeds the platform\'s curation algorithm with fabricated activity so faked momentum looks like organic popularity. The professional dividing line does not run at "coordinated yes/no" — a launch may and should be coordinated — but at whether real people and disclosed labelling carry the momentum, or whether the algorithm is tricked with fake signals. The best option keeps the reach and strips the technique of its forgery. Option 2 seems plausible because "the message is true" sounds harmless — but the deception here is not about the product; it is about the authenticity of the support and about the platform itself; if exposed, it costs reach (bans) and credibility in one blow. Option 3 merely shrinks the dose: even a few hundred bots fake organic signal to the curation — the technique stays the same, just harder to scale. Option 4 makes it worse, not better: putting real names and pictures on automated fake profiles is exactly the inauthentic identity that platform policies and fraud law target — camouflage raises the risk instead of lowering it.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'astroturfing_sockpuppets'],
  },
  {
    id: 'backfill-digital_influence-3',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Ergänze: Der Betreiber verschafft der Gegen-Erzählung Sichtbarkeit, indem er ___.',
      en: 'Complete the sentence: the operator gives the counter-narrative visibility by ___.',
    },
    scenario: {
      de: 'Nach einem kritischen Investigativbeitrag über einen Rohstoffkonzern taucht binnen Stunden eine Gegen-Erzählung auf. Ein beauftragter Betreiber steuert dafür ein Netz automatisierter Accounts, das den kritischen Beitrag massenhaft mit gleichlautenden Antworten flutet und zugleich einen entlastenden Zweitbeitrag im getakteten Muster teilt — kalibriert darauf, dass der Empfehlungs-Algorithmus der Plattform den Kritik-Beitrag als „umstritten" herabstuft und den entlastenden Beitrag als gefragt nach oben reicht. Weder Flut noch Verbreitung haben ein organisches Wachstumsprofil; sie sind so gebaut, dass die automatische Kuratierung sie belohnt.',
      en: 'After a critical investigative piece about a raw-materials group, a counter-narrative surfaces within hours. A contracted operator steers a network of automated accounts that floods the critical piece en masse with identically worded replies and, at the same time, shares an exculpatory second piece on a timed pattern — calibrated so that the platform\'s recommendation algorithm downgrades the critical piece as "contested" and pushes the exculpatory piece up as in demand. Neither the flood nor the spread has an organic growth profile; they are engineered so the automated curation rewards them.',
    },
    options: [
      {
        de: 'ein automatisiertes Konten-Netz die Kuratierungs-Algorithmen der Plattform mit fabrizierter Aktivität austricksen lässt, um Sichtbarkeit umzuverteilen (Digitale Einflussnahme)',
        en: 'having an automated account network trick the platform\'s curation algorithms with fabricated activity to redistribute visibility (digital influence)',
      },
      {
        de: 'in einer echten Suchlücke gezielt Inhalte platziert, damit Suchende zum kritischen Thema nur die entlastende Version finden (Datenlücken / SEO-Manipulation)',
        en: 'deliberately placing content in a genuine data void so that searchers on the critical topic find only the exculpatory version (data voids / SEO manipulation)',
      },
      {
        de: 'erfundene Basis-Unterstützer mit eigenen Profilen als scheinbar spontane Bürgerbewegung auftreten lässt (Astroturfing / Sockenpuppen)',
        en: 'having invented grassroots supporters appear with their own profiles as a seemingly spontaneous citizens\' movement (astroturfing / sock puppets)',
      },
      {
        de: 'dieselbe entlastende Kernaussage so oft wiederholt, bis sie allein durch Vertrautheit glaubwürdiger wirkt (Wiederholung / Illusion der Wahrheit)',
        en: 'repeating the same exculpatory core claim so often that it feels more credible through familiarity alone (repetition / illusory-truth effect)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Digitale Einflussnahme: Kern ist, dass ein automatisiertes Konten-Netz die Kuratierungs-Algorithmen der Plattform selbst manipuliert — es füttert Flut und Verbreitung so, dass die Maschine den Kritik-Beitrag herabstuft und den entlastenden nach oben reicht. Nicht der Inhalt einer einzelnen Botschaft ist der Hebel, sondern das systematische Aushebeln dessen, was die Plattform automatisch sichtbar macht; das fehlende organische Wachstumsprofil ist das Verräterische. Legitim ist die ehrliche Verwandte: einem einseitigen Bericht mit einer offen abgesenderten, faktenbasierten Gegendarstellung begegnen, die auf ihre eigene Substanz baut statt auf fingierte Signale. Erkennen und kontern: Wachstumsprofil und Kontenqualität prüfen — explodiert etwas ohne Vorlauf, häufen sich identische Antworten, tauchen namenlose Neu-Accounts im Takt auf? Datenlücken / SEO-Manipulation läge vor, wenn eine echte Suchlücke besetzt würde, um Suchmaschinen-Treffer zu steuern — hier geht es aber um die Feed-Kuratierung einer sozialen Plattform, nicht um Suchergebnisse. Astroturfing meint enger das Vortäuschen einer echten Graswurzelbewegung über erfundene Identitäten; hier ist das eigentliche Ziel das Gaming der Algorithmik, nicht die Bürgerbewegungs-Fassade. Wiederholung / Illusion der Wahrheit würde allein auf die vertrautheitsbedingte Glaubwürdigkeit der oft gehörten Aussage setzen — ohne die automatisierte Infrastruktur, die die Plattform-Kuratierung austrickst.',
      en: 'Digital influence: the core is that an automated account network manipulates the platform\'s curation algorithms themselves — it feeds flood and spread so the machine downgrades the critical piece and pushes up the exculpatory one. The lever is not the content of any single message but the systematic subverting of what the platform makes visible automatically; the missing organic growth profile is the tell. The legitimate cousin is the honest one: meeting a one-sided report with an openly attributed, fact-based rebuttal that relies on its own substance rather than faked signals. To spot and counter it: check the growth profile and account quality — does something explode without run-up, do identically worded replies pile up, do nameless new accounts appear on cadence? Data voids / SEO manipulation would be at play if a genuine search gap were occupied to steer search-engine results — but this is about the feed curation of a social platform, not search results. Astroturfing more narrowly means faking a real grassroots movement through invented identities; here the actual aim is gaming the algorithm, not the citizens\'-movement façade. Repetition / illusory-truth effect would rely solely on the familiarity-driven credibility of an oft-heard claim — without the automated infrastructure that tricks the platform curation.',
    },
    points: 10,
    primaryTechniqueId: 'digital_influence',
    relatedTechniques: ['digital_influence', 'data_voids_seo_manipulation', 'astroturfing_sockpuppets', 'repetition'],
  },
];
