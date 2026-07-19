// Welle 5a: 3 Übungen für gish_gallop.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aGishGallop: Exercise[] = [
  {
    id: 'wave5a-gish_gallop-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Verbandssprecherin hier ein?',
      en: 'Which technique is the association spokeswoman using here?',
    },
    scenario: {
      de: 'Live-Fernsehduell zur geplanten Verpackungssteuer: Eine Umweltökonomin führt einen einzelnen, sauber belegten Einwand aus. Die Verbandssprecherin antwortet, ohne auf ihn einzugehen, mit einer Salve — Arbeitsplätze, Exportquoten, drei Ländervergleiche, zwei Studien, Bürokratiekosten, Recyclingquoten, ein Zitat, eine Umfrage — vierzehn Punkte in fünfzig Sekunden. Die Ökonomin schafft es, einen davon zu entkräften; die übrigen dreizehn bleiben stehen.',
      en: 'Live TV debate on a proposed packaging tax: an environmental economist lays out a single, well-documented objection. Without addressing it, the association spokeswoman responds with a salvo — jobs, export ratios, three country comparisons, two studies, red-tape costs, recycling rates, a quote, a poll — fourteen points in fifty seconds. The economist manages to knock down one of them; the other thirteen still stand.',
    },
    options: [
      { de: 'Gish Gallop', en: 'Gish Gallop' },
      { de: 'Firehose of Falsehood (Lügenschwall)', en: 'Firehose of falsehood' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gish Gallop: Der Hebel ist die schiere Menge in kurzer Zeit — vierzehn Behauptungen in fünfzig Sekunden, jede in Sekunden aufgestellt, aber nur in Minuten zu widerlegen. Diese Asymmetrie sorgt dafür, dass die Ökonomin fast alle Punkte unbeantwortet lassen muss und der Rest dadurch bestätigt wirkt. Legitim einsetzen: Mehrere echte Argumente vorzubringen ist völlig in Ordnung — solange sie belegt sind und dein Gegenüber Zeit und Struktur bekommt, sie einzeln zu prüfen; das Manipulative beginnt erst dort, wo die Masse die Prüfung verhindern soll. Erkennen und kontern: Zähl nicht hinterher. Greif die eine tragende oder klar falsche Behauptung heraus, widerlege sie gründlich als Stellvertreter und benenne das Muster („viele Behauptungen, wenig belegt"). Firehose of Falsehood ist der nächste Nachbar und wirkt hier plausibel — es meint aber die kontinuierliche, kanalübergreifende Wiederholung (oft glatter) Falschaussagen über die Zeit, nicht die einmalige Behauptungssalve in einer einzigen Redezeit. Cherry-Picking wählt aus einer Datenlage nur die günstigen Belege aus; hier geht es nicht um Auswahl, sondern um erschlagende Menge. Ein Strohmann würde den Einwand der Ökonomin verzerrt wiedergeben und gegen die Verzerrung argumentieren — die Sprecherin verzerrt nichts, sie überschüttet.',
      en: 'Gish Gallop: the lever is sheer volume in little time — fourteen claims in fifty seconds, each asserted in seconds but only refutable in minutes. That asymmetry forces the economist to leave almost all of them unanswered, and the remainder thereby seem to stand. Used legitimately: putting forward several genuine arguments is perfectly fine — as long as they are substantiated and your counterpart is given the time and structure to address them one by one; the manipulative part only begins where the mass is meant to prevent scrutiny. To spot and counter it: do not chase the tally. Pick the one load-bearing or plainly false claim, refute it thoroughly as a representative sample, and name the pattern ("many claims, little evidence"). Firehose of falsehood is the closest neighbour and seems plausible here — but it means the continuous, cross-channel repetition of (often polished) falsehoods over time, not a one-off salvo of claims within a single speaking turn. Cherry-picking selects only the favourable evidence from a body of data; this is not about selection but about overwhelming quantity. A straw man would distort the economist\'s objection and argue against the distortion — the spokeswoman distorts nothing, she buries you in claims.',
    },
    points: 10,
    primaryTechniqueId: 'gish_gallop',
    relatedTechniques: ['gish_gallop', 'straw_man'],
  },
  {
    id: 'wave5a-gish_gallop-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Live-Radiodebatte zur Krankenhausreform, die du als Kommunikationsberater für einen Klinikverband bestreitest: Dein Gegenüber vom Kostenträger reiht in seiner Redezeit fünfzehn Behauptungen aneinander — Fallzahlen, Wartezeiten, Verwaltungsquoten, drei internationale Vergleiche, mehrere Studien. Der Moderator gibt dir sechzig Sekunden zur Erwiderung.',
      en: 'Live radio debate on hospital reform, which you are contesting as a communications adviser for a hospital association: your counterpart from the payer side strings together fifteen claims in his speaking slot — case numbers, waiting times, administrative ratios, three international comparisons, several studies. The moderator gives you sixty seconds to respond.',
    },
    options: [
      {
        de: 'Ich greife die eine tragende Behauptung heraus — die falsche Fallzahl —, widerlege sie gründlich und mache sie zum Beispiel: „Wenn schon diese zentrale Zahl nicht stimmt, lohnt es, die übrigen ebenso genau zu prüfen." Dazu benenne ich ruhig das Muster.',
        en: 'I pick out the one load-bearing claim — the wrong case figure — refute it thoroughly and make it the example: "If even this central number is off, it is worth checking the rest just as closely." And I calmly name the pattern.',
      },
      {
        de: 'Ich arbeite die Liste im Tempo ab und versuche, in sechzig Sekunden zu allen fünfzehn Punkten kurz etwas zu sagen.',
        en: 'I work through the list at speed and try to say something brief about all fifteen points within sixty seconds.',
      },
      {
        de: 'Ich kontere mit einer eigenen, noch längeren Liste von Gegenargumenten, um die Deutungshoheit zurückzuholen.',
        en: 'I counter with an even longer list of my own arguments to win back control of the narrative.',
      },
      {
        de: 'Ich stelle fest, dass eine so komplexe Materie in sechzig Sekunden nicht seriös zu behandeln ist, und verzichte auf eine inhaltliche Erwiderung.',
        en: 'I note that a matter this complex cannot be handled responsibly in sixty seconds, and decline to respond on the substance.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Salve deines Gegenübers ist ein Gish Gallop: Der Hebel ist die Menge, nicht die Qualität — fünfzehn Behauptungen, von denen keine einzeln geprüft werden soll, weil die Zeit dafür fehlt. Wer alle abarbeiten will, verliert genau in dieser Asymmetrie. Die beste Option dreht sie um: eine Behauptung, gründlich zerlegt, als Stichprobe für die Verlässlichkeit des Rests — plus die Benennung des Musters, damit das Publikum die Methode sieht. Legitim einsetzen: Viele echte Argumente sind kein Foul — problematisch wird es erst, wenn die Masse die Prüfung ersetzen soll; du selbst bringst deshalb wenige, belegte Punkte statt einer Gegen-Salve. Erkennen und kontern: Sobald jemand mehr Behauptungen auftürmt, als in der Zeit prüfbar sind, priorisiere statt aufzuzählen. Alle fünfzehn Punkte in sechzig Sekunden abzuarbeiten spielt dem Muster direkt in die Hände — du bestätigst das Tempo und wirkst gehetzt. Mit einer eigenen, noch längeren Liste zu kontern ist Gegen-Gish-Gallop: Es verdoppelt den Wortschwall und überlässt dem Publikum ein unauflösbares Behauptungs-Patt. Ganz auf die Erwiderung zu verzichten überlässt die dreizehn stehengebliebenen Behauptungen unwidersprochen dem Raum — genau das Ergebnis, auf das die Technik zielt.',
      en: 'Your counterpart\'s salvo is a Gish Gallop: the lever is quantity, not quality — fifteen claims, none of which is meant to be checked individually because there is no time for it. Anyone who tries to work through them all loses in precisely that asymmetry. The best option turns it around: one claim, thoroughly dismantled, as a sample for the reliability of the rest — plus naming the pattern so the audience sees the method. Used legitimately: there is nothing wrong with making many genuine arguments — it only becomes a problem when the mass is meant to replace scrutiny; that is why you yourself bring a few substantiated points rather than a counter-salvo. To spot and counter it: the moment someone piles up more claims than can be checked in the time, prioritise instead of enumerating. Working through all fifteen points in sixty seconds plays straight into the pattern — you endorse the tempo and come across as rushed. Countering with your own even longer list is counter-Gish-Gallop: it doubles the torrent and hands the audience an unresolvable stand-off of assertions. Declining to respond at all leaves the thirteen remaining claims unchallenged in the room — exactly the outcome the technique aims for.',
    },
    points: 10,
    primaryTechniqueId: 'gish_gallop',
    relatedTechniques: ['gish_gallop'],
  },
  {
    id: 'wave5a-gish_gallop-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Bürgerversammlung zu einem Bauprojekt: Ein Anwohner nennt einen einzigen konkreten Kritikpunkt am Verkehrsgutachten. Ohne darauf einzugehen, antwortet die Projektsprecherin mit achtzehn schnellen Behauptungen in Folge — Fördermittel, Lärmwerte, Anwohnerumfragen, zwei Referenzstädte, Bauzeitpläne, Gutachternamen. Die Moderatorin schließt die Fragerunde, bevor auch nur einer der Punkte aufgegriffen ist; die übrigen bleiben unwidersprochen stehen.',
      en: 'Public consultation on a construction project: a local resident raises one concrete criticism of the traffic assessment. Without addressing it, the project spokeswoman answers with eighteen rapid claims in a row — grants, noise levels, resident surveys, two reference cities, construction schedules, expert names. The moderator closes the Q&A before a single one of them has been taken up, and the rest stand unchallenged.',
    },
    options: [
      { de: 'Gish Gallop', en: 'Gish Gallop' },
      { de: 'Firehose of Falsehood (Lügenschwall)', en: 'Firehose of falsehood' },
      { de: 'Whataboutism (Tu quoque)', en: 'Whataboutism (tu quoque)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gish Gallop: Achtzehn Behauptungen in Folge, jede in Sekunden gesagt, keine in der Fragerunde zu prüfen — die Menge selbst ist der Hebel, nicht der Inhalt der einzelnen Punkte. Weil das Widerlegen ungleich länger dauert als das Behaupten, bleibt der Großteil stehen und wirkt bestätigt. Legitim einsetzen: Viele echte Argumente sind erlaubt, solange sie belegt sind und einzeln beantwortet werden können — überwältigen darf die Menge nicht. Erkennen und kontern: Zähl nicht mit, sondern nimm dir eine tragende Behauptung, prüfe sie gründlich und mach die Methode sichtbar. Firehose of Falsehood ist der engste Nachbar, meint aber die dauerhafte, kanalübergreifende Wiederholung von Falschaussagen über die Zeit — hier ist es eine einzelne Salve in einer Wortmeldung, deshalb Gish Gallop. Whataboutism läge vor, wenn die Sprecherin auf den Kritikpunkt mit einem Gegenvorwurf („Und was ist mit …?") ausgewichen wäre; sie weicht aber nicht per Gegenfrage aus, sondern per Masse.',
      en: 'Gish Gallop: eighteen claims in a row, each said in seconds, none checkable in the Q&A — the quantity itself is the lever, not the content of the individual points. Because refuting takes far longer than asserting, most of them stand and appear confirmed. Used legitimately: many genuine arguments are fine, as long as they are substantiated and can be answered one by one — the mass must not overwhelm. To spot and counter it: do not keep count; take one load-bearing claim, examine it thoroughly, and make the method visible. Firehose of falsehood is the closest neighbour, but it means the sustained, cross-channel repetition of falsehoods over time — here it is a single salvo within one statement, hence Gish Gallop. Whataboutism would apply if the spokeswoman had dodged the criticism with a counter-accusation ("And what about …?"); she does not dodge with a counter-question but by sheer volume.',
    },
    points: 10,
    primaryTechniqueId: 'gish_gallop',
    relatedTechniques: ['gish_gallop'],
  },
];
