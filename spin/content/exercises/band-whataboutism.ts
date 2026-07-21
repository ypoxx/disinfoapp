// Band BEGINNER: 1 Übung für whataboutism (tu quoque).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Bewusst blatant: expliziter Cue „Und was ist mit …?", genau eine Technik,
// in <10s aus Oberflächen-Cues lösbar. Quick-Check.
//
// Abgrenzung Kanal+Rollen+Move (bewusst frisch, keine Dublette):
//   - technique.examples: alles externe Presse-/Review-Settings (Klimabilanz,
//     Projekt-Review, Datenleck), Ablenkung auf Wettbewerber/Schwesterteam/Kritiker.
//   - wave5a: Bürgerforum, Podium, Fachpanel (Anwohnerin, Journalistin, NGO).
//   Diese Übung: INTERNE Betriebsversammlung, Personalchef ← Teamsprecherin,
//   Ablenkung auf die KONZERNMUTTER — Kanal, Rollenpaar und Ziel sind in
//   examples wie wave5a unbesetzt.
//
// Distraktoren: saubere Geschwister-Fehlschlüsse, hier falsch (ad_hominem,
// straw_man). Der Oberbegriff Red Herring ist bewusst KEINE Option, weil er
// dieses Szenario ebenfalls korrekt (nur unspezifisch) beschreiben würde.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandWhataboutism: Exercise[] = [
  {
    id: 'band-whataboutism-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik nutzt der Personalchef?',
      en: 'Which technique is the HR director using?',
    },
    scenario: {
      de: 'Betriebsversammlung eines Maschinenbauers: Eine Teamsprecherin fragt den Personalchef, warum die für dieses Jahr fest zugesagte Gehaltsanpassung nun doch gestrichen wurde. Seine Antwort: „Und was ist mit der Konzernmutter? Die hat ihre Investitionszusagen für unseren Standort auch nie eingehalten." Warum die Anpassung gestrichen wurde, sagt er nicht.',
      en: 'All-hands meeting at a machine-building firm: a team spokesperson asks the HR director why the pay rise firmly promised for this year has now been scrapped after all. His reply: "And what about head office? They never kept their investment pledges for our site either." He does not say why the pay rise was scrapped.',
    },
    options: [
      { de: 'Whataboutism (tu quoque, „Und was ist mit …?")', en: 'Whataboutism (tu quoque, "and what about …?")' },
      { de: 'Ad Hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
      { de: 'Strohmann (Straw Man)', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Whataboutism (tu quoque): Auf die konkrete Frage folgt keine Antwort, sondern ein Gegenvorwurf gegen einen Dritten („Und was ist mit der Konzernmutter?"). Das wirkt, weil das Publikum beide Versäumnisse gegeneinander abwägt und die eigentliche Frage aus dem Blick verliert. Das „Und was ist mit …?" ist das Signal. Legitim einsetzen: Auf die Konzernmutter zu verweisen ist in Ordnung — aber erst, nachdem du die Frage selbst beantwortet hast, als Zusatz, nicht als Ersatz. Erkennen und kontern: Kommt auf eine Frage ein Gegenvorwurf, benenne die Ausweichbewegung und führe zurück („Zur Konzernmutter gleich mehr — zuerst: Warum wurde die Anpassung gestrichen?"). Ad Hominem liegt nahe, weil die Antwort im Ton wie ein Angriff klingt und man sie leicht als Attacke auf eine Person liest — aber er wertet niemanden ab, schon gar nicht die fragende Teamsprecherin; er schiebt nur das Thema weg. Strohmann liegt nahe, weil er scheinbar etwas anderes beantwortet als gefragt und damit an ihrer Frage vorbeizugehen scheint — doch er gibt ihre Frage nicht verzerrt wieder und greift keine Verzerrung an, er wechselt bloß das Thema.',
      en: 'Whataboutism (tu quoque): the specific question draws no answer but a counter-accusation against a third party ("And what about head office?"). It works because the audience weighs the two failings against each other and loses sight of the actual question. The "And what about …?" is the tell. Used legitimately: pointing to head office is fine — but only after you have answered the question yourself, as an addition, not a substitute. To spot and counter it: when a question is met with a counter-accusation, name the sidestep and steer back ("Head office in a moment — first: why was the pay rise scrapped?"). Ad hominem looks close because his reply is accusatory in tone, so it can read as an attack on a person — but he runs no one down, least of all the team spokesperson who asked; he just pushes the topic away. Straw man looks close because he seems to answer something other than what she asked, as if talking past her question — yet he never restates or distorts it, he simply changes the subject.',
    },
    points: 10,
    primaryTechniqueId: 'whataboutism',
    relatedTechniques: ['whataboutism', 'ad_hominem', 'straw_man'],
  },
];
