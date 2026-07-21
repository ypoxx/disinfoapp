// Band-Übung INTERMEDIATE: 1 zusätzliche Übung für love_bombing.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Zielband INTERMEDIATE: Technik subtil/eingebettet (keine Cue-Wörter wie
// „Seelenverwandte"/Liebeserklärung), Distraktoren sind Near-Misses,
// Multi-Satz-Szenario. Hebt sich von wave6-love-bombing.ts ab: dort
// Dating-/Gruppen-Kontexte mit offenen Cue-Wörtern; hier ein beruflicher
// Mentoring-Kontext, in dem das Muster ohne Vokabular der Romantik steckt.
// Szenario bleibt bewusst in der Idealisierungs-/Flutungsphase (Wochen):
// Überschwang, Exklusivität und ein gerade erst aufkommender Kühle-Moment —
// noch KEINE vollzogene Isolation und kein etabliertes Kontrollregime, damit
// love_bombing eindeutig bleibt und coercive_control ein echter Near-Miss ist.
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, nur Erkennen/Schützen,
// nie Täterperspektive, kein „legitim einsetzen". Schützende Dritt-Rahmung
// (ein Freund berichtet, „du" bist der beratende Blick von außen), damit der
// Ton distanziert-nüchtern statt immersiv-belastend bleibt. Frontier-Tier:
// Begriffswissen statt Wirkversprechen. Overlay-Schutz gilt.
// Registrierung in index.ts durch die Hauptsession.

import type { Exercise } from '../types';

export const bandLoveBombing: Exercise[] = [
  {
    id: 'band-love_bombing-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster prägt das Verhalten des Inhabers?',
      en: "Which pattern shapes the owner's behaviour?",
    },
    scenario: {
      de: 'Ein Freund, der vor drei Wochen in einer kleinen Kommunikationsagentur angefangen hat, erzählt dir begeistert von seinem Chef: Der Inhaber ruft ihn abends spontan an, schickt am Wochenende lange Sprachnachrichten und stellt ihn vor dem Team als den Einzigen hin, der „die Sache wirklich versteht" — samt Einblicken, von denen die anderen ausgeschlossen bleiben. Immer wieder falle der Satz, sie beide gegen den Rest. Als dein Freund neulich erwähnte, den Freitagabend für alte Studienkollegen freihalten zu wollen, sei der Inhaber für einen Moment spürbar kühler geworden. Dein Freund ist überwältigt von so viel Zuwendung nach so kurzer Zeit — und zugleich leicht verunsichert vom Tempo.',
      en: 'A friend who started three weeks ago at a small communications agency tells you excitedly about his boss: the owner calls him late in the evening on impulse, sends long voice messages on weekends, and holds him up in front of the team as the only one who "truly gets it" — complete with insights the others are shut out of. Again and again comes the line: the two of them against everyone else. When your friend recently mentioned wanting to keep Friday evenings free for old university friends, the owner turned briefly but noticeably cooler. Your friend is overwhelmed by so much attention so soon — and at the same time a little unsettled by the pace.',
    },
    options: [
      {
        de: 'Love Bombing (überwältigende Frühphasen-Zuwendung, die zu schneller, exklusiver Bindung drängt)',
        en: 'Love Bombing (overwhelming early-stage affection that pushes toward a fast, exclusive bond)',
      },
      {
        de: 'Coercive Control (Zwang und Kontrolle) — anhaltendes Regime aus Regeln, Überwachung und Isolation',
        en: 'Coercive Control (a lasting regime of rules, surveillance, and isolation)',
      },
      {
        de: 'Sympathie (mit Wärme, Lob und Ähnlichkeit situativ Zustimmung gewinnen)',
        en: 'Liking (winning agreement in the moment through warmth, praise, and similarity)',
      },
      {
        de: 'Reziprozität (eine Gefälligkeit erzeugt das Gefühl, etwas zurückgeben zu müssen)',
        en: 'Reciprocity (a favor creates a felt need to give something back)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster ist Love Bombing: Der Überschwang an Zuwendung, die Idealisierung („der Einzige, der die Sache versteht") und die permanente Erreichbarkeit stehen im Missverhältnis zur erst dreiwöchigen Bekanntschaft und drängen auf eine schnelle, exklusive Bindung — „sie beide gegen den Rest". Der Hebel ist das Tempo, nicht ein einzelnes Kompliment; der kurze Kühle-Moment bei einer harmlosen Grenze zeigt, dass die Wärme an Bedingungen hängt. Weil die empirische Basis schmal ist, ist das ein Warn- und Erkennungssignal, kein belegter Automatismus. Erkennen und schützen: Nimm die Begeisterung deines Freundes ernst und benenne zugleich ruhig das auffällige Tempo und die Exklusivität als bekanntes Muster. Ein entschleunigtes Verhältnis, wach gehaltene Kontakte außerhalb der Agentur und der Kühle-Moment, gelesen als Information über die Dynamik statt als eigenes Versagen, nehmen dem Muster die Wucht. Coercive Control (Option B) wirkt plausibel, weil die Exklusivität und der Kühle-Entzug auf ein Kontrollregime hindeuten; sichtbar ist hier aber erst die Einstiegsphase der Idealisierung — noch kein etabliertes Regelwerk, keine Überwachung, keine abgeschnittenen Kontakte. Sympathie (Option C) liegt nahe, weil Wärme, Lob und Ähnlichkeit im Spiel sind; sie zielt jedoch auf situative Zustimmung, nicht auf eine exklusive Dauerbindung, und bestraft keine Distanz — genau der Kühle-Entzug bei einer Grenze unterscheidet Love Bombing davon. Reziprozität (Option D) scheint zu passen, weil die Flut aus Anrufen, Sprachnachrichten und Insider-Einblicken wie eine erzeugte Schuld wirken kann; sie steuert aber auf eine konkrete Gegenleistung zu, während hier die Zuwendung eine exklusive Bindung aufbaut und Distanz sanktioniert, statt eine bestimmte Gefälligkeit einzufordern.',
      en: 'The pattern is love bombing: the surge of attention, the idealization ("the only one who truly gets it"), and the constant availability are out of proportion to an acquaintance of only three weeks and push toward a fast, exclusive bond — "the two of them against everyone else". The lever is the pace, not any single compliment; the brief chill over a harmless boundary shows that the warmth comes with conditions. Because the evidence base is thin, treat this as a warning and recognition signal, not a guaranteed mechanism. Spotting and protecting: take your friend\'s enthusiasm seriously while calmly naming the striking pace and the exclusivity as a known pattern. Slowing the relationship down, keeping his contacts outside the agency active, and reading the chill as information about the dynamic rather than a failing of his own all take the force out of the pattern. Coercive control (option B) looks plausible because the exclusivity and the cold withdrawal hint at a control regime; what is visible here, though, is only the entry phase of idealization — no established set of rules, no surveillance, no severed contacts yet. Liking (option C) is tempting because warmth, praise, and similarity are all in play, but it aims at agreement in the moment, not an exclusive lasting bond, and it does not punish distance — that cold withdrawal over a boundary is exactly what sets love bombing apart. Reciprocity (option D) seems to fit because the flood of calls, voice messages, and insider access can feel like a manufactured debt; but reciprocity steers toward a concrete return favor, whereas here the affection builds an exclusive bond and penalizes distance instead of calling in a specific favor.',
    },
    points: 10,
    primaryTechniqueId: 'love_bombing',
    relatedTechniques: ['love_bombing', 'coercive_control', 'liking', 'reciprocity'],
  },
];
