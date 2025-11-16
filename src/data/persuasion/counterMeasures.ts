import { CounterMeasure } from '@/types/persuasion';

/**
 * Counter-measures against persuasion techniques
 * Evidence-based strategies to protect against manipulation
 */
export const counterMeasures: CounterMeasure[] = [
  {
    id: 'awareness_training',
    name: {
      de: 'Bewusstseins-Training',
      en: 'Awareness Training',
    },
    description: {
      de: 'Lernen, Persuasions-Techniken zu erkennen und zu benennen. Wissen über Manipulation ist der erste Schritt zur Immunisierung.',
      en: 'Learning to recognize and name persuasion techniques. Knowledge about manipulation is the first step to immunization.',
    },
    type: 'awareness',
    implementation: [
      'Lernmodule über verschiedene Techniken absolvieren',
      'Reale Beispiele analysieren und Techniken identifizieren',
      'Regelmäßige Auffrischung des Wissens',
      'Übungen zur Mustererkennung',
    ],
    counters: [
      'framing',
      'priming',
      'anchoring',
      'social_proof',
      'authority',
      'ad_hominem',
      'straw_man',
      'false_dichotomy',
    ],
    effectiveness: [
      { techniqueId: 'framing', effectiveness: 'moderate', evidence: ['Inoculation Theory'] },
      { techniqueId: 'priming', effectiveness: 'low', evidence: ['Automaticity'] },
      { techniqueId: 'anchoring', effectiveness: 'moderate', evidence: ['Wilson et al. 1996'] },
      { techniqueId: 'social_proof', effectiveness: 'high', evidence: ['Cialdini 2001'] },
      { techniqueId: 'authority', effectiveness: 'high', evidence: ['Milgram follow-ups'] },
      { techniqueId: 'ad_hominem', effectiveness: 'very_high', evidence: ['Critical Thinking'] },
      { techniqueId: 'straw_man', effectiveness: 'very_high', evidence: ['Argument Analysis'] },
      { techniqueId: 'false_dichotomy', effectiveness: 'high', evidence: ['Logic Training'] },
    ],
    evidence: {
      studies: [
        'McGuire (1961) - Inoculation Theory',
        'Roozenbeek & van der Linden (2019) - Bad News Game',
        'Lewandowsky & van der Linden (2021) - Inoculation',
      ],
      findings:
        'Bewusstseins-Training reduziert Anfälligkeit signifikant. Effekte halten über Zeit an bei regelmäßiger Auffrischung.',
      uncertainty: {
        confidence: 0.82,
        sampleSize: '40+ Studien, N>8,000',
        evidenceQuality: 'high',
      },
    },
    difficulty: 'beginner',
  },
  {
    id: 'critical_thinking',
    name: {
      de: 'Kritisches Denken',
      en: 'Critical Thinking',
    },
    description: {
      de: 'Systematisches Hinterfragen von Behauptungen, Quellen und Argumenten. Logische Analyse statt emotionaler Reaktion.',
      en: 'Systematic questioning of claims, sources, and arguments. Logical analysis instead of emotional reaction.',
    },
    type: 'cognitive',
    implementation: [
      'Wer sagt das? (Quelle prüfen)',
      'Was sind die Beweise? (Evidenz evaluieren)',
      'Welche Alternativen gibt es? (Optionen erkunden)',
      'Was wird verschwiegen? (Missing Information)',
      'Cui bono? (Wem nützt es?)',
    ],
    counters: [
      'framing',
      'ad_hominem',
      'false_dichotomy',
      'straw_man',
      'equivocation',
      'emotional_appeal',
      'narrative_persuasion',
    ],
    effectiveness: [
      { techniqueId: 'framing', effectiveness: 'high', evidence: ['Reframing Studies'] },
      { techniqueId: 'ad_hominem', effectiveness: 'very_high', evidence: ['Argument Evaluation'] },
      {
        techniqueId: 'false_dichotomy',
        effectiveness: 'very_high',
        evidence: ['Option Generation'],
      },
      { techniqueId: 'straw_man', effectiveness: 'very_high', evidence: ['Steelman Principle'] },
      { techniqueId: 'equivocation', effectiveness: 'high', evidence: ['Definition Clarification'] },
      {
        techniqueId: 'emotional_appeal',
        effectiveness: 'moderate',
        evidence: ['Emotion Regulation'],
      },
      {
        techniqueId: 'narrative_persuasion',
        effectiveness: 'moderate',
        evidence: ['Counter-Arguing'],
      },
    ],
    evidence: {
      studies: [
        'Facione (1990) - Critical Thinking Assessment',
        'Halpern (2014) - Critical Thinking Across Curriculum',
        'Ennis (2015) - Critical Thinking Taxonomy',
      ],
      findings:
        'Kritisches Denken ist effektiv gegen viele Techniken, erfordert aber kognitive Anstrengung und Zeit.',
      uncertainty: {
        confidence: 0.87,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'high',
      },
    },
    difficulty: 'intermediate',
  },
  {
    id: 'emotion_regulation',
    name: {
      de: 'Emotions-Regulation',
      en: 'Emotion Regulation',
    },
    description: {
      de: 'Bewusste Kontrolle emotionaler Reaktionen. Pause zwischen Emotion und Handlung einlegen.',
      en: 'Conscious control of emotional reactions. Creating a pause between emotion and action.',
    },
    type: 'emotional',
    implementation: [
      'Starke Emotionen erkennen und benennen',
      '10-Sekunden-Pause vor Reaktion',
      'Tief durchatmen und Perspektive wechseln',
      '"Warum will jemand, dass ich jetzt SO fühle?" fragen',
      'Emotionen als Signal, nicht als Handlungsanweisung sehen',
    ],
    counters: [
      'emotional_appeal',
      'scarcity',
      'reactance_theory',
      'narrative_persuasion',
      'visual_manipulation',
    ],
    effectiveness: [
      {
        techniqueId: 'emotional_appeal',
        effectiveness: 'high',
        evidence: ['Gross 1998 - Emotion Regulation'],
      },
      { techniqueId: 'scarcity', effectiveness: 'high', evidence: ['FOMO Reduction'] },
      { techniqueId: 'reactance_theory', effectiveness: 'moderate', evidence: ['Self-Control'] },
      {
        techniqueId: 'narrative_persuasion',
        effectiveness: 'moderate',
        evidence: ['Transportation Reduction'],
      },
      {
        techniqueId: 'visual_manipulation',
        effectiveness: 'moderate',
        evidence: ['Affective Response'],
      },
    ],
    evidence: {
      studies: [
        'Gross (1998) - Emotion Regulation Strategies',
        'Richards & Gross (2000) - Reappraisal Benefits',
        'Ochsner & Gross (2005) - Neural Bases',
      ],
      findings:
        'Emotions-Regulation reduziert impulsive Entscheidungen. Reappraisal ist effektiver als Suppression.',
      uncertainty: {
        confidence: 0.85,
        sampleSize: '80+ Studien, N>12,000',
        evidenceQuality: 'high',
      },
    },
    difficulty: 'intermediate',
  },
  {
    id: 'fact_checking',
    name: {
      de: 'Faktencheck',
      en: 'Fact Checking',
    },
    description: {
      de: 'Überprüfung von Behauptungen durch unabhängige, vertrauenswürdige Quellen. Evidenz vor Meinung.',
      en: 'Verification of claims through independent, trustworthy sources. Evidence before opinion.',
    },
    type: 'verification',
    implementation: [
      'Behauptung identifizieren',
      'Multiple unabhängige Quellen konsultieren',
      'Primärquellen suchen (Original-Studien, Daten)',
      'Fact-Checking-Seiten nutzen (Snopes, Correctiv, etc.)',
      'Reverse Image Search bei Bildern',
    ],
    counters: [
      'illusory_truth_effect',
      'repetition',
      'synthetic_media',
      'visual_manipulation',
      'narrative_persuasion',
      'authority',
    ],
    effectiveness: [
      {
        techniqueId: 'illusory_truth_effect',
        effectiveness: 'very_high',
        evidence: ['Fact-Check Efficacy'],
      },
      { techniqueId: 'repetition', effectiveness: 'very_high', evidence: ['Truth Assessment'] },
      {
        techniqueId: 'synthetic_media',
        effectiveness: 'high',
        evidence: ['Media Verification'],
      },
      {
        techniqueId: 'visual_manipulation',
        effectiveness: 'high',
        evidence: ['Image Verification'],
      },
      {
        techniqueId: 'narrative_persuasion',
        effectiveness: 'moderate',
        evidence: ['Anecdote vs. Data'],
      },
      { techniqueId: 'authority', effectiveness: 'high', evidence: ['Source Checking'] },
    ],
    evidence: {
      studies: [
        'Nyhan & Reifler (2010) - Fact-Checking Effects',
        'Walter & Murphy (2018) - Fact-Check Meta-Analysis',
        'Pennycook et al. (2020) - Accuracy Nudges',
      ],
      findings:
        'Faktencheck ist effektiv, aber Backfire-Effekte möglich bei starker Voreingenommenheit.',
      uncertainty: {
        confidence: 0.79,
        sampleSize: '50+ Studien, N>10,000',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'intermediate',
  },
  {
    id: 'delay_response',
    name: {
      de: 'Entscheidungs-Verzögerung',
      en: 'Delay Response',
    },
    description: {
      de: 'Zeitdruck widerstehen und wichtige Entscheidungen aufschieben. "Ich schlafe eine Nacht darüber."',
      en: 'Resisting time pressure and postponing important decisions. "I\'ll sleep on it."',
    },
    type: 'behavioral',
    implementation: [
      '24-Stunden-Regel bei wichtigen Entscheidungen',
      'Künstliche Deadlines ignorieren',
      '"Ich muss mit X sprechen" als Ausrede nutzen',
      'Aus der Situation physisch entfernen',
      'Zeitdruck als Red Flag erkennen',
    ],
    counters: ['scarcity', 'reactance_theory', 'dark_patterns', 'emotional_appeal', 'reciprocity'],
    effectiveness: [
      { techniqueId: 'scarcity', effectiveness: 'very_high', evidence: ['Urgency Resistance'] },
      {
        techniqueId: 'reactance_theory',
        effectiveness: 'high',
        evidence: ['Cooling-Off Period'],
      },
      { techniqueId: 'dark_patterns', effectiveness: 'very_high', evidence: ['Impulse Control'] },
      {
        techniqueId: 'emotional_appeal',
        effectiveness: 'high',
        evidence: ['Emotional Cooling'],
      },
      { techniqueId: 'reciprocity', effectiveness: 'moderate', evidence: ['Time Distance'] },
    ],
    evidence: {
      studies: [
        'Strack & Deutsch (2004) - Reflective-Impulsive Model',
        'Kahneman (2011) - Thinking, Fast and Slow',
        'Baumeister et al. (2007) - Self-Regulation',
      ],
      findings: 'Zeitverzögerung reduziert impulsive Entscheidungen erheblich. System 2 braucht Zeit.',
      uncertainty: {
        confidence: 0.90,
        sampleSize: '70+ Studien, N>11,000',
        evidenceQuality: 'high',
      },
    },
    difficulty: 'beginner',
  },
  {
    id: 'prebunking',
    name: {
      de: 'Prebunking (Vorbeugung)',
      en: 'Prebunking',
    },
    description: {
      de: 'Vorherige Warnung vor Manipulationstechniken immunisiert gegen diese. Psychologische Impfung.',
      en: 'Prior warning about manipulation techniques immunizes against them. Psychological inoculation.',
    },
    type: 'preventive',
    implementation: [
      'Lernmodule BEVOR Manipulation auftritt',
      'Simulierte Beispiele durchspielen',
      'Schwächere Versionen der Argumente kennenlernen',
      'Gegenargumente entwickeln',
      'Regelmäßige Auffrischung',
    ],
    counters: [
      'framing',
      'priming',
      'social_proof',
      'digital_influence',
      'microtargeting',
      'ai_persuasion',
    ],
    effectiveness: [
      { techniqueId: 'framing', effectiveness: 'high', evidence: ['Inoculation Studies'] },
      { techniqueId: 'priming', effectiveness: 'moderate', evidence: ['Awareness Effects'] },
      { techniqueId: 'social_proof', effectiveness: 'high', evidence: ['Forewarning'] },
      {
        techniqueId: 'digital_influence',
        effectiveness: 'high',
        evidence: ['Bot Recognition Training'],
      },
      { techniqueId: 'microtargeting', effectiveness: 'moderate', evidence: ['Privacy Awareness'] },
      { techniqueId: 'ai_persuasion', effectiveness: 'moderate', evidence: ['AI Literacy'] },
    ],
    evidence: {
      studies: [
        'McGuire (1964) - Inoculation Theory',
        'Roozenbeek et al. (2020) - Prebunking Interventions',
        'Lewandowsky et al. (2012) - Misinformation Handbook',
      ],
      findings:
        'Prebunking ist effektiver als Debunking. Präventive Maßnahmen haben stärkere Langzeiteffekte.',
      uncertainty: {
        confidence: 0.86,
        sampleSize: '45+ Studien, N>9,000',
        evidenceQuality: 'high',
      },
    },
    difficulty: 'beginner',
  },
  {
    id: 'transparency_requirements',
    name: {
      de: 'Transparenz-Anforderungen',
      en: 'Transparency Requirements',
    },
    description: {
      de: 'Forderung nach Offenlegung von Interessen, Methoden und Datenquellen. Transparenz schafft Accountability.',
      en: 'Demanding disclosure of interests, methods, and data sources. Transparency creates accountability.',
    },
    type: 'structural',
    implementation: [
      'Nach Finanzierung und Interessenkonflikten fragen',
      'Methodentransparenz einfordern',
      'Rohdaten und Primärquellen verlangen',
      'Algorithmen-Transparenz fordern',
      'Werbekennzeichnung prüfen',
    ],
    counters: [
      'authority',
      'microtargeting',
      'digital_influence',
      'dark_patterns',
      'ai_persuasion',
      'synthetic_media',
    ],
    effectiveness: [
      { techniqueId: 'authority', effectiveness: 'high', evidence: ['COI Disclosure'] },
      { techniqueId: 'microtargeting', effectiveness: 'high', evidence: ['GDPR Effects'] },
      { techniqueId: 'digital_influence', effectiveness: 'moderate', evidence: ['Bot Labeling'] },
      { techniqueId: 'dark_patterns', effectiveness: 'high', evidence: ['Design Transparency'] },
      {
        techniqueId: 'ai_persuasion',
        effectiveness: 'moderate',
        evidence: ['Algorithm Disclosure'],
      },
      { techniqueId: 'synthetic_media', effectiveness: 'high', evidence: ['Watermarking'] },
    ],
    evidence: {
      studies: [
        'Loewenstein et al. (2011) - Disclosure Effects',
        'Cain et al. (2005) - Transparency Limits',
        'Kim et al. (2019) - Algorithm Transparency',
      ],
      findings:
        'Transparenz hilft, aber ist nicht ausreichend. Kann paradoxerweise Vertrauen erhöhen ("Moral Licensing").',
      uncertainty: {
        confidence: 0.71,
        sampleSize: '35+ Studien, N>6,500',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'advanced',
  },
  {
    id: 'media_literacy',
    name: {
      de: 'Medienkompetenz',
      en: 'Media Literacy',
    },
    description: {
      de: 'Verständnis für Medienproduktion, -distribution und -konsum. Kritische Analyse von Medieninhalten.',
      en: 'Understanding of media production, distribution, and consumption. Critical analysis of media content.',
    },
    type: 'educational',
    implementation: [
      'Wie werden Nachrichten produziert?',
      'Geschäftsmodelle von Medien verstehen',
      'Algorithmen und Filter Bubbles erkennen',
      'Unterschied zwischen Meinung und Nachricht',
      'Medien-Bias identifizieren',
    ],
    counters: [
      'framing',
      'visual_manipulation',
      'digital_influence',
      'narrative_persuasion',
      'synthetic_media',
    ],
    effectiveness: [
      {
        techniqueId: 'framing',
        effectiveness: 'high',
        evidence: ['Frame Awareness Training'],
      },
      {
        techniqueId: 'visual_manipulation',
        effectiveness: 'high',
        evidence: ['Visual Literacy'],
      },
      {
        techniqueId: 'digital_influence',
        effectiveness: 'moderate',
        evidence: ['Digital Literacy'],
      },
      {
        techniqueId: 'narrative_persuasion',
        effectiveness: 'moderate',
        evidence: ['Narrative Analysis'],
      },
      { techniqueId: 'synthetic_media', effectiveness: 'high', evidence: ['Deepfake Detection'] },
    ],
    evidence: {
      studies: [
        'Potter (2013) - Media Literacy Theory',
        'Hobbs (2010) - Digital Media Literacy',
        'Jeong et al. (2012) - Media Literacy Meta-Analysis',
      ],
      findings:
        'Medienkompetenz-Programme zeigen moderate Effekte. Langfristige, integrierte Ansätze am effektivsten.',
      uncertainty: {
        confidence: 0.74,
        sampleSize: '40+ Studien, N>7,500',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'intermediate',
  },
  {
    id: 'digital_hygiene',
    name: {
      de: 'Digitale Hygiene',
      en: 'Digital Hygiene',
    },
    description: {
      de: 'Praktiken zum Schutz persönlicher Daten und Reduktion von Tracking. Datensparsamkeit als Selbstschutz.',
      en: 'Practices to protect personal data and reduce tracking. Data minimization as self-protection.',
    },
    type: 'technological',
    implementation: [
      'Ad-Blocker und Tracking-Blocker verwenden',
      'VPN für sensible Aktivitäten',
      'Regelmäßige Cookie-Löschung',
      'Datensparsamkeit in sozialen Medien',
      'Privacy-fokussierte Tools nutzen',
    ],
    counters: ['microtargeting', 'digital_influence', 'ai_persuasion', 'dark_patterns'],
    effectiveness: [
      {
        techniqueId: 'microtargeting',
        effectiveness: 'very_high',
        evidence: ['Data Minimization'],
      },
      { techniqueId: 'digital_influence', effectiveness: 'moderate', evidence: ['Bot Blocking'] },
      { techniqueId: 'ai_persuasion', effectiveness: 'high', evidence: ['Profile Reduction'] },
      { techniqueId: 'dark_patterns', effectiveness: 'moderate', evidence: ['Ad Blocking'] },
    ],
    evidence: {
      studies: [
        'Acquisti et al. (2015) - Privacy Economics',
        'Mayer & Mitchell (2012) - Third-Party Tracking',
        'Englehardt & Narayanan (2016) - Web Privacy',
      ],
      findings:
        'Technische Maßnahmen sind effektiv, aber erfordern Expertise. Usability vs. Privacy Trade-off.',
      uncertainty: {
        confidence: 0.81,
        sampleSize: '25+ Studien, N>5,000',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'advanced',
  },
  {
    id: 'ethical_framework',
    name: {
      de: 'Ethischer Rahmen',
      en: 'Ethical Framework',
    },
    description: {
      de: 'Klare ethische Prinzipien als Entscheidungsgrundlage. Werte vor Taktik.',
      en: 'Clear ethical principles as decision-making foundation. Values before tactics.',
    },
    type: 'cognitive',
    implementation: [
      'Persönliche Werte definieren',
      'Entscheidungen an Prinzipien messen',
      'Ethische Dilemmata durchdenken',
      'Langfristige Konsequenzen berücksichtigen',
      'Würde und Autonomie respektieren',
    ],
    counters: [
      'consistency',
      'reciprocity',
      'liking',
      'emotional_appeal',
      'narrative_persuasion',
    ],
    effectiveness: [
      {
        techniqueId: 'consistency',
        effectiveness: 'moderate',
        evidence: ['Value-Based Decision'],
      },
      { techniqueId: 'reciprocity', effectiveness: 'moderate', evidence: ['Principled Refusal'] },
      { techniqueId: 'liking', effectiveness: 'moderate', evidence: ['Objective Criteria'] },
      {
        techniqueId: 'emotional_appeal',
        effectiveness: 'moderate',
        evidence: ['Value Clarity'],
      },
      {
        techniqueId: 'narrative_persuasion',
        effectiveness: 'low',
        evidence: ['Competing Narratives'],
      },
    ],
    evidence: {
      studies: [
        'Haidt (2001) - Moral Foundations',
        'Kohlberg (1981) - Moral Development',
        'Rest (1986) - Moral Judgment',
      ],
      findings:
        'Ethische Frameworks helfen bei komplexen Entscheidungen, bieten aber keine einfachen Antworten.',
      uncertainty: {
        confidence: 0.68,
        sampleSize: '30+ Studien, N>5,000',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'advanced',
  },
  {
    id: 'diverse_sources',
    name: {
      de: 'Diverse Quellen',
      en: 'Diverse Sources',
    },
    description: {
      de: 'Aktive Suche nach unterschiedlichen Perspektiven und Informationsquellen. Filter Bubbles durchbrechen.',
      en: 'Active search for different perspectives and information sources. Breaking filter bubbles.',
    },
    type: 'behavioral',
    implementation: [
      'Bewusst gegenteilige Meinungen lesen',
      'Internationale Quellen konsultieren',
      'Verschiedene Medientypen nutzen',
      'Experten unterschiedlicher Disziplinen anhören',
      'Eigene Echo-Chamber erkennen und verlassen',
    ],
    counters: ['framing', 'social_proof', 'narrative_persuasion', 'digital_influence'],
    effectiveness: [
      {
        techniqueId: 'framing',
        effectiveness: 'high',
        evidence: ['Alternative Frames Exposure'],
      },
      { techniqueId: 'social_proof', effectiveness: 'moderate', evidence: ['Diverse Norms'] },
      {
        techniqueId: 'narrative_persuasion',
        effectiveness: 'moderate',
        evidence: ['Counter-Narratives'],
      },
      {
        techniqueId: 'digital_influence',
        effectiveness: 'moderate',
        evidence: ['Algorithm Diversity'],
      },
    ],
    evidence: {
      studies: [
        'Mutz (2006) - Hearing the Other Side',
        'Bail et al. (2018) - Echo Chamber Experiment',
        'Nguyen (2020) - Echo Chambers Theory',
      ],
      findings:
        'Exposition zu diversen Quellen kann Polarisierung reduzieren, aber auch verstärken (Backfire). Kontext wichtig.',
      uncertainty: {
        confidence: 0.65,
        sampleSize: '20+ Studien, N>4,000',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'intermediate',
  },
  {
    id: 'tech_solutions',
    name: {
      de: 'Technologische Lösungen',
      en: 'Technological Solutions',
    },
    description: {
      de: 'Tools und Technologien zur Erkennung und Filterung von Manipulation. KI gegen KI.',
      en: 'Tools and technologies for detecting and filtering manipulation. AI against AI.',
    },
    type: 'technological',
    implementation: [
      'Browser-Extensions für Fact-Checking',
      'Deepfake-Detektions-Tools',
      'Bot-Erkennung Software',
      'Bias-Checker für Nachrichtenquellen',
      'Content-Authentifizierung Tools',
    ],
    counters: [
      'synthetic_media',
      'digital_influence',
      'ai_persuasion',
      'visual_manipulation',
      'microtargeting',
    ],
    effectiveness: [
      {
        techniqueId: 'synthetic_media',
        effectiveness: 'high',
        evidence: ['Detection Algorithms'],
      },
      {
        techniqueId: 'digital_influence',
        effectiveness: 'high',
        evidence: ['Bot Detection'],
      },
      { techniqueId: 'ai_persuasion', effectiveness: 'moderate', evidence: ['Adversarial AI'] },
      {
        techniqueId: 'visual_manipulation',
        effectiveness: 'moderate',
        evidence: ['Reverse Image Search'],
      },
      {
        techniqueId: 'microtargeting',
        effectiveness: 'moderate',
        evidence: ['Tracking Protection'],
      },
    ],
    evidence: {
      studies: [
        'Chesney & Citron (2019) - Deepfake Detection',
        'Ferrara et al. (2016) - Bot Detection',
        'Zhou & Zafarani (2020) - Fake News Detection',
      ],
      findings:
        'Technische Lösungen sind in Wettrüsten mit Manipulation. Effektivität temporär, erfordert ständige Updates.',
      uncertainty: {
        confidence: 0.72,
        sampleSize: '30+ Studien, N>50,000',
        evidenceQuality: 'moderate',
      },
    },
    difficulty: 'expert',
  },
];

/**
 * Get counter-measure by ID
 */
export function getCounterMeasureById(id: string): CounterMeasure | undefined {
  return counterMeasures.find((cm) => cm.id === id);
}

/**
 * Get counter-measures by type
 */
export function getCounterMeasuresByType(type: string): CounterMeasure[] {
  return counterMeasures.filter((cm) => cm.type === type);
}

/**
 * Get counter-measures effective against a specific technique
 */
export function getCounterMeasuresForTechnique(techniqueId: string): CounterMeasure[] {
  return counterMeasures.filter((cm) => cm.counters.includes(techniqueId));
}

/**
 * Get effectiveness of a counter-measure against a technique
 */
export function getEffectivenessAgainst(
  counterMeasureId: string,
  techniqueId: string
): string | undefined {
  const cm = getCounterMeasureById(counterMeasureId);
  const effectiveness = cm?.effectiveness.find((e) => e.techniqueId === techniqueId);
  return effectiveness?.effectiveness;
}
