import type { Exercise } from '../../types';

// straw_man — Phase 2 content batch.
export const strawManExercises: Exercise[] = [
  {
    id: 'sw-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik setzt der Kritiker hier ein?',
      en: 'Which technique is the critic using here?',
    },
    scenario: {
      de: 'Das Unternehmen schlägt vor, an zwei Tagen pro Woche freiwilliges Homeoffice zu ermöglichen. Ein Kritiker entgegnet in der Betriebsversammlung: "Die wollen doch das Büro komplett abschaffen und alle ins Homeoffice zwingen!"',
      en: 'The company proposes allowing voluntary remote work on two days per week. A critic responds at the staff meeting: "They just want to abolish the office entirely and force everyone to work from home!"',
    },
    options: [
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Ad-hominem-Argument', en: 'Ad hominem' },
      { de: 'Falsches Dilemma', en: 'False dilemma' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein Strohmann: Aus dem tatsächlichen Vorschlag — zwei Tage freiwilliges Homeoffice — wird eine überzeichnete Extremversion ("Büro abschaffen", "alle zwingen") gebaut, die viel leichter anzugreifen ist. Der Mechanismus wirkt, weil das Publikum die verzerrte Fassung mit der echten Position verwechselt. Legitim ist es, eine Gegenposition kurz zusammenzufassen, solange sie fair und zutreffend bleibt; manipulativ wird es, sobald man sie absichtlich übertreibt, um die eigentliche Frage nicht beantworten zu müssen. Ad hominem würde die Person angreifen, nicht die Position; ein falsches Dilemma würde nur zwei sich ausschließende Optionen behaupten; ein emotionaler Appell würde primär Gefühle wecken, statt die Position zu verzerren.',
      en: 'This is a straw man: the actual proposal — two days of voluntary remote work — is rebuilt into an exaggerated extreme ("abolish the office", "force everyone"), which is far easier to attack. The mechanism works because the audience confuses the distorted version with the real position. Briefly summarising an opposing view is legitimate as long as it stays fair and accurate; it turns manipulative the moment you deliberately exaggerate it to avoid answering the real question. Ad hominem would attack the person, not the position; a false dilemma would assert only two mutually exclusive options; an emotional appeal would primarily arouse feelings rather than distort the position.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'false_dichotomy'],
  },
  {
    id: 'sw-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'In einer Podiumsdiskussion erklärt die Datenschutzbeauftragte: "Wir möchten ausschließlich anonymisierte Nutzungsdaten auswerten, um die App zu verbessern." Ein Diskutant erwidert: "Sie wollen also die Daten Ihrer Kunden verkaufen und jeden einzelnen Klick überwachen."',
      en: 'In a panel discussion the data-protection officer explains: "We only want to analyse anonymised usage data in order to improve the app." A fellow panellist replies: "So you want to sell your customers\' data and monitor every single click."',
    },
    options: [
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Ad-hominem-Argument', en: 'Ad hominem' },
      { de: 'Falsches Dilemma', en: 'False dilemma' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Strohmann: Die tatsächliche Aussage ("anonymisierte Daten auswerten, um zu verbessern") wird in eine ganz andere, viel angreifbarere Behauptung umgedeutet ("Daten verkaufen", "jeden Klick überwachen") — und dann diese Fassung bekämpft, nicht die reale. Der Hebel: Wer die verzerrte Version widerlegt, wirkt, als hätte er die echte Position entkräftet. Legitim bleibt das faire Zusammenfassen; manipulativ ist die absichtliche Umdeutung zu einer Extremposition. Äquivokation läge vor, wenn ein Begriff innerhalb des Arguments seine Bedeutung wechselte — hier wird nicht ein Wort mehrdeutig genutzt, sondern die ganze Position ersetzt. Ad hominem würde die Person angreifen, was hier nicht geschieht. Ein falsches Dilemma würde zwei sich ausschließende Optionen behaupten — auch das fehlt.',
      en: 'Straw man: the actual statement ("analyse anonymised data to improve") is recast into a completely different, far more attackable claim ("sell data", "monitor every click") — and that version is then fought, not the real one. The lever: refuting the distorted version makes it look as if you have refuted the genuine position. Fairly summarising stays legitimate; deliberately recasting into an extreme position is manipulative. Equivocation would mean a single term shifts meaning within the argument — here no word is used ambiguously, the whole position is swapped out. Ad hominem would attack the person, which does not happen here. A false dilemma would assert two mutually exclusive options — also absent.',
    },
    points: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'equivocation'],
  },
  {
    id: 'sw-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik prägt die Erwiderung — trotz des sachlich klingenden Tons?',
      en: 'Which technique shapes the reply — despite its reasonable-sounding tone?',
    },
    scenario: {
      de: 'In der Budgetrunde schlägt eine Kollegin vor, zehn Prozent des Werbebudgets umzuschichten, um erstmals Influencer-Kooperationen zu testen. Ein Kollege antwortet: "Der Gedanke klingt zunächst reizvoll, aber unsere bewährten Kanäle komplett aufzugeben und stattdessen das gesamte Budget auf Influencer-Kooperationen zu verlagern, können wir uns im aktuellen Markt schlicht nicht leisten."',
      en: 'In the budget meeting a colleague proposes reallocating ten percent of the advertising budget to test influencer partnerships for the first time. A co-worker responds: "The idea sounds appealing at first, but completely abandoning our proven channels and instead shifting the entire budget into influencer partnerships is simply something we cannot afford in the current market."',
    },
    options: [
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Falsches Dilemma', en: 'False dilemma' },
      { de: 'Ad-hominem-Argument', en: 'Ad hominem' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der sachliche Ton verdeckt einen Strohmann: Vorgeschlagen war, zehn Prozent umzuschichten und zu testen — der Kollege bekämpft aber eine Extremversion, die niemand geäußert hat ("komplett aufgeben", "das gesamte Budget verlagern"). Er widerlegt die überzeichnete Fassung und lässt die reale, moderate Position unbeantwortet. Das ist der Kern der Technik und zugleich ihre Grenze: eine Gegenposition fair verkürzen ist zulässig; sie zu einer nie vertretenen Maximalforderung aufblasen ist manipulativ. Framing wäre der Grenzfall — dieselbe Tatsache mit anderer Betonung darstellen —, hier wird jedoch nicht dieselbe Information umrahmt, sondern eine andere, überzogene Behauptung untergeschoben. Ein falsches Dilemma zwingt in ein Entweder-oder; hier wird keine Auswahl zwischen zwei Optionen erzwungen, sondern die Ausgangsposition verzerrt. Ad hominem fehlt, weil die Person nicht angegriffen wird.',
      en: 'The reasonable tone conceals a straw man: the proposal was to reallocate ten percent and test — but the co-worker fights an extreme version no one voiced ("completely abandon", "shift the entire budget"). He refutes the exaggerated version and leaves the real, moderate position unanswered. That is the heart of the technique and its boundary: fairly condensing an opposing view is acceptable; inflating it into a maximal demand never made is manipulative. Framing would be the near case — presenting the same fact with a different emphasis — but here the same information is not reframed; a different, overstated claim is slipped in. A false dilemma forces an either/or; here no choice between two options is imposed, the starting position is distorted. Ad hominem is absent because the person is not attacked.',
    },
    points: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'framing'],
  },
  {
    id: 'sw-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Statt auf den tatsächlichen Vorschlag einzugehen, ___, um genau diese überzeichnete Fassung anschließend bequem zurückweisen zu können.',
      en: 'Complete the sentence: Instead of engaging with the actual proposal, he ___, so that he can then conveniently reject exactly that exaggerated version.',
    },
    scenario: {
      de: 'Vorgeschlagen wird eine flexible Kernarbeitszeit von 10 bis 15 Uhr, außerhalb derer die Arbeit frei einteilbar ist. Der Abteilungsleiter behauptet jedoch, die Kollegin wolle "feste Arbeitszeiten komplett abschaffen und die Erreichbarkeit im Team zerstören".',
      en: 'The proposal is flexible core hours from 10 am to 3 pm, with work outside them freely schedulable. The department head claims, however, that the colleague wants to "abolish fixed working hours entirely and destroy the team\'s availability".',
    },
    options: [
      {
        de: 'verzerrt die Position der Kollegin zu einer leichter angreifbaren Extremversion (Strohmann)',
        en: 'distorts the colleague\'s position into a more easily attackable extreme version (straw man)',
      },
      {
        de: 'greift die Kollegin persönlich an statt ihr Argument (Ad hominem)',
        en: 'attacks the colleague personally instead of her argument (ad hominem)',
      },
      {
        de: 'reduziert die Frage auf nur zwei sich ausschließende Optionen (Falsches Dilemma)',
        en: 'reduces the question to only two mutually exclusive options (false dilemma)',
      },
      {
        de: 'verwendet denselben Begriff innerhalb des Arguments in zwei Bedeutungen (Äquivokation)',
        en: 'uses the same term in two meanings within the argument (equivocation)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gesucht ist der Strohmann-Mechanismus: Die reale Position ("flexible Kernzeit 10–15 Uhr") wird durch eine überzeichnete ersetzt ("feste Arbeitszeiten abschaffen", "Erreichbarkeit zerstören") und dann diese Extremfassung widerlegt — die eigentliche, moderate Forderung bleibt unbeantwortet. So funktioniert der Hebel, und genau hier liegt die Grenze: fair zusammenfassen ist erlaubt, absichtlich aufblasen ist manipulativ. Ad hominem passt nicht, weil nicht die Person, sondern eine erfundene Position angegriffen wird. Ein falsches Dilemma bräuchte ein erzwungenes Entweder-oder — das fehlt. Äquivokation bräuchte einen Begriff, der seine Bedeutung wechselt — auch das liegt nicht vor; ausgetauscht wird die gesamte Position.',
      en: 'The answer is the straw-man mechanism: the real position ("flexible core hours 10 am–3 pm") is replaced with an exaggerated one ("abolish fixed hours", "destroy availability") and that extreme version is then refuted — the actual, moderate request goes unanswered. That is how the lever works, and this is exactly where the boundary lies: summarising fairly is allowed, deliberately inflating is manipulative. Ad hominem does not fit, because it is not the person but a fabricated position that is attacked. A false dilemma would need a forced either/or — which is absent. Equivocation would need a term that shifts meaning — also not present; here the entire position is swapped out.',
    },
    points: 10,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'false_dichotomy'],
  },
  {
    id: 'sw-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Kritiker hat die moderate Position deines Unternehmens öffentlich als Extremforderung dargestellt (Strohmann). Wie reagierst du als Kommunikationsprofi professionell und wirksam?',
      en: 'A critic has publicly portrayed your company\'s moderate position as an extreme demand (a straw man). As a communications professional, how do you respond professionally and effectively?',
    },
    scenario: {
      de: 'Euer Unternehmen hat vorgeschlagen, die Lieferkette schrittweise transparenter zu machen. In einem viel geteilten Interview behauptet ein Branchenkritiker, ihr wolltet "alle bestehenden Partner über Nacht rauswerfen und den Betrieb lahmlegen". Die verzerrte Fassung verbreitet sich rasch in den Fachmedien.',
      en: 'Your company has proposed making the supply chain gradually more transparent. In a widely shared interview an industry critic claims you want to "throw out all existing partners overnight and paralyse operations". The distorted version is spreading fast across the trade media.',
    },
    options: [
      {
        de: 'Ruhig und faktenbasiert die tatsächliche Position wiederholen, die Verzerrung klar benennen ("Wir haben nie gefordert, Partner rauszuwerfen — unser Plan ist eine schrittweise Transparenz über 24 Monate") und mit Belegen zur realen Frage zurückführen.',
        en: 'Calmly and factually restate the actual position, clearly name the distortion ("We never called for throwing out partners — our plan is gradual transparency over 24 months") and steer back to the real question with evidence.',
      },
      {
        de: 'Mit gleicher Münze antworten und die Position des Kritikers ihrerseits überspitzt darstellen, damit sie ebenso angreifbar wird.',
        en: 'Respond in kind and overstate the critic\'s position in turn, so that it becomes just as attackable.',
      },
      {
        de: 'Den Kritiker öffentlich als ahnungslos und voreingenommen bezeichnen, damit sein Vorwurf an Gewicht verliert.',
        en: 'Publicly label the critic as clueless and biased so that his accusation loses weight.',
      },
      {
        de: 'Gar nicht reagieren — jede Antwort werte die Verzerrung nur weiter auf.',
        en: 'Do not respond at all — any reply would only give the distortion more weight.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der wirksame und saubere Weg gegen einen Strohmann ist, die eigene reale Position sichtbar und belegt neben die Verzerrung zu stellen und den Unterschied klar zu markieren (Option 0). So korrigierst du die Wahrnehmung, ohne selbst unfair zu werden. Option 1 baut einen Gegen-Strohmann: kurzfristig verlockend, aber es verdoppelt die Unehrlichkeit, ist leicht als Ausweichen erkennbar und beschädigt deine Glaubwürdigkeit. Option 2 ist ein Ad hominem und löst typischerweise Reaktanz aus — das Publikum verteidigt den Angegriffenen und dein Sachpunkt geht unter. Option 3 klingt nach souveräner Gelassenheit, überlässt der verzerrten Fassung aber das Feld: In einem laufenden Medienzyklus, in dem sich die Falschdarstellung bereits verbreitet, wird Schweigen als Zustimmung gelesen, und der Strohmann definiert die Erzählung.',
      en: 'The effective and clean response to a straw man is to place your real position, visible and evidenced, right next to the distortion and clearly mark the difference (option 0). This corrects perception without becoming unfair yourself. Option 1 builds a counter-straw-man: tempting in the moment, but it doubles the dishonesty, is easily spotted as evasion and damages your credibility. Option 2 is an ad hominem and typically triggers reactance — the audience defends the person attacked and your substantive point is lost. Option 3 sounds like composed detachment but cedes the field to the distorted version: in a live media cycle where the misrepresentation is already spreading, silence reads as agreement and the straw man defines the narrative.',
    },
    points: 15,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'ad_hominem'],
  },
  {
    id: 'sw-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team plant Materialien für eine öffentliche Debatte mit Kritikern eures Produkts. Welches geplante Element überschreitet die ethische Grenze von legitimer Gegenrede zu Manipulation?',
      en: 'Your team is planning materials for a public debate with critics of your product. Which planned element crosses the ethical line from legitimate rebuttal into manipulation?',
    },
    scenario: {
      de: 'Geplante Bausteine für die Argumentationsmappe:',
      en: 'Planned components for the argumentation pack:',
    },
    options: [
      {
        de: 'Eine Faktenübersicht, die die Kritiker wörtlich zitiert und jeden Punkt einzeln mit belegten Daten beantwortet.',
        en: 'A fact sheet that quotes the critics verbatim and answers each point individually with evidenced data.',
      },
      {
        de: 'Ein FAQ, das die häufigsten sachlichen Missverständnisse zum Produkt richtigstellt.',
        en: 'An FAQ that corrects the most common factual misunderstandings about the product.',
      },
      {
        de: 'Eine Einladung an den schärfsten Kritiker zu einem moderierten, öffentlichen Streitgespräch.',
        en: 'An invitation to the fiercest critic to a moderated, public debate.',
      },
      {
        de: 'Ein vorbereitetes Statement, das die moderate Forderung der Kritiker — mehr Transparenz bei den Inhaltsstoffen — als "die wollen das Produkt vom Markt nehmen" umdeutet, um sie als radikal erscheinen zu lassen.',
        en: 'A prepared statement that recasts the critics\' moderate demand — more transparency about ingredients — as "they want to pull the product from the market", to make them appear radical.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Baustein D ist ein bewusst gebauter Strohmann: Die tatsächliche, moderate Forderung ("mehr Transparenz bei den Inhaltsstoffen") wird durch eine erfundene Extremversion ("Produkt vom Markt nehmen") ersetzt, um die Kritiker als radikal zu diskreditieren und ihrer echten Forderung auszuweichen. Das überschreitet die Grenze, weil es die Gegenseite absichtlich falsch darstellt, statt sie zu widerlegen. Die anderen drei Bausteine bleiben legitim: Kritiker wörtlich zu zitieren und Punkt für Punkt zu beantworten ist das Gegenteil eines Strohmanns (faire, genaue Wiedergabe); ein sachliches FAQ klärt echte Missverständnisse; eine offene Einladung zum Streitgespräch stellt sich der realen Position, statt ihr auszuweichen. Prüffrage für die Grenze: Wird die Position der Gegenseite so wiedergegeben, wie sie sie selbst vertreten würde — oder absichtlich überzeichnet?',
      en: 'Component D is a deliberately built straw man: the actual, moderate demand ("more transparency about ingredients") is replaced with a fabricated extreme version ("pull the product from the market") in order to discredit the critics as radical and dodge their real request. It crosses the line because it deliberately misrepresents the other side instead of refuting it. The other three components stay legitimate: quoting critics verbatim and answering point by point is the opposite of a straw man (fair, accurate representation); a factual FAQ clears up genuine misunderstandings; an open invitation to debate confronts the real position rather than evading it. The boundary test: is the other side\'s position represented as they themselves would state it — or deliberately exaggerated?',
    },
    points: 15,
    primaryTechniqueId: 'straw_man',
    relatedTechniques: ['straw_man', 'false_dichotomy'],
  },
];
