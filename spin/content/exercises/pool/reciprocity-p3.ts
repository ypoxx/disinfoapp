import type { Exercise } from '../../types';

// reciprocity — Phase 3 densification batch.
export const reciprocityP3Exercises: Exercise[] = [
  {
    id: 're-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken hier zusammen. Welche ist der dominante Treiber ihrer Entscheidung?',
      en: 'Several techniques operate together here. Which one is the dominant driver of her decision?',
    },
    scenario: {
      de: 'Eine gefragte Senior-Entwicklerin wägt zwei Jobangebote ab. Das Recruiting-Team von Firma A investiert über Wochen ungefragt viel: Es fliegt sie zu einem persönlichen, betont unverbindlichen Kennenlern-Tag ein, stellt ihr eine erfahrene Mentorin einen ganzen Tag lang für ihre Fragen zur Seite und übergibt ihr einen eigens für sie erstellten, 20-seitigen Entwicklungsplan — nichts davon an eine Zusage geknüpft. Zum Abschluss erwähnt die Recruiterin beiläufig, die besprochene Teamlead-Rolle bleibe „nur noch bis Freitag" reserviert, und die meisten Kandidatinnen auf ihrem Niveau, die den Standort besucht hätten, hätten binnen einer Woche unterschrieben. Firma B hat ihr ein spürbar höheres Gehalt geboten, und eigentlich tendierte sie zu B. Trotzdem ertappt sie sich bei dem Gedanken, es wäre „fast unfair", nach all dem Aufwand einfach abzusagen — und nimmt A.',
      en: 'A sought-after senior developer is weighing two job offers. Over several weeks, Company A\'s recruiting team invests heavily and unprompted: it flies her in for a personal, pointedly no-obligation meet-the-team day, gives her a full day with an experienced mentor for all her questions, and hands over a 20-page development plan built just for her — none of it tied to accepting. To close, the recruiter mentions in passing that the team-lead role they discussed stays reserved "only until Friday," and that most candidates at her level who visited the site signed within a week. Company B has offered her a noticeably higher salary, and she was in fact leaning toward B. Yet she catches herself thinking it would be "almost unfair" to simply decline after all that effort — and takes A.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominant ist Reziprozität. Firma A erbringt zuerst echte, unaufgeforderte Leistungen (Reise, ein voller Mentorinnen-Tag, ein maßgeschneiderter Plan) und baut so ein Verpflichtungsgefühl auf — die Norm der Gegenseitigkeit verlangt, empfangenen Aufwand zu erwidern. Genau das zeigt der entscheidende Satz: Sie gibt ein höheres Gehalt auf, weil ein Absagen sich „unfair" anfühlt — also getrieben von empfangenem Wert und nicht von rationalem Abwägen. Knappheit (die Frist „nur bis Freitag") und sozialer Beweis („die meisten unterschrieben binnen einer Woche") sind real vorhanden, aber nur Beiwerk: Beide erklären nicht, warum sie das bessere Angebot ausschlägt. Commitment & Konsistenz ist die stärkste Fehlspur — sie greift aber nicht, weil sie sich vorher gerade nicht auf A festgelegt hatte (sie tendierte zu B); es gibt keine eigene frühere Zusage, der sie treu bliebe. Die ethische Grenze: Ein aufrichtig unverbindliches Kennenlernen ist legitime Beziehungspflege; wird der Aufwand jedoch gezielt so dosiert, dass ein Schuldgefühl die freie, sachliche Entscheidung überlagert, kippt die Technik ins Manipulative.',
      en: 'The dominant driver is reciprocity. Company A first delivers genuine, unsolicited value (the trip, a full mentor day, a bespoke plan), building a sense of obligation — the norm of reciprocity demands that received effort be returned. The decisive sentence shows it: she gives up a higher salary because declining feels "unfair" — i.e., driven by received value, not rational weighing. Scarcity (the "only until Friday" deadline) and social proof ("most signed within a week") are genuinely present but merely trimming: neither explains why she rejects the better offer. Commitment & consistency is the strongest decoy — but it does not hold, because she had precisely not committed to A beforehand (she was leaning toward B); there is no prior self-commitment for her to stay true to. The ethical boundary: a sincerely no-strings meet-the-team is legitimate relationship-building; but when the effort is deliberately dosed so a sense of indebtedness overrides a free, fact-based choice, the technique tips into manipulation.',
    },
    points: 20,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity', 'scarcity', 'social_proof'],
  },
  {
    id: 're-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik steckt hinter diesem Vorgehen?',
      en: 'Which persuasion technique is behind this approach?',
    },
    scenario: {
      de: 'Eine Café-Kette schenkt jedem neuen App-Nutzer sofort ein Gratis-Getränk — noch bevor sie ihn einlädt, das kostenpflichtige Treue-Abo abzuschließen.',
      en: 'A café chain gives every new app user a free drink right away — before it even invites them to sign up for the paid loyalty subscription.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Reziprozität: Zuerst kommt die Gabe (das Gratis-Getränk), dann die Bitte (das Abo). Wer etwas geschenkt bekommt, fühlt sich verpflichtet, etwas zurückzugeben — hier durch den Abschluss des Abos. Legitim bleibt die Geste, solange sie klein und transparent ist und man frei „Nein" sagen kann; manipulativ wird sie, wenn das Geschenk gezielt eine Gegenleistung erzwingen soll. Knappheit würde mit begrenzter Verfügbarkeit oder Fristen arbeiten, sozialer Beweis mit dem Verhalten vieler anderer, Commitment & Konsistenz mit einer zuvor abgerungenen kleinen Zusage — nichts davon passiert hier; es wird schlicht zuerst etwas gegeben.',
      en: 'Textbook reciprocity: the gift comes first (the free drink), then the ask (the subscription). Receiving something creates a felt obligation to give back — here by signing up. The gesture stays legitimate as long as it is small, transparent, and you can freely say "no"; it turns manipulative when the gift is engineered to extract a return. Scarcity would work through limited availability or deadlines, social proof through the behavior of many others, commitment & consistency through a small prior "yes" — none of that happens here; something is simply given first.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity'],
  },
  {
    id: 're-p3-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik erklärt die Zusage des Kunden vor allem?',
      en: 'Which persuasion technique best explains the client\'s yes?',
    },
    scenario: {
      de: 'Ein Customer-Success-Manager eines B2B-Softwareanbieters räumt für einen Kunden zwei volle Tage lang dessen verworrene Daten auf — unaufgefordert und außerhalb des Vertrags, ohne Rechnung. Zwei Wochen später bittet er den Kunden, auf der Anwenderkonferenz des Anbieters als Referenz auf der Bühne zu sprechen. Der Kunde, der solche Auftritte sonst grundsätzlich ablehnt, sagt diesmal zu.',
      en: 'A B2B software vendor\'s customer-success manager spends two full days cleaning up a client\'s tangled data — unprompted, outside the contract, and unbilled. Two weeks later he asks the client to speak as a reference on stage at the vendor\'s user conference. The client, who normally turns such appearances down flat, agrees this time.',
    },
    options: [
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Knappheit', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel ist Reziprozität: Der Manager erbringt zuerst eine echte, unbezahlte Extraleistung und erzeugt so ein Schuldgefühl, das der Kunde mit einer Gegenleistung — dem Bühnenauftritt — begleicht. Dass er sonst grundsätzlich absagt, diesmal aber zusagt, zeigt, dass die empfangene Gefälligkeit den Ausschlag gibt. Commitment & Konsistenz ist der naheliegendste Fehlgriff (Foot-in-the-door), scheidet aber aus, weil vorher keine kleine Zusage abgerungen wurde, der er nun konsistent folgen würde. Sozialer Beweis fehlt, weil kein Verhalten anderer Kunden angeführt wird, und Knappheit spielt keine Rolle, weil nichts als begrenzt oder fristgebunden dargestellt wird. Legitim ist echte Hilfe, die man ohne Hintergedanken leistet; manipulativ wird es, wenn die Extraleistung nur als Vorleistung kalkuliert ist, um später eine sonst verweigerte Gegenleistung einzufordern.',
      en: 'The lever is reciprocity: the manager first delivers genuine, unbilled extra work, creating a sense of indebtedness that the client settles with a return favor — the stage appearance. That he normally refuses but agrees this time shows the received favor is decisive. Commitment & consistency is the nearest miss (foot-in-the-door), but it is out because no small prior "yes" was elicited for him to now stay consistent with. Social proof is absent, since no other clients\' behavior is invoked, and scarcity plays no role, since nothing is framed as limited or deadline-bound. Genuine help given with no ulterior motive is legitimate; it turns manipulative when the extra work is merely calculated as an advance to later extract a return that would otherwise be refused.',
    },
    points: 10,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity', 'consistency'],
  },
  {
    id: 're-p3-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du leitest den Auswahlausschuss für einen großen Lieferantenauftrag. Mitten in der laufenden Bewertung schickt einer der Bieter jedem Ausschussmitglied ein hochwertiges persönliches Geschenk mit einer herzlichen Dankeskarte. Wie reagierst du professionell?',
      en: 'You chair the selection committee for a major supplier contract. Midway through the ongoing evaluation, one bidder sends each committee member an expensive personal gift with a warm thank-you card. How do you respond professionally?',
    },
    options: [
      {
        de: 'Ich gebe die Geschenke zurück bzw. lehne sie ab, mache die Geste im Ausschuss transparent und dokumentiere sie gemäß Compliance-Richtlinie — und halte die Bewertung strikt an den festgelegten, belegbaren Kriterien. Das Geschenk erzeugt ein Verpflichtungsgefühl, das die Entscheidung unbemerkt verzerren kann; Offenlegung und Rückgabe neutralisieren es und schützen die Fairness des Verfahrens.',
        en: 'I return or decline the gifts, disclose the gesture openly in the committee, and log it per the compliance policy — and keep the evaluation strictly on the defined, documented criteria. The gift creates a felt obligation that can bias the decision unnoticed; disclosure and returning it neutralize that and protect the fairness of the process.',
      },
      {
        de: 'Ich behalte die Geschenke — sie abzulehnen wäre unhöflich und würde die Beziehung belasten — nehme mir aber fest vor, trotzdem objektiv zu bleiben.',
        en: 'I keep the gifts — refusing them would be rude and strain the relationship — but firmly resolve to stay objective anyway.',
      },
      {
        de: 'Ich behalte die Geschenke und werte diesen Bieter zum Ausgleich bewusst etwas ab, damit mich der Gefallen sicher nicht bevorteilt.',
        en: 'I keep the gifts and deliberately mark this bidder down a bit to compensate, so the favor definitely can\'t advantage them.',
      },
      {
        de: 'Ich behalte die Geschenke still und sage nichts, um die Situation nicht unnötig unangenehm zu machen.',
        en: 'I quietly keep the gifts and say nothing, so as not to make things needlessly awkward.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) behandelt die Reziprozität sauber: Ein Geschenk kurz vor einer Entscheidung baut ein Verpflichtungsgefühl auf, das selbst bei bestem Vorsatz unbewusst wirkt. Rückgabe plus Offenlegung plus feste Kriterien entziehen dem Hebel die Grundlage und dokumentieren die Unabhängigkeit des Verfahrens. Option 2 unterschätzt genau diesen Effekt: Reziprozität wirkt gerade unterbewusst, reine Willenskraft schützt nicht davor — und das Geschenk zu behalten hält die Verpflichtung aufrecht. Option 3 ist der verlockende Denkfehler der Überkorrektur: Wer den Bieter aus schlechtem Gewissen abwertet, lässt seine Entscheidung ebenso vom Geschenk steuern, nur in die andere Richtung — das ist genauso unfair und verzerrt das Ergebnis. Option 4 ist am riskantesten: Das Verschweigen einer annahmepflichtigen Zuwendung ist der klarste Compliance-Verstoß und kann als unzulässige Vorteilsannahme gewertet werden. Die Grenze: Kleine, transparente Höflichkeiten sind unkritisch; sobald eine Zuwendung geeignet ist, eine laufende Entscheidung zu beeinflussen, gelten Rückgabe und Offenlegung.',
      en: 'Only option 1 (index 0) handles the reciprocity cleanly: a gift shortly before a decision builds a felt obligation that operates unconsciously even with the best intentions. Returning it, disclosing it, and holding to fixed criteria remove the lever\'s footing and document the process\'s independence. Option 2 underestimates exactly that effect: reciprocity works precisely below awareness, and willpower alone does not protect against it — keeping the gift keeps the obligation alive. Option 3 is the tempting fallacy of overcorrection: marking the bidder down out of guilt lets the gift steer your decision just as much, only in the other direction — equally unfair and equally distorting. Option 4 is the riskiest: staying silent about a reportable benefit is the clearest compliance breach and can count as improper acceptance of an advantage. The boundary: small, transparent courtesies are unproblematic; the moment a benefit is capable of influencing an ongoing decision, return and disclosure apply.',
    },
    points: 15,
    primaryTechniqueId: 'reciprocity',
    relatedTechniques: ['reciprocity'],
  },
];
