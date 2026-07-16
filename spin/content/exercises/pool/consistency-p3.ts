import type { Exercise } from '../../types';

// consistency — Phase 3 densification batch.
export const consistencyP3Exercises: Exercise[] = [
  {
    id: 'cs-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Der Vertrag wird am Ende zum höheren Preis verlängert. Welche Technik ist der stärkste Treiber dafür, dass sich ausgerechnet der Projektleiter kaum gegen die Verlängerung stellen kann?',
      en: 'In the end the contract is renewed at the higher price. Which technique is the strongest driver behind why the project lead in particular can hardly bring themselves to oppose the renewal?',
    },
    scenario: {
      de: 'Ein Enterprise-Software-Anbieter steht vor der Vertragsverlängerung mit einem Großkunden — bei gleichzeitig höherem Preis. Beim ursprünglichen Abschluss vor zwei Jahren hatte das Customer-Success-Team den internen Projektleiter des Kunden gebeten, ein kurzes Video für dessen eigenes Team aufzunehmen: „Warum wir uns für diesen Anbieter entschieden haben — unsere drei wichtigsten Ziele." Im Verlängerungsmeeting spielt das Team dem Projektleiter und dem versammelten Einkaufsgremium genau dieses Video vor und sagt: „Das waren Ihre erklärten Ziele — und wir haben sie erreicht." Beiläufig erwähnt der Anbieter, neun von zehn vergleichbaren Kunden hätten bereits verlängert, und nennt zuerst den vollen Listenpreis, bevor er den „reduzierten" Verlängerungspreis präsentiert. Der Projektleiter, der seine damalige Aussage vor dem Gremium nur schwer widerrufen kann, empfiehlt die Verlängerung.',
      en: 'An enterprise-software vendor faces a renewal with a major client — at a higher price. When the deal first closed two years ago, the customer-success team had asked the client’s internal project lead to record a short video for their own team: “Why we chose this vendor — our three most important goals.” In the renewal meeting, the team plays that very video to the project lead and the assembled buying committee and says: “These were your stated goals — and we delivered on them.” In passing, the vendor mentions that nine out of ten comparable clients have already renewed, and it quotes the full list price first before presenting the “reduced” renewal price. The project lead, who can hardly walk back that earlier statement in front of the committee, recommends renewal.',
    },
    options: [
      {
        de: 'Commitment & Konsistenz — der Projektleiter hat seine Ziele einst freiwillig und öffentlich auf Video festgehalten und kann von dieser selbst getroffenen Aussage vor dem Gremium kaum abrücken.',
        en: 'Commitment & consistency — the project lead once recorded his goals voluntarily and publicly on video and can barely walk back that self-made statement in front of the committee.',
      },
      {
        de: 'Sozialer Beweis — dass neun von zehn vergleichbaren Kunden bereits verlängert haben, lässt die Verlängerung als das Normale und Erwartbare erscheinen.',
        en: 'Social proof — the fact that nine out of ten comparable clients have already renewed makes renewal look like the normal, expected move.',
      },
      {
        de: 'Ankereffekt — der zuerst genannte volle Listenpreis lässt den „reduzierten" Verlängerungspreis vergleichsweise günstig wirken.',
        en: 'Anchoring — quoting the full list price first makes the “reduced” renewal price look comparatively cheap.',
      },
      {
        de: 'Reziprozität — weil der Anbieter die vereinbarten Ziele erfüllt hat, fühlt sich der Kunde verpflichtet, das mit einer Verlängerung zu erwidern.',
        en: 'Reciprocity — because the vendor delivered on the agreed goals, the client feels obliged to return the favour by renewing.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominanter Treiber für die Haltung des Projektleiters ist Commitment & Konsistenz in ihrer öffentlichen, identitätsnahen Form: Er hat seine Ziele einst freiwillig und sichtbar auf Video festgehalten. Jetzt vor dem versammelten Gremium gegen die Verlängerung zu sprechen, hieße, öffentlich von der eigenen dokumentierten Aussage abzurücken — genau diesen Selbstwiderspruch vermeiden Menschen. Der Hebel wirkt, weil eine öffentliche, freiwillige Selbstverpflichtung besonders stark bindet (stärker als eine private). Die Grenze: Kunden an ein echtes, selbst gesetztes Ziel zu erinnern ist legitim und sogar hilfreich; manipulativ wird es, wenn eine aufgezeichnete Aussage gezielt als Druckmittel inszeniert wird, um eine sachlich davon getrennte Preisentscheidung zu erzwingen. Sozialer Beweis (Option 1) ist real präsent („neun von zehn"), wirkt aber auf alle Gremiumsmitglieder gleichermaßen und erklärt nicht, warum ausgerechnet der Projektleiter gebunden ist — er knüpft keine einzelne Person an ihre eigene frühere Aussage. Der Ankereffekt (Option 2) ist ebenfalls präsent (Listenpreis vor „reduziertem" Preis), betrifft aber die Preiswahrnehmung, nicht die persönliche Selbstbindung. Reziprozität (Option 3) trifft nicht: Die vereinbarten Ziele zu erfüllen ist die bezahlte Vertragsleistung, kein Geschenk, das eine Gegenleistung schuldig machte — die unverdiente Vorleistung, die Reziprozität voraussetzt, fehlt.',
      en: 'The dominant driver behind the project lead’s stance is commitment & consistency in its public, identity-near form: he once recorded his goals voluntarily and visibly on video. To argue against renewal now, in front of the assembled committee, would mean publicly walking back his own documented statement — and people avoid exactly that self-contradiction. The lever works because a public, voluntary self-commitment binds especially hard (more than a private one). The boundary: reminding customers of a genuine goal they set themselves is legitimate, even helpful; it turns manipulative when a recorded statement is staged as leverage to force a factually separate pricing decision. Social proof (option 1) is genuinely present (“nine out of ten”), but it acts on every committee member equally and does not explain why the project lead in particular is bound — it ties no single person to their own earlier statement. Anchoring (option 2) is present too (list price before the “reduced” price), but it shapes price perception, not personal self-binding. Reciprocity (option 3) does not fit: delivering the agreed goals is the paid contractual service, not a gift that would create an obligation to reciprocate — the unearned prior favour that reciprocity requires is absent.',
    },
    points: 20,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'social_proof', 'anchoring'],
  },
];
