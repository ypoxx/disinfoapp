import type { Exercise } from '../../types';

// liking — Phase 2 content batch.
export const likingExercises: Exercise[] = [
  {
    id: 'lk-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik setzt der Verkäufer hier ein, bevor er überhaupt sein Angebot nennt?',
      en: 'Which persuasion technique is the salesperson using here, before he even names the offer?',
    },
    scenario: {
      de: 'Kaum sitzt die Kundin, lobt der Verkäufer ausführlich ihren Geschmack, schwärmt von ihrer Jacke und stellt begeistert fest, dass sie beide aus derselben Kleinstadt kommen und denselben Fußballverein mögen — erst dann kommt er auf den Vertrag zu sprechen.',
      en: 'The customer has barely sat down when the salesperson lavishly compliments her taste, gushes about her jacket, and enthusiastically notes that they both come from the same small town and support the same football club — only then does he turn to the contract.',
    },
    options: [
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Sympathie (Liking): Komplimente und betonte Gemeinsamkeiten (gleiche Herkunft, gleicher Verein) erzeugen Zuneigung — und zu Menschen, die wir mögen, sagen wir eher ja. Legitim sind echte Freundlichkeit und ehrliches Interesse; manipulativ wird es, wenn Schmeicheleien und Gemeinsamkeiten nur inszeniert werden, um ein Ja zu erzwingen. Reziprozität bräuchte eine Vorleistung oder Gabe, die eine Gegenleistung auslöst; sozialer Beweis einen Verweis auf das Verhalten vieler anderer; ein Autoritätsargument einen Experten- oder Statusbeleg — nichts davon liegt hier vor, es geht allein um erzeugte Sympathie.',
      en: 'This is liking: compliments and emphasized commonalities (same origin, same club) create affection — and we are more likely to say yes to people we like. Genuine friendliness and honest interest are legitimate; it turns manipulative when flattery and similarity are merely staged to force a yes. Reciprocity would need a prior favor or gift that triggers a return; social proof a reference to what many others do; an appeal to authority an expert or status credential — none of which is present here; this is purely manufactured liking.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking'],
  },
  {
    id: 'lk-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steht im Vordergrund, wenn die Personalerin so betont ihre Gemeinsamkeiten mit den Bewerbern herausstellt?',
      en: 'Which technique is at the forefront when the recruiter so deliberately highlights what she has in common with candidates?',
    },
    scenario: {
      de: 'In einem Recruiting-Video stellt sich die Personalerin bewusst leger vor: dieselbe Uni wie viele Bewerber, dieselbe Lieblingsserie, derselbe Kaffee am Morgen. „Ehrlich, wir ticken einfach gleich", sagt sie mehrfach lächelnd — und kommt erst danach auf die offene Stelle zu sprechen.',
      en: 'In a recruiting video, the recruiter introduces herself deliberately casually: same university as many applicants, same favorite series, same morning coffee. "Honestly, we\'re just wired the same," she says with a smile several times — and only then turns to the open position.',
    },
    options: [
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Pacing & Leading', en: 'Pacing and leading' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der zentrale Hebel ist Sympathie (Liking) über Ähnlichkeit: Wir mögen Menschen, die uns ähneln, und übertragen dieses Wohlwollen auf ihr Angebot — hier den Arbeitgeber. Legitim ist es, echte Gemeinsamkeiten zu erwähnen und nahbar aufzutreten; manipulativ wird es, wenn Ähnlichkeit gezielt erfunden oder überinszeniert wird, um Nähe vorzutäuschen. Pacing & Leading meint das dynamische Spiegeln von Tempo und Zustand des Gegenübers, um es anschließend zu führen — hier wird niemand in Echtzeit gespiegelt, sondern pauschal Ähnlichkeit behauptet. Sozialer Beweis bräuchte den Hinweis, dass sich bereits viele andere beworben haben; ein Autoritätsargument einen Status- oder Expertenbeleg. Beides fehlt.',
      en: 'The central lever is liking through similarity: we like people who resemble us and transfer that goodwill to their offer — here, the employer. Mentioning genuine common ground and being approachable is legitimate; it becomes manipulative when similarity is deliberately invented or over-staged to fake closeness. Pacing and leading refers to dynamically mirroring the other person\'s tempo and state in order to then guide them — here no one is mirrored in real time; similarity is simply asserted wholesale. Social proof would need a cue that many others have already applied; an appeal to authority a status or expert credential. Both are absent.',
    },
    points: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'pacing_and_leading'],
  },
  {
    id: 'lk-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik erklärt am besten, warum der Kunde am Ende verlängert — obwohl das Konkurrenzangebot günstiger ist?',
      en: 'Which technique best explains why the client renews in the end — even though the competing offer is cheaper?',
    },
    scenario: {
      de: 'Ein Account-Manager pflegt seinen Kunden über Monate persönlich: Er merkt sich die Namen der Kinder, erzählt beim Kaffee von eigenen Sorgen und wirkt eher wie ein Freund als wie ein Verkäufer. Er verlangt nie eine Gegenleistung, und Geschenke von Wert gibt es keine. Als ein günstigerer Wettbewerber auftaucht, verlängert der Kunde trotzdem und sagt: „Ich arbeite einfach wahnsinnig gern mit ihm — der ist mir über die Zeit richtig ans Herz gewachsen."',
      en: 'An account manager tends to his client personally over months: he remembers the children\'s names, shares his own worries over coffee, and comes across more like a friend than a salesperson. He never asks for anything in return, and there are no gifts of value. When a cheaper competitor appears, the client renews anyway, saying: "I just really enjoy working with him — over time I\'ve genuinely grown fond of him."',
    },
    options: [
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Entscheidend ist Sympathie (Liking): Durch persönliche Aufmerksamkeit, Selbstöffnung und Wärme entsteht echte Zuneigung — der Kunde verlängert, weil er den Menschen mag („arbeite gern mit ihm"), nicht wegen harter Argumente oder des Preises. Reziprozität scheidet aus, weil keine Gabe von Wert übergeben wird, die ein Verpflichtungsgefühl auslöst — die persönliche Aufmerksamkeit ist Ausdruck echter Zuneigung, keine Vorleistung, die zurückgezahlt werden soll. Commitment & Konsistenz würde greifen, wenn der Kunde einer früheren öffentlichen Festlegung treu bliebe; hier steht gerade eine offene Neuentscheidung gegen ein besseres Angebot an. Sozialer Beweis fehlt, es wird nicht auf das Verhalten anderer verwiesen. Legitim ist eine warme, echte Beziehung; die Grenze verläuft dort, wo Sympathie bewusst instrumentalisiert wird, um sachlich bessere Alternativen zu verdrängen.',
      en: 'The decisive lever is liking: personal attention, self-disclosure and warmth create genuine affection — the client renews because he likes the person ("enjoy working with him"), not because of hard arguments or price. Reciprocity is out because no gift of value is handed over that would trigger a sense of obligation — the personal attention expresses genuine affection, it is not a prior favor to be repaid. Commitment & consistency would apply if the client were staying true to an earlier public commitment; here he faces an open, fresh decision against a better offer. Social proof is absent — no reference is made to what others do. A warm, genuine relationship is legitimate; the line is crossed when liking is deliberately instrumentalized to crowd out objectively better alternatives.',
    },
    points: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'reciprocity'],
  },
  {
    id: 'lk-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Die Marke setzt sympathische, dem Publikum ähnliche Gesichter und warme Komplimente ein, um ___ — sodass die Kaufbotschaft später von einer bereits positiven Beziehung getragen wird.',
      en: 'Complete the sentence: The brand uses likeable ambassadors who resemble the audience, plus warm compliments, in order to ___ — so that the sales message is later carried by an already positive relationship.',
    },
    scenario: {
      de: 'Eine Pflegemarke besetzt ihre Kanäle mit „echten" Testimonials, die aussehen und reden wie die Zielgruppe, und startet jeden Beitrag mit einem Kompliment an die Community („ihr wunderbaren Menschen").',
      en: 'A skincare brand fills its channels with "real" testimonials who look and talk like the target audience, and opens every post with a compliment to the community ("you wonderful people").',
    },
    options: [
      { de: 'Sympathie und Zuneigung zur Marke aufzubauen (Liking)', en: 'build liking and affection toward the brand (liking)' },
      { de: 'durch eine kostenlose Vorleistung ein Verpflichtungsgefühl zu erzeugen (Reciprocity)', en: 'create a sense of obligation through a free favor (reciprocity)' },
      { de: 'den Eindruck zu erwecken, dass bereits alle anderen das Produkt nutzen (Social proof)', en: 'create the impression that everyone else already uses the product (social proof)' },
      { de: 'eine künstliche Verknappung des Angebots zu erzeugen (Scarcity)', en: 'manufacture artificial scarcity of the offer (scarcity)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Es geht um Sympathie (Liking): Ähnlichkeit („sehen aus wie du") und Komplimente erzeugen Zuneigung, die auf die Marke abfärbt — man kauft lieber bei Menschen und Marken, die man mag. Legitim, solange die Testimonials echt und die Komplimente ehrlich sind; manipulativ, wenn Ähnlichkeit und „echte Kundinnen" nur inszeniert werden. Reziprozität bräuchte eine konkrete Vorleistung, die zurückgezahlt werden soll; sozialer Beweis den Verweis auf die Masse der Nutzer; Knappheit eine Verfügbarkeits- oder Zeitgrenze — keiner dieser Hebel wird hier gezogen, es zählt allein die erzeugte Sympathie.',
      en: 'This is liking: similarity ("they look like you") and compliments generate affection that rubs off on the brand — we prefer to buy from people and brands we like. Legitimate as long as the testimonials are real and the compliments honest; manipulative when similarity and "real customers" are merely staged. Reciprocity would need a concrete prior favor to be repaid; social proof a reference to the mass of users; scarcity an availability or time limit — none of these levers is pulled here; only the manufactured liking matters.',
    },
    points: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'social_proof'],
  },
  {
    id: 'lk-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie nutzt du den Sympathie-Effekt professionell — und bleibst auf der richtigen Seite der Grenze?',
      en: 'How do you use the liking effect professionally — and stay on the right side of the line?',
    },
    scenario: {
      de: 'Für den Launch eines neuen Kopfhörers sollst du ein Botschafter-Programm aufsetzen. Sympathie ist ein starker Hebel — aber du weißt, dass er nach hinten losgehen kann, sobald das Publikum eine Inszenierung durchschaut.',
      en: 'For the launch of a new pair of headphones you are to set up an ambassador program. Liking is a powerful lever — but you know it can backfire the moment the audience sees through a staged act.',
    },
    options: [
      {
        de: 'Botschafter wählen, die das Produkt wirklich nutzen und dazu passen, sie in ihrer eigenen Stimme sprechen lassen und die bezahlte Partnerschaft klar kennzeichnen — Sympathie stützt die Botschaft, ersetzt aber nicht die Substanz.',
        en: 'Choose ambassadors who genuinely use and fit the product, let them speak in their own voice, and clearly disclose the paid partnership — liking supports the message but does not replace substance.',
      },
      {
        de: 'Die attraktivste Prominenz buchen, die du dir leisten kannst, egal ob sie zum Produkt passt — gutes Aussehen allein trägt die Kampagne.',
        en: 'Book the most attractive celebrity you can afford, regardless of product fit — good looks alone will carry the campaign.',
      },
      {
        de: 'Den Botschaftern eine erfundene „einer von euch"-Biografie mit bescheidenen Wurzeln andichten, um Ähnlichkeit zur Zielgruppe zu erzeugen.',
        en: 'Give the ambassadors a fabricated "one of you" backstory with humble roots to manufacture similarity with the target group.',
      },
      {
        de: 'Das Verkaufsteam anweisen, jedem Interessenten mit einstudierten Komplimenten und vorgetäuschten gemeinsamen Hobbys zu begegnen.',
        en: 'Instruct the sales team to meet every prospect with rehearsed compliments and feigned shared hobbies.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Sympathie wirkt professionell, wenn sie auf Echtheit beruht: passende, glaubwürdige Botschafter, eine authentische Stimme und transparente Kennzeichnung der Zusammenarbeit (rechtlich ohnehin Pflicht). Sympathie darf die Substanz unterstützen, nicht ersetzen (Option 1). Option 2 macht Attraktivität zum Hauptargument — ein klassisches Warnsignal; ohne Passung und Substanz verpufft der Effekt oder wirkt beliebig. Option 3 erfindet Ähnlichkeit: Das ist Täuschung und fliegt früher oder später auf. Option 4 setzt auf einstudierte Schmeicheleien und vorgetäuschte Gemeinsamkeiten — genau die Inszenierung, die beim Durchschauen in Reaktanz und Vertrauensverlust umschlägt. Der Second-Order-Effekt entscheidet: Aufgedeckte, unechte Sympathie beschädigt Marke und Beziehung stärker, als der kurzfristige Gewinn wert ist.',
      en: 'Liking works professionally when it rests on authenticity: fitting, credible ambassadors, a genuine voice, and transparent disclosure of the partnership (legally required anyway). Liking may support substance, not replace it (option 1). Option 2 makes attractiveness the main argument — a classic warning sign; without fit and substance the effect fizzles or feels arbitrary. Option 3 invents similarity: that is deception and will surface sooner or later. Option 4 relies on rehearsed flattery and feigned commonalities — precisely the staged act that flips into reactance and loss of trust once seen through. The second-order effect decides: exposed, inauthentic liking damages brand and relationship more than the short-term gain is worth.',
    },
    points: 15,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'reactance_theory'],
  },
  {
    id: 'lk-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team entwirft ein Sympathie-Programm für den Launch. Ein Baustein überschreitet die ethische und rechtliche Grenze — welcher?',
      en: 'Your team is designing a liking-based program for the launch. One component crosses the ethical and legal line — which one?',
    },
    scenario: {
      de: 'Geplante Bausteine der Community-Kampagne:',
      en: 'Planned components of the community campaign:',
    },
    options: [
      {
        de: 'Micro-Influencer, die das Produkt tatsächlich nutzen, sprechen in ihren eigenen Worten und kennzeichnen die Kooperation.',
        en: 'Micro-influencers who genuinely use the product speak in their own words and label the partnership.',
      },
      {
        de: 'Das Vertriebsteam wird geschult, echtes gemeinsames Interesse mit Kunden zu finden und herzlich und nahbar aufzutreten.',
        en: 'The sales team is trained to find genuine common ground with clients and to be warm and approachable.',
      },
      {
        de: 'Eine sympathische, nahbare Markenbotschafterin führt als klar erkennbares Gesicht durch die Kampagne.',
        en: 'A likeable, approachable brand ambassador fronts the campaign as a clearly recognizable face.',
      },
      {
        de: 'Bezahlte Botschafter treten als unabhängige „ganz normale zufriedene Kundinnen" auf und verschweigen die Bezahlung, damit ihre Empfehlung wie die einer nahbaren Gleichgesinnten wirkt.',
        en: 'Paid ambassadors pose as independent "perfectly ordinary satisfied customers" and conceal the payment, so their recommendation feels like that of a relatable peer.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Sympathie ist legitim, solange sie echt und transparent ist: Influencer, die das Produkt wirklich nutzen und die Kooperation kennzeichnen, ein herzliches Vertriebsteam mit echtem Interesse und eine erkennbare, nahbare Botschafterin bauen Zuneigung auf, ohne zu täuschen. Baustein 4 überschreitet die Grenze: Bezahlte Botschafter, die sich als unabhängige „normale Kundinnen" ausgeben und die Bezahlung verschweigen, erzeugen eine erfundene Ähnlichkeit und Nähe — das ist verdeckte Schleichwerbung und verstößt gegen Kennzeichnungspflichten (UWG/Wettbewerbsrecht). Die Prüffrage lautet: Ist die Sympathie echt und die Beziehung offengelegt — oder wird Nähe nur inszeniert, um eine bezahlte Botschaft als spontane Empfehlung zu tarnen?',
      en: 'Liking is legitimate as long as it is genuine and transparent: influencers who really use the product and label the partnership, a warm sales team with real interest, and a recognizable, approachable ambassador build affection without deceiving. Component 4 crosses the line: paid ambassadors posing as independent "ordinary customers" while concealing the payment manufacture fake similarity and closeness — this is covert stealth advertising and violates disclosure rules (unfair-competition law). The test question: is the liking genuine and the relationship disclosed — or is closeness merely staged to disguise a paid message as a spontaneous recommendation?',
    },
    points: 15,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'social_proof'],
  },
];
