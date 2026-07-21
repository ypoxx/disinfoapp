// Welle 5b: 3 Übungen für mere_exposure_effect (Mere-Exposure-Effekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bMereExposureEffect: Exercise[] = [
  {
    id: 'wave5b-mere_exposure_effect-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt die Mediaverantwortliche hier?',
      en: 'Which technique is the media lead using here?',
    },
    scenario: {
      de: 'Kampagnenplanung einer noch unbekannten Getränkemarke: Die Mediaverantwortliche bucht über acht Wochen hochfrequente, sekundenkurze Einblendungen, die nur den Schriftzug zeigen — keine Aussage, kein Versprechen, kein Argument. Ziel laut Briefing: „Am Ende soll der Name der Zielgruppe einfach vertraut vorkommen und dadurch sympathischer sein als die Konkurrenz."',
      en: 'Campaign planning for a still-unknown beverage brand: over eight weeks the media lead books high-frequency, second-long placements showing only the wordmark — no message, no promise, no argument. The brief\'s goal: "By the end the name should simply feel familiar to the target group, and thereby more likeable than the competition."',
    },
    options: [
      { de: 'Mere-Exposure-Effekt', en: 'Mere-exposure effect' },
      { de: 'Wiederholung (Repetition)', en: 'Repetition' },
      { de: 'Illusory-Truth-Effekt (Wahrheitsillusion)', en: 'Illusory-truth effect' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mere-Exposure-Effekt: Ein zunächst neutraler Reiz — hier der bloße Schriftzug — wird ohne jede inhaltliche Aussage immer wieder gezeigt, damit allein aus der wiederholten Wahrnehmung Vertrautheit und daraus Sympathie entstehen. Genau das benennt das Briefing offen: nicht überzeugen, sondern vertraut machen. Legitim einsetzen: Bekanntheit für eine neue Marke aufzubauen ist normales Handwerk — professionell bleibt es, wenn die Frequenz eine echte Botschaft trägt und nicht bloß Sympathie ohne Substanz erzeugen soll (und wenn du die Übersättigung im Blick behältst, ab der der Effekt kippt). Erkennen und kontern: Frag dich bei wachsender Sympathie, ob du je ein Argument gehört hast oder nur oft genug den Namen gesehen — bewerte die Marke an ihren Leistungen, nicht an ihrer Vertrautheit. Wiederholung (Repetition) wirkt plausibel, weil auch hier etwas ständig wiederkehrt — sie zielt aber auf die Einprägung und Geltung einer Botschaft insgesamt; der Mere-Exposure-Effekt ist der Spezialfall, in dem allein die Sympathie für einen neutralen Reiz steigt. Der Illusory-Truth-Effekt läge vor, wenn eine wiederholte Behauptung glaubwürdiger würde — hier wird gar nichts behauptet, es geht um Mögen, nicht um Für-wahr-Halten. Sympathie (Liking) benennt das Ergebnis, aber Cialdinis Liking-Hebel arbeitet mit Ähnlichkeit, Komplimenten oder Kooperation; hier entsteht die Sympathie allein aus der Wiederholung.',
      en: 'Mere-exposure effect: an initially neutral stimulus — here the bare wordmark — is shown over and over with no content at all, so that familiarity, and from it liking, arise from repeated perception alone. The brief says so openly: not to persuade, but to make familiar. Used legitimately: building awareness for a new brand is ordinary craft — it stays professional when the frequency carries a real message rather than manufacturing liking without substance (and when you watch for the over-saturation point at which the effect reverses). To spot and counter it: when your liking grows, ask whether you ever heard an argument or merely saw the name often enough — judge the brand on its merits, not its familiarity. Repetition looks plausible because something recurs here too — but it aims at imprinting and the standing of a message as a whole; the mere-exposure effect is the special case where only liking for a neutral stimulus rises. The illusory-truth effect would apply if a repeated claim became more believable — but nothing is claimed here; this is about liking, not believing. Liking names the outcome, but Cialdini\'s liking lever works through similarity, compliments or cooperation; here the liking comes from repetition alone.',
    },
    points: 10,
    primaryTechniqueId: 'mere_exposure_effect',
    relatedTechniques: ['mere_exposure_effect', 'repetition', 'illusory_truth_effect', 'liking'],
  },
  {
    id: 'wave5b-mere_exposure_effect-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Verbands und moderierst die Auswahl einer neuen Leadagentur. Zwei Vorstandsmitglieder plädieren spürbar für Agentur B: „Die sehen wir überall — auf jedem Panel, ständig im LinkedIn-Feed, die kennt man einfach." Im Pitch-Vergleich liegt Agentur B bei Konzept, Referenzen und Preis hinter zwei Wettbewerbern; ihre Präsenz beruht auf einer wochenlangen, inhaltsarmen Sichtbarkeitskampagne in eurer Bubble.',
      en: 'You head communications at an association and are chairing the selection of a new lead agency. Two board members clearly favour agency B: "We see them everywhere — on every panel, constantly in the LinkedIn feed, everyone knows them." In the pitch comparison agency B trails two competitors on concept, references and price; its presence rests on weeks of low-content visibility across your bubble.',
    },
    options: [
      {
        de: 'Ich trenne Vertrautheit von Eignung: Ich lege die Bewertungskriterien nebeneinander — Konzept, Referenzen, Preis — und lasse den Vorstand jede Agentur daran messen, ausdrücklich unabhängig davon, wie oft man sie zuletzt gesehen hat.',
        en: 'I separate familiarity from suitability: I lay the evaluation criteria side by side — concept, references, price — and have the board rate each agency against them, explicitly regardless of how often it has been seen lately.',
      },
      {
        de: 'Ich folge dem Vorstand und nehme Agentur B: Wenn selbst erfahrene Mitglieder sie überall wahrnehmen, spricht diese hohe Bekanntheit für Qualität und Marktstärke.',
        en: 'I follow the board and pick agency B: if even seasoned members notice it everywhere, that high recognition speaks for quality and market strength.',
      },
      {
        de: 'Ich streiche Agentur B von der Liste — wer so sichtbar ist, hat offensichtlich mehr ins Marketing als in die Arbeit gesteckt.',
        en: 'I strike agency B off the list — anyone that visible has obviously put more into marketing than into the work.',
      },
      {
        de: 'Ich verschiebe die Entscheidung und lasse alle drei Agenturen erst einmal je einen weiteren Präsenztermin beim Vorstand absolvieren, damit sich ein gleich vertrautes Bild ergibt.',
        en: 'I postpone the decision and have all three agencies each do another face-time session with the board first, so an equally familiar picture forms.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus im Raum ist der Mere-Exposure-Effekt: Die bloße häufige Wahrnehmung von Agentur B — Panels, Feed — hat sie vertraut und dadurch sympathisch gemacht, ganz ohne dass ein Argument für ihre Eignung gefallen wäre. „Die kennt man einfach" ist genau das verräterische Signal: Vertrautheit ersetzt hier die Bewertung. Die beste Option entkoppelt beides, indem sie die Entscheidung zurück auf überprüfbare Kriterien holt — an Konzept, Referenzen und Preis gemessen fällt die Wahl unabhängig von der Sichtbarkeit. Legitim einsetzen: Selbst sichtbar und präsent zu sein ist gutes Kommunikationshandwerk — problematisch wird es erst, wenn Präsenz die Substanz ersetzt. Erkennen und kontern: Werde hellhörig, wenn „kennt man" oder „sieht man überall" als Argument auftritt, und frag nach dem Beleg hinter der Vertrautheit. Dem Vorstand zu folgen (Option 2) wirkt plausibel, weil Bekanntheit oft mit Qualität einhergeht — hier stammt sie aber nachweislich aus einer reinen Sichtbarkeitskampagne, nicht aus Leistung; das ist der Trugschluss, den der Effekt erzeugt. Agentur B zu streichen (Option 3) überkorrigiert und wirft die eigentliche Prüfung gleich mit weg — Sichtbarkeit ist kein Ausschlussgrund, nur eben auch kein Eignungsnachweis. Zusätzliche Präsenztermine (Option 4) bekämpfen den Effekt mit mehr Exposition und verschieben die Entscheidung erst recht auf Vertrautheit statt auf Kriterien.',
      en: 'The mechanism in the room is the mere-exposure effect: merely perceiving agency B often — panels, feed — has made it familiar and thereby likeable, without a single argument for its suitability. "Everyone just knows them" is exactly the tell: familiarity is standing in for assessment. The best option decouples the two by pulling the decision back onto checkable criteria — measured on concept, references and price, the choice falls independently of visibility. Used legitimately: being visible and present yourself is good communications craft — it only becomes a problem when presence replaces substance. To spot and counter it: prick up your ears when "we know them" or "we see them everywhere" appears as an argument, and ask for the evidence behind the familiarity. Following the board (option 2) seems plausible because recognition often tracks quality — but here it demonstrably comes from a pure visibility campaign, not from performance; that is the fallacy the effect produces. Striking agency B (option 3) overcorrects and throws out the actual evaluation with it — visibility is no grounds for exclusion, it is simply no proof of suitability either. Extra face-time sessions (option 4) fight the effect with more exposure and push the decision even further onto familiarity instead of criteria.',
    },
    points: 10,
    primaryTechniqueId: 'mere_exposure_effect',
    relatedTechniques: ['mere_exposure_effect', 'liking'],
  },
  {
    id: 'wave5b-mere_exposure_effect-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Der Sympathiegewinn beruht hier darauf, dass ___.',
      en: 'Complete the sentence: the gain in liking here rests on the fact that ___.',
    },
    scenario: {
      de: 'Rebranding einer Regionalbank: Das neue, bewusst aussagelose Klangsignet (drei Töne, kein Text) läuft monatelang am Anfang jedes Telefon-Warteschleifen-Loops und jedes Filial-Spots. In der Marktforschung bewerten Kundinnen die Marke danach als „angenehmer" und „vertrauter" — obwohl weder eine Botschaft noch eine neue Behauptung über die Bank hinzugekommen ist.',
      en: 'Rebranding of a regional bank: the new, deliberately meaningless sonic logo (three notes, no words) plays for months at the start of every phone hold loop and every branch spot. In market research customers afterwards rate the brand as "more pleasant" and "more familiar" — although neither a message nor a new claim about the bank has been added.',
    },
    options: [
      {
        de: 'ein neutraler Reiz durch bloße wiederholte Wahrnehmung vertrauter und dadurch sympathischer wird (Mere-Exposure-Effekt)',
        en: 'a neutral stimulus grows familiar, and thereby more likeable, through mere repeated perception (mere-exposure effect)',
      },
      {
        de: 'eine wiederholte Aussage über die Bank allein durch die Wiederholung glaubwürdiger wirkt (Illusory-Truth-Effekt)',
        en: 'a repeated claim about the bank feels more credible simply because it is repeated (illusory-truth effect)',
      },
      {
        de: 'die Kundinnen dem Verhalten vieler anderer folgen, die die Bank bereits gutheißen (Social Proof)',
        en: 'customers follow the behaviour of many others who already approve of the bank (social proof)',
      },
      {
        de: 'ein vorangestellter Reiz nachfolgende Urteile in eine bestimmte Richtung bahnt (Priming)',
        en: 'a preceding cue paves later judgements in a particular direction (priming)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mere-Exposure-Effekt: Das Klangsignet ist inhaltsleer und behauptet nichts — allein seine ständige Wiederkehr macht es vertraut, und aus der Vertrautheit wird Sympathie. Genau daran erkennst du den Effekt: Die Bewertung steigt, obwohl kein Argument und keine neue Information dazugekommen ist. Legitim einsetzen: Ein Klangsignet einzuführen und bekannt zu machen ist saubere Markenarbeit — solange die Vertrautheit ein echtes Angebot begleitet und nicht ersetzt, und solange du die Übersättigung im Blick behältst, ab der Wiederholung nervt statt zu gefallen. Erkennen und kontern: Trenne „gefällt mir" von „kenne ich" — frag dich, was du über die Bank eigentlich weißt, nicht nur, wie oft du sie gehört hast. Der Illusory-Truth-Effekt (Option 2) liegt nah, weil beide auf Wiederholung beruhen — er betrifft aber das Für-wahr-Halten einer Behauptung; hier wird nichts behauptet, es geht rein um Mögen. Social Proof (Option 3) bräuchte einen sichtbaren Hinweis auf das Verhalten vieler anderer — den gibt es hier nicht, der Reiz wirkt für sich. Priming (Option 4) würde bedeuten, dass ein Reiz ein nachfolgendes, anderes Urteil bahnt; hier wird die Bewertung desselben wiederholt gezeigten Reizes selbst positiver, das ist der Kern des Mere-Exposure-Effekts.',
      en: 'Mere-exposure effect: the sonic logo is empty of content and claims nothing — its constant recurrence alone makes it familiar, and familiarity turns into liking. That is exactly how you recognise the effect: the rating rises although no argument and no new information has been added. Used legitimately: introducing a sonic logo and making it known is clean brand work — as long as familiarity accompanies a real offer rather than replacing it, and as long as you watch for the over-saturation point at which repetition annoys instead of pleases. To spot and counter it: separate "I like it" from "I know it" — ask what you actually know about the bank, not just how often you have heard it. The illusory-truth effect (option 2) is close because both rest on repetition — but it concerns believing a claim; nothing is claimed here, this is purely about liking. Social proof (option 3) would require a visible cue about what many others do — there is none here; the stimulus works on its own. Priming (option 4) would mean a cue paves a later, different judgement; here the rating of the very same repeated stimulus becomes more positive, which is the core of the mere-exposure effect.',
    },
    points: 10,
    primaryTechniqueId: 'mere_exposure_effect',
    relatedTechniques: ['mere_exposure_effect', 'illusory_truth_effect', 'priming'],
  },
];
