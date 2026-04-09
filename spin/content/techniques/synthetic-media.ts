import type { Technique } from '../types';

export const syntheticMedia: Technique =   {
    id: 'synthetic_media',
    name: {
      de: 'Synthetische Medien',
      en: 'Synthetic Media',
      hu: 'Szintetikus média',
      pl: 'Media syntetyczne',
      sk: 'Syntetické médiá',
      hr: 'Sintetički mediji',
      el: 'Συνθετικά μέσα',
      mk: 'Синтетички медиуми',
      cnr: 'Sintetički mediji',
    },
    description: {
      de: 'KI-generierte oder manipulierte Medieninhalte (Deepfakes, KI-Bilder, gefälschte Audio) zur Täuschung oder Beeinflussung.',
      en: 'AI-generated or manipulated media content (deepfakes, AI images, fake audio) for deception or influence.',
      hu: 'Mesterséges intelligenciával generált vagy manipulált médiatartalmak (deepfake-ek, MI-képek, hamis hang) megtévesztésre vagy befolyásolásra.',
      pl: 'Treści medialne generowane przez AI lub manipulowane (deepfakes, obrazy AI, fałszywe audio) w celu oszustwa lub wpływu.',
      sk: 'Mediálny obsah generovaný alebo manipulovaný AI (deepfakes, AI obrázky, falošný zvuk) na klamanie alebo ovplyvňovanie.',
      hr: 'Medijski sadržaj generiran ili manipuliran umjetnom inteligencijom (deepfakes, AI slike, lažni audio) za obmanu ili utjecaj.',
      el: 'Περιεχόμενο μέσων που δημιουργείται ή χειραγωγείται από AI (deepfakes, εικόνες AI, ψεύτικος ήχος) για εξαπάτηση ή επιρροή.',
      mk: 'Медиумска содржина генерирана или манипулирана со вештачка интелигенција (deepfakes, AI слики, лажен аудио) за измама или влијание.',
      cnr: 'Medijski sadržaj generisan ili manipulisan vještačkom inteligencijom (deepfakes, AI slike, lažni audio) za obmanu ili uticaj.',
    },
    category: 'digital_influence',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Deepfake Videos von Politikern',
      'KI-generierte Bilder von nicht-existenten Ereignissen',
      'Voice-Cloning für Betrug',
      'Synthetische Nachrichtenartikel',
    ],
    evidence: {
      studies: [
        'Chesney & Citron (2019) - Deep Fakes',
        'Vaccari & Chadwick (2020) - Deepfakes and Democracy',
        'Westerlund (2019) - Emergence of Deepfakes',
      ],
      findings: 'Synthetische Medien sind zunehmend überzeugend und schwer zu erkennen. Potenzial für massiven Schaden ist hoch.',
      uncertainty: {
        confidence: 0.78,
        sampleSize: '20+ Studien, N>3,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['visual_manipulation', 'digital_influence', 'emotional_appeal'],
    warningNeurons: [
      'Unnatürliche Bewegungen oder Übergänge in Videos',
      'Inkonsistente Beleuchtung oder Schatten',
      'Fehlende Verifikation von dramatischen Claims',
      'Zu perfekte oder generische Gesichter in Bildern',
    ],
    taxonomyGroups: ['digital_techniques', 'ai_manipulation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Deepfake_example.gif/480px-Deepfake_example.gif',
      alt: 'Deepfake Beispiel - KI-generierte Gesichtsmanipulation',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Deepfake_example.gif',
      context: 'Deepfakes und synthetische Medien erschweren die Unterscheidung von Wahrheit und Fälschung',
    },
  };
