// Pilotwelle R3: 3 Übungen für agenda_setting (Themensetzung).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotAgendaSetting: Exercise[] = [
  {
    id: 'p3-agenda_setting-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik erklärt, warum das Thema plötzlich als das wichtigste Problem der Branche gilt?',
      en: 'Which technique explains why this topic suddenly ranks as the industry\'s most pressing problem?',
    },
    scenario: {
      de: 'Du analysierst für einen Kunden die Berichterstattung vor der Tarifrunde: Der Arbeitgeberverband platziert seit Wochen Studien, Interviews und Gastbeiträge zum Thema Standortkosten in Regional- und Fachmedien. Die einzelnen Beiträge sind sachlich formuliert — aber das Thema dominiert die Schlagzeilen, und in Umfragen nennen Beschäftigte Standortkosten inzwischen als wichtigstes Problem der Branche.',
      en: 'You are analysing media coverage for a client ahead of collective bargaining talks: for weeks, the employers\' association has been placing studies, interviews, and op-eds on location costs in regional and trade media. The individual pieces are soberly written — but the topic dominates the headlines, and in surveys employees now cite location costs as the industry\'s most pressing problem.',
    },
    options: [
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Themensetzung (Agenda Setting): Auswahl, Platzierung und Dauerpräsenz eines Themas erzeugen wahrgenommene Wichtigkeit (Salienz) — gesteuert wird, worüber nachgedacht wird, nicht was gedacht wird. Legitim eingesetzt heißt das: eigene Themen konsequent und mit belastbaren Inhalten in die Debatte bringen. Erkennen und kontern: Frequenz und Platzierung von der Faktenlage trennen ("Was ist hier eigentlich neu?") und systematisch fehlende Gegenthemen aktiv benennen. Framing wirkt plausibel, würde aber die Deutung eines Themas über Wortwahl steuern — die Beiträge sind hier gerade sachlich formuliert. Priming würde Assoziationen aktivieren, die ein späteres Urteil färben, nicht die Wichtigkeit eines Themas aufbauen. Cherry-Picking würde innerhalb einer Argumentation nur günstige Belege auswählen — hier geht es nicht um Belegauswahl, sondern darum, welches Thema überhaupt die Aufmerksamkeit besetzt.',
      en: 'Agenda setting: selecting, placing, and sustaining a topic creates perceived importance (salience) — it steers what gets thought about, not what is thought. Used legitimately, this means putting your own topics into the debate consistently and with substantive content. To recognise and counter it: separate frequency and placement from the actual facts ("what is actually new here?") and actively name the counter-topics that are systematically absent. Framing looks plausible but would steer the interpretation of a topic through word choice — yet the pieces here are in fact soberly written. Priming would activate associations that colour a later judgment, not build up a topic\'s importance. Cherry-picking would select only favourable evidence within an argument — this is not about evidence selection but about which topic occupies attention in the first place.',
    },
    points: 10,
    primaryTechniqueId: 'agenda_setting',
    relatedTechniques: ['agenda_setting', 'framing', 'priming'],
  },
  {
    id: 'p3-agenda_setting-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Kommunikation eines Energieunternehmens. Sechs Wochen vor der Bilanz-Pressekonferenz schlägt deine Agentur vor, wöchentlich Meldungen, Interviews und LinkedIn-Beiträge zum Netzausbau zu takten — damit das Thema die Fragen der Journalisten dominiert und die verschobene Kraftwerkssanierung "gar nicht erst auf die Agenda kommt".',
      en: 'You head communications at an energy company. Six weeks before the annual results press conference, your agency proposes a weekly cadence of releases, interviews, and LinkedIn posts on grid expansion — so that this topic dominates journalists\' questions and the delayed power plant refurbishment "never makes it onto the agenda in the first place".',
    },
    options: [
      {
        de: 'Ich nutze die Themen-Taktung für den Netzausbau, weil er sachlich unser wichtigstes Projekt ist — bereite aber parallel transparente Q&A und Fakten zur Kraftwerkssanierung vor, statt das Thema aktiv zu verdrängen.',
        en: 'I use the topic cadence for grid expansion, since it genuinely is our most important project — but in parallel I prepare transparent Q&A and facts on the refurbishment, rather than actively crowding the topic out.',
      },
      {
        de: 'Ich übernehme den Plan vollständig — welche Themen die Presse aufgreift, entscheiden ohnehin die Redaktionen, dafür trage ich keine Verantwortung.',
        en: 'I adopt the plan in full — which topics the press picks up is the newsrooms\' call anyway, so that is not my responsibility.',
      },
      {
        de: 'Ich lehne jede geplante Themen-Taktung ab: Wer eigene Themen setzt, manipuliert damit grundsätzlich die Öffentlichkeit.',
        en: 'I reject any planned topic cadence: setting your own topics is by definition manipulating the public.',
      },
      {
        de: 'Ich verschärfe stattdessen die Wortwahl und lasse den Netzausbau in jeder Meldung als "historischen Durchbruch" beschreiben — die Formulierung entscheidet, was wichtig erscheint.',
        en: 'Instead I sharpen the wording and have every release describe grid expansion as a "historic breakthrough" — phrasing is what decides what looks important.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist Themensetzung (Agenda Setting): Dauerpräsenz und Taktung machen ein Thema salient und besetzen die begrenzte Aufmerksamkeit von Redaktionen. Legitim ist das, solange du eigene Themen mit Substanz aufbaust; die Grenze ist überschritten, wenn die Taktung gezielt ein berichtenswertes Thema verdrängen soll — genau das riskiert Vertrauensverlust, sobald Journalisten das Muster erkennen. Erkennen und kontern (als Redaktion oder Beobachter): auffällige Themen-Taktung vor Schlüsselterminen als Signal nehmen und gezielt nach dem Thema fragen, das nicht vorkommt. Die Kombination aus eigener Taktung und transparentem Q&A zur Sanierung trennt beides sauber: eigene Agenda setzen und zugleich auskunftsfähig zum kritischen Thema bleiben. Der Verweis auf die Letztentscheidung der Redaktionen wirkt plausibel, weil sie tatsächlich final auswählen — er verwechselt aber Letztentscheidung mit Einfluss und schiebt die eigene Verantwortung für ein Verdrängungsmanöver ab. Der Totalverzicht auf Themen-Taktung überkorrigiert: Themenplanung ist Kernhandwerk der Kommunikation, nicht per se Manipulation. Die Flucht in den "historischen Durchbruch" verwechselt die Technik — Zuspitzung der Formulierung ist Framing (Deutung eines Themas), verändert aber nicht, welches Thema auf die Agenda kommt, und ersetzt Substanz durch Superlative.',
      en: 'The proposal is agenda setting: sustained presence and cadence make a topic salient and occupy newsrooms\' limited attention. That is legitimate as long as you build up your own topics with substance; the line is crossed when the cadence is designed to crowd out a newsworthy topic — which is exactly what risks a loss of trust once journalists spot the pattern. To recognise and counter it (as a newsroom or observer): treat a conspicuous topic cadence ahead of key dates as a signal and ask pointedly about the topic that never comes up. Combining your own cadence with transparent Q&A on the refurbishment separates the two cleanly: set your own agenda while staying fully able to answer on the critical topic. Deferring to the newsrooms\' final say sounds plausible because they do make the final selection — but it confuses final say with influence and offloads your own responsibility for a crowding-out manoeuvre. Renouncing topic cadence altogether overcorrects: topic planning is core communications craft, not manipulation per se. Reaching for the "historic breakthrough" misidentifies the technique — sharpening the wording is framing (the interpretation of a topic); it does not change which topic makes the agenda, and it swaps substance for superlatives.',
    },
    points: 10,
    primaryTechniqueId: 'agenda_setting',
    relatedTechniques: ['agenda_setting', 'framing'],
  },
  {
    id: 'p3-agenda_setting-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wirkt hier — obwohl die Artikel selbst neutral geschrieben sind?',
      en: 'Which technique is at work here — even though the articles themselves are written neutrally?',
    },
    scenario: {
      de: 'Redaktionskonferenz einer Regionalzeitung: Die Chefredakteurin entscheidet, das Thema Wohnungsnot drei Wochen lang täglich auf Seite 1 zu heben. An den Texten ändert sich nichts — sie bleiben nüchtern und ausgewogen. Nur Platzierung und Häufigkeit ändern sich. Danach zeigt die Leserumfrage: Wohnungsnot gilt als wichtigstes Problem der Stadt.',
      en: 'Editorial conference at a regional newspaper: the editor-in-chief decides to run the housing shortage on page one every day for three weeks. Nothing changes in the texts — they stay sober and balanced. Only placement and frequency change. Afterwards, the reader survey shows that the housing shortage now ranks as the city\'s most important problem.',
    },
    options: [
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Themensetzung (Agenda Setting): Allein Platzierung und Frequenz erzeugen wahrgenommene Wichtigkeit — die Leser übernehmen die Themenrangfolge der Redaktion, ohne dass sich Inhalt oder Tonlage ändern. Legitim eingesetzt heißt das: relevante Themen bewusst sichtbar halten, etwa das eigene Kernthema regelmäßig in Newsletter und Pressearbeit setzen. Erkennen und kontern: fragen, ob die Wichtigkeit eines Themas aus neuen Fakten kommt oder nur aus seiner Präsenz. Framing wirkt naheliegend, würde aber die Darstellung verändern (Wortwahl, Perspektive) — die bleibt hier ausdrücklich gleich. Priming würde Assoziationen aktivieren, die ein anderes, späteres Urteil färben — hier geht es direkt um die Rangfolge der Themen selbst.',
      en: 'Agenda setting: placement and frequency alone create perceived importance — readers adopt the newsroom\'s topic ranking without any change in content or tone. Used legitimately, this means deliberately keeping relevant topics visible, for instance placing your core topic regularly in newsletters and media relations. To recognise and counter it: ask whether a topic\'s importance comes from new facts or merely from its presence. Framing seems close but would change how the story is told (word choice, perspective) — which explicitly stays the same here. Priming would activate associations that colour a different, later judgment — this is directly about the ranking of the topics themselves.',
    },
    points: 10,
    primaryTechniqueId: 'agenda_setting',
    relatedTechniques: ['agenda_setting', 'framing', 'priming'],
  },
];
