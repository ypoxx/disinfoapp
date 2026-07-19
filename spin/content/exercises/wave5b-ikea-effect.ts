// Welle 5b: 3 Übungen für ikea_effect (IKEA-Effekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bIkeaEffect: Exercise[] = [
  {
    id: 'wave5b-ikea_effect-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Beraterin ein?',
      en: 'Which technique is the consultant using?',
    },
    scenario: {
      de: 'Neupositionierung eines Versicherers: Statt ein fertiges Botschaftshaus abzuliefern, moderiert die externe Beraterin einen zweitägigen Workshop, in dem das Inhouse-Kommunikationsteam die Kernbotschaften Zeile für Zeile selbst am Whiteboard erarbeitet. Wochen später, in der Freigaberunde, verteidigt das Team sein selbst gebautes Framework gegen einen extern zugelieferten, in Tests messbar schärferen Entwurf — mit dem Argument, das eigene sei „näher an uns dran". Die Beraterin hat den Selbstbau bewusst so angelegt.',
      en: 'Repositioning an insurer: instead of handing over a finished messaging house, the external consultant runs a two-day workshop in which the in-house communications team works out the core messages line by line on the whiteboard themselves. Weeks later, at sign-off, the team defends its self-built framework against an externally supplied draft that tested measurably sharper — arguing that their own is "closer to us". The consultant designed the self-build deliberately.',
    },
    options: [
      { de: 'IKEA-Effekt', en: 'IKEA effect' },
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
      { de: 'Sunk-Cost-Effekt / Eskalation des Commitments', en: 'Sunk cost / escalation of commitment' },
      { de: 'Konsistenz-Prinzip', en: 'Consistency principle' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'IKEA-Effekt: Der Wert des eigenen Frameworks steigt in der Wahrnehmung des Teams durch die selbst geleistete Bau-Arbeit — zwei Tage Whiteboard —, nicht durch nachweisbare Qualität; genau deshalb schlägt das Selbstgebaute den messbar schärferen Fremdentwurf. Mechanismus: Wer etwas mit eigener Hand zusammensetzt, bindet Arbeit und Identität hinein und bewertet das Ergebnis höher. Legitim einsetzen: Co-Creation erzeugt echte Bindung und Umsetzungswillen — professionell bleibt es, wenn du die Beteiligung nutzt und das Ergebnis trotzdem an externen Kriterien misst, statt Eigenbau mit Qualität zu verwechseln. Erkennen und kontern: Lass beide Entwürfe anonymisiert und ohne „das ist eurer" gegen dieselben Wirkungskriterien antreten — trennt die investierte Arbeit von der Frage, was tatsächlich besser trägt. Der Endowment-Effekt ist der nächste Nachbar und wirkt plausibel, meint aber die Aufwertung durch bloßen Besitz („das gehört uns") — hier zählt nicht das Haben, sondern die selbst geleistete Arbeit. Der Sunk-Cost-Effekt läge vor, wenn das Team weitermachte, nur weil schon zwei Tage investiert sind — hier geht es aber um die Höherbewertung des Ergebnisses, nicht um das Wegwerfen bereits versenkter Kosten. Das Konsistenz-Prinzip meint den Druck, zu einer früher geäußerten Festlegung zu passen — hier gab es keine öffentliche Zusage, sondern eigene Bau-Arbeit als Werttreiber.',
      en: 'IKEA effect: the team perceives its own framework as more valuable because of the building work it put in — two days at the whiteboard — not because of demonstrable quality; that is exactly why the self-built version beats the measurably sharper external draft. Mechanism: assembling something with your own hands folds your labour and identity into it, and you rate the result higher. Used legitimately: co-creation produces genuine buy-in and follow-through — it stays professional when you use the participation yet still judge the result against external criteria, rather than mistaking self-build for quality. To spot and counter it: put both drafts up anonymised, without the "this one is yours" label, against the same impact criteria — that separates the invested labour from the question of what actually works better. The endowment effect is the closest neighbour and looks plausible, but it means the mark-up from mere ownership ("this is ours") — here it is not the having but the labour performed that counts. Sunk cost would apply if the team carried on simply because two days are already spent — but this is about overvaluing the result, not about refusing to discard costs already sunk. The consistency principle means the pressure to align with a previously stated commitment — here there was no public pledge, only self-performed building work as the value driver.',
    },
    points: 10,
    primaryTechniqueId: 'ikea_effect',
    relatedTechniques: ['ikea_effect', 'endowment_effect', 'sunk_cost_escalation', 'consistency'],
  },
  {
    id: 'wave5b-ikea_effect-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation und hast die Belegschaft in Schreibwerkstätten die neuen Unternehmenswerte selbst mitformulieren lassen. Vor dem Rollout legt die Agentur eine sprachlich deutlich präzisere, wirkungsstärker getestete Fassung derselben Werte vor. Im Team formiert sich Widerstand: „Aber das sind dann nicht mehr unsere Werte — die haben wir doch selbst geschrieben."',
      en: 'You lead corporate communications and had staff co-write the new company values themselves in writing workshops. Before rollout, the agency presents a markedly sharper, better-tested wording of the same values. Resistance forms in the team: "But then these aren\'t our values any more — we wrote them ourselves."',
    },
    options: [
      {
        de: 'Ich trenne die Bewertung von der Autorenschaft: Ich lasse beide Fassungen anonymisiert an denselben Kriterien (Verständlichkeit, Trennschärfe, Wirkungstest) messen und übernehme die stärkere. Die Mitschreib-Arbeit sichere ich separat, indem ich die Beteiligung sichtbar würdige — aber sie entscheidet nicht über die Textqualität.',
        en: 'I separate the judgement from the authorship: I have both versions assessed anonymised against the same criteria (clarity, distinctiveness, impact test) and adopt the stronger one. I secure the co-writing effort separately by visibly crediting the participation — but it does not decide the quality of the text.',
      },
      {
        de: 'Ich behalte die selbst geschriebene Fassung: Nach der investierten Eigenarbeit wäre ein Wechsel zur Agenturversion ein Affront gegen das Team — die Identifikation zählt hier mehr als der Feinschliff.',
        en: 'I keep the self-written version: after the effort invested, switching to the agency wording would be an affront to the team — identification matters more here than the polish.',
      },
      {
        de: 'Ich lasse das Team in einer weiteren Runde noch mehr selbst umschreiben, damit am Ende so viel Eigenarbeit drinsteckt, dass die Agenturfassung gar nicht erst zur Debatte steht.',
        en: 'I have the team rewrite even more themselves in another round, so that in the end so much of their own work is baked in that the agency version never even comes up for debate.',
      },
      {
        de: 'Ich setze die Agenturfassung ohne Kommentar durch und verweise darauf, dass die Testwerte objektiv besser sind — die Gefühle zur Eigenarbeit sind kein Sachargument.',
        en: 'I push the agency version through without comment, pointing out that the test scores are objectively better — feelings about the work they put in are not a substantive argument.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Im Team wirkt der IKEA-Effekt: „Die haben wir selbst geschrieben" macht die investierte Schreib-Arbeit zum Werttreiber und lässt die selbst gebaute Fassung höher erscheinen als die messbar stärkere. Mechanismus: Eigenarbeit bindet Identität ein und hebt die Bewertung des Ergebnisses — unabhängig von dessen Qualität. Die beste Option trennt sauber: Textqualität wird anonymisiert an festen Kriterien entschieden, während die Beteiligung als eigener Wert gesichert und gewürdigt wird — so nutzt du die echte Bindung aus der Co-Creation, ohne Eigenbau mit Güte zu verwechseln. Legitim einsetzen: Mitschreiben lassen ist ein starker Hebel für Akzeptanz und Umsetzung — professionell bleibt es, wenn das Ergebnis trotzdem an Wirkung gemessen wird. Erkennen und kontern: Frag bei jedem „aber das ist unseres" nach, ob das Ergebnis auch ohne Autorenschild überzeugen würde. Die selbst geschriebene Fassung zu behalten (Option 2) wirkt plausibel, weil Identifikation real wertvoll ist — sie ersetzt aber die Qualitätsfrage durch das Zugehörigkeitsgefühl und opfert nachweisbare Wirkung. Noch mehr selbst umschreiben zu lassen (Option 3) verstärkt den Effekt gezielt, statt ihn zu entschärfen — du baust die Bindung an eine schwächere Fassung nur weiter aus. Die Agenturfassung ohne Kommentar durchzusetzen (Option 4) trifft zwar die Qualitätsentscheidung, wirft aber die reale Bindung weg und provoziert Widerstand im Rollout — die bessere Lösung würdigt die Arbeit und entscheidet trotzdem nach Kriterien.',
      en: 'The team is under the IKEA effect: "we wrote them ourselves" turns the writing effort into the value driver and makes the self-built version look better than the measurably stronger one. Mechanism: own labour folds in identity and lifts the rating of the result — regardless of its quality. The best option separates cleanly: text quality is decided anonymised against fixed criteria, while the participation is secured and credited as a value in its own right — that way you harness the genuine buy-in from co-creation without mistaking self-build for merit. Used legitimately: letting people co-write is a strong lever for acceptance and follow-through — it stays professional when the result is still measured by impact. To spot and counter it: whenever you hear "but this is ours", ask whether the result would convince without the authorship label. Keeping the self-written version (option 2) looks plausible because identification is genuinely valuable — but it swaps the quality question for the sense of belonging and sacrifices demonstrable impact. Having them rewrite even more themselves (option 3) deliberately amplifies the effect instead of defusing it — you only deepen the attachment to a weaker version. Pushing the agency version through without comment (option 4) does make the quality call but throws away the real buy-in and invites resistance at rollout — the better solution credits the work and still decides on the criteria.',
    },
    points: 10,
    primaryTechniqueId: 'ikea_effect',
    relatedTechniques: ['ikea_effect', 'endowment_effect'],
  },
  {
    id: 'wave5b-ikea_effect-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Abschlussgespräch eines SaaS-Anbieters: Der Kundenkontakt schildert der Marketingleiterin, dass ihr Team im Testmonat den Redaktionskalender komplett selbst aufgebaut hat — Workflows, Vorlagen, Freigabestufen alles per Hand angelegt. Beim Preisgespräch bewertet die Leiterin das Tool spürbar höher und mag nicht wechseln, gerade weil ihr Team die Konfiguration mit eigener Arbeit selbst erstellt hat — ein baugleiches Konkurrenzprodukt mit fertiger Standardkonfiguration lässt sie links liegen.',
      en: 'A SaaS vendor\'s closing call: the account contact notes to the marketing lead that during the trial month her team built the entire editorial calendar themselves — workflows, templates, and approval stages all set up by hand. At the pricing stage the lead rates the tool noticeably higher and is reluctant to switch, precisely because her team created the configuration through its own work — she ignores an equivalent competitor product that ships with a ready-made standard setup.',
    },
    options: [
      { de: 'IKEA-Effekt', en: 'IKEA effect' },
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
      { de: 'Sunk-Cost-Effekt / Eskalation des Commitments', en: 'Sunk cost / escalation of commitment' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'IKEA-Effekt: Die Aufwertung kommt aus der selbst geleisteten Aufbau-Arbeit — Workflows, Vorlagen und Freigaben von Hand angelegt —, weshalb das Team gerade die selbst konfigurierte Lösung dem baugleichen, fertig eingerichteten Wettbewerber vorzieht. Mechanismus: Die eigene Bau-Arbeit bindet Identität in das Ergebnis und hebt dessen Bewertung. Legitim einsetzen: Ein Onboarding, in dem Kundinnen ihre Umgebung selbst aufbauen, erzeugt echte Bindung — professionell bleibt es, wenn die Kaufentscheidung an Leistung und Preis gemessen wird, nicht am hineingesteckten Aufwand. Erkennen und kontern: Frag dich „Würde ich dieses Tool auch wählen, wenn ein Dienstleister die Einrichtung übernommen hätte?" — das löst den Wert von der eigenen Arbeit. Der Endowment-Effekt liegt nah, weil der Kalender sich wie „ihrer" anfühlt — er bezeichnet aber die Aufwertung durch bloßen Besitz; hier ist es ausdrücklich die selbst geleistete Konfigurationsarbeit, nicht das Haben allein. Der Sunk-Cost-Effekt läge vor, wenn sie bei dem Tool bliebe, nur um den Aufbaumonat nicht abzuschreiben — hier bewertet sie das Ergebnis höher, statt versunkene Kosten hinterherzuwerfen.',
      en: 'IKEA effect: the mark-up comes from the set-up work performed — workflows, templates, and approvals built by hand — which is why the team prefers its self-configured solution to the equivalent, pre-configured competitor. Mechanism: the own building work folds identity into the result and lifts its rating. Used legitimately: an onboarding in which customers build their own environment creates genuine attachment — it stays professional when the purchase is judged on performance and price, not on the effort poured in. To spot and counter it: ask "Would I still choose this tool if a service provider had done the set-up for me?" — that detaches the value from your own labour. The endowment effect is close because the calendar feels like "theirs", but it denotes the mark-up from mere ownership; here it is explicitly the configuration work performed, not the having alone. Sunk cost would apply if she stayed with the tool only to avoid writing off the set-up month — here she rates the result higher rather than throwing good money after bad.',
    },
    points: 10,
    primaryTechniqueId: 'ikea_effect',
    relatedTechniques: ['ikea_effect', 'endowment_effect', 'sunk_cost_escalation'],
  },
];
