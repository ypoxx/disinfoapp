import type { Exercise } from '../../types';

// nudging — Phase 2 content batch.
export const nudgingExtraExercises: Exercise[] = [
  {
    id: 'nu-new-5',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Indem die Kantine gesunde Speisen bewusst auf Augenhöhe nach vorne rückt, das übrige Angebot aber vollständig und zum gleichen Preis stehen lässt, will sie vor allem ___.',
      en: 'Complete the sentence: By deliberately moving healthy dishes to the front at eye level while keeping the full range of options available at the same price, the canteen primarily aims to ___.',
    },
    scenario: {
      de: 'Eine Unternehmenskantine stellt das Buffet um: Salate, Obst und Wasser stehen jetzt vorne auf Augenhöhe, zuckerhaltige Getränke und Desserts weiter unten und hinten. Preise, Angebot und Beschriftung bleiben unverändert.',
      en: 'A company canteen rearranges the buffet: salads, fruit and water now sit at the front at eye level, sugary drinks and desserts lower down and further back. Prices, range and labeling all stay unchanged.',
    },
    options: [
      { de: 'die Entscheidungsarchitektur zugunsten der gesünderen Wahl verändern (Nudging)', en: 'alter the choice architecture in favor of the healthier option (nudging)' },
      { de: 'einen numerischen Referenzwert setzen, an dem alles Weitere gemessen wird (Anchoring)', en: 'set a numeric reference value against which everything else is judged (anchoring)' },
      { de: 'dieselbe Information gezielt positiv umformulieren (Framing)', en: 'reword the same information in a deliberately positive way (framing)' },
      { de: 'auf das Verhalten der Mehrheit verweisen (Sozialer Beweis)', en: 'point to what the majority does (social proof)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist der klassische Nudge nach Thaler & Sunstein: Allein die Anordnung der Umgebung — was vorne und auf Augenhöhe steht — verändert die Entscheidungsarchitektur und macht die gesündere Wahl wahrscheinlicher, während jede Option verfügbar bleibt und die Preise gleich sind. Ethisch vertretbar, weil nichts verboten, verteuert oder versteckt wird und das Ziel im Interesse der Gäste liegt; manipulativ würde es erst, wenn die Alternative künstlich erschwert oder unattraktiv gemacht würde. Anchoring bräuchte einen Zahlenanker, den es hier nicht gibt. Framing meint das Umformulieren derselben Information — die Beschriftung bleibt aber wortgleich, verändert wird nur die Platzierung. Sozialer Beweis bräuchte einen Verweis auf das Verhalten anderer, der hier vollständig fehlt.',
      en: 'This is the classic Thaler & Sunstein nudge: the arrangement of the environment alone — what sits at the front and at eye level — changes the choice architecture and makes the healthier option more likely, while every option remains available and prices stay equal. Ethically defensible, because nothing is forbidden, made more expensive or hidden and the goal is in the guests\' interest; it would only become manipulative if the alternative were artificially obstructed or made unattractive. Anchoring would need a numeric anchor, which is absent here. Framing means rewording the same information — but the labeling stays word-for-word identical; only the placement changes. Social proof would need a reference to what others do, which is entirely missing here.',
    },
    points: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'framing', 'anchoring'],
  },
  {
    id: 'nu-new-6',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Die interne Kommunikation soll die Teilnahme an der jährlichen Datenschutzschulung erhöhen — ohne Zwang und ohne die Schulung verpflichtend zu machen. Statt eines aufdringlichen Pflicht-Pop-ups gestaltet das Team das Intranet um: Die Schulungs-Kachel rutscht ganz nach oben auf das Start-Dashboard und lässt sich mit einem einzigen Klick starten, während die früher nötige Klickstrecke durch drei Untermenüs entfällt. Der Einladungstext bleibt wortgleich; wer die Schulung überspringen will, kann das weiterhin jederzeit tun. Die Abschlussquote verdoppelt sich.',
      en: 'Internal communications wants to raise participation in the annual data-protection training — without coercion and without making it mandatory. Instead of an intrusive mandatory pop-up, the team redesigns the intranet: the training tile moves to the very top of the start dashboard and can be launched with a single click, while the previously required path through three submenus is removed. The invitation text stays word-for-word identical; anyone who wants to skip the training can still do so at any time. Completion rates double.',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der dominante Hebel ist Nudging: Das Team verändert die Entscheidungsarchitektur, indem es die gewünschte Handlung sichtbarer (Kachel ganz oben) und müheloser (ein Klick statt drei Untermenüs) macht — der Reibungsabbau lenkt das Verhalten, ohne eine Option zu verbieten. Genau hier liegt die ethische Grenze, und sie wird eingehalten: Der Ausstieg bleibt jederzeit möglich und gleichwertig, nichts wird verschleiert. Deshalb ist es KEIN Dark Pattern — dieses würde den Ausweg verstecken, künstliche Reibung einbauen oder täuschen. Framing scheidet aus, weil der Einladungstext wortgleich bleibt; es wird keine Information anders formuliert, sondern nur ihre Zugänglichkeit verändert. Priming würde Assoziationen vorab aktivieren, bevor die eigentliche Botschaft kommt — auch das passiert hier nicht. Manipulativ würde derselbe Umbau erst, wenn das Überspringen gezielt erschwert oder verborgen würde.',
      en: 'The dominant lever is nudging: the team alters the choice architecture by making the desired action more salient (tile at the very top) and more effortless (one click instead of three submenus) — reducing friction steers behavior without forbidding any option. This is exactly where the ethical line sits, and it is respected: opting out stays possible and equivalent at all times, nothing is concealed. That is why it is NOT a dark pattern — a dark pattern would hide the exit, add artificial friction, or deceive. Framing is out because the invitation text stays word-for-word identical; no information is reworded, only its accessibility is changed. Priming would pre-activate associations before the actual message arrives — that does not happen here either. The same redesign would only become manipulative if skipping were deliberately obstructed or hidden.',
    },
    points: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'dark_patterns'],
  },
];
