import type { Exercise } from '../../types';

// authority — Phase 3 densification batch.
export const authorityP3Exercises: Exercise[] = [
  {
    id: 'au-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche der eingesetzten Techniken ist der dominante Treiber der Glaubwürdigkeit — und damit der kritische Hebel dieser Landingpage?',
      en: 'Which of the techniques in play is the dominant driver of credibility — and thus the critical lever of this landing page?',
    },
    scenario: {
      de: 'Die Landingpage für eine neue Buchhaltungssoftware ist um ein großes, amtlich wirkendes Siegel herum gebaut: „Zertifiziert & empfohlen vom Institut für Wirtschaftsprüfungsstandards" — mittig, direkt unter dem Produktnamen, mit Wappen-Logo und Prüfsiegel-Optik. Deutlich kleiner darunter steht „12.000 Kanzleien arbeiten bereits mit uns", daneben ein Countdown „Einführungsrabatt endet in 48 Stunden". Erst im Fußzeilen-Kleingedruckten erfährt man, dass besagtes „Institut" eine hundertprozentige Tochtergesellschaft des Software-Anbieters ist.',
      en: 'The landing page for a new accounting software is built around a large, official-looking seal: “Certified & recommended by the Institute for Audit Standards” — centered, right below the product name, with a coat-of-arms logo and inspection-seal styling. Noticeably smaller beneath it reads “12,000 firms already work with us”, next to a countdown “Launch discount ends in 48 hours”. Only in the footer’s fine print do you learn that this “Institute” is a wholly owned subsidiary of the software vendor.',
    },
    options: [
      {
        de: 'Autorität — das zentral platzierte, amtlich wirkende Zertifizierungssiegel trägt die Glaubwürdigkeit der Seite; die übrigen Elemente stützen es nur.',
        en: 'Authority — the centrally placed, official-looking certification seal carries the page’s credibility; the other elements merely support it.',
      },
      {
        de: 'Sozialer Beweis — die „12.000 Kanzleien" sind der eigentliche Vertrauensanker der Seite.',
        en: 'Social proof — the “12,000 firms” are the page’s real trust anchor.',
      },
      {
        de: 'Knappheit — der 48-Stunden-Countdown erzeugt den Entscheidungsdruck, der die Seite überzeugend macht.',
        en: 'Scarcity — the 48-hour countdown creates the decision pressure that makes the page persuasive.',
      },
      {
        de: 'Framing — die Anordnung der Elemente rahmt das Produkt als konkurrenzlosen Branchenstandard.',
        en: 'Framing — the arrangement of elements frames the product as the unrivaled industry standard.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominant ist die Autorität: Die gesamte Seite ist um das amtlich wirkende Siegel herum komponiert — zentral, direkt unter dem Produktnamen, in Prüfsiegel-Optik. Der Mechanismus wirkt, weil ein offiziell aussehendes Gütezeichen Kompetenz und Legitimität signalisiert und die kritische Prüfung ersetzt („zertifiziert" genügt, niemand liest die Kriterien). Genau hier liegt auch die ethische Grenze: Ein echtes, unabhängiges Zertifikat wäre ein legitimer Vertrauensbeleg — hier aber zertifiziert sich der Anbieter über eine getarnte Tochtergesellschaft selbst, was die Autorität fabriziert und irreführend (UWG-relevant) macht. Sozialer Beweis („12.000 Kanzleien") ist präsent, aber bewusst kleiner gesetzt und nur stützend — er ist nicht der Anker, um den die Seite gebaut ist. Knappheit (48-Stunden-Countdown) erzeugt Zeitdruck im letzten Schritt, liefert aber keine Glaubwürdigkeit. Framing beschreibt die Gesamtinszenierung, benennt aber nicht den tragenden Hebel — dieser ist konkret das Siegel, also Autorität.',
      en: 'The dominant lever is authority: the entire page is composed around the official-looking seal — centered, directly beneath the product name, styled like an inspection mark. The mechanism works because an officially appearing seal of quality signals competence and legitimacy and substitutes for critical scrutiny (“certified” suffices; nobody reads the criteria). This is also where the ethical line runs: a genuine, independent certificate would be a legitimate trust signal — but here the vendor certifies itself through a disguised subsidiary, which fabricates the authority and makes it misleading (a fair-trading/UWG issue). Social proof (“12,000 firms”) is present but deliberately set smaller and merely supportive — it is not the anchor the page is built around. Scarcity (the 48-hour countdown) adds time pressure at the final step but supplies no credibility. Framing describes the overall staging but does not name the load-bearing lever — which concretely is the seal, i.e. authority.',
    },
    points: 20,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'social_proof', 'scarcity', 'framing'],
  },
  {
    id: 'au-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik wird hier vor allem eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Ein TV-Spot für ein Nahrungsergänzungsmittel zeigt einen Darsteller im weißen Kittel mit Stethoskop vor einer Praxis-Kulisse. Eingeblendet: „Prof. Dr. med." Er sagt in die Kamera: „Als Arzt empfehle ich Ihnen dieses Präparat."',
      en: 'A TV spot for a dietary supplement shows an actor in a white coat with a stethoscope in front of a doctor’s-office backdrop. On screen: “Prof. Dr. med.” He says to the camera: “As a doctor, I recommend this supplement to you.”',
    },
    options: [
      { de: 'Autorität', en: 'Authority' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klarer Fall von Autorität: Weißer Kittel, Stethoskop, Praxis-Kulisse und der Titel „Prof. Dr. med." sind Autoritätssymbole, und die Formel „Als Arzt empfehle ich…" leiht sich Glaubwürdigkeit aus dem Arztstatus. Der Hebel wirkt, weil wir Aussagen von Autoritätspersonen weniger kritisch prüfen. Die Grenze: Empfiehlt eine echte, einschlägig qualifizierte Fachperson auf Basis von Evidenz, ist das legitim; hier ist es ein Darsteller in Kostüm, also fabrizierte Autorität. Sozialer Beweis würde auf viele zufriedene Nutzer verweisen (fehlt hier). Sympathie würde auf Attraktivität oder Ähnlichkeit setzen — der Hebel ist aber der Status, nicht die Nähe. Ein emotionaler Appell würde gezielt Angst oder Hoffnung schüren, doch der Ton bleibt sachlich-seriös.',
      en: 'A clear case of authority: the white coat, stethoscope, office backdrop and the title “Prof. Dr. med.” are authority symbols, and the phrase “As a doctor, I recommend…” borrows credibility from the doctor status. The lever works because we scrutinize statements from authority figures less critically. The boundary: if a genuine, relevantly qualified expert recommends something based on evidence, that is legitimate; here it is an actor in costume — fabricated authority. Social proof would point to many satisfied users (absent here). Liking would rely on attractiveness or similarity — but the lever is status, not closeness. An emotional appeal would deliberately stoke fear or hope, yet the tone stays sober and serious.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority'],
  },
  {
    id: 'au-p3-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Werbeaussage in erster Linie?',
      en: 'Which technique primarily shapes this advertising claim?',
    },
    scenario: {
      de: 'Die Startseite einer Geldanlage-App wirbt groß: „Unser Anlage-Algorithmus wird empfohlen von Nobelpreisträger Prof. Dr. Elias Varga." Varga erhielt den Nobelpreis für Physik; mit Finanzmärkten oder Portfoliotheorie hatte er beruflich nie zu tun. Angaben zu Methodik oder bisheriger Wertentwicklung fehlen vollständig.',
      en: 'The home screen of an investment app advertises in large type: “Our investment algorithm is recommended by Nobel laureate Prof. Dr. Elias Varga.” Varga won the Nobel Prize in Physics; he has never professionally dealt with financial markets or portfolio theory. Any details on methodology or past performance are entirely absent.',
    },
    options: [
      { de: 'Autorität', en: 'Authority' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Sympathie (Liking)', en: 'Liking' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominant ist die Autorität — genauer: geliehene, fachfremde Autorität. Vargas Nobelpreis ist echt, steht aber für Physik, nicht für Finanzmärkte; sein Prestige wird auf ein fremdes Gebiet übertragen, damit der Algorithmus glaubwürdig erscheint. Der Hebel wirkt, weil wir Titel und Expertise als generelles Kompetenz-Signal lesen und selten fragen: „Qualifiziert ihn das gerade für DIESE Aussage?" Die Grenze: Ein einschlägiger Experte (etwa ein renommierter Finanzökonom) mit offengelegter, evidenzbasierter Einschätzung wäre legitim; ein prominenter Name ohne Fachbezug und ohne Methodik ist manipulative Autoritätsleihe. Sozialer Beweis würde auf die Masse der Nutzer verweisen, nicht auf eine Einzelperson — fehlt. Sympathie würde über Attraktivität, Humor oder Ähnlichkeit wirken; hier zählt allein der Status, nicht die Zuneigung. Ein emotionaler Appell würde gezielt Gefühle wie Gier oder Angst ansprechen — die Aussage bleibt nüchtern und beruft sich rein auf den Expertenstatus.',
      en: 'The dominant lever is authority — more precisely, borrowed, out-of-field authority. Varga’s Nobel Prize is real, but it stands for physics, not financial markets; his prestige is transferred to an unrelated field so the algorithm looks credible. The lever works because we read titles and expertise as a general competence signal and rarely ask: “Does that actually qualify him for THIS claim?” The boundary: a relevant expert (say, a respected financial economist) offering a disclosed, evidence-based assessment would be legitimate; a prominent name with no subject-matter relevance and no methodology is manipulative borrowing of authority. Social proof would point to the mass of users, not a single individual — absent. Liking would work through attractiveness, humor or similarity; here only status counts, not affection. An emotional appeal would deliberately target feelings like greed or fear — the claim stays sober and rests purely on expert status.',
    },
    points: 10,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority'],
  },
  {
    id: 'au-p3-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du bist Kommunikationsverantwortliche für den Launch. Wie gehst du mit dem Vorschlag um?',
      en: 'You are the communications lead for the launch. How do you handle the proposal?',
    },
    scenario: {
      de: 'Für den Launch eines neuen Schlaf-Supplements schlägt das Marketing vor, „Dr. med. Kern" im weißen Kittel als Testimonial einzusetzen: Er soll das Produkt als „klinisch das beste am Markt" bezeichnen. Kern ist bezahlter Markenbotschafter, hat aber keinen Schwerpunkt in Schlafmedizin; der „klinische" Beleg besteht aus einer einzigen, intern finanzierten Kleinstudie. Die bezahlte Partnerschaft soll nicht erwähnt werden, damit die Empfehlung „unabhängig" wirkt.',
      en: 'For the launch of a new sleep supplement, marketing proposes using “Dr. Kern” in a white coat as a testimonial: he is to call the product “clinically the best on the market.” Kern is a paid brand ambassador but has no specialization in sleep medicine; the “clinical” evidence consists of a single, internally funded small study. The paid partnership is not to be mentioned, so the recommendation appears “independent.”',
    },
    options: [
      {
        de: 'Ich hole die Empfehlung von einer tatsächlich einschlägig qualifizierten, unabhängigen Fachperson (Schlafmediziner:in), lege eine etwaige bezahlte Zusammenarbeit transparent offen und beschränke die Aussagen auf das, was die Studienlage wirklich hergibt.',
        en: 'I source the recommendation from a genuinely qualified, independent expert (a sleep physician), transparently disclose any paid relationship, and limit the claims to what the evidence actually supports.',
      },
      {
        de: 'Ich behalte Dr. Kern, streiche aber jeden Hinweis auf die Bezahlung — „unabhängig wirkende" Empfehlungen konvertieren nun mal besser.',
        en: 'I keep Dr. Kern but remove any mention of the payment — “independent-looking” recommendations simply convert better.',
      },
      {
        de: 'Ich ersetze den Arzt durch einen bekannten Reality-TV-Star im Laborkittel, weil Reichweite mehr zählt als Fachtitel.',
        en: 'I replace the doctor with a well-known reality-TV star in a lab coat, because reach matters more than credentials.',
      },
      {
        de: 'Ich verzichte ganz auf Experten und werbe nur mit ausgewählten Kundenstimmen, die von „unglaublichen Ergebnissen" berichten.',
        en: 'I drop experts entirely and advertise only with hand-picked customer testimonials reporting “incredible results.”',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) nutzt Autorität legitim: Sie stützt sich auf echte, einschlägige Expertise, legt die Bezahlbeziehung offen und deckt die Aussagen durch belastbare Evidenz. Autorität ist ein legitimer Überzeugungshebel — aber nur, wenn die Expertise real und relevant ist, die Interessenlage transparent bleibt und die Behauptung durch Belege gedeckt ist. Entscheidend ist der Effekt zweiter Ordnung: Eine als „unabhängig" getarnte, bezahlte Arztempfehlung ist Schleichwerbung und irreführend (UWG/Heilmittelwerberecht) — fliegt sie auf, kippt der Autoritätsbonus in einen Glaubwürdigkeitsschaden. Option 2 ist genau dieser Verstoß: fehlende Kennzeichnung plus fachfremde, dünn belegte Behauptung. Option 3 verschärft es, indem echte durch verkleidete Autorität (Kostüm statt Kompetenz) ersetzt wird — Reichweite ohne Legitimität. Option 4 wirft den legitimen Hebel ganz weg und ersetzt ihn durch rosinengepickte, unbelegte Kundenstimmen — schwächer und rechtlich weiter riskant. Die Grenze: echte, relevante, offengelegte Expertise ja — geliehene, getarnte oder überzogene Autorität nein.',
      en: 'Only option 1 (index 0) uses authority legitimately: it relies on genuine, relevant expertise, discloses the paid relationship, and backs the claims with solid evidence. Authority is a legitimate persuasion lever — but only when the expertise is real and relevant, the interests are transparent, and the claim is supported by evidence. The decisive point is the second-order effect: a paid doctor’s endorsement disguised as “independent” is covert advertising and misleading (fair-trading and health-advertising law) — if exposed, the authority bonus flips into credibility damage. Option 2 is exactly that breach: no disclosure plus an out-of-field, thinly supported claim. Option 3 makes it worse by replacing real authority with costumed authority (a coat instead of competence) — reach without legitimacy. Option 4 discards the legitimate lever entirely and swaps in cherry-picked, unsubstantiated testimonials — weaker and still legally risky. The boundary: genuine, relevant, disclosed expertise yes — borrowed, disguised or overstated authority no.',
    },
    points: 15,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'social_proof'],
  },
];
