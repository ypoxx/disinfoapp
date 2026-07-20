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
      de: 'Welche Technik trägt diesen Auftritt?',
      en: 'Which technique carries this appearance?',
    },
    scenario: {
      de: 'Pressekonferenz eines Branchenverbands gegen ein geplantes Lieferketten-Gesetz: Vor den Wirtschaftsjournalisten nennt der Verbandssprecher keine Zahlen zu Kosten, Prüfaufwand oder Umsetzungsfristen. Stattdessen sagt er mit gesenkter Stimme: „Denken Sie an die schlaflosen Nächte der Familienbetriebe, an die Angst eines Inhabers, seinen langjährigen Leuten kündigen zu müssen." Auf der Leinwand laufen dazu Nahaufnahmen sorgenvoller Handwerker.',
      en: 'Press conference held by an industry association against a planned supply-chain law: in front of business journalists, the association\'s spokesperson gives no figures on costs, audit burden or implementation deadlines. Instead he says in a lowered voice: "Think of the sleepless nights of family businesses, of an owner\'s fear of having to lay off people he has worked with for years." On the screen behind him run close-ups of worried tradespeople.',
    },
    options: [
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
      { de: 'Framing (Bezugsrahmen setzen)', en: 'Framing' },
      { de: 'Narrative Persuasion (Erzählstrategie)', en: 'Narrative persuasion' },
      { de: 'Loaded Language (gefärbte Wörter)', en: 'Loaded language' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Emotionale Appelle sprechen gezielt ein Gefühl an — hier Angst und Mitgefühl — und setzen es an die Stelle des Sacharguments, das an dieser Stelle fällig wäre. Der Mechanismus: Ein starkes Gefühl bindet Aufmerksamkeit und Urteil, bevor Zahlen überhaupt geprüft werden; wo keine Kosten- oder Fristendaten genannt werden, füllt das Gefühl die Lücke. Legitim einsetzen: Betroffenheit darf die Tür öffnen — professionell bleibt es, wenn du hinter das Gefühl auch die überprüfbaren Belege stellst, statt sie zu ersetzen. Erkennen und kontern: Frag dich, welches Sachargument hier eigentlich stehen müsste, und stell die konkrete Nachfrage („Welche Mehrkosten entstehen einem Familienbetrieb genau?"); wo nur das Gefühl bleibt, war es das ganze Angebot. Framing wäre die naheliegende Verwechslung — es rückt einen Aspekt in den Vordergrund („Bürokratielast statt Menschenrechte"), arbeitet aber über die Auswahl der Perspektive, nicht über das direkte Auslösen eines Gefühls; hier wird keine Perspektive gesetzt, sondern Angst geweckt. Narrative Persuasion bräuchte eine durchgehende Geschichte mit Figur und Handlungsbogen; hier steht ein Gefühlsappell, keine erzählte Episode. Loaded Language läge in einzelnen gefärbten Wörtern für denselben Sachverhalt — der Sprecher färbt aber keine Begriffe um, er adressiert unmittelbar das Gefühl.',
      en: 'An emotional appeal deliberately targets a feeling — here fear and compassion — and puts it in the place of the factual argument that would be due at this point. The mechanism: a strong feeling captures attention and judgement before any figures are examined; where no cost or deadline data are given, the feeling fills the gap. Used legitimately: emotion may open the door — it stays professional when you place verifiable evidence behind the feeling rather than replacing it. To spot and counter it: ask which factual argument ought to stand here, and put the concrete follow-up question ("What exactly are the extra costs to a family business?"); where only the feeling remains, the feeling was the whole offer. Framing is the obvious confusion — it foregrounds an aspect ("bureaucratic burden rather than human rights"), but it works by selecting a perspective, not by directly triggering a feeling; here no perspective is set, fear is aroused. Narrative persuasion would need a sustained story with a character and an arc; here there is an emotional appeal, not a narrated episode. Loaded language would live in individual coloured words for the same referent — but the speaker relabels no terms, he addresses the feeling directly.',
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
        de: 'Ich behalte den emotionalen Kern — das Thema muss berühren —, koppele ihn aber an eine konkrete, evidenzgestützte Handlungsanweisung: Das Gefühl öffnet die Aufmerksamkeit, der Sachteil trägt das Verhalten.',
        en: 'I keep the emotional core — the topic has to move people — but couple it with a concrete, evidence-based instruction to act: the feeling opens attention, the substance carries the behaviour.',
      },
      {
        de: 'Ich gebe den Entwurf frei und lasse die Bilder eher noch drastischer wählen — je stärker die Angst, desto sicherer die Verhaltensänderung.',
        en: 'I clear the draft and have the images made even more drastic — the stronger the fear, the surer the behaviour change.',
      },
      {
        de: 'Ich streiche jede Emotion und reduziere die Kampagne auf die nüchterne Protokoll-Checkliste an den Waschbecken.',
        en: 'I cut every emotion and reduce the campaign to the dry protocol checklist above the sinks.',
      },
      {
        de: 'Ich ersetze die Angst durch Empörung und richte die Kampagne gegen die frühere Klinikleitung, die das alte Protokoll zu verantworten hatte.',
        en: 'I replace the fear with outrage and aim the campaign at the previous hospital management, who were responsible for the old protocol.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf ist ein reiner emotionaler Appell: Angst tritt an die Stelle des Arguments und lässt den Empfänger ohne Handlungsweg zurück. Genau das ist die Schwäche — Angst ohne konkreten Ausweg erzeugt Abwehr und Verdrängung, nicht Verhalten. Die beste Option nutzt den legitimen Kern (Betroffenheit als Türöffner) und stellt die evidenzgestützte Handlungsanweisung dahinter — so trägt nicht das Gefühl allein die Entscheidung. Den Entwurf noch drastischer zu machen wirkt plausibel, weil starke Emotion tatsächlich hohe Aufmerksamkeit bringt — aber Aufmerksamkeit ist nicht Wirksamkeit; jenseits einer Schwelle kippt Furchtappell ohne Selbstwirksamkeit in Abwehr. Jede Emotion zu streichen wirft den berechtigten Kern weg: Eine reine Checkliste wird überlesen, gerade weil sie niemanden berührt. Angst durch Empörung gegen die alte Leitung zu ersetzen tauscht nur einen Gefühlsappell gegen den nächsten und lenkt zusätzlich vom eigenen Verhalten auf einen Sündenbock ab.',
      en: 'The draft is a pure emotional appeal: fear replaces the argument and leaves the receiver with no path to act. That is precisely the weakness — fear with no concrete way out produces avoidance and denial, not behaviour. The best option uses the legitimate core (concern as a door-opener) and places the evidence-based instruction behind it — so the feeling alone does not carry the decision. Making the draft even more drastic seems plausible because strong emotion really does draw high attention — but attention is not effectiveness; beyond a threshold a fear appeal without a sense of self-efficacy tips into avoidance. Cutting every emotion throws away the legitimate core: a bare checklist gets skimmed past precisely because it moves no one. Replacing fear with outrage at the old management merely swaps one emotional appeal for the next and additionally deflects from one\'s own behaviour onto a scapegoat.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'guilt_appeals', 'scapegoating_othering'],
  },
  {
    id: 'backfill-emotional_appeal-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit diesem Kampagnentext versucht die Brauerei, ___.',
      en: 'Complete the sentence: With this campaign copy, the brewery is trying to ___.',
    },
    scenario: {
      de: 'Marken-Relaunch einer Traditionsbrauerei: Für die Rückkehr zum alten Etikett verzichtet der Kampagnentext auf jede Produktaussage — kein Wort zu Zutaten, Preis oder Geschmack. Er lautet nur: „Weißt du noch, die langen Sommerabende von damals, als noch alles einfacher war? Das kommt jetzt zurück."',
      en: 'Brand relaunch by a traditional brewery: for the return of the old label, the campaign copy drops every product claim — not a word about ingredients, price or taste. It reads only: "Remember those long summer evenings back then, when everything was still simpler? That is coming back now."',
    },
    options: [
      {
        de: 'allein über geweckte Nostalgie und Wärme die rationale Produktbewertung zu übergehen (Emotionale Appelle)',
        en: 'bypass rational product judgement solely by arousing nostalgia and warmth (emotional appeal)',
      },
      {
        de: 'die Marke in eine fortlaufende Geschichte mit Figuren und Handlungsbogen einzubetten (Narrative Persuasion)',
        en: 'embed the brand in a continuous story with characters and an arc (narrative persuasion)',
      },
      {
        de: 'mit vorgeschalteten warmen Reizen das spätere Urteil unbemerkt zu bahnen (Priming)',
        en: 'prime the later judgement unnoticed through warm stimuli placed in advance (priming)',
      },
      {
        de: 'das Produkt in einen bestimmten Bezugsrahmen („einfacher, echter") zu rücken (Framing)',
        en: 'place the product within a particular reference frame ("simpler, more genuine") (framing)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Emotionale Appelle wirken hier über Nostalgie: Das warme Gefühl des „Früher" wird geweckt und auf das Produkt übertragen, ohne dass ein einziges Sachargument fällt. Der Mechanismus: Wo Zutaten, Preis und Geschmack fehlen, entscheidet allein die geweckte Empfindung — das gute Gefühl ersetzt die Bewertung. Legitim einsetzen: Ein Produkt emotional aufzuladen ist erlaubtes Marketing — tragfähig bleibt es, wenn der emotionale Ton eine reale Produkteigenschaft begleitet, statt an ihre Stelle zu treten. Erkennen und kontern: Frag dich, was hier über das Produkt selbst gesagt wird; bleibt die Antwort leer, hat das Gefühl das Argument ersetzt. Narrative Persuasion bräuchte eine ausgeführte Geschichte mit Figur und Verlauf — hier steht ein Stimmungsbild, keine Erzählung. Priming läge vor, wenn ein vorgeschalteter Reiz unbemerkt ein späteres, separates Urteil bahnte; hier ist das Gefühl kein Vorlauf, sondern selbst die Botschaft, offen adressiert. Framing rückte das Produkt in einen bestimmten Deutungsrahmen und argumentierte darin — der Text setzt aber keine Perspektive auf Eigenschaften, er weckt schlicht ein Gefühl.',
      en: 'The emotional appeal here works through nostalgia: the warm feeling of "back then" is aroused and transferred onto the product without a single factual argument being made. The mechanism: where ingredients, price and taste are absent, the aroused sensation alone decides — the good feeling stands in for the evaluation. Used legitimately: charging a product emotionally is permitted marketing — it holds up when the emotional tone accompanies a real product attribute rather than taking its place. To spot and counter it: ask what is actually said about the product itself; if the answer stays empty, the feeling has replaced the argument. Narrative persuasion would need a developed story with a character and a course of events — here there is an atmospheric image, not a narrative. Priming would apply if a stimulus placed in advance unnoticeably shaped a later, separate judgement; here the feeling is not a run-up but is itself the message, addressed openly. Framing would place the product within a particular interpretive frame and argue inside it — but the copy sets no perspective on attributes, it simply arouses a feeling.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'narrative_persuasion', 'priming', 'framing'],
  },
];
