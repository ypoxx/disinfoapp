import type { Exercise } from '../../types';

// ai_persuasion — Phase 2 content batch.
export const aiPersuasionExercises: Exercise[] = [
  {
    id: 'aip-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter diesem Vorgehen?',
      en: 'Which technique is behind this approach?',
    },
    scenario: {
      de: 'Ein KI-Chatbot im Kundenservice ändert seinen Tonfall, seine Argumente und seine Wortwahl live im Gespräch: Er lernt aus jeder Antwort des Gegenübers und passt sich in Echtzeit an, um immer überzeugender zu werden.',
      en: 'An AI customer-service chatbot changes its tone, arguments and word choice live in the conversation: it learns from each reply and adapts in real time to become ever more persuasive.',
    },
    options: [
      { de: 'KI-gestützte Persuasion', en: 'AI-Powered Persuasion' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'KI-gestützte Persuasion nutzt ein lernendes System, das seine Ansprache adaptiv und in Echtzeit optimiert — der verräterische Hinweis ist genau diese selbstständige Anpassung „während des Gesprächs" aus den Reaktionen des Gegenübers. Legitim ist das, wenn offengelegt wird, dass ein Bot antwortet, und die Anpassung dem Nutzer hilft (klarere Antworten, passende Hilfe); manipulativ wird es, wenn eine verdeckte KI die Live-Reaktionen jedes Einzelnen ausliest, um sein Urteil zu übersteuern. Microtargeting würde Menschen anhand fester Datenprofile in Segmente sortieren und ihnen vorgefertigte Botschaften zuordnen — hier gibt es keine Segmente, sondern ein Modell, das sich fortlaufend selbst anpasst. Nudging wäre eine feste, für alle gleiche Entscheidungsarchitektur, sozialer Beweis ein Verweis auf das Verhalten anderer — beides erklärt die adaptive Echtzeit-Optimierung nicht.',
      en: 'AI-Powered Persuasion uses a learning system that optimizes its approach adaptively and in real time — the tell-tale sign is exactly that self-directed adjustment "mid-conversation" from the other person\'s reactions. It is legitimate when it is disclosed that a bot is answering and the adaptation helps the user (clearer answers, relevant help); it turns manipulative when a hidden AI reads each individual\'s live reactions in order to override their judgment. Microtargeting would sort people into segments by fixed data profiles and assign them pre-made messages — here there are no segments, but a model that continuously adapts itself. Nudging would be a fixed choice architecture that is the same for everyone, and social proof a reference to what others do — neither explains the adaptive real-time optimization.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion'],
  },
  {
    id: 'aip-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'Alle Abonnenten eines Newsletters erhalten dieselbe Nachricht. Ein Machine-Learning-Modell sagt jedoch für jeden Empfänger den Moment voraus, in dem er am ehesten öffnet und klickt, verschickt die Mail exakt dann — und trainiert sich aus den Klickdaten laufend selbst nach, um das Timing weiter zu verbessern.',
      en: 'Every subscriber to a newsletter receives the same message. But a machine-learning model predicts, for each recipient, the moment they are most likely to open and click, sends the email exactly then — and continuously retrains itself on the click data to improve the timing further.',
    },
    options: [
      { de: 'KI-gestützte Persuasion', en: 'AI-Powered Persuasion' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der bestimmende Mechanismus ist KI-gestützte Persuasion: Ein Modell prognostiziert individuelles Verhalten (den optimalen Öffnungszeitpunkt) und optimiert sich fortlaufend selbst — perfektes Timing plus kontinuierliche Optimierung sind die Signatur dieser Technik. Microtargeting ist der verlockende Fast-Treffer, greift aber nicht: Dort würde der INHALT je nach Datenprofil variieren; hier bekommen alle dieselbe Nachricht, personalisiert wird nur der ZEITPUNKT durch eine lernende Vorhersage. Nudging wäre eine bewusst gestaltete, für alle gleiche und einmal festgelegte Voreinstellung — kein sich selbst nachtrainierendes Prognosemodell. Priming würde vorab Assoziationen aktivieren, nicht den Versandzeitpunkt berechnen. Grenze: Timing-Optimierung für Relevanz und Bequemlichkeit ist legitim; Menschen gezielt in Momenten geringer Selbstkontrolle (etwa nachts, impulsanfällig) zu treffen, um ihr Urteil zu umgehen, überschreitet sie.',
      en: 'The defining mechanism is AI-Powered Persuasion: a model predicts individual behaviour (the optimal open moment) and continuously optimizes itself — perfect timing plus continuous optimization are the signature of this technique. Microtargeting is the tempting near-miss but does not fit: there the CONTENT would vary by data profile; here everyone gets the same message and only the TIMING is personalized by a learning prediction. Nudging would be a deliberately designed default, the same for everyone and set once — not a self-retraining prediction model. Priming would pre-activate associations, not compute the send moment. Boundary: optimizing timing for relevance and convenience is legitimate; deliberately hitting people in moments of low self-control (e.g. late at night, prone to impulse) to bypass their judgment crosses the line.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'microtargeting'],
  },
  {
    id: 'aip-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik dominiert dieses Vorgehen?',
      en: 'Which technique dominates this approach?',
    },
    scenario: {
      de: 'Eine Spendenplattform setzt kein festes Set an Texten ein. Ein Reinforcement-Learning-System erzeugt selbst laufend Mikro-Varianten von Überschrift, Layout und Appell, misst bei jedem Nutzer, welche Variante ihn dem Ziel näher bringt, und entwickelt seine Strategie pro Person in Echtzeit autonom weiter. Kein Mensch schreibt die Varianten — das Modell entdeckt selbst, was jeden Einzelnen überzeugt, und verwirft, was nicht wirkt.',
      en: 'A donation platform uses no fixed set of copy. A reinforcement-learning system itself continuously generates micro-variations of headline, layout and appeal, measures for each user which variant moves them closer to the goal, and autonomously evolves its strategy per person in real time. No human writes the variants — the model discovers on its own what persuades each individual and discards what does not work.',
    },
    options: [
      { de: 'KI-gestützte Persuasion', en: 'AI-Powered Persuasion' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist KI-gestützte Persuasion in ihrer reinsten Form: ein autonomes, sich selbst optimierendes System, das Persuasionsinhalte generativ erzeugt und pro Person und in Echtzeit weiterentwickelt. Microtargeting ist der stärkste Fast-Treffer, verfehlt aber den Kern: Es stützt sich auf vorab gebildete Datensegmente und ordnet ihnen von Menschen vorgefertigte Botschaften zu — es entscheidet, WER welche bestehende Botschaft sieht. Hier gibt es weder feste Segmente noch menschliche Autoren; das Modell ERZEUGT und OPTIMIERT die Botschaft selbst und fortlaufend. Nudging wäre eine einmal von Menschen gestaltete, für alle gleiche Entscheidungsarchitektur — nicht eine, die sich pro Interaktion selbst umschreibt. Framing benennt nur einen Hebel (die Darstellung derselben Information), den die KI zwar variiert, erklärt aber nicht die selbstlernende Maschine, die aus Millionen Varianten für jeden Einzelnen auswählt. Grenze: A/B-Optimierung auf ein ehrliches Ziel, transparent und mit Leitplanken, ist legitime Conversion-Optimierung; sie kippt ins Manipulative, wenn ein undurchschaubares Modell gegen die gemessenen Schwächen jeder Person optimiert und niemand mehr erklären oder prüfen kann, warum jemand genau das gesehen hat.',
      en: 'This is AI-Powered Persuasion in its purest form: an autonomous, self-optimizing system that generatively produces persuasion content and evolves it per person and in real time. Microtargeting is the strongest near-miss but misses the core: it relies on pre-built data segments and assigns them human-authored messages — it decides WHO sees which existing message. Here there are neither fixed segments nor human authors; the model CREATES and OPTIMIZES the message itself and continuously. Nudging would be a choice architecture designed once by humans and the same for everyone — not one that rewrites itself per interaction. Framing merely names one lever (presenting the same information differently) that the AI does vary, but does not explain the self-learning engine that selects among millions of variants for each individual. Boundary: A/B optimization toward an honest goal, transparent and with guardrails, is legitimate conversion optimization; it tips into manipulation when an opaque model optimizes against each person\'s measured weaknesses and no one can explain or audit why a given person saw exactly what they saw.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'microtargeting'],
  },
  {
    id: 'aip-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze den Satz: Ein KI-System lernt aus den Reaktionen jedes einzelnen Nutzers laufend dazu und ___ — so spricht es jede Person anders und mit jeder Interaktion wirksamer an.',
      en: 'Complete the sentence: An AI system continuously learns from each individual user\'s reactions and ___ — this way it addresses every person differently and, with each interaction, more effectively.',
    },
    scenario: {
      de: 'Ein App-Assistent begleitet neue Nutzer durch das Onboarding und verändert dabei mit jeder Interaktion, wie er erklärt, motiviert und zum nächsten Schritt führt.',
      en: 'An in-app assistant guides new users through onboarding and, with every interaction, changes how it explains, motivates and leads to the next step.',
    },
    options: [
      { de: 'passt seine Argumente und sein Timing dabei selbstständig in Echtzeit an', en: 'autonomously adapts its arguments and timing in real time' },
      { de: 'ordnet seine Botschaften vorab festgelegten Datensegmenten zu', en: 'assigns its messages to predefined data segments' },
      { de: 'folgt dabei einer einmal gesetzten, für alle gleichen Voreinstellung', en: 'follows a once-set default that is the same for everyone' },
      { de: 'wiederholt dabei unverändert stets dieselbe Kernbotschaft', en: 'keeps repeating the very same core message unchanged' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus von KI-gestützter Persuasion ist genau das: ein Modell lernt fortlaufend aus dem Verhalten des Einzelnen und passt seine Ansprache adaptiv in Echtzeit an, statt einem starren Skript zu folgen. Microtargeting bräuchte feste, vorab gebildete Datensegmente mit vorgefertigten Botschaften — hier gibt es keine Segmente, sondern eine sich selbst anpassende Live-Konversation. Nudging wäre eine einmal gesetzte, für alle gleiche Voreinstellung, Repetition dieselbe, immer wiederholte Kernbotschaft — beides ist das Gegenteil einer sich kontinuierlich verändernden, individuellen Optimierung. Grenze: legitim, wenn offengelegt ist, dass eine KI assistiert, und die Anpassung dem Nutzer dient; manipulativ, wenn sie verdeckt die Live-Schwächen jedes Einzelnen ausnutzt.',
      en: 'The mechanism of AI-Powered Persuasion is exactly this: a model continuously learns from the individual\'s behaviour and adapts its approach in real time, instead of following a rigid script. Microtargeting would need fixed, pre-built data segments with ready-made messages — here there are no segments, but a self-adapting live conversation. Nudging would be a default set once and the same for everyone, and repetition the same core message hammered again and again — both are the opposite of a continuously changing, individual optimization. Boundary: legitimate when it is disclosed that an AI is assisting and the adaptation serves the user; manipulative when it covertly exploits each individual\'s live weaknesses.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'microtargeting'],
  },
  {
    id: 'aip-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als verantwortliche Kommunikationsprofi damit um?',
      en: 'As the responsible communications professional, how do you handle this?',
    },
    scenario: {
      de: 'Ein Anbieter verkauft dir eine KI-„Persuasion Engine": einen Chat-Agenten, der im Live-Gespräch die Mikro-Signale jedes Besuchers ausliest (Zögern, Stimmung, Tipp-Verhalten) und seine Argumente autonom anpasst, um Abschlüsse zu maximieren — inklusive eines Modus, der die spezifischen Zweifel jeder Person erkennt und gezielt darauf drückt. Das System ist eine Blackbox; der Anbieter kann nicht erklären, warum es im Einzelfall sagt, was es sagt.',
      en: 'A vendor is selling you an AI "persuasion engine": a chat agent that reads each visitor\'s micro-signals live (hesitation, sentiment, typing behaviour) and autonomously adapts its arguments to maximize sign-ups — including a mode that detects each person\'s specific doubts and deliberately presses on them. The system is a black box; the vendor cannot explain why it says what it says in a given case.',
    },
    options: [
      {
        de: 'Vor jedem Einsatz Transparenz und Leitplanken durchsetzen: offenlegen, dass eine KI antwortet, den Agenten auf ehrliche, nachvollziehbare Argumente begrenzen (kein gezieltes Ausnutzen erkannter Schwächen), Erklärbarkeit und Protokollierung sowie menschliche Aufsicht verlangen — denn ein undurchschaubarer Optimierer, der auf individuelle Schwachstellen drückt, riskiert Reaktanz-Backlash, Vertrauensverlust bei Aufdeckung und rechtliche Exposition (unlautere Geschäftspraktiken, Transparenz- und Manipulationsverbote des KI-Rechts).',
        en: 'Before any use, enforce transparency and guardrails: disclose that an AI is answering, limit the agent to honest, auditable arguments (no deliberate exploitation of detected weaknesses), require explainability and logging plus human oversight — because an opaque optimizer that presses on individual vulnerabilities risks reactance backlash, loss of trust if exposed, and legal exposure (unfair commercial practices, and the transparency and anti-manipulation rules of AI law).',
      },
      {
        de: 'Sofort einsetzen wie geliefert — die Engine konvertiert deutlich besser, und Wirksamkeit ist, was zählt.',
        en: 'Deploy it as delivered right away — the engine converts far better, and effectiveness is what counts.',
      },
      {
        de: 'Einsetzen, aber verschleiern, dass ein KI-Agent antwortet, damit die Besucher unbefangener reagieren und nicht in Abwehrhaltung gehen.',
        en: 'Deploy it, but hide that an AI agent is answering so visitors react more naturally and do not become defensive.',
      },
      {
        de: 'Einsetzen, den „Zweifel-erkennen-und-drücken"-Modus aber nur bei Besuchern mit hoher Kaufabsicht aktivieren, um die Exposition klein zu halten.',
        en: 'Deploy it, but switch on the "detect-and-press-on-doubts" mode only for high-intent visitors, to keep exposure small.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Engine ist KI-gestützte Persuasion im Lehrbuch: adaptiv, selbstoptimierend, in Echtzeit und personengenau. Der Mechanismus ist hochwirksam — genau deshalb entscheidet die ethische Grenze über die Zulässigkeit. Option 0 ist Best Practice: Offenlegung, Begrenzung auf ehrliche und prüfbare Argumente, Erklärbarkeit und menschliche Aufsicht; sie denkt zugleich die Second-Order-Effekte mit — Reaktanz (Menschen wehren sich, wenn sie manipulierten Druck spüren), Vertrauens- und Reputationsschaden bei Aufdeckung sowie rechtliche Risiken (das EU-KI-Recht untersagt KI-Systeme, die Schwächen ausnutzen oder verdeckt das Verhalten verzerren, und verlangt Transparenz bei Chatbots). Option 1 maximiert die Conversion und ignoriert Recht wie Backlash. Option 2 legt mit dem Verschweigen der KI eine zusätzliche Täuschungsschicht darüber und verschärft das Problem, statt es zu lösen. Option 3 verschätzt sich beim Risiko: Das gezielte Ausnutzen erkannter Zweifel bleibt manipulativ, egal auf wie kleines Segment man es verengt — kleiner heißt nicht sauberer. Grenze: ein offengelegter, hilfreicher KI-Assistent mit ehrlichen Argumenten ist legitim; ein verdeckter Optimierer, der die erkannten Schwachstellen des Einzelnen ausnutzt, überschreitet sie.',
      en: 'The engine is textbook AI-Powered Persuasion: adaptive, self-optimizing, real-time and per-person. The mechanism is highly effective — which is exactly why the ethical boundary decides admissibility. Option 0 is best practice: disclosure, limitation to honest and auditable arguments, explainability and human oversight; it also weighs the second-order effects — reactance (people push back when they sense manipulated pressure), trust and reputation damage on exposure, and legal risk (EU AI law prohibits AI systems that exploit vulnerabilities or covertly distort behaviour, and requires transparency for chatbots). Option 1 maximizes conversion while ignoring both law and backlash. Option 2 layers a further deception on top by concealing the AI and worsens the problem instead of solving it. Option 3 misjudges the risk: deliberately exploiting detected doubts stays manipulative no matter how small the segment it is narrowed to — smaller is not cleaner. Boundary: a disclosed, helpful AI assistant with honest arguments is legitimate; a covert optimizer that exploits an individual\'s detected vulnerabilities crosses the line.',
    },
    points: 15,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'digital_influence'],
  },
  {
    id: 'aip-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team baut ein KI-gestütztes Engagement-System für eine Fitness-Abo-App. Ein Baustein überschreitet die ethische und rechtliche Grenze von legitimer, hilfreicher KI-Persuasion hin zum Ausnutzen einer erkannten Schwachstelle. Welcher?',
      en: 'Your team is building an AI-driven engagement system for a fitness subscription app. One component crosses the ethical and legal line from legitimate, helpful AI persuasion into exploiting a detected vulnerability. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine des Systems:',
      en: 'Planned components of the system:',
    },
    options: [
      {
        de: 'Ein KI-Empfehlungssystem schlägt Workout-Inhalte auf Basis der selbst protokollierten Aktivität des Nutzers vor — mit sichtbarer Erklärung „Warum sehe ich das?".',
        en: 'An AI recommender suggests workout content based on the user\'s own logged activity — with a visible "Why am I seeing this?" explanation.',
      },
      {
        de: 'Eine Timing-Optimierung lernt, wann jeder Nutzer am ehesten tatsächlich trainiert, und legt die Erinnerungen genau in dieses Zeitfenster.',
        en: 'A send-time optimization learns when each user is most likely to actually work out, and places reminders exactly in that window.',
      },
      {
        de: 'Ein als KI ausgewiesener Chat-Coach passt seinen Ermutigungsstil an die selbst genannten Ziele des Nutzers an und gibt ehrliche, nachvollziehbare Hinweise.',
        en: 'A chat coach, disclosed as an AI, adapts its encouragement style to the user\'s stated goals and gives honest, auditable tips.',
      },
      {
        de: 'Ein Retention-Modell erkennt aus Nachrichten-Stimmung und nächtlicher Nutzung, wann ein Nutzer emotional am Boden ist, und löst genau in diesem Moment einen KI-personalisierten Upsell für ein Premium-Paket („Das hast du dir verdient") aus, der gezielt auf dieses Tief zielt.',
        en: 'A retention model detects from message sentiment and late-night usage when a user is emotionally low, and at exactly that moment triggers an AI-personalized upsell for a premium plan ("You deserve this") designed to target that dip.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitime KI-gestützte Persuasion ist transparent, einwilligungsbasiert, im Interesse des Nutzers und prüfbar: das erklärbare Empfehlungssystem, die im Nutzerinteresse liegende Timing-Optimierung und der offengelegte KI-Coach personalisieren und optimieren, ohne eine Schwachstelle auszunutzen. Baustein 4 überschreitet die Grenze: Er nutzt KI, um den momentanen emotionalen Tiefpunkt einer Einzelperson abzuleiten, und legt einen manipulativen Upsell genau auf diesen Moment — das ist die manipulative Kante von KI-Persuasion und höchstwahrscheinlich unzulässig. Abgeleitete emotionale bzw. Gesundheitszustände sind besondere Datenkategorien (Art. 9 DSGVO), und das EU-KI-Recht untersagt KI, die Schwächen ausnutzt, um Verhalten zu verzerren und Schaden anzurichten. Prüffragen an jeden Baustein: Ist er transparent, einwilligungsbasiert, im echten Interesse des Nutzers — und frei vom Ausnutzen einer erkannten Schwachstelle?',
      en: 'Legitimate AI-Powered Persuasion is transparent, consent-based, in the user\'s interest and auditable: the explainable recommender, the send-time optimization that serves the user\'s own interest, and the disclosed AI coach all personalize and optimize without exploiting a vulnerability. Component 4 crosses the line: it uses AI to infer an individual\'s momentary emotional low and drops a manipulative upsell onto exactly that moment — this is the manipulative edge of AI persuasion and most likely unlawful. Inferred emotional or health states are special-category data (GDPR Art. 9), and EU AI law prohibits AI that exploits vulnerabilities to distort behaviour and cause harm. The test for each component: is it transparent, consent-based, in the user\'s genuine interest — and free of exploiting a detected vulnerability?',
    },
    points: 15,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'microtargeting'],
  },
];
