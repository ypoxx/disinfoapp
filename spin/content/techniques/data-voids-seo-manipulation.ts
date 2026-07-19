import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: data_voids_seo_manipulation).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 *
 * evidenceTier 'weak': Taxonomie-Konfidenz niedrig, Evidenzstatus gemischt
 * (überwiegend beschreibend/technisch, teils Preprints). Daher keine
 * Wirkbehauptungen — der Eintrag erklärt den Ökosystem-Mechanismus und das
 * Erkennen, nicht einen gemessenen Persuasionseffekt.
 */
export const dataVoidsSeoManipulation: Technique = {
  id: 'data_voids_seo_manipulation',
  name: {
    de: 'Data Voids / SEO- & KI-Suche-Manipulation',
    en: 'Data Voids / SEO & AI Search Manipulation',
  },
  description: {
    de: 'Das gezielte Besetzen von Suchbegriffen, zu denen es kaum verlässliche Inhalte gibt („Data Voids"), damit die eigene Darstellung die Suchergebnisse oder KI-Antworten dominiert — besonders bei neuen, seltenen oder frisch geprägten Begriffen.',
    en: 'Deliberately occupying search terms that carry little reliable content ("data voids") so that one\'s own framing dominates the results or AI answers — especially for new, rare or freshly coined terms.',
  },
  category: 'digital_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Krisenkommunikation vor der erwarteten Berichterstattung: Die beauftragte Agentur registriert für einen neu geprägten Kampagnenbegriff („[Marke]-Gate") vorab FAQ-Seiten, Blogposts und ein Glossar und optimiert sie auf genau diese Suchphrase — so dass Journalistinnen, die den frisch kursierenden Begriff googeln, zuerst auf die vom Auftraggeber gerahmten Inhalte stoßen, bevor unabhängige Quellen dazu existieren.',
    'Content-Team eines Nahrungsergänzungsmittel-Herstellers mit Blick auf KI-Suchassistenten: Zu einer seltenen Wirkstoff-Frage, für die kaum Fachliteratur existiert, produziert das Team strukturierte Ratgeber-Seiten im Frage-Antwort-Format, gezielt so aufgebaut, dass Chatbots sie als Quelle zitieren — die dünne Studienlage zum Wirkstoff bleibt dabei unerwähnt.',
    'Reputationsprojekt für einen mittelständischen Zulieferer: Die SEO-Beauftragte stellt fest, dass zur Kombination aus Firmenname und einem laufenden Rechtsstreit fast keine Treffer existieren, und füllt diese Lücke mit einer Serie eigener Fachartikel und Presseseiten — damit Geschäftspartner beim Suchen ausschließlich die Unternehmensdarstellung finden.',
  ],
  evidence: {
    studies: [
      'Golebiewski & boyd (2019) - Data Voids: Where Missing Data Can Easily Be Exploited',
      'Robertson et al. (2025) - Data Voids and Warning Banners on Google Search',
      'Alyukov et al. (2025) - LLMs grooming or data voids? LLM-powered chatbot references to Kremlin disinformation reflect information gaps, not manipulation',
    ],
    findings: 'Golebiewski & boyd (2019) beschreiben Data Voids konzeptionell als Suchräume mit wenig verlässlichem Material, die sich besetzen lassen; Robertson et al. (2025) und Alyukov et al. (2025) zeigen an Such- und LLM-Systemen, dass solche Informationslücken den Zugang verzerren können — vieles davon ist jedoch strukturell und nicht zwingend absichtliche Manipulation. Die Befundlage ist gemischt und überwiegend beschreibend oder technisch (teils Preprints); belastbare Aussagen über die tatsächliche Endnutzer-Wirkung fehlen (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.6,
      sampleSize: 'Beschreibende und technische Studien, teils Preprints; keine Endnutzer-Wirkungsmessung',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['digital_influence', 'agenda_setting', 'illusory_truth_effect', 'confirmation_bias'],
  warningNeurons: [
    'Zu einem brandneuen oder sehr speziellen Suchbegriff dominieren plötzlich Inhalte einer einzigen Interessenpartei, bevor unabhängige Quellen existieren',
    'Seiten sind auffällig auf exakt eine seltene Suchphrase optimiert (FAQ-/Glossar-Format, wiederholte Wortlaut-Treffer), obwohl das Thema kaum Fachliteratur hat',
    'KI-Suchassistenten zitieren zu einer Nischenfrage immer wieder dieselbe herstellernahe Quelle als „die" Antwort',
    'Ein neu geprägter Begriff (Hashtag, „…-Gate", Produktname) kursiert und ist bereits durchoptimiert, kaum dass er auftaucht',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
