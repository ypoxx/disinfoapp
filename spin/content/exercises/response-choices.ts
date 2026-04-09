import type { Exercise } from '../types';

export const responseChoices: Exercise[] = [
  {
    id: 'rc-1',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ihr Unternehmen wird in einem viralen Tweet falsch beschuldigt, Kundendaten verkauft zu haben. Der Tweet hat 15.000 Retweets. Was tun Sie?',
    },
    options: [
      { de: 'Schnell mit Fakten antworten, dabei sachlich bleiben und Belege liefern' },
      { de: 'Den Tweet ignorieren - Aufmerksamkeit verstärkt nur die Reichweite' },
      { de: 'Sofort rechtliche Schritte androhen' },
      { de: 'Einen emotionalen Gegenpost veröffentlichen' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei 15.000 Retweets ist Ignorieren keine Option mehr - die Falschinformation verbreitet sich bereits. Eine sachliche, faktenbasierte Antwort mit Belegen (z.B. Link zum Datenschutzbericht) ist die beste Strategie. Rechtliche Drohungen wirken defensiv und emotionale Gegenreaktionen eskalieren.',
    },
    points: 15,
    relatedTechniques: ['framing', 'emotional_appeal'],
  },
  {
    id: 'rc-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ein Faktencheck-Portal veröffentlicht eine fehlerhafte Analyse über Ihre Organisation. Was ist der beste erste Schritt?',
    },
    options: [
      { de: 'Das Portal direkt kontaktieren und eine Korrektur mit Belegen einfordern' },
      { de: 'Eine Gegendarstellung auf Social Media posten' },
      { de: 'Die eigenen Mitarbeiter mobilisieren, um negative Kommentare zu schreiben' },
      { de: 'Abwarten, ob jemand den Fehler bemerkt' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Seriöse Faktencheck-Portale haben Korrekturprozesse. Der direkte, professionelle Kontakt mit konkreten Belegen ist am effektivsten. Mitarbeiter zu mobilisieren wäre Astroturfing - genau das, was wir bekämpfen.',
    },
    points: 15,
    relatedTechniques: ['authority'],
  },
  {
    id: 'rc-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Sie entdecken, dass mehrere Social-Media-Accounts koordiniert Falschinformationen über Ihren Kunden verbreiten. Die Accounts sehen authentisch aus. Was ist Ihre Strategie?',
    },
    options: [
      { de: 'Beweise dokumentieren, bei der Plattform melden, parallel ein transparentes Statement vorbereiten' },
      { de: 'Jeden einzelnen Account öffentlich als Fake entlarven' },
      { de: 'Eigene koordinierte Gegenaccounts erstellen' },
      { de: 'Nur intern informieren und abwarten' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Professionelles Vorgehen: (1) Beweissicherung (Screenshots, Zeitstempel), (2) Plattform-Meldung, (3) Transparentes Statement über die Kampagne. Gegenaccounts zu erstellen wäre unethisch. Öffentliches Entlarven kann kontraproduktiv sein (Streisand-Effekt).',
    },
    points: 15,
    relatedTechniques: ['social_proof', 'digital_influence'],
  },
  {
    id: 'rc-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Deepfake-Video zeigt Ihren CEO bei einer angeblichen Bestechungsübergabe. Das Video verbreitet sich schnell. Was hat höchste Priorität?',
    },
    options: [
      { de: 'Sofort ein offizielles Dementi mit Alibibibeweis veröffentlichen und Forensik-Analyse beauftragen' },
      { de: 'Das Video auf allen Plattformen melden lassen' },
      { de: 'Eine Pressekonferenz für morgen einberufen' },
      { de: 'Die Polizei informieren und sonst nichts tun' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei Deepfakes zählt Geschwindigkeit. Jede Stunde ohne Dementi festigt die Falschdarstellung. Ein schnelles offizielles Statement mit konkretem Alibibibeweis (z.B. "CEO war zu diesem Zeitpunkt in Meeting X") plus forensische Analyse des Videos ist die beste Kombination.',
    },
    points: 15,
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'rc-5',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Ihre Organisation plant ein kontroverses Projekt. Sie wissen, dass Gegner bald eine Desinformationskampagne starten werden. Was tun Sie präventiv?',
    },
    options: [
      { de: 'Prebunking: Proaktiv transparente Informationen veröffentlichen, bevor die Kampagne startet' },
      { de: 'Abwarten und nur reagieren, wenn die Kampagne tatsächlich startet' },
      { de: 'Die Gegner vorsorglich diskreditieren' },
      { de: 'Das Projekt geheim halten, so lange es geht' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Prebunking (auch "Inoculation") ist die effektivste Prävention: Menschen werden widerstandsfähiger gegen Manipulation, wenn sie vorher über die zu erwartenden Techniken informiert werden. Die Forschung zeigt, dass proaktive Transparenz wirksamer ist als reaktive Korrekturen.',
    },
    points: 15,
    relatedTechniques: ['narrative_persuasion', 'framing'],
  },
];
