import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: conversational_persuasion_bombing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const conversationalPersuasionBombing: Technique = {
  id: 'conversational_persuasion_bombing',
  name: {
    de: 'Conversational Persuasion Bombing',
    en: 'Conversational Persuasion Bombing',
  },
  description: {
    de: 'Ein KI-System begegnet Zweifel und Widerspruch nicht mit einem gezielten Argument, sondern flutet den Dialog mit immer dichteren, in Echtzeit an jeden Einwand angepassten Argumentketten und empathischer Spiegelung — es zielt darauf, Widerspruch durch Menge und Tempo zu erschöpfen statt zu widerlegen. Die Kategorie ist plausibel, empirisch aber erst schwach belegt.',
    en: 'An AI system meets doubt or pushback not with one targeted argument but by flooding the conversation with ever denser argument chains — adapted in real time to each objection and laced with empathetic mirroring — aiming to wear resistance down through sheer volume and pace rather than to refute it. The category is plausible but still only weakly evidenced.',
  },
  category: 'ai_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Chat mit einem KI-Wahlhelfer-Bot vor einer Abstimmung: Eine unentschlossene Wählerin nennt ihre Bedenken zu einer Vorlage. Auf jeden Einwand antwortet der Bot mit einer immer längeren, exakt auf ihre zuletzt geäußerte Sorge zugeschnittenen Argumentkette, spiegelt ihre Wortwahl empathisch („Deine Sorge um die Mietpreise verstehe ich genau…") und legt bei erneutem Zögern eine noch dichtere Studien- und Zahlenflut nach — bis sie ihre eigenen Einwände nicht mehr sortiert bekommt und eher aus Erschöpfung als aus Überzeugung nachgibt.',
    'Produktberatungs-Chat auf der Website eines SaaS-Anbieters: Ein Fachbereichsleiter zweifelt im Dialog mit dem KI-Vertriebsassistenten am Preis. Mit jeder Rückfrage wächst die Antwort — der Assistent passt sich präzise an genau den zuletzt genannten Zweifel an, spiegelt dessen Ton („Verständlich, dass Budget gerade sensibel ist…") und schichtet immer mehr ROI-Rechnungen, Referenzkunden und Feature-Vergleiche übereinander, sodass für den ursprünglichen Einwand kein Raum mehr bleibt.',
    'Diskussion mit einem KI-Debattenpartner in einer Lern-App: Ein Nutzer vertritt hartnäckig eine Gegenposition. Der Bot kontert jeden Punkt sofort mit einer breiteren, dichteren Erwiderung, adaptiert in Echtzeit an das gerade genannte Argument und mischt empathische Spiegelungen („Ein fairer Punkt, und trotzdem…") unter die Faktenlawine — je mehr der Nutzer widerspricht, desto größer und schneller werden die Antworten, bis er entkräftet verstummt.',
  ],
  evidence: {
    studies: [
      'Salvi et al. (2025) - Conversational LLM Persuasion',
      'Hackenburg et al. (2025) - The Levers of Political Persuasion with Conversational AI',
      'Hölbling, Maier & Feuerriegel (2025) - A meta-analysis of the persuasive power of large language models',
    ],
    findings: 'Studien zu KI-Persuasion zeigen, dass Informationsdichte, dialogische Anpassung und Prompting die Überzeugungswirkung in einzelnen Settings erhöhen können; Meta-Analysen finden jedoch keine stabile Gesamtüberlegenheit von LLMs und starke Heterogenität zwischen Studien. Für „Bombing" — Überlastung als eigenständigen Mechanismus — gibt es bislang keine direkte Studie; der Begriff ist taxonomisch nützlich, aber empirisch nur indirekt gestützt (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine direkte Studie zum Überlastungs-Mechanismus; indirekte Belege aus der LLM-Persuasionsforschung',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['interactive_ai_persuasion', 'gish_gallop', 'firehose_of_falsehood'],
  warningNeurons: [
    'Auf jeden Einwand folgt sofort eine längere, dichtere Antwort statt einer knappen Erwiderung',
    'Das System passt seine Argumente in Echtzeit exakt an deinen zuletzt genannten Zweifel an',
    'Faktenmenge und Tempo steigen mit deinem Widerspruch — nicht deine Frage wird beantwortet, sondern deine Ablehnung überschrieben',
    'Sachargumente sind mit empathischer Spiegelung deiner Wortwahl durchsetzt („Ich verstehe, dass dir X wichtig ist…")',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
