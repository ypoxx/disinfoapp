import type { Exercise } from '../types';

export const fillBlanks: Exercise[] = [
  {
    id: 'fb-1',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ein viraler Post behauptet: "Firma X hat 500 Arbeitsplätze ins Ausland verlagert!" In Wahrheit wurden 50 Stellen in ein Joint Venture überführt. Welche Richtigstellung ist am effektivsten?',
    },
    options: [
      { de: '50 Stellen wurden im Rahmen eines Joint Ventures mit [Partner] neu strukturiert. Alle Mitarbeiter erhielten Angebote. Details: [Link]' },
      { de: 'Das ist falsch! Wir haben keine 500 Arbeitsplätze verlagert!' },
      { de: 'Wir kommentieren Gerüchte grundsätzlich nicht.' },
      { de: 'Der Post enthält Falschinformationen und wir behalten uns rechtliche Schritte vor.' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Richtigstellung: (1) Nennt die korrekten Zahlen, (2) erklärt den Kontext, (3) zeigt, dass Mitarbeiter berücksichtigt wurden, (4) bietet Belege via Link. Die anderen Optionen sind defensiv, aggressiv oder uninformativ.',
    },
    points: 15,
    relatedTechniques: ['framing', 'narrative_persuasion'],
  },
  {
    id: 'fb-2',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ein manipuliertes Zitat Ihres CEOs verbreitet sich: "Umweltschutz ist mir egal, Profit zählt." Das echte Zitat war differenzierter. Wie reagieren Sie am besten?',
    },
    options: [
      { de: 'Das vollständige Originalzitat veröffentlichen mit Video/Transkript-Link, sachlich den Kontext erklären' },
      { de: 'Den CEO ein neues Statement zum Umweltschutz abgeben lassen' },
      { de: 'Auf Twitter alle Verbreiter des falschen Zitats markieren und korrigieren' },
      { de: 'Eine Pressemitteilung mit dem Titel "CEO-Zitat wurde gefälscht" herausgeben' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Primärquelle (Originalvideo/Transkript) ist der stärkste Beweis. Ein neues Statement wirkt wie Schadensbegrenzung. Einzelne Verbreiter zu korrigieren skaliert nicht. "Zitat wurde gefälscht" wiederholt das Falsche (familiarity backfire effect).',
    },
    points: 15,
    relatedTechniques: ['framing', 'visual_manipulation'],
  },
  {
    id: 'fb-3',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Accounts behaupten: "Die neue Fabrik von Firma Z verseucht das Grundwasser!" Ihre Umweltgutachten zeigen das Gegenteil. Welche Kommunikationsstrategie ist am wirksamsten?',
    },
    options: [
      { de: 'Proaktiv die Umweltgutachten veröffentlichen, lokale Stakeholder einladen, und unabhängige Experten zu Wort kommen lassen' },
      { de: 'Eine Anzeigenkampagne mit dem Slogan "Wir sind sauber!" starten' },
      { de: 'Die Accounts als koordinierte Kampagne entlarven' },
      { de: 'Nur die lokale Presse informieren und hoffen, dass es nicht eskaliert' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Transparenz + unabhängige Stimmen + lokales Engagement ist die stärkste Kombination. Anzeigenkampagnen wirken als Greenwashing. Das Entlarven kann als Angriff gewertet werden. Nur lokale Presse reicht bei viraler Verbreitung nicht aus.',
    },
    points: 15,
    relatedTechniques: ['authority', 'social_proof', 'narrative_persuasion'],
  },
];
