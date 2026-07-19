// Welle wave5c: 3 Übungen für trick_wording (Trick Wording / Verwirrende Formulierung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cTrickWording: Exercise[] = [
  {
    id: 'wave5c-trick_wording-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt in dieser Zustimmungszeile?',
      en: 'Which technique is at work in this consent line?',
    },
    scenario: {
      de: 'Registrierung im Kundenportal eines Energieversorgers: Vor dem Abschluss steht ein leeres Kästchen mit der Zeile „Lassen Sie dieses Feld leer, wenn Sie nicht möchten, dass wir Ihnen keine Sparangebote mehr senden." Der Neukunde, der schlicht keine Werbung will, liest den Satz zweimal und weiß am Ende nicht, ob ein Haken sein Nein setzt oder aufhebt.',
      en: 'Sign-up in an energy provider\'s customer portal: before finishing, there is an empty box with the line "Leave this field blank if you do not want us to stop sending you savings offers." The new customer, who simply wants no marketing, reads it twice and still cannot tell whether ticking the box states his no or cancels it.',
    },
    options: [
      { de: 'Trick Wording (Verwirrende Formulierung)', en: 'Trick wording (confusing wording)' },
      { de: 'Äquivokation', en: 'Equivocation' },
      { de: 'Loaded Language (Wertende Sprache)', en: 'Loaded language' },
      { de: 'Default / Status-quo-Voreinstellung', en: 'Default / status-quo preset' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Trick Wording: Der Hebel ist die verschachtelte Verneinung im Entscheidungssatz selbst — „leer lassen, wenn Sie nicht möchten, dass wir keine Angebote senden" dreht die Wahl so lange, bis intuitive Handlung und beabsichtigtes Ergebnis auseinanderfallen. Wer schnell liest, kreuzt an oder lässt leer und trifft so nicht die Entscheidung, die er eigentlich wollte. Legitim einsetzen: Denselben Zweck erreichst du sauber, indem du eine einzige bejahende Aussage anbietest („Bitte senden Sie mir Sparangebote") und die Voreinstellung ehrlich setzt — so gestaltest du eigene Einwilligungsstrecken. Erkennen und kontern: Zähle die Verneinungen im Satz; sobald du ihn zweimal lesen musst, um „ankreuzen = ja oder nein?" zu klären, formulierst du die Wahl für dich in einen einfachen Bejahungssatz um und entscheidest danach. Äquivokation wirkt verwandt, weil auch dort Sprache in die Irre führt — sie braucht aber ein Wort, das mitten im Argument die Bedeutung wechselt, nicht eine korrekt gemeinte, aber verdreht gebaute Ja/Nein-Zeile. Loaded Language würde mit wertenden Reizwörtern die Wahrnehmung färben; hier sind die Wörter neutral, allein die Logik ist verknotet. Eine Default-Voreinstellung läge vor, wenn die Zustimmung schon angehakt wäre — das Kästchen ist hier leer; es täuscht die Formulierung, nicht der vorbelegte Haken.',
      en: 'Trick wording: the lever is the nested negation in the decision sentence itself — "leave blank if you do not want us to stop sending offers" twists the choice until the intuitive action and the intended outcome no longer line up. A quick reader ticks or skips the box and so fails to make the choice they actually wanted. Used legitimately: you achieve the same purpose cleanly by offering a single affirmative statement ("Please send me savings offers") and setting the default honestly — that is how you design your own consent flows. To spot and counter it: count the negations in the sentence; the moment you have to read it twice to settle "does ticking mean yes or no?", rewrite the choice for yourself as one plain affirmative and decide from there. Equivocation feels related because language misleads there too — but it needs a word that shifts meaning mid-argument, not a correctly meant yet tangled yes/no line. Loaded language would colour perception with charged trigger words; here the words are neutral and only the logic is knotted. A default preset would be present if consent were already ticked — the box here is empty; the wording deceives, not a pre-checked mark.',
    },
    points: 10,
    primaryTechniqueId: 'trick_wording',
    relatedTechniques: ['trick_wording', 'equivocation', 'loaded_language', 'default_status_quo'],
  },
  {
    id: 'wave5c-trick_wording-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Unternehmenskommunikation und gibst die Texte einer neuen Kampagnen-Landingpage frei. Für den Newsletter-Opt-in schlägt das Growth-Team diese Zeile am Formular vor: „Deaktivieren Sie diese Option nicht, wenn Sie keine relevanten Neuigkeiten verpassen möchten." Das Team argumentiert, so bleibe die Eintragungsquote hoch.',
      en: 'You own corporate communications and are signing off the copy for a new campaign landing page. For the newsletter opt-in, the growth team proposes this line by the form field: "Do not deactivate this option if you do not want to miss relevant news." The team argues it keeps the sign-up rate high.',
    },
    options: [
      {
        de: 'Ich ersetze die Zeile durch eine einzige bejahende Aussage („Ja, schickt mir den Newsletter") mit unvorbelegtem Häkchen und lege im Styleguide fest, dass Einwilligungen ohne doppelte Verneinung und ohne Vorauswahl formuliert werden.',
        en: 'I replace the line with a single affirmative statement ("Yes, send me the newsletter") and an unchecked box, and set a styleguide rule that consent copy carries no double negatives and nothing pre-checked.',
      },
      {
        de: 'Ich übernehme die Zeile: Jede Aussage ist inhaltlich korrekt, und eine höhere Eintragungsquote ist ein legitimes Kampagnenziel.',
        en: 'I adopt the line: every statement is factually correct, and a higher sign-up rate is a legitimate campaign goal.',
      },
      {
        de: 'Ich behalte die Formulierung, setze das Häkchen aber standardmäßig auf „nicht ausgewählt" — dann entscheidet der Nutzer ja aktiv.',
        en: 'I keep the wording but set the box to "unchecked" by default — then the user actively decides after all.',
      },
      {
        de: 'Ich streiche den Opt-in ganz von der Landingpage und sammle Newsletter-Anmeldungen nur noch über einen separaten Kanal.',
        en: 'I drop the opt-in from the landing page entirely and collect newsletter sign-ups only through a separate channel.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist Trick Wording: „nicht deaktivieren, wenn Sie keine … verpassen möchten" verknotet die Wahl so, dass die Eintragung nicht auf einer klaren Entscheidung beruht, sondern auf Lesermüdigkeit. Der Mechanismus sitzt in der Formulierung, nicht im Inhalt — genau deshalb reicht Umschreiben, nicht Weglassen. Die beste Option behebt die Ursache: eine bejahende, vorauswahlfreie Zeile macht die Zustimmung eindeutig, und die Styleguide-Regel schützt künftige Strecken. Legitim einsetzen: Eine hohe Eintragungsquote ist ein faires Ziel — professionell erreichst du sie über einen klaren Nutzen und eine verständliche Ja-Formulierung, deren Zustimmung auch nach Aufdeckung Bestand hat. Erkennen und kontern: Prüfe jede Einwilligungszeile mit dem Ein-Satz-Test — lässt sie sich nur mit doppelter Verneinung erklären, formulierst du sie in ein schlichtes „Ja, ich möchte …" um. Die Übernahme wirkt plausibel, weil wörtliche Korrektheit mit Sauberkeit verwechselt wird — die Zustimmung ist aber durch die Formulierung erschlichen und im Einwilligungsrecht angreifbar. Nur das Häkchen zu entfernen behebt die halbe Ursache: Die verschachtelte Verneinung bleibt und verwirrt weiter, wer aktiv entscheiden will. Den Opt-in ganz zu streichen überkorrigiert — es opfert ein legitimes Ziel, obwohl das Problem allein in der Formulierung lag.',
      en: 'The proposal is trick wording: "do not deactivate this if you do not want to miss …" knots the choice so that sign-ups rest on reader fatigue rather than a clear decision. The mechanism sits in the wording, not the substance — which is exactly why rewriting fixes it and dropping it does not. The best option cures the cause: an affirmative line with nothing pre-checked makes consent unambiguous, and the styleguide rule protects future flows. Used legitimately: a high sign-up rate is a fair goal — you reach it professionally through a clear benefit and a plain yes-line whose consent still holds once noticed. To spot and counter it: run every consent line through the one-sentence test — if it can only be explained with a double negative, rewrite it as a simple "Yes, I would like …". Adopting it seems plausible because literal correctness is mistaken for cleanliness — but the consent is obtained by the wording and is contestable under consent law. Merely unchecking the box fixes only half the cause: the nested negation stays and keeps confusing anyone who wants to decide actively. Dropping the opt-in entirely overcorrects — it sacrifices a legitimate goal when the problem lay in the wording alone.',
    },
    points: 10,
    primaryTechniqueId: 'trick_wording',
    relatedTechniques: ['trick_wording', 'default_status_quo'],
  },
  {
    id: 'wave5c-trick_wording-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vervollständige die Abgrenzung: Bei Trick Wording führt ___ in die Irre, bei Äquivokation ___.',
      en: 'Complete the distinction: with trick wording, ___ misleads; with equivocation, ___.',
    },
    options: [
      {
        de: '… der verdrehte Satzbau mit doppelter Verneinung in einem Ja/Nein-Entscheidungssatz — … ein einzelnes Wort, das mitten im Argument die Bedeutung wechselt',
        en: '… the tangled sentence structure and double negative of a yes/no decision sentence — … a single word that shifts meaning mid-argument',
      },
      {
        de: '… ein einzelnes Wort, das mitten im Argument die Bedeutung wechselt — … der verdrehte Satzbau mit doppelter Verneinung in einem Ja/Nein-Entscheidungssatz',
        en: '… a single word that shifts meaning mid-argument — … the tangled sentence structure and double negative of a yes/no decision sentence',
      },
      {
        de: '… ein wertend aufgeladenes Reizwort, das die Wahrnehmung färbt — … eine bereits angehakte Voreinstellung, die die Trägheit ausnutzt',
        en: '… a value-laden trigger word that colours perception — … a pre-checked default that exploits inertia',
      },
      {
        de: '… ein nach der Zustimmung untergeschobener Posten — … eine wörtlich wahre Aussage, die einen falschen Gesamteindruck erzeugt',
        en: '… an item slipped in after consent — … a literally true statement that creates a false overall impression',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Beide Muster täuschen über Sprache — der Unterschied liegt in der Ebene. Trick Wording verknotet die Struktur eines Entscheidungssatzes (doppelte Verneinung, verschachteltes Opt-in/Opt-out), sodass ankreuzen und leerlassen die Bedeutung tauschen; getäuscht wird am Punkt der Wahl. Äquivokation setzt tiefer im Argument an: Ein und dasselbe Wort wird in wechselnder Bedeutung gebraucht, sodass ein Schluss scheinbar trägt, der bei sauberer Wortbedeutung zerfällt. Legitim einsetzen: Prüfst du eigene Formulare, ist der Ein-Satz-Test das Werkzeug — lässt sich eine Zustimmung nur mit doppelter Verneinung erklären, baust du sie in ein schlichtes „Ja, ich möchte …" um. Erkennen und kontern: Frag dich, ob dich die Satzkonstruktion einer Wahl in die Irre führt (Trick Wording) oder die Bedeutung eines Begriffs in einer Behauptung (Äquivokation). Die zweite Option enthält dieselben Bausteine, vertauscht aber genau die beiden Ebenen. Die dritte beschreibt Loaded Language und eine Default-Voreinstellung — beide arbeiten weder mit verdrehter Satzstruktur noch mit Wortmehrdeutigkeit. Die vierte beschreibt Sneaking (untergeschobener Posten) und Paltering (wörtlich wahr, aber irreführender Gesamteindruck) — zwei ganz andere Nachbarn.',
      en: 'Both patterns deceive through language — the difference is the level. Trick wording knots the structure of a decision sentence (a double negative, a nested opt-in/opt-out) so that ticking and leaving blank swap meaning; the deception happens at the point of choice. Equivocation sits deeper in the argument: one and the same word is used in shifting meanings, so an inference appears to hold that collapses once the word is pinned down. Used legitimately: when you audit your own forms, the one-sentence test is the tool — if a consent can only be explained with a double negative, rebuild it as a plain "Yes, I would like …". To spot and counter it: ask whether the construction of a choice misleads you (trick wording) or the meaning of a term inside a claim (equivocation). The second option holds the same building blocks but swaps exactly those two levels. The third describes loaded language and a default preset — neither works through tangled sentence structure or word ambiguity. The fourth describes sneaking (a slipped-in item) and paltering (literally true but a false overall impression) — two quite different neighbours.',
    },
    points: 10,
    primaryTechniqueId: 'trick_wording',
    relatedTechniques: ['trick_wording', 'equivocation', 'loaded_language'],
  },
];
