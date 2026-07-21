// Welle 5a: 3 Übungen für appeal_to_ignorance (Argument aus Unwissen).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aAppealToIgnorance: Exercise[] = [
  {
    id: 'wave5a-appeal_to_ignorance-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Kommunikationsleiter hier ein?',
      en: 'Which technique is the head of communications using here?',
    },
    scenario: {
      de: 'Presse-Briefing eines Getränkeherstellers zu einem neuen Zusatzstoff: Eine Fachjournalistin fragt nach möglichen Gesundheitsrisiken. Der Kommunikationsleiter antwortet: „Es gibt bis heute keine einzige Studie, die einen Schaden durch diesen Zusatzstoff belegt. Solange niemand das Gegenteil beweist, gilt er als unbedenklich."',
      en: 'Press briefing by a beverage manufacturer about a new additive: a trade journalist asks about possible health risks. The head of communications answers: "To this day there is not a single study proving any harm from this additive. As long as nobody proves otherwise, it is to be considered safe."',
    },
    options: [
      { de: 'Argument aus Unwissen (Ad ignorantiam)', en: 'Appeal to ignorance (argumentum ad ignorantiam)' },
      { de: 'Fear, Uncertainty and Doubt (FUD)', en: 'Fear, Uncertainty and Doubt (FUD)' },
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Argument aus Unwissen: Aus dem Fehlen eines Schadensnachweises wird die positive Aussage „unbedenklich" — und die Beweislast auf die Zweifelnden geschoben („solange niemand das Gegenteil beweist"). Der Hebel setzt darauf, dass eine offene, nicht ausgeräumte Lücke wie eine Entlastung klingt, obwohl „nicht widerlegt" und „bewiesen sicher" zwei verschiedene Dinge sind. Legitim einsetzen lässt sich nur der Kern: Auf fehlende Belege hinzuweisen ist völlig in Ordnung — aber als Kalibrierung („unbewiesen, also (noch) nicht belastbar"), nie als Beweis des Gegenteils. Erkennen und kontern: Du prüfst, wer hier eigentlich beweispflichtig ist, und übersetzt „kein Schaden nachgewiesen" in die offene Frage „Wurde überhaupt belastbar auf Schaden geprüft — und mit welchem Ergebnis?". Paltering wirkt plausibel, weil die Aussage teils wörtlich stimmt — dort wäre der Kern aber eine wahre Teilaussage, die einen falschen Gesamteindruck erzeugt, nicht ein offen fehlerhafter Schluss vom Nicht-Wissen aufs Gegenteil. FUD läge vor, wenn er unwiderlegbaren Zweifel an einer Alternative streute; hier zieht er umgekehrt eine beruhigende Schlussfolgerung aus dem Nichtwissen. Cherry-Picking bräuchte ausgewählte günstige Belege aus einer größeren Datenlage — er präsentiert aber gerade keine Belege, sondern deren Abwesenheit.',
      en: 'Appeal to ignorance: the absence of any proof of harm is turned into the positive claim "safe" — and the burden of proof is pushed onto the doubters ("as long as nobody proves otherwise"). The lever relies on an open, unresolved gap sounding like exoneration, even though "not disproven" and "proven safe" are two different things. Only the core is legitimate: flagging missing evidence is entirely fine — but as calibration ("unproven, therefore not (yet) reliable"), never as proof of the opposite. To spot and counter it: check who actually carries the burden of proof here, and turn "no harm shown" into the open question "was harm ever robustly tested for — and with what result?". Paltering seems plausible because the statement is partly literally true — but there the core would be a true partial claim leaving a false overall impression, not an openly faulty inference from not-knowing to its opposite. FUD would apply if he were sowing irrefutable doubt about an alternative; here he draws the reverse, reassuring conclusion from not-knowing. Cherry-picking would need selected favourable evidence from a larger body of data — but he presents no evidence at all, only its absence.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_ignorance',
    relatedTechniques: ['appeal_to_ignorance', 'fear_uncertainty_doubt', 'paltering_half_truth', 'cherry_picking'],
  },
  {
    id: 'wave5a-appeal_to_ignorance-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Freigaberunde für ein Statement zu anonym erhobenen Korruptionsvorwürfen gegen einen Bereich deines Unternehmens: Als Kommunikationschefin stimmst du den Kernsatz ab. Der Justiziar schlägt vor: „Bis heute wurde kein einziger dieser Vorwürfe bewiesen — damit sind sie widerlegt." Der Satz soll das ganze Statement tragen.',
      en: 'Sign-off round for a statement on anonymous corruption allegations against one of your company\'s units: as head of communications, you finalise the key sentence. Legal counsel proposes: "To this day not a single one of these allegations has been proven — which refutes them." The sentence is meant to carry the entire statement.',
    },
    options: [
      {
        de: 'Ich baue den Satz um: Aus „nicht bewiesen" darf nicht „widerlegt" werden. Wir sagen, was wir intern geprüft haben, was die Faktenlage bislang hergibt und dass wir an der lückenlosen Aufklärung mitwirken — statt das Fehlen von Belegen als Beweis unserer Unschuld auszugeben.',
        en: 'I rebuild the sentence: "not proven" must not become "refuted". We state what we have checked internally, what the facts so far show, and that we will support full clarification — instead of passing off the absence of evidence as proof of our innocence.',
      },
      {
        de: 'Ich übernehme den Satz: Solange niemand die Vorwürfe belegt, ist die Aussage doch zutreffend und juristisch unangreifbar — mehr müssen wir nicht liefern.',
        en: 'I adopt the sentence: as long as nobody substantiates the allegations, the statement is accurate and legally unassailable — we need not deliver more.',
      },
      {
        de: 'Ich drehe den Spieß um und lege den Fokus im Statement darauf, wer wohl ein Interesse an anonymen, unbelegten Vorwürfen ausgerechnet jetzt haben könnte.',
        en: 'I turn the tables and focus the statement on who might have an interest in anonymous, unsubstantiated allegations at precisely this moment.',
      },
      {
        de: 'Ich rate zu „Kein Kommentar, bis die Prüfung abgeschlossen ist" und lasse den strittigen Satz ganz weg.',
        en: 'I advise "no comment until the review is complete" and drop the contested sentence entirely.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag des Justiziars ist ein Argument aus Unwissen: „nicht bewiesen" wird zu „widerlegt" — die fehlende Belastung als Beweis der Entlastung ausgegeben und die Beweislast umgedreht. Das trägt kein Krisenstatement: Sobald ein einziger Beleg auftaucht, kippt die Aussage und mit ihr die Glaubwürdigkeit. Die beste Option nutzt den legitimen Kern (dass die Vorwürfe unbewiesen sind, darfst du sagen), zieht daraus aber nur die zulässige Schlussfolgerung — offen, nicht erwiesen falsch — und stützt das Statement auf Prüfschritte und Kooperationszusage. Den Satz zu übernehmen wirkt plausibel, weil „juristisch unangreifbar" mit „glaubwürdig" verwechselt wird — genau diese Gleichsetzung ist der Fehlschluss und fällt beim ersten Gegenbeleg in sich zusammen. Den Spieß umzudrehen verlagert das Thema auf die Motive der Hinweisgeber (Ablenkung / Red Herring) und liest sich wie ein Schuldeingeständnis. „Kein Kommentar" überlässt der Redaktion die Erzählung, ohne den falschen Schluss zu entschärfen — die offene Sachfrage „Was ist dran?" bleibt unbeantwortet.',
      en: 'Legal counsel\'s proposal is an appeal to ignorance: "not proven" becomes "refuted" — the absence of incrimination is passed off as proof of exoneration, and the burden of proof is reversed. That carries no crisis statement: the moment a single piece of evidence surfaces, the claim collapses and takes credibility with it. The best option uses the legitimate core (you may say the allegations are unproven) but draws only the admissible conclusion — open, not proven false — and rests the statement on review steps and a cooperation commitment. Adopting the sentence seems plausible because "legally unassailable" gets confused with "credible" — that very equation is the fallacy, and it collapses at the first counter-evidence. Turning the tables shifts the topic to the informants\' motives (deflection / red herring) and reads like an admission of guilt. "No comment" hands the narrative to the newsroom without defusing the faulty inference — the open question "what\'s to it?" stays unanswered.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_ignorance',
    relatedTechniques: ['appeal_to_ignorance', 'red_herring'],
  },
  {
    id: 'wave5a-appeal_to_ignorance-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit dieser Aussage versucht der Vertriebsleiter, ___.',
      en: 'Complete the sentence: With this statement, the sales director is trying to ___.',
    },
    scenario: {
      de: 'Messe-Standgespräch eines Nahrungsergänzungs-Anbieters mit einer Apothekerin: Sie zweifelt an der beworbenen Wirkung des Präparats. Der Vertriebsleiter kontert: „Keine einzige Untersuchung hat je widerlegt, dass unser Präparat die Abwehrkräfte stärkt — die Wirkung steht damit außer Frage." Eine positive Wirksamkeitsstudie legt er nicht vor.',
      en: 'Trade-fair stand conversation between a dietary-supplement vendor and a pharmacist: she doubts the product\'s advertised effect. The sales director counters: "Not a single study has ever disproven that our supplement strengthens the immune system — so its effect is beyond question." He presents no positive efficacy study.',
    },
    options: [
      {
        de: 'aus dem Fehlen eines Gegenbeweises einen Wirknachweis zu machen (Argument aus Unwissen)',
        en: 'turn the absence of a counter-proof into proof of efficacy (appeal to ignorance)',
      },
      {
        de: 'unwiderlegbare Zweifel an einer günstigeren Alternative zu säen, um die Entscheidung zu bremsen (FUD)',
        en: 'sow irrefutable doubt about a cheaper alternative to stall the decision (FUD)',
      },
      {
        de: 'mit einer wörtlich wahren Aussage einen falschen Gesamteindruck zu erzeugen (Paltering)',
        en: 'create a false overall impression with a literally true statement (paltering)',
      },
      {
        de: 'aus einer größeren Datenlage nur die günstigen Belege auszuwählen (Cherry-Picking)',
        en: 'select only the favourable evidence from a larger body of data (cherry-picking)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Argument aus Unwissen: „nie widerlegt" wird zu „Wirkung außer Frage" — das Ausbleiben eines Gegenbeweises ersetzt den fehlenden Wirknachweis, und die Beweislast landet bei der Zweifelnden. Der Hebel setzt darauf, dass eine unwiderlegte Behauptung wie eine bestätigte klingt, obwohl beides nicht dasselbe ist. Legitim ist nur der Kern: dass es (noch) keinen Gegenbeleg gibt, darfst du feststellen — als offener Stand, nicht als Beweis. Erkennen und kontern: Du drehst die Beweislast zurück an den, der die Wirkung behauptet („Wo ist die positive Wirksamkeitsstudie?") und behandelst „nicht widerlegt" als unentschieden, nicht als belegt. FUD läge vor, wenn er Zweifel an einer Alternative streute statt eine beruhigende Schlussfolgerung aus dem Nichtwissen zu ziehen. Paltering bräuchte eine wörtlich wahre Aussage mit falschem Gesamteindruck — hier ist der Schluss offen fehlerhaft, nicht bloß irreführend verpackt. Cherry-Picking würde ausgewählte günstige Studien zeigen; er zeigt aber gerade keine, sondern beruft sich auf deren Fehlen.',
      en: 'Appeal to ignorance: "never disproven" becomes "effect beyond question" — the absence of a counter-proof stands in for the missing proof of efficacy, and the burden of proof lands on the doubter. The lever relies on an undisproven claim sounding like a confirmed one, though the two are not the same. Only the core is legitimate: you may note that no counter-evidence exists (yet) — as an open state, not as proof. To spot and counter it: hand the burden of proof back to whoever asserts the effect ("where is the positive efficacy study?") and treat "not disproven" as undecided, not as established. FUD would apply if he were sowing doubt about an alternative rather than drawing a reassuring conclusion from not-knowing. Paltering would need a literally true statement with a false overall impression — here the inference is openly faulty, not merely misleadingly packaged. Cherry-picking would show selected favourable studies; but he shows none, resting instead on their absence.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_ignorance',
    relatedTechniques: ['appeal_to_ignorance', 'fear_uncertainty_doubt', 'paltering_half_truth', 'cherry_picking'],
  },
];
