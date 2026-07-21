// Backfill: 3 Übungen für emotional_appeal (Emotionale Appelle).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Technik-Eintrag ist fertig; hier werden NUR Übungen ergänzt.
// evidenceTier nicht 'frontier' (confidence 0.91, evidenceQuality 'high')
// → Wirkung darf geprüft werden, Begriffswissen-Zwang gilt nicht.
// Kein seriousMode. Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const backfillEmotionalAppeal: Exercise[] = [
  {
    id: 'backfill-emotional_appeal-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik ist hier am Werk?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Pressekonferenz eines Branchenverbands gegen ein geplantes Lieferketten-Gesetz: Vor den Wirtschaftsjournalisten nennt der Verbandssprecher keine Zahlen zu Kosten, Prüfaufwand oder Umsetzungsfristen. Mit gesenkter Stimme sagt er stattdessen: „Hinter jeder dieser Firmen steht ein Mensch, der nachts wachliegt, weil er nicht weiß, wie er seinen langjährigen Leuten bald die Kündigung beibringen soll." Auf der Leinwand hinter ihm laufen Nahaufnahmen sorgenvoller Handwerkerinnen und Handwerker.',
      en: 'Press conference held by an industry association against a planned supply-chain law: in front of business journalists, the association\'s spokesperson gives no figures on costs, audit burden or implementation deadlines. In a lowered voice he says instead: "Behind every one of these companies is a person lying awake at night, not knowing how they will soon break the news of redundancy to people they have worked alongside for years." On the screen behind him run close-ups of worried tradespeople.',
    },
    options: [
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
      { de: 'Framing (Bezugsrahmen setzen)', en: 'Framing' },
      { de: 'Narrative Persuasion (Erzählstrategie)', en: 'Narrative persuasion' },
      { de: 'Loaded Language (gefärbte Wörter)', en: 'Loaded language' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein emotionaler Appell zielt direkt auf ein Gefühl — hier Angst und Mitgefühl — und schiebt es an die Stelle, an der ein Sachargument stehen müsste. Der Mechanismus: Ein starkes Gefühl bindet Aufmerksamkeit und Urteil, noch bevor eine einzige Zahl geprüft wird; wo Kosten und Fristen fehlen, füllt die Empfindung die Lücke. Legitim einsetzen: Betroffenheit darf die Aufmerksamkeit öffnen — professionell bleibt es, solange du die überprüfbaren Belege hinter das Gefühl stellst und nicht an seine Stelle. Erkennen und kontern: Der Test ist die Leerstelle — benenne das Sachargument, das hier fehlt, und frag konkret nach („Welche Mehrkosten entstehen einem Familienbetrieb genau, über welchen Zeitraum?"). Bleibt darauf nur wieder ein Bild, war das Gefühl schon das ganze Angebot. Zur Abgrenzung von den Nachbarn: Framing würde eine Perspektive auf die Sache wählen — etwa Bürokratielast statt Menschenrechte — und darin argumentieren; hier wird keine Sichtweise gesetzt, sondern unmittelbar Angst ausgelöst. Narrative Persuasion würde eine Figur durch einen Handlungsbogen führen; der Sprecher erzählt aber keine Episode, er drückt auf einen Gefühlsknopf. Loaded Language säße in einzelnen gefärbten Vokabeln für denselben Sachverhalt — er benennt jedoch nichts um, sondern adressiert das Gefühl geradeheraus.',
      en: 'An emotional appeal aims straight at a feeling — here fear and compassion — and slots it into the place where a factual argument ought to stand. The mechanism: a strong feeling captures attention and judgement before a single figure is checked; where costs and deadlines are missing, the sensation fills the gap. Used legitimately: concern may open attention — it stays professional as long as you put the verifiable evidence behind the feeling and not in its place. To spot and counter it: the test is the empty slot — name the factual argument that is missing here and ask for it directly ("What exactly are the extra costs to a family business, and over what period?"). If all that comes back is another image, the feeling was already the whole offer. To distinguish it from its neighbours: framing would pick a perspective on the issue — bureaucratic burden rather than human rights, say — and argue within it; here no viewpoint is set, fear is triggered directly. Narrative persuasion would carry a character through an arc; but the speaker tells no episode, he presses an emotional button. Loaded language would show up in individual slanted words for the same thing — yet he relabels nothing, he addresses the feeling head-on.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'framing', 'narrative_persuasion', 'loaded_language'],
  },
  {
    id: 'backfill-emotional_appeal-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Interne Awareness-Kampagne bei einer Klinikgruppe: Als Kommunikationsverantwortliche sollst du die Belegschaft für ein neues Hygiene-Protokoll gewinnen. Der erste Entwurf der Agentur setzt ausschließlich auf Schockbilder infizierter Wunden und den fetten Slogan „Willst du wirklich riskieren, dass wegen dir jemand stirbt?" — keine Angabe, was konkret zu tun ist, keine Evidenz, nur Angst.',
      en: 'Internal awareness campaign at a hospital group: as head of communications you are to win the staff over to a new hygiene protocol. The agency\'s first draft relies entirely on shock images of infected wounds and the bold slogan "Do you really want to risk someone dying because of you?" — no indication of what concretely to do, no evidence, only fear.',
    },
    options: [
      {
        de: 'Ich behalte einen dosierten emotionalen Aufhänger, koppele ihn aber an einen konkreten, sofort umsetzbaren Handlungsschritt samt kurzer Begründung — Angst, die einen begehbaren Ausweg zeigt, verändert Verhalten; Angst allein erzeugt nur Abwehr.',
        en: 'I keep a measured emotional hook but tie it to one concrete, immediately doable step plus a short reason — fear that shows a way out they can actually take changes behaviour; fear alone only produces avoidance.',
      },
      {
        de: 'Ich behalte das Schockbild und untermauere es mit echten Fallzahlen und Sterblichkeitsstatistik, damit die Bedrohung nicht nur gefühlt, sondern belegt ist.',
        en: 'I keep the shock image and back it with real case numbers and mortality statistics, so the threat is not merely felt but documented.',
      },
      {
        de: 'Ich behalte den Appell, ersetze aber die Schuld durch warme Anerkennung („Ihr schützt eure Patientinnen und Patienten jeden Tag") — positive Emotion motiviert stärker und ist der eigenen Belegschaft gegenüber fairer.',
        en: 'I keep the appeal but replace the guilt with warm recognition ("You protect your patients every single day") — positive emotion motivates more strongly and is fairer to your own staff.',
      },
      {
        de: 'Ich behalte den Entwurf und spiele ihn breiter aus — über alle internen Kanäle wiederholt und stationsgenau in der Version, die das jeweilige Team am stärksten trifft, damit die Botschaft wirklich ankommt.',
        en: 'I keep the draft and roll it out more widely — repeated across every internal channel and tailored ward by ward to the version that hits each team hardest, so the message really lands.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf ist ein reiner Furchtappell: Angst tritt an die Stelle des Arguments und lässt die Belegschaft ohne Handlungsweg zurück. Genau hier liegt die Schwäche — eine Bedrohung ohne begehbaren Ausweg erzeugt Abwehr und Verdrängung, nicht Verhalten (das ist der Kern des Extended-Parallel-Process-Gedankens: Furcht wirkt nur zusammen mit erlebter Selbstwirksamkeit). Behalte den emotionalen Aufhänger, aber koppel ihn an eine konkrete, sofort machbare Handlung samt Begründung — so trägt nicht das Gefühl allein, sondern der gezeigte Weg. Warum die anderen Wege verlocken: Die Bedrohung mit echten Fallzahlen und Sterblichkeitsstatistik zu untermauern klingt richtig, weil das Szenario „keine Evidenz" bemängelt — doch das belegt nur die Gefahr und schraubt die Angst höher, ohne den fehlenden Ausweg zu liefern. Die Schuld gegen warme Anerkennung zu tauschen wirkt fairer gegenüber der eigenen Belegschaft, bleibt aber ein reiner Gefühlsappell mit derselben Lücke: kein konkreter Schritt, keine Begründung. Das Motiv über alle Kanäle und stationsgenau auszuspielen erhöht Reichweite und Passung — aber eine angstgetriebene Botschaft lauter zu wiederholen macht sie nicht wirksamer, sie verstärkt nur die Abwehr.',
      en: 'The draft is a pure fear appeal: fear takes the place of the argument and leaves the staff with no path to act. That is exactly where it fails — a threat with no way out they can take produces avoidance and denial, not behaviour (this is the heart of the extended-parallel-process idea: fear works only together with a felt sense of self-efficacy). The best choice keeps the emotional hook but couples it to a concrete, immediately doable action and the reason for it — so what carries the message is not the feeling alone but the way out it shows. Why the others tempt: backing the threat with real case numbers and mortality statistics sounds right, because the scenario faults the draft for having "no evidence" — yet that only documents the danger and turns the fear up further, without supplying the missing way out. Swapping the guilt for warm recognition feels fairer to your own staff, but it stays a pure emotional appeal with the same gap: no concrete step, no reason. Pushing the motif across every channel and tailoring it ward by ward raises reach and fit — but repeating a fear-driven message more loudly does not make it more effective, it only deepens the avoidance.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'guilt_appeals'],
  },
  {
    id: 'backfill-emotional_appeal-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit diesem Kampagnenmotiv versucht die Marke, ___.',
      en: 'Complete the sentence: with this campaign, the brand is trying to ___.',
    },
    scenario: {
      de: 'Sommer-Relaunch einer Limonadenmarke: Das Kampagnenmotiv verzichtet auf jede Produktaussage — kein Wort zu Zutaten, Zuckergehalt, Preis oder Geschmack. Neben der Flasche steht, über ein in Abendlicht getauchtes Foto gelegt, allein der Satz: „Dieses Gefühl, wenn die Luft noch warm ist und keiner nach Hause gehen will."',
      en: 'Summer relaunch of a lemonade brand: the campaign drops every product claim — not a word about ingredients, sugar content, price or taste. Beside the bottle, laid over a photo bathed in evening light, stands only the line: "That feeling when the air is still warm and nobody wants to go home."',
    },
    options: [
      {
        de: 'allein über ein gewecktes Wärme- und Zugehörigkeitsgefühl die rationale Produktbewertung zu überspringen (Emotionale Appelle)',
        en: 'skip rational product judgement purely by arousing a feeling of warmth and belonging (emotional appeal)',
      },
      {
        de: 'die Marke in eine fortlaufende Geschichte mit Figuren und Handlungsbogen einzubetten (Narrative Persuasion)',
        en: 'embed the brand in an ongoing story with characters and an arc (narrative persuasion)',
      },
      {
        de: 'mit einem vorgeschalteten Reiz ein späteres, davon getrenntes Urteil unbemerkt zu bahnen (Priming)',
        en: 'prime a later, separate judgement unnoticed through a stimulus placed in advance (priming)',
      },
      {
        de: 'das Produkt in einen bestimmten Deutungsrahmen zu rücken und darin zu argumentieren (Framing)',
        en: 'place the product within a particular interpretive frame and argue inside it (framing)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Hier arbeitet der emotionale Appell über pure Wärme: Ein wohliges Gefühl von Sommer und Zusammensein wird geweckt und auf die Marke übertragen, ohne dass ein einziges Produktmerkmal fällt. Warum das zieht: Wo Zutaten, Preis und Geschmack schweigen, entscheidet die Empfindung allein — das gute Gefühl übernimmt die Rolle der Bewertung. So bleibt es professionell: Ein Produkt emotional aufzuladen ist faires Marketing, solange der warme Ton eine reale Eigenschaft begleitet, statt sie ersatzlos zu verdrängen. So durchschaust du es: Trenne die geliehene Stimmung vom Produkt und frag dich, ob die Wärme aus dem Sommerabend stammt oder aus dem Getränk — fast immer ist sie nur ausgeliehen und ans Etikett geheftet. Die Nachbarn liegen daneben, weil hier Handlung, Vorlauf und Rahmen fehlen: Narrative Persuasion lebte von Figuren, die sich über die Zeit entwickeln — hier hältst du einen einzigen Moment fest, ohne Anfang und Ende. Priming setzte einen früheren Reiz, der ein späteres, davon getrenntes Urteil heimlich vorbereitet — hier ist das Gefühl kein Vorlauf, sondern offen die Botschaft. Und Framing legte einen Deutungsrahmen über Produkteigenschaften — doch keine Eigenschaft steht zur Debatte, nur eine Empfindung.',
      en: 'Here the emotional appeal works through sheer warmth: a cosy feeling of summer and togetherness is stirred and transferred onto the brand, without a single product attribute being named. Why it pulls: where ingredients, price and taste stay silent, the sensation decides on its own — the good feeling takes over the job of evaluation. Keeping it professional: charging a product emotionally is fair marketing, as long as the warm tone accompanies a real attribute instead of replacing it outright. Seeing through it: separate the borrowed mood from the product and ask whether the warmth comes from the summer evening or from the drink — almost always it is merely on loan, pinned to the label. The neighbours miss because there is no plot, no run-up and no frame here: narrative persuasion would live off characters developing over time — here you hold a single moment, with no beginning and no end. Priming would set an earlier stimulus that secretly prepares a later, separate judgement — here the feeling is no run-up but openly the message. And framing would lay an interpretive frame over product attributes — yet no attribute is in play, only a sensation.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'narrative_persuasion', 'priming', 'framing'],
  },
];
