import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: composition_division).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft nach Sprachcharta (docs/sprachcharta.md). Es gilt Overlay-Schutz.
 * evidenceTier 'weak' → keine starken Wirkbehauptungen, begrifflich/taxonomisch
 * geerdet. Kein seriousMode.
 */
export const compositionDivision: Technique = {
  id: 'composition_division',
  name: {
    de: 'Komposition/Division',
    en: 'Composition/Division',
  },
  description: {
    de: 'Ein Fehlschluss, der eine Eigenschaft unzulässig über die Grenze zwischen Teil und Ganzem überträgt: bei der Komposition von den Einzelteilen auf das Ganze („jeder Posten ist günstig, also ist das Paket günstig"), bei der Division umgekehrt vom Ganzen auf jedes Einzelteil („der Konzern ist Marktführer, also ist dieses Produkt das beste").',
    en: 'A fallacy that illicitly transfers a property across the part–whole boundary: composition reasons from the individual parts to the whole ("every line item is cheap, so the package is cheap"), while division runs the other way, from the whole to each part ("the group is the market leader, so this product must be the best").',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Budget-Freigabe für den Messeauftritt: Vor der Controllerin verteidigt der Projektleiter die sechsstellige Endsumme so: „Nehmen Sie die Kostenpositionen einzeln — Standbau, Catering, Give-aways: Jeder einzelne Posten für sich ist ein kleiner, günstiger Betrag. Und was sich ausschließlich aus lauter kleinen, günstigen Beträgen zusammensetzt, kann als Gesamtsumme nicht teuer sein." Dass sich gerade die schiere Zahl der vielen kleinen Posten zur hohen Endsumme aufaddiert, unterschlägt er.',
    'Vertriebs-Call mit einem Neukunden: Auf die Frage nach der Reife des frisch gelaunchten Einsteiger-Tarifs kontert der Account-Manager eines Security-Anbieters: „Unser Haus ist seit Jahren Marktführer für Unternehmenssicherheit — dann können Sie sich darauf verlassen, dass auch dieses neue Modul das sicherste Produkt seiner Klasse ist." Über das Modul selbst sagt der Ruf des Gesamtunternehmens nichts aus.',
    'Kickoff-Präsentation vor dem Lenkungskreis: Die Programmleiterin stellt das neue Krisenteam vor: „Wir haben für jede Rolle die anerkannt beste Fachkraft des Hauses gewonnen — ein Team aus lauter Spitzenkräften ist damit zwangsläufig das schlagkräftigste, das wir je aufgestellt haben." Ob die Einzelstars auch als Gruppe zusammenspielen, ist damit nicht gesagt.',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies (Stanford Encyclopedia of Philosophy)',
    ],
    findings: 'Komposition und Division sind in der Fehlschluss-Literatur seit der Antike als eigenständige informelle Fehlschlüsse beschrieben und klar definiert (Aristoteles; SEP/Hansen 2015). Es handelt sich um eine begriffliche und taxonomische Einordnung, nicht um quantifizierte Wirkungsforschung: Wie stark solche Teil-Ganzes-Schlüsse in realer Kommunikation tatsächlich überzeugen, ist empirisch nicht generell belegt (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Keine Wirkungsstudien (begriffliche/taxonomische Quelle)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['hasty_generalization'],
  warningNeurons: [
    'Ein Sprung von „jedes Einzelteil ist X" direkt zu „das Ganze ist X" (oder umgekehrt), ohne dass geprüft wird, ob die Eigenschaft auf beiden Ebenen überhaupt gilt',
    'Aggregierbare und nicht-aggregierbare Eigenschaften werden gleichgesetzt („günstig", „sicher", „leistungsstark" gälten für Teil und Ganzes selbstverständlich dasselbe)',
    'Der Ruf oder ein Kennwert des Gesamtunternehmens dient als Beleg für ein einzelnes Produkt, Team oder eine Person (Division)',
    'Signalformeln wie „ein Paket aus lauter …", „ein Team aus lauter …", „wenn schon jeder Teil …, dann erst recht das Ganze"',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
