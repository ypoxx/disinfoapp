import type { Exercise } from '../../types';

// scarcity — Phase 3 densification batch.
export const scarcityP3Exercises: Exercise[] = [
  {
    id: 'sc-p3-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik setzt diese Ankündigung vor allem ein?',
      en: 'Which persuasion technique does this announcement mainly use?',
    },
    scenario: {
      de: '„Limitierte Auflage: Von diesem Modell fertigen wir weltweit nur 500 Stück. Ist die Charge ausverkauft, legen wir sie nie wieder neu auf."',
      en: '„Limited edition: we are producing only 500 units of this model worldwide. Once the batch sells out, we will never make it again."',
    },
    options: [
      { de: 'Knappheit (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Knappheit in Reinform: Eine feste Stückzahl (500) plus die Ansage „nie wieder" machen das Produkt allein durch seine begrenzte Verfügbarkeit begehrenswerter und drängen zum sofortigen Kauf. Der Hebel wirkt, weil wir Verfügbarkeit unbewusst als Wertsignal lesen — was knapp ist, muss gut sein. Die Grenze: Eine echte, tatsächlich limitierte Auflage transparent zu benennen ist legitim; eine Stückzahl zu erfinden oder die „einmalige" Serie später klammheimlich nachzulegen wäre manipulativ. Sozialer Beweis würde auf das Verhalten vieler anderer verweisen („Tausende haben schon gekauft"), Reziprozität auf eine vorab gewährte Gefälligkeit, ein Autoritätsargument auf eine Experteninstanz — nichts davon steht hier.',
      en: 'This is scarcity in its purest form: a fixed quantity (500) plus the „never again" promise make the product more desirable purely through its limited availability and push for an immediate purchase. The lever works because we unconsciously read availability as a value signal — what is scarce must be good. The boundary: naming a genuinely limited run transparently is legitimate; inventing a quantity or quietly re-releasing the „one-off" series later would be manipulative. Social proof would point to the behaviour of many others („thousands have already bought"), reciprocity to a favour granted in advance, an appeal to authority to an expert instance — none of which appears here.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'sc-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik erzeugt hier den Handlungsdruck?',
      en: 'Which technique creates the pressure to act here?',
    },
    scenario: {
      de: '„Blitzverkauf im Onlineshop: Ein sichtbarer Countdown zählt herunter — ‚Nur noch 02:59:58, dann endet die Aktion.’“',
      en: '„Flash sale in an online shop: a visible countdown ticks down — ‚only 02:59:58 left, then the deal ends.’“',
    },
    options: [
      { de: 'Knappheit (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Ankern (Anchoring)', en: 'Anchoring' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Countdown ist zeitliche Knappheit: Nicht die Menge, sondern das Zeitfenster ist begrenzt, und die ablaufende Uhr soll die Entscheidung vom „später" ins „jetzt" ziehen. Der Mechanismus: Eine drohende Nichtverfügbarkeit erhöht die wahrgenommene Attraktivität und unterdrückt das ruhige Abwägen. Die Grenze: Eine echte Frist (Aktionsende, Anmeldeschluss) transparent anzuzeigen ist legitim; ein Timer, der sich bei jedem Seitenaufruf heimlich neu startet, ist eine erfundene Deadline und damit manipulativ. Sozialer Beweis bräuchte einen Verweis auf viele andere Käufer, Ankern einen zuerst genannten Vergleichswert (z. B. einen durchgestrichenen Preis), Priming eine subtile Vorbahnung durch Reize im Umfeld — hier zählt allein die Uhr.',
      en: 'The countdown is temporal scarcity: not the quantity but the time window is limited, and the running clock is meant to pull the decision from „later" into „now". The mechanism: an impending unavailability raises perceived attractiveness and suppresses calm deliberation. The boundary: showing a real deadline (end of promotion, registration cut-off) transparently is legitimate; a timer that secretly resets on every page load is a fabricated deadline and therefore manipulative. Social proof would need a reference to many other buyers, anchoring a comparison value mentioned first (e.g. a struck-through price), priming a subtle pre-activation via surrounding cues — here only the clock matters.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'sc-p3-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Vertriebsnachricht vor allem?',
      en: 'Which technique primarily shapes this sales message?',
    },
    scenario: {
      de: 'Eine Software-Anbieterin schreibt an einen zögernden Interessenten: „Wir nehmen pro Quartal nur eine begrenzte Zahl neuer Kunden ins Premium-Onboarding auf. Für dieses Quartal sind noch genau zwei Plätze frei — einen davon können wir Ihnen nur bis Freitag reservieren."',
      en: 'A software vendor writes to a hesitant prospect: „Each quarter we admit only a limited number of new clients to premium onboarding. For this quarter exactly two slots remain — we can hold one of them for you only until Friday."',
    },
    options: [
      { de: 'Knappheit (Scarcity)', en: 'Scarcity' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Ankern (Anchoring)', en: 'Anchoring' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der dominante Hebel ist Knappheit — und zwar doppelt: begrenzte Kapazität („nur zwei Plätze") und eine Frist („nur bis Freitag"). Beides erzeugt Handlungsdruck, indem es die Verfügbarkeit künstlich oder real verengt. Der Mechanismus zielt auf FOMO: Wer zögert, verliert den Zugang. Die Grenze verläuft an der Wahrheit — sind es wirklich zwei Plätze und gilt die Frist tatsächlich, ist der Hinweis legitim; sind Kapazität und Deadline erfunden, wird daraus Manipulation. Reziprozität würde eine zuvor erbrachte Gegenleistung voraussetzen (ein Geschenk, das man erwidern soll) — hier fehlt sie. Ankern bräuchte einen zuerst genannten Vergleichs- oder Preiswert, an dem sich die Wahrnehmung ausrichtet. Sozialer Beweis wäre es erst, wenn auf das Verhalten vieler anderer Kunden verwiesen würde („die meisten Ihrer Branche buchen bei uns") — die knappe Kapazität allein belegt keine Beliebtheit.',
      en: 'The dominant lever is scarcity — and doubly so: limited capacity („only two slots") and a deadline („only until Friday"). Both create pressure to act by narrowing availability, whether artificially or genuinely. The mechanism targets FOMO: hesitate and you lose access. The boundary runs along the truth — if there really are two slots and the deadline genuinely applies, the note is legitimate; if capacity and deadline are invented, it becomes manipulation. Reciprocity would require a favour rendered beforehand (a gift one should return) — absent here. Anchoring would need a comparison or price value stated first to which perception aligns. It would only be social proof if it pointed to the behaviour of many other clients („most firms in your sector book with us") — scarce capacity alone is no evidence of popularity.',
    },
    points: 10,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'sc-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welcher Hebel steckt vor allem hinter dieser Ankündigung?',
      en: 'Which lever is chiefly behind this announcement?',
    },
    scenario: {
      de: 'Eine Kosmetikmarke teilt mit: „Wir stellen diese Pflegeserie ein. Die allerletzte Produktionscharge ist ab heute im Handel — ist sie verkauft, verschwindet die Serie endgültig aus dem Sortiment."',
      en: 'A cosmetics brand states: „We are discontinuing this care line. The very last production batch is in stores from today — once it is sold, the line disappears from our range for good."',
    },
    options: [
      { de: 'Knappheit (Scarcity)', en: 'Scarcity' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der treibende Hebel ist Knappheit durch Einstellung: Eine endliche, nicht wieder auffüllbare Restmenge macht das Produkt allein über seine auslaufende Verfügbarkeit begehrenswerter — „jetzt oder nie". Der Mechanismus nutzt, dass drohender Verlust der Möglichkeit den wahrgenommenen Wert hebt. Die Grenze: Eine echte Einstellung sachlich anzukündigen ist legitim; sie zu behaupten und die Serie später doch stillschweigend fortzuführen wäre manipulativ. Framing ist der verlockendste Fehlgriff, meint aber etwas anderes: dieselbe Tatsache unterschiedlich zu verpacken (Gewinn- vs. Verlust-Wortwahl) — hier ist die Verfügbarkeit jedoch tatsächlich begrenzt, nicht bloß umformuliert. Ein emotionaler Appell würde gezielt Nostalgie oder Angst ansprechen; die Meldung bleibt sachlich. Sozialer Beweis bräuchte einen Verweis auf viele andere Käufer.',
      en: 'The driving lever is scarcity through discontinuation: a finite, non-replenishable remaining quantity makes the product more desirable purely via its expiring availability — „now or never". The mechanism exploits the way an impending loss of opportunity lifts perceived value. The boundary: announcing a genuine discontinuation factually is legitimate; claiming it and then quietly continuing the line anyway would be manipulative. Framing is the most tempting miss but means something else: packaging the same fact differently (gain- vs loss-worded) — here availability is actually limited, not merely reworded. An emotional appeal would deliberately target nostalgia or fear; the statement stays factual. Social proof would need a reference to many other buyers.',
    },
    points: 10,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'sc-p3-5',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Diese Gestaltung wirkt vor allem, weil ___ die wahrgenommene Attraktivität eines Angebots erhöht und Menschen dazu bringt, ihre Entscheidung vorzuziehen.',
      en: 'Complete: this design works mainly because ___ raises the perceived attractiveness of an offer and prompts people to bring their decision forward.',
    },
    scenario: {
      de: 'Ein Onlineshop blendet neben jedem Artikel einen Hinweis wie „Nur noch 2 auf Lager" sowie einen mitlaufenden Countdown bis zum Aktionsende ein.',
      en: 'An online shop displays a note next to each item such as „only 2 left in stock" plus a running countdown to the end of the promotion.',
    },
    options: [
      {
        de: 'eine begrenzte oder ablaufende Verfügbarkeit',
        en: 'a limited or expiring availability',
      },
      {
        de: 'die sichtbare Zustimmung und Nachahmung vieler anderer',
        en: 'the visible approval and imitation of many others',
      },
      {
        de: 'ein zuerst genannter hoher Vergleichswert',
        en: 'a high comparison value mentioned first',
      },
      {
        de: 'eine zuvor gewährte Gefälligkeit, die man erwidern möchte',
        en: 'a previously granted favour one feels obliged to return',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Es passt „eine begrenzte oder ablaufende Verfügbarkeit" — genau das ist der Kern der Verknappung: Bestandsanzeige plus Countdown signalisieren, dass Menge und Zeit knapp sind, und dieses Knappheitssignal hebt den wahrgenommenen Wert und zieht die Entscheidung nach vorn. Die Grenze: echte Bestände und echte Fristen dürfen so gezeigt werden; erfundene Stückzahlen oder sich neu startende Timer sind irreführend. Die anderen Begriffe beschreiben andere Hebel: „sichtbare Zustimmung vieler anderer" ist der soziale Beweis, „ein zuerst genannter hoher Vergleichswert" ist der Ankereffekt, und „eine zuvor gewährte Gefälligkeit" ist Reziprozität — keiner dieser Mechanismen erklärt, warum eine schrumpfende Verfügbarkeit zum sofortigen Handeln drängt.',
      en: 'The fit is „a limited or expiring availability" — precisely the core of scarcity: a stock indicator plus a countdown signal that both quantity and time are running short, and this scarcity signal lifts perceived value and pulls the decision forward. The boundary: real stock levels and real deadlines may be shown this way; invented quantities or resetting timers are misleading. The other terms describe different levers: „the visible approval of many others" is social proof, „a high comparison value mentioned first" is the anchoring effect, and „a previously granted favour" is reciprocity — none of these mechanisms explains why a shrinking availability pushes toward immediate action.',
    },
    points: 10,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'sc-p3-6',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du verantwortest das Marketing für den Launch. Wie entscheidest du?',
      en: 'You are responsible for marketing the launch. How do you decide?',
    },
    scenario: {
      de: 'Für einen Produktlaunch ist die Startauflage tatsächlich knapp: Es gibt nur eine begrenzte Erstcharge. Der Vertrieb schlägt vor, die Conversion zusätzlich mit einem Dauer-Banner „Nur noch 3 verfügbar!" (unabhängig vom echten Bestand) und einem Countdown anzuheizen, der sich bei jedem Seitenaufruf neu startet.',
      en: 'For a product launch the initial stock really is limited: there is only a small first batch. Sales proposes to further boost conversion with a permanent banner „only 3 left!" (regardless of the real stock) and a countdown that resets on every page load.',
    },
    options: [
      {
        de: 'Ich kommuniziere die echte Knappheit transparent — realer Restbestand und ein tatsächlicher Stichtag — und lehne die erfundenen Zähler ab. Fingierte Bestände und sich zurücksetzende Timer sind irreführend, können gegen das UWG und EU-Regeln gegen Dark Patterns verstoßen und zerstören Vertrauen, sobald sie auffliegen. Die echte Verknappung wirkt ohnehin.',
        en: 'I communicate the genuine scarcity transparently — real remaining stock and an actual deadline — and reject the fabricated counters. Fake stock levels and resetting timers are misleading, can breach unfair-competition law and EU rules against dark patterns, and destroy trust once exposed. The real scarcity converts anyway.',
      },
      {
        de: 'Ich übernehme das Dauer-Banner und den sich neu startenden Countdown — Hauptsache, die Conversion steigt.',
        en: 'I adopt the permanent banner and the resetting countdown — all that matters is that conversion goes up.',
      },
      {
        de: 'Ich streiche jeden Hinweis auf Verknappung und Fristen, auch den echten Stichtag, um bloß kein Risiko einzugehen.',
        en: 'I remove every reference to scarcity and deadlines, including the genuine cut-off date, just to avoid any risk.',
      },
      {
        de: 'Ich behalte die echte Frist, verlängere sie aber im Hintergrund stillschweigend immer wieder, damit der Druck dauerhaft bleibt.',
        en: 'I keep the real deadline but quietly keep extending it behind the scenes, so the pressure never lets up.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) trennt Technik und Ethik sauber: Sie nutzt die real vorhandene Knappheit — ein legitimer, wirksamer Hebel — und verzichtet auf die erfundenen Elemente. Das ist auch strategisch klug, denn echte Verknappung konvertiert bereits, während fingierte Zähler bei Auffliegen das Vertrauen und die Marke beschädigen. Option 2 ist genau die manipulative Variante: Ein von echten Beständen entkoppeltes „Nur noch 3" und ein sich zurücksetzender Timer sind klassische Dark Patterns und irreführende geschäftliche Handlungen (UWG-Risiko). Option 4 ist ebenso unlauter — eine „echte" Frist, die heimlich immer wieder verlängert wird, ist eine fingierte Deadline. Option 3 überkorrigiert: Sie verschenkt einen völlig legitimen, wahrheitsgemäßen Hinweis aus übertriebener Vorsicht. Die Grenze: wahre Knappheit transparent nennen ja, Knappheit erfinden oder vortäuschen nein.',
      en: 'Only option 1 (index 0) cleanly separates technique from ethics: it uses the genuinely present scarcity — a legitimate, effective lever — and drops the fabricated elements. It is also strategically wise, because real scarcity already converts, while fake counters damage trust and brand once exposed. Option 2 is exactly the manipulative version: a „only 3 left" decoupled from real stock and a resetting timer are classic dark patterns and misleading commercial practices (unfair-competition risk). Option 4 is equally improper — a „real" deadline secretly extended again and again is a fabricated deadline. Option 3 over-corrects: out of excessive caution it forfeits a perfectly legitimate, truthful cue. The boundary: naming true scarcity transparently, yes; inventing or faking scarcity, no.',
    },
    points: 15,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity', 'dark_patterns'],
  },
  {
    id: 'sc-p3-7',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist der dominante Treiber der sofortigen Bestellwelle zum Launch-Zeitpunkt?',
      en: 'Which technique is the dominant driver of the immediate ordering surge at the launch moment?',
    },
    scenario: {
      de: 'Ein D2C-Startup launcht eine „Founder\'s Edition". Die Landingpage nennt eine bekannte Ernährungsmedizinerin, die das Produkt fachlich empfiehlt. Ein Zähler zeigt „über 40.000 Mitglieder in der Community". Die Edition ist auf 200 Exemplare gedeckelt, und die Warteliste schließt exakt zum Launch-Zeitpunkt — wer dann nicht zugreift, kommt frühestens in einer unbestimmten zweiten Runde zum Zug. In den ersten Minuten nach dem Launch schnellt die Zahl der Sofort-Bestellungen steil nach oben.',
      en: 'A D2C startup launches a „Founder\'s Edition". The landing page names a well-known nutrition physician who professionally endorses the product. A counter shows „over 40,000 members in the community". The edition is capped at 200 units, and the waitlist closes exactly at the launch moment — whoever does not act then gets a chance only in an indefinite second round at best. In the first minutes after launch, immediate orders spike steeply.',
    },
    options: [
      {
        de: 'Knappheit — die auf 200 Stück gedeckelte Auflage und die zum Launch schließende Warteliste erzeugen die Frist, die aus latentem Interesse eine sofortige Entscheidung macht.',
        en: 'Scarcity — the run capped at 200 units and the waitlist closing at launch create the deadline that turns latent interest into an immediate decision.',
      },
      {
        de: 'Sozialer Beweis — die „über 40.000 Mitglieder" zeigen, dass viele andere bereits dabei sind, und ziehen Unentschlossene mit.',
        en: 'Social proof — the „over 40,000 members" show that many others are already on board and pull the undecided along.',
      },
      {
        de: 'Autoritätsargument — die empfehlende Ernährungsmedizinerin verleiht dem Produkt fachliche Glaubwürdigkeit.',
        en: 'Appeal to authority — the endorsing nutrition physician lends the product professional credibility.',
      },
      {
        de: 'Ankern — die Zahl 40.000 setzt einen hohen Bezugswert, an dem die Wahrnehmung des Angebots ausgerichtet wird.',
        en: 'Anchoring — the figure 40,000 sets a high reference value against which perception of the offer is aligned.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Drei Hebel sind gleichzeitig am Werk, aber sie tun Unterschiedliches. Sozialer Beweis („40.000 Mitglieder") und das Autoritätsargument (die Medizinerin) steigern Begehrlichkeit und Glaubwürdigkeit — sie machen das Produkt attraktiver, setzen aber keine Uhr. Was das latente Interesse in Minuten in tatsächliche Sofort-Bestellungen umschlagen lässt, ist die Knappheit: 200 gedeckelte Exemplare plus eine exakt zum Launch schließende Warteliste erzeugen eine harte Frist mit Verlust-Drohung („sonst frühestens irgendwann"). Genau diese Zeit- und Mengenverengung ist der dominante Treiber der Bestellwelle. Ankern ist der schwächste Deutungsversuch und zudem falsch etikettiert: Die 40.000 ist eine Reichweiten-/Mitgliederzahl (sozialer Beweis), kein Preis- oder Vergleichsanker, an dem eine Bewertung kalibriert würde. Die Grenze: Eine echte Deckelung und ein echter Stichtag sind ein legitimer Hebel; wären die 200 erfunden oder würde die „geschlossene" Warteliste heimlich wieder geöffnet, wäre es Manipulation.',
      en: 'Three levers operate at once, but they do different things. Social proof („40,000 members") and the appeal to authority (the physician) raise desirability and credibility — they make the product more attractive but set no clock. What flips latent interest into actual immediate orders within minutes is scarcity: 200 capped units plus a waitlist closing exactly at launch create a hard deadline carrying a loss threat („otherwise not until some indefinite later"). Precisely this narrowing of time and quantity is the dominant driver of the ordering surge. Anchoring is the weakest reading and mislabelled to boot: the 40,000 is a reach/membership figure (social proof), not a price or comparison anchor against which a valuation is calibrated. The boundary: a genuine cap and a genuine cut-off date are a legitimate lever; were the 200 invented or the „closed" waitlist quietly reopened, it would be manipulation.',
    },
    points: 20,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity', 'social_proof', 'authority', 'anchoring'],
  },
];
