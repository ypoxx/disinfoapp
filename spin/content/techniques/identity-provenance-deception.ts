import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: identity_provenance_deception).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const identityProvenanceDeception: Technique = {
  id: 'identity_provenance_deception',
  name: {
    de: 'Identitäts- und Herkunftstäuschung',
    en: 'Identity and Provenance Deception',
  },
  description: {
    de: 'Täuschung darüber, wer spricht und woher ein Inhalt stammt: erfundene Expertinnen, gekaperte Absender, als unabhängig getarnte Quellen, verschwiegene KI-Generierung oder irreführende Echtheitssignale. Anders als bei synthetischen Medien liegt der Hebel nicht in der Machart des Inhalts, sondern im manipulierten Vertrauen in Identität und Herkunft.',
    en: 'Deceiving audiences about who is speaking and where content comes from: invented experts, spoofed senders, outlets posing as independent, undisclosed AI generation, or misleading authenticity signals. Unlike synthetic media, the lever is not how the content was made but the manufactured trust in identity and origin.',
  },
  category: 'ai_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Gastbeitrags-Angebot per E-Mail an die Ressortleiterin eines Fachmagazins, mitten in einer laufenden Übernahmeschlacht: Ein „unabhängiger Branchenanalyst" liefert eine kritische Einordnung des Übernahmeziels samt Vita, Porträtfoto und Publikationsliste — die Gegenrecherche der Media-Relations-Beraterin des Zielunternehmens ergibt: Die genannte Beratungsfirma existiert nicht, kein Konferenzauftritt, keine Zitierungen, und die Dokument-Metadaten führen zur PR-Agentur des Bieters.',
    'Anruf einer Agenturjournalistin beim Pressesprecher eines börsennotierten Zulieferers, kurz vor Handelsschluss: Der Redaktion liegt eine „Ad-hoc-Mitteilung" des Unternehmens zu einem geplatzten Großauftrag vor — Logo, Layout und Sperrfrist-Vermerk stimmen, nur die Absenderdomain weicht in einem Buchstaben von der offiziellen Presse-Domain ab. Die Mitteilung stammt nicht aus dem Haus, der Kurs reagiert bereits.',
    'Landingpage-Abnahme vor Kampagnenstart: Die Projektleiterin der Digitalagentur präsentiert der Kommunikationsleiterin des Auftraggebers als Herzstück der Seite eine einzelne, ausführliche „Kundenstimme" — „Dr. Katrin M., Leiterin Einkauf, Maschinenbau", mit Porträtfoto und Verlinkung auf ein Berufsnetzwerk-Profil. Auf Nachfrage räumt die Projektleiterin ein: Die Person ist erfunden, das Foto KI-generiert, das Profil eigens dafür angelegt — online gehen soll die Stimme trotzdem als echte, überprüfbare Referenz. Der Hebel ist nicht die Zahl zustimmender Kunden, sondern die fingierte Identität samt gefälschter Prüfspur.',
  ],
  evidence: {
    studies: [
      'European Union (2024) - Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence',
      'Coalition for Content Provenance and Authenticity (2026) - C2PA Technical Specification v2.4',
      'Nemecek et al. (2026) - Authenticated Contradictions from Desynchronized Provenance and Watermarking'
    ],
    findings: 'Der Forschungsstand ist begrenzt: Regulatorische und technische Quellen — EU AI Act (2024), FTC Impersonation Rule (2024), C2PA-Spezifikation — adressieren Identitäts- und Herkunftstäuschung als Risiko, belegen aber keine Effektstärken. Provenance-Signale wie C2PA-Manifeste und Wasserzeichen sind komplementäre Vertrauensinformationen, keine Echtheitsgarantie; ob Empfänger manipulierte Herkunft damit zuverlässig erkennen, ist empirisch offen (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Keine Effektstudien; regulatorische und technische Quellen',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['synthetic_media', 'integrity_clash_laundering', 'voice_cloning_vishing'],
  warningNeurons: [
    'Absenderdomain, Handle oder Impressum weichen minimal vom offiziellen Original ab (Buchstabendreher, Zusätze wie „-presse" oder „-news")',
    'Expertenprofil ohne unabhängig prüfbare Spuren: keine Zitierungen, keine Konferenzauftritte, Vita nur selbstreferenziell',
    'Eine „unabhängige" Quelle, deren Impressum, Domain-Registrierung oder Finanzierung zum Absender der Botschaft zurückführt',
    'Echtheitssignale (Verifikationshaken, Logo, Siegel) sollen die Gegenprüfung über einen zweiten, offiziellen Kanal ersetzen — genau darauf setzt die Täuschung',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
