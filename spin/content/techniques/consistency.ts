import type { Technique } from '../types';

export const consistency: Technique =   {
    id: 'consistency',
    name: {
      de: 'Konsistenz',
      en: 'Consistency',
      hu: 'Consistency (konzisztencia)',
      pl: 'Consistency (konsekwencja)',
      sk: 'Consistency (konzistencia)',
      hr: 'Consistency (dosljednost)',
      el: 'Consistency (συνέπεια)',
      mk: 'Consistency (конзистентност)',
      cnr: 'Consistency (dosljednost)',
    },
    description: {
      de: 'Menschen streben danach, mit ihren früheren Aussagen und Handlungen konsistent zu sein. Kleine Zusagen führen zu größeren Verpflichtungen.',
      en: 'People strive to be consistent with their previous statements and actions. Small commitments lead to larger obligations.',
      hu: 'Az emberek arra törekszenek, hogy korábbi kijelentéseikkel és cselekedeteikkel összhangban maradjanak. A kis elköteleződések nagyobb kötelezettségekhez vezetnek.',
      pl: 'Ludzie dążą do zachowania spójności ze swoimi wcześniejszymi wypowiedziami i działaniami. Małe zobowiązania prowadzą do większych.',
      sk: 'Ľudia sa snažia byť konzistentní so svojimi predchádzajúcimi vyjadreniami a činmi. Malé záväzky vedú k väčším povinnostiam.',
      hr: 'Ljudi teže biti dosljedni svojim prethodnim izjavama i postupcima. Male obveze vode do većih obaveza.',
      el: 'Οι άνθρωποι προσπαθούν να είναι συνεπείς με τις προηγούμενες δηλώσεις και πράξεις τους. Οι μικρές δεσμεύσεις οδηγούν σε μεγαλύτερες υποχρεώσεις.',
      mk: 'Луѓето се стремат да бидат конзистентни со своите претходни изјави и дејства. Малите обврски водат до поголеми обврски.',
      cnr: 'Ljudi teže da budu dosljedni svojim prethodnim izjavama i postupcima. Male obaveze vode do većih obaveza.',
    },
    category: 'social_dynamics',
    difficulty: 'intermediate',
    effectiveness: 'high',
    examples: [
      'Foot-in-the-door Technik (kleine Bitte, dann größere)',
      'Öffentliche Zusagen verstärken Bindung',
      'Unterschriften für Petitionen führen zu späteren Spenden',
      '"Sie haben doch gesagt..." Argumentationen',
    ],
    evidence: {
      studies: [
        'Cialdini et al. (1978) - Low-ball Procedure',
        'Freedman & Fraser (1966) - Foot-in-the-door',
        'Festinger (1957) - Cognitive Dissonance',
      ],
      findings: 'Konsistenzstreben ist sehr stark, besonders bei öffentlichen und freiwilligen Zusagen.',
      uncertainty: {
        confidence: 0.89,
        sampleSize: '110+ Studien, N>16,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['reciprocity', 'liking', 'social_proof'],
    warningNeurons: [
      'Kleine Anfangsforderungen vor größeren',
      'Öffentliche Selbstverpflichtungen',
      'Berufung auf frühere Aussagen',
      'Identitätsbasierte Argumentation',
    ],
    taxonomyGroups: ['social_influence', 'commitment'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/CognitiveDissonanceDiagram.jpg/640px-CognitiveDissonanceDiagram.jpg',
      alt: 'Kognitive Dissonanz Diagramm - Grundlage der Konsistenztheorie',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:CognitiveDissonanceDiagram.jpg',
      context: 'Festinger (1957) zeigte: Menschen streben nach Konsistenz zwischen Überzeugungen und Handlungen',
    },
  };
