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
    en: 'Advertising that presents itself as editorial content, a recommendation, or an interface element while concealing its paid, commercial nature — an advertorial in editorial styling, or a download button that is really a booked ad. It trades on the trust people extend to non-promotional content and functional elements.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Fachportal für Logistik: Die Social-Media-Managerin eines Software-Anbieters bucht beim Vermarkter des Portals einen Beitrag, der in Autorenzeile, Bebilderung und Rubrik („Markt-Analyse") exakt wie die redaktionellen Einordnungen des Hauses aussieht und durchgehend die eigene Plattform als Testsieger darstellt; der Hinweis „Anzeige" steht in hellgrauer Kleinschrift über dem oberen Bildrand. Ein mitlesender Einkaufsleiter zitiert den Beitrag in seiner internen Beschaffungsempfehlung — für ihn eine unabhängige Einordnung der Redaktion.',
    'Freeware-Downloadportal: Ein Werbenetzwerk platziert im Auftrag eines Software-Vermarkters auf der Downloadseite eine Anzeige, die in Form, Farbe und Beschriftung exakt wie der Download-Button des Portals gestaltet ist. Ein IT-Administrator sucht ein PDF-Werkzeug, klickt den großen grünen Button „Jetzt herunterladen" statt des kleinen grauen Portal-Links darunter — und installiert das beworbene, kostenpflichtige Fremdprodukt. Die Anzeige hat sich als Bedienelement der Seite ausgegeben.',
    'Mitglieder-Newsletter eines Branchenverbands: Zwischen zwei redaktionellen Kurzmeldungen steht im identischen Layout — gleiche Überschriftentype, gleiche Rubrik „Kurz notiert" — ein von einem Weiterbildungsanbieter bezahlter Textbeitrag, der dessen Seminarangebot empfiehlt; die Redakteurin des Verbands hat ihn als bezahlte Platzierung nirgends gekennzeichnet. Die Mitglieder lesen ihn wie die Verbandsmeldungen daneben.',
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
