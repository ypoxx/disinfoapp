import type { Exercise } from '../../types';

// synthetic_media — Phase 3 densification batch.
export const syntheticMediaP3Exercises: Exercise[] = [
  {
    id: 'sy-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist der primäre Treiber der Überzeugungskraft dieser Kampagne?',
      en: 'Which technique is the primary driver of this campaign’s persuasive force?',
    },
    scenario: {
      de: 'Über zwei Wochen posten dutzende neu angelegte Accounts immer wieder dasselbe fotorealistische, KI-generierte Bild, das angeblich austretenden giftigen Schlamm direkt neben dem neuen Werk deines Kunden zeigt. Die Bildunterschriften warnen eindringlich vor Gefahren für die Gesundheit spielender Kinder in der Nachbarschaft. Durch die ständige Wiederholung in vielen Feeds wirkt die Behauptung schnell wie belegt — und weil das Bild täuschend echt aussieht, finden Faktenchecker zunächst keinen Ansatzpunkt, es zu entkräften. Die gesamte Empörung stützt sich auf dieses eine „Beweisfoto".',
      en: 'Over two weeks, dozens of newly created accounts repeatedly post the same photorealistic, AI-generated image supposedly showing toxic sludge leaking right next to your client’s new plant. The captions warn urgently about dangers to the health of children playing in the neighbourhood. The constant repetition across many feeds quickly makes the claim feel proven — and because the image looks deceptively real, fact-checkers initially find no foothold to debunk it. The entire outrage rests on this single “evidence photo”.',
    },
    options: [
      {
        de: 'Synthetische Medien — das KI-gefälschte „Beweisfoto" liefert die scheinbar konkrete Faktenbasis, auf der alles andere aufsetzt',
        en: 'Synthetic media — the AI-faked “evidence photo” supplies the seemingly concrete factual basis everything else builds on',
      },
      {
        de: 'Emotionaler Appell — die geschürte Angst um die Gesundheit der Kinder',
        en: 'Emotional appeal — the stoked fear for the children’s health',
      },
      {
        de: 'Illusorischer Wahrheitseffekt — die ständige Wiederholung lässt die Behauptung wahr wirken',
        en: 'Illusory truth effect — the constant repetition makes the claim feel true',
      },
      {
        de: 'Social Proof — viele Accounts, die dasselbe teilen, suggerieren einen Konsens',
        en: 'Social proof — many accounts sharing the same thing suggest a consensus',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Alle vier Techniken sind präsent — aber synthetische Medien sind der tragende Treiber. Das fotorealistische KI-Bild ist die einzige „Evidenz" der Kampagne; es verwandelt eine bloße Behauptung in etwas scheinbar Sichtbares („seeing is believing"). Genau darauf setzen die anderen Hebel erst auf: Die Angst (emotionaler Appell) richtet sich auf das, was das Bild zu zeigen scheint; die Wiederholung (illusorischer Wahrheitseffekt) wiederholt eben dieses Bild; der Social Proof entsteht, weil viele dasselbe Bild teilen. Nimm das gefälschte Foto weg, und es bleibt nichts zum Fürchten, Wiederholen oder Teilen — die Kampagne bricht zusammen. Deshalb ist synthetische Medien der primäre Treiber, während Emotion, Wiederholung und Social Proof nur Verstärker sind. Die Grenze: KI-generierte Bilder sind als offen gekennzeichnete Illustration oder Simulation legitim; manipulativ (und hier rechtlich heikel — üble Nachrede, Persönlichkeits- und Wettbewerbsrecht) wird es, sobald ein erfundenes Bild als echtes Beweisfoto ausgegeben wird.',
      en: 'All four techniques are present — but synthetic media is the load-bearing driver. The photorealistic AI image is the campaign’s only “evidence”; it turns a mere assertion into something seemingly visible (“seeing is believing”). That is exactly what the other levers build on: the fear (emotional appeal) attaches to what the image appears to show; the repetition (illusory truth effect) repeats that very image; the social proof arises because many share the same image. Remove the faked photo and there is nothing left to fear, repeat or share — the campaign collapses. That is why synthetic media is the primary driver, while emotion, repetition and social proof are only amplifiers. The boundary: AI-generated images are legitimate as an openly labelled illustration or simulation; it becomes manipulative (and here legally fraught — defamation, personality and competition law) the moment an invented image is passed off as a genuine evidence photo.',
    },
    points: 20,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'emotional_appeal', 'illusory_truth_effect', 'social_proof'],
  },
  {
    id: 'sy-p3-2',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Deine Agentur plant eine Produktkampagne mit KI-gestützten Medien-Werkzeugen. Welches geplante Element überschreitet die ethische und rechtliche Grenze?',
      en: 'Your agency is planning a product campaign using AI-assisted media tools. Which planned element crosses the ethical and legal line?',
    },
    scenario: {
      de: 'Geplante Bausteine der Kampagne:',
      en: 'Planned components of the campaign:',
    },
    options: [
      {
        de: 'Ein KI-generiertes Cartoon-Maskottchen als Sympathiefigur des Spots — erkennbar eine Illustration, nicht als reale Person ausgegeben.',
        en: 'An AI-generated cartoon mascot as the ad’s friendly figure — clearly an illustration, not passed off as a real person.',
      },
      {
        de: 'Eine lizenzierte, KI-synthetisierte Erzählstimme, im Abspann klar als „KI-generierte Stimme" gekennzeichnet.',
        en: 'A licensed, AI-synthesised narrator voice, clearly labelled “AI-generated voice” in the credits.',
      },
      {
        de: 'Ein Deepfake einer real existierenden, prominenten Schauspielerin, die das Produkt scheinbar begeistert empfiehlt — ohne ihre Einwilligung erstellt und als echtes Testimonial ausgespielt.',
        en: 'A deepfake of a real, well-known actress seemingly endorsing the product enthusiastically — created without her consent and run as a genuine testimonial.',
      },
      {
        de: 'KI-gestütztes Hochskalieren und Farbkorrektur der eigenen, echten Produktfotos für schärfere Anzeigen.',
        en: 'AI-assisted upscaling and colour correction of the company’s own, real product photos for sharper ads.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Baustein 3 (Index 2) überschreitet die Grenze: Ein Deepfake einer real existierenden Person, ohne deren Einwilligung erstellt und als echtes Testimonial ausgegeben, täuscht das Publikum und verletzt zugleich Persönlichkeits- und Bildrechte (Recht am eigenen Bild und an der eigenen Stimme) — es ist eine erfundene Empfehlung, die es nie gab. Der Kontrast ist die eigentliche Lernpointe: KI-generierte Medien sind nicht per se unethisch. Das Cartoon-Maskottchen (Index 0) gibt sich nicht als reale Person aus; die synthetische Erzählstimme (Index 1) ist offen als KI gekennzeichnet und lizenziert; das Hochskalieren eigener echter Fotos (Index 3) verändert keine Tatsachen, sondern verbessert nur die Bildqualität. Prüffragen für die Grenze: Wird eine reale Person ohne Einwilligung nachgebildet? Wird das Synthetische als echt ausgegeben? Fehlt eine Kennzeichnung? Nur wenn ja, ist die Linie überschritten.',
      en: 'Component 3 (index 2) crosses the line: a deepfake of a real, living person, created without her consent and passed off as a genuine testimonial, deceives the audience and simultaneously violates personality and likeness rights (the right to one’s own image and voice) — it is an invented endorsement that never happened. The contrast is the real teaching point: AI-generated media is not unethical per se. The cartoon mascot (index 0) does not pretend to be a real person; the synthetic narrator voice (index 1) is openly labelled as AI and licensed; upscaling the company’s own real photos (index 3) changes no facts, it only improves image quality. Boundary test questions: is a real person being reproduced without consent? Is the synthetic content passed off as real? Is a disclosure missing? Only if yes is the line crossed.',
    },
    points: 15,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'sy-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'Which technique is being used here?',
    },
    scenario: {
      de: 'In der Finanzabteilung geht eine Sprachnachricht ein, die exakt wie euer CFO klingt und zur sofortigen Überweisung auf ein neues Konto auffordert. Später stellt sich heraus: Die Stimme wurde mit einem KI-Stimmklon-Werkzeug aus öffentlichen Interview-Aufnahmen erzeugt — der CFO hat nie gesprochen.',
      en: 'The finance department receives a voice message that sounds exactly like your CFO, urging an immediate transfer to a new account. It later turns out the voice was generated with an AI voice-cloning tool from public interview recordings — the CFO never spoke.',
    },
    options: [
      { de: 'Synthetische Medien', en: 'Synthetic media' },
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'KI-Persuasion', en: 'AI persuasion' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein klarer Fall synthetischer Medien: Ein KI-Werkzeug hat eine täuschend echte Stimmkopie (Voice Clone) einer realen Person erzeugt — ein künstlich hergestelltes Medienartefakt, das als echt ausgegeben wird. Der Hebel: Wir vertrauen einer vertrauten Stimme fast automatisch. Legitim sind synthetische Stimmen, wenn sie gekennzeichnet und mit Einwilligung genutzt werden (etwa eine lizenzierte KI-Erzählstimme); hier dienen sie der Täuschung und dem Betrug. Visuelle Manipulation passt nicht, weil gar nichts Visuelles im Spiel ist — es geht um Audio. KI-Persuasion würde bedeuten, dass eine KI mit Argumenten überzeugt; hier wird jedoch kein Argument gebaut, sondern eine Identität gefälscht. Ein emotionaler Appell würde gezielt Gefühle ansprechen — die Nachricht wirkt allein über die vorgetäuschte Identität der Stimme.',
      en: 'This is a clear case of synthetic media: an AI tool produced a deceptively real voice copy (voice clone) of a real person — an artificially manufactured media artifact passed off as genuine. The lever: we trust a familiar voice almost automatically. Synthetic voices are legitimate when labelled and used with consent (e.g. a licensed AI narrator); here they serve deception and fraud. Visual manipulation does not fit, because nothing visual is involved — this is audio. AI persuasion would mean an AI convincing through arguments; here no argument is built, an identity is faked. An emotional appeal would deliberately target feelings — the message works purely through the faked identity of the voice.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media'],
  },
  {
    id: 'sy-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt dieses Vorgehen vor allem?',
      en: 'Which technique primarily shapes this approach?',
    },
    scenario: {
      de: 'Ein Hochwasser hat eure Lagerhalle tatsächlich geflutet, und im Netz kursieren Gerüchte über einen Lieferstopp. Um zu beruhigen, gibt euer Team keine echten Fotos frei und retuschiert auch keine — stattdessen erzeugt es mit einem Text-zu-Bild-Generator komplett neue, fotorealistische Aufnahmen einer trockenen, voll funktionierenden Halle und postet sie als „aktuelle Bilder von heute Morgen".',
      en: 'A flood has actually inundated your warehouse, and rumours of a delivery halt are circulating online. To reassure people, your team releases no real photos and retouches none either — instead it uses a text-to-image generator to create entirely new, photorealistic shots of a dry, fully operational hall and posts them as “current pictures from this morning”.',
    },
    options: [
      { de: 'Synthetische Medien', en: 'Synthetic media' },
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der dominante Hebel ist synthetische Medien: Die Bilder wurden vollständig von einer KI aus dem Nichts erzeugt und als echte, aktuelle Fotos ausgegeben. Genau hier verläuft die feine Grenze zur visuellen Manipulation, dem naheliegendsten Fehlgriff: Visuelle Manipulation bearbeitet, beschneidet oder entkontextualisiert echtes Bildmaterial (etwa ein altes trockenes Foto als „heute" ausgeben). Hier gibt es aber kein echtes Ausgangsbild, das verändert wird — der Inhalt ist komplett KI-generiert. Der Text sagt es ausdrücklich: nichts wird retuschiert, alles wird neu erzeugt. Priming (das Vorbereiten von Assoziationen durch vorgeschaltete Reize) und emotionaler Appell (gezieltes Ansprechen von Gefühlen) beschreiben das Vorgehen nicht — es geht um das Fälschen des Medienartefakts selbst. Die Grenze: KI-Bilder als gekennzeichnete Illustration sind legitim; als angebliche Echtaufnahmen eines nicht existierenden Zustands sind sie Täuschung.',
      en: 'The dominant lever is synthetic media: the images were generated wholly by an AI from nothing and passed off as genuine, current photos. This is exactly where the fine line to visual manipulation runs — the most tempting miss: visual manipulation edits, crops or decontextualises real footage (e.g. presenting an old dry photo as “today”). Here, however, there is no genuine source image being altered — the content is entirely AI-generated. The text says so explicitly: nothing is retouched, everything is newly created. Priming (preparing associations through prior cues) and emotional appeal (deliberately targeting feelings) do not describe this move — it is about faking the media artifact itself. The boundary: AI images as a labelled illustration are legitimate; as supposed genuine shots of a state that does not exist, they are deception.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'sy-p3-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie entscheidest du als Kommunikationsverantwortliche?',
      en: 'As the communications lead, how do you decide?',
    },
    scenario: {
      de: 'Eure Agentur schlägt vor, ein KI-„Testimonial" eures inzwischen zurückgezogenen, aber lebenden Firmengründers zu produzieren: Ein Deepfake soll ihn Sätze sagen lassen, die er nie geäußert hat, um das neue Produkt zu empfehlen — ausgespielt als echtes Video-Testimonial. Der Gründer weiß nichts davon.',
      en: 'Your agency proposes producing an AI “testimonial” of your now-retired but living company founder: a deepfake would have him say sentences he never uttered, endorsing the new product — run as a genuine video testimonial. The founder knows nothing about it.',
    },
    options: [
      {
        de: 'Ich lehne es ab, ihm erfundene Worte in den Mund zu legen. Wollen wir seine Empfehlung, nehmen wir ein echtes, von ihm freigegebenes Testimonial auf — oder nutzen, nur mit seiner ausdrücklichen, informierten Einwilligung, einen klar als KI-Rekonstruktion gekennzeichneten Avatar. Ein als echt inszeniertes, erfundenes Testimonial einer realen Person täuscht das Publikum, verletzt seine Persönlichkeits- und Bildrechte und fliegt bei Aufdeckung als Vertrauensbruch auf.',
        en: 'I refuse to put fabricated words in his mouth. If we want his endorsement, we record a genuine testimonial he signs off on — or, only with his explicit, informed consent, use an avatar clearly labelled as an AI reconstruction. A fabricated testimonial of a real person staged as genuine deceives the audience, violates his personality and likeness rights, and — once exposed — blows up as a breach of trust.',
      },
      {
        de: 'Ich gebe das Deepfake frei, setze aber einen kleinen Hinweis „enthält KI-Elemente" in den Abspann — die Reichweite ist es wert.',
        en: 'I approve the deepfake but add a small “contains AI elements” note in the credits — the reach is worth it.',
      },
      {
        de: 'Ich lasse es zunächst nur in einem kleinen A/B-Test laufen, um zu sehen, ob überhaupt jemand die Fälschung bemerkt, bevor wir breiter ausspielen.',
        en: 'I first run it only in a small A/B test to see whether anyone even notices the fake before rolling it out more widely.',
      },
      {
        de: 'Ich gebe es frei, weil er eine öffentliche Person ist und die Worte zu Ansichten passen, die er früher vertreten hat — das ist gedeckt.',
        en: 'I approve it because he is a public figure and the words match views he expressed before — that’s covered.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) verbindet Wirksamkeit, Ethik und Recht sauber: Sie verzichtet darauf, einer realen Person erfundene Aussagen unterzuschieben, und bietet den legitimen Weg an — ein echtes, freigegebenes Testimonial oder ein transparent gekennzeichneter Avatar mit informierter Einwilligung. Der Mechanismus synthetischer Medien ist mächtig, weil ein Video „echter" wirkt als jede bloße Behauptung; genau deshalb ist die Grenze hier scharf. Option 2 gibt vor, Transparenz zu schaffen, doch ein versteckter Abspann-Hinweis macht ein als echt inszeniertes Testimonial nicht ehrlich — und die fehlende Einwilligung bleibt. Option 3 entlarvt sich selbst: Wer testet, „ob jemand die Fälschung bemerkt", gibt zu, dass getäuscht werden soll. Option 4 verwechselt „öffentliche Person" mit „Freiwild" — auch bei Prominenten braucht es eine Einwilligung; erfundene Zitate sind weder rechtlich gedeckt noch ehrlich, selbst wenn sie zu früheren Ansichten passen. Die Grenze: eine echte Empfehlung einholen ja, eine erfundene fabrizieren nein.',
      en: 'Only option 1 (index 0) cleanly combines effectiveness, ethics and law: it declines to attribute fabricated statements to a real person and offers the legitimate route — a genuine, signed-off testimonial or a transparently labelled avatar with informed consent. The synthetic-media mechanism is powerful because a video feels “more real” than any mere assertion; that is exactly why the boundary is sharp here. Option 2 pretends to create transparency, but a buried credits note does not make a testimonial staged as genuine honest — and the missing consent remains. Option 3 exposes itself: testing “whether anyone notices the fake” admits the intent to deceive. Option 4 confuses “public figure” with “fair game” — even for celebrities you need consent; invented quotes are neither legally covered nor honest, even if they match earlier views. The boundary: obtaining a genuine endorsement, yes; fabricating an invented one, no.',
    },
    points: 15,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'authority'],
  },
];
