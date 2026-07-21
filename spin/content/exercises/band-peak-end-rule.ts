import type { Exercise } from '../types';

/**
 * Band-Übung (INTERMEDIATE) zur Peak-End-Regel (peak_end_rule).
 * Szenario mit Kanal + Rollen + Situation; Distraktoren = gleichwertige
 * kognitive Nachbarn (availability_heuristic, anchoring, primacy_order_effects).
 * NICHT in exercises/index.ts registriert.
 */
export const bandPeakEndRule: Exercise[] = [
  {
    id: 'band-peak_end_rule-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt hinter dieser Dramaturgie?',
      en: 'Which technique is behind this staging?',
    },
    scenario: {
      de: 'Vor einer Live-Produktdemo für einen Neukunden brieft der Produktmanager sein Team: „Die Einrichtungsschritte am Anfang sind trocken, da lässt sich nichts glätten. Also heben wir unser stärkstes Feature — die Live-Auswertung — bis zum großen Finale auf und drücken jedem zum Abschied noch ein kleines Extra in die Hand. Was zuletzt passiert, bleibt hängen; an die Klick-Strecke davor denkt morgen keiner mehr."',
      en: 'Before a live product demo for a new client, the product manager briefs the team: "The setup steps at the start are dry, there\'s nothing to smooth over there. So we save our strongest feature — the live analytics — for the grand finale and hand everyone a small extra on their way out. Whatever happens last is what sticks; nobody will remember the click-through before it by tomorrow."',
    },
    options: [
      { de: 'Peak-End-Regel', en: 'Peak-End Rule' },
      { de: 'Verfügbarkeitsheuristik', en: 'Availability heuristic' },
      { de: 'Ankereffekt', en: 'Anchoring effect' },
      { de: 'Primacy-Effekt', en: 'Primacy effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mechanismus: Unser Gedächtnis speichert kein vollständiges Protokoll eines Erlebnisses, sondern verdichtet es auf wenige markante Stützpunkte — vor allem den emotional intensivsten Moment (Peak) und den Endzustand (End). Aus diesen wenigen Momentaufnahmen rekonstruieren wir später das Gesamturteil, während Dauer und Durchschnitt kaum eingehen („Duration Neglect"). Deshalb prägen Höhepunkt und Schluss die Erinnerung überproportional: Sie dienen als Abrufanker, die stellvertretend für das ganze Erlebnis stehen. Legitim einsetzen: Plane den Höhepunkt und den Schluss einer Demo, Präsentation oder Customer Journey bewusst, statt deine Energie gleichmäßig über die Laufzeit zu verteilen — ein starker Peak und ein sauberer Abschluss tragen die spätere Erinnerung. Erkennen & kontern: Wenn dein Gesamteindruck an einem inszenierten Finale hängt, hol dir den kompletten Ablauf zurück und bewerte anhand vorab gesetzter Kriterien, nicht anhand des letzten Gefühls im Raum. Die Distraktoren: Die Verfügbarkeitsheuristik (leicht abrufbare Beispiele verzerren ein Mengen- oder Wahrscheinlichkeitsurteil) liegt nahe, weil das Finale der lebhafteste, am leichtesten erinnerbare Programmpunkt ist — man könnte den Effekt für eine reine Abrufverzerrung halten. Sie greift hier aber nicht, weil kein Häufigkeits- oder Wahrscheinlichkeitsurteil im Spiel ist, sondern die zeitliche Struktur eines einzelnen Erlebnisses. Der Ankereffekt (ein früh gesetzter Referenzwert zieht spätere Einschätzungen zu sich) wirkt plausibel, weil das Briefing bewusst mit dem „trockenen" Anfang beginnt — als würde der erste Eindruck den Maßstab setzen. Er passt trotzdem nicht, weil hier gerade das Ende den Ausschlag gibt, nicht ein früher Anker, und weil ein Anker klassisch ein Zahlen- oder Referenzwert ist. Der Primacy-Effekt (die Idee, dass das zuerst Präsentierte den Deutungsrahmen für alles Folgende setzt) ist der nächste Nachbar: Beide sind Reihenfolgeeffekte, und der Manager spricht die Abfolge Anfang-zu-Ende ausdrücklich an. Doch Primacy setzt auf den Anfang, die Peak-End-Regel auf Höhepunkt und Ende — und genau die trockene Eröffnung wird hier absichtlich abgeschrieben.',
      en: 'Mechanism: our memory does not store a full transcript of an experience; it compresses it into a few salient snapshots — above all the most emotionally intense moment (the peak) and the final state (the end). We later reconstruct the overall judgment from those few snapshots, while duration and average barely factor in ("duration neglect"). That is why the high point and the close weigh so disproportionately on the memory: they act as retrieval anchors that stand in for the whole experience. Use it professionally: deliberately design the peak and the close of a demo, presentation or customer journey instead of spreading your energy evenly across the run time — a strong peak and a clean ending carry the later memory. Spot & counter it: when your overall impression hangs on a staged finale, pull the full sequence back into view and score against criteria set in advance, not against the last feeling in the room. The distractors: the availability heuristic (easily recalled examples skew a judgment of quantity or probability) is tempting because the finale is the most vivid, most easily recalled item on the agenda — you could mistake the effect for a pure recall bias. It does not fit here, though, because no frequency or probability judgment is involved, only the temporal structure of a single experience. Anchoring (an early reference value pulls later estimates toward it) looks plausible because the briefing opens pointedly with the "dry" start, as if the first impression set the yardstick. It still does not apply, because here it is the ending that tips the scale, not an early anchor, and because an anchor is classically a number or reference value. The primacy effect (the idea that what comes first sets the interpretive frame for everything after) is the closest neighbour: both are order effects, and the manager explicitly talks about the start-to-end sequence. But primacy bets on the opening, while the Peak-End Rule bets on the high point and the close — and here the dry opening is precisely what gets written off on purpose.',
    },
    points: 10,
    primaryTechniqueId: 'peak_end_rule',
    relatedTechniques: ['peak_end_rule', 'availability_heuristic', 'anchoring', 'primacy_order_effects'],
  },
];
