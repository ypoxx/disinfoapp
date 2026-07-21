import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: attention_engagement_loops).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const attentionEngagementLoops: Technique = {
  id: 'attention_engagement_loops',
  name: {
    de: 'Attention & Engagement Loops',
    en: 'Attention and Engagement Loops',
  },
  description: {
    de: 'Bindungsarchitektur digitaler Produkte: Endlose Feeds, Autoplay, laufend nachgeladene Empfehlungen und Rückhol-Benachrichtigungen greifen als Kreislauf aus Einstieg, Weiternutzung und Wiederkehr ineinander — natürliche Endpunkte werden entfernt, Rückkehranlässe erzeugt. Der Begriff meint diese Schleifen-Architektur als System, nicht eine einzelne Spielmechanik.',
    en: 'The retention architecture of digital products: endless feeds, autoplay, continuously topped-up recommendations, and win-back notifications interlock into a loop of entry, continued use, and return — natural stopping points are removed and reasons to come back are manufactured. The term names this loop architecture as a system, not any single game mechanic.',
  },
  category: 'digital_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Wettbewerbs-Benchmarking im Content-Team eines Softwareanbieters: Die Videoredakteurin öffnet die Videoplattform, um einen einzigen Recruiting-Clip des Wettbewerbers zu sichten. Nach dem Abspann startet Autoplay ohne ihr Zutun das nächste empfohlene Video, die Seitenleiste lädt beim Scrollen laufend neue Vorschläge nach — vierzig Minuten später sucht sie den ursprünglichen Clip im Verlauf, das geplante Zeitfenster fürs Benchmarking ist aufgebraucht.',
    'Community-Management bei einem Energieversorger: Der Werkstudent soll in der Plattform-App eine einzelne Nutzerfrage zur Abschlagszahlung beantworten. Die Benachrichtigung führt nicht zum Kommentar, sondern auf die Startseite des Feeds; dort startet das oberste Video von selbst, beim Scrollen lädt die Seite laufend weitere Beiträge nach, und beim Schließen bittet die App um die Erlaubnis für Rückhol-Nachrichten nach Inaktivität. Nichts davon ist dringlich oder aufwühlend — es sind gewöhnliche Beiträge ohne Nachrichtenwert. Was ihn hält, ist die Architektur ohne Ausgang: Einstieg umgeleitet, Weiterführung nachgeladen, der nächste Einstieg beim Verlassen gleich vorbereitet.',
    'Morgendliche Themensichtung für den Führungskräfte-Newsletter eines Chemiekonzerns: Der Referent Unternehmenskommunikation will im Business-Netzwerk die Beiträge von fünf Branchenkontakten prüfen. Der Feed kennt weder ein Ende noch eine „Alles gesehen"-Marke, und bei jedem Öffnen sortiert der Algorithmus neue Beiträge nach oben — den Zustand „fertig" kann er nicht erreichen, die Sichtung wächst Woche für Woche.',
  ],
  evidence: {
    studies: [
      'OECD (2022) - Dark Commercial Patterns'
    ],
    findings: 'Die Evidenz stammt vor allem aus Policy-Synthesen: Die OECD (2022) beschreibt engagement-orientierte Interface-Muster als verbreitete kommerzielle Praxis in der Nachbarschaft der Dark Patterns. Dass solche Schleifen-Architekturen Aufmerksamkeit und Rückkehrverhalten beeinflussen können, ist damit nur indirekt gestützt; belastbare Effektstärken aus kontrollierten Studien fehlen, und nicht jedes Engagement-Design ist manipulativ. Insgesamt niedrige Evidenzsicherheit bei hoher Kontextabhängigkeit.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['dark_patterns', 'gamification_variable_reward', 'doomscrolling_fomo_engineering'],
  warningNeurons: [
    'Kein erreichbarer Endpunkt: Feed, Autoplay oder Empfehlungen laufen weiter, einen Zustand „fertig" sieht das Design nicht vor',
    'Benachrichtigungen führen nicht zum gemeldeten Inhalt, sondern auf die Startseite des Feeds',
    'Die App erzeugt ihre Rückkehranlässe selbst — Rückhol-Nachrichten nach Inaktivität, Zusammenfassungen, „für dich" nachgelegte Vorschläge',
    'Du hast die Sitzung für eine konkrete Aufgabe begonnen und beendest sie an einem ganz anderen Ort — regelmäßig, nicht als Ausnahme',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
