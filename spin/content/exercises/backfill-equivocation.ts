// Backfill: 3 Übungen für equivocation (Äquivokation).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillEquivocation: Exercise[] = [
  {
    id: 'backfill-equivocation-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der CTO ein?',
      en: 'Which technique is the CTO using?',
    },
    scenario: {
      de: 'Interne Townhall eines Softwarehauses: Der CTO stellt den neuen KI-Assistenten vor und wirbt dafür, ihn breit einzusetzen: „Der Assistent ist absolut sicher — er hat jeden Penetrationstest und jedes Datenschutzaudit bestanden. Und weil er sicher ist, könnt ihr seinen fachlichen Rat bedenkenlos übernehmen." Im ersten Satz heißt „sicher" gegen Angriffe und Datenlecks geschützt; im Schluss daraus trägt dasselbe Wort die Bedeutung „inhaltlich verlässlich, unbedenklich" — der Übergang bleibt unausgesprochen.',
      en: 'A software company\'s internal town hall: the CTO introduces the new AI assistant and urges everyone to adopt it widely: "The assistant is completely safe — it has passed every penetration test and data-protection audit. And because it is safe, you can adopt its expert advice without hesitation." In the first sentence "safe" means protected against attacks and data leaks; in the conclusion drawn from it the same word carries the meaning "reliable in what it says, harmless to act on" — the switch is never spoken aloud.',
    },
    options: [
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Motte-and-Bailey', en: 'Motte-and-bailey' },
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Äquivokation: Zwei Bedeutungen desselben Wortes werden zu einem Schluss verkettet. Der Satz „weil er sicher ist, könnt ihr dem Rat folgen" trägt nur, wenn „sicher" unterwegs von „gegen Angriffe geschützt" zu „inhaltlich verlässlich" gleitet — ein bestandenes Sicherheitsaudit sagt über die Qualität der Ratschläge nichts. Weil beide Bedeutungen dasselbe Wort teilen, wandert das Vertrauen aus der belegten Aussage unbemerkt in die unbelegte. Sauber bleibst du so: Ein mehrdeutiges Wort ist kein Vergehen — problematisch wird erst der Schluss darauf; wenn du „sicher" sagst, nenne vor jeder Folgerung den gemeinten Sinn und baue nur auf diesem weiter. Der Gegentest: Setz eine einzige Bedeutung durchgängig ein — liest du den ganzen Satz mit „gegen Angriffe geschützt", bricht der Sprung auf „verlässlicher Rat" sofort weg; dieser Einsetz-Test entlarvt jede Äquivokation. Motte-and-Bailey erkennst du am zeitlichen Muster: erst die kühne These, unter Widerspruch der Rückzug auf eine harmlose Lesart, danach wieder die kühne — hier gibt es keinen Rückzug, beide Bedeutungen von „sicher" laufen gleichzeitig in einem einzigen Vorwärtsschluss. Paltering täuscht durch Weglassen des Entscheidenden bei ansonsten wörtlich wahren Sätzen; hier wird nichts Wesentliches verschwiegen, die Irreführung sitzt im Wort selbst, das die Bedeutung wechselt. Framing rückt denselben Sachverhalt in eine wertende Perspektive, ohne ein Wort zu spalten — bei bloßem Framing bliebe „sicher" durchgehend dasselbe.',
      en: 'Equivocation: two meanings of the same word are chained into one conclusion. The line "because it is safe, you can follow its advice" only holds if "safe" slides mid-sentence from "protected against attacks" to "reliable in what it says" — passing a security audit tells you nothing about the quality of the advice. Because both senses share one word, the trust earned by the proven claim drifts unnoticed into the unproven one. Here is how you stay clean: an ambiguous word is no offence — the trouble starts with the inference built on it; if you say "safe," name the intended sense before you draw any conclusion and build only on that one. The counter-test: run a single meaning through the whole sentence — read it throughout as "protected against attacks" and the jump to "reliable advice" falls apart at once; this substitution test exposes any equivocation. Motte-and-bailey shows a temporal pattern: first the bold claim, a retreat to a harmless reading under challenge, then the bold claim again — here there is no retreat, both senses of "safe" run at once inside a single step of reasoning. Paltering deceives by leaving out the decisive fact while every sentence stays literally true; here nothing essential is withheld, the misdirection sits inside the word itself as it changes meaning. Framing casts the same matter in an evaluative light without splitting a word — under mere framing, "safe" would mean the same thing throughout.',
    },
    points: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'motte_and_bailey', 'paltering_half_truth', 'framing'],
  },
  {
    id: 'backfill-equivocation-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Media-Pitch einer PR-Agentur bei einem Pharmaunternehmen: Als Kommunikationsverantwortliche prüfst du die Materialien. Der Berater will eine vom Hersteller beauftragte und finanzierte Studie, die das Präparat gut bewertet, zum Anker der Kampagne machen, und argumentiert: „Die Studie ist unabhängig — durchgeführt hat sie ein rechtlich eigenständiges Institut, nicht die Hausabteilung. Und weil sie unabhängig ist, präsentieren wir ihr Ergebnis als interessenfreies, neutrales Urteil." Im ersten Satz belegt „unabhängig" nur die organisatorische Trennung des Ausführenden; im Schluss daraus steht dasselbe Wort für methodische Neutralität und Interessenfreiheit — eine Eigenschaft, die aus der bloßen Trennung nicht folgt.',
      en: 'A PR agency\'s media pitch to a pharmaceutical company: as the person responsible for communications, you are vetting the materials. The consultant wants to make a study commissioned and funded by the manufacturer — one that rates the product well — the anchor of the campaign, and argues: "The study is independent — it was carried out by a legally separate institute, not the in-house department. And because it is independent, we will present its result as a disinterested, neutral verdict." In the first sentence "independent" establishes only the organisational separation of who ran it; in the conclusion drawn from it the same word stands for methodological neutrality and freedom from interest — a property that does not follow from mere separation.',
    },
    options: [
      {
        de: 'Ich bitte ihn, „unabhängig" festzulegen, und bewerte die Studie ausschließlich unter dieser einen Bedeutung: organisatorisch getrennt heißt nicht interessenfrei. Solange Auftrag und Finanzierung vom Hersteller stammen, zitieren wir sie höchstens mit genau dieser Einschränkung — oder gar nicht.',
        en: 'I ask him to fix what "independent" means, then assess the study under that one meaning only: organisationally separate is not the same as free of vested interest. As long as the commission and funding come from the manufacturer, we cite it at most with exactly that caveat — or not at all.',
      },
      {
        de: 'Ich übernehme die Studie: Formal wurde sie von einem eigenständigen Institut durchgeführt, also darf ich sie als „unabhängige Studie" zitieren — der Begriff ist ja belegbar.',
        en: 'I take the study: it was formally conducted by a separate institute, so I may cite it as an "independent study" — the term is, after all, defensible.',
      },
      {
        de: 'Ich werfe ihm offen Lüge vor und breche den Pitch ab — wer „unabhängig" sagt und Auftragsforschung meint, betrügt uns.',
        en: 'I openly accuse him of lying and break off the pitch — anyone who says "independent" and means commissioned research is deceiving us.',
      },
      {
        de: 'Ich übernehme die Studie, formuliere in unserer Kommunikation aber selbst „renommiertes, führendes Institut", damit die schwache Unabhängigkeit gar nicht erst zum Thema wird.',
        en: 'I take the study but, in our own communication, phrase it as a "renowned, leading institute" so that the weak independence never becomes a topic in the first place.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Berater äquivokiert auf „unabhängig": erst „organisatorisch getrennt", dann „frei von Interessen und methodisch neutral". Weil beide Lesarten dasselbe Wort tragen, überträgt der Schluss den Neutralitäts-Bonus der zweiten auf die bloß organisatorische erste — der Mechanismus hängt am Bedeutungswechsel, nicht an einer einzelnen falschen Behauptung; rechtlich eigenständig war das Institut ja tatsächlich. Die beste Option legt das Wort auf eine Bedeutung fest und bewertet die Studie nur darunter: „getrennt" heißt nicht „interessenfrei", und solange Auftrag und Finanzierung vom Hersteller stammen, zitierst du sie höchstens mit genau dieser Einschränkung. Professionell heißt das: Forschung, die wirklich frei von Eigeninteresse ist, darfst du selbstverständlich unabhängig nennen — die Disziplin liegt darin, eine Definition durch das ganze Gespräch zu halten, statt sie unterwegs zu tauschen. Option 2 wirkt plausibel, weil eine der beiden Bedeutungen („rechtlich getrennt") zutrifft — doch wer die technisch wahre Lesart akzeptiert, übernimmt die Täuschung und wäscht sie in die eigene Kampagne; als Absender haftest am Ende du. Option 3 überzieht: Ein Bedeutungswechsel ist keine Lüge, das Wort trägt beide Sinne wirklich — ein Betrugsvorwurf ist unfair, sachlich angreifbar und vergiftet das Gespräch ohne Not. Option 4 tauscht die eine Trübung gegen eine neue Aufladung („renommiert, führend"): Statt die Äquivokation aufzulösen, überdeckst du sie mit Loaded Language und machst den Etikettenschwindel zu deinem eigenen.',
      en: 'The consultant is equivocating on "independent": first "organisationally separate," then "free of interest and methodologically neutral." Because both readings share the same word, the conclusion transfers the neutrality bonus of the second onto the merely organisational first — the mechanism hinges on the shift in meaning, not on a single false claim; the institute really was a separate legal entity. The best option fixes the word to one meaning and judges the study only under it: "separate" does not mean "free of vested interest," and as long as the commission and funding come from the manufacturer, you cite it at most with exactly that caveat. Professionally, this means: research genuinely free of vested interest may of course be called independent — the discipline lies in holding one definition through the whole conversation rather than swapping it along the way. Option 2 looks plausible because one of the two meanings ("legally separate") is true — but accepting the technically true reading adopts the deception and launders it into your own campaign; as the one putting it out, you are the one left liable. Option 3 overshoots: a shift of meaning is not a lie, the word genuinely carries both senses — so an accusation of fraud is unfair, factually contestable, and sours the meeting for no reason. Option 4 trades one blur for a fresh charge ("renowned, leading"): instead of dissolving the equivocation, you paper over it with loaded language and make the mislabelling your own.',
    },
    points: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'loaded_language'],
  },
  {
    id: 'backfill-equivocation-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Die Personalchefin wehrt die Kritik ab, indem sie ___.',
      en: 'Complete the sentence: the HR director deflects the criticism by ___.',
    },
    scenario: {
      de: 'Betriebsversammlung eines Logistikunternehmens: Nach Kritik der Belegschaft an den Gehältern erklärt die Personalchefin: „Unsere Vergütung ist fair — sie liegt exakt auf Tarifniveau und erfüllt jede gesetzliche Vorgabe. Wer tarifgerecht bezahlt, zahlt gerecht; also erübrigt sich die Debatte über die Angemessenheit." Im ersten Halbsatz heißt „fair" regelkonform (nach Tarif und Gesetz); im Schluss daraus heißt dasselbe Wort „leistungsgerecht" — dieselbe Vokabel trägt beide Bedeutungen, und nur so trägt der Schluss.',
      en: 'A logistics company\'s staff assembly: after the workforce criticises the salaries, the HR director explains: "Our pay is fair — it sits exactly at the level of the pay agreement and meets every legal requirement. Whoever pays by the rulebook pays justly; so the debate about whether the amount is adequate is moot." In the first clause "fair" means by the rules (per the pay agreement and the law); in the conclusion drawn from it the same word means "deserved" — one and the same word carries both meanings, and only then does the conclusion hold.',
    },
    options: [
      {
        de: 'denselben Wertbegriff („fair") unbemerkt von „regelkonform" auf „leistungsgerecht" umdeutet und beide gleichsetzt (Äquivokation)',
        en: 'quietly reinterpreting the same value word ("fair") from "by the rules" to "deserved" and equating the two (equivocation)',
      },
      {
        de: 'eine starke Behauptung bei Kritik durch eine kaum bestreitbare ersetzt und die starke später wieder aufnimmt (Motte-and-Bailey)',
        en: 'replacing a strong claim under criticism with a barely contestable one and reoccupying the strong one later (motte-and-bailey)',
      },
      {
        de: 'mit einzeln wahren Angaben („wir zahlen Tarif") einen falschen Gesamteindruck stehen lässt (Paltering)',
        en: 'leaving a false overall impression standing through individually true statements ("we pay the agreed rate") (paltering)',
      },
      {
        de: 'den Vorwurf mit emotional aufgeladenen Wörtern einfärbt (Loaded Language)',
        en: 'tinting the objection with emotionally charged words (loaded language)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Äquivokation: Das Wort „fair" trägt zwei Bedeutungen — „regelkonform" (nach Tarif und Gesetz) und „leistungsgerecht" (der Leistung angemessen). Die Personalchefin verkettet sie über die Brücke „wer tarifgerecht bezahlt, zahlt gerecht" und leitet daraus ab, die Gerechtigkeitsdebatte erübrige sich. Nur weil dasselbe Etikett beide Bedeutungen trägt, wirkt der Schluss zwingend; nimm die gemeinsame Vokabel weg, fehlt die Brücke. Ehrlich eingesetzt: „Fair" ist eine legitime Aussage — aber nur zusammen mit dem passenden Beleg: Meinst du regelkonform, sag „tarifkonform"; meinst du leistungsgerecht, zeig den leistungsbezogenen Vergleich. Das Sammelwort allein beweist keine der beiden Seiten. So entschärfst du es: Trenne die zwei Bedeutungen und bestreite die Brücke — aus Regelkonformität folgt keine Gerechtigkeit: „Tarif einzuhalten ist das eine; ob die Höhe der Leistung entspricht, das andere. Welche der beiden meinst du, und womit ist sie belegt?" Motte-and-Bailey ließe „fair" gleich bedeutet und variierte nur den Anspruch der Behauptung zwischen stark und schwach; hier ist es umgekehrt — die Behauptung bleibt gleich stark, das Wort selbst kippt von „regelkonform" zu „leistungsgerecht". Paltering setzte auf einen wahren, aber lückenhaften Sachstand („wir zahlen Tarif" ohne den unbequemen Rest); der Trick hier steckt nicht in einer Lücke, sondern in der Brücke „tarifgerecht = gerecht", die zwei Bedeutungen von „fair" kurzschließt. Loaded Language würde den Vorwurf mit einem Gefühlswort einfärben; „fair" wirkt hier nicht als Stimmungswort, sondern als Doppelbegriff, dessen zwei Definitionen gleichgesetzt werden.',
      en: 'Equivocation: the word "fair" carries two meanings — "by the rules" (per the pay agreement and the law) and "deserved" (matching the work done). The HR director chains them across the bridge "whoever pays by the rulebook pays justly" and infers that the fairness debate is moot. The conclusion feels compelling only because one label carries both senses; take the shared word away and the bridge is gone. Used honestly: "fair" is a defensible claim — but only paired with the matching evidence: if you mean by-the-rules, say "in line with the pay agreement"; if you mean deserved, show the work-based benchmark. The umbrella word alone proves neither side. How you defuse it: separate the two senses and deny the bridge — following the rules does not entail justice: "meeting the agreement is one thing; whether the amount matches the work is another. Which of the two do you mean, and what backs it?" Motte-and-bailey would keep "fair" meaning the same and vary only the claim\'s strength between bold and modest; here it is the reverse — the claim stays equally strong while the word itself tips from "by the rules" to "deserved." Paltering would rest on a true but incomplete picture ("we pay the agreed rate" minus the awkward remainder); the trick here is not a gap but the bridge "by-the-rules = deserved" that short-circuits two meanings of "fair." Loaded language would tint the objection with an emotive word; "fair" works here not as a mood word but as a double term whose two definitions are equated.',
    },
    points: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'motte_and_bailey', 'paltering_half_truth', 'loaded_language'],
  },
];
