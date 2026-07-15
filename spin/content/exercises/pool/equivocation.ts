import type { Exercise } from '../../types';

// equivocation — Phase 2 content batch.
export const equivocationExercises: Exercise[] = [
  {
    id: 'eq-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter dieser Argumentation?',
      en: 'Which technique is behind this line of argument?',
    },
    scenario: {
      de: 'In einem Werbespot heißt es: „Unsere Creme enthält nur natürliche Inhaltsstoffe — und was natürlich ist, ist gut für die Haut. Also ist unsere Creme natürlich unbedenklich."',
      en: 'An ad says: "Our cream contains only natural ingredients — and what is natural is good for your skin. So our cream is naturally harmless."',
    },
    options: [
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Wiederholung', en: 'Repetition' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Äquivokation: Das Wort „natürlich" wechselt mitten in der Argumentation seine Bedeutung — erst „aus der Natur stammend" (Inhaltsstoffe), dann „gut/unbedenklich". Aus „natürlich = pflanzlich" wird unbemerkt „natürlich = harmlos", obwohl das eine nicht aus dem anderen folgt. Der Hebel wirkt, weil unser Gehirn denselben Begriff automatisch für dieselbe Bedeutung hält. Legitim ist es, „natürlich" durchgängig in einer festen Bedeutung zu verwenden; manipulativ wird es, sobald die Bedeutung gleitet, um einen Schluss zu erzwingen. Framing wäre dieselbe Information positiv oder negativ dargestellt, Priming würde vorab Assoziationen aktivieren, und Wiederholung würde allein durch Häufigkeit wirken — hier trägt aber der Bedeutungswechsel des einen Wortes die Täuschung.',
      en: 'This is equivocation: the word "natural" shifts meaning mid-argument — first "derived from nature" (ingredients), then "good/harmless". "Natural = plant-based" quietly becomes "natural = harmless", even though one does not follow from the other. The lever works because our brain automatically assumes the same word keeps the same meaning. Using "natural" consistently in one fixed sense is legitimate; it turns manipulative the moment the meaning slides to force a conclusion. Framing would be the same information shown positively or negatively, priming would pre-activate associations, and repetition would work through sheer frequency — but here the deception rides on the meaning shift of a single word.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'framing'],
  },
  {
    id: 'eq-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'Auf einem neuen Getränkebecher steht groß: „100 % recycelbar". Im Kampagnentext heißt es dann: „Recycelbar bedeutet: Dieser Becher wird wieder zu einem neuen Becher — mit jedem Kauf tust du also aktiv etwas für die Umwelt." Technisch besagt „recycelbar" jedoch nur, dass der Becher grundsätzlich wiederverwertet werden könnte; ob er es tatsächlich wird, hängt von Sammelsystemen ab, die vielerorts fehlen.',
      en: 'A new drink cup is labelled in large type: "100% recyclable". The campaign text then says: "Recyclable means: this cup becomes a new cup again — so with every purchase you are actively doing something for the environment." Technically, however, "recyclable" only says that the cup could in principle be reprocessed; whether it actually is depends on collection systems that are missing in many places.',
    },
    options: [
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Äquivokation: Der Schlüsselbegriff „recycelbar" trägt eine technische Bedeutung — „grundsätzlich wiederverwertbar" —, wird im Kampagnentext aber ausdrücklich in die Alltagsbedeutung „wird recycelt / ist umweltfreundlich" umgedeutet („Recycelbar bedeutet: wird wieder zu einem neuen Becher"). Genau dieser stille Sprung von der Kann-Bedeutung zur Ist-Bedeutung desselben Wortes ist der Kern der Technik: Das Publikum hört die zweite Bedeutung, das Produkt liefert nur die erste. Legitim ist die Angabe „recycelbar", wenn ihre begrenzte Bedeutung klar bleibt; manipulativ, wenn der Begriff eine reale Umweltwirkung suggeriert, die er nicht deckt (Greenwashing). Framing wäre die bloße positive Darstellung derselben Tatsache, ohne dass ein Begriff seine Bedeutung wechselt — hier wird der Begriff aber ausdrücklich umdefiniert; Priming würde vorab Naturassoziationen wecken; ein Strohmann würde eine Gegenposition verzerren — nichts davon trifft den hier tragenden Bedeutungswechsel.',
      en: 'Equivocation: the key term "recyclable" carries a technical meaning — "can in principle be reprocessed" — but the campaign text explicitly recasts it into the everyday meaning "is recycled / is eco-friendly" ("Recyclable means: it becomes a new cup again"). This silent jump from the "can be" sense to the "is" sense of the very same word is the core of the technique: the audience hears the second sense while the product only delivers the first. Stating "recyclable" is legitimate when its limited meaning stays clear; it becomes manipulative when the term implies a real environmental benefit it does not cover (greenwashing). Framing would be merely presenting the same fact positively without any word shifting meaning — but here the term is expressly redefined; priming would pre-activate nature associations; a straw man would distort an opposing position — none of which matches the meaning shift doing the work here.',
    },
    points: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'framing'],
  },
  {
    id: 'eq-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'Eine klinische Studie ergibt, dass ein neues Nahrungsergänzungsmittel die Konzentration „statistisch signifikant" verbessert — der tatsächliche Effekt ist klein. In der Pressemitteilung wird daraus die Schlagzeile: „Signifikant bessere Konzentration — wissenschaftlich belegt." Im Interview ergänzt der Sprecher: „Signifikant heißt: ein echter, deutlich spürbarer Unterschied."',
      en: 'A clinical study finds that a new supplement improves concentration in a "statistically significant" way — the actual effect is small. The press release turns this into the headline: "Significantly better concentration — scientifically proven." In an interview the spokesperson adds: "Significant means a real, clearly noticeable difference."',
    },
    options: [
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Äquivokation: Der Begriff „signifikant" wechselt von seiner Fachbedeutung — „statistisch, also wahrscheinlich nicht durch Zufall entstanden" — in die Alltagsbedeutung „groß, spürbar, bedeutsam". Beide klingen gleich, meinen aber Gegensätzliches: Ein statistisch signifikanter Effekt kann winzig sein. Indem die Mitteilung das Wort „statistisch" weglässt und der Sprecher „signifikant = spürbar" setzt, gleitet die Bedeutung genau an der Stelle, an der das Argument trägt. Legitim ist die korrekte Angabe der Effektgröße; manipulativ ist der stille Bedeutungswechsel. Framing wäre eine positive Darstellung derselben Zahl (etwa „verbessert" statt „verändert"), ohne dass ein Wort umkippt; Priming würde vorab Vertrauen in „Wissenschaft" aktivieren; Anchoring bräuchte einen gesetzten Referenzwert, an dem etwas gemessen wird — hier trägt allein die Doppeldeutigkeit von „signifikant".',
      en: 'Equivocation: the term "significant" shifts from its technical meaning — "statistically, i.e. probably not arising by chance" — to the everyday meaning "large, noticeable, meaningful". Both sound identical but mean opposite things: a statistically significant effect can be tiny. By dropping the word "statistically" and having the spokesperson equate "significant" with "noticeable", the meaning slides exactly where the argument rests. Reporting the effect size correctly is legitimate; the silent meaning shift is manipulative. Framing would be a positive presentation of the same figure ("improves" rather than "changes") without any word flipping; priming would pre-activate trust in "science"; anchoring would need a set reference value to measure against — here the whole effect rides on the ambiguity of "significant".',
    },
    points: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'framing'],
  },
  {
    id: 'eq-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze die Beschreibung der Technik: Der Verband ___, um den Eindruck lückenloser Regeltreue zu erzeugen.',
      en: 'Complete the description of the technique: The association ___, in order to create the impression of seamless compliance.',
    },
    scenario: {
      de: 'In einem Positionspapier schreibt ein Branchenverband: „Unsere Mitglieder halten sich strikt an die Regeln." Im ersten Absatz sind mit „Regeln" die gesetzlichen Vorschriften gemeint, im nächsten Absatz jedoch die unverbindlichen Leitlinien, die sich die Branche selbst gegeben hat — ohne dass der Wechsel kenntlich gemacht wird.',
      en: 'In a position paper an industry association writes: "Our members strictly follow the rules." In the first paragraph "rules" refers to statutory regulations, but in the next paragraph it means the voluntary, non-binding guidelines the industry has set for itself — without the switch being flagged.',
    },
    options: [
      {
        de: 'verwendet denselben Begriff „Regeln" unbemerkt in zwei verschiedenen Bedeutungen (Äquivokation)',
        en: 'uses the same word "rules" in two different meanings without flagging it (equivocation)',
      },
      {
        de: 'stellt dieselbe Tatsache gezielt im besten Licht dar (Framing)',
        en: 'presents the same fact deliberately in the best light (framing)',
      },
      {
        de: 'überzeichnet eine Forderung der Kritiker und widerlegt dann diese Version (Strohmann)',
        en: 'exaggerates a demand from critics and then refutes that version (straw man)',
      },
      {
        de: 'behauptet, es gebe nur die Wahl zwischen Selbstverpflichtung und Chaos (Falsches Dilemma)',
        en: 'claims there is only a choice between self-regulation and chaos (false dilemma)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Technik ist Äquivokation: Das Wort „Regeln" trägt zwei Bedeutungen — verbindliche Gesetze und unverbindliche Selbstverpflichtungen —, die im Text stillschweigend ausgetauscht werden. Der Leser überträgt die Strenge der ersten Bedeutung auf die zweite und schließt auf lückenlose Regeltreue, die so gar nicht belegt ist. Legitim wäre es, beide Ebenen klar zu benennen; manipulativ ist der unmarkierte Bedeutungswechsel. Framing (Option 1) beschriebe nur eine positive Darstellung, ohne dass ein Begriff seine Bedeutung wechselt; ein Strohmann (Option 2) verzerrte eine Gegenposition, die hier gar nicht auftaucht; ein falsches Dilemma (Option 3) behauptete nur zwei sich ausschließende Optionen — auch das ist nicht der Hebel.',
      en: 'The technique is equivocation: the word "rules" carries two meanings — binding laws and non-binding voluntary commitments — that are silently swapped within the text. The reader transfers the strictness of the first sense onto the second and infers seamless compliance that is not actually evidenced. Naming both levels clearly would be legitimate; the unmarked meaning shift is manipulative. Framing (option 1) would describe only a positive presentation without any word changing meaning; a straw man (option 2) would distort an opposing position, which never appears here; a false dilemma (option 3) would assert just two mutually exclusive options — also not the lever at work.',
    },
    points: 10,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'straw_man'],
  },
  {
    id: 'eq-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als Kommunikationsverantwortliche mit dem Entwurf um?',
      en: 'As the communications lead, how do you handle the draft?',
    },
    scenario: {
      de: 'Der Entwurf für die Launch-Kampagne bewirbt euer neues Produkt prominent als „klimaneutral". Im Kleingedruckten zeigt sich: Gemeint ist ausschließlich, dass ihr Emissionszertifikate zugekauft habt — die Emissionen des Produkts selbst wurden nicht gesenkt. Die Zielgruppe wird „klimaneutral" jedoch als „verursacht dem Klima keinen Schaden" verstehen. Der Launch ist in zwei Wochen.',
      en: 'The draft launch campaign prominently advertises your new product as "climate-neutral". The fine print reveals that this means only that you have purchased carbon offset certificates — the emissions of the product itself were not reduced. The target audience, however, will read "climate-neutral" as "causes no harm to the climate". Launch is in two weeks.',
    },
    options: [
      {
        de: 'Den Begriff präzisieren: entweder eindeutig offenlegen, dass „klimaneutral" hier allein auf Kompensation beruht, oder einen Begriff wählen, der genau das sagt, was ihr wirklich tut — so vermeidest du den Bedeutungswechsel, senkst das Greenwashing- und Abmahnrisiko und schützt langfristig die Glaubwürdigkeit.',
        en: 'Make the term precise: either clearly disclose that "climate-neutral" here rests solely on offsetting, or choose a term that says exactly what you actually do — this avoids the meaning shift, lowers the greenwashing and legal risk, and protects credibility in the long run.',
      },
      {
        de: 'Den Begriff behalten — „klimaneutral" ist branchenüblich und wurde bislang nie beanstandet; eine Fußnote im Kleingedruckten genügt.',
        en: 'Keep the term — "climate-neutral" is industry-standard and has never been challenged so far; a footnote in the fine print is enough.',
      },
      {
        de: 'Die Doppeldeutigkeit bewusst nutzen und „klimaneutral" noch größer platzieren, weil gerade die starke grüne Wirkung den Absatz treibt.',
        en: 'Deliberately exploit the ambiguity and place "climate-neutral" even more prominently, because it is precisely the strong green effect that drives sales.',
      },
      {
        de: 'Sämtliche Nachhaltigkeitsaussagen streichen, auch die belegbaren, um jedes Risiko zu vermeiden.',
        en: 'Delete all sustainability claims, including the substantiated ones, to avoid any risk whatsoever.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Kern ist Äquivokation: „klimaneutral" trägt eine enge technische Bedeutung (über Zertifikate kompensiert), wird von der Zielgruppe aber als „kein Klimaschaden" verstanden. Option 0 löst genau diesen Bedeutungswechsel auf — durch präzise Definition oder einen ehrlichen Begriff — und adressiert zugleich die zweite Ordnung: Greenwashing-Regeln (etwa die EU-Green-Claims-Richtlinie), Abmahn- und UWG-Risiko sowie den drohenden Vertrauens- und Reputationsschaden, wenn die Diskrepanz auffliegt. Option 1 verlässt sich darauf, dass die Mehrdeutigkeit bisher durchging — das ist die Technik selbst und rechtlich riskant; eine Fußnote heilt eine irreführende Hauptaussage nicht. Option 2 nutzt die Täuschung bewusst aus und maximiert das Risiko. Option 3 überkorrigiert: Sie wirft auch wahre, belegbare Aussagen weg und behebt das eigentliche Problem — den gleitenden Begriff — gar nicht.',
      en: 'At the core is equivocation: "climate-neutral" carries a narrow technical meaning (offset via certificates) but is understood by the audience as "no climate harm". Option 0 resolves exactly this meaning shift — through a precise definition or an honest term — while also addressing the second-order stakes: greenwashing rules (such as the EU Green Claims Directive), legal and unfair-competition exposure, and the looming trust and reputation damage if the discrepancy surfaces. Option 1 relies on the ambiguity having gone unchallenged so far — that is the technique itself and is legally risky; a footnote does not cure a misleading headline claim. Option 2 knowingly exploits the deception and maximises the risk. Option 3 overcorrects: it discards even true, substantiated claims and does not fix the actual problem — the sliding term.',
    },
    points: 15,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'framing'],
  },
  {
    id: 'eq-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Du prüfst eine Produktbroschüre vor der Freigabe. Ein Element überschreitet durch einen Bedeutungswechsel die ethisch-rechtliche Grenze. Welches?',
      en: 'You are reviewing a product brochure before sign-off. One element crosses the ethical/legal line through a shift in meaning. Which one?',
    },
    scenario: {
      de: 'Auszüge aus der Broschüre für einen Sparplan:',
      en: 'Excerpts from the brochure for a savings plan:',
    },
    options: [
      {
        de: '„Der Sparplan wird von einer BaFin-regulierten Gesellschaft angeboten." — belegbar und korrekt.',
        en: '"The savings plan is offered by a BaFin-regulated company." — verifiable and accurate.',
      },
      {
        de: '„Durchschnittliche Wertentwicklung 2019–2024: 3,8 % pro Jahr." — mit Quelle und klar benanntem Zeitraum.',
        en: '"Average performance 2019–2024: 3.8% per year." — with source and a clearly stated period.',
      },
      {
        de: '„Bei uns ist Ihr Kapital sicher." — „sicher" meint an anderer Stelle der Broschüre „seriöser, regulierter Anbieter", steht hier aber so, dass Leser es als „kein Verlustrisiko" verstehen.',
        en: '"With us your capital is safe." — elsewhere in the brochure "safe" means "reputable, regulated provider", but here it is placed so that readers understand it as "no risk of loss".',
      },
      {
        de: '„Details zu Kosten und Risiken finden Sie im beigefügten Basisinformationsblatt." — transparenter Verweis auf die Pflichtinformationen.',
        en: '"Details on costs and risks are in the enclosed key information document." — a transparent pointer to the mandatory disclosures.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Element 2 überschreitet die Grenze: Das Wort „sicher" wechselt seine Bedeutung — von „seriöser, regulierter Anbieter" (institutionelle Sicherheit) zu „kein Verlustrisiko" (Kapitalgarantie). Der Leser überträgt die erste, harmlose Bedeutung auf die zweite und schließt auf eine Garantie, die es nicht gibt. Bei Kapitalanlagen ist das nicht nur unethisch, sondern als irreführende Werbung rechtlich angreifbar (u. a. UWG, aufsichtsrechtliche Vorgaben). Die anderen Elemente bleiben legitim: Der Hinweis auf die Regulierung ist belegbar (Element 0), die Wertentwicklung nennt Quelle und Zeitraum ohne Bedeutungstrick (Element 1), und der Verweis auf das Basisinformationsblatt legt Kosten und Risiken transparent offen (Element 3). Die Grenze verläuft dort, wo ein und derselbe Begriff — hier „sicher" — je nach Stelle etwas anderes bedeutet und diese Mehrdeutigkeit gezielt einen falschen Schluss trägt.',
      en: 'Element 2 crosses the line: the word "safe" shifts meaning — from "reputable, regulated provider" (institutional soundness) to "no risk of loss" (a capital guarantee). The reader carries the first, harmless meaning over to the second and infers a guarantee that does not exist. For investments this is not only unethical but legally actionable as misleading advertising (unfair-competition law and financial-supervisory rules). The other elements stay legitimate: the regulation note is verifiable (element 0), the performance figure states source and period with no meaning trick (element 1), and the pointer to the key information document transparently discloses costs and risks (element 3). The line is crossed where one and the same term — here "safe" — means different things depending on where it appears, and that ambiguity is used to carry a false inference.',
    },
    points: 15,
    primaryTechniqueId: 'equivocation',
    relatedTechniques: ['equivocation', 'framing'],
  },
];
