import type { Exercise } from '../types';

export const fillBlanks: Exercise[] = [
  {
    id: 'fb-1',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ein viraler Post behauptet: "Firma X hat 500 Arbeitsplätze ins Ausland verlagert!" In Wahrheit wurden 50 Stellen in ein Joint Venture überführt. Welche Richtigstellung ist am effektivsten?',
      en: 'A viral post claims: "Company X has relocated 500 jobs abroad!" In reality, 50 positions were transferred into a joint venture. Which correction is most effective?',
    },
    options: [
      {
        de: '50 Stellen wurden im Rahmen eines Joint Ventures mit [Partner] neu strukturiert. Alle Mitarbeiter erhielten Angebote. Details: [Link]',
        en: '50 positions were restructured as part of a joint venture with [Partner]. All employees received offers. Details: [Link]',
      },
      {
        de: 'Das ist falsch! Wir haben keine 500 Arbeitsplätze verlagert!',
        en: 'That is false! We did not relocate 500 jobs!',
      },
      {
        de: 'Wir kommentieren Gerüchte grundsätzlich nicht.',
        en: 'We do not comment on rumors as a matter of principle.',
      },
      {
        de: 'Der Post enthält Falschinformationen und wir behalten uns rechtliche Schritte vor.',
        en: 'The post contains misinformation and we reserve the right to take legal action.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Richtigstellung: (1) Nennt die korrekten Zahlen, (2) erklärt den Kontext, (3) zeigt, dass Mitarbeiter berücksichtigt wurden, (4) bietet Belege via Link. Die anderen Optionen sind defensiv, aggressiv oder uninformativ.',
      en: 'The best correction: (1) States the correct figures, (2) explains the context, (3) shows that employees were considered, (4) provides evidence via a link. The other options are defensive, aggressive, or uninformative.',
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
      en: 'A manipulated quote from your CEO is spreading: "I don\'t care about the environment, profit is all that matters." The real quote was more nuanced. What is your best response?',
    },
    options: [
      {
        de: 'Das vollständige Originalzitat veröffentlichen mit Video/Transkript-Link, sachlich den Kontext erklären',
        en: 'Publish the full original quote with a video/transcript link, and provide factual context',
      },
      {
        de: 'Den CEO ein neues Statement zum Umweltschutz abgeben lassen',
        en: 'Have the CEO issue a new statement on environmental protection',
      },
      {
        de: 'Auf Twitter alle Verbreiter des falschen Zitats markieren und korrigieren',
        en: 'Tag and correct every account spreading the false quote on Twitter',
      },
      {
        de: 'Eine Pressemitteilung mit dem Titel "CEO-Zitat wurde gefälscht" herausgeben',
        en: 'Issue a press release titled "CEO quote was fabricated"',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Primärquelle (Originalvideo/Transkript) ist der stärkste Beweis. Ein neues Statement wirkt wie Schadensbegrenzung. Einzelne Verbreiter zu korrigieren skaliert nicht. "Zitat wurde gefälscht" wiederholt das Falsche (familiarity backfire effect).',
      en: 'The primary source (original video/transcript) is the strongest evidence. A new statement looks like damage control. Correcting individual accounts does not scale. "Quote was fabricated" repeats the falsehood (familiarity backfire effect).',
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
      en: 'Multiple accounts claim: "Company Z\'s new factory is contaminating the groundwater!" Your environmental assessments show the opposite. Which communication strategy is most effective?',
    },
    options: [
      {
        de: 'Proaktiv die Umweltgutachten veröffentlichen, lokale Stakeholder einladen, und unabhängige Experten zu Wort kommen lassen',
        en: 'Proactively publish the environmental assessments, invite local stakeholders, and let independent experts speak',
      },
      {
        de: 'Eine Anzeigenkampagne mit dem Slogan "Wir sind sauber!" starten',
        en: 'Launch an ad campaign with the slogan "We are clean!"',
      },
      {
        de: 'Die Accounts als koordinierte Kampagne entlarven',
        en: 'Expose the accounts as a coordinated campaign',
      },
      {
        de: 'Nur die lokale Presse informieren und hoffen, dass es nicht eskaliert',
        en: 'Only inform the local press and hope it doesn\'t escalate',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Transparenz + unabhängige Stimmen + lokales Engagement ist die stärkste Kombination. Anzeigenkampagnen wirken als Greenwashing. Das Entlarven kann als Angriff gewertet werden. Nur lokale Presse reicht bei viraler Verbreitung nicht aus.',
      en: 'Transparency + independent voices + local engagement is the strongest combination. Ad campaigns come across as greenwashing. Exposing the accounts can be perceived as an attack. Local press alone is not enough when content has gone viral.',
    },
    points: 15,
    relatedTechniques: ['authority', 'social_proof', 'narrative_persuasion'],
  },
];
