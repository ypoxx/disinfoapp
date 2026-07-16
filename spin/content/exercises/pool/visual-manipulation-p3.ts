import type { Exercise } from '../../types';

// visual_manipulation — Phase 3 densification batch.
export const visualManipulationP3Exercises: Exercise[] = [
  {
    id: 'vm-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken hier zusammen. Welche trägt den irreführenden Eindruck am stärksten?',
      en: 'Several techniques work together here. Which one most strongly drives the misleading impression?',
    },
    scenario: {
      de: 'Beim Quartals-Update für Investoren baut das Design-Team die Kernfolie. Der Umsatz für Q3 wächst gegenüber Q2 real um 3 %, doch die y-Achse des Balkendiagramms beginnt erst bei 4,8 Mio. €, sodass der neue Balken fast dreimal so hoch wirkt wie der alte. Darüber prangt ein großer, roter Aufwärtspfeil, und als Hintergrundbild wählt das Team ein jubelndes, volles Auditorium — aufgenommen allerdings auf der deutlich größeren Vorjahreskonferenz. In der Fußnote steht klein: „Zahlen ungeprüft".',
      en: 'For the quarterly investor update, the design team builds the key slide. Q3 revenue is up a real 3 % over Q2, yet the bar chart’s y-axis starts at €4.8m, so the new bar looks almost three times as tall as the old one. A large red upward arrow sits on top, and the team picks a background image of a cheering, packed auditorium — shot, however, at last year’s much larger conference. A small footnote reads: “figures unaudited”.',
    },
    options: [
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Ankereffekt', en: 'Anchoring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominanter Treiber ist die Visuelle Manipulation: Der irreführende Kern — ein reales Plus von 3 % sieht aus wie fast eine Verdreifachung — entsteht direkt aus der abgeschnittenen y-Achse und dem überdimensionierten Pfeil. Diese visuellen Mittel verzerren die Daten selbst; das Auge liest die Balkenhöhe, bevor irgendein Wort wirkt. Die anderen Techniken sind präsent, aber nachgeordnet: Der emotionale Appell (jubelnde Menge) erzeugt Stimmung, nicht die falsche Größenordnung; das Framing (Aufwärtspfeil als „Momentum") lenkt die Deutung, doch die Täuschung sitzt in der Grafik; und der Ankereffekt (Basislinie 4,8 Mio. €) ist selbst nur ein Artefakt der Achsenabschneidung, also Teil der visuellen Manipulation, kein eigenständiger Haupttreiber. Die Grenze: Eine klar gekennzeichnete Achsenunterbrechung oder eine Null-Basislinie ist legitimes Design; eine Achse gezielt abzuschneiden, um die wahrgenommene Veränderung aufzublähen, überschreitet sie.',
      en: 'The dominant driver is visual manipulation: the misleading core — a real 3 % gain that looks like almost a tripling — comes straight from the truncated y-axis and the oversized arrow. These visual devices distort the data itself; the eye reads the bar heights before any word takes effect. The other techniques are present but secondary: the emotional appeal (cheering crowd) supplies mood, not the false magnitude; the framing (upward arrow as “momentum”) steers interpretation, but the deception lives in the chart; and the anchoring (the €4.8m baseline) is itself merely an artefact of the axis truncation, i.e. part of the visual manipulation, not a separate primary driver. The boundary: a clearly labelled axis break or a zero baseline is legitimate design; deliberately truncating the axis to inflate the perceived change crosses it.',
    },
    points: 20,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'framing', 'emotional_appeal'],
  },
  {
    id: 'vm-p3-2',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team stellt die visuellen Bausteine für ein Presse-Kit zum neuen E-Bike zusammen. Welches geplante Element überschreitet die Grenze von legitimer Gestaltung zu irreführender Bildmanipulation?',
      en: 'Your team is assembling the visual components of a press kit for the new e-bike. Which planned element crosses the line from legitimate design into deceptive image manipulation?',
    },
    scenario: {
      de: 'Geplante visuelle Bausteine des Presse-Kits:',
      en: 'Planned visual components of the press kit:',
    },
    options: [
      {
        de: 'Ein Vergleichs-Balkendiagramm der Reichweite (km) gegenüber zwei Wettbewerbern — mit Null-Basislinie und Angabe des Prüfstandards in der Fußnote.',
        en: 'A bar chart comparing range (km) against two competitors — with a zero baseline and the test standard cited in a footnote.',
      },
      {
        de: 'Ein professionell ausgeleuchtetes, farblich abgestimmtes Lifestyle-Hero-Bild einer Fahrerin auf dem neuen Rad, klar als Werbevisual eingesetzt.',
        en: 'A professionally lit, colour-graded lifestyle hero image of a rider on the new bike, clearly used as an advertising visual.',
      },
      {
        de: 'Eine Infografik zur Akkulaufzeit, die die Messwerte auf volle Stunden rundet und die Testbedingungen offenlegt.',
        en: 'A battery-life infographic that rounds the measured values to full hours and discloses the test conditions.',
      },
      {
        de: 'Das offizielle Produktfoto wird nachbearbeitet, um einen sichtbaren Serienmangel — ein ungleichmäßiges Spaltmaß am Rahmen — wegzuretuschieren, und anschließend als unbearbeitetes Foto des Auslieferungsprodukts verbreitet.',
        en: 'The official product photo is retouched to remove a visible production defect — an uneven panel gap on the frame — and then distributed as an unedited photo of the shipping product.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Baustein 4 (Index 3) überschreitet die Grenze: Einen realen Serienmangel wegzuretuschieren und das Bild anschließend als unbearbeitetes Foto des Auslieferungsprodukts auszugeben, täuscht die Käuferschaft über eine wesentliche Produkteigenschaft — das ist irreführende Werbung (Haftungsrisiko) und manipulative Bildbearbeitung. Der Kontrast zu Baustein 2 (Index 1) ist die Lernpointe: Ästhetisches Color-Grading und Ausleuchten eines klar als Werbevisual erkennbaren Lifestyle-Bildes ist legitimes Handwerk — es gestaltet die Stimmung, verfälscht aber keine überprüfbare Tatsache über das Produkt. Das ehrliche Vergleichsdiagramm (Index 0, Null-Basislinie plus Prüfstandard) und die gerundete, offengelegte Infografik (Index 2) bleiben auf der Ebene korrekter Information. Prüffrage für die Grenze: Verändert die Bearbeitung, wie das Publikum eine wesentliche Tatsache beurteilt, und wird das veränderte Bild als echte Dokumentation ausgegeben? Wenn ja — wie beim wegretuschierten Mangel — ist die Grenze überschritten.',
      en: 'Component 4 (index 3) crosses the line: retouching out a real production defect and then passing the image off as an unedited photo of the shipping product deceives buyers about a material property of the goods — that is misleading advertising (liability risk) and manipulative image editing. The contrast with component 2 (index 1) is the teaching point: aesthetic colour-grading and lighting of a clearly-labelled lifestyle advertising visual is legitimate craft — it styles the mood but misrepresents no verifiable fact about the product. The honest comparison chart (index 0, zero baseline plus cited standard) and the rounded, disclosed infographic (index 2) stay on the level of accurate information. Boundary test: does the edit change how the audience judges a material fact, and is the altered image passed off as genuine documentation? If yes — as with the retouched defect — the line is crossed.',
    },
    points: 15,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation'],
  },
  {
    id: 'vm-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik setzt die Werbeanzeige hier ein?',
      en: 'Which technique is this ad using here?',
    },
    scenario: {
      de: 'In einer Print-Anzeige stehen zwei Getränkedosen nebeneinander: Die eigene Marke ist doppelt so groß abgebildet wie die des Konkurrenten — obwohl beide exakt 0,33 l fassen. Die schiere Bildgröße suggeriert „mehr fürs Geld".',
      en: 'In a print ad, two beverage cans stand side by side: the company’s own brand is depicted twice as large as the competitor’s — even though both hold exactly 0.33 l. The sheer image size suggests “more for your money”.',
    },
    options: [
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Knappheit', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist blatante Visuelle Manipulation: Der irreführende Eindruck entsteht allein aus der unverhältnismäßigen Bildgröße — einem rein visuellen Mittel —, während die tatsächliche Füllmenge identisch ist. Legitim wäre, Produkte im wahren Größenverhältnis zu zeigen; manipulativ ist, ein Bild aufzublähen, um mehr Wert vorzutäuschen. Ein Ankereffekt würde zuerst eine Referenzzahl setzen, Sozialer Beweis würde auf die Wahl anderer verweisen, Knappheit würde begrenzte Verfügbarkeit betonen — nichts davon geschieht hier; allein die Größe des Bildes täuscht.',
      en: 'This is blatant visual manipulation: the misleading impression comes purely from the disproportionate image size — a purely visual device — while the actual volume is identical. It would be legitimate to show products at their true relative scale; it is manipulative to inflate one image to imply more value. Anchoring would set a reference number first, social proof would cite others’ choices, scarcity would stress limited availability — none of that happens here; only the size of the picture does the deceiving.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation'],
  },
  {
    id: 'vm-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diesen Bildvergleich vor allem?',
      en: 'Which technique primarily shapes this image comparison?',
    },
    scenario: {
      de: 'Eine Handelskette bewirbt ihre Filialen mit einem Doppelbild. Die eigene Filiale wurde mit Weitwinkel und heller Ausleuchtung fotografiert und wirkt großzügig, licht und belebt; die „typische Konkurrenzfiliale" daneben wurde mit Teleobjektiv (das den Raum staucht) und gedämpftem Licht aufgenommen und wirkt eng, dunkel und leer. Beide Filialen sind in Wirklichkeit gleich groß und gleich gut besucht.',
      en: 'A retail chain promotes its stores with a two-image pairing. Its own store was shot with a wide-angle lens and bright lighting and looks spacious, airy and busy; the “typical competitor store” beside it was shot with a telephoto lens (which compresses space) and muted light and looks cramped, dark and empty. In reality both stores are the same size and equally busy.',
    },
    options: [
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel ist die Wahl von Objektiv, Bildausschnitt und Licht — technische, visuelle Mittel, die verzerren, wie dieselbe Realität wahrgenommen wird; das ist Visuelle Manipulation. Framing, Ankereffekt und Emotionaler Appell sind die Beinahe-Treffer: Es gibt zwar einen Kontrasteffekt, doch er wird über die Bilder hergestellt, nicht über Worte (Framing), nicht über eine Referenzzahl (Ankereffekt) und nicht über einen direkten Gefühlsappell (Emotionaler Appell). Die Grenze: Die eigene Filiale vorteilhaft zu fotografieren ist legitim; eine täuschende Gegenüberstellung zu konstruieren, die die Konkurrenz falsch darstellt, überschreitet sie (und das Recht der vergleichenden Werbung).',
      en: 'The lever is the choice of lens, framing and lighting — technical, visual means that distort how the same reality is perceived; that is visual manipulation. Framing, anchoring and emotional appeal are the near-misses: there is a contrast effect at play, but it is manufactured through the images, not through words (framing), not through a reference number (anchoring), and not through a direct appeal to feeling (emotional appeal). The boundary: photographing your own store flatteringly is legitimate; engineering a deceptive side-by-side that misrepresents a competitor crosses it (and comparative-advertising law).',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'framing'],
  },
  {
    id: 'vm-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt hier den irreführenden Eindruck?',
      en: 'Which technique carries the misleading impression here?',
    },
    scenario: {
      de: 'In einer Produktvergleichstabelle für ein Präparat sind sämtliche Zeilen des eigenen Produkts beruhigend grün hinterlegt und mit Häkchen versehen, während jede Wettbewerber-Zeile alarmierend rot eingefärbt ist — und zwar auch dort, wo die zugrunde liegenden Zahlen identisch oder für den Wettbewerber sogar besser sind. Nicht die Werte, sondern die Farbgebung erzeugt den Eindruck, nur das eigene Produkt sei „sicher".',
      en: 'In a product-comparison table for a formulation, every row of the company’s own product is shaded a calming green with checkmarks, while every competitor row is coloured an alarming red — even where the underlying figures are identical or actually better for the competitor. It is the colour scheme, not the values, that creates the impression that only the company’s own product is “safe”.',
    },
    options: [
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der irreführende Eindruck wird durch das visuelle Design erzeugt: Farbpsychologie, direkt auf die Datenzellen angewandt (grün = sicher, rot = Gefahr), unabhängig von den Zahlen — das ist Visuelle Manipulation, für die Farbe ein klassischer Hebel ist. Priming ist der nächste Beinahe-Treffer: Farben tragen zwar Assoziationen, doch Priming im engeren Sinn wirkt über einen unabhängigen vorherigen Reiz, der ein späteres Urteil beeinflusst — hier liegt die Farbe unmittelbar auf den zu beurteilenden Daten. Framing würde die Fakten sprachlich umdeuten, ein Emotionaler Appell würde ausdrücklich ans Gefühl appellieren — beides ist nicht der Mechanismus, der allein in der visuellen Kodierung steckt. Die Grenze: Eine Farbcodierung, die die Daten getreu abbildet (grün für tatsächlich bessere Werte), ist legitim; identische oder schlechtere Daten einzufärben, um einen Vorteil vorzutäuschen, überschreitet sie.',
      en: 'The misleading impression is produced by the visual design: colour psychology applied directly to the data cells (green = safe, red = danger) irrespective of the numbers — that is visual manipulation, for which colour is a classic lever. Priming is the closest near-miss: colours do carry associations, but priming proper works through an unrelated prior stimulus that shapes a later judgment, whereas here the colour sits directly on the data being judged. Framing would re-describe the facts in words; an emotional appeal would make an explicit plea to feeling — neither is the mechanism, which lives purely in the visual encoding. The boundary: colour-coding that faithfully reflects the data (green for genuinely better values) is legitimate; colouring identical or worse data to fake an advantage crosses it.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'priming'],
  },
  {
    id: 'vm-p3-6',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Der bewusst gewählte, eng beschnittene Fotoausschnitt zeigt nur die vollen vorderen Reihen und lässt die leere hintere Hälfte des Saals verschwinden. Die hier genutzte Technik ist ___.',
      en: 'Complete the sentence: The deliberately chosen, tightly-cropped photo shows only the packed front rows and makes the empty back half of the hall disappear. The technique at work is ___.',
    },
    scenario: {
      de: 'Ein Veranstalter bebildert die Pressemitteilung zu seiner schwach besuchten Fachkonferenz und wählt aus hundert Aufnahmen gezielt diesen einen Ausschnitt.',
      en: 'An organiser illustrates the press release for its poorly attended industry conference and deliberately picks this one crop out of a hundred shots.',
    },
    options: [
      { de: 'visuelle Manipulation', en: 'visual manipulation' },
      { de: 'sozialer Beweis', en: 'social proof' },
      { de: 'Framing', en: 'framing' },
      { de: 'emotionaler Appell', en: 'emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der irreführende Eindruck entsteht allein daraus, was der Bildrahmen einschließt und ausschließt — ein selektiver Ausschnitt eines echten Fotos, also ein aus dem Kontext gerissenes Bild; das ist der Kernzug der visuellen Manipulation. Sozialer Beweis ist der Eindruck, den der Ausschnitt vortäuschen soll („schau, wie viele da waren"), aber nicht der Mechanismus — es wird nicht einmal eine Zahl behauptet. Framing meint hier die sprachliche/inhaltliche Rahmung, nicht einen fotografischen Beschnitt; ein emotionaler Appell würde direkt Gefühle ansprechen. Nur „visuelle Manipulation" benennt den Hebel: Wahrnehmung über das Bild selbst zu steuern. Die Grenze: sein bestes echtes Foto auszuwählen ist normale PR; so zu beschneiden, dass der halb leere Saal verborgen bleibt, verzerrt eine Tatsache und überschreitet sie.',
      en: 'The misleading impression is created solely by what the frame includes and excludes — a selective crop of a real photo, i.e. an out-of-context image; that is the defining move of visual manipulation. Social proof is the impression the crop is meant to fake (“look how many attended”), but it is not the mechanism — no figure is even claimed. Framing here means verbal or contextual framing, not a photographic crop; an emotional appeal would target feelings directly. Only “visual manipulation” names the lever: steering perception through the image itself. The boundary: choosing your best genuine photo is normal PR; cropping to hide that half the room was empty distorts a fact and crosses it.',
    },
    points: 10,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation'],
  },
  {
    id: 'vm-p3-7',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du bist Kommunikationsleiterin. Wie gehst du mit der Grafik im Geschäftsbericht um?',
      en: 'You are the communications lead. How do you handle the chart in the annual report?',
    },
    scenario: {
      de: 'Die Agentur liefert die Infografiken für den Geschäftsbericht. Dir fällt auf: Die Vorzeige-Grafik „Kundenwachstum" nutzt eine bei 92 % abgeschnittene y-Achse, sodass ein reales Plus von 4 % wie ein dramatischer Höhenflug aussieht. Das Design ist wirklich beeindruckend, und der Vorstand ist begeistert.',
      en: 'The agency delivers the infographics for the annual report. You notice: the flagship “customer growth” chart uses a y-axis truncated at 92 %, so a real 4 % increase looks like a dramatic surge. The design is genuinely impressive, and the board loves it.',
    },
    options: [
      {
        de: 'Ich lasse die Grafik mit ehrlicher Null-Basislinie (oder klar gekennzeichneter Achsenunterbrechung) neu bauen, damit der visuelle Eindruck der realen Größenordnung entspricht — das starke Design behalten wir, nur innerhalb ehrlicher Grenzen. Ist ein Plus von 4 % wenig spektakulär, erzählen wir diese Geschichte ehrlich.',
        en: 'I have the chart rebuilt with an honest zero baseline (or a clearly marked axis break) so the visual impression matches the real magnitude — we keep the strong design, just within honest limits. If a 4 % rise is unspectacular, we tell that story truthfully.',
      },
      {
        de: 'Ich behalte die abgeschnittene Achse, setze aber eine kleine Fußnote darunter, die vermerkt, wo die Achse beginnt.',
        en: 'I keep the truncated axis but add a small footnote noting where the axis starts.',
      },
      {
        de: 'Ich lasse die Grafik so — die Daten sind ja nicht falsch, und praktisch alle Unternehmen stellen ihre Charts vorteilhaft dar.',
        en: 'I leave the chart as is — the data isn’t false, after all, and virtually every company presents its charts favourably.',
      },
      {
        de: 'Ich ersetze das Diagramm durch ein noch wirkungsvolleres Emotionsbild zufriedener Kundinnen, um vom bescheidenen Zahlenwert abzulenken.',
        en: 'I replace the chart with an even more powerful emotional image of happy customers to distract from the modest figure.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) trennt Handwerk und Täuschung sauber: Sie behält das eindrucksvolle Design, baut aber die Achse so, dass der visuelle Eindruck dem realen Plus von 4 % entspricht. Eine abgeschnittene y-Achse im Geschäftsbericht täuscht auf den ersten Blick und ist — weil Investoren sich auf Berichtsgrafiken verlassen — wesentlich irreführend, mit echtem Haftungs- und Reputationsrisiko. Option 2 (Fußnote) heilt das nicht: Das Publikum liest die Balkenhöhen sofort; eine Fußnote, die im Überfliegen niemand liest, lässt den falschen Eindruck bestehen. Option 3 („machen doch alle") normalisiert die Täuschung und verwechselt „die Zahlen sind technisch korrekt" mit „das Bild ist ehrlich" — ein verzerrtes Bild wahrer Zahlen bleibt eine Lüge. Option 4 tauscht eine visuelle Manipulation (Achse) gegen eine andere (Ablenkungsbild) und legt noch nach, statt zu korrigieren. Die Grenze: dramatische, schöne Datenvisualisierung ist willkommen — solange die visuelle Größenordnung der realen entspricht.',
      en: 'Only option 1 (index 0) cleanly separates craft from deception: it keeps the striking design but rebuilds the axis so the visual impression matches the real 4 % gain. A truncated y-axis in an annual report deceives at a glance and — because investors rely on report visuals — is materially misleading, with real liability and reputational exposure. Option 2 (footnote) does not cure it: the audience reads the bar heights instantly; a footnote nobody reads while skimming leaves the false impression intact. Option 3 (“everyone does it”) normalises the deception and mistakes “the numbers are technically correct” for “the picture is honest” — a distorted picture of true numbers is still a lie. Option 4 swaps one visual manipulation (the axis) for another (a distraction image), doubling down instead of fixing it. The boundary: dramatic, beautiful data visualisation is welcome — as long as the visual magnitude equals the real one.',
    },
    points: 15,
    primaryTechniqueId: 'visual_manipulation',
    relatedTechniques: ['visual_manipulation', 'framing'],
  },
];
