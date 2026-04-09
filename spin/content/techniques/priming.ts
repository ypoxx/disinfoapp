import type { Technique } from '../types';

export const priming: Technique =   {
    id: 'priming',
    name: {
      de: 'Priming',
      en: 'Priming',
      hu: 'Előhangolás',
      pl: 'Priming',
      sk: 'Priming',
      hr: 'Priming',
      el: 'Προετοιμασία',
      mk: 'Прајминг',
      cnr: 'Priming',
    },
    description: {
      de: 'Die Aktivierung bestimmter Konzepte oder Assoziationen im Gedächtnis beeinflusst nachfolgende Wahrnehmungen und Entscheidungen, oft ohne dass die Person sich dessen bewusst ist.',
      en: 'The activation of certain concepts or associations in memory influences subsequent perceptions and decisions, often without the person being aware of it.',
      hu: 'Bizonyos fogalmak vagy asszociációk aktiválása az emlékezetben befolyásolja a későbbi észleléseket és döntéseket, gyakran anélkül, hogy az illető tudatában lenne.',
      pl: 'Aktywacja określonych pojęć lub skojarzeń w pamięci wpływa na późniejsze postrzeganie i decyzje, często bez świadomości osoby.',
      sk: 'Aktivácia určitých konceptov alebo asociácií v pamäti ovplyvňuje následné vnímanie a rozhodnutia, často bez toho, aby si to osoba uvedomovala.',
      hr: 'Aktivacija određenih koncepata ili asocijacija u sjećanju utječe na naknadne percepcije i odluke, često bez svijesti osobe.',
      el: 'Η ενεργοποίηση συγκεκριμένων εννοιών ή συσχετισμών στη μνήμη επηρεάζει τις επακόλουθες αντιλήψεις και αποφάσεις, συχνά χωρίς το άτομο να το συνειδητοποιεί.',
      mk: 'Активирањето на одредени концепти или асоцијации во меморијата влијае на последователните перцепции и одлуки, често без свесност на личноста.',
      cnr: 'Aktivacija određenih koncepata ili asocijacija u pamćenju utiče na naknadne percepcije i odluke, često bez svijesti osobe.',
    },
    category: 'cognitive_bias',
    difficulty: 'advanced',
    effectiveness: 'high',
    examples: [
      'Werbung zeigt Bilder von Familie und Geborgenheit vor Produktpräsentation',
      'Verwendung von Wörtern wie "Sicherheit" und "Schutz" vor politischen Vorschlägen',
      'Musik in Supermärkten zur Beeinflussung des Kaufverhaltens',
    ],
    evidence: {
      studies: [
        'Bargh et al. (1996) - Automaticity of Social Behavior',
        'Meyer & Schvaneveldt (1971) - Semantic Priming',
        'Tulving & Schacter (1990) - Priming and Memory',
      ],
      findings: 'Priming-Effekte sind nachweisbar, aber die Effektgrößen sind oft kleiner als ursprünglich angenommen. Meta-Analysen zeigen moderate Effekte mit erheblicher Variabilität.',
      uncertainty: {
        confidence: 0.75,
        sampleSize: '100+ Studien, N>15,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['framing', 'anchoring', 'emotional_appeal'],
    warningNeurons: [
      'Wiederholte Verwendung bestimmter Begriffe oder Bilder',
      'Kontextelemente, die nicht direkt zum Thema gehören',
      'Emotionale Vorbereitung durch Musik oder Atmosphäre',
      'Subtile Assoziationen zwischen nicht verwandten Konzepten',
    ],
    taxonomyGroups: ['cognitive_biases', 'unconscious_influence'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Stimulus-response_model.svg/640px-Stimulus-response_model.svg.png',
      alt: 'Stimulus-Response-Modell - Grundlage des Priming',
      credit: 'Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stimulus-response_model.svg',
      context: 'Priming basiert auf dem Prinzip, dass ein Stimulus nachfolgende Reaktionen beeinflusst - Bargh et al. (1996)',
    },
  };
