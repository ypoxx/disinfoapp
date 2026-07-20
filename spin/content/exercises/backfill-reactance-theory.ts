// Backfill: 3 Übungen für die bestehende Technik 'reactance_theory' (Reaktanz-Theorie).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Formatvorbild: pilot-paltering-half-truth.ts (Golden Set).
// NICHT in index.ts registriert — Registrierung erfolgt separat.

import type { Exercise } from '../types';

export const backfillReactanceTheory: Exercise[] = [
  {
    id: 'backfill-reactance_theory-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster zeigt sich hier?',
      en: 'Which pattern is at work here?',
    },
    scenario: {
      de: 'Vor einer noch unbestätigten Fusion verschickt die Rechtsabteilung eines Konzerns eine All-Staff-Mail an die Belegschaft: „Jegliche Gespräche über die geplante Fusion sind ab sofort untersagt; Zuwiderhandlungen werden arbeitsrechtlich verfolgt." Binnen eines Tages ist die Fusion das beherrschende Thema in jeder Teeküche, in den internen Chatgruppen kursieren Spekulationen, und die Zahl der Durchstechereien an Fachjournalisten steigt spürbar.',
      en: 'Ahead of a still-unconfirmed merger, a corporation\'s legal department sends an all-staff email to the workforce: "Any discussion of the planned merger is prohibited effective immediately; violations will be pursued under employment law." Within a day the merger dominates every kitchen conversation, speculation circulates in the internal chat groups, and leaks to trade journalists rise noticeably.',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance Theory' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Verlustaversion', en: 'Loss Aversion' },
      { de: '„But You Are Free" (Autonomie-Betonung)', en: '"But You Are Free" (autonomy affirmation)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reaktanz: Das ausgesprochene Verbot bedroht eine bislang selbstverständliche Freiheit — hier über ein Thema zu reden —, und Menschen stellen die bedrohte Freiheit wieder her, indem sie genau das Verbotene tun. Der Effekt ist der der „verbotenen Frucht": Nicht der Inhalt wird interessanter, die Einschränkung selbst erzeugt den Sog. Legitim nutzen lässt sich das Wissen, indem du auf nackte Verbote verzichtest und stattdessen einen nachvollziehbaren Grund lieferst („Aus rechtlichen Gründen können wir vor dem Signing nichts bestätigen; hier ist, was wir teilen können"). Erkennen und kontern: Wenn dich eine Sperre überhaupt erst neugierig macht, halte kurz inne und prüfe, ob die Sache ohne das Verbot noch denselben Reiz hätte. Verknappung würde ein begrenztes Gut voraussetzen — ein knappes Kontingent, das die Nachfrage anheizt; hier ist nichts limitiert außer der Erlaubnis zu reden. Verlustaversion würde greifen, wenn die Belegschaft etwas Greifbares zu verlieren hätte und dem zuvorkäme; sie verliert nichts, sie wehrt sich gegen die Bevormundung. Und „But You Are Free" arbeitet in die Gegenrichtung — es räumt Handlungsspielraum ein, um Widerstand zu dämpfen, während das Verbot ihn erst entzündet.',
      en: 'Reactance: the explicit ban threatens a freedom that until now was taken for granted — here, talking about a topic — and people restore the threatened freedom by doing exactly what was forbidden. This is the "forbidden fruit" effect: the content does not become more interesting; the restriction itself creates the pull. You can use the insight legitimately by avoiding bald prohibitions and giving a comprehensible reason instead ("For legal reasons we cannot confirm anything before signing; here is what we can share"). To spot and counter it: when a barrier is the very thing that makes you curious, pause and ask whether the matter would hold the same appeal without the ban. Scarcity would presuppose a limited good — a short supply that drives up demand; nothing is limited here except permission to talk. Loss aversion would apply if the workforce had something tangible to lose and were getting ahead of it; it loses nothing, it pushes back against being managed. And "But You Are Free" works in the opposite direction — it grants room to act in order to dampen resistance, whereas the ban is what ignites it.',
    },
    points: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'scarcity', 'loss_aversion', 'but_you_are_free'],
  },
  {
    id: 'backfill-reactance_theory-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Rollout einer verpflichtenden Schulung zur Informationssicherheit. Der Sicherheitsbeauftragte legt dir als Kommunikationsverantwortlicher seinen Entwurf für die interne Ankündigung vor: „Diese Schulung ist verpflichtend. Wer sie nicht bis Freitag abschließt, wird der Führungskraft gemeldet." Aus der letzten Pflicht-Kampagne weißt du: Solche Ansagen führten zu hektischem Durchklicken ohne Lerneffekt und zu offenem Murren in den Teams über die „Bevormundung von oben".',
      en: 'Rollout of a mandatory information-security training. As the communications lead, you receive the security officer\'s draft for the internal announcement: "This training is mandatory. Anyone who has not completed it by Friday will be reported to their manager." From the last mandatory campaign you know that such wording produced frantic click-through with nothing actually learned and open grumbling in the teams about "being patronised from above".',
    },
    options: [
      {
        de: 'Ich formuliere um: Ich nenne zuerst den Grund (ein realer Vorfall im Wettbewerb), gebe echten Spielraum („Ihr entscheidet, wann in dieser Woche und in welcher Reihenfolge") und mache die Frist zur Rahmung statt zur Drohung — so bleibt die Freiheit gewahrt und es entsteht Beteiligung statt Trotz.',
        en: 'I rewrite it: I lead with the reason (a real incident at a competitor), grant genuine leeway ("You decide when this week and in what order"), and make the deadline a frame rather than a threat — so the sense of freedom is preserved and engagement replaces defiance.',
      },
      {
        de: 'Ich verschärfe: Klarere Konsequenzen und ein tägliches Countdown-Mahnmail an alle Ausstehenden, damit der Druck endlich sitzt.',
        en: 'I tighten it: clearer consequences and a daily countdown reminder to everyone outstanding, so the pressure finally lands.',
      },
      {
        de: 'Ich übernehme den Entwurf unverändert — die Schulung ist nun einmal Pflicht, und eine klare, unmissverständliche Ansage ist das Ehrlichste.',
        en: 'I run the draft as is — the training is mandatory, after all, and a clear, unambiguous directive is the most honest approach.',
      },
      {
        de: 'Ich streiche die Sanktion und setze stattdessen auf einen Appell: „Wer nicht teilnimmt, gefährdet die Sicherheit aller Kolleginnen und Kollegen."',
        en: 'I drop the sanction and switch to an appeal instead: "Anyone who does not take part endangers the security of all their colleagues."',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf ist eine reine Freiheitsbeschränkung mit Drohung — genau die Konstellation, die Reaktanz auslöst: Die Empfänger erleben Bevormundung, und der Widerstand entlädt sich als Durchklicken ohne Lerneffekt und als Murren. Die beste Option nutzt das Wissen um Reaktanz konstruktiv: Ein nachvollziehbarer Grund macht die Vorgabe legitim, und echter Wahlspielraum (Zeitpunkt, Reihenfolge) gibt die bedrohte Autonomie zurück — das ist der Kern der „But You Are Free"-Rahmung, die Reaktanz senkt, statt sie zu befeuern. Das Verschärfen wirkt naheliegend, verdoppelt aber genau den Reiz zum Gegensteuern; mehr Druck erzeugt mehr Trotz, und das tägliche Mahnmail kippt zusätzlich ins Nagging. Den Entwurf unverändert zu übernehmen verwechselt Klarheit mit Wirksamkeit — klar ist er, aber er provoziert das Verhalten, das du verhindern willst. Der reine Appell tauscht die Drohung gegen Schuldzuweisung („du gefährdest alle") — das ist Confirmshaming und adressiert die Reaktanz gar nicht, sondern legt eine zweite Manipulation darüber.',
      en: 'The draft is a pure restriction of freedom backed by a threat — exactly the configuration that triggers reactance: recipients experience being patronised, and the resistance vents as mindless click-through and as grumbling. The best option puts the knowledge of reactance to constructive use: a comprehensible reason makes the requirement legitimate, and genuine leeway (timing, order) hands back the threatened autonomy — this is the core of the "But You Are Free" framing, which lowers reactance rather than fuelling it. Tightening the message looks obvious but doubles the very urge to push back; more pressure breeds more defiance, and the daily reminder additionally tips into nagging. Running the draft unchanged confuses clarity with effectiveness — clear it is, but it provokes the behaviour you want to prevent. The pure appeal swaps the threat for blame ("you endanger everyone") — that is confirmshaming and does not address the reactance at all; it layers a second manipulation on top.',
    },
    points: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'but_you_are_free', 'nagging', 'confirmshaming'],
  },
  {
    id: 'backfill-reactance_theory-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Die Anmeldewelle entsteht vor allem, weil ___.',
      en: 'Complete the sentence: The surge of sign-ups arises mainly because ___.',
    },
    scenario: {
      de: 'Change-Kommunikation zur Einführung eines neuen Analyse-Tools: Der Change-Manager will möglichst viele Teams für den freiwilligen Pilotbetrieb gewinnen; Plätze gibt es reichlich, teilnehmen darf jedes Team. Statt zu werben, schreibt er im Intranet: „Ganz ehrlich — der Pilot ist nur etwas für Teams, die ohnehin schon sehr weit sind. Die meisten sollten lieber die fertige Version abwarten." Prompt melden sich überdurchschnittlich viele Teams an, um zu zeigen, dass sie dazugehören.',
      en: 'Change communications for the launch of a new analytics tool: the change manager wants to recruit as many teams as possible for the voluntary pilot; places are plentiful and any team may join. Instead of promoting it, he posts on the intranet: "Honestly — the pilot is only for teams that are already very advanced. Most are better off waiting for the finished version." A markedly above-average number of teams promptly sign up to show that they belong.',
    },
    options: [
      {
        de: 'die Andeutung, der Pilot sei den meisten verwehrt, die Freiheit mitzumachen bedroht — und die Teams stellen sie durch Anmeldung wieder her (Reaktanz)',
        en: 'the suggestion that the pilot is off-limits to most threatens the freedom to take part — and the teams restore it by signing up (reactance)',
      },
      {
        de: 'ein bewusst exklusives, mengenmäßig begrenztes Angebot die Begehrlichkeit über die knappe Verfügbarkeit steigert (Verknappung)',
        en: 'a deliberately exclusive, quantity-limited offer raises desirability through scarce availability (scarcity)',
      },
      {
        de: 'die Teams eine drohende konkrete Einbuße vermeiden wollen, falls sie den Pilot verpassen (Verlustaversion)',
        en: 'the teams want to avoid a concrete impending loss should they miss the pilot (loss aversion)',
      },
      {
        de: 'der Hinweis, jedes Team entscheide völlig frei, durch die Betonung der Autonomie die Zustimmung erhöht („But You Are Free")',
        en: 'the note that each team decides entirely freely raises agreement by affirming autonomy ("But You Are Free")',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Reaktanz, hier als bewusste Umkehrpsychologie eingesetzt: Der Satz „Die meisten sollten lieber abwarten" schreibt den Teams vor, was für sie angemessen ist, und beschneidet damit ihre Entscheidungsfreiheit — sie reagieren, indem sie das Gegenteil tun und sich anmelden. Der Marker ist die entmutigende, den Teams Kompetenz oder Zugehörigkeit absprechende Formulierung, nicht ein Hinweis auf Stückzahlen. Legitim ist die Grenze schmal: Reaktanz für ein tatsächlich sinnvolles Verhalten anzustoßen kann funktionieren, spielt aber mit dem Selbstwert — sauberer arbeitest du mit einem ehrlichen Grund und echter Wahl. Erkennen und kontern: Wenn dich ein „das ist nichts für Leute wie euch" zum Mitmachen reizt, bewerte die Sache nach ihrem eigenen Nutzen. Verknappung liegt nahe, weil „nur für wenige" exklusiv klingt — ihr Motor wäre aber eine künstliche Obergrenze oder ein ablaufender Zugang, kein Angriff auf das Selbstbild. Verlustaversion würde den Teams einen konkreten Nachteil ausmalen, dem sie durch die Anmeldung entgehen; hier droht kein Verlust, es wird ihnen schlicht die Eignung abgesprochen. Und „But You Are Free" gäbe die Entscheidung ausdrücklich zurück („ihr entscheidet selbst") — die Botschaft hier tut das genaue Gegenteil und entscheidet für die Teams.',
      en: 'Reactance, here deployed as deliberate reverse psychology: the line "most are better off waiting" tells the teams what is appropriate for them and thereby curtails their freedom to choose — they react by doing the opposite and signing up. The marker is the discouraging phrasing that denies the teams competence or belonging, not a reference to quantities. The legitimate line is narrow: triggering reactance toward a genuinely useful behaviour can work, but it plays on self-worth — a cleaner approach is an honest reason paired with real choice. To spot and counter it: when a "this isn\'t for people like you" tempts you to join in, judge the matter on its own usefulness. Scarcity is tempting because "only for a few" sounds exclusive — but its engine would be an artificial cap or an expiring window of access, not an attack on self-image. Loss aversion would paint a concrete disadvantage the teams could dodge by signing up; nothing is at risk of being lost here, they are simply told they do not qualify. And "But You Are Free" would hand the decision back explicitly ("it is entirely your call") — the message here does the exact opposite and decides for the teams.',
    },
    points: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'scarcity', 'loss_aversion', 'but_you_are_free'],
  },
];
