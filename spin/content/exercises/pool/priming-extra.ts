import type { Exercise } from '../../types';

// priming — Phase 2 content batch.
export const primingExtraExercises: Exercise[] = [
  {
    id: 'pr-new-5',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Krisenteam plant den Presse-Q&A nach einem Datenleck. Vier vorbereitende Priming-Bausteine stehen im Plan — einer überschreitet die ethische Grenze von legitimer Vorbereitung hin zu irreführender Assoziation. Welcher?',
      en: 'Your crisis team is planning the press Q&A after a data breach. Four preparatory priming components are on the plan — one crosses the ethical line from legitimate preparation into misleading association. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine für den Presse-Q&A am Tag nach dem Vorfall:',
      en: 'Planned components for the press Q&A the day after the incident:',
    },
    options: [
      {
        de: 'Vorab ein sachliches Faktenblatt mit der belegten Zeitleiste des Vorfalls und den bereits eingeleiteten Gegenmaßnahmen an die Redaktionen verteilen',
        en: 'Distribute a factual sheet in advance with the verified incident timeline and the remediation steps already under way to the newsrooms',
      },
      {
        de: 'Den Q&A in einem ruhigen, professionell ausgeleuchteten Raum abhalten und eine fachlich souveräne Sprecherin auftreten lassen',
        en: 'Hold the Q&A in a calm, professionally lit room with a technically assured spokesperson',
      },
      {
        de: 'Mit einer ehrlichen, kurzen Anerkennung gegenüber den betroffenen Kundinnen und Kunden eröffnen, bevor die Details folgen',
        en: 'Open with an honest, brief acknowledgment of the affected customers before moving on to the details',
      },
      {
        de: 'Auf den Saalbildschirmen während des gesamten Q&A eine Schleife der früheren Cybersecurity-Auszeichnungen des Unternehmens laufen lassen, um trotz des aktuellen Versagens die Assoziation „Sicherheits-Vorreiter" zu wecken',
        en: "Loop the company's past cybersecurity awards on the room screens throughout the Q&A, to evoke a 'security pioneer' association despite the current failure",
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Priming ist der Hebel: Die Auszeichnungs-Schleife besteht aus Kontextelementen, die mit dem aktuellen Vorfall nichts zu tun haben, aber im Gedächtnis die Assoziation „Sicherheits-Vorreiter" vor-aktivieren. Dieser Heiligenschein steht im Widerspruch zu genau dem Versagen, über das gesprochen wird, und lenkt die Aufmerksamkeit der Journalistinnen und Journalisten subtil vom eigentlichen Leck weg — das macht ihn irreführend, denn die geweckte Assoziation widerspricht den Fakten auf dem Tisch. Die anderen drei Bausteine bleiben legitim: Das Faktenblatt liefert wahren, relevanten Kontext und schafft Transparenz; ein ruhiger Raum mit souveräner Sprecherin ist normale professionelle Inszenierung, die keine Fakten verzerrt; die ehrliche Anerkennung aktiviert zwar Empathie, ist aber wahrhaftig und angemessen. Prüffrage für die Grenze: Spiegelt die vor-aktivierte Assoziation die Realität wider und bleibt sie transparent — oder erzeugt sie einen Heiligenschein, den die Fakten nicht hergeben?',
      en: "Priming is the lever: the award loop consists of context elements that have nothing to do with the current incident but pre-activate the association 'security pioneer' in memory. This halo contradicts the very failure under discussion and subtly steers the journalists' attention away from the actual breach — which makes it deceptive, because the evoked association is at odds with the facts on the table. The other three components stay legitimate: the fact sheet delivers true, relevant context and creates transparency; a calm room with an assured spokesperson is normal professional staging that distorts no facts; the honest acknowledgment does prime empathy, but it is truthful and proportionate. Boundary test: does the pre-activated association reflect reality and stay transparent — or does it manufacture a halo the facts do not support?",
    },
    points: 15,
    primaryTechniqueId: 'priming',
    relatedTechniques: ['priming', 'framing'],
  },
  {
    id: 'pr-new-6',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik erklärt am besten, warum die Journalistinnen und Journalisten das Produkt am Ende als „verlässlicher" bewerten — obwohl der Pitch selbst wortgleich war?',
      en: "Which technique best explains why the journalists ultimately rate the product as 'more dependable' — even though the pitch itself was word-for-word identical?",
    },
    scenario: {
      de: 'Ein B2B-Softwareanbieter veranstaltet einen Medientag. Der gesamte Vormittag — noch bevor ein Wort über das Produkt fällt — steht unter dem Motto Verlässlichkeit: ein Gastvortrag über Flugsicherheit, in den Pausen Fotos von Brücken und Sicherheitsgurten an den Wänden, dazu überall Schlagworte aus der Ingenieurswelt wie „geprüft", „redundant", „ausfallsicher". Erst am Nachmittag folgt der Pitch für den neuen Cloud-Dienst. Eine Vergleichsgruppe, die denselben Pitch ohne das Vormittagsprogramm hört, bewertet das Produkt anschließend spürbar weniger „verlässlich".',
      en: "A B2B software vendor hosts a media day. The entire morning — before a single word about the product — is themed around reliability: a guest talk on aviation safety, photos of bridges and seatbelts on the walls during the breaks, and engineering keywords like 'tested', 'redundant', 'fail-safe' posted everywhere. Only in the afternoon comes the pitch for the new cloud service. A comparison group that hears the identical pitch without the morning programme rates the product noticeably less 'dependable' afterwards.",
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Priming: Die thematisch unabhängigen Vormittagsreize — Flugsicherheit, Brücken, Sicherheitsgurte, die Ingenieurs-Schlagworte an den Wänden — aktivieren im Gedächtnis das Konzept Verlässlichkeit. Es bleibt kognitiv präsent und überträgt sich auf das spätere, eigentlich unabhängige Urteil über das Produkt; daher die höhere „Verlässlichkeits"-Bewertung, obwohl der Pitch wortgleich war. Genau dieser wortgleiche Pitch in beiden Gruppen ist der entscheidende Hinweis: Der Unterschied liegt in der Vor-Aktivierung, nicht in der Botschaft. Als Inszenierung ist das vertretbar, wenn das Produkt wirklich verlässlich ist und die Assoziationen echte Eigenschaften spiegeln; manipulativ wird es, wenn ein Verlässlichkeits-Heiligenschein erzeugt wird, den die Software nicht einlöst. Framing scheidet gerade deshalb aus, weil die Botschaft identisch ist — Framing würde dieselbe Information anders formulieren. Anchoring bräuchte einen numerischen oder Referenzwert, der hier fehlt. Ein emotionaler Appell würde gezielt ein Gefühl (Angst, Stolz, Mitgefühl) erzeugen, um eine Entscheidung zu treiben; die Vormittagsreize sind hier aber semantische Konzept-Anker, kein Gefühls-Appell, und gemessen wird ein sachliches Eigenschaftsurteil („verlässlich"), keine Emotion. Zudem wird im Pitch selbst gar nicht appelliert — die Konzepte werden vorher installiert und übertragen sich auf das spätere Urteil.',
      en: "Priming: the thematically unrelated morning stimuli — aviation safety, bridges, seatbelts, the engineering keywords on the walls — activate the concept of reliability in memory. It stays cognitively accessible and carries over to the later, ostensibly independent judgment of the product; hence the higher 'dependability' rating even though the pitch was word-for-word identical. That very identical pitch across both groups is the decisive clue: the difference lies in the pre-activation, not in the message. As staging it is defensible when the product genuinely is dependable and the associations mirror real qualities; it turns manipulative when it manufactures a reliability halo the software does not deliver. Framing is out precisely because the message is identical — framing would word the same information differently. Anchoring would need a numeric or reference value, which is absent here. An emotional appeal would deliberately induce a feeling (fear, pride, sympathy) to drive a decision; but here the morning stimuli are semantic concept anchors, not an appeal to feeling, and what is measured is a cognitive attribute judgment ('dependable'), not an emotion. Moreover the pitch itself makes no plea — the concepts are installed beforehand and carry over to the later judgment.",
    },
    points: 10,
    primaryTechniqueId: 'priming',
    relatedTechniques: ['priming', 'emotional_appeal'],
  },
];
