// Backfill: 3 Übungen für die bestehende Technik 'liking' (Sympathie).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Formatvorbild: paltering-half-truth.ts (Golden Set).
// EN durchgehend britische Orthografie.
// NICHT in index.ts registriert — Registrierung erfolgt separat.

import type { Exercise } from '../types';

export const backfillLiking: Exercise[] = [
  {
    id: 'backfill-liking-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt der Account-Direktor hier?',
      en: 'Which technique is the account director using here?',
    },
    scenario: {
      de: 'Neugeschäfts-Erstgespräch bei einem Maschinenbauer: Bevor der Account-Direktor einer Agentur zum Etat-Vorschlag kommt, verbringt er die halbe Stunde damit, Gemeinsamkeiten aufzuspüren — beide sind aus dem Lokaljournalismus in die Kommunikation gewechselt, beide radeln zur Arbeit, beide stöhnen über dieselben Buzzwords. Früh im Gespräch, noch ganz im Plauderton, erwähnt er beiläufig, er habe ihre letzte Employer-Branding-Kampagne mit echtem Respekt verfolgt. Bis er das Honorarmodell aufblättert, hat sich so viel geteilte Wellenlänge und leichtes Einvernehmen angesammelt, dass sich die Marketingleiterin dabei ertappt, wie sie ihm den Etat gönnt, bevor sie die erste Zahl gelesen hat.',
      en: 'First new-business meeting at a machinery manufacturer: before the agency\'s account director gets to his budget proposal, he spends the half hour hunting for common ground — both moved from local journalism into communications, both cycle to work, both groan about the same buzzwords. Early on, still in small-talk mode, he mentions in passing that he followed her last employer-branding campaign with real respect. By the time he opens up the fee model, so much shared wavelength and easy rapport has built up that the marketing lead catches herself inclined to hand him the account before she has read the first figure.',
    },
    options: [
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Unity / Identitäts-Appell', en: 'Unity / Identity Appeal' },
      { de: 'Sycophancy (Schmeichelei)', en: 'Sycophancy (Flattery)' },
      { de: 'Halo-Effekt', en: 'Halo Effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Warum wirkt das? Wer uns ähnlich ist und uns offen mag, dem stimmen wir schneller zu — die Zuneigung zur Person schiebt sich unbemerkt vor die Sachfrage. Der Account-Direktor baut genau diese Zuneigung auf: geteilter Werdegang, dieselben Vorlieben, eine beiläufige Anerkennung — und schon gönnt sie ihm den Etat, bevor eine einzige Zahl auf dem Tisch liegt. So nutzt du das professionell: Am Anfang einer Zusammenarbeit ist echter Rapport der ehrliche Türöffner — benenne Gemeinsamkeiten, wo sie real sind, denn eine Partnerschaft beginnt mit Vertrauen, nicht mit einem Trick. Zum Gegensteuern hilft ein simpler Test: Würdest du denselben Etat freigeben, wenn dir der Mensch gegenüber unsympathisch wäre? Fällt die Antwort anders aus, entscheidet die Person, nicht der Vorschlag. Der Unity-Appell (Identität) zielte nicht auf „ich mag ihn", sondern auf ein verpflichtendes Wir („unter uns Ex-Journalisten hält man zusammen") als Grund zuzustimmen — das fehlt hier, es zieht reine Sympathie. Sycophancy wäre bloße Schmeichelei, die dir nach dem Mund redet; hier wirkt mehr als ein Lob, nämlich Ähnlichkeit und Kooperation zusammen. Der Halo-Effekt läge vor, wenn sein souveränes Auftreten dich seine fachliche Leistung höher einschätzen ließe — hier geht es nicht um ein besseres Urteil über die Arbeit, sondern um ein leichteres Ja zur Person.',
      en: 'Why does this work? We agree faster with people who resemble us and openly like us — affection for the person quietly slips in front of the actual question. The account director builds exactly that affection: a shared career path, the same tastes, one passing note of appreciation — and she is already inclined to hand him the account before a single figure is on the table. You use this professionally: at the start of a partnership genuine rapport is the honest door-opener — name common ground where it is real, because a partnership begins with trust, not with a trick. To counter it, run a simple test: would you release the same budget if you found the person across the table unlikeable? If the answer changes, it is the person deciding, not the proposal. A unity appeal (identity) would aim not at "I like him" but at an obligating "we" ("among us ex-journalists we stick together") as the reason to agree — that is absent here; plain liking is what\'s driving it. Sycophancy would be mere flattery that tells you what you want to hear; here more than praise is at work, namely similarity and cooperation together. The halo effect would apply if his poised manner made you rate his professional work more highly — here it is not a better judgement of the work but an easier yes to the person.',
    },
    points: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'unity_identity', 'sycophancy', 'halo_effect'],
  },
  {
    id: 'backfill-liking-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Rahmenvertrags-Verhandlung mit einem langjährigen Dienstleister: Als Einkaufsverantwortliche einer Unternehmenskommunikation sitzt du dem Vertriebsleiter gegenüber, der euer Konto seit Jahren betreut. Er nimmt sich viel Zeit fürs persönliche Vorgeplänkel, lobt, wie gern sein Team mit euch arbeite, erinnert an die gemeinsamen Abende auf der Branchenmesse — und schlägt dann offen vor, die Kündigungsfrist von drei auf zwölf Monate zu verlängern. „Unter uns beiden ist das doch reine Formsache, das machen wir per Handschlag."',
      en: 'Framework-contract negotiation with a long-standing service provider: as the procurement lead in a corporate-communications team you are sitting across from the sales director who has looked after your account for years. He takes his time over the personal warm-up, praises how much his team enjoys working with you, recalls the shared evenings at the industry trade fair — and then openly proposes extending the notice period from three to twelve months. "Between the two of us this is a pure formality, let\'s just shake on it."',
    },
    options: [
      {
        de: 'Ich genieße das gute Verhältnis, halte es aber von der Sachfrage getrennt: Die Klausel bewerte ich an unseren Standardkriterien — die Beziehung bleibt, die Zwölf-Monats-Frist prüfe ich hart und unterschreibe sie nicht per Handschlag.',
        en: 'I appreciate the good rapport but keep it apart from the substance: I judge the clause against our standard criteria — the relationship stays, the twelve-month term gets hard scrutiny and no handshake signature.',
      },
      {
        de: 'Er hat uns immer fair behandelt und ist offensichtlich auf unserer Seite — ich stimme der Klausel zu, um das über Jahre gewachsene Vertrauen nicht zu belasten.',
        en: 'He has always treated us fairly and is clearly on our side — I accept the clause so as not to strain the trust built up over the years.',
      },
      {
        de: 'Ich werde betont kühl und geschäftlich, unterbinde jeden persönlichen Bezug und ziehe die Verhandlung ab jetzt bewusst distanziert und misstrauisch durch.',
        en: 'I turn deliberately cool and businesslike, shut down every personal reference, and run the rest of the negotiation from a pointedly distant, suspicious stance.',
      },
      {
        de: 'Da er unser Konto seit Jahren betreut, verzichte ich auf die juristische Prüfung und übernehme seine Auskunft, dass eine Zwölf-Monats-Frist branchenüblich ist.',
        en: 'Since he has run our account for years, I skip the legal review and take his word that a twelve-month term is standard in the industry.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vertriebsleiter aktiviert Sympathie: Lob und geteilte Erinnerungen erzeugen Wohlwollen, und genau auf dieser warmen Welle reitet die teure Klausel herein — der Handschlag soll die Prüfung ersetzen. Wirksam ist das, weil ein gutes Gefühl zur Person unbemerkt auf die Sachentscheidung abfärbt. Der echte Kern ist hier wertvoll: Eine über Jahre gewachsene, verlässliche Geschäftsbeziehung ist ein handfester Aktivposten — kurze Wege, ehrliches Feedback, weniger Reibung im Tagesgeschäft; die pflegst du bewusst weiter. Genau deshalb führst du zwei getrennte Konten, „Beziehung" und „Vertrag": Auf dem Vertragskonto zählen nur eure Standardkriterien, und dort prüfst du die Zwölf-Monats-Frist hart, ganz ohne die Beziehung aufzukündigen. Option zwei fällt genau auf den Hebel herein, indem sie Zuneigung als Beleg für ein gutes Angebot nimmt; „er ist auf unserer Seite" ist ein Gefühl, kein Vertragswert. Betont kühl und misstrauisch zu werden überkorrigiert: Du verschenkst eine tragfähige Beziehung und verhandelst schlechter, denn Sympathie ist an sich kein Angriff, den man abwehren muss. Auf die eigene Prüfung ganz zu verzichten und seine Auskunft „branchenüblich" zu übernehmen, delegiert das Urteil an die Rollenautorität des Anbieters — dessen Interesse an der langen Frist offen auf der Hand liegt; die Höhe einer Klausel belegst du an Marktdaten, nicht am Standeswort des Verkäufers (Autorität).',
      en: 'The sales director activates liking: praise and shared memories create goodwill, and the expensive clause rides in on exactly that warm wave — the handshake is meant to replace the check. It works because a good feeling about the person bleeds unnoticed into the substantive decision. The genuine core here is valuable: a reliable business relationship built up over years is a tangible asset — quick access, honest feedback, less friction day to day; keep tending it deliberately. That is precisely why you run two separate accounts, "relationship" and "contract": on the contract account only your standard criteria count, and there you scrutinise the twelve-month term hard, without ever cancelling the relationship. Option two falls squarely for the lever by treating affection as evidence of a good offer; "he is on our side" is a feeling, not a contract term. Turning pointedly cool and suspicious over-corrects: you throw away a workable relationship and negotiate worse, because liking as such is not an attack to be repelled. Skipping your own review and taking his word that it is "standard in the industry" hands your judgment to the vendor\'s role authority — whose interest in the long term is plainly obvious; you back the size of a clause with market data, not the salesperson\'s say-so (authority).',
    },
    points: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'authority'],
  },
  {
    id: 'backfill-liking-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Über die Wochen fällt dir das Ja vor allem leichter, weil ___.',
      en: 'Complete the sentence: over the weeks, saying yes comes easier mainly because ___.',
    },
    scenario: {
      de: 'Interne Budgetrunde einer Konzernkommunikation: Ein Kollege aus der Nachbarabteilung arbeitet dir seit Wochen zu, findet in jedem Gespräch neue Gemeinsamkeiten (gleicher Studiengang, gleiche Lieblingsserie, gleicher trockener Humor) und nimmt dir bereitwillig Kleinkram ab. Du magst ihn schlicht — du freust dich, wenn sein Name im Postfach auftaucht. Als er dich bittet, sein Projekt im Lenkungskreis zu unterstützen, merkst du: Ein Ja fällt dir gegenüber ihm spürbar leichter als gegenüber anderen mit gleich guten Anträgen, ganz ohne dass du dich ihm zu etwas verpflichtet fühlst.',
      en: 'Internal budget round in a corporate-communications department: for weeks a colleague from the neighbouring unit has been supporting your work, finding fresh common ground in every conversation (same degree programme, same favourite series, same dry humour) and readily taking small chores off your plate. You simply like him — you are glad when his name turns up in your inbox. When he asks you to back his project in the steering committee, you notice that saying yes to him comes markedly easier than to others with equally strong requests, without your feeling obliged to him in any way.',
    },
    options: [
      {
        de: 'wachsende Sympathie aus Ähnlichkeit und Miteinander dein Ja an die Person bindet, nicht an die Güte seines Antrags (Sympathie)',
        en: 'growing liking from similarity and working side by side ties your yes to the person, not to the merits of his request (liking)',
      },
      {
        de: 'die vielen kleinen Hilfen ein Schuldgefühl aufbauen, das du mit einer Gegenleistung begleichen willst (Reziprozität)',
        en: 'his many small favours build a sense of debt that you want to settle with a return favour (reciprocity)',
      },
      {
        de: 'sein bloßes häufiges Auftauchen ihn dir allein durch Vertrautheit näher und dadurch angenehmer macht, ganz ohne echte Interaktion (Mere-Exposure-Effekt)',
        en: 'his mere frequent presence makes him more familiar and thus more pleasant to you, through sheer familiarity rather than any real interaction (mere-exposure effect)',
      },
      {
        de: 'du dich seit Wochen auf ihn eingelassen hast und ein Nein jetzt inkonsequent zu deinem bisherigen Kurs wirkte (Konsistenz/Commitment)',
        en: 'you have engaged with him for weeks and a no would now feel inconsistent with the course you have taken (consistency/commitment)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Hier summiert sich Sympathie: Woche für Woche legen Ähnlichkeit und gemeinsames Arbeiten eine Schicht Zuneigung an, bis du den Kollegen schlicht magst — und Zuneigung senkt die Schwelle für ein Ja, unabhängig davon, wie stark sein Antrag ist. Der verräterische Marker steht schon in deiner eigenen Beobachtung: gleicher Antrag, aber bei ihm fällt das Ja leichter. Sauber genutzt heißt das: Kollegiale Nähe im eigenen Haus ist Gold wert — sie macht abteilungsübergreifende Arbeit überhaupt erst reibungslos, und gegenseitiges Aushelfen trägt ein Team; nur darf diese Nähe nicht zur heimlichen Vorzugsschiene werden, wenn Budgets verteilt werden. Zum Gegensteuern gibst du jedem Antrag dieselbe Checkliste und machst dir dein „Sympathie-Budget" bewusst, bevor du im Lenkungskreis die Hand hebst. Reziprozität wäre nah, wenn ein konkretes Schuldgefühl aus seinen Gefälligkeiten dich triebe; das Szenario schließt das aber ausdrücklich aus — es zieht die Zuneigung, nicht die Rückzahlpflicht. Der Mere-Exposure-Effekt bräuchte bloße Wiederholung ohne echte Interaktion; hier wirkt aktiv aufgebaute Gemeinsamkeit, nicht nur häufiges Auftauchen. Konsistenz schließlich setzte eine frühere, ausdrückliche Festlegung voraus, der du treu bleiben willst — die gibt es zu diesem Projekt nicht; was zieht, ist das Mögen selbst.',
      en: 'Here liking accumulates: week by week, similarity and working side by side lay down a layer of affection until you simply like the colleague — and affection lowers the threshold for a yes, regardless of how strong his request is. The tell-tale marker sits in your own observation: same request, yet the yes comes easier for him. Used cleanly, this means: collegial closeness inside your own organisation is worth its weight in gold — it is what makes cross-department work run smoothly, and mutual help holds a team together; it just must not become a quiet fast lane when budgets are handed out. To counter it, give every request the same checklist and stay aware of your "liking budget" before you raise your hand in the steering committee. Reciprocity would be close if a concrete sense of debt from his favours were driving you; but the scenario rules that out expressly — it is the affection doing the work, not an obligation to repay. The mere-exposure effect would need bare repetition without real interaction; here actively built common ground is at work, not just frequent appearance. Consistency, finally, would presuppose an earlier, explicit commitment you want to stay true to — there is none on this project; what is at work is the liking itself.',
    },
    points: 10,
    primaryTechniqueId: 'liking',
    relatedTechniques: ['liking', 'reciprocity', 'mere_exposure_effect', 'consistency'],
  },
];
