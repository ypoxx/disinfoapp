import type { Exercise } from '../../types';

// social_proof — Phase 3 densification batch.
export const socialProofP3Exercises: Exercise[] = [
  {
    id: 'sp-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist hier der dominante Treiber der Wirkung?',
      en: 'Which technique is the dominant driver of the effect here?',
    },
    scenario: {
      de: 'Ein Kosmetik-Startup bewirbt sein neues Serum auf einer Landingpage, die mehrere Hebel bündelt: ein Countdown meldet „Aktion endet in 48 Stunden", ein namentlich zitierter Dermatologe empfiehlt das Produkt, neben dem Angebotspreis steht ein durchgestrichener, höherer Ursprungspreis, und ein großer Badge zeigt „über 90.000-mal verkauft — 4,9 von 5 Sternen aus 11.000 Bewertungen". Das Team testet die Seite sauber gegeneinander: Nimmt es den Countdown, den Dermatologen-Hinweis oder den durchgestrichenen Preis heraus, bleibt die Kaufrate fast gleich. Entfernt es dagegen den Badge mit Verkaufszahl und Bewertungen, bricht die Conversion um rund 30 % ein.',
      en: 'A cosmetics startup promotes its new serum on a landing page bundling several levers: a countdown reads “offer ends in 48 hours”, a named dermatologist endorses the product, a struck-through higher original price sits next to the offer price, and a large badge shows “over 90,000 sold — 4.9 out of 5 stars from 11,000 reviews”. The team A/B-tests the page cleanly: removing the countdown, the dermatologist note or the struck-through price barely changes the purchase rate. But removing the badge with the sales figure and reviews collapses conversion by about 30%.',
    },
    options: [
      { de: 'Soziale Bewährtheit (Social Proof) — Verkaufszahl und Bewertungen', en: 'Social proof — the sales figure and reviews' },
      { de: 'Verknappung (Scarcity) — der 48-Stunden-Countdown', en: 'Scarcity — the 48-hour countdown' },
      { de: 'Autorität (Authority) — die Empfehlung des Dermatologen', en: 'Authority — the dermatologist’s endorsement' },
      { de: 'Ankereffekt (Anchoring) — der durchgestrichene Ursprungspreis', en: 'Anchoring — the struck-through original price' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Alle vier Techniken sind real auf der Seite vorhanden und einzeln plausibel — genau das macht die Aufgabe anspruchsvoll. Entscheidend ist nicht der Augenschein, sondern der saubere Test: Nur das Entfernen des Badges „90.000-mal verkauft / 4,9 Sterne aus 11.000 Bewertungen" lässt die Conversion einbrechen. Das ist der Fingerabdruck von Sozialer Bewährtheit. Der Mechanismus: Bei Unsicherheit schließen Menschen aus dem Verhalten vieler anderer, dass eine Entscheidung richtig und sicher ist — die Masse ersetzt die eigene Prüfung. Die Grenze: Echte, belegbare Verkaufs- und Bewertungszahlen dürfen genannt werden; erfundene Zahlen oder gekaufte Bewertungen kippen ins Irreführende (u. a. UWG). Warum die anderen nicht dominieren: Verknappung (Countdown), Autorität (Dermatologe) und Ankereffekt (Streichpreis) tragen laut Test kaum zur Wirkung bei — sie sind Beiwerk, nicht der Motor. Die Falle ist, vom „lautesten" Element (Countdown) auf den stärksten Hebel zu schließen; die Daten zeigen den wahren Treiber.',
      en: 'All four techniques are genuinely present and individually plausible — that is what makes this hard. What decides it is not appearance but the clean test: only removing the “90,000 sold / 4.9 stars from 11,000 reviews” badge collapses conversion. That is the fingerprint of social proof. The mechanism: under uncertainty, people infer from the behaviour of many others that a decision is correct and safe — the crowd substitutes for their own scrutiny. The boundary: real, verifiable sales and review numbers may be stated; invented figures or bought reviews tip into deception (e.g. unfair-competition law). Why the others do not dominate: scarcity (countdown), authority (dermatologist) and anchoring (struck price) barely move the effect in the test — they are trim, not the engine. The trap is to infer the strongest lever from the “loudest” element (the countdown); the data reveal the true driver.',
    },
    points: 20,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof', 'scarcity', 'authority', 'anchoring'],
  },
  {
    id: 'sp-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier eingesetzt?',
      en: 'Which persuasion technique is being used here?',
    },
    scenario: {
      de: 'Am Ende eines Fachartikels blinkt ein Anmelde-Banner: „Schon 47.000 Kolleginnen und Kollegen aus deiner Branche lesen unseren Newsletter — worauf wartest du noch?"',
      en: 'At the end of a trade article, a sign-up banner flashes: “47,000 colleagues from your industry already read our newsletter — what are you waiting for?”',
    },
    options: [
      { de: 'Soziale Bewährtheit (Social Proof)', en: 'Social proof' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Autoritätsargument (Authority)', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Soziale Bewährtheit in ihrer offensichtlichsten Form: Die schiere Zahl gleichgesinnter Berufskolleginnen („schon 47.000 aus deiner Branche") soll dir signalisieren, dass Mitmachen die normale, richtige Wahl ist. Der Hebel wirkt, weil wir das Verhalten vieler Ähnlicher als Abkürzung für eine gute Entscheidung nehmen. Die Grenze: Eine echte, belegbare Leserzahl zu nennen ist legitim; eine erfundene Zahl wäre Irreführung. Verknappung wäre es nur bei begrenzter Menge oder Frist („nur heute", „nur 100 Plätze") — davon steht hier nichts. Ein Autoritätsargument bräuchte eine Experten- oder Instanz-Empfehlung; hier zählt aber die Masse gewöhnlicher Kolleginnen, kein Fachurteil.',
      en: 'This is social proof in its most obvious form: the sheer number of like-minded peers (“47,000 from your industry already”) is meant to signal that joining is the normal, correct choice. The lever works because we treat the behaviour of many similar others as a shortcut to a good decision. The boundary: stating a real, verifiable reader count is legitimate; an invented number would be deceptive. Scarcity would apply only with a limited quantity or deadline (“today only”, “100 seats left”) — none of that is here. An appeal to authority would need an expert or institutional endorsement; here it is the mass of ordinary colleagues that counts, not an expert verdict.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'sp-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter diesem Produkt-Hinweis?',
      en: 'Which technique lies behind this product note?',
    },
    scenario: {
      de: 'Auf der Produktseite eines Online-Shops steht direkt unter dem Titel: „4,8 von 5 Sternen aus über 12.000 Kundenbewertungen — die Wahl der meisten Käuferinnen und Käufer."',
      en: 'On an online shop’s product page, directly under the title: “4.8 out of 5 stars from over 12,000 customer reviews — the choice of most buyers.”',
    },
    options: [
      { de: 'Soziale Bewährtheit (Social Proof)', en: 'Social proof' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klarer Fall von Sozialer Bewährtheit: Die Bewertung stützt sich nicht auf ein Expertenurteil, sondern auf die Masse zufriedener Kundinnen („12.000 Bewertungen", „die Wahl der meisten") — viele andere haben entschieden, also erscheint es sicher. Der Mechanismus ist die Orientierung an der Mehrheit. Die Grenze: Echte, verifizierbare Bewertungen sind zulässig; gekaufte oder gefälschte Sterne wären Betrug. Sympathie (Liking) würde auf persönliche Nähe, Ähnlichkeit oder Attraktivität der Marke setzen — hier zieht aber die Zahl der Bewertungen, nicht Zuneigung. Der Ankereffekt bräuchte eine Referenzzahl (z. B. einen durchgestrichenen Preis), an der du dich orientierst; die Sternebewertung ist kein solcher Vergleichsanker.',
      en: 'A clear case of social proof: the rating rests not on an expert verdict but on the mass of satisfied customers (“12,000 reviews”, “the choice of most buyers”) — many others have decided, so it looks safe. The mechanism is orienting toward the majority. The boundary: real, verifiable reviews are permissible; bought or faked stars would be fraud. Liking would rely on personal closeness, similarity or the brand’s attractiveness — but here it is the number of reviews that pulls, not affection. Anchoring would need a reference number (e.g. a struck-through price) you compare against; a star rating is no such comparison anchor.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'sp-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Botschaft vor allem?',
      en: 'Which technique primarily shapes this message?',
    },
    scenario: {
      de: 'Ein Fitnessstudio verschickt an zögernde Interessenten eine Mail: „Neun von zehn Mitgliedern, die im Januar bei uns gestartet sind, trainieren heute noch regelmäßig. Sei kein Einzelfall — mach es wie die große Mehrheit und bleib dran."',
      en: 'A gym emails hesitant prospects: “Nine out of ten members who started with us in January still train regularly today. Don’t be the exception — do what the large majority does and stick with it.”',
    },
    options: [
      { de: 'Soziale Bewährtheit (Social Proof)', en: 'Social proof' },
      { de: 'Konsistenz (Commitment/Consistency)', en: 'Commitment/consistency' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Autoritätsargument (Authority)', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Botschaft arbeitet vor allem mit Sozialer Bewährtheit: „Neun von zehn Mitgliedern" und „mach es wie die große Mehrheit" stellen ein beschreibendes Gruppen-Normbild auf, an dem du dich ausrichten sollst. Der Hebel: Wer unsicher ist, folgt dem sichtbaren Verhalten der Mehrheit. Die Grenze verläuft an der Ehrlichkeit der Quote — eine belegte Bindungsrate ist legitim, eine erfundene nicht. Konsistenz ist der stärkste Fehlgriff, weil das Bild „dranbleiben" mitschwingt; sie bräuchte aber eine frühere eigene Zusage von dir, an die du gebunden wirst — die gibt es hier nicht, es zählt allein das Verhalten der anderen. Verknappung fehlt (keine begrenzte Menge oder Frist). Ein Autoritätsargument fehlt ebenfalls: Es sind gewöhnliche Mitglieder, keine zitierte Fachinstanz.',
      en: 'The message works mainly through social proof: “nine out of ten members” and “do what the large majority does” set up a descriptive group norm for you to align with. The lever: when uncertain, people follow the visible behaviour of the majority. The boundary is the honesty of the figure — a documented retention rate is legitimate, an invented one is not. Consistency is the strongest miss, because the note of “sticking with it” resonates; but it would require a prior commitment of your own that binds you — there is none here, only the behaviour of others counts. Scarcity is absent (no limited quantity or deadline). An appeal to authority is absent too: these are ordinary members, not a cited expert body.',
    },
    points: 10,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof', 'consistency'],
  },
  {
    id: 'sp-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt diesen Verkaufs-Pitch hauptsächlich?',
      en: 'Which technique primarily carries this sales pitch?',
    },
    scenario: {
      de: 'In einer B2B-Präsentation eröffnet der Anbieter mit einer Wand aus Kundenzitaten und der Zeile: „Über 200 Unternehmen berichten in unseren Fallstudien, wie sie mit unserer Software Zeit sparen — lies selbst, was so viele Kunden erlebt haben." Konkrete Funktionen oder Messwerte kommen erst später.',
      en: 'In a B2B presentation the vendor opens with a wall of customer quotes and the line: “Over 200 companies describe in our case studies how our software saves them time — read for yourself what so many customers have experienced.” Concrete features or metrics come only later.',
    },
    options: [
      { de: 'Soziale Bewährtheit (Social Proof)', en: 'Social proof' },
      { de: 'Autoritätsargument (Authority)', en: 'Appeal to authority' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Emotionaler Appell (Emotional Appeal)', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Pitch stützt sich zuerst auf Soziale Bewährtheit: Nicht Funktionen oder Zahlen überzeugen, sondern die Menge zufriedener Kunden („über 200 Unternehmen", „was so viele Kunden erlebt haben"). Der Mechanismus: Die Erfahrung vieler ähnlicher Firmen dient als Beleg dafür, dass die Wahl sicher ist. Die Grenze: Echte, benennbare Fallstudien sind zulässig; erfundene oder anonym-unüberprüfbare „Kunden" wären irreführend. Das Autoritätsargument ist der verlockendste Fehlgriff, weil Fallstudien seriös klingen — es zählt hier aber die Zahl gewöhnlicher Kunden, nicht das Urteil einer Experteninstanz; würde ein zertifizierendes Institut zitiert, wäre es Autorität. Verknappung fehlt (keine Begrenzung). Ein emotionaler Appell würde gezielt Angst oder Begeisterung schüren; der Ton bleibt hier sachlich und setzt auf die schiere Zahl der Referenzen.',
      en: 'The pitch leans first on social proof: it is not features or metrics that persuade but the mass of satisfied customers (“over 200 companies”, “what so many customers have experienced”). The mechanism: the experience of many similar firms serves as evidence that the choice is safe. The boundary: real, nameable case studies are permissible; invented or anonymously unverifiable “customers” would be deceptive. Appeal to authority is the most tempting miss, because case studies sound serious — but here it is the number of ordinary customers that counts, not the verdict of an expert body; were a certifying institute cited, it would be authority. Scarcity is absent (no limit). An emotional appeal would deliberately stoke fear or excitement; the tone here stays factual and rides on the sheer number of references.',
    },
    points: 10,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof', 'authority'],
  },
  {
    id: 'sp-p3-6',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze den passenden Begriff: Indem die Startseite groß anzeigt „bereits über 500.000 Menschen sind dabei", nutzt sie den Effekt der ___ — unsichere Betrachter schließen aus dem Verhalten vieler anderer, dass die Entscheidung richtig sein muss.',
      en: 'Fill in the right term: By prominently showing “over 500,000 people are already on board”, the homepage exploits the effect of ___ — uncertain viewers infer from the behaviour of many others that the decision must be right.',
    },
    scenario: {
      de: 'Du analysierst eine Startseite, die statt Produktdetails vor allem eine große Nutzerzahl in den Vordergrund stellt.',
      en: 'You are analysing a homepage that foregrounds a large user count instead of product details.',
    },
    options: [
      { de: 'sozialen Bewährtheit', en: 'social proof' },
      { de: 'Verknappung', en: 'scarcity' },
      { de: 'Autorität', en: 'authority' },
      { de: 'Konsistenz', en: 'commitment/consistency' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur „soziale Bewährtheit" passt: Der Satz beschreibt exakt ihren Mechanismus — aus dem Verhalten vieler anderer („500.000 sind dabei") auf die Richtigkeit der eigenen Entscheidung zu schließen. Der Hebel greift besonders bei Unsicherheit und wenn die Referenzgruppe ähnlich wirkt. Legitim ist eine echte, überprüfbare Nutzerzahl; manipulativ wird es bei erfundenen oder aufgeblähten Zahlen. Die anderen Begriffe passen nicht in den beschriebenen Ablauf: Verknappung würde eine begrenzte Menge oder Frist voraussetzen, Autorität eine zitierte Experten- oder Instanz-Empfehlung, Konsistenz eine frühere eigene Zusage, an die man gebunden wird — nichts davon beschreibt der Satz, in dem allein die Masse anderer zählt.',
      en: 'Only “social proof” fits: the sentence describes exactly its mechanism — inferring the correctness of one’s own decision from the behaviour of many others (“500,000 are on board”). The lever bites especially under uncertainty and when the reference group seems similar. A real, verifiable user count is legitimate; invented or inflated figures make it manipulative. The other terms do not fit the described process: scarcity would require a limited quantity or deadline, authority a cited expert or institutional endorsement, consistency a prior commitment of one’s own that binds you — none of which the sentence describes, where only the mass of others counts.',
    },
    points: 10,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'sp-p3-7',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als Kommunikationsverantwortliche mit dem Vorschlag um?',
      en: 'As the communications lead, how do you handle the proposal?',
    },
    scenario: {
      de: 'Kurz vor dem Launch trudeln echte Kundenbewertungen nur langsam ein. Das Marketing schlägt vor, 5.000 Fünf-Sterne-Bewertungen einzukaufen und die Follower-Zahlen aufzustocken, damit auf allen Kanälen sofort der Eindruck „alle lieben es" entsteht. Du sollst das freigeben.',
      en: 'Just before launch, genuine customer reviews are trickling in slowly. Marketing proposes buying 5,000 five-star reviews and padding the follower counts so that an “everyone loves it” impression appears instantly across all channels. You are asked to sign off.',
    },
    options: [
      {
        de: 'Ich lehne die gekauften Bewertungen ab und beschleunige stattdessen echte Soziale Bewährtheit: verifizierte Kundinnen aktiv um Bewertungen bitten, reale Nutzungszahlen und benannte Fallstudien zeigen und offenlegen, worauf die Zahlen beruhen.',
        en: 'I reject the bought reviews and instead accelerate genuine social proof: actively ask verified customers for reviews, show real usage figures and named case studies, and disclose what the numbers are based on.',
      },
      {
        de: 'Ich gebe den Kauf frei, verteile die 5.000 Bewertungen aber über mehrere Wochen, damit sie organisch gewachsen wirken.',
        en: 'I approve the purchase but spread the 5,000 reviews over several weeks so they look organically grown.',
      },
      {
        de: 'Ich kaufe die Bewertungen nur für die Launch-Woche ein und lösche sie danach wieder.',
        en: 'I buy the reviews for launch week only and delete them again afterwards.',
      },
      {
        de: 'Ich mache gar nichts mit Sozialer Bewährtheit und warte einfach ab, bis genug echte Bewertungen von selbst zusammenkommen.',
        en: 'I do nothing with social proof at all and simply wait until enough genuine reviews accumulate on their own.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) trennt Technik und Ethik sauber und ist zugleich die klügste Wahl: Sie nutzt den legitimen Hebel Sozialer Bewährtheit — echte, überprüfbare Belege — statt ihn zu fälschen. Gekaufte Bewertungen sind Astroturfing: künstlich erzeugte Popularität, die täuscht, gegen Verbraucherschutz- und Plattformregeln verstößt (u. a. UWG) und bei Auffliegen das Vertrauen dauerhaft zerstört. Option 2 macht den Betrug nur unauffälliger — die Fälschung bleibt. Option 3 ebenso: Auch temporär erfundene Bewertungen sind erfunden, das spätere Löschen beseitigt weder Täuschung noch Rechtsrisiko. Option 4 vermeidet zwar den Betrug, verschenkt aber den völlig legitimen Hebel: Man darf echte Zufriedenheit sichtbar machen und aktiv um reale Bewertungen werben. Deshalb ist Option 1 nicht nur ethisch, sondern auch wirksamer als bloßes Abwarten. Die Grenze: Echte Bewährtheit verstärken ja, Popularität fälschen nein.',
      en: 'Only option 1 (index 0) cleanly separates technique from ethics and is also the smartest choice: it uses the legitimate lever of social proof — real, verifiable evidence — instead of faking it. Bought reviews are astroturfing: manufactured popularity that deceives, breaches consumer-protection and platform rules (e.g. unfair-competition law), and, once exposed, destroys trust for good. Option 2 only makes the fraud less conspicuous — the fabrication remains. Option 3 likewise: temporarily invented reviews are still invented, and deleting them later removes neither the deception nor the legal risk. Option 4 avoids the fraud but forfeits the entirely legitimate lever: you may make genuine satisfaction visible and actively solicit real reviews. That is why option 1 is not only ethical but also more effective than merely waiting. The boundary: amplifying genuine social proof, yes; faking popularity, no.',
    },
    points: 15,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof', 'dark_patterns'],
  },
];
