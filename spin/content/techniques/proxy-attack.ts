import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: proxy_attack).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Serious-Mode (Zwang & Kontrolle): nüchterner Ton, Fokus auf
 * Erkennen und Schutz der Betroffenen. Evidenz-Tier frontier: als
 * Begriffswissen gelehrt, keine bezifferten Wirkbehauptungen. Es gilt
 * Overlay-Schutz.
 */
export const proxyAttack: Technique = {
  id: 'proxy_attack',
  name: {
    de: 'Proxy-Angriff (Angriff durch Stellvertreter)',
    en: 'Proxy Attack (Attack by Proxy)',
  },
  description: {
    de: 'Ein Akteur lässt eine feindselige oder belastende Handlung von einem scheinbar unabhängigen Dritten — Mittelsleuten, einer Frontgruppe oder einem abstreitbaren Surrogat — ausführen, um selbst verborgen und unangreifbar zu bleiben (plausible deniability). Das Kennzeichen ist nicht der Angriff selbst, sondern seine Delegation an eine abstreitbare Stellvertretung.',
    en: 'An actor has a hostile or damaging action carried out by a seemingly independent third party — an intermediary, a front group or a deniable surrogate — so that the instigator stays hidden and unassailable (plausible deniability). The hallmark is not the attack itself but its delegation to a deniable stand-in.',
  },
  category: 'coercive_control',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Vor einer öffentlichen Vergabeentscheidung: Ein unterlegener Wettbewerber beauftragt und bezahlt verdeckt eine etablierte, unter eigenem Namen bekannte Anwaltskanzlei, die für einen ungenannten Mandanten belastende Gutachten erstellt, formale Beschwerden gegen den Favoriten bei der Vergabestelle einreicht und Fachjournalisten Hintergrundgespräche anbietet. Die Kanzlei ist ein realer, eigenständig handelnder Akteur; der Auftraggeber bleibt in allen Schriftsätzen ungenannt und beteuert, mit dem Vorgang nichts zu tun zu haben.',
    'Internes Konfliktverfahren: Eine Führungskraft geht eine unbequeme Mitarbeiterin nie selbst an, sondern bringt über gezielte Andeutungen zwei ihr ergebene Kollegen dazu, wiederholt formale Beschwerden gegen sie einzureichen. Nach außen wirkt es wie unabhängige Kritik von mehreren Seiten; die Führungskraft bleibt aus der Schusslinie und kann jede Verantwortung abstreiten.',
    'Umgang mit einem Kritiker: Ein Unternehmen will einen unbequemen Whistleblower unter Druck setzen, aber nicht selbst als Angreifer erscheinen. Es finanziert verdeckt die Abmahnungen und Klagen eines scheinbar unbeteiligten Dritten gegen ihn und tritt nach außen nur als besorgter Beobachter auf, der auf die „unabhängige" rechtliche Auseinandersetzung verweist.',
  ],
  evidence: {
    studies: [
      'von Senger (1991) - Strategeme: Lebens- und Überlebenslisten (Strategem 3: „Mit geliehenem Messer töten")',
    ],
    findings: 'Der Begriff beschreibt ein Vorgehen aus der klassischen Strategem-Tradition (von Senger 1991, „mit geliehenem Messer töten"): Eine feindselige Handlung wird an einen abstreitbaren Dritten delegiert, damit der Auftraggeber verborgen und unangreifbar bleibt. Die Grundlage ist definitorisch-historisch und qualitativ; ein empirisch gemessener Effekt oder eine bezifferte Wirksamkeit liegt nicht vor. Übertragbarkeit und Wirkung sind stark kontextabhängig (Evidenz: sehr gering).',
    uncertainty: {
      confidence: 0.2,
      sampleSize: 'Keine empirische Stichprobe (definitorisch/historisch)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['astroturfing_sockpuppets', 'coordinated_inauthentic_amplification', 'networked_harassment'],
  warningNeurons: [
    'Eine scheinbar unabhängige dritte Partei führt einen Angriff, der genau einem verdeckten Interessenten nützt',
    'Der offensichtlich Begünstigte bleibt auffällig unbeteiligt und verweist nur auf die „unabhängige" Quelle',
    'Trägerschaft, Auftrag oder Finanzierung des angreifenden Dritten sind nicht offengelegt oder werden verschleiert',
    'Auf die Frage nach Verantwortung wird auf Abstreitbarkeit ausgewichen („Damit haben wir nichts zu tun")',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
  seriousMode: true,
};
