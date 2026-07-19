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
      { de: 'Microtargeting', en: 'Microtargeting' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Data Voids / SEO- & KI-Suche-Manipulation: Der Hebel ist eine Informationslücke — ein neu geprägter, seltener Suchbegriff, zu dem es noch keine verlässlichen Inhalte gibt. Wer diese Lücke vorab mit optimierten Seiten besetzt, macht die eigene Darstellung zur Standard-Antwort in Suchergebnissen und KI-Assistenten, bevor unabhängige Quellen existieren. Legitim einsetzen: Zu einem echten, neuen Thema früh eine saubere, korrekt belegte FAQ oder ein Glossar bereitzustellen, ist gutes Content-Handwerk (GEO) — professionell bleibt es, solange die Inhalte die Faktenlage vollständig abbilden und die dünne Quellenlage nicht verschweigen. Erkennen und kontern: Du erkennst das Muster daran, dass zu einem brandneuen oder sehr speziellen Begriff plötzlich nur Inhalte einer Interessenpartei dominieren; prüfe, ob es unabhängige Quellen gibt, suche nach dem etablierten Sachbegriff statt nach dem gebrandeten und wäge KI-Antworten gegen Primärquellen ab. Themensetzung würde bestimmen, worüber überhaupt gesprochen wird (Salienz in der Medienagenda) — hier geht es nicht um Aufmerksamkeit für ein Thema, sondern darum, welche Inhalte eine bereits gesuchte Lücke füllen. Der Illusory Truth Effect entstünde durch bloße Wiederholung, die etwas vertraut und dadurch glaubwürdig macht — hier ist der Kern die Ausnutzung des leeren Suchraums, nicht die Wiederholungsfrequenz. Microtargeting würde einzelne Zielgruppen mit passgenauen Botschaften ansprechen — hier wird dagegen ein Suchbegriff für alle besetzt, nicht ein Publikum segmentiert.',
      en: 'Data voids / SEO & AI search manipulation: the lever is an information gap — a freshly coined, rare search term for which no reliable content yet exists. Occupying that gap in advance with optimised pages makes your framing the default answer in search results and AI assistants before independent sources appear. Used legitimately: publishing a clean, properly sourced FAQ or glossary early on a genuinely new topic is good content craft (GEO) — it stays professional as long as the content reflects the full evidence and does not hide a thin source base. To spot and counter it: you recognise the pattern when a brand-new or very niche term is suddenly dominated by one interested party\'s content; check whether independent sources exist, search for the established subject term rather than the branded one, and weigh AI answers against primary sources. Agenda setting would decide what is talked about at all (salience on the media agenda) — here it is not about attention for a topic but about which content fills a gap that is already being searched. The illusory truth effect would arise from sheer repetition making something feel familiar and thus credible — here the core is the exploitation of the empty search space, not repetition frequency. Microtargeting would address specific audiences with tailored messages — here, by contrast, a search term is occupied for everyone, not an audience segmented.',
    },
    points: 10,
    primaryTechniqueId: 'data_voids_seo_manipulation',
    relatedTechniques: ['data_voids_seo_manipulation', 'agenda_setting', 'illusory_truth_effect', 'microtargeting'],
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
      de: 'Data Voids / SEO- & KI-Suche-Manipulation: Der Dienstleister nennt den Kern selbst — eine leere Suchkombination („fast keine Treffer") wird mit gezielt optimierten eigenen Inhalten besetzt, damit die eigene Darstellung mangels Alternativen zur ersten Antwort in Suche und KI-Assistenten wird. Der Hebel ist die Informationslücke, nicht die Überzeugungskraft der Inhalte. Erkennen und kontern: Du erkennst das Muster daran, dass zu einem sehr speziellen Begriff auffällig nur die Inhalte einer Partei existieren; suche nach dem neutralen Sachbegriff, prüfe auf unabhängige Quellen und behandle eine glatte KI-Antwort zu einer Nischenfrage als Hinweis, nicht als Beleg. Legitim einsetzen: Zu einem echten Thema früh eine korrekte, vollständig belegte Ressource anzubieten, ist zulässig — solange nichts Entscheidendes weggelassen wird, um die Lücke zu schönen. Themensetzung würde bestimmen, welches Thema überhaupt auf die Agenda kommt — hier wird kein Thema gesetzt, sondern eine bereits gesuchte Lücke gefüllt. Der Illusory Truth Effect entstünde durch Wiederholung, die eine Aussage vertraut und dadurch glaubwürdig macht — hier zählt nicht die Häufigkeit, sondern dass der Suchraum sonst leer ist.',
      en: 'Data voids / SEO & AI search manipulation: the firm names the core itself — an empty search combination ("almost no hits") is occupied with deliberately optimised in-house content so that, for lack of alternatives, the client\'s framing becomes the first answer in search and AI assistants. The lever is the information gap, not the persuasiveness of the content. To spot and counter it: you recognise the pattern when a very niche term is conspicuously covered only by one party\'s content; search for the neutral subject term, check for independent sources, and treat a slick AI answer to a niche question as a lead, not proof. Used legitimately: offering an accurate, fully evidenced resource early on a genuine topic is fair — as long as nothing decisive is omitted to prettify the gap. Agenda setting would decide which topic reaches the agenda at all — here no topic is set; an already-searched gap is filled. The illusory truth effect would arise from repetition making a claim feel familiar and thus credible — here it is not frequency that counts but that the search space is otherwise empty.',
    },
    points: 10,
    primaryTechniqueId: 'data_voids_seo_manipulation',
    relatedTechniques: ['data_voids_seo_manipulation', 'agenda_setting', 'illusory_truth_effect'],
  },
];
