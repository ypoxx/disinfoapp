import type { Exercise } from '../../types';

// narrative_persuasion — Phase 3 densification batch.
export const narrativePersuasionP3Exercises: Exercise[] = [
  {
    id: 'np-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist der dominante Wirkhebel dieses Auftritts?',
      en: 'Which technique is the dominant driver of this presentation?',
    },
    scenario: {
      de: 'Eine Stiftung stellt ihren Jahres-Wirkungsbericht vor. Statt mit den geprüften Kennzahlen (Zahl der geförderten Schulen, durchschnittlicher Lernzuwachs) zu eröffnen, baut das Kommunikationsteam den gesamten Bericht und den Launch-Film um ein einziges Mädchen, Amara: Man folgt ihr vom weiten Schulweg über die Begegnung mit einer geförderten Lehrerin bis zu dem Moment, in dem sie ihr erstes Buch liest — das Publikum erlebt jede Station mit, als wäre es selbst dabei. Zwischenschnitte zeigen minutenlang Amaras Tränen in Großaufnahme, eine Einblendung nennt stolz „getragen von 40.000 Spenderinnen und Spendern", und die aggregierten Ergebnisse stehen nur klein in einer Fußnote.',
      en: 'A foundation presents its annual impact report. Instead of opening with the audited metrics (number of schools funded, average learning gains), the communications team builds the entire report and launch film around a single girl, Amara: the audience follows her from the long walk to school, to meeting a teacher funded by the programme, to the moment she reads her first book — experiencing every step as if present themselves. Cutaways linger for minutes on close-ups of Amara’s tears, an on-screen caption proudly reads “carried by 40,000 donors”, and the aggregate results appear only in small print in a footnote.',
    },
    options: [
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Alle vier Techniken sind sichtbar — genau das macht die Aufgabe schwer. Dominant ist aber die Narrative Persuasion: Die gesamte Architektur des Auftritts ist eine Figuren-Reise, in die das Publikum „transportiert" wird (Green & Brock). Dieser Sog senkt das Gegenargumentieren, und eine einzige gelebte Geschichte ersetzt die repräsentative Datenbasis, die in die Fußnote wandert — das Ersetzen von Evidenz durch einen vividen Einzelfall ist das eindeutige Kennzeichen des Narrativs, nicht eines Gefühls-Reizes. Genau hier liegt die Grenze: Eine echte Geschichte, die belegte Durchschnittswerte veranschaulicht, ist legitim und hilft beim Verstehen; manipulativ wird es, wenn der Einzelfall die Evidenz verdrängt statt sie zu illustrieren. Der emotionale Appell (Tränen in Großaufnahme) ist real, aber ein Werkzeug INNERHALB der Erzählung, das die Transportation vertieft — für sich genommen wäre es nur ein Gefühls-Reiz ohne Handlungsbogen. Der soziale Beweis („40.000 Spender") ist eine einzelne Einblendung, ein Zusatz, kein Gerüst. Framing ist der verlockendste Fehlgriff: Zwar wird die Wirkung in den Vordergrund gerückt, doch Framing meint eine andere Betonung DERSELBEN Fakten — hier werden die Fakten nicht neu betont, sondern durch eine erlebte Einzelgeschichte ausgetauscht. Der organisierende Hebel ist deshalb das Narrativ.',
      en: 'All four techniques are visible — which is what makes this hard. But narrative persuasion is dominant: the entire architecture of the presentation is a character’s journey into which the audience is “transported” (Green & Brock). That immersion lowers counter-arguing, and one lived story replaces the representative data base, which is relegated to a footnote — substituting evidence with a single vivid case is the unmistakable signature of narrative, not of mere affect. This is exactly where the boundary sits: a genuine story that illustrates documented averages is legitimate and aids understanding; it becomes manipulative when the single case displaces the evidence instead of illustrating it. The emotional appeal (tears in close-up) is real, but a tool WITHIN the narrative that deepens transportation — on its own it would be mere affect without a plot arc. The social proof (“40,000 donors”) is a single caption, an add-on, not the scaffolding. Framing is the most tempting miss: impact is indeed pushed to the fore, yet framing means a different emphasis on the SAME facts — here the facts are not re-emphasised but swapped out for one experienced story. The organising lever is therefore the narrative.',
    },
    points: 20,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'social_proof'],
  },
  {
    id: 'np-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik nutzt der Redner hier vor allem?',
      en: 'Which persuasion technique is the speaker mainly using here?',
    },
    scenario: {
      de: 'Auf einer Produkt-Keynote für eine neue Dienstplan-App zeigt der Redner keine einzige Nutzungsstatistik. Stattdessen erzählt er die Geschichte einer einzelnen Krankenpflegerin, Lena: Er nimmt das Publikum mit durch ihren chaotischen Zwölf-Stunden-Dienst, den Moment, in dem die App ihre Schichten ordnet, bis zum ruhigen Feierabend — Szene für Szene, als säße man neben ihr.',
      en: 'At a product keynote for a new shift-scheduling app, the speaker shows not a single usage statistic. Instead he tells the story of one nurse, Lena: he walks the audience through her chaotic twelve-hour shift, the moment the app untangles her roster, and her calm evening off — scene by scene, as if sitting right beside her.',
    },
    options: [
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Knappheit (Scarcity)', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Redner verzichtet bewusst auf Zahlen und führt das Publikum stattdessen durch die erlebte Reise einer einzigen Figur — das ist das Kernmuster der Narrative Persuasion: Eine Geschichte mit Hauptfigur und Handlungsbogen „transportiert" die Zuhörer, erzeugt Identifikation und senkt das kritische Nachfragen. Legitim ist eine solche Geschichte, wenn sie einen real belegten Nutzen veranschaulicht; problematisch, wenn der Einzelfall repräsentative Daten ganz ersetzt. Sozialer Beweis läge vor, wenn er sich auf VIELE Nutzer beriefe („tausende Pflegekräfte vertrauen…") — hier geht es aber gerade um eine Einzelne, deren Weg wir miterleben, nicht um eine Empfehlung durch die Masse. Ein Ankereffekt bräuchte einen Zahlen- oder Referenzwert, Knappheit einen künstlichen Mangel oder Zeitdruck — beides fehlt vollständig.',
      en: 'The speaker deliberately drops the numbers and instead leads the audience through one character’s lived journey — the core pattern of narrative persuasion: a story with a protagonist and a plot arc “transports” listeners, creates identification and lowers critical questioning. Such a story is legitimate when it illustrates a genuinely documented benefit; it becomes problematic when the single case wholly replaces representative data. Social proof would apply if he cited MANY users (“thousands of nurses trust…”) — but this is precisely about one individual whose path we relive, not an endorsement by the crowd. Anchoring would need a numeric or reference value, scarcity an artificial shortage or time pressure — both are entirely absent.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion'],
  },
  {
    id: 'np-p3-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Recruiting-Kampagne vor allem?',
      en: 'Which technique primarily shapes this recruiting campaign?',
    },
    scenario: {
      de: 'Ein Technologieunternehmen wirbt um Nachwuchs-Ingenieurinnen. Statt Gehaltsbänder, Benefits oder Einstellungszahlen aufzulisten, veröffentlicht es eine mehrteilige Mini-Dokumentation über das erste Jahr einer neuen Entwicklerin, Priya: ihre anfänglichen Selbstzweifel, ihre Mentorin, der Rückschlag bei einem gescheiterten Projekt und schließlich ihr Durchbruch. Kandidatinnen sollen sich in Priya wiedererkennen und ihren Weg gedanklich mitgehen.',
      en: 'A tech company recruits junior engineers. Instead of listing salary bands, benefits or hiring numbers, it releases a multi-part mini-documentary about the first year of a new developer, Priya: her early self-doubt, her mentor, the setback of a failed project, and finally her breakthrough. Candidates are meant to recognise themselves in Priya and mentally walk her path.',
    },
    options: [
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Liking (Sympathie)', en: 'Liking' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Den Kern bildet die Narrative Persuasion: Eine durchkomponierte Figuren-Reise mit Selbstzweifel, Rückschlag und Durchbruch lädt das Publikum zur Identifikation ein und „transportiert" es in Priyas Perspektive — der klassische Handlungsbogen, nicht ein bloßer Gefühls-Reiz, trägt die Botschaft. Die Grenze: Eine wahre, repräsentative Erfahrung darzustellen ist legitim und informativ; manipulativ wird es, wenn ein untypischer Einzelweg als Normalfall verkauft oder der Bogen frei erfunden wird. Der emotionale Appell ist die naheliegendste Verwechslung — doch der würde gezielt ein Gefühl (Angst, Stolz) auslösen, ohne notwendigerweise eine Geschichte; hier wirkt gerade die Erzählstruktur. Liking würde die Sympathie oder Ähnlichkeit des Absenders betonen (eine nette Recruiterin, gemeinsame Hobbys), nicht einen Handlungsbogen. Sozialer Beweis bräuchte die Menge („hunderte stiegen schon ein") — die Kampagne setzt aber bewusst auf eine Einzelfigur.',
      en: 'The core is narrative persuasion: a fully composed character journey with self-doubt, setback and breakthrough invites identification and “transports” the audience into Priya’s perspective — it is the classic plot arc, not a mere burst of affect, that carries the message. The boundary: portraying a true, representative experience is legitimate and informative; it becomes manipulative when an atypical individual path is sold as the norm or the arc is invented. Emotional appeal is the nearest confusion — but that would deliberately trigger a feeling (fear, pride) without necessarily a story; here it is the narrative structure that does the work. Liking would foreground the sender’s likability or similarity (a friendly recruiter, shared hobbies), not a plot arc. Social proof would need the crowd (“hundreds have already joined”) — but the campaign deliberately rests on a single figure.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal'],
  },
  {
    id: 'np-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt den Auftritt der CEO vor allem?',
      en: 'Which technique primarily carries the CEO’s address?',
    },
    scenario: {
      de: 'Nach einem schweren Lieferengpass eröffnet die CEO die interne Town-Hall nicht mit Zahlen oder einem Maßnahmenplan, sondern erzählt minutenlang die Gründungsgeschichte des Unternehmens neu: die drei Gründer in der Garage 1998, die Beinahe-Insolvenz 2009, die knappe Rettung. „Ihr alle wisst, wie diese Geschichte weitergeht", sagt sie und stellt den aktuellen Engpass als nächstes Kapitel einer altbekannten Comeback-Erzählung dar, das die Belegschaft gemeinsam durchlebt.',
      en: 'After a severe supply shortage, the CEO opens the internal town hall not with figures or an action plan, but spends minutes retelling the company’s founding story: the three founders in the garage in 1998, the near-bankruptcy of 2009, the narrow rescue. “You all know how this story goes,” she says, casting the current shortage as the next chapter of a familiar comeback narrative that the workforce lives through together.',
    },
    options: [
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Konsistenz (Commitment)', en: 'Consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Auftritt lebt von der Narrative Persuasion: Die CEO etikettiert den Engpass nicht bloß um, sondern baut minutenlang eine ganze Erzählwelt mit Figuren und Chronologie (Garage 1998, Beinahe-Insolvenz 2009) auf, in die die Belegschaft „transportiert" wird und die sie gemeinsam durchlebt. Genau dieses Miterleben — nicht eine einzelne Formulierung — senkt Zweifel und stiftet Zusammenhalt. Legitim ist das, solange die Geschichte wahr ist und einen echten Plan nicht ersetzt; manipulativ, wenn der Comeback-Bogen harte Fragen nach Ursachen und Maßnahmen zudeckt. Framing ist der verlockendste Fehlgriff: Zwar wird der Engpass in ein neues Licht gerückt, doch Framing meint das Umetikettieren DERSELBEN Fakten mit einer anderen Betonung („Herausforderung" statt „Krise") — hier wird jedoch eine ausgebaute, erlebte Geschichte erzählt, und die Umdeutung ist deren Folge, nicht ihr Motor. Ein Ankereffekt bräuchte einen Zahlen- oder Referenzwert (fehlt völlig). Konsistenz würde an eine frühere Selbstverpflichtung anknüpfen, um ein bestimmtes Verhalten zu erzwingen — auch das ist nicht der tragende Hebel.',
      en: 'The address runs on narrative persuasion: the CEO does not merely relabel the shortage but spends minutes constructing an entire story-world with characters and chronology (the 1998 garage, the 2009 near-bankruptcy) into which the workforce is “transported” and which they relive together. It is precisely this reliving — not a single choice of words — that lowers doubt and builds cohesion. This is legitimate as long as the story is true and does not replace a real plan; it turns manipulative when the comeback arc papers over hard questions about causes and remedies. Framing is the most tempting miss: the shortage is indeed cast in a new light, but framing means re-labelling the SAME facts with a different emphasis (“challenge” rather than “crisis”) — here a fully built, lived story is told, and the reinterpretation is its by-product, not its engine. Anchoring would need a numeric or reference value (entirely absent). Consistency would hook into a prior self-commitment to compel a specific behaviour — also not the load-bearing lever.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'framing'],
  },
  {
    id: 'np-p3-5',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Indem die Kampagne ihre Kernbotschaft in die Lebensgeschichte einer einzigen Figur einbettet, erzeugt sie beim Publikum ___ — jenen Zustand, in dem Zuhörer so in die Erzählung eintauchen, dass ihre kritische Prüfung nachlässt.',
      en: 'Complete the sentence: By embedding its core message in the life story of a single character, the campaign produces in its audience ___ — that state in which listeners become so immersed in the narrative that their critical scrutiny slackens.',
    },
    scenario: {
      de: 'Ein Marketing-Team plant den Rollout einer internen Change-Kampagne und diskutiert, warum eine gut erzählte „Change-Story" wirksamer überzeugt als eine Folienreihe mit Kennzahlen.',
      en: 'A marketing team is planning the rollout of an internal change campaign and discusses why a well-told “change story” persuades more effectively than a deck of metrics.',
    },
    options: [
      { de: 'narrative Transportation', en: 'narrative transportation' },
      { de: 'kognitive Dissonanz', en: 'cognitive dissonance' },
      { de: 'den Ankereffekt', en: 'the anchoring effect' },
      { de: 'Reaktanz', en: 'reactance' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gesucht ist die narrative Transportation (Green & Brock, 2000): das Eintauchen in eine Geschichte, das Emotionen bindet, Identifikation schafft und — messbar — das Gegenargumentieren senkt. Genau darauf zielt eine „Change-Story". Die Grenze: Transportation ist ein legitimes Verständnis- und Motivationswerkzeug, solange die Geschichte wahrhaftig ist und Fakten nicht verdrängt; manipulativ wird sie, wenn der Sog kritische Prüfung gezielt ausschaltet. Kognitive Dissonanz beschreibt das Unbehagen bei widersprüchlichen Überzeugungen — nicht das Eintauchen in eine Erzählung. Der Ankereffekt bräuchte einen Zahlen- oder Referenzwert. Reaktanz ist sogar das Gegenteil: der innere Widerstand gegen spürbaren Überzeugungsdruck — und genau diesen Widerstand umgeht eine gute Geschichte.',
      en: 'The answer is narrative transportation (Green & Brock, 2000): immersion in a story that binds emotions, creates identification and — measurably — lowers counter-arguing. That is exactly what a “change story” targets. The boundary: transportation is a legitimate tool for understanding and motivation, as long as the story is truthful and does not crowd out facts; it turns manipulative when the immersion is used deliberately to switch off critical scrutiny. Cognitive dissonance describes the discomfort of holding conflicting beliefs — not immersion in a narrative. The anchoring effect would need a numeric or reference value. Reactance is in fact the opposite: the inner resistance to felt persuasion pressure — and it is precisely that resistance a good story bypasses.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion'],
  },
  {
    id: 'np-p3-6',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als Kommunikationsverantwortliche mit dieser Kampagnen-Idee um?',
      en: 'As the communications lead, how do you handle this campaign idea?',
    },
    scenario: {
      de: 'Du verantwortest die Kommunikation für eine Fitness-App vor dem Launch. Das Marketing schlägt vor, die gesamte Kampagne um Jonas zu bauen, der mit der App in einem Jahr 28 Kilo abgenommen und seine Gesundheit umgekrempelt hat — ein packender Vorher-Nachher-Bogen. Die internen Daten zeigen aber: Der typische Nutzer erreicht nur eine bescheidene, langsame Verbesserung; Jonas ist ein Ausreißer.',
      en: 'You lead communications for a fitness app ahead of launch. Marketing proposes building the whole campaign around Jonas, who lost 28 kilos and turned his health around in a year with the app — a gripping before-and-after arc. But the internal data show that the typical user achieves only a modest, gradual improvement; Jonas is an outlier.',
    },
    options: [
      {
        de: 'Ich nutze Jonas’ echte Geschichte, um den Nutzen greifbar zu machen — stelle sie aber sichtbar neben die repräsentativen Durchschnittswerte und einen klaren Hinweis „Einzelergebnis, individuelle Resultate variieren". Das Narrativ hilft beim Verstehen, ersetzt aber nicht die Evidenz.',
        en: 'I use Jonas’s real story to make the benefit tangible — but place it visibly next to the representative average results and a clear note, “individual result, outcomes vary”. The narrative aids understanding without standing in for the evidence.',
      },
      {
        de: 'Ich baue die ganze Kampagne auf Jonas und lasse die Durchschnittswerte weg — eine starke Geschichte konvertiert besser als Statistik.',
        en: 'I build the entire campaign on Jonas and leave the averages out — a strong story converts better than statistics.',
      },
      {
        de: 'Ich streiche die Geschichte komplett und veröffentliche nur die Median-Werte und Nutzungskurven.',
        en: 'I cut the story entirely and publish only the median figures and usage curves.',
      },
      {
        de: 'Ich verschmelze mehrere Nutzer zu einem noch dramatischeren „Vorzeige-Helden", ohne offenzulegen, dass die Figur erfunden ist.',
        en: 'I merge several users into an even more dramatic “flagship hero”, without disclosing that the character is fabricated.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) verbindet Wirksamkeit und Ethik sauber: Narrative Transportation ist ein legitimer Hebel, weil eine konkrete Figur den Nutzen verständlich und erinnerbar macht — solange die Geschichte wahr ist UND die repräsentative Datenbasis sichtbar bleibt. Die Grenze verläuft dort, wo der vivide Einzelfall die Evidenz ersetzt (Anekdote-als-Beweis) oder erfunden wird. Option 2 ist genau dieser Grenzübertritt: Jonas als Ausreißer ohne Durchschnittswerte suggeriert ein typisches Ergebnis, das die Daten nicht hergeben — irreführend und werberechtlich riskant (Testimonials müssen repräsentativ oder als untypisch gekennzeichnet sein). Option 4 (Index 3) ist die schwerste Verletzung: eine erfundene, nicht offengelegte Komposit-Figur ist schlicht Fabrikation. Option 3 (Index 2) ist nicht unethisch, aber eine unnötige Überkorrektur — sie wirft ein legitimes, wirksames Verständniswerkzeug weg und verschenkt Engagement, obwohl Geschichte UND Daten problemlos zusammen gehen. Faustregel: Die Geschichte darf die Evidenz illustrieren, nie ersetzen.',
      en: 'Only option 1 (index 0) cleanly unites effectiveness and ethics: narrative transportation is a legitimate lever because a concrete character makes the benefit understandable and memorable — as long as the story is true AND the representative data stay visible. The line is crossed where the vivid single case replaces the evidence (anecdote-as-proof) or is fabricated. Option 2 is exactly that crossing: Jonas as an outlier without the averages implies a typical result the data do not support — misleading, and legally risky in advertising (testimonials must be representative or flagged as atypical). Option 4 (index 3) is the gravest breach: an invented, undisclosed composite character is simply fabrication. Option 3 (index 2) is not unethical, but a needless over-correction — it throws away a legitimate, effective comprehension tool and forfeits engagement, even though story AND data sit together without trouble. Rule of thumb: the story may illustrate the evidence, never replace it.',
    },
    points: 15,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal'],
  },
];
