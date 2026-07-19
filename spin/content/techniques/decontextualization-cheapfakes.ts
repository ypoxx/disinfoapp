import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: decontextualization_cheapfakes).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const decontextualizationCheapfakes: Technique = {
  id: 'decontextualization_cheapfakes',
  name: {
    de: 'Dekontextualisierung / Cheapfakes',
    en: 'Decontextualization / Cheapfakes',
  },
  description: {
    de: 'Echtes, unverändertes Bild- oder Videomaterial wird durch falsche Beschriftung, einen neuen Kontext oder simple Eingriffe (Umschneiden, Zuschneiden, Tempo ändern) irreführend — ohne KI, im Unterschied zum Deepfake.',
    en: 'Real, unaltered images or video are made misleading through a false caption, a new context, or crude edits (recutting, cropping, changing speed) — without AI, unlike a deepfake.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Krisen-Kommunikation eines Energieversorgers: Auf einem reichweitenstarken Aktivisten-Account kursiert ein echtes, unbearbeitetes Foto einer Öl-Lache an einer Pipeline, betitelt als „Leck von gestern an unserem Werk". Die Pressestelle stellt fest: Das Bild ist unverändert, stammt aber von einem anderen Betreiber und ist sechs Jahre alt.',
    'Fraktions-Pressestelle prüft einen viralen Clip: Ein Gegenspieler verbreitet ein echtes Redevideo des Abgeordneten, um rund 20 Prozent verlangsamt, sodass er benommen und alkoholisiert wirkt. An den Bildern ist technisch nichts gefälscht — allein das gedrosselte Tempo erzeugt den Eindruck.',
    'Interne Faktencheck-Anfrage in einer NGO-Pressestelle: In sozialen Netzwerken wird ein echtes Pressefoto einer Demonstration so eng zugeschnitten geteilt, dass ein einzelnes aggressives Transparent den ganzen Zug zu repräsentieren scheint. Das Originalfoto zeigt eine überwiegend friedliche Kundgebung — nur der Ausschnitt erzeugt den falschen Eindruck.',
  ],
  evidence: {
    studies: [
      'Paris & Donovan (2019) - Deepfakes and Cheap Fakes: The Manipulation of Audio and Visual Evidence',
    ],
    findings: 'Paris & Donovan (2019) beschreiben Cheapfakes als taxonomische Kategorie: echtes Material wird durch Miskaptionierung, Rekontextualisierung oder einfache Schnitte täuschend, ganz ohne KI. Die Quelle ist deskriptiv; sie belegt Verbreitung und Vielfalt der Muster, quantifiziert aber keine Glaubens- oder Verhaltenswirkung. Wie stark solche Manipulationen im Einzelfall wirken, ist kontextabhängig und empirisch offen (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine (deskriptiv/taxonomisch, Paris & Donovan 2019)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  warningNeurons: [
    'Ein starkes Bild oder Video ohne überprüfbare Angabe von Ort, Datum und Anlass',
    'Die Bildunterschrift oder der Begleittext behauptet mehr, als das Material selbst zeigt',
    'Die Reverse-Bildersuche findet dasselbe Motiv älter oder in ganz anderem Zusammenhang',
    'Auffälliger Zuschnitt, Zeitraffer/Zeitlupe oder ein aus dem Zusammenhang gelöster Ausschnitt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
