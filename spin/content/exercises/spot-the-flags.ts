import type { Exercise } from '../types';

export const spotTheFlags: Exercise[] = [
  {
    id: 'sf-1',
    type: 'spot-the-flag',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem Post? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this post? (Multiple choice)',
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
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind Überzeugungstechniken! Dieser Post kombiniert emotionale Manipulation, Verschwörungsnarrative, künstliche Dringlichkeit und fehlende Belege — ein Lehrbuchbeispiel für manipulative Kommunikation.',
      en: 'All four are persuasion techniques! This post combines emotional manipulation, conspiracy narratives, artificial urgency, and lack of evidence — a textbook example of manipulative communication.',
    },
    points: 20,
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
    relatedTechniques: ['authority', 'framing', 'anchoring'],
  },
  {
    id: 'sf-3',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem LinkedIn-Post? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this LinkedIn post? (Multiple choice)',
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
        de: 'Potenzielle Marktmanipulation (Aktienkurs)',
        en: 'Potential market manipulation (stock price)',
      },
      {
        de: 'Vertrauliche Information wird öffentlich geteilt',
        en: 'Confidential information being shared publicly',
      },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind problematisch: Anonyme "Insider"-Quellen sind nicht verifizierbar, gezielte Hashtags können koordinierte Kampagnen starten, unbelegte Entlassungsgerüchte können Aktienkurse beeinflussen (Marktmanipulation), und das Teilen "vertraulicher" Informationen ist ethisch fragwürdig.',
      en: 'All four are problematic: Anonymous "insider" sources are unverifiable, targeted hashtags can launch coordinated campaigns, unsubstantiated layoff rumors can influence stock prices (market manipulation), and sharing "confidential" information is ethically questionable.',
    },
    points: 20,
    relatedTechniques: ['authority', 'social_proof', 'digital_influence'],
  },
];
