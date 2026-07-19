// Welle R4: 3 Übungen für unity_identity (Unity / Identitäts-Appell).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4UnityIdentity: Exercise[] = [
  {
    id: 'w4-unity_identity-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Agenturchef ein?',
      en: 'Which technique is the agency head using?',
    },
    scenario: {
      de: 'Neugeschäfts-Termin beim Maschinenbauer: Der Agenturchef eröffnet das Gespräch mit der Kommunikationsleiterin: „Wir sind ja selbst ein Familienunternehmen aus der Region — wir wissen, wie Häuser wie Ihres ticken. Lassen wir die Konzern-Agenturen draußen und regeln das unter uns." Referenzen, Cases oder Zahlen zur Agenturleistung nennt er im ganzen Gespräch nicht.',
      en: 'New-business meeting at an engineering firm: the agency head opens the conversation with the communications director: "We\'re a family business from the region ourselves — we know how companies like yours think. Let\'s keep the big-network agencies out of this and settle it among ourselves." At no point in the meeting does he offer references, cases, or performance figures.',
    },
    options: [
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Unity / Identitäts-Appell', en: 'Unity / identity appeal' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Autorität', en: 'Authority' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Unity / Identitäts-Appell: Der Agenturchef reklamiert Mitgliedschaft in derselben Gruppe („Familienunternehmen aus der Region", „unter uns") und grenzt eine Out-Group ab („Konzern-Agenturen"). Nach Cialdinis Prinzip „Unity" sollen Botschaften stärker wirken, wenn Sender und Empfänger eine gemeinsame Identität teilen — die Beauftragung soll sich wie eine Angelegenheit unter Gleichen anfühlen, nicht wie eine Auswahlentscheidung; belastbar quantifiziert ist dieser Effekt allerdings nicht. Legitim einsetzen: Eine echte gemeinsame Herkunft oder geteilte Werte zu benennen ist in Ordnung — professionell bleibt es, wenn das Angebot auch ohne das „Wir" trägt und du die Leistungsfrage aktiv selbst aufmachst. Erkennen und kontern: Frag dich „Würde mich dieses Angebot auch von einer Agentur aus einer anderen Stadt überzeugen?" — und hol die Kriterien zurück ins Gespräch, die das „unter uns" gerade verdrängt: Referenzen, Leistung, Preis. Social Proof wirkt plausibel, weil eine Gruppe im Spiel ist — der Hebel wäre aber der Verweis darauf, dass viele andere die Agentur gewählt haben, und genau solche Belege fehlen hier komplett; es zählt Zugehörigkeit, nicht Verbreitung. Sympathie (Liking) liegt nahe, weil Ähnlichkeit sympathisch macht — Liking wirkt aber über „er ist mir angenehm"; Unity geht einen Schritt weiter zur behaupteten gemeinsamen Mitgliedschaft samt Abgrenzung nach außen. Autorität würde über Status oder Expertise laufen — darauf beruft sich der Agenturchef gerade nicht, er ersetzt den Kompetenznachweis durch Zugehörigkeit.',
      en: 'Unity / identity appeal: the agency head claims membership in the same group ("family business from the region", "among ourselves") and marks off an out-group ("big-network agencies"). Under Cialdini\'s "unity" principle, messages are said to carry more weight when sender and receiver share an identity — the mandate is meant to feel like a matter among one\'s own kind rather than a selection decision; robust quantification of this effect is lacking, though. Used legitimately: naming a genuine shared background or shared values is fine — it stays professional when the offer holds up without the "we" and you proactively put the performance question on the table yourself. To spot and counter it: ask yourself "Would this offer convince me coming from an agency in another city?" — and bring back into the conversation exactly the criteria the "among ourselves" is crowding out: references, performance, price. Social proof looks plausible because a group is involved — but its lever would be evidence that many others chose this agency, and precisely such evidence is entirely absent here; what is invoked is belonging, not popularity. Liking seems close because similarity breeds sympathy — but liking works through "I find him agreeable"; unity goes a step further to claimed joint membership plus demarcation against outsiders. Authority would run through status or expertise — which is exactly what the agency head does not invoke; he substitutes belonging for proof of competence.',
    },
    points: 10,
    primaryTechniqueId: 'unity_identity',
    relatedTechniques: ['unity_identity', 'social_proof', 'liking', 'authority'],
  },
  {
    id: 'w4-unity_identity-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Pressestelle eines Branchenverbands. Ein Mitgliedsunternehmen steht wegen eines Produktrückrufs in der Kritik. Dessen Geschäftsführer ruft dich an: „Wir Mittelständler müssen jetzt zusammenhalten — der Verband muss sich schützend vor uns stellen. Sie sind doch einer von uns, nicht von der Presse." Er erwartet eine Verbandserklärung, die die Berichterstattung als Kampagne bezeichnet. Den Sachstand zum Rückruf kennst du noch nicht.',
      en: 'You head the press office of an industry association. A member company is under fire over a product recall. Its managing director calls you: "We mid-sized companies have to stick together now — the association must shield us. You\'re one of us, after all, not one of the press." He expects an association statement calling the coverage a smear campaign. You do not yet know the facts of the recall.',
    },
    options: [
      {
        de: 'Ich trenne Zugehörigkeit von Sachprüfung: Ich benenne das gemeinsame Interesse an fairer Berichterstattung, kläre den Rückruf-Sachverhalt aber nach denselben Kriterien wie bei jedem Mitglied — und sage eine Erklärung nur zu, wenn die Fakten sie tragen.',
        en: 'I separate belonging from scrutiny: I acknowledge our shared interest in fair coverage, but I establish the facts of the recall by the same criteria as for any member — and commit to a statement only if the facts support one.',
      },
      {
        de: 'Ich gebe die Erklärung ab: Der Verband ist die Familie seiner Mitglieder — wer öffentlich in der Kritik steht, hat Anspruch auf unsere Solidarität, sonst verliert das „Wir" des Verbands seinen Wert.',
        en: 'I issue the statement: the association is its members\' family — anyone under public fire is entitled to our solidarity, otherwise the association\'s "we" loses its meaning.',
      },
      {
        de: 'Ich frage zuerst im Vorstand herum, wie viele andere Mitglieder eine Erklärung erwarten — wenn die Mehrheit sie will, ist sie ausreichend legitimiert.',
        en: 'I first poll the board on how many other members expect a statement — if the majority wants one, that is legitimacy enough.',
      },
      {
        de: 'Ich lehne rundweg ab und beende das Telefonat: Wer mit Zusammenhalt argumentiert, will etwas verschleiern — auf Zugehörigkeits-Appelle gehe ich grundsätzlich nicht ein.',
        en: 'I refuse outright and end the call: anyone arguing from togetherness has something to hide — I never engage with appeals to belonging.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Geschäftsführer setzt einen Unity-Appell: „Wir Mittelständler", „einer von uns, nicht von der Presse" — deine Verbandsidentität soll die Sachprüfung ersetzen und die Erklärung zur Loyalitätspflicht machen; die Presse wird zur Out-Group erklärt. Die beste Option entkoppelt genau das: Zugehörigkeit anerkennen, aber die Entscheidung an Fakten und an die für alle Mitglieder gleichen Kriterien binden — so bleibst du anschlussfähig, ohne dir ein Urteil ohne Sachstand abnehmen zu lassen. Legitim einsetzen: Als Verbandssprecher darfst du das gemeinsame Interesse deiner Mitglieder selbstverständlich benennen und vertreten — professionell bleibt es, wenn Solidarität an geprüfte Fakten gekoppelt ist und nicht an bloße Mitgliedschaft. Erkennen und kontern: Werde aufmerksam, wenn eine Bitte über „einer von uns" statt über Argumente begründet wird — frag dich, ob du derselben Bitte auch von einem Nicht-Mitglied nähertreten würdest, und zwar nach welchen Kriterien. Die Solidaritäts-Zusage wirkt plausibel, weil Interessenvertretung tatsächlich Verbandsaufgabe ist — aber eine Kampagnen-Behauptung ohne Sachstand riskiert die Glaubwürdigkeit des Verbands für alle Mitglieder; genau diese Abkürzung will der Appell erreichen. Die Mehrheitsabfrage klingt nach Absicherung, ersetzt aber nur einen Hebel durch den anderen: Wie viele eine Erklärung wollen (Social Proof), sagt nichts darüber, ob sie in der Sache stimmt. Der Komplettabbruch überkorrigiert: Der Anruf eines Mitglieds in der Krise ist legitim, und Zusammenhalt ist kein Täuschungsbeweis — entscheidend ist, dass du die Entscheidung von der Zugehörigkeit löst, nicht, dass du das Gespräch verweigerst.',
      en: 'The managing director is running a unity appeal: "we mid-sized companies", "one of us, not one of the press" — your association identity is meant to replace scrutiny and turn the statement into a duty of loyalty, with the press cast as the out-group. The best option decouples exactly that: acknowledge the belonging, but tie the decision to facts and to the criteria that apply equally to every member — you keep the working relationship intact without letting someone else pass judgement for you before you know the facts. Used legitimately: as an association spokesperson you may of course name and represent your members\' shared interests — it stays professional when solidarity is tied to verified facts rather than to mere membership. To spot and counter it: take notice when a request is justified via "one of us" instead of arguments — ask yourself whether you would entertain the same request from a non-member, and by what criteria. Issuing the statement out of solidarity looks plausible because advocacy genuinely is an association\'s job — but alleging a smear campaign without knowing the facts gambles the association\'s credibility on behalf of all members; that shortcut is precisely what the appeal is after. Polling the board sounds prudent but merely swaps one lever for another: how many members want a statement (social proof) says nothing about whether it is factually sound. Refusing outright overcorrects: a member calling in a crisis is legitimate, and togetherness is no proof of deception — what matters is detaching the decision from belonging, not refusing the conversation.',
    },
    points: 10,
    primaryTechniqueId: 'unity_identity',
    relatedTechniques: ['unity_identity', 'social_proof'],
  },
  {
    id: 'w4-unity_identity-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Rundmail des Bereichsleiters an sein Team am Vorabend der Betriebsversammlung zur Standortverlagerung: „Wir hier am Standort sind mehr als Kollegen — wir sind eine eingeschworene Mannschaft. Lasst uns morgen geschlossen auftreten und kritische Fragen unter uns klären, nicht vor dem Vorstand."',
      en: 'All-team email from the division head on the eve of the works meeting about the site relocation: "We here at this site are more than colleagues — we\'re a tight-knit crew. Let\'s present a united front tomorrow and settle critical questions among ourselves, not in front of the executive board."',
    },
    options: [
      { de: 'Unity / Identitäts-Appell', en: 'Unity / identity appeal' },
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Schuldgefühl-Appell', en: 'Guilt appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Unity / Identitäts-Appell: Der Bereichsleiter aktiviert eine gemeinsame Identität („mehr als Kollegen", „eingeschworene Mannschaft") und macht den Vorstand zur Out-Group — kritische Fragen vor dem Vorstand erscheinen dann als Ausscheren aus der eigenen Gruppe, nicht als legitimer Redebeitrag. Legitim einsetzen: Ein Team vor einem wichtigen Termin auf gemeinsame Interessen einzuschwören ist normale Führungsarbeit — professionell bleibt es, wenn das „Wir" niemandem das Wort nimmt und kritische Fragen ausdrücklich erwünscht bleiben, auch öffentlich. Erkennen und kontern: Achte darauf, was das „Wir" konkret von dir verlangt — hier: schweigen. Trenne Zugehörigkeit von Verhalten: Du kannst zur Mannschaft gehören und trotzdem vor dem Vorstand fragen, was das Team betrifft. Social Proof wirkt plausibel, weil „geschlossen auftreten" nach dem Verhalten der vielen klingt — es fehlt aber jeder Verweis darauf, was andere tatsächlich tun; der Druck entsteht allein aus der beschworenen Zugehörigkeit. Der Schuldgefühl-Appell liegt nahe, weil Illoyalität ein schlechtes Gewissen machen kann — der Text arbeitet aber nicht mit Vorwurf oder Schadensszenario („ihr lasst uns hängen"), sondern baut die Gruppenidentität auf, aus der solcher Druck erst entstünde.',
      en: 'Unity / identity appeal: the division head activates a shared identity ("more than colleagues", "tight-knit crew") and casts the executive board as the out-group — critical questions in front of the board then look like breaking ranks rather than a legitimate contribution. Used legitimately: rallying a team around shared interests before an important meeting is ordinary leadership — it stays professional when the "we" silences no one and critical questions remain explicitly welcome, including in public. To spot and counter it: look at what the "we" concretely demands of you — here: staying quiet. Separate belonging from behaviour: you can be part of the crew and still ask the board what affects the team. Social proof looks plausible because "a united front" sounds like the behaviour of the many — but there is no reference to what others are actually doing; the pressure comes solely from the invoked belonging. A guilt appeal seems close because disloyalty can trigger a bad conscience — but the email relies on neither reproach nor a harm scenario ("you\'re letting us down"); it lays the identity groundwork that such pressure would later draw on.',
    },
    points: 10,
    primaryTechniqueId: 'unity_identity',
    relatedTechniques: ['unity_identity', 'social_proof', 'guilt_appeals'],
  },
];
