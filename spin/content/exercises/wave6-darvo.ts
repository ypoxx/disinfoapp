// Welle R6: 3 Übungen für darvo (DARVO — Leugnen, Angreifen, Täter-Opfer-Umkehr).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung. Evidenz-Tier weak: keine bezifferten Wirkbehauptungen.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6Darvo: Exercise[] = [
  {
    id: 'wave6-darvo-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Klärungsgespräch bei der Compliance-Stelle: Eine Projektleiterin wird mit belegten Chat-Nachrichten konfrontiert, in denen sie eine Mitarbeiterin wiederholt unter Druck gesetzt hat. Sie bestreitet, je so etwas geschrieben zu haben, bezeichnet die Mitarbeiterin als „intrigant" und „von Neid getrieben" und erklärt, in Wahrheit werde sie hier gemobbt und zum Sündenbock einer Kampagne gemacht.',
      en: 'A clarification meeting at the compliance office: a project lead is confronted with documented chat messages in which she repeatedly pressured a team member. She denies ever having written anything of the sort, calls the team member "scheming" and "driven by envy", and states that she is in fact the one being bullied here and made the scapegoat of a campaign.',
    },
    options: [
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (Deny, Attack, Reverse Victim and Offender)' },
      { de: 'Gaslighting', en: 'Gaslighting' },
      { de: 'Whataboutism (Und-was-ist-mit)', en: 'Whataboutism' },
      { de: 'Ad hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'DARVO: Auf die Konfrontation mit belegtem Fehlverhalten folgt die typische Dreierkette — Leugnen („nie geschrieben"), Angreifen der vorwerfenden Person („intrigant", „neidgetrieben") und die entscheidende Rollenumkehr: Aus der Beschuldigten wird das vorgebliche Opfer einer Kampagne. Der Mechanismus verschiebt die Aufmerksamkeit von der belegbaren Sache auf Glaubwürdigkeit und Motive der Hinweisgeberin und erzeugt eine falsche Symmetrie zweier Konfliktparteien. Schutzhinweis: Behandle die Rollenumkehr nicht als neuen Fall — sie will die Hinweisgeberin zur eigentlich Verdächtigen machen; lass die Beweislast dort, wo sie hingehört, und sorge dafür, dass ihr aus dem Hinweis kein Nachteil entsteht. Erkennen und kontern: Bleib bei der konkreten, dokumentierten Frage („Stammen diese Nachrichten von dir?"), lass dich nicht in die Charakterdebatte ziehen und protokolliere den Gesprächsverlauf. Gaslighting lag nahe, weil auch hier geleugnet wird — dort wird jedoch die Wahrnehmung der Betroffenen systematisch untergraben, ohne dass sich die Person zum Opfer erklärt; was hier fehlt, ist die gezielte Verunsicherung über die Realität, während die Rollenumkehr klar vorliegt. Whataboutism würde mit einem unbezogenen Gegenvorwurf ablenken („Und was ist mit ihren eigenen Fehlern?"), statt sich selbst zum Opfer zu stilisieren. Ad hominem beschreibt nur den Angriff auf die Person — eine Zutat von DARVO, aber nicht die vollständige Kette aus Leugnen, Angriff und Umkehr.',
      en: 'DARVO: confronted with documented misconduct, the person runs the classic three-part chain — deny ("never wrote it"), attack the accuser ("scheming", "driven by envy"), and the decisive role reversal: the accused becomes the supposed victim of a campaign. The mechanism shifts attention from the verifiable facts to the whistleblower\'s credibility and motives and manufactures a false symmetry between two "disputing parties". Protective note: do not treat the role reversal as a fresh case — it is meant to turn the whistleblower into the prime suspect; keep the burden of proof where it belongs and make sure her report brings her no disadvantage. To spot and counter it: stay on the concrete, documented question ("Did these messages come from you?"), do not get pulled into the character debate, and record the course of the conversation. Gaslighting was close because there is denial here too — but there the affected person\'s perception is systematically undermined without the perpetrator declaring themselves the victim; what is missing here is the deliberate distortion of the target\'s sense of reality, whereas the role reversal is plainly present. Whataboutism would deflect with an unrelated counter-charge ("And what about her own mistakes?") rather than casting oneself as the victim. Ad hominem describes only the attack on the person — an ingredient of DARVO, but not the full chain of denial, attack and reversal.',
    },
    points: 10,
    primaryTechniqueId: 'darvo',
    relatedTechniques: ['darvo', 'gaslighting', 'whataboutism', 'ad_hominem'],
  },
  {
    id: 'wave6-darvo-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest als Compliance-Verantwortliche ein Klärungsgespräch. Der beschuldigte Abteilungsleiter, mit dokumentierten Vorgängen konfrontiert, leugnet alles, greift die Hinweisgeberin als „rachsüchtig" und „unglaubwürdig" an und erklärt, er sei in Wahrheit das Opfer einer gezielten Intrige.',
      en: 'As the compliance officer you are running a clarification meeting. The accused department head, confronted with documented incidents, denies everything, attacks the whistleblower as "vindictive" and "not credible", and claims that he is in truth the victim of a targeted intrigue.',
    },
    options: [
      {
        de: 'Ich bleibe an der belegbaren Sachebene: Ich halte die dokumentierten Vorgänge fest, trenne sie sichtbar von den Unterstellungen gegen die Hinweisgeberin und mache klar, dass Gegenvorwürfe getrennt und nur mit eigenen Belegen geprüft werden. Zugleich schütze ich die Hinweisgeberin vor Repressalien und protokolliere den Gesprächsverlauf.',
        en: 'I stay on the verifiable factual level: I record the documented incidents, visibly separate them from the insinuations against the whistleblower, and make clear that counter-accusations are examined separately and only against their own evidence. At the same time I protect the whistleblower from retaliation and record the course of the meeting.',
      },
      {
        de: 'Ich vertage das Gespräch, bis sich die Lage beruhigt hat — offenbar stehen hier zwei Wahrnehmungen gegeneinander, und ich will niemanden vorverurteilen.',
        en: 'I postpone the meeting until things have calmed down — clearly there are two perceptions standing against each other here, and I do not want to prejudge anyone.',
      },
      {
        de: 'Ich nehme den Hinweis auf ein mögliches Motiv ernst und prüfe deshalb zuerst die Glaubwürdigkeit und die Vorgeschichte der Hinweisgeberin, bevor ich den dokumentierten Vorgängen nachgehe.',
        en: 'I take the hint about a possible motive seriously and therefore first examine the whistleblower\'s credibility and history before I look into the documented incidents.',
      },
      {
        de: 'Ich konfrontiere den Abteilungsleiter scharf mit dem Vorwurf der Manipulation und stelle ihn vor der versammelten Runde bloß.',
        en: 'I confront the department head sharply with the accusation of manipulation and expose him in front of everyone present.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Halte an der belegbaren Sache fest und lass dich nicht in die Rollenumkehr ziehen: DARVO funktioniert, indem der Fokus von den dokumentierten Vorgängen auf Glaubwürdigkeit und Motive der Hinweisgeberin kippt und eine falsche Symmetrie zweier Streitparteien entsteht. Schutzhinweis: Führe die Sachfrage und die Gegenvorwürfe in getrennten Spuren, verlange für die Gegenvorwürfe eigene Belege und stell sicher, dass die Hinweisgeberin während des Verfahrens keine Repressalien fürchten muss — genau darauf zielt die Umkehr. So erkennst du es: Stutzig machen dich das Leugnen entgegen der Aktenlage, der abrupte Wechsel weg von der Sache hin zur Person und der Moment, in dem sich die beschuldigte Person selbst zum Opfer erklärt. Vertagst du (Option 2)? Das klingt umsichtig, übernimmt aber unbemerkt die Umkehr — wer „zwei Wahrnehmungen" gleichsetzt, behandelt Beleg und Gegenvorwurf als gleichwertig und lässt die Betroffene im Ungewissen. Prüfst du zuerst ihre Vorgeschichte (Option 3)? Dann gehst du in die Falle selbst — du machst den Angriff auf ihre Motive zum Ermittlungsauftrag und schiebst die Beweislast auf das Ziel. Konfrontierst du scharf vor versammelter Runde (Option 4)? Ein „Manipulator"-Etikett eskaliert, ist ohne gesicherte Prüfung unfair und beschädigt das Verfahren; nüchtern dokumentieren und getrennt prüfen ist wirksamer und belastbarer.',
      en: 'Hold on to the verifiable facts and do not let yourself be pulled into the role reversal: DARVO works by tipping the focus from the documented incidents onto the whistleblower\'s credibility and motives, manufacturing a false symmetry of two "disputing parties". Protective note: run the factual question and the counter-accusations on separate tracks, require independent evidence for the counter-accusations, and make sure the whistleblower need not fear retaliation during the procedure — which is exactly what the reversal targets. How you spot it: what should give you pause is the denial against the record, the abrupt switch away from the matter and onto the person, and the moment the accused declares themselves the victim. Postponing (option 2)? It sounds prudent but quietly adopts the reversal — equating "two perceptions" treats evidence and counter-charge as equivalent and leaves the affected person in limbo. Examining her history first (option 3)? That is the trap itself — you turn the attack on her motives into an investigative mandate and shift the burden of proof onto the target. Confronting sharply in front of everyone (option 4)? A "manipulator" label escalates, is unfair without a secured examination, and damages the procedure; documenting soberly and examining separately is more effective and more defensible.',
    },
    points: 10,
    primaryTechniqueId: 'darvo',
    relatedTechniques: ['darvo', 'gaslighting'],
  },
  {
    id: 'wave6-darvo-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fallbesprechung in einer Führungskräfte-Schulung zu fairen Verfahren: Ein Vorgesetzter, mit einem belegten Regelverstoß konfrontiert, streitet ihn rundweg ab, erklärt den Hinweisgeber für „unglaubwürdig" und „nachtragend" und stellt sich anschließend als das eigentliche Opfer einer gezielten Kampagne gegen ihn dar.',
      en: 'Case discussion in a leadership training on fair procedures: a manager, confronted with a documented rule violation, flatly denies it, declares the whistleblower "not credible" and "vindictive", and then presents himself as the real victim of a targeted campaign against him.',
    },
    options: [
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (Deny, Attack, Reverse Victim and Offender)' },
      { de: 'Gaslighting', en: 'Gaslighting' },
      { de: 'Whataboutism (Und-was-ist-mit)', en: 'Whataboutism' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'DARVO: Das Muster besteht aus drei Schritten — Leugnen des belegten Verstoßes, Angriff auf die Glaubwürdigkeit des Hinweisgebers und die entscheidende Täter-Opfer-Umkehr, in der sich die beschuldigte Person zum Verfolgten erklärt. Als Begriff benennt DARVO genau diese Reaktion auf Konfrontation; die Studienlage dazu ist schwach (kleine Laborstichproben, Wahrnehmungsmaße), ein bezifferter Wirkungsgrad folgt daraus nicht. Schutzhinweis: Erkennst du das Muster, dann gib der Umkehr kein Eigengewicht — bewerte den belegten Verstoß unabhängig von den Gegenvorwürfen und achte darauf, dass der Hinweisgeber für seinen Hinweis nicht bezahlt. Erkennen: Das Muster verrät sich, wenn jemand trotz klarer Belege rundweg abstreitet, die Debatte von der Sache auf die Person dreht und sich am Ende selbst als Verfolgten inszeniert. Gaslighting lag nahe, weil auch geleugnet wird — dort wird jedoch die Wahrnehmung der Betroffenen systematisch untergraben, ohne Rollenumkehr; hier ist die Umkehr der Kern. Whataboutism wirkte plausibel, weil auch dort abgelenkt wird — es kontert aber mit einem unbezogenen Gegenvorwurf gegen die andere Seite, statt die eigene Opferrolle zu behaupten.',
      en: 'DARVO: the pattern has three steps — denial of the documented violation, attack on the whistleblower\'s credibility, and the decisive victim–offender reversal in which the accused declares himself the persecuted party. As a term, DARVO names exactly this response to confrontation; the evidence for it is weak (small lab samples, perception measures) and does not imply any quantified effect size. Protective note: once you recognize the pattern, give the reversal no weight of its own — judge the documented violation independently of the counter-accusations, and make sure the whistleblower is not made to pay for coming forward. To spot it: the pattern gives itself away when someone flatly denies despite clear evidence, turns the debate from the matter onto the person, and finally stages himself as the persecuted one. Gaslighting was close because there is denial too — but there the affected person\'s perception is systematically undermined, with no role reversal; here the reversal is the core. Whataboutism seemed plausible because it also deflects — but it counters with an unrelated charge against the other side rather than asserting one\'s own victim role.',
    },
    points: 10,
    primaryTechniqueId: 'darvo',
    relatedTechniques: ['darvo', 'gaslighting', 'whataboutism'],
  },
];
