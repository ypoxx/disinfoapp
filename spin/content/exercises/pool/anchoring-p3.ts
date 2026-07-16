import type { Exercise } from '../../types';

// anchoring — Phase 3 densification batch.
export const anchoringP3Exercises: Exercise[] = [
  {
    id: 'an-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist der HAUPTTREIBER dafür, dass der Mitteltarif preislich als vernünftige Wahl wahrgenommen wird?',
      en: 'Which technique is the MAIN driver that makes the mid-tier feel like a reasonably priced, sensible choice?',
    },
    scenario: {
      de: 'Ein SaaS-Anbieter überarbeitet seine Preisseite. Ganz oben steht prominent der Tarif „Enterprise – 2.400 €/Monat". Direkt darunter der empfohlene Tarif „Pro – 490 €/Monat", markiert mit einem Banner „Von den meisten Teams gewählt". Ganz unten der Hinweis: „Einführungspreis nur noch bis Freitag." In A/B-Tests entscheiden sich deutlich mehr Besucherinnen für „Pro" und beschreiben ihn ausdrücklich als „preislich fair".',
      en: 'A SaaS provider reworks its pricing page. At the very top sits the prominently placed “Enterprise – €2,400/month” plan. Directly beneath it, the recommended “Pro – €490/month” plan, marked with a banner reading “Chosen by most teams”. At the very bottom: “Launch price only until Friday.” In A/B tests far more visitors pick “Pro” and explicitly describe it as “fairly priced”.',
    },
    options: [
      {
        de: 'Ankereffekt — der hoch angesetzte Enterprise-Tarif als zuerst gezeigter Referenzwert',
        en: 'Anchoring — the high enterprise plan shown first as a reference value',
      },
      {
        de: 'Social Proof — das Banner „von den meisten Teams gewählt"',
        en: 'Social proof — the “chosen by most teams” banner',
      },
      {
        de: 'Verknappung — der Hinweis „nur noch bis Freitag"',
        en: 'Scarcity — the “only until Friday” note',
      },
      {
        de: 'Framing — die Bezeichnung „Pro" für den mittleren Tarif',
        en: 'Framing — labelling the mid plan “Pro”',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Alle vier Hebel sind tatsächlich auf der Seite aktiv, aber die preisliche „Vernunft"-Wahrnehmung stammt vom Ankereffekt: Die zuerst gezeigten 2.400 € setzen die Skala, an der die 490 € gemessen werden — relativ dazu wirken sie klein. Das ist der dominante Treiber. Social Proof („von den meisten Teams gewählt") erhöht Vertrauen und Übernahmebereitschaft, sagt aber nichts über den Preis aus. Verknappung („bis Freitag") erzeugt Zeitdruck und Timing, nicht das Gefühl eines fairen Preises. Framing („Pro") prägt Identität und Positionierung, liefert aber keinen numerischen Bezugspunkt. Die ethische Grenze: Ein echter, tatsächlich buchbarer Premium-Tarif als Referenz ist ein legitimer Hebel; manipulativ wird es, wenn der Enterprise-Tarif ein Phantom ist, das niemand realistisch kauft und das nur existiert, um den Anker künstlich hochzutreiben.',
      en: 'All four levers are genuinely at work on the page, but the perception of a “reasonable price” comes from anchoring: the €2,400 shown first sets the scale against which €490 is judged — relative to it, it feels small. That is the dominant driver. Social proof (“chosen by most teams”) raises trust and willingness to adopt, but says nothing about price. Scarcity (“until Friday”) creates time pressure and timing, not the sense of a fair price. Framing (“Pro”) shapes identity and positioning, but provides no numeric reference point. The ethical boundary: a genuine, actually bookable premium tier used as a reference is a legitimate lever; it becomes manipulative when the enterprise tier is a phantom nobody realistically buys, existing only to inflate the anchor.',
    },
    points: 20,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'social_proof', 'scarcity', 'framing'],
  },
  {
    id: 'an-p3-2',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Ein Online-Shop plant die Launch-Seite für ein neues Kopfhörer-Modell. Welches geplante Element überschreitet die rechtlich-ethische Grenze?',
      en: 'An online shop is planning the launch page for a new headphone model. Which planned element crosses the legal-ethical line?',
    },
    scenario: {
      de: 'Geplante Elemente der Produktseite:',
      en: 'Planned elements of the product page:',
    },
    options: [
      {
        de: 'Die echte UVP des Herstellers (149 €), die auch im stationären Fachhandel gilt, wird neben dem Startpreis von 99 € angezeigt.',
        en: 'The manufacturer’s genuine RRP (€149), which also applies in brick-and-mortar retail, is shown next to the launch price of €99.',
      },
      {
        de: 'Ein durchgestrichener „Vergleichspreis" von 249 €, zu dem das Produkt nie verkauft wurde und den kein Händler verlangt — erfunden, damit die 99 € nach einem großen Schnäppchen aussehen.',
        en: 'A struck-through “reference price” of €249 at which the product was never sold and no retailer charges — invented so the €99 looks like a huge bargain.',
      },
      {
        de: 'Der ehrliche Hinweis „bereits über 1.000 Vorbestellungen", der der tatsächlichen Zahl entspricht.',
        en: 'The honest note “over 1,000 pre-orders already”, matching the actual figure.',
      },
      {
        de: 'Eine klare Anzeige des Endpreises inklusive Versandkosten direkt am Produktbild.',
        en: 'A clear display of the final price including shipping costs right by the product image.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Element 2 (Index 1) überschreitet die Grenze: Der durchgestrichene „Vergleichspreis" von 249 € ist ein erfundener Anker. Er ist irreführend und in der EU bzw. Deutschland unzulässig — ein „Statt"-Preis, der nie tatsächlich verlangt wurde, verstößt gegen UWG und Preisangabenverordnung (EU-Omnibus-Richtlinie). Mechanismus: Je höher der (falsche) Referenzpreis, desto größer die scheinbare Ersparnis. Zum Kontrast: Die echte UVP (Index 0) ist ein legitimer Anker, weil sie ein realer, überprüfbarer Preis ist. Die ehrliche Vorbestellzahl (Index 2) ist wahrheitsgemäßer Social Proof, und die klare Endpreis-Anzeige inklusive Versand (Index 3) ist genau das, was das Recht verlangt. Prüffrage für die Grenze: Ist der Referenzpreis real und belegbar — oder erfunden, um den Rabatt aufzublähen?',
      en: 'Element 2 (index 1) crosses the line: the struck-through “reference price” of €249 is a fabricated anchor. It is misleading and unlawful in the EU/Germany — a “was” price that was never actually charged breaches the UWG and the Price Indication Ordinance (EU Omnibus Directive). Mechanism: the higher the (false) reference price, the bigger the apparent saving. By contrast: the genuine RRP (index 0) is a legitimate anchor because it is a real, verifiable price. The honest pre-order count (index 2) is truthful social proof, and the clear final-price display including shipping (index 3) is exactly what the law requires. Boundary test: is the reference price real and documented — or invented to inflate the discount?',
    },
    points: 15,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'dark_patterns'],
  },
  {
    id: 'an-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik nutzt der Recruiter hier?',
      en: 'Which technique is the recruiter using here?',
    },
    scenario: {
      de: 'Noch bevor die Bewerberin ihre eigene Gehaltsvorstellung nennen kann, sagt der Recruiter: „Für diese Stelle liegt das Budget bei etwa 55.000 €." Ihre spätere Forderung orientiert sich dann eng an dieser zuerst genannten Zahl.',
      en: 'Before the candidate can even state her own salary expectation, the recruiter says: “The budget for this role is around €55,000.” Her later ask then stays closely tied to that first-mentioned figure.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klassischer Ankereffekt: Die zuerst genannte Zahl (55.000 €) wird zum Referenzwert, an dem sich die gesamte Verhandlung ausrichtet — noch bevor die Bewerberin eine eigene Vorstellung entwickeln kann. Der Hebel: Folgeurteile bleiben am Ausgangswert „kleben" und werden nur unzureichend davon weg angepasst. Grenze: Eine ehrliche, reale Budgetspanne zu nennen ist legitim; manipulativ wird es, wenn bewusst eine besonders niedrige Zahl zuerst platziert wird, nur um den Anker zu setzen. Verknappung würde Dringlichkeit über begrenzte Verfügbarkeit erzeugen, Reziprozität eine Gegenleistung für einen Gefallen, Social Proof einen Verweis auf das Verhalten anderer — nichts davon geschieht; es wird allein ein erster Referenzwert gesetzt.',
      en: 'Classic anchoring: the first number named (€55,000) becomes the reference value the whole negotiation adjusts from — before the candidate can even form her own figure. The lever: subsequent judgments stay “stuck” to the starting value and are only insufficiently adjusted away from it. Boundary: naming an honest, real budget range is legitimate; it becomes manipulative when a deliberately low number is placed first purely to set the anchor. Scarcity would create urgency via limited availability, reciprocity a return for a favour, social proof a reference to what others do — none of that happens; only a first reference value is set.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring'],
  },
  {
    id: 'an-p3-4',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter diesem Verkaufsvorgehen?',
      en: 'Which technique is behind this sales approach?',
    },
    scenario: {
      de: 'Im Autohaus zeigt der Verkäufer dem Kunden zuerst das voll ausgestattete Topmodell für 60.000 €. Erst danach führt er ihn zur Basisversion für 32.000 €, die nun überraschend günstig wirkt.',
      en: 'At the dealership, the salesperson first shows the customer the fully loaded top model for €60,000. Only then does he lead him to the base version for €32,000, which now feels surprisingly cheap.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt in Reinform: Die zuerst gezeigten 60.000 € setzen einen hohen Referenzpunkt, an dem die 32.000 € gemessen werden — dadurch wirkt die Basisversion „günstig", obwohl ihr Preis für sich genommen unverändert bleibt. Der Hebel liegt in der Reihenfolge: Der erste Wert prägt die Bewertung des zweiten. Grenze: Ein reales Topmodell als Vergleich zu zeigen ist legitim; manipulativ wird es, wenn ein absichtlich überteuertes „Lockmodell" nur existiert, um den Anker hochzusetzen. Verknappung (Dringlichkeit durch Limitierung), Social Proof (Verhalten anderer) und Reziprozität (Gegenleistung für einen Gefallen) spielen hier keine Rolle — es wirkt allein die Reihenfolge zweier Preise.',
      en: 'Anchoring in pure form: the €60,000 shown first sets a high reference point against which the €32,000 is judged — making the base version feel “cheap”, even though its own price is unchanged. The lever is the sequence: the first value shapes the assessment of the second. Boundary: showing a real top model for comparison is legitimate; it becomes manipulative when a deliberately overpriced “decoy” exists only to raise the anchor. Scarcity (urgency through limitation), social proof (what others do) and reciprocity (returning a favour) play no role here — it is purely the order of two prices at work.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring'],
  },
  {
    id: 'an-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt hier vor allem die Schätzungen des Teams?',
      en: 'Which technique primarily shapes the team’s estimates here?',
    },
    scenario: {
      de: 'In einem Strategie-Workshop soll das Team den realistischen Marktanteil der eigenen Marke schätzen. Bevor die Runde beginnt, erwähnt die Moderatorin beiläufig: „Ein Wettbewerber hat neulich behauptet, er halte 40 %." Anschließend liegen fast alle Schätzungen zwischen 35 % und 42 % — auffällig nah an dieser Zahl.',
      en: 'In a strategy workshop, the team is to estimate their brand’s realistic market share. Before the round starts, the facilitator casually mentions: “A competitor recently claimed to hold 40%.” Afterwards almost all estimates land between 35% and 42% — strikingly close to that figure.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt: Die konkrete Zahl (40 %) wird zum Referenzwert, von dem jede Schätzung nur unzureichend weg angepasst wird — ein Kennzeichen der Anker-und-Anpassungs-Heuristik, die selbst dann wirkt, wenn der Anker irrelevant oder von zweifelhafter Quelle ist. Priming ist der verlockendste Fehlgriff: Priming aktiviert Assoziationen und Konzepte (etwa Wörter zu „Marktführerschaft"), die die Wahrnehmung einfärben — hier zieht aber eine konkrete Zahl eine numerische Schätzung, und das ist Anchoring, kein assoziatives Priming. Framing würde denselben Sachverhalt mit anderer Gewinn-/Verlust-Betonung darstellen; es wird nichts umgedeutet. Social Proof hieße, sich dem Verhalten der Gruppe anzupassen; hier wirkt eine einzelne Zahl als Bezugspunkt, kein Konformitätsdruck. Grenze: Einen realen Benchmark zur Orientierung zu teilen ist legitim; eine willkürliche oder unbelegte Zahl zu platzieren, um Schätzungen zu steuern, ist manipulativ.',
      en: 'Anchoring: the specific figure (40%) becomes the reference value that every estimate is only insufficiently adjusted away from — a hallmark of the anchoring-and-adjustment heuristic, which works even when the anchor is irrelevant or from a dubious source. Priming is the most tempting miss: priming activates associations and concepts (e.g. words about “market leadership”) that colour perception — but here a concrete number pulls a numeric estimate, and that is anchoring, not associative priming. Framing would present the same facts with a different gain/loss emphasis; nothing is reinterpreted. Social proof would mean conforming to what the group does; here a single number acts as a reference, not conformity pressure. Boundary: sharing a real benchmark for orientation is legitimate; placing an arbitrary or unverified figure to steer estimates is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'priming'],
  },
  {
    id: 'an-p3-6',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik hebt hier vor allem den durchschnittlichen Spendenbetrag?',
      en: 'Which technique primarily lifts the average donation here?',
    },
    scenario: {
      de: 'Eine Hilfsorganisation stellt ihr Spendenformular um. Die Beträge stehen jetzt von hoch nach niedrig: 250 €, 100 €, 50 €, 25 € — der höchste zuerst, keiner ist vorausgewählt. In den Wochen danach steigt der durchschnittliche Spendenbetrag deutlich, obwohl die meisten weiterhin einen mittleren Betrag wählen.',
      en: 'A charity redesigns its donation form. The amounts now run high to low: €250, €100, €50, €25 — the highest first, none pre-selected. In the following weeks the average gift rises noticeably, even though most people still pick a middle amount.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt: Der zuerst gezeigte höchste Betrag (250 €) setzt einen numerischen Referenzwert; die Spender passen sich von ihm nach unten an, sodass selbst mittlere Beträge höher ausfallen als sonst — ein gut belegter Ankereffekt beim Spenden. Wichtig: Kein Betrag ist vorausgewählt — wäre einer voreingestellt, wäre dieser Hebel Nudging (Choice-Architecture über Defaults); hier leistet allein der Referenzwert die Arbeit, und das ist Anchoring. Framing würde dieselbe Bitte umformulieren (etwa „nur 80 Cent am Tag") — das ist nicht, was sich geändert hat. Priming würde verwandte Gefühle oder Konzepte aktivieren, keinen numerischen Bezugspunkt. Social Proof würde nennen, was andere Spender typischerweise geben — das tut das Formular nicht. Grenze: Reale, tatsächlich wählbare Beträge zu ordnen ist legitimes Design; manipulativ wird es, wenn absurd hohe Beträge nur zur Verzerrung platziert oder ein hoher Default vorangehakt wird, um Unaufmerksamkeit auszunutzen.',
      en: 'Anchoring: the highest amount shown first (€250) sets a numeric reference value; donors adjust downward from it, so even middle amounts come out higher than they otherwise would — a well-documented anchoring effect in giving. Important: no amount is pre-selected — had one been a default, that lever would be nudging (choice architecture via defaults); here the reference value alone does the work, and that is anchoring. Framing would reword the same ask (e.g. “just 80 cents a day”) — that is not what changed. Priming would activate related feelings or concepts, not a numeric reference. Social proof would state what other donors typically give — the form does not. Boundary: ordering real, actually selectable amounts is legitimate design; it tips into manipulation when absurdly high amounts are placed only to distort perception, or a high default is pre-ticked to exploit inattention.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'nudging'],
  },
  {
    id: 'an-p3-7',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik trägt diese beruhigende Wirkung vor allem?',
      en: 'Which technique mainly produces this reassuring effect?',
    },
    scenario: {
      de: 'In einer Analystenkonferenz muss der Finanzvorstand eine gestiegene Kundenabwanderung von 8 % offenlegen. Bevor er die Zahl nennt, sagt er: „Einige Analysten hatten sich auf zweistellige Werte eingestellt, manche sogar auf 15 %." Als die 8 % fallen, reagieren die Zuhörer erleichtert — die Zahl wirkt wie ein Erfolg, obwohl die Abwanderung objektiv gestiegen ist.',
      en: 'On an analyst call, the CFO must disclose that customer churn has risen to 8%. Before naming the figure, he says: “Some analysts were braced for double digits, a few even for 15%.” When the 8% lands, listeners react with relief — the number feels like a win, even though churn has objectively gone up.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt in eingebetteter Form: Indem der Finanzvorstand zuerst die konkrete Zahl „15 %" platziert, installiert er einen hohen Referenzpunkt; die tatsächlichen 8 % werden dann daran gemessen und wirken gut — obwohl 8 % objektiv schlechter sind als zuvor. Der anspruchsvolle Punkt: Das sieht nach Framing aus, und ein Framing-Beigeschmack ist da („besser als befürchtet"). Tragend ist aber die konkrete Zahl 15 % als Vergleichsbasis — nimmt man diese Zahl weg, bricht der Effekt zusammen; genau dieses Setzen eines numerischen Bezugspunkts ist Anchoring. Priming würde Konzepte oder Stimmungen ohne numerischen Bezug aktivieren. Social Proof würde die Analystenerwartung als normativen Konformitätsdruck nutzen; hier wird ihre Erwartung als numerischer Anker zweckentfremdet. Grenze: Echte Konsensschätzungen zur Einordnung zu zitieren ist legitim; eine erschreckende Zahl zu erfinden oder herauszupicken, nur damit eine schlechte Zahl wie Erleichterung wirkt, ist manipulativ.',
      en: 'Anchoring, in an embedded form: by placing the specific figure “15%” first, the CFO installs a high reference point; the actual 8% is then judged against it and feels good — even though 8% is objectively worse than before. The demanding point: this looks like framing, and there is a framing flavour (“better than feared”). But the load-bearing element is the concrete number 15% as the comparison basis — remove that number and the effect collapses; precisely that setting of a numeric reference point is anchoring. Priming would activate concepts or moods without a numeric reference. Social proof would use the analysts’ expectation as normative conformity pressure; here their expectation is repurposed as a numeric anchor. Boundary: citing genuine consensus estimates for context is legitimate; inventing or cherry-picking a scary figure purely so a bad number feels like relief is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'framing'],
  },
  {
    id: 'an-p3-8',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Indem die Bereichsleiterin die Budgetrunde bewusst mit einer sehr hohen Zahl von 2 Mio. € eröffnet, ___ — jede später genannte Summe wird an diesem ersten Wert gemessen.',
      en: 'Complete the sentence: By deliberately opening the budget round with a very high figure of €2M, the department head ___ — every amount named later is measured against that first value.',
    },
    scenario: {
      de: 'In der jährlichen Budgetplanung ringen mehrere Abteilungen um Mittel. Wer zuerst eine Zahl in den Raum stellt, prägt häufig die gesamte Diskussion.',
      en: 'In the annual budget planning, several departments compete for funds. Whoever puts a number on the table first often shapes the entire discussion.',
    },
    options: [
      {
        de: 'setzt einen Referenzwert, an dem sich alle folgenden Einschätzungen unbewusst ausrichten',
        en: 'sets a reference value that all subsequent judgments unconsciously adjust toward',
      },
      {
        de: 'aktiviert vorab bestimmte Assoziationen, die die Wahrnehmung späterer, unabhängiger Reize einfärben',
        en: 'activates certain associations in advance that colour the perception of later, unrelated cues',
      },
      {
        de: 'stellt denselben Sachverhalt durch Betonung von Gewinn oder Verlust in ein günstigeres Licht',
        en: 'casts the same facts in a more favourable light by emphasising gain or loss',
      },
      {
        de: 'erzeugt Druck, indem sie die Mittel als streng limitiert und schnell vergriffen darstellt',
        en: 'creates pressure by portraying the funds as strictly limited and quickly gone',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Satz verlangt den Ankermechanismus: Eine erste, hohe Zahl wird zum Bezugspunkt, von dem spätere Summen nur unzureichend weg angepasst werden — die Eröffnung mit 2 Mio. € zieht die gesamte Verhandlung nach oben. Nur Option 1 beschreibt dieses Setzen eines Referenzwerts. Option 2 beschreibt Priming (assoziative Aktivierung), das keinen numerischen Bezug braucht. Option 3 beschreibt Framing (gleiche Fakten, andere Wertung). Option 4 beschreibt Verknappung (Dringlichkeit durch Limitierung). Keine davon passt zu „jede spätere Summe wird an diesem ersten Wert gemessen" — das ist per Definition Anchoring. Grenze: Mit einer begründbaren, gut belegten Zahl zu eröffnen ist normales Verhandeln; mit einer absurden Zahl allein zur Kaperung des Bezugspunkts zu starten kippt ins Manipulative.',
      en: 'The sentence requires the anchoring mechanism: a first, high number becomes the reference point later amounts are only insufficiently adjusted away from — opening at €2M drags the whole negotiation upward. Only option 1 describes this setting of a reference value. Option 2 describes priming (associative activation), which needs no numeric reference. Option 3 describes framing (same facts, different valuation). Option 4 describes scarcity (urgency through limitation). None of those fits “every later amount is measured against that first value” — that is anchoring by definition. Boundary: opening with a defensible, well-supported figure is normal negotiation; opening with an absurd number purely to hijack the reference point tips into manipulation.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'priming', 'framing'],
  },
  {
    id: 'an-p3-9',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du verantwortest die Preiskommunikation für ein neues B2B-Tool und möchtest, dass der Mitteltarif attraktiv wirkt. Wie gehst du vor?',
      en: 'You lead pricing communication for a new B2B tool and want the mid-tier to feel attractive. How do you proceed?',
    },
    scenario: {
      de: 'Drei Tarife stehen zur Wahl. Dein Team schlägt verschiedene Wege vor, den Ankereffekt zu nutzen, damit der Mitteltarif als vernünftige Wahl erscheint.',
      en: 'Three plans are on offer. Your team proposes different ways to use the anchoring effect so the mid plan appears the sensible choice.',
    },
    options: [
      {
        de: 'Ich stelle einen echten, tatsächlich buchbaren Premium-Tarif mit realem Mehrwert zuerst dar. Er dient als ehrlicher Referenzpunkt, an dem der Mitteltarif seine Stärke zeigt — wirksam und rechtlich sauber, weil jeder Preis real ist.',
        en: 'I present a genuine, actually bookable premium plan with real added value first. It serves as an honest reference point against which the mid plan shows its strength — effective and legally clean, because every price is real.',
      },
      {
        de: 'Ich blende beim Mitteltarif einen durchgestrichenen „statt 999 €" ein, obwohl das Tool nie zu diesem Preis angeboten wurde — so wirkt er wie ein Schnäppchen.',
        en: 'I add a struck-through “instead of €999” to the mid plan, even though the tool was never offered at that price — making it look like a bargain.',
      },
      {
        de: 'Ich nenne als Vergleich den Preis eines Wettbewerbers, von dem ich weiß, dass er längst veraltet und zu hoch ist, ohne das zu prüfen oder offenzulegen.',
        en: 'I cite a competitor’s price as a comparison that I know is outdated and too high, without checking or disclosing it.',
      },
      {
        de: 'Ich verstecke die Preisübersicht, sodass Kunden die Tarife nicht direkt vergleichen können und den Mitteltarif einfach nehmen.',
        en: 'I hide the price overview so customers can’t directly compare the plans and just take the mid one.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) nutzt den Ankereffekt legitim: Ein realer, tatsächlich buchbarer Premium-Tarif ist ein ehrlicher Referenzpunkt — der Hebel wirkt weiterhin (der Mitteltarif erscheint neben ihm vernünftig), ohne jemanden zu täuschen, und er hält rechtlicher Prüfung stand, weil jede Zahl echt ist. Option 2 ist ein erfundener Referenzpreis — ein illegaler Fake-Anker (irreführende Preiswerbung nach UWG/Preisangabenverordnung). Option 3 nutzt einen wissentlich falschen Vergleich — irreführend und reputationsschädlich. Option 4 gibt das Anchoring zugunsten eines Dark Patterns auf (Informationen verstecken), was Kunden frustriert und Vertrauen zerstört. Die Grenze: Ankere mit realen, belegbaren Referenzpunkten, niemals mit erfundenen oder verschleierten.',
      en: 'Only option 1 (index 0) uses anchoring legitimately: a real, actually bookable premium tier is an honest reference point — the lever still works (the mid plan looks reasonable next to it) without deceiving anyone, and it withstands legal scrutiny because every figure is genuine. Option 2 is a fabricated reference price — an illegal fake anchor (misleading price advertising under the UWG/Price Indication Ordinance). Option 3 uses a knowingly false comparison — misleading and reputationally damaging. Option 4 abandons anchoring for a dark pattern (hiding information), which frustrates customers and destroys trust. The boundary: anchor with real, verifiable reference points, never invented or concealed ones.',
    },
    points: 15,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'dark_patterns'],
  },
  {
    id: 'an-p3-10',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Wie eröffnest du die Verhandlung — unter Abwägung von Wirksamkeit, Beziehung und Glaubwürdigkeit?',
      en: 'How do you open the negotiation — weighing effectiveness, relationship and credibility?',
    },
    scenario: {
      de: 'Du verhandelst als Einkaufsleiterin einen mehrjährigen Rahmenvertrag mit einem strategisch wichtigen Lieferanten, mit dem du auch künftig eng zusammenarbeiten willst. Dein CEO drängt: „Mach ein extrem niedriges Erstangebot, egal wie unrealistisch — Hauptsache, wir setzen den Anker tief." Du weißt, dass der zuerst genannte Preis die Verhandlung stark prägt.',
      en: 'As head of procurement you are negotiating a multi-year framework contract with a strategically important supplier you also want to keep working with closely. Your CEO pushes: “Open with an extremely low first offer, however unrealistic — just set the anchor low.” You know the first price named strongly shapes the negotiation.',
    },
    options: [
      {
        de: 'Ich eröffne zuerst — mit einer ambitionierten, aber begründbaren Zahl, die ich mit echten Benchmarks und Mengengerüsten belegen kann. So sichere ich den Anker-Vorteil, bleibe glaubwürdig und verhandlungsfähig und beschädige die langfristige Beziehung nicht.',
        en: 'I open first — with an ambitious but justifiable figure I can back with real benchmarks and volume data. That secures the anchoring advantage while staying credible and negotiable and not damaging the long-term relationship.',
      },
      {
        de: 'Ich folge dem CEO und starte mit einer extrem niedrigen, nicht begründbaren Zahl — ein möglichst tiefer Anker bringt den größten Preisvorteil.',
        en: 'I follow the CEO and open with an extremely low, indefensible figure — the lowest possible anchor yields the biggest price advantage.',
      },
      {
        de: 'Ich lasse bewusst den Lieferanten die erste Zahl nennen, um besonders kompromissbereit zu wirken.',
        en: 'I deliberately let the supplier name the first number, to appear especially cooperative.',
      },
      {
        de: 'Ich vermeide zunächst jede Zahl und vertage die Preisfrage mehrfach, bis der Lieferant unter Zeitdruck gerät.',
        en: 'I avoid any number for now and repeatedly postpone the price question until the supplier is under time pressure.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Unter den konkurrierenden Anforderungen (Wirksamkeit + Beziehung + Glaubwürdigkeit) ist Option 1 (Index 0) der beste Zug: Anchoring wirkt tatsächlich, also ist es ein Vorteil, zuerst zu eröffnen — aber der Anker muss ambitioniert UND begründbar sein. Eine mit Benchmarks belegte Eröffnung sichert den Bezugspunkt-Vorteil und bewahrt zugleich Vertrauen und Verhandlungsspielraum. Option 2 (der Reflex des CEO) übertreibt: Ein extremer, nicht begründbarer Anker kann Ärger auslösen, Unseriösität signalisieren, einen Gegen-Anker oder den Abbruch provozieren und eine langfristig benötigte Beziehung vergiften — die Forschung zeigt, dass Glaubwürdigkeit begrenzt, wie weit ein Anker gedehnt werden kann. Option 3 verschenkt den Anker-Vorteil vollständig, indem sie die erste Zahl abgibt. Option 4 ersetzt einen fairen Anker durch ein manipulatives Hinhalte- und Zeitdruck-Manöver, das ebenfalls Vertrauen zerstört. Grenze: Eröffne zuerst mit einem realen, begründbaren Anker; erfinde keinen extremen und erzeuge keinen künstlichen Druck.',
      en: 'Under the competing requirements (effectiveness + relationship + credibility), option 1 (index 0) is the best move: anchoring genuinely works, so opening first is an advantage — but the anchor must be ambitious AND defensible. An opening backed by benchmarks secures the reference-point advantage while preserving trust and negotiating room. Option 2 (the CEO’s instinct) overdoes it: an extreme, indefensible anchor can trigger anger, signal bad faith, provoke a counter-anchor or a walk-away, and poison a relationship you need long term — research shows credibility caps how far an anchor can be stretched. Option 3 forfeits the anchoring advantage entirely by ceding the first number. Option 4 replaces a fair anchor with a manipulative stalling and time-pressure manoeuvre that also destroys trust. Boundary: open first with a real, defensible anchor; do not invent an extreme one or manufacture artificial pressure.',
    },
    points: 15,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'scarcity'],
  },
];
