import type { Exercise } from '../../types';

// dark_patterns — validated sample batch (content-samples.md), QA: pass.
export const darkPatternsExercises: Exercise[] = [
  {
    id: 'da-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik dominiert dieses Interface?',
      en: 'Which technique dominates this interface?',
    },
    scenario: {
      de: 'In der Abo-Verwaltung eurer App ist "Abo behalten" ein großer grüner Button in der Bildmitte. "Kündigen" erscheint nur als kleiner, grauer Textlink ganz unten — kaum sichtbar.',
      en: 'In your app\'s subscription settings, "Keep subscription" is a large green button in the centre. "Cancel" appears only as a small, grey text link at the very bottom — barely visible.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die ungleiche visuelle Hierarchie — auffälliger "Behalten"-Button gegen versteckten "Kündigen"-Link — lenkt gezielt weg von der Kündigung. Das ist ein klassisches Dark Pattern (Obstruktion). Abgrenzung zum Nudging: Ein Nudge lässt beide Optionen gleich leicht erreichbar und ist transparent; hier wird die legitime Wahl bewusst erschwert. Die ethische Grenze liegt genau dort: Standardwerte und Gestaltung dürfen lenken, aber nicht die gegenteilige Handlung verstecken.',
      en: 'The unequal visual hierarchy — a prominent "Keep" button against a hidden "Cancel" link — deliberately steers away from cancelling. That is a classic dark pattern (obstruction). Contrast with nudging: a nudge keeps both options equally easy to reach and is transparent; here the legitimate choice is deliberately obstructed. That is exactly where the ethical line sits: defaults and design may guide, but must not hide the opposite action.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'da-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'Im Online-Ticketing für euer Firmenevent wird der Basispreis groß beworben. Bearbeitungsgebühr, "Klimabeitrag" und Versandpauschale sind vorausgewählt und erscheinen erst im letzten Schritt vor dem Bezahlen.',
      en: 'In the online ticketing for your corporate event, the base price is advertised prominently. A handling fee, a "climate contribution" and a shipping charge are pre-selected and only appear at the final step before payment.',
    },
    options: [
      { de: 'Dark Patterns', en: 'Dark patterns' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zwei Interface-Tricks greifen ineinander: verschleierte Kosten bis zum letzten Schritt ("Drip Pricing") und vorausgewählte Zusatzposten. Beides sind Dark Patterns — die Manipulation liegt in der Gestaltung des Ablaufs, nicht im Argument. Anchoring ist der naheliegende Fehlgriff: Es würde einen Referenzpreis setzen, um den Endpreis günstig wirken zu lassen — hier geht es aber ums Verstecken und Vorbelegen, nicht ums Verankern. Legitime Alternative: alle Kosten transparent von Anfang an, Zusatzposten aktiv wählbar.',
      en: 'Two interface tricks interlock: costs concealed until the final step ("drip pricing") and pre-selected add-on items. Both are dark patterns — the manipulation lives in the design of the flow, not in an argument. Anchoring is the tempting wrong pick: it would set a reference price to make the final price feel cheap — but here the mechanism is hiding and pre-checking, not anchoring. The legitimate alternative: all costs transparent from the start, add-ons actively opt-in.',
    },
    points: 10,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'da-new-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie reagierst du?',
      en: 'How do you respond?',
    },
    scenario: {
      de: 'Vor dem Produktlaunch schlägt das Marketing vor, im Anmeldeformular das Newsletter-Kästchen voranzukreuzen und die Datenweitergabe an Partner standardmäßig zu aktivieren — "das hebt unsere Opt-in-Rate sofort". Du leitest die Unternehmenskommunikation.',
      en: 'Ahead of the product launch, marketing proposes pre-ticking the newsletter box on the sign-up form and enabling data sharing with partners by default — "that lifts our opt-in rate instantly". You lead corporate communications.',
    },
    options: [
      {
        de: 'Ich stoppe die vorangekreuzten Kästchen: Das ist ein Dark Pattern und bei einwilligungspflichtigen Daten (DSGVO) rechtlich angreifbar. Ich schlage eine klare, aktive Opt-in-Formulierung vor, die den Nutzen benennt und trotzdem konvertiert.',
        en: 'I stop the pre-ticked boxes: this is a dark pattern and, for consent-based data (GDPR), legally vulnerable. I propose a clear, active opt-in that names the benefit and still converts.',
      },
      {
        de: 'Ich stimme zu — höhere Opt-in-Raten sind das Ziel, und die meisten Wettbewerber machen es genauso.',
        en: 'I agree — higher opt-in rates are the goal, and most competitors do it the same way.',
      },
      {
        de: 'Ich lasse das Newsletter-Kästchen vorangekreuzt, entferne aber die Partner-Weitergabe — ein Kompromiss.',
        en: 'I keep the newsletter box pre-ticked but drop the partner sharing — a compromise.',
      },
      {
        de: 'Ich schiebe die Entscheidung ohne eigene Stellungnahme an die Rechtsabteilung ab.',
        en: 'I push the decision to legal without taking a position myself.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Vorangekreuzte Einwilligung ist keine gültige Einwilligung — das hat der EuGH (Planet49) klar entschieden — und untergräbt bei Auffliegen das Vertrauen weit teurer als der kurzfristige Opt-in-Gewinn. Der Kompromiss (Option 3) klingt vernünftig, verschickt aber weiterhin ein Dark Pattern und dieselbe rechtliche Angreifbarkeit; das ist der verführerische Fehlgriff. Die Abgabe an die Rechtsabteilung (Option 4) verkennt, dass Kommunikation hier eine eigene Haltung zu Marke und Vertrauen einbringen muss. Dieselbe Design-Stellschraube (Standardwerte) hat eine ethische Einstellung: transparentes, aktives Opt-in, das den Nutzen kommuniziert.',
      en: 'Pre-ticked consent is not valid consent — the CJEU (Planet49) settled this clearly — and once exposed it erodes trust far more expensively than the short-term opt-in gain. The compromise (option 3) sounds reasonable but still ships a dark pattern and the same legal exposure; that is the tempting wrong pick. Punting to legal (option 4) misses that comms must bring its own stance on brand and trust here. The same design lever (defaults) has an ethical setting: a transparent, active opt-in that communicates the benefit.',
    },
    points: 15,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'da-new-4',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welches Gestaltungselement überschreitet die ethische Grenze zum Dark Pattern?',
      en: 'Which design element crosses the ethical line into a dark pattern?',
    },
    scenario: {
      de: 'Ihr überarbeitet den Cookie-Banner der Unternehmensseite. Vier Elemente stehen zur Debatte: A) eine kurze, klare Erklärung, welche Daten wofür genutzt werden; B) "Alle akzeptieren" ist ein Klick, "Ablehnen" nur über zwei weitere Klicks in einem grau gehaltenen Untermenü erreichbar; C) die Einstellungen lassen sich jederzeit über einen Link im Footer ändern; D) ein sichtbarer Link zur Datenschutzerklärung.',
      en: 'You are reworking the company site\'s cookie banner. Four elements are up for debate: A) a short, clear explanation of which data is used for what; B) "Accept all" is one click, while "Reject" is reachable only via two more clicks in a greyed-out sub-menu; C) settings can be changed at any time via a link in the footer; D) a visible link to the privacy policy.',
    },
    options: [
      { de: 'A — die kurze, klare Datenerklärung', en: 'A — the short, clear data explanation' },
      { de: 'B — "Akzeptieren" in einem Klick, "Ablehnen" tief vergraben', en: 'B — "Accept" in one click, "Reject" buried deep' },
      { de: 'C — jederzeit änderbare Einstellungen im Footer', en: 'C — settings changeable any time via the footer' },
      { de: 'D — der sichtbare Link zur Datenschutzerklärung', en: 'D — the visible link to the privacy policy' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Die ethische Grenze liegt bei der Symmetrie der Wege: Wenn Akzeptieren ein Klick ist und Ablehnen bewusst hinter Klicks und blasser Gestaltung vergraben wird, ist das Obstruktion — ein Dark Pattern, das die Einwilligung unwirksam macht. A, C und D sind legitime Transparenzelemente und keine Manipulation; sie geben Information und Kontrolle, ohne die gegenteilige Wahl zu erschweren. Der Test für Kommunikationsprofis: Akzeptieren und Ablehnen müssen gleich leicht erreichbar sein — sobald ein Weg absichtlich schwerer gemacht wird, ist die Linie überschritten.',
      en: 'The ethical line is the symmetry of the paths: when accepting is one click while rejecting is deliberately buried behind clicks and pale styling, that is obstruction — a dark pattern that invalidates consent. A, C and D are legitimate transparency elements, not manipulation; they provide information and control without making the opposite choice harder. The test for comms professionals: accept and reject must be equally easy to reach — the moment one path is deliberately made harder, the line is crossed.',
    },
    points: 15,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns'],
  },
];
