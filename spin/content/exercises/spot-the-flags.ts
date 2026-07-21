import type { Exercise } from '../types';

export const spotTheFlags: Exercise[] = [
  {
    id: 'sf-1',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Elemente dieses Posts überschreiten die Grenze zur Manipulation? (Mehrfachauswahl)',
      en: 'Which elements of this post cross the line into manipulation? (Multiple choice)',
    },
    scenario: {
      de: '⚠️ SCHOCKIEREND: Geheime Dokumente BEWEISEN, dass die Regierung uns belogen hat! Die Mainstream-Medien WEIGERN sich, darüber zu berichten! TEILE diesen Post, bevor er ZENSIERT wird! 🚨',
      en: '⚠️ SHOCKING: Secret documents PROVE the government has been lying to us! The mainstream media REFUSE to report on it! SHARE this post before it gets CENSORED! 🚨',
    },
    options: [
      {
        de: 'Beweis-Behauptung ohne prüfbare Quelle („Dokumente BEWEISEN")',
        en: 'Proof claim without a checkable source ("documents PROVE")',
      },
      {
        de: 'Unbelegte Verweigerungs-Unterstellung an die Medien („WEIGERN sich")',
        en: 'Unsubstantiated refusal accusation against the media ("REFUSE")',
      },
      {
        de: 'Künstlicher Teilen-Druck über eine erfundene Frist („bevor er ZENSIERT wird")',
        en: 'Artificial pressure to share via an invented deadline ("before it gets CENSORED")',
      },
      {
        de: 'Großbuchstaben und Emojis zur Betonung',
        en: 'Capital letters and emojis for emphasis',
      },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Elemente überschreiten die Grenze: Die Beweis-Behauptung ohne prüfbare Quelle täuscht Belegbarkeit vor; die Verweigerungs-Unterstellung erfindet ein Motiv, das sich nicht prüfen lässt; die Zensur-Frist erzeugt Handlungsdruck aus dem Nichts. Auffällige Typografie (Option D) ist dagegen nur laut — aufmerksamkeitsstark, aber für sich genommen keine Täuschung; Betonung ist legitimes Handwerk. Erkennen und kontern: Prüf bei jedem Element, ob es eine nachprüfbare Tatsache transportiert oder nur Prüfung verhindert — genau das ist die Grenze.',
      en: 'Three elements cross the line: the proof claim without a checkable source fakes verifiability; the refusal accusation invents an unverifiable motive; the censorship deadline manufactures pressure out of nothing. Loud typography (option D), by contrast, is merely loud — attention-grabbing but not deceptive in itself; emphasis is legitimate craft. To recognise and counter it: for each element, check whether it carries a verifiable fact or merely blocks verification — that is exactly where the line runs.',
    },
    points: 20,
    primaryTechniqueId: 'emotional_appeal',
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'sf-2',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Pressemitteilung? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this press release? (Multiple choice)',
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
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Die ersten drei sind Überzeugungstechniken: Selbstbeauftragte Studien haben einen Interessenkonflikt, "vor 5 Jahren" ist vage (warum genau dieser Zeitraum?), und "Marktführer" wird ohne Definition oder Beleg behauptet. Der sachliche Ton (Option 4) ist keine Überzeugungstechnik.',
      en: 'The first three are persuasion techniques: Self-commissioned studies carry a conflict of interest, "5 years ago" is vague (why that specific period?), and "market leader" is claimed without definition or evidence. The neutral tone (option 4) is not a persuasion technique.',
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
      de: 'Welche Elemente dieses LinkedIn-Posts überschreiten die professionelle Grenze? (Mehrfachauswahl)',
      en: 'Which elements of this LinkedIn post cross the professional line? (Multiple choice)',
    },
    scenario: {
      de: 'LinkedIn-Post von einem "Change Management Berater": "Ich habe gerade gehört, dass Firma XYZ massive Entlassungen plant. Ein Freund in der Personalabteilung hat mir das vertraulich bestätigt. Wer dort arbeitet, sollte sich schon mal umsehen. #XYZEntlassungen #InsiderWissen"',
      en: 'LinkedIn post from a "change management consultant": "I just heard that Company XYZ is planning massive layoffs. A friend in HR confirmed this to me confidentially. Anyone working there should start looking around. #XYZLayoffs #InsiderKnowledge"',
    },
    options: [
      {
        de: 'Gerücht als Tatsache verbreiten — gestützt nur auf eine anonyme Quelle',
        en: 'Spreading a rumour as fact — backed only by an anonymous source',
      },
      {
        de: 'Als vertraulich markierte Information öffentlich machen',
        en: 'Publishing information that was shared in confidence',
      },
      {
        de: 'Handlungsempfehlung an Betroffene auf reiner Gerüchtebasis',
        en: 'Advising affected people to act on nothing but the rumour',
      },
      {
        de: 'Hashtags nutzen, damit der Post gefunden wird',
        en: 'Using hashtags so the post can be found',
      },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Elemente überschreiten die Grenze: Ein unbelegtes Gerücht als bestätigte Tatsache zu verbreiten, kann Kurse und Karrieren bewegen (bei börsennotierten Firmen bis zur Marktmanipulation); vertraulich Anvertrautes öffentlich zu machen bricht die Quelle; und eine Handlungsempfehlung („umsehen") verstärkt den Schaden auf reiner Gerüchtebasis. Hashtags (Option D) sind dagegen normale Auffindbarkeits-Praxis — problematisch ist hier der Inhalt, nicht das Werkzeug. Erkennen und kontern: Frag bei solchen Posts, was davon nachprüfbar ist und wem die Verbreitung nützt — und als Kommunikationsprofi der betroffenen Firma reagierst du auf das Gerücht, nie auf den Boten.',
      en: 'Three elements cross the line: spreading an unverified rumour as confirmed fact can move share prices and careers (up to market manipulation for listed companies); publishing what was entrusted in confidence burns the source; and advising people to act ("start looking around") amplifies harm on nothing but the rumour. Hashtags (option D) are ordinary discoverability practice — the problem here is the content, not the tool. To recognise and counter it: ask what in such posts is verifiable and who benefits from the spread — and as the affected company\'s communications professional, you respond to the rumour, never to the messenger.',
    },
    points: 20,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'social_proof', 'digital_influence'],
  },
];
