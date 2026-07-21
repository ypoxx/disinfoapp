// Welle R4: 3 Übungen für gamification_variable_reward (Gamification / Variable Belohnungen).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4GamificationVariableReward: Exercise[] = [
  {
    id: 'w4-gamification_variable_reward-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt die Plattform hier ein?',
      en: 'Which pattern is the platform using here?',
    },
    scenario: {
      de: 'Executive Communications eines Maschinenbaukonzerns: Die Referentin betreut den LinkedIn-Auftritt des CEO. Die Plattform zeigt dem Profil eine „Beitrags-Serie: 12 Tage" mit Verfallswarnung, vergibt in unregelmäßigen Abständen Auszeichnungen wie „Meistgelesene Stimme der Woche" und blendet nach jedem Post eine Punktzahl ein. Der CEO verlangt jetzt täglich einen Beitrag — auch an Tagen ohne Botschaft —, „damit die Serie nicht reißt und die nächste Auszeichnung kommt". Der Kommunikationsplan sieht zwei Posts pro Woche vor.',
      en: 'Executive communications at an engineering group: the comms officer runs the CEO\'s LinkedIn presence. The platform shows the profile a "12-day posting streak" with an expiry warning, hands out awards like "most-read voice of the week" at irregular intervals, and displays a score after every post. The CEO now demands a daily post — even on days with nothing to say — "so the streak doesn\'t break and the next award comes in". The communications plan calls for two posts a week.',
    },
    options: [
      { de: 'Attention & Engagement Loops', en: 'Attention and engagement loops' },
      { de: 'Doomscrolling / FOMO Engineering', en: 'Doomscrolling / FOMO engineering' },
      { de: 'Gamification / Variable Belohnungen', en: 'Gamification / variable reward schedules' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Gamification / Variable Belohnungen: Serie, Punktzahl und unregelmäßig eintreffende Auszeichnungen sind Spielmechaniken, die Posting-Frequenz belohnen statt kommunikativer Qualität — und der unvorhersehbare Takt der Auszeichnungen ist der variablen Verstärkung nachempfunden: Aus Sicht des Designs könnte jeder weitere Post der sein, der belohnt wird. Legitim einsetzen: In eigenen Formaten sind Spielmechaniken professionell, wenn sie transparent sind und ein inhaltliches Ziel tragen — eine Fortschrittsanzeige für ein abgeschlossenes Themenpaket etwa; Frequenz belohnst du nur dort, wo Frequenz wirklich das Ziel ist. Erkennen und kontern: Frag bei jeder Mechanik, was genau belohnt wird — Nutzungshäufigkeit oder Ergebnis; koppel die Posting-Entscheidung an den Redaktionsplan zurück und mach dem CEO die Anreizmechanik sichtbar: Die Serie ist ein Design-Element der Plattform, kein Kommunikations-KPI. Attention & Engagement Loops wirkt plausibel, weil es um Rückkehrverhalten geht — der Sammelbegriff meint aber Bindungsarchitektur wie endlose Feeds und Autoplay; hier tragen ausdrücklich Punkte, Serie und Auszeichnungen das Muster. Doomscrolling / FOMO Engineering liegt wegen der Verfallswarnung nahe — dieses Muster arbeitet aber mit negativen Affekten und Nachrichtenströmen, nicht mit einer Belohnungsarchitektur. Verlustaversion ist deshalb plausibel, weil die drohende Verfallsanzeige genau diesen Bias anspricht — sie ist aber der zugrunde liegende Hebel; gefragt war das Design-Muster, das ihn in eine Spielmechanik gießt.',
      en: 'Gamification / variable reward schedules: the streak, the score, and awards arriving at irregular intervals are game mechanics that reward posting frequency rather than communicative quality — and the unpredictable timing of the awards is modelled on variable reinforcement: by design, any next post could be the one that gets rewarded. Used legitimately: game mechanics are good professional practice in your own formats when they are transparent and serve a content goal — say, a progress indicator for a completed topic series; reward frequency only where frequency genuinely is the goal. To spot and counter it: for every mechanic, ask what exactly is being rewarded — usage frequency or outcome; tie the posting decision back to the editorial plan and make the incentive mechanics visible to the CEO: the streak is a design element of the platform, not a communications KPI. Attention and engagement loops looks plausible because return behaviour is at stake — but that umbrella term covers retention architecture like endless feeds and autoplay; here it is explicitly points, streak, and awards that carry the pattern. Doomscrolling / FOMO engineering suggests itself because of the expiry warning — but that pattern works through negative affect and news streams, not through a reward architecture. Loss aversion is plausible because the threatened expiry taps exactly that bias — but it is the underlying lever; the question asked for the design pattern that casts it into a game mechanic.',
    },
    points: 10,
    primaryTechniqueId: 'gamification_variable_reward',
    relatedTechniques: ['gamification_variable_reward', 'attention_engagement_loops', 'doomscrolling_fomo_engineering', 'loss_aversion'],
  },
  {
    id: 'w4-gamification_variable_reward-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Auswahl einer neuen Mitarbeiter-App, Abstimmungsrunde mit dem Anbieter: Du verantwortest die Interne Kommunikation. Der Anbieter empfiehlt sein „Engagement-Paket": Lese-Streaks mit Verfallswarnung, Punkte für jedes geöffnete News-Item und ein für alle sichtbares Abteilungs-Ranking — „das hebt die Öffnungsraten erfahrungsgemäß deutlich". Die Geschäftsführung fand die Demo überzeugend und erwartet deine Empfehlung.',
      en: 'Selecting a new employee app, alignment meeting with the vendor: you own internal communications. The vendor recommends its "engagement package": reading streaks with expiry warnings, points for every opened news item, and a department leaderboard visible to everyone — "in our experience this lifts open rates considerably". The executive board found the demo convincing and expects your recommendation.',
    },
    options: [
      {
        de: 'Ich empfehle Spielmechaniken nur dort, wo sie ein inhaltliches Ziel tragen: eine Fortschrittsanzeige für abgeschlossene Pflichtunterweisungen ja — Lese-Streaks mit Verfallsdrohung und öffentliches Ranking nein. Erfolg messen wir an Verständnis und Rückmeldungen, nicht an Öffnungs-Klicks: Sobald wir Klicks belohnen, optimieren die Kollegen aufs Punktekonto statt auf den Inhalt.',
        en: 'I recommend game mechanics only where they serve a content goal: a progress indicator for completed mandatory trainings yes — reading streaks with expiry threats and a public leaderboard no. We measure success by comprehension and feedback, not by open clicks: the moment we reward clicks, colleagues optimise for their point balance instead of the content.',
      },
      {
        de: 'Ich übernehme das Paket vollständig: Öffnungsraten sind unser wichtigstes Dashboard-KPI, und was die Nutzung nachweislich steigert, stärkt damit automatisch auch die interne Kommunikation.',
        en: 'I adopt the package in full: open rates are our most important dashboard KPI, and whatever demonstrably increases usage automatically strengthens internal communications as well.',
      },
      {
        de: 'Ich lehne jede Form von Gamification grundsätzlich ab und empfehle, die App ohne jedes Feedback- oder Fortschrittselement auszurollen — nur so bleibt die Nutzung wirklich freiwillig.',
        en: 'I reject any form of gamification on principle and recommend rolling out the app without any feedback or progress element at all — only then does usage remain truly voluntary.',
      },
      {
        de: 'Ich lasse Streaks und Ranking zunächst stillschweigend für drei Monate mitlaufen; wenn die Öffnungsraten steigen, informieren wir die Belegschaft im Nachgang über die Mechanik.',
        en: 'I let the streaks and leaderboard run quietly for three months; if open rates go up, we inform the workforce about the mechanics afterwards.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das „Engagement-Paket" ist Gamification mit variabler Belohnungslogik im eigenen Haus: Streaks, Punkte und Fremdvergleich belohnen die Häufigkeit des Öffnens — der Anbieter verkauft Klickfrequenz als Kommunikationserfolg, dabei misst eine Kennzahl, sobald sie belohnt wird, nicht mehr das, wofür sie stand. Die beste Option trennt sauber: Mechaniken, die an ein inhaltliches Ziel gekoppelt sind (Fortschritt bei Pflichtunterweisungen), bleiben; Frequenz-Belohnung mit Verfallsdrohung und öffentlichem Ranking fällt weg, und der Erfolgsmaßstab wandert von Klicks zu Verständnis. Legitim einsetzen: Genau so — transparent, zielgebunden, ohne Verfallsdrohung und ohne erzwungenen Fremdvergleich. Erkennen und kontern: Frag bei jedem Mechanik-Vorschlag „Was genau wird belohnt — und ist das unser Ziel?", und lass dir „erfahrungsgemäß"-Behauptungen des Anbieters als überprüfbare Zahlen mit Kontext geben. Die Komplettübernahme wirkt plausibel, weil KPI-Logik real ist — aber gesteigerte Öffnungen ohne Verständnis sind eine entkernte Kennzahl, und ein öffentliches Ranking verschiebt den Anreiz vollends vom Lesen zum Punktesammeln. Die Totalablehnung überkorrigiert: Fortschritts- und Feedback-Elemente sind legitime Werkzeuge; das Problem sind Verfallsdrohung, Fremdvergleich und Frequenz-Belohnung, nicht jede Mechanik an sich. Der stille Testlauf wirkt pragmatisch, richtet aber ein verdecktes Anreizsystem auf die eigenen Kollegen — und das Vertrauen der Belegschaft in deine Kanäle übersteht keine nachgereichte Offenlegung.',
      en: 'The "engagement package" is gamification with variable-reward logic aimed at your own workforce: streaks, points, and peer comparison reward the frequency of opening — the vendor sells click frequency as communications success, yet the moment a metric is rewarded it stops measuring what it stood for. The best option separates cleanly: mechanics tied to a content goal (progress on mandatory trainings) stay; frequency rewards with expiry threats and a public leaderboard go, and the yardstick moves from clicks to comprehension. Used legitimately: exactly like this — transparent, goal-bound, without expiry threats or forced peer comparison. To spot and counter it: for every proposed mechanic, ask "what exactly is being rewarded — and is that our goal?", and ask the vendor to turn "in our experience" claims into verifiable numbers with context. Full adoption looks plausible because KPI logic is real — but boosted opens without comprehension are a hollowed-out metric, and a public leaderboard shifts the incentive entirely from reading to point collecting. The blanket rejection overcorrects: progress and feedback elements are legitimate tools; the problem is expiry threats, peer comparison, and frequency rewards, not every mechanic as such. The quiet trial feels pragmatic but points a covert incentive system at your own colleagues — and the workforce\'s trust in your channels will not survive disclosure after the fact.',
    },
    points: 10,
    primaryTechniqueId: 'gamification_variable_reward',
    relatedTechniques: ['gamification_variable_reward', 'attention_engagement_loops'],
  },
  {
    id: 'w4-gamification_variable_reward-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Onboarding auf der Weiterbildungsplattform einer PR-Agentur: Nach jeder abgeschlossenen Lektion öffnet sich für die Volontärin eine „Bonus-Truhe" — mal 10 Punkte, mal 200, mal ein seltenes Abzeichen; wann welcher Gewinn fällt, ist nicht vorhersehbar. Ihr fällt auf, dass sie abends „nur noch eine Lektion" dranhängt — weniger wegen des Inhalts als wegen der nächsten Truhe.',
      en: 'Onboarding on a PR agency\'s training platform: after every completed lesson, a "bonus chest" opens for the trainee — sometimes 10 points, sometimes 200, sometimes a rare badge; which prize will drop — and when — is anyone\'s guess. She notices she keeps adding "just one more lesson" in the evening — less for the content than for the next chest.',
    },
    options: [
      { de: 'Gamification / Variable Belohnungen', en: 'Gamification / variable reward schedules' },
      { de: 'Doomscrolling / FOMO Engineering', en: 'Doomscrolling / FOMO engineering' },
      { de: 'Attention & Engagement Loops', en: 'Attention and engagement loops' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gamification / Variable Belohnungen: Nicht die Belohnung selbst, sondern ihr Zufallstakt macht den Reiz — die Truhe folgt dem Muster variabler Verstärkung, bei dem jede weitere Lektion der große Treffer sein könnte. Genau darauf ist das Design ausgelegt; ob daraus im Alltag stabile Gewohnheiten werden, ist empirisch deutlich weniger gesichert, als die gängige Slot-Machine-Rhetorik nahelegt. Legitim einsetzen: In eigenen Lernformaten kann eine überraschende Anerkennung Freude machen — koppel sie an Lernziele wie ein bestandenes Modul statt an bloße Nutzungsfrequenz, und mach die Regeln durchschaubar. Erkennen und kontern: Frag dich, ob du für das Ergebnis weitermachst oder für den nächsten Zufallsgewinn — und leg Lernzeiten vorher fest, statt abends „noch eine Lektion" mit dir zu verhandeln. Doomscrolling / FOMO Engineering wirkt plausibel, weil sich die Nutzung ungeplant verlängert — dieses Muster arbeitet aber mit negativen Affekten und Verpassensangst; hier lockt ein Gewinn, nichts droht. Attention & Engagement Loops liegt nahe, weil es der Sammelbegriff für digitale Bindungsarchitektur ist — er benennt aber nicht die spezifische Mechanik, die dieses Szenario auszeichnet: die zufällig getaktete, spielförmige Belohnung.',
      en: 'Gamification / variable reward schedules: it is not the reward itself but its random timing that creates the pull — the chest follows the pattern of variable reinforcement, where any next lesson could be the big win. That is exactly what the design is built for; whether it produces stable habits in everyday life is far less settled empirically than the common slot-machine rhetoric suggests. Used legitimately: in your own learning formats, a surprise recognition can be a genuine delight — tie it to learning goals such as a passed module rather than sheer usage frequency, and keep the rules transparent. To spot and counter it: ask yourself whether you are continuing for the outcome or for the next random prize — and set your learning time in advance instead of negotiating "one more lesson" with yourself at night. Doomscrolling / FOMO engineering looks plausible because usage stretches beyond plan — but that pattern works through negative affect and fear of missing out; here a prize does the pulling — there is no threat in play. Attention and engagement loops suggests itself as the umbrella term for digital retention architecture — but it does not name the specific mechanic that defines this scenario: the randomly timed, game-shaped reward.',
    },
    points: 10,
    primaryTechniqueId: 'gamification_variable_reward',
    relatedTechniques: ['gamification_variable_reward', 'doomscrolling_fomo_engineering', 'attention_engagement_loops'],
  },
];
