// Backfill: 3 Übungen für illusory_truth_effect (Wahrheitsillusion).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Eigene Miniaturen — keine wörtliche Übernahme der Technik-examples.
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillIllusoryTruthEffect: Exercise[] = [
  {
    id: 'backfill-illusory_truth_effect-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welcher Mechanismus wirkt hier im Kopf des Teams?',
      en: 'Which mechanism is at work in the team\'s heads here?',
    },
    scenario: {
      de: 'Strategie-Meeting eines Lebensmittelherstellers, Kommunikations- und Regulatory-Team: In der Runde sagt der fachlich versierte Junior-Manager beiläufig, der Zusatzstoff im Konkurrenzprodukt sei „in der EU längst verboten". Die Behauptung ist nachweislich falsch — der Stoff ist zugelassen. Sie geistert seit einem Jahr durch Fachblogs, LinkedIn-Kommentare und Messe-Smalltalk. Als die Leiterin nach der Quelle fragt, kann niemand eine nennen; mehrere nicken trotzdem, „das ist doch inzwischen bekannt". Die schiere Vertrautheit der Aussage hat sie im Team zur Gewissheit werden lassen.',
      en: 'Strategy meeting at a food manufacturer, comms and regulatory team: the domain-savvy junior manager mentions in passing that the additive in the competitor\'s product has "long been banned in the EU". The claim is demonstrably false — the substance is approved. It has drifted through trade blogs, LinkedIn comments and conference small talk for a year. When the lead asks for a source, no one can name one; several people nod anyway, "it\'s common knowledge by now". The sheer familiarity of the claim has turned it into certainty inside the team.',
    },
    options: [
      { de: 'Wahrheitsillusion (Illusory-Truth-Effekt)', en: 'Illusory truth effect' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Wahrheitsillusion: Eine Aussage wird als wahr behandelt, weil sie oft begegnet ist und sich vertraut anfühlt — nicht, weil ein Beleg sie stützt. Der Mechanismus: Wiederholt Gesehenes verarbeiten wir flüssiger, und diese Leichtigkeit lesen wir fälschlich als Wahrheit. Der Effekt ist robust und trifft selbst Fachleute, die es besser wissen könnten (Fazio et al., 2015). Legitim einsetzen: Eine wahre, konsistent gehaltene Kernbotschaft profitiert von genau diesem Vertrautheitsbonus — Wiedererkennung baut Vertrauen, solange die Aussage belegbar bleibt. Erkennen und kontern: Frag dich und die Runde, woher die Gewissheit stammt — aus einer geprüften Quelle oder nur aus häufigem Hören? Verlange den Primärbeleg, bevor eine „bekannte" Behauptung in Sprachregelung oder Pitch wandert. Wiederholung meint die Sendetaktik (jemand spielt eine Botschaft immer wieder aus); gefragt ist hier aber der Effekt im Kopf des Publikums, nicht die Taktik. Social Proof läge vor, wenn das Team glaubte, weil viele andere sichtbar zustimmen — hier zählt die Vertrautheit der Aussage selbst, nicht ein wahrgenommener Konsens. Die Verfügbarkeitsheuristik ließe etwas häufiger oder wahrscheinlicher erscheinen, weil es leicht abrufbar ist — hier geht es nicht um geschätzte Häufigkeit, sondern um den gefühlten Wahrheitsgehalt einer konkreten Aussage.',
      en: 'Illusory truth effect: a claim is treated as true because it has been encountered often and feels familiar — not because evidence backs it. The mechanism: what we see repeatedly, we process more fluently, and we misread that ease as truth. The effect is robust and reaches even experts who should know better (Fazio et al., 2015). Used legitimately: a true, consistently held core message benefits from exactly this familiarity bonus — recognition builds trust, as long as the claim stays verifiable. To spot and counter it: ask yourself and the room where the certainty comes from — a checked source, or just frequent hearing? Demand the primary evidence before a "well-known" claim migrates into your messaging or pitch. Repetition names the deployment tactic (someone runs a message again and again); the question here is about the effect in the audience\'s head, not the tactic. Social proof would apply if the team believed because many others visibly agree — here it is the familiarity of the claim itself that counts, not a perceived consensus. The availability heuristic would make something seem more frequent or likely because it is easy to recall — here the issue is not estimated frequency but the felt truth of one specific claim.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition', 'social_proof', 'availability_heuristic'],
  },
  {
    id: 'backfill-illusory_truth_effect-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Kunden-FAQ eines regionalen Energieversorgers: Seit Monaten kursiert die falsche Behauptung, die neuen Smart Meter „funken die Verbrauchsdaten im Minutentakt an Dritte". Sie steht in Nachbarschaftsgruppen, Kommentarspalten und Leserbriefen — und viele Kundinnen halten sie inzwischen für gesichert, allein weil sie ihnen überall begegnet. Als Kommunikationsverantwortliche sollst du die Richtigstellungs-FAQ verfassen.',
      en: 'Customer FAQ at a regional utility: for months a false claim has circulated that the new smart meters "beam consumption data to third parties every minute". It sits in neighbourhood groups, comment sections and letters to the editor — and many customers now take it as established, simply because they meet it everywhere. As the person responsible for communications, you are to write the corrective FAQ.',
    },
    options: [
      {
        de: 'Ich führe mit der wahren Aussage und wiederhole sie: „Der Zähler übermittelt einmal täglich, ausschließlich an uns." Die falsche Behauptung erwähne ich nur ein einziges Mal, kurz und von der Wahrheit eingerahmt.',
        en: 'I lead with the true statement and repeat it: "The meter transmits once a day, to us only." I mention the false claim just once, briefly, framed by the truth on both sides.',
      },
      {
        de: 'Ich baue einen prominenten „Mythos-Check": Die falsche Behauptung kommt fett als Überschrift, darunter Punkt für Punkt die Widerlegung — so ist der Irrtum klar benannt.',
        en: 'I build a prominent "Myth check": the false claim goes in bold as the headline, with a point-by-point refutation underneath — that names the error clearly.',
      },
      {
        de: 'Ich rate ab, überhaupt zu reagieren: Wer das Gerücht aufgreift, gibt ihm erst Gewicht — ohne unsere Aufmerksamkeit läuft es sich tot.',
        en: 'I advise against responding at all: engaging the rumour is what gives it weight — without our attention it will burn out.',
      },
      {
        de: 'Ich setze auf Frequenz gegen Frequenz: Wir posten so oft wie möglich „Das ist falsch!", damit unsere Dementis das Gerücht schlicht überlagern.',
        en: 'I match frequency with frequency: we post "That\'s false!" as often as possible so our denials simply drown out the rumour.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Behauptung wirkt, weil ihre ständige Wiederbegegnung sie vertraut und damit gefühlt wahr macht — die Wahrheitsillusion. Jede erneute Nennung der Falschaussage erhöht diese Vertrautheit, auch wenn die Nennung als Dementi gemeint ist. Deshalb ist die beste Antwort die „Wahrheits-Sandwich"-Logik: Du stellst die wahre Aussage voran, wiederholst sie, und die falsche taucht höchstens einmal kurz und klar eingerahmt auf. So verankerst du das Richtige, nicht das Falsche. Der prominente Mythos-Check (Option 2) fühlt sich gründlich an, ist aber der klassische Fehler: Die fett gesetzte Falschbehauptung als Überschrift bekommt genau die zusätzliche Exposition, die sie stärkt — Leser behalten die vertraute Formel, nicht den Zusatz „ist falsch". Schweigen (Option 3) überlässt der Gegenseite die alleinige Wiederholung; die Vertrautheit wächst ungestört weiter. Reine Dementi-Frequenz (Option 4) wiederholt die Verknüpfung „Smart Meter — funken — Dritte" nur noch häufiger und erzeugt Rauschen statt einer merkbaren, belegten Wahrheit. Die Wahrheitsillusion schlägst du, indem du der wahren Aussage die Vertrautheit verschaffst — nicht der falschen.',
      en: 'The claim works because its constant re-encounter makes it familiar and thus felt-true — the illusory truth effect. Every fresh mention of the false statement raises that familiarity, even when the mention is meant as a denial. That is why the best answer follows "truth sandwich" logic: you put the true statement first, repeat it, and the false one appears at most once, briefly and clearly framed. This anchors the correct claim, not the wrong one. The prominent myth check (option 2) feels thorough, but it is the classic mistake: the bolded false claim as a headline gets exactly the extra exposure that strengthens it — readers keep the familiar formula, not the "is false" tag. Silence (option 3) hands the other side the sole repetition; familiarity keeps growing undisturbed. Sheer denial frequency (option 4) only repeats the association "smart meter — beams — third parties" more often and creates noise rather than one memorable, evidenced truth. You beat the illusory truth effect by giving the familiarity to the true statement — not the false one.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition', 'firehose_of_falsehood'],
  },
  {
    id: 'backfill-illusory_truth_effect-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Dass die Zahl allein durch ständiges Wiederbegegnen als gesichert gilt, ist das Kennzeichen ___.',
      en: 'Complete the sentence: that the figure counts as established purely because it is met again and again is the hallmark of ___.',
    },
    scenario: {
      de: 'Media-Monitoring einer Verbandskommunikation: Die Analystin bemerkt, dass eine bestimmte Zahl — „die Branche verliere jährlich 40 % Umsatz an ausländische Anbieter" — seit Monaten in Reden, Posts und Fachartikeln auftaucht. Eine Primärquelle gibt es nicht; die Zahl zitiert sich gegenseitig im Kreis. Trotzdem nennen Kolleginnen sie inzwischen selbstsicher als Faktum, weil sie ihnen so oft begegnet ist.',
      en: 'Media monitoring in an association\'s comms team: the analyst notices that one particular figure — "the sector loses 40% of revenue to foreign providers every year" — has appeared in speeches, posts and trade articles for months. There is no primary source; the figure just cites itself in a circle. Yet colleagues now state it confidently as fact, because they have met it so often.',
    },
    options: [
      {
        de: 'der Wahrheitsillusion — die wiederholte Begegnung mit einer Aussage lässt sie wahrer wirken, unabhängig vom Beleg (Illusory-Truth-Effekt)',
        en: 'the illusory truth effect — repeated encounters with a claim make it seem truer, regardless of evidence',
      },
      {
        de: 'des Mere-Exposure-Effekts — reine Vertrautheit steigert die Sympathie für den wiederkehrenden Reiz',
        en: 'the mere-exposure effect — pure familiarity increases liking for the recurring stimulus',
      },
      {
        de: 'der Verfügbarkeitsheuristik — leicht abrufbare Beispiele lassen ein Ereignis häufiger oder wahrscheinlicher erscheinen',
        en: 'the availability heuristic — easily recalled examples make an event seem more frequent or likely',
      },
      {
        de: 'des Social Proof — die Annahme, viele andere hielten die Zahl für richtig, verleiht ihr Glaubwürdigkeit',
        en: 'social proof — the assumption that many others hold the figure to be correct lends it credibility',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Wahrheitsillusion: Kennzeichen ist, dass die bloße wiederholte Begegnung mit einer Aussage sie wahrer erscheinen lässt — hier zitiert sich eine Zahl ohne Primärquelle im Kreis, bis Vertrautheit als Gewissheit durchgeht. Legitim einsetzen: Eine belegte Kennzahl, die du konsistent kommunizierst, gewinnt zu Recht an Wiedererkennung — der Hebel ist derselbe, entscheidend ist der vorhandene Beleg. Erkennen und kontern: Prüf bei jeder „bekannten" Zahl die Herkunft, bevor du sie übernimmst; fehlt die Primärquelle und zitieren sich die Fundstellen nur gegenseitig, ist das dein Warnsignal. Der Mere-Exposure-Effekt ist der verwandte Hebel, zielt aber eng auf gesteigerte Sympathie für den vertrauten Reiz — hier geht es um gefühlte Wahrheit, nicht um Zuneigung. Die Verfügbarkeitsheuristik beträfe die geschätzte Häufigkeit oder Wahrscheinlichkeit eines Ereignisses aufgrund leichter Abrufbarkeit — nicht den Wahrheitsgehalt einer konkreten Zahl. Social Proof läge vor, wenn die Glaubwürdigkeit aus dem sichtbaren Zuspruch vieler käme; hier trägt allein die Vertrautheit der oft gehörten Aussage.',
      en: 'Illusory truth effect: the hallmark is that the mere repeated encounter with a claim makes it seem truer — here a figure with no primary source cites itself in a circle until familiarity passes for certainty. Used legitimately: an evidenced metric you communicate consistently rightly gains recognition — the lever is the same; what matters is that the evidence exists. To spot and counter it: check the provenance of every "well-known" figure before adopting it; if the primary source is missing and the citations only reference each other, that is your warning sign. The mere-exposure effect is the related lever, but it narrowly targets increased liking for the familiar stimulus — here the issue is felt truth, not fondness. The availability heuristic would concern the estimated frequency or likelihood of an event due to easy recall — not the truth of a specific figure. Social proof would apply if the credibility came from the visible endorsement of many; here it is the familiarity of the often-heard claim alone that carries it.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'mere_exposure_effect', 'availability_heuristic', 'social_proof'],
  },
];
