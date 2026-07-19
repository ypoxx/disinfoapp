// Welle 5c: 3 Übungen für overton_window_shifting (Verschieben des Overton-Fensters).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'frontier' (schwache Evidenz) → als Begriffswissen prüfen, keine
// belegten Wirkbehauptungen; Übung 3 prüft explizit den Begriff. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cOvertonWindowShifting: Exercise[] = [
  {
    id: 'wave5c-overton_window_shifting-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster beschreibt das Vorgehen des Verbandssprechers?',
      en: 'Which pattern describes the association spokesperson\'s approach?',
    },
    scenario: {
      de: 'Public-Affairs-Programm eines Industrieverbands über zwölf Monate: Der Verbandssprecher lässt die früher als extrem abgetane Forderung, eine geltende Umweltauflage vollständig zu streichen, in einer Serie von Gastbeiträgen, Studien-Kurzfassungen und Hintergrundrunden mit politischen Redaktionen immer wieder auftauchen — erst als Provokation am Rand, dann prominenter —, bis die Forderung in Talkrunden als seriöse Position mitverhandelt wird, die ein Jahr zuvor niemand ausgesprochen hätte.',
      en: 'A twelve-month public-affairs programme by an industry association: the spokesperson keeps floating the once-dismissed-as-extreme demand to abolish an existing environmental rule — through a run of op-eds, study briefs and background rounds with political desks, first as a fringe provocation, then more prominently — until the demand is treated in panel debates as a serious position that no one would have voiced a year earlier.',
    },
    options: [
      { de: 'Verschieben des Overton-Fensters', en: 'Shifting the Overton window' },
      { de: 'Door in the Face (Tür-ins-Gesicht)', en: 'Door in the face' },
      { de: 'Ankereffekt', en: 'Anchoring effect' },
      { de: 'Slippery Slope (Dammbruch-Argument)', en: 'Slippery slope' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verschieben des Overton-Fensters: Der Begriff beschreibt, wie sich der Bereich des öffentlich Sagbaren über die Zeit verschiebt — eine einst tabuisierte Forderung wird wiederholt und in immer neuen Formaten platziert, bis sie als diskutabel gilt. Das erkennst du hier am Verlauf: dieselbe Extremforderung, über zwölf Monate gestaffelt, vom Rand in die seriöse Debatte. Der Begriff ist ein Beschreibungsraster (Think-Tank-Konzept, empirisch schwach belegt), keine garantiert wirksame Technik — die Kontrolle über den Effekt einer einzelnen Kampagne ist spekulativ. Legitim ist es, den Raum des Diskutierbaren offen zu erweitern: eine kühne Position klar als eigenen Vorschlag markieren und zur Debatte stellen — statt sie verdeckt und schrittweise zur Norm zu machen. Kontern: Frag, ob eine Forderung an ihrer Sache oder nur durch Wiederholung und Gewöhnung „normal" geworden ist. Door in the Face wäre ein einzelner überzogener Erst-Vorschlag, auf dessen Ablehnung sofort ein moderaterer folgt, damit dieser als Zugeständnis durchgeht — hier gibt es kein solches Nachgeben, sondern eine anhaltende Verschiebung des ganzen Debattenrahmens. Der Ankereffekt wäre ein einzelner Startwert (meist eine Zahl), der eine Einschätzung verzerrt; hier geht es nicht um einen Anker in einer Einschätzung, sondern um das über Monate verschobene Sagbarkeitsfenster. Slippery Slope wäre das Argument, ein kleiner Schritt führe zwangsläufig zum Extrem — hier wird nicht argumentiert, sondern die Extremposition selbst schrittweise normalisiert.',
      en: 'Shifting the Overton window: the term describes how the range of what is publicly sayable moves over time — a once-taboo demand is placed repeatedly and across ever-new formats until it counts as debatable. You spot it here in the arc: the same extreme demand, staggered over twelve months, from the fringe into serious debate. The term is a descriptive lens (a think-tank concept, weakly evidenced), not a guaranteed technique — control over the effect of any single campaign is speculative. Legitimately, you can widen the space of the discussable openly: mark a bold position clearly as your own proposal and put it up for debate — rather than normalising it covertly and by degrees. To counter it: ask whether a demand became "normal" on its merits or merely through repetition and habituation. Door in the face would be a single inflated first ask whose rejection is immediately followed by a more moderate one so the latter reads as a concession — here there is no such retreat, but a sustained shift of the whole debate frame. The anchoring effect would be a single starting value (usually a number) that skews an estimate; this is not an anchor within an estimate but a sayability window moved over months. Slippery slope would be the argument that a small step inevitably leads to the extreme — here nothing is argued; the extreme position itself is normalised step by step.',
    },
    points: 10,
    primaryTechniqueId: 'overton_window_shifting',
    relatedTechniques: ['overton_window_shifting', 'door_in_the_face', 'anchoring', 'slippery_slope'],
  },
  {
    id: 'wave5c-overton_window_shifting-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Verbands. Ein Vorstandsmitglied schlägt vor, eine bislang chancenlose Maximalforderung über Monate hinweg gestaffelt in Gastbeiträgen, Panels und Social Posts zu streuen — erst als Tabubruch, dann immer beiläufiger —, damit sie am Ende als normale Verhandlungsposition gilt. Wie gehst du damit um?',
      en: 'You lead communications for an association. A board member proposes drip-placing a currently hopeless maximal demand over months across op-eds, panels and social posts — first as a taboo-break, then ever more casually — so that it eventually counts as a normal negotiating position. How do you handle it?',
    },
    options: [
      {
        de: 'Ich mache den Mechanismus im Vorstand transparent: Wir können eine kühne Position offen zur Debatte stellen und klar als unseren Vorschlag kennzeichnen — aber ich lehne das verdeckte, schrittweise Normalisieren ab, das die Herkunft verschleiert. Zugleich sensibilisiere ich das Team, dieselbe Taktik bei Gegenspielern zu erkennen, wenn eine einst undenkbare Forderung plötzlich überall beiläufig auftaucht.',
        en: 'I make the mechanism transparent to the board: we can put a bold position openly up for debate and label it clearly as our proposal — but I reject the covert, step-by-step normalising that hides its origin. At the same time I brief the team to recognise the same tactic in opponents, when a once-unthinkable demand suddenly turns up casually everywhere.',
      },
      {
        de: 'Ich setze die Kampagne wie vorgeschlagen um — je öfter und beiläufiger die Forderung auftaucht, desto selbstverständlicher wird sie; dass sich das Sagbare so zuverlässig verschieben lässt, ist erprobte Kommunikationsroutine.',
        en: 'I run the campaign as proposed — the more often and more casually the demand appears, the more self-evident it becomes; that the sayable can be shifted this reliably is proven communications routine.',
      },
      {
        de: 'Ich lehne alles ab und rate, die Forderung nirgends öffentlich zu erwähnen — schon jede einzelne Nennung verschiebt automatisch das Sagbare und schadet uns.',
        en: 'I reject the whole thing and advise never mentioning the demand publicly at all — even a single mention automatically shifts the sayable and hurts us.',
      },
      {
        de: 'Ich baue die Forderung in ein Dammbruch-Argument um: Ich warne öffentlich, ein kleiner Kompromiss der Gegenseite führe zwangsläufig zur Maximalvariante — das wirkt seriöser als beiläufiges Wiederholen.',
        en: 'I recast the demand as a slippery-slope argument: I warn publicly that a small compromise by the other side inevitably leads to the maximal version — that reads as more serious than casual repetition.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster ist das Verschieben des Overton-Fensters: eine einst undenkbare Forderung durch gestaffelte, verdeckte Wiederholung zur diskutablen Norm machen. Die beste Option trennt sauber zwischen legitim und manipulativ: Eine kühne Position offen und als eigenen Vorschlag zur Debatte stellen ist zulässig — das heimliche, schrittweise Normalisieren, das die Herkunft verschleiert, ist es nicht. Zugleich rüstet sie das Team fürs Erkennen: Du siehst das Muster, wenn eine früher tabuisierte Forderung plötzlich in vielen Kanälen beiläufig auftaucht. Option 2 ist der Frontier-Overclaim: Der Begriff ist ein einflussreiches Ordnungskonzept, aber empirisch schwach belegt — dass sich das Sagbare durch eine Kampagne „zuverlässig" steuern lässt, ist gerade nicht erwiesen; wer so plant, verwechselt ein Beschreibungsraster mit einer garantierten Wirktechnik. Option 3 klingt vorsichtig, überzeichnet aber die Wirkung in die Gegenrichtung: Eine einzelne sachliche Nennung verschiebt nichts „automatisch"; totale Vermeidung überlässt anderen das Feld. Option 4 wechselt bloß die Technik: Das Dammbruch-Argument (Slippery Slope) behauptet eine zwangsläufige Eskalation und ist ein eigener, gut erkennbarer Fehlschluss — es entschärft die Overton-Dynamik nicht, sondern ersetzt sie durch eine andere fragwürdige Figur.',
      en: 'The pattern is shifting the Overton window: turning a once-unthinkable demand into a debatable norm through staggered, covert repetition. The best option draws a clean line between legitimate and manipulative: putting a bold position openly up for debate as your own proposal is fair — the secret, step-by-step normalising that hides its origin is not. It also equips the team to spot it: you see the pattern when a formerly taboo demand suddenly turns up casually across many channels. Option 2 is the frontier overclaim: the term is an influential organising concept but weakly evidenced — that a campaign can "reliably" steer the sayable is precisely not established; planning on that mistakes a descriptive lens for a guaranteed technique. Option 3 sounds cautious but overstates the effect the other way: a single factual mention shifts nothing "automatically", and total avoidance cedes the field to others. Option 4 merely swaps techniques: the slippery-slope argument asserts inevitable escalation and is its own, recognisable fallacy — it does not defuse the Overton dynamic but replaces it with another questionable move.',
    },
    points: 10,
    primaryTechniqueId: 'overton_window_shifting',
    relatedTechniques: ['overton_window_shifting', 'slippery_slope'],
  },
  {
    id: 'wave5c-overton_window_shifting-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Interne Führungskommunikation eines Konzerns über zwei Quartale: In einer Reihe von Townhalls und Intranet-Memos bringt die CEO die zuvor als undenkbar geltende Verlagerung des Stammwerks zunächst als reines Gedankenspiel ins Gespräch, dann als „eines von mehreren Szenarien", schließlich als normalen Tagesordnungspunkt — bis die Belegschaft die Verlagerung als diskutable Option behandelt, die zwölf Monate zuvor als Tabu galt.',
      en: 'Internal leadership communication at a corporation over two quarters: through a series of town halls and intranet memos, the CEO introduces the previously unthinkable relocation of the main plant first as a pure thought experiment, then as "one of several scenarios", finally as a routine agenda item — until the workforce treats the relocation as a debatable option that was taboo twelve months earlier.',
    },
    options: [
      { de: 'Verschieben des Overton-Fensters', en: 'Shifting the Overton window' },
      { de: 'Door in the Face (Tür-ins-Gesicht)', en: 'Door in the face' },
      { de: 'Ankereffekt', en: 'Anchoring effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verschieben des Overton-Fensters: Der Begriff benennt genau diesen Verlauf — eine anfangs undenkbare Position wird über die Zeit wiederholt platziert (Gedankenspiel → „ein Szenario" → normaler Tagesordnungspunkt), bis sie als sagbar und diskutabel gilt. Merkmal ist die schrittweise Verschiebung des Akzeptablen durch anhaltende Exposition, nicht ein einzelnes Argument oder Angebot. Der Begriff stammt aus der Think-Tank-Welt und ist empirisch schwach belegt: Er beschreibt ein beobachtbares Muster, verspricht aber keine steuerbare Wirkung. Erkennen: Achte darauf, wenn dieselbe früher tabuisierte Option in Serie und immer beiläufiger auftaucht, bis niemand mehr das „ob" hinterfragt. Door in the Face wäre ein einzelner überzogener Erst-Vorschlag, gefolgt von einem sofort moderateren, der als Zugeständnis wirken soll — hier gibt es kein solches Nachgeben. Der Ankereffekt wäre ein einzelner Startwert, der eine konkrete Einschätzung verzerrt; hier verschiebt sich über zwei Quartale der Rahmen des Sagbaren, nicht eine einzelne Zahl oder Schätzung.',
      en: 'Shifting the Overton window: the term names exactly this arc — an initially unthinkable position is placed repeatedly over time (thought experiment → "a scenario" → routine agenda item) until it counts as sayable and debatable. The hallmark is the gradual shift of the acceptable through sustained exposure, not a single argument or offer. The term comes from the think-tank world and is weakly evidenced: it describes an observable pattern but promises no steerable effect. To spot it: watch for the same formerly taboo option appearing in series and ever more casually, until no one questions the "whether" any more. Door in the face would be a single inflated first offer followed by an immediately more moderate one meant to read as a concession — here there is no such retreat. The anchoring effect would be a single starting value skewing a specific estimate; here it is the frame of the sayable that shifts over two quarters, not a single number or estimate.',
    },
    points: 10,
    primaryTechniqueId: 'overton_window_shifting',
    relatedTechniques: ['overton_window_shifting', 'door_in_the_face', 'anchoring'],
  },
];
