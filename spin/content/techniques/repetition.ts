import type { Technique } from '../types';

export const repetition: Technique =   {
    id: 'repetition',
    name: {
      de: 'Wiederholung',
      en: 'Repetition',
      hu: 'Ismétlés',
      pl: 'Powtórzenie',
      sk: 'Opakovanie',
      hr: 'Ponavljanje',
      el: 'Επανάληψη',
      mk: 'Повторување',
      cnr: 'Ponavljanje',
    },
    description: {
      de: 'Häufige Wiederholung von Botschaften erhöht deren Glaubwürdigkeit und Akzeptanz, unabhängig vom Wahrheitsgehalt (Mere Exposure Effect).',
      en: 'Frequent repetition of messages increases their credibility and acceptance, regardless of truthfulness (Mere Exposure Effect).',
      hu: 'Az üzenetek gyakori ismétlése növeli hitelességüket és elfogadottságukat, az igazságtartalomtól függetlenül (Mere Exposure Effect – puszta expozíciós hatás).',
      pl: 'Częste powtarzanie przekazów zwiększa ich wiarygodność i akceptację, niezależnie od prawdziwości (Mere Exposure Effect – efekt czystej ekspozycji).',
      sk: 'Časté opakovanie správ zvyšuje ich dôveryhodnosť a prijatie, bez ohľadu na pravdivosť (Mere Exposure Effect – efekt púhej expozície).',
      hr: 'Učestalo ponavljanje poruka povećava njihovu vjerodostojnost i prihvaćenost, bez obzira na istinitost (Mere Exposure Effect – efekt puke izloženosti).',
      el: 'Η συχνή επανάληψη μηνυμάτων αυξάνει την αξιοπιστία και την αποδοχή τους, ανεξάρτητα από την αλήθεια (Mere Exposure Effect – φαινόμενο απλής έκθεσης).',
      mk: 'Честото повторување на пораките ја зголемува нивната веродостојност и прифаќање, без оглед на вистинитоста (Mere Exposure Effect – ефект на обична изложеност).',
      cnr: 'Učestalo ponavljanje poruka povećava njihovu vjerodostojnost i prihvaćenost, bez obzira na istinitost (Mere Exposure Effect – efekat puke izloženosti).',
    },
    category: 'cognitive_bias',
    difficulty: 'beginner',
    effectiveness: 'high',
    examples: [
      'Politische Slogans werden endlos wiederholt',
      'Werbesprüche und Jingles',
      'Wiederholte Falschbehauptungen in sozialen Medien',
      '"Big Lie" Taktik: große Lügen ständig wiederholen',
    ],
    evidence: {
      studies: [
        'Zajonc (1968) - Mere Exposure Effect',
        'Hasher et al. (1977) - Frequency and Truth',
        'Pennycook et al. (2018) - Prior Exposure Increases Belief',
      ],
      findings: 'Wiederholung erhöht Vertrautheit und wahrgenommene Wahrheit signifikant. Effekt bleibt auch bei expliziter Warnung bestehen.',
      uncertainty: {
        confidence: 0.90,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['illusory_truth_effect', 'priming', 'narrative_persuasion'],
    warningNeurons: [
      'Identische Formulierungen in verschiedenen Kontexten',
      'Mantrenartige Wiederholung von Phrasen',
      'Koordinierte Verbreitung derselben Botschaft',
      'Slogans statt Argumente',
    ],
    taxonomyGroups: ['cognitive_biases', 'information_repetition'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Poster_-_Keep_Calm_and_Carry_On.svg/400px-Poster_-_Keep_Calm_and_Carry_On.svg.png',
      alt: 'Keep Calm and Carry On - Beispiel für wiederholte Botschaften',
      credit: 'UK Government / Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Poster_-_Keep_Calm_and_Carry_On.svg',
      context: 'Zajonc (1968): Wiederholung erhöht Vertrautheit und wahrgenommene Wahrheit (Mere Exposure Effect)',
    },
  };
