import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: coordinated_inauthentic_amplification).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const coordinatedInauthenticAmplification: Technique = {
  id: 'coordinated_inauthentic_amplification',
  name: {
    de: 'Coordinated Inauthentic Amplification',
    en: 'Coordinated Inauthentic Amplification',
  },
  description: {
    de: 'Verdeckte, abgestimmte Verstärkung einer Botschaft durch viele scheinbar unabhängige Accounts, Bots oder Scheingruppen, die gemeinsam Reichweite, Konsens und Relevanz vortäuschen und so die Sichtbarkeits- und Trending-Mechanik einer Plattform ausnutzen.',
    en: 'Covert, coordinated amplification of a message by many seemingly independent accounts, bots or front groups acting in concert to fake reach, consensus and relevance — and to game a platform\'s visibility and trending mechanics.',
  },
  category: 'influence_ops',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Produkt-Launch auf X (vormals Twitter): Eine Growth-Agentur steuert für einen Hardware-Hersteller rund 200 gemietete und automatisierte Konten, die binnen einer Stunde denselben Launch-Post wortgleich weiterverbreiten und sich fast ausschließlich gegenseitig liken und retweeten, bis der Algorithmus das Produkt als Trend ausspielt. Die Konten treten nicht als eigenständige Personen mit eigener Geschichte auf — ihre einzige Funktion ist das synchrone, wechselseitige Hochspielen ein und derselben Botschaft, damit echte Nutzer den erzwungenen Trend für organische Popularität halten.',
    'Reputationssteuerung nach kritischer Presse: Der beauftragte Dienstleister eines Lebensmittelkonzerns lässt ein Netzwerk aus rund 80 zentral gesteuerten Konten unter jedem kritischen Beitrag zeitgleich dieselben zwei entlastenden Botschaften posten und sich gegenseitig hochvoten, sodass diese Kommentare ganz oben stehen und die kritischen nach unten drücken. Nicht einzelne, individuell ausgestaltete Kundenprofile erzeugen hier den Eindruck überwältigender Zustimmung, sondern die abgestimmte Masse gleichlautender, sich wechselseitig verstärkender Stimmen.',
    'App-Store-Bewertungen zum Marktstart einer Fintech-App: Der Wachstumsverantwortliche bucht einen Dienst, der 500 zentral gesteuerte Konten in derselben Woche fast wortgleiche Fünf-Sterne-Rezensionen posten und sich gegenseitig als „hilfreich" markieren lässt, um den Ranking-Algorithmus des Stores auf Sichtbarkeit zu drücken.',
  ],
  evidence: {
    studies: [
      'Eady et al. (2023) - Exposure to the Russian Internet Research Agency foreign influence campaign on Twitter in the 2016 US election and its relationship to attitudes and voting behavior',
      'Zerback et al. (2021) - The disconcerting potential of online disinformation: Persuasive effects of astroturfing comments and three strategies for inoculation against them',
      'Guess et al. (2023) - How do social media feed algorithms affect attitudes and behavior in an election campaign?',
    ],
    findings: 'Feldstudien zeigen bislang vor allem, dass koordinierte Verstärkung Reichweite und Sichtbarkeitsmetriken verzerren kann — ein belastbarer Nachweis für tatsächliche Einstellungs- oder Verhaltensänderung fehlt weitgehend. Eady et al. (2023) fanden für die IRA-Kampagne auf Twitter trotz hoher Reichweite keinen messbaren Effekt auf Einstellungen oder Wahlverhalten; Zerback et al. (2021) beobachteten für Astroturfing nur kleine, im Labor erzeugte Verschiebungen hin zu einem „manufactured consensus". Die Evidenz ist entsprechend schwach: hohes plausibles Schadens- und Skalierungspotenzial, aber unklare reale Wirkung (Konfidenz niedrig).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Feld- und Laborstudien (u. a. IRA-Twitter-Datensatz; Astroturfing-Experiment, Einzelland)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'repetition', 'astroturfing_sockpuppets', 'firehose_of_falsehood', 'agenda_setting'],
  warningNeurons: [
    'Viele scheinbar unabhängige Accounts posten dieselbe Botschaft nahezu wortgleich im selben engen Zeitfenster',
    'Auffälliges Missverhältnis zwischen hohen Reichweiten- oder Engagement-Zahlen und erkennbarer echter Beteiligung (Likes/Shares ohne inhaltliche Kommentare, das Netzwerk liked sich gegenseitig)',
    'Ein Thema „trendet" plötzlich, ohne dass eine reale Nachrichtenlage oder eine organische Diskussion es trägt',
    'Die beteiligten Profile wirken frisch, generisch oder wechselseitig verknüpft (gleiche Follower, synchrone Aktivitätsmuster, identische Vorlagen)',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
