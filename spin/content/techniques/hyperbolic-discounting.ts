import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: hyperbolic_discounting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const hyperbolicDiscounting: Technique = {
  id: 'hyperbolic_discounting',
  name: {
    de: 'Hyperbolische Diskontierung',
    en: 'Hyperbolic Discounting',
  },
  description: {
    de: 'Ein sofort verfügbarer Vorteil wird unverhältnismäßig stärker gewichtet als ein größerer, aber späterer — der ferne Nutzen wird steil abgewertet. Genutzt wird das, indem der Gewinn ins Jetzt und die Kosten ins Später gelegt werden („sofort nutzen, später zahlen").',
    en: 'A benefit available right now carries disproportionate weight over a larger one that arrives later — the distant payoff is discounted steeply. It is exploited by placing the gain in the present and the cost in the future ("use now, pay later").',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Checkout-Seite eines Möbel-Onlineshops: Der Conversion-Manager platziert unter dem 1.200-Euro-Sofa gut sichtbar „Heute 0 €, erste von 24 Raten in 90 Tagen" — der sofortige Besitz steht groß im Vordergrund, die in Summe höheren Ratenkosten erscheinen klein und weit weg.',
    'Beratungsgespräch zur privaten Altersvorsorge: Ein Berater einer Allfinanz-Vertriebsorganisation will den Kunden vom langfristigen Sparplan weglocken: „Was Sie heute auf dem Konto haben, ist real — die Rente in 30 Jahren ist weit weg und ungewiss. Nehmen Sie den Genuss jetzt mit." Der sofort verfügbare Betrag wird stark übergewichtet, der weit größere, aber ferne Sparerfolg abgewertet.',
    'Recruiting-Call einer Beratung mit einer umworbenen Kandidatin: Der Partner betont den sofort ausgezahlten Signing-Bonus von 15.000 Euro und lässt die über fünf Jahre deutlich niedrigere Gesamtvergütung im Hintergrund — er setzt darauf, dass die Kandidatin den greifbaren Bonus heute stärker gewichtet als das größere, aber verzögerte Gehaltspaket.',
  ],
  evidence: {
    studies: [
      'Laibson (1997) - Golden Eggs and Hyperbolic Discounting'
    ],
    findings: 'Laibson (1997) modelliert mit quasi-hyperbolischer Diskontierung, dass Menschen unmittelbar verfügbare Auszahlungen überproportional stärker gewichten als spätere und ihre Präferenzen über die Zeit inkonsistent umkehren — ein Muster, das in ökonomischen und psychologischen Experimenten breit repliziert ist. Die grundsätzliche Richtung (Gegenwartsübergewichtung) gilt als gut belegt; Effektgröße und Steilheit der Diskontierung schwanken jedoch stark nach Kontext, Betrag und Zeithorizont, und die Befunde stammen überwiegend aus WEIRD-Stichproben. Für die konkrete Kommunikationswirkung im Feld ist die Übertragbarkeit daher nur mit mittlerer Konfidenz zu behaupten (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Formales Modell plus breite experimentelle Literatur (überwiegend WEIRD)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['loss_aversion', 'scarcity', 'default_status_quo'],
  warningNeurons: [
    'Der Vorteil liegt betont im Jetzt, die Kosten werden auffällig weit in die Zukunft geschoben („heute gratis, später zahlen")',
    'Der ferne, größere Nutzen wird kleingeredet oder als „abstrakt/ungewiss" abgetan',
    'Ein Sofort-Anreiz (Bonus, Gratismonat, Direktrabatt) überstrahlt eine in Summe teurere Gesamtrechnung',
    'Die Entscheidung wird auf den Moment verengt — die Gesamtsumme über die Laufzeit wird nicht danebengestellt',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
