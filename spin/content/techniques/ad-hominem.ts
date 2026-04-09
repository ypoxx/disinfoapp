import type { Technique } from '../types';

export const adHominem: Technique =   {
    id: 'ad_hominem',
    name: {
      de: 'Ad Hominem',
      en: 'Ad Hominem',
      hu: 'Ad Hominem',
      pl: 'Ad Hominem',
      sk: 'Ad Hominem',
      hr: 'Ad Hominem',
      el: 'Ad Hominem',
      mk: 'Ad Hominem',
      cnr: 'Ad Hominem',
    },
    description: {
      de: 'Statt auf das Argument einzugehen, wird die Person angegriffen. Dies lenkt von sachlichen Diskussionen ab und diskreditiert den Gesprächspartner.',
      en: 'Instead of addressing the argument, the person is attacked. This distracts from factual discussions and discredits the interlocutor.',
      hu: 'Az érv helyett a személyt támadják. Ez elvonja a figyelmet a tárgyi vitáról és hiteltelenné teszi a beszélgetőpartnert.',
      pl: 'Zamiast odnieść się do argumentu, atakuje się osobę. Odwraca to uwagę od merytorycznej dyskusji i dyskredytuje rozmówcę.',
      sk: 'Namiesto reakcie na argument sa útočí na osobu. To odvádza pozornosť od vecnej diskusie a diskredituje partnera.',
      hr: 'Umjesto da se obraća argumentu, napada se osoba. To odvraća od činjenične rasprave i diskreditira sugovornika.',
      el: 'Αντί να απαντά στο επιχείρημα, επιτίθεται στο πρόσωπο. Αυτό αποσπά την προσοχή από τις πραγματικές συζητήσεις και δυσφημεί τον συνομιλητή.',
      mk: 'Наместо да се одговори на аргументот, се напаѓа личноста. Ова одвлекува од фактичките дискусии и го дискредитира соговорникот.',
      cnr: 'Umjesto da se odgovara na argument, napada se osoba. To odvraća od činjenične rasprave i diskredituje sagovornika.',
    },
    category: 'logical_fallacy',
    difficulty: 'beginner',
    effectiveness: 'moderate',
    examples: [
      '"Du bist zu jung, um das zu verstehen"',
      '"Als Ausländer kannst du das nicht beurteilen"',
      '"Jemand mit deinem Hintergrund sollte schweigen"',
      'Persönliche Angriffe statt Sachargumente',
    ],
    evidence: {
      studies: [
        'Walton (1998) - Ad Hominem Arguments',
        'Tindale (2007) - Fallacies and Argument',
        'Woods & Walton (1989) - Fallacies Selected Papers',
      ],
      findings: 'Ad Hominem kann effektiv sein, wenn Glaubwürdigkeit der Quelle relevant ist, aber unterminiert rationale Diskurse.',
      uncertainty: {
        confidence: 0.72,
        sampleSize: '40+ Studien, N>6,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['straw_man', 'emotional_appeal', 'authority'],
    warningNeurons: [
      'Persönliche Eigenschaften statt Argumente adressiert',
      'Diskreditierung durch Assoziation',
      'Fokus auf Messenger statt Message',
      'Charakterangriffe',
    ],
    taxonomyGroups: ['logical_fallacies', 'argumentation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ad_Hominem_Fallacy_Icon.svg/480px-Ad_Hominem_Fallacy_Icon.svg.png',
      alt: 'Ad Hominem Fehlschluss - Icon',
      credit: 'Wikimedia Commons (CC-BY-SA 4.0)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ad_Hominem_Fallacy_Icon.svg',
      context: 'Ad Hominem: Angriff auf die Person statt auf das Argument',
    },
  };
