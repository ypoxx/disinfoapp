import type { Exercise } from '../../types';

// framing — Phase 3 densification batch.
export const framingP3Exercises: Exercise[] = [
  {
    id: 'fr-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken überlagern sich in diesem Krisentext. Welche prägt am stärksten, wie schwer die Empfänger den Vorfall wahrnehmen?',
      en: 'Several techniques overlap in this crisis message. Which one most strongly shapes how severe recipients perceive the incident to be?',
    },
    scenario: {
      de: 'Nach einem Datenleck legt das Kommunikationsteam einen Entwurf für die Kundenmail vor. Der Text beginnt mit einer Erinnerung an die „makellose Sicherheitsbilanz der letzten 20 Jahre". Der Vorfall selbst wird durchgehend als „Sicherheitsereignis" bezeichnet, nie als „Datenleck", und so beschrieben: „Über 98% aller Konten blieben vollständig unberührt — betroffen war weniger als eines von fünfzig." Ein Nebensatz ergänzt, das sei „deutlich weniger als beim durchschnittlichen Branchenvorfall".',
      en: 'After a data breach, the communications team submits a draft of the customer email. The text opens by recalling the company’s “flawless 20-year security record”. The incident itself is consistently called a “security event”, never a “breach”, and described as: “Over 98% of all accounts remained completely untouched — fewer than one in fifty was affected.” A subordinate clause adds that this is “far below the average industry incident”.',
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing (Rahmung)', en: 'Framing' },
      { de: 'Anchoring (Ankereffekt)', en: 'Anchoring' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Dominanter Treiber ist Framing (Rahmung). Der Kern des Textes ist, denselben Vorfall durch Wortwahl und Perspektive milder erscheinen zu lassen: Die Umetikettierung „Sicherheitsereignis" statt „Datenleck" ist eine euphemistische Rahmung, und die Gewinn-Rahmung „98% unberührt / eines von fünfzig" präsentiert exakt dieselbe Betroffenenzahl von ihrer harmlosesten Seite. Diese Rahmung durchzieht jeden Satz und steuert unmittelbar die wahrgenommene Schwere. Priming (die 20-Jahre-Bilanz) ist zwar vorhanden — es stimmt vorab positiv —, wirkt aber nur als vorbereitender Kontext, nicht als Beschreibung des Vorfalls selbst; deshalb sekundär. Anchoring (der Branchendurchschnitt) taucht als einzelner Nebensatz auf und setzt einen Vergleichswert, trägt aber die Wahrnehmung nicht. Ein emotionaler Appell fehlt gerade: Der Ton ist bewusst beruhigend-sachlich, nicht angst- oder empörungsgetrieben. Die Grenze: Zahlen korrekt und positiv zu präsentieren ist legitim; manipulativ wird es, wenn die Umbenennung („Ereignis" statt „Leck") die eigentliche Tatsache verschleiert, statt sie nur vorteilhaft einzuordnen.',
      en: 'The dominant driver is framing. The core of the text is making the same incident feel milder through word choice and perspective: relabelling it a “security event” instead of a “breach” is euphemistic framing, and the gain frame “98% untouched / one in fifty” presents the exact same number of affected accounts from its most harmless side. This framing runs through every sentence and directly steers perceived severity. Priming (the 20-year record) is present — it pre-tunes the reader positively — but works only as preparatory context, not as a description of the incident itself, so it is secondary. Anchoring (the industry average) appears in a single subordinate clause, setting a comparison value, but does not carry the perception. An emotional appeal is precisely absent: the tone is deliberately reassuring and factual, not driven by fear or outrage. The boundary: presenting figures accurately and positively is legitimate; it turns manipulative when the relabelling (“event” not “breach”) conceals the underlying fact rather than merely casting it favourably.',
    },
    points: 20,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing', 'priming', 'anchoring'],
  },
  {
    id: 'fr-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik steckt hinter dieser Produktaussage?',
      en: 'Which persuasion technique is behind this product claim?',
    },
    scenario: {
      de: 'Auf der Verpackung eines Fertiggerichts steht groß „80% fettfrei". Ein Konkurrenzprodukt mit identischem Fettgehalt gibt schlicht „20% Fett" an.',
      en: 'A ready meal’s packaging prominently states “80% fat-free”. A competing product with an identical fat content simply says “20% fat”.',
    },
    options: [
      { de: 'Anchoring (Ankereffekt)', en: 'Anchoring' },
      { de: 'Framing (Rahmung)', en: 'Framing' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Das ist Framing (Rahmung): Beide Produkte enthalten exakt gleich viel Fett, doch „80% fettfrei" rückt dieselbe Tatsache in ein positives Licht (Gewinn-Rahmung), während „20% Fett" dieselbe Information negativ präsentiert. Verändert wird nicht der Inhalt, sondern nur die Perspektive der Darstellung — genau das ist der Framing-Hebel. Legitim ist eine positive, aber wahrheitsgemäße Formulierung; manipulativ würde es erst, wenn die Angabe falsch oder irreführend wäre. Anchoring bräuchte einen Referenzwert, an dem sich eine Schätzung ausrichtet — hier fehlt er. Sozialer Beweis würde auf das Verhalten anderer verweisen („Millionen Kunden"), Verknappung auf begrenzte Verfügbarkeit — beides kommt nicht vor.',
      en: 'This is framing: both products contain exactly the same amount of fat, yet “80% fat-free” casts that same fact in a positive light (gain frame), while “20% fat” presents the same information negatively. What changes is not the content but only the perspective of presentation — that is precisely the framing lever. A positive but truthful wording is legitimate; it would only become manipulative if the figure were false or misleading. Anchoring would need a reference value against which an estimate is calibrated — there is none here. Social proof would point to others’ behaviour (“millions of customers”), scarcity to limited availability — neither appears.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing'],
  },
  {
    id: 'fr-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik nutzt das Unternehmen mit dieser Wortwahl?',
      en: 'Which technique is the company using with this word choice?',
    },
    scenario: {
      de: 'Ein Anbieter erhöht die monatliche Gebühr um 12%. In der Kundenmitteilung ist jedoch nie von einer „Preiserhöhung" die Rede, sondern durchgängig von einer „Preisanpassung".',
      en: 'A provider raises its monthly fee by 12%. In the customer notice, however, it never speaks of a “price increase” but consistently of a “price adjustment”.',
    },
    options: [
      { de: 'Framing (Rahmung)', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Anchoring (Ankereffekt)', en: 'Anchoring' },
      { de: 'Reziprozität (Gegenseitigkeit)', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Framing (Rahmung) durch Wortwahl: Derselbe Vorgang — die Gebühr steigt — wird mit dem neutral-technischen Begriff „Preisanpassung" beschrieben, der Auf- und Abwärtsbewegungen offenlässt und die tatsächliche Erhöhung sprachlich abfedert. Der Hebel liegt allein in der Benennung, nicht in neuen Fakten. Die Grenze: Eine schonende, aber zutreffende Formulierung ist zulässig; manipulativ wird es, wenn das Wort die Tatsache verschleiert, dass Kunden mehr zahlen. Priming bräuchte einen vorgelagerten, oft themenfremden Reiz — hier fehlt er. Anchoring bräuchte einen Referenzwert, Reziprozität eine Gegenleistung, die ein Verpflichtungsgefühl erzeugt — nichts davon liegt vor.',
      en: 'Framing through word choice: the same event — the fee is going up — is described with the neutral, technical term “price adjustment”, which leaves the direction open and linguistically cushions the actual increase. The lever lies solely in the labelling, not in any new facts. The boundary: a gentle but accurate wording is permissible; it becomes manipulative when the word conceals the fact that customers pay more. Priming would need a prior, often unrelated stimulus — there is none here. Anchoring would need a reference value, reciprocity a favour that creates a sense of obligation — none of that is present.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing'],
  },
  {
    id: 'fr-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese interne Ankündigung vor allem?',
      en: 'Which technique primarily shapes this internal announcement?',
    },
    scenario: {
      de: 'Eine Abteilung wird umstrukturiert, mehrere Teams werden aufgelöst und neu zugeschnitten. Die Change-Mail der Bereichsleitung vermeidet Wörter wie „Auflösung" oder „Umbau" und nennt den Vorgang durchgehend einen „Frühjahrsputz — wir räumen auf, was uns nicht mehr dient, und schaffen Platz für Frisches".',
      en: 'A department is being restructured; several teams are dissolved and recut. The leadership’s change email avoids words like “dissolution” or “overhaul” and consistently calls the process “a spring cleaning — we’re clearing out what no longer serves us and making room for something fresh”.',
    },
    options: [
      { de: 'Narrative Überzeugung (Storytelling)', en: 'Narrative persuasion' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing (Rahmung)', en: 'Framing' },
      { de: 'Anchoring (Ankereffekt)', en: 'Anchoring' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Der dominante Hebel ist Framing (Rahmung) mittels Metapher: Dieselbe Umstrukturierung wird durch das Bild „Frühjahrsputz" in einen harmlos-erneuernden Deutungsrahmen gestellt — statt Verlust und Unsicherheit klingen Ordnung und Aufbruch mit. Verändert wird nicht der Sachverhalt, sondern die Perspektive, aus der er gelesen wird. Narrative Überzeugung ist der verlockendste Fehlgriff, greift aber nicht: Eine Metapher ist kein Narrativ — es fehlen Figuren, Handlung und ein Spannungsbogen, über die eine Geschichte überzeugen würde. Priming bräuchte einen vorgelagerten Reiz, der eine spätere, andere Bewertung anstößt; hier wirkt die Deutung unmittelbar im selben Satz. Anchoring bräuchte einen Zahlen- oder Referenzwert. Die Grenze: Ein positives Bild zu wählen ist legitimes Change-Handwerk — manipulativ wird es, wenn die Metapher reale Härten (Stellenverlust) beschönigt und so eine offene Kommunikation ersetzt.',
      en: 'The dominant lever is framing via metaphor: the same restructuring is placed in a harmless, renewing interpretive frame through the image of “spring cleaning” — instead of loss and uncertainty, order and fresh starts resonate. What changes is not the facts but the perspective from which they are read. Narrative persuasion is the most tempting miss but does not apply: a metaphor is not a narrative — it lacks the characters, plot and arc through which a story would persuade. Priming would need a prior stimulus that triggers a later, separate judgement; here the interpretation works immediately within the same sentence. Anchoring would need a numeric or reference value. The boundary: choosing a positive image is legitimate change-management craft — it becomes manipulative when the metaphor sugar-coats real hardship (job losses) and thereby replaces open communication.',
    },
    points: 10,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing', 'narrative_persuasion'],
  },
  {
    id: 'fr-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt das Team mit dieser Formulierungswahl?',
      en: 'Which technique is the team using with this choice of wording?',
    },
    scenario: {
      de: 'Für eine Vorstandsvorlage soll ein IT-Risiko beschrieben werden. Beide Formulierungen beruhen nachweislich auf denselben Daten. Variante A: „Bei diesem Vorgehen bleiben 8 von 10 Servern durchgehend im Betrieb." Variante B: „Bei diesem Vorgehen fallen 2 von 10 Servern aus." Das Team wählt bewusst Variante A, weil der Vorstand dem Vorhaben so erfahrungsgemäß eher zustimmt.',
      en: 'For a board proposal, an IT risk is to be described. Both wordings are demonstrably based on the same data. Version A: “With this approach, 8 out of 10 servers stay operational throughout.” Version B: “With this approach, 2 out of 10 servers fail.” The team deliberately picks version A because, in their experience, the board is then more likely to approve.',
    },
    options: [
      { de: 'Anchoring (Ankereffekt)', en: 'Anchoring' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing (Rahmung)', en: 'Framing' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Das ist Framing (Rahmung) in seiner klassischen Gewinn/Verlust-Form: Variante A und B beschreiben exakt dasselbe Ergebnis, doch die Gewinn-Formulierung („8 von 10 bleiben in Betrieb") führt eher zu Zustimmung als die verlustbetonte („2 von 10 fallen aus"). Der Hebel ist allein die Valenz der Darstellung bei identischen Fakten — der Effekt, den Tversky und Kahneman experimentell zeigten. Anchoring scheidet aus: Es würde einen Referenzwert setzen, an dem sich eine Schätzung ausrichtet (etwa „Wettbewerber verlieren 5 von 10"); hier wird dieselbe Quote nur positiv statt negativ gewendet. Priming bräuchte einen vorgelagerten, oft themenfremden Reiz. Sozialer Beweis würde auf das Verhalten anderer verweisen — nichts davon kommt vor. Die Grenze: Die vorteilhaftere von zwei wahren Formulierungen zu wählen ist zulässig; problematisch wird es, wenn die Gewinn-Rahmung das reale Ausfallrisiko so kaschiert, dass der Vorstand es nicht mehr angemessen abwägen kann.',
      en: 'This is framing in its classic gain/loss form: versions A and B describe the exact same outcome, yet the gain wording (“8 out of 10 stay operational”) leads to approval more readily than the loss-emphasising one (“2 out of 10 fail”). The lever is solely the valence of the presentation given identical facts — the effect Tversky and Kahneman demonstrated experimentally. Anchoring is out: it would set a reference value against which an estimate is calibrated (e.g. “competitors lose 5 out of 10”); here the same ratio is merely turned positive rather than negative. Priming would need a prior, often unrelated stimulus. Social proof would point to others’ behaviour — none of that occurs. The boundary: choosing the more favourable of two true wordings is permissible; it becomes problematic when the gain frame masks the real failure risk so thoroughly that the board can no longer weigh it properly.',
    },
    points: 10,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing', 'anchoring'],
  },
  {
    id: 'fr-p3-6',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie kündigst du als Kommunikationsverantwortliche das Aus der kostenlosen Basis-Version an?',
      en: 'As the communications lead, how do you announce the end of the free basic tier?',
    },
    scenario: {
      de: 'Ein beliebter Gratis-Tarif deines SaaS-Produkts wird eingestellt; bisherige Gratis-Nutzer müssen künftig einen kostenpflichtigen Plan wählen. Die Nachricht wird viele verärgern. Ein Kollege drängt darauf, die Ankündigung „geschickt zu framen". Wie gehst du vor?',
      en: 'A popular free tier of your SaaS product is being discontinued; existing free users will now have to choose a paid plan. The news will annoy many. A colleague pushes to “frame the announcement cleverly”. How do you proceed?',
    },
    options: [
      {
        de: 'Ich benenne die Änderung offen und früh: was sich ändert, ab wann, zu welchem Preis — und ordne sie mit dem echten Mehrwert des kostenpflichtigen Plans positiv, aber zutreffend ein. Rahmung darf die Wahrnehmung lenken, solange die Kernfakten klar und überprüfbar bleiben.',
        en: 'I state the change openly and early: what changes, from when, at what price — and cast it positively but accurately by pointing to the genuine added value of the paid plan. Framing may steer perception, as long as the core facts stay clear and verifiable.',
      },
      {
        de: 'Ich verkaufe es als „Plan-Upgrade für alle" und vermeide die Wörter „kostenpflichtig" und „Preis", damit sich die Nutzer als Gewinner statt als Verlierer fühlen.',
        en: 'I sell it as a “plan upgrade for everyone” and avoid the words “paid” and “price”, so users feel like winners rather than losers.',
      },
      {
        de: 'Ich packe die Änderung unauffällig in Absatz sechs unter neue Feature-Meldungen, damit sie möglichst wenig Aufmerksamkeit zieht.',
        en: 'I tuck the change inconspicuously into paragraph six beneath new feature announcements, so it draws as little attention as possible.',
      },
      {
        de: 'Ich stelle es als Zwang dar — „gestiegene Kosten lassen uns keine andere Wahl" —, um Kritik von vornherein den Wind aus den Segeln zu nehmen.',
        en: 'I present it as forced — “rising costs leave us no other choice” — to take the wind out of criticism from the outset.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) nutzt Rahmung legitim: Sie lenkt die Wahrnehmung positiv, ohne die Kernfakten (Was, Wann, Preis) zu verschweigen oder zu verdrehen — die Darstellung formt die Deutung, die Wahrheit bleibt prüfbar. Das ist auch strategisch klug, denn der Zweitrundeneffekt entscheidet: Nutzer verzeihen eine klar kommunizierte, unbeliebte Änderung eher als das Gefühl, getäuscht worden zu sein. Option 2 überschreitet die Grenze zur Manipulation — das Weglassen von „kostenpflichtig" und „Preis" verschleiert die eigentliche Tatsache (euphemistische Rahmung, die zur Irreführung wird). Option 3 (Vergraben in Absatz sechs) ist ein Dark Pattern: Es versteckt die Information gezielt und fliegt spätestens beim Entdecken auf, mit doppeltem Vertrauensschaden. Option 4 rahmt die Erhöhung als alternativlosen Zwang (falsche Notwendigkeit) — oft unehrlich, weil Alternativen bestehen, und defensiv. Die Grenze: Rahmung darf betonen und positiv einordnen, aber nie die Kernfakten verbergen oder verfälschen.',
      en: 'Only option 1 (index 0) uses framing legitimately: it steers perception positively without hiding or distorting the core facts (what, when, price) — presentation shapes interpretation, but the truth stays verifiable. It is also strategically wise, because the second-order effect decides: users forgive a clearly communicated, unpopular change more readily than the feeling of having been deceived. Option 2 crosses into manipulation — dropping “paid” and “price” conceals the underlying fact (euphemistic framing that becomes deception). Option 3 (burying it in paragraph six) is a dark pattern: it deliberately hides the information and unravels the moment it is noticed, doing double damage to trust. Option 4 frames the increase as an unavoidable necessity (false necessity) — often dishonest, because alternatives exist, and defensive. The boundary: framing may emphasise and cast favourably, but must never conceal or falsify the core facts.',
    },
    points: 15,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing', 'dark_patterns', 'false_dichotomy'],
  },
];
