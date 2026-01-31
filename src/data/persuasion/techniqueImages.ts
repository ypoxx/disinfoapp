/**
 * Image recommendations for each persuasion technique
 * Sources: Wikipedia Commons, historical archives
 * All images should be public domain or CC-BY licensed
 */

export interface TechniqueImageSource {
  techniqueId: string;
  recommendedImage: {
    description: string;
    wikimediaUrl?: string;
    directUrl?: string;
    license: string;
    credit: string;
    context: string;
  };
  alternativeImages?: {
    description: string;
    url: string;
    license: string;
  }[];
}

/**
 * Curated image sources for persuasion techniques
 * Priority: Researchers > Historical Events > Iconic Examples
 */
export const techniqueImageSources: TechniqueImageSource[] = [
  // === COGNITIVE BIAS ===
  {
    techniqueId: 'framing',
    recommendedImage: {
      description: 'Daniel Kahneman - Nobel Prize winner, pioneer of framing research',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/File:Daniel_Kahneman_(3283955327).jpg',
      license: 'Public Domain (Flickr - World Economic Forum)',
      credit: 'World Economic Forum',
      context: 'Kahneman & Tversky developed framing theory with the famous "Asian Disease Problem" study (1981)',
    },
  },
  {
    techniqueId: 'priming',
    recommendedImage: {
      description: 'John Bargh - Pioneer of automaticity and priming research',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:John_Bargh',
      license: 'CC-BY',
      credit: 'Academic photo',
      context: 'Bargh et al. (1996) demonstrated how priming affects social behavior',
    },
  },
  {
    techniqueId: 'anchoring',
    recommendedImage: {
      description: 'Amos Tversky - Co-developer of anchoring and adjustment heuristic',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Amos_Tversky',
      license: 'Fair use / Academic',
      credit: 'Stanford University',
      context: 'Tversky & Kahneman (1974) first described anchoring in "Judgment under Uncertainty"',
    },
  },
  {
    techniqueId: 'reactance_theory',
    recommendedImage: {
      description: 'Jack Brehm - Developer of psychological reactance theory',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Psychological_reactance',
      license: 'Academic',
      credit: 'University archive',
      context: 'Brehm (1966) established the theory explaining resistance to persuasion attempts',
    },
  },
  {
    techniqueId: 'repetition',
    recommendedImage: {
      description: 'Historical propaganda poster showing repetition principle',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Propaganda_posters',
      license: 'Public Domain',
      credit: 'Historical archive',
      context: 'The "Big Lie" technique and mere exposure effect in historical context',
    },
  },
  {
    techniqueId: 'illusory_truth_effect',
    recommendedImage: {
      description: 'Research visualization of illusory truth effect',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Cognitive_biases',
      license: 'CC-BY-SA',
      credit: 'Scientific illustration',
      context: 'Hasher et al. (1977) demonstrated that repeated statements are perceived as more true',
    },
  },
  {
    techniqueId: 'nudging',
    recommendedImage: {
      description: 'Richard Thaler - Nobel Prize winner for behavioral economics',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Richard_Thaler',
      license: 'CC-BY',
      credit: 'University of Chicago',
      context: 'Thaler & Sunstein (2008) popularized nudging in "Nudge: Improving Decisions"',
    },
  },

  // === SOCIAL DYNAMICS ===
  {
    techniqueId: 'social_proof',
    recommendedImage: {
      description: 'Solomon Asch conformity experiment - line comparison',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/File:Asch_experiment.svg',
      license: 'CC-BY-SA',
      credit: 'Wikimedia Commons',
      context: 'Asch (1951) demonstrated conformity pressure through his famous line experiment',
    },
  },
  {
    techniqueId: 'scarcity',
    recommendedImage: {
      description: 'Robert Cialdini - Author of "Influence: The Psychology of Persuasion"',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Robert_Cialdini',
      license: 'CC-BY',
      credit: 'Arizona State University',
      context: 'Cialdini identified scarcity as one of the six principles of persuasion',
    },
  },
  {
    techniqueId: 'reciprocity',
    recommendedImage: {
      description: 'Robert Cialdini - Pioneer of reciprocity research in influence',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Robert_Cialdini',
      license: 'CC-BY',
      credit: 'Arizona State University',
      context: 'Cialdini demonstrated the power of reciprocity in his seminal research',
    },
  },
  {
    techniqueId: 'authority',
    recommendedImage: {
      description: 'Stanley Milgram experiment setup - obedience to authority',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/File:Milgram_experiment_v2.svg',
      license: 'CC-BY-SA',
      credit: 'Wikimedia Commons',
      context: 'Milgram (1963) showed how people obey authority figures even against their conscience',
    },
  },
  {
    techniqueId: 'liking',
    recommendedImage: {
      description: 'Cialdini liking principle - social psychology of attraction',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Social_psychology',
      license: 'CC-BY',
      credit: 'Academic',
      context: 'People say yes more readily to those they like - similarity, compliments, cooperation',
    },
  },
  {
    techniqueId: 'consistency',
    recommendedImage: {
      description: 'Leon Festinger - Developer of cognitive dissonance theory',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Leon_Festinger',
      license: 'Academic archive',
      credit: 'Stanford University',
      context: 'Festinger (1957) showed how people strive for consistency in beliefs and actions',
    },
  },

  // === LOGICAL FALLACIES ===
  {
    techniqueId: 'ad_hominem',
    recommendedImage: {
      description: 'Historical political debate illustration',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Debates',
      license: 'Public Domain',
      credit: 'Historical archive',
      context: 'Ad hominem attacks focus on the person rather than their arguments',
    },
  },
  {
    techniqueId: 'false_dichotomy',
    recommendedImage: {
      description: 'Cold War propaganda - "either/or" mentality',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Cold_War_propaganda',
      license: 'Public Domain',
      credit: 'Historical archive',
      context: 'False dichotomies reduce complex issues to two artificial choices',
    },
  },
  {
    techniqueId: 'straw_man',
    recommendedImage: {
      description: 'Political cartoon showing misrepresentation',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Political_cartoons',
      license: 'Public Domain / CC',
      credit: 'Historical archive',
      context: 'Straw man arguments distort opponent positions to make them easier to attack',
    },
  },
  {
    techniqueId: 'equivocation',
    recommendedImage: {
      description: 'Language and ambiguity illustration',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Linguistics',
      license: 'CC-BY-SA',
      credit: 'Academic illustration',
      context: 'Equivocation exploits ambiguous meanings of words during argumentation',
    },
  },

  // === EMOTIONAL MANIPULATION ===
  {
    techniqueId: 'emotional_appeal',
    recommendedImage: {
      description: 'Historical wartime propaganda poster with emotional appeal',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:World_War_II_propaganda_posters',
      license: 'Public Domain',
      credit: 'US Government / Historical archive',
      context: 'Emotional appeals bypass rational thinking through fear, anger, or compassion',
    },
  },
  {
    techniqueId: 'narrative_persuasion',
    recommendedImage: {
      description: 'Martin Luther King Jr. "I Have a Dream" speech',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/File:Martin_Luther_King_Jr_St_Paul_Campus_U_MN.jpg',
      license: 'Public Domain',
      credit: 'US Government',
      context: 'Powerful narratives create identification and bypass critical analysis',
    },
  },

  // === NLP TECHNIQUES ===
  {
    techniqueId: 'pacing_and_leading',
    recommendedImage: {
      description: 'Richard Bandler & John Grinder - NLP founders',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Neuro-linguistic_programming',
      license: 'CC-BY',
      credit: 'Academic',
      context: 'Bandler & Grinder (1979) developed NLP including pacing and leading techniques',
    },
  },
  {
    techniqueId: 'embedded_commands',
    recommendedImage: {
      description: 'Milton Erickson - Pioneer of hypnotic language patterns',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Milton_H._Erickson',
      license: 'Academic',
      credit: 'Medical archive',
      context: 'Erickson developed conversational hypnosis and embedded command techniques',
    },
  },

  // === DIGITAL INFLUENCE ===
  {
    techniqueId: 'microtargeting',
    recommendedImage: {
      description: 'Cambridge Analytica data visualization concept',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Cambridge_Analytica',
      license: 'CC-BY-SA',
      credit: 'News media / Visualization',
      context: 'Cambridge Analytica scandal revealed mass psychographic microtargeting',
    },
  },
  {
    techniqueId: 'digital_influence',
    recommendedImage: {
      description: 'Internet Research Agency / Troll farm visualization',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Russian_interference_in_the_2016_United_States_elections',
      license: 'CC-BY',
      credit: 'News visualization',
      context: 'State-sponsored digital influence operations manipulate public discourse',
    },
  },
  {
    techniqueId: 'visual_manipulation',
    recommendedImage: {
      description: 'Misleading chart/graph example',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Misleading_graphs',
      license: 'CC-BY-SA',
      credit: 'Educational illustration',
      context: 'Visual manipulation distorts perception through misleading graphics',
    },
  },
  {
    techniqueId: 'synthetic_media',
    recommendedImage: {
      description: 'Deepfake detection comparison',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Deepfakes',
      license: 'CC-BY',
      credit: 'Research illustration',
      context: 'AI-generated synthetic media poses new challenges for truth verification',
    },
  },
  {
    techniqueId: 'dark_patterns',
    recommendedImage: {
      description: 'UI dark pattern example - deceptive design',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Dark_pattern',
      license: 'CC-BY-SA',
      credit: 'UX research',
      context: 'Dark patterns manipulate users through deceptive interface design',
    },
  },
  {
    techniqueId: 'ai_persuasion',
    recommendedImage: {
      description: 'AI/Algorithm visualization',
      wikimediaUrl: 'https://commons.wikimedia.org/wiki/Category:Artificial_intelligence',
      license: 'CC-BY',
      credit: 'Tech illustration',
      context: 'AI enables personalized, adaptive persuasion at unprecedented scale',
    },
  },
];

/**
 * Get image source for a technique
 */
export function getImageSourceForTechnique(techniqueId: string): TechniqueImageSource | undefined {
  return techniqueImageSources.find(source => source.techniqueId === techniqueId);
}
