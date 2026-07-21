import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: integrity_clash_laundering).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const integrityClashLaundering: Technique = {
  id: 'integrity_clash_laundering',
  name: {
    de: 'Integrity Clash / Provenance Laundering',
    en: 'Integrity Clash / Provenance Laundering',
  },
  description: {
    de: 'Ausnutzen von Lücken zwischen Herkunftsnachweisen (Provenance-Manifesten), Wasserzeichen und dem tatsächlichen Medieninhalt: Manipulierte oder synthetische Inhalte erwerben technisch gültige Echtheitssignale — oder streifen ihre KI-Kennzeichnung ab —, sodass Prüf-Tools Vertrauen anzeigen, das der Inhalt nicht verdient.',
    en: 'Exploiting gaps between provenance manifests, watermarks, and the actual media content: manipulated or synthetic media acquires technically valid authenticity signals — or sheds its AI labels — so that verification tools display trust the content has not earned.',
  },
  category: 'ai_influence',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Verifikations-Anfrage einer Nachrichtenagentur an die Leiterin Konzernkommunikation: Ein angebliches Unfallvideo vom Werksgelände kursiert, das Prüf-Tool der Agentur meldet „Content Credentials gültig, unbearbeitete Kameraaufnahme". Tatsächlich wurde der synthetische Clip von einem hochauflösenden Bildschirm mit einem signierenden Smartphone abgefilmt — das Herkunftsmanifest bezeugt wahrheitsgemäß nur die Neuaufnahme, nicht den Ursprung des Gezeigten.',
    'Krisenstab nach einem angeblichen Leak: Der Pressesprecher prüft ein viral gehendes Foto, das eine interne Präsentation zeigen soll; das Content-Credentials-Siegel ist kryptografisch intakt. Die Forensik ergibt: Die Urheber haben die Bildmontage vor der Verbreitung gezielt neu exportiert und damit die belastende Bearbeitungshistorie aus dem Manifest gewaschen — die beglaubigte Kette beginnt erst bei diesem harmlosen letzten Schritt, und das intakte Siegel bezeugt wahrheitsgemäß nur diesen Ausschnitt.',
    'Monitoring-Runde im Social-Media-Team während einer Übernahmedebatte: Ein KI-generiertes Statement-Video des Konkurrenz-CEO trägt nach mehrfachem Re-Encoding kein KI-Wasserzeichen mehr, der Plattform-Detektor meldet „kein KI-Inhalt erkannt" — im Team-Chat wird der unauffällige Befund bereits als Echtheitsbeleg weitergereicht.',
  ],
  evidence: {
    studies: [
      'Nemecek et al. (2026) - Authenticated Contradictions from Desynchronized Provenance and Watermarking',
      'Authenticity (2026) - C2PA Technical Specification v2.4',
      'Golaszewski et al. (2026) - Verifying Provenance of Digital Media: Why the C2PA Specifications Fall Short'
    ],
    findings: 'Die Evidenz ist technischer Natur: Nemecek et al. (2026) zeigen, dass desynchronisierte Provenance- und Wasserzeichen-Ebenen „authentifizierte Widersprüche" erzeugen können — Signale bezeugen dann formal eine Integrität, die dem Inhalt nicht zukommt. Die C2PA-Spezifikation v2.4 sichert Herkunftsdaten kryptografisch ab, beansprucht aber selbst keine semantische Echtheitsgarantie; unabhängige Kritik (Golaszewski et al. 2026, Preprint) hält diese Lücken für strukturell. Wie stark gewaschene Herkunftssignale das Urteil von Publikum oder Redaktionen tatsächlich verschieben, ist nicht untersucht — der Eintrag beschreibt technische Risiko-, keine psychologische Wirkungsevidenz (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Technische Analysen und Spezifikationen; keine Wirkungsstudien',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['identity_provenance_deception', 'synthetic_media'],
  warningNeurons: [
    'Ein grünes Prüf-Häkchen wird als Echtheitsbeweis für den Inhalt gelesen, obwohl es nur die unversehrte Signatur der Datei bestätigt',
    'Die Herkunftskette beginnt auffällig spät — bei einem Export oder einer Neuaufnahme statt beim behaupteten Ursprungsereignis',
    'Aufnahme-Metadaten passen nicht zum behaupteten Kontext, oder das Material zeigt Abfilm-Spuren (Moiré, Reflexe, beschnittene Ränder)',
    'Das Fehlen eines KI-Wasserzeichens oder ein unauffälliger Detektor-Befund wird aktiv als Beleg für Echtheit angeführt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
