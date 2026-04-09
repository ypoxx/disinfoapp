import type { Exercise } from '../types';

export const spotTheFlags: Exercise[] = [
  {
    id: 'sf-1',
    type: 'spot-the-flag',
    difficulty: 'beginner',
    question: {
      de: 'Welche Red Flags hat dieser Post? (Mehrfachauswahl)',
    },
    scenario: {
      de: '⚠️ SCHOCKIEREND: Geheime Dokumente BEWEISEN, dass die Regierung uns belogen hat! Die Mainstream-Medien WEIGERN sich, darüber zu berichten! TEILE diesen Post, bevor er ZENSIERT wird! 🚨',
    },
    options: [
      { de: 'Emotionale/reißerische Sprache (SCHOCKIEREND, BEWEISEN)' },
      { de: 'Anti-Medien-Narrativ ("Mainstream-Medien weigern sich")' },
      { de: 'Dringlichkeitsappell ("bevor er zensiert wird")' },
      { de: 'Keine konkreten Quellenangaben' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind Red Flags! Dieser Post kombiniert emotionale Manipulation, Verschwörungsnarrative, künstliche Dringlichkeit und fehlende Belege - ein Lehrbuchbeispiel für Desinformation.',
    },
    points: 20,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'sf-2',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Red Flags hat diese Pressemitteilung? (Mehrfachauswahl)',
    },
    scenario: {
      de: 'Pressemitteilung: "CleanTech Solutions GmbH ist Marktführer bei grüner Technologie. Laut einer von uns beauftragten Studie sind 95% der Kunden zufrieden. Im Vergleich zu vor 5 Jahren haben wir den CO2-Ausstoß um 60% reduziert."',
    },
    options: [
      { de: 'Selbstbeauftragte Studie (Interessenkonflikt)' },
      { de: 'Unklarer Vergleichszeitraum für CO2-Reduktion' },
      { de: 'Keine unabhängige Bestätigung für "Marktführer"-Claim' },
      { de: 'Sachlicher Ton ohne emotionale Sprache' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Die ersten drei sind Red Flags: Selbstbeauftragte Studien haben einen Interessenkonflikt, "vor 5 Jahren" ist vage (warum genau dieser Zeitraum?), und "Marktführer" wird ohne Definition oder Beleg behauptet. Der sachliche Ton (Option 4) ist kein Red Flag.',
    },
    points: 20,
    relatedTechniques: ['authority', 'framing', 'anchoring'],
  },
  {
    id: 'sf-3',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Red Flags hat dieser LinkedIn-Post? (Mehrfachauswahl)',
    },
    scenario: {
      de: 'LinkedIn-Post von einem "Change Management Berater": "Ich habe gerade gehört, dass Firma XYZ massive Entlassungen plant. Ein Freund in der Personalabteilung hat mir das vertraulich bestätigt. Wer dort arbeitet, sollte sich schon mal umsehen. #XYZEntlassungen #InsiderWissen"',
    },
    options: [
      { de: 'Unverifizierbarer "Insider" als Quelle' },
      { de: 'Hashtag-Kampagne deutet auf Agenda hin' },
      { de: 'Potenzielle Marktmanipulation (Aktienkurs)' },
      { de: 'Vertrauliche Information wird öffentlich geteilt' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind problematisch: Anonyme "Insider"-Quellen sind nicht verifizierbar, gezielte Hashtags können koordinierte Kampagnen starten, unbelegte Entlassungsgerüchte können Aktienkurse beeinflussen (Marktmanipulation), und das Teilen "vertraulicher" Informationen ist ethisch fragwürdig.',
    },
    points: 20,
    relatedTechniques: ['authority', 'social_proof', 'digital_influence'],
  },
];
