// Welle 5b: 3 Übungen für but_you_are_free (BYAF).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bButYouAreFree: Exercise[] = [
  {
    id: 'wave5b-but_you_are_free-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Vertriebsmitarbeiter hier ein?',
      en: 'Which technique is the sales rep using here?',
    },
    scenario: {
      de: 'Messestand eines Software-Anbieters: Ein Vertriebsmitarbeiter bittet eine Standbesucherin, sich für den Fachnewsletter einzutragen, und sagt dabei: „Es ist völlig Ihre Entscheidung — Sie können jederzeit ablehnen, ich dränge Sie zu nichts." Ein Rabatt, eine Verknappung oder ein Vorab-Geschenk kommen nicht vor; die Bitte bleibt, wie sie ist — nur die Ablehnungsfreiheit wird ausdrücklich betont.',
      en: 'Trade-show booth of a software vendor: a sales rep asks a visitor to sign up for the specialist newsletter, adding: "It is entirely your decision — you can refuse at any time, I am not pushing you into anything." No discount, no scarcity, no upfront gift appears; the request stays exactly as it is — only the freedom to refuse is explicitly stressed.',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Nudging', en: 'Nudging' },
      { de: '„But You Are Free“ (BYAF)', en: '"But You Are Free" (BYAF)' },
      { de: 'Reverse Psychology', en: 'Reverse psychology' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'BYAF: An die Bitte ist ein ausdrücklicher Hinweis auf die Ablehnungsfreiheit angehängt („völlig Ihre Entscheidung", „Sie können jederzeit ablehnen") — dieser Zusatz ist der einzige neue Baustein, an der Bitte selbst ändert sich nichts. Der Hebel wirkt, weil die betonte Wahlfreiheit die Abwehrhaltung senkt: Wer sich nicht gedrängt fühlt, sagt eher zu. Legitim einsetzen: Menschen aufrichtig auf ihre Entscheidungsfreiheit hinzuweisen ist fair — sauber bleibt es, wenn die Freiheit real ist (echtes, leichtes Nein ohne Nachteil) und nicht nur als Compliance-Formel vorgeschoben wird. Erkennen und kontern: Blende den Freiheitszusatz aus und bewerte allein die Aufforderung — an der Sache ändert das „kein Druck" weder etwas zum Guten noch zum Schlechten. Die Reaktanz-Theorie ist der spiegelverkehrte Fall: Sie erzeugt Widerstand, indem sie Freiheit bedroht oder verbietet („Das dürfen Sie nicht") — hier wird Freiheit gerade zugesichert, nicht eingeschränkt. Nudging steuert über die Entscheidungsarchitektur (Voreinstellung, Anordnung, vorausgefülltes Feld) ohne Worte; hier ist am Umfeld nichts verändert, nur ein gesprochener Freiheitshinweis kommt hinzu. Reverse Psychology würde das Gegenteil des gewünschten Ziels empfehlen, um Trotz auszulösen („Der Newsletter ist ohnehin nichts für Sie") — hier bittet der Mitarbeiter aber aufrichtig um die Anmeldung und versichert nur die Ablehnungsfreiheit.',
      en: 'BYAF: an explicit reminder of the freedom to refuse is appended to the request ("entirely your decision", "you can refuse at any time") — that add-on is the only new element; the request itself does not change. The lever works because the emphasised freedom of choice lowers the reflex to resist: someone who does not feel pushed is more likely to agree. Used legitimately: sincerely reminding people of their freedom to choose is fair — it stays clean when the freedom is real (a genuine, easy no with no penalty) rather than tacked on as a compliance formula. To spot and counter it: set the freedom add-on aside and judge the request on its own — the "no pressure" line makes the substance neither better nor worse. Reactance theory is the mirror image: it creates resistance by threatening or banning freedom ("you may not do that") — here freedom is granted, not restricted. Nudging steers through choice architecture (a default, a layout, a pre-ticked box) without words; here nothing in the environment is changed, only a spoken freedom cue is added. Reverse psychology would recommend the opposite of the desired goal to provoke defiance ("the newsletter probably isn\'t for you anyway") — but here the rep sincerely asks for the sign-up and merely affirms the freedom to refuse.',
    },
    points: 10,
    primaryTechniqueId: 'but_you_are_free',
    relatedTechniques: ['but_you_are_free', 'reactance_theory', 'nudging'],
  },
  {
    id: 'wave5b-but_you_are_free-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Telefonat mit einer Partneragentur: Der Account-Direktor bittet dich als Kommunikationsleiter, die Freigabe für eine Case Study mit eurem Firmennamen bis morgen zu erteilen: „Sie sind natürlich völlig frei, Nein zu sagen — ganz Ihre Entscheidung, kein Druck." Du merkst, wie die betonte Ablehnungsfreiheit deine Abwehr sinken lässt.',
      en: 'Phone call with a partner agency: the account director asks you, as head of communications, to sign off a case study naming your company by tomorrow: "You are of course entirely free to say no — completely your decision, no pressure." You notice the emphasised freedom to refuse lowering your guard.',
    },
    options: [
      {
        de: 'Ich sage spontan zu — dass er ausdrücklich mein Nein akzeptiert, zeigt ja, dass er fair verhandelt und ich ihm vertrauen kann.',
        en: 'I agree on the spot — the fact that he expressly accepts my no shows he negotiates fairly and I can trust him.',
      },
      {
        de: 'Ich trenne den Freiheitshinweis von der Sache und entscheide über die Freigabe allein an den Fakten — Richtigkeit, Vertraulichkeit, Timing —, als hätte er das „kein Druck" nie gesagt.',
        en: 'I separate the freedom cue from the substance and decide on the sign-off purely on the facts — accuracy, confidentiality, timing — as if he had never said "no pressure".',
      },
      {
        de: 'Ich lehne schon deshalb ab, weil er betont, ich sei frei — solche Sätze sind immer ein Manipulationsversuch.',
        en: 'I refuse for the very reason that he stresses I am free — lines like that are always a manipulation attempt.',
      },
      {
        de: 'Ich bitte um mehr Bedenkzeit — dass er mir das Nein so ausdrücklich zugesteht, hat mich ohnehin schon für ihn eingenommen.',
        en: 'I ask for more time to think it over — the way he so expressly grants me the right to say no has already won me over to him anyway.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Zusatz „ganz Ihre Entscheidung, kein Druck" ist BYAF: Er begleitet eine konkrete Bitte und soll deinen Widerstand senken, ohne die Sache selbst besser zu machen. Die beste Reaktion entzieht dem Hebel die Wirkung: Du misst die Freigabe allein an prüfbaren Kriterien — Richtigkeit, Vertraulichkeit, Frist — und lässt den Tonfall der Bitte außen vor. Legitim einsetzen: Jemanden aufrichtig auf seine Wahlfreiheit hinzuweisen ist völlig in Ordnung — der Unterschied ist, ob die Freiheit echt ist oder nur vor eine Bitte gesetzt wird, um die Zustimmung wahrscheinlicher zu machen. Erkennen und kontern: Trenne die Freiheitszusage von der Aufgabe und beurteile die Bitte an der Substanz, nicht am Ton. Spontan zuzusagen (Option 1) verwechselt die höfliche Freiheitsformel mit einem Vertrauensbeweis — genau darauf zielt BYAF. Aus Prinzip abzulehnen, weil er das Wort „frei" benutzt (Option 3), ist Reaktanz auf eigene Kosten: Du entscheidest dann gegen die Sache, statt über sie, und lehnst womöglich eine gute Case Study ab. Um mehr Bedenkzeit zu bitten, weil sein betontes Nein-Dürfen dich schon eingenommen hat (Option 4), ist die leise Variante des Nachgebens: Der Freiheitshinweis hat dann bereits gewirkt und schiebt dich Richtung Ja, obwohl sich an Richtigkeit, Vertraulichkeit und Frist nichts geändert hat.',
      en: 'The add-on "completely your decision, no pressure" is BYAF: it accompanies a concrete request and is meant to lower your resistance without making the matter itself any better. The best response strips the lever of its effect: you measure the sign-off purely against testable criteria — accuracy, confidentiality, deadline — and leave the tone of the request aside. Used legitimately: sincerely reminding someone of their freedom to choose is perfectly fine — the difference is whether the freedom is real or merely placed in front of a request to make a yes more likely. To spot and counter it: separate the freedom pledge from the task and judge the request on its substance, not its tone. Agreeing on the spot (option 1) mistakes the polite freedom formula for proof of trustworthiness — which is exactly what BYAF aims for. Refusing on principle because he used the word "free" (option 3) is reactance at your own expense: you then decide against the matter instead of on it, and may turn down a good case study. Asking for more time because his emphasised right-to-refuse has already won you over (option 4) is the quiet version of giving in: the freedom cue has already done its work and nudges you toward yes, even though nothing about accuracy, confidentiality or deadline has changed.',
    },
    points: 10,
    primaryTechniqueId: 'but_you_are_free',
    relatedTechniques: ['but_you_are_free', 'reactance_theory'],
  },
  {
    id: 'wave5b-but_you_are_free-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Spendenbrief einer Hilfsorganisation, letzter Absatz: „Ob Sie diesen Aufruf unterstützen, ist ganz allein Ihre Entscheidung — Sie sind völlig frei, ihn beiseitezulegen." Betrag und Zweck stehen unverändert im Brief; hinzugekommen ist allein der Hinweis auf die freie Ablehnung.',
      en: 'Fundraising letter from a charity, final paragraph: "Whether you support this appeal is entirely your own decision — you are completely free to set it aside." The amount and purpose stand unchanged in the letter; all that has been added is the reminder that you may freely refuse.',
    },
    options: [
      { de: '„But You Are Free“ (BYAF)', en: '"But You Are Free" (BYAF)' },
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Door-in-the-Face', en: 'Door-in-the-Face' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'BYAF: Die Bitte um Unterstützung ist um einen ausdrücklichen Freiheitshinweis ergänzt („ganz allein Ihre Entscheidung", „völlig frei, ihn beiseitezulegen") — der einzige Zusatz, während Betrag und Zweck gleich bleiben. Der Hebel setzt darauf, dass die betonte Ablehnungsfreiheit den Widerstand senkt und die Zustimmung so wahrscheinlicher macht. Legitim einsetzen: Einen echten Freiwilligkeitshinweis zu geben ist seriös — solange das Nein tatsächlich folgenlos möglich ist und der Satz nicht bloß als Zustimmungs-Trick vorgeschaltet wird. Erkennen und kontern: Beurteile den Spendenzweck und den Betrag für sich, so als stünde der Freiheitssatz nicht im Brief — der Hinweis erleichtert dir das Ja, ändert aber nichts an der eigentlichen Bitte. Die Reaktanz-Theorie wäre das Gegenteil: Sie erzeugt Trotz, indem sie Freiheit einschränkt oder verbietet; hier wird Freiheit ausdrücklich zugesichert. Door-in-the-Face bräuchte eine vorgeschaltete, bewusst überzogene erste Bitte, auf die die kleinere eigentliche folgt — im Brief steht aber nur eine einzige, unveränderte Bitte.',
      en: 'BYAF: the request for support is supplemented with an explicit freedom cue ("entirely your own decision", "completely free to set it aside") — the only addition, while amount and purpose stay the same. The lever relies on the emphasised freedom to refuse lowering resistance and thereby making a yes more likely. Used legitimately: giving a genuine reminder of voluntariness is sound practice — as long as the no really is possible without penalty and the line is not just front-loaded as a consent trick. To spot and counter it: judge the cause and the amount on their own, as if the freedom line were not in the letter — the cue makes the yes easier for you but changes nothing about the actual request. Reactance theory would be the opposite: it breeds defiance by restricting or banning freedom; here freedom is expressly granted. Door-in-the-Face would need a deliberately oversized first request preceding the smaller real one — but the letter contains only a single, unchanged request.',
    },
    points: 10,
    primaryTechniqueId: 'but_you_are_free',
    relatedTechniques: ['but_you_are_free', 'reactance_theory'],
  },
];
