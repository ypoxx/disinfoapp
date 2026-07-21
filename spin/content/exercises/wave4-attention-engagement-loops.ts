// Welle R4: 3 Übungen für attention_engagement_loops (Attention & Engagement Loops).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4AttentionEngagementLoops: Exercise[] = [
  {
    id: 'w4-attention_engagement_loops-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster beschreibt der Befund?',
      en: 'Which pattern does the diagnosis describe?',
    },
    scenario: {
      de: 'Social-Media-Monitoring in der Pressestelle einer Krankenkasse: Die Teamleiterin geht mit ihrer Volontärin durch, warum deren morgendliche Kanalsichtung regelmäßig von 15 auf 60 Minuten anwächst. Der Befund: Der Feed der Plattform hat kein Ende und keine „Alles gesehen"-Marke, Videos starten automatisch nacheinander, und nach inaktiven Tagen führen Rückhol-Benachrichtigungen nicht zum konkreten Beitrag, sondern auf die Startseite des Feeds. Die Beiträge selbst sind Routinethemen ohne Aufregerwert; Punkte oder Serien vergibt die Plattform nicht.',
      en: 'Social media monitoring in the press office of a health insurer: the team lead sits down with her trainee to work out why the trainee\'s morning channel review keeps growing from 15 to 60 minutes. The diagnosis: the platform\'s feed has no end and no "you\'re all caught up" marker, videos autoplay one after another, and after inactive days win-back notifications lead not to the specific post but to the top of the feed. The content itself is routine industry fare with no outrage value, and the platform hands out no points or streaks.',
    },
    options: [
      { de: 'Gamification / Variable Belohnungen', en: 'Gamification / variable reward schedules' },
      { de: 'Attention & Engagement Loops', en: 'Attention and engagement loops' },
      { de: 'Doomscrolling / FOMO Engineering', en: 'Doomscrolling / FOMO engineering' },
      { de: 'Dark Patterns', en: 'Dark patterns' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Attention & Engagement Loops: Die Sitzung hat konstruktionsbedingt keinen Endpunkt — endloser Feed, Autoplay und Rückhol-Benachrichtigungen greifen als Schleife ineinander, jeder Ausstiegsmoment wird durch einen neuen Einstiegsreiz ersetzt. Genau diese Bindungsarchitektur als System benennt der Begriff; wie stark solche Architekturen das Verhalten tatsächlich verschieben, ist empirisch nur indirekt gestützt. Legitim einsetzen: In eigenen Kanälen und Apps gestaltest du Wiederkehr über Relevanz — anlassbezogene Benachrichtigungen mit Sprung direkt zum Inhalt, ein Feed mit erreichbarem „Du bist auf dem Stand". Erkennen und kontern: Prüf bei jedem Werkzeug, ob es einen Zustand „fertig" gibt, und gib Monitoring-Aufgaben ein definiertes Ziel — Quellenliste und Zeitfenster statt offener Feed-Sichtung. Doomscrolling / FOMO Engineering wirkt plausibel, weil die Nutzung ungeplant wächst — dieses Muster bindet aber über negative Affekte und Verpassensangst, und hier sind die Inhalte ausdrücklich Routinethemen. Gamification / Variable Belohnungen liegt nahe, weil beide Muster auf Wiederkehr zielen — doch es fehlt jede Spielmechanik: keine Punkte, keine Serien, keine unvorhersehbaren Auszeichnungen. Dark Patterns passt als Nachbarschaft, meint aber im Kern täuschende Interface-Muster rund um Transaktionen wie versteckte Kosten oder erschwerte Kündigung; hier wird niemand über eine Entscheidung getäuscht — die Architektur hält, statt zu tricksen.',
      en: 'Attention and engagement loops: by design, the session has no endpoint — endless feed, autoplay, and win-back notifications interlock into a loop in which every moment of exit is replaced by a new cue to re-enter. That retention architecture as a system is exactly what the term names; how strongly such architectures actually shift behaviour is only indirectly supported by evidence. Used legitimately: in your own channels and apps you design return visits around relevance — event-based notifications that jump straight to the item, a feed with a reachable "you\'re all caught up". To spot and counter it: check every tool for whether a state of "done" exists, and give monitoring tasks a defined goal — a source list and a time box instead of open-ended feed review. Doomscrolling / FOMO engineering looks plausible because usage grows beyond plan — but that pattern binds through negative affect and fear of missing out, and here the content is explicitly routine fare. Gamification / variable reward schedules suggests itself because both patterns target return visits — but there is no game mechanic in sight: no points, no streaks, no unpredictable awards. Dark patterns sits in the right neighbourhood, but at its core means deceptive interface design around transactions such as hidden costs or obstructed cancellation; nobody here is deceived about a decision — the architecture holds users rather than tricking them.',
    },
    points: 10,
    primaryTechniqueId: 'attention_engagement_loops',
    relatedTechniques: ['attention_engagement_loops', 'gamification_variable_reward', 'doomscrolling_fomo_engineering', 'dark_patterns'],
  },
  {
    id: 'w4-attention_engagement_loops-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Relaunch der Mitarbeiter-News-App eines Logistikkonzerns, Konzeptabnahme mit der Digitalagentur: Du leitest die Interne Kommunikation. Die Agentur präsentiert ihre „Engagement-Architektur": ein endloser, algorithmisch gemischter Feed statt gegliederter Rubriken, Autoplay für alle Videoformate und Rückhol-Benachrichtigungen nach 48 Stunden Inaktivität. Als Erfolgskennzahlen schlägt sie tägliche Sitzungen und Verweildauer vor. Das Budget ist freigegeben, die Agentur erwartet deine Entscheidung.',
      en: 'Relaunch of a logistics group\'s employee news app, concept sign-off with the digital agency: you head internal communications. The agency presents its "engagement architecture": an endless, algorithmically mixed feed instead of structured sections, autoplay for all video formats, and win-back notifications after 48 hours of inactivity. As success metrics it proposes daily sessions and time in app. The budget is approved and the agency expects your decision.',
    },
    options: [
      {
        de: 'Ich gebe das Konzept so nicht frei, sondern trenne Ziel und Mechanik: Feed mit klarem Ende und „Du bist auf dem Stand"-Marke, Benachrichtigungen nur anlassbezogen mit Sprung direkt zum Inhalt, Autoplay aus. Erfolg messen wir daran, ob die Kollegen finden und verstehen, was sie brauchen — eine interne News-App soll ihre Nutzer entlassen, nicht halten.',
        en: 'I don\'t sign the concept off as is, but separate goal from mechanics: a feed with a clear end and a "you\'re all caught up" marker, notifications only when there is a reason and jumping straight to the item, autoplay off. We measure success by whether colleagues find and understand what they need — an internal news app should release its users, not retain them.',
      },
      {
        de: 'Ich gebe das Konzept frei: Verweildauer ist die härteste Währung für Aufmerksamkeit, und jede zusätzliche Minute in der App erhöht die Chance, dass unsere Botschaften ankommen.',
        en: 'I sign the concept off: time in app is the hard currency of attention, and every additional minute in the app raises the chance that our messages land.',
      },
      {
        de: 'Ich streiche Feed und Benachrichtigungen ersatzlos und lasse die App als statisches Archiv bauen — wer etwas wissen will, sucht selbst; alles andere ist Bevormundung.',
        en: 'I cut the feed and notifications entirely and have the app built as a static archive — whoever wants to know something can search for it; anything else is paternalism.',
      },
      {
        de: 'Ich lasse die Rückhol-Benachrichtigungen zunächst drei Monate stillschweigend mitlaufen und entscheide dann anhand der Verweildauer-Kurve, ob wir die Belegschaft über die Mechanik informieren.',
        en: 'I let the win-back notifications run quietly for three months and then decide, based on the time-in-app curve, whether we inform the workforce about the mechanics.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die vorgeschlagene „Engagement-Architektur" ist ein Attention & Engagement Loop fürs eigene Haus: Endloser Feed, Autoplay und anlasslose Rückhol-Benachrichtigungen entfernen Endpunkte und erzeugen Rückkehranlässe — und die Kennzahl Verweildauer belohnt genau diese Schleife statt des Informationserfolgs. Die beste Option trennt sauber: Wiederkehr wird über Relevanz gestaltet — klare Struktur, erreichbares „fertig", Benachrichtigungen mit konkretem Anlass und Ziel —, und der Erfolgsmaßstab wandert von Bindung zu Verständnis. Legitim einsetzen: Genau so — transparent, aufgabengebunden, mit vorgesehenem Ausstieg. Erkennen und kontern: Frag bei jedem Architektur-Vorschlag, welches Nutzerziel die Mechanik trägt und woran Erfolg gemessen wird; Verweildauer als Leit-Kennzahl einer Informations-App ist ein Warnsignal. Die Freigabe wirkt plausibel, weil die Aufmerksamkeitslogik real ist — aber Verweildauer misst Bindung, nicht Verständnis, und eine interne App konkurriert nicht um Werbeminuten, sondern soll Arbeit ermöglichen. Das statische Archiv überkorrigiert: Feed und Benachrichtigungen sind legitime Werkzeuge; das Problem sind entfernte Endpunkte und anlasslose Rückholung, nicht jede Zustellung an sich. Der stille Testlauf wirkt pragmatisch, richtet aber eine verdeckte Bindungsarchitektur auf die eigenen Kollegen — Interne Kommunikation lebt von Vertrauen, und das übersteht keine nachgereichte Offenlegung.',
      en: 'The proposed "engagement architecture" is an attention and engagement loop aimed at your own workforce: an endless feed, autoplay, and unprompted win-back notifications remove stopping points and manufacture return visits — and the time-in-app metric rewards exactly that loop rather than communication success. The best option separates cleanly: return visits are designed around relevance — clear structure, a reachable "done", notifications with a concrete reason and target — and the yardstick moves from retention to comprehension. Used legitimately: exactly like this — transparent, task-bound, with an intended exit. To spot and counter it: for every architecture proposal, ask which user goal the mechanic serves and how success will be measured; time in app as the lead metric of an information app is a warning sign. Signing off looks plausible because the attention logic is real — but time in app measures retention, not comprehension, and an internal app does not compete for ad minutes; it is supposed to enable work. The static archive overcorrects: feeds and notifications are legitimate tools; the problem is removed endpoints and unprompted win-backs, not delivery as such. The quiet trial feels pragmatic but points a covert retention architecture at your own colleagues — internal communications runs on trust, and trust does not survive disclosure after the fact.',
    },
    points: 10,
    primaryTechniqueId: 'attention_engagement_loops',
    relatedTechniques: ['attention_engagement_loops', 'dark_patterns'],
  },
  {
    id: 'w4-attention_engagement_loops-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Feierabend einer Pressereferentin eines Museumsverbunds: Eine Benachrichtigung meldet eine neue Erwähnung des Hauses. Der Fingertipp führt nicht zur Erwähnung, sondern auf die Startseite des Feeds; oben liegt ein Video, das ohne Zutun startet, danach reiht sich das nächste an. Als sie die App vierzig Minuten später schließt, hat sie die Erwähnung noch nicht gelesen — und die App fragt, ob sie künftig „sofort über Neuigkeiten" informieren darf.',
      en: 'End of the workday for a museum network\'s press officer: a notification reports a new mention of the institution. The tap leads not to the mention but to the top of the feed; a video sits at the top and starts on its own, then the next one queues up. When she closes the app forty minutes later she still hasn\'t read the mention — and the app asks whether it may "notify her instantly about news" from now on.',
    },
    options: [
      { de: 'Attention & Engagement Loops', en: 'Attention and engagement loops' },
      { de: 'Doomscrolling / FOMO Engineering', en: 'Doomscrolling / FOMO engineering' },
      { de: 'Gamification / Variable Belohnungen', en: 'Gamification / variable reward schedules' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Attention & Engagement Loops: Der Begriff benennt die Bindungsarchitektur als System — die Benachrichtigung als Einstieg, Feed und Autoplay als endlose Weiterführung, die Berechtigungsabfrage beim Schließen als vorbereiteter nächster Einstieg. Ein Ausgang ist im Kreislauf nicht vorgesehen; das ist Design, kein Zufall — auch wenn die tatsächliche Wirkung solcher Architekturen empirisch nur indirekt gestützt ist. Legitim einsetzen: Für eigene Apps und Newsrooms heißt professionelle Gestaltung, Benachrichtigungen direkt zum gemeldeten Inhalt springen zu lassen und danach einen klaren Endpunkt anzubieten — Wiederkehr entsteht dann aus Relevanz. Erkennen und kontern: Prüf, ob dich der Tipp auf eine Benachrichtigung zum Anlass bringt oder auf die Startseite, deaktiviere anlasslose Rückhol-Nachrichten und erledige Monitoring über gezielte Suche statt über den Feed. Doomscrolling / FOMO Engineering wirkt plausibel, weil sich die Nutzung ungeplant verlängert — dieses Muster arbeitet aber mit negativen Nachrichtenströmen und Verpassensangst; hier hält die Architektur, nicht der Affekt. Gamification / Variable Belohnungen liegt als Nachbar-Bindungsmuster nahe — doch im Szenario gibt es keine Punkte, Serien oder zufällig getakteten Belohnungen, also keine Spielmechanik.',
      en: 'Attention and engagement loops: the term names the retention architecture as a system — the notification as entry, feed and autoplay as endless continuation, the permission prompt on closing as the pre-arranged next entry. The loop has no intended exit; that is design, not accident — even though the actual effect of such architectures is only indirectly supported by evidence. Used legitimately: for your own apps and newsrooms, professional design means notifications that jump straight to the reported item and offer a clear endpoint afterwards — return visits then come from relevance. To spot and counter it: check whether tapping a notification takes you to its subject or to the home feed, switch off unprompted win-back messages, and do monitoring through targeted search instead of the feed. Doomscrolling / FOMO engineering looks plausible because usage stretches beyond plan — but that pattern works through negative news streams and fear of missing out; here it is the architecture doing the holding, not the affect. Gamification / variable reward schedules suggests itself as the neighbouring retention pattern — but the scenario contains no points, streaks, or randomly timed rewards, hence no game mechanic.',
    },
    points: 10,
    primaryTechniqueId: 'attention_engagement_loops',
    relatedTechniques: ['attention_engagement_loops', 'doomscrolling_fomo_engineering', 'gamification_variable_reward'],
  },
];
