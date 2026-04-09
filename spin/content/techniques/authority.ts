import type { Technique } from '../types';

export const authority: Technique =   {
    id: 'authority',
    name: {
      de: 'Autorität',
      en: 'Authority',
      hu: 'Tekintély',
      pl: 'Autorytet',
      sk: 'Autorita',
      hr: 'Autoritet',
      el: 'Εξουσία',
      mk: 'Авторитет',
      cnr: 'Autoritet',
    },
    description: {
      de: 'Menschen neigen dazu, Autoritätspersonen zu gehorchen und deren Aussagen für glaubwürdiger zu halten, oft ohne kritische Prüfung.',
      en: 'People tend to obey authority figures and consider their statements more credible, often without critical examination.',
      hu: 'Az emberek hajlamosak engedelmeskedni a tekintélyszemélyeknek és hitelesebbnek tartják állításaikat, gyakran kritikai vizsgálat nélkül.',
      pl: 'Ludzie mają tendencję do posłuszeństwa autorytetom i uznawania ich wypowiedzi za bardziej wiarygodne, często bez krytycznej oceny.',
      sk: 'Ľudia majú tendenciu poslúchať autority a považovať ich vyhlásenia za dôveryhodnejšie, často bez kritického preskúmania.',
      hr: 'Ljudi su skloni slušati autoritete i smatrati njihove izjave vjerodostojnijima, često bez kritičkog ispitivanja.',
      el: 'Οι άνθρωποι τείνουν να υπακούν σε πρόσωπα εξουσίας και να θεωρούν τις δηλώσεις τους πιο αξιόπιστες, συχνά χωρίς κριτική εξέταση.',
      mk: 'Луѓето имаат тенденција да се покоруваат на авторитети и да ги сметаат нивните изјави за поверодостојни, често без критичка проверка.',
      cnr: 'Ljudi imaju tendenciju da slušaju autoritete i smatraju njihove izjave vjerodostojnijim, često bez kritičkog ispitivanja.',
    },
    category: 'social_dynamics',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      'Ärzte in weißen Kitteln in der Werbung',
      'Falsche Titel oder Qualifikationen',
      'Uniformen und Abzeichen als Autoritätssymbole',
      '"Wissenschaftler sagen..." ohne Quellenangabe',
    ],
    evidence: {
      studies: [
        'Milgram (1963) - Obedience to Authority',
        'Bickman (1974) - Uniform Effects on Compliance',
        'Cialdini (1984) - Authority Principle',
      ],
      findings: 'Autoritätssymbole führen zu deutlich erhöhter Compliance. Effekt ist stärker bei wahrgenommener Expertise und Legitimität.',
      uncertainty: {
        confidence: 0.94,
        sampleSize: '120+ Studien, N>18,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['social_proof', 'liking', 'framing'],
    warningNeurons: [
      'Berufung auf Titel ohne Relevanz zum Thema',
      'Autoritätssymbole (Kleidung, Umgebung)',
      'Fehlende Quellenangaben bei Expertenaussagen',
      'Generalisierung von Expertise auf fremde Gebiete',
    ],
    taxonomyGroups: ['social_influence', 'credibility'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Milgram_experiment_v2.svg',
      alt: 'Milgram-Experiment Aufbau - Gehorsam gegenüber Autoritäten',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Milgram_experiment_v2.svg',
      context: 'Milgram (1963) zeigte, dass 65% der Teilnehmer bereit waren, tödliche Stromschläge zu geben, wenn eine Autorität es anordnete',
    },
  };
