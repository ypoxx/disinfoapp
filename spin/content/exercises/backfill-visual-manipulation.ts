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
      de: 'Welche Technik steckt in der Chart-Gestaltung?',
      en: 'Which technique is at work in the chart design?',
    },
    scenario: {
      de: 'Investor-Relations-Deck vor Analystinnen und Analysten: Der CFO eines Softwarehauses zeigt ein Balkendiagramm zum Quartalsumsatz. Alle Zahlen stimmen und sind vollständig, kein Quartal fehlt. Doch die Y-Achse beginnt nicht bei null, sondern bei 96 Millionen — der Anstieg von 98 auf 101 Millionen füllt so fast die halbe Folie und liest sich auf einen Blick wie ein Sprung um die Hälfte. Die Täuschung sitzt allein in der Skala des Bildes, nicht in den Worten und nicht in der Datenauswahl.',
      en: 'An investor-relations deck in front of analysts: the CFO of a software firm shows a bar chart of quarterly revenue. Every figure is correct and complete, no quarter is missing. But the y-axis does not start at zero — it starts at 96 million, so the rise from 98 to 101 million fills almost half the slide and reads at a glance like a jump of about fifty percent. The deception sits solely in the picture\'s scale, not in the words and not in the choice of data.',
    },
    options: [
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Cherry-Picking', en: 'Cherry-picking' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Dekontextualisierung (Cheapfakes)', en: 'Decontextualization (cheapfakes)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Visuelle Manipulation: Das Auge liest Balkenhöhen vorbewusst als Größenverhältnis, bevor der Verstand die Achsenbeschriftung prüft. Wer die Nulllinie kappt, entkoppelt die sichtbare Höhe von der tatsächlichen Zahl — drei Prozent Wachstum bekommen die Bildwirkung von fünfzig. Der Hebel steckt ganz im Design des Bildes, die Daten bleiben korrekt und vollständig. Legitim einsetzen: Ein gezoomter Ausschnitt ist erlaubt, wenn kleine Differenzen die eigentliche Botschaft sind — sauber bleibt es nur mit klar markiertem Achsenbruch und einem Hinweis, dass die Achse nicht bei null startet. Erkennen und kontern: Sieh bei jeder Grafik zuerst auf den Achsenanfang und rechne die sichtbare Balkenhöhe gegen die echten Werte; verlange im Zweifel dieselbe Kurve mit Nulllinie. Cherry-Picking wäre es, wenn er schwache Quartale weggelassen hätte — hier sind alle Datenpunkte da, verzerrt ist nur ihre Darstellung. Framing würde dieselbe Zahl sprachlich aufladen („Rekordwachstum") und wirkt über Worte, nicht über die Bildgeometrie. Dekontextualisierung nähme ein echtes Bild aus einem fremden Zusammenhang; hier ist die Grafik im richtigen Kontext, nur ihre Skala täuscht.',
      en: 'Visual manipulation: the eye reads bar heights pre-consciously as a ratio of magnitudes before the mind checks the axis labels. Cutting the zero baseline decouples the visible height from the actual number — three percent of growth takes on the visual force of fifty. The lever lies entirely in the picture\'s design; the data stay correct and complete. Used legitimately: a zoomed section is fine when small differences are the real message — but it stays clean only with a clearly marked axis break and a note that the axis does not start at zero. To spot and counter it: on any chart, look first at where the axis begins and weigh the visible bar height against the true values; when in doubt, ask for the same curve drawn to a zero baseline. Cherry-picking would apply if he had dropped the weak quarters — here every data point is present, only its depiction is distorted. Framing would charge the same figure verbally ("record growth") and works through words, not through the geometry of the image. Decontextualization would take a genuine image out of a foreign context; here the chart is in its proper context and only its scale deceives.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'cherry_picking', 'framing', 'decontextualization_cheapfakes'],
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
      de: 'Kampagnen-Freigabe in der Unternehmenskommunikation eines Energieversorgers: Als verantwortliche Kommunikationsleiterin prüfst du die Infografik zur neuen Ökostrom-Bilanz vor dem Versand an Presse und Kundschaft. Die Zahl stimmt: Der Grünstrom-Anteil ist real von 22 auf 24 Prozent gestiegen. Die Agentur hat daraus aber ein 3D-Tortenstück mit gekippter Perspektive gemacht, das den vorderen Sektor optisch verdoppelt, und die Fläche mit einem satt eingefärbten Foto einer blühenden Wiese hinterlegt. Der reale Zuwachs von zwei Punkten wirkt dadurch wie ein Durchbruch.',
      en: 'A campaign sign-off in the corporate communications of an energy provider: as the communications lead responsible, you are vetting the infographic on the new green-electricity mix before it goes out to press and customers. The figure is right: the green share has genuinely risen from 22 to 24 percent. But the agency has turned it into a 3D pie slice on a tilted perspective that visually doubles the front sector, and backed the surface with a richly coloured photo of a flowering meadow. The real two-point gain thereby looks like a breakthrough.',
    },
    options: [
      {
        de: 'Ich lasse es so: Die Zahl ist ja korrekt, und eine wirkungsvolle Grafik ist unser gutes Recht — die Perspektive macht die Botschaft nur eingängiger.',
        en: 'I leave it as is: the figure is correct, after all, and an impactful graphic is our prerogative — the perspective just makes the message more memorable.',
      },
      {
        de: 'Ich lasse die Grafik neu zeichnen: flache 2D-Ansicht mit maßstabsgetreuen Flächen und neutralem Hintergrund, dazu die Vorjahreszahl im Bild. Die realen zwei Punkte kommuniziere ich offensiv — ein echter Fortschritt trägt sich ohne optische Aufblähung.',
        en: 'I have the graphic redrawn: a flat 2D view with areas true to scale and a neutral background, plus the prior-year figure shown alongside. I communicate the real two points confidently — genuine progress carries itself without visual inflation.',
      },
      {
        de: 'Ich behalte das 3D-Tortenstück, tausche nur die Wiese gegen einen schlichten Hintergrund — die Perspektive allein ist harmlos.',
        en: 'I keep the 3D pie slice and only swap the meadow for a plain background — the perspective on its own is harmless.',
      },
      {
        de: 'Ich schreibe eine kräftigere Schlagzeile über die Grafik („Grüner Durchbruch"), damit Text und Bild dieselbe Wucht haben.',
        en: 'I write a punchier headline over the graphic ("Green breakthrough") so that text and image carry the same force.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Mechanismus ist visuell und mehrschichtig: Die gekippte 3D-Perspektive verzerrt die Flächenwahrnehmung, das satte Wiesenfoto lädt die Botschaft emotional auf — beide Design-Entscheidungen zusammen erzeugen einen Eindruck, den die Zahl selbst nicht hergibt. Die beste Antwort trennt das echte Ergebnis von der optischen Aufblähung: maßstabsgetreue Fläche, neutraler Hintergrund, Vorjahreswert im Bild. So bleibt der reale Zwei-Punkte-Fortschritt sichtbar, ohne dass die Grafik mehr behauptet als die Daten. Legitim einsetzen: Klare, ansprechende Visualisierung ist dein Handwerk — professionell wird sie, wenn Bildgröße und Farbe der Aussage dienen und nicht das Größenverhältnis fälschen. Option 1 wirkt plausibel, weil die Zahl ja stimmt — doch eine korrekte Zahl in einem verzerrten Bild bleibt eine verzerrte Aussage, und als Absenderin haftest du für den falschen Eindruck, nicht für die Fußnote. Option 3 entfernt nur eine der beiden Verzerrungen: Die 3D-Perspektive fälscht das Flächenverhältnis weiter, der Kern des Problems bleibt stehen. Option 4 verstärkt die Täuschung sogar, indem sie die aufgeblähte Grafik mit einer ebenso aufgeblähten Schlagzeile (Framing) doppelt — statt zu entzerren, legst du eine zweite Übertreibung darüber.',
      en: 'The mechanism is visual and layered: the tilted 3D perspective distorts the perception of area, the rich meadow photo charges the message emotionally — together, both design choices create an impression the figure itself does not support. The best answer separates the real result from the optical inflation: area true to scale, neutral background, prior-year value shown. That keeps the genuine two-point gain visible without the graphic claiming more than the data. Used legitimately: clear, appealing visualisation is your craft — it becomes professional when size and colour serve the statement rather than falsifying the ratio of magnitudes. Option 1 seems plausible because the figure is indeed correct — but a correct number inside a distorted picture is still a distorted statement, and as the sender you are liable for the false impression, not for the footnote. Option 3 removes only one of the two distortions: the 3D perspective still falsifies the area ratio, so the core of the problem remains. Option 4 actually amplifies the deception by doubling the inflated graphic with an equally inflated headline (framing) — instead of undistorting, you lay a second exaggeration on top.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'emotional_appeal', 'framing'],
  },
  {
    id: 'backfill-visual_manipulation-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Der Verband erzeugt die Betroffenheit, indem er ___.',
      en: 'Complete the sentence: the association manufactures the sense of urgency by ___.',
    },
    scenario: {
      de: 'Spendenaufruf eines Hilfswerks nach einer Überschwemmung: Für das Mailing an Förderinnen und Förderer liegt ein echtes Foto vom aktuellen Einsatzort vor. Die Bildredaktion wählt daraus einen extrem engen Anschnitt auf das nasse Gesicht eines einzelnen weinenden Kindes, zieht die Umgebung ins Dunkle und dreht die Farben kühl und entsättigt, sodass der Blick zwangsläufig auf den Tränen hängen bleibt. Am Sachverhalt und am Ort ändert sich nichts — nur die Bildgestaltung lenkt und verstärkt das Gefühl.',
      en: 'A relief organisation\'s donation appeal after a flood: for the mailing to supporters there is a genuine photo from the current site of operations. The picture desk selects from it an extremely tight crop of the wet face of a single crying child, darkens the surroundings and turns the colours cool and desaturated so that the gaze inevitably lingers on the tears. Nothing about the facts or the location changes — only the picture design steers and amplifies the feeling.',
    },
    options: [
      {
        de: 'das echte Foto durch engen Anschnitt, Abdunkeln und Farbstimmung so gestaltet, dass der Blick zwangsläufig auf den Tränen landet (Visuelle Manipulation)',
        en: 'designing the genuine photo — tight crop, darkening, colour grade — so the gaze inevitably lands on the tears (visual manipulation)',
      },
      {
        de: 'im Anschreiben eine herzzerreißende Einzelgeschichte erzählt, ganz ohne Bild (Emotionaler Appell)',
        en: 'telling a heart-rending individual story in the letter, with no image at all (emotional appeal)',
      },
      {
        de: 'ein echtes, aber älteres Foto einer früheren Flut als aktuellen Einsatzort ausgibt (Dekontextualisierung)',
        en: 'passing off a genuine but older photo of an earlier flood as the current site (decontextualization)',
      },
      {
        de: 'nur die dramatischste Einzelzahl der Schadensbilanz zitiert und den Rest weglässt (Cherry-Picking)',
        en: 'quoting only the most dramatic single figure from the damage report and omitting the rest (cherry-picking)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Visuelle Manipulation: Das Gefühl reist hier auf dem Bild, nicht auf dem Argument. Anschnitt, Lichtführung und Farbstimmung sind Design-Entscheidungen, die den Blick vorbewusst steuern und die Emotion verstärken, bevor ein Gedanke einsetzt — der Sachverhalt bleibt unangetastet, gestaltet ist die Wahrnehmung. Legitim einsetzen: Ein starkes, ehrliches Bild darf berühren; professionell bleibt es, wenn die Gestaltung zeigt, was ist, statt eine Dramatik zu inszenieren, die die Lage nicht trägt. Erkennen und kontern: Frag dich, ob dieselbe Aussage auch mit einem neutral belichteten, weiter gefassten Foto standhielte — wenn die Wirkung ohne die Bildkosmetik zusammenfällt, trägt sie das Design, nicht die Sache. Der Emotionale Appell (Option 2) zielt auf dasselbe Gefühl, wirkt aber über Text und Erzählung; hier läuft alles über den Bildkanal, das unterscheidet die beiden. Dekontextualisierung (Option 3) verlangte ein Bild aus fremdem Zusammenhang — hier stammt das Foto echt vom aktuellen Ort, verändert ist nur seine Gestaltung. Cherry-Picking (Option 4) wählte selektiv Zahlen aus; hier wird keine Statistik gefiltert, sondern ein Bild komponiert.',
      en: 'Visual manipulation: here the feeling travels on the image, not on the argument. Crop, lighting and colour grade are design choices that steer the gaze pre-consciously and amplify the emotion before a thought sets in — the facts remain untouched, it is the perception that is designed. Used legitimately: a strong, honest image may move people; it stays professional when the design shows what is there rather than staging a drama the situation does not support. To spot and counter it: ask yourself whether the same statement would hold up with a neutrally exposed, wider photo — if the effect collapses without the visual cosmetics, it is the design carrying it, not the substance. The emotional appeal (option 2) targets the same feeling but works through text and narrative; here everything runs through the visual channel, and that is what separates the two. Decontextualization (option 3) would require an image from a foreign context — here the photo genuinely comes from the current site, and only its design is altered. Cherry-picking (option 4) would selectively choose figures; here no statistic is filtered, an image is composed.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'emotional_appeal', 'decontextualization_cheapfakes', 'cherry_picking'],
  },
];
