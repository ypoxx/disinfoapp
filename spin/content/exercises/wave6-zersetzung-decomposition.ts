// Welle R6: 3 Übungen für zersetzung_decomposition (Zersetzung / Decomposition).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung und nie die Täterperspektive. Evidenz-Tier weak: keine
// quantifizierten Wirkbehauptungen, Fokus auf Muster erkennen und schützen.
// relatedTechniques nur mit in content/techniques/index.ts registrierten IDs
// (divide_and_rule) plus der Subjekt-ID zersetzung_decomposition, die von der
// Hauptsession registriert wird; Distraktoren erscheinen als Options-Label,
// nicht als ID.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6ZersetzungDecomposition: Exercise[] = [
  {
    id: 'wave6-zersetzung_decomposition-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Einzelgespräch in der Betriebsseelsorge: Eine Abteilungsleiterin schildert, wie über Monate unauffällig Fäden gegen sie gezogen werden — anonyme Gerüchte über ihre Kompetenz sickern durchs Haus, Einladungen erreichen sie „versehentlich" nicht mehr, Unterlagen verschwinden aus dem Team-Laufwerk und langjährige Verbündete gehen nach und nach auf Abstand. Es gibt keinen offenen Angriff und keine sichtbare Gruppe von Gegnern; jeder Vorfall wirke für sich wie ein Zufall, sie könne aber niemanden benennen, der das steuert, und fühle sich zunehmend zermürbt und isoliert.',
      en: 'A one-on-one at the workplace pastoral service: a department head describes how, over months, threads are quietly pulled against her — anonymous rumours about her competence seep through the building, invitations "accidentally" stop reaching her, documents vanish from the team drive, and long-standing allies gradually keep their distance. There is no open attack and no visible group of opponents; each incident looks like coincidence on its own, and she cannot name anyone steering it, yet she feels increasingly worn down and isolated.',
    },
    options: [
      { de: 'Zersetzung (verdeckt orchestrierte Zermürbungskampagne)', en: 'Zersetzung (a covertly orchestrated attrition campaign)' },
      { de: 'Gaslighting (das Realitätsempfinden gezielt untergraben)', en: 'Gaslighting (systematically undermining someone\'s sense of reality)' },
      { de: 'Coercive Control (anhaltendes Regime aus Regeln, Kontrolle und Überwachung)', en: 'Coercive Control (a sustained regime of rules, control, and surveillance)' },
      { de: 'Mobbing/Bossing (Anfeinden und Ausgrenzung durch Kolleg:innen oder Vorgesetzte)', en: 'Mobbing/bossing (hostility and exclusion by colleagues or superiors)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zersetzung: Der Kern ist nicht ein einzelner Übergriff, sondern ein verdeckt orchestriertes Bündel unauffälliger Maßnahmen — Gerüchte, „vergessene" Einladungen, verschwindende Unterlagen, wegbröckelnde Verbündete —, das hinter einer Fassade der Normalität zusammenläuft und die Betroffene Stück für Stück zermürbt und isoliert. Genau das macht das Muster erkennbar: Jede Episode wirkt „für sich zufällig", die Summe richtet sich systematisch gegen dieselbe Person, ohne dass ein offener Angriff oder ein greifbarer Urheber sichtbar wird. Schutzhinweis: Der Hebel ist Verdecktheit und Isolation — führe ein nüchternes Ereignisprotokoll (Datum, Vorfall, Zeugen), das die Einzelfälle als Muster sichtbar macht, sichere Belege außerhalb der Reichweite möglicher Beteiligter und halte den Kontakt der Betroffenen zu Verbündeten aktiv; verweise früh auf formale Stellen (Personalvertretung, Vertrauensperson, Rechtsberatung). Erkennen: Achte auf die Häufung kleiner „Missgeschicke" gegen dieselbe Zielperson, den fehlenden greifbaren Urheber und die fortschreitende Isolation. Gaslighting lag nahe, weil auch hier Verunsicherung entsteht — dort geht es aber gezielt darum, die Wahrnehmung und Erinnerung der Betroffenen zu untergraben („du bildest dir das ein"); hier bleibt ihr Blick klar, es sind reale, koordinierte Vorfälle. Coercive Control lag nahe, weil auch dort systematisch Druck auf eine einzelne Person wirkt — dort aber als offenes Regime aus Regeln, Kontrolle und Überwachung im engen Nahverhältnis, während der Druck hier verdeckt und aus dem Hintergrund kommt, nicht als offene Kontrolle. Mobbing/Bossing lag nahe, weil auch dort jemand über Gerüchte und Ausgrenzung zermürbt wird — es ist aber typischerweise offenes, zuordenbares Anfeinden durch Kolleg:innen oder Vorgesetzte, während Zersetzung die Zermürbung verdeckt und abstreitbar aus einer verborgenen Hand orchestriert und mit stiller Sabotage kombiniert.',
      en: 'Zersetzung: the core is not a single assault but a covertly orchestrated bundle of unremarkable measures — rumours, "forgotten" invitations, vanishing documents, allies drifting away — that converges behind a façade of normality and wears the target down and isolates her step by step. That is exactly what makes the pattern recognizable: each episode looks "coincidental on its own", yet the sum is systematically aimed at the same person, with no open attack and no identifiable source. Protective note: the lever is covertness and isolation — keep a sober log of events (date, incident, witnesses) that makes the individual cases visible as a pattern, secure evidence beyond the reach of anyone possibly involved, and keep the target\'s contact with allies active; point early to formal channels (staff representation, a trusted contact, legal advice). To spot it: watch for the accumulation of small "mishaps" against one and the same target, the absence of a tangible instigator, and the progressive isolation. Gaslighting was close because doubt arises here too — but there the aim is to undermine the target\'s perception and memory ("you\'re imagining it"); here her view stays clear, these are real, coordinated incidents. Coercive control was close because systematic pressure is applied to one person there too — but as an overt regime of rules, control and surveillance in a close relationship, whereas here the pressure works covertly and from the background, not as open control. Mobbing/bossing was close because someone is worn down through rumours and exclusion there too — but that is typically overt, attributable hostility by colleagues or superiors, whereas Zersetzung orchestrates the attrition covertly and deniably from a hidden hand and combines it with quiet sabotage.',
    },
    points: 10,
    primaryTechniqueId: 'zersetzung_decomposition',
    relatedTechniques: ['zersetzung_decomposition'],
  },
  {
    id: 'wave6-zersetzung_decomposition-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du berätst in einer Vertrauensstelle: Ein Mitarbeiter sucht dich auf, weil sich seit Monaten Auffälligkeiten gegen ihn allein häufen — anonyme Beschwerden über seine Arbeit, zurückgehaltene Freigaben, geplatzte Termine, kühl gewordene Kolleg:innen. Jeder Vorfall sei „für sich nichts", einen Urheber könne er nicht ausmachen, zweifle inzwischen, ob er sich das alles nur zusammenreime, und fühle sich zunehmend allein und ausgelaugt.',
      en: 'You are advising at a trust/ombuds office: an employee comes to you because for months oddities have been piling up against him alone — anonymous complaints about his work, withheld approvals, cancelled meetings, colleagues turning cold. Each incident is "nothing on its own", he cannot make out any instigator, now doubts whether he is just imagining a connection, and feels increasingly alone and drained.',
    },
    options: [
      {
        de: 'Ich nehme die Häufung ernst und benenne das Muster nüchtern: Es zählt die Summe koordinierter Einzelvorfälle gegen dieselbe Person, nicht der einzelne Zufall. Wir legen zuerst ein sachliches Ereignisprotokoll an (Datum, Vorfall, Zeugen) und sichern Belege außerhalb der Reichweite möglicher Beteiligter; ich bestätige ihm, dass seine Wahrnehmung nicht „eingebildet" ist, halte sein Netz zu Verbündeten aktiv und binde auf seinen Wunsch formale Stellen ein (Personalvertretung, Rechtsberatung).',
        en: 'I take the accumulation seriously and name the pattern soberly: what counts is the sum of coordinated individual incidents against one and the same person, not the single coincidence. We first start a factual log of events (date, incident, witnesses) and secure evidence beyond the reach of anyone possibly involved; I confirm to him that his perception is not "imagined", keep his network of allies active, and — if he wants — bring in formal channels (staff representation, legal advice).',
      },
      {
        de: 'Ich rate ihm, sofort eine formale Beschwerde einzureichen und darin den aus seiner Sicht wahrscheinlichsten Drahtzieher namentlich zu benennen — noch bevor irgendeine Dokumentation vorliegt, damit die Sache schnell offiziell wird.',
        en: 'I advise him to file a formal complaint at once and name the person he considers the most likely ringleader in it — before any documentation exists, so the matter becomes official quickly.',
      },
      {
        de: 'Ich rate ihm, die Sache auf sich beruhen zu lassen — solange er keinen Urheber benennen kann, ist es vermutlich eine Serie unglücklicher Zufälle; er soll abwarten, ob es sich von selbst legt.',
        en: 'I advise him to let it go — as long as he cannot name an instigator, it is probably a run of unlucky coincidences; he should wait and see whether it settles on its own.',
      },
      {
        de: 'Ich schlage vor, sofort eine offene Aussprache mit dem ganzen Team anzusetzen, um die Gerüchte gemeinsam auszuräumen und reinen Tisch zu machen.',
        en: 'I suggest calling an open discussion with the whole team right away, to clear the rumours together and set the record straight.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Reaktion tut dreierlei in der richtigen Reihenfolge: Sie nimmt die Häufung ernst und benennt das Muster nüchtern, sie dokumentiert und sichert Belege zuerst — und erst auf diesem Boden bestätigt sie die Wahrnehmung des Betroffenen und hält sein Netz und die formalen Wege offen. Zersetzung zielt gerade darauf, dass er die Vorfälle verharmlost, an sich zweifelt und sich isoliert; ein sachliches Ereignisprotokoll macht die Einzelfälle als Muster sichtbar und ist der Ankerpunkt, den die Verdecktheit auflösen will. Schutzhinweis: Der Schaden ist das koordinierte Ganze, nicht der einzelne Vorfall — sichere Belege außerhalb fremder Reichweite, halte den Kontakt zu Verbündeten und geh formale Wege im Tempo des Betroffenen. Erkennen: Häufung kleiner Vorfälle gegen dieselbe Person, kein greifbarer Urheber, fortschreitende Isolation. Die sofortige formale Beschwerde mit Namen klingt entschlossen und scheint sogar den richtigen Weg zu gehen — doch einen Verdächtigen zu benennen, bevor irgendein Beleg gesichert ist, macht den Betroffenen selbst angreifbar (Gegendarstellung, Verleumdungsvorwurf) und die Beschwerde leicht abweisbar; formale Stellen sind richtig, aber erst nach nüchterner Dokumentation und ohne vorschnelle Schuldzuweisung. Die Auf-sich-beruhen-Option wirkt besonnen, lässt den Betroffenen aber allein und spielt genau der Taktik in die Hände, die auf Zermürbung und Rückzug setzt — Wegsehen ist hier keine Neutralität. Die offene Aussprache im Team ist gut gemeint, aber verfrüht: Sie exponiert den Betroffenen öffentlich, bevor irgendein Beleg gesichert ist, warnt mögliche Beteiligte vor und gibt der verdeckten Hand die Gelegenheit, Spuren zu verwischen und die Zielperson als „Unruhestifter" hinzustellen — Schutz entsteht zuerst durch nüchterne Dokumentation und gesicherte Belege, nicht durch eine offene Runde ohne Grundlage.',
      en: 'The best response does three things in the right order: it takes the accumulation seriously and names the pattern soberly, it documents and secures evidence first — and only on that footing does it validate the affected person\'s perception and keep his network and the formal channels open. Zersetzung is designed precisely to make him minimize the incidents, doubt himself, and feel isolated; a factual log of events makes the individual cases visible as a pattern and is the anchor point the covertness tries to dissolve. Protective note: the harm is the coordinated whole, not the single incident — secure evidence beyond others\' reach, keep contact with allies, and take formal steps at the affected person\'s pace. To spot it: an accumulation of small incidents against the same person, no tangible instigator, progressive isolation. The immediate formal complaint naming a suspect sounds decisive and even seems to take the right route — but naming a suspect before any evidence is secured leaves the target himself exposed (counter-statement, defamation claim) and makes the complaint easy to dismiss; formal channels are right, but only after sober documentation and without a premature accusation. The "let it go" option seems level-headed but leaves him alone and plays straight into a tactic built on attrition and withdrawal — looking away here is not neutrality. The open team discussion is well meant but premature: it exposes the affected person publicly before any evidence is secured, tips off those possibly involved, and gives the hidden hand the chance to cover its tracks and cast the target as a "troublemaker" — protection comes first from sober documentation and secured evidence, not from an open forum with no foundation.',
    },
    points: 10,
    primaryTechniqueId: 'zersetzung_decomposition',
    relatedTechniques: ['zersetzung_decomposition'],
  },
  {
    id: 'wave6-zersetzung_decomposition-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fallbesprechung in einer Fortbildung zur Vereinsberatung: Der Vorstand einer regierungskritischen Bürgerinitiative berichtet, wie über ein Jahr zwischen den Aktiven Misstrauen gesät wird, gefälschte interne „Leaks" angebliche Alleingänge Einzelner behaupten, die Sitzungslogistik immer wieder sabotiert wird und Förderanträge spurlos versickern — bis Zusammenhalt und Handlungsfähigkeit zerfallen, ohne dass jemand sagen könnte, wer dahintersteht.',
      en: 'A case discussion in a training on advising civic associations: the board of a government-critical citizens\' initiative reports how, over a year, distrust is sown among the active members, fabricated internal "leaks" allege that individuals are going rogue, meeting logistics are repeatedly sabotaged, and funding applications vanish without a trace — until cohesion and capacity to act fall apart, with no one able to say who is behind it.',
    },
    options: [
      { de: 'Zersetzung (Decomposition)', en: 'Zersetzung (decomposition)' },
      { de: 'Divide and Rule (Teile und herrsche)', en: 'Divide and rule' },
      { de: 'Unterwanderung/Infiltration (V-Leute, Agent Provocateur)', en: 'Infiltration (informants, agent provocateur)' },
      { de: 'Kompromat (Druck durch kompromittierendes Material)', en: 'Kompromat (leverage through compromising material)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Begriff dafür ist Zersetzung: eine verdeckt orchestrierte, langlaufende Zermürbungskampagne, die viele unauffällige Maßnahmen — Misstrauenssaat, gefälschte „Leaks", Sabotage der Logistik, versickernde Anträge — hinter einer Fassade der Normalität bündelt, bis eine Gruppe handlungsunfähig zerfällt. Als Begriff beschreibt Zersetzung genau diese Verschiebung vom Einzelvorfall zur koordinierten Zermürbung mit unsichtbarem Urheber; historisch aus Stasi-Akten dokumentiert (Pingel-Schliemann 2002), als Fallevidenz und nicht als bezifferter Wirkungsgrad. Schutzhinweis: Nimm die Häufung ernst, auch wenn jeder Vorfall „für sich nichts" ist; mach die Einzelfälle über ein gemeinsames Protokoll als Muster sichtbar, sichere Belege und halte den Zusammenhalt aktiv — Isolation und Verdecktheit sind der eigentliche Hebel. Erkennen: koordinierte Kleinvorfälle gegen dieselbe Gruppe, kein greifbarer Urheber, zerfallender Zusammenhalt. Divide and Rule lag nahe, weil auch dort Misstrauen zwischen Beteiligten geschürt wird — diese Technik zielt aber darauf, Untergruppen dauerhaft gegeneinander regierbar zu halten, während Zersetzung breiter über Sabotage, Gerüchte und Isolation die ganze Handlungsfähigkeit auflöst und die Gruppe nicht beherrschen, sondern zerstören will. Unterwanderung/Infiltration lag nahe, weil auch dort verdeckt von innen gegen eine Gruppe gearbeitet wird — sie meint aber gezielt das Einschleusen von V-Leuten oder Provokateuren, während Zersetzung das breitere Repertoire aus Gerüchten, Sabotage und Zermürbung umfasst, zu dem Infiltration nur ein möglicher Baustein ist. Kompromat lag nahe, weil auch hier mit gefälschtem internem Material gearbeitet wird — Kompromat setzt aber echtes oder erfundenes kompromittierendes Material gezielt als Druck- oder Erpressungsmittel gegen eine Person ein, während die „Leaks" hier nur ein Baustein sind, um Misstrauen zu säen und die Gruppe von innen zu lähmen; es geht nicht um Erpressung, sondern um Zermürbung.',
      en: 'The term for this is Zersetzung: a covertly orchestrated, long-running attrition campaign that bundles many unremarkable measures — sowing distrust, fabricated "leaks", sabotaged logistics, applications that vanish — behind a façade of normality until a group falls apart, unable to act. As a term, Zersetzung names exactly this shift from the single incident to coordinated attrition with an invisible instigator; historically documented from Stasi files (Pingel-Schliemann 2002), as case evidence and not as a quantified effect size. Protective note: take the accumulation seriously even when each incident is "nothing on its own"; make the individual cases visible as a pattern through a shared log, secure evidence, and keep cohesion active — isolation and covertness are the real lever. To spot it: coordinated small incidents against the same group, no tangible instigator, disintegrating cohesion. Divide and rule was close because distrust is stoked among members there too — but that technique aims to keep subgroups permanently pitted against each other and thus governable, whereas Zersetzung more broadly dissolves the whole capacity to act through sabotage, rumours, and isolation, seeking not to rule the group but to destroy it. Infiltration was close because it also works covertly from within against a group — but it specifically means inserting informants or provocateurs, whereas Zersetzung covers the broader repertoire of rumours, sabotage, and attrition, of which infiltration is only one possible building block. Kompromat was close because fabricated internal material is used here too — but kompromat deploys real or invented compromising material as targeted leverage or blackmail against a person, whereas the "leaks" here are only one building block for sowing distrust and paralysing the group from within; the aim is not blackmail but attrition.',
    },
    points: 10,
    primaryTechniqueId: 'zersetzung_decomposition',
    relatedTechniques: ['zersetzung_decomposition', 'divide_and_rule'],
  },
];
