// Welle 5b: 3 Übungen für halo_effect (Halo-Effekt).
// Moderate-Tier, dual-use: Übungen mit doppeltem Takeaway (legitim einsetzen + erkennen/kontern).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bHaloEffect: Exercise[] = [
  {
    id: 'wave5b-halo_effect-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Kandidaten-Debriefing nach dem Interview: Der Personalleiter empfiehlt den Bewerber dem Fachbereich vor allem, weil dessen tadelloses, souveränes Auftreten einen rundum positiven Eindruck hinterlassen habe. Daraus folgert er, der Mann werde auch die fachlich anspruchsvolle Budgetplanung zuverlässig meistern — obwohl genau diese Fähigkeit im Gespräch nie geprüft wurde.',
      en: 'Candidate debrief after the interview: the head of HR recommends the applicant to the department mainly because his impeccable, assured manner left an all-round positive impression. From this he concludes the man will also handle the demanding budget planning reliably — even though that very skill was never tested in the interview.',
    },
    options: [
      { de: 'Halo-Effekt', en: 'Halo effect' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Autorität', en: 'Authority' },
      { de: 'Social Proof (Sozialer Beweis)', en: 'Social Proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Halo-Effekt: Das definierende Merkmal ist der Sprung von einem positiven Gesamteindruck (souveränes Auftreten) auf ein sachlich unabhängiges Urteil (Budgetplanung), das nie geprüft wurde — ein Eindruck in einer Dimension färbt auf eine fremde ab. So setzt du das professionell ein: Ein stimmiger, gepflegter Auftritt öffnet Türen und darf ein erster Pluspunkt sein — legitim bleibt er, solange du die eigentlich entscheidende Fähigkeit anschließend eigenständig belegst statt sie aus dem Eindruck abzuleiten. Daran erkennst du es und so konterst du: Frag bei jedem Lob „Welches konkret gemessene Merkmal stützt dieses Urteil?" und bewerte die entscheidende Kompetenz getrennt vom Gesamteindruck, am besten anhand vorab definierter Kriterien. Die Distraktoren sind echte Cialdini-Nachbarn, die nur bei anderer Konstellation zuträfen: Sympathie (Liking) meint, dass du jemandem, den du magst, eher zustimmst oder einen Gefallen tust — hier geht es nicht um Zustimmung aus Zuneigung, sondern um einen Kompetenzschluss. Autorität läge vor, wenn der Schluss an einem Experten- oder Rangsignal hinge (Titel, Weisung) — es zählt aber der allgemeine Auftritt, kein Autoritätsnachweis. Sozialer Beweis bräuchte den Verweis auf das Verhalten anderer („alle finden ihn geeignet") — der fehlt vollständig, das Urteil stützt sich allein auf den eigenen Eindruck.',
      en: 'Halo effect: the defining feature is the jump from a positive overall impression (an assured manner) to an unrelated judgment (budget planning) that was never tested — an impression in one dimension bleeds onto an unrelated one. Using it professionally: a coherent, polished appearance opens doors and may count as a first plus — it stays legitimate as long as you then substantiate the decisive skill independently instead of deriving it from the impression. Recognising and countering it: for every piece of praise ask "which concretely measured attribute backs this judgment?" and assess the decisive competence separately from the overall impression, ideally against criteria defined in advance. The distractors are genuine Cialdini neighbours that would only fit a different set of circumstances: liking means you more readily agree with, or do a favour for, someone you like — here it is not about agreement from affection but a competence inference. Authority would apply if the conclusion hinged on an expert or rank cue (a title, an instruction) — but what counts here is the general demeanour, not a proof of authority. Social proof would require a reference to others\' behaviour ("everyone finds him suitable") — that is entirely absent; the judgment rests solely on one\'s own impression.',
    },
    points: 10,
    primaryTechniqueId: 'halo_effect',
    relatedTechniques: ['halo_effect', 'liking', 'authority', 'social_proof'],
  },
  {
    id: 'wave5b-halo_effect-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikationsabteilung und sitzt in der Auswahlrunde für eine neue Leadagentur. Die Runde neigt klar dem Anbieter zu, dessen Pitch-Deck optisch herausragend und dessen Vortrag mitreißend war; auf dieser Basis gilt er auch als der strategisch stärkste. Die vorgelegten Strategiekonzepte hat aber noch niemand im Detail geprüft.',
      en: 'You head the communications department and sit on the selection panel for a new lead agency. The room clearly leans toward the provider whose pitch deck was visually outstanding and whose delivery was captivating; on that basis he also counts as the strategically strongest. Yet no one has examined the submitted strategy concepts in detail.',
    },
    options: [
      {
        de: 'Ich folge dem Eindruck der Runde: Ein Team, das einen so brillanten Pitch abliefert, beherrscht auch die Strategie — die Präsentationsqualität ist ein verlässlicher Indikator für die inhaltliche Qualität.',
        en: 'I go with the room\'s impression: a team that delivers such a brilliant pitch will master the strategy too — presentation quality is a reliable indicator of substantive quality.',
      },
      {
        de: 'Ich stimme gerade wegen des glänzenden Pitchs gegen den Favoriten — wer so viel in Optik investiert, hat inhaltlich meist wenig zu bieten.',
        en: 'I vote against the favourite precisely because of the polished pitch — whoever invests so much in looks usually has little to offer in substance.',
      },
      {
        de: 'Ich trenne die Bewertungsdimensionen: Die Strategiekonzepte aller Anbieter lasse ich anhand vorab definierter Kriterien und möglichst blind zur Präsentationsform bewerten, damit die Pitch-Brillanz das Urteil über die Strategie nicht einfärbt.',
        en: 'I separate the evaluation dimensions: I have every provider\'s strategy concept assessed against criteria defined in advance and, as far as possible, blind to the presentation form, so the pitch brilliance does not colour the judgment of the strategy.',
      },
      {
        de: 'Ich vertage die Entscheidung und hole ein externes Gutachten ein, weil sich die inhaltliche Qualität einer Agentur intern ohnehin nicht beurteilen lässt.',
        en: 'I postpone the decision and commission an external appraisal, because an agency\'s substantive quality cannot be judged internally anyway.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Mechanismus: Ein starker Eindruck in einer Dimension (Pitch-Optik, Vortrag) strahlt auf eine sachfremde aus (Strategiequalität) — der Halo lässt die glänzende Form für belegte Substanz durchgehen, obwohl die Konzepte ungeprüft sind. So nutzt du die Wirkung professionell: Eine überzeugende Präsentation ist ein legitimer Pluspunkt für die Disziplin „Präsentieren" und darf dort zählen — nur eben nicht als Ersatz für die Bewertung der Strategie. Erkennen und kontern: Trenne die Dimensionen und bewerte die entscheidende anhand vorab definierter Kriterien möglichst blind zum Eindruck; genau das leistet Option 3, indem sie die Strategie unabhängig von der Pitch-Brillanz prüft. Option 1 wirkt plausibel, weil ein guter Pitch echtes Können zeigt — aber eben im Präsentieren, nicht zwingend in der Strategie; das ist der Halo in Reinform. Option 2 klingt kritisch und abgeklärt, kippt aber nur in den umgekehrten Halo (Horn-Effekt): Aus „poliert" wird pauschal „inhaltsleer" geschlossen — dieselbe sachfremde Übertragung, nur mit negativem Vorzeichen. Option 4 wirkt gründlich, ist aber eine Überkorrektur und Kompetenzabgabe: Die Strategie lässt sich intern sehr wohl anhand klarer Kriterien beurteilen — das Problem ist nicht fehlende Prüfbarkeit, sondern dass noch niemand getrennt geprüft hat.',
      en: 'Mechanism: a strong impression in one dimension (pitch visuals, delivery) radiates onto an unrelated one (strategy quality) — the halo lets the polished form pass for proven substance, even though the concepts are unexamined. Using the effect professionally: a convincing presentation is a legitimate plus for the discipline of "presenting" and may count there — just not as a substitute for evaluating the strategy. Recognising and countering it: separate the dimensions and assess the decisive one against criteria defined in advance, as far as possible blind to the impression; that is exactly what option 3 does by examining the strategy independently of the pitch brilliance. Option 1 looks plausible because a good pitch shows real skill — but at presenting, not necessarily at strategy; that is the halo in pure form. Option 2 sounds critical and level-headed but merely flips into the reverse halo (horn effect): "polished" is taken to mean "hollow" — the same unrelated transfer, only in reverse. Option 4 looks thorough but is an overcorrection and an abdication: the strategy can perfectly well be judged internally against clear criteria — the problem is not a lack of examinability but that no one has yet assessed it separately.',
    },
    points: 10,
    primaryTechniqueId: 'halo_effect',
    relatedTechniques: ['halo_effect', 'liking'],
  },
  {
    id: 'wave5b-halo_effect-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vervollständige: Hier wirkt der ___, weil ein einzelnes positives Merkmal auf ein sachlich unabhängiges Urteil abfärbt.',
      en: 'Complete the sentence: This is the ___ at work, because a single positive attribute bleeds onto an unrelated judgment.',
    },
    scenario: {
      de: 'Redaktionskonferenz eines Fachmagazins: Ein Tester begründet seine Spitzenbewertung für ein Küchengerät damit, die edle Verpackung und das preisgekrönte Design machten einen so hochwertigen Eindruck, dass er auch die — gar nicht gemessene — Haltbarkeit und Energieeffizienz in der Spitzengruppe verortet.',
      en: 'Editorial meeting at a trade magazine: a reviewer justifies his top rating for a kitchen appliance by saying the elegant packaging and award-winning design make such a high-quality impression that he places its — entirely unmeasured — durability and energy efficiency in the top tier too.',
    },
    options: [
      { de: 'Halo-Effekt', en: 'Halo effect' },
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Social Proof (Sozialer Beweis)', en: 'Social Proof' },
      { de: 'Bestätigungsfehler', en: 'Confirmation bias' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Halo-Effekt: Kennzeichen ist die Übertragung eines Eindrucks aus einer Dimension (Verpackung, Design) auf sachfremde, ungemessene Eigenschaften (Haltbarkeit, Energieeffizienz) — „sieht hochwertig aus" wird zu „ist überall hochwertig". So nutzt du das sauber: Gutes Design darf im Testbericht als eigener Punkt gewürdigt werden — nur muss jede weitere Eigenschaft ihre eigene Messung bekommen, statt aus dem Designeindruck abgeleitet zu werden. Daran erkennst du es: Wo ein Urteil über ein Merkmal fällt, das gar nicht erhoben wurde, und sich allein auf einen positiven Gesamteindruck stützt, liegt ein Halo vor — dann bestehst du auf getrennter Messung. Ankereffekt wäre es, wenn ein zuerst genannter Zahlenwert (etwa ein hoher Listenpreis) die späteren Schätzungen verschöbe — hier gibt es keinen solchen Zahlenanker, sondern einen Qualitätseindruck. Sozialer Beweis bräuchte den Verweis auf andere („die meisten Tester loben es") — der fehlt, das Urteil ist das des einzelnen Testers. Bestätigungsfehler läge vor, wenn der Tester eine vorab gefasste Meinung durch selektive Belege stützte — hier gibt es keine Vorannahme, die bestätigt wird, sondern einen Eindruck, der frisch auf fremde Merkmale überspringt.',
      en: 'Halo effect: its hallmark is the transfer of an impression from one dimension (packaging, design) onto unrelated, unmeasured attributes (durability, energy efficiency) — "looks high-quality" becomes "is high-quality across the board". Using it cleanly: good design may be credited as its own point in a review — but every further attribute must get its own measurement rather than being inferred from the design impression. Recognising it: wherever a judgment falls on an attribute that was never actually measured and rests solely on a positive overall impression, you have a halo — then insist on separate measurement. Anchoring would be the case if a first-stated number (say, a high list price) shifted the later estimates — here there is no such numeric anchor, only a quality impression. Social proof would require a reference to others ("most reviewers praise it") — that is missing; the judgment is the individual reviewer\'s. Confirmation bias would apply if the reviewer propped up a preformed opinion with selective evidence — here there is no prior belief being confirmed, but an impression freshly spilling over onto extraneous attributes.',
    },
    points: 10,
    primaryTechniqueId: 'halo_effect',
    relatedTechniques: ['halo_effect', 'anchoring', 'social_proof', 'confirmation_bias'],
  },
];
