// Welle 5c: 3 Übungen für firehose_of_falsehood
// (Firehose of Falsehood / systematische, mehrkanalige Desinformationsflutung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cFirehoseOfFalsehood: Exercise[] = [
  {
    id: 'wave5c-firehose_of_falsehood-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Krisen-Monitoring nach einem Störfall in einem Werk: Als Monitoring-Leiterin einer Kommunikationsagentur siehst du binnen Stunden ein Dutzend einander offen widersprechender Versionen gleichzeitig über Fringe-Blogs, Messenger-Kanäle, Kurzvideo-Plattformen und Repost-„Nachrichtenseiten" laufen — Sabotage, ein inszenierter Wettbewerber-Angriff, „gar nichts passiert", eine vertuschte Havarie, ein Angriff aus dem Ausland. Die Versionen heben sich gegenseitig auf, das Tempo lässt keine Richtigstellung durch, und am Ende weiß niemand mehr, was tatsächlich geschah.',
      en: 'Crisis monitoring after an incident at a plant: as the monitoring lead at a communications agency you watch, within hours, a dozen openly contradictory versions run simultaneously across fringe blogs, messenger channels, short-video platforms and repost "news" sites — sabotage, a staged competitor attack, "nothing happened at all", a covered-up accident, a foreign attack. The versions cancel each other out, the pace lets no correction through, and in the end nobody can tell what actually happened.',
    },
    options: [
      { de: 'Firehose of Falsehood', en: 'Firehose of Falsehood' },
      { de: 'Gish Gallop (Behauptungsflut einer Person in einer Wortmeldung)', en: 'Gish gallop (one speaker rattling off claims in a single turn)' },
      { de: 'Coordinated Inauthentic Amplification (synchron dieselbe Botschaft für Schein-Konsens)', en: 'Coordinated inauthentic amplification (the same message in sync to fake consensus)' },
      { de: 'Conspiracy Theory Narratives (geschlossene alternative Gegenerzählung)', en: 'Conspiracy theory narratives (a self-contained alternative counter-story)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Firehose of Falsehood: Über viele Kanäle gleichzeitig, in hohem Tempo und bewusst widersprüchlich wird eine Masse einander widersprechender Versionen ausgespielt — nicht um eine bestimmte Behauptung zu beweisen, sondern um zu überfordern, jede Richtigstellung abzuhängen und den Eindruck zu erzeugen, gesicherte Wahrheit sei nicht mehr feststellbar. Der Mechanismus wirkt, weil unsere Prüfkapazität begrenzt ist: Widerlegen kostet ungleich mehr Zeit als Behaupten, und bei Überlastung durch Tempo und Menge greifen wir eher zu „man weiß es nicht" als zur Prüfung. Was daran legitim wäre: konsistente Mehrkanal-Kommunikation, die eine verifizierte Kernbotschaft über viele Kanäle trägt — zur Manipulation wird es erst durch die bewusst widersprüchliche Masse aus Falschversionen mit dem Ziel, Wahrheit unauffindbar zu machen. Daran erkennst du es, und so konterst du: Achte auf viele, einander offen widersprechende Versionen desselben Ereignisses, gleichzeitig über zahlreiche Kanäle und scheinbar unabhängige Quellen, in einem Tempo, das jede Korrektur abhängt — jage dann nicht jeder Version hinterher, sondern setze eine einzige verifizierte Faktenbasis, wiederhole sie über deine eigenen Kanäle und benenne das Muster (die koordinierte Flut) selbst. Gish Gallop wäre der Nachbar, wenn eine einzelne Person in einer Wortmeldung viele Behauptungen aneinanderreiht, um das Gegenüber in der Redezeit zu überfahren — hier ist es aber keine einzelne Stimme in einer Debatte, sondern eine anhaltende Flut über viele Kanäle und Quellen. Coordinated Inauthentic Amplification spielt dieselbe, identische Botschaft synchron aus, um Konsens vorzutäuschen — hier widersprechen sich die Versionen dagegen offen; nicht Einigkeit, sondern Verwirrung ist das Ziel. Conspiracy Theory Narratives bieten eine in sich geschlossene Gegenerzählung an; die Firehose braucht gerade keine Kohärenz — die Widersprüche sind Teil des Effekts.',
      en: 'Firehose of Falsehood: across many channels at once, at high speed and deliberately inconsistent, a mass of mutually contradictory versions is pushed out — not to prove any particular claim but to overwhelm, to outrun every correction and to leave the impression that reliable truth can no longer be established. The mechanism works because our capacity to check is limited: refuting costs far more time than asserting, and when overloaded by pace and volume we reach for "who can say" rather than verification. What would be legitimate here: consistent multi-channel communication that carries one verified core message across many channels — it becomes manipulation only through the deliberately contradictory mass of false versions aimed at making truth unfindable. To spot and counter it: watch for many openly contradictory versions of the same event, running simultaneously across numerous channels and seemingly independent sources at a pace that outruns any correction — then do not chase each version, but set one verified factual baseline, repeat it through your own channels, and name the pattern (a coordinated flood) yourself. Gish gallop would be the neighbour if a single person strings together many claims in one turn to overrun an opponent within the speaking time — but here it is not one voice in a debate, it is a sustained flood across many channels and sources. Coordinated inauthentic amplification pushes the same, identical message in sync to fake consensus — here the versions openly contradict one another; the goal is confusion, not agreement. Conspiracy theory narratives offer a self-contained counter-story; the firehose deliberately needs no coherence — the contradictions are part of the effect.',
    },
    points: 10,
    primaryTechniqueId: 'firehose_of_falsehood',
    relatedTechniques: ['firehose_of_falsehood', 'gish_gallop', 'conspiracy_theory_narratives'],
  },
  {
    id: 'wave5c-firehose_of_falsehood-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Krisenkommunikation eines Unternehmens. Nach einem Datenleck-Bericht bricht über Dutzende Kanäle ein Schwall gegensätzlicher Darstellungen los: das Leck sei erfunden, es sei echt aber uralt, ein Wettbewerber stecke dahinter, die Aufsicht sei schuld, die Zahlen seien aufgebläht, die Zahlen seien heruntergespielt. Kaum widerlegst du eine Version, laufen drei neue. Wirtschaftsjournalistinnen fragen dich, was denn nun stimmt.',
      en: 'You lead crisis communications for a company. After a data-leak report, a surge of conflicting accounts breaks across dozens of channels: the leak is fabricated, it is real but ancient, a competitor is behind it, the regulator is to blame, the numbers are inflated, the numbers are downplayed. The moment you rebut one version, three new ones appear. Business journalists ask you what is actually true.',
    },
    options: [
      {
        de: 'Ich jage nicht jeder Version hinterher, sondern setze eine einzige, verifizierte Faktenbasis, wiederhole sie konsistent über meine reichweitenstärksten eigenen Kanäle und benenne das Muster gegenüber Journalistinnen offen als koordinierte Flut widersprüchlicher Darstellungen — so wird das Volumen selbst zum Teil der Einordnung.',
        en: 'I do not chase every version; I set one verified factual baseline, repeat it consistently through my highest-reach owned channels, and name the pattern openly to journalists as a coordinated flood of contradictory accounts — so the volume itself becomes part of the context.',
      },
      {
        de: 'Ich widerlege systematisch jede einzelne kursierende Version Punkt für Punkt, damit nichts unbeantwortet stehen bleibt.',
        en: 'I systematically rebut every single circulating version point by point, so that nothing is left unanswered.',
      },
      {
        de: 'Ich ziehe mit gleicher Wucht nach und spiele einen ebenso großen Strom eigener Botschaften über alle Kanäle aus, um die Gegendarstellungen einfach zu übertönen.',
        en: 'I match the force and push out an equally large stream of my own messages across all channels to simply drown out the opposing accounts.',
      },
      {
        de: 'Ich sage gar nichts, bis die Welle von selbst abebbt — jede Reaktion befeuert das Ganze nur zusätzlich.',
        en: 'I say nothing until the wave subsides on its own — any reaction only fuels the whole thing further.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dein Unternehmen ist Ziel einer Firehose of Falsehood: eine Masse einander offen widersprechender Darstellungen, zeitgleich über viele Kanäle und in einem Tempo, das jede Richtigstellung abhängt. Der Mechanismus wirkt, weil Widerlegen ungleich mehr Zeit kostet als Behaupten — die Flut zielt nicht darauf, eine Version zu beweisen, sondern jede gemeinsame Faktenbasis zu zersetzen. So reagierst du professionell: nicht jeder Version hinterherjagen, sondern eine einzige verifizierte Kernbotschaft setzen, sie über deine stärksten eigenen Kanäle konsistent wiederholen und das Muster selbst benennen, damit das Volumen zur Einordnung statt zur Verwirrung wird. Jede Version einzeln zu widerlegen ist genau die Falle: Du kommst nie hinterher, gibst jeder Falschbehauptung Bühne und Reichweite und arbeitest im Takt des Gegners — die Asymmetrie zwischen Behaupten und Widerlegen ist der Kern der Technik, nicht ihr Schwachpunkt. Mit einem eigenen Botschafts-Schwall gleichzuziehen fügt der Flut nur weiteres Rauschen hinzu, kostet dich Glaubwürdigkeit und macht dich als seriösen Absender vom Grundrauschen ununterscheidbar. Und Schweigen zediert den Deutungsraum: Eine Firehose ebbt nicht von selbst ab, und ohne eine gesetzte Faktenbasis verfestigen sich die widersprüchlichen Versionen.',
      en: 'Your company is the target of a firehose of falsehood: a mass of openly contradictory accounts, running across many channels at once at a pace that outruns any correction. The mechanism works because refuting costs far more time than asserting — the flood does not aim to prove one version but to dissolve any shared factual baseline. The professional response: do not chase every version, but set one verified core message, repeat it consistently through your strongest owned channels, and name the pattern yourself so the volume becomes context rather than confusion. Rebutting each version individually is exactly the trap: you never catch up, you give every falsehood a stage and reach, and you work to the opponent\'s rhythm — the asymmetry between asserting and refuting is the core of the technique, not its weak spot. Matching it with your own surge of messages only adds more noise to the flood, costs you credibility and makes you indistinguishable from it as a serious source. And staying silent cedes the interpretive space: a firehose does not subside on its own, and without a set factual baseline the contradictory versions harden.',
    },
    points: 10,
    primaryTechniqueId: 'firehose_of_falsehood',
    relatedTechniques: ['firehose_of_falsehood', 'gish_gallop'],
  },
  {
    id: 'wave5c-firehose_of_falsehood-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Social-Media-Analyse für einen Konsumgüterhersteller nach einem Produktrückruf: Als Analyst siehst du, wie zum selben Rückruf binnen Stunden fünf, sechs miteinander unvereinbare Erklärungen gleichzeitig über Blogs, Messenger-Gruppen und Kurzvideos ausgespielt werden — der Rückruf sei erfunden, längst erledigt, ein Coup der Konkurrenz, ein Behördenfehler, viel größer als gemeldet, völlig belanglos. Jede läuft in hohem Tempo, keine wird aufgelöst, und in der Summe bleibt vor allem der Eindruck, dass sich ohnehin nichts mehr sicher sagen lässt.',
      en: 'Social-media analysis for a consumer-goods manufacturer after a product recall: as an analyst you watch five or six mutually incompatible explanations of the same recall get pushed out simultaneously within hours across blogs, messenger groups and short videos — the recall is fabricated, already resolved, a rival\'s coup, a regulator\'s blunder, far bigger than reported, utterly trivial. Each runs at high speed, none is resolved, and the sum leaves mainly the impression that nothing can be said for certain anyway.',
    },
    options: [
      { de: 'Firehose of Falsehood', en: 'Firehose of Falsehood' },
      { de: 'Repetition (eine Quelle wiederholt dieselbe Botschaft)', en: 'Repetition (one source repeating the same message)' },
      { de: 'Gish Gallop (eine Person, viele Behauptungen in einer Wortmeldung)', en: 'Gish gallop (one person, many claims in a single turn)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Firehose of Falsehood: viele, einander widersprechende Versionen desselben Ereignisses, gleichzeitig über mehrere Kanäle und in hohem Tempo — nicht um eine Version zu belegen, sondern um zu überfordern und den Eindruck zu erzeugen, gesicherte Wahrheit sei ohnehin nicht mehr feststellbar. Der Hebel ist die Überlastung: Prüfen kostet mehr Zeit als Behaupten, also weicht das Publikum auf „man weiß es nicht" aus. Legitim wäre konsistente Mehrkanal-Kommunikation mit einer verifizierten Kernbotschaft; zur Manipulation wird es durch die bewusst widersprüchliche Masse aus Falschversionen. Daran erkennst du es: viele offen widersprüchliche Versionen, gleichzeitig über viele Kanäle, in einem Tempo, das Richtigstellungen abhängt — dann setze eine einzige Faktenbasis und benenne das Muster, statt jeder Version hinterherzujagen. Repetition wäre der Nachbar, wenn eine Quelle dieselbe eine Botschaft so oft wiederholt, bis sie vertraut wirkt; hier sind die Versionen aber viele und widersprechen sich gerade. Gish Gallop meint eine einzelne Person, die in einer Wortmeldung viele Behauptungen aneinanderreiht; hier ist es keine einzelne Stimme in einer Debatte, sondern eine verteilte Flut über viele Kanäle und Absender.',
      en: 'Firehose of Falsehood: many contradictory versions of the same event, running simultaneously across several channels at high speed — not to substantiate any one version but to overwhelm and leave the impression that reliable truth can no longer be established. The lever is overload: checking costs more time than asserting, so the audience falls back on "who can say". Legitimate would be consistent multi-channel communication with one verified core message; it becomes manipulation through the deliberately contradictory mass of false versions. To spot it: many openly contradictory versions, simultaneously across many channels, at a pace that outruns corrections — then set one factual baseline and name the pattern rather than chasing each version. Repetition would be the neighbour if one source repeated the same single message until it felt familiar; here the versions are many and openly contradict one another. Gish gallop means a single person stringing many claims together in one turn; here it is not one voice in a debate but a distributed flood across many channels and senders.',
    },
    points: 10,
    primaryTechniqueId: 'firehose_of_falsehood',
    relatedTechniques: ['firehose_of_falsehood', 'repetition', 'gish_gallop'],
  },
];
