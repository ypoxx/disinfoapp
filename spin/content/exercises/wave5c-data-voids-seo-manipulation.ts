// Welle 5c: 3 Übungen für data_voids_seo_manipulation (Data Voids / SEO- & KI-Suche-Manipulation).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen; Fokus auf Mechanismus und Erkennen.
// Kein seriousMode. Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cDataVoidsSeoManipulation: Exercise[] = [
  {
    id: 'wave5c-data_voids_seo_manipulation-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Agentur hier ein?',
      en: 'Which technique is the agency using here?',
    },
    scenario: {
      de: 'Krisenvorbereitung einer PR-Agentur für einen Konsumgüterhersteller: Wochen bevor ein interner Vorfall an die Öffentlichkeit gerät, prägt das Team einen eigenen Begriff für die Sache und legt dazu vorab eine FAQ-Seite, ein Glossar und mehrere Blogposts an, alle auf genau diese seltene Suchphrase optimiert. Ziel: Wer den frisch kursierenden Begriff googelt oder einen KI-Assistenten fragt, landet zuerst auf der vom Hersteller gerahmten Darstellung — unabhängige Quellen dazu gibt es noch nicht.',
      en: 'A PR agency preparing crisis materials for a consumer-goods maker: weeks before an internal incident becomes public, the team coins its own term for the matter and pre-builds an FAQ page, a glossary and several blog posts, all optimised for exactly that rare search phrase. The aim: anyone who googles the freshly circulating term or asks an AI assistant lands first on the maker\'s framing — no independent sources exist yet.',
    },
    options: [
      { de: 'Data Voids / SEO- & KI-Suche-Manipulation', en: 'Data voids / SEO & AI search manipulation' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Illusory Truth Effect (Wahrheitsillusion durch Wiederholung)', en: 'Illusory truth effect' },
      { de: 'Suchmaschinen-Manipulationseffekt (Search Engine Manipulation Effect)', en: 'Search engine manipulation effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Data Voids / SEO- & KI-Suche-Manipulation: Der Hebel ist eine Informationslücke — ein neu geprägter, seltener Suchbegriff, zu dem es noch keine verlässlichen Inhalte gibt. Wer diese Lücke vorab mit optimierten Seiten besetzt, macht die eigene Darstellung zur Standard-Antwort in Suchergebnissen und KI-Assistenten, bevor unabhängige Quellen existieren. Legitim einsetzen: Zu einem echten neuen Thema früh eine saubere, vollständig belegte FAQ oder ein Glossar bereitzustellen und so aufzubereiten, dass generative Antwortsysteme es korrekt zitieren — die Disziplin dahinter heißt Generative Engine Optimization (GEO) —, bleibt zulässiges Content-Handwerk, solange die Inhalte die Faktenlage vollständig abbilden und die dünne Quellenlage nicht verschweigen. Erkennen und kontern: Du erkennst das Muster daran, dass zu einem brandneuen oder sehr speziellen Begriff plötzlich nur Inhalte einer Interessenpartei dominieren; prüfe, ob es unabhängige Quellen gibt, suche nach dem etablierten Sachbegriff statt nach dem gebrandeten und wäge KI-Antworten gegen Primärquellen ab. Themensetzung (Agenda Setting) würde erklären, dass die Agentur bestimmt, welches Thema die Redaktionen überhaupt aufgreifen — hier wird jedoch kein Thema in die Medienagenda gehoben, sondern für einen bereits kursierenden Begriff die konkrete Trefferliste vorbelegt. Der Illusory Truth Effect würde greifen, wenn dieselbe Aussage den Leser so oft erreicht, bis sie ihm vertraut und dadurch glaubwürdig vorkommt — die mehreren Seiten hier dienen nicht der Wiederholung vor demselben Publikum, sondern decken die eine seltene Suchphrase breit ab, damit überhaupt ein eigenes Ergebnis erscheint. Der Suchmaschinen-Manipulationseffekt (Search Engine Manipulation Effect) beschreibt, wie die Reihenfolge bereits vorhandener Treffer Meinungen verschiebt — er setzt bestehende Ergebnisse voraus, die umsortiert werden; hier existieren noch gar keine unabhängigen Treffer, die Lücke selbst wird mit den ersten und einzigen Inhalten gefüllt.',
      en: 'Data voids / SEO & AI search manipulation: the lever is an information gap — a freshly coined, rare search term for which no reliable content yet exists. Occupying that gap in advance with optimised pages makes your framing the default answer in search results and AI assistants before independent sources appear. Used legitimately: publishing a clean, fully sourced FAQ or glossary early on a genuinely new topic and shaping it so that generative answer systems cite it correctly — the discipline is called Generative Engine Optimization (GEO) — remains legitimate content craft, as long as the content reflects the full evidence and does not hide a thin source base. To spot and counter it: you recognise the pattern when a brand-new or very niche term is suddenly dominated by one interested party\'s content; check whether independent sources exist, search for the established subject term rather than the branded one, and weigh AI answers against primary sources. Agenda setting would explain the agency deciding which topic newsrooms pick up at all — but here no topic is lifted onto the media agenda; instead the concrete results list for an already-circulating term is pre-populated. The illusory truth effect would apply if the same claim reached the reader often enough to feel familiar and therefore credible — the several pages here are not repetition before one audience but broad coverage of the single rare search phrase, so that a result of their own appears at all. The search engine manipulation effect describes how the ranking order of results that already exist shifts opinion — it presupposes existing results being reordered; here no independent results exist yet, and the gap itself is filled with the first and only content.',
    },
    points: 10,
    primaryTechniqueId: 'data_voids_seo_manipulation',
    relatedTechniques: ['data_voids_seo_manipulation', 'agenda_setting', 'illusory_truth_effect', 'search_engine_manipulation_effect'],
  },
  {
    id: 'wave5c-data_voids_seo_manipulation-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Software-Anbieters. In der Runde zur Produkteinführung schlägt der Performance-Marketing-Kollege vor: Man solle rasch ein Dutzend „Ratgeber"-Seiten zu einer seltenen technischen Fragestellung veröffentlichen, zu der es online kaum belastbare Quellen gibt — perfekt optimiert, damit Google und KI-Assistenten künftig ausschließlich eure Darstellung als Antwort ausspielen. Kritische Details der noch unfertigen Sicherheitsarchitektur würde man dabei weglassen.',
      en: 'You lead communications for a software vendor. In the launch meeting the performance-marketing colleague proposes: quickly publish a dozen "guide" pages on a rare technical question for which there is barely any solid online source — perfectly optimised so that Google and AI assistants will from now on surface only your framing as the answer. Critical details of the still-unfinished security architecture would be left out.',
    },
    options: [
      {
        de: 'Ich stoppe das Besetzen der Lücke mit lückenhaften Inhalten: Wir veröffentlichen zu der Frage nur, was wir vollständig und korrekt belegen können, benennen offene Punkte der Sicherheitsarchitektur transparent und verlinken auf unabhängige Standards — gutes Auffindbar-Machen ja, aber nicht auf Kosten der Faktenlage.',
        en: 'I stop the plan to fill the gap with incomplete content: on this question we publish only what we can fully and correctly evidence, flag the open points of the security architecture transparently and link to independent standards — good findability, yes, but not at the expense of the facts.',
      },
      {
        de: 'Ich ziehe den Vorschlag durch — solange zu dem Begriff nichts Verlässliches existiert, ist es unser gutes Recht, die Lücke zuerst und vollständig mit unserer Sicht zu besetzen.',
        en: 'I run with the proposal — as long as nothing reliable exists for the term, it is our right to occupy the gap first and fully with our view.',
      },
      {
        de: 'Ich lehne jede Content-Produktion zu dem Thema ab und lasse den Suchraum bewusst leer — kein Inhalt ist sicherer, als sich angreifbar zu machen.',
        en: 'I reject any content on the topic and deliberately leave the search space empty — no content is safer than exposing ourselves.',
      },
      {
        de: 'Ich lasse die Seiten wie vorgeschlagen produzieren, entschärfe aber, indem wir die kritischen Sicherheitsdetails nicht weglassen, sondern in unauffällige Unterseiten auslagern, die kaum jemand aufruft.',
        en: 'I have the pages produced as proposed but soften it by not omitting the critical security details, instead moving them to inconspicuous subpages that hardly anyone visits.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist eine Data-Void-Besetzung: Eine seltene Suchphrase ohne verlässliche Quellen wird mit optimierten, bewusst unvollständigen Inhalten gefüllt, damit Suche und KI-Assistenten nur die eigene Sicht ausspielen. Der Mechanismus wirkt über die Informationslücke, nicht über Argumente. Legitim einsetzen: Früh eine saubere, vollständig belegte Ressource zu einem neuen Thema bereitzustellen, ist gutes Content-Handwerk — die Grenze ist überschritten, sobald du entscheidende Fakten (hier: offene Punkte der Sicherheitsarchitektur) weglässt, um die Lücke zu deinen Gunsten zu schließen. Die beste Option macht genau diese Trennung: auffindbar ja, aber nur mit belegbaren, vollständigen Inhalten und transparenten offenen Punkten. Erkennen und kontern: Frag bei jedem solchen Plan, ob die Seite auch dann noch gebaut würde, wenn sie die unbequemen Fakten enthielte — lautet die Antwort nein, besetzt ihr die Lücke, statt sie zu füllen. Den Vorschlag durchzuziehen bindet eure Glaubwürdigkeit an eine geschönte Darstellung, die auffliegt, sobald unabhängige Quellen nachwachsen. Den Suchraum bewusst leer zu lassen wirkt vorsichtig, überlässt die Lücke aber schlechter informierten oder interessierten Dritten — Verzicht ist keine Sorgfalt. Die Details in unauffällige Unterseiten auszulagern ist nur eine kosmetische Variante desselben Weglassens: formal vorhanden, praktisch verborgen.',
      en: 'The proposal is a data-void occupation: a rare search phrase with no reliable sources is filled with optimised, deliberately incomplete content so that search and AI assistants surface only your view. The mechanism works through the information gap, not through arguments. Used legitimately: providing a clean, fully evidenced resource early on a new topic is good content craft — the line is crossed the moment you omit decisive facts (here: the open points of the security architecture) to close the gap in your favour. The best option draws exactly that line: findable, yes, but only with evidenced, complete content and transparent open points. To spot and counter it: for any such plan, ask whether the page would still be built if it included the inconvenient facts — if the answer is no, you are occupying the gap rather than filling it. Running with the proposal ties your credibility to a sanitised account that unravels once independent sources catch up. Leaving the search space deliberately empty looks cautious but cedes the gap to less-informed or interested third parties — abstaining is not diligence. Moving the details to inconspicuous subpages is merely a cosmetic version of the same omission: formally present, practically hidden.',
    },
    points: 10,
    primaryTechniqueId: 'data_voids_seo_manipulation',
    relatedTechniques: ['data_voids_seo_manipulation', 'agenda_setting'],
  },
  {
    id: 'wave5c-data_voids_seo_manipulation-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Ein Reputationsdienstleister erklärt einem mittelständischen Mandanten sein Vorgehen: „Zu Ihrem Firmennamen in Kombination mit dem laufenden Rechtsstreit gibt es online fast keine Treffer. Diese Leerstelle besetzen wir: eine Serie eigener Fachartikel und Presseseiten, exakt auf diese Suchkombination optimiert. Wer künftig sucht — Mensch oder KI-Assistent —, findet zuerst Ihre Darstellung, weil sonst schlicht nichts da ist."',
      en: 'A reputation firm explains its approach to a mid-sized client: "For your company name combined with the ongoing lawsuit there are almost no hits online. We occupy that empty spot: a series of our own expert articles and press pages, optimised precisely for that search combination. Whoever searches in future — human or AI assistant — finds your framing first, simply because nothing else is there."',
    },
    options: [
      { de: 'Data Voids / SEO- & KI-Suche-Manipulation', en: 'Data voids / SEO & AI search manipulation' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Illusory Truth Effect (Wahrheitsillusion durch Wiederholung)', en: 'Illusory truth effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Data Voids / SEO- & KI-Suche-Manipulation: Der Dienstleister nennt den Kern selbst — eine leere Suchkombination („fast keine Treffer") wird mit gezielt optimierten eigenen Inhalten besetzt, damit die eigene Darstellung mangels Alternativen zur ersten Antwort in Suche und KI-Assistenten wird. Der Hebel ist die Informationslücke, nicht die Überzeugungskraft der Inhalte. Erkennen und kontern: Du erkennst das Muster daran, dass zu einem sehr speziellen Begriff auffällig nur die Inhalte einer Partei existieren; suche nach dem neutralen Sachbegriff, prüfe auf unabhängige Quellen und behandle eine glatte KI-Antwort zu einer Nischenfrage als Hinweis, nicht als Beleg. Legitim einsetzen: Zu einem echten Thema früh eine korrekte, vollständig belegte Ressource anzubieten, ist zulässig — solange nichts Entscheidendes weggelassen wird, um die Lücke zu schönen. Themensetzung (Agenda Setting) hieße, dem Publikum überhaupt erst ins Bewusstsein zu rücken, dass es diesen Rechtsstreit gibt — das Gegenteil des Ziels hier; die Suchkombination wird ja schon eingegeben, gesetzt wird nichts, nur die leere Trefferliste dazu gefüllt. Der Illusory Truth Effect würde eine Aussage allein dadurch glaubwürdig machen, dass man sie wieder und wieder ausspielt; die Serie eigener Artikel hier soll aber nicht durch Häufigkeit überzeugen, sondern schlicht die einzige Quelle sein, die zu dieser Suchkombination existiert.',
      en: 'Data voids / SEO & AI search manipulation: the firm spells out the crux itself — an empty search combination ("almost no hits") is occupied with deliberately optimised in-house content so that, for lack of alternatives, the client\'s framing becomes the first answer in search and AI assistants. The lever is the information gap, not the persuasiveness of the content. To spot and counter it: you recognise the pattern when a very niche term is conspicuously covered only by one party\'s content; search for the neutral subject term, check for independent sources, and treat a slick AI answer to a niche question as a lead, not proof. Used legitimately: offering an accurate, fully evidenced resource early on a genuine topic is fair — as long as nothing decisive is omitted to gloss over the gap. Agenda setting would mean putting the very existence of the lawsuit into the audience\'s mind — the opposite of the aim here; the search combination is already being typed, nothing is placed on an agenda, only its empty results list is filled. The illusory truth effect would make a claim credible purely by playing it again and again; the series of in-house articles here is not meant to convince through frequency but simply to be the only source that exists for this search combination.',
    },
    points: 10,
    primaryTechniqueId: 'data_voids_seo_manipulation',
    relatedTechniques: ['data_voids_seo_manipulation', 'agenda_setting', 'illusory_truth_effect'],
  },
];
