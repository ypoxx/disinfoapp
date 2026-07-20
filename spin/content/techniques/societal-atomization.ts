import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: societal_atomization).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Serious-Mode (Zwang & Kontrolle): nüchterner Ton, kein spielerisches
 * Framing; die Darstellung fokussiert auf Erkennen und Schutz der Betroffenen.
 * Evidenz-Tier weak: keine quantifizierten Wirkbehauptungen. Es gilt Overlay-Schutz.
 */
export const societalAtomization: Technique = {
  id: 'societal_atomization',
  name: {
    de: 'Atomisierung / Vereinzelung',
    en: 'Societal Atomization',
  },
  description: {
    de: 'Gezieltes Schwächen der sozialen Bindungen und Zwischenstrukturen (Teams, Vereine, informelle Netzwerke), die Menschen verbinden, sodass Einzelne vereinzeln und die Fähigkeit zu gemeinsamem Handeln verlieren. Anders als bei Teile-und-herrsche werden nicht zwei Gruppen gegeneinander gestellt und kein Feindbild benannt — die verbindenden Strukturen selbst werden aufgelöst, bis der Einzelne allein und ohne Rückhalt dasteht.',
    en: 'Deliberately weakening the social bonds and intermediary structures (teams, associations, informal networks) that connect people, so that individuals become isolated and lose the capacity to act together. Unlike divide-and-rule, it pits no two groups against each other and names no enemy — it dissolves the connective structures themselves until the individual stands alone, without any backing.',
  },
  category: 'coercive_control',
  difficulty: 'advanced',
  effectiveness: 'low',
  examples: [
    'Reorganisations-Ankündigung der Geschäftsführung an die gesamte Belegschaft: Die neue „Fokus"-Struktur, in wertschätzendem Ton an alle Abteilungen zugleich verschickt, schafft Teamküchen, das monatliche Belegschaftsforum, den abteilungsübergreifenden Chat und die gemeinsame Mittagspause ab. Jede und jeder arbeitet künftig an persönlichen Zielen, die ausschließlich im 1:1 mit der eigenen Führungskraft besprochen werden — „weniger Ablenkung, mehr Eigenverantwortung". Die Umstellung wird der ganzen Belegschaft als Gewinn präsentiert; von den Wegen, auf denen sich die Beschäftigten bisher quer austauschen und gemeinsam etwas einfordern konnten, bleibt keiner — nur noch der Draht nach oben.',
    'Strategiepapier eines Arbeitgeberverbands, der eine Kommunikationsagentur mit einer öffentlichen Kampagne an die breite Öffentlichkeit beauftragt: Über Monate sollen Anzeigen und Meinungsbeiträge in freundlichem, aspirationalem Ton die Botschaft streuen, dass Gewerkschaften, Vereine und Nachbarschaftsinitiativen aus der Zeit gefallen seien und man am weitesten komme, wenn man sich ganz auf sich selbst verlässt. Die Motive zeigen zufriedene Einzelne, die es „allein geschafft" haben; die ganze Kampagne feiert das Für-sich-Vorankommen und wirbt dafür, sich aus den verbindenden Strukturen zurückzuziehen.',
    'Umbau der internen Kommunikation nach einem Führungswechsel: Der neue Bereichsleiter schließt die offenen Chat-Kanäle und das Intranet-Schwarze-Brett und leitet fortan jede Abstimmung über getrennte 1:1-Gespräche nach oben. Horizontale Kanäle zwischen den Kolleg:innen fallen weg; niemand weiß mehr, ob andere dieselben Fragen haben — jede und jeder steht mit dem eigenen Anliegen allein der Führung gegenüber.',
  ],
  evidence: {
    studies: [
      'Arendt (1951) - The Origins of Totalitarianism',
    ],
    findings: 'Der Begriff geht auf Arendt (1951) zurück: isolierte, bindungslose Individuen gelten als Vorbedingung totalitärer Mobilisierung, weil Vereinzelung die Fähigkeit zu kollektiver Gegenwehr untergräbt. Die Grundlage ist politiktheoretisch und historisch, nicht experimentell — es gibt keinen quantifizierten Wirkungsnachweis und keine kontrollierte Effektmessung. Der Eintrag beschreibt ein wiedererkennbares Muster, keine Technik mit gesicherter Wirkung (niedrige Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Politiktheoretisch/historisch belegt; kein quantifizierter Wirkungsnachweis',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['divide_and_rule'],
  warningNeurons: [
    'Verbindende Strukturen (gemeinsame Räume, Foren, Zwischengruppen) werden nacheinander abgebaut, ohne dass ein Ersatz für den horizontalen Austausch entsteht',
    'Kommunikation läuft zunehmend nur noch vertikal (1:1 nach oben); die Kanäle zwischen Gleichgestellten verschwinden',
    'Kein gemeinsamer Gegner wird benannt und keine zwei Gruppen werden gegeneinander gestellt — die Bindungen selbst lösen sich auf, der Einzelne steht allein',
    'Selbstorganisation und gemeinsames Handeln werden als überholt oder verdächtig dargestellt, das Für-sich-Stehen als Ideal',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
