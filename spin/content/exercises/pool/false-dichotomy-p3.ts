import type { Exercise } from '../../types';

// false_dichotomy — Phase 3 densification batch.
export const falseDichotomyP3Exercises: Exercise[] = [
  {
    id: 'fd-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken hier zusammen. Welche ist der dominante Treiber der Argumentation?',
      en: 'Several techniques work together here. Which one is the dominant driver of the argument?',
    },
    scenario: {
      de: 'In der Budget-Versammlung sagt der CFO: „Lassen Sie uns pragmatisch sein. Wir kürzen das Marketingbudget um 40 Prozent und retten die Marge — oder wir sehen zu, wie das Unternehmen in die roten Zahlen rutscht. So einfach ist die Lage. Und wer Ihnen einen bequemen Mittelweg verspricht, hat die Zahlen schlicht nicht verstanden."',
      en: 'At the budget meeting, the CFO says: “Let us be pragmatic. We cut the marketing budget by 40 percent and save the margin — or we watch the company slide into the red. It is that simple. And anyone who promises you a comfortable middle path simply has not understood the numbers.”',
    },
    options: [
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Ad Hominem', en: 'Ad hominem' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominant ist die Falsche Dichotomie: Die gesamte Beweislast ruht darauf, ein ganzes Spektrum realer Handlungsoptionen — Teilkürzungen, Umschichtungen, zeitlich gestaffelte Maßnahmen — auf genau zwei sich ausschließende Extreme zu verengen: kürzen oder Untergang. Der Hebel wirkt, weil ein erzwungenes Entweder-oder die kognitive Last senkt und die unbequeme Suche nach dem Mittelweg abschneidet. Die 40-Prozent-Zahl ist zwar ein Ankerwert (Anchoring), aber nur ein Detail innerhalb von Option A — sie trägt das Argument nicht. Der Satz „wer einen Mittelweg verspricht, hat die Zahlen nicht verstanden" ist ein Ad Hominem, das die Dichotomie absichert, indem es Andersdenkende vorab abwertet — ein Stützpfeiler, nicht der Treiber. Framing ist in nahezu jeder Botschaft präsent und daher zu unspezifisch, um die Antwort zu sein. Die Grenze: Zwei Szenarien zur Zuspitzung zu skizzieren ist legitime Rhetorik — manipulativ wird es, sobald die realen Zwischenwege aktiv für nicht existent erklärt werden.',
      en: 'The dominant lever is the false dichotomy: the entire burden of the argument rests on narrowing a whole spectrum of real options — partial cuts, reallocations, phased measures — down to exactly two mutually exclusive extremes: cut or collapse. It works because a forced either/or lowers cognitive load and cuts off the uncomfortable search for a middle path. The 40-percent figure is indeed an anchor value (anchoring), but only a detail inside option A — it does not carry the argument. The line “anyone who promises a middle path has not understood the numbers” is an ad hominem that protects the dichotomy by pre-emptively devaluing dissenters — a supporting pillar, not the driver. Framing is present in almost every message and therefore too unspecific to be the answer. The boundary: sketching two scenarios to sharpen a point is legitimate rhetoric — it turns manipulative once the real intermediate paths are actively declared non-existent.',
    },
    points: 20,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy', 'anchoring', 'ad_hominem'],
  },
  {
    id: 'fd-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter dieser Aussage?',
      en: 'Which technique is behind this statement?',
    },
    scenario: {
      de: 'Ein Teamleiter schreibt im Team-Chat zur neuen Projektsoftware: „Leute, hier gibt es nur zwei Sorten von Kolleginnen und Kollegen — die, die voll mitziehen, und die, die den Fortschritt für alle blockieren. Sucht euch eine Seite aus."',
      en: 'A team lead writes in the team chat about the new project software: “Folks, there are only two kinds of colleagues here — those who fully pull their weight, and those who block progress for everyone. Pick a side.”',
    },
    options: [
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Verknappung', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klarer Fall einer Falschen Dichotomie: „nur zwei Sorten" presst ein Spektrum von Haltungen — Skepsis, Teilzustimmung, Verbesserungsvorschläge — in ein Entweder-oder aus Mitziehen oder Blockieren. Der Hebel: Wer eine dritte Position hätte, wird rhetorisch ins „Blockierer"-Lager gedrängt. Legitim wäre, offen für die Einführung zu werben; manipulativ ist, jede Zwischenhaltung als Sabotage umzudeuten. Reziprozität (Geben und Gegenleistung), Sozialer Beweis (Verweis auf die Mehrheit) und Verknappung (begrenzte Verfügbarkeit) kommen im Text schlicht nicht vor.',
      en: 'A clear case of a false dichotomy: “only two kinds” presses a spectrum of stances — scepticism, partial agreement, suggestions for improvement — into an either/or of pulling your weight or blocking. The lever: anyone holding a third position is rhetorically pushed into the “blocker” camp. It would be legitimate to advocate openly for the rollout; it is manipulative to recast every intermediate stance as sabotage. Reciprocity (give and return), social proof (pointing to the majority) and scarcity (limited availability) simply do not appear in the text.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'fd-p3-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diesen Werbeauftritt vor allem?',
      en: 'Which technique primarily shapes this ad?',
    },
    scenario: {
      de: 'Eine Kaffeemarke plakatiert: „Beim Kaffee gibt es nur zwei Typen von Menschen — die, die in echten Genuss investieren, und die, die sich mit lauwarmem Kompromiss abfinden. Zu welchen gehörst du?"',
      en: 'A coffee brand runs a billboard: “When it comes to coffee, there are only two types of people — those who invest in real enjoyment, and those who settle for a lukewarm compromise. Which are you?”',
    },
    options: [
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der tragende Hebel ist die Falsche Dichotomie: „nur zwei Typen von Menschen" teilt eine Käuferschaft mit vielen Vorlieben und Budgets künstlich in zwei sich ausschließende Lager und zwingt zur Selbsteinordnung. Verlockend ist Framing als Antwort — tatsächlich ist die Wortwahl („echter Genuss" gegen „lauwarmer Kompromiss") positiv/negativ gerahmt. Doch Framing beschreibt, WIE ein und dieselbe Option dargestellt wird; hier ist der Kern, dass überhaupt nur zwei Optionen zugelassen werden und der Mittelweg — guter Alltagskaffee, gelegentlicher Genuss — getilgt wird. Diese Verengung des Optionsraums ist die Falsche Dichotomie; das Framing ist nur ihre sprachliche Verpackung. Sozialer Beweis („die Mehrheit trinkt...") und Sympathie (ein sympathischer Testimonial-Träger) fehlen. Grenze: zuspitzende Markenrhetorik ist erlaubt — irreführend wird sie, wenn reale Zwischenoptionen als nicht existent suggeriert werden.',
      en: 'The load-bearing lever is the false dichotomy: “only two types of people” artificially splits a buyer base with many preferences and budgets into two mutually exclusive camps and forces self-classification. Framing is the tempting answer — indeed the wording (“real enjoyment” versus “lukewarm compromise”) is positively/negatively framed. But framing describes HOW one and the same option is presented; here the core is that only two options are admitted at all and the middle path — good everyday coffee, occasional indulgence — is erased. This narrowing of the option space is the false dichotomy; the framing is merely its verbal wrapping. Social proof (“most people drink...”) and liking (a likeable testimonial figure) are absent. The boundary: pointed brand rhetoric is allowed — it becomes misleading when real intermediate options are implied to be non-existent.',
    },
    points: 10,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy', 'framing'],
  },
  {
    id: 'fd-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt diese Beraterempfehlung vor allem?',
      en: 'Which technique primarily carries this consultant recommendation?',
    },
    scenario: {
      de: 'Ein Digitalberater sagt vor dem Vorstand: „Meine Damen und Herren, die Lage ist eindeutig: Entweder Sie digitalisieren das gesamte Geschäft jetzt vollständig — oder Sie akzeptieren, dass Ihr Unternehmen in fünf Jahren vom Markt verschwindet. Dazwischen liegt nichts."',
      en: 'A digital consultant tells the board: “Ladies and gentlemen, the situation is clear: either you digitalise the entire business fully now — or you accept that your company will vanish from the market in five years. There is nothing in between.”',
    },
    options: [
      { de: 'Falsche Dichotomie', en: 'False dichotomy' },
      { de: 'Strohmann (Straw Man)', en: 'Straw man' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Anchoring', en: 'Anchoring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Kern ist eine Falsche Dichotomie: „Dazwischen liegt nichts" streicht ausdrücklich jede Stufe zwischen Vollständig-jetzt und Untergang — Pilotprojekte, schrittweise Migration, Teil-Digitalisierung. Strohmann ist der naheliegende Fehlgriff, doch dafür müsste der Berater die Position eines Gegenübers verzerrt wiedergeben und diese Zerrform angreifen — hier gibt es kein solches verdrehtes Gegenargument, nur einen künstlich auf zwei Pole reduzierten Optionsraum. Verknappung würde eine begrenzte Verfügbarkeit oder Frist inszenieren („nur bis Freitag"); Anchoring würde einen Zahlen-Ankerwert setzen — die „fünf Jahre" sind hier bloß eine Konsequenzschätzung, kein Verhandlungsanker. Grenze: Dringlichkeit und klare Empfehlungen sind legitim; manipulativ wird es, wenn der reale Korridor an Zwischenlösungen aktiv für nicht existent erklärt wird.',
      en: 'The core is a false dichotomy: “there is nothing in between” explicitly deletes every step between fully-now and collapse — pilot projects, phased migration, partial digitalisation. Straw man is the obvious misfire, but that would require the consultant to restate an opponent’s position in distorted form and attack that distortion — here there is no such twisted counter-argument, only an option space artificially reduced to two poles. Scarcity would stage limited availability or a deadline (“only until Friday”); anchoring would set a numeric anchor value — the “five years” here is merely a consequence estimate, not a negotiation anchor. The boundary: urgency and clear recommendations are legitimate; it becomes manipulative when the real corridor of intermediate solutions is actively declared non-existent.',
    },
    points: 10,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy', 'straw_man'],
  },
  {
    id: 'fd-p3-5',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze die Analyse: Der Satz funktioniert als Falsche Dichotomie, weil er ___.',
      en: 'Complete the analysis: The line works as a false dichotomy because it ___.',
    },
    scenario: {
      de: 'In der internen Kommunikation zur Umstrukturierung fällt der Satz: „Sie sind entweder mit uns — oder Sie stellen sich gegen den notwendigen Wandel."',
      en: 'In the internal communication about the restructuring, this line drops: “You are either with us — or you are standing against the necessary change.”',
    },
    options: [
      {
        de: 'ein ganzes Spektrum möglicher Haltungen künstlich auf zwei sich ausschließende Lager reduziert',
        en: 'artificially reduces a whole spectrum of possible stances to two mutually exclusive camps',
      },
      {
        de: 'die tatsächliche Aussage der Gegenseite verzerrt und dann diese Zerrform angreift',
        en: 'distorts the other side’s actual statement and then attacks that distortion',
      },
      {
        de: 'einen willkürlichen Startwert vorgibt, an dem sich alle folgenden Urteile ausrichten',
        en: 'sets an arbitrary starting value against which all subsequent judgments align',
      },
      {
        de: 'auf die vermeintliche Mehrheit verweist, um Anpassungsdruck zu erzeugen',
        en: 'points to the supposed majority to create pressure to conform',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Beschreibung 1 (Index 0) trifft den Mechanismus der Falschen Dichotomie: Der Satz presst alle denkbaren Positionen — Zustimmung mit Vorbehalt, konstruktive Kritik, Verbesserungsvorschläge — in genau zwei feindliche Lager („mit uns" oder „gegen den Wandel") und tilgt jeden Mittelweg. Der Hebel senkt die kognitive Last und macht Widerspruch sozial teuer. Beschreibung 2 beschreibt den Strohmann (Verzerren und Angreifen einer Position), Beschreibung 3 das Anchoring (ein Ankerwert als Referenzpunkt), Beschreibung 4 den Sozialen Beweis (Mehrheitsdruck) — allesamt andere Mechanismen, die hier nicht wirken. Grenze: klar für einen Kurs zu werben ist legitim; den Optionsraum künstlich auf zwei Pole zu verengen, um Zustimmung zu erzwingen, überschreitet sie.',
      en: 'Only description 1 (index 0) captures the mechanism of the false dichotomy: the line presses every conceivable position — qualified agreement, constructive criticism, suggestions for improvement — into exactly two hostile camps (“with us” or “against the change”) and deletes any middle path. The lever lowers cognitive load and makes dissent socially costly. Description 2 describes the straw man (distorting and attacking a position), description 3 anchoring (an anchor value as a reference point), description 4 social proof (majority pressure) — all different mechanisms that do not operate here. The boundary: advocating clearly for a course is legitimate; artificially narrowing the option space to two poles in order to force agreement crosses it.',
    },
    points: 10,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'fd-p3-6',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie berätst du den Kunden zu diesem Kampagnen-Claim?',
      en: 'How do you advise the client on this campaign claim?',
    },
    scenario: {
      de: 'Eure Agentur entwickelt eine Kampagne für das Premium-Abo eines Streaming-Kunden. Der Kreativchef schlägt als Headline vor: „Entweder du gönnst dir das Beste — oder du gibst dich mit Mittelmaß zufrieden." In Fokusgruppen konvertiert der Claim stark. Dir fällt auf: Er blendet das komplette mittlere Angebotssegment und alle Wettbewerber aus.',
      en: 'Your agency is developing a campaign for a streaming client’s premium plan. The creative director proposes the headline: “Either you treat yourself to the best — or you settle for mediocrity.” In focus groups the claim converts strongly. You notice: it erases the entire mid-tier segment and every competitor.',
    },
    options: [
      {
        de: 'Ich weise auf die Falsche Dichotomie hin: Der erzwungene Entweder-oder-Claim hebt kurzfristig die Conversion, weckt aber eine falsche Erwartung und provoziert Reaktanz und Rückschlag, sobald Kundinnen den ausgeblendeten Mittelweg bemerken. Ich schlage eine ehrliche, aspirationale Alternative vor, die das Premium-Abo attraktiv positioniert, ohne reale Optionen wegzudefinieren.',
        en: 'I flag the false dichotomy: the forced either/or claim lifts conversion short-term but sets a false expectation and provokes reactance and backlash once customers notice the excluded middle. I propose an honest, aspirational alternative that positions the premium plan attractively without defining away real options.',
      },
      {
        de: 'Ich gebe den Claim unverändert frei — er konvertiert, und das zählt.',
        en: 'I release the claim unchanged — it converts, and that is what counts.',
      },
      {
        de: 'Ich streiche jede aspirationale Positionierung und lasse nur nüchterne Faktenaussagen zu.',
        en: 'I strip out any aspirational positioning and allow only sober factual statements.',
      },
      {
        de: 'Ich schärfe die Zuspitzung noch und ergänze „Einen Mittelweg gibt es nicht."',
        en: 'I sharpen the framing further and add “There is no middle ground.”',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) trennt die legitime Technik sauber von der manipulativen: Aspirationale Premium-Positionierung ist erlaubtes Handwerk — das Problem ist allein die Falsche Dichotomie, die den Optionsraum auf „das Beste oder Mittelmaß" verengt. Entscheidend ist der Effekt zweiter Ordnung: Ein erzwungenes Entweder-oder erzeugt Reaktanz (Menschen wehren sich gegen eine offensichtliche Beschneidung ihrer Wahl) und schlägt zurück, sobald der ausgeblendete Mittelweg sichtbar wird — dazu drohen bei Werbung Fragen der Irreführung. Option 2 ignoriert Ethik und Rückschlagrisiko zugunsten der kurzfristigen Zahl. Option 3 ist eine Überkorrektur: Sie wirft mit der Aspiration auch ein legitimes Mittel weg und verschenkt Wirkung, ohne dass es nötig wäre; Option 1 behält den legitimen Hebel und entfernt nur die manipulative Verengung. Option 4 verschärft die Manipulation und maximiert das Risiko. Grenze: Premium darf man begehrenswert erzählen — man darf reale Alternativen nur nicht für nicht existent erklären.',
      en: 'Only option 1 (index 0) cleanly separates the legitimate technique from the manipulative one: aspirational premium positioning is allowed craft — the problem is solely the false dichotomy that narrows the option space to “the best or mediocrity”. The decisive point is the second-order effect: a forced either/or produces reactance (people resist an obvious curtailment of their choice) and backfires once the excluded middle becomes visible — and in advertising it invites questions of misleading claims. Option 2 ignores ethics and backlash risk in favour of the short-term number. Option 3 is an over-correction: it throws out a legitimate tool along with the aspiration and forfeits impact needlessly; option 1 keeps the legitimate lever and removes only the manipulative narrowing. Option 4 sharpens the manipulation and maximises the risk. The boundary: you may tell a desirable premium story — you just may not declare real alternatives non-existent.',
    },
    points: 15,
    primaryTechniqueId: 'false_dichotomy',
    relatedTechniques: ['false_dichotomy', 'reactance_theory'],
  },
];
