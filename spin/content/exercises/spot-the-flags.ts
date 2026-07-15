import type { Exercise } from '../types';

export const spotTheFlags: Exercise[] = [
  {
    id: 'sf-1',
    type: 'spot-the-flag',
    difficulty: 'beginner',
    question: {
      de: 'Welches Element erzeugt hier gezielt Handlungsdruck durch künstliche Dringlichkeit?',
      en: 'Which element here deliberately manufactures pressure to act through artificial urgency?',
    },
    scenario: {
      de: '⚠️ SCHOCKIEREND: Geheime Dokumente BEWEISEN, dass die Regierung uns belogen hat! Die Mainstream-Medien WEIGERN sich, darüber zu berichten! TEILE diesen Post, bevor er ZENSIERT wird! 🚨',
      en: '⚠️ SHOCKING: Secret documents PROVE the government has been lying to us! The mainstream media REFUSE to report on it! SHARE this post before it gets CENSORED! 🚨',
    },
    options: [
      {
        de: 'Emotionale/reißerische Sprache (SCHOCKIEREND, BEWEISEN)',
        en: 'Emotional/sensationalist language (SHOCKING, PROVE)',
      },
      {
        de: 'Anti-Medien-Narrativ ("Mainstream-Medien weigern sich")',
        en: 'Anti-media narrative ("mainstream media refuse")',
      },
      {
        de: 'Dringlichkeitsappell ("bevor er zensiert wird")',
        en: 'Urgency appeal ("before it gets censored")',
      },
      {
        de: 'Keine konkreten Quellenangaben',
        en: 'No concrete source references',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Der Dringlichkeitsappell ("bevor er zensiert wird") erzeugt den Handlungsdruck: Eine erfundene Deadline soll das Teilen erzwingen, bevor jemand prüfen kann — das ist der Verknappungs-/Dringlichkeitshebel. Die anderen Elemente sind ebenfalls Manipulationssignale, treiben aber nicht die Zeitnot: reißerische Sprache spielt mit Emotion, das Anti-Medien-Narrativ mit Misstrauen, fehlende Quellen mit Unüberprüfbarkeit. Die ethische Grenze: Eine echte Frist (Anmeldeschluss, Embargo) transparent zu nennen ist legitim; eine Deadline zu erfinden, um Prüfung zu verhindern, ist manipulativ.',
      en: 'The urgency appeal ("before it gets censored") is what manufactures the pressure to act: a fabricated deadline is meant to force sharing before anyone can check — the scarcity/urgency lever. The other elements are manipulation signals too, but they do not drive the time pressure: sensationalist language plays on emotion, the anti-media narrative on distrust, missing sources on unverifiability. The ethical line: stating a real deadline (a registration cut-off, an embargo) transparently is legitimate; inventing one to prevent scrutiny is manipulative.',
    },
    points: 20,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity', 'emotional_appeal', 'reactance_theory'],
  },
  {
    id: 'sf-2',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Element ist der klarste Interessenkonflikt in dieser Pressemitteilung?',
      en: 'Which element is the clearest conflict of interest in this press release?',
    },
    scenario: {
      de: 'Pressemitteilung: "CleanTech Solutions GmbH ist Marktführer bei grüner Technologie. Laut einer von uns beauftragten Studie sind 95% der Kunden zufrieden. Im Vergleich zu vor 5 Jahren haben wir den CO2-Ausstoß um 60% reduziert."',
      en: 'Press release: "CleanTech Solutions GmbH is the market leader in green technology. According to a study we commissioned, 95% of customers are satisfied. Compared to 5 years ago, we have reduced CO2 emissions by 60%."',
    },
    options: [
      {
        de: 'Selbstbeauftragte Studie (Interessenkonflikt)',
        en: 'Self-commissioned study (conflict of interest)',
      },
      {
        de: 'Unklarer Vergleichszeitraum für CO2-Reduktion',
        en: 'Unclear comparison period for CO2 reduction',
      },
      {
        de: 'Keine unabhängige Bestätigung für "Marktführer"-Claim',
        en: 'No independent verification for "market leader" claim',
      },
      {
        de: 'Sachlicher Ton ohne emotionale Sprache',
        en: 'Neutral tone without emotional language',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die selbstbeauftragte Studie ist der klarste Interessenkonflikt: Der Absender bezahlt die Untersuchung, deren Ergebnis ihn begünstigt — die 95% sind ohne offengelegte Methodik und unabhängige Kontrolle wenig wert. Die anderen Elemente sind schwächer: Der vage Vergleichszeitraum ist Framing (Rosinenpickerei beim Bezugsjahr), der unbelegte "Marktführer"-Claim eine ungeprüfte Behauptung, und der sachliche Ton ist überhaupt kein Warnsignal. Ethische Grenze: Auftragsforschung ist legitim, wenn Auftraggeber, Methodik und Stichprobe offengelegt werden; manipulativ wird sie, wenn der Interessenkonflikt verschleiert wird.',
      en: 'The self-commissioned study is the clearest conflict of interest: the sender pays for the research whose result favors them — the 95% figure is worth little without disclosed methodology and independent checking. The other elements are weaker: the vague comparison period is framing (cherry-picking the baseline year), the unsupported "market leader" claim is an unverified assertion, and the neutral tone is not a warning sign at all. Ethical line: commissioned research is legitimate when the commissioner, methodology and sample are disclosed; it becomes manipulative when the conflict of interest is hidden.',
    },
    points: 20,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'framing', 'anchoring'],
  },
  {
    id: 'sf-3',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welches Element trägt hier das größte rechtliche Risiko?',
      en: 'Which element here carries the greatest legal risk?',
    },
    scenario: {
      de: 'LinkedIn-Post von einem "Change Management Berater": "Ich habe gerade gehört, dass Firma XYZ massive Entlassungen plant. Ein Freund in der Personalabteilung hat mir das vertraulich bestätigt. Wer dort arbeitet, sollte sich schon mal umsehen. #XYZEntlassungen #InsiderWissen"',
      en: 'LinkedIn post from a "change management consultant": "I just heard that Company XYZ is planning massive layoffs. A friend in HR confirmed this to me confidentially. Anyone working there should start looking around. #XYZLayoffs #InsiderKnowledge"',
    },
    options: [
      {
        de: 'Unverifizierbarer "Insider" als Quelle',
        en: 'Unverifiable "insider" as a source',
      },
      {
        de: 'Hashtag-Kampagne deutet auf Agenda hin',
        en: 'Hashtag campaign suggests an agenda',
      },
      {
        de: 'Unbelegtes Gerücht kann den Aktienkurs bewegen (Marktmanipulation)',
        en: 'Unsubstantiated rumor can move the stock price (market manipulation)',
      },
      {
        de: 'Vertrauliche Information wird öffentlich geteilt',
        en: 'Confidential information being shared publicly',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Das unbelegte Entlassungsgerücht trägt das größte rechtliche Risiko: Kursrelevante, ungeprüfte Behauptungen öffentlich zu streuen, kann als Marktmanipulation gewertet werden — ein aufsichtsrechtlicher und strafrechtlicher Tatbestand, nicht nur ein Reputationsproblem. Die anderen Elemente wiegen weniger schwer: Die anonyme "Insider"-Quelle ist ein Glaubwürdigkeitsproblem, die Hashtags deuten auf eine Agenda, und das Teilen "vertraulicher" Informationen ist vor allem ethisch/vertragsrechtlich heikel. Ethische Grenze: Über Branchentrends zu spekulieren ist erlaubt; unbestätigte, kursrelevante Behauptungen über ein konkretes Unternehmen zu verbreiten, überschreitet die rechtliche Linie.',
      en: 'The unsubstantiated layoff rumor carries the greatest legal risk: publicly spreading price-relevant, unverified claims about a specific company can qualify as market manipulation — a regulatory and criminal matter, not merely a reputational one. The other elements weigh less: the anonymous "insider" source is a credibility problem, the hashtags suggest an agenda, and sharing "confidential" information is mainly an ethical/contractual concern. Ethical line: speculating about industry trends is fine; circulating unconfirmed, price-relevant claims about a named company crosses the legal line.',
    },
    points: 20,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'social_proof', 'digital_influence'],
  },
];
