import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: astroturfing_sockpuppets).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const astroturfingSockpuppets: Technique = {
  id: 'astroturfing_sockpuppets',
  name: {
    de: 'Astroturfing / Sockpuppets',
    en: 'Astroturfing / Sock Puppets',
  },
  description: {
    de: 'Verdeckt koordinierte Kommunikation, die künstlichen Konsens erzeugt: gesteuerte Pseudo-Graswurzel-Kampagnen oder mehrere Schein-Identitäten (Sockpuppets) täuschen unabhängige, breite Unterstützung vor und verschleiern die gemeinsame Trägerschaft dahinter.',
    en: 'Covertly coordinated communication that manufactures the appearance of consensus: orchestrated pseudo-grassroots campaigns or multiple fake identities (sock puppets) simulate independent, broad-based support while hiding the single party running them.',
  },
  category: 'influence_ops',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Bürgerinitiative pro Windpark in der Lokalpresse: Unter dem Namen „Rückenwind für die Region" treten in Leserbriefen und Kommentarspalten ein Dutzend scheinbar unabhängige Anwohner mit je eigenem Namen und eigener Alltagsgeschichte auf und werben für das Projekt. Tatsächlich hat die Projektentwicklerin die Initiative gegründet und finanziert und steuert alle Stimmen aus einer Hand; die gemeinsame Trägerschaft wird nirgends offengelegt.',
    'App-Store-Bewertungen zu einer Banking-App: Eine beauftragte Agentur legt über Wochen Dutzende Profile mit erfundenen Nutzernamen an, die sich als unabhängige Kundinnen ausgeben und die App in jeweils eigenen, individuell formulierten Rezensionen loben. Es werden keine bestehenden Beiträge geteilt oder hochgevotet, sondern durchweg neue Schein-Kundinnen erfunden; alle Konten laufen aus demselben Team, die Auftraggeberin bleibt ungenannt.',
    'Fachforum für IT-Sicherheit vor einer Produkteinführung: Eine PR-Agentur betreibt im Auftrag eines Softwareherstellers ein Dutzend Profile, die sich als unabhängige Administratoren aus verschiedenen Unternehmen ausgeben — je mit erfundenem Berufsprofil und eigener Erfahrungsgeschichte — und das neue Tool als zufriedene Praktiker empfehlen. Die zentrale Steuerung und die Auftraggeberschaft bleiben verdeckt.',
  ],
  evidence: {
    studies: [
      'Rogers & Righetti (2025) - Coordinated inauthentic behaviour on Facebook? A typology of manufactured attention',
      'Zerback, Töpfl & Knöpfle (2021) - The disconcerting potential of online disinformation: Persuasive effects of astroturfing comments and three strategies for inoculation against them',
    ],
    findings: 'Zerback et al. (2021) zeigen in einer Laborstudie (Einzelland), dass Astroturfing-Kommentare Meinungen leicht verschieben und Unsicherheit erhöhen können; die Effekte sind klein, wirken über Social Proof und lassen sich durch Inokulation (Vorwarnung) dämpfen. Rogers & Righetti (2025) liefern eine überwiegend beschreibende Typologie koordinierter, künstlich erzeugter Aufmerksamkeit auf Plattformen. Die Belege sind begrenzt (Labor, WEIRD-Stichproben, deskriptiv); Astroturfing ist eher als Koordinations- und Infrastrukturhebel für Social Proof zu verstehen denn als starker Direkteffekt (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Einzelne Laborstudie (Zerback et al. 2021) plus deskriptive Typologie',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['coordinated_inauthentic_amplification', 'social_proof', 'fake_social_proof', 'identity_provenance_deception'],
  warningNeurons: [
    'Viele scheinbar unabhängige Stimmen posten in dieselbe Richtung, oft in einem engen Zeitfenster und mit auffällig ähnlichen Formulierungen',
    'Neue Accounts ohne Historie, mit generischen Profilbildern, die fast ausschließlich zu einem Thema oder einer Marke aktiv sind',
    'Eine angeblich spontane Bürger- oder Kundeninitiative, deren Trägerschaft, Finanzierung oder Kontaktweg sich nicht offenlegen lässt',
    'Gleichförmiges Engagement (Likes, Shares, Fünf-Sterne-Bewertungen) ohne die übliche organische, auch widersprüchliche Diskussion',
  ],
  taxonomyGroups: ['manufactured_attention', 'coordinated_inauthentic_behavior', 'social_influence'],
  evidenceTier: 'weak',
};
