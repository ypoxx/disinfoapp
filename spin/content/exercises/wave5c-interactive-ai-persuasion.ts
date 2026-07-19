// Welle 5c: 3 Übungen für interactive_ai_persuasion (Interaktive KI-Persuasion).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'moderate' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cInteractiveAiPersuasion: Exercise[] = [
  {
    id: 'wave5c-interactive_ai_persuasion-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der KI-Agent hier ein?',
      en: 'Which technique is the AI agent using here?',
    },
    scenario: {
      de: 'Live-Chat auf der Website eines Software-Anbieters: Ein KI-Vertriebsagent spricht mit einem zögernden Interessenten. Nennt dieser den Preis als Hürde, rechnet der Agent sofort einen ROI vor; verweist er auf ein Konkurrenzprodukt, kontert der Agent mit einem Funktionsvergleich; äußert er Sicherheitsbedenken, wechselt der Agent zu Zertifizierungen. Mit jeder Antwort des Interessenten formt der Bot sein nächstes Argument neu.',
      en: 'Live chat on a software vendor\'s website: an AI sales agent is talking to a hesitant prospect. When the prospect names price as a barrier, the agent immediately lays out an ROI; when he points to a competitor product, the agent counters with a feature comparison; when he raises security concerns, the agent switches to certifications. With every reply from the prospect, the bot reshapes its next argument.',
    },
    options: [
      { de: 'Interaktive KI-Persuasion', en: 'Interactive AI persuasion' },
      { de: 'AI Persuasion (statische KI-Texterzeugung)', en: 'AI persuasion (static AI-generated copy)' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Sycophancy (Schmeichel-Anpassung)', en: 'Sycophancy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Interaktive KI-Persuasion: Ein dialogfähiges KI-System reagiert im Gespräch auf jeden Einwand und schneidet sein nächstes Argument in Echtzeit darauf zu — Preis, Konkurrenz, Sicherheit lösen jeweils ein neu geformtes Gegenargument aus. Der Hebel liegt in der laufenden Anpassung im Dialog selbst: Das System lässt dem Interessenten keinen Einwand unbeantwortet und wird mit jeder Runde passgenauer. So nutzt du das professionell: Ein adaptiver Assistent, der ehrliche, prüfbare Argumente liefert, ist ein legitimes Beratungswerkzeug — kennzeichne ihn als KI, halte die Aussagen wahr und biete einen klaren Ausstieg zum Menschen. Daran erkennst du es und so entschärfst du es: Achte darauf, ob die Antworten mit jeder Runde persönlicher und passgenauer werden und ob jeder Einwand sofort ein neu zugeschnittenes Gegenargument auslöst — dann verlangsame die Entscheidung bewusst, hol eine unabhängige Quelle dazu und trenne das Angebot vom Gesprächssog. AI Persuasion wäre ein einmalig erzeugter, fixer Überzeugungstext ohne Reaktion auf Einwände — hier verändert sich die Argumentation aber Zug um Zug. Microtargeting würde die Botschaft vorab an Profildaten eines Segments ausrichten; der Bot reagiert dagegen live auf das, was gerade gesagt wird, nicht auf ein Profil. Sycophancy würde dem Interessenten nach dem Mund reden und zustimmen — der Agent widerspricht und kontert jedoch gezielt.',
      en: 'Interactive AI persuasion: a conversational AI system responds to each objection in the dialogue and tailors its next argument to it in real time — price, competitor and security each trigger a freshly shaped counter-argument. The lever is the live adaptation inside the conversation itself: the system leaves no objection unanswered and grows more precise with every round. Used legitimately: an adaptive assistant that offers honest, checkable arguments is a fair advisory tool — label it as AI, keep the statements truthful and provide a clear handoff to a human. To spot and counter it: watch whether the replies get more personal and better-fitting with every round and whether each objection instantly triggers a re-tailored rebuttal — then deliberately slow the decision, bring in an independent source and separate the offer from the pull of the conversation. AI persuasion would be a one-off, fixed piece of persuasive copy with no reaction to objections — here the argument shifts turn by turn. Microtargeting would pre-align the message to the profile data of a segment; the bot instead reacts live to what is being said, not to a profile. Sycophancy would flatter the prospect and agree with him — but the agent deliberately pushes back and counters.',
    },
    points: 10,
    primaryTechniqueId: 'interactive_ai_persuasion',
    relatedTechniques: ['interactive_ai_persuasion', 'ai_persuasion', 'microtargeting', 'sycophancy'],
  },
  {
    id: 'wave5c-interactive_ai_persuasion-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest den Kundenservice eines Streaming-Dienstes und sollst einen KI-Chatbot einführen, der kündigungswillige Abonnenten im Chat halten soll. Das Produktteam schlägt vor, der Bot solle sich als „Berater Max" ausgeben, ohne KI-Kennzeichnung, und seine Argumente laufend an die emotionale Reaktion des Kunden anpassen, bis dieser bleibt.',
      en: 'You are responsible for customer service at a streaming service and are meant to introduce an AI chatbot that keeps cancellation-minded subscribers in the chat. The product team proposes that the bot pose as "advisor Max", without any AI label, and continuously adapt its arguments to the customer\'s emotional reaction until he stays.',
    },
    options: [
      {
        de: 'Ich bestehe auf Transparenz: Der Bot wird klar als KI-Assistent gekennzeichnet, gibt sich nicht als Mensch aus, und ich definiere einen echten Opt-out plus Übergabe an einen Menschen. Das Optimierungsziel wird protokolliert, das gezielte Ausnutzen emotionaler Notlagen ist ausgeschlossen, und die Halte-Argumente bleiben wahr und prüfbar.',
        en: 'I insist on transparency: the bot is clearly labelled as an AI assistant, does not pose as a human, and I define a genuine opt-out plus handoff to a person. The optimisation target is logged, deliberately exploiting emotional distress is ruled out, and the retention arguments stay truthful and checkable.',
      },
      {
        de: 'Ich übernehme den Vorschlag — ein menschlich wirkender „Berater Max", der sich fein an die Stimmung anpasst, hält nachweislich mehr Kunden, und die Kennzeichnung würde den Effekt nur schwächen.',
        en: 'I adopt the proposal — a human-seeming "advisor Max" who finely adapts to the mood demonstrably keeps more customers, and a label would only weaken the effect.',
      },
      {
        de: 'Ich lasse die menschliche Persona „Berater Max" stehen, ergänze aber im Chat-Footer einen kleinen Hinweis „powered by KI" — damit ist die Transparenzpflicht formal erfüllt.',
        en: 'I keep the human persona "advisor Max" but add a small "powered by AI" note in the chat footer — that formally satisfies the transparency requirement.',
      },
      {
        de: 'Ich verbiete jeden Halte-Chatbot grundsätzlich: Ein KI-System, das seine Argumente an den Kunden anpasst, ist immer Manipulation, egal wie es gekennzeichnet ist.',
        en: 'I ban any retention chatbot on principle: an AI system that adapts its arguments to the customer is always manipulation, no matter how it is labelled.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag zielt auf interaktive KI-Persuasion in ihrer problematischen Form: ein System, das sich als Mensch tarnt und seine Argumente fortlaufend an die Emotion des Kunden anpasst, bis dieser bleibt. Der Mechanismus wirkt, weil verdeckte Herkunft, asymmetrisches Wissen und das Ausnutzen einer emotionalen Situation die Entscheidungsautonomie des Kunden untergraben. So setzt du es professionell ein: Ein adaptiver Assistent ist erlaubt — legitim wird er durch KI-Kennzeichnung, wahre und prüfbare Aussagen, einen echten Opt-out und die Übergabe an einen Menschen; das protokollierte Optimierungsziel hält die Verantwortlichkeit nachvollziehbar. Daran erkennst du es und so entschärfst du es: Prüf bei jedem Halte- oder Verkaufs-Bot, ob die Herkunft offengelegt ist, ob ein Ausstieg jederzeit möglich ist und ob emotionale Notlagen ausgenutzt werden — fehlt das, ist die Grenze zur Manipulation überschritten. Den Vorschlag zu übernehmen begeht genau diese Grenzüberschreitung: Die Tarnung als Mensch ist der Kern des Problems, nicht ein Bonus. Der Footer-Hinweis wirkt wie Transparenz, hebt die aktive Täuschung durch die Persona „Berater Max" aber nicht auf — das ist Feigenblatt statt Kennzeichnung. Jeden Halte-Bot pauschal zu verbieten überkorrigiert: Ein transparenter, ehrlicher adaptiver Assistent kann legitim sein; das Problem ist die verdeckte, emotionsausnutzende Ausführung, nicht die Anpassungsfähigkeit an sich.',
      en: 'The proposal aims at interactive AI persuasion in its problematic form: a system that disguises itself as human and continuously adapts its arguments to the customer\'s emotion until he stays. The mechanism works because hidden provenance, asymmetric knowledge and the exploitation of an emotional situation undermine the customer\'s autonomous decision-making. Used professionally: an adaptive assistant is permitted — it becomes legitimate through an AI label, truthful and checkable statements, a genuine opt-out and a handoff to a human; the logged optimisation target keeps accountability traceable. To spot and counter it: for any retention or sales bot, check whether the provenance is disclosed, whether an exit is available at any time and whether emotional distress is being exploited — if that is missing, the line into manipulation has been crossed. Adopting the proposal commits exactly that crossing: the human disguise is the core of the problem, not a bonus. The footer note looks like transparency but does not undo the active deception of the "advisor Max" persona — that is a fig leaf, not a label. Banning every retention bot wholesale overcorrects: a transparent, honest adaptive assistant can be legitimate; the problem is the covert, distress-exploiting execution, not adaptivity as such.',
    },
    points: 10,
    primaryTechniqueId: 'interactive_ai_persuasion',
    relatedTechniques: ['interactive_ai_persuasion', 'anthropomorphic_trust_cues', 'ai_persuasion'],
  },
  {
    id: 'wave5c-interactive_ai_persuasion-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Beratungs-Chat einer Krankenkasse: Eine Versicherte schreibt dem KI-Assistenten, sie zögere bei einem Präventionsprogramm. Auf ihre Sorge vor dem Zeitaufwand antwortet der Assistent mit flexiblen Terminen, auf ihre Angst vor schlechten Nachrichten mit Beispielen früh erkannter, gut behandelbarer Fälle — jede geäußerte Sorge lenkt das nächste Argument.',
      en: 'Advisory chat of a health insurer: an insured member tells the AI assistant she is hesitant about a prevention programme. To her worry about the time it takes, the assistant responds with flexible appointments; to her fear of bad news, with examples of early-detected, treatable cases — each voiced concern steers the next argument.',
    },
    options: [
      { de: 'Interaktive KI-Persuasion', en: 'Interactive AI persuasion' },
      { de: 'Anthropomorphic Trust Cues (menschenähnliche Vertrauenssignale)', en: 'Anthropomorphic trust cues' },
      { de: 'Sycophancy (Schmeichel-Anpassung)', en: 'Sycophancy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Interaktive KI-Persuasion: Hier überzeugt kein vorgefertigtes Merkblatt, sondern der Gesprächsverlauf selbst — der Assistent nimmt jede Sorge der Versicherten als Stichwort und formt daraus seinen nächsten Zug. Der Zeit-Einwand führt zu flexiblen Terminen, die Angst vor dem Ergebnis zu Fallbeispielen; die Argumentationslinie schreibt sich also erst im Dialog, geleitet von dem, was die Nutzerin gerade preisgibt. So nutzt du das professionell: Als evidenzbasierte, ehrliche Gesundheitsberatung mit KI-Kennzeichnung und Ausstiegsmöglichkeit ist ein solcher Assistent legitim und kann sogar berechtigte Sorgen abbauen. Daran erkennst du es: Das Muster verrät sich, wenn der Assistent nie bei einer Standard-Auskunft bleibt, sondern jede einzeln genannte Sorge aufgreift und in ein passendes Argument dreht. Willst du dich schützen, notier dir deine offenen Fragen vor dem Chat und gleiche die Antworten hinterher mit einer ärztlich unabhängigen Quelle ab, statt mitten im Gesprächsfluss zu entscheiden. Anthropomorphic Trust Cues wären menschenähnliche Signale (Name, Emojis, „Ich verstehe dich"), die Nähe und Vertrauen erzeugen — hier geht es aber nicht um das menschliche Auftreten, sondern um die inhaltliche Anpassung der Argumente an jeden Einwand. Sycophancy würde der Versicherten nach dem Mund reden und ihre Zurückhaltung bestätigen — der Assistent stimmt jedoch nicht zu, sondern überzeugt gezielt in Richtung Teilnahme.',
      en: 'Interactive AI persuasion: what persuades here is not a pre-written information sheet but the course of the conversation itself — the assistant takes each of the member\'s concerns as a cue and shapes its next move from it. The time objection leads to flexible appointments, the fear of the result to case examples; the line of argument is thus written only in the dialogue, guided by whatever the user reveals at that moment. Used legitimately: as evidence-based, honest health advice with an AI label and an exit option, such an assistant is fair and can even ease well-founded worries. To spot it: the pattern gives itself away when the assistant never settles for a standard answer but picks up every individually named concern and turns it into a fitting argument. To protect yourself, note your open questions before the chat and check the answers afterwards against a medically independent source, rather than deciding in the middle of the conversational flow. Anthropomorphic trust cues would be human-like signals (a name, emojis, "I understand you") that create closeness and trust — here it is not about the human appearance but about the content-level adaptation of the arguments to each objection. Sycophancy would tell the member what she wants to hear and affirm her reluctance — but the assistant does not agree; it deliberately persuades toward participation.',
    },
    points: 10,
    primaryTechniqueId: 'interactive_ai_persuasion',
    relatedTechniques: ['interactive_ai_persuasion', 'anthropomorphic_trust_cues', 'sycophancy'],
  },
];
