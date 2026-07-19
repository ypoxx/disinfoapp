// Welle R4: 3 Übungen für doomscrolling_fomo_engineering (Doomscrolling / FOMO Engineering).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4DoomscrollingFomoEngineering: Exercise[] = [
  {
    id: 'w4-doomscrolling_fomo_engineering-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt die App hier ein?',
      en: 'Which pattern is the app using here?',
    },
    scenario: {
      de: 'Onboarding-Woche beim neuen Arbeitgeber: Der frisch gestartete Referent Interne Kommunikation testet die Mitarbeiter-News-App des Konzerns. Ihm fällt auf: Der Feed lädt beim Scrollen endlos nach, ein roter Zähler meldet schon nach einer Stunde Abwesenheit „9 verpasste Updates", und oben rangieren bevorzugt Beiträge über Sparprogramme und Umstrukturierungen anderer Standorte. Punkte, Abzeichen oder Serien vergibt die App nicht; einen „Du bist auf dem Stand"-Hinweis gibt es ebenfalls nicht.',
      en: 'Onboarding week at a new employer: the newly hired internal communications officer is testing the group’s employee news app. He notices that the feed loads endlessly as he scrolls, a red counter reports "9 missed updates" after just an hour away, and posts about cost-cutting programmes and restructurings at other sites are consistently ranked on top. The app awards no points, badges, or streaks — and there is no "you’re all caught up" marker either.',
    },
    options: [
      { de: 'Gamification / Variable Rewards (Streaks, Badges)', en: 'Gamification / variable rewards (streaks, badges)' },
      { de: 'Doomscrolling / FOMO Engineering', en: 'Doomscrolling / FOMO engineering' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Doomscrolling / FOMO Engineering: Die App bindet über negative Affekte — der Verpasst-Zähler rahmt Abwesenheit als Versäumnis, das endlose Nachladen nimmt dem Nutzen jeden Abschlusspunkt, und die Sorge vor der nächsten schlechten Nachricht soll das Wiederkommen antreiben; belohnt wird nichts, gedroht wird leise. Legitim einsetzen: In eigenen Kanälen ist Aktualität ein ehrliches Gut — mit einem sichtbaren „Du bist auf dem Stand"-Punkt, einem Digest als Standard und Alarm-Etiketten nur für echte Eilmeldungen nutzt du Dringlichkeit, ohne Dauerunruhe zu erzeugen. Erkennen und kontern: Prüf, ob Abwesenheit als Verlust gerahmt wird und ob der Feed ein vorgesehenes Ende hat; fehlt beides, deaktivierst du Zähler und Re-Engagement-Pushes, legst feste Lesefenster fest und misst deinen Informationsgewinn statt deiner Verweildauer. Gamification wirkte plausibel, weil auch sie Engagement-Design ist — sie arbeitet aber mit Belohnungen wie Punkten, Abzeichen oder Serien, und genau die vergibt diese App ausdrücklich nicht. Themensetzung (Agenda Setting) lag nahe, weil Sparprogramme oben rangieren — sie beschreibt aber die Steuerung, über welche Themen nachgedacht wird; hier ist die Themenwahl nur Brennstoff für den eigentlichen Hebel, die affektive Bindung ans Weiterscrollen. Verknappung passte scheinbar wegen des Verpassen-Motivs — sie verknappt aber ein Angebot („nur noch 3 verfügbar"); hier ist nichts knapp, knapp wirkt nur deine Aufmerksamkeit.',
      en: 'Doomscrolling / FOMO engineering: the app binds through negative affect — the missed-updates counter frames absence as loss, the endless feed removes any point of completion, and worry about the next piece of bad news is meant to drive returns; nothing is rewarded, something is quietly threatened. Used legitimately: in your own channels, timeliness is an honest asset — with a visible "you’re all caught up" marker, a digest as the default, and alert labels reserved for genuine breaking news, you can use urgency without manufacturing constant unease. To spot and counter it: check whether absence is framed as loss and whether the feed has a designed end; if both are missing, switch off counters and re-engagement pushes, set fixed reading windows, and measure what you learned rather than how long you stayed. Gamification looked plausible because it is engagement design too — but it works through rewards such as points, badges, or streaks, and this app explicitly awards none. Agenda setting seemed close because cost-cutting stories rank on top — but it describes steering which topics people think about; here the topic mix is merely fuel for the real lever, the affective pull to keep scrolling. Scarcity appeared to fit because of the missing-out motif — but scarcity limits an offer ("only 3 left"); nothing here is scarce except, by design, your attention.',
    },
    points: 10,
    primaryTechniqueId: 'doomscrolling_fomo_engineering',
    relatedTechniques: ['doomscrolling_fomo_engineering', 'gamification_variable_reward', 'agenda_setting', 'scarcity'],
  },
  {
    id: 'w4-doomscrolling_fomo_engineering-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Relaunch der Mitglieder-App eines Branchenverbands: Du leitest die Verbandskommunikation; vor der Mitgliederversammlung sollen die Nutzungszahlen steigen. Im Steuerungstermin präsentiert die beauftragte Digitalagentur ihr „Engagement-Paket": Push-Meldungen nach Inaktivität („Sie haben 12 Entwicklungen in Ihrer Branche verpasst"), Entfernen der „Du bist auf dem Stand"-Marke zugunsten endlosen Nachladens, „Breaking"-Label auch für Routinemeldungen und eine Gewichtung, die konflikthaltige Branchennews nach oben sortiert — „negative Themen bringen nachweislich die beste Rückkehrquote".',
      en: 'Relaunch of an industry association’s member app: you head the association’s communications, and usage numbers are supposed to rise before the general assembly. In the steering meeting, the contracted digital agency presents its "engagement package": push notifications after inactivity ("You have missed 12 developments in your industry"), removing the "you’re all caught up" marker in favour of endless loading, "Breaking" labels for routine items too, and a ranking that sorts conflict-laden industry news to the top — "negative topics deliver the best return rate, guaranteed".',
    },
    options: [
      {
        de: 'Ich widerspreche und halte den Maßstab fest: Reichweite bei Mitgliedern gewinnen wir über Relevanz, nicht über Unruhe. Ich beauftrage die Alternative — „Breaking" nur für echte Eilmeldungen, „Du bist auf dem Stand" bleibt, ein Wochendigest als Standard — und ändere den KPI von Verweildauer auf Reichweite der Muss-Themen. Eine Verbands-App, die Anspannung erzeugt, kauft kurzfristige Nutzung auf Kosten des Vertrauens in den Kanal.',
        en: 'I push back and put the yardstick on record: with members, we win reach through relevance, not unease. I commission the alternative — "Breaking" only for genuine urgent items, the "you’re all caught up" marker stays, a weekly digest as the default — and I change the KPI from time-in-app to reach of the must-know topics. An association app that manufactures tension buys short-term usage at the expense of trust in the channel.',
      },
      {
        de: 'Ich gebe das Paket frei: Die Mechaniken sind bei großen News-Apps Standard, die Mitgliederversammlung steht bevor, und höhere Nutzungszahlen belegen dem Vorstand den Wert der Verbandskommunikation.',
        en: 'I approve the package: these mechanics are standard in major news apps, the general assembly is coming up, and higher usage numbers will demonstrate the value of association communications to the board.',
      },
      {
        de: 'Ich lasse Verpasst-Pushes und endloses Nachladen einbauen, streiche aber die „Breaking"-Labels für Routinemeldungen — die sind das eigentliche Glaubwürdigkeitsrisiko, der Rest ist neutrale Interface-Technik.',
        en: 'I let the missed-updates pushes and endless loading go in but cut the "Breaking" labels on routine items — those are the real credibility risk, the rest is neutral interface plumbing.',
      },
      {
        de: 'Ich stoppe den Relaunch und lasse die App auf einen monatlichen statischen PDF-Rundbrief zurückbauen — nur ein Kanal ganz ohne Aktualisierungslogik schließt jeden Scroll-Sog sicher aus.',
        en: 'I halt the relaunch and have the app scaled back to a monthly static PDF circular — only a channel with no update logic at all reliably rules out any scroll pull.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das „Engagement-Paket" ist FOMO Engineering nach Lehrbuch: Abwesenheit wird als Verlust gerahmt, der Abschlusspunkt entfernt, Routinemeldungen tragen Alarm-Etiketten, und Negatives wird hochgewichtet, weil Anspannung Rückkehr erzeugen soll — die versprochene „Rückkehrquote" ist dabei mehr Verkaufsargument als belegter Effekt. Die beste Option benennt den Maßstab (Relevanz statt Unruhe), liefert eine ehrliche Alternative und verschiebt den KPI dahin, wo der Kanal seinen Zweck hat: Muss-Themen erreichen Mitglieder, nicht Minuten binden. Legitim einsetzen: Dringlichkeitssignale sind professionell, wenn sie wahr sind — echte Eilmeldungen dürfen alarmieren, ein Digest und eine Endmarke zeigen Respekt vor der Zeit der Mitglieder und zahlen langfristig auf die Öffnungsraten ein. Erkennen und kontern: Wenn dir jemand Nutzungszahlen über Unruhe verspricht, frag nach dem Preis — wie fühlt sich die Nutzung an, und was passiert mit dem Vertrauen, wenn Mitglieder das Muster durchschauen; fordere KPIs, die Informationsleistung messen, nicht Verweildauer. Die Freigabe wirkte plausibel, weil der Termindruck real ist und große Apps solche Mechaniken tatsächlich nutzen — aber „bei anderen Standard" ist kein Maßstab für einen Mitgliederkanal, der von Vertrauen lebt, und eine über Anspannung gedrückte Nutzungskurve ist genau der Schaden. Der Teilverzicht wirkte differenziert, behandelt aber nur das sichtbarste Symptom: Verpasst-Pushes und endloses Nachladen sind keine neutrale Technik, sondern der Kern des Musters. Der Rückbau zum PDF überkorrigiert: Aktualität ist ein legitimes Gut — das Problem ist die Rahmung von Abwesenheit als Verlust, nicht die Aktualisierung an sich.',
      en: 'The "engagement package" is textbook FOMO engineering: absence is framed as loss, the point of completion is removed, routine items carry alarm labels, and negative content is up-weighted because tension is supposed to drive returns — while the promised "return rate" is more sales pitch than established effect. The best option names the yardstick (relevance, not unease), offers an honest alternative, and moves the KPI to where the channel earns its keep: must-know topics reaching members, not minutes captured. Used legitimately: urgency signals are professional when they are true — genuine urgent items may alarm, and a digest plus an endpoint marker respect members’ time and pay into open rates over the long run. To spot and counter it: when someone promises you usage numbers through unease, ask about the price — what does using the channel feel like, and what happens to trust once members see through the pattern; demand KPIs that measure informational value, not dwell time. Approving looked plausible because the deadline pressure is real and major apps do use these mechanics — but "standard elsewhere" is no yardstick for a member channel that runs on trust, and a usage curve inflated through tension is precisely the harm. The partial cut felt discerning but treats only the most visible symptom: missed-updates pushes and endless loading are not neutral plumbing, they are the core of the pattern. Scaling back to a PDF overcorrects: timeliness is a legitimate asset — the problem is framing absence as loss, not the act of updating itself.',
    },
    points: 10,
    primaryTechniqueId: 'doomscrolling_fomo_engineering',
    relatedTechniques: ['doomscrolling_fomo_engineering', 'attention_engagement_loops', 'dark_patterns'],
  },
  {
    id: 'w4-doomscrolling_fomo_engineering-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Produktdemo vor dem Digitalteam der Pressestelle: Der Vertriebsingenieur eines News-App-Anbieters führt das „Re-Engagement-Modul" vor. Wer die App zwei Tage nicht öffnet, erhält Push-Meldungen wie „Während Sie weg waren: 17 Entwicklungen in Ihren Themen"; der Feed verzichtet bewusst auf eine Endmarke, und negativ gefärbte Meldungen werden höher gewichtet — „weil die Sorge, etwas zu verpassen, die Leute am zuverlässigsten zurückholt".',
      en: 'Product demo for the press office’s digital team: the sales engineer of a news app vendor walks through the "re-engagement module". Anyone who leaves the app closed for two days gets push notifications like "While you were away: 17 developments in your topics"; the feed deliberately has no endpoint marker, and negatively tinged stories are weighted higher — "because the worry about missing something is what most reliably brings people back".',
    },
    options: [
      { de: 'Doomscrolling / FOMO Engineering', en: 'Doomscrolling / FOMO engineering' },
      { de: 'Gamification / Variable Rewards (Streaks, Badges)', en: 'Gamification / variable rewards (streaks, badges)' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Doomscrolling / FOMO Engineering: Der Anbieter beschreibt den Hebel selbst — Abwesenheit wird als Verlust gerahmt, der Feed verliert seinen Abschlusspunkt, und negative Inhalte werden hochgewichtet, weil Sorge zurückholen soll; gebunden wird über Unruhe, nicht über Belohnung. Legitim einsetzen: Re-Engagement ist nicht per se unseriös — eine Erinnerung mit konkretem Nutzwert („Ihr Themen-Digest ist da") und ein Feed mit sichtbarem Ende holen Leute ehrlich zurück, ohne Dauerspannung aufzubauen. Erkennen und kontern: Achte in Demos und eigenen Briefings auf die Sprache — wer mit „verpassen", „Rückholung" und Negativ-Gewichtung argumentiert, plant mit deiner Unruhe; frag nach Digest-Optionen, Endmarken und danach, welche Nutzungsqualität hinter der Rückkehrquote steht. Gamification wirkte plausibel, weil auch sie Nutzer zurückholen will — sie tut das aber über Belohnungsreize wie Streaks und Abzeichen, von denen hier keine Rede ist. Verknappung lag nahe, weil „verpassen" nach knappem Angebot klingt — sie macht aber ein Gut begrenzt verfügbar („nur noch heute"); hier bleibt alles verfügbar, erzeugt wird nur das Gefühl, ohne die App zurückzufallen.',
      en: 'Doomscrolling / FOMO engineering: the vendor describes the lever himself — absence is framed as loss, the feed loses its point of completion, and negative content is up-weighted because worry is supposed to pull people back; the binding force is unease, not reward. Used legitimately: re-engagement is not shady per se — a reminder with concrete value ("your topic digest is ready") and a feed with a visible end bring people back honestly, without building standing tension. To spot and counter it: listen for the language in demos and your own briefs — whoever argues with "missing out", "win-back", and negativity weighting is planning with your unease; ask for digest options, endpoint markers, and what quality of usage sits behind the return rate. Gamification looked plausible because it also aims to bring users back — but it does so through reward cues like streaks and badges, none of which appear here. Scarcity seemed close because "missing out" sounds like a limited offer — but scarcity makes a good scarce ("today only"); here everything stays available, and what is manufactured is merely the feeling of falling behind without the app.',
    },
    points: 10,
    primaryTechniqueId: 'doomscrolling_fomo_engineering',
    relatedTechniques: ['doomscrolling_fomo_engineering', 'gamification_variable_reward', 'scarcity'],
  },
];
