import type { Exercise } from '../types';

export const responseChoices: Exercise[] = [
  {
    id: 'rc-1',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Dein Unternehmen wird in einem viralen Tweet falsch beschuldigt, Kundendaten verkauft zu haben. Der Tweet hat 15.000 Retweets. Was tust du?',
      en: 'Your company is falsely accused in a viral tweet of selling customer data. The tweet has 15,000 retweets. What do you do?',
    },
    options: [
      {
        de: 'Schnell mit Fakten antworten, dabei sachlich bleiben und Belege liefern',
        en: 'Respond quickly with facts, stay professional, and provide evidence',
      },
      {
        de: 'Den Tweet ignorieren - Aufmerksamkeit verstärkt nur die Reichweite',
        en: 'Ignore the tweet — attention only amplifies its reach',
      },
      {
        de: 'Sofort rechtliche Schritte androhen',
        en: 'Immediately threaten legal action',
      },
      {
        de: 'Einen emotionalen Gegenpost veröffentlichen',
        en: 'Publish an emotional counter-post',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei 15.000 Retweets ist Ignorieren keine Option mehr — die Falschinformation verbreitet sich bereits. Eine sachliche, faktenbasierte Antwort mit Belegen (z.B. Link zum Datenschutzbericht) ist die beste Strategie. Rechtliche Drohungen wirken defensiv und emotionale Gegenreaktionen eskalieren.',
      en: 'At 15,000 retweets, ignoring is no longer an option — the false information is already spreading. A calm, fact-based response with evidence (e.g., a link to your data protection report) is the best strategy. Legal threats come across as defensive, and emotional counter-reactions only escalate.',
    },
    points: 15,
    relatedTechniques: ['framing', 'emotional_appeal'],
  },
  {
    id: 'rc-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ein Faktencheck-Portal veröffentlicht eine fehlerhafte Analyse über deine Organisation. Was ist der beste erste Schritt?',
      en: 'A fact-checking outlet publishes a flawed analysis about your organization. What is the best first step?',
    },
    options: [
      {
        de: 'Das Portal direkt kontaktieren und eine Korrektur mit Belegen einfordern',
        en: 'Contact the outlet directly and request a correction with supporting evidence',
      },
      {
        de: 'Eine Gegendarstellung auf Social Media posten',
        en: 'Post a rebuttal on social media',
      },
      {
        de: 'Die eigenen Mitarbeiter mobilisieren, um negative Kommentare zu schreiben',
        en: 'Mobilize your employees to write negative comments',
      },
      {
        de: 'Abwarten, ob jemand den Fehler bemerkt',
        en: 'Wait and see if someone notices the error',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Seriöse Faktencheck-Portale haben Korrekturprozesse. Der direkte, professionelle Kontakt mit konkreten Belegen ist am effektivsten. Mitarbeiter zu mobilisieren wäre Astroturfing — eine unethische Kommunikationstechnik.',
      en: 'Reputable fact-checking outlets have correction processes. Direct, professional contact with concrete evidence is the most effective approach. Mobilizing employees would be astroturfing — an unethical communication technique.',
    },
    points: 15,
    relatedTechniques: ['authority'],
  },
  {
    id: 'rc-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du entdeckst, dass mehrere Social-Media-Accounts koordiniert Falschinformationen über deinen Kunden verbreiten. Die Accounts sehen authentisch aus. Was ist deine Strategie?',
      en: 'You discover that multiple social media accounts are spreading false information about your client in a coordinated manner. The accounts look authentic. What is your strategy?',
    },
    options: [
      {
        de: 'Beweise dokumentieren, bei der Plattform melden, parallel ein transparentes Statement vorbereiten',
        en: 'Document evidence, report to the platform, and prepare a transparent statement in parallel',
      },
      {
        de: 'Jeden einzelnen Account öffentlich als Fake entlarven',
        en: 'Publicly expose each individual account as fake',
      },
      {
        de: 'Eigene koordinierte Gegenaccounts erstellen',
        en: 'Create your own coordinated counter-accounts',
      },
      {
        de: 'Nur intern informieren und abwarten',
        en: 'Only inform internally and wait',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Professionelles Vorgehen: (1) Beweissicherung (Screenshots, Zeitstempel), (2) Plattform-Meldung, (3) Transparentes Statement über die Kampagne. Gegenaccounts zu erstellen wäre unethisch. Öffentliches Entlarven kann kontraproduktiv sein (Streisand-Effekt).',
      en: 'Professional approach: (1) Secure evidence (screenshots, timestamps), (2) report to the platform, (3) issue a transparent statement about the campaign. Creating counter-accounts would be unethical. Public exposure can backfire (Streisand effect).',
    },
    points: 15,
    relatedTechniques: ['social_proof', 'digital_influence'],
  },
  {
    id: 'rc-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Deepfake-Video zeigt deinen CEO bei einer angeblichen Bestechungsübergabe. Das Video verbreitet sich schnell. Was hat höchste Priorität?',
      en: 'A deepfake video shows your CEO in an alleged bribery exchange. The video is spreading rapidly. What is the highest priority?',
    },
    options: [
      {
        de: 'Sofort ein offizielles Dementi mit Alibi-Beweis veröffentlichen und Forensik-Analyse beauftragen',
        en: 'Immediately issue an official denial with alibi evidence and commission a forensic analysis',
      },
      {
        de: 'Das Video auf allen Plattformen melden lassen',
        en: 'Report the video on all platforms',
      },
      {
        de: 'Eine Pressekonferenz für morgen einberufen',
        en: 'Schedule a press conference for tomorrow',
      },
      {
        de: 'Die Polizei informieren und sonst nichts tun',
        en: 'Inform the police and do nothing else',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei Deepfakes zählt Geschwindigkeit. Jede Stunde ohne Dementi festigt die Falschdarstellung. Ein schnelles offizielles Statement mit konkretem Alibi-Beweis (z.B. "CEO war zu diesem Zeitpunkt in Meeting X") plus forensische Analyse des Videos ist die beste Kombination.',
      en: 'With deepfakes, speed is critical. Every hour without a denial reinforces the false narrative. A quick official statement with concrete alibi evidence (e.g., "The CEO was in meeting X at that time") combined with a forensic analysis of the video is the strongest approach.',
    },
    points: 15,
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'rc-5',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Deine Organisation plant ein kontroverses Projekt. Du weißt, dass Gegner bald eine Negativkampagne starten werden. Was tust du präventiv?',
      en: 'Your organization is planning a controversial project. You know that opponents will soon launch a negative campaign. What do you do preemptively?',
    },
    options: [
      {
        de: 'Prebunking: Proaktiv transparente Informationen veröffentlichen, bevor die Kampagne startet',
        en: 'Prebunking: Proactively publish transparent information before the campaign launches',
      },
      {
        de: 'Abwarten und nur reagieren, wenn die Kampagne tatsächlich startet',
        en: 'Wait and only respond once the campaign actually launches',
      },
      {
        de: 'Die Gegner vorsorglich diskreditieren',
        en: 'Preemptively discredit the opponents',
      },
      {
        de: 'Das Projekt geheim halten, so lange es geht',
        en: 'Keep the project secret for as long as possible',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Prebunking (auch "Inoculation") ist die effektivste Prävention: Menschen werden widerstandsfähiger gegen Manipulation, wenn sie vorher über die zu erwartenden Techniken informiert werden. Die Forschung zeigt, dass proaktive Transparenz wirksamer ist als reaktive Korrekturen.',
      en: 'Prebunking (also known as "inoculation") is the most effective prevention: People become more resilient to manipulation when they are informed about the expected techniques beforehand. Research shows that proactive transparency is more effective than reactive corrections.',
    },
    points: 15,
    relatedTechniques: ['narrative_persuasion', 'framing'],
  },
];
