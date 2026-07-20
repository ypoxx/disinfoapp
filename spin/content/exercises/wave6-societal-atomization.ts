// Welle R6: 3 Übungen für societal_atomization (Atomisierung / Vereinzelung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung und nie die Täterperspektive. Evidenz-Tier weak: keine
// quantifizierten Wirkbehauptungen, Fokus auf Muster erkennen und schützen.
// relatedTechniques nur mit in content/techniques/index.ts registrierten IDs
// (plus der Subjekt-ID societal_atomization, die von der Hauptsession registriert
// wird); Distraktoren erscheinen als Options-Label, nicht als ID.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6SocietalAtomization: Exercise[] = [
  {
    id: 'wave6-societal_atomization-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Reorganisations-Ankündigung der Geschäftsführung an die gesamte Belegschaft: Die neue „Fokus"-Struktur, in wertschätzendem Ton an alle Abteilungen zugleich verschickt, schafft Teamküchen, das monatliche Belegschaftsforum, den abteilungsübergreifenden Chat und die gemeinsame Mittagspause ab. Jede und jeder arbeitet künftig an persönlichen Zielen, die ausschließlich im 1:1 mit der eigenen Führungskraft besprochen werden — „weniger Ablenkung, mehr Eigenverantwortung". Die Umstellung wird der ganzen Belegschaft als Gewinn präsentiert; von den Wegen, auf denen sich die Beschäftigten bisher quer austauschen und gemeinsam etwas einfordern konnten, bleibt keiner — nur noch der Draht nach oben.',
      en: 'A reorganization announcement from management to the entire workforce: the new "Focus" structure, sent to all departments at once in an appreciative tone, abolishes team kitchens, the monthly all-staff forum, the cross-department chat, and the shared lunch break. From now on everyone works on personal goals discussed solely in one-on-ones with their own manager — "less distraction, more personal responsibility". The change is presented to the whole workforce as a gain; of the channels on which staff could until now compare notes and press a demand together, not one remains — only the reporting line to the top.',
    },
    options: [
      { de: 'Atomisierung / Vereinzelung', en: 'Societal atomization' },
      { de: 'Divide and Rule (Teile und herrsche)', en: 'Divide and rule' },
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / othering' },
      { de: 'Coercive Control (Zwang und Kontrolle in einer Nahbeziehung)', en: 'Coercive control (in a close relationship)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Atomisierung / Vereinzelung: Nicht ein einzelner Übergriff und keine benannte Gegenpartei sind der Kern, sondern der Abbau der verbindenden Strukturen selbst — Küchen, Forum, Querkanal, gemeinsame Pause. Sobald nur noch vertikale 1:1-Wege nach oben bleiben, steht jede und jeder mit dem eigenen Anliegen allein da; die Grundlage für gemeinsames Handeln löst sich auf. Genau das macht das Muster erkennbar. Schutzhinweis: Der Hebel ist Isolation — als Kommunikationsverantwortliche:r hältst du dem entgegen, indem du horizontale Räume erhältst oder neu schaffst (moderierte Foren, offene Kanäle, die Belegschaftsversammlung) und sichtbar machst, dass viele dieselben Fragen haben, damit die Beschäftigten ihre gemeinsame Stimme behalten. Erkennen: Verbindende Strukturen fallen nacheinander weg, ohne Ersatz für den Austausch; Kommunikation läuft nur noch nach oben; kein Gegner wird benannt, das Für-sich-Stehen wird zur Norm. Divide and Rule lag nahe, meint aber etwas anderes: Dort werden zwei annähernd gleich starke Gruppen gegeneinander in Stellung gebracht, die intern intakt bleiben — hier bleibt keine zweite Gruppe, die Bindungen selbst werden aufgelöst. Scapegoating würde die Belegschaft gemeinsam gegen einen benannten Schuldigen richten — hier gibt es keinen Außenfeind. Coercive Control beschreibt ein anhaltendes Kontrollregime in einer engen Nahbeziehung zwischen zwei Personen; hier geht es nicht um Kontrolle eines Einzelnen durch eine:n Partner:in, sondern um die Vereinzelung einer ganzen Belegschaft.',
      en: 'Societal atomization: the core is neither a single assault nor a named opposing party, but the dismantling of the connective structures themselves — kitchens, forum, cross-channel, shared break. Once only vertical one-on-one paths upward remain, everyone stands alone with their own concern; the basis for acting together dissolves. That is exactly what makes the pattern recognizable. Protective note: the lever is isolation — as the person responsible for communications, you counter it by preserving or creating horizontal spaces (moderated forums, open channels, the all-staff assembly) and making visible that many share the same questions, so staff keep their common voice. To spot it: connective structures fall away one after another with no replacement for exchange; communication runs only upward; no enemy is named, and standing alone becomes the norm. Divide and rule was close but means something else: there two roughly equal groups are set against each other while staying internally intact — here no second group remains, the bonds themselves are dissolved. Scapegoating would turn the workforce jointly against a named culprit — here there is no outside enemy. Coercive control describes a sustained regime of control in a close relationship between two people; this is not one individual controlled by a partner but the isolation of an entire workforce.',
    },
    points: 10,
    primaryTechniqueId: 'societal_atomization',
    relatedTechniques: ['societal_atomization', 'divide_and_rule', 'scapegoating_othering'],
  },
  {
    id: 'wave6-societal_atomization-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die interne Kommunikation. Dir fällt auf, dass die Geschäftsführung Schritt für Schritt alle Foren abbaut, in denen sich die Belegschaft quer austauscht — Belegschaftsversammlung, offene Chat-Kanäle, das Intranet-Schwarze-Brett — und die Kommunikation konsequent auf einzelne 1:1-Gespräche nach oben umstellt. Kolleg:innen erzählen dir, sie fühlten sich zunehmend allein und wüssten gar nicht mehr, ob andere dieselben Sorgen haben.',
      en: 'You are responsible for internal communications. You notice that management is step by step dismantling every forum in which staff exchange views across the board — the all-staff assembly, open chat channels, the intranet notice board — and consistently shifting communication to individual one-on-ones upward. Colleagues tell you they increasingly feel alone and no longer even know whether others have the same worries.',
    },
    options: [
      {
        de: 'Ich benenne das Muster intern als Vereinzelung und setze etwas dagegen: Ich erhalte oder schaffe horizontale Räume, in denen sich die Belegschaft quer austauschen kann — moderierte Foren, offene Kanäle, die Belegschaftsversammlung — und mache transparent, dass viele dieselben Fragen haben, damit die Beschäftigten ihre gemeinsame Stimme zurückbekommen.',
        en: 'I name the pattern internally as isolation and push back: I preserve or create horizontal spaces where staff can exchange views across the board — moderated forums, open channels, the all-staff assembly — and make transparent that many share the same questions, so staff regain their common voice.',
      },
      {
        de: 'Ich unterstütze die Umstellung auf reine 1:1-Kommunikation: So erreicht jede Botschaft die Leute am direktesten, und Unruhe in großen Runden lässt sich vermeiden.',
        en: 'I support the shift to purely one-on-one communication: that way every message reaches people most directly, and unrest in large gatherings is avoided.',
      },
      {
        de: 'Ich verweise die Verunsicherten einzeln an Coaching-Angebote, damit jede und jeder die eigene Belastung für sich bewältigt — ein gemeinsames Format braucht es dafür nicht.',
        en: 'I refer the unsettled individuals one by one to coaching offers, so each person handles their own strain by themselves — no shared format is needed for that.',
      },
      {
        de: 'Ich rate, in der Kommunikation eine externe Bedrohung — den Wettbewerb — in den Vordergrund zu rücken, damit die Belegschaft über den gemeinsamen Gegner wieder zusammenrückt.',
        en: 'I advise foregrounding an external threat — the competition — in our communications, so the workforce closes ranks again around a common enemy.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster ist Atomisierung / Vereinzelung: Nicht ein Vorfall, sondern der Abbau aller Querverbindungen isoliert die Beschäftigten, bis niemand mehr weiß, ob andere dieselben Sorgen teilen — und gemeinsames Handeln unmöglich wird. Die beste Reaktion nimmt der Vereinzelung ihre Grundlage: Du erhältst oder schaffst horizontale Räume und machst sichtbar, dass viele dieselbe Frage haben, sodass die gemeinsame Stimme zurückkehrt. Schutzhinweis: Der Schaden liegt im Wegfall der Bindungen, nicht in einer einzelnen Maßnahme; wirksamer Schutz stärkt genau die Verbindungen, die gekappt werden sollen. Erkennen: Foren verschwinden ohne Ersatz, Kommunikation läuft nur noch vertikal, das Für-sich-Stehen wird zur Norm. Zur reinen 1:1-Option: Sie klingt effizient, verstärkt aber genau die vertikale Vereinzelung — die Beschäftigten erreichen sich untereinander gar nicht mehr. Zur Coaching-Option: Individuelle Unterstützung ist gut gemeint, behandelt die Vereinzelung aber als Privatproblem jeder Einzelnen und lässt die weggebrochene Gemeinsamkeit unberührt — das Muster wirkt weiter. Zur Feindbild-Option: Über einen gemeinsamen Gegner zusammenzurücken würde die Beschäftigten nur scheinbar verbinden; du löst kein echtes Bindungsproblem, sondern greifst mit Scapegoating zu einer weiteren manipulativen Technik, statt tragfähige Strukturen wiederherzustellen.',
      en: 'The pattern is societal atomization: not a single incident but the dismantling of every cross-connection isolates staff, until no one knows whether others share the same worries — and acting together becomes impossible. The best response removes the technique\'s foundation: you preserve or create horizontal spaces and make visible that many share the same question, so the common voice returns. Protective note: the harm lies in the loss of bonds, not in any one measure; effective protection strengthens exactly the connections meant to be cut. To spot it: forums vanish with no replacement, communication runs only vertically, and standing alone becomes the norm. On the purely one-on-one option: it sounds efficient but reinforces precisely the vertical isolation — staff no longer reach each other at all. On the coaching option: individual support is well meant but treats isolation as each person\'s private problem and leaves the lost togetherness untouched — the pattern keeps working. On the common-enemy option: rallying around an external foe would only appear to connect staff; you solve no real problem of bonds and instead reach for scapegoating, another manipulative technique, rather than restoring durable structures.',
    },
    points: 10,
    primaryTechniqueId: 'societal_atomization',
    relatedTechniques: ['societal_atomization', 'scapegoating_othering', 'unity_identity'],
  },
  {
    id: 'wave6-societal_atomization-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Ein Arbeitgeberverband hat eine Kommunikationsagentur mit einer öffentlichen Kampagne an die breite Öffentlichkeit beauftragt; das Strategiepapier liegt dir zur Prüfung vor: Über Monate sollen Anzeigen und Meinungsbeiträge in freundlichem, aspirationalem Ton die Botschaft streuen, dass Gewerkschaften, Vereine und Nachbarschaftsinitiativen aus der Zeit gefallen seien und man am weitesten komme, wenn man sich ganz auf sich selbst verlässt. Die Motive zeigen zufriedene Einzelne, die es „allein geschafft" haben; die ganze Kampagne feiert das Für-sich-Vorankommen und wirbt dafür, sich aus den verbindenden Strukturen zurückzuziehen.',
      en: 'An employers\' association has commissioned a communications agency to run a public campaign aimed at the general public; the strategy paper is before you for review: over months, ads and op-eds are to spread, in a friendly, aspirational tone, the message that unions, associations, and neighborhood groups are out of date and that you get furthest by relying entirely on yourself. The visuals show contented individuals who "made it on their own"; the whole campaign celebrates getting ahead by yourself and pitches withdrawing from the connective structures.',
    },
    options: [
      { de: 'Atomisierung / Vereinzelung', en: 'Societal atomization' },
      { de: 'Divide and Rule (Teile und herrsche)', en: 'Divide and rule' },
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / othering' },
      { de: 'Astroturfing (vorgetäuschte Graswurzelunterstützung mit erfundenen Stimmen)', en: 'Astroturfing (faked grassroots support with invented voices)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Begriff dafür ist Atomisierung / Vereinzelung: Menschen werden aus ihren Zwischenstrukturen — Gewerkschaften, Vereinen, Nachbarschaft — herausgelöst, sodass sie als Einzelne ohne Rückhalt dastehen. Als Begriff beschreibt Atomisierung genau diese Auflösung der verbindenden Strukturen, ohne dass daraus ein bezifferter Wirkungsgrad folgt — die Grundlage ist politiktheoretisch (Arendt), nicht experimentell. Schutzhinweis: Nimm das Muster ernst, auch wenn die Kampagne freundlich und harmlos klingt; wirksam ist, die verbindenden Strukturen zu stärken und sichtbar zu machen, statt sie preiszugeben. Erkennen: Verbindende Institutionen werden pauschal als überholt gezeichnet, das Für-sich-Stehen zum Ideal erklärt, ganz ohne Angriff auf eine bestimmte Gruppe. Divide and Rule lag nahe, meint aber das gezielte Gegeneinander zweier annähernd gleich starker Gruppen, die intern intakt bleiben — hier gibt es keine zweite Gruppe, allein der Rückzug aus den Bindungen wird beworben. Scapegoating würde einen benannten Schuldigen brauchen, gegen den sich alle richten — die Kampagne kommt jedoch ganz ohne einen solchen Gegner aus. Astroturfing lag nahe, weil auch hier eine über Monate koordinierte Kampagne läuft — Astroturfing täuscht aber eine echte Graswurzelunterstützung vor (erfundene Bürgerstimmen, gefälschte Profile); hier wird offen und erkennbar als bezahlte Kampagne geworben, ohne vorgetäuschte Authentizität. Was die Botschaft trägt, ist nicht eine erfundene Menge, sondern die Aufforderung, sich zu vereinzeln.',
      en: 'The term for this is societal atomization: people are detached from their intermediary structures — unions, associations, neighborhood — so that they stand as isolated individuals without backing. As a term, atomization names exactly this dissolution of the connective structures, without implying any quantified effect size — the basis is political theory (Arendt), not experiment. Protective note: take the pattern seriously even when the campaign sounds friendly and harmless; what works is strengthening the connective structures and making them visible rather than giving them up. To spot it: connective institutions are portrayed wholesale as outdated and standing alone is cast as the ideal, entirely without attacking any particular group. Divide and rule was close but means the deliberate setting-against of two roughly equal groups that stay internally intact — here there is no second group, only the retreat from bonds is advertised. Scapegoating would need a named culprit for everyone to turn against — but the campaign works entirely without such an enemy. Astroturfing was close because there is a months-long coordinated campaign here too — but astroturfing fakes genuine grassroots support (invented citizen voices, fake profiles); here the pitch is open and plainly a paid campaign, with no simulated authenticity. What carries the message is not an invented crowd but the call to isolate yourself.',
    },
    points: 10,
    primaryTechniqueId: 'societal_atomization',
    relatedTechniques: ['societal_atomization', 'divide_and_rule', 'scapegoating_othering', 'astroturfing_sockpuppets'],
  },
];
