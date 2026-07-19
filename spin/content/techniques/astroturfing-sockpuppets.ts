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
    'Bürgerinitiative pro Windpark in der Lokalpresse: Unter dem Namen „Rückenwind für die Region" treten in Leserbriefen und Kommentarspalten scheinbar unabhängige Anwohner mit eigenen Namen und Alltagsgeschichten auf. Tatsächlich ist die Initiative von der Projektentwicklerin gegründet und finanziert; ihre Trägerschaft wird nirgends offengelegt.',
    'App-Store-Bewertungen zu einer Banking-App: Eine beauftragte Agentur legt über Wochen Dutzende Profile mit erfundenen Nutzernamen an, die sich als unabhängige Kundinnen ausgeben und die App in individuellen Texten loben. Gesteuert werden alle Konten aus demselben Team, die Auftraggeberin bleibt ungenannt.',
    'Wahlkampf auf X: Ein Team im Auftrag einer Kampagne betreibt fünfzehn Accounts mit gefälschten Alltagsbiografien („Krankenpflegerin aus Kassel", „Familienvater aus Ulm"), die sich gegenseitig bestätigen und dieselbe Botschaft als spontane Wählerstimmen verbreiten. Die gemeinsame Steuerung ist verdeckt.',
  ],
  evidence: {
    studies: [
      'Rogers & Righetti (2025) - Coordinated inauthentic behaviour on Facebook? A typology of manufactured attention',
      'Zerback, Töpfl & Knöpfle (2021) - The disconcerting potential of online disinformation: Persuasive effects of astroturfing comments and three strategies for inoculation against them',
    ],
    findings: 'Zerback et al. (2021) zeigen in einer Laborstudie (Einzelland), dass Astroturfing-Kommentare Meinungen leicht verschieben und Unsicherheit erhöhen können; die Effekte sind klein, wirken über sozialen Beweis und lassen sich durch Inokulation (Vorwarnung) dämpfen. Rogers & Righetti (2025) liefern eine überwiegend beschreibende Typologie koordinierter, künstlich erzeugter Aufmerksamkeit auf Plattformen. Die Belege sind begrenzt (Labor, WEIRD-Stichproben, deskriptiv); Astroturfing ist eher als Koordinations- und Infrastrukturhebel für sozialen Beweis zu verstehen denn als starker Direkteffekt (geringe Konfidenz).',
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
