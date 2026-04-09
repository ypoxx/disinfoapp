import type { Technique } from '../types';

export const aiPersuasion: Technique =   {
    id: 'ai_persuasion',
    name: {
      de: 'KI-gestützte Persuasion',
      en: 'AI-Powered Persuasion',
      hu: 'MI-alapú meggyőzés',
      pl: 'Perswazja wspomagana AI',
      sk: 'Presviedčanie pomocou AI',
      hr: 'AI-potpomognuta persuazija',
      el: 'Πειθώ με τεχνητή νοημοσύνη',
      mk: 'Убедување со помош на AI',
      cnr: 'AI-potpomognuta persuazija',
    },
    description: {
      de: 'Einsatz von künstlicher Intelligenz zur personalisierten, adaptiven und skalierten Persuasion durch Verhaltensvorhersage und Echtzeit-Optimierung.',
      en: 'Use of artificial intelligence for personalized, adaptive, and scaled persuasion through behavior prediction and real-time optimization.',
      hu: 'Mesterséges intelligencia alkalmazása személyre szabott, adaptív és skálázott meggyőzésre viselkedés-előrejelzés és valós idejű optimalizálás révén.',
      pl: 'Wykorzystanie sztucznej inteligencji do spersonalizowanej, adaptacyjnej i skalowanej perswazji poprzez przewidywanie zachowań i optymalizację w czasie rzeczywistym.',
      sk: 'Použitie umelej inteligencie na personalizované, adaptívne a škálované presviedčanie prostredníctvom predikcie správania a optimalizácie v reálnom čase.',
      hr: 'Korištenje umjetne inteligencije za personaliziranu, adaptivnu i skaliranu persuaziju kroz predviđanje ponašanja i optimizaciju u stvarnom vremenu.',
      el: 'Χρήση τεχνητής νοημοσύνης για εξατομικευμένη, προσαρμοστική και κλιμακωτή πειθώ μέσω πρόβλεψης συμπεριφοράς και βελτιστοποίησης σε πραγματικό χρόνο.',
      mk: 'Употреба на вештачка интелигенција за персонализирано, адаптивно и скалирано убедување преку предвидување на однесување и оптимизација во реално време.',
      cnr: 'Korišćenje vještačke inteligencije za personalizovanu, adaptivnu i skaliranu persuaziju kroz predviđanje ponašanja i optimizaciju u realnom vremenu.',
    },
    category: 'digital_influence',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Chatbots, die Gesprächsstil an Nutzer anpassen',
      'Algorithmen, die perfekte Timing für Benachrichtigungen finden',
      'KI-generierte personalisierte Inhalte',
      'Predictive Analytics für Verhaltensänderung',
    ],
    evidence: {
      studies: [
        'Matz et al. (2017) - Algorithmic Persuasion',
        'Yeomans et al. (2019) - Conversational Receptiveness',
        'Susser et al. (2019) - Online Manipulation',
      ],
      findings: 'KI kann menschliche Persuasionsexperten übertreffen. Skalierbarkeit und Personalisierung erhöhen Wirksamkeit dramatisch.',
      uncertainty: {
        confidence: 0.76,
        sampleSize: '15+ Studien, N>20,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['microtargeting', 'digital_influence', 'nudging'],
    warningNeurons: [
      'Unnatürlich passende Empfehlungen',
      'Perfektes Timing von Botschaften',
      'Adaptive Gesprächsführung',
      'Kontinuierliche Verhaltensoptimierung',
    ],
    taxonomyGroups: ['digital_techniques', 'ai_manipulation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Artificial_neural_network.svg/640px-Artificial_neural_network.svg.png',
      alt: 'Künstliches neuronales Netzwerk - Grundlage KI-gestützter Persuasion',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Artificial_neural_network.svg',
      context: 'KI ermöglicht personalisierte, adaptive und skalierte Persuasion in Echtzeit',
    },
  };
