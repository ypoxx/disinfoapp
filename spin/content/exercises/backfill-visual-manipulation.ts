// Backfill: 3 Übungen für visual_manipulation (Visuelle Manipulation).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillVisualManipulation: Exercise[] = [
  {
    id: 'backfill-visual_manipulation-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt in dieser Infografik?',
      en: 'Which technique is at work in this infographic?',
    },
    scenario: {
      de: 'Geschäftsbericht-Infografik eines B2B-Softwareanbieters: Zum Kundenwachstum zeichnet das Design-Team die Kundenzahl der letzten beiden Jahre als zwei menschliche Symbol-Figuren. Der Wert hat sich von rund 4.000 auf rund 8.000 verdoppelt — also stellt die Grafik die zweite Figur doppelt so hoch dar. Weil mit der Höhe auch die Breite mitwächst, bedeckt das größere Symbol jedoch rund die vierfache Fläche und lässt das Wachstum wie eine Vervierfachung aussehen. Beide Zahlen sind korrekt beschriftet und vollständig; verzerrt ist allein die gezeichnete Symbolgröße.',
      en: 'An annual-report infographic from a B2B software vendor: to show customer growth, the design team draws the customer count for the last two years as two human figure-icons. The figure has doubled, from about 4,000 to about 8,000 — so the graphic renders the second icon twice as tall. But because width grows along with height, the larger icon covers about four times the area and makes the growth look like a fourfold jump. Both numbers are labelled correctly and in full; the only thing distorted is the drawn size of the symbol.',
    },
    options: [
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Cherry-Picking', en: 'Cherry-picking' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Visuelle Manipulation: Wir lesen ein Piktogramm als Fläche und schätzen die Menge nach dem Platz, den es einnimmt — nicht nach seiner Höhe. Skaliert man eine Figur zugleich in Höhe und Breite, wächst die Fläche im Quadrat; die doppelte Höhe deckt die vierfache Fläche. Aus der Verdopplung wird optisch eine Vervierfachung, obwohl jede Zahl korrekt beschriftet ist. Der Trick sitzt in der Bildgeometrie, nicht in den Werten. So setzt du es sauber ein: Piktogramme tragen ehrlich, wenn die Menge über die Anzahl gleich großer Symbole codiert wird — nicht über die Größe eines einzelnen. So entlarvst du es: Rechne kurz nach, ob sich die gezeichneten Flächen wie die Zahlen verhalten; wirkt ein Symbol viermal so groß bei doppeltem Wert, kippt die Proportion — bitte dann um eine schlichte, beschriftete Balkengrafik. Cherry-Picking hieße, gezielt zwei besonders günstige Jahre herauszugreifen und schwächere zu verschweigen — hier ist nicht die Auswahl der Werte das Problem, sondern ihre Darstellung. Framing lüde dieselbe Zahl sprachlich auf („die Kundschaft explodiert") und arbeitete über Worte, nicht über Flächen. Und ein Emotionaler Appell nutzte die menschlichen Symbol-Figuren, um Sympathie oder Stolz zu wecken — hier sind die Figuren aber kein Gefühlsköder, sondern die Skala, an der die Fläche manipuliert wird.',
      en: 'Visual manipulation: we read a pictograph as an area and gauge the quantity by the space it fills — not by its height. Scale a figure in height and width together and the area grows as the square; double the height covers four times the area. A doubling becomes a visual quadrupling, even though every number is correctly labelled. The trick lives in the geometry of the image, not in the values. Using it cleanly: pictographs carry honestly when quantity is encoded through the number of equally sized symbols — not through the size of a single one. How to expose it: quickly check whether the drawn areas behave like the numbers; if a symbol looks four times as large for double the value, the proportion is off — then ask for a plain, labelled bar chart. Cherry-picking would mean deliberately picking two especially flattering years and burying the weaker ones — here the selection of values is not the problem, their depiction is. Framing would load the same figure with language ("our customer base is exploding") and would work through words, not areas. And an emotional appeal would use the human figure-icons to stir sympathy or pride — but here the figures are no emotional bait; they are the very scale on which the area is manipulated.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'cherry_picking', 'framing', 'emotional_appeal'],
  },
  {
    id: 'backfill-visual_manipulation-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Foto-Freigabe in der Unternehmenskommunikation einer Handelskette: Als Kommunikationsleiterin gibst du die Pressebilder zur Eröffnung des neuen Flagship-Stores frei. Der Andrang war überschaubar — ein paar Dutzend Neugierige, verteilt über den Vormittag. Die Agentur liefert ein Bild, das mit langem Teleobjektiv vom hinteren Ende der Schlange aufgenommen ist: Die Brennweite staucht die Tiefe, sodass die locker stehenden Gäste dicht an dicht gedrängt wirken, und ein tiefer Kamerawinkel schneidet die leeren Flächen dahinter weg. Ort und Termin sind echt, niemand wurde hineinmontiert — allein die Optik macht aus mäßigem Interesse einen Massenandrang.',
      en: 'A photo sign-off in the corporate communications of a retail chain: as communications lead, you are approving the press images for the opening of the new flagship store. Turnout was modest — a few dozen curious visitors spread across the morning. The agency delivers a shot taken with a long telephoto lens from the back of the queue: the focal length compresses depth, so the loosely spaced guests appear packed tightly together, and a low camera angle crops out the empty space behind them. The place and the date are genuine, nobody was composited in — the lens alone turns moderate interest into a thronging crowd.',
    },
    options: [
      {
        de: 'Ich gebe es frei: Es wurde niemand hineinmontiert, das Bild ist echt aufgenommen — wie voll es wirkt, ist Sache des Objektivs, nicht meine.',
        en: 'I approve it: nobody was composited in, the photo was genuinely taken — how full it looks is the lens\'s doing, not mine.',
      },
      {
        de: 'Ich lasse ein ehrliches Bild wählen: normale Brennweite, weiter Bildwinkel auf Augenhöhe, der die tatsächliche Besucherzahl zeigt — mäßigen Andrang kommuniziere ich als das, was er war.',
        en: 'I have an honest image chosen: standard focal length, a wide angle at eye level showing the actual number of visitors — modest turnout I communicate as what it was.',
      },
      {
        de: 'Ich behalte die Teleaufnahme und setze die echte Besucherzahl in die Bildunterschrift — damit ist ja alles gesagt.',
        en: 'I keep the telephoto shot and put the real visitor count in the caption — that says it all.',
      },
      {
        de: 'Ich stelle dem Bild eine schwungvolle Zeile voran („Ansturm auf den neuen Store"), damit Bild und Text zusammenpassen.',
        en: 'I lead the image with a lively line ("Rush on the new store") so that picture and text match up.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Mechanismus ist rein optisch: Ein langes Teleobjektiv staucht die Tiefe, entfernte Menschen rücken scheinbar zusammen, und ein tiefer Winkel blendet die Lücken aus. Kein Pixel ist gefälscht, trotzdem behauptet das Bild einen Andrang, den es nicht gab — die Kameraentscheidung, nicht die Szene, erzeugt den Eindruck. Die beste Antwort ersetzt die trügerische Optik durch eine ehrliche (normale Brennweite, weiter Winkel, Augenhöhe) und zieht die Konsequenz aus der Wahrheit: Mäßiger Andrang wird als das kommuniziert, was er war. Legitim einsetzen: Objektivwahl und Perspektive sind dein gestalterisches Handwerk; professionell bleiben sie, solange sie eine Szene zeigen, wie sie war, statt eine Menge zu erfinden. Option 1 klingt vernünftig, weil nichts montiert wurde — doch die Grenze verläuft nicht zwischen „echtes Foto" und „Fotomontage", sondern zwischen ehrlichem und irreführendem Eindruck, und für den falschen Eindruck haftest du als Absenderin. Option 3 lässt die dominante Bildwirkung stehen und stellt ihr eine kleine Zahl gegenüber, die kaum jemand gegen das große Bild liest — die Optik gewinnt. Option 4 macht es schlimmer: Sie doppelt die aufgeblähte Aufnahme mit einer ebenso aufgeblähten Zeile (Framing) und verstärkt die Täuschung, statt sie zu entschärfen.',
      en: 'The mechanism is purely optical: a long telephoto lens compresses depth, distant people seem to close ranks, and a low angle hides the gaps. Not a pixel is faked, yet the picture asserts a crowd that never gathered — it is the camera decision, not the scene, that creates the impression. The best answer replaces the deceptive optics with honest ones (standard focal length, wide angle, eye level) and draws the consequence from the truth: modest turnout is communicated as what it was. Used legitimately: lens choice and perspective are part of your craft; they stay professional as long as they show a scene as it was rather than inventing a crowd. Option 1 sounds reasonable because nothing was composited — but the line does not run between "real photo" and "photomontage", it runs between an honest and a misleading impression, and you are the one liable for the false impression as the sender. Option 3 leaves the dominant visual effect standing and sets a small number against it that almost nobody reads over the big picture — the framing of the shot wins. Option 4 makes it worse: it piles an equally inflated headline on top of the inflated shot (framing) and reinforces the deception instead of defusing it.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'framing'],
  },
  {
    id: 'backfill-visual_manipulation-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Dass die Nutzerkurve wie eine fast senkrechte Rakete wirkt, liegt vor allem daran, dass das Team ___.',
      en: 'Complete the sentence: the user curve looks like an almost vertical rocket mainly because the team ___.',
    },
    scenario: {
      de: 'Board-Update eines SaaS-Startups: Die Folie trägt die Überschrift „Der Durchbruch ist da", und der Growth-Lead präsentiert sichtlich elektrisiert. Das Liniendiagramm zeigt die monatlich aktiven Nutzer der letzten zwölf Monate — alle zwölf, die Y-Achse beginnt bei null. Nur ist die Grafik extrem hoch und schmal gezogen: die Zeitachse stark gestaucht, die Werteachse in die Länge gezogen, sodass der milde Anstieg von 11.000 auf 13.000 als steile Rakete erscheint. Dieselben Daten in einem üblichen, breiteren Format zeigten eine ruhige, leicht steigende Linie.',
      en: 'Board update at a SaaS startup: the slide is headed "The breakthrough is here", and the growth lead presents visibly electrified. The line chart shows monthly active users over the past twelve months — all twelve, the y-axis starting at zero. Only the graphic is drawn extremely tall and narrow: the time axis heavily compressed, the value axis stretched, so the mild rise from 11,000 to 13,000 appears as a steep rocket. The same data in a conventional, wider format would show a calm, gently climbing line.',
    },
    options: [
      {
        de: 'dieselben vollständigen Daten in ein extrem hohes, schmales Seitenverhältnis zwängt und so aus einer sanften Steigung eine fast senkrechte Flanke macht',
        en: 'forces the same complete data into an extremely tall, narrow aspect ratio, turning a gentle slope into an almost vertical face',
      },
      {
        de: 'den Verlauf in der Folienüberschrift einen „Durchbruch" nennt und die Zahlen so allein mit Worten auflädt',
        en: 'calls the trend a "breakthrough" in the slide headline, loading the numbers through wording alone',
      },
      {
        de: 'die Kurve mit einem sichtlich elektrisierten Vortrag begleitet, der die Begeisterung auf den Raum überträgt',
        en: 'accompanies the curve with a visibly electrified delivery that carries the excitement over to the room',
      },
      {
        de: 'gerade das Zwölf-Monats-Fenster wählt, in dem die Kurve am günstigsten aussieht, und stärkere Ausschläge davor wegschneidet',
        en: 'picks exactly the twelve-month window in which the curve looks most favourable and cuts away sharper swings before it',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Visuelle Manipulation: Wie steil eine Kurve wirkt, entscheidet nicht die Zahl, sondern das Seitenverhältnis, in dem sie gezeichnet ist. Dehnt man die Werteachse und staucht die Zeitachse, wird aus 2.000 zusätzlichen Nutzern eine dramatische Wand — bei korrekter Nulllinie und lückenloser Reihe. Getäuscht wird über die Form der Zeichenfläche. So setzt du es sauber ein: Ein bewusst gewähltes Format ist erlaubt, solange die Kurvenform dem realen Tempo entspricht. So entlarvst du es: Zeichne die Reihe im üblichen, breiteren Format nach; bleibt eine ruhige Linie, war die Rakete reine Geometrie. Die drei anderen Hebel sind hier zwar sichtbar, tragen die Steilheit aber nicht: Die Überschrift „Durchbruch" lädt die Zahlen sprachlich auf — das ist Framing und wirkt neben der Grafik, nicht in ihr. Der elektrisierte Vortrag überträgt ein Gefühl auf den Raum — ein Emotionaler Appell, der die Stimmung hebt, aber die Linie nicht steiler macht. Und die Wahl des Zwölf-Monats-Fensters wäre Cherry-Picking — doch hier ist die Reihe vollständig und läge auch im normalen Format flach; die Steilheit stammt allein aus dem gestauchten Seitenverhältnis.',
      en: 'Visual manipulation: how steep a curve looks is decided not by the number but by the aspect ratio it is drawn in. Stretch the value axis and squeeze the time axis, and 2,000 extra users become a dramatic wall — with a correct zero baseline and a complete series. The deception is about the shape of the drawing surface. Using it cleanly: a deliberately chosen format is fine as long as the curve\'s shape matches the real pace. How to expose it: redraw the series in the usual, wider format; if a calm line remains, the rocket was pure geometry. The other three levers are on show here, but none of them carries the steepness: the "breakthrough" headline loads the numbers with language — that is framing, working beside the chart, not inside it. The electrified delivery carries a feeling over to the room — an emotional appeal that lifts the mood but not the line. And the choice of the twelve-month window would be cherry-picking — yet here the series is complete and would sit flat in a normal format too; the steepness comes solely from the compressed aspect ratio.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'cherry_picking', 'framing', 'emotional_appeal'],
  },
];
