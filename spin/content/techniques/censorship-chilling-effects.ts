import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: censorship_chilling_effects).
 * Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
 * Elemente; Erklärungen und Übungen fokussieren auf Erkennen und Schutz der
 * Betroffenen, nie auf Anwendung. Evidenz-Tier moderate: Wirkaussagen nur so
 * stark wie Penney (2016) sie trägt, Kontextabhängigkeit offen benannt.
 * Es gilt Overlay-Schutz.
 */
export const censorshipChillingEffects: Technique = {
  id: 'censorship_chilling_effects',
  name: {
    de: 'Zensur & Chilling Effects',
    en: 'Censorship & Chilling Effects',
  },
  description: {
    de: 'Unterdrücken oder Entfernen von Informationen — und die abschreckende Wirkung (wahrgenommener) Überwachung oder angedrohter Sanktionen, die Menschen von legitimer Äußerung oder Informationssuche abhält, bis sie sich selbst zensieren.',
    en: 'Suppressing or removing information — and the deterrent effect of (perceived) surveillance or threatened sanctions that holds people back from legitimate expression or information-seeking until they self-censor.',
  },
  category: 'coercive_control',
  difficulty: 'advanced',
  effectiveness: 'high',
  examples: [
    'Interne Townhall eines Konzerns nach kritischen Wortmeldungen im anonymen Hinweisgeber-Kanal: Der Kommunikationschef stellt vor der Belegschaft klar, man werte künftig „aus, wer den Kanal wie nutzt", und Auffälligkeiten würden „nachgehalten". In den Wochen darauf brechen die Meldungen fast vollständig ein — auch Routine- und Compliance-Fragen bleiben aus, weil Beschäftigte eine Zuordnung zu ihrer Person fürchten.',
    'Konzern-Intranet nach einem Produktsicherheits-Rückruf: Die Pressestelle weist die Redaktion an, die bereits veröffentlichte Mitarbeiter-FAQ zum Rückruf offline zu nehmen und aus der internen Suche zu entfernen, damit die frühere Offenlegung nicht mehr auffindbar ist. Die Information wird nicht korrigiert oder aktualisiert, sondern unzugänglich gemacht.',
    'Nach einer sachlich-kritischen Bewertung auf einer Arbeitgeber-Plattform lässt die Rechtsabteilung eines Mittelständlers dem ehemaligen Mitarbeiter ein anwaltliches Unterlassungsschreiben zukommen und macht den Vorgang intern bekannt. In der Folge ziehen mehrere Beschäftigte geplante Bewertungen zurück und meiden das Thema — nicht wegen einer ausdrücklichen Regel, sondern aus Sorge, selbst ins Visier zu geraten.',
  ],
  evidence: {
    studies: [
      'Penney (2016) - Chilling Effects: Online Surveillance and Wikipedia Use',
    ],
    findings:
      'Penney (2016) zeigt in einer Zeitreihenanalyse, dass Zugriffe auf datenschutz- und sicherheitssensible Wikipedia-Artikel nach den NSA/PRISM-Enthüllungen von 2013 messbar zurückgingen — ein Beleg, dass wahrgenommene Überwachung legitime Informationssuche dämpfen kann (Chilling Effect). Die Befundlage stützt sich hier auf einzelne quasi-experimentelle Primärquellen; wie stark und wie breit der Effekt über Themen, Kanäle und Kulturen hinweg auftritt, ist offen (moderate Evidenz, hohe Kontextabhängigkeit).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Quasi-experimentelle Zeitreihe (Wikipedia-Zugriffe vor/nach 2013)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['data_voids_seo_manipulation', 'historical_narrative_control'],
  warningNeurons: [
    'Sichtbar gemachte Überwachung oder Protokollierung genau dort, wo unbequeme Äußerungen oder Recherchen entstehen',
    'Bereits veröffentlichte Informationen verschwinden oder werden unauffindbar gemacht, statt korrigiert oder eingeordnet zu werden',
    'Vereinzelte Sanktionen oder Unterlassungsdrohungen, die auffällig breit intern bekannt gemacht werden',
    'Beteiligung, Fragen oder Recherchen zu einem Thema brechen ein, ohne dass es eine ausdrückliche Verbotsregel gibt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
  seriousMode: true,
};
