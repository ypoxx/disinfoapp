import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: disguised_ads).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const disguisedAds: Technique = {
  id: 'disguised_ads',
  name: {
    de: 'Disguised Ads / Getarnte Werbung',
    en: 'Disguised Ads',
  },
  description: {
    de: 'Werbung, die als redaktioneller Beitrag, Empfehlung oder Bedienelement auftritt und ihren bezahlten, kommerziellen Charakter verschleiert — etwa ein Advertorial im Redaktionslayout oder ein Download-Button, der in Wahrheit eine gebuchte Anzeige ist. Der Hebel ist das Vertrauen, das Nutzer nicht-werblichen Inhalten und Funktionen entgegenbringen.',
    en: 'Advertising that presents itself as editorial content, a recommendation, or a piece of interface while concealing its paid, commercial nature — an advertorial in editorial styling, or a download button that is really a booked ad. It trades on the trust people extend to non-commercial content and functional elements.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Fachportal für Facility Management: Die Content-Marketing-Managerin eines Reinigungsmittel-Herstellers bucht beim Vermarkter des Portals einen Beitrag, der in Schrift, Bebilderung und Rubrik („Praxis-Analyse") exakt wie die redaktionellen Texte des Hauses aussieht und durchgehend die eigene Produktlinie empfiehlt — der Hinweis „Anzeige" steht ausgegraut und kleiner als die Bildunterschrift über dem oberen Bildrand.',
    'Freeware-Downloadportal: Ein IT-Administrator sucht ein PDF-Werkzeug und landet auf der Downloadseite. Über dem kleinen grauen Textlink „Download starten" prangt ein großer grüner Button „Jetzt herunterladen" — er ist in Wahrheit eine gebuchte Anzeige und installiert eine andere, kostenpflichtige Software.',
    'Mitglieder-Newsletter eines Branchenverbands: Zwischen zwei redaktionellen Kurzmeldungen steht im identischen Layout — gleiche Überschriftentype, gleiche Rubrik „Kurz notiert" — ein von einem Dienstleister bezahlter Textbeitrag, der dessen Seminarangebot empfiehlt; als bezahlte Platzierung ist er nirgends gekennzeichnet.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale',
    ],
    findings: 'Gray et al. (2018) und Mathur et al. (2019) ordnen getarnte Werbung als Dark Pattern ein (interface interference bzw. „sneaking" in nicht-werbliche Kontexte) und dokumentieren ihr Vorkommen in Online-Interfaces. Die Belege sind überwiegend taxonomisch und prävalenzbasiert; ob und wie stark die Tarnung Entscheidungen tatsächlich verändert, ist kontextabhängig und kaum experimentell isoliert (begrenzte Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien (Interface-Audits), keine isolierten Wirkungsexperimente',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['dark_patterns', 'sneaking', 'bait_and_switch'],
  warningNeurons: [
    'Ein „Beitrag" trägt Layout, Typografie und Rubrik der Redaktion, aber kein oder nur ein winziges, ausgegrautes „Anzeige"/„Sponsored"',
    'Das auffälligste, farbig gestaltete Bedienelement ist nicht das gesuchte — der echte Link steht klein und unscheinbar daneben',
    'Eine „Empfehlung" nennt durchgehend nur ein Produkt und verlinkt direkt in dessen Kauf- oder Download-Strecke',
    'Kennzeichnungspflichtige Angaben (bezahlte Partnerschaft, Anzeige) fehlen oder tauchen erst nach Scrollen oder Wegklicken auf',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
