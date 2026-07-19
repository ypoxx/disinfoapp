// Welle 5b: 3 Übungen für parasocial_manipulation (Parasoziale Manipulation).
// evidenceTier 'weak' — keine starken Wirkbehauptungen; kein seriousMode
// (dual-use), daher doppelter Takeaway: legitim einsetzen UND erkennen/kontern.
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bParasocialManipulation: Exercise[] = [
  {
    id: 'wave5b-parasocial_manipulation-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt die Szene?',
      en: 'Which technique carries the scene?',
    },
    scenario: {
      de: 'Blind zu klassifizieren: Unboxing-Video einer Reise-Influencerin → an ihre Stammzuschauer, die ihr seit dem ersten Kanaljahr folgen. Sie hält ein gesponsertes Koffermodell in die Kamera: „Ihr seid von Anfang an dabei, deshalb zeige ich euch das zuerst — ich reise nur noch mit dem hier." Kein Preisvergleich, kein Testkriterium; die Kaufempfehlung ruht allein auf der jahrelangen gefühlten Verbundenheit zwischen ihr und den Zuschauern.',
      en: 'To classify blind: a travel influencer\'s unboxing video → to her regular viewers, who have followed her since the channel\'s first year. She holds a sponsored suitcase up to the camera: "You\'ve been here from the start, so I\'m showing you this first — it\'s the only one I travel with now." No price comparison, no test criterion; the purchase recommendation rests solely on the years-long personal bond between her and the viewers.',
    },
    options: [
      { de: 'Parasoziale Manipulation', en: 'Parasocial Manipulation' },
      { de: 'Liking (Sympathie)', en: 'Liking' },
      { de: 'Reziprozität (Gegenseitigkeit)', en: 'Reciprocity' },
      { de: 'Autorität', en: 'Authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Parasoziale Manipulation: Der Hebel ist die einseitige, über Jahre aufgebaute „Beziehung" zwischen Influencerin und Followern („ihr seid von Anfang an dabei") — die gefühlte Vertrautheit ersetzt jedes Produktargument. So setzt du das professionell ein: Eine echte, transparent gekennzeichnete Empfehlung aus einer über Jahre gewachsenen Community-Bindung ist legitim, solange sie auf prüfbaren Vorzügen ruht und die bezahlte Absicht offen liegt. Daran erkennst du es und so entschärfst du es: Frag dich, ob der Kaufimpuls an der Beziehungsdauer hängt („wir kennen uns seit Jahren") statt an einem nachvollziehbaren Grund — und trenne die gefühlte Nähe von der Sachfrage, ob das Produkt trägt. Liking wäre es, wenn Sympathie aus Ähnlichkeit, Komplimenten oder Attraktivität in einer einzelnen Begegnung geweckt würde — hier zählt aber die fortdauernde, einseitige Bindung über Jahre, nicht ein situativer Sympathie-Funke. Reziprozität läge vor, wenn eine konkrete Vorleistung eine Gegenleistung einforderte („ich zeige es euch zuerst, jetzt seid ihr dran") — hier wird aber keine Schuld aufgemacht, die Empfehlung stützt sich allein auf die inszenierte Beziehung. Autorität würde greifen, wenn der Kaufgrund an einem Experten- oder Rangsignal hinge („als Reiseprofi mit zehn Jahren Erfahrung sage ich euch das") — hier beruft sich die Influencerin nicht auf nachgewiesene Fachautorität, sondern auf die persönliche Verbundenheit selbst.',
      en: 'Parasocial Manipulation: the lever is the one-sided "relationship" between influencer and followers, built up over years ("you\'ve been here from the start") — the sense of familiarity replaces any product argument. Using it professionally: a genuine, clearly labelled recommendation from a community bond built up over years is legitimate, as long as it rests on verifiable merits and the paid intent is disclosed. Recognising and defusing it: ask whether the urge to buy hangs on the length of the relationship ("we\'ve known each other for years") rather than on a sound reason — and separate the sense of closeness from the substantive question of whether the product holds up. Liking would be the case if sympathy were sparked by similarity, compliments, or attractiveness in a single encounter — but here what counts is the ongoing, one-sided bond over years, not a situational spark of rapport. Reciprocity would apply if a concrete favour called for something in return ("I\'m showing you first, now it\'s your turn") — but no debt is invoked here; the recommendation rests solely on the staged relationship. Authority would apply if the reason to buy hinged on an expert or rank cue ("as a travel pro with ten years\' experience I\'m telling you") — but the influencer invokes no proven subject-matter authority, only the personal bond itself.',
    },
    points: 10,
    primaryTechniqueId: 'parasocial_manipulation',
    relatedTechniques: ['parasocial_manipulation', 'liking', 'reciprocity', 'authority'],
  },
  {
    id: 'wave5b-parasocial_manipulation-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation einer Marke und briefst eine Influencerin für eine bezahlte Kampagne. Sie schlägt vor, die Werbung ohne Kennzeichnung als rein private Empfehlung an ihre langjährige Community zu spielen: „So wirkt es echter — die vertrauen mir seit Jahren, denen sage ich das einfach als Freundin."',
      en: 'You lead communications for a brand and are briefing an influencer for a paid campaign. She proposes running the ad unlabelled, as a purely private recommendation to her long-standing community: "It comes across as more real that way — they\'ve trusted me for years, I\'ll just tell them as a friend."',
    },
    options: [
      {
        de: 'Ich stimme zu — die gefühlte Nähe ist das eigentliche Kapital der Influencerin, und eine Werbekennzeichnung würde die Wirkung nur zerreden.',
        en: 'I agree — the sense of closeness is the influencer\'s real asset, and an ad label would only talk the effect to death.',
      },
      {
        de: 'Ich lasse die Kennzeichnung weg, bitte sie aber, im Text „ehrlich zu bleiben" — die Grauzone regelt der Markt schon selbst.',
        en: 'I leave out the label but ask her to "stay honest" in the text — the grey zone sorts itself out on the market.',
      },
      {
        de: 'Ich bestehe auf klarer Werbekennzeichnung und darauf, dass die Empfehlung auf prüfbaren Produktvorzügen ruht, nicht auf inszenierter Freundschaft — die gewachsene Bindung darf die bezahlte Absicht nicht verdecken.',
        en: 'I insist on a clear ad disclosure and on the recommendation resting on verifiable product merits, not on staged friendship — the bond built up over the years must not mask the paid intent.',
      },
      {
        de: 'Ich sage die Zusammenarbeit ganz ab — sobald eine Influencerin eine Beziehung zu ihren Followern hat, ist jede Kooperation manipulativ.',
        en: 'I cancel the collaboration entirely — the moment an influencer has a relationship with her followers, any cooperation is manipulative.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Mechanismus: Parasoziale Manipulation nutzt die einseitige, über Jahre gefühlte Beziehung zwischen Influencerin und Community als Hebel; wird die bezahlte Absicht verschwiegen, borgt die Werbung sich das Vertrauen dieser „Freundschaft", ohne dass das Publikum die Interessenlage erkennt. So setzt du das professionell ein: Eine gewachsene Community-Bindung darf Empfehlungen tragen — aber nur transparent gekennzeichnet und gestützt auf prüfbare Vorzüge; genau das leistet Option 3. Erkennen und kontern: Achte darauf, ob die Beziehungsdauer die Kaufaufforderung trägt und ob die Bezahlung sichtbar bleibt — halte die gefühlte Nähe und die Sachfrage auseinander. Option 1 klingt nach cleverem Marketing, macht dich aber mitverantwortlich für verdeckte Schleichwerbung und riskiert Vertrauens- wie Rechtsschaden. Option 2 wirkt wie ein Kompromiss, lässt aber genau die Kennzeichnung weg, um die es geht — „ehrlich bleiben" ohne Offenlegung bleibt Täuschung. Option 4 überkorrigiert: Die parasoziale Bindung ist nicht per se manipulativ; erst das Verschweigen der bezahlten Absicht macht sie es. Ein Totalverzicht verwechselt das legitime Kapital der Influencerin mit dem Missbrauch.',
      en: 'Mechanism: parasocial manipulation uses the one-sided relationship between influencer and community, built up over years, as a lever; if the paid intent is hidden, the ad borrows the trust of that "friendship" without the audience recognising the interests at play. Using it professionally: an established community bond may carry recommendations — but only when clearly disclosed and backed by verifiable merits; that is exactly what option 3 does. Recognising and countering it: watch whether the length of the relationship carries the call to buy and whether the payment stays visible — keep the sense of closeness and the substantive question apart. Option 1 sounds like clever marketing but makes you complicit in covert advertising and risks both trust and legal damage. Option 2 looks like a compromise but leaves out precisely the disclosure at issue — "staying honest" without disclosure is still deception. Option 4 overcorrects: the parasocial bond is not manipulative in itself; only hiding the paid intent makes it so. A blanket refusal confuses the influencer\'s legitimate asset with its abuse.',
    },
    points: 10,
    primaryTechniqueId: 'parasocial_manipulation',
    relatedTechniques: ['parasocial_manipulation', 'liking'],
  },
  {
    id: 'wave5b-parasocial_manipulation-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik trägt die Szene?',
      en: 'Which technique carries the scene?',
    },
    scenario: {
      de: 'Blind zu klassifizieren: Home-Workout-Kanal eines Fitness-Coachs → an seine Stammabonnenten, die seit drei Jahren jeden Morgen mit ihm trainieren. Zum Launch seines kostenpflichtigen Coaching-Programms sagt er in die Kamera: „Wir stehen seit drei Jahren jeden Morgen zusammen auf der Matte — ihr kennt mich, ich hab euch. Kommt ins Programm, wir machen einfach weiter, nur wir." Kein Trainingsplan, keine Methode, kein Ergebnisbeleg; die Kaufaufforderung ruht allein auf der über drei Jahre gewachsenen, gefühlt persönlichen Bindung.',
      en: 'To classify blind: a fitness coach\'s home-workout channel → to his regular subscribers, who have trained with him every morning for three years. Launching his paid coaching programme, he tells the camera: "We\'ve been on the mat together every morning for three years — you know me, I\'ve got you. Join the programme, let\'s just keep going, only us." No training plan, no method, no proof of results; the call to buy rests solely on the personal bond built up over three years.',
    },
    options: [
      { de: 'Parasoziale Manipulation', en: 'Parasocial Manipulation' },
      { de: 'Liking (Sympathie)', en: 'Liking' },
      { de: 'Reziprozität (Gegenseitigkeit)', en: 'Reciprocity' },
      { de: 'Konsistenz-Prinzip (Commitment)', en: 'Commitment / consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Parasoziale Manipulation: Der Hebel ist die einseitige, über drei Jahre gewachsene „Beziehung" zwischen Coach und Abonnenten („ihr kennt mich, ich hab euch") — die inszenierte Nähe ersetzt jeden prüfbaren Grund, das Programm zu kaufen. So setzt du das professionell ein: Ein Coach darf ein Programm verkaufen, und eine warme, gewachsene Bindung zum Publikum ist völlig legitim — tragfähig wird das Angebot, wenn Inhalt, Methode und belegbares Ergebnis den Ausschlag geben und die Bindung nur das Vertrauensfundament ist, nicht das Verkaufsargument selbst. Daran erkennst du es und so entschärfst du es: Prüfe, ob die Kaufaufforderung an der Dauer und Nähe der „Beziehung" hängt statt an dem, was das Programm konkret liefert — trenne das warme Gefühl von der Sachfrage, ob das Angebot trägt. Liking wäre ein situativer Sympathie-Funke aus Ähnlichkeit oder Kompliment in einer einzelnen Begegnung — hier zählt die fortdauernde, einseitige Bindung über Jahre. Reziprozität läge vor, wenn eine konkrete Vorleistung eine Gegenleistung einforderte („ich habe dir so viel gratis gegeben, jetzt bist du dran") — der Appell nennt aber keine Schuld, er beruft sich auf die Beziehung selbst. Das Konsistenz-Prinzip (Commitment) ist der nächste Nachbar, weil die Abonnenten seit drei Jahren jeden Morgen dabei sind und ein Ausstieg unstimmig zur eigenen Gewohnheit wirken könnte („wer so lange dranbleibt, sagt jetzt nicht ab"); das definierende Merkmal bleibt aber, dass die inszenierte persönliche Bindung der Hebel ist, nicht der Druck, zur eigenen früheren Festlegung zu passen.',
      en: 'Parasocial Manipulation: the lever is the one-sided "relationship" between coach and subscribers, built up over three years ("you know me, I\'ve got you") — the manufactured closeness replaces any verifiable reason to buy the programme. Using it professionally: a coach may of course sell a programme, and a warm, long-standing bond with the audience is entirely legitimate — the offer holds up when the content, method, and demonstrable results are what tip the scales and the bond is merely the foundation of trust, not the selling point itself. Recognising and defusing it: check whether the call to buy hangs on the length and closeness of the "relationship" rather than on what the programme actually delivers — separate the warm feeling from the substantive question of whether the offer holds up. Liking would be a situational spark of rapport from similarity or a compliment in a single encounter — here what counts is the ongoing, one-sided bond over years. Reciprocity would apply if a concrete favour called for something in return ("I\'ve given you so much for free, now it\'s your turn") — but the appeal names no debt; it invokes the relationship itself. The commitment/consistency principle is the closest neighbour, because the subscribers have shown up every morning for three years and dropping out could feel inconsistent with their own habit ("someone who has stuck with it this long won\'t back out now"); yet the defining feature remains that the staged personal bond is the lever, not the pressure to stay consistent with a prior commitment.',
    },
    points: 10,
    primaryTechniqueId: 'parasocial_manipulation',
    relatedTechniques: ['parasocial_manipulation', 'liking', 'reciprocity', 'consistency'],
  },
];
