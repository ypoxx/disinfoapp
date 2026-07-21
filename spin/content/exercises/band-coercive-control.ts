// Band-Übung ADVANCED für coercive_control (Coercive Control / Zwang und Kontrolle).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente, kein "legitim einsetzen"; die Übung prüft NUR Erkennen und
// Schutz der Betroffenen. Evidenz-Tier weak: keine Wirkbehauptungen.
// Zielband ADVANCED: Technik subtil/eingebettet (keine Cue-Wörter wie
// "Kontrolle", "Überwachung", "Regel", "Sanktion", "Isolation"), rein
// behavioral geschildert, Near-Miss-Distraktoren, Multi-Satz-Szenario,
// blinde Klassifikation. Setting bewusst anders als die drei
// wave6-Übungen (dort Beratungs-/Anamnese-Kontext, betroffene Person
// schildert selbst): hier die Außenperspektive einer Kollegin, die über
// Monate stille Verschiebungen bemerkt.
// relatedTechniques nur mit in content/techniques/index.ts registrierten IDs.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const bandCoerciveControl: Exercise[] = [
  {
    id: 'band-coercive_control-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster passt am genauesten?',
      en: 'Which pattern fits most precisely?',
    },
    scenario: {
      de: 'Rückblick auf ein Dreivierteljahr in deinem Redaktionsteam: An einer Kollegin, mit der du früher oft nach Feierabend etwas trinken warst, fällt dir eine Reihe kleiner Verschiebungen auf. Ihr Partner, den sie als sehr fürsorglich beschreibt, schreibt ihr über den Tag verteilt Dutzende Nachrichten; sie antwortet jedes Mal binnen Sekunden, „sonst macht er sich Sorgen". Team-Abende sagt sie inzwischen fast immer kurzfristig ab. Als du sie neulich abends anrufen wolltest, bat sie dich, das über die Arbeitsmail zu regeln — er lese auf ihrem Handy ohnehin mit, und das erspare Rückfragen. Die Bahnfahrt zur Fachkonferenz begründete sie dir gegenüber in einer Ausführlichkeit, als lege sie jemandem eine Quittung vor. Jedes Detail hat für sich eine harmlose Erklärung; in der Summe hat sich ihr Radius, seit du sie kennst, still zusammengezogen — ohne dass je ein lauter Streit, eine Drohung oder ein sichtbarer Vorfall dazwischenlag.',
      en: 'Looking back over the past nine months in your editorial team: in a colleague you used to grab an after-work drink with, you notice a series of small shifts. Her partner, whom she describes as very caring, texts her dozens of times over the course of a day; she replies within seconds every time, "otherwise he worries". These days she cancels team evenings at short notice almost every time. When you tried to phone her one evening recently, she asked you to handle it over her work email — he reads her messages anyway, and this saves follow-up questions. She justified the train trip to a trade conference to you in the kind of detail you would provide when presenting a receipt as proof. Each detail has a harmless explanation on its own; taken together, her freedom of movement has quietly narrowed for as long as you have known her — without there ever having been a loud argument, a threat, or any visible incident.',
    },
    options: [
      { de: 'Love Bombing (überwältigende Zuwendung als Bindungshebel)', en: 'Love bombing (overwhelming affection as a bonding lever)' },
      { de: 'Coercive Control (Zwang und Kontrolle)', en: 'Coercive control' },
      { de: 'Salami-Taktik (Gradualismus: Grenzen in kaum merklichen Einzelschritten verschieben)', en: 'Salami tactics (gradualism: shifting limits in barely perceptible single steps)' },
      { de: 'Klassische/operante Konditionierung (Verhalten über Belohnung und Bestrafung formen)', en: 'Classical/operant conditioning (shaping behaviour through reward and punishment)' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Coercive Control (Zwang und Kontrolle): Der Hebel wirkt nicht über einen einzelnen Vorfall, sondern über das Muster als Ganzes. Viele je harmlose Vorgaben greifen ineinander und schnüren den Handlungsspielraum zu. Dass alles als Fürsorge gerahmt ist, gehört zum Muster und widerlegt es nicht. Daran erkennst du es: das dichte Alltagsregime ohne einen einzigen lauten Vorfall, die als „Sorge" gerahmte Dauererreichbarkeit samt Mitlesen auf dem Handy und das fortschreitende Abschneiden eigener Kontakte. Schutz: Der eigentliche Hebel ist Isolation. Halte deinen Kontakt zur Kollegin aktiv und niedrigschwellig, ohne sie unter Druck zu setzen, und biete Wege an, die nicht mitgelesen werden. Verweise behutsam auf spezialisierte Beratung (Hilfetelefon Gewalt gegen Frauen, Fachberatungsstelle) und überlass ihr Tempo und Entscheidung; überstürztes Drängen von außen kann die Lage für sie verschärfen. Love Bombing lag am nächsten, weil die Dutzenden Nachrichten und die betonte Fürsorge wie überwältigende Zuwendung aussehen. Love Bombing ist aber typischerweise eine anfängliche Idealisierungsphase, die überschwänglich bindet. Hier folgt der Zuwendung keine Idealisierung, sondern eine dauerhafte Engführung des Spielraums, also der Kontroll- statt der Werbungshebel. Salami-Taktik wirkte plausibel, weil sich alles in kaum merklichen Einzelschritten vollzieht. Gradualismus beschreibt aber die Methode der schrittweisen Verschiebung, nicht das Beziehungsverhältnis dahinter. Das schrittweise Vorgehen ist hier nur die Gangart eines umfassenden Kontrollregimes, dessen Kern die Autonomiebeschneidung im Nahverhältnis ist. Konditionierung wirkte plausibel, weil „sonst macht er sich Sorgen" nach Steuerung über Belohnung und Bestrafung klingt. Operante Konditionierung benennt aber den Lernmechanismus einzelner Verhaltensweisen, während Coercive Control das ganze Regime aus Regeln, Überwachung, Isolation und Rechenschaft meint. Belohnung und Sanktion sind darin nur zwei von mehreren Werkzeugen.',
      en: 'Coercive control (Zwang und Kontrolle): the lever works not through any single incident but through the pattern as a whole. Many individually harmless demands interlock and close off her room to act. The fact that all of it is framed as care is part of the pattern, not evidence against it. How to spot it: the dense everyday regime without a single loud incident, the constant availability framed as "worry" together with his reading of her phone, and the progressive cutting-off of her own contacts. Protection: the real lever is isolation. Keep your contact with your colleague active and low-threshold without putting her under pressure, and offer channels that are not monitored. Point gently to specialist counselling (a domestic-violence helpline or advice centre) and leave the pace and the decision to her; outside pressure to act quickly can make her situation worse. Love bombing was the closest call because the dozens of messages and the emphasised care look like overwhelming affection. But love bombing is typically an early idealisation phase that binds through effusiveness. Here the attention is followed not by idealisation but by a lasting narrowing of her latitude, that is, the control lever rather than the courtship one. Salami tactics seemed plausible because everything unfolds in barely perceptible single steps. But gradualism describes the method of incremental shifting, not the relationship behind it. Here the step-by-step approach is merely the tempo of a comprehensive regime of control whose core is the curtailment of autonomy within a close relationship. Conditioning seemed plausible because "otherwise he worries" sounds like steering through reward and punishment. But operant conditioning names the learning mechanism of individual behaviours, whereas coercive control means the entire regime of rules, surveillance, isolation and accounting. Reward and sanction are only two tools among several.',
    },
    points: 10,
    primaryTechniqueId: 'coercive_control',
    relatedTechniques: ['coercive_control', 'love_bombing', 'salami_tactics_gradualism', 'conditioning_classical_operant'],
  },
];
