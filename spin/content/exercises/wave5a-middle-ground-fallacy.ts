// Welle 5a: 3 Übungen für middle_ground_fallacy.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aMiddleGroundFallacy: Exercise[] = [
  {
    id: 'wave5a-middle_ground_fallacy-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Bereichsleiter hier ein?',
      en: 'Which technique is the division head using here?',
    },
    scenario: {
      de: 'Interne Freigaberunde für ein Nachhaltigkeits-Statement: Das Fachteam beziffert den CO2-Fußabdruck eines Produkts anhand geprüfter Messdaten auf 8 kg, eine aktivistische Kampagne behauptet 40 kg. Der Bereichsleiter beendet die Diskussion: „Nehmen wir 24 — die realistische Zahl wird schon in der Mitte liegen." Er begründet die 24 allein damit, dass sie zwischen beiden Werten liegt.',
      en: 'Internal sign-off meeting for a sustainability statement: the technical team, drawing on verified measurements, puts a product\'s carbon footprint at 8 kg; an activist campaign claims 40 kg. The division head closes the debate: "Let\'s go with 24 — the realistic figure is bound to be somewhere in the middle." He justifies the 24 solely by the fact that it sits between the two values.',
    },
    options: [
      { de: 'Goldene Mitte (Ad temperantiam)', en: 'Middle-ground fallacy (argument to moderation)' },
      { de: 'False Balance / Bothsidesism', en: 'False balance / bothsidesism' },
      { de: 'Appell an den gesunden Menschenverstand', en: 'Appeal to common sense' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Goldene Mitte (Ad temperantiam): Die 24 wird für richtig erklärt, weil sie zwischen den beiden Werten liegt — der Mittelwert ersetzt die Prüfung, welche Seite belastbare Messdaten hat. Der Hebel ist die Intuition, dass Kompromisse vernünftig und ausgewogen wirken; ob das Publikum die Mittelzahl eher glaubt, gilt als plausibel, ist aber nicht belegt — gesichert ist das Denkmuster, nicht seine Wirkung. Legitim ist die Mitte dort, wo zwei gleich gut gestützte Schätzungen vorliegen und der Kompromiss inhaltlich begründet wird — nicht, wo eine Seite gemessen und die andere behauptet ist. Erkennen und kontern: Frag „Woraus ergibt sich diese Zahl — aus Daten oder aus dem Halbieren zweier Positionen?" und trenn die belegte Seite ausdrücklich von der behaupteten. False Balance wirkt plausibel, weil auch hier zwei Positionen nebeneinanderstehen — sie würde beiden aber gleiche Bühne und gleiches Format geben und so einen Streit inszenieren; hier geht es nicht um die Bühne, sondern darum, dass der Mittelwert zur Wahrheit erklärt wird. Der Appell an den gesunden Menschenverstand wirkt plausibel, weil die Mitte sich intuitiv „vernünftig" anfühlt — er würde die Zahl damit begründen, dass sie jedem einleuchtet; hier ist die ausdrückliche Begründung aber allein ihre Lage zwischen den beiden Werten. Cherry-Picking wirkt plausibel, weil Zahlen selektiv eingesetzt werden können — es würde aber die günstige Zahl zeigen und die ungünstige verschweigen; hier werden beide genannt und dann gemittelt.',
      en: 'Middle-ground fallacy (argument to moderation): the 24 is declared correct because it sits between the two values — the average stands in for checking which side has solid measurements. The lever is the intuition that compromises feel reasonable and even-handed; whether audiences actually believe the middle figure more is considered plausible but is not established — what is documented is the reasoning pattern, not its effect. The middle is legitimate where two equally well-supported estimates exist and the compromise is argued on the merits — not where one side is measured and the other merely asserted. To spot and counter it: ask "Where does this number come from — from data, or from splitting the difference between two positions?" and separate the evidenced side explicitly from the claimed one. False balance seems plausible because two positions sit side by side here too — but it would give both an equal platform and equal airtime to stage a controversy; here it is not about the platform, but about the average being declared the truth. An appeal to common sense seems plausible because the middle intuitively feels "sensible" — it would justify the number by claiming it is obvious to anyone; here the stated justification is solely its position between the two values. Cherry-picking seems plausible because numbers can be used selectively — but it would show the favourable figure and hide the unfavourable one; here both are named and then averaged.',
    },
    points: 10,
    primaryTechniqueId: 'middle_ground_fallacy',
    relatedTechniques: ['middle_ground_fallacy', 'false_balance', 'cherry_picking'],
  },
  {
    id: 'wave5a-middle_ground_fallacy-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Klinikbetreibers. Nach Berichten über Wartezeiten nennt die Fachabteilung, gestützt auf das Terminsystem, im Schnitt 18 Tage; in einem Patientenforum kursiert „über 90 Tage". In der Abstimmung schlägt ein Vorstand vor, nach außen „rund 50 Tage" zu nennen — das liege bequem in der Mitte und wirke glaubwürdig.',
      en: 'You are head of communications for a hospital operator. After reports about waiting times, the clinical department — drawing on the scheduling system — cites an average of 18 days; a patient forum is circulating "over 90 days." In the sign-off meeting, a board member proposes stating "around 50 days" publicly — it sits comfortably in the middle and would come across as credible.',
    },
    options: [
      {
        de: 'Ich lege die 18 Tage mit der Messgrundlage aus dem Terminsystem auf den Tisch und erkläre: Eine belastbare Zahl entsteht aus Daten, nicht aus dem Mittel zweier Behauptungen — die abweichende Wahrnehmung im Forum benennen wir gesondert und ordnen sie ein.',
        en: 'I put the 18 days on the table together with the measurement basis from the scheduling system and explain: a solid number comes from data, not from averaging two claims — we address the diverging perception in the forum separately and put it in context.',
      },
      {
        de: 'Ich übernehme die 50 Tage — ein Wert in der Mitte nimmt beiden Seiten den Wind aus den Segeln, und niemand kann uns Einseitigkeit vorwerfen.',
        en: 'I go with the 50 days — a value in the middle takes the wind out of both sides\' sails, and no one can accuse us of being one-sided.',
      },
      {
        de: 'Ich nenne öffentlich keine konkrete Zahl, sondern spreche von „individuell sehr unterschiedlichen Wartezeiten" — solange keine belastbare Erhebung vorliegt, wirkt jede Einzelzahl angreifbar.',
        en: 'I state no concrete number publicly and speak of "waiting times that vary greatly from case to case" — as long as there is no robust survey, any single figure looks open to challenge.',
      },
      {
        de: 'Ich nenne offensiv die 18 Tage und erwähne die Forumszahl mit keinem Wort — je näher wir am Bestwert bleiben, desto besser.',
        en: 'I push the 18 days assertively and never mention the forum figure — the closer we stay to the best value, the better.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag „rund 50 Tage" ist die Goldene Mitte in Reinform: Die Zahl wird nicht aus den Termindaten abgeleitet, sondern als Mittel zwischen einer gemessenen (18) und einer behaupteten Größe (über 90) gebildet — und allein deshalb für glaubwürdig gehalten. Der Hebel ist die Intuition, dass die Mitte fair und unverdächtig wirkt; ob sie beim Publikum tatsächlich glaubwürdiger ankommt, gilt als plausibel, ist aber nicht belegt. Die beste Option arbeitet an der Grundlage statt am Gefühl: Sie nennt die belegte Zahl mitsamt Messbasis und behandelt die Forumswahrnehmung als eigenes Thema, nicht als zweiten Pol eines Mittelwerts. Genau das ist dein allgemeiner Konter: Frag nach der Herkunft der Zahl und trenn das Gemessene vom Behaupteten. Legitim wäre ein mittlerer Wert nur, wenn beide Enden gleich gut belegt wären; das ist hier nicht der Fall. Option 2 wirkt plausibel, weil ein Mittelweg deeskalierend und ausgewogen erscheint — genau darin liegt der Fehlschluss: Die 50 hat keine Datengrundlage. Option 3 wirkt plausibel, weil Unschärfe Angriffsfläche vermeidet — sie weicht der Frage aber aus und verspielt Vertrauen, sobald die echte Zahl bekannt wird. Option 4 wirkt plausibel, weil die 18 tatsächlich belegt ist — das Verschweigen der abweichenden Wahrnehmung ist aber Cherry-Picking und fällt zurück, sobald Betroffene ihre Erfahrungen dagegenhalten.',
      en: 'The "around 50 days" proposal is the middle-ground fallacy in pure form: the number is not derived from the scheduling data but formed as the average of a measured value (18) and a claimed one (over 90) — and held credible for that reason alone. The lever is the intuition that the middle looks fair and above suspicion; whether audiences actually find it more credible is considered plausible but not established. The best option works on the basis rather than the feeling: it states the evidenced figure together with its measurement basis and treats the forum perception as a separate issue, not as the second pole of an average. That is your general counter: ask where the number comes from and separate the measured from the asserted. A middle value would be legitimate only if both ends were equally well evidenced; that is not the case here. Option 2 seems plausible because a middle path looks de-escalating and even-handed — and that is exactly the fallacy: the 50 has no data behind it. Option 3 seems plausible because vagueness offers less of a target — but it dodges the question and forfeits trust the moment the real number surfaces. Option 4 seems plausible because the 18 is genuinely evidenced — but suppressing the diverging perception is cherry-picking and rebounds as soon as affected patients hold up their own experience.',
    },
    points: 10,
    primaryTechniqueId: 'middle_ground_fallacy',
    relatedTechniques: ['middle_ground_fallacy', 'cherry_picking'],
  },
  {
    id: 'wave5a-middle_ground_fallacy-3',
    type: 'scenario-quiz',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster steckt in diesem Textentwurf?',
      en: 'Which pattern is at work in this draft?',
    },
    scenario: {
      de: 'Blogbeitrag der Unternehmenskommunikation zu einem Produktrückruf: Ein TÜV-Bericht nennt 3 Prozent Ausfallrate, ein empörter Kunden-Thread spricht von „jedem zweiten Gerät". Der Entwurf schließt: „Wir wollen weder verharmlosen noch dramatisieren und legen uns darum auf einen Wert dazwischen fest — realistisch ist etwa jedes vierte Gerät betroffen." Eine Herleitung aus den Prüfdaten fehlt.',
      en: 'Corporate-communications blog post about a product recall: an independent inspection report cites a 3 percent failure rate; an outraged customer thread talks of "every second device." The draft concludes: "We want neither to downplay nor to dramatise, so we settle on a value in between — realistically about one in four devices is affected." No derivation from the inspection data is given.',
    },
    options: [
      { de: 'Goldene Mitte (Ad temperantiam)', en: 'Middle-ground fallacy (argument to moderation)' },
      { de: 'False Balance / Bothsidesism', en: 'False balance / bothsidesism' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
      { de: 'Appell an den gesunden Menschenverstand', en: 'Appeal to common sense' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Goldene Mitte (Ad temperantiam): „Etwa jedes vierte Gerät" (rund 25 Prozent) ist grob der Mittelwert aus 3 Prozent und rund 50 Prozent — die Zahl wird nicht aus den Prüfdaten hergeleitet, sondern gewählt, weil sie zwischen einem geprüften Wert und einer emotionalen Behauptung liegt. Der Hebel ist die Intuition, dass ein mittlerer Wert maßvoll und unverdächtig wirkt; ob er beim Publikum tatsächlich glaubwürdiger ankommt, gilt als plausibel, ist aber nicht belegt — gesichert ist das Denkmuster, nicht seine Wirkung. Legitim wäre ein mittlerer Wert nur, wenn beide Enden gleich belastbar wären; hier steht ein Prüfbericht gegen einen Forumseindruck. Erkennen und kontern: Frag nach der Datengrundlage der Zahl und nenn den geprüften Wert offen, statt ihn mit einer Behauptung zu verrechnen. False Balance wirkt plausibel, weil zwei Sichtweisen im Spiel sind — sie würde Prüfbericht und Kunden-Thread aber als gleichwertige Positionen mit gleichem Raum nebeneinanderstellen; hier wird nichts nebeneinandergestellt, sondern zu einer einzigen Mittelzahl verrechnet, die als die Wahrheit ausgegeben wird. Cherry-Picking wirkt plausibel, weil die geprüften 3 Prozent unter den Tisch fallen — es würde aber die günstige Zahl gezielt zeigen und die ungünstige verschweigen; hier wird keine der beiden echten Zahlen genannt, sondern eine erfundene Mitte. Der Appell an den gesunden Menschenverstand wirkt plausibel, weil der mittlere Wert sich vernünftig anfühlt — er würde die Zahl damit begründen, dass sie jedem einleuchtet; hier ist die Begründung allein ihre Lage zwischen den beiden Angaben.',
      en: 'Middle-ground fallacy (argument to moderation): "about one in four devices" (roughly 25 percent) is broadly the average of 3 percent and around 50 percent — the number is not derived from the inspection data but chosen because it lies between a verified value and an emotional claim. The lever is the intuition that a middle value looks measured and above suspicion; whether audiences actually find it more credible is considered plausible but not established — what is documented is the reasoning pattern, not its effect. A middle value would be legitimate only if both ends were equally solid; here an inspection report stands against a forum impression. To spot and counter it: ask what data the number rests on and state the verified value openly instead of averaging it with a claim. False balance seems plausible because two viewpoints are in play — but it would place the inspection report and the customer thread side by side as equally valid positions with equal space; here nothing is placed side by side, it is merged into a single middle figure passed off as the truth. Cherry-picking seems plausible because the verified 3 percent is dropped — but it would deliberately show the favourable figure and hide the unfavourable one; here neither of the two real numbers is stated, only an invented middle. An appeal to common sense seems plausible because the middle value feels sensible — it would justify the number by claiming it is obvious to anyone; here the justification is solely its position between the two figures.',
    },
    points: 10,
    primaryTechniqueId: 'middle_ground_fallacy',
    relatedTechniques: ['middle_ground_fallacy', 'false_balance', 'cherry_picking'],
  },
];
