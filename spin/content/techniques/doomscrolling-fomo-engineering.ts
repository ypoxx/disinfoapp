import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: doomscrolling_fomo_engineering).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const doomscrollingFomoEngineering: Technique = {
  id: 'doomscrolling_fomo_engineering',
  name: {
    de: 'Doomscrolling / FOMO Engineering',
    en: 'Doomscrolling / FOMO Engineering',
  },
  description: {
    de: 'Aufmerksamkeitsdesign, das über negative Affekte bindet: Feeds ohne Endpunkt schieben Krisenmeldungen und soziale Vergleichssignale nach, Zähler und Hinweise rahmen Abwesenheit als Versäumnis („12 Updates verpasst"). Gehalten wird nicht mit Belohnung, sondern mit der Sorge, beim Wegsehen etwas zu verlieren — das unterscheidet das Muster von Gamification und anderen Engagement-Loops.',
    en: 'Attention design that binds through negative affect: feeds with no endpoint keep serving crisis updates and social-comparison cues, while counters and prompts frame absence as loss ("you missed 12 updates"). What holds users is not a reward but the worry that looking away will cost them — which is what sets this pattern apart from gamification and other engagement loops.',
  },
  category: 'digital_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Krisenmonitoring nach einem Produktrückruf: Das Gröbste ist überstanden, doch die App des Monitoring-Anbieters meldet sich bei der Pressesprecherin abends weiter im Alarmton: „Während du offline warst: 14 neue Erwähnungen, Tendenz negativ." Eine Tageszusammenfassung mit Entwarnung bietet die App nicht an, dafür die Push-Option „Keine kritische Erwähnung mehr verpassen" — und selbst Routinetreffer tragen ein rotes Risiko-Etikett. Die Sprecherin ertappt sich vor dem Schlafengehen beim Prüfen: nicht weil neue Inhalte locken, sondern weil sich jede Stunde ohne Blick in die App wie ein unbeobachtetes Risiko anfühlt.',
    'Feed eines Business-Netzwerks am Sonntagabend: Der PR-Berater will nur kurz den Beitrag eines Kunden prüfen. Der Algorithmus spielt ihm stattdessen Stellenabbau-Meldungen aus seiner Branche, „Fünf Kontakte haben heute etwas gepostet" und einen Trend-Kasten zu einer eskalierenden Agentur-Kontroverse zu — unter jedem Beitrag lädt der nächste, ein Ende ist nicht vorgesehen. Nach vierzig Minuten ist er angespannter als vorher und hat den Kundenbeitrag immer noch nicht geprüft.',
    'Branchen-News-App im Urlaub: Die Kommunikationsreferentin hat Abwesenheitsnotiz gesetzt — die App zählt trotzdem weiter: Der rote Zähler auf dem Icon springt auf 23, der Startscreen begrüßt sie mit „Das haben Sie verpasst", und im Ticker tragen auch Routinemeldungen das Label „Breaking". Wer öffnet, landet in einem automatisch nachladenden Strom, der bei jedem Aktualisieren oben neue Spitzenmeldungen einschiebt.',
  ],
  evidence: {
    studies: [
      'OECD (2022) - Dark Commercial Patterns',
      'European Commission (2022) - Behavioural Study on Dark Patterns',
    ],
    findings: 'Doomscrolling und FOMO-getriebenes Engagement-Design sind vor allem als Muster beschrieben, nicht als Wirkung vermessen: Politiknahe Bestandsaufnahmen wie der OECD-Bericht zu Dark Commercial Patterns (2022) und die EU-Verhaltensstudie zu Dark Patterns (2022) führen aufmerksamkeitsbindende Gestaltung als Problemfeld, ohne belastbare Effektstärken für einzelne Elemente zu liefern. Korrelationsstudien verbinden ausgedehnten Konsum negativer Nachrichten mit schlechterer Stimmung und höherer Anspannung, erlauben aber keine kausale Zuordnung zu Zählern, Verpasst-Hinweisen oder endlosem Nachladen. Wie stark solche Designelemente Verhalten tatsächlich verschieben, ist offen (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Policy-Berichte und Korrelationsstudien, keine Wirkexperimente zu einzelnen Designelementen',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['attention_engagement_loops', 'gamification_variable_reward', 'scarcity'],
  warningNeurons: [
    'Abwesenheit wird als Versäumnis gerahmt: Verpasst-Zähler, die nie auf null stehen, Startscreens mit „Das hast du verpasst", Push-Optionen gegen das Verpassen',
    'Der Feed hat kein vorgesehenes Ende: endloses Nachladen, Pull-to-Refresh, automatische Fortsetzung — ein „Du bist auf dem Stand"-Punkt fehlt',
    'Negativ gefärbte Inhalte und soziale Vergleichssignale werden gemischt und oben einsortiert; Routinemeldungen tragen Alarm-Etiketten wie „Breaking"',
    'Ehrlicher Rückblick nach der Nutzung: viel Anspannung, wenig neuer Informationsgewinn — das Weiterscrollen speiste sich aus Unruhe, nicht aus Nutzen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
