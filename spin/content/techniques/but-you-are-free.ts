import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: but_you_are_free).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const butYouAreFree: Technique = {
  id: 'but_you_are_free',
  name: {
    de: '„But You Are Free“ (BYAF)',
    en: '"But You Are Free" (BYAF)',
  },
  description: {
    de: 'Eine Bitte wird von dem ausdrücklichen Hinweis begleitet, dass die Zielperson frei ablehnen darf („aber Sie sind natürlich frei, Nein zu sagen"). Genau diese betonte Wahlfreiheit senkt den Widerstand und erhöht die Zustimmungsrate — während die Bitte selbst unverändert bleibt.',
    en: 'A request is paired with an explicit reminder that the target is free to refuse ("but you are of course free to say no"). It is precisely this emphasis on the freedom to choose that lowers resistance and raises compliance — while the request itself stays exactly the same.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Charity-Gala einer Bildungsstiftung, Tischgespräch: Die Fundraising-Leiterin bittet einen Firmenvertreter um eine Spendenzusage und fügt an: „Sie sind selbstverständlich völlig frei, abzulehnen — die Entscheidung liegt ganz bei Ihnen." Weitere Argumente, Fristen oder Gegenleistungen bringt sie nicht ins Spiel.',
    'Interne E-Mail in einer Kommunikationsabteilung: Die Teamleiterin fragt einen Redakteur, ob er kurzfristig die Wochenend-Pressebereitschaft übernimmt: „Ob du das machst, entscheidest du ganz allein — ein Nein ist absolut okay, kein Druck." Sonst nennt sie nur den Termin, keine Anreize und keine Konsequenzen.',
    'Nach einem Kundenworkshop, Telefonat: Die Beraterin ruft eine Teilnehmerin an und bittet um ein kurzes Testimonial für die Agenturwebsite: „Es ist ganz Ihre freie Entscheidung — wenn Sie lieber nicht möchten, ist das vollkommen in Ordnung." Eine Gegenleistung oder Frist stellt sie nicht in Aussicht.',
  ],
  evidence: {
    studies: [
      'Carpenter (2013) - A Meta-Analysis of the Effectiveness of the \'But You Are Free\' Compliance-Gaining Technique',
    ],
    findings: 'Carpenter (2013) fasst 42 Studien meta-analytisch zusammen, dass ein ausdrücklicher Hinweis auf die Ablehnungsfreiheit die Zustimmung im Schnitt erhöht; eine spätere Re-Analyse beziffert den gepoolten Effekt auf g≈0.44 (moderat, 95%-KI [0.36–0.51]). Der Effekt fällt schwächer aus, wenn zwischen Bitte und Entscheidung Zeit vergeht, und ist überwiegend an kleinen Bitten gemessen. Die Stichproben sind vorwiegend westlich (WEIRD), die Übertragbarkeit auf andere Kontexte ist offen (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '42 Studien (Meta-Analyse); g≈0.44 [0.36–0.51]',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['reactance_theory', 'door_in_the_face'],
  warningNeurons: [
    'Eine konkrete Bitte, direkt gefolgt von der ausdrücklichen Zusicherung „Sie sind frei, Nein zu sagen" / „ganz Ihre Entscheidung"',
    'Die betonte Wahlfreiheit ist der einzige neue Baustein — an der eigentlichen Bitte ändert sich nichts',
    'Der Freiheitshinweis fällt genau im Moment der Bitte, nicht als allgemeine Höflichkeit vorab',
    'Formulierungen wie „kein Druck", „völlig freiwillig", „nur wenn Sie möchten" rahmen eine konkrete Aufforderung',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
