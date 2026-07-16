import type { Exercise } from '../../types';

// emotional_appeal — Phase 3 densification batch.
export const emotionalAppealP3Exercises: Exercise[] = [
  {
    id: 'ea-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken zusammen. Welche trägt die Überzeugungskraft dieser Kampagne VOR ALLEM?',
      en: 'Several techniques act together. Which one PRIMARILY carries this campaign’s persuasive power?',
    },
    scenario: {
      de: 'Ein Versicherer testet einen 30-Sekunden-Spot. Er öffnet mit einer Zeitlupen-Montage: ein brennendes Familienhaus, ein Kinderfoto zwischen der Asche, eine leise Stimme: „In einer einzigen Nacht kann alles weg sein. Lass deine Familie damit nicht allein." Erst in der letzten Sekunde erscheinen klein ein Banner „Sonderrabatt nur bis Freitag" und die Zeile „Schon tausende Familien vertrauen auf uns."',
      en: 'An insurer tests a 30-second spot. It opens with a slow-motion montage: a burning family home, a child’s photo among the ashes, a hushed voice: “In a single night, everything can be gone. Don’t leave your family to face that alone.” Only in the final second does a small banner appear — “Special discount, only until Friday” — plus the line “Thousands of families already trust us.”',
    },
    options: [
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Der Spot schichtet mehrere Techniken, aber die tragende Kraft ist der emotionale Appell: Die Angst-Bilder (brennendes Haus, Kinderfoto) und die direkte Ansprache „Lass deine Familie damit nicht allein" aktivieren Urängste und ersetzen jede sachliche Risiko- oder Leistungsargumentation. Nimm die Angst heraus, und der Spot bricht zusammen; nimm das Freitags-Banner heraus, ändert sich kaum etwas — das zeigt, was hier dominiert. Verknappung ist zwar präsent („nur bis Freitag"), aber nur als winziger End-Hinweis, nicht als Motor. Sozialer Beweis („tausende Familien") ist ebenfalls nur ein Nebensatz am Rand. Ankereffekt greift gar nicht, weil kein Referenzpreis gezeigt wird, gegen den ein Rabatt wirken könnte. Die Grenze: Emotionen anzusprechen ist legitim, solange sie zu einem realen, ehrlich dargestellten Risiko passen — manipulativ wird es, wenn dramatisierte Angst die Sachinformation komplett verdrängt.',
      en: 'The spot layers several techniques, but the load-bearing force is the emotional appeal: the fear imagery (burning home, child’s photo) and the direct address “Don’t leave your family to face that alone” activate primal fears and replace any factual argument about risk or product merit. Remove the fear and the spot collapses; remove the Friday banner and almost nothing changes — that reveals what dominates. Scarcity is present (“only until Friday”), but merely as a tiny closing tag, not the engine. Social proof (“thousands of families”) is likewise a peripheral aside. Anchoring does not apply at all, because no reference price is shown for a discount to work against. The boundary: appealing to emotion is legitimate as long as it matches a real, honestly presented risk — it turns manipulative when dramatized fear entirely crowds out the substance.',
    },
    points: 20,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'scarcity', 'social_proof'],
  },
  {
    id: 'ea-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier vor allem eingesetzt?',
      en: 'Which technique is primarily used here?',
    },
    scenario: {
      de: 'Eine Spenden-E-Mail eines Hilfswerks öffnet ohne jede Zahl oder Faktenlage nur mit: „Schau diesem hungernden Kind in die Augen. Wenn du jetzt wegklickst, hast du es im Stich gelassen."',
      en: 'A charity donation email opens with no figures or facts at all, only: “Look this starving child in the eyes. If you click away now, you’ve abandoned it.”',
    },
    options: [
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Das ist ein reiner emotionaler Appell: Mitleid und Schuldgefühl („hast du es im Stich gelassen") werden direkt angesprochen, ohne ein einziges Sachargument über Wirkung, Bedarf oder Verwendung der Spende. Der Hebel wirkt, weil Schuld und Mitgefühl das nüchterne Abwägen überschreiben. Sozialer Beweis fehlt (niemand verweist auf „andere spenden schon"), Verknappung fehlt (keine Frist, keine Mengenbegrenzung), ein Autoritätsargument fehlt (keine Experten- oder Institutionsinstanz als Beleg). Legitim wäre echtes Mitgefühl gepaart mit belegbaren Angaben; manipulativ wird es, wenn allein das Schuldgefühl die Entscheidung tragen soll.',
      en: 'This is a pure emotional appeal: pity and guilt (“you’ve abandoned it”) are addressed directly, without a single substantive argument about impact, need, or how the donation is used. The lever works because guilt and compassion override sober weighing. Social proof is absent (no one points to “others are already donating”), scarcity is absent (no deadline, no limited quantity), and appeal to authority is absent (no expert or institution cited as evidence). Genuine compassion paired with verifiable facts would be legitimate; it turns manipulative when guilt alone is meant to carry the decision.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal'],
  },
  {
    id: 'ea-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier vor allem eingesetzt?',
      en: 'Which technique is primarily used here?',
    },
    scenario: {
      de: 'Der Relaunch-Claim einer Traditionsmarke lautet, ganz ohne Produktangaben: „Erinnerst du dich, wie unbeschwert sich das Leben damals anfühlte? Mit uns holst du dir dieses warme Gefühl von früher einfach zurück."',
      en: 'A heritage brand’s relaunch claim reads, with no product details at all: “Remember how carefree life felt back then? With us, you simply get that warm feeling of the old days back.”',
    },
    options: [
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Der Claim ist ein emotionaler Appell in seiner Nostalgie-Variante: „Erinnerst du dich … das warme Gefühl von früher" weckt gezielt Sehnsucht und Geborgenheit, statt irgendein Produktmerkmal, einen Preis oder Nutzen zu nennen. Der Hebel: Ein warmes Erinnerungsgefühl wird auf die Marke übertragen und übernimmt die Rolle des Arguments. Ankereffekt fehlt (keine Zahl, kein Referenzwert), Verknappung fehlt (keine Frist), sozialer Beweis fehlt (kein Verweis auf andere Käufer). Nostalgie einzusetzen ist an sich legitim; die Grenze ist überschritten, wenn das Gefühl die vollständig fehlende Sachinformation ersetzt.',
      en: 'The claim is an emotional appeal in its nostalgia form: “Remember … that warm feeling of the old days” deliberately evokes longing and comfort instead of naming any product feature, price, or benefit. The lever: a warm memory-feeling is transferred onto the brand and takes the place of an argument. Anchoring is absent (no number, no reference value), scarcity is absent (no deadline), social proof is absent (no reference to other buyers). Using nostalgia is legitimate in itself; the line is crossed when the feeling substitutes for the entirely missing substance.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal'],
  },
  {
    id: 'ea-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Verkaufszeile vor allem?',
      en: 'Which technique primarily shapes this sales line?',
    },
    scenario: {
      de: 'Die Startseite einer Sicherheits-Software listet keine Funktionen auf, sondern führt mit einer einzigen Zeile: „Jede Minute ohne Schutz ist eine Minute, in der Fremde deine privaten Fotos, deine Nachrichten, dein ganzes Leben in die Finger bekommen könnten."',
      en: 'A security software’s landing page lists no features but leads with a single line: “Every minute without protection is a minute in which strangers could get their hands on your private photos, your messages, your whole life.”',
    },
    options: [
      { de: 'Rahmung (Framing)', en: 'Framing' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Treiber ist der emotionale Appell: Die Zeile malt eine konkrete, sehr persönliche Verlustangst aus („deine privaten Fotos, deine Nachrichten, dein ganzes Leben") und setzt auf blankes Bedrohungsgefühl statt auf ein Sachargument. Rahmung ist der verlockendste Fehlgriff, greift aber nicht: Rahmung würde dieselbe Tatsache mit verschobener Bezugsgröße darstellen (etwa „blockiert 99 % der Angriffe" vs. „1 % kommen durch") — hier wird jedoch keine Kennzahl umgedeutet, sondern reine Angst erzeugt. Priming meint das unauffällige Vor-Aktivieren eines Begriffs für ein späteres, getrenntes Urteil; hier ist der Appell offen und unmittelbar. Ankereffekt scheidet aus, weil keine Zahl als Bezugswert gesetzt wird. Grenze: Auf ein reales Risiko hinzuweisen ist legitim; die dramatisierte, faktenlose Bedrohung überschreitet sie.',
      en: 'The driver is the emotional appeal: the line paints a concrete, deeply personal fear of loss (“your private photos, your messages, your whole life”) and relies on raw threat-feeling instead of a substantive argument. Framing is the most tempting miss but does not apply: framing would present the same fact with a shifted reference point (e.g. “blocks 99% of attacks” vs. “1% get through”) — here no metric is reinterpreted, pure fear is generated. Priming means the unobtrusive prior activation of a concept for a later, separate judgment; here the appeal is overt and immediate. Anchoring is out because no number is set as a reference value. Boundary: pointing to a real risk is legitimate; the dramatized, fact-free threat crosses it.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'framing'],
  },
  {
    id: 'ea-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Recruiting-Anzeige vor allem?',
      en: 'Which technique primarily shapes this recruiting ad?',
    },
    scenario: {
      de: 'Eine Recruiting-Anzeige eines Pflegedienstes nennt weder Gehalt noch Schichtmodell noch Aufgaben, sondern nur: „Spür den Moment, wenn ein einsamer Mensch dank dir zum ersten Mal seit Wochen wieder lacht. Diese Dankbarkeit trägt dich durch jeden Tag."',
      en: 'A care service’s recruiting ad names neither pay nor shift model nor duties, only: “Feel the moment when a lonely person laughs again for the first time in weeks, thanks to you. That gratitude carries you through every day.”',
    },
    options: [
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Das ist ein emotionaler Appell an Mitgefühl und Stolz: „Spür den Moment … diese Dankbarkeit trägt dich" adressiert direkt ein warmes Sinn- und Belohnungsgefühl, während jede sachliche Job-Information (Gehalt, Schichten, Aufgaben) bewusst weggelassen ist. Der Hebel: Ein antizipiertes gutes Gefühl übernimmt die Rolle der Entscheidungsgrundlage. Sozialer Beweis würde auf andere Bewerber verweisen („schon 5.000 Pflegekräfte bei uns") — fehlt hier. Verknappung würde Dringlichkeit oder wenige Stellen betonen — fehlt. Ein Autoritätsargument würde eine Experten- oder Prüfinstanz anführen — fehlt. Sinnstiftung emotional zu vermitteln ist legitim; problematisch wird es, wenn das Gefühl die harten, entscheidungsrelevanten Fakten vollständig ersetzt.',
      en: 'This is an emotional appeal to compassion and pride: “Feel the moment … that gratitude carries you” directly addresses a warm sense of meaning and reward, while every factual job detail (pay, shifts, duties) is deliberately omitted. The lever: an anticipated good feeling takes the place of the basis for a decision. Social proof would point to other applicants (“5,000 carers already with us”) — absent here. Scarcity would stress urgency or few openings — absent. An appeal to authority would cite an expert or accrediting body — absent. Conveying meaning emotionally is legitimate; it becomes problematic when the feeling entirely replaces the hard, decision-relevant facts.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'social_proof'],
  },
  {
    id: 'ea-p3-6',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik steckt hinter dieser ruhig vorgetragenen Ausweich-Antwort?',
      en: 'Which technique lies behind this calmly delivered evasive answer?',
    },
    scenario: {
      de: 'In einer Medien-Fragerunde hakt eine Journalistin nach, warum die gemeldete Ausfallrate im letzten Quartal gestiegen sei. Die Sprecherin senkt die Stimme und sagt, ohne die Zahl zu berühren: „Weißt du, was mich wirklich bewegt? Die vielen Familien, die sich Tag für Tag auf uns verlassen. Sie verdienen, dass wir in schwierigen Zeiten zusammenstehen, statt uns von einzelnen Zahlen verunsichern zu lassen."',
      en: 'In a media Q&A, a journalist presses on why the reported failure rate rose last quarter. The spokesperson lowers her voice and says, without touching the figure: “You know what really moves me? The many families who rely on us day after day. They deserve that we stand together in hard times, rather than letting ourselves be unsettled by isolated numbers.”',
    },
    options: [
      { de: 'Rahmung (Framing)', en: 'Framing' },
      { de: 'Narrative Überzeugung (Storytelling)', en: 'Narrative persuasion' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Pacing and Leading', en: 'Pacing and leading' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Trotz sachlichem Anschein ist der Mechanismus ein emotionaler Appell: Statt die Ausfallrate zu erklären, wechselt die Sprecherin ins Gefühlsregister — Mitgefühl für „die vielen Familien", ein Wir-Gefühl von Zusammenhalt „in schwierigen Zeiten" und die beruhigende Abwertung von „einzelnen Zahlen". Das erzeugt Sympathie und Solidaritätsdruck und schiebt die unbequeme Kennzahl beiseite. Rahmung greift nicht: Die Zahl wird nicht mit anderer Bezugsgröße neu dargestellt, sondern ganz umgangen. Narrative Überzeugung scheidet aus, weil keine Geschichte mit Figuren, Handlung und Wendung erzählt wird — es bleibt bei direkter Gefühlsansprache. Pacing and Leading läge vor, wenn die Sprecherin zuerst den Zustand der Journalistin spiegelte und sie dann schrittweise führte; sie pivotiert stattdessen sofort emotional. Grenze: Empathie zu zeigen ist legitim; hier dient das Gefühl aber dazu, eine berechtigte Sachfrage zu ersticken.',
      en: 'Despite the factual veneer, the mechanism is an emotional appeal: instead of explaining the failure rate, the spokesperson switches into the emotional register — compassion for “the many families”, an in-group feeling of standing together “in hard times”, and the reassuring dismissal of “isolated numbers”. This generates sympathy and solidarity pressure and pushes the inconvenient metric aside. Framing does not apply: the number is not re-presented with a different reference point, it is bypassed entirely. Narrative persuasion is out, because no story with characters, plot, and turning point is told — it stays direct emotional address. Pacing and leading would be present if she first mirrored the journalist’s state and then led her step by step; instead she pivots emotionally at once. Boundary: showing empathy is legitimate; here the feeling serves to smother a legitimate substantive question.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'narrative_persuasion'],
  },
  {
    id: 'ea-p3-7',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Der Brief verzichtet auf jede Kostenerklärung und setzt stattdessen gezielt auf ___, um die Preiserhöhung akzeptabel zu machen.',
      en: 'Complete the sentence: The letter forgoes any cost explanation and instead deliberately relies on ___ to make the price increase acceptable.',
    },
    scenario: {
      de: 'Ein Energieversorger kündigt eine Preiserhöhung an. Der Brief beginnt nicht mit Kostenzahlen, sondern mit: „Denk an die kalten Wintermorgen mit deinen Kindern — diese Wärme möchtest du doch niemals aufs Spiel setzen."',
      en: 'An energy provider announces a price increase. The letter does not begin with cost figures but with: “Think of the cold winter mornings with your children — you would never want to put that warmth at risk.”',
    },
    options: [
      {
        de: 'eine sachlich verschobene Bezugsgröße bei ansonsten gleichen Fakten',
        en: 'a factually shifted reference point while the facts otherwise stay the same',
      },
      {
        de: 'den Verweis auf eine anerkannte Fachinstanz als Beleg',
        en: 'a reference to a recognised expert body as proof',
      },
      {
        de: 'die gezielte Aktivierung von Wärme-, Fürsorge- und Verlustgefühlen',
        en: 'the deliberate activation of feelings of warmth, care and loss',
      },
      {
        de: 'den Hinweis auf ein zeitlich streng begrenztes Angebot',
        en: 'a note about a strictly time-limited offer',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Nur die dritte Option beschreibt, was der Brief tatsächlich tut: Er aktiviert gezielt Wärme, Fürsorge und die Angst vor Verlust („diese Wärme … niemals aufs Spiel setzen"), um die Erhöhung emotional erträglich zu machen — das ist der Kern eines emotionalen Appells. Die erste Option beschriebe eine Rahmung (dieselbe Tatsache mit verschobener Bezugsgröße), die hier nicht stattfindet, weil gar keine Kostenzahl genannt wird. Die zweite Option wäre ein Autoritätsargument (Fachinstanz als Beleg) — kommt nicht vor. Die vierte wäre Verknappung (befristetes Angebot) — ebenfalls nicht vorhanden. Legitim wäre, Sorge um Wärme ehrlich anzusprechen UND die Kosten transparent zu erklären; manipulativ ist es, das Gefühl als Ersatz für die fehlende Begründung einzusetzen.',
      en: 'Only the third option describes what the letter actually does: it deliberately activates warmth, care and the fear of loss (“never … put that warmth at risk”) to make the increase emotionally bearable — that is the core of an emotional appeal. The first option would describe framing (the same fact with a shifted reference point), which does not occur here because no cost figure is given at all. The second would be an appeal to authority (an expert body as proof) — not present. The fourth would be scarcity (a time-limited offer) — also not present. It would be legitimate to honestly acknowledge concern about warmth AND explain the costs transparently; it is manipulative to use the feeling as a substitute for the missing justification.',
    },
    points: 10,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'framing'],
  },
  {
    id: 'ea-p3-8',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als Kommunikationsverantwortliche mit dem Kampagnenentwurf um?',
      en: 'As the communications lead, how do you handle the campaign draft?',
    },
    scenario: {
      de: 'Für den Launch eines Alarmsystems legt dir ein Kollege einen Kampagnenentwurf vor, der fast ausschließlich auf drastische Einbruch-Bilder und Schockmomente setzt, um Angst zu erzeugen — belastbare Angaben zu Wirksamkeit oder Risiko fehlen. Was tust du?',
      en: 'For the launch of an alarm system, a colleague hands you a campaign draft that relies almost entirely on graphic break-in imagery and shock moments to generate fear — solid information on effectiveness or risk is missing. What do you do?',
    },
    options: [
      {
        de: 'Ich fahre die Angst noch hoch: die drastischsten Einbruch-Aufnahmen rein, denn Angst konvertiert nun mal am besten.',
        en: 'I turn the fear up further: put in the most graphic break-in footage, because fear simply converts best.',
      },
      {
        de: 'Ich behalte eine ehrliche emotionale Ansprache, erde sie aber: eine echte, nachvollziehbare Sorge, gepaart mit korrekten Risiko- und Wirksamkeitsdaten und einem klaren, druckfreien Handlungsaufruf — die übertriebenen Schock-Bilder fliegen raus.',
        en: 'I keep an honest emotional register but ground it: a real, relatable concern paired with accurate risk and effectiveness data and a clear, pressure-free call to action — the exaggerated shock imagery goes.',
      },
      {
        de: 'Ich streiche jede Emotion und veröffentliche nur ein nüchternes technisches Datenblatt.',
        en: 'I strip out all emotion and publish only a dry technical spec sheet.',
      },
      {
        de: 'Ich lasse die Angst-Bilder drin und setze zusätzlich einen Countdown „nur 48 Stunden" darunter, um die Conversion zu steigern.',
        en: 'I keep the fear imagery and add a countdown “only 48 hours” underneath to boost conversions.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Nur Option 2 (Index 1) trennt Technik und Ethik sauber: Emotion ist ein legitimer und wirksamer Hebel, solange sie authentisch, verhältnismäßig und mit belastbaren Fakten unterlegt ist. Eine echte, nachvollziehbare Sorge plus korrekte Daten plus druckfreier Aufruf überzeugt, ohne zu manipulieren. Option 1 überschreitet die Grenze: dramatisierte, faktenlose Angst ist manipulativ, beschädigt langfristig Vertrauen und kann irreführend sein. Option 4 ist noch schlechter, weil sie der Angst eine künstliche Verknappung („48 Stunden") aufsetzt und so zwei Manipulationshebel stapelt. Option 3 ist der typische Überkorrektur-Fehler: Sie behandelt jede Emotion als Manipulation, verschenkt damit legitime, wirksame Resonanz und verfehlt die eigentliche Grenze — die liegt nicht bei „Emotion ja/nein", sondern bei Übertreibung, Täuschung und Druck.',
      en: 'Only option 2 (index 1) cleanly separates technique from ethics: emotion is a legitimate and effective lever as long as it is authentic, proportionate, and backed by solid facts. A real, relatable concern plus accurate data plus a pressure-free call persuades without manipulating. Option 1 crosses the line: dramatized, fact-free fear is manipulative, damages trust in the long run, and can be misleading. Option 4 is worse still, because it stacks artificial scarcity (“48 hours”) on top of the fear, combining two manipulation levers. Option 3 is the classic over-correction: it treats all emotion as manipulation, thereby forfeiting legitimate, effective resonance and missing the actual boundary — which lies not at “emotion yes/no” but at exaggeration, deception, and pressure.',
    },
    points: 15,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'scarcity'],
  },
  {
    id: 'ea-p3-9',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Was ist unter allen konkurrierenden Anforderungen der optimale Schritt?',
      en: 'Under all the competing constraints, what is the optimal move?',
    },
    scenario: {
      de: 'Ein verkauftes Haushaltsgerät hat einen echten Defekt, der in seltenen Fällen einen Brand auslösen kann. Du musst als Kommunikationsleitung sofort informieren. Die Anforderungen ziehen gegeneinander: Betroffene müssen wirklich handeln (das braucht emotionale Deutlichkeit), zugleich darf keine Panik entstehen, die Aussage muss rechtlich korrekt sein, und das Vertrauen soll erhalten bleiben.',
      en: 'A household appliance already sold has a genuine defect that, in rare cases, can start a fire. As the communications lead you must inform people immediately. The constraints pull against each other: those affected must actually act (which needs emotional clarity), yet no panic should arise, the statement must be legally accurate, and trust should be preserved.',
    },
    options: [
      {
        de: 'Ich formuliere betont neutral-technisch und leise, um bloß keine Panik auszulösen — die eigentliche Warnung steht klein im dritten Absatz.',
        en: 'I keep it pointedly neutral-technical and quiet, so as not to cause panic — the actual warning sits small in the third paragraph.',
      },
      {
        de: 'Ich warte mit der Meldung, bis die Rechtsabteilung jedes einzelne Wort abgesegnet hat, und halte die Sache bis dahin intern.',
        en: 'I hold the announcement until the legal department has signed off on every single word, and keep the matter internal until then.',
      },
      {
        de: 'Ich kommuniziere mit kalibrierter Dringlichkeit: das reale Risiko klar und empathisch benennen, sofort umsetzbare Schutzschritte geben, die Sorge ernst nehmen — gerade so viel emotionale Deutlichkeit, dass Betroffene handeln, ohne zu dramatisieren.',
        en: 'I communicate with calibrated urgency: name the real risk clearly and empathetically, give immediately actionable protective steps, take the concern seriously — just enough emotional clarity for people to act, without dramatizing.',
      },
      {
        de: 'Ich zeichne das schlimmstmögliche Szenario in drastischen Bildern, damit garantiert jeder sofort reagiert.',
        en: 'I paint the worst-case scenario in graphic imagery, so that everyone is guaranteed to react at once.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Option 3 (Index 2) ist unter allen konkurrierenden Anforderungen der einzige optimale Schritt: Er nutzt Emotion genau dosiert — genug Dringlichkeit, damit Betroffene wirklich handeln (Wirksamkeit + Schutzpflicht), aber ohne Übertreibung (Ethik) und rechtlich korrekt, mit konkreten Schritten, die auch Vertrauen erhalten. Genau darin liegt die Kunst: emotionale Deutlichkeit als legitimes, sogar gebotenes Mittel, nicht als Waffe. Option 1 unterwarnt: Eine leise, versteckte Warnung erzeugt zu wenig Handlungsdruck, gefährdet Menschen und verletzt die Warnpflicht — vermeintlicher Panikschutz auf Kosten der Sicherheit. Option 4 überwarnt: dramatisierte Schockbilder erzeugen Panik, laufen Gefahr, das seltene Risiko zu überzeichnen, und beschädigen Vertrauen und Rechtsposition. Option 2 klingt rechtlich vorsichtig, ist aber bei einer AKTIVEN Brandgefahr falsch: Ein Freigabe-Marathon verzögert die Warnung, gefährdet Betroffene und vergrößert die Haftung. Rechtliche Korrektheit ist notwendig — Option 3 enthält sie bereits über die präzise Formulierung —, rechtfertigt aber kein gefährliches Verschweigen. Die Grenze: Emotion proportional zum realen Risiko einsetzen; weder herunterspielen noch dramatisieren.',
      en: 'Option 3 (index 2) is the only optimal move under all the competing constraints: it uses emotion in a precisely calibrated dose — enough urgency for people to genuinely act (effectiveness + duty to warn), but without exaggeration (ethics) and legally accurate, with concrete steps that also preserve trust. That is exactly the craft: emotional clarity as a legitimate, even required means, not as a weapon. Option 1 under-warns: a quiet, buried warning generates too little pressure to act, endangers people, and breaches the duty to warn — supposed panic-avoidance at the expense of safety. Option 4 over-warns: dramatized shock imagery causes panic, risks overstating the rare hazard, and damages both trust and legal position. Option 2 sounds legally cautious but is wrong during an ACTIVE fire hazard: a sign-off marathon delays the warning, endangers those affected, and increases liability. Legal accuracy is necessary — option 3 already includes it via precise wording — but it does not justify a dangerous silence. The boundary: use emotion proportionate to the real risk; neither downplay nor dramatize.',
    },
    points: 15,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal'],
  },
];
