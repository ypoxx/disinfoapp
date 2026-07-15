import type { Exercise } from '../../types';

// illusory_truth_effect — Phase 2 content batch.
export const illusoryTruthExercises: Exercise[] = [
  {
    id: 'itr-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt dahinter, dass eine unbelegte Aussage allein durch häufiges Wiederholen für wahr gehalten wird?',
      en: 'Which technique is at work when an unproven statement comes to be believed as true purely because it is repeated so often?',
    },
    scenario: {
      de: 'Ein Startup wiederholt in jedem Newsletter, jedem Post und jeder Anzeige denselben unbelegten Satz: „Wir sind die Nummer 1 für Datensicherheit." Nach einigen Wochen halten viele Leser — und sogar neue Mitarbeitende — diese Aussage für gesichert, obwohl es dafür keinen Beleg gibt. Die bloße Vertrautheit fühlt sich schon wie Wahrheit an.',
      en: 'A startup repeats the same unproven line in every newsletter, post, and ad: „We are the number 1 for data security." After a few weeks, many readers — and even new hires — treat the claim as established fact, though there is no evidence for it. Sheer familiarity already feels like truth.',
    },
    options: [
      { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Wahrheitsillusion: Wird dieselbe Aussage wiederholt verarbeitet, geht das dem Gehirn immer leichter von der Hand — und diese Verarbeitungsflüssigkeit wird fälschlich als Wahrheitssignal gedeutet. Der Effekt greift selbst bei nachweislich falschen Behauptungen und schützt auch Fachleute nicht (Fazio et al. 2015). Legitim ist es, eine wahre, belegte Kernbotschaft konsequent zu wiederholen, damit sie im Gedächtnis bleibt; manipulativ wird es, wenn eine unbelegte oder falsche Behauptung durch schiere Wiederholung Glaubwürdigkeit erschleicht. Sozialer Beweis wäre es, wenn Menschen die Aussage übernähmen, weil sichtbar viele andere sie teilen (Konsens) — hier zählt allein die eigene wiederholte Konfrontation. Priming aktiviert vorab Assoziationen, macht aber keine Behauptung „wahr". Ein Autoritätsargument bräuchte eine berufene Instanz, die hier fehlt.',
      en: 'Illusory truth effect: processing the same statement repeatedly gets ever easier for the brain — and that processing fluency is mistaken for a signal of truth. The effect works even for demonstrably false claims and does not spare experts (Fazio et al. 2015). Consistently repeating a true, substantiated key message so it sticks is legitimate; it turns manipulative when an unproven or false claim borrows credibility through sheer repetition. Social proof would apply if people adopted the claim because visibly many others share it (consensus) — here only one\'s own repeated exposure matters. Priming pre-activates associations but never makes a claim „true". An appeal to authority would need a credentialed source, which is absent here.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'itr-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welcher kognitive Effekt erklärt am besten, dass die unbelegte Zahl zunehmend für gesichert gehalten wird?',
      en: 'Which cognitive effect best explains why the unproven figure is increasingly treated as established?',
    },
    scenario: {
      de: 'In der Fachpresse taucht seit Monaten immer wieder dieselbe, nie mit Primärquelle belegte Zahl auf: „80 % der Branche setzen bereits auf Verfahren X." Redaktionen übernehmen sie inzwischen ungeprüft — nicht weil eine neue Studie erschienen ist, sondern weil die Zahl so oft zu lesen war, dass sie sich einfach richtig anfühlt.',
      en: 'For months the same figure — never backed by a primary source — keeps resurfacing in the trade press: „80% of the industry already use process X." Newsrooms now copy it unchecked — not because a new study appeared, but because the figure has been seen so often that it simply feels correct.',
    },
    options: [
      { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der belegbare Auslöser der steigenden Glaubwürdigkeit ist die Wahrheitsillusion: Häufige Konfrontation erhöht die Verarbeitungsflüssigkeit einer Aussage, und diese Flüssigkeit wird als Wahrheit fehlinterpretiert — ganz ohne neuen Beleg. Wiederholung ist zwar der Auslöser-Reiz, aber als Technik nur das Zustellen derselben Botschaft; gefragt ist der kognitive Effekt, der aus Vertrautheit gefühlte Wahrheit macht — und das ist die Wahrheitsillusion. Sozialer Beweis würde bedeuten, dass die Zahl übernommen wird, weil sie als Mehrheitskonsens sichtbar ist; hier wirkt die reine wiederholte Konfrontation, nicht ein Verweis auf „viele andere". Framing wäre die unterschiedliche Darstellung derselben Tatsache (etwa Gewinn- vs. Verlust-Rahmung) — der Wortlaut bleibt hier jedoch konstant und wird nur wiederholt. Legitim wäre das Wiederholen einer geprüften, quellenbelegten Zahl; manipulativ ist das Verfestigen einer unbelegten Zahl allein durch Dauerpräsenz.',
      en: 'The demonstrable driver of the rising credibility is the illusory truth effect: frequent exposure raises a statement\'s processing fluency, and that fluency is misread as truth — with no new evidence at all. Repetition is the triggering stimulus, but as a technique it is merely delivering the same message; the question asks for the cognitive effect that turns familiarity into felt truth — and that is the illusory truth effect. Social proof would mean the figure is adopted because it is visible as a majority consensus; here it is pure repeated exposure that works, not a pointer to „many others". Framing would be presenting the same fact differently (e.g. gain vs. loss framing) — but here the wording stays constant and is merely repeated. Repeating a checked, sourced figure would be legitimate; entrenching an unproven figure through sheer omnipresence is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition', 'social_proof'],
  },
  {
    id: 'itr-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welcher kognitive Effekt soll hier durch das bewusst beiläufige, über viele Kanäle verteilte Einstreuen gezielt herbeigeführt werden, damit eine unbelegte Behauptung als längst geklärte Tatsache durchgeht?',
      en: 'Which cognitive effect is the deliberately in-passing, multi-channel seeding meant to trigger here, so that an unsubstantiated claim passes as a long-settled fact?',
    },
    scenario: {
      de: 'Drei Monate vor dem Launch beschließt die Kommunikationsleitung, einen bestimmten Satz nie als Schlagzeile, sondern immer nur beiläufig einzustreuen — als längst bekannte Selbstverständlichkeit: „Der Markt bewegt sich ohnehin zu Ansatz Y." Der Satz erscheint als Nebensatz in Webinaren, in Fußzeilen von Blogposts, im Podcast-Intro und auf internen Slide-Vorlagen. Bis zum Launch soll das Publikum die Behauptung nicht mehr hinterfragen, sondern als seit Langem geklärt behandeln — obwohl sie nie belegt wurde.',
      en: 'Three months before launch, the comms lead decides never to state a certain sentence as a headline, but only to drop it in passing — as a long-known given: „The market is moving to approach Y anyway." It appears as a subordinate clause in webinars, in blog-post footers, in the podcast intro, and on internal slide templates. By launch, the audience should no longer question the claim but treat it as long-settled — though it was never substantiated.',
    },
    options: [
      { de: 'Wahrheitsillusion', en: 'Illusory Truth Effect' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster ist eine besonders wirksame Form der Wahrheitsillusion: Die Behauptung wird nicht argumentiert, sondern als Selbstverständlichkeit vorausgesetzt und über viele Kontexte hinweg beiläufig wiederholt. Genau die niedrige Aufmerksamkeit steigert die Verarbeitungsflüssigkeit, ohne kritische Prüfung auszulösen — Vertrautheit kippt in gefühlte Wahrheit. Priming ist der nächste Nachbar, meint aber das Vor-Aktivieren von Assoziationen (etwa „modern", „Zukunft"), die spätere Urteile einfärben; hier wird jedoch eine konkrete Sachbehauptung als bereits-wahr gepflanzt, nicht bloß eine Stimmung. Wiederholung benennt nur den Zustell-Mechanismus, nicht den Effekt, der Vertrautheit in Wahrheitsstatus verwandelt. Framing würde denselben Sachverhalt unterschiedlich rahmen; hier bleibt der Wortlaut gleich und wird nur eingestreut. Ethische Grenze: Eine belegte, offen kommunizierte Botschaft zu wiederholen ist zulässig — eine unbelegte Behauptung verdeckt zur „Tatsache" zu wiederholen, umgeht bewusst die Prüfung und ist manipulativ.',
      en: 'The pattern is a particularly potent form of the illusory truth effect: the claim is not argued but presupposed as a given and dropped in passing across many contexts. That very low salience raises processing fluency without triggering scrutiny — familiarity tips into felt truth. Priming is the closest neighbour, but it means pre-activating associations (e.g. „modern", „future") that colour later judgments; here a concrete factual claim is planted as already-true, not merely a mood. Repetition names only the delivery mechanism, not the effect that converts familiarity into truth-status. Framing would cast the same fact differently; here the wording stays the same and is merely seeded. Ethical boundary: repeating a substantiated, openly communicated message is admissible — covertly repeating an unproven claim into a „fact" deliberately bypasses scrutiny and is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition', 'priming'],
  },
  {
    id: 'itr-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Weil die gleiche unbelegte Aussage immer wieder auftaucht, verarbeitet das Gehirn sie zunehmend müheloser — und diese ___ wird fälschlich als Zeichen von Wahrheit gedeutet.',
      en: 'Complete the sentence: Because the same unproven statement keeps reappearing, the brain processes it ever more effortlessly — and this ___ is mistakenly read as a sign of truth.',
    },
    scenario: {
      de: 'Ein Kommunikationsteam beobachtet, wie sich ein unbelegtes Gerücht über einen angeblichen Lieferstopp in Foren, Chats und Kommentarspalten immer wieder wiederholt. Je öfter Nutzer es lesen, desto überzeugter sind sie, dass „doch etwas dran sein muss".',
      en: 'A comms team watches an unproven rumor about an alleged supply halt repeat again and again across forums, chats, and comment sections. The more often users read it, the more convinced they become that „there must be something to it".',
    },
    options: [
      { de: 'gefühlte Vertrautheit bzw. Verarbeitungsflüssigkeit (Wahrheitsillusion)', en: 'felt familiarity, i.e. processing fluency (illusory truth effect)' },
      { de: 'sofortige emotionale Erregung (emotionaler Appell)', en: 'immediate emotional arousal (emotional appeal)' },
      { de: 'wahrgenommene Knappheit (Scarcity)', en: 'perceived scarcity (scarcity)' },
      { de: 'Orientierung am Verhalten der Mehrheit (Sozialer Beweis)', en: 'alignment with the majority\'s behavior (social proof)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus der Wahrheitsillusion ist die Verarbeitungsflüssigkeit: Wiederholte Konfrontation macht eine Aussage leichter verarbeitbar, und das Gehirn verwechselt dieses „Leichtgefühl" mit Richtigkeit — auch bei falschen Inhalten. Emotionale Erregung beschreibt einen emotionalen Appell, der über Gefühle statt über Vertrautheit wirkt. Wahrgenommene Knappheit ist der Hebel von Scarcity (Angst, etwas zu verpassen) und hat mit Wahrheitsurteilen nichts zu tun. Die Orientierung an der Mehrheit ist sozialer Beweis — hier zählt aber die eigene wiederholte Konfrontation, nicht ein sichtbarer Konsens. Ethische Grenze: Eine geprüfte, belegte Botschaft zu wiederholen, damit sie im Gedächtnis bleibt, ist legitim; ein unbelegtes Gerücht durch bloße Wiederholung glaubwürdig erscheinen zu lassen, ist manipulativ. Praktische Konsequenz: Ein Gerücht auch nur zu wiederholen — selbst um es zu widerlegen — kann seine gefühlte Wahrheit erhöhen.',
      en: 'The mechanism of the illusory truth effect is processing fluency: repeated exposure makes a statement easier to process, and the brain mistakes that „ease" for correctness — even for false content. Emotional arousal describes an emotional appeal, which works through feelings rather than familiarity. Perceived scarcity is the lever of scarcity (fear of missing out) and has nothing to do with truth judgments. Aligning with the majority is social proof — but here it is one\'s own repeated exposure that matters, not a visible consensus. Ethical boundary: repeating a checked, substantiated message so it sticks in memory is legitimate; making an unproven rumor seem credible through sheer repetition is manipulative. Practical consequence: even repeating a rumor — including to debunk it — can raise its felt truth.',
    },
    points: 10,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'itr-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein falsches Gerücht, euer Produkt enthalte einen verbotenen Stoff, kursiert und verbreitet sich weiter. Wie richtest du die Richtigstellung aus, ohne die Wahrheitsillusion gegen dich arbeiten zu lassen?',
      en: 'A false rumor that your product contains a banned substance is circulating and spreading. How do you frame the correction so the illusory truth effect does not work against you?',
    },
    scenario: {
      de: 'Du verantwortest die Krisenkommunikation. Fachlich ist klar: Der Vorwurf ist unbegründet, ein akkreditiertes Labor bestätigt das. Jetzt geht es um die Form der Richtigstellung — und darum, dass jede erneute Nennung des Vorwurfs dessen Vertrautheit und damit seine gefühlte Glaubwürdigkeit steigern kann.',
      en: 'You own the crisis communication. Factually it is clear: the allegation is unfounded, and an accredited lab confirms it. Now it is about the form of the correction — and about the fact that every renewed mention of the allegation can raise its familiarity and thus its felt credibility.',
    },
    options: [
      {
        de: 'Mit der belegten Tatsache führen (Wahrheit zuerst), die Korrektur klar benennen, den Falschvorwurf nur einmal und nicht in Überschrift oder Wortlaut wiederholen und das Laborergebnis prominent zeigen — die „Truth-Sandwich"-Struktur.',
        en: 'Lead with the substantiated fact (truth first), state the correction clearly, mention the false allegation only once and not in the headline or its exact wording, and feature the lab result prominently — the „truth sandwich" structure.',
      },
      {
        de: 'Eine große FAQ veröffentlichen, die den Falschvorwurf in jeder Zwischenüberschrift wörtlich zitiert und mehrfach aufgreift, um ihn „direkt und vollständig" abzuräumen.',
        en: 'Publish a large FAQ that quotes the false allegation verbatim in every subheading and revisits it repeatedly, to address it „directly and fully".',
      },
      {
        de: 'Zwei Wochen lang täglich ein Dementi mit dem Vorwurf in der Betreffzeile über alle Kanäle senden — je öfter das Dementi erscheint, desto sicherer ist die Sache erledigt.',
        en: 'Send a daily denial for two weeks with the allegation in the subject line across all channels — the more often the denial appears, the more surely the matter is settled.',
      },
      {
        de: 'Gar nichts sagen und darauf setzen, dass das Gerücht von selbst verschwindet, solange ihr es nicht kommentiert.',
        en: 'Say nothing and count on the rumor fading on its own as long as you do not comment on it.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Beste Praxis ist die wahrheitszentrierte „Truth-Sandwich"-Struktur (Option 0): Sie stellt die belegte Tatsache in den Vordergrund und minimiert die Wiederholung des Falschvorwurfs, weil jede erneute Nennung dessen Vertrautheit — und damit seine gefühlte Glaubwürdigkeit — erhöhen kann (Familiaritäts-Backfire). Option 1 macht genau das Gegenteil: Der wörtliche Vorwurf in jeder Überschrift wird vertrauter und kann sich trotz Widerlegung verfestigen. Option 2 maximiert die Wiederholung des Vorwurfs über Wochen und riskiert zusätzlich Reaktanz und Ermüdung. Option 3 unterschätzt den zweiten Effekt: Wenn das Gerücht weiter kursiert, arbeitet die reine wiederholte Konfrontation ungebremst für seine gefühlte Wahrheit — Schweigen verschenkt die Korrektur und kann den Effekt gewähren lassen. Der Hebel der Technik bleibt neutral; entscheidend ist, ob du Wiederholung für die belegte Wahrheit oder unbeabsichtigt für den Falschvorwurf einsetzt.',
      en: 'Best practice is the truth-centred „truth sandwich" structure (option 0): it foregrounds the substantiated fact and minimises repetition of the false allegation, because every renewed mention can raise its familiarity — and thus its felt credibility (familiarity backfire). Option 1 does exactly the opposite: the verbatim allegation in every heading grows more familiar and can entrench despite being refuted. Option 2 maximises repetition of the allegation over weeks and additionally risks reactance and fatigue. Option 3 underestimates the second-order effect: if the rumor keeps circulating, pure repeated exposure works unchecked in favour of its felt truth — silence forfeits the correction and can let the effect run. The technique\'s lever is neutral; what matters is whether you put repetition to work for the substantiated truth or unintentionally for the false allegation.',
    },
    points: 15,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'itr-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Euer Team plant ein Programm für konsequente Botschafts-Wiederholung. Ein Baustein überschreitet die Grenze von legitimer Wiedererkennung hin zum Erschleichen gefühlter Wahrheit. Welcher?',
      en: 'Your team is planning a program for consistent message repetition. One component crosses the line from legitimate recognisability into manufacturing felt truth. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine für die Kampagnen-Konsistenz:',
      en: 'Planned components for campaign consistency:',
    },
    options: [
      {
        de: 'Eine unabhängig zertifizierte, quellenbelegte Kernaussage („seit 2022 extern geprüft klimaneutral") kanalübergreifend gleich formulieren, damit sie im Gedächtnis bleibt.',
        en: 'Phrase an independently certified, sourced key message („externally verified carbon-neutral since 2022") identically across channels so it sticks in memory.',
      },
      {
        de: 'Denselben Slogan und dieselbe visuelle Identität an allen Kontaktpunkten verwenden, um Wiedererkennbarkeit aufzubauen.',
        en: 'Use the same tagline and visual identity across all touchpoints to build recognisability.',
      },
      {
        de: 'Einen sachlichen Sicherheitshinweis regelmäßig als Erinnerung wiederholen, damit er präsent bleibt.',
        en: 'Repeat a factual safety instruction periodically as a reminder so it stays present.',
      },
      {
        de: 'Eine unbelegte Überlegenheitsaussage („klinisch belegt das Beste am Markt") verdeckt und immer wieder streuen, bis sie als etablierte Tatsache akzeptiert wird — obwohl keine Studie sie stützt.',
        en: 'Covertly seed an unproven superiority claim („clinically proven best on the market") again and again until it is accepted as established fact — though no study supports it.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitime Wiederholung festigt wahre, belegte und transparent kommunizierte Botschaften — sie hilft bei Erinnerung und Wiedererkennung, ohne ein Wahrheitsurteil zu erzwingen: Die zertifizierte Kernaussage (0) ist belegt, die konsistente Marken-Identität (1) ist gar keine Sachbehauptung, sondern Wiedererkennbarkeit, und der Sicherheitshinweis (2) ist sachlich richtig. Baustein 3 überschreitet die Grenze: Hier wird die Wahrheitsillusion gezielt ausgenutzt, um eine unbelegte — für „klinisch belegt"/Überlegenheit sogar rechtlich heikle — Behauptung allein durch verdeckte Dauerpräsenz in gefühlte Wahrheit zu verwandeln. Das ist täuschend und bei Werbeaussagen regelmäßig unzulässig (irreführende Werbung, UWG). Prüffragen an der Grenze: Ist die wiederholte Aussage wahr und belegt, offen erkennbar und behauptet sie überhaupt eine prüfbare Tatsache — oder soll bloße Vertrautheit die fehlende Prüfung ersetzen?',
      en: 'Legitimate repetition reinforces true, substantiated, transparently communicated messages — it aids recall and recognition without forcing a truth judgment: the certified key message (0) is substantiated, the consistent brand identity (1) is not a factual claim at all but recognisability, and the safety instruction (2) is factually correct. Component 3 crosses the line: here the illusory truth effect is deliberately exploited to turn an unproven claim — and, for „clinically proven"/superiority wording, a legally risky one — into felt truth purely through covert omnipresence. That is deceptive and, for advertising claims, regularly unlawful (misleading advertising). Boundary checks: is the repeated statement true and substantiated, openly identifiable, and does it even assert a verifiable fact — or is mere familiarity meant to substitute for the missing verification?',
    },
    points: 15,
    primaryTechniqueId: 'illusory_truth_effect',
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
];
