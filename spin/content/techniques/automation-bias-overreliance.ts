import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: automation_bias_overreliance).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const automationBiasOverreliance: Technique = {
  id: 'automation_bias_overreliance',
  name: {
    de: 'Automation Bias (Übervertrauen in Systeme)',
    en: 'Automation Bias (Over-Reliance)',
  },
  description: {
    de: 'Die Tendenz, Ausgaben automatisierter Systeme — vom Monitoring-Dashboard bis zum KI-Assistenten — mehr zu trauen als der eigenen Prüfung: Was das System nicht meldet, wird übersehen (Auslassungsfehler), was es empfiehlt, ungeprüft übernommen (Übernahmefehler). Die Schwachstelle liegt beim Nutzer, nicht im System — und betrifft Laien wie Experten.',
    en: 'The tendency to trust the output of automated systems — from monitoring dashboards to AI assistants — over one\'s own checking: what the system fails to flag goes unnoticed (omission errors), what it recommends gets adopted unverified (commission errors). The vulnerability sits with the user, not the system — and affects novices and experts alike.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Morgenlage im Newsroom eines Energiekonzerns: Der Pressereferent meldet dem Sprecher, in einer regionalen Facebook-Gruppe formiere sich Protest gegen die Bauarbeiten. Der Sprecher winkt ab — das KI-Monitoring stehe für das Projekt auf „unauffällig", das hätte angeschlagen. Drei Tage später zitiert die Lokalzeitung aus der Gruppe: Das Tool hatte sie nie erfasst; der direkte Hinweis wurde der stillen Dashboard-Anzeige geopfert (Auslassungsfehler).',
    'Redaktionsschluss für den Vorstands-Newsletter: Die Referentin Interne Kommunikation lässt den KI-Assistenten die Kennzahlen aus dem Quartalsbericht ziehen. Eine Wachstumszahl kommt ihr zu hoch vor — aber das Modell hat den Bericht ja „im Kontext", also übernimmt sie den Wert unter Zeitdruck ungeprüft in den Versand. Am nächsten Morgen korrigiert das Controlling: Die Zahl stammte aus der Vorjahrestabelle (Übernahmefehler).',
    'Krisencall bei einem Lebensmittelhersteller: Ein Video, das angeblich Hygienemängel im Werk zeigt, kursiert auf TikTok. Das Verifikationstool der Agentur meldet „92 % wahrscheinlich authentisch", woraufhin der Kommunikationschef die Verteidigungslinie kippt und eine Entschuldigung vorbereiten lässt — ohne die Werkleitung anzurufen, die das Video an der gezeigten, längst umgebauten Maschinenhalle sofort als Fremdmaterial erkannt hätte. Der Konfidenzwert ersetzte die naheliegende menschliche Prüfung.',
  ],
  evidence: {
    studies: [
      'Parasuraman et al. (2010) - Complacency and Bias in Human Use of Automation: An Attentional Integration'
    ],
    findings: 'Parasuraman & Manzey (2010) integrieren in einem Review empirische Studien zu Automation Bias und Complacency: Nutzer übernehmen Empfehlungen automatisierter Systeme auch dann, wenn eigene Informationen dagegensprechen (Übernahmefehler), und übersehen Ausfälle der Automatik, weil sie deren Ausgaben nicht mehr gegenprüfen (Auslassungsfehler). Der Effekt tritt bei Laien wie Experten auf, verstärkt sich unter Mehrfachbelastung und lässt sich durch einfaches Training kaum abstellen. Die Befunde stammen überwiegend aus Kontroll- und Überwachungsaufgaben (etwa Luftfahrt und Medizin); wie stark der Effekt im Arbeitsalltag mit KI-Assistenten ausfällt, ist bislang weniger gut vermessen (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Review empirischer Studien (Kontroll- und Überwachungsaufgaben)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['sycophancy'],
  warningNeurons: [
    'Du übernimmst eine Systemausgabe, obwohl dir ein Detail daran falsch vorkommt — und begründest das mit dem Werkzeug („das Tool hat ja den Bericht")',
    '„Kein Alarm" wird als „kein Problem" gelesen: Die stille Dashboard-Anzeige ersetzt die eigene Prüfung, statt sie zu ergänzen',
    'Ein direkter menschlicher Hinweis wird verworfen, weil das System ihn nicht bestätigt',
    'Unter Zeitdruck und Mehrfachlast entfällt die Stichprobe gegen die Originalquelle zuerst — genau dann steigt die Fehlerquote',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
