// Welle R4: 3 Übungen für anthropomorphic_trust_cues (Anthropomorphe Vertrauenssignale).
// Frontier-Eintrag: Übungen prüfen Begriffswissen und professionelles Handeln, keine Wirkbehauptungen.
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4AnthropomorphicTrustCues: Exercise[] = [
  {
    id: 'w4-anthropomorphic_trust_cues-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Gestaltungsmuster?',
      en: 'What is this design pattern called?',
    },
    scenario: {
      de: 'UX-Review vor dem Website-Relaunch eines Energieversorgers. Die Agentur-Beraterin → dich als Digitalverantwortlichen: Der neue Service-Chat meldet sich als „Emma" mit Porträtfoto, simulierten Tipppausen und Sätzen wie „Ich verstehe, wie frustrierend das für Sie ist". Nirgends steht, dass ein Sprachmodell antwortet — und auf die Testfrage „Bin ich hier mit einem Menschen verbunden?" antwortet der Chat: „Ich bin Emma, Ihre persönliche Ansprechpartnerin."',
      en: 'UX review ahead of a utility company\'s website relaunch. The agency consultant briefs you, the head of digital: the new service chat introduces itself as "Emma" with a headshot, simulated typing pauses, and lines like "I understand how frustrating this is for you". Nothing discloses that a language model is answering — and to the test question "Am I talking to a human?" the chat replies: "I\'m Emma, your personal point of contact."',
    },
    options: [
      { de: 'LLM Sycophancy', en: 'LLM sycophancy' },
      { de: 'Anthropomorphe Vertrauenssignale', en: 'Anthropomorphic trust cues' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
      { de: 'Automation Bias / Over-Reliance', en: 'Automation bias / over-reliance' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Anthropomorphe Vertrauenssignale: Name, Porträt, Tipppausen und Empathie-Vokabular inszenieren die Software als menschliches Gegenüber — solche Signale sollen Nutzer einladen, dem System Verständnis und Verlässlichkeit zuzuschreiben, während seine Grenzen unsichtbar bleiben; die ausweichende Antwort auf die Menschenfrage ist das klarste Indiz. Legitim einsetzen: Ein benannter, freundlich formulierender Bot ist gute Bedienbarkeit — solange er sich zu Gesprächsbeginn als KI zu erkennen gibt und keine Gefühle behauptet; je nach Markt verlangen Transparenzregeln genau das. Erkennen und kontern: Stell im Review die Menschenfrage als Standard-Testfall und prüfe, ob Kennzeichnung, Fähigkeitsgrenzen und Übergabe an Menschen im Dialog vorkommen — fehlt das, benennst du das Muster und forderst die Offenlegung nach. LLM Sycophancy wirkt plausibel, weil ein Service-Chat betroffen ist — sie bezeichnet aber inhaltliches Bestätigen von Nutzerpositionen; hier geht es um die Aufmachung, nicht um Antwortinhalte. Identitäts- und Herkunftstäuschung liegt nahe, weil der Absender verschleiert wirkt — sie täuscht jedoch über eine konkrete Herkunft: einen bestimmten (echten oder erfundenen) Absender mit vorgetäuschter Prüfspur, etwa eine namentlich benannte Expertin oder eine fremde Organisation. „Emma" beansprucht keine solche überprüfbare Identität, sondern verschleiert nur, dass überhaupt eine Maschine statt eines Menschen antwortet — die Täuschung betrifft die Kategorie Mensch-vs-Maschine, nicht die Quelle. Automation Bias beschreibt die Empfängerseite — die Neigung, automatisierten Ausgaben unkritisch zu folgen —, nicht das Gestaltungsmuster, das diese Neigung adressiert.',
      en: 'Anthropomorphic trust cues: the name, headshot, typing pauses, and empathy vocabulary stage the software as a human counterpart — cues meant to invite users to credit the system with understanding and reliability while its limits stay invisible; the evasive answer to the human question is the clearest tell. Used legitimately: a named, friendly-sounding bot is good usability — as long as it identifies itself as AI at the start of the conversation and claims no feelings; depending on the market, transparency rules require exactly that. To recognise and counter it: make the "am I talking to a human?" question a standard test case in every review and check whether disclosure, capability limits, and human handoff appear in the dialogue — if they are missing, name the pattern and insist on disclosure. LLM sycophancy looks plausible because a service chat is involved — but it refers to a model affirming user positions on the content level; this is about presentation, not answers. Identity and provenance deception seems close because the sender feels disguised — but it fakes a specific origin: a particular sender (real or invented) with a forged provenance trail, such as a named expert or a spoofed organisation. "Emma" claims no such verifiable identity — she merely conceals that a machine, not a human, is answering at all; the deception is about the human-vs-machine category, not the source. Automation bias describes the receiving side — the tendency to follow automated output uncritically — not the design pattern that plays to it.',
    },
    points: 10,
    primaryTechniqueId: 'anthropomorphic_trust_cues',
    relatedTechniques: ['anthropomorphic_trust_cues', 'sycophancy', 'identity_provenance_deception', 'automation_bias_overreliance'],
  },
  {
    id: 'w4-anthropomorphic_trust_cues-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Projektmeeting zum neuen Kundenservice-Bot eines Telekommunikationsanbieters. Der Vertriebsleiter des Chatbot-Anbieters → dich als Leiterin Unternehmenskommunikation: „Verzichten Sie auf die KI-Kennzeichnung und geben Sie dem Bot Vornamen, Foto und Gefühlssprache — je menschlicher er wirkt, desto höher die Akzeptanz. Das machen inzwischen alle so."',
      en: 'Project meeting on a telecoms provider\'s new customer service bot. The chatbot vendor\'s sales director addresses you, the head of corporate communications: "Drop the AI disclosure and give the bot a first name, a photo, and emotional language — the more human it feels, the higher the acceptance. Everyone does it this way now."',
    },
    options: [
      {
        de: 'Ich folge der Empfehlung — der Anbieter kennt seine Benchmarks, und ein nahbarer Bot zahlt direkt auf unsere Servicewahrnehmung ein.',
        en: 'I follow the recommendation — the vendor knows its benchmarks, and an approachable bot feeds straight into our service perception.',
      },
      {
        de: 'Ich trenne Persona und Täuschung: Name und freundlicher Ton bleiben, aber der Bot gibt sich zu Gesprächsbeginn als KI zu erkennen und benennt seine Grenzen samt Übergabe an Menschen.',
        en: 'I separate persona from deception: the name and friendly tone stay, but the bot identifies itself as AI at the start and states its limits, including human handoff.',
      },
      {
        de: 'Ich übernehme die volle menschliche Persona inklusive Foto und Gefühlssprache, platziere den KI-Hinweis aber in den FAQ und der Datenschutzerklärung — wer es genau wissen will, findet die Kennzeichnung dort.',
        en: 'I adopt the full human persona including photo and emotional language, but place the AI notice in the FAQ and the privacy policy — anyone who really wants to know can find the disclosure there.',
      },
      {
        de: 'Ich streiche jede Persona-Gestaltung: kein Name, kein Dialogton, nur ein Formularfeld mit Antworttext — so entsteht gar nicht erst ein falscher Eindruck.',
        en: 'I strip out all persona design: no name, no conversational tone, just a form field with a text response — that way no false impression can arise in the first place.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Vorschlag koppelt zwei Dinge, die getrennt gehören: eine zugängliche Persona und die Verschleierung, dass eine Maschine antwortet. Vermenschlichende Signale ohne Kennzeichnung sollen Nutzer dem System Eigenschaften zuschreiben lassen, die es nicht hat — genau dieser Teil ist das Problem, nicht der freundliche Ton. Legitim einsetzen: Name, klare Sprache und Dialogführung sind gute Bedienbarkeit; professionell wird die Persona durch Transparenz — KI-Kennzeichnung am Gesprächsstart, keine behaupteten Gefühle, benannte Grenzen und Übergabe an Menschen; je nach Markt verlangen Transparenzpflichten für KI-Systeme ohnehin die Offenlegung. Erkennen und kontern: Wenn ein Dienstleister fehlende Kennzeichnung als Akzeptanz-Hebel verkauft, benenne das Muster, verlange die Offenlegung als Abnahmekriterium und dokumentiere die Entscheidung — fliegt die Inszenierung später auf, trägt deine Marke den Vertrauensschaden. Der Empfehlung zu folgen wirkt plausibel, weil Akzeptanz ein legitimes Ziel ist — sie kauft die Nahbarkeit aber mit dem Täuschungselement ein, und „das machen alle so" ersetzt keine eigene Abwägung. Der FAQ-Hinweis klingt nach Kompromiss, verlegt die Offenlegung jedoch genau dorthin, wo sie im Gespräch niemand sieht — die Täuschung im Dialog bleibt. Die Radikallösung ohne jede Persona vermeidet zwar den falschen Eindruck, verwechselt aber das Täuschungselement mit der Gestaltung insgesamt und verschenkt legitime Bedienbarkeit.',
      en: 'The pitch bundles two things that belong apart: an approachable persona and concealing that a machine is answering. Humanizing cues without disclosure are meant to let users credit the system with qualities it does not have — that part is the problem, not the friendly tone. Used legitimately: a name, plain language, and conversational flow are good usability; what makes the persona professional is transparency — AI disclosure at the start of the conversation, no claimed feelings, stated limits, and human handoff; depending on the market, AI transparency obligations require disclosure anyway. To recognise and counter it: when a vendor sells missing disclosure as an acceptance lever, name the pattern, make disclosure an acceptance criterion, and document the decision — if the staging is exposed later, your brand carries the loss of trust. Following the recommendation looks plausible because acceptance is a legitimate goal — but it buys approachability with the deceptive element, and "everyone does it" is no substitute for your own judgement. The FAQ notice sounds like a compromise, yet moves the disclosure exactly where nobody sees it during the conversation — the deception in the dialogue remains. The radical no-persona option avoids the false impression but mistakes the deceptive element for the design as a whole and gives away legitimate usability.',
    },
    points: 10,
    primaryTechniqueId: 'anthropomorphic_trust_cues',
    relatedTechniques: ['anthropomorphic_trust_cues', 'social_proof'],
  },
  {
    id: 'w4-anthropomorphic_trust_cues-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Testanruf vor dem Go-live der Service-Hotline eines Krankenversicherers. Die Projektleiterin → dich als Sprecher: Der neue Voicebot meldet sich mit warmer Stimme, eingebauten Atempausen und „Schön, dass Sie anrufen — ich kümmere mich persönlich um Ihr Anliegen"; ein Hinweis, dass eine Software spricht, ist im Dialog nicht vorgesehen.',
      en: 'Test call before the go-live of a health insurer\'s service hotline. The project lead briefs you, the spokesperson: the new voicebot answers with a warm voice, built-in breathing pauses, and "So glad you called — I\'ll personally take care of your request"; the dialogue includes no notice that software is speaking.',
    },
    options: [
      { de: 'Voice Cloning / Vishing', en: 'Voice cloning / vishing' },
      { de: 'Anthropomorphe Vertrauenssignale', en: 'Anthropomorphic trust cues' },
      { de: 'Sympathie', en: 'Liking' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Anthropomorphe Vertrauenssignale: Warme Stimme, Atempausen und das Versprechen persönlicher Fürsorge inszenieren die Software als menschliche Ansprechpartnerin — solche Signale sollen Anrufern nahelegen, einem Automaten die Verlässlichkeit eines Menschen zuzuschreiben, während die fehlende Kennzeichnung den Maschinencharakter verdeckt. Legitim einsetzen: Eine angenehme, gut verständliche Stimme ist sinnvolles Voice-Design — professionell wird sie mit einer kurzen Offenlegung am Gesprächsbeginn („Sie sprechen mit dem digitalen Assistenten von …") und einem klaren Weg zu menschlichen Mitarbeitenden. Erkennen und kontern: Prüfe vor jedem Go-live, ob sich das System im ersten Satz zu erkennen gibt und was es auf die direkte Frage nach Mensch oder Maschine antwortet — fehlt beides, meldest du das als Abnahme-Blocker. Voice Cloning / Vishing wirkt plausibel, weil eine synthetische Stimme im Spiel ist — dort wird aber die Stimme einer realen, bestimmten Person nachgebildet, um sich als sie auszugeben; hier klingt die Stimme nur generisch menschlich. Sympathie liegt nahe, weil Wärme und Zuwendung gefallen sollen — das Prinzip beschreibt jedoch Zuneigung zu einer tatsächlichen Person als Überzeugungshebel, nicht die Inszenierung einer Maschine als Mensch.',
      en: 'Anthropomorphic trust cues: the warm voice, breathing pauses, and promise of personal care stage the software as a human agent — cues meant to invite callers to credit a machine with a human\'s reliability, while the missing disclosure keeps its machine nature hidden. Used legitimately: a pleasant, intelligible voice is sound voice design — it becomes professional with a brief disclosure at the start of the call ("You are speaking with the digital assistant of …") and a clear path to human staff. To recognise and counter it: before any go-live, check whether the system identifies itself in its first sentence and how it answers the direct human-or-machine question — if both are missing, flag it as a release blocker. Voice cloning / vishing looks plausible because a synthetic voice is involved — but there, the voice of a specific real person is replicated to impersonate them; here the voice merely sounds generically human. Liking seems close because warmth and attentiveness are meant to please — but that principle describes affection for an actual person as a persuasion lever, not staging a machine as a person.',
    },
    points: 10,
    primaryTechniqueId: 'anthropomorphic_trust_cues',
    relatedTechniques: ['anthropomorphic_trust_cues', 'voice_cloning_vishing', 'liking'],
  },
];
