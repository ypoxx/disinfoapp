import type { Exercise } from '../../types';

// nudging — validated sample batch (content-samples.md), QA: pass.
export const nudgingExercises: Exercise[] = [
  {
    id: 'nu-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik dominiert hier?',
      en: 'Which technique dominates here?',
    },
    scenario: {
      de: 'Bei der Installation einer App ist das Häkchen "Newsletter abonnieren" bereits gesetzt — wer das nicht möchte, muss es aktiv entfernen.',
      en: 'When installing an app, the "Subscribe to newsletter" checkbox is already ticked — anyone who does not want it has to actively uncheck it.',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Eine vorausgewählte Standardoption ("Default") ist der klassische Nudge: Die Entscheidungsarchitektur lenkt das Verhalten, ohne die Wahl zu verbieten — die meisten Menschen behalten schlicht die Voreinstellung. Anchoring bräuchte einen Zahlenanker, Priming eine vorgelagerte Reizsetzung, Framing eine bestimmte Formulierung — hier wirkt allein die Voreinstellung. Ethische Grenze: legitim, wenn das Abwählen transparent und mühelos möglich ist; manipulativ, wenn der Default dem Absender nützt und der Ausstieg versteckt wird.',
      en: 'A pre-selected default option is the classic nudge: the choice architecture steers behavior without forbidding any option — most people simply keep the preset. Anchoring would need a numeric anchor, priming a preceding stimulus, framing a particular wording — here the preset alone does the work. Ethical line: legitimate when opting out is transparent and effortless; manipulative when the default serves the sender and the exit is hidden.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'anchoring', 'framing'],
  },
  {
    id: 'nu-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Interne Mitteilung der HR-Abteilung: "Ab 1. März werden alle Mitarbeitenden automatisch mit 5 % ihres Bruttogehalts in die neue betriebliche Altersvorsorge aufgenommen. Wer nicht teilnehmen möchte, kann sich jederzeit über das Portal abmelden."',
      en: 'Internal HR message: "As of March 1, all employees will be automatically enrolled in the new company pension plan at 5% of gross salary. Anyone who does not wish to participate can opt out at any time via the portal."',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der treibende Hebel ist die automatische Aufnahme mit Abmeldeoption (Opt-out statt Opt-in) — eine veränderte Entscheidungsarchitektur, also Nudging. Die 5-%-Zahl könnte man für Anchoring halten, aber der Anker bewegt hier keine Verhandlung; entscheidend ist der Default. Framing wäre eine andere Formulierung derselben Zahl, Sozialer Beweis bräuchte einen Verweis auf das Verhalten anderer — beides fehlt. Ethische Grenze: legitim, weil das Ziel (Altersvorsorge) im Interesse der Beschäftigten liegt und die Abmeldung ausdrücklich und einfach genannt ist; manipulativ würde es, wenn der Ausstieg erschwert oder verschwiegen würde.',
      en: 'The driving lever is automatic enrollment with an opt-out (opt-out instead of opt-in) — a modified choice architecture, i.e. nudging. The 5% figure looks like anchoring, but no anchor is moving a negotiation here; the default is decisive. Framing would be a different wording of the same figure, social proof would need a reference to what others do — both are absent. Ethical line: legitimate because the goal (retirement saving) is in the employees\' interest and opting out is stated plainly and easily; it would become manipulative if the exit were obstructed or concealed.',
    },
    points: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'anchoring', 'framing'],
  },
  {
    id: 'nu-new-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du gestaltest die Spendenstrecke einer gemeinnützigen Kampagne und sollst wiederkehrende Spenden erhöhen, ohne die Marke ethisch zu beschädigen. Was tust du?',
      en: 'You are designing the donation flow for a nonprofit campaign and are asked to increase recurring donations without damaging the brand ethically. What do you do?',
    },
    scenario: {
      de: 'Auf der Spendenseite können Unterstützende zwischen einer einmaligen und einer monatlichen Spende wählen. Der Vorstand will mehr Daueraufträge, die Kommunikationsleitung besteht auf Vertrauenswürdigkeit.',
      en: 'On the donation page, supporters can choose between a one-time and a monthly gift. The board wants more recurring donations; comms leadership insists on trustworthiness.',
    },
    options: [
      {
        de: 'Die monatliche Spende als Standard vorauswählen, aber die Einmalspende gleichwertig sichtbar lassen und den Wechsel mit einem Klick ermöglichen.',
        en: 'Pre-select the monthly gift as the default, but keep the one-time option equally visible and switchable with a single click.',
      },
      {
        de: 'Die monatliche Spende vorauswählen und die Einmal-Option nur über einen kleinen Link im Seitenfuß zugänglich machen.',
        en: 'Pre-select the monthly gift and make the one-time option reachable only via a small link in the page footer.',
      },
      {
        de: 'Beide Optionen ohne Vorauswahl neutral nebeneinanderstellen und keine Standardoption setzen.',
        en: 'Place both options neutrally side by side with no pre-selection and set no default.',
      },
      {
        de: 'Die Schaltfläche für die Einmalspende ausgrauen, sodass sie schwerer anzuklicken ist.',
        en: 'Grey out the one-time donation button so it is harder to click.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein legitimer Nudge setzt eine wirksame Voreinstellung, hält die Alternative aber transparent und mühelos erreichbar — das erhöht wiederkehrende Spenden und wahrt die Wahlfreiheit. Option 2 und 4 machen aus dem Nudge ein Dark Pattern: Sie erschweren gezielt die Alternative und riskieren bei Entdeckung Reaktanz und Reputationsschaden. Option 3 ist ethisch einwandfrei, verzichtet aber vollständig auf den Hebel und verfehlt damit das gesetzte Ziel. Die Kunst des Nudgings liegt genau in dieser Linie: Verhalten lenken, ohne die reale Wahlmöglichkeit zu verwässern.',
      en: 'A legitimate nudge sets an effective default while keeping the alternative transparent and effortless to reach — this raises recurring donations and preserves freedom of choice. Options 2 and 4 turn the nudge into a dark pattern: they deliberately obstruct the alternative and risk reactance and reputational damage if exposed. Option 3 is ethically clean but forgoes the lever entirely and therefore misses the stated goal. The craft of nudging lies exactly on this line: steer behavior without diluting the real ability to choose.',
    },
    points: 15,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'dark_patterns', 'framing'],
  },
  {
    id: 'nu-new-4',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welches Merkmal macht diese Entscheidungsarchitektur manipulativ statt legitim?',
      en: 'Which feature makes this choice architecture manipulative rather than legitimate?',
    },
    scenario: {
      de: 'Ein Cookie-Banner zeigt einen großen, farbig hervorgehobenen Button "Alle akzeptieren". Die Option "Ablehnen" ist als blasser, kaum sichtbarer Textlink am unteren Rand versteckt und erfordert zwei zusätzliche Klicks.',
      en: 'A cookie banner shows a large, brightly highlighted "Accept all" button. The "Reject" option is hidden as a pale, barely visible text link at the bottom and requires two extra clicks.',
    },
    options: [
      {
        de: 'Die Ablehnen-Option ist bewusst schwer auffindbar und mit zusätzlichem Aufwand belegt — der Ausstieg ist nicht mehr gleichwertig möglich.',
        en: 'The reject option is deliberately hard to find and burdened with extra effort — opting out is no longer an equivalent choice.',
      },
      {
        de: 'Es wird überhaupt eine Standardvorauswahl angeboten.',
        en: 'A default pre-selection is offered at all.',
      },
      {
        de: 'Der Akzeptieren-Button ist farblich hervorgehoben.',
        en: 'The accept button is visually highlighted with color.',
      },
      {
        de: 'Das Banner erscheint sofort beim Aufruf der Seite.',
        en: 'The banner appears immediately when the page loads.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die ethische Grenze eines Nudges verläuft dort, wo die Wahlfreiheit real erhalten bleibt: Der Ausstieg muss so einfach und transparent sein wie der gewünschte Weg. Hier wird die Ablehnung durch Sichtbarkeits- und Klick-Asymmetrie systematisch erschwert — das ist ein Dark Pattern, kein legitimer Nudge. Eine Standardoption (2) und ein farblich betonter Button (3) sind für sich genommen zulässige Gestaltungsmittel; der Erscheinungszeitpunkt (4) ist irrelevant. Manipulativ wird es erst durch die künstliche Reibung, die die gleichwertige Alternative faktisch entwertet.',
      en: 'The ethical line of a nudge runs where freedom of choice genuinely remains: the exit must be as easy and transparent as the preferred path. Here rejection is systematically obstructed through asymmetry of visibility and clicks — that is a dark pattern, not a legitimate nudge. A default option (2) and a color-emphasized button (3) are permissible design means in themselves; the timing of appearance (4) is irrelevant. It becomes manipulative only through the artificial friction that effectively devalues the equivalent alternative.',
    },
    points: 15,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'dark_patterns'],
  },
];
