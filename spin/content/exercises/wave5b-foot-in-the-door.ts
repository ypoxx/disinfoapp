// Welle 5b: 3 Übungen für foot_in_the_door (Foot-in-the-Door).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bFootInTheDoor: Exercise[] = [
  {
    id: 'wave5b-foot_in_the_door-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Spendenreferentin ein?',
      en: 'Which technique is the fundraising officer using?',
    },
    scenario: {
      de: 'Fundraising einer Stiftung per Telefon: Die Spendenreferentin bittet den Bestandsspender zunächst nur, eine kurze Online-Petition mit einem Klick zu unterzeichnen. Vierzehn Tage später ruft sie erneut an — diesmal mit der Bitte um eine monatliche Dauerspende: „Sie haben unser Anliegen ja schon unterschrieben, dann passt eine kleine Fördermitgliedschaft doch gut dazu."',
      en: 'A foundation fundraising by phone: the fundraising officer first asks the existing donor merely to sign a short online petition with one click. Fourteen days later she calls again — this time asking for a recurring monthly gift: "You have already signed our cause, so a small supporting membership fits right in."',
    },
    options: [
      { de: 'Foot-in-the-Door', en: 'Foot-in-the-door' },
      { de: 'Door-in-the-Face', en: 'Door-in-the-face' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Konsistenz', en: 'Consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Foot-in-the-Door: Zuerst eine kleine, kaum ablehnbare Bitte (ein Klick auf die Petition), dann — von derselben Seite — die eigentlich gewollte größere (Dauerspende). Der Hebel ist das Bedürfnis nach Konsistenz: Wer eben noch „Ja, dieses Anliegen unterstütze ich" signalisiert hat, gerät unter Druck, sich zum eigenen Ja passend zu verhalten; die Formulierung „Sie haben ja schon unterschrieben" macht den Konsistenzanker ausdrücklich. Legitim einsetzen: Menschen niedrigschwellig einsteigen zu lassen und Engagement zu staffeln ist gutes Handwerk — professionell bleibt es, wenn jede Stufe ehrlich benannt ist und ein Nein zur großen Bitte den kleinen Einstieg nicht entwertet. Erkennen und kontern: Prüfe die zweite Bitte für sich — „Würde ich die Dauerspende auch zusagen, wenn sie direkt damit gekommen wäre?" Dein früheres, kleines Ja verpflichtet dich zu nichts Größerem. Door-in-the-Face wirkt plausibel, weil auch dort zwei Bitten aufeinander folgen — dort steht aber die große Bitte am Anfang und die kleine folgt als Zugeständnis; hier ist die Reihenfolge genau umgekehrt, klein zuerst. Reziprozität liegt nahe, verlangt aber eine Vorleistung der Gegenseite (ein Geschenk, ein Entgegenkommen) — die Referentin hat nichts gegeben, sondern nur um etwas Kleines gebeten. Konsistenz benennt das zugrunde liegende Prinzip; Foot-in-the-Door ist genau die zweistufige Prozedur, mit der dieses Prinzip gezielt ausgelöst wird.',
      en: 'Foot-in-the-door: first a small, hard-to-refuse request (one click on the petition), then — from the same party — the larger request that was the real goal (a recurring gift). The lever is the need for consistency: someone who has just signalled "yes, I support this cause" comes under pressure to act in line with that yes; the phrase "you have already signed" makes the consistency anchor explicit. Used legitimately: letting people enter at a low threshold and tiering engagement is good craft — it stays professional when every step is named honestly and a no to the big ask does not devalue the small entry point. To spot and counter it: assess the second request on its own — "Would I commit to the recurring gift if she had led with it?" Your earlier small yes obliges you to nothing larger. Door-in-the-face looks plausible because there too one request follows another — but there the large request comes first and the small one follows as a concession; here the order is exactly reversed, small first. Reciprocity seems close but requires an advance move by the other side (a gift, a concession) — the officer gave nothing; she merely made a small ask. Consistency names the underlying principle; foot-in-the-door is precisely the two-step procedure that triggers it on purpose.',
    },
    points: 10,
    primaryTechniqueId: 'foot_in_the_door',
    relatedTechniques: ['foot_in_the_door', 'door_in_the_face', 'consistency'],
  },
  {
    id: 'wave5b-foot_in_the_door-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Branchenverbands. Ein Dienstleister hat dich vor zwei Wochen gebeten, seinen Fachbeitrag „nur ganz unverbindlich zu überfliegen" — du hast kurz zugesagt und ihm eine freundliche Rückmeldung gegeben. Jetzt schreibt er: „Da Sie den Beitrag ja schon kennen und gut fanden, würden Sie ihn als Gastautor unter Ihrem Namen im Verbandsnewsletter veröffentlichen?" Der Newsletter geht an 12.000 Mitglieder; ein solcher Beitrag müsste eigentlich durch die Redaktionsprüfung und eine Interessenkonflikt-Kennzeichnung.',
      en: 'You head communications at an industry association. Two weeks ago a service provider asked you to "just glance over, no strings attached" his expert article — you agreed briefly and gave friendly feedback. Now he writes: "Since you already know the piece and liked it, would you publish it as a guest author under your name in the association newsletter?" The newsletter reaches 12,000 members; a piece like this would normally have to pass editorial review and carry a conflict-of-interest label.',
    },
    options: [
      {
        de: 'Ich löse die Entscheidung von meinem früheren Ja: Ich bewerte die Newsletter-Veröffentlichung nach unseren Kriterien — Relevanz, Redaktionsprüfung, Kennzeichnung des Interessenkonflikts — als wäre es eine Erstanfrage, unabhängig davon, dass ich den Text schon kenne.',
        en: 'I detach the decision from my earlier yes: I judge the newsletter publication against our criteria — relevance, editorial review, conflict-of-interest labelling — as if it were a first-time request, regardless of my having already seen the text.',
      },
      {
        de: 'Ich veröffentliche ihn: Ich habe den Beitrag ja schon gut gefunden, jetzt einen Rückzieher zu machen wäre inkonsequent und würde den Dienstleister vor den Kopf stoßen.',
        en: 'I publish it: I already said the piece was good, and backing out now would be inconsistent and would offend the service provider.',
      },
      {
        de: 'Ich veröffentliche ihn unter meinem Namen, aber ohne Interessenkonflikt-Hinweis — sonst wirkt es, als misstraute ich dem Dienstleister, mit dem ich weiter zusammenarbeiten will.',
        en: 'I publish it under my name but without the conflict-of-interest note — otherwise it looks as if I distrust the provider I want to keep working with.',
      },
      {
        de: 'Ich breche den Kontakt ab: Wer mich mit einem harmlosen „Überfliegen" ködert, um dann eine Veröffentlichung zu verlangen, manipuliert — mit solchen Dienstleistern arbeite ich nicht weiter.',
        en: 'I cut off contact: anyone who baits me with a harmless "glance over" only to demand a publication is manipulating me — I stop working with providers like that.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Dienstleister spielt Foot-in-the-Door: Die harmlose erste Bitte („nur überfliegen") holt ein kleines Ja ab, an das die eigentlich gewollte große Bitte (Veröffentlichung unter deinem Namen) angedockt wird — „Da Sie den Beitrag ja schon gut fanden" ist der Konsistenzanker. Die beste Option entkoppelt genau das: Wer die Newsletter-Veröffentlichung an den eigenen Kriterien misst — Relevanz, Redaktionsprüfung, Kennzeichnung — behandelt sie als das, was sie ist: eine neue, weit größere Entscheidung, die das kleine Ja nicht präjudiziert. Legitim einsetzen: Auch du darfst niedrigschwellig einsteigen lassen und Zusammenarbeit staffeln — professionell bleibt es, wenn jede Stufe offen benannt ist und die kleine Bitte nicht bloß Türöffner für eine ganz andere ist. Erkennen und kontern: Werde aufmerksam, wenn eine große Bitte mit „Sie haben ja schon…" an ein früheres kleines Ja gehängt wird — frag dich, ob du der großen Bitte auch ohne die Vorgeschichte zustimmen würdest. Die Zusage aus Konsistenz (Option 2) wirkt plausibel, weil wir ungern von einer geäußerten Haltung abrücken — aber eine wohlwollende Rückmeldung zu einem Text ist keine Zusage zur Veröffentlichung unter deinem Namen; die beiden Entscheidungen haben ganz unterschiedliche Folgen. Das Weglassen der Kennzeichnung (Option 3) verwechselt Höflichkeit mit Standard — gerade der Interessenkonflikt macht die Kennzeichnung nötig, unabhängig von der Beziehung. Der Komplettabbruch (Option 4) überkorrigiert: Ein gestaffeltes Vorgehen ist nicht per se unseriös; entscheidend ist, dass du die große Bitte eigenständig prüfst, nicht dass du jeden Kontakt kappst.',
      en: 'The service provider is running foot-in-the-door: the harmless first request ("just glance over") secures a small yes, to which the real, large request (publication under your name) is then attached — "since you already liked the piece" is the consistency anchor. The best option decouples exactly that: judging the newsletter publication against your own criteria — relevance, editorial review, labelling — treats it as what it is: a new, far larger decision that the small yes does not prejudge. Used legitimately: you too may let people enter at a low threshold and tier collaboration — it stays professional when every step is named openly and the small request is not merely a door-opener for a wholly different one. To spot and counter it: take notice when a large request is hung on an earlier small yes with "since you already…" — ask yourself whether you would agree to the big request without that history. Accepting out of consistency (option 2) looks plausible because we dislike moving away from a stated position — but friendly feedback on a text is not a commitment to publish it under your name; the two decisions carry very different consequences. Dropping the label (option 3) confuses courtesy with standards — the conflict of interest is exactly what makes the label necessary, regardless of the relationship. Cutting off contact entirely (option 4) overcorrects: a tiered approach is not inherently bad faith; what matters is that you assess the big request independently, not that you sever every contact.',
    },
    points: 10,
    primaryTechniqueId: 'foot_in_the_door',
    relatedTechniques: ['foot_in_the_door', 'consistency'],
  },
  {
    id: 'wave5b-foot_in_the_door-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Kundenservice eines Fitnessstudios: Die Mitarbeiterin bittet das Neumitglied an der Theke zunächst nur, dem Studio bei Instagram mit einem Klick zu folgen. Beim nächsten Besuch fragt sie: „Sie folgen uns ja schon — mögen Sie ein kurzes Video-Testimonial für unseren Kanal aufnehmen, mit Gesicht und Namen?"',
      en: 'A gym\'s customer service: the staff member first asks the new member at the desk merely to follow the studio on Instagram with one tap. On the next visit she asks: "You already follow us — would you record a short video testimonial for our channel, face and name included?"',
    },
    options: [
      { de: 'Foot-in-the-Door', en: 'Foot-in-the-door' },
      { de: 'Door-in-the-Face', en: 'Door-in-the-face' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Foot-in-the-Door: Erst die winzige Bitte (ein Klick auf „Folgen"), dann die eigentlich gewollte große (ein Video-Testimonial mit Gesicht und Namen) — angedockt an das kleine Ja: „Sie folgen uns ja schon." Der Hebel ist Konsistenz: Wer sich eben als Fan gezeigt hat, soll auch der größeren Bitte zustimmen, um zum eigenen Verhalten zu passen. Legitim einsetzen: Niedrigschwellig einzusteigen und Engagement zu staffeln ist in Ordnung — professionell bleibt es, wenn die große Bitte offen benannt und ein Nein akzeptiert würde. Erkennen und kontern: Prüfe die zweite Bitte für sich — „Würde ich das Testimonial auch ohne das vorherige Folgen geben?" Das kleine Ja verpflichtet dich zu nichts. Door-in-the-Face wirkt plausibel, weil auch dort zwei Bitten aufeinander folgen — dort aber die große zuerst und die kleine als Zugeständnis danach; hier ist es umgekehrt, klein zuerst. Reziprozität liegt nahe, setzt aber eine Vorleistung des Studios voraus (ein Geschenk, ein Entgegenkommen) — hier gab es keine, nur eine gestaffelte Bitte.',
      en: 'Foot-in-the-door: first the tiny request (one tap on "follow"), then the large one that was the real goal (a video testimonial with face and name) — hung on the small yes: "you already follow us." The lever is consistency: someone who has just shown themselves as a fan is meant to grant the bigger request too, to stay in line with their own behaviour. Used legitimately: entering at a low threshold and tiering engagement is fine — it stays professional when the big request is named openly and a no would be accepted. To spot and counter it: assess the second request on its own — "Would I give the testimonial even without having followed first?" The small yes obliges you to nothing. Door-in-the-face looks plausible because there too one request follows another — but there the large one comes first and the small one follows as a concession; here it is reversed, small first. Reciprocity seems close but presupposes an advance move by the studio (a gift, a concession) — there was none here, only a tiered request.',
    },
    points: 10,
    primaryTechniqueId: 'foot_in_the_door',
    relatedTechniques: ['foot_in_the_door', 'door_in_the_face', 'reciprocity'],
  },
];
