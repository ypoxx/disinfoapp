// Welle wave5a: 3 Übungen für motte_and_bailey.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen; Fokus auf Muster & Kontern.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aMotteAndBailey: Exercise[] = [
  {
    id: 'wave5a-motte_and_bailey-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik setzt der CEO hier ein?',
      en: 'Which technique is the CEO using here?',
    },
    scenario: {
      de: 'Produkt-Launch eines HR-Software-Anbieters: Der CEO sagt auf der Bühne „Unsere KI trifft Personalentscheidungen objektiv und diskriminierungsfrei." Als eine Fachjournalistin nach Bias-Audits fragt, antwortet er: „Ich meinte nur, dass das System keine Namen und keine Fotos sieht — mehr habe ich nie behauptet." Im Investoren-Deck am Nachmittag steht wieder „objektive, diskriminierungsfreie Entscheidungen".',
      en: 'Product launch of an HR-software vendor: on stage the CEO says "Our AI makes objective, discrimination-free hiring decisions." When a trade journalist asks about bias audits, he answers: "I only meant that the system sees no names and no photos — I never claimed more than that." That afternoon the investor deck again reads "objective, discrimination-free decisions".',
    },
    options: [
      { de: 'Motte-and-Bailey', en: 'Motte-and-bailey' },
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Moving the Goalposts (nachträgliche Umdeutung)', en: 'Moving the goalposts (retroactive redefinition)' },
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Motte-and-Bailey: Öffentlich steht die weitreichende These („objektiv und diskriminierungsfrei", die Bailey); unter Nachfrage schrumpft sie auf eine triviale, kaum bestreitbare Variante („sieht keine Namen und Fotos", die Motte) — und taucht im Deck sofort wieder in Vollversion auf. Genau dieser Wechsel und die Rückkehr zur starken These sind der Mechanismus: Die harmlose Lesart dient nur der Verteidigung, geworben wird mit der starken. Der ehrliche Zwilling: sich auf EINE Aussage festlegen, die auch der Nachfrage standhält — oder die Vision offen als Vision kennzeichnen. Erkennen und kontern: Leg die beiden Lesarten nebeneinander und nagle sie fest („Gilt ‚diskriminierungsfrei’ als Zusage oder nur ‚sieht keine Namen’? Was steht im Deck?"). Äquivokation wirkt plausibel, weil auch hier ein Begriff dehnbar ist — sie nutzt aber die Mehrdeutigkeit eines Wortes innerhalb einer Argumentation, während hier zwischen zwei ganzen Positionen gewechselt und die starke danach wieder eingenommen wird. Moving the Goalposts liegt nahe, weil auch dort die Reaktion unter Druck verschoben wird — dort verschiebt der Sprecher aber die Kriterien, was als Beleg zählen soll, statt die eigene These zu verkleinern; hier bleiben die Kriterien gleich, der Anspruch schrumpft und kehrt danach unverändert zurück. Paltering wäre es, wenn die Motte („sieht keine Namen") als wörtlich wahre Einzelaussage einen falschen Gesamteindruck erzeugte — der Hebel ist hier aber nicht die einzelne Aussage, sondern der Wechsel zwischen starker und trivialer Version.',
      en: 'Motte-and-bailey: in public the sweeping claim stands ("objective and discrimination-free" — the bailey); under questioning it shrinks to a trivial, near-undeniable version ("sees no names or photos" — the motte) — and in the deck it immediately reappears at full strength. That switch and the return to the strong claim are the mechanism: the harmless reading serves only for defence, the marketing rides on the strong one. The honest sibling: commit to ONE claim that survives follow-up — or label the vision openly as a vision. To spot and counter it, lay the two readings side by side and pin them down ("Does \'discrimination-free\' count as a commitment, or only \'sees no names\'? What does the deck say?"). Equivocation seems plausible because a term is stretched here too — but it exploits the ambiguity of a single word within an argument, whereas here the speaker switches between two whole positions and reoccupies the strong one afterwards. Moving the goalposts seems close because the response shifts under pressure too — but there the speaker moves the criteria for what would count as proof, rather than shrinking his own claim; here the criteria stay put, the claim shrinks and then returns unchanged. Paltering would be it if the motte ("sees no names") were a single literally-true statement leaving a false overall impression — but the lever here is not the individual statement, it is the switch between the strong and trivial version.',
    },
    points: 10,
    primaryTechniqueId: 'motte_and_bailey',
    relatedTechniques: ['motte_and_bailey', 'equivocation', 'paltering_half_truth'],
  },
  {
    id: 'wave5a-motte_and_bailey-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Wirtschaftsverbands. In einem Namensbeitrag hat euer Präsident geschrieben „Die Digitalisierung macht Millionen Jobs überflüssig." Ein Redakteur konfrontiert ihn mit Gegenstudien; der Präsident weicht aus: „Ich meinte doch nur, dass sich Berufsbilder verändern." Danach kündigt er an, die Millionen-Jobs-These im nächsten TV-Interview erneut zu bringen.',
      en: 'You run communications for a business association. In a bylined op-ed your president wrote "Digitalisation makes millions of jobs redundant." An editor confronts him with counter-studies; the president dodges: "I only meant that job profiles are changing." He then announces he will repeat the millions-of-jobs claim in his next TV interview.',
    },
    options: [
      {
        de: 'Ich lege ihm offen, dass die starke These und die Rückzugsformel zwei verschiedene Aussagen sind, und lasse ihn sich vor dem Interview auf EINE belegbare Version festlegen, die er auch unter Nachfrage hält.',
        en: 'I show him plainly that the strong claim and the fallback formula are two different statements, and have him commit before the interview to ONE evidence-backed version he will hold to even under questioning.',
      },
      {
        de: 'Ich empfehle, mit der starken These zu öffnen und die abgeschwächte Version bereitzuhalten, falls jemand nachhakt — so bleibt die Botschaft wirkungsvoll und trotzdem verteidigbar.',
        en: 'I advise opening with the strong claim and keeping the softened version ready in case anyone pushes back — that keeps the message punchy yet defensible.',
      },
      {
        de: 'Ich lasse beide Aussagen stehen: Da jede für sich genommen vertretbar ist, ist der Wechsel zwischen ihnen kommunikativ unproblematisch.',
        en: 'I let both statements stand: since each is defensible on its own, switching between them is communicatively harmless.',
      },
      {
        de: 'Ich streiche die Job-Aussage komplett und lasse ihn im Interview ausschließlich über die Chancen der Digitalisierung sprechen.',
        en: 'I cut the jobs statement entirely and have him speak in the interview only about the opportunities of digitalisation.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Manöver des Präsidenten ist Motte-and-Bailey: geworben wird mit der drastischen These (Millionen Jobs weg, die Bailey), verteidigt wird die triviale (Berufsbilder verändern sich, die Motte) — und die starke soll danach wieder her. Die beste Option greift genau den Hebel an: Sie trennt die beiden Lesarten und zwingt zur Festlegung auf eine Aussage, die auch der Nachfrage standhält. Damit verschwindet der Spielraum, je nach Druck zwischen groß und klein zu springen. Option zwei wirkt professionell, weil sie „wirkungsvoll und verteidigbar" verspricht — sie beschreibt aber wörtlich, wie man Motte-and-Bailey einsetzt; spätestens wenn Redaktion oder Publikum beide Versionen nebeneinanderlegen, kippt es in einen Glaubwürdigkeitsschaden. „Beide stehen lassen" verkennt, dass nicht die einzelnen Sätze das Problem sind, sondern der ungekennzeichnete Wechsel zwischen ihnen. Die Job-Aussage ganz zu streichen ist Überkorrektur: Sie nimmt dem Präsidenten die Position, statt sie belastbar zu machen, und wirkt wie ein Rückzug unter Druck.',
      en: 'The president\'s move is motte-and-bailey: the marketing rides the drastic claim (millions of jobs gone — the bailey), the defence falls back on the trivial one (job profiles are changing — the motte) — and the strong one is meant to return. The best option attacks exactly that lever: it separates the two readings and forces a commitment to one claim that survives follow-up, removing the room to jump between big and small depending on pressure. Option two sounds professional because it promises "punchy yet defensible" — but it literally describes how to run motte-and-bailey; the moment a newsroom or audience lays both versions side by side, it turns into a credibility hit. "Let both stand" misses that the problem is not the individual sentences but the unmarked switch between them. Cutting the jobs statement entirely is over-correction: it strips the president of his position instead of making it robust, and reads as a retreat under pressure.',
    },
    points: 10,
    primaryTechniqueId: 'motte_and_bailey',
    relatedTechniques: ['motte_and_bailey'],
  },
  {
    id: 'wave5a-motte_and_bailey-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit diesem Manöver ___.',
      en: 'Complete the sentence: With this manoeuvre, ___.',
    },
    scenario: {
      de: 'Kundentermin einer Werbeagentur: Der Kreativchef verspricht der Marketingleiterin „Diese Kampagne verdoppelt eure Reichweite." Als sie nach Referenzwerten fragt, sagt er: „Ich meine natürlich das Potenzial — dass gute Kreation die Reichweite erhöhen kann, ist ja unstrittig." Beim Budgetgespräch am Ende nennt er die Verdopplung erneut als Zusage.',
      en: 'Agency client meeting: the creative director promises the marketing lead "This campaign will double your reach." When she asks for reference figures, he says: "I mean the potential, of course — that good creative can increase reach is undisputed." In the closing budget talk he again names the doubling as a commitment.',
    },
    options: [
      {
        de: 'verteidigt der Kreativchef eine starke Zusage, indem er bei Widerspruch auf eine triviale Lesart ausweicht und die starke Zusage danach wieder aufnimmt (Motte-and-Bailey)',
        en: 'the creative director defends a strong promise by retreating to a trivial reading when challenged, then reoccupies the strong promise afterwards (motte-and-bailey)',
      },
      {
        de: 'nutzt der Kreativchef ein mehrdeutiges Wort innerhalb einer Argumentation in wechselnder Bedeutung, damit der Schluss gültig erscheint (Äquivokation)',
        en: 'the creative director uses an ambiguous word in shifting meanings within one argument so the conclusion looks valid (equivocation)',
      },
      {
        de: 'verschiebt der Kreativchef unter Nachfrage die Kriterien, was als Beleg für seine Zusage gelten soll, sodass sie nie einlösbar wird (Moving the Goalposts / nachträgliche Umdeutung)',
        en: 'when pressed, the creative director shifts the criteria for what counts as proof of his promise, so it can never be pinned down (moving the goalposts)',
      },
      {
        de: 'täuscht der Kreativchef mit einer wörtlich wahren Einzelaussage einen falschen Gesamteindruck vor, indem er das Entscheidende weglässt (Paltering / Halbwahrheit)',
        en: 'the creative director deceives with a single literally-true statement that leaves a false overall impression by omitting the decisive fact (paltering / half-truth)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Motte-and-Bailey: „verdoppelt eure Reichweite" ist die weitreichende Zusage (Bailey), „gute Kreation kann die Reichweite erhöhen" die kaum bestreitbare Rückzugsposition (Motte). Der Kreativchef verteidigt mit der schwachen und verkauft mit der starken — erkennbar daran, dass die Verdopplung im Budgetgespräch wieder als Zusage auftaucht. Legitim wäre, das Potenzial offen als Szenario zu kennzeichnen oder eine belastbare Zielgröße zu nennen und diese durchzuhalten. Erkennen und kontern: Halte die Zusage schriftlich fest und stell die Prüffrage („Steht die Verdopplung als messbares Ziel im Vertrag — ja oder nein?"). Äquivokation liegt nahe, weil „Reichweite erhöhen" und „verdoppeln" verwandt klingen — dort wechselt aber ein einzelnes Wort unbemerkt die Bedeutung, damit ein Schluss gültig erscheint; hier wird zwischen zwei ganzen Zusagen gesprungen und die starke wiederaufgenommen. Moving the Goalposts wäre es, wenn er unter Nachfrage die Kriterien verschöbe, was überhaupt als Beleg zählt — er verkleinert aber die Zusage selbst und nimmt sie später unverändert wieder auf. Paltering bräuchte eine wörtlich wahre Einzelaussage, die durch Weglassen täuscht — hier ist nicht das Weglassen der Hebel, sondern der Wechsel zwischen starker und trivialer Zusage.',
      en: 'Motte-and-bailey: "double your reach" is the sweeping promise (the bailey), "good creative can increase reach" the near-undeniable fallback (the motte). The creative director defends with the weak one and sells with the strong one — visible in the doubling resurfacing as a commitment in the budget talk. The legitimate version would label the potential openly as a scenario, or name a robust target figure and hold to it. To spot and counter it: put the promise in writing and ask the test question ("Does the doubling appear as a measurable target in the contract — yes or no?"). Equivocation seems close because "increase reach" and "double" sound related — but there a single word quietly shifts meaning so a conclusion looks valid, whereas here the speaker jumps between two whole promises and reoccupies the strong one. Moving the goalposts would be shifting, under pressure, the criteria for what counts as proof at all — but he shrinks the promise itself and later reoccupies it unchanged. Paltering would need a single literally-true statement that deceives by omission — here the lever is not the omission but the switch between the strong and trivial promise.',
    },
    points: 10,
    primaryTechniqueId: 'motte_and_bailey',
    relatedTechniques: ['motte_and_bailey', 'equivocation', 'paltering_half_truth'],
  },
];
