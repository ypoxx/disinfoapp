import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: foot_in_the_door).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const footInTheDoor: Technique = {
  id: 'foot_in_the_door',
  name: {
    de: 'Foot-in-the-Door',
    en: 'Foot-in-the-Door',
  },
  description: {
    de: 'Compliance-Technik in zwei Zügen: Auf eine kleine, leicht zu gewährende erste Bitte folgt die eigentlich gewollte größere — wer der kleinen zugestimmt hat, soll aus dem Bedürfnis, zum eigenen Ja konsistent zu bleiben, auch die große gewähren.',
    en: 'A two-step compliance move: a small, easy-to-grant first request is followed by the larger one that was the real goal — having said yes to the small ask, the target is meant to stay consistent with that yes and grant the big one too.',
  },
  category: 'cognitive_bias',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Onboarding-Sequenz eines SaaS-Anbieters per E-Mail: Das Customer-Success-Team bittet die neue Nutzerin zuerst nur um ein Ein-Klick-Feedback zur Testphase („Wie war Ihr Start? Ein Klick genügt"). Wer geantwortet hat, erhält Tage später die eigentliche Bitte — ein 30-minütiges Referenz-Interview samt namentlichem Zitat für die Website: Das kleine Ja soll den Weg zum großen ebnen.',
    'Messegespräch am Standtisch: Der Vertriebsmitarbeiter bittet den Einkäufer zunächst nur, unverbindlich seine Visitenkarte für eine kurze Produktumfrage dazulassen. Wer zugestimmt hat, bekommt beim Nachfassanruf die eigentliche Bitte: einen Vor-Ort-Termin mit vierwöchiger Teststellung der Anlage — aufbauend darauf, dass ein erstes Ja das nächste leichter macht.',
    'Interne CSR-Initiative per Chat: Die Nachhaltigkeitsmanagerin bittet die Abteilungsleiter zuerst nur, ein Kampagnen-Badge in ihre E-Mail-Signatur zu setzen. Wer das sichtbar getan hat, wird zwei Wochen später gefragt, ob er sein Team für einen ganztägigen Freiwilligeneinsatz freistellt — die kleine, öffentliche Zusage soll die große wahrscheinlicher machen.',
  ],
  evidence: {
    studies: [
      'Freedman & Fraser (1966) - Compliance without pressure: The foot-in-the-door technique',
      'Burger (1999) - The Foot-in-the-Door Compliance Procedure: A Multiple-Process Analysis and Review'
    ],
    findings: 'Freedman und Fraser (1966) zeigten erstmals, dass Menschen einer größeren Bitte eher nachkommen, wenn sie zuvor einer kleinen, verwandten Bitte zugestimmt haben; als Mechanismus gilt vor allem das Bedürfnis, zum eigenen früheren Ja konsistent zu bleiben. Burgers (1999) Übersicht bestätigt den Effekt, beschreibt ihn aber als klein und stark von Bedingungen abhängig — Freiwilligkeit der ersten Zusage, Ähnlichkeit der Bitten, Zeitabstand —, sodass er sich nicht zuverlässig übertragen lässt. Die Befunde stammen überwiegend aus westlichen Stichproben (mittlere Evidenzsicherheit).',
    uncertainty: {
      confidence: 0.6,
      sampleSize: 'Klassische Feldexperimente + Übersichtsarbeit (Burger 1999)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['consistency', 'door_in_the_face'],
  warningNeurons: [
    'Die erste Bitte ist auffällig klein und leicht zu gewähren — ein „nur kurz", „ein Klick", „ganz unverbindlich"',
    'Dieselbe Seite kommt kurz nach deinem Ja mit einer deutlich größeren Bitte zurück',
    'Die zweite Bitte wird an dein früheres Ja geknüpft („Sie haben ja schon…", „dann passt das doch gut zusammen")',
    'Nach dem ersten Ja entsteht der Druck, konsistent zu bleiben und auch der großen Bitte zuzustimmen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
