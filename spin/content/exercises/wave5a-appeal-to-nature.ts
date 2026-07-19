// Welle 5a: 3 Übungen für appeal_to_nature (Appell an die Natürlichkeit).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aAppealToNature: Exercise[] = [
  {
    id: 'wave5a-appeal_to_nature-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Creatorin hier ein?',
      en: 'Which technique is the creator using here?',
    },
    scenario: {
      de: 'Influencer-Kooperation eines Reinigungsmittel-Herstellers: In einem gebrieften Reel sagt die Creatorin über den neuen Allzweckreiniger: „Der ist komplett natürlich, rein auf Pflanzenbasis — nach einer Hausmittel-Rezeptur, wie sie schon unsere Großmütter benutzt haben — und deshalb unbedenklich für Kinder und Haustiere, anders als die ganze Chemie im Regal." Belege für die geringere Gefährdung liefert das Reel nicht.',
      en: 'Influencer partnership by a cleaning-products maker: in a briefed reel, the creator says about the new all-purpose cleaner: "It\'s completely natural, purely plant-based — made to a household recipe our grandmothers already used — and therefore safe around children and pets, unlike all that chemistry on the shelf." The reel offers no evidence for the lower risk.',
    },
    options: [
      { de: 'Appell an die Natürlichkeit (Ad naturam)', en: 'Appeal to nature (ad naturam)' },
      { de: 'Appell an die Tradition (Ad antiquitatem)', en: 'Appeal to tradition (ad antiquitatem)' },
      { de: 'Loaded Language (wertende Sprache)', en: 'Loaded language' },
      { de: 'Falsches Dilemma (False Dichotomy)', en: 'False dichotomy' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Appell an die Natürlichkeit: Aus „natürlich, pflanzenbasiert" wird direkt „unbedenklich für Kinder und Haustiere" — die Herkunft des Produkts ersetzt den fehlenden Sicherheitsnachweis, und „Chemie" wird pauschal zum Gegenteil erklärt. Der Hebel wirkt, weil „natürlich" emotional mit „gut und sicher" verknüpft ist, obwohl auch pflanzliche Stoffe reizend oder giftig sein können und die Dosis, nicht die Herkunft über die Gefährdung entscheidet. Legitim einsetzen: Die pflanzliche Rezeptur darfst du benennen — aber die Sicherheitsaussage koppelst du an Prüfdaten (Reizungstests, Grenzwerte), nicht an das Wort „natürlich". Erkennen und kontern: Du trennst die Beschaffenheitsaussage („ist natürlich") vom Werturteil („also sicher") und fragst nach dem Beleg für genau den Sprung dazwischen — „Woran gemessen ist es unbedenklicher?". Der Verweis auf die Großmütter-Rezeptur klingt nach einem Appell an die Tradition — doch die Unbedenklichkeit leitet sie ausdrücklich aus „natürlich, pflanzenbasiert" ab, nicht aus dem Alter der Rezeptur; das Traditionssignal begleitet den Schluss nur, es trägt ihn nicht. Loaded Language beschreibt die wertende Wortwahl allein („die ganze Chemie") — der Kern hier ist aber der ausgesprochene Schluss von natürlich auf sicher, nicht nur die Färbung der Wörter. Ein Falsches Dilemma läge vor, wenn sie behauptete, es gebe nur „natürlich oder giftig" und nichts dazwischen; sie stellt aber eine Wertbehauptung auf, statt die Optionen künstlich auf zwei zu verengen.',
      en: 'Appeal to nature: "natural, plant-based" is turned directly into "safe around children and pets" — the product\'s origin stands in for the missing safety evidence, and "chemistry" is declared its blanket opposite. The lever works because "natural" is emotionally tied to "good and safe", even though plant-derived substances can be irritant or toxic and it is the dose, not the origin, that determines the hazard. Used legitimately: you may state the plant-based formula — but tie the safety claim to test data (irritation tests, limit values), not to the word "natural". To spot and counter it: separate the descriptive claim ("is natural") from the value judgement ("therefore safe") and ask for evidence of exactly that leap — "measured against what is it safer?". The nod to a grandmothers\' recipe sounds like an appeal to tradition — but she derives the safety explicitly from "natural, plant-based", not from the recipe\'s age; the tradition cue only accompanies the inference, it does not carry it. Loaded language describes the charged wording alone ("all that chemistry") — but the core here is the stated inference from natural to safe, not just the colouring of the words. A false dichotomy would claim there is only "natural or toxic" and nothing in between; instead she makes a value claim rather than artificially narrowing the options to two.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_nature',
    relatedTechniques: ['appeal_to_nature', 'appeal_to_tradition', 'loaded_language', 'false_dichotomy'],
  },
  {
    id: 'wave5a-appeal_to_nature-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Freigabe einer Kampagnen-Headline für ein Nahrungsergänzungsmittel: Die Agentur schlägt als Claim vor „Rein natürlich — und darum die gesündere Wahl für Ihre Familie." Als Kommunikationsverantwortliche zeichnest du die Endfassung ab. Eine Studie, die den Gesundheitsvorteil gegenüber dem synthetischen Vergleichspräparat belegt, liegt nicht vor.',
      en: 'Sign-off on a campaign headline for a dietary supplement: the agency proposes the claim "Purely natural — and therefore the healthier choice for your family." As communications lead you approve the final version. No study proving a health advantage over the synthetic comparator product is available.',
    },
    options: [
      {
        de: 'Ich streiche den automatischen Schluss von „natürlich" auf „gesünder": Die pflanzliche Herkunft dürfen wir nennen, die Gesundheitsaussage koppeln wir aber an das, was wir belegen können — sonst ist der Claim angreifbar und gesundheitsbezogen-werberechtlich heikel.',
        en: 'I cut the automatic leap from "natural" to "healthier": we may state the plant-based origin, but tie the health claim to what we can substantiate — otherwise the claim is contestable and shaky under health-claims advertising law.',
      },
      {
        de: 'Ich übernehme den Claim: „natürlich" verkauft sich, und niemand kann uns ernsthaft vorwerfen, dass ein Naturprodukt nicht die gesündere Wahl sei.',
        en: 'I adopt the claim: "natural" sells, and nobody can seriously argue that a natural product isn\'t the healthier choice.',
      },
      {
        de: 'Ich schärfe die Gegenüberstellung und lasse die Headline betonen, dass Verbraucher letztlich nur zwischen „natürlich" und „vollsynthetisch" wählen können.',
        en: 'I sharpen the contrast and have the headline stress that consumers ultimately only get to choose between "natural" and "fully synthetic".',
      },
      {
        de: 'Ich ergänze, dass die verwendeten Heilkräuter „schon seit Jahrhunderten bewährt" seien, um die Gesundheitsaussage abzusichern.',
        en: 'I add that the herbs used have been "trusted for centuries" to shore up the health claim.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Claim ist ein Appell an die Natürlichkeit: „rein natürlich" wird ohne Beleg zu „gesündere Wahl" — die Herkunft ersetzt den Wirknachweis. Das trägt keine belastbare Kampagne: Sobald jemand nach der Vergleichsstudie fragt, kippt die Aussage, und gesundheitsbezogene Angaben ohne Nachweis sind zudem werberechtlich angreifbar. Die beste Option nutzt den legitimen Kern (die pflanzliche Herkunft darfst du benennen), zieht daraus aber nur die zulässige, belegbare Aussage und trennt Beschaffenheit von Wirkung. Den Claim zu übernehmen wirkt plausibel, weil „natürlich = gesünder" kulturell tief sitzt — genau diese ungeprüfte Gleichsetzung ist der Fehlschluss und fällt beim ersten Nachweisverlangen in sich zusammen. Die Gegenüberstellung zuzuspitzen macht aus dem Problem ein zweites: „nur natürlich oder vollsynthetisch" verengt die Optionen künstlich auf zwei (Falsches Dilemma). „Seit Jahrhunderten bewährt" tauscht das Naturargument nur gegen ein Altersargument (Appell an die Tradition) — auch daraus folgt kein Gesundheitsvorteil, und der Beleg fehlt weiterhin.',
      en: 'The claim is an appeal to nature: "purely natural" becomes "healthier choice" with no evidence — origin stands in for proof of effect. That won\'t sustain a robust campaign: the moment someone asks for the comparative study the statement collapses, and unsubstantiated health claims are also legally exposed. The best option uses the legitimate core (you may name the plant-based origin) but draws only the admissible, evidenced statement from it and separates composition from effect. Adopting the claim seems plausible because "natural = healthier" is culturally deep-rooted — that very unchecked equation is the fallacy, and it collapses at the first demand for proof. Sharpening the contrast trades one problem for a second: "only natural or fully synthetic" artificially narrows the options to two (false dichotomy). "Trusted for centuries" merely swaps the nature argument for an age argument (appeal to tradition) — that yields no health advantage either, and the evidence is still missing.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_nature',
    relatedTechniques: ['appeal_to_nature', 'false_dichotomy', 'appeal_to_tradition'],
  },
  {
    id: 'wave5a-appeal_to_nature-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Messeauftritt eines Matratzenherstellers: Der Vertriebsleiter wirbt am Stand gegenüber einer Einkäuferin, die Naturlatex-Matratze sei „aus reinem Naturkautschuk, in traditioneller Handarbeit wie seit jeher gefertigt, und deshalb grundsätzlich gesünder für den Rücken als jede Kaltschaum-Matratze aus dem Chemielabor." Orthopädische Vergleichsdaten legt er nicht vor.',
      en: 'Trade-fair appearance by a mattress maker: at the stand the sales director tells a buyer the natural-latex mattress is "made of pure natural rubber, crafted by hand the way it always has been, and therefore fundamentally healthier for the back than any cold-foam mattress from the chemistry lab." He presents no comparative orthopaedic data.',
    },
    options: [
      { de: 'Appell an die Natürlichkeit (Ad naturam)', en: 'Appeal to nature (ad naturam)' },
      { de: 'Loaded Language (wertende Sprache)', en: 'Loaded language' },
      { de: 'Appell an die Tradition (Ad antiquitatem)', en: 'Appeal to tradition (ad antiquitatem)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Appell an die Natürlichkeit: „reiner Naturkautschuk" wird direkt zu „gesünder für den Rücken", während die synthetische Alternative über das Etikett „Chemielabor" pauschal abgewertet wird — der Belegschritt fehlt. Das Muster funktioniert, weil „natürlich" reflexhaft mit „besser für den Körper" verrechnet wird, obwohl die Herkunft des Materials nichts über orthopädische Eignung aussagt. Legitim einsetzen: Das Naturmaterial darfst du bewerben — die Gesundheitsaussage aber nur mit Prüf- oder Vergleichsdaten, nicht mit der Herkunft allein. Erkennen und kontern: Du erkennst den unbegründeten Sprung von „natürlich" auf „gesünder" und verlangst den Beleg genau dafür („Woran gemessen stützt sie die Wirbelsäule besser?"). Loaded Language beschreibt nur die wertende Wortwahl („Chemielabor") — hier ist aber ein ausgesprochener Schluss von natürlich auf gesund der Kern, nicht bloß die Färbung der Begriffe. Der Hinweis auf die überlieferte Handarbeit („wie seit jeher gefertigt") klingt nach einem Appell an die Tradition — doch den Gesundheitsvorteil begründet er mit „reinem Naturkautschuk", nicht mit dem Alter der Machart; die Tradition schmückt das Argument, sie stützt es nicht.',
      en: 'Appeal to nature: "pure natural rubber" becomes "healthier for the back", while the synthetic alternative is dismissed wholesale via the label "chemistry lab" — the evidential step is missing. The pattern works because "natural" is reflexively equated with "better for the body", even though the material\'s origin says nothing about orthopaedic suitability. Used legitimately: you may advertise the natural material — but make the health claim only with test or comparative data, not with origin alone. To spot and counter it: recognise the unjustified leap from "natural" to "healthier" and demand evidence for exactly that ("measured against what does it support the spine better?"). Loaded language describes only the charged wording ("chemistry lab") — but here the core is a stated inference from natural to healthy, not merely the colouring of the terms. The reference to time-honoured handcraft ("the way it always has been") sounds like an appeal to tradition — but he grounds the health advantage in "pure natural rubber", not in the age of the method; tradition decorates the argument, it does not support it.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_nature',
    relatedTechniques: ['appeal_to_nature', 'loaded_language', 'appeal_to_tradition'],
  },
];
